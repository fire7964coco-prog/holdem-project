"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { BG, BORDER, INK, MUTED, FONT_SANS, FONT_SERIF } from "@/lib/theme";
import SideRail, { SIDE_RAIL_WIDTH } from "@/components/side-rail";
import BottomTabBar from "@/components/bottom-tab-bar";

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

/** 상단 네비 — 홈의 피드/채팅/이벤트 탭과 같은 자리·같은 규격. 허브에서는 홈으로 가는 링크다. */
const NAV_TABS = [
  { href: "/", label: "피드" },
  { href: "/?tab=chat", label: "채팅" },
  { href: "/?tab=event", label: "이벤트" },
] as const;

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

function AuthSlot() {
  const user = useSessionNickname();
  if (user) {
    return (
      <Link
        href="/?tab=profile"
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
      className="font-semibold rounded-full transition-transform active:scale-95 hover:opacity-90 text-[11px] px-3 py-1 lg:text-sm lg:px-4 lg:py-2"
      style={{ background: INK, color: BG, fontFamily: FONT_SANS }}
    >
      로그인
    </Link>
  );
}

export default function HubShell({
  title,
  children,
  sidebar,
}: {
  /** 데스크톱 마스트헤드 네비에서 「지금 여기」로 표시될 페이지 이름 (h1이 아니다 — 위 주석 참조) */
  title: string;
  children: ReactNode;
  /** 우측 사이드바 — 서버에서 만든 <HubSidebar trending={...} /> 를 그대로 받는다 */
  sidebar?: ReactNode;
}) {
  return (
    <div style={{ background: BG, fontFamily: FONT_SANS }} className="min-h-screen">
      {/* 마스트헤드 — 홈과 동일 규격. 모바일은 브랜드+로그인 한 줄로 좁아진다. */}
      <header
        className="sticky top-0 z-50"
        style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}
      >
        <div className="flex items-center gap-4 lg:gap-6 px-4 lg:px-8 max-w-screen-xl mx-auto">
          <Link
            href="/"
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
              홀덤마스터
            </span>
          </Link>

          {/* 상단 탭 — 데스크톱만. 모바일은 하단 탭바가 같은 역할을 한다. */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_TABS.map((n) => (
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
              🇰🇷 KO
            </span>
            <AuthSlot />
          </div>
        </div>
      </header>

      {/* 3열 — 홈과 동일 (좌 200 / 본문 flex-1 / 우 240 · gap-6 · max-w-screen-xl).
          모바일에서는 양옆 aside가 사라지고 본문만 남는다 — 홈 모바일과 같다. */}
      <div className="flex max-w-screen-xl mx-auto px-0 lg:px-4 py-0 lg:py-6 lg:gap-6">
        <aside className="hidden lg:block" style={{ width: SIDE_RAIL_WIDTH, flexShrink: 0 }}>
          <div className="sticky top-20">
            {/* writeHref — 홈 레일과 같은 자리에 「글 쓰기」를 두되, 여기엔 작성 모달이 없으므로
                홈으로 보내면서 ?write=1로 모달까지 열어 준다(community-client.tsx) */}
            <SideRail active="none" writeHref="/?write=1" />
          </div>
        </aside>

        {/* <main> 랜드마크는 layout.tsx의 MainContent가 이미 갖고 있다 — 중첩하지 않는다 */}
        <div className="flex-1 min-w-0">{children}</div>

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
      <BottomTabBar active="none" locale="ko" />
    </div>
  );
}
