"use client";

import { useEffect, useState, useTransition } from "react";
import {
  listWaitlist,
  getWaitlistStats,
  sendInvite,
  type WaitlistEntry,
  type WaitlistStats,
} from "@/app/actions/admin-waitlist";
import {
  Users,
  Clock,
  Send,
  CheckCircle,
  TrendingUp,
  Loader2,
  Mail,
} from "lucide-react";

export default function WaitlistDashboard() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [stats, setStats] = useState<WaitlistStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();
  const [sendingId, setSendingId] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [listResult, statsResult] = await Promise.all([
        listWaitlist(),
        getWaitlistStats(),
      ]);
      setEntries(listResult.entries || []);
      setStats(statsResult);
      setLoading(false);
    }
    loadData();
  }, []);

  const handleSendInvite = (id: string) => {
    setSendingId(id);
    startTransition(async () => {
      const result = await sendInvite(id);
      if (result.success) {
        // Update local state
        setEntries((prev) =>
          prev.map((e) =>
            e.id === id ? { ...e, status: "invited" as const, inviteCode: result.inviteCode } : e
          )
        );
        if (stats) {
          setStats({
            ...stats,
            pendingCount: stats.pendingCount - 1,
            invitedCount: stats.invitedCount + 1,
          });
        }
      }
      setSendingId(null);
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-zinc-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Waitlist</h1>
        <p className="text-zinc-400">Manage signups and send early access invites.</p>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={<Users className="w-5 h-5" />}
            label="Total Signups"
            value={stats.totalSignups}
            color="blue"
          />
          <StatCard
            icon={<Clock className="w-5 h-5" />}
            label="Pending"
            value={stats.pendingCount}
            color="yellow"
          />
          <StatCard
            icon={<Send className="w-5 h-5" />}
            label="Invited"
            value={stats.invitedCount}
            color="purple"
          />
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            label="Today"
            value={stats.signupsToday}
            color="green"
          />
        </div>
      )}

      {/* Data Table */}
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                  Joined
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                  Invite Code
                </th>
                <th className="px-6 py-4 text-right text-sm font-medium text-zinc-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr
                  key={entry.id}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-zinc-400" />
                      </div>
                      <span className="text-white text-sm">{entry.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={entry.status} />
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-400">
                    {formatDate(entry.createdAt)}
                  </td>
                  <td className="px-6 py-4">
                    {entry.inviteCode ? (
                      <code className="text-xs bg-white/10 px-2 py-1 rounded text-zinc-300">
                        {entry.inviteCode}
                      </code>
                    ) : (
                      <span className="text-zinc-600">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {entry.status === "pending" && (
                      <button
                        onClick={() => handleSendInvite(entry.id)}
                        disabled={isPending && sendingId === entry.id}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[oklch(0.65_0.18_220)] hover:bg-[oklch(0.55_0.18_220)] text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50"
                      >
                        {isPending && sendingId === entry.id ? (
                          <Loader2 className="w-3 h-3 animate-spin" />
                        ) : (
                          <Send className="w-3 h-3" />
                        )}
                        Invite
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {entries.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-zinc-500">
                    No waitlist signups yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: "blue" | "yellow" | "purple" | "green";
}) {
  const colorClasses = {
    blue: "bg-blue-500/20 text-blue-400",
    yellow: "bg-yellow-500/20 text-yellow-400",
    purple: "bg-purple-500/20 text-purple-400",
    green: "bg-green-500/20 text-green-400",
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg ${colorClasses[color]}`}>{icon}</div>
      </div>
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-zinc-400">{label}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: "pending" | "invited" | "joined" }) {
  const styles = {
    pending: "bg-yellow-500/20 text-yellow-400",
    invited: "bg-purple-500/20 text-purple-400",
    joined: "bg-green-500/20 text-green-400",
  };

  const icons = {
    pending: <Clock className="w-3 h-3" />,
    invited: <Send className="w-3 h-3" />,
    joined: <CheckCircle className="w-3 h-3" />,
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {icons[status]}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}
