import Link from "next/link";
import type { WorkEntry } from "@/app/(data)/works";

function toTitleCase(str: string) {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function WorkRow({ entry }: { entry: WorkEntry }) {
  const rowClass = "flex items-start gap-4 py-4 border-b border-border";
  const inner = (
    <>
      <span className="text-xs text-muted font-mono w-10 shrink-0 pt-0.5">
        {entry.year}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-text">{entry.title}</span>
          {entry.featured && (
            <span className="text-xs text-accent">★ featured</span>
          )}
        </div>
        <p className="text-xs text-muted mt-1 leading-relaxed">{entry.description}</p>
      </div>
      <div className="shrink-0 text-right">
        <span className="inline-block text-xs font-mono border border-border px-1.5 py-0.5 text-muted">
          {toTitleCase(entry.category)}
        </span>
        <p className="text-xs text-muted mt-1">{entry.role}</p>
      </div>
    </>
  );

  if (entry.caseStudySlug) {
    return (
      <Link
        href={`/projects/${entry.caseStudySlug}`}
        className={`block ${rowClass} hover:bg-surface-hover transition-colors`}
      >
        {inner}
      </Link>
    );
  }
  return <div className={rowClass}>{inner}</div>;
}
