import { TIMELINE } from "@/app/(data)/timeline";

export function TimelineSection() {
  return (
    <section className="pb-[88px]">
      <div className="flex items-center gap-4 text-[12px] text-muted font-mono tracking-[0.24px] mb-8">
        <span>/</span>
        <span>01</span>
        <span>Timeline</span>
      </div>
      <div>
        {TIMELINE.map((entry, i) => (
          <div
            key={entry.date}
            className={`grid grid-cols-[80px_1fr] gap-6 py-6 ${
              i < TIMELINE.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="text-[12px] text-muted font-mono tracking-[0.24px] pt-1">
              {entry.date}
            </span>
            <div>
              <p className="text-[16px] font-medium text-text font-jp mb-1.5">{entry.title}</p>
              <p className="text-[14px] text-muted leading-relaxed font-jp">{entry.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
