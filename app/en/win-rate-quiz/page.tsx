import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientEn from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";

/**
 * 영어판 승률 시뮬레이터 (2026-08-04 신설, 사장님 요청).
 *
 * 좌측 레일에 「Equity Simulator」를 넣으려면 도착지가 있어야 하는데 /en/win-rate-quiz가
 * 없었다(한국어만 존재). 확률 엔진은 한국어판과 같은 파일을 공유하므로 새로 만든 것은
 * UI 문자열뿐이다 — 숫자는 전 언어 동일하다(§13).
 *
 * hreflang: /win-rate-quiz(ko) ↔ /en/win-rate-quiz(en) 상호 선언.
 */
export const metadata: Metadata = {
  /**
   * ★absolute — 루트 layout의 title.template이 "%s | 홀덤마스터"라, 그냥 두면 영어 페이지
   *   제목이 한국어 브랜드로 끝난다. 다국어 블로그(lib/intl-blog-page.tsx)는 이미 자기 제목을
   *   쓰고 있는데 EN 도구 페이지들은 그대로 물려받고 있었다.
   * ⚠ 나머지 EN 도구 페이지(/en/calculator·quiz·glossary·hand-chart·ranking)도 같은 상태다.
   *   이번엔 새로 만든 이 페이지만 바로잡았다 — 나머지는 제목 문구 결정이 필요해 별도 건.
   */
  title: { absolute: "Poker Equity Simulator — Find Out Where You Should Have Folded | HoldemMaster" },
  description:
    "Play a 6-max hand blind, like real poker. See your equity on every street and the pot odds you need from the flop on, then review exactly where folding became the right call.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/en/win-rate-quiz`,
    languages: {
      ko: `${SITE}/win-rate-quiz`,
      en: `${SITE}/en/win-rate-quiz`,
      "x-default": `${SITE}/en/win-rate-quiz`,
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE}/en/win-rate-quiz`,
    title: "Poker Equity Simulator — Find Out Where You Should Have Folded | HoldemMaster",
    description:
      "Their cards stay hidden, just like real poker. Track your equity street by street and your pot odds from the flop on, then review where you should have folded.",
    siteName: "HoldemMaster",
    locale: "en_US",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
  // 🔴 2026-08-23 — twitter 가 빠져 있어 루트 layout 의 «한국어»가 그대로 나가고 있었다.
  //    EN 도구 페이지 9개 중 **이 페이지만** 누락이었다(나머지 8개는 이미 갖고 있었다).
  //    라이브 실측으로 잡았다 — DOM 밖 문자열이라 게이트 넷이 전부 못 본다.
  //    ⚠ 문구는 위 openGraph 를 그대로 재사용한다 — 새로 짓지 않는다.
  twitter: {
    card: "summary_large_image",
    title: "Poker Equity Simulator — Find Out Where You Should Have Folded | HoldemMaster",
    description:
      "Their cards stay hidden, just like real poker. Track your equity street by street and your pot odds from the flop on, then review where you should have folded.",
  },
};

/**
 * JSON-LD는 **서버에서** 내보낸다 — 정본 = `app/calculator/page.tsx`.
 * ★2026-08-13 신설. 그 전까지 이 페이지는 자기 구조화 데이터가 **0**이었다
 *   (루트 layout의 WebSite·Organization만 있었다).
 * ⚠ FAQPage는 **붙이지 않았다** — 이 페이지엔 화면에 문답이 없다.
 *   스키마에만 있는 FAQ는 구글 스펙 위반이고 LLM도 읽지 못한다(허브 트랙에서 그 결함을 걷어냈다).
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Poker Equity Simulator",
      description: "Play a 6-max hand blind, like real poker. See your equity on every street and the pot odds you need from the flop on, then review exactly where folding became the right call.",
      url: `${SITE}/en/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "en",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Play a 6-max hand blind, street by street",
        "Equity shown on every street",
        "Pot odds required from the flop on",
        "Post-hand review of the correct fold point"
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/en/` },
        { "@type": "ListItem", position: 2, name: "Poker Equity Simulator", item: `${SITE}/en/win-rate-quiz` },
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
      <HubPage title="Equity Simulator" locale="en">
        <WinRateQuizClientEn />
      </HubPage>
    </>
  );
}
