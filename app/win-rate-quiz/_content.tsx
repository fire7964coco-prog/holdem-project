/**
 * /win-rate-quiz 의 정적 본문 — **반드시 `ready` 게이트 밖**에 렌더된다.
 *
 * 왜 있나: 2026-08-06 이전까지 이 페이지의 정적 HTML에는 h1과 부제 한 줄뿐이었다.
 * 사이트맵은 priority 0.8로 색인을 밀고 있는데 구글이 받을 콘텐츠가 없었다
 * (`/holdem-practice`가 똑같은 상태였고 2026-08-05에 같은 방식으로 복구했다).
 * → 훅·상태를 쓰지 않는 순수 정적 컴포넌트로 두어 SSR 산출물에 그대로 들어가게 한다.
 *
 * ⚠️ 이 파일의 수치는 전부 `scripts/verify-quiz-equities.mjs`로
 *    `_equity.ts`의 평가기(best7fast)를 직접 돌려 검산한 값이다(샘플 400,000회).
 *    기억이나 어림으로 고치지 말 것 — 고치려면 스크립트를 다시 돌려라.
 */
import { WIN_RATE_QUIZ_FAQ } from "./faq";

const H2 = "font-serif text-lg md:text-xl font-black text-foreground mt-8 mb-2";
const P = "text-sm text-muted-foreground leading-relaxed mb-3";
const TABLE_WRAP = "overflow-x-auto my-4 rounded-xl border border-border";
const TABLE = "w-full text-xs md:text-sm border-collapse";
const TH = "bg-muted/50 text-foreground font-bold px-3 py-2 text-left whitespace-nowrap";
const TD = "px-3 py-2 border-t border-border text-muted-foreground whitespace-nowrap";
const STRONG = "text-foreground font-bold";

/**
 * 상대 수가 승률을 바꾼다 — 전부 `scripts/verify-quiz-equities.mjs`로 직접 검산한 값.
 * 프리플랍은 몬테카를로라 실행마다 ±0.2%p 정도 흔들린다(50만 회 기준).
 */
const EQUITY_ROWS: [string, string, string][] = [
  ["AA (포켓 에이스)", "85.2%", "49.2%"],
  ["AKs (에이스킹 수티드)", "67.1%", "31.1%"],
  ["AKo (에이스킹 오프수트)", "65.4%", "27.8%"],
  ["72o (가장 약한 핸드)", "34.6%", "8.6%"],
];

/** 팟오즈 필요 승률 — 콜액 ÷ 콜 후 팟 */
const POT_ODDS_ROWS: [string, string, string][] = [
  ["하프팟 (50)", "50 ÷ 200", "25.0%"],
  ["3/4팟 (75)", "75 ÷ 250", "30.0%"],
  ["풀팟 (100)", "100 ÷ 300", "33.3%"],
  ["2배팟 (200)", "200 ÷ 500", "40.0%"],
];

export default function QuizContent() {
  return (
    <section className="mt-10 mb-4 max-w-none">
      <h2 className={H2}>이 시뮬레이터는 무엇을 계산하나요?</h2>
      <p className={P}>
        <span className={STRONG}>내 두 장과 지금까지 열린 보드를 기준으로, 남은 카드가 어떻게 나오든 내가 이기는 비율</span>
        을 계산합니다. 플랍·턴·리버에서는 남은 보드 조합을 전부 열거해 정확한 값을 내고, 경우의 수가 너무 많은 프리플랍은
        수만 번 무작위 시뮬레이션으로 근사합니다. 상대 패는 가려둔 채로 <span className={STRONG}>지금까지의 액션에서 추정한
        레인지</span>를 상대로 계산하기 때문에, 실전에서 실제로 쓸 수 있는 숫자가 나옵니다.
      </p>

      <h2 className={H2}>AA를 들면 승률이 몇 퍼센트인가요?</h2>
      <p className={P}>
        <span className={STRONG}>상대가 한 명이면 85.2%, 다섯 명이면 49.3%입니다.</span> 같은 AA인데 절반 아래로 떨어집니다.
        프리플랍 강함은 핸드 하나로 정해지는 게 아니라 <span className={STRONG}>끝까지 보는 사람이 몇 명인가</span>로 정해지고,
        그래서 프리플랍 레이즈로 인원을 줄이는 일이 그 자체로 승률을 올리는 행동입니다.
      </p>

      <div className={TABLE_WRAP}>
        <table className={TABLE}>
          <thead>
            <tr>
              <th className={TH}>프리플랍 핸드</th>
              <th className={TH}>상대 1명</th>
              <th className={TH}>상대 5명 (6인 테이블)</th>
            </tr>
          </thead>
          <tbody>
            {EQUITY_ROWS.map(([hand, one, five]) => (
              <tr key={hand}>
                <td className={`${TD} text-foreground font-semibold`}>{hand}</td>
                <td className={TD}>{one}</td>
                <td className={TD}>{five}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-muted-foreground/80 mb-3">
        위 표의 값은 시뮬레이터가 쓰는 것과 같은 평가기로 <span className="text-foreground">50만 회씩 직접 돌려 검산</span>한
        결과입니다. 프리플랍은 시뮬레이션이라 실행마다 ±0.2%p 정도 흔들립니다. 알려진 기준값(AA vs KK 82.6%, AKs vs QQ
        46.2%)과도 대조해 일치를 확인했습니다.
      </p>

      <h2 className={H2}>팟오즈로 필요한 승률은 얼마인가요?</h2>
      <p className={P}>
        <span className={STRONG}>콜에 넣는 금액을 콜한 뒤의 전체 팟으로 나눈 값</span>이 손익분기 승률입니다. 팟 100에 상대가
        하프팟(50)을 베팅하면 필요한 승률은 25%이고, 풀팟(100)이면 33.3%입니다. 이 시뮬레이터는 플랍부터 매 스트리트에
        <span className={STRONG}> 내 승률과 이 필요 승률을 나란히</span> 보여줍니다. 필요 승률보다 내 승률이 낮은 순간이
        바로 폴드해야 했던 자리입니다.
      </p>

      <div className={TABLE_WRAP}>
        <table className={TABLE}>
          <thead>
            <tr>
              <th className={TH}>상대 베팅 (팟 100 기준)</th>
              <th className={TH}>계산</th>
              <th className={TH}>필요 승률</th>
            </tr>
          </thead>
          <tbody>
            {POT_ODDS_ROWS.map(([bet, calc, need]) => (
              <tr key={bet}>
                <td className={`${TD} text-foreground font-semibold`}>{bet}</td>
                <td className={TD}>{calc}</td>
                <td className={`${TD} text-foreground font-bold`}>{need}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={P}>
        베팅이 커질수록 필요한 승률이 올라갑니다. 상대가 크게 베팅했을 때 “여기까지 왔으니 봐야지”가 위험한 이유가 이것이고,
        같은 드로우라도 상대 베팅 사이즈에 따라 콜이 정답이 되기도 오답이 되기도 합니다.
      </p>

      <h2 className={H2}>왜 상대 패를 가리고, 폴드 버튼도 없나요?</h2>
      <p className={P}>
        <span className={STRONG}>상대 패를 보고 아는 승률은 실전에서 쓸 수 없기 때문입니다.</span> 실전과 같은 정보 상태에서
        판단해야 그 승률에 의미가 생깁니다. 상대 패는 핸드가 끝난 뒤 복기 화면에서 열립니다.
      </p>
      <p className={P}>
        폴드 버튼이 없는 이유는 다릅니다. <span className={STRONG}>폴드하면 그 판이 거기서 끝나 복기를 할 수 없습니다.</span>{" "}
        이 도구가 가르치는 건 이기는 법이 아니라 “어느 스트리트에서 끊었어야 했는가”이고, 그건 끝까지 가본 뒤에만 보입니다.
        그래서 리버까지 진행하고, 마지막에 스트리트별로 되짚어 줍니다.
      </p>

      <h2 className={H2}>자주 묻는 질문</h2>
      <dl className="mb-2">
        {WIN_RATE_QUIZ_FAQ.map((f) => (
          <div key={f.q} className="border-t border-border py-3">
            <dt className="text-sm font-bold text-foreground mb-1">Q. {f.q}</dt>
            <dd className="text-sm text-muted-foreground leading-relaxed">A. {f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
