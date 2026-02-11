import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import type Stripe from 'stripe';

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature') ?? '';
  const secret = process.env.STRIPE_WEBHOOK_SECRET ?? '';

  const rawBody = await req.text();

  if (!process.env.STRIPE_SECRET_KEY || !secret) {
    // In Demo mode we still return 200 so deploy & health checks don't fail.
    return NextResponse.json({ received: true, demo: true }, { status: 200 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, secret);
  } catch (err) {
    return NextResponse.json({ received: false }, { status: 400 });
  }

  // Handle key event types (safe no-op for demo)
  switch (event.type) {
    case 'checkout.session.completed':
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      break;
    default:
      break;
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

export const runtime = 'nodejs';
