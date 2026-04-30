"use client";

import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Calendar, ChevronRight } from "lucide-react";
import { useState } from "react";
import OmahaTableDiagram from "@/components/OmahaTableDiagram";
import { TableOfContents } from "@/components/table-of-contents";

const OMAHA_STAGES = [
  {
    id: "blinds", step: "STEP 1", title: "블라인드 (Blinds)",
    description: "텍사스 홀덤과 동일하게 스몰 블라인드와 빅 블라인드로 시작합니다.",
    details: [
      "딜러 버튼 왼쪽 두 플레이어가 강제 베팅(블라인드)을 넣습니다",
      "오마하 하이는 주로 팟 리밋(PLO) 방식으로 진행됩니다",
      "최대 베팅액은 현재 팟 크기로 제한됩니다 (팟 리밋)",
    ],
    diagramStage: "blinds" as const,
  },
  {
    id: "preflop", step: "STEP 2", title: "프리플랍 — 홀 카드 4장 배분!",
    description: "오마하에서 각 플레이어는 홀 카드 4장을 받습니다. 홀덤의 2장과 다릅니다.",
    details: [
      "홀덤: 홀 카드 2장 → 오마하: 홀 카드 4장",
      "더 많은 카드 = 더 강한 패 조합 가능 = 훨씬 많은 액션",
      "4장 중 반드시 정확히 2장만 사용해야 합니다 (오마하의 핵심 규칙!)",
      "BB 기준 왼쪽(UTG)부터 순서대로 콜·레이즈·폴드 선택",
    ],
    diagramStage: "preflop" as const,
  },
  {
    id: "flop", step: "STEP 3", title: "플랍 (The Flop) — 커뮤니티 카드 3장",
    description: "테이블 중앙에 공용 카드 3장이 공개됩니다. 딜러 왼쪽 플레이어부터 베팅.",
    details: [
      "플랍부터 체크(Check) 옵션 등장 — 앞에 베팅 없으면 패스 가능",
      "홀 카드 4장 + 커뮤니티 3장 = 7장으로 가능한 조합 파악 시작",
      "오마하는 드로우(미완성 패)가 매우 강하게 나오는 구간",
      "딜러 왼쪽 생존 플레이어부터 시계 방향으로 행동",
    ],
    diagramStage: "flop" as const,
  },
  {
    id: "turn", step: "STEP 4", title: "턴 (The Turn) — 커뮤니티 카드 4장",
    description: "네 번째 공용 카드가 추가됩니다. 팟이 점점 커지는 구간.",
    details: [
      "홀 카드 4장 중 2장 + 커뮤니티 4장 중 3장으로 최선의 조합 계속 탐색",
      "팟 리밋이라 턴부터 베팅 금액이 크게 증가",
      "스트레이트·플러시 드로우 완성 여부 재확인",
    ],
    diagramStage: "turn" as const,
  },
  {
    id: "river", step: "STEP 5", title: "리버 (The River) — 커뮤니티 카드 5장 완성",
    description: "마지막 공용 카드가 공개됩니다. 이 카드로 최종 패가 확정됩니다.",
    details: [
      "홀 카드 4장 + 커뮤니티 카드 5장 중 정확히 2+3 조합으로 최강 패 완성",
      "마지막 베팅 라운드 — 블러핑 또는 밸류벳 결정",
      "2명 이상 남으면 쇼다운으로 이어집니다",
    ],
    diagramStage: "river" as const,
  },
  {
    id: "showdown", step: "STEP 6", title: "쇼다운 — 홀 카드 정확히 2장 + 커뮤니티 3장",
    description: "오마하의 가장 중요한 규칙: 홀 카드 4장 중 정확히 2장 + 커뮤니티 카드 3장으로 5장 조합",
    details: [
      "홀 카드 정확히 2장 + 커뮤니티 카드 정확히 3장 = 5장 (오마하 필수 규칙)",
      "홀덤처럼 커뮤니티 카드만 5장 쓰는 것은 불가능",
      "초보자 실수: '4장 중 가장 좋은 2장 자동 선택' — 직접 2장을 골라야 합니다",
      "같은 커뮤니티 카드를 사용해도 홀 카드에 따라 패가 완전히 달라집니다",
    ],
    diagramStage: "showdown" as const,
  },
];

const PLO_TIPS = [
  { title: "연결된 카드가 강하다", desc: "오마하에서는 서로 연결된 4장(예: 8-9-10-J)이 스트레이트 드로우를 만들기 쉬워 매우 강합니다.", icon: "🔗" },
  { title: "같은 무늬 더블 수티드", desc: "4장 중 2가지 무늬가 각각 2장씩 들어있는 '더블 수티드'는 플러시 드로우 2개로 강력합니다.", icon: "♠♥" },
  { title: "팟 리밋 베팅 이해", desc: "PLO에서 레이즈 최대액은 현재 팟 크기입니다. '팟'을 외치면 딜러가 최대 레이즈액을 계산해줍니다.", icon: "💰" },
  { title: "너트 핸드 집착하기", desc: "오마하에서는 최강 핸드(너트)가 자주 나옵니다. 두 번째로 강한 핸드로는 큰 팟을 이기기 어렵습니다.", icon: "🎯" },
];

const FAQ_ITEMS = [
  { q: "오마하와 텍사스 홀덤의 가장 큰 차이점은?", a: "홀 카드 수가 다릅니다. 홀덤은 2장, 오마하는 4장입니다. 또한 오마하는 홀 카드 중 반드시 정확히 2장을 사용해야 합니다. 이 규칙 때문에 패 조합이 훨씬 복잡해집니다." },
  { q: "오마하에서 홀 카드 4장 중 원하는 만큼 쓸 수 있나요?", a: "아닙니다. 오마하의 핵심 규칙은 홀 카드 정확히 2장 + 커뮤니티 카드 정확히 3장으로 5장을 만들어야 한다는 것입니다. 1장만 쓰거나, 3장을 쓰거나, 커뮤니티 카드만 5장 쓰는 것은 모두 불가능합니다." },
  { q: "팟 리밋(PLO)에서 최대 베팅액은 어떻게 계산하나요?", a: "레이즈 최대액 = 현재 팟 크기 + 상대의 베팅 + 내가 콜해야 할 금액입니다. 예를 들어 팟이 10만원이고 상대가 5만원을 베팅했다면, 최대 레이즈는 25만원(10+5+10)입니다." },
  { q: "오마하 하이로(Hi-Lo)란 무엇인가요?", a: "오마하 8 또는 베터라고도 합니다. 한 판에서 가장 강한 패(하이)와 가장 약한 패(로우)가 팟을 나눕니다. 로우 핸드는 8 이하 서로 다른 숫자 5장으로 만들어야 합니다." },
  { q: "오마하가 홀덤보다 어려운가요?", a: "더 복잡합니다. 홀 카드 4장의 조합이 훨씬 많고, 너트 핸드가 자주 등장해 두 번째 강한 패로 큰 팟을 잃는 일이 많습니다. 홀덤을 충분히 익힌 후 오마하로 넘어오길 권장합니다." },
  { q: "오마하에서 블러핑이 효과적인가요?", a: "홀덤보다 블러핑이 어렵습니다. 오마하는 드로우가 많아 많은 플레이어가 끝까지 콜하는 경향이 있습니다. 더 강한 메이드 핸드를 중심으로 전략을 짜는 것이 좋습니다." },
];

export default function Omaha() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "오마하 포커 규칙 완벽 가이드 — PLO 홀 카드 4장 사용법",
      "description": "오마하 포커 기초 규칙을 초보자도 이해할 수 있게 정리했습니다. 홀 카드 4장 규칙, 팟 리밋 베팅, 텍사스 홀덤과의 차이점까지 한 페이지에서 완성.",
      "author": { "@type": "Organization", "name": "홀덤마스터" },
      "publisher": { "@type": "Organization", "name": "홀덤마스터", "url": "https://holdemmaster.com" },
      "dateModified": "2026-03-24",
      "keywords": "오마하 포커, 오마하 규칙, PLO, 팟 리밋 오마하, 오마하 하이로, 포커 규칙",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_ITEMS.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://holdemmaster.com/" },
        { "@type": "ListItem", "position": 2, "name": "게임 방법", "item": "https://holdemmaster.com/rules" },
        { "@type": "ListItem", "position": 3, "name": "오마하 포커 규칙", "item": "https://holdemmaster.com/rules/omaha" },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="오마하 포커 규칙 완벽 가이드 — PLO 홀 카드 4장, 팟 리밋 완전 정리"
        description="⚡오마하 포커⚡ 기초 규칙 완벽 가이드. 홀 카드 4장 사용법, 팟 리밋 베팅 방식, 텍사스 홀덤과의 차이점, PLO 핵심 전략 팁까지 한 페이지에서 마스터하세요."
        keywords="오마하 포커 규칙, PLO, 팟 리밋 오마하, 오마하 하이로, 오마하 홀 카드 4장, 오마하 하는법"
        path="/rules/omaha"
        schema={jsonLd}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link href="/"><span className="hover:text-primary transition-colors cursor-pointer">홈</span></Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/rules"><span className="hover:text-primary transition-colors cursor-pointer">게임 방법</span></Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">오마하 포커</span>
        </nav>

        {/* Hero */}
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
            오마하 포커 규칙 완벽 가이드
          </h1>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            오마하는 텍사스 홀덤 다음으로 세계에서 가장 인기 있는 포커 게임입니다.
            홀 카드 4장, 팟 리밋 베팅 — <strong className="text-foreground">핵심 차이점만 이해하면 바로 플레이할 수 있습니다.</strong>
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-b border-border pb-4">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />최종 업데이트: 2026년 3월 24일</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />읽기 시간: 약 10분</span>
          </div>
        </motion.div>

        {/* TOC */}
        <TableOfContents sections={[
          { id: "game-flow", title: "오마하 게임 진행 순서" },
          { id: "strategy",  title: "오마하 초보자 핵심 전략" },
          { id: "faq",       title: "자주 묻는 질문" },
        ]} />

        {/* Key Difference Banner */}
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mb-10 bg-gradient-to-br from-[#1a1a0d] via-[#3a3a10] to-[#1a1a0d] border border-yellow-500/30 rounded-2xl p-6 md:p-8">
          <div className="text-xs font-bold tracking-widest text-yellow-400/60 mb-2 uppercase">핵심 차이점</div>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">홀덤 vs 오마하 한눈에 비교</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "텍사스 홀덤", items: ["홀 카드 2장", "홀 카드 0~2장 자유롭게 사용", "노 리밋 방식이 일반적", "상대적으로 낮은 핸드가 이기는 경우 많음"] },
              { label: "오마하 (PLO)", items: ["홀 카드 4장", "반드시 홀 카드 2장 + 커뮤니티 3장", "팟 리밋 방식이 일반적", "너트 핸드(최강패)가 자주 등장"] },
            ].map((col) => (
              <div key={col.label} className="bg-white/5 rounded-xl p-4">
                <div className="text-sm font-bold text-yellow-400 mb-3">{col.label}</div>
                <ul className="space-y-2">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-sm text-white/70 flex items-start gap-2">
                      <span className="text-yellow-400/60 mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Game Flow */}
        <section id="game-flow" className="mb-16 scroll-mt-24">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/15 border border-primary/30 rounded-full text-xs font-bold text-primary tracking-wider">PART 1</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Game Flow</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">오마하 게임 진행 순서</h2>
            <p className="text-muted-foreground">기본 구조는 텍사스 홀덤과 동일합니다. 차이점만 집중해서 익히세요.</p>
          </motion.div>

          <div className="relative border-l-2 border-primary/30 ml-3 md:ml-6 space-y-10">
            {OMAHA_STAGES.map((stage, index) => (
              <motion.div key={stage.id} id={stage.id}
                initial={false} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative pl-8 md:pl-12 scroll-mt-24">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.6)] border-2 border-background" />
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-colors">
                  <OmahaTableDiagram stage={stage.diagramStage} />
                  <div className="p-5 md:p-7">
                    <div className="text-xs font-bold text-primary/60 tracking-widest mb-1">{stage.step}</div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">{stage.title}</h3>
                    <p className="text-primary/90 font-medium text-sm mb-4">{stage.description}</p>
                    <ul className="space-y-2.5">
                      {stage.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-muted-foreground text-sm">
                          <span className="text-primary mr-2 mt-0.5 shrink-0">•</span><span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PLO Tips */}
        <section id="strategy" className="mb-16 scroll-mt-24">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/15 border border-primary/30 rounded-full text-xs font-bold text-primary tracking-wider">PART 2</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Strategy Tips</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">오마하 초보자 핵심 전략</h2>
            <p className="text-muted-foreground">홀덤과 다른 오마하만의 전략 포인트를 정리했습니다.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PLO_TIPS.map((tip, i) => (
              <motion.div key={tip.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                <div className="text-2xl mb-3">{tip.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/15 border border-primary/30 rounded-full text-xs font-bold text-primary tracking-wider">PART 3</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">자주 묻는 질문</h2>
          </motion.div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <motion.div key={i} initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="bg-card border border-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-primary/5 transition-colors">
                  <span className="font-semibold text-foreground pr-4">{item.q}</span>
                  <ChevronRight className={`w-4 h-4 text-primary shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-90" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">{item.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3">다른 포커 게임도 배워보세요</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/rules/texas-holdem" className="inline-flex items-center gap-1.5 bg-primary text-black font-semibold rounded-full px-6 py-2.5 hover:bg-primary/90 transition-colors">
              텍사스 홀덤 규칙 <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/rules/seven-card-stud" className="inline-flex items-center gap-1.5 border border-border text-foreground font-semibold rounded-full px-6 py-2.5 hover:border-primary/50 transition-colors">
              세븐 카드 스터드 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </>
  );
}
