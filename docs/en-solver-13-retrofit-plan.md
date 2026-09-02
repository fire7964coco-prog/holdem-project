# EN 솔버 13편 소급 — 전수 조사 결과 (2026-09-02)

> KO 13편 정정(`6cbfa480`)을 EN에 소급하기 위한 **조사 산출물**이다. 다음 세션은
> **이 조사를 다시 하지 마라** — 명제 15개 + 추가 발견 3개를 EN 원문과 전건 대조한 결과다.
>
> 🔴 **다만 이 문서의 «제안 수정문»을 그대로 붙여 넣지 마라.** 원문을 열어 문맥을 보고
> 판정한 뒤 쓴다. EN은 KO의 직역이 아니라 재저작본이라 **주변 문장과의 정합**이 매번 다르다.
>
> 착수 순서 = `session-handoff.md` 최상단. KO diff = `git show 6cbfa480`.

## 집계

| 판정 | 건수 |
|---|---|
| 🔴 고칠 것 | **18** |
| 🟡 약함(판단 대상) | 2 |
| ✅ 이미 정확 — **다시 검사하지 마라** | 8 |
| ➖ EN에 대상 문장 없음 | 1 |

**파일별 🔴**: `3bet-pot-cbet` 3 · `3bet-pot-bet-sizing` 3 · `broadway-board-strategy` 2 ·
`a-high-board-cbet` 2 · `blind-battle-cbet` 2 · `paired-board-strategy` 2 · `k-high-board-cbet` 1 ·
`donk-bet-strategy` 1 · `monotone-board-strategy` 1 · `low-board-check-raise` 1 · `3bet-pot-low-board` 1.
🟢 **`blind-battle-connected-board`(⑫)와 `ace-paired-board-strategy`(⑬)는 🔴 0건 — 열지 마라.**

---

## 🔴 A. §13 족보·콤보 (최우선 — 포커 아는 독자가 표만 대조해도 잡힌다)

### A-1. ⑤ `monotone-board-strategy.ts:155` — 존재할 수 없는 족보
원문: `Holding J♠ or T♠ blocks the **jack-high and ten-high flushes** — not the second-best flush, which is king-high, since the Q♠ is on the board.` 뒤이어 `And those are precisely the hands that would have *called* your bet.`

보드 `Q♠9♠2♠`에서 Q♠는 항상 플레이한다 → **모든 완성 플러시가 최소 Q하이**다.
「jack-high flush」는 이 보드에 존재할 수 없다. J♠·T♠가 막는 것은 그 플러시의 **키커 자리**다.
🔴 **뒷 문장(`And those are precisely the hands…`)까지 같이 고쳐라** — KO에서 앞만 고쳤다가
「존재할 수 없다」고 써 놓고 다음 문장이 그걸 지시하는 상태를 만들었고, 2차 교열이 잡았다.

### A-2. ⑥ `paired-board-strategy.ts:298` — 콤보 수
원문: `Only four combos beat trips outright — but that holds only when your kicker is an ace.`

보드 `6♣6♦3♥`. 네 콤보 = 33 풀하우스 3 + 66 포카드 1(`6♠6♥`뿐).
**키커가 A면 내가 6을 한 장 들고 있으므로 `6♠6♥`가 성립 불가 → 33 3콤보뿐.**
⚠ 헤더 60행의 정정 기록은 **직전 회차의 «키커» 수정**이고 이번 콤보 수정은 미반영이다.
⚠ 같은 파일 `:253`의 `Those four combos`는 **보드 전체 콤보 수** 서술이라 참이다 — 같이 고치지 마라.

### A-3. ⑦ `low-board-check-raise.ts` — 언페어 보드의 `trips` (산문 7곳)
🔴 **EN이 KO보다 결함이 크다.** 형제 ⑥ `paired-board-strategy.ts:145`가 정의를 세워 놨기 때문:
`A set is a pocket pair that matches one board card; trips is one card in your hand matching a pair on the board.`

그런데 ⑦은 언페어 `6♠5♥2♦`의 66·55·22를 산문에서 `trips`로 부른다 — `:220` `:296` `:307`
`:313` `:349` `:357`. 같은 글 `:322`는 `sets`를 써서 **자기모순**이다.

✅ **각주 정본이 EN에 이미 있다** — `3bet-pot-low-board.ts:184`:
`🪶 The table and the solver screen both call this row "Set/Trips." On 8-5-2 only a **set** is possible, since the board holds no pair (trips means holding one card of a paired board). The app label is quoted as it appears — read it as *set*.`
(⑧ `3bet-pot-cbet.ts:176` · ⑨ `3bet-pot-bet-sizing.ts:291`도 같은 각주 보유)

처방 = `:220`에 그 각주를 이식 + 산문 6곳 `trips` → `set(s)`.
🔴 **표 라벨은 손대지 마라**(`:205` `| Trips | 1.8% | 1.8% |`은 솔버 축어).
⚠ `:278`의 `Three of a kind`는 중립 표기라 문제없다.
⚠ ⑫ `blind-battle-connected-board.ts:219`의 `can turn into two pair or trips by the river`는
**보드 페어링으로 트립스가 되는 자리라 정확하다** — 일괄 치환에 휩쓸리지 않게 하라.

### A-4. ⑪ `blind-battle-cbet.ts:276` — 틀린 인과
원문: `note that **A-A is *below* two pair here** (an overpair pinned under the king; the class table reads set 1.7% · two pair 2.4% · overpair 1.1%).`

AA가 투 페어 아래인 것은 **족보상 원페어라서**다. 보드의 K에 「눌린」 것이 아니다(오히려 K보다 높다).
🔴 부수: 괄호의 1.7/2.4/1.1은 **레인지 비중**이지 강도 서열이 아닌데 서열 근거처럼 쓰인다.

---

## 🔴 B. 자기모순 (같은 글·형제 글이 서로 다른 말을 한다)

### B-1. ② `k-high-board-cbet.ts:214` — FAQ ↔ 본문
FAQ: `A. Because **every hand at the top of this board sits with the other player.**`
본문 `:147`: `**Two pair is the second-best category on this board**, ahead of an overpair, and **the big blind holds twice as much of it**`
표 `:137-138`: BB에게 셋 1.3% · 투 페어 0.8%가 있다. → 「전부 상대 쪽」은 거짓.

### B-2. ⑨ `3bet-pot-bet-sizing.ts:321` ↔ ⑩ — AK 액션 정면 충돌
⑨: `**On a board where nothing attaches to it, the same A-K checks**`
⑩ `3bet-pot-low-board.ts:229-231` FAQ: `Q. Should you c-bet A-K on a low board in a three-bet pot?` → `A. **Yes.** On 8-5-2 A-K has neither a pair nor a draw, yet the solver puts the whole range into the large size 97.8% of the time.`
→ ⑨의 일반화를 철회하고 ⑩을 반례로 명시. 개별 핸드 빈도는 두 솔브 모두에 없다.

### B-3. ⑪ `blind-battle-cbet.ts:189` — pull이 다음 단락에 반박당한다
pull: `A check is not something you do because you lack position. It is something you do because your range is weak on this board.`
바로 다음 `:191`: `What splits them is **the relationship between range and board** — ⚠ and you cannot reduce that to "range" alone.`

### B-4. ⑧ `3bet-pot-cbet.ts:114` — 통제 비교가 아니다
원문: `**What changed is not the board.** It is the preflop action`
보드도 ①의 `A♥7♦2♣` → `A♦K♠2♥`로 함께 바뀌었다.

---

## 🔴 C. MDF 단정 (4편 — 이 예제들은 플랍 첫 액션까지만 풀려 있다)

대응 노드가 없으므로 **실제 최적 방어 빈도를 이 자료로 확인할 수 없다.** 「MDF보다 낮다/많이 접는다」는
계산이 아니라 추론이다. MDF는 «에퀴티 0인 순수 블러프»를 가정한 기준점으로만 쓴다.

| 편 | 위치 | 문제 문구 |
|---|---|---|
| ⑥ | `paired-board-strategy.ts:285` | `**the solver's actual solution overfolds relative to MDF on the flop.** Fold frequency only converges toward MDF from the turn onward.` |
| ⑧ | `3bet-pot-cbet.ts:233` | `**both theory and practice point toward folding more, not less.**` — 🔴 덤: **「0% no-made-hand」가 곧 「0% 블러프」가 아니다**(약한 언더 페어가 프로텍션·블러프 역할) |
| ⑨ | `3bet-pot-bet-sizing.ts:324` | `**so the true optimal defense sits below it.**` |
| ⑩ | `3bet-pot-low-board.ts:214` | `**so the true optimal defense sits below it.**` — 🔴 **같은 불릿 앞부분이 이미 `no fold frequency comes out of this solve`라고 적어 놓고** 뒤에서 단정한다 |

⚠ **⑦ `low-board-check-raise.ts:266`의 `The solver goes past it`은 이 목록에 넣지 마라** —
그쪽은 **자체 재솔브에서 측정된 폴드 19.5%(방어 80.5%)**에 근거하므로 단정이 아니다.

---

## 🔴 D. 계산에 없는 노드를 단정

### D-1. ⑧ `3bet-pot-cbet.ts:259` — 셔브/폴드 범위
원문: `**decide to jam or fold right there — sets go in, low underpairs and weak-kicker top pairs go out.**`
이 절에는 노드 부재 고지가 없다(`:229`의 고지는 «턴 노드»에 대한 것이고 다른 섹션이다).
→ SPR과 등급에서 끌어낸 **방침**이지 계산 결과가 아님을 명시.

✅ **⑬ `ace-paired-board-strategy.ts:250·259`는 이미 고지가 완비**돼 있다. ⑫는 해당 단정 자체가 없다.

---

## 🔴 E. 단위·근거 표시

### E-1. ④ `donk-bet-strategy.ts:214-219` — QQ 23장의 무늬 조건
원문: `**The remaining hearts that are not already counted — 7 cards.**` → `Together that is **23 of 47 cards, about 49%.**`
🔴 **하트를 한 장도 안 든 QQ 기준**이다. `Q♥`가 섞이면 6장 → **22장 · 약 47%**. 분모 47은 불변.

### E-2. ⑨ `3bet-pot-bet-sizing.ts:309` — EQR을 분모 축소만으로 설명
원문: `**Nothing improved; the denominator shrank.**`
🔴 분모만이 아니다. 원시 지분을 얼마나 넘겼는지로 보면 ⑧ `16.99 − 22.5 × 68.9% = 약 1.49bb`,
이 보드 `15.46 − 22.5 × 58.3% = 약 2.34bb` → **초과분 자체도 늘었다.**
⚠ 뒤의 `Measured as a share of the pot instead, the big blind went **backwards**`는 참이니 남기되,
**접속을 조정하라** — KO에서 「실제로」가 정반대 근거를 이어받는 상태를 만들었다가 교열이 잡았다.

### E-3. ① `a-high-board-cbet.ts:103`(stripe) · `:107`(Quick answer) — 「레인지 전체」 단정
`Result | BB checks 98.2% — the whole range checks` / `When a range takes one action **with everything**`
실제는 체크 98.2% · 벳 1.0% + 0.9% = 1.9% 잔존.
✅ tldr `:75`는 `checks 98.2% of its range`로 **이미 정확**하다. 본문 `:137`은 `In practice you can round it off` 헤지가 있어 🟡.
➖ KO가 고친 FAQ 「레인지 체크가 무슨 뜻인가요」는 **EN에 문항 자체가 없다.**

### E-4. ③ `broadway-board-strategy.ts:198` — 「987이 QJT보다 더 연결」
원문: `[9♥8♥7♣](…) is **more connected than Q-J-T**`. 둘 다 «세 장 연속 + 투톤»이다.

### E-5. ③ `broadway-board-strategy.ts:236` — FAQ 직답에 예/아니오가 없다
`Q. Isn't a wet board the place to semi-bluff lead?` → `A. **Only when your draws outnumber theirs.**`
드로우 수 하나로 환원한다. 완성 핸드 분포·넛 우위·블로커를 함께 봐야 한다.
🔴 스키마 첫 문장 가치 문제도 KO와 동일 — **`No —`로 시작하게 하라.**

---

## 🟡 판단 대상 2건 (고치지 않아도 결함은 아니다)

- **⑤ `monotone-board-strategy.ts:194`** — `another **29.2%** can pass it with one card`.
  KO 원문(「29.2%가 뒤집습니다」)과 달리 EN은 **가능성 서술**이고 `another`가 배타성을 함의하며
  표 `:179`가 `Flush draw (one spade…)`로 라벨링돼 있다 → **단정 오류 없음.**
- **⑤ tldr `:54` · Quick answer `:88` · compare `:126`** — `only gets called by flushes`.
  KO도 **tldr 한 곳만** 완화했고 compare 블록은 유지했다. 통일하려면 tldr만.

---

## ✅ 이미 정확 — **다시 검사하지 마라** (8건)

1. **⑩ 셋/트리플 각주 정본 존재** (`3bet-pot-low-board.ts:184` · ⑧ `:176` · ⑨ `:291`)
2. **⑫ 셋 표기 정확** (`blind-battle-connected-board.ts:215` `**Sets** are the exception`, 표는 `Set/trips` 병기)
3. **④ T6s·65s 정확** — `donk-bet-strategy.ts:145` `**The whole difference is T6s — four combos.**`
   표 `:142`가 65s 4:4 명시. **「모델 산물」 단서도 이미 있다**(`This solver's button range starts at T7s`).
   → KO에만 있던 결함이다.
4. **⑦ 19.8% vs 42.9% 단위 정확** — `low-board-check-raise.ts:321`이 `42.9% of the range`로 명시 라벨링.
5. **⑨의 852 인용값 = 97.8%** — 레포 전체에 `98.1` **0건**. 형제 4편 전부 일치. (98.1%는 KO에만 있던 오류)
6. **⑫·⑬ 노드 부재 고지 완비**
7. **따옴표 빠진 썸네일 링크 0건** — `lib/` 전체. KO의 그 1건이 마지막이었다.
8. **⑦ 「꼭대기가 없다」 자기모순 없음** — EN은 `this board has none`(보드가 안 준다)로 쓰고
   곧바로 `split down the middle` · `both players get there equally often`을 병기해 «독점 아님»을 스스로 밝힌다.

---

## 마무리 절차

1. 🔴 반영 후 **2차 교열 필수** — KO에서 **수정이 새 모순을 26건 만들었다.**
   특히 ① 캐비어트가 다음 문장에 반박당하는지 ② 근거만 지우고 단정이 남았는지
   ③ 같은 경고가 한 글에 3회 이상인지 ④ FAQ 직답에서 예/아니오가 사라졌는지.
2. 🔴 게이트는 `npm run audit:hard -- --locale=en` (`--slug`만 주면 **미검사**다)
3. EN `updated` 갱신 → 빌드 → 배포 → 라이브 표본 확인
