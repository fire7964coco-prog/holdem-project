import { NextResponse } from "next/server";
import { MIN_REVIEWS_FOR_SUMMARY, SOLVER_APP_ORIGIN, isSolverFeedbackLocale } from "@/lib/solver-feedback-config";
import { getPublicSolverFeedback } from "@/lib/solver-feedback-server";
import { SOLVER_REVIEWS_I18N } from "@/lib/solver-reviews-i18n";

/**
 * 앱 PWA 설치 자리 «요약 한 줄» (2026-10-09 · 후기창 코드 2 · 설계 docs/solver-review-design.md §3-3·§8 ③)
 *
 * GET ?locale=xx → 200 { text, reviews, ratingAverage, ratingCount }
 *   - text = 랜딩 블록과 같은 문장(lib/solver-reviews-i18n.ts summary) — 앱은 받은 text 만 그대로 보인다(FeedbackSummary.vue).
 *   - 후기 3개 미만 · 받지 않는 로케일 · 테이블/키 없음 → text = "" (앱이 줄을 숨긴다).
 *   - 읽기 = 랜딩과 같은 태그 캐시(후기 쓰기·숨김 때 revalidateTag) · CDN 5분.
 */

export const dynamic = "force-dynamic";

function headers(origin: string | null): Record<string, string> {
  const h: Record<string, string> = { Vary: "Origin", "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" };
  if (origin === SOLVER_APP_ORIGIN) h["Access-Control-Allow-Origin"] = origin;
  return h;
}

export async function GET(req: Request) {
  const origin = req.headers.get("origin");
  const empty = { text: "", reviews: 0, ratingAverage: null, ratingCount: 0 };
  const locale = new URL(req.url).searchParams.get("locale");
  if (!isSolverFeedbackLocale(locale)) return NextResponse.json(empty, { headers: headers(origin) });
  const s = await getPublicSolverFeedback(locale);
  if (s.state !== "ok") return NextResponse.json(empty, { headers: headers(origin) });
  const n = s.reviews.length;
  const text = n >= MIN_REVIEWS_FOR_SUMMARY ? SOLVER_REVIEWS_I18N[locale].summary(n, s.ratingAverage, s.ratingCount) : "";
  return NextResponse.json(
    { text, reviews: n, ratingAverage: s.ratingAverage, ratingCount: s.ratingCount },
    { headers: headers(origin) },
  );
}
