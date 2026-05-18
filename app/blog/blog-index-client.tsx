"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ChevronRight, Tag } from "lucide-react";
import { SEO } from "@/components/seo";
import { POSTS, CATEGORIES, type Category } from "@/lib/posts";

/* ── 포스트별 카드 배치 ─────────────────────────────────────────────
   각 글의 주제/카테고리를 포커 카드 랭크+수트로 표현
   홀 카드 2장을 겹쳐 보여주는 방식 — AI 이모지와 전혀 다른 느낌
─────────────────────────────────────────────────────────────────── */
type Suit = "♠" | "♥" | "♦" | "♣";
interface CardData { rank: string; suit: Suit; rank2?: string; suit2?: Suit; }

const CARD_MAP: Record<string, CardData> = {
  /* ── C4 포스트 (2026-04) ── */
  "holdem-split-pot-rules":           { rank: "8", suit: "♥", rank2: "8", suit2: "♠" },
  /* ── C3 포스트 (2026-04) ── */
  "holdem-vs-7poker-hand-rankings":   { rank: "7", suit: "♥", rank2: "J", suit2: "♠" },
  /* ── C2 포스트 ── */
  "holdem-hand-rankings-confusing":   { rank: "Q", suit: "♠", rank2: "J", suit2: "♣" },
  "holdem-tiebreak-rules":            { rank: "5", suit: "♦", rank2: "5", suit2: "♣" },
  /* ── 기존 포스트 (패턴 다양화) ── */
  "holdem-hand-rankings":             { rank: "A", suit: "♥", rank2: "K", suit2: "♦" },
  "holdem-odds-calculator":           { rank: "9", suit: "♣", rank2: "8", suit2: "♣" },
  "holdem-blind-meaning":             { rank: "K", suit: "♦", rank2: "K", suit2: "♣" },
  "holdem-small-blind-role":           { rank: "5", suit: "♠", rank2: "10", suit2: "♦" },
  "holdem-game-order":                { rank: "A", suit: "♥", rank2: "Q", suit2: "♠" },
  "bluffing-strategy-when-and-how":   { rank: "J", suit: "♥", rank2: "9", suit2: "♦" },
  "position-is-everything-in-holdem": { rank: "K", suit: "♣", rank2: "J", suit2: "♠" },
  "wsop-2025-tournament-guide":       { rank: "K", suit: "♥", rank2: "J", suit2: "♥" },
  "when-to-fold-preflop-holdem":      { rank: "7", suit: "♠", rank2: "2", suit2: "♣" },
  "holdem-starting-hand-range":       { rank: "A", suit: "♣", rank2: "A", suit2: "♥" },
  "holdem-outs-calculation":          { rank: "9", suit: "♦", rank2: "8", suit2: "♦" },
  "holdem-overbet-strategy":          { rank: "10", suit: "♠", rank2: "10", suit2: "♣" },
  "holdem-beginner-mistakes-10":      { rank: "8", suit: "♥", rank2: "3", suit2: "♠" },
  "apt-jeju-classic-2026-guide":      { rank: "A", suit: "♦", rank2: "J", suit2: "♦" },
  "holdem-flush-vs-straight":         { rank: "7", suit: "♣", rank2: "6", suit2: "♣" },
  "holdem-pot-odds-calculation":      { rank: "10", suit: "♦", rank2: "9", suit2: "♦" },
  "holdem-probability":               { rank: "J", suit: "♠", rank2: "10", suit2: "♥" },
};

function isRed(suit: Suit) { return suit === "♥" || suit === "♦"; }

/* 단일 포커 카드 SVG */
function PokerCard({ rank, suit, w, h, tilt = 0, shadow = true }:
  { rank: string; suit: Suit; w: number; h: number; tilt?: number; shadow?: boolean }) {
  const color = isRed(suit) ? "#c0392b" : "#0f172a";
  const fontSize = rank === "10" ? Math.round(h * 0.14) : Math.round(h * 0.16);
  const suitSize = Math.round(h * 0.42);
  const cornerFontSize = Math.round(h * 0.14);
  const cornerSuitSize = Math.round(h * 0.12);

  return (
    <g transform={`rotate(${tilt})`} style={{ filter: shadow ? "drop-shadow(0 3px 8px rgba(0,0,0,0.45))" : "none" }}>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={Math.round(w * 0.1)}
        fill="#fdf8ee" stroke="#d4af37" strokeWidth={1.2} />
      <text x={-w / 2 + 4} y={-h / 2 + cornerFontSize + 2}
        fontSize={cornerFontSize} fill={color} fontFamily="Georgia,Times New Roman,serif" fontWeight="bold">{rank}</text>
      <text x={-w / 2 + 4} y={-h / 2 + cornerFontSize * 2 + 4}
        fontSize={cornerSuitSize} fill={color} fontFamily="Georgia,Times New Roman,serif">{suit}</text>
      <text x={0} y={suitSize * 0.26} textAnchor="middle"
        fontSize={suitSize} fill={color} fontFamily="Georgia,Times New Roman,serif">{suit}</text>
      <g transform={`rotate(180)`}>
        <text x={-w / 2 + 4} y={-h / 2 + cornerFontSize + 2}
          fontSize={cornerFontSize} fill={color} fontFamily="Georgia,Times New Roman,serif" fontWeight="bold">{rank}</text>
        <text x={-w / 2 + 4} y={-h / 2 + cornerFontSize * 2 + 4}
          fontSize={cornerSuitSize} fill={color} fontFamily="Georgia,Times New Roman,serif">{suit}</text>
      </g>
    </g>
  );
}

/* 썸네일 컴포넌트 — 카드 2장 겹쳐서 표시 */
function CardThumb({ slug, featured = false }: { slug: string; featured?: boolean }) {
  const data = CARD_MAP[slug] ?? { rank: "A", suit: "♠" as Suit, rank2: "K", suit2: "♠" as Suit };
  const { rank, suit, rank2, suit2 } = data;

  const W = featured ? 90 : 60;
  const H = Math.round(W * 1.4);
  const svgW = featured ? 240 : 160;
  const svgH = featured ? 160 : 110;

  return (
    <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ overflow: "visible" }}>
      <g transform={`translate(${svgW / 2 - W * 0.18}, ${svgH / 2})`}>
        {rank2 && suit2 && (
          <PokerCard rank={rank2} suit={suit2 as Suit} w={W} h={H} tilt={-8} shadow />
        )}
      </g>
      <g transform={`translate(${svgW / 2 + W * 0.18}, ${svgH / 2})`}>
        <PokerCard rank={rank} suit={suit} w={W} h={H} tilt={8} shadow />
      </g>
    </svg>
  );
}

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState<Category | "전체">("전체");

  const sorted = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  const filtered = activeCategory === "전체"
    ? sorted
    : sorted.filter((p) => p.category === activeCategory);

  const featured = sorted[0];
  const rest = sorted.slice(1);

  const jsonLd = [
    {
      "@type": "Blog",
      "name": "홀덤마스터 블로그",
      "description": "텍사스 홀덤 전략, 포커 팁, 토너먼트 정보를 정기적으로 업데이트합니다.",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.holdemmaster.com/" },
        { "@type": "ListItem", "position": 2, "name": "홀덤 전략 블로그", "item": "https://www.holdemmaster.com/blog" },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="⚡ 온라인홀덤 전략 블로그 — 포커 실전 팁 매주 업데이트"
        description="⚡홀덤 전략⚡ 실력 올리는 가장 빠른 법. 블러핑·포지션 플레이·토너먼트 공략 등 실전 검증된 칼럼을 2~3일마다 업데이트합니다."
        keywords="홀덤 블로그, 포커 전략 칼럼, 텍사스 홀덤 팁, 홀덤 뉴스, 포커 토너먼트 정보, 홀덤 초보 팁, 블러핑 전략, 홀덤 포지션"
        path="/blog"
        schema={jsonLd}
      />

      {/* Header */}
      <section className="relative py-16 md:py-20 border-b border-gray-500/40 overflow-hidden bg-gray-500">
        {/* 로드맵 이미지 — 흑백, 콘트라스트 높여서 필름B&W 질감
            장식용 배경(decorative)이라 fetchpriority=high·preload 안 함.
            webp로 교체해 ~80% 용량 절감, eager+동기 디코딩으로 LCP 직전에만 페인트. */}
        <img
          src="/images/roadmap-preview.webp"
          alt=""
          aria-hidden="true"
          width={1600}
          height={900}
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{
            opacity: 0.32,
            filter: "grayscale(100%) invert(1) contrast(1.1) brightness(1.0)",
            objectPosition: "center 38%",
          }}
        />
        {/* 상단 페이드 — 네비와 자연스럽게 */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-gray-500 to-transparent" />
        {/* 하단 페이드 */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-gray-500/80" />
        {/* 중간 스크림 */}
        <div className="absolute inset-0 bg-gray-500/25" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-primary mb-3">
            홀덤 전략 블로그
          </h1>
          <p className="max-w-xl mx-auto mb-8" style={{ color: "#fef3c7" }}>
            텍사스 홀덤 전략, 초보 가이드, 토너먼트 소식을 2~3일마다 업데이트합니다.
          </p>

          {/* 로드맵 배너 */}
          <Link href="/blog/roadmap">
            <motion.div
              className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.025 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {/* 배경 */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1c0b35] via-[#0d1f3a] to-[#071a0e]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,175,55,0.18)_0%,transparent_65%)]" />

              {/* shimmer 광택 */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,220,80,0.13) 50%, transparent 60%)", width: "200%" }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: "linear", repeatDelay: 1.2 }}
              />

              {/* 박동 테두리 */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                animate={{ borderColor: ["rgba(212,175,55,0.35)", "rgba(212,175,55,0.75)", "rgba(212,175,55,0.35)"] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              />

              <div className="relative px-5 py-5 flex items-center gap-4">
                {/* 아이콘 */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-yellow-500/15 border border-yellow-400/40 flex items-center justify-center text-3xl">
                  🗺️
                </div>

                {/* 텍스트 */}
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-block text-[11px] bg-yellow-400 text-black font-black px-2.5 py-0.5 rounded-full uppercase tracking-wide leading-tight">
                      처음이라면 필독
                    </span>
                  </div>
                  <p className="text-[17px] font-black text-white leading-snug">
                    홀덤마스터 학습 로드맵
                  </p>
                  <p className="text-xs text-yellow-300/75 mt-0.5">
                    어디서부터 읽어야 할지 한눈에 정리했습니다
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {["족보", "기초규칙", "확률", "포지션", "전략", "토너먼트"].map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-white/10 text-white/65 border border-white/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA 버튼 */}
                <motion.div
                  className="flex-shrink-0 px-4 py-2.5 bg-yellow-400 text-black font-black text-sm rounded-xl flex items-center gap-1.5 whitespace-nowrap shadow-lg"
                  whileHover={{ backgroundColor: "#fef08a" }}
                >
                  로드맵 보기 →
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-20 z-30 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {(["전체", ...CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as Category | "전체")}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {activeCategory === "전체" ? (
          <>
            {/* Featured Post */}
            <Link href={`/blog/${featured.slug}`}>
              <motion.article
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="h-52 md:h-auto md:w-72 bg-gradient-to-br from-[#0d2618] via-[#0a3320] to-[#071a10] flex items-center justify-center flex-shrink-0">
                    <CardThumb slug={featured.slug} featured />
                  </div>
                  <div className="p-7 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
                        ★ 추천 포스트
                      </span>
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-card border border-border text-muted-foreground">
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{featured.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
                      <span>{featured.date}</span>
                    </div>
                    <div className="mt-4 flex items-center text-primary font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                      읽기 <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {rest.map((post, idx) => (
                <PostCard key={post.slug} post={post} delay={idx * 0.07} />
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filtered.length > 0
              ? filtered.map((post, idx) => <PostCard key={post.slug} post={post} delay={idx * 0.07} />)
              : (
                <div className="md:col-span-3 text-center py-20 text-muted-foreground">
                  <div className="text-5xl mb-4">—</div>
                  <p className="text-lg font-semibold">곧 업로드 예정입니다</p>
                  <p className="text-sm mt-2">이 카테고리의 콘텐츠를 준비 중입니다.</p>
                </div>
              )
            }
          </div>
        )}
      </div>
    </>
  );
}

function PostCard({ post, delay }: { post: typeof POSTS[0]; delay: number }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full flex flex-col"
      >
        <div className="h-36 bg-gradient-to-br from-[#0d2618] via-[#0a3320] to-[#071a10] flex items-center justify-center">
          <CardThumb slug={post.slug} />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
          </div>
          <h3 className="font-bold text-foreground text-sm leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-1">
            {post.title}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-3">{post.desc}</p>
          <div className="flex flex-wrap gap-1 mb-3">
            {post.tags.slice(0, 2).map(t => (
              <span key={t} className="flex items-center gap-0.5 text-xs text-muted-foreground/70">
                <Tag className="w-2.5 h-2.5" /> {t}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-3 border-t border-border">
            <span>{post.date}</span>
            <span className="flex items-center gap-0.5 text-primary font-semibold group-hover:gap-1 transition-all">
              읽기 <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
