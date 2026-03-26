import type { Metadata } from 'next';
import { SkillsList } from './SkillsList';
import { SITE_CONFIG } from '../../lib/constants';
import { generateBreadcrumbJsonLd } from '../../lib/utils';
import { PageHeader } from '../../components/PageHeader';

const breadcrumbJsonLd = generateBreadcrumbJsonLd(
  [{ name: 'Home' }, { name: 'Skills', path: '/skills' }],
  SITE_CONFIG.url
);

export const metadata: Metadata = {
  title: 'Skills',
  description: 'React, Next.js, NestJS, TypeScript, MCP Server, AI Agentなど、フルスタックエンジニアとしての技術スタック',
  openGraph: {
    title: 'Skills | Kanei Nakashima',
    description: 'React, Next.js, NestJS, TypeScript, MCP Server, AI Agentなど、フルスタックエンジニアとしての技術スタック',
  },
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader />

      {/* Content */}
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-[800px] mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Skills</h1>
            <p className="text-foreground/60">Technical expertise and tools</p>
          </div>

          {/* Skills List */}
          <SkillsList />
        </div>
      </main>
    </div>
  );
}
