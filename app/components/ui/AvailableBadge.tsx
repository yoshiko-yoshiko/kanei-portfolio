export function AvailableBadge() {
  return (
    <span className="flex items-center gap-1.5">
      <span
        className="inline-block w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: "#3CC97A" }}
        aria-hidden="true"
      />
      <span className="text-xs font-mono" style={{ color: "#3CC97A" }}>
        Available
      </span>
    </span>
  );
}
