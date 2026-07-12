import type { Post } from "../posts";
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";

/**
 * 말레이어(ms) 블로그 포스트.
 * 인도네시아어와 어휘가 비슷하므로 기계 번역/복사가 아닌 말레이시아식 표현으로 새로 현지화한다.
 * 슬러그는 다른 언어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const MS_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
  // 기타
  holdemHandRankings,
  holdemTournamentVsCashGame,
];

export function getMsPost(slug: string): Post | undefined {
  return MS_POSTS.find((p) => p.slug === slug);
}

const MS_SLUGS = new Set(MS_POSTS.map((p) => p.slug));

/** 해당 슬러그의 말레이어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasMsPost(slug: string): boolean {
  return MS_SLUGS.has(slug);
}
