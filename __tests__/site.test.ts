import { describe, it, expect } from 'vitest';
import { SOCIAL_LINKS, SITE_CONFIG } from '@/app/lib/constants/site';

describe('SOCIAL_LINKS', () => {
  it('should be a non-empty array', () => {
    expect(Array.isArray(SOCIAL_LINKS)).toBe(true);
    expect(SOCIAL_LINKS.length).toBeGreaterThan(0);
  });

  it('each link should have name and url', () => {
    for (const link of SOCIAL_LINKS) {
      expect(link.name).toBeTruthy();
      expect(link.url).toBeTruthy();
    }
  });

  it('each url should be a valid URL or mailto', () => {
    const urlPattern = /^https?:\/\/.+/;
    const mailtoPattern = /^mailto:.+@.+\..+/;

    for (const link of SOCIAL_LINKS) {
      const isValidUrl = urlPattern.test(link.url) || mailtoPattern.test(link.url);
      expect(isValidUrl, `${link.name}: "${link.url}" is not a valid URL or mailto`).toBe(true);
    }
  });

  it('should not have duplicate names', () => {
    const names = SOCIAL_LINKS.map((l) => l.name);
    expect(new Set(names).size).toBe(names.length);
  });
});

describe('SITE_CONFIG', () => {
  it('should have all required fields', () => {
    expect(SITE_CONFIG.name).toBeTruthy();
    expect(SITE_CONFIG.title).toBeTruthy();
    expect(SITE_CONFIG.description).toBeTruthy();
    expect(SITE_CONFIG.author).toBeTruthy();
    expect(SITE_CONFIG.email).toBeTruthy();
    expect(SITE_CONFIG.url).toBeTruthy();
  });

  it('url should be a valid https URL', () => {
    expect(SITE_CONFIG.url).toMatch(/^https:\/\/.+/);
  });

  it('email should be a valid email format', () => {
    expect(SITE_CONFIG.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  // --- QA Review additions (reviewer: senshu1) ---

  it('url should not have a trailing slash', () => {
    expect(SITE_CONFIG.url).not.toMatch(/\/$/);
  });

  it('SITE_CONFIG.email should match the Email entry in SOCIAL_LINKS', () => {
    const emailLink = SOCIAL_LINKS.find(l => l.name === 'Email');
    if (emailLink) {
      expect(emailLink.url).toBe(`mailto:${SITE_CONFIG.email}`);
    }
  });
});

describe('SOCIAL_LINKS - additional QA checks', () => {
  it('each url with https should have a valid domain (contains a dot)', () => {
    for (const link of SOCIAL_LINKS) {
      if (link.url.startsWith('https://')) {
        const domain = link.url.replace('https://', '').split('/')[0];
        expect(
          domain.includes('.'),
          `${link.name}: domain "${domain}" has no TLD`
        ).toBe(true);
      }
    }
  });

  it('no url should have trailing whitespace or spaces', () => {
    for (const link of SOCIAL_LINKS) {
      expect(link.url, `${link.name} url has whitespace`).toBe(link.url.trim());
      expect(link.url, `${link.name} url contains spaces`).not.toContain(' ');
    }
  });

  it('no name should have trailing whitespace', () => {
    for (const link of SOCIAL_LINKS) {
      expect(link.name, `link name has whitespace`).toBe(link.name.trim());
    }
  });
});
