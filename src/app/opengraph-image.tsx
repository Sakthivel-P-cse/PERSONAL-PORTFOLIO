import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: 90, background: "#0a0a0a", color: "#e8e8e8" }}>
      <div style={{ color: "#00ffd5", fontSize: 80, fontWeight: 700 }}>{"> sakthi/"}</div>
      <div style={{ marginTop: 32, fontSize: 38 }}>{portfolio.shortTitle}</div>
      <div style={{ marginTop: 50, width: 120, height: 4, background: "#00ffd5" }} />
    </div>,
    size
  );
}
