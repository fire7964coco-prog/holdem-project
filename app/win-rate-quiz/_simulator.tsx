"use client";

import { useState, useMemo, useEffect, useCallback, type ReactNode } from "react";
import { motion } from "framer-motion";
import { describeHand, handCategory, winnersAt, type Card as QuizCard, type HandNames } from "./_equity";
import { makeTableSim, positionAt, type TableSim } from "./_table";
import {
  runHand, heroEquityVsKnown, heroOuts, ruleOf24, SAMPLES,
  type HandResult, type StreetRecord, type Action,
} from "./_engine";

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

const GOLD = "#d4af37";
const FELT = "radial-gradient(ellipse 120% 90% at 50% 42%, #1f7a52 0%, #12603f 45%, #0b4229 78%, #08331f 100%)";
const MUTED = "rgba(255,255,255,0.3)";
const LIVE = "#e0555e";
const GOOD = "#4ade80";
const BAD = "#f87171";

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
  basisRandom: string;
  basisRange: string;
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
  outsBreak: (flush: number, straight: number) => string;
  hitLabel: string;
  winLabel2: string;
  /** "9 × 4 − 1" 같은 식 */
  formulaExpr: (outs: number, toCome: number) => string;
  formulaCaveat: string;
  noDrawNote: (samples: string) => string;
  /** 규칙·단서 */
  ruleTitle: string;
  ruleText: ReactNode;
  footer: ReactNode;
}

// ── 카드 ────────────────────────────────────────────────────────────────────
type CardSize = "hero" | "seat" | "fold";
const CARD_W: Record<CardSize, number> = { hero: 44, seat: 34, fold: 26 };
const CARD_H: Record<CardSize, number> = { hero: 62, seat: 48, fold: 36 };

function PlayingCard({ card, hidden, size = "seat" }: { card?: QuizCard; hidden?: boolean; size?: CardSize }) {
  const w = CARD_W[size], h = CARD_H[size];
  if (hidden || !card) {
    const muted = size === "fold";
    return (
      <div style={{
        width: w, height: h, borderRadius: 5, flexShrink: 0, opacity: muted ? 0.5 : 1,
        background: muted
          ? "linear-gradient(135deg,#4b3535 0%,#584040 50%,#4b3535 100%)"
          : "linear-gradient(135deg,#7f1d1d 0%,#991b1b 50%,#7f1d1d 100%)",
        border: `2px solid ${muted ? "rgba(255,255,255,0.18)" : "rgba(212,175,55,0.5)"}`,
        boxShadow: "0 2px 6px rgba(0,0,0,0.45)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: "60%", height: "70%", borderRadius: 2,
          border: `1px solid ${muted ? "rgba(255,255,255,0.14)" : "rgba(212,175,55,0.45)"}`,
          background: `repeating-linear-gradient(45deg,transparent,transparent 2.5px,${muted ? "rgba(255,255,255,0.08)" : "rgba(212,175,55,0.16)"} 2.5px,${muted ? "rgba(255,255,255,0.08)" : "rgba(212,175,55,0.16)"} 5px)`,
        }} />
      </div>
    );
  }
  const isRed = card.suit === "♥" || card.suit === "♦";
  const color = isRed ? "#dc2626" : "#0f172a";
  const small = size !== "hero";
  return (
    <motion.div initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} transition={{ duration: 0.26 }}
      style={{
        width: w, height: h, background: "linear-gradient(160deg,#fff 0%,#f1f5f9 100%)", borderRadius: 5, flexShrink: 0,
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

// ── 좌석 ────────────────────────────────────────────────────────────────────
function Seat({ pos, isBtn, isHero, heroWord, cards, faceDown, folded, isWinner, color, label, isDead, statusText, statusColor }: {
  pos: string; isBtn: boolean; isHero: boolean; heroWord: string;
  cards?: QuizCard[]; faceDown?: boolean; folded?: boolean; isWinner?: boolean;
  color: string; label?: string; isDead?: boolean; statusText?: string; statusColor?: string;
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
      <div className="h-4 flex items-center">
        {statusText && (
          <span className="text-[9.5px] font-bold" style={{ color: statusColor ?? MUTED }}>{statusText}</span>
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
   * 상대 패를 공개했을 때 **그 패들 상대로의** 승률.
   *
   * ★왜 따로 두나 (2026-08-05, 사장님 지적) — 카드를 까도 화면의 승률은 그대로 레인지 기준이라
   *   "보이는 카드와 무관한 숫자"가 된다. 실제로 캡처 스팟에서 레인지 20.1% vs 실제 27.9%로
   *   **7.8%p 벌어졌다.** 두 값을 나란히 보여주면 오해가 사라질 뿐 아니라,
   *   *"모르고 판단하면 20%, 까보니 28%"* 가 이 도구에서 가장 좋은 교육 장면이 된다.
   */
  const [revealedEq, setRevealedEq] = useState<number | null>(null);

  /**
   * ★계산은 스트리트 단위로 흘려보낸다 (2026-08-05 성능 검수에서 고침).
   *   한 번에 다 돌리면 **1.4~1.6초짜리 단일 long task**가 되어 화면이 통째로 얼어붙었다
   *   (중저가 모바일이면 4~6초). MC 루프가 표본 CHUNK개마다 메인스레드를 놓아주고,
   *   프리플랍이 나오는 즉시 화면에 뿌린 뒤 나머지를 이어서 계산한다.
   *
   * 🔴 **`sim`을 이 effect의 의존성으로 두지 말 것.** 안에서 `setSim`을 부르므로 의존성이 바뀌고,
   *   React가 이전 effect를 정리하며 `cancelled = true`를 세워 **계산 결과가 통째로 버려진다**
   *   (화면이 "계산 중…"에서 영영 멈춘다). 동기 코드일 땐 안 드러나다가 async로 바꾸며 터졌다.
   *   새 판은 `handId`를 올려서 돌린다.
   */
  useEffect(() => {
    let cancelled = false;
    const t = setTimeout(async () => {
      const s = makeTableSim(preflopCount);
      if (cancelled) return;
      setSim(s);
      const oppSlots = s.activeSlots.slice(1);
      const r = await runHand(s.hands[0], s.hands.slice(1), oppSlots, s.board, (partial) => {
        if (!cancelled) setStreets(partial);
      });
      if (!cancelled) { setStreets(r.streets); setResult(r); }
    }, 30);
    return () => { cancelled = true; clearTimeout(t); };
  }, [handId, preflopCount]);

  const newHand = useCallback(() => {
    setStreet(0); setReveal(false); setSim(null); setResult(null); setStreets([]); setRevealedEq(null);
    setHandId((id) => id + 1);
  }, []);
  const changeCount = useCallback((n: number) => {
    setStreet(0); setReveal(false); setSim(null); setResult(null); setStreets([]); setRevealedEq(null);
    setPreflopCount(n);
  }, []);

  /** 이 핸드가 실제로 진행된 마지막 스트리트 (전원 폴드면 거기서 끝). 계산 중엔 아직 모른다 */
  const lastStreet = result ? result.streets[result.streets.length - 1].street : 3;
  const rec = streets[Math.min(street, streets.length - 1)] ?? null;
  const boardShown = street === 0 ? 0 : street + 2;
  /** 다음 스트리트가 아직 계산 중인가 */
  const waiting = !result && street + 1 >= streets.length;
  const isEnd = !!result && street >= lastStreet;
  const showdown = isEnd && result?.wonByFoldAt === null;
  const cardsUp = reveal || showdown;

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

  /** 지금 살아 있는 상대들의 실제 홀카드 (공개 승률 계산용) */
  const liveOppHands = useMemo(() => {
    if (!sim) return [];
    return sim.activeSlots
      .filter((slot) => slot !== 0 && !foldedSlots.has(slot))
      .map((slot) => sim.hands[slotToIdx[slot]]);
  }, [sim, foldedSlots, slotToIdx]);

  /**
   * 카드를 공개했을 때만 "그 패들 상대 승률"을 계산한다.
   * 안 봤으면 계산도 안 한다 — 보지도 않을 값에 표본을 쓸 이유가 없다.
   */
  useEffect(() => {
    if (!cardsUp || !sim || !liveOppHands.length) { setRevealedEq(null); return; }
    let cancelled = false;
    setRevealedEq(null);
    (async () => {
      const e = await heroEquityVsKnown(
        sim.hands[0], sim.board.slice(0, boardShown), liveOppHands,
        boardShown === 0 ? SAMPLES.preflop : SAMPLES.postflop
      );
      if (!cancelled) setRevealedEq(e);
    })();
    return () => { cancelled = true; };
  }, [cardsUp, sim, liveOppHands, boardShown]);

  const nameOf = useCallback((slot: number) => {
    if (!sim) return "";
    const pos = positionAt(sim.heroPos, slot);
    return slot === 0 ? `${ui.hero}(${pos})` : pos;
  }, [sim, ui.hero]);

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
    const statusText = isHero ? undefined
      : act === "raise" ? ui.raise
      : act === "call" ? ui.call
      : street === 0 ? undefined : ui.check;

    const label = isHero
      ? describeHand(sim.hands[k], sim.board.slice(0, boardShown), false, ui.names)
      : cardsUp
        ? describeHand(sim.hands[k], sim.board.slice(0, boardShown), false, ui.names)
        : undefined;

    const isWinner = showdown && winnerSlots.some((w) => w.slot === slot);

    return <Seat key={slot} pos={pos} isBtn={isBtn} isHero={isHero} heroWord={ui.hero}
      cards={sim.hands[k]} faceDown={!isHero && !cardsUp}
      color={isHero ? GOLD : LIVE} label={label} isWinner={isWinner}
      statusText={statusText} statusColor={act === "raise" ? BAD : "rgba(255,255,255,0.55)"} />;
  };

  if (!sim || !rec) {
    return (
      <>
        <p className="text-center text-[11px] text-muted-foreground mb-1.5">{ui.tableNote}</p>
        <div className="flex justify-center gap-2 mb-4">
          {[2, 3, 4].map((n) => (
            <button key={n} onClick={() => changeCount(n)}
              className="px-4 py-1.5 rounded-full text-sm font-bold border-2 transition-all"
              style={preflopCount === n
                ? { borderColor: GOLD, background: `${GOLD}1f`, color: GOLD }
                : { borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
              {ui.playersBtn(n)}
            </button>
          ))}
        </div>
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

  return (
    <>
      <p className="text-center text-[11px] text-muted-foreground mb-1.5">{ui.tableNote}</p>
      <div className="flex justify-center gap-2 mb-4">
        {[2, 3, 4].map((n) => (
          <button key={n} onClick={() => changeCount(n)}
            className="px-4 py-1.5 rounded-full text-sm font-bold border-2 transition-all"
            style={preflopCount === n
              ? { borderColor: GOLD, background: `${GOLD}1f`, color: GOLD }
              : { borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
            {ui.playersBtn(n)}
          </button>
        ))}
      </div>

      {/* ── 테이블 ──
          ★2026-08-05: 좌석을 5줄로 쌓아 세로 530px이었다(보드 위 2줄·아래 2줄).
            좌석을 보드 **옆이 아니라 위아래 한 줄씩**으로 모아 3줄로 줄이니 370px가 됐고,
            가로가 세로보다 길어져 실제 포커 테이블에 가까워졌다. 좌석 순서는 그대로 시계 방향이다
            (위 왼쪽→오른쪽 = slot 2·3·4 / 아래 왼쪽→오른쪽 = slot 1·나·5). */}
      <div className="mb-3 mx-auto max-w-[404px] md:max-w-[660px] lg:max-w-[700px]" style={{
        padding: 9, borderRadius: "47% / 41%",
        background: "linear-gradient(160deg,#6b4a29 0%,#4a3319 55%,#37260f 100%)",
        boxShadow: "0 16px 44px rgba(0,0,0,0.42)",
      }}>
        <div className="relative flex flex-col items-center justify-between" style={{
          minHeight: 372, borderRadius: "46% / 40%", background: FELT,
          border: `2px solid ${GOLD}66`, boxShadow: "inset 0 3px 44px rgba(0,0,0,0.5)",
          padding: "14px 6px",
        }}>
          {/* 위 3좌석 */}
          <div className="flex w-full justify-between items-start px-0.5 md:px-16 lg:px-32">
            {renderSeat(2)}{renderSeat(3)}{renderSeat(4)}
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

          {/* 아래 3좌석 — 가운데가 나 */}
          <div className="flex w-full justify-between items-end px-0.5 md:px-16 lg:px-32">
            {renderSeat(1)}{renderSeat(0)}{renderSeat(5)}
          </div>
        </div>
      </div>

      {/* ── 아래는 넓은 화면에서 2단: 좌 = 승률·팟오즈·버튼 / 우 = 승률이 어떻게 나왔나 ── */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start">
      <div>

      {/* ── 내 승률 ── */}
      <div className="rounded-xl px-4 py-2.5 mb-2.5" style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex justify-between items-baseline">
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
            {ui.myEquity} · {ui.streets[street]}
          </span>
          <span className="text-[10px] text-white/40">
            {rec.basis === "random" ? ui.basisRandom : ui.basisRange}
          </span>
        </div>
        <div className="flex items-end gap-2 mt-1">
          <span className="text-4xl font-black tabular-nums leading-none" style={{ color: GOLD }}>
            {rec.equity.toFixed(1)}<span className="text-2xl">%</span>
          </span>
          <span className="text-[11px] text-white/50 pb-1">{ui.vsOpponents(liveOpponents)}</span>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden bg-black/40 mt-2">
          <motion.div className="h-full" style={{ background: GOLD }}
            initial={false} animate={{ width: `${rec.equity}%` }} transition={{ duration: 0.5, ease: "easeOut" }} />
        </div>

        {/* 카드를 공개했을 때만 — 같은 화면의 두 숫자가 왜 다른지가 이 도구의 핵심 교육 장면이다 */}
        {cardsUp && revealedEq !== null && (
          <div className="mt-2.5 pt-2.5 border-t border-white/10">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[11px] text-white/55">{ui.revealedLabel}</span>
              <span className="text-lg font-black tabular-nums" style={{ color: "#7dd3fc" }}>
                {revealedEq.toFixed(1)}%
              </span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden bg-black/40 mt-1.5">
              <motion.div className="h-full" style={{ background: "#7dd3fc" }}
                initial={false} animate={{ width: `${revealedEq}%` }} transition={{ duration: 0.5, ease: "easeOut" }} />
            </div>
            <p className="text-[10px] text-white/40 mt-1.5 leading-snug">
              {ui.revealedNote(Math.abs(revealedEq - rec.equity).toFixed(1))}
            </p>
          </div>
        )}
      </div>

      {/* ── 팟오즈 ── */}
      <div className="rounded-xl px-4 py-3 mb-4 border-2"
        style={{ borderColor: rec.verdict === "fold" ? `${BAD}55` : rec.verdict === "call" ? `${GOOD}55` : "hsl(var(--border))" }}>
        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">{ui.potOddsTitle}</div>
        {rec.toCall === 0 ? (
          <p className="text-sm text-muted-foreground">{ui.noBet}</p>
        ) : (
          <>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {ui.potBeforeLabel} <b className="text-foreground tabular-nums">{rec.potBefore.toLocaleString()}</b>
              {" · "}{ui.toCallLabel} <b className="text-foreground tabular-nums">{rec.toCall.toLocaleString()}</b>
            </p>
            <p className="text-xs mt-1 tabular-nums text-muted-foreground">
              {ui.requiredLabel} = {rec.toCall.toLocaleString()} ÷ {rec.potAfter.toLocaleString()} ={" "}
              <b className="text-foreground">{rec.required!.toFixed(oddsDigits)}%</b>
            </p>
            <p className="text-sm font-black mt-1.5" style={{ color: rec.verdict === "call" ? GOOD : BAD }}>
              {rec.equity.toFixed(oddsDigits)}% {rec.verdict === "call" ? "≥" : "<"} {rec.required!.toFixed(oddsDigits)}% →{" "}
              {rec.verdict === "call" ? ui.verdictCall : ui.verdictFold}
            </p>
            {rec.verdict === "fold" && street < 3 && (
              <p className="text-[11px] text-muted-foreground mt-1">{ui.impliedNote}</p>
            )}
          </>
        )}
      </div>

      {/* ── 진행 ── */}
      {!isEnd ? (
        <button onClick={() => setStreet((s) => Math.min(s + 1, streets.length - 1))}
          disabled={waiting}
          className="w-full py-4 rounded-xl font-black text-base text-black transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50 disabled:cursor-wait"
          style={{ background: GOLD }}>
          {waiting ? `⏳ ${ui.loading}` : ui.revealBtn(ui.streets[street + 1])}
        </button>
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
              <table className="w-full text-xs tabular-nums">
                <thead>
                  <tr className="text-muted-foreground text-left">
                    {ui.reviewCols.map((c, i) => <th key={i} className="font-semibold pb-1 pr-3 whitespace-nowrap">{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {streets.map((r) => (
                    <tr key={r.street} className="border-t" style={{ borderColor: "hsl(var(--border))" }}>
                      <td className="py-1 pr-3 font-bold whitespace-nowrap">{ui.streets[r.street]}</td>
                      <td className="py-1 pr-3">{r.equity.toFixed(1)}%</td>
                      <td className="py-1 pr-3">{r.required === null ? "—" : `${r.required.toFixed(1)}%`}</td>
                      <td className="py-1 font-bold whitespace-nowrap"
                        style={{ color: r.verdict === "fold" ? BAD : r.verdict === "call" ? GOOD : "hsl(var(--muted-foreground))" }}>
                        {r.verdict === "free" ? "—" : r.verdict === "call" ? ui.verdictCall : ui.verdictFold}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-2.5 font-bold" style={{ color: result.firstMistake !== null ? BAD : GOOD }}>
              {result.firstMistake !== null ? ui.reviewMistake(ui.streets[result.firstMistake]) : ui.reviewNoMistake}
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">{ui.reviewInvested(result.invested, result.finalPot)}</p>
          </div>

          <button onClick={newHand}
            className="w-full py-4 rounded-xl font-black text-base text-black transition-all hover:brightness-110 active:scale-[0.98]"
            style={{ background: GOLD }}>
            {ui.newHandBtn}
          </button>
        </>
      )}

      {/* 상대 카드 보기 */}
      {!showdown && (
        <button onClick={() => setReveal((v) => !v)}
          className="w-full mt-2 py-2.5 rounded-xl text-xs font-bold border-2 transition-all"
          style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
          {reveal ? ui.hideCards : ui.showCards}
        </button>
      )}

      </div>{/* /좌 */}

      {/* ── 우: 이 승률은 어떻게 나왔나 ──
          ★암산(Rule of 2/4)과 시뮬레이션 승률은 **다른 것을 잰다.**
            앞은 "드로우를 맞출 확률", 뒤는 "팟을 이길 확률"이다. 맞춰도 상대가 더 좋아지면 지고,
            못 맞춰도 이길 때가 있다. 그 차이를 설명 없이 나란히 두면 오히려 틀린 걸 가르치게 된다. */}
      <div className="rounded-xl px-4 py-3 mt-3 lg:mt-0" style={{ background: "hsl(var(--muted))" }}>
        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">{ui.formulaTitle}</div>
        {outs.total > 0 ? (
          <>
            <p className="text-sm font-black text-foreground">{ui.outsLabel(outs.total)}</p>
            <p className="text-[11px] text-muted-foreground mb-2.5">{ui.outsBreak(outs.flush, outs.straight)}</p>

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
                <span className="text-lg font-black tabular-nums text-primary">{rec.equity.toFixed(1)}%</span>
              </div>
            </div>

            <p className="text-[10.5px] text-muted-foreground leading-snug">{ui.formulaCaveat}</p>
          </>
        ) : (
          <p className="text-[11.5px] text-muted-foreground leading-relaxed">
            {ui.noDrawNote(SAMPLES.postflop.toLocaleString())}
          </p>
        )}
      </div>

      </div>{/* /2단 */}

      {/* 규칙·단서 */}
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
