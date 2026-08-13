import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";
import { LocaleHomeJsonLd } from "@/lib/intl-jsonld";

export const metadata: Metadata = {
  title: "HoldemMaster समुदाय — पोकर खिलाड़ियों के लिए लाइव फीड",
  description: "दुनिया भर के खिलाड़ियों के साथ टेक्सास होल्डेम रणनीति, हाथ, ब्लाइंड और रैंकिंग पर चर्चा करें। रियल-टाइम फीड — HoldemMaster Community।",
  alternates: { canonical: `${SITE}/hi/` },
  openGraph: {
    title: "HoldemMaster समुदाय — पोकर खिलाड़ियों के लिए लाइव फीड",
    description: "रणनीति · हाथ · रैंकिंग — 14 देशों के पोकर खिलाड़ियों के साथ लाइव चर्चा करें।",
    url: `${SITE}/hi/`,
    siteName: "HoldemMaster",
    locale: "hi_IN",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      {/* 구조화 데이터 — 이름·설명은 **위 metadata를 그대로 재사용**한다.
          여기서 문장을 새로 지으면 메타와 스키마가 갈린다(허브 트랙에서 그 갈라짐을 여러 건 치웠다). */}
      <LocaleHomeJsonLd
        locale="hi"
        name={metadata.title as string}
        description={metadata.description as string}
      />
      <CommunityClient pageLocale="hi" />
    </>
  );
}
