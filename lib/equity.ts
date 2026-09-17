/**
 * Hold'em equity engine — hand-vs-hand win/tie/equity for 2–4 players.
 * ★2026-09-17 신설 (`/en/calculator` 「Equity」 탭 · 「poker odds calculator」 의도 = «내 핸드 vs 상대 핸드 승률»).
 *
 * Card encoding: 0..51 → rank = c >> 2 (0 = 2 … 12 = A), suit = c & 3 (0 ♠ 1 ♥ 2 ♦ 3 ♣).
 * evaluate7() returns an integer — bigger is better; equal means an exact chop.
 * Category (score / CAT_BASE): 0 high card · 1 pair · 2 two pair · 3 trips · 4 straight ·
 * 5 flush · 6 full house · 7 quads · 8 straight flush (royal = 8 with top rank A).
 *
 * §13: verified against lib/poker-eval.ts (evalBest7/handScore) on random 7-card sets and against
 * the full-enumeration matchup table in docs/harden-brief/queue-Q5-c-EN먼저-2F.md (AA vs KK 81.95%).
 * Run: npx tsx scripts/verify-equity.ts
 */

export const CAT_BASE = 13 ** 5;

/** Number of set bits among bits 0..12. */
function popcount13(m: number): number {
  let c = 0;
  while (m) { m &= m - 1; c++; }
  return c;
}

/** Highest rank (bit index) in mask, or -1. */
function topBit(m: number): number {
  for (let r = 12; r >= 0; r--) if (m & (1 << r)) return r;
  return -1;
}

/** Straight top rank for a 13-bit rank mask, or -1 (wheel → 3, i.e. 5-high). */
function straightTop(m: number): number {
  for (let top = 12; top >= 4; top--) {
    if (((m >> (top - 4)) & 0x1f) === 0x1f) return top;
  }
  if ((m & 0x100f) === 0x100f) return 3; // A-2-3-4-5
  return -1;
}

/** Encode up to 5 rank values (most significant first) as a base-13 number. */
function enc(cat: number, v: number[]): number {
  let s = 0;
  for (let i = 0; i < 5; i++) s = s * 13 + (i < v.length ? v[i] : 0);
  return cat * CAT_BASE + s;
}

/** Top n ranks from mask, high → low. */
function topN(m: number, n: number): number[] {
  const out: number[] = [];
  for (let r = 12; r >= 0 && out.length < n; r--) if (m & (1 << r)) out.push(r);
  return out;
}

/** Evaluate 5–7 cards. */
export function evaluate7(cards: number[]): number {
  const suitMask = [0, 0, 0, 0];
  const cnt = new Array<number>(13).fill(0);
  for (const c of cards) {
    suitMask[c & 3] |= 1 << (c >> 2);
    cnt[c >> 2]++;
  }
  // Flush / straight flush
  for (let s = 0; s < 4; s++) {
    if (popcount13(suitMask[s]) >= 5) {
      const st = straightTop(suitMask[s]);
      if (st >= 0) return enc(8, [st]);
      return enc(5, topN(suitMask[s], 5));
    }
  }
  const all = suitMask[0] | suitMask[1] | suitMask[2] | suitMask[3];
  let quad = -1, trips = -1, trips2 = -1, pairHi = -1, pairLo = -1;
  for (let r = 12; r >= 0; r--) {
    const n = cnt[r];
    if (n === 4) quad = r;
    else if (n === 3) { if (trips < 0) trips = r; else if (trips2 < 0) trips2 = r; }
    else if (n === 2) { if (pairHi < 0) pairHi = r; else if (pairLo < 0) pairLo = r; }
  }
  if (quad >= 0) {
    const kick = topBit(all & ~(1 << quad));
    return enc(7, [quad, kick]);
  }
  if (trips >= 0 && (pairHi >= 0 || trips2 >= 0)) {
    const pr = Math.max(pairHi, trips2);
    return enc(6, [trips, pr]);
  }
  const st = straightTop(all);
  if (st >= 0) return enc(4, [st]);
  if (trips >= 0) {
    const k = topN(all & ~(1 << trips), 2);
    return enc(3, [trips, ...k]);
  }
  if (pairHi >= 0 && pairLo >= 0) {
    const k = topBit(all & ~(1 << pairHi) & ~(1 << pairLo));
    return enc(2, [pairHi, pairLo, k]);
  }
  if (pairHi >= 0) {
    const k = topN(all & ~(1 << pairHi), 3);
    return enc(1, [pairHi, ...k]);
  }
  return enc(0, topN(all, 5));
}

/** 0..9 category index compatible with dict.handEval.resultNames (9 = royal flush). */
export function categoryOf(score: number): number {
  const cat = Math.floor(score / CAT_BASE);
  if (cat === 8) {
    const top = Math.floor((score % CAT_BASE) / 13 ** 4);
    return top === 12 ? 9 : 8;
  }
  return cat;
}

export type EquityResult = {
  /** Per player: share of pot won outright + split shares (0..1). */
  equity: number[];
  /** Per player: fraction of runouts won outright. */
  win: number[];
  /** Per player: fraction of runouts tied (chopped, any number of ways). */
  tie: number[];
  /** true = every remaining runout was enumerated; false = Monte Carlo sample. */
  exact: boolean;
  /** Runouts evaluated. */
  samples: number;
};

function combinations(n: number, k: number): number {
  let r = 1;
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i;
  return Math.round(r);
}

/**
 * hands: 2–4 entries of 2 cards each — an EMPTY entry means "random hand" (dealt fresh every runout).
 * board: 0/3/4/5 cards.
 * Exact enumeration when the remaining runouts ≤ maxExact (default 250k), else Monte Carlo of `trials`.
 * With random hands the runout draws their hole cards too (5 − board + 2 × random) and the result is
 * always Monte Carlo (a plain k-combination is not a uniform board/hole partition).
 */
export function calcEquity(
  hands: number[][],
  board: number[],
  opts: { trials?: number; maxExact?: number; rng?: () => number } = {}
): EquityResult {
  const trials = opts.trials ?? 60_000;
  const maxExact = opts.maxExact ?? 250_000;
  const rng = opts.rng ?? Math.random;
  const P = hands.length;
  const used = new Set<number>([...board, ...hands.flat()]);
  const deck: number[] = [];
  for (let c = 0; c < 52; c++) if (!used.has(c)) deck.push(c);
  const boardNeed = 5 - board.length;
  const randomIdx = hands.map((h, i) => (h.length === 0 ? i : -1)).filter(i => i >= 0);
  const need = boardNeed + 2 * randomIdx.length;

  const winC = new Array<number>(P).fill(0);
  const tieC = new Array<number>(P).fill(0);
  const eqC = new Array<number>(P).fill(0);
  const scores = new Array<number>(P).fill(0);
  const full = new Array<number>(7);
  let samples = 0;

  const settle = (runout: number[]) => {
    let best = -1, nBest = 0;
    for (let p = 0; p < P; p++) {
      const ri = randomIdx.indexOf(p);
      if (ri >= 0) { full[0] = runout[boardNeed + ri * 2]; full[1] = runout[boardNeed + ri * 2 + 1]; }
      else { full[0] = hands[p][0]; full[1] = hands[p][1]; }
      for (let i = 0; i < board.length; i++) full[2 + i] = board[i];
      for (let i = 0; i < boardNeed; i++) full[2 + board.length + i] = runout[i];
      const s = evaluate7(full);
      scores[p] = s;
      if (s > best) { best = s; nBest = 1; } else if (s === best) nBest++;
    }
    for (let p = 0; p < P; p++) {
      if (scores[p] === best) {
        if (nBest === 1) { winC[p]++; eqC[p] += 1; }
        else { tieC[p]++; eqC[p] += 1 / nBest; }
      }
    }
    samples++;
  };

  const total = combinations(deck.length, need);
  let exact: boolean;
  if (need === 0) {
    settle([]);
    exact = true;
  } else if (randomIdx.length === 0 && total <= maxExact) {
    // (with random hands a plain k-combination is not a uniform board/hole partition → always sample)
    exact = true;
    const idx = Array.from({ length: need }, (_, i) => i);
    const runout = new Array<number>(need);
    const n = deck.length;
    // iterate all k-combinations in lexicographic order
    for (;;) {
      for (let i = 0; i < need; i++) runout[i] = deck[idx[i]];
      settle(runout);
      let i = need - 1;
      while (i >= 0 && idx[i] === n - need + i) i--;
      if (i < 0) break;
      idx[i]++;
      for (let j = i + 1; j < need; j++) idx[j] = idx[j - 1] + 1;
    }
  } else {
    exact = false;
    const n = deck.length;
    const pool = deck.slice();
    const runout = new Array<number>(need);
    for (let t = 0; t < trials; t++) {
      // partial Fisher–Yates: draw `need` cards without replacement
      for (let i = 0; i < need; i++) {
        const j = i + Math.floor(rng() * (n - i));
        const tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
        runout[i] = pool[i];
      }
      settle(runout);
    }
  }
  return {
    equity: eqC.map(v => v / samples),
    win: winC.map(v => v / samples),
    tie: tieC.map(v => v / samples),
    exact,
    samples,
  };
}

/** "As" / "Td" style → 0..51 (rank chars 23456789TJQKA, suit chars s h d c). */
export function parseCard(s: string): number {
  const R = "23456789TJQKA";
  const S = "shdc";
  const r = R.indexOf(s[0].toUpperCase());
  const su = S.indexOf(s[1].toLowerCase());
  if (r < 0 || su < 0) throw new Error(`bad card ${s}`);
  return r * 4 + su;
}
