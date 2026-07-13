import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

/**
 * 스와힐리어(sw) 블로그 포스트 — 동아프리카(케냐·탄자니아 등).
 * 포커 전문 용어는 영어 유지(스와힐리엔 확립된 포커 어휘 없음) + 스와힐리 산문 설명.
 * 숫자는 영어식(아라비아 숫자·콤마 천단위). 슬러그는 다른 언어와 동일(hreflang).
 */
export const SW_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
];

export function getSwPost(slug: string): Post | undefined {
  return SW_POSTS.find((p) => p.slug === slug);
}

const SW_SLUGS = new Set(SW_POSTS.map((p) => p.slug));

/** 해당 슬러그의 스와힐리어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasSwPost(slug: string): boolean {
  return SW_SLUGS.has(slug);
}
