import type { Technology } from '@/app/types';
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
  SiMongodb,
  SiPython,
  SiGooglemaps,
  SiFastapi,
  SiGooglecolab,
  SiPrisma,
  SiTrpc,
  SiLine,
  SiTypeorm,
  SiOpenai,
} from 'react-icons/si';
import { TbBrandOpenai, TbRobot, TbDatabase, TbPalette, TbLock, TbFileText } from 'react-icons/tb';

export const TECHNOLOGIES: Technology[] = [
  { name: 'React', category: 'frontend', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', category: 'frontend', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', category: 'frontend', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', category: 'frontend', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', category: 'backend', icon: SiNodedotjs, color: '#339933' },
  { name: 'PostgreSQL', category: 'database', icon: SiPostgresql, color: '#336791' },
  { name: 'MongoDB', category: 'database', icon: SiMongodb, color: '#47A248' },
  { name: 'Figma', category: 'design', icon: SiFigma, color: '#F24E1E' },
  { name: 'Git', category: 'tool', icon: SiGit, color: '#F05032' },
  { name: 'Python', category: 'backend', icon: SiPython, color: '#3776AB' },
  { name: 'OpenAI API', category: 'ai', icon: SiOpenai, color: '#10b981' },
  { name: 'Google Maps', category: 'tool', icon: SiGooglemaps, color: '#4285F4' },
  { name: 'Firebase', category: 'backend', icon: SiFirebase, color: '#FFCA28' },
  { name: 'FastAPI', category: 'backend', icon: SiFastapi, color: '#009688' },
  { name: 'Google Colab', category: 'tool', icon: SiGooglecolab, color: '#F9AB00' },
  { name: 'Prisma', category: 'backend', icon: SiPrisma, color: '#2D3748' },
  { name: 'tRPC', category: 'backend', icon: SiTrpc, color: '#398CCB' },
  { name: 'microCMS', category: 'backend', icon: TbFileText, color: '#2B2B2B' },
  { name: 'NextAuth', category: 'backend', icon: TbLock, color: '#000000' },
  { name: 'NestJS', category: 'backend', icon: SiNestjs, color: '#E0234E' },
  { name: 'Lit', category: 'frontend', icon: SiLit, color: '#324FFF' },
  { name: 'Storybook', category: 'tool', icon: SiStorybook, color: '#FF4785' },
  { name: 'LINE LIFF', category: 'frontend', icon: SiLine, color: '#00B900' },
  { name: 'TypeORM', category: 'backend', icon: SiTypeorm, color: '#FE0902' },
];

export function getTech(name: string): Technology {
  const tech = TECHNOLOGIES.find((t) => t.name === name);
  if (!tech) throw new Error(`Technology not found: ${name}`);
  return tech;
}

// Skills用のアイコンも再エクスポート（skills.tsで使用）
export {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLit,
  SiNestjs, SiNodedotjs, SiPostgresql, SiAmazondynamodb,
  SiGit, SiDocker, SiFirebase, SiStorybook, SiFigma,
  TbBrandOpenai, TbRobot, TbDatabase, TbPalette,
};
