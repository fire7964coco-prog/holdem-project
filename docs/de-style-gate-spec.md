# de 문체 게이트 사양서 — `scripts/check-de-style.mjs` (미구현, 2026-08-10 작성)

> **왜 사양서만 먼저 있나**: 2026-08-10 세션에서 de 42편 경화 계획을 세우며 지표를 급조해 돌렸는데
> **오탐이 심했다**. 게이트의 가치는 스크립트가 아니라 **오탐 튜닝 루프**에 있고, 그 루프는 실제 본문을
> 반복해 열어봐야 한다. 반쯤 튜닝된 게이트는 무시당해서 결국 안 쓰인다([[review-mechanize-not-repeat]]).
> → **오늘 알아낸 함정을 여기 박아 두고, 구현은 다음 세션에서 한다.** 같은 걸 다시 발견하지 마라.

규칙의 근거는 전부 `docs/translation-terms-de.md` §1~§7(실측 문체)이다. 이 파일은 «어떻게 검사할지»만 다룬다.

---

## 0. 측정된 베이스라인 (2026-08-10, 게이트 없이 손으로 잰 값)

| 항목 | 값 | 비고 |
|---|---|---|
| de 포스트 | **42편** | Regeln 6 · Handreihenfolge 6 · Odds 6 · Strategie 8 · Turniere 9 · Glossar 6 + card-counting 1 |
| `masterUpdated` 아예 없음 | **24편** | 드리프트 추적에 안 잡힌다 — 경화하며 채울 것 |
| `masterUpdated` < 2026-07-19 | 5편 | game-order(07-02) · betting-actions · blind-meaning(07-11) · showdown-rules · texas-…-beginners(07-12) |
| 🔴 **FAQPage Question 0개** | **2편** | `holdem-game-order` · `texas-holdem-rules-for-beginners` — **둘 다 Regeln 클러스터** |
| 마침표 소수점(`31.5%`) | **0편** ✅ | 이 지문은 이미 깨끗하다 |
| de Question 총합 | 330개 / 42편 | 산출물 기준 |

★FAQ는 **반드시 빌드 산출물**(`.next/server/app/de/blog/*.html`의 `"@type":"Question"`)로 센다.
소스 raw 카운트는 CRLF 정규화 탓에 틀린다([[faq-schema-build-output-is-truth]]).

---

## 1. 🔴 오탐 함정 — 오늘 실제로 걸린 것들

### 함정 ① `Sie`(경어) vs `sie`(3인칭) — **가장 위험**
급조 정규식 `\bSie\b|\bIhre[nmrs]?\b`가 **24편**을 잡았는데 대부분 오탐이었다.
독일어는 **문장 첫머리에서 3인칭 `sie`(그것/그들)가 대문자 `Sie`가 된다.**

실제 오탐 예(`holdem-3bet.ts`):
> "**sie** heißt 3-Bet, weil der Big Blind die erste Bet ist" ← 3인칭(=die 3-Bet)
> "**Sie** gewinnt den Pot oft sofort." ← 문장 첫머리 3인칭. **경어가 아니다**
> "wann du **sie** erklimmst" ← 3인칭

**올바른 판정법**:
- 경어의 확실한 지문은 **`Ihnen`**(3격)과 **소유격 `Ihr/Ihre/Ihrem/Ihren`이 문장 중간에 대문자로** 오는 것.
  단 `Ihr`는 2인칭 복수(너희)와도 겹친다 — **`ihr`(소문자)와 대비**해서 봐야 한다.
- `Sie` + **경어 동사형**(`Sie können/haben/sind/müssen/werden`) 조합으로 좁힌다.
  3인칭 단수는 `sie kann/hat/ist`라 **동사형이 다르다** — 이게 가장 신뢰할 수 있는 판별 축이다.
- **du체 신호와 함께 세라**: 같은 글에 `du/dein/dir/dich`가 수십 개인데 `Sie können`이 1~2개면 그게 진짜 혼용이다.
  du가 0이고 Sie가 많으면 그 글은 통째로 경어체(별개 판정).

### 함정 ② `prüfe`는 오역 지문이 아니다
`check → prüfen` 오역을 잡으려 `prüfe`를 넣었더니 **11편**이 걸렸는데,
`überprüfen`(검증하다)·`geprüft`(확인된)는 **정상 독일어**다. 실제로 출처 문구
"anhand der Primärquellen **geprüft**"는 §번역 교정에서 **우리가 채택한 표현**이다.

**올바른 판정법**: 포커 액션 문맥에서만 잡는다 —
`prüfen`이 **Check와 같은 문장/표 셀에** 있거나, `ich prüfe`·`du prüfst`처럼 **1·2인칭 현재형**일 때만.
`geprüft`·`überprüf*`·`Faktencheck`은 **화이트리스트**.

### 함정 ③ 숫자 표기는 «맥락»이 갈린다
- `€1,650` = 🔴 (독일어에선 "1유로 65") · `1,5 BB` = ✅ (소수점 콤마가 맞다)
- `31.5 %` = 🔴 마침표 소수점 · `1.000 Chips` = ✅ 천단위 마침표
→ **쉼표/마침표 자체가 아니라 «자릿수 패턴»으로 판정**: `\d,\d{3}\b`(천단위 쉼표)와
  `\d\.\d\s?%`(마침표 소수점)만 잡고, `\d,\d\b`(소수점 콤마)와 `\d\.\d{3}\b`(천단위 마침표)는 통과.
- ⚠ **퍼센트 공백(`25%` vs `25 %`)은 오탐 지뢰다.** §7-5 실측에서 **같은 사이트 안에서도 혼재**했다.
  게이트는 **문서 내 일관성만** 보고(한 글에 두 방식이 섞였는가), 어느 쪽인지는 판정하지 마라.

---

## 2. 검사 항목 (구현 대상)

| # | 검사 | 판정 | 근거 |
|---|---|---|---|
| 1 | **du/Sie 혼용** | 🔴 | §7-2 「한 글 안 Sie/du 혼용 = 즉시 번역 티」. 함정①대로 좁혀서 |
| 2 | **천단위 쉼표** `€1,650` | 🔴 | §3 — 독일 독자에겐 "1유로 65"로 읽힌다 |
| 3 | **마침표 소수점** `31.5 %` | 🔴 | §7-7 실제 채집된 기계번역 지문 |
| 4 | **기계번역 지문 8종** | 🔴 | §7-7 표: Ausbeutung / Werthaltige / Festland Casino / Intermediär / 포지션 `gegenüber` / 성 오류 `Dein Spielweise` |
| 5 | **금지 용어** | 🔴 | §2: die Blenden · der Topf · der Fluss · die Wende · das Brett · call→anrufen |
| 6 | **FAQPage Question 0** | 🔴 | 산출물 기준. 현재 2편 |
| 7 | **퍼센트 표기 문서 내 혼재** | ⚠ | 함정③ — 일관성만 |
| 8 | **명사 소문자** `der flop` | ⚠ | §5 — 모든 명사 대문자. 단 동사(`du willst callen`)는 소문자가 정답이라 품사 구분 필요 |
| 9 | `masterUpdated` 누락 | ⚠ | 현재 24편. 경화하며 채운다 |

**보고 형식**: `audit:hard`와 같게 — 🔴 건수 + **커버리지**(몇 편을 실제로 검사했는지) 동봉.
「0건」이 «안 봤다»인지 «보고 통과»인지 반드시 구분해서 출력할 것.

---

## 3. 게이트 자체를 검증하는 법 (필수)

`audit:hard:selftest`와 같은 방식으로 **알려진 참/거짓 표본**을 넣고 돌린다:

- **참(잡아야 함)**: `€1,650` · `31.5 %` · `Ausbeutung` · `die Blenden` · `Sie können hier folden`(du 글 안에서)
- **거짓(잡으면 안 됨)**: `1,5 BB` · `1.000 Chips` · `sie heißt 3-Bet` · `Sie gewinnt den Pot`(문장 첫머리 3인칭) ·
  `anhand der Primärquellen geprüft` · `du willst callen`(동사 소문자)

**표본은 실제 파일에서 딴다** — `holdem-3bet.ts`의 오탐 문장들이 그대로 회귀 테스트가 된다.

---

## 4. 구현 순서 (다음 세션)

1. 위 §3 표본으로 **먼저 셀프테스트를 쓴다**(TDD) — 규칙을 짜기 전에 오탐 기준을 고정
2. 규칙 1~6(🔴)만 구현. ⚠ 항목은 2차
3. 42편 전수 → **오탐 0이 될 때까지** 튜닝. 이 루프가 본체다
4. `npm run check:de-style` 등록 · 클러스터별 `--cluster=rules` 옵션
5. 결과로 **「42편 중 실제로 손댈 N편」** 확정 → 그게 경화 세션들의 범위가 된다
