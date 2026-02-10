import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  variant: 'work' | 'student';
}

const VARIANT_STYLES = {
  work: {
    borderHover: 'hover:border-[#10b981]/30',
    badgeColor: 'text-[#10b981] bg-[#10b981]/10',
    arrowHover: 'group-hover:text-[#10b981]',
    titleHover: 'group-hover:text-[#10b981]',
    linkHover: 'hover:text-[#10b981]',
    label: 'Work',
  },
  student: {
    borderHover: 'hover:border-[#f97316]/30',
    badgeColor: 'text-[#f97316] bg-[#f97316]/10',
    arrowHover: 'group-hover:text-[#f97316]',
    titleHover: 'group-hover:text-[#f97316]',
    linkHover: 'hover:text-[#f97316]',
    label: 'Student',
  },
};

export function ProjectCard({ project, variant }: ProjectCardProps) {
  const styles = VARIANT_STYLES[variant];
  const thumbnail = project.images?.[0];

  return (
    <div
      className={`group relative rounded-xl border border-[#1a1a1a]/10 ${styles.borderHover} transition-colors overflow-hidden`}
    >
      {/* Thumbnail */}
      {thumbnail && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#1a1a1a]/5">
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      <div className="p-6">
        {/* Badge + Arrow */}
        <div className="flex items-start justify-between mb-3">
          <span className={`inline-block px-2 py-1 text-xs font-medium ${styles.badgeColor} rounded`}>
            {styles.label}
          </span>
          <ArrowRight className={`h-4 w-4 text-[#1a1a1a]/20 ${styles.arrowHover} group-hover:translate-x-1 transition-all`} />
        </div>

        <h3 className={`text-lg font-semibold text-[#1a1a1a] mb-2 ${styles.titleHover} transition-colors`}>
          <Link href={`/projects/${project.id}`} className="before:absolute before:inset-0">
            {project.title}
          </Link>
        </h3>

        <p className="text-sm text-[#1a1a1a]/60 mb-4 line-clamp-2">
          {project.description}
        </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech.name}
            className="px-2 py-0.5 text-xs text-[#1a1a1a]/50 bg-[#1a1a1a]/5 rounded"
          >
            {tech.name}
          </span>
        ))}
      </div>

        {/* Links */}
        <div className="relative z-10 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs text-[#1a1a1a]/60 ${styles.linkHover} transition-colors`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs text-[#1a1a1a]/60 ${styles.linkHover} transition-colors`}
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
