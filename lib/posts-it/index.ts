import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

/**
 * 이탈리아어(it) 블로그 포스트.
 * 이탈리아 포커 용어(Scala Reale·Poker=포카드·Colore=flush·Scala·Tris 등)로 현지화한 글.
 * 홀덤 표준 순서(Full>Colore) 준수. 숫자는 이탈리아식(천단위 마침표·소수점 쉼표). 슬러그는 다른 언어와 동일(hreflang).
 */
export const IT_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
];

export function getItPost(slug: string): Post | undefined {
  return IT_POSTS.find((p) => p.slug === slug);
}

const IT_SLUGS = new Set(IT_POSTS.map((p) => p.slug));

/** 해당 슬러그의 이탈리아어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasItPost(slug: string): boolean {
  return IT_SLUGS.has(slug);
}
