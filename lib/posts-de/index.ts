import type { Post } from "../posts";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemHandRankings } from "./holdem-hand-rankings";

/**
 * 독일어(de) 블로그 포스트.
 * 기계 번역이 아닌 독일 포커 커뮤니티 용어(Vierling, Drilling, Straße 등)에 맞게 현지화한 글만 등록한다.
 * 슬러그는 다른 언어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const DE_POSTS: Post[] = [holdemHandRankings, holdemGameOrder];

export function getDePost(slug: string): Post | undefined {
  return DE_POSTS.find((p) => p.slug === slug);
}

const DE_SLUGS = new Set(DE_POSTS.map((p) => p.slug));

/** 해당 슬러그의 독일어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasDePost(slug: string): boolean {
  return DE_SLUGS.has(slug);
}
