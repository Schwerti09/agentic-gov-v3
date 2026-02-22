# KI Compliance Dominator 2026

Deploy-fertiges Next.js 15 Demo-SaaS: Marketing + Dashboard + Tools + Stripe/Supabase Hooks + 3D RiskGraph.

## Local
```bash
npm install
npm run dev
```

## Netlify Deployment

1. **Repository verbinden** – Netlify UI → *Add new site* → *Import an existing project* → dieses GitHub Repo auswählen.
2. **Build-Einstellungen** werden automatisch aus `netlify.toml` gelesen:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugin: `@netlify/plugin-nextjs`
3. **Umgebungsvariablen** (optional) – unter *Site configuration → Environment variables* eintragen (Vorlage: `.env.example`):
   | Variable | Beschreibung |
   |---|---|
   | `NEXT_PUBLIC_APP_URL` | Deine Netlify-URL, z. B. `https://your-site.netlify.app` |
   | `NEXT_PUBLIC_SUPABASE_URL` | Supabase Projekt-URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Anon Key |
   | `STRIPE_SECRET_KEY` | Stripe Secret Key |
   | `STRIPE_WEBHOOK_SECRET` | Stripe Webhook Secret |
   | `STRIPE_PRICE_STARTER` | Stripe Price ID für Starter-Plan |
   | `STRIPE_PRICE_PRO` | Stripe Price ID für Pro-Plan |
   | `STRIPE_PRICE_ENTERPRISE` | Stripe Price ID für Enterprise-Plan |
4. **Deploy** – Klick auf *Deploy site*. Die App läuft auch ohne Secrets im Demo-Modus.

### Stripe Webhook (optional)
`https://your-site.netlify.app/api/stripe/webhook` als Webhook-Endpoint in Stripe eintragen und `STRIPE_WEBHOOK_SECRET` setzen.
