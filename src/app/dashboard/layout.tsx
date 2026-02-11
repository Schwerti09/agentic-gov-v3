import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-[260px_1fr] gap-8">
      <aside className="glass rounded-2xl p-5 h-fit sticky top-6">
        <div className="font-bold text-lg">Dominator</div>
        <nav className="mt-4 space-y-2 text-sm">
          <Link className="block hover:opacity-80" href="/dashboard">Übersicht</Link>
          <Link className="block hover:opacity-80" href="/dashboard/compliance-center">Compliance Center</Link>
          <Link className="block hover:opacity-80" href="/dashboard/agent-workspace">Agent Workspace</Link>
          <Link className="block hover:opacity-80" href="/tools/ai-act-checker">EU AI Act Checker</Link>
          <Link className="block hover:opacity-80" href="/tools/iso-gap-analyzer">ISO 42001 Gap</Link>
        </nav>
      </aside>
      <section className="min-w-0">{children}</section>
    </div>
  );
}
