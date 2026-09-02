import type { Post } from "../posts";
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemFlushVsStraight } from "./holdem-flush-vs-straight";
import { POST as holdemKicker } from "./holdem-kicker";
import { POST as holdemTiebreakRules } from "./holdem-tiebreak-rules";
import { POST as holdemSplitPotRules } from "./holdem-split-pot-rules";
import { POST as holdemReadingTheBoard } from "./holdem-reading-the-board";
import { POST as holdemProbability } from "./holdem-probability";
import { POST as holdemPotOdds } from "./holdem-pot-odds";
import { POST as holdemOuts } from "./holdem-outs";
import { POST as holdemDrawingOdds } from "./holdem-drawing-odds";
import { POST as holdemImpliedOdds } from "./holdem-implied-odds";
import { POST as holdemEquity } from "./holdem-equity";
import { POST as holdemCardCounting } from "./holdem-card-counting";
import { POST as holdemStrategy } from "./holdem-strategy";
import { POST as holdemPositions } from "./holdem-positions";
import { POST as holdemPositionPlay } from "./holdem-position-play";
import { POST as holdemStartingHandsChart } from "./holdem-starting-hands-chart";
import { POST as holdemLimping } from "./holdem-limping";
import { POST as holdem3bet } from "./holdem-3bet";
import { POST as holdemContinuationBet } from "./holdem-continuation-bet";
import { POST as holdemWhenToFold } from "./holdem-when-to-fold";
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";
import { POST as holdemIcm } from "./holdem-icm";
import { POST as holdemShortStack } from "./holdem-short-stack";
import { POST as holdemBubble } from "./holdem-bubble";
import { POST as holdemTournament } from "./holdem-tournament";
import { POST as wptAustralia2026Guide } from "./wpt-australia-2026-guide";
import { POST as aptIncheon2026Guide } from "./apt-incheon-2026-guide";
import { POST as wsop2026TournamentGuide } from "./wsop-2026-tournament-guide";
import { POST as eptBarcelona2026Guide } from "./ept-barcelona-2026-guide";
import { POST as koreaPokerMarathon2026 } from "./korea-poker-marathon-2026";
import { POST as holdemGlossary } from "./holdem-glossary";
import { POST as holdemStraddle } from "./holdem-straddle";
import { POST as holdemRake } from "./holdem-rake";
import { POST as holdemFish } from "./holdem-fish";
import { POST as holdemCooler } from "./holdem-cooler";
import { POST as holdemBadBeat } from "./holdem-bad-beat";
import { POST as japanPokerTournamentsGuide } from "./japan-poker-tournaments-guide";
import { POST as aHighBoardCbet } from "./a-high-board-cbet";
import { POST as kHighBoardCbet } from "./k-high-board-cbet";
import { POST as broadwayBoardStrategy } from "./broadway-board-strategy";
import { POST as donkBetStrategy } from "./donk-bet-strategy";
import { POST as monotoneBoardStrategy } from "./monotone-board-strategy";
import { POST as pairedBoardStrategy } from "./paired-board-strategy";
import { POST as lowBoardCheckRaise } from "./low-board-check-raise";
import { POST as threeBetPotCbet } from "./3bet-pot-cbet";
import { POST as threeBetPotBetSizing } from "./3bet-pot-bet-sizing";
import { POST as threeBetPotLowBoard } from "./3bet-pot-low-board";
import { POST as blindBattleCbet } from "./blind-battle-cbet";
import { POST as blindBattleConnectedBoard } from "./blind-battle-connected-board";
import { POST as acePairedBoardStrategy } from "./ace-paired-board-strategy";

/**
 * 일본어(ja) 블로그 포스트.
 * 기계 번역이 아닌 일본 포커 커뮤니티 용어에 맞게 현지화한 글만 등록한다.
 * 슬러그는 한국어/영어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const JA_POSTS: Post[] = [
  wsop2026TournamentGuide,
  // Rules 필라 (6/6)
  texasHoldemRulesForBeginners,
  holdemGameOrder,
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
  // Hand Rankings 필라 (6/6)
  holdemHandRankings,
  holdemFlushVsStraight,
  holdemKicker,
  holdemTiebreakRules,
  holdemSplitPotRules,
  holdemReadingTheBoard,
  // Odds & Math 필라 (6/6)
  holdemProbability,
  holdemPotOdds,
  holdemOuts,
  holdemDrawingOdds,
  holdemImpliedOdds,
  holdemEquity,
  holdemCardCounting,
  // Strategy 필라 (8/8)
  holdemStrategy,
  holdemPositions,
  holdemPositionPlay,
  holdemStartingHandsChart,
  holdemLimping,
  holdem3bet,
  holdemContinuationBet,
  holdemWhenToFold,
  // Tournament 필라
  holdemTournament,
  holdemTournamentVsCashGame,
  holdemIcm,
  holdemBubble,
  holdemShortStack,
  // Live Events
  // ★ ja 固有記事（EN マスターなし）— 国内3ツアーのハブ。2026-09-01 신설
  japanPokerTournamentsGuide,
  wptAustralia2026Guide,
  aptIncheon2026Guide,
  eptBarcelona2026Guide,
  koreaPokerMarathon2026,
  // Glossary 필라 (6/6)
  holdemGlossary,
  holdemStraddle,
  holdemRake,
  holdemFish,
  holdemCooler,
  holdemBadBeat,
  // GTO 솔버 시리즈 13편 (2026-09-02 · 번역+5필드 · 순서 = lib/gto-series.ts)
  aHighBoardCbet,
  kHighBoardCbet,
  broadwayBoardStrategy,
  donkBetStrategy,
  monotoneBoardStrategy,
  pairedBoardStrategy,
  lowBoardCheckRaise,
  threeBetPotCbet,
  threeBetPotBetSizing,
  threeBetPotLowBoard,
  blindBattleCbet,
  blindBattleConnectedBoard,
  acePairedBoardStrategy,
];

export function getJaPost(slug: string): Post | undefined {
  return JA_POSTS.find((p) => p.slug === slug);
}

const JA_SLUGS = new Set(JA_POSTS.map((p) => p.slug));

/** 해당 슬러그의 일본어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasJaPost(slug: string): boolean {
  return JA_SLUGS.has(slug);
}
