/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async headers() {
    const cspProd =
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' https://js.stripe.com https://www.googletagmanager.com https://www.google-analytics.com; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "img-src 'self' data: https: blob:; " +
      "font-src 'self' https://fonts.gstatic.com data:; " +
      "connect-src 'self' https://api.stripe.com https://checkout.stripe.com https://*.supabase.co https://www.google-analytics.com; " +
      "frame-src 'self' https://js.stripe.com https://hooks.stripe.com; " +
      "worker-src 'self' blob:; " +
      "manifest-src 'self';";
    const cspDev =
      "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https:;";

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Content-Security-Policy', value: process.env.NODE_ENV === 'production' ? cspProd : cspDev },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
