import type { Post } from "../posts";
import { POST as holdemTournament } from "./holdem-tournament";
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as holdemProbability } from "./holdem-probability";
import { POST as holdemPotOdds } from "./holdem-pot-odds";
import { POST as holdemOuts } from "./holdem-outs";
import { POST as holdemDrawingOdds } from "./holdem-drawing-odds";
import { POST as holdemStraddle } from "./holdem-straddle";
import { POST as holdemRake } from "./holdem-rake";
import { POST as holdemFish } from "./holdem-fish";
import { POST as holdemCooler } from "./holdem-cooler";
import { POST as holdemBadBeat } from "./holdem-bad-beat";
import { POST as holdemGlossary } from "./holdem-glossary";
import { POST as holdemGameOrder } from "./holdem-game-order";
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemFlushVsStraight } from "./holdem-flush-vs-straight";
import { POST as holdemTiebreakRules } from "./holdem-tiebreak-rules";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemSplitPotRules } from "./holdem-split-pot-rules";
import { POST as holdemPositions } from "./holdem-positions";
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemStartingHandsChart } from "./holdem-starting-hands-chart";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";
import { POST as holdemReadingTheBoard } from "./holdem-reading-the-board";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemPositionPlay } from "./holdem-position-play";
import { POST as wptAustralia2026Guide } from "./wpt-australia-2026-guide";
import { POST as eptBarcelona2026Guide } from "./ept-barcelona-2026-guide";
import { POST as aptIncheon2026Guide } from "./apt-incheon-2026-guide";
import { POST as koreaPokerMarathon2026 } from "./korea-poker-marathon-2026";

/**
 * 영어(en) 블로그 포스트.
 * 한국어 원본을 기계 번역이 아닌 영어권 포커 문화에 맞게 현지화한 글만 등록한다.
 * 슬러그는 한국어 글과 동일하게 맞춰 hreflang 상호 링크가 성립하도록 한다.
 */
export const EN_POSTS: Post[] = [
  holdemGlossary,
  holdemBadBeat,
  holdemCooler,
  holdemFish,
  holdemRake,
  holdemStraddle,
  holdemDrawingOdds,
  holdemOuts,
  holdemPotOdds,
  holdemProbability,
  koreaPokerMarathon2026,
  aptIncheon2026Guide,
  holdemPositionPlay,
  wptAustralia2026Guide,
  eptBarcelona2026Guide,
  holdemTournament,
  texasHoldemRulesForBeginners,
  holdemHandRankings,
  holdemFlushVsStraight,
  holdemTiebreakRules,
  holdemGameOrder,
  holdemBlindMeaning,
  holdemSplitPotRules,
  holdemPositions,
  holdemTournamentVsCashGame,
  holdemBettingActions,
  holdemStartingHandsChart,
  holdemShowdownRules,
  holdemReadingTheBoard,
  holdemAllInRules,
];

export function getEnPost(slug: string): Post | undefined {
  return EN_POSTS.find((p) => p.slug === slug);
}

const EN_SLUGS = new Set(EN_POSTS.map((p) => p.slug));

/** 해당 슬러그의 영어 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasEnPost(slug: string): boolean {
  return EN_SLUGS.has(slug);
}
