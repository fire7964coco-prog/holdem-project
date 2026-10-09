import type { Metadata } from "next";
import { headers } from "next/headers";
import { cache } from "react";
import { createAdminClient } from "@/lib/supabase/admin";
import { solverLandingPath } from "@/lib/solver-feedback-config";
import { SPOT_SHARE_ID_PATTERN, formatSpotAmount, parseSpotPayload, solverOpenUrl, type SpotMeta } from "@/lib/spot-share";
import { SPOT_SHARE_I18N, spotShareLocale } from "@/lib/spot-share-i18n";

/**
 * 공유 스팟 짧은 주소 미리보기 (2026-10-09 · 후기창 코드 2 · 설계 docs/solver-review-design.md §8 ②)
 *
 * - 🔴 noindex(얇은 페이지 대량 생성 방지 · 설계 §8·§11). 사이트맵에도 안 넣는다.
 * - 미리보기 = 보드 · 팟 · 스택(명세 §4 — «자리»는 payload 에 없다).
 * - «솔버에서 열기» = solver.holdemmaster.com/?spot=<payload>&lang=<화면 언어>.
 * - 화면 언어 = 보는 사람의 Accept-Language (?lang= 으로 덮을 수 있다).
 */

export const dynamic = "force-dynamic";

type Row = { payload: string; meta: SpotMeta };

const readSpot = cache(async (id: string): Promise<Row | null> => {
  if (!SPOT_SHARE_ID_PATTERN.test(id)) return null;
  const db = createAdminClient();
  if (!db) return null;
  try {
    const { data } = await db.from("spot_shares").select("payload").eq("id", id).maybeSingle();
    if (!data?.payload) return null;
    // 저장 때 검사했지만 화면은 payload 를 다시 디코드한 값만 믿는다(meta 열 직접 수정에 끌려가지 않게).
    const parsed = parseSpotPayload(data.payload);
    return parsed.ok ? { payload: data.payload, meta: parsed.meta } : null;
  } catch {
    return null;
  }
});

function pageLocale(searchParams: { lang?: string | string[] }) {
  const o = typeof searchParams.lang === "string" ? searchParams.lang : null;
  return spotShareLocale(headers().get("accept-language"), o);
}

const SUIT: Record<string, { sym: string; red: boolean }> = {
  s: { sym: "♠", red: false }, h: { sym: "♥", red: true }, d: { sym: "♦", red: true }, c: { sym: "♣", red: false },
};
const cardText = (c: string) => `${c[0] === "T" ? "10" : c[0]}${SUIT[c[1]].sym}`;

export async function generateMetadata({ params, searchParams }: { params: { id: string }; searchParams: { lang?: string } }): Promise<Metadata> {
  const t = SPOT_SHARE_I18N[pageLocale(searchParams)];
  const row = await readSpot(params.id);
  const robots = { index: false, follow: false };
  if (!row) return { title: { absolute: `${t.notFound} | HoldemMaster` }, robots };
  const m = row.meta;
  const parts = [`${t.board} ${m.board.map(cardText).join(" ")}`];
  const pot = formatSpotAmount(m.pot, m.unit);
  const stack = formatSpotAmount(m.stack, m.unit);
  if (pot) parts.push(`${t.pot} ${pot}`);
  if (stack) parts.push(`${t.stack} ${stack}`);
  const title = `${t.title} — ${m.board.map(cardText).join(" ")}`;
  return {
    title: { absolute: `${title} | HoldemMaster` },
    description: parts.join(" · "),
    robots,
    openGraph: { type: "website", siteName: "HoldemMaster", title, description: parts.join(" · ") },
    twitter: { card: "summary", title, description: parts.join(" · ") },
  };
}

export default async function SpotSharePage({ params, searchParams }: { params: { id: string }; searchParams: { lang?: string } }) {
  const locale = pageLocale(searchParams);
  const t = SPOT_SHARE_I18N[locale];
  const row = await readSpot(params.id);
  const landing = solverLandingPath(locale);

  if (!row) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center" lang={locale} data-spot-share="not-found">
        <h1 className="text-2xl font-bold">{t.notFound}</h1>
        <p className="mt-3 text-muted-foreground">{t.notFoundBody}</p>
        <a href={landing} className="mt-8 inline-block rounded-xl bg-primary px-8 py-3 font-bold text-primary-foreground hover:opacity-90">
          {t.landing} →
        </a>
      </div>
    );
  }

  const m = row.meta;
  const pot = formatSpotAmount(m.pot, m.unit);
  const stack = formatSpotAmount(m.stack, m.unit);
  return (
    <div className="mx-auto max-w-xl px-4 py-12" lang={locale} data-spot-share="ok">
      <h1 className="text-2xl font-bold">{t.title}</h1>
      <p className="mt-2 text-muted-foreground">{t.lead}</p>

      <div className="mt-8 rounded-2xl border border-border bg-card p-5">
        <div className="text-sm font-semibold text-muted-foreground">{t.board}</div>
        <div className="mt-2 flex flex-wrap gap-2" aria-label={`${t.board} ${m.board.map(cardText).join(" ")}`}>
          {m.board.map((c, i) => (
            <span
              key={i}
              className={`inline-flex h-16 w-12 items-center justify-center rounded-lg border border-border bg-white text-xl font-bold shadow-sm ${SUIT[c[1]].red ? "text-red-600" : "text-neutral-900"}`}
            >
              {cardText(c)}
            </span>
          ))}
        </div>
        {(pot || stack) && (
          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {pot && (
              <div>
                <dt className="text-muted-foreground">{t.pot}</dt>
                <dd className="text-lg font-bold">{pot}</dd>
              </div>
            )}
            {stack && (
              <div>
                <dt className="text-muted-foreground">{t.stack}</dt>
                <dd className="text-lg font-bold">{stack}</dd>
              </div>
            )}
          </dl>
        )}
      </div>

      <div className="mt-8 flex flex-col items-start gap-4">
        <a
          href={solverOpenUrl(row.payload, locale)}
          target="_blank"
          rel="noopener"
          className="inline-block rounded-xl bg-primary px-8 py-3 text-lg font-bold text-primary-foreground hover:opacity-90"
          data-spot-share-open
        >
          {t.open}
        </a>
        <a href={landing} className="text-sm text-primary underline underline-offset-4">
          {t.landing}
        </a>
      </div>
    </div>
  );
}
