"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/seo";
import { Calculator, TrendingUp, Layers, Target, Trophy, BarChart3 } from "lucide-react";

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

  if (isFlush && isStraight && !isWheel && uniq[0]===12) return { rank:9, name:"로열 플러시 👑", color:"text-yellow-300" };
  if (isFlush && isStraight) return { rank:8, name:"스트레이트 플러시 🌟", color:"text-yellow-400" };
  if (cnts[0]===4) return { rank:7, name:"포 오브 어 카인드 💎", color:"text-purple-400" };
  if (cnts[0]===3 && cnts[1]===2) return { rank:6, name:"풀 하우스 🏠", color:"text-blue-400" };
  if (isFlush) return { rank:5, name:"플러시 🌊", color:"text-cyan-400" };
  if (isStraight) return { rank:4, name:"스트레이트 ➡️", color:"text-green-400" };
  if (cnts[0]===3) return { rank:3, name:"트리플 3️⃣", color:"text-green-500" };
  if (cnts[0]===2 && cnts[1]===2) return { rank:2, name:"투 페어 ✌️", color:"text-lime-400" };
  if (cnts[0]===2) return { rank:1, name:"원 페어 1️⃣", color:"text-muted-foreground" };
  return { rank:0, name:"하이 카드 🃏", color:"text-muted-foreground" };
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

type TierEntry = [1|2|3|4|5, string, string, string];
const HAND_TABLE: TierEntry[] = [
  [1, "AA", "최강 핸드. 모든 상황에서 레이즈", "항상 레이즈/리레이즈 (3-bet)"],
  [1, "KK", "에이스 플랍만 주의", "항상 레이즈/리레이즈"],
  [1, "QQ", "JJ보다 강하지만 과대평가 금지", "항상 레이즈, 칩이 많으면 신중"],
  [1, "JJ", "플랍에서 오버카드 주의", "모든 포지션에서 레이즈"],
  [1, "1010", "JJ 이상 나오면 밸류 낮아짐", "중후기 포지션 레이즈, EP 콜 고려"],
  [1, "AKs", "최강 드로우 핸드. 팟을 키워라", "항상 레이즈/리레이즈 가능"],
  [1, "AKo", "AKs보다 약하지만 여전히 프리미엄", "항상 레이즈, 리레이즈 콜 가능"],
  [2, "AQs", "강한 핸드, 포지션 유리할수록 가치↑", "대부분 포지션에서 레이즈"],
  [2, "AJs", "버튼/CO에서 최강, UTG에선 약함", "중후기 포지션 레이즈, EP 콜 고려"],
  [2, "A10s", "스윗드 에이스 중 최상위권", "LP에서 레이즈, EP에서 콜"],
  [2, "KQs", "플러시+스트레이트 드로우 잠재력↑", "대부분 포지션에서 레이즈"],
  [2, "KJs", "강한 드로우 핸드", "LP 레이즈, EP 콜"],
  [2, "99",  "중간 포켓페어, 오버카드 플랍 주의", "대부분 포지션 레이즈, 딥스택 주의"],
  [2, "88",  "드로우 잠재력 좋은 포켓페어", "LP 레이즈, EP 콜 고려"],
  [2, "AQo", "오프수트라 약화, 포지션 중요", "중후기 포지션 레이즈"],
  [3, "AJo", "EP에서는 약함, LP에서 강함", "CO/BTN 레이즈, EP 조심"],
  [3, "KQo", "오프수트 커넥터 중 최상위", "LP에서 레이즈, EP에서 콜/폴드"],
  [3, "K10s", "스윗드 킹, LP에서 강함", "LP 레이즈, EP 폴드"],
  [3, "QJs", "두-웨이 드로우 강력", "LP 레이즈, 딥스택에서 가치↑"],
  [3, "J10s", "최고의 스윗드 커넥터 중 하나", "LP 레이즈, 팟 오즈 보고 EP 콜"],
  [3, "109s", "강한 스윗드 커넥터", "LP에서 레이즈/콜"],
  [3, "77",  "셋 드로우 기대, 오버카드 주의", "LP 레이즈, EP 콜"],
  [3, "A9s", "스윗드 에이스, 플러시 드로우 가치", "LP 레이즈"],
  [4, "66",  "셋 드로우 목적, 팟 오즈 필요", "LP 콜/레이즈, 멀티웨이 팟 선호"],
  [4, "55",  "셋 아니면 가치 낮음", "LP 콜, 싱글레이즈 팟"],
  [4, "A8s", "미디엄 스윗드 에이스", "LP 플레이, EP 폴드"],
  [4, "A7s", "미디엄 스윗드 에이스", "LP에서만 플레이"],
  [4, "A6s", "미디엄 스윗드 에이스", "LP에서만 플레이"],
  [4, "A5s", "A5s가 A9s보다 나을 수 있음 (휠)", "LP에서만, 임플라이드 오즈 중요"],
  [4, "A4s", "휠 드로우 있는 스윗드 에이스", "LP에서만"],
  [4, "A3s", "스윗드 에이스 최하위권", "BTN/SB에서만"],
  [4, "A2s", "휠+너트 플러시, 하지만 약함", "BTN에서만"],
  [4, "KJo", "도미네이션 위험, LP에서만", "CO/BTN에서 레이즈, 리레이즈엔 폴드"],
  [4, "QJo", "적당한 연결성, 포지션 필요", "LP에서만"],
  [4, "98s", "강한 스윗드 커넥터", "LP 콜/레이즈"],
  [4, "87s", "좋은 스윗드 커넥터", "LP 콜"],
  [4, "76s", "스윗드 커넥터", "LP 팟 오즈 보고 콜"],
  [5, "44",  "셋 없으면 가치 거의 없음", "낮은 팟 오즈에서만 콜"],
  [5, "33",  "셋 드로우 필요, 도박성↑", "멀티웨이 팟, 저가 콜만"],
  [5, "22",  "가장 낮은 포켓페어", "멀티웨이 팟, 싼 콜만"],
  [5, "K10o", "K-10 오프수트, 약함", "BTN에서만 가끔"],
  [5, "Q10o", "연결성 낮은 오프수트", "BTN에서만"],
  [5, "J10o", "좋은 오프수트지만 취약", "BTN에서 가끔"],
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
              <div key={r} className="w-[30px] text-center text-[10px] text-muted-foreground font-bold">{r}</div>
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
                    className={`w-[30px] h-[38px] rounded-md text-xs font-bold border transition-all
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
              전체 취소
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
  { label: "직접 입력", outs: 0, custom: true },
  { label: "너트 플러시 드로우", outs: 9, desc: "동일 수트 카드 4장 → 5번째 필요" },
  { label: "양방 스트레이트 (OESD)", outs: 8, desc: "예: 5-6-7-8, 4 또는 9 필요" },
  { label: "플러시 + 거트샷 콤보", outs: 12, desc: "플러시 9 + 거트샷 3 (중복 제외)" },
  { label: "거트샷 스트레이트", outs: 4, desc: "예: 5-6-8-9, 7 하나만 필요" },
  { label: "오버카드 2장", outs: 6, desc: "보드에 없는 하이카드 2종 × 3장" },
  { label: "투페어 → 풀하우스", outs: 4, desc: "AA+KK → 남은 A 2장, K 2장" },
  { label: "원페어 → 트리플", outs: 2, desc: "같은 랭크 카드 2장 남음" },
  { label: "플러시 + OESD (최강)", outs: 15, desc: "9개 플러시 + 8개 스트레이트 (중복 2)" },
];

function ec(n: number, out: boolean) {
  if (n<=0) return 0;
  if (out) { const d=47; return Math.round((1-(d-n)/d*((d-1-n)/(d-1)))*1000)/10; }
  return Math.round((n/46)*1000)/10;
}
function rule(n: number, m: 4|2) { return Math.min(n*m,100); }
function pcolor(p: number) { return p>=35?"text-green-400":p>=20?"text-yellow-400":"text-red-400"; }
function pbg(p: number) { return p>=35?"bg-green-400":p>=20?"bg-yellow-400":"bg-red-400"; }
function plabel(p: number) { return p>=45?"매우 유리 🔥":p>=35?"유리 ✅":p>=25?"보통 ⚠️":p>=15?"불리 ❌":"매우 불리 💀"; }

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
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">드로우 종류</label>
          <select value={sel} onChange={e => setSel(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary">
            {DRAW_PRESETS.map((p,i) => (
              <option key={i} value={i}>{p.label}{!p.custom ? ` (아웃츠 ${p.outs}개)` : ""}</option>
            ))}
          </select>
          {!preset.custom && preset.desc && (
            <p className="mt-2 text-xs text-muted-foreground">{preset.desc}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">게임 단계</label>
          <div className="grid grid-cols-2 gap-2">
            {(["flop","turn"] as const).map(s => (
              <button key={s} onClick={() => setStage(s)}
                className={`py-3 rounded-xl text-sm font-bold border transition-all ${stage===s ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:border-primary/50"}`}>
                {s==="flop" ? "🃏 플랍 이후" : "🔄 턴 이후"}
              </button>
            ))}
          </div>
        </div>
      </div>
      {preset.custom && (
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">
            아웃츠 수: <span className="text-primary text-base">{custom}개</span>
          </label>
          <input type="range" min={1} max={20} value={custom} onChange={e => setCustom(Number(e.target.value))}
            className="w-full accent-primary h-2 rounded-full" />
          <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>1</span><span>5</span><span>10</span><span>15</span><span>20</span></div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-3">
        {[["flop", flop, "플랍 이후", "Rule of 4"], ["turn", turn, "턴 이후", "Rule of 2"]].map(([k, val, lbl, rule]) => (
          <div key={String(k)} className={`rounded-xl p-4 border text-center transition-all ${stage===k ? "border-primary/60 bg-primary/5" : "border-border bg-card"}`}>
            <p className="text-xs text-muted-foreground mb-1">{String(lbl)}</p>
            <p className="text-xs text-muted-foreground/60 mb-2">{String(rule)}</p>
            <p className={`text-3xl font-black ${pcolor(Number(val))}`}>{val}%</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-card border border-border p-5">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">{stage==="flop" ? "플랍 이후 완성 확률" : "턴 이후 완성 확률"} (정밀)</p>
            <p className={`text-6xl font-black ${pcolor(pct)}`}>{pct}%</p>
            <p className={`text-sm font-bold mt-1 ${pcolor(pct)}`}>{plabel(pct)}</p>
          </div>
          <div className="text-right text-xs text-muted-foreground space-y-1">
            <p>암산법 Rule of {stage==="flop"?4:2}:</p>
            <p className="text-foreground font-bold text-base">{outs} × {stage==="flop"?4:2} = ~{rule(outs, stage==="flop"?4:2)}%</p>
            <p className="text-primary/70 text-[10px]">위는 정밀 계산값</p>
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
  const [pot, setPot] = useState(10000);
  const [call, setCall] = useState(3000);
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
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">현재 팟 크기</label>
          <div className="relative">
            <input type="number" value={pot} onChange={e => setPot(Math.max(0,Number(e.target.value)))}
              className="w-full px-4 py-3 pr-14 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary" step={1000} />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">원</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">내 콜 금액</label>
          <div className="relative">
            <input type="number" value={call} onChange={e => setCall(Math.max(0,Number(e.target.value)))}
              className="w-full px-4 py-3 pr-14 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary" step={500} />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">원</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-card border border-border p-5">
        <p className="text-xs text-muted-foreground mb-1">팟 오즈 (필요 최소 승률)</p>
        <div className="flex items-end gap-3">
          <span className="text-5xl font-black text-primary">{potOdds}%</span>
          <span className="text-sm text-muted-foreground mb-2">이상이면 콜이 수익적</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1 font-mono">
          {call.toLocaleString()} ÷ ({pot.toLocaleString()} + {call.toLocaleString()}) = {potOdds}%
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wide">
            내 핸드 승률: <span className="text-primary">{eq}%</span>
          </label>
        </div>
        <input type="range" min={1} max={85} value={eq} onChange={e => setEq(Number(e.target.value))}
          className="w-full accent-primary h-2 rounded-full" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>1%</span><span>거트샷 8.7%</span><span>플러시 19%</span><span>85%</span>
        </div>
      </div>

      <div>
        <button onClick={() => setShowImplied(!showImplied)}
          className="flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          임플라이드 오즈 {showImplied ? "닫기 ▲" : "추가 ▼"}
        </button>
        <AnimatePresence>
          {showImplied && (
            <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} className="overflow-hidden">
              <div className="pb-4">
                <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">
                  예상 추가 수익 (핸드 완성 시): <span className="text-blue-400">{implied.toLocaleString()}원</span>
                </label>
                <input type="range" min={0} max={200000} step={1000} value={implied} onChange={e => setImplied(Number(e.target.value))}
                  className="w-full h-2 rounded-full" style={{ accentColor: "#60a5fa" }} />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>없음</span><span>10만</span><span>20만</span>
                </div>
                {implied > 0 && (
                  <div className="mt-3 rounded-xl bg-blue-400/5 border border-blue-400/20 p-3">
                    <p className="text-xs text-muted-foreground">임플라이드 오즈 (추가 수익 포함)</p>
                    <p className="text-2xl font-black text-blue-400 mt-1">{impliedOdds}%</p>
                    <p className="text-xs text-muted-foreground mt-1">추가 수익 {implied.toLocaleString()}원 고려 시 필요 최소 승률</p>
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
          {ok ? "콜 (수익적)" : "폴드 권장"}
        </p>
        <p className="text-sm text-muted-foreground">
          {ok
            ? `내 승률 ${eq}% > ${showImplied && implied>0 ? `임플라이드 오즈 ${impliedOdds}%` : `팟 오즈 ${threshold}%`} → 장기적으로 이익`
            : `내 승률 ${eq}% < ${showImplied && implied>0 ? `임플라이드 오즈 ${impliedOdds}%` : `팟 오즈 ${threshold}%`} → 장기적으로 손해`}
        </p>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 3. Hand Evaluator
// ─────────────────────────────────────────────
const HAND_RANK_LABELS = [
  "하이 카드", "원 페어", "투 페어", "트리플", "스트레이트",
  "플러시", "풀 하우스", "포 오브 어 카인드", "스트레이트 플러시", "로열 플러시"
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
        label="카드 선택 (5~7장)" />

      <div className="rounded-2xl bg-card border border-border p-5">
        {!result ? (
          <div className="text-center py-6">
            <p className="text-3xl mb-3">🃏</p>
            <p className="text-muted-foreground text-sm">카드를 5장 이상 선택하면 족보를 판별합니다</p>
            <p className="text-xs text-muted-foreground mt-2">7장 선택 시 최적의 5장 조합을 자동으로 찾습니다</p>
          </div>
        ) : (
          <motion.div initial={false} animate={{ opacity:1, scale:1 }} className="text-center">
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">
              {cards.length}장 중 최강 족보
            </p>
            <p className={`text-4xl font-black mb-4 ${result.color}`}>{result.name}</p>
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
              <span>하이카드</span><span>원페어</span><span>플러시</span><span>포카드</span><span>로열</span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-5 gap-1.5">
        {[
          { name:"로열 플러시", color:"text-yellow-300", ex:"A♠K♠Q♠J♠T♠" },
          { name:"스트레이트 플러시", color:"text-yellow-400", ex:"9♥8♥7♥6♥5♥" },
          { name:"포 오브 어 카인드", color:"text-purple-400", ex:"A♠A♥A♦A♣K♠" },
          { name:"풀 하우스", color:"text-blue-400", ex:"K♠K♥K♦Q♠Q♥" },
          { name:"플러시", color:"text-cyan-400", ex:"A♠J♠8♠5♠2♠" },
          { name:"스트레이트", color:"text-green-400", ex:"T♠9♥8♦7♣6♠" },
          { name:"트리플", color:"text-green-500", ex:"Q♠Q♥Q♦K♠A♥" },
          { name:"투 페어", color:"text-lime-400", ex:"A♠A♥K♠K♥Q♦" },
          { name:"원 페어", color:"text-muted-foreground", ex:"A♠A♥K♦Q♠J♥" },
          { name:"하이 카드", color:"text-muted-foreground/50", ex:"A♠K♥Q♦J♣9♠" },
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
      return { name, tier: tier5, desc: "매우 약한 핸드", action: "대부분 폴드 권장" };
    }
    return { name, tier: entry[0], desc: entry[2], action: entry[3] };
  }, [cards]);

  const tierMeta = result ? TIER_INFO[result.tier] : null;
  const tierNames = ["","🥇 Tier 1 — 프리미엄","🥈 Tier 2 — 강함","🥉 Tier 3 — 플레이 가능","⚠️ Tier 4 — 마지널","🚫 Tier 5 — 약함"];

  return (
    <div className="space-y-6">
      <CardPicker selected={cards} max={2} onToggle={toggle} onClear={() => setCards([])}
        label="홀카드 2장 선택" />

      <div className="rounded-2xl bg-card border border-border p-5 min-h-[160px] flex items-center justify-center">
        {!result ? (
          <div className="text-center">
            <p className="text-3xl mb-2">🂠🂠</p>
            <p className="text-muted-foreground text-sm">홀카드 2장을 선택하세요</p>
          </div>
        ) : (
          <motion.div initial={false} animate={{ opacity:1, y:0 }} className="w-full">
            <div className={`rounded-xl border p-5 mb-4 ${tierMeta?.bg}`}>
              <div className="flex items-center justify-between mb-3">
                <p className={`text-4xl font-black font-mono ${tierMeta?.color}`}>{displayHandName(result.name)}</p>
                <div className={`text-center px-3 py-1.5 rounded-lg border ${tierMeta?.bg}`}>
                  <p className={`text-xs font-bold ${tierMeta?.color}`}>{tierNames[result.tier]}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{result.desc}</p>
              <div className="flex items-start gap-2 mt-3">
                <span className="text-xs font-bold text-foreground uppercase tracking-wide">추천 액션:</span>
                <span className={`text-sm font-bold ${tierMeta?.color}`}>{result.action}</span>
              </div>
            </div>
            <div className="flex justify-between gap-1">
              {[1,2,3,4,5].map(t => (
                <div key={t} className={`flex-1 h-2.5 rounded-full ${result.tier <= t ? Object.values(TIER_INFO)[t-1].bg.split(" ")[0].replace("/10","") : "bg-muted"}`} />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>프리미엄</span><span>강함</span><span>보통</span><span>약함</span><span>폴드</span>
            </div>
          </motion.div>
        )}
      </div>

      <div>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">핸드 등급 요약</p>
        <div className="space-y-2">
          {([
            [1,"AA KK QQ JJ 10-10 AKs AKo","항상 레이즈"],
            [2,"AQs AJs A10s KQs KJs 99 88 AQo","대부분 포지션 레이즈"],
            [3,"AJo KQo K10s QJs J10s 10-9s 77 A9s","후기 포지션 레이즈"],
            [4,"66~55 A8s~A2s KJo QJo 스윗드 커넥터","LP에서 선택적"],
            [5,"44~22 약한 오프수트","대부분 폴드"],
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
  const [stack, setStack] = useState(50000);
  const [pot, setPot] = useState(10000);
  const spr = pot > 0 ? Math.round(stack / pot * 10) / 10 : 0;

  const zone = spr <= 0 ? null
    : spr < 4   ? { label:"낮은 SPR (커밋 구간)", color:"text-red-400", bg:"bg-red-400/10 border-red-400/40",
        desc:"팟의 상당 부분을 이미 베팅했습니다. TPTK 이상이면 올인을 고려하세요. 폴드는 손해일 수 있습니다.",
        actions:[["TPTK+","올인 고려","text-red-400"],["드로우","팟 오즈 계산 필수","text-yellow-400"],["약한 핸드","신중하게 폴드","text-muted-foreground"]] }
    : spr < 8   ? { label:"중간 SPR (유연 구간)", color:"text-yellow-400", bg:"bg-yellow-400/10 border-yellow-400/40",
        desc:"투페어 이상의 강한 핸드로 플레이하는 게 유리한 구간입니다. 스택 보호가 중요해집니다.",
        actions:[["투페어+","밸류 베팅","text-green-400"],["원페어","상황 봐서","text-yellow-400"],["드로우","위험 대비 수익 계산","text-muted-foreground"]] }
    : spr < 15  ? { label:"높은 SPR (딥스택 시작)", color:"text-blue-400", bg:"bg-blue-400/10 border-blue-400/40",
        desc:"스택이 깊어지는 구간입니다. 드로우와 강한 메이드 핸드의 상대 가치가 높아집니다.",
        actions:[["셋+","강하게 플레이","text-green-400"],["드로우","임플라이드 오즈 상승","text-blue-400"],["원페어/TPTK","신중하게","text-yellow-400"]] }
    : { label:"매우 높은 SPR (딥스택)", color:"text-green-400", bg:"bg-green-400/10 border-green-400/40",
        desc:"딥스택 게임입니다. 포지션, 드로우 가능성, 상대 핸드 레인지 읽기가 매우 중요해집니다.",
        actions:[["너트 핸드","크게 베팅 가능","text-green-400"],["드로우","매우 높은 임플라이드 오즈","text-blue-400"],["약한 메이드","조심, 블러핑에 취약","text-red-400"]] };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">유효 스택 (내 스택)</label>
          <div className="relative">
            <input type="number" value={stack} onChange={e => setStack(Math.max(0,Number(e.target.value)))}
              className="w-full px-4 py-3 pr-14 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary" step={5000} />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">원</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">현재 팟 크기</label>
          <div className="relative">
            <input type="number" value={pot} onChange={e => setPot(Math.max(1,Number(e.target.value)))}
              className="w-full px-4 py-3 pr-14 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary" step={1000} />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">원</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-card border border-border p-5">
        <p className="text-xs text-muted-foreground mb-1">SPR (Stack-to-Pot Ratio)</p>
        <div className="flex items-end gap-3">
          <p className={`text-6xl font-black ${zone?.color || "text-foreground"}`}>{spr}</p>
          <p className="text-sm text-muted-foreground mb-2">스택 ÷ 팟</p>
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
          { r:"< 4", l:"커밋", c:"bg-red-400/20 border-red-400/40 text-red-400" },
          { r:"4–8", l:"유연", c:"bg-yellow-400/20 border-yellow-400/40 text-yellow-400" },
          { r:"8–15", l:"딥스택 시작", c:"bg-blue-400/20 border-blue-400/40 text-blue-400" },
          { r:"> 15", l:"딥스택", c:"bg-green-400/20 border-green-400/40 text-green-400" },
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
    : M < 1  ? { name:"💀 데드 존", color:"text-red-500", bg:"bg-red-900/30 border-red-500/40",
        desc:"즉시 올인이 필요합니다. 다음 핸드를 기다릴 여유가 없습니다. 에이스 또는 최고의 핸드에 올인하세요." }
    : M < 6  ? { name:"🔴 레드 존", color:"text-red-400", bg:"bg-red-500/10 border-red-500/40",
        desc:"가능한 한 빨리 더블업이 필요합니다. 푸시/폴드 전략 사용. 좋은 핸드에 올인, 다른 건 폴드." }
    : M < 10 ? { name:"🟠 오렌지 존", color:"text-orange-400", bg:"bg-orange-500/10 border-orange-500/40",
        desc:"스택이 작아지고 있습니다. 레인지를 좁혀 강한 핸드만 플레이하고 선제 올인을 고려하세요." }
    : M < 20 ? { name:"🟡 옐로우 존", color:"text-yellow-400", bg:"bg-yellow-500/10 border-yellow-500/40",
        desc:"압박이 시작됩니다. 적극적으로 칩을 모아야 합니다. 좋은 기회에는 꼭 어그레시브하게 플레이하세요." }
    : { name:"🟢 그린 존", color:"text-green-400", bg:"bg-green-500/10 border-green-500/40",
        desc:"여유 있는 스택입니다. 다양한 전략 사용 가능. 포지션 플레이와 블러핑으로 칩을 늘려가세요." };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label:"내 스택", val:stack, set:setStack, step:1000, suffix:"" },
          { label:"빅 블라인드", val:bb, set:setBb, step:100, suffix:"" },
          { label:"스몰 블라인드", val:sb, set:setSb, step:50, suffix:"" },
          { label:"앤티", val:ante, set:setAnte, step:25, suffix:"" },
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
          테이블 인원: <span className="text-primary">{players}명</span>
        </label>
        <input type="range" min={2} max={10} value={players} onChange={e => setPlayers(Number(e.target.value))}
          className="w-full accent-primary h-2 rounded-full" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>2명 (헤즈업)</span><span>6명</span><span>10명</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-card border border-border p-5">
          <p className="text-xs text-muted-foreground mb-1">오빗 비용 (1바퀴 블라인드)</p>
          <p className="text-3xl font-black text-foreground">{orbit.toLocaleString()}<span className="text-base text-muted-foreground ml-1">원</span></p>
          <p className="text-xs font-mono text-muted-foreground mt-1">
            BB {bb.toLocaleString()} + SB {sb.toLocaleString()} + 앤티 {ante.toLocaleString()}×{players}명
          </p>
        </div>
        <div className={`rounded-2xl border p-5 ${zone?.bg || "bg-card border-border"}`}>
          <p className="text-xs text-muted-foreground mb-1">M값 (Harrington's M)</p>
          <p className={`text-5xl font-black ${zone?.color || "text-foreground"}`}>{M}</p>
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
          ["💀 데드 존",  "< 1",  "text-red-500",   "bg-red-900/20 border-red-500/30",   "즉시 올인"],
          ["🔴 레드 존",  "1–5",  "text-red-400",   "bg-red-500/10 border-red-500/30",   "푸시/폴드"],
          ["🟠 오렌지 존","6–9",  "text-orange-400","bg-orange-500/10 border-orange-500/30","좁은 레인지"],
          ["🟡 옐로우 존","10–19","text-yellow-400","bg-yellow-500/10 border-yellow-500/30","어그레시브 플레이"],
          ["🟢 그린 존",  "20+",  "text-green-400", "bg-green-500/10 border-green-500/30", "자유로운 전략"],
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
const ICM_DEFAULT_PRIZES = [500000, 300000, 200000, 100000, 60000, 40000];

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

  const fmtKRW = (n: number) => {
    if (n >= 100000000) return (n / 100000000).toFixed(2) + "억";
    if (n >= 10000000) return (n / 10000000).toFixed(1) + "천만";
    if (n >= 10000) return (n / 10000).toFixed(0) + "만";
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
        <strong className="text-primary">ICM(Independent Chip Model)</strong>이란 토너먼트 칩의 실제 상금 가치를 계산하는 방법입니다.
        칩 리더라도 ICM 가치는 칩 비율보다 낮고, 숏스택은 더 낮습니다.
        파이널 테이블·버블에서 콜/폴드 결정에 활용하세요.
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-muted-foreground mb-2 block font-bold uppercase tracking-wider">플레이어 수</label>
          <div className="flex gap-1.5 flex-wrap">
            {[2,3,4,5,6,7,8,9].map(n => (
              <button key={n} onClick={() => setNumPlayers(n)}
                className={`w-9 h-9 rounded-lg text-sm font-bold border transition-all ${numPlayers===n ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border text-muted-foreground hover:border-primary/50"}`}>
                {n}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs text-muted-foreground mb-2 block font-bold uppercase tracking-wider">상금 순위 수</label>
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
            <span>플레이어 칩 스택</span>
            <span className="text-foreground/50 text-[10px] normal-case">합계 {totalChips.toLocaleString()}</span>
          </div>
          <div className="space-y-2">
            {Array.from({ length: numPlayers }, (_, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-xs font-bold text-muted-foreground w-10 flex-shrink-0 text-center">{MEDALS[i]}</span>
                <button onClick={() => updateStack(i, stacks[i] - 1000)}
                  className="w-7 h-7 rounded-md bg-background border border-border text-muted-foreground hover:border-primary/50 flex-shrink-0 text-xs font-bold">−</button>
                <input
                  type="number"
                  value={stacks[i] ?? 1000}
                  onChange={e => updateStack(i, parseInt(e.target.value) || 0)}
                  className="flex-1 min-w-0 bg-background border border-border rounded-lg px-2 py-1.5 text-sm text-foreground text-right font-mono"
                />
                <button onClick={() => updateStack(i, stacks[i] + 1000)}
                  className="w-7 h-7 rounded-md bg-background border border-border text-muted-foreground hover:border-primary/50 flex-shrink-0 text-xs font-bold">+</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs text-muted-foreground mb-3 font-bold uppercase tracking-wider flex items-center justify-between">
            <span>상금 (원)</span>
            <span className="text-foreground/50 text-[10px] normal-case">총 {fmtKRW(totalPrize)}</span>
          </div>
          <div className="space-y-2">
            {Array.from({ length: numPrizes }, (_, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-xs font-bold text-muted-foreground w-10 flex-shrink-0 text-center">{MEDALS[i]}</span>
                <button onClick={() => updatePrize(i, prizes[i] - 50000)}
                  className="w-7 h-7 rounded-md bg-background border border-border text-muted-foreground hover:border-primary/50 flex-shrink-0 text-xs font-bold">−</button>
                <input
                  type="number"
                  value={prizes[i] ?? 0}
                  onChange={e => updatePrize(i, parseInt(e.target.value) || 0)}
                  className="flex-1 min-w-0 bg-background border border-border rounded-lg px-2 py-1.5 text-sm text-foreground text-right font-mono"
                />
                <button onClick={() => updatePrize(i, prizes[i] + 50000)}
                  className="w-7 h-7 rounded-md bg-background border border-border text-muted-foreground hover:border-primary/50 flex-shrink-0 text-xs font-bold">+</button>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground/50 mt-2">단위: 원. 해외 대회 달러는 환산 후 입력하세요.</p>
        </div>
      </div>

      {icmResult ? (
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
          <div className="text-xs text-muted-foreground mb-3 font-bold uppercase tracking-wider">ICM 계산 결과</div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-background/50 border-b border-border">
                  <th className="px-3 py-2.5 text-left text-muted-foreground font-bold">플레이어</th>
                  <th className="px-3 py-2.5 text-right text-muted-foreground font-bold">칩스택</th>
                  <th className="px-3 py-2.5 text-right text-muted-foreground font-bold">칩 %</th>
                  <th className="px-3 py-2.5 text-right text-primary font-bold">ICM 가치</th>
                  <th className="px-3 py-2.5 text-right text-muted-foreground font-bold">ICM %</th>
                  <th className="px-3 py-2.5 text-right text-muted-foreground font-bold">차이</th>
                </tr>
              </thead>
              <tbody>
                {icmResult.map((equity, i) => {
                  const chipPct = (stacks[i] / totalChips) * 100;
                  const icmPct = (equity / totalPrize) * 100;
                  const diff = icmPct - chipPct;
                  return (
                    <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-primary/5 transition-colors">
                      <td className="px-3 py-2.5 font-bold text-foreground">{MEDALS[i]} P{i+1}</td>
                      <td className="px-3 py-2.5 text-right font-mono text-muted-foreground">{stacks[i].toLocaleString()}</td>
                      <td className="px-3 py-2.5 text-right font-mono text-muted-foreground">{chipPct.toFixed(1)}%</td>
                      <td className="px-3 py-2.5 text-right font-mono font-bold text-primary">{Math.round(equity).toLocaleString()}원</td>
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
              <span className="text-green-400 font-bold flex-shrink-0">+차이</span>
              <span>칩보다 ICM 가치가 높음 → 숏스택 보호 구간, 코인플립 자제</span>
            </div>
            <div className="flex items-start gap-1.5 bg-card border border-border rounded-lg px-3 py-2">
              <span className="text-red-400 font-bold flex-shrink-0">−차이</span>
              <span>칩보다 ICM 가치가 낮음 → 칩 리더의 공격적 플레이가 더 유리</span>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="text-center py-6 text-muted-foreground text-sm">
          스택과 상금을 0보다 크게 설정하면 ICM 계산 결과가 표시됩니다.
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab Config
// ─────────────────────────────────────────────
const TABS = [
  { id:"outs",     icon:<Target className="w-4 h-4" />,      label:"아웃츠",     sub:"확률 계산",    component:<OutsCalc /> },
  { id:"pot",      icon:<TrendingUp className="w-4 h-4" />,  label:"팟 오즈",    sub:"콜/폴드 판단", component:<PotOddsCalc /> },
  { id:"hand",     icon:<Layers className="w-4 h-4" />,      label:"족보 판별",  sub:"카드 선택",    component:<HandEvaluatorCalc /> },
  { id:"starting", icon:<Calculator className="w-4 h-4" />,  label:"스타팅핸드", sub:"오픈 강도 분석", component:<StartingHandCalc /> },
  { id:"spr",      icon:<BarChart3 className="w-4 h-4" />,   label:"SPR",        sub:"스택/팟 비율", component:<SPRCalc /> },
  { id:"m",        icon:<Trophy className="w-4 h-4" />,      label:"토너먼트 M", sub:"M값 계산기",   component:<MValueCalc /> },
  { id:"icm",      icon:<BarChart3 className="w-4 h-4" />,   label:"ICM",        sub:"상금 가치 계산", component:<ICMCalc /> },
] as const;

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function CalculatorPage() {
  const [active, setActive] = useState<typeof TABS[number]["id"]>("outs");
  const tab = TABS.find(t => t.id === active)!;

  return (
    <>
      <SEO
        title="⚡ 포커 확률 계산기 — 홀덤 아웃츠·팟오즈·족보·SPR·ICM 무료 계산"
        description="⚡포커 확률 계산기⚡ 홀덤 아웃츠 계산기, 팟 오즈, 핸드 족보 판별기, 스타팅 핸드 강도, SPR, 토너먼트 M값, ICM 계산기까지 — 7가지 계산기 무료 제공."
        path="/calculator"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#061209] to-background pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage:`radial-gradient(circle at 30% 50%, #16a34a 0%, transparent 60%), radial-gradient(circle at 70% 50%, #ca8a04 0%, transparent 60%)`
        }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/30">무료 도구</span>
            <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">실시간 계산</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">
            포커 확률 계산기<br />
            <span className="text-primary">홀덤 모든 계산 한 곳에</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            아웃츠·팟 오즈·핸드 족보 판별·스타팅 핸드 강도·SPR·토너먼트 M값·ICM —
            실전에서 필요한 계산을 즉시 확인하세요.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            {["🎯 아웃츠 계산기","💰 팟 오즈","🃏 족보 판별","📊 스타팅 핸드","📐 SPR","🏆 M값","📈 ICM 계산기"].map(f => (
              <span key={f} className="text-muted-foreground">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Area */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap border transition-all flex-shrink-0 ${
                active === t.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {t.icon}
              <span>{t.label}</span>
              <span className={`text-[10px] hidden sm:block ${active===t.id ? "text-primary-foreground/70" : "text-muted-foreground/60"}`}>
                {t.sub}
              </span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="rounded-2xl border border-border bg-gradient-to-br from-[#0a1a0d] to-[#0d1f12] overflow-hidden shadow-2xl shadow-black/50">
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
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="border-t border-border pt-10">
          <h2 className="text-2xl font-black text-foreground mb-6">포커 확률 계산기 사용 가이드</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title:"🎯 아웃츠 계산기", body:"플랍·턴에서 내 드로우가 완성될 확률을 정밀하게 계산합니다. Rule of 4 and 2 암산법과 정확한 수치를 동시에 확인하세요." },
              { title:"💰 팟 오즈 & 임플라이드 오즈", body:"콜해야 할지 폴드해야 할지 수학적으로 판단합니다. 상대 스택이 많을 때 임플라이드 오즈를 추가하면 더 정확한 결정이 가능합니다." },
              { title:"🃏 핸드 족보 판별기", body:"카드를 직접 선택해 족보를 확인합니다. 7장까지 입력하면 최적의 5장 조합을 자동으로 찾아 최강 족보를 보여줍니다." },
              { title:"📊 스타팅 핸드 강도", body:"홀카드 2장을 선택하면 169가지 핸드 중 어떤 등급인지, 포지션별 추천 액션은 무엇인지 즉시 확인할 수 있습니다." },
              { title:"📐 SPR (Stack-to-Pot Ratio)", body:"스택과 팟의 비율로 현재 상황이 어느 정도의 핸드 강도가 필요한지 판단합니다. SPR이 낮을수록 강한 핸드로 올인이 유리합니다." },
              { title:"🏆 토너먼트 M값", body:"해링턴의 M값으로 토너먼트에서 내 스택 압박도를 측정합니다. 그린/옐로우/오렌지/레드/데드 존에 따라 전략이 완전히 달라집니다." },
            ].map(c => (
              <div key={c.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="text-base font-black text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
