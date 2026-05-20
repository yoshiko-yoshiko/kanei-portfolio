import Link from "next/link";
import { AvailableBadge } from "@/app/components/ui/AvailableBadge";

interface PageHeaderProps {
  pageTitle: string;
  backLink?: string;
}

export function PageHeader({ pageTitle, backLink }: PageHeaderProps) {
  return (
    <header className="flex items-start justify-between pt-12 pb-6">
      <span className="flex items-center gap-2 font-mono text-xs text-muted tracking-[0.24px]">
        {backLink && (
          <Link href={backLink} className="hover:text-text transition-colors">
            &lt;
          </Link>
        )}
        <span>KN / {pageTitle} · 2026</span>
      </span>
      <AvailableBadge />
    </header>
  );
}
