/**
 * Shared Tailwind class patterns for interactive elements.
 * Keeps hover/border styling consistent across components.
 */

/** Card with border highlight + subtle bg on hover (links, contact items) */
export const CARD_HOVER =
  'border border-foreground/10 hover:border-primary hover:bg-primary/5 transition-colors';

/** Navigation card with softer border highlight (prev/next project) */
export const NAV_CARD_HOVER =
  'border border-foreground/10 hover:border-primary/30 transition-colors';

/** Outline button with text color change on hover (secondary actions) */
export const OUTLINE_HOVER =
  'border border-foreground/10 hover:border-primary hover:text-primary transition-colors';
