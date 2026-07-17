export interface ProjectFact {
  label: string;
  value: string;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  category: 'internal' | 'external';
}

export interface Tower {
  id: 'toa-1' | 'toa-2' | 'toa-3';
  name: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  facts: ProjectFact[];
}

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  alt: string;
  category: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

export interface LeadPayload {
  fullName: string;
  phone: string;
  email?: string;
  message?: string;
  source?: string;
  campaign?: string;
  medium?: string;
  term?: string;
  content?: string;
  landingPage?: string;
  referrer?: string;
  gclid?: string;
  fbclid?: string;
}

export interface TrackingEventPayload {
  event: string;
  page_path?: string;
  placement?: string;
  project_name?: string;
  item_name?: string;
  tower_id?: string;
  [key: string]: string | number | boolean | undefined;
}
