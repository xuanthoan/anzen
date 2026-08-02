import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { NewsCard } from '@/components/news/news-card';
import { getArticles } from '@/lib/news';

export const metadata: Metadata = { title: 'Tin tức', description: 'Danh sách tin tức, cập nhật dự án và bài viết tư vấn bất động sản.' };

export default function NewsPage() {
  const articles = getArticles();
  return (
    <><div className="h-20 bg-emerald-950" /><section className="bg-slate-50 py-20 md:py-28"><Container><SectionHeading eyebrow="Tin tức" title="Tin tức & cập nhật" description="Cập nhật tin tức dự án, thông tin thị trường bất động sản và bài viết tư vấn chuyên sâu." /><div className="mt-12 grid gap-6 md:grid-cols-3">{articles.map((a)=><NewsCard key={a.slug} article={a}/>)}</div></Container></section></>
  );
}
