import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

/**
 * 필리핀어/타갈로그(fil) 블로그 포스트 — 필리핀(마닐라 포커 허브).
 * Taglish: 필리핀어 산문 + 포커 전문 용어 영어 유지(필리핀 포커 씬 영어 우세).
 * 숫자는 영어식(미국식·콤마 천단위). 슬러그는 다른 언어와 동일(hreflang).
 */
export const FIL_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
];

export function getFilPost(slug: string): Post | undefined {
  return FIL_POSTS.find((p) => p.slug === slug);
}

const FIL_SLUGS = new Set(FIL_POSTS.map((p) => p.slug));

/** 해당 슬러그의 필리핀어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasFilPost(slug: string): boolean {
  return FIL_SLUGS.has(slug);
}
