import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

/**
 * 히브리어(he) 블로그 포스트 — 이스라엘·RTL(우→좌).
 * 이스라엘 포커 용어(רויאל פלאש·רביעייה·פלאש·רצף·שלישייה 등, 음차+고유)로 현지화.
 * 숫자는 영어식(라틴 서양 숫자·콤마 천단위). 슬러그는 다른 언어와 동일(hreflang).
 */
export const HE_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
];

export function getHePost(slug: string): Post | undefined {
  return HE_POSTS.find((p) => p.slug === slug);
}

const HE_SLUGS = new Set(HE_POSTS.map((p) => p.slug));

/** 해당 슬러그의 히브리어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasHePost(slug: string): boolean {
  return HE_SLUGS.has(slug);
}
