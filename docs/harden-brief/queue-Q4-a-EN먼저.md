# 🧰 queue 회차 Q4-a 브리프 — EN-먼저 묶음 I (미결 · 동형)

> 규격 = `docs/hardening-protocol.md` §3-⑥ · 레인 부록 §7-F · 회차 표 = `docs/harden-queue-진행.md` §1 Q4-a 행
> A 구간 실측일 **2026-09-12** · 측정자 = queue 레인(Opus) · 1차 출처는 전부 **원문 직접**(§12-B — 요약 금지)

---

## 0. 🔴 이 브리프의 첫 번째 산출은 «대부분 이미 닫혀 있었다»는 실측이다

Q4-a 재료의 뼈대는 **M-089 §4 「EN 동형 30건」**이었다. 30건을 **EN 현행 원문으로 전건 재판정**한 결과:

| | 건수 | 근거 |
|---|---:|---|
| **이미 닫힘**(EN 현행 문장이 pt 정정본과 같은 뜻) | **27** | 아래 §1 표 — 슬러그·행·현행 축어 |
| **아직 열림** | **2** | #8 bad-beat 「That's a player」 · #25 positions 「Two orbits later」 |
| **기각**(EN 문면은 결함 아님) | **1** | #18 implied-odds 「four to a flush」 |

🪶 **왜 이렇게 됐나**: 09-04 M-089 이후 `en-first-queue` §2-A~2-C 묶음(ar 11 · ja 7)과 우편함 회차(X-2 외)가
EN을 이미 고쳤는데, **M-089 §4 목록은 그 뒤로 한 번도 재측정되지 않았다.** 핸드오프 「대회·사실 판정」의
「🔴 EN 동형 30건 — 남은 것 = …」 행이 **낡은 채 여러 회차를 넘어왔다.**
→ 규율 후보(§5 헤드 요청): **«남은 것 N건» 형태의 미결 행은 재료를 옮길 때가 아니라 «회차 A 구간에서» 다시 센다.**
   memory 「★「없다」 보고 전 탐지방법부터 의심 · ★「있다」 보고 전에도 똑같이」의 또 한 번의 실증이다.

**같은 방식으로 Q3 이관분 3건 중 2건도 이미 닫혀 있었다** (§3).

---

## 1. M-089 §4 「EN 동형 30건」 전건 재판정표 (2026-09-12 EN 현행 원문)

| # | EN 슬러그 | 판정 | EN 현행 축어(또는 자리) |
|---:|---|---|---|
| 1 | 3bet | ✅ 닫힘 | L98 「QQ+ and AK + A5s-type bluffs; flat the JJ/AQ/TT middle」 |
| 2 | 3bet | ✅ 닫힘 | L172 「you'll be on the receiving end **about as often as** you 3-bet yourself」 |
| 4 | 3bet | ✅ 닫힘 | L216 「**Weak blockers and little backup equity** — you must fold to every 4-bet」 |
| 6 | all-in-rules | ✅ 닫힘 | L47 「the player who went all-in **for less** is excluded」 |
| 7 | bad-beat | 🔴 **재론 금지** | 결재 15 — ≈63% 유지. EN L92 = 「~63% (1.7:1)」 실측 확인. **~62%로 내리지 마라** |
| 8 | bad-beat | 🟠 **열림** | L142 「That's a player making **losing decisions**」 — 한정어 없음 → §2-B |
| 9 | betting-actions | ✅ 닫힘 | L132 「multiple motions **that include a return to your stack** … — or a deceptive gesture meant to induce action out of turn (Rule 103)」 |
| 10 | betting-actions | ✅ 닫힘 | L229 FAQ 동일 두 요소 보유 |
| 11 | card-counting | ✅ 닫힘 | L96 「an out **can't be sitting on the board** … exposed *off* the board」 |
| 13 | drawing-odds | ✅ 닫힘 | L86 「two players … **both** flopping a set lands near ~1%」 |
| 16 | flush-vs-straight | ✅ 닫힘 | L158 「**36 combinations** (~0.00139% of five-card hands; about 0.028% by the river in Hold'em)」 |
| 18 | implied-odds | ⚪ **기각** | L165 「the card that completes your draw also freezes the action (**four to a flush**, paired board)」 — 보드에 네 장이 깔린 뒤를 말하므로 문면이 참. pt가 «na mesa»를 덧댄 건 명료화지 정정이 아니다 |
| 19 | implied-odds | ✅ 닫힘 | L186 「hits 19.6% of the time **on the river** (9 ÷ 46)」 + L105 표 「19.6% (turn → river)」 |
| 20 | implied-odds | ✅ 닫힘 | L225 「Against an all-in they're zero heads-up, **and against a short stack there's very little left**」 |
| 21 | kicker | ✅ 닫힘 | L109 「your side cards **stop deciding anything**」 · L196 FAQ 동일 |
| 22 | kicker | ✅ 닫힘 | L19 「his king **outkicked** me」 — 보드 카드를 적지 않아 「K vs 보드」 오도가 성립하지 않는다 |
| 23 | outs | ✅ 닫힘 | L151 「**one** card in a flush + gutshot, **two** in a flush + open-ender」 |
| 24 | position-play | ✅ 닫힘 | L113·L116 SB/BB 두 답 분리 — 「worst seat **to play a hand from**」 |
| 25 | positions | 🟠 **열림** | L29 「**Two orbits later** I was on the button」 — §13급 산수 오류 → §2-A |
| 26 | positions | ✅ 닫힘 | L172 「the **UTG+1 and higher** seats exist only at full-ring tables」 |
| 27 | pot-odds | ✅ 닫힘 | L55 「≈ 35% to hit **with two cards to come and no more betting**」 |
| 28 | pot-odds | ✅ 닫힘 | L125 「on a *single* card from the flop (9 ÷ 47) … only **19.1%**」 |
| 29 | pot-odds | ✅ 닫힘 | L203 FAQ 「only when you're already going to see both cards (all-in, or no more betting — 35%)」 |
| 30 | probability | ✅ 닫힘 | L180 「about 1 in 72,193 as a five-card hand (about **1 in 3,590 by the river** in Hold'em)」 |
| 31 | split-pot-rules | ✅ 닫힘 | L68 「It's **common enough** to get its own section」 — 최상급 없음 |
| 32 | split-pot-rules | ✅ 닫힘 | L93 「That is **a high bar for a call — and a low one for a fold**」 (M-089 §5 «barra alta» 별건도 같이 닫혔다) |
| 36 | starting-hands-chart | ✅ 닫힘 | L161 「a solid beginner target is playing roughly 15–20% **of the hands you're dealt**」 + L260 「these premium groups alone are only about 5%」 |
| 37 | straddle | ✅ 닫힘 | tldr 「outside cash games it's **almost never** allowed」 — 단정 아님 |
| 39 | strategy | ✅ 닫힘 | L152 「A call has **no fold equity** — it never folds anyone out」 |
| 40 | strategy | ✅ 닫힘 | L212 FAQ 동일 |

🔴 **되돌리지 마라**: #33·34·35(shc 77 자리)는 **결재 1로 종결**됐다(Q1 `16e8a9ac` — 13%를 살리고 목록의 «지위»를 고쳤다). 다시 열지 마라.

---

## 2. 이번 회차가 **실제로 고치는** 자리 — 10건

> 각 항목 = ⓐ EN 현행 축어 ⓑ 처방 ⓒ 1차 출처 ⓓ 전파 대상 ⓔ 판정 근거.
> 🔴 **B 구간은 이 브리프 밖의 사실을 쓰지 마라.** 더 필요하면 A로 돌아온다.

### 2-A. `holdem-positions` — 「Two orbits later」 (M-089 #25 · §13급 산수)

- ⓐ EN **L29**: `Two orbits later I was on the button with the same J♥ J♠.`
- ⓑ → `Three hands later I was on the button with the same J♥ J♠.`
- ⓒ **직접 계산**(1차): 버튼이 매 핸드 한 자리씩 왼쪽으로 옮겨 가므로 내 자리의 «이름»은 매 핸드 한 칸씩 뒤로 간다.
  버튼을 좌석 B라 두면 SB=B+1 · BB=B+2 · **UTG=B+3**. 다음 핸드 버튼 B+1 → 나는 **BB** · 그다음 → **SB** · 그다음 → **버튼**.
  ⇒ UTG에서 버튼까지는 **정확히 3핸드**. 「2오빗」(= 9핸드 테이블이면 18핸드)이면 **같은 UTG 자리**로 돌아온다.
- ⓓ 전파 **6**: de es id ja zh zh-hant (**pt는 이미 «Três mãos depois»** — 09-04에 고쳤다. 건드리지 마라)
- ⓔ 도입 경험담이라 §13 카드는 불변(`J♥ J♠` 그대로). 바꾸는 것은 «몇 핸드 뒤인가» 하나뿐이다.

### 2-B. `holdem-bad-beat` — 두 자리 (M-089 #8 · 결재 15 이행)

**① L142 한정어** (M-089 #8)
- ⓐ `That's a player making **losing decisions** — exactly the opponent you want.`
- ⓑ → `Most of the time that's a player making **losing decisions** — exactly the opponent you want.`
- ⓔ 근거: 뒤에서 «behind»로 들어간 돈이 **항상** 손실 결정은 아니다 — 팟오즈가 맞는 드로우 콜은 승률이 낮아도 +EV다
  (같은 코퍼스 `holdem-pot-odds` L55·L125가 그 국면을 정의한다). pt는 09-04에 «Na maioria das vezes»로 고쳤다.
- ⓓ 전파 **6**: de es id ja zh zh-hant (pt 완료)

**② L92 표 행 문구** (🔴 **결재 15 이행** · `settled-decisions` §1-B)
- ⓐ `| **Overpair vs a flush draw (borderline)** | Overpair on the flop | ~63% (1.7:1) | Their 9-out flush draw fills on the river |`
- ⓑ 4열만 → `Their nine flush outs — plus live side cards that can pair — get there by the river`
- ⓔ 🔴 **수치 ~63% (1.7:1)는 손대지 마라**(결재 15 재론 금지 · ~62%로도 65.0%로도 되돌리지 않는다).
  고치는 것은 **«왜 63%인가»를 말하는 행 문구**뿐이다: 9아웃만 세면 오버페어 승률은 65.0%(= 1 − 34.97%)여야 하는데
  실측은 61.6~63.4%다(M-089 §2-B의 990조합 전수열거 3케이스) — **차이를 만드는 것이 «드로우 쪽 추가 라이브 아웃»**이고,
  현행 문구 「9-out flush draw fills」는 그걸 말하지 않아 표의 숫자와 이유가 어긋나 있다.
- ⓓ 전파 **7**: de es id ja pt zh zh-hant (**pt도 대상** — 결재 15가 8로케일 동형이라 적은 자리)

### 2-C. `holdem-blind-meaning` — 「Nobody gets to skip their turn」 (X-1 · 검수장 MA-131 RISKY)

- ⓐ EN **L80** 끝문장: `Nobody gets to skip their turn.`
- ⓑ → `Nobody gets to skip their turn by sitting out — step away and you owe the blinds you missed when you come back.`
  (🔴 앞 절 「everyone pays both blinds once per orbit」 하이라이트와 문단 구조는 **그대로 둔다**)
- ⓒ **1차 출처 축어**(레포 보유 · `docs/sources/`):
  - WSOP **Live-Action Rules 2026 · 160**: *"A participant who misses any or all blinds can resume play by either posting all the blinds missed or waiting for the big blind. If you choose to post the total amount of the blinds, only the big blind is live."*
  - WSOP **Live-Action Rules 2026 · 155**(Dead button): *"The big blind is posted by the participant due for it, and the small blind and button are positioned accordingly, **even if this means the small blind or the button is placed in front of an empty seat**, giving the same participant the privilege of last action on consecutive hands."*
  - WSOP **Tournament Rules 2026 · 85**: *"Tournament play will use a dead button. Dead Button is defined as a button that cannot be advanced due to elimination of a Participant or the seating of a new Participant into a position between the small blind and the button."*
  - 🪶 같은 룰북 **86 Dodging Blinds**가 「고의로 피하면 두 블라인드 몰수 + 1라운드 페널티」를 두는 것 자체가
    **«피할 수 있으니 금지한다»의 증거**다 — 단정형이 못 버티는 이유.
- ⓔ **왜 «dead button»을 새로 안 쓰나**: EN은 이미 **L42**에 「(The one exception is a dead button, …)」를 갖고 있다.
  여기서 필요한 것은 **L131 「What Happens If You Miss Your Blind? (Dead Blinds)」 절과의 연결**이고,
  같은 글이 두 번 같은 예외를 설명하면 §5 교열 렌즈가 중복으로 잡는다.
- ⓓ 전파 **9**(파일 보유 전부 · 각 로케일 현행 축어):

  | 로케일 | 자리 | 현행 축어 |
  |---|---|---|
  | ar | L81 | `لا يُعفى أحد من دوره.` |
  | de | L83 | `Niemand kann sich davor drücken.` (🪶 **L181 FAQ에도 「drücken kann sich niemand」** — 같이 본다) |
  | es | L81 | `Aquí no se libra nadie.` |
  | fr | L81 | `Personne n'y coupe.` |
  | id | L81 | `Tidak ada yang bisa melewatkan gilirannya.` |
  | ja | L93 | `誰も順番を飛ばせません。` |
  | pt | L81 | `Ninguém pula a vez.` |
  | zh | L91 | `谁都躲不掉。`(직답 블록 안) |
  | zh-hant | L82 | `誰都跳不過自己那一輪。`(직답 블록 안) |

  🔴 **zh·zh-hant는 직답 블록 안이다** — 길이 산식(마크다운 장식·링크·라벨을 걷어내고 **공백을 전부 지운 뒤의 문자 수** · 중문 **60~130자**)을 깨지 않게 **짧게** 덧댄다.
  🔴 **각 로케일에 이미 「놓친 블라인드」 절이 있다**(es L132 · id L134 · ja L153·158 · pt · de) — 그 절의 **자기 어휘를 승계**한다. 새 용어를 만들지 마라.

### 2-D. `holdem-when-to-fold` — 셀프체크 도입문 (ja 회차 13 §5-K 1 · **D유형**)

- ⓐ EN **L141**: `Before any big call, run this checklist. If the honest answers keep pointing to "I only beat a bluff here," you have a fold:`
- ⓑ → `Before any big call, run this checklist. If the honest answers keep pointing to "I only beat a bluff here," you're holding a bluff-catcher — and the last question below is how you decide whether to call it off:`
- ⓔ **왜 D유형인가**: 바로 아래 L153이 정반대를 말한다 — 「"I wouldn't bet it" means *bluff-catcher*, **not fold**」.
  블록만 읽는 독자(직답·발췌·AI 요약)는 「블러프만 이긴다 = 폴드」를 갖고 간다. 실전에서 **1.5x 팟 오버벳에 37.5%**면
  콜이 이익인 자리를 통째로 버리게 만든다. 셀프체크 ⑤(L148)는 이미 옳게 적혀 있으므로 **도입문만** 고친다.
- ⓓ 전파 **7**: de es id ja pt zh zh-hant

### 2-E. `holdem-straddle` — 「buys last action postflop」 (ja 회차 14 §5-L 1)

- ⓐ 두 자리:
  - **L69 캡션**: `A button (Mississippi) straddle posts from the button — the one straddle that **buys last action postflop too**`
  - **L88**: `a button Mississippi straddle **buys last action both preflop and postflop** — the one straddle with a real positional case`
- ⓑ → 「산다」가 아니라 「내주지 않는다」로:
  - L69 캡션 → `… — the one straddle that doesn't cost you your postflop position`
  - L88 → `… a button Mississippi straddle adds the **last word preflop** to the postflop position the button already has — the one straddle with a real positional case`
- ⓔ **버튼은 원래 포스트플롭 마지막이다.** 스트라들이 «사는» 것은 프리플랍 마지막 액션뿐이고, 버튼 스트라들의 진짜 가치는
  «포지션을 잃지 않는 것»이다. EN 자신이 L63에서 이미 그 축을 정확히 세워 뒀다:
  「for a **UTG straddle, the last-action privilege is preflop only**」 — 두 자리가 그 축과 어긋나 있다.
- 🔴 **L85 각주**(`A Mississippi straddle only buys last action postflop when it is posted on the button`)와
  **L89**(`the button keeps last action all the way down`)는 **손대지 마라** — L89는 이미 「keeps」로 정확하고,
  L85는 「버튼에서 포스팅할 때만」이라는 조건절이 본질이라 문면이 참이다. **세 자리를 다 고치면 같은 말이 세 번 된다.**
- ⓓ 전파 **6**: de es id pt zh zh-hant (**ja는 회차 14가 이미 고쳤다** — 워크트리 미커밋 0 확인 09-12. 대조만 하고 건드리지 마라)

### 2-F. `holdem-outs` — 15아웃 행의 도출 (ja 회차 14 §5-L 2)

- ⓐ EN **L73** 표 행: `| Flush + open-ended straight | 15 | The monster — two draws at once |`
- ⓑ 3열만 → `9 flush + 8 straight − 2 shared cards — the monster`
- ⓔ **자매 행이 이미 산수를 보여 준다**: L76 `| Flush + gutshot | 12 | 9 flush + 4 gutshot − 1 shared card |`.
  같은 표에서 한 행만 산문이라 «왜 17이 아닌가»가 표 안에서 안 닫힌다(본문 L151·FAQ L210이 뒤늦게 설명한다).
  ja는 회차 14에서 이미 고쳤다.
- ⓓ 전파 **6**: de es id pt zh zh-hant (ja 완료)

### 2-G. `holdem-tiebreak-rules` — 「Rule 85」 룰북 한정어 (핸드오프 「대회·사실 판정」)

- ⓐ EN **L232**: `(WSOP tournaments skip the draw: ==Rule 85== starts the button at the first stack to the dealer's right …)`
- ⓑ → `==Tournament Rule 85==`
- ⓒ 1차 출처 = `docs/sources/wsop-2026-tournament-rules.txt` **85**: *"At the start of an Event, the button will begin in the seat with the first chip stack to the dealer's right. There will be a draw for the button with 3, 2 and 1 table(s) remaining."*
  🔴 같은 레포에 **Live-Action 룰북의 155~158번대가 버튼·블라인드를 따로 규정**하고 있어, 한정어 없는 「Rule 85」는 어느 룰북인지 못 가린다.
- ⓓ 전파 **4**: es ja zh zh-hant (**de·id·pt는 이미 「Tournament Rule 85」** — 이번에 EN을 맞춰 «가짜 드리프트»를 없앤다.
  핸드오프가 「다음 EN 실변경 때 함께」로 미뤄 둔 자리이고, 이 회차가 그 «실변경»이다)

### 2-H. `ept-barcelona-2026-guide` — €330 (J#8 · K3 · **1차 출처 확보 완료**)

- ⓐ 현행 EN: **L84** 비교표 `| Events range | €330 – €100,000 | €330 – €100,000 |` · **L92** H2 `From €330 to €100,000`
  ↔ 그 절 일정표(L100~106) **7행의 최저가는 €825**. €330 이벤트가 본문에 **없다.**
- ⓒ 🔴 **1차 출처 = 공식 일정 DOM 직독**(요약 금지 · §12-B):
  `https://www.pokerstarslive.com/ept/barcelona/schedule/` — 레포 Playwright로 렌더 후 `document.body.innerText`를
  직접 파싱(이벤트 행 **131건 전수** · 2026-09-12). 바이인 필터 목록과 대조해 누락 없음 확인.
  - **#76 · August 29 (Saturday) · 12:00 · `€330 Deep Stack - Unlimited Re-Entry` · 바이인 €330 · 스타팅 스택 50,000**
  - €330 **미만**은 전부 새틀라이트·프리롤이다: €190 #2 「Qualifier to PokerStars Open Main Event」 ·
    €175 #68 「Qualifier to Women's €1,100 — SEAT ONLY」 · €0(프리롤). ⇒ **€330 = 자체 이벤트 중 최저가**가 맞다.
  - 🪶 **그래서 처방 ①을 쓴다**(J#8이 적어 둔 두 갈래 중). 「H2·비교표를 €825로 내린다」(처방 ②)는 **기각** — 범위가 옳고 표가 빠졌던 것이다.
- ⓑ 일정표(L100 위)에 **한 행 신설**:
  `| €330 Deep Stack (#76) | Aug 29 | **€330** | Cheapest entry in the festival — one day, unlimited re-entry |`
  그리고 L100 Cup 행 4열 `Best entry point for first-timers` → `Best **multi-day** entry point for first-timers`
  (🔴 €330 행이 생기면 「최저가 입구」 자리가 겹친다 — 한 글 안에서 두 행이 같은 주장을 하면 안 된다)
- 🪶 **덤으로 일정표 7행 전건을 공식 일정과 대조했다(전부 일치)** — 이 글 검수 미결이던 「전수 대조」가 닫힌다:

  | 우리 표 | 우리 값 | 공식(#번호 · 일자) |
  |---|---|---|
  | PokerStars Cup | Aug 20–21 · €825 | #24 Day 1 **Aug 20** → Final **Aug 21** · €825 |
  | PokerStars Open Main Event | Aug 16–22 · €1,650 | #1 Day 1/A **Aug 16** → Final **Aug 22** · €1,650 |
  | PokerStars Open High Roller | Aug 21–23 · €2,700 | #27 Day 1/A **Aug 21** → Final **Aug 23** · €2,700 |
  | EPT Mystery Bounty | Aug 25–27 · €3,250 | #48 Day 1 **Aug 25** → Final **Aug 27** · €3,250 |
  | EPT Main Event | Aug 22–29 · €5,300 | #31 Day 1/A **Aug 22** → Final **Aug 29** · €5,300 |
  | EPT High Roller | Aug 27–29 · €10,300 | #65 Day 1 **Aug 27** → Final **Aug 29** · €10,300 |
  | EPT Super High Roller | Aug 21–23 · €100,000 | #28 Day 1 **Aug 21** → Final **Aug 23** · €100,000 |

  🔴 **J#8이 「미검증 신호」로 남겨 둔 「EPT Mystery Bounty €1,650 Aug 27–28」은 오독이었다** —
  공식에는 **두 개의 Mystery Bounty**가 있다: `EPT Mystery Bounty (€1,000 Mystery Bounty)` **€3,250**(#48 · Aug 25–27 · 우리 표)와
  별개의 `Mystery Bounty (€500 Mystery Bounty)` **€1,650**(#64 · Aug 27–28). **우리 표가 맞다. 되돌리지 마라.**
  이것이 §12-B가 말하는 「WebFetch 요약 응답을 근거로 쓰지 마라」의 실물이다 — 요약이 두 이벤트를 하나로 합쳤다.
- ⓓ 전파 **7**: de es id ja pt zh zh-hant (각 로케일 일정표에 같은 행 · 통화·표기는 그 파일 관행 승계)
- 🔴 **이번 회차에서 하지 말 것**: 「PokerStars Cup」 → 공식명 「PokerStars **Open** Cup」 개명. 실측으로 공식명을 확인했으나
  EN 4자리 + 8로케일이라 **Q4-a 범위 밖**이다 → §5 헤드 요청에 축어와 함께 등재.

### 2-I. 경쟁 페이지 언급 3곳 (Q3 이관 · `en-first-queue` §3)

- ⓐ·ⓑ **판정 = 3곳만 고치고 나머지 «most guides»류는 남긴다**:

  | EN 자리 | 현행 | 처방 | 사유 |
  |---|---|---|---|
  | `holdem-rake` **L48** | `here's the comparison **no single competitor page** lays out:` | `here's the comparison in one place:` | 🔴 «competitor page»는 **우리 SEO 브리프의 내부 어휘**다. 독자 글에 남을 말이 아니다 |
  | `holdem-tournament` **L211** | `This is what **no other guide** tells you.` | `This is the part most beginners only learn the hard way.` | 검증 불가능한 전칭 부정. 「아무도 안 알려 준다」는 참·거짓을 잴 수 없다 |
  | `holdem-3bet` **L136** | `This is the map **most articles never draw**` | `This is the map beginners rarely get drawn for them` | 같은 전칭 부정. 훅은 살리고 주어를 «독자»로 돌린다 |

- ⚪ **남기는 것**(기각 · 사유 기록): `3bet` L172 「almost every article skips」 · `kicker` L137 「most guides fumble」 ·
  `kicker` desc 「most guides get wrong」 · `outs` L159 「the section most guides skip」 · `apt-incheon` L155 「most guides skip」.
  전부 **완화형**(most/almost)이고 차별점을 말하는 정상적인 편집 어법이다. **전면 제거는 E-E-A-T 목소리를 깎는다.**
- ⓓ 전파: **로케일마다 갈려 있다**(실측) — `rake` 문구는 de·id만 보유 · `tournament` 문구는 de·id·ja·pt 보유.
  EN을 고친 뒤 **보유한 로케일만** 맞춘다(없는 곳에 새로 넣지 않는다).

---

## 3. Q3 이관분 — 3건 중 2건은 이미 닫혀 있었다 (2026-09-12 실측)

| 재료 | 판정 | 근거 |
|---|---|---|
| EN↔pt FAQ 개수 드리프트(bubble 9↔7 · short-stack 9↔7 · tournament 9↔8 · icm 8↔7) | ✅ **닫힘** | `npm run check:structure -- --only=faq --locale=pt` = **핵심 결손 0편**. 직접 계수도 일치: bubble 9↔9 · short-stack 9↔9 · icm 8↔8. 🪶 `holdem-tournament`만 **pt 10 ↔ EN 9**(pt가 하나 더 갖고 있다 — 결손이 아니라 «잉여»라 게이트가 원리상 안 본다) → §5에 편차 판정 요청 |
| en `holdem-game-order` 「who bets first」 미수신 | ✅ **닫힘** | `seoTitle: "Who Bets First in Texas Hold'em? — The Order of Play"` · desc·tldr·tags 전부 보유(`updated: 2026-09-11` · 파일 머리 주석에 라쿠 실측 근거 동봉). `en-first-queue` §3의 그 불릿은 **낡았다** → §5에 삭제 요청 |
| EN 경쟁 페이지 언급 3곳 | 🟠 **열림** | → §2-I |

---

## 4. §13 자리 — 마감(C) 손검산 대상

| 슬러그 | 자리 | 검산 내용 |
|---|---|---|
| `holdem-positions` | L29 | **좌석 산수** — UTG→버튼 = 3핸드(§2-A ⓒ 재현). 카드 `J♥ J♠` 불변 |
| `holdem-bad-beat` | L92 표 행 | **수치 무변경 확인**(~63% · 1.7:1) + 문구만 바뀌었는지 diff로 |
| `holdem-outs` | L73·L76 표 | 9 + 8 − 2 = **15** · 9 + 4 − 1 = **12** 재검산. L103·L133·L149·L210의 15아웃 값(31.9% / 54.1%)은 **불변** |
| `ept-barcelona-2026-guide` | 일정표 7행 + 신설 1행 | §2-H 대조표 전건(공식 #번호·일자·바이인) |
| `holdem-when-to-fold` | L153 | 37.5% = 1.5팟 오버벳 필요 지분 — **손대지 않는다**(도입문만 바뀐다) |

## 5. 이 회차에서 **하지 말 것**

- 🔴 `bad-beat` **~63% (1.7:1)** 수치 변경 — 결재 15 재론 금지. ~62%도 65.0%/1.86:1도 아니다.
- 🔴 `starting-hands-chart` 13%·58·112·172 — 결재 1로 종결. 열지 마라.
- 🔴 `en-first-queue` §1 ② apt «개막 전 마감» — EN이 틀렸다. EN을 따라 로케일을 되돌리지 마라.
- 🔴 `straddle` **L85 각주·L89** — 문면이 참이다(§2-E).
- 🔴 EPT 「PokerStars Cup」 개명 — 범위 밖(§2-H).
- 🔴 「most guides / almost every article」류 완화형 — 남긴다(§2-I).
- 🔴 **ja `holdem-outs`·`holdem-straddle`** — 회차 14가 이미 고쳤다. 대조만.
- 🔴 slug · 이미지 경로 · readnext 대상 · 백틱(§12-A) · `public/sitemap.xml` 커밋.

## 6. 스탬프

- EN `updated` — **고치는 파일 전부 «내용 변경»이라 올린다**(구두점·별표만인 파일 없음 · `settled-decisions` §1-C 문턱 통과).
- 전파본 `updated` = **전파일(2026-09-12)** · `masterUpdated` = **대조한 EN `updated` 날짜**(= 2026-09-12).
