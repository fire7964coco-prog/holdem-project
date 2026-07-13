import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME } from "@/lib/intl";
import CommunityClient from "@/app/community/community-client";

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
  return <CommunityClient pageLocale="ro" />;
}
