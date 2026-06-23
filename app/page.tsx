import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CommunityClient from "./community/community-client";

export const metadata: Metadata = {
  title: "홀덤마스터 커뮤니티 — 전 세계 포커 플레이어의 피드",
  description:
    "홀덤 전략·블라인드·족보·핸드를 실전 경험과 함께 토론하세요. 14개국 포커 플레이어들의 라이브 피드 — 홀덤마스터 커뮤니티.",
  alternates: { canonical: `${SITE}/` },
  openGraph: {
    title: "홀덤마스터 커뮤니티 — 전 세계 포커 플레이어의 피드",
    description:
      "홀덤 전략·블라인드·족보를 실전 경험과 함께 토론. 14개국 플레이어 라이브 피드.",
    url: `${SITE}/`,
    siteName: "홀덤마스터",
    locale: "ko_KR",
    type: "website",
  },
};

export default function Page() {
  return <CommunityClient />;
}
