import type { Metadata } from "next";
import { SITE_CONFIG } from "../lib/constants";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.author} | ${SITE_CONFIG.title}`,
    template: `%s | ${SITE_CONFIG.author}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Engineer",
    "フルスタックエンジニア",
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "MCP",
    "MCPサーバー",
    "Claude Code",
    "AIエージェント",
    "ポートフォリオ",
    "ポートフォリオサイト",
    "Webアプリ開発",
    "医療系アプリ",
    "Kanei Nakashima",
    SITE_CONFIG.author,
  ],
  authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.author} | ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.author} | ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console verification (add your code when available)
    // google: "your-verification-code",
  },
};
