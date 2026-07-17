import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingActions } from '@/components/layout/floating-actions';
import { ConsentBanner, GoogleTagManager, GoogleTagManagerNoScript, TrackingBootstrap } from '@/components/tracking/trackers';
import { siteConfig } from '@/config/site';
import { absoluteUrl } from '@/lib/utils';

const inter = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.projectName, template: `%s | ${siteConfig.projectName}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: siteConfig.locale, url: siteConfig.url, siteName: siteConfig.name, title: siteConfig.projectName, description: siteConfig.description, images: [absoluteUrl(siteConfig.ogImage, siteConfig.url)] },
  twitter: { card: 'summary_large_image', title: siteConfig.projectName, description: siteConfig.description, images: [absoluteUrl(siteConfig.ogImage, siteConfig.url)] },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={inter.variable}>
      <body>
        <GoogleTagManagerNoScript />
        <GoogleTagManager />
        <TrackingBootstrap />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
        <ConsentBanner />
      </body>
    </html>
  );
}
