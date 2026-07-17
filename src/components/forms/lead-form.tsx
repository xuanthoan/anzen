'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { getStoredUtmParams } from '@/lib/utm';
import { trackEvent, trackLeadConversion } from '@/lib/tracking';

type Status = { type: 'idle' | 'success' | 'error'; message: string };

export function LeadForm({ source = 'website_form' }: { source?: string }) {
  const [status, setStatus] = useState<Status>({ type: 'idle', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [started, setStarted] = useState(false);
  const onStart = () => { if (!started) { setStarted(true); trackEvent({ event: 'form_start', page_path: window.location.pathname, project_name: siteConfig.projectName }); } };
  async function onSubmit(formData: FormData) {
    setSubmitting(true); setStatus({ type: 'idle', message: '' });
    trackEvent({ event: 'form_submit', page_path: window.location.pathname, project_name: siteConfig.projectName });
    const utm = getStoredUtmParams();
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, source, landingPage: window.location.href, referrer: document.referrer, ...utm }) });
      const json = (await res.json()) as { ok: boolean; message: string };
      if (!res.ok || !json.ok) throw new Error(json.message || 'Không gửi được thông tin.');
      setStatus({ type: 'success', message: json.message });
      trackEvent({ event: 'form_success', page_path: window.location.pathname, project_name: siteConfig.projectName });
      trackLeadConversion(siteConfig.projectName);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Có lỗi xảy ra.';
      setStatus({ type: 'error', message });
      trackEvent({ event: 'form_error', page_path: window.location.pathname, project_name: siteConfig.projectName });
    } finally { setSubmitting(false); }
  }
  return (
    <form action={onSubmit} onFocus={onStart} className="rounded-[2rem] bg-white p-6 shadow-2xl md:p-8" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div><label htmlFor="fullName" className="text-sm font-semibold text-slate-800">Họ tên *</label><input id="fullName" name="fullName" required maxLength={80} autoComplete="name" className="mt-2 min-h-12 w-full rounded-2xl border border-slate-300 px-4" /></div>
        <div><label htmlFor="phone" className="text-sm font-semibold text-slate-800">Số điện thoại *</label><input id="phone" name="phone" required maxLength={20} autoComplete="tel" inputMode="tel" className="mt-2 min-h-12 w-full rounded-2xl border border-slate-300 px-4" /></div>
        <div className="md:col-span-2"><label htmlFor="email" className="text-sm font-semibold text-slate-800">Email</label><input id="email" name="email" type="email" maxLength={120} autoComplete="email" className="mt-2 min-h-12 w-full rounded-2xl border border-slate-300 px-4" /></div>
        <div className="md:col-span-2"><label htmlFor="message" className="text-sm font-semibold text-slate-800">Nhu cầu / lời nhắn</label><textarea id="message" name="message" maxLength={500} rows={4} className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3" /></div>
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="mt-5 flex gap-3 text-sm text-slate-600"><input name="privacy" value="yes" required type="checkbox" className="mt-1 h-4 w-4" />Tôi đồng ý với chính sách bảo mật và cho phép liên hệ tư vấn dự án.</label>
      <button disabled={submitting} className="mt-6 min-h-12 w-full rounded-full bg-emerald-700 px-6 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60">{submitting ? 'Đang gửi...' : 'Gửi đăng ký tư vấn'}</button>
      {status.message ? <p role="status" className={`mt-4 rounded-2xl p-4 text-sm ${status.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>{status.message}</p> : null}
    </form>
  );
}
