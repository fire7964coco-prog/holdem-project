import type { Post } from "../posts";
import { POST as holdemHandRankings } from "./holdem-hand-rankings";
import { POST as texasHoldemRulesForBeginners } from "./texas-holdem-rules-for-beginners";
import { POST as holdemProbability } from "./holdem-probability";
import { POST as holdemStartingHandsChart } from "./holdem-starting-hands-chart";
import { POST as holdemPositionPlay } from "./holdem-position-play";
import { POST as holdemPotOdds } from "./holdem-pot-odds";
import { POST as holdemGlossary } from "./holdem-glossary";
import { POST as holdemStrategy } from "./holdem-strategy";
import { POST as holdemTournament } from "./holdem-tournament";
// Rules 클러스터
import { POST as holdemBettingActions } from "./holdem-betting-actions";
import { POST as holdemBlindMeaning } from "./holdem-blind-meaning";
import { POST as holdemAllInRules } from "./holdem-all-in-rules";
import { POST as holdemShowdownRules } from "./holdem-showdown-rules";
import { POST as holdemTiebreakRules } from "./holdem-tiebreak-rules";
import { POST as holdemKicker } from "./holdem-kicker";
import { POST as holdemSplitPotRules } from "./holdem-split-pot-rules";
// Odds/확률 클러스터
import { POST as holdemOuts } from "./holdem-outs";
import { POST as holdemDrawingOdds } from "./holdem-drawing-odds";
import { POST as holdemEquity } from "./holdem-equity";
import { POST as holdemImpliedOdds } from "./holdem-implied-odds";
import { POST as holdemReadingTheBoard } from "./holdem-reading-the-board";
import { POST as holdemFlushVsStraight } from "./holdem-flush-vs-straight";
// Strategy/전략 클러스터
import { POST as holdem3bet } from "./holdem-3bet";
import { POST as holdemContinuationBet } from "./holdem-continuation-bet";
import { POST as holdemLimping } from "./holdem-limping";
import { POST as holdemWhenToFold } from "./holdem-when-to-fold";
import { POST as holdemGameOrder } from "./holdem-game-order";
// Tournament/토너먼트 클러스터
import { POST as holdemTournamentVsCashGame } from "./holdem-tournament-vs-cash-game";
import { POST as holdemBubble } from "./holdem-bubble";
import { POST as holdemIcm } from "./holdem-icm";
import { POST as holdemShortStack } from "./holdem-short-stack";
// Glossary/용어·문화 클러스터
import { POST as holdemBadBeat } from "./holdem-bad-beat";
import { POST as holdemCooler } from "./holdem-cooler";
import { POST as holdemFish } from "./holdem-fish";
import { POST as holdemRake } from "./holdem-rake";
import { POST as holdemStraddle } from "./holdem-straddle";
import { POST as holdemCardCounting } from "./holdem-card-counting";

/**
 * 중국어 번체(zh-hant · 대만/홍콩) 블로그 포스트.
 * 간체(zh)와 별개 트랙 — 대만 실사용 용어(牌型大小·踢腳牌·葫蘆·詐唬)·번체 표기·현지 SERP 구조로 재저작한 글만 등록한다.
 * 슬러그는 EN/다른 언어와 동일하게 유지해 hreflang 상호 링크가 성립하게 한다.
 * 플랜·진행: docs/zh-hant-plan.md · 용어 브리프: docs/translation-terms-zh-hant.md
 */
export const ZH_HANT_POSTS: Post[] = [
  // Hand Rankings 필라
  holdemHandRankings,
  // Rules 필라
  texasHoldemRulesForBeginners,
  // Odds/확률 필라
  holdemProbability,
  // Strategy/스타팅핸드 필라
  holdemStartingHandsChart,
  // Strategy/포지션 필라
  holdemPositionPlay,
  // Odds/팟오즈 필라
  holdemPotOdds,
  // Glossary/술어 필라
  holdemGlossary,
  // Strategy/전략 로드맵 필라
  holdemStrategy,
  // Tournament/토너먼트 필라
  holdemTournament,
  // ── Rules 클러스터 (2026-07-22 배치) ──
  holdemBettingActions,
  holdemBlindMeaning,
  holdemAllInRules,
  holdemShowdownRules,
  holdemTiebreakRules,
  holdemKicker,
  holdemSplitPotRules,
  // ── Odds/확률 클러스터 (2026-07-23 배치) ──
  holdemOuts,
  holdemDrawingOdds,
  holdemEquity,
  holdemImpliedOdds,
  holdemReadingTheBoard,
  holdemFlushVsStraight,
  // ── Strategy/전략 클러스터 (2026-07-23 배치) ──
  holdem3bet,
  holdemContinuationBet,
  holdemLimping,
  holdemWhenToFold,
  holdemGameOrder,
  // ── Tournament/토너먼트 클러스터 (2026-07-23 배치) ──
  holdemTournamentVsCashGame,
  holdemBubble,
  holdemIcm,
  holdemShortStack,
  // ── Glossary/용어·문화 클러스터 (2026-07-23 배치, 마지막) ──
  holdemBadBeat,
  holdemCooler,
  holdemFish,
  holdemRake,
  holdemStraddle,
  holdemCardCounting,
];

const ZH_HANT_SLUGS = new Set(ZH_HANT_POSTS.map((p) => p.slug));

/** 해당 슬러그의 번체 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasZhHantPost(slug: string): boolean {
  return ZH_HANT_SLUGS.has(slug);
}
