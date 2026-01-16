import { redirect } from "next/navigation";

// Simple admin auth check - redirect if not authenticated
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check for admin secret in environment
  const isAdmin = !!process.env.ADMIN_SECRET;

  if (!isAdmin) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-white font-bold text-xl">Echo</span>
            <span className="text-zinc-500 text-sm">Admin Dashboard</span>
          </div>
          <a
            href="/"
            className="text-zinc-400 hover:text-white transition-colors text-sm"
          >
            ← Back to Site
          </a>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
