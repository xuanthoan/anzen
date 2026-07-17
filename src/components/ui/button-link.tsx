import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

export function ButtonLink({ href, children, className, onClick }: PropsWithChildren<{ href: string; className?: string; onClick?: () => void }>) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn('inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300', className)}
    >
      {children}
    </Link>
  );
}
