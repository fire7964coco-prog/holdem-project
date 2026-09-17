/**
 * ICM 딜 예시 재계산 — 도구 페이지 「ICM chop calculator」 절의 새 예시(holdem-icm 글과 다른 스택·상금)와
 * 아웃츠 표 «플롭→턴 1장» 열(o/47). 실행: npx tsx scripts/calc-icm-example.ts
 */
function icm(stacks: number[], prizes: number[]): number[] {
  const n = stacks.length;
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
  return ev;
}
const cases: [number[], number[]][] = [
  [[55, 30, 15], [1200, 800, 400]],
  [[45, 25, 18, 12], [1000, 600, 400, 0]],
  [[45, 25, 18, 12], [1000, 600, 400, 300]],
];
for (const [s, p] of cases) {
  const total = p.reduce((a, b) => a + b, 0);
  const sumS = s.reduce((a, b) => a + b, 0);
  const v = icm(s, p);
  console.log("stacks " + s.join("/") + " prizes " + p.join("/") + " total " + total);
  s.forEach((st, i) => console.log("  " + st + "%\tchop $" + ((st / sumS) * total).toFixed(0) + "\tICM $" + v[i].toFixed(0) + "\tdiff " + (v[i] - (st / sumS) * total).toFixed(0)));
}
console.log("outs flop→turn (o/47):");
for (let o = 1; o <= 20; o++) process.stdout.write(o + ":" + ((o / 47) * 100).toFixed(1) + "% ");
console.log();
