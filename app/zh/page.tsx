import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";
import { LocaleHomeJsonLd } from "@/lib/intl-jsonld";

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
  return (
    <>
      {/* 구조화 데이터 — 이름·설명은 **위 metadata를 그대로 재사용**한다.
          여기서 문장을 새로 지으면 메타와 스키마가 갈린다(허브 트랙에서 그 갈라짐을 여러 건 치웠다). */}
      <LocaleHomeJsonLd
        locale="zh"
        name={metadata.title as string}
        description={metadata.description as string}
      />
      <CommunityClient pageLocale="zh" />
    </>
  );
}
