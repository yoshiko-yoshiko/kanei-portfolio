export function AvailableBadge() {
  return (
    <span className="flex items-center gap-1.5">
      <span className="inline-block w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
      <span className="text-xs text-accent font-mono">Available</span>
    </span>
  );
}
