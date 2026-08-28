/**
 * 정기 애널리틱스 스냅샷 — GA4 + GSC를 «항상 같은 보정 규칙»으로 뽑아 누적한다.
 *
 *   node scripts/analytics-snapshot.mjs            # 스냅샷 + 로그 1행 추가
 *   node scripts/analytics-snapshot.mjs --dry      # 화면 출력만, 파일 안 씀
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * 🔴 왜 이 스크립트가 필요한가 (2026-08-28 진단에서 나온 이유)
 *
 * GA4 화면을 그대로 읽으면 «참여율이 떨어졌다»는 오진이 매번 반복된다. 실측 사다리:
 *   59.4%(GA UI 그대로) → 62.1%(미처리 하루 제외) → 65.8%((not set) 랜딩 제외)
 * 즉 6.4포인트가 전부 측정 아티팩트였다. 손으로 창을 고르면 회차마다 기준이 달라져
 * «비교»가 성립하지 않는다. 그래서 보정 3종을 코드에 박는다.
 *
 *   ① 미처리일 제외 — GA4 「지난 28일」 기본 창은 항상 집계가 안 끝난 마지막 날을 문다.
 *      판별식: PV/세션 ≥ 1.5 인데 참여율 < 20% 이면 미처리다(구조적으로 불가능한 조합 —
 *      페이지를 2장 이상 본 세션은 정의상 전부 참여 세션이므로).
 *   ② landingPage="(not set)" 제외 — page_view 이벤트만 유실된 «진짜 사람» 세션이다.
 *      user_engagement는 찍히는데 page_view가 0이라 GA가 «참여 0»으로 센다.
 *      상세 = 메모리 ga4-pageview-loss-not-set-landing.
 *   ③ 봇 국가 제외 — 로케일 지표 한정. 아래 BOT_COUNTRIES 주석 참조.
 *
 * 🔴 규칙을 바꾸면 과거 행과 비교가 깨진다. 바꿔야 하면 RULES_VERSION을 올리고
 *    로그에 새 블록을 시작하라. 조용히 바꾸지 마라.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, appendFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { google } from 'googleapis';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const RULES_VERSION = 1;
const DRY = process.argv.includes('--dry');

/**
 * 봇 국가. 2026-08-28 실측 지문 — 이 넷이 동시에 맞으면 사람이 아니다:
 *   ① 465세션 / 466PV = 세션당 정확히 1.00 (사람은 1.98)
 *   ② 466PV 전체의 참여시간 합계가 27초
 *   ③ Chrome + Macintosh 단일 · 100% (direct)
 *   ④ 화면 해상도 1366×1366 — 정사각형 모니터는 실재하지 않는다(헤드리스 뷰포트)
 * 번역본 PV의 46%가 이것이었고, 걷어내면 해외 독자 체류가 0:34 → 1:03으로 바뀐다.
 * ⚠ 국가는 언제든 옮겨갈 수 있다. 그래서 아래 «봇 감시» 절이 매 회차 **행동 기준으로 후보를
 *   다시 뽑아** 이 목록이 낡았는지 스스로 드러나게 한다. 목록에 손대는 건 사람이 판단한다.
 * ⚠ 해상도 1366×1366은 판별 지문으로 쓰지 마라 — 2026-08-28 실행에서 90개국에 걸려
 *   오탐만 90건 나왔다. 판별력은 «PV/세션 ≈ 1.0 + PV당 체류 ≈ 0»이라는 행동에 있다.
 */
const BOT_COUNTRIES = ['Singapore'];

// ── env ──
for (const line of readFileSync(join(ROOT, '.env.local'), 'utf8').split(/\r?\n/)) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
  if (m && process.env[m[1]] === undefined) {
    let v = m[2];
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    process.env[m[1]] = v;
  }
}
const PROP = process.env.GA_PROPERTY_ID;
const SITE = process.env.GSC_SITE_URL;
if (!PROP || !SITE) { console.error('✖ GA_PROPERTY_ID / GSC_SITE_URL 미설정'); process.exit(1); }

const gaAuth = new google.auth.GoogleAuth({ keyFile: process.env.GSC_SA_KEY_PATH, scopes: ['https://www.googleapis.com/auth/analytics.readonly'] });
const ga = google.analyticsdata({ version: 'v1beta', auth: gaAuth });
const scAuth = new google.auth.GoogleAuth({ keyFile: process.env.GSC_SA_KEY_PATH, scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] });
const sc = google.searchconsole({ version: 'v1', auth: scAuth });

const LOCALES = new Set(['en','ja','es','zh','zh-hant','ar','pt','id','ms','vi','hi','de','tr',
  'fr','ru','it','pl','th','fa','sw','bn','ro','fil','uk','he']);
const localeOfPath = (p) => { const s = String(p).split('?')[0].split('/').filter(Boolean)[0] || ''; return LOCALES.has(s.toLowerCase()) ? s.toLowerCase() : 'ko'; };
const localeOfUrl = (u) => { const m = String(u).match(/holdemmaster\.com\/([^/?#]+)/i); const s = m ? m[1].toLowerCase() : ''; return LOCALES.has(s) ? s : 'ko'; };
const pct = (x) => (x * 100).toFixed(1);
const mmss = (s) => { s = Math.round(s || 0); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
const ymd = (d) => d.toISOString().slice(0, 10);
const shift = (iso, n) => { const d = new Date(iso + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return ymd(d); };

async function gaRun(dims, mets, { range, filter, limit = 20000 } = {}) {
  const res = await ga.properties.runReport({
    property: `properties/${PROP}`,
    requestBody: {
      dateRanges: [range], dimensions: dims.map((name) => ({ name })),
      metrics: mets.map((name) => ({ name })), limit,
      ...(filter ? { dimensionFilter: filter } : {}),
    },
  });
  const dn = (res.data.dimensionHeaders || []).map((h) => h.name);
  return (res.data.rows || []).map((r) => {
    const o = {};
    r.dimensionValues.forEach((v, i) => (o[dn[i]] = v.value));
    r.metricValues.forEach((v, i) => (o[mets[i]] = +v.value));
    return o;
  });
}
async function scRun(dims, startDate, endDate) {
  const rows = []; let startRow = 0;
  for (;;) {
    const res = await sc.searchanalytics.query({ siteUrl: SITE, requestBody: { startDate, endDate, dimensions: dims, rowLimit: 25000, startRow, dataState: 'final' } });
    const b = res.data.rows || []; rows.push(...b);
    if (b.length < 25000) break; startRow += 25000;
  }
  return rows;
}
const ORGANIC = { fieldName: 'sessionDefaultChannelGroup', stringFilter: { value: 'Organic Search' } };
const NOT_SET = { fieldName: 'landingPagePlusQueryString', stringFilter: { value: '(not set)' } };
const organicRealPages = { andGroup: { expressions: [{ filter: ORGANIC }, { notExpression: { filter: NOT_SET } }] } };

/**
 * ① 집계가 끝난 마지막 날을 찾는다 (최근 → 과거로 훑으며 미처리일을 건너뛴다)
 *
 * 🔴 판별을 «절대 기준»으로 두면 새는 구멍이 있다. 첫 구현은 «PV/세션 ≥1.5 인데 참여율 <20%»만
 *    봤는데, **오늘(부분 집계)은 PV/세션이 0.87로 낮게 나와 그 그물을 그대로 빠져나갔다.**
 *    그래서 두 겹으로 막는다: ⓐ 오늘은 무조건 제외(정의상 부분 집계다)
 *    ⓑ 직전 14일 참여율의 **중앙값 대비 절반 미만**이면 미처리로 본다(상대 기준이라 계절·요일에 안 흔들린다).
 */
async function findLastConfirmedDay() {
  const today = ymd(new Date());
  const rows = await gaRun(['date'], ['sessions', 'engagedSessions', 'screenPageViews'], { range: { startDate: shift(today, -20), endDate: today } });
  const norm = rows.map((r) => ({
    iso: `${r.date.slice(0,4)}-${r.date.slice(4,6)}-${r.date.slice(6,8)}`,
    s: r.sessions, e: r.engagedSessions, pv: r.screenPageViews,
    rate: r.sessions ? r.engagedSessions / r.sessions : 0,
  })).sort((a, b) => b.iso.localeCompare(a.iso));

  // 기준선 = 5일 전 ~ 18일 전 구간의 참여율 중앙값 (최근 미처리 구간을 기준선에 넣지 않는다)
  const base = norm.filter((r) => r.iso <= shift(today, -5) && r.iso >= shift(today, -18) && r.s >= 10)
    .map((r) => r.rate).sort((a, b) => a - b);
  if (base.length < 5) throw new Error('기준선을 만들 표본이 부족하다');
  const median = base[Math.floor(base.length / 2)];

  const skipped = [];
  for (const r of norm) {
    if (r.iso >= today) { skipped.push(`${r.iso}(오늘 = 부분집계)`); continue; }
    if (r.s < 10) { skipped.push(`${r.iso}(세션 ${r.s} 표본부족)`); continue; }
    if (r.rate < median * 0.5) { skipped.push(`${r.iso}(참여율 ${pct(r.rate)}% < 기준선 ${pct(median)}%의 절반 = 미처리)`); continue; }
    return { day: r.iso, skipped, median };
  }
  throw new Error('최근 20일 안에 확정된 날이 없다 — GA 처리 지연이 비정상이다');
}

async function main() {
  const { day: END, skipped, median } = await findLastConfirmedDay();
  const CUR = { startDate: shift(END, -27), endDate: END };
  const PRV = { startDate: shift(END, -55), endDate: shift(END, -28) };
  // GSC는 확정 지연이 별도라 3일 더 뒤로
  const G_END = shift(END, -3);
  const GCUR = [shift(G_END, -27), G_END];
  const GPRV = [shift(G_END, -55), shift(G_END, -28)];

  const L = [];
  const say = (s = '') => { L.push(s); console.log(s); };

  say('='.repeat(96));
  say(`애널리틱스 스냅샷  ·  규칙 v${RULES_VERSION}  ·  확정 마지막날 ${END}`);
  say('='.repeat(96));
  say(`  기준선 참여율 중앙값 ${pct(median)}% (이 값의 절반 미만인 날은 미처리로 본다)`);
  if (skipped.length) say(`  ⏭  건너뛴 날: ${skipped.join(' · ')}`);
  say(`  GA  현재 ${CUR.startDate}~${CUR.endDate}  vs  직전 ${PRV.startDate}~${PRV.endDate}`);
  say(`  GSC 현재 ${GCUR[0]}~${GCUR[1]}  vs  직전 ${GPRV[0]}~${GPRV[1]}`);

  // ── GA: 오가닉 총계 (보정 전/후 둘 다 남긴다 — 나중에 규칙을 의심할 수 있게) ──
  const snap = { rulesVersion: RULES_VERSION, lastConfirmedDay: END, skippedDays: skipped, windows: { gaCur: CUR, gaPrv: PRV, gscCur: GCUR, gscPrv: GPRV } };
  const totals = {};
  for (const [k, range] of [['cur', CUR], ['prv', PRV]]) {
    const raw = (await gaRun(['sessionDefaultChannelGroup'], ['sessions','engagedSessions','userEngagementDuration','screenPageViews'], { range, filter: { filter: ORGANIC } }))[0] || { sessions:0, engagedSessions:0, userEngagementDuration:0, screenPageViews:0 };
    const adj = (await gaRun(['sessionDefaultChannelGroup'], ['sessions','engagedSessions','userEngagementDuration','screenPageViews'], { range, filter: organicRealPages }))[0] || raw;
    totals[k] = {
      raw: { sessions: raw.sessions, rate: raw.sessions ? raw.engagedSessions / raw.sessions : 0 },
      sessions: adj.sessions,
      rate: adj.sessions ? adj.engagedSessions / adj.sessions : 0,
      secPerSession: adj.sessions ? adj.userEngagementDuration / adj.sessions : 0,
      pvPerSession: adj.sessions ? adj.screenPageViews / adj.sessions : 0,
      notSetDropped: raw.sessions - adj.sessions,
    };
  }
  snap.organic = totals;
  say('\n── 오가닉 총계 (① 미처리일 + ② (not set) 랜딩 보정 후) ──');
  say(`  세션        ${totals.cur.sessions}  ←  ${totals.prv.sessions}`);
  say(`  참여율      ${pct(totals.cur.rate)}%  ←  ${pct(totals.prv.rate)}%    (보정 전이면 ${pct(totals.cur.raw.rate)}% ← ${pct(totals.prv.raw.rate)}%)`);
  say(`  세션당체류  ${mmss(totals.cur.secPerSession)}  ←  ${mmss(totals.prv.secPerSession)}`);
  say(`  PV/세션     ${totals.cur.pvPerSession.toFixed(2)}  ←  ${totals.prv.pvPerSession.toFixed(2)}`);
  say(`  🔴 (not set)로 버려진 세션  현재 ${totals.cur.notSetDropped} · 직전 ${totals.prv.notSetDropped}`);

  // ── 봇 감시 — 지문이 아니라 «행동»으로 잡는다 ──
  // ⚠ 첫 구현은 해상도 1366x1366을 지문으로 썼다가 폐기했다: 2026-08-28 실행에서
  //   그 해상도가 90개국(Brazil 63·Vietnam 39·Pakistan 38…)에 걸려 오탐이 90건이었다.
  //   실제 판별력은 «세션당 PV가 1.0에 붙어 있고 PV당 체류가 0에 가깝다»는 행동에 있다.
  //   사람은 PV/세션 1.9대·PV당 체류 50초대다. 이 기준은 국가가 바뀌어도 따라간다.
  const ctyRows = await gaRun(['country'], ['sessions','screenPageViews','userEngagementDuration'], { range: CUR, limit: 500 });
  const suspects = ctyRows
    .map((r) => ({ country: r.country, s: r.sessions, pv: r.screenPageViews, sec: r.userEngagementDuration,
      pvPer: r.screenPageViews / Math.max(r.sessions, 1), secPerPv: r.userEngagementDuration / Math.max(r.screenPageViews, 1) }))
    .filter((r) => r.s >= 20 && r.pvPer < 1.15 && r.secPerPv < 3)
    .sort((a, b) => b.s - a.s);
  snap.bot = { rule: 'sessions>=20 && PV/session<1.15 && sec/PV<3', suspects, excluded: BOT_COUNTRIES };
  say('\n── 봇 감시 (행동 기준: 세션 20+ · PV/세션 <1.15 · PV당 체류 <3초) ──');
  if (!suspects.length) say('  해당 없음');
  for (const r of suspects)
    say(`  ${r.country.padEnd(20)} 세션 ${String(r.s).padStart(4)} · PV/세션 ${r.pvPer.toFixed(2)} · PV당 ${r.secPerPv.toFixed(1)}초  ${BOT_COUNTRIES.includes(r.country) ? '(제외 중)' : '⚠ 목록에 없음 → BOT_COUNTRIES 추가 검토'}`);
  const stale = BOT_COUNTRIES.filter((c) => !suspects.some((s) => s.country === c));
  if (stale.length) say(`  🪶 제외 목록에 있으나 이번 창에서 봇 행동이 안 보인 국가: ${stale.join(', ')} — 목록이 낡았을 수 있다`);

  // ── 로케일별 «실 독자» (③ 봇 국가 제외) ──
  const pageRows = await gaRun(['pagePath','country'], ['screenPageViews','userEngagementDuration'], { range: CUR });
  const byLoc = {};
  for (const r of pageRows) {
    const loc = localeOfPath(r.pagePath);
    const o = (byLoc[loc] ||= { pv: 0, sec: 0, botPv: 0 });
    if (BOT_COUNTRIES.includes(r.country)) { o.botPv += r.screenPageViews; continue; }
    o.pv += r.screenPageViews; o.sec += r.userEngagementDuration;
  }
  snap.locales = byLoc;
  say('\n── 로케일별 실 독자 (봇 국가 제외) ──');
  say('  로케일    실PV   봇PV   PV당체류');
  for (const [loc, v] of Object.entries(byLoc).sort((a, b) => b[1].pv - a[1].pv))
    say(`  ${loc.padEnd(9)} ${String(v.pv).padStart(5)} ${String(v.botPv).padStart(6)}   ${mmss(v.sec / Math.max(v.pv, 1))}`);

  // ── GSC ──
  const [gc, gp] = [await scRun(['page'], GCUR[0], GCUR[1]), await scRun(['page'], GPRV[0], GPRV[1])];
  const rollup = (rows) => {
    const g = {};
    for (const r of rows) {
      const loc = localeOfUrl(r.keys[0]);
      const o = (g[loc] ||= { imp: 0, clk: 0, wpos: 0, pages: 0 });
      o.imp += r.impressions; o.clk += r.clicks; o.wpos += r.position * r.impressions; o.pages++;
    }
    return g;
  };
  const gcur = rollup(gc), gprv = rollup(gp);
  const sumNonKo = (g) => Object.entries(g).filter(([l]) => l !== 'ko')
    .reduce((a, [, v]) => ({ imp: a.imp + v.imp, clk: a.clk + v.clk, wpos: a.wpos + v.wpos, pages: a.pages + v.pages }), { imp: 0, clk: 0, wpos: 0, pages: 0 });
  const koC = gcur.ko || { imp:0, clk:0, wpos:0, pages:0 }, koP = gprv.ko || { imp:0, clk:0, wpos:0, pages:0 };
  const tC = sumNonKo(gcur), tP = sumNonKo(gprv);
  snap.gsc = { ko: koC, koPrev: koP, nonKo: tC, nonKoPrev: tP, byLocale: gcur };
  say('\n── GSC ──');
  say(`  ko       노출 ${koC.imp} ← ${koP.imp} · 클릭 ${koC.clk} ← ${koP.clk} · CTR ${(koC.clk/Math.max(koC.imp,1)*100).toFixed(2)}% · r${(koC.wpos/Math.max(koC.imp,1)).toFixed(1)} · 노출페이지 ${koC.pages} ← ${koP.pages}`);
  say(`  번역본계 노출 ${tC.imp} ← ${tP.imp} · 클릭 ${tC.clk} ← ${tP.clk} · CTR ${(tC.clk/Math.max(tC.imp,1)*100).toFixed(2)}% · r${(tC.wpos/Math.max(tC.imp,1)).toFixed(1)} · 노출페이지 ${tC.pages} ← ${tP.pages}`);

  if (DRY) { say('\n(--dry: 파일 안 씀)'); return; }

  // ── 저장 ──
  const snapDir = join(ROOT, 'docs', 'analytics-snapshots');
  mkdirSync(snapDir, { recursive: true });
  writeFileSync(join(snapDir, `${END}.json`), JSON.stringify(snap, null, 2), 'utf8');
  writeFileSync(join(snapDir, `${END}.txt`), L.join('\n'), 'utf8');

  const logPath = join(ROOT, 'docs', 'analytics-log.md');
  if (!existsSync(logPath)) {
    writeFileSync(logPath, `# 애널리틱스 추세 로그 (보정 규칙 고정)

> \`npm run analytics\`가 자동으로 한 행씩 추가한다. **손으로 고치지 마라** — 비교가 깨진다.
> 보정 3종(미처리일·(not set) 랜딩·봇 국가)의 근거와 판별식은 \`scripts/analytics-snapshot.mjs\` 머리 주석.
> 원본 스냅샷 = \`docs/analytics-snapshots/<확정일>.json\`

## 규칙 v${RULES_VERSION}

| 확정일 | 오가닉 세션 | 참여율(보정) | 참여율(보정전) | 세션당체류 | PV/세션 | (not set) 손실 | ko 노출 | ko 클릭 | ko 노출페이지 | 번역본 노출 | 번역본 클릭 | 번역본 실PV | 번역본 PV당체류 | 봇PV |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
`, 'utf8');
  }
  const nonKoPv = Object.entries(byLoc).filter(([l]) => l !== 'ko').reduce((a, [, v]) => ({ pv: a.pv + v.pv, sec: a.sec + v.sec, bot: a.bot + v.botPv }), { pv: 0, sec: 0, bot: 0 });
  const row = `| ${END} | ${totals.cur.sessions} | ${pct(totals.cur.rate)}% | ${pct(totals.cur.raw.rate)}% | ${mmss(totals.cur.secPerSession)} | ${totals.cur.pvPerSession.toFixed(2)} | ${totals.cur.notSetDropped} | ${koC.imp} | ${koC.clk} | ${koC.pages} | ${tC.imp} | ${tC.clk} | ${nonKoPv.pv} | ${mmss(nonKoPv.sec / Math.max(nonKoPv.pv, 1))} | ${nonKoPv.bot} |\n`;
  appendFileSync(logPath, row, 'utf8');
  say(`\n✅ 저장: docs/analytics-snapshots/${END}.json · docs/analytics-log.md 1행 추가`);
}
main().catch((e) => { console.error('✖', e?.errors?.[0]?.message || e?.message || e); process.exit(1); });
