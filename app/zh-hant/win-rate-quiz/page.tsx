import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientZhHant from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 번체 중국어(대만)판 승률 시뮬레이터 (2026-10-14 신설 · tool-lanes 🅰). 정본 = `app/en/win-rate-quiz/page.tsx` · 틀 = `app/zh/win-rate-quiz/page.tsx`.
 *
 * 제목 판단 — DFS 실측(2026-10-14 · Taiwan 2158): 德州撲克線上練習 70(자동완성 살아 있음) · 德州撲克練習 30 · 德州撲克模擬器 20(자동완성 0 · SERP에 에뮬레이터 소음).
 *   `/zh-hant/calculator`가 «德州撲克勝率計算器»(260)·«德州撲克勝率»(210)을 소유하므로 제목에 «勝率»을 두지 않는다(카니발 회피).
 *   상세 = docs/keyword-bank/win-rate-quiz-ltr.md §zh-hant · 브리프 = docs/tool-lanes/wrq-zhhant-brief.md.
 * OG locale = zh_TW(계산기·솔버 랜딩과 같은 관례).
 * FAQ 스키마 없음 — 화면에 문답이 없다(EN과 같음).
 */
const TITLE = "看不到對手底牌，你敢撐到河牌嗎？ — 德州撲克線上練習模擬器 | HoldemMaster";
const DESCRIPTION =
  "每次都撐到河牌才後悔？像真牌局一樣看不到對手底牌，免費的德州撲克線上練習，打一手6人桌或9人桌：每條街看勝率，翻牌起看跟注要的底池賠率，打完檢討你該在哪條街蓋牌。4種對手風格，還能重現你真的打過的那手牌。";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/zh-hant/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/zh-hant/win-rate-quiz`,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "zh_TW",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
  // twitter를 안 주면 루트 layout의 한국어가 나가고, images는 상속되지 않는다.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "德州撲克練習模擬器",
      description: DESCRIPTION,
      url: `${SITE}/zh-hant/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "zh-Hant",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "在6人桌或9人桌上看不到對手底牌，一條街一條街打完一手（2–6人）",
        "每條街顯示你的勝率",
        "翻牌起顯示跟注所需的底池賠率",
        "打完檢討正確的蓋牌時機",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首頁", item: `${SITE}/zh-hant` },
        { "@type": "ListItem", position: 2, name: "德州撲克練習模擬器", item: `${SITE}/zh-hant/win-rate-quiz` },
      ],
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
      <HubPage title="德州撲克練習模擬器" locale="zh-hant">
        <WinRateQuizClientZhHant />
      </HubPage>
    </>
  );
}
