import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/contact-section';
import { Container } from '@/components/ui/container';
import { contactConfig } from '@/config/contact';

export const metadata: Metadata = { title: 'Liên hệ', description: 'Liên hệ tư vấn dự án và đăng ký nhận thông tin chính thức.' };
export default function ContactPage() { return <><div className="h-20 bg-emerald-950" /><section className="bg-white py-16"><Container><h1 className="text-4xl font-semibold text-slate-950">Liên hệ tư vấn</h1><p className="mt-4 text-slate-600">Hotline: {contactConfig.hotline} · Email: {contactConfig.email}</p></Container></section><ContactSection /></>; }
