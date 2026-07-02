import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "⚡ 홀덤 대회 일정 2026 — WSOP 진행중·APT 인천 예정",
  description:
    "【홀덤 대회 일정】2026.07.02 기준 · WSOP 라스베이거스 진행중(메인 7/2~13) · APT 인천 8/7·APPT 코리아 9/3·EPT 바르셀로나 8/16 예정. ⚡국내외 일정·바이인·종료/진행중/예정 상태를 한 페이지에.",
  alternates: { canonical: `${SITE}/tournaments` },
  openGraph: {
    title: "⚡ 홀덤 대회 일정 2026 — WSOP·APT·GOP | 홀덤마스터",
    description: "국내·해외 홀덤 토너먼트 2026 일정표. 공식 일정 반영·진행중/종료 표시.",
    url: `${SITE}/tournaments`,
    siteName: "홀덤마스터",
    locale: "ko_KR",
    type: "article",
  },
};

export default function TournamentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
