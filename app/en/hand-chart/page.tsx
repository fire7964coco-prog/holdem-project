import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartEn from "./hand-chart-client";

export const metadata: Metadata = {
  title: "Poker Starting Hand Chart — Open Ranges by Position",
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
