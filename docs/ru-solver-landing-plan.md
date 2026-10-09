# `/ru/solver` 신설 계획 — 2026-10-10 수립 (작업은 다음 세션부터)

> 사장님 10-10 «RU 랜딩 진행 · 플랜 먼저 · 다음 세션에서 작업». 근거 요청 = 솔버 S-049(선택 요청) · S-048(후기창 ru 초안 + 용어 참고자료).
> 절차 정본 = **`docs/solver-landing-playbook.md`**(12단계 · 등록 6곳 · §4 규율) — 여기엔 «ru라 다른 점»과 회차 나눔만 적는다.
> 직전 선례 = **vi**(10-09 `29316681` · 뱅크 `docs/keyword-bank/vi-gto-solver.md` · hi 선례 ⓐ «링크 빈자리 안고 랜딩 먼저»).

## 0. 출발 상태 (10-10 실측)

| 항목 | 상태 |
|---|---|
| 솔버 앱 ru | ✅ 라이브(S-049 10-09 · 번들 `0a5e8968…`) · ты체 · `1 326`/`2,5` · `35,4%` 붙임 · «тёрн» |
| 앱 ru 문구 판정 | 검수장 MA-384: 928개 중 OK 915 · RISKY 8 · UNV 1 · WRONG 4 → 솔버가 정정 중(S-053·S-054) — **라벨이 바뀔 수 있다** → 축어 추출은 회차 B 직전에 다시 |
| 본체 ru 글 | 6편 — 규칙 클러스터만(rules-for-beginners · game-order · betting-actions · blind-meaning · all-in-rules · showdown-rules) |
| 본체 ru 도구 | 0개(calculator·hand-chart·glossary·tournaments 전부 없음) → 랜딩 내부링크 = 규칙 글 + `/ru` 홈만(hi 선례 ⓐ) |
| 셸 등록 | 🔴 `lib/hub-i18n.ts`에 ru 항목 없음 — 넣지 않으면 셸·사이드바가 영어로 떨어진다(playbook §3 · pt 실사고) |
| 용어 자산 | `docs/translation-terms-ru.md` · 솔버 `handoff-to-main-site/전달_ru_포커용어_참고자료_2026-10-09.md`(용어집·표기·금지어·본체 글과 다른 표기·출처) |
| 키워드 뱅크 | 없음 → **회차 A가 만든다**(«새 언어는 SERP 먼저» 규율) |

## 1. 사장님 결정 필요 (회차 A 시작 전 — 기본값으로 진행해도 됨)

| # | 질문 | 기본값(추천) |
|---|---|---|
| D-1 | 조사 대상 지역 | **러시아(DFS 2643 · ru) 주 · 카자흐스탄·벨라루스는 볼륨만 참고** |
| D-2 | 검색엔진 | 러시아는 Yandex 점유가 크다 → **Google + Yandex SERP 둘 다 상위 10**(DFS Yandex SERP 지원 · 배포 뒤 IndexNow가 Yandex로도 간다) |
| D-3 | 후기창 ru(S-048)를 같은 배포에 | **포함**(핸드오프 기존 결정 «`/ru/solver` 회차에») — 단 Supabase SQL `locale` 제약에 ru 추가 = 사장님이 SQL Editor에서 배포 전 실행 |
| D-4 | 합법성 | FAQ에 러시아 온라인 포커 법 문항 **안 넣는다**(합법성 축 금지 · RTA FAQ «공부용 vs 게임 중 실시간»은 tr 선례대로 허용) |

## 2. 회차 나눔 (한 실행 = 한 회차 · AUTONOMY-LIMITS 90분)

### 회차 A — ✅ 2026-10-10 완료 → 뱅크 `docs/keyword-bank/ru-gto-solver.md`

> 🔴 D-1·D-2 전제 깨짐: 러시아(2643)는 DFS·라쿠 어디에도 없고 DFS Yandex SERP도 없다 → 대리(KZ·UA·지역 무지정 볼륨 · google.kz 러시아어 SERP · Yandex 공개 자동완성). D-3·D-4는 그대로. 결론·조준안 = 뱅크 §0·§7. 아래 단계 목록은 원래 계획(이력).

1. 라이브 `?lang=ru` 확인(Playwright · 사이드바·스텝·Spot 이름·결과 화면)
2. `app/ru/` 실재 라우트 세기(현재 `blog`·홈뿐)
3. 볼륨 실측 — DataForSEO(2643·ru) + 라쿠 시계열 · 후보 씨앗: «gto солвер» «покерный солвер» «солвер покер» «солвер онлайн бесплатно» «gto покер» «что такое gto в покере» «gto стратегия» «покер тренажер» «рейнджи покер» «c-bet» 계열 — 🔴 자동완성으로 의도 확인(자릿수 함정) · 🔴 CPC 근거 금지
4. 자사 코퍼스 grep(카니발) — ru 글 6편 · 다른 로케일 솔버 랜딩과 겹치는 검색어 없음 확인
5. SERP 6쿼리 Google + Yandex 상위 10 + 상위 페이지 원문 5편 정독(H2·약점) + PAA·자동완성
6. 뱅크 작성 — vi 뱅크 목차 그대로(§1 볼륨 · §2 SERP · §3 경쟁 약점 · §4 카니발 · §6 링크 빈자리 · §7 조준안 seoTitle·H1·H2·FAQ 후보 · §8 다음 로케일 인계)

산출: 뱅크 1개 + 핸드오프 «회차 B 첫 지시문». 글·코드 변경 0.

### 회차 B — 작성 · 등록 · 검수 · 배포 (playbook 7~12단계)

1. 앱 ru 축어 재추출 → `docs/solver-app-verbatim-ru-<날짜>.md`(vi 꼴 · MA-384 정정분 반영된 라이브 기준)
2. 3파일 `app/ru/solver/{page,solver-client,faq}.tsx` — vi 구조 복제 + 뱅크 §7 조준안 · 숫자 = ru 서식(`1 326` · `2,5` · `35,4%` 붙임) · ты체(솔버와 일치) · 수치 정본 = `docs/gto-solver-series-spec.md` §4-B(앱 화면 아님)
3. 등록 6곳: `lib/hub-routes.ts` · 🔴 `lib/hub-i18n.ts` ru 신설 · `components/side-rail.tsx` · `components/solver-promo.tsx` COPY · `scripts/generate-sitemap.mjs` · **hreflang `ru-RU`를 기존 14파일 전부 + 새 파일에**(15파일 같은 세트)
4. 후기창 ru(D-3): `lib/solver-reviews-i18n.ts`에 솔버 초안 `feedbackLabels.ru`·`appLabels.ru` 검수 후 반영 · `lib/spot-share-i18n.ts` ru(지금 ru → en 폴백) · `supabase/solver-reviews.sql` 로케일 제약 ru 추가 → `npm run check:solver-feedback`
5. 게이트: `npm run build` · hreflang 세트 · `check:meta-lang` · `check:solver-feedback` · 폐기 명제 목록 대조
6. 적대검수 4렌즈(모스크바 레귤러 · 출판 교정자 · 초심자 · §13 수치) + 아스트라 교차 → 반영 → 2차 교열
7. 🔴 배포 순서: **사장님 SQL 실행 확인 → push** → 라이브 390·1440 넘침 0 · FAQ 스키마 일치
8. MB 1행: 솔버(`LOCALE_PATHS.ru` → `/ru/solver` · S-048 반영 · S-049 확인 칸) + 검수장(신설 판정 + hreflang 횡단) · `npm run indexnow -- --since <배포일>` · 사장님 GSC 수동 색인 1개 · playbook 상단 상태 줄 15개로 갱신

## 3. 남기는 것 (이 회차 범위 밖 · 🪶 자동 착수 금지)

- ru 도구(calculator·hand-chart·glossary) — 랜딩이 링크할 자리가 생기지만 별도 판단
- ru 글 확장(규칙 6편 밖) — 언어별 클러스터 회차(fr·vi 선례) 별도
- `community-client.tsx` ru 사전(«[✏️ Написать пост]» 라벨 맞춤 · S-048 한 줄 알림)
