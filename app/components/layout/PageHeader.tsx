import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  backHref?: string;
  backLabel?: string;
}

export function PageHeader({ backHref = '/', backLabel = 'Back' }: PageHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#1a1a1a]/5">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-[#1a1a1a]/60 hover:text-[#10b981] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
      </div>
    </header>
  );
}
