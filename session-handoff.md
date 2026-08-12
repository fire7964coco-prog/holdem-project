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

> ✅ **§1 WRONG 4건 · §2 축 2건 · §3 M1·M2 는 2026-08-12에 반영·푸시했다**(`1d427c6` `d490ee7`).
> 경위·실측치는 `WORKLOG.md` 2026-08-12.

### 🔴 남은 것 — 미반영분은 «틀린 채로» 살아 있다

| # | 항목 | 남은 로케일 | 앵커(이걸로 grep) |
|---|---|---:|---|
| 1 | `texas-…-beginners` 「콜 후 팟 $120」(실제 $140) | **17** | `$120` 직후의 «총 팟 / total pot» 서술 |
| 2 | `game-order` 족보표 High Card 빈도 라벨 = **5장 50.12%의 잔재**(7장은 17.41%로 투페어 23.50%보다 드물다) | **24** | 표 `\| 10 \|` 행의 **마지막 칸**(「매우 흔함」류) |
| 3 | `kicker` 「Vierling은 대개 보드에서 공유」(실제 ≈14%) | 미실측 | `Vierling` + 「보드에서 공유」 |
| 4 | **§4 RISKY 61건** | de | 아래 R1~R9 우선 |
| 5 | **§6 축 B** | de | **A트랙과 겹친다 — 아래 참조** |

🔴 **1·2번은 25개 로케일짜리다.** 앵커가 명확하고 기계적이니 **한 번에 닫아라.**
🔴 **로케일별로 개별 판정하라** — W1에서 「de 1곳」이라던 게 실제 **5곳**이었고 **en·es·ja·zh는 이미 옳았다.**
기계 치환했으면 옳은 글 4개를 되돌릴 뻔했다.

### §4 RISKY — 「한 문장으로 여러 건이 닫히는」 묶음부터

- **R1 `betting-actions` Fixed-Limit 캡 3건**(#32·#33·#45) — 본문 「eine Bet plus **drei** Raises」인데
  **WSOP Rule 100.b는 「one bet and four raises」**. 해제 조건도 정반대다(핸드 헤즈업 ❌ / **토너먼트** 헤즈업 ⭕)
  🔴 **검색 요약이 본문 편을 들었다 — 룰북 원문이 정반대다. 요약을 근거로 쓰지 마라**(이 트랙 3회째)
- **R2 `equity` 「Equity = Win%」 6곳** — 에퀴티는 스플릿 지분이 든 기댓값이다. 🟢 정답이 같은 글 `[desc]`에 있다.
  매치업 표 `AK vs AQ ~73%/~23%`는 승률/패율(합 96%) — 실측 **에퀴티 73,60 : 26,40**
- **R3 `showdown-rules` 7건 한 뿌리** — 본문에 `Turnier` 0회·`Cash` 0회라 TDA/Robert's가 갈리는 규칙을 단정.
  🟢 정정 문구가 같은 글 `[tldr]`의 「die Gegner」에 있다(TDA 18-B)
- R4 `implied-odds` 라벨 누락 4건 = `(Turn)` 한 단어 · R5 `split-pot` 이미지 alt가 본문을 반박 ·
  R6 `flush-vs-straight` 「2배」(7장은 **1.53배**) · R7 `outs` FAQ 전제 누락 · R8 `reading-the-board` 플러시 예외 ·
  R9 `hand-rankings` 자기반박

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
| `check:faq-schema` | **455/455 성립 · 🔴 0건** |
| `check:hreflang` | 481페이지 · 50세트 · 🔴 0건 |
| 미러 드리프트 | de: 🔴 **3**(4에서 −1) · 🟠 추적불가 **7**편 |
| de 질문형 H2 | 42편 전 클러스터 경화 완료 |
| 적대 QA | ✅ **3렌즈 완료·반영**(교열 21건 · 딜러 D유형 3건 · 네이티브 14곳) — 마지막 커밋 `24c1657` |
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
