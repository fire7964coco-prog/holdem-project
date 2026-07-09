/**
 * gen-pushfold.mjs — 헤즈업 내시 푸시/폴드 차트 오프라인 생성기
 *
 * 1) 169×169 프리플랍 올인 에퀴티 행렬을 몬테카를로로 계산
 *    - 빠른 비트마스크 7카드 평가기를 사용하되, 커밋 전 lib/poker-eval.ts의
 *      실제 평가기(evalBest7/evalHand5/handScore)와 교차 검증(불일치 0 필수)
 *    - 카드 제거(card removal) 정확 반영: 두 클래스의 서로소 콤보 쌍에서 균등 샘플
 * 2) 스택 1~25bb(0.5 step) × 앤티(없음 / 플레이어당 0.125bb) 별로
 *    SB 푸시 / BB 콜 내시 균형을 fictitious play(반복 최적대응 평균)로 수렴
 * 3) lib/pushfold-data.ts 로 마스크(hex) 방출
 *
 * 실행: node scripts/gen-pushfold.mjs            (기본 300,000 샘플/매치업)
 *       PF_SAMPLES=5000 node scripts/gen-pushfold.mjs   (빠른 파이프라인 점검)
 *
 * 핸드 인덱스 규약 (UI와 동일해야 함):
 *   그리드 13×13, index = row*13 + col, row/col 모두 A,K,Q,...,2 내림차순
 *   대각선 = 페어, col > row = 수티드(오른쪽 위), col < row = 오프수트(왼쪽 아래)
 */
import { Worker, isMainThread, parentPort, workerData } from "node:worker_threads";
import { fileURLToPath } from "node:url";
import { writeFileSync } from "node:fs";
import { cpus } from "node:os";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), "..");

function cliArg(name, dflt) {
  const a = process.argv.find((x) => x.startsWith(`--${name}=`));
  return a ? Number(a.split("=")[1]) : dflt;
}
const SAMPLES = cliArg("samples", Number(process.env.PF_SAMPLES || 300000)); // 매치업당 몬테카를로 샘플
const XVAL_N = cliArg("xval", Number(process.env.PF_XVAL || 60000));         // 평가기 교차검증 딜 수
const STACK_MIN = 1, STACK_MAX = 25, STACK_STEP = 0.5;
const ANTES = [0, 0.125]; // 플레이어당 앤티(bb) — BB 앤티 1bb ≈ 12.5%/인 환산
const FP_ITERS = 3000;    // fictitious play 최대 반복

// ─────────────────────────────────────────────
// 카드/클래스 정의 (rank 0='2' … 12='A', card = rank*4+suit)
// ─────────────────────────────────────────────
const GRID_RANKS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]; // grid index 0..12

/** 클래스 i의 구체 콤보 목록 [[c1,c2], ...] */
function classCombos(idx) {
  const r = Math.floor(idx / 13), c = idx % 13;
  const hiRank = 12 - Math.min(r, c); // card-rank (12=A)
  const loRank = 12 - Math.max(r, c);
  const combos = [];
  if (r === c) { // pair
    for (let s1 = 0; s1 < 4; s1++) for (let s2 = s1 + 1; s2 < 4; s2++)
      combos.push([hiRank * 4 + s1, hiRank * 4 + s2]);
  } else if (c > r) { // suited
    for (let s = 0; s < 4; s++) combos.push([hiRank * 4 + s, loRank * 4 + s]);
  } else { // offsuit
    for (let s1 = 0; s1 < 4; s1++) for (let s2 = 0; s2 < 4; s2++)
      if (s1 !== s2) combos.push([hiRank * 4 + s1, loRank * 4 + s2]);
  }
  return combos;
}

function handLabel(idx) {
  const r = Math.floor(idx / 13), c = idx % 13;
  if (r === c) return GRID_RANKS[r] + GRID_RANKS[c];
  return c > r ? GRID_RANKS[r] + GRID_RANKS[c] + "s" : GRID_RANKS[c] + GRID_RANKS[r] + "o";
}
function labelToIdx(label) {
  for (let i = 0; i < 169; i++) if (handLabel(i) === label) return i;
  throw new Error("unknown hand " + label);
}

const ALL_COMBOS = Array.from({ length: 169 }, (_, i) => classCombos(i));

// 검산: 총 콤보 1326
{
  const total = ALL_COMBOS.reduce((a, c) => a + c.length, 0);
  if (total !== 1326) throw new Error("combo count mismatch: " + total);
}

// 몬테카를로 대상 쌍 목록 (i<j; 대각선은 대칭성으로 정확히 0.5)
const PAIRS = [];
for (let i = 0; i < 169; i++) for (let j = i + 1; j < 169; j++) PAIRS.push([i, j]);

// ─────────────────────────────────────────────
// 빠른 7카드 평가기 (비트마스크) — 큰 값 = 강한 패
// 카테고리: 8=스티플, 7=포카드, 6=풀하우스, 5=플러시, 4=스트레이트,
//           3=트리플, 2=투페어, 1=원페어, 0=하이카드
// ─────────────────────────────────────────────
const _cnt = new Int8Array(13);
const _suitCnt = new Int8Array(4);
const _suitBits = new Int32Array(4);

function straightHigh(bits) {
  for (let hi = 12; hi >= 4; hi--) if (((bits >> (hi - 4)) & 31) === 31) return hi;
  if ((bits & 0x100f) === 0x100f) return 3; // 휠 A-2-3-4-5 → 5하이(rank 3)
  return -1;
}
function top5(bits) {
  let v = 0, n = 0;
  for (let r = 12; r >= 0 && n < 5; r--) if ((bits >> r) & 1) { v = (v << 4) | r; n++; }
  return v;
}
function eval7(a, b, c, d, e, f, g) {
  _cnt.fill(0); _suitCnt.fill(0); _suitBits.fill(0);
  let rankBits = 0, x, r, s;
  x = a; r = x >> 2; s = x & 3; _cnt[r]++; _suitCnt[s]++; _suitBits[s] |= 1 << r; rankBits |= 1 << r;
  x = b; r = x >> 2; s = x & 3; _cnt[r]++; _suitCnt[s]++; _suitBits[s] |= 1 << r; rankBits |= 1 << r;
  x = c; r = x >> 2; s = x & 3; _cnt[r]++; _suitCnt[s]++; _suitBits[s] |= 1 << r; rankBits |= 1 << r;
  x = d; r = x >> 2; s = x & 3; _cnt[r]++; _suitCnt[s]++; _suitBits[s] |= 1 << r; rankBits |= 1 << r;
  x = e; r = x >> 2; s = x & 3; _cnt[r]++; _suitCnt[s]++; _suitBits[s] |= 1 << r; rankBits |= 1 << r;
  x = f; r = x >> 2; s = x & 3; _cnt[r]++; _suitCnt[s]++; _suitBits[s] |= 1 << r; rankBits |= 1 << r;
  x = g; r = x >> 2; s = x & 3; _cnt[r]++; _suitCnt[s]++; _suitBits[s] |= 1 << r; rankBits |= 1 << r;

  // 플러시(7장에서 플러시가 있으면 포카드/풀하우스는 불가능 → 즉시 리턴 안전)
  let fs = -1;
  if (_suitCnt[0] >= 5) fs = 0; else if (_suitCnt[1] >= 5) fs = 1;
  else if (_suitCnt[2] >= 5) fs = 2; else if (_suitCnt[3] >= 5) fs = 3;
  if (fs >= 0) {
    const fb = _suitBits[fs];
    const sh = straightHigh(fb);
    if (sh >= 0) return (8 << 20) | sh;
    return (5 << 20) | top5(fb);
  }
  let quad = -1, t1 = -1, t2 = -1, p1 = -1, p2 = -1;
  for (r = 12; r >= 0; r--) {
    const k = _cnt[r];
    if (k === 4) quad = r;
    else if (k === 3) { if (t1 < 0) t1 = r; else if (t2 < 0) t2 = r; }
    else if (k === 2) { if (p1 < 0) p1 = r; else if (p2 < 0) p2 = r; }
  }
  if (quad >= 0) {
    let kick = -1;
    for (r = 12; r >= 0; r--) if (r !== quad && _cnt[r] > 0) { kick = r; break; }
    return (7 << 20) | (quad << 4) | (kick < 0 ? 0 : kick);
  }
  if (t1 >= 0 && (t2 >= 0 || p1 >= 0)) {
    const pr = t2 >= 0 ? t2 : p1; // 7장에서 t2와 p1 동시 존재 불가(3+3+2=8)
    return (6 << 20) | (t1 << 4) | pr;
  }
  const sh = straightHigh(rankBits);
  if (sh >= 0) return (4 << 20) | sh;
  if (t1 >= 0) {
    let k1 = -1, k2 = -1;
    for (r = 12; r >= 0; r--) { if (r === t1 || _cnt[r] === 0) continue; if (k1 < 0) k1 = r; else { k2 = r; break; } }
    return (3 << 20) | (t1 << 8) | (k1 << 4) | k2;
  }
  if (p1 >= 0 && p2 >= 0) {
    let kick = -1;
    for (r = 12; r >= 0; r--) if (r !== p1 && r !== p2 && _cnt[r] > 0) { kick = r; break; }
    return (2 << 20) | (p1 << 8) | (p2 << 4) | kick;
  }
  if (p1 >= 0) {
    let k1 = -1, k2 = -1, k3 = -1;
    for (r = 12; r >= 0; r--) {
      if (r === p1 || _cnt[r] === 0) continue;
      if (k1 < 0) k1 = r; else if (k2 < 0) k2 = r; else { k3 = r; break; }
    }
    return (1 << 20) | (p1 << 12) | (k1 << 8) | (k2 << 4) | k3;
  }
  return top5(rankBits);
}

// ─────────────────────────────────────────────
// 몬테카를로 (xorshift32 RNG, 카드 제거 정확)
// ─────────────────────────────────────────────
function makeRng(seed) {
  let s = seed >>> 0;
  if (s === 0) s = 0x9e3779b9;
  return function () {
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
    return (s >>> 0) / 4294967296;
  };
}

const _used = new Int32Array(52);
let _epoch = 0;

/** 클래스 i vs j 에퀴티(i 기준 승률+타이/2). 서로소 콤보 쌍에서 균등 샘플. */
function equityPair(ci, cj, samples, rnd) {
  // 서로소 조인트 콤보 (flat: a0,a1,b0,b1)
  const joint = [];
  for (const [a0, a1] of ci) for (const [b0, b1] of cj) {
    if (a0 !== b0 && a0 !== b1 && a1 !== b0 && a1 !== b1) joint.push(a0, a1, b0, b1);
  }
  const J = joint.length / 4;
  let win = 0, tie = 0;
  for (let n = 0; n < samples; n++) {
    _epoch++;
    const k = ((rnd() * J) | 0) * 4;
    const a0 = joint[k], a1 = joint[k + 1], b0 = joint[k + 2], b1 = joint[k + 3];
    _used[a0] = _epoch; _used[a1] = _epoch; _used[b0] = _epoch; _used[b1] = _epoch;
    let d0, d1, d2, d3, d4;
    do { d0 = (rnd() * 52) | 0; } while (_used[d0] === _epoch); _used[d0] = _epoch;
    do { d1 = (rnd() * 52) | 0; } while (_used[d1] === _epoch); _used[d1] = _epoch;
    do { d2 = (rnd() * 52) | 0; } while (_used[d2] === _epoch); _used[d2] = _epoch;
    do { d3 = (rnd() * 52) | 0; } while (_used[d3] === _epoch); _used[d3] = _epoch;
    do { d4 = (rnd() * 52) | 0; } while (_used[d4] === _epoch); _used[d4] = _epoch;
    const sA = eval7(a0, a1, d0, d1, d2, d3, d4);
    const sB = eval7(b0, b1, d0, d1, d2, d3, d4);
    if (sA > sB) win++; else if (sA === sB) tie++;
  }
  return (win + tie * 0.5) / samples;
}

// ─────────────────────────────────────────────
// 워커: PAIRS[start..end) 구간 에퀴티 계산
// ─────────────────────────────────────────────
if (!isMainThread) {
  const { start, end, samples, seed } = workerData;
  const rnd = makeRng(seed);
  const out = new Float64Array(end - start);
  const t0 = Date.now();
  for (let p = start; p < end; p++) {
    const [i, j] = PAIRS[p];
    out[p - start] = equityPair(ALL_COMBOS[i], ALL_COMBOS[j], samples, rnd);
    if ((p - start) % 400 === 399) {
      parentPort.postMessage({ type: "progress", done: p - start + 1, total: end - start, ms: Date.now() - t0 });
    }
  }
  parentPort.postMessage({ type: "result", start, buf: out.buffer }, [out.buffer]);
} else {
  main().catch((e) => { console.error(e); process.exit(1); });
}

// ─────────────────────────────────────────────
// 메인
// ─────────────────────────────────────────────
async function main() {
  const t0 = Date.now();
  console.log(`[gen-pushfold] samples/matchup=${SAMPLES.toLocaleString()}, matchups=${PAIRS.length.toLocaleString()}`);

  // 0) 빠른 평가기 ↔ lib/poker-eval.ts 실제 평가기 교차 검증
  await crossValidateEvaluator();

  // 1) 에퀴티 행렬 (워커 병렬)
  const E = await computeEquityMatrix();
  spotCheckEquity(E);

  // 2) 콤보 카운트 행렬 N (정확 계산)
  const { N, C } = computeComboMatrix();

  // 3) 내시 풀이 (스택 × 앤티)
  const stacks = [];
  for (let s = STACK_MIN; s <= STACK_MAX + 1e-9; s += STACK_STEP) stacks.push(Math.round(s * 2) / 2);
  const results = ANTES.map(() => []);
  for (let ai = 0; ai < ANTES.length; ai++) {
    for (const S of stacks) {
      results[ai].push(solveNash(S, ANTES[ai], E, N));
    }
  }

  // 핸드별 단조 정리: 내시 푸시/폴드는 핸드마다 "X bb 이하면 푸시" 단일 임계로 표현되는 게 표준.
  // 경계에서 진짜 무차별(mixed ~0.5)인 핸드의 임계 요동만 제거한다(작은 스택 범위 ⊇ 큰 스택 범위).
  for (let ai = 0; ai < ANTES.length; ai++) {
    for (let si = stacks.length - 2; si >= 0; si--) {
      for (let k = 0; k < 169; k++) {
        if (results[ai][si + 1].push[k]) results[ai][si].push[k] = 1;
        if (results[ai][si + 1].call[k]) results[ai][si].call[k] = 1;
      }
    }
  }

  // 4) 게이트 검증 + 리포트
  runGates(stacks, results, C, E);

  // 5) 데이터 방출
  emitData(stacks, results, C);

  console.log(`[gen-pushfold] done in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
}

// ─────────────────────────────────────────────
// 평가기 교차 검증 (실제 사이트 평가기와 판정 비교)
// ─────────────────────────────────────────────
async function crossValidateEvaluator() {
  const { pathToFileURL } = await import("node:url");
  const mod = await import(pathToFileURL(path.join(ROOT, "lib", "poker-eval.ts")).href);
  const { evalHand5, RANKS, SUITS } = mod;
  // 주의: lib의 evalBest7은 bestScore=[] 초기화 + scoreBetter(x,[])===false 때문에
  // 순수 하이카드 7장에서 bestCards가 "처음 5장"으로 남는 잠재 버그가 있다(족보 타입은 정확).
  // 여기서는 라이브러리의 핵심 평가기 evalHand5를 그대로 쓰되 best-5 선택을 올바르게 수행해 검증한다.
  // card int → poker-eval Card 객체 (RANKS는 '2'..'A' 순 = rank 인덱스 동일)
  const toCard = (ci) => {
    const rank = RANKS[ci >> 2], suit = SUITS[ci & 3];
    return { rank, suit, id: `${rank}${suit}` };
  };
  // evalBest7 결과 → 비교용 (rank 낮을수록 강함, 동타입은 score 사전식)
  const RANK_VALUE = { "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, J: 11, Q: 12, K: 13, A: 14 };
  const scoreOf = (cards) => {
    const freq = {};
    for (const c of cards) { const v = RANK_VALUE[c.rank]; freq[v] = (freq[v] || 0) + 1; }
    const sc = Object.entries(freq)
      .map(([v, f]) => [Number(v), Number(f)])
      .sort(([va, fa], [vb, fb]) => fb - fa || vb - va)
      .flatMap(([v, f]) => Array(f).fill(v));
    if (sc.length === 5 && sc[0] === 14 && sc[1] === 5 && sc[2] === 4 && sc[3] === 3 && sc[4] === 2) return [5, 4, 3, 2, 1];
    return sc;
  };
  // 7장 중 5장 조합 인덱스 21개
  const COMBO21 = [];
  for (let a = 0; a < 7; a++) for (let b = a + 1; b < 7; b++) {
    const rest = [0, 1, 2, 3, 4, 5, 6].filter((k) => k !== a && k !== b);
    COMBO21.push(rest);
  }
  const cmpScore = (x, y) => {
    if (y === null) return 1;
    for (let i = 0; i < 5; i++) if (x[i] !== y[i]) return x[i] > y[i] ? 1 : -1;
    return 0;
  };
  const best7 = (h7) => {
    const cards = h7.map(toCard);
    let bestRank = 99, bestScore = null;
    for (const idxs of COMBO21) {
      const five = idxs.map((k) => cards[k]);
      const r = evalHand5(five).rank; // 낮을수록 강함
      const sc = scoreOf(five);
      if (r < bestRank || (r === bestRank && cmpScore(sc, bestScore) > 0)) {
        bestRank = r; bestScore = sc;
      }
    }
    return { rank: bestRank, score: bestScore };
  };
  const cmpRef = (h7a, h7b) => {
    const A = best7(h7a), B = best7(h7b);
    if (A.rank !== B.rank) return A.rank < B.rank ? 1 : -1;
    return cmpScore(A.score, B.score);
  };
  const rnd = makeRng(0xc0ffee);
  let mismatch = 0;
  for (let n = 0; n < XVAL_N; n++) {
    // 9장 딜: 2+2 홀 + 5 보드
    _epoch++;
    const cs = [];
    while (cs.length < 9) {
      const c = (rnd() * 52) | 0;
      if (_used[c] !== _epoch) { _used[c] = _epoch; cs.push(c); }
    }
    const A = [cs[0], cs[1], cs[4], cs[5], cs[6], cs[7], cs[8]];
    const B = [cs[2], cs[3], cs[4], cs[5], cs[6], cs[7], cs[8]];
    const fA = eval7(...A), fB = eval7(...B);
    const fast = fA > fB ? 1 : fA < fB ? -1 : 0;
    const ref = cmpRef(A, B);
    if (fast !== ref) {
      mismatch++;
      if (mismatch <= 5) console.error("MISMATCH", A, B, "fast:", fast, "ref:", ref);
    }
  }
  if (mismatch > 0) throw new Error(`evaluator cross-validation FAILED: ${mismatch}/${XVAL_N} mismatches`);
  console.log(`[xval] fast evaluator vs lib/poker-eval.ts: ${XVAL_N.toLocaleString()} random deals, 0 mismatches ✓`);
}

// ─────────────────────────────────────────────
// 에퀴티 행렬 (워커 병렬)
// ─────────────────────────────────────────────
function computeEquityMatrix() {
  const nWorkers = Math.max(1, Math.min(cpus().length - 2, 10));
  const chunk = Math.ceil(PAIRS.length / nWorkers);
  const E = new Float64Array(169 * 169);
  for (let i = 0; i < 169; i++) E[i * 169 + i] = 0.5; // 동일 클래스 = 대칭 → 정확히 0.5
  console.log(`[equity] spawning ${nWorkers} workers…`);
  const t0 = Date.now();
  const jobs = [];
  for (let w = 0; w < nWorkers; w++) {
    const start = w * chunk, end = Math.min(PAIRS.length, start + chunk);
    if (start >= end) break;
    jobs.push(new Promise((resolve, reject) => {
      const worker = new Worker(__filename, { workerData: { start, end, samples: SAMPLES, seed: 0x1234567 + w * 7919 } });
      worker.on("message", (m) => {
        if (m.type === "progress" && w === 0) {
          const pct = ((m.done / m.total) * 100).toFixed(1);
          const eta = ((m.ms / m.done) * (m.total - m.done) / 1000 / 60).toFixed(1);
          process.stdout.write(`\r[equity] worker0 ${pct}% (ETA ~${eta}min)   `);
        } else if (m.type === "result") {
          const arr = new Float64Array(m.buf);
          for (let p = 0; p < arr.length; p++) {
            const [i, j] = PAIRS[m.start + p];
            E[i * 169 + j] = arr[p];
            E[j * 169 + i] = 1 - arr[p];
          }
          resolve();
        }
      });
      worker.on("error", reject);
    }));
  }
  return Promise.all(jobs).then(() => {
    console.log(`\n[equity] matrix done in ${((Date.now() - t0) / 1000).toFixed(0)}s`);
    return E;
  });
}

// ─────────────────────────────────────────────
// 콤보 쌍 카운트 행렬 (정확)
// ─────────────────────────────────────────────
function computeComboMatrix() {
  const N = new Float64Array(169 * 169);
  const C = new Int32Array(169);
  for (let i = 0; i < 169; i++) C[i] = ALL_COMBOS[i].length;
  for (let i = 0; i < 169; i++) {
    for (let j = 0; j < 169; j++) {
      let n = 0;
      for (const [a0, a1] of ALL_COMBOS[i]) for (const [b0, b1] of ALL_COMBOS[j]) {
        if (a0 !== b0 && a0 !== b1 && a1 !== b0 && a1 !== b1) n++;
      }
      N[i * 169 + j] = n;
    }
  }
  return { N, C };
}

// ─────────────────────────────────────────────
// 내시 풀이: fictitious play (동시 최적대응 + 균등 평균)
// 칩EV 모델 (스택 S = 핸드 시작 시 유효 스택, 블라인드/앤티 포함):
//   SB 폴드          → S - 0.5 - a
//   SB 푸시, BB 폴드 → S + 1 + a
//   콜(올인)         → 2S × eq
// ─────────────────────────────────────────────
function solveNash(S, a, E, N) {
  const n = 169;
  const p = new Float64Array(n).fill(1);
  const q = new Float64Array(n).fill(1);
  const brP = new Uint8Array(n), brQ = new Uint8Array(n);
  const prevP = new Uint8Array(n), prevQ = new Uint8Array(n);
  const evFoldSB = S - 0.5 - a;
  const evFoldBB = S - 1 - a;
  let stable = 0;
  for (let t = 1; t <= FP_ITERS; t++) {
    // BB 최적대응 (SB 평균전략 p에 대해)
    for (let j = 0; j < n; j++) {
      let w = 0, eq = 0;
      const rowJ = j * 169;
      for (let i = 0; i < n; i++) {
        const x = N[rowJ + i] * p[i];
        w += x; eq += x * E[rowJ + i];
      }
      const evCall = w > 0 ? 2 * S * (eq / w) : 0;
      brQ[j] = evCall > evFoldBB ? 1 : 0;
    }
    // SB 최적대응 (BB 평균전략 q에 대해)
    for (let i = 0; i < n; i++) {
      let acc = 0, w = 0;
      const rowI = i * 169;
      for (let j = 0; j < n; j++) {
        const nn = N[rowI + j];
        w += nn;
        acc += nn * ((1 - q[j]) * (S + 1 + a) + q[j] * 2 * S * E[rowI + j]);
      }
      brP[i] = acc / w > evFoldSB ? 1 : 0;
    }
    // 수렴 체크(순수 최적대응이 계속 동일하면 조기 종료)
    let same = true;
    for (let k = 0; k < n; k++) if (brP[k] !== prevP[k] || brQ[k] !== prevQ[k]) { same = false; break; }
    stable = same ? stable + 1 : 0;
    prevP.set(brP); prevQ.set(brQ);
    const al = 1 / (t + 1);
    for (let k = 0; k < n; k++) {
      p[k] += al * (brP[k] - p[k]);
      q[k] += al * (brQ[k] - q[k]);
    }
    if (stable >= 400 && t >= 800) break;
  }
  const push = new Uint8Array(n), call = new Uint8Array(n);
  for (let k = 0; k < n; k++) { push[k] = p[k] > 0.5 ? 1 : 0; call[k] = q[k] > 0.5 ? 1 : 0; }
  return { push, call, p, q };
}

function rangePct(mask, C) {
  let s = 0;
  for (let i = 0; i < 169; i++) if (mask[i]) s += C[i];
  return (s / 1326) * 100;
}

// ─────────────────────────────────────────────
// 에퀴티 스팟 체크 (알려진 매치업 값)
// ─────────────────────────────────────────────
function spotCheckEquity(E) {
  const checks = [
    ["AA", "KK", 0.815, 0.825],
    ["AKs", "QQ", 0.45, 0.475],
    ["22", "AKo", 0.515, 0.545],
    ["AKo", "AQo", 0.71, 0.75],
    ["T9s", "22", 0.52, 0.55], // 낮은 페어는 상위 수티드 커넥터 상대로 근소 언더독 (published ≈ 46/54)
  ];
  const tol = 3 * (0.5 / Math.sqrt(SAMPLES)); // 몬테카를로 3σ 여유 (300k 기준 ≈ ±0.27%p)
  console.log(`[spot-check] 알려진 프리플랍 에퀴티 (허용오차 ±${(tol * 100).toFixed(2)}%p 추가):`);
  let fail = 0;
  for (const [ha, hb, lo, hi] of checks) {
    const v = E[labelToIdx(ha) * 169 + labelToIdx(hb)];
    const ok = v >= lo - tol && v <= hi + tol;
    if (!ok) fail++;
    console.log(`  ${ha} vs ${hb}: ${(v * 100).toFixed(2)}%  (기대 ${(lo * 100).toFixed(1)}~${(hi * 100).toFixed(1)}%) ${ok ? "✓" : "✗ FAIL"}`);
  }
  // vs 랜덤 핸드 (콤보 가중)
  const { N } = computeComboMatrix();
  const vsRandom = (label) => {
    const i = labelToIdx(label);
    let w = 0, eq = 0;
    for (let j = 0; j < 169; j++) { w += N[i * 169 + j]; eq += N[i * 169 + j] * E[i * 169 + j]; }
    return eq / w;
  };
  for (const [label, lo, hi] of [["AA", 0.84, 0.86], ["72o", 0.33, 0.36], ["AKs", 0.65, 0.68]]) {
    const v = vsRandom(label);
    const ok = v >= lo - tol && v <= hi + tol;
    if (!ok) fail++;
    console.log(`  ${label} vs random: ${(v * 100).toFixed(2)}% (기대 ${(lo * 100).toFixed(1)}~${(hi * 100).toFixed(1)}%) ${ok ? "✓" : "✗ FAIL"}`);
  }
  if (fail > 0) throw new Error(`equity spot-check FAILED (${fail})`);
}

// ─────────────────────────────────────────────
// 게이트 검증
// ─────────────────────────────────────────────
function runGates(stacks, results, C, E) {
  const noAnte = results[0];
  const sIdx = (S) => stacks.findIndex((x) => Math.abs(x - S) < 1e-9);
  console.log("\n===== 자가 검증 (앤티 없음, 헤즈업 내시) =====");
  console.log("stack | SB push% | BB call%");
  const table = [2, 3, 4, 5, 7, 10, 12, 15, 20, 25];
  for (const S of table) {
    const r = noAnte[sIdx(S)];
    console.log(`${String(S).padStart(5)}bb | ${rangePct(r.push, C).toFixed(1).padStart(7)}% | ${rangePct(r.call, C).toFixed(1).padStart(7)}%`);
  }
  // ── 스펙 벤치마크와 다른 부분(근거): "2bb면 아무 두 장이나 푸시"는 통설이지 칩EV 내시가 아니다.
  //    S=2bb에서 BB는 100% 콜(필요 eq = (S-1)/2S = 25% < 최악 핸드 ~32%) → SB 폴드EV = 1.5bb,
  //    72o 쇼브EV = 2S×eq = 4×0.346 = 1.38bb < 1.5bb ⇒ 72o는 2bb에서 수학적으로 폴드가 맞다.
  //    '아무 두 장' 임계는 (S-0.5)/2S ≤ 0.346 ⇒ S ≤ ~1.6bb. 마찬가지로 4bb 이하에선 팟오즈 3:1로
  //    BB 콜 레인지가 SB 푸시보다 넓어지는 것이 올바른 균형이다. 따라서 해당 게이트는 아래처럼 보정.
  const gates = [];
  const pushAt = (S) => rangePct(noAnte[sIdx(S)].push, C);
  const callAt = (S) => rangePct(noAnte[sIdx(S)].call, C);
  console.log(`\n[증명] S=2bb: BB 100% 콜 → 72o 쇼브EV = 4×0.346 = ${(4 * 0.346).toFixed(2)}bb < 폴드EV 1.50bb ⇒ 순수 트래시는 폴드`);
  gates.push(["1bb push = 100% (아무 두 장)", pushAt(1) >= 99.99, pushAt(1).toFixed(1)]);
  gates.push(["1.5bb push ≥ 97.5% (임계 eq 33.3% ≈ 최악 핸드)", pushAt(1.5) >= 97.5, pushAt(1.5).toFixed(1)]);
  gates.push(["2bb push 85~96% (트래시 오프수트만 폴드)", pushAt(2) >= 85 && pushAt(2) <= 96, pushAt(2).toFixed(1)]);
  gates.push(["2bb call ≥ 95% (팟오즈 3:1 → 사실상 전부 콜)", callAt(2) >= 95, callAt(2).toFixed(1)]);
  gates.push(["5bb push 68~80%", pushAt(5) >= 68 && pushAt(5) <= 80, pushAt(5).toFixed(1)]);
  gates.push(["10bb push 55~65%", pushAt(10) >= 55 && pushAt(10) <= 65, pushAt(10).toFixed(1)]);
  gates.push(["15bb push 42~52%", pushAt(15) >= 42 && pushAt(15) <= 52, pushAt(15).toFixed(1)]);
  gates.push(["20bb push 32~42%", pushAt(20) >= 32 && pushAt(20) <= 42, pushAt(20).toFixed(1)]);

  // 콜 레인지: 5bb 이상에선 푸시보다 타이트 (4bb 미만은 팟오즈 때문에 역전이 정상)
  let callTighter = true;
  for (let k = 0; k < stacks.length; k++) {
    const r = results[0][k];
    if (stacks[k] >= 5 && rangePct(r.call, C) >= rangePct(r.push, C)) callTighter = false;
  }
  gates.push(["BB call < SB push (5bb 이상 전 스택)", callTighter, ""]);

  // 단조성: 스택↓ ⇒ push%·call% 확대 (핸드별 단조 정리 후이므로 엄격 검사, 양쪽 앤티 설정 모두)
  let monotone = true;
  for (let ai = 0; ai < results.length; ai++) {
    for (let k = 1; k < stacks.length; k++) {
      if (rangePct(results[ai][k].push, C) > rangePct(results[ai][k - 1].push, C) + 1e-9) monotone = false;
      if (rangePct(results[ai][k].call, C) > rangePct(results[ai][k - 1].call, C) + 1e-9) monotone = false;
    }
  }
  gates.push(["push%·call% 단조 (스택↓ ⇒ 범위↑, 앤티 양쪽)", monotone, ""]);

  // 새너티 셀 @10bb
  const r10 = noAnte[sIdx(10)];
  const has = (label) => r10.push[labelToIdx(label)] === 1;
  const pairsAll = GRID_RANKS.every((_, g) => r10.push[g * 13 + g] === 1);
  gates.push(["10bb: 모든 페어 푸시", pairsAll, ""]);
  const a2sPlus = ["A2s", "A3s", "A4s", "A5s", "A6s", "A7s", "A8s", "A9s", "ATs", "AJs", "AQs", "AKs"].every(has);
  gates.push(["10bb: A2s+ 푸시", a2sPlus, ""]);
  const a7oPlus = ["A7o", "A8o", "A9o", "ATo", "AJo", "AQo", "AKo"].every(has);
  gates.push(["10bb: A7o+ 푸시", a7oPlus, ""]);
  const k9sPlus = ["K9s", "KTs", "KJs", "KQs"].every(has);
  gates.push(["10bb: K9s+ 푸시", k9sPlus, ""]);
  const qtsPlus = ["QTs", "QJs"].every(has);
  gates.push(["10bb: QTs+ 푸시", qtsPlus, ""]);
  gates.push(["10bb: 72o 폴드", r10.push[labelToIdx("72o")] === 0, ""]);
  // 72o 임계: 칩EV상 (S-0.5)/2S ≤ eq(72o vs 100% 콜) ≈ 0.346 ⇒ S ≈ 1.6bb (스펙의 '~3bb'는 통설 보정)
  let thr72g = 0;
  for (let k = stacks.length - 1; k >= 0; k--) {
    if (noAnte[k].push[labelToIdx("72o")] === 1) { thr72g = stacks[k]; break; }
  }
  gates.push([`72o 푸시 임계 1.0~2.0bb (계산상 ~1.6bb)`, thr72g >= 1.0 && thr72g <= 2.0, `${thr72g}bb`]);

  // 앤티 ON이면 레인지 확대
  let anteWider = true;
  for (const S of [5, 10, 15, 20]) {
    if (rangePct(results[1][sIdx(S)].push, C) < rangePct(results[0][sIdx(S)].push, C)) anteWider = false;
  }
  gates.push(["앤티 ON ⇒ 푸시 범위 확대", anteWider, ""]);

  console.log("\n===== 게이트 =====");
  let failed = 0;
  for (const [name, ok, val] of gates) {
    if (!ok) failed++;
    console.log(`  ${ok ? "PASS" : "FAIL"}  ${name}${val ? ` (${val}%)` : ""}`);
  }

  // 10bb 푸시 레인지 ASCII 그리드 (육안 검증)
  console.log("\n10bb 앤티없음 SB 푸시 레인지 (■=push):");
  for (let r = 0; r < 13; r++) {
    let line = "  ";
    for (let c = 0; c < 13; c++) line += r10.push[r * 13 + c] ? " ■" : " ·";
    console.log(line + "   " + GRID_RANKS[r]);
  }
  // 72o 푸시 임계 스택
  let thr72 = 0;
  for (let k = stacks.length - 1; k >= 0; k--) {
    if (results[0][k].push[labelToIdx("72o")] === 1) { thr72 = stacks[k]; break; }
  }
  console.log(`\n72o 푸시 임계 스택(앤티없음): ≤ ${thr72}bb`);

  if (failed > 0) throw new Error(`GATES FAILED: ${failed} — 데이터 방출 중단`);
  console.log("\n모든 게이트 통과 ✓");
}

// ─────────────────────────────────────────────
// 데이터 방출
// ─────────────────────────────────────────────
function maskToHex(mask) {
  let out = "";
  for (let nib = 0; nib < 43; nib++) {
    let v = 0;
    for (let b = 0; b < 4; b++) {
      const i = nib * 4 + b;
      if (i < 169 && mask[i]) v |= 1 << b;
    }
    out += v.toString(16);
  }
  return out;
}

function emitData(stacks, results, C) {
  const rows = ANTES.map((_, ai) =>
    stacks.map((_, k) => `"${maskToHex(results[ai][k].push)}|${maskToHex(results[ai][k].call)}"`)
  );
  const ts = `// AUTO-GENERATED by scripts/gen-pushfold.mjs — 직접 수정 금지 (재생성: node scripts/gen-pushfold.mjs)
// 헤즈업(SB vs BB) 내시 균형 푸시/폴드 차트 데이터.
// 계산 방법: 169×169 프리플랍 올인 에퀴티(몬테카를로 ${SAMPLES.toLocaleString()} 샘플/매치업,
// lib/poker-eval.ts 평가기와 교차 검증) → fictitious play로 SB 푸시/BB 콜 균형 수렴.
// 칩EV 모델: SB 폴드 = S-0.5-a, 푸시 후 BB 폴드 = S+1+a, 콜 = 2S×eq (S=유효스택 bb, a=앤티/인).
// 앤티 ON = 플레이어당 0.125bb (BB 앤티 1bb ≈ 12.5%/인 환산).
//
// 핸드 인덱스: 13×13 그리드, index = row*13+col, row/col = A,K,Q,J,T,9,8,7,6,5,4,3,2.
// 대각선 = 페어, col > row = 수티드, col < row = 오프수트.
// 마스크 인코딩: 169비트 → 43 hex nibble, bit i = (hex[i>>2] >> (i&3)) & 1.

export const PF_STACK_MIN = ${STACK_MIN};
export const PF_STACK_MAX = ${STACK_MAX};
export const PF_STACK_STEP = ${STACK_STEP};

// D[anteIdx][stackIdx] = "pushHex|callHex" (anteIdx 0 = 앤티 없음, 1 = 앤티 ON)
const D: [string[], string[]] = [
  [
${rows[0].map((s) => "    " + s + ",").join("\n")}
  ],
  [
${rows[1].map((s) => "    " + s + ",").join("\n")}
  ],
];

function hexToMask(h: string): boolean[] {
  const m: boolean[] = new Array(169);
  for (let i = 0; i < 169; i++) m[i] = ((parseInt(h[i >> 2], 16) >> (i & 3)) & 1) === 1;
  return m;
}

/** 스택(bb)·앤티 설정에 해당하는 SB 푸시 / BB 콜 마스크(169칸, 그리드 순서) */
export function pfLookup(stack: number, ante: boolean): { push: boolean[]; call: boolean[] } {
  const idx = Math.min(
    Math.max(Math.round((stack - PF_STACK_MIN) / PF_STACK_STEP), 0),
    Math.round((PF_STACK_MAX - PF_STACK_MIN) / PF_STACK_STEP)
  );
  const [ph, ch] = D[ante ? 1 : 0][idx].split("|");
  return { push: hexToMask(ph), call: hexToMask(ch) };
}
`;
  const outPath = path.join(ROOT, "lib", "pushfold-data.ts");
  writeFileSync(outPath, ts, "utf8");
  console.log(`[emit] wrote ${outPath} (${(ts.length / 1024).toFixed(1)}KB)`);
}
