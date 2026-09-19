/**
 * 다국어 포스트 본문 내부 링크 검사기
 *
 * 번역본(보조 언어) 글에서 마크다운 내부 링크가 올바른 언어 경로를 쓰는지 검사한다.
 *   - 잘못됨: [텍스트](/blog/슬러그)            → 한국어 페이지로 새버림
 *   - 잘못됨: [텍스트](/<다른언어>/blog/슬러그)   → 다른 언어로 교차 누수
 *   - 올바름: [텍스트](/<현재언어>/blog/슬러그), 앵커(#...), 외부 링크(http...)
 *
 * 위반이 있으면 exit code 1로 빌드를 막는다.
 * 사용: npm run check:intl-links (build 전 자동 실행)
 */
import { dirname, join } from "node:path";
import { existsSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const jiti = createJiti(join(root, "scripts", "check-intl-links.mjs"));
const { SECONDARY_LOCALES } = jiti("../lib/intl.ts");
const { POSTS_BY_LOCALE } = jiti("../lib/intl-posts.ts");

const SECONDARY_SET = new Set(SECONDARY_LOCALES);

/** 마크다운 내부 링크 [text](path) 추출 (외부 http(s)와 앵커는 제외) */
const LINK_RE = /\[[^\]]+\]\((\/[^)]*)\)/g;

const violations = [];

for (const locale of SECONDARY_LOCALES) {
  for (const post of POSTS_BY_LOCALE[locale]) {
    for (const m of post.content.matchAll(LINK_RE)) {
      const href = m[1];

      // 블로그 링크만 검사 대상. (/calculator 등 공용 유틸 페이지는 통과)
      const blogMatch = href.match(/^\/(?:([a-z]{2}(?:-[a-z]+)?)\/)?blog\/(.+)$/);
      if (!blogMatch) continue;

      const linkLocale = blogMatch[1]; // undefined면 언어 코드 없는 /blog/...

      if (!linkLocale) {
        violations.push({
          locale,
          slug: post.slug,
          href,
          reason: `언어 코드 없음 → /${locale}/blog/... 로 써야 함`,
        });
      } else if (linkLocale !== locale && SECONDARY_SET.has(linkLocale)) {
        violations.push({
          locale,
          slug: post.slug,
          href,
          reason: `다른 언어(${linkLocale})로 교차 누수 → /${locale}/blog/... 로 써야 함`,
        });
      }
    }
  }
}

if (violations.length > 0) {
  console.error(`\n✖ 다국어 내부 링크 검사 실패 — ${violations.length}건\n`);
  for (const v of violations) {
    console.error(`  [${v.locale}] ${v.slug}`);
    console.error(`    링크: ${v.href}`);
    console.error(`    문제: ${v.reason}\n`);
  }
  console.error("번역본 본문 링크는 반드시 해당 언어 경로(/<lang>/blog/슬러그)를 사용하세요.\n");
  process.exit(1);
}

// ── 2차: 올바른 언어경로지만 그 언어에 대상 슬러그가 없는 링크(= 해당 언어에서 404) ──
// 완결 클러스터 통째 번역을 안 하고 쪼개 번역하면, 아직 번역 안 된 형제글로 링크가 걸려
// 해당 언어 페이지가 404가 된다. 빌드를 막지는 않고(점진 번역 허용) 경고로 표면화한다.
const slugSetByLocale = {};
for (const l of SECONDARY_LOCALES) slugSetByLocale[l] = new Set(POSTS_BY_LOCALE[l].map((p) => p.slug));

const missingTargets = [];
for (const locale of SECONDARY_LOCALES) {
  for (const post of POSTS_BY_LOCALE[locale]) {
    for (const m of post.content.matchAll(LINK_RE)) {
      // 슬러그는 공백(마크다운 title "..." 앞)·#앵커·?쿼리·) 전까지만.
      const bm = m[1].match(/^\/(?:([a-z]{2}(?:-[a-z]+)?)\/)?blog\/([^#?)\s]+)/);
      if (!bm) continue;
      const linkLocale = bm[1];
      const targetSlug = bm[2].replace(/\/+$/, "");
      // 같은 언어로 향하는 링크만 대상 실존 검사(타언어 누수는 위 1차에서 이미 차단)
      if (linkLocale === locale && !slugSetByLocale[locale].has(targetSlug)) {
        missingTargets.push({ locale, slug: post.slug, href: m[1], targetSlug });
      }
    }
  }
}

if (missingTargets.length > 0) {
  console.error(`\n✖ 번역본 내부링크 대상 미존재 — ${missingTargets.length}건 (해당 언어에서 404)\n`);
  for (const v of missingTargets) {
    console.error(`  [${v.locale}] ${v.slug} → ${v.href}  (대상 "${v.targetSlug}" 미번역)`);
  }
  console.error(`\n→ 대상 글을 해당 언어로 번역하거나 번역 전까지 링크를 빼세요. (완결 클러스터 통째 번역 권장)\n`);
  process.exit(1);
}

// ── 3차: 블로그 «밖» 내부 링크(도구 페이지) — ★2026-09-19 신설 ──
// 1·2차는 /blog/ 링크만 봐서 도구 링크를 «공용 유틸 페이지는 통과»로 흘렸다. 그 사이
//   ① 21로케일 본문이 한국어 UI 도구(/hand-chart·/calculator·/quiz)를 가리키고 있었고
//   ② /es/quiz·/ja/quiz·/zh/quiz 는 라우트가 아예 없어 라이브 404였다(09-19 Playwright 확인).
// 판정: 로케일 접두 경로 = app/ 아래 라우트가 실존해야 한다(다른 로케일 도구 — 주로 /en/* — 는 허용) ·
//       접두 없는 경로 = 한국어 화면이므로 위반(public/ 파일 — /downloads·/images — 은 통과).
// 형태 셋을 다 본다: 마크다운 ](…) · HTML href="…" · :::readnext 행(`/경로 | 제목 | 이미지`).
const appDir = join(root, "app");
const isDir = (p) => existsSync(p) && statSync(p).isDirectory();
function routeExists(segs) {
  let dir = appDir;
  for (const seg of segs) {
    if (isDir(join(dir, seg))) { dir = join(dir, seg); continue; }
    const dyn = readdirSync(dir).find((d) => d.startsWith("[") && isDir(join(dir, d)));
    if (!dyn) return false;
    dir = join(dir, dyn);
  }
  return ["page.tsx", "page.ts", "page.jsx", "page.js"].some((f) => existsSync(join(dir, f)));
}
const TOOL_LINK_RES = [/\]\((\/[^)\s"]*)/g, /href="(\/[^"]*)"/g, /^\s*(\/[^\s|]+)\s*\|/gm];
const toolViolations = [];
for (const locale of SECONDARY_LOCALES) {
  for (const post of POSTS_BY_LOCALE[locale]) {
    const seen = new Set();
    for (const re of TOOL_LINK_RES) {
      for (const m of post.content.matchAll(re)) {
        const path = m[1].split(/[#?]/)[0].replace(/\/+$/, "");
        if (!path || /\/blog(\/|$)/.test(path) || seen.has(path)) continue;
        seen.add(path);
        if (existsSync(join(root, "public", path))) continue; // /downloads/*.pdf · /images/*
        const segs = path.split("/").filter(Boolean);
        if (!SECONDARY_SET.has(segs[0])) {
          toolViolations.push({ locale, slug: post.slug, href: path, reason: "한국어 화면(접두 없음) → /en/… 또는 /<lang>/… 도구로" });
        } else if (!routeExists(segs)) {
          toolViolations.push({ locale, slug: post.slug, href: path, reason: "라우트 없음(404) → 실존하는 /en/… 도구로" });
        }
      }
    }
  }
}

if (toolViolations.length > 0) {
  console.error(`\n✖ 번역본 도구 링크 위반 — ${toolViolations.length}건\n`);
  for (const v of toolViolations) console.error(`  [${v.locale}] ${v.slug} → ${v.href}  (${v.reason})`);
  console.error("");
  process.exit(1);
}

const total = SECONDARY_LOCALES.reduce((n, l) => n + POSTS_BY_LOCALE[l].length, 0);
console.log(`✓ 다국어 내부 링크 검사 통과 (${total}편, ${SECONDARY_LOCALES.length}개 언어) — 언어경로+대상실존+도구링크 확인`);
