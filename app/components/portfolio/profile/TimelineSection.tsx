import { TIMELINE } from "@/app/(data)/timeline";

export function TimelineSection() {
  return (
    <section>
      <div className="flex items-center gap-4 text-xs text-muted font-mono mb-6">
        <span>/</span>
        <span>01</span>
        <span>TIMELINE</span>
      </div>
      <div className="border-t border-border">
        {TIMELINE.map((entry) => (
          <div
            key={entry.date}
            className="grid grid-cols-[5rem_1fr] gap-4 py-4 border-b border-border"
          >
            <span className="text-xs text-muted font-mono pt-0.5">{entry.date}</span>
            <div>
              <p className="text-sm font-semibold text-text">{entry.title}</p>
              <p className="text-sm text-muted mt-1">{entry.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
