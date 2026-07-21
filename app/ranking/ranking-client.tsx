"use client";

import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Shield, AlertTriangle, Scale, BookOpen, Info, Play, MapPin, Calculator, LayoutGrid, HelpCircle, ExternalLink } from "lucide-react";
import { SEO } from "@/components/seo";

// 전 세계적으로 널리 알려진 온라인 홀덤 사이트의 공개 정보(공식 URL·라이센스 관할·설립·특징)를 정리.
// 우리가 순위·보증하는 것이 아니라 사실 정리이며, 실제 이용·합법성은 본인 확인이 원칙이다. (2026-07 기준)
const SITES = [
  {
    name: "GGPoker (지지포커)",
    logo: "GG",
    logoColor: "from-blue-600 to-blue-800",
    tag: "현재 세계 최대 트래픽",
    url: "https://ggpoker.com",
    license: "Isle of Man (맨섬) 등",
    founded: "2014",
    features: ["WSOP 온라인 파트너", "Rush & Cash 등 캐주얼 포맷", "모바일 앱 지원"],
    note: "GG International Limited가 운영하며 맨섬(Isle of Man) 등에서 라이센스를 보유합니다. 현재 전 세계 온라인 포커 트래픽 1위로 알려져 있고, WSOP 온라인 브레이슬릿 이벤트를 진행하는 파트너사입니다.",
  },
  {
    name: "PokerStars (포커스타즈)",
    logo: "PS",
    logoColor: "from-red-600 to-red-800",
    tag: "업계 최장수 · 최대 역사",
    url: "https://www.pokerstars.com",
    license: "Malta (MGA) 등 다수",
    founded: "2001",
    features: ["WCOOP·SCOOP 대형 시리즈", "Flutter 그룹 소유", "안정적 소프트웨어"],
    note: "2001년 설립돼 2002년 서비스를 시작한 업계 대표 사이트로, 현재 Flutter Entertainment 그룹 소속입니다. 2025년 맨섬 라이센스를 반납하고 몰타(MGA) 등 여러 관할의 라이센스로 운영합니다. 매년 WCOOP·SCOOP 대형 토너먼트 시리즈를 엽니다.",
  },
  {
    name: "888poker (888포커)",
    logo: "888",
    logoColor: "from-orange-500 to-orange-700",
    tag: "상장사 운영 · 초보 친화",
    url: "https://www.888poker.com",
    license: "Malta (MGA), 영국(UKGC)",
    founded: "2002",
    features: ["Evoke plc(구 888 홀딩스) 운영", "초보자 테이블 분리", "888poker LIVE 연계"],
    note: "2002년 설립됐고 지브롤터에 본사를 둔 상장사 Evoke plc(구 888 Holdings)가 운영합니다. 몰타(MGA)·영국(UKGC) 등 신뢰도 높은 라이센스를 보유하며, 초보자용 테이블을 분리 운영하는 것으로 알려져 있습니다.",
  },
  {
    name: "IDNPoker (IDN포커)",
    logo: "IDN",
    logoColor: "from-purple-600 to-purple-800",
    tag: "아시아권 최대 네트워크",
    url: "https://www.idnpoker.com",
    license: "PAGCOR (필리핀)",
    founded: "2010",
    features: ["필리핀 마카티 본사", "BMM 공정성 감사·RNG 인증", "스킨/에이전트 방식 접속"],
    note: "필리핀 마카티에 본사를 둔 아시아권 최대 네트워크로, PAGCOR 라이센스와 BMM 공정성 감사를 받습니다. 단일 사이트가 아니라 200개 이상의 스킨(에이전트)을 통해 접속하는 네트워크 구조라, 어느 스킨·에이전트를 쓰느냐에 따라 안전성이 크게 달라집니다 — 특히 주의가 필요합니다.",
  },
  {
    name: "WPT Global (WPT글로벌)",
    logo: "WPT",
    logoColor: "from-emerald-600 to-emerald-800",
    tag: "WPT 공식 · 급성장",
    url: "https://www.wptglobal.com",
    license: "Costa Rica / Curaçao",
    founded: "2022",
    features: ["세계 포커 투어(WPT) 공식 온라인", "라이브 위성 토너먼트", "130개국 이상 서비스"],
    note: "세계 포커 투어(WPT)의 공식 온라인 플랫폼으로 2022년 4월 출범했습니다. 코스타리카/쿠라사오 관할의 라이센스로 운영되며 130개국 이상에서 서비스합니다. 라이브 WPT 이벤트로 이어지는 위성 토너먼트가 특징인 신생 성장 플랫폼입니다.",
  },
];

const CRITERIA = [
  {
    icon: Shield,
    title: "라이센스 · 규제기관",
    body: "몰타(MGA)·영국(UKGC)·맨섬 같은 공신력 있는 규제기관 라이센스가 공개돼 있는지 확인하세요. 코스타리카·쿠라사오 등은 상대적으로 규제 강도가 약하며, 회사·라이센스 정보가 불명확하면 경계 대상입니다.",
  },
  {
    icon: CheckCircle,
    title: "공정성 · 보안",
    body: "RNG(난수) 공정성 감사(BMM·eCOGRA 등) 여부, SSL 암호화, 2단계 인증 같은 계정 보안 기능이 있는지 봅니다. 감사·보안 정보가 전혀 없으면 위험 신호입니다.",
  },
  {
    icon: Scale,
    title: "자금 분리 · 출금 실적",
    body: "이용자 자금을 회사 운영자금과 분리 보관하는지, 실제 출금이 정상 처리된다는 후기와 처리 속도가 어떤지 확인하세요. 출금 지연·거부 신고가 많으면 피하는 게 좋습니다.",
  },
  {
    icon: Info,
    title: "평판 · 운영 이력",
    body: "오래되고 투명한 운영 이력, 명확한 회사 소재지·연락 창구가 있는지 봅니다. 익명 운영이거나 텔레그램·메신저로만 연락되는 곳, 정체불명의 에이전트가 권유하는 곳은 특히 조심해야 합니다.",
  },
];

const RED_FLAGS = [
  "라이센스·회사 정보가 없거나 확인되지 않음",
  "“100% 보장”, “무조건 수익” 같은 비현실적 광고 문구",
  "출금 지연·거부 후기가 반복적으로 올라옴 (먹튀 신호)",
  "공식 사이트·앱 없이 텔레그램·카톡으로만 운영",
  "과도한 가입·입금 압박, 정체불명의 “총판·에이전트” 권유",
  "국내 사설(불법) 사이트 — 이용·홍보 모두 법적 처벌 위험",
];

export default function Ranking() {
  const jsonLd = [
    {
      "@type": "ItemList",
      "name": "널리 알려진 온라인 홀덤 사이트 (정보 정리)",
      "description": "설립·라이센스 관할·알려진 특징 기준으로 정리한, 전 세계적으로 널리 알려진 온라인 텍사스 홀덤 사이트 목록 (정보 제공 목적, 순위·보증 아님)",
      "itemListElement": SITES.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": s.name,
        "url": s.url,
      })),
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "안전한 온라인 홀덤 사이트는 어떻게 고르나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "공신력 있는 규제기관(몰타 MGA·영국 UKGC·맨섬 등)의 라이센스, RNG 공정성 감사, 이용자 자금 분리 보관, 실제 출금 후기와 오랜 운영 이력을 확인하세요. 회사 정보가 불명확하거나 비현실적 보너스를 내세우고 텔레그램으로만 운영되는 곳은 피하는 것이 좋습니다.",
          },
        },
        {
          "@type": "Question",
          "name": "온라인 홀덤은 한국에서 합법인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "국내법상 온라인 실전 머니 게임은 제한되거나 불법에 해당할 수 있어 반드시 본인 책임하에 거주 지역의 합법성을 확인해야 합니다. 만 19세 미만은 이용이 금지됩니다. 오프라인 홀덤펍은 합법 범위 안에서 운영됩니다.",
          },
        },
        {
          "@type": "Question",
          "name": "먹튀·사기 홀덤 사이트를 피하려면 무엇을 봐야 하나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "라이센스·회사 정보가 확인되지 않거나, 출금 지연·거부 후기가 반복되거나, 무조건 수익을 보장하는 광고, 과도한 입금 유도, 공식 사이트 없이 메신저로만 운영되는 경우가 대표적인 위험 신호입니다.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.holdemmaster.com/" },
        { "@type": "ListItem", "position": 2, "name": "온라인 홀덤 사이트 가이드", "item": "https://www.holdemmaster.com/ranking" },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="온라인 홀덤 사이트, 안전하게 고르는 법 — 체크리스트 & 주요 사이트 비교 [2026]"
        description="온라인 홀덤 사이트를 찾기 전 꼭 확인할 안전·합법성 기준과 먹튀 경고 신호를 정리했습니다. 세계 주요 홀덤 사이트의 라이센스·규모·특징도 정보 목적으로 비교합니다."
        keywords="온라인 홀덤 사이트, 홀덤 사이트 추천, 안전한 홀덤 사이트, 홀덤 사이트 고르는 법, 먹튀 없는 홀덤, 온라인 포커 사이트, GGPoker, PokerStars, 888poker, IDN포커"
        path="/ranking"
        schema={jsonLd}
      />

      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-card to-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-bold mb-6">
            <Shield className="w-4 h-4" /> 안전·합법성 우선 가이드
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-4">
            온라인 홀덤 사이트<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-primary">제대로 고르는 법</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong className="text-foreground">온라인 홀덤 사이트</strong>를 찾고 있다면, 아래 세계 주요 사이트 정보와 함께
            <strong className="text-foreground"> 안전하게 가려내는 기준·먹튀 경고 신호</strong>를 먼저 확인하세요.
            어디에 가입하느냐만큼 <strong className="text-foreground">어떻게 안전한 곳을 고르느냐</strong>가 중요합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
            {[
              { icon: Info, text: "주요 사이트 정보" },
              { icon: Shield, text: "안전 기준 체크리스트" },
              { icon: AlertTriangle, text: "먹튀 경고 신호" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-muted-foreground">
                <Icon className="w-4 h-4 text-primary" /> {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 사이트 정보 정리 */}
      <section className="py-14 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 text-center">
            널리 알려진 주요 온라인 홀덤 사이트
          </h2>
          <p className="text-muted-foreground text-sm text-center mb-6 max-w-2xl mx-auto">
            전 세계적으로 이름이 알려진 사이트들의 <strong className="text-foreground">공개된 사실(설립·라이센스 관할·특징)</strong>을 정보 목적으로 정리했습니다.
            순위나 보증이 아니며, 아래 <strong className="text-foreground">안전 기준</strong>을 확인하고 <strong className="text-foreground">거주 지역의 합법성</strong>은 반드시 본인이 직접 확인하세요.
          </p>
          <div className="flex flex-col gap-6">
            {SITES.map((site, idx) => (
              <motion.div
                key={site.name}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="flex items-center gap-4 p-5 border-b border-border bg-background/40">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${site.logoColor} flex items-center justify-center text-white font-black text-lg flex-shrink-0`}>
                    {site.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-foreground">{site.name}</h3>
                    <span className="text-xs text-primary font-semibold">{site.tag}</span>
                  </div>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors text-sm font-bold whitespace-nowrap"
                  >
                    공식 사이트 <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{site.note}</p>
                    <div className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wider">알려진 특징</div>
                    {site.features.map(f => (
                      <div key={f} className="flex items-center gap-1.5 text-xs text-foreground mb-1">
                        <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <div className="bg-background rounded-xl p-4 flex flex-col gap-3 border border-border">
                    <div>
                      <div className="text-muted-foreground text-xs">라이센스 관할</div>
                      <div className="font-bold text-foreground text-sm">{site.license}</div>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="text-muted-foreground text-xs">설립</div>
                      <div className="font-bold text-foreground text-sm">{site.founded}년</div>
                    </div>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="sm:hidden inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors text-sm font-bold mt-1"
                    >
                      공식 사이트 <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/80 text-center mt-6">
            ※ 외부 링크는 각 사이트의 공식 도메인으로 연결되며, 홀덤마스터와 제휴·후원 관계가 없습니다. 접속·이용 가능 여부와 합법성은 지역에 따라 다릅니다.
          </p>
        </div>
      </section>

      {/* 고르는 기준 */}
      <section className="py-14 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 text-center">
            안전한 홀덤 사이트를 고르는 4가지 기준
          </h2>
          <p className="text-muted-foreground text-sm text-center mb-10 max-w-2xl mx-auto">
            아래 4가지 중 하나라도 확인되지 않으면, 아무리 광고가 화려해도 신중해야 합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CRITERIA.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-background border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 먹튀 경고 신호 */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-5">
            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-foreground">이런 사이트는 조심하세요 — 먹튀·사기 경고 신호</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RED_FLAGS.map(flag => (
              <div key={flag} className="flex items-start gap-2.5 bg-card border border-border rounded-xl p-4">
                <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">✕</span>
                <span className="text-sm text-foreground leading-relaxed">{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 지금 바로 — 무료로 할 수 있는 것 (합법) */}
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-2">
              <Play className="w-4 h-4" /> 가입 · 입금 없이 지금 바로
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              사이트를 고르기 전에 — 무료로 연습하고 계산하세요
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-2xl mx-auto">
              전부 무료이며 현금 가치가 없습니다. 실력을 먼저 갖추는 것이 어느 사이트에서든 가장 확실한 투자입니다.
            </p>
          </div>

          {/* 메인: 확률 계산기 */}
          <a href="/calculator" className="group block bg-gradient-to-br from-primary/15 to-background border border-primary/40 rounded-2xl p-6 mb-4 hover:border-primary transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Calculator className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-lg font-bold text-foreground mb-0.5">무료 홀덤 확률 계산기 — 지금 계산 ▶</div>
                <div className="text-sm text-muted-foreground">내 패의 승률 · 팟오즈를 즉시 계산. 어떤 상황에서 콜·폴드가 이득인지 숫자로 바로 확인하세요.</div>
              </div>
              <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* 서브: 퀴즈 · 차트 · 펍 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/quiz", icon: HelpCircle, title: "홀덤 실력 퀴즈", desc: "족보 · 확률 감각 테스트" },
              { href: "/hand-chart", icon: LayoutGrid, title: "스타팅 핸드 차트", desc: "어떤 패로 들어갈지 한눈에" },
              { href: "/pub", icon: MapPin, title: "내 주변 홀덤펍 찾기", desc: "오프라인에서 합법적으로 플레이" },
            ].map(({ href, icon: Icon, title, desc }) => (
              <a key={href} href={href} className="group bg-background border border-border rounded-xl p-4 hover:border-primary/40 transition-colors">
                <Icon className="w-5 h-5 text-primary mb-2" />
                <div className="font-bold text-foreground text-sm mb-0.5">{title}</div>
                <div className="text-xs text-muted-foreground">{desc}</div>
              </a>
            ))}
          </div>

          {/* 가벼운 몸풀기: 연습 게임 (강등) */}
          <a href="/holdem-practice" className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
            <Play className="w-3.5 h-3.5" /> 가볍게 몸풀기 — 무료 홀덤 연습 게임(간단 버전) 해보기
          </a>
        </div>
      </section>

      {/* 합법성·책임게임 고지 */}
      <section className="py-10 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-5 bg-card border border-border rounded-xl text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">⚠️ 합법성 · 책임게임 안내:</strong> 본 페이지는 정보 제공·교육 목적으로만 작성되었으며,
            특정 사이트를 순위 매기거나 보증·권유하지 않습니다. <strong className="text-foreground">한국을 포함한 여러 국가에서 온라인 실전 머니 게임은 법적으로 제한되거나 불법에 해당할 수 있습니다.</strong>
            반드시 거주 지역의 법적 기준을 본인 책임하에 확인하십시오. 만 19세 미만은 이용이 금지됩니다.
            홀덤은 오락으로 즐길 때 가치가 있으며, 도박은 중독 위험이 있습니다.
            도박 문제로 어려움을 겪는다면 <strong className="text-foreground">국번없이 1336 (한국도박문제예방치유원)</strong>에서 상담받을 수 있습니다.
          </div>
        </div>
      </section>

      {/* 시작 전에 — 내부 학습 링크 */}
      <section className="py-16 bg-card border-t border-border text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-3">
            <BookOpen className="w-4 h-4" /> 사이트를 고르기 전에
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3">먼저 실력을 갖추는 게 가장 확실한 투자입니다</h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-xl mx-auto">
            어느 사이트든, 규칙과 전략·자금 관리를 모르면 오래 버티지 못합니다.
            홀덤마스터의 무료 가이드로 기초부터 탄탄히 다져보세요.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {[
              { href: "/blog/texas-holdem-rules-for-beginners", title: "홀덤 규칙 완전 기초", desc: "카드 배분부터 베팅까지, 처음이라면 여기부터" },
              { href: "/blog/holdem-strategy", title: "홀덤 전략 로드맵", desc: "프리플랍부터 자금 관리까지 순서대로" },
              { href: "/blog/holdem-bankroll-management", title: "뱅크롤(자금) 관리", desc: "잃지 않고 오래 살아남는 자금 운용의 핵심" },
              { href: "/blog/holdem-pub-guide", title: "홀덤펍 이용 가이드", desc: "오프라인에서 합법적으로 즐기는 방법" },
            ].map(link => (
              <a key={link.href} href={link.href} className="group bg-background border border-border rounded-xl p-4 hover:border-primary/40 transition-colors flex items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-foreground text-sm mb-0.5">{link.title}</div>
                  <div className="text-xs text-muted-foreground">{link.desc}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
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
