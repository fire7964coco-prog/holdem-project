import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorClientEn from "./calculator-client";
import { CALCULATOR_FAQ_EN } from "./faq";
import HubPage from "@/components/hub-page";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_EN } from "@/components/calculator/dict";

/**
 * `/en/calculator` — ★2026-09-17 재조준(사장님 「ko처럼 계산기능 강조 · 이왕 만들거 업데이트」).
 * 근거 = docs/keyword-bank/en-calculator.md: 「poker odds calculator」 9,900(KD 7)·「poker calculator」 6,600·
 *   「poker equity calculator」 3,600·「implied odds calculator」 2,900·「icm calculator」 590(GSC 노출의 절반이 icm 계열).
 *   머리어 의도 = «내 핸드 vs 상대 핸드 승률» → 「Equity」 탭 신설(lib/equity.ts · §13 검산 scripts/verify-equity*.ts).
 * 🔴 title/description은 CALC_DICT_EN.seo에서 가져온다 — 클라이언트 <SEO>가 같은 값을 덮어쓰므로
 *   두 자리가 갈리면 안 된다(settled-decisions §6 · check:seo-sync). 접미 「| HoldemMaster」만 여기서 붙인다.
 */
const TITLE = `${CALC_DICT_EN.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_EN.seo.description;

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            영어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/en/calculator`,
    // ★2026-09-17 — 계산기 랜딩 12개(ko·en + 10로케일)가 같은 세트를 선언한다. 정본 = lib/calculator-alternates.ts
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  // 🔴 images는 루트 layout에서 상속되지 않는다(Next metadata는 얕은 병합) — 안 적으면 summary_large_image 카드가 빈 채로 나간다.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "Poker Odds & ICM Calculator — HoldemMaster",
    description:
      "Hand-vs-hand equity, ICM deals, pot odds, outs, SPR, M value and push/fold — every Hold'em number in one place, free.",
    url: `${SITE}/en/calculator`,
    siteName: "HoldemMaster",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster poker odds calculator" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Poker Odds Calculator & ICM Calculator",
      url: `${SITE}/en/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "en",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      // ★2026-09-17 7 → 9: equity 신설 + push/fold 누락 보완(ko는 08-29에 8로 맞췄는데 EN은 7이었다 — 자기모순).
      //   탭을 늘리면 이 배열·hero.chips·guide.cards도 같이 늘려라.
      featureList: [
        "Equity calculator (hand vs hand win %)",
        "Outs calculator",
        "Pot odds & implied odds calculator",
        "Hand evaluator",
        "Starting hand strength",
        "SPR (stack-to-pot ratio) calculator",
        "Tournament M value calculator",
        "ICM (Independent Chip Model) calculator",
        "Push/fold Nash chart",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/en` },
        { "@type": "ListItem", position: 2, name: "Calculator", item: `${SITE}/en/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_EN.map((f) => ({
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
      <HubPage title="Calculator" locale="en">
        <CalculatorClientEn />
      </HubPage>
    </>
  );
}
