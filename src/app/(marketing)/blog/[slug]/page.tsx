import { getPost } from '@/lib/blog';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{post.title}</h1>
      <p className="opacity-70">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
