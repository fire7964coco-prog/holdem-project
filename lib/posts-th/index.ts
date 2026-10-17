import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

// Hand rankings 필라 (5)
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemKicker } from "./holdem-kicker";
import { POST as holdemTiebreakRules } from "./holdem-tiebreak-rules";
import { POST as holdemSplitPotRules } from "./holdem-split-pot-rules";
import { POST as holdemFlushVsStraight } from "./holdem-flush-vs-straight";

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
  // Hand rankings 필라 (5)
  holdemHandRankings,
  holdemKicker,
  holdemTiebreakRules,
  holdemSplitPotRules,
  holdemFlushVsStraight,
];

export function getThPost(slug: string): Post | undefined {
  return TH_POSTS.find((p) => p.slug === slug);
}

const TH_SLUGS = new Set(TH_POSTS.map((p) => p.slug));

/** 해당 슬러그의 태국어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasThPost(slug: string): boolean {
  return TH_SLUGS.has(slug);
}
