import { INFLUENCES } from "@/app/(data)/influences";

export function InfluencesSection() {
  return (
    <section className="pb-[88px]">
      <div className="flex items-center gap-4 text-[12px] text-muted font-mono tracking-[0.24px] mb-8">
        <span>/</span>
        <span>03</span>
        <span>Influences</span>
      </div>
      <div>
        {INFLUENCES.map((item, i) => (
          <div
            key={item.name}
            className={`grid grid-cols-[160px_1fr] gap-6 py-5 ${
              i < INFLUENCES.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="text-[15px] font-medium text-text">{item.name}</span>
            <span className="text-[14px] text-muted leading-relaxed font-jp">{item.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
