interface PageFooterProps {
  rightText?: string;
}

export function PageFooter({ rightText }: PageFooterProps) {
  return (
    <footer className="flex items-center justify-between pt-6 pb-12">
      <span className="text-xs text-muted font-mono tracking-[0.24px]">
        © 2026 — Kanei Nakashima
      </span>
      {rightText && (
        <span className="text-xs text-muted font-mono tracking-[0.24px]">{rightText}</span>
      )}
    </footer>
  );
}
