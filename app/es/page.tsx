import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";

export const metadata: Metadata = {
  title: "Comunidad HoldemMaster — Feed en Vivo para Jugadores de Póker",
  description: "Discute estrategia, manos, blinds y ranking de Texas Hold'em con jugadores de todo el mundo. Feed en tiempo real — HoldemMaster Community.",
  alternates: { canonical: `${SITE}/es/` },
  openGraph: {
    title: "Comunidad HoldemMaster — Feed en Vivo para Jugadores de Póker",
    description: "Discute estrategia, manos, blinds y ranking de Texas Hold'em con jugadores de todo el mundo.",
    url: `${SITE}/es/`,
    siteName: "HoldemMaster",
    locale: "es_ES",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="es" />;
}
