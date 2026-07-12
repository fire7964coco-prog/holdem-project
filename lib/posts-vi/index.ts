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
 * 베트남어(vi) 블로그 포스트.
 * 기계 번역이 아닌 베트남 포커 커뮤니티 용어(Cù Lũ, Tứ Quý, Sảnh, Thùng, Xám 등)로 현지화한 글만 등록한다.
 * 슬러그는 다른 언어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const VI_POSTS: Post[] = [
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

export function getViPost(slug: string): Post | undefined {
  return VI_POSTS.find((p) => p.slug === slug);
}

const VI_SLUGS = new Set(VI_POSTS.map((p) => p.slug));

/** 해당 슬러그의 베트남어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasViPost(slug: string): boolean {
  return VI_SLUGS.has(slug);
}
