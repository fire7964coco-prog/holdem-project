import type { Metadata } from "next";
import WinRateQuizClient from "./win-rate-quiz-client";

const SITE = "https://www.holdemmaster.com";

export const metadata: Metadata = {
  title: "홀덤 승률 시뮬레이터 — 카드가 열릴 때마다 승률이 바뀐다 | 홀덤마스터",
  description:
    "두세 명의 핸드를 랜덤으로 돌려, 프리플랍·플랍·턴·리버 카드가 열릴 때마다 각자의 실제 승률이 어떻게 변하는지 눈으로 확인하는 홀덤 승률 시뮬레이터. 전부 정확히 계산된 확률입니다.",
  alternates: { canonical: `${SITE}/win-rate-quiz` },
  openGraph: {
    type: "website",
    url: `${SITE}/win-rate-quiz`,
    title: "홀덤 승률 시뮬레이터 — 카드가 열릴 때마다 승률이 바뀐다 | 홀덤마스터",
    description:
      "프리플랍부터 리버까지, 카드 한 장에 각 플레이어 승률이 어떻게 바뀌는지 눈으로 보는 홀덤 승률 시뮬레이터. 2~4인, 정확히 계산된 실제 확률.",
    siteName: "홀덤마스터",
    locale: "ko_KR",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <WinRateQuizClient />;
}
