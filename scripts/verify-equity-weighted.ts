/**
 * 수트 패턴 가중 평균 검산 — 브리프 §1 표는 «모든 수트 조합 평균»이다.
 * AA vs KK: 6×6 = 36 조합 · AKo vs 22 · AKs vs 22 · AKo vs QQ · AKo vs 99 전수.
 * 실행: npx tsx scripts/verify-equity-weighted.ts
 */
import { calcEquity } from "../lib/equity";

const RANK = "23456789TJQKA";
function combos(r1: number, r2: number, suited: boolean | null): number[][] {
  const out: number[][] = [];
  for (let s1 = 0; s1 < 4; s1++) for (let s2 = 0; s2 < 4; s2++) {
    const a = r1 * 4 + s1, b = r2 * 4 + s2;
    if (a === b) continue;
    if (r1 === r2 && s1 >= s2) continue; // pocket pair: unordered
    if (suited === true && s1 !== s2) continue;
    if (suited === false && s1 === s2) continue;
    out.push([a, b]);
  }
  return out;
}
function weighted(h1: number[][], h2: number[][], label: string, expect: number) {
  let sum = 0, n = 0;
  const t0 = Date.now();
  for (const a of h1) for (const b of h2) {
    if (a.some(c => b.includes(c))) continue;
    const r = calcEquity([a, b], [], { maxExact: 2_000_000 });
    sum += r.equity[0]; n++;
  }
  const avg = (sum / n) * 100;
  console.log(label + ": " + n + " combos · hand1 avg equity " + avg.toFixed(2) + "% · expect " + expect + " · " + (Math.abs(avg - expect) < 0.06 ? "OK" : "MISMATCH") + " · " + (Date.now() - t0) + "ms");
}
const R = (c: string) => RANK.indexOf(c);
weighted(combos(R("A"), R("A"), null), combos(R("K"), R("K"), null), "AA vs KK", 81.95);
weighted(combos(R("A"), R("K"), false), combos(R("2"), R("2"), null), "AKo vs 22", 47.35);
weighted(combos(R("A"), R("K"), true), combos(R("2"), R("2"), null), "AKs vs 22", 49.89);
weighted(combos(R("A"), R("K"), false), combos(R("Q"), R("Q"), null), "AKo vs QQ", 43.1);
weighted(combos(R("A"), R("K"), false), combos(R("9"), R("9"), null), "AKo vs 99", 44.7);
