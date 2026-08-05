"use client";

import { SEO } from "@/components/seo";
import WinRateSimulator, { type QuizUI } from "./_simulator";
import { KO_NAMES } from "./_equity";
import { ANTE, STACK, SAMPLES } from "./_engine";

/**
 * 한국어판 승률 시뮬레이터.
 *
 * ★테이블 UI·좌석 배치·확률 계산은 한 줄도 여기 없다 —
 *   `_simulator.tsx`(UI) + `_table.ts`(좌석) + `_engine.ts`(레인지·팟오즈) +
 *   `_equity.ts`(§13 검증 엔진)를 영어판과 공유한다.
 *   이 파일에 있는 건 **한국어 문자열뿐**이다. 그래야 두 언어의 숫자·동작이 안 갈린다.
 */

const KO_UI: QuizUI = {
  names: KO_NAMES,
  streets: ["프리플랍", "플랍", "턴", "리버"],
  hero: "나",
  folded: "폴드",
  raise: "레이즈",
  call: "콜",
  check: "체크",
  tableNote: "6인 테이블 · 프리플랍에 들어오는 인원을 골라보세요",
  playersBtn: (n) => `${n}명`,
  loading: "카드 섞고 승률 계산 중…",

  myEquity: "내 승률",
  vsOpponents: (n) => (n === 0 ? "상대 없음" : `상대 ${n}명 상대로`),
  basisRandom: "상대 무작위 기준",
  basisRange: "액션 일치 레인지 기준",
  revealedLabel: "👀 공개된 저 패들 상대로는",
  revealedNote: (gap) =>
    `위 승률은 상대 패를 모른다고 보고 낸 값이라 ${gap}%p 차이가 납니다. 실전에서 판단할 때 쓰는 건 위쪽 숫자입니다.`,

  potOddsTitle: "팟오즈 — 콜이 본전이 되는 승률",
  potLabel: "팟",
  potBeforeLabel: "팟(베팅 전)",
  toCallLabel: "콜",
  requiredLabel: "필요 승률",
  noBet: "아무도 걸지 않았습니다. 공짜로 다음 카드를 봅니다.",
  verdictCall: "콜",
  verdictFold: "폴드",
  impliedNote: "다만 맞았을 때 뒤에서 더 받아낼 수 있으면(임플라이드 오즈) 콜이 되기도 합니다.",

  revealBtn: (next) => `${next} 공개 →`,
  newHandBtn: "새 핸드 돌리기 🔄",
  showCards: "👀 상대 패 보기",
  hideCards: "🙈 상대 패 가리기",

  wonByFold: (pot) => `상대가 전부 폴드 — 팟 ${pot.toLocaleString()} 획득`,
  splitLabel: (names) => `스플릿 — ${names.join(" · ")} 무승부`,
  winLabel: (name, cat) => `${name} 승리 · ${cat}`,

  reviewTitle: "📋 복기 — 어디서 끊었어야 했나",
  reviewCols: ["시점", "내 승률", "필요 승률", "판정"],
  reviewNoMistake: "✅ 끝까지 콜이 맞았던 판입니다.",
  reviewMistake: (street) => `⚠️ ${street}에서 이미 폴드가 맞았습니다. 여기서 끊었어야 합니다.`,
  reviewInvested: (invested, pot) => `내가 넣은 돈 ${invested.toLocaleString()} · 최종 팟 ${pot.toLocaleString()}`,

  ruleTitle: "이 시뮬레이터가 두는 가정",
  ruleText: (
    <>
      <p className="mb-2">
        <b className="text-foreground">상대는 아래 규칙대로만 움직입니다.</b> 실제 플레이어는 절대 이렇게 두지
        않습니다 — 포지션·상대·스택·이미지에 따라 전혀 다르게 칩니다. 물리 문제의 &ldquo;마찰이 없다고
        가정하면&rdquo;과 같은 단순화라고 보시면 됩니다.
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>투페어 이상 → <b className="text-foreground">팟 사이즈 레이즈</b></li>
        <li>원페어 또는 플러시·스트레이트 드로우 → <b className="text-foreground">하프팟 베팅</b></li>
        <li>그 외 → <b className="text-foreground">폴드</b> (실전처럼 패는 안 보여줍니다)</li>
      </ul>
      <p className="mb-2">
        누군가 레이즈한 스트리트에서는 남은 상대 전원이(원페어·드로우도) 그 팟 사이즈 금액을 그대로 콜하고,
        베팅이 남은 스택보다 크면 올인으로 잘립니다.
      </p>
      <p className="mb-2">
        <b className="text-foreground">내 승률은 상대 패를 모른다는 전제로 계산합니다.</b> 플랍부터는
        상대가 보여준 액션(레이즈·콜)을 그대로 했을 패 전체를 그 상대의 레인지로 봅니다 — 레이즈를 봤다면
        투페어 이상만 남는 식입니다. 화면에서 폴드한 사람이 계산에서도
        빠지므로 보이는 것과 근거가 어긋나지 않습니다. 프리플랍만 상대를 무작위로 봅니다.
      </p>
      <p className="mb-2">
        <b className="text-foreground">판정은 팟오즈만 놓고 본 것입니다.</b> 임플라이드 오즈·상대의 성향·
        블러프 가능성은 계산에 없습니다. 특히 드로우는 팟오즈로 아슬아슬하게 모자라도 실전에서는 콜이 되는
        경우가 많습니다.
      </p>
      <p>
        각자 {ANTE}씩 넣고 시작하며 스택은 {STACK.toLocaleString()}입니다. 나는 폴드하지 않고 끝까지 갑니다 —
        그래야 리버까지 보고 복기할 수 있기 때문입니다. 승률은 프리플랍 {SAMPLES.preflop.toLocaleString()}회,
        이후 {SAMPLES.postflop.toLocaleString()}회 시뮬레이션한 근사값입니다(오차 ±0.3%p 안팎).
      </p>
    </>
  ),
  footer: (
    <>
      {/* ★KO 슬러그는 CLAUDE.md §8의 필라 목록과 다르다. 실제 파일 기준으로 적을 것 —
          holdem-pot-odds(X) → holdem-pot-odds-calculation(O) · holdem-position-play(X, EN·JA·ES 전용) */}
      계산법이 궁금하다면{" "}
      <a href="/blog/holdem-pot-odds-calculation" className="text-primary underline">팟오즈 계산법 →</a>
      {" · "}
      <a href="/blog/position-is-everything-in-holdem" className="text-primary underline">포지션이 왜 중요한지</a>
      {" · "}
      <a href="/calculator" className="text-primary underline">확률 계산기</a>
    </>
  ),
};

export default function WinRateQuizClient() {
  return (
    <>
      <SEO
        title="홀덤 승률 시뮬레이터 — 어디서 끊었어야 했는지 복기까지"
        description="상대 패를 모르는 실전 그대로, 단계별 내 승률과 플랍부터의 팟오즈 필요 승률을 보여주고 마지막에 어디서 폴드했어야 하는지 복기해주는 홀덤 승률 시뮬레이터."
        path="/win-rate-quiz"
      />
      <div className="min-h-screen max-w-md md:max-w-2xl mx-auto px-3 py-6">
        <div className="text-center mb-3">
          <h1 className="font-serif text-2xl font-black text-foreground">승률 시뮬레이터 🃏</h1>
          <p className="text-xs text-muted-foreground mt-0.5">상대 패는 모른 채로 — 끝나고 나서 어디서 끊었어야 했는지 복기합니다</p>
        </div>
        <WinRateSimulator ui={KO_UI} />
      </div>
    </>
  );
}
