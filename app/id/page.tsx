import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";
import { LocaleHomeJsonLd } from "@/lib/intl-jsonld";

export const metadata: Metadata = {
  title: "Komunitas HoldemMaster — Feed Langsung untuk Pemain Poker",
  description: "Diskusikan strategi Texas Hold'em, kartu, blinds, dan ranking dengan pemain dari seluruh dunia. Feed real-time — HoldemMaster Community.",
  alternates: { canonical: `${SITE}/id/` },
  openGraph: {
    title: "Komunitas HoldemMaster — Feed Langsung untuk Pemain Poker",
    description: "Strategi · kartu · ranking — diskusi langsung dengan pemain poker dari 14 negara.",
    url: `${SITE}/id/`,
    siteName: "HoldemMaster",
    locale: "id_ID",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      {/* 구조화 데이터 — 이름·설명은 **위 metadata를 그대로 재사용**한다.
          여기서 문장을 새로 지으면 메타와 스키마가 갈린다(허브 트랙에서 그 갈라짐을 여러 건 치웠다). */}
      <LocaleHomeJsonLd
        locale="id"
        name={metadata.title as string}
        description={metadata.description as string}
      />
      <CommunityClient pageLocale="id" />
    </>
  );
}
