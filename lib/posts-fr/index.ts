import type { Post } from "../posts";

// Rules 필라 (6/6)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

// ── fr 클러스터 레인 import 칸 (2026-10-07 · docs/fr-cluster-plan.md §5) ──
// 🔴 레인은 자기 칸의 «시작»과 «끝» 줄 사이에만 넣는다. 칸 밖을 고치면 레인끼리 충돌한다. (🅰 fr-rules는 위 6편 재작업이라 칸 없음)
// [fr-rank import 시작]
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemFlushVsStraight } from "./holdem-flush-vs-straight";
import { POST as holdemKicker } from "./holdem-kicker";
import { POST as holdemTiebreakRules } from "./holdem-tiebreak-rules";
import { POST as holdemSplitPotRules } from "./holdem-split-pot-rules";
import { POST as holdemReadingTheBoard } from "./holdem-reading-the-board";
// [fr-rank import 끝]

// [fr-prob import 시작]
import { POST as holdemProbability } from "./holdem-probability";
import { POST as holdemPotOdds } from "./holdem-pot-odds";
import { POST as holdemOuts } from "./holdem-outs";
import { POST as holdemDrawingOdds } from "./holdem-drawing-odds";
import { POST as holdemImpliedOdds } from "./holdem-implied-odds";
import { POST as holdemEquity } from "./holdem-equity";
import { POST as holdemCardCounting } from "./holdem-card-counting";
// [fr-prob import 끝]

// [fr-strat import 시작]
// [fr-strat import 끝]

// [fr-tour import 시작]
// [fr-tour import 끝]

// [fr-gloss import 시작]
// [fr-gloss import 끝]

// [fr-gto import 시작]
// [fr-gto import 끝]

/**
 * 프랑스어(fr) 블로그 포스트.
 * 프랑스 포커 커뮤니티 용어(Quinte Flush·Carré·Couleur·Brelan 등 + 영어 병용)로 현지화한 글.
 * 숫자는 프랑스식(천단위 공백·소수점 쉼표·% 앞 공백). 슬러그는 다른 언어와 동일(hreflang).
 */
export const FR_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,

  // ── fr 클러스터 레인 배열 칸 — 자기 칸 사이에만 ──
  // [fr-rank 배열 시작]
  holdemHandRankings,
  holdemFlushVsStraight,
  holdemKicker,
  holdemTiebreakRules,
  holdemSplitPotRules,
  holdemReadingTheBoard,
  // [fr-rank 배열 끝]

  // [fr-prob 배열 시작]
  holdemProbability,
  holdemPotOdds,
  holdemOuts,
  holdemDrawingOdds,
  holdemImpliedOdds,
  holdemEquity,
  holdemCardCounting,
  // [fr-prob 배열 끝]

  // [fr-strat 배열 시작]
  // [fr-strat 배열 끝]

  // [fr-tour 배열 시작]
  // [fr-tour 배열 끝]

  // [fr-gloss 배열 시작]
  // [fr-gloss 배열 끝]

  // [fr-gto 배열 시작]
  // [fr-gto 배열 끝]
];

export function getFrPost(slug: string): Post | undefined {
  return FR_POSTS.find((p) => p.slug === slug);
}

const FR_SLUGS = new Set(FR_POSTS.map((p) => p.slug));

/** 해당 슬러그의 프랑스어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasFrPost(slug: string): boolean {
  return FR_SLUGS.has(slug);
}
