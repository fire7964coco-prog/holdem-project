# 다음 세션 알림장

> 갱신: 2026-09-24 (B4 종결 · B 대기열 소진). 시작 순서: AGENTS.md → CLAUDE.md 전문 → 이 파일 → `git status` + **워크트리 3곳 status**(아래).
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

▶ **B 대기열 소진** (B1 확률 09-24 (4)~(7) · B2 ID 용어 (8) · B3 DE 용어 (9) · B4 EN-먼저 사실·표현 (10) 종결). **다음 세션 = 사장님 09-24 우선순위(언어별 번역작업 · 신규 포스팅) 중 지시 대기** — 자동 착수 금지. B4가 남긴 것: J-2 cooler «could never correctly fold» 판정(판정 선행 · en-first-queue §2-J) · TDA 판본 부채(별건) · §2-K 11건(자동 착수 대상 아님). DE 계산기→bubble 링크는 EN related 패리티로 **하지 않는다**(backlog §4 확정).

- 워크트리 확인: `git worktree list` — calc-ko·ja·queue·zh·zh-hant 모두 09-24에 main `73d0818d`로 ff 동기화(calc-ko 초안 diff 보존 확인). **calc-ko의 미커밋 초안을 `git add -A`·강제동기화·reset으로 날리지 마라.**
- 장기 미결(자동 착수 대상 아님): 확률 묶음 잔여(answer-echo LABELS de·es·id·pt 미등록 · ja/zh 기존 도입문 과장 단정 등 = `docs/harden-brief/probability-closeout.md` §7-D «남긴 것») · re-entry zh/zh-hant 용어 판정 · solver-client5 SEO 표현 · es LATAM · 우편함(09-25 정리 · 본체 앞 미회신 = **MA-172 하나**, 의도적 보류): 수신 11건은 `docs/en-first-queue.md` §2-L로 등재·MB-083 회신. 착수 가능 = **L-1 로케일 고유**(es·zh·zh-hant ~75자리) · 계산기 문구 5종+로케일 6. 보류 = EN-먼저 전부(검수장 EN 재검증 최종 MA와 합침) · 계산기 레인지 3건은 **Claude 권고안으로 확정**(사장님 09-25 위임 · intake §3 — 착수 가능 쪽) · cooler 인접 2건(검수장 회신 대기 · MB-083 요청 1). 🔴 세션 시작 시 우편함 점검(CLAUDE.md 세션 시작 4). 시한은 `docs/update-calendar.md`.

## 참고 경계

- 새 세션이라는 이유로 완료 글 전수 재검수·새 레인 생성·ID/DE 자동 착수 금지(GPT 체크포인트 §5와 같은 규율).
- 사실 오류 / 번역 누락 / 표현 개선 / 이번 수정의 자기회귀를 따로 분류해 보고. 검사 자리 수를 결함 수로 부르지 않는다.
- 09-22 규칙 배포 증거: `docs/harden-brief/rules-closeout-tail.md` §8-4 · WORKLOG 09-22 (9).
