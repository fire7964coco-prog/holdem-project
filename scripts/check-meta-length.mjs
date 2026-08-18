/* ══════════════════════════════════════════════════════════════════════════
   메타 길이 게이트 — `desc` 160자 하드리밋 (CLAUDE.md §11-7 「절대 금지」)

   왜 있나 (2026-08-18 신설):
     이 규칙은 문서에 «절대 금지»로 박혀 있는데 **아무 검사도 안 보고 있었다.**
     `audit:hard --locale` 은 «언어 불변 항목»만 봐서 메타 길이를 원리상 제외한다
     (REVIEW-PROTOCOL 에 그렇게 명시돼 있다). 그 구멍에 **전 로케일 29편**이 쌓여 있었고
     최악은 `ms/holdem-hand-rankings` **235자**였다.

   🔴 **순서가 중요했다** — 29편을 먼저 고치고 그 다음 이 게이트를 걸었다.
      반대로 했으면 프로덕션 빌드가 곧바로 깨진다.

   ── 두 기준을 «따로» 본다 ────────────────────────────────────────────────
   ① **자수 ≤160** — 하드리밋. 초과하면 🔴, 빌드를 세운다.
   ② **표시폭**(CJK·한글 2 · 그 외 1) — **경고만 낸다. 아직 정책이 아니다.**
      🔴 이 축이 중요한 이유: **`ja` 는 자수 초과가 0편인데 표시폭으로는 43편 중 38편**이다.
         임계값을 자수로만 잡으면 **가장 심한 로케일이 목록에서 통째로 빠진다**
         (검수장 §4-A 「불변축 · 기준값 가변」의 실제 사례).
      ⚠ 표시폭은 **픽셀폭의 거친 대용값**이지 SERP 실측이 아니다. 상한을 몇으로 잡을지는
         **사장님 판단**이고, 정해지기 전에는 빨간불을 내지 않는다.

   실행: node scripts/check-meta-length.mjs [--selftest] [--width]
   ══════════════════════════════════════════════════════════════════════════ */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIB = join(ROOT, "lib");
const MAX_CHARS = 160;
const WIDTH_WATCH = 160; // 경고 기준(정책 아님)

/** 표시폭: CJK 통합/확장·가나·한글·전각 = 2, 그 외 = 1 */
const WIDE =
  /[ᄀ-ᅟ⺀-꓏가-힣豈-﫿＀-｠　-〿぀-ヿ㐀-䶿一-鿿]/;
export const dispWidth = (s) => [...s].reduce((a, c) => a + (WIDE.test(c) ? 2 : 1), 0);

/** `desc: "…"` 한 줄에서 값만. 이스케이프된 따옴표를 문자열 끝으로 오인하지 않는다. */
export const descOf = (raw) => {
  const m = raw.match(/^\s*desc:\s*"((?:[^"\\]|\\.)*)"/m);
  return m ? m[1] : null;
};

function collect() {
  const out = [];
  const dirs = readdirSync(LIB).filter((d) => d.startsWith("posts-")).map((d) => [d.replace(/^posts-/, ""), d]);
  if (existsSync(join(LIB, "posts"))) dirs.push(["ko", "posts"]);
  for (const [loc, d] of dirs) {
    const p = join(LIB, d);
    for (const f of readdirSync(p).filter((f) => f.endsWith(".ts") && f !== "index.ts")) {
      const desc = descOf(readFileSync(join(p, f), "utf8"));
      if (desc == null) continue;
      out.push({ loc, slug: f.replace(/\.ts$/, ""), desc });
    }
  }
  return out;
}

function run() {
  console.log("── 메타 길이 게이트 (desc) ──");
  const rows = collect();
  if (!rows.length) {
    console.log("⚠ 미판정 — desc 를 가진 포스트를 하나도 못 찾았다. 탐지 방법부터 의심하라.");
    return 0;
  }
  const over = rows.filter((r) => r.desc.length > MAX_CHARS);
  console.log(`포스트 ${rows.length}편 검사 · 상한 ${MAX_CHARS}자`);

  if (over.length) {
    console.log(`\n🔴 ${over.length}편이 하드리밋 초과 (CLAUDE.md §11-7 「160자 초과 절대 금지」):`);
    for (const r of over.sort((a, b) => b.desc.length - a.desc.length)) {
      console.log(`   ${String(r.desc.length).padStart(4)}자  ${r.loc}/${r.slug}`);
    }
  } else {
    console.log("✅ 자수 초과 0편");
  }

  // ── 표시폭은 «경고만» ──
  const wide = rows.filter((r) => dispWidth(r.desc) > WIDTH_WATCH);
  if (wide.length) {
    const byLoc = {};
    wide.forEach((r) => (byLoc[r.loc] = (byLoc[r.loc] || 0) + 1));
    console.log(`\n🟠 표시폭 >${WIDTH_WATCH} — ${wide.length}편 (경고만 · 아직 정책 아님)`);
    console.log(`   ${Object.entries(byLoc).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(" · ")}`);
    console.log("   🔴 자수만 보면 ja 가 통째로 안 보인다 — 상한을 정할 때 이 열을 함께 볼 것.");
  }
  return over.length ? 1 : 0;
}

/* ── 셀프테스트: 규칙보다 먼저 ── */
function selftest() {
  const cases = [
    { n: "desc 추출 — 일반", raw: '  desc: "hello",', want: "hello" },
    { n: "desc 추출 — 이스케이프 따옴표", raw: '  desc: "a \\"b\\" c",', want: 'a \\"b\\" c' },
    { n: "desc 없음", raw: '  title: "x",', want: null },
    { n: "tldr 을 desc 로 오인 안 함", raw: '  tldr: "long",\n  desc: "d",', want: "d" },
  ];
  let pass = 0, fail = 0;
  for (const c of cases) {
    const got = descOf(c.raw);
    if (got === c.want) pass++;
    else { fail++; console.log(`  ❌ ${c.n} — 기대 ${JSON.stringify(c.want)} · 실제 ${JSON.stringify(got)}`); }
  }
  const w = [
    { n: "표시폭 — 라틴", s: "abc", want: 3 },
    { n: "표시폭 — CJK", s: "扑克牌", want: 6 },
    { n: "표시폭 — 한글", s: "홀덤", want: 4 },
    { n: "표시폭 — 가나", s: "ポーカー", want: 8 },
    { n: "표시폭 — 혼합", s: "a扑b", want: 4 },
  ];
  for (const c of w) {
    if (dispWidth(c.s) === c.want) pass++;
    else { fail++; console.log(`  ❌ ${c.n} — 기대 ${c.want} · 실제 ${dispWidth(c.s)}`); }
  }
  // 회귀 고정: 2026-08-18 이전의 최악 사례(ms 235자)를 반드시 🔴 로 잡아야 한다
  if ("x".repeat(235).length > MAX_CHARS) pass++;
  else { fail++; console.log("  ❌ 회귀 고정: 235자를 초과로 안 잡는다"); }

  console.log(`셀프테스트 ${pass}/${pass + fail}`);
  return fail ? 1 : 0;
}

process.exit(process.argv.includes("--selftest") ? selftest() : run());
