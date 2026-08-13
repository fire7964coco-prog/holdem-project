import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME } from "@/lib/intl";
import CommunityClient from "@/app/community/community-home";
import { LocaleHomeJsonLd } from "@/lib/intl-jsonld";

export const metadata: Metadata = {
  title: "Comunitatea HoldemMaster — Feed live pentru jucătorii de poker",
  description: CHROME.ro.tagline,
  alternates: { canonical: `${SITE}/ro/` },
  openGraph: {
    title: "Comunitatea HoldemMaster — Feed live pentru jucătorii de poker",
    description: CHROME.ro.tagline,
    url: `${SITE}/ro/`,
    siteName: "HoldemMaster",
    locale: "ro_RO",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      {/* 구조화 데이터 — 이름·설명은 **위 metadata를 그대로 재사용**한다.
          여기서 문장을 새로 지으면 메타와 스키마가 갈린다(허브 트랙에서 그 갈라짐을 여러 건 치웠다). */}
      <LocaleHomeJsonLd
        locale="ro"
        name={metadata.title as string}
        description={metadata.description as string}
      />
      <CommunityClient pageLocale="ro" />
    </>
  );
}
