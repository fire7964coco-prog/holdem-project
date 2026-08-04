import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import TournamentBoard from "@/components/tournament-board";
import { TOURNAMENTS, computeStatus } from "@/lib/tournaments";
import { BOARD_STRINGS, buildLocaleSchemas, localizedName, nextUpcoming } from "@/lib/tournaments-i18n";
import { TOURNAMENT_HREFLANG } from "@/lib/tournaments-hreflang";
import { resolveBlogLinks } from "@/lib/tournaments-blog-links";
import HubPage from "@/components/hub-page";

const LOCALE = "es" as const;

/** 기준일은 빌드 시점(서버)에서 계산한다. 클라이언트 new Date()는 하이드레이션 불일치를 낸다. */
function kstToday(): string {
  return new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

export function generateMetadata(): Metadata {
  const today = kstToday();
  const s = BOARD_STRINGS[LOCALE]!;
  const next = nextUpcoming(today);
  const mmdd = next?.startDate
    ? `${Number(next.startDate.slice(8, 10))}/${Number(next.startDate.slice(5, 7))}`
    : "";
  const running = TOURNAMENTS.filter(
    (t) => t.startDate && computeStatus(t, today) === "ongoing",
  ).slice(0, 2);
  const ongoingText = running.length
    ? `En curso: ${running.map((t) => localizedName(t, LOCALE)).join(", ")}.`
    : "";

  const title = s.metaTitle(next ? localizedName(next, LOCALE) : "", mmdd);

  return {
    // absolute — 루트 레이아웃 template의 "| 홀덤마스터"가 붙는 것을 막는다.
    title: { absolute: `${title} | HoldemMaster` },
    description: s.metaDescription(today.replace(/-/g, "."), ongoingText),
    alternates: {
      canonical: `${SITE}/${LOCALE}/tournaments`,
      languages: TOURNAMENT_HREFLANG,
    },
    // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다 (X 공유 시 노출)
    twitter: {
      card: "summary_large_image",
      title: `${title} | HoldemMaster`,
      description: "Torneos de poker en vivo de todo el mundo: fechas, buy-in y la fuente oficial de cada uno.",
    },
    openGraph: {
      title: `${title} | HoldemMaster`,
      description:
        "Torneos de poker en vivo de todo el mundo: fechas, buy-in y la fuente oficial de cada uno.",
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
      {/* title은 마스트헤드의 「지금 여기」 표시(h1 아님 — 보드가 자기 h1을 갖는다).
          pillar-clusters.ts es의 pillarLabel과 같은 값이다. */}
      <HubPage title="Torneos" locale="es">
        <TournamentBoard locale={LOCALE} todayISO={todayISO} blogLinks={blogLinks} />
      </HubPage>
    </>
  );
}
