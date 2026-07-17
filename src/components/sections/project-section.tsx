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
          <p className="mt-6 leading-8 text-slate-600">Nội dung hiện là bản mẫu để đội marketing có thể thay thế. Kiến trúc dữ liệu và component đã chuẩn bị để mở rộng sang CMS hoặc hệ thống quản trị nội dung sau này.</p>
          <ButtonLink href="#dang-ky" className="mt-8">Đăng ký nhận bảng giá</ButtonLink>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl"><Image src="/images/project/project-video.svg" alt="Video hoặc phối cảnh giới thiệu dự án" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></div>
      </Container>
    </section>
  );
}
