/**
 * 특정 검색어를 **어느 페이지가 받고 있는지** 조회한다 (gsc-page.mjs의 반대 방향).
 *
 * 왜 필요한가 (2026-08-02): 「홀덤펍」 23노출·42.4위를 필라(holdem-pub-guide)의 문제로 보고했는데,
 * 그 필라는 총 1노출이었다. 산술적으로 그 랜딩은 필라일 수 없다 — 쿼리 총계만 보고
 * 페이지를 특정한 오류다. 쿼리 → 페이지 방향을 봐야 처방이 갈린다.
 *
 * 사용법:
 *   node scripts/gsc-query-pages.mjs "홀덤펍" --days 90
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
const query = args.find((a) => !a.startsWith('--') && !/^\d+$/.test(a));
if (!query) {
  console.error('사용법: node scripts/gsc-query-pages.mjs "<검색어>" [--days 90]');
  process.exit(1);
}
const di = args.indexOf('--days');
const DAYS = di >= 0 && args[di + 1] ? parseInt(args[di + 1], 10) : 28;
const LAG = parseInt(process.env.GSC_LAG_DAYS || '3', 10);
const SITE = process.env.GSC_SITE_URL;

const end = new Date(Date.now() - LAG * 864e5);
const start = new Date(end.getTime() - (DAYS - 1) * 864e5);
const iso = (d) => d.toISOString().slice(0, 10);

// ⚠ 인증은 gsc-page.mjs와 동일 방식이어야 한다(gsc-key.json은 이 레포에 없다).
//   GSC_SA_KEY_JSON(인라인) 우선, 없으면 GSC_SA_KEY_PATH.
const auth = process.env.GSC_SA_KEY_JSON
  ? new google.auth.GoogleAuth({ credentials: JSON.parse(process.env.GSC_SA_KEY_JSON), scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] })
  : new google.auth.GoogleAuth({ keyFile: process.env.GSC_SA_KEY_PATH, scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] });
const webmasters = google.webmasters({ version: 'v3', auth });

const res = await webmasters.searchanalytics.query({
  siteUrl: SITE,
  requestBody: {
    startDate: iso(start),
    endDate: iso(end),
    dimensions: ['page'],
    dimensionFilterGroups: [{ filters: [{ dimension: 'query', operator: 'equals', expression: query }] }],
    rowLimit: 50,
  },
});

const rows = res.data.rows ?? [];
console.log(`\n검색어: 「${query}」  ·  ${iso(start)} ~ ${iso(end)} (${DAYS}일)`);
if (!rows.length) {
  console.log('→ 이 검색어로 잡힌 페이지가 없다 (해당 기간 노출 0).');
  process.exit(0);
}
console.log('\n클릭  노출    CTR    순위   페이지');
for (const r of rows) {
  const [page] = r.keys;
  console.log(
    String(r.clicks).padStart(4),
    String(r.impressions).padStart(6),
    (r.ctr * 100).toFixed(1).padStart(6) + '%',
    r.position.toFixed(1).padStart(6),
    ' ',
    page.replace(SITE.replace(/\/$/, ''), '').replace('sc-domain:', ''),
  );
}
