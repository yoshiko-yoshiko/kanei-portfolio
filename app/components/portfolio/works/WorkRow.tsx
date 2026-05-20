import type { WorkEntry } from "@/app/(data)/works";

export function WorkRow({ entry }: { entry: WorkEntry }) {
  return (
    <div className="flex items-start gap-6 py-4 border-b border-border">
      {/* 年 */}
      <span className="text-xs text-muted font-mono w-12 shrink-0 pt-0.5">
        {entry.year}
      </span>
      {/* タイトル + 説明 */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-text">{entry.title}</span>
          {entry.featured && (
            <span className="text-xs text-accent">★ featured</span>
          )}
        </div>
        <p className="text-xs text-muted mt-1 leading-relaxed">{entry.description}</p>
      </div>
      {/* カテゴリ + ロール */}
      <div className="shrink-0 text-right">
        <span className="inline-block text-xs font-mono uppercase tracking-wide border border-border px-1.5 py-0.5 text-muted">
          {entry.category.replace("-", " ")}
        </span>
        <p className="text-xs text-muted mt-1">{entry.role}</p>
      </div>
    </div>
  );
}
