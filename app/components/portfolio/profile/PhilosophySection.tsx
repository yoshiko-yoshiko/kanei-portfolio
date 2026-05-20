import { PHILOSOPHY } from "@/app/(data)/philosophy";

export function PhilosophySection() {
  return (
    <section>
      <div className="flex items-center gap-4 text-xs text-muted font-mono mb-6">
        <span>/</span>
        <span>02</span>
        <span>Philosophy</span>
      </div>
      <div className="grid md:grid-cols-2 gap-0 border-t border-border">
        {PHILOSOPHY.map((item, i) => (
          <div
            key={item.num}
            className={`py-6 pr-6 border-b border-border ${
              i % 2 === 0 ? "md:border-r md:border-border" : ""
            }`}
          >
            <p className="text-xs font-mono text-muted mb-2">{item.num}</p>
            <p className="text-sm font-semibold text-text mb-2">{item.title}</p>
            <p className="text-sm text-muted leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
