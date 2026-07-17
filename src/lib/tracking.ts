import type { TrackingEventPayload } from '@/types';

declare global {
  interface Window {
    dataLayer?: TrackingEventPayload[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(payload: TrackingEventPayload) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  const safePayload = { ...payload };
  delete safePayload.fullName;
  delete safePayload.phone;
  delete safePayload.email;
  window.dataLayer.push(safePayload);
}

export function trackLeadConversion(projectName: string) {
  trackEvent({ event: 'generate_lead', project_name: projectName, page_path: window.location.pathname });
  if (window.fbq) window.fbq('track', 'Lead');
  if (window.gtag) window.gtag('event', 'generate_lead', { project_name: projectName });
}
