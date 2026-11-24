import type { Metadata } from "next";
import Gallery from "@/components/lab/Gallery";
import "./lab.css";

export const metadata: Metadata = {
  title: "UI candidates — lab",
  robots: { index: false, follow: false },
};

export default function LabPage() {
  return <Gallery />;
}
