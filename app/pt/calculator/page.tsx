import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_PT } from "./dict";
import { CALCULATOR_FAQ_PT } from "./faq";

/**
 * `/pt/calculator` — `/calculator`(ko)·`/en/calculator`의 포르투갈어(pt-BR)판. ★2026-09-17 신설.
 * 정본 구조 = `app/en/calculator/page.tsx`. 화면은 **공용 컴포넌트** `components/calculator/calculator-tool.tsx`가
 * `./dict.ts`(CALC_DICT_PT) + `./faq.ts`(CALCULATOR_FAQ_PT) 하나로 그린다 — 로케일 전용 client 파일 없음.
 * 용어 출처: `docs/translation-terms-pt.md` → `lib/posts-pt/holdem-glossary.ts` → `lib/posts-pt/holdem-icm.ts`·
 *   `holdem-outs.ts`·`holdem-pot-odds.ts`·`holdem-short-stack.ts`·`holdem-hand-rankings.ts`(족보 이름 축어).
 * 제목·설명에서 내린 판단:
 *   ① 핵심어는 사장님 승인 «Calculadora de probabilidades» + `de poker`를 붙였다 — 단독 «calculadora de probabilidades»는
 *      수학·통계 의도가 섞이므로 솔버 랜딩의 «solver는 poker와 붙여 쓴다» 규율과 같은 이유.
 *   ② 검색어는 `calculadora de poker` 170 · `calculadora de odds poker` 110(`docs/keyword-bank/pt-gto-solver.md`) →
 *      desc 첫 구절을 «Calculadora de poker grátis»로, 제목 뒤쪽에 outs·pot odds·ICM(코퍼스 영어 유지어)을 실었다.
 *   ③ 숫자 표기는 브라질식(3.000 ÷ 13.000 · 23,1%) · 통화는 §13 보존을 위해 `$` 유지(holdem-icm.ts와 동일) ·
 *      `/pt/tournaments`는 존재하지 않으므로 링크는 전부 `lib/posts-pt/<slug>.ts` 실존 글(7/7 확인)만 가리킨다.
 */

const TITLE = "Calculadora de probabilidades de poker — outs, pot odds e ICM | HoldemMaster";
const DESCRIPTION =
  "Calculadora de poker grátis: outs, pot odds, ranking de mãos, mão inicial, SPR, M-ratio de torneio, ICM e tabela push/fold de Nash — 8 ferramentas em uma.";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            포르투갈어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/pt/calculator`,
    // 🔴 12개 랜딩이 «같은 문자열 세트»를 선언해야 `check:hreflang`을 통과한다 — 한 곳(`lib/calculator-alternates.ts`)에서 가져온다.
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "Calculadora de probabilidades de poker — HoldemMaster",
    description:
      "Outs, pot odds, ranking de mãos, mão inicial, SPR, M-ratio e ICM — todos os números do Hold'em em um só lugar.",
    url: `${SITE}/pt/calculator`,
    siteName: "HoldemMaster",
    locale: "pt_BR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Calculadora de probabilidades de poker e calculadora de ICM",
      url: `${SITE}/pt/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "pt-BR",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Calculadora de outs",
        "Calculadora de pot odds e implied odds",
        "Ranking de mãos (avaliador de mão)",
        "Força da mão inicial",
        "Calculadora de SPR (stack-to-pot ratio)",
        "Calculadora de M-ratio de torneio",
        "Calculadora de ICM (Independent Chip Model)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/pt` },
        { "@type": "ListItem", position: 2, name: "Calculadora", item: `${SITE}/pt/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_PT.map((f) => ({
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
      <HubPage title="Calculadora" locale="pt">
        <CalculatorTool locale="pt" dict={CALC_DICT_PT} faq={CALCULATOR_FAQ_PT} />
      </HubPage>
    </>
  );
}
