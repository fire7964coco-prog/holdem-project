# CALC-SHARED-2 — 계산기 공용 잔여 8건

## A. 범위·기준

- 2026-09-22 사용자 병렬 잔여 마감 승인. 시작 main `7c9f25a9`, clean, `git merge main` 최신.
- 구현 2개: `components/calculator/calculator-tool.tsx`, `app/calculator/calculator-client.tsx`.
- EN 사전 + de/es/fr/hi/id/ja/ms/pt/zh/zh-hant 사전 10개, EN 포함 FAQ 11개. KO FAQ는 이미 가중 설명을 받았으므로 필요 회귀만.
- 정본: CLAUDE/AGENTS/session-handoff 통독, hardening-protocol·REVIEW-PROTOCOL·multilingual-localization·screen-review와 toolkit·DESIGN 읽음.
- 파일 소유권: 본 담당 EN·KO·구현·브리프, 독립 보조 10locale dict/FAQ. main·posts·queue 문서·sitemap 커밋 금지.

## B. 판정

1. SPR 실제 비율로 존 판정. 3.95/7.95/14.95 등의 표시 반올림이 경계를 넘으면 각각 <4/<8/<15로 표기해 판정과 표시의 모순을 방지.
2. 정확 확률 카드의 Rule of 4/2 캡션을 정확값으로 교체. 근사 계산은 별도 암산 행에 그대로 보존. H-2 중복 병합.
3. 고정 7아웃츠의 27.8% 행에서 플랍 셋 예시 제거. 플랍 셋은 다음 카드 미스 후 리버 아웃츠가 증가해 고정7과 다름. 숫자 변경 없음.
4. ICM 콜·폴드 비교는 실제 승리/무승부/패배 확률의 가중합. 탈락 시 실제 확보 상금 반영. 입력 도구는 승률 산출기가 아님.
5. ICM 비율차 부호는 분배 특징이지 전략 신호가 아님. 버블 조언은 미들스택 위험 프리미엄·커버 관계·극숏 예외 조건.
6. 양의 유한 스택/상금과 상금 비증가 순서 검사. 동액 지급 허용.
7. 플레이어 입력/결과는 P번호; 메달은 실제 상금 순위 입력에만 유지.
8. 동적 차이는 로케일별 percentage-point 단위. KO 기존 %p 보존.

## C. 검증·미결

- C 진입 `git merge main` → `0a3eb6da` 충돌 없이 수신. 구현·검증 완료, 본체 머지 대기.
- 독립 검산 156검사: 실제 두 소스에서 함수 추출해 20아웃츠·SPR경계·ICM 입력과 독립 순열재귀 대조. 셋 예시 8♠8♥ / 8♦K♣2♠의 미지47장에서 1081런아웃 전수 평가: 풀/쿼드361=33.395%, 고정7아웃츠27.8446%와 다름.
- 게이트: calc selftest59/59·12사본parity0, build773·sitemap생성70KO+577intl+81static+25home·postbuild3종, cjk/seo-sync0. 메타 말미 숫자21건은 계산기 밖 기존 경고. 일반 FAQ gate는 블로그 전용이므로 별도로 계산기12페이지 FAQ207개 JSON-LD 원문을 소스와 비교해 일치.
- TypeScript 전체검사649오류(계산기 밖), 계산기 app/components에는 오류0. 이를 전체 typecheck통과로 보고하지 않는다.
- 실제 UI: 12locale390px, EN/KO1440px. EN/KO9SPR경계·outs3정확값·ICM4인버블값·역순거절/동액허용·번호/pp 확인. 나머지10locale 경계/단위/검증/가로넘침 확인. 전체overflow0·pageerror0.
- screen-review 보고서→overview→원본요소 캡처 순서로 확인. EN/KO ICM비율열 대비와 pp줄바꿈은 발견 후 수정·재촬영, 최종 가독성 확인. 고정 헤더/하단바가 요소캡처에 겹쳐 찍히는 것은 스킬의 알려진 캡처 특성이다.
- 독립 보조검수 및 본체 검수, 보조작성locale에 대한 본 담당 교열을 구분했다. KO선재 조건2건·fr신규 조판1건 반영 후 2차 새차단0. H-1/H-3/SEO/새기능 제외는 유지.
