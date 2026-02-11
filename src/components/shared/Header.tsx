import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur">
      <div className="container py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-bold tracking-tight">
          KI Compliance Dominator <span className="text-white/50">2026</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link className="hover:opacity-80" href="/features">Features</Link>
          <Link className="hover:opacity-80" href="/pricing">Pricing</Link>
          <Link className="hover:opacity-80" href="/blog">Blog</Link>
          <Link className="btn-ghost" href="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}
