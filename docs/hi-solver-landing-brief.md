# `/hi/solver` 힌디어 랜딩 작업 근거

조사·작성일: **2026-09-14**. 사용자가 말레이어와 같은 현지 검색·참조·페르소나 작업 및 **배포까지 직접 요청**했다. 다음 신규 포스팅용 정본은 [hi-posting-reference.md](keyword-bank/hi-posting-reference.md). 기존 솔버 플레이북의 잠금·이전 HI 미착수 메모는 이번 요청 이전의 상태다.

## 1. 입력과 범위

- `docs/translation-terms-hi.md` 전체, `lib/posts-hi/index.ts`에 등록된 기존 8편, 최신 `app/ms/solver` 구조와 최근 저장 범위 수정.
- `docs/solver-landing-playbook.md`, `docs/gto-solver-series-spec.md §4-B`의 보드·전략·숫자 정본. 앱 설명 문장을 전략 수치의 정본으로 대체하지 않는다.
- `/hi`, `/hi/blog`, 등록된 8개 글을 HTTP GET하여 모두 **200**, HTML `lang=hi` 확인. 독립 HI hand-chart/calculator나 13개 솔버 전략 해설 글은 없다. 없는 링크를 만들지 않는다.
- 신규 `app/hi/solver/{page.tsx,faq.ts,solver-client.tsx}`. 기존 11개와 상호 `hreflang` 12언어, 허브·프로모·사이트맵 등록. 공용 탭 5키와 허브 9키도 HI로 추가했다. 기존 HI 커뮤니티 전체를 번역하는 작업은 아니다.

## 2. 구체적인 AI 전문가 페르소나

실제 현지인·자격 보유자·인간 원어민을 고용했다는 뜻이 아니다. 작성자와 검수자를 분리해 다음 역할을 AI에 부여했다.

| 역할 | 적용 기준 |
|---|---|
| 델리 힌디어 포커 교육 편집자 | 쉬운 데바나가리 산문, `आप` 존댓말, `हैंड`와 라틴 포커 용어. 과도한 산스크리트식 직역·불필요한 영어 문장 덩어리를 피한다. |
| 인도 검색의도 분석가 | 지역·본문 언어·운영자 소재지·Google 자동 번역을 구분. GTO 단독/게임 가입/수학 solver 혼입을 제거한다. 측정하지 않은 검색량·순위를 주장하지 않는다. |
| 포커 제품 사실 검수자 | 실제 HI UI, 13개 titleHi, §4-B 수치, 채점·저장 범위·node lock 의미를 별도 대조한다. |
| 힌디어 초심자 독자·SEO 검수자 | 예제부터 시작하는 동선, OOP/IP와 range 설명, 연결되는 버튼명, metadata·hreflang·모바일 렌더링을 본다. |

## 3. Google 인도 직접 검색

Chrome Google에서 공통 **`gl=in&hl=hi&pws=0`** 설정으로 아래 3쿼리를 직접 열고 DOM 결과를 읽었다. 하단은 **भारत**, 비개인화 결과, 상세 위치를 알 수 없다는 표시였다. 실제 인도 IP·도시별 순위를 통제한 조사는 아니다. 검색 결과 건수·순위표·검색량은 측정하지 않았다.

| 쿼리 | 직접 본 결과 | 적용 |
|---|---|---|
| `GTO poker solver free hindi` | Google Play의 HI 페이지, India App Store, Reddit 등이 섞였다. App Store 결과 중 `?l=mr` 마라티어와 `?l=gu` 구자라트어도 있었다. | 인도 스토어 URL 또는 인도 검색에 나왔다는 이유만으로 힌디어 원문으로 기록하지 않는다. |
| `पोकर GTO क्या है` | Upswing, PokerNews, GTO Wizard, MasterClass, Red Chip Poker 등의 영어 원문과 `translate.google.com/translate?...sl=en&tl=hi` 결과가 함께 보였다. Google의 번역 표시도 확인했다. | 힌디어 제목·스니펫을 인도에서 작성된 힌디어 전문 글로 세지 않는다. 개념은 확인한 기술 원문·프로젝트 정본에서 검증한다. |
| `पोकर सॉल्वर मुफ़्त` | Solver+ HI 스토어, GTO Wizard 영어 페이지, 영어 교육 글의 Google 번역, Reddit 번역 등이 노출됐다. | 제목은 무료 포커 **전략 계산 도구**임을 밝히고, 초심자에게 미리 계산된 예제 경로를 먼저 준다. |

주제와 무관해 보이는 정부 도메인 하위의 포커 SEO 결과도 섞였지만 원문을 열지 않았으며 신뢰 출처로 사용하지 않았다. Google 직접 관찰과 별도 일반 웹 검색 도구 결과를 합쳐 순위 통계로 만들지 않는다.

## 4. 직접 읽은 원문과 한계

| 출처 | 지역·언어 구분 및 쓰임 |
|---|---|
| [PokerBaazi — Odds in Online Poker](https://www.pokerbaazi.com/blog/odds-in-online-poker) | 인도 서비스의 영어 GTO 용례. 인도 포커 교육에서 영어 전문 용어를 사용한다는 보조 근거이며 힌디어 원문 근거는 아니다. |
| [PokerListings.in — How to play poker](https://www.pokerlistings.in/how-to-play-poker) | 인도 대상 판의 HI 입문 본문. 운영자 소재지는 확인하지 않았다. 어색한 번역과 족보 음차도 있어 문장 전체를 모범으로 삼지 않는다. |
| [POKER Q’z Google Play HI](https://play.google.com/store/apps/details?hl=hi&id=com.pokerqz.twa) | 실제 설명이 데바나가리·영어 혼용이다. 개발자 CLOVIZ 주소는 일본 도쿄. 인도 원어민이 작성한 글이라고 기록하지 않는다. |
| [Solver+ India App Store HI](https://apps.apple.com/in/app/solver-poker-gto-strategy/id1530767783?l=hi) | HI 스토어 UI의 무료 표현을 확인했으나 설명과 지원 언어는 영어. 스토어 현지화와 앱 HI 지원은 별개다. 타사 유료 범위는 자사 카피에 옮기지 않는다. |
| [Google Chrome 공식 HI 도움말](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=hi) | `ब्राउज़र` 등 일반 소프트웨어 용례. 문서 자체에 AI 번역 가능성 안내가 있어 인간 원어민 교정의 증거로 삼지 않는다. |
| [SSB with ISV 소개](https://ssbwithisv.in/aboutssbwithisv) | 인도 교육기관의 Group Testing Officer(GTO) 용례. GTO 단독의 다른 검색의도 근거만으로 사용한다. |
| [Microsoft Solver 설명](https://support.microsoft.com/en-us/excel/define-and-solve-a-problem-by-using-solver) | Excel Solver 기능의 공식 출처. solver 단독을 포커 전용 키워드로 보지 않는 근거다. |

**인도에서 직접 발행한 힌디어 GTO solver 전문 교육 글을 확실하게 확보하지는 못했다.** GetMega의 과거 HI 경로는 이번 열람이 실패하여 새 조사 출처로 기록하지 않았다. 이는 HI 수요나 전문 글의 부재를 입증하지 않는다.

## 5. 카피·표기 결정

- 제목/H1: **मुफ़्त GTO पोकर सॉल्वर — सीधे ब्राउज़र में**. metadata에는 `| HoldemMaster` 추가. 검색량 우위를 주장하는 선택이 아니라 코퍼스·관찰에 따른 편집 결정이다.
- 주 CTA `मुफ़्त सॉल्वर खोलें →`, Trainer `GTO Trainer खोलें →`. 실제 앱 진입은 `https://solver.holdemmaster.com/?lang=hi`.
- 일반 산문은 `सॉल्वर`, `बोर्ड`, `हैंड`, `मुफ़्त`, `ब्राउज़र`, `आप`. 기술 문맥의 라틴 `board`도 기존 혼용 관습 안에서 유지한다. 기술 용어 `range`, `equity`, `EV`, `EQR`, bet/check/call/raise/fold 및 라틴 족보는 유지.
- OOP/IP는 postflop 행동 순서로 설명. Range는 가능한 핸드의 가중 집합이며 상대 패 하나를 맞히는 기능이 아니다.
- 수치·무늬·통화 값 보존. `0.35%`, `0.02bb`, `1,326`, `2.5`. `$`를 임의로 `₹`로 환산하지 않는다.
- 비교는 미리 계산된 라이브러리 이용 방식·설치형 계산 방식이다. GTO Wizard 같은 특정 제품 전체를 라이브러리 전용이라고 단정하지 않는다. 타사 가격·순위·우열 수치를 추가하지 않는다.

## 6. 실제 앱·소스 대조

Chrome에서 [HI 앱](https://solver.holdemmaster.com/?lang=hi)을 열었다. 실제 화면의 `परिचय`, `कैसे इस्तेमाल करें`, `अभ्यास स्पॉट`(तुरंत), `GTO Trainer`(EV), `Preflop चार्ट`(Range), `Equity`(**हिस्सा**)를 확인했다. URL의 lang 쿼리는 진입 후 소비된다.

공개 앱 main: **`0ef519441ff1863636c6ba665d188427b2f5d9e0`**. 다음은 [해당 SHA의 src](https://github.com/fire7964coco-prog/holdemmaster-gto-solver/tree/0ef519441ff1863636c6ba665d188427b2f5d9e0/src)를 읽어 대조했다. 배포 앱 JS에도 13개 titleHi가 축어로 포함됨을 확인했다.

- `SideBar.vue`: ① OOP Range → ② IP Range → ③ Board → ④ Bet size(아래 सेटिंग) → ⑤ गणना करें.
- `RunSolver.vue`: **Tree बनाएँ → Solver चलाएँ**. 일반 명사 सॉल्वर 규칙으로 실제 버튼 Solver를 바꾸지 않는다.
- `PresetsPage.vue`: **परिणाम देखें**, **खुद गणना करें**. GuidePage의 오래된 설명용 긴 이름보다 실제 버튼을 우선.
- `TrainerPage.vue`: **आज की चुनौती**, **दोबारा देखें**, 판정 **सर्वोत्तम / स्वीकार्य / नुकसान वाला चुनाव**.
- `node-lock-labels.ts`: **इस नोड की रणनीति लॉक करें**, **रणनीति लॉक करके फिर गणना करें**, **पहले और बाद की तुलना**. 잠금 후 결과는 제약에 대한 응답이며 무제약 GTO 균형이 아니다.
- `custom-trainer-labels.ts`: **इस स्पॉट का अभ्यास करें**, **मेरे स्पॉट**, **प्रीसेट अभ्यास**, **गलतियों का अभ्यास**.
- Study Spots·Daily 연습 기록은 선택 로그인으로 계정 동기화 가능. **직접 계산한 스팟에서 만든 문제와 그 연습 기록은 로그인해도 기기에만 남고 계정 저장·동기화되지 않는다.** 세 범위를 혼합하지 않는다.
- 커스텀 엔진의 현재 기본 목표0.3%, 최대1,000회와 Study/Trainer 생성 목표0.5%는 서로 다르다. FAQ에는 변동 가능한 기본값 대신 최종 exploitability와 iteration 상한을 설명했다.
- 채점: pot의 0.35%/1%, 최소0.02bb/0.05bb. `0.08 / 5.5 ≈ 1.45%`, `0.08 / 22.5 ≈ 0.36%`. 두 번째는 최상0.35% 초과지만 허용1% 이내다.
- Heads-up postflop·chip EV. Preflop 차트는 참조, Equity는 all-in 지분 계산. ICM 계산 기능으로 확장하지 않는다.
- PWA/offline은 필요한 데이터·엔진을 온라인에서 먼저 로드해야 한다. iOS/Safari 단일 thread 제한도 유지한다.

13개 예제의 제목은 `src/presets.ts`의 `titleHi`와 축어 대조하며, 전략 해설은 §4-B와 최신 MS의 수정 수치를 따랐다. ⑩은 top pair/overpair/A-high를 혼동하지 않는다.

## 7. 검증·배포 기록

- 독립 제품 검수: 13개 titleHi·3개 그룹명·보드·수치 일치, FAQ23·저장 범위·node lock·EV·UI 대조 완료. 교열에서 문법3곳, JSX 공백6곳, range가 GTO라고 단정할 수 있는 표현과 OOP/IP 행동 순서 설명을 수정했다.
- 최종 `npm run build` **EXIT=0**(prebuild/postbuild 포함). 2026-09-14 20:49 KST 산출물 검사에서 **12언어 FAQ252**, featureList·canonical·hreflang12·CTA언어·HI/MS 각8내부경로·sitemap 통과. 로그 `tmp/hi-solver-build.log`, `tmp/hi-solver-audit.log`.
- 실제 로컬 production 화면을 데스크톱1920px·모바일390px에서 확인. 문서 가로 넘침 없음, 2열 표 줄바꿈·3/4열 표 내부 스크롤. 힌디어 결합문자 표시 및 수정한 공백 정상. 뷰포트 원복.
- `npm run typecheck`는 기존 **596건** 때문에 실패했다. 직전 MS 검사596건과 비교해 오류 내용은 같고, bottom-tab-bar의 기존 TS2345는 행번호·union 출력 순서만 달랐다. 신규 HI3파일 타입 오류는 없다. 전체 타입 검사가 통과했다고 보고하지 않는다.
- **운영 배포 대기**. 배포 후 실제 URL·커밋·검증 결과를 이 절과 HI 포스팅 정본에 기록한다.
