import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../../lib/constants';
import type { Project } from '../../types';

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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#1a1a1a]/5">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[#1a1a1a]/60 hover:text-[#10b981] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="mb-8">
            {project.featured && (
              <span className="inline-block px-2 py-1 text-xs font-medium text-[#10b981] bg-[#10b981]/10 rounded mb-3">
                Featured
              </span>
            )}
            <h1 className="text-3xl font-bold text-[#1a1a1a] mb-3">{project.title}</h1>
            <p className="text-[#1a1a1a]/60 leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Links */}
          <div className="flex gap-3 mb-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#10b981] rounded-lg hover:bg-[#10b981]/90 transition-colors"
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
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1a1a1a] border border-[#1a1a1a]/20 rounded-lg hover:border-[#10b981] hover:text-[#10b981] transition-colors"
              >
                <Github className="h-4 w-4" />
                Source Code
              </a>
            )}
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 rounded-xl bg-[#1a1a1a]/5">
            <div>
              <div className="text-xs text-[#1a1a1a]/40 mb-1">Role</div>
              <div className="text-sm text-[#1a1a1a]">{project.role}</div>
            </div>
            <div>
              <div className="text-xs text-[#1a1a1a]/40 mb-1">Duration</div>
              <div className="text-sm text-[#1a1a1a]">{project.duration}</div>
            </div>
            <div>
              <div className="text-xs text-[#1a1a1a]/40 mb-1">Team</div>
              <div className="text-sm text-[#1a1a1a]">{project.teamSize} members</div>
            </div>
            <div>
              <div className="text-xs text-[#1a1a1a]/40 mb-1">Category</div>
              <div className="text-sm text-[#1a1a1a]">{project.category}</div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-[#1a1a1a]/70 bg-[#1a1a1a]/5 rounded-lg"
                >
                  <span>{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3">Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((item, i) => (
                  <li key={i} className="text-sm text-[#1a1a1a]/60 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3">Solutions</h3>
              <ul className="space-y-2">
                {project.solutions.map((item, i) => (
                  <li key={i} className="text-sm text-[#1a1a1a]/60 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3">Results</h3>
              <ul className="space-y-2">
                {project.results.map((item, i) => (
                  <li key={i} className="text-sm text-[#1a1a1a]/60 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other Projects */}
          <div className="pt-8 border-t border-[#1a1a1a]/10">
            <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS.filter((p) => p.id !== project.id)
                .slice(0, 2)
                .map((otherProject) => (
                  <Link
                    key={otherProject.id}
                    href={`/projects/${otherProject.id}`}
                    className="p-4 rounded-lg border border-[#1a1a1a]/10 hover:border-[#10b981]/30 transition-colors group"
                  >
                    <h4 className="font-medium text-[#1a1a1a] mb-1 group-hover:text-[#10b981] transition-colors">
                      {otherProject.title}
                    </h4>
                    <p className="text-xs text-[#1a1a1a]/50 line-clamp-2">
                      {otherProject.description}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
