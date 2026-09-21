# 브리프 — queue 회차 Q12-b · MA-147 ① EN-먼저 rules 묶음 (2/2 · 보편 단정)

> 회차 = **Q12-b** · 원문 = `~/Downloads/홀덤검수/mailbox/out-검수장.md` **MA-147 ① ⓓ ⓖ**
> 원장 = `홀덤검수/ledger/en/{holdem-game-order,holdem-betting-actions,holdem-blind-meaning}.md`
> 모델 = **전 구간 Opus**(§7-F 「회차 모양」 — 정정 문면이 전부 같은 글 안에 있어 창작이 아니다)
> 1차 출처는 **본체 덤프 축어**(`docs/sources/`)로 §2에 실어 왔다 — B 구간이 룰북을 다시 열지 않는다(프로토콜 §3-⑥).

> 🔴🔴 **마감 후 정정 (2026-09-21 C 구간) — 아래 §1의 «없다» 세 곳이 틀렸다. 이 브리프를 근거로 인용하기 전에 읽어라.**
> ① **§1 #7 「ar·de·zh-hant는 그 괄호가 없다」 → de·zh-hant에는 있었다**(de L45 `Die eine Ausnahme` **대문자** · zh-hant L41 `唯一的例外是死按鈕` **이형 표기**). ar만 정말 없다.
> ② **§1 #11 「ar에는 이 FAQ가 없다」 → 있었다**(ar L183 `ويمكنك بدلاً من ذلك الانتظار…` — **어순이 달랐을 뿐**).
> ③ **§1 #2 캡션 열거가 25 중 15만 덮었다** → 판정 밖이던 10개 중 **bn이 영어 축어 `aces over kings`를 그대로** 갖고 있었다.
> 🪶 셋 다 **자리가 없던 게 아니라 내 grep 패턴이 표기를 못 맞춘 것**이다. **로케일 스윕은 «한 낱말 패턴»이 아니라 «자리별 25행 표»로 하라**(진행 파일 §3 「Q12-b」 10항).
> 🔴 **§3 #4·#6의 처방 문면도 교체됐다** — 「every position **without a live post of its own**」(원장 #68 제안)은 **평시 SB와 스트래들 팟의 BB까지 면제**한다. 정본은 **정관사 판** 「whose own post isn't already the live bet」다(진행 §3 「Q12-b」 1항).

## §0. 범위 — Q12-a가 «조문»으로 잘라 남긴 쪽

| | 묶음 | 편 | 조문 계열 |
|---|---|---|---|
| Q12-a(끝남 09-21) | ⓐ ⓑ ⓒ ⓔ ⓕ | all-in · showdown | TDA 16/17/18 · B 149 · A 92/96/108/109 |
| **Q12-b**(이 회차) | **ⓓ ⓖ** | `holdem-game-order` · `holdem-betting-actions` · `holdem-blind-meaning` | **B 155·157·158·159·160·163·164·165 · A 36·84·85·86·87·88.d.1 · B 108·109 · A 용어집 ALL-IN** |

🔴 **Q12-a의 TDA/149 계열과 겹치는 자리 0**(실측: 세 편의 149 인용 0건 · TDA 16/17/18 인용 0건).

## §0-B. 🔴 전제 실측 — 11자리 전건 «아직 열려 있다»

MA-147은 **원장(마크다운) 줄번호**를 쓴다. `.ts` 줄번호는 다르다 — **아래 표가 정본**이다(2026-09-21 grep).

| # | 원장 | 파일 | **.ts** | 현행 축어 | 상태 |
|---|---|---|---:|---|---|
| 1 | game-order **#59** | game-order | **318** | 「your draw needs to **complete** at least about 33% of the time」 | 열림 |
| 2 | game-order **#24** | game-order | **139** | 캡션 「the higher pair, **aces over kings**, takes the pot」 | 열림 |
| 3 | game-order **#52** | game-order | **269** | 표 「All-in / Push all your chips in / Any street — in turn, **as a bet or raise**」 | 열림 |
| 4 | game-order **#53** | game-order | **273** | 「The big blind is a live bet, so **everyone else** must call, raise, or fold.」 | 열림 |
| 5 | game-order **#65** | game-order | **356** | 「(Heads-up is the **lone exception** — see the next question.)」 | 열림 |
| 6 | betting **#68** | betting-actions | **221** | 「**Every other position** preflop must call, raise, or fold.」 | 열림 |
| 7 | blind **#10** | blind-meaning | **42** | 「(**The one exception** is a dead button …)」 | 열림 |
| 8 | blind **#25** | blind-meaning | **80** | 「==**everyone** pays both blinds once per orbit==」 | 열림 |
| 9 | blind **#26** | blind-meaning | **80** | 「**Nobody gets to skip** their turn by sitting out — … you **either** post … **or** wait …」 | 열림 |
| 10 | blind **#62** | blind-meaning | **174** | 「but posted blinds are **never refunded**.」 | 열림 |
| 11 | blind **#66** | blind-meaning | **182** | FAQ 「**Alternatively**, you can wait until the big blind naturally reaches your seat.」 | 열림 |

🔴 **#9와 #11은 같은 폐쇄(«세 갈래인데 두 갈래»)의 두 자리다** — 원장이 행을 갈라 둔 이유가 「본문만 고치면 FAQ가 남는다」(LESSONS §17)다. **둘 다 고친다.**
🔴 **#8과 #9는 같은 줄(L80)에 있다** — 한 번의 Edit로 두 결함을 처리한다.

## §0-C. 🔴 사본 실측 — 게이트도 원장도 안 보는 자리 셋

1. **zh `holdem-game-order`는 한 파일 안에서 갈린다**: L274 본문은 이미 「全押（all in）是用全部筹码去做**下注、跟注或加注**」(콜 포함 = 옳다)인데 **L290 표는 「作为下注或加注」**(콜 없음). #3의 처방이 zh에서는 «표를 본문에 맞추는 것»이다.
2. **KO(`lib/posts.ts`)에 #1·#10 사본이 있다**(queue 레인 담당 파일 · §7-F):
   - `game-order` **L2237**: 「**팟 오즈** — 내가 **이길 확률** 대비 베팅 비율 — 을 계산해야 합니다. … 내 드로우 **완성 확률**이 최소 33%는 되어야 콜이 가치 있습니다.」 → **한 문장 안에서 «이길 확률»과 «완성 확률»이 갈린다.** #1의 KO 사본.
   - `blind-meaning` **L1827**: 「다만 이미 낸 블라인드는 **돌려받지 못해요**.」 → #10의 KO 사본.
3. **de `blind-meaning`에는 #8·#9의 «세 번째 사본»이 있다** — L181 FAQ(de 고유 문항) 「also trifft es jeden **gleich oft**; **drücken kann sich niemand**」. L83만 고치면 de는 자기 FAQ와 모순된다([[completion-count-the-copies-first]] 파일 안 사본 · Q12-a 2차 교열이 ar·zh에서 당한 것과 같은 유형).

## §1. 로케일 범위 — 결재 40 2등급을 자리마다 적용 (전건 grep 실측 2026-09-21)

`settled-decisions` 결재 40: ① **§13급(승자 뒤집힘·규칙·수치)만 꼬리 17까지** ② **문안·구조는 핵심 9까지**.

| # | 등급 | 로케일 | 실측 근거 |
|---|---|---|---|
| **1 (ⓓ)** | 🔴 **§13급** — 팟오즈 **문턱의 의미**가 뒤집힌다(완성률 ≠ 승률). 읽은 대로 하면 «완성해도 지는 드로»에 콜한다 = **D유형**. 비용은 한 낱말 | **25 전부 + KO** | 25편 전부 같은 문장을 갖고 **전부 «완성/성사»로 틀렸다**(ar 「تكتمل」 · ja 「完成」 · zh 「完成率」 · ru 「собираться」 · th 「เข้า」 외 20). 값(33%)은 25편 전부 맞다 |
| **2 (ⓖ 캡션)** | 문안 — 단 **영어 관용구가 족보를 바꾸는 자리** | **en + fil**(확정) · **de·pl·ro = 렌즈 판정 후** | 관용구가 살아 있는 판 = en 「aces over kings」 · **fil 「aces over kings」(영어 축어 그대로)** · de 「Asse über Könige」 · pl 「asy nad królami」 · ro 「ași peste regi」. **번역이 관용구를 없앤 판 = 손대지 않는다**: es·pt·it 「contra/ases contra reyes」 · ms·sw 「lawan/dhidi ya」 · zh·zh-hant 「A 對壓過 K 對」 · fr 「as contre rois」 · vi 「Át đè Già」 · tr 「As As」 |
| **3 (ⓖ All-in 행)** | 문안 | **8**(en de es id ja pt zh zh-hant) | 이 8편만 「as a bet or raise」 계열을 갖는다. 🟠 **ar·꼬리 16은 대상이 아니다** — 셀이 아직 「في أي وقت / Anytime / 항상」(= `522b57f8` 이전 판)이라 **다른(더 오래된) 결함**이다 → §5 |
| **4·6 (ⓖ 체크 폐쇄)** | 문안 | **9**(en ar de es id ja pt zh zh-hant) | game-order·betting-actions 두 편 모두 9로케일 보유. 🔴 **ar은 09-11 델타 이전 판**(「مع استثناء واحد」 = 예외 하나 · 스트래들 절 없음) → **그 한 문장을 함께 이식**한다(선례 = Q4-a ar blind-meaning · `masterUpdated`는 올리지 않는다) |
| **5 (ⓖ lone exception)** | 문안 | **6**(en ar de id pt zh-hant) | es·ja·zh는 이 FAQ 자체가 없다(현지 FAQ 세트 차이 · 결함 아님) |
| **7 (ⓖ dead button)** | 문안 | **6**(en es id ja pt zh) | ar·de·zh-hant는 그 괄호가 **없다**(EN 단독 추가분 · 원장 ※ 「zh-hant #10은 이 괄호가 없는 문장을 OK로 뒀다」) → 대상 없음 |
| **8·9 (ⓖ orbit·skip)** | 문안 | **9 + de FAQ 1 + KO 직답 1(기록)** | 9로케일 전부 보유(de는 L83 본문 + **L181 FAQ 두 자리**). KO L1597 직답 「모두가 똑같이 번갈아 냅니다」는 **기록만**(§5) |
| **10 (ⓖ never refunded)** | 문안 | **9 + KO** | 9로케일 전부 보유(ar L175 · zh-hant L205 포함) |
| **11 (ⓖ FAQ 세 번째 경로)** | 문안 | **8**(en de es id ja pt zh zh-hant) | ar에는 이 FAQ가 없다 |

## §2. 1차 출처 축어 (본체 덤프 · 재열람 불요)

| 키 | 출처·줄 | 축어 |
|---|---|---|
| **B 155** | `wsop-2026-live-action-rules.txt` L758–764 | 「Each round every participant must get an opportunity for the button, and meet the total amount of the blind obligations **unless all-in.** … **Dead button** — The big blind is posted by the participant due for it, and the small blind and button are positioned accordingly, **even if this means the small blind or the button is placed in front of an empty seat**」 |
| **B 157** | L771 | 「In heads-up play with two blinds, **the small blind is on the button.**」 |
| **B 158** | L772–776 | 「A new participant may be dealt in between the big blind and the button, if the new participant opts to **"buy the button"**. Buying the button means **posting a big blind and a dead small blind.**」 |
| **B 159** | L778 | 「When you post the big blind, **it serves as your opening bet.** When it is your next turn to act, you have the option to raise.」 |
| **B 160** | L780–784 | 「A participant who misses any or all blinds can resume play by **either posting all the blinds missed or waiting for the big blind.** If you choose to post the total amount of the blinds, **only the big blind is live.** … When it is your turn to act, **you have the option to raise.** A participant who has missed a blind **also has the option of returning to the game as the under-the-gun live straddle.**」 |
| **B 163** | L790–794 | 「a participant may change seats and **move past no more than two active participants without posting** the amount of the big blind to receive a hand.」 |
| **B 164** | L796–797 | 「A participant who "deals off" by playing the button and then immediately getting up to change seats **can allow the blinds to pass the new seat one time and re-enter the game behind the button without having to post a blind.**」 |
| **B 165** | L799–801 | 「A live straddle bet is allowed in all blind games. The player posting the straddle will have **last action in the opening round of betting** and retains the option to raise. … **Action will always start to the immediate left of the straddle.**」 |
| **B 108·109** | L490–503 | 108조가 미스딜 9사유를 열거 / 109 「**Once there is substantial action, a misdeal cannot be called.** The deal will be played, and **no money will be returned** to any participant whose hand is fouled.」 → **대우: 서브스탠셜 액션 «이전»의 미스딜에서는 돌아간다** |
| **A 36** | `wsop-2026-tournament-rules.txt` L436–437 | 「If a registered Participant is **not present** at the start of a WSOP Event, **all forced antes and blind bets will be removed from an absent Participant's stack accordingly.**」 → 토너먼트는 «자리를 비워도 스택에서 자동 차감» = «post or wait»는 **캐시 전용** |
| **A 84** | L1016–1019 | 「folding in turn when there's been no bet to you … **are both binding folds** and may be subject to penalty」 |
| **A 85** | L1021–1024 | 「**Tournament play will use a dead button.** Dead Button is defined as a button that cannot be advanced due to elimination of a Participant or the seating of a new Participant between the small blind and the button.」 |
| **A 86** | L1026–1028 | 「A Participant who **intentionally** dodges his or her blind(s) when moving from an existing seat must forfeit both blinds …」 → 「intentionally」 한정이 **비의도적 건너뜀의 존재를 전제** |
| **A 87** | L1030–1032 | 「Button in Heads-Up Play: **In heads-up play, the small blind is on the button** and acts first pre-flop and last on all other betting rounds.」 |
| **A 88.b** | L1049–1052 | 「If a misdeal is declared, the re-deal is an **exact re-play: the button does not move**, no new Participants are seated, and limits stay the same.」 |
| **A 88.d.1** | L1077–1080 | 「If a card with a different color back appears during a hand, **all action is void and all chips in the pot are returned to the respective bettors.**」 |
| **A 용어집 ALL-IN** | L1904–1911 | 「A Participant **can only win that portion of the pot to which he/she has contributed plus other Participants who have called.** An All-In for some amount greater that a previous bet but for less than a full raise is not to be interpreted as a raise. **Should greater wagers be made by other Participants in the hand; side pots will be established.**」 → 조문의 전제가 **«상대 벳보다 적은 스택으로 올인해 콜하는» 국면**이다 |

🔴 **B 160은 «세 갈래»다**(post / wait / **UTG 라이브 스트래들**). #9·#11의 두 갈래 폐쇄가 여기서 깨진다.
🔴 **A 36과 B 160은 국면이 다르다** — 토너먼트는 자동 차감, 캐시는 post/wait/straddle. **#9에는 「in a cash game」 한정을 함께 붙인다.**

## §3. 자리별 정정 — EN 문면 (11자리)

### `holdem-game-order` (5)

| # | .ts | → 정정 문면 |
|---|---:|---|
| 1 | 318 | 「… and you must call 50,000, you need to **win** at least about 33% of the time for the call to be worth it — **win, not merely complete the draw.**」 🔴 같은 글 L362가 이미 「If your **chance of winning** is better than those odds」 — 잣대를 그쪽에 맞춘다 |
| 2 | 139 | 캡션 「… here the higher pair, **aces beating kings**, takes the pot」 (`alt`는 이미 「pocket aces A♥ A♦ beat pocket kings K♥ K♣」라 손대지 않는다) |
| 3 | 269 | 표 「Any street — in turn, **as a bet, a call, or a raise**」 |
| 4 | 273 | 「The big blind is a live bet, so **every position without a live post of its own** must call, raise, or fold.」 🔴 **바로 앞 절이 이미 옳은 기준을 쓴다**(「unless your own post is already the live bet」) — 그 기준을 같은 문장에 맞추는 것뿐이다 |
| 5 | 356 | 「(**Heads-up flips this** — see the next question.)」 🔴 같은 글 L133 「the usual rule ==r:flips==」 축어 재사용 |

### `holdem-betting-actions` (1)

| # | .ts | → 정정 문면 |
|---|---:|---|
| 6 | 221 | 「**Every position without a live post of its own** must call, raise, or fold preflop.」 |

### `holdem-blind-meaning` (5)

| # | .ts | → 정정 문면 |
|---|---:|---|
| 7 | 42 | 「(**Two exceptions:** a dead button, which can leave the small blind unposted for a hand, and heads-up play, where the button itself posts the small blind — see below.)」 (뒤의 헤즈업 절 L126·L176이 그 예외를 이미 두 번 서술한다 = 내부 정합 회복) |
| 8 | 80 | 「… so the blind seats rotate with it and, **in normal rotation**, ==everyone pays both blinds once per orbit==.」 🔴 **`==…==` 안의 문자열은 그대로 둔다**(로케일 패리티·게이트 앵커) |
| 9 | 80 | 「**Step away in a cash game** and you post the blinds you missed when you return, wait for the big blind to reach you again, **or re-enter as the under-the-gun straddle.**」 🔴 **「Nobody gets to skip their turn by sitting out —」를 통째로 지운다**(바로 앞 절이 그 뜻을 이미 담는다 · 원장 처방 축어) |
| 10 | 174 | 「… but **you never get a posted blind back by folding.**」 |
| 11 | 182 | 「Alternatively, you can wait until the big blind naturally reaches your seat — **or, in rooms that allow it, come back in as the under-the-gun straddle.**」 🔴 #9와 **다른 문면**으로 쓴다(같은 낱말을 두 번 쓰면 교열 렌즈의 축어 중복이 된다) |

### KO (`lib/posts.ts` · 2자리 · §0-C)

| 자리 | → 정정 |
|---|---|
| L2237 | 「내 드로우 **완성 확률**이 최소 33%」 → 「내 드로우가 **이길 확률**이 최소 33%」(같은 문장 앞부분 「내가 이길 확률 대비」와 잣대 통일) |
| L1827 | 「이미 낸 블라인드는 돌려받지 못해요」 → 「이미 낸 블라인드는 **폴드로는** 돌려받지 못해요」 |

🔴 **KO `updated`는 올린다**(내용 변경 · §1-C). 🔴 **`lib/posts.ts`는 기존 `audit:hard` 🔴 2 부채 파일이다**(desc 114자 · emoji 공백) — **이 회차가 만든 것이 아니므로 그 둘은 손대지 않는다**(진행 §2 「KO 정정 회차 몫」).

## §4. §13 손검산 대상

- **game-order L139 캡션**(#2) — 보드 `10♣ 7♥ J♦ 4♠ 9♣` · A측 `A♥ A♦` · K측 `K♥ K♣`
  A측 7장 → 베스트5 = **A♥ A♦ J♦ 10♣ 9♣**(원페어 A) / K측 → **K♥ K♣ J♦ 10♣ 9♣**(원페어 K)
  스트레이트 없음(7·9·10·J — **8이 없다**) · 플러시 없음(하트는 보드 7♥ + A♥ = 2장)
  → **원페어 A > 원페어 K.** 캡션의 「the higher pair」는 참이고 **「aces over kings」라는 명명만 거짓**이다(투페어/풀하우스 관용구).
- **game-order L318**(#1) — 팟오즈 산수: 50,000 ÷ (100,000 + 50,000) = **33.3%** ✅ 값 무변경. 바뀌는 것은 «무엇의 33%인가»뿐이다.
  - de는 팟 프레이밍이 다르다(「50.000 in einen Pot von 50.000」 = 50k + 50k = 100k, 콜 50k) — **같은 33.3%다. 값을 통일하려 들지 마라.**
- **카드·족보 예시는 그 밖에 없다** — 세 편의 나머지 변경은 조문·한정어다.
- 표·비율 변경 0(seoTitle·desc·tags 무변경 → `check:seo-sync` 축이 안 열린다).

## §5. 이 회차에서 하지 말 것

- 🔴 **`ar`·`fr`의 `masterUpdated`를 올리지 마라**(진행 §3 「스탬프 정직성」 · Q4-a가 찍었다가 되돌린 자리). `updated`만 올린다.
- 🔴 **꼬리 5로케일 `betting-actions`의 `masterUpdated`(2026-07-11)를 올리지 마라**(진행 §3 · 「전파 누락」으로 재판정 금지).
- 🔴 **「aces over kings」 계열이 «없는» 로케일의 캡션을 영어에 맞추지 마라** — es 「ases contra reyes」 · zh-hant 「A 對壓過 K 對」 등은 **이미 옳다.**
- 🔴 **ar·꼬리 16의 All-in 표 셀(「항상/Anytime」)을 이 회차에서 열지 마라** — `522b57f8` 델타 전체를 옮기는 별건이다(§5 등재).
- 🔴 **`==…==` 하이라이트 안의 문자열을 바꾸지 마라**(#8) — 로케일 패리티 앵커다.
- 🔴 **`holdem-all-in-rules`·`holdem-showdown-rules`를 열지 마라** — Q12-a가 09-21에 닫았다(문면을 되돌리는 사고 방지).
- 🔴 `slug` · 이미지 경로 · readnext · desc 160자 · 백틱(§12-A) · 직답 블록 길이 규격(ja 90~170자 · 중문 60~130자).
- 🔴 **`lib/posts-ja/`·`posts-zh/`·`posts-zh-hant/`는 상대 레인 워크트리 미커밋 여부를 먼저 확인**한다(§7-F).

## §6. 키워드 실측 — **해당 없음**

조문·한정어 정정 회차다. `seoTitle`·`desc`·`tags`·H2 골격 **무변경** → 키워드 뱅크 갱신 대상이 아니다(선례 = Q12-a 자산 축적 ①).
