import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/cv", "/links"].map((path) => ({
    url: `https://sakthivel-portfolio-ecru.vercel.app${path || "/"}`,
  }));
}
