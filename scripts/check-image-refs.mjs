/**
 * 이미지 참조 무결성 게이트 — «파일은 있는데 참조가 깨졌나 · 참조는 있는데 파일이 없나»
 *
 * ★ 왜 만들었나 (2026-09-12 · queue 회차 Q7-a ④)
 *   ① **`check:images`는 디스크 파일만 본다.** 그래서 「참조는 있는데 파일이 없는」 유형
 *      (readnext가 없는 이미지를 가리키는 것)을 **원리상 못 잡는다**
 *      (메모리 `review-mechanize-not-repeat` — «게이트가 원리상 못 보는 자리를 알아 둬라»).
 *   ② **썸네일 링크는 따옴표가 한 짝만 빠져도 조용히 죽는다.** 렌더러 정규식
 *      (`lib/render-markdown.ts`의 `"thumb:` 정규식)이 `"thumb:…"` 를 통째로 요구하므로 매치가 실패하면
 *      **오류가 아니라 «평범한 링크 + 남는 텍스트»**로 나간다. 어떤 게이트도 안 봤다.
 *
 * 🔴 이 게이트가 «보는 것»과 «못 보는 것»
 *   본다   = ⓐ 썸네일 링크 규격(`[텍스트](/url "thumb:/images/x.webp")`)에서 벗어난 `thumb:/…`
 *            ⓑ 썸네일·본문 `![]()`·`:::readnext` 3열·`:::faqcard` 1열이 가리키는 **파일의 실존**
 *            ⓒ 썸네일 대상이 외부 URL인 자리(렌더러가 `(?!https?://)`로 막아 조용히 죽는다)
 *   못 본다 = 그림이 «맞는 그림인가» · alt가 적절한가 · 재사용 규율(그건 `check:image-reuse`)
 *
 * 🔴 오탐 함정 — 첫 실행 전건 원문 판정 (2026-09-12)
 *   「rule of thumb:」이 EN 5편에 있다. `thumb:` 만 찾으면 전부 걸린다 — **`thumb:` 뒤에
 *   슬래시가 오는 것만** 후보로 본다. 그리고 `lib/posts/_template.ts`의
 *   `/images/슬러그-hero.webp`는 **자리표시자**라 대상 밖이다(파일명에 한글 «슬러그»가 들어 있다).
 *
 * 사용
 *   node scripts/check-image-refs.mjs
 *   npm run check:image-refs -- --strict     🔴면 exit 1
 *   npm run check:image-refs:selftest
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const has = (n) => args.includes(`--${n}`);

/** 정상 썸네일 링크 — 렌더러(`render-markdown.ts`의 `"thumb:` 정규식)와 **같은 모양**이어야 한다 */
export const THUMB_OK = /\[[^\]]+\]\((?!https?:\/\/)[^)\s"]+\s+"thumb:[^"]+"\)/;
const THUMB_OK_G = new RegExp(THUMB_OK.source, 'g');
/** 썸네일 후보 — `thumb:` 뒤에 경로가 오는 자리만. 「rule of thumb: a…」를 거른다 */
const THUMB_CANDIDATE = /thumb:\s*\//g;

/** 자리표시자 — 실존 검사 대상 밖 */
const PLACEHOLDER = /[가-힣]/;

/**
 * 한 파일의 본문에서 이미지 참조를 전부 뽑는다.
 * @returns {{ refs: {src:string, kind:string}[], badThumbs: {excerpt:string}[] }}
 */
export function extract(raw) {
  // 🔴 CRLF를 먼저 없앤다 — 이 레포의 포스트는 CRLF다. 블록 디렉티브 정규식이 `\n`을 보므로
  //    정규화하지 않으면 `:::readnext`가 **조용히 0건**으로 나온다(2026-09-12 첫 실행이 그랬다).
  //    같은 함정을 FAQ 스키마 감사에서 이미 겪었다(메모리 `faq-schema-build-output-is-truth`).
  const text = String(raw).replace(/\r\n?/g, '\n');
  const refs = [];
  const badThumbs = [];

  for (const m of text.matchAll(/!\[[^\]]*\]\((\/images\/[^)\s"]+)/g)) refs.push({ src: m[1], kind: 'body' });
  for (const m of text.matchAll(/"thumb:\s*([^"]+)"/g)) refs.push({ src: m[1].trim(), kind: 'thumb' });
  for (const m of text.matchAll(/:::faqcard\[(\/images\/[^\]]+)\]/g)) refs.push({ src: m[1], kind: 'faqcard' });

  // :::readnext 블록 — 행마다 `href | 제목 | 이미지(선택)`
  for (const m of text.matchAll(/:::readnext(?:\[[^\]]*\])?\n([\s\S]*?)\n:::/g)) {
    for (const line of m[1].split('\n')) {
      const cols = line.split('|').map((s) => s.trim());
      if (cols[2] && cols[2].startsWith('/images/')) refs.push({ src: cols[2], kind: 'readnext' });
    }
  }

  /**
   * 규격에서 벗어난 썸네일.
   *
   * 🔴 «후보 주변 ±200자에 정상형이 있나»로 재면 **이웃이 깨진 쪽을 가린다**
   *    (2026-09-12 렌즈 실증: 후보 1,348개 중 이웃 쌍 795, 그중 **83쌍(10.4%)이 200자 이내**다.
   *     한 문단에 인라인 썸네일을 1~2개 두는 이 레포의 관용이 정확히 그 형태다).
   *    그래서 **정상 매치의 구간 집합을 먼저 만들고, 후보가 그 구간 «안»인지**로 판정한다.
   */
  const okSpans = [];
  for (const m of text.matchAll(THUMB_OK_G)) okSpans.push([m.index, m.index + m[0].length]);
  let c;
  THUMB_CANDIDATE.lastIndex = 0;
  while ((c = THUMB_CANDIDATE.exec(text))) {
    if (okSpans.some(([a, b]) => c.index >= a && c.index < b)) continue;
    const from = Math.max(0, c.index - 120);
    badThumbs.push({ excerpt: text.slice(from, c.index + 120).replace(/\n/g, '⏎') });
  }
  return { refs, badThumbs };
}

function postFiles() {
  const out = [];
  const lib = path.join(ROOT, 'lib');
  if (fs.existsSync(path.join(lib, 'posts.ts'))) out.push('lib/posts.ts');
  for (const d of fs.readdirSync(lib)) {
    const p = path.join(lib, d);
    if (!/^posts(-[\w-]+)?$/.test(d) || !fs.statSync(p).isDirectory()) continue;
    for (const f of fs.readdirSync(p)) if (f.endsWith('.ts') && f !== 'index.ts') out.push(`lib/${d}/${f}`);
  }
  return out;
}

// ── 셀프테스트 ────────────────────────────────────────────
function selftest() {
  const t = [];
  const one = (name, ok) => t.push([name, ok]);
  const q = String.fromCharCode(34);

  const good = `[포지션 글](/blog/holdem-position ${q}thumb:/images/a.webp${q}) 뒤 문장`;
  one('정상 썸네일 링크는 통과', extract(good).badThumbs.length === 0);
  one('정상 썸네일도 참조로 센다', extract(good).refs.some((r) => r.kind === 'thumb' && r.src === '/images/a.webp'));

  one('「rule of thumb: a big edge」는 후보가 아니다',
    extract('The rule of thumb: a bad beat requires both.').badThumbs.length === 0);

  one('따옴표가 통째로 빠지면 잡는다',
    extract('[글](/blog/x thumb:/images/a.webp) 뒤').badThumbs.length === 1);
  one('닫는 따옴표가 빠지면 잡는다',
    extract(`[글](/blog/x ${q}thumb:/images/a.webp) 뒤`).badThumbs.length === 1);
  one('외부 URL 대상은 잡는다(렌더러가 막는다)',
    extract(`[글](https://example.com ${q}thumb:/images/a.webp${q}) 뒤`).badThumbs.length === 1);

  one('본문 이미지를 참조로 센다',
    extract('![캡션](/images/b.webp)').refs.some((r) => r.kind === 'body' && r.src === '/images/b.webp'));
  one('faqcard 이미지를 참조로 센다',
    extract(':::faqcard[/images/c.webp][alt][cap]:::').refs.some((r) => r.kind === 'faqcard'));
  one('readnext 3열 이미지를 참조로 센다',
    extract(':::readnext[더 보기]\n/blog/x | 제목 | /images/d.webp\n:::').refs.some((r) => r.kind === 'readnext' && r.src === '/images/d.webp'));
  one('readnext 이미지 열이 없으면 참조 0',
    extract(':::readnext\n/blog/x | 제목\n:::').refs.length === 0);

  // 🔴 첫 실행에서 readnext가 «조용히 0건»으로 나왔다 — 이 레포 포스트는 CRLF다
  one('CRLF여도 readnext를 잡는다',
    extract(':::readnext[더 보기]\r\n/blog/x | 제목 | /images/d.webp\r\n:::').refs.some((r) => r.kind === 'readnext'));

  // 🔴 2026-09-12 렌즈 실증 — 이웃 정상 썸네일이 깨진 쪽을 가리던 자리(코퍼스의 10.4%)
  const okLink = `[정상](/blog/ok ${q}thumb:/images/ok.webp${q})`;
  one('바로 뒤 30자에 정상형이 있어도 깨진 것을 잡는다',
    extract(`[글](/blog/x thumb:/images/a.webp) 짧은 문장 ${okLink}`).badThumbs.length === 1);
  one('바로 앞에 정상형이 있어도 깨진 것을 잡는다',
    extract(`${okLink} 짧은 문장 [글](/blog/x thumb:/images/a.webp)`).badThumbs.length === 1);
  one('정상형 둘이 붙어 있으면 0건',
    extract(`${okLink} 그리고 ${okLink}`).badThumbs.length === 0);

  let pass = 0;
  for (const [name, ok] of t) { if (ok) pass++; console.log(`${ok ? '✅' : '❌'} ${name}`); }
  console.log(`selftest ${pass}/${t.length}`);
  process.exit(pass === t.length ? 0 : 1);
}

// ── 본체 ──────────────────────────────────────────────────
function main() {
  if (has('selftest')) return selftest();
  console.log('── 이미지 참조 무결성 게이트 ──');

  const files = postFiles();
  const missing = [], bad = [], placeholders = [];
  const byKind = {};
  let total = 0;

  for (const rel of files) {
    const text = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    const { refs, badThumbs } = extract(text);
    for (const b of badThumbs) bad.push({ rel, ...b });
    for (const r of refs) {
      total++;
      byKind[r.kind] = (byKind[r.kind] || 0) + 1;
      if (PLACEHOLDER.test(r.src)) { placeholders.push({ rel, ...r }); continue; }
      if (!fs.existsSync(path.join(ROOT, 'public', r.src))) missing.push({ rel, ...r });
    }
  }

  console.log(`\n${bad.length ? '🔴' : '✅'} 규격 밖 썸네일 링크 ${bad.length}건`);
  for (const b of bad) console.log(`   ${b.rel}\n      …${b.excerpt}…`);

  console.log(`${missing.length ? '🔴' : '✅'} 파일이 없는 참조 ${missing.length}건`);
  for (const m of missing) console.log(`   ${m.rel}  [${m.kind}]  ${m.src}`);

  console.log('\n── 커버리지 (0건이 «검증»으로 오독되지 않게) ──');
  console.log(`   포스트 파일 ${files.length}개 · 이미지 참조 ${total}개`);
  const KINDS = ['body', 'thumb', 'readnext', 'faqcard'];
  console.log('   ' + KINDS.map((k) => `${k} ${byKind[k] || 0}`).join(' · '));
  const unused = KINDS.filter((k) => !byKind[k]);
  if (unused.length) {
    console.log(`   🪶 «${unused.join(' · ')}»는 코퍼스에 0건이다 — 렌더러는 지원하지만 포스트가 안 쓴다.`);
    console.log('      (2026-09-12 실측 `:::faqcard`는 `render-markdown.ts`·`blog-lcp.ts`에만 있다.)');
    console.log('      🔴 «검사해서 0»과 «쓰이지 않아 0»은 다르다. 새로 쓰기 시작하면 여기 수가 올라야 정상이다.');
  }
  if (placeholders.length) {
    console.log(`   🪶 자리표시자 ${placeholders.length}건 — 실존 검사 대상 밖(파일명에 한글):`);
    for (const p of placeholders) console.log(`     ${p.rel}  ${p.src}`);
  }
  console.log('   ⚠ 못 본다: 그림이 맞는 그림인가 · alt의 적절함 · 재사용 규율(`check:image-reuse --all`)');

  if (has('strict') && bad.length + missing.length) process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
