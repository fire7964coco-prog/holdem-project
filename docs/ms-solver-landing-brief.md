# `/ms/solver` 말레이시아 말레이어 랜딩 작업 근거

작성·조사일: **2026-09-14**. 사용자 직접 지시: ms 관련 파일을 읽고 Google 현지 웹사이트 조사 후, 현지 전문가 페르소나를 부여해 작업한다. 범위는 기존 솔버 랜딩의 기능·최근 수정 문구를 반영한 말레이어판과 연결 등록이다. 구현·검증 결과와 배포 여부는 `WORKLOG.md`를 따른다.

## 1. 입력 문서와 자산

- 용어 정본: `docs/keyword-bank/ms-posting-reference.md` 전체. 하위 브리프 `docs/translation-terms-ms.md`도 읽었으며 충돌 시 정본을 적용했다.
- 구조·등록 규칙: `docs/solver-landing-playbook.md`. 도구 검색의도 중심의 경량 접근은 `docs/id-solver-landing-brief.md §0`을 따른다. 기존 문서의 인도네시아 검색량을 말레이시아 값으로 사용하지 않는다.
- 전략·보드·숫자 정본: `docs/gto-solver-series-spec.md §4-B`. 앱에서는 라벨·기능·저장 범위를 확인하고, 전략 해설을 그대로 옮기지 않는다.
- 기존 구조: `app/fr/solver`, `app/en/solver`. 말레이어 문장을 새로 쓰며 인니어의 어휘·쉼표 소수를 반입하지 않는다.
- 실제 MS 글: `lib/posts-ms/index.ts` 등록 **8편**. `lib/posts-ms/*.ts` 9파일 중 하나는 index이며 글이 아니다. 전부 입문 규칙 글로, GTO 해설 글은 없다.
- `/ms`, `/ms/blog`, 아래 8개 글 URL은 이번 HTTP GET에서 모두 200. 기존 문서의 개별 글 404 기록은 현재 상태가 아니다.

유효한 글 slug: `texas-holdem-rules-for-beginners`, `holdem-game-order`, `holdem-betting-actions`, `holdem-blind-meaning`, `holdem-all-in-rules`, `holdem-showdown-rules`, `holdem-hand-rankings`, `holdem-tournament-vs-cash-game`.

MS에는 독립 hand-chart·calculator 도구나 에퀴티·팟오즈·13개 솔버 예제 해설 글이 없다. 프리플랍·equity는 실제 앱 내장 탭으로 안내한다. 없는 글 URL을 만들거나 입문 글을 GTO 해설처럼 연결하지 않는다.

## 2. 현지 전문가 페르소나

다음은 **AI에 부여한 역할과 검수 관점**이며 실제 현지인·자격 보유자·인간 원어민을 고용했다는 의미가 아니다. 기존 문서의 과거 원어민 검수 기록과 이번 검수를 혼동하지 않는다.

| 역할 | 구체 기준 |
|---|---|
| 쿠알라룸푸르 말레이어 포커 교육 콘텐츠 편집자 | MS 문장으로 자연스럽게 설명하고, anda체·현지 어휘·영어 포커 전문용어의 일관성을 유지한다. 인니어 직역과 기계 번역 오류를 찾는다. |
| 말레이시아 포커 교육자·제품 사실 검증자 | 앱 라벨, heads-up postflop 범위, EV 채점, 노드락 결과의 의미, 내 스팟 저장 제한과 §4-B 보드·숫자를 대조한다. |
| 말레이시아 검색의도 분석가·SEO 검수자 | solver를 바로 사용하려는 의도, GTO/solver 단독 검색의 혼입, metadata·hreflang·내부 링크를 검사한다. 측정하지 않은 검색량·순위를 주장하지 않는다. |
| 말레이어 초심자 독자 | range·equity·OOP/IP 설명, 예제부터 시작하는 순서, 실제 버튼과 본문 안내가 이어지는지 확인한다. |

작성자와 제품·SEO 검수 에이전트를 분리했다. 초안 후 발견 사항을 반영하고 문장·실제 렌더링을 다시 확인한다.

## 3. Google 말레이시아 설정에서 직접 본 결과

Chrome에서 Google 검색을 직접 열었다. 공통 파라미터는 `gl=my&hl=ms&pws=0`. 결과 하단에 **Malaysia**, 비개인화 결과 안내, 상세 위치를 알 수 없다는 표시가 있었다. 말레이시아의 실제 IP나 특정 도시·기기 집단을 통제한 순위 측정은 아니다.

| 직접 검색한 쿼리 | 화면에서 관찰한 내용 | 편집 판단 |
|---|---|---|
| `GTO poker solver percuma` | GTO Wizard·GTOBase·Simple Postflop 등 영어 도구, MY App Store의 Solver+, 영어 영상·커뮤니티, 말레이어 Google Play 설명이 함께 노출됐다. | 전문 도구명은 영어를 유지하되 무료 접근성과 MS 설명을 제공한다. |
| `site:my poker GTO` | 말레이시아 사이트의 영어 포커 과외·영어 서적 판매 결과와 함께, 문장이 부정확하거나 주제와 무관한 결과도 섞였다. | `.my`만으로 현지 포커 전문가의 글이라고 간주하지 않는다. 이 검색으로 MS 전문 교육 사이트의 우세나 부재를 확정하지 않는다. |
| `kalkulator peluang poker Malaysia` | Kalkulator.com.my의 말레이어 계산기, 현지화된 앱스토어 결과, 국제 영어 equity 계산기가 노출됐다. | equity 계산 의도와 전략 빈도를 계산하는 solver 의도를 본문·FAQ에서 구분한다. |

일반 웹 검색 도구로 `GTO poker Malaysia`, `solver poker percuma`, DBP 용례 및 관련 페이지도 조사했다. **Google 직접 관찰과 일반 검색 도구 결과를 합쳐 순위표로 보고하지 않는다. 검색량·top-30 비율은 측정하지 않았다.**

## 4. 원문 확인 출처와 사용 범위

| 출처 | 확인한 내용 | 사용 한계 |
|---|---|---|
| [DBP PRPM: pelayar](https://prpm.dbp.gov.my/Cari1?d=123312&keyword=pelayar) | 공식 사전에 웹 브라우저 뜻이 있다. | 언어 근거이며 포커 기능·수요 근거가 아니다. |
| [DBP PRPM: anda](https://prpm.dbp.gov.my/Cari1?d=123312&keyword=anda), [kad](https://prpm.dbp.gov.my/Cari1?d=123312&keyword=kad) | 독자 호칭·카드 어휘 확인. | 문중 anda 대소문자와 포커 사용 방식은 프로젝트 정본을 함께 적용한다. |
| [Kalkulator Peluang Poker](https://kalkulator.com.my/kalkulator-peluang-poker/) | “Kira peluang tangan poker”, “kad komuniti”, “Julat Tangan Lawan” 등 실제 MS 용례. | 말레이시아 타깃 도메인이며 운영자 소재지는 확인하지 않았다. `Kustom`, `Kalikan`, draw를 직역한 표현 등도 섞여 있어 전체 문체나 기술 설명의 정본으로 쓰지 않는다. |
| [Solver+ MY App Store](https://apps.apple.com/my/app/solver-poker-gto-strategy/id1530767783?l=ms) | “Percuma · Pembelian In‑App”; 스토어 UI는 MS, 설명은 영어, 앱 언어 표시는 영어. | 말레이시아 스토어 노출과 실제 앱의 MS 지원은 별개다. 타사 가격·무료 범위를 자사 카피에 옮기지 않는다. |
| [GTO Poker Trainer Google Play](https://play.google.com/store/apps/details?hl=ms&id=com.gtopre.gto_pocket_trainer) | MS로 노출되는 글로벌 앱 설명을 읽었다. | 개발사 주소는 노르웨이이고 MY 지역 순위는 아니다. postflop을 잘못 옮긴 표현이 있어 전문용어 정본으로 삼지 않는다. |
| [GGPoker Malaysia](https://ggpokermalaysia.com/) | Malaysia 타깃 영어 페이지에 게임·가입 의도가 나타난다. | 운영자 국가 미확인. MS 교육 문체의 근거가 아니다. |
| [Mekanika의 Mitsubishi GTO 기사](https://www.mekanika.com.my/mitsubishi-gto-3000gt-kereta-sport-jepun-mendahului-zaman/) | 말레이시아 자동차 매체의 GTO 용례. | GTO 단독 검색어가 포커를 확정하지 않는다는 근거로만 쓴다. |
| [Trainocate Malaysia Excel 과정](https://trainocate.com.my/courses/exa-2-microsoft-excel-2021-advanced/) | Excel Solver 학습 항목. | solver 단독의 다른 의도를 확인하는 자료다. |

기존 문서에 있던 onlinecasino-my.com·texasholdemseal-my.com의 특정 경로는 이번에 원문을 다시 읽지 못했으므로 새 근거로 인용하지 않았다. DBP `percuma`는 검색 추출에서 확인됐지만 직접 열람 오류가 있어, 원문 열람 근거는 MY App Store와 기존 정본으로 보완했다.

비교 절의 계산 방식은 [GTO Wizard 공식 페이지](https://gtowizard.com/), [PioSOLVER 공식 FAQ](https://piosolver.com/docs/faq/), [TexasSolver 공식 저장소](https://github.com/bupticybee/TexasSolver)에서 확인했다. GTO Wizard는 라이브러리와 커스텀 계산을 모두 제공하므로 표는 **라이브러리 이용 방식과 설치형 계산 방식**을 비교하며, 특정 제품 전체를 라이브러리만 있는 서비스로 단정하지 않는다. 타사 가격·우열·제한 수치는 싣지 않았다.

## 5. 표기와 제목 결정

- 핵심 표기: **solver poker GTO**. `GTO`나 `solver`만 제목으로 쓰지 않는다. 이 어순이 검색량 1위라는 주장은 하지 않는다.
- 제목: **Solver Poker GTO Percuma — Terus dalam Pelayar | HoldemMaster**.
- 설명은 postflop 계산·equity/EV·직접 계산한 spot 연습·설치/계정 불필요를 연결한다.
- `percuma`, `pelayar`, `peranti`, `tetapan`, `muat turun`, `kad`, `tangan`, `anda`, `selepas`, `baharu`, `eksport`를 사용한다. 문중 `anda`, 문두·제목 `Anda`.
- `gratis`는 MS에 존재하지 않는다는 뜻이 아니라, 이 프로젝트에서 `percuma`로 통일하는 편집 규칙이다.
- `range` 첫 설명은 **julat tangan**, `board` 설명은 **kad komuniti**. `equity`, `postflop`, `bet/check/call/raise/fold`는 유지한다.
- 소수점 `2.5`, 천 단위 `1,326`, `0.35%`. 카드 무늬·숫자값은 정본 그대로.
- 노드의 빈도는 `Kekerapan`, 통계 가중치는 `wajaran`, 위치의 불리함은 `kelemahan`, EV 손실은 `kerugian EV`.

## 6. 실제 앱 라벨과 제품 범위

[공개 앱](https://solver.holdemmaster.com/?lang=ms)을 Chrome에서 열어 확인했다. 공개 소스 main SHA는 `0ef519441ff1863636c6ba665d188427b2f5d9e0`였다.

| 용도 | 확인된 MS 라벨 |
|---|---|
| 앱 제목·H1 | HoldemMaster GTO Trainer — Solver & Trainer GTO Percuma untuk Texas Hold'em / Strategi GTO, terus dalam pelayar anda. |
| 5단계 | ① Range OOP · ② Range IP · ③ Board · ④ Bet size · ⑤ Kira |
| 계산 실행 | Bina Tree → Jalankan Solver |
| 기본 탭 | Spot belajar · Trainer GTO · Carta preflop · Equity |
| 예제 결과·직접 입력 | Lihat hasil · Spot tersuai |
| 오늘의 문제 | Cabaran Harian |
| 노드락 | Kunci strategi pada nod ini · Kunci dan kira semula · Perbandingan sebelum/selepas |
| 내 스팟 연습 | Berlatih spot ini · Spot saya · Ulang kaji kesilapan |
| 기본 예제 연습·복습 | Latihan pratetap · Semak semula |
| EV 채점 | Pilihan terbaik · Boleh diterima · Perlu disemak |

출처: [SideBar.vue](https://github.com/fire7964coco-prog/holdemmaster-gto-solver/blob/0ef519441ff1863636c6ba665d188427b2f5d9e0/src/components/SideBar.vue), [GuidePage.vue](https://github.com/fire7964coco-prog/holdemmaster-gto-solver/blob/0ef519441ff1863636c6ba665d188427b2f5d9e0/src/components/GuidePage.vue), [node-lock-labels.ts](https://github.com/fire7964coco-prog/holdemmaster-gto-solver/blob/0ef519441ff1863636c6ba665d188427b2f5d9e0/src/node-lock-labels.ts), [custom-trainer-labels.ts](https://github.com/fire7964coco-prog/holdemmaster-gto-solver/blob/0ef519441ff1863636c6ba665d188427b2f5d9e0/src/custom-trainer-labels.ts).

랜딩 전체에 적용할 범위:

1. 계산기는 **heads-up postflop·chip EV**. 프리플랍 전략 solver·ICM solver로 소개하지 않는다. Carta preflop과 Equity 탭은 별도 기능이다.
2. 무료·계정 불필요. **선택 계정 동기화는 Spot belajar와 Cabaran Harian의 학습 기록**에 한한다.
3. **직접 계산한 spot을 Trainer 문제로 저장한 경우, 문제와 그 연습 기록 모두 로그인해도 기기 전용**이다. 최근 KO/다국어 FAQ 정정과 동일하다. 변동 가능한 저장 개수·시도 제한 숫자는 싣지 않는다.
4. 노드락 결과는 지정된 전략 제약에 대한 계산 결과다. 제약 없는 GTO 균형과 혼동하지 않게 설명한다.
5. 언어선택기는 제거됐다. 해당 언어 지원 FAQ 한 문항과 `?lang=ms` CTA만 사용한다.
6. FAQPage와 화면은 같은 `SOLVER_FAQ_MS` 배열을 사용한다. featureList는 본문에 실제로 설명한 기능만 포함한다.

검수 중 확인한 추가 정정: 공개 `RunSolver.vue:1216`의 **커스텀 기본 targetExploitability는 0.3**이다. 교육 예제의 0.5%와 구분한다. 최대 반복 횟수에 도달해서 종료할 수도 있으므로 목표 달성을 보장하지 않는다. 새 MS FAQ와, 기존에 커스텀 기본값을 0.5%로 적었던 EN·JA FAQ에서 고정 기본값을 제거하고 실제 달성값을 확인하도록 정정했다. 교육 예제·Trainer의 0.5% 표시는 유지한다.

## 7. 등록·검증·후속 연결

신규 3파일: `app/ms/solver/page.tsx`, `faq.ts`, `solver-client.tsx`.

등록: hub-routes, hub-i18n, side-rail, solver-promo, sitemap, 기존 10개 및 신규 MS의 동일한 11언어 hreflang 세트. MS 코드는 HTML `ms`, hreflang `ms-MY`, OG `ms_MY`를 사용한다. 기존 `/ms/blog`의 셸 구현을 넓히지 않고 신규 solver에 허브 셸을 적용한다.

빌드 게이트·11언어 메타/FAQ·MS 링크·데스크톱/좁은 화면을 확인한다. 이번 작업에 이전 FAQ 수정도 포함되어 있으므로 기존 10개 언어의 FAQ 화면/스키마 일치도 보존한다.

별도 솔버 앱 저장소의 `outbound.ts`는 향후 랜딩이 실제 배포된 뒤 MS `/solver` 매핑을 추가할 대상이다. 이 작업에서는 다른 저장소를 수정하거나 외부 담당자에게 메시지를 보내지 않는다.
