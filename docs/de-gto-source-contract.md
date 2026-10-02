# DE GTO 시리즈 — EN 원문 계약

> 작성: 2026-10-02. 집필자가 현재 EN의 구조·수치·고지를 빠뜨리지 않도록 만든 작업 입력이다.
> 대상: `lib/gto-series.ts`에 등록된 ①–⑬. **EN 본문 재저작·전수 재검수가 아니다.**
> 1차 출처: 현재(HEAD `7db19780`) `lib/posts-en/<slug>.ts`의 평가된 Post 객체. 수치 정본: `docs/gto-solver-series-spec.md` §4-B/4-B-2/4-B-3.
> 선례: [PT 원문 계약](pt-gto-source-contract.md)(2026-09-15 실측). **PT 계약의 숫자를 복사하지 않았다** — 09-15 이후 EN 13편이 전부 바뀌었다(아래 §2-B). 이 문서의 모든 구조값은 오늘 EN에서 다시 쟀다.
> PT 문서의 쉼표 표기·PT 버튼명·PT 링크 결정은 승계하지 않는다. DE 용어·표기 정본은 `docs/translation-terms-de.md`, 앱 축어는 de판 축어 문서(재캡처본)를 따른다.

## 1. 집필 범위와 우선순위

- **본문은 의미를 보존하는 DE 번역**이다. 조건·수치·전략 논거·한계 고지·독자가 재현할 경로를 보존한다. SEO 문구와 용어는 DE 집필 브리프·`docs/keyword-bank/de-gto-solver.md`에서 정한다.
- 현지화 가능 자리: seoTitle, desc, H2 문구, FAQ 질문의 표현·검색 의도, 본문 용어 표기. 포커 지시 대상은 불변이다. Set와 Trips를 한 개념으로 합치지 않는다(독일어에서도 «Set»·«Trips» 구분 유지).
- 같은 H2/표/주석이라고 다른 편의 내용을 복사하지 않는다. **행 라벨을 통일하고 값은 원문에서 가져온다.** 특히 ⑧·⑪·⑫·⑬ 조건표는 비교표다.
- **DE 숫자 표기**(`translation-terms-de.md` §3): 소수점은 **쉼표**, 퍼센트는 **공백 없이** 붙인다 — 98,2% · 0,8% · 5,5 · 2,09. 천 단위는 마침표(1.326). 날짜·slug·파일명·실제 UI 식별자는 무차별 치환하지 않는다. 퍼센트와 퍼센트포인트(Prozentpunkte)의 차이를 보존한다.
  - 🟡 **bb 단위 표기는 브리프에서 하나로 확정할 것**: `translation-terms-de.md` §3은 «`2,5 BB`»(공백+대문자)라고 적었지만, 오늘 실측한 de 코퍼스는 붙여 쓴 소문자 `bb`가 다수다(숫자+`bb` 63건 · 숫자+` BB` 21건 · 숫자+` bb` 5건 · 숫자+`BB` 4건, `lib/posts-de/*.ts` 전체). EN 시리즈는 `5.5bb`. 이 계약에서는 예시로 `5,5bb`라고 적되 판정은 하지 않는다. → ✅ **브리프 §4에서 `5,5bb`(붙여 쓴 소문자 — 코퍼스 다수형·EN·앱 축어와 같다)로 확정**(10-02).
- 수치를 말로 풀어도 원래 값을 복원할 수 있어야 한다. «etwa 10 Punkte niedriger»라고 쓴다고 원문의 **58,3%**를 지우지 않는다. «ein Drittel des Pots»처럼 무손실 표현은 허용된다.
- `masterUpdated`는 아래 §2 값(**13편 전부 2026-09-26**). DE `date`/`updated`는 실제 DE 발행/수정일이며 EN 검증일로 위장하지 않는다. 본문 조건표의 Checked 날짜는 **계산 출처 날짜**(2026-08-08/08-19/08-20)여서 DE 발행일로 바꾸지 않는다.
- `docs/settled-decisions.md` §1-E의 GTO 결정(목적 = 솔버 증거·필라 연결)에 따라 원문을 새로 만들지 않는다. 이 계약은 EN 검수 작업을 열거나 종결 판정을 새로 내리지 않는다.

## 2. 현재 EN 스냅샷 — 구조를 복사하기 전에 확인

평가 방식: `createJiti(path.resolve('package.json'), { fsCache: false, moduleCache: false })`로 각 `.ts`의 default Post를 읽었다. **원시 파일 주석을 본문으로 세지 않았다.** 해시는 원시 EN 파일(작업 트리, 현재 13개 모두 LF) SHA-256 앞 12자리다.

열: H2 / 본문 Markdown 내부링크 / FAQ 문항 / 디렉티브 / 하이라이트 / 표 행. 내부링크 수에는 `readnext`의 URL 행이 포함되지 않는다. 표 행은 헤더·구분행도 포함한다.
하이라이트는 두 값이다: **PT식**(PT 계약과 같은 옛 정규식 `==(?:[rgb]:)?[^=]+==` — 안에 `=`가 든 수식 하이라이트는 세지 않음) / **게이트식**(현행 `check-gto-structure.mjs`의 `==.+?==`). DE 패리티는 게이트식으로 판정되므로 둘 다 적는다.

| # | slug | masterUpdated | H2 | 링크 | FAQ | dir | `==` PT식/게이트식 | 표 행 | EN SHA-256 |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| ① | a-high-board-cbet | 2026-09-26 | 9 | 6 | 5 | 3 | 2 / 3 | 29 | e0acfbc8feea |
| ② | k-high-board-cbet | 2026-09-26 | 11 | 6 | 5 | 4 | 3 / 4 | 39 | dcc9e8bdb0d6 |
| ③ | broadway-board-strategy | 2026-09-26 | 11 | 10 | 4 | 3 | 5 / 6 | 47 | d3298a7246c5 |
| ④ | donk-bet-strategy | 2026-09-26 | 10 | 8 | 7 | 3 | 3 / 3 | 57 | 7c4687466940 |
| ⑤ | monotone-board-strategy | 2026-09-26 | 11 | 5 | 5 | 3 | 3 / 4 | 42 | 95c47bceff06 |
| ⑥ | paired-board-strategy | 2026-09-26 | 12 | **14** | 6 | 4 | 5 / 7 | 57 | 672cd19b6932 |
| ⑦ | low-board-check-raise | 2026-09-26 | 11 | 9 | 6 | 5 | 15 / 16 | 63 | 6ddd6856866c |
| ⑧ | 3bet-pot-cbet | 2026-09-26 | 11 | 11 | 6 | 5 | 12 / 13 | 33 | 6ec52906beaf |
| ⑨ | 3bet-pot-bet-sizing | 2026-09-26 | 10 | 13 | 7 | 6 | **31 / 32** | 51 | 87d7eb929c19 |
| ⑩ | 3bet-pot-low-board | 2026-09-26 | 8 | 10 | 4 | 2 | 4 / 5 | 45 | 2167a83c347d |
| ⑪ | blind-battle-cbet | 2026-09-26 | 8 | 15 | 4 | 4 | 5 / 6 | 61 | 78f8958f1e63 |
| ⑫ | blind-battle-connected-board | 2026-09-26 | 8 | 9 | 4 | 4 | 7 / 8 | 66 | e4817b29ccd9 |
| ⑬ | ace-paired-board-strategy | 2026-09-26 | 8 | **10** | 4 | 4 | 7 / 8 | 47 | 700214859876 |

합계: FAQ 67 · 표 행 637(헤더·구분행 포함) — 09-15와 같다.

**EN 전편 공통: 본문 이미지 1장(ranges chart), readnext 카드 2장.** 히어로는 Post.image에 있고 본문에 중복 삽입하지 않는다. `image`·본문 chart·시리즈 썸네일은 대응 `-de.webp`로 연결한다. **DE는 본문 이미지가 2장이다** — §8 «스팟 장면 이미지 자리»(de 전용 의도적 편차).

### 2-A. 계수기 검증 (PT 숫자 재현)

새 숫자를 믿기 전에, PT 계약 날짜의 EN을 같은 계수기로 다시 쟀다.

- 기준 커밋: `git log --before=2026-09-16 -1 -- lib/posts-en/` = `33acbaa1`(2026-09-13). PT 시점 13편의 마지막 수정은 `bbf325d1`(2026-09-02, ⑬은 `8db7767b` 08-21)이고, 그 뒤 첫 변경은 `814133ae`(09-24, ⑥만)다.
- 결과: **13/13 편에서 H2·링크·FAQ·dir·표 행·표 크기 순서·디렉티브 순서·본문 이미지 1·readnext 2가 PT §2와 전부 일치.** 하이라이트는 PT식 정규식으로 **13/13 일치**(2·3·5·3·3·5·15·12·30·4·5·7·7). 처음 쓴 `==[^=\n]+==`는 8편에서 어긋나 폐기했다.
- 해시: 10편은 git blob 그대로 일치. **⑦⑧⑨ 세 편만 PT 값과 달랐는데, 원인은 줄바꿈이다** — 당시 작업 트리의 이 세 파일이 CRLF였다. `git show bbf325d1:<file> | sed 's/$/\r/' | sha256sum`이 PT의 `709bdeb72dc6`·`5b98f7a0a146`·`a07654ef52b4`와 정확히 일치한다. 즉 내용은 같고, PT 해시는 «줄바꿈 포함 원시 바이트» 기준이었다. 현재 13개 파일은 모두 LF라 위 표 해시 = git blob 해시다.

### 2-B. 변경점 — PT 계약(09-15) 대비 현재 EN

**구조 변경은 3편뿐이다.** 나머지는 해시·`updated`만 바뀌었다(본문 문장 수정).

| # | 항목 | PT 계약(09-15) | 현재 EN | 원인 |
|---|---|---|---|---|
| ①–⑫ | masterUpdated | 2026-09-02 | **2026-09-26** | `1bbe1bfe` L-2b |
| ⑬ | masterUpdated | 2026-08-21 | **2026-09-26** | 같음 |
| ⑥ | 링크 | 13 | **14** | ⑩(`3bet-pot-low-board`) 링크 추가 — EQR 2위 비교 문장 |
| ⑬ | 링크 | 9 | **10** | ⑦(`low-board-check-raise`) 링크 추가 — «체크 후 노드» 고지 |
| ⑨ | `==` (PT식) | 30 | **31** | 실천 불릿에 `==9 ÷ 47 = 19.1%==` 추가 |
| 13편 | SHA-256 | §2 표 | 전부 변경 | 아래 diff |

변경 없음(13/13): H2 수 · FAQ 수 · 디렉티브 수와 순서 · 표 행 · 표 크기 순서 · 본문 이미지 1 · readnext 2 · readnext 대상. 링크 대상 집합(시리즈 밖 10개)도 같다 — 추가된 두 링크는 둘 다 시리즈 내부다.

관련 커밋(EN 13파일 기준): `814133ae`(09-24 · ⑥만) · `1bbe1bfe`(09-26 · L-2b · 13편 전부) · `4acd45c5`(09-26 · ⑤⑥). `git diff 33acbaa1 HEAD -- <13파일>` = 82+/79−.

#### 2-C. diff 요약 — 수치·전략 의미가 바뀐 자리 (축어 인용)

번역은 **오른쪽(현재)** 문장을 따른다. 이전 번역본(PT 등)에서 왼쪽 문장을 가져오지 마라.

- **①** · 리드 위험: “a lead invites a raise from exactly the hands it cannot continue against.” → “a lead invites raises from strong aces, and most of the big blind's range cannot continue against them — only **24 combos** can stand a raise (the sets 77 and 22, the two pair A7 and A2). (No raise node is solved here.)” · 드라이 보드: “keeps AK, AQ and AJ while the big blind's calling range does not” → “keeps AK and AQ while the big blind's calling range **tops out at AJ**”.
- **②** · “The same AQ in the big blind is worth less” → “The big blind's best ace-high here is AJ — its AQ three-bets preflop — and that AJ is worth less than it would be on the button”, “Identical cards” → “**Similar** cards” · 폴드: “a third of the range folds immediately.” → “the third of the range most likely to fold, though not all of it can: against a third-pot bet a balanced defense keeps **about 75%** of the range (MDF), so some of those hands still continue. (The big blind's response is not in this solve.)”
- **③** · 68.7%: “keeps drawing at you through the turn and river” → “holds some draw — **a different axis that overlaps the made hands** already ahead of you, not an extra 68.7% on top” · 큰 사이즈: “are all on one side” → “sit mostly on one side (the big blind holds just **7.1% straights and 0.7% sets**)” · FAQ: “the big blind leads instead of checking” → “the big blind leads **23.7%** of the time instead of almost never”.
- **④** · “Two pair is dead level at 2.8%” → “… at 2.8% **and sets at 1.9%**” · “nuts” → “strongest hands”(2곳) · “the big blind has more straights” → “… (**24 combos against 20, while the nut J-T is 16 for each**)” · “the button cannot fire wide” → “would struggle to fire wide — **a read from range composition, since the button's own betting node is not in this solve.**”
- **⑤** · 너트: “whoever holds the A♠” → “the A♠ **with a second spade** (the A♠ alone is only four to a flush)” · compare 행: “A big bet only gets called by flushes” → “gets called **mostly** by flushes **and spade draws**” · “is drawing at nothing” → “can never make a higher flush and needs runner-runner help, such as a full house, to win”(본문·FAQ 2곳) · **블로커 단락 논거 교체**: 옛 «블로커가 콜링 레인지를 얇게 해 체크로 기운다»를 삭제하고 → “But blockers do not explain the split on their own. Count the button's **18 non-nut flushes**: the J♠ and T♠ each remove 4 of them, while the 7♠ removes 6, the 8♠ and 6♠ 5 each, the 5♠ 4 and the 4♠ only 2 — and **A♠7♠**, the biggest blocker of the lot, still bets **44.0%** of the time, second only to **A♠4♠ (47.3%)**, which blocks just 2. Only the 3♠ blocks none, and A♠3♠ checks 79.7%. For every nut-flush combo the three actions sit **within 0.05bb** of each other, so read the column as a mix between near-equal options, not as a blocker rule.” · BB 싸구려 수딧: “J5s, 85s and 74s” → “**J4s, J5s and 85s**”(본문·FAQ 2곳) · Q♥J♦: “**about 3.4%** of 474, which brings the total … roughly **15.4%**” → “16 of the **428** combos the button can still hold once your Q♥ and J♦ are out, **about 3.7%** … everything already ahead of you comes to **68 of 428, roughly 15.9%**”, “12.0% of the button's range” → “… of the button's **full 474-combo** range”.
- **⑥** · 22: “a running three counterfeits it into playing the board.” → “a **second three on the turn or river** counterfeits it into playing the board — **on 6-6-3-3-K, 22 is just the board's two pair (only a deuce on the other street saves it).**” (HI 계약 S-HI-01이 지적한 런아웃 조건이 EN에 반영됨) · **키커 표 해석 논거 교체**: 옛 “J6s, T6s and 96s are not in the button's opening range at all, so holding one removes none of the button's trips. K6 and Q6 … thins the very range that would call.” → “Trips blockers do not explain it either. Whichever six you hold removes the button's trips of its own suit — K♠6♠, Q♥6♥ and J♥6♥ each leave the button **exactly 10 of its 20** — and the kicker removes nothing more, because the button opens K6 and Q6 only suited and your six has already taken that suit. **The table shows the calculated mix; it does not isolate the cause of a gap this small.**” · 큰 벳 비중: “the sixes are 26 of 486 combos, roughly **a quarter** of the large-bet total of about **9.7** combos. The rest comes from other classes.” → “They are 26 of 486 combos and contribute **about 1.2 of the roughly 9.6** large-bet combos — about **one eighth (13.0%)**. Most of the rest comes from hands with no six at all.” · 리드: “The sixes lead more than any other class here” → “The sixes lead **6.8%** — more than any two-pair or high-card hand, **less only than the 33 full houses (8.8%) and the single quads combo (9.6%)**” · EQR 2위: “(second is 6♥6♣ on the low rainbow flop at 318.9%)” → “(second is **the button's 88 in the 3-bet pot on a low board at 346.0%**; on the big blind's side the runner-up is 6♥6♣ … at 318.9%)” — 새 링크 `/en/blog/3bet-pot-low-board`.
- **⑦** · 재솔브 note: “exploitability 0.16, which is 0.29% of the pot” → “exploitability **0.16 in the engine's internal units (tenths of a big blind) — 0.016bb**, or 0.29% of the **5.5bb** pot” · 거샷: “the solver takes the group the big blind has more of and turns all of it into one action.” → “the solver leans on the group the big blind has more of, **though not all of it raises: 18.5% of 487 is about 90 gutshot combos, more than the 69.7 raising combos in total, and even J4s and Q4s near the top of the list raise only 67–90%.**” · FAQ 체크레이즈 허용: “Legal everywhere” → “Allowed in almost every casino and in standard online games — only a private home game might still have its own house rule —”, “Nobody plays that way now” → “Few games play that way now”.
- **⑧** · desc/tldr/본문: “bets 100% of the time. Checking is 0.0% — not one combo out of 63.” → “bets its whole range: checking **rounds to 0.0%**, and no combo out of 63 checks even 0.1% of the time.” · “every single time” → “each **at least 99.9%** of the time” · **0.0% 단락 교체**: “**0.0%.** The combo column reads 0.0 as well, so none of the 63 combos checks — nothing is hiding under the rounding.” → “**0.0% on screen.** The raw output does hold a residue — **41 of the 63 combos carry a sliver of checking, the largest K♥K♦ at 0.09%, together less than a hundredth of a combo.** That is solver noise, not a strategy, so read it as zero.” · 130콤보: “what a theoretically correct defense looks like” → “the **calling range this solve was given** — a preflop setting written into the tree, not a defense the solver worked out” · MDF: “the premise behind MDF does not hold” → “… **stands on weak ground**”, “Against a bet with no pure bluffs in it there is no bluff to make indifferent” → “A range with no unpaired hand in it leaves little of the pure bluffing MDF assumes” · 60콤보 가격: “That the small size prices those 60 combos in is separately true, but” → “Whether the small size even prices those 60 combos in is **doubtful: against the big blind's whole range only QQ and JJ hold more than the 19.8% it asks for, while 99 down to 33 sit at 7.6–9.2%.**” · FAQ SPR 산술: “Betting 66% of the pot each street runs 14.9 → 34.5 → 39.6bb, exactly the 89bb stack.” → “Two thirds of the pot on the flop and turn runs 14.9 → 34.5bb, and **the 39.6bb left is about a third of the river pot** — so the third bet is exactly the rest of the 89bb stack.”
- **⑨** · desc: “Two thirds of the pot is the price that breaks 38 of 40 draws.” → “Two thirds of the pot out-prices 38 of 40 draws **on one-card odds**.” · Quick answer·소제목·FAQ 전부 “**on the next card alone / on one-card odds / on next-card odds**” 한정 추가 · **새 단락**: “⚠ "Prices out" here means the next-card arithmetic only. Against the big blind's whole range with both cards to come, **30 of those 38 combos still hold more than 28.5% equity** — the A-K gutshots sit at **37.6–42.9%** because their overcards count too. What the large size does to most draws is **charge them, not fold them**.” · FAQ: “To make the draws pay a losing price.” → “To charge the draws.” + “though with both cards to come most of those draws still hold more than 28.5%, so the price charges them rather than folds them” · 백도어 정의: “runner-runner hearts” → “two running cards of one suit (hearts for a hand holding one heart, spades for one holding two spades beside the 7♠)”(2곳) · JJ: “a king and a nine, or an ace and a king” → “a king and a nine, an ace and a king, **or a nine and an eight**” · 언더페어: “holding a pair below both of them” → “below the queen — below both broadway cards for every underpair **except JJ, which sits between them**” · 실천 불릿: “every flush draw on this board clears that” → “**all four of the button's flush-draw combos** clear that with room to spare (**a bare nine-out flush draw would not — 9 ÷ 47 = 19.1% — but only the big blind holds those here**)” · **A-K 불릿에 개별 핸드 빈도 신설**: 옛 “neither solve reports a per-hand frequency for it” 삭제 → “on the 8-5-2 low board … A-K still goes into the large size **95.9–97.9%** of the time (**97.8–99.9% here**)” · MDF: “it is a ceiling derived from …” → “it is derived by …, so whether the true optimal defense sits **above or below** it is a question this solve does not answer”.
- **⑩** · tldr: “with nothing in between” → “with **almost** nothing in between — **only the three A5s**” · 도입: “No pair, no draw.” → “No pair, and nothing better than backdoor draws.” · EQR 연동: “when one side rises the other must fall … These are not two facts but two sides of one.” → “**with the equities held fixed**, one side's gain in realization is the other side's loss. **Across different boards the equities move too, so that link is not automatic** — but here it is what happened … Here, at least, these are two sides of one fact.” · SPR 불릿: “The moment you bet the flop, whether you are going all the way is effectively already decided.” → “Once you bet the flop, the rest of the stack is one or two more bets away, so decide before that first bet which turns and rivers you will keep firing on — **the turn and river are not in this solve**, and a runout or an opponent can still change the answer.” · FAQ A-K: “neither a pair nor a draw” → “no pair and no immediate draw (**only backdoor draws — a runner-runner wheel, plus a backdoor flush for three suited combos**)” · CTA 기록 문구(아래 공통).
- **⑪** · stripe Result: “… leads” → “… leads **more often than not**” · 좌석 논거: “That is a *necessary* condition, not a sufficient one —” → “**In this series every majority lead comes from that seat, but the seat guarantees nothing, and a caller can still lead some of the time (23.7% at ④).**” · pull: “Whether you bet first is decided not by position, but by how strong your range is on this particular board.” → “Being out of position does not decide whether you bet first — how your range meets this particular board does most of the work.”
- **⑫** · BB 우위 이유: “the combinations that connect with 5-6-7 survive only in the big blind's calling range.” → “the big blind's calling range adds hands the small blind never opens that hit 7-6-5 — **T7o, 97o, 87o, 76o, 74s and 43s** among them — on top of the straights, sets and two pair both ranges hold.” · 개별 콤보: “none of the top three individual combos does both (Q♠4♠ at 54.7% is a pure draw …” → “none of the top individual combos does both (**Q♥4♥ and Q♠4♠** at 54.7% are pure draws, A♣7♣ at 54.4% …, and next comes T♣9♣ at 52.2%, a gutshot)” · 체크 이유 교체: “leading with thin value and then facing a raise costs far more than it makes.” → “for thin value like A♣7♣ and K♣7♣, betting and checking come out **within 0.03bb** of each other, so checking gives up almost nothing.” · 에이스 하이: “the best it does is pair up” → “most of it can only pair up (**A4 and A8 pick up open-enders, and the A♦x♦ hands a flush draw**)”, 상대 드로우 “are **mostly** straights” · FAQ 끝: “beats leading with thin value and getting raised.” → “for the thin value hands, checking is worth about as much as betting (within 0.03bb), and what happens after the check, calls and check-raises included, **is not in this solve**.”
- **⑬** · 51.5%: “That is how large a share a single bet can fold out.” → “That is **the pool a bet presses on, not a fold rate**: against a third of the pot, MDF says to keep **about 75%** of the range, so a balanced opponent folds **nearer a quarter**. (The big blind's response is not in this solve.)” · 연속 레인지 논거: “fold out the opponent's 51.5% and that alone is profit, and when they do not fold the pot stays small enough that the 97bb behind is never at risk.” → “the opponent's 51.5% of misses is what a small bet presses on — **a 2bb bluff into 6bb needs only 25% folds to break even** — and the bet itself risks just 2bb now, though **the 97bb behind can still come into play** on the turn and river.” · K-K/Q-Q 고지: “no node after a check is solved anywhere in the series.” → “no node after a check is solved for this spot (**the only check-then-bet node in the series is the re-solve on the low rainbow board**)” — 새 링크 `/en/blog/low-board-check-raise` · FAQ 블러프: “decides the betting frequency of the whole range” → “The solver does not label a hand a bluff; it sets **a frequency for every hand**, and the range's betting frequency is simply those frequencies averaged over its combos.”, “the bet earns its keep” → “a small bet has plenty to press on”.
- **⑩⑪⑫⑬ 공통 CTA**: “Your history stays in your own browser.” → “Your history **is kept on this device by default; signing in with a HoldemMaster account syncs your Study Spots and Daily Challenge history across devices.**” — DE는 de 앱의 실제 버튼·메뉴명(재캡처 축어)으로 옮긴다.

### 표의 크기와 디렉티브 순서 (09-15와 동일, 오늘 재실측)

표 크기는 **행×열**, 본문 등장 순서다. 예: 9×2에는 2열짜리 헤더·구분행·데이터 7행이 있다. `stripe`/`compare`/`readnext` 안의 줄은 일반 Markdown 표가 아니다.

| # | 표 크기 순서 | 디렉티브 순서 | readnext 대상(순서) |
|---|---|---|---|
| ① | 9×2, 5×3, 10×3, 5×3 | stripe → note → readnext | holdem-continuation-bet, holdem-position-play |
| ② | 9×2, 5×3, 5×3, 11×3, 5×3, 4×3 | stripe → note → note → readnext | ①, holdem-continuation-bet |
| ③ | 9×2, 5×3, 6×4, 5×3, 8×3, 4×2, 5×3, 5×4 | stripe → note → readnext | ②, ① |
| ④ | 9×2, 5×3, 6×2, 6×3, 5×3, 13×3, 8×3, 5×3 | stripe → note → readnext | ③, ② |
| ⑤ | 9×2, 5×3, 10×6, 6×4, 7×3, 5×3 | stripe → compare → readnext | ④, ③ |
| ⑥ | 9×2, 6×2, 5×3, 7×3, 9×3, 5×3, 9×5, 7×4 | stripe → note → note → readnext | ⑤, ④ |
| ⑦ | 9×2, 4×3, 9×4, 12×3, 5×3, 4×3, 5×3, 9×3, 6×3 | stripe → pull → note → note → readnext | ⑥, ⑤ |
| ⑧ | 11×3, 5×3, 8×5, 4×4, 5×3 | stripe → note → note → pull → readnext | ⑦, ⑥ |
| ⑨ | 9×2, 5×3, 4×4, 8×3, 6×6, 5×3, 9×3, 5×3 | stripe → note → pull → note → note → readnext | ⑧, ⑩ |
| ⑩ | 9×2, 5×3, 8×4, 4×2, 9×3, 5×3, 5×3 | stripe → readnext | ⑨, ⑪ |
| ⑪ | 11×4, 4×3, 10×3, 5×4, 11×3, 6×3, 5×3, 9×4 | stripe → pull → note → readnext | ⑩, ⑫ |
| ⑫ | 12×4, 4×3, 10×3, 6×3, 13×3, 8×3, 5×3, 8×4 | stripe → pull → note → readnext | ⑪, ⑬ |
| ⑬ | 11×4, 5×3, 11×3, 7×3, 8×3, 5×3 | stripe → pull → note → readnext | ⑫, ① |

구조 예외를 없애려고 새 절을 넣지 않는다(§8의 장면 이미지 1장은 예외로 승인된 de 편차이며 절을 만들지 않는다):

- ⑤의 첫 H2는 monotone의 정의다(“What is a monotone board in poker?”). 별도의 공통 “계산 조건” H2가 없고, 9×2 조건표가 이 정의 H2 안에 있다.
- ⑩–⑬은 FAQ 4문항이 있지만 **FAQ H2가 없다**.
- ⑥은 H2 안에 continuation-bet 내부링크가 있다. 본문으로 옮기면 위치가 달라진다.
- ⑥의 두 번째 표(6×2)는 액션 표가 아니라 **Trips/Quads/Full house/Two pair 판정표**다.
- ⑫–⑬의 본문 링크는 시리즈 내부만이다(⑬에 ⑦ 링크가 새로 붙었어도 여전히 시리즈 내부). 다른 편과 맞추려고 일반 필라 링크를 늘리지 않는다.

## 3. 수치·조건 고정표

**재검증 결과: 불일치 0건.** 아래 값은 `gto-solver-series-spec.md` §4-B(벳합·EQ·EQR)·§4-B 체크 분해표·§4-B-2(팟·스택·사이즈·콤보·EV)와 전 항목 일치하고, 09-26 diff는 이 표의 어떤 값도 바꾸지 않았다. 현재 EN 본문에 대해서는 각 편의 조건표·액션 표·stripe·tldr/desc를 문자열 대조했다 — 본문이 진술하는 값은 전부 일치했고, 아래만 «본문에 그 형태로 나오지 않음»(모순 아님):

- 콤보 총계 일부는 EN 본문에 숫자로 없다: ① IP 463 · ③ 453/458 · ④ 462/472 · ⑤ OOP 468 · ⑥ IP 502 · ⑦ IP 503. 정본(§4-B-2)에만 있으므로 DE 본문에 새로 써 넣지 않는다.
- ⑨ 99.1% · ⑩ 98.1%(벳합)은 EN 본문에 합계로 나오지 않는다 — EN은 98.4/0.7, 97.8/0.3으로 사이즈별로만 말한다. DE도 합계를 새로 만들지 않는다.
- ⑧의 Check 0.0%는 이제 «화면값»으로 한정된다(원시 출력 잔여 41콤보·최대 K♥K♦ 0.09%·합 0.01콤보 미만 — §2-C ⑧). 표값 0.0%/0.0은 그대로다.

아래 소수점 마침표는 **원천 숫자 대조용**이다. DE 독자에게 보이는 문자열은 쉼표로 표기한다(98,2%). 체크를 `100 − 벳합`으로 재계산하지 않는다. 표시값 각각의 반올림 때문에 합이 99,9 또는 100,1일 수 있다.

| # | 보드 그대로 | Check % | 작은 bet % | 큰 bet % | bet 합 % | OOP EQ % | OOP EQR % | IP EQR % |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| ① | A♥7♦2♣ | 98.2 | 1.0 | 0.9 | 1.9 | 45.1 | 84.0 | 113.1 |
| ② | K♠8♦3♣ | 99.8 | 0.1 | 0.1 | 0.2 | 46.3 | 80.7 | 116.7 |
| ③ | Q♠J♦T♠ | 99.9 | 0.1 | 0.0 | 0.1 | 46.7 | 77.9 | 119.4 |
| ④ | 9♥8♥7♣ | 76.2 | 16.8 | 6.9 | 23.7 | 48.5 | 93.2 | 106.4 |
| ⑤ | Q♠9♠2♠ | 88.8 | 8.0 | 3.2 | 11.2 | 47.7 | 90.4 | 108.8 |
| ⑥ | 6♣6♦3♥ | 97.0 | 1.0 | 2.0 | 3.0 | 47.2 | 83.7 | 114.5 |
| ⑦ | 6♠5♥2♦ | 96.8 | 3.2 | — | 3.2 | 48.3 | 84.3 | 114.7 |
| ⑧ | A♦K♠2♥ | 0.0 | 57.8 | 42.2 | 100.0 | 68.9 | 109.6 | 78.7 |
| ⑨ | Q♥T♥7♠ | 0.8 | 0.7 | 98.4 | 99.1 | 58.3 | 117.8 | 75.1 |
| ⑩ | 8♦5♣2♠ | 2.0 | 0.3 | 97.8 | 98.1 | 58.6 | 106.9 | 90.3 |
| ⑪ | K♥T♦6♠ | 32.6 | 67.4 | — | 67.4 | 55.3 | 103.1 | 96.1 |
| ⑫ | 7♦6♦5♣ | 90.4 | 9.6 | — | 9.6 | 49.6 | 85.3 | 114.4 |
| ⑬ | A♠A♥6♦ | 19.8 | 79.6 | 0.5 | 80.1 | 56.2 | 104.1 | 94.8 |

| # | pot / 남은 유효 stack (bb) | 제공된 bet 크기 | OOP / IP combos | OOP / IP EV (bb) |
|---|---|---|---|---|
| ① | 5.5 / 97.5 | 1.8 (33%) · 4.1 (75%) | 464 / 463 | 2.09 / 3.41 |
| ② | 5.5 / 97.5 | 1.8 · 4.1 | 474 / 480 | 2.06 / 3.44 |
| ③ | 5.5 / 97.5 | 1.8 · 4.1 | 453 / 458 | 2.00 / 3.50 |
| ④ | 5.5 / 97.5 | 1.8 · 4.1 | 462 / 472 | 2.48 / 3.02 |
| ⑤ | 5.5 / 97.5 | 1.8 · 4.1 | 468 / 474 | 2.37 / 3.13 |
| ⑥ | 5.5 / 97.5 | 1.8 · 4.1 | 486 / 502 | 2.17 / 3.33 |
| ⑦ | 5.5 / 97.5 | **1.8 (33%) 하나** | 487 / 503 | 2.24 / 3.26 |
| ⑧ | 22.5 / 89 | 7.4 (33%) · 14.9 (66%) | 63 / 130 | 16.99 / 5.51 |
| ⑨ | 22.5 / 89 | 7.4 · 14.9 | 73 / 133 | 15.46 / 7.04 |
| ⑩ | 22.5 / 89 | 7.4 · 14.9 | 83 / 144 | 14.09 / 8.41 |
| ⑪ | 6 / 97 | **2 (33%) 하나** | 538 / 525 | 3.42 / 2.58 |
| ⑫ | 6 / 97 | **2 (33%) 하나** | 572 / 534 | 2.54 / 3.46 |
| ⑬ | 6 / 97 | 2 (33%) · 4.5 (75%) | 503 / 505 | 3.51 / 2.49 |

그룹별 역할·범위:

- ①–⑦: **BTN opens 2.5bb → BB calls**. OOP는 BB 콜러, IP는 BTN 오프너. pot = 2.5 + 2.5 + dead SB 0.5, stack = 100 − 2.5. (⑦ 조건표는 SPR about 17.7을 함께 적는다.)
- ⑧–⑩: **BB three-bets to 11bb → BTN calls**. OOP는 BB 3-bettor, IP는 BTN 콜러. pot = 11 + 11 + dead SB 0.5, stack = 100 − 11, SPR ≈ 4.0. 큰 사이즈는 **66%, 75% 아님**.
- ⑪–⑬: **SB opens 3bb → BB calls**. OOP는 SB 오프너, IP는 BB 콜러. pot = 3 + 3, **추가 dead blind 없음**, stack = 100 − 3, SPR ≈ 16.2. 세 편은 같은 프리플랍 레인지이고 combos 차이는 보드 블로커다.
- BB 3-bet range 14종: AA, AKs, AQs, AJs, A5s, A4s, AKo, KK, KQs, AQo, QQ, JJ, TT, 99. 보드별로 남는 combos만 바뀐다.
- 전체 기준: heads-up, 표준 100bb 온라인 레인지의 근사, **rake 미반영**. 실제 레인지·스택·사이즈·상대가 달라지면 빈도도 달라진다.

## 4. 편별로 보존할 논거와 한계

이 표는 원문 대체 요약이 아니다. 표·개별 핸드 수치는 EN 전체에서 번역하고, 아래 항목이 탈락하지 않았는지 확인한다. **굵은 «09-26»** 표시는 PT 계약 이후 EN에서 새로 생기거나 바뀐 보존 항목이다.

| # | 핵심 증거 / 번역에서 잘 빠지는 구분 |
|---|---|
| ① | 98.2%는 **전체 BB 레인지**의 체크율이지 A9·top pair 단독 빈도가 아니다. A7/A2는 two pair(18콤보, 3.9%). BB는 AA/AK/AQ가 없고 **AJ까지**(BTN은 AK·AQ 보유); set는 77/22 총 6콤보, BTN은 AA 포함 9. **09-26** 리드에 대한 레이즈를 버틸 수 있는 BB 핸드는 **24콤보뿐**(set 6 + two pair 18)이고 **레이즈 노드는 풀지 않았다**는 괄호를 보존. BTN c-bet 70–100% 일반 가이드와 **이 예제의 정확한 BTN 결과는 없음**을 구분. |
| ② | BB overpair 0 대 BTN 1.3%; set 6 대 9콤보. BB two pair 0.8%는 BTN 0.4%의 두 배지만 4콤보뿐이고 **overpair보다 높은 족보**다. ace-high 27.0/30.0은 no-made-hand 35.4/28.3과 다른 행. **09-26** BB의 최고 ace-high는 **AJ**(AQ는 프리플랍 3-bet) — «같은 AQ»라고 쓰지 않는다, «Identical»이 아니라 «Similar cards». **09-26** no-made-hand 35.4%는 «즉시 폴드»가 아니다 — 1/3팟에 균형 방어는 약 75%(MDF)를 남기므로 일부는 계속하고, BB 반응 노드는 이 솔브에 없다. 72.2% no-draw는 전체 레인지 분모. EQR 반올림 note, BTN 전략은 해석이며 정확한 c-bet 노드 없음. |
| ③ | Q♠J♦T♠는 **투톤**. straight는 AK/K9/98, BTN 48 대 BB 32콤보(7.1/10.5%). BB에 AK가 없다. OESD 28.7/27.7과 made straight 분포를 섞지 않는다. **09-26** 68.7%는 «완성 핸드 위에 더하는» 값이 아니라 **겹치는 다른 축**. **09-26** 큰 사이즈 근거는 «한쪽에 대부분»(BB straight 7.1%·set 0.7%) — «전부 한쪽»으로 되돌리지 않는다. FAQ의 ④ 대비는 «23.7% 리드 vs 거의 안 함». BTN sizing/check-raise 빈도는 이 예제에서 계산되지 않았다. |
| ④ | BB straight 24콤보 대 BTN 20; 차이는 **T6s 4콤보**. 최상위 JT 16콤보는 양쪽 동일(**09-26** 본문에 «nut J-T is 16 for each» 명시)하므로 전체 straight 우위를 JT 독점으로 바꾸지 않는다. **09-26** «nuts» → «strongest hands». two pair 2.8%·**set 1.9% 동률**. 전체 EQ/EQR은 여전히 BTN 우위. no-pair BB 53.7 대 BTN 51.7%이므로 BTN의 체크를 «미스가 더 많아서» 하나로 설명하지 않는다. **09-26** BTN이 넓게 못 친다는 것은 «레인지 구성에서 읽은 해석 — BTN 벳 노드는 이 솔브에 없다». QQ(no heart) 위험 turn 23/47 ≈49%, Q♥ 있으면 22/47 ≈47%. 24 straight 모두가 checking range에 남는 것도 아님. |
| ⑤ | A♠J♠ 한 콤보 체크 **83.4%**, nut flush 8콤보 평균 **69.9%**(52.7–84.2%), non-nut 25콤보 평균 **81.4%**를 구분. **09-26** 너트는 «A♠ 한 장»이 아니라 **A♠ + 스페이드 한 장 더**(A♠ 단독은 4장 플러시). A♠K♠는 BB 프리플랍에 없음. Q♠ 보드라 «J-high flush»라 부르면 틀림; J♠/T♠는 상대 flush의 키커 슬롯을 차단. **09-26 블로커 논거가 바뀌었다**: «블로커가 콜링 레인지를 얇게 해 체크» 논리는 폐기 — BTN non-nut flush 18콤보 기준 차단 수(J♠·T♠ 4 · 7♠ 6 · 8♠·6♠ 5 · 5♠ 4 · 4♠ 2 · 3♠ 0), 최대 블로커 A♠7♠가 오히려 44.0% 벳(A♠4♠ 47.3% 다음), A♠3♠ 79.7% 체크, 너트 콤보마다 세 액션이 **0.05bb 이내** → «거의 같은 선택지 사이의 믹스이지 블로커 규칙이 아니다». **09-26** BB 싸구려 수딧 예시는 **J4s, J5s, 85s**(74s 아님). **09-26** Q♥J♦: 이미 뒤짐 12.0%(BTN 전체 474 기준) / 키커 AQ·KQ 16콤보 = **428 중 3.7%** / 합 **68/428 ≈ 15.9%** — 분모 474와 428을 섞지 않는다. 키커 16콤보 중 4개는 29.2%에도 포함(단순 합산 금지). flush draw 합 25.6/29.2는 flush+combo 두 행을 더한 값. BB 큰 lead 3.2%는 **BTN의 bet 빈도가 아님**. compare 행 «mostly by flushes and spade draws»; 원스페이드 핸드는 «더 높은 플러시 불가·러너러너(풀하우스 등) 필요». |
| ⑥ | 6♣6♦3♥에서 한 장 six는 trips; 66은 quads(6♠6♥ 1콤보); 33은 full house(3콤보). BB trips 26 대 BTN 20, 차이는 J6s/T6s/96s. 63은 두 range 모두 없음. board pair를 넘는 핸드 18.4/20.3%; TT는 two pair이며 EQ 76.0%. **09-26** 22: «두 번째 3이 턴이나 리버에» 떨어질 때 — **6-6-3-3-K에서 22는 보드 two pair를 플레이(다른 스트리트에 2가 오면만 살아남음)**. 조건 없이 «3이 나오면»으로 일반화 금지. **09-26 키커 표 논거가 바뀌었다**: 옛 «J6s/T6s/96s는 BTN에 없어 trips를 안 막는다·K6/Q6는 콜링 레인지를 얇게 한다» 폐기 → 어느 6이든 BTN trips 20 중 **정확히 10**을 남기고 키커는 더 막지 않는다; **표는 계산된 믹스를 보여줄 뿐 이 작은 차이의 원인을 분리하지 않는다**. **09-26** 큰 벳 기여: six 26콤보가 약 9.6 중 **약 1.2(13.0%, 1/8)** — 옛 «약 4분의 1·9.7»은 틀렸다; 나머지 대부분은 six 없는 핸드. **09-26** six 리드 **6.8%** — two pair·하이카드보다 높고 33 풀하우스 8.8%·쿼즈 9.6%보다 낮다(«어느 클래스보다 높다» 금지). **09-26** EQR 359.7%(6♠6♥) 다음은 **⑩ BTN 88 346.0%**, BB 쪽 2위가 ⑦ 6♥6♣ 318.9%. MDF 75.3%는 pure-bluff 가정의 기준이고 **실제 최적 방어가 그 위/아래인지는 여기서 모름**. |
| ⑦ | 아래 §5 전체 필수. 4-3만 straight를 만들지만 두 range에 없음. 87s만 **이 range에 들어 있는** OESD이지 보드가 허용하는 유일한 OESD가 아님: 74도 OESD, 84는 double gutshot. 상위 raise 목록은 약 30/69.7콤보이며 전체 raising range 목록이 아님. **09-26** 거샷 행(18.5% ≈ 90콤보)이 레이즈의 «대부분»이지만 **전부 레이즈하지 않는다** — 90 > 69.7, J4s·Q4s도 67–90%. **09-26** FAQ: 체크레이즈는 «거의 모든 카지노·표준 온라인에서 허용, 사설 홈게임만 자체 규칙 가능» — «어디서나 합법»으로 되돌리지 않는다; «Nobody»가 아니라 «Few games». |
| ⑧ | BB 63콤보 전부 pair 이상. **09-26** Check는 **화면값 0.0%/0.0콤보**이고 원시 출력에는 41콤보에 잔여(최대 K♥K♦ 0.09%, 합 0.01콤보 미만) — «솔버 노이즈, 0으로 읽는다». «단 한 콤보도 체크 안 함(완전 0)»·«every single time»으로 되돌리지 않는다(«각 콤보 99.9% 이상»). 작은 bet 57.8%는 같은 SPR 4의 ⑨/⑩과 대비. **낮은 SPR 자체가 작은 sizing의 이유가 아님**. **09-26** FAQ 산술: 플랍·턴 2/3팟 = 14.9 → 34.5bb, **남은 39.6bb는 리버 팟의 약 1/3** → 세 번째 벳이 89bb 잔여 전부 — turn·river 계산값 아님. **09-26** BTN 130콤보는 «이론적으로 옳은 방어»가 아니라 **이 솔브에 넣은 프리플랍 설정**. **09-26** MDF 전제는 «성립하지 않는다»가 아니라 **«기반이 약하다»**; 작은 사이즈가 60콤보 미들 페어를 «가격에 맞게 한다»는 것도 **의심스럽다** — BB 전체 레인지 상대로 19.8%를 넘는 건 QQ·JJ뿐, 99–33은 7.6–9.2%. BTN 대응은 range 해석이며 no post-check node. |
| ⑨ | **98.4%** large와 **0.8%** check 고정. 서로 배타적인 live draws 30.1%와 backdoor를 구분. **09-26** 백도어 정의는 «러너러너 하트»가 아니라 «같은 무늬 두 장 연속(하트 1장 보유 → 하트, 7♠ 옆 스페이드 2장 보유 → 스페이드)». BTN draw 40콤보 중 즉시 2/3 가격을 넘는 2콤보; 1/3에서는 4콤보. 이는 **한 장 odds**, river까지 공짜로 보는 equity 아님 — **09-26 이 구분이 desc·Quick answer·소제목·FAQ에 전부 명시됐고 새 단락이 생겼다**: 두 장 남은 상태로 BB 전체 레인지 상대 **38콤보 중 30콤보는 여전히 28.5% 초과**, A-K 거샷 **37.6–42.9%** → 큰 사이즈는 드로우를 «폴드시키는» 게 아니라 «비용을 물린다». BTN의 bare flush draw 0, 네 two-heart hand 모두 combo draw; **09-26** bare 9아웃 플러시 드로우는 1/3도 못 넘는다(**9 ÷ 47 = 19.1%**) — 그런 핸드는 BB만 보유. BB two-heart 4콤보 전부 A♥ 포함. **09-26** JJ 스트레이트 경로 셋(K9 · AK · **98**); 언더페어는 «Q 아래», JJ만 두 브로드웨이 사이. **09-26** A-K 개별 빈도 신설: ⑩ 보드에서 **95.9–97.9%**, 이 보드 **97.8–99.9%** 큰 사이즈 — 옛 «두 솔브 모두 핸드별 빈도를 보고하지 않는다»는 삭제됐다. MDF 60.2%는 call 할당량이 아님(**09-26** «상한»이라는 말 삭제 — 최적 방어가 위인지 아래인지 이 솔브는 답하지 않는다). BB set 비율 8.2%가 BTN 6.8%보다 높아도 개수는 **6 대 9**. EQR 117.8%가 ⑧보다 높지만 EV는 **15.46 < 16.99bb**. |
| ⑩ | board와 직접 pair가 된 것은 A5s **3콤보**; 기존 pocket overpair **36콤보**가 별도로 있어 «레인지 전체가 못 맞혔다»는 뜻 아님. **09-26** tldr «사이에 거의 아무것도 없다 — A5s 세 콤보뿐». ace-high 40콤보, A4s gutshot 4콤보. **09-26** A-K는 «페어도 드로우도 없음»이 아니라 **즉시 드로우 없음, 백도어만**(러너러너 휠 + 수딧 3콤보의 백도어 플러시). draw 표 4.8 + 16.9 + 78.3%. BTN set 9콤보 독점, AA/KK는 그것 외의 가치·블러프 구성에 별도 판단 필요. BTN 58.3% missed ≠ 58.3% folds; 반응 노드 없음. **09-26** EQR 연동은 **«에퀴티가 고정일 때»만** 한쪽 이득 = 다른 쪽 손실, 보드가 다르면 자동 아님 — «여기서는» 한 사실의 양면. BTN EQR 15.2포인트 차이와 실제 EV/pot 점유율 차이 **6.1포인트**를 구분. **09-26** SPR 불릿: «플랍에 벳하는 순간 올인이 사실상 결정»은 폐기 — 남은 스택은 1–2벳 거리, **턴·리버는 이 솔브에 없고** 런아웃·상대가 답을 바꿀 수 있다. |
| ⑪ | SB 역할과 K-T-6의 range 적합성이 **함께** 67.4%를 만든다. 동일 SB 자리의 ⑫ 9.6/⑬ 80.1이 반례. **09-26** «필요조건이지 충분조건 아님» 문구는 폐기 — **시리즈의 다수 리드는 전부 이 자리에서 나왔지만 자리가 보장하는 건 없고, 콜러도 일부 리드한다(④ 23.7%)**. pull도 «포지션이 아니라 레인지 강도가 결정» → «OOP라는 사실이 결정하지 않는다 — 이 보드와 레인지의 만남이 대부분을 한다». stripe «more often than not». 단일 33% 옵션이므로 «큰 bet보다 우월함을 계산했다» 금지. QJ 16콤보는 8-outs OESD, live draw/backdoor/no-draw 서로 구분. SB set 9 대 BB 3. EQR 103.1%와 높은 EQR=더 큰 이득이라는 주장을 분리. |
| ⑫ | ⑪과 pot·stack·range·size가 동일하며 **보드만 변경**. 양쪽 set 9콤보, 비율 1.6/1.7 차이는 분모 때문. BB의 set9+two-pair13+straight20=42콤보는 SB overpair를 이미 이김. **09-26** BB 우위 이유: «5-6-7 연결 콤보가 BB에만 남는다»가 아니라 **SB가 오픈하지 않는 BB 핸드(T7o, 97o, 87o, 76o, 74s, 43s 등)가 공통 보유분 위에 더해진다**. live draws SB46.4/BB55.0%. **클래스 평균** 88 bet39.5%와 **개별 콤보** Q♠4♠/Q♥4♥ 54.7%를 구분(**09-26** «top three»가 아니라 «top individual combos», 다음 T♣9♣ 52.2%). 88 EQ 73.4%–75.2%, EQR133%–138% 범위 보존. **09-26** 90.4% 체크 이유: «얇은 밸류로 리드 후 레이즈 맞으면 손해»는 폐기 → A♣7♣·K♣7♣ 같은 얇은 밸류는 **벳과 체크가 0.03bb 이내**라 체크로 잃는 게 거의 없다. **09-26** 에이스 하이 «대부분» 페어만(A4·A8 OESD, A♦x♦ 플러시 드로우 예외). 체크 이후 BB bet/SB check-raise 결과는 없음; ⑦과 좌석도 다름. |
| ⑬ | 79.6% small +0.5% large=80.1%, check19.8. ⑪/⑫와 달리 **두 size가 실제 제공**됨. SB trips88/BB66, AK+AQ 16콤보; SB 독점 상위 trips는 AJo6 포함 22. AA는 quads 1콤보 SB만; full house는 양쪽 66 세 콤보+A6 여섯=9. KK의 얇은 value ≠ 약한 핸드는 전부 fold. one-ace94콤보 체크0.1%–26.0%, 평균12.3%, 0% check 콤보 없음. **09-26** BB 미스 51.5%는 **«벳이 압박하는 풀»이지 폴드율이 아니다** — 1/3팟에 MDF 약 75% 유지 → 균형 상대는 약 1/4만 폴드; **2bb 블러프 into 6bb 손익분기 폴드 25%**; 97bb는 «절대 위험 없음»이 아니라 턴·리버에 걸릴 수 있다. **09-26** «체크 후 노드는 이 스팟에 없다 — 시리즈 유일한 체크 후 벳 노드는 ⑦ 재솔브»(⑦ 링크 보존). bluff-catch 제안은 상대가 bluff를 섞는다는 **해석·가정**이며 후속 노드 결과가 아님. **09-26** FAQ: 솔버는 핸드에 «블러프» 라벨을 붙이지 않고 **모든 핸드에 빈도를 정하며, 레인지 벳 빈도는 그 평균**. |

## 5. ⑦ low-board-check-raise — 두 솔브의 출처 계약

### A. 앱의 사전 계산 교육 예제

- 화면: Study Spots의 View results. **플랍 첫 의사결정만 노출**하고 액션 칩을 눌러 후속 노드로 이동할 수 없다.
- Root: BB check **96.8% / 471.7콤보**, bet 1.8bb **3.2% / 15.3콤보**, total 487.
- EQ/EV/EQR·range/draw 구성은 §3 표. 이 출처에는 BTN bet 후 BB의 check-raise 결과가 없다.

### B. 2026-08-20 별도 재솔브

같은 설정을 직접 다시 풀었다: flop bet **33**, raise **60**, pot **55**, stack **975**(당시 내부 0.1bb 단위); **190 iterations · exploitability 0.16(내부 단위) = 0.016bb = 5.5bb 팟의 0.29% · 16-bit integer · 12 threads**. 독자 본문에는 EN에 실린 설정·출처 고지를 그대로 번역한다.

**09-26 변경**: EN note가 “exploitability 0.16, which is 0.29% of the pot” → “0.16 in the engine's internal units (tenths of a big blind) — 0.016bb, or 0.29% of the 5.5bb pot”으로 바뀌었다. DE note는 **현재 문장**을 옮긴다(«0,16 = 0,29%»처럼 단위 없는 등식 금지). spec §4-B-3의 «0.16 = 팟의 0.29%»는 같은 사실의 축약이다.

| 노드 | 액션 | 표시 빈도 | 표시 combos |
|---|---|---:|---:|
| 재솔브 BB root | Check | 98.0% | 477.5 |
| 재솔브 BB root | Bet 1.8bb | 2.0% | 9.5 |
| BB check 후 BTN | Bet 1.8bb | 63.0% | 316.5 |
| BB check 후 BTN | Check back | 37.0% | 186.5 |
| BTN bet 1.8bb 후 BB | Raise **to** 7.3bb | 14.9% | 69.7 |
| BTN bet 1.8bb 후 BB | Call | 65.6% | 314.6 |
| BTN bet 1.8bb 후 BB | Fold | 19.5% | 93.2 |

반드시 보존할 설명:

1. BTN/BB 후속표 **앞에** 다른 솔브라는 note가 있어야 한다. Root의 3.2/15.3을 재솔브의 2.0/9.5와 한 표로 합치지 않는다.
2. **표시 빈도와 combo 역산이 다르다**: EN 본문은 레이즈 노드에 대해 “69.7 ÷ 477.5 = 14.6%”, 표시는 14.9%라고 밝힌다. EN의 설명을 지우거나 표를 역산값으로 고치지 않는다.
   - 🟡 **PT 계약과의 차이(이번 실측에서 확인)**: PT §5는 «BTN도 316.5÷503=62.9%, 표시 63.0%», «bet의 4.06배 총액», «재솔브 root Check 98.0%»를 보존 항목처럼 적었지만, **현재 EN 본문에는 이 셋이 없다**(62.9%·4.06·98.0% 모두 원시 파일 주석·spec에만 있음; 09-13판 EN 본문에도 없었다). EN 본문은 레이즈 노드의 14.6/14.9 불일치, root lead 2.0%(9.5콤보), BTN 63.0%(316.5)만 말한다. DE는 **EN 본문 범위**를 번역하고 이 세 값을 새 본문 문장으로 추가하지 않는다. 위 노드 표는 대조용이다.
3. 7.3bb는 **raise-to 총액**. 60% pot raise이며 pot-sized raise가 아니다. 콜 뒤 pot=5.5+1.8+1.8=9.1; pot-size raise-to=10.9; 실제 `(7.3−1.8)÷9.1≈60%`. EN의 «5.5 + 1.8 = 7.3은 맞지만 거기서 팟 사이즈를 끌어내면 틀린다» 구조를 보존.
4. root lead 차이는 거의 무차별인 낮은-EV 액션의 수렴 차이다. 두 값은 «거의 lead하지 않는다»는 해석을 공유하지만 동일 출처 숫자가 아니다. 다른 지표(categories·draws·EQ·EV·EQR)가 소수점까지 같다는 설명도 보존한다.
5. set 66/55/22의 9콤보와 65s의 **6♦5♦·6♣5♣ 두 콤보**는 100% raise. 64s는 세 중 **두 콤보**가 100%. 98s EQ 35.8%/raise 99%+, 87s EQ 46.2%/raise 80–83%, J4s/Q4s 67–90%, 54s 74–75%. **09-26** 거샷 행 ≈ 90콤보 > 레이즈 총 69.7콤보 — «거샷 그룹 전체가 한 액션으로» 쓰지 않는다.
6. continuing 80.5%와 MDF 75.3%는 서로 다른 값. ⑥·⑩의 미측정 후속 노드에 이 14.9%를 옮기지 않는다. ⑬은 이제 «시리즈 유일한 체크 후 벳 노드 = ⑦ 재솔브»라고 링크로 가리킨다 — DE ⑬에서도 그 링크·문장을 살린다.
7. 재현 CTA도 둘로 나눈다: 사전 결과 열기 → 해당 root/range 확인; check-raise는 **직접 solve 버튼으로 실행 후 Check → Bet**. 사전 결과에서 칩을 누르면 되는 것처럼 쓰지 않는다. 버튼명은 de 앱 재캡처 축어로.

## 6. 기존 결정·허용되는 표현·오탐 방지

- **숫자 가까움은 오류 근거가 아니다.** 한 글에 형제 스팟, 반대 좌석, 다른 지표가 함께 있다. 원문과 **주어·보드·노드·지표**를 대조한다. spec §4-A-3의 «근접값 탐지» 폐기 결정을 되살리지 않는다.
- **98.4%가 정본**: ⑨에서 normalizer 가중 공식이 화면 기준. range weight로 계산한 98.5%로 되돌리지 않는다. Check 0.8도 벳합에서 빼서 0.9로 바꾸지 않는다.
- **⑧ 0.0%는 «화면값»이다(09-26)**: 원시 잔여 41콤보·K♥K♦ 0.09% 문장을 «0.0%와 모순»이라며 지우지 않는다. 반대로 «잔여가 있으니 체크 0.1%»로 반올림을 바꾸지도 않는다.
- **«prices out»은 한 장 odds 한정(09-26)**: ⑨에서 «38/40 드로우가 가격 밖»과 «38 중 30이 두 장 기준 28.5% 초과»는 모순이 아니다. 둘 중 하나를 지우거나 «폴드시킨다»로 합치지 않는다.
- **trips 표기 자체는 오류 아님**: 앱 row 이름을 인용하면서 언페어 board에서는 실제 set라고 밝히는 구조가 정본. «set는 드물다»는 허용되며 «paired-board trips가 드물다»라는 폐기 명제와 구분한다.
- **missed 표현 자체는 오류 아님**: ⑥에서 홀카드가 보드를 추가로 맞히지 못했다는 말은 정상. ⑩에서 전체 3-bet range에 overpair까지 없다고 만드는 것이 오류다. ⑩의 «세 콤보만 paired the board»는 기존 pocket overpair를 지우지 않는다.
- **fold와 no-made-hand·miss는 다르다**. no-made-hand에 ace-/king-high가 별도 분류되는지 행별로 읽는다. made-hand와 draw는 다른 분류축이며 합집합으로 무작정 더하지 않는다(③ 68.7% 단락이 09-26에 이 점을 명시). **09-26** ②·⑬은 «미스/노메이드 비율 = 폴드율»을 MDF로 명시적으로 반박한다 — DE에서 그 괄호를 생략하지 않는다.
- **MDF는 자동 호출 빈도·실측 fold율이 아니다**. pure-bluff 가정, 이후 equity 실현, 후속 노드 미계산을 같이 보존한다. «MDF 60,2%이므로 58,3% folds» 같은 인과는 금지. ⑨ MDF는 «상한»이 아니다(09-26 삭제).
- **EQR은 pot 점유율이 아니다**. 높은 EQR을 더 높은 EV/더 좋은 스팟으로 자동 번역하지 않는다. ⑨의 EV 하락과 EQR 상승이 명시적 반례다. ⑩의 EQR 시소는 «에퀴티 고정일 때» 한정(09-26).
- **caller→raiser와 board를 함께 본다**. ④의 BB를 전체 range 우위로, ⑪의 높은 bet을 OOP 오프너라는 역할만으로 일반화하지 않는다. ⑫가 같은 자리의 반례다. ⑪의 옛 «필요조건» 문구를 되살리지 않는다(09-26).
- **small bet의 선택과 옵션 제한은 다르다**. ⑦⑪⑫에 큰 size가 없는 것은 솔버가 배제한 결과가 아니다. ⑬의 33%는 제공된 둘 중 작은 것이며, 더 작은 후보를 넣으면 빈도가 이동할 수 있다.
- **후속 street의 예시 산술은 후속 street의 솔브가 아니다**. 차후 액션에 대한 해석·상대가 bluff한다는 가정·«this solve does not answer / is not in this solve» 문장은 전부 유지한다 — 09-26에 이런 문장이 ①②④⑩⑫⑬에 새로 늘었다.
- **블로커 «설명»은 09-26에 두 편에서 철회됐다**: ⑤(«콜링 레인지를 얇게 해 체크»)·⑥(«J6s 등은 BTN trips를 안 막는다»). 옛 번역본이나 기억에서 이 논리를 가져오지 않는다. 현재 EN은 «표는 믹스를 보여줄 뿐 원인을 분리하지 않는다»/«블로커 규칙이 아니다»가 결론이다.
- **앱 스팟 설명문은 전략 정본이 아니다**. DE 이름·버튼은 현재 de 앱 축어로 가져오되 옛 note의 폐기 전략 명제를 복사하지 않는다.
- **시리즈 총편 수를 제품 문구에 새로 하드코딩하지 않는다**. `GTO_SERIES`에서 계산하는 UI 규율과, 특정 비교표가 선택한 «일곱 스팟»이라는 통계 범위는 구분한다. 기존 비교 범위를 무단 변경하지 않는다.
- **내부링크·이미지 경로는 언어 누수가 아니다**. `broadway-board-strategy` 같은 영문 slug를 DE 단어로 바꾸지 않는다. 표기 검사는 평가된 본문/메타와 경로를 구분한다. 카드 표기 `T`(Q♠J♦T♠ 등)는 EN 그대로 둘지 «10»으로 바꿀지 브리프에서 한 번 정하고 13편 통일.
- **DE 소수 쉼표는 슬래시·범위와 함께 깨지기 쉽다**: «37,6–42,9%», «7,6–9,2%», «95,9–97,9%», «0,016bb» 처럼 범위·내부 단위 값도 전부 쉼표로. 비율 `X:1`은 terms §3대로.

### 이전 브리프의 미종결 소스 지적은 확정 정정으로 취급하지 않음

번체 브리프 §6-B.7이 **EN 역발견 후보**로 적은 문구 중 현재 EN에 아직 남은 것: ⑨ “32 combos of A-K and A-J”(1회), ⑩ “nearly double”(1회), ⑪ 362.1(4회). 09-26 L-2b(원장 68행)가 이들을 고치지 않았다는 사실도 «오류 확정»이나 «정상 판정»을 뜻하지 않는다. 이 계약은 그것들을 새로 판정하거나, DE 집필자가 수치/전략을 임의 정정하도록 허용하지 않는다. 발견 시 담당자가 **같은 원문 자리·기존 판정**을 대조하고 별도 기록한다.

## 7. 링크·이미지 매핑

- 시리즈의 slug는 불변. `/en/blog/<slug>` → `/de/blog/<slug>`, `/en/solver` → `/de/solver`.
- 현재 EN이 본문에서 링크하는 시리즈 밖 slug는 **10개 — 09-15와 같은 집합**이다. 오늘 `lib/posts-de/<slug>.ts` 존재와 `lib/posts-de/index.ts`의 import + `DE_POSTS` 배열 등록을 **10/10 확인**했다.

| 대상 slug | 링크하는 EN 편 | de 파일 | de index | de title(대상 readnext 라벨 후보) |
|---|---|---|---|---|
| holdem-continuation-bet | ①(2)·③·④·⑥·⑦·⑨·⑪ + readnext ①② | ✅ | ✅ | Continuation Bet (C-Bet): Wann du am Flop feuerst, wie viel und wann du checkst |
| holdem-position-play | ①·②·③·⑧·⑨·⑪ + readnext ① | ✅ | ✅ | Positions-Strategie: In Position vs Out of Position |
| holdem-drawing-odds | ③·④·⑤·⑨ | ✅ | ✅ | Drawing Odds im Poker – Die Chancen, jede Hand zu floppen und zu treffen |
| holdem-3bet | ⑥·⑧·⑩ | ✅ | ✅ | 3-Betting im Poker: Wann, wie viel und wie du eine 3-Bet konterst |
| holdem-hand-rankings | ⑥(2) | ✅ | ✅ | Pokerhände-Reihenfolge im Texas Hold'em – … |
| holdem-pot-odds | ⑥·⑨ | ✅ | ✅ | Pot Odds berechnen im Poker – die 10-Sekunden-Methode |
| holdem-equity | ① | ✅ | ✅ | Equity im Poker erklärt – Win%, Fold Equity und Realization |
| holdem-implied-odds | ⑤ | ✅ | ✅ | Implied Odds beim Poker – wenn ein schlechter Preis ein guter Call ist |
| holdem-betting-actions | ⑦ | ✅ | ✅ | Poker-Aktionen im Texas Hold'em: Check, Call, Raise, Fold |
| holdem-strategy | ⑩ | ✅ | ✅ | Texas Hold'em Strategie: Die 5 Entscheidungen hinter jeder gewonnenen Hand |

- 시리즈 13편의 de 파일은 아직 0편이다(`lib/posts-de/`에 없음). 시리즈 내부 링크·readnext는 13편을 한 배포에 함께 등록할 때 성립한다 — 일부만 먼저 배포하면 404 링크가 생긴다.
- 존재 확인이 키워드 배정 확정을 뜻하지는 않는다. 링크 대상을 바꿀 필요가 있으면 DE 키워드 팩에 사유를 남기며, `check-gto-structure.mjs`의 target-set 예외(`LOCALE_LINK_TARGETS`)도 의도적으로 다룬다. DE는 10개 대상이 전부 있으므로 **예외 없이 EN 대상 그대로**가 기본이다.
- readnext **표시 라벨은 대상 DE의 실제 title**(위 표는 오늘 값 — 집필 시 다시 읽는다). 시리즈 밖 공용 hero 경로는 그대로, 시리즈 이미지 `-en.webp`만 대응 `-de.webp`로 바꾼다.
- 이미지 key 순서: ①srp-dry-ace / ②srp-dry-king / ③srp-broadway / ④srp-middle-connected / ⑤srp-monotone / ⑥srp-paired / ⑦srp-low-rainbow / ⑧3bp-ace-king / ⑨3bp-dynamic / ⑩3bp-low / ⑪sb-king-mid / ⑫sb-connected / ⑬sb-paired-ace.
- 히어로 `/images/gto-<key>-oop-de.webp`, 본문 chart `/images/gto-<key>-ranges-de.webp`, 장면 이미지 §8. IP 프리플랍 matrix를 postflop 액션 chart로 설명하지 않는다.
  - 참고(작업 트리 관측, 이 문서 작성 시각): `public/images/`에 `-oop-de`·`-ranges-de` 26장과 `-scene-de` 3장(srp-dry-ace·3bp-ace-king·sb-paired-ace)이 **미추적 상태로** 있다 — 다른 레인이 만드는 중으로 보인다. 이 계약은 그 파일들을 검수하지 않았다.

### 7-A. de 필라 역링크 4자리 — 발행 때 연다

`docs/locale-intentional-diffs.md`의 GTO 역링크 행(2026-08-19 · 08-26 · 08-27 · 09-08 실측 행)은 de에 대해 아직 **«의도적 편차 유효»**(09-08: «de·id·pt는 GTO 0/4라 세 행이 여전히 유효» — 이후 id·pt는 09-15에 해소, de만 남음)이다. 오늘 de 필라 파일을 직접 확인했다 — **4자리 모두 링크·문단이 없다(예상대로)**:

| 필라(de) | 열 자리 | EN 현재 문장(재저작 원본) | de 현재 상태 | 링크 수 EN / de |
|---|---|---|---|---|
| holdem-continuation-bet | ① A-high | range advantage 절: “On A-7-2 rainbow a solver has the caller checking 98.2% of its range … [top pair, still checking](/en/blog/a-high-board-cbet …)” | 문단 없음 · `a-high-board-cbet` 링크 0 | 8 / 6 |
| holdem-continuation-bet | ⑨ 3bet sizing | wet-board sizing 절: “A solver handed two sizes on Q♥T♥7♠ in a three-bet pot puts [98.4% of its range into the two-thirds bet](/en/blog/3bet-pot-bet-sizing …)” | 문단·링크 없음. 단 de 표 1행(OOP 3-Better «über 97% … Q♥T♥7♠ und 8♦5♣2♠»)이 같은 솔브를 링크 없이 인용 중 | (위와 합산) |
| holdem-position-play | ⑦ check-raise | OOP 절 “**1. [Check-raise](/en/blog/low-board-check-raise) is your equalizer.**” | `low-board-check-raise` 링크 0. de 본문·표(203행·220행)가 ⑬·⑨⑩ 수치를 링크 없이 인용 중 | 12 / 11 |
| holdem-3bet | ⑧ range c-bet | 요약 6번 “The three-bettor still often bets its [entire range on the flop](/en/blog/3bet-pot-cbet)” | `3bet-pot-cbet` 링크 0 | 6 / 5 |

- 열 때는 «옮겨 붙이기» 금지 — 각 필라의 de 문맥에 맞게 재저작하고 수치는 §3 값(98,2% · 98,4%)을 쓴다. 열고 나면 `locale-intentional-diffs.md` 해당 행에 «de 해소»를 기록한다(PT 09-15 기록 방식).
- 위 «링크 없이 인용 중»인 de 문장은 이번 계약 범위 밖이다. 역링크를 열 때 같은 자리에서 수치·주어(어느 좌석·어느 보드)를 §3과 대조한다.

## 8. 스팟 장면 이미지 자리 (de 시범)

DE 발행은 각 편에 **본문 이미지를 1장 더** 넣는다: 테이블 장면 이미지(좌석·플랍·팟·스택·누가 먼저 행동하는지). **첫 조건표(9×2 / 11×3 / 11×4 / 12×4) 바로 위**에 둔다. EN에는 없는 **de 전용 의도적 편차**다(본문 이미지 EN 1 → DE 2).

| # | 첫 조건표가 있는 H2 (EN 원문) | 첫 표 | 표 앞 문단 | 기존 ranges chart 위치(참고) |
|---|---|---|---|---|
| ① | H2#1 “What conditions produced these numbers?” | 9×2 | 1 | H2#4 “What is a dry board, and why does this one favor the raiser?” |
| ② | H2#1 “What conditions produced these numbers?” | 9×2 | 1 | H2#4 “How do the two ranges differ?” |
| ③ | H2#1 “What conditions produced these numbers?” | 9×2 | 1 | H2#5 “How much of each range is drawing?” |
| ④ | H2#1 “What conditions produced these numbers?” | 9×2 | 1 | H2#4 “So does this flop favor the big blind?” |
| ⑤ | **H2#1 “What is a monotone board in poker?”** — 공통 조건 H2가 없고, 정의 문단(“A flop where all three cards share the same suit…”) 바로 뒤에 9×2 조건표가 있다 | 9×2 | 1 | H2#6 “Who holds more flushes here?” |
| ⑥ | H2#1 “What conditions produced these numbers?” | 9×2 | 1 | H2#4 “Why check when you hold more trips?” |
| ⑦ | H2#1 “What conditions produced these numbers?” | 9×2 | 1 | H2#4 “How do the two ranges differ on 6-5-2?” |
| ⑧ | H2#1 “What conditions produced these numbers?” | 11×3 | 1 | H2#6 “What does the button actually have?” |
| ⑨ | H2#1 “What conditions produced these numbers?” | 9×2 | 1 | H2#6 “What does the button actually have?” |
| ⑩ | H2#1 “What conditions produced these numbers?” | 9×2 | 1 | H2#5 “Why are all the sets on the other side?” |
| ⑪ | H2#1 “What conditions produced these numbers?” | 11×4 | 1 | H2#5 “How do the two ranges differ?” |
| ⑫ | H2#1 “What conditions produced these numbers?” | 12×4 | 1 | H2#4 “Why does this board favor the big blind?” |
| ⑬ | H2#1 “What conditions produced these numbers?” | 11×4 | 1 | H2#4 “Who holds more trips?” |

- 모든 편에서 첫 표는 **첫 H2 안**에 있고, H2 직후 한 문단 → (장면 이미지) → 조건표 순서가 된다. stripe·Quick answer는 첫 H2보다 위라 영향 없다.
- 장면 이미지 내용은 그 편 조건표와 **같은 값**이어야 한다(§3): ①–⑦ BTN 오픈 2,5bb·BB 콜·팟 5,5·스택 97,5·BB가 먼저 행동 / ⑧–⑩ BB 3-Bet 11bb·BTN 콜·팟 22,5·스택 89·SPR 4,0·BB가 먼저 / ⑪–⑬ SB 오픈 3bb·BB 콜·팟 6·스택 97·SPR 16,2·**SB가 먼저**(SB = 오프너 = OOP). 보드는 §3 «보드 그대로» 열(무늬 포함). 글자 든 이미지이므로 CLAUDE.md §9-1 가드레일(텍스트 최소·스펠링 육안 검수·온브랜드·§13 동일 적용)과 §9 규격(webp·폭 ≥750·q82·alt는 구체 상황 묘사)을 따른다.
- 파일명은 작업 트리 시범본이 쓰는 `/images/gto-<key>-scene-de.webp`를 따른다(브리프에서 확정).
- ✅ **10-02 준비 회차에 반영됨**: `SCENE_LOCALES = ['de']` · 장면은 img 비교에서 빼고 `scene` 축(정확히 1장)으로 센다 · 셀프테스트 26/26. 아래는 반영 전 진단 원문.
- **게이트 영향**: `check-gto-structure.mjs`는 `img`를 EN과 «개수 동일»로 비교한다(306행) → 현재 그대로면 DE 13편 전부 `img en=1 de=2`로 🔴. 발행 전에 de 전용 예외(+1, 위치 = 첫 표 직전)를 게이트에 명시적으로 넣고 셀프테스트를 추가해야 한다 — 예외 없이 «무시»하지 않는다. `check:image-reuse`에서는 새 장면 이미지 13장이 hero/본문 재사용이 아님을 확인한다. 발행 시 `docs/locale-intentional-diffs.md`에 «de GTO 13편 본문 이미지 +1(장면)» 행을 추가한다.

## 9. 집필 완료 시 필요한 확인

1. 평가된 DE Post와 EN Post를 비교해 §2의 구조, 표 열 수, 디렉티브 순서, 링크 대상, highlight 위치를 확인한다. 이미지 수는 **EN+1**(§8)이 정상이다.
2. `node scripts/check-gto-numbers.mjs --locale=de`(de 소수 쉼표 정규화 지원 확인됨 — `normalizeNumericText`의 `["pt","id","de"]`)와 `node scripts/check-gto-structure.mjs --locale=de`(§8 예외 반영 후)를 실행한다. 통과는 문장 속 숫자 귀속을 자동 보증하지 않는다.
3. 각 숫자의 **플레이어·board·node·단위**를 사람 검수로 대조한다. §4의 고지(특히 **09-26** 표시 항목)와 ⑦ 두 솔브 고지는 구조 검사와 별개다.
4. DE `masterUpdated`는 **2026-09-26**(13편 공통)으로 맞추되 날짜 일치만으로 번역 완료라 판정하지 않는다. 원문 내용과 직접 대조한다. 집필 중 EN 해시가 §2와 달라지면 이 계약을 먼저 갱신한다.
5. de 문체 게이트(`check-de-style`)·`audit:hard --locale=de`·`check:images`·`check:image-reuse`를 돌린다.
6. 최종 전체 검수에서는 배치 간 용어·조건표 라벨·CTA·readnext 제목을 통일하고, 값·주어·한계 고지는 각 원문에 남겨 둔다. 13편 등록과 §7-A 역링크 4자리는 같은 배포에서 연다.
