# ID GTO 시리즈 — 원문·수치·정정 계약

> 작성·실측: 2026-09-15. 대상은 `lib/gto-series.ts`의 ①–⑬ 인도네시아어 신규 해설이다.
> **최신 EN을 번역하되, PT 최종 검수에서 승인된 좁은 원문 정정을 함께 반영한다.** PT 문장·제목을 ID 원문으로 삼지 않는다.
> 이 문서는 집필 입력이다. ID 최종본 검수·앱 신규 계산·라이브 ID 화면 검증을 완료했다는 기록이 아니다.

## 1. 원문 우선순위와 실측 범위

1. 현재 `lib/posts-en/<slug>.ts`의 **평가된 Post 객체와 본문 전체**가 구조·논거·표·수치·예제·고지의 기본 원문이다.
2. 계산 정본은 `docs/gto-solver-series-spec.md` §4-B, §4-B-2, §4-B-3. 재현 경로·UI 표시는 별도의 최신 ID 앱 실측을 따른다. 앱 설명 노트는 전략 정본이 아니다.
3. **확정 정정은 이 문서 §4–5 및 `docs/pt-gto-publication-review-2026-09-15.md`를 따른다.** 원문의 거짓 문장을 그대로 옮기거나 EN을 몰래 고치지 않는다.
4. `docs/pt-gto-source-contract.md`는 전체 논거·표 구조·출처 고지의 상세 체크리스트다. 다만 그 문서보다 **뒤에 확정된 PT 발행 검수 정정**이 우선한다. PT 어휘·UI·발행일은 ID에 복사하지 않는다.
5. `docs/pt-gto-series-translation-brief.md`의 작업 방식과 GTO 전용 예외를 따른다. 새 경험담·전략 명제·공통 절을 만들지 않는다. ID 용어·키워드·제목·CTA는 ID 집필 브리프가 정한다.
6. 배치·검수 시점은 `docs/settled-decisions.md` §5-A-4 및 `docs/id-gto-next-session.md`: ①–④ / ⑤–⑧ / ⑨–⑬, 배치별 기계 검사, 전량 완성 후 전체 렌즈, 정정 후 교열, 묶음 발행.

이번 확인은 EN 13편 전문, PT 대응 표 전부, PT 승인 정정 문단 원문을 대조했다. Jiti의 `fsCache:false`, `moduleCache:false`로 각 default Post를 읽었다. 원시 파일 주석을 본문으로 세지 않았다. EN/PT 표 **637행**(헤더·구분행 포함)의 숫자·카드·열 수가 모두 일치했다. 비교용으로만 PT 소수 쉼표와 `three-bet`/`3-bet`/`3-bets`의 동등 표기를 정규화했다. 전략 의미까지 이 기계 비교가 보증하는 것은 아니다.

## 2. 최신 EN 스냅샷

**①–⑫의 `masterUpdated`는 2026-09-02, ⑬은 2026-08-21.** 13개 EN 원시 파일 SHA-256 앞 12자리가 PT 준비 당시 계약과 전부 일치했다. 새 ID의 `date`·`updated`는 실제 ID 발행·수정일을 쓴다. 본문 조건표의 Checked 날짜는 역사적 계산 출처 날짜이므로 ID 발행일로 바꾸지 않는다.

| # | slug | EN updated | H2 | FAQ | 표 행 | EN SHA-256 | PT SHA-256 |
|---|---|---|---:|---:|---:|---|---|
| ① | a-high-board-cbet | 2026-09-02 | 9 | 5 | 29 | 19a2022cb56f | b7eed409df0d |
| ② | k-high-board-cbet | 2026-09-02 | 11 | 5 | 39 | 9ad37ea0d5eb | 7d6a219fae0f |
| ③ | broadway-board-strategy | 2026-09-02 | 11 | 4 | 47 | b070b05f1ed2 | da25ded5b9a4 |
| ④ | donk-bet-strategy | 2026-09-02 | 10 | 7 | 57 | 6a76c8073d2b | 93615a86634a |
| ⑤ | monotone-board-strategy | 2026-09-02 | 11 | 5 | 42 | 54ba69b7f745 | d266561a568a |
| ⑥ | paired-board-strategy | 2026-09-02 | 12 | 6 | 57 | 55520b5ae288 | 27af9db4e79d |
| ⑦ | low-board-check-raise | 2026-09-02 | 11 | 6 | 63 | 709bdeb72dc6 | 1ab9a9fab0a1 |
| ⑧ | 3bet-pot-cbet | 2026-09-02 | 11 | 6 | 33 | 5b98f7a0a146 | 36309c88604f |
| ⑨ | 3bet-pot-bet-sizing | 2026-09-02 | 10 | 7 | 51 | a07654ef52b4 | 659434c46053 |
| ⑩ | 3bet-pot-low-board | 2026-09-02 | 8 | 4 | 45 | ed67324cb5ac | d8ce4f68b678 |
| ⑪ | blind-battle-cbet | 2026-09-02 | 8 | 4 | 61 | a73ca6342264 | 7438252eaa8e |
| ⑫ | blind-battle-connected-board | 2026-09-02 | 8 | 4 | 66 | 9171917a3bad | 826774b02682 |
| ⑬ | ace-paired-board-strategy | 2026-08-21 | 8 | 4 | 47 | 34f50dc80413 | 27bb06c4ecb2 |

- 합계 FAQ 67. 전편 본문 이미지 1장, readnext 카드 2장. 히어로는 Post.image로 렌더되므로 content에 넣지 않는다.
- H2·FAQ·디렉티브 종류/순서·본문 이미지 수는 EN/PT 13편 모두 일치했다. 표 크기·링크 슬롯·디렉티브 상세 순서는 PT 원문 계약 §2를 따른다.
- **⑤에는 별도 공통 조건 H2가 없고, ⑩–⑬에는 FAQ H2가 없다.** 다른 편과 맞추려고 신설하지 않는다.
- ⑥의 c-bet 링크는 H2 안에 있다. ⑫–⑬의 본문 링크가 시리즈 내부뿐인 것도 기존 구조다.
- `==` 수를 비교할 때 기존 structure 게이트의 정규식은 내부에 `=`가 든 수식 하이라이트를 모두 세지 않는다. 같은 방법의 EN/ID 패리티를 보되, 실제 강조 누락은 원문 문단으로 확인한다.

## 3. 계산·역할·분모 고정표

아래 마침표 소수는 원천값 대조용이다. ID 독자용 표기는 ID 브리프를 따른다. **체크를 100−벳합으로 만들지 않는다.** 개별 표시값은 반올림돼 합이 99.9 또는 100.1일 수 있다.

| # | 보드 | Check % | 작은 bet % | 큰 bet % | bet 합 % | OOP EQ % | OOP EQR % | IP EQR % |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| ① | A♥7♦2♣ | 98.2 | 1.0 | 0.9 | 1.9 | 45.1 | 84.0 | 113.1 |
| ② | K♠8♦3♣ | 99.8 | 0.1 | 0.1 | 0.2 | 46.3 | 80.7 | 116.7 |
| ③ | Q♠J♦T♠ | 99.9 | 0.1 | 0.0 | 0.1 | 46.7 | 77.9 | 119.4 |
| ④ | 9♥8♥7♣ | 76.2 | 16.8 | 6.9 | 23.7 | 48.5 | 93.2 | 106.4 |
| ⑤ | Q♠9♠2♠ | 88.8 | 8.0 | 3.2 | 11.2 | 47.7 | 90.4 | 108.8 |
| ⑥ | 6♣6♦3♥ | 97.0 | 1.0 | 2.0 | 3.0 | 47.2 | 83.7 | 114.5 |
| ⑦ | 6♠5♥2♦ | 96.8 | 3.2 | — | 3.2 | 48.3 | 84.3 | 114.7 |
| ⑧ | A♦K♠2♥ | 0.0 | 57.8 | 42.2 | 100.0 | 68.9 | 109.6 | 78.7 |
| ⑨ | Q♥T♥7♠ | 0.8 | 0.7 | 98.4 | 99.1 | 58.3 | 117.8 | 75.1 |
| ⑩ | 8♦5♣2♠ | 2.0 | 0.3 | 97.8 | 98.1 | 58.6 | 106.9 | 90.3 |
| ⑪ | K♥T♦6♠ | 32.6 | 67.4 | — | 67.4 | 55.3 | 103.1 | 96.1 |
| ⑫ | 7♦6♦5♣ | 90.4 | 9.6 | — | 9.6 | 49.6 | 85.3 | 114.4 |
| ⑬ | A♠A♥6♦ | 19.8 | 79.6 | 0.5 | 80.1 | 56.2 | 104.1 | 94.8 |

| # | pot / 남은 유효 stack (bb) | 제공 bet 크기 (bb) | OOP / IP combos | OOP / IP EV (bb) |
|---|---|---|---|---|
| ① | 5.5 / 97.5 | 1.8 (33%) · 4.1 (75%) | 464 / 463 | 2.09 / 3.41 |
| ② | 5.5 / 97.5 | 1.8 · 4.1 | 474 / 480 | 2.06 / 3.44 |
| ③ | 5.5 / 97.5 | 1.8 · 4.1 | 453 / 458 | 2.00 / 3.50 |
| ④ | 5.5 / 97.5 | 1.8 · 4.1 | 462 / 472 | 2.48 / 3.02 |
| ⑤ | 5.5 / 97.5 | 1.8 · 4.1 | 468 / 474 | 2.37 / 3.13 |
| ⑥ | 5.5 / 97.5 | 1.8 · 4.1 | 486 / 502 | 2.17 / 3.33 |
| ⑦ | 5.5 / 97.5 | **1.8 (33%) 하나** | 487 / 503 | 2.24 / 3.26 |
| ⑧ | 22.5 / 89 | 7.4 (33%) · 14.9 (66%) | 63 / 130 | 16.99 / 5.51 |
| ⑨ | 22.5 / 89 | 7.4 · 14.9 | 73 / 133 | 15.46 / 7.04 |
| ⑩ | 22.5 / 89 | 7.4 · 14.9 | 83 / 144 | 14.09 / 8.41 |
| ⑪ | 6 / 97 | **2 (33%) 하나** | 538 / 525 | 3.42 / 2.58 |
| ⑫ | 6 / 97 | **2 (33%) 하나** | 572 / 534 | 2.54 / 3.46 |
| ⑬ | 6 / 97 | 2 (33%) · 4.5 (75%) | 503 / 505 | 3.51 / 2.49 |

### 역할·옵션·출처의 경계

- ①–⑦: BTN opens 2.5bb → BB calls. **OOP=BB 콜러, IP=BTN 오프너.** Pot=2.5+2.5+dead SB0.5, stack=100−2.5. BB 선제벳은 donk/lead이며 c-bet이 아니다.
- ⑧–⑩: BB three-bets **to 11bb** → BTN calls. **OOP=BB 3-bettor, IP=BTN 콜러.** Pot=11+11+dead SB0.5, stack=89, SPR≈4.0. 큰 사이즈는 **66%**다.
- ⑪–⑬: SB opens3bb → BB calls. **OOP=SB 오프너, IP=BB 콜러.** Pot=3+3, 추가 dead blind 없음, stack97, SPR≈16.2. 프리플랍 range는 같고 보드 블로커가 combos 차이를 만든다.
- ⑦·⑪·⑫에는 작은 size 하나만 제공했다. 큰 size를 넣고 비교해 탈락시킨 결과가 아니다. ⑬에는 **33%와75% 둘 다 제공**했다.
- ⑧–⑩ BB의14종 range: AA, AKs, AQs, AJs, A5s, A4s, AKo, KK, KQs, AQo, QQ, JJ, TT, 99. 보드마다 남는 조합만 다르다.
- 전편 heads-up, 100bb 표준 온라인 range의 근사, **rake 미반영**. 다른 range·stack·size·상대에 똑같은 빈도를 약속하지 않는다.
- 사전 계산 예제는 **플랍 첫 결정만**. IP 결과 패널은 range/equity 자료이며 IP 후속 행동 전략표가 아니다. 후속 노드 예외는 **⑦의 별도 재솔브뿐**이다.
- 화면 집계 공식은 **Σ(strategy×normalizer)/Σnormalizer**. ⑨ 큰 bet는 **98.4%**이며 range weights로 얻는98.5%로 되돌리지 않는다. Check는 **0.8%**이며99.1에서 빼서0.9로 바꾸지 않는다.

## 4. PT에서 승인된 좁은 원문 정정 — 24행 전부 승계

출처는 PT 발행 검수 기록의 **Narrow inherited source ambiguities adjudicated during writing** 전체다. 번호는 이 계약의 추적 ID이며 원문 표 순서를 유지한다. 수치표는 그대로 두고 아래 **주어·인과·범위·조건**을 바로잡는다. 같은 주장이 FAQ·요약·본문에 반복되면 모두 해당한다.

| ID | 편 | EN에서 그대로 옮기면 안 되는 부분 | ID에 반영할 승인 의미와 근거 |
|---|---|---|---|
| N01 | ① | BB에 AK/AQ/**AJ**가 모두 없다는 dry-board 설명 | 없는 것은 AA/AK/AQ, **AJ는 BB에 있다**. 같은 글의 AJ 상한 및 개별 AJ bet 예제가 근거. PT는 AK/AQ와 AJ를 분리했다. |
| N02 | ② | “same AQ in the big blind” | 실제 공통 보유인 **AJ**로 비교. 다음 표는 전체 range 지표이므로 개별 AJ EV를 실측했다는 말은 하지 않는다. |
| N03 | ④ | “more nuts”, “every other row” | **더 많은 완성 straight**이지 JT nuts 독점이 아니다. JT16은 양쪽 동일, 추가 T6s4가 차이. set1.9/1.9와 two-pair2.8/2.8은 모두 동률이다. |
| N04 | ⑤ | A♠ 한 장만 있으면 이미 최강 hand | Nut flush는 **A♠+다른 스페이드 홀카드**가 있어야 한다. Q♠9♠2♠와 합쳐5장 필요. |
| N05 | ⑤ | large bet는 flush만 call한다는 “only” | Call이 **flush 쪽으로 집중**된다고 쓴다. 같은 글의 한 장 스페이드 콜러 가능성을 지우지 않는다. compare 블록에도 적용. |
| N06 | ⑤ | “strategy for both players”를 양쪽 행동 실측처럼 표현 | 수치는 **BB의 첫 액션**. 양쪽 range를 읽는 후속 전략 설명은 해석임을 명시한다. |
| N07 | ⑦ | “Nobody has a top end / nobody leads” | 양쪽 set가 존재한다. **상위 hand의 우위가 없다 / BB는 거의 lead하지 않는다**. lead3.2%를0으로 바꾸지 않는다. |
| N08 | ⑧ | low SPR라 “no later street” | **팟을 키우는 결정을 미룰 여지가 적다**. 실제 설명의 flop/turn/river 산술과 공존해야 한다. |
| N09 | ⑧ | imageAlt의 “every set combo”가 BB에 있다는 말 | BB가 **가장 높은 sets(AA/KK)**를 갖는다. BTN에는22 set가 있다. |
| N10 | ⑤ | 한 장 spade 콜러는 nut flush에 “drawing at nothing” | **더 높은 flush를 완성할 수 없다**. 다른 개선(full house·straight flush까지)의 모든 가능성을0으로 단정하지 않는다. 본문과 FAQ 모두. |
| N11 | ⑧ | 모든 raise가 자동으로 stack 전부를 묶음 | Raise 크기에 따라 **남은 stack을 걸게 될 수 있다**. 후속 노드가 없으므로 jam/call/fold 경계는 해석이다. |
| N12 | ⑦ | exploitability0.16을5.5bb와 같은 단위처럼 표기 | **당시 내부단위0.16=0.016bb≈pot의0.29%**. 당시 pot55/stack975는0.1bb 단위. |
| N13 | ⑨ | 단일 size 질문에 “no — it uses one” | **그렇다, 사실상 거의 한 size**라고 답한다.98.4 large/0.7 small/0.8 check를 보존. |
| N14 | ⑨ | backdoor를 runner-runner **hearts만**으로 한정 | **필요한 무늬의 카드가 연속 두 장**. 스페이드 suited도 backdoor가 가능하다.10/47×9/46은 보존. 설명 후반 반복문에도 적용. |
| N15 | ⑨ | small bet는 이후 드로우 비용을 면제 / MDF는 ceiling | Small bet는 **당장 가격을 낮추되 이후 공짜를 보장하지 않는다**. MDF는 **equity0 pure-bluff 전제의 참고값**, 상한·콜 할당량이 아니다. |
| N16 | ⑫ | connecting 조합이 **오직 BB에만** 생존 | BB만 가진 **추가 연결 조합 일부**. SB도 straight16/set9/two-pair7이 있다. |
| N17 | ⑫ | A-high는 pair로만 개선 가능 | **즉시 draw가 없는 A-high**로 한정. 넓은 SB range의 A4/A8은7-6-5에서 OESD다. |
| N18 | ⑬ | 시리즈 어디에도 post-check 노드 없음 | **이 사전 계산 예제**에 없다고 한정.⑦은 별도 후속 노드를 계산했다. |
| N19 | ⑬ | missed51.5%=fold51.5% | **블러프 대상이 될 수 있는 hand-class 비중**, 계산된 fold율 아님. 본문·FAQ 모두. |
| N20 | ⑬ | 작은 bet라97bb는 절대 위험하지 않음 | 작은 flop bet가 **즉시 전액 commitment는 아니다**. Raise·후속 street 위험은 남는다. |
| N21 | ⑬ | KK/QQ는 더 약한 hand의 call을 못 받음 | **큰 value를 뽑기 어렵다**. 같은 글에 KK보다 약한170콤보가 있어 더 약한 call 자체를0으로 만들면 모순. |
| N22 | ⑬ | solver는 전체 range 빈도만 결정 | **개별 hand의 행동 빈도**를 계산하고 가중 평균으로 전체 빈도가 나온다. |
| N23 | ⑬ | 표시 action/combos 합이 정확히 안 닫힘 | **반올림**을 설명.0.5+79.6+19.8=99.9,2.7+400.4=403.1. 표를 맞추려고 수치 수정·새 불필요 percentage를 넣지 않는다. |
| N24 | CTA | history가 항상 browser에만 남음 | **로그인하지 않으면** history가 browser에 남는다. 선택적 account sync와 로컬 custom solve는 구별. 최신 ID 제품 문구 실측과 맞춘다. |

## 5. PT 전체 시리즈 검수의 후속 정정도 승계

위24행만 읽고 끝내면 아래 정정을 빠뜨린다. PT 검수 기록의 **Complete-series review and adjudication**에 있는 판정이다.

| ID | 편 | 반드시 유지할 정정 |
|---|---|---|
| C01 | ⑥ | **같은 무늬 K/Q kicker가 상대 trips를 추가로 block해서7.8/7.9/9.0 차이를 만든다고 설명하지 않는다.** 내6이 이미 그 무늬 suited6x를 제거했고 BTN에 K6o/Q6o가 없다. 빈도는 그대로, 원인 미분리라고 설명. 아래 직접 열거도 추가 제거0을 확인했다. |
| C02 | ② | Equity를 **실제 플레이에서 팟을 이기는 빈도**와 동일시하지 않는다. EQ46.3>45.1이 실제 승리 횟수가 더 많음을 측정한 것은 아니다. EQR/EV 표와 FAQ 모두 구별. |
| C03 | ② | QJ를 AQ에 대해 “two live cards”라 하지 않는다. Q가 떨어지면 AQ가 더 좋은 kicker의 Q pair. **아직 개선 가능성이 있는 hand**로 표현. |
| C04 | ③ | Large bet와 nut advantage 때문에 **상대가 raise하기 어렵다**. 번역에서 “내가 raise하기 어렵다”로 주어를 뒤집지 않는다. |
| C05 | ⑧ | Check0%만으로 **모든 combo의 check EV가 bet EV보다 엄격히 낮다**고 결론내리지 않는다. 출력 전략에서 check가 사용되지 않았다는 뜻이며 행동별 EV 차이는 빈도만으로 알 수 없다. |
| C06 | ⑧ | 14.9→34.5→39.6은 **두 번 큰 bet+river 잔액**이다. 세 번 모두66%라고 쓰지 않는다. FAQ도 마지막 bet가 잔액 조정임을 남긴다. |
| C07 | ⑨ | Underpair는 이 표에서 **Q보다 낮은 pocket pair**. JJ는T보다 높으므로 모든 underpair가 두 broadway 카드보다 낮다고 하지 않는다. |
| C08 | ⑨ | AJ의J는Q보다 낮아 **두 overcard**가 아니다. Gutshot의 straight outs·홀카드로 pair가 될 가능성을 설명. AK와AJ를 똑같이 두 overcard로 묶지 않는다. |
| C09 | ⑨ | 마지막 통합 행은 **K-high와 No made hand**. “K-high or no pair”로 쓰면 별도 A-high 행과 범위가 겹친다. 실제 ID 앱 두 category 이름을 합친다. |
| C10 | ⑩ | Chart caption은 BB에 **overpair가 더 많다**.43.4/16.7≈2.60이므로 “거의 두 배”를 복원하지 않는다. |
| C11 | ⑪ | “첫 OOP bet SRP”가 아니라 **OOP가 과반 bet하는 첫 SRP 예제**. 앞의3.0·23.7% lead를 없던 것으로 만들지 않는다. |
| C12 | ⑫ | Q♠4♠54.7·A♣7♣54.4·T♣9♣52.2는 **인용한 세 예제**. Q♥4♥도54.7로 동률이므로 독점적인 top3라 부르지 않는다.88의39.5%는 class 평균, Q4 개별54.7%와 분모가 다르다. |

PT의 편집상 후속 개선도 의미를 참고한다: ⑦ desc는 별도 check-raise 계산의 **독자 이득**을 설명했고, ⑨ solver H2에는 **poker 맥락**을 넣었다. ID 제목·메타는 ID 검색자료로 정한다. PT의 “검수 완료” 문구나 PT 검증 횟수를 ID 파일 헤더에 복사하지 않는다.

## 6. 편별 탈락하기 쉬운 원문 사실·분모

| 편 | 숫자 귀속과 필요한 고지 |
|---|---|
| ① |98.2%는 **전체 BB range** check, A9 단독 빈도 아님. A7/A2=two pair. BB77/22 set6콤보, BTN AA 포함9. BTN의70–100% 일반 c-bet 가이드는 이 예제의 후속 노드 실측과 구분. 더 약한 hand도 lead에 call할 수 있다. |
| ② | BB overpair0 vs BTN1.3. BB two-pair0.8 vs0.4는 약4콤보이며 overpair보다 높은 족보. A-high27.0/30.0과 no-made35.4/28.3은 별개.72.2 no-draw는 전체 range 분모. |
| ③ | Q♠J♦T♠는투톤. AK/K9/98 straight, BTN48 vs BB32. AK 부재가 차이. OESD28.7/27.7은 made-straight 분포와 다른 축. BTN size/check-raise 수치는 미계산. |
| ④ | BB straight24 vs BTN20, 차이는T6s4. JT16 양쪽동일. EQ48.5/EQR93.2로 전체 우위는BTN. No-pair BB53.7 vsBTN51.7이므로 BTN check를 “미스가 더 많아서” 하나로 설명 금지. QQ(no heart) 위험 turn23/47, Q♥ 있으면22/47.24straight 모두 checking range에 남는 것은 아님. |
| ⑤ | A♠J♠ 개별 check83.4, nut8콤보 평균69.9, non-nut25콤보 평균81.4. A♠K♠는 BB에 없음. Q♠가 보드이므로 J-high flush라는 명칭 금지. J♠/T♠는 다른 flush의 kicker 슬롯을 block. Flush-draw 합25.6/29.2는 두 exclusive draw 행의 합. 큰 lead3.2는BTN bet율 아님. |
| ⑥ | One six=trips,66=quads,33=full house.63은 양쪽 range에 없음. Trips BB26/BTN20 차이는J6s/T6s/96s. Board pair 초과18.4/20.3. TT=two pair/EQ76.0.22는6과3 모두보다 낮음. MDF75.3와 실제 최적 후속 방어는 별개·미계산. |
| ⑦ | §7 전체 고지 필수.43만 straight를 만들지만 양쪽 range에 없음.87s는 **이 range 안의** 유일 OESD; 보드 자체에는74도 OESD,84도double gutshot 가능. 상위 raise 행들은 약30/69.7콤보이며 전체 raise 목록 아님. |
| ⑧ | BB63 전부pair 이상; check0.0/0.0. Small57.8의 이유를 낮은SPR 하나로 만들지 않는다(동일SPR⑨/⑩ 반례).14.9→34.5→39.6은 산술이며 turn/river 계산결과 아님. No-made0이 bluff0은 아님. |
| ⑨ | Large98.4와 총bet99.1 구별. Live draws30.1과backdoors 구별. BTN40draw 중 한 장 가격에서2/3 통과2콤보,1/3 통과4. Bare flush draw0; BTN two-heart4 모두 combo draw. BB two-heart4 모두A♥ 포함. Set 비율8.2>6.8이나 개수6<9. EQR117.8 상승에도 EV15.46<16.99. |
| ⑩ | Board와 새로 pair된A5s3 외에 기존 overpair36이 있음. A-high40/A4s gutshot4, draw축4.8+16.9+78.3. BTN set9 독점. Missed58.3은fold율 아님. BTN EQR 차이15.2포인트와 EV/pot 점유율 차이6.1포인트 구별. |
| ⑪ | SB opener 역할과K-T-6의 range 적합성 둘을 함께 설명. 같은SB⑫9.6/⑬80.1 반례 유지. 단일33 옵션. QJ16은8-out OESD. Set SB9/BB3. EQR103.1이 더 높은 절대 수익을 뜻하지 않음. |
| ⑫ | ⑪과 pot/stack/range/size 동일, 보드만 바뀜. 양쪽set9;1.6/1.7은 분모 차이. BB set9+two-pair13+straight20=42. Live draws46.4/55.0.88 class평균39.5와개별Q4 54.7 구별;88 EQ73.4–75.2/EQR133–138 유지.⑦과좌석도 다름. |
| ⑬ | Small79.6+large0.5=80.1,check19.8. 두size 제공. Trips SB88/BB66;AK+AQ16, AJo6 포함SB 독점 상위22. AA1은SB만;full house66의3+A6의6=9 양쪽동일. One-ace94의check0.1–26.0,평균12.3,0% combo없음. Bluff-catch는상대bluff 가정의해석. |

## 7. ⑦의 두 솔브 — 출처·노드 계약

### A. 사전 계산 교육 예제

BB root: **check96.8%/471.7콤보,bet1.8bb3.2%/15.3콤보,total487**. EQ/EV/EQR은 §3. 이 화면에서 action chip을 눌러 BTN bet 이후의 BB check-raise로 갈 수 없다.

### B. 2026-08-20 별도 재솔브

동일 tree를 다시 계산: flop bet33·raise60·pot55·stack975(당시0.1bb 단위), **190iterations, exploitability 내부0.16=0.016bb≈pot의0.29%,16-bit integer,12threads**. 이번 ID 작업에서 새로 계산한 값이 아니다.

| 노드 | 행동 | 표시 빈도 | 표시 combos |
|---|---|---:|---:|
| 재솔브 BB root | Check |98.0%|477.5|
| 재솔브 BB root | Bet1.8bb |2.0%|9.5|
| BB check 후 BTN | Bet1.8bb |63.0%|316.5|
| BB check 후 BTN | Check back |37.0%|186.5|
| BTN bet1.8bb 후 BB | Raise **to7.3bb** |14.9%|69.7|
| BTN bet1.8bb 후 BB | Call |65.6%|314.6|
| BTN bet1.8bb 후 BB | Fold |19.5%|93.2|

- **후속 표 앞**에 별도 solve임을 밝힌 note를 둔다. 사전 root3.2/15.3과 재솔브root2.0/9.5를 같은 source의 표로 합치지 않는다.
- 69.7÷477.5=14.6%이나 화면은 14.9%. 316.5÷503=62.9%이나 화면은 63.0%. **표시값을 보존하고 집계 불일치 고지를 지우지 않는다.**
- 7.3bb는 raise-to 총액. 콜 후 pot=5.5+1.8+1.8=9.1, pot-size raise-to=10.9. `(7.3−1.8)/9.1≈60%`, bet 총액의 4.06배다. “pot-sized”나 “4배를 더해 5배”로 옮기지 않는다.
- 사전/재솔브root 차이는 거의 무차별인 low-EV lead의 수렴 차이로 설명한다. 카테고리·draw·EQ·EV·EQR이 같았다는 기존 고지도 보존.
- Set66/55/22 총9와65s의 **6♦5♦·6♣5♣ 두 콤보**가100% raise.64s는3개 중2개가100%.98s EQ35.8/raise99%+,87s EQ46.2/raise80–83,J4s/Q4s67–90,54s74–75.
- Continued 80.5%와 MDF 75.3%는 다른 값. ⑥·⑩의 미계산 response에 14.9를 옮기지 않는다.
- CTA도 사전 결과 root/range 확인과 **직접 solve→Check→Bet**의 두 경로로 구별한다. 버튼 이름은 최신 ID 앱 실측을 쓴다.

## 8. 이번에 직접 검산한 범위

새 solver 실행 없이 **확정 표를 바꾸지 않는 산술·카드 조합 확인**을 했다. 손으로 읽어 추정하지 않고 JavaScript로 계산했다. 아래 추가 자리수는 검산 근거이며 ID 본문에 전부 새로 넣으라는 뜻이 아니다.

### 산술

| 확인 | 재계산 | 원문 유지값/해석 |
|---|---|---|
|26개 OOP/IP EQR|EV/(pot×EQ),13편 EV합=pot|표시 EQR과 최대0.25721%p 차이.기존0.3%p 반올림 허용 안.표시값 수정 금지|
|Backdoor flush|10/47×9/46=4.16281%|약4.2%,한 장 draw 아님|
|Flop board pair 이상|1−(48/51)(44/50)=17.17647%|약17.2%,trips board도 포함하는 보수집합|
|Unpaired hole cards가 flop rank를 못 맞힘|(44/50)(43/49)(42/48)=67.57143%|약67.6%,맞힐확률32.4%|
|④위험 turn|23/47=48.93617%,22/47=46.80851%|약49%/47%,Q♥ 보유에 따라 변경;실제 패배확률 아님|
|⑤nut-flush check평균|8표시값 평균69.925%|69.9%,A♠J♠83.4와구별|
|SRP small call가격|1.8/(5.5+1.8+1.8)=19.78022%|19.8%|
|3-bet small/large call가격|7.4/37.3=19.83914%,14.9/52.3=28.48948%|19.8%/28.5%|
|MDF|5.5/7.3=75.34247%,22.5/29.9=75.25084%,22.5/37.4=60.16043%|75.3/75.3/60.2%,pure-bluff 가정|
|⑦exploitability|0.016/5.5×100=0.29091%|0.29%pot,0.16bb아님|
|⑦raise|5.5/9.1=60.43956%;7.3/1.8=4.05556|표시 금액 반올림상 약60%,4.06배;pot-size아님|
|⑦표시combos역산|69.7/477.5=14.59686%,316.5/503=62.92247%|표시14.9/63.0을그대로인용하고고지|
|Geometric3streets|((200.5/22.5)^(1/3)−1)/2=53.66066%|약54%pot씩3번이면89bb에 도달|
|큰bet뒤잔액|14.9+34.5+39.6=89;river39.6/121.3≈32.65%|세번째는66%가아닌약33%잔액bet|
|⑩overpair비율|43.4/16.7=2.59880|거의두배금지|
|⑨→⑩BTN pot share|8.41/22.5−7.04/22.5=6.08889%p|6.1%p;EQR차이15.2%p와구별|

| Outs | 다음 한 장, outs/47 | 두 장,1−(47−outs)/47×(46−outs)/46 |
|---:|---:|---:|
|15|31.91489%→31.9%|54.11656%→54.1%|
|12|25.53191%→25.5%|44.95837%→45.0%|
|9|19.14894%→19.1%|34.96762%→35.0%|
|8|17.02128%→17.0%|31.45236%→31.5%|
|4|8.51064%→8.5%|16.46623%→16.5%|

이 확률은 기본 completion 계산이다. Dirty outs, 상대의 더 높은 flush, 이후 추가 가격, 이미 made된 hand의 가치는 별도로 다룬다. “두 장 확률>현재 call 가격”만으로 call 이익을 확정하지 않는다.

### 카드·조합

- 52장 덱에서 보드와 겹치지 않는 홀카드 두 장을 전수 열거해 straight 종류를 확인: **QJT→AK/K9/98**, **987→JT/T6/65**, **652→43만**, **765→98/84/43**. 각각 보드 블로커가 없는 rank 조합은 16콤보. 실제 range에 포함되는 부분만 본문 숫자다. 특히 765가 허용하는 84와 본문 예제 range의 유무를 혼동하지 않는다.
- 해당 시점의 카드로 가능한 best 5장을 조합해 족보 확인: A7+A72→A-A-7-7-2(two pair); JT+QJT→J-J-T-T-Q; 33+663→3-3-3-6-6(full house); TT+663→T-T-6-6-3; 66+663→6-6-6-6-3; A6+AA6→A-A-A-6-6; 66+AA6→6-6-6-A-A. KK+AAA6(턴)은 A-A-A-K-K다. 원문이 가정한 turn 개선은 해당 카드까지 넣어 계산했다.
- ⑥ BTN trips 20을 A6(s/o), K6s, Q6s, 86s, 76s, 65s, 64s로 열거. **K♠6♠·Q♥6♥·J♥6♥ 모두 내 6을 뺀 뒤 남는 상대 trips 10, 내 kicker를 추가 제거해도 10**. 추가 blocker 0이므로 C01을 지지한다.
- ⑨ Q♥T♥7♠에서 **52−홀카드 2−보드 3=47장**을 전수 검사: K♥J♥/9♥8♥는 straight 또는 flush를 완성하는 15장, A♥K♥/A♥J♥는 12장. Flush 9+OESD 8−중복 2=15, flush 9+gutshot 4−중복 1=12. 이는 역전을 보장하는 outs가 아니다.
- ② K83에서 QJ 대 AQ에 Q가 오면 각 best 5는 Q-Q-K-J-8 대 Q-Q-A-K-8: **AQ 승리**. Q는 QJ의 live card가 아니므로 C03을 지지한다.
- Suited 65는 6♠/5♥가 보드인 652에서 ♦·♣ 두 개, 663의 66은 6♠6♥ 한 개, 33은 보드 3♥를 제외한 3개. AA6의 AA는 A♦A♣ 한 개, 66은 3개, A6는 2×3=6개다.

## 9. 미계산 범위·예전 미결·완료 기준

- **계산됨**: §3의 root 행동/range/EQ/EV/EQR, 원문 개별 hand 표, ⑦ 별도 solve에서 명시한 node.
- **계산 안 됨**: 나머지 예제의 BTN/BB check 후 bet, raise 대응, jam/call/fold 경계, turn/river 전략과 EV. 이를 필요로 하는 설명은 원문의 해석·가정·한계 고지를 함께 번역한다.
- 체크 비중·no-made 비중·draw 비중·개별 class 평균·개별 combo 빈도는 분모가 다르다. **개수가 같거나 숫자가 가까운 것만으로 같은 측정값으로 판정하지 않는다.**
- EQR는 pot 점유율이 아니다. MDF는 실측 fold율·의무 call율·확정 상한이 아니다. 단일 size 제한은 대안 size의 열등함을 증명하지 않는다.
- PT 원문 계약 말미의 오래된 미결 후보를 통째로 정정 목록으로 승격하지 않는다. ⑨ “32 combos of AK/AJ”, ⑧ 36.6/63과 57.8의 집계 차이, ⑪ 362.1 등은 **플레이어·range·집계 정의부터** 대조한다. ⑩ “nearly double”은 C10으로 이미 판정됐으니 미결로 되돌리지 않는다.
- ID 집필 후에는 평가된 EN/ID의 표 행별 숫자·카드·열 수와 본문의 수치 귀속을 함께 비교한다. ID 기계 gate가 소수 쉼표를 읽는지와 실제 대상 13편을 검사하는지 확인한다. 일반 hard 게이트의 0건은 미판정 카드 문단까지 검증했다는 뜻이 아니다.
- 최종 검수에서 N01–N24, C01–C12와 ⑦ 출처 note의 반영을 따로 체크한다. 자연스러운 ID·용어 통일·실제 UI·SEO·미디어·라이브 확인은 각 담당 검증과 합쳐 마감한다.
