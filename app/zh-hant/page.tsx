import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";

export const metadata: Metadata = {
  title: "德州撲克大師社群 — 全球撲克玩家動態",
  description:
    "與全球撲克玩家一起討論德州撲克策略、牌型、盲注與機率。多國玩家的即時動態 — 德州撲克大師社群。",
  alternates: { canonical: `${SITE}/zh-hant/` },
  openGraph: {
    title: "德州撲克大師社群 — 全球撲克玩家動態",
    description: "策略 · 牌型 · 盲注 — 與各國撲克玩家即時交流。",
    url: `${SITE}/zh-hant/`,
    siteName: "德州撲克大師",
    locale: "zh_TW",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="zh-hant" />;
}
