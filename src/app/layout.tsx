import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/data/portfolio";
import CommandPalette from "@/components/nav/CommandPalette";

export const metadata: Metadata = {
  metadataBase: new URL("https://sakthivel-portfolio-ecru.vercel.app"),
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  keywords: portfolio.seo.keywords,
  authors: [{ name: portfolio.seo.author }],
  openGraph: {
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: portfolio.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-ibm-plex">
        <main className="relative min-h-screen" style={{ backgroundColor: "#000000" }}>
          <CommandPalette />
          {children}
        </main>
      </body>
    </html>
  );
}
