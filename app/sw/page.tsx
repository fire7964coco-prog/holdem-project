import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME } from "@/lib/intl";
import CommunityClient from "@/app/community/community-home";

export const metadata: Metadata = {
  title: "Jamii ya HoldemMaster — Mlisho wa moja kwa moja kwa wachezaji poker",
  description: CHROME.sw.tagline,
  alternates: { canonical: `${SITE}/sw/` },
  openGraph: {
    title: "Jamii ya HoldemMaster — Mlisho wa moja kwa moja kwa wachezaji poker",
    description: CHROME.sw.tagline,
    url: `${SITE}/sw/`,
    siteName: "HoldemMaster",
    locale: "sw_KE",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="sw" />;
}
