import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  keywords: portfolio.seo.keywords,
  authors: [{ name: portfolio.seo.author }],
  openGraph: {
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    images: [
      {
        url: "/images/favicon.png",
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
    images: ["/images/favicon.png"],
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
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
        <main className="relative min-h-screen" style={{ backgroundColor: "#0a0a0a" }}>
          <nav className="site-nav" aria-label="primary">
            <a href="/links">links</a>
            <a href="/cv">cv</a>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
