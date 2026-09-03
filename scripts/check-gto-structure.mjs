/**
 * GTO 솔버 13편 — 로케일 «구조 게이트» (EN 1:1 계수 + 폐기 앵커 + 표기 규칙)
 *
 *   node scripts/check-gto-structure.mjs --locale=zh
 *
 * 무엇을 보나 (zh 회차 2026-09-03에 신설 · es 회차의 임시 게이트를 상설화)
 *   · EN ↔ 로케일: H2 수 · 내부링크 수·대상 집합 · FAQ 문항 수 · ::: 디렉티브 종류·순서 · 본문 이미지 수 ·
 *     ==하이라이트== 수 · 표 행 수 · readnext 행 수 — 전부 «개수 동일»이어야 한다(스펙 §4-A-3 「번역 + 5필드」).
 *   · 백틱(content 여닫이 2개 외 0) · `-en.webp` 잔존 · 히어로 파일명 · content 안 히어로 마크다운(다국어는 금지) ·
 *     desc 길이 · masterUpdated = EN updated · readTime 형식 · 태그 앵커 · 폐기 명제 앵커(로케일별) · 표기 규칙(로케일별).
 *
 * 🔴 오탐 튜닝 이력(zh): 「暗三条罕见」= EN 축어 «A set is rare»(폐기 명제는 trips) · 「完全没打中」= ⑥의 底牌(폐기 명제는 3bet 范围) ·
 *    번체 의심 집합에 「率」이 들어가 13/13 오탐. → 앵커는 명제의 «주어»까지 포함해 쓴다.
 * 🪶 check:gto(수치 집합)와 짝이다 — 이 게이트는 «자리»를 안 본다. 수치의 자리는 딜러/§13 렌즈가 본다.
 */
import { readFileSync, existsSync } from 'fs';

const args = process.argv.slice(2);
const LOCALE = (args.find((a) => a.startsWith('--locale=')) || '').split('=')[1];
if (!LOCALE) { console.error('사용법: node scripts/check-gto-structure.mjs --locale=<zh|ja|es|…>'); process.exit(2); }

const SLUGS = ['a-high-board-cbet','k-high-board-cbet','broadway-board-strategy','donk-bet-strategy','monotone-board-strategy','paired-board-strategy','low-board-check-raise','3bet-pot-cbet','3bet-pot-bet-sizing','3bet-pot-low-board','blind-battle-cbet','blind-battle-connected-board','ace-paired-board-strategy'];

/** 로케일별 규칙 — 앵커·라벨·문자 집합. 없는 로케일은 구조 계수만 본다. */
const RULES = {
  zh: {
    ban: [/跟注方.{0,8}占优/, /(BB|跟注方).{0,6}占优牌面/, /c-bet 频率.{0,6}(掉|降|崩)/, /SPR 低的时候.{0,12}小注/, /因为 SPR 低/, /过牌加注.{0,4}频率.{0,6}(变高|上升|升高)/, /顺着下注之后/, /明三条.{0,6}(并不少见|很少见|罕见|不常见)/, /3bet 范围.{0,6}(整个|完全)都?没打中/, /13 个案例/, /13 篇/, /十三个/, /同样的 0\.05bb/, /只有能赢你的牌才会跟注/, /EQR 越高越有利/, /权益实现越高越占优/, /所以 58\.3% 弃牌/],
    badChars: /[這個們來時說於後為與從對將會裡邊籌詐關讓聽麼樣進圖]/g, badCharsName: '번체 의심',
    quick: /> \*\*快速回答\*\*/, readnext: /:::readnext\[(?!继续阅读\])/, checkedRow: /\| (验证|确认|已核对|检查) \|/,
    card10: /10[♠♥♦♣]/, readTime: /readTime: "\d+ 分钟"/, tag: /"德州扑克 gto"/,
    // 🟠 牌局은 «spot» 뜻일 때만 결함이다 — «my game / a live game»(⑨:272 · ⑩:200)은 정당하다(2차 교열 판정). 경고로만 낸다.
    warn: [[/牌局/, '牌局 — spot 뜻이면 局面으로(«실전/한 판» 뜻이면 정당 · 앱 축어 「自己计算这个牌局」 제외)', (c) => c.replace(/自己计算这个牌局|分享牌局/g, '')]],
    extra: [[/EV（bb）/, 'EV（bb）(→EV (bb) 반각)'], [/最低防守频率/, '最低防守频率(→最小)'], [/侧栏/, '侧栏(→侧边栏)'], [/成手/, '成手(→成牌)'], [/芯片/, '芯片(→按钮)'], [/三条大街/, '三条大街(→三条街)'], [/13x13/, '13x13(→13×13)'], [/\*\*\*\*/, '**** 볼드 충돌']],
  },
};
const R = RULES[LOCALE] || {};

const content = (s) => { const i = s.indexOf('content: `'); const j = s.indexOf('`.trim()', i); return s.slice(i + 10, j < 0 ? undefined : j); };
const counts = (c, loc) => ({
  h2: (c.match(/^## /gm) || []).length,
  links: (c.match(new RegExp('\\]\\(/' + loc + '/', 'g')) || []).length,
  linkTargets: [...c.matchAll(new RegExp('\\]\\(/' + loc + '/(blog/[a-z0-9-]+|solver)', 'g'))].map((m) => m[1]).sort().join(','),
  faq: (c.match(/\*\*Q\. /g) || []).length,
  dir: (c.match(/^:::[a-z]+/gm) || []).length,
  dirs: (c.match(/^:::[a-z]+/gm) || []).join(','),
  img: (c.match(/!\[/g) || []).length,
  hl: (c.match(/==(?:[rgb]:)?[^=]+==/g) || []).length,
  tableRows: (c.match(/^\|/gm) || []).length,
  readnext: (c.match(/^\/[a-z-]{2,7}\/blog\/[^|]+\|/gm) || []).length,
});

let bad = 0;
for (const slug of SLUGS) {
  const lp = `lib/posts-${LOCALE}/${slug}.ts`;
  if (!existsSync(lp)) { console.log(`✘ ${slug}: 파일 없음(${lp})`); bad++; continue; }
  const ls = readFileSync(lp, 'utf8'), es = readFileSync(`lib/posts-en/${slug}.ts`, 'utf8');
  const lc = content(ls), ec = content(es);
  const z = counts(lc, LOCALE), e = counts(ec, 'en');
  const issues = [];
  for (const k of ['h2','links','faq','dir','img','hl','tableRows','readnext']) if (z[k] !== e[k]) issues.push(`${k} en=${e[k]} ${LOCALE}=${z[k]}`);
  if (z.linkTargets !== e.linkTargets) issues.push(`linkTargets differ:\n   en=${e.linkTargets}\n   ${LOCALE}=${z.linkTargets}`);
  if (z.dirs !== e.dirs) issues.push(`dirs differ en=${e.dirs} ${LOCALE}=${z.dirs}`);
  const bt = (ls.match(/`/g) || []).length - 2; if (bt !== 0) issues.push(`backticks ${bt}`);
  if (/-en\.webp/.test(ls)) issues.push('-en.webp 잔존');
  if (!new RegExp(`-oop-${LOCALE}\\.webp`).test(ls)) issues.push(`image -oop-${LOCALE}.webp 아님`);
  if (new RegExp(`!\\[[^\\]]*\\]\\(/images/gto-[a-z0-9-]+-oop-${LOCALE}\\.webp`).test(lc)) issues.push('content에 히어로(oop) 마크다운 있음');
  const desc = (ls.match(/desc: "([^"]*)"/) || [])[1] || ''; if (desc.length > 160 || desc.length < 60) issues.push(`desc ${desc.length}`);
  const mu = (ls.match(/masterUpdated: "([^"]+)"/) || [])[1]; const eu = es.match(/updated: "([^"]+)"/)[1];
  if (!mu) issues.push('masterUpdated 없음'); else if (mu !== eu) issues.push(`masterUpdated ${mu} ≠ EN updated ${eu}`);
  if (R.badChars) { const m = lc.match(R.badChars) || []; if (m.length) issues.push(`${R.badCharsName} ${m.length}: ${[...new Set(m)].join('')}`); }
  for (const r of R.ban || []) { const m = lc.match(r); if (m) issues.push(`폐기 앵커 «${m[0]}»`); }
  if (R.quick && !R.quick.test(lc) && /> \*\*Quick answer\*\*/.test(ec)) issues.push('Quick answer 블록 라벨 불일치');
  if (R.readnext && R.readnext.test(lc)) issues.push('readnext 라벨 불일치');
  if (R.checkedRow && R.checkedRow.test(lc)) issues.push('조건표 마지막 행 라벨 불일치');
  if (R.card10 && R.card10.test(lc)) issues.push('카드 10 표기');
  if (R.readTime && !R.readTime.test(ls)) issues.push('readTime 형식');
  if (R.tag && !R.tag.test(ls)) issues.push('앵커 태그 없음');
  for (const [re, label, pre] of R.extra || []) { const t = pre ? pre(lc) : lc; if (re.test(t)) issues.push(label); }
  const warns = [];
  for (const [re, label, pre] of R.warn || []) { const t = pre ? pre(lc) : lc; const m = t.match(new RegExp(re.source, 'g')); if (m) warns.push(`${label} ×${m.length}`); }
  if (issues.length) { bad++; console.log(`✘ ${slug}\n - ` + issues.join('\n - ')); }
  else console.log(`✔ ${slug} (H2 ${z.h2} · links ${z.links} · faq ${z.faq} · dir ${z.dir} · img ${z.img} · hl ${z.hl} · rows ${z.tableRows} · desc ${desc.length})`);
  for (const w of warns) console.log(`   🟠 ${w}`);
}
console.log(bad ? `\n🔴 ${bad}편 결함` : `\n✅ ${SLUGS.length}/${SLUGS.length} 구조 통과 (${LOCALE})`);
process.exit(bad ? 1 : 0);
