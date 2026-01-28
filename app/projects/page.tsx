import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../lib/constants';

export const metadata: Metadata = {
  title: 'Projects',
  description: '医療系Webアプリ、デザインシステムMCP、AIアイコン生成サービスなど、フルスタック開発プロジェクト一覧',
  openGraph: {
    title: 'Projects | Kanei Nakashima',
    description: '医療系Webアプリ、デザインシステムMCP、AIアイコン生成サービスなど、フルスタック開発プロジェクト一覧',
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#1a1a1a]/5">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#1a1a1a]/60 hover:text-[#10b981] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#1a1a1a] mb-2">Projects</h1>
            <p className="text-[#1a1a1a]/60">Selected works and case studies</p>
          </div>

          {/* Work Projects */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.filter(p => p.period === 'work').map((project) => (
                <div
                  key={project.id}
                  className="group p-6 rounded-xl border border-[#1a1a1a]/10 hover:border-[#10b981]/30 transition-colors"
                >
                  {/* Badge */}
                  <span className="inline-block px-2 py-1 text-xs font-medium text-[#10b981] bg-[#10b981]/10 rounded mb-3">
                    Work
                  </span>

                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 group-hover:text-[#10b981] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#1a1a1a]/60 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech.name}
                        className="px-2 py-0.5 text-xs text-[#1a1a1a]/50 bg-[#1a1a1a]/5 rounded"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#1a1a1a]/60 hover:text-[#10b981] transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#1a1a1a]/60 hover:text-[#10b981] transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Projects */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.filter(p => p.period === 'student').map((project) => (
                <div
                  key={project.id}
                  className="group p-6 rounded-xl border border-[#1a1a1a]/10 hover:border-[#f97316]/30 transition-colors"
                >
                  {/* Badge */}
                  <span className="inline-block px-2 py-1 text-xs font-medium text-[#f97316] bg-[#f97316]/10 rounded mb-3">
                    Student
                  </span>

                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 group-hover:text-[#f97316] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#1a1a1a]/60 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech.name}
                        className="px-2 py-0.5 text-xs text-[#1a1a1a]/50 bg-[#1a1a1a]/5 rounded"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#1a1a1a]/60 hover:text-[#f97316] transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#1a1a1a]/60 hover:text-[#f97316] transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
