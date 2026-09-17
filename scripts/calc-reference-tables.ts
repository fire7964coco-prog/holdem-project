/**
 * §13 정본표 생성 — `/en/calculator` 빠른 참조 섹션의 모든 수치는 이 스크립트 출력에서만 가져온다.
 *  A. 아웃츠 1–20: 플롭→리버(2장) 정확값 · 턴→리버(1장) 정확값 · 4·2 법칙 근사
 *  B. 팟오즈: 베팅 크기(팟 대비) → 팟오즈 비율 → 필요 에퀴티
 *  C. 프리플롭 매치업: 수트 조합 전수 평균(브리프 queue-Q5-c §1과 같은 방법)
 *  D. AA vs 랜덤 핸드 N명: Monte Carlo 400k
 *  E. ICM 예시 2개(버블·딜) Malmuth-Harville 재계산
 * 실행: npx tsx scripts/calc-reference-tables.ts
 */
import { calcEquity } from "../lib/equity";

const R = "23456789TJQKA";
const ri = (c: string) => R.indexOf(c);

// A. outs
console.log("=== A. outs (flop→river 2 cards | turn→river 1 card | rule of 4 | rule of 2)");
for (let o = 1; o <= 20; o++) {
  const two = 1 - ((47 - o) / 47) * ((46 - o) / 46);
  const one = o / 46;
  console.log(o + "\t" + (two * 100).toFixed(1) + "%\t" + (one * 100).toFixed(1) + "%\t" + Math.min(o * 4, 100) + "%\t" + o * 2 + "%");
}
// also flop→turn single card (o/47) for the flush-draw FAQ
console.log("flop→turn only, 9 outs: " + ((9 / 47) * 100).toFixed(1) + "%  ratio " + ((47 - 9) / 9).toFixed(2) + ":1");

// B. pot odds
console.log("=== B. pot odds (bet as fraction of pot → ratio → required equity)");
for (const f of [0.25, 1 / 3, 0.5, 2 / 3, 0.75, 1, 1.5, 2, 3]) {
  const pot = 1, bet = f;
  const ratio = (pot + bet) / bet;
  const eq = bet / (pot + 2 * bet);
  console.log(f.toFixed(2) + "x pot\t" + ratio.toFixed(2) + ":1\t" + (eq * 100).toFixed(1) + "%");
}

// C. preflop matchups (suit-weighted)
function combos(r1: number, r2: number, suited: boolean | null): number[][] {
  const out: number[][] = [];
  for (let s1 = 0; s1 < 4; s1++) for (let s2 = 0; s2 < 4; s2++) {
    const a = r1 * 4 + s1, b = r2 * 4 + s2;
    if (a === b) continue;
    if (r1 === r2 && s1 >= s2) continue;
    if (suited === true && s1 !== s2) continue;
    if (suited === false && s1 === s2) continue;
    out.push([a, b]);
  }
  return out;
}
function parseHand(h: string): number[][] {
  const r1 = ri(h[0]), r2 = ri(h[1]);
  const suited = h.length > 2 ? h[2] === "s" : null;
  return combos(r1, r2, suited);
}
function weighted(h1: string, h2: string) {
  let sumA = 0, sumB = 0, tie = 0, n = 0;
  for (const a of parseHand(h1)) for (const b of parseHand(h2)) {
    if (a.some(c => b.includes(c))) continue;
    const r = calcEquity([a, b], [], { maxExact: 2_000_000 });
    sumA += r.equity[0]; sumB += r.equity[1]; tie += r.tie[0]; n++;
  }
  console.log(h1 + " vs " + h2 + "\t" + ((sumA / n) * 100).toFixed(1) + "%\t" + ((sumB / n) * 100).toFixed(1) + "%\ttie " + ((tie / n) * 100).toFixed(1) + "%\t(" + n + " combos)");
}
console.log("=== C. preflop matchups (suit-weighted exact)");
const M: [string, string][] = [
  ["AA", "KK"], ["AA", "AKs"], ["KK", "AKs"], ["QQ", "AKo"], ["QQ", "AKs"], ["22", "AKo"],
  ["AKo", "AQo"], ["AKs", "QJs"], ["TT", "A9o"], ["TT", "87s"], ["AA", "87s"], ["AA", "72o"], ["AKo", "JTs"], ["JJ", "TT"],
];
for (const [a, b] of M) weighted(a, b);

// D. AA vs N random opponents
console.log("=== D. AA (AsAh) vs N random hands · MC 8,000,000 (mulberry32 seed 7)");
// 🔴 09-17 수학 렌즈: 옛 LCG(seed*1103515245)는 53비트 가수 밖으로 넘쳐 14,469스텝 주기 → 표 D 3칸이 0.1p 틀렸다.
//   mulberry32(32비트 안전)로 교체. 검증 = 1 opp 85.2036%(공지 정확값) 재현.
let seed = 7 >>> 0;
const rng = () => {
  seed = (seed + 0x6d2b79f5) >>> 0;
  let t = seed;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
for (let n = 1; n <= 8; n++) {
  const hands: number[][] = [[ri("A") * 4 + 0, ri("A") * 4 + 1], ...Array.from({ length: n }, () => [] as number[])];
  const r = calcEquity(hands, [], { trials: 8_000_000, rng });
  console.log(n + " opp\t" + (r.equity[0] * 100).toFixed(1) + "%");
}

// E. ICM (Malmuth-Harville)
function icm(stacks: number[], prizes: number[]): number[] {
  const n = stacks.length;
  const total = stacks.reduce((a, b) => a + b, 0);
  const ev = new Array<number>(n).fill(0);
  const rec = (remaining: number[], prizeIdx: number, prob: number) => {
    if (prizeIdx >= prizes.length || remaining.length === 0) return;
    const sum = remaining.reduce((a, i) => a + stacks[i], 0);
    for (const i of remaining) {
      const p = prob * (stacks[i] / sum);
      ev[i] += p * prizes[prizeIdx];
      rec(remaining.filter(j => j !== i), prizeIdx + 1, p);
    }
  };
  rec(stacks.map((_, i) => i), 0, 1);
  return ev.map(v => v);
  void total;
}
console.log("=== E. ICM examples");
const b = icm([60000, 40000, 30000, 20000], [500, 300, 200]);
const bt = b.reduce((a, c) => a + c, 0);
console.log("bubble ICM%: " + b.map(v => ((v / bt) * 100).toFixed(1)).join(" / ") + "  chip%: 40.0 / 26.7 / 20.0 / 13.3");
const d = icm([45, 25, 18, 12], [1000, 600, 400, 300]);
console.log("chop example (45/25/18/12 · $2,300 = 1000/600/400/300) ICM $: " + d.map(v => v.toFixed(0)).join(" / ") + "  chop $: 1035 / 575 / 414 / 276");
