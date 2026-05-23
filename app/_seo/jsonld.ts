import { SITE_CONFIG, SOCIAL_LINKS } from "../lib/constants";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.author,
  alternateName: ["中島寛瑛", "Nakashima Kanei", "なかしま かんえい"],
  givenName: "Kanei",
  familyName: "Nakashima",
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  description: SITE_CONFIG.description,
  image: `${SITE_CONFIG.url}/opengraph-image`,
  jobTitle: "Fullstack Engineer",
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
    "Claude Code",
    "医療系Webアプリ開発",
  ],
};
