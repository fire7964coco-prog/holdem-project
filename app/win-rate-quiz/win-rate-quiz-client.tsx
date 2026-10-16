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
  bet: "베팅",
  check: "체크",
  allIn: "올인",
  tableNote: "6인·9인 테이블 · 프리플랍에 들어오는 인원(2~6명)을 골라보세요",
  playersBtn: (n) => `${n}명`,
  playersLabel: "인원",
  tableBtn: (n) => `${n}인`,
  styleLabel: "상대 성향",
  styleHint: "상대 성향 — 플랍부터의 액션 규칙만 바뀌고, 프리플랍 레인지는 같습니다",
  styleNames: { standard: "기본", tight: "타이트", loose: "루즈", aggressive: "공격적" },
  loading: "카드 섞고 승률 계산 중…",

  myEquity: "내 승률",
  vsOpponents: (n) => (n === 0 ? "상대 없음" : `상대 ${n}명 상대로`),
  basisSeat: "자리별 레인지 기준",
  basisRange: "액션 일치 레인지 기준",
  roleOpen: "오픈",
  roleDefend: "수비",
  winShort: "승",
  tieShort: "무",
  loseShort: "패",
  revealedLabel: "👀 공개된 저 패들 상대로는",
  revealedNote: (gap) =>
    `위 승률은 상대 패를 모른다고 보고 낸 값이라 ${gap}%p 차이가 납니다. 실전에서 판단할 때 쓰는 건 위쪽 숫자입니다.`,

  potOddsTitle: "팟오즈 — 콜이 본전이 되는 승률",
  potLabel: "팟",
  potBeforeLabel: "팟(베팅 전)",
  toCallLabel: "콜",
  requiredLabel: "필요 승률",
  noBet: "아무도 걸지 않았습니다. 공짜로 다음 카드를 봅니다.",
  noBetAllIn: (river) =>
    river
      ? "남은 사람 모두 이미 올인이라 더 걸 칩이 없습니다. 그대로 쇼다운합니다."
      : "남은 사람 모두 이미 올인이라 더 걸 칩이 없습니다. 남은 카드를 끝까지 깐 다음 쇼다운합니다.",
  verdictCall: "콜",
  verdictFold: "폴드",
  impliedNote: "다만 맞았을 때 뒤에서 더 받아낼 수 있으면(임플라이드 오즈) 콜이 되기도 합니다.",

  revealBtn: (next) => `${next} 공개 →`,
  newHandBtn: "새 핸드 돌리기 🔄",
  showCards: "👀 상대 패 보기",
  hideCards: "🙈 상대 패 가리기",

  wonByFold: (pot) => `상대가 전부 폴드 — 팟 ${pot.toLocaleString("en-US")} 획득`,
  splitLabel: (names) => `스플릿 — ${names.join(" · ")} 무승부`,
  winLabel: (name, cat) => `${name} 승리 · ${cat}`,

  reviewTitle: "📋 복기 — 어디서 끊었어야 했나",
  reviewCols: ["시점", "내 승률", "필요 승률", "판정"],
  reviewNoMistake: "✅ 끝까지 콜이 맞았던 판입니다.",
  reviewMistake: (street) => `⚠️ ${street}에서 이미 폴드가 맞았습니다. 여기서 끊었어야 합니다.`,
  reviewInvested: (invested, pot) => `내가 넣은 돈 ${invested.toLocaleString("en-US")} · 최종 팟 ${pot.toLocaleString("en-US")}`,

  formulaTitle: "📐 이 승률은 어떻게 나왔나",
  outsLabel: (n) => `완성·개선 카드 ${n}장`,
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `플러시 ${o.flush}장` : "",
      o.straight > 0 ? `스트레이트 ${o.straight}장` : "",
      o.set > 0 ? `셋·트립스 ${o.set}장` : "",
      o.twoPair > 0 ? `투페어 ${o.twoPair}장` : "",
      o.over > 0 ? `오버카드 페어 ${o.over}장` : "",
      both > 0 ? `두 가지에 겹치는 ${both}장은 한 번만 셈` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "완성·개선 카드가 나올 확률 (실전 암산)",
  winLabel2: "팟 승률 (시뮬레이션 · 무승부는 나눠 가진 몫으로 셈)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "두 숫자는 서로 다른 걸 잽니다. 위는 «맞출» 확률이고 아래는 팟에서 «이겨서» 가져갈 몫(무승부는 나눠 가진 만큼 셈)이라, 맞춰도 상대가 더 좋아지면 지고 못 맞춰도 이길 때가 있습니다. 콜·폴드 판정에 쓰는 건 아래 숫자입니다.",
  noDrawNote: (basis, n) =>
    basis === "seat"
      ? `프리플랍이라 아직 «아웃츠 × 2/4» 암산이 쓰이지 않는 자리입니다. 위 승률은 상대마다 그 자리에서 팟에 들어올 만한 패(자리별 레인지)를 상대로 ${n}회 돌려 낸 값입니다.`
      : `지금은 이 도구가 세는 아웃츠 — 플러시·스트레이트를 완성하거나 셋·투페어·오버카드 페어로 족보가 한 단계 올라갈 카드 — 가 하나도 없어서 «아웃츠 × 2/4» 암산이 쓰이지 않는 자리입니다. 위 승률은 상대가 보여준 액션에 맞는 패 전체를 상대로 ${n}회 돌려 낸 값입니다.`,
  foldWinNote: "상대가 모두 폴드해 팟은 내 것입니다. 위 승률 100%는 시뮬레이션으로 낸 숫자가 아니라 이 판의 결과입니다.",
  riverNote: "리버라 더 나올 카드가 없어서 «아웃츠 × 2/4» 암산이 쓰이지 않습니다. 위 승률은 내 최종 패를 상대가 보여준 액션에 맞는 패 전체와 비교해 낸 값입니다.",
  chartTitle: "📈 스트리트별 승률 — 패를 다 깠을 때",
  resultTabs: ["📋 복기", "📈 승률 흐름", "🃏 승률·팟오즈"],
  solverTitle: (info) =>
    info.kind === "spot" ? "이 자리를 GTO 솔버로 보기" : info.kind === "notReady" ? "비슷한 자리를 GTO 솔버로 보기" : "1대1 자리를 GTO 솔버로 보기",
  solverOpen: "솔버 «플랍 조회» 열기",
  solverNote: (info) => {
    const gto = "양쪽이 GTO로 둘 때의 플랍 전략(미리 계산한 결과 · 6맥스 100bb · 플랍까지)이라, 이 시뮬레이터의 상대 규칙·레인지·벳 크기와는 다릅니다.";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} 오픈 · ${info.caller} 콜(솔버 싱글 레이즈 팟 기준) · 플랍 ${info.flop.map((c) => c.rank + c.suit).join("")} — 솔버 «플랍 조회»에서 같은 자리·같은 플랍을 바로 엽니다. ${gto}`
          : `${info.opener} 오픈 · ${info.caller} 콜 — 이 판은 플랍 전에 끝나서 같은 자리 조합만 엽니다. 플랍 3장은 솔버 화면에서 골라 보세요. ${gto}`;
      case "notReady":
        return `${info.opener} 오픈 · ${info.caller} 콜 조합은 솔버 «플랍 조회»에 아직 미리 계산되지 않았습니다. 가까운 자리 조합을 고르거나, 솔버에서 직접 계산할 수 있습니다.`;
      case "multiway":
        return `이 판은 프리플랍에 ${info.players}명이 들어간 팟입니다. 솔버의 미리 계산한 결과는 1대1 팟만 있어 그대로 열 수 없습니다 — «플랍 조회»에서 상대 한 명과의 자리 조합을 골라 보세요.`;
      case "table9":
        return "솔버의 미리 계산한 결과는 6맥스 테이블 기준이라 9인 테이블 판은 그대로 열 수 없습니다 — «플랍 조회»에서 가까운 자리 조합을 골라 보세요.";
    }
  },
  solverLang: "ko",
  chartRangeLegend: "내가 본 승률",
  chartNote: "실선은 모든 패를 공개했을 때 좌석별 승률이고, 점선은 상대 패를 모른 채 화면에서 본 내 승률입니다. 폴드한 사람은 폴드하기 전 스트리트까지 선이 이어집니다.",
  quizToggle: "🎯 퀴즈",
  quizGuessTitle: "내 승률은 몇 %일까?",
  quizGuessHint: "슬라이더로 짐작해 보세요",
  quizSubmit: "정답 확인",
  quizCallSubmit: "콜 → 정답 확인",
  quizFoldSubmit: "폴드 → 정답 확인",
  quizResult: (guess, err, points) => `내 짐작 ${guess}% · 오차 ${err}%p · ${points}점`,
  quizChoiceResult: (ok, verdict) => (ok ? `판정 맞음(${verdict})` : `판정 틀림 — 정답은 ${verdict}`),
  quizNotCounted: "이미 승률이나 상대 패를 본 뒤라 퀴즈 기록에는 넣지 않았어요",
  quizStats: (s) => `누적 ${s.hands}판 · 평균 오차 ${s.avgErr}%p · 판정 ${s.hits}/${s.decisions} · ${s.points.toLocaleString("en-US")}점`,
  quizReset: "초기화",
  quizResetConfirm: "이 브라우저에 남은 퀴즈 기록을 지울까요? 되돌릴 수 없습니다.",
  quizInvite: "로그인하면 이 기록이 계정에 남아 폰·PC 어디서나 볼 수 있어요.",
  quizInviteLink: "로그인",
  quizGuessCol: "내 짐작",
  quizChoiceCol: "내 선택",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `이번 판 평균 오차 ${avgErr}%p${decisions > 0 ? ` · 판정 ${hits}/${decisions} 맞힘` : ""} · ${points}점`,
  quizGuessLegend: "내 짐작",
  customToggle: "✍️ 직접 입력",
  customTitle: "직접 입력 — 겪었던 그 판 다시 보기",
  customHint: "칸을 누르고 아래에서 카드를 고르세요. 비워 둔 칸은 무작위로 채우고, 상대 패는 지금처럼 자리별 레인지에서 나옵니다.",
  customPos: "내 자리",
  customRandom: "무작위",
  customHero: "내 패",
  customBoard: "보드",
  customBoardSlots: ["플랍", "플랍", "플랍", "턴", "리버"],
  customStart: "이 판으로 시작 →",
  customClear: "모두 비우기",
  customClose: "닫기",
  customOff: "무작위 판으로 돌아가기",
  customActive: "직접 입력한 판 · 새 핸드도 같은 카드로 돌립니다",
  customEdit: "고치기",
  shareBtn: "이 판 링크 복사",
  shareCopied: "복사했어요. 링크를 연 사람은 같은 카드·같은 승률로 이 판을 프리플랍부터 봅니다.",
  shareManual: "자동 복사가 막혀 있어요. 아래 주소를 직접 복사하세요.",
  sharedActive: "공유받은 판 · 보낸 사람과 같은 카드·같은 승률 (퀴즈 기록에는 넣지 않아요)",
  sharedInvalid: "공유 링크를 읽지 못해 새 판으로 시작했어요 (주소가 잘렸거나 바뀐 링크일 수 있어요)",
  rangeToggle: "상대 레인지 보기",
  rangeTitle: "상대 레인지 — 지금까지의 액션과 맞는 패",
  rangeCombos: (pre, cur, pct) => `프리플랍 ${pre}콤보 → 지금 ${cur}콤보 (${pct}% 남음)`,
  rangeLegend: ["남음 (진할수록 많이)", "액션으로 빠짐", "처음부터 없음", "실제 패", "내 패·보드에 막힘"],
  rangeNote: "자리별 프리플랍 레인지에서 출발해, 스트리트마다 상대 규칙과 다르게 움직였을 패를 지웠습니다. 위 승률도 이 레인지로 계산합니다. 내 패·보드와 겹치는 콤보는 뺐습니다.",
  quizKinds: ["승률 짐작 + 결정", "결정만 (나라면?)"],
  decideTitle: "나라면?",
  decideHint: "상대 패를 모르는 채로 콜할지 폴드할지 고르세요. 폴드를 골라도 판은 끝까지 갑니다. 이 모드는 퀴즈 기록에 넣지 않아요.",
  decideSummary: (hits, decisions) => `이번 판: 결정 ${decisions}번 중 팟오즈 기준 ${hits}번 맞음`,
  actualCol: "패 공개 시",
  actualSummary: (hits, decisions) => `상대 패를 알았다면 맞았을 결정 ${hits}/${decisions} — 참고용이에요. 실전 판단의 기준은 패를 모르는 상태의 팟오즈입니다.`,

  ruleTitle: "이 시뮬레이터가 두는 가정",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">상대는 아래 규칙대로만 움직입니다.</b> 실제 플레이어는 절대 이렇게 두지
        않습니다 — 포지션·상대·스택·이미지에 따라 전혀 다르게 칩니다. 물리 문제의 &ldquo;마찰이 없다고
        가정하면&rdquo;과 같은 단순화라고 보시면 됩니다.
      </p>
      <p className="mb-1">
        지금 고른 상대 성향: <b className="text-foreground">{KO_UI.styleNames[style]}</b> (테이블 전원 같은 성향 · 위 선택칸에서 바꿉니다)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>투페어 이상 → <b className="text-foreground">{style === "aggressive" ? "팟의 150% 레이즈(오버벳)" : "팟 사이즈 레이즈"}</b></li>
        {style === "standard" && <li>원페어 또는 플러시·스트레이트 드로우 → <b className="text-foreground">하프팟 베팅</b></li>}
        {style === "tight" && <>
          <li>홀카드로 만든 탑페어 이상의 원페어(오버페어 포함) 또는 플러시·스트레이트 드로우 → <b className="text-foreground">하프팟 베팅</b></li>
          <li>그보다 약한 원페어(보드에만 있는 페어 포함) → <b className="text-foreground">폴드</b></li>
        </>}
        {style === "loose" && <li>원페어 · 플러시·스트레이트 드로우 · 보드 최고 카드보다 높은 홀카드(오버카드) → <b className="text-foreground">하프팟 베팅</b></li>}
        {style === "aggressive" && <>
          <li>플러시·스트레이트 드로우 → <b className="text-foreground">레이즈(세미블러프)</b></li>
          <li>원페어 → <b className="text-foreground">하프팟 베팅</b></li>
          <li>페어도 드로우도 없지만 오버카드가 있으면 → <b className="text-foreground">레이즈(블러프)</b></li>
        </>}
        <li>그 외 → <b className="text-foreground">폴드</b> (실전처럼 패는 안 보여줍니다)</li>
      </ul>
      <p className="mb-2">
        규칙은 위 줄부터 차례로 보고 처음 맞는 줄 하나를 따릅니다. 드로우는 플랍·턴에서 홀카드가 1장 이상 들어간 4장 플러시·스트레이트 패턴만 셉니다(리버에는 드로우가 없습니다).{" "}
        {style === "aggressive" && "공격적 성향의 레이즈는 세미블러프·블러프를 포함해 모두 팟의 150%입니다. "}
        누군가 레이즈한 스트리트에서는 남은 상대 전원이 그 레이즈 금액을 그대로 콜하고,
        베팅이 남은 스택보다 크면 올인으로 잘립니다. 올인한 뒤에는 아무도 폴드하지 않고 남은 보드를 다 깐 다음 쇼다운합니다. 체크레이즈는 없습니다 — 상대마다 스트리트당 규칙대로 한 번만 액션하고, 체크한 뒤 다시 응수하는 단계가 없기 때문입니다. 좌석 라벨은 스트리트를 요약한 것입니다 — 금액을 정한 좌석은 “베팅”, 남은 좌석은 순서와 상관없이 모두 “콜”로 표시됩니다. 나는 베팅하지 않고 끝까지 콜만 합니다.
        프리플랍 레인지(아래)는 성향과 상관없이 같습니다.
      </p>
      <p className="mb-2">
        <b className="text-foreground">내 승률은 상대 패를 모른다는 전제로 계산합니다.</b> 플랍부터는
        그 상대의 프리플랍 자리별 레인지(아래) 중 고른 성향의 규칙으로 보여준 액션(레이즈·콜)과 맞는 패만 남깁니다 —
        기본 성향에서 레이즈를 봤다면 투페어 이상만 남고, 공격적 성향이면 드로우와 오버카드 블러프도 함께 남는 식입니다.
        화면에서 폴드한 사람이 계산에서도 빠지므로 보이는 것과 근거가 어긋나지 않습니다.
      </p>
      <p className="mb-2">
        <b className="text-foreground">상대의 프리플랍 패는 자리별 레인지에서 나옵니다.</b> 팟에 남은 사람 중
        액션 순서가 가장 빠른 사람이 오픈했고, 나머지는 그 오픈을 콜이나 3벳으로 받았다고 봅니다(오픈 레인지 ·
        수비 레인지). 레인지는 6맥스 캐시 100bb 기준으로 공개 자료 여러 곳을 맞춰 본 합의 레인지이고, 경계에
        있는 패는 25·50·75% 빈도로 섞입니다. 표가 없는 조합(HJ가 UTG 오픈을 받을 때 · SB가 UTG·HJ·CO 오픈을
        받을 때)과 세 번째 사람부터는 가장 가까운 수비 표를 씁니다. 9인 테이블은 따로 표가 없어 UTG·UTG+1·UTG+2·LJ에
        6맥스 UTG 표를, 나머지 자리에 같은 이름의 6맥스 표를 씁니다(앞자리끼리 또는 HJ가 앞자리 오픈을 받을 때의 수비는 CO vs UTG 표) — 9인의 앞 세 자리는 실제보다 넓게 잡힙니다. 내 패만은 무작위입니다(직접 입력하지 않았을 때) — 레인지 밖의 패로도
        끝까지 가 보는 도구라서요. 3벳을 해도 팟 크기는 같게 단순화했습니다.
      </p>
      <p className="mb-2">
        <b className="text-foreground">판정은 팟오즈만 놓고 본 것입니다.</b> 임플라이드 오즈는 계산에 없고,
        상대 성향과 블러프는 고른 성향의 규칙만큼만 레인지에 들어갑니다. 특히 드로우는 팟오즈로 아슬아슬하게 모자라도 실전에서는 콜이 되는
        경우가 많습니다.
      </p>
      <p>
        각자 {ANTE}씩 넣고 시작하며 스택은 {STACK.toLocaleString("en-US")}입니다. 나는 폴드하지 않고 끝까지 갑니다 —
        그래야 리버까지 보고 복기할 수 있기 때문입니다. 승률은 시뮬레이션으로 낸 근사값이고, 표본은
        프리플랍 <b className="text-foreground">{SAMPLES.preflop.toLocaleString("en-US")}회</b> · 플랍부터{" "}
        <b className="text-foreground">{SAMPLES.postflop.toLocaleString("en-US")}회</b>로 고정입니다(표준오차 약 0.25~0.35%p).
        판마다 난수 시드를 고정하므로 같은 판이면 어느 기기에서든 같은 숫자가 나옵니다. 무승부는 같이 이긴 사람 수로
        나눠 셉니다(둘이 비기면 절반).
      </p>
      <p className="mt-2">
        <b className="text-foreground">상대 패를 공개하면</b> 좌석마다 «모든 패를 알 때의 승률»을 붙입니다. 이 값은 플랍부터
        남은 카드를 전부 열거한 정확한 값이고(프리플랍만 {SAMPLES.known.toLocaleString("en-US")}회 시뮬레이션), 화면 승률과
        콜·폴드 판정에는 쓰지 않습니다 — 실전에서는 볼 수 없는 정보라서요.
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 퀴즈를 켜면</b> 답을 낼 때까지 승률과 판정을 가립니다. «승률 짐작 + 결정»은 스트리트마다
        내 승률을 먼저 짐작하고, 누군가 베팅한 스트리트에서는 콜·폴드도 같이 고릅니다. «결정만 (나라면?)»은 짐작 없이
        누군가 베팅한 스트리트에서 콜·폴드만 고르며, 퀴즈 기록에 넣지 않습니다. 정답은 위 «내 승률»(상대 패를 모를 때의 값)이고,
        짐작 한 번의 점수는 <b className="text-foreground">100 − 4 × 오차(%p)</b>를 정수로 반올림한 값입니다(0점 아래로는 내려가지 않아 오차 25%p 이상이면 0점).
        콜·폴드는 팟오즈 판정과 같으면 맞힌 것으로 셉니다. 누적 기록은 이 브라우저에 남고, 로그인하면 계정에도
        저장돼 다른 기기에서도 이어집니다(카드·보드는 저장하지 않습니다).
      </p>
      <p className="mt-2">
        <b className="text-foreground">✍️ 직접 입력</b>에서는 내 자리·내 패·보드를 골라 겪었던 판을 다시 돌려 볼 수 있습니다.
        비워 둔 칸은 무작위로 채웁니다. 상대 패는 고를 수 없습니다 — 실전에서도 모르는 정보라, 지금처럼 자리별
        레인지에서 나오고 화면 승률도 «상대 패를 모른다»는 같은 전제로 냅니다. 보드를 미리 정해 둬도 각 스트리트의
        승률은 그때까지 깔린 카드만 보고 계산합니다. 같은 판을 되풀이하면 답을 외울 수 있어서, 직접 입력한 판은
        퀴즈 기록에 넣지 않습니다.
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
      <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
        <div className="text-center mb-1.5 lg:mb-3">
          <h1 className="font-serif text-2xl font-black text-foreground">승률 시뮬레이터 🃏</h1>
          {/* 폰에서는 두 줄로 접혀 팟오즈 박스를 고정 버튼 밑으로 밀어낸다(S-034 ⑤) — h1만 남긴다 */}
          <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">상대 패는 모른 채로 — 끝나고 나서 어디서 끊었어야 했는지 복기합니다</p>
        </div>
        <WinRateSimulator ui={KO_UI} />
      </div>
    </>
  );
}
