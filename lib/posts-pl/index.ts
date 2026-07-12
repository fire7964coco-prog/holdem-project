import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

/**
 * 폴란드어(pl) 블로그 포스트.
 * 폴란드 포커 용어(Poker królewski·Poker=straight flush·Kareta=포카드·Kolor=flush·Strit 등)로 현지화.
 * 홀덤 표준 순서(Full>Kolor). 숫자는 폴란드식(천단위 공백·소수점 쉼표). 슬러그는 다른 언어와 동일(hreflang).
 */
export const PL_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
];

export function getPlPost(slug: string): Post | undefined {
  return PL_POSTS.find((p) => p.slug === slug);
}

const PL_SLUGS = new Set(PL_POSTS.map((p) => p.slug));

/** 해당 슬러그의 폴란드어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasPlPost(slug: string): boolean {
  return PL_SLUGS.has(slug);
}
