import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site-data";

const BASE_URL = "";

interface SitemapEntry { path: string; changefreq?: string; priority?: string; }

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/about", "/services", "/portfolio", "/case-studies", "/industries", "/blog", "/careers", "/contact"];
        const entries: SitemapEntry[] = [
          ...staticPaths.map((p) => ({ path: p, changefreq: "weekly", priority: p === "/" ? "1.0" : "0.8" })),
          ...SERVICES.map((s) => ({ path: `/services/${s.slug}`, changefreq: "monthly", priority: "0.7" })),
        ];
        const urls = entries.map((e) => [
          `  <url>`,
          `    <loc>${BASE_URL}${e.path}</loc>`,
          e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
          e.priority ? `    <priority>${e.priority}</priority>` : null,
          `  </url>`,
        ].filter(Boolean).join("\n"));
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
