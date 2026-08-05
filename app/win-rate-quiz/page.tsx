import type { Metadata } from "next";
import WinRateQuizClient from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";

const SITE = "https://www.holdemmaster.com";

export const metadata: Metadata = {
  title: "홀덤 승률 시뮬레이터 — 어디서 끊었어야 했는지 복기까지",
  description:
    "상대 패를 모르는 실전 그대로, 단계별 내 승률과 플랍부터의 팟오즈 필요 승률을 보여주고 마지막에 어디서 폴드했어야 하는지 복기해주는 홀덤 승률 시뮬레이터.",
  alternates: { canonical: `${SITE}/win-rate-quiz` },
  openGraph: {
    type: "website",
    url: `${SITE}/win-rate-quiz`,
    title: "홀덤 승률 시뮬레이터 — 어디서 끊었어야 했는지 복기까지 | 홀덤마스터",
    description:
      "상대 패는 가린 채 단계별 내 승률과 플랍부터의 팟오즈를 보여주고, 끝나면 어디서 폴드했어야 하는지 복기해주는 홀덤 승률 시뮬레이터.",
    siteName: "홀덤마스터",
    locale: "ko_KR",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <HubPage title="승률 시뮬레이터">
      <WinRateQuizClient />
    </HubPage>
  );
}
