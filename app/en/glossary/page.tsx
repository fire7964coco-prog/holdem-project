import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import GlossaryEn from "./glossary-client";

export const metadata: Metadata = {
  title: "Poker Glossary — Texas Hold'em Terms Explained (A–Z)",
  description:
    "A clear, accurate glossary of Texas Hold'em terms: nuts, outs, pot odds, 3-bet, c-bet, ICM, SPR, kicker, tilt and more. Search or filter 45+ essential poker terms.",
  alternates: { canonical: `${SITE}/en/glossary` },
  // 카니발 방지: holdem-glossary 필라가 "poker glossary" 키워드 소유. 도구는 SERP 제외.
  robots: { index: false, follow: true },
  openGraph: {
    title: "Poker Glossary — HoldemMaster",
    description: "45+ essential Texas Hold'em terms, defined clearly and correctly. Search or filter by category.",
    url: `${SITE}/en/glossary`,
    siteName: "HoldemMaster",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <GlossaryEn />;
}
