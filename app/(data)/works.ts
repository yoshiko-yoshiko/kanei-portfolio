export type WorkCategory =
  | "case-study"
  | "experiment"
  | "program"
  | "infra"
  | "talk"
  | "team"
  | "writing";

export type WorkRole =
  | "Fullstack"
  | "Lead"
  | "Solo"
  | "Engineer"
  | "Speaker"
  | "Author"
  | "Frontend";

export type WorkEntry = {
  id: string;
  year: string;
  sortYear: number;
  title: string;
  description: string;
  category: WorkCategory;
  role: WorkRole;
  featured?: boolean;
  caseStudySlug?: string;
};

export const WORKS: WorkEntry[] = [
  // 2025 (5件)
  {
    id: "medical-app",
    year: "2025",
    sortYear: 2025,
    title: "MedGuide / 医療系オンラインアプリ",
    description:
      "オンライン服薬指導プラットフォーム — 予約型 + リアルタイム型を1プロダクトに同居。",
    category: "case-study",
    role: "Fullstack",
    featured: true,
    caseStudySlug: "medical-app",
  },
  {
    id: "design-system",
    year: "2025",
    sortYear: 2025,
    title: "Design System",
    description: "Lit ベースの Web Components 45 種類 + Storybook + MCP 統合。",
    category: "case-study",
    role: "Lead",
    featured: true,
    caseStudySlug: "design-system",
  },
  {
    id: "portfolio",
    year: "2025",
    sortYear: 2025,
    title: "Portfolio Site",
    description: "Next.js 16 + Tailwind CSS 4。SSG + JSON-LD + 動的 OGP。",
    category: "case-study",
    role: "Solo",
    featured: true,
    caseStudySlug: "my-portfolio",
  },
  {
    id: "training-program",
    year: "2025",
    sortYear: 2025,
    title: "新卒技術研修プログラム設計",
    description:
      "約 50 名の新卒研修を設計・運営。カリキュラム、進捗管理、メンタリング体制。",
    category: "program",
    role: "Lead",
  },
  {
    id: "mcp-server",
    year: "2025",
    sortYear: 2025,
    title: "MCP Server (個人開発)",
    description:
      "Claude Desktop 向け MCP サーバーの自作。社内データへのアクセスを AI 経由で。",
    category: "experiment",
    role: "Solo",
  },
  // 2024 (3件)
  {
    id: "reviewlens",
    year: "2024",
    sortYear: 2024,
    title: "ReviewLens",
    description:
      "Amazon レビューを Claude API で自動分析する Chrome 拡張。Stripe で課金実装。",
    category: "case-study",
    role: "Solo",
    featured: true,
    caseStudySlug: "reviewlens",
  },
  {
    id: "ehr-dynamodb",
    year: "2024",
    sortYear: 2024,
    title: "電子カルテシステム — DynamoDB 設計",
    description: "テーブル設計、API 仕様書整備、病院向けヘルプデスク運用。",
    category: "infra",
    role: "Engineer",
  },
  {
    id: "ts-types-talk",
    year: "2024",
    sortYear: 2024,
    title: "社内 LT — TypeScript の型で守る運用",
    description: "DynamoDB の運用ミスを TS の型で防ぐ実例集。",
    category: "talk",
    role: "Speaker",
  },
  // 2023 (2件)
  {
    id: "regional-service",
    year: "2023",
    sortYear: 2023,
    title: "地域企業紹介サービス",
    description:
      "10 人チームで Next.js のサービスを 10 ヶ月かけて構築。学生時代の開発の原点。",
    category: "team",
    role: "Frontend",
  },
  {
    id: "zenn-blog",
    year: "2023",
    sortYear: 2023,
    title: "個人ブログ (Zenn @aiueo700)",
    description: "技術的なつまずきと学びを継続的に記録。",
    category: "writing",
    role: "Author",
  },
];
