"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/components/seo";
import { dealHands, equities, winnersAt, handCategory, type Card as QuizCard } from "./_equity";

const STREET_LABEL = ["프리플랍", "플랍", "턴", "리버"];
const GOLD = "#d4af37";
const FELT = "radial-gradient(ellipse 120% 90% at 50% 42%, #1f7a52 0%, #12603f 45%, #0b4229 78%, #08331f 100%)";
const VILLAIN_COLORS = ["#e0555e", "#5aa2e0", "#e0a355"]; // 상대 1·2·3

function playerColor(i: number) { return i === 0 ? GOLD : VILLAIN_COLORS[(i - 1) % 3]; }
function playerTag(i: number) { return i === 0 ? "A" : ["B", "C", "D"][(i - 1) % 3]; }
function playerName(i: number) { return i === 0 ? "나" : `상대${i}`; }

interface Sim {
  hands: QuizCard[][];
  board: QuizCard[];
  eq: { preflop: number[]; flop: number[]; turn: number[] };
  winners: number[];
  categories: string[];
}

function makeSim(numPlayers: number): Sim {
  const { hands, board } = dealHands(numPlayers);
  return {
    hands, board,
    eq: {
      preflop: equities(hands, []),
      flop: equities(hands, board.slice(0, 3)),
      turn: equities(hands, board.slice(0, 4)),
    },
    winners: winnersAt(hands, board),
    categories: hands.map((h) => handCategory(h, board)),
  };
}

// ── 진짜 플레잉 카드 ──
function PlayingCard({ card, hidden, small }: { card?: QuizCard; hidden?: boolean; small?: boolean }) {
  const w = small ? 34 : 44;
  const h = small ? 48 : 62;
  if (hidden || !card) {
    return (
      <div style={{
        width: w, height: h, borderRadius: 5, flexShrink: 0,
        background: "linear-gradient(135deg,#7f1d1d 0%,#991b1b 50%,#7f1d1d 100%)",
        border: "2px solid rgba(212,175,55,0.5)", boxShadow: "0 2px 6px rgba(0,0,0,0.45)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: "60%", height: "70%", borderRadius: 2, border: "1px solid rgba(212,175,55,0.45)",
          background: "repeating-linear-gradient(45deg,transparent,transparent 2.5px,rgba(212,175,55,0.16) 2.5px,rgba(212,175,55,0.16) 5px)",
        }} />
      </div>
    );
  }
  const isRed = card.suit === "♥" || card.suit === "♦";
  const color = isRed ? "#dc2626" : "#0f172a";
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

// ── 좌석 (플레이어) ──
function PlayerSeat({ idx, cards, eqPct, isWinner, showEq, small }: {
  idx: number; cards: QuizCard[]; eqPct: number; isWinner: boolean; showEq: boolean; small?: boolean;
}) {
  const color = playerColor(idx);
  return (
    <div className="flex flex-col items-center gap-1" style={{ minWidth: small ? 76 : 96 }}>
      <div className="flex items-center gap-1.5">
        <div style={{
          width: 26, height: 26, borderRadius: "50%", background: "rgba(0,0,0,0.35)",
          border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center",
          color, fontWeight: 900, fontSize: 12, flexShrink: 0,
          boxShadow: isWinner ? `0 0 12px ${color}` : "none",
        }}>{playerTag(idx)}</div>
        <span className="text-[10px] font-black" style={{ color }}>{playerName(idx)}</span>
        {isWinner && <span className="text-[10px]">🏆</span>}
      </div>
      <div className="flex gap-1">{cards.map((c, i) => <PlayingCard key={i} card={c} small={small} />)}</div>
      <div className="h-4 flex items-center">
        {showEq && <span className="text-[13px] font-black tabular-nums" style={{ color }}>{Math.round(eqPct)}%</span>}
      </div>
    </div>
  );
}

export default function WinRateQuizClient() {
  const [numPlayers, setNumPlayers] = useState(3);
  const [sim, setSim] = useState<Sim | null>(null);
  const [street, setStreet] = useState(0); // 0 프리플랍, 1 플랍, 2 턴, 3 리버

  useEffect(() => {
    if (sim !== null) return;
    const t = setTimeout(() => setSim(makeSim(numPlayers)), 30);
    return () => clearTimeout(t);
  }, [sim, numPlayers]);

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
  const changePlayers = useCallback((n: number) => { setNumPlayers(n); setStreet(0); setSim(null); }, []);

  const winnerLabel = useMemo(() => {
    if (!sim) return "";
    const w = sim.winners;
    if (w.length > 1) return `스플릿 — ${w.map((i) => playerName(i)).join(" · ")} 무승부`;
    const i = w[0];
    return `${playerName(i)}(${playerTag(i)}) 승리 · ${sim.categories[i]}`;
  }, [sim]);

  const villains = sim ? sim.hands.map((_, i) => i).filter((i) => i !== 0) : [];

  return (
    <>
      <SEO
        title="홀덤 승률 시뮬레이터 — 카드가 열릴 때마다 승률이 바뀐다 | 홀덤마스터"
        description="두세 명의 핸드를 랜덤으로 돌려, 프리플랍·플랍·턴·리버 카드가 열릴 때마다 각자의 실제 승률이 어떻게 변하는지 눈으로 확인하는 홀덤 승률 시뮬레이터. 정확히 계산된 확률입니다."
        path="/win-rate-quiz"
      />
      <div className="min-h-screen max-w-md mx-auto px-3 py-6">
        {/* 헤더 */}
        <div className="text-center mb-3">
          <h1 className="font-serif text-2xl font-black text-foreground">승률 시뮬레이터 🃏</h1>
          <p className="text-xs text-muted-foreground mt-0.5">카드가 열릴 때마다 승률이 어떻게 바뀔까?</p>
        </div>

        {/* 인원 선택 */}
        <div className="flex justify-center gap-2 mb-4">
          {[2, 3, 4].map((n) => (
            <button key={n} onClick={() => changePlayers(n)}
              className="px-4 py-1.5 rounded-full text-sm font-bold border-2 transition-all"
              style={numPlayers === n
                ? { borderColor: GOLD, background: `${GOLD}1f`, color: GOLD }
                : { borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
              {n}인
            </button>
          ))}
        </div>

        {!sim ? (
          <div className="rounded-3xl p-16 text-center text-sm text-white/70" style={{ background: FELT, border: `2px solid ${GOLD}44` }}>
            🃏 카드 섞고 승률 계산 중…
          </div>
        ) : (
          <>
            {/* ── 포커 테이블 ── */}
            <div className="relative rounded-[2rem] px-3 pt-4 pb-4 mb-4"
              style={{ background: FELT, border: `3px solid ${GOLD}`, boxShadow: "inset 0 2px 30px rgba(0,0,0,0.45), 0 14px 40px rgba(0,0,0,0.35)" }}>

              {/* 상대들 (상단) */}
              <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mb-2">
                {villains.map((i) => (
                  <PlayerSeat key={i} idx={i} cards={sim.hands[i]} eqPct={streetEq[i]}
                    isWinner={isRiver && sim.winners.includes(i)} showEq small />
                ))}
              </div>

              {/* 보드 (중앙) */}
              <div className="rounded-2xl py-3 px-2 my-1" style={{ background: "rgba(0,0,0,0.18)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-center text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 mb-2">
                  {STREET_LABEL[street]}
                </div>
                <div className="flex gap-1.5 justify-center">
                  {sim.board.map((c, i) => <PlayingCard key={i} card={c} hidden={i >= boardShown} />)}
                </div>
              </div>

              {/* 나 (하단) */}
              <div className="flex justify-center mt-2">
                <PlayerSeat idx={0} cards={sim.hands[0]} eqPct={streetEq[0]}
                  isWinner={isRiver && sim.winners.includes(0)} showEq />
              </div>
            </div>

            {/* ── 멀티 승률 바 ── */}
            <div className="rounded-xl px-3 py-2.5 mb-4" style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">승률 · {STREET_LABEL[street]}</span>
                <span className="text-[10px] text-white/40">정확 계산</span>
              </div>
              <div className="h-4 rounded-full overflow-hidden flex bg-black/30">
                {sim.hands.map((_, i) => (
                  <motion.div key={i} className="h-full" style={{ background: playerColor(i) }}
                    initial={false} animate={{ width: `${streetEq[i]}%` }} transition={{ duration: 0.6, ease: "easeOut" }} />
                ))}
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5">
                {sim.hands.map((_, i) => (
                  <span key={i} className="text-[11px] font-bold" style={{ color: playerColor(i) }}>
                    {playerName(i)} {Math.round(streetEq[i])}%
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
                  {sim.hands.map((_, i) => (
                    <span key={i} className="inline-block mx-1.5">
                      <b style={{ color: playerColor(i) }}>{playerName(i)}</b>: {sim.categories[i]}
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
                {STREET_LABEL[street + 1]} 공개 →
              </button>
            ) : (
              <button onClick={newHand}
                className="w-full py-4 rounded-xl font-black text-base text-black transition-all hover:brightness-110 active:scale-[0.98]"
                style={{ background: GOLD }}>
                새 핸드 돌리기 🔄
              </button>
            )}

            <p className="text-center text-xs text-muted-foreground mt-4">
              직접 계산해보고 싶다면{" "}
              <a href="/calculator" className="text-primary underline">홀덤 확률 계산기 →</a>
              {" · "}
              <a href="/blog/holdem-probability" className="text-primary underline">확률 개념 배우기</a>
            </p>
          </>
        )}
      </div>
    </>
  );
}
