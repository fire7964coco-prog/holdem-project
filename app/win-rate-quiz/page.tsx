import type { Metadata } from "next";
import WinRateQuizClient from "./win-rate-quiz-client";

const SITE = "https://www.holdemmaster.com";

export const metadata: Metadata = {
  title: "홀덤 승률 퀴즈 — 누가 이기고 있을까? | 홀덤마스터",
  description:
    "두 핸드 중 지금 누가 앞서 있는지 맞혀보세요. 프리플랍·플랍·턴마다 실제 승률이 어떻게 뒤집히는지 눈으로 확인하는 홀덤 승률 감각 테스트. 전부 정확히 계산된 확률입니다.",
  alternates: { canonical: `${SITE}/win-rate-quiz` },
  openGraph: {
    type: "website",
    url: `${SITE}/win-rate-quiz`,
    title: "홀덤 승률 퀴즈 — 누가 이기고 있을까? | 홀덤마스터",
    description:
      "프리플랍부터 리버까지, 카드 한 장에 승률이 어떻게 뒤집히는지 맞혀보는 홀덤 승률 감각 테스트. 정확히 계산된 실제 확률로 배우세요.",
    siteName: "홀덤마스터",
    locale: "ko_KR",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <WinRateQuizClient />;
}
