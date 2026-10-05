"use client";

import { useState, Fragment, isValidElement, cloneElement, type ReactNode } from "react";
import Link from "next/link";
import { SEO } from "@/components/seo";
import type { HandChartDict, RichSeg } from "./dict";

/**
 * 스타팅 핸드 차트 — 공용 도구 컴포넌트 (★2026-10-05 로케일 도구 확장 회차 1 · `docs/tools-locale-rollout-plan.md`).
 * 옛 `app/en/hand-chart/hand-chart-client.tsx`를 그대로 옮겨 문자열만 `HandChartDict`로 뺐다
 * (EN SSR 마크업 전후 동일 — 텍스트 노드 구분자 `<!-- -->` 외 0줄 차이).
 * 계산기(`components/calculator/calculator-tool.tsx`)와 같은 «공용 컴포넌트 + 로케일 사전» 구조.
 * 🔴 ko `/hand-chart`는 아직 별도 클라이언트다(`app/hand-chart/hand-chart-client.tsx`) — CHART를 고치면 두 곳 다.
 */

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
  { id: 1, label: "UTG", color: "#dc2626" },
  { id: 2, label: "HJ", color: "#ea580c" },
  { id: 3, label: "CO", color: "#ca8a04" },
  { id: 4, label: "BTN", color: "#16a34a" },
  { id: 5, label: "SB", color: "#2563eb" },
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

/** Language-invariant hand lists, aligned with POSITIONS. */
const EXAMPLES = [
  "AA-77, AKs-A10s, KQs-KJs, AKo-AJo, KQo",
  "+66-55, A9s-A8s, K10s, Q10s, J9s, 10-8s, 98s, A10o, KJo, QJo, J10o",
  "+44, A7s-A5s, K9s, Q9s, J8s, 97s, 87s, K10o, Q10o",
  "+33-22, K8s-K7s, Q8s, J7s, 10-7s, 65s-54s, K9o, Q9o",
  "+A6o-A4o, K8o-K7o, Q8o, J7o, 97o, 87o, 76o, 95s, 85s, 74s, 64s",
];

const WHY_ICONS = ["📍", "⚠️", "♠️", "🔄"];

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

/** 콤보 기준 — 페어 6 · 수티드 4 · 오프수트 12, 전체 1,326. 🔴 손으로 적지 마라(ko 판 2026-09-12 렌즈). */
function countCombos(maxTier: number): number {
  let combos = 0;
  for (let i = 0; i < 13; i++)
    for (let j = 0; j < 13; j++) {
      const v = CHART[i][j];
      if (v > 0 && v <= maxTier) combos += i === j ? 6 : i < j ? 4 : 12;
    }
  return combos;
}

/** `{name}` 템플릿 → 노드 배열 (calculator-tool.tsx `fmtNodes`와 같은 동작). */
function fmtNodes(template: string, vars: Record<string, ReactNode>): ReactNode[] {
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

function Rich({ segs }: { segs: RichSeg[] }) {
  return (
    <>
      {segs.map((s, i) =>
        typeof s === "string" ? (
          <Fragment key={i}>{s}</Fragment>
        ) : "b" in s ? (
          <strong key={i} className="text-foreground">{s.b}</strong>
        ) : (
          <Link key={i} href={s.href} className="text-primary hover:underline">{s.text}</Link>
        ),
      )}
    </>
  );
}

export default function HandChartTool({
  dict: D,
  faq,
}: {
  dict: HandChartDict;
  faq: { q: string; a: string }[];
}) {
  const [selectedPos, setSelectedPos] = useState<number | null>(null);
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);

  const totalHands = 169;
  const gap = D.percentGap ?? "";
  const typePct = (maxTier: number) =>
    `${D.typePct.replace("{n}", String(Math.round((countPlayable(maxTier) / totalHands) * 100)))}${gap}%`;
  const comboPct = (maxTier: number) =>
    `${((countCombos(maxTier) / 1326) * 100).toLocaleString(D.numberLocale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}${gap}%`;

  return (
    <>
      <SEO
        title={D.seo.title}
        description={D.seo.description}
        path={D.seo.path}
        keywords={D.seo.keywords}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14 space-y-12">

        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card via-card to-background px-6 py-10 md:py-14 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(var(--gold-dark-rgb),0.18), transparent 70%)" }}
          />
          <div className="relative space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-wide">
              {D.hero.badge}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              {D.hero.h1}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {D.hero.lead}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-sm">
              <span className="text-foreground font-bold">169<span className="text-muted-foreground font-normal ml-1">{D.hero.handsUnit}</span></span>
              <span className="text-border">·</span>
              <span className="text-foreground font-bold">5<span className="text-muted-foreground font-normal ml-1">{D.hero.positionsUnit}</span></span>
              <span className="text-border">·</span>
              <span className="text-primary font-semibold">{D.hero.tapHint}</span>
            </div>
          </div>
        </div>

        {/* Position Filter Buttons */}
        <section className="space-y-4">
          <p className="text-xs text-muted-foreground text-center font-semibold tracking-widest uppercase">
            {D.filter.caption}
          </p>
          {/* 🔴 칩 %의 기준(169종 중)을 한 번 밝힌다 — 칩마다 붙이면 390px에서 줄이 무너진다(ko 판) */}
          {D.filter.basisNote && (
            <p className="text-[11px] text-muted-foreground text-center">
              <Rich segs={D.filter.basisNote} />
            </p>
          )}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedPos(null)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                selectedPos === null
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {D.filter.showAll}
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
                  <span className="ml-1.5 opacity-80 font-normal text-xs">{pct}{gap}%</span>
                </button>
              );
            })}
          </div>

          {selectedPos && (
            <p className="text-center text-sm text-muted-foreground">
              {fmtNodes(D.filter.selected, {
                pos: (
                  <span className="font-semibold text-foreground">
                    {D.positions[selectedPos - 1]}
                  </span>
                ),
                count: (
                  <span className="font-semibold text-foreground">
                    {D.filter.handsCount.replace("{n}", String(countPlayable(selectedPos)))}
                  </span>
                ),
                pct: Math.round((countPlayable(selectedPos) / totalHands) * 100),
              })}
            </p>
          )}
        </section>

        {/* Grid */}
        <section className="space-y-3">
          <p className="md:hidden text-center text-xs text-muted-foreground">{D.grid.swipe}</p>
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
                          outline: isHovered ? "2px solid rgb(var(--gold-dark-rgb))" : undefined,
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
                              {isPair ? D.grid.pocketPair : isSuited ? D.grid.suited : D.grid.offsuit}
                            </div>
                            <div className="mt-1 text-center">
                              {fmtNodes(D.grid.openFrom, {
                                pos: (
                                  <span className="font-semibold" style={{ color: TIER_COLORS[tier] }}>
                                    {TIER_LABELS[tier]}
                                  </span>
                                ),
                              })}
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
            {D.grid.legendNote}
          </p>
        </section>

        {/* Color Legend */}
        <div className="rounded-2xl border border-border/50 p-5 md:p-6 bg-card/40">
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">{D.legend.heading}</h2>
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
                  <div className="font-semibold text-foreground truncate">{D.positions[pos.id - 1]}</div>
                  <div className="text-muted-foreground">{D.legend.seatLine.replace("{pct}", typePct(pos.id))}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg shrink-0 bg-[#1a1a1a] border border-border" />
              <div className="text-xs leading-tight">
                <div className="font-semibold text-foreground">{D.legend.fold}</div>
                <div className="text-muted-foreground">{D.legend.foldSub}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Position Table */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-3">{D.table.heading}</h2>
          {/* 🔴 390px에서 «범위» 열은 첫 화면 밖이다(표 최소폭 560 ↔ 래퍼 358 · ko 판 실측) */}
          {D.table.swipe && <p className="text-xs text-muted-foreground md:hidden">{D.table.swipe}</p>}
          <div className="overflow-x-auto rounded-2xl border border-border/50">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="border-b border-border/50 bg-card/50">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">{D.table.position}</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">
                    {D.table.hands}
                    {D.table.handsSub && <> <span className="font-normal text-muted-foreground text-xs">{D.table.handsSub}</span></>}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">
                    {D.table.range}
                    {D.table.rangeSub && <> <span className="font-normal text-muted-foreground text-xs">{D.table.rangeSub}</span></>}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">{D.table.examples}</th>
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
                        <span className="ml-2 text-muted-foreground text-xs">{D.positions[pos.id - 1]}</span>
                      </td>
                      <td className="px-4 py-3 font-mono text-foreground whitespace-nowrap">
                        {playable}
                        <span className="text-muted-foreground text-xs ml-1">
                          (+{newHands})
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        {typePct(pos.id)}
                        {D.table.comboCell && (
                          <span className="ml-1.5 text-xs opacity-70">{D.table.comboCell.replace("{pct}", comboPct(pos.id))}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">
                        {EXAMPLES[pos.id - 1]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {D.table.notes.map((segs, i) => (
            <p key={i} className="text-xs text-muted-foreground">
              <Rich segs={segs} />
            </p>
          ))}
        </section>

        {/* Why section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-3">{D.why.heading}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {D.why.items.map((item, i) => ({ ...item, icon: WHY_ICONS[i] })).map((item) => (
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
          <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-3">{D.faqHeading}</h2>
          {faq.map((item) => (
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
          <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-3">{D.related.heading}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {D.related.items.map((r) => (
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
