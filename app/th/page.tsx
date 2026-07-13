import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME } from "@/lib/intl";
import CommunityClient from "@/app/community/community-client";

export const metadata: Metadata = {
  title: "ชุมชน HoldemMaster — ฟีดสดสำหรับผู้เล่นโป๊กเกอร์",
  description: CHROME.th.tagline,
  alternates: { canonical: `${SITE}/th/` },
  openGraph: {
    title: "ชุมชน HoldemMaster — ฟีดสดสำหรับผู้เล่นโป๊กเกอร์",
    description: CHROME.th.tagline,
    url: `${SITE}/th/`,
    siteName: "HoldemMaster",
    locale: "th_TH",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="th" />;
}
