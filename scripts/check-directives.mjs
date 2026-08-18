/* ══════════════════════════════════════════════════════════════════════════
   디렉티브 누수 게이트 — 빌드 산출물에 `:::` 마커가 남았는가

   왜 있나 (2026-08-18 신설):
     `:::pull` 블록형이 렌더러에 없어서 **마커가 화면에 그대로 노출**되고 있었다.
     de 검수 지시서 G2 가 「de·en·ja × 3편 = 10곳」으로 적었는데 실측은 **27곳·9로케일**이었고,
     그걸 고치고 산출물을 훑자 **같은 유형이 `:::note` 에 31곳·8로케일 더** 나왔다.
     즉 이 결함군은 «어느 디렉티브가 깨졌나»를 손으로 세는 방식으로는 닫히지 않는다.

   🔴 **소스가 아니라 «빌드 산출물»을 본다.** 소스에 `:::pull` 이 있는 건 정상이고,
      결함은 «렌더 후에도 남아 있는 것»이다. 판정은 언제나 산출물로
      ([[faq-schema-build-output-is-truth]] 와 같은 규율).

   누수 원인은 지금까지 둘이었다 — 둘 다 이 게이트 하나로 잡힌다:
     ① 블록형 미지원 (`:::name` … `:::` 을 한 줄형만 처리)
     ② 한 줄형의 본문 캡처가 `[^\]]+` 라 **마크다운 링크의 `]`** 에서 끊김

   실행: node scripts/check-directives.mjs [--selftest]
   ⚠ `npm run build` 를 먼저 돌려야 한다(산출물이 없으면 «미판정»으로 종료).
   ══════════════════════════════════════════════════════════════════════════ */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, ".next", "server", "app");

/** 렌더 후에도 남으면 안 되는 마커. 여는 줄(`:::name`)과 닫는 줄(`:::`) 둘 다. */
const MARKER = /:::[a-zA-Z-]*/g;

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

function run() {
  console.log("── 디렉티브 누수 게이트 (빌드 산출물) ──");
  if (!existsSync(OUT)) {
    console.log("⚠ 미판정 — .next/server/app 이 없다. `npm run build` 를 먼저 돌려라.");
    console.log("   («0건»이 아니다. 검사 자체를 못 했다.)");
    return 0;
  }
  const files = walk(OUT);
  const hits = [];
  for (const f of files) {
    const t = readFileSync(f, "utf8");
    const m = t.match(MARKER);
    if (m) hits.push({ f: relative(OUT, f).replace(/\\/g, "/"), n: m.length, kinds: [...new Set(m)] });
  }

  console.log(`HTML 산출물 ${files.length}개 스캔`);
  if (!hits.length) {
    console.log("✅ `:::` 마커 잔존 0 — 모든 디렉티브가 렌더됐다.");
    return 0;
  }
  console.log(`🔴 마커가 남은 페이지 ${hits.length}개 — 독자에게 그대로 보인다:\n`);
  const byKind = {};
  for (const h of hits) {
    console.log(`  ${h.f}  ×${h.n}  ${h.kinds.join(" ")}`);
    for (const k of h.kinds) if (k !== ":::") (byKind[k] ??= new Set()).add(h.f);
  }
  console.log(`\n디렉티브별: ${Object.entries(byKind).map(([k, v]) => `${k} ${v.size}페이지`).join(" · ") || "(닫는 줄만)"}`);
  console.log("→ 렌더러(lib/render-markdown.ts)에 그 형태가 없거나, 본문의 `]`(마크다운 링크)가 캡처를 끊은 것이다.");
  return 1;
}

/* ── 셀프테스트: 게이트가 «실제로 새던 두 형태»를 잡는지 고정한다 ── */
function selftest() {
  const cases = [
    { name: "블록형 누수(pull) 검출", html: "<p>:::pull\n인용문\n:::</p>", want: true },
    { name: "블록형 누수(note) 검출", html: "<p>:::note\n메모\n:::</p>", want: true },
    { name: "링크로 끊긴 한 줄형 검출", html: "<p>:::tip[보려면 [계산기](/calculator)]:::</p>", want: true },
    { name: "정상 렌더는 안 울린다", html: '<figure><p>인용문</p></figure><div class="blog-note">메모</div>', want: false },
    { name: "CSS 의사요소 :: 는 안 울린다", html: "<style>a::before{content:''}</style>", want: false },
    { name: "URL 의 // 는 안 울린다", html: '<a href="https://x.com/a">x</a>', want: false },
  ];
  let pass = 0, fail = 0;
  for (const c of cases) {
    const got = MARKER.test(c.html);
    MARKER.lastIndex = 0; // /g 정규식은 lastIndex 가 남는다 — 안 지우면 다음 케이스가 거짓 통과한다
    if (got === c.want) pass++;
    else { fail++; console.log(`  ❌ ${c.name} — 기대 ${c.want} · 실제 ${got}`); }
  }
  console.log(`셀프테스트 ${pass}/${pass + fail}`);
  return fail ? 1 : 0;
}

process.exit(process.argv.includes("--selftest") ? selftest() : run());
