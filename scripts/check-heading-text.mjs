#!/usr/bin/env node
/**
 * check:heading-text — 목차(TOC) 문자열·헤딩 id 에 마크다운 원문이 새는지 본다.
 *
 * 왜 (2026-09-27 queue Q16 · Q15-4): H2 안에 링크를 넣은 글(paired-board 9로케일)이
 *   목차에 「[c-bet](/ms/blog/holdem-continuation-bet)」를 원문 그대로 찍었고,
 *   id 에는 URL 이 붙어 `…-cbetmsblogholdemcontinuationbet` 이 됐다.
 *   렌더러·목차가 같이 쓰는 `lib/blog-headings.ts` 의 `headingText()` 로 고쳤다 —
 *   이 게이트는 그 수리가 풀리거나, 링크 말고 다른 장식(**굵게**·==형광==)이 헤딩에 들어오면 운다.
 *
 * 대상 = lib/posts.ts · lib/posts/ · lib/posts-* 의 소스 원문(헤딩 줄만 · 파일 단위 순서).
 * 판정 = extractHeadings() 가 돌려주는 H2 목차 문자열에 `](` · `**` · `==` 가 남으면 🔴 ·
 *        id 가 «목차 문자열의 slug»(+ 중복 접미 `-N`)가 아니면 🔴(URL 조각이 id 에 붙은 경우).
 *   🪶 id 축은 지금 구조상 늘 참이다(id·목차 문자열이 같은 headingText 를 거친다) —
 *      «한쪽 경로만 headingText 를 잃는» 회귀를 잡으려고 둔다.
 *
 *   node scripts/check-heading-text.mjs            # 전 코퍼스
 *   node scripts/check-heading-text.mjs --selftest # 게이트 자체 검증
 */
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { pathToFileURL } from 'url';

const ROOT = process.cwd();
const ts = createRequire(path.join(ROOT, 'package.json'))('typescript');
const TMP = path.join(ROOT, 'node_modules', '.cache', 'check-heading-text');

function load() {
  const src = fs.readFileSync(path.join(ROOT, 'lib', 'blog-headings.ts'), 'utf8');
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
  });
  fs.mkdirSync(TMP, { recursive: true });
  const out = path.join(TMP, 'blog-headings.mjs');
  fs.writeFileSync(out, outputText, 'utf8');
  return import(pathToFileURL(out).href + `?t=${Date.now()}`);
}

const LEAK = /\]\(|\*\*|==/;

/** id 가 목차 문자열의 slug 그대로(또는 중복 접미 -N)인가 — 아니면 목차에 안 보이는 무언가가 id 에 붙었다 */
function idMatchesText(H, h) {
  const base = H.slugify(h.text) || 'section';
  if (h.id === base) return true;
  return h.id.startsWith(base + '-') && /^\d+$/.test(h.id.slice(base.length + 1));
}

/** 한 문서(또는 파일) 텍스트 → 새는 목차 항목 목록 */
function leaks(H, text) {
  return H.extractHeadings(text).filter((h) => LEAK.test(h.text) || !idMatchesText(H, h));
}

const H = await load();

if (process.argv.includes('--selftest')) {
  const FIX = [
    ['H2 안 링크는 목차에서 벗겨진다 (Q15-4 실사고 · 울리면 안 됨)', false,
      '## Patutkah Ace-high fold kepada [c-bet](/ms/blog/holdem-continuation-bet)?'],
    ['링크가 헤딩 맨 앞 (ja 형태 · 울리면 안 됨)', false,
      '## [Cベット](/ja/blog/holdem-continuation-bet)にAハイを降りるべき?'],
    ['평범한 헤딩 (울리면 안 됨)', false, '## 홀덤 포지션이란?'],
    ['같은 헤딩 두 번 — 중복 접미 -2 는 정상 (울리면 안 됨)', false, '## 요약\n\n## 요약'],
    ['헤딩 안 굵게 — 목차에 ** 가 샌다 (잡아야 함)', true, '## **AA** vs KK 확률'],
    ['헤딩 안 형광 — 목차에 == 가 샌다 (잡아야 함)', true, '## ==81.95%== 의 뜻'],
    ['헤딩 안 이미지 — 벗기지 않고 그대로 샌다 (잡아야 함)', true, '## 보드 ![A♠](/images/a.webp) 읽기'],
  ];
  let pass = 0;
  for (const [name, shouldFire, text] of FIX) {
    const found = leaks(H, text);
    const ok = shouldFire ? found.length > 0 : found.length === 0;
    if (ok) pass++;
    console.log(`${ok ? '✅' : '❌'} ${shouldFire ? '[잡아야 함]' : '[울리면 안 됨]'} ${name}`);
    for (const x of found) console.log(`      → «${x.text}» #${x.id}`);
  }
  // id 축 — 목차 문자열은 멀쩡한데 id 에 URL 조각이 붙은 경우(수리 전 동작)를 잡는가
  const fakeOld = { text: 'Should you fold ace-high to a continuation bet?', id: 'should-you-fold-acehigh-to-a-continuation-betenblogholdemcontinuationbet' };
  const okFake = !idMatchesText(H, fakeOld);
  if (okFake) pass++;
  console.log(`${okFake ? '✅' : '❌'} [잡아야 함] id 에만 URL 조각이 붙은 경우`);
  // id 축어 — 링크를 벗긴 뒤의 id 가 URL 조각을 안 먹는다
  const id = H.extractHeadings('## Should you fold ace-high to a [continuation bet](/en/blog/holdem-continuation-bet)?')[0]?.id;
  const want = 'should-you-fold-acehigh-to-a-continuation-bet';
  const okId = id === want;
  if (okId) pass++;
  console.log(`${okId ? '✅' : '❌'} [id] EN paired-board 헤딩 id = ${want}${okId ? '' : ` (실제 ${id})`}`);
  const TOTAL = FIX.length + 2;
  console.log(`\n${pass}/${TOTAL} 통과`);
  process.exit(pass === TOTAL ? 0 : 1);
}

const files = [path.join('lib', 'posts.ts')];
const walk = (d) => {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.ts') && f !== 'index.ts') files.push(p);
  }
};
walk(path.join('lib', 'posts'));
for (const d of fs.readdirSync('lib')) if (d.startsWith('posts-')) walk(path.join('lib', d));

let n = 0, bad = 0;
for (const f of files) {
  const txt = fs.readFileSync(f, 'utf8');
  n += H.extractHeadings(txt).length;
  for (const x of leaks(H, txt)) {
    bad++;
    console.log(`🔴 ${f.replace(/\\/g, '/')}: 목차 «${x.text}» #${x.id}`);
  }
}
console.log(`\n${files.length}파일 · 목차 H2 ${n}개 · 🔴 ${bad}건`);
process.exit(bad ? 1 : 0);
