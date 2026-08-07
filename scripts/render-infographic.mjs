/**
 * 인포그래픽 렌더러 — HTML/CSS → Playwright 스크린샷 → webp
 *
 * ★왜 이 방식인가 (2026-07-26 확정 · 2026-08-02 선명도 개정)
 *   글자가 들어가는 인포그래픽은 **이미지 생성 AI를 쓰지 않는다.** AI는 철자를 깨뜨리고
 *   프롬프트 잔재를 렌더에 남긴다 — 실제로 `holdem-bubble-summary.webp`에
 *   "(Rule/hand errors fixed)"가 박힌 채 몇 달간 발행돼 있었고 그게 og:image였다.
 *   HTML로 만들면 철자 깨짐 0 · 테마색 정확 일치 · 수정이 쉽다.
 *
 * ★선명도 (2026-08-02 사장님 지적 "글자가 조금 흐릿하다" 반영)
 *   deviceScaleFactor 2 → **3**  ·  축소 커널 **lanczos3**  ·  **언샵 마스크** 추가
 *   webp quality 72 → **88**.  이전 설정은 축소 리샘플링 + 낮은 품질이 겹쳐 글자가 뭉갰다.
 *   본문 대비도 함께 올렸다(`_style.css`: 글자 #fbf7ec, 작은 글자 굵기 700↑).
 *
 * ★규칙
 *   - 1200×675 고정. 60KB 이하(복잡하면 80KB)를 지킬 것 — 초과 시 quality를 82까지만 낮춘다.
 *   - **이미지 안에 출처를 넣지 않는다**(사장님 지시 2026-08-02).
 *     출처는 본문에서 법조문이 나오는 자리와 글 하단 `## 출처` 섹션에만 쓴다.
 *   - 워터마크(스페이드 + holdemmaster.com)는 각 HTML의 `.wm` 블록으로 넣는다.
 *   - 커밋 전 반드시 Read 도구로 렌더 결과를 열어 철자·수치를 육안 검수한다(CLAUDE.md §9-1).
 *
 * 사용법:
 *   node scripts/render-infographic.mjs <htmlDir> '[{"html":"a.html","out":"public/images/x.webp"}]'
 *   htmlDir 안에 `_style.css`가 있으면 <link rel="stylesheet" href="_style.css">를 인라인으로 치환한다.
 *   job에 `"q": 80`을 주면 그 장만 품질을 낮춘다(기본 88).
 *
 * ★용량 기준 (2026-08-07 갱신) — **글당 200KB는 하드리밋이 아니다.** 목적은 빠른 페이지이고
 *   200KB는 그 대리 지표였다. **조금 넘어도 되며, 가독성을 해치지 않는 선에서만 압축한다.**
 *   그리고 디스크 합계로 재지 마라 — 본문 이미지는 `/_next/image?w=750&q=75`로 줄어서 나가고
 *   첫 장 빼고 전부 lazy다. 상세·측정법은 `docs/IMAGE_OPTIMIZATION.md`.
 *
 *   ★이 스크립트가 만드는 인포그래픽은 **글자가 들어가므로 압축에 특히 보수적으로** 간다.
 *   글자가 흐려지면 용량을 맞춰도 실패다. 2026-08-03 `holdem-implied-odds`에서
 *   5장 합계 229KB를 q88 → q80으로 낮춰 해결했는데, 그 정도가 상한선이다(육안 차이 거의 없음).
 *   ★렌더 폭은 1200px을 유지할 것 — 750px 미만으로 만들면 next/image 최적화를 우회해
 *   원본 바이트가 통째로 전송된다.
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const [htmlDir, jobsJson] = process.argv.slice(2);
if (!htmlDir || !jobsJson) {
  console.error('사용법: node scripts/render-infographic.mjs <htmlDir> \'[{"html":"a.html","out":"public/images/x.webp"}]\'');
  process.exit(1);
}

const dir = htmlDir.endsWith('/') ? htmlDir : htmlDir + '/';
const jobs = JSON.parse(jobsJson);
const cssPath = dir + '_style.css';
const css = existsSync(cssPath) ? readFileSync(cssPath, 'utf8') : null;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 675 },
  deviceScaleFactor: 3, // ← 3배 렌더 후 축소해야 글자가 선명하다
});

let over = 0;
for (const j of jobs) {
  let html = readFileSync(dir + j.html, 'utf8');
  // setContent는 상대경로 리소스를 못 받으므로 CSS를 인라인으로 치환한다
  if (css) html = html.replace(/<link rel="stylesheet" href="_style\.css">/, `<style>${css}</style>`);

  await page.setContent(html, { waitUntil: 'load' });
  await page.waitForTimeout(350); // 웹폰트·그라디언트 안정화

  const png = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 675 } });
  const webp = await sharp(png)
    .resize(1200, 675, { kernel: 'lanczos3' })
    .sharpen({ sigma: 0.7, m1: 0.6, m2: 2.2 })
    .webp({ quality: j.q ?? 88, effort: 6 })
    .toBuffer();

  writeFileSync(j.out, webp);
  const kb = webp.length / 1024;
  if (kb > 80) over++;
  console.log(`${path.basename(j.out).padEnd(38)} ${kb.toFixed(1)}KB ${kb > 80 ? '  ⚠ 80KB 초과 — quality를 낮추거나 요소를 줄여라' : kb > 60 ? '  (60KB 초과 — 복잡한 인포그래픽만 허용)' : ''}`);
}

await browser.close();
console.log('\n★ 커밋 전 Read 도구로 렌더 결과를 직접 열어 철자·수치를 육안 검수할 것 (CLAUDE.md §9-1)');
if (over) process.exit(1);
