import type { Post } from "../posts";
import { POST as gtoAHighBoardCbet } from "./a-high-board-cbet";
import { POST as gtoKHighBoardCbet } from "./k-high-board-cbet";
import { POST as gtoBroadwayBoardStrategy } from "./broadway-board-strategy";
import { POST as gtoDonkBetStrategy } from "./donk-bet-strategy";
import { POST as gtoMonotoneBoardStrategy } from "./monotone-board-strategy";
import { POST as gtoPairedBoardStrategy } from "./paired-board-strategy";
import { POST as gtoLowBoardCheckRaise } from "./low-board-check-raise";
import { POST as gto3betPotCbet } from "./3bet-pot-cbet";
import { POST as gto3betPotBetSizing } from "./3bet-pot-bet-sizing";
import { POST as gto3betPotLowBoard } from "./3bet-pot-low-board";
import { POST as gtoBlindBattleCbet } from "./blind-battle-cbet";
import { POST as gtoBlindBattleConnectedBoard } from "./blind-battle-connected-board";
import { POST as gtoAcePairedBoardStrategy } from "./ace-paired-board-strategy";
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";

// ── ms 신규 번역 레인 import 칸 (2026-09-26 · docs/ms-translation-lanes.md) ──
// 🔴 레인은 자기 칸의 «시작»과 «끝» 줄 사이에만 넣는다. 칸 밖을 고치면 다섯 레인이 충돌한다.
// [ms-rank import 시작]
// [ms-rank import 끝]

// [ms-prob import 시작]
// [ms-prob import 끝]

// [ms-strat import 시작]
// [ms-strat import 끝]

// [ms-tour import 시작]
// [ms-tour import 끝]

// [ms-gloss import 시작]
// [ms-gloss import 끝]

/**
 * 말레이어(ms) 블로그 포스트.
 * 인도네시아어와 어휘가 비슷하므로 기계 번역/복사가 아닌 말레이시아식 표현으로 새로 현지화한다.
 * 슬러그는 다른 언어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const MS_POSTS: Post[] = [
  // GTO 솔버 예제 해설
  gtoAHighBoardCbet,
  gtoKHighBoardCbet,
  gtoBroadwayBoardStrategy,
  gtoDonkBetStrategy,
  gtoMonotoneBoardStrategy,
  gtoPairedBoardStrategy,
  gtoLowBoardCheckRaise,
  gto3betPotCbet,
  gto3betPotBetSizing,
  gto3betPotLowBoard,
  gtoBlindBattleCbet,
  gtoBlindBattleConnectedBoard,
  gtoAcePairedBoardStrategy,
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
  // 기타
  holdemHandRankings,
  holdemTournamentVsCashGame,

  // ── ms 신규 번역 레인 배열 칸 — 자기 칸 사이에만 ──
  // [ms-rank 배열 시작]
  // [ms-rank 배열 끝]

  // [ms-prob 배열 시작]
  // [ms-prob 배열 끝]

  // [ms-strat 배열 시작]
  // [ms-strat 배열 끝]

  // [ms-tour 배열 시작]
  // [ms-tour 배열 끝]

  // [ms-gloss 배열 시작]
  // [ms-gloss 배열 끝]
];

export function getMsPost(slug: string): Post | undefined {
  return MS_POSTS.find((p) => p.slug === slug);
}

const MS_SLUGS = new Set(MS_POSTS.map((p) => p.slug));

/** 해당 슬러그의 말레이어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasMsPost(slug: string): boolean {
  return MS_SLUGS.has(slug);
}
