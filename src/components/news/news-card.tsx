import Image from 'next/image';
import Link from 'next/link';
import type { ArticleMeta } from '@/types';

export function NewsCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/tin-tuc/${article.slug}`} className="block">
        <div className="relative aspect-[4/3]"><Image src={article.image} alt={article.alt} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" /></div>
        <div className="p-5"><time className="text-xs font-semibold uppercase tracking-wide text-emerald-700" dateTime={article.date}>{new Intl.DateTimeFormat('vi-VN').format(new Date(article.date))}</time><h3 className="mt-3 text-xl font-semibold text-slate-950">{article.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{article.description}</p><span className="mt-5 inline-flex font-semibold text-emerald-700">Xem thêm</span></div>
      </Link>
    </article>
  );
}
