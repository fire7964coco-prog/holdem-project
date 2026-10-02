# DE GTO 예제 13편 — 집필 브리프

> 작성 2026-10-02 (준비 회차). 범위 = 기존 솔버 예제 해설 13편을 독일어(de-DE, du체)로 발행. 사장님 10-02 «다음 세션에서 de만» · `settled-decisions` §1-E(목적 = 검색 유입이 아니라 솔버 증거·필라 연결).
> 선례 = `docs/pt-gto-series-translation-brief.md`(09-15). 구조·규율은 그대로 잇고, **de만의 차이 셋**을 더했다: ① 독일어 표기·용어 ② 앱 축어 재캡처(10-02) ③ **스팟 장면 이미지 1장 추가**(de 시범 · 사장님 10-02 승인 «1번으로 하자»).
> 집필자(레인/서브)는 **배정된 새 포스트 파일만** 쓴다. 등록·공용 링크·게이트·통합·배포는 본체(헤드)가 한다.

## 1. 정본 입력 (읽는 순서)

1. 이 브리프 → `docs/de-gto-source-contract.md`(현재 EN 재측정 · 변경점 · 편별 보존 논거 · ⑦ 두 솔브 계약) → 배정된 **현재** `lib/posts-en/<slug>.ts` 전문.
   구조·수치 논거·고지·예시·표·디렉티브는 EN에서 온다. pt·es 등 다른 번역본이나 옛 스냅샷에서 옮기지 않는다.
2. 수치 정본 = `docs/gto-solver-series-spec.md` §4-B/§4-B-2. 어긋남이 보이면 원문 자리를 축어로 인용해 보고한다. 조용히 고치지 않는다.
3. `docs/keyword-bank/de-gto-series.md` §5 = 고정 `title`·`seoTitle` 초안·주 의도·H2/FAQ 문형. §4 = 넓은 검색어의 주인(기존 de 필라) — 13편은 «특정 보드·자리»를 설명한다.
4. `docs/solver-app-verbatim-de-2026-10-02.md` = 앱 화면 축어. **앱 설명문(§4)은 전략 출처가 아니다.** 재현 경로에는 실제 라벨만 쓴다.
5. `docs/translation-terms-de.md`(§1 용어 · §3 숫자 · §4 du · §5 대문자·성 · §7-7 금지어 · §7-9 die Bet/der Raise · §7-10 „…“·` – `) · `.cursor/rules/posting.mdc` · `REVIEW-PROTOCOL.md`.
   GTO 시리즈 예외가 일반 카피 지침보다 우선한다: **지어낸 개인 경험담 금지 · 새 전략 명제 금지 · 일반 글로 재작성 금지.**

## 2. 출력과 메타데이터

- 파일: `lib/posts-de/<같은 slug>.ts`. 기존 de 파일과 같은 형태(`import type { Post } from "../posts"` · `export const POST` + `export default POST`)인지 형제 파일 하나를 열어 맞춘다.
- `title` = 키워드 팩 §5 고정 문안(시리즈 readnext·이전/다음 링크도 이 문자열). `seoTitle` ≤60자 · `desc` 60~160자.
  🔴 **레인지 전체의 액션 비율을 한 핸드의 빈도처럼 들리게 쓰지 않는다.** ①~⑦·⑧~⑩의 첫 수치는 **BB의 첫 액션**이다 — «C-Bet-Frequenz»라 부르지 않는다(caller의 리드 = Donk Bet). ⑪~⑬은 SB가 오프너라 첫 벳이 C-Bet이 맞다.
- `tldr`: 평문(마크다운 금지). 원문의 수치·조건을 보존하고 그 자체로 이해되게.
- `category: "strategy"` · `date`/`updated` = **실제 de 발행일**(마감 세션 날짜) · `masterUpdated` = **원문 계약 §2의 그 slug 값**(EN `updated` 그대로, 공통 날짜 금지) · `readTime: "N Min."` · 이모지 = EN과 같음 · `keepImagesInBody: true`.
- `image` = `/images/gto-<key>-oop-de.webp`(히어로). 본문에 히어로를 다시 넣지 않는다.
- 본문 이미지 **2장**:
  1. **스팟 장면** `/images/gto-<key>-scene-de.webp` — 원문 계약 «스팟 장면 이미지 자리» 절이 지정한 **첫 조건표 바로 위**.
  2. **레인지 차트** `/images/gto-<key>-ranges-de.webp` — EN의 ranges 이미지 자리 그대로.
- `imageAlt`·본문 alt: 보드·자리·실제 화면을 구체적으로. 장면 alt 예: „Pokertisch mit Flop A♥7♦2♣: Nur BTN und Big Blind sind noch im Pot (5,5bb), beide mit 97,5bb Stack – der Big Blind (OOP) handelt zuerst“. 키워드 나열 금지 · 시리즈 편수를 홍보 문구에 하드코딩 금지.
- `tags`: 보드·주제 중심 + 필요하면 „Poker“·„GTO“. 독일어 표기 자연스럽게. 기존 필라의 넓은 태그로 재조준하지 않는다.
- `content`는 `` `...`.trim() `` 로 닫는다. **그 밖 어디에도 백틱 금지**(주석 포함 — 구조 게이트가 센다). tldr 마크다운 금지 · 중첩 굵게 금지 · 빈 자리 절 금지.
- 파일 머리 주석: 출처·키워드·알려진 한계만 짧게. EN의 긴 경위 주석·가짜 검수 기록 복사 금지.

## 3. 번역 계약 (pt와 동일 — 줄이지 않는다)

- EN의 H2 수·순서, 실질 하위 절, 근거 문단, **모든 표와 행 순서**, 수치, 카드·무늬, 부등호, 부정·한정어를 보존한다. 디렉티브 종류·순서, highlight 수, FAQ 수, 링크 자리를 보존한다(이미지만 장면 +1). H2 문구와 FAQ 질문은 배정 의도에 맞게 현지화할 수 있으나 대응 답·사실은 보존한다.
- 자연스러운 번역 ≠ 요약. 길이를 줄이려고 예시·단서를 자르지 않는다. 키워드 때문에 주장을 더하지 않는다.
- 생생함은 **명확한 독일어와 독자가 내릴 구체적 결정**에서 나온다. 지어낸 플레이 일화 금지 — 이 글은 우리 솔버 데이터의 재현 가능한 분석이다.
- 모든 퍼센트는 올바른 **자리·분모·액션·솔브**를 가진다. caller의 리드 = Donk Bet(C-Bet 아님). 3-Bettor의 첫 플랍 벳은 C-Bet일 수 있다. **IP 결과 화면 = 레인지/에퀴티 정보이지 IP 액션 전략이 아니다.**
- 출처 날짜(조건표 «Geprüft» 행·출처 문장)는 계산 출처 날짜다. 발행일로 바꾸지 않는다.
- 고지를 범위째 보존: 플랍 첫 결정만 · 후속 반응 없음 · 해석 vs 계산 결과 · 화면 반올림 · Rake 미반영 · 가정이 바뀌면 전략도 바뀜 · ⑦의 별도 재솔브.
- EN의 근사 표현은 근사로: about → etwa/rund, almost → fast, this configuration → in dieser Konfiguration. 표본을 보편 규칙으로, 결과를 EV·수익 약속으로 바꾸지 않는다.
- Equity · EV · EQR · Fold Equity를 구분한다. **EQR이 높다고 EV가 높은 것이 아니다**(⑨가 반례). 빈도 차이는 **Prozentpunkte**이지 상대 %가 아니다.
- 🔴 EN 본문에 없는 값(BTN 62,9% · «4,06배» · 재솔브 root Check 98,0%)은 spec·주석에만 있다 — **본문 문장으로 추가하지 않는다**(원문 계약 §5).
- ⑩: EN 제목 «Three Combos Hit…»를 따르되 본문에서 **보드와 페어가 된 A5s 3콤보**와 **기존 포켓 오버페어 36콤보**를 반드시 구분한다(«Range hat das Board komplett verfehlt» 금지 — 원문 계약 §6).

## 4. 독일어 표기와 고정 용어

du체(§4) · 모든 명사 대문자 · Denglisch 동사 활용(gecheckt·gecallt·gefoldet·geraist·gebettet·ge-3-bettet) · 인용 „…“ · 대시 ` – ` · 짧은 문단 한 생각.

| 개념 / 자리 | 고정 표기 |
|---|---|
| range · solver · spot | die Range(n) · der Solver(제목·H2에서는 반드시 **Poker-Solver/GTO-Solver** — 단독 Solver = Excel) · der Spot |
| board | das Board; trocken · verbunden · gepaart · monoton · Two-Tone · Rainbow. 한 글 안에서 „Tisch“·„Gemeinschaftskarten“으로 흔들지 않는다(첫 설명에서만 병기 가능) |
| pot / stacks | der Pot / effektiver Stack |
| bet · call · raise · check · fold | betten(die Bet) · callen · raisen(der Raise) · checken · folden. UI 칩 축어는 **Bet**·**Check** 그대로 |
| c-bet · 3-bet · check-raise · donk bet | die C-Bet(첫 등장 „Continuation Bet (C-Bet)“) · die 3-Bet · der Check-Raise(동사 check-raisen) · die Donk Bet — EN이 처음 정의하면 쉬운 독일어 한 문장 |
| caller · open-raiser · 3-bettor | der Caller · der Open-Raiser · der 3-Bettor (앱 그룹 축어와 같다) |
| OOP / IP | „out of position (OOP)“ / „in Position (IP)“ — 글마다 첫 사용에 풀이 |
| BTN / BB / SB | Button (BTN) · Big Blind (BB) · Small Blind (SB) — 약어 의존 전에 소개 |
| equity / EV / EQR | die Equity · Erwartungswert (EV) · Equity-Realisierung (EQR) |
| range / nut advantage | Range Advantage(첫 등장 „Range-Vorteil“ 풀이 병기 가능 — 원어민 실례 미확인, 키워드 팩 §3) · Nut Advantage |
| set / trips | **Set** = Pocket Pair + Boardkarte · **Trips** = eine Karte auf der Hand + Paar auf dem Board. „Drilling“은 상위 범주(족보명)이지 둘의 자동 대체어가 아니다. 앱 행 `Set/Drilling`은 축어로 인용 |
| 족보 | Straße · Flush · Full House · Vierling · Zwei Paare · Top Pair · Overpair · Underpair · Overcards |
| draws | Flushdraw · Gutshot · OESD(첫 등장 „beidseitiger Straßendraw (OESD)“) · Backdoor-Flushdraw · Combo Draw — UI 분류는 앱 축어 |
| fold equity · MDF · SPR | die Fold Equity(상대가 folden해서 얻는 가치로 설명) · Mindestverteidigungsfrequenz (MDF) · Stack-to-Pot-Ratio (SPR) |
| combos · Prozentpunkte | die Combos · Prozentpunkte |
| 바로 답 블록 | `> **Kurze Antwort**` (de 코퍼스 146회 · 구조 게이트 RULES.de) |
| FAQ H2 | `## FAQ` (de 코퍼스 39회). 원문에 FAQ H2가 없는 ⑩~⑬은 만들지 않는다 |
| readnext 라벨 | `:::readnext[Weiterlesen]` |
| 조건표 첫 열 | **Bedingung** |
| 조건표 행 | Positionen · Preflop-Aktion · Ranges · Flop · Pot zu Beginn · Effektiver Stack · Pot · effektiver Stack · Bet Sizes · Rake · Geprüft — EN에 실제 있는 행만 · 합쳐진 행을 쪼개지 않는다 |
| Equity/EV/EQR 표 첫 열 | Kennzahl |
| 액션 표 첫 열 | „Erste Aktion des BB“(또는 SB) — root만. ⑦ 후속 노드는 „BTN nach dem Check“ / „BB gegen eine Bet von 1,8bb“ |
| 그 밖 열 | Frequenz · Combos · Hand · BB (OOP) · BTN (IP) · SB (OOP) · BB (IP) — 시나리오에 맞게 |
| stripe 라벨 | Spot · Flop · Pot · Stack · Ergebnis — EN 필드가 있는 곳만 |
| 죽은 스몰 블라인드 | „die 0,5bb des gefoldeten Small Blinds“(실제 계산 근거인 자리에서) |

### 숫자·카드·UI

- 소수 = **콤마**, 천 단위 = 마침표, **%는 값에 붙인다**: `98,2%` · `5,5bb` · `1.326` · `45,1%`. 🔴 **bb는 붙여 쓴 소문자 `5,5bb`로 확정**(de 코퍼스 63 : «2,5 BB» 21 · EN·앱 축어와 같다 — `translation-terms-de` §3의 «2,5 BB» 예시는 이 시리즈에 적용하지 않는다). 값 자체는 정확히 보존. bb·무늬·핸드 표기 유지(카드 T는 EN/앱 그대로 · TT·T9s는 핸드 표기).
- 범위는 en dash, 원문처럼 양끝에 %: `73,4%–75,2%`(앞 숫자에 % 빠지면 숫자 게이트가 못 본다).
- 🔴 구조 게이트 RULES.de가 **마침표 소수 퍼센트(98.2%)를 결함으로 잡는다.**
- 앱 경로: **Lernspots** → **[스팟 이름 축어]** → **⚡ Ergebnisse ansehen** · 뒤로 **← Zurück** · 패널 **Hände** / **Draws** / **Übersicht** · 바 **Balkenbreite** · 요약 행 **Alle** · 상세 헤더 **Hand · Strategie · Gewicht · EQ · EV (bb) · EQR**.
- 액션 칩 예: `Bet 4,1bb (75% vom Pot)` · `Bet 1,8bb (33% vom Pot)` · `Check` — 예시일 뿐, 트리마다 사이즈가 다르다(축어 문서 §3).
- 랜딩 링크 = `/de/solver`. 앱 직링크는 `?lang=de` + 검증된 실제 경로만. 딥링크·클릭 경로를 지어내지 않는다.

### 단서 문장 (의미 구분 보존 — 대상이 다르면 주어를 바꿔 쓴다)

- 첫 액션만: „Das vorberechnete Beispiel reicht nur bis zur ersten Entscheidung am Flop.“
- 이 솔브에 없음: „Diese Zahl liefert diese Berechnung nicht.“
- 이 페이지에 없음: „Diese Zahl steht nicht auf dieser Seite.“
- 이 화면으로 확인 불가: „Auf diesem Bildschirm lässt sich das nicht bestätigen.“
- 해석: „Dieser Abschnitt interpretiert die Ranges; er zeigt keine vom Solver berechnete Frequenz.“
- 반올림: „Die Werte auf dem Bildschirm sind gerundet.“
- 별도 솔브(⑦): „Dieser Abschnitt verwendet eine separate Berechnung, nicht das vorberechnete Ergebnis des Beispiels.“ — 트리·이터레이션·Exploitability·다른 root 결과까지 보존.
- 재현 CTA: „Öffne den [kostenlosen Poker-Solver](/de/solver), geh zu **Lernspots** und wähle **[스팟 이름]** → **⚡ Ergebnisse ansehen**.“ 원문 링크 수에 맞춘다(자리 추가 금지).

## 5. 링크와 시리즈 제목

- EN `/en/blog/<slug>` → `/de/blog/<같은 slug>`. 시리즈 밖 대상 10편은 **de에 전부 있다**(원문 계약 §7) → 면제 자리 없음. 없는 대상이 나오면 보고하고 지어내지 않는다.
- 링크 자리·썸네일·readnext 카드 역할을 보존. 시리즈 카드 라벨 = 대상의 de 고정 `title` · 시리즈 밖 카드 = 그 de 글의 실제 `title`. 본체가 배치 뒤에 대조한다.
- 썸네일 `gto-*-oop-en`·`ranges-en`은 `-de`로. 언어 중립 공용 이미지는 바꾸지 않는다.
- 13편 목록을 글마다 넣지 않는다. 허브는 랜딩. 시리즈 내비·랜딩·필라 역링크 4자리(continuation-bet ①⑨ · position-play ⑦ · 3bet ⑧ — `locale-intentional-diffs` 해제)는 **본체가 마감 세션에** 한다.

## 6. 배치·게이트·등록

| 배치 | 세션 | 번호 | slug |
|---|---|---|---|
| A | ② | ①–④ | a-high-board-cbet · k-high-board-cbet · broadway-board-strategy · donk-bet-strategy |
| B | ③ | ⑤–⑧ | monotone-board-strategy · paired-board-strategy · low-board-check-raise · 3bet-pot-cbet |
| C | ④ | ⑨–⑬ | 3bet-pot-bet-sizing · 3bet-pot-low-board · blind-battle-cbet · blind-battle-connected-board · ace-paired-board-strategy |

배치마다(본체):
1. 스팟 장면 이미지 렌더 `node scripts/make-gto-spot-scenes.mjs --lang=de <key…>` → **전부 Read로 열어** 카드·무늬·좌석·팟·스택 육안 확인(§13 · 이미 있는 것: ①·⑧·⑬ 견본).
2. 저작 후 **`lib/posts-de/index.ts`에 등록**(배포 없음) — 🔴 `check-de-style`은 index에 등록된 글만 읽는다. 등록과 함께 `DE_CLUSTERS`에 `GTO` 클러스터를 만들어 배치 slug를 넣는다(안 넣으면 orphan으로 «검사 안 한 글»이 된다).
3. 게이트: `node scripts/check-gto-numbers.mjs --locale=de --slugs=…` · `node scripts/check-gto-structure.mjs --locale=de` · `node scripts/check-de-style.mjs --cluster=GTO` · `npm run audit:hard -- --slug=<slug>`(커버리지 읽기). 다른 배치가 없어서 생기는 🔴는 «미착수»로 따로 적는다.
4. 사람 검산: 각 숫자의 **자리·보드·노드·단위**(게이트 통과 ≠ 귀속 보증).

마감 세션(⑤): 렌즈 4종(수치·전략 충실도 / 독일어 네이티브 / SEO·가독성 / 2차 교열) → 판정 후 반영 → `check:gto` 계열 전부 · `check:images` · `check:image-reuse` · build · 배포 1회 · IndexNow · MB. 지적은 정확한 자리·확신도·근거를 붙이고 할당량 없음. **원문(EN) 유래 문제와 번역 오류를 구분**한다. 레인은 커밋·푸시하지 않는다.

## 7. 스팟 장면 이미지 (de 시범)

- 목적: 솔버 캡처는 «결과»만 보여 준다. 처음 읽는 독자가 먼저 막히는 **누가 어디 앉았나 · 프리플랍에 무슨 일이 있었나 · 팟과 스택 · 누가 먼저 행동하나**를 한 장으로(사장님 10-02 «이미지는 독자의 이해를 돕는 목적»).
- 제작: `scripts/make-gto-spot-scenes.mjs`(유튜브 폴더 테이블 키트 kit-v1 부품 + HTML 글자 레이어 → Playwright → webp q82 1200×675). **결과 수치는 넣지 않는다.** 프리플랍 줄은 원문 조건표에 있는 금액만(⑧~⑩은 BTN 오픈 크기가 원문에 없어서 „BTN eröffnet“만).
- 구조 게이트: 장면은 img 비교에서 빼고 **별도 축(scene = 정확히 1장)**으로 센다(`SCENE_LOCALES = ['de']`). EN·다른 로케일에 나오면 🔴.
- 의도적 편차 등재: 마감 세션에 `docs/locale-intentional-diffs.md`에 «de GTO 13편 본문 이미지 EN+1(스팟 장면)» 한 행. 반응이 좋으면 EN·다른 로케일로 전파(사전 `L10N`만 추가 + `SCENE_LOCALES`).
- 솔버 앱에서 직접 못 여는 장면(예: ⑦ 체크 뒤 BTN 벳 → BB 레이즈 노드)이 필요하면 **사장님 또는 유튜브 폴더에 영상 캡처를 요청**한다. 🔴 단 같은 설정으로 푼 화면이어야 한다 — 유튜브 폴더의 `gtozero-first-analysis` A♥7♦2♣ 캡처는 **다른 트리**(체크 70,8%)라 이 시리즈에 못 쓴다(10-02 확인).
