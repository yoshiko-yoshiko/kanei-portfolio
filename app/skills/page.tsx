import type { Metadata } from 'next';
import { SkillsCarousel } from './SkillsCarousel';
import { SITE_CONFIG } from '../lib/constants';
import { generateBreadcrumbJsonLd } from '../lib/utils';
import { PageHeader } from '../components/PageHeader';

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
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader />

      {/* Content */}
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-[600px] mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#1a1a1a] mb-2">Skills</h1>
            <p className="text-[#1a1a1a]/60">Technical expertise and tools</p>
          </div>

          {/* Skills Carousel */}
          <SkillsCarousel />
        </div>
      </main>
    </div>
  );
}
