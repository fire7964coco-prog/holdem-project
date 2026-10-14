# 🅰 wrq-zhhant 진행 — `/zh-hant/win-rate-quiz` (tool-lanes 2026-10-14)

> 정본 = `docs/tool-lanes-2026-10-14.md` §1·§2 🅰. 브리프 = `docs/tool-lanes/wrq-zhhant-brief.md`.

## 실행 기록 (AUTONOMY-LIMITS)

| 항목 | 값 |
|---|---|
| 이번 배치 | A 준비(브리프 확정까지) |
| 시작 / 마감 | 2026-10-14 10:46 / 12:16(90분) · 🔴 14:45 하드 정지 |
| 작업 폴더 · 브랜치 | `Holdem-wrq-zhhant` · `lane-wrq-zhhant` (`git merge main` = fast-forward, handoff 1줄) |
| 사용량 | 계정 할당량 지표는 이 세션에서 관측 불가 — 숫자 추정 안 함 |
| 자식 작업 | 아스트라 A-교차 1(codex exec · 백그라운드) · Fable 카피 서브 1 |

## A 체크

- [x] 선례 통독 — zh 틀 `app/zh/win-rate-quiz/*` · ru `7efdcdd3` 등록 9자리
- [x] 용어 정본 — `docs/translation-terms-zh-hant.md` → `lib/posts-zh-hant`(60편) grep → zh-hant 계산기·솔버 사전
- [x] 숫자 표기 실측 — `35.4%` 형(소수점 `.` · `%` 반각 붙임) 1,965 · 정수% 2,756 · 공백% 0 · 전각％ 0 · 천 단위 `1,000` 1,751(공백형 3) → QuizUI 퍼센트 키 **미지정**(en 기본) · `toLocaleString("en-US")` 유지
- [x] 헤드텀 실측 → `docs/keyword-bank/win-rate-quiz-ltr.md` §zh-hant
- [x] 아스트라 A-교차 (gpt-6-astra · read-only 스크래치 사본 · 판정표 = 브리프 §7)
- [x] Fable 카피 (2안 → 안 B + H1 «練習» 보강)
- [x] 브리프 확정 — **A 종료 11:02**

## 신규 용어 (코퍼스에 직접 근거가 약한 것)

| EN | 채택 | 근거 |
|---|---|---|
| drawing dead | 聽死牌 | sixpoker666 축어(브리프 §2) · 화면 미노출 키 |
| review (hand recap) | 檢討 | 코퍼스 60 · 아스트라 OK(TWR «透過檢討手牌») |
| slider | 滑桿 | 아스트라 OK(Apple 대만) |
| Normal (상대 스타일) | 一般 | 아스트라 RISKY(常規=regular 연상) → 편집 판단 채택 |
| standard error | 標準誤差 | 코퍼스 0 · 통계 일반어(번체 자형만) |

## 헤드 요청

- (C) 공용 `_simulator.tsx:1206` 좌석 라벨 — 선 베팅(하프팟 리드)도 «Call/跟注», 무베팅 팟사이즈도 «Raise/加注» · EN-먼저 · 딜러 렌즈 실측
- (C) 점수식 설명에 반올림(`Math.round`) 생략 — EN L243도 같음 · EN-먼저 · 아스트라
- (C) zh-hant 상단 이벤트 배지 «准备中»(간체) — `lib/event-config.ts`에 zh-hant 키 없음 추정(미확인) · 딜러 렌즈
- (C) 390 헤더 페이지 라벨 말줄임 — zh-hant 긴 HubPage title 공통(glossary 동일) · 참고
- `app/zh-hant/solver/solver-client.tsx` PICK_TOOL 1~3행이 아직 블로그 글로 간다(zh는 10-12에 `/zh/hand-chart`·`/zh/calculator`로 옮김). 이 레인 범위 = 시뮬레이터 행 1줄 추가뿐이라 손대지 않음.

## B 체크 (11:07 ~ 11:12 · 미커밋 — C 끝에 커밋)

- [x] 신설 `app/zh-hant/win-rate-quiz/{page.tsx, win-rate-quiz-client.tsx}` — 브리프 §2·§4·§7·§8대로 재저작 · 인용부호 「」(대만 관례) · 사전 키 집합 = zh와 동일(diff 0)
- [x] 등록 5자리 — alternates(LOCALES + `zh-Hant`) · hub-routes · side-rail · generate-sitemap · zh-hant 솔버 PICK_TOOL 1행
- [x] `npx tsc --noEmit -p .` — 내 파일 오류 0
- [x] `npm run build` exit 0 · `○ /zh-hant/win-rate-quiz` 정적 생성 · postbuild `check:hreflang` 0건 · `check:meta-lang` 🔴 0건
- [x] 산출 HTML 스폿: `<html lang="zh-Hant">` · title = 브리프 §4 축어 · robots «index, follow» · EN 페이지에도 `hrefLang="zh-Hant"` 링크
- [x] `public/sitemap.xml`·`tsconfig.tsbuildinfo` 빌드 산출 변경은 `git checkout --`로 되돌림(커밋 금지 대상)

## 다음 (C 첫 명령 · `/clear` 뒤 새 맥락)

정본 §1 C 1~7 순서 그대로: 게이트 재실행(`npm run build` + `check:hreflang`·`check:intl-links`·`check:meta-lang`) → C-2 기계 대조(scratchpad `.mjs` · EN 사전 vs zh-hant 사전 · `check:mirror-pair`는 이 페이지를 안 본다) → 렌즈 3종 + 아스트라 C-교차 → 390·1440 화면 실측(1판 끝까지) → 2차 교열 → 커밋.

## C 체크 (11:25 ~ · 새 맥락)

- [x] C-1 게이트 — `git merge main`(ff · CLAUDE.md 1줄) · `npm run build` exit 0 · `○ /zh-hant/win-rate-quiz` · prebuild `check:intl-links` ✓(729편) · postbuild `check:hreflang` 0건 · `check:meta-lang` 🔴 0건 · `public/sitemap.xml` 되돌림
- [x] C-2 기계 대조(scratchpad `c2-compare.mjs`) — ① 키 118 = EN 118 = zh 118 · 순서 동일 ② 숫자·카드 토큰 불일치 1키(ruleText «0 分» ↔ EN «zero» = 같은 값 · 엔진 `Math.max(0, …)`) → 결함 아님 ③ 빈 문자열·라틴 연속 = 코드 토큰·«CO vs UTG»(EN 동일)뿐 ④ 링크 3개 실재 ⑤ zh 틀 대비 비ASCII 제거 골격 차이 14행 = 반각→전각 문장부호(/→／ · ()→（）)·로케일 경로·solverLang뿐
- [x] C-5 화면(내 실측 · `next start -p 3471` PID 23080) — 390·1440 1판 리버까지 · scrollWidth = 폭(넘침 0) · pageerror 0(콘솔 오류 = 로컬 `_vercel/*insights` 404·외부 DNS만) · 족보 라벨(三條·同花·兩對·一對) 7장 대조 일치 · 팟오즈 3인 플랍 20.0%(0.5÷2.5)·리버 25.0%(1÷4) 손 검산 일치 · 390 규칙 패널 펼침 넘침 0
- [x] C-3 렌즈 3종(Opus · 편집자 / 딜러·수학 / SEO·UI) · C-4 아스트라 C-교차(gpt-6-astra · read-only 스크래치 사본) → 아래 판정표
- [x] C-6 반영 10건 → 재빌드 exit 0 · intl-links ✓ · hreflang 0 · meta-lang 🔴 0 · tsc 내 파일 0 · C-2 재실행 동일 → 2차 교열(렌즈 1 · 고친 9행)
- [x] C-7 커밋

### C 판정표 (출처 구분 · 본체 원문 재확인 후)

| 출처 | 자리 | 지적 | 판정 |
|---|---|---|---|
| 편집자 WRONG | actualSummary | «正確的決定是 h/d —— » 어색 · quizStats와 용어 불일치 | ✅ 채택 → «判斷正確 h/d——» |
| 편집자 | rangeTitle | 반각 « — » (파일 안 유일) | ✅ 채택 → «——» |
| 편집자 | solverNote spot | 單一加注底池 | ✅ 채택 → 單次加注底池(코퍼스 13 ↔ 1 · 그 1건 = 이 파일) |
| 편집자 | solverNote spot | 주어 없는 명령형으로 읽힘 | ✅ 채택 → «——會在…打開» (EN «opens») |
| 편집자 | ruleText 판정 문단 | 範圍 이중 의미 | ✅ 채택 → «規則涵蓋到的部分，才會反映在範圍裡» |
| 편집자 | ruleText 亮牌 문단 | «進到…勝率» 직역 | ✅ 채택 → «這個數字不會算進» (EN «never feeds») |
| 편집자 | ruleText 規則 목록 | 蓋牌(蓋掉) 반복 · «mucked» 뜻 빠짐 | ✅ 채택 → «牌不亮出來直接蓋掉» |
| 편집자 | ruleText 9人桌 | JSX 줄바꿈 → «，␠UTG» 반각 공백 | ✅ 채택 → 한 줄로(문장 불변) |
| 편집자 | ruleText 測驗 문단 | «牌» 모호 (EN «the cards») | ✅ 채택 → 底牌 |
| 편집자 | shareCopied | 看 → 구경 뉘앙스 (EN «plays») | ✅ 채택 → 打 |
| 편집자(낮) | toCallLabel «要跟» | 표 라벨로 구어 | ❌ 기각 — 코퍼스 要跟 30 ↔ 需跟注 0 |
| 편집자(낮) | description «打一手6人桌» | 목적어 잘림 | ❌ 기각 — SEO 렌즈 OK · 간체판 동형 · 브리프 §4 확정 카피 유지 |
| 편집자 | winLabel «你 獲勝» 공백 | 참고 | ❌ 기각 — 좌석명 공용 키 · 간체 틀 동형 |
| 딜러 | 사전 전체 수치·규칙 30여 행 | 엔진 코드 행 대조 | OK (WRONG 0) · 화면 검산 1판(팟 60→120→240→480 · 25.0% ×3 · 4×2=8% · 투입 230) 일치 |
| 딜러 RISKY | 좌석 라벨: 선 베팅도 «跟注», 무베팅 팟사이즈도 «加注» | EN-먼저(공용 `_simulator.tsx:1206`) | ⏩ 헤드 요청 |
| 딜러(범위 밖) | 상단 이벤트 배지 «准备中» 간체 노출 | `lib/event-config.ts` zh-hant 키 없음 추정 | ⏩ 헤드 요청 |
| SEO | title 45 · desc 98 · 카니발 0 · 라벨 6자리 일치 · hreflang/canonical/og · 390 넘침 0(전 상태) | — | OK (WRONG 0) |
| SEO RISKY(낮) | 헤드텀 title 19번째 글자 | 간체판 동형 | ❌ 보류 — GSC 관찰 후 |
| SEO RISKY(낮) | 390 헤더 라벨 말줄임 | glossary도 동일(공용 헤더) | ⏩ 헤드 요청(참고) |
| 아스트라 RISKY | 점수식 반올림 생략 | EN 동일 생략 = EN-먼저 | ⏩ 헤드 요청 (레인 단독 분기 안 함) |
| 아스트라 | 나머지 117키·수식·규칙·카피 | — | OK (WRONG 0) |

## 보고

- **C 끝 11:40** · 커밋 1개(브랜치 `lane-wrq-zhhant`) · push 안 함 · `public/sitemap.xml`·`tsconfig.tsbuildinfo` 미포함
- 게이트: `npm run build` exit 0(3회 · 마지막 = 반영 후) · intl-links ✓ · hreflang 0 · meta-lang 🔴 0 · tsc 내 파일 0 · C-2 기계 대조 잔여 0
- 판정: 렌즈 3 + 아스트라 + 2차 교열 = **WRONG 1(편집자 · 채택)** · RISKY 채택 10(+2차 교열 1) · 기각 3 · EN-먼저/범위 밖 4 → «헤드 요청»
- 화면: 390·1440 넘침 0 · pageerror 0 · 1판 리버까지 2회(본체 + 딜러 렌즈) §13 손 검산 일치
- 서버: 내가 띄운 `next start -p 3471`(PID 23080 · 부모 27880) PID·폴더 대조 후 종료
- ▶ 헤드 창에 «wrq-zhhant 끝났어, 머지해»
