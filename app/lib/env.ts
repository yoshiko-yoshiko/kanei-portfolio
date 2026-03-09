/**
 * Environment variable validation
 */

export const env = {
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '',
} as const;

if (process.env.NODE_ENV === 'development') {
  if (!env.GA_MEASUREMENT_ID) {
    console.warn('[env] NEXT_PUBLIC_GA_MEASUREMENT_ID is not set. Google Analytics will be disabled.');
  }
}
