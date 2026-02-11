import type { Metadata } from 'next';
import { PROJECTS, SITE_CONFIG } from '../lib/constants';
import { generateBreadcrumbJsonLd } from '../lib/utils';
import { PageHeader } from '../components/layout/PageHeader';
import { ProjectCard } from '../components/projects/ProjectCard';

const breadcrumbJsonLd = generateBreadcrumbJsonLd(
  [{ name: 'Home' }, { name: 'Projects', path: '/projects' }],
  SITE_CONFIG.url
);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader />

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
                <ProjectCard key={project.id} project={project} variant="work" />
              ))}
            </div>
          </div>

          {/* Student Projects */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.filter(p => p.period === 'student').map((project) => (
                <ProjectCard key={project.id} project={project} variant="student" />
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
