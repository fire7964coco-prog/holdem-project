import type { Post } from "../posts";
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";

/**
 * 스페인어(es) 블로그 포스트.
 * 기계 번역이 아닌 스페인어권/LATAM 포커 커뮤니티 용어에 맞게 현지화한 글만 등록한다.
 * 슬러그는 한국어/영어/일본어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const ES_POSTS: Post[] = [holdemHandRankings, holdemGameOrder, holdemTournamentVsCashGame];

export function getEsPost(slug: string): Post | undefined {
  return ES_POSTS.find((p) => p.slug === slug);
}

const ES_SLUGS = new Set(ES_POSTS.map((p) => p.slug));

/** 해당 슬러그의 스페인어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasEsPost(slug: string): boolean {
  return ES_SLUGS.has(slug);
}
