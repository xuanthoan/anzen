import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { towers } from '@/data/towers';
import { getArticles } from '@/lib/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/gioi-thieu', '/vi-tri', '/tien-ich', '/thiet-ke', '/tin-tuc', '/lien-he', '/chinh-sach-bao-mat'];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: route === '' ? 1 : 0.8 })),
    ...towers.map((t) => ({ url: `${siteConfig.url}/thiet-ke/${t.id}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...getArticles().map((a) => ({ url: `${siteConfig.url}/tin-tuc/${a.slug}`, lastModified: new Date(a.date), changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];
}
