import { HeroSection } from '@/components/sections/hero-section';
import { DeveloperIntroSection, BrandIntroSection } from '@/components/sections/intro-sections';
import { OverviewSection } from '@/components/sections/overview-section';
import { ProjectSection } from '@/components/sections/project-section';
import { LocationSection } from '@/components/sections/location-section';
import { AmenitiesSection } from '@/components/sections/amenities-section';
import { FloorPlanSection } from '@/components/sections/floor-plan-section';
import { NewsSection } from '@/components/sections/news-section';
import { ContactSection } from '@/components/sections/contact-section';
import { JsonLd } from '@/components/tracking/json-ld';
import { siteConfig } from '@/config/site';
import { projectFacts } from '@/data/project';

export default function Home() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ApartmentComplex', name: siteConfig.projectName, description: siteConfig.description, amenityFeature: projectFacts.map((f)=>({ '@type':'LocationFeatureSpecification', name:f.label, value:f.value })) }} />
      <HeroSection />
      <DeveloperIntroSection />
      <BrandIntroSection />
      <OverviewSection />
      <ProjectSection />
      <LocationSection />
      <AmenitiesSection category="external" />
      <AmenitiesSection category="internal" />
      <FloorPlanSection />
      <NewsSection />
      <ContactSection />
    </>
  );
}
