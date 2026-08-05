"use client";

import { useState, useMemo, useEffect, useCallback, type ReactNode } from "react";
import { motion } from "framer-motion";
import { describeHand, type Card as QuizCard, type HandNames } from "./_equity";
import { makeTableSim, positionAt, type TableSim } from "./_table";

/**
 * 승률 시뮬레이터 테이블 UI — **한국어판·영어판이 공유한다.**
 *
 * ★왜 공유하나 (2026-08-05)
 *   원래 두 클라이언트가 UI를 통째로 복사해 갖고 있었다. 6인 테이블로 바꾸면서
 *   같은 로직을 두 벌 두면 다음 수정 때 한쪽만 고쳐져 갈라진다 —
 *   영어판 파일이 확률 엔진에 대해 스스로 경고하던 바로 그 문제다.
 *   그래서 **언어별로 다른 건 QuizUI(문자열)뿐**이고, 좌석·포지션·계산은 한 벌이다.
 * ★확률 계산은 이 파일에 한 줄도 없다. 전부 _equity.ts(§13 검증 통과분)에 있다.
 */

const GOLD = "#d4af37";
const FELT = "radial-gradient(ellipse 120% 90% at 50% 42%, #1f7a52 0%, #12603f 45%, #0b4229 78%, #08331f 100%)";
const VILLAIN_COLORS = ["#e0555e", "#5aa2e0", "#e0a355"]; // 상대 1·2·3
const MUTED = "rgba(255,255,255,0.3)";

function playerColor(k: number) { return k === 0 ? GOLD : VILLAIN_COLORS[(k - 1) % 3]; }

export interface QuizUI {
  /** 족보 이름표 (_equity.ts의 KO_NAMES / EN_NAMES) */
  names: HandNames;
  /** 프리플랍 · 플랍 · 턴 · 리버 */
  streets: readonly [string, string, string, string];
  /** "나" / "You" */
  hero: string;
  /** "폴드" / "Folded" */
  folded: string;
  /** 인원 버튼 위 설명 */
  tableNote: string;
  playersBtn: (n: number) => string;
  loading: string;
  /** "승률" / "Equity" */
  equityWord: string;
  methodNote: string;
  revealBtn: (nextStreet: string) => string;
  newHandBtn: string;
  splitLabel: (names: string[]) => string;
  winLabel: (name: string, category: string) => string;
  footer: ReactNode;
}

// ── 플레잉 카드 ──────────────────────────────────────────────────────────────
type CardSize = "hero" | "seat" | "fold";
const CARD_W: Record<CardSize, number> = { hero: 44, seat: 34, fold: 26 };
const CARD_H: Record<CardSize, number> = { hero: 62, seat: 48, fold: 36 };

function PlayingCard({ card, hidden, size = "seat" }: { card?: QuizCard; hidden?: boolean; size?: CardSize }) {
  const w = CARD_W[size];
  const h = CARD_H[size];
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

/** 포지션 뱃지 — 원 안에 UTG·BTN 같은 좌석 이름이 들어간다 */
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

/** 딜러 버튼 */
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
function Seat({ pos, isBtn, isHero, heroWord, cards, eqPct, showEq, isWinner, color, label, isDead, foldWord }: {
  pos: string; isBtn: boolean; isHero: boolean; heroWord: string;
  cards?: QuizCard[]; eqPct?: number; showEq?: boolean; isWinner?: boolean;
  color: string; label?: string; isDead?: boolean; foldWord?: string;
}) {
  const folded = !cards;
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
          : cards.map((c, i) => <PlayingCard key={i} card={c} size={size} />)}
      </div>
      <div className="h-4 flex items-center">
        {folded
          ? <span className="text-[9px] font-bold" style={{ color: MUTED }}>{foldWord}</span>
          : showEq && <span className="text-[13px] font-black tabular-nums" style={{ color }}>{Math.round(eqPct ?? 0)}%</span>}
      </div>
      {label && (
        <div className="text-[8.5px] font-semibold leading-tight text-center px-0.5"
          style={{ color: isDead ? "#f87171" : "rgba(255,255,255,0.72)", maxWidth: isHero ? 108 : 86 }}>
          {label}
        </div>
      )}
    </div>
  );
}

// ── 본체 ────────────────────────────────────────────────────────────────────
export default function WinRateSimulator({ ui }: { ui: QuizUI }) {
  const [showdownCount, setShowdownCount] = useState(3);
  const [sim, setSim] = useState<TableSim | null>(null);
  const [street, setStreet] = useState(0); // 0 프리플랍, 1 플랍, 2 턴, 3 리버

  useEffect(() => {
    if (sim !== null) return;
    const t = setTimeout(() => setSim(makeTableSim(showdownCount, ui.names)), 30);
    return () => clearTimeout(t);
  }, [sim, showdownCount, ui.names]);

  const streetEq = useMemo(() => {
    if (!sim) return [];
    if (street === 0) return sim.eq.preflop;
    if (street === 1) return sim.eq.flop;
    if (street === 2) return sim.eq.turn;
    const share = 100 / sim.winners.length;
    return sim.hands.map((_, i) => (sim.winners.includes(i) ? share : 0));
  }, [sim, street]);

  const boardShown = street === 0 ? 0 : street === 1 ? 3 : street === 2 ? 4 : 5;
  const isRiver = street === 3;

  const nextStreet = useCallback(() => setStreet((s) => Math.min(s + 1, 3)), []);
  const newHand = useCallback(() => { setStreet(0); setSim(null); }, []);
  const changeCount = useCallback((n: number) => { setShowdownCount(n); setStreet(0); setSim(null); }, []);

  /** 승률 바·결과에서 쓰는 이름: 나는 "나(BTN)", 상대는 포지션 그대로 */
  const nameOf = useCallback((k: number) => {
    if (!sim) return "";
    const pos = positionAt(sim.heroPos, sim.activeSlots[k]);
    return k === 0 ? `${ui.hero}(${pos})` : pos;
  }, [sim, ui.hero]);

  const winnerLabel = useMemo(() => {
    if (!sim) return "";
    const w = sim.winners;
    if (w.length > 1) return ui.splitLabel(w.map(nameOf));
    return ui.winLabel(nameOf(w[0]), sim.categories[w[0]]);
  }, [sim, nameOf, ui]);

  /** 좌석 하나를 그린다 — 폴드한 좌석이면 카드 없이 */
  const renderSeat = (slot: number) => {
    if (!sim) return null;
    const pos = positionAt(sim.heroPos, slot);
    const k = sim.activeSlots.indexOf(slot);
    const isBtn = pos === "BTN";
    if (k < 0) {
      return <Seat key={slot} pos={pos} isBtn={isBtn} isHero={false} heroWord={ui.hero}
        color={MUTED} foldWord={ui.folded} />;
    }
    const dead = (street === 1 || street === 2) && streetEq[k] === 0;
    const label = describeHand(sim.hands[k], sim.board.slice(0, boardShown), dead, ui.names);
    return <Seat key={slot} pos={pos} isBtn={isBtn} isHero={slot === 0} heroWord={ui.hero}
      cards={sim.hands[k]} eqPct={streetEq[k]} showEq
      isWinner={isRiver && sim.winners.includes(k)} color={playerColor(k)}
      label={label} isDead={dead && label === ui.names.drawingDead} />;
  };

  return (
    <>
      {/* 인원 선택 */}
      <p className="text-center text-[11px] text-muted-foreground mb-1.5">{ui.tableNote}</p>
      <div className="flex justify-center gap-2 mb-4">
        {[2, 3, 4].map((n) => (
          <button key={n} onClick={() => changeCount(n)}
            className="px-4 py-1.5 rounded-full text-sm font-bold border-2 transition-all"
            style={showdownCount === n
              ? { borderColor: GOLD, background: `${GOLD}1f`, color: GOLD }
              : { borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
            {ui.playersBtn(n)}
          </button>
        ))}
      </div>

      {!sim ? (
        <div className="rounded-3xl p-16 text-center text-sm text-white/70" style={{ background: FELT, border: `2px solid ${GOLD}44` }}>
          🃏 {ui.loading}
        </div>
      ) : (
        <>
          {/* ── 6좌석 오벌 테이블 ── */}
          {/* ★넓은 화면에서 폭을 열어준다 — 좌석이 6개가 되면서 404px 고정으로는
              가로로 넓은 실제 테이블이 아니라 세로로 긴 계란이 된다 */}
          <div className="mb-4 mx-auto max-w-[404px] md:max-w-[660px]" style={{
            padding: 9, borderRadius: "47% / 41%",
            background: "linear-gradient(160deg,#6b4a29 0%,#4a3319 55%,#37260f 100%)",
            boxShadow: "0 16px 44px rgba(0,0,0,0.42)",
          }}>
            <div className="relative flex flex-col items-center justify-between" style={{
              minHeight: 530, borderRadius: "46% / 40%", background: FELT,
              border: `2px solid ${GOLD}66`, boxShadow: "inset 0 3px 44px rgba(0,0,0,0.5)",
              padding: "14px 6px",
            }}>
              {/* 맞은편 */}
              {renderSeat(3)}

              {/* 위쪽 양옆 */}
              <div className="flex w-full justify-between items-start px-3.5 md:px-14">
                {renderSeat(2)}
                {renderSeat(4)}
              </div>

              {/* 커뮤니티 카드 */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/45">{ui.streets[street]}</div>
                <div className="flex gap-1.5 justify-center">
                  {sim.board.map((c, i) => <PlayingCard key={i} card={c} hidden={i >= boardShown} size="hero" />)}
                </div>
              </div>

              {/* 아래쪽 양옆 */}
              <div className="flex w-full justify-between items-end px-3.5 md:px-14">
                {renderSeat(1)}
                {renderSeat(5)}
              </div>

              {/* 나 */}
              {renderSeat(0)}
            </div>
          </div>

          {/* ── 승률 바 ── */}
          <div className="rounded-xl px-3 py-2.5 mb-4" style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">{ui.equityWord} · {ui.streets[street]}</span>
              <span className="text-[10px] text-white/40">{ui.methodNote}</span>
            </div>
            <div className="h-4 rounded-full overflow-hidden flex bg-black/30">
              {sim.hands.map((_, k) => (
                <motion.div key={k} className="h-full" style={{ background: playerColor(k) }}
                  initial={false} animate={{ width: `${streetEq[k]}%` }} transition={{ duration: 0.6, ease: "easeOut" }} />
              ))}
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5">
              {sim.hands.map((_, k) => (
                <span key={k} className="text-[11px] font-bold" style={{ color: playerColor(k) }}>
                  {nameOf(k)} {Math.round(streetEq[k])}%
                </span>
              ))}
            </div>
          </div>

          {/* 리버 결과 */}
          {isRiver && (
            <motion.div initial={false} animate={{ opacity: 1 }} className="rounded-xl p-4 mb-4 border-2 text-center"
              style={{ borderColor: `${GOLD}66`, background: `${GOLD}0d` }}>
              <div className="font-black text-lg text-foreground mb-1">🏆 {winnerLabel}</div>
              <div className="text-xs text-muted-foreground">
                {sim.hands.map((_, k) => (
                  <span key={k} className="inline-block mx-1.5">
                    <b style={{ color: playerColor(k) }}>{nameOf(k)}</b>: {sim.categories[k]}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* 컨트롤 */}
          {!isRiver ? (
            <button onClick={nextStreet}
              className="w-full py-4 rounded-xl font-black text-base text-black transition-all hover:brightness-110 active:scale-[0.98]"
              style={{ background: GOLD }}>
              {ui.revealBtn(ui.streets[street + 1])}
            </button>
          ) : (
            <button onClick={newHand}
              className="w-full py-4 rounded-xl font-black text-base text-black transition-all hover:brightness-110 active:scale-[0.98]"
              style={{ background: GOLD }}>
              {ui.newHandBtn}
            </button>
          )}

          <p className="text-center text-xs text-muted-foreground mt-4">{ui.footer}</p>
        </>
      )}
    </>
  );
}
