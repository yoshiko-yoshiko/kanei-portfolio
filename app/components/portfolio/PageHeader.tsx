import { AvailableBadge } from "@/app/components/ui/AvailableBadge";

interface PageHeaderProps {
  pageTitle: string;
}

export function PageHeader({ pageTitle }: PageHeaderProps) {
  return (
    <header className="flex items-center justify-between py-4 border-b border-border">
      <span className="font-mono text-sm text-text">
        KN / {pageTitle} · 2026
      </span>
      <AvailableBadge />
    </header>
  );
}
