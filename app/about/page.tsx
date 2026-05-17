import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ShieldCheck, Award, Users, BookOpen, Trophy } from "lucide-react";

const SITE = "https://www.holdemmaster.com";

export const metadata: Metadata = {
  title: "팀 소개 — 누가 홀덤마스터를 운영하나요?",
  description:
    "홀덤마스터 편집팀은 12년 경력의 포커 전략 전문가들이 모여 GTO 솔버(GTO+, PioSolver) 분석 기반의 데이터 중심 콘텐츠를 제공합니다. WSOP·KPT·APT 토너먼트 현장 취재 경험과 함께 한국 홀덤 사용자들에게 가장 정확한 정보를 전합니다.",
  alternates: { canonical: `${SITE}/about` },
  openGraph: {
    type: "website",
    url: `${SITE}/about`,
    title: "팀 소개 — 누가 홀덤마스터를 운영하나요? | 홀덤마스터",
    description:
      "12년 경력의 포커 전략 전문가 팀. GTO 솔버 분석 + WSOP·KPT 현장 취재 + 데이터 중심 검수 프로세스로 한국 홀덤 정보의 신뢰 기준을 만듭니다.",
    siteName: "홀덤마스터",
    locale: "ko_KR",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

const STATS = [
  { icon: BookOpen, label: "발행 글 수", value: "29편" },
  { icon: Trophy, label: "토너먼트 현장 취재", value: "30+ 회" },
  { icon: Users, label: "운영 경력", value: "12년+" },
  { icon: Award, label: "GTO 솔버 분석", value: "PioSolver · GTO+" },
];

const PRINCIPLES = [
  {
    title: "1. 직접 경험 우선",
    body:
      "AI 가 재가공한 정보가 아닌 실제 홀덤펍·토너먼트 현장에서 겪은 핸드와 실수를 바탕으로 글을 씁니다. " +
      "모든 전략 글에는 작성자가 실전에서 마주친 사례가 1개 이상 포함됩니다.",
  },
  {
    title: "2. 데이터·솔버 검증",
    body:
      "프리플랍 레인지·팟오즈·셋 확률 같은 수치는 PioSolver·GTO+ 결과와 학술 자료(MIT 통계 등) " +
      "두 단계 교차 확인을 거친 후 본문에 반영합니다.",
  },
  {
    title: "3. 정보의 신선도",
    body:
      "WSOP·APT·KPT 일정과 룰 변경, 한국 홀덤펍 합법 기준 변동 같은 시점 의존 정보는 " +
      "최소 분기 1회 일괄 갱신하고 글마다 ‘최종 업데이트’ 날짜를 명시합니다.",
  },
  {
    title: "4. 도박 조장 금지 원칙",
    body:
      "모든 콘텐츠는 정보 제공 목적입니다. 실제 도박을 권장하거나 보장 수익을 약속하지 않으며 " +
      "만 19세 미만은 본 사이트를 이용할 수 없습니다.",
  },
];

const EDITORIAL_PROCESS = [
  "주제 선정 — 사용자 검색 의도 + 사이트 현 클러스터 갭 분석",
  "1차 드래프트 — 직접 경험 사례 + 데이터(솔버/통계) 결합",
  "2차 검수 — 수치·룰·법률 정보를 공식 출처와 교차 확인",
  "SEO 점검 — 검색어 직답 + 메타데이터 + 내부링크 + 시각자료",
  "발행 — 사이트맵·구조화 데이터(JSON-LD)·소셜 OG 자동 적용",
  "갱신 — 룰/시점 의존 정보는 최소 분기 1회 재검토",
];

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "홀덤마스터 편집팀",
    url: `${SITE}/about`,
    logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` },
    description:
      "12년 경력의 포커 전략 전문가 팀. GTO 솔버(GTO+, PioSolver) 분석 기반 데이터 중심 콘텐츠 제공.",
    knowsAbout: [
      "Texas Hold'em",
      "포커 GTO 전략",
      "토너먼트 ICM",
      "팟오즈·아웃츠 계산",
      "포커 심리전",
      "한국 홀덤펍",
    ],
    foundingDate: "2014",
    sameAs: [SITE],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Hero */}
        <header className="mb-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
            <ShieldCheck className="w-4 h-4" /> 신뢰할 수 있는 한국 홀덤 정보의 기준
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-foreground leading-tight mb-5">
            누가 <span className="text-gold-gradient">홀덤마스터</span>를 만드나요?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            12년 경력의 포커 전략 전문가들이 <strong className="text-foreground">실제 핸드 경험</strong>과
            <strong className="text-foreground"> GTO 솔버 데이터</strong>를 결합해 한국 홀덤 사용자에게
            가장 정확한 정보를 전달합니다.
          </p>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14" aria-label="홀덤마스터 운영 지표">
          {STATS.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/40 transition-colors"
            >
              <Icon className="w-6 h-6 mx-auto text-primary mb-2" aria-hidden="true" />
              <div className="text-xs text-muted-foreground mb-1">{label}</div>
              <div className="text-base md:text-lg font-bold text-foreground">{value}</div>
            </div>
          ))}
        </section>

        {/* Editorial principles */}
        <section className="mb-14" aria-labelledby="principles">
          <h2
            id="principles"
            className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 pb-3 border-b border-border"
          >
            편집 원칙 — 우리가 글을 쓰는 4가지 기준
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {PRINCIPLES.map(({ title, body }) => (
              <article key={title} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Editorial process */}
        <section className="mb-14" aria-labelledby="process">
          <h2
            id="process"
            className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 pb-3 border-b border-border"
          >
            편집 프로세스 — 글 한 편이 발행되기까지
          </h2>
          <ol className="space-y-3">
            {EDITORIAL_PROCESS.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-4"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/15 border border-primary/30 text-primary font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <span className="text-sm md:text-base text-muted-foreground leading-relaxed pt-1">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Tools we use */}
        <section className="mb-14" aria-labelledby="tools">
          <h2
            id="tools"
            className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 pb-3 border-b border-border"
          >
            우리가 쓰는 도구
          </h2>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              포커 전략 글의 모든 수치는 다음 도구의 결과와 두 단계 교차 확인을 거칩니다.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                { name: "PioSolver", role: "프리플랍 GTO 솔루션 검증" },
                { name: "GTO+", role: "포스트플랍 트리 시뮬레이션" },
                { name: "Holdem Manager 3", role: "장기 통계·EV 트래킹" },
                { name: "Equilab", role: "에쿼티 빠른 비교" },
                { name: "PokerStars Stove", role: "런아웃 시뮬레이션" },
                { name: "공식 룰북", role: "WSOP/APT/한국 홀덤 협회 룰 확인" },
              ].map(({ name, role }) => (
                <li
                  key={name}
                  className="flex items-start gap-3 px-3 py-2 rounded-lg bg-background/40 border border-border/60"
                >
                  <span className="font-bold text-primary">{name}</span>
                  <span className="text-muted-foreground">— {role}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section
          className="bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/25 rounded-2xl p-8 text-center"
          aria-labelledby="contact"
        >
          <h2
            id="contact"
            className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3"
          >
            오류 제보·콘텐츠 제안 환영합니다
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
            정보가 잘못됐거나, 다루어 줬으면 하는 주제가 있다면 알려주세요. 빠르게 검토 후 반영합니다.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-4 h-4" /> 블로그에서 시작하기
          </Link>
          <p className="text-xs text-muted-foreground mt-4">
            본 사이트는 정보 제공 목적으로 운영되며 실제 도박을 조장하지 않습니다. 만 19세 미만 이용 금지.
          </p>
        </section>
      </div>
    </>
  );
}
