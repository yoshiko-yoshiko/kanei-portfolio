import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/constants';
import { PROJECTS } from '../projects-data';
import { generateBreadcrumbJsonLd } from '../../lib/utils';
import type { Project } from '../../types';
import { PageHeader } from '../../components/PageHeader';

interface Props {
  params: Promise<{ slug: string }>;
}

async function getProject(slug: string): Promise<Project | null> {
  return PROJECTS.find((project) => project.id === slug) || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

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
      images: project.images.length > 0
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
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const hasImages = project.images.length > 0;

  const breadcrumbJsonLd = generateBreadcrumbJsonLd(
    [
      { name: 'Home' },
      { name: 'Projects', path: '/projects' },
      { name: project.title, path: `/projects/${project.id}` },
    ],
    SITE_CONFIG.url
  );

  // Prev / Next project navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader backHref="/projects" backLabel="Back to Projects" />

      {/* Hero Image */}
      <div className="pt-16">
        {hasImages ? (
          <div className="w-full max-w-5xl mx-auto px-6 pt-4">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src={project.images[0].url}
                alt={project.images[0].alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        ) : (
          <div className="w-full max-w-5xl mx-auto px-6 pt-4">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 text-[120px] sm:text-[180px] font-bold leading-none select-none">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <main className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Meta Info + Description */}
          <div className="flex flex-col md:flex-row gap-8 mt-16 mb-12 md:items-start">
            <div className="flex flex-col gap-3 text-sm text-[#1a1a1a]/70 md:w-1/3">
              <span><span className="text-[#1a1a1a]/40 mr-2">Title</span>{project.title}</span>
              <span><span className="text-[#1a1a1a]/40 mr-2">Role</span>{project.role}</span>
              <span><span className="text-[#1a1a1a]/40 mr-2">Duration</span>{project.duration}</span>
              <span><span className="text-[#1a1a1a]/40 mr-2">Team</span>{project.teamSize} members</span>
              <span><span className="text-[#1a1a1a]/40 mr-2">Category</span><span className="capitalize">{project.category}</span></span>
            </div>
            <div className="md:w-2/3">
              <p className="text-[#1a1a1a]/70 leading-relaxed text-base">
                {project.longDescription}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-[#1a1a1a]/40 uppercase tracking-wider mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => {
                const Icon = typeof tech.icon !== 'string' ? tech.icon : null;
                return (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-[#1a1a1a]/70 bg-[#1a1a1a]/5 rounded-lg hover:bg-[#10b981]/10 hover:text-[#10b981] transition-colors"
                  >
                    {Icon ? <Icon className="h-3.5 w-3.5" /> : <span>{tech.icon as string}</span>}
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Challenges / Solutions / Results */}
          <div className="mb-12 space-y-10">
            <div>
              <h2 className="text-sm font-semibold text-[#1a1a1a]/40 uppercase tracking-wider mb-4">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1a1a1a]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-[#1a1a1a]/40 uppercase tracking-wider mb-4">Solutions</h2>
              <ul className="space-y-3">
                {project.solutions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1a1a1a]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-[#1a1a1a]/40 uppercase tracking-wider mb-4">Results</h2>
              <ul className="space-y-3">
                {project.results.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1a1a1a]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Images */}
          {project.images.length > 1 && (
            <div className="mb-12">
              <div className="space-y-6">
                {project.images.slice(1).map((image, i) => (
                  <div key={i} className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                    {image.caption && (
                      <p className="mt-2 text-xs text-[#1a1a1a]/40 text-center">{image.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex gap-3 mb-12">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#10b981] rounded-lg hover:bg-[#059669] transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#1a1a1a] border border-[#1a1a1a]/20 rounded-lg hover:border-[#10b981] hover:text-[#10b981] transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              )}
            </div>
          )}

          {/* Prev / Next Project Navigation */}
          <div className="pt-10 border-t border-[#1a1a1a]/10">
            <div className="grid grid-cols-2 gap-4">
              {/* Previous */}
              <Link
                href={`/projects/${prevProject.id}`}
                className="group flex items-center gap-4 p-5 rounded-xl border border-[#1a1a1a]/10 hover:border-[#10b981]/30 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-[#1a1a1a]/30 group-hover:text-[#10b981] group-hover:-translate-x-1 transition-all flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs text-[#1a1a1a]/40">Prev</span>
                  <h4 className="font-medium text-[#1a1a1a] group-hover:text-[#10b981] transition-colors truncate">
                    {prevProject.title}
                  </h4>
                </div>
              </Link>

              {/* Next */}
              <Link
                href={`/projects/${nextProject.id}`}
                className="group flex items-center justify-end gap-4 p-5 rounded-xl border border-[#1a1a1a]/10 hover:border-[#10b981]/30 transition-colors text-right"
              >
                <div className="min-w-0">
                  <span className="text-xs text-[#1a1a1a]/40">Next</span>
                  <h4 className="font-medium text-[#1a1a1a] group-hover:text-[#10b981] transition-colors truncate">
                    {nextProject.title}
                  </h4>
                </div>
                <ArrowRight className="h-5 w-5 text-[#1a1a1a]/30 group-hover:text-[#10b981] group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
