import { TOOLS } from "@/app/(data)/tools";

export function ToolsSection() {
  return (
    <section>
      <div className="flex items-center gap-4 text-xs text-muted font-mono mb-6">
        <span>/</span>
        <span>03</span>
        <span>TOOLS I REACH FOR</span>
      </div>
      <div className="border-t border-border">
        {TOOLS.map((cat) => (
          <div
            key={cat.label}
            className="grid grid-cols-[8rem_1fr] gap-4 py-3 border-b border-border"
          >
            <span className="text-xs text-muted font-mono pt-0.5">{cat.label}</span>
            <span className="text-sm text-text">{cat.items.join(" · ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
