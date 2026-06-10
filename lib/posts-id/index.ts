import type { Post } from "../posts";
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemGameOrder } from "./holdem-game-order";

/**
 * 인도네시아어(id) 블로그 포스트.
 * 기계 번역이 아닌 인도네시아 포커 커뮤니티 용어(영어 병용)에 맞게 현지화한 글만 등록한다.
 * 슬러그는 다른 언어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const ID_POSTS: Post[] = [holdemHandRankings, holdemGameOrder];

export function getIdPost(slug: string): Post | undefined {
  return ID_POSTS.find((p) => p.slug === slug);
}

const ID_SLUGS = new Set(ID_POSTS.map((p) => p.slug));

/** 해당 슬러그의 인도네시아어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasIdPost(slug: string): boolean {
  return ID_SLUGS.has(slug);
}
