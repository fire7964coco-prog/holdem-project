import type { Post } from "../posts";

// Rules 필라 (6/6) — 🅰 ar-rules 레인이 같은 파일을 EN 현행으로 다시 쓴다(칸 없음 · import 불변)
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";

// ── ar 클러스터 레인 import 칸 (2026-10-14 · docs/ar-cluster-plan.md §5) ──
// 🔴 레인은 자기 칸의 «시작»과 «끝» 줄 사이에만 넣는다. 칸 밖을 고치면 레인끼리 충돌한다.
//    기존 편(hand-rankings · tournament-vs-cash-game)은 재작업 레인의 칸 안으로 옮겨 두었다 — 파일만 다시 쓴다.
// [ar-rank import 시작]
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
// [ar-rank import 끝]

// [ar-prob import 시작]
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";
import { POST as holdemPotOdds } from "./holdem-pot-odds";
import { POST as holdemProbability } from "./holdem-probability";
import { POST as holdemTournament } from "./holdem-tournament";
// [ar-prob import 끝]

// [ar-strat import 시작]
import { POST as holdemStrategy } from "./holdem-strategy";
import { POST as holdemPositions } from "./holdem-positions";
import { POST as holdemContinuationBet } from "./holdem-continuation-bet";
import { POST as holdemGlossary } from "./holdem-glossary";
// [ar-strat import 끝]

/**
 * 아랍어(ar) 블로그 포스트. RTL(오른쪽→왼쪽) 언어.
 * 기계 번역이 아닌 아랍어권 포커 커뮤니티 용어에 맞게 현지화한 글만 등록한다.
 * 용어 정본 = docs/ar-cluster-plan.md §3-A · docs/translation-terms-ar.md. 숫자는 서양 숫자(0-9).
 * 슬러그는 다른 언어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const AR_POSTS: Post[] = [
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,

  // ── ar 클러스터 레인 배열 칸 — 자기 칸 사이에만 ──
  // [ar-rank 배열 시작]
  holdemHandRankings,
  // [ar-rank 배열 끝]

  // [ar-prob 배열 시작]
  holdemTournamentVsCashGame,
  holdemPotOdds,
  holdemProbability,
  holdemTournament,
  // [ar-prob 배열 끝]

  // [ar-strat 배열 시작]
  holdemStrategy,
  holdemPositions,
  holdemContinuationBet,
  holdemGlossary,
  // [ar-strat 배열 끝]
];

export function getArPost(slug: string): Post | undefined {
  return AR_POSTS.find((p) => p.slug === slug);
}

const AR_SLUGS = new Set(AR_POSTS.map((p) => p.slug));

/** 해당 슬러그의 아랍어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasArPost(slug: string): boolean {
  return AR_SLUGS.has(slug);
}
