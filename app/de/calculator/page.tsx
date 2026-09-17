import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorTool from "@/components/calculator/calculator-tool";
import HubPage from "@/components/hub-page";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_DE } from "./dict";
import { CALCULATOR_FAQ_DE } from "./faq";

/**
 * `/de/calculator` — ★2026-09-17 신설(10개 로케일 계산기 랜딩 동시 개설 회차).
 * 공용 컴포넌트 `components/calculator/calculator-tool.tsx` + 이 폴더의 사전(`dict.ts`)·FAQ(`faq.ts`)로 그린다.
 * 정본 구조 = `app/en/calculator/page.tsx` · hreflang 세트 = `lib/calculator-alternates.ts`(12코드 공용).
 * 용어 출처 = `docs/translation-terms-de.md`(정본) → `lib/posts-de/holdem-glossary.ts` → de 코퍼스 grep.
 *
 * 제목·설명에서 내린 판단 —
 *   ① 핵심명은 사장님 승인 CTA 「Poker-Odds-Rechner」(`components/intl-blog-post-client.tsx:30`)를 H1·title에
 *      그대로 둔다. 코퍼스 링크 앵커는 「Poker-Rechner」(5)·「ICM-Rechner」(4)가 더 많지만 승인명이 우선이고,
 *      HubPage(마스트헤드) 짧은 이름만 코퍼스 다수형 「Poker-Rechner」를 쓴다.
 *   ② 훅 «kostenlos»는 솔버 랜딩과 달리 title이 아니라 description 첫 단어에 둔다 — title은 EN처럼
 *      8개 도구의 키워드(Outs·Pot Odds·Equity·SPR·ICM)를 싣는 자리다(`poker rechner` 260 · `equity rechner` ·
 *      `outs berechnen` 30 — `docs/keyword-bank/de-core-volumes.md`·`de-gto-solver.md`).
 *   ③ 대시는 「–」(Halbgeviertstrich · terms §7-10), 「Pot Odds」는 단독 명사(하이픈은 합성어에서만).
 *   ④ 통화 $ 유지 = terms §3-A 기준 3(추상·토너먼트 예시). ICM 글과 같은 기준.
 * ⚠ `de-gto-solver.md` §4 「계산기 축 — de에 도구 페이지 없음」 메모는 이 파일로 낡았다.
 */
const TITLE = "Poker-Odds-Rechner – Outs, Pot Odds, Equity, SPR & ICM | HoldemMaster";
const DESCRIPTION =
  "Kostenloser Hold'em-Rechner: Outs & Draw-Odds, Pot Odds, Hand-Ranking, Starthand-Stärke, SPR, Turnier-M, ICM und Push/Fold-Nash-Charts – 8 Tools in einem.";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            독일어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/de/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "Poker-Odds-Rechner – HoldemMaster",
    description:
      "Outs, Pot Odds, Hand-Ranking, Starthände, SPR, M-Ratio und ICM – jede Hold'em-Zahl an einem Ort.",
    url: `${SITE}/de/calculator`,
    siteName: "HoldemMaster",
    locale: "de_DE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Poker-Odds-Rechner & ICM-Rechner",
      url: `${SITE}/de/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "de",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Outs-Rechner",
        "Pot-Odds- & Implied-Odds-Rechner",
        "Hand-Ranking (Handbewertung)",
        "Starthand-Stärke",
        "SPR-Rechner (Stack-to-Pot-Ratio)",
        "Turnier-M-Rechner",
        "ICM-Rechner (Independent Chip Model)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: `${SITE}/de` },
        { "@type": "ListItem", position: 2, name: "Rechner", item: `${SITE}/de/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_DE.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HubPage title="Poker-Rechner" locale="de">
        <CalculatorTool locale="de" dict={CALC_DICT_DE} faq={CALCULATOR_FAQ_DE} />
      </HubPage>
    </>
  );
}
