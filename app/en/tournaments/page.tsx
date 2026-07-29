import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import TournamentBoard from "@/components/tournament-board";
import { TOURNAMENTS, computeStatus } from "@/lib/tournaments";
import { BOARD_STRINGS, buildLocaleSchemas, localizedName, nextUpcoming } from "@/lib/tournaments-i18n";
import { TOURNAMENT_HREFLANG } from "@/lib/tournaments-hreflang";
import { resolveBlogLinks } from "@/lib/tournaments-blog-links";

const LOCALE = "en" as const;

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
    ? `Running now: ${running.map((t) => localizedName(t, LOCALE)).join(", ")}. `
    : "";

  const title = s.metaTitle(next ? localizedName(next, LOCALE) : "", mmdd);

  return {
    // absolute — 루트 레이아웃의 title.template이 "| 홀덤마스터"를 붙인다.
    // 영어 페이지에 한국어 사이트명이 SERP에 노출되면 안 된다.
    title: { absolute: `${title} | HoldemMaster` },
    description: s.metaDescription(today.replace(/-/g, "."), ongoingText),
    alternates: {
      canonical: `${SITE}/${LOCALE}/tournaments`,
      languages: TOURNAMENT_HREFLANG,
    },
    openGraph: {
      title: `${title} | HoldemMaster`,
      description:
        "Live poker tournaments worldwide — dates, buy-ins and an official-source link on every event.",
      url: `${SITE}/${LOCALE}/tournaments`,
      siteName: "HoldemMaster",
      locale: s.ogLocale,
      type: "article",
    },
  };
}

export default function Page() {
  const todayISO = kstToday();
  const schemas = buildLocaleSchemas(LOCALE, todayISO, SITE);
  // 번역본이 실제로 있는 대회에만 가이드 링크가 붙는다 (서버에서 해결)
  const blogLinks = resolveBlogLinks(LOCALE);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <TournamentBoard locale={LOCALE} todayISO={todayISO} blogLinks={blogLinks} />
    </>
  );
}
