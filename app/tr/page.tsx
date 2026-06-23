import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-client";

export const metadata: Metadata = {
  title: "HoldemMaster Topluluğu — Dünya Genelinde Poker Oyuncuları için Canlı Feed",
  description: "Dünya genelindeki oyuncularla Texas Hold'em stratejisi, eller, blindlar ve sıralamayı tartışın. Gerçek zamanlı feed — HoldemMaster Community.",
  alternates: { canonical: `${SITE}/tr/` },
  openGraph: {
    title: "HoldemMaster Topluluğu — Dünya Genelinde Poker Oyuncuları için Canlı Feed",
    description: "Strateji · eller · sıralama — 14 ülkeden poker oyuncularıyla canlı tartışın.",
    url: `${SITE}/tr/`,
    siteName: "HoldemMaster",
    locale: "tr_TR",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="tr" />;
}
