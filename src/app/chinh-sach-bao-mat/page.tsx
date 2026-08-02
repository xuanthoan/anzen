import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = { title: 'Chính sách bảo mật', description: 'Chính sách bảo mật và quyền riêng tư của An Zen Residences.' };
export default function PrivacyPage() {
  return <><div className="h-20 bg-emerald-950" /><section className="bg-white py-16 md:py-24"><Container className="max-w-4xl"><h1 className="text-4xl font-semibold text-slate-950 md:text-6xl">Chính sách bảo mật</h1><div className="prose mt-8"><h2>Thông tin thu thập</h2><p>Chúng tôi có thể thu thập họ tên, số điện thoại, email, nhu cầu tư vấn qua form liên hệ nhằm phục vụ tư vấn và chăm sóc khách hàng.</p><h2>Mục đích sử dụng</h2><p>Thông tin được sử dụng để liên hệ tư vấn, cập nhật thông tin dự án và cải thiện trải nghiệm website {siteConfig.projectName}.</p><h2>Cookie và tracking</h2><p>Script marketing chỉ tải sau khi người dùng đồng ý nếu chế độ consent được bật.</p><h2>Quyền của người dùng</h2><p>Người dùng có quyền yêu cầu cập nhật, xóa hoặc ngừng sử dụng dữ liệu cá nhân qua email chính thức của chủ đầu tư.</p></div></Container></section></>;
}
