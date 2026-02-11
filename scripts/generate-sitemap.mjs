import fs from 'node:fs';
import path from 'node:path';

const base = process.env.NEXT_PUBLIC_APP_URL || 'https://example.com';

const urls = ['/', '/pricing', '/features', '/blog', '/dashboard', '/tools/ai-act-checker', '/tools/iso-gap-analyzer'];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((u) => `  <url><loc>${base}${u}</loc></url>`)
  .join('\n')}\n</urlset>\n`;

const out = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, xml);
console.log('[generate-sitemap] wrote', out);
