import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { towers } from '@/data/towers';
import { Container } from '@/components/ui/container';
import { ContactSection } from '@/components/sections/contact-section';
import { FloorPlanSection } from '@/components/sections/floor-plan-section';

type Props = { params: Promise<{ tower: string }> };

export function generateStaticParams() { return towers.map((t) => ({ tower: t.id })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tower } = await params;
  const item = towers.find((t) => t.id === tower);
  if (!item) return {};
  return { title: item.title, description: item.description };
}

export default async function TowerPage({ params }: Props) {
  const { tower } = await params;
  const item = towers.find((t) => t.id === tower);
  if (!item) notFound();
  return (
    <>
      <div className="h-20 bg-emerald-950" />
      <section className="bg-white py-16 md:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Thiết kế</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">{item.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{item.description}</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">{item.facts.map((f)=><div key={f.label} className="rounded-2xl bg-slate-50 p-4"><dt className="text-xs uppercase text-slate-500">{f.label}</dt><dd className="mt-1 font-semibold text-slate-900">{f.value}</dd></div>)}</dl>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl"><Image src={item.image} alt={item.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" priority /></div>
        </Container>
      </section>
      <FloorPlanSection initialTowerId={item.id} />
      <ContactSection />
    </>
  );
}
