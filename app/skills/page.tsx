import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SkillsCarousel } from '../components/skills/SkillsCarousel';

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
        <div className="max-w-lg mx-auto">
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
