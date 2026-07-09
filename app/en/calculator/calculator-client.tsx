"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/seo";
import { Calculator, TrendingUp, Layers, Target, Trophy, BarChart3 } from "lucide-react";
import { CALCULATOR_FAQ_EN } from "./faq";

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

function evaluate5(cards: Card[]): { rank: number; name: string; color: string } {
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

  if (isFlush && isStraight && !isWheel && uniq[0]===12) return { rank:9, name:"Royal Flush 👑", color:"text-yellow-300" };
  if (isFlush && isStraight) return { rank:8, name:"Straight Flush 🌟", color:"text-yellow-400" };
  if (cnts[0]===4) return { rank:7, name:"Four of a Kind 💎", color:"text-purple-400" };
  if (cnts[0]===3 && cnts[1]===2) return { rank:6, name:"Full House 🏠", color:"text-blue-400" };
  if (isFlush) return { rank:5, name:"Flush 🌊", color:"text-cyan-400" };
  if (isStraight) return { rank:4, name:"Straight ➡️", color:"text-green-400" };
  if (cnts[0]===3) return { rank:3, name:"Three of a Kind 3️⃣", color:"text-green-500" };
  if (cnts[0]===2 && cnts[1]===2) return { rank:2, name:"Two Pair ✌️", color:"text-lime-400" };
  if (cnts[0]===2) return { rank:1, name:"One Pair 1️⃣", color:"text-muted-foreground" };
  return { rank:0, name:"High Card 🃏", color:"text-muted-foreground" };
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

type TierEntry = [1|2|3|4|5, string, string, string];
const HAND_TABLE: TierEntry[] = [
  [1, "AA", "The best hand. Raise in every spot", "Always raise/re-raise (3-bet)"],
  [1, "KK", "Only watch for an ace on the flop", "Always raise/re-raise"],
  [1, "QQ", "Stronger than JJ, but don't overvalue", "Always raise; careful when deep"],
  [1, "JJ", "Watch for overcards on the flop", "Raise from any position"],
  [1, "1010", "Loses value when overcards flop", "Raise mid/late, consider calling EP"],
  [1, "AKs", "The best drawing hand. Build the pot", "Always raise/re-raise"],
  [1, "AKo", "Weaker than AKs but still premium", "Always raise; can call a re-raise"],
  [2, "AQs", "Strong hand; more valuable in position", "Raise from most positions"],
  [2, "AJs", "Great on BTN/CO, weak from UTG", "Raise mid/late, consider calling EP"],
  [2, "A10s", "One of the top suited aces", "Raise in LP, call in EP"],
  [2, "KQs", "High flush + straight draw potential", "Raise from most positions"],
  [2, "KJs", "Strong drawing hand", "Raise in LP, call in EP"],
  [2, "99",  "Medium pair, watch overcard flops", "Raise most positions; careful deep"],
  [2, "88",  "Pocket pair with good set potential", "Raise LP, consider calling EP"],
  [2, "AQo", "Weaker offsuit; position matters", "Raise in mid/late position"],
  [3, "AJo", "Weak in EP, strong in LP", "Raise CO/BTN, careful in EP"],
  [3, "KQo", "Top offsuit connector", "Raise in LP, call/fold in EP"],
  [3, "K10s", "Suited king, strong in LP", "Raise LP, fold EP"],
  [3, "QJs", "Strong two-way draws", "Raise LP, more valuable when deep"],
  [3, "J10s", "One of the best suited connectors", "Raise LP, call EP on pot odds"],
  [3, "109s", "Strong suited connector", "Raise/call in LP"],
  [3, "77",  "Set-mining hand, watch overcards", "Raise LP, call EP"],
  [3, "A9s", "Suited ace with flush potential", "Raise in LP"],
  [4, "66",  "Set-mining; needs pot odds", "Call/raise LP, best multiway"],
  [4, "55",  "Little value without a set", "Call LP, single-raised pots"],
  [4, "A8s", "Medium suited ace", "Play LP, fold EP"],
  [4, "A7s", "Medium suited ace", "Play LP only"],
  [4, "A6s", "Medium suited ace", "Play LP only"],
  [4, "A5s", "Wheel + ace-blocker value; a favorite 3-bet bluff", "LP only; implied odds matter"],
  [4, "A4s", "Suited ace with a wheel draw", "LP only"],
  [4, "A3s", "Bottom of the suited aces", "BTN/SB only"],
  [4, "A2s", "Wheel + nut flush, but weak", "BTN only"],
  [4, "KJo", "Domination risk; LP only", "Raise CO/BTN, fold to a re-raise"],
  [4, "QJo", "Moderate connectivity; needs position", "LP only"],
  [4, "98s", "Strong suited connector", "Call/raise LP"],
  [4, "87s", "Good suited connector", "Call LP"],
  [4, "76s", "Suited connector", "Call LP on pot odds"],
  [5, "44",  "Almost no value without a set", "Call only at low pot odds"],
  [5, "33",  "Needs to set-mine; speculative", "Multiway pots, cheap calls only"],
  [5, "22",  "Lowest pocket pair", "Multiway pots, cheap calls only"],
  [5, "K10o", "K-10 offsuit, weak", "Occasionally from BTN"],
  [5, "Q10o", "Low-connectivity offsuit", "BTN only"],
  [5, "J10o", "Decent offsuit but vulnerable", "Occasionally from BTN"],
  [3, "Q10s", "Strong suited broadway, plays well in position", "Raise LP, call EP on pot odds"],
  [4, "A10o", "Marginal offsuit ace, domination-prone", "LP only"],
  [4, "65s", "Suited connector; wants multiway/implied odds", "Call LP"],
  [4, "54s", "Low suited connector; speculative", "Call LP, cheap multiway pots"],
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
              Clear all
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// 1. Outs Calculator
// ─────────────────────────────────────────────
const DRAW_PRESETS = [
  { label: "Custom input", outs: 0, custom: true },
  { label: "Nut flush draw", outs: 9, desc: "4 cards of a suit → need the 5th" },
  { label: "Open-ended straight draw (OESD)", outs: 8, desc: "e.g. 5-6-7-8, need a 4 or 9" },
  { label: "Flush + gutshot combo", outs: 12, desc: "9 flush + 3 gutshot (overlap removed)" },
  { label: "Gutshot straight", outs: 4, desc: "e.g. 5-6-8-9, need just a 7" },
  { label: "Two overcards", outs: 6, desc: "2 high ranks not on board × 3 each" },
  { label: "Two pair → full house", outs: 4, desc: "e.g. A-K on an A-K-x board → 2 aces + 2 kings left" },
  { label: "One pair → trips", outs: 2, desc: "2 cards of the rank remain" },
  { label: "Flush + OESD (monster)", outs: 15, desc: "9 flush + 8 straight (2 overlap)" },
];

function ec(n: number, out: boolean) {
  if (n<=0) return 0;
  if (out) { const d=47; return Math.round((1-(d-n)/d*((d-1-n)/(d-1)))*1000)/10; }
  return Math.round((n/46)*1000)/10;
}
function rule(n: number, m: 4|2) { return Math.min(n*m,100); }
function pcolor(p: number) { return p>=35?"text-green-400":p>=20?"text-yellow-400":"text-red-400"; }
function pbg(p: number) { return p>=35?"bg-green-400":p>=20?"bg-yellow-400":"bg-red-400"; }
function plabel(p: number) { return p>=45?"Great 🔥":p>=35?"Good ✅":p>=25?"Fair ⚠️":p>=15?"Poor ❌":"Very poor 💀"; }

function OutsCalc() {
  const [sel, setSel] = useState(1);
  const [custom, setCustom] = useState(9);
  const [stage, setStage] = useState<"flop"|"turn">("flop");
  const preset = DRAW_PRESETS[sel];
  const outs = preset.custom ? custom : preset.outs;
  const flop = ec(outs, true);
  const turn = ec(outs, false);
  const pct = stage === "flop" ? flop : turn;
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Draw type</label>
          <select value={sel} onChange={e => setSel(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary">
            {DRAW_PRESETS.map((p,i) => (
              <option key={i} value={i}>{p.label}{!p.custom ? ` (${p.outs} outs)` : ""}</option>
            ))}
          </select>
          {!preset.custom && preset.desc && (
            <p className="mt-2 text-xs text-muted-foreground">{preset.desc}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Street</label>
          <div className="grid grid-cols-2 gap-2">
            {(["flop","turn"] as const).map(s => (
              <button key={s} onClick={() => setStage(s)}
                className={`py-3 rounded-xl text-sm font-bold border transition-all ${stage===s ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:border-primary/50"}`}>
                {s==="flop" ? "🃏 After flop" : "🔄 After turn"}
              </button>
            ))}
          </div>
        </div>
      </div>
      {preset.custom && (
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">
            Number of outs: <span className="text-primary text-base">{custom}</span>
          </label>
          <input type="range" min={1} max={20} value={custom} onChange={e => setCustom(Number(e.target.value))}
            className="w-full accent-primary h-2 rounded-full" />
          <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>1</span><span>5</span><span>10</span><span>15</span><span>20</span></div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-3">
        {[["flop", flop, "After flop", "Rule of 4"], ["turn", turn, "After turn", "Rule of 2"]].map(([k, val, lbl, ruleLbl]) => (
          <div key={String(k)} className={`rounded-xl p-4 border text-center transition-all ${stage===k ? "border-primary/60 bg-primary/5" : "border-border bg-card"}`}>
            <p className="text-xs text-muted-foreground mb-1">{String(lbl)}</p>
            <p className="text-xs text-muted-foreground/60 mb-2">{String(ruleLbl)}</p>
            <p className={`text-3xl font-black ${pcolor(Number(val))}`}>{val}%</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-card border border-border p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">{stage==="flop" ? "Chance to complete after the flop" : "Chance to complete after the turn"} (exact)</p>
            <p className={`text-5xl sm:text-6xl font-black tabular-nums ${pcolor(pct)}`}>{pct}%</p>
            <p className={`text-sm font-bold mt-1 ${pcolor(pct)}`}>{plabel(pct)}</p>
          </div>
          <div className="text-right text-xs text-muted-foreground space-y-1">
            <p>Rule of {stage==="flop"?4:2} (mental math):</p>
            <p className="text-foreground font-bold text-base">{outs} × {stage==="flop"?4:2} = ~{rule(outs, stage==="flop"?4:2)}%</p>
            <p className="text-primary/70 text-[10px]">Value above is the exact figure</p>
          </div>
        </div>
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <motion.div className={`h-3 rounded-full ${pbg(pct)}`}
            initial={{ width:0 }} animate={{ width:`${Math.min(pct,100)}%` }}
            transition={{ duration:0.6, ease:"easeOut" }} />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 2. Pot Odds + Implied Odds
// ─────────────────────────────────────────────
function PotOddsCalc() {
  const [pot, setPot] = useState(100);
  const [call, setCall] = useState(30);
  const [eq, setEq] = useState(20);
  const [implied, setImplied] = useState(0);
  const [showImplied, setShowImplied] = useState(false);
  const potOdds = call > 0 ? Math.round(call / (pot + call) * 1000) / 10 : 0;
  const impliedPot = pot + implied;
  const impliedOdds = call > 0 ? Math.round(call / (impliedPot + call) * 1000) / 10 : 0;
  const threshold = showImplied ? impliedOdds : potOdds;
  const ok = eq > threshold;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Current pot size</label>
          <input type="number" value={pot} onChange={e => setPot(Math.max(0,Number(e.target.value)))}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary" step={10} />
        </div>
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Your call amount</label>
          <input type="number" value={call} onChange={e => setCall(Math.max(0,Number(e.target.value)))}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary" step={5} />
        </div>
      </div>

      <div className="rounded-2xl bg-card border border-border p-5">
        <p className="text-xs text-muted-foreground mb-1">Pot odds (minimum equity needed)</p>
        <div className="flex items-end gap-3">
          <span className="text-4xl sm:text-5xl font-black tabular-nums text-primary">{potOdds}%</span>
          <span className="text-sm text-muted-foreground mb-2">or higher makes the call profitable</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1 font-mono">
          {call.toLocaleString()} ÷ ({pot.toLocaleString()} + {call.toLocaleString()}) = {potOdds}%
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wide">
            Your hand equity: <span className="text-primary">{eq}%</span>
          </label>
        </div>
        <input type="range" min={1} max={85} value={eq} onChange={e => setEq(Number(e.target.value))}
          className="w-full accent-primary h-2 rounded-full" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>1%</span><span>Gutshot 8.7%</span><span>Flush 19%</span><span>85%</span>
        </div>
      </div>

      <div>
        <button onClick={() => setShowImplied(!showImplied)}
          className="flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          Implied odds {showImplied ? "Close ▲" : "Add ▼"}
        </button>
        <AnimatePresence>
          {showImplied && (
            <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} className="overflow-hidden">
              <div className="pb-4">
                <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">
                  Expected extra winnings (if you hit): <span className="text-blue-400">{implied.toLocaleString()}</span>
                </label>
                <input type="range" min={0} max={2000} step={10} value={implied} onChange={e => setImplied(Number(e.target.value))}
                  className="w-full h-2 rounded-full" style={{ accentColor: "#60a5fa" }} />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>None</span><span>1,000</span><span>2,000</span>
                </div>
                {implied > 0 && (
                  <div className="mt-3 rounded-xl bg-blue-400/5 border border-blue-400/20 p-3">
                    <p className="text-xs text-muted-foreground">Implied odds (with extra winnings)</p>
                    <p className="text-2xl font-black text-blue-400 mt-1">{impliedOdds}%</p>
                    <p className="text-xs text-muted-foreground mt-1">Minimum equity needed, counting {implied.toLocaleString()} extra</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div key={ok?"ok":"no"} animate={{ scale:[1,1.02,1] }} transition={{ duration:0.3 }}
        className={`rounded-2xl p-5 border-2 text-center ${ok ? "border-green-500/50 bg-green-500/10" : "border-red-500/50 bg-red-500/10"}`}>
        <div className="text-4xl mb-2">{ok ? "✅" : "❌"}</div>
        <p className={`text-2xl font-black mb-2 ${ok ? "text-green-400" : "text-red-400"}`}>
          {ok ? "Call (profitable)" : "Fold recommended"}
        </p>
        <p className="text-sm text-muted-foreground">
          {ok
            ? `Your equity ${eq}% > ${showImplied && implied>0 ? `implied odds ${impliedOdds}%` : `pot odds ${threshold}%`} → profitable long term`
            : `Your equity ${eq}% < ${showImplied && implied>0 ? `implied odds ${impliedOdds}%` : `pot odds ${threshold}%`} → losing long term`}
        </p>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 3. Hand Evaluator
// ─────────────────────────────────────────────
const HAND_RANK_LABELS = [
  "High Card", "One Pair", "Two Pair", "Three of a Kind", "Straight",
  "Flush", "Full House", "Four of a Kind", "Straight Flush", "Royal Flush"
];

function HandEvaluatorCalc() {
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
        label="Select cards (5–7)" />

      <div className="rounded-2xl bg-card border border-border p-5">
        {!result ? (
          <div className="text-center py-6">
            <p className="text-3xl mb-3">🃏</p>
            <p className="text-muted-foreground text-sm">Pick 5 or more cards to evaluate the hand</p>
            <p className="text-xs text-muted-foreground mt-2">With 7 cards, the best 5-card combination is found automatically</p>
          </div>
        ) : (
          <motion.div initial={false} animate={{ opacity:1, scale:1 }} className="text-center">
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">
              Best hand from {cards.length} cards
            </p>
            <p className={`text-3xl sm:text-4xl font-black mb-4 ${result.color}`}>{result.name}</p>
            <div className="flex justify-center gap-2 mb-4">
              {HAND_RANK_LABELS.map((n, i) => (
                <div key={i} className={`w-2 h-6 rounded-full transition-all ${i <= result.rank ? pbg(i * 11) : "bg-muted"}`} title={n} />
              ))}
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <motion.div className={`h-3 rounded-full ${pbg(barWidth)}`}
                initial={{ width:0 }} animate={{ width:`${barWidth}%` }}
                transition={{ duration:0.8, ease:"easeOut" }} />
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>High Card</span><span>One Pair</span><span>Flush</span><span>Quads</span><span>Royal</span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
        {[
          { name:"Royal Flush", color:"text-yellow-300", ex:"A♠K♠Q♠J♠T♠" },
          { name:"Straight Flush", color:"text-yellow-400", ex:"9♥8♥7♥6♥5♥" },
          { name:"Four of a Kind", color:"text-purple-400", ex:"A♠A♥A♦A♣K♠" },
          { name:"Full House", color:"text-blue-400", ex:"K♠K♥K♦Q♠Q♥" },
          { name:"Flush", color:"text-cyan-400", ex:"A♠J♠8♠5♠2♠" },
          { name:"Straight", color:"text-green-400", ex:"T♠9♥8♦7♣6♠" },
          { name:"Three of a Kind", color:"text-green-500", ex:"Q♠Q♥Q♦K♠A♥" },
          { name:"Two Pair", color:"text-lime-400", ex:"A♠A♥K♠K♥Q♦" },
          { name:"One Pair", color:"text-muted-foreground", ex:"A♠A♥K♦Q♠J♥" },
          { name:"High Card", color:"text-muted-foreground/50", ex:"A♠K♥Q♦J♣9♠" },
        ].map(h => (
          <div key={h.name} className="bg-card border border-border rounded-lg p-2 text-center">
            <p className={`text-[10px] font-bold ${h.color} leading-tight`}>{h.name}</p>
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
    if (!entry) {
      const [tier5] = [5 as const];
      return { name, tier: tier5, desc: "Very weak hand", action: "Usually fold" };
    }
    return { name, tier: entry[0], desc: entry[2], action: entry[3] };
  }, [cards]);

  const tierMeta = result ? TIER_INFO[result.tier] : null;
  const tierNames = ["","🥇 Tier 1 — Premium","🥈 Tier 2 — Strong","🥉 Tier 3 — Playable","⚠️ Tier 4 — Marginal","🚫 Tier 5 — Weak"];

  return (
    <div className="space-y-6">
      <CardPicker selected={cards} max={2} onToggle={toggle} onClear={() => setCards([])}
        label="Select your 2 hole cards" />

      <div className="rounded-2xl bg-card border border-border p-5 min-h-[160px] flex items-center justify-center">
        {!result ? (
          <div className="text-center">
            <p className="text-3xl mb-2">🂠🂠</p>
            <p className="text-muted-foreground text-sm">Pick your 2 hole cards</p>
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
              <div className="flex items-start gap-2 mt-3">
                <span className="text-xs font-bold text-foreground uppercase tracking-wide">Recommended action:</span>
                <span className={`text-sm font-bold ${tierMeta?.color}`}>{result.action}</span>
              </div>
            </div>
            <div className="flex justify-between gap-1">
              {[1,2,3,4,5].map(t => (
                <div key={t} className={`flex-1 h-2.5 rounded-full ${result.tier <= t ? TIER_BAR[t as 1|2|3|4|5] : "bg-muted"}`} />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>Premium</span><span>Strong</span><span>Playable</span><span>Marginal</span><span>Weak</span>
            </div>
          </motion.div>
        )}
      </div>

      <div>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">Hand tier summary</p>
        <div className="space-y-2">
          {([
            [1,"AA KK QQ JJ 10-10 AKs AKo","Always raise"],
            [2,"AQs AJs A10s KQs KJs 99 88 AQo","Raise most positions"],
            [3,"AJo KQo K10s QJs J10s 10-9s 77 A9s","Raise late position"],
            [4,"66–55 A8s–A2s KJo QJo suited connectors","Selective in LP"],
            [5,"44–22 weak offsuit hands","Usually fold"],
          ] as [1|2|3|4|5, string, string][]).map(([t,hands,act]) => (
            <div key={t} className={`flex items-center gap-3 rounded-lg p-2.5 border ${TIER_INFO[t].bg}`}>
              <span className={`text-xs font-black w-4 ${TIER_INFO[t].color}`}>{t}</span>
              <span className={`text-xs font-mono flex-1 ${TIER_INFO[t].color}`}>{hands}</span>
              <span className="text-xs text-muted-foreground">{act}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 5. SPR Calculator
// ─────────────────────────────────────────────
function SPRCalc() {
  const [stack, setStack] = useState(500);
  const [pot, setPot] = useState(100);
  const spr = pot > 0 ? Math.round(stack / pot * 10) / 10 : 0;

  const zone = spr <= 0 ? null
    : spr < 4   ? { label:"Low SPR (committed)", color:"text-red-400", bg:"bg-red-400/10 border-red-400/40",
        desc:"A big part of the pot is already in. With top pair top kicker or better, consider going all-in — folding can be a mistake here.",
        actions:[["TPTK+","Consider all-in","text-red-400"],["Draws","Pot odds are a must","text-yellow-400"],["Weak hands","Fold carefully","text-muted-foreground"]] }
    : spr < 8   ? { label:"Medium SPR (flexible)", color:"text-yellow-400", bg:"bg-yellow-400/10 border-yellow-400/40",
        desc:"This is the zone to play strong hands like two pair or better. Protecting your stack becomes important.",
        actions:[["Two pair+","Value bet","text-green-400"],["One pair","Play it by feel","text-yellow-400"],["Draws","Weigh risk vs reward","text-muted-foreground"]] }
    : spr < 15  ? { label:"High SPR (getting deep)", color:"text-blue-400", bg:"bg-blue-400/10 border-blue-400/40",
        desc:"Stacks are getting deep. Draws and strong made hands rise in relative value.",
        actions:[["Set+","Play strong","text-green-400"],["Draws","Implied odds go up","text-blue-400"],["One pair/TPTK","Proceed with care","text-yellow-400"]] }
    : { label:"Very high SPR (deep)", color:"text-green-400", bg:"bg-green-400/10 border-green-400/40",
        desc:"This is a deep-stacked game. Position, draw potential, and reading opponent ranges matter a lot.",
        actions:[["Nut hands","Can bet big","text-green-400"],["Draws","Very high implied odds","text-blue-400"],["Weak made hands","Careful, vulnerable to bluffs","text-red-400"]] };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Effective stack (yours)</label>
          <input type="number" value={stack} onChange={e => setStack(Math.max(0,Number(e.target.value)))}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary" step={50} />
        </div>
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Current pot size</label>
          <input type="number" value={pot} onChange={e => setPot(Math.max(1,Number(e.target.value)))}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary" step={10} />
        </div>
      </div>

      <div className="rounded-2xl bg-card border border-border p-5">
        <p className="text-xs text-muted-foreground mb-1">SPR (Stack-to-Pot Ratio)</p>
        <div className="flex items-end gap-3">
          <p className={`text-5xl sm:text-6xl font-black tabular-nums ${zone?.color || "text-foreground"}`}>{spr}</p>
          <p className="text-sm text-muted-foreground mb-2">stack ÷ pot</p>
        </div>
        <p className="text-xs font-mono text-muted-foreground mt-1">{stack.toLocaleString()} ÷ {pot.toLocaleString()} = {spr}</p>
      </div>

      {zone && (
        <motion.div initial={false} animate={{ opacity:1, y:0 }}
          className={`rounded-2xl border p-5 ${zone.bg}`}>
          <p className={`text-lg font-black mb-2 ${zone.color}`}>{zone.label}</p>
          <p className="text-sm text-muted-foreground mb-4">{zone.desc}</p>
          <div className="space-y-2">
            {zone.actions.map(([hand, act, c]) => (
              <div key={String(hand)} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <span className="text-sm text-foreground font-bold">{hand}</span>
                <span className={`text-sm font-bold ${c}`}>{act}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-4 gap-2">
        {[
          { r:"< 4", l:"Committed", c:"bg-red-400/20 border-red-400/40 text-red-400" },
          { r:"4–8", l:"Flexible", c:"bg-yellow-400/20 border-yellow-400/40 text-yellow-400" },
          { r:"8–15", l:"Getting deep", c:"bg-blue-400/20 border-blue-400/40 text-blue-400" },
          { r:"> 15", l:"Deep", c:"bg-green-400/20 border-green-400/40 text-green-400" },
        ].map(z => (
          <div key={z.r} className={`rounded-lg border p-2.5 text-center ${z.c}`}>
            <p className="text-base font-black">{z.r}</p>
            <p className="text-xs mt-0.5 opacity-80">{z.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 6. Tournament M Value
// ─────────────────────────────────────────────
function MValueCalc() {
  const [stack, setStack] = useState(15000);
  const [bb, setBb] = useState(400);
  const [sb, setSb] = useState(200);
  const [ante, setAnte] = useState(50);
  const [players, setPlayers] = useState(9);

  const orbit = bb + sb + ante * players;
  const M = orbit > 0 ? Math.round(stack / orbit * 10) / 10 : 0;

  const zone = M <= 0 ? null
    : M < 1  ? { name:"💀 Dead zone", color:"text-red-500", bg:"bg-red-900/30 border-red-500/40",
        desc:"You need to move all-in immediately. There's no room to wait for a better hand — shove your best available hand." }
    : M < 6  ? { name:"🔴 Red zone", color:"text-red-400", bg:"bg-red-500/10 border-red-500/40",
        desc:"You need to double up soon. Use a push/fold strategy — shove your good hands, fold the rest." }
    : M < 10 ? { name:"🟠 Orange zone", color:"text-orange-400", bg:"bg-orange-500/10 border-orange-500/40",
        desc:"Your stack is shrinking. Tighten your range to strong hands only and look to open-shove." }
    : M < 20 ? { name:"🟡 Yellow zone", color:"text-yellow-400", bg:"bg-yellow-500/10 border-yellow-500/40",
        desc:"The pressure is on. You need to actively gather chips — play aggressively when good spots come up." }
    : { name:"🟢 Green zone", color:"text-green-400", bg:"bg-green-500/10 border-green-500/40",
        desc:"You have a comfortable stack. Use a full range of strategies — grow your stack with position play and bluffs." };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label:"Your stack", val:stack, set:setStack, step:1000 },
          { label:"Big blind", val:bb, set:setBb, step:100 },
          { label:"Small blind", val:sb, set:setSb, step:50 },
          { label:"Ante", val:ante, set:setAnte, step:25 },
        ].map(f => (
          <div key={f.label}>
            <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">{f.label}</label>
            <input type="number" value={f.val} onChange={e => f.set(Math.max(0,Number(e.target.value)))}
              className="w-full px-3 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary" step={f.step} />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">
          Players at table: <span className="text-primary">{players}</span>
        </label>
        <input type="range" min={2} max={10} value={players} onChange={e => setPlayers(Number(e.target.value))}
          className="w-full accent-primary h-2 rounded-full" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>2 (heads-up)</span><span>6</span><span>10</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-card border border-border p-5">
          <p className="text-xs text-muted-foreground mb-1">Orbit cost (blinds per lap)</p>
          <p className="text-3xl font-black text-foreground">{orbit.toLocaleString()}</p>
          <p className="text-xs font-mono text-muted-foreground mt-1">
            BB {bb.toLocaleString()} + SB {sb.toLocaleString()} + ante {ante.toLocaleString()}×{players}
          </p>
        </div>
        <div className={`rounded-2xl border p-5 ${zone?.bg || "bg-card border-border"}`}>
          <p className="text-xs text-muted-foreground mb-1">M value (Harrington's M)</p>
          <p className={`text-4xl sm:text-5xl font-black tabular-nums ${zone?.color || "text-foreground"}`}>{M}</p>
          <p className="text-xs font-mono text-muted-foreground mt-1">
            {stack.toLocaleString()} ÷ {orbit.toLocaleString()} = {M}
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
        {([
          ["💀 Dead zone",  "< 1",  "text-red-500",   "bg-red-900/20 border-red-500/30",   "All-in now"],
          ["🔴 Red zone",  "1–5",  "text-red-400",   "bg-red-500/10 border-red-500/30",   "Push/fold"],
          ["🟠 Orange zone","6–9",  "text-orange-400","bg-orange-500/10 border-orange-500/30","Tight range"],
          ["🟡 Yellow zone","10–19","text-yellow-400","bg-yellow-500/10 border-yellow-500/30","Play aggressive"],
          ["🟢 Green zone",  "20+",  "text-green-400", "bg-green-500/10 border-green-500/30", "Full strategy"],
        ] as [string,string,string,string,string][]).map(([name,range,tc,bg,act]) => (
          <div key={name} className={`flex items-center gap-3 rounded-lg border p-2.5 ${bg}`}>
            <span className={`text-sm font-black w-28 ${tc}`}>{name}</span>
            <span className={`text-sm font-mono font-bold ${tc} w-12`}>{range}</span>
            <span className="text-xs text-muted-foreground">{act}</span>
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
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(0) + "k";
    return n.toLocaleString();
  };

  const MEDALS = ["🥇","🥈","🥉","4","5","6","7","8","9"];

  const updateStack = (i: number, val: number) =>
    setStacks(s => { const n = [...s]; n[i] = Math.max(0, val); return n; });
  const updatePrize = (i: number, val: number) =>
    setPrizes(p => { const n = [...p]; n[i] = Math.max(0, val); return n; });

  return (
    <div className="space-y-6">
      <div className="bg-primary/8 border border-primary/20 rounded-xl p-4 text-sm text-foreground/80 leading-relaxed">
        <strong className="text-primary">ICM (Independent Chip Model)</strong> is a way to calculate the real cash value of your tournament chips.
        Even the chip leader's ICM value is lower than their chip share, while short stacks are worth more than theirs.
        Use it for call/fold decisions at the final table and on the bubble.
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-muted-foreground mb-2 block font-bold uppercase tracking-wider">Number of players</label>
          <div className="flex gap-1.5 flex-wrap">
            {[2,3,4,5,6,7,8,9].map(n => (
              <button key={n} onClick={() => { setNumPlayers(n); setNumPrizes(p => Math.min(p, n)); }}
                className={`w-9 h-9 rounded-lg text-sm font-bold border transition-all ${numPlayers===n ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border text-muted-foreground hover:border-primary/50"}`}>
                {n}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs text-muted-foreground mb-2 block font-bold uppercase tracking-wider">Paid places</label>
          <div className="flex gap-1.5 flex-wrap">
            {[1,2,3,4,5,6].map(n => (
              <button key={n} onClick={() => setNumPrizes(Math.min(n, numPlayers))}
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
            <span>Player chip stacks</span>
            <span className="text-foreground/50 text-[10px] normal-case">total {totalChips.toLocaleString()}</span>
          </div>
          <div className="space-y-2">
            {Array.from({ length: numPlayers }, (_, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-xs font-bold text-muted-foreground w-10 flex-shrink-0 text-center">{MEDALS[i]}</span>
                <button onClick={() => updateStack(i, stacks[i] - 1000)}
                  className="w-8 h-8 rounded-md bg-background border border-border text-muted-foreground hover:border-primary/50 flex-shrink-0 text-xs font-bold">−</button>
                <input
                  type="number"
                  value={stacks[i] ?? 1000}
                  onChange={e => updateStack(i, parseInt(e.target.value) || 0)}
                  className="flex-1 min-w-0 bg-background border border-border rounded-lg px-2 py-1.5 text-sm text-foreground text-right font-mono"
                />
                <button onClick={() => updateStack(i, stacks[i] + 1000)}
                  className="w-8 h-8 rounded-md bg-background border border-border text-muted-foreground hover:border-primary/50 flex-shrink-0 text-xs font-bold">+</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs text-muted-foreground mb-3 font-bold uppercase tracking-wider flex items-center justify-between">
            <span>Prizes</span>
            <span className="text-foreground/50 text-[10px] normal-case">total {fmtNum(totalPrize)}</span>
          </div>
          <div className="space-y-2">
            {Array.from({ length: numPrizes }, (_, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-xs font-bold text-muted-foreground w-10 flex-shrink-0 text-center">{MEDALS[i]}</span>
                <button onClick={() => updatePrize(i, prizes[i] - 500)}
                  className="w-8 h-8 rounded-md bg-background border border-border text-muted-foreground hover:border-primary/50 flex-shrink-0 text-xs font-bold">−</button>
                <input
                  type="number"
                  value={prizes[i] ?? 0}
                  onChange={e => updatePrize(i, parseInt(e.target.value) || 0)}
                  className="flex-1 min-w-0 bg-background border border-border rounded-lg px-2 py-1.5 text-sm text-foreground text-right font-mono"
                />
                <button onClick={() => updatePrize(i, prizes[i] + 500)}
                  className="w-8 h-8 rounded-md bg-background border border-border text-muted-foreground hover:border-primary/50 flex-shrink-0 text-xs font-bold">+</button>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground/50 mt-2">Enter prize amounts in any currency unit.</p>
        </div>
      </div>

      {icmResult ? (
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
          <div className="text-xs text-muted-foreground mb-3 font-bold uppercase tracking-wider">ICM result</div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-background/50 border-b border-border">
                  <th className="px-3 py-2.5 text-left text-muted-foreground font-bold">Player</th>
                  <th className="px-3 py-2.5 text-right text-muted-foreground font-bold hidden sm:table-cell">Chips</th>
                  <th className="px-3 py-2.5 text-right text-muted-foreground font-bold hidden sm:table-cell">Chip %</th>
                  <th className="px-3 py-2.5 text-right text-primary font-bold">ICM value</th>
                  <th className="px-3 py-2.5 text-right text-muted-foreground font-bold">ICM %</th>
                  <th className="px-3 py-2.5 text-right text-muted-foreground font-bold">Diff</th>
                </tr>
              </thead>
              <tbody>
                {icmResult.map((equity, i) => {
                  const chipPct = (stacks[i] / totalChips) * 100;
                  const icmPct = (equity / totalPrize) * 100;
                  const diff = icmPct - chipPct;
                  return (
                    <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-primary/5 transition-colors">
                      <td className="px-3 py-2.5 font-bold text-foreground">{MEDALS[i]} P{i+1}<span className="block sm:hidden text-[10px] font-mono font-normal text-muted-foreground mt-0.5">{stacks[i].toLocaleString()} · {chipPct.toFixed(1)}%</span></td>
                      <td className="px-3 py-2.5 text-right font-mono text-muted-foreground hidden sm:table-cell">{stacks[i].toLocaleString()}</td>
                      <td className="px-3 py-2.5 text-right font-mono text-muted-foreground hidden sm:table-cell">{chipPct.toFixed(1)}%</td>
                      <td className="px-3 py-2.5 text-right font-mono font-bold text-primary">{Math.round(equity).toLocaleString()}</td>
                      <td className="px-3 py-2.5 text-right font-mono">{icmPct.toFixed(1)}%</td>
                      <td className={`px-3 py-2.5 text-right font-mono font-bold ${diff > 0.1 ? "text-green-400" : diff < -0.1 ? "text-red-400" : "text-muted-foreground"}`}>
                        {diff > 0 ? "+" : ""}{diff.toFixed(1)}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-muted-foreground">
            <div className="flex items-start gap-1.5 bg-card border border-border rounded-lg px-3 py-2">
              <span className="text-green-400 font-bold flex-shrink-0">+diff</span>
              <span>ICM value above chip share → short-stack protection zone, avoid coin flips</span>
            </div>
            <div className="flex items-start gap-1.5 bg-card border border-border rounded-lg px-3 py-2">
              <span className="text-red-400 font-bold flex-shrink-0">−diff</span>
              <span>ICM value below chip share → the chip leader's aggression pays off more</span>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="text-center py-6 text-muted-foreground text-sm">
          Set stacks and prizes above zero to see the ICM result.
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab Config
// ─────────────────────────────────────────────
const TABS = [
  { id:"outs",     icon:<Target className="w-4 h-4" />,      label:"Outs",       sub:"Draw odds",       component:<OutsCalc /> },
  { id:"pot",      icon:<TrendingUp className="w-4 h-4" />,  label:"Pot Odds",   sub:"Call/fold",       component:<PotOddsCalc /> },
  { id:"hand",     icon:<Layers className="w-4 h-4" />,      label:"Hand Rank",  sub:"Pick cards",      component:<HandEvaluatorCalc /> },
  { id:"starting", icon:<Calculator className="w-4 h-4" />,  label:"Starting Hand", sub:"Open strength", component:<StartingHandCalc /> },
  { id:"spr",      icon:<BarChart3 className="w-4 h-4" />,   label:"SPR",        sub:"Stack/pot ratio", component:<SPRCalc /> },
  { id:"m",        icon:<Trophy className="w-4 h-4" />,      label:"Tournament M", sub:"M value",       component:<MValueCalc /> },
  { id:"icm",      icon:<BarChart3 className="w-4 h-4" />,   label:"ICM",        sub:"Prize equity",    component:<ICMCalc /> },
] as const;

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function CalculatorPageEn() {
  const [active, setActive] = useState<typeof TABS[number]["id"]>("outs");
  const tab = TABS.find(t => t.id === active)!;

  return (
    <>
      <SEO
        title="Poker Odds Calculator — Outs, Pot Odds, Hand Rank, SPR & ICM (Free)"
        description="Free poker calculator for Texas Hold'em: outs & draw odds, pot odds, hand evaluator, starting hand strength, SPR, tournament M value, and an ICM calculator — 7 tools in one."
        path="/en/calculator"
      />

      {/* Hero */}
      <section className="relative pt-14 sm:pt-16 pb-12 overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 opacity-70 pointer-events-none" style={{
          backgroundImage:`radial-gradient(ellipse 900px 380px at 28% -10%, hsl(43 55% 82% / 0.55) 0%, transparent 60%), radial-gradient(ellipse 700px 340px at 92% 8%, hsl(152 35% 84% / 0.4) 0%, transparent 60%)`
        }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge-gold">Free tool</span>
            <span className="badge-gold">Real-time</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 tracking-tight text-foreground">
            Poker Odds Calculator<br />
            <span className="text-gold-gradient">Every Hold'em number in one place</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
            Outs · pot odds · hand evaluator · starting hand strength · SPR · tournament M value · ICM —
            get the math you need at the table, instantly.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {["🎯 Outs","💰 Pot Odds","🃏 Hand Rank","📊 Starting Hand","📐 SPR","🏆 M Value","📈 ICM"].map(f => (
              <span key={f} className="text-xs font-semibold text-foreground/80 bg-card border border-border rounded-full px-3 py-1.5 shadow-sm">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Area */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Tabs — all in one view (mobile 4+3 centered / desktop 7 columns) */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex flex-col items-center justify-center gap-1.5 w-[72px] sm:w-auto sm:flex-1 sm:basis-0 min-h-[62px] px-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                active === t.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {t.icon}
              <span className="leading-tight text-center">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="calc-console rounded-2xl overflow-hidden">
          {/* Panel Header */}
          <div className="px-6 py-5 border-b border-primary/20 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
              {tab.icon}
            </div>
            <div>
              <h2 className="text-lg font-black text-foreground">{tab.label}</h2>
              <p className="text-xs text-muted-foreground">{tab.sub}</p>
            </div>
          </div>

          {/* Panel Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={false}
                animate={{ opacity:1, x:0 }}
                exit={{ opacity:0, x:-10 }}
                transition={{ duration:0.2 }}
              >
                {tab.component}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 space-y-12">
        {/* ICM usage — bubble worked example */}
        <div className="border-t border-border pt-10">
          <p className="mb-3"><span className="badge-gold">ICM guide</span></p>
          <h2 className="text-xl sm:text-2xl font-black text-foreground mb-3">How to use the ICM calculator — a 3-minute bubble example</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 max-w-3xl">
            Say four players remain and three get paid (the bubble). Stacks are 60,000 / 40,000 / 30,000 / 20,000 and the prizes are $500 / $300 / $200. Enter those into the calculator and you get each player's chip share versus their real prize value (ICM):
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card border-b border-border">
                  <th className="px-3 py-2.5 text-left font-bold text-muted-foreground">Player</th>
                  <th className="px-3 py-2.5 text-right font-bold text-muted-foreground">Chip %</th>
                  <th className="px-3 py-2.5 text-right font-bold text-primary">ICM %</th>
                  <th className="px-3 py-2.5 text-right font-bold text-muted-foreground">Diff</th>
                </tr>
              </thead>
              <tbody>
                {([
                  ["🥇 Chip leader", "40.0%", "33.3%", "-6.7pts", false],
                  ["🥈 2nd", "26.7%", "27.2%", "+0.6pts", true],
                  ["🥉 3rd", "20.0%", "22.9%", "+2.9pts", true],
                  ["4th (short stack)", "13.3%", "16.6%", "+3.3pts", true],
                ] as [string, string, string, string, boolean][]).map(([p, chip, icm, diff, up]) => (
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
            The key point: <strong className="text-foreground">the chip leader's ICM value (33.3%) is lower than their chip share (40%)</strong> by 6.7 points. Because winning only pays 1st-place money, the leader gains less prize value from a coin flip than the chip count suggests. So on the bubble the leader should <strong className="text-foreground">apply pressure to short stacks</strong>, while the short stack (13.3% chips → 16.6% ICM) is worth more than its chips and should <strong className="text-foreground">avoid unnecessary all-in calls</strong> to protect that survival value.
          </p>
        </div>

        {/* ICM deal vs chip chop */}
        <div>
          <p className="mb-3"><span className="badge-gold">Prize split</span></p>
          <h2 className="text-xl sm:text-2xl font-black text-foreground mb-3">ICM deal vs chip chop — splitting the prize pool</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 max-w-3xl">
            Now three players are left and discussing a deal. With stacks of 50% / 30% / 20% and $1,500 of prize money left, the two methods split very differently:
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card border-b border-border">
                  <th className="px-3 py-2.5 text-left font-bold text-muted-foreground">Player</th>
                  <th className="px-3 py-2.5 text-right font-bold text-muted-foreground">Chip chop</th>
                  <th className="px-3 py-2.5 text-right font-bold text-primary">ICM deal</th>
                  <th className="px-3 py-2.5 text-right font-bold text-muted-foreground">Diff</th>
                </tr>
              </thead>
              <tbody>
                {([
                  ["🥇 Chip leader (50%)", "$750", "$618", "-$132", false],
                  ["🥈 2nd (30%)", "$450", "$485", "+$35", true],
                  ["🥉 Short stack (20%)", "$300", "$397", "+$97", true],
                ] as [string, string, string, string, boolean][]).map(([p, chop, icm, diff, up]) => (
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
            A chip chop splits by chip share and <strong className="text-foreground">favors the chip leader</strong>; an ICM deal reflects finishing probabilities and is <strong className="text-foreground">fairer to short stacks</strong>. Above, the short stack gets $300 with a chip chop but about $397 with an ICM deal — <strong className="text-foreground">$97 more</strong>. Ask for an ICM deal when you're short; propose a chip chop when you're the leader.
          </p>
        </div>

        {/* Tool guide cards */}
        <div>
          <p className="mb-3"><span className="badge-gold">Tools</span></p>
          <h2 className="text-xl sm:text-2xl font-black text-foreground mb-6">How to use the 7 Hold'em calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon:"🎯", title:"Outs calculator", body:"Precisely calculates the chance your draw completes on the flop or turn. See both the Rule of 4 and 2 shortcut and the exact figure at once." },
              { icon:"💰", title:"Pot odds & implied odds", body:"Decide whether to call or fold with math. When your opponent is deep, add implied odds for a more accurate decision." },
              { icon:"🃏", title:"Hand evaluator", body:"Pick cards to check the hand rank. Enter up to 7 cards and it finds the best 5-card combination automatically." },
              { icon:"📊", title:"Starting hand strength", body:"Pick your two hole cards to see which of the 169 hands it is and the recommended action by position." },
              { icon:"📐", title:"SPR (Stack-to-Pot Ratio)", body:"The stack-to-pot ratio tells you how strong a hand you need. The lower the SPR, the more it favors committing with a strong hand." },
              { icon:"🏆", title:"Tournament M value", body:"Harrington's M measures the pressure on your tournament stack. Your strategy shifts completely across the green/yellow/orange/red/dead zones." },
              { icon:"📈", title:"ICM calculator", body:"The Independent Chip Model converts tournament chips into real prize-money value — essential for call/fold decisions and deal talks on the bubble and final table." },
            ].map(c => (
              <div key={c.title} className="luxe-card p-5 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">{c.icon}</div>
                <div>
                  <h3 className="text-base font-black text-foreground mb-1.5">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <p className="mb-3"><span className="badge-gold">FAQ</span></p>
          <h2 className="text-xl sm:text-2xl font-black text-foreground mb-6">ICM calculator & Hold'em calculator FAQ</h2>
          <div className="space-y-3">
            {CALCULATOR_FAQ_EN.map((f, i) => (
              <details key={i} className="luxe-card p-5 group" open={i === 0}>
                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-foreground gap-3">
                  <span>Q. {f.q}</span>
                  <span className="text-primary transition-transform group-open:rotate-45 text-xl leading-none flex-shrink-0">+</span>
                </summary>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Related guides (calculator → blog) */}
        <div>
          <p className="mb-3"><span className="badge-gold">Go deeper</span></p>
          <h2 className="text-xl sm:text-2xl font-black text-foreground mb-6">Guides to read once the math clicks</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href:"/en/blog/holdem-tournament", t:"Tournament Strategy", d:"ICM, the bubble, and final-table play" },
              { href:"/en/blog/holdem-equity", t:"Poker Equity Explained", d:"Win %, fold equity, and realization" },
              { href:"/en/blog/holdem-pot-odds", t:"How to Calculate Pot Odds", d:"Turn call/fold spots into math" },
              { href:"/en/blog/holdem-outs", t:"How to Count Outs", d:"Outs by draw and the 4-2 rule" },
              { href:"/en/blog/holdem-probability", t:"Poker Odds & Probability", d:"The core numbers behind every hand" },
              { href:"/en/blog/holdem-starting-hands-chart", t:"Starting Hands Chart", d:"Which hands to play by position" },
            ].map(l => (
              <a key={l.href} href={l.href} className="luxe-card p-4 flex items-center justify-between gap-3 group">
                <div>
                  <p className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{l.t}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{l.d}</p>
                </div>
                <span className="text-primary flex-shrink-0 text-lg">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
