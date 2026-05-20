import Link from 'next/link';

const FEATURED_WORKS = [
  { slug: 'medical-app', name: 'MedGuide', letter: 'M', caseNo: '01' },
  { slug: 'my-portfolio', name: 'Portfolio', letter: 'P', caseNo: '02' },
  { slug: 'design-system', name: 'Design System', letter: 'D', caseNo: '03' },
  { slug: 'reviewlens', name: 'ReviewLens', letter: 'R', caseNo: '04' },
];

export function WorksSection() {
  return (
    <section className="pb-[88px]">
      <div className="flex justify-between items-start mb-6">
        <span className="text-[12px] text-muted font-mono tracking-[0.24px]">
          Works
        </span>
        <div className="text-[12px] text-muted font-mono tracking-[0.24px] text-right leading-tight space-y-0.5">
          <div>{FEATURED_WORKS.length}</div>
          <div>projects</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {FEATURED_WORKS.map(({ slug, name, letter, caseNo }) => (
          <Link
            key={slug}
            href={`/projects/${slug}`}
            aria-label={name}
            className="block group"
          >
            <div className="relative aspect-square bg-[#EFEBE3] overflow-hidden rounded-sm">
              {/* Top-left case label */}
              <div className="absolute top-3 left-3 text-[10px] text-muted font-mono tracking-[0.24px] leading-tight z-10">
                <div>case / {caseNo}</div>
                <div className="mt-0.5">{name}</div>
              </div>

              {/* Big Letter — bleeds outside card */}
              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center text-text font-bold leading-none select-none transition-opacity group-hover:opacity-80"
                style={{
                  fontSize: 'clamp(120px, 28vw, 240px)',
                  letterSpacing: '-0.05em',
                  transform: 'translateY(8%)',
                }}
              >
                {letter}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/works"
          className="inline-flex items-center gap-1 text-[14px] text-text hover:text-accent transition-colors"
        >
          <span className="font-jp">もっと見たい</span>
          <span className="text-muted italic"> / See more</span>
          <span className="ml-0.5">→</span>
        </Link>
      </div>
    </section>
  );
}
