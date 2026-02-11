import Link from 'next/link';
import Hero from '@/components/marketing/Hero';
import FeaturesGrid from '@/components/marketing/FeaturesGrid';
import PricingPreview from '@/components/marketing/PricingPreview';
import BlogPreview from '@/components/marketing/BlogPreview';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturesGrid />
      <PricingPreview />
      <BlogPreview />
      <div className="glass rounded-2xl p-8 flex items-center justify-between">
        <div>
          <div className="text-xl font-bold">Jetzt starten</div>
          <p className="text-white/70">Demo-Dashboard öffnen und RiskGraph3D live sehen.</p>
        </div>
        <Link className="btn-primary" href="/dashboard">Zum Dashboard</Link>
      </div>
    </div>
  );
}
