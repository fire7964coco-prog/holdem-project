# 다음 세션 알림장

## 다음 작업 지시 대기

- UI·UX 11개 지적+추가 개선 구현·검증·운영 배포 완료. 결과·캡처·재현검사 = `docs/ui-ux-improvements-2026-09-15.md`. 커밋 `60a79d9d` Vercel 배포 성공과 공개 핵심 7경로 HTTP 200을 확인했다. 기존 전체 타입698건은 증가 없음을 비교했고 실제 메일·Google 인증은 모의 검증 범위와 구분한다.
- HI 발행 마감을 끝냈다. 경위는 WORKLOG의 HI 발행 항목, 근거는 `docs/hi-gto-publication-review-2026-09-15.md`다. 다음 주제·언어는 새 사용자 지시를 따른다.

## 포스팅 배치 — 유지 규칙 (회차는 2026-09-16 종결 · 경위 WORKLOG)

- 순서 정본 `lib/featured-order.ts`. 대회 끝나면 `EVENT_UNTIL`이 홈·/blog·/tournaments 카드를 같이 자동 강등 — **새 대회 글 발행 시 거기에 종료일 한 줄 추가**. S·A 배열은 분기마다 28일 창으로 재판정.
- 4주 뒤(2026-10-14~) 비교: 기준선 = `docs/post-placement-analysis-2026-09-16.md` §2 · 검증 기록 = `docs/post-placement-verification-2026-09-16.md`.

## 시작 자료

- AGENTS → CLAUDE → 이 파일, Git 상태를 확인한다. ‘읽고 대기’ 요청이면 자동 착수하지 않는다.
- HI 재사용 자료는 `docs/keyword-bank/hi-posting-reference.md` §8의 검색·브리프·원문 계약·실제 미디어 링크를 따른다.
- 09-15 여러 언어의 IndexNow 접수를 마쳤다. 다음 발행도 **실제 변경 URL만 `--urls`로** 통지하며 날짜 전체로 재전송하지 않는다. GSC는 기존 사용자 보류 유지.

## 미결과 기록

- 일반 queue는 `docs/harden-queue-진행.md` §1, 장기 미결은 해당 대기열과 `docs/pending-work.md`에서 필요한 항목만 찾는다.
- HI 검수에서 발견한 EN counterfeiting 조건 누락은 `docs/en-first-queue.md` §3에 있다. 이번 HI 정정 종결과 EN·형제 언어의 후속 적용을 구분한다.
- **9/20경 APT 제주 이벤트 수 재확인**: `docs/update-calendar.md`의 해당 항목.
- UI·UX 점검과 HI 발행 경위는 WORKLOG.md의 해당 항목에 있다. 상시 규칙은 해당 정본 MD, 과거 인계는 `docs/handoff-archive/`에 둔다. 상세를 이 파일에 누적하지 않는다.
