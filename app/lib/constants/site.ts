import type { SocialLink } from '@/app/types';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yoshiko-yoshiko', icon: 'Github' },
  { name: 'Zenn', url: 'https://zenn.dev/aiueo700', icon: 'BookOpen' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kanei-nakashima-571257344/', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:iamkaneisanda@gmail.com', icon: 'Mail' },
];

export const SITE_CONFIG = {
  name: 'Portfolio',
  title: 'Engineer',
  description: 'Kanei Nakashima | React/Next.js/TypeScriptを中心としたフルスタックエンジニアのポートフォリオ。医療系Webアプリ開発、MCPサーバー構築、AIエージェント開発の実績。',
  author: 'Kanei Nakashima',
  email: 'iamkaneisanda@gmail.com',
  url: 'https://kanei-portfolio.vercel.app',
};
