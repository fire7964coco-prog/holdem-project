import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { TOURNAMENTS, computeStatus } from "@/lib/tournaments";

/**
 * ★ 메타데이터도 대회 데이터에서 자동 생성한다.
 *
 * 예전엔 title·description에 "2026.07.28 기준", "WSOP 파이널 8/3~5" 같은 날짜가
 * 손으로 박혀 있었다. 대회가 끝나도 메타에는 계속 남는 구조였고,
 * 2026-07-28에 "WSOP 진행중"이 13일간 노출된 사고의 절반이 이것이었다.
 *
 * 이제 lib/tournaments.ts 하나만 고치면 카드·JSON-LD·메타가 함께 갱신된다.
 */
function kstToday(): string {
  return new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

export function generateMetadata(): Metadata {
  const today = kstToday();
  const dot = today.replace(/-/g, ".");
  const md = (d: string) => `${Number(d.slice(5, 7))}/${Number(d.slice(8, 10))}`;

  // 오늘 이후로 가장 가까운 국내 대회 3개
  const upcoming = TOURNAMENTS.filter(
    (t) => t.type === "domestic" && t.startDate && computeStatus(t, today) === "upcoming",
  )
    .sort((a, b) => (a.startDate! < b.startDate! ? -1 : 1))
    .slice(0, 3);

  const ongoing = TOURNAMENTS.filter(
    (t) => t.startDate && computeStatus(t, today) === "ongoing",
  ).slice(0, 2);

  const upcomingText = upcoming.map((t) => `${t.name} ${md(t.startDate!)}`).join("·");
  const ongoingText = ongoing.length
    ? `진행중 ${ongoing.map((t) => t.name).join("·")} · `
    : "";

  const title = upcoming.length
    ? `⚡ 홀덤 대회 일정 2026 — ${upcoming[0].name} ${md(upcoming[0].startDate!)} 개막`
    : "⚡ 홀덤 대회 일정 2026 — 국내외 공식 일정표";

  const description = (
    `【홀덤 대회 일정】${dot} 기준 · ${ongoingText}${upcomingText} 예정. ` +
    `⚡국내외 공식 일정·바이인을 대회별 공식 출처 링크와 함께.`
  ).slice(0, 158);

  return {
    title,
    description,
    alternates: { canonical: `${SITE}/tournaments` },
    openGraph: {
      title: `${title} | 홀덤마스터`,
      description:
        "국내·해외 홀덤 토너먼트 2026 일정표. 대회별 공식 출처 링크 첨부, 진행중/종료 자동 표시.",
      url: `${SITE}/tournaments`,
      siteName: "홀덤마스터",
      locale: "ko_KR",
      type: "article",
    },
  };
}

export default function TournamentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
