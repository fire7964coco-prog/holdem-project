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

const ask = (dimensions, rowLimit = 200) => sc.searchanalytics.query({
  siteUrl: SITE,
  requestBody: {
    startDate, endDate, dimensions,
    dimensionFilterGroups: [{ filters: [{ dimension: 'page', operator: 'equals', expression: url }] }],
    rowLimit,
  },
});

/* ══════════════════════════════════════════════════════════════════════════════
   🔴 2026-08-30 — 이 스크립트는 **거짓 0을 보고하고 있었다.**

   쿼리 행의 합을 「페이지 노출」로 출력했는데, GSC는 **page·date 외의 차원으로 묶는 순간
   익명화된 롱테일 행을 통째로 뺀다.** 그래서 쿼리 합은 페이지 총계보다 항상 작고,
   **저볼륨 페이지에서는 100%까지 사라진다.**

   실측(2026-07-30~08-27, 같은 필터·같은 창):
     /blog/holdem-blind-meaning      [page] 740/57  ↔ [query] 274/31   → 63% 누락
     /en/blog/holdem-tiebreak-rules  [page]  66/0   ↔ [query]   0/0    → 100% 누락(← 「노출 0」이라 보고했었다)
     /en/blog/holdem-game-order      [page]   0/0   ↔ [query]   0/0    → 진짜 0
     /ranking                        [page] 9587/48 ↔ [query] 9476/39  → 1% 누락
   ⚠ [device]·[query+device]도 **[query]와 똑같이 274/31**이었다 — 익명화는 쿼리 차원만의
     문제가 아니라 «page·date 외 그룹핑» 전반에 걸린다. 기기 분할 비율을 전체로 읽지 마라.

   🔴 고볼륨 페이지에서는 누락이 1%라 **지금까지 안 들켰다.** 저볼륨 글을 판정할 때만 터진다.
   → 그래서 페이지 총계를 **[page] 차원으로 따로 물어** 나란히 찍고, 격차가 크면 경고한다.
   ══════════════════════════════════════════════════════════════════════════════ */
const [res, pageRes] = await Promise.all([ask(['query']), ask(['page'], 1)]);

const rows = res.data.rows || [];
const tot = rows.reduce((a, r) => ({ c: a.c + r.clicks, i: a.i + r.impressions }), { c: 0, i: 0 });
const P = (pageRes.data.rows || [])[0] || { impressions: 0, clicks: 0, position: 0 };
const missPct = P.impressions ? Math.round((1 - tot.i / P.impressions) * 100) : 0;

console.log(`\n${url}`);
console.log(`${startDate} ~ ${endDate} (${DAYS}일)`);
console.log(`페이지 총계(진짜) · 노출 ${P.impressions} · 클릭 ${P.clicks} · CTR ${P.impressions ? ((P.clicks / P.impressions) * 100).toFixed(2) : 0}% · r${(P.position || 0).toFixed(1)}`);
console.log(`아래 쿼리 표    · 노출 ${tot.i} · 클릭 ${tot.c} · 쿼리 ${rows.length}개`);
if (missPct > 0) {
  console.log(
    `🔴 익명화로 표에서 빠진 몫 ${missPct}% (노출 ${P.impressions - tot.i} · 클릭 ${P.clicks - tot.c}) — ` +
    `**아래 표의 합을 페이지 총계로 쓰지 마라.**` +
    (missPct >= 50 ? ' 이 페이지는 절반 이상이 안 보인다 — 쿼리 구성으로 결론 내리기에 부적합하다.' : ''),
  );
}
console.log('');
console.log('클릭  노출    CTR    순위   검색어');
for (const r of rows.slice(0, 40)) {
  console.log(
    `${String(r.clicks).padStart(4)} ${String(r.impressions).padStart(6)} ${((r.ctr * 100).toFixed(1) + '%').padStart(7)} ${r.position.toFixed(1).padStart(6)}   ${r.keys[0]}`,
  );
}
