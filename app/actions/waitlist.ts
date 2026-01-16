"use server";

/**
 * Waitlist Server Actions - Direct-to-DB
 * Connects directly to PostgreSQL and sends emails via Resend
 */

import { query, queryOne } from "@/lib/db";
import { resend, FROM_EMAIL } from "@/lib/resend";
import WaitlistConfirmation from "@/emails/WaitlistConfirmation";

export type WaitlistResult = {
  success: boolean;
  position?: number;
  message: string;
  error?: string;
};

type WaitlistRow = {
  id: string;
  email: string;
  status: string;
  created_at: Date;
};

// Join waitlist - public endpoint
export async function joinWaitlist(email: string): Promise<WaitlistResult> {
  // Basic validation
  email = email?.toLowerCase().trim();
  if (!email || !email.includes("@") || email.length < 5) {
    return {
      success: false,
      message: "Invalid email address",
      error: "Please enter a valid email address",
    };
  }

  try {
    // Check if already exists
    const existing = await queryOne<WaitlistRow>(
      `SELECT id, status FROM waitlist WHERE LOWER(email) = $1`,
      [email]
    );

    if (existing) {
      // Already on waitlist
      const position = await getPosition(existing.id);
      return {
        success: true,
        position,
        message: "You're already on the waitlist!",
      };
    }

    // Insert new entry
    const rows = await query<WaitlistRow>(
      `INSERT INTO waitlist (email, status) 
       VALUES ($1, 'pending') 
       RETURNING id, email, status, created_at`,
      [email]
    );

    const entry = rows[0];
    if (!entry) {
      return {
        success: false,
        message: "Failed to join waitlist",
        error: "Database error",
      };
    }

    // Get queue position
    const position = await getPosition(entry.id);

    // Send confirmation email (async, don't block)
    sendConfirmationEmail(email, position).catch(console.error);

    return {
      success: true,
      position,
      message: `You're #${position} on the waitlist!`,
    };
  } catch (error) {
    console.error("Waitlist error:", error);
    return {
      success: false,
      message: "Something went wrong",
      error: "Please try again later",
    };
  }
}

// Get queue position
async function getPosition(id: string): Promise<number> {
  const result = await queryOne<{ position: string }>(
    `SELECT COUNT(*) + 1 as position 
     FROM waitlist 
     WHERE created_at < (SELECT created_at FROM waitlist WHERE id = $1)
     AND status = 'pending'`,
    [id]
  );
  return parseInt(result?.position || "1", 10);
}

// Send confirmation email via Resend
async function sendConfirmationEmail(email: string, position: number) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set, skipping email");
    return;
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "You're on the Echo waitlist! 🎉",
      react: WaitlistConfirmation({ position }),
    });
    console.log("Confirmation email sent to", email);
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
  }
}
