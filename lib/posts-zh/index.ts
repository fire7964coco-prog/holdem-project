import type { Post } from "../posts";
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";

/**
 * 중국어 간체(zh) 블로그 포스트.
 * 기계 번역이 아닌 중화권 포커 커뮤니티 용어에 맞게 현지화한 글만 등록한다.
 * 슬러그는 한국어/영어/일본어/스페인어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const ZH_POSTS: Post[] = [holdemHandRankings, holdemGameOrder, holdemTournamentVsCashGame];

export function getZhPost(slug: string): Post | undefined {
  return ZH_POSTS.find((p) => p.slug === slug);
}

const ZH_SLUGS = new Set(ZH_POSTS.map((p) => p.slug));

/** 해당 슬러그의 중국어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasZhPost(slug: string): boolean {
  return ZH_SLUGS.has(slug);
}
