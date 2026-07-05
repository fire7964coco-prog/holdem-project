/**
 * GSC 성능 CSV → 주간 추세 스냅샷 분석기
 *
 * 사용법:
 *   node scripts/gsc-analyze.mjs <GSC압축푼폴더>
 *   예: node scripts/gsc-analyze.mjs "C:/Users/하봄/Downloads/gsc_extract/set1"
 *
 * GSC "성능 → 내보내기(CSV)" 로 받은 zip을 풀면 나오는 폴더를 그대로 넣으면 됨.
 * (검색어/페이지 CSV는 파일명이 깨져 있어도 헤더 내용으로 자동 판별)
 *
 * 목적: 매주 같은 창(28일 권장)으로 뽑아 → 타깃 쿼리 순위/노출/클릭의 "추세"를 추적.
 * 최종 목표 = 타깃 쿼리 구글 1페이지 top3 안착.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.argv[2];
if (!dir) {
  console.error('사용법: node scripts/gsc-analyze.mjs <GSC압축푼폴더>');
  process.exit(1);
}

function readLines(p) {
  const b = readFileSync(p);
  const t = b[0] === 0xff && b[1] === 0xfe ? b.toString('utf16le') : b.toString('utf8');
  return t.replace(/^﻿/, '').split(/\r?\n/).filter((x) => x.length);
}
function parseRows(lines) {
  return lines.slice(1).map((l) => {
    const a = l.split(',');
    const rank = +a.pop(), ctr = a.pop(), imp = +a.pop(), clk = +a.pop();
    return { name: a.join(','), clk, imp, ctr, rank };
  });
}
/** 폴더에서 헤더로 검색어/페이지 CSV 자동 판별 */
function findCsv(prefixText) {
  for (const f of readdirSync(dir)) {
    if (!f.toLowerCase().endsWith('.csv')) continue;
    const lines = readLines(join(dir, f));
    if (lines[0] && lines[0].startsWith(prefixText)) return parseRows(lines);
  }
  return null;
}

const queries = findCsv('인기 검색어');
const pages = findCsv('인기 페이지');
if (!queries) { console.error('검색어 CSV(헤더 "인기 검색어")를 폴더에서 못 찾음'); process.exit(1); }

// ── 이 사이트의 타깃 쿼리 워치리스트 (Wave 전략과 일치) ──
// 매주 이 쿼리들의 순위/노출/클릭 추세를 추적. 새 타깃 생기면 여기에 추가.
const WATCH = [
  ['Wave2 족보', ['홀덤 족보 순위', '홀덤 핸드 순위', '홀덤 패 순위', '홀덤 카드 순위', '포커 족보 순위', '킹하이', '홀덤 족보 같을 때']],
  ['Wave1 블라인드', ['홀덤 블라인드 뜻', '블라인드 뜻', '빅블라인드', '홀덤 bb 계산', '홀덤 블라인드']],
  ['밥줄 토너/펍', ['2026 홀덤대회일정', '홀덤대회일정', '국내 홀덤 대회 참가 방법', '해외 홀덤대회일정', '홀덤펍 추천', 'apt 인천']],
  ['도구의도 ICM', ['icm 계산기', 'icm계산기', '홀덤 icm 계산기']],
];

const find = (q) => queries.find((r) => r.name === q);
const tc = queries.reduce((a, b) => a + b.clk, 0);
const ti = queries.reduce((a, b) => a + b.imp, 0);

console.log('\n' + '='.repeat(64));
console.log(`GSC 스냅샷  ·  폴더: ${dir}`);
console.log('='.repeat(64));
console.log(`총 클릭 ${tc}  |  총 노출 ${ti}  |  CTR ${(tc / ti * 100).toFixed(2)}%  |  검색어 ${queries.length}개  |  페이지 ${pages ? pages.length : '?'}개`);

console.log('\n── 타깃 쿼리 추세 (순위↓=좋음, top3가 목표) ──');
console.log('쿼리                          순위    노출   클릭    CTR');
for (const [group, qs] of WATCH) {
  console.log(`\n[${group}]`);
  for (const q of qs) {
    const r = find(q);
    if (!r) { console.log(`  ${q.padEnd(26)}  (미노출 — 아직 순위 밖/미색인)`); continue; }
    const flag = r.rank <= 3 ? ' 🏆top3' : r.rank <= 10 ? ' ✅1p' : r.rank <= 20 ? ' ⬆2p' : '';
    console.log(`  ${q.padEnd(26)}  r${r.rank.toFixed(1).padStart(5)}  ${String(r.imp).padStart(5)}  ${String(r.clk).padStart(4)}  ${r.ctr.padStart(6)}${flag}`);
  }
}

console.log('\n── 신규 발굴: 노출≥20 & 순위 8~20 (다음 밀 후보) ──');
queries.filter((r) => r.imp >= 20 && r.rank >= 8 && r.rank <= 20)
  .sort((a, b) => b.imp - a.imp).slice(0, 15)
  .forEach((r) => console.log(`  r${r.rank.toFixed(1).padStart(5)}  ${String(r.imp).padStart(5)}imp  ${String(r.clk).padStart(3)}clk  ${r.name}`));

console.log('\n── kpi-log.md 붙여넣기용 한 줄 (총계) ──');
console.log(`| YYYY-MM-DD | (기간) | ${tc} | ${ti} | ${(tc / ti * 100).toFixed(2)}% | ${queries.length} | (족보순위 rX.X) | (블라인드뜻 rX.X) |`);
