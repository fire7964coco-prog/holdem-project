import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorClientEn from "./calculator-client";

export const metadata: Metadata = {
  title: "Poker Odds Calculator — Outs, Pot Odds, Hand Rank, SPR & ICM",
  description:
    "Free Texas Hold'em calculator: outs & draw odds, pot odds, hand evaluator, starting hand strength, SPR, tournament M value, and ICM — 7 tools in one.",
  alternates: { canonical: `${SITE}/en/calculator` },
  openGraph: {
    title: "Poker Odds Calculator — HoldemMaster",
    description:
      "Outs, pot odds, hand rank, starting hands, SPR, M value, and ICM — every Hold'em number in one place.",
    url: `${SITE}/en/calculator`,
    siteName: "HoldemMaster",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <CalculatorClientEn />;
}
