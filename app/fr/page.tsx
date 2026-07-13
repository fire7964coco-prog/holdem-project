import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME } from "@/lib/intl";
import CommunityClient from "@/app/community/community-client";

export const metadata: Metadata = {
  title: "Communauté HoldemMaster — Feed en direct pour les joueurs de poker",
  description: CHROME.fr.tagline,
  alternates: { canonical: `${SITE}/fr/` },
  openGraph: {
    title: "Communauté HoldemMaster — Feed en direct pour les joueurs de poker",
    description: CHROME.fr.tagline,
    url: `${SITE}/fr/`,
    siteName: "HoldemMaster",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="fr" />;
}
