import type { Metadata } from "next";
import HomeClient from "./home-client";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "⚡ 홀덤 초보 가이드 — 블라인드·족보·체크 인기 TOP5",
  description:
    "【홀덤 초보】블라인드 뜻·족보 헷갈림·체크 규칙부터 무료로 정리했습니다. ⚡검색 많은 기초 가이드 TOP5·2026 대회 일정 — 테이블 앉기 전 5분만 읽으세요.",
  alternates: { canonical: `${SITE}/` },
  openGraph: {
    title: "⚡ 홀덤 초보 가이드 — 블라인드·족보·체크 인기 TOP5 | 홀덤마스터",
    description:
      "블라인드·족보·체크·스몰블라인드 인기 가이드와 홀덤 대회 일정 2026. 초보용 무료 허브.",
    url: `${SITE}/`,
    siteName: "홀덤마스터",
    locale: "ko_KR",
    type: "website",
  },
};

export default function Page() {
  return <HomeClient />;
}
