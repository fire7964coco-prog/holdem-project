"use client";

import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Calendar, ChevronRight } from "lucide-react";
import { useState } from "react";
import SevenCardStudDiagram from "@/components/SevenCardStudDiagram";
import { TableOfContents } from "@/components/table-of-contents";

type StudStage = "ante"|"third-street"|"fourth-street"|"fifth-street"|"sixth-street"|"seventh-street";

const STUD_STAGES: { id: StudStage; step: string; title: string; description: string; details: string[] }[] = [
  {
    id: "ante", step: "STEP 1", title: "앤티 & 브링인 (Ante & Bring-in)",
    description: "세븐 카드 스터드는 블라인드가 없습니다. 대신 앤티와 브링인으로 시작합니다.",
    details: [
      "앤티(Ante): 모든 플레이어가 소액의 강제 베팅을 냅니다",
      "카드 배분 후 가장 낮은 업카드를 가진 플레이어가 브링인(강제 소액 베팅)을 냅니다",
      "같은 숫자면 수트 순서로 결정: 스페이드 > 하트 > 다이아몬드 > 클럽 (가장 낮음)",
      "딜러 버튼이 없어 포지션 개념이 홀덤과 다릅니다",
    ],
  },
  {
    id: "third-street", step: "STEP 2", title: "서드 스트리트 (3rd Street) — 카드 3장",
    description: "각 플레이어에게 다운카드 2장 + 업카드 1장이 배분됩니다. 첫 번째 베팅 라운드.",
    details: [
      "다운카드(홀 카드) 2장: 본인만 볼 수 있는 카드",
      "업카드 1장: 테이블에 공개되는 카드",
      "브링인 플레이어 이후 시계 방향으로 베팅 진행",
      "완성된 패가 없어 현재 업카드와 홀 카드로 가능성을 판단해야 합니다",
    ],
  },
  {
    id: "fourth-street", step: "STEP 3", title: "포스 스트리트 (4th Street) — 카드 4장",
    description: "각 플레이어에게 업카드 1장이 추가됩니다. 오픈 페어가 있으면 더블 베팅 가능.",
    details: [
      "현재 카드: 다운카드 2장 + 업카드 2장 = 4장",
      "가장 강한 업카드 조합을 가진 플레이어부터 액션 시작",
      "오픈 페어(공개된 두 업카드가 같은 숫자)가 있으면 더블 사이즈 베팅 옵션 추가",
      "두 번째 베팅 라운드",
    ],
  },
  {
    id: "fifth-street", step: "STEP 4", title: "피프스 스트리트 (5th Street) — 카드 5장",
    description: "세 번째 업카드가 추가됩니다. 이 시점부터 베팅 사이즈가 두 배로 올라갑니다.",
    details: [
      "현재 카드: 다운카드 2장 + 업카드 3장 = 5장",
      "피프스 스트리트부터 빅 벳 사이즈(스몰 벳의 2배) 사용",
      "이 단계에서 드로우 완성 여부와 상대 업카드 분석이 중요",
      "세 번째 베팅 라운드",
    ],
  },
  {
    id: "sixth-street", step: "STEP 5", title: "식스 스트리트 (6th Street) — 카드 6장",
    description: "네 번째 업카드가 추가됩니다. 6장 중 5장으로 현재 최선의 패를 파악합니다.",
    details: [
      "현재 카드: 다운카드 2장 + 업카드 4장 = 6장",
      "상대의 4장 업카드가 전부 공개되어 있어 패 분석이 용이",
      "빅 벳 사이즈 계속 적용",
      "네 번째 베팅 라운드",
    ],
  },
  {
    id: "seventh-street", step: "STEP 6", title: "세븐스 스트리트 (7th Street) — 카드 7장",
    description: "마지막 카드 1장이 다운카드(비공개)로 배분됩니다. 최종 7장 중 최강 5장 결정.",
    details: [
      "마지막 카드는 다운카드로 배분 — 비공개",
      "칩이 부족해 모든 플레이어에게 배분이 어려울 경우 1장을 공개 카드로 대체",
      "다섯 번째이자 마지막 베팅 라운드",
      "쇼다운: 7장 중 최강 5장 조합으로 승자 결정",
    ],
  },
];

const STUD_TIPS = [
  { title: "업카드 기억하기", desc: "폴드된 카드를 기억해야 합니다. 내가 원하는 카드가 이미 폴드됐으면 드로우 가능성이 낮아집니다.", icon: "🧠" },
  { title: "라이브 카드 선호", desc: "아직 폴드되지 않아 덱에 남아있을 가능성이 높은 카드가 '라이브 카드'입니다. 라이브 카드가 많을수록 드로우 확률이 높습니다.", icon: "♠" },
  { title: "강한 시작 카드 선택", desc: "서드 스트리트에서 트리플, 같은 무늬 3장, 또는 연결된 하이 카드로 시작하는 것이 유리합니다.", icon: "🎯" },
  { title: "앤티 도둑질", desc: "다른 플레이어의 업카드가 약할 때, 강한 업카드로 공격적으로 베팅해 앤티를 쓸어가는 전술이 효과적입니다.", icon: "💰" },
];

const FAQ_ITEMS = [
  { q: "세븐 카드 스터드에서 딜러 버튼이 없는 이유는?", a: "스터드에서는 업카드(공개 카드)로 패 강도를 어느 정도 파악할 수 있기 때문에 별도의 포지션 버튼이 필요 없습니다. 대신 매 라운드마다 가장 강한 업카드를 가진 플레이어가 먼저 액션합니다." },
  { q: "브링인(Bring-in)이란 무엇인가요?", a: "서드 스트리트에서 가장 낮은 업카드를 가진 플레이어가 강제로 내야 하는 소액 베팅입니다. 블라인드 역할과 비슷합니다. 브링인 플레이어는 대신 컴플리트(풀 사이즈 베팅)를 선택할 수도 있습니다." },
  { q: "세븐 카드 스터드는 몇 명이 플레이할 수 있나요?", a: "보통 2~8명이 플레이합니다. 8명이 7장씩 받으면 56장이 필요하지만 덱은 52장이라 7번째 카드가 부족할 수 있습니다. 이 경우 마지막 카드를 1장 공개 카드로 대체합니다." },
  { q: "세븐 카드 스터드가 노 리밋으로 진행되나요?", a: "아닙니다. 스터드는 주로 리밋(고정 베팅) 방식으로 진행됩니다. 피프스 스트리트부터 베팅 사이즈가 두 배로 올라가는 구조입니다. 노 리밋 스터드는 거의 없습니다." },
  { q: "폴드된 카드를 반드시 기억해야 하나요?", a: "필수는 아니지만 강력히 권장됩니다. 내가 원하는 카드가 이미 폴드됐는지 알아야 드로우 가능성을 정확히 계산할 수 있습니다. 이것이 스터드와 홀덤의 가장 큰 기술 차이입니다." },
  { q: "세븐 카드 스터드 족보는 홀덤과 동일한가요?", a: "네, 동일합니다. 로열 플러시 > 스트레이트 플러시 > 포카드 > 풀하우스 > 플러시 > 스트레이트 > 트리플 > 투페어 > 원페어 > 하이카드 순서입니다. 7장 중 최강 5장 조합으로 승자를 결정합니다." },
];

export default function SevenCardStud() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "세븐 카드 스터드 포커 규칙 완벽 가이드",
      "description": "세븐 카드 스터드 포커 기초 규칙을 완벽하게 정리했습니다. 앤티, 브링인, 서드~세븐스 스트리트 5단계 베팅, 업카드 전략까지 한 페이지에서 마스터.",
      "author": { "@type": "Organization", "name": "홀덤마스터" },
      "publisher": { "@type": "Organization", "name": "홀덤마스터", "url": "https://holdemmaster.com" },
      "dateModified": "2026-03-24",
      "keywords": "세븐 카드 스터드, 7카드 스터드, 스터드 포커 규칙, 스터드 하는법, 포커 규칙, 스터드 전략",
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
        { "@type": "ListItem", "position": 3, "name": "세븐 카드 스터드", "item": "https://holdemmaster.com/rules/seven-card-stud" },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="세븐 카드 스터드 포커 규칙 완벽 가이드 — 7장 포커 하는법"
        description="⚡세븐 카드 스터드⚡ 포커 기초 규칙 완벽 가이드. 앤티·브링인부터 서드~세븐스 스트리트 5단계 베팅, 업카드 전략, 라이브 카드 개념까지 한 페이지에서 마스터."
        keywords="세븐 카드 스터드, 7카드 스터드, 스터드 포커 규칙, 스터드 포커 하는법, 스터드 전략, 포커 규칙"
        path="/rules/seven-card-stud"
        schema={jsonLd}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link href="/"><span className="hover:text-primary transition-colors cursor-pointer">홈</span></Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/rules"><span className="hover:text-primary transition-colors cursor-pointer">게임 방법</span></Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">세븐 카드 스터드</span>
        </nav>

        {/* Hero */}
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
            세븐 카드 스터드 포커 규칙 완벽 가이드
          </h1>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            커뮤니티 카드 없이 7장을 직접 받아 플레이하는 클래식 포커.
            <strong className="text-foreground"> 주로 리밋 방식으로 진행되는 고전적인 포커 게임의 원형입니다.</strong>
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-b border-border pb-4">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />최종 업데이트: 2026년 3월 24일</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />읽기 시간: 약 10분</span>
          </div>
        </motion.div>

        {/* TOC */}
        <TableOfContents sections={[
          { id: "game-flow", title: "세븐 카드 스터드 진행 순서" },
          { id: "strategy",  title: "스터드 초보자 핵심 전략" },
          { id: "faq",       title: "자주 묻는 질문" },
        ]} />

        {/* Key Difference Banner */}
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mb-10 bg-gradient-to-br from-[#1a0d0d] via-[#3a1010] to-[#1a0d0d] border border-red-500/30 rounded-2xl p-6 md:p-8">
          <div className="text-xs font-bold tracking-widest text-red-400/60 mb-2 uppercase">7 CARD STUD</div>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">스터드만의 특징</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "커뮤니티 카드 없음", desc: "플랍·턴·리버가 없습니다. 각자 7장을 따로 받습니다." },
              { label: "업카드 공개", desc: "7장 중 4장은 공개(업카드), 3장은 비공개(다운카드)." },
              { label: "5단계 베팅", desc: "서드~세븐스 스트리트 5번의 베팅 라운드." },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 rounded-xl p-4">
                <div className="text-sm font-bold text-red-400 mb-2">{item.label}</div>
                <p className="text-sm text-white/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card Distribution Visual */}
        <motion.div initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mb-12 bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-serif font-bold text-foreground mb-4">카드 배분 구조</h2>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: "3rd", cards: "↓↓↑", desc: "다운2+업1" },
              { label: "4th", cards: "↓↓↑↑", desc: "다운2+업2" },
              { label: "5th", cards: "↓↓↑↑↑", desc: "다운2+업3" },
              { label: "6th", cards: "↓↓↑↑↑↑", desc: "다운2+업4" },
              { label: "7th", cards: "↓↓↓↑↑↑↑", desc: "다운3+업4" },
            ].map((street, i) => (
              <div key={street.label} className="flex flex-col items-center">
                <div className="text-xs font-bold text-primary mb-1">{street.label} Street</div>
                <div className="font-mono text-sm text-foreground bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 mb-1">{street.cards}</div>
                <div className="text-xs text-muted-foreground">{street.desc}</div>
                {i < 4 && <ChevronRight className="w-3 h-3 text-primary/40 rotate-0 hidden sm:block mt-2" />}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">↓ = 다운카드(비공개)&nbsp; ↑ = 업카드(공개)</p>
        </motion.div>

        {/* 초보자 용어 설명표 */}
        <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-16 bg-card border border-primary/30 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xl">📖</span>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground">세븐 카드 스터드 핵심 용어 한눈에 보기</h2>
              <p className="text-xs text-muted-foreground mt-0.5">처음 보는 용어가 있다면 여기서 먼저 확인하세요</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2.5 px-3 text-primary font-bold text-xs tracking-wider w-32">용어</th>
                  <th className="text-left py-2.5 px-3 text-muted-foreground font-medium text-xs tracking-wider">한 줄 설명</th>
                  <th className="text-left py-2.5 px-3 text-muted-foreground font-medium text-xs tracking-wider hidden md:table-cell">홀덤과 비교</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  { term: "앤티 (Ante)", desc: "모든 플레이어가 매 판 시작 전 내는 소액 강제 베팅", compare: "홀덤의 블라인드 역할 — 단, 모두가 냄" },
                  { term: "브링인 (Bring-in)", desc: "도어카드가 가장 낮은 플레이어가 내는 강제 베팅. 첫 베팅 라운드 시작", compare: "홀덤의 빅블라인드와 비슷한 역할" },
                  { term: "컴플리트 (Complete)", desc: "브링인 플레이어가 브링인 대신 풀 사이즈 베팅으로 올리는 것", compare: "홀덤에 없는 스터드 전용 옵션" },
                  { term: "도어카드 (Door Card)", desc: "3번째 배분되는 첫 번째 업카드. 브링인 결정에 사용됨", compare: "홀덤의 커뮤니티 카드와 다름 — 개인 카드" },
                  { term: "업카드 (↑ Up Card)", desc: "테이블에 공개되어 상대도 볼 수 있는 카드", compare: "홀덤의 커뮤니티 카드와 달리 내 카드임" },
                  { term: "다운카드 (↓ Down Card)", desc: "본인만 볼 수 있는 비공개 카드 (홀 카드)", compare: "홀덤의 홀 카드와 동일한 개념" },
                  { term: "스트리트 (Street)", desc: "각 베팅 라운드. 서드→포스→피프스→식스→세븐스 순서", compare: "홀덤의 프리플랍·플랍·턴·리버 대응" },
                  { term: "빅벳 (Big Bet)", desc: "피프스 스트리트부터 적용되는 2배 베팅 단위 ($0.02/$0.04 게임 기준 $0.04)", compare: "리밋 홀덤의 빅벳과 동일" },
                  { term: "라이브 카드", desc: "아직 폴드되지 않아 덱에 남아있을 가능성이 높은 카드", compare: "홀덤에는 없는 스터드 핵심 개념" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background/30" : ""}>
                    <td className="py-2.5 px-3 font-bold text-foreground text-xs whitespace-nowrap">{row.term}</td>
                    <td className="py-2.5 px-3 text-muted-foreground">{row.desc}</td>
                    <td className="py-2.5 px-3 text-muted-foreground/70 text-xs hidden md:table-cell">{row.compare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Game Flow */}
        <section id="game-flow" className="mb-16 scroll-mt-24">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/15 border border-primary/30 rounded-full text-xs font-bold text-primary tracking-wider">PART 1</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Game Flow</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">세븐 카드 스터드 진행 순서</h2>
          </motion.div>

          <div className="relative border-l-2 border-primary/30 ml-3 md:ml-6 space-y-10">
            {STUD_STAGES.map((stage, index) => (
              <motion.div key={stage.id} initial={false} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.6)] border-2 border-background" />
                <div className="bg-card border border-border rounded-xl p-5 md:p-7 hover:border-primary/40 transition-colors">
                  <div className="text-xs font-bold text-primary/60 tracking-widest mb-1">{stage.step}</div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{stage.title}</h3>
                  <p className="text-primary/90 font-medium text-sm mb-4">{stage.description}</p>

                  {/* 인터랙티브 다이어그램 */}
                  <div className="mb-5 rounded-xl overflow-hidden border border-border">
                    <SevenCardStudDiagram stage={stage.id}/>
                  </div>

                  <ul className="space-y-2.5">
                    {stage.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-muted-foreground text-sm">
                        <span className="text-primary mr-2 mt-0.5 shrink-0">•</span><span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section id="strategy" className="mb-16 scroll-mt-24">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/15 border border-primary/30 rounded-full text-xs font-bold text-primary tracking-wider">PART 2</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Strategy</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">스터드 초보자 핵심 전략</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STUD_TIPS.map((tip, i) => (
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
            <Link href="/rules/omaha" className="inline-flex items-center gap-1.5 border border-border text-foreground font-semibold rounded-full px-6 py-2.5 hover:border-primary/50 transition-colors">
              오마하 포커 규칙 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </>
  );
}
