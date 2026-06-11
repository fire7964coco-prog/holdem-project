import type { Post } from "../posts";
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";

/**
 * 포르투갈어(pt-BR) 블로그 포스트.
 * 기계 번역이 아닌 브라질 포커 커뮤니티 용어에 맞게 현지화한 글만 등록한다.
 * 슬러그는 다른 언어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const PT_POSTS: Post[] = [holdemHandRankings, holdemGameOrder, holdemTournamentVsCashGame];

export function getPtPost(slug: string): Post | undefined {
  return PT_POSTS.find((p) => p.slug === slug);
}

const PT_SLUGS = new Set(PT_POSTS.map((p) => p.slug));

/** 해당 슬러그의 포르투갈어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasPtPost(slug: string): boolean {
  return PT_SLUGS.has(slug);
}
