import { NextResponse } from 'next/server';
import { createLeadAdapter } from '@/lib/lead-adapters';
import { sanitizeText } from '@/lib/utils';
import type { LeadPayload } from '@/types';

const phoneRegex = /^[0-9+\-\s().]{8,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    if (body.website) return NextResponse.json({ ok: true, message: 'Đã nhận thông tin.' });
    if (body.privacy !== 'yes') return NextResponse.json({ ok: false, message: 'Vui lòng đồng ý chính sách bảo mật.' }, { status: 400 });
    const fullName = sanitizeText(String(body.fullName || ''), 80);
    const phone = sanitizeText(String(body.phone || ''), 20);
    const email = sanitizeText(String(body.email || ''), 120);
    const message = sanitizeText(String(body.message || ''), 500);
    if (fullName.length < 2) return NextResponse.json({ ok: false, message: 'Vui lòng nhập họ tên hợp lệ.' }, { status: 400 });
    if (!phoneRegex.test(phone)) return NextResponse.json({ ok: false, message: 'Vui lòng nhập số điện thoại hợp lệ.' }, { status: 400 });
    if (email && !emailRegex.test(email)) return NextResponse.json({ ok: false, message: 'Email không hợp lệ.' }, { status: 400 });
    const payload: LeadPayload = {
      fullName, phone, email: email || undefined, message: message || undefined,
      source: sanitizeText(String(body.source || 'website'), 80),
      landingPage: sanitizeText(String(body.landingPage || ''), 250),
      referrer: sanitizeText(String(body.referrer || ''), 250),
      campaign: sanitizeText(String(body.utm_campaign || ''), 120) || undefined,
      medium: sanitizeText(String(body.utm_medium || ''), 80) || undefined,
      term: sanitizeText(String(body.utm_term || ''), 120) || undefined,
      content: sanitizeText(String(body.utm_content || ''), 120) || undefined,
      gclid: sanitizeText(String(body.gclid || ''), 160) || undefined,
      fbclid: sanitizeText(String(body.fbclid || ''), 160) || undefined,
    };
    const result = await createLeadAdapter().send(payload);
    return NextResponse.json(result, { status: result.ok ? 200 : 500 });
  } catch {
    return NextResponse.json({ ok: false, message: 'Không thể xử lý yêu cầu lúc này.' }, { status: 500 });
  }
}
