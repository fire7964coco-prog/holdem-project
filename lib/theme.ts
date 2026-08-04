/**
 * 크림 에디토리얼 디자인 토큰 — **서버 컴포넌트에서도 쓸 수 있는 단일 소스**.
 *
 * ★왜 옮겼나 (2026-08-04): 이 상수들의 원래 자리는 `app/community/post-card.tsx`인데
 *   그 파일은 "use client"다. 서버 컴포넌트에서 거기 있는 값을 import하면 Next가
 *   클라이언트 참조로 취급해 서버 렌더 중에 쓸 수 없다.
 *   허브 우측 사이드바(components/hub-sidebar.tsx)를 서버 컴포넌트로 두려면
 *   토큰이 서버에서도 읽혀야 해서 여기로 뺐다.
 *   post-card.tsx는 이 파일을 **re-export** 하므로 기존 import 경로는 전부 그대로 동작한다
 *   (손으로 색을 다시 적으면 반드시 어긋난다 — 반드시 한 곳에서만 정의한다).
 */

export const BG     = "#f4f0e7";   // 크림 배경
export const CARD   = "#ebe5d6";   // 카드/섹션 배경
export const BORDER = "#d8d0be";   // 따뜻한 경계선
export const INK    = "#0d1c14";   // 다크 포레스트 그린 (진한 메인 텍스트)
export const MUTED  = "#42372a";   // 다크 웜브라운 (보조 텍스트)
export const RED    = "#7a2e2e";   // 좋아요·액센트
export const GREEN  = "#3a6b54";   // 온라인 표시
export const NAV    = "#0d1c14";   // 하단 내비
export const GOLD   = "#0d1c14";   // 버튼·강조 색상 (= INK)

// ── 이전 토큰명 호환 (event-tab 등에서 사용) ─────────────────
export const TEXT_PRIMARY   = "#0d1c14";   // 제목·강조
export const TEXT_BODY      = "#1a2e20";   // 본문
export const TEXT_SECONDARY = "#42372a";   // 메타·설명
export const TEXT_MUTED     = "#6a5c44";   // 비활성·데코
export const DIVIDER        = "#d0c8b8";   // 구분선
export const SURFACE        = "#e2dccf";   // 프로그레스 배경 등

export const FLAG: Record<string, string> = {
  ko: "🇰🇷", en: "🇺🇸", ja: "🇯🇵", zh: "🇨🇳", es: "🇪🇸", de: "🇩🇪",
  pt: "🇧🇷", ar: "🇸🇦", tr: "🇹🇷", vi: "🇻🇳", id: "🇮🇩", ms: "🇲🇾", hi: "🇮🇳",
};

/** 폰트 스택 — 커뮤니티 셸 계열에서 공통으로 쓴다 */
export const FONT_SANS = "var(--font-inter), var(--font-noto-sans-kr), sans-serif";
export const FONT_SERIF = "var(--font-lora), Georgia, serif";
