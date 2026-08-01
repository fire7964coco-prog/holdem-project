/**
 * 특정 페이지 1편의 GA4 정밀 진단 — "이 글로 **들어온** 세션"과 "이 글을 **본** 세션"을 구분한다.
 *
 * 사용법: node scripts/ga-page.mjs blog/holdem-range-meaning [--days 30]
 *   (Git Bash는 선행 "/"를 윈도 경로로 바꾸므로 슬래시 없이 넘겨도 된다)
 *
 * 왜: 「트래픽 획득 × 페이지 경로」의 참여율은 **그 페이지를 본 세션**의 참여율이다.
 * 내부 링크로 넘어온 세션은 이미 2페이지째라 자동으로 "참여"로 잡힌다. 그래서 이 숫자만으로는
 * "이 글이 사람을 튕겨내는가"를 알 수 없다. 랜딩(entrance) 기준으로 다시 봐야 결론이 난다.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { google } from 'googleapis';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const envPath = join(ROOT, '.env.local');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

const args = process.argv.slice(2);
let path = args.find((a) => !a.startsWith('--') && !/^\d+$/.test(a) && !/^[A-Za-z]:[\\/]/.test(a));
if (!path) { console.error('사용법: node scripts/ga-page.mjs blog/<slug> [--days 30]'); process.exit(1); }
if (!path.startsWith('/')) path = '/' + path;
const di = args.indexOf('--days');
const DAYS = di >= 0 && args[di + 1] ? parseInt(args[di + 1], 10) : 30;

const PROP = process.env.GA_PROPERTY_ID;
const scopes = ['https://www.googleapis.com/auth/analytics.readonly'];
const auth = process.env.GSC_SA_KEY_JSON
  ? new google.auth.GoogleAuth({ credentials: JSON.parse(process.env.GSC_SA_KEY_JSON), scopes })
  : new google.auth.GoogleAuth({ keyFile: process.env.GSC_SA_KEY_PATH, scopes });
const ga = google.analyticsdata({ version: 'v1beta', auth });

const dur = (s) => { s = Math.round(+s || 0); return `${Math.floor(s / 60)}m${String(s % 60).padStart(2, '0')}s`; };
const pct = (x) => `${((+x || 0) * 100).toFixed(1)}%`;

async function run(dimensions, metrics, filterDim) {
  const res = await ga.properties.runReport({
    property: `properties/${PROP}`,
    requestBody: {
      dateRanges: [{ startDate: `${DAYS}daysAgo`, endDate: 'today' }],
      dimensions: dimensions.map((name) => ({ name })),
      metrics: metrics.map((name) => ({ name })),
      dimensionFilter: {
        filter: { fieldName: filterDim, stringFilter: { matchType: 'EXACT', value: path } },
      },
      limit: 50,
    },
  });
  return (res.data.rows || []).map((r) => ({
    keys: r.dimensionValues.map((d) => d.value),
    vals: r.metricValues.map((m) => m.value),
  }));
}

console.log(`\n═══ ${path} · 최근 ${DAYS}일 ═══`);

// ① 이 글로 **들어온** 세션 (랜딩 기준) — 참여율의 진짜 주인
const landing = await run(
  ['sessionDefaultChannelGroup'],
  ['sessions', 'engagedSessions', 'engagementRate', 'averageSessionDuration', 'bounceRate'],
  'landingPagePlusQueryString',
);
console.log(`\n── ① 이 글로 들어온 세션 (landing) ──`);
if (!landing.length) console.log('  (없음)');
for (const r of landing) {
  console.log(`  ${r.keys[0].padEnd(18)} 세션 ${r.vals[0].padStart(4)} · 참여 ${r.vals[1].padStart(3)} · 참여율 ${pct(r.vals[2])} · 평균체류 ${dur(r.vals[3])} · 이탈 ${pct(r.vals[4])}`);
}

// ② 이 글을 **본** 세션 (페이지뷰 기준) — GA4 「페이지 경로」 리포트가 보여주는 값
const viewed = await run(
  ['sessionDefaultChannelGroup'],
  ['screenPageViews', 'sessions', 'engagementRate', 'userEngagementDuration'],
  'pagePath',
);
console.log(`\n── ② 이 글을 본 세션 (pagePath) ──`);
for (const r of viewed) {
  console.log(`  ${r.keys[0].padEnd(18)} 조회 ${r.vals[0].padStart(4)} · 세션 ${r.vals[1].padStart(4)} · 참여율 ${pct(r.vals[2])} · 참여시간합 ${dur(r.vals[3])}`);
}

// ③ 랜딩 세션의 유입 출처 (구글 외 검색엔진 확인)
const src = await run(
  ['sessionSource', 'sessionMedium'],
  ['sessions', 'engagementRate', 'averageSessionDuration'],
  'landingPagePlusQueryString',
);
console.log(`\n── ③ 랜딩 세션의 출처 ──`);
if (!src.length) console.log('  (없음)');
for (const r of src.slice(0, 15)) {
  console.log(`  ${(r.keys[0] + ' / ' + r.keys[1]).padEnd(28)} 세션 ${r.vals[0].padStart(4)} · 참여율 ${pct(r.vals[1])} · 평균 ${dur(r.vals[2])}`);
}
