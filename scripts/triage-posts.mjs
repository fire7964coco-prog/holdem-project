/**
 * 포스트 전수 트리아지 — GA4(랜딩 기준) × GSC를 한 표로 합쳐 "점검할 글"을 뽑는다.
 *
 * 사용법:
 *   npm run triage                 # 최근 7일, KO 블로그
 *   npm run triage -- --days 28    # 창 바꾸기
 *   npm run triage -- --static     # 정적·도구 페이지도 포함
 *   npm run triage -- --min 3      # 최소 세션(기본 1)
 *
 * ★왜 랜딩 기준인가 (WORKLOG 2026-08-02 494행):
 *   GA4 「페이지 경로」 참여율은 **그 글을 본** 세션 기준이라 내부링크로 넘어온 세션
 *   (이미 2페이지째 = 자동으로 참여 처리)이 섞인다. 글이 실제로 사람을 튕겨내는지는
 *   **landingPagePlusQueryString**(그 글로 들어온 세션)으로만 보인다.
 *
 * ★왜 GSC를 같이 보는가:
 *   참여율이 낮은 글과 노출이 없는 글은 처방이 정반대다.
 *   - 노출 있음 + 참여율 낮음 → 글이 검색 의도를 못 받는다 (경화·재구성)
 *   - 노출 없음            → 이탈이 아니라 "구글에서 안 보이는 것" (색인·순위 문제)
 *   holdem-range-meaning이 정확히 후자였는데 참여율만 보고 전자로 오진한 전례가 있다.
 *
 * ⚠ 짧은 창(7일)은 표본이 작다. n<10은 판단 근거가 아니라 관찰 대상이다 — 그렇게 표시한다.
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
const num = (flag, dflt) => { const i = args.indexOf(flag); return i >= 0 && args[i + 1] ? parseInt(args[i + 1], 10) : dflt; };
const DAYS = num('--days', 7);
const MIN = num('--min', 1);
const WITH_STATIC = args.includes('--static');
const LAG = parseInt(process.env.GSC_LAG_DAYS || '3', 10);

const scopes = [
  'https://www.googleapis.com/auth/analytics.readonly',
  'https://www.googleapis.com/auth/webmasters.readonly',
];
const auth = process.env.GSC_SA_KEY_JSON
  ? new google.auth.GoogleAuth({ credentials: JSON.parse(process.env.GSC_SA_KEY_JSON), scopes })
  : new google.auth.GoogleAuth({ keyFile: process.env.GSC_SA_KEY_PATH, scopes });
const client = await auth.getClient();
const ga = google.analyticsdata({ version: 'v1beta', auth });
const sc = google.searchconsole({ version: 'v1', auth: client });

const ymd = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => { const d = new Date(); d.setUTCDate(d.getUTCDate() - n); return d; };

/* ── GA4: 랜딩 기준 ── */
const gaRes = await ga.properties.runReport({
  property: `properties/${process.env.GA_PROPERTY_ID}`,
  requestBody: {
    dateRanges: [{ startDate: `${DAYS}daysAgo`, endDate: 'today' }],
    dimensions: [{ name: 'landingPagePlusQueryString' }, { name: 'sessionDefaultChannelGroup' }],
    metrics: [
      { name: 'sessions' }, { name: 'engagedSessions' },
      { name: 'userEngagementDuration' }, { name: 'eventCount' },
    ],
    limit: 5000,
  },
});

// Direct = 봇(참여율 17%대·세션당 0초대). 분석에서 제외한다 — 핸드오프 ▶0 참조.
const BOT_CHANNELS = new Set(['Direct', 'Unassigned']);
const stats = new Map();
for (const r of gaRes.data.rows || []) {
  const [rawPath, channel] = r.dimensionValues.map((v) => v.value);
  if (BOT_CHANNELS.has(channel)) continue;
  const path = rawPath.split('?')[0].replace(/\/$/, '') || '/';
  const [sessions, engaged, engDur, events] = r.metricValues.map((v) => +v.value);
  const e = stats.get(path) || { sessions: 0, engaged: 0, engDur: 0, events: 0 };
  e.sessions += sessions; e.engaged += engaged; e.engDur += engDur; e.events += events;
  stats.set(path, e);
}

/* ── GSC: 페이지 기준 ── */
const gscRes = await sc.searchanalytics.query({
  siteUrl: process.env.GSC_SITE_URL,
  requestBody: {
    startDate: ymd(daysAgo(DAYS + LAG)), endDate: ymd(daysAgo(LAG)),
    dimensions: ['page'], rowLimit: 5000,
  },
});
const gsc = new Map();
for (const r of gscRes.data.rows || []) {
  const path = r.keys[0].replace(/^https?:\/\/(www\.)?holdemmaster\.com/, '').replace(/\/$/, '') || '/';
  const e = gsc.get(path) || { clicks: 0, impressions: 0, posSum: 0, posW: 0 };
  e.clicks += r.clicks; e.impressions += r.impressions;
  e.posSum += r.position * r.impressions; e.posW += r.impressions;
  gsc.set(path, e);
}

/* ── KO 페이지만 (다국어 /xx/ 제외) ── */
const isKoBlog = (p) => /^\/blog\/[^/]+$/.test(p);
const isKoStatic = (p) => /^\/(tournaments|pub|ranking|calculator|hands|rules|strategy|glossary|quiz|holdem-practice|hand-chart|blog)?$/.test(p) || /^\/(pub|rules)\//.test(p);
const keep = (p) => (isKoBlog(p) || (WITH_STATIC && isKoStatic(p)));

const paths = new Set([...stats.keys(), ...gsc.keys()].filter(keep));

const rows = [];
for (const p of paths) {
  const g = stats.get(p) || { sessions: 0, engaged: 0, engDur: 0, events: 0 };
  const s = gsc.get(p) || { clicks: 0, impressions: 0, posSum: 0, posW: 0 };
  if (g.sessions < MIN && s.impressions === 0) continue;
  const engRate = g.sessions ? g.engaged / g.sessions : null;
  const evPer = g.sessions ? g.events / g.sessions : null;
  const secPer = g.sessions ? g.engDur / g.sessions : null;
  const pos = s.posW ? s.posSum / s.posW : null;
  const ctr = s.impressions ? s.clicks / s.impressions : null;

  // 깃발 — 무엇을 의심해야 하는지. 처방이 갈리므로 종류를 구분한다.
  const flags = [];
  if (g.sessions >= 5 && engRate !== null && engRate < 0.7) flags.push('참여율↓');
  if (g.sessions >= 5 && evPer !== null && evPer < 2.5) flags.push('이벤트↓');
  if (g.sessions >= 5 && secPer !== null && secPer < 30) flags.push('체류↓');
  if (s.impressions >= 20 && s.clicks === 0) flags.push('클릭0');
  if (s.impressions >= 20 && pos !== null && pos <= 10 && ctr !== null && ctr < 0.02) flags.push('상위인데CTR↓');
  if (s.impressions > 0 && s.impressions < 5 && g.sessions === 0) flags.push('노출미미');
  if (s.impressions === 0) flags.push('노출0');

  rows.push({ p, ...g, engRate, evPer, secPer, ...s, pos, ctr, flags,
    thin: g.sessions > 0 && g.sessions < 10 });
}

// 정렬: 깃발 수 → 세션(관측량) → 노출
rows.sort((a, b) => b.flags.length - a.flags.length || b.sessions - a.sessions || b.impressions - a.impressions);

const pctS = (x) => (x === null ? '   —' : `${(x * 100).toFixed(0)}%`.padStart(4));
const n2 = (x, w = 5) => (x === null ? '—'.padStart(w) : x.toFixed(1).padStart(w));
const durS = (s) => (s === null ? '    —' : `${Math.floor(s / 60)}m${String(Math.round(s % 60)).padStart(2, '0')}s`);

console.log(`\n${'='.repeat(112)}`);
console.log(`KO 포스트 트리아지 · 최근 ${DAYS}일 · GA4는 랜딩 기준(내부유입 제외) · Direct/Unassigned 제외(봇)`);
console.log(`대상 ${rows.length}개${WITH_STATIC ? ' (정적·도구 포함)' : ' (블로그만)'}`);
console.log('='.repeat(112));
console.log('세션 참여율 이벤트  체류    노출 클릭  CTR  순위  깃발                     페이지');
for (const r of rows) {
  const mark = r.thin ? '·' : ' ';
  console.log(
    String(r.sessions).padStart(4) + mark,
    pctS(r.engRate),
    n2(r.evPer, 5),
    durS(r.secPer),
    String(r.impressions).padStart(6),
    String(r.clicks).padStart(4),
    pctS(r.ctr),
    n2(r.pos, 5),
    ' ' + (r.flags.join(',') || '-').padEnd(24),
    r.p,
  );
}

const flagged = rows.filter((r) => r.flags.length);
console.log(`\n── 요약 ──`);
console.log(`깃발 있는 글 ${flagged.length} / ${rows.length}`);
const byFlag = {};
for (const r of rows) for (const f of r.flags) byFlag[f] = (byFlag[f] || 0) + 1;
for (const [f, n] of Object.entries(byFlag).sort((a, b) => b[1] - a[1])) console.log(`  ${f.padEnd(14)} ${n}편`);
console.log(`\n· 표시 = 세션 10 미만 → 표본 부족. 깃발이 떠도 판단 근거가 아니라 관찰 대상이다.`);
console.log(`  "참여율↓/이벤트↓/체류↓"는 글이 튕겨내는 것, "노출0/클릭0"은 검색에서 안 보이는 것 — 처방이 다르다.`);
