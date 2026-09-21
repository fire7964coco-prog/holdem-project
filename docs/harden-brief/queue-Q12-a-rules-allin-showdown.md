# 브리프 — queue 회차 Q12-a · MA-147 ① EN-먼저 rules 묶음 (1/2)

> 회차 = **Q12-a** · 원문 = `~/Downloads/홀덤검수/mailbox/out-검수장.md` **MA-147 ①** · 원장 = `홀덤검수/ledger/en/{holdem-all-in-rules,holdem-showdown-rules}.md`
> 모델 = **전 구간 Opus**(§7-F 「회차 모양」 — 정본 문면이 같은 글 안에 있어 창작이 아니다)
> 1차 출처는 전부 **본체 덤프 축어**(`docs/sources/`)로 이 브리프에 실어 왔다 — B 구간이 룰북을 다시 열지 않는다(프로토콜 §3-⑥).

## §0. 이 회차의 범위 — 왜 여기서 잘랐나

MA-147 ①은 5편(all-in · showdown · game-order · betting-actions · blind-meaning)에 걸쳐 있다. **파일이 아니라 «조문»으로 갈랐다**:

| | 묶음 | 편 | 근거 |
|---|---|---|---|
| **Q12-a**(이 회차) | ⓐ ⓑ ⓒ ⓔ ⓕ = **TDA 16 / TDA 18 / B 149 / A 92·96·108·109 계열** | `holdem-all-in-rules` · `holdem-showdown-rules` | 🔴 **ⓑ(B 149 「In a No Limit poker game」 한정) 7자리가 이 두 편에만 있다**(all-in 3 · showdown 4). 쪼개면 같은 낱말을 두 세션이 각각 번역해 로케일마다 다른 문면이 된다([[parallel-translation-ui-verbatim-dictionary]]). 🔴 **all-in FAQ L255·L259 한 줄에 ⓐ·ⓑ·ⓔ가 겹쳐 있다** — 물리적으로 못 가른다 |
| **Q12-b**(다음) | ⓓ ⓖ = **보편 단정 묶음**(B 155~165 · A 87·88.d.1) | `holdem-game-order` · `holdem-betting-actions` · `holdem-blind-meaning` | 조문 계열이 완전히 다르고 겹치는 자리가 없다 |

## §0-B. 🔴 전제 실측 — 진행 파일이 「닫혔다」고 적은 ⓒ는 **열려 있다**

진행 파일 §1 Q12 행: 「🪶 ⓒ(showdown L41 TDA 16 문면)는 `522b57f8`이 이미 닫았다 — 다시 열지 마라」.
**실측 결과 거짓이다.** `522b57f8`이 고친 TDA 16 자리는 **셋**(`.ts` L43 표 · L85 표 · L182 FAQ)이고,
원장 #12 / MA-147 ⓒ가 가리키는 **L59(본문 불릿)는 손대지 않았다** — 「once a player is all-in, TDA Rule 16 requires…」 그대로다.

```
git show 522b57f8 -- lib/posts-en/holdem-showdown-rules.ts   # 4 hunk: L43 · L85 · L149(A 109) · L182
grep -n "once a player is all-in, ==TDA Rule 16==" lib/posts-en/holdem-showdown-rules.ts   # 59
```

🪶 유형 = [[completion-count-the-copies-first]] **파일 안 사본**. 같은 명제 4곳 중 3곳만 고치고 한 곳을 남긴 것을
«닫았다»로 기록했다. → **ⓒ를 이 회차에 포함한다.** 진행 파일 §1 Q12 행의 그 문장은 C 구간에서 정정한다.

## §1. 로케일 범위 — 결재 40 2등급을 자리마다 적용

`settled-decisions` 결재 40: ① **§13급(승자 뒤집힘·규칙·수치)만 꼬리 17까지** ② **문안·구조는 핵심 9까지**.

| 자리 | 등급 | 로케일 | 실측 근거 |
|---|---|---|---|
| **ⓐ #72 WRONG**(토너먼트 «원래 벳한 사람이 먼저») | **§13급** — 조문(TDA 16)과 **반대**이고, 읽은 대로 하면 테이블에서 페널티 국면에 들어간다 | **25 전부**(en + 핵심 8 + 꼬리 16) | 25편 전부 같은 FAQ 보유. 🔴 **꼬리 16·ar은 EN보다 더 나쁘다** — 국면 한정(「in a tournament」)조차 없이 **무조건 「원래 벳한 사람이 먼저」**로 적혀 있다(ru L259 「тогда первым по-прежнему показывает тот, кто изначально поставил」 외 15) |
| **ⓑ** B 149 「no-limit」 한정 7자리 | 문안(조문 범위 한정) | **8**(en de es id ja pt zh zh-hant) | `grep -c 149` = 이 8편만 4회씩. **ar·꼬리 16은 149 인용이 0건**이라 대상이 없다 |
| **ⓒ ⓔ ⓕ** 나머지 한정어·정밀화 | 문안 | **핵심 9**(en + ar de es id ja pt zh zh-hant) | 결재 40 ② |

🟠 **꼬리 16의 ⓔ·ⓕ 부채는 이 회차가 닫지 않는다** — §2 미결에 적는다(§13급이 아니다).

## §2. 1차 출처 축어 (본체 덤프 · 재열람 불요)

| 키 | 출처·줄 | 축어 |
|---|---|---|
| **TDA 16** | `tda-2024-rules-v1.txt` L138–140 | 「All hands will be tabled without delay **once a player is all-in and all betting action by all other players in the hand is complete.** No player who is either all-in or has called all betting action may muck their hand without tabling.」 |
| **TDA 16 Addendum** | 같은 파일 L788–793 | 「This rule means that **all downcards of all players will be turned up at once** when at least one player is all-in and there is no chance of further betting action by the other player(s). **Do not wait for the showdown to turn the cards up**」 / Ex-2 「Do not turn cards up yet **because B and C both have chips so further betting action is possible**」 |
| **TDA 17** | L143 | 제목 자체가 「**Non** All-In Showdowns and Showdown Order」 → 올인 국면에 **적용되지 않는다**(ⓐ의 핵심) |
| **TDA 18-B** | L156–159 | 「If there was a river bet, any caller has an inalienable right to have the last aggressor's hand tabled on request … **TDs discretion governs all other requests** such as to see the hand of another caller, **or if there was no river bet.**」 |
| **TDA 18 Ex-1** | L828–834 | 「**B may ask to see C's hand because B has tabled his cards.** However, B's request is at TDs discretion」(리버 벳 없음 = 콜되지 않은 패도 재량으로 열람 가능) |
| **TDA 45-A** | L370–377 | 「If facing a bet, unless raise or all-in is declared first, **a multiple-chip bet (including a bet of your last chips) is a call if every chip is needed to make the call**」 / Ex-2 「NLHE 25-50. Post-flop A opens for 1050 and **B puts out his last chips (two 1000's). B calls** unless raise or all-in was first declared.」 |
| **TDA 47-A** | L396–399 | 「an all-in wager (or **cumulative multiple short all-ins**) totaling less than a full bet or raise will not reopen betting for players who have already acted **and are not facing at least a full bet or raise when the action returns to them**」 |
| **TDA 48** | L404–406 | 「There is no cap on the number of raises in no-limit and pot-limit. **In limit play, there is a limit to raises** even when heads-up … the house limit applies.」 |
| **A 92** | `wsop-2026-tournament-rules.txt` L1151–1155 | 「When facing a bet, unless raise is declared first, **a multiple-chip bet is a call if every chip is needed to make the call**; i.e. removal of just one of the smallest chips leaves less than the call amount.」 |
| **A 96.a** | L1203–1211 | 「the last complete raise was 500; therefore, Participants B or C would be allowed to call 1,700 and raise 500 for a **total wager of 2,200**.」 |
| **A 108** | L1325–1326 | 「**If the Participant initiated a bet or raise and hasn't been called, the uncalled bet or raise will be returned to the Participant.**」 |
| **A 109 · 110** | L1351–1355 | 「Cards thrown into the muck may be ruled dead. **However, a hand that is clearly identifiable may be retrieved and ruled live at management's discretion** if doing so is in the best interest of the game.」 / 「**An extra effort will be made to rule a hand retrievable if it was folded because of dealer error or incorrect information** given to/by a Participant.」 |
| **B 143** | `wsop-2026-live-action-rules.txt` L679 | 「To win any part of a pot, a participant must show all of his cards face up on the table **unless that participant has the only remaining live hand.**」 |
| **B 147** | L691–692 | 「Unless a hand has been exposed, a participant may only request to see another participant's hand **if collusion is suspected and then so only in the presence of a floor person.**」 |
| **B 149** | L705–709 | 「If everyone checks on the final betting round, the participant in earliest position is required to show his/her hand first. If there is wagering on the final betting round, the last participant to take aggressive action by a bet or raise is the first to show the hand. … **If there is a side pot, participants involved in the side pot should show their hands before anyone who is all-in for only the main pot.** **In a No Limit poker game** if betting has ended on a round prior to the river, the participant who pushed all-in is responsible for turning his/her hand over first.」 |
| **B 174** | L869 | 「All bets must be at least equal to the minimum bring-in, **unless the participant is going all-in.**」 |
| **B 176** | L877–878 | 「if a participant bets $100 and the next participant goes all-in for $140, a participant wishing to raise must make the total bet **at least $240** unless going all-in.」 |
| **B 210 · 214** | L1174–1176 · L1188–1190 | 「if suggested by a participant and **agreed to by all participants remaining in the pot**」 / 「**If there are three participants involved in the hand** and if the short stack participant (Main Pot) loses the hand, the run twice will apply for both pots.」 |

🔴 **B 149 실측 결과 — 「no-limit」 한정은 «올인자 먼저» 문장에만 걸린다.** 바로 앞 **사이드팟 공개 순서** 문장은
한정 없이 모든 캐시에 적용된다. 따라서 ⓑ 정정은 **두 절을 갈라서** 해야 한다 — 통째로 「in no-limit cash games」를
앞에 붙이면 **사이드팟 절까지 노리밋 한정으로 좁아져 새 오류가 된다.**

## §3. 자리별 정정 — EN (21자리)

### `holdem-all-in-rules` (13)

| # | 원장 | .ts | 현행(축어) | 정정 방향 |
|---|---|---|---|---|
| 1 | #12 ⓔ | L51 | 「Once you're all-in, you are **guaranteed** to see all remaining community cards.」 | 「and called」 한 낱말(B 143 — 전원 폴드면 런아웃 0) |
| 2 | #14 ⓔ | L61 | 「Slide your entire stack … in one clean motion」 | A 92 / TDA 45-A 한정 한 구절(콜 금액에 전 칩이 필요하면 무언 푸시 = 콜) |
| 3 | #80 ⓔ | L65 | 「Always declare "all-in" out loud, **or move your entire stack at once**.」 | 같은 결함 2번째 자리 — «or»를 없애고 선언을 필수로 |
| 4 | #17 ⓔ | L71 | 「**Any** chips bet beyond that form a side pot」 | A 108 언콜드 반환 갈래 추가(같은 글 L233 문면 재사용) |
| 5 | #29 ⓔ | L133 | 「Player C can still raise **normally**」 | 최소 **총액 $24** 명시(B 176 · A 96.a) — §13 자리 |
| 6 | #47 ⓔ | L184 | 「✅ **Always** can raise (**regardless**)」 | TDA 48(리밋 상한) · B 174(칩 부족) 한정 |
| 7 | #56 ⓔ | L213 | 「no second chance to re-raise」 | TDA 47-A 누적 예외 한 구(같은 글 L165 문면) |
| 8 | #66 ⓔ | L247 | 「if **both players** agree」 | B 210 「all participants remaining in the pot」 |
| 9 | #78 ⓔ | L259 | 「(if **both players** agree)」 | 같은 정정 2번째 자리 |
| 10 | **#72 ⓐ** | L255 | 「**in a tournament the original bettor still shows first**」 | 🔴 **WRONG.** TDA 16 = 동시 공개 · TDA 17은 «Non All-In» 전용. 정답이 같은 글 L194·L259에 이미 있다 |
| 11 | #49 ⓑ | L194 | 「In cash games it depends on when the betting ended」 | 「In no-limit cash games」 |
| 12 | #64 ⓑ | L243 | 「unless the betting ended before the river」 | 「unless it is a no-limit game and …」 |
| 13 | #76 ⓑ | L259 | 「standard showdown order applies — unless the betting ended before the river」 | 같은 한정 |

### `holdem-showdown-rules` (8)

| # | 원장 | .ts | 현행(축어) | 정정 방향 |
|---|---|---|---|---|
| 14 | **#12 ⓒ** | L59 | 「once a player is all-in, TDA Rule 16 requires every hand … to be tabled」 | 🔴 **§0-B — 열려 있다.** TDA 16 둘째 요건(「and all betting action … is complete」) 복원. 정답이 같은 글 L174·L182에 있다 |
| 15 | #21 ⓕ | L63 | 「the caller **can demand** your hand anyway」 | 토너 한정(TDA 18) + 캐시 반례(B 147 = 담합 의심 + 플로어) |
| 16 | #58 ⓕ | L149 | 「but **only** a hand that was called and reached showdown」 | TDA 18-B 재량 영역 복원(같은 글 L43 문면) |
| 17 | #55 ⓕ | L145 | 「Hand is dead — **pot gone**」 | A 109·110 회수 재량(딜러 오류 시 적극 권고) |
| 18 | #7 ⓑ | L43 | 표 3행 「Cash: the all-in player turns over first — with a side pot, …」 | 두 절 분리(§2 🔴) |
| 19 | #30 ⓑ | L79 | 「if betting ended before the river, the player who pushed all-in is responsible…」 | 「in a no-limit game,」 |
| 20 | #34 ⓑ | L85 | 표 1행 = #7 동형 | #7과 같은 손 |
| 21 | #72 ⓑ | L182 | FAQ 「In a cash game the WSOP Live Action rules have the player who pushed all-in turn over first」 | 「In a no-limit cash game …; in any cash game, side-pot players …」 |

## §4. §13 자리 — 마감 손검산 대상

- **all-in L124~L140 재오픈 예시**: A bets $10 · B all-in **$14** · full raise 문턱 **$20** · C 최소 총액 **$24**
  검산 = 14(올인 총액) + 10(마지막 완전 벳) = **24** — B 176 공식(100 + 140 → 240)·A 96.a(1,700 + 500 → 2,200)과 같은 산식.
  🔴 **$20이 아니다** — $20은 «B가 냈어야 할 풀레이즈 총액»이지 C의 최소가 아니다.
- **all-in L144~L160 누적 예시**(A $10 → B $14 → C $21): A는 $11 더 = 풀레이즈 이상 → 재오픈 ✔ / 중간에 B의 $14를 콜한 사람은 $7 → 재오픈 ✖. 본문 그대로 유지(건드리지 않는다).
- 카드·족보 예시 없음 — 이 두 편은 금액·조문만 다룬다.

## §5. 이 회차에서 하지 말 것

- 🔴 **B 149의 «사이드팟 공개 순서» 절에 no-limit 한정을 붙이지 마라**(§2 실측). ⓑ는 «올인자 먼저» 절 전용이다.
- 🔴 **`522b57f8`이 고친 TDA 16 세 자리(showdown L43·L85·L182)의 문면을 되돌리지 마라** — 「tabled without delay once all betting is complete」가 정본이다.
- 🔴 **ar `masterUpdated`를 올리지 마라** — ar은 09-09판이고 09-11 EN 델타(두 편 약 20자리)를 **이번에 대조하지 않는다**. `updated`만 올린다(선례 = Q4-a ar blind-meaning · 진행 파일 §2).
- 🔴 `slug` · 이미지 · readnext · desc(160자) · 백틱 금지(§12-A).
- ⓓ ⓖ(game-order · betting-actions · blind-meaning)는 **Q12-b 몫** — 이 회차에서 열지 않는다.
