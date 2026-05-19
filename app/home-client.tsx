"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Trophy, Lightbulb, Library, ChevronRight, Star, Shield, CheckCircle, TrendingUp, Clock, Users, Award, ChevronDown, AlertTriangle } from "lucide-react";
import { SEO } from "@/components/seo";
import { useState } from "react";

const FEATURES = [
  { title: "기초 규칙 가이드", description: "블라인드부터 쇼다운까지, 텍사스 홀덤의 기본 흐름을 완벽하게 마스터하세요.", icon: BookOpen, href: "/rules", cta: "홀덤 기초 규칙 전체 보기" },
  { title: "핸드 랭킹(족보)", description: "로열 플러시부터 하이카드까지, 승패를 가르는 족보 순위를 확인하세요.", icon: Trophy, href: "/hands", cta: "홀덤 족보 순위 전체 확인하기" },
  { title: "전략 가이드", description: "포지션, 베팅 사이즈, 심리전 등 승률을 높이는 실전 팁을 제공합니다.", icon: Lightbulb, href: "/strategy", cta: "포지션별 전략 가이드 보러가기" },
  { title: "홀덤 용어 사전", description: "플랍, 턴, 리버, 벳, 폴드 등 알쏭달쏭한 홀덤 전문 용어를 총정리했습니다.", icon: Library, href: "/glossary", cta: "홀덤 용어 사전 전체 보기" },
];

const TRUST_STATS = [
  { icon: Award, value: "12년", label: "포커 분석 경력" },
  { icon: Users, value: "50,000+", label: "월간 방문자" },
  { icon: TrendingUp, value: "500+", label: "전략 콘텐츠" },
  { icon: Shield, value: "100%", label: "무료 정보 제공" },
];

const RANKINGS = [
  {
    rank: 1,
    name: "GGPoker (지지포커)",
    rating: 4.9,
    tags: ["초보자 추천", "보너스 우수", "앱 지원"],
    bonus: "첫 입금 100% 보너스 최대 $600",
    pros: ["세계 최대 규모 트래픽", "한국어 지원", "다양한 토너먼트"],
    badge: "EDITOR'S CHOICE",
    badgeColor: "bg-yellow-500",
    href: "#",
  },
  {
    rank: 2,
    name: "PokerStars (포커스타즈)",
    rating: 4.7,
    tags: ["토너먼트 강자", "24시간 운영"],
    bonus: "스핀&고 무료 티켓 10장 증정",
    pros: ["가장 오랜 역사", "WCOOP·SCOOP 대회", "안정적인 소프트웨어"],
    badge: "MOST POPULAR",
    badgeColor: "bg-red-600",
    href: "#",
  },
  {
    rank: 3,
    name: "888poker (888포커)",
    rating: 4.5,
    tags: ["무입금 보너스", "초보자 친화"],
    bonus: "가입 즉시 무입금 $88 지급",
    pros: ["무입금 보너스 업계 최고", "초보 테이블 분리 운영", "빠른 출금"],
    badge: "BEST BONUS",
    badgeColor: "bg-green-600",
    href: "#",
  },
  {
    rank: 4,
    name: "IDNPoker (IDN포커)",
    rating: 4.3,
    tags: ["아시아 최대", "원화 지원"],
    bonus: "주간 캐시백 최대 0.5%",
    pros: ["아시아 트래픽 1위", "원화 입출금 가능", "모바일 최적화"],
    badge: "ASIA #1",
    badgeColor: "bg-blue-600",
    href: "#",
  },
  {
    rank: 5,
    name: "WPT Global (WPT글로벌)",
    rating: 4.1,
    tags: ["프로 대회", "라이브 연계"],
    bonus: "WPT 온라인 시리즈 무료 티켓",
    pros: ["세계 포커 투어 연계", "대형 GTD 토너먼트", "프로 플레이어 콘텐츠"],
    badge: "TOURNAMENT KING",
    badgeColor: "bg-purple-600",
    href: "#",
  },
];

const POPULAR_GUIDES = [
  {
    category: "기초 규칙",
    href: "/blog/holdem-blind-meaning",
    title: "홀덤 블라인드 뜻 — 빅·스몰블라인드 차이 3분",
    desc: "SB·BB·딜러 버튼·옵션 체크까지. GSC에서 가장 많이 찾는 블라인드 허브 글입니다.",
    date: "2026-05",
    readTime: "11분",
    img: "🎯",
  },
  {
    category: "족보",
    href: "/blog/holdem-hand-rankings-confusing",
    title: "홀덤 족보 헷갈리는 TOP7 — 플러시·풀하우스 판정",
    desc: "쇼다운에서 자주 틀리는 족보 비교. 표와 예시로 한 번에 정리합니다.",
    date: "2026-04",
    readTime: "9분",
    img: "👑",
  },
  {
    category: "기초 규칙",
    href: "/blog/holdem-tiebreak-rules",
    title: "홀덤 족보 같을 때 — 키커·스플릿 판정법",
    desc: "원페어 대 원페어, 키커 한 장 차이. 실전 판정 순서를 단계별로 설명합니다.",
    date: "2026-04",
    readTime: "8분",
    img: "⚖️",
  },
  {
    category: "초보 가이드",
    href: "/blog/holdem-check-meaning",
    title: "홀덤 체크 뜻 — 패스가 아니라 베팅 0원",
    desc: "BB 옵션·체크 금지 상황·콜·폴드 차이. 테이블에서 당황하지 않게 정리했습니다.",
    date: "2026-05",
    readTime: "9분",
    img: "✋",
  },
  {
    category: "포지션",
    href: "/blog/holdem-small-blind-role",
    title: "스몰블라인드 역할 — 싸다고 콜하면 손해",
    desc: "SB가 가장 불리한 이유, 빅블라인드와 다른 운영법, 초보 실수 패턴.",
    date: "2026-05",
    readTime: "10분",
    img: "⚡",
  },
];

const HAND_RANKINGS = [
  { rank: 1, name: "로열 플러시", example: "A♠ K♠ Q♠ J♠ 10♠", desc: "같은 무늬 A·K·Q·J·10" },
  { rank: 2, name: "스트레이트 플러시", example: "9♥ 8♥ 7♥ 6♥ 5♥", desc: "같은 무늬 연속 5장" },
  { rank: 3, name: "포 카드", example: "K♠ K♥ K♦ K♣ A♠", desc: "같은 숫자 4장" },
  { rank: 4, name: "풀 하우스", example: "Q♠ Q♥ Q♦ J♠ J♥", desc: "트리플 + 원페어" },
  { rank: 5, name: "플러시", example: "A♦ J♦ 9♦ 6♦ 2♦", desc: "같은 무늬 5장" },
  { rank: 6, name: "스트레이트", example: "8♠ 7♥ 6♦ 5♣ 4♠", desc: "무늬 무관 연속 5장" },
  { rank: 7, name: "트리플 (쓰리 오브 어 카인드)", example: "J♠ J♥ J♦ A♠ K♥", desc: "같은 숫자 3장" },
  { rank: 8, name: "투 페어", example: "A♠ A♥ K♦ K♣ Q♠", desc: "페어 두 쌍" },
  { rank: 9, name: "원 페어", example: "A♠ A♥ K♦ Q♣ J♠", desc: "같은 숫자 2장" },
  { rank: 10, name: "하이 카드", example: "A♠ K♥ Q♦ J♣ 9♠", desc: "아무 조합도 없는 경우" },
];

const POSITIONS = [
  { name: "얼리 포지션 (EP)", seats: "UTG, UTG+1", strategy: "프리미엄 핸드만 플레이. AA, KK, QQ, AK 위주로 타이트하게.", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
  { name: "미들 포지션 (MP)", seats: "MP1, MP2, MP3", strategy: "EP보다 약간 넓게. JJ, TT, AQ, AJ 추가 가능.", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  { name: "레이트 포지션 (LP)", seats: "CO, BTN", strategy: "가장 유리한 자리. 더 넓은 핸드 레인지로 공격적 플레이 가능.", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
  { name: "블라인드 (SB/BB)", seats: "스몰·빅 블라인드", strategy: "강제로 베팅. BB는 수비적, SB는 가장 불리한 포지션.", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
];

const STARTING_HANDS = [
  { tier: "S급 (항상 플레이)", hands: ["AA", "KK", "QQ", "AKs"], color: "bg-yellow-500/20 border-yellow-500/40 text-yellow-300" },
  { tier: "A급 (강력 추천)", hands: ["JJ", "TT", "AQs", "AKo", "KQs"], color: "bg-green-500/20 border-green-500/40 text-green-300" },
  { tier: "B급 (포지션에 따라)", hands: ["99", "88", "AJs", "AQo", "KJs", "QJs"], color: "bg-blue-500/20 border-blue-500/40 text-blue-300" },
  { tier: "C급 (레이트 포지션만)", hands: ["77", "66", "A9s", "KTo", "QTs", "JTs"], color: "bg-muted border-border text-muted-foreground" },
];

const BEGINNER_MISTAKES = [
  { no: "01", title: "너무 많은 핸드 플레이", desc: "초보자의 가장 흔한 실수. 아무 패나 들고 플롭을 보려 합니다. 상위 20% 핸드만 플레이하는 습관을 들이세요." },
  { no: "02", title: "포지션 무시", desc: "딜러 버튼에 가까울수록 유리합니다. 얼리 포지션에서 약한 핸드로 들어가면 선제적으로 불리한 상황이 만들어집니다." },
  { no: "03", title: "무분별한 블러핑", desc: "블러핑은 상대의 성향, 팟 오즈, 보드 텍스처를 고려해야 합니다. 초보자는 블러핑보다 밸류 베팅에 집중하세요." },
  { no: "04", title: "팟 오즈 무시", desc: "콜을 결정할 때 이길 확률 대비 배당률을 계산해야 합니다. 단순히 '이길 것 같다'는 느낌만으로 콜하면 장기적으로 손실입니다." },
  { no: "05", title: "감정적 플레이 (틸트)", desc: "큰 팟을 잃은 직후 흥분 상태에서 무리한 플레이를 하는 것을 '틸트'라 합니다. 틸트가 오면 잠시 자리를 피하는 게 최선입니다." },
];

const FAQS = [
  { q: "텍사스 홀덤이란 무엇인가요?", a: "텍사스 홀덤은 세계에서 가장 인기 있는 포커 변형으로, 각 플레이어가 2장의 개인 카드(홀 카드)와 5장의 공용 카드(커뮤니티 카드)를 조합해 최강의 5장 패를 만드는 게임입니다. 2~10명이 플레이할 수 있으며, WSOP(세계 포커 챔피언십)의 메인 이벤트 게임이기도 합니다." },
  { q: "홀덤 족보(핸드 랭킹) 순서는?", a: "강한 순서대로: 로열 플러시 > 스트레이트 플러시 > 포카드 > 풀하우스 > 플러시 > 스트레이트 > 트리플 > 투페어 > 원페어 > 하이카드 순입니다. 로열 플러시가 가장 강하고, 하이카드가 가장 약합니다." },
  { q: "홀덤 게임은 어떻게 진행되나요?", a: "① 프리플랍: 홀 카드 2장 배분 후 첫 베팅 → ② 플랍: 공용 카드 3장 공개 후 베팅 → ③ 턴: 4번째 공용 카드 공개 후 베팅 → ④ 리버: 5번째 공용 카드 공개 후 최종 베팅 → 쇼다운: 남은 플레이어 패 공개, 최강 패 소유자가 팟 획득." },
  { q: "초보자도 홀덤을 배울 수 있나요?", a: "물론입니다! 기본 규칙은 30분이면 배울 수 있습니다. 저희 기초 규칙 가이드와 핸드 랭킹 표를 참고하시면 오늘 바로 시작하실 수 있습니다. 중요한 것은 포지션 개념과 스타팅 핸드 선택부터 익히는 것입니다." },
  { q: "포지션이 왜 중요한가요?", a: "홀덤에서 '딜러 버튼에 가까울수록 유리'합니다. 레이트 포지션(버튼, CO)은 상대의 행동을 보고 결정할 수 있어 정보 우위를 가집니다. 같은 핸드라도 포지션에 따라 플레이 방식이 크게 달라집니다." },
  { q: "온라인 홀덤 사이트는 안전한가요?", a: "MGA·UKGC·Curacao 등 정식 라이센스를 보유한 사이트는 RNG(난수 생성기) 인증을 받아 공정하게 운영됩니다. 저희가 검증한 추천 사이트만 이용하시면 안전합니다." },
  { q: "팟 오즈(Pot Odds)란 무엇인가요?", a: "콜에 드는 금액 대비 팟의 크기 비율입니다. 예를 들어 팟이 100이고 콜이 20이면 팟 오즈는 5:1(16.7%)입니다. 내 이길 확률이 팟 오즈보다 높으면 콜이 수익적입니다." },
  { q: "무료로 홀덤을 연습할 수 있나요?", a: "대부분의 주요 홀덤 사이트는 플레이머니 테이블을 제공합니다. 또한 888poker는 가입 시 무입금 $88을 제공해 실머니 게임을 무료로 체험할 수 있습니다." },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : i - 0.5 <= rating ? "fill-yellow-400/50 text-yellow-400" : "text-gray-600"}`}
        />
      ))}
      <span className="ml-1.5 text-sm font-bold text-yellow-400">{rating}/5</span>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-muted transition-colors"
      >
        <span className="font-semibold text-foreground">{q}</span>
        <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 bg-card/50 text-muted-foreground text-sm leading-relaxed border-t border-border">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "홀덤마스터",
    "url": "https://www.holdemmaster.com",
    "description": "대한민국 최고의 텍사스 홀덤 정보 포털. 기초 규칙, 핸드 랭킹, 전략 가이드, 추천 사이트 랭킹.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.holdemmaster.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [websiteSchema, faqSchema]
  };

  return (
    <>
      <SEO
        title="⚡ 홀덤 초보 가이드 — 블라인드·족보·체크 인기 TOP5"
        description="【홀덤 초보】블라인드·족보 헷갈림·체크·스몰블라인드 인기 가이드 TOP5. ⚡2026 대회 일정 링크 — 테이블 앉기 전 5분 무료 허브."
        keywords="텍사스 홀덤, 홀덤 규칙, 포커 족보, 홀덤 전략, 홀덤 포지션, 스타팅 핸드, 팟 오즈, 온라인 홀덤 추천, 홀덤 초보 가이드, 포커 배우기, 홀덤 사이트 순위"
        path="/"
        type="website"
        schema={combinedSchema}
      />

      {/* ── 1. HERO ── 프리미엄 다크그린·골드 / SSR-LCP 안전 */}
      <section
        className="relative min-h-[86vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-title"
      >
        {/* 배경 펠트 + 골드 비네팅 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/poker-felt-bg.webp"
            alt="텍사스 홀덤 포커 테이블 배경"
            width={1920}
            height={1080}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover opacity-60"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 70% at 50% 30%, hsl(43 60% 18% / 0.18) 0%, transparent 60%), linear-gradient(180deg, hsl(152 55% 5% / 0.55) 0%, hsl(152 55% 5% / 0.5) 38%, hsl(152 55% 5%) 90%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/45 text-primary text-[12px] tracking-[0.18em] uppercase font-bold bg-primary/8 backdrop-blur-sm mb-7 shadow-[0_0_24px_-8px_rgba(212,175,55,0.45)]">
            <Shield className="w-3.5 h-3.5" aria-hidden="true" /> 12년 경력 포커 전문가 검증
          </span>

          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-serif font-black text-foreground leading-[1.05] mb-5"
            style={{ textShadow: "0 4px 32px rgba(0,0,0,0.55)" }}
          >
            텍사스 홀덤
            <br />
            <span className="text-gold-gradient">입문자 완전 정복</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            규칙·족보·포지션·스타팅 핸드·팟 오즈까지
            <br className="hidden md:block" />
            초보자도 오늘 바로 테이블에 앉을 수 있습니다.
          </p>

          <p className="text-sm text-foreground/55 max-w-xl mx-auto mb-10">
            홀덤마스터(Holdem Master)는 <strong className="text-foreground/85">온라인홀덤</strong> 입문자를 위한 텍사스 홀덤 전문 정보 포털입니다. 국내외 50개 이상의 <strong className="text-foreground/85">안전한 홀덤사이트</strong>를 직접 검증해 순위를 공개합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Link
              href="/rules"
              className="btn-gold text-base group"
              aria-label="홀덤 기초 규칙 배우기 페이지로 이동"
            >
              홀덤 기초 규칙 배우기
              <ChevronRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
            <a
              href="#rankings"
              className="btn-ghost-gold text-base"
              aria-label="추천 홀덤 사이트 랭킹 섹션으로 이동"
            >
              <Trophy className="w-4 h-4 text-primary" aria-hidden="true" />
              추천 사이트 랭킹
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </section>

      {/* ── 2. TRUST STATS BAR ── */}
      <section className="py-10 border-y border-primary/15 relative" aria-label="신뢰 지표">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{background:'linear-gradient(180deg, hsl(152 50% 8%) 0%, hsl(152 55% 6%) 100%)'}} />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {TRUST_STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2 px-3 py-2 rounded-xl border border-primary/12 bg-primary/4 backdrop-blur-sm transition-all duration-300 hover:border-primary/35 hover:bg-primary/8">
                <div className="w-11 h-11 rounded-full flex items-center justify-center shadow-[0_4px_14px_-4px_rgba(212,175,55,0.4)]" style={{background:'linear-gradient(135deg, hsl(43 70% 22% / 0.6), hsl(43 70% 16% / 0.6))', border:'1px solid hsl(43 60% 35% / 0.4)'}}>
                  <Icon className="w-[18px] h-[18px] text-primary" aria-hidden="true" />
                </div>
                <div className="text-2xl font-serif font-black text-gold-gradient leading-none">{value}</div>
                <div className="text-[11px] text-muted-foreground font-semibold tracking-wide uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. 텍사스 홀덤이란? ── */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">텍사스 홀덤이란?</h2>
            <div className="h-1 w-16 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              텍사스 홀덤(Texas Hold'em)은 <strong className="text-foreground">전 세계에서 가장 많이 플레이되는 포커 게임</strong>입니다.
              카지노부터 가정 게임, WSOP 월드 챔피언십까지 모든 곳에서 홀덤이 사용됩니다.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              핵심은 간단합니다. <strong className="text-foreground">나의 2장 + 공용 5장</strong> 카드를 조합해 <strong className="text-foreground">최강의 5장 패</strong>를 만드는 게임입니다.
              2~10명이 같은 테이블에서 플레이하며, 베팅 심리전이 승패를 좌우합니다.
            </p>

            {/* 실제 온라인 홀덤 테이블 이미지 */}
            <div className="mb-8 rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <img
                src="/poker-table-online.webp"
                alt="온라인 홀덤 포커 테이블 — 텍사스 홀덤 플랍(커뮤니티 카드 3장) 공개 후 6명의 플레이어가 베팅 중인 실제 온라인 포커 게임 화면"
                width={630}
                height={420}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
              />
              <div className="bg-card/80 backdrop-blur-sm px-4 py-2.5 text-xs text-muted-foreground text-center border-t border-border/50">
                실제 온라인 홀덤 테이블 — 플랍(10♦ A♠ 8♥ 3♣) 오픈 후 베팅 진행 중
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "플레이어 수", value: "2 ~ 10명", icon: "👥" },
                { title: "개인 카드", value: "홀 카드 2장", icon: "🃏" },
                { title: "공용 카드", value: "커뮤니티 카드 5장", icon: "🎴" },
              ].map(item => (
                <div key={item.title} className="bg-card border border-border rounded-xl p-5 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-sm text-muted-foreground mb-1">{item.title}</div>
                  <div className="text-lg font-bold text-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 게임 진행 4단계 */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">홀덤 게임 진행 4단계</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { step: "1단계", name: "프리플랍 (Pre-Flop)", desc: "각 플레이어에게 홀 카드 2장을 배분합니다. 스몰 블라인드·빅 블라인드 강제 베팅 후, 왼쪽부터 콜·레이즈·폴드 결정.", icon: "🂠", color: "border-yellow-500/40 bg-yellow-500/5" },
                { step: "2단계", name: "플랍 (Flop)", desc: "공용 카드 3장을 테이블 중앙에 공개합니다. 본격적인 핸드 강도 판단 시작. 가장 많은 정보가 나오는 단계.", icon: "🃏", color: "border-green-500/40 bg-green-500/5" },
                { step: "3단계", name: "턴 (Turn)", desc: "4번째 공용 카드를 공개합니다. 팟이 커지고 베팅 압박이 높아지는 단계. 드로우 핸드의 완성 여부가 중요해집니다.", icon: "🎴", color: "border-blue-500/40 bg-blue-500/5" },
                { step: "4단계", name: "리버 (River)", desc: "마지막 5번째 공용 카드 공개. 최종 베팅 라운드 후 쇼다운. 남은 플레이어 중 가장 강한 패를 가진 사람이 팟을 획득합니다.", icon: "♠", color: "border-purple-500/40 bg-purple-500/5" },
              ].map(stage => (
                <div key={stage.step} className={`border rounded-xl p-5 ${stage.color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{stage.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-primary">{stage.step}</div>
                      <div className="font-bold text-foreground">{stage.name}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stage.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/rules" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-yellow-400 transition-colors">
                홀덤 기초 규칙 전체 가이드 보러가기 <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TOP RANKING ── */}
      <section id="rankings" className="py-16 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              🏆 2025년 추천 온라인 홀덤 사이트 랭킹
            </h2>
            <p className="text-muted-foreground">라이센스 · 보안 · 게임 품질 · 보너스를 종합 평가한 2025년 최신 랭킹</p>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-foreground">
              <CheckCircle className="w-3.5 h-3.5 text-green-400" />
              <span>마지막 업데이트: 2025년 3월 | 직접 검증 완료</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {RANKINGS.map((site, idx) => (
              <motion.div
                key={site.rank}
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className={`flex items-center justify-center md:w-20 py-4 md:py-0 ${idx === 0 ? "bg-yellow-500/10" : idx === 1 ? "bg-gray-500/10" : "bg-background"}`}>
                    <span className={`text-3xl font-black ${idx === 0 ? "text-yellow-400" : idx === 1 ? "text-gray-400" : "text-muted-foreground"}`}>
                      {site.rank}위
                    </span>
                  </div>
                  <div className="flex-1 p-5 border-t md:border-t-0 md:border-l border-border">
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded text-white ${site.badgeColor}`}>{site.badge}</span>
                      {site.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded bg-background border border-border text-muted-foreground">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{site.name}</h3>
                    <StarRating rating={site.rating} />
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                      {site.pros.map(pro => (
                        <span key={pro} className="flex items-center gap-1 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> {pro}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-5 border-t md:border-t-0 md:border-l border-border md:min-w-[200px] bg-background/50">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground mb-1">🎁 보너스</div>
                      <div className="text-sm font-bold text-primary leading-tight">{site.bonus}</div>
                    </div>
                    <a href={site.href} className="w-full text-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:brightness-110 transition-all shadow-[0_0_12px_rgba(212,175,55,0.25)]">
                      상세 리뷰 보기
                    </a>
                    <a href={site.href} className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-2">공식 사이트 →</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/ranking" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-yellow-400 transition-colors">
              전체 홀덤 사이트 랭킹 및 상세 비교 보기 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            ※ 이 사이트는 정보 제공 목적으로 운영됩니다. 도박은 성인(만 19세 이상)만 이용 가능합니다. 거주 국가의 법률을 반드시 확인하세요.
          </p>
        </div>
      </section>

      {/* ── 5. 핸드 랭킹 요약 ── */}
      <section className="py-16 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3">홀덤 족보 순위 한눈에 보기</h2>
            <p className="text-muted-foreground text-sm">강한 순서대로 정렬 — 10가지 핸드 랭킹 완전 정리</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-left text-muted-foreground font-semibold">순위</th>
                  <th className="py-3 px-4 text-left text-muted-foreground font-semibold">족보 이름</th>
                  <th className="py-3 px-4 text-left text-muted-foreground font-semibold hidden md:table-cell">예시</th>
                  <th className="py-3 px-4 text-left text-muted-foreground font-semibold">설명</th>
                </tr>
              </thead>
              <tbody>
                {HAND_RANKINGS.map((hand, idx) => (
                  <tr key={hand.rank} className={`border-b border-border/50 ${idx === 0 ? "bg-yellow-500/5" : ""}`}>
                    <td className="py-3 px-4">
                      <span className={`font-black text-lg ${idx === 0 ? "text-yellow-400" : idx <= 2 ? "text-primary" : "text-muted-foreground"}`}>
                        {hand.rank}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-foreground">{hand.name}</td>
                    <td className="py-3 px-4 font-mono text-primary hidden md:table-cell">{hand.example}</td>
                    <td className="py-3 px-4 text-muted-foreground">{hand.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <Link href="/hands" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-yellow-400 transition-colors">
              홀덤 족보 순위 상세 가이드 및 예시 보러가기 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. 포지션의 중요성 ── */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-3">포지션이 왜 중요한가?</h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            홀덤에서 <strong className="text-foreground">"포지션은 곧 정보"</strong>입니다. 딜러 버튼에 가까울수록 상대의 행동을 먼저 보고 결정할 수 있어 절대적으로 유리합니다.
            같은 핸드(예: A♠K♥)라도 얼리 포지션에서는 신중하게, 레이트 포지션에서는 공격적으로 플레이해야 합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {POSITIONS.map(pos => (
              <div key={pos.name} className={`border rounded-xl p-5 ${pos.bg}`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`font-bold text-lg ${pos.color}`}>{pos.name}</h3>
                  <span className="text-xs text-muted-foreground bg-background/60 px-2 py-0.5 rounded">{pos.seats}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{pos.strategy}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/strategy" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-yellow-400 transition-colors">
              포지션별 전략 가이드 전체 보러가기 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. 스타팅 핸드 ── */}
      <section className="py-16 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-3">초보자 스타팅 핸드 기준표</h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            어떤 패로 게임에 참여할지 결정하는 것이 <strong className="text-foreground">스타팅 핸드 선택</strong>입니다.
            초보자는 상위 15~20% 핸드만 플레이하는 타이트한 전략이 장기적으로 가장 수익적입니다.
            's'는 같은 무늬(수티드), 'o'는 다른 무늬(오프수트)를 뜻합니다.
          </p>
          <div className="flex flex-col gap-4">
            {STARTING_HANDS.map(tier => (
              <div key={tier.tier} className={`border rounded-xl p-5 ${tier.color}`}>
                <div className="font-bold mb-3">{tier.tier}</div>
                <div className="flex flex-wrap gap-2">
                  {tier.hands.map(hand => (
                    <span key={hand} className="px-3 py-1.5 rounded-lg bg-background/30 font-mono font-bold text-sm border border-white/10">
                      {hand}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/strategy" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-yellow-400 transition-colors">
              포지션별 스타팅 핸드 차트 전체 보러가기 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. 팟 오즈 & 아웃츠 ── */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-3">팟 오즈 & 아웃츠 기초</h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            <strong className="text-foreground">팟 오즈(Pot Odds)</strong>는 콜에 드는 금액 대비 팟의 크기 비율입니다.
            내 이길 확률(아웃츠 기반)이 팟 오즈보다 높으면 콜이 수익적 결정입니다.
            이 개념 하나만 익혀도 실전에서 손해 보는 콜을 크게 줄일 수 있습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4 text-lg">팟 오즈 계산법</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-background/60 rounded-lg p-3">
                  <div className="text-muted-foreground mb-1">예시 상황</div>
                  <div className="font-mono text-foreground">팟: 100 / 콜: 20</div>
                </div>
                <div className="bg-background/60 rounded-lg p-3">
                  <div className="text-muted-foreground mb-1">계산식</div>
                  <div className="font-mono text-primary">20 ÷ (100 + 20) = <strong>16.7%</strong></div>
                </div>
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                  <div className="text-primary font-semibold">내 이길 확률 &gt; 16.7% → 콜 수익적</div>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4 text-lg">주요 아웃츠 확률표</h3>
              <div className="space-y-2 text-sm">
                {[
                  { situation: "플러시 드로우 (9 outs)", turn: "19%", river: "35%" },
                  { situation: "오픈 스트레이트 (8 outs)", turn: "17%", river: "32%" },
                  { situation: "원페어→트리플 (5 outs)", turn: "11%", river: "20%" },
                  { situation: "거트샷 스트레이트 (4 outs)", turn: "9%", river: "17%" },
                ].map(row => (
                  <div key={row.situation} className="flex items-center justify-between bg-background/60 rounded-lg px-3 py-2">
                    <span className="text-muted-foreground">{row.situation}</span>
                    <span className="font-mono text-primary font-bold">{row.river}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs text-muted-foreground mt-3">* 리버까지 남은 카드 기준</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/strategy" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-yellow-400 transition-colors">
              팟 오즈·아웃츠 계산 전략 가이드 보러가기 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. 초보자 실수 5가지 ── */}
      <section className="py-16 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-3">초보자가 가장 많이 하는 실수 5가지</h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-6" />
          <div className="flex flex-col gap-4">
            {BEGINNER_MISTAKES.map(mistake => (
              <div key={mistake.no} className="flex gap-4 bg-background border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-muted-foreground">#{mistake.no}</span>
                    <h3 className="font-bold text-foreground">{mistake.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{mistake.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/strategy" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-yellow-400 transition-colors">
              홀덤 전략 가이드 전체 보러가기 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. FEATURE CARDS ── */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">홀덤마스터 전문 가이드 모음</h2>
            <p className="text-muted-foreground text-sm">주제별 심화 가이드로 실력을 빠르게 높이세요</p>
            <div className="h-0.5 w-20 bg-primary/40 mx-auto rounded-full mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link href={feature.href} className="block group h-full">
                    <div className="h-full bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:border-primary transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>
                      <div className="flex items-center text-primary text-sm font-semibold">
                        {feature.cta} <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 11. EXPERT INTRO ── */}
      <section className="py-12 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-background border border-primary/20 rounded-2xl p-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-center justify-center text-4xl flex-shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              ♠
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">전문가 인증</span>
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-2">홀덤마스터 편집팀 소개</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                저희 팀은 2013년부터 텍사스 홀덤을 연구해왔습니다. 국내외 50개 이상의 온라인 포커 사이트를 직접 가입하고, 입금하고, 플레이하며 검증했습니다.
                WSOP·WPT·APT 토너먼트 현장 취재 경험을 바탕으로, 진짜 유용한 정보만 드립니다.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["WSOP 취재 경험", "50+ 사이트 검증", "GTO 솔버 분석", "1만 시간+ 플레이"].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. LATEST ARTICLES ── */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground">인기 홀덤 가이드 TOP 5</h2>
              <p className="text-muted-foreground mt-1 text-sm">검색·실전에서 가장 많이 찾는 기초·족보 글</p>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-1 text-primary text-sm font-semibold hover:text-yellow-400 transition-colors">
              블로그 전체 글 보기 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {POPULAR_GUIDES.map((article, idx) => (
              <motion.div
                key={article.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Link href={article.href}>
                  <article className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
                    <div className="h-40 bg-gradient-to-br from-primary/10 to-card flex items-center justify-center text-6xl">
                      {article.img}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25">{article.category}</span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> {article.readTime}</span>
                      </div>
                      <h3 className="font-bold text-foreground text-sm leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{article.desc}</p>
                      <div className="mt-4 text-xs text-muted-foreground">{article.date}</div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link href="/blog" className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
              블로그 전체 글 보기 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 13. FAQ ── */}
      <section className="py-16 bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3">텍사스 홀덤 자주 묻는 질문 (FAQ)</h2>
            <p className="text-muted-foreground text-sm">초보자가 가장 많이 궁금해하는 홀덤 질문 모음</p>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/glossary" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-yellow-400 transition-colors">
              홀덤 용어 사전 전체 보기 (100+ 용어) <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 14. SEO 내부 링크 섹션 ── */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-serif font-bold text-foreground mb-6 text-center">홀덤마스터 가이드 전체 목록</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {[
              { href: "/rules", label: "텍사스 홀덤 기초 규칙 가이드" },
              { href: "/hands", label: "홀덤 족보(핸드 랭킹) 순위표" },
              { href: "/strategy", label: "포지션·전략·GTO 가이드" },
              { href: "/glossary", label: "홀덤 포커 용어 사전 100+" },
              { href: "/ranking", label: "추천 온라인 홀덤 사이트 랭킹" },
              { href: "/blog", label: "홀덤 전략 블로그 & 뉴스" },
              { href: "/blog/holdem-blind-meaning", label: "홀덤 블라인드 뜻 — 빅·스몰 차이" },
              { href: "/blog/holdem-check-meaning", label: "홀덤 체크 뜻 — 베팅 0원" },
              { href: "/blog/holdem-tiebreak-rules", label: "홀덤 족보 같을 때 — 키커·스플릿" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors py-1">
                <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. SEO KEYWORD FOOTER ── */}
      <section className="py-8 bg-background border-t border-border">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground/60 leading-loose">
            텍사스 홀덤 규칙 · 홀덤 족보 · 포커 핸드 랭킹 · 홀덤 포지션 · 스타팅 핸드 · 팟 오즈 · 아웃츠 · 홀덤 전략 · 온라인 홀덤 추천 · GGPoker · PokerStars · 888poker · 홀덤 토너먼트 · WSOP · WPT · 블러핑 전략 · GTO 포커 · 홀덤마스터
          </p>
        </div>
      </section>
    </>
  );
}
