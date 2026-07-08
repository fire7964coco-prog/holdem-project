import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartEn from "./hand-chart-client";

export const metadata: Metadata = {
  title: "Poker Starting Hand Chart — Open Ranges by Position",
  description:
    "Interactive Texas Hold'em starting hand chart. Compare all 169 hands across UTG, HJ, CO, Button, and SB with color-coded GTO open ranges.",
  alternates: { canonical: `${SITE}/en/hand-chart` },
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
