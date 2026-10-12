import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientZh from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 간체 중국어판 승률 시뮬레이터 (2026-10-12 신설 · S-034 2차 ⑤ 언어 확대). 정본 = `app/en/win-rate-quiz/page.tsx`.
 *
 * 제목 판단 — `/zh/calculator`가 «德州扑克概率计算器·胜率计算器» 헤드텀을 소유하므로(카니발 회피)
 *   이 페이지는 «模拟器(시뮬레이터)» 축으로 잡았다. DFS 실측(2026-10-12 · CN/SG/MY · zh_CN)은 후보 전부 바닥값 10 또는 값 없음 —
 *   상세 숫자는 win-rate-quiz-client.tsx 머리 주석.
 * OG locale = zh_CN(hreflang zh-Hans와 다름 — 계산기·솔버 랜딩과 같은 관례).
 * FAQ 스키마 없음 — 화면에 문답이 없다(EN과 같음).
 */
const TITLE = "德州扑克模拟器 — 看不到对手底牌，算胜率、复盘弃牌时机 | HoldemMaster";
const DESCRIPTION =
  "像真牌局一样看不到对手底牌，打一手6人桌德州扑克：每条街显示你的胜率，翻牌起显示跟注所需的底池赔率，打完复盘你到底该在哪里弃牌。可选2–6人和4种对手风格，免费在线练习。";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/zh/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/zh/win-rate-quiz`,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "zh_CN",
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
      name: "德州扑克模拟器",
      description: DESCRIPTION,
      url: `${SITE}/zh/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "zh-Hans",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "在6人桌或9人桌上看不到对手底牌，一条街一条街地打一手（2–6人）",
        "每条街显示你的胜率",
        "翻牌起显示跟注所需的底池赔率",
        "打完复盘正确的弃牌时机",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首页", item: `${SITE}/zh` },
        { "@type": "ListItem", position: 2, name: "胜率模拟器", item: `${SITE}/zh/win-rate-quiz` },
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
      <HubPage title="胜率模拟器" locale="zh">
        <WinRateQuizClientZh />
      </HubPage>
    </>
  );
}
