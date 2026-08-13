import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";
import { LocaleHomeJsonLd } from "@/lib/intl-jsonld";

export const metadata: Metadata = {
  title: "HoldemMaster Community — Live Feed for Poker Players Worldwide",
  description:
    "Discuss Texas Hold'em strategy, hands, blinds, and rankings with players from around the world. Live feed updated in real time — HoldemMaster Community.",
  alternates: { canonical: `${SITE}/en/` },
  openGraph: {
    title: "HoldemMaster Community — Live Feed for Poker Players Worldwide",
    description:
      "Strategy · hands · rankings — discuss live with poker players from 14 countries.",
    url: `${SITE}/en/`,
    siteName: "HoldemMaster",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      {/* 구조화 데이터 — 이름·설명은 **위 metadata를 그대로 재사용**한다.
          여기서 문장을 새로 지으면 메타와 스키마가 갈린다(허브 트랙에서 그 갈라짐을 여러 건 치웠다). */}
      <LocaleHomeJsonLd
        locale="en"
        name={metadata.title as string}
        description={metadata.description as string}
      />
      <CommunityClient pageLocale="en" />
    </>
  );
}
