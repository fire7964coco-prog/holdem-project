"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { makeQuestion, type HandInfo, type Card } from "@/lib/poker-eval";

const TOTAL = 5;

/* ── 카드: motion.div 대신 CSS transition (JS 프레임 루프 제거) ── */
function PokerCard({ card, highlight, dim }: { card: Card; highlight?: boolean; dim?: boolean }) {
  const isRed = card.suit === '♥' || card.suit === '♦';
  return (
    <div style={{
      width: 46, height: 66,
      background: dim ? '#0a0a0a' : 'linear-gradient(145deg,#fff 0%,#f3f3f3 100%)',
      borderRadius: 8,
      display: 'inline-flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      border: highlight ? '2px solid #d4af37' : `1px solid ${dim ? '#1f1f1f' : '#c8c8c8'}`,
      boxShadow: highlight
        ? '0 0 14px rgba(212,175,55,0.6), 0 4px 10px rgba(0,0,0,0.4)'
        : dim ? 'none' : '0 3px 8px rgba(0,0,0,0.45)',
      opacity: dim ? 0.2 : 1,
      /* CSS transition → GPU-composited transform + opacity only */
      transform: highlight ? 'translateY(-4px) scale(1.08)' : 'translateY(0) scale(1)',
      transition: 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1), opacity 0.18s, border-color 0.18s',
      willChange: 'transform',
    }}>
      <span style={{ fontSize: 13, fontWeight: 900, color: dim ? '#222' : isRed ? '#dc2626' : '#111827', lineHeight: 1 }}>
        {card.rank}
      </span>
      <span style={{ fontSize: 15, lineHeight: 1, marginTop: 2, color: dim ? '#222' : isRed ? '#dc2626' : '#111827' }}>
        {card.suit}
      </span>
    </div>
  );
}

/* ── 진행 점: 총 5개, 문제 전환 시 1회 애니 ── */
function StepDots({ current, total }: { current: number; total: number }) {
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 6, borderRadius: 3,
            width: i === current - 1 ? 20 : 6,
            background: i < current ? '#d4af37' : 'rgba(255,255,255,0.15)',
            transition: 'width 0.3s, background 0.3s',
          }}
        />
      ))}
    </div>
  );
}

function getGradeEmoji(s: number) {
  if (s === TOTAL) return "🏆";
  if (s >= 4) return "🔥";
  if (s >= 3) return "👍";
  return "📚";
}
function getGradeText(s: number) {
  if (s === TOTAL) return "만점! 족보 완전 마스터";
  if (s >= 4) return "고수! 거의 다 맞혔어요";
  if (s >= 3) return "준수! 조금만 더 연습하면";
  return "아래 글을 읽고 다시 도전해보세요";
}

/* ── 선택지 버튼: hover 상태를 각자 관리 → 부모 re-render 없음 ── */
function ChoiceButton({
  choice, phase, selected, correct, onAnswer,
}: {
  choice: HandInfo; phase: string; selected: HandInfo | null; correct: HandInfo;
  onAnswer: (c: HandInfo) => void;
}) {
  const [hov, setHov] = useState(false);
  const isSel  = selected?.rank === choice.rank;
  const isCorr = choice.rank === correct.rank;

  let bg = hov && phase === 'playing' ? 'rgba(212,175,55,0.1)' : 'rgba(255,255,255,0.04)';
  let borderCol = hov && phase === 'playing' ? 'rgba(212,175,55,0.45)' : 'rgba(255,255,255,0.1)';
  let textCol = '#fff';

  if (phase === 'answered') {
    if (isCorr)      { bg = 'rgba(34,197,94,0.12)';  borderCol = 'rgba(34,197,94,0.6)';  textCol = '#4ade80'; }
    else if (isSel)  { bg = 'rgba(239,68,68,0.12)';  borderCol = 'rgba(239,68,68,0.6)';  textCol = '#f87171'; }
  }

  return (
    <button
      onClick={() => onAnswer(choice)}
      disabled={phase === 'answered'}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: '12px 14px', borderRadius: 12,
        border: `1.5px solid ${borderCol}`,
        background: bg,
        cursor: phase === 'playing' ? 'pointer' : 'default',
        textAlign: 'left',
        /* transform + opacity only → no repaint */
        transform: hov && phase === 'playing' ? 'translateY(-1px)' : 'translateY(0)',
        transition: 'transform 0.12s, background 0.12s, border-color 0.12s',
      }}
    >
      <div style={{ fontSize: 20, marginBottom: 4 }}>{choice.emoji}</div>
      <div style={{ fontSize: 13, fontWeight: 800, color: textCol }}>{choice.koreanName}</div>
      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{choice.engName}</div>
      {phase === 'answered' && isCorr && <div style={{ fontSize: 11, color: '#4ade80', fontWeight: 800, marginTop: 5 }}>✓ 정답!</div>}
      {phase === 'answered' && isSel && !isCorr && <div style={{ fontSize: 11, color: '#f87171', fontWeight: 800, marginTop: 5 }}>✗ 오답</div>}
    </button>
  );
}

export function QuizWidget() {
  const [phase,       setPhase]       = useState<'playing' | 'answered' | 'done'>('playing');
  const [qNum,        setQNum]        = useState(1);
  const [score,       setScore]       = useState(0);
  const [q,           setQ]           = useState(() => makeQuestion());
  const [selected,    setSelected]    = useState<HandInfo | null>(null);
  // 답변 시점에 확정된 베스트 5장 id Set — q.bestCards 직접 참조 대신 사용
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());

  const answer = useCallback((choice: HandInfo) => {
    if (phase !== 'playing') return;
    setSelected(choice);
    if (choice.rank === q.correct.rank) setScore(s => s + 1);
    // 답변 순간 bestCards를 Set으로 확정 → render 타이밍 이슈 원천 차단
    setRevealedIds(new Set(q.bestCards.map(c => c.id)));
    setPhase('answered');
  }, [phase, q.correct.rank, q.bestCards]);

  const next = useCallback(() => {
    setRevealedIds(new Set()); // 다음 문제 전환 시 하이라이트 즉시 제거
    if (qNum >= TOTAL) { setPhase('done'); return; }
    setQNum(n => n + 1);
    setQ(makeQuestion());
    setSelected(null);
    setPhase('playing');
  }, [qNum]);

  const restart = useCallback(() => {
    setRevealedIds(new Set());
    setPhase('playing'); setQNum(1); setScore(0); setQ(makeQuestion()); setSelected(null);
  }, []);

  const isRight = selected?.rank === q.correct.rank;

  return (
    <div style={{ margin: '36px -4px', position: 'relative' }}>

      {/* Floating badge — static, no animation */}
      <div style={{
        position: 'absolute', top: -14, left: 20, zIndex: 2,
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '5px 14px',
        background: 'linear-gradient(90deg,#b8960c,#d4af37,#b8960c)',
        borderRadius: 20,
        boxShadow: '0 2px 10px rgba(212,175,55,0.4)',
        fontSize: 11, fontWeight: 800, color: '#000', letterSpacing: 0.5,
        textTransform: 'uppercase',
      }}>
        <span>⚡</span> 나의 족보 실력은?
      </div>

      {/* Main widget — 블러 반경 40px→16px으로 축소 (GPU 부담 절반) */}
      <div style={{
        borderRadius: 16,
        border: '1.5px solid rgba(212,175,55,0.55)',
        background: 'linear-gradient(160deg,rgba(18,24,16,0.95) 0%,rgba(10,18,10,0.98) 100%)',
        boxShadow: '0 0 0 1px rgba(212,175,55,0.1), 0 0 16px rgba(212,175,55,0.14), 0 6px 24px rgba(0,0,0,0.55)',
        overflow: 'hidden',
      }}>

        {/* Header */}
        <div style={{
          padding: '16px 22px 14px',
          background: 'linear-gradient(90deg,rgba(22,63,32,0.8) 0%,rgba(14,40,20,0.9) 100%)',
          borderBottom: '1px solid rgba(212,175,55,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 22 }}>🃏</span>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '-0.3px' }}>족보 퀴즈</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 1 }}>7장 카드에서 최강 족보를 맞혀보세요</div>
            </div>
          </div>
          {phase !== 'done' && (
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>진행</div>
              <StepDots current={qNum} total={TOTAL} />
            </div>
          )}
        </div>

        <div style={{ padding: '20px 22px 22px' }}>
          <AnimatePresence mode="wait">

            {/* ── Done ── */}
            {phase === 'done' && (
              <motion.div key="done" initial={false} animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '10px 0 6px' }}>
                <div style={{ fontSize: 52, marginBottom: 12 }}>{getGradeEmoji(score)}</div>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#d4af37', letterSpacing: '-1px', marginBottom: 4 }}>
                  {score}<span style={{ fontSize: 20, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>/{TOTAL}</span>
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', marginBottom: 22 }}>{getGradeText(score)}</div>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                  <button onClick={restart} style={{
                    padding: '11px 22px', borderRadius: 12, fontSize: 13, fontWeight: 700, cursor: 'pointer',
                    background: 'rgba(212,175,55,0.1)', border: '1.5px solid rgba(212,175,55,0.4)', color: '#d4af37',
                  }}>
                    다시 도전 🔄
                  </button>
                  <Link href="/quiz" style={{
                    padding: '11px 22px', borderRadius: 12, fontSize: 13, fontWeight: 800,
                    background: 'linear-gradient(90deg,#b8960c,#d4af37)',
                    color: '#000', textDecoration: 'none', display: 'inline-block',
                  }}>
                    10문제 전체 퀴즈 →
                  </Link>
                </div>
              </motion.div>
            )}

            {/* ── Quiz ── */}
            {phase !== 'done' && (
              <motion.div key={qNum}
                initial={false} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.2 }}>

                {/* Cards */}
                <div style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 12, padding: '14px 16px', marginBottom: 16,
                  display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap',
                }}>
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>
                      보드 (공개 5장)
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {q.board.map(card => {
                        const inBest = revealedIds.size > 0 && revealedIds.has(card.id);
                        const out    = revealedIds.size > 0 && !revealedIds.has(card.id);
                        return <PokerCard key={card.id} card={card} highlight={inBest} dim={out} />;
                      })}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)' }} />
                    <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', fontWeight: 700 }}>+</span>
                    <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, color: '#d4af37', marginBottom: 8 }}>
                      내 홀카드 ★
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {q.hole.map(card => {
                        const inBest = revealedIds.size > 0 && revealedIds.has(card.id);
                        const out    = revealedIds.size > 0 && !revealedIds.has(card.id);
                        return <PokerCard key={card.id} card={card} highlight={inBest} dim={out} />;
                      })}
                    </div>
                  </div>
                </div>

                {/* Question */}
                <p style={{ fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 12, textAlign: 'center', letterSpacing: '-0.3px' }}>
                  이 7장의 최강 족보는? 🤔
                </p>

                {/* Choices — 각자 hover 상태 자체 관리 → 부모 re-render 없음 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 12 }}>
                  {q.choices.map(choice => (
                    <ChoiceButton
                      key={choice.rank}
                      choice={choice}
                      phase={phase}
                      selected={selected}
                      correct={q.correct}
                      onAnswer={answer}
                    />
                  ))}
                </div>

                {/* Feedback */}
                {phase === 'answered' && (
                  <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}
                    style={{
                      padding: '12px 16px', borderRadius: 12, marginBottom: 12,
                      background: isRight ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
                      border: `1.5px solid ${isRight ? 'rgba(34,197,94,0.35)' : 'rgba(239,68,68,0.35)'}`,
                      display: 'flex', gap: 10, alignItems: 'flex-start',
                    }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{isRight ? '🎉' : '💡'}</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: isRight ? '#4ade80' : '#f87171' }}>
                        {isRight ? '정답! 잘 알고 있네요 👍' : `오답 — 정답은 "${q.correct.koreanName}"`}
                      </div>
                      {!isRight && (
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 3, lineHeight: 1.5 }}>
                          {q.correct.tip}
                        </div>
                      )}
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>
                        💛 금색으로 빛나는 카드 = 베스트 5장
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Next */}
                {phase === 'answered' && (
                  <motion.button initial={false} animate={{ opacity: 1, y: 0 }} onClick={next}
                    style={{
                      width: '100%', padding: '14px', borderRadius: 12, fontSize: 14, fontWeight: 900,
                      background: 'linear-gradient(90deg,#b8960c,#d4af37,#c9a227)',
                      color: '#000', cursor: 'pointer', border: 'none', letterSpacing: '-0.2px',
                      boxShadow: '0 3px 14px rgba(212,175,55,0.28)',
                      /* opacity hover → no repaint (compositor-only) */
                      transition: 'opacity 0.15s, transform 0.1s',
                    }}
                    onMouseOver={e => e.currentTarget.style.opacity = '0.88'}
                    onMouseOut={e => e.currentTarget.style.opacity = '1'}>
                    {qNum >= TOTAL ? '결과 보기 🏆' : `다음 문제 → (${qNum + 1} / ${TOTAL})`}
                  </motion.button>
                )}

                {phase === 'playing' && (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, marginTop: 4 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>현재 점수</span>
                    <span style={{ fontSize: 13, fontWeight: 800, color: '#d4af37' }}>{score} / {qNum - 1}</span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
