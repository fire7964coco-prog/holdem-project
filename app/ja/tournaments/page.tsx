import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import TournamentBoard from "@/components/tournament-board";
import { TOURNAMENTS, computeStatus } from "@/lib/tournaments";
import { BOARD_STRINGS, buildLocaleSchemas, localizedName, nextUpcoming } from "@/lib/tournaments-i18n";

const LOCALE = "ja" as const;

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
    ? `開催中は${running.map((t) => localizedName(t, LOCALE)).join("・")}。`
    : "";

  const title = s.metaTitle(next ? localizedName(next, LOCALE) : "", mmdd);

  return {
    // absolute — 루트 레이아웃 template의 "| 홀덤마스터"가 붙는 것을 막는다.
    title: { absolute: `${title}｜ホールデムマスター` },
    description: s.metaDescription(today.replace(/-/g, "."), ongoingText),
    alternates: {
      canonical: `${SITE}/${LOCALE}/tournaments`,
      languages: {
        ko: `${SITE}/tournaments`,
        en: `${SITE}/en/tournaments`,
        ja: `${SITE}/ja/tournaments`,
      },
    },
    openGraph: {
      title: `${title}｜ホールデムマスター`,
      description:
        "国内・海外のポーカー大会を、日程・バイイン・会場と公式サイトのリンクつきで一覧に。",
      url: `${SITE}/${LOCALE}/tournaments`,
      siteName: "ホールデムマスター",
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
