# 세션 인수인계 (Session Handoff)

> **사용법 (재구조화 2026-08-24 · 사장님 지시)**: 이 파일은 **«다음 세션 할 일 + 미결»만** 담는다.
> - **경위·완료분** = `WORKLOG.md`(slug로 grep) · **지난 핸드오프 원문** = `docs/handoff-archive/`(통독 금지)
> - **영구 규율·확정 결정** = 정본 문서로 승격한다 — `docs/settled-decisions.md` ·
>   `docs/solver-landing-playbook.md` · `docs/mailbox-protocol.md` · 시한 = `docs/update-calendar.md`
> - 🔴 **미결 항목은 해결될 때까지 여기 남긴다** — 해결되면 WORKLOG에 적고 지운다.
> - 🔴 **마감 3단**(CLAUDE.md §12): ① 경위는 WORKLOG로 ② 새 규율은 정본 문서로 승격
>   ③ 여기엔 할 일+미결만. **핸드오프는 다른 세션의 판정 근거다 — 미검증 문장을 쓰지 마라.**

---

## ▶▶▶ 지금 할 일 — **지시 대기 (pt 경화 6회차 전부 완결 — 42/42)**

🎉 **pt 경화 트랙 종결** — 회차 1~6 완결: `8ee6b047`(rules) · `a4588d9e`(rankings 6) ·
`dc614d75`(odds 7) · `adcffae4`(strategy 8) · `2a6f49d5`(glossary 6) · **`79341df8`(tournament 9 —
2026-08-26, EN 소급 5편 동반)**. 경위 = WORKLOG 「2026-08-26 (2)~(6)」.
렌즈 분담 정본(렌즈 = Opus · 본체 판정 = Fable)은 회차 4~6 3연속 실증 — 회차 6은 **EN 사실대조
렌즈를 6번째로 신설**해 masterUpdated 허위 동기 2건(ept·wpt)을 잡았다.

✅ **2026-08-26 (9) 랜딩 회차 종결** — M-067 이행(8로케일 + ja 본문) + zh·ja JSX 공백 해소 +
`check:cjk` 게이트 신설. **랜딩은 이 회차로 닫았다 — 아래 금지령이 다시 발효된다.**

**다음 착수 후보 (지시 대기)**:
1. **「홀덤사이트」 클러스터 착수**(판단 대기 #4 — `/ranking` 14.1위 · 노출 28.7%로 **최대 상승폭**.
   착수 전 자동완성 의도 확인 + 홈 카니발 확인)
2. **fr 전략 코퍼스 확장**(랜딩 내부링크 보강 겸 — `docs/local-voice/fr-fr.md`·fr 뱅크 준비됨)
3. **회차 6 EN 수정의 잔여 로케일 소급 묶음**(아래 미결 표 — es·de·ja·zh·zh-hant·id)
4. 판단 대기 표 0~6 · es LATAM 보충 패스(Country=Mexico부터)

> 🪶 솔버 랜딩은 **9개**(앱 9언어와 1:1). `/fr/solver` 신설 완료(2026-08-25) ·
> 뱅크 = `docs/keyword-bank/fr-gto-solver.md` · 절차 정본 = `docs/solver-landing-playbook.md`
> (⚠ 플레이북 머리의 «8언어·zh-hant가 마지막» 서술은 낡았다 — 다음에 열 때 9언어로 갱신).

> 🪶 pt 표기 정본은 이제 **`docs/translation-terms-pt.md` §1이 정본**이다(회차 6에서 bolha·
> risk premium·Modelo Independente de Fichas·o EPT·pay jump·entradas·Taipé·equity de premiação
> 7행 등재). 핸드오프에 목록을 다시 쌓지 않는다. 확정 결정(bolha·cash game 필라 태그 이관 예약)은
> `docs/settled-decisions.md` §1.

🔴 **랜딩(`app/*/solver`)은 다시 잠겼다 — 손대지 마라.** M-067 이행 회차(08-26)로 열었고
그 자리에서 **랜딩이 해야 할 일을 전부 비웠다**(축어 재동기 8+1 · JSX 공백 ja 75/zh 44 ·
게이트 신설). 다음에 여는 조건은 **새 통지가 오는 것**이다 — «겸사겸사»로 열지 마라.
🪶 그때 함께 처리할 것: 플레이북 머리의 «8언어·zh-hant가 마지막» 서술을 9언어로 갱신.
(de «drei der Lernspots» 하드코딩은 이 회차에서 **파생으로 교체 완료** — 렌더 결과 불변.)

---

## 🔴 회신·대기 — 남의 응답을 기다리는 것 (도착하면 처리하고 지운다)

| 무엇 | 상태 |
|---|---|
| **M-070** (본체→검수장 · 08-26) — 요청 3건 | 🔴 회신 대기: ① `landing-monotone-2026-08-26.md` **기준선 뒤집기**(감시형 8 → 정정형 재등재 — 지금 전부 0) ② en «check-raises a lot» 기준선을 **«often» 형으로 재등재**(그것도 0) ③ 원장 «⑤ 권고» 행 등재(문안 = 앱 신형 동조) + 랜딩 본문 해시 변경 반영. **다시 보내지 마라** |
| ~~M-067~~ → **이행 완료(08-26)** · 회신 **M-070** 발신 | ✅ ⑤ 구형 축어 **8로케일 + ja 본문 1곳** 전부 **앱 신형 동조**로 재동기(앱 `190d293` `presets.ts`에서 로케일별 축어 직접 추출 — 검수장 표를 옮겨 적지 않았다). 절 헤더 «앱 축어 N» 계수는 **불변**(축어 지위를 유지했으므로). 덤 2건: en L170 «a lot»→«often»(🪶 권고) · zh-hant L128 «消失 기각» 근거 뒤집힘 반영. 🔴 **주석에 구형 문자열을 인용하지 않았다** — 검수장 회귀 앵커가 그 출현 수를 세고 «0 = 정정 반영»으로 읽기 때문(하마터면 앵커를 무력화할 뻔했다) |
| **솔버 통지 2026-08-24**(`docs/reply-to-solver-2026-08-24.md` — ④·⑦·⑧·⑩) | 회신 대기. **다시 보내지 마라.** 배포 통보 오면 번들 해시 한 줄로만 확인(`docs/mailbox-protocol.md` §4). 🔴 **다음 솔버 왕복 때 한 번에 얹을 것**(검수장 M-056이 일괄 동봉 계획에 동의): ①(RP-20 — **fr 확인으로 9/9 확정** · `docs/solver-app-verbatim-fr-2026-08-24.md`) · ④⑦⑧도 fr 결함형 확인(9/9) · ③ «13개 스팟 중» 하드코딩 권고 — 🆕 **9/9 전 언어 실측**(M-059 ② · 기존 «5~6언어» 집계는 과소였다) · **⑩ 절대형 — 🆕 앱 잔존 5언어(ko·zh·zh-hant·es + pt · M-059 ①로 pt 편입)** · **EN 해설 13편 완결(08-21) 통지 여부 확인**(앱 내 해설 링크 영어 전환용). ⚠ ④의 KO·EN 앱 문구 동일 여부는 미확인. 🪶 검수장이 **솔버 직통 우편함(S-001)·앱 9언어 전수 검수 계획**을 신설했다(08-25 커밋 `5b22ee6`·`a12938d`) — 솔버 왕복 전에 그쪽 계획과 중복 발신이 없는지 확인 |
| **M-022** (K-ETA 4축 정정) | 🟡 재구성(08-24 아카이브 대조) — 회신은 기도착(M-029 §1 지시). **미이행 확인 필요**: «22» 분해형 4로케일(zh 「日本等 22 国」 · en 「and 16 more」 · es 「y 16 más」 · zh-hant 「及另外 16 國」)을 고쳤는지 실물 확인 후 닫아라 |
| **de M-041 원장** | 반영 완료(쫓54+닫14) — M-048 재판정로 미해결 80→14(보류 11+잔여 3 반영 완료). 보류 건은 트리거 대기(APT 인천 종료 / EPT 8/29) |
| 원장 갱신 요청 4건 (#100·#99 종결 · #100 로케일 수 de→6 · pt 새 행 · 총계 22 UNVERIFIABLE) | 검수장 처리 대기 |
| ~~GOP 메인 바이인 `KRW 2,7 Mio.` 귀속(M-068 §3)~~ → **M-069 도착·종결(08-26)** | ✅ **#55 닫힘**(UNVERIFIABLE 유지 · 원장 갱신 완료). 🔴 **de에 정정할 것이 없다 — de 회차에서 이 건을 «정정»하지 마라.** de L207의 «KRW 2,7 Mio.»는 처음부터 **`### APT Jeju 2026` 절**(L203) 안이다(본체 독립 실측 확인 · EN·pt L207과 동형). 원장 #55의 «이 절은 GOP다»는 검수장 08-15 오독이었고 **본체 M-068 §3이 그 오독을 전파**했다 — 양쪽 다 철회. GOP 실측(Labyrinth Trail 10/30–11/8 날짜만·바이인 미공개 / Olympus Return DEC 4–13)은 검수장 독립 재현 전건 일치. 9월 초 스케줄 공개는 `update-calendar.md`가 관리 |

> 🧹 2026-08-24 정리(M-054 §3 권고 이행): M-052(→M-053 회신 도착·처리) · M-047 재판정(→M-048 종결) ·
> M-043 ③(→M-046 이행) · M-020/M-021(→M-029 회신 존재) · M-030(→M-032 — ② 수용·목록 08-23 제작 완료) 행 삭제.
> 🧹 2026-08-25 추가: M-055(→검수장 M-056 회신 — zh-hant 전수 결함 0 «당일 0» 세 번째 · es ⑩ 수용 ·
> (c) 전건 종결 · JSX 공백 소급=본체 몫 확인) 행 삭제 — 본체 회신 = M-057.
> 🧹 2026-08-26 추가: M-065(→M-066 판정 도착 — «L206·L255 소급 안 함» 접수·이행 없음) 행 삭제 —
> 본체 회신 = M-068. M-068 자체의 회신 대기는 GOP 행이 관리한다.

## 🔵 미결 — 해결될 때까지 유지

| 무엇 | 메모 |
|---|---|
| 🆕 **회차 6 EN 수정의 잔여 로케일 소급 묶음** — ① ept Gold Pass 4요소(€1.100·€690): es·de·ja·zh·zh-hant·id 미이식(€690 출현 실측 en4·es4·ja4·zh4·zh-hant3 vs de2·id2) ② wpt 트로피 고유명·NSW 귀속·아젠다 12/36: `Perpetual` 보유 en·de·es·zh / **미보유 id·ja·zh-hant**(pt는 79341df8로 해소) ③ marathon «Oct–Dez» 제목: de·id 잔존 ④ EN 08-26 수정 8건(satellite stall·rebuy 정의·앤티 시점·10bb 포지션·홈칩 FAQ·hit-and-run 하우스룰·EPT 브레이크·apt 시제 2곳)의 타 로케일 거울 ⑤ EPT «진행 중» 배너는 EN·pt만(8/29 전환 때 일괄이 나음) | 각 로케일을 다음에 열 때 소급([[rehardening-stale-link-drift]]). 🔴 **masterUpdated가 «동기화됨»이라고 적혀 있어도 내용은 안 왔을 수 있다** — 회차 6에서 ept(07-25)·wpt(08-16)가 그 상태였다. 열 때 EN 커밋 diff로 실물 대조 |
| 🆕 **회차 5 타 로케일 소급 묶음** — ① EN 5편(glossary·bad-beat·rake·straddle·fish) 08-26 갱신 → es·de·ja·zh·id 등 드리프트 발생 ② glossary 허브 역링크 누락(실측 zh 5/5 ✅·ja 4/5·es 1/5·de 0/5·id 0/5) ③ rake 라이브 캡 $4–$6→$3–$6 통일(EN·pt만 정정) | 각 로케일을 다음에 열 때 소급([[rehardening-stale-link-drift]] 패턴). pt·EN은 2a6f49d5로 완료 |
| 🆕 rake «GGPoker는 일부 프리플롭 팟도 레이크» 주장 — 사업자·시점 종속(EN 상속·다로케일) | 딜러 렌즈 판정 유보 — GG 공식 레이크 표 라이브 재확인 후 유지/중립화. 서두르지 않아도 됨 |
| 🆕 straddle «solvers abrem 15–20% menos no button» — GTO Wizard 귀속이 이 수치엔 안 걸려 있고 상대/절대 감소 중의적(EN 상속·다로케일) | 수학 렌즈 검증 불가 판정. 출처 원문 확인 시 명시·수정 |
| 🆕 🟠 `stripMd`(intl-blog-page.tsx:127)가 홑별표 이탤릭을 못 벗겨 **FAQ JSON-LD에 `*` 누출** — glossary 6편에만 8곳, 사이트 전역 이슈 | 렌더러 수정은 DOM 게이트 동반 별건. `**`·`==`·링크는 벗김 확인됨 |
| 🆕 pt vazamento↔leak 분열 — 정본은 leak인데 회차 5가 glossary 클러스터 3편만 전환, strategy는 **H2 제목·표 헤더까지 vazamento**(20+곳) | 잔여 스윕을 회차 6 뒤 별건으로 열지 판정. strategy H2는 태그·검색어와 얽혀 단순 치환 금지 |
| 🆕 태그 어순 변형쌍 «bad beat vs cooler»(bad-beat)↔«cooler vs bad beat»(cooler) | 태그 아카이브 라우트가 없어 URL 카니발 없음(SEO 렌즈 실측) — 기록만, 조치 불요 후보 |
| 🆕 EN 경쟁 페이지 언급 문구 잔존(rake:48 «no single competitor page» 등 3곳) — pt만 스타일 정리함 | EN도 지울지 판정(2차 교열이 분기 지적). 독자 노출 문구라 지우는 쪽 권장이나 EN 재검수 동반 |
| 🆕 EN↔pt FAQ 개수 드리프트 — bubble EN 9↔pt 7 · short-stack 9↔7 · tournament 9↔8 · icm 8↔7 (수학 렌즈 관찰 · 수치 손실은 없음 — 빠진 43,9%/52,65%는 pt 본문에 실재) | pt를 다음에 열 때 EN FAQ를 이식할지 판정(재저작 원칙상 의도적 차이일 수도 — EN 경화가 나중에 추가한 FAQ들) |
| 🆕 pt `flush-vs-straight`·`split-pot-rules` 2편만 masterUpdated 부재(게이트 🟠 추적불가 2) | rules·rankings 회차(1~2) 산물 — 해당 글을 다음에 열 때 EN 동기 시점 실측 후 등재 |
| 🆕 tvc «Situação/Melhor encaixe» 표가 «Quando sair» H2 아래 있는데 내용은 포맷 적합성(뒤의 «filtro rápido» 표와 행 단위 중복) — EN 동형 | EN에서 먼저 판단 후 전 로케일(교열 렌즈 B-3 — 삭제·흡수 후보) |
| 🆕 PDF 앵커 «9-max e 6-max lado a lado» 거짓 — **잔여 6로케일**(es·de·id·ja·zh·zh-hant) | EN·pt는 adcffae4에서 정정(PDF 실물엔 6-max 한 줄 규칙뿐 + 수치도 12/26/42→13/27/43 재생성). 각 로케일 재저작 문구라 해당 언어 열 때 소급 |
| 🆕 shc «AQo/**AJo** conforme evolui» — EN 07-19가 AJo 삭제, pt 등 6로케일이 낡은 판 | **UTG 13% 구성 논쟁(사장님 판단 대기 #1)과 같은 갈래**라 임의 소급 안 함. #1 판정 시 함께 |
| 🆕 pt «dar raise/deu raise»(cb 16곳) vs «aumentar»(나머지) 동사 혼재 | 네이티브 렌즈는 aumentar 통일 제안, 본체는 둘 다 BR 실사용이라 기각 — 코퍼스 단위 통일 여부는 후속 판정 후보 |
| 🆕 strategy 허브 표의 결정 4·5 목적지가 betting-actions·pot-odds(전용 필라 cb·when-to-fold 아님) | EN 패리티 — **EN에서 먼저** 바꿀지 판정 후 전 로케일 소급(SEO 렌즈 제안) |
| 🆕 pt odds 클러스터 3편(outs·drawing-odds·reading-the-board)이 본문 이미지 `holdem-reading-straight-example.webp`를 공유 — «클러스터 글 본문 이미지 고유화» 규율 저촉 후보 | 18언어 공용 자산이라 교체는 이미지 신설 작업(스트레이트 드로 인포그래픽 1~2장 — HTML+Playwright). board-puzzle ✦마크 건과 함께 이미지 일괄 회차 후보 |
| 🆕 «mesa pareada / mesa assustadora» → «board pareado» 전환 여부 — 네이티브 렌즈가 «마지막 남은 번역 냄새»로 지목 | 회차 1 판정(«카드 나열 앞만 board»)의 범위 밖이라 재론 필요. 바꾸면 태그 «mesa pareada poker»(reading)와의 정합도 함께 판단. 사장님/다음 회차 판정 |
| 🆕 `id/holdem-hand-rankings`에 hero `image`·`imageAlt` 필드 부재 — es·de·ja·zh·pt는 있음(pt는 a4588d9e에서 복원) | imageAlt를 인도네시아어로 새로 써야 해서(판정) pt 회차에서 임의로 안 했다. id를 다음에 열 때 |
| 🆕 🟠 `holdem-hand-rankings-board-puzzle.webp` 우하단 **생성AI ✦ 마크 잔존 + 워터마크(로고+URL) 부재** — 18언어 공용 자산 | 2026-07-26 워터마크 규율 위반 상태. 실사 생성분 일괄 점검·sharp 후합성 소급이 나은 별건(다른 히어로도 같은 상태일 수 있다). alt 오기(K-K-K-A-4→A-2)는 a4588d9e에서 7로케일 수정 완료 |
| 🆕 pt 홀카드 지칭 3종 혼용 — split-pot «cartas fechadas» vs kicker «cartas de mão» vs reading «cartas na mão» | 네이티브 렌즈는 «cartas da mão» 통일 제안했으나 브리프(`translation-terms-pt.md`)에 hole cards 정본 항목이 없어 **판정 필요**(«cartas fechadas»도 BR에서 통용). 정하면 브리프에 등재 후 코퍼스 단위 통일 |
| 🆕 TDA «Rule 19»(쇼다운 시 두 장 공개) 번호 원문 대조 — `reading-the-board`·`showdown-rules` 다로케일 인용 | 내용은 맞고 WSOP Rule 75는 1차 확인분. 레포 TDA 자산([[tda-rules-primary-source-path]])엔 12·16·18·68만 있어 **19라는 번호만 미대조** — TDA PDF 열 일 있을 때 함께 |
| 🟠 규칙 PDF pt판 부재 — `public/downloads/`에 ko·ja·zh·de판만 있고 beginners는 «PDF (em inglês)» 링크 | `poker para iniciantes pdf`(약점 3/1·DA20) 수요 실재. pt판 제작은 사장님 판단(제작 시 beginners 링크 교체) |
| 🆕 ⚠ **`vercel.json` buildCommand에 아직 안 들어간 게이트 2개** — ① `check:intl-links` ② `generate:sitemap` (둘 다 `prebuild`에만 있음 = **프로덕션 미실행**) | 2026-08-26에 `check-hreflang`·`check-meta-lang`은 편입 완료(EXIT=0 실증). 남은 둘은 각자 선행 조건이 있다: ① intl-links는 **`jiti`(2.6.1)가 package.json에 없는 전이 의존성**이라 `devDependencies` 명시가 먼저다 ② sitemap은 레포에 커밋돼 있어서, 프로덕션 재생성하면 커밋본과 갈릴 수 있다(별도 판정). `check:clusters`는 **스크립트 자체가 아직 없다**(백로그 P3·P4). 정본 = `docs/settled-decisions.md` §6 「buildCommand 정본」 |
| 🆕 **fr 랜딩 내부링크 보강** — fr 코퍼스가 규칙 6편뿐이라 표준 링크 세트(chart·pot-odds·equity·3bet·strategy·glossary) 불성립. 프리플랍 안내는 앱 Charts préflop 탭으로 임시 대체 중 | **fr 전략 코퍼스 확장 시 함께**(위 착수 후보 1번). 뱅크 §3·랜딩 헤더에 명기 |
| ⚠ **fr 뱅크는 라쿠 단일 벤더** — DFS 인증 만료(40100)로 교차검증 미실시 | DFS 복구 시 `solver poker`·`gto poker`·`range poker`·`solver poker gratuit` 4종 교차검증 + France SERP 실측(뱅크 §7) |
| ~~zh·ja 랜딩 JSX 개행 공백 소급~~ → ✅ **해소(2026-08-26)** | 랜딩 실측 **ja 75건 · zh 44건**(zh-hant 0 = 대조군)을 전부 잇고, **문구가 하나도 안 바뀌었음을 증명**했다(빌드 산출물 텍스트를 공백 정규화 후 before/after 완전 일치 · ja 75→1 · zh 44→0). 남은 ja 1건은 `毎週日曜 午後7時` — **저자가 한 줄 안에 넣은 의도적 공백**이라 결함이 아니다. **블로그 본문 전수도 닫혔다**: 본문은 백틱 마크다운 문자열이라 이 결함이 **구조적으로 불가능**하고, 그걸 감싸는 공용 TSX까지 전수 0. 🔴 재발 방지는 주석이 아니라 **게이트**로 고정 — `npm run check:cjk`(셀프테스트 12/12 · `prebuild`+`build:vercel` 둘 다 편입) |
| ⚠ ja 뱅크의 「SD 24 = 유일한 低」는 거짓 근거 | 다음 ja 회차에 정정 (SD 엔드포인트 불일치 실증 후 남은 것) |
| **GTO 13편 → 12개 언어 전파** | 블로커 = **M-033 판정 대기**(본문 용어 표기를 여섯 번째 언어별 항목으로 — §4-A-3 수정). 폐기 명제 목록은 확보됨(19행+ · 회귀 77/77). 번역 방식 = «번역 + 5필드»(스펙 §4-A-3) · 조건 넷은 아카이브 「다국어 방식이 바뀐다」 절 |
| KO ⑫ 「13스팟」 하드코딩 | **⑭를 만들 때 함께 열어라** — 지금 값이 맞고 고치면 8곳이 움직인다(검수장 판정) |
| ja 판단 대기 ① `ポーカー gtoとは`(170) | 뱅크는 `ja/holdem-strategy`에 양보시켰는데 그 글 H2 12개 전부 GTO 0회 — 양보가 명목뿐. 그 글 경화 시 GTO 축을 세우든지 랜딩이 가져오든지 판정 필요 |
| ja 판단 대기 ② 사이트맵 solver 3종 hreflang 부재 | HTML에는 있음. 컨벤션 분열(tournaments `ko\|en\|ja` 무지역 vs solver `ko-KR\|…` 지역포함) — **넣으려면 표기 통일이 먼저.** 급하지 않다 |
| ja 판단 대기 ③ 저자 소개 컴포넌트가 레포에 없다 | §13은 「WSOP·12년 경력」 소개를 전제하는데 `components/author*` 0개. ja SERP에서 note.com 개인 글이 이기는 이유가 저자 권위였다 — 다국어 도구 페이지에 필요한 자산일 수 있다 |
| `desc` 🟠 꼬리 정보 10편 (KO 6 · es 3 · de 1 — pt 1은 회차 6 tvc desc 재작성으로 해소) | 글 열 때 함께 |
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
