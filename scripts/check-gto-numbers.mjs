#!/usr/bin/env node
/**
 * GTO 솔버 시리즈 «계산 부분» 전 언어 대조 게이트 (2026-08-19 신설 · 사장님 지시)
 * ────────────────────────────────────────────────────────────────────────────
 * 사장님 판정: **13편은 솔버 예제 해설이라 언어마다 재저작할 필요가 없다 —
 *              특히 «계산 부분»은 전 언어 통일한다.**
 * 이 게이트는 그 판정을 약속이 아니라 **기계**로 지킨다.
 *
 * 보는 것 둘
 *   A. **정본 대조** — `docs/gto-solver-series-spec.md` §4-B 확정 수치가 각 글에 살아 있나
 *   B. **로케일 간 대조** — 같은 slug의 로케일들이 «같은 수치 집합»을 쓰나 (통일 원칙의 본체)
 *
 * ★왜 «값을 변수로 뽑아 본문에 꽂기»가 아니라 대조인가
 *   본문 수치를 `${SPOT.eqr}` 로 만들면 `audit:hard` 의 §13 검산기가 **소스에서 숫자를 못 본다** —
 *   검사기 눈을 멀게 하는 최적화다. 숫자는 각 파일에 그대로 두고 대조로 강제한다.
 *
 * 🔴🔴 **폐기한 규칙 하나 — «근접값 탐지»(2026-08-19 첫 실행에서 폐기)**
 *   처음엔 «정본이 84.0인데 본문에 84.3이 있으면 드리프트»로 짰다. 첫 실행 6건을 **전건 원문 판정**하니
 *   **5건이 오탐**이었고, 원인이 구조적이라 튜닝으로 살릴 수 없었다 — 한 글 안에 서로 다른 «자리»의
 *   퍼센트가 섞여 있는데 **값만 보고는 자리를 알 수 없다**:
 *     ① 형제 스팟 인용 — `low-board-check-raise`: "…의 48.5%와 사실상 같은데"(④의 정본값)
 *     ② 상대편 값 — `blind-battle-connected-board`: "49.6% 대 **50.4%**로 역전"(100−49.6)
 *     ③ 완전히 다른 지표 — `3bet-pot-bet-sizing`: "팟의 1/3이 **57.8%**로 더 많이 쓰입니다"(사이즈 사용 빈도)
 *   → 되살리지 마라. 자리를 알아야 하는 검사는 «값 근접»으로 못 만든다.
 *      드리프트는 B(로케일 간 대조)로 잡는다 — 거기선 «같은 글끼리» 비교하므로 자리 문제가 없다.
 *
 * 사용:
 *   node scripts/check-gto-numbers.mjs              # 전 로케일
 *   node scripts/check-gto-numbers.mjs --locale=en
 *   node scripts/check-gto-numbers.mjs --selftest   # 게이트 자체 검증 (규칙보다 이게 먼저다)
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SPEC = "docs/gto-solver-series-spec.md";
/** 수치 집합 대조의 기준 로케일 — 시리즈 원본이 한국어다. */
const BASE = "ko";

function loadSeries() {
  const t = readFileSync(join(ROOT, "lib/gto-series.ts"), "utf8");
  const out = new Map();
  for (const m of t.matchAll(/\{\s*n:\s*(\d+),[^}]*?slug:\s*"([^"]+)"/g)) out.set(Number(m[1]), m[2]);
  return out;
}

/** §4-B 표 파싱 — 편 | 보드 | 조건 | OOP 리드/벳 | OOP 에퀴티 | OOP EQR | IP EQR */
function loadSpec() {
  const t = readFileSync(join(ROOT, SPEC), "utf8");
  const start = t.indexOf("## 4-B.");
  if (start < 0) throw new Error(`${SPEC} 에 «## 4-B.» 절이 없다 — 표가 옮겨졌다면 이 스크립트를 먼저 고쳐라`);
  const nextH2 = t.indexOf("\n## ", start + 5);
  const seg = t.slice(start, nextH2 === -1 ? undefined : nextH2);
  const MARKS = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬";
  const rows = [];
  for (const line of seg.split("\n")) {
    if (!line.startsWith("|")) continue;
    const c = line.split("|").map((s) => s.trim());
    if (c.length < 8) continue;
    const n = MARKS.indexOf(c[1]) + 1;
    if (n < 1) continue;
    // 🔴 Number로 바꾸지 마라 — `84.0` 이 `84` 가 되어 본문의 「84.0%」와 매칭에 실패한다
    //    (첫 실행에서 이 버그가 🟠 오탐 1건을 만들었다). 표기 그대로 문자열로 들고 간다.
    const num = (s) => { const m = String(s).match(/(\d+(?:\.\d+)?)\s*%/); return m ? m[1] : null; };
    rows.push({
      n,
      board: (c[2].match(/`([^`]+)`/) || [])[1] || c[2],
      oopBet: num(c[4]), oopEquity: num(c[5]), oopEqr: num(c[6]), ipEqr: num(c[7]),
    });
  }
  return rows;
}

function localeDirs() {
  const dirs = [];
  if (existsSync(join(ROOT, "lib/posts"))) dirs.push(["ko", "lib/posts"]);
  for (const d of readdirSync(join(ROOT, "lib"))) {
    const m = d.match(/^posts-([a-z-]+)$/);
    if (m) dirs.push([m[1], `lib/${d}`]);
  }
  return dirs;
}

/** 본문(content 템플릿 리터럴)만 뽑는다 — 파일 상단 주석의 검산 메모가 오탐을 만들지 않게. */
function extractContent(src) {
  const i = src.indexOf("content: `");
  if (i < 0) return "";
  const j = src.indexOf("`.trim()", i);
  return src.slice(i + 10, j < 0 ? undefined : j);
}

const has = (text, v) => v != null && new RegExp(`(?<![\\d.])${String(v).replace(".", "\\.")}\\s*%`).test(text);
/**
 * 본문에 등장하는 «소수 한 자리 퍼센트» 집합 — 계산 부분의 지문이다.
 * 🔴 두 가지를 뺀다 (첫 실행 실측으로 확정한 오탐 원인):
 *   ① `:::readnext` 블록 — **다른 글의 수치**다(①편이 ②편의 「99.8%」를 카드 라벨로 인용).
 *      로케일마다 형제 글 발행 상태가 달라 여기서 차이가 나는 건 정상이다.
 *   ② `%p`(퍼센트포인트) — 값이 아니라 **차이 표기**다. ko 「0.3%p」 ↔ en 「0.3 points」는
 *      같은 말인데 표기만 다르다. 계산 불일치가 아니다.
 */
const pctSet = (text) => {
  const body = text.replace(/:::readnext[\s\S]*?:::/g, "");
  return new Set([...body.matchAll(/(?<![\d.])(\d+\.\d)\s*%(?!p)/g)].map((m) => m[1]));
};
/**
 * 🪶 **커버리지 출력 — 이 게이트가 «못 보는» 수치를 매 실행 드러낸다.**
 *
 * 「73.4~75.2%」처럼 **범위의 앞 숫자에 %를 안 붙이면** 위 pctSet 이 그 값을 못 잡는다
 * (정규식이 «숫자.숫자%» 꼴만 잡기 때문이다). 그러면 —
 *   · A(정본 대조)에서 그 값이 본문에 있는데도 「안 쓴다」로 읽힐 수 있고
 *   · B(로케일 간 대조)에서 **두 로케일이 같은 표기면 양쪽 다 숨어** 드리프트가 검사 밖이 된다.
 *
 * 🔴 이건 «결함»이 아니라 «미검사»다 → 🔴/🟠 로 세지 않고 별도 절로 출력한다.
 *    「0건」을 커버리지 없이 믿지 않는다는 규율(§14-A)은 게이트의 **초록불에도** 걸린다.
 *
 * 실측 근거: 2026-08-21 EN ⑫⑬ 번역 중 **같은 원인으로 🔴가 두 번** 떴다
 * (⑫ 「73.4~75.2%」 · ⑬ 「106.9~117.8%」·「0.1~26.0%」). 원인은 번역이 아니라 **KO 표기**였다.
 * → **범위는 늘 「A%~B%」로 쓴다.**
 */
const hiddenRanges = (text) => {
  const body = text.replace(/:::readnext[\s\S]*?:::/g, "");
  return [...body.matchAll(/(?<![\d.])(\d+\.\d)\s*[~–—-]\s*(\d+\.\d)\s*%/g)].map((m) => m[0].trim());
};

function run({ locale = null } = {}) {
  const series = loadSeries();
  const spec = loadSpec();
  const all = localeDirs();
  const dirs = all.filter(([l]) => !locale || l === locale || l === BASE);

  let red = 0, orange = 0, ok = 0, notPublished = 0;
  const hidden = [];   // 🪶 커버리지: 게이트가 못 보는 「A~B%」 표기
  const lines = [];

  for (const row of spec) {
    const slug = series.get(row.n);
    if (!slug) continue;

    // ── A. 정본 대조 ────────────────────────────────────────────────
    const present = new Map();
    for (const [loc, dir] of dirs) {
      const file = join(ROOT, dir, `${slug}.ts`);
      if (!existsSync(file)) { notPublished++; continue; }
      const text = extractContent(readFileSync(file, "utf8"));
      present.set(loc, text);
      for (const h of hiddenRanges(text)) hidden.push({ loc, slug, h });
      for (const [label, v] of [["OOP 에퀴티", row.oopEquity], ["OOP EQR", row.oopEqr], ["IP EQR", row.ipEqr]]) {
        if (v == null) continue;
        if (has(text, v)) ok++;
        else { orange++; lines.push(`🟠 [${loc}] ${slug} — ${label} ${v}% 를 본문이 쓰지 않는다 (대조 불가 · 결함 아님)`); }
      }
      const suits = [...new Set((row.board || "").split("").filter((ch) => "♠♥♦♣".includes(ch)))];
      if (suits.length && !suits.every((s) => text.includes(s))) {
        red++; lines.push(`🔴 [${loc}] ${slug} — 보드 ${row.board} 의 무늬가 본문에 없다`);
      }
    }

    // ── B. 로케일 간 수치 집합 대조 (통일 원칙의 본체) ──────────────
    if (present.has(BASE) && present.size > 1) {
      const baseSet = pctSet(present.get(BASE));
      for (const [loc, text] of present) {
        if (loc === BASE) continue;
        const s = pctSet(text);
        const onlyBase = [...baseSet].filter((v) => !s.has(v));
        const onlyLoc = [...s].filter((v) => !baseSet.has(v));
        if (onlyBase.length || onlyLoc.length) {
          red++;
          lines.push(
            `🔴 [${loc}] ${slug} — 계산 수치가 ${BASE} 와 다르다\n` +
            `      ${BASE} 에만: ${onlyBase.join("·") || "없음"}\n` +
            `      ${loc} 에만: ${onlyLoc.join("·") || "없음"}`
          );
        } else ok++;
      }
    }
  }

  console.log("\n══════ GTO 시리즈 계산 대조 게이트 ══════");
  console.log(`정본 = ${SPEC} §4-B · 기준 로케일 = ${BASE} · 대상 ${dirs.map((d) => d[0]).join(" ")}`);
  if (lines.length) console.log("\n" + lines.join("\n"));
  console.log(`\n✅ 일치 ${ok} · 🟠 대조 불가 ${orange} · 🔴 ${red}`);
  console.log(`🪶 미발행 (편 × 로케일) 조합 ${notPublished}개는 검사 대상이 아니다.`);
  console.log("⚠ 🟠 는 «틀렸다»가 아니라 «그 글이 그 수치를 안 써서 대조하지 못했다»는 뜻이다.");
  console.log("⚠ B(로케일 간 대조)는 «수치 집합»만 본다 — 어느 자리에 쓰였는지는 사람이 본다");

  // 🪶 커버리지 절 — 「0건」을 커버리지 없이 내보내지 않는다
  console.log("\n── 🪶 커버리지: 이 게이트가 «못 보는» 수치 ──");
  if (!hidden.length) {
    console.log("범위 표기 「A~B%」 0건 — 본문의 소수 퍼센트를 전부 보고 있다.");
  } else {
    const byFile = new Map();
    for (const { loc, slug, h } of hidden) {
      const k = `[${loc}] ${slug}`;
      if (!byFile.has(k)) byFile.set(k, []);
      byFile.get(k).push(h);
    }
    console.log(`범위 표기 「A~B%」 ${hidden.length}건 — **앞 숫자가 검사 밖이다**(뒤 숫자만 잡힌다).`);
    for (const [k, v] of byFile) console.log(`   ${k} — ${v.join(" · ")}`);
    console.log("⚠ 결함이 아니라 **미검사**다. 두 로케일이 같은 표기면 양쪽 다 숨어 드리프트가 안 잡힌다.");
    console.log("→ 그 값을 검사에 넣으려면 「A%~B%」로 양끝에 % 를 붙여라.");
  }
  console.log("");
  return red;
}

/** 셀프테스트 — 규칙보다 이게 먼저다([[gate-tuning-loop-is-the-work]]). */
function selftest() {
  const cases = [
    ["정본 값이 있으면 has=true", () => has("equity 45.1% and EQR 84.0%", 45.1) === true],
    ["「A~B%」는 앞 숫자가 pctSet에 안 잡힌다", () => {
      const p = pctSet("체크 빈도는 73.4~75.2% 입니다");
      return p.has("75.2") && !p.has("73.4");
    }],
    ["hiddenRanges가 그 표기를 잡는다", () => hiddenRanges("체크 빈도는 73.4~75.2% 입니다").length === 1],
    ["「A%~B%」는 hiddenRanges가 안 잡는다(오탐 방지)", () => hiddenRanges("73.4%~75.2%").length === 0],
    ["양끝에 %가 있으면 둘 다 pctSet에 잡힌다", () => {
      const p = pctSet("73.4%~75.2%");
      return p.has("73.4") && p.has("75.2");
    }],
    ["en 대시도 잡는다", () => hiddenRanges("106.9–117.8%").length === 1],
    ["readnext 안은 세지 않는다", () => hiddenRanges(":::readnext\n/blog/x | 1.2~3.4% | /i.webp\n:::").length === 0],
    ["없으면 has=false", () => has("EQR is 84.3% here", 84.0) === false],
    ["앞자리가 붙은 숫자에 안 걸린다", () => has("at 184.0% growth", 84.0) === false],
    ["소수점 없는 값과 구분한다", () => has("100% of the range", 84.0) === false],
    ["pctSet 이 소수 한 자리만 모은다", () => {
      const s = pctSet("45.1% and 100% and 84.0% and 23.75%");
      return s.has("45.1") && s.has("84.0") && !s.has("100") && !s.has("23.7");
    }],
    ["동일 집합이면 차집합이 비어야 한다", () => {
      const a = pctSet("45.1% 84.0%"), b = pctSet("84.0% 45.1%");
      return [...a].filter((v) => !b.has(v)).length === 0;
    }],
    ["한쪽에만 있는 값이 잡힌다", () => {
      const a = pctSet("45.1% 84.0%"), b = pctSet("45.1%");
      return [...a].filter((v) => !b.has(v)).join() === "84.0";
    }],
    ["%p(퍼센트포인트)는 값으로 세지 않는다", () => !pctSet("오차는 0.3%p 안쪽이다").has("0.3")],
    [":::readnext 안의 형제 글 수치는 제외한다", () => {
      const s = pctSet("본문 45.1%\n:::readnext\n/blog/x | 체크 99.8%의 이유 | /i.webp\n:::\n");
      return s.has("45.1") && !s.has("99.8");
    }],
  ];
  let pass = 0;
  for (const [name, fn] of cases) {
    let good = false; try { good = fn(); } catch { good = false; }
    console.log(`${good ? "✅" : "❌"} ${name}`);
    if (good) pass++;
  }
  console.log(`\n셀프테스트 ${pass}/${cases.length}`);
  return pass === cases.length ? 0 : 1;
}

const args = process.argv.slice(2);
if (args.includes("--selftest")) process.exit(selftest());
const loc = (args.find((a) => a.startsWith("--locale=")) || "").split("=")[1] || null;
process.exit(run({ locale: loc }) > 0 ? 1 : 0);
