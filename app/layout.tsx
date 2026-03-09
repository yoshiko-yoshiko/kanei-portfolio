import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { siteMetadata } from "./_seo/metadata";
import { personJsonLd } from "./_seo/jsonld";

export const metadata: Metadata = siteMetadata;

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className="font-sans antialiased"
      >
        {children}
        <SpeedInsights />
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
