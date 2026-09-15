# PT-BR GTO 시리즈 — EN 원문 계약

> 작성: 2026-09-15. 집필자가 현재 EN의 구조·수치·고지를 빠뜨리지 않도록 만든 작업 입력이다.
> 대상: `lib/gto-series.ts`에 등록된 ①–⑬. **EN 본문 재저작·전수 재검수가 아니다.**
> 1차 출처: 현재 `lib/posts-en/<slug>.ts`의 평가된 Post 객체. 수치 정본: `docs/gto-solver-series-spec.md` §4-B/4-B-2/4-B-3.
> 이전 번체 브리프는 작업 방식의 선례다. 그 문서의 날짜·번체 용어·옛 이슈 목록을 현행 PT 정본으로 옮기지 않는다.

## 1. 집필 범위와 우선순위

- **본문은 의미를 보존하는 PT-BR 번역**이다. 조건·수치·전략 논거·한계 고지·독자가 재현할 경로를 보존한다. SEO 문구와 용어는 PT 집필 브리프에서 정한다.
- 현지화 가능 자리: seoTitle, desc, H2 문구, FAQ 질문의 표현·검색 의도, 내부링크 대상, 본문 용어 표기. 포커 지시 대상은 불변이다. Set와 trips를 한 개념으로 합치지 않는다.
- 같은 H2/표/주석이라고 다른 편의 내용을 복사하지 않는다. **행 라벨을 통일하고 값은 원문에서 가져온다.** 특히 ⑧·⑪·⑫·⑬ 조건표는 비교표다.
- 소수는 PT 본문에서 **쉼표**: 98,2%, 5,5bb, 2,09bb. 날짜, slug, 파일명, 실제 UI 문자열의 식별자는 무차별 치환하지 않는다. 퍼센트와 퍼센트포인트의 차이를 보존한다.
- 수치를 말로 풀어도 원래 값을 복원할 수 있어야 한다. “약 10포인트 낮다”라고 쓴다고 원문의 **58,3%**를 지우지 않는다. “팟의 3분의 1”처럼 무손실 표현은 허용된다.
- `masterUpdated`는 아래 값. PT `date`/`updated`는 실제 PT 발행/수정일이며 EN 검증일로 위장하지 않는다. 본문 조건표의 Checked 날짜는 **계산 출처 날짜**여서 PT 발행일로 바꾸지 않는다.
- `docs/settled-decisions.md`의 GTO 완결 결정에 따라 원문을 새로 만들지 않는다. 단, 같은 문서의 2026-09-10 EN 마스터 판정은 옛 EN 검수 금지의 전제를 별도로 변경했다. 이 계약은 그 검수 작업을 열거나 종결 판정을 새로 내리지 않는다.

## 2. 현재 EN 스냅샷 — 구조를 복사하기 전에 확인

평가 방식: `createJiti(path.resolve('package.json'), { fsCache: false, moduleCache: false })`로 각 `.ts`의 default Post를 읽었다. **원시 파일 주석을 본문으로 세지 않았다.** 해시는 원시 EN 파일 SHA-256 앞 12자리다.

열: H2 / 본문 Markdown 내부링크 / FAQ 문항 / 디렉티브 / 하이라이트 / 표 행. 내부링크 수에는 `readnext`의 URL 행이 포함되지 않는다. 표 행은 헤더·구분행도 포함한다.

| # | slug | masterUpdated | H2 | 링크 | FAQ | dir | `==` | 표 행 | EN SHA-256 |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| ① | a-high-board-cbet | 2026-09-02 | 9 | 6 | 5 | 3 | 2 | 29 | 19a2022cb56f |
| ② | k-high-board-cbet | 2026-09-02 | 11 | 6 | 5 | 4 | 3 | 39 | 9ad37ea0d5eb |
| ③ | broadway-board-strategy | 2026-09-02 | 11 | 10 | 4 | 3 | 5 | 47 | b070b05f1ed2 |
| ④ | donk-bet-strategy | 2026-09-02 | 10 | 8 | 7 | 3 | 3 | 57 | 6a76c8073d2b |
| ⑤ | monotone-board-strategy | 2026-09-02 | 11 | 5 | 5 | 3 | 3 | 42 | 54ba69b7f745 |
| ⑥ | paired-board-strategy | 2026-09-02 | 12 | 13 | 6 | 4 | 5 | 57 | 55520b5ae288 |
| ⑦ | low-board-check-raise | 2026-09-02 | 11 | 9 | 6 | 5 | 15 | 63 | 709bdeb72dc6 |
| ⑧ | 3bet-pot-cbet | 2026-09-02 | 11 | 11 | 6 | 5 | 12 | 33 | 5b98f7a0a146 |
| ⑨ | 3bet-pot-bet-sizing | 2026-09-02 | 10 | 13 | 7 | 6 | 30 | 51 | a07654ef52b4 |
| ⑩ | 3bet-pot-low-board | 2026-09-02 | 8 | 10 | 4 | 2 | 4 | 45 | ed67324cb5ac |
| ⑪ | blind-battle-cbet | 2026-09-02 | 8 | 15 | 4 | 4 | 5 | 61 | a73ca6342264 |
| ⑫ | blind-battle-connected-board | 2026-09-02 | 8 | 9 | 4 | 4 | 7 | 66 | 9171917a3bad |
| ⑬ | ace-paired-board-strategy | 2026-08-21 | 8 | 9 | 4 | 4 | 7 | 47 | 34f50dc80413 |

**전편 공통: 본문 이미지 1장, readnext 카드 2장.** 히어로는 Post.image에 있고 본문에 중복 삽입하지 않는다. `image`·본문 chart·시리즈 썸네일은 대응 `-pt.webp`로 연결한다.

### 표의 크기와 디렉티브 순서

표 크기는 **행×열**, 본문 등장 순서다. 예: 9×2에는 2열짜리 헤더·구분행·데이터 7행이 있다. `stripe`/`compare`/`readnext` 안의 줄은 일반 Markdown 표가 아니다.

| # | 표 크기 순서 | 디렉티브 순서 |
|---|---|---|
| ① | 9×2, 5×3, 10×3, 5×3 | stripe → note → readnext |
| ② | 9×2, 5×3, 5×3, 11×3, 5×3, 4×3 | stripe → note → note → readnext |
| ③ | 9×2, 5×3, 6×4, 5×3, 8×3, 4×2, 5×3, 5×4 | stripe → note → readnext |
| ④ | 9×2, 5×3, 6×2, 6×3, 5×3, 13×3, 8×3, 5×3 | stripe → note → readnext |
| ⑤ | 9×2, 5×3, 10×6, 6×4, 7×3, 5×3 | stripe → compare → readnext |
| ⑥ | 9×2, 6×2, 5×3, 7×3, 9×3, 5×3, 9×5, 7×4 | stripe → note → note → readnext |
| ⑦ | 9×2, 4×3, 9×4, 12×3, 5×3, 4×3, 5×3, 9×3, 6×3 | stripe → pull → note → note → readnext |
| ⑧ | 11×3, 5×3, 8×5, 4×4, 5×3 | stripe → note → note → pull → readnext |
| ⑨ | 9×2, 5×3, 4×4, 8×3, 6×6, 5×3, 9×3, 5×3 | stripe → note → pull → note → note → readnext |
| ⑩ | 9×2, 5×3, 8×4, 4×2, 9×3, 5×3, 5×3 | stripe → readnext |
| ⑪ | 11×4, 4×3, 10×3, 5×4, 11×3, 6×3, 5×3, 9×4 | stripe → pull → note → readnext |
| ⑫ | 12×4, 4×3, 10×3, 6×3, 13×3, 8×3, 5×3, 8×4 | stripe → pull → note → readnext |
| ⑬ | 11×4, 5×3, 11×3, 7×3, 8×3, 5×3 | stripe → pull → note → readnext |

구조 예외를 없애려고 새 절을 넣지 않는다:

- ⑤의 첫 H2는 monotone의 정의다. 별도의 공통 “계산 조건” H2가 없다.
- ⑩–⑬은 FAQ 4문항이 있지만 **FAQ H2가 없다**.
- ⑥은 H2 안에 continuation-bet 내부링크가 있다. 본문으로 옮기면 위치가 달라진다.
- ⑫–⑬의 본문 링크는 시리즈 내부만이다. 다른 편과 맞추려고 일반 필라 링크를 늘리지 않는다.

## 3. 수치·조건 고정표

아래 소수점 마침표는 **원천 숫자 대조용**이다. PT 독자에게 보이는 문자열은 쉼표로 표기한다. 체크를 `100 − 벳합`으로 재계산하지 않는다. 표시값 각각의 반올림 때문에 합이 99.9 또는 100.1일 수 있다.

| # | 보드 그대로 | Check % | 작은 bet % | 큰 bet % | bet 합 % | OOP EQ % | OOP EQR % | IP EQR % |
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

| # | pot / 남은 유효 stack (bb) | 제공된 bet 크기 | OOP / IP combos | OOP / IP EV (bb) |
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

그룹별 역할·범위:

- ①–⑦: **BTN opens 2.5bb → BB calls**. OOP는 BB 콜러, IP는 BTN 오프너. pot = 2.5 + 2.5 + dead SB 0.5, stack = 100 − 2.5.
- ⑧–⑩: **BB three-bets to 11bb → BTN calls**. OOP는 BB 3-bettor, IP는 BTN 콜러. pot = 11 + 11 + dead SB 0.5, stack = 100 − 11, SPR ≈ 4.0. 큰 사이즈는 **66%, 75% 아님**.
- ⑪–⑬: **SB opens 3bb → BB calls**. OOP는 SB 오프너, IP는 BB 콜러. pot = 3 + 3, **추가 dead blind 없음**, stack = 100 − 3, SPR ≈ 16.2. 세 편은 같은 프리플랍 레인지이고 combos 차이는 보드 블로커다.
- BB 3-bet range 14종: AA, AKs, AQs, AJs, A5s, A4s, AKo, KK, KQs, AQo, QQ, JJ, TT, 99. 보드별로 남는 combos만 바뀐다.
- 전체 기준: heads-up, 표준 100bb 온라인 레인지의 근사, **rake 미반영**. 실제 레인지·스택·사이즈·상대가 달라지면 빈도도 달라진다.

## 4. 편별로 보존할 논거와 한계

이 표는 원문 대체 요약이 아니다. 표·개별 핸드 수치는 EN 전체에서 번역하고, 아래 항목이 탈락하지 않았는지 확인한다.

| # | 핵심 증거 / 번역에서 잘 빠지는 구분 |
|---|---|
| ① | 98.2%는 **전체 BB 레인지**의 체크율이지 A9·top pair 단독 빈도가 아니다. A7/A2는 two pair. BB는 AA/AK/AQ가 없고 AJ까지; set는 77/22 총 6콤보, BTN은 AA 포함 9. BTN c-bet 70–100% 일반 가이드와 **이 예제의 정확한 BTN 결과는 없음**을 구분. 더 약한 핸드도 lead에 call할 수 있으므로 “더 좋은 핸드만 call”로 압축 금지. |
| ② | BB overpair 0 대 BTN 1.3%; set 6 대 9콤보. BB two pair 0.8%는 BTN 0.4%의 두 배지만 4콤보뿐이고 **overpair보다 높은 족보**다. ace-high 27.0/30.0은 no-made-hand 35.4/28.3과 다른 행. EQR 반올림 note, BTN 전략은 해석이며 정확한 c-bet 노드 없음. |
| ③ | Q♠J♦T♠는 **투톤**. straight는 AK/K9/98, BTN 48 대 BB 32콤보(7.1/10.5%). BB에 AK가 없다. OESD 28.7/27.7과 made straight 분포를 섞지 않는다. BTN sizing/check-raise 빈도는 이 예제에서 계산되지 않았다. |
| ④ | BB straight 24콤보 대 BTN 20; 차이는 **T6s 4콤보**. 최상위 JT 16콤보는 양쪽 동일하므로 전체 straight 우위를 JT 독점으로 바꾸지 않는다. 전체 EQ/EQR은 여전히 BTN 우위. no-pair BB 53.7 대 BTN 51.7%이므로 BTN의 체크를 “미스가 더 많아서” 하나로 설명하지 않는다. QQ(no heart) 위험 turn 23/47 ≈49%, Q♥ 있으면 22/47 ≈47%. BTN 후속 c-bet/check-raise 빈도 없음; 24 straight 모두가 checking range에 남는 것도 아님. |
| ⑤ | A♠J♠ 한 콤보 체크 **83.4%**, nut flush 8콤보 평균 **69.9%**, non-nut 25콤보 평균 **81.4%**를 구분. A♠K♠는 BB 프리플랍에 없음. Q♠ 보드라 “J-high flush”라 부르면 틀림; J♠/T♠는 상대 flush의 키커 슬롯을 차단. flush draw 합 25.6/29.2는 flush+combo 두 행을 더한 값. BB 큰 lead 3.2%는 **BTN의 bet 빈도가 아님**. |
| ⑥ | 6♣6♦3♥에서 한 장 six는 trips; 66은 quads; 33은 full house. BB trips 26 대 BTN 20, 차이는 J6s/T6s/96s. 63은 두 range 모두 없음. board pair를 넘는 핸드 18.4/20.3%; TT는 two pair이며 EQ 76.0%. 22는 board의 두 rank보다 모두 낮다. MDF 75.3%는 pure-bluff 가정의 기준이고 **실제 최적 방어가 그 위/아래인지는 여기서 모름**. |
| ⑦ | 아래 §5 전체 필수. 4-3만 straight를 만들지만 두 range에 없음. 87s만 **이 range에 들어 있는** OESD이지 보드가 허용하는 유일한 OESD가 아님: 74도 OESD, 84는 double gutshot. 상위 raise 목록은 약 30/69.7콤보이며 전체 raising range 목록이 아님. |
| ⑧ | BB 63콤보 전부 pair 이상, check 0.0%/0.0콤보. 작은 bet 57.8%는 같은 SPR 4의 ⑨/⑩과 대비. **낮은 SPR 자체가 작은 sizing의 이유가 아님**. 14.9→34.5→39.6은 89bb에 도달하는 산술; turn·river 계산값 아님. BTN 대응은 range 해석이며 no post-check node. MDF의 pure-bluff 전제가 맞지 않는다는 note 보존. |
| ⑨ | **98.4%** large와 **0.8%** check 고정. 서로 배타적인 live draws 30.1%와 backdoor를 구분. BTN draw 40콤보 중 즉시 2/3 가격을 넘는 2콤보; 1/3에서는 4콤보. 이는 **한 장 odds**, river까지 공짜로 보는 equity 아님. BTN의 bare flush draw 0, 네 two-heart hand 모두 combo draw. BB two-heart 4콤보 전부 A♥ 포함. MDF 60.2%는 call 할당량이 아님. BB set 비율 8.2%가 BTN 6.8%보다 높아도 개수는 **6 대 9**. EQR 117.8%가 ⑧보다 높지만 EV는 **15.46 < 16.99bb**. |
| ⑩ | board와 직접 pair가 된 것은 A5s **3콤보**; 기존 pocket overpair **36콤보**가 별도로 있어 “레인지 전체가 못 맞혔다”는 뜻 아님. ace-high 40콤보, A4s gutshot 4콤보. draw 표 4.8 + 16.9 + 78.3%. BTN set 9콤보 독점, AA/KK는 그것 외의 가치·블러프 구성에 별도 판단 필요. BTN 58.3% missed ≠ 58.3% folds; 반응 노드 없음. BTN EQR 15.2포인트 차이와 실제 EV/pot 점유율 차이 **6.1포인트**를 구분. |
| ⑪ | SB 역할과 K-T-6의 range 적합성이 **함께** 67.4%를 만든다. 동일 SB 자리의 ⑫ 9.6/⑬ 80.1이 반례. 단일 33% 옵션이므로 “큰 bet보다 우월함을 계산했다” 금지. QJ 16콤보는 8-outs OESD, live draw/backdoor/no-draw 서로 구분. SB set 9 대 BB 3. EQR 103.1%와 높은 EQR=더 큰 이득이라는 주장을 분리. |
| ⑫ | ⑪과 pot·stack·range·size가 동일하며 **보드만 변경**. 양쪽 set 9콤보, 비율 1.6/1.7 차이는 분모 때문. BB의 set9+two-pair13+straight20=42콤보는 SB overpair를 이미 이김. live draws SB46.4/BB55.0%. **클래스 평균** 88 bet39.5%와 **개별 콤보** Q♠4♠/Q♥4♥54.7%를 구분. 88 EQ 73.4%–75.2%, EQR133%–138% 범위 보존. 체크 이후 BB bet/SB check-raise 결과는 없음; ⑦과 좌석도 다름. |
| ⑬ | 79.6% small +0.5% large=80.1%, check19.8. ⑪/⑫와 달리 **두 size가 실제 제공**됨. SB trips88/BB66, AK+AQ 16콤보; SB 독점 상위 trips는 AJo6 포함 22. AA는 quads 1콤보 SB만; full house는 양쪽 66 세 콤보+A6 여섯=9. KK의 얇은 value ≠ 약한 핸드는 전부 fold. one-ace94콤보 체크0.1%–26.0%, 평균12.3%, 0% check 콤보 없음. bluff-catch 제안은 상대가 bluff를 섞는다는 **해석·가정**이며 후속 노드 결과가 아님. |

## 5. ⑦ low-board-check-raise — 두 솔브의 출처 계약

### A. 앱의 사전 계산 교육 예제

- 화면: Study Spots의 View results. **플랍 첫 의사결정만 노출**하고 액션 칩을 눌러 후속 노드로 이동할 수 없다.
- Root: BB check **96.8% / 471.7콤보**, bet1.8bb **3.2% / 15.3콤보**, total487.
- EQ/EV/EQR·range/draw 구성은 §3 표. 이 출처에는 BTN bet 후 BB의 check-raise 결과가 없다.

### B. 2026-08-20 별도 재솔브

같은 설정을 직접 다시 풀었다: flop bet **33**, raise **60**, pot **55**, stack **975**(당시 내부 0.1bb 단위); **190 iterations · exploitability 0.16 = pot의 0.29% · 16-bit integer · 12 threads**. 독자 본문에는 EN에 실린 설정·출처 고지를 그대로 번역한다.

| 노드 | 액션 | 표시 빈도 | 표시 combos |
|---|---|---:|---:|
| 재솔브 BB root | Check | 98.0% | 477.5 |
| 재솔브 BB root | Bet1.8bb | 2.0% | 9.5 |
| BB check 후 BTN | Bet1.8bb | 63.0% | 316.5 |
| BB check 후 BTN | Check back | 37.0% | 186.5 |
| BTN bet1.8bb 후 BB | Raise **to**7.3bb | 14.9% | 69.7 |
| BTN bet1.8bb 후 BB | Call | 65.6% | 314.6 |
| BTN bet1.8bb 후 BB | Fold | 19.5% | 93.2 |

반드시 보존할 설명:

1. BTN/BB 후속표 **앞에** 다른 솔브라는 note가 있어야 한다. Root의 3.2/15.3을 재솔브의 2.0/9.5와 한 표로 합치지 않는다.
2. **표시 빈도와 combo 역산이 다르다**: 69.7÷477.5=14.6%, 표시는14.9%. BTN도 316.5÷503=62.9%, 표시는63.0%. EN의 설명을 지우거나 표를 역산값으로 고치지 않는다.
3. 7.3bb는 **raise-to 총액**. 60% pot raise이며 pot-sized raise가 아니다. 콜 뒤 pot=5.5+1.8+1.8=9.1; pot-size raise-to=10.9; 실제 `(7.3−1.8)÷9.1≈60%`. bet의 **4.06배 총액**이지 bet보다 4배 더한 5배가 아니다.
4. root lead 차이는 거의 무차별인 낮은-EV 액션의 수렴 차이다. 두 값은 “거의 lead하지 않는다”는 해석을 공유하지만 동일 출처 숫자가 아니다. 다른 지표가 같다는 설명도 보존한다.
5. set66/55/22의 9콤보와 65s의 **6♦5♦·6♣5♣ 두 콤보**는 100% raise. 64s는 세 중 **두 콤보**가100%. 98s EQ35.8%/raise99%+, 87s EQ46.2%/raise80–83%, J4s/Q4s67–90%, 54s74–75%.
6. continuing80.5%와 MDF75.3%는 서로 다른 값. ⑥·⑩의 미측정 후속 노드에 이14.9%를 옮기지 않는다.
7. 재현 CTA도 둘로 나눈다: 사전 결과 열기 → 해당 root/range 확인; check-raise는 **직접 solve 버튼으로 실행 후 Check → Bet**. 사전 결과에서 칩을 누르면 되는 것처럼 쓰지 않는다.

## 6. 기존 결정·허용되는 표현·오탐 방지

- **숫자 가까움은 오류 근거가 아니다.** 한 글에 형제 스팟, 반대 좌석, 다른 지표가 함께 있다. 원문과 **주어·보드·노드·지표**를 대조한다. §4-A-3의 “근접값 탐지” 폐기 결정을 되살리지 않는다.
- **98.4%가 정본**: ⑨에서 normalizer 가중 공식이 화면 기준. range weight로 계산한98.5%로 되돌리지 않는다. Check0.8도 벳합에서 빼서0.9로 바꾸지 않는다.
- **trips 표기 자체는 오류 아님**: 앱 row 이름을 인용하면서 언페어 board에서는 실제 set라고 밝히는 구조가 정본. “set는 드물다”는 허용되며 “paired-board trips가 드물다”라는 폐기 명제와 구분한다.
- **missed 표현 자체는 오류 아님**: ⑥에서 홀카드가 보드를 추가로 맞히지 못했다는 말은 정상. ⑩에서 전체 3-bet range에 overpair까지 없다고 만드는 것이 오류다. ⑩의 “세 콤보만 paired the board”는 기존 pocket overpair를 지우지 않는다.
- **fold와 no-made-hand는 다르다**. no-made-hand에 ace-/king-high가 별도 분류되는지 행별로 읽는다. made-hand와 draw는 다른 분류축이며 합집합으로 무작정 더하지 않는다.
- **MDF는 자동 호출 빈도·실측 fold율이 아니다**. pure-bluff 가정, 이후 equity 실현, 후속 노드 미계산을 같이 보존한다. “MDF60.2%이므로58.3% folds” 같은 인과는 금지.
- **EQR은 pot 점유율이 아니다**. 높은 EQR을 더 높은 EV/더 좋은 스팟으로 자동 번역하지 않는다. ⑨의 EV 하락과 EQR 상승이 명시적 반례다.
- **caller→raiser와 board를 함께 본다**. ④의 BB를 전체 range 우위로, ⑪의 높은 bet을 OOP 오프너라는 역할만으로 일반화하지 않는다. ⑫가 같은 자리의 반례다.
- **small bet의 선택과 옵션 제한은 다르다**. ⑦⑪⑫에 큰 size가 없는 것은 솔버가 배제한 결과가 아니다. ⑬의33%는 제공된 둘 중 작은 것이며, 더 작은 후보를 넣으면 빈도가 이동할 수 있다.
- **후속 street의 예시 산술은 후속 street의 솔브가 아니다**. 차후 액션에 대한 해석·상대가 bluff한다는 가정·아직 계산하지 않았다는 문장이 있으면 전부 유지한다.
- **앱 스팟 설명문은 전략 정본이 아니다**. PT 이름·버튼은 현재 앱 축어로 가져오되 옛 note의 폐기 전략 명제를 복사하지 않는다.
- **시리즈 총편 수를 제품 문구에 새로 하드코딩하지 않는다**. `GTO_SERIES`에서 계산하는 UI 규율과, 특정 비교표가 선택한 “일곱 스팟”이라는 통계 범위는 구분한다. 기존 비교 범위를 무단 변경하지 않는다.
- **내부링크·이미지 경로는 언어 누수가 아니다**. `broadway-board-strategy` 같은 영문 slug를 PT 단어로 바꾸지 않는다. 표기 검사는 평가된 본문/메타와 경로를 구분한다.

### 이전 브리프의 미종결 소스 지적은 확정 정정으로 취급하지 않음

번체 브리프 §6-B.7은 ⑨의 “32 combos of A-K and A-J”, ⑧의 개별 rounded bet 합, ⑩의 “overpairs nearly double”, ⑪의362.1 및 ⑦의 UI panel 호칭 등을 **EN 역발견 후보**로 적었다. 현재 EN에 일부가 남아 있다. 이 계약은 그것들을 새로 판정하거나, PT 집필자가 수치/전략을 임의 정정하도록 허용하지 않는다. 발견 시 담당자가 **같은 원문 자리·기존 판정**을 대조하고 별도 기록한다. “이전 목록에 있음”과 “해결됨”은 다르다.

## 7. 링크·이미지 매핑

- 시리즈의 slug는 불변. `/en/blog/<slug>` → `/pt/blog/<slug>`, `/en/solver` → `/pt/solver`.
- 현재 EN이 링크하는 시리즈 밖 10개 slug는 **모두 PT 파일 존재 확인**: `holdem-continuation-bet`, `holdem-equity`, `holdem-position-play`, `holdem-drawing-odds`, `holdem-implied-odds`, `holdem-hand-rankings`, `holdem-pot-odds`, `holdem-3bet`, `holdem-betting-actions`, `holdem-strategy`.
- 존재 확인이 키워드 배정 확정을 뜻하지는 않는다. 링크 대상을 바꿀 필요가 있으면 PT 키워드 팩에 사유를 남기며, 자동 구조 검사의 target-set 예외도 의도적으로 다룬다.
- readnext **표시 라벨은 대상 PT의 실제 title**. 시리즈 밖 공용 hero 경로는 그대로, 시리즈 이미지 `-en.webp`만 대응 `-pt.webp`로 바꾼다.
- 이미지 key 순서: ①srp-dry-ace / ②srp-dry-king / ③srp-broadway / ④srp-middle-connected / ⑤srp-monotone / ⑥srp-paired / ⑦srp-low-rainbow / ⑧3bp-ace-king / ⑨3bp-dynamic / ⑩3bp-low / ⑪sb-king-mid / ⑫sb-connected / ⑬sb-paired-ace.
- 히어로 `/images/gto-<key>-oop-pt.webp`, 본문 `/images/gto-<key>-ranges-pt.webp`. IP 프리플랍 matrix를 postflop 액션 chart로 설명하지 않는다.

## 8. 집필 완료 시 필요한 확인

1. 평가된 PT Post와 EN Post를 비교해 §2의 구조, 표 열 수, 디렉티브 순서, 링크 대상, highlight 위치, 이미지 수가 맞는지 확인한다.
2. `node scripts/check-gto-numbers.mjs --locale=pt`와 `node scripts/check-gto-structure.mjs --locale=pt`를 실행한다. 게이트가 PT 소수 쉼표를 읽도록 준비되어 있어야 한다. 통과는 문장 속 숫자 귀속을 자동 보증하지 않는다.
3. 각 숫자의 **플레이어·board·node·단위**를 사람 검수로 대조한다. §4의 고지, 특히⑦ 두 솔브 고지는 구조 검사와 별개다.
4. 새 PT `masterUpdated`는 §2와 일치시키되 날짜 일치만으로 번역 완료라 판정하지 않는다. 원문 내용과 직접 대조한다.
5. 최종 전체 검수에서는 배치 간 용어·조건표 라벨·CTA·readnext 제목을 통일하고, 값·주어·한계 고지는 각 원문에 남겨 둔다.
