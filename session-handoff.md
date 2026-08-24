# 세션 인수인계 (Session Handoff)

> **사용법 (재구조화 2026-08-24 · 사장님 지시)**: 이 파일은 **«다음 세션 할 일 + 미결»만** 담는다.
> - **경위·완료분** = `WORKLOG.md`(slug로 grep) · **지난 핸드오프 원문** = `docs/handoff-archive/`(통독 금지)
> - **영구 규율·확정 결정** = 정본 문서로 승격한다 — `docs/settled-decisions.md` ·
>   `docs/solver-landing-playbook.md` · `docs/mailbox-protocol.md` · 시한 = `docs/update-calendar.md`
> - 🔴 **미결 항목은 해결될 때까지 여기 남긴다** — 해결되면 WORKLOG에 적고 지운다.
> - 🔴 **마감 3단**(CLAUDE.md §12): ① 경위는 WORKLOG로 ② 새 규율은 정본 문서로 승격
>   ③ 여기엔 할 일+미결만. **핸드오프는 다른 세션의 판정 근거다 — 미검증 문장을 쓰지 마라.**

---

## ▶▶▶ 지금 할 일 — **`/zh-hant/solver` 착수** (마지막 솔버 랜딩 — 열면 앱 8언어 = 랜딩 8개 완성)

**절차·공통 규율 = `docs/solver-landing-playbook.md` 통독이 선행이다** (착수 12단계 · 등록 6곳 ·
hreflang 세트 · 5개 언어 확정 규율 전부 그쪽). 아래는 **zh 회차(2026-08-24 · `ead4e548`)가 남긴
zh-hant 전용 인계분**이다:

1. **뱅크 = `docs/keyword-bank/zh-gto-solver.md` §6 끝** — TW·HK 실측 수치·함정 목록이 이미 있다.
   **zh를 다시 만들지 마라.** 경위 = `WORKLOG.md` 「2026-08-24 (3)」.
2. 🔴🔴 **대만 볼륨은 DataForSEO로만**(location 2158 · `language_name: "Chinese (Traditional)"`,
   ⚠ `language_code`는 400 에러) — **라쿠 Taiwan location은 죽은 소스다**(2023-03 이후 월별 0).
   HK는 라쿠 유효.
3. **간체/번체 자형은 볼륨을 안 가른다** — 번체 페이지가 간체 SERP에 그대로 랭크. zh와 zh-hant 랜딩은
   파이를 나눠 갖고 **hreflang으로 지역을 가른다**(`zh-Hant` — zh 랜딩이 `zh-Hans`를 이미 달았다).
4. **오염어**: `GTO` 단독=자동차·『GTO』아니메 · `solver` 단독=수학 솔버 — 번체권도 같은 앵커 규율.
5. 🔴 **TW `勝率計算器` 1,900 조준 금지**(게임 승률 계산기 의도 · 포커 0/10). 포커 의도는
   `德州撲克勝率計算器` 260뿐. TW 주요 수치: `德州撲克 gto` 140 · `gto是什麼` 70 · `德州撲克範圍` 70 ·
   `求解器` 70 · `德州撲克敎學` 480(일반 축 — 카니발 확인 필요) · `piosolver` 110 · `gto poker` 210.
6. **hreflang은 «여덟 파일» 같은 세트**가 된다 — 기존 7개 랜딩 + 신규 1개에 `zh-Hant` 추가.
   등록 6곳도 동일. ⚠ **zh-hant 라우트는 `blog`·`tournaments`뿐** — 도구 링크는 전부 zh-hant 블로그
   글로(43편 보유).
7. **번체 검색 관습**: `docs/zh-hant-search-behavior-report.md`(명사형 H2 지배·질문 FAQ 격리) +
   `docs/translation-terms-zh-hant.md` §7-C(solver=`解算器（solver）` — ⚠ **앱 번체 화면 축어를 먼저
   떠서 대조하라.** 간체 앱은 «求解器»였다. 라벨은 앱 축어가 정본).
8. **13스팟 축어는 이미 있다**(`docs/solver-app-verbatim-5langs-2026-08-24.md` §6) — 다시 뜨지 마라.
   앱 결함 판정도 그대로: ④⑦⑧ + **⑩ 결함형(「整個」)** → 랜딩은 스펙 §4-B 정정본.

---

## 🔴 회신·대기 — 남의 응답을 기다리는 것 (도착하면 처리하고 지운다)

| 무엇 | 상태 |
|---|---|
| **M-052** (de 전수 검수 + 5랜딩 횡단 · 기각 3건 재판정 · 니모닉 소급 여부) | 회신 대기 |
| **M-047 재판정** · **M-043 ③**(pt 전수 검수 착수 순서) | 회신 대기 |
| **솔버 통지 2026-08-24**(`docs/reply-to-solver-2026-08-24.md` — ④ 8/8 전 언어·ko 원본 · ⑦ RP-19 · ⑧ RP-03 · ⑩ RP-17 3언어) | 회신 대기. **다시 보내지 마라.** 배포 통보 오면 번들 해시 한 줄로만 확인(`docs/mailbox-protocol.md` §4). ⚠ ④의 KO·EN 앱 문구 동일 여부는 미확인 |
| **M-020 · M-021** (`docs/reply-to-review-2026-08-18-m019.md`·`-m021.md`) | 검수장 미확인 |
| **M-022** (K-ETA 4축 정정) | 회신 대기 |
| **M-030 ①②** — ①Guam 비자표 포함 여부 ②EN 9편 «폐기 명제 grep» 한 겹 | 회신 대기. 🔴 ②가 거절되면 **「EN 9편(①~⑨)은 기계 검사도 안 받았다」를 이 파일에 명기**할 것 |
| **de M-041 원장** | 반영 완료(쫓54+닫14) — 검수장 재판정 중. 보류 12건은 트리거 대기(APT 인천 종료 / EPT 8/29) |
| 원장 갱신 요청 4건 (#100·#99 종결 · #100 로케일 수 de→6 · pt 새 행 · 총계 22 UNVERIFIABLE) | 검수장 처리 대기 |
| **GOP 메인 바이인 `KRW 2,7 Mio.`** — 귀속 정정 + 값 재확정 | 🔴 **본체가 아직 못 보낸 답**이다. godsofpoker.com이 5월 대회만 실어 10/30~11/8 회차 1차가 없다. **GOP 1차를 새로 파면 #55가 한 번에 닫힌다**(events. 서브도메인 등 — [[data-hierarchy-mixing-error]]) |
| **솔버가 기다리는 것** — EN 해설 13편이 나오면 앱 내 해설 링크를 영어 글로 전환 | EN 13/13은 08-21 완결. ⚠ **솔버에 그 완결을 통지했는지 미확인** — 다음 솔버 왕복 때 확인·통지 |

## 🔵 미결 — 해결될 때까지 유지

| 무엇 | 메모 |
|---|---|
| 🟠 **비한국어 537페이지 «메타 4종 + 스킵링크»가 한국어** | `application-name`·`author`·`keywords`·언어 전환 라벨·스킵링크 `본문 바로가기` — 루트 레이아웃 소관. `check:meta-lang`은 이 4종을 못 본다(사각지대). ⚠ **537페이지라 랜딩 회차에 끼우지 마라 — 별건으로 열고 게이트를 그 4종까지 넓혀라.** 우선순위: 스킵링크 → application-name → author → keywords |
| 🪶 de `solver-client.tsx` «drei der Lernspots» 개수 하드코딩(RP-08 계급) | de를 다음에 열 때 함께 (zh는 «专门有一组»로 회피) |
| ⚠ ja 뱅크의 「SD 24 = 유일한 低」는 거짓 근거 | 다음 ja 회차에 정정 (SD 엔드포인트 불일치 실증 후 남은 것) |
| **GTO 13편 → 12개 언어 전파** | 블로커 = **M-033 판정 대기**(본문 용어 표기를 여섯 번째 언어별 항목으로 — §4-A-3 수정). 폐기 명제 목록은 확보됨(19행+ · 회귀 77/77). 번역 방식 = «번역 + 5필드»(스펙 §4-A-3) · 조건 넷은 아카이브 「다국어 방식이 바뀐다」 절 |
| KO ⑫ 「13스팟」 하드코딩 | **⑭를 만들 때 함께 열어라** — 지금 값이 맞고 고치면 8곳이 움직인다(검수장 판정) |
| ja 판단 대기 ① `ポーカー gtoとは`(170) | 뱅크는 `ja/holdem-strategy`에 양보시켰는데 그 글 H2 12개 전부 GTO 0회 — 양보가 명목뿐. 그 글 경화 시 GTO 축을 세우든지 랜딩이 가져오든지 판정 필요 |
| ja 판단 대기 ② 사이트맵 solver 3종 hreflang 부재 | HTML에는 있음. 컨벤션 분열(tournaments `ko\|en\|ja` 무지역 vs solver `ko-KR\|…` 지역포함) — **넣으려면 표기 통일이 먼저.** 급하지 않다 |
| ja 판단 대기 ③ 저자 소개 컴포넌트가 레포에 없다 | §13은 「WSOP·12년 경력」 소개를 전제하는데 `components/author*` 0개. ja SERP에서 note.com 개인 글이 이기는 이유가 저자 권위였다 — 다국어 도구 페이지에 필요한 자산일 수 있다 |
| `desc` 🟠 꼬리 정보 11편 (KO 6 · es 3 · de 1 · pt 1) | 글 열 때 함께 |
| ja `desc` 손대는 회차 | M-016 §4의 5 슬러그를 회신 목록에 포함(`ja/holdem-flush-vs-straight`·`holdem-kicker`·`holdem-limping`·`holdem-straddle`·`holdem-tournament-vs-cash-game`) |
| `holdem-bubble #27` | 검수장이 룰 중립안으로 교체해 뒀다 — 그 글을 다시 열 때 닫아라 |
| KO `apt-incheon` `$3.50` 스텝 위성 실재 여부 | Natural8 페이지가 시즌 종료로 다운 — **판정 불가.** 취소선 과거 기록 행 하나만 남았다. 서둘러 지우지 마라 |
| `GGPoker SuperSatellites` 고유명 | 08-13에 중립화. ggpoker.com 404 — 검수장에 근거 URL 요청 후 승격 판단 |
| JTBC 외국인 쿼터도 추첨제인가 | 공식은 「국내 등록은 추첨제」만 명시 — 외국인 쿼터 적용 여부 불명 |
| `vs-cash-game` 「100-300BB」 ↔ `holdem-tournament` 「초반 100-200BB」 | 모순 아님(시작 스택 vs 초반 깊이). 딥스택 축을 다시 열 때 표기 통일 여부만 판단 |
| **de 적대 QA 잔여 6항목** | `rabattieren` 13곳/4편 · `Side Pot↔Nebenpot` · 드로 라벨 `-Straße` · `Leaks↔Lecks` 8:8 · outs 19,1%↔19,6%(둘 다 맞음) · WSOP Rule 96.a 누락 — 코퍼스 단위·사장님 판단 섞임. 🔴 실측값은 낡았을 수 있다, 손대기 전 재grep. **오탐 2건을 렌즈 «의도적 제외 목록»에**: ① `€10` 선행이 정본 ② equity 하프팟 35%는 의도적 구성 |
| es LATAM 보충 패스 | Spain 베이스 42/42 완결 — 다음 = Country=Mexico부터, 슬랭 우선 |

## 🔴 사장님 판단 대기

| # | 안건 | 메모 |
|---|---|---|
| 0 | 대회 글 3편 검수장 원장 신규 편입 여부 | `wsop-2026-tournament-guide`·`como-entrar-al-wsop`·`korea-poker-marathon-2026` — 편입하면 행 추가가 아니라 신규 1편씩(주장 전수 추출+판정) |
| 1 | `starting-hands-chart #13` — 수치를 고칠지 핸드 목록을 고칠지 | UTG 13% vs 조합수 144콤보=10.86% 충돌. SEO·전략 판단 |
| 2 | 다국어 «판 전체 재동기화» 할지 말지 | 노출 미미(전 언어 클릭 합 2). `blind-meaning` 표 헤더 23로케일 동일 결함 중 5곳만 고침. 착수 시 `docs/multilang-sync-plan.md` |
| 3 | de 콘텐츠 신설 | 칩 분배 계산기(`verteilung rechner` LDA7) · 세금 FAQ 흡수(승인·미착수) · 툴 브랜드 대응 |
| 4 | 「홀덤사이트」 클러스터 착수 | `/ranking` 14.1위 · 노출 28.7%로 최대 상승폭. 착수 전 자동완성 의도 확인 + 홈 카니발 확인 |
| 5 | EN 제목 보강 3편 | `holdem-3bet`·`holdem-continuation-bet`·`holdem-pot-odds` — 제목에 poker/hold'em 없음. 🔴 GSC 먼저(노출 붙었으면 교체 순간 측정 끊김) |
| 6 | 소품 셋 | PDF 용지 규격(ko·ja·zh도 A4) · es 국기 · `app/home-client.tsx`(죽은 파일) 삭제 |

## ⏸ 보류 — ja 43편 라쿠 경화 (사장님 판정 2026-08-22 · **착수하지 마라**)

> 축어: *「ja업데이트는 13편완성되고 시간나면 그때 다시 논하자」*
> ⚠ 「13편」을 «GTO 시리즈 ja 전파»로 이해했다 — 다르면 이 줄을 고쳐라.

- 🔴 **ja는 색인 4/43이다**(2026-08-22 실측 · `docs/gsc-tracking/index-audit-2026-08-22.json`) —
  Discovered 미크롤 28 · unknown 10 · 크롤 후 탈락 1. **«43편 경화»는 틀린 계획이다** — 38편은
  구글이 안 열어봤으니 고쳐도 안 보인다.
- 재개 시 **트랙 A** = 색인된 4편만 라쿠 경화(1순위 `holdem-hand-rankings` — `ポーカーの役` 90,500 +
  `ポーカー強い順` 3,600·SD 22) · **트랙 B** = 나머지 38편 색인(크롤 예산·내부링크·사이트맵 —
  「URL is unknown」 10편부터) · 매핑표는 `search-volume-history` 일괄 15크레딧.
- 상세 계획·색인 표 원문 = `docs/handoff-archive/2026-08-24-session-handoff.md` 「⏸ 보류」 절.
- 🔴 경화된 글을 다시 만지면 **2차 교열 패스 필수** + 부족한 조각만(공식 diff = 플레이북 §7-5).

## ▶ 백로그 (두 트랙 밖 · 착수 지시 없으면 손대지 않는다)

- **P3·P4** — 고아 클러스터 25편 편입 + `check:clusters` 게이트(🔴 `vercel.json` buildCommand에도 —
  npm 훅은 프로덕션에서 안 돈다). 상세 = `docs/nav-flow-audit-2026-08-16.md` §4 ·
  `intl-footer` 링크 2개 → `hubPagesFor`
- **C3 표 ↔ C2 겹침 2편**(`바이인·참가비`·`vs 캐시게임`) — 본문 마크다운이라 코드로 못 고침. KO 12편 ·
  전 로케일 67파일 편집
- **구간 B**(디렉티브 8개 본문 편입 · `hr` · 장식 이미지) — 콘텐츠 편집이라 §14 검수가 붙는 다른 트랙
- **제목 세리프(Lora)** — 레이아웃과 같이 바꾸면 LCP 원인을 못 가린다. 별도 회차
- **다국어 히어로 이미지 201px 위치** — LCP 요소라 측정 선행
- 🪶 `components/intl-blog-post-client.tsx:245`에 한글 깨진 주석(`H1 ?? ?? ? ??? LCP ??`) —
  §16 PowerShell 사고 흔적으로 보이나 원문을 몰라 그대로 둠
