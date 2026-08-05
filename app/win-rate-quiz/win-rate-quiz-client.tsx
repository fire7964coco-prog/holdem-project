"use client";

import { SEO } from "@/components/seo";
import WinRateSimulator, { type QuizUI } from "./_simulator";
import { KO_NAMES } from "./_equity";

/**
 * 한국어판 승률 시뮬레이터.
 *
 * ★테이블 UI·좌석 배치·확률 계산은 한 줄도 여기 없다 —
 *   `_simulator.tsx`(UI) + `_table.ts`(좌석) + `_equity.ts`(§13 검증 엔진)를 영어판과 공유한다.
 *   이 파일에 있는 건 **한국어 문자열뿐**이다. 그래야 두 언어의 숫자·동작이 안 갈린다.
 */

const KO_UI: QuizUI = {
  names: KO_NAMES,
  streets: ["프리플랍", "플랍", "턴", "리버"],
  hero: "나",
  folded: "폴드",
  tableNote: "6인 테이블 · 끝까지 붙는 인원을 골라보세요",
  playersBtn: (n) => `${n}명`,
  loading: "카드 섞고 승률 계산 중…",
  equityWord: "승률",
  methodNote: "정확 계산",
  revealBtn: (next) => `${next} 공개 →`,
  newHandBtn: "새 핸드 돌리기 🔄",
  splitLabel: (names) => `스플릿 — ${names.join(" · ")} 무승부`,
  winLabel: (name, cat) => `${name} 승리 · ${cat}`,
  footer: (
    <>
      직접 계산해보고 싶다면{" "}
      <a href="/calculator" className="text-primary underline">홀덤 확률 계산기 →</a>
      {" · "}
      {/* ★KO에는 holdem-position-play가 없다(EN·JA·ES 등에만 존재) — KO 슬러그는 이것이다 */}
      <a href="/blog/position-is-everything-in-holdem" className="text-primary underline">포지션이 왜 중요한지</a>
      {" · "}
      <a href="/blog/holdem-probability" className="text-primary underline">확률 개념 배우기</a>
    </>
  ),
};

export default function WinRateQuizClient() {
  return (
    <>
      <SEO
        title="홀덤 승률 시뮬레이터 — 카드가 열릴 때마다 승률이 바뀐다"
        description="6인 테이블에서 끝까지 붙은 사람들의 승률이 프리플랍·플랍·턴·리버 카드가 열릴 때마다 어떻게 변하는지 눈으로 확인하는 홀덤 승률 시뮬레이터. 정확히 계산된 확률입니다."
        path="/win-rate-quiz"
      />
      <div className="min-h-screen max-w-md md:max-w-2xl mx-auto px-3 py-6">
        <div className="text-center mb-3">
          <h1 className="font-serif text-2xl font-black text-foreground">승률 시뮬레이터 🃏</h1>
          <p className="text-xs text-muted-foreground mt-0.5">카드가 열릴 때마다 승률이 어떻게 바뀔까?</p>
        </div>
        <WinRateSimulator ui={KO_UI} />
      </div>
    </>
  );
}
