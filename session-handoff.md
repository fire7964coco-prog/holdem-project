# 다음 세션 알림장

> «다음 할 일 + 미결»만 담는다. 경위 = `WORKLOG.md`(slug로 grep) · 규칙 = 정본 MD · 시한 = `docs/update-calendar.md`.
> 마지막 갱신 2026-09-17 (본체 HEAD = zh 계산기 회차 커밋 `ff81a242` · `/zh/calculator` 재조준 배포(「手牌胜率」 탭·quickRef 6표·FAQ 18 · MB-059) · 다음 = **zh-hant 계산기 회차** · 미커밋 0).

## ▶ 다음 할 일 (사장님이 고른다)

1. 🧮 **zh-hant 계산기 랜딩 회차 — 첫 마디 「핸드오프 읽고 zh-hant 계산기 회차 시작해」** (🔴 **Opus 창에서 연다** — Fable 한도 임박(사장님 09-17). 모델 분담 = 브리프 §3-D: 헤드·집필·렌즈 3종 = **Opus** · 상위 페이지 구조 추출 = **sonnet** 서브 2 · §13·전사는 **스크립트**(`check:calc-parity`) · **Fable은 «좁은 판정 1회»만**(제목·탭명 최종안 + 거울쌍 갈림 자리 목록 — 질문 하나 + 뱅크 §1·§5 조각만 · 한도가 없으면 생략해도 된다, zh 회차 판정과 동형이라 Opus로 충분). 절차 = `docs/harden-brief/calculator-landing-rewrite.md` **§3-A**를 zh-hant로 + **§3-B(ja) + §3-C(zh)가 남긴 것**(🔴 `npm run check:calc-parity -- zh-hant`를 렌즈 전에 · CJK 표 라벨 열 `nowrap` · 탭 이름≠페이지 이름 · 방위어 금지 · 탭 라벨 따옴표 안에 괄注 금지 · FAQ 질문 뒤 명사 덧붙이기 금지). 실측 = 자동완성 `hl=zh-TW&gl=TW` · 볼륨 DFS 2158(`language_code` 생략 · 08-31 「德州撲克勝率計算器」 260) · SERP 2158 + `language_code:"zh-TW"`. 🔴 거울쌍이지만 기반 용어가 다르다(公牌·「」·機率/籌碼 · `docs/translation-terms-zh-hant.md`) — 간체 파일 변환 금지, 재저작. EN 정본 = `docs/keyword-bank/en-calculator.md` · 선례 = `ja-calculator.md`·`zh-calculator.md`. 수치 EN 그대로(§13) · 정의형 FAQ 금지 · 딜러 렌즈 12항 동반. 끝나면 §0 zh-hant ✅ + 다음 es를 이 자리에.
2. **🧰 queue 다음 회차** — es `poker-en-las-vegas` 동형 명제 3종 + `holdem-tournament` L298(Q4-b §2 잔여 · es 고유 · EN 동형 없음): L140·L256 「solo exige 21 años」 · L142 matrícula 발급처 부재 + WSOP.com 명칭(형제 `nueva-jersey`·`poker-online-dinero-real-estados-unidos`도 · como-entrar L152는 「WSOP Online (antes WSOP.com)」 — 1차 출처 재확인 후 통일 방향 판정) · `holdem-tournament:298` 썸네일 문장 「pide 21 años y una identificación válida」(히어로는 09-17 «+ dos cuentas gratuitas»). 판정형 = Opus. 레인 창 첫 마디 「HARDEN.md 읽고 회차 Q4-c 시작해」 — 🔴 **HARDEN.md 헤드 통지는 아직 안 붙였다**(사장님 「올려」 대기). 근거 `docs/harden-queue-진행.md` §2 「Q4-b가 남긴 것」.
3. **(not set) 랜딩 유실 원인 규명 회차**(본체) — 09-14 스냅샷 236세션(08-28 103 → 2.3배). page_view만 유실된 진짜 사람이 참여 0으로 잡혀 참여율을 6.6p 누른다. 후보: 네이버 유입 스크립트 순서 · GA 태그 로딩 지연. 근거 = `docs/seo-report-2026-09-16.md` §5-1.
4. **10/14 이후 — 배치 효과 4주 비교**(캘린더 등재됨). 기준선 `docs/post-placement-analysis-2026-09-16.md` §2 · 같은 창(`npm run analytics` + `ga-fetch --pages --days 28`). 모바일 홈 36.7%(60세션)는 09-16 배포 전 값 — 그때 재측정. 같은 창에서 `/ja/calculator`·`/zh/calculator` GSC 쿼리 첫 판독(둘 다 신설 직후 0).
5. 🪶 계산기 EN 후속(공용 헬퍼 감) = 브리프 §5: OG/트위터 `images` 누락은 en 홈·솔버·8로케일 랜딩(ja·zh는 반영) 공통 · `calculator-alternates` x-default · M 존 라벨 소수 경계 · EN `starting.hands` 77/88/KQo 「call EP」 모호(+ zh·ja가 붙인 「림프 금지」절) · b3 조건절 구조 회灌 · 「the calculator above」→탭 이름 · 🟠 클라이언트 `<SEO>`의 og:title 덮어쓰기(로케일 공통) · `icm.introRest` 선행 공백(CJK).

## 🔵 미결 (해결되면 WORKLOG에 적고 지운다)

- **「홀덤 족보」 634노출·클릭 2** — 611노출이 noindex인 `/hands`에 남아 있다(반영 지연). 조치 없이 다음 28일 창에서 /hands 노출 0·필라 순위 상승 확인. 재제출·되살리기 금지.
- **「포커 홀덤 차이」 계열 188노출·r9~11 · 전용 글 없음**(7포커 글은 다른 의도) — 롱테일 후보. 채택 전 SERP 실측. 근거 `docs/seo-report-2026-09-16.md` §4.
- 우편함 미처리는 전부 «→검수장»(MB-033~059 + S-022·023). 본체 몫 0. 검수장 회신이 오면 MA 요청부터 판정. 🔴 MB-054는 **MB-053 ②(상금풀 $87,568,080)를 뒤집는 통지** · MB-055는 **계산기 랜딩 10로케일 검수 청구**(ja·en·zh 몫은 MB-057·058·059 해시로 대체).
- **KO 판정 2건(낮음 · Q5-c 렌즈가 남김 · `docs/harden-queue-진행.md` §5 Q5c-7)**: ① `lib/posts.ts` probability 표 「AA vs AK(수티드) 87%」 = 승률(에퀴티 87.9) — «승률 vs 에퀴티» 표기 규약 정본화 여부 ② KO `holdem-tiebreak-rules` 하이카드 「0장 + 키커 5장」 모델링(EN·8로케일은 1+4) + L985↔L991 자기모순. KO 정정 회차 몫.
- **zh·zh-hant 판정 요청 1건 대기**(Q4b-4 · re-entry 행 제목 「重买/重買」 → 「再入场/重新進場」 후보 · 거울쌍으로 같이) — 두 로케일 진행 파일 §5 말미. 레인 회차 없음 유지, 사장님이 열 때.
- 장기 미결 = `docs/harden-queue-진행.md` §2 · `docs/pending-work.md` · `docs/en-first-queue.md` §3(EN counterfeiting 조건 누락 등).

## 🕒 시한 (정본 `docs/update-calendar.md` — 요약만)

- 9/26경 Bing·Yandex 색인 관측 · 10/5 WPL 제8회·10/7 APT 제주 종료 → `EVENT_UNTIL` 자동 강등 확인 + 결과 아카이브 전환 · 10/14~ 배치 비교 · 11/15 Circuit Panamá 종료 → es como-entrar Circuit 표 · 12/31 K-ETA 면제 + 중국 단체 무비자 연장 만료 + 2027-01-01 ESTA 수수료(한 회차로).

## 유지 규칙 (정본은 각 파일 — 여기엔 포인터)

- 포스팅 배치 = `lib/featured-order.ts`(새 대회 글 발행 시 `EVENT_UNTIL`에 종료일 한 줄 · S·A 배열은 분기마다 재판정). 관문 추천 블록 = `docs/post-placement-verification-2026-09-16.md` §1.
- GTO 시리즈 러닝맵 라벨 = `lib/gto-series-i18n.ts`(로케일 솔버 랜딩 문구를 바꾸면 같이). 다국어 우측 레일 CTA 문구 = `components/intl-blog-post-client.tsx` CALC/SOLVER_CTA_LABELS.
- 계산기 로케일 사전 = `npm run check:calc-parity -- <loc>`가 EN 값·개수·플레이스홀더·인용부호를 본다(`check:hygiene`은 app/**를 안 읽는다).
- 참여율은 `npm run analytics`로만(규칙 v1 · 누적 `docs/analytics-log.md`). IndexNow는 실제 변경 URL만.
- 세션 시작: AGENTS → CLAUDE → 이 파일 → `git status`. 「읽고 대기」면 자동 착수하지 않는다. HI 재사용 자료 = `docs/keyword-bank/hi-posting-reference.md` §8.
