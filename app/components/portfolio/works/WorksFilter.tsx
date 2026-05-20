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
}

export function WorksFilter({ selected, onChange }: WorksFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <p className="w-full text-xs text-muted font-mono mb-1">FILTER</p>
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
          {cat.label}
          {cat.value === "all" && selected === "all" ? " ·" : ""}
        </button>
      ))}
    </div>
  );
}
