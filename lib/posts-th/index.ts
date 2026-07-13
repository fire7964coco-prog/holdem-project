import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

/**
 * 태국어(th) 블로그 포스트.
 * 태국 포커 용어(รอยัลฟลัช·ตอง·ฟลัช·สเตรท·ฟูลเฮาส์ 등, 음차+고유)로 현지화.
 * 숫자는 영어식(아라비아 숫자·콤마 천단위). 슬러그는 다른 언어와 동일(hreflang).
 */
export const TH_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
];

export function getThPost(slug: string): Post | undefined {
  return TH_POSTS.find((p) => p.slug === slug);
}

const TH_SLUGS = new Set(TH_POSTS.map((p) => p.slug));

/** 해당 슬러그의 태국어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasThPost(slug: string): boolean {
  return TH_SLUGS.has(slug);
}
