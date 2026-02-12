import type { Metadata } from 'next';
import Image from 'next/image';
import { SITE_CONFIG } from '../lib/constants';
import { generateBreadcrumbJsonLd } from '../lib/utils';
import { PageHeader } from '../components/PageHeader';

const breadcrumbJsonLd = generateBreadcrumbJsonLd(
  [{ name: 'Home' }, { name: 'About', path: '/about' }],
  SITE_CONFIG.url
);

export const metadata: Metadata = {
  title: 'About',
  description: 'Kanei Nakashima - React/NestJSを中心としたフルスタックエンジニア。医療系Webアプリ開発、新卒50名の技術研修講師リーダー経験。',
  openGraph: {
    title: 'About | Kanei Nakashima',
    description: 'Kanei Nakashima - React/NestJSを中心としたフルスタックエンジニア。医療系Webアプリ開発、新卒50名の技術研修講師リーダー経験。',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader />

      {/* Content */}
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Profile */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#10b981]/20">
              <Image
                src="/profile.jpg"
                alt="Kanei Nakashima"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-3xl font-bold text-[#1a1a1a] mb-2">About Me</h1>
            <p className="text-[#1a1a1a]/60"> Engineer</p>
          </div>

          {/* Bio */}
          <div className="space-y-6 text-[#1a1a1a]/80 leading-relaxed">
            <p>
              Kanei Nakashima（なかしま かんえい）と申します。
              フルスタックエンジニアとして、React / NestJS を中心とした
              Webアプリケーション開発に携わっています。
            </p>

            <p>
              学生時代には、地域企業紹介サービスの開発に参加。
              10名のチームで Next.js を使ったフロントエンド開発を10ヶ月間担当しました。
            </p>

            <p>
              現職では、医療系Webアプリの開発でフロント・バックエンド両方を担当。
              また、新卒技術研修の講師リーダーとして約50名の育成も経験しました。
            </p>

            <p>
              最近はAI活用にも注力しており、Claude Desktop向けMCPサーバーの構築や、
              AIエージェントを活用した開発効率化に取り組んでいます。
            </p>
          </div>

          {/* Experience */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-[#1a1a1a] mb-6">Experience</h2>

            <div className="space-y-6">
              <div className="pl-4 border-l-2 border-[#10b981]">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-[#1a1a1a]">フルスタックエンジニア</h3>
                  <span className="text-xs text-[#1a1a1a]/40">2025.8 - Present</span>
                </div>
                <p className="text-sm text-[#1a1a1a]/60 mb-2">医療系Webアプリ開発</p>
                <p className="text-xs text-[#1a1a1a]/50">React + NestJS でフロント・バックエンド両方を担当</p>
              </div>

              <div className="pl-4 border-l-2 border-[#1a1a1a]/20">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-[#1a1a1a]">新卒技術研修 講師リーダー</h3>
                  <span className="text-xs text-[#1a1a1a]/40">2025.5 - 2025.8</span>
                </div>
                <p className="text-sm text-[#1a1a1a]/60 mb-2">約50名の新卒エンジニア育成</p>
                <p className="text-xs text-[#1a1a1a]/50">離脱者ゼロで全員デプロイ完了</p>
              </div>

              <div className="pl-4 border-l-2 border-[#1a1a1a]/20">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-[#1a1a1a]">システム設計・ヘルプデスク</h3>
                  <span className="text-xs text-[#1a1a1a]/40">2024.6 - 2025.5</span>
                </div>
                <p className="text-sm text-[#1a1a1a]/60 mb-2">電子カルテシステム</p>
                <p className="text-xs text-[#1a1a1a]/50">DynamoDB設計、API仕様書作成、病院向けサポート</p>
              </div>

              <div className="pl-4 border-l-2 border-[#1a1a1a]/20">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-[#1a1a1a]">学生エンジニア</h3>
                  <span className="text-xs text-[#1a1a1a]/40">2023 - 2024</span>
                </div>
                <p className="text-sm text-[#1a1a1a]/60 mb-2">地域企業紹介サービス開発</p>
                <p className="text-xs text-[#1a1a1a]/50">Next.js フロントエンド開発（10名チーム）</p>
              </div>
            </div>
          </div>

          {/* Strengths */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-[#1a1a1a] mb-6">Strengths</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-[#1a1a1a]/10">
                <h3 className="font-semibold text-[#1a1a1a] mb-2">伴走力</h3>
                <p className="text-xs text-[#1a1a1a]/50">
                  一人ひとりに寄り添い、チームでやり切る
                </p>
              </div>
              <div className="p-4 rounded-lg border border-[#1a1a1a]/10">
                <h3 className="font-semibold text-[#1a1a1a] mb-2">フルスタック</h3>
                <p className="text-xs text-[#1a1a1a]/50">
                  フロント・バックエンド両方の実装経験
                </p>
              </div>
              <div className="p-4 rounded-lg border border-[#1a1a1a]/10">
                <h3 className="font-semibold text-[#1a1a1a] mb-2">品質へのこだわり</h3>
                <p className="text-xs text-[#1a1a1a]/50">
                  技術を深く理解し、高品質な設計を追求
                </p>
              </div>
              <div className="p-4 rounded-lg border border-[#1a1a1a]/10">
                <h3 className="font-semibold text-[#1a1a1a] mb-2">AI活用</h3>
                <p className="text-xs text-[#1a1a1a]/50">
                  MCPサーバー構築でAI開発効率化を推進
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
