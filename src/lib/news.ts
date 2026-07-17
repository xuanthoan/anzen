import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Article, ArticleMeta } from '@/types';

const dir = path.join(process.cwd(), 'content/news');

export function getNewsSlugs() {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));
}

export function getArticle(slug: string): Article | null {
  const file = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return { slug, content, ...(data as Omit<ArticleMeta, 'slug'>) };
}

export function getArticles(): ArticleMeta[] {
  return getNewsSlugs()
    .map((slug) => getArticle(slug))
    .filter((a): a is Article => Boolean(a))
    .map((article) => {
      const { content, ...meta } = article;
      void content;
      return meta;
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
