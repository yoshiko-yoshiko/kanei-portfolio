import type { SkillCategory } from '@/app/types';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLit,
  SiNestjs, SiNodedotjs, SiPostgresql, SiAmazondynamodb,
  SiGit, SiDocker, SiFirebase, SiStorybook, SiFigma,
  TbBrandOpenai, TbRobot, TbDatabase, TbPalette,
} from '@/app/lib/constants/technologies';

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
