import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartEn from "./hand-chart-client";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            영어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: "Poker Starting Hand Chart — Open Ranges by Position | HoldemMaster" },
  description:
    "Interactive Texas Hold'em starting hand chart. Compare all 169 hands across UTG, HJ, CO, Button, and SB with color-coded GTO open ranges.",
  alternates: { canonical: `${SITE}/en/hand-chart` },
  // 카니발 방지: holdem-starting-hands-chart 필라가 키워드 소유. 도구는 SERP 제외.
  robots: { index: false, follow: true },
  openGraph: {
    title: "Poker Starting Hand Chart — HoldemMaster",
    description: "All 169 hands, color-coded by position. Tap a seat to see what to open.",
    url: `${SITE}/en/hand-chart`,
    siteName: "HoldemMaster",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <HandChartEn />;
}
