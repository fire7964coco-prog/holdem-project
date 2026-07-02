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
  { id: 1, label: "UTG", full: "언더더건 (UTG)", color: "#dc2626", pct: "약 12%" },
  { id: 2, label: "HJ", full: "하이잭 (HJ)", color: "#ea580c", pct: "약 20%" },
  { id: 3, label: "CO", full: "컷오프 (CO)", color: "#ca8a04", pct: "약 29%" },
  { id: 4, label: "BTN", full: "버튼 (BTN)", color: "#16a34a", pct: "약 42%" },
  { id: 5, label: "SB", full: "스몰블라인드 (SB)", color: "#2563eb", pct: "약 56%" },
];

const TIER_COLORS = [
  "transparent",
  "#dc2626",
  "#ea580c",
  "#ca8a04",
  "#16a34a",
  "#2563eb",
];

const TIER_LABELS = ["폴드", "UTG", "HJ", "CO", "BTN", "SB"];

const RELATED = [
  { href: "/blog/holdem-starting-hand-range", tag: "심화 가이드", title: "스타팅 핸드 완전 가이드", desc: "169가지 핸드 4등급 분류 + 포지션별 레인지" },
  { href: "/blog/when-to-fold-preflop-holdem", tag: "폴드 기준", title: "프리플랍에서 언제 폴드하나", desc: "버려야 할 핸드 기준 5단계 체크리스트" },
  { href: "/blog/position-is-everything-in-holdem", tag: "포지션", title: "포지션이 전부다", desc: "자리별 전략과 버튼이 강한 이유" },
  { href: "/blog/holdem-hand-rankings", tag: "족보", title: "홀덤 족보 순위 10가지", desc: "로열플러시부터 하이카드까지" },
  { href: "/calculator", tag: "도구", title: "승률·팟오즈 계산기", desc: "핸드별 정확한 승률을 수치로 확인" },
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

export default function HandChart() {
  const [selectedPos, setSelectedPos] = useState<number | null>(null);
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);

  const totalHands = 169;

  return (
    <>
      <SEO
        title="홀덤 스타팅 핸드 차트 — 포지션별 오픈 레인지 완전 가이드"
        description="UTG·HJ·CO·버튼·SB 포지션별 스타팅 핸드 169개를 한눈에 비교하는 인터랙티브 차트. 한국어 GTO 오픈 레인지 기준으로 색상 코딩, 버튼 하나로 포지션별 플레이 범위 즉시 확인."
        canonical="https://www.holdemmaster.com/hand-chart"
        keywords={["홀덤 스타팅 핸드", "포지션별 핸드 차트", "홀덤 오픈 레인지", "UTG 레인지", "버튼 레인지", "GTO 스타팅 핸드"]}
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
              ♠ 인터랙티브 스타팅 핸드 도구
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              홀덤 스타팅 핸드 차트
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              169개 핸드를 포지션(UTG → SB)별로 색상 코딩. 버튼을 누르면 해당 포지션에서 오픈할 수 있는 핸드만 강조됩니다.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-sm">
              <span className="text-foreground font-bold">169<span className="text-muted-foreground font-normal ml-1">핸드</span></span>
              <span className="text-border">·</span>
              <span className="text-foreground font-bold">5<span className="text-muted-foreground font-normal ml-1">포지션</span></span>
              <span className="text-border">·</span>
              <span className="text-primary font-semibold">탭 · 호버로 즉시 확인</span>
            </div>
          </div>
        </div>

        {/* Position Filter Buttons */}
        <section className="space-y-4">
          <p className="text-xs text-muted-foreground text-center font-semibold tracking-widest uppercase">
            포지션 선택 → 플레이 가능 핸드 하이라이트
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
              전체 보기
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
              {" "}오픈 레인지 ·{" "}
              <span className="font-semibold text-foreground">
                {countPlayable(selectedPos)}핸드
              </span>
              {" "}/ 169 ({Math.round((countPlayable(selectedPos) / totalHands) * 100)}%)
            </p>
          )}
        </section>

        {/* Grid */}
        <section className="space-y-3">
          <p className="md:hidden text-center text-xs text-muted-foreground">← 좌우로 밀어 전체 차트 보기 →</p>
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
                              {isPair ? "포켓페어" : isSuited ? "수티드" : "오프수트"}
                            </div>
                            <div className="mt-1 text-center">
                              <span className="font-semibold" style={{ color: TIER_COLORS[tier] }}>
                                {TIER_LABELS[tier]}
                              </span>
                              {" "}이상 오픈
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
            우상단 삼각형 = 수티드(s) · 대각선 = 포켓페어 · 좌하단 삼각형 = 오프수트(o)
          </p>
        </section>

        {/* Color Legend */}
        <div className="rounded-2xl border border-border/50 p-5 md:p-6 bg-card/40">
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">색상 범례</h2>
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
                <div className="font-semibold text-foreground">폴드</div>
                <div className="text-muted-foreground">전 포지션</div>
              </div>
            </div>
          </div>
        </div>

        {/* Position Table */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-3">포지션별 오픈 레인지 요약</h2>
          <div className="overflow-x-auto rounded-2xl border border-border/50">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="border-b border-border/50 bg-card/50">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">포지션</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">핸드 수</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">범위</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">대표 핸드</th>
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
                        {pos.id === 2 && "+66-55, A9s-A8s, K10s, Q10s, J9s, 10-8s, 98s, A10o, KJo"}
                        {pos.id === 3 && "+44, A7s-A2s, K9s, Q9s, J8s, 97s, 87s, K10o, QJo, J10o"}
                        {pos.id === 4 && "+33-22, K8s-K4s, Q8s-Q7s, J7s, 10-7s, 76s-65s, K9o+, Q9o+"}
                        {pos.id === 5 && "+A6o-A4o, K8o-K7o, Q8o, J7o, 97o-87o, 76o, 95s, 85s, 75s, 64s, 54s"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">
            * GTO 기반 근사값 — 실전에서는 테이블 성향, 스택 깊이, 상대방 레인지에 따라 조정 필요
          </p>
        </section>

        {/* Why section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-3">포지션이 핸드 선택에 영향을 주는 이유</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "포지션 = 정보의 양",
                desc: "버튼(BTN)은 포스트플랍에서 항상 마지막에 행동합니다. 상대방의 베팅·체크를 모두 보고 판단할 수 있어 같은 핸드라도 수익성이 훨씬 높습니다.",
                icon: "📍",
              },
              {
                title: "UTG는 뒤에 8명이 있다",
                desc: "9인 테이블 UTG에서 오픈 레이즈 시 뒤 8명의 리액션을 모릅니다. 리레이즈 확률이 높아 수티드 커넥터 같은 투기적 핸드가 제 가치를 실현하기 어려우므로, 프리미엄 핸드 위주로 좁혀야 합니다.",
                icon: "⚠️",
              },
              {
                title: "수티드의 가치",
                desc: "수티드 핸드는 같은 숫자 오프수트 대비 약 3~4% EV 우위가 있습니다. UTG에서 A8s를 오픈해도 A8o는 폴드하는 이유입니다.",
                icon: "♠️",
              },
              {
                title: "SB의 딜레마",
                desc: "SB는 포스트플랍에서 항상 먼저 행동합니다. BTN보다 범위가 넓어도 실현 에퀴티가 낮아 중간 강도 핸드의 수익성이 떨어집니다.",
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
          <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-3">자주 묻는 질문</h2>
          {[
            {
              q: "스타팅 핸드 차트를 무조건 따라야 하나요?",
              a: "차트는 시작점입니다. 6맥스 테이블에서는 9맥스 대비 1~2단계 포지션을 당겨서 적용합니다. 앤티가 있으면 전체 레인지를 5~8% 넓힙니다. 피쉬가 많은 테이블에선 더 타이트하게 밸류를 극대화하는 것이 유리합니다.",
            },
            {
              q: "169개 핸드가 정확히 맞나요?",
              a: "네. 포커 핸드의 종류는 수트를 구분하지 않을 때 정확히 169가지입니다: 포켓페어 13개, 수티드 핸드 78개, 오프수트 핸드 78개. 실제 덱에서 콤보 수는 총 1326개입니다.",
            },
            {
              q: "BB는 왜 차트에 없나요?",
              a: "BB는 이미 1BB를 투자한 상태라 오픈 레이즈가 아닌 '디펜스'(콜/리레이즈) 개념이 적용됩니다. BB 디펜스 레인지는 상대의 오픈 포지션·사이즈에 따라 완전히 달라져 별도 차트가 필요합니다.",
            },
            {
              q: "버튼에서 42% 레인지를 오픈해도 괜찮나요?",
              a: "GTO상 버튼 오픈 레인지는 실제로 40~50%에 달합니다. 하지만 상대가 타이트하거나 초보라면 프리미엄에 더 집중하는 것도 실전에서 수익률이 높습니다. 차트는 균형 잡힌 전략의 기준점입니다.",
            },
            {
              q: "리레이즈(3벳)가 들어오면 어떻게 하나요?",
              a: "오픈 레인지와 3벳 콜 레인지는 다릅니다. 일반적으로 3벳에는 AA-JJ, AKs-AQs 같은 프리미엄과 일부 블러프 핸드(A5s, A4s 등 넛 플러시 드로우 겸 에퀴티 핸드)로 응답합니다. 나머지는 폴드입니다.",
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

        {/* 관련 가이드 (내부링크) */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-3">다음 단계 — 관련 가이드</h2>
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
