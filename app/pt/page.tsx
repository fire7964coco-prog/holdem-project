import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";
import { LocaleHomeJsonLd } from "@/lib/intl-jsonld";

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
  return (
    <>
      {/* 구조화 데이터 — 이름·설명은 **위 metadata를 그대로 재사용**한다.
          여기서 문장을 새로 지으면 메타와 스키마가 갈린다(허브 트랙에서 그 갈라짐을 여러 건 치웠다). */}
      <LocaleHomeJsonLd
        locale="pt"
        name={metadata.title as string}
        description={metadata.description as string}
      />
      <CommunityClient pageLocale="pt" />
    </>
  );
}
