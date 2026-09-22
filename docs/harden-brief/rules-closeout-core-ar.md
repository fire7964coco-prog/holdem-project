# A 브리프 — 규칙 잔여 core/AR 마감 (2026-09-22)

## 0. 승인·소유·경계

- 사용자 승인 잔여 마감 플랜, 본체 작업 배정. 시작 main HEAD 679f854a. 신규 전면검수 아님.
- 소유: en/ar/de/es/id/ja/pt/zh/zh-hant × holdem-game-order, holdem-betting-actions, holdem-blind-meaning = 27파일. AR holdem-all-in-rules, holdem-showdown-rules, texas-holdem-rules-for-beginners = 추가 3파일. 최초 30포스트. 독립검수에서 전파 원문의 같은 FAQ 결함을 발견해 본체 승인으로 EN/core7 showdown FAQ만 추가, 최종 38포스트와 본 브리프만.
- Q14 워크트리 실제 git status와 교집합 0. Q14의 3bet/limping/position-play 및 zh/zh-hant 다른 글은 열지 않는다.
- 제외: 꼬리16 전부·그 game-order 셀, KO/FR 소품, EN/core showdown tldr, 전 로케일 TDA 판본 전환. 공용 문서·메일박스·queue 진행·커밋·push·build 불가.
- 각 파일 헤더 전부 읽음. 동결 명제 변경 없음. 제목·seoTitle·desc·tags·이미지·카드·링크·FAQ 문항 수 보존. AR betting tldr의 규칙 조건만 허용. 교열 스킬은 문체 보존·증거 대조에만 사용하고 마케팅 확장은 하지 않는다.

## 1. 공식 근거와 판본 경계

### 1-A. WSOP 2026 — 기존 덤프와 공식 현재 PDF 대조

- 공식 Live Action PDF: https://assets.wsopcdn.com/wsop/853ee602-e1e9-4019-a0cf-381419d805c6.pdf
- 공식 Tournament PDF: https://assets.wsopcdn.com/wsop/1a72ba28-781c-409d-a9c3-5ca13c4c5718.pdf
- 기존 docs/sources/wsop-2026-live-action-rules.txt B149 L705–709, B159/165 L772–776/798–808, B174–177 L869–883 직접 읽음. 현행 PDF 같은 조문 확인.
- B165: UTG 또는 버튼 straddle, 버튼 우선; 일부 게임 re-straddle 허용. 그러므로 최초 straddler가 무조건 마지막이 아니며 현재 가장 큰 live post에 맞춰 체크 가능 여부를 판단한다.
- B149: 사이드팟 참가자 우선 공개는 현금게임 전반. 리버 전 베팅 종료 시 올인자 먼저 공개는 no-limit 한정. 한정어를 조문 전체에 걸지 않는다.
- B174–177: 베팅 하한·짧은 올인 예외·플레이어별 재개방. 신규 숫자나 새 예시는 추가하지 않고 기존 EN 예시만 전파.
- Tournament103/117 현행 대조: string bet의 다중동작·기망, 액션 남은 카드 노출의 토너먼트 처벌. WSOP 룰북 한정 보존.

### 1-B. TDA — 현행 재번호화 발견, 제한정정 승인

- 공식 안내: https://www.pokertda.com/poker-tda-rules/
- 안내에서 연결한 공식 공개 폴더: https://www.dropbox.com/scl/fo/mta1wai9r2u8rcierocz3/ANbe4au_y0Pl2kowJe0dnXA?dl=0&rlkey=z6fqvd49e1w4rwf2d39s04b1d&st=gjgodgb7
- 공개 ZIP(dl=1)의 현 파일: 2026 Poker TDA Rules PDF Longform Vers 1.1 final.pdf 및 DOCX 동명. 문서 Version 1.1, September 21, 2026 확인. 관련 조문은 DOCX XML을 메모리에서 추출해 직접 읽었으며 파일 저장 없음.
- 기존 docs/sources/tda-2024-rules-v1.txt의 14·16·17·18·43·44·45·47·48 및 부록16과 대조: 이번 명제 의미는 동일. 현행 번호 대응은 14→15, 16→17, 17→18, 18→19, 43→45, 44→46, 45→47, 47→49, 48→50.
- 본체 승인: 이번 AR 인용과 새로 정정한 core betting FAQ 인용은 기존 EN이 근거 삼은 **TDA 2024판**임을 명시한다. 번호만 2026으로 바꾸지 않으며 '현행 TDA'라 부르지 않는다. 2024판을 쓰는 이유는 기존 명제 전파와 전면 판본 전환의 범위를 분리하기 위해서다.
- 별도 미결: EN/다른 로케일 전반의 무연도 TDA 인용은 2026 재번호화 영향 조사·전환이 필요하다. 본 회차에서는 구현하지 않으며 본체가 장기 대기열로 넘긴다.

## 2. EN 선행 최소 정정 — en-first-queue §2-I

| 파일 | 현재 앵커 | 처방 |
|---|---|---|
| game-order | EN273 / de264 / es266 / id264 / ja307 / pt264 / zh294 / zh-hant297 / AR266 | straddler 체크·마지막 액션은 뒤의 raise/re-straddle이 없다는 조건. own post = the live bet 정관사 기준 및 BB no raised or straddled 보존 |
| betting-actions | EN77 / de79 / es78 / id78 / ja88 / pt79 / zh89 / zh-hant87 / AR78 | 체크 불릿의 BB no raise만으로 부족: straddle 없음, straddler 뒤 raise/re-straddle 없음. 표·FAQ와 충돌하지 않도록 현재 live bet 기준으로 표현 |
| betting-actions | AR8/52/75/94/221; zh-hant236 | AR BB-only 프레임 6사본 동시 전파. zh-hant FAQ의 같은 체크 기준 사본도 미납액 0로 정합화. 다른 core 표/FAQ는 이미 자기 live-bet 기준이라 불필요 재작성 금지 |
| blind-meaning | EN121/127/178; de124/130(해당 HU FAQ 없음); es/id/pt122/128/179; ja136/140/149/204; zh140/149/223; zh-hant131/140/209; AR122/128/179 | UTG만→허용 방의 버튼도 가능(B165, 버튼 우선·limit 불가 명시). HU의 '버튼이 blind 내는 유일한 경우' 문장 삭제, 앞의 정확한 HU 순서 보존. ja 직답 사본도 함께 수정 |

## 3. AR 전체 델타 대조 — 기준일 00:00 포함

기준일은 game-order 2026-09-07, 나머지5 2026-09-09. git log --since=<날짜>T00:00:00+09:00 -- lib/posts-en/<slug>.ts 와 각 커밋 show를 전건 읽었다.

커밋: 3f6684c1(game-order), 77953269, e47a3f2f, 125c83f5, c4d2b3f3, 522b57f8, b1fef0f9, b311d693, f38a4b14, a5a8c78b, 7263564a. 삭제·추가 양쪽을 대조했고 같은 날 변화도 제외하지 않았다.

| AR 파일 | 이미 반영: 유지 | 실제 미반영: 이번 정정 |
|---|---|---|
| all-in-rules | 09-09 tldr/side-pot/table-stakes/회수가능 머크. Q12 called52·silent push62·min24 134·미행동자185·누적예외214·run twice251/263·동시공개259 | 149/161/184 플레이어별 재개방; 195/247/259/263 B149 현금 분기; 222 머크 일화 캐시 한정 및 TDA16 대비 |
| showdown-rules | FAQ175 및 Q12 42/60/62/64/87/146/150 | 44/80/86/92/183 토너먼트/캐시 공개 분기 및 공개 시간;106 머크 AND→OR;154 Tournament117;171 열람권의 리버 콜러 주체;187 식별가능 회수 조건 |
| betting-actions | Rule103/90.d 133/185/229; Q12 221 own post = the live bet | 8/52/75/78/94/221 live-straddle 프레임;157 더 짧은 올인층;225 칩 남은 상대;229 최초동작/반미니멈 처분 |
| blind-meaning | stripe34, 104.a134, Q4/Q12 81/175/183, Q5 142 | 43 정상hand/dead button/HU 예외. 추가 §2-I는 위 표대로 |
| beginners | ×4 두장무비용310 및 Q5 서두363 | 203/207/436 NL BB 하한 표·본문·FAQ |
| game-order | HU349·승률311·정관사266·캡션132 | 139/357 토너먼트 올인 muck 예외;256/262 자기 차례 Fold/All-in 및 bet/call/raise;266 straddle 조건 |

### 유지·의도편차

- AR game-order 캡션132는 아세스 대 킹스라 올바름. EN 관용구 교정의 단어를 강제로 덮지 않는다.
- 현지 FAQ 링크·순서·용어·카드 예시는 보존. translation-terms-ar 정본의 MSA/서양숫자/라틴카드 유지.
- locale-intentional-diffs에 위 AR 규칙 누락을 승인한 항목 없음. Q12 미전파 유예는 영구 의도편차 아님.
- Q12가 이미 고친 called·최소24·동시공개·반환·run twice를 되돌리지 않는다.
- EN/showdown tldr 별건 및 꼬리 Q12 문안 부채는 열지 않는다.

## 4. 스탬프·보존·검증 계획

- EN4 및 core 동기 7로케일×4는 내용 정정 후 updated/masterUpdated=2026-09-22(EN에는 master 없음).
- AR은 위 전체 미반영과 이번 EN3 델타까지 실제 대조·반영 후에만 masterUpdated: game-order/betting/blind/showdown=09-22, all-in=09-21, beginners=09-13. updated는 실질정정일09-22. 미완료 앵커가 남으면 해당 stamp를 올리지 않는다.
- 불변: slug/title/seoTitle/desc/tags/image/imageAlt, 링크 목적지/개수, 카드·무늬, FAQ 질문/개수. 숫자 추가는 기존 EN 재개방 예시($10,$21,$11,$14,$7)·AR showdown 회수조건 100%·조문번호·TDA판본2024에 한정해 별도 diff 판정. 임의 수치 추가 금지.
- 검산: A10→21 차액11≥직전full10, 중간14콜러→21 차액7<10. 체크: BB2−2=0, SB2−1=1, straddle4일 때 BB4−2=2/straddler4−4=0, re-straddle8이면 최초straddler8−4=4로 체크불가. 본문에는 새 예시를 추가하지 않는다.
- 대상 audit:hard, answer-echo, FAQ schema/source, seo-sync, cjk/hangul/hygiene, structure, number-format, stamp, drift. 카드/숫자/링크/FAQ AST 전후 대조 + diff --check. 본체가 독립검토와 통합build/화면검증 담당.

## 5. 실행·검증 결과

### 구현·독립검수

- 38포스트 구현 완료. 정확한 파일군: en/ar/de/es/id/ja/pt/zh/zh-hant × holdem-game-order·holdem-betting-actions·holdem-blind-meaning·holdem-showdown-rules = 36, AR holdem-all-in-rules·texas-holdem-rules-for-beginners = 2. 본 브리프 외 문서·타작업 파일 수정 없음. 커밋·push·build·화면검증은 하지 않았다.
- 독립 검수자 q13b_rules_review가 원문과 실제 diff를 대조. 지적 2건 모두 기존 EN 문장에서 이번 AR로 전파된 규칙 예외 누락이었다. 본체 승인으로 같은 core 사본까지 최소 정정했고 2차 실제 문면 및 새 2024판 인용 재검에서 blocker 없음 회신.
- showdown FAQ: en182/ar183/de183/es191/id183/ja208/pt184/zh216/zh-hant211. no-limit cash의 올인자 우선 공개는 **리버 전에 베팅 종료**된 때라는 B149 조건 추가. 다른 showdown 본문·tldr은 이 추가 scope에서 변경하지 않았다.
- betting FAQ: en229/ar229/de237/es230/id230/ja261/pt231/zh259/zh-hant272. 첫 동작 칩은 2024 TDA44/45의 단일·복수 칩 call 규칙부터 적용. 43-A의 half-minimum은 총칩이 아닌 콜 초과 증분으로 판단하고 사전 raise 선언·all-in은 고유 규칙 적용. 추가 조문 인용은 **9언어 모두 2024판 명시**, 같은 문단43-A도 그 판본 문맥. 2026 대응45/46/47 의미는 공식 DOCX 재검 및 독립검수 일치.
- JA blind 직답136의 최초 번역에서 새 echo가 생겼으므로 버튼 허용 정보를 유지하면서 직답·본문 기능을 분리했다. 재실행 echo0. 기존 관용표현·FAQ질문은 유지.

### 소스 보존·검산

- 시작 원본38파일과 최종 TS AST 비교: 문법오류0, 허용 content/updated/masterUpdated와 AR betting tldr 이외 필드변경0. slug/title/seoTitle/desc/tags/image/imageAlt 및 나머지 필드 전부 동일. FAQ 질문·카드 토큰·무늬·마크다운 링크 대상과 개수 동일.
- 본문 숫자 토큰 델타 전수 대조: core8 betting은 44·45·2024 각1만 추가. AR game-order는 조문16×2/70/159/165와 판본2024×2; AR betting은43/44/45/159/165/2024 각1; AR all-in은 EN 예시7/10/11/14/21 각1, 조문16/47 각1·149×4, 판본2024×9; AR showdown은 조문14/18 각1·16×3·149×5, 회수 식별100%의100×1, 판본2024×16. 그 밖 숫자 토큰 증감0. 새 임의 수치 없음.
- 수학 반례: B149 리버100 bet→잔여50 short all-in call은 올인 콜러가 아닌 bettor 먼저. TDA44의100 bet→1000칩1개 무언 투입은 call(추가 동작으로 min-raise 강제 아님). 본문에 이 새 예시는 넣지 않고 판정 검산에만 사용.

### 최종 실행 게이트 (2026-09-22)

- audit:hard: 9개 locale 실행 후 소유38편 필터, 38/38 findings=[] (AR6+나머지8×4). git diff --check 대상38편 exit0.
- check:drift --strict: 핵심0, 꼬리100·추적불가9는 범위 밖 기존 부채. check:structure: 핵심결손0·링크개수결손0, 꼬리40 별도.
- check:answer-echo: echo0·기타42·count/pointer13. 기계 미판정251은 통과로 부르지 않음. 본 회차 신규 echo 없음.
- check:faq-schema: 렌더러 계약 일치, FAQ575/575 성립·깨짐0, FAQ없음2는 미판정. KO는 이 게이트 밖.
- seo-sync/hangul/hygiene 모두0. cjk0은 JSX254파일 검사이며 포스트 문장 의미 검증을 대신하지 않음. number-format 현재0(다른 작업의 기존 ES 정정도 반영된 전역 상태; 본 작업 수치 정정은 위 델타만).
- stamp: exit0이나 **미커밋 본문38편 updated09-22가 마지막 커밋보다 미래인 over38** 표시. under0. 거짓 통과로 처리하지 않으며 본체 선택커밋 직후 재실행 필요.
- 빌드·FAQ 산출 HTML·화면검증은 본체 통합 단계에 남김. 모든 게이트0이라는 식으로 범위 밖 부채를 완료 처리하지 않는다.
