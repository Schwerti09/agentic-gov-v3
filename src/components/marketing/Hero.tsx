import Link from 'next/link';

export default function Hero() {
  return (
    <section className="glass rounded-3xl p-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 animate-float bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,204,136,0.25),transparent_45%)]" />
      <div className="relative space-y-5">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          EU AI Act & ISO 42001 – <span className="text-white/70">Compliance, aber automatisch.</span>
        </h1>
        <p className="text-white/70 max-w-2xl">
          Demo-SaaS mit RiskGraph3D, Agent-Workflows und Stripe/Supabase Hooks – läuft auch ohne echte Keys.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link className="btn-primary" href="/pricing">Pricing ansehen</Link>
          <Link className="btn-ghost" href="/dashboard">Dashboard öffnen</Link>
        </div>
      </div>
    </section>
  );
}
