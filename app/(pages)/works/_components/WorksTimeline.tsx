import type { WorkEntry } from "@/app/(data)/works";
import { WorkRow } from "./WorkRow";

interface WorksTimelineProps {
  entries: WorkEntry[];
}

export function WorksTimeline({ entries }: WorksTimelineProps) {
  const grouped = entries.reduce<Record<number, WorkEntry[]>>((acc, entry) => {
    if (!acc[entry.sortYear]) acc[entry.sortYear] = [];
    acc[entry.sortYear].push(entry);
    return acc;
  }, {});

  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="space-y-20">
      {years.map((year) => (
        <section key={year}>
          <div className="flex items-baseline gap-3 mb-4">
            <h2 className="text-[26px] font-medium text-text font-mono">{year}</h2>
            <span className="text-[12px] text-muted font-mono tracking-[0.24px]">
              · {grouped[year].length} entries
            </span>
          </div>
          <div>
            {grouped[year].map((entry, i) => (
              <WorkRow
                key={entry.id}
                entry={entry}
                isLast={i === grouped[year].length - 1}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
