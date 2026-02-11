import fs from 'node:fs';
import path from 'node:path';

function ensure(file, content){
  const p = path.join(process.cwd(), file);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  if (!fs.existsSync(p)) fs.writeFileSync(p, content);
}

ensure('public/robots.txt', 'User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n');

console.log('[bootstrap-assets] ok');
