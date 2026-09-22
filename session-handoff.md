# 다음 세션 알림장

> 갱신: 2026-09-22. 최신 사용자 지시: **“정리해줘 새새션에서 작업하게”**.
> 이번 세션은 **부분 완료 상태로 중단·이관**했다. 전체 잔여 완료가 아니다. 새 회차 자동 착수·전체 재검수 금지.
> 시작 순서: AGENTS.md → CLAUDE.md → 이 파일 → 각 워크트리 git status. 이전 에이전트가 계속 실행 중이라고 가정하지 않는다.

## 먼저 알아야 할 상태

- main의 마지막 콘텐츠 커밋은 **0c74affa**(Q8-a PT 머지, 아직 미배포). 마지막 push **086161eb**의 Q14/H1/core round2는 2026-09-22 (7)에 라이브118·FAQ1325·H1 세 조합·IndexNow103·MB-079까지 **마감 완료**했다. 이관/마감 문서 커밋은 그 뒤 로컬에만 있다.
- **main에 검수 전 포스트 21편이 미커밋**이다. core 9언어 showdown 요약 + fr/it/ro/pl/ru/uk의 all-in·showdown 각 2편. git add -A, 일괄 되돌리기, 무검수 커밋·push 금지.
- **../Holdem-calc-ko / harden-calc-ko**: HEAD 603deb7a, EN 확률 관련 7편 + 브리프 1개 미커밋. 자체검사만 완료, 독립 검수·번역·이미지·빌드 미완료. 계산기 코드 추가 작업이 아니라 포스트 초안이다.
- **../Holdem-queue / harden-queue**: HEAD a5def6b7, clean. Q8-a는 main에 머지됨. Q8-b ID는 준비만 했고 수정 0; DE도 미착수.
- ja/zh/zh-hant에는 Q14 §6-0 통지를 남겼고, 2026-09-22 (7) 마감 마지막에 `lane:sync -- --apply`를 적용했다. main·calc의 미커밋 포스트 초안은 건드리지 않았다.

## 새 세션에서 할 일 — 한 묶음만

1. **086161eb 배포 마감은 끝났다. 다시 검증·재제출하지 않는다.** 증거와 제외 목록은 docs/backlog-closeout-2026-09-22.md 최신 체크포인트와 WORKLOG 2026-09-22 (7).
2. 다음 회차는 사용자의 새 지시를 받아 **main 규칙 초안의 제한 검수·마감 또는 calc EN7 독립 검수 중 한 묶음만** 고정한다. main의 미커밋 초안과 다른 묶음을 섞지 않는다.
3. Q8-b ID/DE·전체 번역·전체 재검수는 자동 착수하지 않는다.

## 필요한 문서만

- main 규칙 초안: docs/harden-brief/rules-closeout-tail.md **§6 이관 체크포인트**. 41편 계획 중 21편만 초안; 검사 자리 수는 결함 수가 아니다.
- EN 확률 초안: **../Holdem-calc-ko/docs/harden-brief/probability-closeout.md §7**이 최신이다. main의 같은 경로에는 EN 구현 보고가 아직 없다.
- Q8-a/Q8-b: Q8-a 경위는 실행표 및 커밋 a5def6b7; Q8-b 정본은 docs/harden-brief/queue-Q8-b-id-de-잔여.md. ID showdown은 main 규칙 초안이 소유하므로 중복 수정 금지.
- core/ar 완료 내용: docs/harden-brief/rules-closeout-core-ar.md. Q14 상세: docs/harden-queue-진행.md 및 해당 Q14 브리프. 이미 고친 전 글을 다시 검수하지 말고 미완료 검증만 한다.
- 경위: WORKLOG.md **2026-09-22 (6)**. 기존 장기 미결: docs/en-first-queue.md, docs/harden-queue-진행.md §2, docs/pending-work.md. 실행표 판정과 실제 코드를 먼저 대조한다(옛 대기 문구가 남음).
- 유지 결정: docs/settled-decisions.md. 시한: docs/update-calendar.md. 우편함 마지막 확인 발신은 mailbox/out-본체.md **MB-078**; 다음 번호는 파일을 다시 확인한다.

## 재작업·범위 팽창 방지

- 사실 오류/번역 반영 누락/용어·구조 개선/이번 수정의 자기회귀를 별도로 보고한다. 파일 수·검사 자리 수를 오류 개수로 부르지 않는다.
- 새 세션이라는 이유로 완료 글 전수 재검수, 새 레인 생성, 미착수 ID/DE·전체 번역을 자동 실행하지 않는다. 한 묶음의 수정→검증→배포 경계를 정한다.
- H3 오프수트 티어 확장·GA/Analytics 설정·새 기능/SEO 확장·미래 관측·cooler J2 기각 재론은 이번 인계의 자동 실행 대상이 아니다.
- 원래 핸드오프는 docs/handoff-archive/2026-09-22-before-session-transfer.md에 보존했다. 통독하지 말고 필요한 경위만 검색한다.
