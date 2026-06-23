import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-client";

export const metadata: Metadata = {
  title: "HoldemMaster Community — Live-Feed für Pokerspieler weltweit",
  description: "Diskutiere Texas Hold'em Strategie, Hände, Blinds und Händeranking mit Spielern aus aller Welt. Echtzeit-Feed — HoldemMaster Community.",
  alternates: { canonical: `${SITE}/de/` },
  openGraph: {
    title: "HoldemMaster Community — Live-Feed für Pokerspieler weltweit",
    description: "Strategie · Hände · Ranking — diskutiere live mit Pokerspielern aus 14 Ländern.",
    url: `${SITE}/de/`,
    siteName: "HoldemMaster",
    locale: "de_DE",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="de" />;
}
