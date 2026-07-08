import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import RankingEn from "./ranking-client";

export const metadata: Metadata = {
  title: "Best Online Poker Sites 2026 — Top 5 Tested & Ranked",
  description:
    "Our Top 5 online poker sites for 2026, tested end-to-end from signup to withdrawal. Licensing, security, traffic, and bonuses compared.",
  alternates: { canonical: `${SITE}/en/ranking` },
  openGraph: {
    title: "Best Online Poker Sites 2026 — HoldemMaster",
    description: "Top 5 online poker sites, independently tested and ranked for 2026.",
    url: `${SITE}/en/ranking`,
    siteName: "HoldemMaster",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <RankingEn />;
}
