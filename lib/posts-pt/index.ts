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
import { POST as holdemStrategy } from "./holdem-strategy";
import { POST as holdemPositions } from "./holdem-positions";
import { POST as holdemPositionPlay } from "./holdem-position-play";
import { POST as holdemStartingHandsChart } from "./holdem-starting-hands-chart";
import { POST as holdemLimping } from "./holdem-limping";
import { POST as holdem3bet } from "./holdem-3bet";
import { POST as holdemContinuationBet } from "./holdem-continuation-bet";
import { POST as holdemWhenToFold } from "./holdem-when-to-fold";
import { POST as holdemTournament } from "./holdem-tournament";
import { POST as holdemIcm } from "./holdem-icm";
import { POST as holdemBubble } from "./holdem-bubble";
import { POST as holdemShortStack } from "./holdem-short-stack";
import { POST as aptIncheon2026Guide } from "./apt-incheon-2026-guide";
import { POST as koreaPokerMarathon2026 } from "./korea-poker-marathon-2026";
import { POST as wptAustralia2026Guide } from "./wpt-australia-2026-guide";
import { POST as eptBarcelona2026Guide } from "./ept-barcelona-2026-guide";
import { POST as holdemGlossary } from "./holdem-glossary";
import { POST as holdemStraddle } from "./holdem-straddle";
import { POST as holdemRake } from "./holdem-rake";
import { POST as holdemFish } from "./holdem-fish";
import { POST as holdemCooler } from "./holdem-cooler";
import { POST as holdemBadBeat } from "./holdem-bad-beat";
import { POST as holdemCardCounting } from "./holdem-card-counting";
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";

/**
 * 포르투갈어(pt-BR) 블로그 포스트.
 * 기계 번역이 아닌 브라질 포커 커뮤니티 용어에 맞게 현지화한 글만 등록한다.
 * 슬러그는 다른 언어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const PT_POSTS: Post[] = [
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
  // Strategy 필라 (8/8)
  holdemStrategy,
  holdemPositions,
  holdemPositionPlay,
  holdemStartingHandsChart,
  holdemLimping,
  holdem3bet,
  holdemContinuationBet,
  holdemWhenToFold,
  // Tournament 필라 (8/8) — tournament-vs-cash-game는 아래 기존 항목
  holdemTournament,
  holdemIcm,
  holdemBubble,
  holdemShortStack,
  aptIncheon2026Guide,
  koreaPokerMarathon2026,
  wptAustralia2026Guide,
  eptBarcelona2026Guide,
  // Glossary 필라 (6/6)
  holdemGlossary,
  holdemStraddle,
  holdemRake,
  holdemFish,
  holdemCooler,
  holdemBadBeat,
  // 단독
  holdemCardCounting,
  // 기타
  holdemTournamentVsCashGame,
];

export function getPtPost(slug: string): Post | undefined {
  return PT_POSTS.find((p) => p.slug === slug);
}

const PT_SLUGS = new Set(PT_POSTS.map((p) => p.slug));

/** 해당 슬러그의 포르투갈어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasPtPost(slug: string): boolean {
  return PT_SLUGS.has(slug);
}
