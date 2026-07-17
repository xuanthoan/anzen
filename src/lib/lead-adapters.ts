import type { LeadPayload } from '@/types';

export interface LeadAdapter {
  send(payload: LeadPayload): Promise<{ ok: boolean; message: string }>;
}

export class WebhookLeadAdapter implements LeadAdapter {
  constructor(private readonly webhookUrl: string) {}

  async send(payload: LeadPayload) {
    const response = await fetch(this.webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });
    if (!response.ok) return { ok: false, message: 'Webhook không phản hồi thành công.' };
    return { ok: true, message: 'Đã gửi thông tin thành công.' };
  }
}

export class MockLeadAdapter implements LeadAdapter {
  async send() {
    if (process.env.NODE_ENV === 'production') {
      return { ok: false, message: 'Production chưa cấu hình FORM_WEBHOOK_URL.' };
    }
    return { ok: true, message: 'Mock development: lead đã được xử lý giả lập.' };
  }
}

export function createLeadAdapter(): LeadAdapter {
  const webhook = process.env.FORM_WEBHOOK_URL;
  if (webhook && webhook.startsWith('https://')) return new WebhookLeadAdapter(webhook);
  return new MockLeadAdapter();
}
