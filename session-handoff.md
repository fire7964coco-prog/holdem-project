# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음
> 작업 시작 전 `CLAUDE.md` → `session-handoff.md` → `WORKLOG.md` 순서로 읽을 것.
> 🔴 **이 파일은 «지금 할 일»만 담는다.** 완료분은 `WORKLOG.md`에 적고 여기서 지운다 — 로그를 쌓지 마라.
> (2026-08-11 정리: 524행 → 완료 트랙 회고를 `WORKLOG.md` 08-10·08-11 항목으로 내리고 중복 교훈을 합쳤다)

---

## ▶▶▶▶▶▶▶▶▶ 새 세션 START HERE

### 이 세션의 본체 = **de 경화 Session 3** (Odds & Mathe 6편) — 착수 준비 완료

> **A층(2단계)은 끝났다. 15/15 · 푸시 완료** (`9b6ecf9..71f4b90`, 묶음 1~7 + sitemap 일괄, 2026-08-11).
> ✅ 1단계 `a66ef97` · ✅ 2단계 = `3d51c1c` `2b4d6cd` `77de935` `0c35439` `cba8b3f` `30b820d` `71f4b90`
> **ja 원장 무효 15 = A1~A15와 1:1** → 검수장이 재검수 중이다. 회신은 `fix-done-…§11·§12`에 적어 뒀다.
>
> ✅ A층 15건 전건 승인 · 본체 회신 완료 · **C층 지시서 도착 → C3·C1 완료(8/42)**.
> 커밋 C3 `1e4223c` · C1 `fcaa258` (푸시됨). 보고 `fix-done-c-layer-C3-C1-2026-08-11.md`.
> ✅ **C3·C1·C2 완료 = 13/42** (`1e4223c` `fcaa258` `8f2e6ea`, 전부 푸시).
> 🔴 **다음은 C4 → C5 → C6 → C7 → C8 (남은 29건).** 원장 근거는 **34건 전부 읽어 정리해 뒀다**
> (`fix-done-c-layer-2026-08-11.md` §11) — 남은 비용은 «로케일별 문구 작성 + 실측»이지 판정이 아니다.
> ⚙ **일괄 치환 도구를 세워 뒀다**: 스크래치패드 `apply.mjs`(드라이런 → «정확히 1히트» 전건 검증 → `--apply`).
> 묶음마다 앵커를 8로케일에서 뽑아 표로 넘기면 한 번에 적용된다. C2에서 es 1건이 검증에 걸려 사전에 잡혔다.
> **B층**은 🅐 사실 4건만 착수 가능, 🅑 3건은 **판단 대기 #7**.
> de Session 3은 여전히 병행 가능하다(아래 「▶ de 경화」 · 리서치 통독 끝나 있음, 다시 조사하지 마라).
> ⚠ 앞으로도 푸시 커밋에 **`public/sitemap.xml`을 반드시 포함**할 것 — `vercel.json`에 buildCommand가
> 명시돼 있어 postbuild가 프로덕션에서 안 돌고, 빠뜨리면 라이브 lastmod가 안 바뀐다.

```
npm run audit:hard -- --locale=<code>     # 편집한 로케일마다 «따로» (전체 초록은 진술이 아니다)
npm run build && npm run check:hreflang && npm run check:faq-schema && npm run check:drift
node tools/ledger-check.mjs --locale ja    # ← 검수 폴더에서 실행 (본문 변경 0편이어야 정상)
```

> 📚 **「묶음 1~5가 값비싸게 증명한 것」는 `docs/lessons-i18n-hardening.md`로 옮겼다**(2026-08-11). 트랙 착수 전 그 파일을 읽어라.

### 상태 (2026-08-11 마감 · **A층 15건 전부 반영 후에도 지표 불변** — 실측 재확인 · 푸시 완료)

| 지표 | 값 |
|---|---|
| build | **69 blog + 457 intl** (불변) |
| `audit:hard` | 25개 로케일 `--locale` 전부 🔴 **0건** |
| `check:de-style` | 셀프테스트 **99/99** · 42편 🔴 **1건** = `apt-incheon`(de Session 6 몫) |
| `check:faq-schema` | 셀프테스트 **16/16** · **457편 · 25개 로케일 🔴 0건** ✅ |
| `check:hreflang` | 481페이지 · 50세트 · 🔴 0건 |
| 미러 드리프트 | ✅ **239** · 🔴 **90** · 🟠 추적불가 **81** |
| ja 원장 | 유효 **1365** / 무효 **15** — 무효 15건 = **A1~A15 전건과 1:1** ✅ (검수장 재검수 대기) |

⚠ **드리프트 90은 «옳은» 숫자다.** FAQ 스키마 복구로 EN 2편의 `updated`를 올렸는데
**미러의 masterUpdated는 일부러 안 올렸다** — 그 변경은 형식(FAQ 마크업)뿐이고
`texas-…-beginners`의 **내용 재동기화는 미결**이라, 올리면 진짜 드리프트가 숨는다.
「판 전체 재동기화」 트랙에서 한 번에 정리할 것.

**끝난 트랙**: 다국어 B1~B4 · 다국어 FAQ 스키마(25편 전건) · de 표기 42편 일괄(§7-10 확정) ·
**de Session 1~2**(적대 QA 4렌즈 포함 완결) · 검수장 인계 1단계.
경위는 `WORKLOG.md` 2026-08-10 (1)~(13) · 2026-08-11 (1)~(3).

> 📚 **「게이트 확장 후보」은 `REVIEW-PROTOCOL.md` 맨 아래로 옮겼다**(2026-08-11). 검수 시 그 파일이 통독 대상이다.

## ▶ 검수장 인계 트랙 — **1·2단계 완료 · 3~4단계는 재검수 회신 후**

검수장(`C:\Users\하봄\Downloads\홀덤검수`)이 ja 38편 1,380주장을 판정했다. WRONG 9건은 `0a6f5c0`,
그 미러 전파 47곳은 `a66ef97`, **A층 15건은 `3d51c1c`~`71f4b90` 7커밋으로 끝났다.**
남은 것은 **B층 7건 · C층 42건**이다.
**푸시했으므로 검수장이 해시 변화를 감지해 재검수 중이다**(확인: `node tools/ledger-check.mjs --locale ja`
→ 현재 유효 **1365** / 무효 **15** = A1~A15와 1:1).

> 📚 **「단계별 실측 규모」는 `docs/lessons-i18n-hardening.md`로 옮겼다**(2026-08-11). 트랙 착수 전 그 파일을 읽어라.

### ▶▶ 2단계(A층) — ✅ **완결 15/15** (기록 보존 · B·C층 착수 시 이 절차를 그대로 쓴다)

지시서 2종을 **둘 다** 읽어라. 두 번째가 갱신본이고 우선한다. **B·C층 지시도 ①에 들어 있다.**
① `홀덤검수/reports/fix-handoff-ja-risky64-2026-08-10.md` 「A층」(원 지시 · B·C층도 여기 있다)
② 🔴 `홀덤검수/reports/fix-handoff-facts3-and-bundle4-7-2026-08-11.md` (FACTS §3 정정 통지 + 묶음 4~7 갱신)
완료분 보고: `홀덤검수/reports/fix-done-a-layer-bundle1-3-2026-08-11.md` (**§10까지 = 묶음 1~5분 기록됨**)

**11편 전부 8개 로케일**(`de en es id ja pt zh zh-hant`) — 한 건이 8곳이 아니라 **평균 14곳**이다.

| 묶음 | 편 (미러 슬러그) | 상태 · 메모 |
|---|---|---|
| 1 | `holdem-short-stack` A1 #26 · A2 #25 | ✅ `3d51c1c` — 28곳 |
| 2 | `holdem-when-to-fold` A3 #24 · A4 #27 | ✅ `2b4d6cd` — 32곳 |
| 3 | `holdem-icm` A10 #2 · A11 #20 | ✅ `77de935` — 24곳 |
| 4 | `holdem-bubble` A12 #20 · A13 #22 | ✅ `0c35439` — 40곳 (+FACTS §3 후속 2곳) |
| 5 | `holdem-split-pot-rules` #12 · `holdem-fish` #13 | ✅ `cba8b3f` — 15곳. 손익분기 빈도 `p = B ÷ (B + P/2)` = 팟사이즈 **2/3** · 하프팟 **1/2**. de split-pot은 이미 옳아 본문 무변경 |
| 6 | `holdem-card-counting` #13 · `holdem-probability` #45 | ✅ `30b820d` — 40곳. **결론을 뒤집지 않고 «전제»를 명시**했다(19.15%로 갈아끼우면 「플랍 FD로 하프팟에 폴드」라는 새 유해 조언이 된다). 🔴 **본문 표기는 19.1%** — 인계서의 19.15%를 그대로 쓰면 `outs` 표·`pot-odds`·`drawing-odds`와 어긋난다 |
| 7 | `holdem-strategy` #9 · `holdem-rake` #32 · `holdem-drawing-odds` #17 | ✅ `71f4b90` — **21곳**. strategy 8곳(예외를 「가격」 한 축으로 재구성 · `1.5 ÷ 5.5 = 27.27%` · **인계서의 「30~50% 플랫콜」은 재현 불가라 본문에 안 넣음**) · **rake 5곳뿐** — de·id·pt는 **해당 FAQ 자체가 없다**(FAQ 8문항) · drawing-odds 8곳(★두 줄 위 표가 이미 `1.9-to-1` = **자기모순**이었다) |

> ★ **A층 15건 중 최소 3건(A9·A15·icm A10)이 «자기모순»이었다** — 정답 표현이 이미 같은 파일 안에 있었다.
> **B·C층 착수 시: 형제 글보다 «같은 글 안»을 먼저 뒤져라.** 검수장도 이 축을 C층 전수 훑기로 넘겼다(§3-5).

**묶음마다 고정 절차** (묶음 1~7 전부 이대로 돌려 🔴 0을 유지했다 — **B·C층에도 그대로 쓴다**)

1. 원장 근거 읽기 — `홀덤검수/ledger/ja/<slug>.md`의 해당 번호 행(계산·출처가 그대로 있다)
2. **수치를 직접 재계산** — `홀덤검수/tools/equity.mjs`. 원장 값은 «참고»지 «인용원»이 아니다
3. 앵커로 **8개 로케일 전수 grep** → 로케일별 개별 판정(**기계 치환 금지**)
4. **EN 마스터 먼저** 고치고 → 미러 7종. 새 문장을 만들지 말고 **형제 글 표현을 복사**
   (de는 street를 **`die Street`**로 쓴다 · es `calle` · pt `streets` · zh/zh-hant는 `bad-beat` 캡션의 「翻牌后…最后行动」)
5. **되읽기 패스** → 6. 게이트 → 7. `updated`/`masterUpdated` → 8. 커밋
   - `npm run audit:hard -- --locale=<code>` **8종 전부** · `npm run check:de-style` · `npm run build`(69+457 불변)
   - `updated`는 **내용이 실제 바뀐 편만** / `masterUpdated`는 **필드가 이미 있는 곳만**
     (없는 자리에 새로 박으면 🟠 추적불가를 거짓 초록으로 덮는다. **추적불가가 거짓 초록보다 낫다**)
   - EN 마스터의 `updated`를 올리면 미러 `masterUpdated` 상향을 **같은 커밋에** 묶어라(드리프트 오탐 방지)
9. 마무리: `ledger-check --locale ja`로 **무효가 기수정분과 1:1**인지 확인하고
   `fix-done-…` 메모에 그 묶음 절을 덧붙인다(**§12까지 = 묶음 1~7 전부 기록됨**)

- 🔴 **A층은 «조언»을 다시 쓰는 일이라 1단계보다 훨씬 느리다.** 묶음 하나가 8개 로케일 × 3~5앵커다.
- 묶음 하나 끝날 때마다 커밋하되 **푸시는 단계 전체가 끝난 뒤 한 번**(검수장이 단계 단위로 재검수한다).
- 🔴 **인계 메모의 앵커 수는 양쪽으로 어긋난다.** 묶음 1~4는 과소(124곳), 묶음 5·7은 과대
  (split-pot 로케일당 1곳 · rake는 de·id·pt에 **문항 자체가 없어** 8→5곳). **언제나 직접 grep해 세라.**

> 📚 **「이 트랙이 증명한 것」는 `docs/lessons-i18n-hardening.md`로 옮겼다**(2026-08-11). 트랙 착수 전 그 파일을 읽어라.

### 이 트랙에 함께 얹을 잔여 3건 (전용 커밋 금지 — 해당 파일을 열 때 처리)

| # | 할 일 | 메모 |
|---:|---|---|
| 1 | `holdem-game-order` **번 카드 내용을 ja·id에 보충** → **그다음** `masterUpdated: 2026-07-19` | EN이 07-19(`1bb851c`)에 넣었는데 안 왔다. ja는 본문에 「バーン」이 **0회** — FAQ 한 줄이 아니라 **개념이 통째로** 빠졌다. バーンカード는 실검색어. **4단계 C층 `game-order #31`과 같은 파일이다 — 함께 열어라** |
| 2 | `holdem-blind-meaning` ja | 같은 상태(`updated` 07-12 < EN 07-19 · `masterUpdated` 없음). ja 「추적불가 2」가 이 둘이다 |
| 4 | 🟠 `zh-hant` `holdem-probability` **내부링크 2종 누락** | 팟오즈 문단에서 EN이 거는 `holdem-pot-odds`·`holdem-implied-odds`가 **통째로 없다**(파일 전체 EN 9링크 : zh-hant 7). 묶음 6에서 발견했으나 링크 1:1은 별도 방침이라 무변경 — **「판 전체 재동기화」 트랙 몫.** 다른 로케일·다른 글도 같은 상태일 수 있으니 그때 **링크 «개수»로 전수 대조**할 것 |
| 3 | 🪶 `holdem-tournament` **de·id·pt의 `masterUpdated`** | EN 07-19 대조를 한 번 하면 참값을 넣을 수 있다. **4단계 C층 `tournament #11·#13`과 같은 파일이다** |

> 📚 **「FAQ 문항 드리프트」는 `docs/lessons-i18n-hardening.md`로 옮겼다**(2026-08-11). 트랙 착수 전 그 파일을 읽어라.

## ▶ de 경화 — Session 3~6 (검수장 트랙 다음)

### 클러스터별 (승인된 순서)

| # | 클러스터 | 편 | 이 순서인 이유 | 상태 |
|---|---|---:|---|---|
| 0 | 문체 게이트 | — | 검사 없이 42편을 손대면 같은 실수를 반복한다 | ✅ |
| 1 | **Regeln** | 6 | `poker regeln` 90,500/월 · 필라라 용어가 여기서 확정 | ✅ |
| 2 | **Handreihenfolge** | 6 | 대결표 7→14행 · FAQ 18문항 소급 · **적대 QA 4렌즈** | ✅ |
| **3** | **Odds & Mathe** | **6** | `Faustregel` 표기 최적화(15편에 이미 있는데 최적화만 안 됨) + 국면형 H2 | ◀ **다음** |
| 4 | Strategie | 8 | `poker strategie` 1,300/**LDA 6** — 볼륨 대비 SERP 최약 | |
| 5 | Glossar | 6 | 토너먼트·온라인 약어표(ATS·ITM·GTD·PLO·Cap·Overlay) | |
| 6 | Turniere | 9 | `/de/tournaments`와 상호 연결 + 라이브이벤트 4편 · **apt-incheon 🔴 1건이 여기** | |

**세션당 고정 6단계**: ①정본 재확인 → ②**기계 게이트 먼저** → ③편집
→ ④**되읽기 패스** → ⑤**독일 네이티브 적대 QA**(2렌즈: 네이티브 + 교열) → ⑥빌드·게이트·커밋·WORKLOG

### ✅ Session 3 착수 준비는 끝나 있다 (2026-08-11 · **다시 조사하지 마라**)

필독 4종 통독 완료(`translation-terms-de.md` §7 · `de-core-volumes.md` **727행 전문** ·
`de-dach.md` · `market-profile/de.md`). 베이스라인: `check:de-style --cluster=Odds` **🔴 0 · 🟠 3**
(D9 `masterUpdated` 없음 = `outs`·`equity`·`drawing-odds`) · `audit:hard --locale=de` 42/42 🔴 0.

**대상 6편을 열어 본 결과 — 핸드오프가 적어둔 「Faustregel 표기」보다 손볼 게 더 있다:**

1. 🔴 **질문형 H2 비율이 클러스터 전체에서 낮다** — `probability` **0/8** · `drawing-odds` **0/6** ·
   `equity` 1/8 · `implied-odds` 2/8 · `pot-odds` 2/9 · `outs` 2/7.
   Session 2의 `hand-rankings`(10%)와 같은 상태이고, **`audit:hard`는 이 항목을 KO에만 적용**해서 안 걸린다.
2. 🔴 **클러스터 안에서 용어가 갈라져 있다** — `probability`는 「Regel der **2 und 4**」,
   `pot-odds`·`outs`는 「Regel der **4 und 2**」. 정작 독일 검색어는 **`Faustregel`**(30/LDA15)이고
   15편에 그 낱말이 이미 있는데 **H2·FAQ가 안 쓴다.**
3. **국면형 축이 통째로 비었다** — 상위어 `poker wahrscheinlichkeiten` 480은 **LDA 27~34 벽**인데
   `nach dem Flop` 계열은 **LDA 9**. `probability`의 H2 8개 중 국면형 **0개**.
4. **H2↔FAQ 준중복이 3편**(전부 Faustregel 문항). 정본 §7-6 위반이고 기계가 안 본다.
5. `masterUpdated` 3편은 **드리프트를 닫은 뒤에** 찍는다.

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
| `holdem-probability` | H2를 **국면형**(nach dem Flop)·**Faustregel형**으로 — 상위어는 LDA27~34 벽, 국면형은 9~15 | **3** |
| `holdem-glossary` | **「Turnier- & Online-Abkürzungen」 표** — ATS·ITM·GTD·PLO·Cap·Overlay·Rebuy(전부 LDA 5~35) | 5 |
| 전 42편 | **§7 문체 적용** — 이게 경화의 본체다 (성·인용부호는 ✅ 42편 완료) | 전 세션 |

🔴 **채택 금지**(근거 있음): 합법성 판정 · 봇/RTA · 책 PDF · Würfelpoker/Kniffel · rote Karten(축구) · 소매 · 타언어.

**불변**: §13 수치·카드·계산 / slug / 이미지 / 내부링크 구조(EN 1:1)
**masterUpdated**: 없는 21편은 채운다. 단 **`showdown-rules`·`texas-…-for-beginners`는 올리지 마라** —
「판 전체 재동기화」 미결 표시다. ⚠ **de 쪽 델타는 Session 1에서 이미 다 닫았다**(그 트랙 실행 시 de는 제외 가능).

### 🟠 de 이월된 자잘한 것 (전용 커밋 금지 — 그 파일을 열 때 함께)

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
| 1 | 🔴 C층 `starting-hands-chart #13` — **수치를 고칠지 목록을 고칠지** | UTG **13%** 수치와 핸드 목록이 충돌한다. 조합수로는 13%가 맞다(144콤보=10.86%). SEO·전략 판단이라 **4단계 때 물을 것** |
| 2 | 다국어 «판 전체 재동기화» — **할지 말지부터** | `holdem-showdown-rules`·`texas-holdem-rules-for-beginners` 2편. EN 07-19 경험담·구조 변경이 19~20개 언어에 안 왔다. «항목 소급»이 아니라 판 전체를 다시 맞추는 작업이라 배치 방식이 다르다. **노출 미미**(전 언어 클릭 합계 2) — **정확성 명분뿐**. 착수 시 본체는 `docs/multilang-sync-plan.md` |
| 3 | de 콘텐츠 신설 | 칩 분배 계산기(`verteilung rechner` LDA**7** · 비대체 자산 · KO에도 없어 역수입 가능) · 세금 FAQ 흡수(승인됨, 미착수 · BFH X R 8/21 1차출처 확보) · 툴 브랜드 대응(gto wizard 2,400 · equilab LDA3) → **솔버 다국어화 시 함께 결정** |
| 4 | 🪶 PDF 용지 규격 — ko·ja·zh도 A4 시장이다 | `generate-beginner-pdf.mjs`가 `@page { size: Letter }` 하드코딩이었다. 08-10에 언어별 `pageSize`를 도입하고 **de만 A4**로 했다. 재생성은 `node scripts/generate-beginner-pdf.mjs ko ja zh` + CONTENT에 `pageSize: "A4"` 한 줄. 바이너리 diff · 이미 배포된 파일이라 판단 사항 |
| 5 | 🪶 PDF 수요는 족보 밖에도 있다 | `poker wahrscheinlichkeiten pdf` · `poker strategie pdf` 10/18 · `poker starthände tabelle` 110/**LDA5**. 확률·전략·스타팅핸드 클러스터를 열 때 그 글에 맞는 인쇄물을 붙일지 검토 |
| 6 | `es` 국기 판단 | |
| **7** | 🔴 **B층 B3·B4·B5 — 합법성 판정 문장을 «제거»할지, 법 단서를 «넣을»지** | `rake` #29·#30 · `tournament` #33. 세 문장이 **합법성 판정**을 하고 있다(「면허 카드룸이면 완전히 합법」 · 「레이크 없으면 가장 싼 포커」 = 암묵적 면책 · 「주최자가 안 떼면 합법」 = 판별 기준을 가르침). 🔴 **검수장 원 지시서는 B5에 「日本ではこの基準は当てはまらない」 한 줄을 넣으라고 했는데, 그건 «부정형 법 판정»이라 프로젝트 방침(합법성 판정 금지 · 운영 글의 곁다리 법 얘기는 제거)과 정면 충돌한다.** 본체 권고 = **판정 문장 제거**(법 단서를 새로 넣지 않아도 「레이크 없음=합법」이라는 거짓 일반 규칙은 완전히 사라진다). 상세 = `홀덤검수/reports/fix-done-회신-재검수A층-2026-08-11.md` §3 |

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
