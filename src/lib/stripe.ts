import Stripe from 'stripe';

const key = process.env.STRIPE_SECRET_KEY ?? 'sk_test_dummy';
export const stripe = new Stripe(key, {
  apiVersion: '2024-06-20',
  typescript: true,
});
