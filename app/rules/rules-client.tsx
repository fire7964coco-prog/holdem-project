"use client";

import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, Lightbulb, AlertTriangle } from "lucide-react";

const GAME_TILES = [
  {
    id: "texas-holdem",
    label: "TEXAS HOLD'EM",
    title: "텍사스 홀덤 포커 규칙",
    desc: "텍사스 홀덤 포커를 가장 쉽게 즐기는 방법",
    cta: "LEARN TO PLAY",
    bg: "from-[#0d2818] via-[#1a4a2e] to-[#0d2818]",
    href: "/rules/texas-holdem",
  },
  {
    id: "omaha",
    label: "OMAHA",
    title: "오마하 포커 규칙",
    desc: "오마하 포커는 팟 리밋 또는 픽스드 리밋 게임으로 자주 플레이되는 액션 게임입니다.",
    cta: "LEARN TO PLAY",
    bg: "from-[#1a1a0d] via-[#3a3a10] to-[#1a1a0d]",
    href: "/rules/omaha",
  },
  {
    id: "seven-card-stud",
    label: "7 CARD STUD",
    title: "세븐 카드 스터드 규칙",
    desc: "플롭이 없는 고전적인 포커 게임으로, 주로 리밋 게임으로 진행됩니다.",
    cta: "LEARN TO PLAY",
    bg: "from-[#1a0d0d] via-[#3a1010] to-[#1a0d0d]",
    href: "/rules/seven-card-stud",
  },
];

const GAME_SECTIONS = [
  {
    id: "texas-holdem",
    title: "텍사스 홀덤 플레이 방법",
    game: "텍사스 홀덤",
    players: "2~10명",
    href: "/rules/texas-holdem",
    linkText: "텍사스 홀덤 규칙 전체 보기",
    badge: "가장 인기",
    image: "/images/rules-texas-holdem.webp",
    imageAlt: "텍사스 홀덤 포커 테이블 — 커뮤니티 카드와 칩",
    paragraphs: [
      "'포커계의 캐딜락'이라고도 불리는 텍사스 홀덤은 여러분이 가장 많이 접하게 될 포커 형식입니다. 온라인에서 가장 인기 있는 포커 게임이며, 홈 게임에서 친구들과 함께 플레이할 가능성도 가장 높은 게임입니다.",
      "토너먼트 형식으로 플레이하든 링 게임 형식으로 플레이하든 기본적인 포커 규칙과 포커 핸드 순위는 변하지 않습니다. 대부분의 사람들이 '포커 하는 법을 알고 싶다'고 말할 때는 텍사스 홀덤의 기본을 배우고 싶다는 뜻입니다.",
    ],
    tip: {
      title: "홀덤마스터 입문 팁",
      content: "처음엔 9~10명 풀 링 테이블보다 6명 이하의 쇼트핸드 테이블이 훨씬 배우기 좋습니다. 핸드 수가 많아 경험을 빠르게 쌓을 수 있고, 포지션의 중요성을 더 직관적으로 체감할 수 있습니다.",
    },
    warning: "텍사스 홀덤을 처음 배울 때 가장 흔한 실수는 '어떤 패든 플레이해 보자'는 태도입니다. 프리플랍 핸드 셀렉션이 승패의 40% 이상을 결정합니다.",
  },
  {
    id: "omaha",
    title: "오마하 포커 게임 방법",
    game: "오마하 포커",
    players: "2~10명",
    href: "/rules/omaha",
    linkText: "오마하 포커 규칙 전체 보기",
    badge: "두 번째로 인기",
    image: "/images/rules-omaha.webp",
    imageAlt: "오마하 포커 4장의 홀 카드",
    paragraphs: [
      "두 번째로 인기 있는 포커 변형 게임입니다. 오마하 포커는 텍사스 홀덤에서 유래했지만, 두 게임의 규칙은 약간 다릅니다. 홀 카드가 2장이 아닌 4장이며, 반드시 그 중 정확히 2장을 사용해야 합니다.",
      "많은 플레이어는 텍사스 홀덤의 기본을 숙달한 후 오마하 포커를 배우는 것이 자연스러운 다음 단계라고 생각합니다. 홀덤을 완전히 이해했다면 오마하로의 전환이 훨씬 쉬워집니다.",
    ],
    tip: {
      title: "홀덤마스터 오마하 입문 팁",
      content: "오마하는 홀덤보다 평균 핸드 강도가 훨씬 높습니다. 홀덤에서 강한 패라도 오마하에서는 중간 수준에 불과할 수 있습니다. '내 4장 중 2장만 쓴다'는 규칙을 항상 머릿속에 새기세요.",
    },
    warning: "오마하 초보자의 가장 큰 실수: 홀 카드 4장 중 아무 조합으로나 패를 만들 수 있다고 착각하는 것입니다. 반드시 홀 카드에서 정확히 2장, 보드에서 3장을 사용해야 합니다.",
  },
  {
    id: "seven-card-stud",
    title: "세븐 카드 스터드 게임 방법",
    game: "세븐 카드 스터드",
    players: "2~8명",
    href: "/rules/seven-card-stud",
    linkText: "세븐 카드 스터드 규칙 전체 보기",
    badge: "클래식",
    image: "/images/rules-seven-card-stud.webp",
    imageAlt: "세븐 카드 스터드 포커 — 업카드와 다운카드 배치",
    paragraphs: [
      "텍사스 홀덤이 최고로 자리잡기 전에는 포커의 기본 규칙과 플레이 방법을 배우려면 세븐 카드 스터드 게임을 거쳐야 했습니다. 커뮤니티 카드(플랍·턴·리버)가 없는 고전적인 포커 형식입니다.",
      "각 플레이어는 7장의 카드를 받으며, 그중 4장은 공개(업카드)되고 3장은 비공개(다운카드)입니다. HORSE 포커에서 'S'에 해당하는 게임이기도 합니다.",
    ],
    tip: {
      title: "홀덤마스터 스터드 입문 팁",
      content: "세븐 카드 스터드에서 가장 중요한 기술은 '카드 카운팅'입니다. 상대방의 업카드를 기억해 두면 내 아웃츠(outs)를 정확히 계산할 수 있습니다. 폴드된 카드도 반드시 기억하세요.",
    },
    warning: "스터드에는 공유 커뮤니티 카드가 없습니다. 각 플레이어가 독립적인 카드를 받으므로, 홀덤처럼 플랍 텍스처를 분석하는 방식은 통하지 않습니다.",
  },
];

const OTHER_RULES = [
  "2-7 트리플 드로우 게임 방법",
  "오마하 하이-로우 게임 방법",
  "세븐 카드 스터드 8-오어-베터 플레이 방법",
  "오픈페이스 차이니즈(OFC) 포커 게임 방법",
  "파인애플 오픈페이스 차이니즈(OFC) 포커 게임 방법",
  "식스 플러스 홀덤 포커 플레이 방법",
  "RAZZ 포커 플레이 방법",
];

const ACTIONS = [
  { name: "체크 (Check)", desc: "앞에 베팅이 없을 때 베팅 없이 순서를 넘기는 행동", color: "text-blue-400" },
  { name: "폴드 (Fold)", desc: "다른 사람이 이미 베팅을 했을 때 핸드를 포기하고 기권하는 것", color: "text-red-400" },
  { name: "벳 (Bet)", desc: "테이블에 처음으로 베팅을 시작하는 행동", color: "text-green-400" },
  { name: "레이즈 (Raise)", desc: "상대방의 베팅 금액에 더 많은 칩을 추가해 올리는 것", color: "text-orange-400" },
  { name: "콜 (Call)", desc: "상대방의 베팅 금액과 동일하게 베팅하여 핸드에 남아 계속 플레이하는 것", color: "text-yellow-400" },
];

const BETTING_ROUNDS = [
  { name: "프리플랍", eng: "Pre-flop", desc: "커뮤니티 카드가 공개되기 전 첫 번째 베팅" },
  { name: "플랍", eng: "Flop", desc: "커뮤니티 카드 3장 공개 후 베팅" },
  { name: "턴", eng: "Turn", desc: "4번째 커뮤니티 카드 공개 후 베팅" },
  { name: "리버", eng: "River", desc: "마지막 5번째 카드 공개 후 최종 베팅" },
];

const BEGINNER_MISTAKES = [
  {
    mistake: "너무 많은 핸드를 플레이한다",
    fix: "프리플랍 핸드 셀렉션을 엄격히 — 초보자는 상위 20% 핸드만 플레이해도 충분합니다.",
  },
  {
    mistake: "포지션을 무시한다",
    fix: "딜러 버튼에 가까울수록 유리합니다. 레이트 포지션(버튼, 컷오프)에서는 더 넓은 범위로 플레이하세요.",
  },
  {
    mistake: "블러핑에 집착한다",
    fix: "초보자 게임에서 블러핑은 생각보다 효과가 없습니다. 상대가 콜할 이유가 없을 때만 시도하세요.",
  },
  {
    mistake: "팟 오즈를 계산하지 않는다",
    fix: "콜 여부를 결정할 때 항상 팟 오즈와 승률을 비교하세요. 이것만으로도 장기 손실을 크게 줄일 수 있습니다.",
  },
];

export default function Rules() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "포커 규칙 완벽 가이드 — 텍사스 홀덤·오마하·세븐카드 하는법 총정리 [2026]",
      "description": "텍사스 홀덤, 오마하, 세븐 카드 스터드 포커 게임 방법을 초보자도 이해할 수 있도록 완벽하게 정리했습니다. 포커 공통 규칙, 베팅 방식, 핸드 순위까지 한 페이지에서 확인하세요.",
      "author": { "@type": "Organization", "name": "홀덤마스터" },
      "publisher": { "@type": "Organization", "name": "홀덤마스터", "url": "https://holdemmaster.com" },
      "dateModified": "2026-03-24",
      "keywords": "포커 규칙, 텍사스 홀덤 규칙, 오마하 포커, 세븐 카드 스터드, 포커 하는법, 포커 초보, 포커 베팅, 포커 핸드 순위",
      "image": "https://holdemmaster.com/images/rules-texas-holdem.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://holdemmaster.com/" },
        { "@type": "ListItem", "position": 2, "name": "게임 방법", "item": "https://holdemmaster.com/rules" },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="⚡ 포커 규칙 완벽 가이드 — 텍사스 홀덤·오마하·세븐카드 하는법 총정리 [2026]"
        description="⚡포커 규칙⚡ 텍사스 홀덤, 오마하, 세븐 카드 스터드를 초보자도 이해할 수 있게 정리했습니다. 공통 규칙·베팅·핸드 순위까지 한 페이지에서 완성하세요."
        keywords="포커 규칙, 텍사스 홀덤 규칙, 오마하 포커 규칙, 세븐 카드 스터드, 포커 하는법, 포커 초보, 포커 베팅 방법, 포커 핸드 순위"
        path="/rules"
        schema={jsonLd}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary transition-colors">홈</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">게임 방법</span>
        </nav>

        {/* Hero */}
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
            포커 규칙 완벽 가이드
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-b border-border pb-4">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />최종 업데이트: 2026년 3월 24일</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />7분 읽기</span>
          </div>
        </motion.div>

        {/* 3 Main Game Tiles */}
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {GAME_TILES.map((tile) => (
            <Link key={tile.id} href={tile.href}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${tile.bg} border border-white/10 p-6 flex flex-col justify-between min-h-[240px] group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer`}>
              <div>
                <div className="text-xs font-bold tracking-widest text-white/40 mb-3 uppercase">{tile.label}</div>
                <h2 className="text-xl font-serif font-bold text-white mb-3 leading-snug">{tile.title}</h2>
                <p className="text-sm text-white/65 leading-relaxed">{tile.desc}</p>
              </div>
              <div className="mt-5">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary border border-primary/50 rounded-full px-4 py-1.5 group-hover:bg-primary group-hover:text-black transition-all duration-200">
                  {tile.cta} <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* === 포커 게임 방법을 배우세요 === */}
        <motion.div initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-5">포커 게임 방법을 배우세요</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              포커를 배우는 것은 어렵지 않습니다. 포커 규칙과 기본 사항을 다룬 이 초보자 가이드만 있으면 충분합니다.
            </p>
            <p>
              포커는 배우기 쉬운 게임이지만, 완전 초보자에게 처음 접하는 규칙은 낯설게 느껴질 수 있습니다. 하지만 그렇다고 낙담하지 마세요. 게임의 기초부터 시작해서 금세 온라인 포커 테이블로 옮겨갈 수 있습니다.
            </p>
            <p>이 가이드에서는 포커 게임 방법을 모두 알려드립니다.</p>
            <ul className="space-y-2 ml-2">
              {[
                "텍사스 홀덤의 기본 규칙",
                "오마하 포커의 기본 규칙",
                "세븐 카드 스터드의 기본 규칙",
                "모든 포커 게임에 공통으로 적용되는 핵심 규칙",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5 font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              대부분의 사람들이 "포커 게임 방법을 알고 싶다"고 말할 때는 <strong className="text-foreground">텍사스 홀덤</strong>의 기본을 배우고 싶다는 뜻입니다. 텍사스 홀덤은 단연코 가장 인기 있는 포커 게임이며, 모든 온라인 포커 사이트에서 찾아볼 수 있는 게임입니다.
            </p>
            <p>
              포커 규칙은 게임마다 대부분 동일하지만, 텍사스 홀덤·오마하·세븐 카드 스터드 같은 변형 게임 중에는 알아두어야 할 몇 가지 중요한 차이점이 있습니다. 온라인에서 가장 많이 플레이되는 포커 게임들의 규칙을 아래에서 살펴보겠습니다.
            </p>
          </div>
        </motion.div>

        {/* === 게임별 상세 섹션 (이미지 + 팁 + 경고 추가) === */}
        <div className="space-y-12 mb-14">
          {GAME_SECTIONS.map((section, idx) => (
            <motion.div key={section.id}
              initial={false} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
              className="bg-card border border-border rounded-2xl overflow-hidden">

              {/* 게임 이미지 */}
              <div className="relative w-full aspect-video overflow-hidden bg-muted/20">
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "high" : "auto"}
                  decoding="async"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-bold tracking-widest text-white/70 uppercase">{section.game}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold bg-primary/90 text-black rounded-full px-3 py-1">{section.badge}</span>
                </div>
              </div>

              {/* 섹션 헤더 */}
              <div className="border-b border-border px-6 py-5">
                <h2 className="text-xl font-serif font-bold text-foreground">{section.title}</h2>
              </div>

              <div className="px-6 pt-5 pb-6 space-y-5">
                {/* 게임 정보 표 */}
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-4 py-2.5 text-muted-foreground font-medium bg-muted/30 w-40">게임</td>
                      <td className="px-4 py-2.5 text-foreground font-semibold">{section.game}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-2.5 text-muted-foreground font-medium bg-muted/30">플레이어 수</td>
                      <td className="px-4 py-2.5 text-foreground">{section.players}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-muted-foreground font-medium bg-muted/30">포커 규칙</td>
                      <td className="px-4 py-2.5">
                        <Link href={section.href} className="text-primary hover:underline font-medium">
                          {section.game} 플레이 방법 →
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* 본문 */}
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                  {section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>

                {/* 홀덤마스터 추천 팁 */}
                <div className="flex gap-3 bg-primary/5 border border-primary/20 rounded-xl px-4 py-4">
                  <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-primary mb-1">{section.tip.title}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{section.tip.content}</p>
                  </div>
                </div>

                {/* 초보자 주의사항 */}
                <div className="flex gap-3 bg-red-500/5 border border-red-500/20 rounded-xl px-4 py-4">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">{section.warning}</p>
                </div>

                {/* CTA 버튼 */}
                <div>
                  <Link href={section.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold bg-primary text-black rounded-full px-5 py-2 hover:bg-primary/90 transition-colors">
                    {section.linkText} <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === 초보자가 가장 많이 하는 실수 (홀덤마스터 독자 콘텐츠) === */}
        <motion.div initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">초보자가 가장 많이 하는 실수 4가지</h2>
          <p className="text-sm text-muted-foreground mb-6">포커를 처음 배울 때 누구나 겪는 실수들입니다. 미리 알아두면 수업료를 아낄 수 있습니다.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BEGINNER_MISTAKES.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                  <div className="text-sm font-semibold text-foreground leading-snug">{item.mistake}</div>
                </div>
                <div className="flex gap-2 ml-9">
                  <span className="text-primary font-bold text-xs shrink-0">→ 해결책</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* === 다른 포커 규칙들 === */}
        <motion.div initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mb-14 bg-card border border-border rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-serif font-bold text-foreground mb-2">포커에서 알아두면 좋은 다른 규칙들</h2>
          <p className="text-sm text-muted-foreground mb-5">텍사스 홀덤을 마스터했다면, 아래 변형 게임들도 도전해보세요.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {OTHER_RULES.map((rule) => (
              <li key={rule} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                {rule}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* === 대부분의 포커 규칙의 공통적인 특징 === */}
        <motion.div initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8">대부분의 포커 규칙의 공통적인 특징</h2>

          {/* 포커 패의 가치 */}
          <div className="mb-10">
            <h3 className="text-lg font-serif font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs flex items-center justify-center font-bold">1</span>
              포커 패의 가치 (핸드 랭킹)
            </h3>
            <div className="bg-card border border-border rounded-xl p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                대부분의 포커 변형 게임에서 사용되는 요소 중 하나는 <strong className="text-foreground">핸드 랭킹 시스템</strong>입니다. 가장 높은 순위의 패는 <strong className="text-foreground">로열 플러시</strong>(같은 무늬의 카드 5장, A부터 10까지)이며, 그 다음은 <strong className="text-foreground">스트레이트 플러시</strong>입니다.
              </p>
              <p>
                그 다음으로 <strong className="text-foreground">포카드 → 풀하우스 → 플러시 → 스트레이트 → 트리플 → 투페어 → 원페어 → 하이카드</strong> 순서입니다. 게임이 쇼다운 단계에 이르면 가장 높은 랭크의 패를 가진 플레이어가 팟을 가져갑니다.
              </p>
              <p className="text-xs text-muted-foreground/70 border-t border-border pt-3">
                ※ 단, 라즈나 듀스 투 세븐 같은 '로우볼' 게임에서는 패 순위가 완전히 뒤집혀 전통적으로 '가장 나쁜' 패가 승리합니다.
              </p>
            </div>
            <div className="mt-3 text-right">
              <Link href="/hands" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                족보 순위 전체 보기 <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* 블라인드와 앤티 */}
          <div className="mb-10">
            <h3 className="text-lg font-serif font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs flex items-center justify-center font-bold">2</span>
              블라인드와 앤티 베팅
            </h3>
            <div className="bg-card border border-border rounded-xl p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                홀덤이나 오마하 같은 게임에는 <strong className="text-foreground">스몰 블라인드</strong>와 <strong className="text-foreground">빅 블라인드</strong>라는 개념이 있습니다. 카드를 받기 전에 강제로 내야 하는 베팅이기 때문에 '블라인드'라고 부릅니다.
              </p>
              <p>
                반면 세븐 카드 스터드 같은 스터드 게임에서는 <strong className="text-foreground">앤티(Ante)</strong>라는 것이 있습니다. 모든 플레이어가 게임 시작 전에 소액의 칩을 가운데에 놓는 방식입니다. 그 후 플레이어들은 게임이 진행됨에 따라 더 많은 금액을 베팅하여 더 큰 팟을 만들어냅니다.
              </p>
            </div>
          </div>

          {/* 리밋 vs 노리밋 */}
          <div className="mb-10">
            <h3 className="text-lg font-serif font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs flex items-center justify-center font-bold">3</span>
              리밋 포커 게임 vs. 노 리밋 포커 게임
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "노 리밋 (No-Limit)", desc: "플레이어가 언제든지 원하는 만큼 베팅할 수 있으며, '올인'까지 가능합니다. 텍사스 홀덤에서 가장 일반적입니다.", color: "border-green-500/30 bg-green-500/5" },
                { name: "팟 리밋 (Pot-Limit)", desc: "현재 팟의 크기가 플레이어가 베팅할 수 있는 최대 금액을 결정합니다. 오마하 포커에서 주로 사용됩니다.", color: "border-yellow-500/30 bg-yellow-500/5" },
                { name: "고정 리밋 (Fixed-Limit)", desc: "베팅과 레이즈 금액이 미리 정해진 고정액으로 제한됩니다. 세븐 카드 스터드에서 일반적입니다.", color: "border-blue-500/30 bg-blue-500/5" },
              ].map((item) => (
                <div key={item.name} className={`border ${item.color} rounded-xl p-4`}>
                  <div className="font-bold text-foreground text-sm mb-2">{item.name}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 액션 */}
          <div className="mb-10">
            <h3 className="text-lg font-serif font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs flex items-center justify-center font-bold">4</span>
              액션 (베팅 행동)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">포커 게임 전반에 걸쳐 사용되는 행동(액션) 용어들입니다. 모든 포커 변형 게임에서 공통으로 사용됩니다.</p>
            <div className="space-y-2">
              {ACTIONS.map((action) => (
                <div key={action.name} className="flex items-start gap-3 bg-card border border-border rounded-lg px-4 py-3">
                  <span className={`font-bold text-sm ${action.color} shrink-0 w-32`}>{action.name}</span>
                  <span className="text-sm text-muted-foreground">{action.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 베팅 라운드 */}
          <div className="mb-10">
            <h3 className="text-lg font-serif font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs flex items-center justify-center font-bold">5</span>
              베팅 라운드
            </h3>
            <p className="text-sm text-muted-foreground mb-4">홀덤이나 오마하처럼 커뮤니티 카드를 사용하는 게임(플랍 게임)에서 베팅 라운드는 다음과 같이 구성됩니다.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              {BETTING_ROUNDS.map((round, i) => (
                <div key={round.name} className="flex-1 bg-card border border-border rounded-xl p-4">
                  <div className="text-xs font-bold text-primary/60 mb-1">{i + 1}번째</div>
                  <div className="font-bold text-foreground text-sm">{round.name}</div>
                  <div className="text-xs text-muted-foreground/60 mb-1">{round.eng}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{round.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 text-right">
              <Link href="/rules/texas-holdem" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                텍사스 홀덤 진행 순서 전체 보기 <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* 테이블 스테이크 */}
          <div className="mb-2">
            <h3 className="text-lg font-serif font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs flex items-center justify-center font-bold">6</span>
              테이블 스테이크 (Table Stakes)
            </h3>
            <div className="bg-card border border-border rounded-xl p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                라이브 포커든 온라인 포커든, 거의 모든 포커 변형 게임에 공통으로 적용되는 또 다른 포커 규칙은 <strong className="text-foreground">테이블 스테이크</strong>입니다.
              </p>
              <p>
                테이블 스테이크란, 게임이 시작되면 처음에 테이블에 올려놓은 금액 이상은 베팅할 수 없고, 게임이 진행되는 동안 추가로 돈을 꺼낼 수 없다는 규칙입니다. 처음 가지고 있던 칩으로만 게임을 끝까지 진행해야 합니다.
              </p>
              <div className="flex items-start gap-2 bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 mt-1">
                <span className="text-primary font-bold shrink-0">💡</span>
                <span className="text-xs">게임 시작 시 테이블에 100,000원이 있다면, 게임 도중 지갑에서 돈을 꺼내 추가하는 것은 불가능합니다.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === CTA === */}
        <motion.div initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3">지금 바로 포커를 시작해보세요</h2>
          <p className="text-muted-foreground mb-6">텍사스 홀덤부터 차근차근 — 가장 인기 있는 포커 게임의 상세 규칙을 확인하세요.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/rules/texas-holdem"
              className="inline-flex items-center gap-1.5 bg-primary text-black font-semibold rounded-full px-6 py-2.5 hover:bg-primary/90 transition-colors">
              텍사스 홀덤 시작하기 <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/hands"
              className="inline-flex items-center gap-1.5 border border-border text-foreground font-semibold rounded-full px-6 py-2.5 hover:border-primary/50 transition-colors">
              족보 순위 보기
            </Link>
            <Link href="/strategy"
              className="inline-flex items-center gap-1.5 border border-border text-foreground font-semibold rounded-full px-6 py-2.5 hover:border-primary/50 transition-colors">
              전략 가이드
            </Link>
          </div>
        </motion.div>

      </div>
    </>
  );
}
