import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-client";

export const metadata: Metadata = {
  title: "Comunidade HoldemMaster — Feed Ao Vivo para Jogadores de Poker",
  description: "Discuta estratégia, mãos, blinds e ranking do Texas Hold'em com jogadores do mundo todo. Feed em tempo real — HoldemMaster Community.",
  alternates: { canonical: `${SITE}/pt/` },
  openGraph: {
    title: "Comunidade HoldemMaster — Feed Ao Vivo para Jogadores de Poker",
    description: "Estratégia · mãos · ranking — discuta ao vivo com jogadores de poker de 14 países.",
    url: `${SITE}/pt/`,
    siteName: "HoldemMaster",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="pt" />;
}
