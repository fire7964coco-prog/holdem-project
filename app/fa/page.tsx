import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME } from "@/lib/intl";
import CommunityClient from "@/app/community/community-home";

export const metadata: Metadata = {
  title: "انجمن HoldemMaster — فید زنده برای بازیکنان پوکر",
  description: CHROME.fa.tagline,
  alternates: { canonical: `${SITE}/fa/` },
  openGraph: {
    title: "انجمن HoldemMaster — فید زنده برای بازیکنان پوکر",
    description: CHROME.fa.tagline,
    url: `${SITE}/fa/`,
    siteName: "HoldemMaster",
    locale: "fa_IR",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="fa" />;
}
