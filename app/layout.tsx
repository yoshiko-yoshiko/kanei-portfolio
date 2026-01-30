import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SITE_CONFIG, SOCIAL_LINKS } from "./lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.author} | ${SITE_CONFIG.title}`,
    template: `%s | ${SITE_CONFIG.author}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "フルスタックエンジニア",
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "MCP",
    "AIエージェント",
    "ポートフォリオ",
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
  jobTitle: "Fullstack Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Tech Company",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
