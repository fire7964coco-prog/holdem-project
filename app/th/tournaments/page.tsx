import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import TournamentBoard from "@/components/tournament-board";
import { TOURNAMENTS, computeStatus } from "@/lib/tournaments";
import { BOARD_STRINGS, buildLocaleSchemas, localizedName, nextUpcoming, shortDayMonth, thaiDate } from "@/lib/tournaments-i18n";
import { TOURNAMENT_HREFLANG } from "@/lib/tournaments-hreflang";
import { resolveBlogLinks } from "@/lib/tournaments-blog-links";
import HubPage from "@/components/hub-page";

const LOCALE = "th" as const;

// Same build-time reference date as the board; Gregorian year, no Buddhist-era Intl.
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
    ? `กำลังแข่งขัน: ${running.map((t) => localizedName(t, LOCALE)).join(", ")}`
    : "";
  const title = s.metaTitle(next ? localizedName(next, LOCALE) : "", mmdd);
  const socialDescription = "ทัวร์นาเมนต์โป๊กเกอร์สดทั่วโลก ดูวันที่ บายอิน และลิงก์ผู้จัด ก่อนวางแผนเดินทาง";

  return {
    title: { absolute: `${title} | HoldemMaster` },
    description: s.metaDescription(thaiDate(today), ongoingText),
    alternates: {
      canonical: `${SITE}/${LOCALE}/tournaments`,
      languages: TOURNAMENT_HREFLANG,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | HoldemMaster`,
      description: socialDescription,
    },
    openGraph: {
      title: `${title} | HoldemMaster`,
      description: socialDescription,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <HubPage title="ทัวร์นาเมนต์โป๊กเกอร์" locale="th">
        <TournamentBoard locale={LOCALE} todayISO={todayISO} blogLinks={blogLinks} />
      </HubPage>
    </>
  );
}
