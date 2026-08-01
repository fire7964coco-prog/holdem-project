/**
 * 빌드 산출물 HTML 전수 해시 스냅샷 / 대조
 *   npm run snapshot:html -- save   → .html-baseline.json 저장
 *   npm run snapshot:html -- diff   → 기준선과 대조 (바이트 단위 동일성 증명)
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const ROOT = '.next/server/app';
const map = {};
const walk = (d) => {
  for (const f of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith('.html')) {
      map[p.split('\\').join('/')] = createHash('sha256').update(readFileSync(p)).digest('hex');
    }
  }
};
walk(ROOT);

const mode = process.argv[2];
if (mode === 'save') {
  writeFileSync('.html-baseline.json', JSON.stringify(map));
  console.log(`기준선 저장: ${Object.keys(map).length}개 HTML`);
} else {
  if (!existsSync('.html-baseline.json')) { console.error('기준선 없음'); process.exit(1); }
  const base = JSON.parse(readFileSync('.html-baseline.json', 'utf8'));
  const bk = Object.keys(base), nk = Object.keys(map);
  const added = nk.filter((k) => !(k in base));
  const removed = bk.filter((k) => !(k in map));
  const changed = nk.filter((k) => k in base && base[k] !== map[k]);
  console.log(`기준선 ${bk.length}개 · 현재 ${nk.length}개`);
  console.log(`  추가 ${added.length} · 삭제 ${removed.length} · ★내용변경 ${changed.length}`);
  for (const k of [...added.slice(0, 5)]) console.log('   + ' + k);
  for (const k of [...removed.slice(0, 5)]) console.log('   - ' + k);
  for (const k of changed.slice(0, 20)) console.log('   ~ ' + k);
  if (changed.length > 20) console.log(`   … 외 ${changed.length - 20}개`);
  const ok = added.length === 0 && removed.length === 0 && changed.length === 0;
  console.log(ok ? '\n✅ 611페이지 바이트 단위 완전 동일' : '\n🔴 차이 있음 — 원인 규명 전에는 진행 금지');
  process.exit(ok ? 0 : 1);
}
