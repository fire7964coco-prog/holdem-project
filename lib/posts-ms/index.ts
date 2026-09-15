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
];

export function getMsPost(slug: string): Post | undefined {
  return MS_POSTS.find((p) => p.slug === slug);
}

const MS_SLUGS = new Set(MS_POSTS.map((p) => p.slug));

/** 해당 슬러그의 말레이어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasMsPost(slug: string): boolean {
  return MS_SLUGS.has(slug);
}
