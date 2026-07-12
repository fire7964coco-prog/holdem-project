import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

// 기타
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";

/**
 * 힌디어(hi) 블로그 포스트.
 * 인도 포커 커뮤니티 관행에 맞춰 본문은 데바나가리, 포커 전문 용어는 라틴 영어로 인라인해 현지화한다.
 * 슬러그는 다른 언어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const HI_POSTS: Post[] = [
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

export function getHiPost(slug: string): Post | undefined {
  return HI_POSTS.find((p) => p.slug === slug);
}

const HI_SLUGS = new Set(HI_POSTS.map((p) => p.slug));

/** 해당 슬러그의 힌디어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasHiPost(slug: string): boolean {
  return HI_SLUGS.has(slug);
}
