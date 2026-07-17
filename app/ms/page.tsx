import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";

export const metadata: Metadata = {
  title: "Komuniti HoldemMaster — Feed Langsung untuk Pemain Poker",
  description: "Bincangkan strategi Texas Hold'em, kad, blinds dan ranking dengan pemain dari seluruh dunia. Feed masa nyata — HoldemMaster Community.",
  alternates: { canonical: `${SITE}/ms/` },
  openGraph: {
    title: "Komuniti HoldemMaster — Feed Langsung untuk Pemain Poker",
    description: "Strategi · kad · ranking — berbincang secara langsung dengan pemain poker dari 14 negara.",
    url: `${SITE}/ms/`,
    siteName: "HoldemMaster",
    locale: "ms_MY",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="ms" />;
}
