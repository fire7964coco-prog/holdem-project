/**
 * GA4 → 기기별(모바일/데스크톱/태블릿) 참여 격차 진단
 *
 * 사용법:
 *   node scripts/ga-device.mjs --days 28
 *   node scripts/ga-device.mjs --days 28 --min 10   # 랜딩 최소 세션
 *
 * 왜 필요한가: ga-fetch.mjs는 Direct(봇) 채널만 기기별로 쪼갠다.
 * 「모바일 참여율이 낮다」를 판정하려면 Organic Search를 기기 × 랜딩으로 쪼개야
 * «구조 탓인지 / 특정 글 탓인지 / 의도 탓인지»가 갈린다.
 *
 * 🔴 창은 28일이 기본 ([[analytics-window-28days]]).
 *
 * 🔴 보정 2종이 기본이다 (2026-09-30 · analytics-snapshot.mjs와 같은 규칙):
 *   ① landingPage="(not set)" 제외 — 30분 무활동 뒤 재개된 «두 번째 조각»(참여 0)이다.
 *      이 조각은 **전부 «재방문»으로 분류되고 데스크톱에 몰린다**(09-01~28: 데스크톱 160 · 모바일 46).
 *      안 빼면 데스크톱 재방문 참여율이 82% → 52%로 눌려 «재방문은 격차가 없다»로 읽힌다.
 *      실제로 08-17·09-16·09-23 진단이 세 번 그렇게 읽었다(3개 창 원값 격차 −10.2p · −0.4p · −2.2p
 *      ↔ 보정 8.1p · 15.7p · 23.4p). --raw 로 옛 동작을 재현할 수 있다.
 *   ② 창 끝 = 2일 전 — 어제는 GA 집계가 안 끝난 날이다(참여율 3%대로 찍힌다).
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
const DAYS = di >= 0 && args[di + 1] ? parseInt(args[di + 1], 10) : 28;
const mi = args.indexOf('--min');
const MIN = mi >= 0 && args[mi + 1] ? parseInt(args[mi + 1], 10) : 8;
const RAW = args.includes('--raw');
const START = RAW ? `${DAYS}daysAgo` : `${DAYS + 1}daysAgo`;
const END = RAW ? 'yesterday' : '2daysAgo';

const PROP = process.env.GA_PROPERTY_ID;
if (!PROP) { console.error('✖ GA_PROPERTY_ID 미설정 (.env.local)'); process.exit(1); }

const scopes = ['https://www.googleapis.com/auth/analytics.readonly'];
const auth = process.env.GSC_SA_KEY_JSON
  ? new google.auth.GoogleAuth({ credentials: JSON.parse(process.env.GSC_SA_KEY_JSON), scopes })
  : new google.auth.GoogleAuth({ keyFile: process.env.GSC_SA_KEY_PATH, scopes });
const ga = google.analyticsdata({ version: 'v1beta', auth });

const dur = (s) => { s = Math.round(+s || 0); return `${Math.floor(s / 60)}m${String(s % 60).padStart(2, '0')}s`; };
const pct = (x) => `${((+x || 0) * 100).toFixed(1)}%`;

const ORGANIC_ALL = {
  filter: { fieldName: 'sessionDefaultChannelGroup', stringFilter: { value: 'Organic Search' } },
};
const NOT_SET = { filter: { fieldName: 'landingPage', stringFilter: { value: '(not set)' } } };
const ORGANIC = RAW ? ORGANIC_ALL : { andGroup: { expressions: [ORGANIC_ALL, { notExpression: NOT_SET }] } };

async function run(dimensions, metrics, opts = {}) {
  const res = await ga.properties.runReport({
    property: `properties/${PROP}`,
    requestBody: {
      dateRanges: [{ startDate: START, endDate: END }],
      dimensions: dimensions.map((name) => ({ name })),
      metrics: metrics.map((name) => ({ name })),
      orderBys: [{ metric: { metricName: opts.sort || metrics[0] }, desc: true }],
      limit: opts.limit || 500,
      dimensionFilter: opts.filter || ORGANIC,
    },
  });
  return (res.data.rows || []).map((r) => ({
    d: r.dimensionValues.map((v) => v.value),
    m: r.metricValues.map((v) => +v.value),
  }));
}

async function main() {
  console.log(`\n${'='.repeat(92)}`);
  console.log(`GA4 ${PROP} · 최근 ${DAYS}일 · Organic Search 한정 · 기기별 참여 격차`);
  console.log('='.repeat(92));
  if (RAW) {
    console.log('⚠ --raw: 보정 없음((not set) 랜딩 포함 · 어제까지). 재방문 행은 데스크톱이 낮게 나온다 — 판정에 쓰지 마라.');
  } else {
    const ns = await run(['deviceCategory'], ['sessions'], { filter: { andGroup: { expressions: [ORGANIC_ALL, NOT_SET] } } });
    console.log(`보정: 창 ${START}~${END} · (not set) 랜딩 제외 — ${ns.map((r) => `${r.d[0]} ${r.m[0]}`).join(' · ') || '0'}세션(전부 재방문으로 분류되는 조각)`);
  }

  // 1) 기기별 총계
  console.log('\n── ① 기기별 총계 (세션 / 참여율 / 세션당참여시간 / 세션당페이지 / 이탈) ──');
  const dev = await run(['deviceCategory'],
    ['sessions', 'engagementRate', 'userEngagementDuration', 'screenPageViews', 'bounceRate']);
  for (const r of dev) {
    const [ses, rate, engDur, pv, bounce] = r.m;
    console.log(`  ${r.d[0].padEnd(9)} ${String(ses).padStart(5)}세션  참여율 ${pct(rate).padStart(6)}  ` +
      `세션당참여 ${dur(engDur / ses).padStart(7)}  p/s ${(pv / ses).toFixed(2).padStart(5)}  이탈 ${pct(bounce).padStart(6)}`);
  }

  // 2) 기기 × 신규/재방문 — 격차가 「신규 유입 품질」인지 확인
  console.log('\n── ② 기기 × 신규/재방문 ──');
  const nvr = await run(['deviceCategory', 'newVsReturning'], ['sessions', 'engagementRate', 'userEngagementDuration']);
  for (const r of nvr.sort((a, b) => b.m[0] - a.m[0])) {
    const [ses, rate, engDur] = r.m;
    console.log(`  ${r.d[0].padEnd(9)} ${(r.d[1] || '(미상)').padEnd(10)} ${String(ses).padStart(5)}세션  ` +
      `참여율 ${pct(rate).padStart(6)}  세션당참여 ${dur(engDur / ses).padStart(7)}`);
  }

  // 3) 랜딩 × 기기 — 어느 자리에서 격차가 나는가
  console.log(`\n── ③ 랜딩페이지 × 기기 (모바일 ${MIN}세션+ · 격차 큰 순) ──`);
  const land = await run(['landingPagePlusQueryString', 'deviceCategory'],
    ['sessions', 'engagementRate', 'userEngagementDuration', 'screenPageViews'], { limit: 1000 });
  const byPage = new Map();
  for (const r of land) {
    const [path, d] = r.d;
    const [ses, rate, engDur, pv] = r.m;
    const e = byPage.get(path) || {};
    e[d] = { ses, rate, sec: ses ? engDur / ses : 0, ps: ses ? pv / ses : 0 };
    byPage.set(path, e);
  }
  const rows = [...byPage.entries()]
    .filter(([, e]) => e.mobile && e.mobile.ses >= MIN)
    .map(([path, e]) => ({
      path, m: e.mobile, d: e.desktop || null,
      gap: e.desktop ? e.desktop.rate - e.mobile.rate : null,
      lost: Math.round(e.mobile.ses * (1 - e.mobile.rate)),
    }));

  console.log('  모바일: 세션 참여율  체류    p/s  │ 데스크톱: 세션 참여율 체류   p/s  │ 격차   손실  페이지');
  for (const r of rows.sort((a, b) => (b.gap ?? -1) - (a.gap ?? -1))) {
    const d = r.d
      ? `${String(r.d.ses).padStart(4)} ${pct(r.d.rate).padStart(6)} ${dur(r.d.sec).padStart(6)} ${r.d.ps.toFixed(2).padStart(4)}`
      : '   —      —      —    —';
    console.log(`  ${String(r.m.ses).padStart(4)} ${pct(r.m.rate).padStart(6)} ${dur(r.m.sec).padStart(6)} ${r.m.ps.toFixed(2).padStart(4)} │ ${d} │ ` +
      `${(r.gap === null ? '—' : (r.gap * 100).toFixed(1) + 'p').padStart(6)} ${String(r.lost).padStart(4)}  ${r.path}`);
  }

  console.log(`\n── ④ 모바일 이탈 절대량 top12 (개선 여지) ──`);
  for (const r of [...rows].sort((a, b) => b.lost - a.lost).slice(0, 12)) {
    console.log(`  이탈 ${String(r.lost).padStart(3)}  (모바일 ${r.m.ses}세션 중 참여 ${pct(r.m.rate)} · ${dur(r.m.sec)})  ${r.path}`);
  }
}

main().catch((e) => {
  const code = e?.code || e?.response?.status;
  if (code === 403) console.error('✖ 403 — 서비스계정 GA4 뷰어 권한 / Data API 사용설정 확인.');
  else console.error('✖', e?.errors?.[0]?.message || e?.message || e);
  process.exit(1);
});
