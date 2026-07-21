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
const { SECONDARY_LOCALES, HTML_LANG } = jiti("../lib/intl.ts");
const { POSTS_BY_LOCALE } = jiti("../lib/intl-posts.ts");

const SITE = "https://www.holdemmaster.com";

function secondaryLocalesForSlug(slug) {
  return SECONDARY_LOCALES.filter((l) => POSTS_BY_LOCALE[l].some((p) => p.slug === slug));
}

/** trailing slash 없음 (next.config trailingSlash: false) */
const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/calculator", priority: "0.95", changefreq: "monthly" },
  { path: "/quiz", priority: "0.85", changefreq: "monthly" },
  { path: "/win-rate-quiz", priority: "0.8", changefreq: "monthly" },
  // /hands · /rules/texas-holdem · /hand-chart 은 noindex(app/.../page.tsx robots index:false) → 사이트맵에서 제외.
  //   블로그 필라(holdem-hand-rankings · holdem-starting-hand-range 등)와 키워드 카니발라이제이션 방지.
  { path: "/glossary", priority: "0.8", changefreq: "monthly" },
  { path: "/rules", priority: "0.9", changefreq: "monthly" },
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
  ...SECONDARY_LOCALES.map((l) => ({ path: `/${l}/blog`, priority: "0.7", changefreq: "weekly" })),
];

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function entry(loc, lastmod, changefreq, priority, alternates) {
  const altLinks = (alternates || [])
    .map((a) => `\n    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`)
    .join("");
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${altLinks}
  </url>`;
}

/** 번역본이 있는 글의 hreflang 대체 링크 묶음 (ko + 보조 언어 + x-default) */
function altsForSlug(slug) {
  const secondaries = secondaryLocalesForSlug(slug);
  if (secondaries.length === 0) return [];
  const alts = [{ hreflang: "ko", href: `${SITE}/blog/${slug}` }];
  for (const l of secondaries) {
    alts.push({ hreflang: HTML_LANG[l], href: `${SITE}/${l}/blog/${slug}` });
  }
  const xDefault = secondaries.includes("en")
    ? `${SITE}/en/blog/${slug}`
    : `${SITE}/${secondaries[0]}/blog/${slug}`;
  alts.push({ hreflang: "x-default", href: xDefault });
  return alts;
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
      "0.8",
      altsForSlug(p.slug)
    )
  );

const intlBlogEntries = SECONDARY_LOCALES.flatMap((l) =>
  [...POSTS_BY_LOCALE[l]]
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map((p) =>
      entry(`${SITE}/${l}/blog/${p.slug}`, p.updated || p.date, "monthly", "0.8", altsForSlug(p.slug))
    )
);

const intlCount = SECONDARY_LOCALES.reduce((n, l) => n + POSTS_BY_LOCALE[l].length, 0);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- 자동 생성: npm run generate:sitemap · 블로그 lastmod = post.updated || post.date -->

${staticEntries.join("\n\n")}

  <!-- 블로그 포스트 (${POSTS.length}편) -->

${blogEntries.join("\n\n")}

  <!-- 다국어 블로그 포스트 (${intlCount}편) -->

${intlBlogEntries.join("\n\n")}

</urlset>
`;

const outPath = join(root, "public", "sitemap.xml");
writeFileSync(outPath, xml, "utf8");

console.log(`sitemap.xml → ${POSTS.length} blog posts + ${intlCount} intl posts + ${STATIC_ROUTES.length} static URLs`);
console.log(`Latest blog lastmod: ${[...POSTS].map((p) => p.updated || p.date).sort().pop()}`);
