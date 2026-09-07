# 경화 브리프 — 🇹🇼 zh-hant 회차 2 「족보」 클러스터 6편

> 규격 = `docs/hardening-protocol.md` §3-⑥. **B 구간은 이 파일 하나만 읽는다.**
> 🔴 EN 파일을 다시 열지 마라 — 필요한 EN 원문은 전부 **축어**로 아래에 옮겨 놨다.
> 작성 = A 준비(Opus · 2026-09-07). 실측 근거 = `docs/keyword-bank/zh-hant-hand-rankings-cluster.md` ·
> 판정·형식 = `docs/local-voice/zh-tw.md` §1.

---

## 0. 이 회차 전체에 걸리는 규율 (편마다 반복하지 않는다)

### 0-1. 드리프트 결론 — **이번 회차는 «한 편에 몰려 있다»**
프로토콜 §3-③대로 **diff 실물**로 쟀다(EN 커밋 전건 열람 + zh-hant 원문 문자열 대조).

| 편 | 현행 mU | EN updated | 미반영 | 이미 반영 | 판정 |
|---|---|---|--:|--:|---|
| holdem-hand-rankings | 08-12 | 08-12 | **0** | 1 | ✅ |
| holdem-flush-vs-straight | 08-12 | 08-12 | **0** | — | ✅ 변경 없음 |
| holdem-kicker | 07-18 | **08-26** | **1** | 2 | 🔴 소급 |
| **holdem-tiebreak-rules** | 07-19 | **09-07** | **9** | — | 🔴🔴 **이 회차의 본체** |
| holdem-split-pot-rules | 09-06 | 09-06 | **0** | — | ✅ 변경 없음 |
| holdem-reading-the-board | 08-11 | 08-11 | **0** | 4 | ✅ |

→ 회차 1과 같은 패턴(«날짜만 밀린» 편이 다수)이 **또 확인됐다** — 6편 중 4편이 이미 반영이었다.
→ 다만 `tiebreak-rules`는 진짜다. EN이 08-30에 **자체 경화를 한 번 돌았고**(`c96af74d`) 09-07에
   FAQ 2개를 더 고쳤다. zh-hant는 그 이전(07-19) 판이다.

### 0-2. 직답의 «모양» (판정 = `local-voice/zh-tw.md` §1-B)
① **상단 `> **快速解答**` 블록 1개** — 도입부 뒤·첫 H2 앞. **60~110자** 자기완결.
② **아래 편마다 지정한 H2 3개 직후** — 굵게 시작하는 60~110자 단락(라벨 없음). 🔴 지정 외 금지.

**현행 상태 → 이번 회차가 할 일**

| 편 | 지금 | 할 일 |
|---|---|---|
| hand-rankings | 상단 블록 **없음**(L51 `> **一句話結束爭論**`은 첫 H2 **안**의 인사이트 박스다) | 상단 `快速解答` **신설** · L51 박스는 **그대로 둔다**(§17 훅) |
| flush-vs-straight | L34 `> **快速回答**` | 라벨만 **`快速解答`으로** (내용 유지) |
| kicker | 없음 | **신설** |
| tiebreak-rules | 없음 | **신설** |
| split-pot-rules | L26 `> **一句話先講**` | 라벨만 **`快速解答`으로** |
| reading-the-board | L42 `> **一句話答案**` | 라벨만 **`快速解答`으로** |

🔴 **직답 쓸 때 4대 함정**(회차 1이 전부 밟았다 — `local-voice/zh-tw.md` §1-C-2):
① **바로 아래 문단을 요약하지 마라**(회차 1의 직답 15개 중 13개가 축어 중복이었다).
   그 절이 답하는 질문에 **다른 각도로** 답한다.
② 🔴 **중복을 피하다 «답»을 지우지 마라.** H2가 던진 질문의 답을 **먼저** 담고 그 다음 각도를 튼다.
   반드시 **그 절의 표·목록과 대조**하라(회차 1은 직답이 자기 절 표와 반대되는 말을 하는 자리를 10곳 만들었다).
③ 🔴 **`**` 안에 `**`를 넣지 마라** — 렌더러 정규식이 non-greedy라 **가운데 강조만 굵기가 빠진다.**
   안쪽 강조는 「」나 == 로.
④ 상단 블록은 **tldr과 다른 각도**여야 한다(렌더러가 tldr을 별도 박스로 그린다 — 요약 상자가 두 개 뜬다).

### 0-3. 🔴 H2를 질문형으로 바꾸지 마라
대만은 명사형 검색이다(`local-voice/zh-tw.md` §1-A · 헤드 판정 등재본).
**신규 H2도 명사형으로 만든다** — 이번 회차의 EN 신규 H2 `Do Suits Matter in Poker?`도
질문형으로 직역하지 않는다(문안은 §1-A에 지정).
↔ **이미 질문형인 H2를 명사형으로 되돌리지도 않는다.**

### 0-4. 어휘 — 이 코퍼스가 이미 쓰는 말 (전수 grep 정본 = `local-voice/zh-tw.md` §1-E)
이번 회차에 걸릴 만한 것: `蓋牌`(弃牌 아님) · `機率`(概率 아님) · `底池` · `籌碼는 顆·枚`(張 아님) ·
`撲克室`(牌房 아님) · `面額`(面值 아님) · `前一次`(直前 아님) · `6 人桌`·`滿桌`(短桌·滿員桌 아님).
🆕 **`疊牌（Counterfeiting）`** — 대만 상위 2사가 소제목으로 쓰는 말(뱅크 §3). tiebreak L126이 이미
「被疊掉了」를 쓰고 있으니 **괄호 병기 1회**로 용어를 명시한다.

### 0-5. 금지 (전 편 공통)
백틱 · `slug` · 이미지 경로·파일 · `:::readnext` 대상 · 새 출처 창작 · 「完美整理／總整理」류 제목 ·
**카드·확률·계산 변경(§13은 언어 불변 — EN 축어)** · `desc` 160자 초과 · 백슬래시+달러 이스케이프 신규 투입.

### 0-6. 마지막에 편마다
`masterUpdated`를 지정 날짜로 **편마다 Edit**(🔴 일괄치환 금지):
kicker → **2026-08-26** · tiebreak-rules → **2026-09-07** · 나머지 4편은 **현행 유지**.
`updated`는 6편 전부 **2026-09-07**.
🔴 **EN `updated`보다 앞선 날짜를 mU에 쓰지 마라**(드리프트 게이트가 그 글을 영구히 ✅로 통과시킨다 —
회차 1이 `holdem-all-in-rules`에서 한 번 올렸다가 되돌린 자리).

---

## 1. `holdem-tiebreak-rules` — mU 2026-07-19 → **2026-09-07**
### 🔴 이 편이 이번 회차의 본체다. 시간의 절반을 여기 써라.

### 1-A. 드리프트 (EN diff 실물 · 축어)

**[미반영 ①] 신규 H2 하나가 통째로 없다.** EN이 08-30에 추가했다.
EN 위치 = 「Does the 5th Card Matter in Poker?」 **다음**, 「When Your Kicker Doesn't Play」 **앞**.
zh-hant 대응 위치 = L140 `## 第五張踢腳牌的決定性` 절 **뒤**, L150 `## 你的踢腳不算數的時候` **앞**.

EN 축어 전문:

> ## Do Suits Matter in Poker?
>
> **No — not for deciding who wins. Suits do exactly one job in Texas Hold'em: five of the same suit make a flush. Beyond that they carry no rank, so two hands that match rank for rank always split the pot, and no card ever outranks another because of its suit.**
>
> The question keeps coming up because suit order genuinely exists in poker — just not in this game. Stud and razz use it to decide who brings it in and who takes an indivisible chip. Hold'em uses it for neither.
>
> The cleanest proof is the one chip that *cannot* be divided. The 2026 WSOP tournament rules say ==g:*"In button games with 2 or more high or low hands, the odd chip goes to the first seat left of the button"*== (Rule 73). Even when a pot physically will not split evenly, the rule reaches for **the seat**, not the suit — and the suit-based method in the back half of that same rule is written for stud and razz only.
>
> One more thing worth knowing: in Hold'em two flushes are always the *same* suit anyway, because all five community cards are shared and a board can't hold three hearts and three spades at once. So "my spades beat your hearts" is not a rule you lost to — it's a hand that cannot be dealt.

🔴 **H2 문안은 명사형으로**(§0-3): **`## 花色在德州撲克算不算大小`** 로 한다.
근거 = `德州撲克 花色大小` **50**(실측) + 대만 상위 글 vocus가 **첫 H2를
「先講這個坑：德州撲克的花色，不分大小」**로 잡는다(뱅크 §3).
🔴 **Rule 73 인용은 축어 그대로.** 조항 번호·인용문을 바꾸지 마라(1차 출처 · 회차 1이 「TDA 第 16 條」에서
번호를 빠뜨려 거울쌍 갈림을 만들었다).
🪶 이 절은 **이 글에 이미 있는 花色 FAQ 2문(L227·L231)과 겹친다** → [미반영 ⑨]에서 FAQ 쪽을 정리한다.

**[미반영 ②] 「順子의 위쪽 끝」 문장.** zh-hant L136 문단(輪子가 못 하는 두 가지) **앞**에 넣는다.
EN 축어: *"At the other end of the ladder, ==**the highest straight in poker is Broadway — A-K-Q-J-10**==. No straight beats it (though a flush or anything above it still does), and the wheel sits at the bottom, so every straight in the game ranks somewhere between those two by its top card alone."*

**[미반영 ③] `:::tiebreak` 첫 행(L84).**
현행: `皇家同花順|必定平手（分池）|-無踢腳牌`
EN 신판 축어: `Royal Flush|Two of them only happens when the board is the royal — everyone chops|-No kicker`
→ 「반드시 평수」라는 단정을 **「공패 자체가 로열일 때만 두 벌이 나온다」**로 바꾸는 정확성 수정이다.
번역 지침: `皇家同花順|只有公牌本身就是皇家同花順時才會出現兩副 —— 全桌分池|-無踢腳牌`

**[미반영 ④] FAQ 「德州撲克的平手怎麼比？」(L171~173)** — EN이 08-30에 재작성.
EN 축어: *"Three checks in order — hand rank, then the cards that make the hand, then kickers from the top down — and the first difference ends it. Just as important is what never enters the comparison: suits, who bet last, who sits closer to the button, and how many chips each player put in. If the five cards match rank for rank, the dealer chops the pot no matter what happened in the betting."*
→ 추가된 값 = **「비교에 절대 안 들어가는 것」 열거**(花色·마지막 베팅자·버튼과의 거리·투입 칩).

**[미반영 ⑤] FAQ 「兩人同對子誰贏？」(L179~181)** — EN 재작성.
EN 축어: *"The higher kicker — but check which of your cards actually reach the best five first. On A-Q-7-3-2 with a pair of aces, a player holding A-9 plays A-A-Q-9-7: the board's queen jumps ahead of their nine, so the nine is only the second kicker. Against A-K the pot is already decided at the first slot, and that nine is never compared at all. Three kicker slots exist; most pots end at the first one."*
🪶 §13 검산 완료(A 구간 · 2026-09-07): 보드 A-Q-7-3-2 + A·9 → 7장에서 베스트5 = **A-A-Q-9-7** ✓ ·
A-K 보유자 = **A-A-K-Q-9** ✓ · 첫 킥커 K vs Q에서 종결 → 9는 비교되지 않는다 ✓.

**[미반영 ⑥] FAQ 「兩人都兩對誰贏？」(L183~185)** — EN 08-30 재작성 + **09-07 재수정**(EN-먼저 처리분).
EN 최신 축어: *"Higher pair first, then the lower pair, then the one kicker — so aces-and-threes beats kings-and-queens even though the second pair is far smaller. The case that catches people is a double-paired board like K-K-9-9-5: unless someone holds a king, a nine, or a pocket pair above nines, every player has the same two pair, so the hand collapses to a single kicker and the best hole card at the table takes it — and if nobody's hole card beats the board's five, everyone plays the board and the pot is chopped. Two pair carries exactly one kicker, never two."*
🔴 **「unless someone holds…」 단서를 빼지 마라** — 이 단서가 09-07 EN-먼저 정정의 내용이다.
🪶 §13 검산 완료: K-K-9-9-5 보드에서 K 보유 → 풀하우스 · 9 보유 → 풀하우스 · 9 위 포켓페어(TT~QQ) →
K-K + 그 페어의 더 높은 투페어 ✓ · 그 외 전원 K-K-9-9+킥커 ✓ · 모두의 홀카드가 5 이하면 공패 승부 → 분할 ✓.

**[미반영 ⑦] FAQ 「第五張牌…重要嗎？」(L191~193)** — EN 재작성.
EN 축어: *"Yes — and it is the most common way a player loses a pot they were sure they had won. Three spots put the whole pot on the last card: a pair's third kicker, the lowest card of a flush, and the side card next to quads sitting on the board. It stops mattering only when the board's own cards outrank whatever you hold, at which point your hole cards drop out of the hand entirely and you are playing the board."*

**[미반영 ⑧] FAQ 「你能做出比對手更大的順子嗎？」(L207~209)** — EN 재작성(추상 → 실전 예시).
EN 축어: *"Yes, and in practice it happens when most of the straight is already on the board. Take a board of 5♦ 6♣ 7♠ 8♥ 2♦: a player with 9♣ 4♠ makes 9-8-7-6-5, while a player with 4♥ 3♦ makes 8-7-6-5-4 off the same four cards. Both of them 'made a straight'; only the top card was ever counted, so the nine takes it. Equal top cards mean the same straight and a chop."*
🪶 §13 검산 완료: 보드 5♦ 6♣ 7♠ 8♥ 2♦ · 9♣4♠ → 9-8-7-6-5 ✓ · 4♥3♦ → 8-7-6-5-4 ✓ ·
공유 4장(5·6·7·8) ✓ · 9 하이 승 ✓.
🔴 현행 zh-hant 답의 「6-5-4-3-2 贏 A-5 的輪子」·「百老匯」 부분은 **[미반영 ②]가 본문으로 흡수**하므로
FAQ는 EN 신판대로 **실전 예시형으로 교체**한다(중복 회피 — §0-2 ①).

**[미반영 ⑨] 花色 FAQ 2문 → 1문으로 통합.** EN은 08-30에 「Do suits matter in poker?」 FAQ를 **삭제**하고
(내용은 본문 H2로 승격 = [미반영 ①]) 「Do suits ever break a tie…」 한 문만 남긴 뒤 09-07에 그 답을 확장했다.
EN 최신 축어: *"No — but there is one place suits are used at a Hold'em table, and it is not the pot. In cash games, and under most card-room house rules, each player draws a card to decide where the dealer button starts, and if two draws tie on rank the suit order settles it. (WSOP tournaments skip the draw: ==Rule 85== starts the button at the first stack to the dealer's right and redraws only with three, two and one tables left — no suit involved.) Either way that picks a seat, never a hand. The only suit order in the tournament rulebook belongs to stud and razz. If two best fives match rank for rank, the pot is split regardless of suits."*
→ **할 일**: zh-hant L227 「花色能不能決勝？德州撲克裡花色重要嗎？」 FAQ를 **삭제**(내용은 신규 H2가 받는다) ·
L231 「在德州撲克裡花色曾經破過平手嗎？」의 답을 위 축어로 **교체**.
🔴 `Rule 85`·`Rule 73` 조항 번호는 축어. 🔴 「現金桌·대부분의 카드룸 하우스 룰」이라는 **국면 한정을 빼지 마라**
(토너먼트는 반대다 — 이 한정이 빠지면 D유형 오답이 된다).

### 1-B. 키워드 (실측 · 2026-09-07 · DFS location 2158)
- **winnable `德州撲克 花色大小` 50** → [미반영 ①] 신규 H2 `## 花色在德州撲克算不算大小`가 그대로 이 축이다.
  태그에도 **`花色大小` 추가**(기존 8종 중 하나를 빼지는 마라 — 전부 이 글 소유).
- **winnable `德州撲克 順子 12345` 40** → 輪子 절(L130~136)에 **「A-2-3-4-5（也就是大家常說的「12345」）」** 병기 1회.
  🔴 표기 하나가 유입을 가른다. **카드 표기 자체는 바꾸지 마라 — 병기만.**
- **winnable `德州撲克 對子大小` 20 · `德州撲克 順子一樣` 10 · `德州撲克 葫蘆一樣` 10** →
  「一樣」이 대만의 평수 어형이다. FAQ **질문문**에 「一樣」 어형을 **최소 2곳**
  (L211 順子 · L219 葫蘆의 질문문을 「兩人順子一樣大誰贏？」·「兩人葫蘆一樣誰贏？」 형태로).
  🔴 **답은 건드리지 마라**(§13 자리다).
- **어휘 `疊牌（Counterfeiting）`** → L126 「你的4被疊掉了」에 괄호 병기 1회(뱅크 §3).
- 함정: `德州撲克順序`(110)는 game-order 축 — **여기서 쓰지 마라.**

### 1-C. 직답 지정
- 상단 **`> **快速解答**` 신설**(도입부 뒤·L38 첫 H2 앞). tldr이 「고정 순서 3단계」를 이미 말하므로
  **다른 각도**로: 「평수를 못 읽는 이유는 순서를 몰라서가 아니라 **어느 카드가 베스트5에 들어가는지**를
  잘못 세기 때문」.
- H2 직후 직답 **3자리만**: ① L56 `## 兩人同對子怎麼比（踢腳決勝）` ② L105 `## 兩對的比較順序：大對→小對→踢腳`
  ③ **신규 H2 `## 花色在德州撲克算不算大小`**(EN 굵은 첫 단락이 곧 직답 — 번역해 그대로 쓴다).

### 1-D. §13 자리 (C 구간 손검산 대상 · 현행 행번호)
L64~65(같은 대 다른 킥커) · L69~70(A/B 비교표) · L99(三條 두 킥커 · A♣A♥7♦5♣2♠) ·
L109 · L115~117 · L121~122(兩對·疊牌) · L134(輪子 4♦3♣2♠K♦Q♥) · L144(第五張 A♥K♣Q♦4♣2♥) ·
L156·L158(킥커 불성립 · A♥K♣Q♦J♠9♥) · L201(FAQ) ·
**신규 이식분 3자리**(A-Q-7-3-2 · K-K-9-9-5 · 5♦6♣7♠8♥2♦).

### 1-E. 이 편에서 하지 말 것
- 🔴 H2 「順子的比較與輪子的排位」·「第五張踢腳牌的決定性」을 질문형으로 바꾸지 마라.
- 🔴 zh-hant 고유 FAQ 3문(`兩人牌型一樣誰贏？怎麼往下比？` · `什麼情況才是真的平手（Chop）？` ·
  `公牌鎖死時，底牌到底算不算？`)은 **EN에 없다 = 결손이 아니라 롱테일 흡수분이다. 지우지 마라.**
- 🔴 태그 `德州撲克平手`(40)·`牌型一樣誰贏`·`同對子誰贏`은 이 글 소유 — 유지.

---

## 2. `holdem-kicker` — mU 2026-07-18 → **2026-08-26**

### 2-A. 드리프트
**[미반영 ①] FAQ 「用公牌打（playing the board）」(L199~201)** — EN이 08-26에 조건절을 넣었다.
현행 zh-hant: 「…**因為大家都用同樣的五張牌，底池平分。**…」
EN 신판 축어: *"If nobody can improve on the board, everyone uses the same five cards and the pot is split."*
→ **「打公牌 = 무조건 분할」이 아니다**는 정확성 수정. 번역 지침:
「**只要沒有人能用底牌把公牌做得更大**，大家就都用同樣的五張牌，底池平分。」
🪶 같은 글 L108 H2 「用公牌打：你的踢腳不上場的時候」 본문에 같은 단정이 있으면 **함께** 고친다(대조할 것).

**[이미 반영 ②] 四條 踢腳 문단**(L138) — EN 08-12 확장분 반영 확인
(「那要兩位玩家湊到同一副四條，也就是四張全攤在公牌上 —— 這種牌面很少見」).
**[이미 반영 ③] 三條 FAQ**(L169) — EN 08-26 정정분(보드 K♣K♥7♦5♣2♠ · K-K-K-A-7 vs K-K-K-Q-7) 반영 확인.

### 2-B. 키워드 — 🔴 **이 글은 자기 축의 검색량이 없다**
`踢腳牌`·`踢腳牌是什麼`·`德州撲克踢腳牌`·`旁牌`·`三條踢腳`·`四條踢腳`·`被壓制的A` **전부 볼륨 미반환**,
자동완성 `踢腳牌` **0건**, `kicker` 480은 **비포커 의도**(뱅크 §1).
→ **처방은 새 키워드가 아니라 «상위 축에서의 유입»이다.** 대만 1위 taiwanrounders도 「踢腳牌是關鍵」을
**牌型大小 페이지 안**에서 다룬다.
- 🔴 **`hand-rankings`의 踢腳 절에서 이 글로 오는 인라인 링크가 이미 있다**(L177 부근 `[踢腳牌]`).
  **끊지 마라.** 이 글의 유입 경로 전부다.
- 본문 어구로만 흡수(**태그 추가 금지** — 볼륨 0을 태그로 늘리지 않는다):
  `對子大小`(20)·`一樣大`(null) 어형을 FAQ 질문문 1~2곳에.

### 2-C. 직답 지정
- 상단 **`> **快速解答**` 신설**. 각도: 「踢腳는 «남는 카드»가 아니라 **베스트5의 마지막 자리**이고,
  그 자리를 **공패가 차지하면 내 카드는 아예 안 쓰인다**」.
- H2 직후 직답 3자리: ① L48 `## 哪些牌型有踢腳牌、哪些沒有` ② L108 `## 用公牌打：你的踢腳不上場的時候`
  ③ L136 `## 四條有踢腳牌嗎？`(L138이 이미 굵은 직답 역할 — **길이만 확인**하고 맞으면 손대지 마라).

### 2-D. §13 자리
L97·L99~100(AK vs AQ) · L112·L114~115(공패 승계) · L127·L129~130(A9 vs AK) ·
L140(四條 5♠5♥5♦5♣K♦) · L169(三條 FAQ).

### 2-E. 하지 말 것
- 🔴 L140의 四條 예시와 L169의 三條 예시는 **08-12·08-26 EN 정정본이다. 바꾸지 마라.**
- 태그 신설 금지(§2-B).

---

## 3. `holdem-hand-rankings` — mU **2026-08-12 유지**

### 3-A. 드리프트 — **없다**
EN이 08-26에 고친 1건(board-puzzle alt `K-K-K-A-4` → `K-K-K-A-2`)은 zh-hant L204에 **이미 반영**.
🟠 EN `updated` 필드가 08-12에 멈춰 있다(내용은 08-26에 바뀜) → **헤드 요청(EN-먼저)**. mU는 **올리지 마라.**

### 3-B. 키워드 — 이 글이 이 회차의 **볼륨 본체**다
- 🔴 **`德州撲克大小` 2,900의 주인 확정**(SERP 12/12 牌型 의도 · 뱅크 §2-A). 태그 보유 ✅ — **지키기만 하면 된다.**
  🔴 그 대신 **`texas-holdem-rules-for-beginners`에서 같은 태그를 뺀다**(§6 카니발 처리).
- **winnable `德州撲克大小順序` 390** — 완전형이 이 레포 어디에도 없다. **첫 H2에 편입**:
  현행 `## 德州撲克牌型大小一次看（10種牌型由大到小）`
  → **`## 德州撲克牌型大小順序一次看（10種牌型由大到小）`**(두 글자 추가 · 훅·구조 불변).
- **winnable `德州撲克牌型機率` 50** — 표 직후 이탤릭 주석(L50)에 완전형 1회 편입.
- ⚠️ **`撲克牌大小順序` 260은 大老二 혼합**(뱅크 §2-B) → **태그·제목 금지.**
  대신 L56 `## 牌的大小與花色（30秒基礎）` 절에 **한 줄 구분**을 넣는다:
  「（**大老二不一樣** —— 那邊 2 最大、而且**花色有大小**。這篇講的規則只適用德州撲克。）」
  🪶 정확성 보강 **겸** 그 유입에도 정답을 주는 자리다. 경쟁사 어디도 안 쓴다.
- 함정: `同花打不打得過full house` 880 = **영화 《賭俠》 밈**(뱅크 §2-D) — **이 글엔 넣지 마라**
  (flush-vs-straight 소관 · §4-B).

### 3-C. 직답 지정
- 상단 **`> **快速解答**` 신설**(도입부 뒤·L28 첫 H2 앞). tldr이 10종 나열을 이미 하므로 **다른 각도**:
  「순서를 외우는 건 5분이면 끝난다. 실제로 底池를 잃는 자리는 **牌型이 같을 때**(踢腳)와
  **공패가 성패를 뒤집을 때**다.」
- H2 직후 직답 **3자리**: ① L56 `## 牌的大小與花色（30秒基礎）` ② L172 `## 踢腳牌與平手怎麼比？（分池規則）`
  ③ L234 `## 大家最愛吵的牌型大小比較`.
- 🔴 L51 `> **一句話結束爭論**` 박스는 **그대로 둔다**(잘 쓰인 훅 · 상단 직답이 아니라 라벨 통일 대상 아님).

### 3-D. §13 자리
L80~L166(10종 `:::hand` 블록 전부 — 카드와 설명문이 일치하는지) · L172~L200(踢腳·`:::tiebreak` 표) ·
L204(alt `K-K-K-A-2`) · L210~L232(실전 3문제) · L282(FAQ).
🔴 L30~L48의 **機率 표 10행**(0.0032 / 0.0279 / 0.168 / 2.60 / 3.03 / 4.62 / 4.83 / 23.5 / 43.8 / 17.4)은
**7장 기준 정본**이다. 5장 기준(0.000154 / 0.00139 / 0.024 / 0.144 / 0.197 / 0.392…)과 **섞지 마라**.
flush-vs-straight는 **5장 기준 표**를 쓰므로 두 글의 숫자가 달라 보이는 것은 **정상이다.**

### 3-E. 하지 말 것
- 🔴 title·seoTitle 불변(`德州撲克牌型大小` 260 + `德州撲克大小` 2,900의 주인 표기).
- 🔴 `[踢腳牌](/zh-hant/blog/holdem-kicker)` 인라인 링크(L177 부근)를 **끊지 마라** — kicker의 유일한 유입 경로.

---

## 4. `holdem-flush-vs-straight` — mU **2026-08-12 유지**

### 4-A. 드리프트 — **없다** (EN 08-12 이후 내용 변경 0)

### 4-B. 키워드
- **라벨 통일**: L34 `> **快速回答**` → **`> **快速解答**`**(내용 유지 · `local-voice` §1-C 지정분).
- **winnable `德州撲克 順子大小` 110** → L130 `## 同花對同花、順子對順子——平手怎麼分？（Flush vs Flush）`
  절 본문에 **`順子大小`** 완전형 1회. (H2 자체는 바꾸지 마라 — EN parity 구조.)
- **winnable `德州撲克 葫蘆大小` 30** → L107 `## 什麼比同花大？` 절 본문에 1회.
- **winnable `德州撲克 同花贏葫蘆` 30 = 오해형** → **FAQ 1문 신설**
  (Q. 「同花贏得了葫蘆嗎？」 / A. 「贏不了 —— 葫蘆比同花大…」 60~110자 · 이 글 본문 근거와 일치하게).
- **`德州撲克 順子 12345` 40** → 輪子 언급 자리(L163 부근 `A-2-3-4-5`)에 「12345」 병기 1회.
- 🔴🔴 **함정 `同花打不打得過full house` 880 = 영화 《賭俠》 밈**(뱅크 §2-D · SERP 6/6이 밈).
  **태그·제목·H2 금지.** 허용된 유일한 자리 = **위 오해형 FAQ 답의 꼬리에 붙이는 문화 각주 한 문장**:
  「（順帶一提，電影《賭俠》那句「同花打得過 full house？」——牌理上**打不過**，葫蘆本來就比同花大。）」
  🔴 **별도 FAQ·별도 H2로 만들지 마라**(글이 밈 쪽으로 끌린다).

### 4-C. 직답 지정
- 상단 블록은 **라벨만 교체**(내용 우수 — 손대지 마라).
- H2 직후 직답 **3자리**: ① L107 `## 什麼比同花大？（What Beats a Flush）`
  ② L130 `## 同花對同花、順子對順子——平手怎麼分？` ③ L172 `## 短牌（Short Deck）裡牌型排名不一樣嗎？`
  🪶 ③은 대만 SERP에 Zynga 短牌 페이지가 실제로 뜬다(`德州撲克大小` #16) — 값이 있는 자리다.

### 4-D. §13 자리
L45~L49(5장 조합수 표 624 / 3,744 / **5,108** / **10,200** / 54,912 + % 열) · L87~L105(3가지 牌面) ·
L122~L124(A♠6♠ 堅果同花 vs 9♦9♠9♥K♦K♠ 葫蘆) · L136~L137(同花·順子 비교표) · L161~L166(同花順).
🔴 **이 글은 5장 기준 표다.** tldr이 「0.197% / 0.392%(다섯 장)」와 「3.03% / 4.62%(일곱 장)」를
**둘 다 기준 표기와 함께** 쓰고 있는지 확인하라 — 기준이 빠지면 그 자체로 사실오류다.

### 4-E. 하지 말 것
- 🔴 tldr의 「約佔五張發牌的 0.197%」·「算到河牌的七張牌上」 **기준 표기를 지우지 마라.**
- 🔴 `5,108 vs 10,200`·「約 1.5 倍」·「兩倍」는 08-12 EN 미러 확정본. 바꾸지 마라.

---

## 5. `holdem-split-pot-rules` · `holdem-reading-the-board` — mU **현행 유지**

### 5-A. `holdem-split-pot-rules`(mU 09-06 유지) — 드리프트 **없다**(09-06 EN 역이식 반영본)
- **라벨 통일**: L26 `> **一句話先講**` → **`> **快速解答**`**(내용 유지).
- 키워드: `德州撲克平分底池` 10(태그 보유 ✅) · 어휘 **`疊牌（Counterfeiting）`** — 이 글에 疊牌 개념이
  나오면 tiebreak과 **같은 표기**로(대만 상위 2사 공통어 · 뱅크 §3).
- 직답 지정 3자리: ① L49 `## 德州撲克會平手嗎？會平分底池的 5 種情況`
  ② L115 `## 多出來的那顆籌碼給誰？奇數籌碼規則` ③ L125 `## 邊池也會平分嗎？有人全下時的平手`.
- §13 자리: L60~61 · L72~L88 · L100 · L108 · L129 · L135~137.
- 🔴 하지 말 것: L90 `> **檢查方法：**` 블록은 **직답 라벨이 아니다** — 통일 대상 아님. 그대로 둔다.
  🔴 「奇數籌碼 = 按鈕 왼쪽 첫 자리」는 **WSOP Rule 73 축어 근거**다(tiebreak 신규 H2와 같은 조항).
  두 글이 **같은 말을 하는지 대조**하라(형제 글 정합).

### 5-B. `holdem-reading-the-board`(mU 08-11 유지) — 드리프트 **없다**(EN 08-12·08-27 4건 전부 반영 확인)
반영 확인 축어: 「7 張裡有四張黑桃，那**不是**同花——同花要五張」(L236) ·
「必須把兩張底牌攤開…（==WSOP 第 75 條==、TDA 第 19 條）」(L265) ·
「只要牌面上有三張同花色就要當心…」(L293) · 「三條 K（兩張底牌都用上）」(L158).
🟠 EN `updated`가 08-11에 멈춰 있다(내용은 08-12·08-27에 바뀜) → **헤드 요청(EN-먼저)**. mU는 올리지 마라.
- **라벨 통일**: L42 `> **一句話答案**` → **`> **快速解答**`**(내용 유지).
- 키워드: `德州撲克 公牌順子` 10 → L107 `## 牌面上的順子怎麼看` 본문에 완전형 1회.
  `牌面大小`·`公牌最大`는 볼륨 null → **본문 어구로만**.
- 직답 지정 3자리: ① L47 `## 7 張牌怎麼湊出最強的 5 張` ② L91 `## 「打公牌」是什麼意思？`
  ③ L179 `## 最強的牌是什麼？反推堅果牌`.
  🔴 ②의 직답은 **kicker의 [미반영 ①]과 같은 단서**를 담아야 한다(「아무도 개선할 수 없을 때만 분할」).
  두 글이 어긋나면 그 자체가 결함이다.
- §13 자리: L61~63(7선5 표) · L84 · L99~100 · L111 · L117~L125 · L144 · L154~L160 · L172~173 ·
  L183 · L198 · L206 · L236.
- 🔴 하지 말 것: `WSOP 第 75 條`·`TDA 第 19 條` 조항 번호 불변.

---

## 6. 🔴 클러스터 밖 최소 편집 2줄 (회차 1이 **명시적으로 위임**한 미결)

회차 1 진행 파일 §2: *「`德州撲克怎麼玩`(720) 태그가 공유돼 있다 … **회차 2에서 `德州撲克大小`(2,900)와
함께 판정**」* → SERP 실측으로 판정 완료(뱅크 §2-A·§2-E). **태그 한 줄씩만 고친다.**

| 파일 | 지금 | 할 일 | 근거 |
|---|---|---|---|
| `holdem-game-order.ts` L18 | 태그 첫 항목이 `德州撲克怎麼玩` | **이 태그만 제거**(나머지 7종 유지) | 720의 의도 = 규칙 전반·절차. 주인 = 필라(title 완전형 보유) |
| `texas-holdem-rules-for-beginners.ts` L22 | 태그에 `德州撲克大小` | **이 태그만 제거**(나머지 7종 유지) | 2,900의 의도 = 牌型 대소(SERP 12/12). 주인 = hand-rankings |

🔴 **두 파일의 본문·제목·`masterUpdated`·`updated`는 건드리지 마라.** 태그 배열 한 줄뿐이다.

---

## 7. B 구간 종료 조건
1. 6편 편집 완료 + §6의 태그 2줄.
2. `npm run audit:hard -- --locale=zh-hant` 🔴 **0건**(커버리지 출력도 읽는다).
3. 백틱 0 · 중첩 볼드 0 · 백슬래시 이스케이프 신규 0.
4. 보고 후 **멈춘다** → ▶ 다음 지시: `/model` → **Opus** → 「C 시작해」.
