/**
 * §13 검산 — lib/equity.ts를 두 방향으로 대조한다.
 *  ① 무작위 7장 20,000세트: evaluate7 카테고리·우열 ↔ lib/poker-eval.ts(evalBest7/handScore) 완전 일치
 *  ② 전수 열거 매치업 ↔ docs/harden-brief/queue-Q5-c-EN먼저-2F.md §1 값
 *     (AA vs KK 81.95 · AKo vs 22 47.35 · AKs vs 22 49.89 · AKo vs QQ 43.1 · AKo vs 99 44.7)
 * 실행: npx tsx scripts/verify-equity.ts
 */
import { evaluate7, categoryOf, calcEquity, parseCard } from "../lib/equity";
import { evalBest7, handScore, scoreBetter, RANKS, SUITS, type Card } from "../lib/poker-eval";

function toCard(c: number): Card {
  return { rank: RANKS[c >> 2], suit: SUITS[c & 3] } as Card;
}
// poker-eval HandInfo.rank = 1 (royal) … 10 (high card) → category 10-rank
function refCategory(cards: number[]): { cat: number; score: number[] } {
  const { best, bestCards } = evalBest7(cards.map(toCard));
  return { cat: 10 - best.rank, score: handScore(bestCards) };
}

let seed = 12345;
const rng = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x80000000; };
function draw(n: number, exclude: Set<number> = new Set()): number[] {
  const out: number[] = [];
  while (out.length < n) { const c = Math.floor(rng() * 52); if (!exclude.has(c) && !out.includes(c)) out.push(c); }
  return out;
}

// ① category + pairwise ordering
let catMismatch = 0, orderMismatch = 0;
const N = 20000;
for (let i = 0; i < N; i++) {
  const seven = draw(7);
  const a = evaluate7(seven);
  const ra = refCategory(seven);
  if (categoryOf(a) !== ra.cat) { catMismatch++; if (catMismatch < 5) console.log("CAT", seven, categoryOf(a), ra.cat); }
  const board = seven.slice(2);
  const hole2 = draw(2, new Set(seven));
  const seven2 = [...hole2, ...board];
  const b = evaluate7(seven2);
  const rb = refCategory(seven2);
  let ref: -1 | 0 | 1;
  if (ra.cat !== rb.cat) ref = ra.cat > rb.cat ? 1 : -1;
  else if (scoreBetter(ra.score, rb.score)) ref = 1;
  else if (scoreBetter(rb.score, ra.score)) ref = -1;
  else ref = 0;
  const mine: -1 | 0 | 1 = a > b ? 1 : a < b ? -1 : 0;
  if (ref !== mine) { orderMismatch++; if (orderMismatch < 5) console.log("ORDER", seven, seven2, mine, ref, ra, rb); }
}
console.log("① random 7-card sets: " + N + " · category mismatches " + catMismatch + " · ordering mismatches " + orderMismatch);

// ② exact preflop matchups — 특정 수트 조합 1개 값(참고). 브리프 §1의 «수트 가중 평균»은 verify-equity-weighted.ts가 판정한다.
const H = (s: string) => s.split(" ").map(parseCard);
const cases: [string, string, string, number][] = [
  ["AA vs KK", "As Ah", "Ks Kh", 81.95],
  ["AKo vs 22", "Ah Kd", "2s 2c", 47.35],
  ["AKs vs 22", "Ah Kh", "2s 2c", 49.89],
  ["AKo vs QQ", "Ah Kd", "Qs Qc", 43.1],
  ["AKo vs 99", "Ah Kd", "9s 9c", 44.7],
];
for (const [name, a, b, expect] of cases) {
  const t0 = Date.now();
  const r = calcEquity([H(a), H(b)], [], { maxExact: 2_000_000 });
  const eqA = r.equity[0] * 100;
  console.log("② " + name + ": hand1 equity " + eqA.toFixed(2) + "% (win " + (r.win[0]*100).toFixed(2) + " tie " + (r.tie[0]*100).toFixed(2) + ") · expect " + expect + " · exact=" + r.exact + " samples=" + r.samples + " · " + (Date.now()-t0) + "ms · (weighted ref " + expect + ")");
}
// ③ flop exact + Monte Carlo sanity
const r3 = calcEquity([H("Ah Kh"), H("Qs Qc")], H("Th 7h 2c"));
console.log("③ AhKh vs QQ on Th7h2c: AK equity " + (r3.equity[0]*100).toFixed(2) + "% exact=" + r3.exact + " samples=" + r3.samples);
const r4 = calcEquity([H("Ah Kh"), H("Qs Qc"), H("Jd Td")], [], { trials: 60000, rng });
console.log("④ 3-way MC AKs/QQ/JTs: " + r4.equity.map(v => (v*100).toFixed(1)).join(" / ") + " exact=" + r4.exact);
const r5 = calcEquity([H("Ah Kh"), H("Ad Kd")], H("2s 7c 9d Jc 3h"));
console.log("⑤ chop on river: equity " + r5.equity.join(" / ") + " tie " + r5.tie.join(" / "));
