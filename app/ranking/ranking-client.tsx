"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle, Shield, Clock, ChevronRight, Award } from "lucide-react";
import { SEO } from "@/components/seo";

const SITES = [
  {
    rank: 1,
    name: "GGPoker (지지포커)",
    logo: "GG",
    logoColor: "from-blue-600 to-blue-800",
    rating: 4.9,
    badge: "EDITOR'S CHOICE",
    badgeColor: "bg-yellow-500",
    license: "Isle of Man",
    founded: "2014",
    bonus: "첫 입금 100% 최대 $600 보너스",
    minDeposit: "$10",
    withdrawal: "24시간 이내",
    pros: ["세계 최대 트래픽", "한국어 완벽 지원", "Bad Beat 잭팟", "Rush & Cash 캐시 게임", "다양한 토너먼트"],
    cons: ["초보자에게 경쟁 치열", "VPN 필요 (일부 지역)"],
    tags: ["초보자 추천", "모바일 앱", "한국어 지원", "대형 토너먼트"],
    review: "GGPoker는 현재 전 세계에서 가장 많은 트래픽을 자랑하는 온라인 포커 사이트입니다. WSOP 독점 온라인 파트너십을 보유하고 있어 매년 WSOP 이벤트를 온라인으로 진행합니다. 한국어를 완벽히 지원하며, 다양한 게임 형식과 스테이크 레벨을 갖추고 있습니다.",
    href: "#",
  },
  {
    rank: 2,
    name: "PokerStars (포커스타즈)",
    logo: "PS",
    logoColor: "from-red-600 to-red-800",
    rating: 4.7,
    badge: "MOST POPULAR",
    badgeColor: "bg-red-600",
    license: "Isle of Man, Malta",
    founded: "2001",
    bonus: "스핀&고 무료 티켓 10장 + 스타즈코인",
    minDeposit: "$20",
    withdrawal: "1~3일",
    pros: ["가장 오랜 역사와 신뢰", "WCOOP·SCOOP 대형 시리즈", "소프트웨어 최고 수준", "다양한 게임 종류", "포커 트래커 지원"],
    cons: ["경쟁 테이블 수준 높음", "보너스 클리어 요건 복잡"],
    tags: ["업계 최고", "토너먼트 강자", "안정적 소프트웨어"],
    review: "포커스타즈는 2001년 설립 이래 20년 이상 업계 1위를 유지해온 전설적인 사이트입니다. WCOOP, SCOOP 등 매년 수백만 달러 규모의 토너먼트 시리즈를 운영하며, 안정적인 소프트웨어와 다양한 게임 종류로 여전히 전 세계 포커 플레이어의 사랑을 받고 있습니다.",
    href: "#",
  },
  {
    rank: 3,
    name: "888poker (888포커)",
    logo: "888",
    logoColor: "from-orange-500 to-orange-700",
    rating: 4.5,
    badge: "BEST BONUS",
    badgeColor: "bg-green-600",
    license: "Gibraltar, Malta",
    founded: "2002",
    bonus: "무입금 $88 + 첫 입금 100% 최대 $400",
    minDeposit: "$10",
    withdrawal: "1~5일",
    pros: ["업계 최고 무입금 보너스", "초보자 테이블 분리 운영", "빠른 출금", "LIVE 이벤트 연계", "모바일 최적화"],
    cons: ["트래픽 GGPoker보다 적음", "하이스테이크 제한적"],
    tags: ["무입금 보너스", "초보 친화", "빠른 출금"],
    review: "888poker는 가입만 해도 $88을 무료로 지급하는 것으로 유명합니다. 초보자를 위한 별도 테이블을 운영하고, 빠른 출금 처리로 신뢰도가 높습니다. 연간 888poker LIVE 시리즈를 통해 오프라인 토너먼트도 연계됩니다.",
    href: "#",
  },
  {
    rank: 4,
    name: "IDNPoker (IDN포커)",
    logo: "IDN",
    logoColor: "from-purple-600 to-purple-800",
    rating: 4.3,
    badge: "ASIA #1",
    badgeColor: "bg-blue-600",
    license: "PAGCOR (필리핀)",
    founded: "2010",
    bonus: "주간 캐시백 최대 0.5% + 레퍼럴 보너스",
    minDeposit: "₩10,000",
    withdrawal: "즉시~24시간",
    pros: ["아시아 트래픽 1위", "원화 입출금 가능", "한국어 지원", "모바일 전용 앱", "낮은 레이크"],
    cons: ["서양 고수 접촉 제한", "게임 종류 제한적"],
    tags: ["아시아 최대", "원화 지원", "한국인 많음"],
    review: "IDNPoker는 아시아 최대 온라인 포커 네트워크입니다. 한국, 중국, 동남아 플레이어들이 주로 이용하며, 원화로 입출금이 가능한 것이 가장 큰 장점입니다. 한국 플레이어끼리 경쟁할 수 있어 익숙한 환경에서 시작할 수 있습니다.",
    href: "#",
  },
  {
    rank: 5,
    name: "WPT Global (WPT글로벌)",
    logo: "WPT",
    logoColor: "from-emerald-600 to-emerald-800",
    rating: 4.1,
    badge: "TOURNAMENT KING",
    badgeColor: "bg-purple-600",
    license: "Kahnawake (캐나다)",
    founded: "2021",
    bonus: "WPT 온라인 시리즈 무료 티켓 제공",
    minDeposit: "$20",
    withdrawal: "2~5일",
    pros: ["세계 포커 투어(WPT) 연계", "대형 GTD 토너먼트", "프로 콘텐츠 제공", "빠르게 성장 중", "스트리밍 통합"],
    cons: ["아직 성장 단계", "트래픽 상위권보다 적음"],
    tags: ["WPT 공식", "라이브 연계", "프로 대회"],
    review: "WPT Global은 세계 포커 투어(WPT)의 공식 온라인 파트너입니다. WPT 라이브 이벤트와 연계된 온라인 위성 토너먼트를 통해 실제 WPT 대회에 참가할 기회를 제공합니다. 빠르게 성장하는 사이트로 미래가 기대됩니다.",
    href: "#",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className={`w-4 h-4 ${i <= Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`} />
      ))}
      <span className="ml-1.5 font-bold text-yellow-400 text-sm">{rating}/5</span>
    </div>
  );
}

export default function Ranking() {
  const jsonLd = [
    {
      "@type": "ItemList",
      "name": "2026년 추천 온라인 홀덤 사이트 랭킹",
      "description": "홀덤마스터가 직접 검증한 2026년 최고의 온라인 텍사스 홀덤 사이트 순위",
      "itemListElement": SITES.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": s.name,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://holdemmaster.com/" },
        { "@type": "ListItem", "position": 2, "name": "추천 홀덤 사이트 랭킹 TOP 5", "item": "https://holdemmaster.com/ranking" },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="⚡ 안전한 온라인홀덤 사이트 TOP 5 — 직접 가입·검증 랭킹 [2026]"
        description="⚡온라인홀덤 사이트⚡ 찾는 법 모르겠다면? 직접 가입·입금·출금까지 검증한 안전한 순위. 라이센스·보안·한국어지원·보너스 종합 비교 무료 공개."
        keywords="온라인 홀덤 사이트 추천, 홀덤 사이트 순위, GGPoker 한국어, PokerStars 추천, 888poker 보너스, 온라인 포커 사이트 비교, 포커스타즈 후기, IDN포커, 홀덤 보너스 추천"
        path="/ranking"
        schema={jsonLd}
      />

      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-card to-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-bold mb-6">
            <Award className="w-4 h-4" /> 2026년 3월 기준 최신 업데이트
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-4">
            온라인 홀덤 사이트<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-primary">TOP 5 랭킹</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong className="text-foreground">안전한 홀덤사이트</strong> 찾는 방법을 모르겠다면 여기서 시작하세요.
            홀덤마스터 팀이 직접 가입·입금·플레이·출금까지 완료하며 검증한
            <strong className="text-foreground"> 온라인홀덤 사이트</strong> 순위입니다.
            라이센스 · 보안 · 트래픽 · 보너스 · 한국어 지원을 종합 평가했습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
            {[
              { icon: Shield, text: "직접 검증 완료" },
              { icon: CheckCircle, text: "라이센스 확인" },
              { icon: Clock, text: "매월 업데이트" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-muted-foreground">
                <Icon className="w-4 h-4 text-primary" /> {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 flex flex-col gap-8">
          {SITES.map((site, idx) => (
            <motion.div
              key={site.rank}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors"
            >
              {/* Top bar */}
              <div className={`flex items-center gap-4 p-5 border-b border-border bg-background/40`}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${site.logoColor} flex items-center justify-center text-white font-black text-lg flex-shrink-0`}>
                  {site.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded text-white ${site.badgeColor}`}>
                      {idx + 1}위 · {site.badge}
                    </span>
                    {site.tags.slice(0, 2).map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-background border border-border text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{site.name}</h2>
                  <StarRating rating={site.rating} />
                </div>
                <div className="hidden md:flex flex-col items-end gap-2">
                  <a href={site.href} className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:brightness-110 transition-all whitespace-nowrap shadow-[0_0_12px_rgba(212,175,55,0.25)]">
                    리뷰 보기
                  </a>
                  <a href={site.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">공식 사이트 →</a>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Info */}
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{site.review}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wider">장점</div>
                      {site.pros.map(p => (
                        <div key={p} className="flex items-center gap-1.5 text-xs text-foreground mb-1">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" /> {p}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wider">단점</div>
                      {site.cons.map(c => (
                        <div key={c} className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                          <span className="w-3.5 h-3.5 flex-shrink-0 text-center text-red-400">✕</span> {c}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Side stats */}
                <div className="bg-background rounded-xl p-4 flex flex-col gap-3 border border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">🎁 보너스</div>
                    <div className="text-sm font-bold text-primary">{site.bonus}</div>
                  </div>
                  <div className="border-t border-border pt-3 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-muted-foreground">최소 입금</div>
                      <div className="font-bold text-foreground">{site.minDeposit}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">출금 속도</div>
                      <div className="font-bold text-foreground">{site.withdrawal}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">라이센스</div>
                      <div className="font-bold text-foreground">{site.license}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">설립</div>
                      <div className="font-bold text-foreground">{site.founded}년</div>
                    </div>
                  </div>
                  <a href={site.href} className="w-full text-center px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:brightness-110 transition-all mt-1 md:hidden">
                    리뷰 보기
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto px-4 mt-10 p-5 bg-card border border-border rounded-xl text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground">⚠️ 중요 고지:</strong> 본 랭킹은 정보 제공 목적으로만 작성되었습니다. 온라인 포커는 거주 국가의 법률에 따라 제한될 수 있습니다. 반드시 거주 지역의 법적 기준을 확인하십시오. 만 19세 미만은 이용이 금지됩니다. 이 사이트는 홀덤 정보 및 교육 콘텐츠를 제공하며, 실제 도박을 조장하지 않습니다.
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-t border-border text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3">홀덤을 시작하기 전에</h2>
          <p className="text-muted-foreground text-sm mb-6">사이트를 선택하기 전, 기초 규칙과 전략을 먼저 익혀보세요.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/rules" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2">
              기초 규칙 배우기 <ChevronRight className="w-4 h-4" />
            </a>
            <a href="/strategy" className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-all font-bold text-sm flex items-center justify-center gap-2">
              전략 가이드 보기 <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
