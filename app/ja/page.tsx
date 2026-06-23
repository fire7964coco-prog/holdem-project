import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "@/app/community/community-client";

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
  return <CommunityClient pageLocale="ja" />;
}
