import type { Project } from '@/app/types';
import { getTech } from '@/app/lib/constants/technologies';
import medicalAppImg from '@/app/_assets/images/projects/medical-app-1.jpg';
import portfolioImg from '@/app/_assets/images/projects/my-portfolio-1.jpg';
import designSystemImg from '@/app/_assets/images/projects/design-system-1.jpg';
import aiconImg from '@/app/_assets/images/projects/aicon-1.jpg';
import joetsuMapImg from '@/app/_assets/images/projects/joetsu-map-1.jpg';
import {
  SiGooglechrome,
  SiCloudflare,
  SiSupabase,
  SiStripe,
  SiVite,
} from 'react-icons/si';
import { TbRobot, TbFlame } from 'react-icons/tb';

export const PROJECTS: Project[] = [
  {
    id: 'medical-app',
    title: '医療系オンラインアプリ',
    description: 'オンライン服薬指導プラットフォーム — 予約型・リアルタイム型の2方式対応',
    longDescription: '患者向けオンライン服薬指導アプリのフルスタック開発を担当。予約型とリアルタイム型の2つの指導方式を実装し、予約変更からリアルタイム待ち行列へのシームレスな移行機能を設計・開発しました。バックエンドではNestJS + TypeORMで堅牢なトランザクション処理を構築し、二重予約やデータ不整合を防止。フロントエンドではLINE LIFFを活用して患者が使いやすいUIを実現しました。結果としてキャンセル率を9.62%から2.17%へと大幅に削減し、約200名の患者様にご利用いただいています。',
    technologies: [
      getTech('React'),
      getTech('NestJS'),
      getTech('PostgreSQL'),
      getTech('TypeScript'),
      getTech('LINE LIFF'),
      getTech('TypeORM'),
    ],
    role: 'フルスタックエンジニア',
    duration: '6ヶ月〜',
    teamSize: 6,
    challenges: [
      '二重予約を防ぐトランザクション処理',
      '患者の入力状況に応じた処理の出し分け',
    ],
    solutions: [
      'NestJSによる堅牢なバックエンド設計',
      'トランザクション処理によるデータ整合性確保',
      'LINE LIFFを活用した患者向けUI'
    ],
    results: [
      'フロント・バックエンド両方を担当',
    ],
    images: [
      { url: medicalAppImg.src, alt: '医療系オンラインアプリ ダッシュボード' },
    ],
    featured: true,
    category: 'fullstack',
    period: 'work',
  },
  {
    id: 'my-portfolio',
    title: 'ポートフォリオ',
    description: 'Next.js 16 + Tailwind CSS 4 で構築したパーソナルサイト',
    longDescription: 'デザインから設計・実装まで一貫して手がけたポートフォリオサイト。Next.js 16 App RouterとTailwind CSS 4を採用し、SSG（静的サイト生成）による高速表示を実現しています。SEO対策としてJSON-LD構造化データ、動的OGP画像生成、sitemap/robots自動生成を実装。ファビコンやOG画像もImageResponse APIで動的に生成しており、デザインシステムとの統一感を保っています。Vercelにデプロイし、Speed Insightsでパフォーマンスを継続モニタリングしています。',
    technologies: [
      getTech('Next.js'),
      getTech('TypeScript'),
      getTech('Tailwind CSS'),
    ],
    role: 'エンジニア',
    duration: '継続中',
    teamSize: 1,
    challenges: [
      'SEO対策とパフォーマンスの両立',
      '動的OGP画像の生成',
      'レスポンシブデザインの最適化',
    ],
    solutions: [
      'Next.js App RouterによるSSG構成',
      'ImageResponse APIで動的OGP・favicon生成',
      'Tailwind CSS 4のデザイントークン活用',
    ],
    results: [
      'Lighthouse SEOスコア100達成',
      'JSON-LD構造化データ実装',
      'Vercelで継続的デプロイ',
    ],
    images: [
      { url: portfolioImg.src, alt: 'ポートフォリオ トップ画面' },
    ],
    featured: true,
    category: 'design',
    period: 'work',
  },
  {
    id: 'design-system',
    title: 'デザインシステム',
    description: '社内Webコンポーネントライブラリ — 45種類 + MCP統合',
    longDescription: '社内デザインシステムとして45種類のWebコンポーネントをLit（Web Components）で実装し、Storybookでドキュメント化しました。さらにClaude Desktop向けのMCPサーバーとして統合し、AIアシスタント経由でコンポーネントの仕様・使い方・プロパティ情報を即座に取得できる仕組みを構築。フレームワーク非依存のWeb Componentsを採用することで、React・Vue・素のHTMLなど技術スタックを問わず利用可能です。社内開発チームの生産性向上に貢献しています。',
    technologies: [
      getTech('Lit'),
      getTech('TypeScript'),
      getTech('Storybook'),
    ],
    role: 'エンジニア',
    duration: '継続中',
    teamSize: 3,
    challenges: [
      '45種類のコンポーネント仕様の整理',
      'MCPサーバーとしてのAPI設計',
      'Claude Desktopとの統合',
    ],
    solutions: [
      'Litによる軽量Webコンポーネント実装',
      'Storybookでのドキュメント化',
      'MCPプロトコルに準拠したサーバー実装',
    ],
    results: [
      '45コンポーネントをライブラリ化',
      'Claude DesktopからAIアシスタント経由で利用可能',
      '社内開発効率の向上',
    ],
    images: [
      { url: designSystemImg.src, alt: 'デザインシステム コンポーネント一覧' },
    ],
    featured: true,
    category: 'design',
    period: 'work',
  },
  {
    id: 'aicon',
    title: 'AiCON',
    description: 'AIアイコン自動生成サービス — 写真から5ステップでオリジナルアイコン作成',
    longDescription: '撮影した写真からAIがカスタムアイコンを自動生成するWebサービス。フロントエンドをNext.js + Tailwind CSSで構築し、バックエンドにはFastAPI + Google Colabを採用しました。アップロード→スタイル選択→生成→プレビュー→ダウンロードの直感的な5ステップフローを設計し、初めてのユーザーでも迷わず利用できるUXを実現。FAQセクションも実装してユーザーサポートを強化しました。チーム10名中の稼働メンバー3名で効率的に開発を進めました。',
    technologies: [
      getTech('Next.js'),
      getTech('TypeScript'),
      getTech('Tailwind CSS'),
      getTech('FastAPI'),
      getTech('Google Colab'),
    ],
    role: 'フロントエンドエンジニア',
    duration: '3ヶ月',
    teamSize: 10,
    challenges: [
      'AI画像生成のレスポンス時間',
      '直感的な5ステップフローの設計',
      'Google Colab + ngrok によるバックエンド運用',
    ],
    solutions: [
      'FastAPIによる高速バックエンド実装',
      'ステップバイステップのUIコンポーネント設計',
      'ngrokによるColab環境の外部公開',
    ],
    results: [
      'シンプルな5ステップでアイコン生成',
      'FAQセクションでユーザーサポート向上',
      'チーム10名中、稼働3名で効率的な開発',
    ],
    images: [
      { url: aiconImg.src, alt: 'AiCON メイン画面' },
    ],
    liveUrl: 'https://aicon-one.vercel.app/',
    featured: true,
    category: 'fullstack',
    period: 'student',
  },
  {
    id: 'joetsu-map',
    title: '上越まっぷ',
    description: '上越市の観光スポット・モデルコース検索アプリ — T3 Stack採用',
    longDescription: '上越市の観光スポット検索、モデルコース表示、リアルタイム天気情報を統合した地域情報Webアプリ。T3 Stack（Next.js + tRPC + Prisma + NextAuth）を採用し、エンドツーエンドで型安全なフルスタック開発を実現しました。Google Maps APIによるルート表示、microCMSによるコンテンツ管理、天気API連携による観光計画支援機能を実装。3名のチームでフルスタックエンジニアとして4ヶ月間の開発を担当し、観光スポットの周遊促進に貢献しました。',
    technologies: [
      getTech('Next.js'),
      getTech('TypeScript'),
      getTech('Prisma'),
      getTech('tRPC'),
      getTech('Google Maps'),
      getTech('microCMS'),
      getTech('NextAuth'),
    ],
    role: 'フルスタックエンジニア',
    duration: '4ヶ月',
    teamSize: 3,
    challenges: [
      '観光スポットと天気情報の統合表示',
      'モデルコースのルート最適化',
      'microCMSとの連携',
    ],
    solutions: [
      'tRPCによる型安全なAPI設計',
      'Google Maps APIでルート表示',
      'microCMSでコンテンツ管理を効率化',
    ],
    results: [
      '観光スポット検索の利便性向上',
      'モデルコースで周遊促進',
      '天気情報連携で計画立案をサポート',
    ],
    images: [
      { url: joetsuMapImg.src, alt: '上越まっぷ トップ画面' },
    ],
    featured: true,
    category: 'web',
    period: 'student',
  },
  {
    id: 'reviewlens',
    title: 'ReviewLens',
    description: 'AmazonレビューをAIで自動分析するChrome拡張機能 — サクラレビュー判定・フリーミアム収益化',
    longDescription: 'AmazonレビューをAIで自動分析するChrome拡張機能。商品ページのレビューを即座に分析し、良い点・悪い点・総合スコア・サクラレビュー判定をサイドパネルに表示します。Chrome Manifest V3に準拠した拡張機能をTypeScript + React + Viteで構築し、バックエンドにはCloudflare Workers + Honoを採用。Claude APIによるレビュー分析ロジックを実装し、ユーザーデータはSupabaseで管理。Stripeによる決済連携でフリーミアムモデルの収益化を実現しています。',
    technologies: [
      { name: 'Chrome Extension', category: 'frontend' as const, icon: SiGooglechrome, color: '#4285F4' },
      getTech('TypeScript'),
      getTech('React'),
      { name: 'Vite', category: 'tool' as const, icon: SiVite, color: '#646CFF' },
      { name: 'Cloudflare Workers', category: 'backend' as const, icon: SiCloudflare, color: '#F38020' },
      { name: 'Hono', category: 'backend' as const, icon: TbFlame, color: '#FF6A00' },
      { name: 'Claude API', category: 'ai' as const, icon: TbRobot, color: '#D97706' },
      { name: 'Supabase', category: 'database' as const, icon: SiSupabase, color: '#3ECF8E' },
      { name: 'Stripe', category: 'backend' as const, icon: SiStripe, color: '#635BFF' },
    ],
    role: 'フルスタックエンジニア',
    duration: '開発中',
    teamSize: 1,
    challenges: [
      'Chrome Manifest V3の制約内での拡張機能設計',
      'レビューのサクラ判定アルゴリズムの精度向上',
      'フリーミアムモデルの決済フロー実装',
    ],
    solutions: [
      'サイドパネルUIでユーザー体験を最適化',
      'Claude APIによる高精度なレビュー分析',
      'Stripe連携でシームレスな課金体験を実現',
    ],
    results: [
      'レビュー分析をワンクリックで実行可能',
      'サクラレビュー判定機能を実装',
      'フリーミアムモデルで収益化設計済み',
    ],
    images: [],
    featured: true,
    category: 'ai',
    period: 'work',
  },
];
