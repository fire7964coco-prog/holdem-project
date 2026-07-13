import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME } from "@/lib/intl";
import CommunityClient from "@/app/community/community-client";

export const metadata: Metadata = {
  title: "HoldemMaster কমিউনিটি — পোকার খেলোয়াড়দের জন্য লাইভ ফিড",
  description: CHROME.bn.tagline,
  alternates: { canonical: `${SITE}/bn/` },
  openGraph: {
    title: "HoldemMaster কমিউনিটি — পোকার খেলোয়াড়দের জন্য লাইভ ফিড",
    description: CHROME.bn.tagline,
    url: `${SITE}/bn/`,
    siteName: "HoldemMaster",
    locale: "bn_BD",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="bn" />;
}
