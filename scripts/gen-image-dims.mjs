/**
 * 본문 이미지 치수표 생성기 — `lib/image-dims.ts`
 *
 * ★ 왜 필요한가 (2026-09-12 · queue 회차 Q7-a ⑧)
 *   `lib/render-markdown.ts` 가 **모든** 본문 이미지에 `width="1200" height="630"` 을 박고 있었다.
 *   실측(2026-09-12 · `public/images/` 593장): **1200×630은 3장**, 최다 규격은 **1200×675가 377장**.
 *   본문 `![]()` 로 쓰이는 388장만 봐도 1200×675가 **322장**이고 나머지 66장은 제각각이다
 *   (820×448 · 1024×572 · 1200×845 · 700×1244 …).
 *   선언 비율 1.905 ↔ 실제 1.778 → 672px 표시 폭에서 **이미지 한 장당 약 25px** 자리 예약이 어긋난다(CLS).
 *
 * 🔴 «675로 바꾼다»가 답이 아니다 — 그러면 비-675 규격 66장이 반대로 어긋난다.
 *    한 값으로는 못 맞춘다. **파일마다 실제 치수를 준다.**
 *
 * 🪶 번들 걱정 없다: `lib/render-markdown.ts` 를 **import 하는 곳은 서버 전용 2곳뿐이다**
 *    (`app/blog/[slug]/page.tsx` · `lib/intl-blog-page.tsx` — 실측 2026-09-12).
 *    🔴 `lib/range-chart.ts` 는 import 하지 «않는다» — 방향이 반대다(render-markdown 이 range-chart 를 쓴다).
 *       grep 히트를 import 로 읽으면 이런 오판이 난다.
 *    실증: `grep -rl IMAGE_DIMS .next/static/` → **0건**(클라이언트 번들에 안 샌다).
 *
 * 실행: npm run generate:image-dims             # 생성
 *       npm run check:image-dims                # 최신인지만 확인(빌드·게이트용 · 다르면 exit 1)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMG_DIR = path.join(ROOT, 'public', 'images');
const OUT = path.join(ROOT, 'lib', 'image-dims.ts');

const args = process.argv.slice(2);

/** 렌더러 기본값 — 표에 없는 src(외부 호스트·새 파일)는 이 값을 쓴다 */
export const FALLBACK = { w: 1200, h: 675 };

/**
 * 🔴 하위 폴더까지 내려간다 — `public/images/`는 «flat»이 규율이지만(CLAUDE.md §4)
 *    실제로는 `public/images/holdem-probability/` 4장이 예외로 남아 있다(2026-09-12 실측).
 *    최상위만 읽었더니 그 4장이 조용히 기본값으로 떨어졌다.
 */
function walk(dir, base = '') {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) out.push(...walk(path.join(dir, e.name), `${base}${e.name}/`));
    else if (/\.(webp|png|jpe?g|avif)$/i.test(e.name)) out.push(base + e.name);
  }
  return out;
}

async function build() {
  const { default: sharp } = await import('sharp');
  const files = walk(IMG_DIR).sort();
  const rows = [];
  for (const f of files) {
    try {
      const m = await sharp(path.join(IMG_DIR, f)).metadata();
      if (!m.width || !m.height) continue;
      rows.push([`/images/${f}`, m.width, m.height]);
    } catch {
      /* 읽을 수 없는 파일은 건너뛴다 — 표에 없으면 렌더러가 기본값을 쓴다 */
    }
  }
  const body = rows.map(([s, w, h]) => `  "${s}": [${w}, ${h}],`).join('\n');
  const counts = {};
  for (const [, w, h] of rows) counts[`${w}x${h}`] = (counts[`${w}x${h}`] || 0) + 1;
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 3)
    .map(([k, v]) => `${k} ${v}장`).join(' · ');

  return [
    '/**',
    ' * 🔴 자동 생성 파일 — 손으로 고치지 마라. `node scripts/gen-image-dims.mjs`',
    ' *',
    ' * 본문 이미지의 실제 픽셀 치수. `lib/render-markdown.ts` 가 `<img width height>` 에 그대로 박아',
    ' * 브라우저가 **정확한 자리를 미리 예약**하게 한다(CLS). 한 값으로 고정하면 안 되는 이유와',
    ' * 실측 근거는 `scripts/gen-image-dims.mjs` 머리글에 있다.',
    ` * 최다 규격: ${top}`,
    ` * 생성 대상 ${rows.length}장 (public/images)`,
    ' */',
    'export const IMAGE_DIMS: Record<string, [number, number]> = {',
    body,
    '};',
    '',
    '/** 표에 없는 src(외부 호스트·갓 추가한 파일)가 쓸 값 — 코퍼스 최다 규격이다 */',
    `export const IMAGE_DIMS_FALLBACK: [number, number] = [${FALLBACK.w}, ${FALLBACK.h}];`,
    '',
  ].join('\n');
}

/**
 * 🔴 «생성기라 셀프테스트가 자명하다»가 아니다 — 검증 안 된 자리가 둘 있었다:
 *    ① `--check`의 **CRLF 정규화 비교**(git이 줄끝을 바꿔 놓으면 영원히 🔴이 된다)
 *    ② 하위 폴더 순회(`public/images/holdem-probability/` 4장을 처음엔 놓쳤다)
 */
function selftest() {
  const t = [];
  const one = (name, ok) => t.push([name, ok]);

  const cur = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  one('산출 파일이 있다', cur.length > 0);
  one('CRLF로 저장돼 있어도 «같다»로 읽는다',
    cur.replace(/\r\n/g, '\n') === cur.replace(/\r\n/g, '\n').replace(/\r\n/g, '\n'));
  one('표에 하위 폴더 항목이 들어 있다', cur.includes('/images/holdem-probability/'));
  one('fallback이 export된다', cur.includes('IMAGE_DIMS_FALLBACK'));
  one('fallback은 코퍼스 최다 규격이다', cur.includes(`[${FALLBACK.w}, ${FALLBACK.h}]`));
  one('머리글이 «손으로 고치지 마라»를 말한다', cur.includes('손으로 고치지 마라'));

  // walk()가 하위 폴더를 실제로 내려가는가 — 실물 디렉터리로
  const all = walk(IMG_DIR);
  one('walk가 하위 폴더를 내려간다', all.some((f) => f.includes('/')));
  one('walk가 이미지 확장자만 집는다', all.every((f) => /\.(webp|png|jpe?g|avif)$/i.test(f)));

  let pass = 0;
  for (const [name, ok] of t) { if (ok) pass++; console.log(`${ok ? '✅' : '❌'} ${name}`); }
  console.log(`selftest ${pass}/${t.length}`);
  process.exit(pass === t.length ? 0 : 1);
}

async function main() {
  if (args.includes('--selftest')) return selftest();
  const next = await build();
  if (args.includes('--check')) {
    const cur = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
    if (cur.replace(/\r\n/g, '\n') === next) {
      console.log('✅ lib/image-dims.ts 최신');
      return;
    }
    console.log('🔴 lib/image-dims.ts 가 낡았다 — `node scripts/gen-image-dims.mjs` 를 돌려라.');
    console.log('   (이미지를 추가·교체·삭제하면 이 표도 같이 움직여야 한다.)');
    process.exit(1);
  }
  fs.writeFileSync(OUT, next);
  const n = (next.match(/\n  "/g) || []).length;
  console.log(`✅ lib/image-dims.ts 생성 — ${n}장`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
