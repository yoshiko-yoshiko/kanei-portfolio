import { INFLUENCES } from "@/app/(data)/influences";

export function InfluencesSection() {
  return (
    <section>
      <div className="flex items-center gap-4 text-xs text-muted font-mono mb-6">
        <span>/</span>
        <span>04</span>
        <span>INFLUENCES</span>
      </div>
      <div className="border-t border-border">
        {INFLUENCES.map((item) => (
          <div
            key={item.name}
            className="grid grid-cols-[10rem_1fr] gap-4 py-4 border-b border-border"
          >
            <span className="text-sm font-semibold text-text">{item.name}</span>
            <span className="text-sm text-muted">{item.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
