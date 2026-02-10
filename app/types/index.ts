export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: Technology[];
  role: string;
  duration: string;
  teamSize: number;
  challenges: string[];
  solutions: string[];
  results: string[];
  images: ProjectImage[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  period: 'work' | 'student';
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'design' | 'ai';
  icon: string | React.ComponentType<{ className?: string }>;
  color: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export type ProjectCategory = 'web' | 'mobile' | 'design' | 'fullstack' | 'ai';

export interface SkillCategory {
  name: string;
  skills: Skill[];
  icon: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  yearsOfExperience: number;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

