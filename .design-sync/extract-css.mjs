/**
 * design-sync 용 «컴파일된 CSS» 추출기.
 *
 * 왜 필요한가: `app/globals.css` 는 Tailwind v4 의 **소스**다 — 첫 줄이 `@import "tailwindcss";` 라
 * 컨버터가 그대로 쓰면 `[CSS_IMPORT_MISSING] _ds_bundle.css @imports "tailwindcss"` 로 검증이 깨진다.
 * 게다가 소스에는 `text-primary` 같은 유틸리티 «클래스 정의» 가 없어서(생성 단계 산출물이다)
 * 프리뷰가 스타일 없이 렌더된다.
 *
 * 그래서 `npm run build` 가 뽑아 둔 `.next/static/css/*.css` 를 한 파일로 합쳐 넘긴다.
 * 그 안에 우리 토큰(`--gold-dark-rgb` 등)·`.blog-prose` 타이포·실제 유틸리티가 전부 들어 있다.
 *
 * 🔴 `.next/` 파일명은 콘텐츠 해시라 빌드마다 바뀐다 — 그래서 config 에 그 경로를 직접 못 쓴다.
 *    이 스크립트가 안정된 경로(`.design-sync/.cache/compiled.css`)로 고정해 준다.
 *
 * 순서: npm run build  →  node .design-sync/extract-css.mjs  →  컨버터
 *       (빌드를 안 돌렸으면 .next 가 낡아 토큰 변경이 반영되지 않는다.)
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = '.next/static/css';
const OUT_DIR = '.design-sync/.cache';
const OUT = join(OUT_DIR, 'compiled.css');

if (!existsSync(SRC)) {
  console.error(`🔴 ${SRC} 가 없다 — 먼저 npm run build 를 돌려라.`);
  process.exit(1);
}

const files = readdirSync(SRC).filter((f) => f.endsWith('.css'))
  .map((f) => ({ f, p: join(SRC, f), size: statSync(join(SRC, f)).size }))
  .sort((a, b) => b.size - a.size);            // 큰 것(본 스타일시트)이 먼저 오게

if (!files.length) { console.error(`🔴 ${SRC} 에 css 가 없다.`); process.exit(1); }

mkdirSync(OUT_DIR, { recursive: true });

const parts = [
  '/* design-sync 전용 — .design-sync/extract-css.mjs 가 .next/static/css/*.css 를 합쳐 생성한다.',
  '   손으로 고치지 마라. 다시 만들려면: npm run build && node .design-sync/extract-css.mjs */',
];
for (const { f, p, size } of files) {
  parts.push(`\n/* ── ${f} (${(size / 1024).toFixed(0)} KB) ── */`);
  parts.push(readFileSync(p, 'utf8'));
}
writeFileSync(OUT, parts.join('\n'), 'utf8');

const total = files.reduce((n, x) => n + x.size, 0);
console.log(`✅ ${OUT} — ${files.length}개 합침 · ${(total / 1024).toFixed(0)} KB`);
for (const { f, size } of files) console.log(`   ${f}  ${(size / 1024).toFixed(0)} KB`);

/* ── 브랜드 폰트 회수 ────────────────────────────────────────────────────────
 * next/font 가 만든 @font-face 는 url 이 `/_next/static/media/<hash>.woff2` 라
 * 번들 밖을 가리킨다 → 검증이 [FONT_DANGLING] 을 낸다. 실물은 `.next/static/media/` 에 있으니
 * 여기로 복사하고 url 을 «옆 파일» 로 바꾼 fonts.css 를 따로 만든다 (cfg.extraFonts 가 이걸 읽는다).
 * 🔴 새 웹폰트를 들이는 게 아니다 — 이미 셀프호스팅 중인 그 파일 그대로다.
 *    (이 레포는 @font-face 438개로 FCP 의 1/3 을 날린 적이 있어 폰트 추가는 금지다.) */
const css = readFileSync(OUT, 'utf8');
const FONT_DIR = join(OUT_DIR, 'fonts');
mkdirSync(FONT_DIR, { recursive: true });

const faces = css.match(/@font-face\s*\{[^}]*\}/g) || [];
const MEDIA = '.next/static/media';
let copied = 0, missing = 0;
const kept = [];
for (const face of faces) {
  const url = face.match(/url\(\s*['"]?(\/_next\/static\/media\/([^'")\s]+))['"]?\s*\)/);
  if (!url) continue;
  const fileName = url[2];
  const src = join(MEDIA, fileName);
  if (!existsSync(src)) { missing++; continue; }
  writeFileSync(join(FONT_DIR, fileName), readFileSync(src));   // 바이너리 그대로
  copied++;
  kept.push(face.split(url[1]).join(`./fonts/${fileName}`));
}
if (kept.length) {
  writeFileSync(join(OUT_DIR, 'fonts.css'),
    '/* design-sync 전용 — next/font 산출물을 번들 안으로 회수한 것. extract-css.mjs 가 생성한다. */\n'
    + kept.join('\n\n') + '\n', 'utf8');
  console.log(`✅ ${join(OUT_DIR, 'fonts.css')} — @font-face ${kept.length}개 · woff2 ${copied}개 복사${missing ? ` (원본 없음 ${missing})` : ''}`);
} else {
  console.log('… @font-face 없음 — fonts.css 를 만들지 않았다');
}
