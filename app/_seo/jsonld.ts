import { SITE_CONFIG, SOCIAL_LINKS } from "../lib/constants";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.author,
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  description: SITE_CONFIG.description,
  image: `${SITE_CONFIG.url}/opengraph-image`,
  jobTitle: "Fullstack Engineer",
  worksFor: {
    "@type": "Organization",
    name: "株式会社FIXER",
  },
  sameAs: SOCIAL_LINKS.filter((link) => link.url.startsWith("http")).map(
    (link) => link.url
  ),
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "MCP Server",
    "AI Agent",
  ],
};
