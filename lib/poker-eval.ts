export const RANKS = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'] as const;
export const SUITS = ['♠','♥','♦','♣'] as const;
export type Rank = typeof RANKS[number];
export type Suit = typeof SUITS[number];
export type Card = { rank: Rank; suit: Suit; id: string };

export const RANK_VALUE: Record<Rank, number> = {
  '2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':11,'Q':12,'K':13,'A':14,
};

export type HandInfo = { rank: number; koreanName: string; engName: string; emoji: string; tip: string };

export const HAND_LIST: HandInfo[] = [
  { rank:1,  koreanName:"로열 플러시",       engName:"Royal Flush",      emoji:"👑", tip:"같은 무늬 A-K-Q-J-10. 포커 최강 패!" },
  { rank:2,  koreanName:"스트레이트 플러시",  engName:"Straight Flush",   emoji:"🌊", tip:"같은 무늬의 연속된 카드 5장." },
  { rank:3,  koreanName:"포카드",            engName:"Four of a Kind",   emoji:"⚡", tip:"같은 숫자 4장 + 킥커 1장." },
  { rank:4,  koreanName:"풀하우스",           engName:"Full House",       emoji:"🏠", tip:"트리플(3장) + 페어(2장). '보트'라고도 불림." },
  { rank:5,  koreanName:"플러시",             engName:"Flush",            emoji:"💧", tip:"같은 무늬 5장 (연속 아니어도 됨)." },
  { rank:6,  koreanName:"스트레이트",         engName:"Straight",         emoji:"➡️", tip:"연속 숫자 5장 (무늬 무관). A는 최강·최약 모두 가능." },
  { rank:7,  koreanName:"트리플",             engName:"Three of a Kind",  emoji:"3️⃣", tip:"같은 숫자 3장. '쓰리카드'라고도 부름." },
  { rank:8,  koreanName:"투페어",             engName:"Two Pair",         emoji:"✌️", tip:"다른 숫자의 페어 2쌍." },
  { rank:9,  koreanName:"원페어",             engName:"One Pair",         emoji:"🤝", tip:"같은 숫자 2장. 가장 흔한 족보." },
  { rank:10, koreanName:"하이카드",           engName:"High Card",        emoji:"🃏", tip:"아무 조합도 없음. 가장 높은 카드로 비교." },
];

export function createDeck(): Card[] {
  const deck: Card[] = [];
  for (const suit of SUITS) for (const rank of RANKS) deck.push({ rank, suit, id: `${rank}${suit}` });
  return deck;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getCombinations<T>(arr: T[], k: number): T[][] {
  const res: T[][] = [];
  const helper = (start: number, combo: T[]) => {
    if (combo.length === k) { res.push([...combo]); return; }
    for (let i = start; i < arr.length; i++) { combo.push(arr[i]); helper(i+1, combo); combo.pop(); }
  };
  helper(0, []);
  return res;
}

export function evalHand5(cards: Card[]): HandInfo {
  const vals = cards.map(c => RANK_VALUE[c.rank]).sort((a,b) => b-a);
  const suits = cards.map(c => c.suit);
  const isFlush = suits.every(s => s === suits[0]);
  const unique = [...new Set(vals)].sort((a,b) => b-a);
  let isStraight = false;
  if (unique.length === 5) {
    if (unique[0] - unique[4] === 4) isStraight = true;
    if (unique[0]===14 && unique[1]===5 && unique[2]===4 && unique[3]===3 && unique[4]===2) isStraight = true;
  }
  const freq: Record<number,number> = {};
  for (const v of vals) freq[v] = (freq[v]||0)+1;
  const counts = Object.values(freq).sort((a,b) => b-a);

  if (isFlush && isStraight && vals[0]===14 && vals[1]===13) return HAND_LIST[0];
  if (isFlush && isStraight) return HAND_LIST[1];
  if (counts[0]===4) return HAND_LIST[2];
  if (counts[0]===3 && counts[1]===2) return HAND_LIST[3];
  if (isFlush) return HAND_LIST[4];
  if (isStraight) return HAND_LIST[5];
  if (counts[0]===3) return HAND_LIST[6];
  if (counts[0]===2 && counts[1]===2) return HAND_LIST[7];
  if (counts[0]===2) return HAND_LIST[8];
  return HAND_LIST[9];
}

/**
 * 같은 족보 타입 내에서 최강 조합을 고르기 위한 점수 배열.
 * 카드를 빈도(내림차순) → 숫자값(내림차순) 순으로 정렬해 flat화.
 * 예) AA+KQ → [14,14,13,12], AA+67 → [14,14,7,6]
 * 배열을 앞에서부터 비교하면 자동으로 킥커까지 올바르게 비교된다.
 */
function handScore(cards: Card[]): number[] {
  const freq: Record<number, number> = {};
  for (const c of cards) {
    const v = RANK_VALUE[c.rank];
    freq[v] = (freq[v] || 0) + 1;
  }
  const score = Object.entries(freq)
    .map(([v, f]) => [Number(v), Number(f)] as [number, number])
    .sort(([va, fa], [vb, fb]) => fb - fa || vb - va)   // 빈도↓, 값↓
    .flatMap(([v, f]) => Array(f).fill(v));
  // 휠 스트레이트(A-2-3-4-5): 에이스는 로우로 취급 → 5 하이. [14,5,4,3,2]는 항상 휠뿐이라 안전.
  if (score.length === 5 && score[0] === 14 && score[1] === 5 && score[2] === 4 && score[3] === 3 && score[4] === 2) {
    return [5, 4, 3, 2, 1];
  }
  return score;
}

function scoreBetter(a: number[], b: number[]): boolean {
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] !== b[i]) return a[i] > b[i];
  }
  return false;
}

export function evalBest7(cards: Card[]): { best: HandInfo; bestCards: Card[] } {
  let best = HAND_LIST[9];
  let bestCards = cards.slice(0, 5);
  let bestScore: number[] = [];
  for (const combo of getCombinations(cards, 5)) {
    const h = evalHand5(combo);
    const score = handScore(combo);
    const betterType = h.rank < best.rank;
    const sameType   = h.rank === best.rank;
    if (betterType || (sameType && scoreBetter(score, bestScore))) {
      best = h; bestCards = combo; bestScore = score;
    }
  }
  return { best, bestCards };
}

export function makeChoices(correct: HandInfo): HandInfo[] {
  const pool = shuffle(HAND_LIST.filter(h => h.rank !== correct.rank));
  return shuffle([correct, ...pool.slice(0,3)]);
}

export function makeQuestion() {
  const deck = shuffle(createDeck());
  const all = deck.slice(0,7);
  const { best: correct, bestCards } = evalBest7(all);
  return {
    hole: all.slice(0,2),
    board: all.slice(2,7),
    all,
    correct,
    bestCards,
    choices: makeChoices(correct),
  };
}
