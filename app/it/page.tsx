import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME } from "@/lib/intl";
import CommunityClient from "@/app/community/community-client";

export const metadata: Metadata = {
  title: "Community HoldemMaster — Feed dal vivo per giocatori di poker",
  description: CHROME.it.tagline,
  alternates: { canonical: `${SITE}/it/` },
  openGraph: {
    title: "Community HoldemMaster — Feed dal vivo per giocatori di poker",
    description: CHROME.it.tagline,
    url: `${SITE}/it/`,
    siteName: "HoldemMaster",
    locale: "it_IT",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="it" />;
}
