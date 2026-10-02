# 다음 세션 알림장

> 갱신: 2026-10-02 (12) (de GTO 배치 B 완료 · 다음 = 배치 C) · 그 전 2026-10-02 (11) (de GTO 배치 A 완료 · MA-267 등재) · 그 전 2026-10-02 (10) (de GTO 준비 회차 완료) · 그 전 2026-10-02 (9) (다음 세션 = de GTO 13편 · 무르시아 보류 메모) · 그 전 2026-10-02 (8) (MA-259·261·263 4건 채택·배포 · MB-147) · 그 전 2026-10-02 (7) (de EPT Prag 발행 · MB-145·146) · 그 전 2026-10-02 (6) (JOPT 도쿄 건너뜀 · de EPT Prag 선정·사실 시트) · 그 전 2026-10-02 (5) (de CAPT Million 발행 · MB-143·144) · 그 전 2026-10-02 (4) (de CAPT 조사·사실 시트 · MB-141·142) · 그 전 2026-10-02 (3) (pt BSOP Millions 가이드 발행 · MB-140) · 그 전 2026-10-02 (1) (MA-253 APT 타이베이 ja+ko 정정 · MB-138) · 그 전 2026-10-01 (6) (KO APT 챔피언십 타이베이 가이드 발행 · MB-135) · 그 전 2026-10-01 (4) (MA-245 판정·반영 · MB-133) · 그 전 2026-10-01 (3) (다음 세션 회차 완료 · MB-131·132) · 그 전 2026-10-01 (검수장 MA 5건 판정·이행 · MB-129 — G절 / WPT 오스트레일리아 결과 아카이브 전환 · MB-130 — E절 / 캘린더 10월 첫 절 확인) · 그 전 2026-09-30 (WPT 오스트레일리아 사실 시트 §4) · 그 전 09-30 (/hi·/ar 토너먼트 보드 · 로케일 신설 계획 완료 · MB-127) · 그 전 2026-09-29 (zh-hant 일정 모음 글 + 아스트라 검수 · MB-122·123) · 그 전 2026-09-28 (참여 장치 배포 · 작업 한도 90분·20분) · 그 전 09-28 (방향 논의 · 추첨 버그 수정 · MB-115) · 그 전 09-28 (ja APT Championship 台北 글 · MB-114) · 그 전 09-28 (M-2 로케일 전파 144파일 · MB-112) · 그 전 09-28 (검수장 PT 보고 181행 판정·배포 · MB-110) · 그 전 09-28 (ja 대회 글 2편 발행 · MB-108) · 그 전 2026-09-27 (MA-206 요청 2건 · MB-106) · 그 전 09-27 (L-2i · MB-101) · 그 전 09-26 (L-2h · MB-097) · 그 전 09-26 (L-2g 로케일 전파 · L-2 종결) · 이전 2026-09-24 (B4 종결 · B 대기열 소진). 시작 순서: AGENTS.md → CLAUDE.md 전문 → 이 파일 → `git status` + **워크트리 3곳 status**(아래).
> 🔴 **작업 주체가 바뀐다**: 09-22까지는 **GPT(커서/Codex)로 이 폴더를 열어 작업**했다(커밋 트레일러 없음·영어 커밋 메시지 = GPT분). 09-23 GA·GSC 보고서와 처방 1회차는 Claude. **한도 리셋 후 다시 Claude 본체로 간다.** GPT가 남긴 미결은 아래 «B. 이월 대기열»에 모았다 — 정본은 `docs/backlog-closeout-2026-09-22.md` §3·§4(GPT가 쓴 체크포인트. 그 뒤 **규칙 41편·Q8-a PT·086161eb는 09-22에 배포·마감 완료**라 그 표의 해당 «남음» 칸은 낡았다).

## ▶▶▶▶▶▶ 다음 세션 = de GTO 13편 저작 배치 C (⑨~⑬) — ③ 배치 B ✅ 10-02 (12)

- 범위 = **de만**(ar·vi·tr은 사장님 판단 전 착수 금지). 근거 `settled-decisions` §1-E.
- 🔴 착수 전 필독 = **`docs/de-gto-series-translation-brief.md`**(본체 · §6 배치 절차) → `docs/de-gto-source-contract.md` → `docs/keyword-bank/de-gto-series.md` §5(고정 title) → `docs/solver-app-verbatim-de-2026-10-02.md`.
- 남은 세션: **④ 배치 C ⑨~⑬** → ⑤ 마감(렌즈 4종 · 2차 교열 · 게이트 · `gto-series-i18n` de 노드 · 랜딩 · 필라 역링크 4자리 해제 · `locale-intentional-diffs` 장면 행 · build · 배포 1회 · IndexNow · MB).
- ✅ 커밋된 산출(**index 미등록 = 라이브 아님**): 배치 A ①~④ + 배치 B `monotone-board-strategy` · `paired-board-strategy` · `low-board-check-raise` · `3bet-pot-cbet` + 장면 ①~⑧ 전부. 방식 = Opus 서브 레인 병렬(편당 1레인 · 파일 1개만 씀 · 레인 프롬프트에 아래 통일값을 그대로 넣는다).
- 🔴 **index·DE_CLUSTERS 등록은 커밋하지 않는다**(일부 등록으로 나가면 미착수 편 링크 404). 배치마다: 임시 등록 → 게이트 → `git checkout -- lib/posts-de/index.ts scripts/check-de-style.mjs`. 🪶 index.ts는 **CRLF** — 임시 등록 스크립트는 앵커가 없으면 throw하게 써라(10-02 (12) 조용한 무변경 사고). audit:hard는 **`--locale=de`** 필수(없으면 KO 파일) · de에서는 slug 인자 무시 → 출력에서 grep.
- 통일값(레인 지시에 그대로): «Geprüft»·출처 날짜 = **독일식 DD.MM.YYYY** · 태그 = **소문자 검색어형** + 필라 소유 태그 금지(키워드 팩 §4) · 앱 내비 «GTO-Trainer» · `Set/Drilling` 앱 행 축어 + 산문 Set/Trips 구분 · CTA 링크 문구 = «[kostenlosen Poker-Solver](/de/solver)»(8편 통일) · date/updated = 2026-10-02 임시(마감 때 실제 발행일) · 범위 표기는 양끝 %(`7,6%–9,2%`) — ko가 «A~B%»면 숫자 게이트 🔴1이 나오나 결함 아님(⑧ 7,6 선례). FAQ 질문 현지화는 **답과 어긋나지 않게**(⑦ «erlaubt»를 레인이 빼서 헤드가 복원).
- 🪶 마감 렌즈에 넘길 EN 유래 의심(고치지 않음 · 원문 계약 범위 밖):
  - 배치 A: ③ 실전 bullet «the button c-bets this board at a high frequency…»(BTN c-bet 빈도 없음) · ② «the check-raises come mostly from 88, 33 and the two pairs» · ② FAQ «ever» 과장(99,8%) · ① EN title/desc «c-bet frequencies» · ③ «grades … in big blinds lost» vs de 랜딩.
  - 배치 B: ⑥ «four ranges out of five are the same pair of sixes…»(뜻 = 각 레인지 5핸드 중 4 · de는 의미로 옮김) · ⑥ «Every other single-raised flop … produced sets»(BvB도 SRP) · ⑥ «Every figure below comes from … solver»(17,2% 등은 조합 산수) · ⑤ ranges 캡션 «flush draws … favor the button»(차트에 Draws 패널 없음) · ⑤ «rarest of the common textures» 무근거 · ⑤ H2#1 = FAQ Q1 중복 · ⑦ ranges 캡션 «what the check-raise is actually made of»(전체 레인지 차트) · ⑦ tldr «almost all of it draws» vs 본문 «<1/4 made» · ⑦ FAQ «Give the solver two sizes … reason does not» 무근거 · ⑦ «Below two pair, every hand in the raise holds a straight draw»(상위 7행 한정) · ⑧ MDF note «pure-bluff assumption breaks»(본문은 09-26에 «weak ground»로 완화 — note 미추종) · ⑧ H2 «all six combos of sets … owns the top outright»(BTN 22 셋 3콤보) · ⑧ «overpairs and ace-high with nothing between» vs ⑩ 09-26 정정 · ⑧ EN imageAlt «entire 13x13 grid»(de alt는 화면대로).
- 🪶 레인 보강(렌즈 확인 대상): 배치 A ①④ «Lead (Donk Bet)» 첫 풀이 · ②④ OOP/IP 첫 풀이 · H2/FAQ 일부 현지화. 배치 B ⑤ H2#2 Lead/Donk Bet 괄호 · ⑤⑦⑧ OOP/IP·BB·BTN·SPR 첫 풀이 · ⑦ «MDF» 이름 부착 · ⑦ 조건표 «Bet Size» 단수(사이즈 1개 — 통일 여부 마감에) · ⑦ 비교표 열 «Nr.» · ⑧ «die SPR»(여성 · 코퍼스 선례 없음 · 키워드 팩 초안은 «ein SPR») · ⑤ «suited Müll».
- 준비물: 배치 C 장면 ⑨⑩⑪⑫는 첫 단계에 `node scripts/make-gto-spot-scenes.mjs --lang=de <key…>`(⑬ 견본 있음 · key = 기존 `gto-<key>-oop-de.webp` 이름: 3bp-dynamic · 3bp-low · sb-king-mid · sb-connected) → 전부 Read 확인(⑪~⑬은 **SB가 먼저** · 팟 6 · 스택 97).
- 🪶 범위 밖 관찰(자동 착수 금지): 구조 게이트 기존 🔴 = pt 1 · id 2 · ms 11 · hi 2(기존 드리프트 · 원문 계약 §2-B).

## ▶▶▶▶ KO `apt-championship-taipei-2026-guide` — ✅ 발행 (10-01 (6) · MB-135)

✅ 발행·배포(WORKLOG 10-01 (6)). 훅 만료 = 캘린더 «KO apt-championship 훅이 죽는 날»(11/13·11/24·11/29). 🪶 남은 것(자동 착수 금지): ① 보드 카드 note·venue 낡음(«210개 트로피 이벤트» → 209 · «+ Asia Poker Arena» → Red Space 단독) — 13로케일 사전(`lib/tournaments-i18n.ts`) 동시 수정이라 F절 «어긋남 별도 회차»에 합침 ② Natural8 한국 접속 불가(10-01 «services are unavailable in the country you are in») → 기존 KO 글 apt-jeju·apt-incheon의 Natural8 위성 STEP 절 판정 필요(market-profile/ko B-5) ③ `holdem-tournament-how-to-enter`에 역링크 1줄(SEO 렌즈 low).

## ▶▶▶ 다음 세션 회차 (사장님 10-01 지시 — «새 세션에서 이거 하자»)

✅ **10-01 (3) 완료·배포**(MB-132 · WORKLOG 10-01 (3)): WPT 기존 결함 4 · O-5 5묶음 · M-5 판정(채택 6 · 기각 5). 판정표 = `docs/harden-brief/pt-rejudge-intake-2026-09-28.md` §8-2.
🪶 남은 것(자동 착수 금지 · 사장님 지시 시): ① flush-vs-straight «rarer always wins» 보류 판정(7장 빈도 반례 · 문장 재구성) ② §8-2 «미판정 이월» 행(betting-actions 146·156·188 · position-play · beginners · chart 81·103 · 3bet 42·128 · split/all-in · positions · pot-odds 59 — 대부분 X1형 예상) ③ ms betting-actions FAQ 216 «tournament heads-up» 꼬리 절 누락(ms 정정 회차에).

## ▶▶ 다음 세션 (09-29 갱신)

- ✅ **`/tournaments` 로케일 신설 계획 완료**(09-29 승인분 · 회차 1 id·ms·vi → 회차 2 pt·tr → **hi·ar 09-30** · WORKLOG 09-30 (1) · MB-127). 보드 = ko + 13로케일. 날짜 문장 만료 = 캘린더 11월 절. 🪶 앞으로 새 카드의 buyin·venue는 통화 표기·공식 라틴 표기로 쓴다(한국어 값은 13로케일 FIELD 등재를 강제한다) · 새 행에 schemaDescription을 달면 hi·ar `SCHEMA_DESC_*`에도 등재.
- 🪶 **판정 대기(자동 착수 금지)**: 허브 셸 문구(«Log in»·«Write Post»·«Trending this week»·«Community languages»)가 **tr·vi·ar 보드에서 영어로 나온다** — `lib/hub-i18n.ts` MAP에 세 로케일이 없다(하단 탭 라벨은 있음). 그 사전엔 추첨 이벤트 카드 문구도 같이 들어 있어, 언어별 이벤트 설계(아래 09-28 절)와 같이 정할지 사장님 판단 필요.

- ✅ **zh-hant 대만 대회 1편 발행** — `tmt-championship-2026-guide`(TMTC 10/16~26 · WORKLOG 09-29 (2) · MB-119). 사실 정본 `docs/tournament-factsheets/2026-10-tmtc.md` · 훅 만료 = 캘린더 10월 첫 절(10/1 온라인 위성 · 10/16 패키지 · 10/26 이후 결과 전환).
- ✅ APC Taipei IV = 취소 판정·보드 삭제(WORKLOG 09-29 (3) · MB-120).
- ⛔ **OLA Poker Tour Taipei 글은 안 쓴다**(사장님 09-29 «검색이 너무 없다» · zh-TW 평소 월 10·대회 달 170). 보드 카드만 유지. APT Championship은 공식 독식이라 제외.
- ✅ **zh-hant 대만 대회 일정 모음 글 발행 + 아스트라 교차 검수 반영** — `taiwan-poker-tournaments-guide`(WORKLOG 09-29 (6)·(7) · MB-122·123 · 라이브 확인 · 보드 `ctp-11th-anniversary` 신설). 판정 = 사실 시트 §4·§5. 갱신 시한 = 캘린더 10월 첫 절(10/4·10/11·TMT 21 발표·K-ETA 12/31). 🪶 «아스트라로 검수» = 본체에서 `codex exec` read-only 서브(메모리 astra-subreview). ✅ WWP S5 보드 카드 `wwp-series-5` 편입(WORKLOG 09-29 (8) · MB-124 · 10/11 종료 뒤 결과·과거형은 모음 글 캘린더 회차와 같이). ▶ 다음 = 사장님 지시 대기(🪶 마카오 MGM 주최 원문 확보 시 B→A 교체).
- ✅ S-027 회신 = MB-121(보드 유형 정의·보고 싶은 값 = `docs/reply-to-solver-2026-09-29.md` · 팩트시트 4곳 정정). ✅ S-028 회신 = MB-136(팩트시트 0.3% 정정 · 레인지 출처 문구 **해제**). 🪶 S-030(10-02 · MB-142 ACK): `docs/solver-factsheet.md` §4에 «턴/리버 = 기기 즉석 계산(목표 0.3% 기본 — 폰에서 느리면 폰의 턴만 0.5%~1%로 낮출 수 있음 · 실기기 측정 전)» 반영 + 유저 측 «자리로 레인지 채우기»(`f20278d`) 추가 — 솔버 회차에. ▶ 대기: 솔버 `집계_srp-btn-bb.json`(**0.3% 재계산 뒤 · 10-05 안팎 · 날짜 약속 없음** · 도착은 S-행) → 오면 C벳 필라 보드 유형별 표 회차(모양·각주 = `docs/solver-factsheet.md` §3 · «페어드×모노톤» = 해당 없음). 🔴 1% 숫자는 글에 쓰지 않는다.
- ⏸ **KO GOP 제주 2026 가이드는 보류**(사장님 09-29 «이거 말고 대만걸로»). 재개 시: LES A 외국인 전용이라 내국인 참가 불가가 글의 첫 관문(`apt-jeju-2026-fall-guide`·`gop-incheon-2026-ii-guide` 처리 방식) · KO 수요 볼륨부터 확인.
- ja는 추가 후보 D·E·F 보류(아래 F절).

## ▶ 다음 세션 (사장님 09-28)

**참여 장치 + 이벤트 재설계 — ✅ 배포 완료**(09-28 `ae6c7c41` · SQL 실행 · 라이브 확인 · MB-117 · IndexNow). 설계·파일 지도 = `docs/participation-event-redesign-design.md` §8 · 추첨·판독 시한은 `docs/update-calendar.md` 11월.
- 🪶 라이브에서 **쓰기 경로**(참가 표시·투표 저장)는 아직 아무도 안 눌러 봤다 — 테스트 표로 집계를 오염시키지 않으려고. 사장님이 한 번 눌러 보거나 첫 실사용자 투표가 /admin «후기·투표»에 잡히는지 확인.
- 09-28 2차: 추첨 3명 × 3만 원 · 대상 = APL 서울만(WPT·GOP 외국인 전용 카지노 제외) · /tournaments 보드 APL 카드 연결.
- ▶ **다음 논의 = 언어별 이벤트**(사장님: 대회가 언어마다 다르고 글 작성이 적으니 몇 개 언어만) — 설계부터. 🔴 **사장님 09-28 확정: 다른 언어는 지금 «Coming soon»(이벤트 탭 `review-event-panel.tsx` 비-KO 분기) 그대로 두고, 나중에 한 언어씩 연다** — 1순위 ja(JOPT 오사카 등 일본인이 갈 수 있는 대회 · 상품·표시 규정 현지 기준). 한 번에 여러 언어 열지 않는다. 준비 중 안내 문장 추가(13언어)도 그 회차에 같이.
- 펍 글은 대상 아님(사장님).
- 09-29: /tournaments [나도 참가] 옆 파랑 네온 화살표 배포(`cd5d4c3f` — Vercel이 안 걸려 빈 커밋 `5def3a46`으로 재배포). 가이드 글 참가 바에는 미적용(지시 시). 🪶 사장님 Vercel 2FA 인증 앱 분실 → 복구 코드 확인 필요(대시보드 필요할 때 막힘).
- C벳 필라 데이터 표 = 위 09-29 절(MB-121 · 솔버 집계 대기). 솔버 이해 = `docs/solver-factsheet.md`.

## 사장님이 정한 순서 (09-23)

**① GA 개선작업 마무리 → ② 기존 핸드오프(GPT 이월) 작업 이어서.** 한 세션 한 묶음, 끝나면 이 파일에서 그 행을 지운다.

## A. GA·GSC 보고서 개선작업 (`docs/seo-report-2026-09-23.md` §7-1 · 사장님 착수 지시 09-23)

| 회차 | 항목 | 상태 |
|---|---|---|
| 1 | ②①④⑤ — 대회 점검 · 족보 필라 헤드텀 정렬 · 롱테일 FAQ 흡수 · 버튼포지션 판정 | ✅ `9f128346` 배포·라이브 3/3·IndexNow 3 (WORKLOG 09-23 (2)) |
| 2 | ③ AI 유입 /en/solver — 첫 화면(390·1440)에 직답+CTA **이미 있음**(처방 전제 충족). 공백은 계측: 솔버 앱 클릭이 GA에 0 → `solver_open` 이벤트 배포. **판독 10/7경**(`docs/update-calendar.md` 10월) 전엔 랜딩 문안 손대지 않는다 | ✅ 계측 배포 (WORKLOG 09-23 (3)) |
| 1.5 | KO 대회 가이드 3편(`apl-seoul-2026-guide`·`wpt-seoul-2026-guide`·`gop-incheon-2026-ii-guide`) 발행 · 사실 정본 `docs/tournament-factsheets/2026-10-kr-apl-wpt-gop.md` · 이후 갱신 시한은 `docs/update-calendar.md` 10~11월 | ✅ WORKLOG 09-23 (4) |
| 1.6 | ja `japan-poker-tournaments-guide` 만료 갱신(AJPC 과거형·東京#03 가이드 공개 반영) · 잔여(AJPC 결과 게재 시 편입)는 캘린더 9월 절 | ✅ WORKLOG 09-23 (5) |
| 3 | ⑦ 번역 반응 순 → id 쿼리 맞춤 2편 ✅(WORKLOG 09-24 (2)). **ja는 보류**(사장님 09-24: 노출이 막 시작돼 수정 의미 작음) · 효과 판독 10/21 캘린더. 🔴 **당분간 우선순위 = 언어별 번역작업 · 신규 포스팅**(사장님 09-24) | ✅ |
| 09-30 보고서 | 28일 재분석(WORKLOG 09-30 (3) · 문서 https://claude.ai/code/artifact/2eabb73b-0521-4a8e-ae3e-57ab4d44608c). ✅ 권고 3건 이행·배포(WORKLOG 09-30 (4) · MB-128): ja flush-vs-straight 쿼리 맞춤 · ko 「포커 홀덤 차이」 2차 조치(seoTitle 유지) · 「버블구간」 조치 없음 → **판독 10/21**(`docs/update-calendar.md`). ✅ 보완 1(WORKLOG 09-30 (5)): `ga-device.mjs` 보정 기본화 · `gsc-lang.mjs` zh-hant 추가 · **«격차는 신규에서만» 폐기**(재방문 격차 +23.4p · 메모리·ux-brief 정정). ✅ 보완 2(WORKLOG 09-30 (6)): 질문↔답 어형 스윕 = **패턴 아님**(EN 1건 → `en-first-queue` §2-N · 글 수정 0). ✅ 보완 3(WORKLOG 09-30 (7)): 모바일만 튕기는 4편 = **결함 아님**(소표본 꼬리 · 직전 8주 59~72% · 화면 정상 · 수정 0). ✅ 보완 4·5(WORKLOG 09-30 (8)): 「3벳」 = 조치 없음(09-06~10 닷새 몰린 노출 · 라이브는 Reddit 번역 스레드 독식) · `/en/blog/holdem-equity` = 09-24~27 나흘짜리 일시 노출, 09-28 소멸 · 원인 확정 불가. **09-30 보고서 보완 전부 종결.** | ✅ |
| 관측 | ⑥ 규칙 축(10월 중순) · ⑧ 모바일 홈(10/14) · 족보·흡수 효과(10/14 7일창 → 10/21 28일창) → `docs/update-calendar.md` · 기준선 `docs/keyword-bank/ko-longtail-absorb.md` | — |

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

## E. WPT 오스트레일리아 가이드 — ✅ 결과 아카이브 전환 완료 (10-01 · MB-130)

- 8로케일 전환·배포 끝(WORKLOG 10-01 (2) · 사실 정본 `docs/tournament-factsheets/2026-09-wpt-australia.md` §4 = 36/36). $290 창구 만료도 같은 회차에 처리.
- 캘린더 9월 측정 항목(hand-chart·족보 앵커·레이아웃·de 색인)은 09-23 보고서 흡수 여부 확인 후 ✅ 정리.
- ▶ 캘린더 10월 다음 시한: ✅ TMTC 온라인 위성 과거형(10-02 · MB-139) · 10/4 港撲盃 종료 · 10/7경 `solver_open` 판독 · 10/10~12 ja 3건. 10-01 확인분(전부 미공개 유지)은 캘린더 해당 절 🪶.

## F. 나라별 대회 트랙 재개 — ja 먼저 (사장님 09-27 · 플레이북 §00 개정)

- ✅ **ja 신규 2편 발행**(09-28 · MB-108 · WORKLOG 09-28 (1)): `jopt-osaka-02-2026-guide` · `korea-poker-trip-gop-wpt-seoul-2026`. 사실 정본 = 각 사실 시트 §7(09-28 재확인).
- ✅ **3편째 `apt-championship-taipei-2026-guide`**(09-28 · MB-114 · WORKLOG 09-28 (4)) · 시트 `docs/tournament-factsheets/2026-11-apt-championship-taipei.md` · 훅 만료는 캘린더(10/10~11 JOPT Games · 11/29 결과). 검수 폴더(GPT 아스트라)에 MB-113과 함께 청구.
- ▶ **두 글의 후속 갱신은 전부 캘린더에**(`docs/update-calendar.md` 10월 «미발표 → 공개 추적» · «마지막 입구» · 11월 종료 회차): 오사카 Players Guide(受付締切·プライズ総額) · 오사카 Online Day 1 공지 · WPT 서울 바우처 이용 방법 공지 · 10/25 온라인 예선 종료 · 11/3·11/8·11/9 결과 아카이브(4곳 동시).
- ⏸ **남은 후보 D·E·F는 보류**(사장님 09-28 «미결정이 있으니 나중에») — D JOPT 2027 도쿄#01(11/26 · 権利 수 공개 대기) · E WPT WC(10/30 · 일본 관련성 약함) · F SPADIE(10/22 · 본전 비용 미발표). 자동 착수 금지 · 공개되면 사장님 지시로 — 캘린더 등재 · 지시 대기. `lib/tournaments.ts` 어긋남 4건(후보 문서 §4)은 별도 회차.
- 🪶 보드 링크: 로케일 고유 글은 `blogLinkByLocale`(`lib/tournaments.ts` · 해석 = `lib/tournaments-blog-links.ts`)에 건다 — KO 가이드와 슬러그가 다른 ja 글을 대회 카드에 띄우는 자리.

## G. 검수장 PT 재판정 보고 — 판정·전파 끝 (MB-110 · MB-112)

- ✅ 판정·배포 `6164c748`(EN 23 + PT 23) → ✅ **M-2 로케일 전파 `25fe6027`**(핵심 7로케일 144파일 · check:drift 핵심 0). 판정표·결과 = `docs/harden-brief/pt-rejudge-intake-2026-09-28.md` §8 · 대기열 = `docs/en-first-queue.md` §2-M.
- ✅ **델타 재검증 요청 5건(MA-231·233·235·238·240) = 10-01 전부 채택·배포**(MB-129 · EN 7자리 → 9로케일 · PDF 3문구 · `docs/en-first-queue.md` §2-O · WORKLOG 10-01 (1)). ▶ 검수장 남은 배치(MB-112 로케일 odds → strategy → rankings) 결과 MA가 오면 같은 방식. 남긴 것 = §2-O O-5(자동 착수 금지).
- ▶ **MA-229 대회 글 5편(ja 3 · zh-hant 2) 교차 검수** — 1회차 부분 결과 MA-245 = ✅ 4/4 채택·배포(10-01 (4) · MB-133: 오사카 Online Day 1·사이드 예외 · TMTC Mini Main 15,000(이미지 재렌더) · TMTC 웹↔PDF 충돌 병기). 검수장은 맥락 한도로 중단 — **잔여 미판정(과거 실적·입국/교통·위성·목록 완전성 등)은 검수장 다음 회차 MA를 기다린다**(자동 착수 금지). ✅ 2회차 MA-248(JOPT)·MA-249(Korea) = 5/5 채택·배포 + KO gop 형제 사본(10-01 (8) · MB-137). ✅ 3회차 APT MA-253 = 5/5 채택·배포 + KO 형제 사본(10-02 (1) · MB-138 · 시트 §12) · TMTC MA-255 = OK 종결. ✅ **MA-259 T1·T2 · MA-261(실제 대상 = tmt-championship) · MA-263(showdown FAQ 9사본) = 10-02 (8) 전부 채택·배포**(MB-147 · 판정표 = 대만 시트 §6 · TMTC 시트 §2). 🪶 파생 1건(ja 오사카 FAQ «現金だけでは入れません» 오독 여지)은 대만 시트 §6 — 자동 착수 금지. ▶ 다음 = 검수장 MB-138 재검증. TMTC D조 날짜는 10/26 이후 결과 전환 때 Results 탭으로 확정(캘린더 TMTC 절).
- ▶ **MA-267(10-02) 판정 대기** — MB-149로 ACK·등재. 요청 3묶음: ① betting-actions 자기 베팅 FAQ de#80·es#57·zh#67·zh-hant#96 NL/PL 한정 누락(FL 100→150 반례 · EN/PT 동형 후보 2) ② zh-hant showdown TS62 快速解答 #12·13 자발 머크(TDA) vs WSOP 제재 미구분 ③ zh-hant blind-meaning FAQ TS181/#58 NL/PL 한정. 근거 = 검수장 `reports/2026-10/검수-MB129-132-rules-로케일-2026-10-02.md`. 다음 MA 처리 회차에 원문 대조 후 채택/기각(상위 모델).
- ⏸ 남은 8편(strategy 2 · tournament · glossary) 보고가 오면 같은 방식으로 판정(상위 모델) → 전파는 이번처럼 «1차 레인 + 사본 스윕 + 렌즈». 검수장 요청 2건(EN 원장 beginners #42 라벨 · 새 문면 델타 재검증)은 회신 대기.

## 참고 경계

- 새 세션이라는 이유로 완료 글 전수 재검수·새 레인 생성·ID/DE 자동 착수 금지(GPT 체크포인트 §5와 같은 규율).
- 사실 오류 / 번역 누락 / 표현 개선 / 이번 수정의 자기회귀를 따로 분류해 보고. 검사 자리 수를 결함 수로 부르지 않는다.
- 09-22 규칙 배포 증거: `docs/harden-brief/rules-closeout-tail.md` §8-4 · WORKLOG 09-22 (9).
