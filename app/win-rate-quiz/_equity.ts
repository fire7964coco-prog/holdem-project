// 승률 퀴즈 이퀴티 엔진 — §13 검증된 평가기 포팅 (AA vs KK 프리플랍 82.64%, AKs vs QQ 46.21% 검산 통과)
// 플랍/턴/리버 = 남은 보드 완전 열거(정확값), 프리플랍 = 몬테카를로 100,000 샘플(표준오차 ~0.15%)

export type Suit = "♠" | "♥" | "♦" | "♣";
export interface Card {
  rank: string; // '2'..'9','10','J','Q','K','A'
  suit: Suit;
}

/** 내부 표현: [rank 2-14, suit 0-3] */
type NCard = [number, number];

const SUITS: Suit[] = ["♠", "♥", "♦", "♣"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function toNum(c: Card): NCard {
  return [RANKS.indexOf(c.rank) + 2, SUITS.indexOf(c.suit)];
}

function toDisplay(n: NCard): Card {
  return { rank: RANKS[n[0] - 2], suit: SUITS[n[1]] };
}

// ── 검증된 평가기 (verbatim 포팅 — 로직 변경 금지) ──────────────────────────

/** 5장 → 비교 가능한 정수 스코어 */
function score5(cs: NCard[]): number {
  const ranks = cs.map((c) => c[0]).sort((a, b) => b - a);
  const suits = cs.map((c) => c[1]);
  const flush = suits.every((s) => s === suits[0]);
  const uniq = [...new Set(ranks)].sort((a, b) => b - a);
  let straightHigh = 0;
  if (uniq.length === 5) {
    if (uniq[0] - uniq[4] === 4) straightHigh = uniq[0];
    else if (uniq[0] === 14 && uniq[1] === 5 && uniq[2] === 4 && uniq[3] === 3 && uniq[4] === 2) straightHigh = 5;
  }
  const freq: Record<number, number> = {};
  for (const r of ranks) freq[r] = (freq[r] || 0) + 1;
  const grouped = Object.entries(freq)
    .map(([r, f]) => [Number(r), f] as [number, number])
    .sort((a, b) => b[1] - a[1] || b[0] - a[0]);
  const counts = grouped.map((g) => g[1]);
  const ordered = grouped.flatMap(([r, f]) => Array(f).fill(r) as number[]);
  let cat: number, kick: number[];
  if (flush && straightHigh) { cat = 8; kick = [straightHigh]; }
  else if (counts[0] === 4) { cat = 7; kick = [grouped[0][0], grouped[1][0]]; }
  else if (counts[0] === 3 && counts[1] === 2) { cat = 6; kick = [grouped[0][0], grouped[1][0]]; }
  else if (flush) { cat = 5; kick = ranks; }
  else if (straightHigh) { cat = 4; kick = [straightHigh]; }
  else if (counts[0] === 3) { cat = 3; kick = ordered; }
  else if (counts[0] === 2 && counts[1] === 2) { cat = 2; kick = ordered; }
  else if (counts[0] === 2) { cat = 1; kick = ordered; }
  else { cat = 0; kick = ranks; }
  let s = cat;
  for (let i = 0; i < 5; i++) s = s * 15 + (kick[i] || 0);
  return s;
}

/** C(7,5)=21 조합 인덱스 */
const COMBO5: number[][] = [];
for (let a = 0; a < 7; a++)
  for (let b = a + 1; b < 7; b++)
    for (let c = b + 1; c < 7; c++)
      for (let d = c + 1; d < 7; d++)
        for (let e = d + 1; e < 7; e++) COMBO5.push([a, b, c, d, e]);

/** 7장 중 베스트 5장 스코어 */
function best7(cs: NCard[]): number {
  let best = -1;
  for (const idx of COMBO5) {
    const s = score5(idx.map((i) => cs[i]));
    if (s > best) best = s;
  }
  return best;
}

// ── 몬테카를로용 고속 경로 ──────────────────────────────────────────────────
// score5와 100% 동일한 로직을 할당 없이 수행하는 버전. 전수 검증 완료:
// 가능한 모든 5장 조합 C(52,5)=2,598,960개 전부에 대해 score5와 결과 일치 확인(스크립트 검산).
// 정확한 스트리트 계산(플랍/턴/리버 열거)은 위의 verbatim 평가기를 그대로 사용하고,
// 이 고속 경로는 프리플랍 MC 루프에서만 사용한다.

const SR = new Int32Array(5);   // 정렬된 랭크(내림차순)
const GV = new Int32Array(5);   // 그룹 값
const GC = new Int32Array(5);   // 그룹 개수
const KICK = new Int32Array(5); // 키커(5칸, 부족분 0 패딩)

function score5fast(cs: NCard[]): number {
  const flush =
    cs[0][1] === cs[1][1] && cs[1][1] === cs[2][1] && cs[2][1] === cs[3][1] && cs[3][1] === cs[4][1];
  for (let i = 0; i < 5; i++) SR[i] = cs[i][0];
  for (let i = 1; i < 5; i++) {
    const v = SR[i];
    let j = i - 1;
    while (j >= 0 && SR[j] < v) { SR[j + 1] = SR[j]; j--; }
    SR[j + 1] = v;
  }
  // 연속 구간 → 그룹 (값 내림차순)
  let g = 0;
  GV[0] = SR[0]; GC[0] = 1;
  for (let i = 1; i < 5; i++) {
    if (SR[i] === GV[g]) GC[g]++;
    else { g++; GV[g] = SR[i]; GC[g] = 1; }
  }
  const ng = g + 1;
  let straightHigh = 0;
  if (ng === 5) {
    if (SR[0] - SR[4] === 4) straightHigh = SR[0];
    else if (SR[0] === 14 && SR[1] === 5 && SR[2] === 4 && SR[3] === 3 && SR[4] === 2) straightHigh = 5;
  }
  // 그룹을 (개수 내림차순, 값 내림차순)으로 정렬 — 원본 comparator와 동일한 전순서
  for (let i = 0; i < ng - 1; i++) {
    let m = i;
    for (let j = i + 1; j < ng; j++) {
      if (GC[j] > GC[m] || (GC[j] === GC[m] && GV[j] > GV[m])) m = j;
    }
    if (m !== i) {
      let t = GV[i]; GV[i] = GV[m]; GV[m] = t;
      t = GC[i]; GC[i] = GC[m]; GC[m] = t;
    }
  }
  const c0 = GC[0];
  const c1 = ng > 1 ? GC[1] : 0;
  let cat: number;
  if (flush && straightHigh) { cat = 8; KICK[0] = straightHigh; KICK[1] = 0; KICK[2] = 0; KICK[3] = 0; KICK[4] = 0; }
  else if (c0 === 4) { cat = 7; KICK[0] = GV[0]; KICK[1] = GV[1]; KICK[2] = 0; KICK[3] = 0; KICK[4] = 0; }
  else if (c0 === 3 && c1 === 2) { cat = 6; KICK[0] = GV[0]; KICK[1] = GV[1]; KICK[2] = 0; KICK[3] = 0; KICK[4] = 0; }
  else if (flush) { cat = 5; for (let i = 0; i < 5; i++) KICK[i] = SR[i]; }
  else if (straightHigh) { cat = 4; KICK[0] = straightHigh; KICK[1] = 0; KICK[2] = 0; KICK[3] = 0; KICK[4] = 0; }
  else {
    if (c0 === 3) cat = 3;
    else if (c0 === 2 && c1 === 2) cat = 2;
    else if (c0 === 2) cat = 1;
    else cat = 0;
    if (cat === 0) { for (let i = 0; i < 5; i++) KICK[i] = SR[i]; }
    else {
      // ordered = 그룹 순서대로 값을 개수만큼 나열 (원본 flatMap과 동일)
      let k = 0;
      for (let gi = 0; gi < ng; gi++) for (let c = 0; c < GC[gi]; c++) KICK[k++] = GV[gi];
    }
  }
  let s = cat;
  for (let i = 0; i < 5; i++) s = s * 15 + KICK[i];
  return s;
}

const BUF5: NCard[] = new Array(5);

function best7fast(cs: NCard[]): number {
  let best = -1;
  for (const idx of COMBO5) {
    BUF5[0] = cs[idx[0]]; BUF5[1] = cs[idx[1]]; BUF5[2] = cs[idx[2]]; BUF5[3] = cs[idx[3]]; BUF5[4] = cs[idx[4]];
    const s = score5fast(BUF5);
    if (s > best) best = s;
  }
  return best;
}

// 검산 스크립트용 내부 훅 (앱 코드에서 사용 금지)
export const __test = { score5, score5fast, best7, best7fast };

const CATNAME = ["하이카드", "원페어", "투페어", "트리플", "스트레이트", "플러시", "풀하우스", "포카드", "스트레이트플러시"];

/** 7장 베스트 핸드의 족보 이름 */
function categoryOf(cs: NCard[]): string {
  return CATNAME[Math.floor(best7(cs) / 15 ** 5)];
}

// ── 공개 API ────────────────────────────────────────────────────────────────

/** 52장 덱 셔플 후 히어로 2 + 빌런 2 + 보드 5 배분 */
export function dealHand(): { hero: [Card, Card]; villain: [Card, Card]; board: [Card, Card, Card, Card, Card] } {
  const deck: NCard[] = [];
  for (let r = 2; r <= 14; r++) for (let s = 0; s < 4; s++) deck.push([r, s]);
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  const d = deck.map(toDisplay);
  return {
    hero: [d[0], d[1]],
    villain: [d[2], d[3]],
    board: [d[4], d[5], d[6], d[7], d[8]],
  };
}

const MC_SAMPLES = 100000;

/**
 * 히어로 승률 % (무승부는 절반 계산).
 * board 0장 = 몬테카를로 100k / 3장 = 남은 2장 완전 열거(990) / 4장 = 리버 44장 열거 / 5장 = 직접 비교
 */
export function equity(hero: Card[], villain: Card[], board: Card[]): number {
  const h = hero.map(toNum);
  const v = villain.map(toNum);
  const b = board.map(toNum);
  const used = new Set([...h, ...v, ...b].map((c) => c[0] * 4 + c[1]));
  const rest: NCard[] = [];
  for (let r = 2; r <= 14; r++)
    for (let s = 0; s < 4; s++) if (!used.has(r * 4 + s)) rest.push([r, s]);

  let win = 0, tie = 0, n = 0;
  const settle = (full: NCard[]) => {
    const hs = best7([...h, ...full]);
    const vs = best7([...v, ...full]);
    if (hs > vs) win++;
    else if (hs === vs) tie++;
    n++;
  };

  if (b.length === 5) {
    settle(b);
  } else if (b.length === 4) {
    for (const c of rest) settle([...b, c]);
  } else if (b.length === 3) {
    for (let i = 0; i < rest.length; i++)
      for (let j = i + 1; j < rest.length; j++) settle([...b, rest[i], rest[j]]);
  } else {
    // 프리플랍: 몬테카를로 (부분 Fisher-Yates로 5장 무작위 추출)
    // 고속 경로(score5fast: 전수 검증으로 score5와 동일 결과 증명됨) + 버퍼 재사용으로 할당 제거
    const pool = [...rest];
    const hb: NCard[] = [h[0], h[1], pool[0], pool[1], pool[2], pool[3], pool[4]];
    const vb: NCard[] = [v[0], v[1], pool[0], pool[1], pool[2], pool[3], pool[4]];
    for (let k = 0; k < MC_SAMPLES; k++) {
      for (let i = 0; i < 5; i++) {
        const j = i + Math.floor(Math.random() * (pool.length - i));
        const t = pool[i];
        pool[i] = pool[j];
        pool[j] = t;
        hb[2 + i] = pool[i];
        vb[2 + i] = pool[i];
      }
      const hs = best7fast(hb);
      const vs = best7fast(vb);
      if (hs > vs) win++;
      else if (hs === vs) tie++;
      n++;
    }
  }
  return ((win + tie / 2) / n) * 100;
}

/** 홀카드 2장 + 보드 5장 → 베스트 5장 족보의 한국어 이름 */
export function handCategory(hole: Card[], board: Card[]): string {
  return categoryOf([...hole.map(toNum), ...board.map(toNum)]);
}

/** 리버 쇼다운 승자 (7장 풀 비교) */
export function showdown(hero: Card[], villain: Card[], board: Card[]): "hero" | "villain" | "tie" {
  const hs = best7([...hero.map(toNum), ...board.map(toNum)]);
  const vs = best7([...villain.map(toNum), ...board.map(toNum)]);
  if (hs > vs) return "hero";
  if (hs < vs) return "villain";
  return "tie";
}

// ── 멀티웨이 (2~N명) ──────────────────────────────────────────────────────────

/** N명 딜: hands[p]=홀카드 2장, board 5장 */
export function dealHands(numPlayers: number): { hands: [Card, Card][]; board: Card[] } {
  const deck: NCard[] = [];
  for (let r = 2; r <= 14; r++) for (let s = 0; s < 4; s++) deck.push([r, s]);
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  const d = deck.map(toDisplay);
  const hands: [Card, Card][] = [];
  let k = 0;
  for (let p = 0; p < numPlayers; p++) { hands.push([d[k], d[k + 1]]); k += 2; }
  return { hands, board: [d[k], d[k + 1], d[k + 2], d[k + 3], d[k + 4]] };
}

/**
 * N명 각자의 승률 % (무승부는 승자 수로 균등 분할). 합계 ≈ 100.
 * board 0장=몬테카를로 / 3·4장=완전 열거(정확) / 5장=직접 비교.
 */
export function equities(hands: Card[][], board: Card[]): number[] {
  const P = hands.length;
  const nums = hands.map((h) => h.map(toNum));
  const b = board.map(toNum);
  const used = new Set<number>();
  for (const h of nums) for (const c of h) used.add(c[0] * 4 + c[1]);
  for (const c of b) used.add(c[0] * 4 + c[1]);
  const rest: NCard[] = [];
  for (let r = 2; r <= 14; r++) for (let s = 0; s < 4; s++) if (!used.has(r * 4 + s)) rest.push([r, s]);

  const eq = new Array(P).fill(0);
  let total = 0;
  const sc = new Array<number>(P);

  const settle = (score: (cs: NCard[]) => number, full: NCard[], hbufs: NCard[][], useBuf: boolean) => {
    let best = -1;
    for (let p = 0; p < P; p++) {
      const s = useBuf
        ? (() => { const hb = hbufs[p]; hb[2] = full[0]; hb[3] = full[1]; hb[4] = full[2]; hb[5] = full[3]; hb[6] = full[4]; return score(hb); })()
        : score([...nums[p], ...full]);
      sc[p] = s;
      if (s > best) best = s;
    }
    let w = 0;
    for (let p = 0; p < P; p++) if (sc[p] === best) w++;
    const share = 1 / w;
    for (let p = 0; p < P; p++) if (sc[p] === best) eq[p] += share;
    total++;
  };

  if (b.length === 5) {
    settle(best7, b, [], false);
  } else if (b.length === 4) {
    for (const c of rest) settle(best7, [b[0], b[1], b[2], b[3], c], [], false);
  } else if (b.length === 3) {
    for (let i = 0; i < rest.length; i++)
      for (let j = i + 1; j < rest.length; j++) settle(best7, [b[0], b[1], b[2], rest[i], rest[j]], [], false);
  } else {
    // 프리플랍: 몬테카를로 (best7fast + 버퍼 재사용)
    const pool = [...rest];
    const hbufs: NCard[][] = nums.map((h) => [h[0], h[1], pool[0], pool[1], pool[2], pool[3], pool[4]]);
    const full: NCard[] = [pool[0], pool[1], pool[2], pool[3], pool[4]];
    for (let k = 0; k < MC_SAMPLES; k++) {
      for (let i = 0; i < 5; i++) {
        const j = i + Math.floor(Math.random() * (pool.length - i));
        const t = pool[i]; pool[i] = pool[j]; pool[j] = t;
        full[i] = pool[i];
      }
      settle(best7fast, full, hbufs, true);
    }
  }
  return eq.map((e) => (e / total) * 100);
}

/** 풀 보드 기준 승자 인덱스들 (동점이면 여럿) */
export function winnersAt(hands: Card[][], board: Card[]): number[] {
  const sc = hands.map((h) => best7([...h.map(toNum), ...board.map(toNum)]));
  const best = Math.max(...sc);
  const w: number[] = [];
  sc.forEach((s, i) => { if (s === best) w.push(i); });
  return w;
}

// ── 현재 족보/드로우 라벨 ──────────────────────────────────────────────────────

function combosIdx(n: number, k: number): number[][] {
  const res: number[][] = [];
  const rec = (start: number, combo: number[]) => {
    if (combo.length === k) { res.push([...combo]); return; }
    for (let i = start; i < n; i++) { combo.push(i); rec(i + 1, combo); combo.pop(); }
  };
  rec(0, []);
  return res;
}

/** 5~7장 중 베스트 5장의 족보 카테고리(0=하이카드 ~ 8=스티플). 5장 미만이면 -1 */
function bestCategoryIdx(cs: NCard[]): number {
  if (cs.length < 5) return -1;
  let best = -1;
  for (const idx of combosIdx(cs.length, 5)) {
    const s = score5(idx.map((i) => cs[i]));
    if (s > best) best = s;
  }
  return Math.floor(best / 15 ** 5);
}

/**
 * 현재까지 공개된 보드 기준 "현재 족보 + 드로우" 라벨. (§13: 메이드=정확 판정, 드로우=4장 판정)
 * 프리플랍(board 0장)은 빈 문자열. 리버(5장)는 확정 족보만.
 */
export function describeHand(hole: Card[], board: Card[], drawingDead: boolean): string {
  const cs = [...hole.map(toNum), ...board.map(toNum)];
  const revealed = board.length;
  if (revealed < 3) return ""; // 프리플랍: 라벨 없음
  const catIdx = bestCategoryIdx(cs);
  const made = catIdx >= 0 ? CATNAME[catIdx] : "하이카드";
  if (revealed >= 5) return made; // 리버: 확정 족보
  if (drawingDead) return "드로잉 데드";

  const draws: string[] = [];
  // 플러시 드로우: 한 무늬 정확히 4장 (아직 플러시 미완성)
  if (catIdx < 5) {
    const suitCount = [0, 0, 0, 0];
    for (const c of cs) suitCount[c[1]]++;
    if (suitCount.some((x) => x === 4)) draws.push("플러시 드로우");
  }
  // 스트레이트 드로우: 5칸 창에 4랭크 존재 (스트레이트 미만일 때만, 휠 포함)
  if (catIdx < 4) {
    const present = new Set(cs.map((c) => c[0]));
    if (present.has(14)) present.add(1);
    for (let lo = 1; lo <= 10; lo++) {
      let cnt = 0;
      for (let k = 0; k < 5; k++) if (present.has(lo + k)) cnt++;
      if (cnt === 4) { draws.push("스트레이트 드로우"); break; }
    }
  }
  if (draws.length) return `${made} · ${draws.join(" · ")}`;
  return made;
}
