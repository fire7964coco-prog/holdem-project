# 다음 세션 알림장

## 다음 세션: 말레이어(MS) GTO 해설 13편

- MS를 추천한 뒤 사용자가 새 세션 인계·마감을 요청했다. 다음 작업은 **MS 해설 13편**이다. 이번에는 인계만 정리했으며 MS 조사·집필·캡처는 시작하지 않았다.
- 09-15 확인: MS 시리즈 **0/13**, 기존 입문 8편, `/ms/solver` HTTP200. 시작 때 Git·등록 상태를 다시 확인한다. ID 13편은 발행·검증·IndexNow 접수까지 끝났다.

## 시작 자료와 순서

- 시작: AGENTS.md → CLAUDE.md → 이 파일, Git 상태 확인. ‘읽고 대기’ 요청이면 자동 착수하지 않는다.
- 집필 전 `.cursor/rules/posting.mdc`, `REVIEW-PROTOCOL.md`; 언어 정본은 `docs/keyword-bank/ms-posting-reference.md`(특히 §8), 실제 UI 근거는 `docs/ms-solver-landing-brief.md`.
- 순서·slug는 `lib/gto-series.ts`, 수치는 `docs/gto-solver-series-spec.md` §4-B, 번역 원문은 **최신 EN**. 검증된 정정 근거는 `docs/id-gto-source-contract.md`, 직전 검수 절차는 `docs/id-gto-publication-review-2026-09-15.md`를 참고한다.
- MS 검색·용어·실제 앱을 새로 확인한 뒤 공통 브리프 → 4/4/5 집필 → 실제 MS 화면·차트 26장·등록·연결 → 전편 언어/SEO/전략/수치 검수 1회 → 수정 부분 교열 1회 → 전체 빌드·모바일 → 배포·라이브·sitemap·변경 URL IndexNow 순서다.
- **ID 문체·소수 쉼표를 옮기지 않는다.** MS 정본의 anda·tangan·kad와 소수점 `2.5`를 따른다. 기존 MS 링크 대상은 실제 등록된 글만 사용한다. ID의 링크 수·검사 기대값을 그대로 복사하지 않는다.
- 도구 준비: `scripts/capture-solver-spots.mjs`·`make-solver-range-charts.mjs`는 **MS 미지원**, `check-gto-structure.mjs`는 **MS 전용 라벨 규칙 없음**. 실제 MS UI로 지원·자체테스트를 추가한다. 숫자 검사의 오류0만 보지 말고 실제13편 커버리지를 확인한다.

## 미결과 기록

- 다음 언어 이후 순서는 미정이다(HI는 추천 단계). 일반 queue는 `docs/harden-queue-진행.md` §1, 장기 미결은 해당 대기열과 `docs/pending-work.md`에서 필요한 항목만 찾는다.
- **9/20경 APT 제주 이벤트 수 재확인**: `docs/update-calendar.md`의 해당 항목.
- 이번 완료 이력은 WORKLOG.md 맨 위 ID 항목. 상시 규칙은 해당 정본 MD, 과거 인계는 `docs/handoff-archive/`에 둔다. 상세를 이 파일에 누적하지 않는다.
