import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME } from "@/lib/intl";
import CommunityClient from "@/app/community/community-client";

export const metadata: Metadata = {
  title: "קהילת HoldemMaster — פיד חי לשחקני פוקר",
  description: CHROME.he.tagline,
  alternates: { canonical: `${SITE}/he/` },
  openGraph: {
    title: "קהילת HoldemMaster — פיד חי לשחקני פוקר",
    description: CHROME.he.tagline,
    url: `${SITE}/he/`,
    siteName: "HoldemMaster",
    locale: "he_IL",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="he" />;
}
