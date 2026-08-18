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
      근거: `CLAUDE.md` §11-7 이 정한 **사내 규칙**이다(외부 임계값이 아니라 우리가 정한 값).
   ② **꼬리에 정보가 있는가** — 🟠 경고. **임계값이 필요 없는 규칙이다.**

   🔴 **2026-08-18: 「표시폭 >160」을 🔴 로 승격하려던 안은 폐기됐다.** 1차 출처에 숫자가 없다 —
      Google Search Central 축어: *"There's no limit on how long a meta description can be, but the
      snippet is truncated in Google Search results as needed, typically to fit the device width."*
      같은 문서가 *"Snippets are primarily created from the page content itself."* 라고도 한다.
      → **「표시폭 160」은 이 코퍼스가 만든 값이지 검증된 임계값이 아니다.** 그걸로 빌드를 세우면
      RULES §4-1(UNVERIFIABLE 값을 «근거»로 쓰지 마라) 위반이다. **되살리지 마라.**

   🟢 대신 검수장이 제안한 **임계값 없는 규칙**을 쓴다:
      > **`desc` 는 마무리 문구로 끝낸다. 키워드·숫자를 맨 뒤에 두지 않는다.**
      어디서 잘리든 손해가 없으므로 상한을 몰라도 된다.
      실측(ja 38편): **31편은 이미 이 규칙대로** 쓰여 있었고 손볼 건 4편뿐이었다.

   ⚠ **이 게이트가 «못» 잡는 것 두 가지** — 사람 판정으로 남는다:
      · 마무리 절이 «아예 없는» 경우(항목 나열로 끝남)
      · 컷이 **키워드 단어 중간**을 자르는 경우
      숫자·통화가 꼬리에 있는 경우만 기계로 잡는다.

   실행: node scripts/check-meta-length.mjs [--selftest]
   ══════════════════════════════════════════════════════════════════════════ */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIB = join(ROOT, "lib");
const MAX_CHARS = 160;

/** 마지막 «문장» — 종결부호로 쪼갠 뒤 비어 있지 않은 마지막 조각 */
export const lastSentence = (s) => {
  const parts = s.split(/[。．.!?！？]/).map((x) => x.trim()).filter(Boolean);
  return parts.length ? parts[parts.length - 1] : s;
};

/** 꼬리에 있으면 손해인 «정보» = 3자리 이상 숫자 · 통화 기호.
 *  🔴 1차 안은 여기에 「라틴 4자 이상」을 넣었는데 **346/522 = 66%** 가 걸려 폐기했다 —
 *     라틴 문자권은 모든 문장에 4자 이상 낱말이 있어 무조건 발화한다.
 *     숫자·통화만 남기니 11건(2.1%)이고 전부 진짜 「숫자가 맨 뒤」 사례였다. */
export const TAIL_INFO = /[0-9０-９]{3,}|[$€₩¥]/;

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

  // ── 🟠 꼬리에 정보가 있는가 (임계값 없는 규칙) ──
  const tailed = rows.filter((r) => TAIL_INFO.test(lastSentence(r.desc)));
  if (tailed.length) {
    console.log(`\n🟠 마지막 문장에 숫자·통화가 있다 — ${tailed.length}편 (경고 · 잘리면 그 정보가 사라진다)`);
    for (const r of tailed) {
      console.log(`   ${(r.loc + "/" + r.slug).padEnd(42)} …${lastSentence(r.desc).slice(0, 44)}`);
    }
    console.log("   → 마무리 문구로 끝내고 숫자·키워드를 앞으로 옮겨라. 어디서 잘리든 손해가 없어진다.");
  } else {
    console.log("🟢 마지막 문장에 숫자·통화가 남은 글 0편");
  }

  // 표시폭은 «참고 출력»으로만 남긴다 — 빨간불의 근거로 쓰지 마라(위 헤더 참조)
  const w = rows.map((r) => dispWidth(r.desc)).sort((a, b) => a - b);
  console.log(`\n🪶 참고 — 표시폭 중앙 ${w[Math.floor(w.length / 2)]} · 최대 ${w[w.length - 1]} (정렬용 · 판정 근거 아님)`);
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

  // ── 🟠 꼬리 규칙 ──
  const t = [
    { n: "마지막 문장 추출 — 일본어", s: "前半です。ラスベガス遠征までまとめています。", want: "ラスベガス遠征までまとめています" },
    { n: "마지막 문장 추출 — 라틴", s: "First. Second sentence here.", want: "Second sentence here" },
    { n: "꼬리 금액 검출", s: "…で$1,000,000。", info: true },
    { n: "꼬리 4자리 수 검출", s: "…1,393エントリー。", info: true },
    { n: "마무리 상투구는 안 울린다", s: "…まとめています。", info: false },
    { n: "라틴 낱말만으론 안 울린다(1차 안 폐기 사유)", s: "Check the official APT event page.", info: false },
    { n: "두 자리 수는 안 울린다", s: "…19歳以上です。", info: false },
  ];
  for (const c of t) {
    if (c.want !== undefined) {
      if (lastSentence(c.s) === c.want) pass++;
      else { fail++; console.log(`  ❌ ${c.n} — 실제 ${JSON.stringify(lastSentence(c.s))}`); }
    } else {
      if (TAIL_INFO.test(lastSentence(c.s)) === c.info) pass++;
      else { fail++; console.log(`  ❌ ${c.n}`); }
    }
  }

  console.log(`셀프테스트 ${pass}/${pass + fail}`);
  return fail ? 1 : 0;
}

process.exit(process.argv.includes("--selftest") ? selftest() : run());
