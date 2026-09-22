# 다음 세션 알림장

> «다음 할 일 + 미결»만 담는다. 경위 = `WORKLOG.md`(slug로 grep) · 규칙 = 정본 MD · 시한 = `docs/update-calendar.md`.
> 마지막 갱신 **2026-09-22** · CALC-KO-1 머지 **`10590ab3`** · 배포 **`db667c60`** · 빌드·라이브 모바일/PC 검증 완료. Q13-a/b도 완료(경위 WORKLOG).
> 최근 완료: **Q13-a/b 종결**. 경위 = WORKLOG 09-22 (1)/(2), 정본 = settled-decisions §3-N/P/Q/R.
> 🔴 **되살리기 금지 열여섯**: ① (not set)은 구조적 동작이다 — «유실»로 되돌리지 마라(보정 ② 유지 · `RULES_VERSION` 1)
> ② `components/seo.tsx`는 og를 건드리지 않는다(그 주석에 반증 조건이 있다) ③ 폴백 티어 근거는 콤보 산술이다
> ④ WSOP 참가 요건·「WSOP Online」 명칭 = `settled-decisions` **§3-G**(「21세만」 금지 · 브랜드 ≠ 도메인)
> ⑤ **`44`·`33`·`22`를 Tier 5로 되돌리지 마라** · `outs.exactNote`를 «큰 **값**»으로 되옮기지 마라(«활자가 큰 쪽»이다 — 대소는 6↔7 아웃츠에서 뒤집힌다) · 수티드에 «작은 쪽» 바닥을 두는 안은 09-20 기각
> ⑥ **sitemap**: 계산기 11개는 `components/calculator`를 같이 보고, **로케일 홈은 `app/<loc>` 디렉터리를 보지 않는다**(하위 변경에 딸려 오르던 가짜 bump — `/de`·`/ja` 등 10개가 09-20 → 08-25로 내려온 건 교정이다)
> ⑦ **`AA vs KK` = 82(81.95)** — 83으로 올리지 마라(계산기 12로케일이 `81.9%`를 띄운다) · 하이카드 키커는 **1+4** · 「AA는 **어떤** 핸드에도 77% 이상」은 거짓(`AA vs AA` 50%). 정본 = `settled-decisions` **§3-F**.
> ⑧ **폴백 티어 = 654콤보 49.32%**(「50%」로 적지 마라) · **«BTN 58%+»는 재현 불가로 철회**(최대 확장도 55.66%) — 정본 `settled-decisions` **§3-I**
> ⑨ **대회 강조는 날짜 파생이다** — `hot`·`highlight`를 손으로 박지 마라(사본 셋 · `isHighlighted()`) · `end`/`endDate` 누락은 «★로 남는 게» 아니라 **양쪽 다 false로 사라진다**. 정본 **§3-J**
> ⑩ 트로피는 **샤드(Shard)** — 「스페이드」로 되돌리지 마라(독일어 매체의 «Spade»는 관용구다). 정본 **§3-K**
> ⑪ **Q11 게이트를 「사본끼리」 검사로 되돌리지 마라** — H·I는 «원천↔사본»이다(티어 순회 1~4로 축소 · `ALL_TARGETS` 손복사 · `prebuild`/`build:vercel` 한쪽만 · `parseHandTable` throw 완화 전부 금지 · 진행 파일 §3). 🪶 이 게이트는 **09-20 이전 판을 소급 재생 못 한다**(`fallbackTier` 도입 전이라 I항이 설계대로 throw).
> ⑫ **LA Rule 149의 노리밋 한정은 «올인자 먼저» 절에만 걸린다** — 사이드팟 공개 순서 절에 붙이면 맞던 절이 틀려진다 · **TDA 17은 「Non All-In」 전용**이라 올인 쇼다운엔 순서가 없다(TDA 16 = 「at once») · 사이드팟 초과분 반환에 **「Rule 108」을 다시 달지 마라**(그 조는 「Protect Your Hand」). 정본 **§3-L**
> ⑬ **프리플랍 체크 면제는 «정관사»다** — 「자기 포스트가 **그** 라이브 벳인가」. 부정관사 판(「a live post of its own」)으로 되돌리면 **평시 SB와 스트래들 팟 BB가 샌다** · 「no one has raised **or straddled**」의 «or straddled»를 빼지 마라. 정본 **§3-N**
> ⑭ **`check:stamp` 분류 ⑦ `relink`를 넓히지 마라** — 면제는 «알려진 로케일 접두 한 마디»뿐이다(다른 글로 보내면·앵커 텍스트가 바뀌면·무늬가 섞이면 여전히 실질). 정본 **§1-C**
> ⑮ **「Only the top end is a true cooler」로 되돌리지 마라 — 공집합이다**(상단 스트레이트 = 그 보드의 너츠라 지는 쪽이 될 수 없다 · 보드 `Q♠J♦T♥`: A-K 너츠 · K-9 중간 · 9-8 idiot end). 하단 한정어(대개·meist·多半)도 빼지 마라 · ja 「リード」는 **리드벳**이라 read 역어 금지 · ja 표기는 라틴 `idiot end`+「ダミーエンド」 · zh는 **「下注尺寸」** · pt는 **「ponta alta/baixa」** · es 고래는 **「a su derecha」**. 정본 **§3-P** + 진행 파일 §3 「Q13-a」 14항
> ⑯ **`masterUpdated`는 «올리지 마라»가 무조건이 아니다** — 회차 **전에 그 로케일이 EN과 동기**였고 같은 회차에 같은 델타를 받았으면 **올리는 쪽이 정직**하다(미대조 델타 0). 금지는 «로케일이 뒤처졌을 때»의 규율. 정본 **§1-C**

## ▶ 현재 승인된 마감 작업

**현재 체크포인트**: CALC-SHARED-2와 KO/fr 소품4편은 `679f854a` 배포·라이브16URL/FAQ237 확인 완료, MB-078. Q14 `3cfabdc6` 독립검수 중, CALC-H1 `c9be34bb` 머지 대기. 기존 아래 대기 문구보다 실행표의 최신 상태를 따른다. AR/core 규칙과 중문 소품은 본체 하위 에이전트 작업 중이며 같은 파일 중복수정 금지.

**09-22 최신 지시 「추천순서대로 해줘」로 잔여 마감 플랜 실행 승인.** 실행표 = `docs/backlog-closeout-2026-09-22.md`. 아래의 이전 「다음 사용자 지시 대기」 문구보다 이번 승인이 우선한다. 범위는 Q14·공용 계산기8건 → Q8-a/b·H-1 → 기존 사실/표현 잔여 → 검증·머지·배포 마감. H-3·GA 설정·미래 관측·새 기능·기각 재론은 제외.

현재 Q14는 기존 queue CLI가 진행, CALC-SHARED-2는 본체 하위 에이전트가 기존 계산기 워크트리에서 진행 중(기존 계산기 CLI에 중복 지시 금지). 본체는 대기열 실사와 비중첩 KO 소품을 처리한다. 과거 대기열 원문은 보존하고 실행표에서 완료/미결을 구별한다. 우편함 MB-054/067 형식 흠은 복구·게이트0 확인.

1. **🧰 queue 다음 회차 — 사장님이 번호를 고른다.** 레인 창 첫 마디 = 「`HARDEN.md` 읽고 회차 Q<번호> 시작해」 · 회차 표 = `docs/harden-queue-진행.md` §1.
   **Q13-a/b 완료, Q14(MA-148 ①~④)는 사용자 지시로 진행 중.** zh+zh-hant 정정13 + EN-먼저4, c-bet 수치 전파5로케일. 상세 = 진행 파일 §1 Q14. 완료 뒤 사용자가 본체에 머지 지시한다.
   queue Codex 창은 Q14 작업 중. 계산기 레인 CALC-KO-1은 머지 완료 후 대기(아래4번). 다음 회차 자동 지시 금지.
   머지 절차 정본 = hardening-protocol §6·7-F. 독립 검산→빌드→sitemap 실제 변경 URL 대조→push→page.content 새문면/구문면 확인→정확 URL IndexNow→MB·정본·WORKLOG→lane:sync.
   그 밖 후보 ⓑ **Q8-a** pt 용어·문체 분열 소급 ⓒ **Q8-b** id·de 분열(es LATAM은 열지 않는다).
   🔴 **«계산기 랜딩 SEO 재조준»은 소멸했다 — 되살리지 마라**(브리프 §0 기준 11/11 종결). 🪶 같은 유형이 **es·ja·pt·zh·zh-hant `solver-client`에 5곳** 남았다(브리프 §5 말미).
2. **🟠 GA 계측 판정 2건**(09-20 (2) 규명 회차가 남긴 것 · 정리 `docs/ga-notset-diagnosis-2026-09-20.md` §6) — ⓐ **Vercel Analytics·Speed Insights가 꺼져 있다**: 레이아웃에 `<Analytics />`·`<SpeedInsights />`가 렌더되고 패키지도 깔렸는데 라이브 요청 0건(`web_analytics_not_enabled`). **켜거나(대시보드 토글 = 사장님 몫) 컴포넌트를 빼거나** 둘 중 하나 — 지금은 둘 다 아니다. 켜면 GA4가 못 보는 유실을 독립 측정할 유일한 수단이 생긴다. ⓑ **GA `lazyOnload` 유지/변경**: 느린 회선에서 page_view가 7~8초까지 밀려 그 전 이탈자가 집계에 아예 없다. 단 `afterInteractive`로 얻는 건 **1.25초뿐**(병목이 대역폭 경합) → **ⓐ를 먼저 켜서 규모를 재고 판정하는 순서를 권한다.**
3. **10/14 이후 — 배치 효과 4주 비교**(캘린더 등재됨). 기준선 `docs/post-placement-analysis-2026-09-16.md` §2 · 같은 창(`npm run analytics` + `ga-fetch --pages --days 28`). 모바일 홈 36.7%(60세션)는 09-16 배포 전 값 — 그때 재측정. 같은 창에서 `/ja/calculator`·`/zh/calculator`·`/zh-hant/calculator`·`/es/calculator`·`/pt/calculator`·`/de/calculator`·`/fr/calculator` GSC 쿼리 첫 판독(일곱 다 신설 직후 0 · pt는 «calculadora poker»·«calculadora odds poker»·«icm calculator» 축 · es는 «calculadora de poker»·«icm calculator» 축 · zh-hant는 「德州撲克勝率計算器」 260·「icm計算機」 70 축을 본다 · de는 «poker rechner» 260·«poker wahrscheinlichkeiten rechner» 210·«poker odds calculator»(영문 590) 축을 본다 · fr은 «calculateur poker» 390·«icm poker» 480·«équité poker» 110·«tableau push or fold» 70 축을 본다 · **ms는 쿼리 단위로도 볼 게 없다** — 말레이어 축이 통째로 null이라 «poker calculator»·«poker odds calculator»(각 90 · 조준 안 한 영어 축)에 노출이 붙는지만 기록한다 · **id는 «kalkulator poker» 10 하나만 본다** — 🔴 인니어 축이 통째로 10 단위라 **쿼리 단위로 내려가야 보인다**(페이지 합계로는 0으로 보인다) · 영어 «poker calculator»·«poker odds calculator» 각 90은 **조준 안 한 축**이라 노출이 붙으면 그것대로 기록해 둘 것 · 🆕 **hi는 «데바나가리 쿼리에 노출이 붙는가»만 본다** — 조준한 영어 축 `poker odds calculator` 390은 SERP 19/19라 노출이 붙기 어렵고 힌디어 축은 볼륨 자체가 null이다. **붙으면 §3-B의 «힌디어 SERP 공백» 판정이 맞은 것**이라 그 자체가 결과다).
4. 🪶 **계산기 잔여** — 🔴 **Q10(09-21)이 «남은 것» 7건을 전건 닫았다.** 판정만 하고 안 고친 3건은 `docs/en-first-queue.md` **§2-H**로, 새 재료 6건은 브리프 `calculator-landing-rewrite.md` **§5**(「Q10 회차가 §5에 더한 것」)로 갔다 — **여기서 다시 집지 마라.** 남은 것은 둘뿐:
   **CALC-KO-1(KO SPR/outs/ICM) 머지·배포 완료.** 계산기 레인 `Holdem-calc-ko` / `harden-calc-ko`는 다음 사용자 지시 대기. **EN·공용 후속8건** 정본 = `docs/harden-calc-ko-진행.md` §5(SPR 경계 반올림, 아웃츠 예시·근사 라벨, ICM 가중·설명·입력·표식·%p). 이번 완료를 전체 계산기 잔여0으로 읽지 마라.
   🟠 **사장님 판단 1건**(en-first §2-H H-3): 폴백 T5 56타입 중 **50타입(600콤보)이 T4 최약체 `32s`보다 세다**(K8o 56.0% ↔ 32s 36.1%). 🔴 09-20 기각안(수티드에 «작은 쪽» 바닥)을 되살리는 게 아니라 **오프수트 줄을 넓히는** 방향이고, 콤보 산술상 23번째 타입이 정확히 **`K8o`**(276콤보 = 666 · 663에 가장 가깝다). 열지 말지 = 사장님.

## 🔵 미결 (해결되면 WORKLOG에 적고 지운다)

- **「홀덤 족보」 634노출·클릭 2** — 611노출이 noindex인 `/hands`에 남아 있다(반영 지연). 조치 없이 다음 28일 창에서 /hands 노출 0·필라 순위 상승 확인. 재제출·되살리기 금지.
- **「포커 홀덤 차이」 계열 188노출·r9~11 · 전용 글 없음**(7포커 글은 다른 의도) — 롱테일 후보. 채택 전 SERP 실측. 근거 `docs/seo-report-2026-09-16.md` §4.
- 🆕 **Q13-a가 남긴 것 4건**(상세 = `docs/harden-queue-진행.md` §2 「Q13-a가 남긴 것」): ⓐ 🟠 **쿨러 「behind the whole way」 계열 8로케일 × 약 5자리** — 짝 글 bad-beat에서 고친 «라벨↔값 어긋남»의 거울상. 🔴 **명제는 정의상 참**이라 사실 정정이 아니라 **문면 수렴 회차**(EN-먼저 · `en-first-queue` §2-J J-1) ⓑ 🟠 **쿨러 정의문 「could never correctly fold」 16자리** — 이번엔 «정의라서 유지»로 판정했다. **다시 열려면 판정부터**(J-2) ⓒ 🟠 **zh `holdem-bad-beat` L193 직답 141자**(규격 60~130 · 선재 부채) · zh `holdem-fish` 제목 「一眼认出」은 **CTR 훅이라 §17상 교체 금지**(기록만) ⓓ 🟠 **es 쿨러 FAQ L159에 스페인 2인칭 복수 「teníais」**(①원본 · es는 LATAM 기준) → es LATAM 트랙 몫.
- **우편함 — 회신 대기 중**: **MB-077**(CALC-KO-1 머지·공용8건 분리 통지), **MB-076**(Q13-b 완료·앵커 갱신·선재 중문 미결 통지), **MB-075**(09-22 · Q13-a · **이견 2**: ⓐ 원장 #24가 정본으로 든 de 문면이 **공집합 처방**이라 근거란 정정 요청 ⓑ MA-147 ②의 **로케일 개수가 여섯 축에서 작다**(앵커 축어 grep이 표기를 못 맞춤) · **신설 결함 2**(ja 「イディオットエンド」 검색 0건 · zh-hant 콜아웃 전방참조 무조건형) · **앵커 갱신 요청**) · **MB-072**(09-21 · MA-158·159·163 이행 + MA-147·148 미이행 통지 · **요청 3**: ⓐ ms 66 «정밀형» 오판 정정 + 원장에 «분배 표지» 축 신설 ⓑ ⭐배지↔종료 공존 0 회귀 앵커 ⓒ 147-②ⓐ 앵커를 「In every one」으로 수정). 그 밖 미처리는 «→검수장»(MB-033~062 + S-022·023). 🔴 MB-054는 **MB-053 ②(상금풀 $87,568,080)를 뒤집는 통지**. 🪶 `check:mailbox` 기존 흠 둘(미수정): «MB-054 파이프 9» 🔴 · «MB-067 열 결손» 🟠(남의 회차 행이라 손대지 않았다).
- **zh·zh-hant 판정 요청 1건 대기**(Q4b-4 · re-entry 행 제목 「重买/重買」 → 「再入场/重新進場」 후보 · 거울쌍으로 같이) — 두 로케일 진행 파일 §5 말미. 레인 회차 없음 유지, 사장님이 열 때.
- **de 형제 글 3건(낮음 · 포스트 수정이라 posting.mdc 절차 · MB-063 ⓒⓓ)**: ① `holdem-equity` FAQ 「Brauche ich einen Equity-Rechner?」와 `holdem-icm` FAQ 「In der Praxis nutzt du **einen** ICM-Rechner」가 계산기를 말하면서 **링크를 안 준다**(부정관사가 경쟁사로 가는 문) ② `holdem-bubble`이 계산기를 3번 가리키는데 계산기는 버블 글을 0번 가리킨다(related 8은 EN parity라 본문 링크로) ③ `holdem-short-stack` M 존 표가 경계를 겹쳐 적는다(「10–20 / 6–10」 ↔ 계산기 「10–19 / 6–9」 — 계산기 쪽이 정본). 🟢 `/de/solver` 누수는 0건.
- **fr 포스트 1건(낮음 · posting.mdc 절차 · MB-064 ⓓ)**: `lib/posts-fr/texas-holdem-rules-for-beginners.ts:444` — **fr 유일의 인바운드**인데 앵커가 09-18에 교체한 «calculatrice de probabilités poker»다(현 페이지 이름 = «Calculateur poker»). 같은 줄의 `/hand-chart`는 09-19 (5)에서 `/en/hand-chart`로 해소.
- 🆕 **Q12-b가 남긴 것 3건**(상세 = `docs/harden-queue-진행.md` §2 「Q12-b가 남긴 것」): ⓐ 🔴 **ar은 09-11 EN 델타(라이브 스트래들 절)를 여전히 못 받았다** — 이번에 이식했다가 **되돌렸다**(ar tldr·표·불릿이 「BB뿐」이라 FAQ만 앞서가면 파일 안 모순). **Q12-a가 남긴 ar showdown 149 소급과 한 묶음 = ar drift 회차** ⓑ 🟠 꼬리 16은 ⓖ 대상 아님(결재 40 ②) · 꼬리 `game-order` All-in 표 셀이 아직 `522b57f8` 이전 판(**ar 포함 17편**) ⓒ 🟠 **KO `holdem-odds-calculator`가 «완성 확률»을 「승률」이라 부른다**(L1309·L1343·L1467 · 산수는 전부 맞고 **라벨만** 틀렸다 · 이 회차가 25로케일에서 지운 혼동의 **네 번째 사본** · EN `holdem-pot-odds`는 이미 옳다) → **KO 단독 정정 회차**.
- 🆕 **Q12-a가 남긴 것 3건**(상세 = `docs/harden-queue-진행.md` §2 「Q12-a가 남긴 것」): ⓐ 🟠 **꼬리 16로케일은 all-in만 받고 showdown은 안 열었다** → «두 글이 반대로 말하는» 교차 모순 잠재. 열 때 **한 묶음으로**(`en-first-queue` §2-A 꼬리 행에 주석) ⓑ 🟠 `lib/posts-fr/holdem-all-in-rules.ts` **FAQ 답 7개가 `A. R. `로 시작**(`A.` + `R.(Réponse)` 접두 중복 · 렌더에 그대로 나온다 · ①원본 유래 · fr 전용) ⓒ 🟠 **EN showdown `tldr`이 「마지막 어그레서가 먼저」를 무조건으로 말한다**(L8) — 고치면 `check:seo-sync` 축이 열려 9로케일 메타를 같이 움직여야 하므로 별건.
- **Q13-b 선재 중문 미결**: zh glossary 50% 기준/c-bet 분류·직답 길이, zh-hant rake 전원 이익 문면. 상세 정본 = `docs/harden-queue-진행.md` §2. 다음 지시 없이 자동 수정하지 않는다.
- 장기 미결 = `docs/harden-queue-진행.md` §2 · `docs/pending-work.md` · `docs/en-first-queue.md` §3(EN counterfeiting 조건 누락 등).

## 🕒 시한 (정본 `docs/update-calendar.md` — 요약만)

- 9/26경 Bing·Yandex 색인 관측 · 10/5 WPL 제8회·10/7 APT 제주 종료 → `EVENT_UNTIL` 자동 강등 확인 + 결과 아카이브 전환 · 10/14~ 배치 비교 · 11/15 Circuit Panamá 종료 → es como-entrar Circuit 표 · 12/31 K-ETA 면제 + 중국 단체 무비자 연장 만료 + 2027-01-01 ESTA 수수료(한 회차로).

## 유지 규칙 (정본은 각 파일 — 여기엔 포인터)

- 포스팅 배치 = `lib/featured-order.ts`(새 대회 글 발행 시 `EVENT_UNTIL`에 종료일 한 줄 · S·A 배열은 분기마다 재판정). 관문 추천 블록 = `docs/post-placement-verification-2026-09-16.md` §1.
- GTO 시리즈 러닝맵 라벨 = `lib/gto-series-i18n.ts`(로케일 솔버 랜딩 문구를 바꾸면 같이). 다국어 우측 레일 CTA 문구 = `components/intl-blog-post-client.tsx` CALC/SOLVER_CTA_LABELS.
- 계산기 로케일 사전 = `npm run check:calc-parity -- <loc>`가 EN 값·개수·플레이스홀더·인용부호를 본다(`check:hygiene`은 app/**를 안 읽는다).
- 참여율은 `npm run analytics`로만(규칙 v1 · 누적 `docs/analytics-log.md`). IndexNow는 실제 변경 URL만.
- 세션 시작: AGENTS → CLAUDE → 이 파일 → `git status`. 「읽고 대기」면 자동 착수하지 않는다. HI 재사용 자료 = `docs/keyword-bank/hi-posting-reference.md` §8.
