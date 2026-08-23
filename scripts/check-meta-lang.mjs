/**
 * check-meta-lang — **DOM 밖 문자열**에 한국어가 새는지 보는 게이트.
 *
 * ★왜 만들었나 (2026-08-23)
 *   `<meta name="twitter:title">` 이 **25개 로케일 홈 전부 + /en/win-rate-quiz** 에서
 *   한국어(«홀덤마스터 — 텍사스 홀덤 완벽 가이드»)로 나가고 있었다. `og:title` 은 정상이었다.
 *   원인은 `app/layout.tsx` 의 한국어 `twitter` 를 아무도 덮지 않은 것이고,
 *   🔴 **기존 게이트 넷이 전부 이 자리를 못 봤다** —
 *      `check-hreflang`(link 태그만) · `check-directives`(본문 마커) ·
 *      `audit:hard`(포스트 `content`) · `patch-html-lang`(`<html lang>`).
 *   전부 **DOM 안**을 보는 검사라, `<head>` 의 메타 문자열은 통째로 지나갔다.
 *
 *   🪶 발견 경로: 솔버 세션이 자기 `manifest.webmanifest` 가 7개 언어에서 한국어였던 것을
 *      자백하며 «DOM 에 안 나오는 문자열은 언어 검사가 통째로 지나간다» 고 경고해 줬다.
 *      그 경고를 우리 산출물에 대 보고 찾았다. **경고를 받고 «우리는 다르다»고 넘기지 않은 것이
 *      이 게이트가 생긴 이유다.**
 *
 * ▶ 무엇을 보나: `.next/server/app` 의 **비한국어**(`<html lang>` 이 ko 로 시작하지 않는) HTML 에서
 *   아래 메타에 한글(U+AC00–U+D7A3)이 있으면 🔴.
 *     og:title · og:description · og:site_name · twitter:title · twitter:description · <title>
 *
 * ▶ 의도적 예외
 *   · `og:site_name` 은 브랜드명이라 로케일에 따라 한국어일 수 있다(ja `ホールデムマスター` 처럼
 *     로케일 브랜드를 쓰는 곳도 있고 `HoldemMaster` 로 두는 곳도 있다) → **경고(🟠)만 낸다.**
 *   · 본문에 한국어가 섞이는 것은 이 게이트의 소관이 아니다(그건 번역 검수의 일이다).
 *
 * ▶ 한계 (정직하게 적는다)
 *   · **«한국어가 아닌 잘못된 언어»는 못 잡는다.** 스페인어 페이지에 일본어가 들어가도 통과한다.
 *     이 게이트가 잡는 것은 «루트 layout 의 한국어가 상속되는» 한 가지 유형뿐이다.
 *   · 산출물만 본다 — 빌드 전에는 못 돈다.
 */
import fs from "fs";
import path from "path";

const ROOT = ".next/server/app";
const KO = /[가-힣]/;

/** 🔴로 셀 것 / 🟠로만 셀 것 */
const HARD = [
  ["<title>", /<title>([^<]*)<\/title>/],
  ["og:title", /property="og:title" content="([^"]*)"/],
  ["og:description", /property="og:description" content="([^"]*)"/],
  ["twitter:title", /name="twitter:title" content="([^"]*)"/],
  ["twitter:description", /name="twitter:description" content="([^"]*)"/],
];
const SOFT = [["og:site_name", /property="og:site_name" content="([^"]*)"/]];

if (!fs.existsSync(ROOT)) {
  console.log("── 메타 언어 게이트 ──\n⚠ 빌드 산출물이 없다 — `npm run build` 뒤에 돈다.");
  process.exit(0);
}

let scanned = 0;
const red = [];
const orange = [];

(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      walk(p);
      continue;
    }
    if (!e.name.endsWith(".html")) continue;

    const html = fs.readFileSync(p, "utf8");
    const lang = (html.match(/<html[^>]*lang="([^"]+)"/) || [])[1] || "";
    if (!lang || lang.startsWith("ko")) continue; // 한국어 페이지는 대상이 아니다
    scanned++;

    const rel = path.relative(ROOT, p).split(path.sep).join("/");
    for (const [name, re] of HARD) {
      const v = (html.match(re) || [])[1] || "";
      if (KO.test(v)) red.push({ rel, lang, name, v });
    }
    for (const [name, re] of SOFT) {
      const v = (html.match(re) || [])[1] || "";
      if (KO.test(v)) orange.push({ rel, lang, name, v });
    }
  }
})(ROOT);

console.log("── 메타 언어 게이트 (DOM 밖 문자열) ──");
console.log(`비한국어 HTML ${scanned}개 검사 · <title>·og:*·twitter:* 5종`);

if (orange.length) {
  console.log(`\n🟠 og:site_name 이 한국어인 페이지 ${orange.length}개 — 브랜드명이면 정상이다:`);
  for (const o of orange.slice(0, 5)) console.log(`   ${o.lang.padEnd(8)} ${o.rel} → «${o.v}»`);
  if (orange.length > 5) console.log(`   … 외 ${orange.length - 5}개`);
}

if (red.length === 0) {
  console.log("\n✅ 🔴 0건 — 비한국어 페이지의 제목·설명 메타에 한국어가 없다.");
  process.exit(0);
}

console.log(`\n🔴 ${red.length}건 — 루트 layout 의 한국어가 상속되고 있다:`);
for (const r of red.slice(0, 25)) {
  console.log(`   ${r.lang.padEnd(8)} ${r.rel}`);
  console.log(`      ${r.name} = «${r.v.slice(0, 60)}»`);
}
if (red.length > 25) console.log(`   … 외 ${red.length - 25}건`);
console.log(
  "\n처방: 해당 `page.tsx` 의 `metadata` 에 `twitter:` (또는 `openGraph`·`title:{absolute}`) 를 명시하라.\n" +
    "      ⚠ **문구는 그 페이지의 openGraph 를 재사용하라 — 새로 짓지 마라**(메타와 스키마가 갈린다)."
);
process.exit(1);
