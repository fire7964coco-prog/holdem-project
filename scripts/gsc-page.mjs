/**
 * 특정 페이지의 GSC 쿼리 전수 조회 — "이 글이 실제로 어떤 검색어로 잡히나"를 본다.
 *
 * 사용법:
 *   node scripts/gsc-page.mjs /blog/holdem-range-meaning
 *   node scripts/gsc-page.mjs /blog/holdem-range-meaning --days 90
 *
 * 왜 필요한가: 참여율이 낮은 글은 "글이 나쁘다"가 아니라 **의도가 안 맞는 검색어로 들어온다**는
 * 경우가 많다. 페이지 총계(gsc-fetch)로는 그게 안 보인다.
 */
import { google } from 'googleapis';
import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
// .env.local 로드 (gsc-fetch와 동일 방식)
const envPath = join(ROOT, '.env.local');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

const args = process.argv.slice(2);
// ⚠ Git Bash(MSYS)는 인자의 선행 "/"를 윈도 경로로 바꿔버린다(C:/Program Files/...).
//   그래서 슬래시 없는 슬러그(blog/holdem-x 또는 holdem-x)도 받는다.
let path = args.find((a) => !a.startsWith('--') && !/^\d+$/.test(a) && !/^[A-Za-z]:[\\/]/.test(a));
if (!path) {
  console.error('사용법: node scripts/gsc-page.mjs blog/<slug> [--days 28]');
  process.exit(1);
}
if (!path.startsWith('/')) path = '/' + path;
if (!path.startsWith('/blog/') && !path.includes('/')) path = '/blog' + path;
const di = args.indexOf('--days');
const DAYS = di >= 0 && args[di + 1] ? parseInt(args[di + 1], 10) : 28;
const LAG = parseInt(process.env.GSC_LAG_DAYS || '3', 10);
const SITE = process.env.GSC_SITE_URL;

const ymd = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => { const d = new Date(); d.setUTCDate(d.getUTCDate() - n); return d; };

const auth = process.env.GSC_SA_KEY_JSON
  ? new google.auth.GoogleAuth({ credentials: JSON.parse(process.env.GSC_SA_KEY_JSON), scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] })
  : new google.auth.GoogleAuth({ keyFile: process.env.GSC_SA_KEY_PATH, scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] });

const sc = google.searchconsole({ version: 'v1', auth: await auth.getClient() });
const startDate = ymd(daysAgo(DAYS + LAG));
const endDate = ymd(daysAgo(LAG));
// ★ 정식 호스트는 www다(apex → www 307). lib/site.ts의 SITE와 맞춰야 행이 잡힌다.
const url = `https://www.holdemmaster.com${path}`;

const res = await sc.searchanalytics.query({
  siteUrl: SITE,
  requestBody: {
    startDate, endDate,
    dimensions: ['query'],
    dimensionFilterGroups: [{ filters: [{ dimension: 'page', operator: 'equals', expression: url }] }],
    rowLimit: 200,
  },
});

const rows = res.data.rows || [];
const tot = rows.reduce((a, r) => ({ c: a.c + r.clicks, i: a.i + r.impressions }), { c: 0, i: 0 });
console.log(`\n${url}`);
console.log(`${startDate} ~ ${endDate} (${DAYS}일) · 쿼리 ${rows.length}개 · 클릭 ${tot.c} · 노출 ${tot.i} · CTR ${tot.i ? ((tot.c / tot.i) * 100).toFixed(2) : 0}%\n`);
console.log('클릭  노출    CTR    순위   검색어');
for (const r of rows.slice(0, 40)) {
  console.log(
    `${String(r.clicks).padStart(4)} ${String(r.impressions).padStart(6)} ${((r.ctr * 100).toFixed(1) + '%').padStart(7)} ${r.position.toFixed(1).padStart(6)}   ${r.keys[0]}`,
  );
}
