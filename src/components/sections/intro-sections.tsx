import Image from 'next/image';
import { Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { projectStats } from '@/data/project';

export function DeveloperIntroSection() {
  return (
    <section id="gioi-thieu" className="bg-white py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-emerald-50 shadow-xl"><Image src="/images/project/developer.svg" alt="Hình minh họa chủ đầu tư dự án" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
        <div>
          <SectionHeading eyebrow="Giới thiệu" title="Chủ đầu tư định hướng phát triển cộng đồng sống bền vững" description="Nội dung mẫu: dự án được phát triển với tiêu chí minh bạch, tiện ích toàn diện và vận hành chuyên nghiệp. Chủ website cần thay bằng thông tin pháp lý chính thức." className="text-left" />
          <div className="mt-8 grid grid-cols-2 gap-4">{projectStats.map((s)=><div key={s.label} className="rounded-3xl bg-slate-50 p-5"><p className="text-3xl font-bold text-emerald-700">{s.value}</p><p className="mt-2 text-sm text-slate-600">{s.label}</p></div>)}</div>
        </div>
      </Container>
    </section>
  );
}

export function BrandIntroSection() {
  const items = [{ icon: Leaf, title: 'Xanh', text: 'Tối ưu mảng xanh và thông gió tự nhiên.' }, { icon: ShieldCheck, title: 'An tâm', text: 'An ninh, vận hành và dịch vụ cư dân rõ ràng.' }, { icon: Sparkles, title: 'Tinh tế', text: 'Không gian sống hiện đại, dễ cá nhân hóa.' }];
  return (
    <section className="bg-emerald-950 py-20 text-white md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div><SectionHeading eyebrow="Dòng sản phẩm" title="Một chuẩn sống cân bằng cho cư dân đô thị" description="Thiết kế hướng tới trải nghiệm hằng ngày: đủ tiện ích, đủ riêng tư, đủ kết nối và đủ khoảng xanh để tái tạo năng lượng." className="text-left [&_h2]:text-white [&_p]:text-emerald-100" />
          <div className="mt-8 space-y-4">{items.map(({icon:Icon,...i})=><div key={i.title} className="flex gap-4 rounded-3xl bg-white/10 p-5"><Icon className="mt-1 text-amber-300"/><div><h3 className="font-semibold">{i.title}</h3><p className="mt-1 text-sm text-emerald-100">{i.text}</p></div></div>)}</div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-emerald-900"><Image src="/images/project/brand.svg" alt="Không gian sống xanh và tiện ích cộng đồng" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
      </Container>
    </section>
  );
}
