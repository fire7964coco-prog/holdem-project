/**
 * 이미지 이상치 게이트 — 「용량 상한 없음」의 공백을 메운다.
 *
 * 🔴 하드 상한(60KB 강제)은 2026-08-30 지시로 폐기됐다.
 *    그렇다고 무제한이 아니라, «실제로 해로운 자리»만 좁게 잡는다.
 *
 * 판정 기준(근거 = CLAUDE.md §9-2 / §9-2-A):
 *  - 폭 ≥ 750px  → next/image가 w=750/AVIF로 줄여 보내므로 디스크 크기는 전송량이 아니다.
 *                  상한을 걸지 않는다. 단 «비정상»만 잡는다(해상도 과다·정보 없는 픽셀).
 *  - 폭 < 750px  → 🔴 최적화를 그대로 우회한다 = 디스크 크기가 곧 전송량.
 *                  여기만 실질 상한을 둔다.
 */
import { readdirSync, statSync } from 'fs';
import sharp from 'sharp';

const DIR = 'public/images';
const NARROW_WARN = 80 * 1024;   // 폭<750: 디스크=전송량이라 여기가 진짜 상한
const WIDE_WARN  = 150 * 1024;   // 폭>=750: 이 정도면 원인이 있다(해상도 과다 등)
const MAX_W = 1400;              // 1200 규격 + 여유

const selftest = process.argv.includes('--selftest');
if (selftest) {
  const cases = [
    { w: 1200, size: 100 * 1024, want: 'ok',     why: '폭 충분·q88 정상 범위(실측 최대 108KB)' },
    { w: 1200, size: 200 * 1024, want: 'warn',   why: '폭 충분해도 200KB면 원인 점검' },
    { w: 600,  size: 60 * 1024,  want: 'ok',     why: '우회군이지만 80KB 이하' },
    { w: 600,  size: 90 * 1024,  want: 'warn',   why: '🔴 우회군 = 디스크가 곧 전송량' },
    { w: 1600, size: 50 * 1024,  want: 'warn',   why: '규격 초과 폭' },
  ];
  let pass = 0;
  for (const c of cases) {
    const narrow = c.w < 750;
    const got = (c.w > MAX_W) || (narrow ? c.size > NARROW_WARN : c.size > WIDE_WARN) ? 'warn' : 'ok';
    const ok = got === c.want;
    if (ok) pass++;
    console.log(`  ${ok ? '✓' : '✗'} w${c.w} ${(c.size/1024).toFixed(0)}KB → ${got} (기대 ${c.want}) — ${c.why}`);
  }
  console.log(`\n셀프테스트 ${pass}/${cases.length}`);
  process.exit(pass === cases.length ? 0 : 1);
}

const files = readdirSync(DIR).filter(f => /\.(webp|png|jpe?g)$/i.test(f));
const bad = [], warn = [];
let total = 0, narrowTotal = 0, narrowCount = 0;

for (const f of files) {
  const p = `${DIR}/${f}`;
  const size = statSync(p).size;
  total += size;
  if (!/\.webp$/i.test(f)) { bad.push(`${f} — webp가 아니다(png/jpg 금지)`); continue; }
  let md;
  try { md = await sharp(p).metadata(); } catch { bad.push(`${f} — 읽기 실패(손상 의심)`); continue; }
  if (size < 2048) { bad.push(`${f} — ${(size/1024).toFixed(1)}KB (1KB대 = 빈 플레이스홀더 의심)`); continue; }
  const narrow = md.width < 750;
  if (narrow) { narrowCount++; narrowTotal += size; }
  if (md.width > MAX_W) warn.push(`${f} — 폭 ${md.width}px (규격 1200 초과 · 리사이즈 필요)`);
  else if (narrow && size > NARROW_WARN)
    warn.push(`${f} — ${(size/1024).toFixed(1)}KB · 폭 ${md.width}px 🔴 최적화 우회군(디스크=전송량) → 크롭하거나 1200px 원본으로 교체`);
  else if (!narrow && size > WIDE_WARN)
    warn.push(`${f} — ${(size/1024).toFixed(1)}KB (${md.width}x${md.height}) · 폭은 충분하나 이례적 → 해상도·정보 없는 픽셀 점검`);
}

console.log('\n══════ 이미지 이상치 점검 ══════');
console.log(`대상 ${files.length}장 · 합계 ${(total/1024/1024).toFixed(1)}MB · 평균 ${(total/files.length/1024).toFixed(1)}KB`);
console.log(`🔴 최적화 우회군(폭<750): ${narrowCount}장 · ${(narrowTotal/1024).toFixed(0)}KB — 이 그룹만 디스크=전송량이다`);
console.log(`\n기준: 폭≥750 → 상한 없음(${(WIDE_WARN/1024)}KB 초과만 원인 점검) · 폭<750 → ${(NARROW_WARN/1024)}KB`);
if (bad.length) { console.log(`\n🔴 오류 ${bad.length}건`); bad.forEach(x => console.log('  ' + x)); }
if (warn.length) { console.log(`\n🟠 확인 ${warn.length}건`); warn.forEach(x => console.log('  ' + x)); }
if (!bad.length && !warn.length) console.log('\n✅ 이상 없음');
console.log('');
process.exit(bad.length ? 1 : 0);
