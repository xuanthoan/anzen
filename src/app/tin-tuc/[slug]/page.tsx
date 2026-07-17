import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { getArticle, getNewsSlugs } from '@/lib/news';
import { JsonLd } from '@/components/tracking/json-ld';
import { siteConfig } from '@/config/site';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return getNewsSlugs().map((slug) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const article = getArticle(slug); if (!article) return {}; return { title: article.title, description: article.description, openGraph: { title: article.title, description: article.description, images: [article.image] } }; }

function markdownToHtml(markdown: string) {
  return markdown
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>')
    .replace(/<p><h/g, '<h')
    .replace(/<\/h2><\/p>/g, '</h2>');
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description, image: article.image, datePublished: article.date, author: { '@type': 'Organization', name: siteConfig.name } }} />
      <div className="h-20 bg-emerald-950" />
      <article className="bg-white py-16 md:py-24">
        <Container className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{article.category}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">{article.title}</h1>
          <time className="mt-5 block text-slate-500" dateTime={article.date}>{new Intl.DateTimeFormat('vi-VN').format(new Date(article.date))}</time>
          <div className="relative mt-10 aspect-video overflow-hidden rounded-[2rem] bg-slate-100"><Image src={article.image} alt={article.alt} fill sizes="100vw" className="object-cover" priority /></div>
          <div className="prose mt-10 max-w-none" dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }} />
        </Container>
      </article>
    </>
  );
}
