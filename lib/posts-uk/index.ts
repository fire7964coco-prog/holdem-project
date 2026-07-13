import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

/**
 * 우크라이나어(uk) 블로그 포스트.
 * 우크라이나 포커 용어(Флеш-рояль·Каре·Флеш·Стріт·Трійка 등, 러시아어와 별개 철자)로 현지화.
 * 숫자는 우크라이나식(천단위 공백·소수점 쉼표). 슬러그는 다른 언어와 동일(hreflang).
 */
export const UK_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
];

export function getUkPost(slug: string): Post | undefined {
  return UK_POSTS.find((p) => p.slug === slug);
}

const UK_SLUGS = new Set(UK_POSTS.map((p) => p.slug));

/** 해당 슬러그의 우크라이나어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasUkPost(slug: string): boolean {
  return UK_SLUGS.has(slug);
}
