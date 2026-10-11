"use client";

import { useState, useMemo, useEffect, useCallback, type ReactNode } from "react";
import { motion } from "framer-motion";
import { describeHand, handCategory, winnersAt, type Card as QuizCard, type HandNames } from "./_equity";
import { makeTableSim, positionAt, type TableSim } from "./_table";
import {
  runHand, heroOuts, ruleOf24, SAMPLES,
  type HandResult, type StreetRecord, type Action, type EquitySplit,
} from "./_engine";
import type { HandMessage, HandRequest } from "./_engine.worker";

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

const GOLD = "rgb(var(--gold-dark-rgb))";
const FELT = "radial-gradient(ellipse 120% 90% at 50% 42%, #1f7a52 0%, #12603f 45%, #0b4229 78%, #08331f 100%)";
const MUTED = "rgba(255,255,255,0.3)";
const LIVE = "#e0555e";
const GOOD = "#4ade80";
const BAD = "#f87171";
/**
 * 꺾은선·좌석 승률 배지의 좌석 색 — 나 + 상대 3명(4인 팟까지 · S-034 회차 2).
 * ★어두운 카드(#0f172a) 위 범주 팔레트 검증 통과(dataviz validate_palette: 밝기 띠·채도·색약 ΔE ≥ 15).
 *   색은 «상대 순서»(activeSlots 순)를 따른다 — 누가 폴드해도 남은 사람 색이 바뀌지 않는다.
 *   회차 4(2~6명)에서 상대가 5명으로 늘면 두 칸을 더 검증해 붙인다.
 */
const SEAT_COLORS = ["#b08d2a", "#0284c7", "#db2777", "#7c3aed"];
/** 꺾은선의 «내 짐작» 점선 — 좌석이 아니라 중립색(좌석 팔레트와 겹치지 않게) */
const GUESS_COLOR = "#e2e8f0";

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
interface QuizStats { hands: number; guesses: number; errSum: number; decisions: number; hits: number; points: number }
const EMPTY_STATS: QuizStats = { hands: 0, guesses: 0, errSum: 0, decisions: 0, hits: 0, points: 0 };
/**
 * 짐작 1번의 점수 = 100 − 4 × 오차(%p), 0 아래는 0. 오차 25%p면 0점.
 * ★규칙 설명(ko·en ruleText)에 이 식을 그대로 적어 두었다 — 바꾸면 거기도 같이.
 */
const quizPoints = (err: number) => Math.max(0, Math.round(100 - 4 * err));
/** 퀴즈 모드 켜짐 기억(보는 사람 브라우저에만 · 실패해도 기본값 꺼짐) */
const QUIZ_KEY = "wrq-quiz-mode";

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
  tableNote: string;
  playersBtn: (n: number) => string;
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
  /** both = 플러시·스트레이트를 동시에 완성하는 카드 수 — 합계(f+s)와 총계가 달라 보이는 걸 설명한다 */
  outsBreak: (flush: number, straight: number, both: number) => string;
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
  /** 세션 누적 한 줄 */
  quizStats: (s: { hands: number; avgErr: string; hits: number; decisions: number; points: number }) => string;
  quizReset: string;
  /** 복기 표에 붙는 두 열 */
  quizGuessCol: string;
  quizChoiceCol: string;
  /** 복기 아래 이번 판 요약 */
  quizHandSummary: (avgErr: string, hits: number, decisions: number, points: number) => string;
  /** 꺾은선의 «내 짐작» 선 */
  quizGuessLegend: string;
  /** 규칙·단서 */
  ruleTitle: string;
  ruleText: ReactNode;
  footer: ReactNode;
}

// ── 카드 ────────────────────────────────────────────────────────────────────
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

function PlayingCard({ card, hidden, size = "seat" }: { card?: QuizCard; hidden?: boolean; size?: CardSize }) {
  if (hidden || !card) {
    const muted = size === "fold";
    return (
      <div className={CARD_BOX[size]} style={{
        borderRadius: 5, flexShrink: 0, opacity: muted ? 0.5 : 1,
        background: muted
          ? "linear-gradient(135deg,#4b3535 0%,#584040 50%,#4b3535 100%)"
          : "linear-gradient(135deg,#7f1d1d 0%,#991b1b 50%,#7f1d1d 100%)",
        border: `2px solid ${muted ? "rgba(255,255,255,0.18)" : "rgba(var(--gold-dark-rgb),0.5)"}`,
        boxShadow: "0 2px 6px rgba(0,0,0,0.45)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: "60%", height: "70%", borderRadius: 2,
          border: `1px solid ${muted ? "rgba(255,255,255,0.14)" : "rgba(var(--gold-dark-rgb),0.45)"}`,
          background: `repeating-linear-gradient(45deg,transparent,transparent 2.5px,${muted ? "rgba(255,255,255,0.08)" : "rgba(var(--gold-dark-rgb),0.16)"} 2.5px,${muted ? "rgba(255,255,255,0.08)" : "rgba(var(--gold-dark-rgb),0.16)"} 5px)`,
        }} />
      </div>
    );
  }
  const isRed = card.suit === "♥" || card.suit === "♦";
  const color = isRed ? "#dc2626" : "#0f172a";
  const small = size !== "hero";
  return (
    <motion.div className={CARD_BOX[size]}
      initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} transition={{ duration: 0.26 }}
      style={{
        background: "linear-gradient(160deg,#fff 0%,#f1f5f9 100%)", borderRadius: 5, flexShrink: 0,
        position: "relative", border: "1px solid #cbd5e1", boxShadow: "0 2px 7px rgba(0,0,0,0.4)",
      }}>
      <div style={{ position: "absolute", top: 2, left: 3, lineHeight: 1, textAlign: "center", color }}>
        <div style={{ fontSize: small ? 9 : 11, fontWeight: 900, letterSpacing: "-1px" }}>{card.rank}</div>
        <div style={{ fontSize: small ? 8 : 9 }}>{card.suit}</div>
      </div>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color, fontSize: small ? 16 : 22, opacity: 0.9 }}>
        {card.suit}
      </div>
    </motion.div>
  );
}

function PosBadge({ pos, color, glow }: { pos: string; color: string; glow: boolean }) {
  return (
    <div style={{
      minWidth: 30, height: 24, padding: "0 5px", borderRadius: 12, background: "rgba(0,0,0,0.38)",
      border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center",
      color, fontWeight: 900, fontSize: 10, letterSpacing: "-0.3px", flexShrink: 0,
      boxShadow: glow ? `0 0 12px ${color}` : "none",
    }}>{pos}</div>
  );
}

function DealerChip() {
  return (
    <div style={{
      width: 17, height: 17, borderRadius: "50%", background: "#f8fafc", color: "#0f172a",
      fontSize: 9, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center",
      border: "1px solid #94a3b8", boxShadow: "0 1px 3px rgba(0,0,0,0.5)", flexShrink: 0,
    }}>D</div>
  );
}

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

  // 끝점 라벨 — 마지막 값 기준, 11px보다 가까우면 아래로 밀어 겹치지 않게
  const ends = series
    .map((s) => {
      let last = -1;
      s.values.forEach((v, i) => { if (v !== undefined) last = i; });
      return last < 0 ? null : { s, i: last, v: s.values[last]!, ly: y(s.values[last]!) };
    })
    .filter((e): e is NonNullable<typeof e> => !!e)
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
    <div className="rounded-xl px-3 pt-3 pb-2.5 mb-3" style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.08)" }}>
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
                <polyline points={pts.join(" ")} fill="none" stroke={s.color} strokeWidth={s.dashed ? 1.5 : 2}
                  strokeDasharray={s.dashed ? "4 3" : undefined} strokeLinejoin="round" strokeLinecap="round" />
                {s.values.map((v, i) => v === undefined ? null : (
                  <circle key={i} cx={x(i)} cy={y(v)} r={s.dashed ? 2.5 : 4} fill={s.dashed ? "#0f172a" : s.color}
                    stroke={s.dashed ? s.color : "#0f172a"} strokeWidth={s.dashed ? 1.5 : 2} />
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
            <svg width="16" height="6" aria-hidden className="shrink-0"><line x1="0" x2="16" y1="3" y2="3" stroke={s.color} strokeWidth={2}
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
function Seat({ pos, isBtn, isHero, heroWord, cards, faceDown, folded, isWinner, color, label, isDead, statusText, statusColor, eq, eqColor }: {
  pos: string; isBtn: boolean; isHero: boolean; heroWord: string;
  cards?: QuizCard[]; faceDown?: boolean; folded?: boolean; isWinner?: boolean;
  color: string; label?: string; isDead?: boolean; statusText?: string; statusColor?: string;
  /** 패를 깠을 때 이 좌석의 승률 % — 방송 화면 방식 배지(S-034 ④) */
  eq?: number; eqColor?: string;
}) {
  const size: CardSize = folded ? "fold" : isHero ? "hero" : "seat";
  return (
    <div className="flex flex-col items-center gap-1"
      style={{ minWidth: folded ? 62 : isHero ? 100 : 80, opacity: folded ? 0.55 : 1 }}>
      <div className="flex items-center gap-1">
        <PosBadge pos={pos} color={color} glow={!!isWinner} />
        {isBtn && <DealerChip />}
        {isHero && <span className="text-[10px] font-black" style={{ color }}>{heroWord}</span>}
        {isWinner && <span className="text-[10px]">🏆</span>}
      </div>
      <div className="flex gap-1">
        {folded
          ? [0, 1].map((i) => <PlayingCard key={i} hidden size="fold" />)
          : (cards ?? []).map((c, i) => <PlayingCard key={i} card={c} hidden={faceDown} size={size} />)}
      </div>
      <div className="h-4 flex items-center gap-1">
        {statusText && (
          <span className="text-[9.5px] font-bold" style={{ color: statusColor ?? MUTED }}>{statusText}</span>
        )}
        {eq !== undefined && (
          <span className="text-[10px] font-black tabular-nums leading-none rounded px-1 py-[2px] text-white"
            style={{ background: "rgba(0,0,0,0.55)", borderLeft: `3px solid ${eqColor ?? color}` }}>
            {badgePct(eq)}
          </span>
        )}
      </div>
      {label && (
        <div className="text-[8.5px] font-semibold leading-tight text-center px-0.5"
          style={{ color: isDead ? BAD : "rgba(255,255,255,0.72)", maxWidth: isHero ? 108 : 86 }}>
          {label}
        </div>
      )}
    </div>
  );
}

// ── 본체 ────────────────────────────────────────────────────────────────────
export default function WinRateSimulator({ ui }: { ui: QuizUI }) {
  const [preflopCount, setPreflopCount] = useState(3);
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
  /**
   * 퀴즈 모드 (S-034 ③) — 기본은 꺼짐(지금의 «끝까지 보고 복기» 흐름 그대로).
   * 켜면 스트리트마다 승률·판정을 가린 채 짐작을 먼저 받는다. 답은 판마다(answers), 누적은 페이지에 있는 동안(stats).
   */
  const [quiz, setQuiz] = useState(false);
  const [guess, setGuess] = useState(50);
  const [answers, setAnswers] = useState<Record<number, QuizAnswer>>({});
  const [stats, setStats] = useState<QuizStats>(EMPTY_STATS);
  // 켜짐 기억은 effect에서 읽는다 — 첫 렌더에서 읽으면 서버 렌더(꺼짐)와 갈려 하이드레이션이 깨진다
  useEffect(() => {
    try { if (localStorage.getItem(QUIZ_KEY) === "1") setQuiz(true); } catch { /* 저장소 막힘 = 꺼짐 */ }
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
      const s = makeTableSim(preflopCount);
      if (cancelled) return;
      setSim(s);
      const req: HandRequest = {
        id: handId, heroHand: s.hands[0], oppHands: s.hands.slice(1), oppSlots: s.activeSlots.slice(1),
        board: s.board, oppRanges: s.oppRanges, seed: s.seed,
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
        const r = runHand(req.heroHand, req.oppHands, req.oppSlots, req.board, req.oppRanges, req.seed);
        if (!cancelled) { setStreets(r.streets); setResult(r); }
      }
    }, 30);
    return () => { cancelled = true; clearTimeout(t); worker?.terminate(); };
  }, [handId, preflopCount]);

  const newHand = useCallback(() => {
    setStreet(0); setReveal(false); setSim(null); setResult(null); setStreets([]);
    setAnswers({}); setGuess(50);
    setHandId((id) => id + 1);
  }, []);
  const changeCount = useCallback((n: number) => {
    setStreet(0); setReveal(false); setSim(null); setResult(null); setStreets([]);
    setAnswers({}); setGuess(50);
    setPreflopCount(n);
  }, []);

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
  const isEnd = !!result && street >= lastStreet && !quizPending;
  const showdown = isEnd && result?.wonByFoldAt === null;
  const cardsUp = (reveal && !quizPending) || showdown;

  const submitGuess = (choice: "call" | "fold" | null) => {
    if (!rec || answer) return;
    const err = Math.abs(guess - rec.equity);
    const points = quizPoints(err);
    const choiceOk = choice === null ? null : choice === rec.verdict;
    const firstOfHand = Object.keys(answers).length === 0;
    setAnswers((a) => ({ ...a, [street]: { guess, choice, equity: rec.equity, err, points, choiceOk } }));
    setStats((s) => ({
      hands: s.hands + (firstOfHand ? 1 : 0),
      guesses: s.guesses + 1,
      errSum: s.errSum + err,
      decisions: s.decisions + (choice === null ? 0 : 1),
      hits: s.hits + (choiceOk ? 1 : 0),
      points: s.points + points,
    }));
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
    const pos = positionAt(sim.heroPos, slot);
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

  const resultLabel = useMemo(() => {
    if (!sim || !result) return "";
    if (result.wonByFoldAt !== null) return ui.wonByFold(result.finalPot);
    if (!winnerSlots.length) return "";
    if (winnerSlots.length > 1) return ui.splitLabel(winnerSlots.map((w) => nameOf(w.slot)));
    return ui.winLabel(nameOf(winnerSlots[0].slot), winnerSlots[0].cat);
  }, [sim, result, winnerSlots, nameOf, ui]);

  const renderSeat = (slot: number) => {
    if (!sim) return null;
    const pos = positionAt(sim.heroPos, slot);
    const inHand = slot in slotToIdx;
    const isBtn = pos === "BTN";
    const isHero = slot === 0;

    // 프리플랍에 들어오지 않은 좌석 = 처음부터 폴드
    if (!inHand) {
      return <Seat key={slot} pos={pos} isBtn={isBtn} isHero={false} heroWord={ui.hero}
        folded color={MUTED} statusText={ui.folded} />;
    }
    const k = slotToIdx[slot];
    const hasFolded = foldedSlots.has(slot);
    if (hasFolded) {
      return <Seat key={slot} pos={pos} isBtn={isBtn} isHero={false} heroWord={ui.hero}
        folded color={MUTED} statusText={ui.folded} />;
    }

    // 액션 라벨
    const act: Action | undefined = rec?.actionBySlot[slot];
    // 프리플랍에는 액션이 없으므로 «어떤 레인지로 들어왔나»(오픈·수비)를 대신 적는다
    const role = !isHero ? sim.oppRoles[k - 1] : undefined;
    const statusText = isHero ? undefined
      : act === "raise" ? ui.raise
      : act === "call" ? ui.call
      : street === 0 ? (role?.kind === "open" ? ui.roleOpen : ui.roleDefend) : ui.check;

    const label = isHero
      ? describeHand(sim.hands[k], sim.board.slice(0, boardShown), false, ui.names)
      : cardsUp
        ? describeHand(sim.hands[k], sim.board.slice(0, boardShown), false, ui.names)
        : undefined;

    const isWinner = showdown && winnerSlots.some((w) => w.slot === slot);

    return <Seat key={slot} pos={pos} isBtn={isBtn} isHero={isHero} heroWord={ui.hero}
      cards={sim.hands[k]} faceDown={!isHero && !cardsUp}
      color={isHero ? GOLD : LIVE} label={label} isWinner={isWinner}
      statusText={statusText} statusColor={act === "raise" ? BAD : "rgba(255,255,255,0.55)"}
      eq={knownBySlot[slot]} eqColor={SEAT_COLORS[k]} />;
  };

  /**
   * 인원 버튼 + 퀴즈 토글 한 줄. ★폰 첫 화면 높이(S-034 ⑤)를 지키려고 토글을 따로 줄로 내리지 않는다 —
   * 390px에서 «2명 3명 4명 | 🎯» 네 개가 한 줄에 들어가도록 버튼 좌우 여백을 줄였다.
   */
  const controls = (cls: string) => (
    <div className={`flex justify-center items-center gap-1.5 sm:gap-2 ${cls}`}>
      {[2, 3, 4].map((n) => (
        <button key={n} onClick={() => changeCount(n)}
          className="px-3 sm:px-4 py-1.5 rounded-full text-sm font-bold border-2 transition-all"
          style={preflopCount === n
            ? { borderColor: GOLD, background: `${GOLD}1f`, color: GOLD }
            : { borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
          {ui.playersBtn(n)}
        </button>
      ))}
      <span className="w-px h-5 bg-border mx-0.5" aria-hidden />
      <button onClick={toggleQuiz} aria-pressed={quiz}
        className="px-3 sm:px-4 py-1.5 rounded-full text-sm font-bold border-2 transition-all whitespace-nowrap"
        style={quiz
          ? { borderColor: GOLD, background: GOLD, color: "#000" }
          : { borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
        {ui.quizToggle}
      </button>
    </div>
  );

  if (!sim || !rec) {
    return (
      <>
        <p className="text-center text-[11px] text-muted-foreground mb-1.5">{ui.tableNote}</p>
        {controls("mb-4")}
        <div className="rounded-3xl p-16 text-center text-sm text-white/70" style={{ background: FELT, border: `2px solid ${GOLD}44` }}>
          🃏 {ui.loading}
        </div>
      </>
    );
  }

  const liveOpponents = rec.opponentsBefore - rec.foldedSlots.length;
  /** 내 드로우 완성 카드 수 — 지금 보이는 보드 기준 */
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

  return (
    <>
      <p className="hidden lg:block text-center text-[11px] text-muted-foreground mb-1.5">{ui.tableNote}</p>
      {controls("mb-2 lg:mb-4")}

      {/* ── 넓은 화면(lg↑)에서는 본문을 반으로: 좌 = 테이블 / 우 = 승률·팟오즈·버튼 전부 ──
          ★2026-08-05: 처음엔 테이블을 전체 폭에 두고 **아래 패널만** 2단으로 나눴는데,
            사장님이 원한 건 *"본문칸을 반으로 나눠 왼쪽 테이블·오른쪽 버튼들"* 이었다.
            테이블과 버튼이 위아래로 있으면 결국 스크롤해야 한다. */}
      <div className="lg:grid lg:grid-cols-[404px_minmax(0,1fr)] lg:gap-4 lg:items-start">

      {/* ── 좌: 테이블 ──
          ★좌석 배치가 화면에 따라 다르다. 같은 배치를 양쪽에 쓰면 한쪽이 반드시 망가진다.
            · **모바일(<lg)**: 위아래로 쌓이니 **세로가 비싸다** → 3줄(한 줄 3석)로 낮고 넓게
            · **데스크톱(lg↑)**: 좌우로 나뉘어 **가로가 비싸다** → 5줄(한 줄 2석)로 좁고 길게
            좌석 순서는 둘 다 시계 방향으로 같다(slot 1·2·3·4·5, 0=나).
            DOM을 두 벌 그리고 CSS로 하나만 보이게 한다 — 미디어쿼리로 JS 분기하면
            서버 렌더와 첫 클라이언트 렌더가 갈려 하이드레이션이 깨진다. */}
      <div className="mb-2 lg:mb-0 mx-auto w-full max-w-[404px] md:max-w-[560px] lg:max-w-none" style={{
        padding: 9, borderRadius: "47% / 41%",
        background: "linear-gradient(160deg,#6b4a29 0%,#4a3319 55%,#37260f 100%)",
        boxShadow: "0 16px 44px rgba(0,0,0,0.42)",
      }}>
        {/* ★S-034 ⑤ (2026-10-11): 폰 390×844에서 팟오즈 박스가 고정 버튼 밑에 깔렸다(실측 50px).
            모바일 높이·위아래 여백을 줄여 «테이블→승률→팟오즈→버튼»을 첫 화면에 다시 넣는다 */}
        <div className="relative flex flex-col items-center justify-between min-h-[290px] py-2 lg:py-3 lg:min-h-[522px]"
          style={{
            borderRadius: "46% / 40%", background: FELT,
            border: `2px solid ${GOLD}66`, boxShadow: "inset 0 3px 44px rgba(0,0,0,0.5)",
            paddingLeft: 6, paddingRight: 6,
          }}>

          {/* ── 모바일: 위 3석 ── */}
          <div className="flex w-full justify-between items-start px-3 sm:px-8 lg:hidden">
            {renderSeat(2)}{renderSeat(3)}{renderSeat(4)}
          </div>

          {/* ── 데스크톱: 맞은편 + 위 양옆 ── */}
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:w-full lg:gap-0">
            {renderSeat(3)}
          </div>
          <div className="hidden lg:flex w-full justify-between items-start px-4">
            {renderSeat(2)}{renderSeat(4)}
          </div>

          {/* 커뮤니티 카드 */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/45">{ui.streets[street]}</div>
            <div className="flex gap-1.5 justify-center">
              {sim.board.map((c, i) => <PlayingCard key={i} card={c} hidden={i >= boardShown} size="hero" />)}
            </div>
            <div className="text-[10px] font-black tabular-nums mt-0.5" style={{ color: GOLD }}>
              {ui.potLabel} {rec.potAfter.toLocaleString()}
            </div>
          </div>

          {/* ── 데스크톱: 아래 양옆 + 나 ── */}
          <div className="hidden lg:flex w-full justify-between items-end px-4">
            {renderSeat(1)}{renderSeat(5)}
          </div>
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:w-full">
            {renderSeat(0)}
          </div>

          {/* ── 모바일: 아래 3석 (가운데가 나) ── */}
          <div className="flex w-full justify-between items-end px-3 sm:px-8 lg:hidden">
            {renderSeat(1)}{renderSeat(0)}{renderSeat(5)}
          </div>
        </div>
      </div>

      {/* ── 우: 승률·팟오즈·산출근거·버튼 전부 ── */}
      <div>

      {/* ── 내 승률 ──
          퀴즈에서 답을 내기 전에는 같은 자리에 짐작 슬라이더를 둔다(카드 높이를 비슷하게 맞춰 폰 첫 화면을 지킨다) */}
      <div className="rounded-xl px-4 py-2 lg:py-2.5 mb-2" style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.08)" }}>
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
          {/* 퀴즈 답을 낸 스트리트 — 내 짐작 자리에 흰 눈금 */}
          {answer && (
            <span className="absolute top-0 bottom-0 w-[3px] -ml-[1.5px] rounded-full" aria-hidden
              style={{ left: `${answer.guess}%`, background: GUESS_COLOR, boxShadow: "0 0 0 1px rgba(0,0,0,0.6)" }} />
          )}
        </div>
        {answer && (
          <p className="text-[11px] font-bold tabular-nums mt-1.5" style={{ color: GUESS_COLOR }}>
            🎯 {ui.quizResult(answer.guess, answer.err.toFixed(1), answer.points)}
            {answer.choiceOk !== null && (
              <span style={{ color: answer.choiceOk ? GOOD : BAD }}>
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
              <span className="text-lg font-black tabular-nums" style={{ color: "#7dd3fc" }}>
                {known.hero.equity.toFixed(1)}%
              </span>
            </div>
            <WinTieLose split={known.hero} ui={ui} className="block text-right" />
            <div className="h-1.5 rounded-full overflow-hidden bg-black/40 mt-1.5">
              <motion.div className="h-full" style={{ background: "#7dd3fc" }}
                initial={false} animate={{ width: `${known.hero.equity}%` }} transition={{ duration: 0.5, ease: "easeOut" }} />
            </div>
            <p className="text-[10px] text-white/40 mt-1.5 leading-snug">
              {ui.revealedNote(Math.abs(known.hero.equity - rec.equity).toFixed(1))}
            </p>
          </div>
        )}
        </>
        )}
        {/* 퀴즈 세션 누적 — 페이지에 있는 동안만(새로고침하면 0).
            폰에서는 짐작하는 동안 숨긴다 — 그 한 줄이 팟오즈 줄을 고정 버튼 밑으로 민다 */}
        {quiz && (
          <div className={`${quizPending ? "hidden lg:flex" : "flex"} items-center justify-between gap-2 mt-2 pt-1.5 border-t border-white/10`}>
            <span className="text-[10.5px] text-white/55 tabular-nums">
              {ui.quizStats({
                hands: stats.hands,
                avgErr: stats.guesses ? (stats.errSum / stats.guesses).toFixed(1) : "—",
                hits: stats.hits, decisions: stats.decisions, points: stats.points,
              })}
            </span>
            {stats.guesses > 0 && (
              <button onClick={() => setStats(EMPTY_STATS)} className="text-[10px] text-white/40 underline shrink-0">
                {ui.quizReset}
              </button>
            )}
          </div>
        )}
      </div>

      {/* ── 팟오즈 ── */}
      <div className="rounded-xl px-4 py-2 lg:py-3 mb-4 border-2"
        style={{ borderColor: quizPending ? "hsl(var(--border))" : rec.verdict === "fold" ? `${BAD}55` : rec.verdict === "call" ? `${GOOD}55` : "hsl(var(--border))" }}>
        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1 lg:mb-1.5">{ui.potOddsTitle}</div>
        {rec.toCall === 0 ? (
          <p className="text-sm text-muted-foreground">{ui.noBet}</p>
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
              style={{ background: "hsl(var(--background))", border: `2px solid ${rec.verdict === "call" ? GOOD : BAD}88`,
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
          {/* 결과 */}
          <motion.div initial={false} animate={{ opacity: 1 }} className="rounded-xl p-4 mb-3 border-2 text-center"
            style={{ borderColor: `${GOLD}66`, background: `${GOLD}0d` }}>
            <div className="font-black text-lg text-foreground">🏆 {resultLabel}</div>
          </motion.div>

          {/* 복기 */}
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

          {chartSeries && <EquityChart series={chartSeries} streets={ui.streets} ui={ui} />}

          <div className="sticky bottom-[70px] z-20 lg:static lg:bottom-auto lg:z-auto">
            <button onClick={newHand}
              className="w-full py-3.5 lg:py-4 rounded-xl font-black text-base text-black transition-all hover:brightness-110 active:scale-[0.98] shadow-xl lg:shadow-none"
              style={{ background: GOLD }}>
              {ui.newHandBtn}
            </button>
          </div>
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
      <div className="rounded-xl px-4 py-3 mt-3" style={{ background: "hsl(var(--muted))" }}>
        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">{ui.formulaTitle}</div>
        {outs.total > 0 ? (
          <>
            <p className="text-sm font-black text-foreground">{ui.outsLabel(outs.total)}</p>
            <p className="text-[11px] text-muted-foreground mb-2.5">
              {ui.outsBreak(outs.flush, outs.straight, outs.flush + outs.straight - outs.total)}
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
        ) : (
          <p className="text-[11.5px] text-muted-foreground leading-relaxed">
            {ui.noDrawNote(rec.basis, (street === 0 ? SAMPLES.preflop : SAMPLES.postflop).toLocaleString())}
          </p>
        )}
      </div>

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
          {ui.ruleText}
        </div>
      )}

      <p className="text-center text-xs text-muted-foreground mt-4">{ui.footer}</p>
    </>
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
