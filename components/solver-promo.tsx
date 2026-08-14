import Link from "next/link";
import { BG, INK, FONT_SANS, FONT_SERIF } from "@/lib/theme";

/**
 * 우측 사이드바용 「GTO 솔버」 직사각형 버튼 (사장님 지시 2026-08-14).
 *
 * ★왜 컴포넌트로 뺐나: 우측 사이드바가 **두 벌** 존재한다 —
 *   ① 홈: `app/community/community-client.tsx`의 인라인 <aside> (86KB 클라이언트 컴포넌트)
 *   ② 허브: `components/hub-sidebar.tsx` (서버 컴포넌트)
 *   같은 버튼을 양쪽에 손으로 복사하면 **반드시 갈라진다** — 이 레포가 좌측 레일·하단 탭바에서
 *   이미 두 번 겪은 결함이다(side-rail.tsx 주석). 그래서 한 파일만 고치면 양쪽이 같이 바뀌게 둔다.
 *
 * ★"use client"를 붙이지 않는다 — Link 하나뿐이라 서버 컴포넌트로 두고,
 *   클라이언트 컴포넌트(홈)에서 import해도 그대로 동작한다. 반대로 붙이면 허브(서버)가 손해다.
 *
 * 🔴 **한국어에서만 렌더한다.** `/solver`는 한국어 전용 페이지다(다국어판 없음).
 *   다른 로케일 사이드바에 넣으면 독자를 읽지 못하는 페이지로 보낸다 —
 *   side-rail의 허브 메뉴가 `!locale`일 때만 뜨는 것과 같은 규율이다.
 *   → `/en/solver`를 열면 그때 이 조건을 함께 고친다(핸드오프 「시한」 9월 초 항목).
 */

/** 골드 액센트 — 이벤트 카드가 쓰는 rgba(212,175,55,…)와 같은 색. */
const GOLD_ACCENT = "#d4af37";

export default function SolverPromo() {
  return (
    <Link
      href="/solver"
      className="block rounded p-4 transition-opacity hover:opacity-90"
      style={{ background: INK, border: `1px solid ${INK}` }}
    >
      <p
        className="text-[10px] font-bold tracking-widest uppercase mb-1"
        style={{ color: GOLD_ACCENT, fontFamily: FONT_SANS }}
      >
        ♠ 무료 도구
      </p>
      <p className="text-[17px] font-bold mb-1.5" style={{ color: BG, fontFamily: FONT_SERIF }}>
        GTO 솔버
      </p>
      <p
        className="text-[12px] leading-snug"
        style={{ color: "rgba(244,240,231,0.72)", fontFamily: FONT_SANS }}
      >
        홀덤 GTO 표를 브라우저에서 바로 계산 — 설치도 회원가입도 없이 무료
      </p>
      <span
        className="mt-3 block rounded py-2 text-center text-[13px] font-bold"
        style={{ background: GOLD_ACCENT, color: INK, fontFamily: FONT_SANS }}
      >
        솔버 열기 →
      </span>
    </Link>
  );
}
