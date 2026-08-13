import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";
import { LocaleHomeJsonLd } from "@/lib/intl-jsonld";

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
  return (
    <>
      {/* 구조화 데이터 — 이름·설명은 **위 metadata를 그대로 재사용**한다.
          여기서 문장을 새로 지으면 메타와 스키마가 갈린다(허브 트랙에서 그 갈라짐을 여러 건 치웠다). */}
      <LocaleHomeJsonLd
        locale="tr"
        name={metadata.title as string}
        description={metadata.description as string}
      />
      <CommunityClient pageLocale="tr" />
    </>
  );
}
