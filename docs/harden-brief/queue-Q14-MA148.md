# queue Q14 brief — MA-148 이행

> 기준일 2026-09-22 · 원문 `홀덤검수/mailbox/out-검수장.md` MA-148 · 보고서 §D · zh/zh-hant 원장 16편

## 0. 범위와 전제 실측

- 범위는 MA-148 ①~④다. 로케일 고유 정정은 zh 4종·zh-hant 8종, EN-먼저는 `holdem-position-play`·`holdem-3bet`·`holdem-limping` 4개 앵커다.
- MA 작성 뒤 현재 본문을 다시 센 결과, c-bet 옛값 `40–50%`는 **zh·zh-hant 직답 2자리만 잔존**한다. de·ja·pt는 직답에 옛값이 없고 표·FAQ가 이미 `30–45%`다. 없는 문면을 만들지 않는다.
- SB `3-bet-or-fold`는 현재 표의 오류 해결칸과 말미 요약 두 자리가 `vs a raise`를 빠뜨린다. 본문은 이미 올바르다.
- `position-play`의 EQR 명제는 core 8에서 tldr·직답·표·이미지 설명·FAQ·요약에 복제돼 있다. 공용 인포그래픽 원본도 고정 수치 밴드를 담으므로 함께 수정한다.
- 같은 명제의 KO 사본은 `lib/posts.ts`에 별도로 존재하고 BB 방어 계산까지 연결된다. Q14의 core 8 전파 범위를 넘으므로 이번 커밋에 섞지 않고 헤드 요청으로 남긴다.
- `.solver-captures/data-zh.json`의 IP `actions` 빈 배열은 Q14에서 임의 보충하지 않는다.

## 1. 처방

### 1-A. zh·zh-hant 고유 정정

- c-bet 직답: SRP의 프리플랍 레이저가 OOP인 조건을 붙여 `약/約 30–45%`로 표·FAQ와 맞춘다.
- zh: 3bet 격리 대상은 flat caller가 아니라 limper, starting-hands 세 층은 AQo·99/88·큰 3bet·UTG 코어를 기존 정본 문면으로 맞춘다. SB complete 예외와 push/fold 전제를 명시한다.
- zh-hant: blocker 강도, 조건부 음의 EV, `最重要`, 살아남는 좌석 열거, `1−MDF`, 풀하우스 또는 포카드, 세 종류 barrel을 각각 인접 정본과 맞춘다.

### 1-B. EN-먼저 4개 앵커

- EQR: 위치는 평균적으로 실현율을 높이지만 어느 좌석도 100% 위·아래에 기계적으로 고정되지 않는다. range·board·action이 숫자를 정하고 통상 패턴을 뒤집을 수 있다. core 8의 같은 주장 전부와 공용 이미지를 함께 고친다.
- 3bet: 좌석은 바뀌지 않으므로 `position leverage`를 제거하고 `betting initiative`만 남긴다.
- SB: `3-bet-or-fold`는 **이미 raise를 맞은 국면**이라는 한정어를 오류표·요약에 붙인다.
- limping: short-stack 예외는 토너먼트 국면임을 tldr에 붙인다. 이미 그 전제를 가진 사본은 재작성하지 않는다.
- 딜러 렌즈 추가: 같은 3bet 글의 `fold more than MDF says`도 방어 빈도와 폴드 빈도를 뒤집는다. core 8에서 `MDF보다 덜 방어 = 1−MDF보다 더 폴드`로 바로잡는다.

## 2. 스탬프

- 실제 손질한 파일만 `updated: 2026-09-22`.
- EN-먼저 세 슬러그의 core 7 번역본은 회차 전 EN과 동기였고 같은 델타를 대조하므로 `masterUpdated: 2026-09-22`.
- 로케일 고유 정정만 받는 `starting-hands-chart`·`positions`·`strategy`·`when-to-fold`·`continuation-bet`는 `masterUpdated`를 올리지 않는다.

## 3. 검증

- 수정한 17개 앵커의 구문면 소멸·신규 문면 존재를 grep으로 전수 확인한다.
- 8로케일 대상 audit, meta/structure/CJK/hangul/hygiene/seo-sync/answer-echo/FAQ schema/drift/stamp 및 전체 build를 실행한다.
- set 대 flush는 완전열거 정본 `341/990 = 34.44%`와 문면을 다시 대조한다.
- C 단계에서 딜러·수학, 네이티브, SEO/GEO, diff 교열 렌즈를 독립 순차 패스로 수행하고 2차 교열 후 닫는다.
- 결과: 1차 렌즈 신규 쟁점 4종(남은 EQR 보편 단정·MDF 단위·수정 직답 길이·도표 하단 겹침) 전부 반영. 수리 3건 이상이라 2차 교열을 필수 수행했고 5로케일 MDF 직역투 1종을 반영한 뒤 추가 결함 0건으로 닫았다.
