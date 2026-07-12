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
 * 터키어(tr) 블로그 포스트.
 * 기계 번역이 아닌 터키 포커 커뮤니티 용어(Kare, Üçlü, Kent, İki Çift 등 + 영어 병기)로 현지화한 글만 등록한다.
 * 슬러그는 다른 언어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const TR_POSTS: Post[] = [
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

export function getTrPost(slug: string): Post | undefined {
  return TR_POSTS.find((p) => p.slug === slug);
}

const TR_SLUGS = new Set(TR_POSTS.map((p) => p.slug));

/** 해당 슬러그의 터키어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasTrPost(slug: string): boolean {
  return TR_SLUGS.has(slug);
}
