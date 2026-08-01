/**
 * 경화 우선순위 보드 — GA4(참여율)와 GSC(노출·순위)를 **한 표로 겹쳐** 본다.
 *
 * 왜 필요한가: 참여율만 보고 고르면 처방을 틀린다. 2026-08-02에 실제로 겪었다 —
 * holdem-range-meaning은 참여율 53%로 뽑혔지만 진짜 손실은 **구글 노출 0**이었고,
 * 유입은 네이버 모바일이었다. 반대로 노출만 보면 "들어와서 바로 나가는 글"을 놓친다.
 *
 * 사용법: npm run board          (GA4 30일 · GSC 90일)
 *        npm run board -- --days 60
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
const di = args.indexOf('--days');
const GA_DAYS = di >= 0 && args[di + 1] ? parseInt(args[di + 1], 10) : 30;
const GSC_DAYS = 90;
const LAG = parseInt(process.env.GSC_LAG_DAYS || '3', 10);
const ymd = (d) => d.toISOString().slice(0, 10);
const ago = (n) => { const d = new Date(); d.setUTCDate(d.getUTCDate() - n); return d; };

// ── GA4: 랜딩 기준(=이 글로 들어온 세션). Direct는 봇이라 제외.
const gaAuth = process.env.GSC_SA_KEY_JSON
  ? new google.auth.GoogleAuth({ credentials: JSON.parse(process.env.GSC_SA_KEY_JSON), scopes: ['https://www.googleapis.com/auth/analytics.readonly'] })
  : new google.auth.GoogleAuth({ keyFile: process.env.GSC_SA_KEY_PATH, scopes: ['https://www.googleapis.com/auth/analytics.readonly'] });
const ga = google.analyticsdata({ version: 'v1beta', auth: gaAuth });
const gaRes = await ga.properties.runReport({
  property: `properties/${process.env.GA_PROPERTY_ID}`,
  requestBody: {
    dateRanges: [{ startDate: `${GA_DAYS}daysAgo`, endDate: 'today' }],
    dimensions: [{ name: 'landingPagePlusQueryString' }, { name: 'sessionDefaultChannelGroup' }],
    metrics: [{ name: 'sessions' }, { name: 'engagementRate' }, { name: 'averageSessionDuration' }],
    limit: 500,
  },
});
const gaMap = {};
for (const r of gaRes.data.rows || []) {
  const [path, ch] = r.dimensionValues.map((d) => d.value);
  if (ch === 'Direct' || !path.startsWith('/blog/')) continue;   // Direct = 봇 판정(핸드오프 §0)
  const s = +r.metricValues[0].value;
  const g = (gaMap[path] ||= { ses: 0, eng: 0, dur: 0 });
  g.eng += (+r.metricValues[1].value) * s; g.dur += (+r.metricValues[2].value) * s; g.ses += s;
}

// ── GSC: 페이지 차원 1회 조회 (URL은 www — apex로 물으면 0행이 나온다)
const scAuth = process.env.GSC_SA_KEY_JSON
  ? new google.auth.GoogleAuth({ credentials: JSON.parse(process.env.GSC_SA_KEY_JSON), scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] })
  : new google.auth.GoogleAuth({ keyFile: process.env.GSC_SA_KEY_PATH, scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] });
const sc = google.searchconsole({ version: 'v1', auth: await scAuth.getClient() });
const scRes = await sc.searchanalytics.query({
  siteUrl: process.env.GSC_SITE_URL,
  requestBody: { startDate: ymd(ago(GSC_DAYS + LAG)), endDate: ymd(ago(LAG)), dimensions: ['page'], rowLimit: 1000 },
});
const scMap = {};
for (const r of scRes.data.rows || []) {
  const path = r.keys[0].replace(/^https?:\/\/[^/]+/, '');
  if (!path.startsWith('/blog/')) continue;
  scMap[path] = { clicks: r.clicks, imp: r.impressions, pos: r.position, ctr: r.ctr };
}

const paths = [...new Set([...Object.keys(gaMap), ...Object.keys(scMap)])];
const rows = paths.map((p) => {
  const g = gaMap[p], s = scMap[p];
  return {
    path: p,
    ses: g?.ses || 0,
    engRate: g && g.ses ? g.eng / g.ses : null,
    dur: g && g.ses ? g.dur / g.ses : null,
    clicks: s?.clicks || 0, imp: s?.imp || 0, pos: s?.pos ?? null,
  };
}).filter((r) => r.ses >= 3 || r.imp >= 30);

const pct = (x) => (x == null ? '  —  ' : (x * 100).toFixed(0).padStart(4) + '%');
const num = (x, w = 5) => String(x).padStart(w);
const dur = (s) => (s == null ? '  —  ' : `${Math.floor(s / 60)}m${String(Math.round(s % 60)).padStart(2, '0')}s`);

console.log(`\nGA4 랜딩 ${GA_DAYS}일(Direct 제외) × GSC ${GSC_DAYS}일 · 블로그 ${rows.length}개\n`);
console.log('참여율  세션  체류    클릭   노출  평균순위  경로');
console.log('─'.repeat(88));
for (const r of rows.sort((a, b) => (a.engRate ?? 9) - (b.engRate ?? 9)))
  console.log(`${pct(r.engRate)} ${num(r.ses, 5)} ${dur(r.dur)} ${num(r.clicks, 6)} ${num(r.imp, 6)}  ${r.pos ? r.pos.toFixed(1).padStart(6) : '     —'}  ${r.path}`);

console.log(`\n※ 참여율 = "이 글로 들어온" 세션 기준(내부유입 제외). 주요 이벤트가 없어 사실상 "10초 버텼나"다.`);
console.log(`※ 노출은 많은데 클릭 0 = 순위 문제 / 참여율만 낮고 노출 적음 = 유입 자체가 구글이 아닐 수 있다.`);
