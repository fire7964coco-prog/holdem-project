import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME } from "@/lib/intl";
import CommunityClient from "@/app/community/community-client";

export const metadata: Metadata = {
  title: "Спільнота HoldemMaster — жива стрічка для гравців у покер",
  description: CHROME.uk.tagline,
  alternates: { canonical: `${SITE}/uk/` },
  openGraph: {
    title: "Спільнота HoldemMaster — жива стрічка для гравців у покер",
    description: CHROME.uk.tagline,
    url: `${SITE}/uk/`,
    siteName: "HoldemMaster",
    locale: "uk_UA",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="uk" />;
}
