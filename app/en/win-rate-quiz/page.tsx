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
  title: { absolute: "Poker Equity Simulator — Watch the Odds Swing Card by Card | HoldemMaster" },
  description:
    "Deal 2-4 random hands and see exactly how each player's equity moves from preflop to the river. Every percentage is calculated, not estimated.",
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
    title: "Poker Equity Simulator — Watch the Odds Swing Card by Card | HoldemMaster",
    description:
      "See how one card changes everyone's chances. 2-4 players, exact equity from preflop to river.",
    siteName: "HoldemMaster",
    locale: "en_US",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <HubPage title="Equity Simulator" locale="en">
      <WinRateQuizClientEn />
    </HubPage>
  );
}
