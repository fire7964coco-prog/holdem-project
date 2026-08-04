"use client";

import Link from "next/link";
import { BG, CARD, BORDER, INK, MUTED } from "@/app/community/post-card";
import { tabLabels, type BottomTabActive, type BottomTabKey } from "@/components/bottom-tab-bar";

/**
 * 데스크톱 전역 좌측 레일 — 모바일 하단 탭바(bottom-tab-bar.tsx)의 데스크톱 짝.
 *
 * ★왜 뽑았나 (2026-08-04)
 *   하단 탭바와 **완전히 같은 원인**의 구조 결함이었다. 이 <aside>는
 *   `app/community/community-client.tsx`(홈 페이지 컴포넌트)에 인라인으로 박혀 있어
 *   블로그·계산기·대회에서는 import조차 되지 않았다. 그래서 데스크톱에서 그 페이지들의
 *   전역 이동 수단은 상단 56px 바 하나뿐이었고, 그 바의 「홈피드」·「커뮤니티」 두 버튼은
 *   href가 **둘 다 "/"** 라 실질 목적지가 홈 하나였다(1440px 실측, 2026-08-04).
 *
 *   즉 데스크톱은 "새 디자인이 필요한 상태"가 아니라 "이미 있는 레일이 홈 밖에
 *   존재하지 않는 상태"였다. 새로 만들지 않고 홈의 레일을 그대로 뽑아 쓴다.
 *
 * ★모바일과 대칭
 *   모바일 : 하단 고정 탭바(전역) + 상단 62px 섹션 네비
 *   데스크톱: 좌측 레일(전역)     + 기존 목차/학습맵 사이드바
 *   깔리는 섹션도 하단 탭바와 같게 유지한다 — 한쪽에만 있으면 그게 다음 드리프트가 된다.
 *
 * ★두 가지 모드 (탭바와 동일)
 *   - onSelect 있음(홈): 라우팅 없이 로컬 탭 전환. 기존 동작 그대로 — 회귀 방지.
 *   - onSelect 없음(블로그 등): 홈으로 `?tab=` 링크. 홈이 마운트 시 값을 읽어 복원한다.
 */

const FONT_SANS = "var(--font-inter), var(--font-noto-sans-kr), sans-serif";

/** 레일 폭(px). 고정 배치 시 <main>이 이만큼 비켜서야 한다 */
export const SIDE_RAIL_WIDTH = 200;

/**
 * 허브 메뉴 — 한국어에서만 표시.
 * ★원래 community-client.tsx에 있던 배열을 여기로 옮겼다. 홈도 여기서 import한다.
 *   (반대로 side-rail이 community-client를 import하면 86KB 클라이언트 컴포넌트가
 *    블로그 번들로 딸려온다 — bottom-tab-bar에서 라벨을 따로 둔 것과 같은 이유다.)
 */
export const HUB_PAGES = [
  // ★/blog(전체 글 목록)은 여기에도 KO_PAGE_TEASERS에도 없어서 홈에서 도달할 방법이 없었다.
  //   블로그 56편이 사이트의 주력인데 목록으로 가는 길이 끊겨 있던 것.
  { href: "/blog",            icon: "📚", label: "전체 글 보기" },
  { href: "/tournaments",     icon: "🏆", label: "홀덤 대회 일정" },
  { href: "/pub",             icon: "🍺", label: "내 근처 홀덤펍" },
  { href: "/strategy",        icon: "⚡", label: "전략 가이드" },
  { href: "/rules",           icon: "📋", label: "홀덤 규칙" },
  { href: "/calculator",      icon: "🧮", label: "팟오즈 계산기" },
  { href: "/blog/holdem-hand-rankings", icon: "🃏", label: "족보 정리" },
  { href: "/hand-chart",      icon: "📊", label: "핸드 차트" },
  { href: "/quiz",            icon: "🎯", label: "실력 테스트" },
  { href: "/win-rate-quiz",   icon: "📈", label: "승률 시뮬레이터" },
  { href: "/glossary",        icon: "📖", label: "용어 사전" },
  { href: "/holdem-practice", icon: "🎮", label: "홀덤 연습장" },
] as const;

/**
 * site-chrome이 **고정 레일을 직접 까는** 경로.
 *
 * 블로그 글(`/blog/<slug>`)은 여기서 빠진다 — 이미 xl에서 「목차 180 + 본문 + 학습맵 210」
 * 3열이라, 고정 레일을 얹고 <main>을 212px 밀면 본문이 978 → 766px로 좁아진다.
 * 대신 블로그 글은 **자기 좌측 컬럼 안에** 레일을 얹는다(폭 변화 0). blog-post-client.tsx 참조.
 */
const FIXED_RAIL_PATHS = ["/blog", "/calculator", "/tournaments"];

/** 로케일 접두어 제거: /ja/calculator → /calculator */
function stripLocale(pathname: string): string {
  return pathname.replace(/^\/[a-z]{2}(-[a-z]+)?(?=\/|$)/i, "") || "/";
}

export function hasFixedSideRail(pathname: string): boolean {
  return FIXED_RAIL_PATHS.includes(stripLocale(pathname));
}

const TABS: { key: Exclude<BottomTabKey, "blog">; icon: string; badge?: string }[] = [
  { key: "home",    icon: "⊞" },
  { key: "chat",    icon: "💬" },
  { key: "event",   icon: "🎰", badge: "Soon" },
  { key: "profile", icon: "👤" },
];

interface Props {
  active: BottomTabActive;
  /** 로케일 경로 접두어. 한국어는 "" */
  base?: string;
  /** 로케일 코드 — 라벨 선택 + 허브 메뉴 표시 여부. 한국어는 null */
  locale?: string | null;
  /** 주면 탭이 라우팅 대신 이 콜백으로 처리된다(홈 내부 전환) */
  onSelect?: (key: Exclude<BottomTabKey, "blog">) => void;
  /** 주면 「글 쓰기」 버튼을 렌더한다(홈 전용 — 밖에서는 작성 모달이 없다) */
  onWrite?: () => void;
  /** 글 쓰기 버튼 라벨 */
  writeLabel?: string;
}

export default function SideRail({
  active,
  base = "",
  locale = null,
  onSelect,
  onWrite,
  writeLabel = "✏️ 글 쓰기",
}: Props) {
  const L = tabLabels(locale);
  const hrefFor = (key: Exclude<BottomTabKey, "blog">) =>
    key === "home" ? base || "/" : `${base || ""}/?tab=${key}`;

  return (
    <div className="flex flex-col gap-0.5">
      {TABS.map((item) => {
        const on = active === item.key;
        const style = {
          background: on ? CARD : "transparent",
          color: on ? INK : MUTED,
          fontWeight: on ? 600 : 400,
          fontFamily: FONT_SANS,
          borderLeft: on ? `3px solid ${INK}` : "3px solid transparent",
        } as const;
        const cls = "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-all";
        const inner = (
          <>
            <span>{item.icon}</span>
            <span>{L[item.key]}</span>
            {item.badge && (
              <span
                className="ml-auto text-[9px] px-1.5 py-0.5 rounded font-bold"
                style={{ background: "#7a2e2e", color: "#f4f0e7" }}
              >
                {item.badge}
              </span>
            )}
          </>
        );

        // 홈에서는 로컬 전환(기존 동작 유지), 밖에서는 홈으로 ?tab= 링크
        return onSelect ? (
          <button key={item.key} onClick={() => onSelect(item.key)} className={cls} style={style}>
            {inner}
          </button>
        ) : (
          <Link key={item.key} href={hrefFor(item.key)} className={cls} style={style}>
            {inner}
          </Link>
        );
      })}

      {onWrite && (
        <>
          <div style={{ borderTop: `1px solid ${BORDER}`, margin: "10px 0" }} />
          <button
            onClick={onWrite}
            className="w-full py-2.5 rounded-lg text-sm font-semibold"
            style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
          >
            {writeLabel}
          </button>
        </>
      )}

      {/* 허브 메뉴 — 한국어에서만 (다국어는 대상 페이지가 한국어라 링크해도 막다른 길이다) */}
      {!locale && (
        <>
          <div style={{ borderTop: `1px solid ${BORDER}`, margin: "10px 0 6px" }} />
          <p
            className="text-[10px] font-bold tracking-widest uppercase px-3 mb-1"
            style={{ color: MUTED, fontFamily: FONT_SANS }}
          >
            홀덤 가이드
          </p>
          {HUB_PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition-colors"
              style={{ color: MUTED, fontFamily: FONT_SANS }}
              onMouseEnter={(e) => (e.currentTarget.style.background = CARD)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <span style={{ fontSize: 14 }}>{p.icon}</span>
              <span>{p.label}</span>
            </Link>
          ))}
        </>
      )}
    </div>
  );
}

/**
 * 고정 배치 래퍼 — site-chrome이 쓴다.
 * 하단 탭바가 `fixed bottom-0` + body `pb-[62px]`인 것과 같은 방식으로,
 * 레일은 `fixed left-0` + <main> `xl:ps-[212px]`로 자리를 만든다.
 * xl(1280px) 미만에서는 상단 BlogTopBar가 그대로 그 역할을 맡는다.
 */
export function FixedSideRail(props: Props) {
  return (
    <aside
      className="hidden xl:block fixed start-0 top-0 bottom-0 z-30 overflow-y-auto overscroll-contain py-6 ps-4 pe-2"
      style={{ width: SIDE_RAIL_WIDTH + 12, borderInlineEnd: `1px solid ${BORDER}` }}
      aria-label="사이트 메뉴"
    >
      <SideRail {...props} />
    </aside>
  );
}
