"use client";

import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import Link from "next/link";

const HANDS = [
  {
    rank: 1,
    name: "로열 플러시 (Royal Flush)",
    description: "같은 무늬의 10, J, Q, K, A — 포커 최강의 패. 확률 약 0.000154%.",
    example: ["A♠", "K♠", "Q♠", "J♠", "10♠"],
    color: "border-primary shadow-[0_0_30px_rgba(212,175,55,0.4)] bg-primary/10",
  },
  {
    rank: 2,
    name: "스트레이트 플러시 (Straight Flush)",
    description: "같은 무늬의 연속된 카드 5장. 로열 플러시 다음으로 강한 패.",
    example: ["9♥", "8♥", "7♥", "6♥", "5♥"],
    color: "border-primary/70 bg-card",
  },
  {
    rank: 3,
    name: "포카드 (Four of a Kind)",
    description: "동일한 숫자 4장. 포카드 중에선 숫자가 높을수록 강합니다.",
    example: ["8♣", "8♦", "8♥", "8♠", "K♥"],
    color: "border-border bg-card",
  },
  {
    rank: 4,
    name: "풀하우스 (Full House)",
    description: "트리플(3장)과 원페어(2장)의 결합. 트리플 숫자가 높을수록 강합니다.",
    example: ["Q♠", "Q♥", "Q♦", "5♣", "5♠"],
    color: "border-border bg-card",
  },
  {
    rank: 5,
    name: "플러시 (Flush)",
    description: "숫자 무관, 같은 무늬 5장. 최고 카드 숫자가 높을수록 강합니다.",
    example: ["A♦", "J♦", "8♦", "6♦", "2♦"],
    color: "border-border bg-card",
  },
  {
    rank: 6,
    name: "스트레이트 (Straight)",
    description: "무늬 무관, 연속된 숫자 5장. A는 최고(A-K-Q-J-10) 또는 최저(A-2-3-4-5)로 사용 가능.",
    example: ["7♠", "6♥", "5♣", "4♦", "3♠"],
    color: "border-border bg-card",
  },
  {
    rank: 7,
    name: "트리플 / 쓰리카드 (Three of a Kind)",
    description: "동일한 숫자 3장. 세트(포켓페어+커뮤니티 1장)와 트립스(커뮤니티 페어+홀카드 1장)로 나뉩니다.",
    example: ["J♣", "J♠", "J♥", "A♦", "4♠"],
    color: "border-border bg-card",
  },
  {
    rank: 8,
    name: "투페어 (Two Pair)",
    description: "서로 다른 숫자의 페어 2개. 높은 페어 → 낮은 페어 → 키커 순으로 비교합니다.",
    example: ["10♠", "10♥", "8♣", "8♦", "A♠"],
    color: "border-border bg-card",
  },
  {
    rank: 9,
    name: "원페어 (One Pair)",
    description: "동일한 숫자 2장. 페어 숫자 → 키커(나머지 카드) 순으로 우열을 가립니다.",
    example: ["K♠", "K♦", "9♥", "6♣", "2♠"],
    color: "border-border bg-card",
  },
  {
    rank: 10,
    name: "하이카드 (High Card)",
    description: "아무런 족보도 없을 때, 가장 높은 숫자의 카드로 비교합니다. 에이스 하이카드가 최강.",
    example: ["A♣", "Q♠", "9♥", "5♦", "3♣"],
    color: "border-border bg-card",
  },
];

export default function Hands() {
  const jsonLd = [
    {
      "@type": "Article",
      "headline": "텍사스 홀덤 족보 순위 — 포커 핸드 랭킹 완벽 정리 2026",
      "description": "로열 플러시부터 하이카드까지 텍사스 홀덤 포커 족보 순위를 예시 카드와 함께 정리했습니다.",
      "author": { "@type": "Organization", "name": "홀덤마스터" },
      "publisher": { "@type": "Organization", "name": "홀덤마스터", "url": "https://holdemmaster.com" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://holdemmaster.com/" },
        { "@type": "ListItem", "position": 2, "name": "홀덤 족보 순위", "item": "https://holdemmaster.com/hands" },
      ],
    },
  ];

  const getSuitColor = (card: string) => {
    if (card.includes("♥") || card.includes("♦")) return "text-red-500";
    return "text-gray-900";
  };

  return (
    <>
      <SEO
        title="⚡ 홀덤 족보 순위 10가지 — 온라인 포커 필수 암기표 [2026]"
        description="⚡홀덤 족보⚡ 10가지 완벽 정리! 로열플러시·포카드·풀하우스 등 예시 카드·확률과 함께 정리했습니다. 한번 보면 절대 안 헷갈립니다."
        keywords="포커 족보 순서, 텍사스 홀덤 족보, 홀덤 족보 순위, 포커 핸드 랭킹, 로열 플러시 확률, 풀하우스 플러시 비교, 홀덤 족보 외우기, 포커 패 순서, 스트레이트 플러시, 포카드 족보"
        path="/hands"
        schema={jsonLd}
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
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-muted-foreground font-medium">순위</th>
                <th className="text-left py-2 pr-4 text-muted-foreground font-medium">족보</th>
                <th className="text-left py-2 text-muted-foreground font-medium">설명</th>
              </tr>
            </thead>
            <tbody>
              {HANDS.map((h) => (
                <tr key={h.rank} className="border-b border-border/50 hover:bg-background/50 transition-colors">
                  <td className="py-2 pr-4 font-bold text-primary">{h.rank}위</td>
                  <td className="py-2 pr-4 font-semibold text-foreground whitespace-nowrap">{h.name.split(" (")[0]}</td>
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
