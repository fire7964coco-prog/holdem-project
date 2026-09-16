# 홀덤마스터 UI·UX 개선 보고 — 2026-09-15

**상태: 구현·로컬 검증 완료 / 운영 배포 승인 대기.**

[직접 방문 점검 보고서](ui-ux-audit-2026-09-15.md)의 11개 항목과 추가 관찰을 구현에 반영했다. 핵심은 **깨진 이동 경로 복구, 사용 중 입력·탐색 상태 보존, 모바일에서 필요한 정보에 빨리 도달하기**다. 크림·그린·골드의 브랜드와 하단 커뮤니티 4개 탭은 유지했다.

## 1. 지적 사항별 수정 결과

| 번호 | 원래 문제 → 수정 결과 | 주요 파일 |
|---|---|---|
| 1 | 인기글의 대회 링크가 404로 이동 → 페이지 전용 목적지를 우선 사용해 `/tournaments`로 연결 | `app/community/community-client.tsx` |
| 2 | 다음 퀴즈의 카드가 화면 위로 벗어남 → 다음 문제·결과·재시작마다 제목에 초점과 스크롤 이동. 고정 헤더 높이 반영. KO/EN 적용 | `app/quiz/quiz-client.tsx`, EN 대응 파일 |
| 3 | 계산기 탭 왕복 시 입력 초기화 → 처음 연 도구를 유지해 8종 전체 입력·선택 상태 보존. 현재 도구만 초기화하는 버튼과 키보드 탭 이동 추가. KO/EN 적용 | `components/calculator-workspace.tsx`, KO/EN 계산기 |
| 4 | 이벤트의 ‘준비 중’·옛 날짜·참여 안내 불일치 → 회차·접수 상태·추첨/다음 접수일을 공통 설정에서 표시. 로그인 전부터 글·좋아요 조건 안내. 접수 마감은 서버에서도 확인 | `lib/event-config.ts`, `app/community/event-status.tsx`, `event-tab.tsx`, `actions.ts` |
| 5 | 새로고침하면 블로그 카테고리 해제 → 검색어·카테고리·태그를 URL로 함께 보존하고 뒤로/앞으로 이동 시 복원. 글 목록의 서버 HTML 유지 | `lib/blog-filters.ts`, `app/blog/blog-index-client.tsx` |
| 6 | 모바일 홈에서 가이드·도구 찾기 어려움 → 검색, ‘처음 배우기/전략 읽기/도구 사용’, 펼치는 전체 메뉴 추가 | `app/community/mobile-home-navigation.tsx` |
| 7 | 대회 목록이 종료된 1월부터 시작 → 진행·예정 기본 표시, 지역·상태·월 필터, 최근 종료 순 아카이브. 요약 버튼에서 해당 카드로 이동 | `lib/tournament-filters.ts`, `app/tournaments/tournaments-client.tsx` |
| 8 | 검색 후에도 큰 배너가 결과를 밀어냄 → 필터 적용 중 소개·로드맵을 접고 결과를 위로 배치 | `app/blog/blog-index-client.tsx` |
| 9 | 밝은 배경의 골드 글자 대비 부족 → 정보성 글자용 진한 `primary-ink` 토큰을 분리하고 제목·라벨·수치에 적용. 버튼 면과 다크 표면 골드는 유지 | `app/globals.css`, 관련 페이지, `docs/DESIGN.md` |
| 10 | 로그인·계산기 입력 라벨/포커스 부족 → 고정 라벨·자동완성·키보드 포커스 보완. 비밀번호 복구·변경 화면과 로그인 뒤 원래 페이지/탭/작성창 복귀 추가 | `components/auth-panel.tsx`, `app/login/`, `lib/auth-navigation.ts`, `app/auth/callback/route.ts`, KO/EN 계산기 |
| 11 | 모바일 족보 4열 표에서 설명과 순위가 잘게 줄바꿈 → 순위·족보·확률 3열과 설명 다음 줄로 구성. 데스크톱 4열 유지 | `app/hands/hands-client.tsx` |

계산기 보존 범위는 **같은 페이지 안에서 탭을 바꾸는 동안**이다. 계산 공식·기존 포커 예시·족보 확률은 변경하지 않았다. 퀴즈에서는 추가로 발견한 서버/브라우저 난수 불일치를 없애 초기 화면의 hydration 오류를 수정했다.

## 2. 추가 관찰의 처리

| 추가 관찰 | 처리 |
|---|---|
| 홈 대회 소개에 지난 일정이 ‘예정’으로 남음 | 현재 날짜의 대회 요약 데이터로 홈 티저 생성. 대회 결과 기사 내용은 이번 UI 작업 대상이 아님 |
| 채팅이 오래된 50개만 가져올 가능성 | 최신 50개부터 표시하고 이전 대화 추가 조회 제공. 조회/실시간 수신 중복 제거, 읽던 위치 보존, 새 메시지 안내, 전송 실패 시 초안 보존·재시도 및 한글 조합 중 Enter 처리 보완 |
| 글쓰기 모달의 키보드 초점 관리 부족 | 네이티브 dialog로 초기 초점·Tab 제한·Escape 닫기·호출 버튼 복귀 처리. 닫을 때 초안 유지 |
| 모바일 목차의 초기 숨김 | 정상으로 판정했던 기존 동작 유지. 신규 결함으로 집계하지 않음 |
| 홈·블로그의 큰 카드 반복 | 홈 추천 카드 뒤와 블로그 일반 목록을 모바일에서 작은 이미지의 목록형으로 압축. 전환율·이탈률 개선 효과는 아직 측정하지 않음 |

## 3. 로컬에서 확인한 범위

| 영역 | 확인 내용과 근거 |
|---|---|
| 계산기·퀴즈·족보 | Chromium 390×844·1440×900, KO/EN 계산기 각 8종 입력 왕복·독립 초기화·라벨·키보드 이동. 퀴즈 40회 문제/결과 전환과 4회 재시작에서 제목 초점·헤더 여백 확인. 족보 3/4열과 가로 넘침 없음 확인. 성공 실행의 `pageerror` 0 — `tmp/screen/fix-tools-2026-09-15/report.json` |
| 홈·블로그·대회 | 두 폭에서 인기글 목적지·모바일 메뉴·검색 결과 위치·필터 복원·대회 아카이브/월/바로가기 확인. 13개 검사와 `pageerror` 0 — `tmp/screen/ui-ux-discovery/report.json`. 별도 검토에서도 블로그 검색+카테고리의 새로고침/뒤로/앞으로 복원 확인 |
| 정적 목록·순수 함수 | 개발 서버의 블로그 원시 HTML에 글 링크가 남아 있음을 확인. 검색/태그/카테고리 URL, 대회 날짜 양끝·월/연도 경계·정렬을 고정 데이터 11개 검사로 확인. 최종 정적 빌드 결과는 아래 통합 결과에 기록 |
| 인증 | 복귀 경로와 모의 callback 67개, 모의 브라우저 46개 검사 통과. 두 폭의 라벨·포커스 대비·로그인/가입/복구 성공·실패, EN 작성창 복귀와 키보드 초점, 최신 쿼리/hash 보존 확인 — `tmp/screen/ui-ux-auth/report.json` |
| 커뮤니티 | 모의 메시지 75개 중 최신 50개·과거 조회·중복 제거·한글 조합 입력·전송 실패/재시도·초안 보존·모달 초점/Tab/Escape 확인. `passed: true`, 오류 없음 — `tmp/screen/community-ux-qa/report.json`. 추첨 마감·주차/연도 전환·메시지 병합의 순수 함수 검사도 통과 |

인증과 커뮤니티의 쓰기 동작 검사는 **외부 응답을 대체한 모의 QA**다. 실제 이메일 수신, 실제 Google 계정 OAuth 완료, Supabase의 OAuth/복구 리다이렉트 허용 목록은 확인하지 않았다. 실제 계정 생성·비밀번호 변경·게시·채팅·이벤트 참여·경품 지급을 완료했다고 주장하지 않는다.

전체 다국어·실기기 Safari·포커 콘텐츠 전수 검산·실사용자 성능/전환 지표는 이번 검증 범위 밖이다. 최종 production 빌드에서도 영구 도구 검사를 다시 실행해 통과했다.

## 4. 영구 회귀 검사

묶음 실행: 순수 함수는 `npm run check:ux`, 로컬 브라우저는 `npm run check:ux:browser`.

각 명령은 프로젝트 루트에서 `node scripts/<파일명>`으로 실행한다. 브라우저 검사는 실행 중인 서버가 필요하며 `BASE_URL` 또는 URL 인자로 대상을 지정할 수 있다. 인증·커뮤니티의 모의 브라우저 검사는 로컬에서 실행한다.

| 스크립트 | 다시 확인하는 동작 |
|---|---|
| `check-tools-browser.mjs` | KO/EN 계산기 8종의 탭 상태·초기화·입력 이름, 퀴즈 전환/결과/재시작, 모바일 족보 |
| `check-discovery-ux.mjs` | 블로그 URL 조합, 대회 상태·기간·월 경계·정렬의 순수 함수 |
| `check-discovery-browser.mjs` | 실제 홈 검색/메뉴/인기글, 블로그 필터 복원·결과 배치, 대회 필터/바로가기·색상 |
| `check-auth-navigation.mjs` | 내부 복귀 경로 허용·위험 경로 차단, 언어/쿼리/hash 보존, 모의 인증 callback |
| `check-auth-browser.mjs` | 로그인/가입/복구 UI, 포커스·입력·성공/실패 안내·복귀 흐름을 모의 인증으로 검사 |
| `check-community-ux.mjs` | 추첨 마감·주차/연도 전환, 조회/실시간 수신 병합과 중복 제거 |
| `check-community-browser.mjs` | 모의 채팅 과거 조회·전송 실패/재시도·한글 입력, 글쓰기 모달 초점과 초안 |

## 5. 최종 통합 결과

- **빌드:** `npm run build` 종료 코드 0. sitemap은 KO 70편·다국어 577편·정적 71개·언어 홈 25개를 출력했다. 필수 사전/사후 게이트 통과. 기존 경고와 webpack 캐시 경고를 무경고로 보고하지 않는다.
- **정적 HTML:** 게시된 KO 글 **70/70 링크 보존**, 대회 카드 144개 HTML 보존, 비밀번호 재설정 화면 `noindex` 확인. 검색 URL 관찰자만 작은 Suspense 경계로 분리했다. [검사 결과](ui-ux-improvements-2026-09-15/static-html.json)
- **타입 검사:** 전체 검사는 기존 오류로 실패한다. Git HEAD 원문을 가상으로 읽는 동일 조건 비교에서 **기존 698건 → 현재 698건, 추가 오류 0건**이다. 기존 다국어 타입·임시 스냅샷 등의 오류를 이번 작업에서 해결했다고 주장하지 않는다. [비교 결과](ui-ux-improvements-2026-09-15/typecheck-comparison.json)
- **배포 방식의 로컬 서버:** `next start`에서 `npm run check:ux:browser` 전체 종료 코드 0. 탐색 검사 13개 묶음, KO/EN × 두 폭의 도구 검사, 인증 모의 46개, 커뮤니티 모의 10개가 모두 통과했다. 페이지 JavaScript 예외 `pageerror` 0. 함수 검사는 `npm run check:ux`로 재실행해 통과했다.
- **가시성:** 모바일 검색 첫 결과의 상단은 약 **386px**, 퀴즈 다음 제목과 대회 바로가기 카드가 고정 헤더 아래에 표시된다. 정보성 골드와 기존 크림 배경의 대비는 **2.61:1 → 5.76:1**이다. 이는 해당 색 조합의 측정이며 사이트 전체 접근성 인증이 아니다. [대비 측정](ui-ux-improvements-2026-09-15/contrast.json)
- **운영 반영:** 커밋·push 실행 요청이 자동 승인 검토에서 거절되어 **운영 사이트에는 아직 반영하지 않았다**. 검토 사유는 UI 수정·보고서·핸드오프 요청만으로 운영 main 배포까지 명시 승인되었다고 볼 수 없다는 것이었다. 명시적 배포 승인 후 코드 커밋·push → Vercel 성공 → 공개 사이트 재검증 순서로 마감한다.
- **기록:** 이 보고서와 선별 캡처·검사 JSON을 저장했고, WORKLOG와 session-handoff에 완료 범위 및 배포 승인 대기를 기록했다.

### 선별 화면과 검사 원문

| 화면 | 수정 후 근거 |
|---|---|
| 모바일 탐색·검색 | [전체 가이드 메뉴](ui-ux-improvements-2026-09-15/home-menu-mobile.png), [검색 결과](ui-ux-improvements-2026-09-15/blog-search-mobile.png) |
| 대회·이벤트 | [대회 바로가기](ui-ux-improvements-2026-09-15/tournament-target-mobile.png), [회차·접수 조건](ui-ux-improvements-2026-09-15/event-mobile.png) |
| 도구 | [계산기](ui-ux-improvements-2026-09-15/calculator-mobile.png), [다음 퀴즈](ui-ux-improvements-2026-09-15/quiz-next-mobile.png), [족보 표](ui-ux-improvements-2026-09-15/hands-table-mobile.png) |
| 인증 | [로그인 포커스](ui-ux-improvements-2026-09-15/login-focus-mobile.png), [복구 요청](ui-ux-improvements-2026-09-15/recovery-sent-mobile.png), [복구 완료](ui-ux-improvements-2026-09-15/recovery-complete-mobile.png) |
| 커뮤니티 | [글쓰기 모달](ui-ux-improvements-2026-09-15/write-dialog-mobile.png), [채팅 실패 시 입력 보존](ui-ux-improvements-2026-09-15/chat-failed-mobile.png) |
| 검사 JSON | [탐색](ui-ux-improvements-2026-09-15/discovery-tests.json), [도구](ui-ux-improvements-2026-09-15/tools-tests.json), [인증](ui-ux-improvements-2026-09-15/auth-tests.json), [커뮤니티](ui-ux-improvements-2026-09-15/community-tests.json) |

최종 홈·블로그·글 상세·대회·계산기·족보·퀴즈·로그인의 8경로 × 390/1440, **16개 전체 페이지 캡처에서 가로 넘침 0**을 확인했다. [전체 캡처 검사 JSON](ui-ux-improvements-2026-09-15/full-page-checks.json). 로컬 캡처에서 Vercel 전용 분석 스크립트의 404/MIME 오류가 기록된다. 해당 경로는 `next start`가 제공하지 않는다. 기능 검사 결과의 `pageerror 0`과 로컬 콘솔 무오류 주장은 구분한다. 운영 검증은 배포 승인 뒤 진행한다.

실제 인증 설정 확인 시 [Supabase Redirect URLs 문서](https://supabase.com/docs/guides/auth/redirect-urls)의 허용 URL 및 메일 템플릿 규칙을 대조한다. 이번 구현은 기존 `/auth/callback` 경로를 재사용한다.
