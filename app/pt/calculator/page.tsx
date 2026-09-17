import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_PT } from "./dict";
import { CALCULATOR_FAQ_PT } from "./faq";

/**
 * `/pt/calculator` — `/calculator`(ko)·`/en/calculator`의 포르투갈어(pt-BR)판. ★2026-09-17 신설.
 * ★2026-09-17 (pt 회차) 재조준 — EN 재저작(b337e436)·ja·zh·zh-hant·es(f839bb1e)와 동형: Equity 탭 · quickRef 6표 · FAQ 18 · 메타 재조준.
 *   근거 = docs/keyword-bank/pt-calculator.md(DFS 볼륨 Brazil 2076 · 자동완성 BR/PT 52시드 · SERP 3쿼리 · 상위 10페이지 구조).
 * 정본 구조 = `app/en/calculator/page.tsx`. 화면은 **공용 컴포넌트** `components/calculator/calculator-tool.tsx`가
 * `./dict.ts`(CALC_DICT_PT) + `./faq.ts`(CALCULATOR_FAQ_PT) 하나로 그린다 — 로케일 전용 client 파일 없음.
 * 독자 = 브라질(pt-BR · você체). 용어 출처: `docs/translation-terms-pt.md` → `lib/posts-pt/holdem-glossary.ts` → 형제 글 실제 표기.
 *
 * 🔴 title/description은 CALC_DICT_PT.seo에서 가져온다 — 클라이언트 <SEO>가 같은 값을 덮어쓰므로
 *   두 자리가 갈리면 안 된다(settled-decisions §6 · check:seo-sync). 접미 «| HoldemMaster»만 여기서 붙인다.
 *
 * 제목·설명에서 내린 판단(09-17 재조준) —
 *  ① 제목 앞머리 = «Calculadora de poker — odds, …»(SEO 렌즈 09-17: 초안 «Calculadora de odds de poker»에서 머리어 정합으로 교체) — DFS Brazil: calculadora poker 390 · calculadora odds poker 260 ·
 *     poker odds calculator(영문) 260 · calculadora de poker 170 · calculadora de odds poker 110. «calculadora de poker» 축어 + 바로 뒤 «odds»로
 *     «calculadora odds poker»(SERP 1위 gipsyteam.com.br «Calculadora de odds de poker») 토큰을 공유. 옛 앞머리 «Calculadora de probabilidades de poker»(calculadora de probabilidades poker 10 ·
 *     probabilidade 30~40)는 H1·CTA·브레드크럼(코퍼스 앵커)에만 남겼다 — SERP «calculadora poker» 1위 PokerNews BR이 그 이름이다(브리프 §3-E 분리).
 *  ② 차별화어 = «equity»(9번째 도구 = 첫 탭 · poker equity calculator 70 · 코퍼스 equity 519) · «ICM»(icm poker 170 · icm calculator 110) ·
 *     «pot odds»(90). 🔴 «calculadora icm» 단독은 자동완성이 ICMS(세금)·IMC로 덮인다 → 제목에선 «Calculadora de poker — odds, equity,» 뒤에 둔다.
 *     SPR·BB 훅은 넣지 않는다(settled §1). 설명의 «ranking de mãos»는 도구 이름 나열(320 = holdem-hand-rankings 소유).
 *  ③ 숫자 표기는 브라질식(`numberLocale: "pt-BR"` · 코퍼스 실측 소수 콤마 1.637 : 점 0) · 통화는 §13 보존을 위해 `$` 유지(holdem-icm.ts와 동일).
 *  ④ OG locale `pt_BR` · inLanguage "pt-BR" · priceCurrency는 EN과 같은 USD. 지원 언어 목록은 어디에도 적지 않는다(2026-09-09 규칙).
 */
const TITLE = `${CALC_DICT_PT.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_PT.seo.description;

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
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다(check:meta-lang 게이트)
  // 🔴 images는 루트 layout에서 상속되지 않는다(Next metadata는 얕은 병합) — 안 적으면 summary_large_image 카드가 빈 채로 나간다.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "Calculadora de probabilidades e de ICM — HoldemMaster",
    description:
      "Equity mão contra mão, ICM deals, pot odds e equity mínima, outs, SPR, M-ratio e push/fold — todos os números do Hold'em em um só lugar, grátis.",
    url: `${SITE}/pt/calculator`,
    siteName: "HoldemMaster",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — calculadora de probabilidades de poker" }],
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
      // ★2026-09-17 7 → 9: Equity 신설 + push/fold 누락 보완(EN과 동형). 탭을 늘리면 이 배열·hero.chips·guide.cards도 같이.
      featureList: [
        "Calculadora de equity (mão contra mão)",
        "Calculadora de outs",
        "Calculadora de pot odds e odds implícitas",
        "Ranking de mãos (avaliador de mão)",
        "Força da mão inicial",
        "Calculadora de SPR (Stack-to-Pot Ratio)",
        "Calculadora de M-ratio de torneio",
        "Calculadora de ICM (Independent Chip Model)",
        "Tabela push/fold de Nash",
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
