import Link from "next/link";
/**
 * ★import는 반드시 `@/lib/theme`에서. `@/app/community/post-card`에도 같은 상수가 있지만
 *   그 파일은 "use client"라 서버 컴포넌트가 값을 읽으면 빌드가 깨진다
 *   ("Could not find the module ...post-card.tsx#FLAG#ko in the React Client Manifest").
 *   실제로 한 번 밟았다 — 되돌리지 말 것.
 */
import { BG, CARD, BORDER, INK, MUTED, RED, FLAG, FONT_SANS, FONT_SERIF } from "@/lib/theme";
import type { TrendingItem } from "@/lib/hub-trending";
import { hubLabels } from "@/lib/hub-i18n";
import type { SecondaryLocale } from "@/lib/intl";
import SolverPromo from "@/components/solver-promo";

/**
 * 허브 페이지 우측 사이드바 — 홈(community-client.tsx)의 오른쪽 <aside>와 같은 구성·같은 규격.
 *
 * ★홈의 것을 import하지 않고 따로 둔 이유: 홈의 사이드바는 86KB 클라이언트 컴포넌트
 *   한복판에 있고 setTab·myLanguage·Supabase 상태에 묶여 있다. 계산기·규칙 같은 정적
 *   페이지가 그걸 끌어오면 번들이 통째로 딸려온다(2026-08-04에 하단 탭바·좌측 레일을
 *   뽑을 때 세운 것과 같은 원칙).
 *   대신 **서버 컴포넌트**로 만들어 상호작용이 필요한 곳만 링크로 대체했다:
 *     - 홈의 「이벤트 보기」 버튼(setTab) → `<base>/?tab=event` 링크
 *     - 언어 칩: 홈은 내 설정 언어를 강조, 여기는 현재 로케일 고정(로그인 상태를 안 읽는다)
 */

export const HUB_SIDEBAR_WIDTH = 240;

export default function HubSidebar({
  trending,
  locale = null,
}: {
  trending: TrendingItem[];
  /** null이면 한국어 */
  locale?: SecondaryLocale | null;
}) {
  const L = hubLabels(locale);
  const base = locale ? `/${locale}` : "";
  const current = locale ?? "ko";

  return (
    <div className="sticky top-20 flex flex-col gap-5">
      {/*
        GTO 솔버 버튼 — ★2026-08-14 사장님 지시. 사이드바 맨 위(트렌딩보다 먼저)에 둔다.
        🔴 한국어에서만 — `/solver`는 한국어 전용 페이지다. 마크업은 `components/solver-promo.tsx`
           한 곳에 있고 홈의 <aside>도 같은 것을 쓴다(양쪽에 복사하면 갈라진다).
      */}
      {!locale && <SolverPromo />}

      {/* 트렌딩 */}
      {trending.length > 0 && (
        <div>
          <p
            className="text-[11px] font-bold tracking-widest uppercase mb-3"
            style={{ color: MUTED, fontFamily: FONT_SANS }}
          >
            {L.trending}
          </p>
          {trending.map((t, i) => (
            <Link href={t.href} key={t.href} className="flex items-start gap-3 mb-3 last:mb-0 group">
              <span
                className="text-sm font-bold w-4 flex-shrink-0 mt-0.5"
                style={{ color: i === 0 ? RED : MUTED, fontFamily: FONT_SANS }}
              >
                {i + 1}
              </span>
              <p
                className="text-[13px] leading-snug line-clamp-2 group-hover:underline"
                style={{ color: INK, fontFamily: FONT_SERIF }}
              >
                {FLAG[current] ?? "🌐"} {t.title}
              </p>
            </Link>
          ))}
          <div style={{ borderBottom: `1px solid ${BORDER}`, marginTop: 8 }} />
        </div>
      )}

      {/* 이벤트 배너 */}
      <div className="rounded p-4" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
        <p
          className="text-[10px] font-bold tracking-widest uppercase mb-1"
          style={{ color: RED, fontFamily: FONT_SANS }}
        >
          {L.eventBadge}
        </p>
        <p
          className="text-[16px] font-medium mb-1.5 whitespace-pre-line"
          style={{ color: INK, fontFamily: FONT_SERIF }}
        >
          {L.eventTitle}
        </p>
        <p className="text-[12px] mb-2 whitespace-pre-line" style={{ color: MUTED, fontFamily: FONT_SANS }}>
          {L.eventDesc}
        </p>
        <div
          className="rounded px-3 py-2 mb-3 whitespace-pre-line"
          style={{ background: "rgba(var(--gold-dark-rgb),0.07)", border: "1px solid rgba(var(--gold-dark-rgb),0.18)" }}
        >
          <p className="text-[11px] leading-relaxed" style={{ color: MUTED, fontFamily: FONT_SANS }}>
            {L.eventSchedule}
          </p>
        </div>
        <Link
          href={`${base}/?tab=event`}
          className="block w-full py-2 rounded text-sm font-semibold text-center"
          style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
        >
          {L.eventButton}
        </Link>
      </div>

      {/* 커뮤니티 언어 */}
      <div>
        <p
          className="text-[11px] font-bold tracking-widest uppercase mb-2"
          style={{ color: MUTED, fontFamily: FONT_SANS }}
        >
          {L.languages}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {(["ko", "en", "ja", "zh", "es", "de"] as const).map((l) => (
            <span
              key={l}
              className="text-[11px] px-2 py-1 rounded font-semibold"
              style={{
                background: l === current ? INK : CARD,
                color: l === current ? BG : MUTED,
                border: `1px solid ${BORDER}`,
                fontFamily: FONT_SANS,
              }}
            >
              {FLAG[l]} {l.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
