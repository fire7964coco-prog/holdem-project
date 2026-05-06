/**
 * 모든 블로그 포스트의 "두 번째 이미지" LCP 위험도를 감사한다.
 *
 * 목적: lib/blog-lcp.ts 가 "첫 번째 LCP 블록"을 페이지 하단으로 옮긴 뒤,
 *       남은 본문에서 첫 번째 이미지가 모바일 첫 화면(약 800px) 안에
 *       들어올 가능성이 큰 포스트를 찾는다.
 *
 * 위험도:
 *   HIGH   : 첫 H2 까지 본문 라인이 10줄 이하 + 첫 H2 직후 이미지 존재 → LCP 가능성 높음
 *   MEDIUM : 첫 H2 까지 20줄 이하 + 본문 첫 이미지가 30줄 안
 *   LOW    : 첫 이미지가 30줄 이후
 *   NONE   : 본문에 이미지 없음
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const FAQCARD_RE = /:::faqcard\[([^\]]+)\]\[([^\]]*)\]\[([^\]]*)\]:::/;
const MD_IMG_RE = /!\[([^\]]*)\]\(([^)\s]+)/;

function getBlogLcpInfo(content) {
  const faqM = FAQCARD_RE.exec(content);
  const mdM = MD_IMG_RE.exec(content);
  const fi = faqM?.index ?? Infinity;
  const mi = mdM?.index ?? Infinity;
  if (fi === Infinity && mi === Infinity) return null;
  if (fi <= mi && faqM) return { src: faqM[1], source: "faqcard" };
  if (mdM) return { src: mdM[2], source: "markdown" };
  return null;
}

function stripFirstBlogLcpBlock(content, lcp) {
  if (lcp.source === "faqcard") {
    return content.replace(FAQCARD_RE, "");
  }
  const esc = lcp.src.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return content.replace(new RegExp(`!\\[[^\\]]*\\]\\(${esc}(?:\\s+"[^"]*")?\\)`), "");
}

/**
 * 백틱이 content 내부에 등장할 수 있어 정규식 종결 매칭을 신뢰할 수 없으므로,
 * `content: \`` 시작점부터 다음 slug 시작점까지를 그대로 분석 영역으로 쓴다.
 * (## 헤딩과 ![]() 이미지는 metadata 필드에는 등장하지 않으므로 위양성이 없다)
 */
function sliceFromContentMarker(block) {
  const m = /content:\s*`/.exec(block);
  if (!m) return null;
  return block.slice(m.index + m[0].length);
}

function extractPostsFromMain() {
  const filePath = path.join(ROOT, "lib", "posts.ts");
  const src = fs.readFileSync(filePath, "utf8");
  const posts = [];
  const slugRe = /slug:\s*"([^"]+)"/g;
  const slugMatches = [];
  let sm;
  while ((sm = slugRe.exec(src)) !== null) {
    slugMatches.push({ slug: sm[1], slugIndex: sm.index });
  }
  for (let i = 0; i < slugMatches.length; i++) {
    const start = slugMatches[i].slugIndex;
    const end = i + 1 < slugMatches.length ? slugMatches[i + 1].slugIndex : src.length;
    const block = src.slice(start, end);
    const content = sliceFromContentMarker(block);
    if (content) {
      posts.push({ slug: slugMatches[i].slug, content, file: "lib/posts.ts" });
    }
  }
  return posts;
}

function extractPostsFromIndividual() {
  const dir = path.join(ROOT, "lib", "posts");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".ts"));
  return files
    .map((f) => {
      const src = fs.readFileSync(path.join(dir, f), "utf8");
      const slugM = /slug:\s*"([^"]+)"/.exec(src);
      const content = sliceFromContentMarker(src);
      if (!slugM || !content) return null;
      return { slug: slugM[1], content, file: `lib/posts/${f}` };
    })
    .filter(Boolean);
}

const all = [...extractPostsFromMain(), ...extractPostsFromIndividual()];
console.log(`\n총 ${all.length}개 포스트 감사\n`);

const rows = [];

for (const post of all) {
  const lcp = getBlogLcpInfo(post.content);
  const stripped = lcp ? stripFirstBlogLcpBlock(post.content, lcp) : post.content;

  const lines = stripped.split("\n");

  // 첫 H2 위치
  let firstH2 = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s+/.test(lines[i])) {
      firstH2 = i + 1;
      break;
    }
  }

  // 본문 첫 이미지 위치 (faqcard 또는 ![]())
  let firstImg = -1;
  let firstImgSrc = "";
  for (let i = 0; i < lines.length; i++) {
    const fM = /:::faqcard\[([^\]]+)\]/.exec(lines[i]);
    const mM = /!\[[^\]]*\]\(([^)\s]+)/.exec(lines[i]);
    if (fM || mM) {
      firstImg = i + 1;
      firstImgSrc = (fM ? fM[1] : mM[1]).split("/").pop();
      break;
    }
  }

  let risk = "OK";
  if (firstImg === -1) {
    risk = "NONE";
  } else {
    const linesBeforeImg = firstImg - 1;
    const distanceFromH2 = firstH2 > 0 ? firstImg - firstH2 : Infinity;
    if (linesBeforeImg <= 12 || (firstH2 > 0 && firstH2 <= 18 && distanceFromH2 <= 3)) {
      risk = "HIGH";
    } else if (linesBeforeImg <= 25) {
      risk = "MEDIUM";
    } else {
      risk = "LOW";
    }
  }

  rows.push({
    slug: post.slug,
    firstH2,
    firstImg,
    firstImgSrc,
    risk,
    file: post.file,
  });
}

const order = { HIGH: 0, MEDIUM: 1, LOW: 2, NONE: 3, OK: 4 };
rows.sort((a, b) => order[a.risk] - order[b.risk] || a.firstImg - b.firstImg);

const pad = (s, n) => String(s).padEnd(n);
console.log(pad("RISK", 8) + pad("LINE_H2", 9) + pad("LINE_IMG", 10) + pad("SLUG", 40) + "FIRST_IMG_FILE");
console.log("-".repeat(105));
for (const r of rows) {
  console.log(
    pad(r.risk, 8) +
      pad(r.firstH2 > 0 ? r.firstH2 : "-", 9) +
      pad(r.firstImg > 0 ? r.firstImg : "-", 10) +
      pad(r.slug, 40) +
      r.firstImgSrc
  );
}

const high = rows.filter((r) => r.risk === "HIGH");
const med = rows.filter((r) => r.risk === "MEDIUM");
console.log(`\n요약: HIGH ${high.length}개 / MEDIUM ${med.length}개 / 나머지 ${rows.length - high.length - med.length}개`);
if (high.length) {
  console.log(`\nHIGH 위험 포스트 (즉시 수정 권장):`);
  for (const r of high) console.log(`  - ${r.slug}  (line ${r.firstImg}: ${r.firstImgSrc})`);
}
