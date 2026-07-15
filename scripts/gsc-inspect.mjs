/**
 * GSC URL Inspection API — 구글의 실제 색인 판정 조회
 *
 * 사용법:
 *   node scripts/gsc-inspect.mjs <URL> [<URL> ...]
 *   예: node scripts/gsc-inspect.mjs https://www.holdemmaster.com/hands \
 *                                    https://www.holdemmaster.com/blog/holdem-hand-rankings
 *
 * 필요: .env.local의 GSC_SITE_URL·GSC_SA_KEY_PATH (gsc-fetch와 동일).
 *       서비스계정이 해당 속성 사용자여야 함(제한적 권한 가능).
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

const urls = process.argv.slice(2);
if (!urls.length) { console.error('사용법: node scripts/gsc-inspect.mjs <URL> ...'); process.exit(1); }
const SITE = process.env.GSC_SITE_URL;
const keyFile = process.env.GSC_SA_KEY_PATH;
const auth = process.env.GSC_SA_KEY_JSON
  ? new google.auth.GoogleAuth({ credentials: JSON.parse(process.env.GSC_SA_KEY_JSON), scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] })
  : new google.auth.GoogleAuth({ keyFile, scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] });
const sc = google.searchconsole({ version: 'v1', auth });

for (const inspectionUrl of urls) {
  console.log('\n' + '='.repeat(72));
  console.log('URL:', inspectionUrl);
  console.log('='.repeat(72));
  try {
    const res = await sc.urlInspection.index.inspect({ requestBody: { inspectionUrl, siteUrl: SITE } });
    const r = res.data.inspectionResult?.indexStatusResult || {};
    console.log('  판정(verdict)       :', r.verdict);
    console.log('  커버리지(coverage)  :', r.coverageState);
    console.log('  robots.txt          :', r.robotsTxtState);
    console.log('  색인 허용(indexing) :', r.indexingState, '  ← NOINDEX면 noindex 반영됨');
    console.log('  페이지 가져오기      :', r.pageFetchState);
    console.log('  마지막 크롤          :', r.lastCrawlTime);
    console.log('  구글 canonical      :', r.googleCanonical);
    console.log('  사용자 canonical    :', r.userCanonical);
    if (r.sitemap) console.log('  사이트맵            :', r.sitemap);
    console.log('  참조 페이지(referring):', (r.referringUrls || []).slice(0, 3));
  } catch (e) {
    const code = e?.code || e?.response?.status;
    console.log('  ✖ 오류', code || '', ':', e?.errors?.[0]?.message || e?.message);
    if (code === 403) console.log('    (URL Inspection은 속성 접근 권한 필요 — 서비스계정 권한 확인)');
  }
}
