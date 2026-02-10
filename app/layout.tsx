import type { Metadata } from "next";
import { Poppins, BIZ_UDPGothic } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const bizUDPGothic = BIZ_UDPGothic({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-biz-udp",
  display: "swap",
});
import { SITE_CONFIG, SOCIAL_LINKS } from "./lib/constants";

export const metadata: Metadata = {
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
    "中島寛瑛",
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.author} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.author} | ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    images: ["/og-image.png"],
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

// JSON-LD structured data for Person schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.author,
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  description: SITE_CONFIG.description,
  image: `${SITE_CONFIG.url}/og-image.png`,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${bizUDPGothic.variable} font-sans antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
