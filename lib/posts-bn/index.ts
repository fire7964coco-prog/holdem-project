import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

/**
 * 벵골어(bn) 블로그 포스트 — 방글라데시·인도 서벵골.
 * 본문은 벵골어 산문, 포커 전문 용어는 영어/음차 인라인(벵골 포커 씬 관습).
 * 숫자는 영어식(라틴 숫자·콤마 천단위). 슬러그는 다른 언어와 동일(hreflang).
 */
export const BN_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
];

export function getBnPost(slug: string): Post | undefined {
  return BN_POSTS.find((p) => p.slug === slug);
}

const BN_SLUGS = new Set(BN_POSTS.map((p) => p.slug));

/** 해당 슬러그의 벵골어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasBnPost(slug: string): boolean {
  return BN_SLUGS.has(slug);
}
