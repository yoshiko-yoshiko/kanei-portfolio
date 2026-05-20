import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SITE_CONFIG } from '../../../lib/constants';
import { PROJECTS } from '../projects-data';
import { generateBreadcrumbJsonLd } from '../../../lib/utils';
import type { Project } from '../../../types';
import { PageFooter } from '@/app/components/layout/PageFooter';
import { MedGuideHero } from './_components/MedGuideHero';
import { DesignSystemHero } from './_components/DesignSystemHero';
import { ReviewLensHero } from './_components/ReviewLensHero';
import { PortfolioHero } from './_components/PortfolioHero';

function getHero(slug: string) {
  switch (slug) {
    case 'medical-app':
      return <MedGuideHero />;
    case 'design-system':
      return <DesignSystemHero />;
    case 'reviewlens':
      return <ReviewLensHero />;
    case 'my-portfolio':
      return <PortfolioHero />;
    default:
      return null;
  }
}

interface Props {
  params: Promise<{ slug: string }>;
}

async function getProject(slug: string): Promise<Project | null> {
  return PROJECTS.find((project) => project.id === slug) || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${SITE_CONFIG.author}`,
      description: project.description,
      url: `${SITE_CONFIG.url}/projects/${project.id}`,
      siteName: SITE_CONFIG.name,
      locale: 'ja_JP',
      type: 'article',
      images:
        project.images.length > 0
          ? [{ url: project.images[0].url, alt: project.images[0].alt }]
          : [{ url: '/opengraph-image', alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | ${SITE_CONFIG.author}`,
      description: project.description,
    },
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.id }));
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-6 py-3 border-b border-border">
      <span className="text-[12px] text-muted font-mono tracking-[0.24px]">
        {label}
      </span>
      <span className="text-[14px] text-text font-jp">{value}</span>
    </div>
  );
}

function NumberedListItem({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex items-baseline gap-4 py-2.5">
      <span className="text-accent text-[10px] mt-1.5">●</span>
      <span className="text-[12px] text-muted font-mono tracking-[0.24px] w-6">
        {num}
      </span>
      <span className="text-[15px] text-text font-jp leading-relaxed flex-1">
        {text}
      </span>
    </div>
  );
}

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 text-[12px] text-muted font-mono tracking-[0.24px] mb-6">
      <span>/</span>
      <span>{num}</span>
      <span>{title}</span>
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  const heroComponent = getHero(project.id);

  const breadcrumbJsonLd = generateBreadcrumbJsonLd(
    [
      { name: 'Home' },
      { name: 'Works', path: '/works' },
      { name: project.title, path: `/projects/${project.id}` },
    ],
    SITE_CONFIG.url
  );

  // Prev / Next from featured projects only (case studies)
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const currentIndex = featuredProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0
      ? featuredProjects[currentIndex - 1]
      : featuredProjects[featuredProjects.length - 1];
  const nextProject =
    currentIndex < featuredProjects.length - 1
      ? featuredProjects[currentIndex + 1]
      : featuredProjects[0];

  const caseStudyNumber = String(currentIndex + 1).padStart(2, '0');
  const projectYear = project.period === 'work' ? '2025' : '2024';

  return (
    <main className="min-h-screen bg-bg text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="max-w-[720px] mx-auto px-6 md:px-12">
        {/* Header with breadcrumb */}
        <header className="flex items-start justify-between pt-12 pb-6">
          <span className="flex items-baseline gap-2 font-mono text-[12px] text-muted tracking-[0.24px]">
            <Link href="/" className="hover:text-text transition-colors">
              &lt;
            </Link>
            <span>
              KN <span className="mx-1">/</span>{' '}
              <Link href="/works" className="hover:text-text transition-colors">
                Works
              </Link>{' '}
              <span className="mx-1">/</span>{' '}
              <span className="text-text">{project.id}</span>
            </span>
          </span>
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#3CC97A' }}
            />
            <span className="text-[12px] font-mono tracking-[0.24px] text-muted">
              Live
            </span>
          </div>
        </header>

        <div className="pt-[40px]">
          {/* Title block */}
          <section className="pb-[40px]">
            <p className="text-[12px] text-muted font-mono tracking-[0.24px] mb-6">
              CASE STUDY # {caseStudyNumber} · {projectYear}
            </p>
            <h1 className="text-[40px] md:text-[44px] font-jp font-medium leading-[1.3] tracking-tight mb-3">
              {project.title}
            </h1>
            <p className="text-[16px] text-muted font-jp mb-8">{project.description.split(' — ')[0] === project.title ? project.description.split(' — ')[1] ?? project.id : project.id}</p>
            <p className="text-[15px] text-text font-jp leading-relaxed">
              {project.longDescription}
            </p>
          </section>

          {/* Hero image */}
          <section className="pb-[40px]">
            {heroComponent ?? (
              <div className="relative w-full aspect-[16/10] bg-[#E8E5DD]" />
            )}
            <div className="flex justify-between items-start mt-3 text-[11px] text-muted font-mono tracking-[0.24px]">
              <div>
                <div>fig. 01 —</div>
                <div>{project.title.slice(0, 12)}</div>
              </div>
              <div className="text-right">
                <div>{project.teamSize} x N</div>
                <div>({projectYear}.8-)</div>
              </div>
            </div>
          </section>

          {/* / 01 ABOUT THIS PROJECT */}
          <section className="pb-[64px]">
            <SectionLabel num="01" title="About this project" />
            <div>
              <MetaRow label="Role" value={project.role} />
              <MetaRow label="Duration" value={project.duration} />
              <MetaRow label="Team" value={`${project.teamSize} members`} />
              <MetaRow label="Category" value={project.category.charAt(0).toUpperCase() + project.category.slice(1)} />
              <MetaRow label="Status" value="Live" />
            </div>
          </section>

          {/* / 02 STACK */}
          <section className="pb-[64px]">
            <SectionLabel num="02" title="Stack" />
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="text-[14px] text-text font-mono"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </section>

          {/* / 03 CHALLENGES */}
          <section className="pb-[64px]">
            <SectionLabel num="03" title="Challenges" />
            <div>
              {project.challenges.map((item, i) => (
                <NumberedListItem
                  key={i}
                  num={String(i + 1).padStart(2, '0')}
                  text={item}
                />
              ))}
            </div>
          </section>

          {/* / 04 SOLUTIONS */}
          <section className="pb-[64px]">
            <SectionLabel num="04" title="Solutions" />
            <div>
              {project.solutions.map((item, i) => (
                <NumberedListItem
                  key={i}
                  num={String(i + 1).padStart(2, '0')}
                  text={item}
                />
              ))}
            </div>
          </section>

          {/* / 05 RESULTS */}
          <section className="pb-[64px]">
            <SectionLabel num="05" title="Results" />
            <div>
              {project.results.map((item, i) => (
                <NumberedListItem
                  key={i}
                  num={String(i + 1).padStart(2, '0')}
                  text={item}
                />
              ))}
            </div>
          </section>

          {/* Contact block */}
          <section className="pb-[40px]">
            <p className="text-[15px] text-text font-jp mb-2">
              このプロジェクトについて、もう少し詳しく話せます。
            </p>
            <p className="text-[14px]">
              <span className="font-jp">Happy to dive deeper</span>{' '}
              <span className="text-muted italic">—</span>{' '}
              <a
                href="mailto:iamkaneisanda@gmail.com"
                className="text-text underline underline-offset-4 decoration-border hover:decoration-text transition-colors"
              >
                iamkaneisanda@gmail.com
              </a>
            </p>
          </section>

          {/* Prev / Next */}
          <section className="pb-[40px] pt-8 border-t border-border">
            <div className="flex justify-between">
              <Link
                href={`/projects/${prevProject.id}`}
                className="text-[14px] text-text hover:text-accent transition-colors"
              >
                ← <span className="font-jp">Previous</span>
              </Link>
              <Link
                href={`/projects/${nextProject.id}`}
                className="text-[14px] text-text hover:text-accent transition-colors"
              >
                <span className="font-jp">Next</span> →
              </Link>
            </div>
          </section>
        </div>
        <PageFooter />
      </div>
    </main>
  );
}
