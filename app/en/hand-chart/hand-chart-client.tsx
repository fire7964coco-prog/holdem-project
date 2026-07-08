"use client";

import { useState } from "react";
import Link from "next/link";
import { SEO } from "@/components/seo";

const RANKS = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

// CHART[row][col]:
// row < col → suited hand (ranks[row] + ranks[col] + 's')
// row === col → pair (ranks[row] + ranks[row])
// row > col → offsuit hand (ranks[col] + ranks[row] + 'o')
// 0=fold, 1=UTG, 2=HJ, 3=CO, 4=BTN, 5=SB
const CHART: number[][] = [
  [1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4], // A
  [1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 5, 0, 0], // K
  [1, 1, 1, 1, 2, 3, 4, 5, 5, 0, 0, 0, 0], // Q
  [1, 2, 2, 1, 1, 2, 3, 4, 5, 0, 0, 0, 0], // J
  [2, 3, 3, 2, 1, 1, 2, 4, 5, 0, 0, 0, 0], // T
  [3, 4, 4, 3, 3, 1, 2, 3, 4, 5, 0, 0, 0], // 9
  [4, 5, 5, 4, 4, 4, 1, 3, 4, 5, 0, 0, 0], // 8
  [4, 5, 0, 5, 5, 5, 5, 1, 3, 4, 5, 0, 0], // 7
  [5, 0, 0, 0, 0, 0, 0, 5, 2, 4, 5, 0, 0], // 6
  [5, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 0], // 5
  [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 0], // 4
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0], // 3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], // 2
];

const POSITIONS = [
  { id: 1, label: "UTG", full: "Under the Gun (UTG)", color: "#dc2626", pct: "~12%" },
  { id: 2, label: "HJ", full: "Hijack (HJ)", color: "#ea580c", pct: "~20%" },
  { id: 3, label: "CO", full: "Cutoff (CO)", color: "#ca8a04", pct: "~29%" },
  { id: 4, label: "BTN", full: "Button (BTN)", color: "#16a34a", pct: "~42%" },
  { id: 5, label: "SB", full: "Small Blind (SB)", color: "#2563eb", pct: "~56%" },
];

const TIER_COLORS = [
  "transparent",
  "#dc2626",
  "#ea580c",
  "#ca8a04",
  "#16a34a",
  "#2563eb",
];

const TIER_LABELS = ["Fold", "UTG", "HJ", "CO", "BTN", "SB"];

const RELATED = [
  { href: "/en/blog/holdem-starting-hands-chart", tag: "Deep guide", title: "Starting Hands Chart by Position", desc: "Which hands to open, and why, from every seat" },
  { href: "/en/blog/holdem-when-to-fold", tag: "Folding", title: "When to Fold in Poker", desc: "The discipline that quietly wins the most" },
  { href: "/en/blog/holdem-position-play", tag: "Position", title: "How Position Changes Everything", desc: "Why the button is the most profitable seat" },
  { href: "/en/blog/holdem-hand-rankings", tag: "Rankings", title: "Poker Hand Rankings", desc: "All 10 hands from royal flush to high card" },
  { href: "/en/calculator", tag: "Tool", title: "Poker Odds Calculator", desc: "Exact equity and pot odds for any hand" },
];

function getHandName(row: number, col: number): string {
  const r1 = RANKS[row], r2 = RANKS[col];
  const has10 = r1 === "10" || r2 === "10";
  const sep = has10 ? "-" : "";
  if (row === col) return r1 === "10" ? "10-10" : `${r1}${r1}`;
  if (row < col) return `${r1}${sep}${r2}s`;
  return `${r2}${sep}${r1}o`;
}

function countPlayable(maxTier: number): number {
  let count = 0;
  for (let i = 0; i < 13; i++)
    for (let j = 0; j < 13; j++)
      if (CHART[i][j] > 0 && CHART[i][j] <= maxTier) count++;
  return count;
}

export default function HandChartEn() {
  const [selectedPos, setSelectedPos] = useState<number | null>(null);
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);

  const totalHands = 169;

  return (
    <>
      <SEO
        title="Poker Starting Hand Chart — Open Ranges by Position"
        description="Interactive Texas Hold'em starting-hand chart. Compare all 169 hands across UTG, HJ, CO, Button, and SB with color-coded GTO open ranges."
        canonical="https://www.holdemmaster.com/en/hand-chart"
        keywords={["poker starting hand chart", "preflop range chart", "holdem open ranges", "UTG range", "button range", "GTO starting hands"]}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14 space-y-12">

        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card via-card to-background px-6 py-10 md:py-14 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.18), transparent 70%)" }}
          />
          <div className="relative space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-wide">
              ♠ Interactive starting-hand tool
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Poker Starting Hand Chart
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              All 169 hands color-coded by position (UTG → SB). Tap a position to highlight only the hands you can open from that seat.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-sm">
              <span className="text-foreground font-bold">169<span className="text-muted-foreground font-normal ml-1">hands</span></span>
              <span className="text-border">·</span>
              <span className="text-foreground font-bold">5<span className="text-muted-foreground font-normal ml-1">positions</span></span>
              <span className="text-border">·</span>
              <span className="text-primary font-semibold">Tap · hover for instant view</span>
            </div>
          </div>
        </div>

        {/* Position Filter Buttons */}
        <section className="space-y-4">
          <p className="text-xs text-muted-foreground text-center font-semibold tracking-widest uppercase">
            Pick a position → playable hands highlight
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedPos(null)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                selectedPos === null
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              Show all
            </button>
            {POSITIONS.map((pos) => {
              const playable = countPlayable(pos.id);
              const pct = Math.round((playable / totalHands) * 100);
              return (
                <button
                  key={pos.id}
                  onClick={() => setSelectedPos(selectedPos === pos.id ? null : pos.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    selectedPos === pos.id ? "shadow-lg scale-105" : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={
                    selectedPos === pos.id
                      ? { backgroundColor: pos.color, borderColor: pos.color, color: "#fff" }
                      : { borderColor: pos.color + "60" }
                  }
                >
                  {pos.label}
                  <span className="ml-1.5 opacity-80 font-normal text-xs">{pct}%</span>
                </button>
              );
            })}
          </div>

          {selectedPos && (
            <p className="text-center text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {POSITIONS.find(p => p.id === selectedPos)?.full}
              </span>
              {" "}open range ·{" "}
              <span className="font-semibold text-foreground">
                {countPlayable(selectedPos)} hands
              </span>
              {" "}/ 169 ({Math.round((countPlayable(selectedPos) / totalHands) * 100)}%)
            </p>
          )}
        </section>

        {/* Grid */}
        <section className="space-y-3">
          <p className="md:hidden text-center text-xs text-muted-foreground">← Swipe to see the full chart →</p>
          <div
            className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 [-webkit-overflow-scrolling:touch]"
          >
            <div className="inline-block rounded-2xl border border-border/60 overflow-hidden shadow-xl mx-auto">
              {/* Column headers */}
              <div className="flex">
                <div className="w-7 h-7 md:w-9 md:h-9 shrink-0 bg-card/70" />
                {RANKS.map((r) => (
                  <div
                    key={r}
                    className="w-9 h-7 md:w-11 md:h-9 shrink-0 flex items-center justify-center text-[10px] md:text-xs font-bold text-muted-foreground bg-card/70 border-b border-border/40"
                  >
                    {r}
                  </div>
                ))}
              </div>

              {/* Rows */}
              {RANKS.map((rowRank, row) => (
                <div key={row} className="flex">
                  {/* Row header */}
                  <div className="w-7 md:w-9 shrink-0 flex items-center justify-center text-[10px] md:text-xs font-bold text-muted-foreground bg-card/70 border-r border-border/40">
                    {rowRank}
                  </div>

                  {/* Cells */}
                  {RANKS.map((_, col) => {
                    const tier = CHART[row][col];
                    const name = getHandName(row, col);
                    const isPair = row === col;
                    const isSuited = row < col;
                    const isHovered = hoveredCell?.row === row && hoveredCell?.col === col;

                    let opacity = 1;
                    const bgColor = TIER_COLORS[tier] || "#1a1a1a";
                    const textColor = tier === 0 ? "#333" : "#fff";

                    if (selectedPos !== null) {
                      if (tier === 0 || tier > selectedPos) {
                        opacity = 0.12;
                      }
                    }

                    return (
                      <div
                        key={col}
                        className="relative w-9 h-9 md:w-11 md:h-11 shrink-0 flex items-center justify-center cursor-default border border-black/20 transition-all duration-150"
                        style={{
                          backgroundColor: bgColor,
                          opacity,
                          outline: isHovered ? "2px solid #d4af37" : undefined,
                          outlineOffset: "-2px",
                          zIndex: isHovered ? 10 : undefined,
                        }}
                        onMouseEnter={() => setHoveredCell({ row, col })}
                        onMouseLeave={() => setHoveredCell(null)}
                      >
                        <span
                          className="text-[9px] md:text-[11px] font-bold leading-none select-none"
                          style={{ color: textColor }}
                        >
                          {isPair ? (
                            RANKS[row] === "10" ? "10" : <>{RANKS[row]}{RANKS[row]}</>
                          ) : isSuited ? (
                            <>{RANKS[row]}{RANKS[col]}<span style={{ fontSize: "7px" }}>s</span></>
                          ) : (
                            <>{RANKS[col]}{RANKS[row]}<span style={{ fontSize: "7px" }}>o</span></>
                          )}
                        </span>

                        {/* Hover tooltip */}
                        {isHovered && tier > 0 && (
                          <div
                            className="absolute z-50 pointer-events-none rounded-lg px-3 py-2 text-xs shadow-2xl border border-border whitespace-nowrap"
                            style={{
                              bottom: "calc(100% + 6px)",
                              left: "50%",
                              transform: "translateX(-50%)",
                              backgroundColor: "#0d0d0d",
                              color: "#f0f0f0",
                            }}
                          >
                            <div className="font-bold text-sm text-center" style={{ color: TIER_COLORS[tier] }}>
                              {name}
                            </div>
                            <div className="text-center mt-0.5">
                              {isPair ? "Pocket pair" : isSuited ? "Suited" : "Offsuit"}
                            </div>
                            <div className="mt-1 text-center">
                              Open from{" "}
                              <span className="font-semibold" style={{ color: TIER_COLORS[tier] }}>
                                {TIER_LABELS[tier]}
                              </span>
                              {"+"}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Grid legend note */}
          <p className="text-center text-xs text-muted-foreground">
            Top-right triangle = suited (s) · diagonal = pocket pairs · bottom-left triangle = offsuit (o)
          </p>
        </section>

        {/* Color Legend */}
        <div className="rounded-2xl border border-border/50 p-5 md:p-6 bg-card/40">
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Color legend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {POSITIONS.map((pos) => (
              <div key={pos.id} className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-white font-bold text-xs shadow"
                  style={{ backgroundColor: pos.color }}
                >
                  {pos.label}
                </div>
                <div className="text-xs leading-tight min-w-0">
                  <div className="font-semibold text-foreground truncate">{pos.full}</div>
                  <div className="text-muted-foreground">{pos.pct}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg shrink-0 bg-[#1a1a1a] border border-border" />
              <div className="text-xs leading-tight">
                <div className="font-semibold text-foreground">Fold</div>
                <div className="text-muted-foreground">All positions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Position Table */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-3">Open range by position</h2>
          <div className="overflow-x-auto rounded-2xl border border-border/50">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="border-b border-border/50 bg-card/50">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Position</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Hands</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Range</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Example hands</th>
                </tr>
              </thead>
              <tbody>
                {POSITIONS.map((pos, idx) => {
                  const playable = countPlayable(pos.id);
                  const newHands = pos.id === 1 ? playable : playable - countPlayable(pos.id - 1);
                  return (
                    <tr key={pos.id} className={`border-b border-border/30 ${idx % 2 === 0 ? "bg-card/20" : ""}`}>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span
                          className="inline-block px-2 py-0.5 rounded font-bold text-white text-xs"
                          style={{ backgroundColor: pos.color }}
                        >
                          {pos.label}
                        </span>
                        <span className="ml-2 text-muted-foreground text-xs">{pos.full}</span>
                      </td>
                      <td className="px-4 py-3 font-mono text-foreground whitespace-nowrap">
                        {playable}
                        <span className="text-muted-foreground text-xs ml-1">
                          (+{newHands})
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{pos.pct}</td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">
                        {pos.id === 1 && "AA-77, AKs-A10s, KQs-KJs, AKo-AJo, KQo"}
                        {pos.id === 2 && "+66-55, A9s-A8s, K10s, Q10s, J9s, 10-8s, 98s, A10o, KJo, QJo, J10o"}
                        {pos.id === 3 && "+44, A7s-A5s, K9s, Q9s, J8s, 97s, 87s, K10o, Q10o"}
                        {pos.id === 4 && "+33-22, K8s-K7s, Q8s, J7s, 10-7s, 65s-54s, K9o, Q9o"}
                        {pos.id === 5 && "+A6o-A4o, K8o-K7o, Q8o, J7o, 97o, 87o, 76o, 95s, 85s, 74s, 64s"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">
            * GTO-based approximations — in practice, adjust for table tendencies, stack depth, and opponent ranges.
          </p>
        </section>

        {/* Why section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-3">Why position drives hand selection</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Position = information",
                desc: "The button (BTN) always acts last after the flop. Seeing everyone's bets and checks first makes the same hand far more profitable.",
                icon: "📍",
              },
              {
                title: "UTG has 8 players behind",
                desc: "Open-raising from UTG at a 9-handed table, you don't know how the 8 players behind will react. The chance of a re-raise is high, so speculative hands like suited connectors can't realize their value — tighten to premium hands.",
                icon: "⚠️",
              },
              {
                title: "The value of suited",
                desc: "A suited hand has roughly a 3–5% equity edge over the same offsuit hand. That's why you can open A8s from the hijack but wait for the button with A8o.",
                icon: "♠️",
              },
              {
                title: "The SB dilemma",
                desc: "The small blind always acts first after the flop. Even with a wider range than the button, it realizes less equity, so medium-strength hands become less profitable.",
                icon: "🔄",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/40 bg-card/30 p-5 space-y-2 transition-colors hover:border-primary/40">
                <div className="text-2xl">{item.icon}</div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-3">Frequently asked questions</h2>
          {[
            {
              q: "Do I have to follow the starting hand chart exactly?",
              a: "The chart is a starting point. At a 6-max table, shift positions one or two spots looser than 9-max. With antes, widen the whole range by 5–8%. At tables full of weak players, playing tighter to maximize value tends to be more profitable.",
            },
            {
              q: "Is 169 hands the exact number?",
              a: "Yes. Ignoring suits, there are exactly 169 hand types: 13 pocket pairs, 78 suited hands, and 78 offsuit hands. In the actual deck the total number of combinations is 1,326.",
            },
            {
              q: "Why isn't the big blind on the chart?",
              a: "The BB has already invested 1 big blind, so it plays a 'defense' (call/re-raise) game rather than open-raising. A BB defense range depends entirely on the opener's position and sizing, so it needs its own chart.",
            },
            {
              q: "Is it okay to open a 42% range on the button?",
              a: "In GTO terms, a button opening range really does reach 40–50%. But if opponents are tight or inexperienced, focusing more on premiums can be more profitable in practice. The chart is a balanced baseline.",
            },
            {
              q: "What do I do if I get 3-bet?",
              a: "Your opening range and your 3-bet-calling range are different. Generally you respond to a 3-bet with premiums like AA-JJ and AKs-AQs, plus some bluffs — suited wheel aces like A5s and A4s that block AA/AK and can make the nut flush. Fold the rest.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border/40 bg-card/30 overflow-hidden"
            >
              <summary className="flex justify-between items-center gap-3 px-5 py-4 cursor-pointer list-none text-foreground font-medium hover:text-primary transition-colors">
                {item.q}
                <span className="text-muted-foreground group-open:rotate-180 transition-transform text-lg leading-none shrink-0">▾</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </section>

        {/* Related guides (internal links) */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-3">Next steps — related guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {RELATED.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-border/40 bg-card/30 p-4 transition-all hover:border-primary/50 hover:bg-card/50"
              >
                <div className="min-w-0">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">{r.tag}</div>
                  <div className="font-bold text-foreground leading-snug">{r.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{r.desc}</div>
                </div>
                <span className="text-primary text-lg shrink-0 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
