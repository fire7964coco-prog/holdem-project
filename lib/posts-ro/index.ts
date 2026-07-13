import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

/**
 * 루마니아어(ro) 블로그 포스트.
 * 루마니아 포커 용어(Chintă·Culoare=flush·Careu=포카드·Full House 등)로 현지화.
 * 홀덤 표준 순서(Full House>Culoare). 숫자는 루마니아식(천단위 마침표·소수점 쉼표). 슬러그는 다른 언어와 동일(hreflang).
 */
export const RO_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
];

export function getRoPost(slug: string): Post | undefined {
  return RO_POSTS.find((p) => p.slug === slug);
}

const RO_SLUGS = new Set(RO_POSTS.map((p) => p.slug));

/** 해당 슬러그의 루마니아어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasRoPost(slug: string): boolean {
  return RO_SLUGS.has(slug);
}
