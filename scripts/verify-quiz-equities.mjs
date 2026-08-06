/**
 * /win-rate-quiz 본문 표에 넣을 승률을 §13대로 직접 검산한다.
 * 눈대중·기억 금지 — 사이트가 실제로 쓰는 평가기(app/win-rate-quiz/_equity.ts)로 계산한다.
 *
 * ⚠️ best7fast는 Card 객체가 아니라 NCard 튜플 [rank 2..14, suit 0..3]을 받는다.
 *    객체를 넘기면 전부 동점(50%)으로 나온다 — 실제로 한 번 그렇게 틀렸다.
 *
 * 실행: node scripts/verify-quiz-equities.mjs
 */
import { EVAL } from "../app/win-rate-quiz/_equity.ts";

const { best7fast } = EVAL;

// _equity.ts와 동일한 순서 (RANKS.indexOf + 2 / SUITS.indexOf)
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const SUITS = ["♠", "♥", "♦", "♣"];

/** "A♠" → [14, 0] */
function nc(id) {
  const suit = id.slice(-1);
  const rank = id.slice(0, -1);
  const r = RANKS.indexOf(rank);
  const s = SUITS.indexOf(suit);
  if (r < 0 || s < 0) throw new Error("bad card: " + id);
  return [r + 2, s];
}

const DECK = [];
for (let s = 0; s < 4; s++) for (let r = 2; r <= 14; r++) DECK.push([r, s]);

const key = (c) => c[0] * 4 + c[1];

function poolWithout(cards) {
  const used = new Set(cards.map(key));
  return DECK.filter((c) => !used.has(key(c)));
}

/** 헤즈업 에퀴티 (타이 0.5) — 보드 5장 무작위 */
function equityHU(heroIds, villIds, iters) {
  const hero = heroIds.map(nc);
  const vill = villIds.map(nc);
  const pool = poolWithout([...hero, ...vill]);
  const h7 = [hero[0], hero[1], null, null, null, null, null];
  const v7 = [vill[0], vill[1], null, null, null, null, null];
  let score = 0;
  for (let it = 0; it < iters; it++) {
    for (let i = 0; i < 5; i++) {
      const j = i + Math.floor(Math.random() * (pool.length - i));
      const t = pool[i]; pool[i] = pool[j]; pool[j] = t;
      h7[2 + i] = pool[i];
      v7[2 + i] = pool[i];
    }
    const h = best7fast(h7);
    const v = best7fast(v7);
    if (h > v) score += 1;
    else if (h === v) score += 0.5;
  }
  return (score / iters) * 100;
}

/** 히어로 vs 무작위 N명 — 상대 홀카드도 매 시도 새로 뽑는다 */
function equityVsRandom(heroIds, iters, opponents = 1) {
  const hero = heroIds.map(nc);
  const pool = poolWithout(hero);
  const need = opponents * 2 + 5;
  const h7 = [hero[0], hero[1], null, null, null, null, null];
  let score = 0;
  for (let it = 0; it < iters; it++) {
    for (let i = 0; i < need; i++) {
      const j = i + Math.floor(Math.random() * (pool.length - i));
      const t = pool[i]; pool[i] = pool[j]; pool[j] = t;
    }
    const board = [pool[opponents * 2], pool[opponents * 2 + 1], pool[opponents * 2 + 2], pool[opponents * 2 + 3], pool[opponents * 2 + 4]];
    for (let i = 0; i < 5; i++) h7[2 + i] = board[i];
    const h = best7fast(h7);
    let better = 0, equal = 0;
    for (let o = 0; o < opponents; o++) {
      const v = best7fast([pool[o * 2], pool[o * 2 + 1], ...board]);
      if (v > h) { better++; break; }
      if (v === h) equal++;
    }
    if (better === 0) score += equal > 0 ? 1 / (equal + 1) : 1;
  }
  return (score / iters) * 100;
}

const N = Number(process.argv[2] || 400000);
console.log(`\n샘플 ${N.toLocaleString()}회 · 평가기 = app/win-rate-quiz/_equity.ts best7fast (NCard 튜플)\n`);

const rows = [
  ["AA vs 무작위 1명", () => equityVsRandom(["A♠", "A♥"], N, 1), "85.2 (핸드오프)"],
  ["72o vs 무작위 1명", () => equityVsRandom(["7♠", "2♥"], N, 1), "34.6 (핸드오프)"],
  ["AA vs KK", () => equityHU(["A♠", "A♥"], ["K♠", "K♥"], N), "82.64 (_equity.ts 헤더)"],
  ["AKs vs QQ", () => equityHU(["A♠", "K♠"], ["Q♥", "Q♦"], N), "46.21 (_equity.ts 헤더)"],
  ["AA vs 무작위 5명", () => equityVsRandom(["A♠", "A♥"], N, 5), "—"],
  ["72o vs 무작위 5명", () => equityVsRandom(["7♠", "2♥"], N, 5), "—"],
  ["AKo vs 무작위 1명", () => equityVsRandom(["A♠", "K♥"], N, 1), "—"],
  ["AKo vs 무작위 5명", () => equityVsRandom(["A♠", "K♥"], N, 5), "—"],
  ["AKs vs 무작위 1명", () => equityVsRandom(["A♠", "K♠"], N, 1), "—"],
  ["AKs vs 무작위 5명", () => equityVsRandom(["A♠", "K♠"], N, 5), "—"],
  ["JJ vs AKs", () => equityHU(["J♠", "J♥"], ["A♦", "K♦"], N), "—"],
];

console.log("시나리오".padEnd(20), "계산값", "  대조(기존 검증값)");
for (const [name, fn, ref] of rows) {
  console.log(name.padEnd(20), fn().toFixed(2) + "%", " ", ref);
}

console.log("\n팟오즈 필요 승률 = 콜액 ÷ (콜 후 팟)");
for (const [label, pot, bet] of [
  ["하프팟 벳", 100, 50],
  ["3/4팟 벳", 100, 75],
  ["풀팟 벳", 100, 100],
  ["2배팟 벳", 100, 200],
]) {
  const need = (bet / (pot + bet + bet)) * 100;
  console.log(`  ${label.padEnd(9)} ${bet} ÷ (${pot} + ${bet} + ${bet}) = ${need.toFixed(1)}%`);
}
