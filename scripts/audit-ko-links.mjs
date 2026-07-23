import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

// ---- 1) KO 유효 슬러그 수집 (lib/posts.ts LEGACY + lib/posts/*.ts NEW) ----
const koSlugs = new Set();
const sources = []; // { name, txt }

const legacy = readFileSync("lib/posts.ts", "utf8");
sources.push({ name: "lib/posts.ts", txt: legacy });
for (const m of legacy.matchAll(/slug:\s*["']([^"']+)["']/g)) koSlugs.add(m[1]);

const NEWDIR = "lib/posts";
for (const f of readdirSync(NEWDIR)) {
  if (!f.endsWith(".ts") || f === "index.ts" || f === "types.ts") continue;
  const txt = readFileSync(join(NEWDIR, f), "utf8");
  sources.push({ name: `lib/posts/${f}`, txt });
  for (const m of txt.matchAll(/slug:\s*["']([^"']+)["']/g)) koSlugs.add(m[1]);
}

console.log(`\n==== KO 링크 전수검사 ====`);
console.log(`KO 유효 블로그 슬러그: ${koSlugs.size}개`);

// ---- 2) 내부링크 추출 & 검사 ----
// KO 블로그 라우트는 /blog/<slug> (locale 없음). trailingSlash:false.
const brokenBlog = [];      // /blog/<slug> 인데 slug 미존재 = 404
const trailingSlash = [];   // /blog/x/ = 301
const crossLocale = [];     // /en/blog 등 KO 글에서 타 locale 링크(이상)
const otherPaths = new Map(); // 비-blog 내부경로 → 등장 수 (수동 확인용)

const linkRe = /(?:\]\(|href=["'])(\/[a-zA-Z0-9\/_#?.:-]+)/g;

for (const { name, txt } of sources) {
  for (const m of txt.matchAll(linkRe)) {
    let url = m[1];
    const path = url.split(/["')\s]/)[0].split("#")[0].split("?")[0];
    // locale-prefixed blog?
    const loc = path.match(/^\/([a-z]{2}(?:-[a-z]+)?)\/blog\/([a-z0-9-]+)(\/?)$/);
    if (loc) { crossLocale.push(`${name}: ${path}`); continue; }
    const b = path.match(/^\/blog\/([a-z0-9-]+)(\/?)$/);
    if (b) {
      const slug = b[1], slash = b[2];
      if (slash) trailingSlash.push(`${name}: /blog/${slug}/`);
      if (!koSlugs.has(slug)) brokenBlog.push(`${name}: /blog/${slug}${slash}`);
      continue;
    }
    if (path === "/blog" || path === "/") continue;
    // 비-blog 내부경로 (툴/앱 라우트)
    otherPaths.set(path, (otherPaths.get(path) || 0) + 1);
  }
}

console.log(`\n[🔴 깨진 블로그 링크 (미존재 slug = 404)] ${brokenBlog.length}건`);
[...new Set(brokenBlog)].sort().forEach((b) => console.log("  🔴 " + b));

console.log(`\n[🟠 trailing slash (/blog/x/ = 301)] ${[...new Set(trailingSlash)].length}건`);
[...new Set(trailingSlash)].sort().forEach((b) => console.log("  🟠 " + b));

console.log(`\n[🟠 KO 글에서 타 locale 블로그 링크] ${[...new Set(crossLocale)].length}건`);
[...new Set(crossLocale)].sort().forEach((b) => console.log("  🟠 " + b));

console.log(`\n[비-blog 내부경로 (툴/앱 라우트 — 존재 여부 수동 확인)]`);
[...otherPaths.entries()].sort((a, b) => b[1] - a[1]).forEach(([p, n]) => console.log(`  · ${p}  (${n})`));
