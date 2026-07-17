'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation, siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  return (
    <header className={cn('fixed inset-x-0 top-0 z-40 transition-all', scrolled || open ? 'bg-white/95 shadow backdrop-blur' : 'bg-transparent')}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3">Bỏ qua menu</a>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Trang chủ">
          <Image src={siteConfig.logo} alt={`${siteConfig.projectName} logo`} width={132} height={44} priority />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
          {navigation.map((item) => item.children ? (
            <div key={item.href} className="group relative">
              <Link href={item.href} className={cn('flex min-h-11 items-center gap-1 rounded-full px-4 text-sm font-semibold', scrolled ? 'text-slate-800 hover:bg-emerald-50' : 'text-white hover:bg-white/10')}>{item.label}<ChevronDown size={16}/></Link>
              <div className="invisible absolute left-0 top-full min-w-44 translate-y-2 rounded-2xl bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {item.children.map((c) => <Link key={c.href} href={c.href} className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-emerald-50">{c.label}</Link>)}
              </div>
            </div>
          ) : <Link key={item.href} href={item.href} className={cn('min-h-11 rounded-full px-4 py-3 text-sm font-semibold', scrolled ? 'text-slate-800 hover:bg-emerald-50' : 'text-white hover:bg-white/10')}>{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex"><button className={cn('rounded-full border px-3 py-2 text-xs font-bold', scrolled ? 'text-slate-700' : 'text-white')}>VI/EN</button><Link href="/#dang-ky" className="rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950">Đăng ký</Link></div>
        <button type="button" aria-label={open ? 'Đóng menu' : 'Mở menu'} aria-expanded={open} onClick={() => setOpen(!open)} className={cn('inline-flex min-h-11 min-w-11 items-center justify-center rounded-full lg:hidden', scrolled || open ? 'bg-slate-100 text-slate-900' : 'bg-white/15 text-white')}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open ? <div className="border-t bg-white px-4 pb-6 lg:hidden"><nav className="mx-auto flex max-w-7xl flex-col py-4">{navigation.map((item) => <div key={item.href}><Link onClick={() => setOpen(false)} className="block rounded-xl px-4 py-4 font-semibold text-slate-900 hover:bg-emerald-50" href={item.href}>{item.label}</Link>{item.children?.map((c)=><Link onClick={() => setOpen(false)} key={c.href} className="ml-4 block rounded-xl px-4 py-3 text-sm text-slate-600" href={c.href}>{c.label}</Link>)}</div>)}<Link onClick={()=>setOpen(false)} href="/#dang-ky" className="mt-3 rounded-full bg-emerald-700 px-5 py-4 text-center font-bold text-white">Đăng ký tư vấn</Link></nav></div> : null}
    </header>
  );
}
