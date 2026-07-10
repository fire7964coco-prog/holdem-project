/**
 * 에스컬레이터식 윈도우 스크롤 헬퍼.
 *
 * 네이티브 `window.scrollTo({ behavior: "smooth" })`는 브라우저마다 초반에
 * 훅 빨려 올라가는 급가속 곡선이라, requestAnimationFrame 기반으로
 * 완만한 ease-in-out + 거리 비례 duration(상·하한 클램프)을 직접 구현한다.
 * 진행 중 사용자가 휠·터치·키보드로 개입하면 즉시 중단해 방해하지 않는다.
 */

export type SmoothScrollOptions = {
  /** duration 하한 (ms, 기본 300) */
  minDuration?: number;
  /** duration 상한 (ms, 기본 900) */
  maxDuration?: number;
  /** 1px 이동당 소요 ms — 거리 비례 속도감 (기본 0.5) */
  msPerPx?: number;
};

/** 동시에 하나의 애니메이션만 — 새 호출이 오면 이전 것을 교체 */
let activeCancel: (() => void) | null = null;

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export function smoothScrollWindowTo(targetTop: number, opts: SmoothScrollOptions = {}): void {
  if (typeof window === "undefined") return;

  const { minDuration = 300, maxDuration = 900, msPerPx = 0.5 } = opts;

  // 진행 중인 애니메이션이 있으면 교체
  if (activeCancel) activeCancel();

  const maxTop = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
  const target = Math.min(Math.max(0, targetTop), maxTop);
  const start = window.scrollY;
  const distance = target - start;
  if (Math.abs(distance) < 1) return;

  // 접근성: 모션 최소화 설정이면 즉시 점프
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, target);
    return;
  }

  const duration = Math.min(
    maxDuration,
    Math.max(minDuration, Math.abs(distance) * msPerPx)
  );

  let rafId = 0;
  let cancelled = false;
  const startTime = performance.now();

  // 사용자 개입(휠·터치·키보드·마우스다운) 시 즉시 중단
  const interruptEvents: Array<keyof WindowEventMap> = [
    "wheel",
    "touchstart",
    "keydown",
    "mousedown",
  ];
  const onUserInput = () => cancel();

  function removeInterruptListeners() {
    interruptEvents.forEach((ev) => window.removeEventListener(ev, onUserInput));
  }

  function cancel() {
    if (cancelled) return;
    cancelled = true;
    cancelAnimationFrame(rafId);
    removeInterruptListeners();
    if (activeCancel === cancel) activeCancel = null;
  }

  interruptEvents.forEach((ev) =>
    window.addEventListener(ev, onUserInput, { passive: true })
  );
  activeCancel = cancel;

  const step = (now: number) => {
    if (cancelled) return;
    const t = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, start + distance * easeInOutQuad(t));
    if (t < 1) {
      rafId = requestAnimationFrame(step);
    } else {
      cancel(); // 완료 — 리스너 정리
    }
  };
  rafId = requestAnimationFrame(step);
}
