import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorTool from "@/components/calculator/calculator-tool";
import HubPage from "@/components/hub-page";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_FR } from "./dict";
import { CALCULATOR_FAQ_FR } from "./faq";

/**
 * `/fr/calculator` — 프랑스어 계산기 랜딩.
 * ★2026-09-17 신설(10로케일 일괄 개설 회차). 도구 본체는 공용 `components/calculator/calculator-tool.tsx`,
 *   문자열은 `./dict.ts`(`CALC_DICT_FR`) · FAQ는 `./faq.ts` — 구조는 `app/en/calculator/page.tsx`와 1:1.
 * 용어 출처: `docs/translation-terms-fr.md` · `docs/local-voice/fr-fr.md` · `lib/posts-fr/*.ts`
 *   (핵심 이름 = `texas-holdem-rules-for-beginners.ts:444` 앵커 «calculatrice de probabilités poker») ·
 *   `app/fr/solver/faq.ts`(equity·table finale 관용).
 * 제목·설명에서 내린 판단:
 *   ① 핵심 이름은 코퍼스 앵커 «Calculatrice de probabilités poker»를 그대로 — 뱅크의 `calculateur poker`(390)는
 *      제목이 아니라 본문 H2(«8 calculateurs»)·FAQ 문항(«calculateur ICM»)이 자연문으로 받는다.
 *   ② 제목 뒤쪽은 EN의 5개 나열을 3개(outs · cotes du pot · ICM)로 줄여 형제 랜딩 대역(~60자 + 브랜드)에 맞췄다.
 *   ③ 설명은 8도구 핵심어를 전부 싣되 160자 안에서 «Nash»만 뺐다(본문·스키마가 유지). register = tu(코퍼스 6편 전부).
 *   ④ 프랑스식 구두점은 코퍼스 관습대로 일반 공백(« ? »·« : »·«35 %») — NBSP는 코퍼스가 안 쓴다.
 */

// 🪶 ≤60자 + « | HoldemMaster ». 핵심 이름 + 조준축 셋. 단독 «Calculatrice»는 다른 뜻으로 새지 않도록 poker와 붙인다.
const TITLE = "Calculatrice de probabilités poker — Outs, cotes du pot, ICM | HoldemMaster";
// 🪶 ≤160자 · 8도구 핵심어(outs·cotes du pot·classement·mains de départ·SPR·M·ICM·push/fold).
const DESCRIPTION =
  "Calculatrice poker gratuite (Texas Hold'em) : outs, cotes du pot, classement des mains, mains de départ, SPR, M de tournoi, ICM et push/fold — 8 outils en un.";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            프랑스어 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/fr/calculator`,
    // 계산기 랜딩 12개(ko·en + 10로케일)가 같은 세트를 선언한다. 정본 = lib/calculator-alternates.ts
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "Calculatrice de probabilités poker — HoldemMaster",
    description:
      "Outs, cotes du pot, classement des mains, mains de départ, SPR, valeur M et ICM — tous les chiffres du Hold'em au même endroit.",
    url: `${SITE}/fr/calculator`,
    siteName: "HoldemMaster",
    // lib/intl.ts OG_LOCALE: fr → fr_FR (블로그·솔버 랜딩과 동일).
    locale: "fr_FR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Calculatrice de probabilités poker et calculateur ICM",
      url: `${SITE}/fr/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "fr",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Calculateur d'outs",
        "Calculateur de cotes du pot et de cotes implicites",
        "Évaluateur de main",
        "Force des mains de départ",
        "Calculateur de SPR (ratio tapis / pot)",
        "Calculateur de M de tournoi",
        "Calculateur ICM (Independent Chip Model)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/fr` },
        { "@type": "ListItem", position: 2, name: "Calculatrice", item: `${SITE}/fr/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_FR.map((f) => ({
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
      <HubPage title="Calculatrice poker" locale="fr">
        <CalculatorTool locale="fr" dict={CALC_DICT_FR} faq={CALCULATOR_FAQ_FR} />
      </HubPage>
    </>
  );
}
