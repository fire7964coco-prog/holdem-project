import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

/**
 * 프랑스어(fr) 블로그 포스트.
 * 프랑스 포커 커뮤니티 용어(Quinte Flush·Carré·Couleur·Brelan 등 + 영어 병용)로 현지화한 글.
 * 숫자는 프랑스식(천단위 공백·소수점 쉼표·% 앞 공백). 슬러그는 다른 언어와 동일(hreflang).
 */
export const FR_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
];

export function getFrPost(slug: string): Post | undefined {
  return FR_POSTS.find((p) => p.slug === slug);
}

const FR_SLUGS = new Set(FR_POSTS.map((p) => p.slug));

/** 해당 슬러그의 프랑스어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasFrPost(slug: string): boolean {
  return FR_SLUGS.has(slug);
}
