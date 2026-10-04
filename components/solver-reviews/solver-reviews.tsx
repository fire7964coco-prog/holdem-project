import { getPublicSolverFeedback, type PublicFeedback } from "@/lib/solver-feedback-server";
import { MIN_REVIEWS_FOR_SUMMARY, SOLVER_REVIEWS_ANCHOR, type SolverFeedbackLocale } from "@/lib/solver-feedback-config";
import { SOLVER_REVIEWS_I18N, SOLVER_REVIEWS_INTL_TAG, type SolverReviewsDict } from "@/lib/solver-reviews-i18n";
import ReviewAvatar from "./review-avatar";
import { HelpfulButton, SolverFeedbackForm, SolverReviewsShell } from "./solver-reviews-client";

/**
 * 솔버 랜딩 «써 본 사람들» 블록 (2026-10-04 · 설계 docs/solver-review-design.md §2-3·§6)
 *
 * 🔴 서버 컴포넌트 + 쿠키 없는 읽기(lib/solver-feedback-server.ts createTaggedReadClient) — 랜딩은 SSG 로 남는다.
 *    후기 본문은 서버 HTML 에 들어간다(전체 목록도 <details> 로 접어 넣는다) → 검색·AI 가 읽는다.
 * 🔴 Review·AggregateRating 스키마는 넣지 않는다(설계 §5-2 · self-serving).
 * 🔴 서비스 키 없이 빌드되면 블록이 빈 채로 하루 굳는다 → 빌드 로그 경고 + data-solver-reviews="unavailable"
 *    (게이트 `npm run check:solver-feedback -- --build` 가 🔴).
 * 위치 = 각 랜딩 FAQ 바로 위(각 solver-client 의 reviews 슬롯).
 */

const TZ: Partial<Record<SolverFeedbackLocale, string>> = { ko: "Asia/Seoul", ja: "Asia/Tokyo" };

function fmtDay(iso: string, locale: SolverFeedbackLocale) {
  return new Intl.DateTimeFormat(SOLVER_REVIEWS_INTL_TAG[locale], {
    year: "numeric", month: "short", day: "numeric", timeZone: TZ[locale] ?? "UTC",
  }).format(new Date(iso));
}

function fmtMonth(iso: string, locale: SolverFeedbackLocale) {
  return new Intl.DateTimeFormat(SOLVER_REVIEWS_INTL_TAG[locale], {
    year: "numeric", month: "long", timeZone: TZ[locale] ?? "UTC",
  }).format(new Date(iso));
}

function Stars({ n }: { n: number }) {
  return (
    <span className="text-primary tracking-tight" aria-label={`${n}/5`}>
      {"★".repeat(n)}<span className="text-muted-foreground/40">{"★".repeat(5 - n)}</span>
    </span>
  );
}

function ProviderBadge({ p, locale }: { p: PublicFeedback["provider"]; locale: SolverFeedbackLocale }) {
  if (p === "google") return <span className="px-1 rounded border border-border text-[10px] font-bold" title="Google">G</span>;
  if (p === "kakao") return <span className="px-1 rounded border border-border text-[10px] font-bold" title="Kakao">{locale === "ko" ? "카카오" : "Kakao"}</span>;
  return null;
}

function Item({ f, t, locale }: { f: PublicFeedback; t: SolverReviewsDict; locale: SolverFeedbackLocale }) {
  return (
    <li className="py-4 border-t border-border first:border-t-0" data-fid={f.id}>
      {f.kind === "question" && (
        <p className={`mb-1.5 text-[11px] font-bold ${f.reply ? "text-emerald-700 dark:text-emerald-300" : "text-muted-foreground"}`}>
          {f.reply ? t.answered : t.awaiting}
        </p>
      )}
      <div className="flex items-start gap-3">
        <ReviewAvatar nickname={f.nickname} avatar={f.avatar} />
        <div className="min-w-0 flex-1">
          <p className="text-xs text-muted-foreground flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
            <span className="font-semibold text-foreground text-sm">{f.nickname}</span>
            <ProviderBadge p={f.provider} locale={locale} />
            {f.joinedAt && <span>· {t.joined(fmtMonth(f.joinedAt, locale))}</span>}
            <span>· <time dateTime={f.createdAt}>{fmtDay(f.createdAt, locale)}</time></span>
            {f.device && <span>· {t.devices[f.device]}</span>}
            {f.rating !== null && <span>· <Stars n={f.rating} /></span>}
          </p>
          {f.hasUsage && <p className="mt-0.5 text-[11px] text-emerald-700 dark:text-emerald-300">✓ {t.usage}</p>}
          <p className="mt-1.5 text-sm whitespace-pre-line break-words">{f.body}</p>
          {f.downside && <p className="mt-1.5 text-sm text-muted-foreground whitespace-pre-line break-words">— {f.downside}</p>}
          {f.reply && (
            <div className="mt-2 pl-3 border-l-2 border-primary/40 text-sm">
              <span className="text-xs font-bold text-primary">↳ {t.operator}</span>
              <p className="mt-0.5 whitespace-pre-line break-words">{f.reply.body}</p>
            </div>
          )}
          {f.kind === "review" && <HelpfulButton id={f.id} initial={f.helpful} />}
        </div>
      </div>
    </li>
  );
}

export default async function SolverReviews({ locale }: { locale: SolverFeedbackLocale }) {
  const t = SOLVER_REVIEWS_I18N[locale];
  const data = await getPublicSolverFeedback(locale);

  if (data.state === "unavailable") {
    if (data.reason === "no-key" && process.env.NEXT_PHASE === "phase-production-build") {
      console.warn(`⚠ [solver-reviews] SUPABASE_SERVICE_ROLE_KEY 없음 — ${locale} 후기 블록이 비어 굳는다(다음 재빌드까지).`);
    }
    // 조용히 숨는다 — 오류 문구로 랜딩을 덮지 않는다. 표지는 게이트가 읽는다.
    return <div id={SOLVER_REVIEWS_ANCHOR} data-solver-reviews="unavailable" data-reason={data.reason} hidden />;
  }

  const { reviews, questions, featuredIds, ratingAverage, ratingCount } = data;
  const n = reviews.length;
  const showSummary = n >= MIN_REVIEWS_FOR_SUMMARY;
  const featured = showSummary ? featuredIds.map((id) => reviews.find((r) => r.id === id)!).filter(Boolean) : [];

  return (
    <section id={SOLVER_REVIEWS_ANCHOR} data-solver-reviews="ok" data-count={n} className="mt-12 scroll-mt-20">
      <h2 className="text-xl font-bold">{t.title}</h2>
      {showSummary && <p className="mt-1 text-sm font-semibold">{t.summary(n, ratingAverage, ratingCount)}</p>}
      <div className="mt-2 text-xs text-muted-foreground">
        <p>ⓘ {t.noticeNeg} {t.noticeHide}</p>
        <details className="mt-1">
          <summary className="cursor-pointer select-none">{t.criteriaToggle}</summary>
          <ul className="mt-1 ml-4 list-disc space-y-0.5">
            <li>{t.criteria.link}</li>
            <li>{t.criteria.abuse}</li>
            <li>{t.criteria.ad}</li>
          </ul>
        </details>
      </div>

      <SolverReviewsShell locale={locale}>
        <SolverFeedbackForm locale={locale} empty={n === 0} />

        {n > 0 && !showSummary && (
          <ul className="mt-4">{reviews.map((f) => <Item key={f.id} f={f} t={t} locale={locale} />)}</ul>
        )}

        {showSummary && (
          <>
            <h3 className="mt-6 text-base font-bold">{t.featured}</h3>
            <ul className="mt-1">{featured.map((f) => <Item key={f.id} f={f} t={t} locale={locale} />)}</ul>
            <details className="mt-2 rounded-xl border border-border px-4 py-2">
              <summary className="cursor-pointer select-none text-sm font-semibold py-1">{t.allReviews(n)}</summary>
              <ul>{reviews.map((f) => <Item key={f.id} f={f} t={t} locale={locale} />)}</ul>
            </details>
          </>
        )}

        {questions.length > 0 && (
          <>
            <h3 className="mt-8 text-base font-bold">{t.questions}</h3>
            <ul className="mt-1">{questions.map((f) => <Item key={f.id} f={f} t={t} locale={locale} />)}</ul>
          </>
        )}
      </SolverReviewsShell>
    </section>
  );
}
