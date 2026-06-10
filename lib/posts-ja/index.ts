import type { Post } from "../posts";
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemGameOrder } from "./holdem-game-order";

/**
 * 일본어(ja) 블로그 포스트.
 * 기계 번역이 아닌 일본 포커 커뮤니티 용어에 맞게 현지화한 글만 등록한다.
 * 슬러그는 한국어/영어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const JA_POSTS: Post[] = [holdemHandRankings, holdemGameOrder];

export function getJaPost(slug: string): Post | undefined {
  return JA_POSTS.find((p) => p.slug === slug);
}

const JA_SLUGS = new Set(JA_POSTS.map((p) => p.slug));

/** 해당 슬러그의 일본어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasJaPost(slug: string): boolean {
  return JA_SLUGS.has(slug);
}
