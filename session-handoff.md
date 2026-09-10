# 세션 인수인계 (Session Handoff)

> **이 파일은 «다음 할 일 + 미결»만 담는다.** 회차 보고를 여기 쓰지 마라.
> - **경위·완료분** = `WORKLOG.md`(slug로 grep · 통독 금지) · **지난 핸드오프 원문** = `docs/handoff-archive/`(통독 금지)
> - **확정 결정·상시 규율·되돌리지 마라** = `docs/settled-decisions.md` ← **재론 전 필독**
> - **EN-먼저 작업 대기열** = `docs/en-first-queue.md` ← **다음 회차 재료의 본체**
> - **시한 항목** = `docs/update-calendar.md`(🔴 핸드오프 요약을 믿지 말고 그 파일을 직접 열어라)
> - 🔴 **미결은 해결될 때까지 유지** — 해결되면 WORKLOG에 적고 **지운다**
>
> 🔴 **마감 3단**(CLAUDE.md §12): ① 경위는 WORKLOG로 ② 새 규율은 정본 문서로 승격 ③ 여기엔 할 일+미결만.
> 🔴 **종결된 항목은 «취소선을 긋는 게» 아니라 «지운다».** 취소선만 그어 온 결과가 **288KB**였다(2026-09-10 대청소).
> 마감마다 `npm run check:handoff` — 30KB를 넘으면 그 자리에서 청소한다.
> **핸드오프는 다른 세션의 판정 근거다 — 미검증 문장을 쓰지 마라.**

---

> 🔴🔴 **2026-09-04 발효 — 2플랜 병렬 국면**(사장님 지시 · 정본 `docs/settled-decisions.md` **§5-A-3**)
> **집필 = Fable 5.1**(잔량 있을 때 · 한 세션 안에서 `/model`로 구간을 갈라라) ·
> **실행·게이트·배포·전건 원문 판정 = Opus** · **렌즈 4종·2차 교열 = Opus 서브**(`model` 명시) ·
> 🔵 **전문 검수 = GPT**(Codex · `홀덤검수` 폴더 · `gto-5.6-sol` / 강도 `ultra` · 잔량 마르면 «6.0 아스트라»).
> GPT를 두는 이유는 «더 세다»가 아니라 **«다른 가족»**이다(Opus·Fable은 같은 가족 = 맹점 상관).
> ⚠ **Fable 잔량이 마르면 본체는 Opus로 내려오고 §5-A-2가 다시 산다** — 그 순간 GPT가 유일한 다가족 렌즈다.
> ⚠ **렌즈 «종류»를 없애는 절약은 금지**(§5-A-1). **쓴 모델이 본 0건은 0건이 아니다.**
> 🔴 **에이전트 창을 나눠라** — 멀티루트 워크스페이스에서 돌리면 쓰기 범위가 전 폴더가 된다(09-04 실증).
> GPT 경계 = `홀덤검수/AGENTS.md` + `.cursor/rules/audit-guard.mdc` **둘 다** · 팩 규격 = `docs/mailbox-protocol.md` §5.

---

## ▶▶▶ 다음 할 일

### 🟢 직전 회차 (2026-09-10 (1) · Opus 헤드) — 게이트 6종 + 핸드오프 대청소
`d1f5fc69`→`9dde68bf` 배포 완료 · 빌드 708p exit 0 · 워킹트리 깨끗. 경위 = WORKLOG 「2026-09-10 (1)」.
**대기열 9(ⓐⓑⓒ)·37(①②③④) 종결 · 40은 코드만 이행**(정책 문장 승격은 결재 후).
신설 게이트 = `check:answer-echo` · `check:structure` · `check:hygiene` · `check:handoff` /
수리 = `check:mirror-pair`(둘째 튜닝) · `check:drift`(2등급 분리).

### 🔴 1순위 — 구조 결손 전파 회차 (A~C · 한 뿌리)

`npm run check:structure`가 실증한 «EN 회차가 로케일에 통째로 안 간» 자리다. **본체는 `docs/en-first-queue.md` §0.**

| 축 | 실측 | 대표 |
|---|---|---|
| **A** h2·row | 🔴 7편 | 🔴 **de `holdem-tiebreak-rules`에 「Do Suits Matter in Poker?」 절이 없다**(§13 인접) · zh-hant `hand-rankings` h2 −3 + row −11 |
| **B** faq | 60편 | de `drawing-odds` 11문 중 3문 부재 · **id·pt `hand-rankings` 12 ↔ EN 20**(구 대기열 46 = 이 집합의 일부 · 낱개로 닫지 마라) |
| **C** link·li | 44 + 7편 | `3bet-pot-cbet`(de·id·ja) · `low-board-check-raise`(de·es·id) · wsop-2026 li −13(ja·zh·zh-hant 공통) |

🔴 착수 규율: 로케일에서 고치지 마라 → EN 원문 판정 → EN 정정 → 전파. 번역 배치 = Opus 서브(현지 키워드 확인 선행 · EN 질문형 직역 금지).
🔴 의도적 편차는 `docs/locale-intentional-diffs.md`에 **등재해 닫아라** — 안 닫으면 게이트가 매 회차 또 집는다.

### 🟠 2순위 — 게이트가 새로 드러낸 나머지

| 무엇 | 규모 |
|---|---|
| `check:answer-echo` 🔴 **27건**(직답↔본문 축어 되풀이 · ja 19 지배) + 🟠 **length 229건**(90~170자 밖 · **판단 대기 13-ⓑ와 같은 축**) | 중 |
| `check:drift` 🔴 **핵심 14편 잔여**(de 5 · 그밖) — 꼬리 107은 🟠로 내렸다 | 소 |
| `check:mirror-pair` **실제 갈림**(아티팩트 걷어낸 뒤) — zh 일정 표에 apt 이벤트 **3행 결손**(8/8·8/13·8/14) · zh만 보유 2(apt 비자 문단 · kpm The Star Sydney) · zh-hant만 보유 2(wsop 대만 세금 · ept 예산 문단) | 소 |

### 🔴 결재가 나면 바로 이행할 것
- **§6-5 트랙 종결 절차** — 검수장 원장 편입 요청 + 회차 6·7 GPT 팩(세 레인)
- **결재 11** KPM 「9/4」 EN+6로케일 29자리(처방 = 날짜 단정 삭제 · RUNNET 9/4 종료 · worldsmarathons 확인)
- **대기열 40** 정책 문장을 `settled-decisions`에 못 박기(게이트 코드는 `0d291b63`으로 이행됨)
- **ja 레인 회차 9 여부** — ja §2-H 잔여 = 직답↔본문 축어 3건 + pot-odds 예시 팟 두 계열
- 🪶 전파 서브 브리프에 **«파일 상단 주석의 동결 지시를 먼저 읽어라»**를 넣어라((12)에서 `masterUpdated` 동결 3자리를 올렸다가 2차 교열이 복원)

### ▶ 그밖에 열 수 있는 것
- 🔴 **en 56편 원장 레인을 열지**(본부 M-113 ⑦ · 사장님 재가 대기) — `DECISIONS.md` §2 「EN 소급 전수 검수는 안 한다」 ↔ 최근 회차가 EN을 **마스터로** 다룬 것이 갈린다. 「지금은 EN이 마스터다」로 정리되면 **오히려 1순위**
- 🔴 **EN 56편 `updated` 전수 대조 회차**(zh-hant 세 회차 연속 청구) — 상세 = `docs/en-first-queue.md` §3
- 🟠 헤드 판정 묶음(zh 표기 통일) — `打公共牌`/`打公牌`/`打牌面` · `二四法则`/`2 和 4 法则`/`4-2 法则` · `劫机位`/`劫持位` · zh 인용부호 3갈래 + pot-odds 比率↔百分比 절 통합 — **한 번에**
- 🟠 헤드 판정 6건(코퍼스·구조) — ja 전각（）규정↔실물 반각 5,351:전각 362 · ja 見出し 콜론 갈림 · ja `drawing-odds`만 `## FAQ` · zh-hant 상단 `快速解答` 블록 넣지 않기(상자 셋) · zh-hant probability FAQ 10:15:16 결손/압축 판정 · zh-hant 부분문자열 태그 쌍
- 🟠 검수장 **MA-118 요청 2** — es `como-entrar-al-wsop`·`wsop-2026-tournament-guide` WRONG 15·RISKY 10·STALE 2 + **LISR 138조 웹 실측**
- 🟠 회차 `updated` 스탬프를 «착수일/마감일» 중 무엇으로 볼지 정본 판정 → 프로토콜 §5-⑧에 한 줄
- 🟠 pt `holdem-strategy.ts:183` 용어표 「3-bets dos blinds = polarized」 pt 단독 모순

---

## 🔴 사장님 판단·결재 대기

### 🟣 헤드 판정안 (권고 붙음 · 결정은 사장님 몫)

| # | 안건 | 권고 |
|---|---|---|
| **40** | 17로케일 사본 정책 | **ⓒ 사안별 2등급** — ① §13급(승자 뒤집힘·규칙·수치)만 25로케일 ② 문안·구조·GEO는 핵심 8까지 ③ 게이트 2등급 분리. 🟢 **③은 이미 이행됨**(`0d291b63`) · 남은 건 ①②를 `settled-decisions`에 못 박는 것 |
| **12** | ja «업태» 3건(rake·card-counting·tvc) | **열지 않는다** → `locale-intentional-diffs`에 «EN(미국 카드룸) 기준 유지 · 근거 = 1차 출처 미확보» 등재. 1차 출처(실제 점포 요금표) 확보되면 **FAQ 1개(법 판단 0)**로만 |
| **13-ⓐ** | 「高レート」 채택(볼륨은 レート · register는 麻雀·パチンコ) | `rakko-playbook` 함정 절에 «볼륨이 이기고 register가 지는 표기» 유형 1행 등재(정본은 ja §3-I 그대로 = 高レート + 첫 등장에 ハイステークス 병기) |
| **13-ⓑ** | 이벤트 가이드 直答 블록 90~170자 상시 초과(wpt 8/12 · ept 6/14) | **의도적 편차로 등재** — 물류 정보는 직답이 표 대용. 단 **상한 300자**를 같이 적어 무제한이 되지 않게. 🪶 `check:answer-echo`가 이미 이벤트 가이드를 길이 면제로 다룬다 |
| **15** | bad-beat 「Overpair vs flush draw ~63% (1.7:1) · Their 9-out flush draw」 | **ⓑ 63% 유지 + 행 문구를 «nine outs plus live side cards»로** — 순수 9아웃 65.0%/1.86:1은 «드로우 미완성 확률»이지 «오버페어 승률»이 아니다(실전 61.6~63.4%). **값을 되돌리면 두 번째 오류**가 된다. 8로케일 동형 |

### 결재 안건 (권고 없음)

| # | 안건 |
|---|---|
| **14** | zh-hant `冷牌組`(Cooler) → `冤家牌` 교체 여부 — 네이티브 1차 출처: 대만 페이지에서 冷牌組 0건 · 자동완성은 유희왕 덱 · sixpoker666·andypoker 「冤家牌 Cooler」. 🔴 **5편 111곳 + title·seoTitle·tags 축**이라 «되돌리지 마라»와 충돌 · 바꾸면 zh 간체 사본도 셀 것 |
| **11** | `korea-poker-marathon-2026` «9/4 마감» 8파일 33자리 — ja 4자리는 이행됨(`af6ca275`). 🔴 **창구가 둘이다**: RUNNET(일본) 4/16〜9/4 실제 종료 · worldsmarathons는 «still available». EN+6로케일 29자리 대기 |
| **0** | 대회 글 3편 원장 신규 편입 여부(`wsop-2026-tournament-guide`·`como-entrar-al-wsop`·`korea-poker-marathon-2026`) — 편입하면 신규 1편씩(주장 전수 추출+판정) |
| **1** | `starting-hands-chart #13` — 수치를 고칠지 핸드 목록을 고칠지(UTG 13% vs 조합수 144콤보=10.86%). 🪶 EN-먼저 ㉗과 같은 갈래 |
| **2** | 다국어 «판 전체 재동기화» 여부 — 노출 미미(전 언어 클릭 합 2). 착수 시 `docs/multilang-sync-plan.md` |
| **3** | de 콘텐츠 신설 — 칩 분배 계산기(`verteilung rechner` LDA7) · 세금 FAQ 흡수(승인·미착수) · 툴 브랜드 대응 |
| **5** | EN 제목 보강 3편(`holdem-3bet`·`holdem-continuation-bet`·`holdem-pot-odds`) 🔴 GSC 먼저 |
| **6** | 소품 셋 — PDF 용지 규격(ko·ja·zh도 A4) · es 국기 · `app/home-client.tsx`(죽은 파일) 삭제 |
| **7** | 다국어 본문 이미지 재사용 🔴 40건 — 8로케일이 같은 5장을 같은 슬러그 집합에서 공유. 🔴 KO의 «0»은 미검사였다. 착수하면 **EN-먼저 + 이미지 5장 신규 제작**(§3-A: 카드 창작 금지) |
| **소품** | ko·en 솔버 랜딩 «언어 열거» 신설 여부(🟢 거짓 진술 없음 = 결함 아님) · 규칙 PDF pt·id판 제작 여부(`poker para iniciantes pdf` 수요 실재) · CAPT `capt-seefeld-oct` `buyin` 단일값 규약 + Pokermania XL(Velden) 행 신설 |
| **동결** | 🔴 모바일 속도 부채 «폭 750px 미만 15장» — **사장님 원본 대기**(15장 전부 직접 찍은 사진 · 크롭 처방은 폐기). 정본 = settled-decisions §1-A |

---

## 🔴 회신·대기 (도착하면 처리하고 지운다)

| 발신 | 무엇 | 상태 |
|---|---|---|
| **MB-023** | 세 레인 머지·배포 통지(zh `90b59bd0`·zh-hant `8b82e75a`·ja `7e901476`) + EN 6편 변경 통지(`c22533ad`·`b292a603`) + MB-022 ① 해소 | 검수장 델타 재판정 |
| **MB-022** | EN 변경 통지 `125c83f5`(23편) + MA-125 ④·MA-126 ①④·MA-127 ③ 종결 회신 + 검수장 27-2 「K-Q-J-10-9」 정정 요망 | 검수장 재판정 |
| **MB-024·025** | (12) 회차 EN 16편 변경 통지 · 이미지 2장 · MA-121 ③④ · MA-122 ② 회신 | 검수장 |
| **M-110** | 결재 통보 + 요청 = CHANNELS 수정과 첫 `MA-` 행을 **한 커밋**으로(도구가 «파이프+공백+접두+하이픈»으로 행을 잡아 새 접두가 기존 채널에 안 걸린다 · 🔴 미탐 발생) | 검수장 |
| **M-111** | 검수 병렬화 착수 + 제안 B 본체 몫 완료. 요청 = A·B를 한 도구 커밋으로 + 레인 규율 둘 | 검수장 |
| **M-114** | M-113 정정 3건 수용 + 「재경화 목록에서 빠져나갔다」 = «마쳐서 빠졌다» 해소 → es 레인 착수 보류 해제 가능 | 검수장 |
| **M-099** | ④ EN 역이식 + 7로케일 전파 회신. 요청 = 회귀 앵커 갱신(한정어 추가형 3개 재앵커) | 검수장 |
| **M-107** | 앱 12언어 정본(`i18n.ts:18`) · 셀렉터 08-27 제거 · `translation-terms-hi` 정정 · ko·en 랜딩은 대상 밖 | 솔버 |
| **솔버 통지 08-24** | `docs/reply-to-solver-2026-08-24.md`(④⑦⑧⑩). 🔴 **다시 보내지 마라** · 배포 통보 오면 번들 해시 한 줄로만 확인 · 다음 왕복 때 한 번에 얹을 것 | 솔버 |
| **M-073** | pt 세션 0~6 정정 이행 완료(`0ba0687c`) · 남은 것 = 검수장 기준선 뒤집기 회신 | 검수장 |
| **M-022** | K-ETA 4축 정정 — «22» 분해형 4로케일(zh 「日本等 22 国」·en 「and 16 more」·es 「y 16 más」·zh-hant 「及另外 16 國」) **실물 확인 후 닫아라** | 본체 확인 |
| **de M-041 원장** | 반영 완료(쫓54+닫14) · 미해결 80→14. 보류 건은 트리거 대기(APT 인천 종료 / EPT 8/29) | 트리거 |
| **원장 갱신 요청 4건** | #100·#99 종결 · #100 로케일 수 de→6 · pt 새 행 · 총계 22 UNVERIFIABLE | 검수장 |
| **검수장 pt 원장 편입** | 진행 중(27/42편 · 1,691주장 — OK 1,570 · RISKY ~36 · WRONG 3 · UNV ~82). 잔여 = glossary 6 · tournament 9 | 진행 중 |
| **wpt 비자·NSW 재실사** | 미착수(M-073 권고 ①) — immi 수수료표·여권목록이 JS 컴포넌트라 본문 미노출 · NSW 현금한도 $1.000/2027-08 법령 1차(§73A) 표기 층 확인 | 별도 리서치 회차 |

---

## 🔵 미결 — 해결될 때까지 유지

### 렌더·게이트·코퍼스
- 🪶 **직답 라벨은 로케일마다 다르다 — 검사 기대값을 옆 로케일에서 뽑지 마라**: zh `快速回答` · zh-hant `快速解答` · ja `先に結論` · ko `바로 답` · en `Quick answer`(전부 정본 · 의도된 차이)
- 🟠 콜아웃 «형태» 코퍼스 분열 256블록·102파일 — `> **제목**` 다음 줄부터 본문이면 금색 카드(1,023), 같은 줄이면 회색 blockquote(256). 🔴 결함이 아니라 형태 차이
- 🟠 검수장 회귀 앵커가 낡았다(콜아웃·앵커 둘 다 새 형태 · MB-013 통지) — 회신 전까지 그 앵커의 🔴는 판정 보류
- 🟠 게이트 부재 — 「따옴표 빠진 썸네일 링크」(`](/blog/slug thumb:/images/x.webp)`) 검사가 없다. href에 공백이 들어가 링크가 깨지는데 `audit:hard`가 안 본다
- 🟠 `audit:hard --locale=ja` 2건 — 형제 표 자동대조가 **행 키 불일치로 전혀 안 된다**(`tiebreak L100↔reading L129` · `3bet L192↔cbet L170`) → 육안 대조 필요
- 🪶 `scripts/scan-mobile-fold.mjs`가 첫 인자를 버린다(`bi = -1`) — 우회 = `--base` 명시
- 🪶 게이트 H5 판정 경계 — 「한 줄에 카드 5장 + 족보명」이면 그 5장을 «핸드»로 본다(보드만 5장 적고 같은 줄에서 족보를 말하면 울린다)
- 🔴 **배포 전 검증은 `npm run build`로** — `build:vercel`만 돌리면 사이트맵이 안 갱신된다(프로덕션 체인이 `prebuild`를 안 탄다)

### 링크·라우트·자산
- 🔴 `/zh/hand-chart` 라이브 404 — `lib/posts-zh/holdem-starting-hands-chart.ts`가 이걸 가리킨다. 라우트는 `app/hand-chart`·`app/en/hand-chart` 둘뿐 (판정 애매 — zh 레인 종결 선언과 상충하니 실물부터)
- 🟠 `/hand-chart`가 6로케일에서 «자기 언어가 아닌 화면»으로 떨어진다(de·id·ja→한국어 · es→영어) · 나머지 6로케일 판정 필요
- 🔵 `/id/solver` 랜딩 404 — 번역은 완료, `outbound.ts` 한 줄로 켜짐. 열려면 `docs/solver-landing-playbook.md` 12단계 (판정 애매 — M-095 종결행과 상충)
- 🔷 `wpt-seoul`·「공식 미기재」 3행의 한국 허브 카드 편입 — **«행 단위 `venue`» 구조 회차가 열릴 때만**(09-04에 넣지 않기로 판정)
- fr 랜딩 내부링크 보강 — fr 코퍼스가 규칙 6편뿐이라 표준 링크 세트 불성립(프리플랍 안내는 앱 Charts préflop 탭으로 임시 대체)

### 경화·레인·우편함 운영
- 🟠 GPT 경계 파일 — 검수 폴더는 닫혔고(`29937f3`) **솔버 폴더 쪽은 아직 없다**
- 🟠 경화 «이후» 추가분이 진짜 대상인지 미확인 — zh 13편 · zh-hant 14편 · es 30편
- 🪶 소수 언어 17개 112편 — 경화 트랙 0회 · 사장님 판정 «나중에»
- 🟡 우편함 제안 A·B — **전환 신호 대기**(발신함 분리 + `MA-`/`MB-`/`S-` 접두). 🔴 본체는 아직 `M-###`도 쓴다 · `tools/mailbox-check.mjs` CHANNELS 접두 검수장 커밋이 전환 신호
- 🪶 M-079가 중복이다(검수장 1 + 솔버 1) · 09-06에도 회신 번호를 두 번 내렸다 → 🔴 **우편함 ID는 행을 쓰기 «직전»에 다시 세라**
- 🪶 `홀덤검수` 레포는 원격이 없다(로컬 전용) — 프로토콜 §2의 「발신 전 `git pull`」은 해당 없음

### 솔버 랜딩·앱
- 🟠 **인도네시아어 원어민 렌즈 미검사**(M-095 ⑦) — 기계 게이트는 `percuma`·`pelayar` 같은 알려진 말레이어 낱말만 잡는다. 🔴 «어법»이 말레이어인 문장은 원어민만 본다
- 🟠 id 커뮤니티 LABELS가 kamu체 — 블로그 43편·브리프·솔버 앱은 Anda
- 🟠 트레이너 문턱 `0,08bb` 반올림 모순 · «range advantage» 등치 · GTO Wizard «방식» 단정 → **EN-먼저**(`docs/en-first-queue.md` §2) 🔴 랜딩은 잠겨 있다

### 대회·사실 판정
- 🔴 **EN 동형 30건(M-089 §4)** — ④는 «등급표 항목»만 닫았다. 남은 것 = bad-beat #12 «~65%(2:1)»→~62% 8로케일 동시 · betting-actions 103조 두 요소 8로케일 · flush-vs-straight SF 5장/7장 라벨 등
- 🟠 대회 note EN 측 재판정 2 — `NOTE_EN["apl-seoul-winter-circuit-1"]` 「전 이벤트」 탈락 · `NOTE_EN["hpt-5"]` 「Day 1 Sep 11–12」 범위 표기
- 🟠 `apt-jeju-2026-fall-guide.ts`의 「136」 9곳 — **라이브는 135다.** `lib/tournaments.ts`는 고쳤는데 글은 136이라 **지금 사이트 내부 모순 상태**
- rake «GGPoker는 일부 프리플롭 팟도 레이크» — 사업자·시점 종속. GG 공식 레이크 표 라이브 재확인 후 유지/중립화
- straddle «solvers open 15–20% less on the button» — GTO Wizard 귀속이 이 수치엔 안 걸려 있고 상대/절대 감소 중의적(수학 렌즈 검증 불가)
- KO `apt-incheon` `$3.50` 스텝 위성 실재 여부 — Natural8 페이지 시즌 종료로 다운. 🔴 **서둘러 지우지 마라**
- `GGPoker SuperSatellites` 고유명 — 08-13 중립화 · ggpoker.com 404 → 검수장에 근거 URL 요청 후 승격 판단
- JTBC 외국인 쿼터도 추첨제인가 — 공식은 「국내 등록은 추첨제」만 명시

### 이미지·워터마크
- 🔴 이미지 재사용 다국어 **2단계는 사장님 판단**(위 결재 #7) — 1단계 측정 완료
- 🟠 `check:image-reuse` 🟠 7건 «교차 클러스터» 판정 대기 — 🔴 위반이 아니다(예: `holdem-pub-players-table`을 홀덤펍 필라와 스타팅핸드 필라가 나눠 씀)
- 🔴 **구형 워드마크 «본문 378장»은 아직 판정 자체를 안 했다** — C-2 종결은 «히어로 77장» 한정이다
- 🪶 밝고 복잡한 배경 위 워터마크는 판독성이 낮다 — **규격을 그 장만 바꾸지 마라**(`apt-jeju-fall`·`appt-korea`·`apt-jeju-classic`)
- 🪶 외부 자산 3장은 손대지 않는다(WPL 공식 포스터 · GGPoker 배너) — 「워터마크 부재」로 잡혀도 조치 대상 아님
- 🪶 본문 현장 실사 사진의 워터마크 부재분 — 착수 시 `node scripts/wm-audit.mjs body`
- pt odds 클러스터 3편이 `holdem-reading-straight-example.webp` 공유 · glossary 클러스터도 `holdem-button-dealer-board.webp` 4편 — «클러스터 이미지 고유화» 규율 저촉 후보
- 🔴 glossary 이미지의 6타일(ACTIONS/POSITIONS/HANDS/PLAYERS/MONEY/SLANG)이 본문 6섹션과 **이름이 다르다**

### GSC·GA4·색인 계측
- 🟢 **관측 대기** — 「홀덤 spr」 카니발 조치(`bc910c73`) 효과는 재크롤 후. 기준선(07-29~08-26) = 「홀덤 spr」 115노출 클릭 0
- 🟢 **관측 대기** — 「홀덤사이트」 앵커 효과. `npm run analytics` 주 1회 → 홈 CTR 0.4% ↔ `/ranking` 1.5% 분배가 바뀌는지. 🔴 **그 전에 새 글을 쓰지 마라**
- 🟢 **관측 대기** — `/en/blog/holdem-tiebreak-rules` 재크롤 후(`node scripts/gsc-page.mjs en/blog/holdem-tiebreak-rules --days 28` · 볼 것 = r19.3이 1페이지로 들어오나 · 클릭 0을 벗어나나)
- 🟢 **관측 대기** — `blind-meaning` 처방(`node scripts/ga-page.mjs blog/holdem-blind-meaning --days 28` · 기준선 랜딩 오가닉 40.3%·이탈 59.7%·2:49 · 모바일 29.8%·0:25)
- 🔴 **GA4 `page_view` 유실 121세션**(오가닉 5.5% · 55→137로 2.5배 증가 중) — `session_start` 121 · `user_engagement` 113인데 `page_view` 0
- 🟠 `/calculator` 확률·승률 계열이 전부 2페이지(r15.4~21.8 · 합 ~200노출 클릭 1) — 이번 회차는 «훅 근거 없음» 판정만 · ⚠ 1:10 체류는 어느 층으로도 재현 안 됨(원출처 확인 필요 · 랜딩 참여율 58.0%는 실재)
- 🟠 `/pub` 「근처 홀덤펍」 11노출 r6.1인데 클릭 0 — SPR과 같은 «순위 대비 CTR 이상» 신호
- 🔴 **EN 56편 중 색인 19편(34%)뿐** — Crawled-not-indexed 21 · Discovered 11 · unknown 3 · Duplicate 2. 🪶 별도 색인 트랙은 만들지 마라(settled-decisions)
- 🟠 EN 필라 2편의 구글 canonical이 외부 도박 사이트 `747live.bet` 루트로 잡혀 있다(`/en/blog/holdem-pot-odds`·`holdem-reading-the-board`) — **우리 쪽에 고칠 것이 없다**(관측만)
- 🪶 GSC 「감지된 참조 사이트맵이 없습니다」는 결함이 아니다(라이브 200·640 loc 정상)
- 🔴 **저볼륨 페이지의 «쿼리 구성»으로 결론 내리지 마라** — 최대 100%가 안 보인다
- 🟠 독일 실독자 0:14 · GA4 §8 남은 2개(page_view 유실 원인 · 독일어 도입부) — ⚠ **층 미확인 + 표본 과소**(de 실PV 18) → 판정 전 표본부터

### 로케일 용어·문체 분열
- 🟠 de `holdem-position-play` `masterUpdated` 미갱신 — UTG 코어 `88+`→`TT+` 한 자리만 고쳤다. EN 델타 «전체» 미대조라 스탬프 올리면 거짓
- 🟠 `blind-meaning`의 결핍이 다른 로케일에도 있을 수 있다(tldr 계산 공식 부재 + 본문 도구 링크 0) — KO만 고쳤다
- 🪶 zh-hant `holdem-icm` fold equity 3분열(L104 «棄牌價值» · L127 «棄牌權益（fold equity）» · 그 외 영문 병기)
- pt `vazamento`↔`leak` 분열 — 정본은 leak인데 glossary 3편만 전환, strategy는 H2 제목·표 헤더까지 vazamento(20+곳)
- pt 「dar raise/deu raise」(cb 16곳) vs 「aumentar」 혼재 · 홀카드 지칭 3종 혼용(`cartas fechadas`/`cartas de mão`/`cartas na mão` — 브리프에 hole cards 정본 없음) · 「mesa pareada/assustadora」 → 「board pareado」 전환 여부
- pt `flush-vs-straight`·`split-pot-rules` 2편만 `masterUpdated` 부재(게이트 🟠 추적불가 2)
- pt shc «AQo/AJo conforme evolui» — EN 07-19가 AJo 삭제, pt 등 6로케일이 낡은 판(**UTG 13% 판정 #1과 함께**)
- pt strategy 허브 표의 결정 4·5 목적지가 betting-actions·pot-odds(전용 필라 아님) · tvc «Situação/Melhor encaixe» 표가 «Quando sair» H2 아래 — **둘 다 EN 패리티**
- id 표기 코퍼스 분열 — `cek`/`check`(betting-actions만 check 40회) · `tangan`/`hand`(beginners만 tangan 50회) · `meja`/`board`(rankings 클러스터 4:2)
- id-posting-reference §5의 «variance·leak 다수파» 판정 ↔ 세션 9 렌즈 전수 grep 상충(실측 kebocoran 23 : leak 13) — §5 계수 근거 재확인
- ⚠ ja 뱅크의 「SD 24 = 유일한 低」는 **거짓 근거** — 다음 ja 회차에 정정
- de 적대 QA 잔여 6 — `rabattieren` 13곳/4편 · `Side Pot↔Nebenpot` · 드로 라벨 `-Straße` · `Leaks↔Lecks` 8:8 · outs 19,1%↔19,6% · WSOP Rule 96.a 누락 🔴 **손대기 전 재grep**
- es LATAM 보충 패스 — Spain 베이스 42/42 완결 · 다음 = Country=Mexico부터, 슬랭 우선
- 태그 어순 변형쌍 «bad beat vs cooler»↔«cooler vs bad beat» — URL 카니발 없음 · 기록만(조치 불요 후보)

### 전파·기타
- 전 언어 태그 전수 실측 완료(~2,100종) → `docs/keyword-bank/<locale>-tag-volumes.md` 6종 · 4개 필라 반영 · **잔여 반영 계속**
- GTO 13편 → 12개 언어 전파: ✅ ja·es·zh · 🔴 **잔여 pt·de·zh-hant·fr**(fr은 랜딩 보유)
- KO ⑫ 「13스팟」 하드코딩 — **⑭를 만들 때 함께 열어라**(지금 값이 맞고 고치면 8곳이 움직인다)
- ja 판단 ① `ポーカー gtoとは`(170) — 뱅크는 `ja/holdem-strategy`에 양보시켰는데 그 글 H2 12개 전부 GTO 0회(**양보가 명목뿐**)
- ja 판단 ② 사이트맵 solver 3종 hreflang 부재 — 컨벤션 분열(tournaments `ko|en|ja` vs solver `ko-KR|…`) · 넣으려면 표기 통일이 먼저
- ja 판단 ③ **저자 소개 컴포넌트가 레포에 없다** — §13은 「WSOP·12년 경력」 전제인데 `components/author*` 0개
- `desc` 🟠 꼬리 정보 10편(KO 6 · es 3 · de 1) — 글 열 때 함께 · ja `desc` 5슬러그(M-016 §4)

---

## 🗺 창 구성 · 레인 운영

| 창 | 폴더 | 무엇 | 소유 |
|---|---|---|---|
| 본체 main | `Holdem_Project` | 발행·수정·**머지·빌드·배포** | 본체 |
| 🇨🇳 | `Holdem-zh` | zh 경화 | 본체 |
| 🇹🇼 | `Holdem-zh-hant` | zh-hant 경화 | 본체 |
| 🇯🇵 | `Holdem-ja` | ja 경화(`harden-ja`) | 본체 |
| 본부 | `홀덤검수` | 검수 설계·규율·머지 | **검수장** |
| 레인 | `홀덤검수-es`·`-zh`·`-id` | **원장**(판정) | 검수장 |
| 솔버 | `클로드-프로그램만들기` | 앱 | 솔버 |

🔴 **`Holdem-*` = 경화(글 고침) · `홀덤검수-*` = 원장(판정).** 이름이 비슷하니 헷갈리지 마라.
🔴 **경화 레인은 `git push` 금지 · 배포 금지.** 머지·배포는 본체 main이 한다(= 승인).

**레인 상태**: zh **42/42 완주** · zh-hant **42/42 완주**(회차 7 소급까지) · ja 회차 1~8 머지 · **회차 9 A 구간 브리프만 커밋됨**(재저작 없음 · 진행 여부는 사장님 판단).
회차 표(두 레인 공통) = 1 규칙 6 → 2 족보 6 → 3 확률 7 → 4 전략 8 → 5 토너먼트 9 → 6 용어 6 = **42편**. 대상 밖 = GTO 13 · wsop · taiwan-clubs.
🔴 **진행 상태의 정본은 각 진행 파일이다 — 여기 복사하지 않는다.**

**헤드가 매 회차 하는 것**(프로토콜 §6): `git merge harden-<loc>` → 빌드 → push → 라이브 `page.content()` → 진행 파일 «헤드 요청» 처리 → WORKLOG·검수장 통보(해시) → 마지막에 **`npm run lane:sync -- --apply`**.
🔴 **레인이 회차 중이라 못 민다는 전제는 틀렸다** — 겹치는 파일이 없으면 더러운 워크트리에도 들어간다. 2층 = `pre-commit` 훅(`npm run hooks:install` 1회 · 탈출구 `HARDEN_SKIP_SYNC=1`).
🔴 **레인 첫 마디**: 「`HARDEN.md` 읽고 회차 시작해」. 레인이 `git merge main`을 먼저 해야 정본·게이트가 들어간다.
🔴 **머지 대기 확인**: `for l in zh zh-hant ja; do git log --oneline main..harden-$l | wc -l; done`
🔴 **모델 전환은 사장님 손** — 레인은 구간 경계(A→B→C)에서 멈추고 `/model` 전환을 요청한다.
🪶 **레인 창 띄우기**: `wt.exe -w new new-tab --suppressApplicationTitle --title "🇯🇵 harden-ja (일본어 경화)" -d "C:\Users\하봄\Downloads\Holdem-ja" claude`

### 헤드 미결
ⓐ `blind-meaning` 직답≈tldr 중복(전 로케일 구조 판정) · ⓑ FAQ 103조 정의 요소 둘(EN·7로케일 EN-먼저) ·
ⓓ 사장님 문의 「경화 폴더 하나 더?」 → **ja 레인 권고**(결재 대기) · ⓓ′ `\$` 이스케이프 잔존(**라이브 재현 0 — 조건 확인 전 손대지 마라**) ·
ⓔ kicker de/ja/zh-hant `masterUpdated` 07-18/19 — EN 08-26 델타가 실제로 빠졌는지 **커밋 diff 실물 대조** ·
ⓕ zh-hant hand-rankings 별칭 열 Straight Flush 「—」(steel wheel=A-5 정보가 zh-hant만 없음) ·
ⓖ TDA 인용에 연도를 붙일지(2024 v1.0 미취득이라 번호 이동 여부 불명)

---

## ▶ 대기 — ja 43편 라쿠 경화 (착수 지시 대기)

> 🆕 **2026-08-26 사장님 판정으로 이 절의 전제가 뒤집혔다.** 축어:
> *「ja는 중요한 언어중하나이고 색인은 구글봇이 순차적으로 하고 있어 그러니까 색인신경쓰지말고 작업해야해」*
> 🔴 **«색인 4/43이라 43편 경화는 틀린 계획»은 폐기됐다. 되살리지 마라.** 대상은 **43편 전체**다.
> 구 트랙 B(색인 확보 작업)도 08-25 판정으로 폐기 — *「포스팅만 잘 작성하면 색인은 알아서 될 거야」*.

- 착수 1순위 = `holdem-hand-rankings`(`ポーカーの役` 90,500 + `ポーカー強い順` 3,600·SD 22) · 매핑표는 `search-volume-history` 일괄 15크레딧
- 계획 원문 = `docs/handoff-archive/2026-08-24-session-handoff.md` 「⏸ 보류」 절(⚠ 그 문서의 트랙 A/B 구분은 낡았다)
- 🔴 경화된 글을 다시 만지면 **2차 교열 패스 필수** + 부족한 조각만(공식 diff = 플레이북 §7-5)
- ⚠ ja는 구조 결손 묶음(A~C)에도 들어 있다 — 이 회차를 열 때 그 커밋 diff를 먼저 봐라

## ▶ 백로그 (착수 지시 없으면 손대지 않는다)

- **P3·P4** — 고아 클러스터 25편 편입 + `check:clusters` 게이트(🔴 `vercel.json` buildCommand에도 — npm 훅은 프로덕션에서 안 돈다) · 상세 = `docs/nav-flow-audit-2026-08-16.md` §4
- **C3 표 ↔ C2 겹침 2편**(`바이인·참가비`·`vs 캐시게임`) — 본문 마크다운이라 코드로 못 고침 · KO 12편 · 전 로케일 67파일
- **구간 B**(디렉티브 8개 본문 편입 · `hr` · 장식 이미지) — 콘텐츠 편집이라 §14 검수가 붙는 다른 트랙
- **제목 세리프(Lora)** — 레이아웃과 같이 바꾸면 LCP 원인을 못 가린다
- **다국어 히어로 이미지 201px 위치** — LCP 요소라 측정 선행
- 🪶 `components/intl-blog-post-client.tsx:245` 한글 깨진 주석(`H1 ?? ?? ? ??? LCP ??`) — §16 사고 흔적이나 원문을 몰라 그대로 둠
