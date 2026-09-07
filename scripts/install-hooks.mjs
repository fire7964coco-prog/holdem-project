#!/usr/bin/env node
/**
 * install-hooks.mjs — `scripts/hooks/` 의 훅을 이 클론에 설치한다.
 *
 *   npm run hooks:install
 *
 * 🔴 훅은 git 이 «추적하지 않는» 자리(.git/hooks)에 산다 — 그래서 소스는 `scripts/hooks/` 에 두고
 *    이 스크립트가 복사한다. 레인 워크트리는 **공용 git 디렉터리를 함께 쓰므로 한 번 설치로 전부 덮인다**
 *    (`git rev-parse --git-common-dir`).
 * 🔴 재클론하면 사라진다 — 새 클론에서 `npm run hooks:install` 을 한 번 돌려라.
 */
import { execFileSync } from 'node:child_process';
import { copyFileSync, chmodSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const commonDir = execFileSync('git', ['rev-parse', '--git-common-dir'], { encoding: 'utf8' }).trim();
const dest = resolve(commonDir, 'hooks');
const src = resolve('scripts/hooks');

if (!existsSync(src)) {
  console.error('🔴 scripts/hooks 가 없다.');
  process.exit(1);
}
mkdirSync(dest, { recursive: true });

const names = readdirSync(src).filter((f) => !f.endsWith('.sample'));
for (const n of names) {
  const to = join(dest, n);
  copyFileSync(join(src, n), to);
  try { chmodSync(to, 0o755); } catch { /* Windows 는 실행 비트가 없다 */ }
  console.log(`✅ ${n} → ${to}`);
}

const wts = execFileSync('git', ['worktree', 'list'], { encoding: 'utf8' }).trim().split(/\r?\n/);
console.log(`\n🪶 공용 훅이라 워크트리 ${wts.length}개에 동시에 걸린다:`);
wts.forEach((w) => console.log(`   · ${w}`));
console.log('\n설치된 것 = ' + names.join(' · '));
