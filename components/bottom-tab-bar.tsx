"use client";

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

/** 이 경로에 하단 탭바가 깔리는가 — ScrollToTopButton 등 다른 고정 요소가 비켜설 때 쓴다 */
export function hasBottomTabBar(pathname: string): boolean {
  if (pathname === "/" || pathname.startsWith("/blog/")) return true;
  return /^\/[a-z]{2}(-[a-z]+)?(\/|$)/i.test(pathname) &&
         (/\/blog\//.test(pathname) || /^\/[a-z]{2}(-[a-z]+)?\/?$/i.test(pathname));
}

export const TAB_BAR_HEIGHT = 62;

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

const TABS: { key: BottomTabKey; icon: string }[] = [
  { key: "home",    icon: "⊞" },
  { key: "blog",    icon: "📚" },
  { key: "chat",    icon: "💬" },
  { key: "event",   icon: "🎰" },
  { key: "profile", icon: "👤" },
];

interface Props {
  active: BottomTabKey;
  /** 로케일 경로 접두어. 한국어는 생략(""), 그 외 "/en" 같은 값 */
  base?: string;
  /** 로케일 코드 — 라벨 선택용. 한국어는 생략 */
  locale?: string | null;
  /** 주면 blog 외 탭은 라우팅 대신 이 콜백으로 처리(홈 내부 전환) */
  onSelect?: (key: Exclude<BottomTabKey, "blog">) => void;
  /** 데스크톱에서 숨길지 — 홈은 자체 사이드바가 있어 true(기본) */
  hideOnDesktop?: boolean;
}

export default function BottomTabBar({
  active,
  base = "",
  locale = null,
  onSelect,
  hideOnDesktop = true,
}: Props) {
  const L = tabLabels(locale);

  const hrefFor = (key: BottomTabKey) => {
    if (key === "blog") return `${base}/blog`;
    if (key === "home") return base || "/";
    return `${base || ""}/?tab=${key}`;
  };

  return (
    <nav
      className={`${hideOnDesktop ? "lg:hidden " : ""}fixed bottom-0 left-0 right-0 flex items-center`}
      style={{
        background: NAV,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        height: TAB_BAR_HEIGHT,
        zIndex: 40,
      }}
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
