import type { Post } from "../posts";
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";

/**
 * 아랍어(ar) 블로그 포스트. RTL(오른쪽→왼쪽) 언어.
 * 기계 번역이 아닌 아랍어권 포커 커뮤니티 용어에 맞게 현지화한 글만 등록한다.
 * 슬러그는 다른 언어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const AR_POSTS: Post[] = [holdemHandRankings, holdemGameOrder, holdemTournamentVsCashGame];

export function getArPost(slug: string): Post | undefined {
  return AR_POSTS.find((p) => p.slug === slug);
}

const AR_SLUGS = new Set(AR_POSTS.map((p) => p.slug));

/** 해당 슬러그의 아랍어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasArPost(slug: string): boolean {
  return AR_SLUGS.has(slug);
}
