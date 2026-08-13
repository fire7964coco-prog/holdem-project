/**
 * `/en/hand-chart` FAQ — 화면(`<details>` 아코디언)과 서버 `page.tsx`의 FAQPage 스키마가
 * **같은 배열**을 쓴다.
 *
 * ★2026-08-13 분리. 그 전엔 이 배열이 JSX 안에 인라인으로 박혀 있어 서버가 쓸 수 없었고,
 *   그래서 이 페이지는 자기 구조화 데이터가 **0**이었다.
 * 🟢 `<details>`는 열지 않아도 **답변이 DOM에 남는다** — 산출물로 확인했다.
 *   (rules 하위 3편은 `{조건 && …}` 조건부 렌더라 답변이 HTML에 0개였다. 그쪽은 CSS 방식으로 고쳤다.)
 */
export interface FaqItem { q: string; a: string; }

export const HAND_CHART_FAQ: FaqItem[] = [
            {
              q: "Do I have to follow the starting hand chart exactly?",
              a: "The chart is a starting point. At a 6-max table, shift positions one or two spots looser than 9-max. With antes, widen the whole range by 5–8%. At tables full of weak players, playing tighter to maximize value tends to be more profitable.",
            },
            {
              q: "Is 169 hands the exact number?",
              a: "Yes. Ignoring suits, there are exactly 169 hand types: 13 pocket pairs, 78 suited hands, and 78 offsuit hands. In the actual deck the total number of combinations is 1,326.",
            },
            {
              q: "Why isn't the big blind on the chart?",
              a: "The BB has already invested 1 big blind, so it plays a 'defense' (call/re-raise) game rather than open-raising. A BB defense range depends entirely on the opener's position and sizing, so it needs its own chart.",
            },
            {
              q: "Is it okay to open a 42% range on the button?",
              a: "In GTO terms, a button opening range really does reach 40–50%. But if opponents are tight or inexperienced, focusing more on premiums can be more profitable in practice. The chart is a balanced baseline.",
            },
            {
              q: "What do I do if I get 3-bet?",
              a: "Your opening range and your 3-bet-calling range are different. Generally you respond to a 3-bet with premiums like AA-JJ and AKs-AQs, plus some bluffs — suited wheel aces like A5s and A4s that block AA/AK and can make the nut flush. Fold the rest.",
            },
          ];
