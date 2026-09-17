# 계산기 랜딩 재저작 — «계산 기능 강조» 트랙 (한 언어씩 · EN 먼저) · 2026-09-17

> 사장님 지시(09-17 축어 요지): **「계산기라는 기능을 제공해주는 페이지 — 경험담·경화식 포스팅은 불필요. ko처럼 계산기능 강조.
> /hand-chart처럼 검색자는 차트(도구)를 보러 온 것 → 그 의도에 충실. ko처럼 만들되 ko도 오래됐으니 이왕 업데이트.
> en·ja·zh 등은 MCP(라쿠·DFS)+키워드뱅크 활용, ja는 의문형 검색 참고. 한 번에 다 하지 말고 한 언어씩 — en부터.」**
> (첫 초안의 «고품질 포스팅·경험담» 골격은 폐기 — 이 파일이 정본.)

## 0. 상태

| 로케일 | 상태 | 뱅크 | 비고 |
|---|---|---|---|
| **en** | ✅ 09-17 배포(WORKLOG 09-17 (5)) | `docs/keyword-bank/en-calculator.md` | Equity 탭 신설 + quickRef 6표 + FAQ 17 + 메타 재조준 + 도구 문안 정정(딜러 렌즈) |
| ja | ⏳ 다음 | `ja-probability.md` 부분 | 의문형 H2·FAQ(「〜は?」) · 라쿠 질문검색 유효 |
| zh · zh-hant · es · pt · de · fr · id · ms · hi | ⏳ | — | 한 언어씩 |
| ko | ⏳ 후순위 | GSC 실측 메타 보유 | 별도 클라이언트 · Equity 탭 이식은 공용화 뒤 |

## 1. 공통 골격 (EN에서 확정 · 로케일은 «값 동일 · 문안 현지화»)

1. hero — H1(핵심어) + 부제 + 리드 1문장 + 칩 9
2. 도구 9탭 — **Equity(신설 · 첫 탭 = SSR되는 유일한 탭)** · Outs · Pot Odds · Hand Rank · Starting · SPR · M · ICM · Push/Fold
3. ICM 가이드 2(버블·딜) — 기존
4. 도구 카드 9
5. **빠른 참조 표 6**(`dict.quickRef` · 탭 밖 · 정적) — 프리플롭 매치업(수트 가중) · AA vs 랜덤 N · 아웃츠 1~20(플롭→리버·플롭→턴·턴→리버) · 팟오즈(베팅→필요 에퀴티) · SPR 구간 · M값 존
6. FAQ 17(PAA 흡수)
7. 관련 글 8

🔴 규율: 탭 안 문안은 SSR 안 됨 → 색인 콘텐츠는 전부 탭 밖 · 수치는 `scripts/calc-reference-tables.ts` 출력만(§13) · 개념 정의는 블로그 링크(카니발 경계 · `holdem-probability`가 «odds chart» 소유) · 제목에 SPR·BB 훅 금지(settled §1).

## 2. EN 회차 — 완료(09-17). 경위 = WORKLOG 09-17 (5). 남은 후속은 §5.

## 3. 로케일 인계 규칙

- `dict.equity`·`dict.quickRef`는 **옵션 키** — 채운 로케일만 켜진다(타입 파손 없음). 로케일 회차 = 사전 2블록 + FAQ 확장 + 메타 재조준 + 관련 글 8.
- 수치·표 행 개수 = EN과 동일. 문안·H2 형태소·FAQ 질문 표기 = 현지 실측(라쿠 volume location = 그 나라 · 질문검색은 ja만 유효).
- 검수: 로케일 네이티브 렌즈 1 + 교열 1(수학 렌즈는 EN 1회로 종결 · 값 전사 대조만).

## 4. 하지 마라

- 경험담·에세이 섹션 추가(사장님 지시) · 탭 안에 색인용 문안 · 수치 재계산 · SPR/BB 제목 훅 · 로케일 사전 키 삭제.

## 5. EN 후속(미반영 · 다음 queue/헤드 회차 재료)

- 🟠 **OG/트위터 `images` 누락은 사이트 패턴**: `app/en/page.tsx`·`app/en/solver/page.tsx`·10로케일 계산기 `page.tsx` 전부 — Next metadata는 얕은 병합이라 루트 layout 이미지가 상속되지 않는다. 공용 헬퍼로 한 번에.
- 🟠 `lib/calculator-alternates.ts`에 `x-default` 없음(12랜딩 공용).
- 🪶 M 존 라벨 «1–5 / 6–9 / 10–19»(코드 `M_ZONES`)는 소수 경계(5.5 → 레드)와 안 맞는다 — 코드·표 동시 수정 대상(전 로케일).
- 🪶 M 탭은 플레이어 수를 앤티에만 쓰고 Effective M을 존에 적용하지 않는다(표 intro에 안내만) — 기능 개선 후보.
- 🪶 `holdem-bubble`(EN)이 `/en/calculator`를 3번 링크하는데 역링크 없음 · 「rule of 4 and 2」가 EN 4곳에 분산(140/mo).
- 🪶 스타팅 핸드 표 미등재 수티드 커넥터(97s·86s…)·K9s·Q9s는 폴백 문구로만 처리 — 항목 보강 후보.
- 로케일 회차 공통: 딜러 렌즈가 고친 EN 도구 문안 12항(Effective stack · 팟 라벨 · SPR low · 데드존 · diffPlusNote · 스타팅 12핸드 · unknown 폴백 · 슬라이더 19.6 · 프리셋 «Flush draw» · 오버카드 desc · 가이드 카드 · introRest)은 **각 로케일 사전에도 그대로 남아 있다** — 로케일 회차에서 같이 정정.

