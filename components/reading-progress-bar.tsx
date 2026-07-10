"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * 블로그 글 전용 읽기 진행바 (화면 최상단 3px 고정).
 *
 * - targetRef(본문 <article>)가 있으면 "본문을 읽은 비율" 기준으로 계산:
 *   본문 상단이 뷰포트 상단에 닿는 순간 0% → 본문 하단이 뷰포트 하단에 닿으면 100%.
 *   targetRef가 없으면 문서 전체 스크롤 비율로 폴백.
 * - 성능: passive scroll + requestAnimationFrame 스로틀, ref 직접 스타일 조작으로
 *   React 리렌더 0회. transform(scaleX)/opacity만 변경해 레이아웃/페인트 비용 최소화.
 * - 접근성: 순수 시각 장식이므로 aria-hidden.
 * - 색: 브랜드 골드 → 포레스트 그린 그라디언트 (크림 라이트 테마 온브랜드).
 */
export default function ReadingProgressBar({
  targetRef,
  rtl = false,
}: {
  targetRef?: RefObject<HTMLElement>;
  rtl?: boolean;
}) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const bar = barRef.current;
      if (!bar) return;

      const winH = window.innerHeight;
      const doc = document.documentElement;
      let start = 0;
      let end = doc.scrollHeight - winH;

      const el = targetRef?.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        start = window.scrollY + rect.top; // 본문 상단(절대 위치)
        end = window.scrollY + rect.bottom - winH; // 본문 하단이 뷰포트 하단에 닿는 지점
      }

      const range = Math.max(end - start, 1);
      const progress = Math.min(Math.max((window.scrollY - start) / range, 0), 1);

      bar.style.transform = `scaleX(${progress})`;
      bar.style.opacity = progress > 0.001 ? "1" : "0";
    };

    const onScroll = () => {
      if (raf === 0) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== 0) cancelAnimationFrame(raf);
    };
  }, [targetRef]);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[5px] pointer-events-none"
    >
      <div
        ref={barRef}
        className="h-full w-full transition-opacity duration-200"
        style={{
          transform: "scaleX(0)",
          transformOrigin: rtl ? "right" : "left",
          opacity: 0,
          background: "linear-gradient(90deg,#ff0080 0%,#ff6a00 20%,#ffe600 40%,#00e676 60%,#00b8ff 80%,#c400ff 100%)",
          boxShadow: "0 0 8px rgba(255,255,255,0.35), 0 1px 2px rgba(0,0,0,0.3)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
