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
    <div className="space-y-4">
      <p className="text-[12px] text-muted font-mono tracking-[0.24px]">Filter</p>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onChange(cat.value)}
            className={`text-[12px] px-3 py-1.5 font-mono tracking-[0.24px] transition-colors ${
              selected === cat.value
                ? "bg-text text-bg"
                : "border border-border text-text hover:bg-[#F0EDE7]"
            }`}
          >
            {cat.value === "all" ? `All · ${totalCount}` : cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
