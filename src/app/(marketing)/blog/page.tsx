import Link from 'next/link';
import { listPosts } from '@/lib/blog';

export default async function BlogIndex(){
  const posts = await listPosts();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(p=>(
          <Link key={p.slug} href={`/blog/${p.slug}`} className="glass rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="text-sm text-white/60">{p.date}</div>
            <div className="text-xl font-semibold mt-1">{p.title}</div>
            <p className="text-white/70 mt-2 line-clamp-3">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
