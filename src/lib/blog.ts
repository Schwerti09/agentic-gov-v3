import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

export type Post = { slug: string; title: string; date: string; excerpt: string; html: string };

const dir = path.join(process.cwd(), 'src', 'content', 'blog');

export async function listPosts(): Promise<Omit<Post, 'html'>[]> {
  const files = await fs.readdir(dir);
  const posts: Omit<Post, 'html'>[] = [];
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    const raw = await fs.readFile(path.join(dir, file), 'utf8');
    const { data, content } = matter(raw);
    posts.push({
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ''),
      excerpt: String(data.excerpt ?? content.slice(0, 140) + '…'),
    });
  }
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = path.join(dir, `${slug}.md`);
  try {
    const raw = await fs.readFile(file, 'utf8');
    const { data, content } = matter(raw);
    const html = marked.parse(content) as string;
    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ''),
      excerpt: String(data.excerpt ?? ''),
      html,
    };
  } catch {
    return null;
  }
}
