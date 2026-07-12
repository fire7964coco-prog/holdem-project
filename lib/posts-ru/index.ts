import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

/**
 * 러시아어(ru) 블로그 포스트.
 * 러시아 포커 커뮤니티 용어(Роял-флеш·Каре·Флеш·Стрит·Сет 등, 대부분 영어 음차)로 현지화한 글.
 * 숫자는 러시아식(천단위 공백·소수점 쉼표). 슬러그는 다른 언어와 동일(hreflang).
 */
export const RU_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
];

export function getRuPost(slug: string): Post | undefined {
  return RU_POSTS.find((p) => p.slug === slug);
}

const RU_SLUGS = new Set(RU_POSTS.map((p) => p.slug));

/** 해당 슬러그의 러시아어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasRuPost(slug: string): boolean {
  return RU_SLUGS.has(slug);
}
