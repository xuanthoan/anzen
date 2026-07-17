const isProduction = process.env.NODE_ENV === 'production';

export const trackingConfig = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '',
  googleAdsConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || '',
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  enabledByDefault: isProduction,
  consentRequired: true,
};

export function isValidTrackingId(value: string, prefix?: string) {
  if (!value) return false;
  if (prefix) return value.startsWith(prefix);
  return /^[A-Z0-9_-]{4,}$/i.test(value);
}
