/**
 * GSC 색인 실태 전수 점검 — "우리 글이 구글에 실제로 몇 편이나 들어가 있나"
 *
 * 왜 만들었나 (2026-08-08)
 *   `/blog/holdem-tournament-buy-in-cost`가 노출 0이길래 카니발을 의심했는데,
 *   실제로는 **구글이 크롤조차 안 한 상태**였다(Discovered - currently not indexed).
 *   글은 멀쩡했다 — 200 OK · 본문 13,797자 · h2 14개 · canonical 정상 · 내부링크 17회.
 *   즉 «순위가 낮아서»가 아니라 «아예 없어서» 노출이 0이었다.
 *   페이지 총계(gsc-fetch)로도, 쿼리 조회(gsc-page)로도 이건 안 보인다 —
 *   **색인이 안 된 페이지는 GSC 실적 데이터에 아예 등장하지 않기 때문이다.**
 *
 * 사용법
 *   node scripts/gsc-index-audit.mjs                 # 사이트맵의 한국어 블로그 전편
 *   node scripts/gsc-index-audit.mjs --all           # 사이트맵 전체(다국어 포함, 느림)
 *   node scripts/gsc-index-audit.mjs --limit 20
 *   node scripts/gsc-index-audit.mjs --tools         # 도구·허브 라우트만
 *
 * 쿼터: URL Inspection API는 사이트당 **하루 2,000회 / 분당 600회**.
 *       한국어 57편이면 여유롭다. --all(609개)도 하루치 안에 들어간다.
 */
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
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

const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
const val = (f, d) => { const i = argv.indexOf(f); return i >= 0 ? argv[i + 1] : d; };

const SITE = process.env.GSC_SITE_URL;
const auth = process.env.GSC_SA_KEY_JSON
  ? new google.auth.GoogleAuth({ credentials: JSON.parse(process.env.GSC_SA_KEY_JSON), scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] })
  : new google.auth.GoogleAuth({ keyFile: process.env.GSC_SA_KEY_PATH, scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] });
const sc = google.searchconsole({ version: 'v1', auth });

// --- 대상 URL 목록 ---------------------------------------------------
const sitemapPath = join(ROOT, 'public', 'sitemap.xml');
const xml = readFileSync(sitemapPath, 'utf8');
let urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const isKoBlog = (u) => /holdemmaster\.com\/blog\//.test(u);
const isTool = (u) => /holdemmaster\.com\/(calculator|quiz|win-rate-quiz|glossary|hand-chart|ranking|rules|strategy|tournaments|pub|holdem-practice|hands)(\/|$)/.test(u);

// ★2026-08-30 --prefix 신설 — 로케일 하나만 재는 자리가 계속 나온다(25개 로케일).
//   `--all`(609개·10~20분)은 로케일 한 곳을 확인하려고 돌리기엔 너무 무겁고,
//   그때마다 임시 스크립트를 만들면 §12 정리 대상만 늘어난다.
//   예: node scripts/gsc-index-audit.mjs --prefix /en/blog/
const prefix = val('--prefix', '');
if (prefix) urls = urls.filter((u) => u.replace('https://www.holdemmaster.com', '').startsWith(prefix));
else if (has('--tools')) urls = urls.filter(isTool);
else if (!has('--all')) urls = urls.filter(isKoBlog);

const limit = Number(val('--limit', 0));
if (limit) urls = urls.slice(0, limit);

console.log(`대상 ${urls.length}개 URL · 속성 ${SITE}`);
console.log('(URL Inspection API는 URL당 1~2초 걸린다 — 57편이면 약 1~2분)\n');

// --- 조회 ------------------------------------------------------------
const rows = [];
let done = 0;
for (const inspectionUrl of urls) {
  try {
    const res = await sc.urlInspection.index.inspect({ requestBody: { inspectionUrl, siteUrl: SITE } });
    const r = res.data.inspectionResult?.indexStatusResult || {};
    rows.push({
      url: inspectionUrl,
      verdict: r.verdict || '?',
      coverage: r.coverageState || '?',
      lastCrawl: r.lastCrawlTime || null,
      indexing: r.indexingState || '?',
      googleCanonical: r.googleCanonical || null,
      userCanonical: r.userCanonical || null,
    });
  } catch (e) {
    const code = e?.code || e?.response?.status;
    rows.push({ url: inspectionUrl, verdict: 'ERROR', coverage: `오류 ${code || ''} ${e?.errors?.[0]?.message || e?.message || ''}`.trim(), lastCrawl: null });
    if (code === 429) { console.log('\n⚠ 429 쿼터 초과 — 여기서 멈춘다.'); break; }
  }
  done++;
  if (done % 10 === 0) process.stdout.write(`  … ${done}/${urls.length}\n`);
}

// --- 집계 ------------------------------------------------------------
const byCoverage = {};
for (const r of rows) byCoverage[r.coverage] = (byCoverage[r.coverage] || 0) + 1;

console.log('\n' + '='.repeat(76));
console.log('색인 커버리지 집계');
console.log('='.repeat(76));
for (const [k, v] of Object.entries(byCoverage).sort((a, b) => b[1] - a[1])) {
  const bad = !/Submitted and indexed|Indexed, not submitted/.test(k);
  console.log(`  ${bad ? '🔴' : '✅'} ${String(v).padStart(3)}편  ${k}`);
}

const notIndexed = rows.filter((r) => !/Submitted and indexed|Indexed, not submitted/.test(r.coverage));
if (notIndexed.length) {
  console.log('\n' + '='.repeat(76));
  console.log(`색인 안 된 URL ${notIndexed.length}개 — 이것들은 GSC 실적에 «아예 등장하지 않는다»`);
  console.log('='.repeat(76));
  for (const r of notIndexed) {
    console.log(`  ${r.url.replace('https://www.holdemmaster.com', '')}`);
    console.log(`      ${r.coverage}${r.lastCrawl ? ` · 마지막 크롤 ${r.lastCrawl.slice(0, 10)}` : ' · 크롤 기록 없음'}`);
    if (r.googleCanonical && r.userCanonical && r.googleCanonical !== r.userCanonical) {
      console.log(`      ⚠ canonical 불일치 — 구글: ${r.googleCanonical.replace('https://www.holdemmaster.com', '')}`);
    }
  }
}

// 크롤이 오래된 순 (재크롤 우선순위 판단용)
const crawled = rows.filter((r) => r.lastCrawl).sort((a, b) => a.lastCrawl.localeCompare(b.lastCrawl));
if (crawled.length) {
  console.log('\n마지막 크롤이 오래된 5개:');
  for (const r of crawled.slice(0, 5)) console.log(`  ${r.lastCrawl.slice(0, 10)}  ${r.url.replace('https://www.holdemmaster.com', '')}`);
}

const out = join(ROOT, 'docs', 'gsc-tracking', `index-audit-${new Date().toISOString().slice(0, 10)}.json`);
try {
  writeFileSync(out, JSON.stringify({ site: SITE, total: rows.length, byCoverage, rows }, null, 2), 'utf8');
  console.log(`\n저장: ${out.replace(ROOT, '.')}`);
} catch (e) {
  console.log('\n(저장 건너뜀:', e.message, ')');
}
