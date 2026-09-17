import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorTool from "@/components/calculator/calculator-tool";
import HubPage from "@/components/hub-page";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_ES } from "./dict";
import { CALCULATOR_FAQ_ES } from "./faq";

/**
 * `/es/calculator` — `/calculator`(ko)·`/en/calculator`의 스페인어판. ★2026-09-17 신설.
 * 정본 구조 = `app/en/calculator/page.tsx`. 화면은 공용 `components/calculator/calculator-tool.tsx`에
 * `dict.ts`(CALC_DICT_ES) + `faq.ts`(CALCULATOR_FAQ_ES)만 꽂는다 — 로케일 전용 클라이언트 파일 없음.
 * 독자 = 멕시코·US 히스패닉·남미(스페인 아님) → LATAM 중립 tú, voseo 없음.
 * 용어 출처: `docs/translation-terms-es.md` → `lib/posts-es/holdem-glossary.ts` → holdem-icm/outs/pot-odds/short-stack 실제 표기.
 * 제목·설명에서 내린 판단:
 *  ① 핵심어는 사장님 승인 «Calculadora de probabilidades»(H1·title 공통). 검색 표면은 무악센트 «poker»
 *     (솔버 랜딩·seoTitle 관례 32:4), 산문은 «póker». 뱅크: `calculadora de poker` ES 170·MX 70·SD 1,
 *     `calculadora de probabilidades poker` 20·SD 8, `calculadora de odds poker` 20·SD 9(es-gto-solver.md).
 *  ② 꼬리는 EN의 5개 대신 «outs, pot odds e ICM» 3개 — 「~60자」 안에 넣기 위해 SPR·jerarquía는 desc로 내렸다.
 *  ③ 숫자 형식은 EN 그대로(`numberLocale: "en-US"`) — es 코퍼스 실측 콤마 1,421 : 점 178, 통화는 맨 `$`.
 *  ④ OG locale은 솔버 랜딩과 같은 `es_ES`(hreflang 세트 `es-ES`와 짝) · inLanguage "es" · priceCurrency는 EN과 같은 USD
 *     (LATAM 독자, 예시 통화도 $). 지원 언어 목록은 어디에도 적지 않는다(2026-09-09 규칙).
 */

const TITLE = "Calculadora de probabilidades de poker — outs, pot odds e ICM | HoldemMaster";
const DESCRIPTION =
  "Calculadora de poker gratis: outs, pot odds, evaluador de manos, manos iniciales, SPR, M de torneo, ICM y tabla push/fold de Nash — 8 herramientas en una.";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            스페인어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/es/calculator`,
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
      "Outs, pot odds, jerarquía de manos, manos iniciales, SPR, valor M e ICM — todos los números del Hold'em en un solo lugar.",
    url: `${SITE}/es/calculator`,
    siteName: "HoldemMaster",
    locale: "es_ES",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Calculadora de probabilidades de poker y calculadora de ICM",
      url: `${SITE}/es/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "es",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Calculadora de outs",
        "Calculadora de pot odds y odds implícitas",
        "Evaluador de manos",
        "Fuerza de la mano inicial",
        "Calculadora de SPR (Stack-to-Pot Ratio)",
        "Calculadora de M de torneo",
        "Calculadora de ICM (Independent Chip Model)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE}/es` },
        { "@type": "ListItem", position: 2, name: "Calculadora", item: `${SITE}/es/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_ES.map((f) => ({
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
      <HubPage title="Calculadora" locale="es">
        <CalculatorTool locale="es" dict={CALC_DICT_ES} faq={CALCULATOR_FAQ_ES} />
      </HubPage>
    </>
  );
}
