# MS GTO 시리즈 검색·편집 근거

조사일: 2026-09-15. 대상은 `lib/gto-series.ts`의 실제13편이다. 이전 MS 키워드뱅크에는 이13개 스팟의 개별 키워드 수치가 없어 **이번 Google 직접 검색과 원문 조사로 보완**했다. 영어·ID 키워드 수치를 MS의 측정값으로 쓰지 않는다.

## 1. 방법과 한계

Chrome에서 Google을 `gl=my&hl=ms&pws=0`으로 직접 열었다. 결과 하단에서 **Malaysia**, **Hasil carian tidak diperibadikan**, 상세 위치를 알 수 없다는 안내를 확인했다. 실제 말레이시아 IP·도시·사용자 집단을 통제한 순위 조사로 쓰지 않는다. Google 계정이 연결된 브라우저였으며 pws=0 표기만으로 모든 개인화 요소가 통제되었다고 주장하지 않는다.

| 직접 검색한 쿼리 | 직접 본 결과의 유형·후속 편집 판단 |
|---|---|
| `strategi c-bet poker flop kering` | BBZ Poker, Red Chip Poker, GTO Wizard 등의 영어 교육 원문과 영어 영상·커뮤니티가 노출됐다. dry flop의 자동 c-bet 여부, range·위치·size를 묻는 의도를 분리한다. |
| `donk bet poker board bersambung` | Poker Copilot, PokerCoaching, PokerStars, GTO Wizard의 영어 글이 보였다. 관련 검색에는 `What is a donk bet`, `Out of position poker`, `What is a donk car`가 있었다. donk 단독은 검색 의미가 섞이므로 poker·보드·행동을 밝힌다. |
| `strategi poker 3-bet pot saiz bet` | Google이 `...size bet` 수정안을 제시했다. preflop 3-bet 크기 글과 flop 이후3-bet pot 영상·글이 함께 보였다. 관련 검색에는 `C betting in 3 bet pots`, `Poker bet sizing theory`, `GTO bet sizing theory`가 있었다. 이번 글은 **플랍 이후** 선택임을 첫 답에서 명시한다. |

별도 일반 검색 도구로 `strategi poker c-bet board monotone bahasa melayu`, `strategi poker 3-bet pot saiz bet`, `poker blind lawan blind c-bet strategi`도 검색했다. 일반 검색의 노출 순서를 Google 직접 관찰 순위에 합치지 않는다.

**측정하지 않은 항목:** 검색량, CPC, 키워드난이도, MS 전문 콘텐츠 점유율, MY top10 순위표, 모든 PAA·자동완성. 아래 제안 질문은 실제 의미를 참고한 편집 문구이며 수집된 PAA가 아니다. Google AI 요약에는 인니어형 표현이 섞여 있었으므로 원문·어휘 근거에서 제외했다. 검색 요약은 URL 찾기 용도로만 사용했다.

`docs/market-profile/ms.md`와 MS 전용 local-voice 파일은 이번 rg 목록에서 찾지 못했다. 언어·시장 기준은 `ms-posting-reference.md` §8 및 실제 기존 MS 글을 따른다. DataForSEO/라쿠/lowfruits 계측을 수행했다고 보고하지 않는다. `rakko-playbook.md`의 location/language 구분·CPC 근거금지·비일본 발굴 도구 제약은 유지한다.

## 2. 직접 연 원문과 비교

아래는 제목·교육 구조·관련 원문 문단을 직접 확인한 출처다. 표는 검색 top10 순위표가 아니며 원문이 영어라는 관찰을 말레이시아 시장 전체의 언어 분포로 일반화하지 않는다. 외부 전략 숫자를 우리 고정 예제에 가져오지 않는다.

| 출처 | 읽은 구조·내용 | 우리 글에서 더 명확히 할 점 |
|---|---|---|
| [BBZ — A guide to C-betting on the flop](https://bbzpoker.com/the-apestyles-guide-c-betting-on-the-flop/) | IP/OOP 분리, 두 가지 단순화 전략, 보드·크기·실전조정 설명과 간단 비교표 | 같은 OOP도 caller와3-bettor/opener가 다른 조건임을 수치표로 보여준다. |
| [Red Chip — Always C-Bet Dry Flops? Probably Not](https://redchippoker.com/cbet-dry-flops-strategy/) | dry/wet 통념 검토와 bet 전 확인 질문. 주된 상세 교육은 별도 회원 영상 연결 | A72/K83를 실제 range표와 비교하고 check가 포기라는 오독을 직접 해소한다. |
| [GTO Wizard — Flop Heuristics: IP C-Betting in Cash Games](https://blog.gtowizard.com/flop-heuristics-ip-c-betting-in-cash-games/) | range·texture별 H2, A73 사례, paired/connected/monotone별 소제목과 차트. 일부 분석은 BB donk를 막은 Simple solution임을 명시 | 우리 예제의 허용 크기·첫 결정 노드·donk 가능 여부를 표시해 숫자를 다른 tree에 적용하지 않게 한다. |
| [Poker Copilot — Donk Bets](https://pokercopilot.com/poker-statistics/donk-bet) | 정의·부정적 이미지·상대통계·대응 순서. 오래된 글은 flop donk를 거의 항상 실수라고 강하게 설명 |987의 실제23.7%와 T6s4콤보 차이를 통해 절대금지식 독해를 막는다. 타사 HUD 빈도를 GTO 빈도로 쓰지 않는다. |
| [PokerCoaching — When To Use Donk Betting](https://pokercoaching.com/blog/donk-betting/) | 정의·일반 문제·가능한 예외·turn·대응·FAQ. low/middle connected를 예외로 설명 | 같은23.7%도 전체 BB range 분모임을 밝히고 nuts 독점과 완성 straight 개수 우위를 분리한다. |
| [PokerStars — Donk Betting: What It Is and When To Do It](https://www.pokerstars.com/poker/learn/strategies/donk-betting-what-it-is-and-when-to-do-it/) | 정의·흔한 오해·사용상황. 이전 street aggressor에게 먼저 bet하는지로 구별 | SB opener의 첫 flop bet를 donk라 부르지 않는다. ⑪–⑬은 c-bet다. |
| [PokerStars — Poker Bet Sizing Strategy](https://www.pokerstars.com/poker/learn/lesson/bet-sizing/) | preflop/postflop 크기 구분, position·board·SPR, sizing FAQ |3-bet 크기 자체와3-bet pot 플랍 bet 크기를 제목·첫 답에서 구분한다. AK2/QT7/852 동일SPR 반례를 보존한다. |
| [GTO Wizard — How and Why You Should Use Turn Donk Bets](https://blog.gtowizard.com/how-and-why-you-should-use-turn-donk-bets/) | flop 이후 range가 걸러지는 과정, turn quiz와 사례 |이번 시리즈의 flop root 수치만으로 turn frequency를 만들지 않는다. 이 글은 인접 의도 비교 자료이지 turn 해설 신설 근거가 아니다. |
| [BlackRain79 — CBetting the Flop](https://www.blackrain79.com/2014/08/cbetting-flop-at-micros-modern-evolution.html) | 실제 opponent HUD를 놓고 check/call·check/raise 선택을 설명한 사례형 글 |상대 통계가 주어진 exploit 예시와 균형 모델에서 나온 check-raise 결과를 섞지 않는다. 성과·저자 경력은 옮기지 않는다. |
| [Upswing — Bet Sizing Strategy](https://upswingpoker.com/bet-size-strategy-tips-rules/) | Google3번째 쿼리에서 찾은 원문을 Chrome에서 직접 읽었다. preflop·dry/wet·SPR·overbet·3-bet pot별 규칙과 실제 hand 사례가 있다. |일반적인 작은 c-bet 지침을 무조건 적용하지 않도록 AK2/QT7/852의 동일SPR 비교를 보존한다. 경쟁 글에 등장하는 turn/river 전략을 우리 미계산 후속노드의 결과로 쓰지 않는다. |

[Upswing의 delayed c-bet 글](https://upswingpoker.com/delayed-continuation-bet-c-bet-strategy/)은 검색에서 URL을 찾았으나 web 원문 열기에 오류가 있어 **원문 확인 완료 출처에서 제외**했다. 동영상도 화면에 제목을 봤을 뿐 시청·전사 분석을 수행했다고 쓰지 않는다.

원문 비교는 공개된 관련 본문과 구조를 읽은 범위다. 모든 유료 영상·팝업·댓글·linked 자료를 읽었다는 의미가 아니며 경쟁 글의 정확한 단어수·FAQ 개수·표 개수를 전수 계수하지 않았다.

## 3. 이번 시리즈가 더 제공하는 세 가지

1. **조건이 고정된 비교:** 같은range·pot·stack에서 board가 변할 때 왜 빈도가 바뀌는지, EQ/EV/EQR·made hand/draw 표를 함께 읽는다. 추상적인 dry=bet/wet=check 구호를 넘어서 각 보드의 원인을 설명한다.
2. **검증 가능한 MS 사용 경로:** 실제 MS 화면·코드 차트·단계별 버튼 이름을 연결한다. 계산 결과·전략적 해석·미계산 후속노드를 구분하고⑦의 별도 재솔브 출처를 명시한다.
3. **MS 독자의 오독 방지:** tangan/kad/anda·영어 전문용어를 일관되게 쓰고, 전체range와 개별combo·EQ와실전승률·missed와fold·SPR과commitment의 차이를 FAQ에서 바로 답한다.

## 4. slug별 키워드·질문 배치 제안

**아래는 편집 후보**다. 검색량 우위·실제 자동완성/PAA 축어가 아니다. EN 원래 절·FAQ 주제를 유지하며 기존 H2 슬롯에서 자연스럽게 사용한다. 새 절 추가 또는 전체 구조 압축의 근거가 아니다.

| # / slug | 핵심 의도·표현 | 기존 H2/FAQ에 사용할 질문 후보 |
|---|---|---|
|① a-high-board-cbet|c-bet poker, flop A-high, board kering, BB check|Mengapa BB check pada flop A72? / Mengapa top pair tidak semestinya perlu bet? / Apakah beza kelebihan range dengan tangan sendiri?|
|② k-high-board-cbet|c-bet K-high, K83, equity dan EQR|Mengapa BB check 99.8% pada K83? / Mengapa equity hampir sama tetapi EV berbeza? / Apakah kelemahan bermain OOP?|
|③ broadway-board-strategy|board Broadway, QJT, nut advantage, draw|Mengapa banyak draw masih membawa kepada check? / Siapa mempunyai lebih banyak straight pada QJT? / Mengapa kelebihan nuts mempengaruhi saiz bet?|
|④ donk-bet-strategy|donk bet poker, board bersambung, 987|Bilakah donk bet masuk akal? / Mengapa BB boleh lead pada 987? / Adakah lebih banyak straight bermakna menguasai semua nuts?|
|⑤ monotone-board-strategy|board monotone, nut flush, blocker|Mengapa nut flush masih check? / Adakah satu kad spade sudah menjadi flush? / Mengapa blocker boleh menyukarkan value bet?|
|⑥ paired-board-strategy|board berpasangan, 663, trips, check|Mengapa lebih banyak trips tidak bermakna lebih banyak bet? / Apakah beza trips, full house dan quads pada 663? / Adakah MDF bermakna wajib call?|
|⑦ low-board-check-raise|check-raise poker, flop rendah, 652, raise sizing|Bilakah BB check-raise pada flop 652? / Mengapa tiada straight dalam kedua-dua range? / Adakah raise ke 7.3 bb bermakna tambah 7.3 bb?|
|⑧ 3bet-pot-cbet|c-bet pot 3-bet, AK2, SPR4|Mengapa BB langsung tidak check pada AK2? / Bagaimanakah SPR4 mempengaruhi pembinaan pot? / Adakah check0% membuktikan setiap check rugi?|
|⑨ 3bet-pot-bet-sizing|saiz bet poker, pot3-bet, flop two-tone, QT7|Mengapa bet besar dipilih98.4%? / Adakah draw mampu membayar harga call? / Mengapa peluang dua kad tidak menjamin call menguntungkan?|
|⑩ 3bet-pot-low-board|pot3-bet flop rendah, overpair, 852|Mengapa BB memilih bet besar97.8% pada flop rendah? / Mengapa overpair penting walaupun board tidak banyak mengenai range? / Adakah missed bermakna fold?|
|⑪ blind-battle-cbet|blind lawan blind, SB c-bet, OOP, KT6|Mengapa SB boleh c-bet ketika OOP? / Apakah yang membezakan SB opener daripada BB caller? / Adakah satu saiz ditawarkan membuktikan saiz lain lemah?|
|⑫ blind-battle-connected-board|SB BB board bersambung,765,check|Mengapa c-bet turun daripada67.4% kepada9.6%? / Bagaimanakah765 membantu range BB? / Adakah88 dan Q4 dibandingkan pada peringkat yang sama?|
|⑬ ace-paired-board-strategy|board Ace berpasangan,AA6,SB bet,trips|Mengapa SB bet80.1% pada AA6? / Siapa mempunyai lebih banyak Ax yang kuat? / Adakah missed51.5% ialah kadar fold?|

## 5. 결정을 적용할 때

공통 title/seoTitle·라벨·내부링크·검수 계약은 [MS 집필 브리프](../ms-gto-translation-brief.md)에 둔다. 이 조사 문서에 완성 포스팅 수·빌드·배포 이력을 누적하지 않는다. 새 전략 숫자는 경쟁 글이 아니라 확정 series spec과 원문 정정 계약에서만 가져온다.
