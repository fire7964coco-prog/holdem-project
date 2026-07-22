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
  // ★필라 9/9 완주. 다음: 클러스터(rules/odds/strategy/tournament/glossary 클러스터)
];

const ZH_HANT_SLUGS = new Set(ZH_HANT_POSTS.map((p) => p.slug));

/** 해당 슬러그의 번체 번역본이 존재하는지 (hreflang 상호 링크용) */
export function hasZhHantPost(slug: string): boolean {
  return ZH_HANT_SLUGS.has(slug);
}
