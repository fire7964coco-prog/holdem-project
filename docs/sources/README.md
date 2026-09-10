# docs/sources — 1차 출처 사본 (본체 레포)

> 검수장 레포의 `홀덤검수/facts/sources/`(WSOP 2026 발췌 등)와 **역할이 같다.** 본체는 그 레포에 `mailbox/` 밖을 커밋할 수 없어(규약 5) 여기에 둔다.
> 🔴 인용할 때는 **이 파일을 열어 축어로** 대조한다 — 요약·기억 금지(CLAUDE.md §12-B).

| 파일 | 무엇 | 취득 | 도구 |
|---|---|---|---|
| `tda-2022-shortform-rules.txt` | **Poker TDA 2022 Shortform Rules** 전문(7쪽 · 309줄) | 2026-09-07 헤드 · `https://pokercalendar.asia/wp-content/uploads/2022/12/2022-Poker-TDA-shortform-rules.pdf`(zh 레인 회차 2가 찾은 경로) | `curl` → `pdftotext`(비-layout 모드 · 3단 조판이라 `-layout`은 줄이 섞인다) |
| 🆕 `tda-2024-rules-v1.txt` | **Poker TDA 2024 Rules Version 1.0** 전문 + **Illustration Addendum** | 2026-09-10 · `https://holdemhive.com/TDA%20Rules-2024-V1.pdf` (ar GPT 교차 회차가 찾은 경로 · `pokertda.com` 본문은 여전히 접속 불가) | `pdftotext -layout` |
| 🆕 `wsop-2026-tournament-rules.txt` | **2026 WSOP Official Tournament Rules** 전문 | 2026-09-10 · `https://assets.wsopcdn.com/wsop/1a72ba28-781c-409d-a9c3-5ca13c4c5718.pdf` | `pdftotext -layout` |
| 🆕 `wsop-2026-live-action-rules.txt` | **2026 WSOP Official Live Action Rules**(캐시) 전문 | 2026-09-10 · `https://assets.wsopcdn.com/wsop/853ee602-e1e9-4019-a0cf-381419d805c6.pdf` | `pdftotext -layout` |

## 🔴 WSOP는 룰북이 둘이고 **같은 번호가 다른 조항**이다 (2026-09-10 실증)

「WSOP Rule N」이라고만 쓰면 어느 쪽인지 알 수 없다. 실증:

| 번호 | 토너먼트 룰북 | Live Action(캐시) 룰북 |
|---|---|---|
| **§117** | Exposing Cards and Proper Folding — 「will incur a penalty but will not have a dead hand」 | 「A participant who **knows the deck is defective**…」 — **완전히 다른 조항** |
| **§104** | Accepted Action(콜하기 전 금액 확인 책임) | 신규 착석 바이인 — **a항**이 「New players entering in No-Limit or Pot-Limit games **will not be required to post**」 |

→ **인용할 때 «어느 룰북»인지 같이 적어라.** 이 구멍을 ar GPT 교차(B#6)가 잡았고, EN-먼저 대기열 §2-A에 등재돼 있다.

## TDA 조항 번호 — 판본 간 안정성 (2026-09-07 실측)

`pokertda.com`은 이 환경에서 접속 불가(메모리 `tda-rules-primary-source-path`). 사이트가 인용해 온 번호(2019 Longform 기준 · 버지니아 규제기관 PDF)와 이 2022 Shortform의 번호를 대조:

| 조항 | 2019 Longform(메모리) | 2022 Shortform(이 파일) |
|---|---|---|
| Cards Speak | Rule 12 | **12** (L27) |
| Tabling Cards | — | **13-A/B** (L28) |
| Face Up for All-Ins | Rule 16 | **16** (L35) |
| Asking to See a Hand | Rule 18-A/B | **18** (L40) |
| Playing the Board at Showdown | — | **19** (L42) |
| Awarding Odd Chips | — | **20** (L43) |
| Side Pots | — | **21** (L44) |
| Raise Amounts (50% 기준) | ja 레인 「43-A」(2019) | **43** (L98) |
| Re-Opening the Bet | — | **47** (L114) |

→ 대조한 자리는 **번호가 같다.** 사이트의 「TDA Rule N」 인용(2026-09-07 분포: 16×50 · 19×14 · 18×13 · 14×12 · 12×8 · 20×7 · 70×2 · 45-A · 43-A)은 판본 표기 없이 그대로 유효하다.

### 🟢 2026-09-10 — **TDA 2024 v1.0을 취득해 대조했다. 번호는 안 밀렸다** (미결 종결)

위 표의 11개 조항을 2024 v1.0 전문과 다시 대조: **12·13·14·16·18·19·20·21·43·47·70 전부 번호·제목 동일**
(13만 제목이 `&`→`and`로 표기만 바뀜). 조문 본문도 인용해 온 자리는 축어가 같다 —
예: §14 「Discarding non-tabled cards face down does not automatically kill them」 · §47A 「…are not facing at least a
full bet or raise when the action returns to them」 · §18B 「any caller has an inalienable right…provided the caller
tabled or retains his or her cards」.

🔴 **따라서 「TDA Rule N」 인용에 연도를 붙일 필요가 없다** — 2019 Longform·2022 Shortform·2024 v1.0에서
우리가 쓰는 번호가 전부 같다. 헤드 미결 ⓖ(「연도를 붙일지 · 2024 미취득이라 번호 이동 여부 불명」)는 **이걸로 닫힌다.**
🪶 단 **WSOP는 반대다** — 위 절대로 룰북이 둘이라 «어느 룰북»은 반드시 적어야 한다.
