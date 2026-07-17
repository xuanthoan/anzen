import Link from 'next/link';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return <><div className="h-20 bg-emerald-950" /><section className="min-h-[60vh] bg-white py-24"><Container className="text-center"><h1 className="text-5xl font-semibold text-slate-950">Không tìm thấy trang</h1><p className="mt-4 text-slate-600">Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.</p><Link href="/" className="mt-8 inline-flex rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white">Về trang chủ</Link></Container></section></>;
}
