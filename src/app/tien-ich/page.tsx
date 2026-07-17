import type { Metadata } from 'next';
import { AmenitiesSection } from '@/components/sections/amenities-section';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = { title: 'Tiện ích', description: 'Tiện ích nội khu và ngoại khu của dự án bất động sản.' };
export default function AmenitiesPage() { return <><div className="h-20 bg-emerald-950" /><AmenitiesSection category="external" /><AmenitiesSection category="internal" /><ContactSection /></>; }
