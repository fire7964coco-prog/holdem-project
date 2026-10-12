"use client";

import { useState, useMemo, useEffect, useCallback, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import type { SupabaseClient } from "@supabase/supabase-js";
import { loginHref } from "@/lib/auth-navigation";
import {
  readQuizStore, recordQuizAnswer, finishQuizHands, clearQuizStore, newClientId,
  uploadQuizHands, fetchAccountTotals, pendingQuizTotals, addQuizTotals, EMPTY_TOTALS, type QuizTotals,
} from "@/lib/win-rate-quiz-records";
import { describeHand, handCategory, winnersAt, toDisplay, type Card as QuizCard, type HandNames } from "./_equity";
import {
  makeTableSim, positionAt, isFixed, POSITIONS_6, POSITIONS_9,
  type TableSim, type TableSize, type FixedDeal,
} from "./_table";
import type { NCard } from "./_ranges";
import {
  runHand, heroOuts, ruleOf24, SAMPLES, OPP_STYLES,
  type HandResult, type StreetRecord, type Action, type EquitySplit, type OppStyle,
} from "./_engine";
import type { HandMessage, HandRequest } from "./_engine.worker";
import { solverLinkFor, type SolverLinkInfo } from "./_solver-link";
import { KitCardFace, KitCardBack, KitCardSlot, KitDealer, KitChip } from "./_kit";

/**
 * 승률 시뮬레이터 — **실전 모드**. 한국어판·영어판이 공유한다.
 *
 * ★2026-08-05 개편. 사장님 요구를 그대로 옮긴 것:
 *   *"나는 끝까지 가서 결과를 보되, 프리플랍부터 단계별로 내 승률이 표시되고,
 *     나중에 '아 여기서 끊는 게 맞았네' 하고 복기하는 것."*
 *
 *   그래서 이 화면의 규칙은 딱 세 가지다.
 *   1. **상대 패는 안 보인다.** 실전과 같은 정보 상태여야 승률에 의미가 생긴다(클릭하면 볼 수 있다).
 *   2. **나는 폴드하지 않는다.** 폴드 버튼을 만들면 거기서 핸드가 끝나 복기를 못 한다.
 *      대신 마지막에 "여기서 끊었어야 했다"고 사후 평가한다.
 *   3. **상대는 규칙대로 움직인다.** 그 규칙은 화면에 그대로 적어 둔다(`ui.ruleText`).
 *      가정이지 권장 플레이가 아니다.
 *
 * ★확률 계산은 이 파일에 한 줄도 없다. `_engine.ts`(레인지·팟오즈) + `_equity.ts`(§13 평가기).
 */

// ── 색 = globals.css `.wrq` 토큰 (S-034 회차 5 · 2026-10-11) ──────────────────
// ★강조는 GOLD(내 승률·진행 버튼) 하나. 판정색은 놓이는 면에 따라 둘 — 다크(패널·펠트) = *_DARK,
//   크림(팟오즈·복기 표) = GOOD/BAD. 예전 #4ade80을 크림 위에 쓰면 대비가 1.6:1이었다.
// ★반투명은 `${GOLD}66`처럼 이어 붙이지 말고 mix()로 — GOLD가 rgb(var(...))라 이어 붙인 값은
//   CSS가 버린다(회차 4까지 펠트 테두리·결과 상자 테두리가 그렇게 안 보였다).
const GOLD = "var(--wrq-accent)";
const FELT = "var(--wrq-felt)";
const PANEL = "var(--wrq-panel)";
const PANEL_LINE = "var(--wrq-panel-line)";
const REVEAL = "var(--wrq-reveal)";
const MUTED = "var(--wrq-muted)";
const LIVE = "var(--wrq-live)";
const GOOD = "var(--wrq-good)";
const BAD = "var(--wrq-bad)";
const GOOD_DARK = "var(--wrq-good-on-dark)";
const BAD_DARK = "var(--wrq-bad-on-dark)";
/** 색 + 불투명도(0~100) */
const mix = (c: string, pct: number) => `color-mix(in srgb, ${c} ${pct}%, transparent)`;
/**
 * 꺾은선·좌석 승률 배지의 좌석 색 — 나 + 상대 5명(6인 팟까지).
 * ★어두운 패널 위 범주 팔레트 검증 통과(dataviz validate_palette: 밝기 띠·채도 ·
 *   인접 순서 색약 ΔE 최저 13.8 · 정상 시각 최저 26.2 · 회차 5 패널 #17231f로 재검증 같은 값 · 보라 대비 WARN).
 *   값은 globals.css `.wrq --wrq-seat-1~6`. 앞 4색 = 회차 2, 뒤 2색(청록·주황) = 회차 4(2~6명).
 *   «모든 쌍» 검사는 6색에서 통과하는 조합이 없다(후보 18색 전수) — 그래서 색만으로 구분하지 않는다:
 *   꺾은선은 범례 + 끝점 이름표, 배지는 좌석 이름 옆에 붙는다.
 *   색은 «상대 순서»(activeSlots 순)를 따른다 — 누가 폴드해도 남은 사람 색이 바뀌지 않는다.
 */
const SEAT_COLORS = [1, 2, 3, 4, 5, 6].map((n) => `var(--wrq-seat-${n})`);
/** 꺾은선의 «내 짐작» 점선 — 좌석이 아니라 중립색(좌석 팔레트와 겹치지 않게) */
const GUESS_COLOR = "var(--wrq-guess)";

// ── 퀴즈 모드 (S-034 ③ · 2026-10-11) ────────────────────────────────────────
/** 한 스트리트의 답 */
interface QuizAnswer {
  guess: number;
  /** 베팅이 없던 스트리트는 null */
  choice: "call" | "fold" | null;
  /** 정답 = 그 스트리트의 화면 승률(레인지 기준) */
  equity: number;
  err: number;
  points: number;
  /** 고른 콜/폴드가 팟오즈 판정과 맞았나 · 고를 게 없던 스트리트는 null */
  choiceOk: boolean | null;
}
/**
 * 짐작 1번의 점수 = 100 − 4 × 오차(%p), 0 아래는 0. 오차 25%p면 0점.
 * ★규칙 설명(ko·en ruleText)에 이 식을 그대로 적어 두었다 — 바꾸면 거기도 같이.
 */
const quizPoints = (err: number) => Math.max(0, Math.round(100 - 4 * err));
/** 퀴즈 모드 켜짐 기억(보는 사람 브라우저에만 · 실패해도 기본값 꺼짐) */
const QUIZ_KEY = "wrq-quiz-mode";
/** 상대 성향 기억(S-034 2차 ②) — 같은 방식 · 실패하면 기본 */
const STYLE_KEY = "wrq-opp-style";

export interface QuizUI {
  names: HandNames;
  /** 프리플랍 · 플랍 · 턴 · 리버 */
  streets: readonly [string, string, string, string];
  hero: string;
  folded: string;
  /** 액션 라벨 */
  raise: string;
  call: string;
  check: string;
  /** 앞 스트리트에 스택을 다 넣은 상대 — 더 액션하지 않는다(MA-491 통지 ①) */
  allIn: string;
  tableNote: string;
  /** 인원 버튼의 접근성 이름(«3명») — 버튼 글자는 숫자만 */
  playersBtn: (n: number) => string;
  /** 인원 버튼 묶음 앞 짧은 라벨(sm↑에서만 보인다) */
  playersLabel: string;
  /** 테이블 크기 버튼 — 6 · 9 (S-034 ②) */
  tableBtn: (size: number) => string;
  /** 상대 성향 고르기 (S-034 2차 ②) — 접근성 이름 + 성향 이름 */
  styleLabel: string;
  /** 성향 select의 title(마우스 올림) — 성향은 플랍부터의 규칙만 바꾼다(MA-491 통지 ③) */
  styleHint: string;
  styleNames: Record<OppStyle, string>;
  loading: string;
  /** 승률 카드 */
  myEquity: string;
  vsOpponents: (n: number) => string;
  /** 프리플랍 = 자리별 레인지 기준 · 플랍~ = 그 위에 액션까지 맞춘 레인지 기준 */
  basisSeat: string;
  basisRange: string;
  /** 프리플랍 좌석 표시 — 이 상대가 어떤 역할로 팟에 들어왔나(레인지 출처) */
  roleOpen: string;
  roleDefend: string;
  /** 승·무·패 분리 줄 (S-034 ④) — 짧은 라벨 */
  winShort: string;
  tieShort: string;
  loseShort: string;
  /** 상대 패를 공개했을 때 나란히 뜨는 "그 패들 상대 승률" */
  revealedLabel: string;
  /** 두 값의 차이(%p)를 받아 왜 다른지 한 줄로 설명 */
  revealedNote: (gapPct: string) => string;
  /** 팟오즈 박스 */
  potOddsTitle: string;
  potLabel: string;
  /** 팟오즈 박스의 팟 라벨 — 중앙 팟(potAfter)과 달리 베팅 전 값(potBefore)이라 구분해 부른다 */
  potBeforeLabel: string;
  toCallLabel: string;
  requiredLabel: string;
  noBet: string;
  /** 올인 뒤 스트리트 — 더 걸 칩이 없다(MA-495 ②ⓐ). river = 남은 카드 없음 */
  noBetAllIn: (river: boolean) => string;
  verdictCall: string;
  verdictFold: string;
  impliedNote: string;
  /** 진행 */
  revealBtn: (nextStreet: string) => string;
  newHandBtn: string;
  showCards: string;
  hideCards: string;
  /** 결과 */
  wonByFold: (pot: number) => string;
  splitLabel: (names: string[]) => string;
  winLabel: (name: string, category: string) => string;
  /** 복기 */
  reviewTitle: string;
  reviewCols: readonly [string, string, string, string];
  reviewNoMistake: string;
  reviewMistake: (street: string) => string;
  reviewInvested: (invested: number, pot: number) => string;
  /** 승률이 어떻게 나왔는지 보여주는 오른쪽 패널 */
  formulaTitle: string;
  outsLabel: (n: number) => string;
  /** 종류별 장수 + both(종류 합계 − 총계 = 두 종류에 겹치는 카드) — 합계와 총계가 달라 보이는 걸 설명한다 */
  outsBreak: (o: { flush: number; straight: number; set: number; twoPair: number; over: number }, both: number) => string;
  hitLabel: string;
  winLabel2: string;
  /** "9 × 4 − 1" 같은 식 */
  formulaExpr: (outs: number, toCome: number) => string;
  formulaCaveat: string;
  /**
   * 드로우가 없을 때의 대체 설명. 프리플랍은 기준이 "무작위"고 플랍부터는 "액션 일치 레인지"라
   * basis를 받아 문장을 갈라야 한다 — 표본도 적응형(min~max)이라 고정 숫자를 박으면 안 된다
   * (2026-08-05 검수 판정 #1).
   */
  noDrawNote: (basis: "seat" | "range", samples: string) => string;
  /** 아웃츠 칸 대체 설명 — 전원 폴드(계산 없이 100) · 리버(올 카드 없음)는 noDrawNote 대신 (MA-495 ②ⓒ) */
  foldWinNote: string;
  riverNote: string;
  /** 결과 화면 꺾은선 (S-034 ④) */
  chartTitle: string;
  /** 점선 = 상대 패를 모를 때 화면에 보였던 내 승률 */
  chartRangeLegend: string;
  /** 실선 = 패를 다 깠을 때 좌석별 승률 · 폴드한 사람은 거기서 선이 끝난다 */
  chartNote: string;
  /** 퀴즈 모드 (S-034 ③) — 켜면 스트리트마다 승률을 먼저 짐작하고(콜/폴드도 고르고) 정답을 본다 */
  quizToggle: string;
  quizGuessTitle: string;
  quizGuessHint: string;
  /** 베팅이 없는 스트리트 — 짐작만 내고 확인 */
  quizSubmit: string;
  /** 베팅이 있는 스트리트 — 콜/폴드를 고르는 순간 짐작과 같이 제출 */
  quizCallSubmit: string;
  quizFoldSubmit: string;
  /** 정답 공개 뒤 한 줄 — 짐작·오차·점수 */
  quizResult: (guess: number, err: string, points: number) => string;
  /** 고른 콜/폴드가 팟오즈 판정과 맞았나 */
  quizChoiceResult: (ok: boolean, verdict: string) => string;
  /** 누적 한 줄 — 로그인 안 함 = 이 브라우저 기록 · 로그인 = 계정 기록(+ 아직 올리지 않은 판) */
  quizStats: (s: { hands: number; avgErr: string; hits: number; decisions: number; points: number }) => string;
  /** 이 브라우저 기록 지우기(로그인 안 했을 때만 보인다 — 계정 기록 지우기는 «내 기록») */
  quizReset: string;
  quizResetConfirm: string;
  /** 권유 한 줄(«내 기록» 설계 §2-2) — 누적 1판 이상 + 로그인 안 함일 때만 */
  quizInvite: string;
  quizInviteLink: string;
  /** 복기 표에 붙는 두 열 */
  quizGuessCol: string;
  quizChoiceCol: string;
  /** 복기 아래 이번 판 요약 */
  quizHandSummary: (avgErr: string, hits: number, decisions: number, points: number) => string;
  /** 꺾은선의 «내 짐작» 선 */
  quizGuessLegend: string;
  /**
   * 직접 입력 (S-034 2차 ① · 2026-10-12) — 내 자리·내 패·보드를 골라 «겪은 그 판»을 재현한다.
   * 상대 패는 입력받지 않는다(늘 자리별 레인지). 직접 입력한 판은 퀴즈 기록에 넣지 않는다.
   */
  customToggle: string;
  customTitle: string;
  customHint: string;
  customPos: string;
  customRandom: string;
  customHero: string;
  customBoard: string;
  /** 보드 칸 이름 — 플랍 3 · 턴 · 리버 (빈 칸 안에 작게) */
  customBoardSlots: readonly [string, string, string, string, string];
  customStart: string;
  customClear: string;
  customClose: string;
  /** 직접 입력을 끄고 무작위 판으로 */
  customOff: string;
  /** 직접 입력한 판을 돌리는 중 — 테이블 위 한 줄 */
  customActive: string;
  customEdit: string;
  /** 판이 끝난 뒤 결과 아래 탭 3개 — 복기 · 승률 흐름(꺾은선) · 마지막 스트리트(승률·팟오즈·산출 근거) */
  resultTabs: readonly [string, string, string];
  /**
   * 결과 화면 솔버 링크 (S-034 2차 ⑥ · 2026-10-12) — 같은 자리·플랍을 솔버 «플랍 조회»로 연다.
   * 솔버 자료는 6맥스 1대1 팟뿐이라 그 밖의 판은 이유를 한 줄로 밝힌다(`_solver-link.ts`).
   */
  solverTitle: string;
  solverOpen: string;
  solverNote: (info: SolverLinkInfo) => string;
  /** 솔버 앱 언어(?lang=) */
  solverLang: string;
  /** 규칙·단서 */
  ruleTitle: string;
  /** 고른 성향의 규칙을 그 자리에 적는다 */
  ruleText: (style: OppStyle) => ReactNode;
  footer: ReactNode;
}

// ── 카드 (회차 5: kit-v1 SVG · `_kit.tsx`) ──────────────────────────────────
type CardSize = "hero" | "seat" | "fold";
/**
 * ★모바일에서 한 치수 작다 (2026-08-05).
 *   모바일은 위아래로 쌓이는 배치라 **세로가 비싸다.** 카드를 한 단계 줄이면 좌석 줄 높이가
 *   내려가 테이블 전체가 짧아지고, 핵심 루프(테이블→승률→팟오즈→버튼)가 첫 화면에 들어온다.
 *   숫자로 크기를 넘기면 화면별로 바꿀 수 없어 **클래스로 뺐다.**
 */
const CARD_BOX: Record<CardSize, string> = {
  hero: "w-[38px] h-[54px] lg:w-[44px] lg:h-[62px]",
  seat: "w-[30px] h-[42px] lg:w-[34px] lg:h-[48px]",
  fold: "w-[24px] h-[34px] lg:w-[26px] lg:h-[36px]",
};

/**
 * slot = 빈 자리(아직 안 깐 보드 · 폴드한 좌석) — 테두리만. 회차 4까지는 빨간 뒷면 5장이 테이블
 * 가운데를 차지하고 폴드 좌석 뒷면까지 시선을 끌었다(S-034 ⑥ 캡처 지적).
 */
function PlayingCard({ card, hidden, slot, size = "seat" }: { card?: QuizCard; hidden?: boolean; slot?: boolean; size?: CardSize }) {
  if (slot) return <div className={`${CARD_BOX[size]} shrink-0`}><KitCardSlot /></div>;
  if (hidden || !card) {
    return (
      <div className={`${CARD_BOX[size]} shrink-0`} style={{ filter: "drop-shadow(0 2px 4px var(--wrq-shade))" }}>
        <KitCardBack />
      </div>
    );
  }
  return (
    <motion.div className={`${CARD_BOX[size]} shrink-0`}
      initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} transition={{ duration: 0.26 }}
      style={{ filter: "drop-shadow(0 2px 4px var(--wrq-shade))" }}>
      <KitCardFace card={card} />
    </motion.div>
  );
}

function PosBadge({ pos, color, glow }: { pos: string; color: string; glow: boolean }) {
  return (
    <div style={{
      minWidth: 30, height: 24, padding: "0 5px", borderRadius: 12, background: "var(--wrq-shade)",
      border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center",
      color, fontWeight: 900, fontSize: 10, letterSpacing: "-0.3px", flexShrink: 0,
      boxShadow: glow ? `0 0 12px ${color}` : "none",
    }}>{pos}</div>
  );
}

/** 딜러 버튼 = kit-v1 ui/dealer.svg */
const DealerChip = () => <KitDealer size={18} />;

/** 승·무·패 한 줄 — 무승부가 0.05% 미만이면 빼서 줄을 짧게 둔다 */
function WinTieLose({ split, ui, className }: { split: EquitySplit; ui: QuizUI; className?: string }) {
  return (
    <span className={`text-[10.5px] text-white/55 tabular-nums whitespace-nowrap ${className ?? ""}`}>
      {ui.winShort} {split.win.toFixed(1)}%
      {split.tie >= 0.05 && <> · {ui.tieShort} {split.tie.toFixed(1)}%</>}
      {" · "}{ui.loseShort} {split.lose.toFixed(1)}%
    </span>
  );
}

// ── 스트리트별 승률 꺾은선 (S-034 ④) ─────────────────────────────────────────
interface ChartSeries {
  key: string;
  name: string;
  color: string;
  dashed?: boolean;
  /** 스트리트 0~3 값 · undefined = 그 스트리트엔 없음(폴드했거나 판이 끝남) */
  values: (number | undefined)[];
}

/**
 * 실선 = 패를 다 깠을 때 좌석별 승률(공개 승률) · 금색 점선 = 상대 패를 모를 때 화면에 보였던 내 승률.
 * ★두 선의 간격이 곧 «모르고 판단한 숫자 vs 실제»다 — 리버에서 실선은 100/0(또는 동점 몫)으로 끝난다.
 * ★축은 하나(0~100%) · 범례 + 끝점 직접 라벨 + 열 단위 호버(터치도 같은 동작).
 */
function EquityChart({ series, streets, ui }: { series: ChartSeries[]; streets: readonly string[]; ui: QuizUI }) {
  const [hover, setHover] = useState<number | null>(null);
  const W = 320, H = 168, L = 30, R = 46, T = 10, B = 22;
  const x = (i: number) => L + (i * (W - L - R)) / 3;
  const y = (v: number) => T + ((100 - v) * (H - T - B)) / 100;

  // 끝점 라벨 — 마지막 값 기준, 11px보다 가까우면 아래로 밀어 겹치지 않게.
  // ★같은 스트리트에서 같은 글자(«0%»)로 끝나는 선은 라벨 하나만 — 6인 팟(S-034 회차 4)에서 리버 «0%»가
  //   다섯 줄 쌓여 이름 없는 숫자 탑이 됐다. 누가 몇 %인지는 아래 범례가 말한다.
  const seenEnd = new Set<string>();
  const ends = series
    .map((s) => {
      let last = -1;
      s.values.forEach((v, i) => { if (v !== undefined) last = i; });
      return last < 0 ? null : { s, i: last, v: s.values[last]!, ly: y(s.values[last]!) };
    })
    .filter((e): e is NonNullable<typeof e> => !!e)
    .filter((e) => {
      const k = `${e.i}:${badgePct(e.v)}`;
      if (seenEnd.has(k)) return false;
      seenEnd.add(k);
      return true;
    })
    .sort((a, b) => a.ly - b.ly);
  for (let i = 1; i < ends.length; i++) if (ends[i].ly - ends[i - 1].ly < 11) ends[i].ly = ends[i - 1].ly + 11;
  // 아래로 밀다가 0% 선 밑(가로축 글자 자리)으로 나가면 바닥부터 위로 되민다
  const floor = y(0);
  if (ends.length && ends[ends.length - 1].ly > floor) {
    ends[ends.length - 1].ly = floor;
    for (let i = ends.length - 2; i >= 0; i--) if (ends[i + 1].ly - ends[i].ly < 11) ends[i].ly = ends[i + 1].ly - 11;
  }
  /** 읽는 스트리트 — 호버가 없으면 마지막 스트리트 */
  const lastIdx = Math.max(...series.map((s) => s.values.reduce((a: number, v, i) => (v === undefined ? a : i), 0)));
  const shown = hover ?? lastIdx;

  const pick = (clientX: number, el: SVGSVGElement) => {
    const r = el.getBoundingClientRect();
    const px = ((clientX - r.left) / r.width) * W;
    let best = 0;
    for (let i = 1; i < 4; i++) if (Math.abs(x(i) - px) < Math.abs(x(best) - px)) best = i;
    setHover(best);
  };

  return (
    <div className="rounded-xl px-3 pt-3 pb-2.5 mb-3" style={{ background: PANEL, border: `1px solid ${PANEL_LINE}` }}>
      <div className="text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1">{ui.chartTitle}</div>
      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto select-none touch-pan-y" role="img" aria-label={ui.chartTitle}
          onPointerMove={(e) => pick(e.clientX, e.currentTarget)} onPointerDown={(e) => pick(e.clientX, e.currentTarget)}
          onPointerLeave={() => setHover(null)}>
          {[0, 25, 50, 75, 100].map((v) => (
            <g key={v}>
              <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
              <text x={L - 5} y={y(v) + 3} textAnchor="end" fontSize={9} fill="rgba(255,255,255,0.4)">{v}%</text>
            </g>
          ))}
          {streets.map((s, i) => (
            <text key={i} x={x(i)} y={H - 6} textAnchor="middle" fontSize={9.5}
              fill={shown === i ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)"}>{s}</text>
          ))}
          {hover !== null && <line x1={x(hover)} x2={x(hover)} y1={T} y2={H - B} stroke="rgba(255,255,255,0.25)" strokeWidth={1} />}
          {series.map((s) => {
            const pts = s.values.map((v, i) => (v === undefined ? null : `${x(i)},${y(v)}`)).filter(Boolean);
            return (
              <g key={s.key}>
                <polyline points={pts.join(" ")} fill="none" style={{ stroke: s.color }} strokeWidth={s.dashed ? 1.5 : 2}
                  strokeDasharray={s.dashed ? "4 3" : undefined} strokeLinejoin="round" strokeLinecap="round" />
                {s.values.map((v, i) => v === undefined ? null : (
                  <circle key={i} cx={x(i)} cy={y(v)} r={s.dashed ? 2.5 : 4} strokeWidth={s.dashed ? 1.5 : 2}
                    style={{ fill: s.dashed ? PANEL : s.color, stroke: s.dashed ? s.color : PANEL }} />
                ))}
              </g>
            );
          })}
          {ends.map((e) => (
            <text key={e.s.key} x={x(e.i) + 7} y={e.ly + 3} fontSize={9.5} fontWeight={700} fill="rgba(255,255,255,0.8)">
              {badgePct(e.v)}
            </text>
          ))}
        </svg>
      </div>
      {/* 범례 겸 읽기 줄 — 떠 있는 툴팁은 좁은 칸에서 잘려서(데스크톱 316px) 차트 아래 고정 줄로 읽는다.
          누른/가리킨 스트리트의 값 · 아무것도 안 가리키면 마지막 스트리트. 이름을 같이 둬 색만으로 구분하지 않는다 */}
      <div className="text-[10px] font-bold text-white/55 mt-1 mb-0.5">{streets[shown]}</div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10.5px] text-white/70 tabular-nums">
        {series.map((s) => (
          <span key={s.key} className="inline-flex items-center gap-1.5 min-w-0">
            <svg width="16" height="6" aria-hidden className="shrink-0"><line x1="0" x2="16" y1="3" y2="3" style={{ stroke: s.color }} strokeWidth={2}
              strokeDasharray={s.dashed ? "4 3" : undefined} /></svg>
            <span className="truncate">{s.name}</span>
            <b className="ml-auto text-white">{s.values[shown] === undefined ? "—" : `${s.values[shown]!.toFixed(1)}%`}</b>
          </span>
        ))}
      </div>
      <p className="text-[10px] text-white/40 mt-1.5 leading-snug">{ui.chartNote}</p>
    </div>
  );
}

/** 배지용 정수 % — 0.4%를 «0%», 99.6%를 «100%»로 반올림하면 «이미 끝난 판»처럼 읽힌다 */
function badgePct(x: number): string {
  if (x > 0 && x < 1) return "<1%";
  if (x > 99 && x < 100) return ">99%";
  return `${Math.round(x)}%`;
}

// ── 좌석 ────────────────────────────────────────────────────────────────────
function Seat({ pos, isBtn, isHero, heroWord, cards, faceDown, folded, isWinner, color, label, isDead, statusText, statusColor, eq, eqColor, compact }: {
  pos: string; isBtn: boolean; isHero: boolean; heroWord: string;
  /** 9인 테이블 — 좌석 최소 폭·패 이름 폭을 줄인다(폰 한 줄 4석) */
  compact?: boolean;
  cards?: QuizCard[]; faceDown?: boolean; folded?: boolean; isWinner?: boolean;
  color: string; label?: string; isDead?: boolean; statusText?: string; statusColor?: string;
  /** 패를 깠을 때 이 좌석의 승률 % — 방송 화면 방식 배지(S-034 ④) */
  eq?: number; eqColor?: string;
}) {
  const size: CardSize = folded ? "fold" : isHero ? "hero" : "seat";
  return (
    <div className="flex flex-col items-center gap-1"
      style={{ minWidth: compact ? (folded ? 50 : isHero ? 80 : 62) : folded ? 62 : isHero ? 100 : 80, opacity: folded ? 0.55 : 1 }}>
      <div className="flex items-center gap-1">
        <PosBadge pos={pos} color={color} glow={!!isWinner} />
        {isBtn && <DealerChip />}
        {isHero && <span className="text-[10px] font-black" style={{ color }}>{heroWord}</span>}
        {isWinner && <span className="text-[10px]">🏆</span>}
      </div>
      <div className="flex gap-1">
        {folded
          ? [0, 1].map((i) => <PlayingCard key={i} slot size="fold" />)
          : (cards ?? []).map((c, i) => <PlayingCard key={i} card={c} hidden={faceDown} size={size} />)}
      </div>
      <div className="h-4 flex items-center gap-1">
        {statusText && (
          <span className="text-[9.5px] font-bold" style={{ color: statusColor ?? MUTED }}>{statusText}</span>
        )}
        {eq !== undefined && (
          <span className="text-[10px] font-black tabular-nums leading-none rounded px-1 py-[2px] text-white"
            style={{ background: "var(--wrq-shade)", borderLeft: `3px solid ${eqColor ?? color}` }}>
            {badgePct(eq)}
          </span>
        )}
      </div>
      {label && (
        <div className="text-[8.5px] font-semibold leading-tight text-center px-0.5"
          style={{ color: isDead ? BAD_DARK : "rgba(255,255,255,0.72)", maxWidth: compact ? (isHero ? 84 : 64) : isHero ? 108 : 86 }}>
          {label}
        </div>
      )}
    </div>
  );
}

// ── 직접 입력 (S-034 2차 ①) ─────────────────────────────────────────────────
const EMPTY_DEAL: FixedDeal = { heroPos: null, hero: [null, null], board: [null, null, null, null, null] };
/** 카드 고르기 판 — 무늬 줄 × 숫자 칸(A부터) */
const PICK_RANKS = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
const PICK_SUITS = [0, 1, 2, 3];
const cardKey = (c: NCard) => c[0] * 4 + c[1];

/** 테이블 크기를 바꾸면 자리 번호의 뜻이 달라진다(6인 3 = BTN · 9인 3 = LJ) — 이름으로 옮기고 없으면 무작위 */
function moveHeroPos(f: FixedDeal, from: TableSize, to: TableSize): FixedDeal {
  if (f.heroPos === null || from === to) return f;
  const name = (from === 9 ? POSITIONS_9 : POSITIONS_6)[f.heroPos];
  const i = (to === 9 ? POSITIONS_9 : POSITIONS_6).indexOf(name as never);
  return { ...f, heroPos: i < 0 ? null : i };
}

function CustomEditor({ ui, size, draft, setDraft, onStart, onClose, onOff }: {
  ui: QuizUI; size: TableSize; draft: FixedDeal; setDraft: (f: FixedDeal) => void;
  onStart: () => void; onClose: () => void; onOff: (() => void) | null;
}) {
  /** 지금 채울 칸 — 0·1 = 내 패 · 2~6 = 보드 */
  const [active, setActive] = useState(0);
  const slots = [...draft.hero, ...draft.board];
  const used = new Set(slots.filter((c): c is NCard => !!c).map(cardKey));
  const put = (c: NCard | null) => {
    const next = slots.slice();
    next[active] = c;
    setDraft({ ...draft, hero: next.slice(0, 2), board: next.slice(2) });
    // 다음 빈 칸으로(뒤쪽 먼저, 없으면 앞쪽) — 카드만 연달아 누르면 내 패 → 플랍 → 턴 → 리버 순으로 찬다
    if (c) {
      const order = [...Array(7).keys()].map((k) => (active + 1 + k) % 7);
      const nextEmpty = order.find((k) => !next[k]);
      if (nextEmpty !== undefined) setActive(nextEmpty);
    }
  };
  const positions = size === 9 ? POSITIONS_9 : POSITIONS_6;
  const slotBtn = (i: number, label: string) => {
    const c = slots[i];
    const on = active === i;
    const d = c ? toDisplay(c) : null;
    return (
      <button key={i} type="button" onClick={() => (on && c ? put(null) : setActive(i))}
        aria-pressed={on} aria-label={d ? `${label} ${d.rank}${d.suit}` : label}
        className="w-[34px] h-[48px] shrink-0 rounded-[5px] relative"
        style={{ outline: on ? `2px solid ${GOLD}` : "none", outlineOffset: 2 }}>
        {d ? <KitCardFace card={d} />
          : <span className="absolute inset-0 rounded-[5px] border border-dashed flex items-center justify-center text-[9px] font-bold text-white/45"
              style={{ borderColor: on ? GOLD : "rgba(255,255,255,0.3)" }}>{label}</span>}
      </button>
    );
  };
  const segBtn = (on: boolean) => on
    ? { background: GOLD, color: "var(--wrq-accent-ink)", borderColor: GOLD }
    : { color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.2)" };
  return (
    <div className="rounded-2xl px-3 py-3 mb-3 lg:max-w-[560px] lg:mx-auto" style={{ background: PANEL, border: `1px solid ${PANEL_LINE}` }}>
      <div className="font-black text-sm text-white">✍️ {ui.customTitle}</div>
      <p className="text-[11px] text-white/55 leading-snug mt-0.5 mb-2.5">{ui.customHint}</p>

      <div className="text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1">{ui.customPos}</div>
      <div className="flex flex-wrap gap-1 mb-3" role="group" aria-label={ui.customPos}>
        <button type="button" onClick={() => setDraft({ ...draft, heroPos: null })} aria-pressed={draft.heroPos === null}
          className="px-2 py-1 rounded-full text-[11.5px] font-bold border" style={segBtn(draft.heroPos === null)}>{ui.customRandom}</button>
        {positions.map((name, i) => (
          <button key={name} type="button" onClick={() => setDraft({ ...draft, heroPos: i })} aria-pressed={draft.heroPos === i}
            className="px-2 py-1 rounded-full text-[11.5px] font-bold border tabular-nums" style={segBtn(draft.heroPos === i)}>{name}</button>
        ))}
      </div>

      <div className="flex items-end gap-3 mb-3">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1">{ui.customHero}</div>
          <div className="flex gap-1">{slotBtn(0, "?")}{slotBtn(1, "?")}</div>
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1">{ui.customBoard}</div>
          <div className="flex gap-1">
            {[2, 3, 4].map((i) => slotBtn(i, ui.customBoardSlots[i - 2]))}
            <span className="w-1" aria-hidden />
            {slotBtn(5, ui.customBoardSlots[3])}{slotBtn(6, ui.customBoardSlots[4])}
          </div>
        </div>
      </div>

      {/* 카드 52장 — 이미 쓴 카드는 흐리게. 누르면 금테 칸에 들어간다 */}
      <div className="grid gap-[3px]" style={{ gridTemplateColumns: "repeat(13, minmax(0, 1fr))" }}>
        {PICK_SUITS.map((su) => PICK_RANKS.map((r) => {
          const c: NCard = [r, su];
          const d = toDisplay(c);
          const taken = used.has(cardKey(c));
          return (
            <button key={`${r}-${su}`} type="button" disabled={taken} onClick={() => put(c)}
              aria-label={`${d.rank}${d.suit}`}
              className="h-[34px] rounded-[4px] flex flex-col items-center justify-center leading-none font-black disabled:opacity-20 active:scale-95"
              style={{ background: "var(--wrq-card-paper)", color: su === 1 || su === 2 ? "var(--wrq-card-red)" : "var(--wrq-card-black)" }}>
              <span className={d.rank === "10" ? "text-[10px] tracking-[-0.06em]" : "text-[11.5px]"}>{d.rank}</span>
              <span className="text-[10px] mt-[1px]">{d.suit}</span>
            </button>
          );
        }))}
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-3">
        <button type="button" onClick={onStart}
          className="flex-1 min-w-[150px] py-3 rounded-xl font-black text-sm text-black transition-all hover:brightness-110 active:scale-[0.98]"
          style={{ background: GOLD }}>{ui.customStart}</button>
        <button type="button" onClick={() => { setDraft(EMPTY_DEAL); setActive(0); }}
          className="px-3 py-3 rounded-xl text-xs font-bold border text-white/70" style={{ borderColor: "rgba(255,255,255,0.2)" }}>{ui.customClear}</button>
        <button type="button" onClick={onClose}
          className="px-3 py-3 rounded-xl text-xs font-bold border text-white/70" style={{ borderColor: "rgba(255,255,255,0.2)" }}>{ui.customClose}</button>
      </div>
      {onOff && (
        <button type="button" onClick={onOff} className="w-full mt-2 text-[11px] font-bold underline text-white/55">{ui.customOff}</button>
      )}
    </div>
  );
}

// ── 본체 ────────────────────────────────────────────────────────────────────
export default function WinRateSimulator({ ui }: { ui: QuizUI }) {
  const [preflopCount, setPreflopCount] = useState(3);
  /** 6인 · 9인 테이블 (S-034 ② · 2026-10-11) — 프리플랍 인원 2~6명은 두 테이블 모두 같다 */
  const [tableSize, setTableSize] = useState<TableSize>(6);
  /** 상대 성향 (S-034 2차 ②) — 테이블 전원 같은 성향 · 바꾸면 새 판 */
  const [style, setStyle] = useState<OppStyle>("standard");
  /** 새 판을 돌리는 트리거 — `sim`을 의존성으로 쓰면 계산이 스스로 취소된다(아래 effect 주석) */
  const [handId, setHandId] = useState(0);
  const [sim, setSim] = useState<TableSim | null>(null);
  /** 계산이 끝난 스트리트들 (진행 중에는 일부만 차 있다) */
  const [streets, setStreets] = useState<StreetRecord[]>([]);
  /** 전부 끝났을 때만 채워진다 — 복기·쇼다운은 이게 있어야 한다 */
  const [result, setResult] = useState<HandResult | null>(null);
  const [street, setStreet] = useState(0);
  const [reveal, setReveal] = useState(false);
  const [showRule, setShowRule] = useState(false);
  /** 결과 화면 탭 — 패널을 아래로 쌓지 않고 한 번에 하나만 보여 준다(사장님 10-11 «스크롤만 계속») */
  const [resultTab, setResultTab] = useState<"review" | "chart" | "street">("review");
  /**
   * 퀴즈 모드 (S-034 ③) — 기본은 꺼짐(지금의 «끝까지 보고 복기» 흐름 그대로).
   * 켜면 스트리트마다 승률·판정을 가린 채 짐작을 먼저 받는다. 답은 판마다(answers).
   * 누적은 «내 기록» 회차 C(2026-10-11)부터 이 브라우저에 계속 남고, 로그인하면 계정에도 올라간다
   * (`lib/win-rate-quiz-records.ts` · 설계 docs/my-records-design.md §3-2).
   */
  const [quiz, setQuiz] = useState(false);
  /** 직접 입력 — 적용된 값(custom)과 편집 중인 값(draft)을 나눈다. 닫기 = draft 버림 */
  const [custom, setCustom] = useState<FixedDeal | null>(null);
  const [draft, setDraft] = useState<FixedDeal>(EMPTY_DEAL);
  const [editing, setEditing] = useState(false);
  const [guess, setGuess] = useState(50);
  const [answers, setAnswers] = useState<Record<number, QuizAnswer>>({});
  /** 브라우저 기록(합계 + 아직 올리지 않은 판) — 첫 렌더는 빈 값(하이드레이션) · effect에서 읽는다 */
  const [store, setStore] = useState(() => ({ totals: null as QuizTotals | null, pending: null as QuizTotals | null }));
  /** 로그인 상태 — 확인 전 "checking" */
  const [auth, setAuth] = useState<"checking" | "in" | "out">("checking");
  /** 계정에 올라간 합계 — 읽기 실패면 null(그때는 브라우저 합계를 보여 준다) */
  const [account, setAccount] = useState<QuizTotals | null>(null);
  const sbRef = useRef<{ sb: SupabaseClient; uid: string } | null>(null);
  /** 지금 판의 기록 열쇠(client_id) — 첫 짐작 때 만든다 */
  const handKey = useRef<string | null>(null);
  const syncing = useRef<Promise<void> | null>(null);
  const pathname = usePathname();
  const applyStore = useCallback((s: ReturnType<typeof readQuizStore>) => {
    setStore({ totals: s.totals, pending: pendingQuizTotals(s) });
  }, []);

  /** 끝난 판을 계정에 올린다 — 로그인했을 때만 · 겹쳐 부르면 앞 작업이 끝난 뒤 한 번 더 */
  const sync = useCallback(async () => {
    const ctx = sbRef.current;
    if (!ctx) return;
    while (syncing.current) await syncing.current;
    const run = (async () => {
      const added = await uploadQuizHands(ctx.sb, ctx.uid).catch(() => null);
      if (added && added.hands) setAccount((a) => (a ? addQuizTotals(a, added) : a));
      applyStore(readQuizStore());
    })();
    syncing.current = run;
    try { await run; } finally { if (syncing.current === run) syncing.current = null; }
  }, [applyStore]);

  // 페이지를 열면: 지난 방문에 진행 중이던 판을 «끝남»으로 · 로그인했으면 쌓인 판을 올리고 계정 합계를 읽는다
  useEffect(() => {
    let alive = true;
    applyStore(finishQuizHands());
    (async () => {
      try {
        const { createClient } = await import("@/lib/supabase/client");
        const sb = createClient();
        const { data } = await sb.auth.getSession();
        const uid = data.session?.user.id;
        if (!alive) return;
        if (!uid) { setAuth("out"); return; }
        sbRef.current = { sb, uid };
        setAuth("in");
        await sync();
        const t = await fetchAccountTotals(sb, uid);
        if (alive && t) setAccount(t);
      } catch {
        if (alive) setAuth("out");
      }
    })();
    return () => { alive = false; };
  }, [applyStore, sync]);

  /** 지금 판을 닫는다(끝났거나 새 판으로 넘어감) — 짐작이 하나라도 있었으면 올린다 */
  const closeHand = useCallback(() => {
    const key = handKey.current;
    handKey.current = null;
    if (!key) return;
    applyStore(finishQuizHands(key));
    void sync();
  }, [applyStore, sync]);
  useEffect(() => () => { if (handKey.current) finishQuizHands(handKey.current); }, []);
  // 켜짐 기억은 effect에서 읽는다 — 첫 렌더에서 읽으면 서버 렌더(꺼짐)와 갈려 하이드레이션이 깨진다
  useEffect(() => {
    try { if (localStorage.getItem(QUIZ_KEY) === "1") setQuiz(true); } catch { /* 저장소 막힘 = 꺼짐 */ }
    try {
      const s = localStorage.getItem(STYLE_KEY) as OppStyle | null;
      if (s && OPP_STYLES.includes(s)) setStyle(s);
    } catch { /* 저장소 막힘 = 기본 */ }
  }, []);
  const toggleQuiz = useCallback(() => {
    setQuiz((q) => {
      try { localStorage.setItem(QUIZ_KEY, q ? "0" : "1"); } catch { /* 기억만 못 할 뿐 */ }
      return !q;
    });
  }, []);

  /**
   * ★계산은 스트리트 단위로 흘려보낸다 — 프리플랍이 나오는 즉시 화면에 뿌리고 나머지를 이어서 계산한다.
   *   S-034 회차 2 (2026-10-11)부터 **웹 워커**에서 돈다. 그 전엔 메인 스레드에서 25ms씩 쪼개고
   *   700ms 예산을 넘기면 표본을 줄였다(기기마다 숫자가 달랐다). 워커는 화면을 얼리지 않으므로
   *   표본·시드를 고정했다(`_engine.ts` SAMPLES · mulberry32).
   *   판마다 워커를 새로 띄우고 정리 때 terminate한다 — 판을 빨리 넘기면 이전 계산이 즉시 멈춘다.
   *   워커가 없는 환경이면 같은 runHand를 메인 스레드에서 돌린다(결과는 시드가 같아 동일).
   *
   * 🔴 **`sim`을 이 effect의 의존성으로 두지 말 것.** 안에서 `setSim`을 부르므로 의존성이 바뀌고,
   *   React가 이전 effect를 정리하며 `cancelled = true`를 세워 **계산 결과가 통째로 버려진다**
   *   (화면이 "계산 중…"에서 영영 멈춘다). 새 판은 `handId`를 올려서 돌린다.
   */
  useEffect(() => {
    let cancelled = false;
    let worker: Worker | null = null;
    const t = setTimeout(() => {
      const s = makeTableSim(preflopCount, tableSize, undefined, custom);
      if (cancelled) return;
      setSim(s);
      const req: HandRequest = {
        id: handId, heroHand: s.hands[0], oppHands: s.hands.slice(1), oppSlots: s.activeSlots.slice(1),
        board: s.board, oppRanges: s.oppRanges, seed: s.seed, style,
      };
      try {
        worker = new Worker(new URL("./_engine.worker.ts", import.meta.url));
      } catch {
        worker = null;
      }
      if (worker) {
        worker.onmessage = (e: MessageEvent<HandMessage>) => {
          const m = e.data;
          if (cancelled || m.id !== handId) return;
          if (m.type === "streets") setStreets(m.streets);
          else { setStreets(m.result.streets); setResult(m.result); worker?.terminate(); }
        };
        worker.postMessage(req);
      } else {
        const r = runHand(req.heroHand, req.oppHands, req.oppSlots, req.board, req.oppRanges, req.seed, undefined, req.style);
        if (!cancelled) { setStreets(r.streets); setResult(r); }
      }
    }, 30);
    return () => { cancelled = true; clearTimeout(t); worker?.terminate(); };
  }, [handId, preflopCount, tableSize, custom, style]);

  const newHand = useCallback(() => {
    closeHand();
    setStreet(0); setReveal(false); setSim(null); setResult(null); setStreets([]);
    setAnswers({}); setGuess(50);
    setHandId((id) => id + 1);
  }, [closeHand]);
  const changeCount = useCallback((n: number) => {
    closeHand();
    setStreet(0); setReveal(false); setSim(null); setResult(null); setStreets([]);
    setAnswers({}); setGuess(50);
    setPreflopCount(n);
  }, [closeHand]);
  const changeStyle = useCallback((s: OppStyle) => {
    closeHand();
    setStreet(0); setReveal(false); setSim(null); setResult(null); setStreets([]);
    setAnswers({}); setGuess(50);
    try { localStorage.setItem(STYLE_KEY, s); } catch { /* 기억만 못 할 뿐 */ }
    setStyle(s);
  }, [closeHand]);
  const changeSize = useCallback((n: TableSize) => {
    closeHand();
    setStreet(0); setReveal(false); setSim(null); setResult(null); setStreets([]);
    setAnswers({}); setGuess(50);
    // 9인 전용 자리(LJ·UTG+1·UTG+2)만 고른 판은 6인으로 옮기면 빈 판이 된다 — 배지·기록이 isFixed와 어긋나지 않게 무작위 판으로
    setCustom((c) => {
      if (!c) return c;
      const m = moveHeroPos(c, tableSize, n);
      return isFixed(m) ? m : null;
    });
    setDraft((d) => moveHeroPos(d, tableSize, n));
    setTableSize(n);
  }, [closeHand, tableSize]);
  /** 직접 입력 적용 — 칸을 하나도 안 채웠으면 무작위 판으로 */
  const applyCustom = useCallback((f: FixedDeal | null) => {
    closeHand();
    setStreet(0); setReveal(false); setSim(null); setResult(null); setStreets([]);
    setAnswers({}); setGuess(50);
    setCustom(isFixed(f) ? f : null);
    setEditing(false);
    setHandId((id) => id + 1);
  }, [closeHand]);
  const openEditor = useCallback(() => {
    setDraft(custom ?? EMPTY_DEAL);
    setEditing((e) => !e);
  }, [custom]);

  /** 이 핸드가 실제로 진행된 마지막 스트리트 (전원 폴드면 거기서 끝). 계산 중엔 아직 모른다 */
  const lastStreet = result ? result.streets[result.streets.length - 1].street : 3;
  const rec = streets[Math.min(street, streets.length - 1)] ?? null;
  const boardShown = street === 0 ? 0 : street + 2;
  /** 다음 스트리트가 아직 계산 중인가 */
  const waiting = !result && street + 1 >= streets.length;
  /** 이 스트리트의 퀴즈 답 */
  const answer = answers[street] as QuizAnswer | undefined;
  /**
   * 퀴즈에서 아직 답을 안 낸 스트리트 — 승률·판정·상대 패를 가린다.
   * 상대가 이 스트리트에서 전부 폴드했으면 물을 게 없다(승률 100%로 끝난 판).
   * ★리버에서도 답을 먼저 받는다 — 안 그러면 쇼다운이 상대 패와 결과를 먼저 보여 준다.
   */
  const quizPending = quiz && !!rec && !answer && rec.opponentsBefore - rec.foldedSlots.length > 0;
  /** 이 스트리트에서 상대가 전부 폴드했다 — 승률 100은 계산이 아니라 결과다 */
  const recAllFold = !!rec && rec.street > 0 && rec.opponentsBefore - rec.foldedSlots.length === 0;
  /** 앞 스트리트에서 올인 — 이 스트리트엔 베팅이 없다 */
  const recAllIn = !!rec && Object.values(rec.actionBySlot).includes("allIn");
  const isEnd = !!result && street >= lastStreet && !quizPending;
  const showdown = isEnd && result?.wonByFoldAt === null;
  const cardsUp = (reveal && !quizPending) || showdown;
  // 판이 끝났다(리버까지 또는 상대 전원 폴드) — 짐작한 판이면 계정에 올린다
  useEffect(() => { if (isEnd) closeHand(); }, [isEnd, closeHand]);
  useEffect(() => { if (isEnd) setResultTab("review"); }, [isEnd]);

  const submitGuess = (choice: "call" | "fold" | null) => {
    if (!rec || answer) return;
    const err = Math.abs(guess - rec.equity);
    const points = quizPoints(err);
    const choiceOk = choice === null ? null : choice === rec.verdict;
    const firstOfHand = Object.keys(answers).length === 0;
    setAnswers((a) => ({ ...a, [street]: { guess, choice, equity: rec.equity, err, points, choiceOk } }));
    // 직접 입력한 판은 기록에 넣지 않는다 — 같은 판을 되풀이하면 답을 외울 수 있다
    if (sim?.custom) return;
    if (!handKey.current) handKey.current = newClientId();
    if (sim) {
      applyStore(recordQuizAnswer(
        handKey.current,
        { tableSize: sim.size, players: sim.activeSlots.length, first: firstOfHand },
        { err, decided: choice !== null, hit: !!choiceOk, points },
      ));
    }
  };

  /** 누적 한 줄에 보일 합계 — 로그인했고 계정 합계를 읽었으면 «계정 + 아직 안 올린 판», 아니면 이 브라우저 */
  const shownTotals: QuizTotals | null = auth === "in" && account
    ? addQuizTotals(account, store.pending ?? EMPTY_TOTALS)
    : store.totals;
  const resetLocal = () => {
    if (!window.confirm(ui.quizResetConfirm)) return;
    applyStore(clearQuizStore());
  };

  /** 좌석 slot → 상대 인덱스(hands 배열 기준). 없으면 -1 */
  const slotToIdx = useMemo(() => {
    const m: Record<number, number> = {};
    sim?.activeSlots.forEach((slot, k) => { m[slot] = k; });
    return m;
  }, [sim]);

  /** 현재 스트리트까지 폴드한 좌석 */
  const foldedSlots = useMemo(() => {
    const s = new Set<number>();
    for (const r of streets) {
      if (r.street > street) break;
      r.foldedSlots.forEach((x) => s.add(x));
    }
    return s;
  }, [streets, street]);

  /**
   * 상대 패를 공개했을 때 **그 패들 상대로의** 승률 — 좌석별 값과 나의 승·무·패.
   *
   * ★왜 따로 두나 (2026-08-05, 사장님 지적) — 카드를 까도 화면의 승률은 그대로 레인지 기준이라
   *   "보이는 카드와 무관한 숫자"가 된다. 실제로 캡처 스팟에서 레인지 20.1% vs 실제 27.9%로
   *   **7.8%p 벌어졌다.** 두 값을 나란히 보여주면 오해가 사라질 뿐 아니라,
   *   *"모르고 판단하면 20%, 까보니 28%"* 가 이 도구에서 가장 좋은 교육 장면이 된다.
   * ★S-034 회차 2: 워커가 스트리트마다 미리 계산해 둔다(rec.known) — 누를 때 다시 돌리지 않는다.
   *   null = 아직 계산 중(화면 승률 4스트리트를 먼저 낸 뒤 채운다).
   */
  const known = cardsUp && rec?.known && rec.known.slots.length > 1 ? rec.known : null;
  /** 좌석 slot → 공개 승률 % */
  const knownBySlot = useMemo(() => {
    const m: Record<number, number> = {};
    known?.slots.forEach((slot, i) => { m[slot] = known.equity[i]; });
    return m;
  }, [known]);

  const nameOf = useCallback((slot: number) => {
    if (!sim) return "";
    const pos = positionAt(sim.heroPos, slot, sim.size);
    return slot === 0 ? `${ui.hero}(${pos})` : pos;
  }, [sim, ui.hero]);

  /** 결과 화면 꺾은선 — 좌석별 공개 승률 + 내가 본(레인지) 승률. 워커가 전부 끝낸 뒤에만 */
  const chartSeries = useMemo((): ChartSeries[] | null => {
    if (!sim || !result || result.streets.some((r) => !r.known)) return null;
    const at = (slot: number) => [0, 1, 2, 3].map((s) => {
      const r = result.streets.find((x) => x.street === s);
      const i = r?.known?.slots.indexOf(slot) ?? -1;
      return r && i >= 0 ? r.known!.equity[i] : undefined;
    });
    const seats: ChartSeries[] = sim.activeSlots.map((slot, k) => ({
      key: `s${slot}`, name: nameOf(slot), color: SEAT_COLORS[k], values: at(slot),
    }));
    const seen: ChartSeries = {
      key: "range", name: ui.chartRangeLegend, color: GOLD, dashed: true,
      values: [0, 1, 2, 3].map((s) => result.streets.find((x) => x.street === s)?.equity),
    };
    // 퀴즈로 짐작한 스트리트가 있으면 «내 짐작» 점선을 더한다 — 점선 둘의 간격 = 내 감각의 오차
    const guessed = [0, 1, 2, 3].map((s) => answers[s]?.guess);
    const mine: ChartSeries[] = guessed.some((v) => v !== undefined)
      ? [{ key: "guess", name: ui.quizGuessLegend, color: GUESS_COLOR, dashed: true, values: guessed }]
      : [];
    return [...seats, seen, ...mine];
  }, [sim, result, nameOf, answers, ui.chartRangeLegend, ui.quizGuessLegend]);

  /** 쇼다운 승자 좌석 (전원 폴드면 나) */
  const winnerSlots = useMemo(() => {
    if (!sim || !result || !showdown) return [];
    const contenders = [0, ...result.survivorSlots];
    const scored = contenders.map((slot) => ({
      slot,
      cat: handCategory(sim.hands[slotToIdx[slot]], sim.board, ui.names),
    }));
    // 승패 판정은 §13 평가기가 한 winnersAt과 같은 기준이어야 하므로 직접 비교한다
    const { winnersAmong } = compareAtShowdown(sim, contenders, slotToIdx);
    return winnersAmong.map((slot) => ({ slot, cat: scored.find((x) => x.slot === slot)!.cat }));
  }, [sim, result, showdown, slotToIdx, ui.names]);

  /** 결과 화면 솔버 링크 — 프리플랍에서 끝난 판은 플랍 없이 자리 조합만 연다 */
  const solverLink = useMemo(
    () => (sim && result ? solverLinkFor(sim, result.wonByFoldAt !== 0, ui.solverLang) : null),
    [sim, result, ui.solverLang],
  );

  const resultLabel = useMemo(() => {
    if (!sim || !result) return "";
    if (result.wonByFoldAt !== null) return ui.wonByFold(result.finalPot);
    if (!winnerSlots.length) return "";
    if (winnerSlots.length > 1) return ui.splitLabel(winnerSlots.map((w) => nameOf(w.slot)));
    return ui.winLabel(nameOf(winnerSlots[0].slot), winnerSlots[0].cat);
  }, [sim, result, winnerSlots, nameOf, ui]);

  /** 9인 테이블은 좌석이 많아 폭을 줄인다(폰 390에서 한 줄 4석 · 보드 양옆 1석씩) */
  const compact = sim?.size === 9;
  const renderSeat = (slot: number) => {
    if (!sim) return null;
    const pos = positionAt(sim.heroPos, slot, sim.size);
    const inHand = slot in slotToIdx;
    const isBtn = pos === "BTN";
    const isHero = slot === 0;

    // 프리플랍에 들어오지 않은 좌석 = 처음부터 폴드
    if (!inHand) {
      return <Seat key={slot} pos={pos} isBtn={isBtn} isHero={false} heroWord={ui.hero} compact={compact}
        folded color={MUTED} statusText={ui.folded} />;
    }
    const k = slotToIdx[slot];
    const hasFolded = foldedSlots.has(slot);
    if (hasFolded) {
      return <Seat key={slot} pos={pos} isBtn={isBtn} isHero={false} heroWord={ui.hero} compact={compact}
        folded color={MUTED} statusText={ui.folded} />;
    }

    // 액션 라벨
    const act: Action | "allIn" | undefined = rec?.actionBySlot[slot];
    // 프리플랍에는 액션이 없으므로 «어떤 레인지로 들어왔나»(오픈·수비)를 대신 적는다
    const role = !isHero ? sim.oppRoles[k - 1] : undefined;
    const statusText = isHero ? undefined
      : act === "raise" ? ui.raise
      : act === "call" ? ui.call
      : act === "allIn" ? ui.allIn
      : street === 0 ? (role?.kind === "open" ? ui.roleOpen : ui.roleDefend) : ui.check;

    const label = isHero
      ? describeHand(sim.hands[k], sim.board.slice(0, boardShown), false, ui.names)
      : cardsUp
        ? describeHand(sim.hands[k], sim.board.slice(0, boardShown), false, ui.names)
        : undefined;

    const isWinner = showdown && winnerSlots.some((w) => w.slot === slot);

    return <Seat key={slot} pos={pos} isBtn={isBtn} isHero={isHero} heroWord={ui.hero} compact={compact}
      cards={sim.hands[k]} faceDown={!isHero && !cardsUp}
      color={isHero ? GOLD : LIVE} label={label} isWinner={isWinner}
      statusText={statusText} statusColor={act === "raise" ? BAD_DARK : "rgba(255,255,255,0.55)"}
      eq={knownBySlot[slot]} eqColor={SEAT_COLORS[k]} />;
  };

  /**
   * 테이블 크기 + 인원 + 퀴즈 토글 한 줄. ★폰 첫 화면 높이(S-034 ⑤)를 지키려고 줄을 늘리지 않는다 —
   * 390px에서 «[6인|9인] [2 3 4 5 6] | 🎯»가 한 줄에 들어가도록 묶음 버튼은 글자만 두고(인원 = 숫자),
   * 묶음 앞 «인원» 라벨은 sm↑에서만 보인다. 인원 버튼의 뜻은 aria-label(«3명»)로 준다.
   */
  const segBtn = (on: boolean) => on
    ? { background: GOLD, color: "var(--wrq-accent-ink)" }
    : { color: "hsl(var(--muted-foreground))" };
  const controls = (cls: string) => (
    <div className={`flex justify-center items-center gap-1 sm:gap-2 ${cls}`}>
      <div className="flex rounded-full border-2 p-0.5" style={{ borderColor: "hsl(var(--border))" }} role="group">
        {([6, 9] as TableSize[]).map((n) => (
          <button key={n} onClick={() => changeSize(n)} aria-pressed={tableSize === n}
            className="px-1.5 sm:px-3 py-1 rounded-full text-[13px] sm:text-sm font-bold transition-all whitespace-nowrap"
            style={segBtn(tableSize === n)}>
            {ui.tableBtn(n)}
          </button>
        ))}
      </div>
      <span className="hidden sm:inline text-[11px] font-bold text-muted-foreground">{ui.playersLabel}</span>
      <div className="flex rounded-full border-2 p-0.5" style={{ borderColor: "hsl(var(--border))" }} role="group"
        aria-label={ui.playersLabel}>
        {[2, 3, 4, 5, 6].map((n) => (
          <button key={n} onClick={() => changeCount(n)} aria-pressed={preflopCount === n}
            aria-label={ui.playersBtn(n)} title={ui.playersBtn(n)}
            className="min-w-[22px] sm:min-w-[30px] px-1 sm:px-1.5 py-1 rounded-full text-[13px] sm:text-sm font-bold tabular-nums transition-all"
            style={segBtn(preflopCount === n)}>
            {n}
          </button>
        ))}
      </div>
      {/* 상대 성향 — 네이티브 select(폰에서 OS 선택창) · 기본이 아니면 금색 테두리 */}
      <select value={style} onChange={(e) => changeStyle(e.target.value as OppStyle)}
        aria-label={ui.styleLabel} title={ui.styleHint}
        className="max-w-[68px] sm:max-w-none py-1.5 pl-1.5 pr-0 sm:pl-2 sm:pr-1 rounded-full text-[12px] sm:text-sm font-bold border-2 bg-transparent cursor-pointer"
        style={style === "standard"
          ? { borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }
          : { borderColor: GOLD, color: GOLD }}>
        {OPP_STYLES.map((s) => <option key={s} value={s}>{ui.styleNames[s]}</option>)}
      </select>
      <span className="hidden sm:block w-px h-5 bg-border sm:mx-0.5" aria-hidden />
      {/* 폰(390)에서는 성향 select가 들어오며 자리가 모자라 퀴즈도 아이콘만 · 이름은 aria-label·title로 */}
      <button onClick={toggleQuiz} aria-pressed={quiz} aria-label={ui.quizToggle} title={ui.quizToggle}
        className="px-1.5 sm:px-4 py-1.5 rounded-full text-sm font-bold border-2 transition-all whitespace-nowrap"
        style={quiz
          ? { borderColor: GOLD, background: GOLD, color: "var(--wrq-accent-ink)" }
          : { borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
        <span className="sm:hidden" aria-hidden>🎯</span>
        <span className="hidden sm:inline">{ui.quizToggle}</span>
      </button>
      {/* 폰(390)에서는 이 줄에 글자까지 넣으면 22~42px 넘친다 → 아이콘만 · 이름은 aria-label·title로 */}
      <button onClick={openEditor} aria-pressed={editing || !!custom} aria-expanded={editing}
        aria-label={ui.customToggle} title={ui.customToggle}
        className="px-1.5 sm:px-4 py-1.5 rounded-full text-sm font-bold border-2 transition-all whitespace-nowrap"
        style={editing || custom
          ? { borderColor: GOLD, background: editing ? GOLD : "transparent", color: editing ? "var(--wrq-accent-ink)" : GOLD }
          : { borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
        <span className="sm:hidden" aria-hidden>✍️</span>
        <span className="hidden sm:inline">{ui.customToggle}</span>
      </button>
    </div>
  );
  const editor = editing && (
    <CustomEditor ui={ui} size={tableSize} draft={draft} setDraft={setDraft}
      onStart={() => applyCustom(draft)} onClose={() => setEditing(false)}
      onOff={custom ? () => applyCustom(null) : null} />
  );
  /** 직접 입력한 판을 돌리는 중 — 한 줄(누르면 편집기) */
  const customLine = custom && !editing && (
    <button onClick={openEditor} className="block mx-auto mb-1.5 text-[11px] font-bold" style={{ color: GOLD }}>
      ✍️ {ui.customActive} · <span className="underline">{ui.customEdit}</span>
    </button>
  );

  if (!sim || !rec) {
    return (
      <div className="wrq">
        <p className="text-center text-[11px] text-muted-foreground mb-1.5">{ui.tableNote}</p>
        {controls("mb-4")}
        {editor}
        <div className="rounded-3xl p-16 text-center text-sm text-white/70" style={{ background: FELT, border: `2px solid ${mix(GOLD, 27)}` }}>
          🃏 {ui.loading}
        </div>
      </div>
    );
  }

  const liveOpponents = rec.opponentsBefore - rec.foldedSlots.length;
  /** 내 완성·개선 카드 수 — 지금 보이는 보드 기준 */
  const outs = heroOuts(sim.hands[0], sim.board.slice(0, boardShown));
  const hitPct = ruleOf24(outs.total, outs.toCome);
  /** 판정줄 자릿수 — 1자리 반올림으로 두 값이 같아지면("25.0% < 25.0%") 2자리로 늘린다. 판정 자체는 전정밀 비교 */
  const oddsDigits = rec.required !== null && rec.equity.toFixed(1) === rec.required.toFixed(1) ? 2 : 1;
  /** 이번 판 퀴즈 답 — 복기 표 열·요약은 답이 하나라도 있을 때만 */
  const answerList = Object.values(answers);
  const hasAnswers = answerList.length > 0;
  const handQuiz = hasAnswers ? {
    avgErr: (answerList.reduce((a, x) => a + x.err, 0) / answerList.length).toFixed(1),
    hits: answerList.filter((x) => x.choiceOk).length,
    decisions: answerList.filter((x) => x.choice !== null).length,
    points: answerList.reduce((a, x) => a + x.points, 0),
  } : null;

  /** 커뮤니티 카드 — 9인은 보드 양옆에 좌석이 앉으므로 카드를 좌석 크기로 줄인다 */
  const boardEl = (
    <div className="flex flex-col items-center gap-1.5">
      <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/45">{ui.streets[street]}</div>
      <div className={`flex justify-center ${compact ? "gap-1" : "gap-1.5"}`}>
        {sim.board.map((c, i) => <PlayingCard key={i} card={c} slot={i >= boardShown} size={compact ? "seat" : "hero"} />)}
      </div>
      {/* 팟 = kit-v1 무표기 칩 + 글자(README 원칙: 금액은 칩이 아니라 옆 글자) */}
      <div className="flex items-center gap-1 rounded-full pl-1 pr-2 py-[2px] mt-0.5 text-[10px] font-black tabular-nums"
        style={{ color: GOLD, background: "var(--wrq-shade)" }}>
        <KitChip size={13} />{ui.potLabel} {rec.potAfter.toLocaleString()}
      </div>
    </div>
  );

        {/* 퀴즈 누적 — 로그인 안 함 = 이 브라우저 기록 · 로그인 = 계정 기록(«내 기록» 회차 C).
            폰에서는 짐작하는 동안 숨긴다 — 그 한 줄이 팟오즈 줄을 고정 버튼 밑으로 민다 */}
  const quizLine = quiz && (() => {
          const t = shownTotals ?? EMPTY_TOTALS;
          return (
            <div className={`${quizPending ? "hidden lg:block" : "block"} mt-2 pt-1.5 border-t border-white/10`}>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10.5px] text-white/55 tabular-nums">
                  {ui.quizStats({
                    hands: t.hands,
                    avgErr: t.guesses ? (t.errSum / t.guesses).toFixed(1) : "—",
                    hits: t.hits, decisions: t.decisions, points: t.points,
                  })}
                </span>
                {auth === "out" && t.guesses > 0 && (
                  <button onClick={resetLocal} className="text-[10px] text-white/40 underline shrink-0">
                    {ui.quizReset}
                  </button>
                )}
              </div>
              {/* 권유 한 줄 — 기록이 생긴 사람에게만 · 팝업·반복 요청 없음(설계 §0-3 · §2-2) */}
              {auth === "out" && t.hands >= 1 && (
                <p className="text-[10.5px] text-white/50 leading-snug mt-1">
                  {ui.quizInvite}{" "}
                  <a href={loginHref(pathname || "/win-rate-quiz")} className="underline font-bold whitespace-nowrap" style={{ color: GOLD }}>
                    {ui.quizInviteLink}
                  </a>
                </p>
              )}
            </div>
          );
  })();
  /** 판이 끝난 화면 — 결과 머리 + 탭(복기 · 승률 흐름 · 마지막 스트리트) */
  const endView = isEnd && !!result;
  const showStreet = !endView || resultTab === "street";

  return (
    <div className="wrq">
      <p className="hidden lg:block text-center text-[11px] text-muted-foreground mb-1.5">{ui.tableNote}</p>
      {controls("mb-2 lg:mb-4")}
      {editor}
      {customLine}

      {/* ── 넓은 화면(lg↑)에서는 본문을 반으로: 좌 = 테이블 / 우 = 승률·팟오즈·버튼 전부 ──
          ★2026-08-05: 처음엔 테이블을 전체 폭에 두고 **아래 패널만** 2단으로 나눴는데,
            사장님이 원한 건 *"본문칸을 반으로 나눠 왼쪽 테이블·오른쪽 버튼들"* 이었다.
            테이블과 버튼이 위아래로 있으면 결국 스크롤해야 한다. */}
      <div className="lg:grid lg:grid-cols-[404px_minmax(0,1fr)] lg:gap-4 lg:items-start">

      {/* ── 좌: 테이블 ──
          ★좌석 배치가 화면에 따라 다르다. 같은 배치를 양쪽에 쓰면 한쪽이 반드시 망가진다.
            · **모바일(<lg)**: 위아래로 쌓이니 **세로가 비싸다** → 3줄(한 줄 3석)로 낮고 넓게
            · **데스크톱(lg↑)**: 좌우로 나뉘어 **가로가 비싸다** → 5줄(한 줄 2석)로 좁고 길게
            좌석 순서는 둘 다 시계 방향으로 같다(slot 1·2·3·4·5, 0=나). 9인 배치는 아래 별도 분기.
            DOM을 두 벌 그리고 CSS로 하나만 보이게 한다 — 미디어쿼리로 JS 분기하면
            서버 렌더와 첫 클라이언트 렌더가 갈려 하이드레이션이 깨진다. */}
      <div className="mb-2 lg:mb-0 mx-auto w-full max-w-[404px] md:max-w-[560px] lg:max-w-none" style={{
        padding: 9, borderRadius: "47% / 41%",
        background: "var(--wrq-rail)",
        boxShadow: "0 16px 44px var(--wrq-shade)",
      }}>
        {/* ★S-034 ⑤ (2026-10-11): 폰 390×844에서 팟오즈 박스가 고정 버튼 밑에 깔렸다(실측 50px).
            모바일 높이·위아래 여백을 줄여 «테이블→승률→팟오즈→버튼»을 첫 화면에 다시 넣는다 */}
        <div className="relative flex flex-col items-center justify-between min-h-[290px] py-2 lg:py-3 lg:min-h-[522px]"
          style={{
            borderRadius: "46% / 40%", background: FELT,
            border: `2px solid ${mix(GOLD, 40)}`, boxShadow: "inset 0 3px 44px var(--wrq-shade)",
            paddingLeft: 6, paddingRight: 6,
          }}>

          {sim.size === 9 ? (<>
          {/* ── 9인 (S-034 ② · 2026-10-11): 시계 방향 slot 0(나·아래 가운데)→1·2(왼쪽 아래)→3~6(위)→7·8(오른쪽 아래).
              ★폰은 «위 4석 · 보드 양옆 1석씩 · 아래 3석», 데스크톱은 «2·2·보드 양옆·2·나» — 6인과 같은 이유로 DOM 두 벌 */}
          <div className="flex w-full justify-between items-start px-9 sm:px-12 pt-2 lg:hidden">
            {renderSeat(3)}{renderSeat(4)}{renderSeat(5)}{renderSeat(6)}
          </div>
          <div className="hidden lg:flex w-full justify-between items-start px-24 pt-3">
            {renderSeat(4)}{renderSeat(5)}
          </div>
          <div className="hidden lg:flex w-full justify-between items-start px-4">
            {renderSeat(3)}{renderSeat(6)}
          </div>
          <div className="flex w-full justify-between items-center px-0.5 lg:px-1">
            {renderSeat(2)}{boardEl}{renderSeat(7)}
          </div>
          <div className="hidden lg:flex w-full justify-between items-end px-4">
            {renderSeat(1)}{renderSeat(8)}
          </div>
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:w-full">
            {renderSeat(0)}
          </div>
          <div className="flex w-full justify-between items-end px-10 sm:px-16 lg:hidden">
            {renderSeat(1)}{renderSeat(0)}{renderSeat(8)}
          </div>
          </>) : (<>
          {/* ── 모바일: 위 3석 ── */}
          <div className="flex w-full justify-between items-start px-6 sm:px-8 pt-1 lg:hidden">
            {renderSeat(2)}{renderSeat(3)}{renderSeat(4)}
          </div>

          {/* ── 데스크톱: 맞은편 + 위 양옆 ── */}
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:w-full lg:gap-0">
            {renderSeat(3)}
          </div>
          <div className="hidden lg:flex w-full justify-between items-start px-4">
            {renderSeat(2)}{renderSeat(4)}
          </div>

          {boardEl}

          {/* ── 데스크톱: 아래 양옆 + 나 ── */}
          <div className="hidden lg:flex w-full justify-between items-end px-4">
            {renderSeat(1)}{renderSeat(5)}
          </div>
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:w-full">
            {renderSeat(0)}
          </div>

          {/* ── 모바일: 아래 3석 (가운데가 나) ── */}
          <div className="flex w-full justify-between items-end px-6 sm:px-8 lg:hidden">
            {renderSeat(1)}{renderSeat(0)}{renderSeat(5)}
          </div>
          </>)}
        </div>
      </div>

      {/* ── 우: 승률·팟오즈·산출근거·버튼 전부 ── */}
      <div>

      {/* ── 판이 끝났다: 결과 + 새 판 버튼을 맨 위에, 나머지는 탭 하나씩 ──
          ★2026-10-11 사장님: 결과를 보면 오른쪽 칸만 아래로 쌓여 스크롤만 계속해야 했다
            (승률 → 팟오즈 → 결과 → 복기 → 꺾은선 → 버튼 → 산출 근거). 버튼이 맨 아래라 새 판도 스크롤해야 눌렸다. */}
      {endView && result && (
        <div className="mb-2">
          <div className="flex flex-col gap-2 mb-2">
            <motion.div initial={false} animate={{ opacity: 1 }} className="rounded-xl px-4 py-2 border-2 text-center"
              style={{ borderColor: mix(GOLD, 40), background: mix(GOLD, 5) }}>
              <div className="font-black text-base text-foreground">🏆 {resultLabel}</div>
            </motion.div>
            <div className="sticky bottom-[70px] z-20 lg:static lg:bottom-auto lg:z-auto">
              <button onClick={newHand}
                className="w-full py-3 rounded-xl font-black text-base text-black transition-all hover:brightness-110 active:scale-[0.98] shadow-xl lg:shadow-none"
                style={{ background: GOLD }}>
                {ui.newHandBtn}
              </button>
            </div>
          </div>
          {!showStreet && quizLine && (
            <div className="rounded-xl px-4 py-1.5 mb-2" style={{ background: PANEL, border: `1px solid ${PANEL_LINE}` }}>{quizLine}</div>
          )}
          <div role="tablist" className="grid grid-cols-3 gap-1 p-1 rounded-xl" style={{ background: "hsl(var(--muted))" }}>
            {(["review", "chart", "street"] as const).map((k, i) => (k === "chart" && !chartSeries) ? <span key={k} /> : (
              <button key={k} role="tab" aria-selected={resultTab === k} onClick={() => setResultTab(k)}
                className="py-2 rounded-lg text-[12px] font-bold transition-colors whitespace-nowrap"
                style={resultTab === k
                  ? { background: "hsl(var(--background))", color: "hsl(var(--foreground))", boxShadow: "0 1px 3px rgba(0,0,0,0.12)" }
                  : { color: "hsl(var(--muted-foreground))" }}>
                {ui.resultTabs[i]}
              </button>
            ))}
          </div>
        </div>
      )}

      {showStreet && (<>

      {/* ── 내 승률 ──
          퀴즈에서 답을 내기 전에는 같은 자리에 짐작 슬라이더를 둔다(카드 높이를 비슷하게 맞춰 폰 첫 화면을 지킨다) */}
      <div className="rounded-xl px-4 py-2 lg:py-2.5 mb-2" style={{ background: PANEL, border: `1px solid ${PANEL_LINE}` }}>
        {quizPending ? (
          <>
            <div className="flex justify-between items-baseline gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                🎯 {ui.quizGuessTitle} · {ui.streets[street]}
              </span>
              <span className="text-[10px] text-white/40 text-right">
                {rec.basis === "seat" ? ui.basisSeat : ui.basisRange}
              </span>
            </div>
            <div className="flex items-end gap-2 mt-1">
              <span className="text-3xl lg:text-4xl font-black tabular-nums leading-none text-white">
                {guess}<span className="text-2xl">%</span>
              </span>
              <span className="flex flex-col leading-tight pb-0.5 min-w-0">
                <span className="text-[11px] text-white/50 whitespace-nowrap">{ui.vsOpponents(liveOpponents)}</span>
                <span className="text-[10.5px] text-white/55">{ui.quizGuessHint}</span>
              </span>
            </div>
            <input type="range" min={0} max={100} step={1} value={guess}
              onChange={(e) => setGuess(Number(e.target.value))}
              aria-label={ui.quizGuessTitle}
              className="w-full mt-2 h-2.5 cursor-pointer" style={{ accentColor: GOLD }} />
          </>
        ) : (
        <>
        <div className="flex justify-between items-baseline">
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
            {ui.myEquity} · {ui.streets[street]}
          </span>
          <span className="text-[10px] text-white/40">
            {rec.basis === "seat" ? ui.basisSeat : ui.basisRange}
          </span>
        </div>
        <div className="flex items-end gap-2 mt-1">
          <span className="text-3xl lg:text-4xl font-black tabular-nums leading-none" style={{ color: GOLD }}>
            {rec.equity.toFixed(1)}<span className="text-2xl">%</span>
          </span>
          {/* 승·무·패 분리 (S-034 ④) — 큰 숫자는 승 + 무승부 몫이다.
              한 줄에 붙이면 데스크톱 오른쪽 칸(316px)에서 «패»가 잘린다 → 상대 수 아래 둘째 줄로 */}
          <span className="flex flex-col leading-tight pb-0.5 min-w-0">
            <span className="text-[11px] text-white/50 whitespace-nowrap">{ui.vsOpponents(liveOpponents)}</span>
            <WinTieLose split={rec.split} ui={ui} />
          </span>
        </div>
        <div className="relative h-2.5 rounded-full overflow-hidden bg-black/40 mt-2">
          <motion.div className="h-full" style={{ background: GOLD }}
            initial={false} animate={{ width: `${rec.equity}%` }} transition={{ duration: 0.5, ease: "easeOut" }} />
          {/* 필요 승률 눈금(S-034 ⑥) — 금색 막대가 이 선을 넘으면 콜이 본전 이상. 숫자 없이 판정이 보인다 */}
          {rec.required !== null && (
            <span className="absolute top-0 bottom-0 w-[2px] -ml-px" role="img"
              aria-label={`${ui.requiredLabel} ${rec.required.toFixed(1)}%`} title={`${ui.requiredLabel} ${rec.required.toFixed(1)}%`}
              style={{ left: `${Math.min(rec.required, 100)}%`, background: REVEAL }} />
          )}
          {/* 퀴즈 답을 낸 스트리트 — 내 짐작 자리에 흰 눈금 */}
          {answer && (
            <span className="absolute top-0 bottom-0 w-[3px] -ml-[1.5px] rounded-full" aria-hidden
              style={{ left: `${answer.guess}%`, background: GUESS_COLOR, boxShadow: "0 0 0 1px var(--wrq-shade)" }} />
          )}
        </div>
        {answer && (
          <p className="text-[11px] font-bold tabular-nums mt-1.5" style={{ color: GUESS_COLOR }}>
            🎯 {ui.quizResult(answer.guess, answer.err.toFixed(1), answer.points)}
            {answer.choiceOk !== null && (
              <span style={{ color: answer.choiceOk ? GOOD_DARK : BAD_DARK }}>
                {" · "}{ui.quizChoiceResult(answer.choiceOk, rec.verdict === "call" ? ui.verdictCall : ui.verdictFold)}
              </span>
            )}
          </p>
        )}

        {/* 카드를 공개했을 때만 — 같은 화면의 두 숫자가 왜 다른지가 이 도구의 핵심 교육 장면이다 */}
        {known && (
          <div className="mt-2.5 pt-2.5 border-t border-white/10">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[11px] text-white/55">{ui.revealedLabel}</span>
              <span className="text-lg font-black tabular-nums" style={{ color: REVEAL }}>
                {known.hero.equity.toFixed(1)}%
              </span>
            </div>
            <WinTieLose split={known.hero} ui={ui} className="block text-right" />
            <div className="h-1.5 rounded-full overflow-hidden bg-black/40 mt-1.5">
              <motion.div className="h-full" style={{ background: mix(REVEAL, 70) }}
                initial={false} animate={{ width: `${known.hero.equity}%` }} transition={{ duration: 0.5, ease: "easeOut" }} />
            </div>
            <p className="text-[10px] text-white/40 mt-1.5 leading-snug">
              {ui.revealedNote(Math.abs(known.hero.equity - rec.equity).toFixed(1))}
            </p>
          </div>
        )}
        </>
        )}
        {quizLine}
      </div>

      {/* ── 팟오즈 ── */}
      <div className="rounded-xl px-4 py-2 lg:py-3 mb-4 border-2"
        style={{ borderColor: quizPending ? "hsl(var(--border))" : rec.verdict === "fold" ? mix(BAD, 35) : rec.verdict === "call" ? mix(GOOD, 35) : "hsl(var(--border))" }}>
        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1 lg:mb-1.5">{ui.potOddsTitle}</div>
        {rec.toCall === 0 ? (
          // ★베팅이 0인 경우는 셋뿐이다 — 프리플랍(앤티만) · 전원 폴드 · 앞에서 올인. «다음 카드 무료»는 첫째만 참(MA-495 ②ⓐ)
          <p className="text-sm text-muted-foreground">
            {recAllFold ? ui.wonByFold(rec.potBefore) : recAllIn ? ui.noBetAllIn(rec.street === 3) : ui.noBet}
          </p>
        ) : (
          <>
            {/* 모바일에서 세로를 아끼려고 「팟·콜」과 「필요 승률 식」을 한 줄로 붙인다.
                식은 그대로 보여준다 — 공부하러 오는 자리라 계산 과정을 지우면 안 된다 */}
            <p className="text-xs text-muted-foreground leading-relaxed tabular-nums">
              {ui.potBeforeLabel} <b className="text-foreground">{rec.potBefore.toLocaleString()}</b>
              {" · "}{ui.toCallLabel} <b className="text-foreground">{rec.toCall.toLocaleString()}</b>
              {" → "}{ui.requiredLabel} = {rec.toCall.toLocaleString()} ÷ {rec.potAfter.toLocaleString()} ={" "}
              <b className="text-foreground">{rec.required!.toFixed(oddsDigits)}%</b>
            </p>
            {/* 퀴즈 답 전에는 판정 줄을 가린다 — 필요 승률(식)은 짐작의 재료라 그대로 보여 준다 */}
            {!quizPending && (
            <p className="text-sm font-black mt-1" style={{ color: rec.verdict === "call" ? GOOD : BAD }}>
              {rec.equity.toFixed(oddsDigits)}% {rec.verdict === "call" ? "≥" : "<"} {rec.required!.toFixed(oddsDigits)}% →{" "}
              {rec.verdict === "call" ? ui.verdictCall : ui.verdictFold}
            </p>
            )}
            {!quizPending && rec.verdict === "fold" && street < 3 && (
              <p className="text-[11px] text-muted-foreground mt-1">{ui.impliedNote}</p>
            )}
          </>
        )}
      </div>
      </>)}

      {/* ── 진행 ──
          ★모바일에서는 하단 내비(62px) 위에 **고정**한다. 화면이 짧아 버튼이 접히면
            스트리트를 넘길 때마다 스크롤해야 한다 — 이 도구는 클릭이 본체라 그게 제일 거슬린다.
            데스크톱(lg↑)은 이미 첫 화면 안에 들어오므로 고정하지 않는다. */}
      {!isEnd ? (
        <div className="sticky bottom-[70px] z-20 lg:static lg:bottom-auto lg:z-auto">
          {/* ★S-034 ⑤ (2026-10-11): 플랍부터 팟오즈 박스가 2~3줄로 늘어 판정 줄이 이 버튼 밑에 깔린다
              (실측 390×844에서 박스 끝 742~787px · 버튼 722px). 폰에서만 판정 한 줄을 버튼 위에 붙여
              «승률 → 판정 → 버튼»이 첫 화면에 남게 한다. 식 전체는 위 박스에 그대로 있다 */}
          {rec.required !== null && !quizPending && (
            <div className="lg:hidden mb-1.5 rounded-lg px-3 py-1.5 text-center text-sm font-black tabular-nums shadow-lg"
              style={{ background: "hsl(var(--background))", border: `2px solid ${mix(rec.verdict === "call" ? GOOD : BAD, 55)}`,
                color: rec.verdict === "call" ? GOOD : BAD }}>
              {rec.equity.toFixed(oddsDigits)}% {rec.verdict === "call" ? "≥" : "<"} {rec.required.toFixed(oddsDigits)}% →{" "}
              {rec.verdict === "call" ? ui.verdictCall : ui.verdictFold}
            </div>
          )}
          {/* 퀴즈 답 전: 베팅이 있으면 콜/폴드 버튼이 곧 제출(짐작과 같이) · 없으면 확인 한 개 */}
          {quizPending ? (
            rec.toCall > 0 ? (
              <>
              {/* 폰에서는 팟오즈 박스가 이 버튼들 밑에 깔린다 — 콜/폴드를 고를 재료(필요 승률 식)만 버튼 위에 한 줄 */}
              <div className="lg:hidden mb-1.5 rounded-lg px-3 py-1.5 text-center text-[13px] font-bold tabular-nums shadow-lg text-foreground"
                style={{ background: "hsl(var(--background))", border: "2px solid hsl(var(--border))" }}>
                {ui.requiredLabel} = {rec.toCall.toLocaleString()} ÷ {rec.potAfter.toLocaleString()} = <b>{rec.required!.toFixed(1)}%</b>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => submitGuess("call")}
                  className="py-3.5 lg:py-4 rounded-xl font-black text-base transition-all hover:brightness-110 active:scale-[0.98] shadow-xl lg:shadow-none border-2"
                  style={{ background: "hsl(var(--background))", borderColor: GOOD, color: GOOD }}>
                  {ui.quizCallSubmit}
                </button>
                <button onClick={() => submitGuess("fold")}
                  className="py-3.5 lg:py-4 rounded-xl font-black text-base transition-all hover:brightness-110 active:scale-[0.98] shadow-xl lg:shadow-none border-2"
                  style={{ background: "hsl(var(--background))", borderColor: BAD, color: BAD }}>
                  {ui.quizFoldSubmit}
                </button>
              </div>
              </>
            ) : (
              <button onClick={() => submitGuess(null)}
                className="w-full py-3.5 lg:py-4 rounded-xl font-black text-base text-black transition-all hover:brightness-110 active:scale-[0.98] shadow-xl lg:shadow-none"
                style={{ background: GOLD }}>
                {ui.quizSubmit}
              </button>
            )
          ) : (
          <button onClick={() => setStreet((s) => Math.min(s + 1, streets.length - 1))}
            disabled={waiting}
            className="w-full py-3.5 lg:py-4 rounded-xl font-black text-base text-black transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50 disabled:cursor-wait shadow-xl lg:shadow-none"
            style={{ background: GOLD }}>
            {waiting ? `⏳ ${ui.loading}` : ui.revealBtn(ui.streets[street + 1])}
          </button>
          )}
        </div>
      ) : result && (
        <>
          {/* 복기 (탭) */}
          {resultTab === "review" && (
          <div className="rounded-xl p-4 mb-3" style={{ background: "hsl(var(--muted))" }}>
            <div className="font-black text-sm mb-2 text-foreground">{ui.reviewTitle}</div>
            <div className="overflow-x-auto">
              <table className={`w-full ${hasAnswers ? "text-[11px]" : "text-xs"} tabular-nums`}>
                <thead>
                  <tr className="text-muted-foreground text-left">
                    {(hasAnswers ? [...ui.reviewCols, ui.quizGuessCol, ui.quizChoiceCol] : ui.reviewCols)
                      .map((c, i) => <th key={i} className={`font-semibold pb-1 ${hasAnswers ? "pr-1.5" : "pr-3"} whitespace-nowrap`}>{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {streets.map((r) => (
                    <tr key={r.street} className="border-t" style={{ borderColor: "hsl(var(--border))" }}>
                      <td className={`py-1 ${hasAnswers ? "pr-1.5" : "pr-3"} font-bold whitespace-nowrap`}>{ui.streets[r.street]}</td>
                      <td className={`py-1 ${hasAnswers ? "pr-1.5" : "pr-3"}`}>{r.equity.toFixed(1)}%</td>
                      <td className={`py-1 ${hasAnswers ? "pr-1.5" : "pr-3"}`}>{r.required === null ? "—" : `${r.required.toFixed(1)}%`}</td>
                      <td className={`py-1 ${hasAnswers ? "pr-1.5" : "pr-3"} font-bold whitespace-nowrap`}
                        style={{ color: r.verdict === "fold" ? BAD : r.verdict === "call" ? GOOD : "hsl(var(--muted-foreground))" }}>
                        {r.verdict === "free" ? "—" : r.verdict === "call" ? ui.verdictCall : ui.verdictFold}
                      </td>
                      {hasAnswers && (() => {
                        const a = answers[r.street];
                        return (
                          <>
                            <td className={`py-1 ${hasAnswers ? "pr-1.5" : "pr-3"} whitespace-nowrap`}>
                              {a ? <>{a.guess}%<span className="block text-[10px] text-muted-foreground leading-tight">±{a.err.toFixed(1)}</span></> : "—"}
                            </td>
                            <td className="py-1 font-bold whitespace-nowrap"
                              style={{ color: a?.choiceOk === true ? GOOD : a?.choiceOk === false ? BAD : "hsl(var(--muted-foreground))" }}>
                              {a?.choice ? `${a.choice === "call" ? ui.verdictCall : ui.verdictFold} ${a.choiceOk ? "✓" : "✗"}` : "—"}
                            </td>
                          </>
                        );
                      })()}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-2.5 font-bold" style={{ color: result.firstMistake !== null ? BAD : GOOD }}>
              {result.firstMistake !== null ? ui.reviewMistake(ui.streets[result.firstMistake]) : ui.reviewNoMistake}
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">{ui.reviewInvested(result.invested, result.finalPot)}</p>
            {handQuiz && (
              <p className="text-xs font-bold mt-1.5 text-foreground">
                🎯 {ui.quizHandSummary(handQuiz.avgErr, handQuiz.hits, handQuiz.decisions, handQuiz.points)}
              </p>
            )}
          </div>
          )}

          {resultTab === "chart" && chartSeries && <EquityChart series={chartSeries} streets={ui.streets} ui={ui} />}
        </>
      )}

      {/* 상대 카드 보기 */}
      {/* 퀴즈 답 전에는 숨긴다 — 패를 보면 짐작이 아니게 된다 */}
      {!showdown && !quizPending && (
        <button onClick={() => setReveal((v) => !v)}
          className="w-full mt-2 py-2.5 rounded-xl text-xs font-bold border-2 transition-all"
          style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
          {reveal ? ui.hideCards : ui.showCards}
        </button>
      )}

      {/* 이 승률은 어떻게 나왔나
          ★암산(Rule of 2/4)과 시뮬레이션 승률은 **다른 것을 잰다.**
            앞은 "드로우를 맞출 확률", 뒤는 "팟을 이길 확률"이다. 맞춰도 상대가 더 좋아지면 지고,
            못 맞춰도 이길 때가 있다. 그 차이를 설명 없이 나란히 두면 오히려 틀린 걸 가르치게 된다. */}
      {showStreet && (
      <div className="rounded-xl px-4 py-3 mt-3" style={{ background: "hsl(var(--muted))" }}>
        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">{ui.formulaTitle}</div>
        {recAllFold ? (
          <p className="text-[11.5px] text-muted-foreground leading-relaxed">{ui.foldWinNote}</p>
        ) : outs.total > 0 ? (
          <>
            <p className="text-sm font-black text-foreground">{ui.outsLabel(outs.total)}</p>
            <p className="text-[11px] text-muted-foreground mb-2.5">
              {ui.outsBreak(outs, outs.flush + outs.straight + outs.set + outs.twoPair + outs.over - outs.total)}
            </p>

            <div className="rounded-lg px-3 py-2 mb-1.5" style={{ background: "hsl(var(--background))" }}>
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-[11px] text-muted-foreground">{ui.hitLabel}</span>
                <span className="text-lg font-black tabular-nums text-foreground">{hitPct}%</span>
              </div>
              <p className="text-[10px] text-muted-foreground tabular-nums mt-0.5">
                {ui.formulaExpr(outs.total, outs.toCome)} = {hitPct}%
              </p>
            </div>

            <div className="rounded-lg px-3 py-2 mb-2" style={{ background: "hsl(var(--background))" }}>
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-[11px] text-muted-foreground">{ui.winLabel2}</span>
                <span className="text-lg font-black tabular-nums text-primary">{quizPending ? "?" : `${rec.equity.toFixed(1)}%`}</span>
              </div>
            </div>

            <p className="text-[10.5px] text-muted-foreground leading-snug">{ui.formulaCaveat}</p>
          </>
        ) : street === 3 ? (
          <p className="text-[11.5px] text-muted-foreground leading-relaxed">{ui.riverNote}</p>
        ) : (
          <p className="text-[11.5px] text-muted-foreground leading-relaxed">
            {ui.noDrawNote(rec.basis, (street === 0 ? SAMPLES.preflop : SAMPLES.postflop).toLocaleString())}
          </p>
        )}
      </div>
      )}

      {/* 솔버로 보기 (S-034 2차 ⑥) — 탭과 상관없이 판이 끝나면 오른쪽 칸 맨 아래 */}
      {endView && solverLink && (
        <div className="rounded-xl px-4 py-3 mt-3 border" style={{ borderColor: mix(GOLD, 40), background: mix(GOLD, 5) }}>
          <div className="font-black text-sm text-foreground mb-1">🧮 {ui.solverTitle}</div>
          <p className="text-[11.5px] text-muted-foreground leading-relaxed mb-2.5">{ui.solverNote(solverLink.info)}</p>
          <a href={solverLink.href} target="_blank" rel="noopener"
            className="block w-full py-2.5 rounded-xl text-center text-sm font-black border-2 transition-all hover:brightness-110"
            style={{ borderColor: GOLD, color: "hsl(var(--foreground))", background: "hsl(var(--background))" }}>
            {ui.solverOpen} ↗
          </a>
        </div>
      )}

      </div>{/* /우 */}
      </div>{/* /2단 */}

      {/* 규칙·단서 — 폭이 넓어야 읽히는 글이라 2단 아래 전체 폭에 둔다 */}
      <button onClick={() => setShowRule((v) => !v)}
        className="w-full mt-2 py-2 text-[11px] font-bold text-muted-foreground underline">
        {ui.ruleTitle} {showRule ? "▲" : "▼"}
      </button>
      {showRule && (
        <div className="rounded-xl p-3.5 text-[11px] leading-relaxed text-muted-foreground"
          style={{ background: "hsl(var(--muted))" }}>
          {ui.ruleText(style)}
        </div>
      )}

      <p className="text-center text-xs text-muted-foreground mt-4">{ui.footer}</p>
    </div>
  );
}

/**
 * 쇼다운 승자 좌석 — 판정은 §13 검증 평가기(`winnersAt`)가 한다.
 * 폴드한 사람은 빼고 살아남은 사람끼리만 비교해야 하므로 좌석을 추려 다시 호출한다.
 */
function compareAtShowdown(sim: TableSim, contenders: number[], slotToIdx: Record<number, number>) {
  const hands = contenders.map((slot) => sim.hands[slotToIdx[slot]]);
  const w = winnersAt(hands, sim.board);
  return { winnersAmong: w.map((i) => contenders[i]) };
}
