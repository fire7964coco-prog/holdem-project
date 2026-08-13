import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";
import { LocaleHomeJsonLd } from "@/lib/intl-jsonld";

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
  return (
    <>
      {/* 구조화 데이터 — 이름·설명은 **위 metadata를 그대로 재사용**한다.
          여기서 문장을 새로 지으면 메타와 스키마가 갈린다(허브 트랙에서 그 갈라짐을 여러 건 치웠다). */}
      <LocaleHomeJsonLd
        locale="es"
        name={metadata.title as string}
        description={metadata.description as string}
      />
      <CommunityClient pageLocale="es" />
    </>
  );
}
