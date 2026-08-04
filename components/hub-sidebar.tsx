import Link from "next/link";
/**
 * ★import는 반드시 `@/lib/theme`에서. `@/app/community/post-card`에도 같은 상수가 있지만
 *   그 파일은 "use client"라 서버 컴포넌트가 값을 읽으면 빌드가 깨진다
 *   ("Could not find the module ...post-card.tsx#FLAG#ko in the React Client Manifest").
 *   실제로 한 번 밟았다 — 되돌리지 말 것.
 */
import { BG, CARD, BORDER, INK, MUTED, RED, FLAG, FONT_SANS, FONT_SERIF } from "@/lib/theme";
import type { TrendingItem } from "@/lib/hub-trending";

/**
 * 허브 페이지 우측 사이드바 — 홈(community-client.tsx)의 오른쪽 <aside>와 같은 구성·같은 규격.
 *
 * ★홈의 것을 import하지 않고 따로 둔 이유: 홈의 사이드바는 86KB 클라이언트 컴포넌트
 *   한복판에 있고 setTab·myLanguage·Supabase 상태에 묶여 있다. 계산기·규칙 같은 정적
 *   페이지가 그걸 끌어오면 번들이 통째로 딸려온다(2026-08-04에 하단 탭바·좌측 레일을
 *   뽑을 때 세운 것과 같은 원칙).
 *   대신 **서버 컴포넌트**로 만들어 상호작용이 필요한 곳만 링크로 대체했다:
 *     - 홈의 「이벤트 보기」 버튼(setTab) → `/?tab=event` 링크
 *     - 언어 칩: 홈은 내 설정 언어를 강조, 여기는 한국어 고정 표시(로그인 상태를 안 읽는다)
 */

export const HUB_SIDEBAR_WIDTH = 240;

export default function HubSidebar({ trending }: { trending: TrendingItem[] }) {
  return (
    <div className="sticky top-20 flex flex-col gap-5">
      {/* 트렌딩 */}
      {trending.length > 0 && (
        <div>
          <p
            className="text-[11px] font-bold tracking-widest uppercase mb-3"
            style={{ color: MUTED, fontFamily: FONT_SANS }}
          >
            🔥 이번 주 인기
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
                {FLAG.ko} {t.title}
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
          🎰 이벤트 · 준비 중
        </p>
        <p
          className="text-[16px] font-medium mb-1.5 whitespace-pre-line"
          style={{ color: INK, fontFamily: FONT_SERIF }}
        >
          {"번호 6개 선택\n기프트콘 증정!"}
        </p>
        <p className="text-[12px] mb-2 whitespace-pre-line" style={{ color: MUTED, fontFamily: FONT_SANS }}>
          {"3개 → 5만원 · 4개 → 30만원\n5개 → 100만원"}
        </p>
        <div
          className="rounded px-3 py-2 mb-3 whitespace-pre-line"
          style={{ background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.18)" }}
        >
          <p className="text-[11px] leading-relaxed" style={{ color: MUTED, fontFamily: FONT_SANS }}>
            {"🔗 매주 일요일 오후 7시 (KST)\n비트코인 블록 해시로 자동 추첨"}
          </p>
        </div>
        <Link
          href="/?tab=event"
          className="block w-full py-2 rounded text-sm font-semibold text-center"
          style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
        >
          이벤트 보기 →
        </Link>
      </div>

      {/* 커뮤니티 언어 */}
      <div>
        <p
          className="text-[11px] font-bold tracking-widest uppercase mb-2"
          style={{ color: MUTED, fontFamily: FONT_SANS }}
        >
          🌐 커뮤니티 언어
        </p>
        <div className="flex flex-wrap gap-1.5">
          {(["ko", "en", "ja", "zh", "es", "de"] as const).map((l) => (
            <span
              key={l}
              className="text-[11px] px-2 py-1 rounded font-semibold"
              style={{
                background: l === "ko" ? INK : CARD,
                color: l === "ko" ? BG : MUTED,
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
