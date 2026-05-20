import { ExploreLink } from '@/app/components/ui/ExploreLink';
import medicalAppImg from '@/app/_assets/images/projects/medical-app-1.jpg';
import portfolioImg from '@/app/_assets/images/projects/my-portfolio-1.jpg';
import designSystemImg from '@/app/_assets/images/projects/design-system-1.jpg';
import reviewlensImg from '@/app/_assets/images/projects/reviewlens-1.png';
import { ProjectRow } from './ProjectRow';

const FEATURED_WORKS = [
  {
    title: '医療系オンラインアプリ',
    name: 'MedGuide',
    year: 2025,
    status: 'Live' as const,
    tags: ['React', 'NestJS', 'PostgreSQL', 'TypeScript'],
    thumbnail: medicalAppImg.src,
  },
  {
    title: 'ポートフォリオ',
    name: 'Portfolio',
    year: 2025,
    status: 'Live' as const,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    thumbnail: portfolioImg.src,
  },
  {
    title: 'デザインシステム',
    name: 'Design System',
    year: 2025,
    status: 'Active' as const,
    tags: ['Lit', 'Storybook', 'Vite', 'MCP Server'],
    thumbnail: designSystemImg.src,
  },
  {
    title: 'ReviewLens',
    name: 'ReviewLens',
    year: 2024,
    status: 'Live' as const,
    tags: ['Chrome MV3', 'Claude API', 'Cloudflare', 'Stripe'],
    thumbnail: reviewlensImg.src,
  },
] satisfies Array<{
  title: string;
  name: string;
  year: number;
  status: 'Live' | 'Active' | 'Archived';
  tags: string[];
  thumbnail: string;
}>;

export function WorksSection() {
  return (
    <section className="border-b border-border pb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-muted font-mono uppercase tracking-widest">
          Works
        </span>
        <span className="text-xs text-muted">{FEATURED_WORKS.length} projects</span>
      </div>
      <div>
        {FEATURED_WORKS.map((work, i) => (
          <ProjectRow
            key={work.name}
            {...work}
            isLast={i === FEATURED_WORKS.length - 1}
          />
        ))}
      </div>
      <div className="mt-4">
        <ExploreLink href="/works" jp="もっと見たい" en="See more" />
      </div>
    </section>
  );
}
