#!/usr/bin/env node
/**
 * lane-sync.mjs — 경화 레인 동기화 게이트 (헤드 전용)
 *
 *   node scripts/lane-sync.mjs              상태만 본다 (읽기 전용)
 *   node scripts/lane-sync.mjs --apply      안전한 레인에 `git merge main` 을 넣는다
 *   node scripts/lane-sync.mjs --selftest   경로 귀속 판정 자가 검증
 *
 * 왜 있나 — 2026-09-07 하루에 세 레인이 전부 `git merge main` 을 건너뛰어
 * 헤드가 충돌 6hunk·1hunk 를 손으로 풀었다(WORKLOG 「2026-09-07 (5)(6)(8)」).
 * 규율을 «레인이 기억하는 것»에서 «헤드가 매 회차 끝에 미는 것»으로 옮긴다.
 * 근거 = `docs/hardening-protocol.md` §5-⓪ · §6.
 *
 * 🔴 이 게이트가 «원리상» 못 보는 것: 실제 3-way 병합의 hunk 단위 충돌.
 *    파일 교집합이 0이면 충돌도 0이지만, 교집합이 있어도 hunk 가 안 겹치면 병합된다.
 *    그래서 판정은 «충돌한다/아니다»가 아니라 «충돌할 수 있다/없다»다 — 매 실행 「미판정」으로 찍는다.
 */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const BASE = 'main';

/** 레인이 소유한 자리 — 정본 = hardening-protocol.md §1 「쓰는 파일」 */
const OWNED = {
  zh: [
    'lib/posts-zh/',
    'docs/harden-zh-진행.md',
    'docs/harden-brief/zh-',
    'docs/keyword-bank/zh-',
    'docs/local-voice/zh.md',
    'docs/translation-terms-zh.md',
  ],
  'zh-hant': [
    'lib/posts-zh-hant/',
    'docs/harden-zh-hant-진행.md',
    'docs/harden-brief/zh-hant-',
    'docs/keyword-bank/zh-hant-',
    'docs/local-voice/zh-tw.md',
    'docs/translation-terms-zh-hant.md',
  ],
  ja: [
    'lib/posts-ja/',
    'docs/harden-ja-진행.md',
    'docs/harden-brief/ja-',
    'docs/keyword-bank/ja-',
    'docs/local-voice/ja-jp.md',
    'docs/translation-terms-ja.md',
  ],
  /** 🧰 헤드 잔여 작업 레인(2026-09-11 · 프로토콜 §7-F) — 로케일 레인 셋의 자리를 «뺀» 나머지 글·이미지·게이트 */
  queue: [
    'lib/posts-en/',
    'lib/posts-ar/',
    'lib/posts-de/',
    'lib/posts-es/',
    'lib/posts-fr/',
    'lib/posts-id/',
    'lib/posts-pt/',
    'public/images/',
    'docs/harden-queue-진행.md',
    'docs/harden-brief/queue-',
    'docs/en-first-queue.md',
  ],
};

/** 🔴 접두 충돌 — `zh` 의 자리가 `zh-hant` 를 삼키면 안 된다. 긴 로케일부터 본다. */
const LOCALES_LONGEST_FIRST = Object.keys(OWNED).sort((a, b) => b.length - a.length);

/** 경로 하나가 어느 레인 것인가. 아무 데도 안 걸리면 null(= 공용 파일). */
export function ownerOf(path) {
  for (const loc of LOCALES_LONGEST_FIRST) {
    for (const pre of OWNED[loc]) {
      if (!path.startsWith(pre)) continue;
      // `docs/keyword-bank/zh-` 가 `zh-hant-...` 를 잡지 않도록, 더 긴 로케일이 먼저 걸리는지 확인
      const better = LOCALES_LONGEST_FIRST.find(
        (o) => o !== loc && o.length > loc.length && OWNED[o].some((p) => path.startsWith(p))
      );
      if (better) return better;
      return loc;
    }
  }
  return null;
}

const git = (args, cwd) =>
  execFileSync('git', args, { cwd, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

const zsplit = (s) => s.split('\0').filter(Boolean);

function worktrees() {
  const out = git(['worktree', 'list', '--porcelain']);
  const list = [];
  let cur = {};
  for (const line of out.split(/\r?\n/)) {
    if (line.startsWith('worktree ')) cur = { path: line.slice(9).trim() };
    else if (line.startsWith('branch ')) cur.branch = line.slice(7).trim().replace('refs/heads/', '');
    else if (line === '') { if (cur.path) list.push(cur); cur = {}; }
  }
  if (cur.path) list.push(cur);
  return list.filter((w) => w.branch && w.branch.startsWith('harden-'));
}

function selftest() {
  const cases = [
    ['lib/posts-zh/holdem-3bet.ts', 'zh'],
    ['lib/posts-zh-hant/holdem-3bet.ts', 'zh-hant'],
    ['lib/posts-ja/holdem-3bet.ts', 'ja'],
    ['lib/posts-en/holdem-3bet.ts', 'queue'],
    ['lib/posts-de/holdem-3bet.ts', 'queue'],
    ['public/images/holdem-3bet-hero.webp', 'queue'],
    ['docs/harden-queue-진행.md', 'queue'],
    ['docs/harden-brief/queue-Q1.md', 'queue'],
    ['docs/en-first-queue.md', 'queue'],
    ['lib/posts-ko/holdem-3bet.ts', null],
    ['scripts/lane-sync.mjs', null],
    ['docs/keyword-bank/zh-strategy.md', 'zh'],
    ['docs/keyword-bank/zh-hant-odds-cluster.md', 'zh-hant'],
    ['docs/keyword-bank/ja-probability.md', 'ja'],
    ['docs/local-voice/zh.md', 'zh'],
    ['docs/local-voice/zh-tw.md', 'zh-hant'],
    ['docs/local-voice/ja-jp.md', 'ja'],
    ['docs/harden-zh-진행.md', 'zh'],
    ['docs/harden-zh-hant-진행.md', 'zh-hant'],
    ['docs/harden-brief/zh-전략.md', 'zh'],
    ['docs/harden-brief/zh-hant-확률.md', 'zh-hant'],
    ['public/sitemap.xml', null],
    ['WORKLOG.md', null],
    ['session-handoff.md', null],
    ['mailbox/out-본체.md', null],
  ];
  let bad = 0;
  for (const [p, want] of cases) {
    const got = ownerOf(p);
    if (got !== want) { bad++; console.log(`  🔴 ${p} → ${got} (기대 ${want})`); }
  }
  console.log(`\n${bad === 0 ? '✅' : '🔴'} 셀프테스트 ${cases.length - bad}/${cases.length}`);
  console.log('🪶 검증 범위 = «경로 귀속 판정»뿐이다. 실제 3-way 병합 결과는 미판정(아래 주석 참조).');
  return bad === 0 ? 0 : 1;
}

function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('--selftest')) process.exit(selftest());
  const apply = argv.includes('--apply');

  const lanes = worktrees();
  if (lanes.length === 0) { console.log('레인 워크트리가 없다.'); return 0; }

  console.log('══════ 레인 동기화 게이트 (헤드 전용) ══════');
  console.log(`기준 = ${BASE} @ ${git(['rev-parse', '--short', BASE]).trim()}\n`);

  let blocked = 0;
  let ownedHit = 0;
  const report = [];

  for (const w of lanes) {
    const loc = w.branch.replace(/^harden-/, '');
    const label = `${w.branch} (${w.path.split(/[\\/]/).pop()})`;
    if (!existsSync(w.path)) { console.log(`⚠  ${label} — 워크트리 경로 없음, 건너뜀\n`); continue; }

    const behind = git(['log', '--oneline', `${w.branch}..${BASE}`]).split(/\r?\n/).filter(Boolean).length;
    if (behind === 0) { console.log(`✅ ${label} — 이미 최신(behind 0)\n`); continue; }

    const incoming = zsplit(git(['diff', '--name-only', '-z', `${w.branch}...${BASE}`]));
    // 워크트리의 로컬 변경(추적 중인 것만 — 미추적은 병합을 막지 않는다, 같은 경로가 새로 들어올 때만 막는다)
    const st = zsplit(git(['status', '--porcelain', '-z'], w.path));
    const modified = [];
    const untracked = [];
    for (let i = 0; i < st.length; i++) {
      const e = st[i];
      const code = e.slice(0, 2);
      const path = e.slice(3);
      if (code === '??') untracked.push(path);
      else {
        modified.push(path);
        if (code[0] === 'R' || code[0] === 'C') i++; // rename/copy 는 원본 경로가 다음 항목
      }
    }

    const clash = incoming.filter((f) => modified.includes(f) || untracked.includes(f));
    const owned = incoming.filter((f) => ownerOf(f) === loc);

    let verdict;
    if (clash.length) { verdict = '🔴 BLOCKED'; blocked++; }
    else if (owned.length) { verdict = '🟠 OWNED'; ownedHit++; }
    else verdict = '🟢 SAFE';

    console.log(`${verdict} ${label} — behind ${behind} · 들어올 파일 ${incoming.length}`);
    if (clash.length) {
      console.log(`   🔴 로컬 변경과 겹친다(병합이 거부된다) ${clash.length}건:`);
      clash.slice(0, 10).forEach((f) => console.log(`      · ${f}`));
      console.log('   → 레인이 커밋하거나 stash 한 뒤에 헤드가 다시 돌린다.');
    }
    if (owned.length) {
      console.log(`   🟠 헤드가 이 레인의 «자기 자리»를 건드렸다 ${owned.length}건 (프로토콜 §6-0 — 레인에 통지할 것):`);
      owned.slice(0, 10).forEach((f) => console.log(`      · ${f}`));
    }
    console.log();
    report.push({ w, loc, behind, verdict, clash, owned });
  }

  const doable = report.filter((r) => !r.clash.length);
  if (!apply) {
    if (doable.length) {
      console.log(`▶ ${doable.length}개 레인이 지금 동기화 가능하다 — \`npm run lane:sync -- --apply\``);
    }
  } else {
    console.log('══════ --apply ══════');
    for (const r of doable) {
      try {
        const out = git(['merge', BASE, '-m', `Merge branch 'main' into ${r.w.branch} (헤드 lane:sync)`], r.w.path);
        const head = git(['rev-parse', '--short', 'HEAD'], r.w.path).trim();
        console.log(`✅ ${r.w.branch} → ${head}  ${out.split(/\r?\n/)[0]}`);
      } catch (e) {
        console.log(`🔴 ${r.w.branch} 병합 실패 — 손으로 풀어라\n${(e.stdout || '') + (e.stderr || '')}`);
        blocked++;
      }
    }
    console.log();
  }

  console.log('──────');
  console.log(`🔴 BLOCKED ${blocked} · 🟠 OWNED ${ownedHit} · 검사 레인 ${lanes.length}`);
  console.log('🪶 미판정: 이 게이트는 «파일 교집합»만 본다. 교집합이 있어도 hunk 가 안 겹치면 병합되고,');
  console.log('   교집합이 0이면 충돌은 0이다. 🟠 OWNED 는 «충돌 위험 + 레인 통지 필요» 신호이지 실패가 아니다.');
  return blocked > 0 ? 1 : 0;
}

process.exit(main());
