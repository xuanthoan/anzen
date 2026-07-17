'use client';

import { ArrowUp, MessageCircle, Phone, Send } from 'lucide-react';
import { contactConfig } from '@/config/contact';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/tracking';

export function FloatingActions() {
  const page = typeof window !== 'undefined' ? window.location.pathname : '/';
  return (
    <div className="fixed bottom-20 right-3 z-30 flex flex-col gap-3 sm:bottom-6 sm:right-5">
      <a aria-label="Gọi hotline" href={contactConfig.hotlineHref} onClick={() => trackEvent({ event: 'click_hotline', page_path: page, placement: 'floating_button', project_name: siteConfig.projectName })} className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600 text-white shadow-lg"><Phone size={20}/></a>
      <a aria-label="Chat Zalo" href={contactConfig.zaloUrl} onClick={() => trackEvent({ event: 'click_zalo', page_path: page, placement: 'floating_button', project_name: siteConfig.projectName })} className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg"><MessageCircle size={20}/></a>
      <button aria-label="Đăng ký tư vấn" type="button" onClick={() => { trackEvent({ event: 'click_register', page_path: page, placement: 'floating_button', project_name: siteConfig.projectName }); window.location.href = '/#dang-ky'; }} className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white shadow-lg"><Send size={20}/></button>
      <button aria-label="Lên đầu trang" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg"><ArrowUp size={20}/></button>
    </div>
  );
}
