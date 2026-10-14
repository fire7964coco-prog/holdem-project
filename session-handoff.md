# 다음 세션 알림장

> 갱신: 2026-10-14 (1) MA-538 로그인 문구 `9991521a` MB-322 · 2026-10-13 (25) 시뮬레이터 공용 결함 3건(승·무·패 잘림 + 퍼센트 로케일) `ba808d72` MB-321 · (24) Google 가입 언어 태그 `68bc46d2` MB-320 · (23) 비-KO 로그인 Google 하나 `8f96dfab` MB-319 · (22) 로그인 16개 언어 `20e6a9bd` MB-318 + 텔레그램 계획표 · (21) L1 ru `7efdcdd3` MB-317(L1 종료) · (20) ru 계산기 `fcccc119` MB-316 · (19) L1 hi `529d53b9` MB-315 · (18) L1 tr `e25c1031` MB-314(+MA-524 이행) · (17) L1 vi `d08fac6b` MB-313(+MA-521 이행) · (16) L1 ms `dcd6d020` MB-312(+MA-518 ① · MA-508 회신) · (15) L1 id `7fc0c95e` MB-311 · (14) L1 fr `ca3911e8` MB-310 · (13) MA-515 §2-BU MB-308 · L1 pt `421e4a7c` MB-309 · (12) MA-509·510 `e30fde28` MB-307 · (11) 대청소(29.4KB → 소형). 이전본 전문 = `docs/handoff-archive/2026-10-13-10-session-handoff-full.md` (그 전 = `2026-10-09-5-…` 등 · 통독 금지 · grep만). 경위는 전부 `WORKLOG.md`(최상단부터).
> 시작 순서: AGENTS.md → CLAUDE.md → 이 파일 → `git status` + `git worktree list` → 우편함 도구 + 솔버 `../클로드-프로그램만들기/solver/mailbox/MAILBOX.md` 최상단 «본체» 행(솔버 S-행은 도구에 안 뜬다).
> 🔴 작업 주체: 09-23부터 Claude 본체. GPT(커서/Codex)분 = 트레일러 없는 영어 커밋. GPT 미결 정본 = `docs/backlog-closeout-2026-09-22.md` §3·§4.

## ▶ 바로 다음

| 회차 | 내용 | 상태 |
|---|---|---|
| **도구 레인 3** | 10-14 본체가 띄움 — 🅰 `Holdem-wrq-zhhant`(zh-hant 시뮬레이터) · 🅱 `Holdem-tour-frru`(fr·ru 대회 보드) · 🅲 `Holdem-ar-tools`(ar 계산기+차트 → 시뮬레이터). 정본·상태표 = `docs/tool-lanes-2026-10-14.md`. ✅ 🅰 머지·배포 `4a26acb9` MB-323 · ✅ 🅱 `de6ad93a` MB-325 · ✅ 🅲 회차 1 `27d5bc7c` MB-324(▶ 회차 2 시뮬레이터 진행). ▶ 🅱·🅲 «머지해» 오면 §4 헤드 절차. 🪶 `/ar/solver` = 솔버 앱 ar UI 없음 → 솔버 문의는 사장님 판단 | 진행 중 |
| **우편함** | ✅ MA-509·510 = queue §2-BT 회신+등재+이행 `e30fde28` MB-307 → ▶ 검수장 변경 줄 재판정 대기 · 🪶 스트래들 «의무 베팅» 통지·vi glossary H2 «Cặp» = 판단 대상(§2-BT) | 판정 대기 |
| **S2** | 승률 시뮬레이터 ✅ MA-518 판정(F-01·02·03·04·07·08 해소 · 새 문구 OK 17 · RISKY 2 = ko·ja sharedInvalid → `dcd6d020` 이행) · 🪶 잔여 = F-10 1판 2px · EN 퀴즈 설명 2자리(§2-BV ②③ · F-06 손질 때) · en·es·de 360 컨트롤 줄 1px · F-06·N-3 보류 · ✅ 공용 결함 3건(승·무·패 잘림·퍼센트 로케일) `ba808d72` MB-321 → ▶ 검수장 화면 기준 갱신 | 공용 회차 때 |
| **MA-515** | ✅ KO holdem-probability 4자리 §2-BU `7c9da352` MB-308 → ▶ 검수장 변경 줄 재판정 대기 · 🪶 통지 ③ 포지션 글 6맥스/9인 · ④ TDA Rule 20/21 = 판단 대상(§2-BU) | 판정 대기 |
| **회차 L1** | ✅ 종료(10-13) — pt `421e4a7c` MB-309 · fr MB-310 · id MB-311 · ms MB-312 · vi MB-313 · tr MB-314 · hi MB-315 · ru `7efdcdd3` MB-317 · ▶ 검수장 pt·fr·ms·vi·tr·hi·ru 문구 판정 대기(id = MA-524 완료) | 판정 대기 |
| **ru 계산기** | ✅ `fcccc119` MB-316 · IndexNow 10-13 (21)에 함께 · ▶ 검수장 ru 문구 판정 대기 · 🪶 ru 핸드차트·용어집 없음 = 사장님 판단 | 판정 대기 |
| **텔레그램 로그인** | 계획표 = `docs/telegram-login-plan.md` — 🔴 현행 = OIDC → Supabase 커스텀 공급자 `custom:telegram`. 사장님 답 Q1·Q2·Q3 반영(문의함 빼고 봇 중계 + 버튼 FAQ) · ✅ Q2 언어별 로그인 `20e6a9bd` MB-318. ▶ 사장님: 개인 폰 대신 **새 번호로 텔레그램 계정** 만든 뒤 ① @BotFather 봇 생성 + 키 3종(안내 = 계획 문서 «① 사장님 준비 안내») · Q4 채널/그룹 · 승인 범위 ②~⑤ | 사장님 대기 |
| **로그인 화면** | ✅ 16개 언어 `20e6a9bd` MB-318 + 비-KO = Google 하나 `8f96dfab` MB-319 + 새 Google 가입 언어 태그 `68bc46d2` MB-320(🪶 실제 가입 1회로 종단 확인 필요) · ✅ MA-538 판정(WRONG 0) → 요청 2키·통지 3 이행 `9991521a` MB-322 · 🪶 **사장님 판단**: 비-KO 기존 이메일 회원의 다음 로그인 진입점(queue §2-BY BY-2′) · 🪶 Supabase 발송 메일(가입 확인·재설정) 본문 언어 = 미착수(대시보드 템플릿 · 사장님 판단) | 판정 대기 |
| **로그인 주소 표시** | ▶ **10-14 착수 예정**(사장님 «내일쯤»). 증상: Google 로그인 화면에 «**idikicmooauorjurdkzh.supabase.co**(으)로 이동» — Supabase 주소가 그대로 보여 가입 신뢰 저하(KO·비-KO 공통 · 10-13 사장님 스크린샷 + ja-JP 브라우저 실측). 처방 후보 = Supabase **커스텀 도메인**(예: `auth.holdemmaster.com` · 유료 추가 기능). 순서: ① Supabase 공식 문서·요금 페이지 원문으로 플랜 조건·월 비용·절차 확인(추측 금지) → ② 사장님께 비용 보고·승인 → ③ DNS CNAME(도메인 관리처)·Supabase 활성화는 사장님 몫 → ④ Google Cloud OAuth 승인된 리디렉션 URI·카카오 Redirect URI·코드 `NEXT_PUBLIC_SUPABASE_URL` 교체 영향 확인 → 로그인 3종(구글·카카오·이메일) 종단 시험. 🪶 텔레그램 OIDC redirect URI(계획 문서 ①)도 새 주소로 맞출 것 | 내일 |
| 다음 후보 | 사장님 지시로: ⓐ (→ 회차 L1) ⓑ 시뮬레이터 보류 후보 ④ 핸드 기록 목록(DB) · ⑤ 레인지 대 레인지(`/calculator` 카니발 확인 먼저) · 🪶 결정만 모드 기록(SQL 필요). 요청서 = `../클로드-프로그램만들기/handoff-to-main-site/처리완료/승률시뮬레이터업그레이드.md` | 사장님 결정 |

- 🔴 검수장 판정 요청은 하루 1~2회 한 행 묶음(MA-482). 전체 기능 검수(아스트라+Fable)는 검수 폴더 몫 — 결과 MA 오면 다음 세션 안에 회신+등재.
- 미답 MB·MA의 정본 = 우편함 도구 출력. 여기 «대기» 목록을 다시 쌓지 마라.
- 🔴 빌드가 «e[o] is not a function»으로 깨지면 남겨진 `next dev/start`가 `.next`를 공유하는 것 — 10-13 4폴더(본체·검수·솔버·유튜브) 사용 서버 확인 뒤 본체 next 전부 종료함. 끝낸 뒤 띄운 서버는 회차 끝에 내가 끈다.

## 솔버 연동 — 신호 오면 할 일

- **S-086 미리 알림**(MB-287): 솔버가 회원 전용 켜기 S-행을 보내면 `/solver` 랜딩 L117·FAQ L43 15언어에 한 줄.
- 솔버 사실 = `docs/solver-factsheet.md`. 복기 링크는 앱에 보드 미리 채움 파라미터가 없다(딥링크 생기면 교체).
- C벳 필라 솔버 표 CO·HJ·UTG·SB-BB 집계 요청 = 사장님 판단.

## 정리 대기 (사장님 확인 필요)

- `../Holdem-{calc-ko,ja,ms-gloss,ms-prob,ms-rank,ms-strat,ms-tour,zh,zh-hant}` 9폴더에 `node_modules`(링크 추정)만 남음 — 🔴 재귀 삭제 금지(본체 node_modules 지울 수 있음) · 링크만 떼고 rmdir.
- 빈 레인 폴더 `../Holdem-fr-{rules,rank,prob,strat,tour,gloss,gto}` 7개 — 레인 창 닫은 뒤 삭제. 브랜치 `harden-fr-*`·`fr-integration` 보존.
- 🪶 `check:gto` 남은 🔴 12 = broadway 23.7(ko에 문장 없음 · 11로케일) · es monotone 1 = 기존 · 판단 대상.

## 사장님 몫 — GSC 수동 색인

- `/ru/solver` · `/vi/calculator`·`/vi/hand-chart`·`/vi/solver` · vi 39(`/vi/glossary` + 글 38 · 목록 WORKLOG 10-10 (8)) · fr 38(`docs/fr-cluster-plan.md` §4-C ⑧) · tr 회차 1~5 + 보강 A~D(아카이브 `2026-10-09-5-…` tr 두 절 · Git Bash `--prefix /tr/`는 `MSYS_NO_PATHCONV=1`) · 도구 20(`/{de,es,fr,hi,id,ja,ms,pt,zh,zh-hant}/{hand-chart,glossary}`) · 시뮬레이터 랜딩 4(회차 C) + `/pt/win-rate-quiz`·`/fr/win-rate-quiz`·`/id/win-rate-quiz`·`/ms/win-rate-quiz`·`/vi/win-rate-quiz`·`/tr/win-rate-quiz`·`/hi/win-rate-quiz`·`/ru/win-rate-quiz`(L1) · `/ru/calculator` · `/zh-hant/win-rate-quiz` · `/ar/calculator` · `/ar/hand-chart` · `/fr/tournaments` · `/ru/tournaments`(10-14).

## 자동 착수 금지 (🪶 판단 대상 — 링크만)

- `docs/en-first-queue.md`: §2-AB(ms 14편 EN 동기화 · ⏸ 사장님 «나중에») · §2-AE 남김 · §2-AP AP-4 · §2-AR(EN FAQ «about 2 points») · §2-BG ③ 무접두 · §2-BI 3bet jam · §2-Z·AA · MB-259 형제 13로케일 all-in `6164c748` 델타 · MB-264 남김 ⓐ~ⓗ · MB-266 ja bad-beat «最後に».
- 게이트 오탐: ko blind-battle-connected L165 H1(콤보 두 개를 보드로 읽음) · `check-gto-numbers` ko «A~B%» 앞 숫자 미검사(fr·de·vi 🔴 2 · ko 표기 «A%~B%»로 바꾸면 닫힘).
- fr: H-8 PDF 별도 회차 · `/fr/solver` 본문 산문 링크 · 러닝맵 머리 영어(비-KO 전 로케일).
- tr: 정본 `docs/tr-cluster-plan.md` + `docs/keyword-bank/tr-serp/00-brief` · 판단 3건(10-06): «pas»=fold · «poker terimleri» 주인 `/tr/glossary`(GSC에서 글과 같이 잡히면 글 301) · 솔버 RTA FAQ = 합법성 축 아님 · 회차 6(북키프로스) 데이터 공급 확정 전 금지.
- 도구 확장 회차 3(퀴즈) = 사장님 판단(`docs/tools-locale-rollout-plan.md` §3).
- /s 머리·꼬리 KO 크롬 = 사장님 «일단 그대로».

## 사장님 지시 대기

- **언어별 이벤트**(09-28): 비-KO «Coming soon» 그대로 · 나중에 한 언어씩(1순위 ja · 설계부터 · 펍 글 대상 아님). 로컬 `.env.local` service role 키 = 조회는 사장님 허락 받고.
- **de GTO 13편**(MB-150) · «스팟 장면» 이미지 전파 · ar·vi·tr 시리즈 = `settled-decisions` §1-E. 🪶 구조 게이트 기존 🔴 = pt 1 · id 2 · ms 11 · hi 2 · check-de-style 8.
- **es 무르시아** → `docs/update-calendar.md` «es 무르시아» 절(Playwright `timezoneId: Europe/Madrid`).
- **ja 대회 트랙**: 후속은 캘린더 · 후보 D·E·F 보류 · `lib/tournaments.ts` 어긋남 4건 별도 · 로케일 고유 글은 `blogLinkByLocale`.
- **ms 30편**(`docs/ms-translation-lanes.md`): 검수 폴더가 ms 차례일 때 MA-103 아스트라 교차 → 정정 회차 1번 · Q16-4 재료 `docs/harden-queue-진행.md` §5.
- **GTO 예제 전략**(`settled-decisions` §1-E): 새 글 금지·필라 흡수 · 판독 10/21 GSC.
- 09-29 잔여: /tournaments 카드 buyin·venue 표기 규칙(13로케일 FIELD · hi·ar SCHEMA_DESC) · ⛔ OLA Taipei · ⏸ GOP 제주.

## 대기열·관측 (링크만)

- GA·GSC: 처방 종결 · 관측 = `docs/update-calendar.md`(⑧ 모바일 홈·족보 흡수 10/14 → 10/21). 우선순위 = 언어별 번역 · 신규 포스팅(09-24).
- 장기 미결: J-2 cooler §2-J · TDA 판본 부채 · §2-K 11건 · 확률 잔여 `docs/harden-brief/probability-closeout.md` §7-D · re-entry zh 용어 · L-2 `l2-en-open-rows-2026-09-26.md` 🪶.
- 검수장 PT 재판정: MB-112 · MA-229 잔여 · MB-138·152·153 → 오면 상위 모델 판정.
- 워크트리: 10-13 기준 main 하나뿐(`git worktree list`).

## 참고 경계

- 새 세션이라는 이유로 완료 글 전수 재검수·새 레인 생성·ID/DE 자동 착수 금지.
- 사실 오류 / 번역 누락 / 표현 개선 / 자기회귀를 따로 분류해 보고. 검사 자리 수를 결함 수로 부르지 않는다.
- Supabase SQL이 필요한 순간 사장님께 바로(경로·SQL Editor·확인법 한 번에 · 배포보다 먼저).
