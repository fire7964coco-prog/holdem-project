import type { Post } from "../posts";

// Rules 필라 (6/6) — 🅰 vi-rules 레인이 같은 파일을 EN 현행으로 다시 쓴다(칸 없음 · import 불변)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

// ── vi 클러스터 레인 import 칸 (2026-10-09 · docs/vi-cluster-plan.md §5) ──
// 🔴 레인은 자기 칸의 «시작»과 «끝» 줄 사이에만 넣는다. 칸 밖을 고치면 레인끼리 충돌한다.
//    기존 편(hand-rankings · tournament-vs-cash-game)은 재작업 레인의 칸 안으로 옮겨 두었다 — 파일만 다시 쓴다.
// [vi-rank import 시작]
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
// [vi-rank import 끝]

// [vi-prob import 시작]
// [vi-prob import 끝]

// [vi-strat import 시작]
import { POST as holdemStrategy } from "./holdem-strategy";
import { POST as holdemPositions } from "./holdem-positions";
import { POST as holdemPositionPlay } from "./holdem-position-play";
import { POST as holdemStartingHandsChart } from "./holdem-starting-hands-chart";
import { POST as holdemLimping } from "./holdem-limping";
import { POST as holdem3bet } from "./holdem-3bet";
import { POST as holdemContinuationBet } from "./holdem-continuation-bet";
import { POST as holdemWhenToFold } from "./holdem-when-to-fold";
// [vi-strat import 끝]

// [vi-tour import 시작]
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";
// [vi-tour import 끝]

// [vi-gloss import 시작]
// [vi-gloss import 끝]

// [vi-gto import 시작]
// [vi-gto import 끝]

/**
 * 베트남어(vi) 블로그 포스트.
 * 기계 번역이 아닌 베트남 포커 커뮤니티 용어(족보 = cù lũ·tứ quý·sảnh·thùng·sám cô · 액션·구조 = 영어 차용어)로 현지화한 글만 등록한다.
 * 용어 정본 = docs/vi-cluster-plan.md §3-A. 숫자는 베트남식(천단위 마침표·소수점 쉼표·% 붙임).
 * 슬러그는 다른 언어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const VI_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,

  // ── vi 클러스터 레인 배열 칸 — 자기 칸 사이에만 ──
  // [vi-rank 배열 시작]
  holdemHandRankings,
  // [vi-rank 배열 끝]

  // [vi-prob 배열 시작]
  // [vi-prob 배열 끝]

  // [vi-strat 배열 시작]
  holdemStrategy,
  holdemPositions,
  holdemPositionPlay,
  holdemStartingHandsChart,
  holdemLimping,
  holdem3bet,
  holdemContinuationBet,
  holdemWhenToFold,
  // [vi-strat 배열 끝]

  // [vi-tour 배열 시작]
  holdemTournamentVsCashGame,
  // [vi-tour 배열 끝]

  // [vi-gloss 배열 시작]
  // [vi-gloss 배열 끝]

  // [vi-gto 배열 시작]
  // [vi-gto 배열 끝]
];

export function getViPost(slug: string): Post | undefined {
  return VI_POSTS.find((p) => p.slug === slug);
}

const VI_SLUGS = new Set(VI_POSTS.map((p) => p.slug));

/** 해당 슬러그의 베트남어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasViPost(slug: string): boolean {
  return VI_SLUGS.has(slug);
}
