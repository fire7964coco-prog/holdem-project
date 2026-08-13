import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";
import { LocaleHomeJsonLd } from "@/lib/intl-jsonld";

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
  return (
    <>
      {/* 구조화 데이터 — 이름·설명은 **위 metadata를 그대로 재사용**한다.
          여기서 문장을 새로 지으면 메타와 스키마가 갈린다(허브 트랙에서 그 갈라짐을 여러 건 치웠다). */}
      <LocaleHomeJsonLd
        locale="de"
        name={metadata.title as string}
        description={metadata.description as string}
      />
      <CommunityClient pageLocale="de" />
    </>
  );
}
