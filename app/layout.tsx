import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: { default: "Sakthivel P — Distributed Systems & AI Infrastructure", template: "%s — Sakthivel P" }, description: "Portfolio of Sakthivel P, a Computer Science Engineering student building distributed systems, backend infrastructure, observability tooling and AI platforms.", openGraph: { title: "Sakthivel P — Distributed Systems & AI Infrastructure", description: "Distributed systems, backend engineering, observability and durable AI infrastructure.", type: "website" }, robots: { index: true, follow: true } };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080b0a" };
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
