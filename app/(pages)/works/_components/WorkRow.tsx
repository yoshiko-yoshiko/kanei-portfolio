import Link from "next/link";
import type { WorkEntry } from "@/app/(data)/works";

function toTitleCase(str: string) {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function WorkRow({ entry, isLast = false }: { entry: WorkEntry; isLast?: boolean }) {
  const rowClass = `grid grid-cols-[60px_1fr_auto] gap-6 py-8 ${
    isLast ? "" : "border-b border-border"
  }`;
  const inner = (
    <>
      <span className="text-[12px] text-muted font-mono tracking-[0.24px] pt-1">
        {entry.year}
      </span>
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1.5">
          <span className="text-[16px] font-medium text-text font-jp">{entry.title}</span>
          {entry.featured && (
            <span className="text-[11px] text-accent font-mono tracking-[0.24px]">★ featured</span>
          )}
        </div>
        <p className="text-[13px] text-muted leading-relaxed font-jp">{entry.description}</p>
      </div>
      <div className="text-right">
        <span className="inline-block text-[10px] font-mono border border-border px-2 py-0.5 text-muted tracking-[0.24px] mb-1.5">
          {toTitleCase(entry.category).toUpperCase()}
        </span>
        <p className="text-[12px] text-muted font-mono tracking-[0.24px]">{entry.role}</p>
      </div>
    </>
  );

  if (entry.caseStudySlug) {
    return (
      <Link
        href={`/projects/${entry.caseStudySlug}`}
        className={`${rowClass} hover:bg-[#F0EDE7] transition-colors`}
      >
        {inner}
      </Link>
    );
  }
  return <div className={rowClass}>{inner}</div>;
}
