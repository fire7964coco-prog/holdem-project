import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-client";

export const metadata: Metadata = {
  title: "德州扑克大师社区 — 全球扑克玩家动态",
  description:
    "与全球扑克玩家一起讨论德州扑克策略、牌型、盲注和概率。14个国家玩家的实时动态 — 德州扑克大师社区。",
  alternates: { canonical: `${SITE}/zh/` },
  openGraph: {
    title: "德州扑克大师社区 — 全球扑克玩家动态",
    description:
      "策略 · 牌型 · 盲注 — 与14个国家的扑克玩家实时交流。",
    url: `${SITE}/zh/`,
    siteName: "德州扑克大师",
    locale: "zh_CN",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient pageLocale="zh" />;
}
