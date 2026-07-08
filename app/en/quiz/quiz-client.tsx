"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/seo";
import { makeQuestion, type HandInfo, type Card } from "@/lib/poker-eval";

const TOTAL = 10;

// English hand tips by rank (poker-eval's `tip` field is Korean; this keeps that file untouched)
const ENG_TIPS: Record<number, string> = {
  1: "Same suit A-K-Q-J-10. The best hand in poker!",
  2: "Five consecutive cards of the same suit.",
  3: "Four cards of one rank + one kicker.",
  4: "Three of a kind + a pair. Also called a 'boat'.",
  5: "Five cards of the same suit (needn't be in sequence).",
  6: "Five cards in sequence (any suits). An ace can be high or low.",
  7: "Three cards of the same rank. Also called 'trips' or a 'set'.",
  8: "Two different pairs.",
  9: "Two cards of the same rank — the most common hand.",
  10: "No combination — compared by the highest card.",
};

function CardTile({ card, highlight, dim }: { card: Card; highlight?: boolean; dim?: boolean }) {
  const isRed = card.suit === '♥' || card.suit === '♦';
  return (
    <div style={{
      width:48, height:68, background: dim ? '#111' : 'white',
      borderRadius:8, display:'inline-flex', alignItems:'center', justifyContent:'center', flexShrink:0,
      border: highlight ? '2px solid #d4af37' : `1px solid ${dim ? '#333' : '#d1d5db'}`,
      boxShadow: highlight ? '0 0 14px rgba(212,175,55,0.55)' : '0 2px 8px rgba(0,0,0,0.45)',
      opacity: dim ? 0.3 : 1, transition:'all 0.25s',
    }}>
      <span style={{ fontSize:13, fontWeight:800, color: dim?'#444': isRed?'#dc2626':'#111827', lineHeight:1, letterSpacing:'-0.5px' }}>
        {card.rank}{card.suit}
      </span>
    </div>
  );
}

function getGrade(s: number) {
  if (s===10) return { label:"🏆 Perfect! Hand-ranking master", color:"#d4af37" };
  if (s>=8)   return { label:"🔥 Expert — great job",           color:"#22c55e" };
  if (s>=6)   return { label:"👍 Solid — almost there!",         color:"#60a5fa" };
  if (s>=4)   return { label:"📚 Keep practicing — try again",   color:"#f59e0b" };
  return       { label:"💪 Beginner — review the rankings!",      color:"#ef4444" };
}

export default function QuizEn() {
  const [phase,    setPhase]    = useState<'playing'|'answered'|'done'>('playing');
  const [qNum,     setQNum]     = useState(1);
  const [score,    setScore]    = useState(0);
  const [q,        setQ]        = useState(() => makeQuestion());
  const [selected, setSelected] = useState<HandInfo|null>(null);
  const [copied,   setCopied]   = useState(false);

  const answer = useCallback((choice: HandInfo) => {
    if (phase !== 'playing') return;
    setSelected(choice);
    if (choice.rank === q.correct.rank) setScore(s => s+1);
    setPhase('answered');
  }, [phase, q.correct.rank]);

  const next = useCallback(() => {
    if (qNum >= TOTAL) { setPhase('done'); return; }
    setQNum(n => n+1); setQ(makeQuestion()); setSelected(null); setPhase('playing');
  }, [qNum]);

  const restart = useCallback(() => {
    setPhase('playing'); setQNum(1); setScore(0); setQ(makeQuestion()); setSelected(null);
  }, []);

  const shareText = `Poker hand quiz: ${score}/${TOTAL} 🃏\nTest your hand-ranking skills → holdemmaster.com/en/quiz`;
  const handleCopy = () => {
    navigator.clipboard.writeText(shareText).then(() => { setCopied(true); setTimeout(()=>setCopied(false),2000); });
  };

  const isRight = selected?.rank === q.correct.rank;
  const grade = getGrade(score);

  if (phase === 'done') {
    return (
      <>
        <SEO title="Hand Quiz Result | HoldemMaster" description={`I scored ${score}/${TOTAL} on the poker hand quiz! Test your hand-ranking skills at HoldemMaster.`} path="/en/quiz" />
        <div className="min-h-screen flex items-center justify-center px-4 py-16">
          <motion.div initial={false} animate={{ opacity:1, scale:1 }} className="w-full max-w-md text-center">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full border-2 text-3xl"
              style={{ borderColor:grade.color, background:`${grade.color}18` }}>
              {score===10?'🏆':score>=8?'🔥':score>=6?'👍':score>=4?'📚':'💪'}
            </div>
            <h1 className="font-serif text-3xl font-black text-foreground mb-1">Your result</h1>
            <p className="text-muted-foreground mb-6">{TOTAL} questions completed</p>
            <div className="text-8xl font-black mb-1" style={{ color:grade.color }}>{score}</div>
            <div className="text-xl text-muted-foreground mb-4">/ {TOTAL}</div>
            <div className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-8 border"
              style={{ color:grade.color, borderColor:`${grade.color}66`, background:`${grade.color}12` }}>
              {grade.label}
            </div>
            <div className="bg-card border border-border rounded-xl p-4 mb-6 text-left">
              <p className="text-xs text-muted-foreground font-mono leading-relaxed whitespace-pre-line">{shareText}</p>
            </div>
            <div className="flex gap-3 justify-center">
              <button onClick={handleCopy}
                className="flex-1 py-3 rounded-xl font-bold text-sm border transition-all"
                style={{ borderColor:'rgba(212,175,55,0.5)', color:'#d4af37', background:'rgba(212,175,55,0.08)' }}>
                {copied ? 'Copied ✓' : 'Copy result 📋'}
              </button>
              <button onClick={restart}
                className="flex-1 py-3 rounded-xl font-bold text-sm text-black hover:brightness-110 transition-all"
                style={{ background:'#d4af37' }}>
                Try again 🔄
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Want to study hand rankings?{' '}
              <a href="/en/blog/holdem-hand-rankings" className="text-primary underline">Poker Hand Rankings →</a>
            </p>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Poker Hand Quiz — Spot the Best Hand from 7 Cards | HoldemMaster"
        description="Poker hand quiz! From 7 cards, pick the best 5-card hand. Test your hand-ranking skills with 10 questions and share your score."
        path="/en/quiz"
      />
      <div className="min-h-screen max-w-xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-serif text-2xl font-black text-foreground">Hand Quiz 🃏</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Best hand from 7 cards?</p>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">{qNum} / {TOTAL}</div>
            <div className="font-black text-primary text-xl">{score} pts</div>
          </div>
        </div>

        <div className="h-1.5 bg-border rounded-full mb-8 overflow-hidden">
          <motion.div className="h-full bg-primary rounded-full" animate={{ width:`${((qNum-1)/TOTAL)*100}%` }} transition={{ duration:0.4 }} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={qNum} initial={false} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-40 }} transition={{ duration:0.22 }}>
            <div className="bg-card border border-border rounded-2xl p-5 mb-3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Board (Community Cards)</div>
              <div className="flex gap-2 flex-wrap">
                {q.board.map(card => {
                  const inBest = phase==='answered' && q.bestCards.some(b=>b.id===card.id);
                  const out    = phase==='answered' && !q.bestCards.some(b=>b.id===card.id);
                  return <CardTile key={card.id} card={card} highlight={inBest} dim={out} />;
                })}
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5 mb-6">
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Your Hole Cards</div>
              <div className="flex gap-2">
                {q.hole.map(card => {
                  const inBest = phase==='answered' && q.bestCards.some(b=>b.id===card.id);
                  const out    = phase==='answered' && !q.bestCards.some(b=>b.id===card.id);
                  return <CardTile key={card.id} card={card} highlight={inBest} dim={out} />;
                })}
              </div>
            </div>

            <p className="text-center font-bold text-foreground text-lg mb-5">What's the best 5-card hand from these 7?</p>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {q.choices.map(choice => {
                const isSel = selected?.rank === choice.rank;
                const isCorr = choice.rank === q.correct.rank;
                let bg = 'bg-card hover:bg-muted/80', border = 'border-border';
                if (phase==='answered') {
                  if (isCorr)     { bg='bg-green-900/25'; border='border-green-500'; }
                  else if (isSel) { bg='bg-red-900/25';   border='border-red-500'; }
                }
                return (
                  <button key={choice.rank} onClick={()=>answer(choice)} disabled={phase==='answered'}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${bg} ${border} ${phase==='playing'?'cursor-pointer':''}`}>
                    <div className="text-2xl mb-1.5">{choice.emoji}</div>
                    <div className={`font-bold text-sm ${isCorr&&phase==='answered'?'text-green-400':isSel&&phase==='answered'?'text-red-400':'text-foreground'}`}>
                      {choice.engName}
                    </div>
                    {phase==='answered' && isCorr && <div className="text-[11px] font-bold mt-1.5 text-green-400">✓ Correct</div>}
                    {phase==='answered' && isSel && !isCorr && <div className="text-[11px] font-bold mt-1.5 text-red-400">✗ Wrong</div>}
                  </button>
                );
              })}
            </div>

            {phase==='answered' && (
              <motion.div initial={false} animate={{ opacity:1, y:0 }}
                className={`rounded-xl p-4 mb-5 border-2 ${isRight?'bg-green-900/20 border-green-500/40':'bg-red-900/20 border-red-500/40'}`}>
                <div className="flex gap-3 items-start">
                  <div className="text-2xl">{isRight?'🎉':'💡'}</div>
                  <div>
                    <div className={`font-bold text-sm ${isRight?'text-green-400':'text-red-400'}`}>
                      {isRight ? 'Correct!' : `Wrong! Answer: "${q.correct.engName}"`}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {isRight ? 'The gold-highlighted cards are the best 5.' : `💡 ${ENG_TIPS[q.correct.rank] ?? ''}`}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {phase==='answered' && (
              <motion.button initial={false} animate={{ opacity:1, y:0 }} onClick={next}
                className="w-full py-4 rounded-xl font-black text-base text-black transition-all hover:brightness-110 active:scale-[0.98]"
                style={{ background:'#d4af37' }}>
                {qNum>=TOTAL ? 'See results 🏆' : `Next → (${qNum+1}/${TOTAL})`}
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
