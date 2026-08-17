/* ══════════════════════════════════════════════════════════════════════════
   :::rangechart::: 정합 게이트 — 컴포넌트 값 ↔ 글 본문 표

   왜 있나 (2026-08-17 신설):
     차트 값이 `lib/render-markdown.ts` 에 하드코딩돼 있었고 본문 표와 갈라졌다.
     컴포넌트 UTG 12 / CO 28 / BTN 40 ↔ 본문 13 / 27 / 43 — **독자가 한 화면에서
     두 세트의 숫자를 봤고**, 8개 로케일 전부 그랬는데 아무 검사도 그걸 못 봤다.
     de 검수 지시서 W13 이 「미검사 구간을 추적해」 손으로 찾아낸 건이다.
     같은 값이 두 곳에 사는 한 또 갈라진다 → 대조를 기계에 맡긴다.

   무엇을 보나
     ① 디렉티브를 쓰는 글을 **직접 찾아** (목록을 박아두지 않는다 — 새 로케일이 늘면 자동 포함)
     ② 그 글의 포지션 표에서 좌석→% 를 파싱
     ③ lib/range-chart.ts 의 값과 대조
     ④ 컴포넌트에만 있고 본문에 근거가 없는 좌석 = 🔴 (SB/BB 가 실제로 그랬다)

   판정 못 한 자리는 «미판정»으로 반드시 출력한다 — 0건과 미검사를 섞지 않는다.

   실행: node scripts/check-rangechart.mjs [--selftest]
   ══════════════════════════════════════════════════════════════════════════ */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIB = join(ROOT, "lib");

/** lib/range-chart.ts 에서 좌석→% 를 읽는다(.ts 라 import 대신 파싱). */
function componentSeats() {
  const src = readFileSync(join(LIB, "range-chart.ts"), "utf8");
  const block = src.match(/RANGE_CHART_SEATS\s*=\s*\[([\s\S]*?)\]\s*as const/);
  if (!block) throw new Error("RANGE_CHART_SEATS 를 못 찾았다 — 파서를 고쳐라(구조가 바뀌었다).");
  const out = new Map();
  for (const m of block[1].matchAll(/id:\s*"([^"]+)"\s*,\s*pct:\s*(\d+)/g)) {
    out.set(m[1], Number(m[2]));
  }
  if (!out.size) throw new Error("좌석을 하나도 못 읽었다 — 파서를 고쳐라.");
  return out;
}

/** 본문 표 행: `| UTG (Early) | Top ~13% | …`  ·  `| UTG（前面位置） | 顶部约13% | …` */
const ROW_RE = /^\|\s*(UTG|MP|LJ|HJ|CO|BTN|SB|BB)\b[^|]*\|([^|]*)\|/gm;
const PCT_RE = /(\d{1,2})\s*%/;

function bodySeats(text) {
  const found = new Map();
  for (const m of text.matchAll(ROW_RE)) {
    const pct = m[2].match(PCT_RE);
    if (pct) found.set(m[1], Number(pct[1]));
  }
  return found;
}

/** 디렉티브를 쓰는 (로케일, 슬러그, 본문) 전부 — 목록을 박아두지 않는다. */
function targets() {
  const hits = [];
  for (const dir of readdirSync(LIB).filter((d) => d.startsWith("posts-"))) {
    const loc = dir.replace(/^posts-/, "");
    const d = join(LIB, dir);
    for (const f of readdirSync(d).filter((f) => f.endsWith(".ts"))) {
      const text = readFileSync(join(d, f), "utf8");
      if (text.includes(":::rangechart:::")) hits.push({ loc, slug: f.replace(/\.ts$/, ""), text });
    }
  }
  // KO 신규 트랙도 본다(지금은 안 쓰지만 나중에 붙을 수 있다)
  const koDir = join(LIB, "posts");
  if (existsSync(koDir)) {
    for (const f of readdirSync(koDir).filter((f) => f.endsWith(".ts"))) {
      const text = readFileSync(join(koDir, f), "utf8");
      if (text.includes(":::rangechart:::")) hits.push({ loc: "ko", slug: f.replace(/\.ts$/, ""), text });
    }
  }
  return hits;
}

function run() {
  const comp = componentSeats();
  const files = targets();
  const problems = [];
  const unjudged = [];

  console.log("── :::rangechart::: 정합 게이트 ──");
  console.log(`컴포넌트(lib/range-chart.ts): ${[...comp].map(([k, v]) => `${k} ${v}%`).join(" · ")}`);
  console.log(`디렉티브 사용: ${files.length}곳\n`);

  if (!files.length) {
    console.log("⚠ 미판정 — 디렉티브를 쓰는 글이 하나도 없다. 탐지 방법부터 의심하라.");
    return 0;
  }

  for (const { loc, slug, text } of files) {
    const body = bodySeats(text);
    if (!body.size) {
      unjudged.push(`${loc}/${slug} — 포지션 표를 못 찾았다(표 형식이 다르거나 표가 없다)`);
      console.log(`  ⚠ ${loc.padEnd(8)} ${slug} — 미판정(표 파싱 실패)`);
      continue;
    }
    const bad = [];
    for (const [seat, pct] of comp) {
      if (!body.has(seat)) { bad.push(`${seat}: 컴포넌트 ${pct}% ↔ 본문에 근거 없음`); continue; }
      if (body.get(seat) !== pct) bad.push(`${seat}: 컴포넌트 ${pct}% ↔ 본문 ${body.get(seat)}%`);
    }
    if (bad.length) {
      problems.push({ loc, slug, bad });
      console.log(`  🔴 ${loc.padEnd(8)} ${slug}`);
      bad.forEach((b) => console.log(`       ${b}`));
    } else {
      console.log(`  ✅ ${loc.padEnd(8)} ${slug} — 좌석 ${comp.size}개 전부 본문과 일치`);
    }
  }

  console.log(`\n합계: 🔴 ${problems.length}편 · ⚠ 미판정 ${unjudged.length}편 · 검사 ${files.length}편`);
  if (unjudged.length) console.log("⚠ 미판정은 «통과»가 아니다 — 그 글은 검사되지 않았다.");
  return problems.length ? 1 : 0;
}

/* ── 셀프테스트: 규칙보다 먼저. 이 게이트가 «실제로 갈린 값»을 잡는지 고정한다 ── */
function selftest() {
  const cases = [
    { name: "본문 표 파싱 — EN 형식", text: "| UTG (Early) | Top ~13% | TT+ |", want: { UTG: 13 } },
    { name: "본문 표 파싱 — zh 형식(약자·공백 없음)", text: "| UTG（前面位置） | 顶部约13% | TT+ |", want: { UTG: 13 } },
    { name: "본문 표 파싱 — zh-hant 형식(공백 있음)", text: "| BTN（按鈕位） | 頂部約 43% | x |", want: { BTN: 43 } },
    { name: "본문 표 파싱 — ja 형식", text: "| CO(カットオフ) | 上位 ~27% | x |", want: { CO: 27 } },
    { name: "3열째의 %는 안 읽는다", text: "| MP (Middle) | Top ~17% | 88 이상 99% |", want: { MP: 17 } },
    { name: "좌석 아닌 행은 무시", text: "| Position | Open range | Key hands |", want: {} },
  ];
  let pass = 0, fail = 0;
  for (const c of cases) {
    const got = Object.fromEntries(bodySeats(c.text));
    const ok = JSON.stringify(got) === JSON.stringify(c.want);
    if (ok) pass++; else { fail++; console.log(`  ❌ ${c.name}\n     기대 ${JSON.stringify(c.want)} · 실제 ${JSON.stringify(got)}`); }
  }
  // 회귀 고정: 2026-08-17 이전의 «갈린 값»을 반드시 🔴 로 잡아야 한다
  const oldComp = new Map([["UTG", 12], ["CO", 28], ["BTN", 40]]);
  const body = bodySeats("| UTG (Early) | Top ~13% |\n| CO (Cutoff) | Top ~27% |\n| BTN (Button) | Top ~43% |");
  const caught = [...oldComp].filter(([s, p]) => body.get(s) !== p).length;
  if (caught === 3) pass++; else { fail++; console.log(`  ❌ 회귀 고정: 구 하드코딩 3건을 ${caught}건만 잡았다`); }

  console.log(`셀프테스트 ${pass}/${pass + fail}`);
  return fail ? 1 : 0;
}

process.exit(process.argv.includes("--selftest") ? selftest() : run());
