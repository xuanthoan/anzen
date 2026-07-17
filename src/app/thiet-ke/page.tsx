import type { Metadata } from 'next';
import { FloorPlanSection } from '@/components/sections/floor-plan-section';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = { title: 'Thiết kế mặt bằng', description: 'Mặt bằng tổng thể, tabs tòa 1, tòa 2 và tòa 3 của dự án.' };
export default function DesignPage() { return <><div className="h-20 bg-emerald-950" /><FloorPlanSection /><ContactSection /></>; }
