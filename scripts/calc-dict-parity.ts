// 계산기 로케일 사전 ↔ EN 전사 대조 게이트(§13 · 교열 A/B/C/D/E) — ★2026-09-17 zh 회차에서 tmp/calc-zh-parity.ts를 승격.
//   실행: npx tsx scripts/calc-dict-parity.ts <locale>      (npm run check:calc-parity -- zh)
//   본다: A quickRef 표 개수·행/열·숫자 셀 · B icmGuide 두 표의 숫자·equity 프리셋 · C FAQ(EN+1)·related·guide·chips·presets·hands 개수 ·
//         D EN 템플릿의 {placeholder}가 같은 자리에 전부 있는가(재귀) · E 직선 " · 「」(zh는 “ ”가 정본 · ja/zh-hant는 「」 허용 → E-2만).
//   못 보는 것: 문안의 뜻(렌즈 몫) · 소스 개행 공백(check:cjk 몫) · 탭 라벨 축어 인용(렌즈 D항).
//   🔴 `check:hygiene`은 lib/posts만 읽고 app/**는 안 본다 — 계산기 사전의 인용부호는 이 스크립트 E항이 유일한 기계 검사다.
import { CALC_DICT_EN } from "../components/calculator/dict";
import { CALCULATOR_FAQ_EN } from "../app/en/calculator/faq";

const locale = process.argv[2];
if (!locale) { console.error("usage: npx tsx scripts/calc-dict-parity.ts <locale>"); process.exit(2); }
(async () => { // tsx는 CJS 출력이라 top-level await 불가
const dictMod = await import(`../app/${locale}/calculator/dict`);
const faqMod = await import(`../app/${locale}/calculator/faq`);
const zh = Object.values(dictMod).find((v: any) => v && typeof v === "object" && "seo" in v) as typeof CALC_DICT_EN;
const faq = Object.values(faqMod).find((v: any) => Array.isArray(v)) as { q: string; a: string }[];
const en = CALC_DICT_EN;
let bad = 0;
const num = (s: string) => (s.match(/\d[\d.,]*%?|[<≥≤]\s*\d+|\d+[–-]\d+|\d+\+/g) || []).join(" ");
// ★2026-09-17 pt 회차: 소수 콤마 로케일(pt-BR 등 · 코퍼스 실측 1,637 : 0)은 «81,9%»·«$1.035»로 적는다 → 로케일 쪽 숫자 토큰의 `.`↔`,`를 뒤집어 EN과 비교.
//   판정은 사전의 numberLocale로(Intl이 1.5를 «1,5»로 쓰면 콤마 로케일). en-US 표기 로케일(es·ja·zh…)은 그대로.
const commaDecimal = (1.5).toLocaleString(zh.numberLocale).includes(",");
const numL = (s: string) => {
  const t = num(s);
  return commaDecimal ? t.replace(/[.,]/g, (c) => (c === "." ? "," : ".")) : t;
};
const hit = (msg: string) => { console.log(msg); bad++; };

// A. quickRef
if (!zh.quickRef) console.log("A quickRef 없음 — 이 로케일은 아직 옵션 키를 안 채웠다(미검사)");
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
    if (t.link?.slug !== z.link?.slug) hit(`A 표${i + 1} link slug ${t.link?.slug} vs ${z.link?.slug}`);
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
else console.log("B equity 없음 — 옵션 키 미채움(미검사)");
// C. 개수
const cnt = (label: string, a: number, b: number) => { if (a !== b) hit(`C ${label} ${a} vs ${b}`); };
if (faq.length !== CALCULATOR_FAQ_EN.length && faq.length !== CALCULATOR_FAQ_EN.length + 1) hit(`C FAQ ${CALCULATOR_FAQ_EN.length}(+1 고유 허용) vs ${faq.length}`);
cnt("related", en.related.links.length, zh.related.links.length);
cnt("guide.cards", en.guide.cards.length, zh.guide.cards.length);
cnt("hero.chips", en.hero.chips.length, zh.hero.chips.length);
cnt("outs.presets", en.outs.presets.length, zh.outs.presets.length);
cnt("starting.hands", Object.keys(en.starting.hands).length, Object.keys(zh.starting.hands).length);
cnt("starting.summary", en.starting.summary.length, zh.starting.summary.length);
for (const k of Object.keys(en.starting.hands)) if (!(k in zh.starting.hands)) hit(`C starting.hands 키 누락 ${k}`);
for (const s of en.related.links.map(l => l.slug)) if (!zh.related.links.some(l => l.slug === s)) hit(`C related slug 누락 ${s}`);
// D. 플레이스홀더
const walk = (a: any, b: any, path: string) => {
  if (typeof a === "string") {
    if (typeof b !== "string") { if (!/^dict\.(equity|quickRef)/.test(path)) hit(`D ${path}: ${locale} 문자열 없음`); return; }
    const pa = (a.match(/\{[a-z0-9]+\}/gi) || []).sort().join(), pb = (b.match(/\{[a-z0-9]+\}/gi) || []).sort().join();
    if (pa !== pb) hit(`D ${path}: EN ${pa || "∅"} ${locale} ${pb || "∅"}`);
    return;
  }
  if (Array.isArray(a)) { a.forEach((x, i) => walk(x, b?.[i], `${path}[${i}]`)); return; }
  if (a && typeof a === "object") for (const k of Object.keys(a)) walk(a[k], b?.[k], `${path}.${k}`);
};
walk(en, zh, "dict");
// E. 인용부호 — 직선 " 은 전 로케일 금지 · 「」는 zh만 금지
const all = JSON.stringify(zh) + JSON.stringify(faq);
const straight = (all.match(/\\"/g) || []).length;
if (locale !== "en" && straight) hit(`E 직선 따옴표 ${straight}`);
if (locale === "zh" && /「|」/.test(all)) hit("E zh에 「」 사용(정본은 “ ”)");
console.log(bad === 0 ? `PARITY OK — ${locale} 불일치 0` : `🔴 ${locale} 불일치 ${bad}`);
process.exit(bad ? 1 : 0);
})();
