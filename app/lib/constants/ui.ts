/**
 * Shared Tailwind class patterns for interactive elements.
 * Keeps hover/border styling consistent across components.
 * Analog Studio theme — light surfaces with deep moss green accents.
 */

/** Card with border highlight + subtle shadow on hover (links, contact items) */
export const CARD_HOVER =
  'border border-border hover:border-border-hover hover:bg-surface-hover hover:shadow-[0_2px_8px_rgba(45,122,95,0.06)] transition-all';

/** Navigation card with softer border highlight (prev/next project) */
export const NAV_CARD_HOVER =
  'border border-border hover:border-border-hover transition-colors';

/** Outline button with text color change on hover (secondary actions) */
export const OUTLINE_HOVER =
  'border border-border hover:border-primary hover:text-primary transition-colors';
