# 잔여 작업 마감 실행판

사용자 승인: 2026-09-22 「추천순서대로 해줘」. 과거 완료/기각 작업을 재실행하지 않고 현재 미결만 처리한다. 상세는 기존 정본 대기열에 두고 여기에는 순서·담당·완료 증거를 기록한다.

| 순서 | 묶음 | 담당/범위 | 상태 |
|---|---|---|---|
| 1 병렬 | Q14 MA-148 | 기존 queue CLI, 포스트 수정 | 603deb7a 머지·086161eb 배포, 라이브·IndexNow·MB-079 마감 완료 |
| 1 병렬 | CALC-SHARED-2 | harden-calc-ko, 공용 후속8건+H-2 중복 통합 | 4849f3c8 머지·679f854a 배포/라이브 완료 |
| 1 병렬 | 대기열 최신화 | 본체, 완료중복/실제미결/보류/시한 대조 | 실사 완료·원문 보존 |
| 2 | Q8-a → Q8-b | PT → ID/DE | PT 0c74affa 머지·미배포; ID 준비만/DE 미착수 |
| 2 | CALC-H1 | K9s/Q9s/J9s 티어 보강, 공용8건 머지 후 | 45177757 머지·086161eb 배포, 라이브 실제 선택 확인 완료 |
| 3 | 사실 오류 잔여 | EN-먼저·ar 동기화·KO/중문 개별 오류 | 일부 push; 규칙21편/EN7 미커밋 초안, 세부 아래 |
| 4 | 표현·구조 잔여 | EN 확률 직답/FAQ·이미지 정합, 언어별 잔여 | PDF/ES push; EN7 초안/나머지 미착수 |
| 5 | 통합 마감 | main 순차 머지·검증·배포·정확 URL IndexNow·문서·lane sync | round1·round2 완료. 후속 묶음은 사용자 새 지시 대기 |

## 실행 경계

- 파일 소유권으로 병렬화한다. 같은 파일을 두 레인이 동시에 편집하지 않는다. main push/배포는 본체만.
- 각 회차에서 새 치명 오류와 자기 회귀는 해결, 무관한 개선은 새 미결로 분리. 완료 건수를 부풀리거나 범위를 몰래 줄이지 않는다.
- H-3 오프수트 확장·Analytics 설정/GA 로딩방식은 사용자 판단 대기. 예정일 관측·새 기능·SEO 확장·기각 재론은 이번 실행 밖.
- 현재 계산기 추가 작업은 본체 하위 에이전트가 기존 harden-calc-ko에서 담당한다. 기존 계산기 CLI 창에 중복 지시하지 않는다.

## 본체 소품

- 우편함 MB-054의 인용문 파이프2개를 HTML 엔티티로 바꾸고 MB-067의 빠진 포인터/확인 열을 복구했다. 본문 주장·ID·발신일·수신 확인 상태 불변. 게이트 파손0·열결손0 확인.

## 실사 결과

읽기전용 실사 완료. 오래된 목록의 수량을 전체 잔여 수로 쓰지 않는다. 원본 대기열의 일괄 삭제는 보호 검사에서 거절되어 원문은 보존하고 아래 판정표로 실행 대상을 걸러낸다.

| 구분 | 확인된 대상 | 다음 처리 |
|---|---|---|
| 완료 중복 | Q4-b/MA-118, Q6-c echo19, zh-hant beginners 카드6, EN all-in TDA47, pt 스탬프부재2/옛AJo, de outs19.1/19.6, zh hand-chart404/KO도구누수, APT 개막전 수 재실측 | 재작업 제외. WORKLOG·현행 코드 확인 |
| 기각 | GA page_view121 유실명제, cooler J-2 정의 재론 | 기존 settled 판정 유지 |
| Q8-a | pt vazamento8파일21자리(전략용어20·손실비유1) | Q14 머지 후. dar/deu raise·홀카드 다양성·mesa 관용구는 과거 유지 판정 보존; strategy/tvc EN패리티는 pt 단독 이동 금지 |
| Q8-b | id 액션cek/판tangan/board=meja, de rabatt4파일·Lecks | 의미별 판정; 일반동사 cek와 Side Pot 괄호풀이는 정상 |
| 룰·동기화 | ar drift6, 꼬리 all-in/showdown 쌍, EN showdown tldr, fr A.R.7 | 정책상 전파 범위 확인 후 여러 자리 같이 |
| 스트래들 | en-first §2-I: 최초 straddler 마지막/UTG한정/button유일 | EN-먼저→해당 사본 |
| 확률 | EN probability 무조건콜·equity 두장전제/three players; odds4직답·FAQ·pot-odds 이미지 | 사실 정정과 표현 정리를 같은 묶음으로 |
| KO | odds-calculator 완성률/승률 라벨6자리, APPT echo1 | lib/posts.ts와 NEW 구분 |
| 중문 | zh glossary 50%/c-bet분류, zh-hant rake 전원 이익 | Q14 완료 diff 대조 후 소품 |
| 기타 사실 | EN shc 첫탈락페어, tournament 계정2개, paired-board 리버조건 | 기존 en-first 재료 실잔존 |
| 연결·표현 | cooler J-1, PDF 카드 크롬, de M경계/계산기링크, fr 링크 | 기각·현지편차 구별 후 마감 |

현재 main 게이트 실측(09-22): echo1·기타43·count/pointer13 후보, 핵심 drift6 모두 ar, es 숫자 혼용2편(APT인천/WSOP). 전역 결함 총계가 아니라 게이트 커버리지 안의 기준선이다.

우편함 MB-054/067 형식 복구 완료: ID77개 보존, 파손0·열결손0. 기존 본문 주장과 수신확인 상태는 바꾸지 않았다.

소품 마감: KO odds 라벨/APPT echo, fr FAQ접두7/계산기앵커1은 e897bae4·679f854a 배포/라이브 완료(MB-078). 나머지 동형 규칙·다국어 범위까지 완료했다는 뜻이 아니다.

## 새 세션 이관 체크포인트 — 2026-09-22

**최신 지시: “정리해줘 새새션에서 작업하게”. 기존 일괄 실행을 여기서 중단했다.** 위 실사표는 당시 목록이며 아래 현재 상태를 우선한다. 부분 완료를 전체 완료로 바꾸지 않는다. 새 세션은 한 묶음만 정하고 나머지는 보존한다.

### 1. 완료·검증·배포를 분리한 현재 상태

| 묶음 | 코드 상태 | 아직 남은 마감 |
|---|---|---|
| CALC-SHARED-2 + KO odds/APPT + FR 접두/앵커 | 4849f3c8/e897bae4/679f854a, 라이브 확인·IndexNow·MB-078 완료 | 재작업 금지 |
| H1 K9s/Q9s/J9s T3 | c9be34bb → 45177757 머지; 086161eb에 포함하여 push | ✅ 공개 UI 세 조합 T3·조건부 권고 확인 |
| Q14 | 3cfabdc6 + 독립검수 수정8bfcd35c → 603deb7a 머지; push됨 | ✅ round2 라이브·IndexNow·MB-079 완료 |
| core/ar 규칙 38편 | 4834860d, 독립검수/게이트 후 push | ✅ round2 라이브·마감 완료 |
| zh glossary/zh-hant rake | 64b8cf65, 독립검수 후 push | ✅ round2 라이브 마감. 당일 IndexNow 기접수라 중복 제외 |
| 공통 PDF 카드 크롬 | 05e4cfd2, 26언어35글37카드 HTML 변환 대조; push | ✅ round2 라이브 콘텐츠 마감. 이전에 남긴 일부 픽셀 육안 미검사는 전체 재검수로 열지 않음 |
| ES APT/WSOP 숫자 구분자 | 7275c934, 값 보존·독립검수 후 push | ✅ round2 라이브·마감 완료; 기계적 수정이라 updated 미변경 |
| KO 위치/EQR·BB FAQ | 649c2f0c, 실제 slug position-is-everything-in-holdem; push | ✅ round2 라이브·마감 완료 |
| Q8-a PT 8편21자리 | a5def6b7 → 0c74affa 머지, 독립 diff/게이트 통과 | **아직 main 통합 빌드·push·라이브 없음** |
| 규칙 tail/core 요약 | main 미커밋 포스트21 + 브리프; 아래 참조 | 자체검사·독립검수·미착수20편 모두 남음 |
| EN 확률7 | calc 워크트리 미커밋 포스트7 + 브리프 | 본체 독립검수부터; 번역·이미지·빌드 없음 |
| Q8-b ID/DE | ID A 준비만, DE 미착수 | 새 회차 범위로 별도 선택 |

H1은 T3 타입9→12(콤보54→66), T4 타입89→86(510→498), 상위1–4 합계654/1326=49.3213% 불변. 나머지166타입 불변. 계산기 독립 테스트·parity 통과. H3 확장과 구별한다.
Q14는 30포스트+이미지/템플릿/문서. 검수 때 Hant 중복 직답·브리프 분자/분모·cbet sizing 별명 선행어 3건을 수정한 뒤 머지했다. 990runout=341승/0무/649패(34.4444%); 13캡처의 IP actions는 비어 있어 IP65–75 근거로 사용하지 않았다.

### 2. 실제 배포 확인 재개 지점

- 마지막 push **086161eb**. main의 콘텐츠 HEAD **0c74affa**는 그 뒤 PT 머지를 포함하므로 아직 배포 버전이 아니다. 문서 마감 커밋도 뒤에 붙을 수 있다.
- 보존된 **.next는 603deb7a 콘텐츠 + 생성 sitemap69**로 빌드한 round2 산출물이다. 소스에는 그 뒤 PT 및 미커밋 규칙 초안이 있으므로 **현재 main에서 먼저 rebuild하면 검증 기준이 바뀐다**. 먼저 보존 산출물/배포 버전을 확인한다. 산출물이 없으면 별도 안전한 작업 위치에서 정확 커밋을 재현하고 초안을 건드리지 않는다.
- build773 통과. 로컬 검증 **118URL=106포스트+12계산기**, FAQ1325 일치, article106 일치, HTTP200·390px overflow0·pageerror0. 증거 **tmp/closeout-round2/local.json** (인계 시 재확인).
- ru/tr beginners의 FAQ는 원래 없음: 2개만 예외 처리했다. 모든 URL에 FAQ가 있다고 주장하지 않는다.
- 첫 시도는 구 배포 응답으로 중단됐지만 2026-09-22 (7) 재실행에서 **118 URL 전건 통과**했다. 증거 `tmp/closeout-round2/live.json`: FAQ1325·본문106 일치, HTTP200·390px overflow0·pageerror0.
- 재개용 검증 스크립트 **tmp/closeout-round2-verify.mjs**: 인수로 사이트 base를 받으며 frozen118경로와 .next HTML을 비교한다. 예: node tmp/closeout-round2-verify.mjs https://www.holdemmaster.com . 먼저 코드/기준 산출물 확인. tmp는 git ignored이지만 현재 같은 PC에 보존됨.
- 로컬 서버3113(session32710)는 인계 시 Ctrl+C로 종료했다. 필요할 때만 재기동.
- sitemap69 URL 날짜만 변경(추가/삭제/비블로그0). FAQ나 본문을 바꾸지 않은 ES2 및 이미 당일 날짜인 zh2 때문에 수정 포스트 수와 lastmod 수는 다르다.
- **IndexNow round2 완료**. 고정118에서 계산기12와 당일 기접수 포스트3(FR beginners·ZH glossary·ZH-Hant rake)을 집합 제외해 **고유103**을 dry-run으로 재계수한 뒤 HTTP200 접수. 접수≠색인.
- 화면 증거: tmp/screen/closeout-round2 및 closeout-pdf-full. KO390 새 요약/직답, AR390 cash/tournament 표, Q14 실제 webp는 본체 육안 확인. Hant positions 원본 세그먼트 및 DE/AR PDF 카드 전체 육안 확인은 덜 끝났다. PDF selector crop 명령2회 실패는 제품 실패가 아니라 검사 미완료이며 성공으로 보고하지 않는다. 콘솔 Vercel 로컬404/GA요청 실패는 pageerror와 분리했다.

### 3. 미커밋 작업 소유권 — 그대로 보존

**main / Holdem_Project**
- core showdown tldr9: en/ar/de/es/id/ja/pt/zh/zh-hant.
- tail fr/it/ro/pl/ru/uk × all-in/showdown =12. 합계 **21포스트 초안**.
- ID showdown의 action check 7줄/9토큰 범위는 이 초안에 포함(새 tldr1+본문6); Q8-b에서 또 수정하지 않는다.
- 남은 tail **bn/fa/fil/he/hi/ms/sw/th/tr/vi ×2 =20포스트** 미착수. TR 시도는 사용자 중단 지시 후 실행되지 않았고 우회하지 않았다.
- 날짜 마감/AST 보존/audit/독립검수/빌드 **모두 미완료**. 전체41편 완료로 읽지 않는다. 소유 브리프 docs/harden-brief/rules-closeout-tail.md의 최신 이관 절 우선.

**../Holdem-calc-ko / harden-calc-ko, HEAD603deb7a**
- EN holdem-probability / holdem-pot-odds / holdem-outs / holdem-drawing-odds / holdem-equity / holdem-implied-odds / holdem-card-counting 7개 + docs/harden-brief/probability-closeout.md §7.
- 자체 검증: 새 직답27개47–56words, 표/카드/이미지 줄/FAQ질문 보존; 산술·링크·FAQ 게이트 통과. EN answer-echo의 length27 경고는 게이트 단위 mismatch 보고이며 코드 미수정. cross-table 매칭0은 검사 통과가 아니라 커버리지 없음.
- 본체가 odds4 diff를 일부 읽었으나 **독립검수 승인 전**. 특히 pot-odds 새 ratio 직답의 '첫 숫자+1의 역수'는 **x:1로 정규화된 비율에만 성립**하므로 문맥/조건을 확인할 후보(아직 확정 수정 지시/반영 없음). equity/implied/card-counting diff 독립검수도 남음.
- EN만 수정. core7 번역, pot-odds 잘못 연결된 이미지8 교체, ja 지역조건, build/UI 전부 미실행. premium 이미지 자산 자체를 덮어쓰지 말 것(다른 글 정상 사용).
- 이 워크트리의 §7은 main 브리프에 아직 없으므로 파일 경로를 혼동하지 않는다. git add -A/강제동기화 금지.

**../Holdem-queue / harden-queue, HEADa5def6b7 clean**
- Q8-a main 머지 완료. Q8-b ID A만 준비했으며 파일쓰기0.
- 준비범위25파일179소스줄: action check31줄37토큰, 한 판 hand70줄106토큰, board79줄111토큰(positions:167 중첩1). showdown7줄9토큰은 위 main 소유로 제외.
- SHC176/180의 보유패 tangan, equity42/position-play102/positions32/strategy22·193/tvc303의 혼합 의미, hand-rankings197의 물리적 meja는 보존. inspection cek/papan도 유지. title/seoTitle/desc/tags·카드·숫자·링크목적지·이미지경로 동결. 본문 alt/caption·FAQ질문·링크표시명 일부와 tldr2는 대상에 포함되므로 무조건 메타 불변이라고 주장하지 않는다.
- 수정 재개 전 docs/harden-brief/queue-Q8-b-id-de-잔여.md 및 docs/keyword-bank/id-posting-reference.md §5/5A. DE는 별도 회차, 미착수.

### 4. 남겨 둔 기존 미결 / 마감 문서 부채

- 다음 사실 묶음(미착수): EN/core SHC77/88 첫 탈락 페어, tournament WSOP 계정2개(LIVE+Caesars), EN paired-board의 22 counterfeit 리버조건, flush-vs-straight 반복 설명. 정확 범위는 en-first 정본에서 고정 후 착수.
- 표현/연결(미착수): cooler J1 라벨수렴(정의상 참인 명제 자체를 오류라고 부르지 않음), EN hand-rankings short-deck 중복, DE 용어/M존/계산기링크. M존은 연속값 10≤M<20/6≤M<10/1≤M<6; 무조건 정수10–19로 바꾸지 않는다.
- DE calculator related8은 EN parity라 bubble 링크 때문에9개로 늘리지 않는다. FR 앵커/FAQ접두는 이미 round1 완료; 다시 열지 않는다.
- KO 블로그 내 Rule4 캡션과 exact 값 동형 잔여, APT90+46 분류는 별도 미결이며 이번 공용계산기/개막전135 작업과 동일시하지 않는다.
- **TDA 판본 부채**: 2026 v1.1(9/21)에서 번호가 바뀌었다. 이번 core/tail의 새 구번호 인용은 2024판을 명시했지만 기존 전역 무판본 인용을 전부 이행한 것은 아니다. 전체 번호 교체는 새 별도 작업. 현행 출처/대조는 규칙 브리프에 보존.
- round2 **MB-079, Q14 진행표/각 로케일 HARDEN 통지, H1 완료 표기, `settled-decisions` §3-T, IndexNow103, lane sync** 완료. Q14 solver 캡처 IP actions 빈 배열은 미검증 상태를 유지한다.
- ja/zh/zh-hant에는 Q14 §6-0 통지를 남겼고, `lane:status` BLOCKED0 확인 뒤 회차 마지막에 `lane:sync -- --apply`를 적용했다. 다음 세션은 이 완료 회차를 다시 동기화하지 않는다.
- 기존 장기 미결은 원래 대기열을 보존: re-entry zh/zh-hant 용어 판정, /hands noindex 반영 관측, 포커·홀덤 차이 신규 글 후보, solver-client5 SEO 표현, es LATAM, 우편함 회신 대기. 자동 착수 대상 아님. 시한은 update-calendar 정본.
- round2 완료 뒤 `tmp/closeout-round2-verify.mjs`만 정확히 제거했다. 증거 `local.json`·`live.json`과 화면 이미지는 보존했다. round1의 `tmp/closeout-shared-verify.mjs`는 이 회차 범위 밖이라 건드리지 않았다.

### 5. 새 세션 운영 제안

**086161eb 배포 검증·마감은 완료했다.** 다음은 사용자 선택에 따라 규칙 초안 또는 EN7만 한 묶음씩 연다. 실제 사실오류/번역누락/표현개선/자기회귀를 따로 분류하고, 검사 자리·수정 파일 수를 결함 수로 보고하지 않는다. 완료 글 전체 재검수·새 레인·대규모 후속은 자동 착수하지 않는다.
