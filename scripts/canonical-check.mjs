/**
 * canonical·robots·title 자기참조 검사 — **빌드 산출물** 기준.
 *
 * 사용법:
 *   npm run build && npm run canonical:check
 *
 * ★왜 소스가 아니라 산출물인가 (2026-08-02 사고):
 *   `components/seo.tsx`는 useEffect로만 메타를 바꾸는 **클라이언트** 컴포넌트다. 소스만 보면
 *   각 페이지가 title·canonical을 제대로 세팅하는 것처럼 보이지만, 크롤러가 받는 HTML에는
 *   루트 layout의 기본값(홈 제목 + canonical=홈 절대주소)이 남아 있었다.
 *   `/pub`·`/ranking`·`/quiz`·`/rules/*`·`/strategy`·`/glossary` 6+개가 전부 홈을 표준으로 지목 중이었다.
 *   → **소스로는 원리상 못 잡는다. 산출물로만 잡힌다.** (FAQ 스키마와 같은 교훈)
 *
 * 무엇을 잡는가:
 *   C-1  canonical이 자기 URL이 아님 (의도된 통합이 아니면 전부 결함)
 *   C-2  canonical 태그 자체가 없음
 *   C-3  루트 기본 제목이 그대로 남음 (= 서버 metadata 미선언 신호)
 *   C-4  noindex인데 canonical이 남을 가리킴 (모순된 신호)
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APP = join(ROOT, '.next', 'server', 'app');
const SITE = 'https://www.holdemmaster.com';
const ROOT_DEFAULT_TITLE = '홀덤마스터 — 텍사스 홀덤 완벽 가이드';

if (!existsSync(APP)) {
  console.error('🔴 .next/server/app 이 없다. `npm run build` 를 먼저 돌려라.');
  process.exit(1);
}

/**
 * 다국어는 별도 규칙(hreflang)이 있어 이 검사에서 제외 — KO 라우트만 본다.
 * ★그 「별도 검사」는 2026-08-10까지 **존재하지 않았다**(이 주석이 없는 검사를 가리키고 있었다).
 *   이제 `scripts/check-hreflang.mjs`가 그 자리를 맡는다 — `npm run check:hreflang`,
 *   postbuild에 연결돼 로컬 빌드마다 돈다.
 */
const SKIP_LOCALE = /^\/(en|ja|zh|zh-hant|es|de|pt|ar|id|ms|vi|hi|tr|fr|it|ru|pl|th|fil|he|fa|uk|ro|sw|bn)(\/|$)/;

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.html')) files.push(p);
  }
})(APP);

const grab = (html, re) => { const m = html.match(re); return m ? m[1] : null; };

const findings = [];
let checked = 0;
for (const f of files) {
  let route = '/' + relative(APP, f).replace(/\\/g, '/').replace(/\.html$/, '');
  if (route === '/index') route = '/';
  if (SKIP_LOCALE.test(route)) continue;
  // Next 내부 산출물(_not-found 등)은 실제 라우트가 아니다 — 자기참조를 요구할 대상이 아니다.
  if (route.startsWith('/_')) continue;
  checked++;

  const html = readFileSync(f, 'utf8');
  const canonical = grab(html, /<link rel="canonical" href="([^"]*)"/);
  const robots = grab(html, /<meta name="robots" content="([^"]*)"/) || '';
  const title = grab(html, /<title>([^<]*)<\/title>/) || '';
  const expected = route === '/' ? SITE : `${SITE}${route}`;
  const noindex = /noindex/.test(robots);

  if (!canonical) findings.push({ route, code: 'C-2', msg: 'canonical 태그 없음' });
  else if (canonical.replace(/\/$/, '') !== expected.replace(/\/$/, '')) {
    findings.push({
      route,
      code: noindex ? 'C-4' : 'C-1',
      msg: `canonical → ${canonical.replace(SITE, '') || '/'} (자기 자신이 아님${noindex ? ', 게다가 noindex' : ''})`,
    });
  }
  // 제목은 **색인되는 페이지만** 따진다. noindex 도구 페이지가 기본 제목인 건 SERP에
  // 나가지 않으므로 결함이 아니다 — 여기서 울리면 진짜 결함이 소음에 묻힌다.
  if (!noindex && title === ROOT_DEFAULT_TITLE && route !== '/') {
    findings.push({ route, code: 'C-3', msg: '루트 기본 제목 그대로 = 서버 metadata 미선언' });
  }
}

/**
 * ── C-5. 사이트맵 ↔ noindex 모순 (2026-08-04 추가) ─────────────────────────
 *
 * 사이트맵에 올린 URL이 정작 noindex면 서치콘솔에 "사이트맵에 포함되었지만 noindex" 오류가
 * 뜨고, 그 사이트맵 전체의 신뢰도가 깎인다. 반대 방향(색인 가능한데 사이트맵에 없음)은
 * 발견이 늦어질 뿐이라 🟠로 따로 센다.
 *
 * ★이 검사는 **다국어도 본다.** 위 C-1~C-4는 KO만 보지만, 사이트맵 누락/모순은 2026-08-04에
 *   실제로 EN에서 터졌다(EN 도구 페이지가 하나도 사이트맵에 없었다).
 * ★소스가 아니라 산출물 기준이어야 하는 이유는 이 파일 맨 위 주석과 같다 —
 *   robots는 page.tsx만 봐서는 확정할 수 없다(레이아웃 상속·클라이언트 덮어쓰기).
 */
const SITEMAP = join(ROOT, 'public', 'sitemap.xml');
if (existsSync(SITEMAP)) {
  const xml = readFileSync(SITEMAP, 'utf8');
  const inSitemap = new Set(
    [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, '') || '/')
  );
  for (const f of files) {
    let route = '/' + relative(APP, f).replace(/\\/g, '/').replace(/\.html$/, '');
    if (route === '/index') route = '/';
    if (route.startsWith('/_')) continue;
    const html = readFileSync(f, 'utf8');
    const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);
    if (noindex && inSitemap.has(route)) {
      findings.push({ route, code: 'C-5', msg: 'noindex인데 사이트맵에 있다 — 사이트맵에서 뺄 것' });
    } else if (!noindex && !inSitemap.has(route) && !route.startsWith('/blog/') && !/\/blog\//.test(route)) {
      findings.push({ route, code: 'C-6', msg: '색인 가능한데 사이트맵에 없다' });
    }
  }
}

console.log(`\n${'='.repeat(84)}`);
console.log(`canonical·title 자기참조 검사 (빌드 산출물) · KO 라우트 ${checked}개`);
console.log('='.repeat(84));
if (!findings.length) {
  console.log('\n✅ 결함 없음 — 모든 KO 라우트가 자기 자신을 canonical로 지목하고 고유 제목을 갖는다.\n');
  process.exit(0);
}
const byCode = {};
for (const x of findings) (byCode[x.code] ||= []).push(x);
const LABEL = {
  'C-1': '🔴 canonical이 자기 URL이 아님',
  'C-2': '🔴 canonical 태그 없음',
  'C-3': '🟠 루트 기본 제목 그대로',
  'C-4': '🔴 noindex인데 canonical이 남을 가리킴 (모순 신호)',
  'C-5': '🔴 noindex인데 사이트맵에 있음 (서치콘솔 오류)',
  'C-6': '🟠 색인 가능한데 사이트맵에 없음 (발견 지연)',
};
for (const code of Object.keys(LABEL)) {
  const list = byCode[code];
  if (!list?.length) continue;
  console.log(`\n${LABEL[code]} — ${list.length}건`);
  for (const x of list) console.log(`   ${x.route.padEnd(34)} ${x.msg}`);
}
console.log(`\n총 ${findings.length}건. 처방: 해당 라우트의 서버 page.tsx(또는 그 라우트 layout.tsx)에`);
console.log(`export const metadata = { title, description, alternates: { canonical: \`\${SITE}<route>\` } } 선언.`);
console.log(`⚠ 루트 layout의 canonical은 **절대주소**라 상속되면 항상 홈이 된다 — 반드시 덮어써야 한다.\n`);
process.exit(1);
