"use client";

import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Shield, AlertTriangle, Scale, BookOpen, Info, Play, MapPin, Calculator, LayoutGrid, HelpCircle, ExternalLink } from "lucide-react";
import { SEO } from "@/components/seo";
// ★SITES·FAQS는 `ranking-data.ts`로 옮겼다 — 서버 page.tsx의 JSON-LD와 **같은 배열**을 써야 한다.
import { SITES, FAQS } from "./ranking-data";

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
  return (
    <>
      <SEO
        title="온라인 홀덤 사이트, 안전하게 고르는 법 — 체크리스트 & 주요 사이트 비교 [2026]"
        description="온라인 홀덤 사이트를 찾기 전 꼭 확인할 안전·합법성 기준과 먹튀 경고 신호를 정리했습니다. 세계 주요 홀덤 사이트의 라이센스·규모·특징도 정보 목적으로 비교합니다."
        keywords="온라인 홀덤 사이트, 홀덤 사이트 추천, 안전한 홀덤 사이트, 홀덤 사이트 고르는 법, 먹튀 없는 홀덤, 온라인 포커 사이트, GGPoker, PokerStars, 888poker, IDN포커"
        path="/ranking"
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

      {/* 자주 묻는 질문 — ★서버 page.tsx의 FAQPage 스키마와 **같은 FAQS 배열**을 쓴다.
          스키마에만 있고 화면에 없으면 구글 FAQPage 스펙 위반이고, LLM도 읽지 못한다. */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-foreground">온라인 홀덤 사이트 자주 묻는 질문</h2>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map(faq => (
              <div key={faq.q} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-bold text-foreground text-sm mb-2 flex items-start gap-2">
                  <span className="text-primary font-serif text-base flex-shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-5">{faq.a}</p>
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
              { href: "/win-rate-quiz", icon: HelpCircle, title: "승률 시뮬레이터 🎯", desc: "카드마다 승률이 어떻게 바뀌나" },
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
