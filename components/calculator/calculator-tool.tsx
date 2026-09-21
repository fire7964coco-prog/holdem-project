"use client";

import { useState, useMemo, createContext, useContext, isValidElement, cloneElement, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/seo";
import { CalculatorWorkspace } from "@/components/calculator-workspace";
import { Calculator, TrendingUp, Layers, Target, Trophy, BarChart3, Zap } from "lucide-react";
import { pfLookup, PF_STACK_MIN, PF_STACK_MAX, PF_STACK_STEP } from "@/lib/pushfold-data";
import { pfLookupMultiway, PF_MW_POSITIONS } from "@/lib/pushfold-multiway-data";
import { calcEquity, evaluate7, categoryOf } from "@/lib/equity";
import type { CalcDict } from "./dict";

/** ★2026-09-17 (zh 회차) — 사전 조각 사이에 넣던 고정 반각 공백은 영어용이다. 앞 조각이 CJK 문자·전각 문장부호로 끝나면
 *  공백을 넣지 않는다(「A5s 能凑成 轮子顺」·「都在这篇： 德州…」처럼 문장 한가운데 공백이 뜨던 자리 — 2차 교열 렌즈). EN은 라틴으로 끝나 불변. */
const cjkEnd = (s?: string) => !!s && /[぀-ヿ㐀-䶿一-鿿＀-ﾟ　-〿]$/.test(s);
const sep = (prev?: string) => (cjkEnd(prev) ? null : " ");

/**
 * ★2026-09-19 — quickRef 화살표 헤더(«Flop → river»)는 390px에서 «Flop / → / river» 3줄로 꺾이고
 * 화살표가 제 줄에 혼자 남는다(EN·de·fr·es·pt·id 6개 동형 실측 · 헤더 높이 81px).
 * 화살표를 뒤 단어에 고정공백으로 붙여 «Flop / → river» 2줄까지만 꺾이게 한다.
 * 🔴 nowrap으로 한 줄에 펴지 «않는» 이유: 표가 426 → 555px로 넓어져 390px에서 보이는 열이 하나 줄어든다
 *    (실측 en · 이 방식은 458px라 열 손실 0). CJK 헤더는 화살표 둘레에 공백이 없어 무영향 — 그쪽은 nowrap이 정본.
 */
const glueArrow = (s: string) => s.replace(/([→←])\s+/g, "$1 ");

// ─────────────────────────────────────────────
// Dictionary plumbing
// ─────────────────────────────────────────────
/** Fill `{name}` placeholders with strings/numbers → one string. */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}

/**
 * Fill `{name}` placeholders with React nodes → an array of children.
 * Text segments and values stay separate children, so the rendered text-node structure
 * (and React's SSR `<!-- -->` separators) is the same as hand-written JSX like
 * `Rule of {n} (mental math):`.
 */
export function fmtNodes(template: string, vars: Record<string, ReactNode>): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\{(\w+)\}/g;
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(template))) {
    if (m.index > last) out.push(template.slice(last, m.index));
    const v = vars[m[1]];
    if (v === undefined) out.push(m[0]);
    else if (isValidElement(v)) out.push(cloneElement(v, { key: `v${i++}` }));
    else out.push(v);
    last = m.index + m[0].length;
  }
  if (last < template.length) out.push(template.slice(last));
  return out;
}

/**
 * ★2026-09-19 — Number typography belongs to the locale, and until today only `nf()` (integers)
 * honoured it: every computed percentage was `toFixed(1)` + a hard-coded "%", so a French reader
 * saw the tool print «81.9%» directly above our own static table printing «81,9 %» (fr §5 🟠🟠).
 * - `nd(n, fixed?)` — decimal number, separator from `dict.numberLocale`. `fixed` pins the digit
 *   count (the old `toFixed(1)` sites); omit it for "one decimal only when there is one".
 * - `pf(n, fixed?)` — the same number followed by `dict.percentGap` and "%".
 * 🔴 CSS lengths (`width: ${x}%`) must stay raw — never route those through `pf()`.
 */
type Ctx = {
  dict: CalcDict;
  locale: string;
  nf: (n: number) => string;
  nd: (n: number, fixed?: number) => string;
  pf: (n: number, fixed?: number) => string;
};
const CalcCtx = createContext<Ctx | null>(null);
function useCalc(): Ctx {
  const ctx = useContext(CalcCtx);
  if (!ctx) throw new Error("CalculatorTool context missing");
  return ctx;
}

// ─────────────────────────────────────────────
// Types & Constants
// ─────────────────────────────────────────────
interface Card { rank: number; suit: number; }

const RANKS = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
const SUITS = ["♠","♥","♦","♣"];
const SUIT_COLORS = ["text-slate-300","text-red-400","text-red-400","text-slate-300"];
const SUIT_BG    = ["bg-slate-800","bg-red-950","bg-red-950","bg-slate-800"];

function cardId(c: Card) { return c.rank * 4 + c.suit; }

// ─────────────────────────────────────────────
// Hand Evaluation
// ─────────────────────────────────────────────
function combs<T>(arr: T[], k: number): T[][] {
  if (k === 0) return [[]];
  if (arr.length < k) return [];
  const [h, ...t] = arr;
  return [...combs(t, k-1).map(c => [h,...c]), ...combs(t, k)];
}

// Colors by hand rank 0..9 (name comes from dict.handEval.resultNames[rank]).
const HAND_RANK_COLORS = [
  "text-muted-foreground", "text-muted-foreground", "text-lime-400", "text-green-500", "text-green-400",
  "text-cyan-400", "text-blue-400", "text-purple-400", "text-yellow-400", "text-yellow-300",
];

function evaluate5(cards: Card[]): { rank: number; color: string } {
  const rs = cards.map(c => c.rank).sort((a,b) => b-a);
  const ss = cards.map(c => c.suit);
  const isFlush = new Set(ss).size === 1;
  const uniq = [...new Set(rs)].sort((a,b)=>b-a);
  const isNorm = uniq.length===5 && uniq[0]-uniq[4]===4;
  const isWheel = uniq.length===5 && uniq[0]===12 && uniq[1]===3 && uniq[2]===2 && uniq[3]===1 && uniq[4]===0;
  const isStraight = isNorm || isWheel;
  const cnt: Record<number,number> = {};
  rs.forEach(r => cnt[r]=(cnt[r]||0)+1);
  const cnts = Object.values(cnt).sort((a,b)=>b-a);

  const r = (rank: number) => ({ rank, color: HAND_RANK_COLORS[rank] });
  if (isFlush && isStraight && !isWheel && uniq[0]===12) return r(9);
  if (isFlush && isStraight) return r(8);
  if (cnts[0]===4) return r(7);
  if (cnts[0]===3 && cnts[1]===2) return r(6);
  if (isFlush) return r(5);
  if (isStraight) return r(4);
  if (cnts[0]===3) return r(3);
  if (cnts[0]===2 && cnts[1]===2) return r(2);
  if (cnts[0]===2) return r(1);
  return r(0);
}

function bestHand(cards: Card[]) {
  if (cards.length < 5) return null;
  const sets = combs(cards, 5);
  return sets.map(s => evaluate5(s)).sort((a,b) => b.rank - a.rank)[0];
}

// ─────────────────────────────────────────────
// Starting Hand Data
// ─────────────────────────────────────────────
type HandTier = { tier: 1|2|3|4|5; label: string; color: string; bg: string; action: string; desc: string };

const TIER_INFO: Record<1|2|3|4|5, Omit<HandTier,"tier"|"label"|"action"|"desc">> = {
  1: { color:"text-yellow-300", bg:"bg-yellow-300/10 border-yellow-300/40" },
  2: { color:"text-green-400",  bg:"bg-green-400/10 border-green-400/40" },
  3: { color:"text-blue-400",   bg:"bg-blue-400/10 border-blue-400/40" },
  4: { color:"text-orange-400", bg:"bg-orange-400/10 border-orange-400/40" },
  5: { color:"text-red-400",    bg:"bg-red-400/10 border-red-400/40" },
};

// Full class names (literal so Tailwind generates them) for the tier progress bar.
const TIER_BAR: Record<1|2|3|4|5, string> = {
  1: "bg-yellow-300", 2: "bg-green-400", 3: "bg-blue-400", 4: "bg-orange-400", 5: "bg-red-400",
};

// [tier, hand code] — prose (desc/action) lives in dict.starting.hands[code].
type TierEntry = [1|2|3|4|5, string];
const HAND_TABLE: TierEntry[] = [
  [1, "AA"], [1, "KK"], [1, "QQ"], [1, "JJ"], [1, "1010"], [1, "AKs"], [1, "AKo"],
  [2, "AQs"], [2, "AJs"], [2, "A10s"], [2, "KQs"], [2, "KJs"], [2, "99"], [2, "88"], [2, "AQo"],
  [3, "AJo"], [3, "KQo"], [3, "K10s"], [3, "QJs"], [3, "J10s"], [3, "109s"], [3, "77"], [3, "A9s"],
  [4, "66"], [4, "55"], [4, "A8s"], [4, "A7s"], [4, "A6s"], [4, "A5s"], [4, "A4s"], [4, "A3s"], [4, "A2s"],
  [4, "KJo"], [4, "QJo"], [4, "98s"], [4, "87s"], [4, "76s"],
  // K10o·Q10o·J10o는 Tier 4다 — 폴백이 계산한 K9o·Q9o·J9o가 Tier 4인데 이들이 Tier 5면
  // 「더 센 핸드가 더 약하게」 뜬다(09-20 딜러 렌즈). 세 핸드 다 BTN 표준 오픈이다.
  // 🔴 2026-09-21 — 44·33·22도 Tier 4다. 아래 fallbackTier의 콤보 모델이 「78 pairs」 = 13개 페어
  //    **전부**를 버튼 레인지 안으로 세는데, 표만 이 셋을 T5로 찍어 미등재 43s·32s(수티드 → T4)가
  //    44보다 한 단계 위로 떴다. 해법은 수티드에 바닥을 두는 것이 아니라(09-20 기각) 페어 승격이다.
  //    🔴 배지만 올렸다 — action 문구(「~15× 뒤에 남았을 때만 콜」·「멀티웨이 딥스택만」)는 그대로다.
  [4, "44"], [4, "33"], [4, "22"], [4, "K10o"], [4, "Q10o"], [4, "J10o"],
  [3, "Q10s"], [4, "A10o"], [4, "65s"], [4, "54s"],
];

function getHandName(c1: Card, c2: Card): string {
  const [hi, lo] = c1.rank >= c2.rank ? [c1, c2] : [c2, c1];
  if (hi.rank === lo.rank) return `${RANKS[hi.rank]}${RANKS[lo.rank]}`;
  const s = hi.suit === lo.suit ? "s" : "o";
  return `${RANKS[hi.rank]}${RANKS[lo.rank]}${s}`;
}

function lookupHand(name: string): TierEntry | null {
  return HAND_TABLE.find(([, h]) => h === name) || null;
}

// The 122 hands outside HAND_TABLE share one fallback string, but they are not equally
// weak — K9s and A9o are steal opens while 72o is a fold. Badging all of them Tier 5 put
// "🚫 Weak" right next to "open from the cutoff/button". Mirrors the branches of
// dict.starting.unknownAction, so every locale is corrected by this one function.
// rank is an index into RANKS: 1 = "3", 7 = "9", 12 = "A".
// A ~50% button range is 663 combos: 78 pairs + 312 suited leaves 273 for offsuit. Offsuit types
// cost 12 combos each, so 273 is not reachable — the line below takes the 22 types under it
// (264 combos): every ace (12) + K9o+ (4) + Q9o+ (3) + J9o+ (2) + 10-9o. Tiers 1-4 therefore hold
// 78 + 312 + 264 = 654 combos = 49.3%, the conservative side of 50%. 23 types (276) would overshoot.
// 🔴 The matching table in app/calculator/calculator-client.tsx must stay identical — never fix one side only.
// Every suited hand fits inside the 312, so the button opens all of them; the cutoff limit lives
// in the prose, not here, because the badge is one tier either way.
function fallbackTier(hi: Card, lo: Card): 4 | 5 {
  if (hi.suit === lo.suit) return 4;              // any suited hand is a button open
  return hi.rank === 12 || lo.rank >= 7 ? 4 : 5;  // offsuit ace, or both cards 9 or higher
}

function displayHandName(name: string): string {
  return name
    .replace(/^1010$/, "10-10")
    .replace(/^10([2-9])(s|o)$/, "10-$1$2");
}

// ─────────────────────────────────────────────
// Card Picker Component
// ─────────────────────────────────────────────
interface PickerProps {
  selected: Card[];
  max: number;
  onToggle: (c: Card) => void;
  onClear: () => void;
  disabled?: Card[];
  label?: string;
}
function CardPicker({ selected, max, onToggle, onClear, disabled = [], label }: PickerProps) {
  const { dict } = useCalc();
  const selIds = new Set(selected.map(cardId));
  const disIds = new Set(disabled.map(cardId));
  const full = selected.length >= max;
  return (
    <div>
      {label && (
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{label}</p>
          <p className="text-xs text-primary font-bold">{selected.length} / {max}</p>
        </div>
      )}
      <div className="overflow-x-auto pb-1">
        <div className="inline-block">
          <div className="flex mb-1 ml-7 gap-0.5">
            {[...RANKS].reverse().map(r => (
              <div key={r} className="w-8 sm:w-[30px] text-center text-[10px] text-muted-foreground font-bold">{r}</div>
            ))}
          </div>
          {SUITS.map((suit, si) => (
            <div key={suit} className="flex mb-0.5 items-center gap-0.5">
              <div className={`w-6 text-sm font-black ${SUIT_COLORS[si]} mr-0.5 text-center`}>{suit}</div>
              {[...Array(13)].map((_, ri) => {
                const rank = 12 - ri;
                const c = { rank, suit: si };
                const id = cardId(c);
                const isSel = selIds.has(id);
                const isDis = disIds.has(id) || (!isSel && full);
                return (
                  <button
                    key={ri}
                    onClick={() => !isDis && onToggle(c)}
                    disabled={isDis}
                    title={`${RANKS[rank]}${SUITS[si]}`}
                    aria-label={`${RANKS[rank]}${SUITS[si]}`}
                    aria-pressed={isSel}
                    className={`w-8 h-11 sm:w-[30px] sm:h-[38px] rounded-md text-xs font-bold border transition-all
                      ${isSel
                        ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/30 scale-105 z-10"
                        : isDis
                          ? "bg-card/20 border-border/20 text-muted-foreground/20 cursor-not-allowed"
                          : `${SUIT_BG[si]} border-border/40 ${SUIT_COLORS[si]} hover:border-primary/60 hover:scale-105 cursor-pointer`
                      }`}
                  >
                    {RANKS[rank]}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {selected.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 items-center">
          {selected.map(c => (
            <button key={cardId(c)} onClick={() => onToggle(c)}
              className={`px-3 py-1.5 rounded-lg border text-sm font-bold transition-all hover:opacity-70 ${SUIT_BG[c.suit]} border-border/50 ${SUIT_COLORS[c.suit]}`}>
              {RANKS[c.rank]}{SUITS[c.suit]} ×
            </button>
          ))}
          {selected.length > 1 && (
            <button onClick={onClear} className="px-3 py-1.5 rounded-lg bg-muted/30 border border-border/40 text-xs text-muted-foreground hover:text-foreground transition-colors">
              {dict.cardPicker.clearAll}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// 0. Equity Calculator (hand vs hand) — ★2026-09-17 · renders only when dict.equity exists
// ─────────────────────────────────────────────
// Card {rank,suit} ↔ lib/equity 0..51 share the same encoding (rank*4+suit, suits ♠♥♦♣ = 0..3).
type Seat = { cards: Card[]; random: boolean };
const EQ_MAX_PLAYERS = 4;

function fromId(id: number): Card { return { rank: id >> 2, suit: id & 3 }; }
function cardText(c: Card) { return RANKS[c.rank] + SUITS[c.suit]; }

function EquityCalc() {
  const { dict, pf } = useCalc();
  const D = dict.equity!;
  const [seats, setSeats] = useState<Seat[]>([{ cards: [], random: false }, { cards: [], random: false }]);
  const [board, setBoard] = useState<Card[]>([]);
  const [active, setActive] = useState<number>(0); // seat index, or -1 = board

  const allUsed = useMemo(() => [...board, ...seats.flatMap(s => s.cards)], [board, seats]);
  const activeCards = active < 0 ? board : seats[active].cards;
  const activeMax = active < 0 ? 5 : 2;

  const toggle = (c: Card) => {
    const id = cardId(c);
    if (active < 0) {
      setBoard(prev => prev.some(x => cardId(x) === id) ? prev.filter(x => cardId(x) !== id) : prev.length >= 5 ? prev : [...prev, c]);
    } else {
      setSeats(prev => prev.map((s, i) => {
        if (i !== active) return s;
        const has = s.cards.some(x => cardId(x) === id);
        if (has) return { ...s, cards: s.cards.filter(x => cardId(x) !== id) };
        if (s.cards.length >= 2) return s;
        return { ...s, cards: [...s.cards, c], random: false };
      }));
    }
  };
  const clearActive = () => {
    if (active < 0) setBoard([]);
    else setSeats(prev => prev.map((s, i) => i === active ? { ...s, cards: [] } : s));
  };
  const setRandom = (i: number, random: boolean) =>
    setSeats(prev => prev.map((s, j) => j === i ? { cards: random ? [] : s.cards, random } : s));
  const addSeat = () => setSeats(prev => prev.length >= EQ_MAX_PLAYERS ? prev : [...prev, { cards: [], random: false }]);
  const removeSeat = () => {
    setSeats(prev => prev.length <= 2 ? prev : prev.slice(0, -1));
    setActive(a => Math.min(a, seats.length - 2));
  };
  const applyPreset = (hands: string[]) => {
    const parse = (h: string) => [h.slice(0, 2), h.slice(2, 4)].map(s => {
      const r = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"].indexOf(s[0]);
      const su = "shdc".indexOf(s[1]);
      return { rank: r, suit: su };
    });
    setSeats(hands.map(h => ({ cards: parse(h), random: false })));
    setBoard([]);
    setActive(0);
  };

  const ready = seats.every(s => s.random || s.cards.length === 2) && [0, 3, 4, 5].includes(board.length);
  const result = useMemo(() => {
    if (!ready) return null;
    const hands = seats.map(s => s.random ? [] : s.cards.map(cardId));
    const b = board.map(cardId);
    const r = calcEquity(hands, b, { trials: 60_000 });
    // showdown detail when the board is complete and every hand is known
    let showdown: { cat: number; best: boolean }[] | null = null;
    if (b.length === 5 && hands.every(h => h.length === 2)) {
      const scores = hands.map(h => evaluate7([...h, ...b]));
      const top = Math.max(...scores);
      showdown = scores.map(s => ({ cat: categoryOf(s), best: s === top }));
    }
    return { ...r, showdown };
  }, [ready, seats, board]);

  const seatLabel = (i: number) => i === 0 ? D.hero : fmt(D.opp, { n: i });

  return (
    <div className="space-y-6">
      {/* Seats + board selector */}
      <div className="flex flex-wrap gap-2">
        {seats.map((s, i) => (
          <button key={i} type="button" onClick={() => setActive(i)} aria-pressed={active === i}
            className={`rounded-xl border px-3 py-2 text-left transition-all min-w-[120px] ${active === i ? "border-primary bg-primary/10" : "border-border bg-card hover:border-primary/50"}`}>
            <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{seatLabel(i)}</p>
            <p className="text-sm font-black text-foreground font-mono min-h-[20px]">
              {s.random ? D.random : s.cards.length ? s.cards.map(cardText).join(" ") : "— —"}
            </p>
          </button>
        ))}
        <button type="button" onClick={() => setActive(-1)} aria-pressed={active === -1}
          className={`rounded-xl border px-3 py-2 text-left transition-all min-w-[150px] ${active === -1 ? "border-primary bg-primary/10" : "border-border bg-card hover:border-primary/50"}`}>
          <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{D.board}</p>
          <p className="text-sm font-black text-foreground font-mono min-h-[20px]">{board.length ? board.map(cardText).join(" ") : "— — —"}</p>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs">
        {active >= 1 && (
          <label className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1.5 cursor-pointer">
            <input type="checkbox" checked={seats[active].random} onChange={e => setRandom(active, e.target.checked)} />
            <span className="font-semibold text-foreground">{D.random}</span>
          </label>
        )}
        <button type="button" onClick={addSeat} disabled={seats.length >= EQ_MAX_PLAYERS}
          className="rounded-lg border border-border bg-card px-2.5 py-1.5 font-semibold text-foreground disabled:opacity-40">{D.addPlayer}</button>
        <button type="button" onClick={removeSeat} disabled={seats.length <= 2}
          className="rounded-lg border border-border bg-card px-2.5 py-1.5 font-semibold text-foreground disabled:opacity-40">{D.removePlayer}</button>
        <span className="text-muted-foreground">{D.pickerHint}</span>
      </div>

      <CardPicker selected={activeCards} max={activeMax} onToggle={toggle} onClear={clearActive}
        disabled={allUsed.filter(c => !activeCards.some(x => cardId(x) === cardId(c)))}
        label={active < 0 ? D.board : seatLabel(active)} />

      {/* Presets */}
      <div className="flex flex-wrap gap-1.5">
        {D.presets.map(p => (
          <button key={p.label} type="button" onClick={() => applyPreset(p.hands)}
            className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/60">{p.label}</button>
        ))}
      </div>

      {/* Result */}
      <div className="rounded-2xl bg-card border border-border p-5">
        {!result ? (
          <div className="text-center py-6">
            <p className="text-3xl mb-3">🎲</p>
            {/* headline names the condition that actually failed (hands first, then board) */}
            {seats.every(s => s.random || s.cards.length === 2)
              ? <p className="text-muted-foreground text-sm">{D.boardCount}</p>
              : <><p className="text-muted-foreground text-sm">{D.needTwo}</p><p className="text-xs text-muted-foreground mt-2">{D.boardCount}</p></>}
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-2 py-2 text-left font-bold text-muted-foreground">{D.th.player}</th>
                    <th className="px-2 py-2 text-left font-bold text-muted-foreground">{D.th.hand}</th>
                    {/* 09-17 screen-review: on 390px the Equity column fell off-screen — Win/Tie fold under the hand on mobile */}
                    <th className="px-2 py-2 text-right font-bold text-muted-foreground hidden sm:table-cell">{D.th.win}</th>
                    <th className="px-2 py-2 text-right font-bold text-muted-foreground hidden sm:table-cell">{D.th.tie}</th>
                    <th className="px-2 py-2 text-right font-bold text-primary-ink">{D.th.equity}</th>
                  </tr>
                </thead>
                <tbody>
                  {seats.map((s, i) => {
                    const eq = result.equity[i] * 100;
                    return (
                      <tr key={i} className="border-b border-border/60 last:border-0">
                        <td className="px-2 py-2.5 font-bold text-foreground whitespace-nowrap">{seatLabel(i)}</td>
                        <td className="px-2 py-2.5 font-mono text-foreground whitespace-nowrap">{s.random ? D.random : s.cards.map(cardText).join(" ")}<span className="block sm:hidden text-[10px] text-muted-foreground mt-0.5">{D.th.win} {pf(result.win[i] * 100, 1)} · {D.th.tie} {pf(result.tie[i] * 100, 1)}</span></td>
                        <td className="px-2 py-2.5 text-right font-mono text-muted-foreground hidden sm:table-cell">{pf(result.win[i] * 100, 1)}</td>
                        <td className="px-2 py-2.5 text-right font-mono text-muted-foreground hidden sm:table-cell">{pf(result.tie[i] * 100, 1)}</td>
                        <td className={`px-2 py-2.5 text-right font-mono font-black text-lg ${pcolor(eq)}`}>{pf(eq, 1)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex h-3 w-full overflow-hidden rounded-full bg-muted">
              {seats.map((_, i) => (
                <div key={i} className={`h-3 ${["bg-primary", "bg-red-400", "bg-blue-400", "bg-amber-400"][i]}`} style={{ width: `${result.equity[i] * 100}%` }} />
              ))}
            </div>
            {result.showdown && (
              <p className="mt-4 text-sm font-bold text-foreground">
                {result.showdown.filter(x => x.best).length === 1
                  ? fmt(D.winner, { p: seatLabel(result.showdown.findIndex(x => x.best)), hand: dict.handEval.rankNames[result.showdown.find(x => x.best)!.cat] })
                  : fmt(D.chop, { n: result.showdown.filter(x => x.best).length, hand: dict.handEval.rankNames[result.showdown.find(x => x.best)!.cat] })}
              </p>
            )}
            <p className="mt-3 text-[11px] text-muted-foreground">
              {board.length === 5 && result.showdown
                ? D.showdownNote
                : result.exact ? fmt(D.exactNote, { n: result.samples.toLocaleString(dict.numberLocale) }) : fmt(D.mcNote, { n: result.samples.toLocaleString(dict.numberLocale) })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 1. Outs Calculator
// ─────────────────────────────────────────────
// Outs per preset — labels/descriptions live in dict.outs.presets (aligned by index).
const DRAW_PRESETS = [
  { outs: 0, custom: true },
  { outs: 9 },
  { outs: 8 },
  { outs: 12 },
  { outs: 4 },
  { outs: 6 },
  { outs: 4 },
  { outs: 2 },
  { outs: 15 },
];

function ec(n: number, out: boolean) {
  if (n<=0) return 0;
  if (out) { const d=47; return Math.round((1-(d-n)/d*((d-1-n)/(d-1)))*1000)/10; }
  return Math.round((n/46)*1000)/10;
}
function rule(n: number, m: 4|2) { return Math.min(n*m,100); }
function pcolor(p: number) { return p>=35?"text-green-400":p>=20?"text-yellow-400":"text-red-400"; }
function pbg(p: number) { return p>=35?"bg-green-400":p>=20?"bg-yellow-400":"bg-red-400"; }
function plabel(p: number, v: CalcDict["outs"]["verdict"]) { return p>=45?v.great:p>=35?v.good:p>=25?v.fair:p>=15?v.poor:v.veryPoor; }

function OutsCalc() {
  const { dict, pf } = useCalc();
  const D = dict.outs;
  const [sel, setSel] = useState(1);
  const [custom, setCustom] = useState(9);
  const [stage, setStage] = useState<"flop"|"flop1"|"turn">("flop");
  const preset = DRAW_PRESETS[sel];
  const presetText = D.presets[sel];
  const outs = preset.custom ? custom : preset.outs;
  const flop = ec(outs, true);
  const turn = ec(outs, false);
  // ★2026-09-17 optional third street: flop → next card only (o/47) — the figure when facing one bet on the flop
  const hasFlopOne = !!(D.flopOneBtn && D.afterFlopOne && D.chanceFlopOne);
  const flop1 = Math.round((outs / 47) * 1000) / 10;
  const pct = stage === "flop" ? flop : stage === "flop1" ? flop1 : turn;
  const ruleN: 4|2 = stage === "flop" ? 4 : 2;
  const stages = hasFlopOne ? (["flop","flop1","turn"] as const) : (["flop","turn"] as const);
  const stageBtn = (s: "flop"|"flop1"|"turn") => s === "flop" ? D.afterFlopBtn : s === "flop1" ? D.flopOneBtn : D.afterTurnBtn;
  const cards: [string, number, string, string][] = hasFlopOne
    ? [["flop", flop, D.afterFlop, D.ruleOf4], ["flop1", flop1, D.afterFlopOne!, D.ruleOf2], ["turn", turn, D.afterTurn, D.ruleOf2]]
    : [["flop", flop, D.afterFlop, D.ruleOf4], ["turn", turn, D.afterTurn, D.ruleOf2]];
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="outs-draw" className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">{D.drawType}</label>
          <select id="outs-draw" value={sel} onChange={e => setSel(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus:border-primary">
            {DRAW_PRESETS.map((p,i) => (
              <option key={i} value={i}>{D.presets[i].label}{!p.custom ? fmt(D.outsSuffix, { n: p.outs }) : ""}</option>
            ))}
          </select>
          {!preset.custom && presetText.desc && (
            <p className="mt-2 text-xs text-muted-foreground">{presetText.desc}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">{D.street}</label>
          <div className={`grid gap-2 ${hasFlopOne ? "grid-cols-3" : "grid-cols-2"}`}>
            {stages.map(s => (
              <button key={s} onClick={() => setStage(s)} aria-pressed={stage === s}
                className={`py-3 rounded-xl text-sm font-bold border transition-all ${stage===s ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:border-primary/50"}`}>
                {stageBtn(s)}
              </button>
            ))}
          </div>
        </div>
      </div>
      {preset.custom && (
        <div>
          <label htmlFor="outs-custom" className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">
            {fmtNodes(D.outsCount, { v: <span className="text-primary text-base">{custom}</span> })}
          </label>
          <input id="outs-custom" type="range" min={1} max={20} value={custom} onChange={e => setCustom(Number(e.target.value))}
            className="w-full accent-primary h-2 rounded-full" />
          <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>1</span><span>5</span><span>10</span><span>15</span><span>20</span></div>
        </div>
      )}
      <div className={`grid gap-3 ${hasFlopOne ? "grid-cols-3" : "grid-cols-2"}`}>
        {cards.map(([k, val, lbl, ruleLbl]) => (
          <div key={String(k)} className={`rounded-xl p-4 border text-center transition-all ${stage===k ? "border-primary/60 bg-primary/5" : "border-border bg-card"}`}>
            <p className="text-xs text-muted-foreground mb-1">{String(lbl)}</p>
            <p className="text-xs text-muted-foreground/60 mb-2">{String(ruleLbl)}</p>
            <p className={`text-3xl font-black ${pcolor(Number(val))}`}>{pf(Number(val))}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-card border border-border p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">{stage==="flop" ? D.chanceFlop : stage==="flop1" ? D.chanceFlopOne : D.chanceTurn}{D.exact}</p>
            <p className={`text-5xl sm:text-6xl font-black tabular-nums ${pcolor(pct)}`}>{pf(pct)}</p>
            <p className={`text-sm font-bold mt-1 ${pcolor(pct)}`}>{plabel(pct, D.verdict)}</p>
          </div>
          <div className="text-right text-xs text-muted-foreground space-y-1">
            <p>{fmtNodes(D.ruleMental, { n: ruleN })}</p>
            <p className="text-foreground font-bold text-base">{outs} × {ruleN} = ~{pf(rule(outs, ruleN))}</p>
            <p className="text-primary/70 text-[10px]">{D.exactNote}</p>
          </div>
        </div>
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <motion.div className={`h-3 rounded-full ${pbg(pct)}`}
            initial={{ width:0 }} animate={{ width:`${Math.min(pct,100)}%` }}
            transition={{ duration:0.6, ease:"easeOut" }} />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          {[0, 25, 50, 75, 100].map(v => <span key={v}>{pf(v)}</span>)}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 2. Pot Odds + Implied Odds
// ─────────────────────────────────────────────
function PotOddsCalc() {
  const { dict, nf, nd, pf } = useCalc();
  const D = dict.pot;
  const [pot, setPot] = useState(100);
  const [call, setCall] = useState(30);
  const [eq, setEq] = useState(20);
  const [implied, setImplied] = useState(0);
  const [showImplied, setShowImplied] = useState(false);
  const potOdds = call > 0 ? Math.round(call / (pot + call) * 1000) / 10 : 0;
  const impliedPot = pot + implied;
  const impliedOdds = call > 0 ? Math.round(call / (impliedPot + call) * 1000) / 10 : 0;
  const threshold = showImplied ? impliedOdds : potOdds;
  // ★ equity == required equity is break-even (EV 0), not a fold.
  //   A single `eq > threshold` printed "23% < 23% → losing", an inequality that does not hold.
  const verdict: "call" | "even" | "fold" =
    eq > threshold ? "call" : eq < threshold ? "fold" : "even";

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="pot-size" className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">{D.potSize}</label>
          <input id="pot-size" type="number" value={pot} onChange={e => setPot(Math.max(0,Number(e.target.value)))}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus:border-primary" step={10} />
        </div>
        <div>
          <label htmlFor="pot-call" className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">{D.callAmount}</label>
          <input id="pot-call" type="number" value={call} onChange={e => setCall(Math.max(0,Number(e.target.value)))}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus:border-primary" step={5} />
        </div>
      </div>

      <div className="rounded-2xl bg-card border border-border p-5">
        <p className="text-xs text-muted-foreground mb-1">{D.potOddsCaption}</p>
        <div className="flex items-end gap-3">
          <span className="text-4xl sm:text-5xl font-black tabular-nums text-primary">{pf(potOdds)}</span>
          <span className="text-sm text-muted-foreground mb-2">{D.orHigher}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1 font-mono">
          {nf(call)} ÷ ({nf(pot)} + {nf(call)}) = {pf(potOdds)}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="pot-equity" className="block text-xs font-bold text-muted-foreground uppercase tracking-wide">
            {fmtNodes(D.equityLabel, { v: <span className="text-primary">{pf(eq)}</span> })}
          </label>
        </div>
        <input id="pot-equity" type="range" min={1} max={85} value={eq} onChange={e => setEq(Number(e.target.value))}
          className="w-full accent-primary h-2 rounded-full" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>{pf(1)}</span><span>{D.sliderGutshot}</span><span>{D.sliderFlush}</span><span>{pf(85)}</span>
        </div>
      </div>

      <div>
        <button onClick={() => setShowImplied(!showImplied)} aria-expanded={showImplied}
          className="flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          {fmtNodes(D.impliedToggle, { toggle: showImplied ? D.close : D.add })}
        </button>
        <AnimatePresence>
          {showImplied && (
            <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} className="overflow-hidden">
              <div className="pb-4">
                <label htmlFor="pot-implied" className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">
                  {fmtNodes(D.extraWinnings, { v: <span className="text-blue-400">{nf(implied)}</span> })}
                </label>
                <input id="pot-implied" type="range" min={0} max={2000} step={10} value={implied} onChange={e => setImplied(Number(e.target.value))}
                  className="w-full h-2 rounded-full" style={{ accentColor: "#60a5fa" }} />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>{D.none}</span><span>{nf(1000)}</span><span>{nf(2000)}</span>
                </div>
                {implied > 0 && (
                  <div className="mt-3 rounded-xl bg-blue-400/5 border border-blue-400/20 p-3">
                    <p className="text-xs text-muted-foreground">{D.impliedCaption}</p>
                    <p className="text-2xl font-black text-blue-400 mt-1">{pf(impliedOdds)}</p>
                    <p className="text-xs text-muted-foreground mt-1">{fmtNodes(D.impliedNote, { n: nf(implied) })}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {(() => {
        // ★2026-09-19 `needPot`/`needImplied`/`verdict.*.body` carry the "%" themselves (fr even carries
        //   the gap: «les cotes du pot {n} %») — so the placeholder takes `nd()`, never `pf()`.
        const need = showImplied && implied > 0 ? fmt(D.needImplied, { n: nd(impliedOdds) }) : fmt(D.needPot, { n: nd(threshold) });
        const eqText = nd(eq);
        const V = {
          call: { box:"border-green-500/50 bg-green-500/10", text:"text-green-400", icon:"✅", title:D.verdict.call.title,
                  body:fmt(D.verdict.call.body, { eq: eqText, need }) },
          even: { box:"border-yellow-500/50 bg-yellow-500/10", text:"text-yellow-400", icon:"⚖️", title:D.verdict.even.title,
                  body:fmt(D.verdict.even.body, { eq: eqText, need }) },
          fold: { box:"border-red-500/50 bg-red-500/10", text:"text-red-400", icon:"❌", title:D.verdict.fold.title,
                  body:fmt(D.verdict.fold.body, { eq: eqText, need }) },
        }[verdict];
        return (
          <motion.div key={verdict} animate={{ scale:[1,1.02,1] }} transition={{ duration:0.3 }}
            className={`rounded-2xl p-5 border-2 text-center ${V.box}`}>
            <div className="text-4xl mb-2">{V.icon}</div>
            <p className={`text-2xl font-black mb-2 ${V.text}`}>{V.title}</p>
            <p className="text-sm text-muted-foreground">{V.body}</p>
          </motion.div>
        );
      })()}
    </div>
  );
}

// ─────────────────────────────────────────────
// 3. Hand Evaluator
// ─────────────────────────────────────────────
// Example hands per rank (high → low); names come from dict.handEval.rankNames.
const HAND_EXAMPLES = [
  { rank: 9, color:"text-yellow-300", ex:"A♠K♠Q♠J♠T♠" },
  { rank: 8, color:"text-yellow-400", ex:"9♥8♥7♥6♥5♥" },
  { rank: 7, color:"text-purple-400", ex:"A♠A♥A♦A♣K♠" },
  { rank: 6, color:"text-blue-400", ex:"K♠K♥K♦Q♠Q♥" },
  { rank: 5, color:"text-cyan-400", ex:"A♠J♠8♠5♠2♠" },
  { rank: 4, color:"text-green-400", ex:"T♠9♥8♦7♣6♠" },
  { rank: 3, color:"text-green-500", ex:"Q♠Q♥Q♦K♠A♥" },
  { rank: 2, color:"text-lime-400", ex:"A♠A♥K♠K♥Q♦" },
  { rank: 1, color:"text-muted-foreground", ex:"A♠A♥K♦Q♠J♥" },
  { rank: 0, color:"text-muted-foreground/50", ex:"A♠K♥Q♦J♣9♠" },
];

function HandEvaluatorCalc() {
  const { dict } = useCalc();
  const D = dict.handEval;
  const [cards, setCards] = useState<Card[]>([]);
  const toggle = (c: Card) => setCards(prev => {
    const id = cardId(c);
    if (prev.some(x => cardId(x) === id)) return prev.filter(x => cardId(x) !== id);
    if (prev.length >= 7) return prev;
    return [...prev, c];
  });
  const result = useMemo(() => bestHand(cards), [cards]);
  const barWidth = result ? ((result.rank + 1) / 10) * 100 : 0;

  return (
    <div className="space-y-6">
      <CardPicker selected={cards} max={7} onToggle={toggle} onClear={() => setCards([])}
        label={D.pickerLabel} />

      <div className="rounded-2xl bg-card border border-border p-5">
        {!result ? (
          <div className="text-center py-6">
            <p className="text-3xl mb-3">🃏</p>
            <p className="text-muted-foreground text-sm">{D.emptyTitle}</p>
            <p className="text-xs text-muted-foreground mt-2">{D.emptyHint}</p>
          </div>
        ) : (
          <motion.div initial={false} animate={{ opacity:1, scale:1 }} className="text-center">
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">
              {fmtNodes(D.bestFrom, { n: cards.length })}
            </p>
            <p className={`text-3xl sm:text-4xl font-black mb-4 ${result.color}`}>{D.resultNames[result.rank]}</p>
            <div className="flex justify-center gap-2 mb-4">
              {D.rankNames.map((n, i) => (
                <div key={i} className={`w-2 h-6 rounded-full transition-all ${i <= result.rank ? pbg(i * 11) : "bg-muted"}`} title={n} />
              ))}
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <motion.div className={`h-3 rounded-full ${pbg(barWidth)}`}
                initial={{ width:0 }} animate={{ width:`${barWidth}%` }}
                transition={{ duration:0.8, ease:"easeOut" }} />
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              {D.axis.map(a => <span key={a}>{a}</span>)}
            </div>
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
        {HAND_EXAMPLES.map(h => (
          <div key={h.rank} className="bg-card border border-border rounded-lg p-2 text-center">
            <p className={`text-[10px] font-bold ${h.color} leading-tight`}>{D.rankNames[h.rank]}</p>
            <p className="text-[9px] text-muted-foreground mt-1 font-mono">{h.ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 4. Starting Hand Strength
// ─────────────────────────────────────────────
function StartingHandCalc() {
  const { dict } = useCalc();
  const D = dict.starting;
  const [cards, setCards] = useState<Card[]>([]);
  const toggle = (c: Card) => setCards(prev => {
    const id = cardId(c);
    if (prev.some(x => cardId(x) === id)) return prev.filter(x => cardId(x) !== id);
    if (prev.length >= 2) return prev;
    return [...prev, c];
  });

  const result = useMemo(() => {
    if (cards.length !== 2) return null;
    const name = getHandName(cards[0], cards[1]);
    const entry = lookupHand(name);
    const text = entry ? D.hands[entry[1]] : undefined;
    if (!entry || !text) {
      const [hi, lo] = cards[0].rank >= cards[1].rank ? [cards[0], cards[1]] : [cards[1], cards[0]];
      return { name, tier: fallbackTier(hi, lo), desc: D.unknownDesc, action: D.unknownAction };
    }
    return { name, tier: entry[0], desc: text.desc, action: text.action };
  }, [cards, D]);

  const tierMeta = result ? TIER_INFO[result.tier] : null;
  const tierNames = ["", ...D.tierNames];

  return (
    <div className="space-y-6">
      <CardPicker selected={cards} max={2} onToggle={toggle} onClear={() => setCards([])}
        label={D.pickerLabel} />

      <div className="rounded-2xl bg-card border border-border p-5 min-h-[160px] flex items-center justify-center">
        {!result ? (
          <div className="text-center">
            <p className="text-3xl mb-2">🂠🂠</p>
            <p className="text-muted-foreground text-sm">{D.emptyPrompt}</p>
          </div>
        ) : (
          <motion.div initial={false} animate={{ opacity:1, y:0 }} className="w-full">
            <div className={`rounded-xl border p-5 mb-4 ${tierMeta?.bg}`}>
              <div className="flex items-center justify-between mb-3">
                <p className={`text-3xl sm:text-4xl font-black font-mono ${tierMeta?.color}`}>{displayHandName(result.name)}</p>
                <div className={`text-center px-3 py-1.5 rounded-lg border ${tierMeta?.bg}`}>
                  <p className={`text-xs font-bold ${tierMeta?.color}`}>{tierNames[result.tier]}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{result.desc}</p>
              {/* 09-20: 폴백 문구가 3분기로 길어지면서 390px에서 라벨이 한 글자씩 세로로 쌓였다
                  (캡처가 잡았다 — 게이트는 못 본다). 좁은 화면에서는 라벨을 위로 올린다. */}
              <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-2 mt-3">
                <span className="shrink-0 whitespace-nowrap text-xs font-bold text-foreground uppercase tracking-wide">{D.recommendedAction}</span>
                <span className={`text-sm font-bold ${tierMeta?.color}`}>{result.action}</span>
              </div>
            </div>
            <div className="flex justify-between gap-1">
              {[1,2,3,4,5].map(t => (
                <div key={t} className={`flex-1 h-2.5 rounded-full ${result.tier <= t ? TIER_BAR[t as 1|2|3|4|5] : "bg-muted"}`} />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              {D.axis.map(a => <span key={a}>{a}</span>)}
            </div>
          </motion.div>
        )}
      </div>

      <div>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">{D.summaryTitle}</p>
        <div className="space-y-2">
          {D.summary.map((row, i) => {
            const t = (i + 1) as 1|2|3|4|5;
            return (
              <div key={t} className={`flex items-center gap-3 rounded-lg p-2.5 border ${TIER_INFO[t].bg}`}>
                <span className={`text-xs font-black w-4 ${TIER_INFO[t].color}`}>{t}</span>
                <span className={`text-xs font-mono flex-1 ${TIER_INFO[t].color}`}>{row.hands}</span>
                <span className="text-xs text-muted-foreground">{row.action}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 5. SPR Calculator
// ─────────────────────────────────────────────
// Zone colors (text in dict.spr.zones). actionColors align with the zone's 3 action rows.
const SPR_ZONE_STYLE = {
  low:  { color:"text-red-400",    bg:"bg-red-400/10 border-red-400/40",       actionColors:["text-red-400","text-yellow-400","text-muted-foreground"] },
  mid:  { color:"text-yellow-400", bg:"bg-yellow-400/10 border-yellow-400/40", actionColors:["text-green-400","text-yellow-400","text-muted-foreground"] },
  high: { color:"text-blue-400",   bg:"bg-blue-400/10 border-blue-400/40",     actionColors:["text-green-400","text-blue-400","text-yellow-400"] },
  deep: { color:"text-green-400",  bg:"bg-green-400/10 border-green-400/40",   actionColors:["text-green-400","text-blue-400","text-red-400"] },
} as const;

function SPRCalc() {
  const { dict, nf, nd } = useCalc();
  const D = dict.spr;
  const [stack, setStack] = useState(500);
  const [pot, setPot] = useState(100);
  const spr = pot > 0 ? Math.round(stack / pot * 10) / 10 : 0;

  const zoneKey = spr <= 0 ? null : spr < 4 ? "low" : spr < 8 ? "mid" : spr < 15 ? "high" : "deep";
  const zone = zoneKey ? { ...SPR_ZONE_STYLE[zoneKey], ...D.zones[zoneKey] } : null;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="spr-stack" className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">{D.effectiveStack}</label>
          <input id="spr-stack" type="number" value={stack} onChange={e => setStack(Math.max(0,Number(e.target.value)))}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus:border-primary" step={50} />
        </div>
        <div>
          <label htmlFor="spr-pot" className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">{D.potSize}</label>
          <input id="spr-pot" type="number" value={pot} onChange={e => setPot(Math.max(1,Number(e.target.value)))}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus:border-primary" step={10} />
        </div>
      </div>

      <div className="rounded-2xl bg-card border border-border p-5">
        <p className="text-xs text-muted-foreground mb-1">{D.caption}</p>
        <div className="flex items-end gap-3">
          <p className={`text-5xl sm:text-6xl font-black tabular-nums ${zone?.color || "text-foreground"}`}>{nd(spr)}</p>
          <p className="text-sm text-muted-foreground mb-2">{D.stackDivPot}</p>
        </div>
        <p className="text-xs font-mono text-muted-foreground mt-1">{nf(stack)} ÷ {nf(pot)} = {nd(spr)}</p>
      </div>

      {zone && (
        <motion.div initial={false} animate={{ opacity:1, y:0 }}
          className={`rounded-2xl border p-5 ${zone.bg}`}>
          <p className={`text-lg font-black mb-2 ${zone.color}`}>{zone.label}</p>
          <p className="text-sm text-muted-foreground mb-4">{zone.desc}</p>
          <div className="space-y-2">
            {zone.actions.map(([hand, act], i) => (
              <div key={String(hand)} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <span className="text-sm text-foreground font-bold">{hand}</span>
                <span className={`text-sm font-bold ${zone.actionColors[i]}`}>{act}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-4 gap-2">
        {[
          { r:"SPR < 4", c:"bg-red-400/20 border-red-400/40 text-red-400" },
          { r:"4 ≤ SPR < 8", c:"bg-yellow-400/20 border-yellow-400/40 text-yellow-400" },
          { r:"8 ≤ SPR < 15", c:"bg-blue-400/20 border-blue-400/40 text-blue-400" },
          { r:"SPR ≥ 15", c:"bg-green-400/20 border-green-400/40 text-green-400" },
        ].map((z, i) => (
          <div key={z.r} className={`rounded-lg border p-2.5 text-center ${z.c}`}>
            <p className="text-base font-black">{z.r}</p>
            <p className="text-xs mt-0.5 opacity-80">{D.legend[i]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 6. Tournament M Value
// ─────────────────────────────────────────────
// Zone colors + legend ranges (text in dict.m.zones).
const M_ZONES = [
  { key:"dead",   range:"< 1",   color:"text-red-500",    bg:"bg-red-900/30 border-red-500/40",       legendBg:"bg-red-900/20 border-red-500/30" },
  { key:"red",    range:"1–5",   color:"text-red-400",    bg:"bg-red-500/10 border-red-500/40",       legendBg:"bg-red-500/10 border-red-500/30" },
  { key:"orange", range:"6–9",   color:"text-orange-400", bg:"bg-orange-500/10 border-orange-500/40", legendBg:"bg-orange-500/10 border-orange-500/30" },
  { key:"yellow", range:"10–19", color:"text-yellow-400", bg:"bg-yellow-500/10 border-yellow-500/40", legendBg:"bg-yellow-500/10 border-yellow-500/30" },
  { key:"green",  range:"20+",   color:"text-green-400",  bg:"bg-green-500/10 border-green-500/40",   legendBg:"bg-green-500/10 border-green-500/30" },
] as const;

function MValueCalc() {
  const { dict, nf, nd } = useCalc();
  const D = dict.m;
  const [stack, setStack] = useState(15000);
  const [bb, setBb] = useState(400);
  const [sb, setSb] = useState(200);
  const [ante, setAnte] = useState(50);
  const [players, setPlayers] = useState(9);

  const orbit = bb + sb + ante * players;
  const M = orbit > 0 ? Math.round(stack / orbit * 10) / 10 : 0;

  const zoneDef = M <= 0 ? null : M_ZONES[M < 1 ? 0 : M < 6 ? 1 : M < 10 ? 2 : M < 20 ? 3 : 4];
  const zone = zoneDef ? { ...zoneDef, ...D.zones[zoneDef.key] } : null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label:D.inputs.stack, val:stack, set:setStack, step:1000 },
          { label:D.inputs.bb, val:bb, set:setBb, step:100 },
          { label:D.inputs.sb, val:sb, set:setSb, step:50 },
          { label:D.inputs.ante, val:ante, set:setAnte, step:25 },
        ].map((f, index) => (
          <div key={f.label}>
            <label htmlFor={`m-input-${index}`} className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">{f.label}</label>
            <input id={`m-input-${index}`} type="number" value={f.val} onChange={e => f.set(Math.max(0,Number(e.target.value)))}
              className="w-full px-3 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus:border-primary" step={f.step} />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="m-players" className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">
          {fmtNodes(D.players, { v: <span className="text-primary">{players}</span> })}
        </label>
        <input id="m-players" type="range" min={2} max={10} value={players} onChange={e => setPlayers(Number(e.target.value))}
          className="w-full accent-primary h-2 rounded-full" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>{D.headsUp}</span><span>6</span><span>10</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-card border border-border p-5">
          <p className="text-xs text-muted-foreground mb-1">{D.orbitCaption}</p>
          <p className="text-3xl font-black text-foreground">{nf(orbit)}</p>
          <p className="text-xs font-mono text-muted-foreground mt-1">
            {fmtNodes(D.orbitFormula, { bb: nf(bb), sb: nf(sb), ante: nf(ante), players })}
          </p>
        </div>
        <div className={`rounded-2xl border p-5 ${zone?.bg || "bg-card border-border"}`}>
          <p className="text-xs text-muted-foreground mb-1">{D.mCaption}</p>
          <p className={`text-4xl sm:text-5xl font-black tabular-nums ${zone?.color || "text-foreground"}`}>{nd(M)}</p>
          <p className="text-xs font-mono text-muted-foreground mt-1">
            {nf(stack)} ÷ {nf(orbit)} = {nd(M)}
          </p>
        </div>
      </div>

      {zone && (
        <motion.div initial={false} animate={{ opacity:1, y:0 }}
          className={`rounded-2xl border p-5 ${zone.bg}`}>
          <p className={`text-xl font-black mb-2 ${zone.color}`}>{zone.name}</p>
          <p className="text-sm text-muted-foreground">{zone.desc}</p>
        </motion.div>
      )}

      <div className="space-y-2">
        {M_ZONES.map(z => (
          <div key={D.zones[z.key].name} className={`flex items-center gap-3 rounded-lg border p-2.5 ${z.legendBg}`}>
            <span className={`text-sm font-black w-28 ${z.color}`}>{D.zones[z.key].name}</span>
            <span className={`text-sm font-mono font-bold ${z.color} w-12`}>{z.range}</span>
            <span className="text-xs text-muted-foreground">{D.zones[z.key].action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// ICM Calculator
// ─────────────────────────────────────────────
function computeICM(stacks: number[], prizes: number[]): number[] {
  const n = stacks.length;
  if (n === 0 || prizes.length === 0) return [];
  const total = stacks.reduce((a, b) => a + b, 0);
  if (total === 0) return new Array(n).fill(0);
  const equity = new Array(n).fill(0);
  const m = Math.min(prizes.length, n);
  const size = 1 << n;
  const pc = new Uint8Array(size);
  for (let i = 1; i < size; i++) pc[i] = pc[i >> 1] + (i & 1);
  const ms = new Float64Array(size);
  for (let i = 0; i < n; i++) {
    const b = 1 << i;
    for (let mask = b; mask < size; mask++) {
      if ((mask & b) !== 0) ms[mask] += stacks[i];
    }
  }
  const dp = new Float64Array(size);
  dp[0] = 1;
  for (let pos = 0; pos < m; pos++) {
    for (let mask = 0; mask < size; mask++) {
      if (dp[mask] === 0 || pc[mask] !== pos) continue;
      const remSum = total - ms[mask];
      if (remSum <= 0) continue;
      for (let i = 0; i < n; i++) {
        if ((mask >> i) & 1) continue;
        const p = stacks[i] / remSum;
        equity[i] += dp[mask] * p * prizes[pos];
        dp[mask | (1 << i)] += dp[mask] * p;
      }
    }
  }
  return equity;
}

const ICM_DEFAULT_STACKS = [15000, 12000, 10000, 8000, 6000, 4000, 3000, 2000, 1000];
const ICM_DEFAULT_PRIZES = [5000, 3000, 2000, 1000, 600, 400];

function ICMCalc() {
  const { dict, nf, nd, pf } = useCalc();
  const D = dict.icm;
  const [numPlayers, setNumPlayers] = useState(6);
  const [numPrizes, setNumPrizes] = useState(3);
  const [stacks, setStacks] = useState<number[]>([...ICM_DEFAULT_STACKS]);
  const [prizes, setPrizes] = useState<number[]>([...ICM_DEFAULT_PRIZES]);

  const icmResult = useMemo(() => {
    const s = stacks.slice(0, numPlayers);
    const p = prizes.slice(0, numPrizes);
    if (s.some(v => v <= 0) || p.some(v => v <= 0)) return null;
    return computeICM(s, p);
  }, [stacks, numPlayers, prizes, numPrizes]);

  const totalChips = stacks.slice(0, numPlayers).reduce((a, b) => a + b, 0);
  const totalPrize = prizes.slice(0, numPrizes).reduce((a, b) => a + b, 0);

  const fmtNum = (n: number) => {
    // ★2026-09-19 the "M"/"k" abbreviations stay English, but their decimal separator is the locale's.
    if (n >= 1000000) return nd(n / 1000000, 1) + "M";
    if (n >= 1000) return nf(Math.round(n / 1000)) + "k";
    return nf(n);
  };

  const MEDALS = ["🥇","🥈","🥉","4","5","6","7","8","9"];

  const updateStack = (i: number, val: number) =>
    setStacks(s => { const n = [...s]; n[i] = Math.max(0, val); return n; });
  const updatePrize = (i: number, val: number) =>
    setPrizes(p => { const n = [...p]; n[i] = Math.max(0, val); return n; });

  return (
    <div className="space-y-6">
      <div className="bg-primary/8 border border-primary/20 rounded-xl p-4 text-sm text-foreground/80 leading-relaxed">
        <strong className="text-primary">{D.introStrong}</strong>{D.introRest}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-muted-foreground mb-2 block font-bold uppercase tracking-wider">{D.numPlayers}</label>
          <div className="flex gap-1.5 flex-wrap">
            {[2,3,4,5,6,7,8,9].map(n => (
              <button key={n} onClick={() => { setNumPlayers(n); setNumPrizes(p => Math.min(p, n)); }}
                aria-pressed={numPlayers === n}
                className={`w-9 h-9 rounded-lg text-sm font-bold border transition-all ${numPlayers===n ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border text-muted-foreground hover:border-primary/50"}`}>
                {n}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs text-muted-foreground mb-2 block font-bold uppercase tracking-wider">{D.paidPlaces}</label>
          <div className="flex gap-1.5 flex-wrap">
            {[1,2,3,4,5,6].map(n => (
              <button key={n} onClick={() => setNumPrizes(Math.min(n, numPlayers))}
                aria-pressed={numPrizes === n}
                className={`w-9 h-9 rounded-lg text-sm font-bold border transition-all ${numPrizes===n ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border text-muted-foreground hover:border-primary/50"}`}>
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="text-xs text-muted-foreground mb-3 font-bold uppercase tracking-wider flex items-center justify-between">
            <span>{D.stacksTitle}</span>
            <span className="text-foreground/50 text-[10px] normal-case">{fmtNodes(D.total, { n: nf(totalChips) })}</span>
          </div>
          <div className="space-y-2">
            {Array.from({ length: numPlayers }, (_, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-xs font-bold text-muted-foreground w-10 flex-shrink-0 text-center">{MEDALS[i]}</span>
                <button aria-label={fmt(D.decStack, { n: i + 1 })} onClick={() => updateStack(i, stacks[i] - 1000)}
                  className="w-8 h-8 rounded-md bg-background border border-border text-muted-foreground hover:border-primary/50 flex-shrink-0 text-xs font-bold">−</button>
                <input
                  type="number"
                  aria-label={fmt(D.stackInput, { n: i + 1 })}
                  value={stacks[i] ?? 1000}
                  onChange={e => updateStack(i, parseInt(e.target.value) || 0)}
                  className="flex-1 min-w-0 bg-background border border-border rounded-lg px-2 py-1.5 text-sm text-foreground text-right font-mono"
                />
                <button aria-label={fmt(D.incStack, { n: i + 1 })} onClick={() => updateStack(i, stacks[i] + 1000)}
                  className="w-8 h-8 rounded-md bg-background border border-border text-muted-foreground hover:border-primary/50 flex-shrink-0 text-xs font-bold">+</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs text-muted-foreground mb-3 font-bold uppercase tracking-wider flex items-center justify-between">
            <span>{D.prizesTitle}</span>
            <span className="text-foreground/50 text-[10px] normal-case">{fmtNodes(D.total, { n: fmtNum(totalPrize) })}</span>
          </div>
          <div className="space-y-2">
            {Array.from({ length: numPrizes }, (_, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-xs font-bold text-muted-foreground w-10 flex-shrink-0 text-center">{MEDALS[i]}</span>
                <button aria-label={fmt(D.decPrize, { n: i + 1 })} onClick={() => updatePrize(i, prizes[i] - 500)}
                  className="w-8 h-8 rounded-md bg-background border border-border text-muted-foreground hover:border-primary/50 flex-shrink-0 text-xs font-bold">−</button>
                <input
                  type="number"
                  aria-label={fmt(D.prizeInput, { n: i + 1 })}
                  value={prizes[i] ?? 0}
                  onChange={e => updatePrize(i, parseInt(e.target.value) || 0)}
                  className="flex-1 min-w-0 bg-background border border-border rounded-lg px-2 py-1.5 text-sm text-foreground text-right font-mono"
                />
                <button aria-label={fmt(D.incPrize, { n: i + 1 })} onClick={() => updatePrize(i, prizes[i] + 500)}
                  className="w-8 h-8 rounded-md bg-background border border-border text-muted-foreground hover:border-primary/50 flex-shrink-0 text-xs font-bold">+</button>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground/50 mt-2">{D.currencyNote}</p>
        </div>
      </div>

      {icmResult ? (
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
          <div className="text-xs text-muted-foreground mb-3 font-bold uppercase tracking-wider">{D.resultTitle}</div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-background/50 border-b border-border">
                  <th className="px-3 py-2.5 text-left text-muted-foreground font-bold">{D.th.player}</th>
                  <th className="px-3 py-2.5 text-right text-muted-foreground font-bold hidden sm:table-cell">{D.th.chips}</th>
                  <th className="px-3 py-2.5 text-right text-muted-foreground font-bold hidden sm:table-cell">{D.th.chipPct}</th>
                  <th className="px-3 py-2.5 text-right text-primary font-bold">{D.th.icmValue}</th>
                  <th className="px-3 py-2.5 text-right text-muted-foreground font-bold">{D.th.icmPct}</th>
                  {D.th.chop && <th className="px-3 py-2.5 text-right text-muted-foreground font-bold">{D.th.chop}</th>}
                  <th className="px-3 py-2.5 text-right text-muted-foreground font-bold">{D.th.diff}</th>
                </tr>
              </thead>
              <tbody>
                {icmResult.map((equity, i) => {
                  const chipPct = (stacks[i] / totalChips) * 100;
                  const icmPct = (equity / totalPrize) * 100;
                  const diff = icmPct - chipPct;
                  return (
                    <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-primary/5 transition-colors">
                      <td className="px-3 py-2.5 font-bold text-foreground">{fmtNodes(D.playerCell, { medal: MEDALS[i], n: i+1 })}<span className="block sm:hidden text-[10px] font-mono font-normal text-muted-foreground mt-0.5">{nf(stacks[i])} · {pf(chipPct, 1)}</span></td>
                      <td className="px-3 py-2.5 text-right font-mono text-muted-foreground hidden sm:table-cell">{nf(stacks[i])}</td>
                      <td className="px-3 py-2.5 text-right font-mono text-muted-foreground hidden sm:table-cell">{pf(chipPct, 1)}</td>
                      <td className="px-3 py-2.5 text-right font-mono font-bold text-primary">{nf(Math.round(equity))}</td>
                      <td className="px-3 py-2.5 text-right font-mono">{pf(icmPct, 1)}</td>
                      {/* ★2026-09-17 chip chop = chip share × remaining prize pool — optional column (dict.icm.th.chop) */}
                      {D.th.chop && <td className="px-3 py-2.5 text-right font-mono text-muted-foreground">{nf(Math.round((stacks[i] / totalChips) * totalPrize))}</td>}
                      <td className={`px-3 py-2.5 text-right font-mono font-bold ${diff > 0.1 ? "text-green-400" : diff < -0.1 ? "text-red-400" : "text-muted-foreground"}`}>
                        {diff > 0 ? "+" : ""}{pf(diff, 1)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-muted-foreground">
            <div className="flex items-start gap-1.5 bg-card border border-border rounded-lg px-3 py-2">
              <span className="text-green-400 font-bold flex-shrink-0">{D.diffPlus}</span>
              <span>{D.diffPlusNote}</span>
            </div>
            <div className="flex items-start gap-1.5 bg-card border border-border rounded-lg px-3 py-2">
              <span className="text-red-400 font-bold flex-shrink-0">{D.diffMinus}</span>
              <span>{D.diffMinusNote}</span>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="text-center py-6 text-muted-foreground text-sm">
          {D.empty}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// 8. Push/Fold — Nash chart (heads-up + 6-max/9-max first-in)
// Data: lib/pushfold-data.ts, lib/pushfold-multiway-data.ts
// (computed & verified offline by scripts/gen-pushfold.mjs)
// ─────────────────────────────────────────────
const PF_RANKS = ["A","K","Q","J","T","9","8","7","6","5","4","3","2"];
const PF_POS_LABELS: Record<string, string> = { UTG:"UTG", UTG1:"UTG+1", MP:"MP", LJ:"LJ", HJ:"HJ", CO:"CO", BTN:"BTN", SB:"SB" };

function pfLabel(r: number, c: number): string {
  if (r === c) return PF_RANKS[r] + PF_RANKS[c];
  return c > r ? PF_RANKS[r] + PF_RANKS[c] + "s" : PF_RANKS[c] + PF_RANKS[r] + "o";
}
function pfCombos(r: number, c: number): number {
  return r === c ? 6 : c > r ? 4 : 12;
}

function PushFoldCalc() {
  const { dict, locale, nf, pf } = useCalc();
  const D = dict.pushfold;
  const [table, setTable] = useState<"hu" | 6 | 9>("hu");
  const [pos, setPos] = useState("BTN");
  const [stack, setStack] = useState(12);
  const [ante, setAnte] = useState(false);
  const [view, setView] = useState<"push" | "call">("push");

  const positions = table === "hu" ? null : PF_MW_POSITIONS[table];
  const posSafe = positions && positions.includes(pos) ? pos : "BTN";

  const huMasks = useMemo(() => pfLookup(stack, ante), [stack, ante]);
  const mask = useMemo(
    () => (table === "hu" ? (view === "push" ? huMasks.push : huMasks.call) : pfLookupMultiway(table, posSafe, stack, ante)),
    [table, posSafe, stack, ante, view, huMasks]
  );
  const isCall = table === "hu" && view === "call";

  const stat = useMemo(() => {
    let combos = 0;
    for (let r = 0; r < 13; r++) for (let c = 0; c < 13; c++) if (mask[r * 13 + c]) combos += pfCombos(r, c);
    return { combos, pct: Math.round((combos / 1326) * 1000) / 10 };
  }, [mask]);

  const anteButtons = (
    <div>
      <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">{D.ante}</label>
      <div className="grid grid-cols-2 gap-2">
        {([[false, D.noAnte], [true, D.bbAnteOn]] as const).map(([v, l]) => (
          <button key={String(v)} onClick={() => setAnte(v)} aria-pressed={ante === v}
            className={`py-3 rounded-xl text-sm font-bold border transition-all ${ante === v ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:border-primary/50"}`}>
            {l}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-6 lg:items-start">
      <div className="space-y-5">
      <div>
        <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">{D.table}</label>
        <div className="grid grid-cols-3 gap-2">
          {([["hu", D.headsUp], [6, D.sixMax], [9, D.nineMax]] as const).map(([v, l]) => (
            <button key={String(v)} onClick={() => setTable(v)} aria-pressed={table === v}
              className={`py-3 rounded-xl text-sm font-bold border transition-all ${table === v ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:border-primary/50"}`}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {table === "hu" ? (
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">{D.scenario}</label>
            <div className="grid grid-cols-2 gap-2">
              {([["push", D.sbShove], ["call", D.bbCall]] as const).map(([v, l]) => (
                <button key={v} onClick={() => setView(v)} aria-pressed={view === v}
                  className={`py-3 rounded-xl text-sm font-bold border transition-all ${view === v ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:border-primary/50"}`}>
                  {l}
                </button>
              ))}
            </div>
          </div>
          {anteButtons}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">
              {fmtNodes(D.position, { hint: <span className="normal-case font-semibold text-muted-foreground/70">{D.firstInHint}</span> })}
            </label>
            <div className={`grid gap-2 ${table === 9 ? "grid-cols-4" : "grid-cols-5"}`}>
              {positions!.map((p) => (
                <button key={p} onClick={() => setPos(p)} aria-pressed={posSafe === p}
                  className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${posSafe === p ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:border-primary/50"}`}>
                  {PF_POS_LABELS[p]}
                </button>
              ))}
            </div>
          </div>
          {anteButtons}
        </div>
      )}

      <div>
        <label htmlFor="pushfold-stack" className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">
          {fmtNodes(D.effectiveStack, { v: <span className="text-primary text-base tabular-nums">{stack}bb</span> })}
        </label>
        <input id="pushfold-stack" type="range" min={PF_STACK_MIN} max={PF_STACK_MAX} step={PF_STACK_STEP} value={stack}
          onChange={e => setStack(Number(e.target.value))} className="w-full accent-primary h-2 rounded-full" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>1bb</span><span>5</span><span>10</span><span>15</span><span>20</span><span>25bb</span>
        </div>
      </div>

      <div className="rounded-2xl bg-card border border-border p-5">
        <p className="text-xs text-muted-foreground mb-1">
          {table === "hu"
            ? (view === "push" ? fmt(D.captionHuPush, { stack }) : fmt(D.captionHuCall, { stack }))
            : fmt(D.captionMw, { pos: PF_POS_LABELS[posSafe], table, stack })}
          {ante ? D.withAnte : ""}
        </p>
        <div className="flex items-end gap-3">
          <p className={`text-4xl sm:text-5xl font-black tabular-nums ${isCall ? "text-green-400" : "text-primary"}`}>{pf(stat.pct)}</p>
          <p className="text-sm text-muted-foreground mb-1.5">{nf(stat.combos)}{fmt(D.combosSuffix, { total: nf(1326) })}</p>
        </div>
      </div>
      </div>

      {/* ★ Legend sits ABOVE the grid — see app/calculator/calculator-client.tsx for the reason
          (a reader reported the highlighted cells "having a hole in the middle"). */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-[3px] bg-primary inline-block" />{D.legendPush}</span>
          {table === "hu" && (
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-[3px] bg-green-500/90 inline-block" />{D.legendCall}</span>
          )}
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-[3px] bg-card/70 border border-border/50 inline-block" />{D.legendFold}</span>
        </div>
        <p className="text-xs leading-relaxed break-keep text-muted-foreground rounded-lg bg-muted/40 border border-border/60 px-3 py-2">
          <strong className="text-foreground/85">{D.note.strong1}</strong><br />
          {D.note.p1}<strong className="text-foreground/85">{D.note.strong2}</strong>{D.note.p2}{sep(D.note.p2)}
          <strong className="text-foreground/85">{D.note.strong3}</strong>{D.note.p3}
        </p>
        <div className="grid gap-[2px]" style={{ gridTemplateColumns: "repeat(13, minmax(0, 1fr))" }}>
          {Array.from({ length: 169 }, (_, i) => {
            const r = Math.floor(i / 13), c = i % 13;
            const on = mask[i];
            return (
              <div key={i}
                title={fmt(D.cellTitle, { hand: pfLabel(r, c), action: on ? (isCall ? D.cell.call : D.cell.push) : D.cell.fold })}
                className={`aspect-square flex items-center justify-center rounded-[3px] text-[8px] sm:text-[10px] font-bold tracking-tighter transition-colors ${
                  on
                    ? isCall
                      ? "bg-green-500/90 text-green-950"
                      : "bg-primary text-primary-foreground"
                    : "bg-card/70 text-muted-foreground/40"
                }`}>
                {pfLabel(r, c)}
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-2 rounded-xl bg-primary/8 border border-primary/20 p-4 text-xs sm:text-sm text-foreground/80 leading-relaxed">
        {table === "hu" ? (
          <>
            <strong className="text-primary">{D.huNote.strong}</strong>{D.huNote.p1}<em>{D.huNote.em}</em>{D.huNote.p2}
          </>
        ) : (
          <>
            <strong className="text-primary">{fmt(D.mwNote.strong, { table })}</strong>{D.mwNote.p1}<strong>{D.mwNote.strong2}</strong>{D.mwNote.p2}
          </>
        )}
        {sep(table === "hu" ? D.huNote.p2 : D.mwNote.p2)}{D.readMore}{sep(D.readMore)}
        <a href={`/${locale}/blog/${D.shortStackLink.slug}`} className="text-primary font-semibold underline underline-offset-2">{D.shortStackLink.text}</a>{D.readMoreEnd}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
const GUIDE_ICONS = ["🎯", "💰", "🃏", "📊", "📐", "🏆", "📈", "⚡"];

export default function CalculatorTool({ locale, dict, faq }: { locale: string; dict: CalcDict; faq: { q: string; a: string }[] }) {
  const ctx = useMemo<Ctx>(() => {
    const nd = (n: number, fixed = 0) =>
      n.toLocaleString(dict.numberLocale, { minimumFractionDigits: fixed, maximumFractionDigits: Math.max(fixed, 1) });
    return {
      dict,
      locale,
      nf: (n: number) => n.toLocaleString(dict.numberLocale),
      nd,
      pf: (n: number, fixed = 0) => `${nd(n, fixed)}${dict.percentGap ?? ""}%`,
    };
  }, [dict, locale]);

  // ─── Tab Config ───
  // ★2026-09-17 「Equity」 탭은 dict.equity가 있는 로케일에만 — 맨 앞(초기 탭 = SSR되는 유일한 탭 · «poker odds calculator» 의도).
  const TABS = useMemo(() => [
    ...(dict.equity ? [{ id:"equity", icon:<Layers className="w-4 h-4" />, label:dict.equity.label, sub:dict.equity.sub, component:<EquityCalc /> }] : []),
    { id:"outs",     icon:<Target className="w-4 h-4" />,      label:dict.tabs.outs.label,     sub:dict.tabs.outs.sub,     component:<OutsCalc /> },
    { id:"pot",      icon:<TrendingUp className="w-4 h-4" />,  label:dict.tabs.pot.label,      sub:dict.tabs.pot.sub,      component:<PotOddsCalc /> },
    { id:"hand",     icon:<Layers className="w-4 h-4" />,      label:dict.tabs.hand.label,     sub:dict.tabs.hand.sub,     component:<HandEvaluatorCalc /> },
    { id:"starting", icon:<Calculator className="w-4 h-4" />,  label:dict.tabs.starting.label, sub:dict.tabs.starting.sub, component:<StartingHandCalc /> },
    { id:"spr",      icon:<BarChart3 className="w-4 h-4" />,   label:dict.tabs.spr.label,      sub:dict.tabs.spr.sub,      component:<SPRCalc /> },
    { id:"m",        icon:<Trophy className="w-4 h-4" />,      label:dict.tabs.m.label,        sub:dict.tabs.m.sub,        component:<MValueCalc /> },
    { id:"icm",      icon:<BarChart3 className="w-4 h-4" />,   label:dict.tabs.icm.label,      sub:dict.tabs.icm.sub,      component:<ICMCalc /> },
    { id:"pushfold", icon:<Zap className="w-4 h-4" />,         label:dict.tabs.pushfold.label, sub:dict.tabs.pushfold.sub, component:<PushFoldCalc /> },
  ] as const, [dict]);

  const workspaceLabels = useMemo(() => ({
    tablist: dict.workspace.chooseCalculator,
    reset: dict.workspace.resetInputs,
    resetAria: (label: string) => fmt(dict.workspace.resetAria, { label }),
    resetMessage: (label: string) => fmt(dict.workspace.resetMessage, { label }),
  }), [dict]);

  const G = dict.icmGuide;
  const bold = (t: string) => <strong className="text-foreground">{t}</strong>;

  return (
    <CalcCtx.Provider value={ctx}>
      <SEO
        /* 🔴 Must equal the server metadata of the locale's page.tsx (seo.tsx overwrites it at runtime).
           ⚠ Suffix rule: the server declares title:{absolute:"… | Brand"} while seo.tsx appends
              `| ${siteName}` itself — so the dict title carries NO suffix. */
        title={dict.seo.title}
        description={dict.seo.description}
        path={dict.seo.path}
      />

      {/* Hero */}
      <section className="relative pt-14 sm:pt-16 pb-12 overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 opacity-70 pointer-events-none" style={{
          backgroundImage:`radial-gradient(ellipse 900px 380px at 28% -10%, hsl(43 55% 82% / 0.55) 0%, transparent 60%), radial-gradient(ellipse 700px 340px at 92% 8%, hsl(152 35% 84% / 0.4) 0%, transparent 60%)`
        }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge-gold">{dict.hero.badges[0]}</span>
            <span className="badge-gold">{dict.hero.badges[1]}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 tracking-tight text-foreground">
            {dict.hero.h1}<br />
            <span className="text-gold-gradient">{dict.hero.h1Sub}</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
            {dict.hero.lead}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {dict.hero.chips.map(f => (
              <span key={f} className="text-xs font-semibold text-foreground/80 bg-card border border-border rounded-full px-3 py-1.5 shadow-sm">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Area */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <CalculatorWorkspace tabs={TABS} labels={workspaceLabels} />
      </section>

      {/* SEO Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 space-y-12">
        {/* ICM usage — bubble worked example */}
        <div className="border-t border-border pt-10">
          <p className="mb-3"><span className="badge-gold">{G.bubble.badge}</span></p>
          <h2 className="text-xl sm:text-2xl font-black text-foreground mb-3">{G.bubble.h2}</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 max-w-3xl">
            {G.bubble.intro}
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card border-b border-border">
                  <th className="px-3 py-2.5 text-left font-bold text-muted-foreground">{G.bubble.th.player}</th>
                  <th className="px-3 py-2.5 text-right font-bold text-muted-foreground">{G.bubble.th.chipPct}</th>
                  <th className="px-3 py-2.5 text-right font-bold text-primary-ink">{G.bubble.th.icmPct}</th>
                  <th className="px-3 py-2.5 text-right font-bold text-muted-foreground">{G.bubble.th.diff}</th>
                </tr>
              </thead>
              <tbody>
                {G.bubble.rows.map(({ player: p, chip, icm, diff, up }) => (
                  <tr key={p} className="border-b border-border/60 last:border-0">
                    <td className="px-3 py-2.5 font-bold text-foreground">{p}</td>
                    <td className="px-3 py-2.5 text-right font-mono text-muted-foreground">{chip}</td>
                    <td className="px-3 py-2.5 text-right font-mono font-bold text-foreground">{icm}</td>
                    <td className={`px-3 py-2.5 text-right font-mono font-bold ${up ? "text-green-600" : "text-red-500"}`}>{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-5 max-w-3xl">
            {fmtNodes(G.bubble.keyPoint.text, { b1: bold(G.bubble.keyPoint.b1), b2: bold(G.bubble.keyPoint.b2), b3: bold(G.bubble.keyPoint.b3) })}
          </p>
        </div>

        {/* ICM deal vs chip chop */}
        <div>
          <p className="mb-3"><span className="badge-gold">{G.deal.badge}</span></p>
          <h2 className="text-xl sm:text-2xl font-black text-foreground mb-3">{G.deal.h2}</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 max-w-3xl">
            {G.deal.intro}
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card border-b border-border">
                  <th className="px-3 py-2.5 text-left font-bold text-muted-foreground">{G.deal.th.player}</th>
                  <th className="px-3 py-2.5 text-right font-bold text-muted-foreground">{G.deal.th.chop}</th>
                  <th className="px-3 py-2.5 text-right font-bold text-primary-ink">{G.deal.th.icm}</th>
                  <th className="px-3 py-2.5 text-right font-bold text-muted-foreground">{G.deal.th.diff}</th>
                </tr>
              </thead>
              <tbody>
                {G.deal.rows.map(({ player: p, chop, icm, diff, up }) => (
                  <tr key={p} className="border-b border-border/60 last:border-0">
                    <td className="px-3 py-2.5 font-bold text-foreground">{p}</td>
                    <td className="px-3 py-2.5 text-right font-mono text-muted-foreground">{chop}</td>
                    <td className="px-3 py-2.5 text-right font-mono font-bold text-foreground">{icm}</td>
                    <td className={`px-3 py-2.5 text-right font-mono font-bold ${up ? "text-green-600" : "text-red-500"}`}>{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-5 max-w-3xl">
            {fmtNodes(G.deal.summary.text, { b1: bold(G.deal.summary.b1), b2: bold(G.deal.summary.b2), b3: bold(G.deal.summary.b3) })}
          </p>
          {G.deal.link && (
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 max-w-3xl">
              {G.deal.linkLead}{sep(G.deal.linkLead)}<a href={`/${locale}/blog/${G.deal.link.slug}`} className="text-primary-ink font-semibold underline underline-offset-2">{G.deal.link.text}</a>
            </p>
          )}
        </div>

        {/* Tool guide cards */}
        <div>
          <p className="mb-3"><span className="badge-gold">{dict.guide.badge}</span></p>
          <h2 className="text-xl sm:text-2xl font-black text-foreground mb-6">{dict.guide.h2}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {dict.guide.cards.map((c, i) => (
              <div key={c.title} className="luxe-card p-5 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">{c.icon ?? GUIDE_ICONS[i]}</div>
                <div>
                  <h3 className="text-base font-black text-foreground mb-1.5">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick reference tables — ★2026-09-17 · static, indexable summaries of the tool data (dict.quickRef, optional) */}
        {dict.quickRef?.map(sec => (
          <div key={sec.h2}>
            <p className="mb-3"><span className="badge-gold">{sec.badge}</span></p>
            <h2 className="text-xl sm:text-2xl font-black text-foreground mb-3">{sec.h2}</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 max-w-3xl">{sec.intro}</p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-card border-b border-border">
                    {/* ★2026-09-17 (zh-hant) CJK 헤더는 nowrap 열이면 헤더도 한 줄 — 「翻牌→河牌」가 390px에서 3줄로 꺾였다(zh·ja 동형). 라틴 헤더(EN)는 불변 */}
                    {sec.th.map((h, i) => (
                      <th key={h} className={`px-3 py-2.5 font-bold ${i === 0 || (sec.nowrap?.includes(i) && /[぀-ヿ一-鿿]/.test(h)) ? "whitespace-nowrap" : ""} ${sec.align?.[i] === "right" ? "text-right" : "text-left"} ${i === sec.emphasis ? "text-primary-ink" : "text-muted-foreground"}`}>{glueArrow(h)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sec.rows.map((row, ri) => (
                    <tr key={ri} className="border-b border-border/60 last:border-0">
                      {row.map((cell, ci) => (
                        <td key={ci} className={`px-3 py-2.5 ${sec.align?.[ci] === "right" ? "text-right font-mono" : ""} ${ci === 0 || sec.nowrap?.includes(ci) ? "whitespace-nowrap" : ""} ${ci === 0 ? "font-bold text-foreground" : ci === sec.emphasis ? "font-bold text-foreground" : "text-muted-foreground"}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {sec.note && (
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-5 max-w-3xl">
                {sec.note}{sec.link && <>{sep(sec.note)}<a href={`/${locale}/blog/${sec.link.slug}`} className="text-primary-ink font-semibold underline underline-offset-2">{sec.link.text}</a>{sec.linkTail ?? ""}</>}
              </p>
            )}
          </div>
        ))}

        {/* FAQ */}
        <div>
          <p className="mb-3"><span className="badge-gold">{dict.faq.badge}</span></p>
          <h2 className="text-xl sm:text-2xl font-black text-foreground mb-6">{dict.faq.h2}</h2>
          <div className="space-y-3">
            {faq.map((f, i) => (
              <details key={i} className="luxe-card p-5 group" open={i === 0}>
                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-foreground gap-3">
                  <span>{fmtNodes(dict.faq.q, { q: f.q })}</span>
                  <span className="text-primary-ink transition-transform group-open:rotate-45 text-xl leading-none flex-shrink-0">+</span>
                </summary>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Related guides (calculator → blog) */}
        <div>
          <p className="mb-3"><span className="badge-gold">{dict.related.badge}</span></p>
          <h2 className="text-xl sm:text-2xl font-black text-foreground mb-6">{dict.related.h2}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {dict.related.links.map(l => (
              <a key={l.slug} href={`/${locale}/blog/${l.slug}`} className="luxe-card p-4 flex items-center justify-between gap-3 group">
                <div>
                  <p className="font-bold text-foreground text-sm group-hover:text-primary-ink transition-colors">{l.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{l.desc}</p>
                </div>
                <span className="text-primary-ink flex-shrink-0 text-lg">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </CalcCtx.Provider>
  );
}
