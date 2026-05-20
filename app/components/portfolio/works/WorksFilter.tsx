"use client";

const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "case-study", label: "Case Study" },
  { value: "experiment", label: "Experiment" },
  { value: "program", label: "Program" },
  { value: "infra", label: "Infra" },
  { value: "talk", label: "Talk" },
  { value: "team", label: "Team" },
  { value: "writing", label: "Writing" },
] as const;

interface WorksFilterProps {
  selected: string;
  onChange: (value: string) => void;
  totalCount: number;
}

export function WorksFilter({ selected, onChange, totalCount }: WorksFilterProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs text-muted font-mono uppercase tracking-widest">Filter</p>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onChange(cat.value)}
            className={`text-xs px-3 py-1 font-mono transition-colors ${
              selected === cat.value
                ? "bg-text text-bg"
                : "border border-border text-muted hover:text-text"
            }`}
          >
            {cat.value === "all" ? `All · ${totalCount}` : cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
