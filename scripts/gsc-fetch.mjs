/**
 * GSC Search Console API → CSV 자동 수집기 (수동 내보내기 대체)
 *
 * 하는 일:
 *   Search Console API로 최근 N일(기본 28) 검색어/페이지 데이터를 받아
 *   기존 gsc-analyze.mjs가 읽는 CSV 포맷으로 저장한 뒤, 곧바로 분석까지 실행.
 *   → "이번 주 GSC" = 이 스크립트 한 번. 수동 CSV 내보내기 불필요.
 *
 * 사용법:
 *   node scripts/gsc-fetch.mjs            # 최근 28일 (권장, 추세선)
 *   node scripts/gsc-fetch.mjs --days 7   # 최근 7일 (조기 신호)
 *   node scripts/gsc-fetch.mjs --both     # 28일 + 7일 둘 다
 *
 * 필요 설정 (.env.local 또는 환경변수):
 *   GSC_SITE_URL      = sc-domain:holdemmaster.com   (도메인 속성)
 *                       또는 https://holdemmaster.com/ (URL-접두어 속성)
 *   GSC_SA_KEY_PATH   = C:/Users/하봄/.secrets/gsc-key.json  (서비스계정 JSON 경로)
 *     ↑ 또는 GSC_SA_KEY_JSON = {...json 전체 한 줄...}  (Vercel/CI용)
 *   GSC_LAG_DAYS      = 3 (선택, 기본 3 — GSC 데이터 확정 지연 보정. UI "지난 28일"과 정합)
 *
 * 서비스계정 준비(1회, Google Cloud):
 *   1) console.cloud.google.com → 새 프로젝트
 *   2) API 라이브러리 → "Google Search Console API" 사용 설정
 *   3) 사용자 인증정보 → 서비스계정 생성 → 키 추가(JSON) 다운로드
 *   4) search.google.com/search-console → 속성 → 설정 → 사용자·권한 →
 *      서비스계정 이메일(xxx@yyy.iam.gserviceaccount.com)을 "제한적(읽기)"으로 추가
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { google } from 'googleapis';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── .env.local 로더 (Next는 자동로드하지만 단독 node 스크립트는 아님) ──
function loadEnvLocal() {
  const p = join(ROOT, '.env.local');
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    const key = m[1];
    let val = m[2];
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}
loadEnvLocal();

// ── 인자 파싱 ──
const args = process.argv.slice(2);
const both = args.includes('--both');
const daysArg = (() => {
  const i = args.indexOf('--days');
  return i >= 0 && args[i + 1] ? parseInt(args[i + 1], 10) : null;
})();
const windows = both ? [28, 7] : [daysArg || 28];

// ── 설정 검증 ──
const SITE = process.env.GSC_SITE_URL;
if (!SITE) {
  console.error('✖ GSC_SITE_URL 미설정. .env.local에 추가하세요.');
  console.error('  예) GSC_SITE_URL=sc-domain:holdemmaster.com');
  console.error('      또는 GSC_SITE_URL=https://holdemmaster.com/');
  process.exit(1);
}
const LAG = parseInt(process.env.GSC_LAG_DAYS || '3', 10);

function getAuth() {
  const scopes = ['https://www.googleapis.com/auth/webmasters.readonly'];
  if (process.env.GSC_SA_KEY_JSON) {
    const creds = JSON.parse(process.env.GSC_SA_KEY_JSON);
    return new google.auth.GoogleAuth({ credentials: creds, scopes });
  }
  const keyFile = process.env.GSC_SA_KEY_PATH;
  if (!keyFile || !existsSync(keyFile)) {
    console.error('✖ 서비스계정 키를 못 찾음.');
    console.error('  .env.local에 GSC_SA_KEY_PATH=<JSON 경로> 또는 GSC_SA_KEY_JSON=<json> 설정.');
    process.exit(1);
  }
  return new google.auth.GoogleAuth({ keyFile, scopes });
}

function ymd(d) {
  return d.toISOString().slice(0, 10);
}
function daysAgo(n) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d;
}

async function fetchDim(sc, dimension, startDate, endDate) {
  const rows = [];
  let startRow = 0;
  const ROW_LIMIT = 25000;
  // 페이지네이션 (25k 초과 대비)
  for (;;) {
    const res = await sc.searchanalytics.query({
      siteUrl: SITE,
      requestBody: { startDate, endDate, dimensions: [dimension], rowLimit: ROW_LIMIT, startRow },
    });
    const batch = res.data.rows || [];
    rows.push(...batch);
    if (batch.length < ROW_LIMIT) break;
    startRow += ROW_LIMIT;
  }
  return rows;
}

/** GSC 한국어 내보내기와 동일한 CSV 문자열 생성 (gsc-analyze가 헤더로 자동판별) */
function toCsv(headerLabel, rows) {
  const out = [`${headerLabel},클릭수,노출수,CTR,평균 게재순위`];
  for (const r of rows) {
    const name = String(r.keys[0]).replace(/[,\r\n]/g, ' '); // 쉼표/줄바꿈 제거(naive 파서 호환)
    const clk = r.clicks || 0;
    const imp = r.impressions || 0;
    const ctr = ((r.ctr || 0) * 100).toFixed(2) + '%';
    const pos = (r.position || 0).toFixed(1);
    out.push(`${name},${clk},${imp},${ctr},${pos}`);
  }
  return out.join('\n') + '\n';
}

async function run() {
  const auth = getAuth();
  const sc = google.searchconsole({ version: 'v1', auth });

  for (const N of windows) {
    const endDate = ymd(daysAgo(LAG));
    const startDate = ymd(daysAgo(LAG + N - 1)); // N일 구간(양끝 포함)
    console.log(`\n▶ ${SITE}  ·  ${startDate} ~ ${endDate}  (${N}일)`);

    let queries, pages;
    try {
      queries = await fetchDim(sc, 'query', startDate, endDate);
      pages = await fetchDim(sc, 'page', startDate, endDate);
    } catch (e) {
      const code = e?.code || e?.response?.status;
      if (code === 403) {
        console.error('✖ 403 권한 없음 — 서비스계정 이메일을 GSC 속성 사용자로 추가했는지 확인하세요.');
      } else if (code === 404) {
        console.error(`✖ 404 — GSC_SITE_URL(${SITE})이 정확한지 확인 (도메인 속성은 sc-domain: 접두어).`);
      } else {
        console.error('✖ API 오류:', e?.message || e);
      }
      process.exit(1);
    }

    const outDir = join(ROOT, 'docs', 'gsc-tracking', 'data', `${endDate}-${N}d`);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'queries.csv'), toCsv('인기 검색어', queries), 'utf8');
    writeFileSync(join(outDir, 'pages.csv'), toCsv('인기 페이지', pages), 'utf8');
    console.log(`  저장: ${outDir}  (검색어 ${queries.length} · 페이지 ${pages.length})`);

    // 곧바로 기존 분석기 실행
    try {
      const out = execFileSync('node', [join('scripts', 'gsc-analyze.mjs'), outDir], {
        cwd: ROOT, encoding: 'utf8',
      });
      console.log(out);
    } catch (e) {
      console.error('분석기 실행 실패:', e?.message || e);
    }
  }
}

run().catch((e) => {
  console.error('✖', e?.message || e);
  process.exit(1);
});
