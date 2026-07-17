'use client';

import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { amenities } from '@/data/amenities';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { trackEvent } from '@/lib/tracking';

export function AmenitiesSection({ category = 'internal' }: { category?: 'internal' | 'external' | 'all' }) {
  const list = category === 'all' ? amenities : amenities.filter((a) => a.category === category);
  const [index, setIndex] = useState<number | null>(null);
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIndex(null); if (e.key === 'ArrowRight') setIndex((index + 1) % list.length); if (e.key === 'ArrowLeft') setIndex((index - 1 + list.length) % list.length); };
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, [index, list.length]);
  const title = category === 'external' ? 'Tiện ích ngoại khu liền kề' : 'Tiện ích nội khu dành riêng cho cư dân';
  return (
    <section id="tien-ich" className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Tiện ích" title={title} description="Gallery có lightbox, hỗ trợ bàn phím, nút đóng rõ ràng và alt text đầy đủ cho từng ảnh." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((item, i)=><button key={item.id} type="button" onClick={()=>{setIndex(i); trackEvent({event:'view_amenity', item_name:item.title, page_path:window.location.pathname});}} className="group overflow-hidden rounded-[1.75rem] bg-slate-50 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-300"><div className="relative aspect-[4/3]"><Image src={item.image} alt={item.alt} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition group-hover:scale-105" /></div><div className="p-5"><h3 className="text-lg font-semibold text-slate-950">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p></div></button>)}</div>
      </Container>
      {index !== null ? <div role="dialog" aria-modal="true" aria-label="Xem ảnh tiện ích" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"><button aria-label="Đóng ảnh" onClick={()=>setIndex(null)} className="absolute right-4 top-4 rounded-full bg-white p-3 text-slate-900"><X/></button><button aria-label="Ảnh trước" onClick={()=>setIndex((index - 1 + list.length) % list.length)} className="absolute left-4 rounded-full bg-white p-3 text-slate-900"><ChevronLeft/></button><div className="w-full max-w-5xl"><div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900"><Image src={list[index].image} alt={list[index].alt} fill sizes="100vw" className="object-contain" /></div><p className="mt-4 text-center text-white">{list[index].title}</p></div><button aria-label="Ảnh tiếp theo" onClick={()=>setIndex((index + 1) % list.length)} className="absolute right-4 rounded-full bg-white p-3 text-slate-900"><ChevronRight/></button></div> : null}
    </section>
  );
}
