# 힌디어 신규 포스팅 참고 정본

갱신: **2026-09-14**. 대상 **인도 힌디어 `hi`**. 기존 [translation-terms-hi.md](../translation-terms-hi.md)의 검증된 하우스 스타일에 이번 Google 인도·원문·실제 앱 조사를 합친다. 이번에 내린 결정은 이 파일을 우선하며 과거 코퍼스 실측·작업 이력은 기존 문서에 보존한다. 랜딩 작업 상세는 [hi-solver-landing-brief.md](../hi-solver-landing-brief.md).

## 1. 다음 글 작성 시 바로 적용할 기준

- 독자는 힌디어를 읽는 포커 학습자. **쉬운 데바나가리 산문 + 라틴 영어 포커 용어**, `आप` 존댓말로 쓴다. `तुम`으로 바꾸거나 어려운 산스크리트식 직역을 만들지 않는다.
- 패는 **हैंड**, 무료는 **मुफ़्त**, 브라우저는 **ब्राउज़र**, 일반 솔버 명사는 **सॉल्वर**. 전체 글을 로마자 Hinglish로 다시 쓰지 않는다. `poker kaise khelte hain`처럼 검색·입문 문맥에 필요할 때만 자연스럽게 병기한다.
- **range, equity, bet, raise, fold, call, check, all-in, pot, stack, flop, turn, river, preflop, bluff**는 라틴 유지. 첫 등장에 쉬운 뜻을 한 번 붙이고 이후에는 같은 표기로 일관시킨다.
- 족보도 Royal Flush부터 High Card까지 **라틴 표기가 기존 코퍼스 정본**이다. 검색 결과의 음차 족보를 보고 기존 8편과 다르게 쓰지 않는다.
- `call`을 전화, `check`를 검사, `river`를 강으로 직역하지 않는다. 일반 산문의 बोर्ड와 정확한 UI **Board**는 구별한다. 기술 문맥의 라틴 `board`도 기존 혼용 관습 안에서 쓸 수 있으며, 앱 예제명·버튼을 일괄 치환하지 않는다.
- 숫자는 라틴0–9, 소수점`.`. 예제 값은 그대로 유지한다(`2.5`, `1,326`, `0.35%`). 카드 `A♥7♦2♣`, bb, 통화도 보존하며 `$`를 근거 없이 `₹`로 바꾸지 않는다. 기존 예제의 자릿수 관습을 모든 미래의 큰 금액에 대한 규칙으로 확대하지 않는다.
- UI를 안내할 때는 아래 §5 실제 버튼이 일반 문체보다 우선한다. 수치·기능은 포스팅 때 최신 앱·전략 정본을 다시 확인한다.

## 2. 기존 글과 코퍼스 근거

`lib/posts-hi/index.ts` 등록 **8편**. 다음 slug는 `/hi/blog/` 뒤에 붙는다. 2026-09-14에 8편 모두 GET **200**, HTML `lang=hi`를 확인했다.

| 글 slug | 의도·연결 용도 |
|---|---|
| texas-holdem-rules-for-beginners | poker kaise khelte hain / 홀덤 입문 규칙 |
| holdem-game-order | 게임 진행·행동 순서 |
| holdem-betting-actions | check/call/fold, bet/raise 규칙 |
| holdem-blind-meaning | small blind·big blind |
| holdem-all-in-rules | all-in·side pot |
| holdem-showdown-rules | 카드 공개 순서·showdown |
| holdem-hand-rankings | 족보·비교 |
| holdem-tournament-vs-cash-game | tournament와 cash game·칩 가치 |

현재 8편은 입문 규칙 글이며 GTO 전략 시리즈가 아니다. 독립 HI calculator/hand-chart나 13개 전략 예제 글의 URL을 추측해 만들지 않는다. `/hi/solver`를 도구 페이지로 사용하고, 프리플랍 차트·equity는 실제 솔버 앱 탭으로 연결한다.

이번 재계수는 index를 제외한 8개 소스 전부를 이어 붙여 **142,278 UTF-16 code units**였다. 대소문자 구분·Unicode 문자/결합문자/숫자/밑줄/하이픈 경계 기준으로 हैंड251, hand20, हाथ15, range6/रेंज0, equity11/इक्विटी0, bet135, raise143, fold75, call118, check63, pot121, stack36, आप190/तुम0. 무료 표현은 부분문자열 기준 मुफ़्त19/मुफ्त0/निःशुल्क0이었다. **기존 9/6 문서와 경계 방식이 달라 수치 차이를 문체 변경으로 해석하지 않는다.** 입문 코퍼스의 적은 range/equity 표본을 현지 GTO 전문 용어의 대규모 실측으로 소개하지 않는다.

## 3. Google 인도 조사에서 얻은 검색의도

2026-09-14 Chrome Google **`gl=in&hl=hi&pws=0`**, 하단 भारत·비개인화·상세 위치 미확인. 실제 인도 IP나 도시별 순위 실험이 아니며 검색량을 측정하지 않았다.

| 실제 쿼리 | 관찰 | 다음 포스팅에 활용 |
|---|---|---|
| GTO poker solver free hindi | HI Google Play와 India App Store가 나왔지만 `l=mr` 마라티어, `l=gu` 구자라트어도 섞였다. | 스토어 지역과 실제 본문 언어·지원 언어를 각각 확인한다. |
| पोकर GTO क्या है | 영어 전문 페이지를 Google이 힌디어로 번역한 결과가 다수 보였다. 원문 URL과 `translate.google.com` URL이 함께 있었다. | 힌디어 스니펫을 현지 힌디어 원저작물로 인용하지 않는다. 쉬운 HI 개념 설명은 직접 작성하고 기술 내용은 원출처로 확인한다. |
| पोकर सॉल्वर मुफ़्त | 솔버 앱, 영어 도구, 교육 글·Reddit의 자동 번역이 섞였다. | 도구 진입 글은 전략 계산/연습 의도를 첫 문단에 밝히고 실제 예제로 연결한다. |

- **GTO 단독**은 인도의 Group Testing Officer/SSB 준비와 겹친다. `पोकर` 또는 `poker`를 함께 써서 포커 의도를 분명히 한다. [SSB with ISV 원문](https://ssbwithisv.in/aboutssbwithisv).
- **solver 단독**은 수학·Excel과 겹친다. [Microsoft 공식 Solver 설명](https://support.microsoft.com/en-us/excel/define-and-solve-a-problem-by-using-solver).
- `free poker`/`मुफ़्त पोकर खेलें`는 게임 접속·가입 의도와 섞인다. 계산·학습 도구 글을 게임 가입 글로 바꾸지 않는다.
- 입문·족보 키워드는 위 기존 글이 담당한다. 새 solver 제목을 범용 입문 검색어로 채우지 말고 본문에서 해당 글로 연결한다.
- 검색 결과의 무관한 포커 SEO 문서나 정부 도메인 하위 경로는 도메인만으로 신뢰하지 않는다. 이번 작업에서는 열지 않은 결과를 원문 출처로 사용하지 않았다.
- `मुफ़्त GTO पोकर सॉल्वर — सीधे ब्राउज़र में`는 이번 **편집 선택**이다. 검색량 1위 어순이라는 뜻이 아니다. 다음 글 주제는 해당 주제의 SERP를 다시 읽고 정한다.

## 4. 재사용할 출처와 사용 한계

아래는 2026-09-14 원문 확인 자료다. 출처 전체 문장을 복사하지 않고 의미와 용어를 참고한다.

| 출처 | 확보한 정보 | 지켜야 할 한계 |
|---|---|---|
| [PokerBaazi 포커 교육](https://www.pokerbaazi.com/blog/odds-in-online-poker) | 인도 서비스가 영어 GTO 전문 용어를 사용한다. | 영어 문서이며 HI 원어민 문체 근거는 아니다. 게임·가입 카피를 가져오지 않는다. |
| [PokerListings.in HI 입문 글](https://www.pokerlistings.in/how-to-play-poker) | HI 초심자 설명과 포커 용어 혼용. | 인도 대상 판이나 운영국 미확인. 어색한 번역·음차 족보도 있어 프로젝트 정본을 우선한다. |
| [POKER Q’z Google Play HI](https://play.google.com/store/apps/details?hl=hi&id=com.pokerqz.twa) | 데바나가리 문장에 GTO poker ranges·board texture 같은 라틴 기술 용어가 들어간다. | 일본 도쿄 소재 CLOVIZ. 인도 현지 저술이나 인간 원어민 교정으로 분류하지 않는다. |
| [Solver+ India App Store HI](https://apps.apple.com/in/app/solver-poker-gto-strategy/id1530767783?l=hi) | `मुफ़्त` 스토어 표기. | UI만 HI, 설명·지원 언어는 EN. 인도 스토어 등록이 HI 앱 지원을 뜻하지 않는다. 경쟁사 가격은 별도 최신 확인 없이 쓰지 않는다. |
| [Chrome 공식 HI 도움말](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=hi) | `ब्राउज़र` 등 일반 UI 용례. | AI 번역 가능성 안내가 있다. 인간 원어민 감수 증거가 아니다. |

이번 조사로 인도에서 직접 발행한 HI GTO solver 전문 교육 글을 확실히 확보하지 못했다. **그런 글이 없다거나 수요가 없다는 결론은 아니다.** 과거 GetMega HI 경로는 이번 열람 실패로 새 근거에 포함하지 않았다.

## 5. 솔버를 소개할 때 사용할 실제 HI 라벨·제품 사실

확인일2026-09-14, [실제 HI 앱](https://solver.holdemmaster.com/?lang=hi), [앱 소스 고정 SHA](https://github.com/fire7964coco-prog/holdemmaster-gto-solver/tree/0ef519441ff1863636c6ba665d188427b2f5d9e0/src). UI는 변경될 수 있으므로 다음 글 작성 때 재확인한다.

| 용도 | 정확한 라벨 |
|---|---|
| 소개·사용법 | परिचय / कैसे इस्तेमाल करें |
| Study Spots·미리 계산된 결과 | अभ्यास स्पॉट / परिणाम देखें / खुद गणना करें |
| 입력 순서 | ① OOP Range → ② IP Range → ③ Board → ④ Bet size(सेटिंग) → ⑤ गणना करें |
| 계산 실행 | Tree बनाएँ → Solver चलाएँ |
| Trainer·Daily·복습 | GTO Trainer / आज की चुनौती / दोबारा देखें |
| 참조 탭 | Preflop चार्ट(Range) / Equity(**हिस्सा**) |
| 개인 문제·탭 | इस स्पॉट का अभ्यास करें / मेरे स्पॉट / प्रीसेट अभ्यास |
| 개인 약점 복습 | गलतियों का अभ्यास |
| node lock | इस नोड की रणनीति लॉक करें / रणनीति लॉक करके फिर गणना करें / पहले और बाद की तुलना |
| EV 판정 | सर्वोत्तम / स्वीकार्य / नुकसान वाला चुनाव |

- 학습 순서: 초보자는 अभ्यास स्पॉट → परिणाम देखें로 결과 읽기부터 시작. 그다음 range·board·bet size를 바꾸며 직접 계산한다.
- 엔진은 **heads-up postflop, chip EV**. Preflop 차트는 사전 참조이며 preflop 전략을 재계산하는 기능이 아니다. Equity는 all-in 지분, solver는 전략 빈도·EV를 계산한다. ICM 지원을 주장하지 않는다.
- 노드락은 상대 전략 등에 제약을 고정한 뒤 응답을 계산한다. 무제약 GTO 균형이나 무조건 최적 전략으로 소개하지 않는다.
- 저장 범위는 반드시 나눈다. Study Spots·Daily의 연습 기록만 선택 로그인으로 계정 동기화 가능. **직접 계산한 스팟의 문제와 그 연습 기록은 로그인해도 기기 한정**이며 계정 저장·타기기 이어하기가 안 된다.
- 채점은 pot의0.35%/1%, 최소0.02bb/0.05bb. 낮은 액션 빈도만으로 오답이라 하지 않는다. 0.08bb손실은5.5bbpot에서약1.45%,22.5bb에서는약0.36%.
- 현재 커스텀 목표0.3%·최대1,000회와 Study/Trainer 생성 목표0.5%를 혼합하지 않는다. 기능 소개에서는 고정 기본값보다 최종 exploitability 확인·반복 상한을 설명한다.
- 오프라인은 필요한 앱 데이터·엔진을 온라인에서 먼저 불러온 뒤 가능하다. iOS/Safari는 단일 thread다. 모든 계산이 즉시 끝난다는 약속을 하지 않는다.
- 13개 예제 이름은 `src/presets.ts`의 `titleHi`, 보드·전략·수치는 `docs/gto-solver-series-spec.md §4-B`를 대조한다. 앱의 오래된 전략 설명을 그대로 번역하지 않는다.

## 6. 다음 신규 글 기획에 쓰는 방법

1. 기존 8편과 주제가 겹치는지 확인한다. 초보 규칙 글은 기존 URL로 연결하고, GTO 개념·range 읽기·equity와EV 차이 등 새 주제는 실제 주제 검색을 별도로 한다.
2. 델리 HI 교육 편집자, 인도 검색의도 분석가, 제품 검수자, 초심자 독자의 **AI 역할**을 나누어 작성·검수한다. 실제 현지 전문가 감수라고 표시하지 않는다.
3. 해당 글에 필요한 원출처를 읽고 지역/본문 언어/자동 번역/운영자 구분을 기록한다. 이 파일의 9/14 SERP를 영구적인 최신 시장 자료로 취급하지 않는다.
4. 문체·수치·UI를 각각 검토한다. range의 가중치, OOP/IP 행동 순서, EV 손실과 승률, node lock과GTO, 기기 저장과계정 동기화를 혼동하지 않게 한다.
5. 제목·설명·FAQ·내부 링크가 같은 의도를 설명하는지 확인하고 실제 렌더링을 본다.

## 7. 배포 상태

힌디어 랜딩 구현·로컬 빌드·12언어 FAQ252 대조 및 모바일 검증 완료. 운영 배포 대기 중이며 완료 후 실제 URL·커밋·검증 결과를 여기에 기록한다.
