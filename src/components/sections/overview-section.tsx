import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { projectFacts } from '@/data/project';

export function OverviewSection() {
  return (
    <section id="tong-quan" className="bg-slate-50 py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Tổng quan" title="Thông tin dự án được quản lý tập trung" description="Toàn bộ thông tin bên dưới lấy từ file dữ liệu riêng để dễ chỉnh sửa khi cập nhật nội dung thật." />
        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl md:grid-cols-2">
          {projectFacts.map((fact) => <div key={fact.label} className="flex flex-col gap-2 border-b border-slate-100 p-6 md:flex-row md:items-start md:justify-between md:gap-8 odd:md:border-r"><dt className="text-sm font-semibold uppercase tracking-wide text-emerald-700">{fact.label}</dt><dd className="text-base font-medium text-slate-800 md:text-right">{fact.value}</dd></div>)}
        </div>
      </Container>
    </section>
  );
}
