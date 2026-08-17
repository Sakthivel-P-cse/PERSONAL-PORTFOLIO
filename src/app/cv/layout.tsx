import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `cv — ${portfolio.name}`,
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
