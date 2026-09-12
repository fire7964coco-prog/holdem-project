/**
 * 발신함 무결성 게이트 — `mailbox/out-본체.md`가 «자기 자신을 삼켰는지»를 본다
 *
 * ★ 왜 만들었나 (2026-09-12 · queue 회차 Q7-a)
 *   이 파일은 2026-09-08에 **자기 자신을 MB-011 행 «중간»에 통째로 덧붙였고**, 다음 발신 때
 *   그게 다시 두 배가 됐다. 결과: 본문 4벌 중복 · 262행 · MB-011·MB-012는 머리와 꼬리가
 *   갈라져 두 조각 · 표가 끊긴 자리 아래의 **MB-026~028은 아카이브 절 밑으로 밀려 큐에서 사라졌다.**
 *   🔴 **17일간 아무도 못 봤다** — 이 파일엔 게이트가 없었고, 새 행은 «맨 아래»에만 붙으니
 *   위쪽 오염이 안 보인다. 🔴 **복구해도 원문은 안 돌아온다**(오염이 «행을 쓰는 그 순간»에
 *   일어나 git 어느 커밋에도 깨끗한 판이 없다 — 코드 스팬 한 자리는 영구 유실).
 *   그 파일 머리글이 스스로 정한 쓰기 전 검증 3종이 이 게이트의 사양이다.
 *
 * 🔴 이 게이트가 «보는 것»과 «못 보는 것»
 *   본다   = ① MB 행 수 = 고유 ID 수(중복·조각남) ② 헤더 블록 1개(파일 자기복제)
 *            ③ 아카이브 절 아래 ${ID_PREFIX} 행 0개(큐에서 사라진 행) ④ 행마다 파이프 5~7개(표 파손)
 *            ⑤ ID 수열의 빈 번호(파싱 완전성 — §12-B 「빠진 번호가 없는지」)
 *   못 본다 = 내용이 «옳은가» · 상대가 실제로 받았는가 · 회신이 달렸는가(그건 두 발신함을
 *            읽어 계산하는 별개 도구 몫이다 — 이 파일 「상태는 계산되는 것이다」 절)
 *
 * 🔴 파이프 5~7의 근거 (첫 실행 전건 원문 판정 · 2026-09-12)
 *   규격은 6열 = 파이프 **7개**다. 실측 46행 중 41행이 7, **5행이 5**(= 마지막 두 열
 *   `포인터`·`확인`이 통째로 빠진 행)였다. 5행은 표가 깨진 게 아니라 «열 결손»이라 🟠다.
 *   🔴 **8개 이상이 진짜 사고**다 — 요지 안에 리터럴 파이프가 들어가 표가 거기서 끊긴다
 *   (이 파일이 2026-09-06에 그렇게 한 번 깼다). 4개 이하도 같은 이유로 🔴.
 *
 * 사용
 *   npm run check:mailbox
 *   npm run check:mailbox -- --strict     🔴면 exit 1
 *   npm run check:mailbox:selftest
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args0 = process.argv.slice(2);
const targetArg = args0.find((a) => a.startsWith('--target='));
/** 기본은 본체 발신함. `--target=<경로>`로 다른 발신함(검수장·솔버)도 같은 규격으로 잴 수 있다. */
const TARGET = targetArg ? path.resolve(ROOT, targetArg.slice(9)) : path.join(ROOT, 'mailbox', 'out-본체.md');

const args = process.argv.slice(2);
const has = (n) => args.includes(`--${n}`);

const idArg = args0.find((a) => a.startsWith('--id='));
/** ID 접두 — 본체는 `MB`, 검수장은 `MA`, 솔버는 `S`. `--id=MA`로 바꾼다. */
const ID_PREFIX = idArg ? idArg.slice(5) : 'MB';
/** 큐 행 — `| MB-041 | 09-11 | 검수장 | … |` */
const ROW = new RegExp('^\\|\\s*(' + ID_PREFIX + '-\\d+)\\s*\\|');
/** 파일 머리글 — H1은 하나뿐이어야 한다. 둘이면 파일이 자기 자신을 삼킨 것이다. */
const HEADER = /^# /;
/** 아카이브 절 */
const ARCHIVE = /^## .*아카이브/;
/**
 * 🔴 «아카이브 아래 행 = 사라진 행»은 **본체 발신함에만** 맞다.
 *    본체는 아카이브 절에 «다른 파일로 가라»는 포인터만 두고 행을 내리지 않는다 —
 *    그래서 거기 행이 있으면 2026-09-08 자기삼킴처럼 «밀려난» 것이다.
 *    그런데 **검수장 발신함은 정책이 반대다**: 그 파일 아카이브 절이 스스로
 *    *「완료 행은 월 단위로 이 절 아래로 내린다(도구는 이 절을 읽지 않는다)」* 라고 적어 뒀다.
 *    `--target`으로 그 파일을 재면 정상 이관 2행이 🔴로 찍힌다(2026-09-12 실측 — **내 오탐이었다**).
 *    그래서 규칙을 박지 않고 **그 절의 선언을 읽어** 판정한다.
 */
const ARCHIVE_HOLDS_ROWS = /아래로\s*내린다|이 절에 보관|여기로 옮긴다/;

const MIN_PIPES = 5;
const MAX_PIPES = 7;
const SPEC_PIPES = 7;

export function analyze(text) {
  const lines = text.split('\n');
  let archiveAt = -1;
  const headers = [];
  const rows = [];
  lines.forEach((l, i) => {
    if (HEADER.test(l)) headers.push(i + 1);
    if (ARCHIVE.test(l) && archiveAt < 0) archiveAt = i + 1;
    const m = l.match(ROW);
    if (m) rows.push({ line: i + 1, id: m[1], pipes: (l.match(/\|/g) || []).length });
  });

  // 아카이브 절이 «행을 내린다»고 스스로 선언했나 — 그 절 머리 5줄에서 찾는다
  const archiveHoldsRows =
    archiveAt > 0 && ARCHIVE_HOLDS_ROWS.test(lines.slice(archiveAt, archiveAt + 5).join('\n'));

  const ids = rows.map((r) => r.id);
  const uniq = new Set(ids);
  const dupes = [...uniq].filter((id) => ids.filter((x) => x === id).length > 1);
  const afterArchive = archiveAt > 0 && !archiveHoldsRows ? rows.filter((r) => r.line > archiveAt) : [];
  const archived = archiveAt > 0 && archiveHoldsRows ? rows.filter((r) => r.line > archiveAt) : [];
  const broken = rows.filter((r) => r.pipes < MIN_PIPES || r.pipes > MAX_PIPES);
  const shortRows = rows.filter((r) => r.pipes >= MIN_PIPES && r.pipes < SPEC_PIPES);

  // ID 수열의 빈 번호 — 파싱 완전성(CLAUDE.md §12-B)
  const nums = [...uniq].map((id) => Number(id.slice(ID_PREFIX.length + 1))).sort((a, b) => a - b);
  const gaps = [];
  for (let n = nums[0]; n <= nums[nums.length - 1]; n++) if (!nums.includes(n)) gaps.push(n);

  return {
    rowCount: rows.length, uniqCount: uniq.size, dupes,
    headers, archiveAt, afterArchive, archived, archiveHoldsRows, broken, shortRows, gaps,
    red: dupes.length + (headers.length !== 1 ? 1 : 0) + afterArchive.length + broken.length,
  };
}

function selftest() {
  const t = [];
  const one = (name, ok) => t.push([name, ok]);
  const H = '# 📤 본체 발신함 (out-본체)\n';
  const row = (id, pipes = 7) => '| ' + id + ' | 09-12 | 검수장 | 요지 |' + (pipes === 7 ? ' p | c |' : '');

  const ok = analyze(H + row('MB-001') + '\n' + row('MB-002') + '\n## 🧊 아카이브\n본문\n');
  one('정상 파일은 🔴 0', ok.red === 0 && ok.rowCount === 2 && ok.uniqCount === 2);

  const dup = analyze(H + row('MB-001') + '\n' + row('MB-001') + '\n');
  one('중복 ID를 잡는다', dup.dupes.length === 1 && dup.red > 0);

  const two = analyze(H + row('MB-001') + '\n' + H + row('MB-002') + '\n');
  one('헤더 2개(자기복제)를 잡는다', two.headers.length === 2 && two.red > 0);

  const arch = analyze(H + row('MB-001') + '\n## 🧊 아카이브\n' + row('MB-002') + '\n');
  one('아카이브 아래로 밀린 행을 잡는다', arch.afterArchive.length === 1 && arch.red > 0);

  const pipe = analyze(H + '| MB-001 | 09-12 | 검수장 | a | b 파이프 | c | p | c |\n');
  one('리터럴 파이프(8개 이상)를 잡는다', pipe.broken.length === 1 && pipe.red > 0);

  const short = analyze(H + row('MB-001', 5) + '\n');
  one('열 결손(파이프 5)은 🟠이지 🔴이 아니다', short.shortRows.length === 1 && short.broken.length === 0 && short.red === 0);

  const gap = analyze(H + row('MB-001') + '\n' + row('MB-003') + '\n');
  one('빈 번호를 센다(파싱 완전성)', gap.gaps.length === 1 && gap.gaps[0] === 2);

  one('아카이브 절이 없으면 «아래로 밀림»은 0', analyze(H + row('MB-001') + '\n').afterArchive.length === 0);

  let pass = 0;
  for (const [name, okk] of t) { if (okk) pass++; console.log(`${okk ? '✅' : '❌'} ${name}`); }
  console.log(`selftest ${pass}/${t.length}`);
  process.exit(pass === t.length ? 0 : 1);
}

function main() {
  if (has('selftest')) return selftest();
  const shown = path.relative(ROOT, TARGET).split(path.sep).join('/');
  console.log(`── 발신함 무결성 게이트 (${shown} · ID ${ID_PREFIX}-###) ──`);
  if (!fs.existsSync(TARGET)) {
    console.log(`⚠ 미판정 — ${shown} 가 없다. («0건»이 아니다.)`);
    return;
  }
  const r = analyze(fs.readFileSync(TARGET, 'utf8'));

  const line = (mark, msg) => console.log(`${mark} ${msg}`);
  line(r.dupes.length ? '🔴' : '✅', `${ID_PREFIX} 행 ${r.rowCount}개 = 고유 ID ${r.uniqCount}개${r.dupes.length ? ' — 중복 ' + r.dupes.join(', ') : ''}`);
  line(r.headers.length === 1 ? '✅' : '🔴', `헤더 블록 ${r.headers.length}개${r.headers.length !== 1 ? ' (L' + r.headers.join(', L') + ') — 파일이 자기 자신을 삼켰다' : ''}`);
  if (r.archiveHoldsRows) {
    console.log(`🪶 아카이브 절이 «완료 행을 내린다»고 선언했다 — 그 아래 ${r.archived.length}행은 정상 이관이다(이 규칙은 파일마다 다르다)`);
  }
  line(r.afterArchive.length ? '🔴' : '✅', `아카이브 절 아래 ${ID_PREFIX} 행 ${r.afterArchive.length}개${r.afterArchive.length ? ' — ' + r.afterArchive.map((x) => x.id + '@L' + x.line).join(', ') : ''}`);
  line(r.broken.length ? '🔴' : '✅', `표 파손(파이프 ${MIN_PIPES}~${MAX_PIPES} 밖) ${r.broken.length}건${r.broken.length ? ' — ' + r.broken.map((x) => x.id + ' 파이프 ' + x.pipes).join(', ') : ''}`);

  if (r.shortRows.length) {
    console.log(`🟠 열 결손 ${r.shortRows.length}건 — 규격은 6열(파이프 ${SPEC_PIPES})인데 마지막 열이 비어 있다:`);
    console.log('   ' + r.shortRows.map((x) => x.id).join(', '));
    console.log('   🪶 표가 깨진 건 아니다. 「확인」 칸이 비면 «상대가 받았는지»를 계산할 수 없다.');
  }
  /* 🔴 빈 번호를 🪶로 버리면 안 된다 — 2026-09-08 사고의 증상이 정확히 «행이 사라지는 것»이었다.
     실측(2026-09-12): 이 파일의 아카이브 절 아래엔 `M-001~110`뿐이고 그건 **다른 저장소 파일**에 있다.
     즉 **MB 번호가 정당하게 빠지는 경로가 현재 없다** → 빈 번호는 정밀도가 높은 신호다. 🟠로 올린다. */
  if (r.gaps.length) {
    console.log(`🟠 ID 빈 번호 ${r.gaps.length}개 — ${ID_PREFIX}-${r.gaps.join(', ' + ID_PREFIX + '-')}`);
    console.log('   🔴 MB 번호는 정당하게 빠지지 않는다(아카이브는 다른 파일의 `M-###`다) — 행이 사라졌는지 확인하라.');
  }

  console.log('\n── 커버리지 ──');
  console.log(`   ${ID_PREFIX} 행 ${r.rowCount} · 고유 ID ${r.uniqCount} · 아카이브 절 L${r.archiveAt > 0 ? r.archiveAt : '없음'}`);
  console.log('   ⚠ 못 본다: 내용의 옳음 · 상대 수신 여부 · 회신 달림(그건 두 발신함을 읽는 별개 도구)');
  console.log('   🔴 **발신함은 셋인데 이 게이트는 하나만 본다** — `mailbox/out-본체.md`뿐이다.');
  console.log('      나머지 둘(`홀덤검수/mailbox/out-검수장.md` · 같은 폴더 `MAILBOX.md`)은 **남의 저장소**라');
  console.log('      이 레인이 손대지 않는다. 2026-09-08 자기삼킴은 «쓰는 절차»가 원인이었고 그 절차는 셋이 공유한다 —');
  console.log('      검수장 쪽도 같은 검사가 필요하면 `--target=<경로>`로 돌릴 수 있게 열어 두었다.');
  console.log('   🪶 쓰는 법 = `.mjs`에서 readFileSync → 배열 → 마지막 MB 행 «다음»에 splice → 쓰기.');
  console.log('      🔴 `cat >>`·heredoc·리다이렉션 금지(2026-09-08 사고). 쓰기 «전»에 이 게이트를 돌려라.');

  if (has('strict') && r.red) process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
