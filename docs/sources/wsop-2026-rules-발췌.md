# 1차 출처 축어 발췌 — WSOP 2026 룰북 2종

> **왜 여기 두나 (M-089 요청 ③ 답)** — 본체 렌즈가 「103조 원문이 레포에 없으니 조문 요소를 넣지 마라」고 지적했고,
> 검수장·본체 둘 다 같은 PDF를 각자 열어 같은 문장을 읽고서야 그 지적을 기각했다. **원문을 안 갖고 있으면 매 회차 같은 논쟁이 재발한다.**
> 그래서 «인용한 조문만» 축어로 남긴다 — PDF 전문이나 텍스트 전체는 두지 않는다(용량·저작권·낡음 모두 불리하다).
>
> 🔴 **규율 세 가지**
> 1. **여기 있는 문장만 «축어 확인됨»으로 인용한다.** 없는 조문을 기억으로 인용하지 마라 — 새로 열어 여기에 추가한 다음 쓴다.
> 2. **두 문서는 다른 룰북이다.** 조 번호가 겹치지 않는다 — 인용할 때 어느 쪽인지 반드시 밝혀라(아래 §0 사고 사례).
> 3. **매년 바뀐다.** 시즌이 넘어가면 값이 아니라 **조 번호부터** 흔들린다. 재확인 없이 다음 시즌에 재사용 금지.

| | |
|---|---|
| 취득일 | 2026-09-04 (검수장 독립 취득 — 본체 M-089 §4와 별개로 재현) |
| 도구 | `curl` → `pdftotext -layout` (poppler) |
| A. **Tournament Rules** | `https://wsop.gg-global-cdn.com/wsop/pdfs/2026-WSOP-Tournament-Rules.pdf` · 511.357 B · 텍스트 2.197줄 |
| B. **Live Action Rules** | `https://assets.wsopcdn.com/wsop/853ee602-e1e9-4019-a0cf-381419d805c6.pdf` · 528.028 B (캐시게임 — 표제 「2026 World Series of Poker Official Live Action Rules · Paris Las Vegas」) |

---

## §0. 🔴 먼저 읽어라 — 조 번호가 문서마다 다르다

같은 사실(「보드를 플레이해도 홀카드를 테이블해야 한다」)이 **A는 75조 · B는 172조**다.
2026-09-04 EN 3편 GPT 교차검수가 이 사실을 **「WSOP Rule 172」**로 인용했는데, A 룰북만 열어 본 사람에게는 «없는 조문»으로 보인다 —
실제로는 **B를 인용한 것이고 축어로 맞다**(검수장 재현 확인). 조 번호 불일치를 «오탐»으로 처리할 뻔한 자리다.

---

## §A. Tournament Rules (토너먼트)

### 103조 — 스트링 벳/레이즈 (pdftotext L1288–1292)

> **103. String Bets and Raises:** Dealers will be responsible for calling string bets/raises. All Participants at the table
> are encouraged to assist in calling a string bet/raise if a dealer fails to identify it. A floor person must verify string
> bets/raises called by a Participant. **A string bet/raise is defined as attempting a bet or raise in multiple movements
> that include a return to a Participant's stack without a prior verbal declaration of intent or visual deception
> intended to induce action out of turn before a Participant's action is complete.**

**판독 규율** — 정의에 요소가 **둘**이다: ①스택으로 되돌아가는 다중 동작 + 사전 구두 선언 없음 ②부정한 시각적 기만.
「vários movimentos」(다중 동작)만 쓰면 조문보다 **넓다**. 조 번호를 달고 인용하는 문장은 두 요소를 다 담아야 한다.
⚠ 「많은 룸이 앞으로 두 번만 밀어도 스트링을 부른다」는 **하우스 실무**이지 103조가 아니다 — 섞지 마라.
· 반영: `lib/posts-pt/holdem-betting-actions.ts` 본문·FAQ 2곳(`e3f5a3a2`) · 원장 `ledger/pt/holdem-betting-actions.md` #20·#42.
· 🔴 **EN·7로케일은 아직 「multiple motions」만 쓴다** — EN-먼저 회차 대상.

### 90.d조 — 구두 선언의 구속력 (L1108 부근)

> **d. Verbal Declarations / Action in Turn:** Verbal declarations in turn regarding wagers are binding.
> Participants must always act in turn. Action out of turn will be binding if the action to that Participant has
> not changed. A check, call or fold is not considered action changing.

· 90.a: 「Bets are by verbal declaration and/or pushing out chips. If a Participant does both, whichever is first defines the bet.」
· 90.c: 「declaring a specific amount only is the same as silently pushing out an equal amount.」

### 75조 — 보드 플레이 시 쇼다운 의무 (L964)

> **75. Playing the Board at Showdown:** When playing the board, a Participant must table all hole cards to get part
> of the pot.

· 같은 사실의 캐시게임판 = **§B 172조**(문안이 더 강하다 — «relinquish any claim»).

### 56조 — 플로어 재량 (L743)

> **56. Floor People:** WSOP Personnel are to consider the best interest of the game and fairness as the top priority
> in the decision-making process. Unusual circumstances can on occasion dictate that decisions in the interest of
> fairness take priority over the technical rules.

---

## §B. Live Action Rules (캐시게임)

### 172조 — 보드를 플레이해도 홀카드를 보여야 한다 (L854)

> **172.** If you are playing the board, you must still show your hole cards face up. Otherwise, you may relinquish any
> claim to the pot.

**판독 규율** — 「보드가 베스트5면 남은 전원이 자동으로 나눠 갖는다」는 서술은 **절차를 빠뜨린다.**
홀카드를 테이블하지 않고 muck 하면 지분을 잃을 수 있다. 「automatic chop」이라는 표현을 쓸 때는 이 의무를 함께 적어야 한다.
· 대상: `holdem-split-pot-rules`(EN·8로케일) · `holdem-kicker`의 «jogar a mesa» 절.

### 홀덤 정의 (L820–823)

> The board cards are community cards, and a participant may use any five-card combination from among the board
> and personal cards to make the best possible five-card poker hand. A participant may use all of the board cards and
> no personal cards to form a hand playing the board.

---

## 갱신 방법

1. 위 URL을 `curl -sSL -o x.pdf` → `pdftotext -layout x.pdf x.txt`.
2. **인용하려는 조문만** 여기에 축어로 옮기고, 줄 번호와 취득일을 적는다.
3. 조 번호가 바뀌었으면 **바뀐 사실 자체를 기록**한다(지우지 마라 — 지난 시즌 인용을 검증할 때 필요하다).


## §C. 2026-09-06 es 파일럿 본부 재현으로 취득한 조문 (curl → pdftotext -layout · 바이트 A 511,357 / B 528,028 일치)

> 쓰임 = `ledger/es/{propina-dealer-poker,poker-casino-primera-vez,cuanto-dinero-llevar-poker}.md` · 재현 보고 = `reports/검수-es-파일럿재현-2026-09-06.md`. 🔴 두 룰북은 조 번호가 겹치지 않는다 — 어느 룰북인지 같이 적어라.

### C-1. Tournament Rules (A)

- **5조 Fees**(L177–179): 「The payment required for participation in any WSOP Event is the full amount of the Event's Buy-In, which includes an administrative fee to cover necessary WSOP staffing, materials, and related administrative costs. Participants may be subject to additional fees depending on method of payment used to purchase a ticket」
- **38조**(L459–462): 「Non-value WSOP chips are used for all Events and are the exclusive property of the Host Property and may not be removed from the Event area. Participants found to be transferring chips from one Event to another or from one Participant to another, or removing chips from play for any other reason, including but not limited to, taking chips as souvenirs, will be subject to penalty in strict accordance with Rules 40, 113, and 114.」
- **58조 Official Language**(L751): 「The English-only rule will be enforced at all WSOP tables during Tournament while cards are in play.」
- **59조 Official Terminology**(L754–757): 「Official terms are simple, unmistakable, time-honored declarations like: bet, call, fold, check, all-in, pot (in pot-limit only), and complete. Regional terms may also meet this standard. The use of non-standard language is at Participant's risk because it may result in a ruling other than what the Participant intended.」 🔴 **7개 — `raise` 없음**(es 글 「siete palabras」가 맞다).
- **69조 Declarations**(L928–929): 「Cards speak to determine the winner. Verbal declarations of hand value are not binding at showdown. However, deliberately miscalling a hand may be penalized.」
- **90.a**(L1092–1094): 「Bets are by verbal declaration and/or pushing out chips. If a Participant does both, whichever is first defines the bet. If simultaneous, a clear and reasonable verbal declaration takes precedence, otherwise the chips play.」 · **90.d**(L1108): 「Verbal declarations in turn regarding wagers are binding. Participants must always act in turn.」
- **103조**(L1290–1292 · §A 와 동일): 「A string bet/raise is defined as attempting a bet or raise in multiple movements that include a return to a Participant's stack without a prior verbal declaration of intent or visual deception intended to induce action out of turn before a Participant's action is complete.」

### C-2. Live Action Rules (B · 캐시게임 · Paris Las Vegas)

- **서두**(L13): 「… is limited to persons 21 years of age and older, with proof of age」
- **29조**(L132–134): 「Only English may be spoken at the table while cards are in play. This also applies to those who are watching a game and communicating with a participant in the game. Speaking a foreign language while any hand is in progress is not allowed, regardless of whether a participant has cards or not.」 🔴 «폴드한 뒤»도 테이블에 핸드가 진행 중이면 금지 — es `poker-casino-primera-vez` #28 의 반례.
- **31조**(L139): 「House Rake is 10%, up to $6 maximum unless the game is time raked with the rate indicated on the placard.」
- **64조**(L262): 「All games are table stakes unless otherwise posted. Only the chips in front of a participant at the start of a deal may play for that hand.」
- **87조**(L352–356): 「Participants must sign up at the Live Action podium to play in a live action game. Participants may also join our online waitlist via bravopokerlive.com. Any participant signing up online will have one hour to check in at the live action podium. … Phone-ins are not allowed. It is the participant's responsibility to be in the area to hear their name called.」 · **88조**(L358): 「Permission from the floor supervisor or a live action board operator is required before taking a seat in a game.」
- **104조**(L469–470): 「When a participant enters a new game they must make at least a full buy-in and they must get their first buy-in at the live action cage before entering a game.」 · **104.a**(L472–473): 「New participants entering Limit games will be required to post the big blind to receive a hand. New players entering in No-Limit or Pot-Limit games will not be required to post.」
- **143조**(L679): 「To win any part of a pot, a participant must show all of his cards face up on the table unless that participant has the only remaining live hand.」 · **144조**(L681–683): 「Cards speak; a properly tabled hand determines its own value. … Verbal declarations regarding the contents of a hand are not binding. However, intentionally miscalling a hand in an effort to mislead another participant into discarding a [winning hand …]」
- **전문 검색**: tip / tips / gratuity / toke → A·B 모두 **0건**(팁 규정 없음).

## §D. 2026-09-07 레인 회차(id 회차 1 · es 회차 2 · rules 클러스터)로 취득한 조문 — 본부 로컬 사본 축어

> 쓰임 = `ledger/id/{holdem-all-in-rules,holdem-betting-actions,holdem-blind-meaning,holdem-game-order,holdem-showdown-rules}.md` · `ledger/es/` 같은 6편. 재현 보고 = `reports/검수-레인재검증-id회차1-es회차2-2026-09-07.md`.
> 🔴 **바이트는 경로와 함께 적는다**(DECISIONS §4-A3): A = `wsop.gg-global-cdn.com/wsop/pdfs/2026-WSOP-Tournament-Rules.pdf` **511,357 B · 2,197줄** (⚠ `assets.wsopcdn.com` 사본은 511,397 B · 2,195줄 — 스폰서 로고 조항 34줄 차이 · 아래 조문은 양쪽 동일) · B = `assets.wsopcdn.com/wsop/853ee602-…pdf` **528,028 B · 2,068줄**.
> 🔴 **TDA 2024 v1.0 은 본부 네트워크에서 미취득**(`pokertda.com` 응답 없음 — 09-06·09-07 두 번). 레인이 쓴 사본 = `https://www.thelodgepokerclub.com/tda-rules`(2022 Longform 게재). TDA 인용 행은 확신도 «중간» + 만료를 둔다. 본진 취득에 성공하면 이 절에 47-A·16·17-A 를 축어로 추가하라.

### D-1. Tournament Rules (A)

- **70조 Face up for All-Ins**: 「All cards will be turned face up once a Participant is all in and all betting action for the hand is complete. If a Participant accidentally folds/mucks their hand before cards are turned up, WSOP Personnel reserves the right to retrieve the folded/mucked cards if the cards are clearly identifiable.」 → es showdown #60
- **84조 Non-Standard Folds**: 「Any time before the end of the last betting round of a hand, folding in turn when there's been no bet to you (ex: facing a check or first to act post-flop) or folding out of turn are both binding folds and may be subject to penalty in accordance with Rules 40 & 113.」 → es game-order #66·#72
- **85조 Button**: 「At the start of an Event, the button will begin in the seat with the first chip stack to the dealer's right. There will be a draw for the button with 3, 2 and 1 table(s) remaining. Tournament play will use a dead button. Dead Button is defined as a button that cannot be advanced due to elimination of a Participant or the seating of a new Participant into a position between the small blind and the button.」 → es blind #5 · id blind #23 · 본체 MB-002 ③(tiebreak 버튼 카드 뽑기)
- **87조 Button in Heads-Up Play**: 「In heads-up play, the small blind is on the button and acts first pre-flop and last on all other betting rounds. The last card is dealt to the button.」 🔴 **(09-09 정정 · 검수장 MA-125 ⑦ · zh 회차 1 레인 지적) B 157조와 동치가 아니다** — B 157조(L770)는 「In heads-up play with two blinds, the small blind is on the button.」 **한 문장뿐**이고 행동 순서·마지막 카드 절이 없다. 헤즈업 «순서» 판정은 A 87조로만 한다.
- **96조**: 「In no-limit and pot-limit, all raises must be equal to or greater than the size of the previous bet or raise on that betting round. An all-in wager of less than a full raise does not reopen the betting to a Participant who has already acted.」 → es all-in #59 · GPT 오탐 #4 반박 근거
- **108조 Protect Your Hand**(후단): 「If the Participant initiated a bet or raise and hasn't been called, the uncalled bet or raise will be returned to the Participant.」 → es all-in #52·#61
- **109조**: 「Cards thrown into the muck may be ruled dead. However, a hand that is clearly identifiable may be retrieved and ruled live at management's discretion if doing so is in the best interest of the game.」 · **110조**(딜러 실수·오정보 시 «추가 노력») → es showdown #43

### D-2. Live Action Rules (B)

- **105조**: 「Short buys are not allowed.」 → es game-order #103
- **156조**: 「A participant posting a blind in the game's regular structure has the option of raising the pot at the first turn to act. Although chips posted by the big blind are considered a bet, the option to raise remains if someone is all-in with a bet of less than the minimum raise.」 → es betting #69(WRONG)
- **173조**: 「The number of raises in any betting round is unlimited.」 · **NO-LIMIT 절**: 「the amount of a wager is limited only by the table stakes rule, so any part or all of a participant's chips may be wagered」 → es all-in #52 · id all-in #57
- **175조**: 「All raises must be equal to or greater than the size of the previous bet or raise on that betting round, except for an all-in wager. A participant who has already acted and is not facing a full-size wager may not subsequently raise an all-in bet that is less than the minimum bet …」
- **177조**: 「Multiple all-in wagers, each of an amount too small to qualify as a raise, still act as a raise and reopen the betting if the resulting wager size to a participant qualifies as a raise.」 → id all-in #31(플레이어별 조건)
- **179조**: 「A wager is not binding until the chips are released to the felt, unless the participant has made a verbal statement of action. However, a forward motion with chips in hand may result in a participant being forced to leave the minimum amount allowable to call the bet, at the Floor Supervisor's discretion」 → id GPT 오탐 #3 반박 근거

## §E. 2026-09-07 (4) — A SECTION VIII 베팅 포맷 · B 151~153 (zh 파일럿 · es 회차 3 판정 근거 · 본부 로컬 사본 축어)

> 🪶 **미러 URL 동일성**: `https://assets.wsopcdn.com/wsop/1a72ba28-781c-409d-a9c3-5ca13c4c5718.pdf` 는 A 룰북과 같은 문서다(zh 레인이 96조 축어 글자 단위 일치로 확인 · 2,195줄 판 = 스폰서 조항 34줄 차이). 🔴 **용어집 「DEALER BUTTON … highest card by rank and suit」 항(L2052)은 assets 판에만 있고 gg-global-cdn 판(본부 사본)에는 없다** — 인용할 때 판을 밝혀라(DECISIONS §4-A3).

### E-1. A SECTION VIII — TOURNAMENT BETTING FORMATS (L1584~)

- **NO-LIMIT**(L1594–1595): 「a. The maximum amount a Participant can bet or raise is only limited by the amount of chips they have in their possession. **b. The minimum bet is equal to the amount of the Big Blind.**」 → zh #32·#86 · zh-hant #44·#97 · es beginners #25 「任意金額 / cualquier cantidad」 = 하한 누락(EN L181 동형 · **EN-먼저**)
- **POT LIMIT**(L1599–1601): 「a. The maximum amount a Participant can bet or raise is **limited to the amount of the pot**. b. The minimum bet is equal to the amount of the Big Blind. c. The Dealer MUST tell a Participant the total of the pot when asked by the Participant facing action.」 → 「최대 = 현재 팟」 초심자 정의는 이 조문과 같은 형식(GPT 오탐 #5 반박 · 본부 09-07 (1) 판정과 일치)

### E-2. B 151~153 (버튼·오드 칩)

- **151조**: 「Dealing a card to each participant is used to determine who moves to another table or who gets the button in a new game. If the cards are dealt, the order is clockwise starting with the first participant on the dealer's left, **the button position is irrelevant**.」 → es split-pot #30 「desde el dealer」→「desde el botón」 정정의 심판(«딜러 왼쪽» ↔ «버튼 왼쪽» 구분)
- **152조**: 「An odd chip will be broken down to the smallest unit used to make blinds in the game being dealt. i.e. Since dollar chips are used to make the small blind in $2-$5 NL, an odd chip will be broken down to dollar units in the event of a tie.」
- **153조**: 「If two or more hands tie, an odd chip will be awarded as follows: In a button game, **the first hand clockwise from the button** gets the odd chip. In a stud game, the odd chip will be given to the highest card by suit in all games. …」 (= A 73조 · 오드 칩은 «버튼» 기준)
