/**
 * GSC 페이지 CSV → 언어(로케일)별 노출 분해 분석기
 *
 * 목적: "구글이 최근 어떤 언어/페이지를 노출시키나"를 본다.
 *   - 페이지 URL의 로케일 세그먼트(/en/ /ja/ …)로 그룹핑
 *   - 언어별 노출·클릭·노출가중 평균순위·CTR
 *   - 번역본(비-한국어) 노출 비중 → 평균순위/CTR을 끌어내리는지 확인
 *
 * 사용법:
 *   node scripts/gsc-lang.mjs <폴더1> [<폴더2> ...]
 *   예: node scripts/gsc-lang.mjs docs/gsc-tracking/data/2026-07-12-28d \
 *                                 docs/gsc-tracking/data/2026-07-12-7d \
 *                                 docs/gsc-tracking/data/2026-07-15-3d-fresh
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const folders = process.argv.slice(2);
if (!folders.length) {
  console.error('사용법: node scripts/gsc-lang.mjs <폴더> [<폴더> ...]');
  process.exit(1);
}

// lib/intl.ts SECONDARY_LOCALES 와 동기화
const LOCALES = new Set(['en', 'ja', 'es', 'zh', 'ar', 'pt', 'id', 'ms', 'vi', 'hi', 'de', 'tr',
  'fr', 'ru', 'it', 'pl', 'th', 'fa', 'sw', 'bn', 'ro', 'fil', 'uk', 'he']);

function readLines(p) {
  const b = readFileSync(p);
  const t = b[0] === 0xff && b[1] === 0xfe ? b.toString('utf16le') : b.toString('utf8');
  return t.replace(/^﻿/, '').split(/\r?\n/).filter((x) => x.length);
}
function parseRows(lines) {
  return lines.slice(1).map((l) => {
    const a = l.split(',');
    const rank = +a.pop(); a.pop(); const imp = +a.pop(); const clk = +a.pop();
    return { url: a.join(','), clk, imp, rank };
  });
}
function findPages(dir) {
  for (const f of readdirSync(dir)) {
    if (!f.toLowerCase().endsWith('.csv')) continue;
    const lines = readLines(join(dir, f));
    if (lines[0] && lines[0].startsWith('인기 페이지')) return parseRows(lines);
  }
  return null;
}
function localeOf(url) {
  const m = url.match(/holdemmaster\.com\/([^/?#]+)/i);
  const seg = m ? m[1].toLowerCase() : '';
  if (LOCALES.has(seg)) return seg;
  return 'ko'; // 루트/blog/community/도구 = 한국어(기본)
}

for (const dir of folders) {
  const pages = findPages(dir);
  console.log('\n' + '='.repeat(70));
  console.log(`페이지 언어분해  ·  ${basename(dir)}`);
  console.log('='.repeat(70));
  if (!pages) { console.log('  (페이지 CSV 없음)'); continue; }

  const g = {};
  for (const r of pages) {
    const loc = localeOf(r.url);
    (g[loc] ||= { pages: 0, imp: 0, clk: 0, wpos: 0 });
    g[loc].pages++; g[loc].imp += r.imp; g[loc].clk += r.clk; g[loc].wpos += r.rank * r.imp;
  }
  const totImp = pages.reduce((a, b) => a + b.imp, 0);
  const totClk = pages.reduce((a, b) => a + b.clk, 0);

  console.log('\n언어   페이지수   노출   (비중)    클릭   가중평균순위  CTR');
  Object.entries(g).sort((a, b) => b[1].imp - a[1].imp).forEach(([loc, s]) => {
    const share = totImp ? (s.imp / totImp * 100).toFixed(1) : '0';
    const wpos = s.imp ? (s.wpos / s.imp).toFixed(1) : '-';
    const ctr = s.imp ? (s.clk / s.imp * 100).toFixed(2) : '0';
    const star = loc !== 'ko' ? ' ←번역본' : '';
    console.log(`${loc.padEnd(5)}  ${String(s.pages).padStart(6)}  ${String(s.imp).padStart(5)}  (${share.padStart(4)}%)  ${String(s.clk).padStart(4)}   r${wpos.padStart(5)}      ${ctr}%${star}`);
  });

  const nonKoImp = totImp - (g.ko?.imp || 0);
  console.log(`\n  전체: 노출 ${totImp} · 클릭 ${totClk} · 번역본 노출비중 ${(nonKoImp / totImp * 100).toFixed(1)}%`);

  const foreign = pages.filter((r) => localeOf(r.url) !== 'ko').sort((a, b) => b.imp - a.imp).slice(0, 12);
  if (foreign.length) {
    console.log('\n  최다노출 번역본 페이지 top12:');
    for (const r of foreign) {
      const path = r.url.replace(/^https?:\/\/[^/]+/, '');
      console.log(`    ${localeOf(r.url).padEnd(3)}  r${r.rank.toFixed(1).padStart(5)}  ${String(r.imp).padStart(4)}imp  ${String(r.clk).padStart(2)}clk  ${path}`);
    }
  } else {
    console.log('\n  번역본 노출 페이지: 없음');
  }
}
