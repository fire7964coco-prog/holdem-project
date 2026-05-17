"use client";

import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Calendar, ChevronRight } from "lucide-react";
import { useState } from "react";
import PokerTableDiagram from "@/components/PokerTableDiagram";
import { TableOfContents } from "@/components/table-of-contents";

const STAGES = [
  {
    id: "blinds", step: "STEP 1", title: "블라인드 (Blinds)",
    description: "게임 시작 전, 딜러 버튼 기준 왼쪽 두 명이 강제로 내야 하는 기본 베팅입니다.",
    details: [
      "스몰 블라인드(SB): 딜러 바로 왼쪽 플레이어 — 기준 베팅의 절반 (예: 1,000원)",
      "빅 블라인드(BB): SB 왼쪽 플레이어 — 기준 베팅 전액 (예: 2,000원)",
      "블라인드는 단순 참가비가 아니라 포지션·전략의 출발점입니다",
      "딜러 버튼은 매 판마다 시계 방향으로 한 자리씩 이동합니다",
    ],
    diagramStage: "blinds" as const,
  },
  {
    id: "preflop", step: "STEP 2", title: "프리플랍 (Pre-flop)",
    description: "모든 플레이어에게 개인 카드(홀 카드) 2장이 배분되고 첫 번째 베팅이 진행됩니다.",
    details: [
      "홀 카드는 자신만 볼 수 있습니다",
      "BB 기준 왼쪽 플레이어(UTG)부터 순서대로 폴드·콜·레이즈 중 선택",
      "프리플랍에서는 체크 불가 — 반드시 콜·레이즈·폴드 중 하나",
      "프리플랍 결정이 이번 판의 방향을 결정합니다",
    ],
    diagramStage: "preflop" as const,
  },
  {
    id: "flop", step: "STEP 3", title: "플랍 (The Flop)",
    description: "테이블 중앙에 공용 카드(커뮤니티 카드) 3장이 동시에 공개됩니다.",
    details: [
      "내 홀 카드 2장 + 공용 카드 3장 = 5장으로 현재 족보 파악 시작",
      "체크(Check) 옵션이 처음 등장 — 앞에 베팅 없으면 베팅 없이 순서 넘기기 가능",
      "현재 강함과 앞으로의 가능성(드로우 핸드)을 함께 읽어야 합니다",
      "딜러 버튼 왼쪽 남은 플레이어부터 순서 시작",
    ],
    diagramStage: "flop" as const,
  },
  {
    id: "turn", step: "STEP 4", title: "턴 (The Turn)",
    description: "네 번째 공용 카드 1장이 추가 공개됩니다. 공용 카드 총 4장.",
    details: [
      "홀 카드 2장 + 공용 카드 4장 = 6장 중 최선의 5장 조합",
      "스트레이트·플러시 드로우 완성 여부 확인",
      "상대의 프리플랍·플랍 액션 패턴을 다시 분석해 핸드 범위 추측",
      "리버까지 계속 갈 가치가 있는지 거의 최종 판단하는 구간",
    ],
    diagramStage: "turn" as const,
  },
  {
    id: "river", step: "STEP 5", title: "리버 (The River)",
    description: "다섯 번째이자 마지막 공용 카드 1장이 공개됩니다. 총 공용 카드 5장 완성.",
    details: [
      "홀 카드 2장 + 공용 카드 5장 = 7장 중 최강 5장 조합으로 최종 족보 확정",
      "더 이상 새로운 정보가 없으므로 이번 판 전체 흐름을 종합해 결정",
      "강한 패라면 적극적으로 벳/레이즈 — 약한 패인데 콜은 대표적인 실수",
      "리버 블러핑은 처음부터 일관된 스토리가 없으면 효과 없음",
    ],
    diagramStage: "river" as const,
  },
  {
    id: "showdown", step: "STEP 6", title: "쇼다운 (Showdown)",
    description: "리버 베팅 후 2명 이상이 남아 있으면 패를 공개해 최강 5장을 비교합니다.",
    details: [
      "개인 카드 2장과 공용 카드 5장 중 가장 강한 5장 조합 자유 선택",
      "홀 카드를 반드시 다 쓸 필요 없음 — 공용 카드만으로 족보 완성 가능",
      "마지막으로 공격적 액션을 취한 플레이어가 먼저 카드 공개",
      "패가 완전히 같으면 팟을 균등 분배 (스플릿)",
    ],
    diagramStage: "showdown" as const,
  },
];

const BETTING_OPTIONS = [
  { name: "폴드 (Fold)", icon: "✗", color: "text-red-400", desc: "이번 판을 포기하고 카드를 버립니다. 추가 손실 없이 이번 판에서 제외됩니다.", when: "핸드가 약하거나 상대 베팅이 감당하기 어려울 때" },
  { name: "체크 (Check)", icon: "✓", color: "text-blue-400", desc: "베팅 없이 다음 플레이어에게 순서를 넘깁니다. 앞에 베팅이 없을 때만 가능합니다.", when: "플랍부터 사용 가능. 프리플랍에서는 불가" },
  { name: "콜 (Call)", icon: "=", color: "text-yellow-400", desc: "앞 플레이어의 베팅 금액과 동일하게 베팅해 핸드를 유지합니다.", when: "팟 오즈가 내 이길 확률보다 유리할 때" },
  { name: "벳 (Bet)", icon: "↑", color: "text-green-400", desc: "처음으로 베팅을 시작합니다. 앞에 베팅이 없을 때만 사용 가능합니다.", when: "강한 패로 팟을 키우거나 상대를 압박할 때" },
  { name: "레이즈 (Raise)", icon: "↑↑", color: "text-orange-400", desc: "앞의 베팅 금액보다 더 높게 올립니다. 상대에게 더 많은 금액을 요구합니다.", when: "강한 패 또는 블러핑으로 상대를 몰아붙일 때" },
  { name: "리레이즈 (3-Bet)", icon: "↑↑↑", color: "text-purple-400", desc: "레이즈에 다시 레이즈합니다. 매우 강한 핸드 신호이거나 공격적 블러핑입니다.", when: "AA·KK 같은 프리미엄 핸드 또는 포지션 우위 블러핑" },
  { name: "올인 (All-in)", icon: "★", color: "text-primary", desc: "보유한 칩 전부를 베팅합니다. 올인 이후엔 추가 베팅 불가, 기존 팟만 경쟁합니다.", when: "너트 핸드(최강 패) 보유 시 또는 결정적 블러핑" },
];

const HANDS = [
  { rank: 1, name: "로열 플러시", korean: "Royal Flush", example: "A♠ K♠ Q♠ J♠ 10♠", desc: "같은 무늬 A·K·Q·J·10", freq: "극히 희귀", color: "text-yellow-400" },
  { rank: 2, name: "스트레이트 플러시", korean: "Straight Flush", example: "5♥ 6♥ 7♥ 8♥ 9♥", desc: "같은 무늬 연속 5장", freq: "매우 희귀", color: "text-yellow-400" },
  { rank: 3, name: "포카드", korean: "Four of a Kind", example: "A♠ A♥ A♦ A♣ K♠", desc: "같은 숫자 4장", freq: "희귀", color: "text-orange-400" },
  { rank: 4, name: "풀하우스", korean: "Full House", example: "K♠ K♥ K♦ A♠ A♥", desc: "트리플 + 원페어", freq: "드문 편", color: "text-orange-400" },
  { rank: 5, name: "플러시", korean: "Flush", example: "A♠ K♠ 8♠ 5♠ 2♠", desc: "같은 무늬 5장 (비연속)", freq: "드문 편", color: "text-blue-400" },
  { rank: 6, name: "스트레이트", korean: "Straight", example: "5♥ 6♠ 7♦ 8♣ 9♥", desc: "다른 무늬 연속 5장", freq: "가끔", color: "text-blue-400" },
  { rank: 7, name: "트리플", korean: "Three of a Kind", example: "Q♠ Q♥ Q♦ 5♠ 7♥", desc: "같은 숫자 3장", freq: "가끔", color: "text-green-400" },
  { rank: 8, name: "투페어", korean: "Two Pair", example: "J♠ J♥ 8♦ 8♣ A♠", desc: "다른 숫자 페어 2쌍", freq: "자주", color: "text-green-400" },
  { rank: 9, name: "원페어", korean: "One Pair", example: "K♠ K♥ 7♦ 4♣ 2♠", desc: "같은 숫자 2장", freq: "매우 자주", color: "text-muted-foreground" },
  { rank: 10, name: "하이카드", korean: "High Card", example: "A♠ Q♥ 8♦ 5♣ 2♠", desc: "아무 조합 없음, 최고 카드로 비교", freq: "매우 자주", color: "text-muted-foreground" },
];

const FAQ_ITEMS = [
  { q: "텍사스 홀덤에서 블라인드는 왜 있나요?", a: "블라인드는 판에 돈을 강제로 넣어 게임이 활발하게 진행되도록 만드는 장치입니다. 블라인드가 없으면 플레이어들이 강한 패가 들어올 때까지 계속 체크만 반복할 수 있기 때문입니다." },
  { q: "프리플랍에서 체크를 할 수 있나요?", a: "아니요. 프리플랍에서는 빅 블라인드가 이미 베팅된 상태이므로 체크를 할 수 없습니다. 폴드·콜·레이즈 중 하나를 선택해야 합니다. 체크는 플랍부터 사용 가능합니다." },
  { q: "쇼다운에서 홀 카드 2장을 반드시 다 써야 하나요?", a: "아닙니다. 개인 홀 카드 2장과 공용 카드 5장 중에서 가장 강한 5장 조합을 자유롭게 선택합니다. 필요에 따라 홀 카드 1장만 쓰거나, 심지어 공용 카드 5장만으로 족보를 만들 수도 있습니다." },
  { q: "올인(All-in)을 하면 어떻게 되나요?", a: "올인 이후에는 추가 베팅을 할 수 없습니다. 그러나 올인한 금액까지의 팟(메인 팟)은 계속 경쟁합니다. 상대가 올인 금액보다 더 베팅하면 사이드 팟이 생성되어 올인하지 않은 플레이어들끼리 별도로 경쟁합니다." },
  { q: "노 리밋과 리밋 홀덤의 차이는 무엇인가요?", a: "노 리밋(No-Limit)은 언제든 원하는 만큼 베팅·레이즈·올인이 가능합니다. 리밋(Limit)은 베팅과 레이즈 금액이 미리 정해진 한도로 제한됩니다. 온라인홀덤에서는 대부분 노 리밋 방식이 사용됩니다." },
  { q: "팟 오즈(Pot Odds)란 무엇인가요?", a: "팟 오즈는 현재 팟 크기 대비 내가 콜해야 하는 금액의 비율입니다. 예를 들어 팟이 10만원이고 콜 금액이 2만원이라면 5:1 오즈입니다. 내 드로우 완성 확률이 이 비율보다 높으면 콜이 수익적입니다." },
  { q: "딜러 포지션이 왜 유리한가요?", a: "딜러(버튼)는 매 베팅 라운드에서 마지막으로 액션을 취합니다. 상대방의 체크·벳·레이즈를 모두 보고 결정할 수 있기 때문에 정보 우위를 가집니다. 포지션이 좋을수록 더 많은 핸드를 수익적으로 플레이할 수 있습니다." },
  { q: "테이블 스테이크(Table Stakes)가 무엇인가요?", a: "게임 시작 시 테이블에 올린 금액 이상은 베팅할 수 없다는 규칙입니다. 게임 도중 지갑에서 돈을 꺼내 추가할 수 없으며, 처음 가지고 있던 칩만으로 끝까지 플레이해야 합니다." },
];

export default function TexasHoldem() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "텍사스 홀덤 포커 규칙 완벽 가이드",
      "description": "텍사스 홀덤 기초 규칙을 처음 배우는 사람도 이해할 수 있도록 완벽하게 정리한 가이드. 블라인드·프리플랍·플랍·턴·리버·쇼다운 6단계, 베팅 옵션 7가지, 족보 순위 10가지, FAQ 8개.",
      "author": { "@type": "Organization", "name": "홀덤마스터" },
      "publisher": { "@type": "Organization", "name": "홀덤마스터", "url": "https://www.holdemmaster.com" },
      "dateModified": "2026-03-24",
      "keywords": "텍사스 홀덤 규칙, 홀덤 하는법, 홀덤 베팅, 홀덤 족보, 블라인드, 프리플랍, 플랍, 턴, 리버, 쇼다운",
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
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.holdemmaster.com/" },
        { "@type": "ListItem", "position": 2, "name": "게임 방법", "item": "https://www.holdemmaster.com/rules" },
        { "@type": "ListItem", "position": 3, "name": "텍사스 홀덤 규칙", "item": "https://www.holdemmaster.com/rules/texas-holdem" },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="텍사스 홀덤 포커 규칙 완벽 가이드 — 블라인드·베팅·족보 총정리"
        description="⚡텍사스 홀덤⚡ 기초 규칙을 처음부터 끝까지 정리했습니다. 블라인드·프리플랍·플랍·턴·리버·쇼다운 6단계 + 베팅 옵션 7가지 + 족보 10가지 + FAQ 8개."
        keywords="텍사스 홀덤 규칙, 홀덤 하는법, 홀덤 룰, 포커 기초 규칙, 블라인드, 프리플랍, 플랍, 홀덤 족보, 홀덤 베팅"
        path="/rules/texas-holdem"
        schema={jsonLd}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link href="/"><span className="hover:text-primary transition-colors cursor-pointer">홈</span></Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/rules"><span className="hover:text-primary transition-colors cursor-pointer">게임 방법</span></Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">텍사스 홀덤</span>
        </nav>

        {/* Hero */}
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
            텍사스 홀덤 포커 규칙 완벽 가이드
          </h1>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            포커를 처음 배운다면 여기서 시작하세요. 블라인드·프리플랍·플랍·턴·리버·쇼다운 6단계부터
            베팅 옵션 7가지, 족보 10가지까지 — <strong className="text-foreground">이 페이지 하나로 오늘 바로 홀덤 테이블에 앉을 수 있습니다.</strong>
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-b border-border pb-4">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />최종 업데이트: 2026년 3월 24일</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />읽기 시간: 약 15분</span>
          </div>
        </motion.div>

        {/* TOC */}
        <TableOfContents sections={[
          { id: "game-flow", title: "텍사스 홀덤 게임 진행 순서" },
          { id: "pot-rake",  title: "팟(POT)과 레이크(Rake) 완전 정리" },
          { id: "betting",   title: "베팅 옵션 7가지 완전 정리" },
          { id: "hands",     title: "족보(핸드 랭킹) 순위 10가지" },
          { id: "faq",       title: "자주 묻는 질문" },
        ]} />

        {/* Intro */}
        <motion.div initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mb-12 bg-card border border-border rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">텍사스 홀덤이란?</h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>텍사스 홀덤은 전 세계에서 가장 많이 플레이되는 포커 게임입니다. 각 플레이어는 <strong className="text-foreground">홀 카드 2장</strong>을 받고, 테이블에 공개되는 <strong className="text-foreground">커뮤니티 카드 5장</strong>과 조합해 최강의 5장을 만드는 게임입니다.</p>
            <p>이 가이드에서 배울 내용:</p>
            <ul className="space-y-1.5 ml-4">
              {["텍사스 홀덤 6단계 게임 진행 순서 (블라인드 → 쇼다운)", "베팅 옵션 7가지 — 폴드·체크·콜·벳·레이즈·리레이즈·올인", "족보(핸드 랭킹) 10가지 — 로열 플러시부터 하이카드까지", "초보자가 자주 하는 실수와 해결법"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5 font-bold">✓</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* SECTION 1: Game Flow */}
        <section id="game-flow" className="mb-16 scroll-mt-24">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/15 border border-primary/30 rounded-full text-xs font-bold text-primary tracking-wider">PART 1</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Game Flow</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">텍사스 홀덤 게임 진행 순서</h2>
            <p className="text-muted-foreground">한 판은 항상 같은 순서로 흘러갑니다. 아래 6단계를 외우면 홀덤의 구조가 완벽히 잡힙니다.</p>
          </motion.div>

          <div className="mb-8 bg-card border border-primary/20 rounded-xl p-4 flex flex-wrap justify-center gap-2 text-xs font-semibold">
            {["블라인드", "프리플랍", "플랍 (3장)", "턴 (1장)", "리버 (1장)", "쇼다운"].map((s, i) => (
              <span key={s} className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 text-primary flex items-center justify-center text-[10px] font-bold shrink-0">{i + 1}</span>
                <span className="text-foreground">{s}</span>
                {i < 5 && <span className="text-primary/40 hidden sm:inline">→</span>}
              </span>
            ))}
          </div>

          <div className="relative border-l-2 border-primary/30 ml-3 md:ml-6 space-y-10">
            {STAGES.map((stage, index) => (
              <motion.div key={stage.id} id={stage.id}
                initial={false} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative pl-8 md:pl-12 scroll-mt-24">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.6)] border-2 border-background" />
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-colors">
                  {/* Poker table diagram */}
                  <PokerTableDiagram stage={stage.diagramStage} />
                  {/* Text content */}
                  <div className="p-5 md:p-7">
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

        {/* SECTION 2: Pot & Rake */}
        <section id="pot-rake" className="mb-16 scroll-mt-24">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/15 border border-primary/30 rounded-full text-xs font-bold text-primary tracking-wider">PART 2</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Pot &amp; Rake</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">팟(POT)과 레이크(Rake) 완전 정리</h2>
            <p className="text-muted-foreground">홀덤에서 실제로 얼마를 받을 수 있는지 이해하려면 팟과 레이크를 반드시 알아야 합니다.</p>
          </motion.div>

          <div className="space-y-6">
            {/* POT */}
            <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🪙</span>
                <h3 className="text-xl font-serif font-bold text-foreground">팟(POT)이란?</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                팟(Pot)은 모든 플레이어의 베팅이 쌓이는 <strong className="text-foreground">테이블 중앙의 칩 더미</strong>입니다.
                블라인드부터 시작해 매 베팅 라운드마다 커지며, 쇼다운에서 이긴 플레이어가 전액을 가져갑니다.
                위 게임 예시에서 팟이 쌓이는 과정은 다음과 같습니다.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2.5 pr-4 text-muted-foreground font-medium">단계</th>
                      <th className="text-left py-2.5 pr-4 text-muted-foreground font-medium">이번 라운드 베팅</th>
                      <th className="text-right py-2.5 text-muted-foreground font-medium">누적 팟</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { step: "블라인드",  desc: "Chris SB $0.01 + Dana BB $0.02",        added: "+$0.03", total: "$0.03" },
                      { step: "프리플랍",  desc: "Robin·Sam $0.02 콜, Chris $0.01 추가콜, Dana 체크 (4인 진행)", added: "+$0.05", total: "$0.08" },
                      { step: "플랍",      desc: "Robin 벳 $0.06 + Sam 콜 $0.06",         added: "+$0.12", total: "$0.20" },
                      { step: "턴",        desc: "Robin 벳 $0.10 + Sam 콜 $0.10",         added: "+$0.20", total: "$0.40" },
                      { step: "리버",      desc: "Robin 벳 $0.14 + Sam 콜 $0.14",         added: "+$0.28", total: "$0.68" },
                    ].map((row) => (
                      <tr key={row.step} className="hover:bg-primary/5 transition-colors">
                        <td className="py-2.5 pr-4 font-semibold text-foreground">{row.step}</td>
                        <td className="py-2.5 pr-4 text-muted-foreground">{row.desc}</td>
                        <td className="py-2.5 text-right font-bold text-primary">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-primary/5 border border-primary/15 rounded-lg text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">💡 사이드 팟(Side Pot):</strong> 한 플레이어가 올인(All-in)으로 칩이 부족할 경우,
                올인 금액까지만 메인 팟(Main Pot)으로 경쟁하고, 초과 금액은 나머지 플레이어끼리 별도 사이드 팟을 구성합니다.
                올인 플레이어는 메인 팟만 획득 가능합니다.
              </div>
            </motion.div>

            {/* RAKE */}
            <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏦</span>
                <h3 className="text-xl font-serif font-bold text-foreground">레이크(Rake)란?</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                레이크(Rake)는 카지노 또는 온라인 포커 사이트가 매 판 팟에서 공제하는 <strong className="text-foreground">운영 수수료</strong>입니다.
                오프라인 카지노에서는 딜러가 칩을 가져가는 방식으로, 온라인에서는 자동으로 차감됩니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                {[
                  { label: "레이크 요율", value: "통상 3~5%", sub: "사이트·스테이크마다 다름", color: "text-blue-400" },
                  { label: "레이크 캡(Cap)", value: "최대 한도 있음", sub: "큰 팟도 일정 금액 이상 안 뗌", color: "text-orange-400" },
                  { label: "노 플랍 노 드랍", value: "NFND 규칙", sub: "플랍 전 팟 종료 시 레이크 없음", color: "text-green-400" },
                ].map((item) => (
                  <div key={item.label} className="bg-background border border-border rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    <div className={`font-bold text-sm ${item.color} mb-0.5`}>{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.sub}</div>
                  </div>
                ))}
              </div>

              {/* 위 게임 예시 계산 */}
              <div className="bg-background border border-primary/20 rounded-xl p-5">
                <p className="text-xs font-bold text-primary/60 tracking-widest mb-3">위 게임 예시 레이크 계산</p>
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-center text-center">
                  <div className="px-5 py-3 bg-card rounded-lg border border-border">
                    <div className="text-xs text-muted-foreground mb-0.5">최종 팟</div>
                    <div className="text-xl font-bold text-foreground">$0.68</div>
                  </div>
                  <span className="text-muted-foreground text-lg">×</span>
                  <div className="px-5 py-3 bg-card rounded-lg border border-border">
                    <div className="text-xs text-muted-foreground mb-0.5">레이크 요율</div>
                    <div className="text-xl font-bold text-red-400">5%</div>
                  </div>
                  <span className="text-muted-foreground text-lg">=</span>
                  <div className="px-5 py-3 bg-red-950/30 rounded-lg border border-red-900/40">
                    <div className="text-xs text-red-400/70 mb-0.5">레이크 공제</div>
                    <div className="text-xl font-bold text-red-400">-$0.03</div>
                  </div>
                  <span className="text-muted-foreground text-lg">=</span>
                  <div className="px-5 py-3 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="text-xs text-primary/70 mb-0.5">Sam 실제 수령</div>
                    <div className="text-xl font-bold text-primary">$0.65</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-yellow-950/20 border border-yellow-700/20 rounded-lg text-sm text-muted-foreground leading-relaxed">
                <strong className="text-yellow-400">⚠️ 레이크가 수익성에 미치는 영향:</strong> 장기적으로 승리하려면 레이크를 이기고도 남는 승률이 필요합니다.
                레이크가 낮은 사이트 선택과 정확한 팟 오즈 계산이 중요한 이유입니다.
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: Betting Options */}
        <section id="betting" className="mb-16 scroll-mt-24">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/15 border border-primary/30 rounded-full text-xs font-bold text-primary tracking-wider">PART 3</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Betting Actions</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">베팅 옵션 7가지 완전 정리</h2>
            <p className="text-muted-foreground">홀덤에서 사용할 수 있는 모든 액션입니다. 초보자가 가장 많이 헷갈리는 부분이니 완전히 익혀두세요.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BETTING_OPTIONS.map((opt, i) => (
              <motion.div key={opt.name} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-lg font-bold ${opt.color} w-8 text-center`}>{opt.icon}</span>
                  <h3 className="font-bold text-foreground">{opt.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{opt.desc}</p>
                <div className="text-xs text-primary/70 bg-primary/5 border border-primary/10 rounded-lg px-3 py-1.5">
                  💡 언제: {opt.when}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Hand Rankings */}
        <section id="hands" className="mb-16 scroll-mt-24">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/15 border border-primary/30 rounded-full text-xs font-bold text-primary tracking-wider">PART 4</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Hand Rankings</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">족보(핸드 랭킹) 순위 10가지</h2>
            <p className="text-muted-foreground">쇼다운에서 승자를 결정하는 족보 순위입니다. 1위가 가장 강하고 10위가 가장 약합니다.</p>
          </motion.div>
          <div className="space-y-2">
            {HANDS.map((hand, i) => (
              <motion.div key={hand.rank} initial={false} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="flex items-center gap-4 bg-card border border-border rounded-xl px-4 py-3.5 hover:border-primary/30 transition-colors">
                <span className={`text-xl font-bold w-8 text-center ${hand.color}`}>{hand.rank}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-foreground">{hand.name}</span>
                    <span className="text-xs text-muted-foreground">({hand.korean})</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{hand.desc}</p>
                </div>
                <div className="hidden sm:block text-right">
                  <div className="text-sm font-mono text-foreground/80">{hand.example}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{hand.freq}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4: FAQ */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/15 border border-primary/30 rounded-full text-xs font-bold text-primary tracking-wider">PART 5</span>
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
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {item.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3">다른 포커 게임도 배워보세요</h2>
          <p className="text-muted-foreground mb-6">텍사스 홀덤을 마스터했다면 오마하 포커로 도전해보세요.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/rules/omaha" className="inline-flex items-center gap-1.5 bg-primary text-black font-semibold rounded-full px-6 py-2.5 hover:bg-primary/90 transition-colors">
              오마하 규칙 보기 <ChevronRight className="w-4 h-4" />
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
