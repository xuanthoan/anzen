import Image from 'next/image';
import { heroSlides } from '@/data/project';
import { ButtonLink } from '@/components/ui/button-link';

export function HeroSection() {
  const slide = heroSlides[0];
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-slate-950 pt-20 text-white md:min-h-screen">
      <picture>
        <source media="(max-width: 640px)" srcSet={slide.mobile} />
        <Image src={slide.desktop} alt={slide.alt} fill priority sizes="100vw" className="object-cover" />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-emerald-900/25" />
      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Căn hộ xanh thế hệ mới</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-7xl">{slide.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">{slide.description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row"><ButtonLink href="#dang-ky">Nhận tư vấn dự án</ButtonLink><ButtonLink href="#tong-quan" className="bg-white text-slate-950 hover:bg-slate-100">Xem tổng quan</ButtonLink></div>
        </div>
      </div>
    </section>
  );
}
