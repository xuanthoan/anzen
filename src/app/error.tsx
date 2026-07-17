'use client';

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="flex min-h-screen items-center justify-center bg-white p-6 text-center"><div><h1 className="text-4xl font-semibold text-slate-950">Có lỗi xảy ra</h1><p className="mt-4 text-slate-600">Vui lòng thử tải lại trang. Nếu lỗi vẫn tiếp diễn, hãy liên hệ quản trị website.</p><button onClick={reset} className="mt-8 rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white">Thử lại</button></div></section>;
}
