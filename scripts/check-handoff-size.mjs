/**
 * 핸드오프 비대 감시 — `session-handoff.md`가 «통독 가능한 크기»를 넘었는지 본다.
 *
 * 왜 만들었나 (2026-09-10 · 사장님 지적)
 *   축어: *「핸드오프라는게 지금한일과 다음새션에서 할일을 적어서 맥락을 쉽게 알수있게 하는게 목적인데
 *   그럼 여태까지 핸드오프를 쌓아뒀던겨야?? … 지난것들은 읽을필요가 없지않나??」*
 *
 *   🔴 **CLAUDE.md는 「session-handoff.md 통독」을 지시하는데, 288KB는 Read 상한을 넘어 통독이 «물리적으로 불가능»했다.**
 *   그래서 세션마다 «다른 500행»만 보고 시작했다 — 누적보다 이쪽이 더 나쁘다. 세션마다 다른 그림을 갖게 된다.
 *   실사고: 2026-09-09에 헤드가 「팩 C 동결 중」이라는 **해제된 지 오래인 메모**를 믿고 대기 항목으로 올렸고
 *   사장님이 「팩 C는 아까 완료됐는데」로 정정했다(메모리 `stale-freeze-notes-verify-worklog`).
 *
 *   실측한 증가 곡선: 2026-08-24 대청소 직후 **88KB** → 09-10 **288KB**(17일 · 하루 약 12KB).
 *   09-09 하루에만 270 → 285KB. **회차마다 쌓이고 한 번도 줄지 않았다.**
 *
 * 규율 (CLAUDE.md §12 마감 3단)
 *   ① 경위는 `WORKLOG.md`로  ② 영구 규율은 정본 문서로 승격  ③ 핸드오프엔 «다음 할 일 + 미결»만
 *   종결된 항목은 **취소선을 긋는 게 아니라 지운다.** 대청소하면 이전본을 `docs/handoff-archive/`에 보관한다.
 *
 * 판정
 *   ✅  ~30KB   한 번에 통독된다(약 15K 토큰)
 *   🟠 30~60KB  통독이 아슬아슬하다 — 종결분을 걷어낼 때다
 *   🔴 60KB~    통독 불가. 다음 세션은 «부분만 보고» 시작하게 된다 → 즉시 대청소
 *
 * 사용
 *   npm run check:handoff
 *   npm run check:handoff -- --strict     🔴면 exit 1
 *   npm run check:handoff:selftest
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TARGET = path.join(ROOT, 'session-handoff.md');

const args = process.argv.slice(2);
const has = (n) => args.includes(`--${n}`);

const AMBER_KB = 30;
const RED_KB = 60;

/** 종결 표시가 붙은 행 — 이것이 많으면 «지우지 않고 취소선만 긋고 있다»는 뜻이다 */
const DONE_RE = /~~|✅/;

export function analyze(text) {
  const lines = text.split('\n');
  const kb = Buffer.byteLength(text) / 1024;
  const done = lines.filter((l) => DONE_RE.test(l));
  const doneKb = Buffer.byteLength(done.join('\n')) / 1024;
  const sections = [];
  let cur = null;
  lines.forEach((l, i) => {
    if (/^## /.test(l)) { cur = { title: l.slice(3, 60), from: i, lines: [] }; sections.push(cur); }
    else if (cur) cur.lines.push(l);
  });
  for (const s of sections) s.kb = Buffer.byteLength(s.lines.join('\n')) / 1024;
  return {
    kb, lines: lines.length,
    doneLines: done.length, doneKb,
    sections: sections.sort((a, b) => b.kb - a.kb),
    level: kb >= RED_KB ? 'red' : kb >= AMBER_KB ? 'amber' : 'ok',
  };
}

function selftest() {
  const t = [];
  const one = (name, ok) => t.push([name, ok]);
  const small = analyze('# x\n## 절\n내용\n');
  one('작은 파일은 ✅', small.level === 'ok');
  const big = analyze('# x\n## 절\n' + 'ㄱ'.repeat(25 * 1024));       // 한글 3바이트 → 약 73KB
  one('큰 파일은 🔴', big.level === 'red');
  const mid = analyze('# x\n## 절\n' + 'a'.repeat(40 * 1024));
  one('중간 파일은 🟠', mid.level === 'amber');
  const d = analyze('## 절\n~~1~~ 종결\n✅ 종결\n살아있는 항목\n');
  one('종결 표시 행을 센다', d.doneLines === 2);
  one('절 크기를 잰다', d.sections.length === 1 && d.sections[0].title.startsWith('절'));
  let pass = 0;
  for (const [name, ok] of t) { if (ok) pass++; console.log(`${ok ? '✅' : '❌'} ${name}`); }
  console.log(`selftest ${pass}/${t.length}`);
  process.exit(pass === t.length ? 0 : 1);
}

function main() {
  if (has('selftest')) return selftest();
  if (!fs.existsSync(TARGET)) { console.log('⚠ session-handoff.md 없음'); return; }
  const r = analyze(fs.readFileSync(TARGET, 'utf8'));
  const mark = r.level === 'red' ? '🔴' : r.level === 'amber' ? '🟠' : '✅';
  console.log(`${mark} 핸드오프 ${r.kb.toFixed(0)}KB · ${r.lines}행 · 종결 표시 행 ${r.doneLines}개(${r.doneKb.toFixed(0)}KB)`);
  console.log(`   기준: ✅ ~${AMBER_KB}KB 통독 가능 · 🟠 ${AMBER_KB}~${RED_KB}KB · 🔴 ${RED_KB}KB~ 통독 불가`);
  if (r.sections.length) {
    console.log('   큰 절:');
    for (const s of r.sections.slice(0, 4)) console.log(`     ${s.kb.toFixed(0).padStart(4)}KB  ${s.title}`);
  }
  if (r.level !== 'ok') {
    console.log('\n🔴 대청소하라 (CLAUDE.md §12 마감 3단):');
    console.log('   ① 경위는 WORKLOG.md로 — 핸드오프에 회차 보고를 남기지 마라');
    console.log('   ② 영구 규율·확정 결정은 정본 문서로 승격(settled-decisions 등)');
    console.log('   ③ 핸드오프엔 «다음 할 일 + 미결»만 — 🔴 **종결분은 취소선이 아니라 «지운다»**');
    console.log('   ④ 대청소 전 이전본을 docs/handoff-archive/<날짜>-session-handoff-full.md 로 보관');
    if (r.doneKb > 20) console.log(`   🪶 종결 표시 행만 ${r.doneKb.toFixed(0)}KB다 — 그것만 지워도 크게 준다.`);
  }
  if (has('strict') && r.level === 'red') process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
