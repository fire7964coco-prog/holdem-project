"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";
import { BG, BORDER, INK, MUTED, FLAG, FONT_SANS, FONT_SERIF } from "@/lib/theme";
import SideRail, { SIDE_RAIL_WIDTH, hubPagesFor, hubHeadingFor } from "@/components/side-rail";
import BottomTabBar, { tabLabels } from "@/components/bottom-tab-bar";
import { hubLabels } from "@/lib/hub-i18n";
import { CHROME, type SecondaryLocale } from "@/lib/intl";

/**
 * 허브 페이지 공용 셸 — 홈(community-client.tsx)과 **같은 3열 구조**.
 *
 * ★왜 만들었나 (2026-08-04, 사장님 지시)
 *   홈에서 피드·채팅·이벤트·프로필을 눌러도 양쪽 사이드바는 그대로고 가운데만 바뀐다.
 *   그런데 **좌측 레일의 「홀덤 가이드」 버튼**을 누르면 도착지마다 레이아웃이 제각각이었다:
 *
 *     홈                          : 마스트헤드(크림) + 좌 레일 + 피드 + 우 사이드바
 *     대회·계산기·블로그           : 상단바(다크 그린 56px) + 고정 좌 레일, 우측 없음
 *     전략·규칙·용어·퀴즈·핸드차트 : 상단바만. **좌측 레일이 아예 없다**
 *     ↳ 콘텐츠 폭도 5xl / 4xl / 3xl / md 로 다 달랐다
 *
 *   이 컴포넌트가 그 페이지들을 하나의 셸로 통일한다.
 *
 * ★홈 셸을 import하지 않는 이유
 *   홈은 86KB짜리 클라이언트 컴포넌트고 Supabase 상태·탭 상태에 묶여 있다.
 *   정적 페이지가 그걸 끌어오면 번들이 통째로 딸려온다
 *   (2026-08-04에 하단 탭바·좌측 레일을 뽑을 때 세운 원칙과 같다).
 *   대신 **규격을 복제**한다 — 마스트헤드 sticky/크림/폰트, 컬럼 폭 200·240, gap-6,
 *   max-w-screen-xl, sticky top-20 전부 홈과 같은 값이다.
 *
 * ★children은 반드시 **한 번만** 렌더한다
 *   처음엔 홈처럼 「모바일 블록 / 데스크톱 블록」을 나눠 짰다가 되돌렸다. 홈은 그래도
 *   되는 게 두 블록이 같은 상위 state를 공유하는 한 컴포넌트이기 때문이다. 여기서 그러면
 *   자식 페이지(퀴즈·계산기)가 **두 번 마운트**돼 상태가 갈라지고, 더 나쁘게는 heading id·
 *   `id="search"` 같은 DOM id가 문서에 두 개씩 생겨 앵커·getElementById가 숨은 쪽을 잡는다.
 *   그래서 셸은 CSS로만 반응하고 자식은 한 번 렌더한다.
 *
 * ★페이지 제목(h1)은 셸이 만들지 않는다
 *   각 페이지가 이미 자기 h1을 갖고 있다. 셸이 하나 더 그리면 h1이 두 개가 된다.
 *   `title`은 데스크톱 마스트헤드의 **현재 위치 표시**(홈의 탭 언더라인과 같은 자리)로만 쓴다.
 *
 * ★로그인 상태는 지연 로드
 *   Supabase를 정적 import하면 계산기·규칙 같은 정적 페이지 초기 번들에 supabase-js가 들어간다.
 *   마운트 후 dynamic import로 세션만 읽는다. 자리(minWidth/minHeight)를 미리 잡아
 *   늦게 채워져도 헤더가 밀리지 않는다(CLS 0).
 */

type SessionUser = { nickname: string } | null;

/**
 * 상단 네비 — 홈의 피드/채팅/이벤트 탭과 같은 자리·같은 규격. 허브에서는 홈으로 가는 링크다.
 * 라벨은 `tabLabels(locale)`(bottom-tab-bar)에서 가져온다 — 하단 탭바와 같은 문구를 쓰기 위해서다.
 */
function navTabs(base: string, locale: SecondaryLocale | null) {
  const T = tabLabels(locale);
  return [
    { href: base || "/", label: T.home },
    { href: `${base}/?tab=chat`, label: T.chat },
    { href: `${base}/?tab=event`, label: T.event },
  ];
}

function useSessionNickname(): SessionUser {
  const [user, setUser] = useState<SessionUser>(null);
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const { createClient } = await import("@/lib/supabase/client");
        const supabase = createClient();
        const { data } = await supabase.auth.getUser();
        if (!alive || !data.user) return;
        const { data: profile } = await supabase
          .from("profiles")
          .select("nickname")
          .eq("id", data.user.id)
          .single();
        if (alive && profile?.nickname) setUser({ nickname: profile.nickname });
      } catch {
        /* 비로그인·네트워크 실패 — 로그인 버튼을 그대로 두면 된다 */
      }
    })();
    return () => {
      alive = false;
    };
  }, []);
  return user;
}

function AuthSlot({ base, loginLabel }: { base: string; loginLabel: string }) {
  const user = useSessionNickname();
  if (user) {
    return (
      <Link
        href={`${base}/?tab=profile`}
        className="flex items-center gap-2 text-[11px] lg:text-sm"
        style={{ color: MUTED, fontFamily: FONT_SANS }}
      >
        <span
          className="rounded-full flex items-center justify-center font-bold w-[22px] h-[22px] text-[9px] lg:w-8 lg:h-8 lg:text-xs"
          style={{ background: INK, color: BG }}
        >
          {user.nickname.slice(0, 2).toUpperCase()}
        </span>
        <span className="truncate max-w-[7rem]">{user.nickname}</span>
      </Link>
    );
  }
  return (
    <Link
      href="/login"
      className="font-semibold rounded-full transition-transform active:scale-95 hover:opacity-90 text-[11px] px-3 py-1 lg:text-sm lg:px-4 lg:py-2 whitespace-nowrap"
      style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
    >
      {loginLabel}
    </Link>
  );
}

/**
 * 모바일 상단 가로 탭. 목록은 좌측 레일과 같은 `hubPagesFor(locale)`이다.
 *
 * ★활성 표시는 **라벨이 아니라 경로**로 잡는다. `title` prop과 라벨이 다른 페이지가 있고
 *   (예: 셸 title "연습장" vs 레일 라벨 "홀덤 연습장") 라벨로 맞추면 조용히 어긋난다.
 * ★활성 칩이 화면 밖에 있으면 스크롤해 보여준다 — 목록 끝쪽 페이지(연습장 등)에 들어오면
 *   기본 스크롤 위치에서는 자기 칩이 안 보여 "여기가 어디"가 안 읽힌다.
 */
function HubTabsMobile({ tabs, heading }: { tabs: readonly { href: string; icon: string; label: string }[]; heading: string }) {
  const pathname = usePathname();
  const activeRef = useRef<HTMLAnchorElement | null>(null);
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [pathname]);
  return (
    <nav
      className="lg:hidden overflow-x-auto"
      style={{ borderTop: `1px solid ${BORDER}`, scrollbarWidth: "none" }}
      aria-label={heading}
    >
      <div className="flex gap-1.5 px-3 py-1.5 w-max">
        {tabs.map((t) => {
          const target = t.href.split("#")[0];
          const active = pathname === target;
          return (
            <Link
              key={t.href}
              href={t.href}
              ref={active ? activeRef : undefined}
              aria-current={active ? "page" : undefined}
              className="flex-shrink-0 rounded-full px-2.5 py-1 text-[12px] whitespace-nowrap transition-opacity active:opacity-70"
              style={
                active
                  ? { background: INK, color: BG, fontWeight: 700, fontFamily: FONT_SANS }
                  : { border: `1px solid ${BORDER}`, color: MUTED, fontFamily: FONT_SANS }
              }
            >
              <span aria-hidden className="me-1">{t.icon}</span>
              {t.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default function HubShell({
  title,
  children,
  sidebar,
  locale = null,
}: {
  /** 데스크톱 마스트헤드 네비에서 「지금 여기」로 표시될 페이지 이름 (h1이 아니다 — 위 주석 참조) */
  title: string;
  children: ReactNode;
  /** 우측 사이드바 — 서버에서 만든 <HubSidebar trending={...} /> 를 그대로 받는다 */
  sidebar?: ReactNode;
  /**
   * 로케일. null이면 한국어(경로 접두어 없음).
   * ★넘기면 마스트헤드·레일·탭바·로그인 링크가 전부 그 언어의 홈(`/en` 등)을 향한다.
   *   안 넘기면 영어 페이지에서 「홈피드」를 눌렀을 때 한국어 홈으로 튄다.
   */
  locale?: SecondaryLocale | null;
}) {
  const base = locale ? `/${locale}` : "";
  const L = hubLabels(locale);
  const hubTabs = hubPagesFor(locale);
  return (
    <div style={{ background: BG, fontFamily: FONT_SANS }} className="min-h-screen">
      {/* 마스트헤드 — 홈과 동일 규격. 모바일은 브랜드+로그인 한 줄로 좁아진다. */}
      <header
        className="sticky top-0 z-50"
        style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}
      >
        <div className="flex items-center gap-4 lg:gap-6 px-4 lg:px-8 max-w-screen-xl mx-auto">
          <Link
            href={base || "/"}
            className="flex flex-col justify-center py-2.5 lg:py-3 flex-shrink-0 lg:mr-4 lg:border-e lg:pe-6"
            style={{ borderColor: BORDER }}
          >
            <span
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{ color: MUTED, fontFamily: FONT_SANS }}
            >
              Global Poker Community
            </span>
            <span
              className="text-[18px] lg:text-[22px] leading-tight"
              style={{ color: INK, fontFamily: FONT_SERIF, fontWeight: 500, letterSpacing: "-0.3px" }}
            >
              {/* 다국어는 CHROME[locale].brand("HoldemMaster") — 이미 25개 언어에 있는 검증된 값 */}
              {locale ? CHROME[locale].brand : "홀덤마스터"}
            </span>
          </Link>

          {/* 상단 탭 — 데스크톱만. 모바일은 하단 탭바가 같은 역할을 한다. */}
          <nav className="hidden lg:flex items-center gap-6">
            {navTabs(base, locale).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-4 text-sm transition-all hover:opacity-70"
                style={{
                  color: MUTED,
                  fontWeight: 400,
                  fontStyle: "italic",
                  borderBottom: "2px solid transparent",
                  fontFamily: FONT_SERIF,
                }}
              >
                {n.label}
              </Link>
            ))}
            {/* 지금 여기 — 홈의 활성 탭과 같은 언더라인 문법 */}
            <span
              className="py-4 text-sm"
              style={{ color: INK, fontWeight: 700, borderBottom: `2px solid ${INK}`, fontFamily: FONT_SERIF }}
            >
              {title}
            </span>
          </nav>

          {/* 세션이 늦게 채워져도 줄이 밀리지 않도록 자리를 미리 잡는다 */}
          <div
            className="flex items-center gap-3 ms-auto justify-end"
            style={{ minHeight: 24, minWidth: 60 }}
          >
            <span className="hidden lg:inline text-sm" style={{ color: MUTED, fontFamily: FONT_SANS }}>
              {FLAG[locale ?? "ko"] ?? "🌐"} {(locale ?? "ko").toUpperCase()}
            </span>
            <AuthSlot base={base} loginLabel={L.login} />
          </div>
        </div>

        {/* ── 모바일 전용 가로 스크롤 탭 (2026-08-05, 사장님 지적) ──
            ★위 `navTabs`는 `hidden lg:flex`고, 도구·가이드 링크가 있는 좌측 레일도
              `hidden lg:block`이다. 그래서 **모바일에서는 둘 다 사라져** 뒤로가기 말고는
              다른 페이지로 갈 방법이 없었다. 하단 탭바는 커뮤니티 4개뿐이라 대체가 안 된다.
              실측(2026-08-05): /win-rate-quiz·/glossary 첫 화면의 내부 링크가 홈·로그인·
              커뮤니티 탭 5개뿐이었고, 도구 링크는 푸터(스크롤 1,254px / 계산기는 **7,768px**)에만 있었다.
            ★목록은 좌측 레일과 **같은 출처**(`hubPagesFor`)를 쓴다 — 여기 또 적으면 갈라진다.
            ★sticky 헤더 안에 둔다. 긴 페이지 중간에서 닿지 않으면 고친 의미가 없다. */}
        {hubTabs.length > 0 && <HubTabsMobile tabs={hubTabs} heading={hubHeadingFor(locale)} />}
      </header>

      {/* 3열 — 홈과 동일 (좌 200 / 본문 flex-1 / 우 240 · gap-6 · max-w-screen-xl).
          모바일에서는 양옆 aside가 사라지고 본문만 남는다 — 홈 모바일과 같다. */}
      <div className="flex max-w-screen-xl mx-auto px-0 lg:px-4 py-0 lg:py-6 lg:gap-6">
        <aside className="hidden lg:block" style={{ width: SIDE_RAIL_WIDTH, flexShrink: 0 }}>
          <div className="sticky top-20">
            {/* writeHref — 홈 레일과 같은 자리에 「글 쓰기」를 두되, 여기엔 작성 모달이 없으므로
                홈으로 보내면서 ?write=1로 모달까지 열어 준다(community-client.tsx) */}
            <SideRail
              active="none"
              base={base}
              locale={locale}
              writeHref={`${base}/?write=1`}
              writeLabel={L.write}
            />
          </div>
        </aside>

        {/* <main> 랜드마크는 layout.tsx의 MainContent가 이미 갖고 있다 — 중첩하지 않는다 */}
        <div className="flex-1 min-w-0">
          {/* ★시각적 빵부스러기 (2026-08-19 신설 · 사장님 지적)
              허브에 오면 **여기가 어디인지 알 길이 없었다.** 상단엔 마스트헤드와 가로 칩 바만 있어
              「갈 방법」은 있는데 「현재 위치」와 「상위로 가는 길」이 없었다.

              🔴 **블로그가 2026-08-05에 이미 고친 것과 같은 상태였다** — 산출물 실측:
                 `/tournaments`·`/rules`·`/solver` 등 **12개 허브가 BreadcrumbList JSON-LD 를
                 내보내면서 화면에는 경로가 없었다**(`/pub` 만 JSON-LD 도 없음).
                 블로그 주석의 표현 그대로 «구조화 데이터만 있고 사람이 볼 경로가 없는 상태».

              ★단계 수와 URL 은 JSON-LD 와 **정확히 같은 2단**(홈 → 이 페이지)이다.
                🪶 표기는 JSON-LD 쪽이 더 길다(예: JSON-LD 「홀덤 포커 용어 사전」 ↔ 화면 「용어사전」).
                   8/5 주석이 금지한 것은 «마크업에 없는 **단계**를 화면에만 만드는 것»이고,
                   표기 길이는 그 대상이 아니다 — 단계 수·순서·URL 이 일치하면 된다.

              🔴 첫 단계는 **집 아이콘**이다. `CHROME` 에 「홈」 라벨이 없고 허브는 25개 로케일을
                 타므로, 사전에 25줄을 새로 넣는 대신 언어 중립 아이콘을 쓴다(`aria-label` 로 보조).

              🪶 sticky 헤더 **밖**에 둔다 — 허브 상단 크롬이 이미 100px 이라 여기에 더하면
                 첫 화면을 또 먹는다. 스크롤하면 지나가야 맞다. */}
          <nav aria-label={locale ? "Breadcrumb" : "현재 위치"} className="px-4 lg:px-0 pt-3 pb-1">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs" style={{ color: MUTED }}>
              <li className="flex items-center">
                <Link
                  href={base || "/"}
                  aria-label={locale ? "Home" : "홈"}
                  className="inline-flex items-center hover:opacity-70 transition-opacity"
                >
                  <Home className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </li>
              <li aria-hidden="true" className="opacity-50">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li className="min-w-0 max-w-full truncate font-semibold" style={{ color: INK }} aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
          {children}
        </div>

        {/* ★우측 사이드바는 xl(1280) 이상에서만 (2026-08-04 실측 후 결정).
            lg(1024)에서 셋 다 띄우면 가운데가 1024−32−200−240−48 = **504px**까지 좁아져
            2단 카드가 250px로 뭉개진다. 홈은 피드가 640 고정이라 티가 안 났지만
            허브는 콘텐츠가 컬럼을 꽉 채우므로 여기서 갈린다.
            xl에서는 1280−32−200−240−48 = 760px로 홈과 같은 3열이 그대로 성립한다. */}
        {sidebar && (
          <aside className="hidden xl:block" style={{ width: 240, flexShrink: 0 }}>
            {sidebar}
          </aside>
        )}
      </div>

      {/*
        하단 전역 탭바(모바일). 탭바 높이만큼의 여백은 **여기서 주지 않는다** —
        셸 다음에 푸터(layout.tsx의 SiteFooter)가 이어 붙기 때문에, 여기 스페이서를 두면
        본문과 푸터 사이에 62px 빈 띠가 생기고 정작 페이지 맨 아래(푸터)는 탭바에 가려진다.
        여백은 페이지의 진짜 마지막 요소인 푸터가 갖는다(site-chrome.tsx SiteFooter).
      */}
      <BottomTabBar active="none" base={base} locale={locale ?? "ko"} />
    </div>
  );
}
