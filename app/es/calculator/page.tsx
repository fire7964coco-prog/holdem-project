import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorTool from "@/components/calculator/calculator-tool";
import HubPage from "@/components/hub-page";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_ES } from "./dict";
import { CALCULATOR_FAQ_ES } from "./faq";

/**
 * `/es/calculator` — `/calculator`(ko)·`/en/calculator`의 스페인어판. ★2026-09-17 신설.
 * ★2026-09-17 (es 회차) 재조준 — EN 재저작(b337e436)·ja·zh·zh-hant(cf2ba10f)와 동형: Equity 탭 · quickRef 6표 · FAQ 18 · 메타 재조준.
 *   근거 = docs/keyword-bank/es-calculator.md(DFS 볼륨 MX·AR·CO·ES · 자동완성 5지역 50시드 · SERP 3쿼리 · 상위 9페이지 구조).
 * 정본 구조 = `app/en/calculator/page.tsx`. 화면은 공용 `components/calculator/calculator-tool.tsx`에
 * `dict.ts`(CALC_DICT_ES) + `faq.ts`(CALCULATOR_FAQ_ES)만 꽂는다 — 로케일 전용 클라이언트 파일 없음.
 * 독자 = 멕시코·US 히스패닉·남미(스페인 아님) → LATAM 중립 tú, voseo 없음.
 * 용어 출처: `docs/translation-terms-es.md` → `lib/posts-es/holdem-glossary.ts` → holdem-icm/outs/pot-odds/short-stack 실제 표기.
 *
 * 🔴 title/description은 CALC_DICT_ES.seo에서 가져온다 — 클라이언트 <SEO>가 같은 값을 덮어쓰므로
 *   두 자리가 갈리면 안 된다(settled-decisions §6 · check:seo-sync). 접미 «| HoldemMaster»만 여기서 붙인다.
 *
 * 제목·설명에서 내린 판단(09-17 재조준) —
 *  ① 제목 앞머리 = 실측 머리어 «Calculadora de poker»(DFS MX 70 · AR 90 · CO 70 · ES 170 · 자동완성 5지역 동일).
 *     옛 앞머리 «Calculadora de probabilidades de poker»는 10(MX·AR·CO·ES 전부) → H1·CTA·브레드크럼(코퍼스 앵커)에만 남겼다
 *     (브리프 §3-E «CTA 이름이 볼륨 0일 수 있다» 선례). SERP «calculadora de poker» 1·3위가 이 이름이라 동의어로 읽힌다.
 *  ② 차별화어 = «probabilidades»(H1과 이어짐) · «equity»(9번째 도구 = 첫 탭 · poker equity calculator MX 30·AR 40·ES 110) · «ICM»
 *     (영문 «icm calculator» MX 140·AR 140·CO 70·ES 210 — 스페인어권도 영어로 친다). 🔴 «calculadora icm» 단독은 자동완성이 IMC(체질량지수)로 덮인다 —
 *     제목에선 «Calculadora de poker» 뒤에 붙여 앵커를 건다. SPR·BB 훅은 넣지 않는다(settled §1).
 *  ③ 숫자 형식은 EN 그대로(`numberLocale: "en-US"`) — es 코퍼스 실측 콤마 1,421 : 점 178, 통화는 맨 `$`.
 *  ④ OG locale은 솔버 랜딩과 같은 `es_ES`(hreflang 세트 `es-ES`와 짝) · inLanguage "es" · priceCurrency는 EN과 같은 USD
 *     (LATAM 독자, 예시 통화도 $). 지원 언어 목록은 어디에도 적지 않는다(2026-09-09 규칙).
 */
const TITLE = `${CALC_DICT_ES.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_ES.seo.description;

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            스페인어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/es/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다(check:meta-lang 게이트)
  // 🔴 images는 루트 layout에서 상속되지 않는다(Next metadata는 얕은 병합) — 안 적으면 summary_large_image 카드가 빈 채로 나간다.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "Calculadora de probabilidades y de ICM — HoldemMaster",
    description:
      "Equity mano contra mano, acuerdos por ICM, pot odds y equity necesaria, outs, SPR, valor M y push/fold — todos los números del Hold'em en un solo lugar, gratis.",
    url: `${SITE}/es/calculator`,
    siteName: "HoldemMaster",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — calculadora de probabilidades de poker" }],
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
      // ★2026-09-17 7 → 9: Equity 신설 + push/fold 누락 보완(EN과 동형). 탭을 늘리면 이 배열·hero.chips·guide.cards도 같이.
      featureList: [
        "Calculadora de equity (mano contra mano)",
        "Calculadora de outs",
        "Calculadora de pot odds y odds implícitas",
        "Evaluador de manos",
        "Fuerza de la mano inicial",
        "Calculadora de SPR (Stack-to-Pot Ratio)",
        "Calculadora de M de torneo",
        "Calculadora de ICM (Independent Chip Model)",
        "Tabla push/fold de Nash",
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
