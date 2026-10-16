import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import TournamentBoard from "@/components/tournament-board";
import { TOURNAMENTS, computeStatus } from "@/lib/tournaments";
import { BOARD_STRINGS, buildLocaleSchemas, localizedName, nextUpcoming, shortDayMonth } from "@/lib/tournaments-i18n";
import { TOURNAMENT_HREFLANG } from "@/lib/tournaments-hreflang";
import { resolveBlogLinks } from "@/lib/tournaments-blog-links";
import HubPage from "@/components/hub-page";

const LOCALE = "it" as const;

// Match the board's build-time reference date to avoid hydration drift.
function kstToday(): string {
  return new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

export function generateMetadata(): Metadata {
  const today = kstToday();
  const s = BOARD_STRINGS[LOCALE]!;
  const next = nextUpcoming(today);
  const mmdd = next?.startDate ? shortDayMonth(next.startDate, LOCALE) : "";
  const running = TOURNAMENTS.filter(
    (t) => t.startDate && computeStatus(t, today) === "ongoing",
  ).slice(0, 2);
  const ongoingText = running.length
    ? `In corso: ${running.map((t) => localizedName(t, LOCALE)).join(", ")}.`
    : "";

  const title = s.metaTitle(next ? localizedName(next, LOCALE) : "", mmdd);

  return {
    title: { absolute: `${title} | HoldemMaster` },
    description: s.metaDescription(today.split("-").reverse().join("/"), ongoingText),
    alternates: {
      canonical: `${SITE}/${LOCALE}/tournaments`,
      languages: TOURNAMENT_HREFLANG,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | HoldemMaster`,
      description:
        "Tornei poker live nel mondo: date, buy-in e link alle fonti ufficiali per organizzare la tua prossima trasferta.",
    },
    openGraph: {
      title: `${title} | HoldemMaster`,
      description:
        "Tornei poker live nel mondo: date, buy-in e link alle fonti ufficiali per organizzare la tua prossima trasferta.",
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
  const blogLinks = resolveBlogLinks(LOCALE);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <HubPage title="Tornei poker live" locale="it">
        <TournamentBoard locale={LOCALE} todayISO={todayISO} blogLinks={blogLinks} />
      </HubPage>
    </>
  );
}
