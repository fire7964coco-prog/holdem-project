/**
 * GA4 Data API → 트래픽/참여 분석 (특히 다이렉트 이탈 진단)
 *
 * 사용법:
 *   node scripts/ga-fetch.mjs            # 최근 90일
 *   node scripts/ga-fetch.mjs --days 28  # 최근 28일
 *   node scripts/ga-fetch.mjs --pages --days 30
 *       ↳ GA4 UI 「트래픽 획득: 세션 기본 채널 그룹 × 페이지 경로 및 화면 클래스」와 동일.
 *         ★Direct 채널은 봇으로 판정돼 제외한다(참여율 17%·세션 0초대) — Organic Search만 본다.
 *         참여율 오름차순 = 위쪽이 "들어와서 바로 나가는" 페이지.
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
const mi = args.indexOf('--min');
const MIN_SES = mi >= 0 && args[mi + 1] ? parseInt(args[mi + 1], 10) : 5;

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

/** 트래픽 획득 × 페이지 경로 및 화면 클래스 (Organic Search 한정) */
async function pagesMode() {
  const res = await ga.properties.runReport({
    property: `properties/${PROP}`,
    requestBody: {
      dateRanges: [{ startDate: START, endDate: 'yesterday' }],
      dimensions: [{ name: 'sessionDefaultChannelGroup' }, { name: 'unifiedPagePathScreen' }],
      metrics: [
        { name: 'sessions' }, { name: 'engagedSessions' }, { name: 'engagementRate' },
        { name: 'userEngagementDuration' }, { name: 'eventCount' },
      ],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 1000,
    },
  });
  const rows = (res.data.rows || []).map((r) => {
    const [chan, path] = r.dimensionValues.map((v) => v.value);
    const [ses, engSes, rate, engDur, evt] = r.metricValues.map((v) => +v.value);
    return { chan, path, ses, engSes, rate, perSes: ses ? engDur / ses : 0, evtPerSes: ses ? evt / ses : 0 };
  });

  console.log(`\n${'='.repeat(96)}`);
  console.log(`GA4 ${PROP} · 최근 ${DAYS}일 · 트래픽 획득 × 페이지 경로 (총 ${rows.length}행)`);
  console.log(`★ Direct 제외 = 봇 추정 (참여율 17%대·세션당 0초대)`);
  console.log('='.repeat(96));

  const org = rows.filter((r) => r.chan === 'Organic Search' && r.ses >= MIN_SES).sort((a, b) => a.rate - b.rate);
  console.log(`\n── Organic Search · 세션 ${MIN_SES}+ · 참여율 오름차순 (${org.length}행) ──`);
  console.log('참여율   세션 참여세션  세션당참여  이벤트/세션  ★손실   페이지');
  for (const r of org) {
    const lost = r.ses - r.engSes;   // 이탈 세션 수 = 개선 여지의 절대량
    console.log(
      `${(r.rate * 100).toFixed(1).padStart(5)}% ${String(r.ses).padStart(5)} ${String(r.engSes).padStart(6)} ` +
      `${dur(r.perSes).padStart(10)} ${r.evtPerSes.toFixed(2).padStart(10)} ${String(lost).padStart(6)}   ${r.path}`
    );
  }

  console.log(`\n── ★ 개선 여지 큰 순 (이탈 세션 절대량) top15 ──`);
  for (const r of [...org].sort((a, b) => (b.ses - b.engSes) - (a.ses - a.engSes)).slice(0, 15)) {
    console.log(`  이탈 ${String(r.ses - r.engSes).padStart(3)}  (${r.ses}세션 중 ${pct(r.rate)})  ${dur(r.perSes).padStart(7)}  ${r.path}`);
  }

  const chan = new Map();
  for (const r of rows) {
    const c = chan.get(r.chan) || { ses: 0, eng: 0 };
    c.ses += r.ses; c.eng += r.engSes; chan.set(r.chan, c);
  }
  console.log(`\n── 채널 요약 (페이지 단위 합산이라 UI 세션 총계와 다름) ──`);
  for (const [c, v] of [...chan].sort((a, b) => b[1].ses - a[1].ses)) {
    console.log(`  ${c.padEnd(16)} ${String(v.ses).padStart(6)}  참여율 ${pct(v.eng / v.ses)}`);
  }
}

async function main() {
  if (args.includes('--pages')) return pagesMode();
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
