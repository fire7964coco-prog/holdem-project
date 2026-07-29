import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import TournamentBoard from "@/components/tournament-board";
import { TOURNAMENTS, computeStatus } from "@/lib/tournaments";
import { BOARD_STRINGS, buildLocaleSchemas, localizedName, nextUpcoming } from "@/lib/tournaments-i18n";
import { TOURNAMENT_HREFLANG } from "@/lib/tournaments-hreflang";

const LOCALE = "zh" as const;

/** 기준일은 빌드 시점(서버)에서 계산한다. 클라이언트 new Date()는 하이드레이션 불일치를 낸다. */
function kstToday(): string {
  return new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

export function generateMetadata(): Metadata {
  const today = kstToday();
  const s = BOARD_STRINGS[LOCALE]!;
  const next = nextUpcoming(today);
  const mmdd = next?.startDate
    ? `${Number(next.startDate.slice(5, 7))}/${Number(next.startDate.slice(8, 10))}`
    : "";
  const running = TOURNAMENTS.filter(
    (t) => t.startDate && computeStatus(t, today) === "ongoing",
  ).slice(0, 2);
  const ongoingText = running.length
    ? `进行中：${running.map((t) => localizedName(t, LOCALE)).join("、")}。`
    : "";

  const title = s.metaTitle(next ? localizedName(next, LOCALE) : "", mmdd);

  return {
    // absolute — 루트 레이아웃 template의 "| 홀덤마스터"가 붙는 것을 막는다.
    title: { absolute: `${title} | 德扑大师` },
    description: s.metaDescription(today.replace(/-/g, "."), ongoingText),
    alternates: {
      canonical: `${SITE}/${LOCALE}/tournaments`,
      languages: TOURNAMENT_HREFLANG,
    },
    openGraph: {
      title: `${title} | 德扑大师`,
      description: "全球德州扑克赛事日程——日期、买入、场馆，每一场都附主办方官网链接。",
      url: `${SITE}/${LOCALE}/tournaments`,
      siteName: "德扑大师",
      locale: s.ogLocale,
      type: "article",
    },
  };
}

export default function Page() {
  const todayISO = kstToday();
  const schemas = buildLocaleSchemas(LOCALE, todayISO, SITE);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <TournamentBoard locale={LOCALE} todayISO={todayISO} />
    </>
  );
}
