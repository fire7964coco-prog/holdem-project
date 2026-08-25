# 세션 인수인계 (Session Handoff)

> **사용법 (재구조화 2026-08-24 · 사장님 지시)**: 이 파일은 **«다음 세션 할 일 + 미결»만** 담는다.
> - **경위·완료분** = `WORKLOG.md`(slug로 grep) · **지난 핸드오프 원문** = `docs/handoff-archive/`(통독 금지)
> - **영구 규율·확정 결정** = 정본 문서로 승격한다 — `docs/settled-decisions.md` ·
>   `docs/solver-landing-playbook.md` · `docs/mailbox-protocol.md` · 시한 = `docs/update-calendar.md`
> - 🔴 **미결 항목은 해결될 때까지 여기 남긴다** — 해결되면 WORKLOG에 적고 지운다.
> - 🔴 **마감 3단**(CLAUDE.md §12): ① 경위는 WORKLOG로 ② 새 규율은 정본 문서로 승격
>   ③ 여기엔 할 일+미결만. **핸드오프는 다른 세션의 판정 근거다 — 미검증 문장을 쓰지 마라.**

---

## ▶▶▶ 지금 할 일 — **없음(사장님 지시 대기).** 솔버 랜딩은 **9개**(앱 9언어와 1:1)

**`/fr/solver` 신설 완료(2026-08-25 — 앱 fr 배포 당일 착수).** 경위 = `WORKLOG.md`
「2026-08-25」 · 뱅크 = `docs/keyword-bank/fr-gto-solver.md` · 절차 정본 = `docs/solver-landing-playbook.md`
(⚠ 플레이북 머리의 «8언어·zh-hant가 마지막» 서술은 낡았다 — 다음에 열 때 9언어로 갱신).

**▶ 다음 착수 = 🔴 pt 경화 «회차 2: hand-rankings 클러스터 6편» (회차 1 완료 2026-08-25 · 커밋 8ee6b047)**

**회차 1(rules 6편)은 끝났다** — 경위 = WORKLOG 「2026-08-25 (3)」. 회차 2 진행법:
1. **뱅크 = `docs/keyword-bank/pt-hardening-2026-08.md` §0·§시드 1·2 통독 선행** — §4 전략 방침
   (사장님 축어: 정면 금지 · 롱테일 진입) 필독.
2. 🔴 **선행 실측 2건**(뱅크 §3): ① `sequencia poker` 27,100 SERP 의도(스트레이트 vs 순서 →
   flush-vs-straight·hand-rankings 어느 몫인지) ② `maos do poker` 8,100 vs `maos de poker` 3,600
   SERP 동일성 → 태그·H2 표기 결정(**do 형태 편입이 이 회차 핵심**).
3. 드리프트 잔여: kicker · (glossary는 회차 5) — hand-rankings 6편 중 드리프트는 회차 0 diff 참조.
   재조준 재료 = 시드 1·2 winnable(piores mãos DA5·FS · melhor a pior FS · suited · marginais ·
   tabela/ordem 계열) + `desempate poker` 30→tiebreak.
4. 회차 순서(확정): ①rules ✅ → ②hand-rankings 6 → ③odds 7 → ④strategy 8(range 축 금맥 — 시드 9) →
   ⑤glossary 6(termos 약점층) → ⑥tournament 9(§14 EN verbatim + apt-incheon 자산화 확인 —
   나머지 드리프트 continuation-bet·tournament-vs-cash-game도 해당 회차에서).
5. 절차 = `REVIEW-PROTOCOL.md` 3층 게이트 · posting.mdc 필독 · 4렌즈+브라질 네이티브 QA+2차 교열 ·
   EN 소급분은 발견 즉시 같은 커밋으로. 게이트는 `--locale=pt`(slug 단위 없음 — 코퍼스 전체가 돈다).
6. 🆕 **회차 1이 정한 pt 클러스터 표기**(회차 2~6도 따를 것): 본문 **poker**(pôquer 금지) ·
   **street**(rua 금지) · 카드 나열 앞은 **board**(mesa 금지) · top pair. ⚠ 나머지 pt 37편은 혼재 —
   각 회차에서 그 클러스터만 통일한다.

**그다음 후보(지시 대기)**:
- fr 전략 코퍼스 확장(랜딩 내부링크 보강 겸 — `docs/local-voice/fr-fr.md`·fr 뱅크 준비됨)
- 🟠 비한국어 537페이지 «메타 4종 + 스킵링크» 별건 · zh·ja 랜딩 JSX 공백 소급 별건 · 판단 대기 표 0~6

---

## 🔴 회신·대기 — 남의 응답을 기다리는 것 (도착하면 처리하고 지운다)

| 무엇 | 상태 |
|---|---|
| **M-057** (M-056 수신 + fr 신설 통보 + fr 앱 전수 축어 납품 + 검수 청구 · `docs/reply-to-review-2026-08-25-m057.md` — ⚠ ID 충돌로 M-056→M-057 조정, 규약 2) | 회신 대기 — fr 신설 당일 전수 + 횡단 소급분(언어 열거 6랜딩·hreflang 9세트) |
| **솔버 통지 2026-08-24**(`docs/reply-to-solver-2026-08-24.md` — ④·⑦·⑧·⑩) | 회신 대기. **다시 보내지 마라.** 배포 통보 오면 번들 해시 한 줄로만 확인(`docs/mailbox-protocol.md` §4). 🔴 **다음 솔버 왕복 때 한 번에 얹을 것**(검수장 M-056이 일괄 동봉 계획에 동의): ①(RP-20 — **fr 확인으로 9/9 확정** · `docs/solver-app-verbatim-fr-2026-08-24.md`) · ④⑦⑧도 fr 결함형 확인(9/9) · ③ «13개 스팟 중» 하드코딩 권고(fr 포함) · **es ⑩ 절대형(검수장 M-056 수용 — 앱 잔존 ⑩ = ko·zh·zh-hant·es 4언어 확정)** · **EN 해설 13편 완결(08-21) 통지 여부 확인**(앱 내 해설 링크 영어 전환용). ⚠ ④의 KO·EN 앱 문구 동일 여부는 미확인. 🪶 검수장이 **솔버 직통 우편함(S-001)·앱 9언어 전수 검수 계획**을 신설했다(08-25 커밋 `5b22ee6`·`a12938d`) — 솔버 왕복 전에 그쪽 계획과 중복 발신이 없는지 확인 |
| **M-022** (K-ETA 4축 정정) | 🟡 재구성(08-24 아카이브 대조) — 회신은 기도착(M-029 §1 지시). **미이행 확인 필요**: «22» 분해형 4로케일(zh 「日本等 22 国」 · en 「and 16 more」 · es 「y 16 más」 · zh-hant 「及另外 16 國」)을 고쳤는지 실물 확인 후 닫아라 |
| **de M-041 원장** | 반영 완료(쫓54+닫14) — M-048 재판정로 미해결 80→14(보류 11+잔여 3 반영 완료). 보류 건은 트리거 대기(APT 인천 종료 / EPT 8/29) |
| 원장 갱신 요청 4건 (#100·#99 종결 · #100 로케일 수 de→6 · pt 새 행 · 총계 22 UNVERIFIABLE) | 검수장 처리 대기 |
| **GOP 메인 바이인 `KRW 2,7 Mio.`** — 귀속 정정 + 값 재확정 | 🔴 **본체가 아직 못 보낸 답**이다. godsofpoker.com이 5월 대회만 실어 10/30~11/8 회차 1차가 없다. **GOP 1차를 새로 파면 #55가 한 번에 닫힌다**(events. 서브도메인 등 — [[data-hierarchy-mixing-error]]) |

> 🧹 2026-08-24 정리(M-054 §3 권고 이행): M-052(→M-053 회신 도착·처리) · M-047 재판정(→M-048 종결) ·
> M-043 ③(→M-046 이행) · M-020/M-021(→M-029 회신 존재) · M-030(→M-032 — ② 수용·목록 08-23 제작 완료) 행 삭제.
> 🧹 2026-08-25 추가: M-055(→검수장 M-056 회신 — zh-hant 전수 결함 0 «당일 0» 세 번째 · es ⑩ 수용 ·
> (c) 전건 종결 · JSX 공백 소급=본체 몫 확인) 행 삭제 — 본체 회신 = M-057.

## 🔵 미결 — 해결될 때까지 유지

| 무엇 | 메모 |
|---|---|
| 🔴 **showdown-rules TDA Rule 16 «토너먼트 한정» 누락 — 23로케일 잔존** | pt 회차 1의 딜러 렌즈가 잡은 EN 발원 결함(캐시에선 pagador가 muck 가능한데 전면 규칙처럼 서술 — all-in-rules와 모순). EN·pt는 8ee6b047로 정정(4곳: 본문 불릿·표·FAQ 2). **나머지 23로케일 미러 필요** — 각 로케일을 여는 회차에서, 또는 별건 미러 커밋으로(선례: 97e46572 «25 로케일 × 2자리») |
| 🟠 pt 도구 링크 `/calculator`(KO 도구) 잔존 9곳 — bubble 2·icm 2·short-stack 2·starting-hands-chart의 `/hand-chart` 1 등 5파일 | rules 필라는 8ee6b047에서 `/pt/solver`로 교체 완료. 나머지는 **해당 클러스터 회차**(odds·tournament·strategy)에서 /pt/solver(Equity·Tabelas pré-flop 탭)로 전환 검토 |
| 🟠 규칙 PDF pt판 부재 — `public/downloads/`에 ko·ja·zh·de판만 있고 beginners는 «PDF (em inglês)» 링크 | `poker para iniciantes pdf`(약점 3/1·DA20) 수요 실재. pt판 제작은 사장님 판단(제작 시 beginners 링크 교체) |
| 🟠 **비한국어 537페이지 «메타 4종 + 스킵링크»가 한국어** | `application-name`·`author`·`keywords`·언어 전환 라벨·스킵링크 `본문 바로가기` — 루트 레이아웃 소관. `check:meta-lang`은 이 4종을 못 본다(사각지대). ⚠ **537페이지라 랜딩 회차에 끼우지 마라 — 별건으로 열고 게이트를 그 4종까지 넓혀라.** 우선순위: 스킵링크 → application-name → author → keywords |
| 🆕 **fr 랜딩 내부링크 보강** — fr 코퍼스가 규칙 6편뿐이라 표준 링크 세트(chart·pot-odds·equity·3bet·strategy·glossary) 불성립. 프리플랍 안내는 앱 Charts préflop 탭으로 임시 대체 중 | **fr 전략 코퍼스 확장 시 함께**(위 착수 후보 1번). 뱅크 §3·랜딩 헤더에 명기 |
| ⚠ **fr 뱅크는 라쿠 단일 벤더** — DFS 인증 만료(40100)로 교차검증 미실시 | DFS 복구 시 `solver poker`·`gto poker`·`range poker`·`solver poker gratuit` 4종 교차검증 + France SERP 실측(뱅크 §7) |
| 🆕 **zh·ja 랜딩 JSX 개행 공백 소급** — JSX가 텍스트 런 안의 개행을 공백으로 치환해 중문·일문 문장 한가운데 ASCII 공백이 렌더된다(zh-hant 회차가 빌드 산출물로 실측: zh «不限 次数» 등 3곳+ · ja «を 計算» 1곳+) | zh-hant는 신설 시점에 제거(중문 텍스트 런은 한 줄 규칙 — client 파일 헤더). **zh·ja는 검수된 파일이라 별건으로 열고 수정 후 재검수** — M-055 §4-④로 검수장에 공유됨 |
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
| 2 | 다국어 «판 전체 재동기화» 할지 말지 | 노출 미미(전 언어 클릭 합 2). `blind-meaning` 표 헤더 23로케일 동일 결함 중 6곳 고침(pt는 8ee6b047). 착수 시 `docs/multilang-sync-plan.md` |
| 3 | de 콘텐츠 신설 | 칩 분배 계산기(`verteilung rechner` LDA7) · 세금 FAQ 흡수(승인·미착수) · 툴 브랜드 대응 |
| 4 | 「홀덤사이트」 클러스터 착수 | `/ranking` 14.1위 · 노출 28.7%로 최대 상승폭. 착수 전 자동완성 의도 확인 + 홈 카니발 확인 |
| 5 | EN 제목 보강 3편 | `holdem-3bet`·`holdem-continuation-bet`·`holdem-pot-odds` — 제목에 poker/hold'em 없음. 🔴 GSC 먼저(노출 붙었으면 교체 순간 측정 끊김) |
| 6 | 소품 셋 | PDF 용지 규격(ko·ja·zh도 A4) · es 국기 · `app/home-client.tsx`(죽은 파일) 삭제 |

## ⏸ 보류 — ja 43편 라쿠 경화 (사장님 판정 2026-08-22 · **착수하지 마라**)

> 축어: *「ja업데이트는 13편완성되고 시간나면 그때 다시 논하자」*
> ⚠ 「13편」을 «GTO 시리즈 ja 전파»로 이해했다 — 다르면 이 줄을 고쳐라.
> 🆕 **2026-08-25 사장님 추가 판정**: *「ja 색인 문제는 잊어버려. 포스팅만 잘 작성하면 색인은
> 알아서 될 거야」* → **아래 트랙 B(색인 확보 별도 작업)는 폐기.** ja를 재개하면 «잘 쓰는 것»
> (트랙 A 경화)만 남는다 — 단 재개 자체는 여전히 위 축어의 재론 대기.

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
