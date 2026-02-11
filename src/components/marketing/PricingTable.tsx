'use client';

import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

type Plan = { name: string; price: string; priceIdEnv: string; bullets: string[]; popular?: boolean };

const plans: Plan[] = [
  { name: 'Starter', price: '€199 / Monat', priceIdEnv: 'STRIPE_PRICE_STARTER', bullets: ['1 Org', '3 Systeme', 'EU AI Act Quickscan'] },
  { name: 'Pro', price: '€499 / Monat', priceIdEnv: 'STRIPE_PRICE_PRO', bullets: ['5 Orgs', '20 Systeme', 'ISO 42001 Gap', 'Agent Workspace'], popular: true },
  { name: 'Enterprise', price: '€2.499 / Monat', priceIdEnv: 'STRIPE_PRICE_ENTERPRISE', bullets: ['Unlimited', 'SLA', 'Audit Reports', 'Custom Integrations'] },
];

async function startCheckout(priceId: string) {
  const res = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ priceId }) });
  const json = (await res.json()) as { ok: boolean; url?: string; error?: string };
  if (!json.ok || !json.url) {
    toast.error(json.error ?? 'Checkout nicht verfügbar (Demo ohne Stripe-Keys).');
    return;
  }
  window.location.href = json.url;
}

export default function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((p) => (
        <div key={p.name} className={`glass rounded-2xl p-6 ${p.popular ? 'ring-2 ring-white/20 shadow-glow' : ''}`}>
          <div className="text-lg font-bold">{p.name}</div>
          <div className="text-3xl font-black mt-2">{p.price}</div>
          <ul className="mt-4 space-y-2 text-white/70 text-sm">
            {p.bullets.map((b) => <li key={b}>• {b}</li>)}
          </ul>
          <Button className="mt-6 w-full" onClick={() => startCheckout((process.env[p.priceIdEnv as keyof typeof process.env] as string) ?? '')}>
            Starten
          </Button>
        </div>
      ))}
    </div>
  );
}
