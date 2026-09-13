# 브리프 — queue 회차 Q5-a · EN-먼저 묶음 II 전반(`en-first-queue` §1 ①~㉑)

> 규격 = `docs/hardening-protocol.md` §3 · 레인 규율 = §7-F. **A 구간 실측 2026-09-13.**
> 🔴 **이 회차의 첫 발견: 21건 중 9건이 이미 종결돼 있었다.** 목록은 2026-09-10 핸드오프 대청소(`bb68af3b`)가
> 옮겨 적은 것인데, 그 사이 `65dc0d1d`(09-02) · `125c83f5`(09-09) · Q4-a(`b311d693` 09-12)가 이미 고쳤다.
> [[absence-may-be-the-standard]] · [[stale-freeze-notes-verify-worklog]] — **목록이 아니라 원문이 심판이다.**

## 0. 전건 판정표 (①~㉑)

| # | 판정 | 근거(실측) |
|---|---|---|
| ① wpt NSW 11개월 공백 | ✅ **이미 종결** | `65dc0d1d`(09-02)가 「defers the reduction to AUD $1,000/day until **19 August 2027**」로 재서술. 공백 없음 |
| ② apt «개막 전 마감» 3자리 | ✅ **이미 종결** | EN L39·L70·L143·L404 전부 「closed on **Aug 7, the festival's opening day**」 |
| ③ bad-beat overpair 행 «fills on the river» | ✅ **이미 종결** | Q4-a(`b311d693`)가 L92를 「Their nine flush outs, plus backdoor two pair or straight, **get there by the river**」로 — 두 장 기준을 담았다 |
| ④ ept Gold Pass €690 ↔ Food €400–600 | 🔴 **채택** | EN L209·L211·L212 실측: 패스가 «€690 expenses 포함»인데 바로 아래 Food를 **만액 계상**. 총액 €550–€1,000 = 항공+식사로 산수는 맞는다(빠진 것은 파워패스 바이인 $0.5–11뿐) → **결함은 총액 산수가 아니라 €690을 두 번 세는 것** |
| ⑤ bad-beat 잭팟 표 라벨 «Rest of the table» | ✅ **이미 종결** | `125c83f5`(09-09)가 「**Others dealt into the hand**」로. **8로케일 전부 정상**(de·es·id·pt·ja·zh·zh-hant 실측). 「Rest of the table」은 현재 `lib/` 전체에 **0건** |
| ⑥ PDF «Suited adds only ~2–3% equity» | 🔴 **채택** | `scripts/starting-hands-chart-print.html:338` 실존 ↔ 본문 `holdem-starting-hands-chart.ts:280` 「about **2 percentage points**(AKs 67% ↔ AKo 65%)」. PDF는 재생성 가능(`scripts/render-starting-hands-pdf.mjs`) |
| ⑦ es glossary «Mano a mano» 중복 | 🔴 **채택** | es L209(hand-for-hand) · L245(heads-up)가 **같은 표제어**. EN은 `Hand-for-hand`/`Heads-up`로 갈려 있다. 🪶 **근거는 웹이 아니라 코퍼스다** — es `holdem-bubble.ts`는 「hand-for-hand」를 **번역하지 않고 그대로** 쓴다(desc·L138·L140·L141) |
| ⑧ bubble H4H 스톨 불릿 | ✅ **이미 종결** | EN L140이 「During hand-for-hand that hope is **misplaced** … every table runs the same number of hands(WSOP 126.a·126.c)」 = 실익 0 한정 보유 |
| ⑨ content 종단 `.trim()` | 🟠 **채택(기계적)** | 실측 32파일: ja 4 · es 20 · de 3 · zh 3 · zh-hant 2. en·ar·fr·id·pt는 100% |
| ⑩ blind-meaning «Two habits» ↔ 불릿 3개 | 🔴 **채택** | EN L141~145 실존. **de·id는 이미 정본**(「ein dritter Zug holt es aus später Position zurück」 / 「ditambah satu pola dari posisi akhir」) → 이식만. ja·fr은 해당 문단 없음 |
| ⑪ beginners «none of them are about strategy» | 🔴 **채택** | EN L362 ↔ 실수 3·4·5(팟오즈·핸드선택·포지션)가 전부 전략. **de가 정본**(「Die ersten beiden sind reine Regelunsicherheit; die anderen drei kosten Chips, lange bevor Strategie überhaupt eine Rolle spielt」) · pt·id도 이미 완화. ja는 재저작(다른 프레이밍) · fr·zh-hant는 해당 절 없음 |
| ⑫ beginners ×4 캐비어트 | ✅ **이미 종결** | EN L314 「⚠ The ×4 rule only holds if you will not have to pay another bet before the river … count **one** card: 9 ÷ 47 = ~19%」 |
| ⑬ showdown 사이드팟 «누가 먼저 여는가» | ✅ **이미 종결** | EN L43·L79·L85·L182 + **pt L89·L93·L184**도 보유(Live Action Rule 149) |
| ⑭ reading-the-board «How common» 헤더 | ✅ **이미 종결** | 헤더 = 「**Of the 21 possible 5-card picks**」 + 표 아래 한정문(「not how often each case comes up at the table」) |
| ⑮ flush-vs-straight 추상 표 | 🔴 **채택(es 1곳)** | EN L138은 괄호 캐비어트 보유 → **EN 정상**. ja·zh·zh-hant도 보유. **es만 결손**(L137 다음 문단에 괄호절 없음) |
| ⑯ `:::tiebreak` «Royal Flush｜Always a tie» | ✅ **이미 종결** | hand-rankings L185 · tiebreak-rules L84 둘 다 「Tie only when the board itself is the royal — everyone chops」 |
| ⑰a kicker two pair FAQ «Q-7-7» | ✅ **이미 종결** | EN L176 = `Q♣ 7♠ 7♦ 4♥ 2♣` 5장 보드. §13 검산 = K♥Q♦ → Q-Q-7-7-**K** · J♠Q♥ → Q-Q-7-7-**J** · K 키커 승 ✅ |
| ⑰b FAQ↔H2 축어중복 9건 | 🟠 **부분 채택** | 재측정(최장 공통 어절): **6자리**(kicker 19·11·10 · reading 13·10 · tiebreak 9). 🔴 **직답블록↔FAQ 5자리는 기각** — Q-A-E 설계상 둘 다 자기완결 패시지이고 거리가 멀다(선례 = 대기열 33 ⑨ 「≤9단어 결함 아님」의 취지 = **거리**). **채택 1자리 = reading-the-board FAQ L268 ↔ L272** — **인접한 두 FAQ**가 같은 명제를 거의 축어로 반복(한 화면 안이다 · Q2-c 「세 겹」 판정과 같은 축) |
| ⑱ outs 표 «Turn only (1 card)» | 🔴 **채택** | EN L95 헤더 실존. 값은 전부 ÷47(9 → 19.1%) = **플랍에서 보는 다음 한 장**. **de·id·zh는 이미 정본**(「Nur Turn (1 Karte, **vom Flop**)」 / 「**Flop → turn** (1 kartu)」 / 「**翻牌 → 转牌**（1 张）」) → es·ja·pt·zh-hant + EN |
| ⑲ card-counting «the river is free» | 🔴 **채택** | EN L125 실존. **id가 정본**(「atau **turn dan river sama-sama** gratis」) · pt·zh·zh-hant도 이미 정확 → EN·de·es·ja 4자리 |
| ⑳a drawing-odds «one in six on a single street» | 🔴 **채택** | 실측: 플러시드로 9아웃 = **19.1%(1/5.2)** · OESD 8아웃 = **17.0%(1/5.9)** → 「one in six」는 과소. **id가 정본**(「satu dari **lima sampai enam**」) |
| ⑳b «exactly four flops» | ✅ **이미 종결** | EN L148이 가장자리를 전수 열거(「QJs three, KQs two, A2s one」). 직접 검산: 54s 4 · JTs 4 · QJs 3 · KQs 2 · A2s 1 ✅ |
| ㉑a pot-odds «35% > 25%» 두 장 전제 | ✅ **이미 종결** | EN pot-odds L55·L231 둘 다 「with two cards to come and no more betting」 |
| ㉑b implied-odds 오버카드 아웃 무언급 | 🔴 **채택** | EN L87 「9 outs ÷ 46 unseen cards」만. **id가 정본**(「kami sengaja menghitung hanya outs flush; … overcard bukan out bersih」). 🔴 **교육 전제가 걸린 자리다** — 오버카드 6장을 더하면 15/46 = **32.6% > 25%**라 팟오즈만으로 콜이 돼 이 절의 결론이 뒤집힌다 |

**요약**: 종결 9 · 채택 12(④⑥⑦⑨⑩⑪⑮⑰b⑱⑲⑳a㉑b) · 부분기각 1(⑰b 5자리)

## 1. 모델 구간 재조정 (§5-A-3)

회차 표는 「A Opus → **B Fable** → C Opus」였다. **실측 후 B를 Opus로 흡수한다** — Q4-a와 같은 사유:
채택 12건 중 **새 문장 집필은 ④ 한정문 1문장 · ⑪ 인트로 1문장뿐**이고, 나머지는 **짧은 한정어 치환 · 표 헤더 교체 · 기계적 `.trim()` · 이미 존재하는 로케일 정본의 이식**이다.
🔴 **정본 이식은 «집필»이 아니다** — de·id·zh의 기존 문안을 EN·타 로케일로 옮기는 것이므로 창작 구간이 없다.

## 2. 자리별 처방 (편집은 이것만 보고 한다)

### ④ ept-barcelona — Gold Pass 시나리오 표 (EN + de·es·id·ja·pt·zh·zh-hant)
표는 **한 자도 바꾸지 않는다**(값·총액 정확). 표 아래 문단 앞에 한정문 1개 신설:
> EN 축어: `One caveat about that total: the pass already includes €690 of expenses, and this table still counts food and extra days at full price on top of it — so read the range as a ceiling, not an expectation.`
- ja는 총액 행이 「自己負担(航空券を除く) 約€400〜€600」로 **재저작본**이다 → 같은 취지의 한정문을 그 구조에 맞춰(항공권 제외 문맥 유지).
- 🔴 €690을 «항공권에 쓴다»고 적지 마라. 원문이 말하는 것은 «expenses»뿐이다.

### ⑥ starting-hands-chart PDF 카드 (`scripts/starting-hands-chart-print.html:338`)
`Suited adds only <b>~2&ndash;3% equity</b>` → `Suited adds only <b>~2 points of equity</b>` (본문 축어 = 「about 2 percentage points … AKs is 67% …; AKo, 65%」).
그 다음 `node scripts/render-starting-hands-pdf.mjs` 재생성 → `npm run check:pdf-page`.

### ⑦ es glossary (`lib/posts-es/holdem-glossary.ts`)
- L209 표제어 `**Mano a mano (hand-for-hand)**` → `**Hand-for-hand**` (es bubble 글 축어와 일치)
- L245 표제어 `**Mano a mano (heads-up)**` → `**Heads-up (mano a mano)**` (es 코퍼스에서 「mano a mano」는 heads-up 뜻으로 20+회)
- 설명문은 건드리지 않는다.

### ⑨ `.trim()` 32파일
`content` 템플릿 리터럴의 닫는 백틱에 `.trim()`을 붙인다. 🔴 **정규식 일괄치환 금지** — 파일마다 `content:` 필드의 닫는 백틱만.
대상: ja 4(ept·japan-poker-tournaments·wpt·wsop) · es 20 · de 3(ept·poker-turnier-muenchen·wpt) · zh 3(ept·wpt·wsop) · zh-hant 2(taiwan-poker-clubs·wsop).
🔴 **`updated`를 올리지 않는다** — §1-C 「기계적 변경은 안 올린다」. 렌더 산출물 동일성을 C에서 증명한다.

### ⑩ blind-meaning 「Two habits」 (EN + ar·es·pt·zh·zh-hant)
EN L141 `Two habits fix most of it:` → `Two habits in the blinds fix most of it — and one late-position move wins some of it back:`
(de 정본 축어 = 「Zwei Gewohnheiten in den Blinds beheben das meiste davon, ein dritter Zug holt es aus später Position zurück:」 · id 정본 = 「Dua kebiasaan di kursi blind memperbaiki sebagian besarnya — ditambah satu pola dari posisi akhir yang perlu Anda kenali:」)
- zh는 **직답 블록 L165**에도 「两个习惯能修好大半」이 있다 — 그 블록은 SB·BB 둘만 열거하므로 **열거 자체는 정상**이다. 본문 L169만 고친다.
- 🔴 ja·fr·de·id는 대상 아님.

### ⑪ beginners 인트로 (EN + ar·es·zh)
EN L362 `— and none of them are about strategy. They come from not yet trusting the rules.`
→ `— and the first two are pure rule confusion, while the other three cost chips long before anything you would call advanced strategy.`
(de 정본 축어 = 「Die ersten beiden sind reine Regelunsicherheit; die anderen drei kosten Chips, lange bevor Strategie überhaupt eine Rolle spielt.」)
- zh는 **직답 블록 L402에도** 「五个错误，没有一个是策略问题」이 있다 → 두 자리 다.
- 🔴 pt(「nenhum deles exige estratégia avançada」)·id(「sebagian besar … bukan dari strategi yang rumit」)는 **이미 정확하다 — 되돌리지 마라.**

### ⑮ es flush-vs-straight 캐비어트 (es 1곳)
L138 문단 끝에 괄호절 추가. EN 축어 = `(In a real Hold'em hand two flushes are always the *same* suit, since both are built from the shared board — this abstract example just drives home that ranks, never suits, decide a flush.)`
→ es로 재저작(ja·zh·zh-hant 기존 번역과 같은 취지).

### ⑰b reading-the-board 인접 FAQ (EN + 7로케일 동형이면 함께)
L268(「How do you know if a flush is possible on the board?」)의 답을 **자기 질문까지만** 자른다:
`… with all 5, the board itself is a flush.` 에서 종료 — 뒤따르는 「a card of that suit higher than … beats every flush」는 **바로 다음 FAQ(L272)의 소유**다.
🔴 L272는 한 자도 건드리지 않는다.

### ⑱ outs 변환표 헤더 (EN + es·ja·pt·zh-hant)
EN L95 `| Outs | Turn only (1 card) | …` → `| Outs | Flop → turn (1 card) | …`
그리고 L107 설명문의 `**"Turn only"** counts just the next card` → `**"Flop → turn"** counts just the next card`.
정본 축어: de 「Nur Turn (1 Karte, vom Flop)」 · id 「Flop → turn (1 kartu)」 · zh 「翻牌 → 转牌（1 张）」.
🔴 **숫자는 한 자도 바꾸지 않는다**(4.3/8.4/11-to-1 … 전부 ÷47 기준으로 맞다).

### ⑲ card-counting ×4 조건 (EN + de·es·ja)
EN L125 `(you're all-in, or the river is free)` → `(you're all-in, or both the turn and the river are free)`
정본 축어: id 「atau turn dan river sama-sama gratis」.

### ⑳a drawing-odds 「one in six」 (EN 2 + de 2·es 2·ja 3·pt 2·zh 2·zh-hant 2)
`one in six on a single street` → `one in five to six on a single street` (정본 = id 「satu dari lima sampai enam」).
- ja는 **직답 L131에도** 「およそ6回に1回」이 있다 → 3자리.
- 🔴 「halves to / 반으로 줄어」류 표현이 남으면 산수가 어긋난다(35% → 19.1%는 정확히 절반이 아니다) → 「약 5~6회에 1회로 내려간다」류로.

### ㉑b implied-odds 클린 아웃 한정 (EN + de·es·ja·pt·zh·zh-hant)
`(9 outs ÷ 46 unseen cards)` → `(9 outs ÷ 46 unseen cards — we count flush outs only; pairing the ace or king is not enough to be sure you are ahead, so the overcards are not clean outs)`
정본 축어: id 「kami sengaja menghitung hanya outs flush; memasangkan ace atau king belum tentu cukup untuk menang, jadi overcard bukan out bersih」.

## 3. §13 자리 — C 구간 손검산 대상
- ⑰a kicker FAQ L176 `Q♣ 7♠ 7♦ 4♥ 2♣` (A에서 이미 검산 ✅ — 재확인만)
- ⑰b reading-the-board L272 `K♠ 6♠ 5♠ 4♠ 3♠` ↔ 2♠·7♠ 스트레이트플러시 (A 검산 ✅: 2-3-4-5-6 · 3-4-5-6-7 · 둘 다 A♠ 플러시를 이긴다)
- ⑱ outs 표 7행 전건 ÷47 재검산
- ⑳a 19.1% / 17.0% 재검산
- ㉑b 9/46 = 19.6% · 15/46 = 32.6% 재검산

## 4. 이 회차에서 하지 말 것
- ⑤·②·③은 **다시 열지 마라** — 이미 정정본이다. ② apt는 «EN을 따라 로케일을 되돌리지 마라»가 §3에 있다.
- ⑱ 표의 **숫자·「River odds」 열**은 손대지 않는다(값은 by-the-river 기준으로 정확하다).
- ⑳b 「four flops」 열거는 정본이다 — 「exactly four」로 되돌리지 마라.
- pt·id·de·zh의 **이미 정확한 문안을 EN 문면에 맞춰 되돌리지 마라**(⑪ pt·id · ⑲ pt·zh·zh-hant · ⑱ de·id·zh · ⑳a id · ㉑b id).
- ⑰b **직답블록↔FAQ 중복 5자리는 기각이다** — 「축어중복」이라고 다시 올리지 마라(설계다).
