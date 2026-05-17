/**
 * POSTS + 정적 경로 → public/sitemap.xml 생성
 * 사용: npm run generate:sitemap (build 전 자동 실행)
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const jiti = createJiti(join(root, "scripts", "generate-sitemap.mjs"));
const { POSTS } = jiti("../lib/posts.ts");

const SITE = "https://holdemmaster.com";

/** trailing slash 없음 (next.config trailingSlash: false) */
const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/calculator", priority: "0.95", changefreq: "monthly" },
  { path: "/quiz", priority: "0.85", changefreq: "monthly" },
  { path: "/hand-chart", priority: "0.85", changefreq: "monthly" },
  { path: "/hands", priority: "0.85", changefreq: "monthly" },
  { path: "/glossary", priority: "0.8", changefreq: "monthly" },
  { path: "/rules", priority: "0.9", changefreq: "monthly" },
  { path: "/rules/texas-holdem", priority: "0.85", changefreq: "monthly" },
  { path: "/rules/omaha", priority: "0.8", changefreq: "monthly" },
  { path: "/rules/seven-card-stud", priority: "0.8", changefreq: "monthly" },
  { path: "/strategy", priority: "0.85", changefreq: "monthly" },
  { path: "/ranking", priority: "0.9", changefreq: "weekly" },
  { path: "/tournaments", priority: "0.9", changefreq: "weekly" },
  { path: "/pub", priority: "0.9", changefreq: "weekly" },
  { path: "/pub/gangnam", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/hongdae", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/ilsan", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/suwon", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/incheon", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/bundang", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/busan", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/daegu", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/kondae", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/sinchon", priority: "0.85", changefreq: "weekly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/blog/roadmap", priority: "0.7", changefreq: "weekly" },
];

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function entry(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const siteToday = todayIso();

const staticEntries = STATIC_ROUTES.map((r) =>
  entry(`${SITE}${r.path}`, siteToday, r.changefreq, r.priority)
);

const blogEntries = [...POSTS]
  .sort((a, b) => a.slug.localeCompare(b.slug))
  .map((p) =>
    entry(
      `${SITE}/blog/${p.slug}`,
      p.updated || p.date,
      "monthly",
      "0.8"
    )
  );

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- 자동 생성: npm run generate:sitemap · 블로그 lastmod = post.updated || post.date -->

${staticEntries.join("\n\n")}

  <!-- 블로그 포스트 (${POSTS.length}편) -->

${blogEntries.join("\n\n")}

</urlset>
`;

const outPath = join(root, "public", "sitemap.xml");
writeFileSync(outPath, xml, "utf8");

console.log(`sitemap.xml → ${POSTS.length} blog posts + ${STATIC_ROUTES.length} static URLs`);
console.log(`Latest blog lastmod: ${[...POSTS].map((p) => p.updated || p.date).sort().pop()}`);
