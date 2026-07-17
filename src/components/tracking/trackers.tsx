'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { trackingConfig, isValidTrackingId } from '@/config/tracking';
import { captureUtmParams } from '@/lib/utm';
import { trackEvent } from '@/lib/tracking';

function hasConsent() {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('cookie_consent') === 'accepted';
}

export function GoogleTagManager() {
  const [allowed, setAllowed] = useState(false);
  const gtmId = trackingConfig.gtmId;
  useEffect(() => {
    const updateAllowed = () => setAllowed(trackingConfig.enabledByDefault && (!trackingConfig.consentRequired || hasConsent()));
    queueMicrotask(updateAllowed);
    window.addEventListener('consent-changed', updateAllowed);
    return () => window.removeEventListener('consent-changed', updateAllowed);
  }, []);
  if (!allowed || !isValidTrackingId(gtmId, 'GTM-')) return null;
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
    </Script>
  );
}

export function GoogleTagManagerNoScript() {
  const gtmId = trackingConfig.gtmId;
  if (!trackingConfig.enabledByDefault || !isValidTrackingId(gtmId, 'GTM-')) return null;
  return <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" /></noscript>;
}

export function TrackingBootstrap() {
  useEffect(() => {
    captureUtmParams();
    trackEvent({ event: 'page_view', page_path: window.location.pathname });
    const marks = new Set<number>();
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const pct = Math.round((window.scrollY / total) * 100);
      if (pct >= 50 && !marks.has(50)) { marks.add(50); trackEvent({ event: 'scroll_50', page_path: window.location.pathname }); }
      if (pct >= 90 && !marks.has(90)) { marks.add(90); trackEvent({ event: 'scroll_90', page_path: window.location.pathname }); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return null;
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    queueMicrotask(() => setVisible(!localStorage.getItem('cookie_consent')));
  }, []);
  const choose = (value: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie_consent', value);
    window.dispatchEvent(new Event('consent-changed'));
    setVisible(false);
  };
  if (!visible) return <button type="button" onClick={() => setVisible(true)} className="fixed bottom-4 left-4 z-40 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow">Cookie</button>;
  return (
    <div role="dialog" aria-live="polite" className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl">
      <h2 className="text-lg font-semibold text-slate-950">Quyền riêng tư & cookie</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">Chúng tôi dùng cookie cần thiết để vận hành website. Tracking/marketing chỉ tải khi bạn đồng ý. Bạn có thể thay đổi lựa chọn bằng nút Cookie.</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button className="min-h-11 rounded-full border px-5 font-semibold" onClick={() => choose('rejected')}>Từ chối tracking</button>
        <button className="min-h-11 rounded-full bg-emerald-700 px-5 font-semibold text-white" onClick={() => choose('accepted')}>Chấp nhận tất cả</button>
      </div>
    </div>
  );
}
