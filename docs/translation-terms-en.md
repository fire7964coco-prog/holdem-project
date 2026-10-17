# en 용어 정본 — 솔버 앱 UI 낱말 · 설명 용어 (2026-10-17 신설)

> 언어북 `언어북/en.md` ① 칸. EN은 사이트 마스터 언어라 «번역 용어»가 아니라 **솔버 앱 화면 글자(EN)와 그 화면을 설명할 때 쓰는 말**의 정본이다.
> 출처 = 유튜브 폴더 `productions/holdemmaster-solver-tutorials/locales/review-package/언어북_업데이트_제안_2026-10-17_EN-T03.md`
> (EN 앱 라이브 확인 `locales/en/t03/data/live-check-20261017.json` 2회 계산 · AI 교차 검수 아스트라 울트라·Opus → Fable 판정 `qa/fable-ruling.md`).
> 🔴 **AI 교차 검수뿐 — 사람 원어민 검수 아님.** 본체 대조(10-17): 솔버 소스 EN 사전에서 Starting Pot · Effective Stack · Precision mode · Lock this node’s strategy · Practice this spot · Target exploitability · Max iterations · Solver finished · Advanced settings · Build Tree · Status: · Action EV · «Opens when ⑤ Run Solver is finished» · «on this device only … pick up where you left off on any device» 실재 확인. «Results →» 버튼은 소스 문자열로 못 찾음(라이브 확인 기록만).
> **T04 추가(10-17 (16))** = 유튜브 폴더 `productions/holdemmaster-solver-tutorials/locales/en/t04/qa/fable-ruling.md` §4(EN 라이브 `qa/capture-shoot.json` · AI 교차 검수 → Fable 판정). 본체 대조: 솔버 소스 EN 사전(TrainerPage.vue · custom-trainer-labels.ts · hand-review-labels.ts · flop-trainer-labels.ts · trainer.ts)에서 아래 T04 행 낱말 전부 실재 확인 — 단 공지 «Limped pots … coming soon»은 원격 `notice.json` 라이브 공지라 소스 문자열 아님(바뀔 수 있다).
> 앱 화면 글자는 앱이 바뀌면 같이 바뀐다 — 인용 전 라이브 또는 솔버 소스를 다시 본다. 다른 언어 화면 글자는 `docs/solver-app-verbatim-*.md`.

## 1. 솔버 앱 UI 낱말 (EN 화면 글자 그대로 · 2026-10-17)

| 용도 | EN 앱 표기 | 메모 |
|---|---|---|
| 예제 메뉴 / 예제 카드 | Study Spots / Dry Ace-High Board | |
| 결과 미리보기 버튼 | ⚡ View results | |
| 직접 계산 버튼 | Solve it yourself | |
| 입력 단계 | ① OOP Range · ② IP Range · ③ Board · ④ Bet Sizes · ⑤ Run Solver | ④ 화면 제목은 «Tree Settings» |
| 상태 줄 | Status: Module not loaded → Status: Tree built successfully (12 threads) | 스레드 수는 기기마다 다르다 |
| 결과 탭(잠김) | Results — 툴팁 «Opens when ⑤ Run Solver is finished» | 상단 **탭** = the Results tab |
| 칩 입력 | Starting Pot: / Effective Stack: | 안내 «Enter amounts in integer chips… use 10 chips = 1bb» |
| 벳 칸 | OOP Bet Sizes / IP Bet Sizes · 열 Flop·Turn·River(가로) · 행 Bet: / Raise: | KO와 달리 턴·리버가 플랍 **옆** |
| 상세 설정 | Advanced settings ▸ (Rake · All-in · Merging) · Rake: / Rake Cap: | |
| 트리 | Build Tree | |
| 정밀도 | Precision mode: 32-bit FP / 16-bit integer · «needs 7.21 GB of RAM (limit exceeded)» | RAM limit 3.9GB(= Wasm 4GB − 여유 0.1GB) · 7.21GB는 그 회차 트리의 값 |
| 멈춤 기준 | Target exploitability: 0.3 % / Max iterations: 1000 | 기본값 |
| 실행 | Run Solver / Stop / Pause → «Solving…» · «Iterations: N» · «Exploitability: 0.16 (0.29%)» | 값은 그 회차 예 |
| 완료 | Solver finished! · Time elapsed · 버튼 «Results →» | 완료 뒤 **버튼** = the Results button |
| 결과 화면 | Lock this node’s strategy · Practice this spot · Basics / Graphs / Compare · Display: Action % / Action EV | |
| 트레이너 판정 (T04) | Best play / Acceptable / Review this spot · EV loss · «Judged against this spot's starting pot (5.5bb): Best play ≤0.02bb · Acceptable ≤0.06bb.» | 경계값은 그 스팟 팟에 따라 바뀐다 |
| 핸드 복기 판정 (T04) | Best play / Acceptable / **Review this play** | 트레이너 «Review this spot»과 **구분** |
| 핸드 복기 입력 (T04) | 메뉴 Hand review · Preflop (Open · Call) → Opening seat → Calling seat → Your seat → Your hand → Flop | |
| 핸드 복기 결과 (T04) | Total loss · Practice this spot · «This hand is outside the default range for the selected seat.» · Not analysed | Practice this spot = 결과 화면과 같은 라벨 |
| 트레이너 상단 (T04) | All · Single Raised · 3-Bet Pot · Blind vs Blind · My spots · Review (N) · Daily Puzzle | |
| 트레이너 출제·보드 (T04) | Source: Basic / Source: All flops · Board 패널 High card / Suits / Pairing / Connectedness / Specific flop | Board 버튼은 All flops에서만 |
| 채점 뒤 (T04) | Next hand · Same hand again · View full solution · Leak Finder · Drill this spot type | |
| 사이드바 공지 (T04 · 라이브) | «Notice: Limped pots (SB limp vs BB) — coming soon» | 원격 공지 — 인용 전 라이브 재확인 |
| 트레이너 계정 막대 | «Your progress is saved on this device only. Link a HoldemMaster account to pick up where you left off on any device.» [Continue with Google] [Continue with Telegram] | KO = 구글·카카오 · **EN = Google·Telegram** |

## 2. 설명 용어 (영상 대본 확정 · 글·도구에도 같은 말)

- 오차 → **exploitability**(앱 용어). 정의: «how much more they could win from you, shown as a percentage of the pot». 빈틈은 **개수가 아니라 양**(«room left to exploit» · «how many holes» 금지).
- 전체(요약) 행 → **the whole range**(«overall summary» 금지 — 실제 Summary 패널과 혼동).
- 유효 스택 → «the most either of them can bet against the other»(«between them» 금지 — 합계처럼 들림).
- 레이크 → «the fee the house takes from the pot».
- 상황 카드(내가 적는 메모) → **spot card** · 예시 조건표 → **setup sheet**.
- 베팅 트리 → **betting tree**(«a map of choices»).
- 화면 «0.16 (0.29%)»는 **괄호 안 퍼센트**를 읽는다.

### T04 추가 (2026-10-17 · 트레이너·핸드 복기)

- KO 판정명 ↔ EN 고정: 최적 선택 → Best play · 허용 가능한 선택 → Acceptable · 다시 볼 스팟 → Review this spot(트레이너) · 다시 볼 선택 → Review this play(핸드 복기) · 약점 분석 → Leak Finder · 내 스팟 → My spots · 이 자리 연습하기 / 이 스팟으로 연습 → Practice this spot(두 화면 같은 라벨).
- EV 손실 정의: «the difference between the best action's EV and the EV of the action you picked» · «not chips you actually lost in one hand — the amount you'd give up on average if you played the same spot many, many times» · 채점은 «scales with the pot at the start of the spot».
- 경계값 = **«the lines / those limits»** · 🔴 **«cutoff» 금지**(포커 자리 이름 CO와 충돌).
- 노트 칸 이름: 먼저 «your choice, your reason, and what you're unsure about», 이어서 «what the solver showed, your guess about why, and what to check next»(«the reason you're guessing» 금지).
- 레인지 밖 → «your hand isn't on the list of possible hands the program assumes for that seat»(T01 «list of suspects»와 이어짐) · 핸드 복기 입력의 '앞선 행동' → **the preflop action**.
- 내 것이 된다 → «sticks / only really sticks once you've solved it again» · 내 실력이 된다 → «becomes part of your game»(«become your skill» 금지) · 비슷한 보드로 넓히다 → **widen your practice**.
