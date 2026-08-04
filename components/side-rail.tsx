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
  /**
   * ★「전체 글 보기」(/blog) 제거 — 2026-08-04 사장님 지시.
   *   "그 안 구성도 예전 레이아웃이고 굳이 필요 없을 듯" — 홈 피드에 블로그 글이 이미
   *   카드로 전부 들어가 있어서 목록 페이지는 중복 진입점이다. 하단 탭바에서 블로그 탭을
   *   뺐던 것(2026-08-04)과 같은 판단이다.
   *   /blog 라우트 자체는 남는다 — 검색(?q=)이 거기 살고, sitemap·canonical 대상이다.
   */
  // 검색 진입점 — /blog 상단 검색창으로 바로 내려간다
  { href: "/blog#search",     icon: "🔎", label: "글 검색" },
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
 * 로케일별 허브 메뉴.
 *
 * ★전엔 `!locale`일 때만 허브 메뉴를 그렸다 — "다국어는 대상 페이지가 한국어라 링크해도
 *   막다른 길"이라는 이유였고, 그때는 맞았다. 그런데 **영어에는 도구 페이지가 6개 있다**
 *   (/en/calculator·glossary·hand-chart·quiz·ranking·tournaments). 그래서 en은 예외다.
 * ★여기 없는 언어는 허브 메뉴가 안 나온다 — 그 언어에 도구 페이지가 실제로 없기 때문이다.
 *   새로 만들면 여기 추가할 것. 없는 라우트를 넣으면 그게 진짜 막다른 길이 된다.
 * ★라벨은 각 페이지의 metadata title에서 딴 것이다(지어낸 표현이 아니다).
 */
const LOCALE_HUB_PAGES: Record<string, readonly { href: string; icon: string; label: string }[]> = {
  en: [
    // ★라벨은 CHROME.en.blogLabel("Blog")과 같은 값이다. 「Guides」 목록 안에서
    //   "All Articles"는 다른 항목(도구 페이지)과 층위가 섞여 읽혔다 — 목적지가
    //   블로그 목록이므로 그대로 Blog라고 부른다.
    //   ★새 언어를 추가할 때도 이 자리는 CHROME[locale].blogLabel을 그대로 쓸 것
    //     (ja "ブログ" · es "Blog" · zh "博客" — 지어내지 말 것).
    { href: "/en/blog",         icon: "📚", label: "Blog" },
    { href: "/en/tournaments",  icon: "🏆", label: "Tournaments" },
    { href: "/en/calculator",   icon: "🧮", label: "Odds Calculator" },
    { href: "/en/hand-chart",   icon: "📊", label: "Starting Hand Chart" },
    { href: "/en/win-rate-quiz", icon: "📈", label: "Equity Simulator" },
    { href: "/en/glossary",     icon: "📖", label: "Poker Glossary" },
  ],
};

/** 「홀덤 가이드」 섹션 헤딩 — 로케일별. 없으면 en. */
const HUB_HEADING: Record<string, string> = { en: "Guides" };

/**
 * 정책·신뢰 페이지. 홈 레일 바닥과 모바일 피드 끝에 쓴다.
 * 그 외 페이지에서는 진짜 푸터(components/footer.tsx)가 같은 링크를 갖는다 — 단일 소스로 두지
 * 않은 이유는 footer.tsx가 서버 컴포넌트고 이쪽은 "use client"라 색 토큰 계통이 다르기 때문.
 */
export const LEGAL_PAGES = [
  { href: "/about", label: "팀 소개" },
  { href: "/contact", label: "문의" },
  { href: "/privacy", label: "개인정보처리방침" },
  { href: "/terms", label: "이용약관" },
] as const;

/**
 * 다국어 홈의 정책 링크 라벨.
 *
 * ★2026-08-04: 전엔 로케일과 무관하게 위 한국어 라벨이 그대로 나갔다
 *   (/en 홈에 "팀 소개 · 문의 · 개인정보처리방침 · 이용약관"). 사장님 스크린샷으로 발견.
 * ★대상 페이지 자체는 아직 한국어뿐이다. 그래도 링크를 **숨기지는 않는다** —
 *   개인정보처리방침은 모든 이용자에게 도달 가능해야 한다. 라벨만 영어로 바꿔
 *   "한국어 문서로 간다"는 걸 예측 가능하게 한다.
 * ⚠ TODO: /privacy·/terms·/contact의 다국어판. 그때 이 라벨도 언어별로 나눌 것.
 */
const LEGAL_PAGES_INTL = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
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
  /** 주면 「글 쓰기」 버튼을 클릭 핸들러로 렌더한다(홈 — 그 자리에서 모달이 열린다) */
  onWrite?: () => void;
  /**
   * onWrite 없이 「글 쓰기」 버튼을 보여줄 때의 이동 경로(허브 페이지용).
   * 홈이 `?write=1`을 읽어 도착과 동시에 작성 모달을 연다(community-client.tsx).
   */
  writeHref?: string;
  /** 글 쓰기 버튼 라벨 */
  writeLabel?: string;
}

export default function SideRail({
  active,
  base = "",
  locale = null,
  onSelect,
  onWrite,
  writeHref,
  writeLabel = "✏️ 글 쓰기",
}: Props) {
  const L = tabLabels(locale);
  const hrefFor = (key: Exclude<BottomTabKey, "blog">) =>
    key === "home" ? base || "/" : `${base || ""}/?tab=${key}`;
  /** 이 언어에서 실제로 갈 수 있는 가이드 페이지들 (한국어=전체, 그 외=LOCALE_HUB_PAGES) */
  const hubPages = locale ? LOCALE_HUB_PAGES[locale] ?? [] : HUB_PAGES;

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

      {(onWrite || writeHref) && (
        <>
          <div style={{ borderTop: `1px solid ${BORDER}`, margin: "10px 0" }} />
          {onWrite ? (
            <button
              onClick={onWrite}
              className="w-full py-2.5 rounded-lg text-sm font-semibold"
              style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
            >
              {writeLabel}
            </button>
          ) : (
            /* 허브 페이지 — 홈으로 이동하면서 ?write=1 로 작성 모달까지 연다 */
            <Link
              href={writeHref!}
              className="block w-full py-2.5 rounded-lg text-sm font-semibold text-center"
              style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
            >
              {writeLabel}
            </Link>
          )}
        </>
      )}

      {/* 허브 메뉴 — 한국어 전체, 그 외에는 도구 페이지가 실제로 있는 언어만(LOCALE_HUB_PAGES).
          없는 언어는 링크할 곳이 없어 아예 안 그린다(막다른 길 방지). */}
      {hubPages.length > 0 && (
        <>
          <div style={{ borderTop: `1px solid ${BORDER}`, margin: "10px 0 6px" }} />
          <p
            className="text-[10px] font-bold tracking-widest uppercase px-3 mb-1"
            style={{ color: MUTED, fontFamily: FONT_SANS }}
          >
            {locale ? HUB_HEADING[locale] ?? HUB_HEADING.en : "홀덤 가이드"}
          </p>
          {hubPages.map((p) => (
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

      {/* ★정책 링크 — 홈(onSelect 있음)에서만 (2026-08-05).
          홈은 무한 스크롤 피드라 푸터를 깔 바닥이 없어서 site-chrome의
          isFooterlessRoute()에서 빠져 있다. 그래서 홈만 개인정보처리방침·이용약관·문의로
          가는 길이 끊긴다 — 그 구멍을 레일 바닥에서 메운다.
          홈 밖(블로그 글 좌측 컬럼 등)에서는 아래에 진짜 푸터가 깔리므로 중복이라 뺀다.

          ★2026-08-04: 이 블록이 「가이드 메뉴」 조건 안에 중첩돼 있었다. 그래서 가이드가 없는
            로케일(ja·es…) 홈에서는 정책 링크까지 통째로 사라졌다. 밖으로 빼서 분리한다. */}
      {onSelect && (
        <>
          <div style={{ borderTop: `1px solid ${BORDER}`, margin: "10px 0 6px" }} />
          <div className="flex flex-wrap gap-x-2.5 gap-y-1 px-3 pb-2">
            {(locale ? LEGAL_PAGES_INTL : LEGAL_PAGES).map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="text-[11px] hover:underline"
                style={{ color: MUTED, fontFamily: FONT_SANS }}
              >
                {p.label}
              </Link>
            ))}
          </div>
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
