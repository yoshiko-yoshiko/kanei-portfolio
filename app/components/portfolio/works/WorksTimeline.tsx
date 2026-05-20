import type { WorkEntry } from "@/app/(data)/works";
import { WorkRow } from "./WorkRow";

interface WorksTimelineProps {
  entries: WorkEntry[];
}

export function WorksTimeline({ entries }: WorksTimelineProps) {
  // sortYear の降順でグルーピング
  const grouped = entries.reduce<Record<number, WorkEntry[]>>((acc, entry) => {
    if (!acc[entry.sortYear]) acc[entry.sortYear] = [];
    acc[entry.sortYear].push(entry);
    return acc;
  }, {});

  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="space-y-10">
      {years.map((year) => (
        <section key={year}>
          <div className="flex items-baseline gap-3 mb-2">
            <h2 className="text-2xl font-mono text-text">{year}</h2>
            <span className="text-xs text-muted">
              · {grouped[year].length} {grouped[year].length === 1 ? "entry" : "entries"}
            </span>
          </div>
          <div className="border-t border-border">
            {grouped[year].map((entry) => (
              <WorkRow key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
