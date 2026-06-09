// 홀덤 연습 게임 — 7장 족보 판정 및 비교 (독립 모듈)

import type { Card } from "./cards";

export interface HandResult {
  /** 0=하이카드 ... 8=스트레이트 플러시(로열 포함) */
  category: number;
  /** 카테고리 동일 시 비교용 (내림차순 정렬된 숫자 배열) */
  tiebreak: number[];
  name: string;
}

const CATEGORY_NAMES = [
  "하이 카드",
  "원 페어",
  "투 페어",
  "트리플",
  "스트레이트",
  "플러시",
  "풀 하우스",
  "포 카드",
  "스트레이트 플러시",
];

function combinations<T>(arr: T[], k: number): T[][] {
  if (k === 0) return [[]];
  if (arr.length < k) return [];
  const [head, ...tail] = arr;
  const withHead = combinations(tail, k - 1).map((c) => [head, ...c]);
  const withoutHead = combinations(tail, k);
  return [...withHead, ...withoutHead];
}

/** 정확히 5장의 족보를 평가 */
function evaluate5(cards: Card[]): HandResult {
  const ranks = cards.map((c) => c.rank).sort((a, b) => b - a);
  const suits = cards.map((c) => c.suit);
  const isFlush = new Set(suits).size === 1;

  const uniqueDesc = [...new Set(ranks)].sort((a, b) => b - a);
  let straightHigh = 0;
  if (uniqueDesc.length === 5) {
    if (uniqueDesc[0] - uniqueDesc[4] === 4) {
      straightHigh = uniqueDesc[0];
    } else if (
      uniqueDesc[0] === 14 &&
      uniqueDesc[1] === 5 &&
      uniqueDesc[2] === 4 &&
      uniqueDesc[3] === 3 &&
      uniqueDesc[4] === 2
    ) {
      // 휠 스트레이트 (A-2-3-4-5) — A를 1로 취급, 하이는 5
      straightHigh = 5;
    }
  }
  const isStraight = straightHigh > 0;

  // 랭크별 카운트
  const counts: Record<number, number> = {};
  for (const r of ranks) counts[r] = (counts[r] || 0) + 1;
  // [count, rank] 를 count 내림차순, 동률이면 rank 내림차순
  const grouped = Object.entries(counts)
    .map(([r, c]) => ({ rank: Number(r), count: c }))
    .sort((a, b) => (b.count - a.count) || (b.rank - a.rank));
  const countPattern = grouped.map((g) => g.count);

  if (isStraight && isFlush) {
    return { category: 8, tiebreak: [straightHigh], name: straightHigh === 14 ? "로열 플러시" : "스트레이트 플러시" };
  }
  if (countPattern[0] === 4) {
    return { category: 7, tiebreak: [grouped[0].rank, grouped[1].rank], name: CATEGORY_NAMES[7] };
  }
  if (countPattern[0] === 3 && countPattern[1] === 2) {
    return { category: 6, tiebreak: [grouped[0].rank, grouped[1].rank], name: CATEGORY_NAMES[6] };
  }
  if (isFlush) {
    return { category: 5, tiebreak: ranks, name: CATEGORY_NAMES[5] };
  }
  if (isStraight) {
    return { category: 4, tiebreak: [straightHigh], name: CATEGORY_NAMES[4] };
  }
  if (countPattern[0] === 3) {
    const kickers = grouped.filter((g) => g.count === 1).map((g) => g.rank);
    return { category: 3, tiebreak: [grouped[0].rank, ...kickers], name: CATEGORY_NAMES[3] };
  }
  if (countPattern[0] === 2 && countPattern[1] === 2) {
    const pairRanks = grouped.filter((g) => g.count === 2).map((g) => g.rank).sort((a, b) => b - a);
    const kicker = grouped.find((g) => g.count === 1)!.rank;
    return { category: 2, tiebreak: [...pairRanks, kicker], name: CATEGORY_NAMES[2] };
  }
  if (countPattern[0] === 2) {
    const kickers = grouped.filter((g) => g.count === 1).map((g) => g.rank);
    return { category: 1, tiebreak: [grouped[0].rank, ...kickers], name: CATEGORY_NAMES[1] };
  }
  return { category: 0, tiebreak: ranks, name: CATEGORY_NAMES[0] };
}

/** 두 결과 비교: a가 강하면 양수, 약하면 음수, 같으면 0 */
export function compareResults(a: HandResult, b: HandResult): number {
  if (a.category !== b.category) return a.category - b.category;
  const len = Math.max(a.tiebreak.length, b.tiebreak.length);
  for (let i = 0; i < len; i++) {
    const av = a.tiebreak[i] ?? 0;
    const bv = b.tiebreak[i] ?? 0;
    if (av !== bv) return av - bv;
  }
  return 0;
}

/** 5~7장 중 최고의 5장 족보를 반환 */
export function evaluateBest(cards: Card[]): HandResult {
  if (cards.length < 5) {
    // 안전장치: 5장 미만이면 하이카드로 처리
    const ranks = cards.map((c) => c.rank).sort((a, b) => b - a);
    return { category: 0, tiebreak: ranks, name: CATEGORY_NAMES[0] };
  }
  const combos = combinations(cards, 5);
  let best = evaluate5(combos[0]);
  for (let i = 1; i < combos.length; i++) {
    const r = evaluate5(combos[i]);
    if (compareResults(r, best) > 0) best = r;
  }
  return best;
}
