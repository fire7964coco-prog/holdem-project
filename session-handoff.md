# 다음 세션 알림장

> «다음 할 일 + 미결»만 담는다. 경위 = `WORKLOG.md`(slug로 grep) · 규칙 = 정본 MD · 시한 = `docs/update-calendar.md`.
> 마지막 갱신 2026-09-20 (본체 HEAD = **`3db98e3f`** · ✅ **계산기 로케일 트랙 종료 11/11**(09-19 `4a6842f0`)
> · hi는 **머리어를 영어로 «유지»한 유일한 로케일**(사장님 09-16 지시를 실측이 «확인» — 근거 `docs/keyword-bank/hi-calculator.md` §5)
> · Equity 탭 + 빠른 참조 6표 + FAQ 18 + §3-I 미재조준 **전부 해소** + 솔버 카니발 해소 · 게이트 40→0 · 셀프테스트 20/20
> · 배포·라이브 확인·IndexNow 완료 · 미커밋 0 · 경위 = WORKLOG 09-19 (4) · 교훈 = 브리프 §3-M).
> 🆕 **09-20 `3db98e3f`** — 스타팅 핸드 **폴백 122개 티어 계산**(전엔 Tier 5 고정 → 「🚫 약함」과 「오픈하라」가 나란히 떴다)
> + **오픈 림프 제거**(EN·de의 88·77·KQo · 나머지 9로케일은 이미 정정형) + 폴백 문구 13자리 재작성 + **ko 합류**(09-17 경화를 한 번도 못 받고 있었다).
> 🔴 폴백 규칙 근거 = **콤보 산술**(BTN 50% 663콤보 → 오프수트 몫 273 = 22타입) — 딜러 렌즈의 «더 넓혀라»는 이 산술로 기각.
> 검증 = 전수 대입 169/47/122 · 명제 22건 0건 · 라이브 DOM 11/11(en·ko) · 390px 오버플로 0. 경위 = WORKLOG 09-20.
> 🆕 **09-20 (2) — (not set) 유실 원인 규명 ✅종결**(코드 변경 없음 · 미커밋은 docs·주석뿐).
> 결함이 아니라 **GA4 세션 타임아웃 재개**였다(신규 0.8% ↔ 전체 75.7%로 「태그 지연」 기각 · 네이버는
> 28.3%→25.4% 과소표라 「스크립트 순서」도 기각). **「2.3배」도 분모를 안 본 것**(오가닉 대비 5.56→6.53%).
> 보정 ②는 유지하되 근거 교체 · `RULES_VERSION`은 1 그대로. 정리 = `docs/ga-notset-diagnosis-2026-09-20.md`.
> 🆕 **09-20 (3) — OG 카드 20/20 교정 + 사전 부채 7건**(4-A 종결). 🔴 «og:title 5곳»이 실측 **20/20**이었고
> `/ranking`·`/glossary` 등 **10개 라우트는 서버 og가 아예 없어 «홈 카드»가 나가고 있었다**(08-02에 og 축만 안 고침).
> **og는 서버 전용**으로 정리(`lib/page-metadata.ts` 신설 · `<SEO>`에서 og 갱신 제거) · 🔴 상수 리팩터가
> `check:seo-sync`를 깨 **게이트를 고쳤다**(셀프테스트 14→20/20). 정리 = `docs/og-meta-audit-2026-09-20.md`.

## ▶ 다음 할 일 (사장님이 고른다)

1. **🧰 queue 다음 회차** — es `poker-en-las-vegas` 동형 명제 3종 + `holdem-tournament` L298(Q4-b §2 잔여 · es 고유 · EN 동형 없음): L140·L256 「solo exige 21 años」 · L142 matrícula 발급처 부재 + WSOP.com 명칭(형제 `nueva-jersey`·`poker-online-dinero-real-estados-unidos`도 · como-entrar L152는 「WSOP Online (antes WSOP.com)」 — 1차 출처 재확인 후 통일 방향 판정) · `holdem-tournament:298` 썸네일 문장 「pide 21 años y una identificación válida」(히어로는 09-17 «+ dos cuentas gratuitas»). 판정형 = Opus. 레인 창 첫 마디 「HARDEN.md 읽고 회차 Q4-c 시작해」 — 🔴 **HARDEN.md 헤드 통지는 아직 안 붙였다**(사장님 「올려」 대기). 근거 `docs/harden-queue-진행.md` §2 「Q4-b가 남긴 것」.
2. **🟠 GA 계측 판정 2건**(09-20 (2) 규명 회차가 남긴 것 · 정리 `docs/ga-notset-diagnosis-2026-09-20.md` §6) — ⓐ **Vercel Analytics·Speed Insights가 꺼져 있다**: 레이아웃에 `<Analytics />`·`<SpeedInsights />`가 렌더되고 패키지도 깔렸는데 라이브 요청 0건(`web_analytics_not_enabled`). **켜거나(대시보드 토글 = 사장님 몫) 컴포넌트를 빼거나** 둘 중 하나 — 지금은 둘 다 아니다. 켜면 GA4가 못 보는 유실을 독립 측정할 유일한 수단이 생긴다. ⓑ **GA `lazyOnload` 유지/변경**: 느린 회선에서 page_view가 7~8초까지 밀려 그 전 이탈자가 집계에 아예 없다. 단 `afterInteractive`로 얻는 건 **1.25초뿐**(병목이 대역폭 경합) → **ⓐ를 먼저 켜서 규모를 재고 판정하는 순서를 권한다.**
3. **10/14 이후 — 배치 효과 4주 비교**(캘린더 등재됨). 기준선 `docs/post-placement-analysis-2026-09-16.md` §2 · 같은 창(`npm run analytics` + `ga-fetch --pages --days 28`). 모바일 홈 36.7%(60세션)는 09-16 배포 전 값 — 그때 재측정. 같은 창에서 `/ja/calculator`·`/zh/calculator`·`/zh-hant/calculator`·`/es/calculator`·`/pt/calculator`·`/de/calculator`·`/fr/calculator` GSC 쿼리 첫 판독(일곱 다 신설 직후 0 · pt는 «calculadora poker»·«calculadora odds poker»·«icm calculator» 축 · es는 «calculadora de poker»·«icm calculator» 축 · zh-hant는 「德州撲克勝率計算器」 260·「icm計算機」 70 축을 본다 · de는 «poker rechner» 260·«poker wahrscheinlichkeiten rechner» 210·«poker odds calculator»(영문 590) 축을 본다 · fr은 «calculateur poker» 390·«icm poker» 480·«équité poker» 110·«tableau push or fold» 70 축을 본다 · **ms는 쿼리 단위로도 볼 게 없다** — 말레이어 축이 통째로 null이라 «poker calculator»·«poker odds calculator»(각 90 · 조준 안 한 영어 축)에 노출이 붙는지만 기록한다 · **id는 «kalkulator poker» 10 하나만 본다** — 🔴 인니어 축이 통째로 10 단위라 **쿼리 단위로 내려가야 보인다**(페이지 합계로는 0으로 보인다) · 영어 «poker calculator»·«poker odds calculator» 각 90은 **조준 안 한 축**이라 노출이 붙으면 그것대로 기록해 둘 것 · 🆕 **hi는 «데바나가리 쿼리에 노출이 붙는가»만 본다** — 조준한 영어 축 `poker odds calculator` 390은 SERP 19/19라 노출이 붙기 어렵고 힌디어 축은 볼륨 자체가 null이다. **붙으면 §3-B의 «힌디어 SERP 공백» 판정이 맞은 것**이라 그 자체가 결과다).
4. 🪶 **계산기 EN 후속**(브리프 §5) — 🔴 폴백 티어·오픈 림프는 09-20에, **4-A 7건은 09-20 (3)에 닫혔다**
   (og 카드 20/20 · images · x-default · 오버카드 · times-2 · A3s · exactNote → `docs/og-meta-audit-2026-09-20.md`). **남은 것**:
   🟠 EN `88`이 `77`보다 좁다(«consider calling» vs «call» — 88이 더 센데 권고가 더 좁다 · 12로케일이 이 비대칭을 충실히 옮겼다) ·
   🟠 88·77의 «EP 첫 진입» 미정의(「Raise LP」만 읽으면 EP 첫 진입에 할 게 없어 림프로 빠진다 · AJs·55는 그 자리를 닫아 뒀다) ·
   🟠 `44`(T5)가 `43s`(T4)보다 아래(페어 승격은 `summary` 5행 「44–22 weak offsuit hands」를 13자리에서 같이 고쳐야 한다) ·
   🟠 EN `87s`·`65s`·`54s` 「Call LP」(76s만 «raise first in» — 티어 내 역전 + LP 첫 진입 림프 암시) ·
   🪶 **로케일 전파 2건**(EN만 고쳤다): `outs.exactNote` — 로케일이 «값의 크기»로 옮겼으면 **사실오류**다(grep 후보 de `große Zahl`·ja `大きい数字`·ms `Angka besar`·zh `那個大數字`) · EN `A3s` 새 문구 12로케일.
   🔴 **ko는 계산기 나머지 탭이 아직 09-17 이전이다**(`spr.zones`·`outs`·`icm` — 09-20은 스타팅 탭만 닫았다) → ko 전수 대조는 별도 회차.

## 🔵 미결 (해결되면 WORKLOG에 적고 지운다)

- **「홀덤 족보」 634노출·클릭 2** — 611노출이 noindex인 `/hands`에 남아 있다(반영 지연). 조치 없이 다음 28일 창에서 /hands 노출 0·필라 순위 상승 확인. 재제출·되살리기 금지.
- **「포커 홀덤 차이」 계열 188노출·r9~11 · 전용 글 없음**(7포커 글은 다른 의도) — 롱테일 후보. 채택 전 SERP 실측. 근거 `docs/seo-report-2026-09-16.md` §4.
- 우편함 미처리는 전부 «→검수장»(MB-033~062 + S-022·023). 본체 몫 0. 검수장 회신이 오면 MA 요청부터 판정. 🔴 MB-054는 **MB-053 ②(상금풀 $87,568,080)를 뒤집는 통지** · MB-055는 **계산기 랜딩 10로케일 검수 청구**(ja·en·zh·zh-hant·es·pt 몫은 MB-057~062 해시로 대체) · 🪶 `check:mailbox`의 기존 흠 둘(둘 다 미수정): «MB-054 파이프 9» 🔴(09-17 확인) · 🆕 «MB-067 열 결손» 🟠(ms 회차가 «포인터·확인» 두 열을 안 채웠다 — hi 회차 09-19에 발견 · 남의 회차 행이라 손대지 않았다). 🆕 **MB-068 발신**(hi 계산기 회차 검수 청구 · →검수장).
- **KO 판정 2건(낮음 · Q5-c 렌즈가 남김 · `docs/harden-queue-진행.md` §5 Q5c-7)**: ① `lib/posts.ts` probability 표 「AA vs AK(수티드) 87%」 = 승률(에퀴티 87.9) — «승률 vs 에퀴티» 표기 규약 정본화 여부 ② KO `holdem-tiebreak-rules` 하이카드 「0장 + 키커 5장」 모델링(EN·8로케일은 1+4) + L985↔L991 자기모순. KO 정정 회차 몫.
- **zh·zh-hant 판정 요청 1건 대기**(Q4b-4 · re-entry 행 제목 「重买/重買」 → 「再入场/重新進場」 후보 · 거울쌍으로 같이) — 두 로케일 진행 파일 §5 말미. 레인 회차 없음 유지, 사장님이 열 때.
- **de 형제 글 3건(낮음 · 포스트 수정이라 posting.mdc 절차 · MB-063 ⓒⓓ)**: ① `holdem-equity` FAQ 「Brauche ich einen Equity-Rechner?」와 `holdem-icm` FAQ 「In der Praxis nutzt du **einen** ICM-Rechner」가 계산기를 말하면서 **링크를 안 준다**(부정관사가 경쟁사로 가는 문) ② `holdem-bubble`이 계산기를 3번 가리키는데 계산기는 버블 글을 0번 가리킨다(related 8은 EN parity라 본문 링크로) ③ `holdem-short-stack` M 존 표가 경계를 겹쳐 적는다(「10–20 / 6–10」 ↔ 계산기 「10–19 / 6–9」 — 계산기 쪽이 정본). 🟢 `/de/solver` 누수는 0건.
- **fr 포스트 1건(낮음 · posting.mdc 절차 · MB-064 ⓓ)**: `lib/posts-fr/texas-holdem-rules-for-beginners.ts:444` — **fr 유일의 인바운드**인데 앵커가 09-18에 교체한 «calculatrice de probabilités poker»다(현 페이지 이름 = «Calculateur poker»). 같은 줄의 `/hand-chart`는 09-19 (5)에서 `/en/hand-chart`로 해소.
- 장기 미결 = `docs/harden-queue-진행.md` §2 · `docs/pending-work.md` · `docs/en-first-queue.md` §3(EN counterfeiting 조건 누락 등).

## 🕒 시한 (정본 `docs/update-calendar.md` — 요약만)

- 9/26경 Bing·Yandex 색인 관측 · 10/5 WPL 제8회·10/7 APT 제주 종료 → `EVENT_UNTIL` 자동 강등 확인 + 결과 아카이브 전환 · 10/14~ 배치 비교 · 11/15 Circuit Panamá 종료 → es como-entrar Circuit 표 · 12/31 K-ETA 면제 + 중국 단체 무비자 연장 만료 + 2027-01-01 ESTA 수수료(한 회차로).

## 유지 규칙 (정본은 각 파일 — 여기엔 포인터)

- 포스팅 배치 = `lib/featured-order.ts`(새 대회 글 발행 시 `EVENT_UNTIL`에 종료일 한 줄 · S·A 배열은 분기마다 재판정). 관문 추천 블록 = `docs/post-placement-verification-2026-09-16.md` §1.
- GTO 시리즈 러닝맵 라벨 = `lib/gto-series-i18n.ts`(로케일 솔버 랜딩 문구를 바꾸면 같이). 다국어 우측 레일 CTA 문구 = `components/intl-blog-post-client.tsx` CALC/SOLVER_CTA_LABELS.
- 계산기 로케일 사전 = `npm run check:calc-parity -- <loc>`가 EN 값·개수·플레이스홀더·인용부호를 본다(`check:hygiene`은 app/**를 안 읽는다).
- 참여율은 `npm run analytics`로만(규칙 v1 · 누적 `docs/analytics-log.md`). IndexNow는 실제 변경 URL만.
- 세션 시작: AGENTS → CLAUDE → 이 파일 → `git status`. 「읽고 대기」면 자동 착수하지 않는다. HI 재사용 자료 = `docs/keyword-bank/hi-posting-reference.md` §8.
