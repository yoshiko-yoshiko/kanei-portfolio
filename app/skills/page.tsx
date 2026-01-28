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

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-lg bg-[#10b981]/5 hover:bg-[#10b981]/10 transition-colors">
              <div className="text-2xl font-bold text-[#10b981]">2+</div>
              <div className="text-xs text-[#1a1a1a]/50">Years Exp</div>
            </div>
            <div className="p-4 rounded-lg bg-[#10b981]/5 hover:bg-[#10b981]/10 transition-colors">
              <div className="text-2xl font-bold text-[#10b981]">4+</div>
              <div className="text-xs text-[#1a1a1a]/50">Projects</div>
            </div>
            <div className="p-4 rounded-lg bg-[#10b981]/5 hover:bg-[#10b981]/10 transition-colors">
              <div className="text-2xl font-bold text-[#10b981]">50</div>
              <div className="text-xs text-[#1a1a1a]/50">新卒育成</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
