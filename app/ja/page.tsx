import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-home";
import { LocaleHomeJsonLd } from "@/lib/intl-jsonld";

export const metadata: Metadata = {
  title: "ホールデムマスター コミュニティ — 世界のポーカープレイヤーのライブフィード",
  description:
    "テキサスホールデムの戦略・ハンド・ブラインド・役を世界中のプレイヤーと議論。14ヵ国のポーカープレイヤーによるリアルタイムフィード — ホールデムマスター コミュニティ。",
  alternates: { canonical: `${SITE}/ja/` },
  openGraph: {
    title: "ホールデムマスター コミュニティ — 世界のポーカープレイヤーのライブフィード",
    description:
      "戦略・ハンド・役をリアルタイムで議論。14ヵ国のプレイヤーが集まるライブフィード。",
    url: `${SITE}/ja/`,
    siteName: "ホールデムマスター",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      {/* 구조화 데이터 — 이름·설명은 **위 metadata를 그대로 재사용**한다.
          여기서 문장을 새로 지으면 메타와 스키마가 갈린다(허브 트랙에서 그 갈라짐을 여러 건 치웠다). */}
      <LocaleHomeJsonLd
        locale="ja"
        name={metadata.title as string}
        description={metadata.description as string}
      />
      <CommunityClient pageLocale="ja" />
    </>
  );
}
