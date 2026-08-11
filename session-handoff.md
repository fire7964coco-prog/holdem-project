# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음
> 작업 시작 전 `CLAUDE.md` → `session-handoff.md` → `WORKLOG.md` 순서로 읽을 것.
> 🔴 **이 파일은 «지금 할 일»만 담는다.** 완료분은 `WORKLOG.md`에 적고 여기서 지운다 — 로그를 쌓지 마라.
> (2026-08-11 2차 정리: 검수장 인계 트랙이 끝나 그 절을 통째로 걷어내고 «C층 잔여 = 경화에서 닫는다» 표로 대체.
> 완료 경위는 `WORKLOG.md` 2026-08-11 (1)~(12).)

---

## ▶▶▶▶▶▶▶▶▶ 새 세션 START HERE

### 이 세션의 본체 = **de 경화 Session 5** (Glossar 6편)

> ✅ **Session 4(Strategie 8편)는 끝났다** — `ac2b0b3` `5c92dab` 푸시. 경위는 `WORKLOG.md` 2026-08-11 (14).
> 질문형 H2 **82~92%**(8편 전부) · 직답 36개 · masterUpdated 6편(de 추적불가 18→**12**) ·
> C층 5건을 8개 로케일에 정정. 🟢 **de 커버리지 갭은 3건 닫혔고 8건 남았다**(아래 절).
>
> 📌 Session 4가 새로 증명한 것 — 5·6에 그대로 적용:
> ① 🔴🔴 **정정이 새 사실오류를 만든다.** C층 #3(체크 누락)을 고치면서 「벳이 없으면 체크가 «추가»된다」로 써서
>    **8개 언어에 4개 집합**을 퍼뜨렸다. 적대 QA가 아니었으면 그대로 배포됐다.
>    → **선택지·조건을 고칠 땐 «두 상태를 나란히 적어» 검산하라**(벳 있음 3개 / 없음 2개)
> ② 🔴 **H2만 바꾸고 절을 안 읽으면 고아가 남는다** — 「Massiv.」가 새 질문 아래 그대로 · 「neun Sitze」인데 표는 4행 ·
>    FAQ 제목만 바꿔 답과 어긋남. **H2를 바꿨으면 그 절 첫 문단과 FAQ 답변을 반드시 다시 읽어라**
> ③ ★**「Straße」는 스트레이트다.** 스트리트 뜻으로 쓴 9곳을 고쳤다. **Glossar·Turniere에도 남아 있을 수 있다 — grep하라**
> ④ **자동완성에 «없다»도 결과다** — 3-Bet·C-Bet은 독일어 자동완성이 0이었다(전부 영어).
>    그 클러스터는 롱테일을 자동완성에서 못 얻는다는 뜻이고, SERP/PAA로 가야 한다
> ⑤ 🔴 **인계서 C층 표에 없던 항목이 있었다**(`limping #8·#18`·`starting-hands #28`). **지시서를 직접 열어라**
> ⑥ 🔴 **grep이 zh-hant를 놓쳤다**(물결표 `14～15`). 「7곳」이 실제로는 8곳이었다

**착수 준비는 끝나 있다. 리서치를 다시 하지 마라** — 아래 「▶ de 경화」를 그대로 따르면 된다.

> ✅ **검수장 인계 트랙은 끝났다**(2026-08-11). A층 15 · B층 7+1 · C층 20건 완료·푸시, 마지막 `7f5ae02`.
> 본체가 할 일 없음 — 검수장 재검수 1회만 남았고 그건 저쪽 몫이다.
>
> 🔴 **C층 잔여 20건 + C43·C44는 별도 트랙을 굴리지 않는다**(사장님 결정 2026-08-11).
> **경화하면서 그 글을 열 때 함께 닫는다.** 같은 파일을 두 번 열 이유가 없다.
> → Session 3·4에서 `probability` #16·#17 · `3bet` #7·#8 · `when-to-fold` #3·#6 · `position-play` #10 **완료**(각 8로케일).
>   Session 5(Glossar)에서 열릴 것은 **`holdem-glossary` · `holdem-rake` C43·C44·#9·#23·#33 ·
>   `holdem-fish` #20 · `holdem-straddle` #15·#41 · `holdem-cooler` · `holdem-bad-beat`**
>   — 🔴 **착수 전 지시서에서 직접 찾아라.** Session 4에서 인계서 표에 «없던» 항목이 2건 나왔다

```
npm run audit:hard -- --locale=<code>     # 편집한 로케일마다 «따로» (전체 초록은 진술이 아니다)
npm run check:de-style                    # de 편집 시 필수
npm run build && npm run check:hreflang && npm run check:faq-schema && npm run check:drift
```

⚠ 푸시 커밋에 **`public/sitemap.xml`을 반드시 포함**(`vercel.json` buildCommand 때문에 postbuild가 프로덕션에서 안 돈다).
⚙ 대량 치환이 필요하면 스크래치패드 `apply.mjs` 패턴을 쓴다 — **드라이런에서 전건 «정확히 1히트»를 검증하고
하나라도 어긋나면 아무것도 쓰지 않는다.** 문구는 로케일별로 직접 쓰되 적용만 일괄로.

### 상태 (2026-08-11 Session 4 마감 · 실측 · 전부 푸시됨)

| 지표 | 값 |
|---|---|
| build | **69 blog + 457 intl** (불변) |
| `audit:hard` | 25개 로케일 `--locale` 전부 🔴 **0건** |
| `check:de-style` | 셀프테스트 **99/99** · 42편 🔴 **1건** = `apt-incheon`(de Session 6 몫) · Strategie 8편 **무결** |
| `check:faq-schema` | **455/455 성립 · 25개 로케일 🔴 0건** ✅ |
| `check:hreflang` | 481페이지 · 50세트 · 🔴 0건 |
| 미러 드리프트 | de: ✅ **26** · 🔴 4 · 🟠 추적불가 **12**편 (Session 3 18 → Session 4 **12**) |
| ja 원장 | **RISKY 22 = C층 잔여뿐 · A·B층 0** |

⚠ **드리프트 90은 «옳은» 숫자다.** FAQ 스키마 복구로 EN 2편의 `updated`를 올렸는데
**미러의 masterUpdated는 일부러 안 올렸다** — 그 변경은 형식(FAQ 마크업)뿐이고
`texas-…-beginners`의 **내용 재동기화는 미결**이라, 올리면 진짜 드리프트가 숨는다.
「판 전체 재동기화」 트랙에서 한 번에 정리할 것.

> 📚 상시 함정·렌즈 운용 = `REVIEW-PROTOCOL.md` 맨 아래 · 다국어 경화 교훈 = `docs/lessons-i18n-hardening.md`.
> **트랙 착수 전 둘 다 읽어라.**

## ▶ C층 잔여 22건 — **경화하면서 그 글을 열 때 닫는다** (별도 트랙 없음)

결함 내용·정정 방향·**등급(확정 17 / 추정 13 / 없음 12)**은
`홀덤검수/reports/검수-C층-지시서-2026-08-11.md`에 그대로 있다. **글을 열기 전에 그 지시서에서 해당 글을 찾아라.**

| 글 | 잔여 번호 | 어느 트랙에서 열리나 |
|---|---|---|
| ~~`holdem-probability`~~ | ~~#16 #17~~ | ✅ **완료 2026-08-11** — de Session 3에서 8로케일 정정(`a76b43d`) |
| `holdem-flush-vs-straight` | #2 #8 #25 | de Session 2 재방문 / 타 언어 경화 |
| `holdem-game-order` | #31 | 아래 「잔여 2건」 #1과 **같은 파일 — 함께 열어라** |
| `holdem-betting-actions` | #2 #7 | |
| ~~`holdem-when-to-fold`~~ | ~~#3 #6~~ | ✅ **완료** — Session 4에서 8로케일 정정
| `holdem-straddle` | #15 #41 | |
| ~~`holdem-3bet`~~ | ~~#7 #8~~ | ✅ **완료** — Session 4에서 8로케일 정정
| `holdem-kicker` | #18 | |
| `holdem-split-pot-rules` | #21 | |
| `holdem-card-counting` | #20 | |
| `holdem-positions` | #49 | 🟢 **de엔 없음**(Session 4 확인). 타 언어 경화 시
| ~~`holdem-position-play`~~ | ~~#10~~ | ✅ **완료** — Session 4에서 8로케일 정정
| `texas-holdem-rules-for-beginners` | #28 #29 | **25개 로케일** — 한 건이 25곳이다 |
| `holdem-starting-hands-chart` | #13 | 🔴 **사장님 판단 대기 #1** (#28은 de엔 없음)
| `holdem-rake` | **C43 C44** | 캡 스케일 방향 모순 2축. 판정은 `재검수-C3C1-및-B층판정-2026-08-11.md` §2 |

🔴 **매번 되풀이된 것 — 「전 로케일 8곳」을 가정하지 마라.** 실측에서 계속 깨졌다:
`rake` #33 = 5곳 · `fish` #30 = 6곳 · `short-stack` #1 = **7곳(EN이 이미 옳았다)** · `tvc` #35 = 7곳 ·
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

## ▶ de 경화 — Session 3~6 ◀ **지금 이 트랙**

### 클러스터별 (승인된 순서)

| # | 클러스터 | 편 | 이 순서인 이유 | 상태 |
|---|---|---:|---|---|
| 0 | 문체 게이트 | — | 검사 없이 42편을 손대면 같은 실수를 반복한다 | ✅ |
| 1 | **Regeln** | 6 | `poker regeln` 90,500/월 · 필라라 용어가 여기서 확정 | ✅ |
| 2 | **Handreihenfolge** | 6 | 대결표 7→14행 · FAQ 18문항 소급 · **적대 QA 4렌즈** | ✅ |
| 3 | **Odds & Mathe** | 6 | `Faustregel` 표기 통일 + 국면형 H2 + 질문형 H2 71~83% | ✅ `a76b43d` |
| 4 | Strategie | 8 | `poker strategie` 1,300/LDA 6 | ✅ `5c92dab` |
| **5** | **Glossar** | **6** | 토너먼트·온라인 약어표(ATS·ITM·GTD·PLO·Cap·Overlay) | ◀ **다음** |
| 6 | Turniere | 9 | `/de/tournaments`와 상호 연결 + 라이브이벤트 4편 · **apt-incheon 🔴 1건이 여기** | |

**세션당 고정 6단계**: ①정본 재확인 → ②**기계 게이트 먼저** → ③편집
→ ④**되읽기 패스** → ⑤**독일 네이티브 적대 QA**(2렌즈: 네이티브 + 교열) → ⑥빌드·게이트·커밋·WORKLOG

### ✅ Session 3 결과 (2026-08-11 · `a76b43d`) — Session 4는 같은 방식으로 간다

질문형 H2 **0~25% → 71~83%**(6편 전부) · 직답 40~75단어 · `Faustregel` 통일 ·
H2↔FAQ 준중복 **11문항 재구성** · `masterUpdated` 4편 신설(de 추적불가 22→18) ·
C층 `probability #16·#17` 8로케일 정정. 상세는 `WORKLOG.md` 2026-08-11 (13).

🔴 **Session 3이 새로 증명한 것 — 4~6에 그대로 적용:**

1. **볼륨표에 적힌 표기를 그대로 믿지 마라. 착수 시 자동완성으로 재실측하라.**
   인계서는 「`Faustregel` 30/LDA15」만 적어 뒀는데, 실측하니 `poker wahrscheinlichkeiten faustregel` ·
   `poker outs faustregel` · `poker odds faustregel`이 **전부 살아 있고** 「regel der 2 und 4」는
   **자동완성에 아예 없었다.** 표기 하나가 클러스터 용어를 바꿨다([[keyword-harvest-wildcard-positions]] 동형).
2. **H2↔FAQ 준중복은 «지우면» 실검색어를 버린다.** 6편에서 11문항이 걸렸는데 전부
   **다른 실검색 문형으로 재구성**했다(예: H2가 `Was sind dirty Outs…`를 가져가면 FAQ는
   `Zählen Backdoor-Draws als Outs?`로). 삭제는 마지막 수단이다.
3. 🔴 **형제 글의 값을 기억으로 옮겨 적지 마라.** 되읽기에서 `outs`의 Gutshot 1장 값을
   형제 글 기준(8,7% = 턴→리버)으로 썼다가 **그 글 자기 표(8,5% = 플랍→턴)와 어긋난** 걸 잡았다.
   [[quote-sibling-posts-verbatim]]의 세 번째 실례다.
4. **정본과 코퍼스가 어긋나면 코퍼스를 따른다.** FAQ 제목을 정본 §7-6의
   「Häufig gestellte Fragen (FAQ)」로 바꿨다가 **되돌렸다** — 42편 중 36편이 `## FAQ`다.
5. 🔴🔴 **직답 삽입은 축어 중복 공정이다.** 8건이 나왔다 — 새 직답이 **바로 아래 기존 문단·`:::card`·`:::tip`**과
   같은 문장을 되풀이한다. ★그리고 **H2↔FAQ 준중복을 없애러 가서 더 축어인 준중복을 새로 만든 자리가 2곳**이었다.
   → **직답을 넣은 뒤 «바로 아래 블록»을 반드시 다시 읽고, 겹치면 아래를 비워라.**
   되읽기 패스는 이걸 놓쳤고 **교열 렌즈(diff)만** 잡았다 — 5·6에서도 2렌즈를 빼지 마라.
6. **적대 QA는 «원본 유래» 결함을 더 많이 준다.** 이번 지적의 3분의 2가 번역 단계 유산이었다
   (`Drilling zu floppen`·`Aggression fertigt Equity`·`50/50-Underdog` …). §7 문체 적용이 경화의 본체라는 근거다.
7. ⚠ **검수자도 틀린다** — 「19,1%와 19,6%가 섞였다」는 오탐이었다(9/47 vs 9/46, 여섯 편 전부 문맥 정합).
   지적을 반영하기 전에 **직접 계산**해라.

★**「이름표」 유형은 이번이 세 번째 반복이다.** 콘텐츠는 이미 있고 **독일 검색자가 쓰는 낱말만 없는** 상태 말이다.
실적: Session 1 `blinds tabelle` · Session 2 `Kombinationen` 4,400/LDA12 · `Wertetabelle` 260 ·
`karten reihenfolge` 880 — **≈3,000/월을 H2·표 이름 교체만으로** 열었다.
→ **착수하면 먼저 「이미 있는데 이름이 없는 것」부터 훑어라.** 새로 쓰는 것보다 ROI가 높고 §13 리스크가 0이다.

### ▶ 착수 전 읽을 것 (순서 고정)

1. `docs/translation-terms-de.md` ★**정본** — §7 실측 문체 · **§7-9 Bet/Raise 성**(재조사 금지)
2. `docs/keyword-bank/de-core-volumes.md` — §5 **실행 항목 표**(어느 글에 뭘 넣을지 이미 정해져 있다)
3. `docs/local-voice/de-dach.md` · `docs/market-profile/de.md`
4. 게이트를 손대게 되면 `docs/de-style-gate-spec.md` §6·**§6-B**(오탐 원인 **12종** + 채택 안 한 규칙)

🔴🔴 **«리서치 통독»은 선택이 아니다.** Session 2는 `de-core-volumes.md` 730행 중 ~150행만 읽고
(핸드오프가 가리킨 곳만) 규정된 **「글마다 WebSearch PAA」를 한 번도 안 돌렸다.** 결과 —
**`pokerblätter`(720/LDA20, 독일 고유 표기)가 본문에 0회**(태그에만 있었다. 경쟁사 5곳은 제목에 쓴다) ·
**PDF 어포던스 누락**(`poker reihenfolge pdf` 260/LDA11 등 3개 시드에서 반복 확인된 수요고 SERP 상위 4곳이
전부 PDF를 건다. **de 글은 「영어 PDF」를 걸고 있었다**) · `poker kombinationen` **4,400**/LDA12 누락.
★**인계서의 「§5-A 실행 항목」은 리서치의 «요약»이지 대체물이 아니다.** 다른 클러스터 시드에 교차 항목이 있다
(족보 재료가 시드③ `poker regeln`에 있었다). **글마다 WebSearch로 현지 SERP를 실제로 봐라** —
SERP는 볼륨표가 못 주는 걸 준다(경쟁사가 **무엇을 제공하는지**와 **어떤 낱말을 쓰는지**).

> 📚 **「de Session 1·2가 값비싸게 배운 것」는 `docs/lessons-i18n-hardening.md`로 옮겼다**(2026-08-11). 트랙 착수 전 그 파일을 읽어라.

> 📚 **「적대 QA 렌즈 운용」은 `REVIEW-PROTOCOL.md` 맨 아래로 옮겼다**(2026-08-11). 검수 시 그 파일이 통독 대상이다.

### §5-A 실행 항목 — 남은 것만

| 대상 | 할 일 | 세션 |
|---|---|---|
| ~~`holdem-probability`~~ | ✅ 완료 — 국면형(`nach dem Flop`)·`Faustregel`·`royal flush` H2 신설 | ~~3~~ |
| `holdem-glossary` | **「Turnier- & Online-Abkürzungen」 표** — ATS·ITM·GTD·PLO·Cap·Overlay·Rebuy(전부 LDA 5~35) | 5 |
| 전 42편 | **§7 문체 적용** — 이게 경화의 본체다 (성·인용부호는 ✅ 42편 완료) | 전 세션 |

🔴 **채택 금지**(근거 있음): 합법성 판정 · 봇/RTA · 책 PDF · Würfelpoker/Kniffel · rote Karten(축구) · 소매 · 타언어.

**불변**: §13 수치·카드·계산 / slug / 이미지 / 내부링크 구조(EN 1:1)
**masterUpdated**: 없는 21편은 채운다. 단 **`showdown-rules`·`texas-…-for-beginners`는 올리지 마라** —
「판 전체 재동기화」 미결 표시다. ⚠ **de 쪽 델타는 Session 1에서 이미 다 닫았다**(그 트랙 실행 시 de는 제외 가능).

### 🟢 de 커버리지 갭 11건 — **아직 안 했다.** Session 4 착수 전/후로 짧게 한 패스 (별도 세션 아님)

`docs/keyword-bank/de-gap-2026-08-11.md` (2026-08-11 신설)

**뭔가**: 키워드뱅크 §1 볼륨표를 `posts-de/` **42편 전문과 기계 대조**한 결과.
본문에 0회인 키워드는 **11건 → 8건 · 합 ~2,800/월**로 줄었다(Session 4가 `poker range` 320 · `gto poker` 390 · `poker tipps` 210을 `holdem-strategy`에서 닫았다). 전부 **Session 1·2 클러스터(룰·족보·전략)** 소속이라
Session 3에 끼워넣을 수 없다.

- 전부 **「이름표」 유형** — 콘텐츠는 이미 있고 **독일 검색자가 쓰는 낱말만 없다.**
  H2·표 이름·FAQ 문구 교체로 닫힌다. **§13 리스크 0.**
  (Session 1·2가 같은 방식으로 ≈3,000/월을 열었다 — 이 유형이 ROI 최고다)
- 남은 주요 건: `wie spielt man poker` 880 · `poker lernen` 880 · `poker reihenfolge karten` 590 ·
  `pokerchips wert` 170 · `poker zu zweit` 140 · `vierling poker` 70 — **전부 룰·족보 클러스터(Session 1·2 소속)**라
  Glossar·Turniere에 끼워넣을 수 없다. **별도 짧은 패스로 닫아야 한다**
- 🟠 **`texas holdem regeln` 5,400인데 1편뿐** — 0회는 아니나 볼륨 대비 지나치게 얇다. 함께 검토

> ✅ **Session 1·2 재검수는 불필요하다.** Session 2가 놓쳤던 것으로 기록된 두 건
> (`pokerblätter` 720 · `poker reihenfolge pdf` 260)은 **이미 메워져 있다**(각 2편·1편 존재, 기계 확인).
> 남은 건 위 갭 목록뿐이고 그건 «검수»가 아니라 «추가»다.

### 🟠 de 이월된 자잘한 것 (전용 커밋 금지 — 그 파일을 열 때 함께)

- 🔴 **Session 4 적대 QA의 «중간 확신» 지적 ~40곳이 미반영이다** — 전부 **번역티(어휘·연어)**고
  사실오류는 아니다. 그 글을 열 때 함께 고쳐라. 대표 유형:
  **`X % der Zeit`**(=of the time 직역 → 「in X % der Fälle」, 코퍼스 전반 두 자릿수) ·
  `zieh zusammen`(=tighten up) · `stechen`(=stab) · `Patrone`(=barrel, 독일어권은 Barrel) ·
  `weiten in`(=expand into) · `auf die … abbilden`(=map onto) · `sich verbinden`(=connect) ·
  `ein Ziel auf den Rücken malen` · `ausgepreiste Draws`(=priced out) · `Stich vermeiden`(=sting) ·
  `jede Value-Bet im ganzen Haus` · `von deiner Hand weggeblasen`(=blown off)
- 🟠 **클러스터 수치 불일치 1건**(C1이 못 잡음): `holdem-strategy`의 IP·트라이 보드 C-Bet **60~80%**
  ↔ `holdem-continuation-bet` **70~100%**. 상세 페이지 쪽으로 통일할 것
- 🟠 **`3bet` A5s vs QQ+/AK 에퀴티 «30%»** — 네이티브 렌즈가 블로커 반영 시 **27%**라 했다.
  **재계산 후 판정하라**(검수자도 틀린다 — Session 3에 오탐 실례 있음)
- 🟠 **H2↔FAQ 잔여 중복**: `limping` H2「Was bedeutet „Limpen" im Poker?」↔ FAQ 동문(축어) ·
  `positions` H2「Was ist UTG?」↔ FAQ「Wofür steht UTG?」 · `position-play` H2 2건이 FAQ와 겹침
- 🟠 **`holdem-blind-meaning`의 직답 라벨이 「Schnelle Antwort」** — de 표준은 `> **Kurze Antwort**`(46곳)

- **FAQ↔H2 축어 중복** — `showdown-rules`에 준일치 5건 남음(EN 마스터에서 상속).
  정본 §7-6은 중복 금지 → **삭제가 아니라 «다른 실검색 문형»으로 재구성**할 것.
- **`masterUpdated` 없는 글 21편** — 클러스터를 열 때 그 편들의 드리프트를 3단으로 닫고 찍으면 자연히 줄어든다.
- 🟠 **`holdem-hand-rankings` 1인칭 EN 12 : DE 3** — EN 경험담이 미러에 안 왔다.
  소급할지는 판단이 필요하다(**없는 사실을 지어내지 말 것**).
- 🖼 **`holdem-split-pot-suit-equals.webp` 교체 필요** — 이미지가 「Pik-Royal-Flush = Herz-Royal-Flush」인데
  그 장면은 홀덤에서 **이중으로 불가능**하다(로열 하나가 보드 5장을 다 먹는다). 본문은 고쳤고 alt도 그에 맞춰야 한다.
  → 「**같은 스트레이트, 다른 무늬 = Chop**」으로 다시 만들 것. **이미지 제작이라 별도 작업**(전 로케일 공용).
- **적대 QA 「낮음」 등급 어법 ~12건** — `totes Gewicht`·`Nachbarschaft`·`Mobiliar`·`Ein-Zeilen-Definition`·
  `nur zum Kicken`·`Chip Rest`(→`Chip-Rest`)·`vs`→`vs.`·`#1-3`→`#1–3` 등.
- **SEO 내부 논리가 본문에 노출** 3곳 — `split-pot`「Beides wird gesucht」·`kicker`「die Konkurrenz in
  Absätzen vergräbt」·「von einem schwammigen unterscheidet」. 독일 전략 매체 톤과 어긋난다(실독 12편에 이런 문장 0).

---

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
