#!/usr/bin/env node
/**
 * hreflang 게이트 — 빌드 산출물(.next/server/app)의 rel="alternate" 세트를 검사한다.
 *
 * ★왜 만들었나 (2026-08-10)
 *   `scripts/canonical-check.mjs`가 다국어를 건너뛰며 "다국어는 별도 규칙(hreflang)이
 *   있어 이 검사에서 제외"라고 적어 뒀는데, **그 별도 검사가 존재하지 않았다.**
 *   즉 hreflang은 지금까지 아무 기계 검사도 받지 않았다.
 *   같은 날 나 자신이 `hreflang=`(소문자)로만 grep해 "전 로케일 0개"라고 오판했다 —
 *   Next.js는 `hrefLang=`(camelCase)로 직렬화한다. **HTML 속성명은 대소문자 무시라
 *   실제로는 정상**이었지만, 그 오판이 「아무도 안 보고 있었다」를 드러냈다.
 *
 * ★검사 항목 (hreflang이 실패하는 방식 그대로)
 *   1. 자기참조 — 각 페이지는 «자기 자신»을 가리키는 alternate를 가져야 한다.
 *   2. 상호참조 — 한 세트에 속한 모든 페이지가 «동일한 세트»를 선언해야 한다.
 *      하나라도 어긋나면 구글은 세트 전체를 무시한다.
 *   3. 대상 실재 — 선언한 URL이 실제 빌드 산출물로 존재해야 한다(404 가리킴 방지).
 *   4. 중복 langcode — 같은 언어코드가 두 번 나오면 안 된다.
 *
 * 사용:
 *   node scripts/check-hreflang.mjs            # 전수
 *   node scripts/check-hreflang.mjs --verbose  # 세트별 상세
 */
import { readdirSync, statSync, readFileSync, existsSync } from "fs";
import { join } from "path";

const APP = ".next/server/app";
const SITE = "https://www.holdemmaster.com";
const VERBOSE = process.argv.includes("--verbose");

if (!existsSync(APP)) {
  console.error("🔴 .next/server/app 이 없다. `npm run build` 를 먼저 돌려라.");
  process.exit(1);
}

/* ── 산출물 수집 ── */
const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".html")) files.push(p);
  }
})(APP);

/** 산출물 경로 → 사이트 경로. `.next/server/app/de/tournaments.html` → `/de/tournaments` */
function toRoute(file) {
  const rel = file.slice(APP.length).replace(/\\/g, "/").replace(/\.html$/, "");
  return rel === "/index" ? "/" : rel;
}
const ROUTES = new Set(files.map(toRoute));

/* ── 파싱 ──
   ⚠ 반드시 대소문자 무시로 읽는다. Next.js는 `hrefLang`으로 쓰고,
      HTML 속성명은 ASCII 대소문자를 구분하지 않는다. 이 한 글자가 오판을 만들었다. */
function parseAlternates(html) {
  const out = [];
  for (const m of html.matchAll(/<link[^>]*rel=["']alternate["'][^>]*>/gi)) {
    const tag = m[0];
    const lang = (tag.match(/hreflang=["']([^"']+)["']/i) || [])[1];
    const href = (tag.match(/href=["']([^"']+)["']/i) || [])[1];
    // rel=alternate는 RSS/미디어에도 쓰인다 — hreflang이 있는 것만 본다
    if (lang && href) out.push({ lang, href });
  }
  return out;
}

const pages = new Map(); // route → [{lang, href}]
for (const f of files) {
  const alts = parseAlternates(readFileSync(f, "utf8"));
  if (alts.length) pages.set(toRoute(f), alts);
}

/* ── 세트 묶기: 선언된 href 집합이 같은 페이지들이 한 세트다 ── */
const keyOf = (alts) => alts.map((a) => a.href).sort().join("|");
const setsByKey = new Map();
for (const [route, alts] of pages) {
  const k = keyOf(alts);
  if (!setsByKey.has(k)) setsByKey.set(k, []);
  setsByKey.get(k).push(route);
}

/* ── 검사 ── */
const errors = [];
const warns = [];

for (const [route, alts] of pages) {
  const selfUrl = `${SITE}${route}`;

  // 1) 자기참조
  if (!alts.some((a) => a.href === selfUrl)) {
    errors.push(`[자기참조 없음] ${route} — 선언 세트에 자기 자신(${selfUrl})이 없다`);
  }

  // 4) 중복 언어코드
  const seenLang = new Map();
  for (const a of alts) {
    if (seenLang.has(a.lang) && seenLang.get(a.lang) !== a.href) {
      errors.push(`[중복 langcode] ${route} — "${a.lang}"이 두 URL을 가리킨다: ${seenLang.get(a.lang)} / ${a.href}`);
    }
    seenLang.set(a.lang, a.href);
  }

  // 3) 대상 실재
  for (const a of alts) {
    if (!a.href.startsWith(SITE)) { warns.push(`[외부 URL] ${route} → ${a.href}`); continue; }
    const target = a.href.slice(SITE.length) || "/";
    if (!ROUTES.has(target)) {
      errors.push(`[대상 없음] ${route} 의 "${a.lang}" → ${target} 이 빌드 산출물에 없다(404 가리킴)`);
    }
  }
}

// 2) 상호참조 — 세트에 든 모든 URL이 «페이지로서도» 같은 세트를 선언하는가
for (const [k, routes] of setsByKey) {
  const declared = k.split("|");
  for (const url of declared) {
    if (!url.startsWith(SITE)) continue;
    const r = url.slice(SITE.length) || "/";
    if (!pages.has(r)) {
      if (ROUTES.has(r)) {
        errors.push(`[상호참조 끊김] ${r} 은 세트의 일원인데 자기 페이지엔 hreflang이 없다 (세트: ${routes[0]} 외 ${routes.length - 1}개)`);
      }
      continue;
    }
    if (keyOf(pages.get(r)) !== k) {
      errors.push(`[세트 불일치] ${r} 이 선언한 세트가 ${routes[0]} 과 다르다 — 구글은 어긋난 세트를 통째로 무시한다`);
    }
  }
}

/* ── 출력 ── */
const setCount = setsByKey.size;
console.log(`hreflang 게이트 — 산출물 ${files.length}개 중 ${pages.size}개 페이지가 hreflang 선언 · 세트 ${setCount}종`);

if (VERBOSE) {
  for (const [k, routes] of setsByKey) {
    console.log(`\n  [세트 ${k.split("|").length}개 언어] 페이지 ${routes.length}개`);
    routes.slice(0, 8).forEach((r) => console.log(`    ${r}`));
    if (routes.length > 8) console.log(`    … 외 ${routes.length - 8}개`);
  }
}

if (warns.length) {
  console.log(`\n⚠ 경고 ${warns.length}건`);
  warns.slice(0, 10).forEach((w) => console.log("  " + w));
}

if (errors.length) {
  console.log(`\n🔴 ${errors.length}건`);
  errors.slice(0, 40).forEach((e) => console.log("  " + e));
  if (errors.length > 40) console.log(`  … 외 ${errors.length - 40}건`);
  process.exit(1);
}

console.log("\n✅ hreflang 0건 — 자기참조·상호참조·대상실재·중복langcode 전부 통과");
