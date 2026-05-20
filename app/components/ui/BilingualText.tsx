import { clsx } from 'clsx';

interface BilingualTextProps {
  jp: string;
  en: string;
  as?: 'p' | 'span' | 'div';
  spacing?: 'tight' | 'normal';
  className?: string;
}

export function BilingualText({
  jp,
  en,
  as: Tag = 'div',
  spacing = 'normal',
  className,
}: BilingualTextProps) {
  return (
    <Tag className={className}>
      <span className="block text-text font-jp">{jp}</span>
      <span className={clsx('block text-muted italic text-sm', spacing === 'normal' && 'mt-1')}>
        {en}
      </span>
    </Tag>
  );
}
