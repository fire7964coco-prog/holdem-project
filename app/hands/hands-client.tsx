"use client";

import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import Link from "next/link";
import { HANDS, FAQS } from "./hands-data";


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
        title="족보 헷갈릴 때 여는 표 — 포커 족보·홀덤족보 순위"
        description="로열플러시부터 하이카드까지 포커 족보 10단계를 예시 카드와 7장 기준 확률로 한 장에 담았습니다. 게임 중 홀덤족보가 헷갈릴 때 바로 열어 확인하는 표입니다."
        path="/hands"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        {/*
          ★H1 조준 (2026-08-13 라쿠 실측): 「포커 족보」 18,100 · 「홀덤족보」 8,100 ·
            텍사스 홀덤 족보 2,400 · 홀덤 족보 순위 390.
            원래 H1이 「텍사스 홀덤 족보 순위」라 이 판 최대어(포커 족보)를 비켜 있었다.
          🔴 카니발 방지 — 필라(blog/holdem-hand-rankings)의 H1은 「홀덤 족보 순위 10가지」다.
            이 페이지는 «표»를, 필라는 «설명»을 맡는다. 리드도 그 역할대로 썼다.
          ⚠ 리드에서 「온라인홀덤」 3회 반복을 걷어냈다 — 키워드 억지삽입은 posting.mdc §DON'T다.
        */}
        <div className="text-center mb-8">
          {/*
            🔴 H1에서 「포커 족보 순위」 축어를 비웠다 (2026-08-13 카니발 렌즈 적발).
              필라가 desc·tldr·H2·정리 H2 **네 자리**에서 「포커 족보 순위 …10단계」를 쓰고 있어
              H1이 그걸 글자 그대로 반복하면 패시지 단위에서 두 페이지가 같은 질의로 붙는다.
              최대어 「포커 족보」(18,100)는 그대로 두고 꼬리만 «표»로 돌려 의도를 갈랐다.
            ⚠ 「텍사스 홀덤 족보」(2,400)는 두 페이지 어디에도 연속 문자열이 없어 비어 있었다 —
              리드 첫 문장에 **1회만** 자연스럽게 넣는다(반복은 §DON'T).
          */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            포커 족보 10단계 표 — 강한 순서대로
          </h1>
          {/*
            ⚠ 한 문장에 주어를 두 번 갈지 말 것 — 「…표이고, 홀덤은 … 때문에 실었습니다」로 이어 붙였다가
              주어가 세 번 바뀌는 비문이 됐다(2026-08-13 교열 렌즈). 마침표로 끊는다.
              「강한 순서」는 H1이 이미 말하므로 리드에서 되풀이하지 않는다.
          */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            텍사스 홀덤 족보는 로열플러시부터 하이카드까지 10단계입니다. 아래 홀덤족보 표가 그 순서입니다.
            홀덤은 홀 카드 2장 + 보드 5장, {" "}
            <strong className="text-foreground">총 7장에서 가장 좋은 5장</strong>을 골라 겨루기 때문에
            확률도 7장 기준으로 실었습니다. 게임 중 헷갈릴 때 이 페이지만 열어 확인하세요.
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

        {/*
          Detailed Cards — ★2026-08-13 압축 (사장님 지시).
          실측: 이 구간이 2,431px로 **문서의 53.4%**를 먹고 있었다(데스크톱 1440×900).
          카드당 204~262px · 패딩 32px · 제목 30px가 왼쪽 컬럼 282px를 넘겨 **2줄로 깨졌다.**
          → 패딩·간격·글자를 줄이고, 한글명과 영문명을 한 줄에 크기 차이로 배치해 줄바꿈을 없앴다.
          카드 그림 자체는 남긴다 — 초보가 «무엇이 그 족보인지»를 눈으로 확인하는 장치이고,
          그게 위쪽 표에 없는 이 구간의 존재 이유다.
        */}
        <div className="grid gap-3">
          {HANDS.map((hand, index) => {
            const ko = hand.name.split(" (")[0];
            const en = hand.name.split(" (")[1]?.replace(")", "") ?? "";
            return (
              <motion.div
                key={hand.rank}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className={`border rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 transition-all ${hand.color}`}
              >
                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-[46%] md:flex-shrink-0">
                  <h2 className="font-serif font-bold text-foreground leading-snug text-base md:text-lg">
                    <span className="mr-1.5 font-sans text-xs font-bold tracking-wider text-primary/70">
                      {hand.rank}위
                    </span>
                    {ko}
                    <span className="ml-1.5 font-sans text-xs font-normal text-muted-foreground">{en}</span>
                  </h2>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{hand.description}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    홀덤 7장 기준{" "}
                    <strong className="text-foreground tabular-nums">{hand.prob}</strong>
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 md:flex-1 md:justify-end">
                  {hand.example.map((card, i) => (
                    <div
                      key={i}
                      className="flex h-14 w-10 items-center justify-center rounded border border-gray-300 bg-white shadow-sm transition-transform hover:-translate-y-1 md:h-16 md:w-11"
                    >
                      <span className={`font-sans text-sm font-bold tracking-tighter md:text-base ${getSuitColor(card)}`}>
                        {card}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SEO Summary */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 bg-card border border-border rounded-xl p-6"
        >
          <h2 className="text-xl font-serif font-bold text-foreground mb-3">포커 족보 — 자주 묻는 질문</h2>
          <dl className="space-y-3 text-sm">
            {FAQS.map(({ q, a, href, linkLabel }) => (
              <div key={q}>
                <dt className="font-semibold text-foreground">{q}</dt>
                <dd className="text-muted-foreground mt-0.5 pl-2">
                  {a}
                  {href && (
                    <>
                      {" "}
                      <Link href={href} className="text-primary font-semibold hover:underline">
                        {linkLabel} →
                      </Link>
                    </>
                  )}
                </dd>
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
          {/*
            🔴 앵커를 «질의»가 아니라 «역할»로 바꿨다 (2026-08-13 카니발 렌즈).
              전 문구는 「홀덤 족보 순위 완전 정리」였는데 두 문제가 있었다 —
              ① 이 페이지의 title이 「…홀덤족보 순위」인데 본문 앵커로 같은 질의를 필라에 넘겨
                 구글에 서로 반대되는 신호를 동시에 줬다
              ② 「완전 정리」는 §17 금지어(「완벽 정리」·「총정리」)와 같은 계열이다.
              필라의 차별화 단어(왜·근거·확률)를 앵커에 실어 역할 분리를 링크 신호로도 강화한다.
          */}
          <div className="mb-5 p-4 bg-primary/5 border border-primary/20 rounded-xl">
            <p className="text-sm text-muted-foreground mb-2">📖 표만으로 부족하고 <strong className="text-foreground">순서의 근거</strong>까지 알고 싶다면</p>
            <Link href="/blog/holdem-hand-rankings" className="text-primary font-bold text-sm hover:underline">
              → 족보 순서가 왜 이 순서인지 — 7장 기준 확률로 보는 근거
            </Link>
          </div>
          <h2 className="text-base font-bold text-muted-foreground mb-4">다음으로 읽어보세요</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { href: "/rules", label: "기초 규칙", desc: "블라인드·쇼다운 6단계" },
              { href: "/strategy", label: "전략 가이드", desc: "포지션·팟 오즈·블러핑" },
              { href: "/glossary", label: "용어 사전", desc: "필수 홀덤 용어 26개" },
              // ★앵커에 「홀덤사이트」를 담는다(2026-08-28) — 근거는 glossary-client 동일 자리 주석.
              { href: "/ranking", label: "홀덤사이트 고르는 법", desc: "안전 기준·먹튀 경고 신호" },
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
