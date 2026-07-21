"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/seo";
import { dealHand, equity, handCategory, showdown, type Card as QuizCard } from "./_equity";

// 승률 → 어느 쪽이 앞서는가 (±3%는 "거의 반반")
type Side = "hero" | "tie" | "villain";
function leaderOf(heroEquity: number): Side {
  if (heroEquity >= 53) return "hero";
  if (heroEquity <= 47) return "villain";
  return "tie";
}

const STREET_LABEL = ["프리플랍", "플랍", "턴", "리버"];
const TOTAL_SCENARIOS = 6; // 한 게임에 6핸드
const GUESSES_PER = 3;     // 프리플랍·플랍·턴

const GOLD = "#d4af37";
const FELT = "radial-gradient(ellipse 120% 90% at 50% 40%, #1f7a52 0%, #12603f 45%, #0b4229 78%, #08331f 100%)";

// RNG로 딜한 한 핸드 + 미리 계산해 둔 스트리트별 이퀴티/결과
interface DealtHand {
  hero: QuizCard[];
  villain: QuizCard[];
  board: QuizCard[];
  equity: { preflop: number; flop: number; turn: number };
  riverWinner: Side;
  heroHand: string;
  villainHand: string;
  lesson: string;
}

// 리버 피드백 자동 생성 — 계산된 수치·족보만 사용 (§13)
function makeLesson(preflop: number, winner: Side, heroHand: string, villainHand: string): string {
  const p = Math.round(preflop);
  const preLeader = leaderOf(preflop);
  const hands = `(나: ${heroHand} / 상대: ${villainHand})`;
  if (winner === "tie") {
    return `양쪽 베스트 5장이 완전히 같아 팟을 나누는 스플릿이에요. ${hands}`;
  }
  const winnerName = winner === "hero" ? "내가" : "상대(B)가";
  const winnerHand = winner === "hero" ? heroHand : villainHand;
  if (preLeader === "tie") {
    return `프리플랍은 ${p}% : ${100 - p}%로 거의 반반이었지만, 리버에서 ${winnerName} ${winnerHand}(으)로 승리했어요. ${hands}`;
  }
  if (preLeader === winner) {
    const leadPct = winner === "hero" ? p : 100 - p;
    return `프리플랍 ${leadPct}% 우세가 리버까지 그대로 이어졌어요. ${winnerName} ${winnerHand}(으)로 승리. ${hands}`;
  }
  const preLeaderName = preLeader === "hero" ? "내가" : "상대(B)가";
  const leadPct = preLeader === "hero" ? p : 100 - p;
  return `프리플랍엔 ${preLeaderName} ${leadPct}% 앞섰지만, 리버에서 ${winnerName} ${winnerHand}(으)로 역전! ${hands}`;
}

// 새 핸드 딜 + 전 스트리트 이퀴티 일괄 계산 (프리플랍 MC 100k ≈ 수백 ms, 핸드당 1회)
function makeHand(): DealtHand {
  const { hero, villain, board } = dealHand();
  const preflop = equity(hero, villain, []);
  const flop = equity(hero, villain, board.slice(0, 3));
  const turn = equity(hero, villain, board.slice(0, 4));
  const riverWinner = showdown(hero, villain, board);
  const heroHand = handCategory(hero, board);
  const villainHand = handCategory(villain, board);
  return {
    hero, villain, board,
    equity: { preflop, flop, turn },
    riverWinner, heroHand, villainHand,
    lesson: makeLesson(preflop, riverWinner, heroHand, villainHand),
  };
}

// ── 진짜 플레잉 카드 룩 ────────────────────────────────────────────────
function PlayingCard({ card, hidden, small }: { card?: QuizCard; hidden?: boolean; small?: boolean }) {
  const w = small ? 40 : 46;
  const h = small ? 56 : 64;
  if (hidden || !card) {
    return (
      <div style={{
        width: w, height: h, borderRadius: 6, flexShrink: 0,
        background: "linear-gradient(135deg,#7f1d1d 0%,#991b1b 50%,#7f1d1d 100%)",
        border: "2px solid rgba(212,175,55,0.55)",
        boxShadow: "0 3px 8px rgba(0,0,0,0.45)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: "62%", height: "72%", borderRadius: 3,
          border: "1px solid rgba(212,175,55,0.5)",
          background: "repeating-linear-gradient(45deg,transparent,transparent 3px,rgba(212,175,55,0.18) 3px,rgba(212,175,55,0.18) 6px)",
        }} />
      </div>
    );
  }
  const isRed = card.suit === "♥" || card.suit === "♦";
  const color = isRed ? "#dc2626" : "#0f172a";
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} transition={{ duration: 0.28 }}
      style={{
        width: w, height: h, background: "linear-gradient(160deg,#ffffff 0%,#f1f5f9 100%)", borderRadius: 6, flexShrink: 0,
        position: "relative", border: "1px solid #cbd5e1", boxShadow: "0 3px 9px rgba(0,0,0,0.4)",
      }}>
      <div style={{ position: "absolute", top: 3, left: 4, lineHeight: 1, textAlign: "center", color }}>
        <div style={{ fontSize: small ? 11 : 12, fontWeight: 900, letterSpacing: "-1px" }}>{card.rank}</div>
        <div style={{ fontSize: small ? 9 : 10, marginTop: -1 }}>{card.suit}</div>
      </div>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color, fontSize: small ? 20 : 24, opacity: 0.9 }}>
        {card.suit}
      </div>
    </motion.div>
  );
}

function Seat({ tag, label, active, isHero }: { tag: string; label: string; active: boolean; isHero: boolean }) {
  const accent = isHero ? GOLD : "#e05555";
  return (
    <div className="flex items-center gap-2">
      <div style={{
        width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
        background: "rgba(0,0,0,0.35)", border: `2px solid ${accent}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: accent, fontWeight: 900, fontSize: 14,
        boxShadow: active ? `0 0 12px ${accent}` : "none", transition: "box-shadow .3s",
      }}>{tag}</div>
      <div className="leading-tight">
        <div className="text-[11px] font-black" style={{ color: accent }}>{label}</div>
        <div className="text-[9px] text-white/50 uppercase tracking-wider">{isHero ? "YOU" : "OPPONENT"}</div>
      </div>
    </div>
  );
}

function getGrade(pct: number) {
  if (pct >= 90) return { emoji: "🏆", label: "승률 감각 프로급!", color: "#d4af37" };
  if (pct >= 70) return { emoji: "🔥", label: "고수 — 아주 좋아요", color: "#22c55e" };
  if (pct >= 50) return { emoji: "👍", label: "중급 — 감이 잡혀요", color: "#60a5fa" };
  if (pct >= 30) return { emoji: "📚", label: "연습 필요 — 다시!", color: "#f59e0b" };
  return { emoji: "💪", label: "입문 — 승률부터 익히자", color: "#ef4444" };
}

export default function WinRateQuizClient() {
  const [hand, setHand] = useState<DealtHand | null>(null);
  const [sIdx, setSIdx] = useState(0);
  const [street, setStreet] = useState(0);       // 0 프리플랍, 1 플랍, 2 턴, 3 리버(결과)
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<Side | null>(null);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<"playing" | "done">("playing");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (hand !== null || phase !== "playing") return;
    const t = setTimeout(() => setHand(makeHand()), 30);
    return () => clearTimeout(t);
  }, [hand, phase]);

  const sc = hand;

  const streetEquity = useMemo(() => {
    if (!sc) return 50;
    if (street === 0) return sc.equity.preflop;
    if (street === 1) return sc.equity.flop;
    if (street === 2) return sc.equity.turn;
    return sc.riverWinner === "hero" ? 100 : sc.riverWinner === "villain" ? 0 : 50;
  }, [sc, street]);

  const boardShown = street === 0 ? 0 : street === 1 ? 3 : street === 2 ? 4 : 5;
  const correct: Side = leaderOf(streetEquity);
  const isRiver = street === 3;
  const revealEquity = answered || isRiver;

  const guess = useCallback((choice: Side) => {
    if (answered || street > 2 || !sc) return;
    setSelected(choice);
    if (choice === correct) setScore(s => s + 1);
    setAnswered(true);
  }, [answered, street, correct, sc]);

  const next = useCallback(() => {
    if (street < 2) { setStreet(s => s + 1); setAnswered(false); setSelected(null); return; }
    if (street === 2) { setStreet(3); setAnswered(false); setSelected(null); return; }
    if (sIdx + 1 >= TOTAL_SCENARIOS) { setPhase("done"); return; }
    setSIdx(i => i + 1); setStreet(0); setAnswered(false); setSelected(null); setHand(null);
  }, [street, sIdx]);

  const restart = useCallback(() => {
    setHand(null); setSIdx(0); setStreet(0); setAnswered(false); setSelected(null); setScore(0); setPhase("playing");
  }, []);

  const totalGuesses = TOTAL_SCENARIOS * GUESSES_PER;

  if (phase === "done") {
    const pct = Math.round((score / totalGuesses) * 100);
    const grade = getGrade(pct);
    const shareText = `홀덤 승률 퀴즈 ${score}/${totalGuesses} (${pct}%) 🃏\n"지금 누가 이기고 있나?" 내 승률 감각 → holdemmaster.com/win-rate-quiz`;
    const handleCopy = () => navigator.clipboard.writeText(shareText).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
    return (
      <>
        <SEO title="홀덤 승률 퀴즈 결과 | 홀덤마스터" description={`승률 퀴즈 ${score}/${totalGuesses}점! 나의 홀덤 승률 감각을 확인하세요.`} path="/win-rate-quiz" />
        <div className="min-h-screen flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-md text-center rounded-3xl p-8" style={{ background: FELT, border: `2px solid ${GOLD}55`, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
            <div className="mb-5 inline-flex items-center justify-center w-20 h-20 rounded-full border-2 text-3xl"
              style={{ borderColor: grade.color, background: `${grade.color}22` }}>{grade.emoji}</div>
            <h1 className="font-serif text-3xl font-black text-white mb-1">승률 감각 결과</h1>
            <p className="text-white/60 mb-6 text-sm">{TOTAL_SCENARIOS}핸드 · {totalGuesses}번의 판단</p>
            <div className="text-7xl font-black mb-1" style={{ color: grade.color }}>{score}</div>
            <div className="text-lg text-white/60 mb-4">/ {totalGuesses} ({pct}%)</div>
            <div className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-8 border"
              style={{ color: grade.color, borderColor: `${grade.color}66`, background: `${grade.color}18` }}>{grade.label}</div>
            <div className="rounded-xl p-4 mb-6 text-left" style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-xs text-white/70 font-mono leading-relaxed whitespace-pre-line">{shareText}</p>
            </div>
            <div className="flex gap-3 justify-center mb-6">
              <button onClick={handleCopy} className="flex-1 py-3 rounded-xl font-bold text-sm border transition-all"
                style={{ borderColor: `${GOLD}80`, color: GOLD, background: `${GOLD}14` }}>
                {copied ? "복사됨 ✓" : "결과 복사 📋"}
              </button>
              <button onClick={restart} className="flex-1 py-3 rounded-xl font-bold text-sm text-black hover:brightness-110 transition-all"
                style={{ background: GOLD }}>다시 도전 🔄</button>
            </div>
            <p className="text-xs text-white/60">
              승률을 직접 계산해보고 싶다면{" "}
              <a href="/calculator" className="underline" style={{ color: GOLD }}>홀덤 확률 계산기 →</a>
              <br />확률 개념이 궁금하다면{" "}
              <a href="/blog/holdem-probability" className="underline" style={{ color: GOLD }}>홀덤 확률 완전정복 →</a>
            </p>
          </div>
        </div>
      </>
    );
  }

  const answers: { side: Side; label: string; accent: string }[] = [
    { side: "hero", label: "내(A)가 앞섬", accent: GOLD },
    { side: "tie", label: "거의 반반", accent: "#cbd5e1" },
    { side: "villain", label: "상대(B)가 앞섬", accent: "#e05555" },
  ];
  const hPct = Math.round(streetEquity);

  return (
    <>
      <SEO
        title="홀덤 승률 퀴즈 — 지금 누가 이기고 있을까? | 홀덤마스터"
        description="두 핸드 중 지금 누가 앞서 있는지 맞혀보세요. 프리플랍·플랍·턴마다 실제 승률이 어떻게 뒤집히는지 눈으로 확인하는 홀덤 승률 감각 테스트. 정확히 계산된 확률입니다."
        path="/win-rate-quiz"
      />
      <div className="min-h-screen max-w-md mx-auto px-3 py-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div>
            <h1 className="font-serif text-2xl font-black text-foreground">승률 퀴즈 🃏</h1>
            <p className="text-xs text-muted-foreground mt-0.5">지금 누가 이기고 있을까?</p>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">핸드 {sIdx + 1} / {TOTAL_SCENARIOS}</div>
            <div className="font-black text-primary text-xl">{score}<span className="text-sm text-muted-foreground">점</span></div>
          </div>
        </div>
        <div className="h-1.5 bg-border rounded-full mb-4 overflow-hidden">
          <motion.div className="h-full rounded-full" style={{ background: GOLD }} initial={false}
            animate={{ width: `${((sIdx * GUESSES_PER + Math.min(street, 3)) / totalGuesses) * 100}%` }} transition={{ duration: 0.4 }} />
        </div>

        {!sc ? (
          <div className="rounded-3xl p-16 text-center text-sm text-white/70" style={{ background: FELT, border: `2px solid ${GOLD}44` }}>
            🃏 카드 섞고 승률 계산 중…
          </div>
        ) : (
          <>
            {/* ── 포커 테이블 ── */}
            <div className="relative rounded-[2rem] px-4 pt-4 pb-5 mb-4"
              style={{ background: FELT, border: `3px solid ${GOLD}`, boxShadow: "inset 0 2px 30px rgba(0,0,0,0.45), 0 14px 40px rgba(0,0,0,0.35)" }}>

              {/* 상대(B) 좌석 */}
              <div className="flex items-center justify-between mb-3">
                <Seat tag="B" label="상대" isHero={false} active={correct === "villain" && revealEquity} />
                <div className="flex gap-1.5">{sc.villain.map((c, i) => <PlayingCard key={i} card={c} small />)}</div>
                <div className="w-14 text-right">
                  {revealEquity && <span className="text-sm font-black" style={{ color: "#e05555" }}>{100 - hPct}%</span>}
                </div>
              </div>

              {/* 중앙: 보드 + 팟 */}
              <div className="rounded-2xl py-4 px-2 my-1" style={{ background: "rgba(0,0,0,0.18)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-center text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 mb-2">
                  {STREET_LABEL[Math.min(street, 3)]}
                </div>
                <div className="flex gap-1.5 justify-center">
                  {sc.board.map((c, i) => <PlayingCard key={i} card={c} hidden={i >= boardShown} />)}
                </div>
              </div>

              {/* 나(A) 좌석 */}
              <div className="flex items-center justify-between mt-3">
                <Seat tag="A" label="나" isHero active={correct === "hero" && revealEquity} />
                <div className="flex gap-1.5">{sc.hero.map((c, i) => <PlayingCard key={i} card={c} small />)}</div>
                <div className="w-14 text-right">
                  {revealEquity && <span className="text-sm font-black" style={{ color: GOLD }}>{hPct}%</span>}
                </div>
              </div>
            </div>

            {/* ── 방송형 승률 바 ── */}
            <div className="rounded-xl px-3 py-2.5 mb-4" style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex justify-between text-[11px] font-black mb-1.5">
                <span style={{ color: GOLD }}>나(A) {revealEquity ? `${hPct}%` : "?"}</span>
                <span className="text-white/40 uppercase tracking-wider">WIN %</span>
                <span style={{ color: "#e05555" }}>{revealEquity ? `${100 - hPct}%` : "?"} 상대(B)</span>
              </div>
              <div className="h-3 rounded-full overflow-hidden flex" style={{ background: "#e0555540" }}>
                <motion.div className="h-full" style={{ background: `linear-gradient(90deg,${GOLD},#e8c766)` }}
                  initial={false} animate={{ width: revealEquity ? `${hPct}%` : "50%" }} transition={{ duration: 0.6, ease: "easeOut" }} />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={`${sIdx}-${street}`} initial={false} animate={{ opacity: 1 }}>
                {!isRiver && (
                  <>
                    <p className="text-center font-bold text-foreground text-base mb-3">
                      <span style={{ color: GOLD }}>{STREET_LABEL[street]}</span> — 지금 누가 앞서 있을까?
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {answers.map(a => {
                        const isSel = selected === a.side;
                        const isCorr = a.side === correct;
                        let style: React.CSSProperties = { borderColor: "hsl(var(--border))", background: "hsl(var(--card))" };
                        if (answered) {
                          if (isCorr) style = { borderColor: "#22c55e", background: "rgba(34,197,94,0.15)" };
                          else if (isSel) style = { borderColor: "#ef4444", background: "rgba(239,68,68,0.15)" };
                          else style = { borderColor: "hsl(var(--border))", background: "hsl(var(--card))", opacity: 0.5 };
                        }
                        return (
                          <button key={a.side} onClick={() => guess(a.side)} disabled={answered}
                            className={`py-3 px-1.5 rounded-xl border-2 text-[13px] font-bold text-foreground transition-all ${answered ? "" : "cursor-pointer hover:brightness-105"}`}
                            style={style}>
                            {a.label}
                            {answered && isCorr && <div className="text-[10px] text-green-500 mt-1">✓ 정답</div>}
                            {answered && isSel && !isCorr && <div className="text-[10px] text-red-500 mt-1">✗</div>}
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}

                {answered && !isRiver && (
                  <motion.div initial={false} animate={{ opacity: 1 }} className="bg-card border border-border rounded-xl p-3 mb-4 text-center text-sm text-muted-foreground">
                    {correct === "hero" ? "나(A)" : correct === "villain" ? "상대(B)" : "양쪽 거의 반반"}
                    {correct === "tie" ? "이에요." : "가 앞서 있어요."} 실제 승률 <b className="text-foreground">{hPct}% : {100 - hPct}%</b>
                  </motion.div>
                )}

                {isRiver && (
                  <motion.div initial={false} animate={{ opacity: 1 }}
                    className="rounded-xl p-4 mb-4 border-2" style={{ borderColor: `${GOLD}66`, background: `${GOLD}0d` }}>
                    <div className="text-center font-black text-lg mb-1 text-foreground">
                      리버 — {sc.riverWinner === "hero" ? "나(A) 승리 🎉" : sc.riverWinner === "villain" ? "상대(B) 승리" : "무승부(스플릿)"}
                    </div>
                    <div className="text-center text-xs text-muted-foreground mb-3">
                      나: <b className="text-primary">{sc.heroHand}</b> · 상대: <b className="text-red-400">{sc.villainHand}</b>
                    </div>
                    <div className="flex gap-2 items-start bg-card rounded-lg p-3 border border-border">
                      <span className="text-lg">💡</span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{sc.lesson}</span>
                    </div>
                  </motion.div>
                )}

                {(answered || isRiver) && (
                  <button onClick={next}
                    className="w-full py-4 rounded-xl font-black text-base text-black transition-all hover:brightness-110 active:scale-[0.98]"
                    style={{ background: GOLD }}>
                    {street < 2 ? `${STREET_LABEL[street + 1]} 공개 →`
                      : street === 2 ? "리버 공개 →"
                      : sIdx + 1 >= TOTAL_SCENARIOS ? "결과 보기 🏆" : "다음 핸드 →"}
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </>
  );
}
