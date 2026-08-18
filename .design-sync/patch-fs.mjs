/**
 * 🔴 스테이징된 design-sync 스크립트(`.ds-sync/`)에서 «이 PC 의 Node 가 즉사시키는» fs API 를 갈아끼운다.
 *
 * ── 무엇이 깨졌나 (2026-08-18 실측, Node v24.12.0 / Windows 11) ──
 *   `fs.rmSync`, `fs.cpSync` 두 개가 호출 즉시 **프로세스를 죽인다**.
 *   종료코드 0xC0000409(-1073740791). JS 예외가 아니라 하드 크래시라 try/catch 로 못 잡고,
 *   Git Bash 에서는 127 로, PowerShell 에서는 -1073740791 로 보인다. 스택 트레이스도 없다.
 *   `rmSync` 는 **경로가 없어도**(force:true) 죽는다.
 *
 *   반면 이것들은 전부 정상이다: `fs.promises.rm` · `copyFileSync` · `renameSync` · `unlinkSync` ·
 *   `rmdirSync` · `mkdirSync` · `readdirSync` · `lstatSync` · `globSync` · `statfsSync`.
 *   → 깨진 건 «재귀형 동기 API» 둘뿐이고, 그래서 그 둘만 비재귀 원시함수로 다시 구현하면 된다.
 *
 * ── 증상 (이걸 안 돌리면) ──
 *   `package-build.mjs` 가 out 디렉터리 초기화(rmSync)나 폰트/토큰 복사(cpSync)에서 말없이 죽는다.
 *   헤더 몇 줄만 찍히고 산출물이 없거나 반쪽이라, validate 가 「styles.css missing」 같은
 *   **엉뚱한 증상**을 보고한다. 원인을 여기 안 적어 두면 다음 세션이 그 엉뚱한 증상부터 쫓게 된다.
 *
 * ── 왜 `--import` 프리로드가 아니라 소스 패치인가 ──
 *   스크립트들이 `import { rmSync } from 'node:fs'` 로 **명명 임포트**를 쓴다.
 *   명명 임포트는 링크 시점에 바인딩이 고정돼, 프리로드에서 `fs.rmSync` 를 갈아끼워도 안 바뀐다.
 *   (실제로 시도했고 안 먹었다.) 임포트 자체를 바꾸는 수밖에 없다.
 *
 * ── 🔴 매번 돌려야 한다 ──
 *   `.ds-sync/` 는 gitignore 대상이고 지시서가 동기화마다 `cp -r` 로 다시 스테이징한다.
 *   **그 복사 직후 매번** 이걸 돌려라:   node .design-sync/patch-fs.mjs
 *   (그래서 이 파일은 durable 인 `.design-sync/` 에 산다.)
 *
 * 🪶 Node 를 바꿔서 아래가 통과하면 이 파일과 NOTES 의 해당 항목을 지워라:
 *      node -e 'const f=require("fs");f.rmSync("./__x__",{recursive:true,force:true});console.log("ok")'
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';

const DS = join(process.cwd(), '.ds-sync');
if (!existsSync(DS)) {
  console.error('🔴 .ds-sync/ 가 없다 — 지시서의 cp -r 스테이징을 먼저 하라.');
  process.exit(1);
}

/* 안전판 구현체 (스테이징 트리 안에 심어 상대경로가 항상 성립하게 한다). */
mkdirSync(join(DS, 'lib'), { recursive: true });
writeFileSync(join(DS, 'lib', 'fs-safe.mjs'), `/* design-sync 용 fs 안전판 — .design-sync/patch-fs.mjs 가 생성한다. 손으로 고치지 마라.
   이 PC 의 Node v24.12.0 에서 rmSync·cpSync 가 하드 크래시(0xC0000409)해서 비재귀 원시함수로 다시 구현했다. */
import { copyFileSync, lstatSync, mkdirSync, readdirSync, rmdirSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';

const rmrf = (target) => {
  let st;
  try { st = lstatSync(target); }
  catch (e) { if (e && e.code === 'ENOENT') return; throw e; }
  if (st.isDirectory()) {
    for (const entry of readdirSync(target)) rmrf(join(target, entry));
    rmdirSync(target);
  } else {
    unlinkSync(target);
  }
};

export function rmSync(target, options = {}) {
  try { rmrf(target); }
  catch (e) { if (options.force && e && e.code === 'ENOENT') return; throw e; }
}

export function cpSync(src, dest, options = {}) {
  const st = lstatSync(src);
  if (st.isDirectory()) {
    if (!options.recursive) {
      const err = new Error(\`EISDIR: illegal operation on a directory, cp \${src}\`);
      err.code = 'ERR_FS_EISDIR';
      throw err;
    }
    mkdirSync(dest, { recursive: true });
    for (const entry of readdirSync(src)) cpSync(join(src, entry), join(dest, entry), options);
  } else {
    mkdirSync(dirname(dest), { recursive: true });
    copyFileSync(src, dest);
  }
}
`, 'utf8');

/* 낡은 이름의 안전판이 남아 있으면 치운다 (이 스크립트의 이전 판이 만든 것). */
const legacy = join(DS, 'lib', 'rmsync-safe.mjs');
if (existsSync(legacy)) { unlinkSync(legacy); console.log('  🧹 rmsync-safe.mjs 제거(구판)'); }

const BROKEN = ['rmSync', 'cpSync'];

/* .ds-sync/ 전체를 훑는다 — 파일 목록을 손으로 적으면 스킬이 파일을 추가할 때 조용히 새어나간다. */
const walk = (dir, out = []) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules') continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.mjs') && e.name !== 'fs-safe.mjs') out.push(p);
  }
  return out;
};

let patched = 0, skipped = 0;
for (const file of walk(DS)) {
  const rel = file.slice(DS.length + 1).replace(/\\/g, '/');
  let src = readFileSync(file, 'utf8');
  if (src.includes('fs-safe.mjs')) { skipped++; continue; }

  const importRe = /import\s*\{([^}]*)\}\s*from\s*['"](?:node:)?fs['"];?/;
  const m = src.match(importRe);
  if (!m) { skipped++; continue; }

  const names = m[1].split(',').map((s) => s.trim()).filter(Boolean);
  const moved = names.filter((n) => BROKEN.includes(n));
  if (!moved.length) { skipped++; continue; }
  const kept = names.filter((n) => !BROKEN.includes(n));

  const multiline = m[1].includes('\n');
  const rebuilt = kept.length
    ? (multiline ? `import {\n  ${kept.join(',\n  ')},\n} from 'node:fs';`
                 : `import { ${kept.join(', ')} } from 'node:fs';`)
    : '';
  const depth = rel.split('/').length - 1;
  const safePath = (depth === 0 ? './lib/fs-safe.mjs' : '../'.repeat(depth) + 'lib/fs-safe.mjs');
  const inject = `${rebuilt}${rebuilt ? '\n' : ''}import { ${moved.join(', ')} } from '${safePath}';`
    + `  // 🔴 Node v24.12.0 하드크래시 우회 — .design-sync/patch-fs.mjs`;

  writeFileSync(file, src.replace(importRe, () => inject), 'utf8');
  patched++;
  console.log(`  ✅ ${rel}  (${moved.join(', ')})`);
}
console.log(`fs 패치 — 적용 ${patched} · 건너뜀 ${skipped}`);

/* 잔존 검사: node:fs 에서 오는 깨진 API 가 하나도 없어야 한다. */
const leaks = [];
for (const file of walk(DS)) {
  const src = readFileSync(file, 'utf8');
  const m = src.match(/import\s*\{([^}]*)\}\s*from\s*['"](?:node:)?fs['"];?/);
  if (!m) continue;
  const names = m[1].split(',').map((s) => s.trim());
  for (const b of BROKEN) if (names.includes(b)) leaks.push(`${file.slice(DS.length + 1)}: ${b}`);
}
for (const file of walk(DS)) {
  const src = readFileSync(file, 'utf8');
  if (src.includes('fs-safe.mjs')) continue;
  for (const b of BROKEN) if (new RegExp('\\b' + b + '\\b').test(src)) leaks.push(file.slice(DS.length + 1) + ': ' + b + ' (원시 grep)');
}
if (leaks.length) { console.error('🔴 잔존:\n  ' + leaks.join('\n  ')); process.exit(1); }
console.log('✅ 잔존 0 — node:fs 에서 오는 rmSync·cpSync 없음');
