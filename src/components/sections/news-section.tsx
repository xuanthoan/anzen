import { getArticles } from '@/lib/news';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { NewsCard } from '@/components/news/news-card';
import { ButtonLink } from '@/components/ui/button-link';

export function NewsSection() {
  const articles = getArticles().slice(0, 3);
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Tin tức" title="Cập nhật thông tin dự án và thị trường" description="Dữ liệu ban đầu dùng Markdown trong repository, dễ chuyển sang headless CMS sau này." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">{articles.map((a)=><NewsCard key={a.slug} article={a}/>)}</div>
        <div className="mt-10 text-center"><ButtonLink href="/tin-tuc">Xem tất cả tin tức</ButtonLink></div>
      </Container>
    </section>
  );
}
