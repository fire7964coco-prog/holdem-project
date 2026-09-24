# 다음 세션 알림장

> 갱신: 2026-09-24 (B1 종결). 시작 순서: AGENTS.md → CLAUDE.md 전문 → 이 파일 → `git status` + **워크트리 3곳 status**(아래).
> 🔴 **작업 주체가 바뀐다**: 09-22까지는 **GPT(커서/Codex)로 이 폴더를 열어 작업**했다(커밋 트레일러 없음·영어 커밋 메시지 = GPT분). 09-23 GA·GSC 보고서와 처방 1회차는 Claude. **한도 리셋 후 다시 Claude 본체로 간다.** GPT가 남긴 미결은 아래 «B. 이월 대기열»에 모았다 — 정본은 `docs/backlog-closeout-2026-09-22.md` §3·§4(GPT가 쓴 체크포인트. 그 뒤 **규칙 41편·Q8-a PT·086161eb는 09-22에 배포·마감 완료**라 그 표의 해당 «남음» 칸은 낡았다).

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
| 관측 | ⑥ 규칙 축(10월 중순) · ⑧ 모바일 홈(10/14) · 족보·흡수 효과(10/14 7일창 → 10/21 28일창) → `docs/update-calendar.md` · 기준선 `docs/keyword-bank/ko-longtail-absorb.md` | — |

## B. 이월 대기열 (GPT 작업분 · A 끝난 뒤 · 한 번에 하나만)

▶ **다음 세션 = B2부터** (B1 확률 7편은 09-24 (4)~(7)로 종결). 09-24 ms 단건 경화 2편이 낳은 EN-먼저 11건은 `docs/en-first-queue.md` §2-K(자동 착수 대상 아님).

| 순 | 묶음 | 위치·상태 | 재개 문서 |
|---|---|---|---|
| B2 | **Q8-b ID** 용어 정리 | `../Holdem-queue` clean · 준비만(25파일 179줄 범위 확정, 쓰기 0). ID showdown은 규칙 41편에서 이미 처리 → 중복 수정 금지 | `docs/harden-brief/queue-Q8-b-id-de-잔여.md` · `docs/keyword-bank/id-posting-reference.md` §5/5A |
| B3 | **Q8-b DE** | 미착수 · 별도 회차 | 같은 브리프 |
| B4 | 사실 묶음(미착수): SHC77/88 첫 탈락 페어 · WSOP 계정 2개(LIVE+Caesars) · paired-board 22 counterfeit 리버조건 · flush-vs-straight 반복 설명 / 표현: cooler J1 라벨 · EN hand-rankings short-deck 중복 · DE M존(연속값 유지) / **TDA 판본 부채**(2026 v1.1 번호 변경 — 전역 교체는 별건) | 범위는 `docs/en-first-queue.md` 정본에서 고정 후 | `docs/backlog-closeout-2026-09-22.md` §4 |

- 워크트리 확인: `git worktree list` — calc-ko·ja·queue·zh·zh-hant 모두 09-24에 main `73d0818d`로 ff 동기화(calc-ko 초안 diff 보존 확인). **calc-ko의 미커밋 초안을 `git add -A`·강제동기화·reset으로 날리지 마라.**
- 장기 미결(자동 착수 대상 아님): 확률 묶음 잔여(answer-echo LABELS de·es·id·pt 미등록 · ja/zh 기존 도입문 과장 단정 등 = `docs/harden-brief/probability-closeout.md` §7-D «남긴 것») · re-entry zh/zh-hant 용어 판정 · solver-client5 SEO 표현 · es LATAM · 우편함 회신 대기(마지막 발신 MB-079 — 번호는 파일 재확인). 시한은 `docs/update-calendar.md`.

## 참고 경계

- 새 세션이라는 이유로 완료 글 전수 재검수·새 레인 생성·ID/DE 자동 착수 금지(GPT 체크포인트 §5와 같은 규율).
- 사실 오류 / 번역 누락 / 표현 개선 / 이번 수정의 자기회귀를 따로 분류해 보고. 검사 자리 수를 결함 수로 부르지 않는다.
- 09-22 규칙 배포 증거: `docs/harden-brief/rules-closeout-tail.md` §8-4 · WORKLOG 09-22 (9).
