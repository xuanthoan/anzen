import type { Metadata } from 'next';
import { LocationSection } from '@/components/sections/location-section';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = { title: 'Vị trí', description: 'Vị trí dự án và kết nối tới các tiện ích trọng điểm trong khu vực.' };
export default function LocationPage() { return <><div className="h-20 bg-emerald-950" /><LocationSection /><ContactSection /></>; }
