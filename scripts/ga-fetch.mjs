/**
 * GA4 Data API → 트래픽/참여 분석 (특히 다이렉트 이탈 진단)
 *
 * 사용법:
 *   node scripts/ga-fetch.mjs            # 최근 90일
 *   node scripts/ga-fetch.mjs --days 28  # 최근 28일
 *
 * 필요 설정 (.env.local, GSC와 같은 서비스계정 키 재사용):
 *   GA_PROPERTY_ID   = 529721248
 *   GSC_SA_KEY_PATH  = <서비스계정 JSON 경로>  (또는 GSC_SA_KEY_JSON)
 * 사전: GA4 속성 액세스 관리에서 서비스계정 이메일을 "뷰어"로 추가 +
 *       Google Cloud에서 "Google Analytics Data API" 사용 설정.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { google } from 'googleapis';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
function loadEnv() {
  const p = join(ROOT, '.env.local');
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (m && process.env[m[1]] === undefined) {
      let v = m[2];
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
      process.env[m[1]] = v;
    }
  }
}
loadEnv();

const args = process.argv.slice(2);
const di = args.indexOf('--days');
const DAYS = di >= 0 && args[di + 1] ? parseInt(args[di + 1], 10) : 90;
const START = `${DAYS}daysAgo`;

const PROP = process.env.GA_PROPERTY_ID;
if (!PROP) { console.error('✖ GA_PROPERTY_ID 미설정 (.env.local)'); process.exit(1); }

const scopes = ['https://www.googleapis.com/auth/analytics.readonly'];
const auth = process.env.GSC_SA_KEY_JSON
  ? new google.auth.GoogleAuth({ credentials: JSON.parse(process.env.GSC_SA_KEY_JSON), scopes })
  : new google.auth.GoogleAuth({ keyFile: process.env.GSC_SA_KEY_PATH, scopes });
const ga = google.analyticsdata({ version: 'v1beta', auth });

const dur = (s) => { s = Math.round(+s || 0); return `${Math.floor(s / 60)}m${String(s % 60).padStart(2, '0')}s`; };
const pct = (x) => `${(( +x || 0) * 100).toFixed(1)}%`;

async function report(dimensions, metrics, opts = {}) {
  const res = await ga.properties.runReport({
    property: `properties/${PROP}`,
    requestBody: {
      dateRanges: [{ startDate: START, endDate: 'today' }],
      dimensions: dimensions.map((name) => ({ name })),
      metrics: metrics.map((name) => ({ name })),
      orderBys: [{ metric: { metricName: opts.sort || metrics[0] }, desc: true }],
      limit: opts.limit || 25,
      ...(opts.filterDim ? {
        dimensionFilter: { filter: { fieldName: opts.filterDim, stringFilter: { value: opts.filterVal } } },
      } : {}),
    },
  });
  return (res.data.rows || []).map((r) => ({
    dims: r.dimensionValues.map((d) => d.value),
    mets: r.metricValues.map((m) => m.value),
  }));
}

async function main() {
  console.log(`\n${'='.repeat(72)}\nGA4 속성 ${PROP}  ·  최근 ${DAYS}일\n${'='.repeat(72)}`);

  // 1) 채널별 트래픽·참여
  console.log('\n── 채널별 (세션 / 사용자 / 참여율 / 세션당참여시간 / 이탈률 / 주요이벤트) ──');
  const ch = await report(
    ['sessionDefaultChannelGroup'],
    ['sessions', 'totalUsers', 'engagementRate', 'averageSessionDuration', 'bounceRate', 'keyEvents']);
  let ts = 0; ch.forEach((r) => (ts += +r.mets[0]));
  console.log(`(총 세션 ${ts})`);
  for (const r of ch) {
    console.log(`  ${r.dims[0].padEnd(16)}  ${String(r.mets[0]).padStart(5)}  ${String(r.mets[1]).padStart(5)}명  ${pct(r.mets[2]).padStart(6)}  ${dur(r.mets[3]).padStart(7)}  이탈 ${pct(r.mets[4]).padStart(6)}  ev ${r.mets[5]}`);
  }

  // 2) Direct 채널: 기기별 참여
  console.log('\n── ★ Direct 채널 · 기기별 (세션 / 참여율 / 세션당참여시간 / 이탈률) ──');
  const dd = await report(
    ['deviceCategory'],
    ['sessions', 'engagementRate', 'averageSessionDuration', 'bounceRate'],
    { filterDim: 'sessionDefaultChannelGroup', filterVal: 'Direct' });
  if (!dd.length) console.log('  (Direct 데이터 없음)');
  for (const r of dd) {
    console.log(`  ${r.dims[0].padEnd(8)}  ${String(r.mets[0]).padStart(5)}  ${pct(r.mets[1]).padStart(6)}  ${dur(r.mets[2]).padStart(7)}  이탈 ${pct(r.mets[3]).padStart(6)}`);
  }

  // 3) Direct 채널: 상위 랜딩페이지
  console.log('\n── ★ Direct 채널 · 상위 랜딩페이지 top12 (세션 / 참여율 / 세션당참여시간) ──');
  const dl = await report(
    ['landingPagePlusQueryString'],
    ['sessions', 'engagementRate', 'averageSessionDuration'],
    { filterDim: 'sessionDefaultChannelGroup', filterVal: 'Direct', limit: 12 });
  for (const r of dl) {
    console.log(`  ${String(r.mets[0]).padStart(4)}  ${pct(r.mets[1]).padStart(6)}  ${dur(r.mets[2]).padStart(7)}  ${r.dims[0]}`);
  }

  // 4) Direct 채널: 신규 vs 재방문
  console.log('\n── ★ Direct 채널 · 신규 vs 재방문 ──');
  const dn = await report(
    ['newVsReturning'],
    ['sessions', 'engagementRate', 'averageSessionDuration'],
    { filterDim: 'sessionDefaultChannelGroup', filterVal: 'Direct' });
  for (const r of dn) {
    console.log(`  ${(r.dims[0] || '(미상)').padEnd(10)}  ${String(r.mets[0]).padStart(5)}  ${pct(r.mets[1]).padStart(6)}  ${dur(r.mets[2]).padStart(7)}`);
  }

  // 5) 참고: 전체 상위 랜딩페이지 (Organic 포함)
  console.log('\n── 전체 상위 랜딩페이지 top12 (세션 / 참여율 / 세션당참여시간) ──');
  const al = await report(
    ['landingPagePlusQueryString'],
    ['sessions', 'engagementRate', 'averageSessionDuration'], { limit: 12 });
  for (const r of al) {
    console.log(`  ${String(r.mets[0]).padStart(4)}  ${pct(r.mets[1]).padStart(6)}  ${dur(r.mets[2]).padStart(7)}  ${r.dims[0]}`);
  }
}

main().catch((e) => {
  const code = e?.code || e?.response?.status;
  if (code === 403) console.error('✖ 403 — 서비스계정을 GA4 속성에 "뷰어"로 추가했는지 + GA Data API 사용설정했는지 확인.');
  else console.error('✖', e?.errors?.[0]?.message || e?.message || e);
  process.exit(1);
});
