# docs/sources — 1차 출처 사본 (본체 레포)

> 검수장 레포의 `홀덤검수/facts/sources/`(WSOP 2026 발췌 등)와 **역할이 같다.** 본체는 그 레포에 `mailbox/` 밖을 커밋할 수 없어(규약 5) 여기에 둔다.
> 🔴 인용할 때는 **이 파일을 열어 축어로** 대조한다 — 요약·기억 금지(CLAUDE.md §12-B).

| 파일 | 무엇 | 취득 | 도구 |
|---|---|---|---|
| `tda-2022-shortform-rules.txt` | **Poker TDA 2022 Shortform Rules** 전문(7쪽 · 309줄) | 2026-09-07 헤드 · `https://pokercalendar.asia/wp-content/uploads/2022/12/2022-Poker-TDA-shortform-rules.pdf`(zh 레인 회차 2가 찾은 경로) | `curl` → `pdftotext`(비-layout 모드 · 3단 조판이라 `-layout`은 줄이 섞인다) |

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

→ 대조한 자리는 **번호가 같다.** 사이트의 「TDA Rule N」 인용(2026-09-07 분포: 16×50 · 19×14 · 18×13 · 14×12 · 12×8 · 20×7 · 70×2 · 45-A · 43-A)은 판본 표기 없이 그대로 유효하다. 🪶 단 TDA 2024 v1.0은 미취득(검수장 발췌 §D) — 2024에서 번호가 밀렸는지는 **모른다**. 인용에 연도를 붙일지는 미결(딜러 렌즈 2026-09-07 권고).
