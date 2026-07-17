import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contactConfig } from '@/config/contact';
import { siteConfig, navigation } from '@/config/site';
import { Container } from '@/components/ui/container';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-2xl font-semibold">{siteConfig.projectName}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">Website mẫu dùng placeholder. Chủ dự án cần cập nhật thông tin pháp lý, giấy phép, hình ảnh và nội dung chính thức trước khi công bố.</p>
        </div>
        <div>
          <p className="font-semibold">Liên hệ</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex gap-2"><Phone size={16}/><a href={contactConfig.hotlineHref}>{contactConfig.hotline}</a></li>
            <li className="flex gap-2"><Mail size={16}/><a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a></li>
            <li className="flex gap-2"><MapPin size={16}/><span>{contactConfig.address}</span></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Liên kết</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">{navigation.map((n)=><li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}<li><Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link></li></ul>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">© {new Date().getFullYear()} {siteConfig.projectName}. All rights reserved. Nội dung đang là bản demo.</div>
    </footer>
  );
}
