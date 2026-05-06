// scripts/_verify-eeat.mjs — Phase 1~3 일괄 검증
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const read = (p) => fs.readFileSync(p, "utf8");

const SLUG_RE = /slug:\s*"([^"]+)"/g;
const TLDR_RE = /slug:\s*"([^"]+)"[\s\S]{0,4000}?tldr:\s*"([^"]+)"/g;
const UPDATED_RE = /slug:\s*"([^"]+)"[\s\S]{0,3000}?updated:\s*"([^"]+)"/g;

function collectSlugs() {
  const all = [];
  const main = read(path.join(ROOT, "lib", "posts.ts"));
  let m;
  while ((m = SLUG_RE.exec(main))) all.push(m[1]);
  SLUG_RE.lastIndex = 0;

  for (const f of fs.readdirSync(path.join(ROOT, "lib", "posts"))) {
    if (!f.endsWith(".ts") || f.startsWith("_") || f === "index.ts") continue;
    const s = read(path.join(ROOT, "lib", "posts", f));
    const sm = /slug:\s*"([^"]+)"/.exec(s);
    if (sm) all.push(sm[1]);
  }
  return all;
}

function collectField(re) {
  const found = new Map();
  const main = read(path.join(ROOT, "lib", "posts.ts"));
  let m;
  while ((m = re.exec(main))) found.set(m[1], m[2]);
  re.lastIndex = 0;

  for (const f of fs.readdirSync(path.join(ROOT, "lib", "posts"))) {
    if (!f.endsWith(".ts") || f.startsWith("_") || f === "index.ts") continue;
    const s = read(path.join(ROOT, "lib", "posts", f));
    let mm;
    const localRe = new RegExp(re.source, re.flags);
    while ((mm = localRe.exec(s))) found.set(mm[1], mm[2]);
  }
  return found;
}

const slugs = collectSlugs().filter((s) => s !== "슬러그-여기-입력");
const tldrMap = collectField(TLDR_RE);
const updatedMap = collectField(UPDATED_RE);

console.log(`\n전체 슬러그: ${slugs.length}개`);
console.log(`updated 있음: ${updatedMap.size}개`);
console.log(`tldr 있음: ${tldrMap.size}개`);

const missingUpdated = slugs.filter((s) => !updatedMap.has(s));
const missingTldr = slugs.filter((s) => !tldrMap.has(s));

if (missingUpdated.length) console.log(`❌ updated 누락:`, missingUpdated);
else console.log(`✓ updated 전수 적용`);

if (missingTldr.length) console.log(`❌ tldr 누락:`, missingTldr);
else console.log(`✓ tldr 전수 적용`);

// tldr 길이 분포
const lens = [...tldrMap.values()].map((v) => v.length);
const min = Math.min(...lens);
const max = Math.max(...lens);
const avg = (lens.reduce((a, b) => a + b, 0) / lens.length).toFixed(1);
console.log(`\ntldr 길이: 최소 ${min}자 / 최대 ${max}자 / 평균 ${avg}자`);

const tooShort = [...tldrMap.entries()].filter(([_, v]) => v.length < 30);
const tooLong = [...tldrMap.entries()].filter(([_, v]) => v.length > 120);
if (tooShort.length) console.log(`⚠️ 너무 짧음 (<30자):`, tooShort.map((e) => e[0]));
if (tooLong.length) console.log(`⚠️ 너무 긺 (>120자):`, tooLong.map((e) => e[0]));

// updated 날짜 분포
const dates = new Set(updatedMap.values());
console.log(`\nupdated 날짜 unique: ${[...dates].join(", ")}`);

// /about 페이지 존재
const aboutExists = fs.existsSync(path.join(ROOT, "app", "about", "page.tsx"));
console.log(`\n/about 페이지: ${aboutExists ? "✓ 존재" : "❌ 없음"}`);

// sitemap.xml 에 about 포함 여부
const sitemap = read(path.join(ROOT, "public", "sitemap.xml"));
console.log(`sitemap.xml 에 /about: ${sitemap.includes("/about") ? "✓" : "❌"}`);

// footer 에 /about 링크
const footer = read(path.join(ROOT, "components", "footer.tsx"));
console.log(`Footer 에 /about 링크: ${footer.includes('href="/about"') ? "✓" : "❌"}`);

// 작성자 박스 /about 링크
const blogClient = read(path.join(ROOT, "app", "blog", "[slug]", "blog-post-client.tsx"));
console.log(`작성자 박스 → /about: ${blogClient.includes('href="/about"') ? "✓" : "❌"}`);

// JSON-LD author URL
const blogPage = read(path.join(ROOT, "app", "blog", "[slug]", "page.tsx"));
console.log(`Article schema author.url → /about: ${blogPage.includes("/about") ? "✓" : "❌"}`);

// dateModified 갱신
console.log(`Article schema dateModified = updated: ${blogPage.includes("dateModified: post.updated") ? "✓" : "❌"}`);

// abstract 필드 (tldr)
console.log(`Article schema abstract = tldr: ${blogPage.includes("abstract: post.tldr") ? "✓" : "❌"}`);

// UI 표시 — '한 줄 정답', '업데이트' 라벨
console.log(`UI '💡 한 줄 정답' 박스: ${blogClient.includes("한 줄 정답") ? "✓" : "❌"}`);
console.log(`UI '업데이트' 라벨: ${blogClient.includes("업데이트") ? "✓" : "❌"}`);

console.log(`\n✅ 종합 검증 완료`);
