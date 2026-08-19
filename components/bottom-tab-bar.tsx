"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BG, NAV } from "@/app/community/post-card";

/**
 * 하단 전역 탭바.
 *
 * ★왜 컴포넌트로 뽑았나 (2026-08-04)
 *   원래 이 <nav>는 `app/community/community-client.tsx` 안에 인라인으로 박혀 있었다.
 *   그 파일은 홈 페이지 컴포넌트라, 블로그·계산기·대회에서는 import조차 되지 않았다.
 *   즉 "블로그에서 탭바를 숨긴" 게 아니라 **애초에 존재하지 않았다**(조건문도 없었다).
 *   구글 검색 유입은 블로그 글에 직접 떨어지는데 거기 전역 네비가 없어,
 *   유입 이후 사이트의 나머지로 갈 길이 상단바 하나뿐이었다.
 *
 * ★두 가지 모드
 *   - onSelect 있음(홈): 라우팅 없이 로컬 탭 전환. 기존 동작 그대로 — 회귀 방지.
 *   - onSelect 없음(블로그 등): 홈으로 `?tab=` 링크. 홈이 마운트 시 그 값을 읽어
 *     탭을 복원한다(community-client.tsx의 기존 로직).
 */

export type BottomTabKey = "home" | "blog" | "chat" | "event" | "profile";

/**
 * 활성 표시용 키. "none"은 5개 탭 어디에도 속하지 않는 섹션(계산기·대회)에서 쓴다.
 * 탭바는 그대로 뜨되 아무것도 강조하지 않는다 — 없는 소속을 지어내지 않기 위해서다.
 */
export type BottomTabActive = BottomTabKey | "none";

/** 하단 탭바가 깔리는 섹션 루트 — 로케일 접두어를 뗀 경로 기준 */
const TAB_BAR_SECTIONS = ["/", "/blog", "/calculator", "/tournaments"];

/** 이 경로에 하단 탭바가 깔리는가 — ScrollToTopButton 등 다른 고정 요소가 비켜설 때 쓴다 */
export function hasBottomTabBar(pathname: string): boolean {
  // 로케일 접두어 제거: /ja/blog/x → /blog/x
  const p = pathname.replace(/^\/[a-z]{2}(-[a-z]+)?(?=\/|$)/i, "") || "/";
  return TAB_BAR_SECTIONS.some((s) => p === s || (s !== "/" && p.startsWith(s + "/")));
}

export const TAB_BAR_HEIGHT = 62;

/**
 * 읽는 중에는 하단 크롬을 비운다 — **스크롤 방향**으로 판정한다.
 *
 * ★왜 (2026-08-19 · 레이아웃 트랙 묶음 1)
 *   모바일 세로 844px 중 상단바 62 + 탭바 62 = **124px(15%)** 가 상시 잠식이었다.
 *   그런데 둘의 성격이 정반대다(실측):
 *     · 상단 62 = 뒤로 · 허브 · 러닝맵 · 📚목차12 · 바로가기 → **전부 읽기 도구라 남긴다**
 *     · 하단 62 = 피드 · 채팅 · 이벤트 · 프로필 → **커뮤니티 내비. 글 읽는 중 가치 0**
 *   그래서 회수 대상은 하단뿐이고, **삭제가 아니라 숨김**이다(다른 섹션에선 그대로 쓴다).
 *
 * 🔴 **아래로 = 읽는 중, 위로 = 이동 의사.** 위로 올리면 즉시 되돌린다 —
 *    「탭바가 사라져서 다른 데로 못 간다」가 되면 2026-08-04에 이 탭바를 만든 이유
 *    (검색으로 글에 직접 떨어진 독자의 유일한 출구)가 무너진다.
 *
 * 🪶 `y > 240` 가드: 첫 화면에서는 숨기지 않는다. 스크롤을 막 시작한 구간에서
 *    깜빡이면 그게 더 산만하다. 6px 미만의 흔들림도 무시한다(관성 스크롤 대응).
 */
export function useHideBottomChrome(): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      // rAF 로 묶어 스크롤 이벤트당 setState 를 막는다(모바일에서 초당 수십 회 들어온다).
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - lastY;
        if (Math.abs(dy) > 6) {
          const next = dy > 0 && y > 240;
          setHidden((prev) => (prev === next ? prev : next));
          lastY = y;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return hidden;
}

/**
 * 탭 라벨. community-client의 LABELS와 같은 11개 로케일을 다루고 나머지는 en으로 떨어진다
 * — 홈 탭바와 커버리지를 일부러 맞춘 것이다(블로그만 더 잘 번역되면 오히려 이상하다).
 * 여기 두는 이유: community-client(86KB 클라이언트 컴포넌트)를 블로그 번들로 끌어오지 않기 위해.
 */
const TAB_LABELS: Record<string, Record<BottomTabKey, string>> = {
  ko: { home: "피드", blog: "블로그", chat: "채팅", event: "이벤트", profile: "프로필" },
  en: { home: "Feed", blog: "Blog", chat: "Chat", event: "Event", profile: "Profile" },
  ja: { home: "フィード", blog: "ブログ", chat: "チャット", event: "イベント", profile: "プロフィール" },
  zh: { home: "动态", blog: "博客", chat: "聊天", event: "活动", profile: "我的" },
  es: { home: "Feed", blog: "Blog", chat: "Chat", event: "Evento", profile: "Perfil" },
  de: { home: "Feed", blog: "Blog", chat: "Chat", event: "Event", profile: "Profil" },
  pt: { home: "Feed", blog: "Blog", chat: "Chat", event: "Evento", profile: "Perfil" },
  id: { home: "Feed", blog: "Blog", chat: "Obrolan", event: "Acara", profile: "Profil" },
  ms: { home: "Suapan", blog: "Blog", chat: "Sembang", event: "Acara", profile: "Profil" },
  vi: { home: "Bảng tin", blog: "Blog", chat: "Trò chuyện", event: "Sự kiện", profile: "Hồ sơ" },
  tr: { home: "Akış", blog: "Blog", chat: "Sohbet", event: "Etkinlik", profile: "Profil" },
};

export function tabLabels(locale?: string | null): Record<BottomTabKey, string> {
  return TAB_LABELS[locale ?? "ko"] ?? TAB_LABELS.en;
}

/**
 * ★블로그 탭은 두지 않는다 (사장님 지적, 2026-08-04).
 *   홈 피드에 블로그 글이 이미 카드로 전부 들어가 있어 별도 진입점이 중복이다.
 *   전역 네비는 피드·채팅·이벤트·프로필 넷으로 충분하고, 블로그는 피드를 통해 들어간다.
 */
const TABS: { key: BottomTabKey; icon: string }[] = [
  { key: "home",    icon: "⊞" },
  { key: "chat",    icon: "💬" },
  { key: "event",   icon: "🎰" },
  { key: "profile", icon: "👤" },
];

interface Props {
  active: BottomTabActive;
  /** 로케일 경로 접두어. 한국어는 생략(""), 그 외 "/en" 같은 값 */
  base?: string;
  /** 로케일 코드 — 라벨 선택용. 한국어는 생략 */
  locale?: string | null;
  /** 주면 blog 외 탭은 라우팅 대신 이 콜백으로 처리(홈 내부 전환) */
  onSelect?: (key: Exclude<BottomTabKey, "blog">) => void;
  /** 데스크톱에서 숨길지 — 홈은 자체 사이드바가 있어 true(기본) */
  hideOnDesktop?: boolean;
  /**
   * 읽는 중 숨김 상태. `useHideBottomChrome()` 의 반환값을 그대로 넘긴다.
   * 🔴 **제어는 부모가 한다** — 블로그 상세는 「다음 글 읽기」 바가 `bottom: TAB_BAR_HEIGHT` 로
   *    이 바 위에 얹혀 있어서, 같은 값으로 **둘을 함께** 움직여야 한다.
   *    여기서 자체 스크롤 판정을 하면 두 요소가 따로 놀아 허공에 뜬 바가 생긴다.
   *    기본 false = 기존 동작(홈·계산기·대회는 그대로 상시 노출).
   */
  hidden?: boolean;
}

export default function BottomTabBar({
  active,
  base = "",
  locale = null,
  onSelect,
  hideOnDesktop = true,
  hidden = false,
}: Props) {
  const L = tabLabels(locale);

  const hrefFor = (key: BottomTabKey) => {
    if (key === "blog") return `${base}/blog`;
    if (key === "home") return base || "/";
    return `${base || ""}/?tab=${key}`;
  };

  return (
    <nav
      className={`${hideOnDesktop ? "lg:hidden " : ""}fixed bottom-0 left-0 right-0 flex items-center transition-transform duration-300`}
      /* 🔴 숨김은 transform 으로만 한다. display:none 이면 초점이 날아가고,
         높이를 0 으로 접으면 페이지가 리플로우돼 읽던 자리가 튄다. */
      style={{
        background: NAV,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        height: TAB_BAR_HEIGHT,
        zIndex: 40,
        transform: hidden ? "translateY(100%)" : "translateY(0)",
      }}
      aria-hidden={hidden || undefined}
    >
      {TABS.map((t) => {
        const color = active === t.key ? BG : "rgba(244,240,231,0.4)";
        const inner = (
          <>
            <span className="text-[16px]">{t.icon}</span>
            <span className="text-[10px] font-semibold leading-tight">{L[t.key]}</span>
          </>
        );
        const cls = "flex-1 flex flex-col items-center justify-center gap-0.5 py-2";

        // 홈에서는 blog를 뺀 나머지가 로컬 전환(기존 동작 유지)
        if (onSelect && t.key !== "blog") {
          return (
            <button key={t.key} onClick={() => onSelect(t.key)} className={cls} style={{ color }}>
              {inner}
            </button>
          );
        }
        return (
          <Link key={t.key} href={hrefFor(t.key)} className={cls} style={{ color }}>
            {inner}
          </Link>
        );
      })}
    </nav>
  );
}
