# 다음 세션 알림장

> 갱신: 2026-10-09 (8) (복기 링크 ko 1자리 `5f37b2bd` MB-214 · (7) 우편함 MB-213 = S-050·MA-385 ACK · /admin 후기 탭 수정 `025a5d86` · 그 전 (6) 솔버 후기창 코드 1 라이브 `5ac5d755` MB-212 · 그 전 (5) `/vi/solver` 신설·배포 `29316681` MB-211 · 렌즈 4종+아스트라 · queue §2-AL · 대청소 — 이전본 전문 = `docs/handoff-archive/2026-10-09-5-session-handoff-full.md` · 그 전 = `2026-10-08-5-…` · `2026-10-07-17-…` · `2026-10-06-14-…`). 경위는 전부 `WORKLOG.md`(최상단부터). 시작 순서: AGENTS.md → CLAUDE.md 전문 → 이 파일 → `git status` + 워크트리 status(`git worktree list`).
> 🔴 **작업 주체**: 09-23부터 Claude 본체. GPT(커서/Codex)분 = 트레일러 없는 영어 커밋. GPT 미결 정본 = `docs/backlog-closeout-2026-09-22.md` §3·§4(규칙 41편·Q8-a PT·086161eb는 09-22 마감 — 그 «남음» 칸은 낡았다).

## ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ vi 클러스터 51편 — 레인 6개 진행 중 (정본 `docs/vi-cluster-plan.md`)

- 0-1~0-4 ✅ · 사장님 판정 §3-D 10건 채택(10-09): `/vi/glossary` 도구 신설(배포 회차) · 족보 베트남어·액션 영어 차용어 정본 · GTO 13 포함·13편 먼저.
- ✅ 레인 창 6개(`Holdem-vi-{rules,rank,prob,strat,tour,gloss}` · 본체가 `wt.exe … claude`) — 창마다 사장님이 「HARDEN.md 읽고 A 시작해」. EN 기준 해시 `b57cb658`. 레인은 시작 때 `git merge main`. 창 다시 띄우는 명령 = `docs/hardening-protocol.md` L80 꼴. 🅶 gto는 🅰~🅵 머지 뒤 헤드 «시작» 신호.
- 헤드(본체) 몫: 첫 레인 C 완료 때 `vi-integration` + `Holdem-vi-head` 생성(계획 §4-A) · 레인 머지 · 🅶 시작 신호 · 배포 회차 = 계획 §4-C(① `/vi/glossary` 신설 ② 계산기 quickRef 4 ③ ICM 앵커·러닝맵 → 빌드·push·MB·IndexNow·수동 색인 38+1). 🅶 «Check it yourself» 링크 = `/vi/solver`(10-09 신설) · 글 꼴 «Spot mẫu → <titleVi> → [⚡ Xem kết quả]» · 라벨 정본 = `docs/solver-app-verbatim-vi-2026-10-09.md`.
- 🔴 S-043(vi 928 문구 판정)은 검수장 진행 중 — 라벨이 바뀌면 verbatim 문서·`/vi/solver`·🅶 헤드를 같이 한 줄 교체.
- ▶ 검수장 대기: MB-208·209 변경 줄 재판정 + ⚖ 결재 2(strategy call 문장 · MA-368 형제 갈림 6자리) + FR 🅴 tour 회차 MA → 오면 다음 세션 안에 회신+등재.

## ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ vi 도구 ✅ 3개 배포 (`/vi/calculator`·`/vi/hand-chart` 10-07 · `/vi/solver` 10-09 (5) `29316681` MB-211)

- `/vi/solver` = 뱅크 `docs/keyword-bank/vi-gto-solver.md` §7 조준안 · hi 선례 ⓐ(GTO 13편·strategy·equity·c-bet·quiz 없음 → 링크 빈자리 안고 랜딩 먼저 · 내부링크 = 도구 2 + 규칙 글 5) · 렌즈 4종+2차 교열+아스트라 반영 · 라이브 390·1440 넘침 0 · IndexNow 200.
- ▶ **사장님 몫: GSC 수동 색인 요청 3개**(`/vi/calculator` · `/vi/hand-chart` · `/vi/solver`).
- ▶ 솔버: MB-211 요청 1(`LOCALE_PATHS` vi → `/vi/solver`) + 통지(앱 `presets.ts` lessonVi ④⑦⑧ 옛 명제) → S-행 오면 ACK. ▶ 검수장: MB-211(신설 + 기존 랜딩 13 횡단) 결과 MA 오면 다음 세션 안에 회신+등재.
- 🪶 자동 착수 금지: EN 솔버 랜딩 동문 8건 = `docs/en-first-queue.md` §2-AL(vi만 AL-1·2 선반영 · 판정 뒤 EN → 13로케일) · GTO 13편·strategy 등이 vi로 발행되면 랜딩 SPOT_GROUPS `slug`·결과 화면 문단 링크 채우기(🅶 머지 회차).
- `/ru/solver`(S-049 선택 요청) = ru 글 7편·뱅크 없음 → «새 언어는 SERP부터» 조사 회차 뒤 별도(사장님 지시 대기).
- 📬 후기창 사전: S-042(tr)·S-044(vi) ✅ 10-09 (6) · S-048(ru · `feedbackLabels.ru` 619행~ · `appLabels.ru` 787행~ · 참고자료 `전달_ru_포커용어_참고자료_2026-10-09.md`)은 `/ru/solver` 회차에(설정·SQL 제약·랜딩 같이).

## ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ fr 클러스터 51편 — ✅ 배포 (10-07 (13) `ceed9c0d` · MB-199) · 정본 `docs/fr-cluster-plan.md`

- ▶ **사장님 몫: GSC 수동 색인 38** = 계획 §4-C ⑧ 목록(필라 6편부터 · GTO 13 제외).
- 검수장 회차 결과 = MA-367(🅰) MB-203 §2-AG · MA-368(🅱) MB-205 §2-AH · MA-370 MB-206 §2-AI · MA-372 재판정 해소 · MA-373(🅲) MB-208 §2-AJ · MA-374(🅳) MB-209 §2-AK. ▶ 대기: MB-206·208·209 변경 줄 판정 · F1 4자리·⚖ 결재 2 · 🅴 tour 처리 방식(검수장 사용자 결정) → MA 오면 회신+등재.
- ▶ **MA-385 요청 1 = queue §2-AM 등재(미이행 · MB-213 ACK)**: FR 형제 갈림 7자리 EN-먼저 → 13로케일 → 이행 MB. 🔴 첫 단계 = 위치 재확인(① kicker · ⑤ reading-the-board 축어 미발견). 🅴 tour 5편은 FR 회차 제외(46편).
- 🪶 빈 레인 폴더 `../Holdem-fr-{rules,rank,prob,strat,tour,gloss,gto}` 7개 = 레인 창 닫은 뒤 삭제(워크트리 등록은 해제됨). 브랜치 `harden-fr-*`·`fr-integration` 보존.
- 🪶 자동 착수 금지: EN-먼저 18자리 queue §2-AE · H-8 fr PDF 별도 회차 · `/fr/solver` 본문 산문 링크 · 러닝맵 머리 영어(비-KO 전 로케일) · §2-AF 이행 `84434589` MB-201 재판정 결과 대기.
- ⏸ ms 14편 EN 동기화(queue §2-AB) = 검수장 MS 전수 초벌(MA-346)과 겹쳐 «나중에 봐서»(사장님 10-07).
## ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ tr — SERP 보강 A~D ✅ · 회차 5 ✅ · 다음 = 사장님 지시 대기

- 정본 = `docs/tr-cluster-plan.md`(§4-5 회차 5 · 🪶 자동 착수 금지) + `docs/keyword-bank/tr-serp/00-brief`(회차 A~D 결과). 판단 3건(10-06 사장님): ① «pas»=fold 확정 ② «poker terimleri» 주인 = `/tr/glossary` — GSC에서 글 `holdem-glossary`와 같이 잡히면 글을 내린다(`/tr/glossary`로 301 + index·hreflang 정리) ③ 솔버 RTA FAQ = 합법성 축 아님(공부용 vs 게임 중 실시간).
- ▶ **사장님 몫: GSC 수동 색인 요청** — 회차 1~5 + 보강 A~D 목록 = 아카이브 `2026-10-09-5-session-handoff-full.md` tr 두 절(URL 전부). 📊 tr 색인 재측정(10-06): 26 URL 중 색인 5 → 수동 색인이 보강과 같이 가야 한다. ⚠ Git Bash `--prefix /tr/`는 `MSYS_NO_PATHCONV=1`.
- ▶ 보강 효과 판독은 색인 뒤(GSC tr 쿼리 · 28일창) · 회차 6(북키프로스 카드)은 데이터 공급 확정 전 착수 금지 · 사장님 «조금 나중에».
- ▶ 검수장 MB-192·193·194 전/후 재판정 · MS 46편 전수 초벌(MA-346) 결과 MA 오면 회신+등재. 남긴 것 = queue §2-Z·§2-AA 🪶.

## 도구 확장 회차 1·2 — 남은 것 = 사장님 수동 색인 20개

- `/{de,es,fr,hi,id,ja,ms,pt,zh,zh-hant}/hand-chart` · 같은 10 `/glossary`. 회차 3(퀴즈) = 사장님 판단(`docs/tools-locale-rollout-plan.md` §3).

## ▶▶▶▶▶▶▶▶ 솔버 후기창 — ✅ 코드 1 라이브 (10-09 (6) `5ac5d755` · 14로케일 · MB-212) · 다음 = 코드 2

- ▶ 사장님: KO 시험 글(«bts» ★5) → /admin «솔버 후기·질문» 탭에 잡히는지 + 숨길지 판단(운영자 ★5가 첫 후기면 자작으로 보일 수 있음 — 숨김 권장).
- ▶ 솔버: MB-212 = `LAUNCHED.feedback`만 ON · ru 후기 숨김(`/ru/solver` 없음 → 서버 `locale` 오류) → S-행 오면 MB-212 확인 칸 «✅ 회신 S-###». S-042·S-044 반영 완료 · S-048(ru 사전)은 `/ru/solver` 회차. ▶ 검수장: MB-212 tr·vi 신규 키 판정 MA 오면 회신+등재.
- ▶ **코드 2**(`/api/spot-share` + `/s/[id]` noindex + `/api/solver-reviews/summary`) — 솔버 share·summary 스위치가 이걸 기다린다 · 🔴 솔버 코드 이식 금지(AGPL) · 명세 `클로드-프로그램만들기/handoff-to-main-site/공유링크_형식명세_2026-10-04.md` · 설계 `docs/solver-review-design.md` §8.
- 정리 남음: 워크트리 `../Holdem-solver-reviews`(복사한 `.env.local` 삭제 → `git worktree remove`) · 브랜치 `solver-reviews-code1`·`-pre-rebase`는 main에 들어갔으니 삭제 가능.
- 🔴 순서(사장님 10-04): 후기창 끝난 뒤 ① 우편함 미처리 ② S-034 승률 시뮬레이터 개선. 🔴 Supabase SQL이 필요한 순간 사장님께 바로(경로·SQL Editor·확인법 한 번에 · 배포보다 먼저).
- ✅ **복기 링크 1자리 배포**(10-09 (8) `5f37b2bd` · MB-214): ko `holdem-cbet-strategy` 솔버 표 아래. 🪶 전파 미착수(자동 착수 금지 · 사장님 지시 대기): 다른 로케일 C벳 필라 · donk-bet(987 = srp-btn-bb) · 3bet-strategy(AK2 = 3bp-btn-bb) · GTO 시리즈 글. 복기 11상황 = SRP 9(BTN·SB·CO·HJ·UTG vs BB · CO·HJ·UTG vs BTN · HJ vs CO) + 3벳 팟 2(BTN 오픈에 SB·BB 3벳) — 🔴 «3벳 팟은 BTN 오픈만»(9조합 확장 S-행 대기) · 앱에 보드 미리 채움 파라미터 없음(딥링크 생기면 교체). 문구 꼴 = WORKLOG 10-09 (8).
- 📬 **S-051 도착(10-09 밤 · 솔버 후기 스위치 feedback ON `a29430e`)** → 다음 세션 ACK(MB 행 · 확인 칸 S-051). 솔버 기능 현황 = `docs/solver-factsheet.md`(10-09 밤 전면 갱신 · 복기 §4 · 주소 파라미터 §4-A).
- 🛠 /admin 솔버 후기 탭 PGRST201 수정 `025a5d86`(10-09 (7)) — 랜딩 표시는 원래 정상.

## 사장님 지시 대기 (자동 착수 금지)

- **언어별 이벤트**(사장님 09-28): 다른 언어는 «Coming soon»(`review-event-panel.tsx` 비-KO 분기) 그대로 · 나중에 한 언어씩 — 1순위 ja(JOPT 오사카 등). 설계부터. 펍 글은 대상 아님. 참여 장치 쓰기 경로 = ✅ 실사용 확인(10-09 DB 조회): 투표 21표·19명(09-29~) · 참가 표시 2건(apl-seoul-winter-circuit-1) · 투표 댓글 0. 로컬 `.env.local`에 service role 키 있음(사장님 10-09 추가) → 조회는 사장님 허락 받고.
- **C벳 필라 솔버 표**(10-03 (6) MB-157 · ko만) → 검수장 판정 대기 · 🪶 EN·로케일 전파 · CO·HJ·UTG·SB-BB 집계 요청 · 복기 출시 후 링크.
- **de GTO 13편**(10-02 MB-150) · 🪶 «스팟 장면» 이미지 전파 판단 · ar·vi·tr 시리즈는 `settled-decisions` §1-E(vi는 10-09 클러스터로 해제). 🪶 구조 게이트 기존 🔴 = pt 1 · id 2 · ms 11 · hi 2 · check-de-style 8.
- **es 무르시아 `casino-odiseo-murcia-poker`**(10-03 MB-155) → 후속은 `docs/update-calendar.md` «es 무르시아» 절(매월 25일 · 10/19 VPT · 11/9 · 11/30 · 12/7). Playwright `timezoneId: Europe/Madrid`.
- **ja 대회 트랙**(F): 발행 3편(jopt-osaka · korea-poker-trip · apt-championship-taipei) 후속은 캘린더 · 후보 D·E·F 보류(사장님 09-28) · `lib/tournaments.ts` 어긋남 4건 별도 · 로케일 고유 글은 `blogLinkByLocale`.
- **ms 30편**(D · `docs/ms-translation-lanes.md`): 동결 없음 · 검수 폴더가 ms 차례일 때 MA-103 아스트라 교차 → 정정 회차 1번(kejohanan·Button/butang·«di hadapan» 판정 포함) · Q16-4 재료 = `docs/harden-queue-진행.md` §5.
- **GTO 예제 전략**(C · `settled-decisions` §1-E): 새 글 금지·필라 흡수 · 판독 10/21 GSC(«홀덤 포지션» 순위·CTR · 동크벳 «뜻»·«리드벳» 노출).
- 09-29 잔여: 새 /tournaments 카드 buyin·venue 표기 규칙(13로케일 FIELD · hi·ar SCHEMA_DESC) · ⛔ OLA Taipei 안 씀 · ⏸ GOP 제주 · S-030 솔버 사실 시트 §4 문구 솔버 회차에 · 사장님 Vercel 2FA 복구 코드 확인 필요.

## 대기열·관측 (링크만)

- GA·GSC(A): 처방 종결 · 관측 = `docs/update-calendar.md`(⑥ 규칙 축 10월 중순 · ⑧ 모바일 홈 10/14 · 족보 흡수 10/14 → 10/21). 우선순위 = 언어별 번역 · 신규 포스팅(사장님 09-24).
- 이월 대기열(B) 소진 · 장기 미결(자동 착수 아님): J-2 cooler 판정 §2-J · TDA 판본 부채 · §2-K 11건 · 확률 잔여 `docs/harden-brief/probability-closeout.md` §7-D · re-entry zh 용어 · L-2 남긴 것 `l2-en-open-rows-2026-09-26.md` 🪶 · 검수장 MB-106 대조 MA 대기.
- 검수장 PT 재판정(G): MB-112 로케일 배치 MA · MA-229 잔여 · MB-138·152·153 재검증 → 오면 판정(상위 모델) → «1차 레인 + 사본 스윕 + 렌즈». 🪶 §2-O O-5 · ja 오사카 FAQ 오독 여지 · 15로케일 betting FAQ 옛 문구 · TMTC D조 10/26 Results.
- 워크트리: `git worktree list` — calc-ko 미커밋 초안을 `git add -A`·reset으로 날리지 마라.

## 참고 경계

- 새 세션이라는 이유로 완료 글 전수 재검수·새 레인 생성·ID/DE 자동 착수 금지.
- 사실 오류 / 번역 누락 / 표현 개선 / 자기회귀를 따로 분류해 보고. 검사 자리 수를 결함 수로 부르지 않는다.
- 09-22 규칙 배포 증거: `docs/harden-brief/rules-closeout-tail.md` §8-4 · WORKLOG 09-22 (9).
