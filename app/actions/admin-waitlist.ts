"use server";

/**
 * Admin Waitlist Server Actions - Direct-to-DB
 * Protected actions for managing waitlist signups
 */

import { query, queryOne } from "@/lib/db";
import { resend, FROM_EMAIL } from "@/lib/resend";
import SovereigntyGranted from "@/emails/SovereigntyGranted";
import crypto from "crypto";

const ADMIN_SECRET = process.env.ADMIN_SECRET || "";

export type WaitlistEntry = {
  id: string;
  email: string;
  status: "pending" | "invited" | "joined";
  createdAt: string;
  invitedAt?: string;
  inviteCode?: string;
};

export type WaitlistStats = {
  totalSignups: number;
  pendingCount: number;
  invitedCount: number;
  joinedCount: number;
  signupsToday: number;
  signupsThisWeek: number;
};

export type ListWaitlistResult = {
  entries: WaitlistEntry[];
  totalCount: number;
  error?: string;
};

export type SendInviteResult = {
  success: boolean;
  inviteCode?: string;
  message: string;
  error?: string;
};

type WaitlistRow = {
  id: string;
  email: string;
  status: string;
  invite_code: string | null;
  created_at: Date;
  invited_at: Date | null;
};

type StatsRow = {
  total: string;
  pending: string;
  invited: string;
  joined: string;
  today: string;
  this_week: string;
};

// Check admin auth
function isAuthenticated(): boolean {
  return !!ADMIN_SECRET;
}

// List all waitlist entries
export async function listWaitlist(
  statusFilter?: string
): Promise<ListWaitlistResult> {
  if (!isAuthenticated()) {
    return { entries: [], totalCount: 0, error: "Unauthorized" };
  }

  try {
    let sql = `SELECT id, email, status, invite_code, created_at, invited_at 
               FROM waitlist`;
    const params: unknown[] = [];

    if (statusFilter && statusFilter !== "all") {
      sql += ` WHERE status = $1`;
      params.push(statusFilter);
    }

    sql += ` ORDER BY created_at DESC LIMIT 100`;

    const rows = await query<WaitlistRow>(sql, params);

    const entries: WaitlistEntry[] = rows.map((r) => ({
      id: r.id,
      email: r.email,
      status: r.status as "pending" | "invited" | "joined",
      createdAt: r.created_at.toISOString(),
      invitedAt: r.invited_at?.toISOString(),
      inviteCode: r.invite_code || undefined,
    }));

    // Get total count
    const countResult = await queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM waitlist`
    );

    return {
      entries,
      totalCount: parseInt(countResult?.count || "0", 10),
    };
  } catch (error) {
    console.error("List waitlist error:", error);
    return { entries: [], totalCount: 0, error: "Database error" };
  }
}

// Get waitlist stats
export async function getWaitlistStats(): Promise<WaitlistStats | null> {
  if (!isAuthenticated()) return null;

  try {
    const result = await queryOne<StatsRow>(`
      SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE status = 'pending') as pending,
        COUNT(*) FILTER (WHERE status = 'invited') as invited,
        COUNT(*) FILTER (WHERE status = 'joined') as joined,
        COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE) as today,
        COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '7 days') as this_week
      FROM waitlist
    `);

    if (!result) return null;

    return {
      totalSignups: parseInt(result.total, 10),
      pendingCount: parseInt(result.pending, 10),
      invitedCount: parseInt(result.invited, 10),
      joinedCount: parseInt(result.joined, 10),
      signupsToday: parseInt(result.today, 10),
      signupsThisWeek: parseInt(result.this_week, 10),
    };
  } catch (error) {
    console.error("Get stats error:", error);
    return null;
  }
}

// Send invite to a waitlist user
export async function sendInvite(waitlistId: string): Promise<SendInviteResult> {
  if (!isAuthenticated()) {
    return { success: false, message: "Unauthorized", error: "Unauthorized" };
  }

  try {
    // Get entry
    const entry = await queryOne<WaitlistRow>(
      `SELECT id, email, status FROM waitlist WHERE id = $1`,
      [waitlistId]
    );

    if (!entry) {
      return { success: false, message: "Not found", error: "Entry not found" };
    }

    if (entry.status === "invited") {
      return { success: false, message: "Already invited", error: "Already invited" };
    }

    // Generate invite code
    const inviteCode = crypto.randomBytes(4).toString("hex").toUpperCase();

    // Update status
    await query(
      `UPDATE waitlist 
       SET status = 'invited', invite_code = $2, invited_at = NOW() 
       WHERE id = $1`,
      [waitlistId, inviteCode]
    );

    // Send invite email
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: entry.email,
        subject: "[ECHO] Sovereignty Granted. Your invitation inside.",
        react: SovereigntyGranted({ inviteCode }),
      });
    }

    return {
      success: true,
      inviteCode,
      message: "Invitation sent!",
    };
  } catch (error) {
    console.error("Send invite error:", error);
    return { success: false, message: "Failed to send invite", error: "Server error" };
  }
}
