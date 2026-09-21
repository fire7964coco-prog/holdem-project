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
//
// ★2026-09-21 queue Q11 — «원천 ↔ 사본» 항 H·I 신설(정본 = `docs/settled-decisions.md` §3-H · 재료 = 진행 파일 §5 Q10-3):
//   A~E·G는 «사본끼리»(EN 사전 ↔ 로케일 사전)를 본다(F는 «그 로케일 코퍼스에 슬러그가 실존하나»라 절대 검사 —
//   E-0 desc 길이도 마찬가지다. 「전부 사본 대조」는 과장이니 그렇게 읽지 마라). 어느 쪽이든 «요약 ↔ 코드» 축은
//   아무도 안 봤고, 그래서 **12개 사본이 «똑같이» 틀리면 패리티는 0건**이다 —
//   실제로 요약 3행의 `Q10s` 누락이 **사전 11사본은 `64c0fd9a`(09-17) 이래, ko는 `69fca771`(2026-07-08) 이래**
//   한 번도 안 걸렸다(09-21 Q10에서 손으로 발견). 🔴 ko가 **2.3개월 더 오래** 틀려 있었다 — `69fca771`이
//   ko 표에 `[3,"Q10s",…]`를 넣으면서 요약 3행은 그대로 뒀다(축어 확인). 정본 §3-H는 「`64c0fd9a` 이래」로만
//   적혀 있는데 그건 **사전 몫**이다(진행 파일 §5에 정정 요청).
//   H = `starting.summary` 1~4행이 드는 핸드 코드 집합 ↔ `HAND_TABLE`의 티어별 집합(범위 표기 `66–22`·`A8s–A2s`·
//       `A10o–J10o`·`98s–54s`와 ko의 물결표 `66~22` 판본을 전개해서 «개수까지» 센다) + 5행 예시가 정말 폴백 T5인가.
//   I = 두 소스(`components/calculator/calculator-tool.tsx` ↔ `app/calculator/calculator-client.tsx`)의
//       `HAND_TABLE`·`fallbackTier`가 같은가 — 지금까지 「한쪽만 고치지 마라」 주석에만 있던 규율을 코드로 옮긴 것 —
//       그리고 `dict.starting.hands` 키 집합 ↔ `HAND_TABLE` 코드 집합.
//   ★순회도 넓혔다: `en`(EN 사전 자신)과 `ko`(사전 파일이 없다 — 배열 리터럴이 클라이언트 안에 산다)를 넣어 **12사본 전수**다.
//       `--all`이 12개를 한 번에 돈다. ko는 사전이 없으므로 A~G가 아니라 H·I·desc 길이만 받는다.
//   H·I가 못 보는 것: 티어 배정이 «전략적으로 옳은가»(렌즈 몫) · desc/action 문구의 뜻 · 5행 산문.
//   🔴 1~4행에 «산문»을 쓰면 H가 「전개 실패」로 잡는다 — 오탐이 아니라 의도다. Q10 이전 4행이 바로
//      「suited connectors」였고, 그 한 낱말이 **98s·87s·76s·65s·54s 다섯 핸드를 가려** 아무도 세지 못했다.
//      1~4행은 코드의 파생물이니 «핸드 코드 또는 범위 표기»만 쓴다. 5행(폴백)만 산문이다.
//   ★회귀 증명(2026-09-21 · 「0건」이 «미검사의 0건»이 아님의 실물 근거):
//      · Q10 직전 `51d79100~1` → **12사본 47건** = `Q10s` 누락 12 + 4행 T4 누락 12 + 1~4행 산문 토큰 23.
//        4행 T4 누락은 사본당 9핸드인데 **원인이 셋**이다(하나로 묶어 적지 마라):
//        `98s 87s 76s 65s 54s` = 「suited connectors」라는 한 낱말이 가린 것 · `K10o Q10o J10o` = 09-20 T4 승격
//        미반영(`3db98e3f`) · `A10o` = 애초에 어느 행에도 없던 것.
//      · 발생 커밋 `64c0fd9a` → **59건**(위 47 + 5행 T5 누락 12). 그때 표의 T5는 `44 33 22 K10o Q10o J10o` 6개인데
//        5행은 `44–22 …`만 들어 **뒤 셋이 어느 행에도 없었다** — 티어5 축이 있어야만 보이는 자리다.
import { readdirSync, existsSync, readFileSync } from "fs";
import { CALC_DICT_EN } from "../components/calculator/dict";
import { CALCULATOR_FAQ_EN } from "../app/en/calculator/faq";
import { CALCULATOR_LOCALES } from "../lib/calculator-alternates";

const arg = process.argv[2];
if (!arg) { console.error("usage: npx tsx scripts/calc-dict-parity.ts <locale|en|ko> | --all | --selftest"); process.exit(2); }
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
// ★G. 퍼센트 조판 일치 — 2026-09-19 신설(브리프 §5 🟠🟠 해소 회차).
//   도구 본체(`calculator-tool.tsx`)가 계산해 찍는 퍼센트는 `dict.percentGap`으로 «%» 앞 공백을 넣는다.
//   그러니 사전이 «81,9 %»로 적어 놓고 percentGap이 비어 있으면 **같은 화면에서 조판이 갈린다** —
//   실제로 09-18까지 fr이 그 상태였다(도구 «81.9%» ↔ 우리 표 «81,9 %»).
//   판정은 사전의 «숫자 뒤 %» 실측으로 한다(열 머리글 «Win %»는 숫자가 앞에 없어 안 센다).
{
  const dictText = JSON.stringify(zh);
  const gapped = (dictText.match(/\d[   ]%/g) || []).length;
  const plain = (dictText.match(/\d%/g) || []).length;
  const gap = zh.percentGap ?? "";
  // 표를 아직 안 채운 로케일은 «숫자 뒤 %»가 10개도 안 나와 판정하지 않는다(미검사).
  // ★2026-09-19 ms에 이어 **hi도 quickRef를 채워 판정 대상이 됐다** — 남은 «미검사» 로케일은 없다(ko는 별도 클라이언트).
  //   hi 코퍼스 실측 = 붙여 씀 1,611 : 띄어 씀 0(반각·NBSP 둘 다 0) → percentGap 없음이 정답.
  //   🔴 데바나가리는 선례가 없어 이 측정이 유일한 근거였다(docs/keyword-bank/hi-calculator.md §4-B).
  if (gapped + plain >= 10) {
    if (gapped > plain && !gap) hit(`G 사전은 «숫자 %»로 적는데(${gapped} : ${plain}) percentGap이 비었다 — 도구가 붙여 쓴다`);
    if (plain > gapped && gap) hit(`G 사전은 «숫자%»로 붙여 적는데(${plain} : ${gapped}) percentGap이 있다 — 도구만 띄운다`);
  }
  // 🔴 반각 공백은 안 된다 — 390px에서 «23,1» / «%»로 두 줄로 꺾인다(fr 팟오즈 캡처 실측 2026-09-19).
  if (gap === " ") hit("G percentGap이 반각 공백이다 — 고정공백(U+00A0)을 써라(390px에서 숫자와 % 가 갈라진다)");
}
// E. 인용부호 — 직선 " 은 전 로케일 금지 · 「」는 zh만 금지
const all = JSON.stringify(zh) + JSON.stringify(faq);
const straight = (all.match(/\\"/g) || []).length;
if (locale !== "en" && straight) hit(`E 직선 따옴표 ${straight}`);
if (locale === "zh" && /「|」/.test(all)) hit("E zh에 「」 사용(정본은 “ ”)");
return hits;
}


// ═════════════ H·I. 원천(코드) ↔ 사본(문자열) — ★2026-09-21 queue Q11 신설 ═════════════
const TOOL_SRC = "components/calculator/calculator-tool.tsx";
const KO_SRC = "app/calculator/calculator-client.tsx";
const KO_PAGE = "app/calculator/page.tsx";
/**
 * 12사본 = EN 사전 + 로케일 사전 10 + ko 전용 클라이언트 (`settled-decisions` §3-H 「13으로 세라」의 사전 몫).
 * 🔴 **손복사 금지** — 로케일 목록의 정본은 `lib/calculator-alternates.ts`다(렌즈 A F3).
 *    「사본이 똑같이 틀리면 0건」을 막으려는 게이트가 자기 커버리지 목록을 손복사로 들고 있으면
 *    로케일이 하나 늘 때 **조용히 빠진 채 초록**이 된다 = 미검사의 0건.
 */
const ALL_TARGETS = [...CALCULATOR_LOCALES, "ko"];

/** `ℹ` 접두 = «판정 못 한 자리»(출력은 하되 불일치로 세지 않는다). 나머지는 전부 🔴 불일치다. */
const INFO = "ℹ ";
const isInfo = (h: string) => h.startsWith(INFO);

const RANKS_H = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const RIDX = new Map(RANKS_H.map((r, i) => [r, i]));
type Hand = { hi: number; lo: number; suit: "s" | "o" | "" };

/** 「AKs」·「1010」·「10-9s」·「A10o」를 전부 같은 코드로 읽는다. 페어에 s/o가 붙거나 비페어에 안 붙으면 핸드가 아니다. */
function parseHand(tok: string): Hand | null {
  const m = /^(10|[2-9]|[JQKA])-?(10|[2-9]|[JQKA])(s|o)?$/.exec(tok.trim());
  if (!m) return null;
  let hi = RIDX.get(m[1])!, lo = RIDX.get(m[2])!;
  const suit = (m[3] as "s" | "o" | undefined) ?? "";
  if (hi < lo) [hi, lo] = [lo, hi];
  if (hi === lo && suit) return null;
  if (hi !== lo && !suit) return null;
  return { hi, lo, suit };
}
/** `HAND_TABLE`이 쓰는 코드 표기(페어 10은 `1010` · 10-9 수티드는 `109s`). */
const handCode = (h: Hand) => RANKS_H[h.hi] + RANKS_H[h.lo] + h.suit;

/** 🔴 `fallbackTier`의 미러. 원본이 바뀌면 아래 I항이 잡는다(FALLBACK_CANON). */
const fallbackMirror = (h: Hand): 4 | 5 => (h.suit === "s" ? 4 : h.hi === 12 || h.lo >= 7 ? 4 : 5);
const FALLBACK_CANON = "if (hi.suit === lo.suit) return 4; return hi.rank === 12 || lo.rank >= 7 ? 4 : 5;";

/** 범위 표기 전개. 페어 내림 · 킥커 고정 · 하이카드 고정 · 같은 갭 커넥터 — 네 형태만 안다(모르면 null → H가 「전개 실패」로 잡는다). */
function expandRange(a: Hand, b: Hand): string[] | null {
  const out: string[] = [];
  const isPair = (h: Hand) => h.hi === h.lo;
  if (isPair(a) !== isPair(b)) return null;
  if (!isPair(a) && a.suit !== b.suit) return null;
  if (isPair(a)) {
    if (a.hi <= b.hi) return null;
    for (let r = a.hi; r >= b.hi; r--) out.push(RANKS_H[r] + RANKS_H[r]);
    return out;
  }
  if (a.hi === b.hi && a.lo > b.lo) {            // A8s–A2s : 하이카드 고정, 킥커 내림
    for (let r = a.lo; r >= b.lo; r--) out.push(RANKS_H[a.hi] + RANKS_H[r] + a.suit);
    return out;
  }
  if (a.lo === b.lo && a.hi > b.hi) {            // A10o–J10o : 킥커 고정, 하이카드 내림
    for (let r = a.hi; r >= b.hi; r--) out.push(RANKS_H[r] + RANKS_H[a.lo] + a.suit);
    return out;
  }
  if (a.hi - a.lo === b.hi - b.lo && a.hi > b.hi) { // 98s–54s : 같은 갭 커넥터, 둘 다 내림
    for (let d = 0; a.hi - d >= b.hi; d++) out.push(RANKS_H[a.hi - d] + RANKS_H[a.lo - d] + a.suit);
    return out;
  }
  return null;
}

/** 1~4행 분리자. 5행(산문 섞임)은 괄호·인용부호까지 가른다 — zh 「弱的非同花杂牌（J2o、…」처럼 **괄호가 토큰 한가운데** 온다. */
const ROW_SPLIT = /[\s,，、·]+/;
const ROW5_SPLIT = /[\s,，、·()（）「」“”]+/;
/**
 * «핸드처럼 생겼는데 못 읽은» 토큰인가 — 5행에서 산문은 조용히 넘기되 이것만 «미판정»으로 출력한다.
 * 🔴 **랭크를 «둘 이상» 요구한다**(2차 교열 A-1). 첫 판은 `[0-9JQKA]+`라 `0`·`1`도 랭크로 받고 한 글자도 통과해서
 *    5행 산문의 맨숫자(`top 10 percent`의 `10` · `2026 기준`의 `2026` · `상위 5 퍼센트`의 `5`)를 전부 미판정으로 오탐했다.
 */
const isHandish = (s: string) => /^(?:10|[2-9JQKA]){2,}[so]?(?:[-–—−~〜～](?:10|[2-9JQKA]){2,}[so]?)*$/.test(s);

/** 요약 한 행 → 핸드 코드 목록. 🔴 ASCII 하이픈은 표시형(`10-9s`·`10-10`)이라 «단독 핸드 파싱이 실패한 뒤에만» 구분자로 본다. */
function expandRow(row: string, splitRe: RegExp = ROW_SPLIT): { codes: string[]; bad: string[] } {
  const codes: string[] = [], bad: string[] = [];
  for (const raw of row.split(splitRe).filter(Boolean)) {
    const tok = raw.replace(/^[(（"'「]+|[)）"'」]+$/g, "");
    if (!tok) continue;
    const one = parseHand(tok);
    if (one) { codes.push(handCode(one)); continue; }
    let done = false;
    for (const parts of [tok.split(/[–—−~〜～]/), tok.split("-")]) {
      if (parts.length !== 2) continue;
      const a = parseHand(parts[0]), b = parseHand(parts[1]);
      const ex = a && b ? expandRange(a, b) : null;
      if (ex) { codes.push(...ex); done = true; break; }
    }
    if (!done) bad.push(raw);
  }
  return { codes, bad };
}

/** H. 요약 5행 ↔ `HAND_TABLE` 티어 집합. 1~4행은 집합 동일성, 5행은 «정말 폴백 T5인가»만 본다. */
function checkSummaryVsCode(label: string, rows: string[], table: Map<string, number>): string[] {
  const hits: string[] = [];
  if (rows.length !== 5) hits.push(`H ${label} 요약 행 수 ${rows.length}(5가 정본)`);
  for (let t = 1; t <= 4; t++) {
    const row = rows[t - 1];
    if (row === undefined) continue;
    const { codes, bad } = expandRow(row);
    bad.forEach(x => hits.push(`H ${label} 티어${t} 전개 실패 「${x}」 — 핸드 코드도 범위 표기도 아니다`));
    const dup = [...new Set(codes.filter((c, i) => codes.indexOf(c) !== i))];
    if (dup.length) hits.push(`H ${label} 티어${t} 중복 ${dup.join(" ")}`);
    const got = new Set(codes);
    const want = new Set([...table].filter(([, tt]) => tt === t).map(([c]) => c));
    const missing = [...want].filter(c => !got.has(c));
    const extra = [...got].filter(c => !want.has(c));
    if (missing.length) hits.push(`H ${label} 티어${t} 요약에 없음(코드에는 있다): ${missing.join(" ")}`);
    if (extra.length) hits.push(`H ${label} 티어${t} 코드에 없음(요약에만 있다): ${extra.join(" ")}`);
  }
  // 5행 = «표 T5» + «폴백 T5»가 같이 사는 행이라 1~4행과 규칙이 다르다(렌즈 A F2·F10 · 렌즈 B 1·2 독립 수렴).
  //   ⓐ 표가 T5 엔트리를 들고 있으면 5행이 그것을 «들어야» 한다(09-20까지 실제로 `[5,"44"] [5,"33"] [5,"22"]`였고
  //      5행은 `44–22 weak offsuit hands`였다 — t를 1~4로만 돌리면 그 축이 통째로 미검사다).
  //   ⓑ 5행이 든 핸드가 표 안이면 «티어가 5일 때만» 정상이다. 옛 규칙은 티어를 안 봐서 **맞게 적은 44를 잡는 오탐**이었다.
  //   ⓒ 범위 표기(`44–22`)도 전개한다. 옛 규칙은 `parseHand` 단품만 봐서 범위를 «조용히» 흘렸다.
  //   ⓓ 산문은 넘기되 «핸드처럼 생긴» 미파싱 토큰은 «미판정»으로 출력한다(「판정 못 한 자리는 매 실행 출력」).
  const r5 = rows[4];
  if (r5 !== undefined) {
    const { codes, bad } = expandRow(r5, ROW5_SPLIT);
    // 🔴 「미판정」은 «결함»이 아니라 «판정 못 한 자리»다 — `ℹ`로 내보내 **출력은 하되 exit code는 안 만든다**
    //    (2차 교열 A-1 · Q7-b가 `count`·`pointer`를 ℹ로 내린 것과 같은 규율: 기계가 하는 일은 읽을 자리를 좁히는 것이다).
    bad.filter(isHandish).forEach(x => hits.push(`${INFO}H ${label} 5행 미판정 「${x}」 — 핸드처럼 생겼는데 못 읽었다`));
    const got = new Set(codes);
    const want5 = [...table].filter(([, tt]) => tt === 5).map(([c]) => c);
    const miss5 = want5.filter(c => !got.has(c));
    if (miss5.length) hits.push(`H ${label} 티어5 요약에 없음(코드에는 있다): ${miss5.join(" ")}`);
    for (const c of got) {
      const t = table.get(c);
      if (t === undefined) {
        if (fallbackMirror(parseHand(c)!) !== 5) hits.push(`H ${label} 티어5 예시 ${c}는 폴백이 티어4로 찍는다`);
      } else if (t !== 5) hits.push(`H ${label} 티어5 예시 ${c}는 HAND_TABLE 티어${t}다`);
    }
  }
  return hits;
}

/**
 * 🔴 주석 제거는 **잡아낸 구간 안에서만** 한다(렌즈 A F11). 파일 전체에 걸면 문자열 리터럴 안의 ` //`가
 *    줄 끝까지 먹혀 엉뚱한 줄이 합쳐진다 — 🪶 이건 **실측 결함이 아니라 구성 예시다**(2차 교열 D-3):
 *    현재 세 대상 파일의 인라인 `//`는 전부 진짜 주석이고 문자열 안 ` //`는 **0건**이다(`"https://…"`는 앞이 `:`라 안 걸린다).
 *    예방으로 좁혀 둔다. 블록 주석도 지운다(F5 —
 *    `/* [4,"54s"], *​/`로 엔트리를 숨기면 두 파일이 똑같이 숨겨 I항까지 통과해 버린다).
 */
const stripComments = (s: string) =>
  s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^[ \t]*\/\/[^\n]*$/gm, "").replace(/([ \t])\/\/[^\n]*$/gm, "$1");
/** 구간을 «원본»에서 잘라낸 뒤 그 안에서만 주석을 지운다. 못 찾으면 throw — 조용히 빈손으로 돌아오지 않는다. */
function regionFrom(src: string, re: RegExp, what: string, where: string): string {
  const m = re.exec(src);
  if (!m) throw new Error(`${what}을(를) 못 찾았다: ${where} — 형식이 바뀌었으면 이 게이트도 같이 고쳐라`);
  return stripComments(m[1]);
}
const region = (file: string, re: RegExp, what: string) => regionFrom(readFileSync(file, "utf8"), re, what, file);
/**
 * 소스에서 `HAND_TABLE`을 읽는다(코드 문자열 → 티어). 표는 두 파일에 사본이 하나씩 있다.
 * 🔴 **잔여물 검사**(렌즈 A F1): 엔트리 정규식은 큰따옴표만 안다 — `[4, 'A9o']`·백틱·블록주석으로 적으면
 *    «조용히 사라져» 표 모델에서 빠지고 H·I·I-2가 전부 통과한다(앱은 그 핸드를 렌더하는데 사전엔 prose가 없다).
 *    그래서 대괄호 묶음을 전부 세어 **하나라도 모양이 다르면 throw**한다.
 * 🔴 **중복 검사**(렌즈 A F6): 앱은 `HAND_TABLE.find`로 **첫** 항목을, Map은 **마지막** 항목을 쓴다.
 *    중복이 있으면 게이트와 화면이 반대 티어를 본다 — 중복 자체가 결함이므로 throw.
 */
function parseHandTableFrom(src: string, where = "<inline>"): [string, number][] {
  const body = regionFrom(src, /const HAND_TABLE: TierEntry\[\] = \[([\s\S]*?)\n\];/, "HAND_TABLE", where);
  const groups = body.match(/\[[^\]]*\]/g) ?? [];
  const ENTRY = /^\[\s*[1-5]\s*,\s*"[^"]+"(?:\s*,\s*"(?:[^"\\]|\\.)*")*\s*,?\s*\]$/;
  for (const g of groups) if (!ENTRY.test(g)) throw new Error(`HAND_TABLE 엔트리 모양이 다르다: ${where} — 「${g.slice(0, 60)}」 (desc 안에 닫는 대괄호나 « //»를 쓰면 여기서 걸린다)`);
  const residue = body.replace(/\[[^\]]*\]/g, "").replace(/[\s,]/g, "");
  if (residue) throw new Error(`HAND_TABLE에 엔트리 밖 잔여물이 있다: ${where} — 「${residue.slice(0, 60)}」`);
  const out = groups.map(g => {
    const m = /^\[\s*([1-5])\s*,\s*"([^"]+)"/.exec(g)!;
    return [m[2], Number(m[1])] as [string, number];
  });
  const dup = out.map(([c]) => c).filter((c, i, a) => a.indexOf(c) !== i);
  if (dup.length) throw new Error(`HAND_TABLE에 중복 코드: ${where} — ${[...new Set(dup)].join(" ")}(앱은 첫 항목을 쓴다)`);
  return out;
}
const parseHandTable = (file: string) => parseHandTableFrom(readFileSync(file, "utf8"), file);
/** 소스에서 `fallbackTier` 본체를 한 줄로 정규화해 읽는다. */
function parseFallbackBody(file: string): string {
  return region(file, /function fallbackTier\([^)]*\): 4 \| 5 \{([\s\S]*?)\n\}/, "fallbackTier").replace(/\s+/g, " ").trim();
}
/** 🔴 `fallbackTier` 본체의 `rank === 12`·`rank >= 7`은 **`RANKS` 인덱스에 전적으로 기댄다** — 본체만 잠그면 미러가 조용히 어긋난다(렌즈 A F7). */
const parseRanksFrom = (src: string, where = "<inline>") =>
  regionFrom(src, /const RANKS = (\[[^\]]*\]);/, "RANKS", where).replace(/\s+/g, "");
const parseRanks = (file: string) => parseRanksFrom(readFileSync(file, "utf8"), file);
const RANKS_CANON = JSON.stringify(RANKS_H).replace(/\s+/g, "");

/** I. 두 소스의 표·폴백·RANKS가 같은가 + 게이트 미러가 아직 원본과 같은가. 로케일과 무관해 한 번만 돈다. */
function checkSourceTwins(a: [string, number][], b: [string, number][], fa: string, fb: string, ra = RANKS_CANON, rb = RANKS_CANON): string[] {
  const hits: string[] = [];
  if (ra !== rb) hits.push(`I RANKS 갈림: tool「${ra}」 ↔ ko「${rb}」`);
  if (ra !== RANKS_CANON) hits.push(`I RANKS가 바뀌었다 — 이 게이트의 RANKS_H도 같이 고쳐라(fallbackMirror의 12·7이 이 인덱스다): 「${ra}」`);
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    const ma = new Map(a), mb = new Map(b);
    for (const [c, t] of ma) if (!mb.has(c)) hits.push(`I ${KO_SRC}에 없다: ${c}(T${t})`);
    for (const [c, t] of mb) if (!ma.has(c)) hits.push(`I ${TOOL_SRC}에 없다: ${c}(T${t})`);
    for (const [c, t] of ma) if (mb.has(c) && mb.get(c) !== t) hits.push(`I ${c} 티어 갈림: tool T${t} ↔ ko T${mb.get(c)}`);
    if (!hits.length) hits.push(`I HAND_TABLE 순서가 갈렸다(집합·티어는 같다) — 한쪽만 고치지 마라`);
  }
  if (fa !== fb) hits.push(`I fallbackTier 갈림: tool「${fa}」 ↔ ko「${fb}」`);
  if (fa !== FALLBACK_CANON) hits.push(`I fallbackTier 본체가 바뀌었다 — 이 게이트의 미러(fallbackMirror·FALLBACK_CANON)도 같이 고쳐라: 「${fa}」`);
  return hits;
}

/** I-2. `dict.starting.hands` 키 집합 ↔ `HAND_TABLE` 코드 집합(둘 다 원천은 표다). */
function checkHandKeys(label: string, keys: string[], table: Map<string, number>): string[] {
  const hits: string[] = [];
  const k = new Set(keys);
  for (const c of table.keys()) if (!k.has(c)) hits.push(`I ${label} starting.hands에 없음(HAND_TABLE에는 있다): ${c}`);
  for (const c of k) if (!table.has(c)) hits.push(`I ${label} HAND_TABLE에 없음(starting.hands에만 있다): ${c}`);
  return hits;
}

/** ko 전용 추출기 — ko는 `app/<locale>/calculator/dict.ts`가 «아예 없다»(배열 리터럴이 클라이언트 안에 산다). */
function koSummaryRows(): string[] {
  const body = region(KO_SRC, /핸드 등급 요약[\s\S]*?\(\[([\s\S]*?)\]\s*as\s*\[1\|2\|3\|4\|5,\s*string,\s*string\]\[\]\)/, "ko 요약 배열");
  return [...body.matchAll(/\[\s*[1-5]\s*,\s*"((?:[^"\\]|\\.)*)"/g)].map(x => x[1]);
}
/**
 * ko 랜딩의 meta description — E-0(≤160)은 «사전»을 보므로 사전이 없는 ko는 원리상 밖이었다.
 * 🔴 `openGraph`·`twitter` 블록을 먼저 잘라낸다(렌즈 A F9): 그 안에도 `description:`이 있어
 *    블록 순서가 바뀌면 **OG 설명을 재고 본문 description은 안 보는** 조용한 오측정이 난다.
 * 🔴 문자열 리터럴이 아니면(연결식 `"앞" + SUFFIX` 등) 짧게 재는 대신 **throw**한다.
 */
function metaDescriptionOf(raw: string, where = KO_PAGE): string {
  const s = raw.replace(/^\s*\/\/[^\n]*$/gm, "");
  const start = s.indexOf("export const metadata");
  if (start < 0) throw new Error(`metadata 선언을 못 찾았다: ${where}`);
  let block = s.slice(start);
  const cut = Math.min(...["\n  openGraph:", "\n  twitter:"].map(k => { const i = block.indexOf(k); return i < 0 ? Infinity : i; }));
  if (Number.isFinite(cut)) block = block.slice(0, cut);
  const m = /\n\s*description:\s*\n?\s*("(?:[^"\\]|\\.)*")\s*,/.exec(block);
  if (!m) throw new Error(`랜딩 description이 단일 문자열 리터럴이 아니다(또는 없다): ${where}`);
  return JSON.parse(m[1]);
}
const koMetaDescription = () => metaDescriptionOf(readFileSync(KO_PAGE, "utf8"));
/** 🔴 «재는 것»과 «잡는 것»은 다른 자리다 — 임계 비교를 따로 떼어 셀프테스트가 닿게 한다(2차 교열 B-3). */
const descHits = (label: string, d: string) => (d.length > 160 ? [`E ${label} 랜딩 desc ${d.length}자 > 160 (§11-7)`] : []);


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
  /** 파서는 «조용한 빈손»이 아니라 throw여야 한다 — 이 헬퍼가 그것을 단정한다. */
  const thrown = (fn: () => unknown) => { try { fn(); return false; } catch { return true; } };

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

  // 13-A~D. ★G 퍼센트 조판 일치(2026-09-19 신설) — 통제군은 «붙여 쓰는» de와 «띄어 쓰는» fr 둘 다 본다.
  const frMod = await import("../app/fr/calculator/dict");
  const frDict = Object.values(frMod).find((v: any) => v && typeof v === "object" && "seo" in v) as Dict;
  t("13-A 통제군: 실제 de(붙여 씀 · percentGap 없음) = G 0건", !caught(hitsOf(clone()), "G "));
  t("13-B 통제군: 실제 fr(띄어 씀 · percentGap 고정공백) = G 0건",
    !check("fr", structuredClone(frDict), baseFaq, corpusSlugs("fr")).some(h => h.startsWith("G ")));
  const d13c = clone(); d13c.percentGap = " ";
  t("13-C de 사전에 percentGap을 붙이면 잡는다", caught(hitsOf(d13c), "G 사전은 «숫자%»로 붙여 적는데"));
  const d13d = structuredClone(frDict); delete (d13d as any).percentGap;
  t("13-D fr 사전에서 percentGap을 빼면 잡는다",
    check("fr", d13d, baseFaq, corpusSlugs("fr")).some(h => h.includes("G 사전은 «숫자 %»로 적는데")));
  const d13e = structuredClone(frDict); d13e.percentGap = " ";
  t("13-E percentGap이 반각 공백이면 잡는다(390px 줄바꿈)",
    check("fr", d13e, baseFaq, corpusSlugs("fr")).some(h => h.includes("G percentGap이 반각 공백")));

  // ═══ 14~29. ★H·I 원천↔사본(2026-09-21 queue Q11 신설) ═══
  // 🔴 통제군을 셋 다 둔다 — EN 사전 · ko 클라이언트 · de 사전. 하나라도 0건이 아니면 아래 판정이 무의미하다.
  const table = new Map(parseHandTable(TOOL_SRC));
  const koTable = new Map(parseHandTable(KO_SRC));
  const enRows = CALC_DICT_EN.starting.summary.map(r => r.hands);
  const koRows = koSummaryRows();
  const deRows = base.starting.summary.map(r => r.hands);
  const H = (rows: string[], tbl = table) => checkSummaryVsCode("x", rows, tbl);
  const mut = (rows: string[], i: number, v: string) => rows.map((r, j) => (j === i ? v : r));

  t("14 통제군: 실제 EN 요약 ↔ HAND_TABLE = 0건", H(enRows).length === 0, H(enRows).join(" / "));
  t("15 통제군: 실제 ko 요약(물결표 판본) ↔ ko HAND_TABLE = 0건", H(koRows, koTable).length === 0, H(koRows, koTable).join(" / "));
  t("16 통제군: 실제 de 요약 = 0건", H(deRows).length === 0, H(deRows).join(" / "));

  // 17·19. 🔴 «정확히 한 건 · 정확한 메시지»로 단정한다(렌즈 A F8):
  //   `some(h => h.includes("Q10s"))`는 expandRow가 통째로 망가져 «전부 누락»을 뱉어도 초록이 된다.
  //   심은 결함 하나가 «그 한 건으로» 잡히는지를 봐야 게이트 붕괴가 셀프테스트에 보인다.
  const one = (hs: string[], msg: string) => hs.length === 1 && hs[0] === msg;
  t("17 H: 3행에서 Q10s를 빼면 «그 한 건만» 잡는다(09-21까지 살아 있던 유형)",
    one(H(mut(enRows, 2, enRows[2].replace(" Q10s", ""))), "H x 티어3 요약에 없음(코드에는 있다): Q10s"),
    H(mut(enRows, 2, enRows[2].replace(" Q10s", ""))).join(" / "));
  t("18 H: 4행에 표 밖(다른 티어) 핸드를 넣으면 잡는다",
    one(H(mut(enRows, 3, enRows[3] + " KQs")), "H x 티어4 코드에 없음(요약에만 있다): KQs"));
  t("19 H: 범위 끝을 줄이면(66–22 → 66–33) «22 한 건만» 잡는다",
    one(H(mut(enRows, 3, enRows[3].replace("66–22", "66–33"))), "H x 티어4 요약에 없음(코드에는 있다): 22"),
    H(mut(enRows, 3, enRows[3].replace("66–22", "66–33"))).join(" / "));
  t("20 H: 범위를 낱개로 풀어 써도 동치(0건)",
    H(mut(enRows, 3, "66 55 44 33 22 A8s A7s A6s A5s A4s A3s A2s KJo QJo A10o K10o Q10o J10o 98s 87s 76s 65s 54s")).length === 0);
  t("21 H: 구분자를 물결표로 바꿔도 동치(ko 판본 호환)",
    H(mut(enRows, 3, enRows[3].replace(/–/g, "~"))).length === 0);
  t("22 H: 전개 못 하는 토큰은 «미검사»로 흘리지 않고 잡는다",
    H(mut(enRows, 3, enRows[3] + " ZZZ")).some(h => h.includes("전개 실패")));
  t("23 H: 5행 예시에 표 안 핸드를 들면 잡는다",
    H(mut(enRows, 4, "weak offsuit hands (AA, 93o, 72o)")).some(h => h.includes("티어5 예시 AA")));
  t("24 H: 5행 예시에 폴백이 T4로 찍는 핸드(A5o)를 들면 잡는다",
    H(mut(enRows, 4, "weak offsuit hands (A5o, 93o, 72o)")).some(h => h.includes("폴백이 티어4")));
  t("25 H: 요약 행이 5행이 아니면 잡는다", H(enRows.slice(0, 4)).some(h => h.includes("요약 행 수 4")));

  // ── 25-B~G. 🔴 티어 5 축(렌즈 A F2 · 렌즈 B 1·2 독립 수렴). 반례는 가설이 아니라 **09-20까지의 실물**이다:
  //    그때 표는 `[5,"44"] [5,"33"] [5,"22"]`였고 5행은 `44–22 weak offsuit hands`였다.
  const t5table = new Map<string, number>([...table].map(([c, v]) => [c, ["44", "33", "22"].includes(c) ? 5 : v]));
  // 🔴 통제군은 «표와 요약이 서로 맞는» 09-20판을 통째로 재현해야 한다 — 표만 바꾸고 4행을 그대로 두면
  //    44·33·22가 4행에 남아 「코드에 없음」이 뜬다(그건 게이트가 맞다). 첫 판에서 이걸로 FAIL을 받았다.
  const rows0920 = mut(mut(enRows, 3, "66–55 A8s–A2s KJo QJo A10o–J10o 98s–54s"), 4, "44–22 weak offsuit hands");
  t("25-B 통제군: 09-20판(표 T5 3개 + 4행 66–55 + 5행 「44–22 …」) = 0건 — 맞게 적은 것을 잡으면 안 된다",
    checkSummaryVsCode("x", rows0920, t5table).length === 0,
    checkSummaryVsCode("x", rows0920, t5table).join(" / "));
  t("25-C H: 표가 T5를 드는데 5행이 안 들면 잡는다(옛 규칙은 t를 1~4로만 돌아 통째로 미검사였다)",
    checkSummaryVsCode("x", enRows, t5table).some(h => h.includes("티어5 요약에 없음(코드에는 있다): 44 33 22")));
  t("25-D H: 5행이 «표 T4» 핸드를 들면 잡는다",
    H(mut(enRows, 4, "weak offsuit hands (55, 93o, 72o)")).some(h => h.includes("티어5 예시 55는 HAND_TABLE 티어4다")));
  t("25-E H: 5행의 범위 표기를 전개한다(옛 규칙은 「44–22」를 조용히 흘렸다)",
    H(mut(enRows, 4, "44–22 weak offsuit hands")).some(h => h.includes("티어5 예시 44는 HAND_TABLE 티어4다")));
  // 「KJ」 = 무늬를 빠뜨린 현실적 오타. 핸드처럼 생겼지만 비페어에 s/o가 없어 파싱은 실패한다 → 침묵이 아니라 «미판정».
  t("25-F H: 5행의 «핸드처럼 생긴» 미파싱 토큰은 미판정으로 출력한다",
    H(mut(enRows, 4, "weak offsuit hands (J2o, KJ, 72o)")).some(h => h.includes("5행 미판정 「KJ」")));
  // 🔴 25-G는 첫 판이 «죽은 통제군»이었다(2차 교열 B-1): `ALL_TARGETS.every(() => true)`는 **항상 참인 항등식**이고
  //    뒤 항은 EN 한 사본만 봤다. 이름만 「12사본 실측」이었던 것 — 이 회차가 막으려던 «미검사의 0건»의 축소판이다.
  //    이제 **정말 12사본의 5행을 읽는다**(en 사전 + 로케일 10 + ko 클라이언트).
  const rows5: [string, string][] = [["en", enRows[4]], ["ko", koRows[4]]];
  for (const loc of CALCULATOR_LOCALES) {
    if (loc === "en") continue;
    const d = Object.values(await import(`../app/${loc}/calculator/dict`)).find((v: any) => v && typeof v === "object" && "seo" in v) as Dict;
    rows5.push([loc, d.starting.summary[4].hands]);
  }
  const noisy = rows5.filter(([, r]) => checkSummaryVsCode("x", ["", "", "", "", r], table).some(h => h.includes("5행 미판정")));
  t(`25-G H: 12사본 5행 산문이 «미판정»으로 시끄럽지 않다(실제로 ${rows5.length}개를 읽었다)`,
    rows5.length === 12 && noisy.length === 0, noisy.map(([l]) => l).join(" "));
  // 25-H. zh의 «괄호가 토큰 한가운데» 형태가 5행 검사를 빠져나가지 않는가 — 옛 분리자로는 J2o가 통째로 안 읽혔다.
  // 25-F2. 🔴 2차 교열 A-1이 준 반례 그대로 — 첫 판의 `isHandish`는 `[0-9JQKA]+`라 맨숫자를 전부 오탐했고,
  //    그 오탐이 `hits`에 들어가 **prebuild를 막았다.** 이제 랭크 2개 이상을 요구하고, 미판정은 ℹ로 빠진다.
  t("25-F2 H: 5행 산문 속 맨숫자(10·2026·5)를 미판정으로 오탐하지 않는다",
    ["top 10 percent", "2026 기준", "상위 5 퍼센트"].every(p =>
      !H(mut(enRows, 4, `${p} (J2o, 93o, 72o)`)).some(h => h.includes("5행 미판정"))));
  t("25-F3 H: 미판정은 ℹ라 «불일치»로 세지 않는다(커버리지 규율 — 출력은 하되 exit code를 만들지 않는다)",
    H(mut(enRows, 4, "weak offsuit hands (J2o, KJ, 72o)")).filter(h => !isInfo(h)).length === 0);
  t("25-H H: 전각 괄호가 낱말에 붙어 있어도 5행 핸드를 읽는다",
    H(mut(enRows, 4, "弱的非同花杂牌（55、93o、72o）")).some(h => h.includes("티어5 예시 55는 HAND_TABLE 티어4다")));

  const fa = parseFallbackBody(TOOL_SRC), fb = parseFallbackBody(KO_SRC);
  const ta = parseHandTable(TOOL_SRC), tb = parseHandTable(KO_SRC);
  const ra = parseRanks(TOOL_SRC), rb = parseRanks(KO_SRC);
  t("26 통제군: 두 소스의 HAND_TABLE·fallbackTier = I 0건", checkSourceTwins(ta, tb, fa, fb).length === 0,
    checkSourceTwins(ta, tb, fa, fb).join(" / "));
  t("27 I: ko 표에서 한 핸드를 빼면 잡는다",
    checkSourceTwins(ta, tb.filter(([c]) => c !== "54s"), fa, fb).some(h => h.includes("에 없다: 54s")));
  t("28 I: 한쪽 티어만 바꾸면 잡는다",
    checkSourceTwins(ta, tb.map(([c, v]) => [c, c === "66" ? 5 : v] as [string, number]), fa, fb).some(h => h.includes("66 티어 갈림")));
  t("29 I: fallbackTier 본체가 바뀌면 게이트 미러를 고치라고 잡는다",
    checkSourceTwins(ta, tb, "return 5;", "return 5;").some(h => h.includes("미러")));
  t("30 I-2: starting.hands 키가 빠지면 잡는다",
    checkHandKeys("x", Object.keys(CALC_DICT_EN.starting.hands).filter(k => k !== "A5s"), table)
      .some(h => h.includes("starting.hands에 없음(HAND_TABLE에는 있다): A5s")));
  t("30-B I-2: starting.hands에 표 밖 키가 «더 있으면» 잡는다(역방향 · 렌즈 A F13)",
    checkHandKeys("x", [...Object.keys(CALC_DICT_EN.starting.hands), "A9o"], table)
      .some(h => h.includes("HAND_TABLE에 없음(starting.hands에만 있다): A9o")));
  t("31 I-2 통제군: 실제 EN starting.hands ↔ HAND_TABLE = 0건",
    checkHandKeys("en", Object.keys(CALC_DICT_EN.starting.hands), table).length === 0);
  t("31-B I: 로케일 순회 목록 ↔ 사전 디렉터리 실물 = 0건(손복사 금지 축)", checkTargetCoverage().length === 0,
    checkTargetCoverage().join(" / "));

  // ── 32~35. ★소스 파서의 «조용한 실패» 축(렌즈 A F1·F5·F6·F9·F11). 전부 throw여야 한다 — 빈손 통과는 최악이다.
  const koRaw = readFileSync(KO_PAGE, "utf8");
  t("32 통제군: ko 랜딩 desc ≤160(E-0의 사각 — 사전이 없어 원리상 밖이었다)", koMetaDescription().length <= 160,
    `${koMetaDescription().length}자`);
  t("32-B ko 랜딩 desc가 길면 «잡는다»(재는 것과 잡는 것은 다른 자리다 · 2차 교열 B-3)",
    descHits("ko", metaDescriptionOf(koRaw.replace(koMetaDescription(), "가".repeat(200)))).length === 1
    && descHits("ko", koMetaDescription()).length === 0);
  t("32-B2 경계: 정확히 160자는 통과 · 161자는 잡는다", descHits("x", "a".repeat(160)).length === 0 && descHits("x", "a".repeat(161)).length === 1);
  t("32-C ko 랜딩 desc가 연결식이면 짧게 재지 않고 throw한다",
    thrown(() => metaDescriptionOf(koRaw.replace(`"${koMetaDescription()}"`, `"앞부분 " + SUFFIX`))));
  t("33 파서: 작은따옴표 엔트리를 «조용히» 버리지 않고 throw한다",
    thrown(() => parseHandTableFrom(`const HAND_TABLE: TierEntry[] = [\n  [1, "AA"], [4, 'A9o'],\n];`)));
  t("34 파서: 블록 주석으로 숨긴 엔트리를 잔여물로 잡는다(주석은 지우되 개수가 줄면 보인다)",
    parseHandTableFrom(`const HAND_TABLE: TierEntry[] = [\n  [1, "AA"], /* [4, "54s"], */\n];`).length === 1);
  t("35 파서: 중복 코드는 throw한다(앱은 첫 항목 · Map은 마지막 항목을 쓴다)",
    thrown(() => parseHandTableFrom(`const HAND_TABLE: TierEntry[] = [\n  [4, "66"], [5, "66"],\n];`)));
  t("36 파서: 구간을 못 찾으면 빈손이 아니라 throw한다", thrown(() => parseRanksFrom("const RANKED = [];")));
  t("37 I: RANKS가 한쪽만 바뀌면 잡는다(fallbackMirror의 12·7이 이 인덱스에 기댄다)",
    checkSourceTwins(ta, tb, fa, fb, ra, `["A","K"]`).some(h => h.includes("RANKS 갈림")));
  t("38 I 통제군: 두 소스의 RANKS = 정본과 일치", checkSourceTwins(ta, tb, fa, fb, ra, rb).length === 0);

  console.log(`
SELFTEST ${pass}/${pass + fail}`);
  process.exit(fail ? 1 : 0);
}

/** 사본 하나를 검사한다. ko는 사전이 없어 H·desc만 · en은 EN 사전 자신(A~G는 자기대조라 0이 정상이고, 값은 H·I가 낸다). */
async function runOne(loc: string): Promise<string[]> {
  const table = new Map(parseHandTable(TOOL_SRC));
  if (loc === "ko") return [
    ...checkSummaryVsCode("ko", koSummaryRows(), new Map(parseHandTable(KO_SRC))),
    ...descHits("ko", koMetaDescription()),
  ];
  const dict = loc === "en" ? CALC_DICT_EN
    : (Object.values(await import(`../app/${loc}/calculator/dict`)).find((v: any) => v && typeof v === "object" && "seo" in v) as Dict);
  const faq = loc === "en" ? (CALCULATOR_FAQ_EN as unknown as Faq)
    : (Object.values(await import(`../app/${loc}/calculator/faq`)).find((v: any) => Array.isArray(v)) as Faq);
  return [
    ...check(loc, dict, faq, corpusSlugs(loc)),
    ...checkSummaryVsCode(loc, dict.starting.summary.map(r => r.hands), table),
    ...checkHandKeys(loc, Object.keys(dict.starting.hands), table),
  ];
}

/** 사전 디렉터리 실물 ↔ 정본 목록 대조 — 한쪽만 늘어나면 «미검사의 0건»이 된다(렌즈 A F3). */
function checkTargetCoverage(): string[] {
  const onDisk = readdirSync("app", { withFileTypes: true })
    .filter(d => d.isDirectory() && existsSync(`app/${d.name}/calculator/dict.ts`)).map(d => d.name).sort();
  const want = CALCULATOR_LOCALES.filter(l => l !== "en").slice().sort();
  const hits: string[] = [];
  for (const l of onDisk) if (!want.includes(l as any)) hits.push(`I app/${l}/calculator/dict.ts가 있는데 CALCULATOR_LOCALES에 없다 — 게이트 순회 밖이다`);
  for (const l of want) if (!onDisk.includes(l)) hits.push(`I CALCULATOR_LOCALES의 ${l}에 app/${l}/calculator/dict.ts가 없다`);
  return hits;
}

(async () => { // tsx는 CJS 출력이라 top-level await 불가
  if (SELFTEST) { await selftest(); return; }
  // I항은 로케일과 무관하다(원천 두 소스만 본다) — 단일 실행에도 붙이고, --all에서는 한 번만 찍는다.
  const twins = [
    ...checkSourceTwins(parseHandTable(TOOL_SRC), parseHandTable(KO_SRC), parseFallbackBody(TOOL_SRC), parseFallbackBody(KO_SRC),
      parseRanks(TOOL_SRC), parseRanks(KO_SRC)),
    ...checkTargetCoverage(),
  ];
  if (arg === "--all") {
    twins.forEach(h => console.log(h));
    let total = twins.length, info = 0;
    for (const loc of ALL_TARGETS) {
      // 🔴 한 로케일이 throw해도 순회를 멈추지 않는다 — 「어디까지 봤나」가 출력에 남아야 한다(커버리지 규율 · 렌즈 A F12).
      let all: string[];
      try { all = await runOne(loc); }
      catch (e) { all = [`읽기 실패 — ${(e as Error).message}`]; }
      all.forEach(h => console.log(`  ${h}`));
      const hits = all.filter(h => !isInfo(h)), notes = all.length - hits.length;
      console.log(`${hits.length ? "🔴" : "  ok  "} ${loc} — 불일치 ${hits.length}${notes ? ` · 미판정 ${notes}` : ""}`);
      total += hits.length;
      info += notes;
    }
    console.log(total === 0
      ? `PARITY OK — 사본 ${ALL_TARGETS.length}개 전수 불일치 0${info ? ` (미판정 ${info} — 출력만 하고 세지 않는다)` : ""} (+ 원천 I항) · 🪶 en은 A~G가 자기대조라 실질은 H·I · ko는 H·I·desc만`
      : `🔴 전수 불일치 ${total}${info ? ` · 미판정 ${info}` : ""}`);
    process.exit(total ? 1 : 0);
  }
  const all = [...twins, ...(await runOne(locale))];
  all.forEach(h => console.log(h));
  const hits = all.filter(h => !isInfo(h)), notes = all.length - hits.length;
  console.log(hits.length === 0 ? `PARITY OK — ${locale} 불일치 0${notes ? ` · 미판정 ${notes}` : ""}` : `🔴 ${locale} 불일치 ${hits.length}${notes ? ` · 미판정 ${notes}` : ""}`);
  process.exit(hits.length ? 1 : 0);
})();
