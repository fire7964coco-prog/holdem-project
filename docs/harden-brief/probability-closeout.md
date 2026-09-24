# Probability closeout — A 브리프

> 2026-09-22 · 읽기 전용 재고조사 후 실행안. **포스트 구현·빌드·배포 완료 보고가 아니다.**
> 대상 = EN + core7(de/es/id/ja/pt/zh/zh-hant). KO·ar·꼬리 로케일·계산기는 범위 밖.
> 이번 조사에서 쓴 파일은 이 브리프 하나다. 기존 main 미커밋 작업은 본체 소유로 보존한다.
> 줄 번호는 작성 시점 스냅샷이며, 실행 때 H2/문자열 앵커로 다시 찾는다.

## 1. 정본과 잠금

- 운영: CLAUDE.md, REVIEW-PROTOCOL.md, posting.mdc, hardening-protocol.
- 원래 대기열: en-first-queue §1 ㉒c·㉙·㊽ / §2 ja 회차3·zh 회차3.
- 세부: harden-ja-진행 §5-A, harden-zh-진행 §5-2-C 및 §3 확률 판정, locale-intentional-diffs.
- 기각: settled-decisions §1-A 및 §3-F/3-S, reply-to-review-2026-09-04-m089.
- 기각 원문은 main의 docs/en3-gpt-2026-09-04.md가 아니다. 실제 읽은 경로:
  `C:/Users/하봄/Downloads/홀덤검수/reports/regression/en3-gpt-2026-09-04.md`.
- 보호: pot-odds의 2× pot=40%·상한50%, 표의 올바른 1장/2장 열, EN 실전 예의 9 outs·턴19.6%→fold, 하단 FAQ의 Rule4/2 계수 선택. 15 outs/12 outs로 바꿔 콜을 만드는 제안은 재개하지 않는다.
- AA vs KK 약82%, 22 vs AK 약52/48, AK vs pocket-pair 전수 밴드, 의도된 FAQ 개수 차이·zh 고유 절을 보존한다.
- title/slug/desc/tags/SEO 재조준·새 카드/상황·새 FAQ 강제 증설 금지. 이미 맞는 수치/표를 전면 재검수하는 회차가 아니다.

## 2. 우선 구현 묶음 A1 — 실제 잔존 D/인원 오류

경로 접두사는 모두 `lib/posts-{locale}/`.

| 항목 | en | de | es | id | ja | pt | zh | zh-hant |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| probability 최종 요약③ 무조건 call |278|285|291|279|285|283|302|307|
| equity half-pot 35%/25% 문단 |86|87|87|완료87|94|완료87|91|92|
| equity FAQ three players → opponents |218|223|227|219|이미 정확241|219|235|이미 정확240|

1. **probability 8개**: “you call — every time” 동형을 제거. 현재 콜이 사는 카드 매수와 같은 시간범위의 확률을 비교하고, 완성률이 곧 승률은 아님을 짧게 구별. 직전②의 35%를 무조건 콜에 연결하지 않는다.
2. **equity 6개**: half-pot에 35%가 충분하다는 문장에 “플랍 올인/추가 비용 없이 두 장을 보는 경우” 조건. id/pt는 이미 단일 카드 9/47=19.1% <25%까지 보완되어 **정본 이식 대상**, 다시 작성하지 않는다.
3. **equity FAQ 6개**: 64%=상대3명(총4명), 56%=상대4명(총5명). 본문의 opponents와 맞추되 85/64/56 숫자는 유지. ja·zh-hant는 수정하지 않는다.
4. **probability Rule2/4 본문**: EN H2:133의 ×4 단계에 두 장/추가비용 조건을 보충. 아래 A2 직답 작성과 한 번에 처리한다. ja 기존 직답 및 de 기존 조건을 중복 삽입하지 않는다.

A1 확정 고유 파일은 probability 8 + equity 8 = **16개**다. 다만 equity의 개별 두 앵커는 완료 로케일이 서로 달라 8개 파일 모두 하나 이상의 수정 대상이다.

## 3. A2 — odds4 직답과 FAQ 역할 분리

### 3-A. EN 정확 앵커

4편의 실질 설명 H2는 **29개**, 그중 기존 정의 리드 2개는 재사용한다. 신규/교체 직답은 **27개**이며, 예전 “약35개” 추산을 구현 건수로 쓰지 않는다. FAQ·최종 3줄 요약·Related Posts는 이 29개에 넣지 않았다. 직답은 기존 핵심정보를 재배치/요약하며 바로 아래 문단과 축어 반복하지 않는다.

| EN 파일 | 직답 신설/교체 H2 줄 | 기존 정의 보존 |
|---|---|---|
| holdem-probability.ts |37 hand chart, 70 starting hand, 88 flop, 110 draw, 133 Rule2/4, 153 pot odds, 173 royal, 190 coolers|없음|
| holdem-pot-odds.ts |47 formula, 65 ratio, 85 bet-size price, 109 draws, 129 equity/implied 비교, 146 Rule4/2, 161 mistakes|37 What Are Pot Odds|
| holdem-outs.ts |45 counting, 63 chart, 89 conversion, 113 Rule4/2, 141 overlap, 155 dirty outs|35 What Are Outs|
| holdem-drawing-odds.ts |36 lifecycle, 56 set mining, 90 flush, 118 straight, 131 rare flops, 154 dealt hand|없음|

이미지가 H2 바로 뒤인 EN 앵커 10개(probability3/pot-odds1/outs3/drawing3)는 직답 뒤에 이미지를 놓는다. 이미지 파일을 고치는 작업과 구별한다. 단순한 표 소개/“이 표를 보라”는 직답으로 세지 않는다.

### 3-B. core7 실제 공백 — 일괄 덮어쓰기 금지

| 로케일 | probability | pot-odds | outs | drawing-odds |
|---|---|---|---|---|
| es/id/pt |EN 대응8절(H2 38/71/89/111/134/154/174/191)|대응7절(48/66/86/110/130/147/162), 정의38 보존|대응6절(46/64/90/114/142/156), 정의36 보존|대응6절(37/57/91/119/132/155)|
| de |8절 기존 직답 보존|48 계산 절의 소개를 직답으로 교체, 다른 기존 직답 보존|66 표 절만 공백; 다른 기존 직답 보존|59 set 정의가 이미지 뒤63에 있음: 앞으로 재배치+반복 회피. 93 flush·121 straight·134 rare 공백 보완. 37/157 기존 리드 보존|
| ja |기존8 보존|기존8 보존|기존7 보존|기존6 보존|
| zh |169 pot-odds 절만 이미지 직행|143 다섯 단계 절만 소개문; 기존 고유 절/직답 보존|기존7 보존|기존7(분리한 스트리트별 확률 설명 포함) 보존|
| zh-hant |기존8 보존|기존8 보존|기존7 보존|기존6 보존|

㊽의 “de에도 셋마이닝 직답이 있다”는 내용 자체로는 맞지만, 현행은 **H2→이미지→정의**다. 완전 완료로 세지 않는다. ja/zh/zh-hant의 기존 블록을 EN 초안으로 갈아엎지 않는다. 이미 있는 직답의 전략 명제까지 전면 재심하지 않고, A1 조건·이번 수정의 자기회귀만 본다.

### 3-C. Rule2/4 FAQ

- EN probability Q244/A246, pot-odds Q221/A223, outs Q200/A202는 같은 공식 설명이 겹친다. 세 답 모두 **추가베팅 없이 두 장** 조건은 이미 들어 있다(Q5-b 완료). 조건 누락 건으로 다시 세지 않는다.
- 최소안: probability 답을 “확률표와 근사의 차이/정확값·매수”에 맞춰 구별하고, pot-odds는 가격 비교·outs는 깨끗한 outs 계산이라는 기존 글 역할을 보존한다. 숫자나 계수는 바꾸지 않는다. FAQ 질문은 유지.
- 같은 질문이 실제 존재하는 EN/es/id/ja/pt/zh/zh-hant probability 답만 전파 후보. de는 동일 질문 자체가 없고 정확도 질문만 있으므로 새 FAQ를 만들지 않는다.
- 수정 전 각 언어 현행 답과 본문 직답을 함께 읽고, 이미 역할이 다른 답은 보존한다. pot-odds의 보호된 하단 FAQ에 광범위한 단서/공식을 덧대지 않는다.

## 4. A3 — 이미지 (본체 소유)

`holdem-pot-odds.ts` “required equity / bet size” 절은 **8개 전부** premium starting-hands 이미지를 참조한다: en87/de90/es88/id88/ja100/pt88/zh98/zh-hant98.
현재 경로 `/images/holdem-starting-hands-premium.webp`는 프리미엄 홀카드 의미여서 해당 절의 가격·베팅 비율 설명과 어긋나는 후보다.

- **물리 이미지 제작·교체는 root 별도 범위.** 텍스트 레인이 이미지 파일을 덮어쓰지 않는다.
- 기존 premium 이미지를 전역 덮어쓰면 starting-hands의 맞는 사용처까지 바뀌므로 새 목적별 asset 또는 해당 사용처만 교체해야 한다.
- 본체가 결정한 이미지와 일치하게 해당 8곳 경로·alt·caption만 전파.
- probability:155의 `holdem-probability-pot-odds.webp`(100팟+25콜=20%)는 별개다. 혼동해 교체하지 않는다.
- `weak-ace-trap`의 shc/fish 사용은 기각·존치 문맥. 같은 이미지 잔여로 묶어 재작업하지 않는다.

## 5. 기존 ja/zh 후보 전수 판정 — 완료/기각/별도 잔여

이 표의 “잔여”는 구현 권한이나 모든 로케일의 개별 앵커 확인 완료를 뜻하지 않는다. A1/A2 외 항목은 **A4 후보**로 남겨 본체가 범위를 확정한다. 무관 신규 개선을 추가하지 않았다.

| 출처 | 현행 판정·증거 | 이번 처리 |
|---|---|---|
| ja1 equity 인원 |6잔여/ja·zh-hant 완료. §2 표|A1|
| ja2 probability 무조건콜 |8잔여. §2 표|A1|
| ja3 probability ×4 조건 |본문 EN:138–141 누락. FAQ246 이미 완료, ja 직답 선행 보완|A1+A2, 중복 금지|
| ja4 outs /47↔/46 |8개 표 모두 Flop→turn(1card) 동형. EN95/107, ja108/120, zh108/120|완료·재수정 제외|
| ja5 equity halfpot35% |6잔여/id·pt 완료|A1|
| ja6 overbet40% “only” |EN105·215 산술 맞음, 기각 원문 보호|기각·재개 금지|
| ja7 overcard6 할인 |EN probability122·pot-odds119에 가까운 할인 각주 없음. outs dirty 설명은 있음|A4: 표 숫자·보호된 열 제목 유지, 인접 짧은 전제만|
| ja8 card-counting 절대단정 |EN104는 “세기 자체가 이유 아님”으로 완화됨. FAQ147 never happens·167 no reason 잔존|부분 완료, A4 잔여2자리 확인|
| ja9 ja rake 현지화 |ja card-counting120/187의 レーキ 잔존. 일본 대상·국제포커 문맥 및 의도편차 판정 필요|별도 헤드 판정. “일본은 언제나 불법/항상 시간제” 단정 신설 금지|
| ja10 equity heads-up |EN103 pure bluff33%·105 세미EV에 heads-up 전제 명시 부족|A4, zh4와 합침|
| ja11 equity EQR |EN125 IP more/OOP less 및130 position decides 무조건 문면 잔존. Q14 position-play 정정과 다른 파일|A4: 포지션 경향으로 한정. 솔버 captures의 5/13 반례를 Q14와 동일 기준으로 사용|
| ja12 implied huge·4배 |EN pot-odds176 huge·178 correct fold 그대로. 기각 보고서가 예제/턴결정을 보호|재개 금지. 현행 단어 존재를 고칠 권한으로 오인하지 말 것|
| ja13/14/16 문장부호·콜론·FAQ 제목 |수학 잔여와 별도 코퍼스/표기 이력. 현재 ja drawing FAQ는 よくある質問|이번 확률 수학/직답 범위 제외|
| ja15 ×4 임계8/9 |EN probability145/outs125·zh outs228 동형 잔존. literal 과대평가 시작은7 outs이나 Solomon 적용조건 >8과 다른 개념|A4: 의미 분리. Solomon 조건을7로 바꾸지 않음|
| zh1 RTA·마킹·공모 전부 fraud |EN card-counting107 note 동형 잔존|A4: 행위별 룰/약관 층위만 구별. RTA가 어디서도 범죄 아님 같은 법률 단정 금지|
| zh2 live-hand 앱·차트 |EN/zh card-counting에 TDA Rule5 전제 없음. 로컬 2022shortform:11에 원문 존재|A4: TDA 적용 토너 한정, 최신 정본 확인 후 삽입. 캐시/전세계 규칙으로 일반화 금지|
| zh3 implied9→15 |EN implied-odds86·zh91에 overcards not clean 보완.9outs·19.6% 정당화 완료|완료·기각,15로 재개 금지|
| zh4 equity 세미EV two-cards |EN105–114의35%/+$52 계산은 미래 비용 없는 두 장 전제 불명시|A4 ja10과 합침: 같은 숫자에 heads-up/all-in(후속비용없음) 조건|
| zh5 setmine7.5 하한 |EN probability106/FAQ234/summary276. drawing/implied의15–20x 실무단서는 이미 존재|A4: theoretical lower bound vs 실제 payoff 구별.7.5:1이라는 odds 자체는 유지|
| zh6 equity/fold frequency |EN FAQ204 질문 “How much fold equity…” 답206은 상대 fold 빈도. zh는 弃牌率의 이중 뜻|A4: 질문/답 명제의 용어 역할 구별, 새로운 모델 신설 금지|
| zh7 lead↔FAQ |EN equity39↔186 정의 문구, implied39↔182 같은 정의 의미 반복 현존. 원래2쌍+2쌍 보고서 앵커도 있음|A4 별도 교열. 옛65–78% 수치는 재측정 아님; 현행 비율인 양 보고 금지|

추가로 옛 zh 자체 미결인 drawing-odds /47 vs pot-odds /46는 **서로 맞는 국면**이다. 표를 같은 값으로 강제 통일하지 않는다. 해당 표 라벨이 시간범위를 밝히는지는 A2 신규 직답과 맞춰 좁게 확인한다.
FAQ 개수(de·pt 등), ja/pt의 없는 추가질문, zh probability의 없는 일부 핸드 질문은 의도편차를 존중한다. “개수 맞추기”를 마감 조건으로 삼지 않는다.

## 6. 검산·검증 계획과 마감 조건

- 이미 직접 산술 확인: 9/47=19.1489%, 9/46=19.5652%, 1−38×37/(47×46)=34.9676%, halfpot=25%.
- ×4 검산: 6 outs 정확24.1443 vs24,7 정확27.8446 vs28,8 정확31.4524 vs32,9 정확34.9676 vs36,10 정확38.3904 vs40. “7부터 수학적으로 높음”과 “>8에서 보정 규칙 사용”을 분리.
- 세미EV를 A4에 채택할 경우: pot100/bet50/40%fold/호출시 equity35%·추가비용없음 ⇒ 0.4×100+0.6×(0.35×150−0.65×50)=52. 본문의 숫자는 보존하고 국면을 명시.
- 시행 순서: **A1 EN 확정 → 같은 앵커 core7 최소전파 → A2 EN 직답 확정 → 실제 공백만 전파 → root 이미지 연결 → A4 승인 범위**. A1과 A2의 probability Rule 조건은 한 번만 쓴다.
- 글별 diff/숫자·카드·링크·FAQ질문·메타 비교. 삭제/변경 수치는 이유와 손검산을 연결한다. 완성률과 승률·1장과2장·상대인원과총인원 렌즈 분리.
- 포스트 게이트: 변경 locale audit, structure/intentional-diffs, answer-echo, mirror-pair/숫자토큰, CJK/용어·외국문자·링크. 기존 경고와 신규 경고를 분리.
- §14의 직답↔본문↔FAQ 반복을 직접 읽고, 4렌즈 및 2차 교열은 실제 수행 주체/범위로 기록한다. 자동 게이트 통과를 네이티브 검수라 부르지 않는다.
- 구현 후 모바일/desktop 렌더를 screen-review 절차로 검수하고 root와 빌드 자원 조율. 이 브리프 단계에서는 **빌드/화면/렌즈 수행 완료를 주장하지 않는다**.
- A4가 남으면 “확률 전부 종결”이라고 닫지 않는다. 완료목록과 승인대기/별도후속을 분리해 원래 대기열에 본체가 기록한다.

## 7. EN 구현 초안 — 2026-09-22, 독립 검수 전

이 절이 현재 실행 상태다. 위 재고조사 당시의 승인대기 표시는 경위로 남긴다. 본체가 A1+A2+A4를 승인했으며, **EN 7편만 구현했다. core7 번역·이미지 연결·빌드·화면 검수는 아직 미실행**이다.

- 작업 위치: `Holdem-calc-ko / harden-calc-ko`, main `603deb7a`를 clean 상태에서 FF한 뒤 시작.
- 파일: EN probability/pot-odds/outs/drawing-odds/equity/implied-odds/card-counting + 이 브리프만 소유.
- A1: probability 무조건 콜을 현재 콜이 사는 카드 범위·깨끗한 outs 조건으로 변경. equity half-pot에 이번 콜로 올인/추가 지출 없이 두 장 조건과 9/47 비교. FAQ 64%는 상대 3명으로 교정.
- A2: odds4에 27개 직답(8+7+6+6), 기존 정의 2개 유지. 이미지 선행 10곳은 직답 다음으로 배치하되 이미지 문자열 자체는 그대로. probability Rule FAQ는 근사 대 정확값의 역할로 분리했으며, 보호된 pot-odds 하단 FAQ는 수정하지 않았다.
- A4: 두 표 옆 overcard 할인 전제, ×4 literal 과대평가 시작 7 outs와 Solomon >8 조건 분리, set-mining 이론 하한과 15–20x 실무 조건 구별. equity에 heads-up·두 장 무추가비용 세미블러프 및 순수블러프 전제를 명시하고 EQR 포지션 절대단정을 경향/범위/보드 조건으로 제한. fold frequency 용어와 equity/implied FAQ의 본문 반복을 줄였다.
- card-counting: 정신적 계산·게임 무결성·플랫폼 도구정책을 구별. 전세계 합법/절대 퇴장 불가 단정 대신 행사/룸 규칙을 명시했다. 룸의 입장권한을 보장하지 않으며 새 형사·법률 판단은 넣지 않았다.
- ja의 rake 현지화는 EN 문구 확정만으로 완료 처리하지 않는다. core7 실제 전파에서는 현행 대상 지역/의도편차를 다시 판정해야 한다.
- 자체 교열 중 생긴 이미지 앞 빈 줄 10곳, “이미 올인인데 콜” 시간 표현, 법률범주를 불필요하게 언급한 메타 문장은 독립 검수 요청 전에 교정했다. 원본 문제와 이번 초안의 자기회귀를 구별한다.

### 7-A. 최신 1차 자료

- TDA 공식 [현행 규칙 페이지](https://www.pokertda.com/poker-tda-rules/)의 Dropbox 폴더에서 **`2026 Poker TDA Rules DOCX Longform Vers 1.1 final.docx`**를 직접 추출해 읽었다. 머리글은 **Version 1.1, September 21, 2026**. HTML `view-poker-tda-rules`의 v1.0 September 7만 근거로 삼지 않았다.
- [공식 Dropbox ZIP](https://www.dropbox.com/scl/fo/mta1wai9r2u8rcierocz3/ANbe4au_y0Pl2kowJe0dnXA?dl=1&rlkey=z6fqvd49e1w4rwf2d39s04b1d&st=gjgodgb7) → 해당 DOCX → `word/document.xml`을 메모리에서 직접 확인. 파일/보고서 생성 없음.
- 직접 확인한 Rule 5C는 live hand 중 전자/통신기기 조작 금지, 5D는 베팅 앱·차트·전략도구를 **테이블에서** 쓰지 않는다는 더 넓은 조건이다. 5D를 live hand에만 한정하지 않았다. TDA 적용 토너먼트로 범위 제한.
- [PokerStars 공식 도구 정책](https://www.pokerstars.com/poker/room/prohibited/)도 직접 읽음. 실시간 액션 조언 금지와 client open 중 solver 제한을 인용했고, 온라인에서 모든 정적 차트/기본 계산기가 금지된다는 문장은 넣지 않았다.

### 7-B. 시행한 검증과 한계

| 검사 | 실제 결과 |
|---|---|
| EN 7편 전체 diff 직접 교열 | 수학/시간범위, 인원, 규칙 적용범위, 직답↔본문↔FAQ 관점으로 자체 재독. **독립 4인 검수나 네이티브 검수로 세지 않음** |
| 파싱된 POST 객체 HEAD 대비 | 7편 모두 updated 외 메타, H2, 표 전체 행, 카드 토큰, 이미지 전체 줄, FAQ 질문 불변 |
| FAQ 수 | probability15/pot11/outs9/drawing11/equity11/implied10/card8 유지 |
| 새 직답 단어 수 | 27개 전부 47–56단어, EN 40–75 규격 통과 |
| `check:answer-echo --locale=en --slug=...` 7개별 strict | 모두 exit0, echo/place/count/pointer 결함0. **length27은 기존 게이트가 EN에 기본 90–170문자 규격을 적용하는 단위 불일치**. 해당 스크립트121행 주석은 EN을 문자로 재지 않는다고 적지만 lenSpec은 fallback 적용. 문안을 문자규격으로 줄이지 않았고 게이트 코드는 소유범위 밖이라 미수정 |
| `audit:hard --locale=en` 및 7개 slug별 | EN56/56 오류0·경고0. 단, 확률 cross-table 일부 수집6에도 실제 매칭 쌍0이며 나머지 slug는 cluster 외. **표 교차검산 완료로 부르지 않음** |
| `check:faq-schema --locale=en` | 파싱/렌더러 계약56/56 통과. 최종 HTML 화면 검증은 아님 |
| `check:intl-links` | 577편/25언어 통과 |
| `check:meta` | 641편 상한 초과0. 기존 숫자 종결 경고20은 이번 7편 메타 변경과 무관 |
| UTF-8/간격/`git diff --check` | U+FFFD0, 새 직답↔이미지 붙음0, 공백 오류0. Git LF→CRLF 안내만 있음 |
| 빌드·화면·번역 대조 | 미실행: EN 확정 후 본체와 소유권/자원 조율. EN-only 상태에서 번역 parity 완료로 보고하지 않음 |

추가 직접 산술: C(52,2)=1326, C(50,3)=19600, 셋 이상11.7551%, suited flop flush0.84184%, flop flush draw10.94388%, quads0.24490%, pocket-pair full house0.97959%, 중간 커넥터 straight1.30612%, 7장 royal 1/30940. §6의 9-outs·×4 경계·+$52 검산과 일치했다.

숫자 토큰 전체가 불변인 것은 아니다. 기존 FAQ의 중복 $100/60%/$60 및 EQR 40%/75%/30% 예시를 삭제했고, 본문 조건 설명/직답에는 기존 표의 값과 7-outs 경계·9/47을 재사용했다. **표·카드·보호된 수치 예제는 불변**이다. 기각 원문의 `19.6%` 턴 fold, `19.1%` next-card, 올바른 표 열 이름, `starting pot`, `The bigger the bet`, 하단 Rule4/2 계수 선택은 직접 재확인했다.

다음 단계: 본체 독립 diff 검수 → EN 확정 → core7 파일 소유 조율 및 실제 잔여만 전파 → 본체 이미지 연결 → 통합 게이트/모바일·desktop·빌드. 지금은 “확률 묶음 전체 완료” 상태가 아니다.

### 7-C. 본체 독립 검수 — 2026-09-24 (Claude) · EN 확정

- 본체 직접 diff 교열 + 렌즈 4종(Agent 병렬: 수학 검산관·현역 딜러·EN SEO/GEO·diff 교열). **수학 오류 0**(검산관·딜러가 전 수치 python 재계산, 본체 손검산 일치). 전략 유해 조언 0.
- 1차 출처 재확인: TDA 2026 **v1.1(Sept 21, 2026) DOCX** 공식 Dropbox ZIP에서 본체가 직접 추출 — Rule 5C·5D 원문이 본문 서술과 일치. PokerStars prohibited 페이지 원문(bot=real-time advice·GTO/solver 도구) 일치.
- 반영(모두 ② 이번 초안 유래, 원본 결함 아님):
  - pot-odds 비율 직답 「첫 숫자+1의 역수」 일반화 → 3-to-1 예시로 한정(본문 X-to-1 공식과 축어 중복도 제거)
  - FAQ 정의문 소실 복구(GEO 퇴행): probability Rule 2/4 · implied · reverse implied · equity · equity realization(공식 복구, 예시는 계속 뺌) · fold equity(숫자를 앞으로)
  - card-counting: 「Is … illegal?」에 **No** 직답 복구, 입장 보장 부인 문구 2곳 삭제(방어적 톤 = 합법성 톤 원칙 위반) — 기기·외부조언 경계와 TDA/PokerStars 인용은 유지
  - equity 마무리 「position is the biggest factor」 ↔ 새 EQR 문장 충돌 해소
  - drawing-odds: set 직답에 11.8%·7.5-to-1·set mining 정의 복구, 본문 중복 제거 / rare flops 직답의 모호 문장 → trips 1.35% / straight 「by-the-river」
  - probability: royal 직답에 SF 1 in 3,590, long-shot 필러 1문장 삭제, steps 라벨 교열, 시작핸드 직답 수치화(23.5%·0.30%)
  - updated 7편 → 2026-09-24
- **기각·보류**: ×4 조건 표현 불일치(「without another payment」 신규 vs outs130·outs114·drawing115·pot-odds181의 「all-in」 기존) — all-in은 조건의 충분 사례라 오류 아님, 기존 문장은 보호/범위 밖 → **A4 잔여 후보**. Quick answer 추상 표현 일부(딜러 렌즈 중간 확신) — 수치 정확·직답 요건 충족이라 보류.
- 게이트: audit:hard --locale=en 56/56 🔴0·🟠0 · answer-echo 7편 echo 0(🟠 length는 EN 문자규격 오적용, 기존) · check:faq-schema en 56/56 · 백틱 0. §13 커버리지상 7편의 카드 문단은 이번 편집 무관(카드 토큰 불변)이라 미검사 상태 그대로다.
- 남은 것: core7 전파(§3-B 실제 공백만) · pot-odds 이미지 8곳(A3, 새 asset 필요) · ja rake 판정.

### 7-D. core7 전파 — 2026-09-24 (Claude 본체 · B1①)

- 레인 7개(Opus 서브, 로케일당 1)가 EN 델타 `e6e6aa9b~1..5c596982`의 명제마다 (a)이식/(b)이미있음/(c)대응없음/(d)보호로 판정 → 본체 diff 교열 → **교차 렌즈 3개(Fable: es+pt · de+id · ja+zh+zh-hant, 네이티브 편집자 + EN 대조 검산관)** → 반영.
- 직답 신설: es 27 · pt 27 · id 27(Rule2/4 절은 본체가 추가 — «Rumus Poker» H2는 EN Rule2/4 H2의 제목 교체였다. 브리프 오기) · de 6(pot-odds 1 · outs 1 · drawing 4, set 재배치 포함) · zh 2 · ja·zh-hant 0.
- A1 전 로케일 반영(무조건 콜 · half-pot 조건 — id·pt는 기존 완료 · FAQ 상대 인원 — ja·zh-hant는 기존 완료). A4 동형 결함(set-mining 7.5:1 단정 · ×4 7 vs >8 · overcard 할인 · heads-up 전제 · EQR 경향화 · fold 빈도 용어 · card-counting 절대단정·TDA 5C/5D·PokerStars)은 있는 자리만.
- 본체 추가 판정: ja equity 직답 2·probability 직답 1 / zh-hant probability 직답 2(TDA «第 5D 條 · 牌桌上» · long-shot «한 번의 패배로 결정의 옳고 그름을 알 수 없다») — 기존 직답이지만 EN이 고친 결함과 같은 명제라 최소 문구 수정. de steps ×4 라벨 조건.
- 렌즈 반영: 상 2(es «rangos»=range false friend → sobrecartas · zh «那一成»=10% 오독 → 那一份) + zh 표 라벨 «两张超对牌»(超对=overpair) → «两张高牌»(pot-odds 표기와 통일) + 표현 17.
- 게이트: audit:hard 7로케일 🔴0 · check:structure 핵심 결손 0 · faq-schema 🔴0 · intl-links 통과 · 백틱 0 · 빌드 73+577. 스탬프 = 내용 바꾼 파일 updated·masterUpdated 09-24(ja implied-odds만 masterUpdated).
- 🔴 **게이트 공백 발견**: `check-answer-echo.mjs` LABELS에 de·es·id·pt 라벨이 없어 이 4로케일 직답은 기계 검사 0이다. 이번 회차는 레인이 `inspect()`에 라벨을 넘겨 수동 확인(echo 0). 라벨 추가 시 코퍼스 전체 신규 경고가 뜰 것 → 별건.
- 남긴 것(자동 착수 아님): ja implied FAQ 3·equity FAQ 정의의 «리드 반복 줄이기»(EN 교열성 변경) 미전파 · ja/zh/zh-hant 기존 도입문의 과장 단정 잔여(«계산기 필요 없음»·«승자 전원이 외운 표» 등, 사실오류 아님) · zh-hant outs ×4 «이중계산» 옛 설명 · ×4 «all-in» 조건 표현(A4 잔여, 전 로케일 동형).
