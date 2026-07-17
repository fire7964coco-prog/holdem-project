import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME } from "@/lib/intl";
import CommunityClient from "@/app/community/community-home";

export const metadata: Metadata = {
  title: "Społeczność HoldemMaster — Feed na żywo dla graczy w pokera",
  description: CHROME.pl.tagline,
  alternates: { canonical: `${SITE}/pl/` },
  openGraph: {
    title: "Społeczność HoldemMaster — Feed na żywo dla graczy w pokera",
    description: CHROME.pl.tagline,
    url: `${SITE}/pl/`,
    siteName: "HoldemMaster",
    locale: "pl_PL",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="pl" />;
}
