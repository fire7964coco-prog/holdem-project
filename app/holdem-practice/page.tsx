import type { Metadata } from "next";
import HoldemPracticeClient from "./holdem-practice-client";

const SITE = "https://www.holdemmaster.com";

export const metadata: Metadata = {
  title: "홀덤 연습장 — 무료 텍사스 홀덤 연습 게임",
  description:
    "가입 없이 무료 연습 포인트로 즐기는 텍사스 홀덤 연습 게임. AI 상대로 프리플랍부터 리버까지 베팅·폴드·레이즈 전략을 마음껏 시험해보세요. 현금 가치 없는 교육·연습용입니다.",
  alternates: { canonical: `${SITE}/holdem-practice` },
  openGraph: {
    type: "website",
    url: `${SITE}/holdem-practice`,
    title: "홀덤 연습장 — 무료 텍사스 홀덤 연습 게임 | 홀덤마스터",
    description:
      "무료 연습 포인트 10,000점으로 AI 상대와 텍사스 홀덤을 연습하세요. 포지션·베팅 전략을 실전처럼 시험해보는 교육용 게임.",
    siteName: "홀덤마스터",
    locale: "ko_KR",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <HoldemPracticeClient />;
}
