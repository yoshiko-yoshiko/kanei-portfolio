import { TOOLS } from "@/app/(data)/tools";

export function ToolsSection() {
  return (
    <section className="pb-[88px]">
      <div className="flex items-center gap-4 text-[12px] text-muted font-mono tracking-[0.24px] mb-8">
        <span>/</span>
        <span>02</span>
        <span>Tools I reach for</span>
      </div>
      <div>
        {TOOLS.map((cat, i) => (
          <div
            key={cat.label}
            className={`grid grid-cols-[120px_1fr] gap-6 py-4 ${
              i < TOOLS.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="text-[12px] text-muted font-mono tracking-[0.24px] pt-0.5">
              {cat.label}
            </span>
            <span className="text-[14px] text-text">{cat.items.join(" · ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
