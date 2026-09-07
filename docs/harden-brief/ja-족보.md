# 🇯🇵 ja 경화 회차 2 — 족보 클러스터 6편 브리프

> 작성 2026-09-07 · A 구간 산출 · 규격 = `docs/hardening-protocol.md` §3-⑥ · ja 부록 = §7-E
> 🔴 **B 구간은 이 파일 하나만 읽는다.** EN 원문은 축어로 넣었다 — EN 파일을 다시 열지 마라.
> 대상: holdem-hand-rankings · holdem-flush-vs-straight · holdem-kicker ·
> holdem-tiebreak-rules · holdem-split-pot-rules · holdem-reading-the-board
> 키워드 실측 전량 = `docs/keyword-bank/ja-hand-rankings.md`(라쿠 12크레딧 · 2026-09-07)

---

## 0. 이 회차의 실측 요약

### 0-A. 드리프트 — 🔴 헤드가 회차 2 착수 직전에 4편을 먼저 이식했다

세션 시작 후 `git merge main`을 **두 번** 했다. 두 번째 머지에서 헤드 커밋 `f0515d4e`
(「족보 클러스터 EN-먼저 11건 판정 — 채택 8 → EN 4편 + 12로케일 전파」)가 들어와
**hand-rankings · kicker · reading-the-board · split-pot 4편의 드리프트가 이미 반영**됐다.

| 편 | ja masterUpdated | EN updated | **diff 실물 판정** |
|---|---|---|---|
| hand-rankings | 2026-09-07 | 2026-09-07 | **드리프트 0.** 08-12 이후 EN 변경 = desc 축약(EN 전용 메타) · alt K-K-K-A-4→A-2(ja L200 이미 A-2 ✅) · HSL 토큰 · 09-07 이식분(로열 라벨 · tiebreak 블록 로열 행) 전부 반영 |
| flush-vs-straight | 2026-08-12 | 2026-08-12 | **드리프트 0.** 08-12 이후 EN 변경은 HSL 토큰뿐(diff 실물 확인) |
| kicker | **2026-07-19** | 2026-09-07 | **미반영 1건 남음**(§3 드리프트) — 나머지 3건은 반영됨 |
| **tiebreak-rules** | **2026-07-19** | **2026-09-07** | 🔴 **이 회차 최대.** 신설 H2 1개 + FAQ 재작성 5개 + 표 1행 + 문단 1개 |
| split-pot | 2026-09-07 | 2026-09-07 | **드리프트 0**(09-06 `4522532a` + 09-07 `f0515d4e` 둘 다 반영) |
| reading-the-board | 2026-09-07 | 2026-09-07 | **드리프트 0**(21통 표 · TDA 12/13-A · WSOP 75 전부 반영) |

### 0-B. 이 회차의 본체 = **직답 블록 0개 → 신설 + 라벨 통일**

🔴 **6편 전부 「先に結論」 블록이 0개다.** 대신 3편에 비정본 라벨 「手っ取り早い答え」가 최상단에 하나씩 있다.

| 편 | 現 라벨 | H2 수 | FAQ 수 | 할 일 |
|---|---|--:|--:|---|
| hand-rankings | 없음(L49 「言い争いを終わらせる一つの事実」 = **노트라 유지**) | 13 | 22 | 블록 신설 |
| flush-vs-straight | 「手っ取り早い答え」 L34 | 10 | 8 | **라벨 교체** + 블록 신설 |
| kicker | 없음 | 10 | 10 | 블록 신설(굵은 선도문장 **전환**) |
| tiebreak | 없음 | 10 → **11** | 8 → **9** | 블록 신설 + 드리프트 |
| split-pot | 「手っ取り早い答え」 L26 | 10 | 8 | **라벨 교체** + 블록 신설 |
| reading-the-board | 「手っ取り早い答え」 L42 | 13 | 8 | **라벨 교체** + 블록 신설 |

### 0-C. 규격 (회차 1 확정 · 진행 파일 §3-B)
- 라벨은 **「> \*\*先に結論\*\*」 하나뿐.** 「> \*\*メモ:\*\*」·「> \*\*鉄則:\*\*」·「> \*\*言い争いを終わらせる一つの事実\*\*」는
  **직답이 아니라 노트**라 그대로 둔다.
- 형식 = 라벨 줄 / 다음 줄부터 내용 / 뒤에 빈 줄. **일본어 100~180자**(EN 40~75단어 상당).
- 🔴 **선복사 금지**: 본문 첫 문장을 그대로 올리지 않는다. **이미 굵은 선도문장이 있는 절은 그 문장을
  블록으로 «옮기고» 본문에서는 뺀다**(둘 다 두면 축어 중복 — 회차 1에서 교열 렌즈가 잡은 유형).
- 본문이 1~2문단뿐인 절 · 표만 있는 절 · 전환 문단 H2에는 **넣지 않는다**.
- 첫 문장이 그 H2의 검색어를 되받는다(GEO). 「この記事では」「以下では」 같은 지시어 시작 금지.
- 🔴 **굵은 단락 안에 중첩 볼드 금지**(볼드 정규식이 non-greedy라 A·C만 굵게로 뒤집힌다 — 강조는 「」 또는 ==…==).
- 🔴 백틱 금지 · slug/이미지 경로 불변 · desc 160자 · tldr에 마크다운 금지 · FAQ 정형(Q 줄 + 빈 줄 + A 줄).

### 0-D. H2 형태 (ja 정본 · §7-E)
🔴 **EN 질문형 직역 금지.** ja H2 = 「[카타카나 용어] + [接尾辞]」 검색형
(一覧 · 早見表 · 強い順 · 成立条件 · 〜とは · やり方 · 覚え方 · どっちが強い · 確率 · 順番).
**§14-A의 「질문형 70%」는 ja에 적용하지 않는다.** 이번 회차에서 H2 문구를 바꾸는 곳은
**아래에 명시한 자리뿐**이다 — 나머지는 손대지 마라.

---

## 1. holdem-hand-rankings — masterUpdated 2026-09-07 · updated 2026-09-07

### 드리프트 0. masterUpdated 그대로.

### 표기 정정 1건 (뱅크 §2 실측 — 마크 vs 스트)
- **L66 H3 「### スートに強弱はない」 → 「### マーク(スート)に強弱はない」**
  근거: `ポーカー マーク 強さ` **480** > `ポーカー スート 強さ` **260**(라쿠 2026-09-07). 현지 2위 경쟁자도
  「マーク（スート）」 병기. 🔴 **본문의 다른 「スート」는 바꾸지 마라** — 족보명·플러시 설명은 スート가 정본이다.
  이 H3 한 자리만 병기로 연다.
- 같은 H3 끝에 한 문장 추가: 「マークの強弱については[同じ役なのに負けた? — 引き分けとキッカーの決め方](/ja/blog/holdem-tiebreak-rules)で
  WSOPの規則条文まで確認できます。」(신설 H2로 내부링크 · 축 양보를 명시)

### 직답 블록 — 신설 7자리
넣는다: **L28**(役一覧) · **L72**(10種類 도입) · **L168**(キッカーと引き分け) ·
**L230**(対決 早見表) · **L248**(なぜフラッシュが上か) · **L256**(1秒で読む手順) · **L284**(ゲーム別)
넣지 않는다: L56(H3 2개 구조) · L198(문제풀이 도입 — 답 선복사 위험) · L272(3단계 표만)

### tldr
현행 1문장 나열 → **2~3줄**로. 나열 + 「強さの順番は«揃えるのが難しい順»」 + 「マークに強弱はなく、
同じ役ならキッカーで決まる」. 🔴 **「珍しい役ほど強い」는 폐기어다**(진행 파일 §3-B) —
「揃えるのが難しい役ほど強い(最下位のハイカードだけ例外)」 표현을 쓴다. 마크다운 금지.

### 태그 (8개 · 근거 = 뱅크 §1·§4)
ポーカー 役 / ポーカー 役 一覧 / **ポーカー 役の強さ** / ポーカー 役 早見表 /
ポーカー 役 強い順 / **ポーカー 役順** / **ポーカー 役 覚え方** / テキサスホールデム 役
- 신규: **ポーカー 役の強さ(3,600)** ← 이 클러스터 최대 누락 · **ポーカー 役順(480)** · ポーカー 役 覚え方(30, H2 보유)
- 이관(카니발): 「キッカー とは」 → **kicker 단독** · 「ポーカー 同じ役 の場合」(140) → **tiebreak** ·
  「フラッシュ ストレート どっちが強い」 → **flush-vs-straight 단독**

### §13 자리 (C 구간 손검산)
L76~162 각 역 예시 10조 · **L206~210** 보드 A♠A♦K♥K♣Q♠ + 手札 Q♥Q♦ · **L214~218** 보드 7♥8♥9♥10♥J♠ + 6♥2♣ ·
**L222~226** 보드 K♠K♦K♥A♠2♠ + A♥3♣ · L230~246 対決표 · L258 이미지 alt(9♥Q♥9♠8♣7♠)

### 하지 말 것
확률 수치 · 이미지 경로 · hand 블록의 카드 · quiz 블록 · L49 노트 블록 · 「ファイブカード」 서술 신설(함정 뱅크 §1)

---

## 2. holdem-flush-vs-straight — masterUpdated 2026-08-12 · updated 2026-08-12

### 드리프트 0. masterUpdated 그대로.

### 🔴 라벨 교체 1건
**L34 「手っ取り早い答え」 → 「先に結論」** (내용은 그대로).

### 직답 블록 — 신설 6자리
넣는다: **L55**(なぜ勝つのか — 확률 결론) · **L79**(読み違える3つのボード) · **L107**(フラッシュに勝つ役) ·
**L130**(フラッシュ同士・ストレート同士の引き分け) · **L155**(ストレートフラッシュとは) · **L170**(ショートデッキ例外)
넣지 않는다: L26 「### まず結論から」(H3 + 최상단 블록이 이미 있다) · L39(위 블록과 같은 결론 반복)

### tldr — 이미 자기완결. **손대지 않는다.**

### 태그 — 그대로 8개. 「フラッシュ ストレート どっちが強い」의 **단독 소유자가 됐다**(hand-rankings에서 회수).

### §13 자리
L45~49 역 순위표 5행 · **L87~89** 보드 8♥7♥6♥5♠A♣ + 9♠10♠ · **L93~95** 보드 8♥7♥6♠2♣(턴) + 9♥5♥ ·
**L101~103** 보드 J♠9♠7♠4♣2♦ + A♠6♠ · **L122~124** 보드 K♠9♠9♥4♠2♦ + A♠5♠ ·
L136~137 A♠J♠9♠6♠2♠ vs K♥Q♥10♥8♥3♥ · **L163~164** K♥2♥ / 10♥9♥ 스트레이트플러시 비교

### 하지 말 것
5,108 / 10,200 조합수 · 「約2倍」 서술(08-12 정정본) · L97 경고 문단 · ショートデッキ 절의 순위 역전 서술

---

## 3. holdem-kicker — masterUpdated **2026-07-19** · updated 2026-09-07

### 드리프트 (EN diff `008cf7c6`→HEAD 실물 · EN updated 2026-09-07)

- **[이미 반영]** 포카드 직답 「2人が同じフォーカードで並ぶ必要があり、それには4枚すべてがボードに並ばなければならない」(L138·L173) ✅
- **[이미 반영]** ボードプレイ 선도문장 「同じく手札で良くできない人は全員が同じ5枚を使うことになり——誰も良くできなければ、ポットは分けます」(L110) ✅ (헤드 `f0515d4e`)
- **[이미 반영]** チョップ 문단의 TDA 19 「ただし手札を表向きに開いた場合だけです。マックしてしまえば…(TDAルール19)」 ✅
- **[이미 반영]** FAQ 「ボードでプレイする」 조건절 ✅
- **[미반영 · 구조]** 🔴 **EN에 있는 FAQ 4개가 ja에 없다**(13 vs 10). 07-20 번역 때부터 없었다 —
  «EN 변경 미수신»이 아니라 «처음부터 안 가져온» 자리다. 이번 회차 처리:

| EN FAQ | ja | 판정 |
|---|---|---|
| Does the kicker matter with three of a kind? | 없음 | **신설**(아래 축어) |
| Do two pairs have a kicker? | 없음 | **신설**(아래 축어) |
| Does the kicker have to be in your hand? | 없음 | 🟠 **신설하지 않는다** — 본문 L93 절이 「ボードの高いカードが順位を押し下げる」로 이미 답한다(준중복 방지 · 편차 등재 요청 §5) |
| What is an ace kicker (or a king kicker)? | 없음 | 🟠 **신설하지 않는다** — FAQ 「良いキッカーとは」(L179)가 A·K 키커를 그대로 답한다 |

**신설 FAQ ① — 삽입 위치: L171 「フォーカードにキッカーはありますか?」 답 바로 뒤**
EN 축어(2026-08-26판):
> "A. Yes. Three of a kind uses two kickers, so when two players make the same trips the next two highest cards break the tie — on a K♣ K♥ 7♦ 5♣ 2♠ board, K♠ A♠ plays K-K-K-A-7 and beats the K-K-K-Q-7 of K♦ Q♦ because the ace outkicks the queen. (A true *set* made from a pocket pair rarely ties, since only one player can hold that exact pair.)"

- Q(ja) = **「スリーカードでキッカーは効きますか?」**
- A(ja) = 위 축어 번역. 🔴 **카드는 EN 축어 그대로**: 보드 K♣ K♥ 7♦ 5♣ 2♠ · K♠ A♠ = K-K-K-A-7 ·
  K♦ Q♦ = K-K-K-Q-7. 「セット」 괄호도 그대로 옮긴다.

**신설 FAQ ② — 삽입 위치: ① 바로 뒤**
EN 축어(2026-08-26판):
> "A. Yes — two pair uses one kicker. If you hold K♥ Q♦ and your opponent holds J♠ Q♥ on a Q♣ 7♠ 7♦ 4♥ 2♣ board, you both have queens and sevens, but your king kicker beats their jack (Q-Q-7-7-K over Q-Q-7-7-J). The kicker only comes into play when both players hold the identical two pair."

- Q(ja) = **「ツーペアにキッカーはありますか?」**
- A(ja) = 위 축어 번역. 카드 그대로.

masterUpdated → **2026-09-07**

### 직답 블록 — 🟢 **전환형**(신설이 아니라 «옮기기»)
L38 · L48 · L74 · L108 · L121 · L136 절은 **굵은 선도문장이 이미 있다** → 그 문장을 「先に結論」 블록으로
**옮기고 본문 문단은 그다음 문장부터** 시작한다(복제 금지).
L93(AK vs AQ) 절은 선도문장이 없다 → **신설**(결론: 같은 A페어면 두 번째 카드가 팟을 가른다).
넣지 않는 곳: L28 「### キッカーの数、ひと目で」(H3 stripe)

### tldr — 이미 3문장 자기완결. 손대지 않는다.

### 태그 — 그대로 8개(카니발 회수로 「キッカー とは」·「キッカー負け」 단독 소유가 됐다). 신규 없음
(「スリーカード/ツーペア キッカー」는 실측 볼륨 **0** — 위 FAQ 신설은 «드리프트 이식» 근거이지 볼륨 근거가 아니다).

### 🟠 교열 1건 (원본 유래)
**L177**의 「ストレート・フラッシュ・フルハウス・ストレートフラッシュ」 — 中黒이 나열 구분자인지
「ストレートフラッシュ」 합성어인지 갈린다. → **「ストレート、フラッシュ、フルハウス、ストレートフラッシュ」**(読点)로.
L196도 같은 형태이니 **같이 読点으로 통일**.

### §13 자리
**L97~102** 보드 A♣9♦5♠2♥7♣ + A♠K♠ vs A♦Q♦ · **L112~115** 보드 10♠J♦Q♣K♥A♠ + 2♣3♦ / 4♥5♦ ·
**L127~130** A♠9♣ vs A♥K♦ · **L140** 보드 5♠5♥5♦5♣K♦ · **신설 FAQ ①②의 카드 전건**

### 하지 말 것
L138 포카드 직답 문구(08-26 정정본) · L110 ボードプレイ 선도문장(09-07 이식본) · TDA 19 문장 ·
L60 표의 「✅ あり(ほぼ関係しない)」

---

## 4. holdem-tiebreak-rules — masterUpdated **2026-07-19** · updated 2026-07-20 ★이 회차 최대

### 드리프트 (EN diff `3db72382`→HEAD 실물 · EN updated **2026-09-07** · `c96af74d`(08-30) + `3e523fd7`(09-07))

#### ① [미반영] tiebreak 블록 표 1행 — **L86**
현행: 「ロイヤルフラッシュ|常に引き分け(スプリット)|-キッカーなし」
→ **「ロイヤルフラッシュ|引き分けはボード自体がロイヤルのときだけ——全員でチョップ|-キッカーなし」**
🔴 이 문구는 **hand-rankings에 이미 들어간 09-07 이식본과 축어 동일**해야 한다(로케일 내 일관).

#### ② [미반영] 문단 신설 — **L136 문단 뒤**(ホイール 절 안, 「ホイールが*できない*ことが2つ」 앞)
EN 축어:
> "At the other end of the ladder, ==**the highest straight in poker is Broadway — A-K-Q-J-10**==. No straight beats it (though a flush or anything above it still does), and the wheel sits at the bottom, so every straight in the game ranks somewhere between those two by its top card alone."

ja: 「はしごの反対側では、==**ポーカーで最も高いストレートはブロードウェイ——A-K-Q-J-10**==です。これに勝てるストレートはありません(フラッシュや、それより上の役なら勝てます)。ホイールは最下段にいるので、ゲーム中のすべてのストレートは、一番上のカードだけでこの2つの間のどこかに並びます。」

#### ③ [미반영 · 🔴 신설 H2] — **L148과 L150 사이**(5枚目 절 뒤 · チョップ 절 앞)
EN 신설 H2 「Do Suits Matter in Poker?」의 ja 자리. 🔴 **직역 금지** — 실측 형태소로 연다.

- **H2 = 「## ポーカーのマーク(スート)の強さ — 勝敗には関係しない」**
  근거: `ポーカー マーク 強さ` **480** · `ポーカー スート 強さ` **260/SD26** · 질문 「ポーカーの役で「スート」とは何ですか?」 相対需要 27 ·
  현지 2위 경쟁자 H2 「スート(マーク)の強さ」 · 3위가 야후 Q&A(직답 공백). 전량 = 뱅크 §2·§7.

EN 축어(4문단 · 이 순서 그대로):
> "**No — not for deciding who wins. Suits do exactly one job in Texas Hold'em: five of the same suit make a flush. Beyond that they carry no rank, so two hands that match rank for rank always split the pot, and no card ever outranks another because of its suit.**
> The question keeps coming up because suit order genuinely exists in poker — just not in this game. Stud and razz use it to decide who brings it in and who takes an indivisible chip. Hold'em uses it for neither.
> The cleanest proof is the one chip that *cannot* be divided. The 2026 WSOP tournament rules say ==g:*"In button games with 2 or more high or low hands, the odd chip goes to the first seat left of the button"*== (Rule 73). Even when a pot physically will not split evenly, the rule reaches for **the seat**, not the suit — and the suit-based method in the back half of that same rule is written for stud and razz only.
> One more thing worth knowing: in Hold'em two flushes are always the *same* suit anyway, because all five community cards are shared and a board can't hold three hearts and three spades at once. So "my spades beat your hearts" is not a rule you lost to — it's a hand that cannot be dealt."

ja 작성 지시:
- 첫 굵은 문단 → 그대로 **「先に結論」 블록**으로 만든다(본문에 중복해 두지 마라).
- 2문단: 스터드·라즈에는 무늬 서열이 실재한다는 대비. 「スタッド」「ラズ」 표기.
- 3문단: WSOP 조항 인용은 **영어 원문 병기 필수** —
  「2026年WSOPトーナメントルールにはこうあります。==g:*"In button games with 2 or more high or low hands, the odd chip goes to the first seat left of the button"*==(第73条)」 뒤에 일본어 뜻을 한 문장으로.
  🔴 조항 번호(73)는 **EN이 명시한 축어**라 그대로 쓴다(회차 1 all-in의 「번호 달지 마라」와 다른 건이다 — 그건 EN이 무번호였다).
- 4문단: 홀덤에서 두 플러시는 반드시 같은 무늬라는 논증.
- 절 끝 한 문장으로 hand-rankings H3(「マーク(スート)に強弱はない」)와 상호링크: 「役そのものの並びは[ポーカーの役の強さ](/ja/blog/holdem-hand-rankings)に。」

#### ④ [미반영] FAQ **A 5개 재작성**(Q 문구는 그대로 둔다 — 이미 검색형이다)

**L173 「ポーカーの引き分けはどう決まりますか?」** EN 축어:
> "A. Three checks in order — hand rank, then the cards that make the hand, then kickers from the top down — and the first difference ends it. Just as important is what never enters the comparison: suits, who bet last, who sits closer to the button, and how many chips each player put in. If the five cards match rank for rank, the dealer chops the pot no matter what happened in the betting."

**L177 「2人が同じペアのとき、どちらが勝ちますか?」** EN 축어:
> "A. The higher kicker — but check which of your cards actually reach the best five first. On A-Q-7-3-2 with a pair of aces, a player holding A-9 plays A-A-Q-9-7: the board's queen jumps ahead of their nine, so the nine is only the *second* kicker. Against A-K the pot is already decided at the first slot, and that nine is never compared at all. Three kicker slots exist; most pots end at the first one."

**L181 「2人ともツーペアのとき、どちらが勝ちますか?」** EN 축어(09-07판):
> "A. Higher pair first, then the lower pair, then the one kicker — so aces-and-threes beats kings-and-queens even though the second pair is far smaller. The case that catches people is a double-paired board like K-K-9-9-5: unless someone holds a king, a nine, or a pocket pair above nines, every player has the same two pair, so the hand collapses to a single kicker and the best hole card at the table takes it — and if nobody's hole card beats the board's five, everyone plays the board and the pot is chopped. Two pair carries exactly one kicker, never two."

🔴 **여기 한 자리만 축어를 따르지 않는다(EN-먼저 등재).** EN의 예외 목록 «king / nine / pocket pair above nines»는
**불완전하다**: 보드 K-K-9-9-5에서 **포켓 5(5♣ 5♠)** 를 든 플레이어는 7장이 K,K,9,9,5,5,5 →
베스트5 = **5-5-5-K-K 풀하우스**로 투페어를 넘는다. 「every player has the same two pair」가 거짓이 되는 경우다.
→ ja는 **열거를 하지 않는 참인 문장**으로 쓴다: 「K-K-9-9-5 のようにボードが2つペアになった形では、
**ボードを上回れる手札がないかぎり**全員が同じツーペアになり、勝敗は1枚のキッカーだけに縮みます——
テーブルで一番高いホールカードがポットを取り、誰のホールカードもボードの5枚を上回らなければ全員がボードで勝負してチョップです。」
(EN 정정은 §5 헤드 요청 = EN-먼저 ①.)

**L185 「ポーカーで5枚目のカードは効きますか?」** EN 축어:
> "A. Yes — and it is the most common way a player loses a pot they were sure they had won. Three spots put the whole pot on the last card: a pair's third kicker, the lowest card of a flush, and the side card next to quads sitting on the board. It stops mattering only when the board's own cards outrank whatever you hold, at which point your hole cards drop out of the hand entirely and you are playing the board."

**L193 「相手より高いストレートを作れますか?」** EN 축어:
> "A. Yes, and in practice it happens when most of the straight is already on the board. Take a board of 5♦ 6♣ 7♠ 8♥ 2♦: a player with 9♣ 4♠ makes 9-8-7-6-5, while a player with 4♥ 3♦ makes 8-7-6-5-4 off the same four cards. Both of them "made a straight"; only the top card was ever counted, so the nine takes it. Equal top cards mean the same straight and a chop."

🔢 A 구간 검산 완료: 9♣4♠+보드 → 9-8-7-6-5 ✅ · 4♥3♦+보드 → 8-7-6-5-4 ✅(3♦은 안 쓰인다) · 9 > 8 ✅

#### ⑤ [미반영] 무늬 FAQ 답 교체 — **L197 「テキサスホールデムでスートが引き分けを決めることはありますか?」**
EN이 무늬 FAQ 2개를 1개로 합치면서 답을 다시 썼다. EN 축어(09-07판):
> "A. No — but there is one place suits are used at a Hold'em table, and it is not the pot. In cash games, and under most card-room house rules, each player draws a card to decide where the dealer button starts, and if two draws tie on rank the suit order settles it. (WSOP tournaments skip the draw: ==Rule 85== starts the button at the first stack to the dealer's right and redraws only with three, two and one tables left — no suit involved.) Either way that picks a *seat*, never a hand. The only suit order in the tournament rulebook belongs to stud and razz. If two best fives match rank for rank, the pot is split regardless of suits."

#### ⑥ [이미 반영] L165 「キッカーの枠は3つともボードから埋まります」(EN "all three kicker slots") ✅
#### ⑦ [EN 무시] EN 태그 변경(do suits matter · highest straight) — ja는 실측치로(아래).

masterUpdated → **2026-09-07**

### FAQ 신설 1개 (실측 뱅크 §3 · `ポーカー ハイカード 引き分け` 20 · 본문에 하이카드 절이 없다)
**삽입 위치: L185(5枚目) 답 뒤**
- **Q. ハイカード同士のときはどう比べますか?**
- A = tiebreak 블록 마지막 행(「ハイカード|5枚すべて、上から1枚ずつ|+キッカーあり」)을 근거로:
  가장 높은 카드부터 5장을 순서대로 비교 · 처음 차이가 난 곳에서 결착 · 5장이 전부 같으면 チョップ · 마크는 무관.
  예시는 **A-K-9-6-3 가 A-K-8-7-5 에 勝つ(3枚目の9が8を上回る)**. 🔢 C 구간 검산 대상.

### 직답 블록 — 전환형 7 + 신설 1
전환(굵은 선도문장을 블록으로 옮긴다): **L40 · L58 · L82 · L107 · L132 · L142 · L152**
신설: **신설 H2(③)** 의 첫 굵은 문단이 곧 블록.
넣지 않는 곳: L28 「### 引き分けのルール、ひと目で」(H3 stripe)

### tldr — 이미 자기완결 3문장. **「スートで引き分けが決まることは絶対にありません」 유지.** 손대지 않는다.

### seoTitle / desc — 손대지 않는다(32자 이내 · desc 160자 이내 확인만).

### 태그 (8개 · 뱅크 §4 카니발 판정 반영)
ポーカー 引き分け / **ポーカー 同じ役 の場合** / **ポーカー マーク 強さ** / **ポーカー スート 強さ** /
同じ役 勝敗 / ツーペア 引き分け / テキサスホールデム 同じ役 / キッカー 比較
- 신규 3: **ポーカー 同じ役 の場合(140, hand-rankings에서 이관)** · **ポーカー マーク 強さ(480)** · **ポーカー スート 強さ(260)**
- 제거 3: 「キッカー負け」(→kicker) · 「ポーカー チョップ」(→split-pot) · 「ポット 分け方」(→split-pot)

### §13 자리 (C 구간 손검산 — 이 편이 최다)
**L64~70** A♠K♦ vs A♥9♣ + 보드 A♦Q♠7♥3♣2♦(표 2행) · **L99** 보드 A♣A♥7♦5♣2♠ + A♠J♠ vs A♦10♦ ·
**L109** 보드 K♦9♣9♠5♦2♥ + K♠Q♦ vs K♥J♥ · **L115~122** 5♠4♠ vs A♣K♦ + 5♦4♥K♣9♠9♥(카운터피트 표) ·
**L134** 보드 4♦3♣2♠K♦Q♥ + A♠5♠ vs 6♥5♥ · **L144** 보드 A♥K♣Q♦4♣2♥ + A♠8♠ vs A♦7♦ ·
**L156** 보드 A♠K♥Q♣J♦10♠ + 9♥7♠ · **L158** 보드 A♥K♣Q♦J♠9♥ + A♠3♠ vs A♦2♦ ·
**신설분 전건**: FAQ L181(K-K-9-9-5) · L193(5♦6♣7♠8♥2♦) · L177(A-Q-7-3-2) · 신설 FAQ(A-K-9-6-3 vs A-K-8-7-5)

### 하지 말 것
- L110~124 **카운터피트 절 삭제·축약 금지**(ja 고유 롱테일 · EN에도 있다)
- ホイール 서술의 「Q-K-A-2-3 は役なし」 · 「エースは高低を兼ねられない」
- 🔴 **hand-rankings의 tiebreak 블록을 건드리지 마라**(그 파일은 이미 09-07 이식본이다)

---

## 5. holdem-split-pot-rules — masterUpdated 2026-09-07 · updated 2026-09-07

### 드리프트 0(§0-A). masterUpdated 그대로.

### 🔴 라벨 교체 1건
**L26 「手っ取り早い答え」 → 「先に結論」** (내용 그대로).

### 직답 블록 — 신설 7자리
넣는다: **L41**(スプリットポットとは — 정의 결론) · **L49**(分かれる5つの状況) · **L84**(ボードで決着) ·
**L98**(引き分けを決めない3つ) · **L115**(端数チップ) · **L125**(サイドポット) · **L145**(ハイ・ロー)
넣지 않는 곳: L31 「### 数字でつかむ全体像」(H3 stripe) · L90 「> **チェックの仕方:**」 블록(노트 — 유지)

### tldr — 자기완결. 손대지 않는다.

### 태그 (7개)
ポーカー チョップ / **ポーカー 引き分けの場合** / ポット 分け方 / スプリット ポット /
ポットが分かれる 条件 / 端数チップ / テキサスホールデム チョップ
- 교체: 「ポーカー 引き分け」(140 → tiebreak 소유) → **「ポーカー 引き分けの場合」(110)**.
  근거 = 「〜の場合」은 **상황 열거** 의도이고 이 글의 H2가 「ポットが分かれる5つの状況」이다(뱅크 §4).

### §13 자리
**L60~61** K♠7♣ / K♥2♦ + 보드 K♦K♣Q♥Q♦J♠ · **L88** 8-8-8-A-K · **L108** 보드 9♠8♦7♣6♥5♠ ·
**L129~137** 사이드팟 표(A♠Q♦ / A♣Q♥ / K♦K♠ · A-A-Q-J-7) · L100 이미지 alt

### 하지 말 것
L90 tip 블록 문구 · TDA 20(최소 단위로 쪼갠다) 문장과 「ボタンから時計回り」(둘 다 09-07 이식본) ·
tip 블록 안의 「ヘッズアップなら」 삽입구(09-07 이식본) · 端数チップ 계산 예시 수치

---

## 6. holdem-reading-the-board — masterUpdated 2026-09-07 · updated 2026-09-07

### 드리프트 0(§0-A). masterUpdated 그대로.

### 🔴 라벨 교체 1건
**L42 「手っ取り早い答え」 → 「先に結論」** (내용 그대로).

### 직답 블록 — 신설 10자리
넣는다: **L47**(7枚からベスト5枚) · **L71**(4ステップ) · **L93**(ボードで勝負する) · **L109**(ストレートの見抜き方) ·
**L133**(フラッシュの見抜き方) · **L152**(ペアボード) · **L170**(フラッシュとペア同時) · **L181**(ナッツ) ·
**L195**(ウェット/ドライ) · **L212**(お金を失うミス)
넣지 않는 곳: L34 「### 結論から」(H3 + 최상단 블록)

### tldr — 자기완결. 손대지 않는다.

### 태그 (8개)
기존 7개 + **「ポーカー ボードテクスチャ」(20)** 추가. H2 「ウェットボードとドライボード — テクスチャの読み方」가 근거.
🔴 「ポーカー ボード」 단독은 **보드게임 의도가 지배**하므로 태그로 넣지 마라(뱅크 §5).

### §13 자리
**L63~65** 표 3행 · **L82~86** A♥5♥ + 보드 A♦7♦4♠10♣2♠ · **L97~102** 보드 A♠A♦A♣7♥7♦ ·
**L113~122** 표 4행(8♦6♣ / J♠9♣ / A♥3♦ / K♥Q♦) · **L146** 오독 예시 2♠5♠9♥J♥10♠ ·
**L156~162** 보드 K♣K♦7♠3♥2♣ 표 3행(🔴 L160 「手札2枚とも使う」는 09-07 정정본) ·
**L174~175** Q♠7♠2♠K♦3♣ + A♠K♠ / 7♣6♦5♠4♥K♦ + 8♥8♦ · **L185~191** 보드 Q♣9♥6♣5♦2♠ 나츠 ·
**L200·L208** ウェット/ドライ 예시 · **L220** 스페이드 4장

### 하지 말 것
L119~122 표의 «21통» 서술과 그 아래 「これは7枚から5枚を選ぶ21通りの数え上げであって…」 문단(09-07 이식본) ·
L174~175 TDA 12/13-A 문장 · FAQ의 WSOPトーナメントルール75 · L146 「ペアになっていなければ」 단서 ·
steps / compare 블록 구조

---

## 7. 전 편 공통 마감 규칙

1. 🔴 **백틱 금지** · desc 160자 재확인 · FAQ 정형(Q 줄 + 빈 줄 + A 줄) · tldr 마크다운 금지 ·
   **굵은 단락 안 중첩 볼드 금지**.
2. 🔴 **본문에 한글이 섞이지 않았는지** 편마다 확인(회차 1에서 「무料」 오타를 냈고 게이트가 못 잡았다 — 진행 파일 §5-1).
3. masterUpdated는 **편마다 Edit**(일괄치환 금지): kicker → **2026-09-07** · tiebreak → **2026-09-07** ·
   나머지 4편은 그대로(hand-rankings·split-pot·reading-the-board 09-07 · flush-vs-straight 08-12).
   updated는 **손댄 6편 전부 2026-09-07**(tiebreak만 07-20 → 09-07, 나머지 5편은 이미 09-07 또는 08-12 → 09-07).
4. 편집이 끝나면 **자기 배치 게이트만**: `npm run audit:hard -- --locale=ja`. 렌즈는 C 구간이다.
5. 🔴 손대지 않는 것: 확률·조합 수치 · 이미지 경로와 alt · slug · readnext 대상 · 내부링크 대상 ·
   hand / stripe / tiebreak / quiz 블록 **구조**(위에 명시한 1행만 예외) · 경험담(ja는 현지화하지 않는다).
