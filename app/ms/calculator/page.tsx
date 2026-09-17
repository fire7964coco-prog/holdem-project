import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_MS } from "./dict";
import { CALCULATOR_FAQ_MS } from "./faq";

// ms(말레이어·말레이시아) 계산기 랜딩 — 신설 2026-09-17.
// - 공용 컴포넌트 `components/calculator/calculator-tool.tsx`를 ms 사전(`./dict.ts`) + FAQ(`./faq.ts`)로 렌더한다.
// - 용어 출처: docs/keyword-bank/ms-posting-reference.md(정본) → docs/translation-terms-ms.md →
//   lib/posts-ms/*.ts 실측(outs·pot odds·equity·SPR·ICM·stack efektif·cip·tournament·tangan permulaan·kedudukan tangan).
// - 제목: 사장님 승인 CTA 핵심명 «Kalkulator odds poker»를 말레이 제목 관습(Title Case)으로 「Kalkulator Odds Poker」.
//   EN의 «Hand Rank, SPR»을 제목에서 뺐다 — 60자 안에 핵심명·outs·pot odds·ICM만 남긴다(8개 도구는 description이 나열).
// - 「percuma」·「serta-merta」(id의 gratis·instan 금지) · 숫자는 영어식 구분자(ms-MY) · 통화 $ 유지.
// - 내부 링크: EN 대상 6편(tournament·equity·pot-odds·outs·probability·starting-hands-chart)이 ms에 없어
//   lib/posts-ms/index.ts 등록 글로 대체했다(dict.related · pushfold.shortStackLink → holdem-tournament-vs-cash-game).
const TITLE = "Kalkulator Odds Poker — Outs, Pot Odds & ICM | HoldemMaster";
const DESCRIPTION =
  "Kalkulator poker Texas Hold'em percuma: outs & peluang draw, pot odds, penilai tangan, tangan permulaan, SPR, nilai M, ICM dan carta push/fold Nash — 8 alat.";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/ms/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "Kalkulator Odds Poker — HoldemMaster",
    description:
      "Outs, pot odds, kedudukan tangan, tangan permulaan, SPR, nilai M dan ICM — semua nombor Hold'em di satu tempat.",
    url: `${SITE}/ms/calculator`,
    siteName: "HoldemMaster",
    locale: "ms_MY",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Kalkulator Odds Poker & Kalkulator ICM",
      url: `${SITE}/ms/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ms",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Kalkulator outs",
        "Kalkulator pot odds & implied odds",
        "Penilai tangan",
        "Kekuatan tangan permulaan",
        "Kalkulator SPR (stack-to-pot ratio)",
        "Kalkulator nilai M tournament",
        "Kalkulator ICM (Independent Chip Model)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Laman utama", item: `${SITE}/ms` },
        { "@type": "ListItem", position: 2, name: "Kalkulator", item: `${SITE}/ms/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_MS.map((f) => ({
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
      <HubPage title="Kalkulator" locale="ms">
        <CalculatorTool locale="ms" dict={CALC_DICT_MS} faq={CALCULATOR_FAQ_MS} />
      </HubPage>
    </>
  );
}
