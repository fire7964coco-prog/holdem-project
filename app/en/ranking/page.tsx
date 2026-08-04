import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import RankingEn from "./ranking-client";
import HubPage from "@/components/hub-page";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            영어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: "Best Online Poker Sites 2026 — Top 5 Tested & Ranked | HoldemMaster" },
  description:
    "Our Top 5 online poker sites for 2026, tested end-to-end from signup to withdrawal. Licensing, security, traffic, and bonuses compared.",
  alternates: { canonical: `${SITE}/en/ranking` },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: "Best Online Poker Sites 2026 — Top 5 Tested & Ranked | HoldemMaster",
    description: "Our Top 5 online poker sites for 2026, tested end-to-end from signup to withdrawal. Licensing, security, traffic, and bonuses compared.",
  },
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
  return (
    <HubPage title="Poker Sites" locale="en">
      <RankingEn />
    </HubPage>
  );
}
