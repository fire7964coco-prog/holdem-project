# 다음 세션 알림장

> 갱신: 2026-10-08 (5) (vi 클러스터 51편 착수 · 0-1 · 0-2 5/7 · (4) MA-370 fr game-order 47-A · MB-206 · MA-371 ACK · (3) MA-368 fr rank 3자리 · MB-205 · (2) 우편함 정리 MB-204 · (1) MA-367 fr rules 9자리 이행 · MB-203 · 10-07 (17) vi 계산기·핸드차트 배포 · MB-202 · (16) vi 솔버 조사 · 뱅크 신설 · (15) 솔버 랜딩 §2-AF 이행 `84434589` MB-201 · (14) MA-358~365 회신 MB-200 · queue §2-AF · (13) fr 51편 배포 `ceed9c0d` · MB-199 · (12) fr 🅶 머지·헤드 마감 e3cbe640 · (11) fr 배포 준비 `0b6f66e6` · 🅶 창 · (10) fr 헤드 판정 H-1~30 · 계산기 사전 · `4a7b2f0c` · (6) MA-350 cooler MB-197 · (5) fr 0-4 착수 MB-196 · (4) fr 0-3 정본 · (3) fr 0-2 SERP · MA-347 ms beginners MB-195 · (1) straddle OOP 한정 MB-194 · 10-06 (17) MA-339 판정·이행 MB-193 · (16) §2-Z 이행 MB-192 · (15) MA-332~338 판정 MB-191 · 직전 (14) tr SERP 보강 D MB-190 · 보강 A~D 완결) · 이전 회차 경위는 `WORKLOG.md`(10-06 (1)~(14)) · 10-06 (11) 정리 전문 = docs/handoff-archive/2026-10-06-11-session-handoff-full.md. 시작 순서: AGENTS.md → CLAUDE.md 전문 → 이 파일 → `git status` + **워크트리 3곳 status**(아래).
> 🔴 **작업 주체가 바뀐다**: 09-22까지는 **GPT(커서/Codex)로 이 폴더를 열어 작업**했다(커밋 트레일러 없음·영어 커밋 메시지 = GPT분). 09-23 GA·GSC 보고서와 처방 1회차는 Claude. **한도 리셋 후 다시 Claude 본체로 간다.** GPT가 남긴 미결은 아래 «B. 이월 대기열»에 모았다 — 정본은 `docs/backlog-closeout-2026-09-22.md` §3·§4(GPT가 쓴 체크포인트. 그 뒤 **규칙 41편·Q8-a PT·086161eb는 09-22에 배포·마감 완료**라 그 표의 해당 «남음» 칸은 낡았다).

## ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ vi 클러스터 51편 — 0-2 SERP 진행 중 (10-08 (5) · 정본 `docs/vi-cluster-plan.md`)

- 사장님 10-08: fr처럼 51편 · 서치·실측 철저 · **아스트라도 활용**(계획 §3-B 지도). 0-1 ✅ `docs/keyword-bank/vi-core-volumes.md` · 0-2 = **7/7 산출 ✅**(`docs/keyword-bank/vi-serp/` · 00-brief 끝 결과표 · 아스트라 L-A·B·F + Opus L-C·D·E·G).
- ▶ **다음 세션 첫 일** = 커버리지 보완(본체 DFS `node tmp/vi/dfs.mjs`): L-A §2 볼륨 요청(표 형식 · 미측정) · 아스트라 레인의 원형 헤드 AC · `nuts là gì` SERP · organic 8~9개 헤드 재조회 판단 → 00-brief 결과표 갱신.
- 그다음 0-3(소유표·고정문·용어 정본 + 아스트라 교차) → 사장님 보고. 쟁점: vi엔 `/vi/glossary` 없음 → «X trong poker là gì» 정의형 주인 · 족보 번역어(sảnh rồng = Tiến lên 의심) · positions↔position-play · 확률 글↔계산기 · ICM 글 소유 · 토너먼트 합법성 FAQ 삭제 · GTO 13 순서(`/vi/solver`와 묶기) · GTO 13 포함 재확인(§1-E 해제로 읽음).

## ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ vi 도구 ✅ 배포 (10-07 (17) · `/vi/calculator`·`/vi/hand-chart`) · 다음 = `/vi/solver`

- ✅ 계산기·핸드차트 vi(사장님 ⓑ) — 뱅크 `docs/keyword-bank/vi-tools.md` · 경위 WORKLOG 10-07 (17). ▶ 사장님 몫: GSC 수동 색인 요청 2개(`/vi/calculator` · `/vi/hand-chart`).
- ▶ **다음 = `/vi/solver`** — 정본 `docs/keyword-bank/vi-gto-solver.md`(§7 조준안). 착수 조건: 솔버 vi 배포 통지(S-044 = 구현 끝 · 🔴 배포·push 전 — 그 전까지 `?lang=vi`는 영어) → 라이브 `?lang=vi` 라벨 축어 대조 후 플레이북 7~12단계. 생기면 vi 차트 노트의 솔버 이름 → 링크 · 솔버에 `/vi/solver` 생겼다고 알림(S-044 «한 줄 교체»).
- 📬 S-044 요청 1(후기창 vi 초안 → 본체 사전) = 후기창 브랜치 머지 때 S-042(tr)와 함께(MB-202에 등재).

## ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ fr 클러스터 51편 — ✅ 배포 (10-07 (13) · main `ceed9c0d` · MB-199)

- 정본 = **`docs/fr-cluster-plan.md`**(§4-C 배포 회차 ✅). 경위 = WORKLOG 10-07 (10)~(13).
- ▶ **사장님 몫: GSC 수동 색인 38** = 계획 §4-C ⑧ 목록(필라 6편 rules · hand-rankings · probability · strategy · tournament · glossary부터 · GTO 13 제외).
- ✅ 검수장 MB-199 회차 1(🅰 rules 6편) = MA-367 → 9자리 이행·MB-203(10-08 (1) · queue §2-AG) · 회차 2(🅱 rank 6편) = MA-368 → 3자리 이행·MB-205(10-08 (3) · §2-AH). MB-203 전/후 결과 = MA-370 → 1자리 이행·MB-206(10-08 (4) · §2-AI). ✅ MB-205 재판정 = MA-372(해소 3 · 결함 0 · §2-AH) · ▶ MB-206 변경 줄 판정 · F1 4자리 결재 · 다음 회차(🅱~ · 🅴 토너먼트 처리 방식은 검수장 사용자 결정) MA 대기 → 오면 다음 세션 안에 회신+등재.
- 🪶 빈 레인 폴더 `../Holdem-fr-{rules,rank,prob,strat,tour,gloss,gto}` 7개 = 레인 창 닫은 뒤 삭제(워크트리 등록은 해제됨). 브랜치 `harden-fr-*`·`fr-integration` 보존.
- 남긴 것(자동 착수 금지): EN-먼저 18자리 = queue §2-AE · H-8 fr PDF = 별도 회차 · `/fr/solver` 본문 산문 링크 · 러닝맵 머리 영어(비-KO 전 로케일).
- ✅ MA-358~365 회신 = MB-200 · ✅ §2-AF 이행 `84434589` · MB-201(검수장 변경 줄 재판정 요청 1) → 결과 MA 오면 다음 세션 안에 회신+등재.
- ⏸ ms 14편 EN 동기화 = 검수장 MS 전수 초벌(MA-346)과 겹쳐 «나중에 봐서»(사장님 10-07). 솔버 후기창 머지 = 아직 아님(사장님 10-07).

## ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ tr SERP 보강 ✅ A~D 완결 (사장님 10-06 «20편을 상위 1페이지로 · 작업 빼먹지 마»)

| 단계 | 내용 | 상태 |
|---|---|---|
| 0 | 조사 5레인(SERP 상위10·PAA·자동완성·라쿠·상위 글 원문 장단점 → 처방) = `docs/keyword-bank/tr-serp/` 00-brief + L1~L5(레인마다 §7 처방 · 커버리지 표 ✗ 0까지 보완) | ✅ 10-06 18:51 |
| A | 고볼륨: texas-holdem-rules-for-beginners(L1 7-A) · holdem-hand-rankings(L2 7-4) · holdem-betting-actions(L1 7-C) · holdem-game-order(L1 7-B «el sırası»=족보 의도 → 개명) | ✅ 10-06 (11) · MB-187 · 결과 = 00-brief «회차 A 결과» |
| B | 규칙 단편·용어: tiebreak · showdown · glossary(«poker terimleri» 제거 = 판단 ②) · all-in(rest) · blind | ✅ 10-06 (12) · MB-188 · 결과·🪶 = 00-brief «회차 B 결과» |
| C | 확률·대회: holdem-tournament · holdem-probability · holdem-pot-odds · holdem-tournament-vs-cash-game(L4) | ✅ 10-06 (13) · MB-189 · 결과·🪶 = 00-brief «회차 C 결과» |
| D | 전략·GTO: holdem-strategy · holdem-positions · holdem-continuation-bet · donk-bet-strategy 정의 H2 · `/tr/solver` 문구(L5 §8) + 판단 ③ RTA FAQ | ✅ 10-06 (14) · MB-190 · 결과·🪶 = 00-brief «회차 D 결과» (§8 «GTO poker chart» 앵커는 차트 사전 규칙으로 기각) |

- 회차마다: 처방 축어대로 수정 → audit:hard · §13 검산 → 렌즈+아스트라 병렬 → 2차 → 빌드·배포·MB·IndexNow.
- 판단 3건(10-06 사장님): ① **«pas» = 권고대로 확정** — 단독 pas=fold · check=«çek/bop»(betting-actions «bedavaya pas» 3자리 · 용어집 동기화 · 회차 A) ② **«poker terimleri» 주인 = 도구 `/tr/glossary` 확정**(사장님 «용어는 도구로 · 경쟁하면 글을 내려라») — 회차 B에서 글 `holdem-glossary`의 seoTitle·H1·tags에서(✅ 회차 B 이행) «poker terimleri / sözlük»을 빼고 «pokerde X ne demek»·전통어(rest·bop·rölans) 롱테일로 재조준 + 도구 링크. 그 뒤 GSC에서 두 페이지가 «poker terimleri»로 같이 잡히면 글을 내린다(내릴 때 = `/tr/glossary`로 301 + tr index·hreflang·링크 정리 · 경위 기록). L3 §7의 «글로 이전» 처방은 기각. ③ **솔버 «합법인가» PAA = 합법성 축이 아님**(사장님: 무료 공식 학습 도구) — 영어 PAA «Are poker solvers legal?»의 실제 뜻은 «게임 중 실시간 사용(RTA)이 허용되나». `/tr/solver` FAQ에 «공부용은 문제없고, 온라인 게임 도중 실시간 사용은 포커 룸 약관이 금지한다»로 답한다(룸 이름·추천 없이 · 회차 D).
- 📊 tr 색인 재측정(10-06 · `docs/gsc-tracking/index-audit-2026-10-06.json`): 26 URL 중 **색인 5**(glossary 도구 · tournaments · blind · hand-rankings · showdown) · 모름 17 · 발견·미색인 4 → 사장님 GSC 수동 색인 요청이 보강과 같이 가야 한다. ⚠ Git Bash에서 `--prefix /tr/`는 `MSYS_NO_PATHCONV=1` 필요(없으면 경로가 변환돼 0건).
- 회차 5 «다음 = 회차 6(대회 카드)»은 사장님 «조금 나중에» — 이 보강 뒤.
- ▶ 사장님 몫: GSC 수동 색인 요청 — 회차 A 4개 `/tr/blog/{texas-holdem-rules-for-beginners, holdem-betting-actions, holdem-game-order, holdem-hand-rankings}` + 회차 B 5개 `/tr/blog/{holdem-tiebreak-rules, holdem-showdown-rules, holdem-glossary, holdem-all-in-rules, holdem-blind-meaning}` + 회차 C 4개 `/tr/blog/{holdem-tournament, holdem-probability, holdem-pot-odds, holdem-tournament-vs-cash-game}` + 회차 D 5개 `/tr/blog/{holdem-strategy, holdem-positions, holdem-continuation-bet, donk-bet-strategy}` · `/tr/solver`.
- ▶ 다음: 보강 효과 판독은 색인 뒤(GSC tr 쿼리 · 28일창) — 자동 착수 금지 · 사장님 지시 대기.
- 📬 우편함: ✅ §2-Z 이행(MB-192) · ✅ **MA-339 + MA-344 통지 판정·이행·배포**(10-06 (17) · MB-193 · queue §2-AA · MA-345·346 ACK) · ✅ AA-24 straddle OOP 한정(10-07 (1) · MB-194). · ✅ MA-347 ms beginners 5자리(10-07 (2) · MB-195 · queue §2-AB). · ✅ MA-350 cooler 사전 귀속(10-07 (6) · MB-197 · queue §2-AC). · ✅ MA-351~356 회신 · MA-353②·354① 이행(10-07 (8) · MB-198 · queue §2-AD). ▶ **다음 후보 = ms 14편 EN 동기화**(ms가 드리프트 게이트 «꼬리»라 09-28 델타 미전파 · 목록 = queue §2-AB) — 사장님 지시로 착수. ▶ 검수장 MB-192·193·194 전/후 재판정 대기 · MS 46편 전수 초벌 진행 중(MA-346) — 결과 MA가 오면 다음 세션 안에 회신+등재. 남긴 것 = queue §2-Z·§2-AA 🪶(자동 착수 금지).

## ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ tr 회차 5 ✅ 배포 (10-06 (9) · MB-186 · GTO 4편 + /tr/solver) · 다음 = 사장님 지시 대기

- 결과·남긴 것 = **`docs/tr-cluster-plan.md` §4-5**(🪶 자동 착수 금지). 다음 tr = 회차 6(북키프로스 카드 · 데이터 공급 확정 전 착수 금지).
- 🔴 **솔버 tr 배포 통지(S-행)가 오면**: `/tr/solver` FAQ «Solver ekranı Türkçe mi?» · 본문 «… İngilizce bıraktık» · 스팟 이름 · 글 4편 영어 앱 라벨을 앱 tr 축어로 같이 고친다(§4-5 목록).
- ▶ 사장님 몫: GSC 수동 색인 요청 — 회차 1~4 목록(아래 회차 4 절) + **회차 5의 5개**(`/tr/solver` · `/tr/blog/{donk-bet-strategy, monotone-board-strategy, broadway-board-strategy, a-high-board-cbet}`).
- 📅 **10/7**: `solver_open` 판독 → 솔버 후기창 브랜치 머지·배포(아래 «솔버 후기창» 절) · 그때 솔버 S-042 요청 1(후기창 tr 초안을 본체 사전에 넣기)도 처리.

## (이전) tr 회차 4 ✅ 배포 (10-06 (8) · MB-185)

- 결과 = `docs/tr-cluster-plan.md` §4-4. 사장님 수동 색인 요청 URL(회차 1~4): 회차 1의 7개(`/tr/blog` · `/tr/tournaments` · `/tr/blog/{texas-holdem-rules-for-beginners, holdem-all-in-rules, holdem-betting-actions, holdem-game-order, holdem-tournament-vs-cash-game}`) + 회차 2의 2개(`/tr/calculator` · `/tr/hand-chart`) + 회차 3의 6개(`/tr/glossary` · `/tr/blog/{holdem-glossary, holdem-tiebreak-rules, holdem-pot-odds, holdem-probability, holdem-tournament}`) + 회차 4의 3개(`/tr/blog/{holdem-strategy, holdem-positions, holdem-continuation-bet}`). 회차 1 ⑦(규칙급 정정 꼬리 로케일 미전파) 판정은 사장님 대기.

## (이전) 도구 확장 회차 1·2 — 남은 것 = 사장님 수동 색인 요청 20개

- `/{de,es,fr,hi,id,ja,ms,pt,zh,zh-hant}/hand-chart` · `/{…같은 10}/glossary`. 회차 3(퀴즈) = 사장님 판단(`docs/tools-locale-rollout-plan.md` §3). 경위 = WORKLOG 10-05~10-06.

## (뒤로 미룸) tr 클러스터 완결 — 위 도구 확장 뒤 재개 (사장님 10-05 결정)

- 정본 = **`docs/tr-cluster-plan.md`**(수요 실측 · 메인과 같은 구도에 글 수만 축소 = 20편 + 도구 3 · 카니발 소유표 · 회차 6개). 회차 1 = 기존 8편 다듬기 → 사장님 수동 색인 요청.
- 근거 자료: GSC 색인 전수 `docs/gsc-tracking/index-audit-2026-10-05.json` · 미색인 목록 `not-indexed-2026-10-05.md`(사장님 수동 요청 대조용).

## ▶▶▶▶▶▶▶▶ 솔버 후기창 — ✅ 코드 1 구현 · 🔴 브랜치 `solver-reviews-code1`에 보관(미배포)

- 🔴 **10-04 (5)에 브랜치 `solver-reviews-code1`로 옮겼다**(사장님 허락 · 코드 커밋 `1fc7a5df`·`a86f3837`·`9cbd532d` 포함 · main에는 없다). 10/7 `solver_open` 판독 뒤 `git rebase main solver-reviews-code1` → 문서 파일(핸드오프·WORKLOG·우편함) 충돌은 **main 쪽을 남긴다** → main에 ff 머지 → 빌드 → push.
- 🔴 **S-037 반영 `e26376a6`(10-05 · MB-165)**: 속도 제한 = 새 표 `solver_feedback_saves` · 이름 바꾸기보다 먼저 검사. ✅ SQL 5-A 재실행 완료(10-05 · anon 확인). 브랜치 워크트리 = `../Holdem-solver-reviews`(node_modules 정션 · 머지 뒤 `git worktree remove`).
- ✅ **SQL 실행 완료**(10-04 · 1차 `$` 오류 → `9cbd532d` 수정 후 성공). anon 검증: 테이블 5 존재·읽기 [] · 공개 뷰 permission denied · anon 쓰기 RLS 거부 · 버킷 `review-avatars` 존재. ✅ Auth Redirect URLs에 `https://www.holdemmaster.com/**` 추가(10-04 · 그 전엔 www 없어 소셜 로그인 복귀가 Site URL로 떨어졌다).
- ▶ **실제 쓰기 시험은 배포 뒤 라이브에서**(사장님 10-04 결정 — 로컬 서비스 키 없음): 쓰기·수정·삭제 · 이름 확인 · 숨김 3사유·재검토 요청 · 답글 · 이미지 3종 · 도움됐어요 · 로그인 복귀(www redirect 추가분) → 고칠 것 있으면 그 자리에서 수정 → 시험 행 삭제. 그다음 MB 통지(솔버가 스위치 ⓐ 켬)·IndexNow(12개 랜딩).
- 배포 때: 개인정보처리방침 `UPDATED`를 배포일로 · Vercel 빌드 로그에 «SUPABASE_SERVICE_ROLE_KEY 없음» 경고가 없는지 · 라이브 12개 랜딩 `data-solver-reviews="ok"` 확인. 구현 지도·운영 절차 = 설계 §7-3.
- ✅ 솔버 회신 S-035 → MB-160 회신(fr·id 사전 정정 · 확인 뒤 이름 바꾸기 · 사용 기록 서버 판정 · created_at 트리거 · `a86f3837`). ▶ 코드 2(`/api/spot-share` + `/s/[id]` noindex · `/api/solver-reviews/summary`) 재료 도착 — 🔴 **솔버 코드 이식 금지(AGPL)** · 형식 명세 `클로드-프로그램만들기/handoff-to-main-site/공유링크_형식명세_2026-10-04.md`로 직접 구현 · 미리보기 = 보드·팟·스택(자리 없음) · CORS = 솔버 도메인. 솔버는 본체 라이브 MB를 받고 스위치를 켠다(ⓐ 후기 = 코드 1 · ⓑⓒ = 코드 2).

## (이전) 솔버 후기창 설계 확정 (10-03 (7)·(8) · 사장님 2차 결정 반영)

- 정본 = **`docs/solver-review-design.md`**. 2차 결정 요지: **이벤트와 후기는 별개**(보상·꼬리표·응모 없음 — 이벤트는 이벤트 칸) · **쓰면 바로 공개**(사후 숨김 = 링크·욕설·광고만) · **누구나**(문턱 없음 · 닉네임 + [G]/[카카오] + 가입 시기 + 선택 프로필 이미지(캐릭터·올리기)로 «각자 다른 사람» 신호 — 10-04 확정) · **전 언어 동시 개통** · 3번째 솔브 뒤 1회 한 줄 · Review 스키마 넣지 않음 · 후기 속 «위자드만큼» = 유저 찬사(그대로 둠 · 우리 광고 문구로 재사용만 금지).
- ✅ 솔버 요청 3 + 통지 1 + 질문 2 발송 = **MB-159**(`docs/reply-to-solver-2026-10-04.md` · 10-04). ▶ 솔버 S-행 회신 대기(② 디코드 함수 목록 · Auth redirect 답이 코드 2·앱 로그인 전제).
- 🔴 **순서(사장님 10-04)**: 솔버 후기창 작업이 끝난 뒤에 ① 우편함 미처리(10-04 (5)부터 진행 중 — 위 절) ② S-034 승률 시뮬레이터(`/win-rate-quiz`) 개선. 그 전엔 손대지 않는다(세션 시작 우편함 점검은 «확인만»).
- 🔴 **Supabase SQL 실행이 필요한 순간 사장님께 바로 알린다**(사장님 10-04) — 파일 경로·실행 위치(SQL Editor)·실행 뒤 확인 방법을 한 번에. 배포보다 먼저.

## ▶▶▶▶▶▶▶ es 무르시아 «Casino Odiseo» 상시 글 — ✅ 발행 (10-03 (5) · MB-155) · 다음 = 사장님 지시 대기

- ✅ `casino-odiseo-murcia-poker` 발행·배포(WORKLOG 10-03 (5)). 사실 정본 = `docs/tournament-factsheets/2026-murcia-orenes-standing.md` · 후속 갱신은 전부 `docs/update-calendar.md` «es 무르시아» 절(매월 25일경 다음 달 캘린더 · 10/19 VPT · 11/9 888 · 11/30 Queen · 12/7 partypoker 과거형). 🔴 앱 시각은 Playwright `timezoneId: Europe/Madrid`.
- ✅ **C벳 필라 솔버 표 절**(10-03 (6) · MB-157 · ko만): `holdem-cbet-strategy` 새 H2 + 표 6. ▶ 검수장 MB-157 판정 대기. 🪶 자동 착수 금지: EN·로케일 전파 · 나머지 네 상황(CO·HJ·UTG·SB-BB) 집계 요청 · 복기 출시 후 «이 보드에서 내 판 복기하기» 링크.

## ▶▶▶▶▶▶ de GTO 13편 — ✅ 발행 (10-02 (14) · MB-150) · 다음 = 사장님 지시 대기

- ✅ 13편 index 등록 · `/de/solver` 랜딩 13링크 · 러닝맵 de 노드 · 필라 역링크 4자리 해제 · 렌즈 4종 + 2차 교열 반영 · 배포(WORKLOG 10-02 (14)).
- ✅ EN 유래 13묶음 = **EN + 9로케일 전파 완료**(10-02 (15) · MB-151). 남긴 6건 = `docs/en-first-queue.md` §2-P 🪶(자동 착수 금지).
- 🪶 de 시범 «스팟 장면» 이미지: 반응 보고 EN·다른 로케일 전파 판단(`locale-intentional-diffs` 10-02 행 · 브리프 §7). ar·vi·tr 시리즈는 사장님 판단 전 착수 금지(`settled-decisions` §1-E).
- 🪶 범위 밖 관찰(자동 착수 금지): 구조 게이트 기존 🔴 = pt 1 · id 2 · ms 11 · hi 2 · check-de-style 다른 클러스터 기존 🔴 8(betting-actions·hand-rankings·tiebreak·ept-barcelona·wpt-australia).

## ▶▶ 09-29 회차 잔여 (완료 이력 전문 = docs/handoff-archive/2026-10-08-5-session-handoff-full.md)

- 🪶 새 /tournaments 카드의 buyin·venue는 통화 표기·공식 라틴 표기(한국어 값은 13로케일 FIELD 등재 강제) · 새 행에 schemaDescription을 달면 hi·ar `SCHEMA_DESC_*`에도 등재 · ar 이벤트 카드 4키는 ar 이벤트를 열 때 현지 검수.
- ⛔ OLA Poker Tour Taipei 글 안 씀(사장님 09-29) · ⏸ KO GOP 제주 2026 가이드 보류 · ja 후보 D·E·F 보류(F절). 대만·TMTC 후속 시한 = `docs/update-calendar.md` 10월 절.
- 🪶 S-030: `docs/solver-factsheet.md` §4 턴/리버 기기 계산 문구 + «자리로 레인지 채우기»(`f20278d`) — 솔버 회차에.

## ▶ 다음 세션 (사장님 09-28)

**참여 장치 + 이벤트 재설계 — ✅ 배포 완료**(09-28 `ae6c7c41` · SQL 실행 · 라이브 확인 · MB-117 · IndexNow). 설계·파일 지도 = `docs/participation-event-redesign-design.md` §8 · 추첨·판독 시한은 `docs/update-calendar.md` 11월.
- 🪶 라이브에서 **쓰기 경로**(참가 표시·투표 저장)는 아직 아무도 안 눌러 봤다 — 테스트 표로 집계를 오염시키지 않으려고. 사장님이 한 번 눌러 보거나 첫 실사용자 투표가 /admin «후기·투표»에 잡히는지 확인.
- 09-28 2차: 추첨 3명 × 3만 원 · 대상 = APL 서울만(WPT·GOP 외국인 전용 카지노 제외) · /tournaments 보드 APL 카드 연결.
- ▶ **다음 논의 = 언어별 이벤트**(사장님: 대회가 언어마다 다르고 글 작성이 적으니 몇 개 언어만) — 설계부터. 🔴 **사장님 09-28 확정: 다른 언어는 지금 «Coming soon»(이벤트 탭 `review-event-panel.tsx` 비-KO 분기) 그대로 두고, 나중에 한 언어씩 연다** — 1순위 ja(JOPT 오사카 등 일본인이 갈 수 있는 대회 · 상품·표시 규정 현지 기준). 한 번에 여러 언어 열지 않는다. 준비 중 안내 문장 추가(13언어)도 그 회차에 같이.
- 펍 글은 대상 아님(사장님).
- 09-29: /tournaments [나도 참가] 옆 파랑 네온 화살표 배포(`cd5d4c3f` — Vercel이 안 걸려 빈 커밋 `5def3a46`으로 재배포). 가이드 글 참가 바에는 미적용(지시 시). 🪶 사장님 Vercel 2FA 인증 앱 분실 → 복구 코드 확인 필요(대시보드 필요할 때 막힘).
- C벳 필라 데이터 표 = ✅ 10-03 (6). 솔버 이해 = `docs/solver-factsheet.md`.

## A. GA·GSC 보고서 (09-23 · 09-30) — 처방·보완 전부 종결 · 경위 = WORKLOG 09-23·09-30 · 이전 표 전문 = docs/handoff-archive/2026-10-06-14-session-handoff-full.md

- 남은 것 = 관측뿐: ⑥ 규칙 축(10월 중순) · ⑧ 모바일 홈(10/14) · 족보·흡수 효과(10/14 7일창 → 10/21 28일창) → `docs/update-calendar.md` · 기준선 `docs/keyword-bank/ko-longtail-absorb.md`
- 🔴 당분간 우선순위 = 언어별 번역작업 · 신규 포스팅(사장님 09-24).

## B. 이월 대기열 (GPT 작업분 · A 끝난 뒤 · 한 번에 하나만)

▶ **B 대기열 소진** (B1 확률 09-24 (4)~(7) · B2 ID 용어 (8) · B3 DE 용어 (9) · B4 EN-먼저 사실·표현 (10) 종결). **다음 세션 = 사장님 09-24 우선순위(언어별 번역작업 · 신규 포스팅) 중 지시 대기** — 자동 착수 금지. B4가 남긴 것: J-2 cooler «could never correctly fold» 판정(판정 선행 · en-first-queue §2-J) · TDA 판본 부채(별건) · §2-K 11건(자동 착수 대상 아님). DE 계산기→bubble 링크는 EN related 패리티로 **하지 않는다**(backlog §4 확정).

- 워크트리 확인: `git worktree list` — calc-ko·ja·queue·zh·zh-hant 모두 09-24에 main `73d0818d`로 ff 동기화(calc-ko 초안 diff 보존 확인). **calc-ko의 미커밋 초안을 `git add -A`·강제동기화·reset으로 날리지 마라.**
- 장기 미결(자동 착수 대상 아님): 확률 묶음 잔여(answer-echo LABELS de·es·id·pt 미등록 · ja/zh 기존 도입문 과장 단정 등 = `docs/harden-brief/probability-closeout.md` §7-D «남긴 것») · re-entry zh/zh-hant 용어 판정 · solver-client5 SEO 표현 · es LATAM · 우편함(09-26 · MA-172·179·182·183 = MB-088로 회신·등재): 수신 11건은 `docs/en-first-queue.md` §2-L로 등재·MB-083 회신. **L-1 종결**(09-26 · es·zh·zh-hant 66자리 · MB-085~087) → ✅ **L-2 EN-먼저 종결**(09-26 · a 용어 `18b8eaf9` → b GTO `1bbe1bfe` → c 전략 `a879e603` → d 확률 `7d2a0822` → e 족보·규칙 `10e5997b` → f 계산기 `4acd45c5` → **g 로케일 전파 `52093176`(MB-096 · 372파일)** · intake `docs/harden-brief/l2-en-first-intake-2026-09-26.md` §2). ✅ **L-2h**(09-26 · `95fef741` · MB-097) · ✅ **L-2i**(09-27 · `541394e0` · MB-101): MA-200·202 요청 3건 이행(풀하우스 FAQ EN+12 · 로케일 고유 9 · strategy 요약 SB 예외 EN+7). ✅ **MA-206**(09-27 · `31a53ff2` · MB-106): reading-the-board «K 1장=트립스» 9로케일 + card-counting zh·ja 배타 열거 — ja 사본은 검수장 미지적이라 MB-106으로 대조 부탁. MA-210·212(PT 레인 착수·중간 보고)는 요청 0. ▶ **다음 = 검수장 MA 수신 대기**(MB-106 대조) → 받은 MA는 다음 세션 안에 회신+등재. 남긴 것 = 작업판 `l2-en-open-rows-2026-09-26.md` **L-2i·L-2h·L-2g 절 🪶**(ko donk 인과 귀속 정본 방향 등 · 판정 받기 전 착수 금지). 그 밖엔 사장님 09-24 우선순위(언어별 번역작업 · 신규 포스팅) 지시 대기. 계산기 L-3은 09-25 종결(`104fac47`·`0932f093` · MB-084). 보류 = EN-먼저 전부(검수장 EN 재검증 최종 MA와 합침) · cooler 인접 2건(검수장 회신 대기 · MB-083 요청 1). 🔴 세션 시작 시 우편함 점검(CLAUDE.md 세션 시작 4). 시한은 `docs/update-calendar.md`.

## C. GTO 예제 전략 (09-26 확정 · `settled-decisions` §1-E)

- 13편 = 솔버 증거 자료. **⑭ 이후 새 글 금지 → 필라 흡수.** 동크벳 «뜻» 보강 · ⑪⑫ 헤드텀 반납 배포 완료(WORKLOG 09-26 (12)).
- 포지션 필라 제목 정리도 배포(«홀덤 포지션» 헤드텀 복귀). ▶ 판독 10/21 전후 GSC: 필라 «홀덤 포지션» 순위·CTR · 동크벳 «뜻»·«리드벳» 노출(흡수로 부족하면 그때 판단).

## D. 🇲🇾 ms 신규 30편 (09-27 5레인 머지·배포 `469d08f8` · MB-102 · 정본 `docs/ms-translation-lanes.md`)

- ✅ 5레인 배포(ms 51편) → ✅ Q15 `d506320a` → ✅ Q16 렌더러 `2da14f91` → ✅ **꼬리 드리프트 6편 `16092c4d`**(ms 드리프트 0 · MB-105).
- 🔓 **ms 동결 없음**(사장님 09-27): 검수 폴더는 pt → ja → … 자체 순서, ms는 마지막. MB-103 아스트라 교차는 **ms 차례가 오면 그 시점 main 해시로** — 그 MA가 오면 판정·등재 → 정정 회차 한 번(MA 정정 + kejohanan·Button/butang·«di hadapan» 판정 결과).
- 남은 판정 재료: Q16-4(H2 링크 → 직답 이동 · hi CTA · EN-먼저) = `docs/harden-queue-진행.md` §5 Q16. ms 레인 워크트리 5개는 MA 정정 때 재사용하거나 그 뒤 정리.

## F. 나라별 대회 트랙 재개 — ja 먼저 (사장님 09-27 · 플레이북 §00 개정)

- ✅ **ja 신규 2편 발행**(09-28 · MB-108 · WORKLOG 09-28 (1)): `jopt-osaka-02-2026-guide` · `korea-poker-trip-gop-wpt-seoul-2026`. 사실 정본 = 각 사실 시트 §7(09-28 재확인).
- ✅ **3편째 `apt-championship-taipei-2026-guide`**(09-28 · MB-114 · WORKLOG 09-28 (4)) · 시트 `docs/tournament-factsheets/2026-11-apt-championship-taipei.md` · 훅 만료는 캘린더(10/10~11 JOPT Games · 11/29 결과). 검수 폴더(GPT 아스트라)에 MB-113과 함께 청구.
- ▶ **두 글의 후속 갱신은 전부 캘린더에**(`docs/update-calendar.md` 10월 «미발표 → 공개 추적» · «마지막 입구» · 11월 종료 회차): 오사카 Players Guide(受付締切·プライズ総額) · 오사카 Online Day 1 공지 · WPT 서울 바우처 이용 방법 공지 · 10/25 온라인 예선 종료 · 11/3·11/8·11/9 결과 아카이브(4곳 동시).
- ⏸ **남은 후보 D·E·F는 보류**(사장님 09-28 «미결정이 있으니 나중에») — D JOPT 2027 도쿄#01(11/26 · 権利 수 공개 대기) · E WPT WC(10/30 · 일본 관련성 약함) · F SPADIE(10/22 · 본전 비용 미발표). 자동 착수 금지 · 공개되면 사장님 지시로 — 캘린더 등재 · 지시 대기. `lib/tournaments.ts` 어긋남 4건(후보 문서 §4)은 별도 회차.
- 🪶 보드 링크: 로케일 고유 글은 `blogLinkByLocale`(`lib/tournaments.ts` · 해석 = `lib/tournaments-blog-links.ts`)에 건다 — KO 가이드와 슬러그가 다른 ja 글을 대회 카드에 띄우는 자리.

## G. 검수장 PT 재판정 보고 — 판정·전파 끝 (MB-110 · MB-112) · ✅ 이력 전문 = docs/handoff-archive/2026-10-07-17-session-handoff-full.md

- ▶ 대기: 검수장 남은 배치(MB-112 로케일 odds → strategy → rankings) MA · MA-229 잔여 미판정(과거 실적·입국/교통·위성·목록 완전성) · MB-138·MB-152·MB-153 재검증 — 오면 판정(상위 모델) → «1차 레인 + 사본 스윕 + 렌즈». ⏸ 남은 8편(strategy 2 · tournament · glossary) 보고도 같은 방식.
- 🪶 자동 착수 금지: §2-O O-5 · ja 오사카 FAQ «現金だけでは入れません» 오독 여지(대만 시트 §6) · 비핵심 15로케일 betting FAQ 옛 단순 문구. TMTC D조 날짜 = 10/26 이후 Results 탭으로(캘린더 TMTC 절). 검수장 요청 2건(EN 원장 beginners #42 라벨 · 새 문면 델타) 회신 대기.

## 참고 경계

- 새 세션이라는 이유로 완료 글 전수 재검수·새 레인 생성·ID/DE 자동 착수 금지(GPT 체크포인트 §5와 같은 규율).
- 사실 오류 / 번역 누락 / 표현 개선 / 이번 수정의 자기회귀를 따로 분류해 보고. 검사 자리 수를 결함 수로 부르지 않는다.
- 09-22 규칙 배포 증거: `docs/harden-brief/rules-closeout-tail.md` §8-4 · WORKLOG 09-22 (9).
