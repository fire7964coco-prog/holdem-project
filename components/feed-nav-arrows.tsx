"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { smoothScrollWindowTo } from "@/lib/smooth-scroll";

/**
 * 데스크톱 홈피드 우측 세로 중앙 ↑/↓ 화살표 (유튜브 쇼츠 스타일).
 * `[data-feed-card]` 카드 목록을 기준으로 이전/다음 카드 top을
 * sticky 헤더 아래로 맞춰 에스컬레이터식 스크롤한다.
 *
 * community-client의 데스크톱 레이아웃(홈 탭)에서만 렌더된다.
 */

/** 카드 top을 헤더 아래로 맞출 때 추가 여백(px) */
const GAP = 12;
/** 헤더 높이 측정 실패 시 폴백(px) */
const FALLBACK_HEADER = 64;
/** "현재 위치" 판정 허용 오차(px) */
const TOLERANCE = 8;

export default function FeedNavArrows({
  headerRef,
}: {
  /** 데스크톱 sticky 마스트헤드 ref — 높이만큼 오프셋 */
  headerRef: RefObject<HTMLElement>;
}) {
  const [canUp, setCanUp] = useState(false);
  const [canDown, setCanDown] = useState(false);
  const tickingRef = useRef(false);

  const getOffset = useCallback(() => {
    const h = headerRef.current?.getBoundingClientRect().height;
    return (h && h > 0 ? h : FALLBACK_HEADER) + GAP;
  }, [headerRef]);

  /** 현재 레이아웃에서 실제 보이는 피드 카드만 (모바일 트리의 display:none 카드 제외) */
  const getCardTops = useCallback((): number[] => {
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>("[data-feed-card]")
    ).filter((el) => el.offsetParent !== null);
    return cards
      .map((el) => Math.round(el.getBoundingClientRect().top + window.scrollY))
      .sort((a, b) => a - b);
  }, []);

  const update = useCallback(() => {
    const tops = getCardTops();
    if (tops.length === 0) {
      setCanUp(false);
      setCanDown(false);
      return;
    }
    const anchor = window.scrollY + getOffset();
    setCanDown(tops.some((t) => t > anchor + TOLERANCE));
    setCanUp(tops.some((t) => t < anchor - TOLERANCE));
  }, [getCardTops, getOffset]);

  useEffect(() => {
    // passive 스크롤 리스너 + rAF 스로틀
    const onScrollOrResize = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        tickingRef.current = false;
        update();
      });
    };
    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [update]);

  const go = useCallback(
    (dir: 1 | -1) => {
      const tops = getCardTops();
      if (tops.length === 0) return;
      const offset = getOffset();
      const anchor = window.scrollY + offset;
      let target: number | undefined;
      if (dir === 1) {
        // 다음 글: 뷰포트 상단(헤더 아래) 아래에 있는 첫 카드
        target = tops.find((t) => t > anchor + TOLERANCE);
      } else {
        // 이전 글: 뷰포트 상단(헤더 아래) 위에 있는 마지막 카드
        for (let i = tops.length - 1; i >= 0; i--) {
          if (tops[i] < anchor - TOLERANCE) {
            target = tops[i];
            break;
          }
        }
      }
      if (target === undefined) return;
      smoothScrollWindowTo(target - offset);
    },
    [getCardTops, getOffset]
  );

  return (
    <div
      className="hidden lg:flex fixed flex-col gap-2.5"
      style={{ right: 16, top: "50%", transform: "translateY(-50%)", zIndex: 40 }}
    >
      <ArrowButton dir="up" disabled={!canUp} onClick={() => go(-1)} label="이전 글" />
      <ArrowButton dir="down" disabled={!canDown} onClick={() => go(1)} label="다음 글" />
    </div>
  );
}

function ArrowButton({
  dir,
  disabled,
  onClick,
  label,
}: {
  dir: "up" | "down";
  disabled: boolean;
  onClick: () => void;
  label: string;
}) {
  const [hover, setHover] = useState(false);
  const lit = hover && !disabled;
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-all duration-150 active:scale-90"
      style={{
        background: lit
          ? "linear-gradient(135deg,#d4af37,#f0d060)" // 브랜드 골드 (맨위로 버튼과 통일)
          : "rgba(13,28,20,0.85)", // 다크 포레스트 그린 반투명
        color: lit ? "#0d1c14" : "#f4f0e7",
        border: "1px solid rgba(212,175,55,0.4)",
        opacity: disabled ? 0.35 : 1,
        cursor: disabled ? "default" : "pointer",
        backdropFilter: "blur(2px)",
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.6}
        aria-hidden="true"
      >
        {dir === "up" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        )}
      </svg>
    </button>
  );
}
