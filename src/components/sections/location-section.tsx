'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { locationDistances } from '@/data/project';
import { trackEvent } from '@/lib/tracking';
import { siteConfig } from '@/config/site';

export function LocationSection() {
  return (
    <section id="vi-tri" className="bg-slate-50 py-20 md:py-28" onMouseEnter={() => trackEvent({ event: 'view_location', page_path: window.location.pathname, project_name: siteConfig.projectName })}>
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border bg-white shadow-xl"><Image src="/images/project/map.svg" alt="Bản đồ vị trí dự án và các kết nối khu vực" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div>
        <div>
          <SectionHeading eyebrow="Vị trí" title="Kết nối thuận tiện tới các tiện ích trọng điểm" description="Component Google Maps đã được chuẩn bị để đọc API key từ biến môi trường khi cần thay thế bản đồ placeholder." className="text-left" />
          <div className="mt-8 space-y-4">{locationDistances.map((item)=><div key={item.place} className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm"><span className="flex items-center gap-3 font-medium text-slate-800"><MapPin className="text-emerald-700" size={20}/>{item.place}</span><strong className="text-emerald-700">{item.distance}</strong></div>)}</div>
        </div>
      </Container>
    </section>
  );
}
