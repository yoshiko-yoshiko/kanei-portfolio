import { Project, SkillCategory, SocialLink, Technology } from '@/app/types';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiAmazondynamodb,
  SiGit,
  SiDocker,
  SiFirebase,
  SiStorybook,
  SiFigma,
  SiLit,
} from 'react-icons/si';
import { TbBrandOpenai, TbRobot, TbDatabase, TbPalette } from 'react-icons/tb';

export const TECHNOLOGIES: Technology[] = [
  { name: 'React', category: 'frontend', icon: '⚛️', color: '#61DAFB' },
  { name: 'Next.js', category: 'frontend', icon: '▲', color: '#000000' },
  { name: 'TypeScript', category: 'frontend', icon: 'TS', color: '#3178C6' },
  { name: 'Tailwind CSS', category: 'frontend', icon: '🎨', color: '#06B6D4' },
  { name: 'Node.js', category: 'backend', icon: '🟢', color: '#339933' },
  { name: 'PostgreSQL', category: 'database', icon: '🐘', color: '#336791' },
  { name: 'MongoDB', category: 'database', icon: '🍃', color: '#47A248' },
  { name: 'Figma', category: 'design', icon: '🎨', color: '#F24E1E' },
  { name: 'Git', category: 'tool', icon: '📝', color: '#F05032' },
  { name: 'Python', category: 'backend', icon: '🐍', color: '#3776AB' },
  { name: 'OpenAI API', category: 'ai', icon: '🤖', color: '#10b981' },
  { name: 'Google Maps', category: 'tool', icon: '🗺️', color: '#4285F4' },
  { name: 'Firebase', category: 'backend', icon: '🔥', color: '#FFCA28' },
  { name: 'FastAPI', category: 'backend', icon: '⚡', color: '#009688' },
  { name: 'Google Colab', category: 'tool', icon: '📓', color: '#F9AB00' },
  { name: 'Prisma', category: 'backend', icon: '◮', color: '#2D3748' },
  { name: 'tRPC', category: 'backend', icon: '🔗', color: '#398CCB' },
  { name: 'microCMS', category: 'backend', icon: '📝', color: '#2B2B2B' },
  { name: 'NextAuth', category: 'backend', icon: '🔐', color: '#000000' },
  { name: 'NestJS', category: 'backend', icon: '🐱', color: '#E0234E' },
  { name: 'Lit', category: 'frontend', icon: '🔥', color: '#324FFF' },
  { name: 'Storybook', category: 'tool', icon: '📖', color: '#FF4785' },
  { name: 'LINE LIFF', category: 'frontend', icon: '💬', color: '#00B900' },
  { name: 'TypeORM', category: 'backend', icon: '🗄️', color: '#FE0902' },
];

export const PROJECTS: Project[] = [
  {
    id: 'medical-app',
    title: '医療系オンラインアプリ',
    description: 'オンライン服薬指導プラットフォーム',
    longDescription: '患者向けオンライン服薬指導アプリの開発。予約型とリアルタイム型の2つの指導方式を実装し、予約変更からリアルタイム待ち行列への移行機能を開発。キャンセル率を9.62%から2.17%に削減。',
    technologies: [
      TECHNOLOGIES[0], // React
      TECHNOLOGIES[19], // NestJS
      TECHNOLOGIES[5], // PostgreSQL
      TECHNOLOGIES[2], // TypeScript
      TECHNOLOGIES[22], // LINE LIFF
      TECHNOLOGIES[23], // TypeORM
    ],
    role: 'フルスタックエンジニア',
    duration: '6ヶ月〜',
    teamSize: 6,
    challenges: [
      '予約型とリアルタイム型の2方式への対応',
      '二重予約を防ぐトランザクション処理',
      '患者の入力状況に応じた処理の出し分け',
    ],
    solutions: [
      'NestJSによる堅牢なバックエンド設計',
      'トランザクション処理によるデータ整合性確保',
      'LINE LIFFを活用した患者向けUI',
    ],
    results: [
      'キャンセル率 9.62% → 2.17% に削減',
      '約200名の患者様に利用',
      'フロント・バックエンド両方を担当',
    ],
    images: [],
    featured: true,
    category: 'fullstack',
    period: 'work',
  },
  {
    id: 'my-portfolio',
    title: 'ポートフォリオ',
    description: 'このサイトの作成',
    longDescription: 'デザインから考えました',
    technologies: [
      TECHNOLOGIES[1], // Next.js
      TECHNOLOGIES[2], // TypeScript
      TECHNOLOGIES[3], // Tailwind CSS
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
    images: [],
    featured: true,
    category: 'design',
    period: 'work',
  },
  {
    id: 'design-system',
    title: 'デザインシステム',
    description: '社内Webコンポーネントライブラリの作成',
    longDescription: '社内デザインシステムのWebコンポーネントライブラリ。45種類のコンポーネントを提供し、Claude Desktop向けMCPサーバーとして統合。開発者がAIアシスタントを通じてコンポーネント情報を取得可能に。',
    technologies: [
      TECHNOLOGIES[20], // Lit
      TECHNOLOGIES[2], // TypeScript
      TECHNOLOGIES[21], // Storybook
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
    images: [],
    featured: true,
    category: 'design',
    period: 'work',
  },
  {
    id: 'aicon',
    title: 'AiCON',
    description: 'AIアイコン自動生成サービス',
    longDescription: '撮影した写真からカスタムアイコンを自動生成するAIサービス。5ステップの直感的なフローでオリジナルアイコンを作成。FAQセクション付きで初めてのユーザーも安心。',
    technologies: [
      TECHNOLOGIES[1], // Next.js
      TECHNOLOGIES[2], // TypeScript
      TECHNOLOGIES[3], // Tailwind CSS
      TECHNOLOGIES[13], // FastAPI
      TECHNOLOGIES[14], // Google Colab
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
      { url: '/projects/aicon-1.jpg', alt: 'AiCON メイン画面' },
    ],
    liveUrl: 'https://aicon-one.vercel.app/',
    featured: true,
    category: 'fullstack',
    period: 'student',
  },
  {
    id: 'joetsu-map',
    title: '上越まっぷ',
    description: '上越市の観光スポット・モデルコース検索アプリ',
    longDescription: '上越市の観光スポット検索、モデルコース表示、天気情報表示機能を備えた地域情報アプリ。T3 Stackを採用し、型安全なフルスタック開発を実現。microCMSでコンテンツを管理。',
    technologies: [
      TECHNOLOGIES[1], // Next.js
      TECHNOLOGIES[2], // TypeScript
      TECHNOLOGIES[15], // Prisma
      TECHNOLOGIES[16], // tRPC
      TECHNOLOGIES[11], // Google Maps
      TECHNOLOGIES[17], // microCMS
      TECHNOLOGIES[18], // NextAuth
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
      { url: '/projects/joetsu-map-1.jpg', alt: '上越まっぷ トップ画面' },
    ],
    featured: true,
    category: 'web',
    period: 'student',
  },
];

export const SKILLS: SkillCategory[] = [
  {
    name: 'フロントエンド',
    icon: '💻',
    skills: [
      { name: 'React', level: 4, yearsOfExperience: 2, icon: SiReact },
      { name: 'Next.js', level: 4, yearsOfExperience: 2, icon: SiNextdotjs },
      { name: 'TypeScript', level: 4, yearsOfExperience: 2, icon: SiTypescript },
      { name: 'Tailwind CSS', level: 4, yearsOfExperience: 1, icon: SiTailwindcss },
      { name: 'Lit (Web Components)', level: 3, yearsOfExperience: 1, icon: SiLit },
    ],
  },
  {
    name: 'バックエンド',
    icon: '⚙️',
    skills: [
      { name: 'NestJS', level: 4, yearsOfExperience: 1, icon: SiNestjs },
      { name: 'Node.js', level: 3, yearsOfExperience: 2, icon: SiNodedotjs },
      { name: 'PostgreSQL', level: 3, yearsOfExperience: 1, icon: SiPostgresql },
      { name: 'TypeORM', level: 3, yearsOfExperience: 1, icon: TbDatabase },
      { name: 'DynamoDB', level: 3, yearsOfExperience: 1, icon: SiAmazondynamodb },
    ],
  },
  {
    name: 'インフラ・ツール',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 4, yearsOfExperience: 2, icon: SiGit },
      { name: 'Docker', level: 3, yearsOfExperience: 1, icon: SiDocker },
      { name: 'Firebase', level: 3, yearsOfExperience: 1, icon: SiFirebase },
      { name: 'Storybook', level: 3, yearsOfExperience: 1, icon: SiStorybook },
    ],
  },
  {
    name: 'AI・自動化',
    icon: '🤖',
    skills: [
      { name: 'MCP Server', level: 4, yearsOfExperience: 1, icon: TbBrandOpenai },
      { name: 'Claude Code', level: 4, yearsOfExperience: 1, icon: TbBrandOpenai },
      { name: 'AI Agent', level: 3, yearsOfExperience: 1, icon: TbRobot },
    ],
  },
  {
    name: 'デザイン',
    icon: '🎨',
    skills: [
      { name: 'Figma', level: 3, yearsOfExperience: 1, icon: SiFigma },
      { name: 'UI/UX Design', level: 3, yearsOfExperience: 1, icon: TbPalette },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yoshiko-yoshiko', icon: 'Github' },
  { name: 'Zenn', url: 'https://zenn.dev/aiueo700', icon: 'BookOpen' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kanei-nakashima-571257344/', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:iamkaneisanda@gmail.com', icon: 'Mail' },
];

export const SITE_CONFIG = {
  name: 'Portfolio',
  title: 'Engineer',
  description: 'エンジニアのポートフォリオサイト',
  author: 'Kanei Nakashima',
  email: 'iamkaneisanda@gmail.com',
  url: 'https://kanei-portfolio.vercel.app',
};