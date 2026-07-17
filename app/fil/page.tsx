import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME } from "@/lib/intl";
import CommunityClient from "@/app/community/community-home";

export const metadata: Metadata = {
  title: "HoldemMaster Community — Live Feed para sa mga Poker Player",
  description: CHROME.fil.tagline,
  alternates: { canonical: `${SITE}/fil/` },
  openGraph: {
    title: "HoldemMaster Community — Live Feed para sa mga Poker Player",
    description: CHROME.fil.tagline,
    url: `${SITE}/fil/`,
    siteName: "HoldemMaster",
    locale: "fil_PH",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="fil" />;
}
