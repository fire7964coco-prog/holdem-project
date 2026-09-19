# HI 키워드 뱅크 — `/hi/calculator` (계산기 랜딩 · 2026-09-19)

> 실측 2026-09-19. 도구 = Google 자동완성(47시드 × 2조합 `hl×gl`) · DataForSEO `search_volume`(location **India** 2356 ·
> 키워드 **36종 조회 · 표 등재 28**(나머지는 null) ·
> 🔴 `language_code` 제외) · DFS `serp/google/organic/live/advanced`(location 2356 · mobile · `language_code: en` /
> 🔴 힌디어는 **`language_name: "Hindi"`**로 — `language_code: "hi"`는 **40101 Internal SE Server Error**다).
> 🔴 CPC는 근거로 쓰지 않는다(벤더 간 30배). 브리프 = `docs/harden-brief/calculator-landing-rewrite.md` §3-A + §3-B~L.

## 0. 한 줄 결론

**힌디어 계산기 어휘는 시장에 없다 — 그리고 ms와 달리 «해상도 아래»로도 설명되지 않는다.**
인도 인구는 14억(말레이시아의 **44배**)인데 `पोकर कैलकुलेटर` 계열이 **전부 null**이고, 같은 표에서 `पोकर`는 **880**이다.
→ **2026-09-16 사장님 지시(「계산기라는 현지 용어가 없으면 그냥 영어로」)가 실측으로 확인된다.** 머리어는 영어를 유지한다.
단 **힌디어 SERP는 비어 있다**(9개 중 **5개가 `translate.google.com`** — id의 3/8보다 강한 신호) → 본문이 힌디어인 것 자체가 그 자리를 먹는다.

## 1. 코어 볼륨 (India · 월 · DFS `search_volume`)

### 1-A. 영어형 — 크게 살아 있다 (id·ms의 4.3배)

| 키워드 | Vol | 12개월 진동 |
|---|---|---|
| **poker odds calculator** | **390** | 320~480 |
| **poker calculator** | **210** | 170~320 |
| **poker equity calculator** | **110** | 90~110 |
| poker hand calculator | 70 | 50~90 |
| icm calculator | 30 | 20~90 |
| pot odds calculator | 20 | 10~70 |
| outs calculator · push fold chart · texas holdem calculator · holdem calculator | 각 10 | 바닥값 |
| which poker hand wins calculator · poker odds · texas holdem · poker probability calculator · icm poker · spr poker · rule of 4 and 2 · poker india | **null** | |

🔴 **id·ms와의 결정적 차이**: 두 로케일은 영어 머리어가 **90**이었다. 인도는 **390**이다.

### 1-B. 힌디어형 — 전부 null

| 키워드 | Vol |
|---|---|
| पोकर कैलकुलेटर | **null** |
| पोकर ऑड्स कैलकुलेटर | **null** |
| पोकर हैंड कैलकुलेटर | **null** |
| पोकर इक्विटी कैलकुलेटर | **null** |
| पोकर संभावना | **null** |
| टेक्सास होल्डम | **null** |

### 1-C. 🔴 대조군 — 시장은 있는데 «도구 축»만 없다

`पोकर` **880** · `पोकर नियम` 20 · `पोकर हैंड रैंकिंग` 10 · `पोकर कैसे खेलें` 10.

→ **§3-L ①의 판별을 그대로 적용하되 결론이 갈린다.** ms는 인구 3,200만이라 «10 미만 → null»이 구조적이었지만,
인도는 **14억**이고 같은 측정에서 `पोकर` 880이 잡힌다. **이 크기의 시장에서 null은 «해상도 아래»가 아니라 «진짜 없다»에 가깝다.**
🔴 **일반화**: 「null을 해석할 땐 **같은 표에서 잡힌 자국어 최대값**을 같이 봐라.」 ms는 그 값이 `texas holdem` 720이었지만
**영어**였다(말레이어 최대는 `peluang poker` 10). hi는 그 값이 **데바나가리 `पोकर` 880**이다 —
**자국어 문자로 880이 잡히는 시장에서 자국어 도구구가 null이면, 그건 측정 실패가 아니라 시장 사실이다.**

## 2. 자동완성 (47시드 × `hi-IN` / `en-IN`)

**생존 26 / 전멸 21.** 원자료 `tmp/hi-calc-suggest.json`(회차 후 삭제 · 수치는 이 문서가 정본).

### 2-A. 🔴 새 신호형 — 데바나가리 시드를 넣으면 구글이 «영어로 번역해서» 돌려준다

| 시드(데바나가리) | 돌아온 확장 |
|---|---|
| `पोकर संभावना कैलकुलेटर` | `poker probability calculator` · `… texas holdem` · `… app` · `… online` · `… free` (**5개 전부 영어**) |
| `पोकर इक्विटी कैलकुलेटर` | `poker equity calculator` · `… range` · `… plo` · `… github` … (**10개 전부 영어**) |
| `आईसीएम कैलकुलेटर` | **`lcm कैलकुलेटर`**(최소공배수 · 수학) + `icm calculator` 영어 9개 |

→ **데바나가리 도구 쿼리는 «확장»이 0이고, 구글이 그 자리를 영어 쿼리로 대체한다.**
id는 자동완성이 **0건**이었고(§3-K ①) ms도 **0건**이었지만, hi는 **0건이 아니라 «영어로 치환»**이다 — **세 번째 형태**다.
🔴 판별 규칙: 「데바나가리/비라틴 시드의 확장이 **전부 라틴**이면 그 언어의 쿼리 공간이 비어 있는 것이지 시드가 틀린 게 아니다.」

### 2-B. 완전 전멸한 데바나가리 시드 20개

`पोकर कैलकुलेटर` · `पोकर ऑड्स कैलकुलेटर` · `पोकर हैंड कैलकुलेटर` · `पोकर odds कैलकुलेटर` · `पोकर कैलकुलेशन` ·
`पोकर गणना` · `पोकर संभावना` · `पोकर इक्विटी` · `पोकर जीतने की संभावना` · `पॉट ऑड्स कैसे निकालें` ·
`आउट्स कैसे गिनें` · `पोकर में ICM` · `पुश फोल्ड चार्ट` · `पोकर हैंड रैंकिंग` · `पोकर में कौन जीता` ·
`पोकर ऑड्स चार्ट` · `पोकर हैंड की ताकत` · `पोकर में equity क्या है` · `पोकर चार्ट हिंदी` · `पोकर नियम हिंदी`

### 2-C. 영어형은 전부 살아 있다 (`hi-IN`·`en-IN` 사실상 동일)

`poker odds calculator` 10/10 · `poker calculator` 10/10 · `poker equity calculator` 10/10 · `poker hand calculator` 10/10 ·
`icm calculator` 10/10 · `pot odds calculator` 10/10 · `outs calculator` 10/4 · `push fold chart` 6/6 ·
`texas holdem calculator` 10/10 · `which poker hand wins` 10/10 · `pot odds poker` · `outs poker` · `equity poker` ·
`icm poker` · `spr poker` · `push fold poker` · `bubble poker` · `deal icm` 각 9~10 · `rule of 4 and 2` 10/10.

🔴 **`hl=hi`와 `hl=en`이 영어 시드에서 완전히 같은 답을 준다** — ms(§3-L ③)의 «hl 오염»과는 다른 결이다.
ms는 `hl=ms`가 **인니어**를 줬지만, hi는 `hl=hi`가 **영어**를 준다. 두 경우 다 「`hl`로 언어를 판정하지 마라」로 수렴한다.

### 2-D. 오염 갈래 (시드마다 «확장 10개가 내 업종인가» — §3-H)

| 시드 | 오염 | 처방 |
|---|---|---|
| `आईसीएम कैलकुलेटर` | **`lcm कैलकुलेटर`**(최소공배수 · 수학) | 🔴 **인도 고유 갈래.** 데바나가리 약어를 쓰지 마라 — 라틴 `ICM`만 |
| `icm calculator` | `icm calculator weight`·`kg`·`peso`·`greutate` + PAS | fr·ms가 잡은 체중 오염이 인도에도(로케일 상수에 가깝다) |
| `spr calculator` | **`sip calculator`**(인도 금융 Systematic Investment Plan) · `spr cpf calculator`(싱가포르 CPF) | 🔴 **`sip`은 인도 고유** — `spr poker` 앵커 필수 |
| `poker hindi` | `poker hindi meaning in english`·`… in malayalam`·`poker hindi word meaning` = **사전 의도** | 🔴 «hindi»를 시드·제목에 넣지 마라. 포커 의도가 아니다 |
| `poker calculator india` | 확장 **0건** | 지역어 결합은 죽어 있다 |
| `chip chop poker` | `chip chop meny`·`chip amount for poker` | 훅으로 쓰지 않는다(ja 明治 과자와 같은 결) |

## 3. SERP (DFS advanced · location 2356 · mobile)

### 3-A. `poker odds calculator` (`language_code: en`) — depth 20 → **승산 0**

**19/19가 글로벌 영어 포커 도구 업계. 인도 페이지 0건 · 힌디어 0건.**
cardplayer #1 · pokernews #2 · omnicalculator #3 · 888poker #4 · natural8 #5 · runitonce #6 · splitsuit #7 ·
YouTube · edge.poker · upswingpoker · uptodown · b-inary.github.io · governorofpoker · tightpoker · pokercoaching · gtogecko.
→ id(10/10) · ms(20/20)와 **동형**. 영어 축이 390으로 훨씬 큰데도 **조준하지 않는 이유가 이것이다.**

PAA: How are odds calculated in poker? · **What is the 42 rule in poker?** · What is the 7-2 rule in poker? ·
What is the best poker odds calculator? · Can AI win at poker? · How do you calculate odds?
PAS: app · pre flop · Omaha 5 · **poker odds chart** · heads up · software · PLO · range · online ·
5 card poker hand calculator · Cardplayer poker odds calculator · poker equity calculator.

### 3-B. 🔴 `पोकर कैलकुलेटर` (`language_name: "Hindi"`) — **자리가 비어 있다 (가장 강한 신호)**

| # | 도메인 | 무엇 |
|---|---|---|
| 1 | **translate.google.com** | 영어 Wikipedia 「Poker calculator」의 **기계번역** |
| 2 | **translate.google.com** | pokerlistings 「which hand wins」의 기계번역 |
| (3) | Play Store | 앱 3개(Poker Calculator · Poker Odds Calculator) |
| 4 | **translate.google.com** | Microsoft Store 앱 페이지의 기계번역 |
| 6 | **translate.google.com** | runitonce 도구의 기계번역 |
| 7 | **translate.google.com** | pokerhandrange.com의 기계번역 |
| 8 | omnicalculator | **영어 원문** + 「हिंदी में देखने के लिए क्लिक करें」(번역 제안) |
| 9 | calcbe.com/hi-in | 얇은 계산기 애그리게이터 |
| 10 | YouTube | 영어 영상 |
| 11 | poker-tool.org/hi | 소형 도구 사이트 |

🔴 **유기 결과 9개 중 5개(55%)가 `translate.google.com`이다.** id의 3/8(37.5%)보다 강하고,
**#8조차 «힌디어로 보시겠습니까»를 달고 있는 영어 페이지**다. 구글이 힌디어로 내줄 원문이 **없다.**
→ §3-K ②의 신호(«translate.google.com이 랭크에 있으면 그 자리는 비어 있다»)의 **세 번째이자 가장 뚜렷한 실증**.

🔴 **그러나 이 공백이 «힌디어 머리어를 쓰라»는 뜻은 아니다** — 그 자리에 **검색량이 없다**(§1-B).
공백 + 수요 없음 = **제목을 바꿔서 얻을 게 없고, 본문이 힌디어인 것만으로 충분하다.** (ms는 공백 + 수요 불명이라 제목까지 갔다.)

## 4. 코퍼스 실측 (`lib/posts-hi/*.ts` · 21편 · 361,525 UTF-16)

### 4-A. 라틴 포커 용어가 정본 — 데바나가리 음차는 거의 0

| 라틴 | n | 데바나가리 | n |
|---|---|---|---|
| bet | **821** | बेट | 1 |
| pot | **508** | पॉट | 156 |
| check | 378 | चेक | 0 |
| call | 283 | कॉल | 3 |
| raise | 308 | रेज | 0 |
| fold | 167 | फोल्ड | 0 |
| equity | **186** | इक्विटी | **0** |
| stack | 177 | स्टैक | 2 |
| chip(s) | 142 | चिप | **0** |
| draw | 152 | ड्रॉ | 0 |
| outs | 19 | आउट | 0 |
| all-in | 149 | — | — |

🔴 **예외 둘**: ① **`board` 137 : `बोर्ड` 313** — 산문에서는 **데바나가리가 지배형**이다
(`hi-posting-reference` §1 「일반 산문의 बोर्ड와 정확한 UI **Board**는 구별한다」)
② **`हैंड` 606 : `hand` 47 : `हाथ` 19** — 패는 **`हैंड`**가 압도적 정본.

### 4-B. 조판 — `percentGap` 불필요 · `numberLocale: "en-US"` 유지

- 숫자 뒤 `%`: **붙여 씀 1,611 : 반각 0 : 고정공백 0** → **`percentGap` 키를 넣지 않는다**(게이트 G항 · 브리프 §5 ✅ 절).
  🔴 **데바나가리 선례가 없어 이 측정이 유일한 근거다**(hi는 09-19까지 G항 「미검사」 로케일이었다).
- 소수 구분자: **점 2,179** · 진짜 소수 콤마 **0**. (`[0-9],[0-9]` 335건 중 **306이 rgba CSS 색상** — §3-L ⑥의 마크업 필터를 그대로 적용했다.)
- 천단위: 콤마 29(`100,000`·`198,000`형) · **लाख 묶음(`1,00,000`) 0건** → `en-US`가 정본
  (`hi-IN`을 쓰면 ICU가 `1,00,000`으로 찍어 코퍼스와 어긋난다).

### 4-C. FAQ 질문 어형

`क्यों` 183 · `किस` 114 · `कौन` 60 · `कैसे` 55 · `कितनी` 34 · `कब` 37 · `कितना` 20 · `क्या है` 41 · `क्या होता` 13.
- 채택 어형 = **`कैसे …?`**(방법) · **`कितना/कितनी …?`**(수량) · **`क्यों …?`**(이유) · **`क्या … सकते हैं?`**(가부).
- 🔴 정의형 `X क्या है?`(41)는 **규율상 배제** — `holdem-icm`·`holdem-pot-odds` 의도는 형제 글 몫이고 hi엔 그 글이 없다.
  (기존 hi FAQ Q2 「पोकर में ICM क्या है?」가 정확히 이 형이라 **교체 대상**이다.)

## 5. 🔴 채택 판정 — 왜 영어 머리어를 «유지»하나 (ms와 «같은 측정, 다른 결론»)

| | id (09-19) | ms (09-19) | **hi (09-19)** |
|---|---|---|---|
| 영어 : 자국어 볼륨 | 90 : 10 | 90 : null | **390 : null** |
| 자국어 문자 최대 볼륨 | — | `peluang poker` 10 | **`पोकर` 880** |
| 인구 | 2.8억 | 3,200만 | **14억** |
| 영어 SERP | 10/10 업계 | 20/20 업계 | **19/19 업계** |
| 자국어 SERP | 3/8 translate | #1 개인습작 + 3/8 불일치 | **5/9 translate(최강)** |
| 자동완성(자국어) | 0건 | 0건 | **0건 + «영어로 치환»** |
| **제목 머리어** | 자국어로 **교체** | 자국어로 **교체** | 🔴 **영어 유지** |

🔴 **판정 근거는 «자국어 SERP가 비었나»가 아니라 «그 자리에 수요가 있나»다.**
id·ms는 자국어 볼륨이 null이어도 **인구 대비 해상도 아래**로 설명됐지만(§3-L ①),
hi는 **14억 인구에서 데바나가리 `पोकर`가 880으로 잡히는데도** 도구구가 null이다 — **해상도가 아니라 부재**다.
→ **2026-09-16 사장님 지시(「계산기라는 현지 용어가 없으면 그냥 영어로」)를 되살릴 근거가 아니라 «확인»하는 실측이다.**
`CALC_CTA_LABELS.hi`의 영어 문구도 **`location=India` 재측정 후 유지**한다(id·ms처럼 교체하지 않는다 — 브리프 §3-J 「로케일 상수가 아니다」).

🔴 반대 근거도 적어 둔다(되살리기 방지): **힌디어 SERP 공백(§3-B)은 실재한다.** 다만 그 공백을 먹는 수단은
«제목을 힌디어로 바꾸는 것»이 아니라 **«본문·H2·FAQ가 힌디어 원문인 것»**이다 — 그 자리의 경쟁자는 전부 기계번역이다.

## 6. 채택 (09-19)

- **제목** `Poker Odds Calculator — equity, pot odds और ICM`
  - 머리어 = 영어 `Poker Odds Calculator`(**390** · 사장님 승인 · 코퍼스 라틴 정본) — §5.
  - 차별화어 = `equity`(110) · `pot odds`(20) · `ICM`(30) 토큰을 제목이 전부 들고 있게.
  - 접속사 `और` 하나만 힌디어 — SERP에서 **이 페이지가 힌디어임**을 알리는 신호(경쟁자가 전부 기계번역이라 값이 있다).
- **설명** ≤160자(게이트 `check:calc-parity` desc 항).
- **Equity 탭** = «Equity» / 부제 «हैंड बनाम हैंड»(`इक्विटी` 0 · §4-A · 솔버 앱은 `Equity(हिस्सा)` — 도구 라벨은 라틴 유지).
- **빠른 참조 6표** — 수치 EN 그대로(§13).
  🔴 **EN 9슬러그가 hi에 1/9 존재**(ms와 동형 · 🪶 그중 `related`가 쓰는 8슬러그만 보면 **0/8**이다 — 두 수를 섞지 마라) → 링크는 실재하는 것만(게이트 F항):
  | 표 | EN 링크 | hi |
  |---|---|---|
  | ① 프리플롭 매치업 | holdem-probability | **비움** |
  | ② AA vs 랜덤 N | holdem-equity | **비움** |
  | ③ 아웃츠 | holdem-outs | `3bet-pot-bet-sizing`(draw 가격이 주제) |
  | ④ 팟오즈 | holdem-pot-odds | `texas-holdem-rules-for-beginners`(pot odds 첫 예시) |
  | ⑤ SPR | holdem-short-stack | `3bet-pot-cbet`(SPR·stack이 주제) |
  | ⑥ M값 | holdem-tournament-vs-cash-game | ✅ 실재 |
- **FAQ 8 → 18** = EN 17 + hi 고유 1(**TDA 2024 Rule 5-D** 「क्या टेबल पर कैलकुलेटर इस्तेमाल कर सकते हैं?」 —
  es·pt·de·fr·id·ms·zh-hant와 같은 축). 🔴 기존 Q2 「पोकर में ICM क्या है?」는 **정의형이라 교체**(§4-C).
- **관련 글 6 → 8** — EN `related` 8슬러그가 **0/8**이라 **전부 hi 코퍼스에서** 고른다.
- **솔버 카니발 처방**(§3-K ④): `app/hi/solver/solver-client.tsx`의 `PICK_TOOL`에 **계산기 행이 아예 없다**(ms와 동형 · 처음부터 빈 것)
  + `app/hi/solver/faq.ts:90` 「यह पोकर odds कैलकुलेटर है या रणनीति सॉल्वर?」가 `/hi/calculator`를 **안 가리킨다**(fr형 흡수)
  → 행 3개 신설 + FAQ 답에 인계 문장.

## 7. 미구현 수요 (넣지 않았다 · 뱅크 보존)

- **Omaha / PLO** — 인도 SERP의 runitonce #6이 PLO, PAS에 `Omaha 5`·`PLO` 반복. 우리 도구는 홀덤 전용 → 넣지 않는다.
- `poker variance calculator` · `poker ev calculator` — EN 뱅크와 동일하게 미구현.
- `which poker hand wins calculator`(null이지만 PAS·자동완성에 살아 있다) — Equity 탭이 리버 5장에서 승자·족보를 주므로 **충족**.

## 8. 다음 세션 인계

- 🔴 **계산기 로케일 트랙은 hi로 11/11 종료다**(ko는 별도 후순위 · 브리프 §0).
- 🔴 **이 회차가 발견한 전 로케일 부채** = `/hand-chart`(한국어 UI 도구 페이지)를 가리키는 포스트 링크가
  **21로케일 29자리**에 있다(브리프 §5 참조). fr 미결 ②가 fr 고유가 아니었다.
- GSC 첫 판독은 핸드오프 4번 항목의 창에서 — hi는 **쿼리 단위로 내려가도 볼 게 없을 가능성이 높다**
  (조준한 영어 축 `poker odds calculator` 390은 SERP 19/19라 노출이 붙기 어렵고, 힌디어 축은 볼륨 자체가 null이다).
  **기록할 것은 순위가 아니라 «데바나가리 쿼리에 노출이 붙는가»** — 붙으면 §3-B의 공백 판정이 맞은 것이다.
