import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Array<string | false | null | undefined>) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string, baseUrl: string) {
  if (path.startsWith('http')) return path;
  return `${baseUrl.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
}

export function stripHtml(input: string) {
  return input.replace(/<[^>]*>?/gm, '').trim();
}

export function sanitizeText(input: string, maxLength = 500) {
  return stripHtml(input).replace(/[\u0000-\u001F\u007F]/g, '').slice(0, maxLength).trim();
}
