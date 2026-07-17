import { cn } from '@/lib/utils';

export function SectionHeading({ eyebrow, title, description, className }: { eyebrow?: string; title: string; description?: string; className?: string }) {
  return (
    <div className={cn('mx-auto max-w-3xl text-center', className)}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-pretty text-base leading-8 text-slate-600 md:text-lg">{description}</p> : null}
    </div>
  );
}
