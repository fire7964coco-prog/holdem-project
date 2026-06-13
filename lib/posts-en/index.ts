import type { Post } from "../posts";
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemFlushVsStraight } from "./holdem-flush-vs-straight";
import { POST as holdemTiebreakRules } from "./holdem-tiebreak-rules";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemSplitPotRules } from "./holdem-split-pot-rules";

/**
 * 영어(en) 블로그 포스트.
 * 한국어 원본을 기계 번역이 아닌 영어권 포커 문화에 맞게 현지화한 글만 등록한다.
 * 슬러그는 한국어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const EN_POSTS: Post[] = [
  texasHoldemRulesForBeginners,
  holdemHandRankings,
  holdemFlushVsStraight,
  holdemTiebreakRules,
  holdemGameOrder,
  holdemBlindMeaning,
  holdemSplitPotRules,
  holdemTournamentVsCashGame,
];

export function getEnPost(slug: string): Post | undefined {
  return EN_POSTS.find((p) => p.slug === slug);
}

const EN_SLUGS = new Set(EN_POSTS.map((p) => p.slug));

/** 해당 슬러그의 영어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasEnPost(slug: string): boolean {
  return EN_SLUGS.has(slug);
}
