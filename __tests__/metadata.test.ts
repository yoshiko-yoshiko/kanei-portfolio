import { describe, it, expect } from 'vitest';
import { siteMetadata } from '@/app/_seo/metadata';
import { SITE_CONFIG } from '@/app/lib/constants/site';

describe('siteMetadata', () => {
  it('should have a metadataBase URL', () => {
    expect(siteMetadata.metadataBase).toBeInstanceOf(URL);
    expect((siteMetadata.metadataBase as URL).href).toContain(SITE_CONFIG.url);
  });

  it('should have title with default and template', () => {
    const title = siteMetadata.title as { default: string; template: string };
    expect(title.default).toBeTruthy();
    expect(title.default).toContain(SITE_CONFIG.author);
    expect(title.template).toBeTruthy();
    expect(title.template).toContain('%s');
  });

  it('should have a description', () => {
    expect(siteMetadata.description).toBeTruthy();
    expect(siteMetadata.description).toBe(SITE_CONFIG.description);
  });

  it('should have keywords array', () => {
    expect(Array.isArray(siteMetadata.keywords)).toBe(true);
    expect((siteMetadata.keywords as string[]).length).toBeGreaterThan(0);
  });

  it('should have openGraph configuration', () => {
    const og = siteMetadata.openGraph as Record<string, unknown>;
    expect(og).toBeTruthy();
    expect(og.type).toBe('website');
    expect(og.locale).toBe('ja_JP');
    expect(og.url).toBe(SITE_CONFIG.url);
    expect(og.title).toContain(SITE_CONFIG.author);
    expect(og.siteName).toBe(SITE_CONFIG.name);
  });

  it('should have twitter card configuration', () => {
    const twitter = siteMetadata.twitter as Record<string, unknown>;
    expect(twitter).toBeTruthy();
    expect(twitter.card).toBe('summary_large_image');
    expect(twitter.title).toContain(SITE_CONFIG.author);
  });

  it('should have robots configuration allowing indexing', () => {
    const robots = siteMetadata.robots as Record<string, unknown>;
    expect(robots).toBeTruthy();
    expect(robots.index).toBe(true);
    expect(robots.follow).toBe(true);
  });

  // --- QA Review additions (reviewer: senshu1) ---

  it('openGraph should have description', () => {
    const og = siteMetadata.openGraph as Record<string, unknown>;
    expect(og.description, 'OG description missing').toBeTruthy();
    expect(og.description).toBe(SITE_CONFIG.description);
  });

  it('twitter should have description', () => {
    const twitter = siteMetadata.twitter as Record<string, unknown>;
    expect(twitter.description, 'Twitter description missing').toBeTruthy();
    expect(twitter.description).toBe(SITE_CONFIG.description);
  });

  it('should have authors, creator, and publisher', () => {
    const authors = siteMetadata.authors as Array<{ name: string; url: string }>;
    expect(authors).toBeTruthy();
    expect(authors.length).toBeGreaterThan(0);
    expect(authors[0].name).toBe(SITE_CONFIG.author);
    expect(siteMetadata.creator).toBe(SITE_CONFIG.author);
    expect(siteMetadata.publisher).toBe(SITE_CONFIG.author);
  });

  it('should have canonical URL in alternates', () => {
    const alternates = siteMetadata.alternates as Record<string, unknown>;
    expect(alternates).toBeTruthy();
    expect(alternates.canonical).toBe(SITE_CONFIG.url);
  });

  it('googleBot should allow full content previews', () => {
    const robots = siteMetadata.robots as { googleBot: Record<string, unknown> };
    expect(robots.googleBot).toBeTruthy();
    expect(robots.googleBot.index).toBe(true);
    expect(robots.googleBot.follow).toBe(true);
    expect(robots.googleBot['max-image-preview']).toBe('large');
  });

  it('keywords should not contain duplicates', () => {
    const keywords = siteMetadata.keywords as string[];
    const lower = keywords.map(k => k.toLowerCase());
    const seen = new Set<string>();
    const duplicates: string[] = [];
    for (const kw of lower) {
      if (seen.has(kw)) duplicates.push(kw);
      seen.add(kw);
    }
    expect(
      duplicates,
      `Duplicate keywords found: ${duplicates.join(', ')}`
    ).toEqual([]);
  });
});
