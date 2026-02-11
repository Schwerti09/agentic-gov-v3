import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as { priceId?: string };
  const priceId = body.priceId ?? process.env.STRIPE_PRICE_STARTER ?? '';
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ ok: false, error: 'Stripe not configured' }, { status: 200 });
  }
  if (!priceId) return NextResponse.json({ ok: false, error: 'Missing priceId' }, { status: 200 });

  const origin = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/dashboard?checkout=success`,
    cancel_url: `${origin}/pricing?checkout=cancel`,
  });
  return NextResponse.json({ ok: true, url: session.url }, { status: 200 });
}
