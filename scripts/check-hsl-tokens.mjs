#!/usr/bin/env node
/**
 * HSL 3요소 토큰을 «감싸지 않고» 색 자리에 쓴 곳을 잡는다.
 *
 * ── 왜 있나 (2026-08-18 사고) ────────────────────────────────────────────────
 * `app/globals.css` 의 토큰은 값이 `40 45% 97%` 같은 **HSL 3요소**다.
 * 그래서 아래는 유효하지 않은 CSS 이고 **조용히 무시된다** — 에러도 경고도 없다:
 *     background: var(--card);      color: var(--primary);
 * 반드시 감싸야 한다:
 *     background: hsl(var(--card)); color: hsl(var(--primary));
 *
 * 실제 피해: readnext 카드 배경이 «투명», 라벨·화살표가 골드 대신 상속 갈색으로 나왔다.
 * 라이브에서 계산색을 재기 전까지 아무도 못 봤다 — **읽어서는 안 잡히는 종류**다.
 * 규모: 445파일 5,204자리(`8d2aba44` 에서 일괄 정정).
 *
 * ── 왜 재발하나 ──────────────────────────────────────────────────────────────
 * 깨진 5,203자리가 **전부 `lib/`(포스트 본문 인라인 스타일 + 렌더러)** 였다.
 * `components/`·`app/` 은 처음부터 정상이었다. 즉 UI 코드 규율이 아니라
 * **«본문에 style="…" 을 쓸 때»** 새는 문제라, 새 포스트를 쓰면 같은 게 또 들어온다.
 *
 * 🔴 `--gold-dark-rgb` 는 이 검사 대상이 아니다 — 그건 rgb 트리플릿이라
 *    `rgb(var(--gold-dark-rgb))` / `rgba(var(--gold-dark-rgb),0.25)` 가 «맞는» 형태다.
 *
 * 사용:  node scripts/check-hsl-tokens.mjs           (🔴 1건이라도 있으면 exit 1)
 *        node scripts/check-hsl-tokens.mjs --selftest
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const SKIP = new Set(['node_modules', '.next', '.git', 'ds-bundle', '.ds-sync', '.design-sync']);
const DIRS = ['lib', 'components', 'app'];

/** hsl() 로 감싸야 하는 토큰들 — globals.css 의 `:root` 에서 3요소로 정의된 것 전부. */
const HSL_TOKENS = [
  'background', 'foreground', 'card', 'card-foreground', 'primary', 'primary-foreground',
  'secondary', 'secondary-foreground', 'muted', 'muted-foreground', 'accent',
  'accent-foreground', 'destructive', 'destructive-foreground', 'border',
];

export function scan(src) {
  const hits = [];
  const re = new RegExp(`var\\(--(${HSL_TOKENS.join('|')})\\)`, 'g');
  let m;
  while ((m = re.exec(src)) !== null) {
    // 바로 앞이 `hsl(` 이면 정상. 공백을 허용한다(`hsl( var(--x)` 도 유효한 CSS 다).
    const before = src.slice(Math.max(0, m.index - 8), m.index);
    if (/hsl\(\s*$/.test(before)) continue;
    hits.push({ index: m.index, token: m[1], text: m[0] });
  }
  return hits;
}

function walk(dir, out = []) {
  let es;
  try { es = readdirSync(dir); } catch { return out; }
  for (const e of es) {
    if (SKIP.has(e)) continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx|ts)$/.test(e)) out.push(p);
  }
  return out;
}

/* ── 셀프테스트 — 규칙보다 먼저 검증한다 ─────────────────────────────────── */
if (process.argv.includes('--selftest')) {
  const cases = [
    ['color:var(--primary)', 1, '색 속성에 날것 → 잡아야 한다'],
    ['background:var(--card)', 1, '배경에 날것 → 잡아야 한다'],
    ['color:hsl(var(--primary))', 0, '이미 감쌈 → 통과'],
    ['border:1px solid hsl(var(--border))', 0, '감쌈 + 축약형 → 통과'],
    ['color:hsl( var(--foreground) )', 0, '공백 허용 → 통과'],
    ['color:hsl(var(--primary) / 0.3)', 0, '알파 슬래시 → 통과'],
    ['color:rgb(var(--gold-dark-rgb))', 0, '골드는 rgb 트리플릿이라 대상 아님'],
    ['background:rgba(var(--gold-dark-rgb),0.25)', 0, '골드 알파도 대상 아님'],
    ['style="color:var(--muted-foreground);font-size:12px"', 1, '인라인 스타일 안 → 잡아야 한다'],
    ['background:linear-gradient(rgba(0,0,0,.1)),var(--card)', 1, '그라디언트 뒤 폴백 → 잡아야 한다'],
    ['const x = "var(--primary)"', 1, '문자열이어도 결국 CSS 로 나간다 → 잡는다'],
    ['background:hsl(var(--card));color:var(--primary)', 1, '한 줄에 정상+비정상 → 1건'],
    ['--my-own: var(--primary)', 1, '다른 변수에 연쇄 대입도 결국 안 먹는다 → 잡는다'],
  ];
  let bad = 0;
  for (const [src, want, why] of cases) {
    const got = scan(src).length;
    const ok = got === want;
    if (!ok) bad++;
    console.log(`${ok ? '✅' : '🔴'} 기대 ${want} / 실제 ${got}  ${why}\n     ${src}`);
  }
  console.log(bad ? `\n🔴 셀프테스트 ${bad}건 실패` : `\n✅ 셀프테스트 ${cases.length}/${cases.length} 통과`);
  process.exit(bad ? 1 : 0);
}

/* ── 본 실행 ──────────────────────────────────────────────────────────────── */
const files = DIRS.flatMap((d) => walk(join(ROOT, d)));
const rows = [];
let scanned = 0;

for (const f of files) {
  const rel = relative(ROOT, f).replace(/\\/g, '/');
  const src = readFileSync(f, 'utf8');
  scanned++;
  for (const h of scan(src)) {
    const line = src.slice(0, h.index).split('\n').length;
    const lineText = src.split('\n')[line - 1] ?? '';
    rows.push({ rel, line, token: h.token, text: lineText.trim().slice(0, 110) });
  }
}

console.log('── HSL 토큰 감쌈 게이트 ──');
console.log(`대상 ${scanned}개 파일 (${DIRS.join(' · ')})`);

if (!rows.length) {
  console.log(`✅ 🔴 0건 — 3요소 토큰 ${HSL_TOKENS.length}종이 전부 hsl() 로 감싸져 있다.`);
  console.log('   커버리지: `var(--토큰)` 표기만 본다. 토큰을 안 쓰고 하드코딩한 색은 이 게이트 밖이다');
  console.log('   (그건 `node scripts/scan-color-debt.mjs` 가 센다).');
  process.exit(0);
}

console.log(`🔴 ${rows.length}건 — hsl() 로 감싸지 않았다. 이 색들은 «조용히 무시된다».\n`);
const byFile = new Map();
for (const r of rows) {
  if (!byFile.has(r.rel)) byFile.set(r.rel, []);
  byFile.get(r.rel).push(r);
}
for (const [rel, rs] of [...byFile].sort((a, b) => b[1].length - a[1].length).slice(0, 30)) {
  console.log(`  ${rel} (${rs.length})`);
  for (const r of rs.slice(0, 3)) console.log(`    L${r.line}  --${r.token}  ${r.text}`);
}
if (byFile.size > 30) console.log(`  … 그 외 ${byFile.size - 30}개 파일`);
console.log('\n고치는 법:  var(--card)  →  hsl(var(--card))');
console.log('🔴 --gold-dark-rgb 는 rgb 트리플릿이라 rgb()/rgba() 가 맞다 — 바꾸지 마라.');
process.exit(1);
