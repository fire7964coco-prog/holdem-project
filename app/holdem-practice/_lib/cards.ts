// 홀덤 연습 게임 — 카드/덱 유틸 (독립 모듈, 외부 의존 없음)

export interface Card {
  /** 2~14 (11=J, 12=Q, 13=K, 14=A) */
  rank: number;
  /** 0=♠, 1=♥, 2=♦, 3=♣ */
  suit: number;
}

export const SUIT_SYMBOLS = ["♠", "♥", "♦", "♣"] as const;
export const RANK_LABELS: Record<number, string> = {
  2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9",
  10: "10", 11: "J", 12: "Q", 13: "K", 14: "A",
};

export function isRedSuit(suit: number): boolean {
  return suit === 1 || suit === 2;
}

export function cardLabel(card: Card): string {
  return `${RANK_LABELS[card.rank]}${SUIT_SYMBOLS[card.suit]}`;
}

export function makeDeck(): Card[] {
  const deck: Card[] = [];
  for (let rank = 2; rank <= 14; rank++) {
    for (let suit = 0; suit < 4; suit++) {
      deck.push({ rank, suit });
    }
  }
  return deck;
}

/** Fisher-Yates 셔플 (원본 배열을 복사해서 반환) */
export function shuffle(deck: Card[]): Card[] {
  const out = [...deck];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
