import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, relative } from 'path';

const ROOT = 'C:/Users/하봄/Downloads/Holdem_Project';
const DIRS = ['components', 'app', 'lib'];
const SKIP_DIRS = new Set(['node_modules', '.next', '.git']);
const ILLUSTRATION = /Diagram\.tsx$/i;

// 색 문맥이 있는 것만 hex로 인정 (「#1000」 같은 순위·수량 표기 오탐 제거)
const COLOR_CTX = /(?:color|background|bg|border|fill|stroke|shadow|outline|ring|from|to|via|accent|gradient|stop-color|--[\w-]*(?:color|bg|hl)[\w-]*)\s*[:=]?\s*$/i;
const HEX6 = /#[0-9a-fA-F]{8}\b|#[0-9a-fA-F]{6}\b/g;
const HEX3 = /#[0-9a-fA-F]{3,4}\b/g;
const PALETTE = /\b(?:bg|text|border|from|to|via|ring|fill|stroke|shadow|decoration|outline|divide)-(?:red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|zinc|neutral|stone)-\d{2,3}\b/g;
const ARBITRARY = /\b(?:bg|text|border|from|to|via|ring|fill|stroke)-\[(?:#[0-9a-fA-F]{3,8}|rgba?\([^\]]*\)|hsla?\([^\]]*\))\]/g;
// 🔴 `\b` 를 뺐다 (2026-08-18). 앞에 `\b` 가 있으면 Tailwind arbitrary 값 안의 rgba 를 통째로 놓친다 —
// `shadow-[0_0_10px_rgba(212,175,55,0.3)]` 는 `_` 가 word 문자라 `_` 와 `r` 사이에 경계가 없다.
// 실측: 이 한 글자 때문에 components/app 에서 **26자리**가 안 세이고 있었다(그중 12가 골드).
// 즉 브리프의 「UI 1,322」는 처음부터 과소집계였다. 되돌리지 마라.
const RGBA = /rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+/g;

function area(rel) {
  if (/^lib\/posts(-[\w-]+)?\//.test(rel) || rel === 'lib/posts.ts') return 'content';
  if (/^components\/|^app\//.test(rel)) return 'ui';
  return 'data';
}

function walk(dir, out = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const e of entries) {
    if (SKIP_DIRS.has(e)) continue;
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.(tsx|ts|jsx|js|css)$/.test(e)) out.push(p);
  }
  return out;
}

const files = DIRS.flatMap(d => walk(join(ROOT, d)));
const rows = [];
let rejectedHex3 = 0;
let tokenRefs = 0;   // var(--토큰) 참조 = 이미 회수된 자리 (부채 아님)

for (const f of files) {
  const rel = relative(ROOT, f).replace(/\\/g, '/');
  if (rel.endsWith('app/globals.css')) continue;
  if (ILLUSTRATION.test(rel)) continue;
  const src = readFileSync(f, 'utf8');
  src.split(/\r?\n/).forEach((line, i) => {
    const hits = [];
    for (const m of line.matchAll(HEX6)) hits.push({ kind: 'hex', v: m[0] });
    for (const m of line.matchAll(HEX3)) {
      if (/^#[0-9a-fA-F]{6,8}$/.test(m[0])) continue;
      // 앞 문맥에 color/background 등이 있어야 색으로 인정
      if (COLOR_CTX.test(line.slice(0, m.index))) hits.push({ kind: 'hex', v: m[0] });
      else rejectedHex3++;
    }
    for (const m of line.matchAll(PALETTE)) hits.push({ kind: 'palette', v: m[0] });
    // 🔴 var(--토큰) 참조는 부채가 아니라 «회수된 자리»다 (2026-08-18).
    // ARBITRARY 는 bg-[rgb(var(--gold-dark-rgb))] 처럼 토큰을 감싼 형태도 매칭한다 —
    // 그대로 세면 회수를 해도 숫자가 안 줄어 «진척이 안 보이는» 오탐이 된다.
    // (RGBA/HEX/PALETTE 는 숫자·# 를 직접 요구해서 애초에 var() 를 안 잡는다.)
    for (const m of line.matchAll(ARBITRARY)) {
      if (m[0].includes('var(--')) { tokenRefs++; continue; }
      hits.push({ kind: 'arbitrary', v: m[0] });
    }
    for (const m of line.matchAll(RGBA)) hits.push({ kind: 'rgba', v: m[0] + '...)' });
    if (!hits.length) return;
    rows.push({ file: rel, area: area(rel), line: i + 1, hits, text: line.trim().slice(0, 100) });
  });
}

const byFile = new Map();
for (const r of rows) {
  if (!byFile.has(r.file)) byFile.set(r.file, { file: r.file, area: r.area, count: 0, kinds: {}, rows: [] });
  const e = byFile.get(r.file);
  e.count += r.hits.length;
  for (const h of r.hits) e.kinds[h.kind] = (e.kinds[h.kind] || 0) + 1;
  e.rows.push(r);
}
const all = [...byFile.values()].sort((a, b) => b.count - a.count);
const sum = a => a.reduce((n, f) => n + f.count, 0);
const ui = all.filter(f => f.area === 'ui');
const content = all.filter(f => f.area === 'content');
const data = all.filter(f => f.area === 'data');

const kindTotals = {};
for (const r of rows) for (const h of r.hits) kindTotals[h.kind] = (kindTotals[h.kind] || 0) + 1;

const out = [];
out.push('# 토큰을 안 타는 색 — 전수 스캔');
out.push('');
out.push('> `node scripts/scan-color-debt.mjs`로 재생성. 대상 = `components/` `app/` `lib/` (tsx·ts·css).');
out.push('> 제외 = `app/globals.css`(토큰 정의처) · `*Diagram.tsx`(SVG 일러스트).');
out.push(`> 오탐 제거 = 색 문맥 없는 3~4자리 \`#XXX\` **${rejectedHex3}건**(「#1000」 같은 순위·수량 표기).`);
out.push(`> ✅ **이미 회수돼 제외된 자리 = ${tokenRefs}건** (\`var(--토큰)\` 참조 — 부채가 아니다).`);
out.push('');
out.push('## 한눈에');
out.push('');
out.push('| 구역 | 자리 | 파일 | 성격 |');
out.push('|---|---:|---:|---|');
out.push(`| **UI (components·app)** | **${sum(ui)}** | ${ui.length} | 🔴 토큰 회수 대상 — 톤 변경이 여기서 갈린다 |`);
out.push(`| **포스트 본문 인라인 스타일** | **${sum(content)}** | ${content.length} | 🟠 콘텐츠 편집 필요 · 다국어라 파급 큼 |`);
out.push(`| 데이터·기타 | ${sum(data)} | ${data.length} | 🟡 의미색(등급·상태)일 수 있음 — 개별 판정 |`);
out.push(`| **합계** | **${sum(all)}** | ${all.length} | |`);
out.push('');
out.push('**종류별**: ' + Object.entries(kindTotals).map(([k, v]) => `${k} ${v}`).join(' · '));
out.push('');

function fileTable(title, list, note) {
  out.push(`## ${title}`);
  out.push('');
  if (note) { out.push(note); out.push(''); }
  out.push('| 파일 | 자리 | 내역 |');
  out.push('|---|---:|---|');
  for (const f of list) {
    const kinds = Object.entries(f.kinds).map(([k, v]) => `${k} ${v}`).join(' · ');
    out.push(`| \`${f.file}\` | ${f.count} | ${kinds} |`);
  }
  out.push('');
}
fileTable('🔴 UI — 회수 대상', ui, '톤을 바꾸면 **이 자리들만 옛 톤으로 남는다.** 위에서부터 처리하면 효과가 크다.');
fileTable('🟠 포스트 본문 인라인 스타일', content, '본문 `content` 문자열 안의 `style="color:#..."`. 상당수가 **어두운 배경을 전제**(`rgba(255,255,255,...)` 테두리)해서 라이트 테마와 이미 어긋나 있을 수 있다. 로케일마다 같은 글이 있어 한 건이 N배로 퍼진다.');
fileTable('🟡 데이터·기타', data, '등급·상태를 나타내는 **의미색일 수 있다.** 일괄 교체 금지 — 자리마다 판정.');

out.push('## 🔴 UI — 자리별 전체 목록');
out.push('');
for (const f of ui) {
  out.push(`### \`${f.file}\` (${f.count})`);
  out.push('');
  for (const r of f.rows) {
    out.push(`- **L${r.line}** — ${r.hits.map(h => '`' + h.v + '`').join(' · ')}`);
    out.push(`  <br/>\`${r.text.replace(/`/g, "'")}\``);
  }
  out.push('');
}
writeFileSync(join(ROOT, 'docs/color-token-debt.md'), out.join('\n'), 'utf8');
console.log(`회수됨(var) ${tokenRefs} · UI ${sum(ui)}/${ui.length} · 본문 ${sum(content)}/${content.length} · 데이터 ${sum(data)}/${data.length} · 합계 ${sum(all)} · hex3오탐제거 ${rejectedHex3}`);
