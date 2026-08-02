import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { ButtonLink } from '@/components/ui/button-link';

export function ProjectSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading eyebrow="Dự án" title="Một đô thị thu nhỏ với nhịp sống tiện nghi" description="Không gian sống được tổ chức theo từng lớp trải nghiệm: sảnh đón, thương mại dịch vụ, lõi cảnh quan, tiện ích sức khỏe và các căn hộ tối ưu công năng." className="text-left" />
          <p className="mt-6 leading-8 text-slate-600">An Zen Residences mang đến 887 căn hộ EHome với thiết kế tối ưu công năng, 3 block 18 tầng hiện đại cùng hệ thống tiện ích xanh đồng bộ. Dự án được phát triển bởi Nam Long Group - thương hiệu bất động sản uy tín, mang đến môi trường sống an lành và kết nối cộng đồng.</p>
          <ButtonLink href="#dang-ky" className="mt-8">Đăng ký nhận bảng giá</ButtonLink>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl"><Image src="/images/project/project-video.jpg" alt="Video hoặc phối cảnh giới thiệu dự án" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></div>
      </Container>
    </section>
  );
}
