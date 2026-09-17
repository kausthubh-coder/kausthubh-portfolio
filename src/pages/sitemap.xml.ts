import type { APIRoute } from "astro";
import { projects } from "../data/projects";
import { site } from "../data/site";

const paths = ["/", ...projects.map((project) => `/projects/${project.slug}/`), "/workflow/"];

export const GET: APIRoute = () => {
  const urls = paths.map((path) => `  <url><loc>${new URL(path, site.url).href}</loc></url>`).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
