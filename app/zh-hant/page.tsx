import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";
import { LocaleHomeJsonLd } from "@/lib/intl-jsonld";

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
  return (
    <>
      {/* 구조화 데이터 — 이름·설명은 **위 metadata를 그대로 재사용**한다.
          여기서 문장을 새로 지으면 메타와 스키마가 갈린다(허브 트랙에서 그 갈라짐을 여러 건 치웠다). */}
      <LocaleHomeJsonLd
        locale="zh-hant"
        name={metadata.title as string}
        description={metadata.description as string}
      />
      <CommunityClient pageLocale="zh-hant" />
    </>
  );
}
