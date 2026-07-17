import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";

export const metadata: Metadata = {
  title: "Komunitas HoldemMaster — Feed Langsung untuk Pemain Poker",
  description: "Diskusikan strategi Texas Hold'em, kartu, blinds, dan ranking dengan pemain dari seluruh dunia. Feed real-time — HoldemMaster Community.",
  alternates: { canonical: `${SITE}/id/` },
  openGraph: {
    title: "Komunitas HoldemMaster — Feed Langsung untuk Pemain Poker",
    description: "Strategi · kartu · ranking — diskusi langsung dengan pemain poker dari 14 negara.",
    url: `${SITE}/id/`,
    siteName: "HoldemMaster",
    locale: "id_ID",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="id" />;
}
