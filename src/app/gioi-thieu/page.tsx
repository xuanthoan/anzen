import type { Metadata } from 'next';
import { DeveloperIntroSection, BrandIntroSection } from '@/components/sections/intro-sections';
import { ProjectSection } from '@/components/sections/project-section';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = { title: 'Giới thiệu dự án', description: 'Giới thiệu chủ đầu tư, định hướng phát triển và phong cách sống của dự án.' };

export default function AboutPage() {
  return <><div className="h-20 bg-emerald-950" /><DeveloperIntroSection /><BrandIntroSection /><ProjectSection /><ContactSection /></>;
}
