# 브리프 — queue 회차 **Q6-a**: 로케일 표기·용어 통일 + 내부링크 «개수» 축 정밀도

> 규격 = `docs/hardening-protocol.md` §3-⑥ · 레인 규율 §7-F · 진행 파일 = `docs/harden-queue-진행.md`
> **판정형 회차 = 전 구간 Opus**(§7-F 「회차 모양」 — 새 문장을 쓰는 자리는 카드 문구 승계뿐이다).
> 🔴 **Q6 전체가 아니다.** Q6 재료는 크게 넷이고 이 회차는 **① 표기·용어 + ② 링크 구조**만 연다.
> ③ 인용부호·괄호 스윕 · ④ ja 잔여(`harden-ja-진행` §2-N)·echo 19·`tournaments-i18n` NOTE_*는 **Q6-b/Q6-c**.
> 근거 = 프로토콜 §3-③-0-B 「재료의 «건수»를 착수 근거로 쓰지 마라 — 항목마다 원문을 열어 판정한다」.

---

## 0. 착수 실측 — «아직 열려 있나» (§3-③-0-B)

> 🔴 **수치는 «occurrence»(문자열 등장 횟수)다 — `grep -c`는 «줄»을 세므로 둘이 다르다.**
> 2026-09-14 자기 정정: 첫 표가 `打公牌` 12 · `开口顺` 18로 적혀 있었는데 실제 치환은 17 · 19였다.
> 치환 스크립트가 **기대 횟수를 강제**해(불일치 시 중단) 그 자리에서 드러났다.

| 재료(진행 파일 Q6 행) | 실측 | 판정 |
|---|---|---|
| zh `劫机位`/`劫持位` 갈림 | `劫机位` **0** · `劫持位` 23(glossary 4 · positions 19) | ✅ **이미 닫혔다** — 등재만 |
| zh `二四法则` 3표기 | `二四法则` **38**(9편) · `四二法则` **1** = `holdem-outs:129` 「二四法则（也叫"四二法则"）」 | ✅ **닫혔다 — 남은 1은 «별칭 병기»라 의도된 것** |
| zh `打公共牌`/`打公牌`/`打牌面` | **occurrence** 23(3편) / 17(tiebreak 단독) / 6(4편) · 🔴 `reading-the-board`는 **한 파일 안에서 두 표기**(打公共牌 다수 + `打牌面` L350) | 🔴 **열려 있다** |
| zh `开口顺` ↔ `两头顺` (Q2b-4) | `开口顺` **20**(outs 16 · flush-vs-straight 4) ↔ `两头顺` **62**(15편) · 🔴 `outs`는 **한 파일 안에 둘 다**(16 ↔ 1) | 🔴 **열려 있다** |
| zh-hant `中洞` ↔ `卡順` (Q2b-6) | `中洞` **10 · `holdem-outs` 단독** ↔ `卡順` 62(15편) · 코퍼스 정형은 **`卡順（內順）`**(7편) ↔ outs만 **`中洞（內順）`** | 🔴 **열려 있다** |
| ja `ミニマムレイズ` ↔ `最低レイズ` (Q2b) | 표제어 1(glossary L89) ↔ 본문 `最低レイズ` 6(3편) + `ミニマムリレイズ` 2 | 🔴 **열려 있다(병기로)** |
| pt `holdem-strategy.ts:183` 용어표 | 「Polarizado … 3-bets **dos blinds**」 ↔ 같은 로케일 `holdem-3bet`이 **SB=linear · BB=polarizado**를 4곳에서 명시(L100·L151·L265·L300) | 🔴 **열려 있다(pt 단독)** |
| zh `pot-odds` 比率↔百分比 절 통합 | H2 **12개**(EN·zh-hant·ja는 9) 중 L70 「比率还是百分比？」와 L161 「"5:1…"——比率↔百分比换算」이 **같은 공식·같은 예시**(X:1 = 1÷(X+1) · 3:1=25% · 4:1=20%)를 두 번 | 🔴 **열려 있다** |
| `check:structure` 「링크 개수 결손 94편·160자리·15로케일」 | 🔴 **대부분 게이트 오탐이다 — §2 참조** | 🔴 **게이트부터** |
| zh-hant `texas-holdem-rules-for-beginners` 관련 글 카드 6장 부재 | 카드 앵커 **0** ↔ en·ja·zh·es·de·pt·id 6 · readnext도 EN 2행 ↔ zh-hant 1행 | 🔴 **진짜 결함** |
| ja 전각（）· 見出し 콜론 | （） 328(CJK 내용)+40(라틴) ↔ 반각 1,701+659 · H2 콜론 전각 24 ↔ 반각 56 | 🟠 **판정만**(§5) |
| zh 인용부호 3갈래 | 본문 `“”` 418 · `「」` 594 · ASCII `"` **926**(이미지 title 486 제외) | 🟠 **판정만 · 스윕은 Q6-b**(§5) |

---

## 1. 키워드 실측 (DataForSEO · 2026-09-14)

**볼륨으로는 갈리지 않는다 — 표기 판정은 코퍼스 일관성과 현지 SERP로 한다.**

| 키워드 | location | 월간 | 비고 |
|---|---|---|---|
| `打公共牌`·`打公牌`·`打牌面`·`开口顺`·`两头顺`·`二四法则`·`劫持位` | Malaysia | **전부 데이터 없음** | 앵커 `德州扑克` = 1,300으로 호출 자체는 정상 |
| `中洞` | Taiwan | **140** | 🔴 **포커 수요가 아니다** — SERP 상위 10 실측(`/v3/serp/google/organic/live/regular` · zh-TW): **마작 용어**(神來也麻將·聽中洞)·**배구 용어**·**관광지(石中洞·中洞苗寨)**. 포커 결과 **0건** |
| `卡順` | Taiwan | 10 | `卡順 撲克` SERP #1 = sixpoker666(대만 포커 사이트) 「**Gutshot：指的是卡順**」 · #4 = taiwanrounders(= zh-hant 용어 정본 참고 사이트) |
| `開口順`·`兩頭順` | Taiwan | 데이터 없음 | mainland 글(moshike)이 「卡顺和两头顺」으로 짝지어 쓴다 |

→ **판정 근거**: `中洞`은 대만 독자에게 **마작으로 읽히는 말**이다(자릿수 함정 유형 · 메모리 [[keyword-volume-order-of-magnitude-trap]]).
볼륨 140은 포커 수요가 아니므로 «높은 쪽을 버린다»는 손실 논거가 성립하지 않는다.

---

## 2. 🔴 게이트 먼저 — `check:structure`의 «링크 개수 결손 94편»은 대부분 오탐이다

Q7-b가 신설한 `linkn`의 **첫 실행 정밀도**를 전건 검증했다(settled §3 「게이트를 새로 만들면 그 회차 안에서 적대 검수하라 — 첫 오탐은 대개 내가 오늘 넣은 부류」 · **네 번째 실증**).

| # | 오염원 | 실례 | 처방 |
|---|---|---|---|
| ⓐ | **«보유» 필터가 `d.link`에만 걸려 있었다** | `ar/holdem-all-in-rules — holdem-split-pot-rules 1→0`인데 **ar에는 그 글이 없다**(ar는 8편). ar 4편 **5자리**가 **전건 이 유형** | `linkn`에도 같은 필터. 같은 파일 L348이 이미 경고하던 것("고칠 수 없는 일을 매 회차 지적한다") |
| ⓑ | **카드·readnext를 «개수» 축에 넣었다** — 그 두 형식은 **대상을 로케일이 고르는 자리**(같은 파일 주석이 스스로 그렇게 적었다) | `wsop-2026-tournament-guide`의 `holdem-icm 3→1`(es·ja·zh) = EN은 카드·readnext에 **icm**을, es·ja·zh는 같은 자리에 **지역 대회 가이드**(apt-incheon·ept-barcelona)를 골랐을 뿐. **카드 앵커 장수는 EN 4 ↔ 셋 다 4로 같다** | 축을 가른다 — `linkn`=본문 마크다운만 · **`cardn`=카드·readnext «장수»(대상 무관)** |
| ⓒ | **«적은 쪽»만 보고 상쇄분을 안 봤다**(§2 미결이 이미 지목) | zh-hant 코퍼스 = 링크 총계 **771**(EN 756) · 대상 수 **432**(EN 378). 편별로도 대상 수가 EN보다 많다 | **대상 수가 EN보다 많으면 개수 결손은 «상쇄»로 제외**하고 건수를 출력 |

**결과**: 🟠 94편·160자리 → **4편·8자리**(전부 zh-hant) · 🔴 `cardn` **4편**.
🔴 **Q7-b가 남긴 「94편·15로케일 · zh-hant 단독으로 읽으면 오진」은 그 자체가 오진이었다** — 정밀도를 세우면 **첫 주사(마크다운만 = 19편 전부 zh-hant)가 맞았다.** 재현율을 올리려고 넣은 두 형식이 정밀도를 무너뜨린 것이다.
🪶 눈멀지 않는 이유: «전파를 빠뜨린» 진짜 결함(Q5b-5의 es 실례)은 **새 대상을 만들지 않으므로** 상쇄 규칙에 걸리지 않는다.

### 남은 자리 전건 판정

| 자리 | 실측 | 판정 |
|---|---|---|
| `zh-hant/texas-holdem-rules-for-beginners` **cardn −7** | 카드 6장 블록 **통째 부재**(0) + readnext 1행(EN 2) | 🔴 **결함 — 복원한다**(문구는 zh 카드 승계 → 번체·대만 용어) |
| `zh-hant/holdem-hand-rankings` **cardn −2** | 카드 6장은 EN과 **동일 대상**, `:::readnext` **블록 자체가 없다** | 🔴 **결함 — readnext 2행 신설**(flush-vs-straight·tiebreak-rules) |
| `zh-hant/holdem-probability` **cardn −3** | 카드 **2장**(hand-rankings·beginners) ↔ EN 5장 · readnext 2행은 있음(대상은 로케일 선택 = 정상) | 🔴 **얇다 — EN 대상 중 zh-hant가 안 건 3장 추가**(flush-vs-straight·reading-the-board·position-play) |
| `de/holdem-probability` **cardn −1** | 카드 5장 EN과 동일 · readnext **1행**(EN 2행: hand-rankings + starting-hands-chart) | 🔴 **결함 — readnext 2행째 추가** |
| `zh-hant/holdem-tournament` cardn(−3) | 카드 4 + readnext 2 = 6 ↔ EN 9. 단 **대상 수 12 > EN 11** = 상쇄 | ✅ 게이트가 자동 제외(기전 ⓑ) |
| linkn — 첫 실측 8자리(beginners 4 · tiebreak 2 · probability 1 · marathon 1) → 🔴 **게이트 정밀도를 세운 뒤 목록이 바뀐다**: S1·S3 복원으로 beginners·probability가 «본문 대상 수 > EN»이 되어 상쇄로 빠지고, 대신 bubble 2 · drawing-odds 1 · equity 1 · implied-odds 1 · reading-the-board 1 · strategy 2가 드러난다(= 카드 대상까지 상쇄에 넣었던 내 구멍이 가리고 있었다) | EN이 같은 대상을 2~4회 거는 자리를 zh-hant는 1~3회만 건다. 대응 문단은 **다 있다**(전건 원문 대조) | ✅ **결함 아님 = zh-hant 링크 정책** → **ALLOW `spots` 8행 등재**(지문 11자리 · 발화 10자리) + `locale-intentional-diffs` 등재 요청(§5) |

---

## 3. 편별 작업 — 넣을 자리와 축어

### zh `holdem-reading-the-board`·`holdem-kicker`·`holdem-game-order`·`holdem-tiebreak-rules`·`holdem-probability`·`holdem-split-pot-rules`·`paired-board-strategy` — «play the board» 표기
- **정본 = `打公共牌`** (근거 ① 23회 최다 ② 개념의 집이 `holdem-reading-the-board`이고 그 글의 `keywords` 배열에 **"德州扑克 打公共牌"**이 박혀 있다 ③ 영어 병기 `（play the board）`가 이미 붙어 있다).
- `打公牌` 17(`holdem-tiebreak-rules`) · `打牌面` 6 → **문장마다 어법을 맞춰** 치환. 🔴 `都打牌面的 K-J-8-4-2 同花`처럼 «的+패» 구조는 `都打公共牌 K-J-8-4-2 同花`로(선례 = tiebreak `都打公牌 9-8-7-6-5`).
- 🔴 **§13 불변**: 카드·수치는 손대지 않는다.

### zh `holdem-outs`·`holdem-flush-vs-straight` — OESD 표기
- **정본 = `两头顺`**(62 ↔ 20). `holdem-outs:30`의 「两头顺（开口顺）」은 **별칭 병기라 남긴다**(`卡顺（内顺）`와 같은 층).
- 나머지 19자리(`outs` 15 · `flush-vs-straight` 4) 치환. 이미지 `title` 문자열도 포함.

### zh-hant `holdem-outs` — gutshot 표기
- **정본 = `卡順`**. 10자리(L20·71·82·87·168·218 · 한 줄에 둘인 자리 포함) → `卡順`. `中洞（內順）` → **`卡順（內順）`**(코퍼스 정형과 일치).
- 🔴 «캡션만 바꾸지 마라»(Q2b-6 경고) = 본문·표·FAQ를 **같이** 바꾼다.

### ja `holdem-glossary:89`
- `| **ミニマムレイズ** |` → `| **ミニマムレイズ(最低レイズ)** |` — 본문 코퍼스가 `最低レイズ`(3편 6회)를 쓰므로 표제어에 병기. 괄호는 **반각**(이 파일의 기존 행들이 반각).

### pt `holdem-strategy:183`
- `3-bets dos blinds` → **`3-bets do big blind`** · 같은 표 Linear 행 `3-bets contra opens fracos` → `…, e do small blind`.
- 근거(같은 로케일 형제 글 축어) = `holdem-3bet:100` 「O open é **forte/apertado** … ou você está no **big blind**」 · `:151` 「do **small blind**, incline para … mais **linear**」 · `:300` 「linear vs opens abertos/fracos (e quando você está no small blind), polarizado … quando você está no big blind」.
- 🔴 EN에는 이 표가 **없다**(EN `holdem-strategy`에 range 용어표 자체가 없음) → EN-먼저 대상이 아니다. zh-hant 대응 표는 이미 「對緊的開牌，或你在大盲位」로 옳다.

### zh `holdem-pot-odds` — 중복 절 통합
- L70 「## 比率还是百分比？底池赔率的两种写法」(7행 표: 1:1~6:1) ↔ L161 「## "5:1 的赔率等于要多少胜率？"——比率↔百分比换算」(4행 표: 2:1~5:1 · **상위집합 아님**).
- 🔴 **롱테일 질문형 H2를 버리지 않는다** → **L70에 질문형을 합치고 L161 절을 지운다**:
  - L70 H2 → `## "5:1 的赔率等于要多少胜率？"——比率和百分比的两种写法`
  - L161 절의 고유분 = 「换算」 열(1÷3·1÷4·1÷5·1÷6)과 「对手报"半池"你答 25%」 문장 → L70의 7행 표에 **换算 열을 더해** 흡수. 값은 기존 표 그대로(**16.7% · 14.3%는 계산 검산 대상**).
  - 지운 뒤 **남은 문단이 자기완결**하도록(프로토콜 §4 「지우되 다시 쓴다」) 앞뒤 연결 문장 점검.
- §13 검산: `1÷(X+1)` — 1:1 50% · 2:1 33.3% · 2.5:1 28.6% · 3:1 25% · 4:1 20% · 5:1 16.7% · 6:1 14.3% (전건 재계산 대상)

### 카드·readnext 복원 4편 (문구 창작 금지 — 승계)
- `zh-hant/texas-holdem-rules-for-beginners`: zh의 6장 카드(`牌局流程/德州扑克行动顺序/…`)를 **번체 + 대만 용어**로 승계. 용어 실측: `全下` 313 ↔ `全押` 3 · `蓋牌` 401 ↔ `棄牌` 100 · `過牌` 377 · `邊池` 75 · `槍口位` 73 · `按鈕位` 297 · `攤牌` 156. 카드 제목은 **그 글의 실제 제목**에서 줄여 쓴다(창작 아님).
- `zh-hant/holdem-hand-rankings`: readnext 2행(flush-vs-straight · tiebreak-rules) — 제목은 zh-hant 해당 글 제목 승계, 이미지는 EN과 같은 파일 경로.
- `zh-hant/holdem-probability`: 카드 3장 추가(flush-vs-straight · reading-the-board · position-play) — zh 카드 문구 승계.
- `de/holdem-probability`: readnext 2행째(starting-hands-chart) — de 해당 글 제목 승계 · 이미지 `/images/holdem-starting-hands-chart-hero.webp`.
- 🔴 이미지 경로는 **EN 행과 동일**하게(이미지는 18언어 공용 · 새 파일 만들지 않는다).

---

## 4. §13 자리 (마감 손검산 대상)
- zh `holdem-pot-odds` 표 2개 합치는 자리 — **비율↔백분비 7행 전건 재계산**.
- zh `holdem-tiebreak-rules` L178~291 — `打公牌` 치환이 **카드 나열 문장**(`9-8-7-6-5`)을 건드린다 → 치환 후 카드·순서 원문 대조.
- zh `holdem-outs` L82~86 표 — `开口顺`→`两头顺` 치환이 **补牌 수(8·15·12·4)** 행을 건드린다 → 수치 불변 확인.
- zh-hant `holdem-outs` L82~87·L218 — 같은 이유(4·12·8).

## 5. 이 편에서 하지 말 것 — «되돌리지 마라» 해당분
- 🔴 zh `holdem-outs:129` 「二四法则（也叫"四二法则"）」의 **별칭 병기를 지우지 마라**(의도된 표기 안내).
- 🔴 zh-hant `holdem-hand-rankings`의 **H2 2개·표 2개 부재는 이미 닫힌 판정**이다(`locale-intentional-diffs` · 게이트 ALLOW). 이번에 카드/readnext를 만지면서 **그 절들을 되살리지 마라**(2026-09-10에 한 번 되살렸다가 되돌렸다).
- 🔴 `wsop-2026-tournament-guide` 계열의 카드·readnext **대상 차이는 의도**다(es·ja·zh = 지역 대회 가이드). EN 대상으로 되돌리지 마라.
- 🔴 ja 전각（）중 **앱 UI 축어 인용**(`blind-battle-cbet:232`·`blind-battle-connected-board:236`의 「OOP (SB（オープンレイザー）)」)은 `app/ja/solver/solver-client.tsx:220·262`의 라벨을 **글자 그대로** 옮긴 것이다 — 폭을 바꾸면 축어가 깨진다. Q6-b 스윕에서도 제외.
- 🔴 ASCII `"`가 **영어 축어 인용**을 감싼 자리(`"with the APT turning twenty in 2026"` 등)는 그대로 둔다.
