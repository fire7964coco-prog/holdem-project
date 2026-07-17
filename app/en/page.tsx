import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";

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
  return <CommunityClient pageLocale="en" />;
}
