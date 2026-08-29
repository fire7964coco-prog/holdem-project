#!/usr/bin/env node
/**
 * check:seo-sync — 서버 `metadata` ↔ 클라이언트 `<SEO>` 불일치 게이트
 *
 * ■ 왜 필요한가 (2026-08-29 신설 · 근거는 WORKLOG 「2026-08-29 (2)」)
 *   `components/seo.tsx`의 useEffect는 마운트 시 `document.title`·`meta[description]`·
 *   `og:title`·`og:description`을 **prop 값으로 무조건 덮어쓴다.**
 *   → 서버 `metadata`만 경화하면 **원시 HTML에만 반영되고 렌더 후 DOM은 클라이언트 값**이 된다.
 *      구글은 렌더링하므로 어느 쪽이 SERP에 쓰일지 보증이 없다.
 *
 *   🔴 이 결함은 **기존 검증을 전부 통과한다**:
 *      · 산출물 HTML의 <title>을 봐도 서버 값이라 정상으로 보인다
 *      · `check:meta-lang`도 산출물만 본다
 *      · `audit:hard`는 포스트(lib/posts*)만 본다 — app 라우트는 사각지대
 *      실제로 `/rules`는 서버가 §17을 지키는데 **라이브 제목이 「…하는법 총정리 [2026]」**였다(금지어).
 *      2026-08-05에 `/tournaments`에서 같은 원인을 발견해 파생으로 고쳤지만
 *      **그 처방이 다른 페이지로 전파되지 않아 08-29까지 살아남았다.** 게이트로 고정하는 이유다.
 *
 * ■ 오탐 4종을 구조적으로 배제한다 (첫 실행 11건 중 4건이 오탐이었다)
 *   ① 조건부 렌더 — 한 파일에 <SEO>가 2개 이상이면 «어느 게 기본인지» 코드로 못 가른다
 *      (예: app/quiz는 `if (phase==='done')` 결과화면용이 먼저 나오고 기본은 두 번째).
 *      → 🔴 통과시키지 않고 **«미판정»으로 출력**한다. 규율: 판정 못 한 자리는 매 실행 드러낸다.
 *   ② noindex 페이지 — SERP에 안 나가므로 대상 아님(`/rules/texas-holdem`은 «홀덤 룰» 카니발 방지용 의도).
 *   ③ 접미 규칙 — seo.tsx가 `| ${siteName}`을 **자기가 붙인다.** 서버가 `title:{absolute:"… | X"}`면
 *      클라이언트는 접미를 빼고 적어야 최종값이 같다. 문자열 단순 비교는 여기서 반드시 틀린다.
 *   ④ 파생 사용 — title이 리터럴이 아니라 함수 호출이면(`title={buildMetaTitle(d)}`)
 *      서버와 **같은 함수**를 쓴다는 뜻이라 구조적으로 안전하다(/tournaments가 이 방식).
 *
 * 사용: node scripts/check-seo-sync.mjs [--selftest]
 */
import { readFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const ROOT = process.cwd();
const BANNED = ["총정리", "완벽 정리", "완전 정복", "뜻 정리"]; // CLAUDE.md §11-7 · §17

/** 조건부 렌더(<SEO> 2개 이상)라 코드로는 못 가르는 자리의 **손 판정 결과**.
 *  판정해 두면 다음 세션이 같은 확인을 반복하지 않는다. 파일이 바뀌면 다시 판정하라. */
const JUDGED_CONDITIONAL = {
  "app/quiz/quiz-client.tsx":
    "✅ 2026-08-29 판정 — 첫 <SEO>는 `if (phase==='done')` **결과화면 전용**이고, 기본 렌더의 <SEO>는 서버와 일치.",
  "app/en/quiz/quiz-client.tsx":
    "✅ 2026-08-29 판정 — KO quiz와 동형(결과화면 전용 + 기본은 서버와 일치).",
  "app/holdem-practice/holdem-practice-client.tsx":
    "✅ 2026-08-29 판정 — **모범 사례.** SEO_TITLE/SEO_DESC 상수를 page.tsx가 import해 두 곳이 같은 문자열을 쓴다. " +
    "새 페이지는 이 방식이나 /tournaments의 파생 함수 방식을 따라라 — 그러면 이 게이트가 애초에 필요 없다.",
};

/** 🔴 금지어 예외 — «왜 안 고치는가»를 반드시 여기 적는다(규율: 예외는 이유와 함께 노출한다).
 *  게이트가 매번 울리면 사람이 게이트를 무시하게 되고, 그 순간 게이트는 없는 것과 같다. */
const BANNED_EXEMPT = {
  "app/pub/pub-index-client.tsx":
    "§17 «CTR 좋은 제목·스니펫 단독 교체 금지» — 「홀덤펍 추천」 실측 r2.5·CTR 32.1%(2026-08-29). " +
    "서버 app/pub/page.tsx와 문구가 **이미 일치**하고, 그 파일 주석도 «건드리면 안 된다»고 못박았다. " +
    "재론 조건: 이 쿼리 CTR이 무너졌을 때만.",
};
const SUFFIX_RE = /\s*\|\s*(?:홀덤마스터|HoldemMaster)\s*$/;

/** <SEO ... /> 태그 블록을 모두 뽑는다. 태그 안에 다른 `<`가 없어야 한다
 *  (주석 속 `<SEO schema={...}>` 언급이나 뒤따르는 <HubPage title="…">를 삼키지 않도록). */
export function seoBlocks(src) {
  return src.match(/<SEO\s+[^<]*?\/>/g) || [];
}
export function propOf(block, name) {
  const m = block.match(new RegExp(`\\b${name}=\\{?["'\`]([^"'\`]*)["'\`]`));
  return m ? m[1] : null;
}
export function serverMeta(src) {
  // title: "…"  또는  title: { absolute: "…" }
  const abs = src.match(/title:\s*\{\s*absolute:\s*["'`]([^"'`]+)["'`]/);
  const plain = src.match(/^\s*title:\s*["'`]([^"'`]+)["'`]/m);
  // ⚠ `description:` 과 문자열 사이에 **주석 줄이 낀다**(이 레포는 «왜»를 주석에 남긴다).
  //    주석을 건너뛰지 않으면 매칭에 실패하고, 그러면 뒤에 오는 `openGraph.description`을
  //    metadata의 것으로 잘못 집는다 — 첫 실행에서 실제로 그 오탐이 났다.
  const desc = src.match(/^\s*description:\s*(?:\r?\n\s*(?:\/\/[^\n]*|\/\*[\s\S]*?\*\/)\s*)*\r?\n?\s*["'`]([^"'`]+)["'`]/m);
  return { title: abs ? abs[1] : plain ? plain[1] : null, description: desc ? desc[1] : null };
}
export function isNoindex(src) {
  return /index:\s*false/.test(src);
}
/** seo.tsx가 `| siteName`을 붙이므로, 서버 접미를 걷어낸 값과 클라이언트 값을 비교한다. */
export function titlesAgree(serverTitle, clientTitle) {
  return serverTitle.replace(SUFFIX_RE, "") === clientTitle.replace(SUFFIX_RE, "");
}

function run() {
  const files = execSync('git grep -l "<SEO" -- "app/**/*.tsx"', { cwd: ROOT, encoding: "utf8" })
    .trim().split(/\r?\n/).filter(f => f && !f.includes("_archive"));

  let red = 0, unjudged = 0, ok = 0, skipDerived = 0, skipNoindex = 0, noTag = 0;
  const lines = [], exempted = [], judgedNote = [];

  for (const f of files) {
    const src = readFileSync(path.join(ROOT, f), "utf8");
    const blocks = seoBlocks(src);
    if (blocks.length === 0) { noTag++; continue; }           // 주석에만 등장

    const dir = path.posix.dirname(f);
    let sm = { title: null, description: null }, smFile = null, noindex = false;
    for (const cand of ["page.tsx", "layout.tsx"]) {
      const p = path.join(ROOT, dir, cand);
      if (!existsSync(p)) continue;
      const s = readFileSync(p, "utf8");
      if (isNoindex(s)) noindex = true;
      const m = serverMeta(s);
      if (m.title) { sm = m; smFile = `${dir}/${cand}`; break; }
    }
    if (noindex) { skipNoindex++; continue; }                  // ② SERP에 안 나감

    if (blocks.length > 1) {                                   // ① 어느 게 기본인지 못 가른다
      const judged = JUDGED_CONDITIONAL[f];
      if (judged) { judgedNote.push(`🟢 조건부(판정됨)  ${f}\n     ${judged}`); ok++; }
      else {
        unjudged++;
        lines.push(`⚠ 미판정  ${f} — <SEO> ${blocks.length}개(조건부 렌더). 기본 렌더가 서버와 같은지 **손으로** 확인한 뒤 JUDGED_CONDITIONAL에 결과를 적어라`);
      }
      continue;
    }

    const ct = propOf(blocks[0], "title");
    const cd = propOf(blocks[0], "description");
    if (ct === null) { skipDerived++; continue; }              // ④ 파생 = 안전

    if (!sm.title) {
      red++;
      lines.push(`🔴 ${f}\n     서버 metadata에 title이 없다 — 크롤러가 받는 HTML엔 루트 기본값이 남는다\n     런타임: ${ct}`);
      continue;
    }
    const exempt = BANNED_EXEMPT[f];
    const banned = exempt ? [] : BANNED.filter(b => ct.includes(b) || (cd || "").includes(b));
    if (exempt) {
      exempted.push(`🟡 금지어 예외  ${f}\n     ${exempt}`);
    }
    if (!titlesAgree(sm.title, ct)) {
      red++;
      lines.push(`🔴 title 불일치  ${f}\n     서버(${smFile}): ${sm.title}\n     런타임(덮어씀) : ${ct}${banned.length ? `\n     ⛔ §17 금지어: ${banned.join(", ")}` : ""}`);
    } else if (sm.description && cd && sm.description !== cd) {
      red++;
      lines.push(`🔴 description 불일치  ${f}\n     서버(${smFile}): ${sm.description.slice(0, 70)}…\n     런타임(덮어씀) : ${cd.slice(0, 70)}…${banned.length ? `\n     ⛔ §17 금지어: ${banned.join(", ")}` : ""}`);
    } else if (banned.length) {
      red++;
      lines.push(`🔴 §17 금지어  ${f} — ${banned.join(", ")}`);
    } else ok++;
  }

  console.log("\n── 서버 metadata ↔ 클라이언트 <SEO> 동기화 게이트 ──");
  if (lines.length) console.log(lines.join("\n"));
  if (judgedNote.length) console.log(judgedNote.join("\n"));
  if (exempted.length) console.log(exempted.join("\n"));
  console.log(`\n커버리지 (검사하지 않은 자리는 «통과»가 아니다):`);
  console.log(`   <SEO> 태그 보유 파일   ${files.length - noTag}  (주석에만 등장 ${noTag}개는 대상 아님)`);
  console.log(`   ✅ 일치               ${ok}`);
  console.log(`   ↳ 그중 조건부·손판정   ${judgedNote.length}  (JUDGED_CONDITIONAL — 해당 파일이 바뀌면 다시 판정하라)`);
  console.log(`   ⚠ 미판정(조건부 렌더)  ${unjudged}`);
  console.log(`   ⏭ 파생 사용(안전)      ${skipDerived}`);
  console.log(`   ⏭ noindex(대상 아님)   ${skipNoindex}`);
  console.log(`   🟡 금지어 예외         ${exempted.length}  (이유는 위에 출력 · scripts/check-seo-sync.mjs의 BANNED_EXEMPT)`);
  console.log(`\n${red === 0 ? "✅ 🔴 0건" : `🔴 ${red}건`} — 렌더 후 DOM이 서버 metadata와 갈리는 자리\n`);
  process.exit(red === 0 ? 0 : 1);
}

function selftest() {
  const t = [];
  const ok = (name, cond) => t.push([name, cond]);

  // 검출해야 하는 것
  ok("불일치 검출", !titlesAgree("서버 제목", "클라 제목"));
  ok("금지어 검출", BANNED.some(b => "포커 규칙 총정리 [2026]".includes(b)));
  ok("서버 title 없음 검출", serverMeta("export const metadata = { robots: {} }").title === null);
  ok("조건부 렌더 감지", seoBlocks(`<SEO title="a" path="/x" />\n<SEO title="b" path="/x" />`).length === 2);

  // 오탐을 내면 안 되는 것
  ok("접미 규칙 — 서버만 접미", titlesAgree("Poker Odds Calculator | HoldemMaster", "Poker Odds Calculator"));
  ok("접미 규칙 — 한국어 브랜드", titlesAgree("홀덤 규칙 | 홀덤마스터", "홀덤 규칙"));
  ok("접미 규칙 — 양쪽 동일", titlesAgree("A | HoldemMaster", "A | HoldemMaster"));
  ok("파생 사용은 리터럴 아님", propOf('<SEO title={buildMetaTitle(d)} path="/x" />', "title") === null);
  ok("noindex 감지", isNoindex("robots: { index: false, follow: true }"));
  ok("noindex 아님", !isNoindex("robots: { index: true, follow: true }"));
  ok("주석 속 <SEO 언급은 안 잡는다", seoBlocks("// 원래 <SEO schema={jsonLd}>로 넘겼다\n<HubPage title=\"규칙\" />").length === 0);
  ok("title:{absolute} 파싱", serverMeta('  title: { absolute: "X | HoldemMaster" },').title === "X | HoldemMaster");
  // description: 뒤에 주석이 끼어도 metadata 것을 집어야 한다(openGraph 것을 집으면 오탐)
  ok("desc — 주석 끼어도 metadata 것", serverMeta(
    `export const metadata = {\n  description:\n    // 왜 이렇게 썼는지\n    "진짜 설명",\n  openGraph: {\n    description: "OG 설명",\n  },\n}`
  ).description === "진짜 설명");
  ok("desc — 주석 없는 평범한 경우", serverMeta('  description:\n    "그냥 설명",').description === "그냥 설명");

  const bad = t.filter(([, c]) => !c);
  console.log("\n── check:seo-sync 셀프테스트 ──");
  for (const [n, c] of t) console.log(`  ${c ? "✅" : "🔴"} ${n}`);
  console.log(`\n${bad.length === 0 ? `✅ ${t.length}/${t.length} 통과` : `🔴 ${bad.length}건 실패`}\n`);
  process.exit(bad.length === 0 ? 0 : 1);
}

if (process.argv.includes("--selftest")) selftest();
else run();
