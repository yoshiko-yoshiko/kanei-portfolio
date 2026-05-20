interface ProjectRowProps {
  title: string;
  name: string;
  year: number;
  status: 'Live' | 'Active' | 'Archived';
  tags: string[];
  thumbnail?: string;
  isLast?: boolean;
}

export function ProjectRow({
  title,
  name,
  year,
  status,
  tags,
  thumbnail,
  isLast = false,
}: ProjectRowProps) {
  return (
    <div className={`flex items-start gap-4 py-3${isLast ? '' : ' border-b border-border'}`}>
      <div className="w-12 h-12 rounded bg-border flex-shrink-0 overflow-hidden">
        {thumbnail && (
          <img src={thumbnail} alt={name} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-4">
          <p className="text-sm text-text truncate">
            {title} — {name}
          </p>
          <span className="text-xs text-muted flex-shrink-0">
            {year} {status}
          </span>
        </div>
        <p className="text-xs text-muted mt-0.5">{tags.join(' · ')}</p>
      </div>
    </div>
  );
}
