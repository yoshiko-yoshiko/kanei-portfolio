import Link from 'next/link';
import { MedGuideHero } from '@/app/(pages)/projects/[slug]/_components/MedGuideHero';
import { PortfolioHero } from '@/app/(pages)/projects/[slug]/_components/PortfolioHero';
import { DesignSystemHero } from '@/app/(pages)/projects/[slug]/_components/DesignSystemHero';
import { ReviewLensHero } from '@/app/(pages)/projects/[slug]/_components/ReviewLensHero';

const FEATURED_WORKS = [
  { slug: 'medical-app', name: 'MedGuide', Hero: MedGuideHero },
  { slug: 'my-portfolio', name: 'Portfolio', Hero: PortfolioHero },
  { slug: 'design-system', name: 'Design System', Hero: DesignSystemHero },
  { slug: 'reviewlens', name: 'ReviewLens', Hero: ReviewLensHero },
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
        {FEATURED_WORKS.map(({ slug, name, Hero }) => (
          <Link
            key={slug}
            href={`/projects/${slug}`}
            aria-label={name}
            className="block group"
          >
            <div className="overflow-hidden transition-opacity group-hover:opacity-80">
              <Hero />
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
