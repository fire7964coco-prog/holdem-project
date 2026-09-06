# hi 포커 용어·표기 브리프 (번역 착수 전 웹리서치 결과)

> 대상 = **힌디어(hi, हिन्दी)**. 인도 포커 글로시(getmega.com/hi · pokerlistings.in · khelplayrummy.com · mpl.live/hi · pokerkheloindia.com) 기준. 인도 포커 콘텐츠는 **데바나가리 산문 + 영어 포커 용어 혼용**. ★**기존 hi 글(hand-rankings·game-order)이 이미 "영어 포커 용어를 라틴 스크립트 인라인"으로 확립** → hreflang 클러스터 일관성 위해 **그 관습 유지**(음차 데바나가리로 갈아엎지 말 것).

## 용어 (현지 관습 — 데바나가리 산문 + 라틴 영어 포커 용어)
- **핵심 원칙**: 본문은 데바나가리로 자연스럽게 쓰되, **포커 전문 용어는 라틴 영어 그대로 인라인**(blind, bet, raise, fold, call, check, all-in, flop, turn, river, showdown, pot, kicker, hole cards, community cards, dealer, button, side pot, stack, bluff). 첫 등장 시 짧은 데바나가리 뜻 병기 가능(예: **blind (अनिवार्य दांव)**). 이건 기존 hi 글의 확립된 하우스 스타일이다.
- 🔴 **족보 = 라틴 표기가 정본이다** (2026-09-06 정정 · 코퍼스 전수 실측이 심판).
  > **왜 고쳤나**: 이 절의 초판은 «데바나가리 통용명(रॉयल फ्लश …)»을 권했는데, **이미 발행한 `lib/posts-hi` 8편은 라틴 100%이고 데바나가리 족보는 전건 0회**다. 초판대로 쓰면 새 글이 라이브 8편과 갈린다.
  >
  > **실측(2026-09-06 · 본체 독립 재계수 · 8편 142,232 UTF-16 code units)** — 솔버 세션 M-098 §B의 집계와 전건 일치:
  >
  > | 족보 | 라틴 | 데바나가리 |
  > |---|---:|---:|
  > | Royal Flush | 14 | **0** |
  > | Straight Flush | 14 | **0** |
  > | Four of a Kind | 14 | **0** |
  > | Full House | 33 | **0** |
  > | Flush | 77 | **0** |
  > | Straight | 54 | **0** |
  > | Three of a Kind | 24 | **0** |
  > | Two Pair | 25 | **0** |
  > | High Card | 12 | **0** |
  >
  > 🪶 솔버 집계는 142,239 code units로 7 차이가 난다(집계 대상 파일 경계 차이로 보인다 · **결론은 같다**).

  - Royal Flush · Straight Flush · Four of a Kind(= quads) · Full House · Flush · Straight ·
    Three of a Kind(= set) · Two Pair · One Pair · High Card — **전부 라틴 그대로.**
  - 데바나가리 병기는 **첫 등장 1회에 한해 선택**이다(예: **Full House (फुल हाउस)**). 🔴 **본문 전체를 데바나가리 족보로 갈아엎지 마라** — 라이브 8편과 갈린다.
  - 카드·무늬 표기는 라틴·기호 그대로(`A♠` `K♥` `10♦`).
- **액션**: check → **check**, bet → **bet (दांव)**, call → **call**, raise → **raise**, fold → **fold**, all-in → **all-in**. (음차 चेक/बेट/रेज़/फोल्ड/कॉल도 통하나 라틴 인라인이 기존 글 관습.)
- **블라인드**: Blinds → **blinds (अनिवार्य दांव)**, Small Blind → **small blind (SB)**, Big Blind → **big blind (BB)**.
- **스트리트/구조**: pre-flop/preflop, Flop, Turn, River 그대로. betting round → **betting राउंड / दांव का राउंड**, showdown → **showdown**.
- **핵심 명사**: card → **कार्ड**, community cards → **community कार्ड**, hole cards → **hole कार्ड**, hand(패) → **हैंड**, hand rankings → **हैंड रैंकिंग**, pot → **pot**, main pot → **main pot**, side pot → **side pot**, kicker → **kicker**, dealer → **dealer**, button → **button (BTN)**, chips → **chips**.
- **포지션 약어는 영어**: UTG, CO(Cutoff), MP, HJ, SB, BB, BTN.

## 표기 (⚠️ 중요 — **영어식 계열: en·zh·ar·ms와 동일**)
- **숫자 = 서양식 그대로 (변환 없음)**: 인도 콤마 체계는 lakh(1,00,000·10만) 경계에서만 서양식과 다른데, §13 값은 전부 10만 미만(1,326·169·2.5·8%·0.84%·35%·2.7:1 등) → **서양식과 표기 동일**. 천단위 `,` · 소수점 `.` **그대로 유지**. 영어식 `1,326`/`2.5`를 절대 유럽식(`1.326`/`2,5`)으로 바꾸지 말 것.
- **라틴 숫자(0-9) 사용** — 데바나가리 숫자(०-९) 쓰지 말 것. 인도 디지털/게이밍 콘텐츠 표준이 라틴 숫자다(기존 hi 글도 "2 hole कार्ड", "15 सेकंड"처럼 라틴).
- **카드 표기 라틴 유지**: `A♠`, `K♥`, `10♦`, 보드 그대로. 무늬 기호 ♠♥♦♣ 그대로.
- **화폐**: `$` 그대로(§13 보존 — 인도 통화 ₹로 바꾸지 말 것, 마스터 수치 훼손 방지).

## 문체
- **आप**체(정중한 2인칭, 인도 콘텐츠 표준 — 친근하되 존중). 자연스러운 힌디 구어체(딱딱한 산스크리트식 직역 금지, "Hinglish" 톤 자연스러움 최우선). 인도 포커 커뮤니티가 실제 쓰는 리듬.
- 데바나가리 문법·성별 일치(लिंग)·후치사(को/में/से) 정확. 철자·마트라(मात्रा) 오타 = §13급 신뢰 리스크.

## SERP
- 검색어: "poker kaise khelte hain", "टेक्सस होल्डम कैसे खेलें", "पोकर हैंड रैंकिंग", "small blind big blind क्या है", "all-in नियम" 등. seoTitle/desc는 인도 검색자 실제 표현으로(Hinglish 롱테일 포함, 예: "poker kaise khelte hain").

Sources: getmega.com/poker/learn/learn-how-to-play-texas-holdem-hindi · pokerlistings.in/how-to-play-poker · khelplayrummy.com/blog/poker-niyam · mpl.live/hi/poker/straight-flush · pokerkheloindia.com · getmega.com/hi/poker (1 करोड़ = crore)

---

## 🔴 코퍼스 실측 = 통일 방향의 심판 (2026-09-06 신설 · M-098 §B 수용 + 본체 독립 재계수)

**«현지 관습»과 «우리 코퍼스»가 갈리면 코퍼스가 이긴다** — 이미 발행한 글과 갈리는 순간 그게 결함이다.
아래는 `lib/posts-hi` **8편 전수**(`index.ts` 제외 · 142,232 UTF-16 code units) 실측이다. 재계수 스크립트를 남기지 않았으니 **다시 셀 때는 8편 전건을 이어붙여 세라**(부분 스캔 금지).

| 개념 | 라틴 | 데바나가리 | 🔴 채택 |
|---|---:|---:|---|
| hand | 34 | हैंड **253** · हाथ 16 | **हैंड** |
| range | **6** | रेंज 0 | **range** |
| equity | **11** | इक्विटी 0 | **equity** |
| bet | **145** | बेट 1 | **bet** |
| raise | **190** | रेज़ 0 | **raise** |
| fold | **82** | फोल्ड 0 | **fold** |
| call | **128** | कॉल 0 | **call** |
| check | **77** | चेक 0 | **check** |
| pot | **135** | पॉट 16 | **pot** |
| stack | **48** | स्टैक 2 | **stack** |
| 2인칭 | — | आप **378** · तुम 0 | **आप체** |

- 🔴 **`hand`만 방향이 반대다** — 액션·구조 명사는 라틴인데 **«패» 뜻의 hand는 `हैंड`가 압도**(253:34). 라틴 `hand`로 통일하지 마라.
- 🪶 `हाथ` 16회는 **홈페이지 메타데이터 등**에 남은 것이다. 이걸 근거로 본문·앱의 `हैंड`를 갈아엎지 마라(M-098 §B 경고).
- 🪶 이 집계는 **우리 코퍼스의 관행**이지 인도 현지 사용자 조사가 아니다. 현지 관습을 바꿀 근거로 쓰지 마라.

## 🔴 솔버 앱을 인용할 때 — 두 층을 갈라라 (M-098 §C 수용)

1. **설명 문장**: 쉬운 힌디 산문 + 전문용어 라틴. 일반명사로서의 solver는 `सॉल्वर`, board는 `बोर्ड`도 쓸 수 있다.
2. 🔴 **실제 앱의 메뉴·버튼을 가리킬 때는 «화면 글자 그대로»**. `Board` 버튼을 `बोर्ड`로, `Solver चलाएँ`를 `सॉल्वर चलाएँ`로 옮기지 마라.
   **이 규칙이 위 용어표의 일반 권고보다 우선한다.**

라이브 축어(2026-09-06 · `?lang=hi` DOM 실측 — 배포 `2b9bc66`):
`परिचय` · `कैसे इस्तेमाल करें` · `अभ्यास स्पॉट` · `परिणाम` · `GTO Trainer` · `Preflop चार्ट` · `Equity` ·
`① OOP Range` · `② IP Range` · `③ Board` · `④ Bet size सेटिंग` · `⑤ गणना करें` · `सॉल्वर` · `HoldemMaster कम्युनिटी` ·
`साफ़ करें` · `लोड करें` · `सेव करें` · `नाम बदलें` · `समूह जोड़ें` · `हटाएँ` · `JSON इंपोर्ट करें` · `JSON एक्सपोर्ट करें`

- 전문 = `클로드-프로그램만들기/handoff-to-main-site/전달_hi_용어실측_솔버작업_2026-09-06.md`(앱 축어 787개 · §C) + `부록_hi_앱문구_2026-09-06.md`.
- 🔴 **앱 축어는 «라벨»에만 정본이다** — 수치·전략 명제의 정본은 `docs/gto-solver-series-spec.md` §4-B다(id 랜딩 브리프 §7-9와 같은 규율).
- 🪶 **`/hi/solver` 랜딩은 아직 없다.** 앱만 12번째 언어로 배포됐다(M-100은 «새 hi 랜딩 신설은 이번 요청에 포함하지 않는다»고 명시).
