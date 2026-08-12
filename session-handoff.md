# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음
> 작업 시작 전 `CLAUDE.md` → `session-handoff.md` → `WORKLOG.md` 순서로 읽을 것.
> 🔴 **이 파일은 «지금 할 일»만 담는다.** 완료분은 `WORKLOG.md`에 적고 여기서 지운다 — 로그를 쌓지 마라.
> (2026-08-11 2차 정리: 검수장 인계 트랙이 끝나 그 절을 통째로 걷어내고 «C층 잔여 = 경화에서 닫는다» 표로 대체.
> 완료 경위는 `WORKLOG.md` 2026-08-11 (1)~(12).)

---

## ▶▶▶▶▶▶▶▶▶ 새 세션 START HERE

### ✅ **de 경화 트랙이 끝났다** — 6/6 클러스터 완료 (2026-08-11, `d120c05`)

Session 6(Turniere 9편)로 마지막 클러스터를 닫았다. 경위는 `WORKLOG.md` 2026-08-11 (17).
질문형 H2 **16% → 76~92%** · 직답 **4 → 47개** · 게이트 전부 🔴 0건 · 드리프트 de 🔴 4 → **3**.

> 📌 **경화는 끝났고, 지금 트랙은 «검수장 지시서 반영»이다.** 아래 START HERE 그대로 따르면 된다.

### 🔴 먼저 알아야 할 것 — Session 6이 남긴 «미러 미처리» 2건

둘 다 **EN 마스터가 발원지**고, de만 닫았다. 다른 로케일은 **틀린 채로 남아 있다.**

| # | 결함 | 남은 로케일 | 근거 |
|---|---|---|---|
| 1 | `holdem-tournament` **딥스택 3중 자기모순** — 표 「100–200BB+」 ↔ 본문 「200BB+」 ↔ 일반 「100–300BB」. 게다가 그 글 자신의 블라인드 표가 «Level 1 = 200BB»라 구별이 안 된다 | **en es id pt zh zh-hant** (de 완료) | de 수정본을 그대로 옮기면 된다: 일반=100–200BB · Deepstack=**기준선 없는 상대 개념** |
| 2 | `apt-incheon` **Country Exclusives를 「거주국」으로 서술** — 정본은 **국적**(citizen+KYC). 「주소만 바꾸면 된다」는 오해를 준다 | **en + 미러 7종** (de 완료) | `translation-terms-de.md` 「Natural8 Country Exclusives」절. 환산값 $1.684도 같은 글의 $1.703과 충돌 → NT$53.888+NT$16.000로 |

🔴 **2번은 8/16과 묶어라** — APT 인천이 8/16에 끝나면 어차피 **미러 7종을 전부 연다**(아래 ⏰).
그때 한 번에 닫는 게 맞다. **따로 열지 마라.**

### ▶▶ 이 세션의 본체 = **검수장 지시서 반영 (de S1~S3)** ← 최우선

🔴 **`홀덤검수/reports/fix-handoff-de-S1-S3-2026-08-12.md`를 먼저 통독하라.** (검수 대상 `e3fe1b6`)
검수장이 de 원장 `홀덤검수/ledger/de/` 18편 · 주장 1,028개를 검수해 낸 지시서다.
**§4 RISKY 61건의 정본은 지시서가 아니라 `홀덤검수/ledger/de/<slug>.md` 의 RISKY 행**이다 — 원문·근거·정정 방향이 거기 있다.

> ✅ **§1 WRONG 4건 · §2 축 2건 · §3 M1·M2** 반영·푸시(`1d427c6` `d490ee7`) —
> **그 미러 전수(48곳)와 §4 RISKY R1~R9(de 9편 43자리)도 완료**(`777bf60` `b4ee458`).
> 경위·실측치는 `WORKLOG.md` 2026-08-12 및 2026-08-12 (2).

### ✅ **de 검수 지시서 트랙 종료** (2026-08-12 — `777bf60` `b4ee458` `345373f` `eceb805`)

**§1 WRONG 4 · §2 축 2 · §3 M1~M3(미러 48곳) · §4 RISKY 61건 전건 · 3층 적대 QA 4렌즈** 완료.
**de 트랙에 남은 본체 작업은 §6 축 B(키워드 배치) 하나뿐이다.**

### A트랙 3건 + §4 RISKY R1~R9 (2026-08-12, `777bf60` `b4ee458`)

경위·실측치·1차 출처는 `WORKLOG.md` 2026-08-12 (2). 요점만:

- **A트랙 48곳** — `texas-…-beginners` **17** · `game-order` **24** · `kicker` **7** 로케일.
  🔴 **「25개」를 가정했으면 셋 다 틀렸다.** KO는 game-order에서 **이미 7장 %를 써서 옳았고**
  texas-…-beginners엔 그 예시가 아예 없다. kicker는 **8 로케일에만 존재**한다.
- **§4 RISKY R1~R9 = de 9편 43자리** — betting-actions 9 · showdown 7 · equity 7 · implied-odds 5 ·
  flush-vs-straight 5 · hand-rankings 3 · split-pot 2 · reading-the-board 2 · outs 1

### 🔴 남은 것

| # | 항목 | 범위 | 메모 |
|---|---|---|---|
| 1 | ~~§4 RISKY 잔여 7편~~ | ~~de~~ | ✅ **완료 2026-08-12** (`eceb805`) — **§4 RISKY 61건 전건 종료.** 경위 = WORKLOG (4) |
| 2 | **§6 축 B** | de | 아래 B1~B7 (이름표 유형 = 최대 ROI) ← **de 트랙에 남은 유일한 본체 작업** |
| 3 | ~~3층 적대 QA~~ | ~~de 9편~~ | ✅ **완료 2026-08-12** (`345373f`) — 4렌즈 · 70자리 반영. 경위 = WORKLOG (3) |
| 4 | R1~R9 **타 로케일 미러** | 진행 중 | ✅ **`showdown-rules` 완료**(25 로케일 × 9자리, WORKLOG (5)) · 🔴 **나머지 8편 미실측** — 아래 표 |

### 미러 잔여 — 나머지 8편 (2026-08-12 기준)

`showdown-rules`에서 **EN 마스터 발원이 실증됐으므로** 나머지도 같다고 보고 접근한다.
**단 「8곳/25곳」을 가정하지 말 것** — 글마다 존재하는 로케일 수가 다르다.

| 글 | 존재 로케일 | 상태 |
|---|---:|---|
| ~~`holdem-split-pot-rules`~~ | 8 | ✅ **완료** — :::tip(D유형) · alt · 풀하우스 FAQ |
| ~~`holdem-reading-the-board`~~ | 8 | ✅ **완료** — Rule 75 · 보드 스트레이트 플러시 예외 · 「4장=A하이」 |
| `holdem-betting-actions` | **25** | 🟡 ✅캡(본문·FAQ) ✅BB 체크 4자리 ✅Non-Standard Fold(84) · 🔴 **잔여 3종**: 무언의 칩(**90.a**) · One-Chip(**97**) · String Bet(**90.d vs 103**) — EN·de는 완료, **로케일 23곳 남음**. 자리는 「\"to call\"이라며 칩을 던지는 Fehler 문단」·「$10 벳 앞 $100 칩 One-Chip 문단」·「\"Call\" 후 추가 = String Bet 본문 + 같은 FAQ」 |
| `holdem-hand-rankings` | **13** | 🔴 용어 동일시 · 「대부분의 팟은 원페어」(43,82% < 50%) · 무늬 서열 한정(**토너먼트 배제** 주의) |
| `holdem-equity` | 8 | 🔴 「Equity = Win%」 6곳 · AK vs AQ 표행(73/23 → **74/26**) |
| `holdem-implied-odds` | 8 | 🔴 국면 라벨 3곳 · 「Flop- und Turn-Konzept」 |
| `holdem-flush-vs-straight` | 8 | 🔴 「2배」(7장은 **1,53배**) 4곳 · 플러시 스플릿 누락 · 하트 최상단 |
| `holdem-outs` | 8 | 🔴 FAQ 2장 계산 전제 누락 |

🔴 **다음 = `betting-actions` 잔여(23 로케일) → `equity`/`flush-vs-straight`(수치라 검산 필요) → `hand-rankings`.**

⚠ **「N곳」을 가정하지 마라 — 이번에도 계속 깨졌다.** split-pot 풀하우스 FAQ는 **4곳**
(id·ja·pt는 **이미 옳았다**), 보드 스트레이트 FAQ도 **4곳**(id·ja·pt엔 그 FAQ가 없다),
캡은 **25곳**. 로케일마다 FAQ 구성이 다르다.

⚙ **미러 작업 방법(이번에 확립)**: ①EN 마스터에서 자리 특정 → ②전 로케일 **동일 상대행**에서
원문 추출(구조가 평행하다) → ③**로케일별 개별 작성**(기존 어휘 재사용) → ④결함 문자열 **grep 잔존 0** 확인.
🔴 ②에서 regex 미탐을 **부재로 읽지 마라** — 관용구만 현지화된 경우가 5곳 있었다.
| 5 | **적대 QA가 남긴 «코퍼스 전체» 항목** | de 42편 | 아래 표 — 전부 **9편 밖으로 번져 이번 커밋에서 뺐다** |

### 적대 QA 잔여 — 클러스터·코퍼스 단위라 별도 판단 (2026-08-12)

| 항목 | 실측 | 왜 이번에 안 했나 |
|---|---|---|
| `rabattieren` / `Rabatt` | **13곳 / 4편**(outs 5 · position-play 4 · limping 3 · strategy 1) | 네이티브: 독일어에서 **상거래 할인 전용어**라 아웃츠에 쓰면 웃긴다(`abwerten`·`discounten`이 실사용). 하우스 표준으로 굳어 있어 **반만 바꾸면 더 나쁘다** |
| `Gewinnspieler` | **잔여 2곳**(`ept-barcelona-2026-guide` · `holdem-cooler`) | 독일어에 없는 조어(검수장 §6 B6). `outs` 2곳은 「erfolgreiche Spieler」로 정정 완료 |
| `Side Pot` ↔ `Nebenpot` | betting-actions 4 · showdown 10 vs **split-pot 18** · **readnext 카드 제목까지 갈림** | 독일 실사용은 압도적 `Side Pot`. 첫 등장만 `Side Pot (Nebenpot)` 병기 권고 |
| 드로 라벨 | `Gutshot-Straße`·`Open-Ended-Straße`(equity·implied-odds) vs `Gutshot (Inside Straight)`·`Beidseitig offener Straßendraw`(outs) | 드로 표에 `-Straße`는 **완성된 족보로 오독**된다. outs 표기가 정답 |
| `Leaks` ↔ `Lecks` | equity 1곳만 `Leaks`, 나머지 하우스 표준 `Lecks` | 1낱말이지만 어느 쪽으로 통일할지가 판단 |
| 🔴 `holdem-tiebreak-rules:229` | 「ungerader Chip」 = **오역**(홀수 칩 아님, 나머지 칩) | 9편 밖. `hand-rankings`는 「überzähliger Chip」으로 정정했다 |
| `outs` 19,1% ↔ 19,6% | 같은 글에 나란히 있고 **둘 다 맞다**(플랍→턴 9/47 · 턴→리버 9/46) | 사실오류 아님. 한 줄 단서를 붙일지가 판단 |
| WSOP Rule 96.a | 연속 올인 예외가 `betting-actions`에 없다 | 누락이지 오류 아님 |

🔴 **오탐 2건은 기록해 둔다 — 다음 렌즈도 같은 걸 지적한다:**
① **통화 `€10` → `10 €`**(21곳) — DIN 5008로는 네이티브가 옳지만 **`€` 선행이 정본**이다
(2026-08-11 확정 · 코퍼스 EPT `€5.300`과 동형). **정본을 모르는 렌즈는 표준을 결함으로 본다** →
적대 QA 프롬프트의 «의도적 제외 목록»에 **통화 표기**를 넣어라.
② `equity` 하프팟 flushdraw 35% — 바로 다음 문단이 그 전제를 뒤집는 **의도적 구성**이다.

### R1~R9에서 남길 교훈 (다음 세션이 같은 함정에 빠진다)

- 🔴 **원장 지시를 그대로 기계 치환하면 옳은 서술을 망가뜨린다.** 두 번 겪었다 —
  **R1** 「3 raises → 4」는 **캐시게임에서 3이 맞다**(Robert's Rules: 베팅 라운드 3개 이상 게임 =
  a bet and three raises · 해제도 캐시는 **핸드** 헤즈업이라 WSOP와 정반대). 본문이 스스로
  「위는 토너먼트 규칙」이라 선언해 있으므로 **두 판을 갈라 쓰는 것**이 정답이었다.
  **R5** 「이미지 alt가 본문을 반박」 → **이미지를 열어 보니 로열플러시가 아니었다**(K♦K♣Q♥Q♦J♠ ·
  K♠7♣ vs K♥2♦ = 양쪽 K-K-K-Q-Q, 홀덤에서 가능하고 옳다). **틀린 건 alt 문구뿐**이었다.
- ⚠ **`pokertda.com`은 이 환경에서 접속 불가**(curl·Playwright·WebFetch 전부 ECONNREFUSED).
  TDA 원문은 **버지니아 주 규제기관이 공개한 공식 PDF**로 확보했다 —
  `ris.dls.virginia.gov/uploads/11VAC20/dibr/Poker Tournament Directors Assoc_2019 Rules-20221228170122.pdf`
  (2019 Longform, Illustration Addendum 포함). Rule 12·16·18-A/B·68 축어 확인.
- ⚠ **Robert's Rules는 1차 출처로 쓰지 않았다** — 전문을 실은 `pokercoach.us`가 지금은
  **Betsperts Media 소유**라 «저자 원본»이 아니다. 내용은 축어로 읽었으나 **본문 인용은 보류**했다.
  깨끗한 호스트를 찾으면 캐시 캡 「a bet and three raises」를 출처와 함께 되살릴 수 있다.
- 🟢 **WSOP 2026 룰북 용어집 DEALER BUTTON**이 「highest card by rank **and suit**」로 버튼을 정한다 —
  **무늬 서열이 스터드 전용이 아니라는 1차 근거**다(`hand-rankings` #65에 사용).

### §6 축 B = **A트랙과 같은 자리다** (이름표 유형)

- **B2 헤즈업** — `heads-up poker` **260/LDA3** · `poker zu zweit` **140** · `poker zu zweit regeln` 40/11이 **전부 0회**.
  자산은 이미 있다(`blind-meaning` 113~115행 = de 42편 중 유일한 헤즈업 전용 H2, `game-order` 예제 핸드)
- **B5 Vierling** — `Vierling` 17회가 **한 번도 `Poker`와 인접하지 않는다.** H2에 「beim Poker」 두 낱말이면 `vierling poker` 70이 닫힌다
- **B1 `/calculator` 링크** — 허브가 이미 있는데 Odds 클러스터만 끊겼다(`equity`는 태그에 `equity rechner poker`를 달고 본문 링크 0)
- **B3 족보 PDF 부재** — `hand-rankings` 앵커는 「Pokerblätter als PDF」인데 링크 대상이 **룰 PDF**다. `poker reihenfolge pdf` 260/LDA11
- **B6 통화 EUR 전환 누락 2편**(`texas-…-beginners` $18 · `pot-odds` $23) — 178곳 전환에서 빠졌다
- 🟢 **B7 #3: `/de/tournaments`는 이미 이행돼 있다**(`app/de/tournaments` 실재) — **문서만 갱신하면 된다**

> 🟢 **§5 「다시 파지 마라」 13축을 먼저 읽어라** — 검수장이 «찾아봤고 없다»를 근거와 함께 박아 뒀다
> (FACTS §2 x/46 사건 de 미복제 · Skat 무늬 오염 S2 6편 0곳 · AKs vs 22 통과 · `tiebreak` 65주장 전부 OK …).
> **재조사에 시간 쓰지 마라.**

### ▶ 그 밖 (검수장 지시서 반영 후)

**C. 다국어 «판 전체 재동기화»** — 🔴 사장님 판단 대기. 노출 미미, 정확성 명분뿐
**D. KO S5** — 🔒 **8/16 이후**(STALE #19가 APT 인천 종료로 만료)


### 상태 (2026-08-12 실측)

| 지표 | 값 |
|---|---|
| build | **69 blog + 457 intl** (불변) |
| `audit:hard --locale=de` | 42/42 무결 · 🔴 **0건** |
| `check:de-style` | 셀프테스트 **104/104**(99에서 +5, D3 날짜범위) · 🔴 **0건** · 🟠 D9 7편 |
| `audit:hard --locale=<24개>` | A트랙 손댄 24 로케일 전수 · 🔴 **0건** |
| `check:faq-schema` | **455/455 성립 · 🔴 0건** |
| `check:hreflang` | 481페이지 · 50세트 · 🔴 0건 |
| 미러 드리프트 | de: 🔴 **3** · 🟠 추적불가 **7**편 (불변) |
| de 질문형 H2 | 42편 전 클러스터 경화 완료 |
| 적대 QA | ✅ 경화분 3렌즈(`24c1657`) + ✅ **R1~R9분 4렌즈 완료·반영**(`345373f`) |
| 지역 커버리지 | ✅ 베를린·NRW 3곳·바이에른 9곳(SBPM)·King's·CAPT·스위스 — 1차출처 + 확인일 병기 |

> 📚 상시 함정·렌즈 운용 = `REVIEW-PROTOCOL.md` 맨 아래 · 다국어 경화 교훈 = `docs/lessons-i18n-hardening.md`.
> **트랙 착수 전 둘 다 읽어라.**

## ▶ C층 잔여 — **경화하면서 그 글을 열 때 닫는다** (별도 트랙 없음)

결함 내용·정정 방향·**등급(확정 17 / 추정 13 / 없음 12)**은
`홀덤검수/reports/검수-C층-지시서-2026-08-11.md`에 그대로 있다. **글을 열기 전에 그 지시서에서 해당 글을 찾아라.**

| 글 | 잔여 번호 | 어느 트랙에서 열리나 |
|---|---|---|
| ~~`holdem-probability`~~ | ~~#16 #17~~ | ✅ **완료 2026-08-11** — de Session 3에서 8로케일 정정(`a76b43d`) |
| `holdem-flush-vs-straight` | #2 #8 #25 | de Session 2 재방문 / 타 언어 경화 |
| `holdem-game-order` | #31 | 아래 「잔여 2건」 #1과 **같은 파일 — 함께 열어라** |
| `holdem-betting-actions` | #2 #7 | |
| ~~`holdem-when-to-fold`~~ | ~~#3 #6~~ | ✅ **완료** — Session 4에서 8로케일 정정
| ~~`holdem-straddle`~~ | ~~#15 #41~~ | ✅ **완료** — Session 5에서 **8 로케일 × 3자리 = 24곳** 정정
| ~~`holdem-3bet`~~ | ~~#7 #8~~ | ✅ **완료** — Session 4에서 8로케일 정정
| `holdem-kicker` | #18 | |
| `holdem-split-pot-rules` | #21 | |
| `holdem-card-counting` | #20 | |
| `holdem-positions` | #49 | 🟢 **de엔 없음**(Session 4 확인). 타 언어 경화 시
| ~~`holdem-position-play`~~ | ~~#10~~ | ✅ **완료** — Session 4에서 8로케일 정정
| `texas-holdem-rules-for-beginners` | #28 #29 | **25개 로케일** — 한 건이 25곳이다 |
| `holdem-starting-hands-chart` | #13 | 🔴 **사장님 판단 대기 #1** (#28은 de엔 없음)
| ~~`holdem-rake`~~ | ~~**C43 C44**~~ | ✅ **완료** — Session 5에서 8 로케일 정정(#9·#19·#23·#33은 C1 트랙에서 이미 닫힌 것을 재확인) |
| ~~`holdem-fish`~~ | ~~#20 #25 #30~~ | ✅ **완료** — #20 버핏 1차출처로 정정 · #25는 de가 이미 옳았음 · #30은 **pt 1곳뿐**이었다 |
| ~~`holdem-bad-beat`~~ | ~~#7 #11~~ | ✅ **de는 이미 옳았다**(「Flop, Turn oder River」·「~96%」). 무변경 |

🔴 **매번 되풀이된 것 — 「전 로케일 8곳」을 가정하지 마라.** 실측에서 계속 깨졌다:
`rake` #33 = 5곳 · **`fish` #30 = 실측 pt 1곳뿐**(6개는 이미 정정돼 있었다) · `short-stack` #1 = **7곳(EN이 이미 옳았다)** · `tvc` #35 = 7곳 ·
`rake` C43·C44 = **8곳** · `straddle` #15·#41 = **8곳 × 3자리** ·
B3 = 4곳 · B5 = 7곳(**zh-hant는 대만 판례 기반으로 이미 다르게 현지화돼 해당 없음**).
**언제나 직접 grep해 세고, 로케일별로 개별 판정하라.**

🔴 **정정할 땐 «그 문단/답변 전체»를 읽어라.** 원장 주장 문자열 주변만 보면 두 방향으로 샌다 —
① 원장에 등록 안 된 같은 결함이 같은 답변에 남는다(B3-b) ② 한정어를 «덧붙이는» 정정은
주장 문자열이 살아남아 `ledger-check` 무효로도 안 잡힌다(B6).

### 이 트랙에 함께 얹을 잔여 2건 (전용 커밋 금지 — 해당 파일을 열 때 처리)

| # | 할 일 | 메모 |
|---:|---|---|
| 1 | `holdem-game-order` **번 카드 내용을 ja·id에 보충** → **그다음** `masterUpdated: 2026-07-19` | EN이 07-19(`1bb851c`)에 넣었는데 안 왔다. ja 본문에 「バーン」이 **0회** — FAQ 한 줄이 아니라 **개념이 통째로** 빠졌다. バーンカード는 실검색어. **C층 `game-order #31`과 같은 파일** |
| 2 | `holdem-blind-meaning` ja | 같은 상태(`updated` 07-12 < EN 07-19 · `masterUpdated` 없음). ja 「추적불가 2」가 이 둘이다 |

🪶 `holdem-tournament` de·id·pt는 `masterUpdated` 필드 자체가 없다 —
**없는 자리에 새로 박지 않는다**(추적불가가 거짓 초록보다 낫다). 드리프트를 닫을 때 함께 찍어라.

## ▶ de 경화 — ✅ **완료 (6/6 클러스터)**

| # | 클러스터 | 편 | 상태 |
|---|---|---:|---|
| 0 | 문체 게이트 | — | ✅ 셀프테스트 104/104 |
| 1 | Regeln | 6 | ✅ |
| 2 | Handreihenfolge | 6 | ✅ |
| 3 | Odds & Mathe | 6 | ✅ `a76b43d` |
| 4 | Strategie | 8 | ✅ `5c92dab` |
| 5 | Glossar | 6 | ✅ `6579679` |
| 6 | **Turniere** | **9** | ✅ **`d120c05` (2026-08-11)** |

**경위·교훈은 `WORKLOG.md` 2026-08-11 (13)~(17)에 있다.** 잔여는 START HERE의 A·B 항목이 전부다.

> 📌 **이 트랙이 확립한 세션 6단계**(다른 언어 경화에 그대로 재사용):
> ①정본 재확인 → ②**기계 게이트 먼저** → ③편집 → ④**되읽기 패스**
> → ⑤**현지 네이티브 적대 QA 2렌즈**(네이티브 + 교열, 교열엔 `git diff`) → ⑥빌드·게이트·커밋·WORKLOG
>
> ★**여섯 세션 전부에서 최대 ROI는 「이름표」 유형이었다** — 콘텐츠는 이미 있고
> **현지 검색자가 쓰는 낱말만 없는** 상태. H2·표 이름·태그 교체로 닫히고 **§13 리스크가 0**이다.
> 실적: `blinds tabelle` · `Kombinationen` 4,400 · `karten reihenfolge` 880 ·
> `poker begriffe` 260(vs `glossar` 10 = **26배**) · `pokerturnier` **720**.
> **다음 언어를 열면 여기부터 훑어라.**

> 🔴 **`de-core-volumes.md`의 「§5 실행 항목」은 리서치의 «요약»이지 대체물이 아니다.**
> Session 2가 730행 중 ~150행만 읽고 「글마다 WebSearch PAA」를 건너뛰어 `pokerblätter` 720과
> PDF 어포던스를 통째로 놓쳤다. **글마다 현지 SERP를 실제로 봐라** — SERP는 볼륨표가 못 주는
> «경쟁사가 무엇을 제공하는지»와 «어떤 낱말을 쓰는지»를 준다.

> ⚙ **라쿠 툴은 시드 «언어»를 따라간다**(Session 6 실측). `icm poker`(영어 시드)를 넣으면
> **일본 DB로 샌다**. 독일 PAA를 원하면 `pokerturnier` 같은 **독일어 시드**를 넣어야
> 「Wie hoch ist das Startgeld für ein Pokerturnier?」류 실검색 문형이 나온다.
> ⚠ 그리고 **`poker turnier`(띄움)는 볼륨 API가 `pokerturnier`로 정규화한다** — 표기 우열은
> 볼륨표로 안 갈린다. **자동완성·SERP 제목·위키 표제어로 판정하라.**


## 🔴 사장님 판단 대기

| # | 안건 | 메모 |
|---|---|---|
| 1 | 🔴 `starting-hands-chart #13` — **수치를 고칠지 핸드 목록을 고칠지** | UTG **13%** 수치와 핸드 목록이 충돌한다(다른 4곳은 그 핸드들을 폴드하라고 한다). 조합수로는 13%가 맞다(144콤보 = 10.86%). **SEO·전략 판단이라 본체가 못 정한다.** 이것만 정해 주면 C층에서 유일하게 막힌 자리가 풀린다 |
| 2 | 다국어 «판 전체 재동기화» — **할지 말지부터** | `holdem-showdown-rules`·`texas-holdem-rules-for-beginners` 2편. EN 07-19 경험담·구조 변경이 19~20개 언어에 안 왔다. «항목 소급»이 아니라 판 전체를 다시 맞추는 작업이라 배치 방식이 다르다. **노출 미미**(전 언어 클릭 합계 2) — **정확성 명분뿐**. 착수 시 본체는 `docs/multilang-sync-plan.md` |
| 3 | de 콘텐츠 신설 | 칩 분배 계산기(`verteilung rechner` LDA**7** · 비대체 자산 · KO에도 없어 역수입 가능) · 세금 FAQ 흡수(승인됨, 미착수 · BFH X R 8/21 1차출처 확보) · 툴 브랜드 대응(gto wizard 2,400 · equilab LDA3) → **솔버 다국어화 시 함께 결정** |
| 4 | 🪶 PDF 용지 규격 — ko·ja·zh도 A4 시장이다 | `generate-beginner-pdf.mjs`가 `@page { size: Letter }` 하드코딩이었다. 08-10에 언어별 `pageSize`를 도입하고 **de만 A4**로 했다. 재생성은 `node scripts/generate-beginner-pdf.mjs ko ja zh` + CONTENT에 `pageSize: "A4"` 한 줄. 바이너리 diff · 이미 배포된 파일이라 판단 사항 |
| 5 | 🪶 PDF 수요는 족보 밖에도 있다 | `poker wahrscheinlichkeiten pdf` · `poker strategie pdf` 10/18 · `poker starthände tabelle` 110/**LDA5**. 확률·전략·스타팅핸드 클러스터를 열 때 그 글에 맞는 인쇄물을 붙일지 검토 |
| 6 | `es` 국기 판단 | |

> 📚 **「판 전체 재동기화 B1~B3의 대가 7가지」는 `docs/lessons-i18n-hardening.md`로 옮겼다**(2026-08-11). 트랙 착수 전 그 파일을 읽어라.

## ▶ 그 밖의 트랙

### ① KO 잔여 수정 — S5만 남았다 (🔒 8/16 이후)

`docs/kr-remediation-spec.md`가 본체다(S1~S4 정산·표준 수치·교훈은 그 파일 §4).
S1~S4 + 재판정 = 36편 147건 ✅ 완료.

| 세션 | 편 | 건 | 상태 |
|---|---|---:|---|
| **S5** | `holdem-tournament-how-to-enter` | **11** | 🔒 **8/16 이후** — STALE #19가 APT 인천 종료로 만료 |

착수 전 `홀덤검수/reports/fix-handoff-remaining-2026-08-09.md` §2-보·§3을 읽을 것.

### ② 백로그 — 두 트랙 밖

| # | 할 일 | 메모 |
|---:|---|---|
| 1 | 프로덕션 E2E 마감 | 검수 세션에 `BASE=https://www.holdemmaster.com`으로 요청 |
| 2 | 다국어 정책 페이지 | `/privacy`·`/terms`·`/contact`가 한국어뿐인데 링크는 영어 라벨 |
| 3 | 리버 승부 해설 | 복기 표에 승률만 있다. "키커로 갈렸다"를 `score5`의 키커로 자동 생성 가능 |
| 4 | 🪶 `holdem-implied-odds` 표 헤더 `(1 card)` → `(turn → river)` | 8종 전부. 세트 행 `~11.8% flop`만 국면이 어긋난다(값은 전부 맞음) — **전용 커밋 금지** |
| 5 | 🪶 FAQ 섹션이 아예 없는 2편(`ru`·`tr` 각 1편) | `check:faq-schema` 커버리지에 «미판정»으로 출력된다. **FAQ를 새로 쓸지는 SEO 판단** |
| — | ⏸ 펍 지역 페이지(`/pub/*` 9개 색인 탈락) | **사장님 지시로 보류** — 건드리지 말 것 |

### ⏰ 시한이 박힌 것

`docs/update-calendar.md`가 본체다. 현재 3건 —
**8/16 APT 인천 종료**(→ KO S5 착수 + 결과 아카이브 전환 + 미러 7종) ·
**10월 초 JOPT 오사카 바이인 공개**(글에 약속함) · **12/31 K-ETA 면제 만료**(한국 관련 전 언어 영향).

---

> 📚 **「상시 함정」은 `REVIEW-PROTOCOL.md` 맨 아래로 옮겼다**(2026-08-11). 검수 시 그 파일이 통독 대상이다.

## 📦 과거 로그는 아카이브로

**`docs/handoff-archive-2026-08-09.md`** — 2026-07-13 ~ 08-08 세션 로그 전체(약 3,980행).
완료 트랙의 방법론은 `docs/gto-solver-series-spec.md`·`docs/kr-remediation-spec.md` §4에 남겼다.
세션 로그는 `WORKLOG.md`가 본체다.
