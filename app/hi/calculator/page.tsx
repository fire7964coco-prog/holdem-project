import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_HI } from "./dict";
import { CALCULATOR_FAQ_HI } from "./faq";

// hi 계산기 랜딩 — 신설 2026-09-17. 공용 컴포넌트 `components/calculator/calculator-tool.tsx` + 로케일 사전(./dict.ts).
// 용어 출처: docs/translation-terms-hi.md · docs/keyword-bank/hi-posting-reference.md · lib/posts-hi/*.ts 실측 ·
//   app/hi/solver/page.tsx·faq.ts(승인된 hi 레지스터 — 데바나가리 산문 + 라틴 포커 용어 · आप체).
// 제목·설명 판단:
//   ① 핵심명은 사장님 승인 영어 «Poker Odds Calculator» 그대로(2026-09-16 규칙: 자연스러운 힌디 용어가 없으면 영어 유지).
//      뒤에 붙는 도구 나열만 힌디 — 족보는 코퍼스 정본 «हैंड रैंकिंग»(26회), outs·pot odds·SPR·ICM은 라틴(코퍼스 0회 음차).
//   ② 일반명사 «계산기»는 कैलकुलेटर — /hi/solver FAQ가 «पोकर odds कैलकुलेटर», featureList가 «Equity कैलकुलेटर»로 이미 쓴 형태.
//   ③ 숫자 서식은 서양식 묶음(numberLocale en-US) — 코퍼스가 100,000·212,175처럼 lakh 묶음을 쓰지 않는다(translation-terms-hi.md 「표기」절).
//   ④ 「short stack」 링크 slug는 hi에 없어 tournament-vs-cash-game(ICM·bubble·stack 압박 본문)으로 대체. 관련 글 6편 전부 lib/posts-hi 실존 slug만.
const TITLE = "Poker Odds Calculator — outs, pot odds, हैंड रैंकिंग, SPR और ICM | HoldemMaster";
const DESCRIPTION =
  "मुफ़्त Hold'em कैलकुलेटर: outs व draw odds, pot odds, हैंड रैंकिंग, starting hand, SPR, tournament M value, ICM और push/fold Nash चार्ट — 8 कैलकुलेटर एक जगह।";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/hi/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "Poker Odds Calculator — HoldemMaster",
    description:
      "Outs, pot odds, हैंड रैंकिंग, starting hand, SPR, M value और ICM — Hold'em की हर गणना एक ही जगह।",
    url: `${SITE}/hi/calculator`,
    siteName: "HoldemMaster",
    locale: "hi_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Poker Odds Calculator और ICM कैलकुलेटर",
      url: `${SITE}/hi/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "hi",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Outs कैलकुलेटर",
        "Pot odds और implied odds कैलकुलेटर",
        "हैंड रैंकिंग जाँच",
        "Starting hand की ताक़त",
        "SPR (stack-to-pot ratio) कैलकुलेटर",
        "Tournament M value कैलकुलेटर",
        "ICM (Independent Chip Model) कैलकुलेटर",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "होम", item: `${SITE}/hi` },
        { "@type": "ListItem", position: 2, name: "कैलकुलेटर", item: `${SITE}/hi/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_HI.map((f) => ({
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
      <HubPage title="कैलकुलेटर" locale="hi">
        <CalculatorTool locale="hi" dict={CALC_DICT_HI} faq={CALCULATOR_FAQ_HI} />
      </HubPage>
    </>
  );
}
