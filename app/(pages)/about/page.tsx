import type { Metadata } from 'next';
import Image from 'next/image';
import { SITE_CONFIG } from '../../lib/constants';
import profileImg from '@/app/_assets/images/profile.jpg';
import { generateBreadcrumbJsonLd } from '../../lib/utils';
import { PageHeader } from '../../components/PageHeader';

const breadcrumbJsonLd = generateBreadcrumbJsonLd(
  [{ name: 'Home' }, { name: 'About', path: '/about' }],
  SITE_CONFIG.url
);

export const metadata: Metadata = {
  title: 'About',
  description: `${SITE_CONFIG.author} - React/NestJSを中心としたフルスタックエンジニア。医療系Webアプリ開発、新卒50名の技術研修講師リーダー経験。`,
  openGraph: {
    title: `About | ${SITE_CONFIG.author}`,
    description: `${SITE_CONFIG.author} - React/NestJSを中心としたフルスタックエンジニア。医療系Webアプリ開発、新卒50名の技術研修講師リーダー経験。`,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
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
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#2d7a5f]/20">
              <Image
                src={profileImg}
                alt={SITE_CONFIG.author}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-3xl font-bold font-heading text-foreground mb-2">About Me</h1>
            <p className="text-text-secondary">Fullstack Engineer</p>
          </div>

          {/* Bio */}
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              ReactとNestJSでWebアプリを作っているフルスタックエンジニアです。
            </p>

            <p>
              学生時代に10人チームでNext.jsの地域企業紹介サービスを10ヶ月かけて作ったのが開発の原点です。今は医療系Webアプリのフロント・バックエンドを担当しつつ、新卒技術研修で約50名の講師リーダーも務めました。
            </p>

            <p>
              最近はAIで開発をどこまで加速できるかに関心があり、Claude Desktop向けMCPサーバーの自作や、AIエージェントによる並列開発の仕組みづくりに取り組んでいます。
            </p>
          </div>

          {/* Experience */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold font-heading text-foreground mb-6">Experience</h2>

            <div className="space-y-6">
              <div className="pl-4 border-l-2 border-primary">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-foreground">フルスタックエンジニア</h3>
                  <span className="text-xs text-text-secondary">2025.8 - Present</span>
                </div>
                <p className="text-sm text-text-secondary mb-2">医療系Webアプリ開発</p>
                <p className="text-xs text-text-secondary/70">React + NestJS でフロント・バックエンド両方を担当</p>
              </div>

              <div className="pl-4 border-l-2 border-border-hover">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-foreground">新卒技術研修 講師リーダー</h3>
                  <span className="text-xs text-text-secondary">2025.5 - 2025.8</span>
                </div>
                <p className="text-sm text-text-secondary mb-2">約50名の新卒エンジニア育成</p>
                <p className="text-xs text-text-secondary/70">離脱者ゼロで全員デプロイ完了</p>
              </div>

              <div className="pl-4 border-l-2 border-border-hover">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-foreground">システム設計・ヘルプデスク</h3>
                  <span className="text-xs text-text-secondary">2024.6 - 2025.5</span>
                </div>
                <p className="text-sm text-text-secondary mb-2">電子カルテシステム</p>
                <p className="text-xs text-text-secondary/70">DynamoDB設計、API仕様書作成、病院向けサポート</p>
              </div>

              <div className="pl-4 border-l-2 border-border-hover">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-foreground">学生エンジニア</h3>
                  <span className="text-xs text-text-secondary">2023 - 2024</span>
                </div>
                <p className="text-sm text-text-secondary mb-2">地域企業紹介サービス開発</p>
                <p className="text-xs text-text-secondary/70">Next.js フロントエンド開発（10名チーム）</p>
              </div>
            </div>
          </div>

          {/* Strengths */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold font-heading text-foreground mb-6">Strengths</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border bg-surface hover:border-border-hover transition-colors">
                <h3 className="font-semibold text-foreground mb-2">伴走力</h3>
                <p className="text-xs text-text-secondary">
                  一人ひとりに寄り添い、チームでやり切る
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-surface hover:border-border-hover transition-colors">
                <h3 className="font-semibold text-foreground mb-2">フルスタック</h3>
                <p className="text-xs text-text-secondary">
                  フロント・バックエンド両方の実装経験
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-surface hover:border-border-hover transition-colors">
                <h3 className="font-semibold text-foreground mb-2">品質へのこだわり</h3>
                <p className="text-xs text-text-secondary">
                  技術を深く理解し、高品質な設計を追求
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-surface hover:border-border-hover transition-colors">
                <h3 className="font-semibold text-foreground mb-2">AI活用</h3>
                <p className="text-xs text-text-secondary">
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
