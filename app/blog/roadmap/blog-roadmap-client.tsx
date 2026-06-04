"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { SEO } from "@/components/seo";
import { Home, BookOpen } from "lucide-react";

/* ── 타입 ─────────────────────────────────────────────────────── */
interface ClusterNode {
  label: string;
  slug?: string;
  published: boolean;
}
interface Pillar {
  id: string;
  label: string;
  emoji: string;
  angle: number;
  color: string;
  textColor: string;
  clusters: ClusterNode[];
  clusterR?: number;    // 클러스터를 중심에서 더 멀리 배치 (기본 0)
  clusterGap?: number;  // 클러스터 간 간격 (기본 CLUSTER_GAP)
}

/* ── 데이터 ───────────────────────────────────────────────────── */
const PILLARS: Pillar[] = [
  {
    id: "p1",
    label: "홀덤 족보",
    emoji: "👑",
    angle: 15,
    color: "#7c3aed",
    textColor: "#ede9fe",
    clusters: [
      { label: "족보 순서 완전 정복",     slug: "holdem-hand-rankings",           published: true  },
      { label: "타이브레이크 규칙",        slug: "holdem-tiebreak-rules",          published: true  },
      { label: "헷갈리는 족보 TOP5",       slug: "holdem-hand-rankings-confusing", published: true  },
      { label: "홀덤 vs 7포커 차이",      slug: "holdem-vs-7poker-hand-rankings", published: true  },
      { label: "플러시 vs 스트레이트",     slug: "holdem-flush-vs-straight",    published: true  },
      { label: "족보별 확률 총정리",       published: false },
    ],
  },
  {
    id: "p2",
    label: "기초 규칙",
    emoji: "📖",
    angle: 70,
    color: "#1d4ed8",
    textColor: "#dbeafe",
    clusters: [
      { label: "게임 진행 순서",           slug: "holdem-game-order",             published: true  },
      { label: "블라인드 뜻",              slug: "holdem-blind-meaning",          published: true  },
      { label: "스플릿 팟 완전 정복",      slug: "holdem-split-pot-rules",        published: true  },
      { label: "스몰블라인드 역할",         slug: "holdem-small-blind-role",       published: true  },
      { label: "체크 뜻·언제 쓰나",        slug: "holdem-check-meaning", published: true  },
      { label: "레이즈 얼마나",            slug: "holdem-raise-how-much", published: false },
    ],
  },
  {
    id: "p3",
    label: "확률·수학",
    emoji: "🎲",
    angle: 112,
    color: "#b91c1c",
    textColor: "#fee2e2",
    clusterR: 30,
    clusters: [
      { label: "포커 확률 계산기",          slug: "holdem-odds-calculator",        published: true  },
      { label: "아웃츠 계산법",             slug: "holdem-outs-calculation",       published: true  },
      { label: "팟오즈 계산하는 법",        slug: "holdem-pot-odds-calculation",   published: true  },
      { label: "홀덤 확률 완전 정복",       slug: "holdem-probability",            published: true  },
      { label: "포켓에이스 받을 확률",      published: false },
      { label: "포켓페어 세트 뜰 확률",    published: false },
    ],
  },
  {
    id: "p4",
    label: "스타팅 핸드",
    emoji: "🃏",
    angle: 205,
    color: "#b45309",
    textColor: "#fef3c7",
    clusters: [
      { label: "스타팅 핸드 레인지",        slug: "holdem-starting-hand-range",   published: true  },
      { label: "프리플랍 폴드 기준",        slug: "when-to-fold-preflop-holdem",  published: true  },
      { label: "포켓에이스 AA 플레이법",   slug: "pocket-aces-aa-strategy",      published: true  },
      { label: "포켓킹 KK 플레이법",       slug: "pocket-kings-kk-strategy",    published: true  },
      { label: "AK 오프수트 전략",         slug: "ak-offsuit-strategy",          published: true  },
    ],
  },
  {
    id: "p5",
    label: "포지션 전략",
    emoji: "🎯",
    angle: 240,
    color: "#065f46",
    textColor: "#d1fae5",
    clusters: [
      { label: "포지션이 전부다",           slug: "position-is-everything-in-holdem", published: true  },
      { label: "버튼 포지션 유리한 이유",   published: false },
      { label: "UTG 포지션 플레이법",      published: false },
      { label: "컷오프 포지션 전략",       published: false },
    ],
  },
  {
    id: "p6",
    label: "배팅 전략",
    emoji: "💰",
    angle: 282,
    color: "#0e7490",
    textColor: "#cffafe",
    clusters: [
      { label: "오버벳 전략",              slug: "holdem-overbet-strategy",      published: true  },
      { label: "블러핑 타이밍·기준",        slug: "bluffing-strategy-when-and-how", published: true  },
      { label: "3벳이란? 밸류·블러프 완전 정리", slug: "holdem-3bet-strategy",       published: true  },
      { label: "C벳이란 뜻·타이밍",        slug: "holdem-cbet-strategy",       published: true  },
      { label: "체크레이즈 전략",          slug: "holdem-check-raise",         published: true  },
      { label: "밸류벳 크기 결정법",       slug: "holdem-value-bet-sizing",    published: true  },
    ],
  },
  {
    id: "p7",
    label: "초보 가이드",
    emoji: "🌱",
    angle: 358,
    clusterR: 30,
    color: "#92400e",
    textColor: "#fed7aa",
    clusters: [
      { label: "초보 실수 10가지",         slug: "holdem-beginner-mistakes-10",  published: true  },
      { label: "포커 텔이란 뜻",           published: false },
      { label: "홀덤 레인지란 뜻",         slug: "holdem-range-meaning",        published: true  },
      { label: "TAG·LAG 전략",            published: false },
    ],
  },
  {
    id: "p8",
    label: "토너먼트",
    emoji: "🏆",
    angle: 328,
    color: "#6d28d9",
    clusterR: 55,
    textColor: "#ede9fe",
    clusters: [
      { label: "WSOP 2025 가이드",        slug: "wsop-2025-tournament-guide",   published: true  },
      { label: "APT 제주 클래식 2026",    slug: "apt-jeju-classic-2026-guide",  published: true  },
      { label: "토너먼트 vs 캐시게임",     published: false },
      { label: "ICM이란 뜻",               slug: "icm-poker-meaning",            published: true  },
      { label: "버블 전략",               slug: "holdem-bubble-strategy", published: true  },
    ],
  },
  {
    id: "p9",
    label: "홀덤펍",
    emoji: "🍺",
    angle: 162,
    color: "#be185d",
    textColor: "#fce7f3",
    clusterR: 90,
    clusterGap: 38,
    clusters: [
      { label: "홀덤펍 처음 가는 법",     slug: "holdem-pub-first-visit-guide", published: true  },
      { label: "홀덤펍 에티켓",           published: false },
      { label: "홀덤펍 합법 여부",        slug: "holdem-pub-legal",            published: true  },
      { label: "홀덤펍 비용·바이인",      published: false },
      { label: "혼자 홀덤펍 방문",        published: false },
      { label: "홀덤 데이트",             published: false },
      { label: "강남 홀덤펍",             published: false },
      { label: "홀덤펍 창업",             published: false },
      { label: "홀덤 딜러 직업",          published: false },
      { label: "홀덤 딜러 채용",          published: false },
    ],
  },
];

/* ── SVG 좌표 계산 ───────────────────────────────────────────── */
const CX = 700, CY = 460;
const PILLAR_R = 210;
const CLUSTER_BASE_R = 200;
const CLUSTER_GAP = 46;
const RAD = Math.PI / 180;

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  return {
    x: cx + r * Math.cos(angleDeg * RAD),
    y: cy + r * Math.sin(angleDeg * RAD),
  };
}

function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

/* ── 메인 컴포넌트 ────────────────────────────────────────────── */
export default function BlogRoadmap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const totalPublished = PILLARS.flatMap(p => p.clusters).filter(c => c.published).length;
  const totalPlanned   = PILLARS.flatMap(p => p.clusters).length;

  return (
    <>
      <SEO
        path="/blog/roadmap"
        title="홀덤마스터 블로그 로드맵 — 전체 학습 지도"
        seoTitle="홀덤 완전 정복 로드맵 — 족보·전략·확률 한눈에"
        description={`홀덤마스터 블로그 전체 ${totalPlanned}개 주제 로드맵. 족보·기초규칙·확률·포지션·배팅전략 등 8개 카테고리를 마인드맵으로 한눈에 확인하세요.`}
        keywords={["홀덤 학습 로드맵", "홀덤 블로그 목차", "홀덤 마스터 가이드", "홀덤 전략 모음"]}
      />

      <div className="min-h-screen bg-[#0a0f1a] text-white">
        {/* 헤더 */}
        <div className="max-w-5xl mx-auto px-4 pt-8 pb-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
              <Home size={14} /> 홈
            </Link>
            <span>/</span>
            <Link href="/blog" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
              <BookOpen size={14} /> 블로그
            </Link>
            <span>/</span>
            <span className="text-white">로드맵</span>
          </nav>

          <h1 className="text-3xl font-bold text-yellow-400 mb-2">홀덤마스터 블로그 로드맵</h1>
          <p className="text-gray-300 mb-3">
            전체 학습 지도 — 노드를 클릭하면 해당 글로 이동합니다
          </p>

          {/* 진행 현황 바 */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex-1 bg-gray-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full transition-all duration-700"
                style={{ width: `${(totalPublished / totalPlanned) * 100}%` }}
              />
            </div>
            <span className="text-sm text-yellow-400 font-mono whitespace-nowrap">
              {totalPublished} / {totalPlanned} 발행 완료
            </span>
          </div>

          {/* 범례 */}
          <div className="flex gap-4 text-xs text-gray-400 mb-6">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
              발행 완료
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-gray-600 border border-gray-500 border-dashed inline-block" />
              예정 (준비 중)
            </span>
          </div>
        </div>

        {/* SVG 마인드맵 */}
        <div className="w-full overflow-x-auto pb-8">
          <svg
            ref={svgRef}
            viewBox="0 0 1400 920"
            className="w-full max-w-6xl mx-auto block"
            style={{ minWidth: 700 }}
          >
            {/* 배경 그라디언트 */}
            <defs>
              <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#111827" />
                <stop offset="100%" stopColor="#0a0f1a" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <rect width="1400" height="920" fill="url(#bgGrad)" rx="16" />

            {/* 장식용 동심원 */}
            {[100, 200, 310, 430].map(r => (
              <circle key={r} cx={CX} cy={CY} r={r}
                fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
            ))}

            {PILLARS.map(pillar => {
              const pa = polar(CX, CY, PILLAR_R, pillar.angle);

              return (
                <g key={pillar.id}>
                  {/* 중심 → 필라 연결선 */}
                  <path
                    d={cubicBezier(CX, CY, pa.x, pa.y)}
                    fill="none"
                    stroke={pillar.color}
                    strokeWidth="2"
                    opacity="0.6"
                  />

                  {/* 클러스터 노드들 */}
                  {pillar.clusters.map((cluster, ci) => {
                    const gap = pillar.clusterGap ?? CLUSTER_GAP;
                    const spread = (ci - (pillar.clusters.length - 1) / 2) * gap;
                    const perpAngle = pillar.angle + 90;
                    const baseR = PILLAR_R + CLUSTER_BASE_R + (pillar.clusterR ?? 0);
                    const bx = polar(CX, CY, baseR, pillar.angle).x;
                    const by = polar(CX, CY, baseR, pillar.angle).y;
                    const cx2 = bx + spread * Math.cos(perpAngle * RAD);
                    const cy2 = by + spread * Math.sin(perpAngle * RAD);
                    const nodeKey = `${pillar.id}-${ci}`;
                    const isHovered = hoveredNode === nodeKey;

                    const nodeW = 140, nodeH = 32;

                    return (
                      <g key={ci}>
                        {/* 필라 → 클러스터 연결선 */}
                        <line
                          x1={pa.x} y1={pa.y} x2={cx2} y2={cy2}
                          stroke={cluster.published ? pillar.color : "#374151"}
                          strokeWidth="1.2"
                          strokeDasharray={cluster.published ? "none" : "4 3"}
                          opacity={cluster.published ? 0.7 : 0.4}
                        />

                        {/* 클러스터 노드 */}
                        {cluster.published && cluster.slug ? (
                          <a
                            href={`/blog/${cluster.slug}`}
                            onMouseEnter={() => setHoveredNode(nodeKey)}
                            onMouseLeave={() => setHoveredNode(null)}
                          >
                            <rect
                              x={cx2 - nodeW / 2} y={cy2 - nodeH / 2}
                              width={nodeW} height={nodeH} rx="8"
                              fill={isHovered ? pillar.color : "#1e293b"}
                              stroke={pillar.color}
                              strokeWidth={isHovered ? 2 : 1.2}
                              style={{ cursor: "pointer", transition: "all 0.15s" }}
                              filter={isHovered ? "url(#glow)" : undefined}
                            />
                            <circle cx={cx2 - nodeW / 2 + 14} cy={cy2} r="4"
                              fill="#fbbf24" />
                            <text
                              x={cx2 - nodeW / 2 + 24} y={cy2 + 4}
                              fontSize="10.5" fill={isHovered ? "#fff" : pillar.textColor}
                              fontFamily="Noto Sans KR, sans-serif"
                              style={{ cursor: "pointer", userSelect: "none" }}
                            >
                              {cluster.label.length > 11 ? cluster.label.slice(0, 10) + "…" : cluster.label}
                            </text>
                          </a>
                        ) : (
                          <g opacity="0.45">
                            <rect
                              x={cx2 - nodeW / 2} y={cy2 - nodeH / 2}
                              width={nodeW} height={nodeH} rx="8"
                              fill="#111827"
                              stroke="#374151"
                              strokeWidth="1"
                              strokeDasharray="4 3"
                            />
                            <circle cx={cx2 - nodeW / 2 + 14} cy={cy2} r="4"
                              fill="#4b5563" />
                            <text
                              x={cx2 - nodeW / 2 + 24} y={cy2 + 4}
                              fontSize="10.5" fill="#6b7280"
                              fontFamily="Noto Sans KR, sans-serif"
                            >
                              {cluster.label.length > 11 ? cluster.label.slice(0, 10) + "…" : cluster.label}
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}

                  {/* 필라 노드 */}
                  <g>
                    <ellipse cx={pa.x} cy={pa.y} rx="54" ry="26"
                      fill={pillar.color} stroke={pillar.textColor}
                      strokeWidth="1.5" opacity="0.95"
                      filter="url(#glow)"
                    />
                    <text x={pa.x} y={pa.y - 5} textAnchor="middle"
                      fontSize="13" fontWeight="bold"
                      fill={pillar.textColor}
                      fontFamily="Noto Sans KR, sans-serif"
                    >
                      {pillar.emoji}
                    </text>
                    <text x={pa.x} y={pa.y + 10} textAnchor="middle"
                      fontSize="10.5" fontWeight="bold"
                      fill={pillar.textColor}
                      fontFamily="Noto Sans KR, sans-serif"
                    >
                      {pillar.label}
                    </text>
                  </g>
                </g>
              );
            })}

            {/* 중심 노드 */}
            <g filter="url(#glow)">
              <ellipse cx={CX} cy={CY} rx="72" ry="36"
                fill="#92400e" stroke="#fbbf24" strokeWidth="2.5" />
              <text x={CX} y={CY - 7} textAnchor="middle"
                fontSize="15" fontWeight="bold" fill="#fef3c7"
                fontFamily="Noto Sans KR, sans-serif">
                🃏 홀덤마스터
              </text>
              <text x={CX} y={CY + 10} textAnchor="middle"
                fontSize="10" fill="#fcd34d"
                fontFamily="Noto Sans KR, sans-serif">
                블로그 로드맵
              </text>
            </g>
          </svg>
        </div>

        {/* 카테고리별 포스트 목록 (SEO용 텍스트) */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          <h2 className="text-xl font-bold text-yellow-400 mb-6 border-b border-gray-800 pb-3">
            카테고리별 전체 글 목록
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PILLARS.map(pillar => (
              <div key={pillar.id}
                className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <h3 className="font-bold mb-3 flex items-center gap-2 text-sm"
                  style={{ color: pillar.textColor }}>
                  <span>{pillar.emoji}</span>
                  <span>{pillar.label}</span>
                  <span className="ml-auto text-xs text-gray-500">
                    {pillar.clusters.filter(c => c.published).length}/{pillar.clusters.length}
                  </span>
                </h3>
                <ul className="space-y-1.5">
                  {pillar.clusters.map((c, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs">
                      {c.published && c.slug ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                          <Link href={`/blog/${c.slug}`}
                            className="text-gray-200 hover:text-yellow-400 transition-colors leading-snug">
                            {c.label}
                          </Link>
                        </>
                      ) : (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                          <span className="text-gray-600 leading-snug">{c.label}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 블로그로 돌아가기 */}
          <div className="mt-10 text-center">
            <Link href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition-colors text-sm">
              <BookOpen size={16} />
              전체 블로그 목록 보기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
