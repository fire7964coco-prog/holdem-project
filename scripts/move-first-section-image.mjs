// scripts/move-first-section-image.mjs
//
// 목적: 모바일 LCP 회피 작업 2단계.
//   - 1단계(이미 적용): 본문 "최상단 첫 이미지" → 페이지 맨 하단 "이 글 전체 요약" 섹션으로 이동 (page.tsx + lib/blog-lcp.ts).
//   - 2단계(이 스크립트): 1단계 후 새로 LCP가 되는 "두 번째 이미지" 처리.
//     첫 ## 헤딩 직후(3줄 이내)에 이미지가 오는 패턴을 찾아,
//     같은 섹션 본문(표 또는 단락) 다음 — 다음 ## 또는 --- 직전 — 으로 이미지를 옮겨
//     모바일 첫 화면에 이미지 대신 텍스트가 오도록 한다.
//
// 처리 대상 (audit-blog-lcp.mjs 결과 기준):
//   HIGH 2개:   holdem-pot-odds-calculation, holdem-probability
//   MEDIUM 7개: apt-jeju-classic-2026-guide, holdem-bubble-strategy, holdem-cbet-strategy,
//               pocket-aces-aa-strategy, holdem-3bet-strategy, holdem-beginner-mistakes-10,
//               holdem-pub-legal
//
// 안전장치:
//   - "첫 ## 직후 3줄 이내에 이미지가 있다"는 명확한 패턴에만 동작 (그 외 SKIP)
//   - 드롭 위치를 못 찾으면 SKIP (원본 그대로 유지)
//   - 실행 후 git diff 로 검토 권장

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const SLUGS_TO_FIX = [
  // HIGH
  "holdem-pot-odds-calculation",
  "holdem-probability",
  // MEDIUM
  "apt-jeju-classic-2026-guide",
  "holdem-bubble-strategy",
  "holdem-cbet-strategy",
  "pocket-aces-aa-strategy",
  "holdem-3bet-strategy",
  "holdem-beginner-mistakes-10",
  "holdem-pub-legal",
];

/**
 * markdown 본문(content) 문자열을 받아 첫 ## 직후 이미지 블록을
 * 같은 섹션 끝(다음 ## 또는 ---) 직전으로 이동한 새 문자열을 반환.
 * 패턴이 안 맞으면 null 반환.
 */
function transformContent(content) {
  // CRLF/LF 모두 보존 — 줄 단위로 끊고 그대로 \n으로 join (각 라인의 \r 유지)
  const lines = content.split("\n");

  const IMG_RE = /!\[[^\]]*\]\([^)\s]+(?:\s+"[^"]*")?\)/;
  const FAQ_RE = /:::faqcard\[[^\]]+\]\[[^\]]*\]\[[^\]]*\]:::/;

  // 0) 첫 LCP 블록(첫 ![](...) 또는 첫 :::faqcard:::) 위치 — 이 줄 이전(또는 이 줄)을
  //    "이미지 후보"로 잡으면 안 된다. (lib/blog-lcp.ts 가 이 블록을 페이지 하단 요약으로
  //    이미 옮기고 있기 때문에, 우리가 또 옮기면 LCP 회피 효과가 사라지고 본문만 망가진다)
  let firstLcpLine = -1;
  for (let i = 0; i < lines.length; i++) {
    if (IMG_RE.test(lines[i]) || FAQ_RE.test(lines[i])) {
      firstLcpLine = i;
      break;
    }
  }

  // 1+2) 모든 ## 헤딩(### 제외)을 순회하며,
  //      "그 ## 직후 3줄 이내에 ![](...)" 가 오는 첫 번째 H2 를 찾는다.
  //      단, 후보 이미지 라인이 firstLcpLine 이하이면 스킵한다.
  let h2Line = -1;
  let imgLine = -1;
  for (let i = 0; i < lines.length; i++) {
    if (!/^##\s+[^#]/.test(lines[i])) continue;
    let candidateImg = -1;
    for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
      if (IMG_RE.test(lines[j])) {
        candidateImg = j;
        break;
      }
      if (lines[j].trim() !== "") break;
    }
    if (candidateImg === -1) continue;
    if (firstLcpLine !== -1 && candidateImg <= firstLcpLine) continue; // LCP 블록은 건드리지 않음
    h2Line = i;
    imgLine = candidateImg;
    break;
  }
  if (h2Line === -1 || imgLine === -1) return null;

  // 3) 이동시킬 블록 = 이미지 라인 + 캡션(선택) + 트레일링 빈 줄(선택)
  let blockEnd = imgLine + 1;
  // 캡션은 *...* 한 줄
  if (
    blockEnd < lines.length &&
    /^\*[^*\r\n]+\*\s*\r?$/.test(lines[blockEnd])
  ) {
    blockEnd++;
  }
  if (blockEnd < lines.length && lines[blockEnd].trim() === "") {
    blockEnd++;
  }
  const block = lines.slice(imgLine, blockEnd);

  // 4) 드롭 위치(드롭 = 이 라인 "직전"에 블록을 삽입) 찾기
  //    blockEnd 부터 스캔해서 다음 ## 또는 --- 라인을 찾는다
  let dropLine = -1;
  for (let i = blockEnd; i < lines.length; i++) {
    const ln = lines[i];
    if (/^##\s+/.test(ln) || /^---\s*\r?$/.test(ln)) {
      dropLine = i;
      break;
    }
  }
  if (dropLine === -1) return null;

  // 4-1) 드롭 직전이 빈 줄이라면 "그 빈 줄 다음" 으로 들어가도 되도록,
  //      가장 자연스러운 삽입은 "drop 라인 직전"에 [block + 빈줄] 을 넣는 것.
  //      단, 직전 라인이 이미 빈 줄이면 추가 빈줄은 생략.

  const before = lines.slice(0, imgLine); // ~ ## 헤딩 라인 까지
  const middle = lines.slice(blockEnd, dropLine); // 본문(표/단락 등)
  const after = lines.slice(dropLine); // 다음 ## 부터 끝까지

  // middle 끝이 빈 줄로 끝나는지 확인 (보장하기)
  const middleEndsWithBlank =
    middle.length > 0 && middle[middle.length - 1].trim() === "";
  const middleAdj = middleEndsWithBlank ? middle : [...middle, ""];

  // 블록 뒤에도 빈 줄 1개가 있도록 보장
  const blockEndsWithBlank =
    block.length > 0 && block[block.length - 1].trim() === "";
  const blockAdj = blockEndsWithBlank ? block : [...block, ""];

  const next = [...before, ...middleAdj, ...blockAdj, ...after];
  return next.join("\n");
}

/**
 * lib/posts.ts (배열형) 안에서 특정 slug 의 content 영역을 찾아 변환.
 * content: ` ... ` 의 종료 백틱은 본문 안 백틱과 헷갈릴 수 있으니
 * "다음 slug 시작" 또는 "} 닫힘" 패턴을 함께 본다.
 */
function processMainPostsTs() {
  const filePath = path.join(ROOT, "lib", "posts.ts");
  if (!fs.existsSync(filePath)) {
    console.log("(skip) lib/posts.ts not found");
    return { changed: 0 };
  }
  let src = fs.readFileSync(filePath, "utf8");
  let changed = 0;

  for (const slug of SLUGS_TO_FIX) {
    const slugRe = new RegExp(`slug:\\s*"${slug}"`);
    const slugMatch = slugRe.exec(src);
    if (!slugMatch) continue; // 이 파일에 없음

    // content: ` 시작
    const cStartRe = /content:\s*`/g;
    cStartRe.lastIndex = slugMatch.index;
    const cStartMatch = cStartRe.exec(src);
    if (!cStartMatch) {
      console.log(`SKIP  [posts.ts] ${slug} — no content marker`);
      continue;
    }
    const contentStart = cStartMatch.index + cStartMatch[0].length;

    // 다음 slug 위치 (없으면 src 끝)
    const nextSlugRe = /slug:\s*"/g;
    nextSlugRe.lastIndex = contentStart;
    const nextSlugMatch = nextSlugRe.exec(src);
    const blockEndLimit = nextSlugMatch ? nextSlugMatch.index : src.length;

    // contentStart ~ blockEndLimit 구간에서 종료 백틱 찾기.
    // 닫힘 형태 2가지:
    //   1) `` `, `` followed by `\n  },`        (오래된 엔트리)
    //   2) `` `.trim(), `` followed by `\n  },` (`.trim()` 사용 엔트리)
    const region = src.slice(contentStart, blockEndLimit);
    const closeRe = /`(?:\.trim\(\))?\s*,\s*\r?\n\s*[\w}\]]/;
    const closeMatch = closeRe.exec(region);
    if (!closeMatch) {
      console.log(`SKIP  [posts.ts] ${slug} — no closing backtick`);
      continue;
    }
    const contentEnd = contentStart + closeMatch.index;
    const original = src.slice(contentStart, contentEnd);

    const transformed = transformContent(original);
    if (transformed === null) {
      console.log(`SKIP  [posts.ts] ${slug} — pattern not matched`);
      continue;
    }
    if (transformed === original) {
      console.log(`NOOP  [posts.ts] ${slug}`);
      continue;
    }

    src = src.slice(0, contentStart) + transformed + src.slice(contentEnd);
    changed++;
    console.log(`OK    [posts.ts] ${slug}`);
  }

  if (changed > 0) {
    fs.writeFileSync(filePath, src, "utf8");
  }
  return { changed };
}

/**
 * lib/posts/<slug>.ts (단일 export) 처리.
 */
function processIndividualPosts() {
  const dir = path.join(ROOT, "lib", "posts");
  let changed = 0;
  if (!fs.existsSync(dir)) return { changed };

  for (const slug of SLUGS_TO_FIX) {
    const filePath = path.join(dir, `${slug}.ts`);
    if (!fs.existsSync(filePath)) continue;

    let src = fs.readFileSync(filePath, "utf8");

    const cStartMatch = /content:\s*`/.exec(src);
    if (!cStartMatch) {
      console.log(`SKIP  [posts/${slug}.ts] no content marker`);
      continue;
    }
    const contentStart = cStartMatch.index + cStartMatch[0].length;

    const region = src.slice(contentStart);
    const closeRe = /`(?:\.trim\(\))?\s*,\s*\r?\n\s*\}/;
    const closeMatch = closeRe.exec(region);
    if (!closeMatch) {
      console.log(`SKIP  [posts/${slug}.ts] no closing backtick`);
      continue;
    }
    const contentEnd = contentStart + closeMatch.index;
    const original = src.slice(contentStart, contentEnd);

    const transformed = transformContent(original);
    if (transformed === null) {
      console.log(`SKIP  [posts/${slug}.ts] pattern not matched`);
      continue;
    }
    if (transformed === original) {
      console.log(`NOOP  [posts/${slug}.ts]`);
      continue;
    }

    src = src.slice(0, contentStart) + transformed + src.slice(contentEnd);
    fs.writeFileSync(filePath, src, "utf8");
    changed++;
    console.log(`OK    [posts/${slug}.ts]`);
  }

  return { changed };
}

console.log("=== 1) lib/posts.ts ===");
const r1 = processMainPostsTs();

console.log("\n=== 2) lib/posts/*.ts ===");
const r2 = processIndividualPosts();

console.log(
  `\n총 ${r1.changed + r2.changed}개 포스트 수정됨 (lib/posts.ts: ${
    r1.changed
  }, lib/posts/: ${r2.changed})`,
);
