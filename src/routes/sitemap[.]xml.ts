import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/services/acrylic-rendering", changefreq: "monthly", priority: "0.7" },
          { path: "/services/cement-rendering", changefreq: "monthly", priority: "0.7" },
          { path: "/services/texture-coating", changefreq: "monthly", priority: "0.7" },
          { path: "/services/blue-board-rendering", changefreq: "monthly", priority: "0.7" },
          { path: "/services/foam-panel-rendering", changefreq: "monthly", priority: "0.7" },
          { path: "/services/commercial-rendering", changefreq: "monthly", priority: "0.7" },
          { path: "/services/residential-rendering", changefreq: "monthly", priority: "0.7" },
          { path: "/services/render-repairs", changefreq: "monthly", priority: "0.7" },
          { path: "/projects", changefreq: "weekly", priority: "0.9" },
          { path: "/projects/the-kew-residence", changefreq: "monthly", priority: "0.6" },
          { path: "/projects/brighton-curves", changefreq: "monthly", priority: "0.6" },
          { path: "/projects/st-kilda-workspace", changefreq: "monthly", priority: "0.6" },
          { path: "/projects/the-mosman-residence", changefreq: "monthly", priority: "0.6" },
          { path: "/projects/hawthorn-heritage-repair", changefreq: "monthly", priority: "0.6" },
          { path: "/projects/trowel-detail-study", changefreq: "monthly", priority: "0.5" },
          { path: "/gallery", changefreq: "monthly", priority: "0.7" },
          { path: "/before-after", changefreq: "monthly", priority: "0.7" },
          { path: "/journal", changefreq: "weekly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.8" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

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
