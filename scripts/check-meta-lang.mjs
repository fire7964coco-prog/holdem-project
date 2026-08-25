/**
 * check-meta-lang — **아무도 눈으로 안 보는 문자열**에 한국어가 새는지 보는 게이트.
 *
 *   실행: node scripts/check-meta-lang.mjs [--selftest]
 *   ⚠ `npm run build` 를 먼저 돌려야 한다(산출물이 없으면 «미판정»으로 종료).
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
 * ★2026-08-25 확장 — 이 게이트에도 사각지대가 있었다
 *   위 5종을 0건으로 지키는 동안, **아무 page.tsx 도 안 건드리는 필드 3종**이
 *   비한국어 541페이지 전부에서 루트 layout 의 한국어를 그대로 상속하고 있었다:
 *     `application-name`(541) · `author`(541) · `keywords`(70)
 *   같은 유형이 DOM 안에도 하나 있었다 — **sr-only 스킵링크**(541).
 *   «시각적으로 숨겨져 있으니 다국어에 무해하다»고 주석에 적혀 있었지만 **틀렸다.**
 *   스크린리더는 그 문자열을 읽는다. 독일어 페이지 Tab 첫 타에 한국어가 낭독됐다.
 *   → 그래서 이 게이트의 기준을 «DOM 밖»이 아니라 **«아무도 눈으로 안 보는 자리»**로 넓혔다.
 *      (커밋 551f1325 · ac5ae041 · d389887c · f12ae9e2)
 *
 * ▶ 무엇을 보나: `.next/server/app` 의 **비한국어**(`<html lang>` 이 ko 로 시작하지 않는) HTML.
 *   🔴 <title> · og:title · og:description · twitter:title · twitter:description
 *      application-name · author · keywords · 스킵링크(`a[href="#main-content"]`)
 *   🟠 og:site_name
 *
 * ▶ 의도적 예외 — **여기 없는 것은 «판정 안 함»이지 «통과»가 아니다**
 *   · `og:site_name` 은 브랜드명이라 로케일에 따라 한국어일 수 있다(ja `ホールデムマスター` 처럼
 *     로케일 브랜드를 쓰는 곳도 있고 `HoldemMaster` 로 두는 곳도 있다) → **경고(🟠)만 낸다.**
 *   · 🔴 **푸터 언어 전환 링크의 «한국어» 는 검사하지 않는다 — 오탐이다.**
 *     `components/intl-footer.tsx` 가 「Sprache」·「言語」 제목 아래 `/`(한국어 사이트)로 가는
 *     링크에 `CHROME[locale].koLabel = "한국어"` 를 쓴다. 언어 선택지를 **그 언어 자신의
 *     표기(endonym)로 적는 것은 표준 관례**다(위키백과·구글이 그렇게 한다). 25개 로케일
 *     전부에 같은 값이 들어 있는 것도 우연이 아니라 의도다.
 *     2026-08-25 핸드오프 미결 표가 이 자리를 «메타 4종 + 스킵링크» 목록에 같이 적어 뒀는데,
 *     원문을 보고 **정정한다 — 고칠 자리가 아니다.** 되살리려면 endonym 관례부터 뒤집어라.
 *   · 본문에 한국어가 섞이는 것은 이 게이트의 소관이 아니다(그건 번역 검수의 일이다).
 *     그래서 본문 DOM 을 통으로 훑지 않는다 — 훑으면 위 endonym 이 매번 걸린다.
 *
 * ▶ 한계 (정직하게 적는다)
 *   · **«한국어가 아닌 잘못된 언어»는 못 잡는다.** 스페인어 페이지에 일본어가 들어가도 통과한다.
 *     이 게이트가 잡는 것은 «루트 layout 의 한국어가 상속되는» 한 가지 유형뿐이다.
 *   · 산출물만 본다 — 빌드 전에는 못 돈다.
 *   · **태그가 없는 자리는 «검사»가 아니라 «미검사»다.** 그래서 0건 옆에 항상 커버리지를 찍는다
 *     (`keywords` 70페이지는 f12ae9e2 에서 **의도적으로 제거**했다 — 태그 없음이 정본이다).
 */
import fs from "fs";
import path from "path";

const ROOT = ".next/server/app";
const KO = /[가-힣]/;

/** 🔴 — 비한국어 페이지에 한글이 있으면 안 되는 자리 */
const HARD = [
  ["<title>", /<title>([^<]*)<\/title>/],
  ["og:title", /property="og:title" content="([^"]*)"/],
  ["og:description", /property="og:description" content="([^"]*)"/],
  ["twitter:title", /name="twitter:title" content="([^"]*)"/],
  ["twitter:description", /name="twitter:description" content="([^"]*)"/],
  // ↓ 2026-08-25 확장분 (갈래 A)
  ["application-name", /name="application-name" content="([^"]*)"/],
  ["author", /name="author" content="([^"]*)"/],
  ["keywords", /name="keywords" content="([^"]*)"/],
  ["스킵링크", /<a[^>]*href="#main-content"[^>]*>([^<]*)<\/a>/],
];
/** 🟠 — 한국어여도 정상일 수 있는 자리 */
const SOFT = [["og:site_name", /property="og:site_name" content="([^"]*)"/]];

/**
 * 한 페이지를 판정한다. **파일시스템을 안 탄다** — 셀프테스트가 이 함수를 직접 부른다.
 * @returns {null | {lang:string, red:Array, orange:Array, present:Object}}
 *          한국어 페이지·lang 없는 페이지는 null(대상 아님).
 */
export function judgePage(html) {
  const lang = (html.match(/<html[^>]*lang="([^"]+)"/) || [])[1] || "";
  if (!lang || lang.startsWith("ko")) return null;
  const red = [];
  const orange = [];
  const present = {};
  for (const [name, re] of HARD) {
    const m = html.match(re);
    present[name] = m !== null;
    if (m && KO.test(m[1])) red.push({ name, v: m[1] });
  }
  for (const [name, re] of SOFT) {
    const m = html.match(re);
    present[name] = m !== null;
    if (m && KO.test(m[1])) orange.push({ name, v: m[1] });
  }
  return { lang, red, orange, present };
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

function run() {
  console.log("── 메타 언어 게이트 (눈에 안 띄는 문자열) ──");
  if (!fs.existsSync(ROOT)) {
    console.log("⚠ 미판정 — .next/server/app 이 없다. `npm run build` 를 먼저 돌려라.");
    console.log("   («0건»이 아니다. 검사 자체를 못 했다.)");
    return 0;
  }

  let scanned = 0;
  let koPages = 0;
  const red = [];
  const orange = [];
  /** 자리별 커버리지 — 태그가 없으면 «미검사»다 */
  const cover = {};
  for (const [name] of [...HARD, ...SOFT]) cover[name] = { checked: 0, absent: 0 };

  for (const p of walk(ROOT)) {
    const html = fs.readFileSync(p, "utf8");
    const v = judgePage(html);
    if (!v) {
      koPages++;
      continue;
    }
    scanned++;
    const rel = path.relative(ROOT, p).split(path.sep).join("/");
    for (const [name] of [...HARD, ...SOFT]) {
      if (v.present[name]) cover[name].checked++;
      else cover[name].absent++;
    }
    for (const r of v.red) red.push({ rel, lang: v.lang, ...r });
    for (const o of v.orange) orange.push({ rel, lang: v.lang, ...o });
  }

  console.log(`비한국어 HTML ${scanned}개 검사 · 한국어 ${koPages}개는 대상 아님 · 자리 ${HARD.length + SOFT.length}종`);

  // 🔴 «0건»을 커버리지 없이 내보내지 않는다 — 태그가 없어서 못 본 자리를 0건으로 읽으면 안 된다.
  console.log("\n커버리지 (태그 없음 = 검증이 아니라 미검사):");
  for (const [name] of [...HARD, ...SOFT]) {
    const c = cover[name];
    const tail = c.absent ? `  ⚠ 태그 없음 ${c.absent}` : "";
    console.log(`   ${name.padEnd(18)} 검사 ${String(c.checked).padStart(3)}${tail}`);
  }
  if (cover["keywords"].absent) {
    console.log(
      `   ↳ keywords 태그 없음 ${cover["keywords"].absent}개는 **의도된 제거**다(커밋 f12ae9e2 · 근거는 lib/intl-locale-layout.ts).`
    );
  }
  if (cover["스킵링크"].checked === 0) {
    console.log("   ↳ 🟠 스킵링크가 **한 페이지에도 없다** — 라벨 검사가 아니라 요소가 사라진 것이다(a11y 회귀 의심).");
  }

  if (orange.length) {
    console.log(`\n🟠 og:site_name 이 한국어인 페이지 ${orange.length}개 — 브랜드명이면 정상이다:`);
    for (const o of orange.slice(0, 5)) console.log(`   ${o.lang.padEnd(8)} ${o.rel} → «${o.v}»`);
    if (orange.length > 5) console.log(`   … 외 ${orange.length - 5}개`);
  }

  if (red.length === 0) {
    console.log("\n✅ 🔴 0건 — 비한국어 페이지의 위 자리에 한국어가 없다.");
    return 0;
  }

  console.log(`\n🔴 ${red.length}건 — 루트 layout 의 한국어가 상속되고 있다:`);
  const byName = {};
  for (const r of red) (byName[r.name] ??= []).push(r);
  for (const [name, list] of Object.entries(byName)) {
    console.log(`\n  [${name}] ${list.length}건`);
    for (const r of list.slice(0, 6)) {
      console.log(`   ${r.lang.padEnd(8)} ${r.rel}`);
      console.log(`      «${r.v.slice(0, 60)}»`);
    }
    if (list.length > 6) console.log(`   … 외 ${list.length - 6}건`);
  }
  console.log(
    "\n처방:\n" +
      "  · <title>·og:*·twitter:*  → 해당 `page.tsx` 의 `metadata` 에 명시하라.\n" +
      "    ⚠ **문구는 그 페이지의 openGraph 를 재사용하라 — 새로 짓지 마라**(메타와 스키마가 갈린다).\n" +
      "  · application-name·author·keywords → `app/<locale>/layout.tsx` 가 있는지부터 봐라.\n" +
      "    없으면 **그 언어만** 루트의 한국어를 상속한다. 값 정본 = `lib/intl-locale-layout.ts`.\n" +
      "  · 스킵링크 → `components/site-chrome.tsx` 의 `SkipLink` 가 `CHROME[locale].skip` 을 쓰는지 봐라."
  );
  return 1;
}

/* ══════════════════════════════════════════════════════════════════════════
   셀프테스트 — 규칙보다 먼저 세운다.
   이 레포는 새 검사기가 오탐을 쏟아낸 전례가 있다(de 게이트 26건 중 20건이 오탐).
   그래서 «잡아야 하는 것»만이 아니라 **«울리면 안 되는 것»을 같은 수만큼** 고정한다.
   ══════════════════════════════════════════════════════════════════════════ */
const HEAD = (inner, lang = "de") => `<html lang="${lang}"><head>${inner}</head><body></body></html>`;
const SKIP = (label) => `<a href="#main-content" class="sr-only focus:not-sr-only">${label}</a>`;

function selftest() {
  const cases = [
    // ── 검출해야 하는 것 (2026-08-25 실측으로 확인된 실제 누수 4종) ──
    {
      name: "application-name 한국어 검출",
      html: HEAD('<meta name="application-name" content="홀덤마스터"/>'),
      want: ["application-name"],
    },
    {
      name: "author 한국어 검출",
      html: HEAD('<meta name="author" content="홀덤마스터 편집팀"/>'),
      want: ["author"],
    },
    {
      name: "keywords 한국어 검출",
      html: HEAD('<meta name="keywords" content="텍사스 홀덤, 홀덤 규칙"/>'),
      want: ["keywords"],
    },
    {
      name: "스킵링크 한국어 검출 (sr-only 라 눈으로는 안 보인다)",
      html: `<html lang="de"><head></head><body>${SKIP("본문 바로가기")}</body></html>`,
      want: ["스킵링크"],
    },
    // ── 기존 5종 회귀 고정 (2026-08-23 사고) ──
    {
      name: "회귀: twitter:title 한국어 검출",
      html: HEAD('<meta name="twitter:title" content="홀덤마스터 — 텍사스 홀덤 완벽 가이드"/>'),
      want: ["twitter:title"],
    },
    {
      name: "회귀: <title> 에 한국어 브랜드 template 이 붙은 것 검출",
      html: HEAD("<title>Poker Hand Rankings | 홀덤마스터</title>"),
      want: ["<title>"],
    },
    // ── 울리면 안 되는 것 (오탐 방지) ──
    {
      name: "오탐 방지: 한국어 페이지(lang=ko)는 4종 전부 한국어여도 대상 아님",
      html: `<html lang="ko"><head><title>홀덤마스터</title><meta name="author" content="홀덤마스터 편집팀"/><meta name="keywords" content="텍사스 홀덤"/><meta name="application-name" content="홀덤마스터"/></head><body>${SKIP("본문 바로가기")}</body></html>`,
      want: null, // 판정 대상 자체가 아니다
    },
    {
      name: "오탐 방지: keywords 태그가 아예 없으면 안 울린다 (f12ae9e2 의도된 제거)",
      html: HEAD('<meta name="application-name" content="HoldemMaster"/>'),
      want: [],
    },
    {
      name: "오탐 방지: 스킵링크가 현지어면 안 울린다",
      html: `<html lang="de"><head></head><body>${SKIP("Zum Inhalt springen")}</body></html>`,
      want: [],
    },
    {
      name: "오탐 방지: 정상 다국어 페이지 4종 전부 통과",
      html: `<html lang="ja"><head><title>ポーカー役の強さ | HoldemMaster</title><meta name="application-name" content="HoldemMaster"/><meta name="author" content="HoldemMaster Editorial Team"/><meta name="keywords" content="ポーカー 役, ポーカー 強さ"/></head><body>${SKIP("本文へスキップ")}</body></html>`,
      want: [],
    },
    {
      name: "🔴 오탐 방지: 푸터 언어전환 링크의 «한국어»(endonym)는 본문 DOM 이라 안 본다",
      html: `<html lang="de"><head><meta name="application-name" content="HoldemMaster"/></head><body>${SKIP(
        "Zum Inhalt springen"
      )}<nav aria-label="Sprache"><h2>Sprache</h2><ul><li><a href="/">한국어</a></li></ul></nav></body></html>`,
      want: [],
    },
    {
      name: "오탐 방지: og:site_name 한국어는 🔴 가 아니라 🟠",
      html: HEAD('<meta property="og:site_name" content="홀덤마스터"/>'),
      want: [], // red 는 비어야 하고
      wantOrange: ["og:site_name"],
    },
  ];

  console.log("── check-meta-lang 셀프테스트 ──");
  let fail = 0;
  for (const c of cases) {
    const v = judgePage(c.html);
    let ok;
    let got;
    if (c.want === null) {
      ok = v === null;
      got = v === null ? "대상 아님" : `판정됨(${v.red.map((r) => r.name).join(",") || "0건"})`;
    } else {
      const gotRed = v ? v.red.map((r) => r.name).sort() : ["(대상 아님)"];
      const gotOrange = v ? v.orange.map((o) => o.name).sort() : [];
      const wantRed = [...c.want].sort();
      const wantOrange = [...(c.wantOrange || [])].sort();
      ok = JSON.stringify(gotRed) === JSON.stringify(wantRed) && JSON.stringify(gotOrange) === JSON.stringify(wantOrange);
      got = `🔴[${gotRed.join(",")}] 🟠[${gotOrange.join(",")}]`;
    }
    if (!ok) fail++;
    console.log(`  ${ok ? "✅" : "❌"} ${c.name}`);
    if (!ok) console.log(`       기대: ${c.want === null ? "대상 아님" : `🔴[${c.want.join(",")}] 🟠[${(c.wantOrange || []).join(",")}]`}\n       실제: ${got}`);
  }
  console.log(fail ? `\n❌ ${fail}/${cases.length} 실패 — 게이트를 고치기 전엔 그 판정을 믿지 마라.` : `\n✅ ${cases.length}/${cases.length} 통과 (검출 6 · 오탐방지 6).`);
  return fail ? 1 : 0;
}

process.exit(process.argv.includes("--selftest") ? selftest() : run());
