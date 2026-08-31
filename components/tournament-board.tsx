"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, ExternalLink, Star, ChevronRight } from "lucide-react";
import { TOURNAMENTS, computeStatus, type TournamentStatus } from "@/lib/tournaments";
import {
  BOARD_STRINGS,
  HOME_COUNTRY,
  localizedName,
  localizedMonthBadge,
  localizedDateRange,
  localizeField,
  localizeCity,
  localizedNote,
  type BoardLocale,
} from "@/lib/tournaments-i18n";
import { SITE } from "@/lib/site";

/**
 * 다국어 토너먼트 보드.
 *
 * ko(`app/tournaments`)는 국내 독자용 해설이 많이 붙은 별도 페이지고,
 * 이쪽은 대회 데이터 자체를 세계 공용으로 노출하는 게 목적이라 구조가 더 가볍다.
 * 데이터는 lib/tournaments.ts 하나를 공유하므로 대회를 추가하면 전 언어에 동시 반영된다.
 *
 * framer-motion을 쓰지 않는다 — 카드가 100개를 넘는 페이지에서
 * 순차 딜레이 애니메이션은 LCP를 실제보다 크게 밀어 올린다.
 */

type Filter = "all" | TournamentStatus;
/** "all" 또는 ISO 국가코드(t.country). */
type CountryFilter = string;

export default function TournamentBoard({
  locale,
  todayISO,
  blogLinks = {},
}: {
  locale: BoardLocale;
  todayISO: string;
  /**
   * 대회 id → 이 로케일의 상세 가이드 경로.
   * ★ 서버(page.tsx)에서 resolveBlogLinks()로 만들어 내려준다.
   *   여기서 직접 포스트 목록을 import하면 클라이언트 번들이 터진다.
   */
  blogLinks?: Record<string, string>;
}) {
  const s = BOARD_STRINGS[locale];
  const [filter, setFilter] = useState<Filter>("all");
  /**
   * ★ 기본값을 "all"에서 바꾸지 마라.
   *   이 컴포넌트의 첫 렌더가 곧 산출물 HTML이라, 기본을 자국으로 잡으면
   *   구글이 보는 본문이 121장 → 십수 장으로 줄어든다.
   *   /zh-hant/tournaments는 GSC 기준선을 막 떠 둔 페이지다(핸드오프 「Step 0 기준선」).
   *   필터는 «읽는 사람이 좁히는 장치»이지 색인 범위를 줄이는 장치가 아니다.
   */
  const [country, setCountry] = useState<CountryFilter>("all");

  if (!s) return null;

  const home = HOME_COUNTRY[locale];
  // 자국 개최 대회를 위로. 그 안에서는 원래 순서(시작일 오름차순)를 유지한다.
  const ordered = [...TOURNAMENTS].sort((a, b) => {
    const ha = home.includes(a.country) ? 0 : 1;
    const hb = home.includes(b.country) ? 0 : 1;
    return ha - hb;
  });

  const byStatus =
    filter === "all"
      ? ordered
      : ordered.filter((t) => computeStatus(t, todayISO) === filter);

  const visible =
    country === "all" ? byStatus : byStatus.filter((t) => t.country === country);

  const countries = new Set(TOURNAMENTS.map((t) => t.country)).size;
  const dot = todayISO.replace(/-/g, ".");

  const FILTERS: { key: Filter; label: string }[] = [
    { key: "all", label: s.filterAll },
    { key: "ongoing", label: s.filterOngoing },
    { key: "upcoming", label: s.filterUpcoming },
    { key: "ended", label: s.filterEnded },
  ];

  /**
   * 국가 칩 — 이 로케일 독자의 자국(HOME_COUNTRY)만.
   * 121건을 통째로 뿌리면 대만 독자가 오스트리아 대회를 스크롤하게 된다.
   * 개수는 «현재 상태 필터를 적용한 뒤» 세므로 «진행중 × 台灣»처럼 조합해도 값이 맞는다.
   * 대회가 한 건도 없는 코드(zh의 CN·KH, zh-hant의 HK 등)는 여기서 자동으로 빠진다.
   */
  const countryChips = home
    .map((code) => ({
      code,
      label: s.homeCountryNames[code] ?? code,
      total: TOURNAMENTS.filter((t) => t.country === code).length,
      count: byStatus.filter((t) => t.country === code).length,
    }))
    .filter((c) => c.total > 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            {s.h1}
          </h1>
          <span className="text-xs bg-primary/15 text-primary border border-primary/30 px-2.5 py-0.5 rounded-full font-bold">
            {s.asOf(dot)}
          </span>
        </div>
        <p className="text-sm font-semibold text-primary mb-2">
          {s.countsLine(TOURNAMENTS.length, countries)}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
          {s.heroLead}
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mb-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${
              filter === f.key
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 국가 줄은 상태 줄보다 한 급 작게 — 모바일에서 칩이 5줄까지 쌓여 첫 카드를 밀어낸다.
          크기 차이 자체가 «다른 축의 필터»라는 신호이기도 하다. */}
      {countryChips.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-6">
          <button
            onClick={() => setCountry("all")}
            aria-pressed={country === "all"}
            className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all ${
              country === "all"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            {s.filterAllCountries}
          </button>
          {countryChips.map((c) => (
            <button
              key={c.code}
              onClick={() => setCountry(c.code)}
              aria-pressed={country === c.code}
              className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all ${
                country === c.code
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              {c.label} {c.count}
            </button>
          ))}
        </div>
      )}

      {visible.length === 0 ? (
        <p className="text-muted-foreground text-sm py-12 text-center">{s.emptyState}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {visible.map((t) => {
            const st = computeStatus(t, todayISO);
            return (
              <article
                key={t.id}
                className={`bg-card border rounded-2xl p-5 flex flex-col gap-3 ${
                  t.highlight ? "border-yellow-500/40" : "border-border"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" aria-hidden>
                      {t.emoji}
                    </span>
                    <div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${t.color} mb-1 inline-block`}
                      >
                        {localizedMonthBadge(t, locale)}
                      </span>
                      <h2 className="text-sm font-bold text-foreground leading-snug">
                        {localizedName(t, locale)}
                      </h2>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${
                      st === "ongoing"
                        ? "bg-green-500/15 text-green-400 border-green-500/30"
                        : st === "ended"
                          ? "bg-muted/20 text-muted-foreground/80 border-border"
                          : "bg-primary/10 text-primary border-primary/25"
                    }`}
                  >
                    {s.status[st]}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-background/50 rounded-lg p-2">
                    <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">
                      {s.colDates}
                    </div>
                    <div className="font-semibold text-foreground">
                      {localizedDateRange(t, locale) || s.yearRound}
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-2">
                    <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">
                      {s.colBuyin}
                    </div>
                    <div className="font-semibold text-foreground">
                      {localizeField(t.buyin, locale)}
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-2 col-span-2">
                    <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">
                      {s.colVenue}
                    </div>
                    <div className="font-semibold text-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3 flex-shrink-0" aria-hidden />
                      {localizeField(t.venue, locale)}, {localizeCity(t.city, locale)}
                    </div>
                  </div>
                </div>

                {/* ★ 배지 — GTD 보증금·엔트리 수·메인이벤트 날짜가 여기 들어간다.
                    번역이 없는 대회는 undefined라서 아예 안 그린다(한국어 폴백 금지). */}
                {localizedNote(t, locale) && (
                  <div className="flex items-start gap-1.5 bg-primary/8 border border-primary/20 rounded-lg px-2.5 py-2">
                    <Star className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-[11px] text-foreground/80 leading-snug">
                      {localizedNote(t, locale)}
                    </span>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2 mt-auto">
                  {t.sourceUrl && (
                    <a
                      href={t.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] text-primary font-semibold hover:underline"
                    >
                      {s.officialSite} <ExternalLink className="w-3 h-3" aria-hidden />
                    </a>
                  )}
                  {blogLinks[t.id] && (
                    <Link
                      href={blogLinks[t.id]}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/15 border border-primary/35 text-[11px] text-primary font-bold hover:bg-primary/25 transition-colors"
                    >
                      📖 {s.guideLink} <ChevronRight className="w-3 h-3" aria-hidden />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}

      <p className="text-[11px] text-muted-foreground/70 mt-6 leading-relaxed">
        {s.sourceNote}
      </p>

      <section className="mt-14">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-5">
          {s.localHeading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {s.localBlocks.map((b) => (
            <div
              key={b.title}
              className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-2"
            >
              <div className="flex items-start gap-1.5">
                <Star className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden />
                <h3 className="text-sm font-bold text-foreground leading-snug">{b.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-5">
          {s.faqHeading}
        </h2>
        <div className="flex flex-col gap-3">
          {s.faqs.map((f) => (
            <details
              key={f.q}
              className="bg-card border border-border rounded-2xl px-5 py-4 group"
            >
              <summary className="text-sm font-bold text-foreground cursor-pointer list-none flex justify-between gap-3">
                {f.q}
                <span className="text-primary flex-shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-xs text-muted-foreground leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <p className="text-[11px] text-muted-foreground/60 mt-10">
        <a href={`${SITE}/tournaments`} className="hover:underline">
          {s.koLink}
</a>
      </p>
    </div>
  );
}
