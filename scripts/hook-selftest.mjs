#!/usr/bin/env node
/**
 * hook-selftest.mjs — pre-commit 훅 자가 검증
 *
 *   npm run hooks:selftest
 *
 * 🔴 게이트는 «규칙보다 셀프테스트 먼저»다(메모리 gate-tuning-loop-is-the-work).
 *    여기 🔴 케이스 둘은 **실제로 났던 사고의 커밋 쌍**이다 — 훅이 그때 있었으면 막았어야 한다.
 */
import { spawnSync, execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { readFileSync, existsSync } from 'node:fs';

const HOOK = 'scripts/hooks/pre-commit';

const CASES = [
  {
    name: '🔴 ja 회차 2 (2026-09-07) — 헤드가 lib/posts-ja/ 4편을 고친 뒤 레인이 커밋',
    env: { HARDEN_HOOK_BRANCH: 'harden-ja', HARDEN_HOOK_LANE_REF: '2f66c089', HARDEN_HOOK_BASE: 'a167457a' },
    want: 1,
  },
  {
    name: '🔴 ja 회차 1 (2026-09-07) — 헤드 EN-먼저 11건이 lib/posts-ja/ 6편을 고침',
    env: { HARDEN_HOOK_BRANCH: 'harden-ja', HARDEN_HOOK_LANE_REF: 'a15cc9ba', HARDEN_HOOK_BASE: 'f0515d4e' },
    want: 1,
  },
  {
    name: '🟢 zh 회차 4 (2026-09-08) — main 이 앞섰지만 lib/posts-zh/ 는 안 건드림(오탐 금지)',
    env: { HARDEN_HOOK_BRANCH: 'harden-zh', HARDEN_HOOK_LANE_REF: '818c08d0', HARDEN_HOOK_BASE: 'c872db83' },
    want: 0,
  },
  {
    name: '🟢 레인이 아닌 브랜치(main)는 그냥 통과',
    env: { HARDEN_HOOK_BRANCH: 'main' },
    want: 0,
  },
  {
    name: '🟢 탈출구 HARDEN_SKIP_SYNC=1 은 🔴 케이스도 통과시킨다',
    env: { HARDEN_SKIP_SYNC: '1', HARDEN_HOOK_BRANCH: 'harden-ja', HARDEN_HOOK_LANE_REF: '2f66c089', HARDEN_HOOK_BASE: 'a167457a' },
    want: 0,
  },
];

let bad = 0;
for (const c of CASES) {
  const r = spawnSync('sh', [HOOK], { env: { ...process.env, ...c.env }, encoding: 'utf8' });
  const got = r.status;
  const ok = got === c.want;
  if (!ok) bad++;
  console.log(`${ok ? '✅' : '🔴'} ${c.name}  → exit ${got} (기대 ${c.want})`);
}

// 🔴 설치본 ↔ 레포본 대조 (2026-09-11 ja 회차 12 §5-J 1) — 레포본만 고치고 `npm run hooks:install` 을 안 돌리면
//    5/5 가 «레포본»만 검증해 낡은 설치본이 그대로 남는다(09-09 기록 → 09-11 재발 · HARDEN_SKIP_SYNC 우회).
{
  const commonDir = execFileSync('git', ['rev-parse', '--git-common-dir'], { encoding: 'utf8' }).trim();
  const installed = resolve(commonDir, 'hooks', 'pre-commit');
  const norm = (t) => t.split(String.fromCharCode(13)).join('');
  const same = existsSync(installed) && norm(readFileSync(installed, 'utf8')) === norm(readFileSync(HOOK, 'utf8'));
  if (!same) bad++;
  console.log(`${same ? '✅' : '🔴'} 설치본 == 레포본 (${installed})${same ? '' : '  → npm run hooks:install 을 돌려라'}`);
}
console.log(`\n${bad === 0 ? '✅' : '🔴'} 훅 셀프테스트 ${CASES.length + 1 - bad}/${CASES.length + 1}`);
console.log('🪶 미판정: 훅은 `lib/posts-<locale>/` 만 본다. 레인 소유 «문서»(진행 파일·뱅크·voice)가');
console.log('   겹치는 경우는 막지 않는다 — 그쪽은 헤드가 `npm run lane:status` 의 🟠 OWNED 로 본다.');
process.exit(bad === 0 ? 0 : 1);
