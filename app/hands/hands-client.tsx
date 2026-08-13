"use client";

import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import Link from "next/link";
import { HANDS } from "./hands-data";


export default function Hands() {

  const getSuitColor = (card: string) => {
    if (card.includes("♥") || card.includes("♦")) return "text-red-500";
    return "text-gray-900";
  };

  return (
    <>
      {/*
        🔴 title·description은 서버 page.tsx의 metadata가 정본이다 — 이 컴포넌트는 SPA 이동 시
        표시를 맞추는 보조 장치일 뿐이라 크롤러가 받는 HTML에는 안 들어간다(components/seo.tsx 주석).
        그래서 여기 값은 metadata와 **한 글자도 다르지 않게** 유지한다. 한쪽만 고치면
        브라우저 탭과 검색 결과가 갈린다.
        keywords는 뺐다 — 구글이 2009년부터 무시하는 신호이고, 실측 볼륨 0인 어구
        (「포커 족보 카드」·「홀덤 핸드 랭킹 카드」)가 들어 있어 조준을 흐린다.
      */}
      <SEO
        title="족보 헷갈릴 때 여는 표 — 포커 족보·홀덤족보 순위 10단계"
        description="로열플러시부터 하이카드까지 10단계를 예시 카드와 함께 한 장에 담았습니다. 홀덤 7장 기준 실제 확률까지 붙여, 게임 중 족보가 헷갈릴 때 바로 확인하는 표입니다."
        path="/hands"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-5">
            텍사스 홀덤 족보 순위
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong className="text-foreground">온라인홀덤</strong>이든 오프라인이든, 텍사스 홀덤에서 승패는
            <strong className="text-foreground"> 포커 족보(핸드 랭킹, 포커 패 순위)</strong>로 결정됩니다.
            자신의 홀 카드 2장 + 커뮤니티 카드 5장, 총 7장 중 최고의 5장 조합을 만들어야 합니다.
            <strong className="text-foreground"> 온라인 포커</strong>를 시작하기 전에 아래
            <strong className="text-foreground"> 홀덤 족보 순위 10가지</strong>를 반드시 암기하세요.
          </p>
        </div>

        {/* Quick Rank Table */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 bg-card border border-primary/20 rounded-xl p-5 overflow-x-auto"
        >
          <table className="w-full text-sm">
            <caption className="caption-top text-left text-xs text-muted-foreground pb-3">
              확률은 홀덤 실제 조건인 <strong className="text-foreground">7장 기준</strong>입니다(홀카드 2장 + 보드 5장에서 최강 5장).
              카드 5장만 뽑는 교과서 확률과는 다릅니다 — 하이카드가 투페어보다 드문 이유가 여기 있습니다.
            </caption>
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-muted-foreground font-medium">순위</th>
                <th className="text-left py-2 pr-4 text-muted-foreground font-medium">족보</th>
                <th className="text-right py-2 pr-4 text-muted-foreground font-medium whitespace-nowrap">확률(7장)</th>
                <th className="text-left py-2 text-muted-foreground font-medium">설명</th>
              </tr>
            </thead>
            <tbody>
              {HANDS.map((h) => (
                <tr key={h.rank} className="border-b border-border/50 hover:bg-background/50 transition-colors">
                  <td className="py-2 pr-4 font-bold text-primary">{h.rank}위</td>
                  <td className="py-2 pr-4 font-semibold text-foreground whitespace-nowrap">{h.name.split(" (")[0]}</td>
                  <td className="py-2 pr-4 text-right font-semibold text-foreground tabular-nums whitespace-nowrap">{h.prob}</td>
                  <td className="py-2 text-muted-foreground">{h.description.split(". ")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Detailed Cards */}
        <div className="grid gap-6">
          {HANDS.map((hand, index) => (
            <motion.div
              key={hand.rank}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className={`border rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12 transition-all ${hand.color}`}
            >
              <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3">
                <span className="text-primary/60 text-sm font-bold tracking-widest uppercase mb-1">
                  Rank {hand.rank}
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                  {hand.name}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{hand.description}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  홀덤 7장 기준 출현 확률{" "}
                  <strong className="text-foreground tabular-nums">{hand.prob}</strong>
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 md:w-2/3 md:justify-end">
                {hand.example.map((card, i) => (
                  <div
                    key={i}
                    className="w-12 h-16 md:w-16 md:h-24 bg-white rounded-md flex items-center justify-center border border-gray-300 shadow-md transform hover:-translate-y-2 transition-transform cursor-default"
                  >
                    <span className={`text-xl md:text-3xl font-bold font-sans tracking-tighter ${getSuitColor(card)}`}>
                      {card}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO Summary */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 bg-card border border-border rounded-xl p-6"
        >
          <h2 className="text-xl font-serif font-bold text-foreground mb-3">홀덤 족보 — 자주 묻는 질문</h2>
          <dl className="space-y-3 text-sm">
            {[
              { q: "플러시와 풀하우스 중 어느 것이 강한가요?", a: "풀하우스(4위)가 플러시(5위)보다 강합니다." },
              { q: "포커에서 스트레이트에서 A는 어떻게 사용하나요?", a: "A는 A-K-Q-J-10 (최강 스트레이트) 또는 A-2-3-4-5 (휠, 가장 약한 스트레이트) 양쪽으로 사용 가능합니다." },
              { q: "텍사스 홀덤 족보가 동일하면 어떻게 되나요?", a: "키커(kicker, 나머지 높은 카드)로 비교하고, 그것도 같으면 팟을 나눕니다(스플릿 팟)." },
              { q: "홀덤 족보를 가장 빠르게 외우는 방법은?", a: "로플포풀플스트투원하 — '로·플·포·풀·플·스·트·투·원·하' 로 10가지를 순서대로 외우세요." },
              { q: "온라인 포커에서도 오프라인과 같은 족보를 사용하나요?", a: "네, GGPoker·PokerStars 등 모든 온라인홀덤 사이트에서 동일한 족보 순위가 적용됩니다." },
            ].map(({ q, a }) => (
              <div key={q}>
                <dt className="font-semibold text-foreground">{q}</dt>
                <dd className="text-muted-foreground mt-0.5 pl-2">{a}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Related pages */}
        <motion.nav
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          aria-label="관련 가이드"
          className="mt-8"
        >
          <div className="mb-5 p-4 bg-primary/5 border border-primary/20 rounded-xl">
            <p className="text-sm text-muted-foreground mb-2">📖 족보 순서를 <strong className="text-foreground">왜 그렇게 외워야 하는지</strong> 확률과 함께 더 깊이 알고 싶다면</p>
            <Link href="/blog/holdem-hand-rankings" className="text-primary font-bold text-sm hover:underline">
              → 홀덤 족보 순위 완전 정리 — 확률·보드 판단까지 한 번에 읽기
            </Link>
          </div>
          <h2 className="text-base font-bold text-muted-foreground mb-4">다음으로 읽어보세요</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { href: "/rules", label: "기초 규칙", desc: "블라인드·쇼다운 6단계" },
              { href: "/strategy", label: "전략 가이드", desc: "포지션·팟 오즈·블러핑" },
              { href: "/glossary", label: "용어 사전", desc: "필수 홀덤 용어 26개" },
              { href: "/ranking", label: "추천 사이트", desc: "TOP5 홀덤 사이트" },
              { href: "/blog", label: "전략 블로그", desc: "실전 전략 칼럼" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href}>
                <div className="bg-card border border-border rounded-lg p-3 hover:border-primary/50 hover:bg-primary/5 transition-all text-center group">
                  <div className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </motion.nav>
      </div>
    </>
  );
}
