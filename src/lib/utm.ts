const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'] as const;
export type UtmKey = (typeof UTM_KEYS)[number];

export function captureUtmParams() {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const stored: Record<string, string> = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value && value.length < 200) stored[key] = value;
  });
  if (Object.keys(stored).length) localStorage.setItem('lead_utm_params', JSON.stringify(stored));
}

export function getStoredUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem('lead_utm_params') || '{}') as Record<string, string>;
  } catch {
    return {};
  }
}
