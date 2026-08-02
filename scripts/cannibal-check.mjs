/**
 * 카니발 탐지 — 하나의 검색어를 우리 페이지 **여러 개**가 나눠 받고 있는지 본다.
 *
 * 사용법:
 *   npm run cannibal                 # 최근 28일
 *   npm run cannibal -- --days 90
 *   npm run cannibal -- --min 5      # 쿼리 총노출 하한
 *
 * ★왜 필요한가 (2026-08-02): 「홀덤펍 완전 가이드」를 /pub 디렉토리와 홀덤펍 필라가 둘 다
 *   주장하고 있었고, 구글은 231노출 대 1노출로 /pub을 골랐다. 필라는 죽어 있었다.
 *   같은 구조가 /hands↔족보 필라, /rules↔룰 필라에도 있는지 **쿼리 방향**으로 확인해야 한다.
 *   페이지 총계만 보면 "필라 노출이 적다"까지만 보이고 **누가 가져갔는지**가 안 보인다.
 *
 * 판정: 한 쿼리를 2개 이상 페이지가 받으면 후보. 다만
 *   - 순위가 크게 벌어져 있으면(예: 5위 vs 60위) 사실상 한 페이지만 유효 → 약한 신호
 *   - 두 페이지가 비슷한 순위대면 서로 신호를 나눠 갖는 중 → 강한 신호
 */
import { google } from 'googleapis';
import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const envPath = join(ROOT, '.env.local');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
const args = process.argv.slice(2);
const num = (f, d) => { const i = args.indexOf(f); return i >= 0 && args[i + 1] ? parseInt(args[i + 1], 10) : d; };
const DAYS = num('--days', 28);
const MIN = num('--min', 3);
const LAG = parseInt(process.env.GSC_LAG_DAYS || '3', 10);

const auth = process.env.GSC_SA_KEY_JSON
  ? new google.auth.GoogleAuth({ credentials: JSON.parse(process.env.GSC_SA_KEY_JSON), scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] })
  : new google.auth.GoogleAuth({ keyFile: process.env.GSC_SA_KEY_PATH, scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] });
const sc = google.searchconsole({ version: 'v1', auth: await auth.getClient() });
const ymd = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => { const d = new Date(); d.setUTCDate(d.getUTCDate() - n); return d; };

const res = await sc.searchanalytics.query({
  siteUrl: process.env.GSC_SITE_URL,
  requestBody: {
    startDate: ymd(daysAgo(DAYS + LAG)), endDate: ymd(daysAgo(LAG)),
    dimensions: ['query', 'page'], rowLimit: 25000,
  },
});

const byQuery = new Map();
for (const r of res.data.rows || []) {
  const [q, rawPage] = r.keys;
  const page = rawPage.replace(/^https?:\/\/(www\.)?holdemmaster\.com/, '').replace(/#.*$/, '') || '/';
  if (/^\/[a-z]{2}(-[a-z]{2})?\//.test(page)) continue;   // 다국어 제외 (KO만)
  const list = byQuery.get(q) || [];
  const same = list.find((x) => x.page === page);
  if (same) { same.impressions += r.impressions; same.clicks += r.clicks; same.posSum += r.position * r.impressions; }
  else list.push({ page, impressions: r.impressions, clicks: r.clicks, posSum: r.position * r.impressions });
  byQuery.set(q, list);
}

const rows = [];
for (const [q, list] of byQuery) {
  if (list.length < 2) continue;
  const total = list.reduce((s, x) => s + x.impressions, 0);
  if (total < MIN) continue;
  for (const x of list) x.pos = x.posSum / x.impressions;
  list.sort((a, b) => b.impressions - a.impressions);
  // 강한 신호 = 2·3위 페이지도 1페이지권(<=20)이고 노출 비중이 무시 못 할 때
  const rival = list[1];
  const strong = rival.impressions / total >= 0.2 && rival.pos <= 20;
  rows.push({ q, total, list, strong });
}
rows.sort((a, b) => (b.strong - a.strong) || b.total - a.total);

console.log(`\n${'='.repeat(96)}`);
console.log(`카니발 탐지 · 최근 ${DAYS}일 · KO만 · 한 쿼리를 2개 이상 페이지가 받는 경우 (총노출 ${MIN}+)`);
console.log('='.repeat(96));
let strongN = 0;
for (const r of rows) {
  if (r.strong) strongN++;
  console.log(`\n${r.strong ? '🔴 강함' : '·  약함'}  「${r.q}」  총 ${r.total}노출`);
  for (const x of r.list) {
    console.log(`        ${String(x.impressions).padStart(5)}노출 ${String(x.clicks).padStart(3)}클릭 ${x.pos.toFixed(1).padStart(6)}위   ${x.page}`);
  }
}
console.log(`\n── 요약 ── 겹치는 쿼리 ${rows.length}개 (강한 신호 ${strongN}개)`);
console.log('강함 = 2위 페이지도 20위 이내이고 노출 비중 20%+ → 서로 신호를 나눠 갖는 중.');
console.log('약함 = 순위가 크게 벌어져 사실상 한 페이지만 유효.');
