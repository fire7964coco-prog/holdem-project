# 다음 세션 알림장

> «다음 할 일 + 미결»만 담는다. 경위 = `WORKLOG.md`(slug로 grep) · 규칙 = 정본 MD · 시한 = `docs/update-calendar.md`.
> 마지막 갱신 2026-09-17 (본체 HEAD `b0d8422d` · Q4-b·Q5-c 머지 + como-entrar 히어로 + 계산기 랜딩 10로케일 신설·배포 완료 · 4레인 lane:sync 동기·클린 · 미커밋 0).

## ▶ 다음 할 일 (사장님이 고른다)

1. **🧰 queue 다음 회차** — 후보 셋. 레인 창 첫 마디 「HARDEN.md 읽고 회차 Q7-c 시작해」(회차 이름은 레인이 진행 파일 §1 표에 맞춰 정한다).
   - 🆕 **계산기 랜딩 10로케일 SEO 재조준**(09-17 신설 `64c0fd9a` · `/{ja,zh,zh-hant,es,pt,de,fr,id,ms,hi}/calculator`): 이번 판은 «코퍼스 용어 기반 1판»이다. 로케일별 키워드 실측(라쿠/DFS)·SERP 6쿼리·카니발 grep → 제목·설명·H1 재조준 + 검수장 MB-055 회신 반영. 구조 = 공용 `components/calculator/calculator-tool.tsx` + `app/<loc>/calculator/dict.ts`(사전 키는 전 로케일 공유 — 지우지 말 것) · hreflang 12세트 = `lib/calculator-alternates.ts`. 곁다리: 낡은 주석 3곳(ja solver page/client 「/ja/calculator 없음」 · de solver faq 머리 · `de-gto-solver.md` §4) · zh-hant push/fold 표기 갈림(蓋牌 vs 棄牌) 판정.
   - **es `poker-en-las-vegas` 동형 명제 3종**(Q4-b §2 잔여 · es 고유 · EN 동형 없음): L140·L256 「solo exige 21 años」 · L142 matrícula 발급처 부재 + WSOP.com 명칭(형제 `nueva-jersey`·`dinero-real`도). 🆕 **`holdem-tournament` L298**(썸네일 링크 문장 「pide 21 años y una identificación válida」)도 같은 좁은 명제 — 히어로를 «+ dos cuentas gratuitas»로 재제작(09-17)했으니 형제 문장도 같은 회차에. 판정형 = Opus. 근거 `docs/harden-queue-진행.md` §2 「Q4-b가 남긴 것」.
2. **(not set) 랜딩 유실 원인 규명 회차**(본체) — 09-14 스냅샷 236세션(08-28 103 → 2.3배). page_view만 유실된 진짜 사람이 참여 0으로 잡혀 참여율을 6.6p 누른다. 후보: 네이버 유입 스크립트 순서 · GA 태그 로딩 지연. 근거 = `docs/seo-report-2026-09-16.md` §5-1.
3. **10/14 이후 — 배치 효과 4주 비교**(캘린더 등재됨). 기준선 `docs/post-placement-analysis-2026-09-16.md` §2 · 같은 창(`npm run analytics` + `ga-fetch --pages --days 28`). 모바일 홈 36.7%(60세션)는 09-16 배포 전 값 — 그때 재측정.

## 🔵 미결 (해결되면 WORKLOG에 적고 지운다)

- **「홀덤 족보」 634노출·클릭 2** — 611노출이 noindex인 `/hands`에 남아 있다(반영 지연). 조치 없이 다음 28일 창에서 /hands 노출 0·필라 순위 상승 확인. 재제출·되살리기 금지.
- **「포커 홀덤 차이」 계열 188노출·r9~11 · 전용 글 없음**(7포커 글은 다른 의도) — 롱테일 후보. 채택 전 SERP 실측. 근거 `docs/seo-report-2026-09-16.md` §4.
- 우편함 미처리 23건은 전부 «→검수장»(MB-033~056 + S-022·023). 본체 몫 0. 검수장 회신이 오면 MA 요청부터 판정. 🔴 MB-054는 **MB-053 ②(상금풀 $87,568,080)를 뒤집는 통지** · MB-055는 **계산기 랜딩 10로케일 검수 청구**(신설 + ko·en 횡단 · 판정 요청 4).
- **KO 판정 2건(낮음 · Q5-c 렌즈가 남김 · `docs/harden-queue-진행.md` §5 Q5c-7)**: ① `lib/posts.ts` probability 표 「AA vs AK(수티드) 87%」 = 승률(에퀴티 87.9) — «승률 vs 에퀴티» 표기 규약 정본화 여부 ② KO `holdem-tiebreak-rules` 하이카드 「0장 + 키커 5장」 모델링(EN·8로케일은 1+4) + L985↔L991 자기모순. KO 정정 회차 몫.
- **zh·zh-hant 판정 요청 1건 대기**(Q4b-4 · re-entry 행 제목 「重买/重買」 → 「再入场/重新進場」 후보 · 거울쌍으로 같이) — 두 로케일 진행 파일 §5 말미. 레인 회차 없음 유지, 사장님이 열 때.
- 장기 미결 = `docs/harden-queue-진행.md` §2 · `docs/pending-work.md` · `docs/en-first-queue.md` §3(EN counterfeiting 조건 누락 등).

## 🕒 시한 (정본 `docs/update-calendar.md` — 요약만)

- 9/26경 Bing·Yandex 색인 관측 · 10/5 WPL 제8회·10/7 APT 제주 종료 → `EVENT_UNTIL` 자동 강등 확인 + 결과 아카이브 전환 · 10/14~ 배치 비교 · 11/15 Circuit Panamá 종료 → es como-entrar Circuit 표 · 12/31 K-ETA 면제 + 중국 단체 무비자 연장 만료 + 2027-01-01 ESTA 수수료(한 회차로).

## 유지 규칙 (정본은 각 파일 — 여기엔 포인터)

- 포스팅 배치 = `lib/featured-order.ts`(새 대회 글 발행 시 `EVENT_UNTIL`에 종료일 한 줄 · S·A 배열은 분기마다 재판정). 관문 추천 블록 = `docs/post-placement-verification-2026-09-16.md` §1.
- GTO 시리즈 러닝맵 라벨 = `lib/gto-series-i18n.ts`(로케일 솔버 랜딩 문구를 바꾸면 같이). 다국어 우측 레일 CTA 문구 = `components/intl-blog-post-client.tsx` CALC/SOLVER_CTA_LABELS.
- 참여율은 `npm run analytics`로만(규칙 v1 · 누적 `docs/analytics-log.md`). IndexNow는 실제 변경 URL만.
- 세션 시작: AGENTS → CLAUDE → 이 파일 → `git status`. 「읽고 대기」면 자동 착수하지 않는다. HI 재사용 자료 = `docs/keyword-bank/hi-posting-reference.md` §8.
