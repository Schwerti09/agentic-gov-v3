import Link from 'next/link';
import { listPosts } from '@/lib/blog';

export default async function BlogPreview(){
  const posts = (await listPosts()).slice(0,3);
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold">Blog</h2>
        <Link className="text-sm text-white/60 hover:text-white" href="/blog">Alle Posts →</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p=>(
          <Link key={p.slug} href={`/blog/${p.slug}`} className="glass rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="text-xs text-white/60">{p.date}</div>
            <div className="font-semibold mt-1">{p.title}</div>
            <div className="text-sm text-white/70 mt-2 line-clamp-3">{p.excerpt}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
