import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/app/types';

interface ProjectCardProps {
  project: Project;
  variant: 'work' | 'student';
}

const VARIANT_STYLES = {
  work: {
    borderHover: 'hover:border-primary/30 hover:shadow-[0_2px_8px_rgba(45,122,95,0.06)]',
    badgeColor: 'text-primary bg-primary/10',
    arrowHover: 'group-hover:text-primary',
    titleHover: 'group-hover:text-primary',
    linkHover: 'hover:text-primary',
    label: 'Work',
  },
  student: {
    borderHover: 'hover:border-secondary/30 hover:shadow-[0_2px_8px_rgba(196,106,63,0.06)]',
    badgeColor: 'text-secondary bg-secondary/10',
    arrowHover: 'group-hover:text-secondary',
    titleHover: 'group-hover:text-secondary',
    linkHover: 'hover:text-secondary',
    label: 'Student',
  },
};

export function ProjectCard({ project, variant }: ProjectCardProps) {
  const styles = VARIANT_STYLES[variant];
  const thumbnail = project.images?.[0];

  return (
    <div
      className={`group relative rounded-xl border border-border bg-surface ${styles.borderHover} transition-all overflow-hidden`}
    >
      {/* Thumbnail */}
      {thumbnail && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-surface-hover">
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
          <ArrowRight className={`h-4 w-4 text-text-secondary ${styles.arrowHover} group-hover:translate-x-1 transition-all`} />
        </div>

        <h3 className={`text-lg font-semibold text-foreground mb-2 ${styles.titleHover} transition-colors`}>
          <Link href={`/projects/${project.id}`} className="before:absolute before:inset-0">
            {project.title}
          </Link>
        </h3>

        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {project.description}
        </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech.name}
            className="px-2 py-0.5 text-xs text-text-secondary bg-surface-hover rounded"
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
              className={`inline-flex items-center gap-1.5 text-xs text-text-secondary ${styles.linkHover} transition-colors`}
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
              className={`inline-flex items-center gap-1.5 text-xs text-text-secondary ${styles.linkHover} transition-colors`}
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
