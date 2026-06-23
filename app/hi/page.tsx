import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-client";

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
  return <CommunityClient pageLocale="hi" />;
}
