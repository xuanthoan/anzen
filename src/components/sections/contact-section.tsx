import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { LeadForm } from '@/components/forms/lead-form';
import { contactConfig } from '@/config/contact';

export function ContactSection() {
  return (
    <section id="dang-ky" className="bg-emerald-950 py-20 text-white md:py-28">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="Liên hệ" title="Đăng ký nhận tư vấn và tài liệu dự án" description="Đội ngũ tư vấn sẽ liên hệ theo thông tin bạn cung cấp. Không gửi họ tên, số điện thoại, email vào hệ thống tracking." className="text-left [&_h2]:text-white [&_p]:text-emerald-100" />
          <div className="mt-8 rounded-3xl bg-white/10 p-6 text-sm leading-7 text-emerald-50">
            <p><strong>Hotline:</strong> {contactConfig.hotline}</p>
            <p><strong>Email:</strong> {contactConfig.email}</p>
            <p><strong>Giờ làm việc:</strong> {contactConfig.businessHours}</p>
          </div>
        </div>
        <LeadForm source="home_contact_section" />
      </Container>
    </section>
  );
}
