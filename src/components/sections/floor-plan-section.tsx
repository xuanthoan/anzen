'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { towers, masterPlan } from '@/data/towers';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { trackEvent } from '@/lib/tracking';

export function FloorPlanSection({ initialTowerId }: { initialTowerId?: string }) {
  const [active, setActive] = useState(initialTowerId || towers[0].id);
  const tower = towers.find((t) => t.id === active) || towers[0];
  return (
    <section id="thiet-ke" className="bg-slate-50 py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Thiết kế" title="Mặt bằng tổng thể và từng tòa" description={masterPlan.description} />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-4 shadow-xl"><div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]"><Image src={masterPlan.image} alt={masterPlan.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div></div>
          <div className="rounded-[2rem] bg-white p-5 shadow-xl">
            <div role="tablist" aria-label="Chọn tòa" className="grid grid-cols-3 gap-2">{towers.map((t)=><button key={t.id} role="tab" aria-selected={active===t.id} onClick={()=>{setActive(t.id); trackEvent({event:'select_tower', tower_id:t.id, item_name:t.name, page_path:window.location.pathname});}} className={`rounded-full px-3 py-3 text-sm font-semibold ${active===t.id?'bg-emerald-700 text-white':'bg-slate-100 text-slate-700'}`}>{t.name}</button>)}</div>
            <div className="mt-6 relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100"><Image src={tower.image} alt={tower.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div>
            <h3 className="mt-6 text-2xl font-semibold text-slate-950">{tower.title}</h3><p className="mt-3 leading-7 text-slate-600">{tower.description}</p>
            <dl className="mt-5 grid gap-3 sm:grid-cols-3">{tower.facts.map((f)=><div key={f.label} className="rounded-2xl bg-slate-50 p-4"><dt className="text-xs uppercase text-slate-500">{f.label}</dt><dd className="mt-1 font-semibold text-slate-900">{f.value}</dd></div>)}</dl>
            <Link href={`/thiet-ke/${tower.id}`} className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">Xem chi tiết {tower.name}</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
