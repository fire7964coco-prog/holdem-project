/**
 * 빌드 산출물 HTML 전수 해시 스냅샷 / 대조
 *   npm run snapshot:html -- save         → .html-baseline.json      (파일 전체 바이트)
 *   npm run snapshot:html -- diff
 *   npm run snapshot:html -- save --dom   → .html-baseline-dom.json  (★DOM만)
 *   npm run snapshot:html -- diff --dom
 *
 * ★ --dom 이 필요한 이유 (2026-08-02)
 * 렌더러를 서버로 옮기면 __next_f 플라이트(하이드레이션용 RSC 페이로드)의 내용이 **의도적으로**
 * 바뀐다 — 마크다운 원문 대신 렌더된 HTML이 실린다. 그래서 파일 전체 바이트 동일성은 성립하지 않는다.
 * 하지만 보증해야 하는 것은 **브라우저가 그리는 DOM**이다: 본문·앵커 ID·JSON-LD(FAQ 리치결과).
 * --dom 은 self.__next_f.push 스크립트만 걷어내고 나머지 전체를 해시한다.
 * JSON-LD는 <script type="application/ld+json">이라 **그대로 포함된다** — 스키마 보증은 유지된다.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const ROOT = '.next/server/app';
const domMode = process.argv.includes('--dom');
const FILE = domMode ? '.html-baseline-dom.json' : '.html-baseline.json';

/**
 * DOM 비교용 정규화.
 *  1) 하이드레이션 페이로드(self.__next_f.push) 제거 — 여기가 의도적으로 바뀌는 자리다.
 *  2) 청크 파일명의 **콘텐츠 해시**를 마스킹 — 컴포넌트를 한 줄만 고쳐도 파일명이 바뀌고,
 *     그러면 그 청크를 참조하는 **손대지도 않은 목록 페이지**까지 전부 "변경"으로 뜬다.
 *     파일명은 빌드 산출물이지 콘텐츠가 아니다. (태그 개수·위치가 바뀌면 여전히 잡힌다.)
 */
const normalize = (html) =>
  html
    .replace(/<script>self\.__next_f\.push\([\s\S]*?\)<\/script>/g, '')
    // chunks/2117-<hash>.js · chunks/app/ar/blog/page-<hash>.js · css/<hash>.css 를 모두 덮는다.
    // (중첩 경로와 CSS를 빠뜨리면 손대지 않은 목록 페이지가 전부 "변경"으로 뜬다 — 2026-08-02에 겪음)
    .replace(/(\/_next\/static\/(?:chunks|css)\/[^"'\\\s]*?)-?[a-f0-9]{16}(\.(?:js|css))/g, '$1-#$2')
    // 익명 분할 청크의 **번호**(chunks/4849-#.js)도 마스킹한다. 모듈 그래프가 조금만 바뀌어도
    // 번호가 재배정될 뿐 내용과는 무관하다. 이름 있는 청크(main-app·webpack·app/…)는 그대로 둔다.
    .replace(/(\/_next\/static\/chunks\/)\d+-#\.js/g, '$1#-#.js')
    .replace(/\/_next\/static\/[A-Za-z0-9_-]{21}\//g, '/_next/static/#/');

/** 본문 <article>과 JSON-LD만 — 청크·플라이트와 무관하게 "글 자체"가 같은지 보는 좁은 게이트. */
const contentOnly = (html) => {
  const arts = html.match(/<article[\s\S]*?<\/article>/g) ?? [];
  const ld = html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g) ?? [];
  return arts.join('') + ld.join('');
};

const sha = (s) => createHash('sha256').update(Buffer.from(s)).digest('hex');

/**
 * ★ 빌드마다 내용이 달라지는 페이지 — 비교에서 제외하고 개수만 알린다.
 * /quiz 는 lib/poker-eval 의 makeQuestion 이 빌드 타임에 **랜덤 핸드**를 뽑는다.
 * 코드를 한 줄도 안 바꿔도 매 빌드 달라지므로, 여기 없으면 게이트가 영원히 빨간불이다.
 */
const NONDETERMINISTIC = [/\/quiz\.html$/];
const isNondeterministic = (k) => NONDETERMINISTIC.some((re) => re.test(k));

const map = {};
const walk = (d) => {
  for (const f of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith('.html')) {
      const key = p.split('\\').join('/');
      if (domMode) {
        const html = readFileSync(p, 'utf8');
        map[key] = sha(normalize(html)) + ':' + sha(contentOnly(html));
      } else {
        map[key] = createHash('sha256').update(readFileSync(p)).digest('hex');
      }
    }
  }
};
walk(ROOT);

const mode = process.argv[2];
const label = domMode ? 'DOM(플라이트 제외)' : '파일 전체';
if (mode === 'save') {
  writeFileSync(FILE, JSON.stringify(map));
  console.log(`기준선 저장(${label}): ${Object.keys(map).length}개 HTML → ${FILE}`);
} else {
  if (!existsSync(FILE)) { console.error(`기준선 없음: ${FILE}`); process.exit(1); }
  const base = JSON.parse(readFileSync(FILE, 'utf8'));
  const bk = Object.keys(base), nk = Object.keys(map);
  const added = nk.filter((k) => !(k in base));
  const removed = bk.filter((k) => !(k in map));
  const changedAll = nk.filter((k) => k in base && base[k] !== map[k]);
  const skipped = changedAll.filter(isNondeterministic);
  const changed = changedAll.filter((k) => !isNondeterministic(k));
  console.log(`대조 기준: ${label}`);
  if (skipped.length) console.log(`  (비결정적 페이지 ${skipped.length}개 제외: ${skipped.map((k) => k.replace('.next/server/app', '')).join(', ')})`);
  console.log(`기준선 ${bk.length}개 · 현재 ${nk.length}개`);
  console.log(`  추가 ${added.length} · 삭제 ${removed.length} · ★내용변경 ${changed.length}`);
  if (domMode) {
    // 어디가 깨졌는지 구분해서 보여준다: 본문·스키마가 바뀐 건 치명적, 그 밖은 껍데기 문제.
    const contentBroke = changed.filter((k) => base[k].split(':')[1] !== map[k].split(':')[1]);
    console.log(`  그중 ★본문<article>·JSON-LD 변경: ${contentBroke.length}`);
    for (const k of contentBroke.slice(0, 10)) console.log('   !! ' + k);
  }
  for (const k of [...added.slice(0, 5)]) console.log('   + ' + k);
  for (const k of [...removed.slice(0, 5)]) console.log('   - ' + k);
  for (const k of changed.slice(0, 20)) console.log('   ~ ' + k);
  if (changed.length > 20) console.log(`   … 외 ${changed.length - 20}개`);
  const ok = added.length === 0 && removed.length === 0 && changed.length === 0;
  console.log(ok ? `\n✅ ${nk.length}페이지 ${label} 완전 동일` : '\n🔴 차이 있음 — 원인 규명 전에는 진행 금지');
  process.exit(ok ? 0 : 1);
}
