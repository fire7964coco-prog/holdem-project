// 계산기 로케일 사전 ↔ EN 전사 대조 게이트(§13 · 교열 A/B/C/D/E) — ★2026-09-17 zh 회차에서 tmp/calc-zh-parity.ts를 승격.
//   실행: npx tsx scripts/calc-dict-parity.ts <locale>      (npm run check:calc-parity -- zh)
//   자가검증: npx tsx scripts/calc-dict-parity.ts --selftest   (npm run check:calc-parity:selftest)
//   본다: A quickRef 표 개수·행/열·숫자 셀 · B icmGuide 두 표의 숫자·equity 프리셋 · C FAQ(EN+1)·related·guide·chips·presets·hands 개수 ·
//         D EN 템플릿의 {placeholder}가 같은 자리에 전부 있는가(재귀) · E 직선 " · 「」(zh는 “ ”가 정본 · ja/zh-hant는 「」 허용 → E-2만) ·
//         ★F 링크 슬러그가 그 로케일 코퍼스에 «실존»하는가(2026-09-18 fr 회차 신설).
//   못 보는 것: 문안의 뜻(렌즈 몫) · 소스 개행 공백(check:cjk 몫) · 탭 라벨 축어 인용(렌즈 D항).
//   🔴 `check:hygiene`은 lib/posts만 읽고 app/**는 안 본다 — 계산기 사전의 인용부호는 이 스크립트 E항이 유일한 기계 검사다.
//
// ★2026-09-18 fr 회차 — «코퍼스가 얇은 로케일» 규율(근거 `docs/keyword-bank/fr-calculator.md` §0-A·§7-A):
//   fr은 `lib/posts-fr/`가 6편뿐이라 EN의 related 8슬러그·quickRef 6링크가 **하나도 실존하지 않는다.**
//   개수만 보던 옛 규칙은 여기서 오탐 9건을 냈고(«related 8 vs 6» + «slug 누락 ×8»), 더 나쁘게는
//   **EN 슬러그를 그대로 베껴 404를 배포하는 유형을 원리상 못 봤다**(메모리 「게이트가 원리상 못 보는 자리를 알아 둬라」).
//   → 규칙을 «개수»에서 «실존»으로 옮긴다: 링크는 그 로케일에 있는 것만 · 없으면 생략이 정답 · 창작은 잡는다.
import { readdirSync, existsSync } from "fs";
import { CALC_DICT_EN } from "../components/calculator/dict";
import { CALCULATOR_FAQ_EN } from "../app/en/calculator/faq";

const arg = process.argv[2];
if (!arg) { console.error("usage: npx tsx scripts/calc-dict-parity.ts <locale> | --selftest"); process.exit(2); }
const SELFTEST = arg === "--selftest";
const locale = SELFTEST ? "de" : arg;

/** 그 로케일 블로그 코퍼스의 실존 슬러그. ko(`lib/posts/`+LEGACY)는 이 트랙 밖이라 en 기준으로 둔다. */
const corpusSlugs = (loc: string): Set<string> => {
  const dir = loc === "en" ? "lib/posts-en" : `lib/posts-${loc}`;
  if (!existsSync(dir)) return new Set();
  return new Set(readdirSync(dir).filter(f => f.endsWith(".ts") && f !== "index.ts").map(f => f.slice(0, -3)));
};
type Dict = typeof CALC_DICT_EN;
type Faq = { q: string; a: string }[];

/** 규칙 본체. 잡은 것을 문자열 배열로 돌려준다 — 셀프테스트가 같은 함수를 부른다. */
function check(locale: string, zh: Dict, faq: Faq, slugs: Set<string>): string[] {
const en = CALC_DICT_EN;
const hits: string[] = [];
const num = (s: string) => (s.match(/\d[\d.,]*%?|[<≥≤]\s*\d+|\d+[–-]\d+|\d+\+/g) || []).join(" ");
// ★2026-09-17 pt 회차: 소수 콤마 로케일(pt-BR 등 · 코퍼스 실측 1,637 : 0)은 «81,9%»·«$1.035»로 적는다 → 로케일 쪽 숫자 토큰의 `.`↔`,`를 뒤집어 EN과 비교.
//   판정은 사전의 numberLocale로(Intl이 1.5를 «1,5»로 쓰면 콤마 로케일). en-US 표기 로케일(es·ja·zh…)은 그대로.
const commaDecimal = (1.5).toLocaleString(zh.numberLocale).includes(",");
// ★2026-09-18 fr 회차: 프랑스 조판은 «81,9 %»(% 앞 공백)·«1 035»(공백 천단위)다 — 코퍼스 실측 19:0으로
//   공백형이 정본이라 **콘텐츠가 아니라 게이트를 고쳤다**(게이트가 조판을 지시하게 두면 안 된다).
//   정규화 순서가 중요하다: ① % 앞 공백 제거 → ② 소수 구분자 뒤집기 → ③ 공백 천단위를 EN의 «,»로.
//   ②를 ③보다 먼저 해야 «1 035»가 «1.035»로 뒤집히지 않는다.
const numL = (s: string) => {
  let t = s.replace(/(\d)[\s  ]+%/g, "$1%");
  if (commaDecimal) t = t.replace(/[.,]/g, (c) => (c === "." ? "," : "."));
  t = t.replace(/(\d)[\s  ](?=\d{3}(?!\d))/g, "$1,");
  return num(t);
};
const hit = (msg: string) => { hits.push(msg); };
/** 이 로케일 코퍼스에 그 슬러그가 실존하나. EN 슬러그에도 같은 함수를 쓴다 — 없으면 «생략»이 정답(§F). */
const has = (s?: string) => !!s && slugs.has(s);

// A. quickRef
if (!zh.quickRef) { if (!SELFTEST) console.log("A quickRef 없음 — 이 로케일은 아직 옵션 키를 안 채웠다(미검사)"); }
else {
  if (en.quickRef!.length !== zh.quickRef.length) hit(`A 표 개수 ${en.quickRef!.length} vs ${zh.quickRef.length}`);
  en.quickRef!.forEach((t, i) => {
    const z = zh.quickRef![i]; if (!z) return;
    if (t.rows.length !== z.rows.length) hit(`A 표${i + 1} 행 수 ${t.rows.length} vs ${z.rows.length}`);
    if (t.th.length !== z.th.length) hit(`A 표${i + 1} 열 수 ${t.th.length} vs ${z.th.length}`);
    t.rows.forEach((r, ri) => r.forEach((c, ci) => {
      const zc = z.rows[ri]?.[ci] ?? "";
      // EN 셀에 숫자가 있을 때만 비교 — 라벨 셀은 로케일이 「one」을 「1枚」로 적어도 된다(ja 오탐 6건 · 09-17)
      if (num(c) && num(c) !== numL(zc)) hit(`A 표${i + 1} r${ri + 1}c${ci + 1}: EN「${c}」 ${locale}「${zc}」`);
    }));
    // ★F(09-18): EN 슬러그가 이 로케일에 실존하면 «같아야» 하고, 실존하지 않으면 «비우는» 것이 정답이다.
    //   대체 슬러그를 넣는 것도 허용 — 단 그것도 실존해야 한다(창작 = 404).
    if (has(t.link?.slug)) { if (t.link!.slug !== z.link?.slug) hit(`A 표${i + 1} link slug ${t.link!.slug} vs ${z.link?.slug}`); }
    else if (z.link?.slug && !has(z.link.slug)) hit(`F 표${i + 1} link 「${z.link.slug}」 — lib/posts-${locale}에 없다(404)`);
  });
}
// B. icmGuide + equity presets
(["bubble", "deal"] as const).forEach(k => {
  const a = en.icmGuide[k].rows, b = zh.icmGuide[k].rows;
  if (a.length !== b.length) hit(`B ${k} 행 수 ${a.length} vs ${b.length}`);
  a.forEach((r, i) => { const z = b[i]; if (!z) return;
    for (const f of Object.keys(r) as (keyof typeof r)[]) { if (f === "player") continue;
      if (String(r[f]) !== String(z[f]) && num(String(r[f])) !== numL(String(z[f]))) hit(`B ${k} r${i + 1}.${f}: EN「${r[f]}」 ${locale}「${z[f]}」`); }
  });
});
if (zh.equity) en.equity!.presets.forEach((p, i) => { const z = zh.equity!.presets[i];
  if (!z || p.label !== z.label || p.hands.join() !== z.hands.join()) hit(`B preset ${i}: ${JSON.stringify(p)} vs ${JSON.stringify(z)}`); });
else if (!SELFTEST) console.log("B equity 없음 — 옵션 키 미채움(미검사)");
// C. 개수
const cnt = (label: string, a: number, b: number) => { if (a !== b) hit(`C ${label} ${a} vs ${b}`); };
if (faq.length !== CALCULATOR_FAQ_EN.length && faq.length !== CALCULATOR_FAQ_EN.length + 1) hit(`C FAQ ${CALCULATOR_FAQ_EN.length}(+1 고유 허용) vs ${faq.length}`);
// ★F(09-18): related 개수는 «EN 8»이 아니라 «min(EN 8, 그 로케일 코퍼스 크기)» — fr은 6편뿐이라 전수 링크가 만점이다.
const relTarget = Math.min(en.related.links.length, slugs.size || en.related.links.length);
cnt("related", relTarget, zh.related.links.length);
cnt("guide.cards", en.guide.cards.length, zh.guide.cards.length);
cnt("hero.chips", en.hero.chips.length, zh.hero.chips.length);
cnt("outs.presets", en.outs.presets.length, zh.outs.presets.length);
cnt("starting.hands", Object.keys(en.starting.hands).length, Object.keys(zh.starting.hands).length);
cnt("starting.summary", en.starting.summary.length, zh.starting.summary.length);
for (const k of Object.keys(en.starting.hands)) if (!(k in zh.starting.hands)) hit(`C starting.hands 키 누락 ${k}`);
// ★F(09-18): «누락»은 그 슬러그가 이 로케일에 «실존할 때만» 결함이다(없는 글은 링크할 수 없다).
for (const s of en.related.links.map(l => l.slug))
  if (has(s) && !zh.related.links.some(l => l.slug === s)) hit(`C related slug 누락 ${s}`);
// F. 🔴 전 링크 슬러그 실존 검사 — EN 슬러그를 그대로 베껴 404를 배포하는 유형을 닫는다.
//    지금까지 이 게이트는 «개수»만 봤고 «그 슬러그가 존재하나»는 아무도 안 봤다.
const linkRefs: [string, string | undefined][] = [
  ...zh.related.links.map((l, i) => [`related[${i}]`, l.slug] as [string, string | undefined]),
  ["pushfold.shortStackLink", zh.pushfold.shortStackLink?.slug],
  ["icmGuide.deal.link", zh.icmGuide.deal.link?.slug],
  ...(zh.quickRef ?? []).map((t, i) => [`quickRef[${i}].link`, t.link?.slug] as [string, string | undefined]),
];
if (slugs.size) for (const [where, s] of linkRefs)
  if (s && !has(s)) hit(`F ${where} 「${s}」 — lib/posts-${locale}에 없다(404)`);
// D. 플레이스홀더
// ★F(09-18): «없는 것이 정답인 자리»는 D가 «문자열 없음»으로 잡으면 안 된다.
//   ① equity·quickRef = 옵션 블록(기존) ② icmGuide.deal의 링크 문장 = EN 슬러그가 이 로케일에 없으면 «생략»이 정답
//   ③ related.links[i] = 코퍼스가 얇아 목표 개수(relTarget)를 넘는 자리.
//   🔴 «비어 있다»가 정본일 수 있다(메모리 `absence-may-be-the-standard`) — 단 그 근거는 «코퍼스에 글이 없다»는 실측이다.
const dealLinkOptional = !has(en.icmGuide.deal.link?.slug);
const exemptMissing = (path: string) =>
  /^dict\.(equity|quickRef)/.test(path) ||
  (dealLinkOptional && /^dict\.icmGuide\.deal\.(linkLead|link)/.test(path)) ||
  (() => { const m = path.match(/^dict\.related\.links\[(\d+)\]/); return !!m && Number(m[1]) >= relTarget; })();
const walk = (a: any, b: any, path: string) => {
  if (typeof a === "string") {
    if (typeof b !== "string") { if (!exemptMissing(path)) hit(`D ${path}: ${locale} 문자열 없음`); return; }
    const pa = (a.match(/\{[a-z0-9]+\}/gi) || []).sort().join(), pb = (b.match(/\{[a-z0-9]+\}/gi) || []).sort().join();
    if (pa !== pb) hit(`D ${path}: EN ${pa || "∅"} ${locale} ${pb || "∅"}`);
    return;
  }
  if (Array.isArray(a)) { a.forEach((x, i) => walk(x, b?.[i], `${path}[${i}]`)); return; }
  if (a && typeof a === "object") for (const k of Object.keys(a)) walk(a[k], b?.[k], `${path}.${k}`);
};
walk(en, zh, "dict");
// E-0. meta description 길이 — 🔴 §11-7(160자 초과 금지). ★2026-09-18 de 회차에서 신설.
//   `scripts/check-meta-length.mjs`는 `lib/posts-*`만 순회해 **계산기 랜딩을 원리상 안 본다** —
//   그래서 de가 171자로 빌드·hreflang·meta·meta-lang 게이트를 전부 통과했다. 그 사각지대를 여기서 닫는다.
const descLen = zh.seo.description.length;
if (descLen > 160) hit(`E desc ${descLen}자 > 160 (§11-7)`);
// E. 인용부호 — 직선 " 은 전 로케일 금지 · 「」는 zh만 금지
const all = JSON.stringify(zh) + JSON.stringify(faq);
const straight = (all.match(/\\"/g) || []).length;
if (locale !== "en" && straight) hit(`E 직선 따옴표 ${straight}`);
if (locale === "zh" && /「|」/.test(all)) hit("E zh에 「」 사용(정본은 “ ”)");
return hits;
}


// ───────────────── 셀프테스트 ★2026-09-18 fr 회차 신설 ─────────────────
// 🔴 규칙보다 셀프테스트가 먼저다(메모리 `gate-tuning-loop-is-the-work`). 실제 de 사전을 복제해
//    결함을 «하나씩 심고» 그 한 건이 잡히는지 본다 — 「0건」이 «검사를 안 한 0건»이 아님을 증명한다.
async function selftest() {
  const dictMod = await import("../app/de/calculator/dict");
  const faqMod = await import("../app/de/calculator/faq");
  const base = Object.values(dictMod).find((v: any) => v && typeof v === "object" && "seo" in v) as Dict;
  const baseFaq = Object.values(faqMod).find((v: any) => Array.isArray(v)) as Faq;
  const deSlugs = corpusSlugs("de");
  const clone = (): Dict => structuredClone(base);
  let pass = 0, fail = 0;
  const t = (name: string, ok: boolean, detail = "") => {
    console.log(`${ok ? "  ok  " : "🔴 FAIL"} ${name}${detail ? "  — " + detail : ""}`);
    ok ? pass++ : fail++;
  };
  const hitsOf = (d: Dict, f: Faq = baseFaq, sl: Set<string> = deSlugs) => check("de", d, f, sl);
  const caught = (hs: string[], frag: string) => hs.some(h => h.includes(frag));

  // 1. 통제군 — 실제 de는 0건이어야 한다(이게 아니면 아래 판정이 전부 무의미하다)
  t("1 통제군: 실제 de 사전 = 0건", hitsOf(clone()).length === 0, hitsOf(clone()).join(" / "));

  // 2~4. F 링크 실존 — 존재하지 않는 슬러그를 심으면 잡아야 한다(= 404 배포 방지)
  const d2 = clone(); d2.related.links[0].slug = "holdem-does-not-exist";
  t("2 F: related 슬러그 창작", caught(hitsOf(d2), "F related[0]"));
  const d3 = clone(); d3.quickRef![0].link = { slug: "holdem-nope", text: "x" };
  t("3 F: quickRef 링크 창작", caught(hitsOf(d3), "F quickRef[0].link"));
  const d4 = clone(); d4.pushfold.shortStackLink.slug = "holdem-ghost";
  t("4 F: pushfold.shortStackLink 창작", caught(hitsOf(d4), "F pushfold.shortStackLink"));

  // 5~6. 얇은 코퍼스 — related 개수 기준이 min(EN 8, 코퍼스 크기)로 내려가야 한다(fr = 6편)
  // 🔴 fr을 흉내내려면 «EN 슬러그가 하나도 없는» 게 아니라 «icmGuide.deal이 가리키는 holdem-icm이 없는» 상태여야 한다.
  //    슬라이스를 0이 아니라 1부터 잡는 이유가 그것이다(첫 시도에서 holdem-icm을 넣었다가 11-B가 FAIL 났다).
  const thin = new Set(base.related.links.slice(1, 7).map(l => l.slug)); // 코퍼스 6편 가정 · holdem-icm 제외
  const d5 = clone(); d5.related.links = d5.related.links.slice(1, 7);
  d5.quickRef!.forEach(q => { delete (q as any).link; delete (q as any).linkTail; });
  delete (d5.icmGuide.deal as any).link; delete (d5.icmGuide.deal as any).linkLead;
  d5.pushfold.shortStackLink.slug = [...thin][0];
  t("5 얇은 코퍼스(6편) + 전수 링크 6 = 개수 0건", !caught(hitsOf(d5, baseFaq, thin), "C related"));
  const d6 = structuredClone(d5); d6.related.links = d6.related.links.slice(0, 5);
  t("6 얇은 코퍼스(6편)인데 5개만 = 잡는다", caught(hitsOf(d6, baseFaq, thin), "C related 6 vs 5"));

  // 7. 코퍼스에 «있는» EN 슬러그를 뺀 것은 여전히 결함이다(F가 C를 무력화하면 안 된다)
  const d7 = clone(); d7.related.links = d7.related.links.filter(l => l.slug !== "holdem-icm");
  t("7 실존 슬러그 누락은 그대로 잡는다", caught(hitsOf(d7), "C related slug 누락 holdem-icm"));

  // 8. E-0 desc 길이(de 회차 신설 규칙의 회귀 방지)
  const d8 = clone(); d8.seo.description = "a".repeat(161);
  t("8 E: desc 161자", caught(hitsOf(d8), "E desc 161자 > 160"));

  // 9. A 숫자 셀 전사 오류(핵심 §13 축이 살아 있는지)
  const d9 = clone(); d9.quickRef![0].rows[0][1] = "99,9 %";
  t("9 A: quickRef 숫자 셀 변조", caught(hitsOf(d9), "A 표1 r1c2"));

  // 10-A~C. ★fr 조판 정규화 — «81,9 %»(% 앞 공백)·«1 035»(공백 천단위)가 EN과 «같다»고 읽혀야 한다.
  //   🔴 그러면서도 «틀린 값»은 여전히 잡아야 한다(정규화가 검사를 무력화하면 게이트가 죽는다).
  const frLoc = (d: Dict) => { d.numberLocale = "fr-FR"; return d; };
  const dA = frLoc(clone()); dA.quickRef![0].rows[0] = ["AA vs KK", "81,9 %", "18,1 %", "0,5 %"];
  t("10-A fr 조판: «81,9 %» = EN «81.9%»", !caught(hitsOf(dA), "A 표1 r1c"));
  const dB = frLoc(clone()); dB.icmGuide.deal.rows[0].chop = "$1 035";
  t("10-B fr 조판: «$1 035» = EN «$1,035»", !caught(hitsOf(dB), "B deal r1.chop"));
  const dC = frLoc(clone()); dC.quickRef![0].rows[0] = ["AA vs KK", "88,9 %", "18,1 %", "0,5 %"];
  t("10-C fr 조판이어도 틀린 값은 잡는다", caught(hitsOf(dC), "A 표1 r1c2"));

  // 11-A~B. ★F 예외가 «없는 게 정답»만 면제하는가 — 과잉 면제면 게이트가 죽는다
  const d11a = clone();
  delete (d11a.icmGuide.deal as any).link; delete (d11a.icmGuide.deal as any).linkLead;
  t("11-A de(코퍼스에 holdem-icm 있음)는 deal 링크 생략을 «잡아야» 한다", caught(hitsOf(d11a), "D dict.icmGuide.deal.link"));
  const d11b = structuredClone(d11a); d11b.related.links = d11b.related.links.slice(1, 7);
  d11b.quickRef!.forEach(q => { delete (q as any).link; delete (q as any).linkTail; });
  d11b.pushfold.shortStackLink.slug = [...thin][0];
  t("11-B 얇은 코퍼스면 deal 링크 생략이 정답(면제)", !caught(hitsOf(d11b, baseFaq, thin), "D dict.icmGuide.deal.link"));

  // 12. D 플레이스홀더 소실
  const d10 = clone(); d10.outs.outsCount = d10.outs.outsCount.replace("{v}", "");
  t("12 D: {v} 플레이스홀더 소실", caught(hitsOf(d10), "D dict.outs.outsCount"));

  console.log(`
SELFTEST ${pass}/${pass + fail}`);
  process.exit(fail ? 1 : 0);
}

(async () => { // tsx는 CJS 출력이라 top-level await 불가
  if (SELFTEST) { await selftest(); return; }
  const dictMod = await import(`../app/${locale}/calculator/dict`);
  const faqMod = await import(`../app/${locale}/calculator/faq`);
  const zh = Object.values(dictMod).find((v: any) => v && typeof v === "object" && "seo" in v) as Dict;
  const faq = Object.values(faqMod).find((v: any) => Array.isArray(v)) as Faq;
  const hits = check(locale, zh, faq, corpusSlugs(locale));
  hits.forEach(h => console.log(h));
  console.log(hits.length === 0 ? `PARITY OK — ${locale} 불일치 0` : `🔴 ${locale} 불일치 ${hits.length}`);
  process.exit(hits.length ? 1 : 0);
})();
