import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-client";

export const metadata: Metadata = {
  title: "Cộng đồng HoldemMaster — Feed Trực Tiếp cho Người Chơi Poker",
  description: "Thảo luận về chiến lược Texas Hold'em, bài, blinds và bảng xếp hạng với người chơi từ khắp thế giới. Feed thời gian thực — HoldemMaster Community.",
  alternates: { canonical: `${SITE}/vi/` },
  openGraph: {
    title: "Cộng đồng HoldemMaster — Feed Trực Tiếp cho Người Chơi Poker",
    description: "Chiến lược · bài · xếp hạng — thảo luận trực tiếp với người chơi poker từ 14 quốc gia.",
    url: `${SITE}/vi/`,
    siteName: "HoldemMaster",
    locale: "vi_VN",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="vi" />;
}
