# ID GTO 13편 — 전략·원문 보존 검수

검수일: 2026-09-15. 대상: `lib/gto-series.ts`의 ①–⑬ 신규 ID 해설 전편. **전략 렌즈의 전량 검수 1회 결과이며, 발행·빌드·라이브 검증 완료 기록이 아니다.**

## 판정

- **확정된 전략 오류 0건, 승인 정정 승계 누락 0건.** N01–N24와 C01–C12의 해당 의미가 모두 보존돼 있다.
- ⑦ FAQ 마지막 문장에 **선택적 명료화 1건**을 제안한다. 앞문장에 필요한 논지가 이미 있어 전략적 오답이나 발행 차단 사유로 판정하지 않는다.
- 신규 원문 오류 후보로 살펴본 ⑤ K-high flush 문장은 **원문 유지**가 맞다. 같은 K♠를 두 플레이어가 동시에 가질 수 없으며, 실제 합법 조합 전수 대조도 이를 확인했다.
- 포스트는 수정하지 않았다. 이 렌즈는 Codex AI 에이전트의 검수이며, 인도네시아인 또는 다른 모델이 감수했다는 주장이 아니다.

## 읽은 범위와 방법

1. `AGENTS.md`, `CLAUDE.md`, `session-handoff.md`, `.cursor/rules/posting.mdc`, `REVIEW-PROTOCOL.md`를 읽고 Git 상태와 기존 수정 규모를 확인했다. 기존 미커밋 파일을 보존했다.
2. `docs/id-gto-series-translation-brief.md`, `docs/id-gto-source-contract.md`, `docs/pt-gto-publication-review-2026-09-15.md`를 통독했다. `docs/settled-decisions.md`의 전량 검수 시점 규칙도 확인했다.
3. 아래 ID 파일은 메타데이터·본문·표·FAQ까지 **13편 모두 전문 읽었다**. 출력이 잘린 ②와 ⑪ 부분은 다시 열어 읽었다. 현재 EN에서 관련 원문 문장도 직접 대조했다. EN 전편을 이번 렌즈에서 새로 통독했다고 주장하지 않는다. 전체 원문·표 대응의 준비 입력은 ID source contract이며, 표 셀별 수치 패리티는 병렬 수치 렌즈와 root의 별도 영역이다.
4. 선행 기계 검사 `npm run audit:hard -- --locale=id --uncovered`에서 전체 ID 55/55, 신규 13편 각각 0err/0warn을 확인했다. 전체 ID의 미판정 카드 문단은 145개, 형제 표 매칭 후 미대조 행은 25개였다. **이 숫자를 전략 검증 완료로 해석하지 않았다.** 신규 시리즈 카드·전략 문단은 직접 읽고 아래 계산으로 보완했다.
5. 새 solver 실행은 하지 않았다. 원문에 이미 있는 노드·range·표시값을 대조하고, 카드 분류·draw completion·산술만 독립 재계산했다. 앱 표시와 Trainer EV 손실 bb 단위의 오늘 실측은 root의 검증이며 이 렌즈의 실측으로 세지 않는다.

### 검수 스냅샷

SHA-256은 해당 ID 원시 파일의 앞 12자리다. 이후 교정된 문장은 별도 교열 대상이다.

| # | 파일 (`lib/posts-id/`) | SHA-256 |
|---|---|---|
| ① | a-high-board-cbet.ts | a5de461a1aa9 |
| ② | k-high-board-cbet.ts | 96d5b942e9ee |
| ③ | broadway-board-strategy.ts | c10eb75d2208 |
| ④ | donk-bet-strategy.ts | 7a7ba6d552e9 |
| ⑤ | monotone-board-strategy.ts | 815763a0e1e9 |
| ⑥ | paired-board-strategy.ts | fcd24fea9f15 |
| ⑦ | low-board-check-raise.ts | 32b776e91b7e |
| ⑧ | 3bet-pot-cbet.ts | ec7626c7beba |
| ⑨ | 3bet-pot-bet-sizing.ts | 254287ef6f3f |
| ⑩ | 3bet-pot-low-board.ts | ca940b833891 |
| ⑪ | blind-battle-cbet.ts | 3b939804b0eb |
| ⑫ | blind-battle-connected-board.ts | ac48475dd91c |
| ⑬ | ace-paired-board-strategy.ts | 5c9d53b00073 |

## 선택적 명료화 S01 — ⑦ FAQ의 value hand와 bluff 주어

**분류:** ID 문장 구성에서 생긴 지시 대상 모호함. 심각도 낮음. 명료화 필요성의 확신도 중간. 원문과 번역의 주어 차이 자체에 대한 확신도 높음. 언어 렌즈가 먼저 공유한 후보를 이 렌즈가 EN/ID 직접 대조했다.

- 위치: `lib/posts-id/low-board-check-raise.ts:238`, 첫 FAQ 답의 마지막 문장.
- ID: “Pertanyaannya bukan hanya apakah hand kuat, tetapi apakah ia ingin membesarkan pot dan masih dapat membaik ketika call terjadi.”
- EN: `lib/posts-en/low-board-check-raise.ts:345` — “The test is not \"do I have a good hand\" but \"does this hand want the pot to grow, and can I find bluffs that improve when called?\"”
- 근거: EN은 value hand가 큰 pot을 원하는지와 **함께 넣을 bluff가 call을 받아도 개선될 수 있는지**를 나눈다. ID는 `ia`가 앞의 hand로 이어져 두 기능이 한 hand의 조건처럼 읽힐 수 있다. 다만 같은 답의 첫 문장이 “serta cukup draw untuk mendampingi agresi”라고 이미 설명하므로 핵심 논지 누락으로 확정하지 않는다.
- 좁은 제안: “Pertanyaannya bukan hanya apakah hand kuat, tetapi apakah hand itu ingin membesarkan pot dan apakah ada bluff yang masih dapat membaik ketika lawan call.”
- 수치·예제·기존 전략 논거를 바꿀 필요가 없다.

## N01–N24 승계 커버리지

모든 판정은 `docs/id-gto-source-contract.md`의 승인 의미를 기준으로 한다. 표의 위치는 위 편별 파일 안의 해당 절 또는 FAQ다.

| ID | 편 | ID에서 확인한 의미 | 결과 |
|---|---|---|---|
| N01 | ① | dry-board 절에 “Big blind tetap memiliki AJ”; 부재는 AA/AK/AQ, AJ 개별 bet 예제도 유지 | 통과 |
| N02 | ② | 공통 보유를 AJ로 비교; 다음 표는 전체 range이며 개별 AJ EV 측정이 아니라고 명시 | 통과 |
| N03 | ④ | “straight jadi” 우위와 JT nuts 양쪽 16콤보 구별; set와 two pair 동률 명시 | 통과 |
| N04 | ⑤ | “A♠ bersama satu sekop lain”; A♠ 한 장은 draw라고 명시 | 통과 |
| N05 | ⑤ | 본문·compare의 call은 flush 쪽으로 집중된다고 표현; flush만 call한다고 단정하지 않음 | 통과 |
| N06 | ⑤ | 직답·sizing 절에서 BB 첫 결정과 미계산 BTN 전략 구별 | 통과 |
| N07 | ⑦ | 양쪽 set 존재와 BB의 puncak range 우위 부재 구별; lead 3,2% 유지 | 통과 |
| N08 | ⑧ | 낮은 SPR는 pot 확대를 미룰 여지가 줄어든다는 의미; 후속 street가 사라진다는 문장 없음 | 통과 |
| N09 | ⑧ | alt에 모든 set 독점 주장 없음; tldr·set 절에서 BB의 최고 set와 BTN 22 구별 | 통과 |
| N10 | ⑤ | 본문·FAQ에서 한 장 spade는 nut flush보다 높은 flush를 완성할 수 없다고 한정; 다른 개선 가능성 삭제하지 않음 | 통과 |
| N11 | ⑧ | raise의 commitment는 크기에 달림; 모든 raise가 자동 all-in 결정을 강제한다고 하지 않음 | 통과 |
| N12 | ⑦ | 별도 solve note의 0,16 내부단위 = 0,016bb ≈ pot 0,29%; 당시 pot55/stack975 단위도 유지 | 통과 |
| N13 | ⑨ | 단일 sizing 질문에 “Ya, praktis hampir satu ukuran”; 98,4/0,7/0,8 보존 | 통과 |
| N14 | ⑨ | draw 절과 CTA 뒤 반복 모두 필요한 suit의 연속 두 카드로 표현; hearts만으로 제한하지 않음 | 통과 |
| N15 | ⑨ | 작은 bet는 당장 가격만 낮추며 무료 다음 카드를 보장하지 않음; MDF는 pure-bluff acuan, call 할당량·상한 아님 | 통과 |
| N16 | ⑫ | BB의 추가 연결 조합 일부를 설명; SB에도 straight/set/two pair 존재 | 통과 |
| N17 | ⑫ | “Ace-High tanpa draw langsung”로 한정; A4/A8의 OESD 예외를 명시 | 통과 |
| N18 | ⑬ | 미계산 post-check node를 “dalam contoh prakalkulasi ini”로 한정; ⑦ 별도 solve와 충돌 없음 | 통과 |
| N19 | ⑬ | 본문·FAQ 모두 51,5%는 미스 hand-class 비중이며 계산된 fold율이 아님 | 통과 |
| N20 | ⑬ | 작은 bet는 즉시 stack 전액 위험을 뜻하지 않음; raise·후속 street 위험 명시 | 통과 |
| N21 | ⑬ | KK/QQ는 큰 value 추출이 어렵다고 표현; 170개의 더 약한 caller 후보를 보존 | 통과 |
| N22 | ⑬ | FAQ에 개별 hand 행동 빈도 → 가중 평균 전체 빈도 순서 명시 | 통과 |
| N23 | ⑬ | 총합이 안 닫히는 표시 반올림과 403,1 bet combo 설명; 원천표를 억지로 조정하지 않음 | 통과 |
| N24 | CTA | history를 언급하는 ⑩–⑬ 모두 “Tanpa login” 조건; ①–⑨에도 언제나 browser만 쓴다는 단정 없음 | 통과 |

## C01–C12 승계 커버리지

| ID | 편 | ID에서 확인한 의미 | 결과 |
|---|---|---|---|
| C01 | ⑥ | K/Q suited kicker의 추가 trips blocker 설명을 명시적으로 배제; 7,8/7,9/9,0 보존, 미세차 원인은 표만으로 분리 불가 | 통과 |
| C02 | ② | equity는 split pot 포함 기대 지분; EQR과 구별; FAQ도 실제 더 자주 이겼다고 쓰지 않음 | 통과 |
| C03 | ② | QJ 대 AQ에 Q가 와도 자동 승리하지 않는다고 명시; two live cards 표현 없음 | 통과 |
| C04 | ③ | “bet besar button sulit di-raise oleh lawan”; raise가 어려운 주체는 상대 | 통과 |
| C05 | ⑧ | check 0%는 출력에서 사용되지 않았다는 뜻; 모든 combo의 check EV가 엄격히 낮다는 결론 금지 | 통과 |
| C06 | ⑧ | 14,9→34,5→39,6은 두 번 큰 bet와 river 잔액; 본문·FAQ 모두 셋째 66% 주장 없음 | 통과 |
| C07 | ⑨ | underpair는 Q 아래; JJ는 T 위라고 본문에서 직접 설명 | 통과 |
| C08 | ⑨ | AK는 두 overcard, AJ는 A 한 장만 overcard; 개선·gutshot 논거 유지 | 통과 |
| C09 | ⑨ | 마지막 통합 행 “King-High atau Belum jadi”; 별도 Ace-High 행과 겹치는 no-pair 라벨 없음 | 통과 |
| C10 | ⑩ | chart caption은 overpair가 더 많다고 표현; 43,4/16,7을 거의 두 배라고 하지 않음 | 통과 |
| C11 | ⑪ | stripe에 OOP bet가 과반인 첫 SRP 예제라고 명시; 앞의 소량 lead를 부정하지 않음 | 통과 |
| C12 | ⑫ | 세 combo는 예제이며 독점 top3가 아니라고 명시; Q♥4♥ 동률, 88 class 평균과 개별 combo 빈도 구별 | 통과 |

## 전편 전략 경계

| 그룹/편 | 확인한 경계 |
|---|---|
| ①–⑦ | OOP=BB caller, IP=BTN opener. BB lead/donk와 BTN c-bet을 구별. Pot5,5bb/stack97,5bb 및 no-rake 조건 유지. |
| ①–③ | 높은 check 빈도는 range 평균. 특정 A9/K9/KQ가 그 빈도로 check한다고 옮기지 않음. BTN c-bet 조언은 후속 node 측정과 구별. |
| ④–⑤ | completed straight와 nuts 독점, hand category와 draw category, lead 비중과 상대 bet 빈도 구별. 더 약한 hand의 call 가능성을 없애지 않음. |
| ⑥ | pair board에 대한 Ace-High/King-High는 앱 분류임을 설명. 66 quads/33 full house/6x trips/TT two pair 구별. MDF는 의무 방어율이 아님. |
| ⑦ | 아래 두 solve·분모 검증 참조. 87s는 해당 range의 유일 OESD이며 board 자체의 74/84 가능성을 별도로 설명. |
| ⑧–⑩ | OOP=BB 3-bettor, IP=BTN caller, 3-bet to11bb, pot22,5bb/stack89bb. 두 후보는 33%/66%. 낮은 SPR 하나로 bet sizing을 설명하지 않음. |
| ⑨ | 98,4%는 큰 sizing, 99,1%는 두 sizing의 표시 합. 30,1% live draw와 backdoor 분리. EQR 상승과 EV 감소가 동시에 가능하다고 설명. |
| ⑩ | 새로 pair된 A5s3 외에 기존 overpair36 존재. 58,3% missed는 fold율 아님. BTN EQR15,2%p와 EV/pot6,1%p 구별. |
| ⑪–⑬ | OOP=SB opener, IP=BB caller, pot6bb/stack97bb. ⑪/⑫는 단일33%, ⑬은33%/75%. board만으로 역할 차이를 지우지 않음. |
| ⑫ | 88 class 평균39,5%와 Q4 개별54,7%는 다른 분모. ⑦의 check-raise를 이 spot으로 이식하지 않음. |
| ⑬ | trips88/66, one-ace94, As 포함95/72를 구별. bluff-catch는 상대 bluff 가정의 해석. post-check 미계산 고지 유지. |

### ⑦의 두 solve와 산술

- 사전 root는 check96,8%/471,7combo, lead3,2%/15,3combo. 별도 재솔브 root는 check98,0%에 해당하는477,5combo, lead2,0%/9,5combo로 분리돼 있다.
- 후속 표 **앞** note는 2026-08-20 재계산·190iterations·16-bit·12threads 및 과거 내부단위를 설명하고, 이번 ID 집필에서 새로 계산한 결과가 아니라고 명시한다.
- BTN bet63,0%/316,5combo → BB raise14,9%/69,7combo, call65,6%, fold19,5%의 노드 순서가 맞다.
- 69,7/477,5 =14,5969%, 316,5/503 =62,9225%로 단순 나눗셈과 표시빈도의 차이가 존재함을 독립 재계산했다. 본문은 이 고지를 보존하며 원천14,9/63,0을 바꾸지 않는다.
- raise는 **to7,3bb**. call 후 pot9,1bb, pot-sized raise-to10,9bb, (7,3−1,8)/9,1=60,4396%, 7,3/1,8=4,0556배. 약60% 및4,06배 표기와 일치한다.
- continued80,5%와 MDF75,3425%를 구별한다. exploitability0,016/5,5×100=0,2909%pot도 일치한다.
- BTN c-bet을 보여 주는 경로는 직접 solve 후 Check→Bet이며, 사전 계산 root 화면에서 곧바로 후속 node를 여는 것처럼 쓰지 않는다.

## 직접 카드 검산

`lib/poker-eval.ts`의 `evalBest7`은 제공된 카드 중 5장 조합을 모두 비교한다. 이번 검산은 실제 flop과 원문 hand의 합법 무늬 조합을 사용했다. rank만 제시된 hand는 가능한 무늬를 열거했으며, 포스트에 새 홀카드·turn·river를 만들지 않았다. draw의 다음 카드 열거는 completion 확인이며 새 전략 runout을 추가한 것이 아니다.

### 분류·draw 결과

- 12개 비모노톤 flop에서 본문에 등장하는 hand-class **113개, 합법 홀카드 조합 1,005개**의 현재 족보를 계산했다. 기대 분류 불일치 0건.
- 직선 draw10종은 합법 홀카드146조합에서 다음 카드47장을 열거했다. KQ/QJT=8outs, 98/652=4, 87/652=8, 74/652=8, 84/652=8, 88/765=8, Q4/765=8, T9/765=4, QJ/KT6=8, A4/852=4. 모두 일치했다. 74/84의 실제 range 포함 여부는 별도의 원문 조건이며 카드 가능성만으로 range에 추가하지 않았다.
- Q♥T♥7♠의 K♥J♥·9♥8♥는 straight 또는 flush completion15장, A♥K♥·A♥J♥는12장. 이는 **최종 승리를 보장하는 clean outs가 아니다**. ID는 nut-flush/reverse-implied-odds 경계를 보존한다.
- K♠8♦3♣에서 QJ 대 AQ와 Q turn을 카드 중복 없이384경우 열거했다. AQ가 모두 앞선다. QJ의 best5 rank는 Q-Q-K-J-8, AQ는 Q-Q-A-K-8이다. 원문의 C03 정정을 지지한다.
- 6♣6♦3♥에서 BTN trips20을 직접 만들었다. K♠6♠·Q♥6♥·J♥6♥ 각각 내6을 제외하면 상대trips10, 내 kicker까지 제외해도10. 추가 trips blocker0으로 C01의 근거와 일치한다.

| 원문 상황 | 해당 시점의 best5 또는 정확한 분류 |
|---|---|
| A7 + A♥7♦2♣ | A-A-7-7-2, two pair |
| JT + Q♠J♦T♠ | J-J-T-T-Q, two pair |
| AK / K9 / 98 + Q♠J♦T♠ | A-K-Q-J-T / K-Q-J-T-9 / Q-J-T-9-8 |
| JT / T6 / 65 + 9♥8♥7♣ | J-T-9-8-7 / T-9-8-7-6 / 9-8-7-6-5 |
| A♠J♠ + Q♠9♠2♠ | A♠Q♠J♠9♠2♠, nut flush |
| 66 / 33 / TT + 6♣6♦3♥ | 6-6-6-6-3 / 3-3-3-6-6 / T-T-6-6-3 |
| A3 / 22 + 6♣6♦3♥ | 6-6-3-3-A / 6-6-2-2-3, A3 우위 |
| 43 + 6♠5♥2♦ | 6-5-4-3-2, straight; 원문 range에서는 부재 |
| AK / 22 + A♦K♠2♥ | A-A-K-K-2 / 2-2-2-A-K, 22 우위 |
| AJ + Q♥T♥7♠ | A-Q-J-T-7, A 한 장만 Q 위의 overcard |
| A5 + 8♦5♣2♠ | 5-5-A-8-2, pair5 |
| QJ + K♥T♦6♠ | K-Q-J-T-6, 아직 high card; A/9가 straight completion |
| 98 / 84 / 43 + 7♦6♦5♣ | 9-8-7-6-5 / 8-7-6-5-4 / 7-6-5-4-3; 실제 range는 원문 별도 제한 |
| AA / A6 / 66 + A♠A♥6♦ | A-A-A-A-6 / A-A-A-6-6 / 6-6-6-A-A |

### ⑤ K-high flush 후보 기각 — 원문 유지

- EN `lib/posts-en/monotone-board-strategy.ts:168`: “the only hand a king-high flush loses to is the ace-high flush”.
- ID `lib/posts-id/monotone-board-strategy.ts:117`: “Pada flop ini, flush K-high hanya kalah dari flush A-high”.
- Q♠9♠2♠에서 K-high flush를 가지려면 **K♠가 내 홀카드**여야 한다. 따라서 상대 K-high flush를 반례로 만드는 것은 K♠ 중복으로 불가능하다. 보드도 unpaired여서 full house/quads가 없고, Q-9-2는 flop straight flush도 허용하지 않는다.
- 실제 본문의 K♠J♠, K♠8♠, K♠6♠ 각각에 대해 남은47장 중 상대 홀카드2장1,081조합을 전수 비교했다. **총3,243대조**에서 나를 이기는 조합은 각7개, 모두 A♠를 포함한 ace-high flush다. 다른 승자0건.
- 판정: **오탐 기각, 확신도 높음, 수정하지 않음.** 이 문장을 river 전체에 확대하는 것도 아니며, ID는 “Pada flop ini”로 현재 시점을 명시한다.

## 산술 및 남는 한계

- ⑨ 큰bet98,4+작은bet0,7=99,1%. check는 별도 표시0,8%이며 합계 반올림 때문에 보수로 만들지 않는다.
- ⑬79,6+0,5=80,1%, 여기에19,8을 더하면99,9%; bet combo400,4+2,7=403,1. ID의 반올림 고지와 일치한다.
- 동일 비율의3street geometric size는53,6607%pot≈54%. 14,9+34,5+39,6=89bb의 마지막 bet는39,6/121,3=32,6463%로 약33%이며, 세 번66%가 아니다.
- 전체 solver 빈도·개별 hand EV·미세한 bet 혼합의 인과를 새로 계산한 것은 아니다. **원천값을 보존하고 인과 해석과 측정을 구별했는지**가 이 렌즈의 범위다. 미계산 BTN 응답과 turn/river 전략을 확정할 수 있다고 보고하지 않는다.
- 언어 자연스러움 전반, SEO, 앱 최신 버튼, 미디어, 표 셀별 전량 대응, 빌드 및 라이브는 각각 다른 담당 검증과 합쳐 마감한다. 이 문서의0건만으로 발행 검수 전체가 끝났다고 판단하지 않는다.
