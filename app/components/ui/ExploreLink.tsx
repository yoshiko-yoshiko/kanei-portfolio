import Link from 'next/link';
import { clsx } from 'clsx';

interface ExploreLinkProps {
  href: string;
  jp: string;
  en: string;
  className?: string;
}

export function ExploreLink({ href, jp, en, className }: ExploreLinkProps) {
  return (
    <Link href={href} className={clsx('inline-flex items-baseline', className)}>
      <span className="text-text text-sm">{jp}</span>
      <span className="text-muted italic text-sm">{' / '}{en}</span>
      <span className="text-text text-sm ml-1">{'→'}</span>
    </Link>
  );
}
