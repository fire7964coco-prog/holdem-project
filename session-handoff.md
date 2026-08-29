# 세션 인수인계 (Session Handoff)

> **사용법 (재구조화 2026-08-24 · 사장님 지시)**: 이 파일은 **«다음 세션 할 일 + 미결»만** 담는다.
> - **경위·완료분** = `WORKLOG.md`(slug로 grep) · **지난 핸드오프 원문** = `docs/handoff-archive/`(통독 금지)
> - **영구 규율·확정 결정** = 정본 문서로 승격한다 — `docs/settled-decisions.md` ·
>   `docs/solver-landing-playbook.md` · `docs/mailbox-protocol.md` · 시한 = `docs/update-calendar.md`
> - 🔴 **미결 항목은 해결될 때까지 여기 남긴다** — 해결되면 WORKLOG에 적고 지운다.
> - 🔴 **마감 3단**(CLAUDE.md §12): ① 경위는 WORKLOG로 ② 새 규율은 정본 문서로 승격
>   ③ 여기엔 할 일+미결만. **핸드오프는 다른 세션의 판정 근거다 — 미검증 문장을 쓰지 마라.**

---

## ▶▶▶ 지금 할 일

🎉 **«EN 드리프트 소급 + id 경화» 묶음 완결(2026-08-28 세션 9 `11a69d0f`)** — 트랙 A(5언어)·
트랙 B(id 42/42) 전부 종결. 다음 착수 후보(아래 «그 다음 후보» 절)의 지시 대기.

🆕 **2026-08-29 (1) 「홀덤 spr」 카니발 해소 회차 종결**(`bc910c73` · 배포·라이브 확인 완료).
경위 = WORKLOG 「2026-08-29 (1)」 · 확정 결정 2건은 `docs/settled-decisions.md` **§1**로,
인프라 규율 1건은 **§6**으로 승격했다. 요지 넷:
- 🔴 **`/calculator` 메타에 SPR을 훅으로 되돌리지 마라.** 08-16이 **같은 날** 도구 제목을 SPR로 재조준하면서
  SPR 전용 글을 발행해 서로를 잡아먹었다(쿼리 115노출 ↔ 페이지 합 127 = **12건 동시 노출**·양쪽 클릭 0).
  라이브 SERP 실측 **blog 7위 · calculator top20 밖** → 글이 이긴다. 도구 훅은 **ICM**이 정본.
- 🔴 **`/calculator`에 BB 탭·BB 메타를 만들지 마라.** 이 회차의 최초 설계였는데 실측으로 철회했다 —
  「홀덤 bb 계산」은 `blind-meaning`이 **r3.1·CTR 33.9%**로 이미 이긴다. 도구를 붙이면 SPR과 같은 사고다.
- 🔴 **서버 메타(`page.tsx`)를 고치면 그 페이지의 클라이언트 `<SEO>`도 같이 고쳐라** — `components/seo.tsx`가
  런타임에 덮어쓴다. `/calculator`가 제목 자리에 「SPR」을 달고 있어 **이번 조치를 되돌릴 뻔했다**
  (07-09 삽입 → 08-16에도 방치 → **세 번째 회차에 렌즈가 잡음**). 정본 = settled-decisions §6.
- 🪶 **모델 배치는 작업 성격으로 정한다**(사장님 지시). §5-A는 «42편 재저작 경화»의 규율이고,
  이번처럼 무게중심이 코드이고 **검증을 실행·산출물이 하는** 작업은 Opus 단일 + 교열 1렌즈(Fable)가
  맞았다 — 그 1렌즈가 위 치명적 결함을 잡았다. **렌즈 4종 병렬은 검증 대상이 코드 몇 줄일 땐 낭비다.**

🆕 **2026-08-29 (2) 회차 — 클라이언트 `<SEO>` 전수 점검 + 게이트 신설**(`6792af41` · 배포·라이브 확인 완료).
경위 = WORKLOG 「2026-08-29 (2)」 · 규율은 `docs/settled-decisions.md` **§6**(1회차 서술을 정정해 갱신).
- 🔴 **`npm run check:seo-sync` 신설**(`prebuild`·`build:vercel` 편입 · 셀프테스트 14/14).
  서버 `metadata` ↔ 클라이언트 `<SEO>` 불일치를 잡는다. **기존 검증이 전부 놓치던 자리**다 —
  산출물 `<title>`은 서버 값이라 정상으로 보이고 `check:meta-lang`도 산출물만 보며 `audit:hard`는
  `lib/posts`만 본다. 실증: **`/rules`(950노출) 라이브 제목에 §17 금지어 「총정리」**가 있었다.
- 🔴 **정정 — 1회차의 «세 번째 회차에 처음 잡혔다»는 부정확했다.** 레포는 같은 원인을 **두 번 고쳤다**
  (08-04 `/tournaments` 파생 함수 · `holdem-practice` 상수 공유). **고치고 규율로 승격 안 해서
  나머지 7개에 남았다** — «몰랐다»가 아니라 «전파 안 됨»이라 **처방이 주석이 아니라 게이트**다.
- 🪶 **새 페이지는 «상수 공유»나 «파생 함수»를 써라** — 그러면 이 문제가 애초에 안 생긴다.
- ⚠ 게이트 첫 실행 **11건 중 4건이 오탐**이었다(조건부 렌더·noindex·접미 규칙·파생 사용).
  전건 원문 판정으로 걸러 구조적으로 배제했고, 조건부 3건은 **손 판정 결과를 코드에 박아** 뒀다.
- ✅ **「참가비」 카니발은 «조치 불요»로 판정**(동시 노출 2건뿐 · 승자가 클릭 획득 · 패자도 클릭 냄).
  **카니발이라고 다 고치는 게 아니다** — «양쪽 다 클릭 0»이었을 때가 사고였다(SPR).

**A. EN 드리프트 소급 — 5개 언어** ✅ **트랙 A 완결**(~~es · de~~ 세션 1 · ~~zh · zh-hant~~ 세션 2 ·
~~ja~~ 세션 3 `f8d9b2bd`). id 몫은 트랙 B가 흡수 완료(세션 4~9).
✅ **회차 5 소급 묶음(glossary 클러스터)은 세션 8(`79bc8b55`)로 전 로케일 종결** — 미결 표에서 삭제.
✅ **회차 6 소급 묶음(tournament 클러스터)은 세션 9(`11a69d0f`)로 전 로케일 종결** — 미결 표에서 삭제
(⑤ EPT «진행 중» 배너만 8/29 전환 회차 몫으로 잔존 — `docs/update-calendar.md`가 관리).

**B. id 경화 — 42편** ✅ **트랙 B 완결(세션 4~9 · 42/42)**
`id`는 **2026-07-15 발행**인데 EN 마스터 락이 **07-19**다. 즉 **경화 이전 EN을 번역한 마지막 언어**.
당시 WORKLOG가 남긴 재경화 목록(`es·pt·de·zh·id`)에서 es·zh(07-24)→de(08-11)→pt(08-26)이
빠져나갔고 **id만 남았다.**

> 🔴 **id 편수 실측 = 42편이다.** 2026-08-26에 「id는 6편쯤일 것」이라는 기억과 갈려 실물을 셌다:
> 파일 42개 · 평균 23KB(최소 16KB) · **빌드 산출물에도 42개 전부 발행**. 스텁이 아니다.
> 「6편짜리」는 **그 뒤 17개 언어**다(아래 표). **다시 헷갈리지 마라 — 세어 보고 시작하라.**

| 편수 | 언어 | 성격 |
|---|---|---|
| 60 / 56 | es / en | es는 US 트랙 증분 · en은 42 + GTO 13편 |
| 43 | de · ja · zh · zh-hant | 42 유니버스 + α |
| 42 | **id** · pt | |
| 8 | ar hi ms tr vi | **필라 일부만** — 포스팅 트랙 미착수 |
| 6 | bn fa fil fr he it pl ro ru sw th uk | **필라 일부만** — 포스팅 트랙 미착수 |

**🗂 세션 분할 계획 (2026-08-26 확정 · 컨텍스트 품질 보호 — 1세션 1구획, 순서 고정)**
각 세션은 자기 행 하나만 한다. 끝나면 해당 행에 ✅와 커밋 해시를 적는다.

| 세션 | 트랙 | 대상 | 비고 |
|---|---|---|---|
| 1 | A | ✅ **완료 (2026-08-26 · `bbca2acc`)** — es 15편 + de 16편 · 렌즈 4종(Opus) 33건 판정·반영 · 게이트 🔴 0 · 빌드 ✓ | 경위 = WORKLOG 「2026-08-26 (12)」. PDF 앵커·adcffae4 수치분(A5s 30%·suited 2pt·룰 링크)도 es·de 몫 흡수 완료 |
| 2 | A | ✅ **완료 (2026-08-27 · `8ee372f4`)** — zh 15편 + zh-hant 15편 · 렌즈 4종(Opus) ~25건 판정·반영 · 게이트 🔴 0 · 빌드 ✓ | 경위 = WORKLOG 「2026-08-27 (1)」. ⚠ **wpt·marathon·zh-hant 역링크는 이미 정정본이었다**(af6c77c8 계열 8로케일 전수 정정이 커버 — zh-hant 「Perpetual 미보유」는 «永久獎盃» 의역이라 정상). **ja 세션도 wpt부터 실측하고 시작하라** — 미결 표의 wpt 항목이 ja에는 이미 해소돼 있을 수 있다 |
| 3 | A | ✅ **완료 (2026-08-27 · `f8d9b2bd`)** — ja 15편 · 렌즈 4종(Opus) ~34건 판정·~20건 반영 · 게이트 🔴 0 · 빌드 ✓ | 경위 = WORKLOG 「2026-08-27 (2)」(커밋 diff 경계 명시 완료). wpt·marathon·3bet A5s는 이미 정정본 실측 · apt 「開幕当日」 편차 = locale-intentional-diffs.md 등재 · glossary 역링크 ja 5/5 완성 |
| 4 | B | ✅ **완료 (2026-08-27 · `30ec8632`)** — id rules 6편 · 렌즈 4종(Opus) ~60건 판정·~45건 반영 · 게이트 🔴 0 · 빌드 ✓ | 경위 = WORKLOG 「2026-08-27 (3)」. ⚠ **id masterUpdated는 거짓 신호였다**(07-19·07-25 «동기» 파일에 EN 내용 부재 — 경고 적중). 다음 세션도 **EN 07-15 기준선→HEAD diff 실물**로 대조하라. id 뱅크 부재 → 구글 자동완성(hl=id) 실측 대체(«kartu remi»·«tongkrongan» 발굴). EN-먼저 후보 ⑩~⑬ 등재 |
| 5 | B | ✅ **완료 (2026-08-27 · `6afcdb56`)** — id rankings 6편 · MCP 2종(DFS 교차검증 id 15/15·fr 10/10 일치 + Labs 발굴 + 라쿠 배치 3 44종) · 필라 제목 «Urutan Kartu Poker dari tertinggi sampai terendah» 축 전환(옛 축 «peringkat tangan poker» 실측 **null**) · hero image/imageAlt 복원 + 본문 이미지 2 · FAQ 18문 신설/이식 · 렌즈 4종(Opus) ~50건 판정·~35건 반영 · 게이트 🔴 0 · 빌드 ✓ | 경위 = WORKLOG 「2026-08-27 (6)」. ⚠ flush-vs-flush 구성불가 표(이종 플러시)는 pt 정본(보드 공유형)으로 교정 — **es·ja·zh·zh-hant 잔존**(EN은 캐비어트로 자기정합 — EN-먼저 ⑮ 참조) |
| 6 | B | ✅ **완료 (2026-08-27 · `74f18a17`)** — id odds 7편 · EN 경화 FAQ 24문 이식(7편 전부 EN FAQ 1:1) + 드리프트 소급 · 라쿠 배치 4(40종 — «rumus poker» 390만 생존, 계열 전멸 → 흡수 전략 실측 재확인) · 렌즈 4종(Opus) ~70건 판정·~55건 반영 + **2차 교열이 신결함 5건 검출·정정** · 게이트 🔴 0 · 빌드 ✓ | 경위 = WORKLOG 「2026-08-27 (8)」. ⚠ **국면 라벨 3렌즈 수렴**: outs 표 «Turn saja»→«Flop → turn»(값 ÷47 — EN은 지금도 «Turn only»로 오답, EN-먼저 ⑱). probability 인바운드 앵커 tabel/chart→**bagan** 14곳 통일. 검수자 오판 기각 2건(penurunan=derivation 정확 · equity 70% 문장 EN 동형) |
| 7 | B | ✅ **완료 (2026-08-27 · `971b58c3`)** — id strategy 8편 · EN FAQ 10문 이식 + PDF 앵커·suited 2pt·TT+ 소급 · **#41 8로케일 전수 정정** · 배치 5(56종 — 전략축 전부 ≤50, 재조준 없음 판정) · 렌즈 4종(Opus) ~120건 판정·~85건 반영(수학 102건 재계산 §13 0) + 2차 교열 12건 · **EN 자기모순 6곳 선정정**(2로케일 한정 FAQ — preflop→postflop·헤즈업 예외·aces and ace-king 등) · 게이트 id 42/42·en 56/56 🔴 0 · 빌드 ✓ | 경위 = WORKLOG 「2026-08-27 (9)」. shc AJo는 보류 유지(파일 주석·masterUpdated 08-11 유지). ⚠ DFS MCP는 재시작 후에도 40100 재현 — REST 직접만 유효 |
| 8 | B | ✅ **완료 (2026-08-28 · `79bc8b55`)** — id glossary 6편 · 회차 5 드리프트 id 몫 전량 흡수(역링크 0/5→5/5·rake 캡·EN 08-26 거울) · 배치 6(40종 — istilah/kamus/muck 채택·tilt/rake/straddle artinya 함정 기록) · 렌즈 4종(Opus) ~60건 판정·~45건 반영 + 2차 교열 5건 · **마부치 올인 시점 EN·id 선정정**(PokerNews 축어 — 6로케일 소급 미결) · 게이트 id 42/42·en 56/56 🔴 0 · 빌드 ✓ | 경위 = WORKLOG 「2026-08-28 (1)」. ⚠ EN-먼저 ㉛~㉞ 신규 등재(rake NL50 자기모순·인포그래픽 alt 3건) |
| 9 | B | ✅ **완료 (2026-08-28 · `11a69d0f`)** — id tournament 9편 · 회차 6 드리프트 id 몫 전량 흡수(EN 08-26 8건 거울 + ept €1.100/€690 6곳 + wpt 정정 잔존 3곳 — **af6c77c8이 놓친 트로피 오귀속 표 행 포함**) · 배치 7(54종 — **«wsop» 590 무주공산 편입**·개념축 전멸=흡수 확정) · EN FAQ 9문+id 고유 2문 이식 · **라이브 전수 실측**(JTBC 9/4 «8 days left» 축어·AJPC 4–13 Des 확정·APT Jeju/EPT/WPT 공식 전건 일치) · marathon desc↔표 자기모순 해소+Chuncheon 축 2026 상태 장치 · **EN·id 선정정 2건**(icm 버튼 로테이션 반전·wpt NSW «Sep 2026» 파편) · 렌즈 4종(Opus) ~40건 판정·~35건 반영 + 2차 교열 · 게이트 id 42/42·en 56/56 🔴 0 · 빌드 ✓ | 경위 = WORKLOG 「2026-08-28 (2)」. 신규 미결 = 소급 4건(AJPC 7로케일·icm 5+es·NSW de·ja·marathon 상태장치 EN+6) + EN-먼저 ㊱~㊷ |

**착수 전 필독**: `REVIEW-PROTOCOL.md` · `.cursor/rules/posting.mdc` · 모델 분담은
`docs/settled-decisions.md` **§5-A**(본체=Fable · 렌즈=Opus — **방향 뒤집지 마라**).
🔴 **`masterUpdated`가 «동기화됨»이어도 내용은 안 왔을 수 있다** — 회차 6에서 ept·wpt가 그랬다.
**EN 커밋 diff로 실물 대조**하라.

🆕 **2026-08-28 (4) 애널리틱스 회차 — 판단 대기 #4가 «절반 종결»됐다.** 경위 = WORKLOG 「2026-08-28 (4)」 ·
회차 보고서 = `docs/seo-report-2026-08-28.md`. 요지 셋만:
- 🔴 **참여율 «하락»은 오진이었다** — 59.4%(화면) → **65.8%**(미처리일 + `(not set)` 랜딩 보정). 보정 3종은
  **`npm run analytics`에 코드로 박았다**. 누적 = `docs/analytics-log.md` · **기준선 행 = 2026-08-26**.
  🔴 **GA4 참여율을 화면에서 읽어 보고하지 마라 — 이 스크립트로만 읽어라.**
- 🔴 **번역본 통계의 46%가 싱가포르 봇**이었다. 걷어내면 번역본 PV당 체류 **1:03 > ko 0:58**이다.
  **vi·fil·ms·hi는 실독자 0** — 이 로케일 지표로 판단 금지. 🟠 de만 진짜 약함(독일 본토 0:14).
  봇 **차단 금지**(AI 답변엔진일 수 있음 · 순위 영향 0).
- 🔴 **「온라인 홀덤사이트」(6,654노출)는 목표에서 제외 확정** — SERP 1~10위가 전부 «접속할 게임»이라
  정보 콘텐츠로는 구조적으로 못 이긴다. **「홀덤사이트」(2,970)만 살린다.**

🆕 **▶ 상시 트랙 신설 — 「나라별 홀덤대회」** (2026-08-28 사장님 지시 · 솔버 트랙과 같은 성격)
> *「본체에서 작업하다가도 시간이 나거나 토큰을 활용할 때처럼 따로 집중 관리하고 싶다」*
**정본 = `docs/country-tournament-playbook.md`.** 전략·실측·규율·자산지도·착수순서가 전부 그 파일에 있다.
핸드오프에 내용을 다시 쌓지 않는다 — **열 때 그 파일부터 통독하라.**
- 🔴 **데이터 공급(1차 출처 URL + 갱신 주기)이 확정 안 됐으면 착수 금지.** 낡은 일정은 자산이 아니라 부채다.
- 우선순위는 볼륨이 아니라 **«이미 가진 데이터» 순**: ①한국 심화 ②대만(zh-hant) ③일본·필리핀·마카오
  ④호주(신규 조달 필요) ⑤NZ 파일럿 · **미국·캐나다 비추천**(베뉴 밀도가 높아 원격 집계 불가)
- 🔴 **EN 어휘 재베이스는 실측으로 기각됐다**(핵심 주제 겹침률 88~92% 동일) — 되살리지 마라.

**그 다음 후보 (이 묶음 끝난 뒤)**:
1. ~~「홀덤사이트」 클러스터 착수~~ → 🟢 **08-28 회차에서 착수·1차 조치 완료**(판단 대기 #4 종결).
   홈 `page:ranking` 카드 신설(링크 0→4·「홀덤사이트」 0→4회) + 허브 3곳 앵커 교체.
   **남은 것은 «관측»이다** — 앵커 효과는 재크롤 후에 나오므로 `npm run analytics`를 주 1회 돌려
   `docs/analytics-log.md`에서 **홈 CTR 0.4% ↔ /ranking 1.5% 분배가 바뀌는지** 본다.
   🔴 그 전에 새 글을 쓰지 마라 — 이건 콘텐츠 부족이 아니라 **페이지 선택** 문제다.
2. **ja 2차 경화**(아래 ⏸ 절 — 🆕 **색인 논리 폐기됨**, 사장님 판정)
3. **fr 전략 코퍼스 확장** · es LATAM 보충 패스(Country=Mexico부터) · 판단 대기 표 0~6
4. 🆕 **«도구 ↔ 글» 카니발 전수 점검** — 08-29에 SPR 한 자리를 팠는데 **같은 사고가 더 있을 수 있다.**
   방법은 확립됐다: ⓐ `node scripts/gsc-page.mjs <page> --days 28`로 두 페이지의 쿼리를 뽑고
   ⓑ **쿼리 단위 노출 ↔ 페이지 단위 합**을 대조해 동시 노출 건수를 산술로 잡고
   ⓒ **라이브 SERP로 승자를 가른 뒤 진 쪽이 양보**한다([[seo-tool-vs-blog-cannibalization]]).
   후보 = `/calculator` ↔ `/blog/holdem-odds-calculator`(미결 표) · `/hand-chart` ↔ 스타팅핸드 필라 ·
   `/ranking` ↔ 홈(08-28 조치분은 관측 중).
   🔴 **도구 페이지에 «해설»을 더 쓰는 방향으로 풀지 마라** — 그게 카니발을 키운 원인이다.

✅ **2026-08-26 (9) 랜딩 회차 종결** — M-067 이행(8로케일 + ja 본문) + zh·ja JSX 공백 해소 +
`check:cjk` 게이트 신설. **랜딩은 이 회차로 닫았다 — 아래 금지령이 다시 발효된다.**

🎉 **pt 경화 트랙 종결** — 회차 1~6: `8ee6b047`(rules) · `a4588d9e`(rankings 6) · `dc614d75`(odds 7) ·
`adcffae4`(strategy 8) · `2a6f49d5`(glossary 6) · **`79341df8`(tournament 9)**. 경위 = WORKLOG
「2026-08-26 (2)~(6)」. → **검수장 원장 편입 첫 후보**(§5-B · pt 원장 0편).

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
| ~~M-070~~ → **회신 도착·종결(08-27 · M-072 ①)** | ✅ 요청 3건 전부 이행 확인(`0bd14cc` — 기준선 뒤집기·en «often» 재등재·원장 ⑤ 행 8편 등재 + landing 게이트 126주장 무효 0·기존 주장 전건 생존) |
| ~~M-067~~ → **이행 완료(08-26)** · 회신 **M-070** 발신 | ✅ ⑤ 구형 축어 **8로케일 + ja 본문 1곳** 전부 **앱 신형 동조**로 재동기(앱 `190d293` `presets.ts`에서 로케일별 축어 직접 추출 — 검수장 표를 옮겨 적지 않았다). 절 헤더 «앱 축어 N» 계수는 **불변**(축어 지위를 유지했으므로). 덤 2건: en L170 «a lot»→«often»(🪶 권고) · zh-hant L128 «消失 기각» 근거 뒤집힘 반영. 🔴 **주석에 구형 문자열을 인용하지 않았다** — 검수장 회귀 앵커가 그 출현 수를 세고 «0 = 정정 반영»으로 읽기 때문(하마터면 앵커를 무력화할 뻔했다) |
| **솔버 통지 2026-08-24**(`docs/reply-to-solver-2026-08-24.md` — ④·⑦·⑧·⑩) | 회신 대기. **다시 보내지 마라.** 배포 통보 오면 번들 해시 한 줄로만 확인(`docs/mailbox-protocol.md` §4). 🔴 **다음 솔버 왕복 때 한 번에 얹을 것**(검수장 M-056이 일괄 동봉 계획에 동의): ①(RP-20 — **fr 확인으로 9/9 확정** · `docs/solver-app-verbatim-fr-2026-08-24.md`) · ④⑦⑧도 fr 결함형 확인(9/9) · ③ «13개 스팟 중» 하드코딩 권고 — 🆕 **9/9 전 언어 실측**(M-059 ② · 기존 «5~6언어» 집계는 과소였다) · **⑩ 절대형 — 🆕 앱 잔존 5언어(ko·zh·zh-hant·es + pt · M-059 ①로 pt 편입)** · **EN 해설 13편 완결(08-21) 통지 여부 확인**(앱 내 해설 링크 영어 전환용). ⚠ ④의 KO·EN 앱 문구 동일 여부는 미확인. 🪶 검수장이 **솔버 직통 우편함(S-001)·앱 9언어 전수 검수 계획**을 신설했다(08-25 커밋 `5b22ee6`·`a12938d`) — 솔버 왕복 전에 그쪽 계획과 중복 발신이 없는지 확인 |
| **M-022** (K-ETA 4축 정정) | 🟡 재구성(08-24 아카이브 대조) — 회신은 기도착(M-029 §1 지시). **미이행 확인 필요**: «22» 분해형 4로케일(zh 「日本等 22 国」 · en 「and 16 more」 · es 「y 16 más」 · zh-hant 「及另外 16 國」)을 고쳤는지 실물 확인 후 닫아라 |
| **de M-041 원장** | 반영 완료(쫓54+닫14) — M-048 재판정로 미해결 80→14(보류 11+잔여 3 반영 완료). 보류 건은 트리거 대기(APT 인천 종료 / EPT 8/29) |
| 원장 갱신 요청 4건 (#100·#99 종결 · #100 로케일 수 de→6 · pt 새 행 · 총계 22 UNVERIFIABLE) | 검수장 처리 대기 |
| ~~M-071~~ → **회신 도착·종결(08-27 · M-072 ②)** | ✅ 전건 동의 — fact-judge 대행 사용 개시(타입 미로드라 general-purpose+opus+지침 직접 읽기 · 모델 변수 보존) · HANDOFF 3줄 유지 · pt 편입 착수(계획 8세션) |
| 🆕 **M-073(pt 세션 0~6 정정 지시 선발신) → 이행 완료(08-28 `0ba0687c`) · M-074 회신 발신** | ✅ WRONG 4클러스터(셔틀 8로케일·8/7=첫날·WPT 3건·AJPC 7로케일) + pt RISKY 16 + 권고 ② 전량 반영 — 감시 앵커 34행 🔴 점등이 반영 신호. **검수장의 기준선 뒤집기 회신 대기.** ⚠ 회신에 역방향 통지 2건 동봉: ① de·id «2A»=오기 확정(공식 4A) + 공식 페이지 숨은 팝업에 구정보 자기모순 잔존 ② 세션 9 «버튼 로테이션 반전» 판정 반증(§4). 회신 정본 = `docs/reply-to-review-2026-08-28.md` |
| 🆕 **wpt 비자·NSW 재실사(M-073 권고 ①)** | 미착수 — immi 수수료표·여권목록은 JS 컴포넌트라 본문 미노출(검수장 원장 동일 확인). NSW 현금한도 $1.000/2027-08의 법령 1차(§73A) 표기 층 확인 포함. 별도 리서치 회차 후보 |
| **검수장 pt 원장 편입 — 진행 중(세션 0~4 완주 · 2026-08-27)** | 🟢 파일럿+rules 5+rankings 6+odds 7+strategy 8 = **27/42편 · 1,691주장 판정**(OK 1,570 · RISKY ~36 · WRONG 3 — 전부 자기모순형 · UNV ~82). 잔여 = glossary 6 · tournament 9(8/29 EPT 전환 이후 배치). 🔴 WRONG 3건 전부 본체가 08-27 전수 선정정 완료 — reading #38·tiebreak #44(회차 7) + **when-to-fold #41(세션 7 `971b58c3` — 8로케일 «폴드 과다→블러프에 팟 내줌»으로, pt 회귀 앵커 점등 = 설계 의도)**. **RISKY 모음은 검수장이 «세션 7 일괄 발신» 예정** — 도착 시 다로케일 소급 판정(split-pot #11 «보드플레이=최다» 한정어 등 id·EN 거울 다수). 진행표 = `홀덤검수/reports/계획-pt-42편-원장편입-2026-08-26.md`. 정본 = settled-decisions §5-B |
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
| ~~세션 9 발원 소급 묶음 4건~~ → ✅ **①③④ 종결 · ② 재정의 후 일부 잔여**(2026-08-28 M-073 회차 `0ba0687c`): ① AJPC 7로케일 완료 ③ NSW 파편 5로케일 삭제(de·ja + **es·zh·zh-hant 추가 실측** — 0건≠없음 · pt는 축제 한정 서술이라 자기정합 유지) ④ Chuncheon 상태 장치 EN+6로케일 이식 완료. 🔴 **② icm 버튼 로테이션 — 세션 9 판정(«BTN→SB→BB 반전»)은 08-28 검산으로 반증됐다**: 버튼 다음 핸드는 **CO**(BTN→CO→…→BB→SB)이고 «블라인드를 가장 늦게 낸다»는 **참이었다.** EN·id 대체 문구도 참이라 본문 무해 · pt는 EN 08-28 문구 거울로 완료(`0ba0687c`). **잔여 = de·ja·zh·zh-hant 4로케일 — «반전 정정»이 아니라 «EN 08-28 icm L175 문구 거울»로만 이식하라**(원래 문장을 «거짓»이라 적지 말 것) | 각 로케일 다음 열 때 거울. WORKLOG 08-28 (3)이 검산 상세 보유 |
| 🆕 🔴 **마부치 2008 핸드 «올인→리버» 순서 역전 — 잔여 6로케일 소급**(es·de·ja·zh·zh-hant·pt) — 올인은 리버 A♦ **이후**(체크→벳→올인→즉시 콜 · PokerNews 축어 확보, WORKLOG 08-28). EN·id는 `79bc8b55`로 정정 + «엄밀히는 suckout 없음» 캐비어트 + EN «7=무조건 트립스 승» ace 예외 — 이 세 가지가 한 묶음 | 각 로케일 다음 열 때 EN 08-28 diff 거울. EN updated=08-28이라 게이트 드리프트 🔴가 정상 신호다 |
| 🆕 🟢 **관측 대기 — 「홀덤 spr」 카니발 조치**(2026-08-29 `bc910c73`) · 효과는 **재크롤 후**에 나온다 | 기준선(측정창 07-29~08-26): 「홀덤 spr」 **115노출 클릭 0** · SPR 클러스터 196노출 클릭 3 · `/calculator` 406노출 5클릭 · `/blog/holdem-spr` 140노출 3클릭. 측정 = `node scripts/gsc-page.mjs calculator --days 28` · 같은 명령 `blog/holdem-spr`. **볼 것 = ① 동시 노출 12건이 줄었나 ② blog CTR이 0%를 벗어났나.** 🔴 그 전에 이 두 페이지 메타를 또 만지지 마라 — 만지면 효과를 영영 못 잰다(08-16 (3) 교훈) |
| 🆕 🟠 **`/calculator` 확률·승률 계열이 전부 2페이지**(「홀덤 확률 계산기」 r15.4 · 「홀덤 승률 계산기」 r19.9 · 「포커 확률 계산기」 r21.8 · 「홀덤계산기」 r18.3 — 합 ~200노출 클릭 1) | 이번 회차는 **훅 근거가 없다는 판정만** 했고 원인은 안 팠다. 형제 `/blog/holdem-odds-calculator`와의 카니발 이력(08-16 기록: 16.8위 ↔ 28.6위)이 여기에도 걸려 있는지 **SPR과 같은 방법으로**(쿼리 단위 ↔ 페이지 단위 합 대조 + 라이브 SERP) 가릴 후보. 🔴 단, 위 관측이 끝나기 전엔 열지 마라 |
| 🆕 🔴 **GA4 `page_view` 유실 121세션**(오가닉 5.5% · 직전 55→137로 2.5배 증가 중) — `session_start` 121 · `user_engagement` **113** · scroll 8 · click 7인데 **`page_view` 0건**. 10초+ 읽고 클릭한 «사람»이 참여 0으로 집계된다. google 55·**네이버 47**·bing 11 / 한국 99 | 원인 미확정(프리렌더·인앱 브라우저 후보) — **추정을 사실로 적지 마라.** 별도 회차. 그때까지 참여율은 `npm run analytics`가 자동 보정한다. 정본 = 메모리 `ga4-pageview-loss-not-set-landing` |
| 🆕 **en `holdem-game-order`가 「who bets first」 계열 51노출을 못 받는다** — 답은 그 글에 있는데 28일 구글 노출 **0건**이고, `/en/blog` 목록이 r83~92로 대신 받는 중 | title·seoTitle 어디에도 **who bets/goes/acts first가 없다**(태그엔 있음). 처방 = **목록이 아니라 game-order H2·FAQ에 질문형 그대로 심기**(§17). ⚠ 「목록 페이지 카니발」 진단은 **철회됐다** — 개별 글 노출이 0이라 경쟁 자체가 없다. 목록을 죽여도 안 올라간다 |
| 🆕 🟠 **GA4 속성 시간대 확인 필요** — 오가닉 피크가 0~9시, 저점이 12~16시로 뒤집혀 있다 | 미 태평양시 가정 시 한국시간 오후 4시~새벽 1시로 자연스러워진다. **확인 전까지 시간대별 리포트를 판단 근거로 쓰지 마라.** GA 관리자 화면에서 확인 |
| 🆕 rake «GGPoker는 일부 프리플롭 팟도 레이크» 주장 — 사업자·시점 종속(EN 상속·다로케일) | 딜러 렌즈 판정 유보 — GG 공식 레이크 표 라이브 재확인 후 유지/중립화. 서두르지 않아도 됨 |
| 🆕 straddle «solvers abrem 15–20% menos no button» — GTO Wizard 귀속이 이 수치엔 안 걸려 있고 상대/절대 감소 중의적(EN 상속·다로케일) | 수학 렌즈 검증 불가 판정. 출처 원문 확인 시 명시·수정 |
| 🆕 🟠 `stripMd`(intl-blog-page.tsx:127)가 홑별표 이탤릭을 못 벗겨 **FAQ JSON-LD에 `*` 누출** — glossary 6편에만 8곳, 사이트 전역 이슈 | 렌더러 수정은 DOM 게이트 동반 별건. `**`·`==`·링크는 벗김 확인됨 |
| 🆕 pt vazamento↔leak 분열 — 정본은 leak인데 회차 5가 glossary 클러스터 3편만 전환, strategy는 **H2 제목·표 헤더까지 vazamento**(20+곳) | 잔여 스윕을 회차 6 뒤 별건으로 열지 판정. strategy H2는 태그·검색어와 얽혀 단순 치환 금지 |
| 🆕 태그 어순 변형쌍 «bad beat vs cooler»(bad-beat)↔«cooler vs bad beat»(cooler) | 태그 아카이브 라우트가 없어 URL 카니발 없음(SEO 렌즈 실측) — 기록만, 조치 불요 후보 |
| 🆕 EN 경쟁 페이지 언급 문구 잔존(rake:48 «no single competitor page» 등 3곳) — pt만 스타일 정리함 | EN도 지울지 판정(2차 교열이 분기 지적). 독자 노출 문구라 지우는 쪽 권장이나 EN 재검수 동반 |
| 🆕 EN↔pt FAQ 개수 드리프트 — bubble EN 9↔pt 7 · short-stack 9↔7 · tournament 9↔8 · icm 8↔7 (수학 렌즈 관찰 · 수치 손실은 없음 — 빠진 43,9%/52,65%는 pt 본문에 실재) | pt를 다음에 열 때 EN FAQ를 이식할지 판정(재저작 원칙상 의도적 차이일 수도 — EN 경화가 나중에 추가한 FAQ들) |
| 🆕 pt `flush-vs-straight`·`split-pot-rules` 2편만 masterUpdated 부재(게이트 🟠 추적불가 2) | rules·rankings 회차(1~2) 산물 — 해당 글을 다음에 열 때 EN 동기 시점 실측 후 등재 |
| 🆕 tvc «Situação/Melhor encaixe» 표가 «Quando sair» H2 아래 있는데 내용은 포맷 적합성(뒤의 «filtro rápido» 표와 행 단위 중복) — EN 동형 | EN에서 먼저 판단 후 전 로케일(교열 렌즈 B-3 — 삭제·흡수 후보) |
| 🆕 **세션 1 렌즈 발견 — EN-먼저 판정 후보 묶음**(전부 EN 상속·로케일 임의 소급 금지): ① EN wpt NSW 서술의 **11개월 공백**(캡 «through Sep 2026»→«from Aug 2027», 2026-10~2027-07 한도 미정 — 1차 출처 재확인) ② EN apt **«개막 전 마감» 거짓 — 실은 3자리다**(stripe «closed before the festival» + 요약 «before day one» + note «the day before the series opened» — 세션 2 렌즈가 EN 원문 3곳 실측. 8/7 마감 = 개막일. es·de·zh·zh-hant는 «개막일과 함께 종료»로 이미 정정 — EN을 따라 되돌리지 마라) ③ EN bad-beat overpair 행 **«fills on the river»** — 65%는 두 장 기준이라 «turn or river»가 정확(de 표기가 맞음) ④ EN ept 비용표 — Gold Pass에 €690 포함인데 «Food & extra days €400–600» 만액 계상·총액 무상계 ⑤ EN bad-beat 잭팟 분배 **표** 라벨 «Rest of the table»만 구표현(불릿·FAQ는 dealt-in 정정됨 — **세션 3 딜러 렌즈가 ja에서 독립 재발견, 신뢰도 ↑**) ⑧ 🆕 EN bubble 핸드포핸드 스톨 불릿(세션 3 딜러 렌즈) — 정의문이 사실상 권고로 읽히고, **H4H 개시 후에는 스톨의 실익이 0**(핸드당 고정 2분·전 테이블 동수 진행)이라는 한정이 없어 새틀 불릿(«라이브 스톨 가벌»)과 긴장 — ja는 지시형 어감만 정의형으로 완화했고 실익 한정은 EN-먼저 ⑩ 🆕 EN blind-meaning «Two habits fix most of it» 뒤 불릿이 **3개**(SB·BB·late position — 세션 4 교열 렌즈. id는 재저작으로 회피, 타 로케일 미확인) ⑪ 🆕 EN beginners 실수 인트로 «none of them are about strategy»가 실수 3~5(팟오즈·핸드선택·포지션)와 모순(id는 «sebagian besar»로 완화) ⑫ 🆕 EN beginners 2·4법칙에 **«×4는 턴·리버 두 장을 다 본다는 전제» 캐비어트 부재** — D유형(세션 4 딜러 렌즈. 단일 스트리트 팟오즈와 직비교 시 에퀴티 과대평가 유도 · 전 로케일 상속) ⑬ 🆕 EN·pt showdown all-in FAQ에서 «side pot 경합 시 누가 먼저 여는가» 문장이 8ee6b047 정정 때 소실(id는 세션 4가 한 절 복원 — EN·pt 판정 필요) ⑭ 🆕 EN reading-the-board «How common» 표 헤더 — C(7,5)=21 **조합 가짓수를 빈도로 라벨**(«10 of 21 ways»가 발생 확률로 읽힘 — 세션 5 딜러·SEO 렌즈 독립 재발견 · 전 로케일 상속) ⑮ 🆕 EN flush-vs-straight flush vs flush **추상 표(스페이드vs하트)** — EN은 괄호 캐비어트로 자기정합이나 pt·id는 보드 공유형(J♠9♠6♠2♠7♦)이 정본(a4588d9e). es·ja·zh·zh-hant는 캐비어트 유무 실측 후 소급 판정 ⑯ 🆕 EN hand-rankings·tiebreak `:::tiebreak` 첫 행 «Royal Flush\|Always a tie» — 문자 그대로는 거짓(보드 로열일 때만 세리 — 세션 5 SEO 렌즈) ⑰ 🆕 EN kicker two pair FAQ «Q-7-7» 3장 보드로 쇼다운 비교(id는 Q-7-7-4-2로 완결화 — EN 판정) + EN FAQ↔H2 축어중복 9건(tiebreak 4·kicker 2·flush 2·reading 1 — E2 게이트가 로케일 모드에선 안 도는 자리) ⑱ 🆕 **EN outs 변환표 컬럼 «Turn only (1 card)»가 라벨 오류** — 값이 전부 ÷47(플랍→턴: 9→19.1%)인데 라벨은 턴(세션 6 · 3렌즈 독립 수렴 + 기계 검산. id는 «Flop → turn»으로 정정 — EN·타 로케일 소급 필요) ⑲ 🆕 EN card-counting steps «(you're all-in, or the river is free)» — 플랍 ×4 조건이 불완전(턴·리버 둘 다 무료여야 · id 정정) ⑳ 🆕 EN drawing-odds 소품 2: «one in six on a single street»(실제 ~1/5,2~5,9 — «one in five to six»가 정확) · «with suited connectors there are exactly four flops»(중간 커넥터만 4 — A-K 1·3-2 2, 2차 교열이 전수 열거) ㉑ 🆕 EN pot-odds·equity FAQ «35% > 25% → call» 예문에 «두 장 전제» 무언급(같은 글이 ×4 오용을 3번 경고하는 자기긴장 — id는 캐비어트 추가) + EN 예시 핸드(A♥K♥/Q♥7♥2♣)의 오버카드 아웃 무언급(id는 «클린 아웃 아님» 절 추가 — 수학 렌즈: implied-odds 쪽은 오버카드 세면 팟오즈만으로 콜이 돼 교육 전제가 흔들리는 자리) ㉒ 🆕 EN odds 클러스터 구조 판정 묶음(SEO 렌즈 — 전부 EN 상속이라 id 단독 수정 금지): 태그 카니발 7쌍(pot odds·implied odds·set mining·rule 4&2 3중 등) · probability FAQ 5문이 형제 머니쿼리 호스팅(pot-odds와 답 축어 동일 1건 포함) · Rule 4&2 전용 H2가 3글 병존(소유는 outs 판정) · H2 직후 볼드 직답 리드 4편 미준수(probability 0/8 — EN 경화 웨이브 08-09~11이 원인) · H2↔직답 사이 이미지 개입 10곳 · seoTitle «actually/benar-benar» 4편 정형구 ㉓ 🆕 EN 3bet polarized 표 «flat bagian tengah QQ/AQ/TT» + «Pakai saat: Anda di blinds» 조합이 **블라인드에서 QQ 플랫**으로 읽힘(D유형 — 같은 글 «flatting OOP itu lemah»·«SB는 3-bet 또는 fold»와 충돌 · 솔버상 QQ는 블라인드 vs 오픈 거의 100% 3-bet · 세션 7 수학 렌즈) ㉔ 🆕 EN 3bet fold-to-3bet 표 ~35% 행 설명 «3-bet and call them value-heavy» — 35% 폴드 = 방어 65%는 넓고 약한 레인지라 서술 방향 불일치 ㉕ 🆕 EN position-play SB 표 행 «~40% (raise-or-fold) … never flat»이 국면 한정어(오픈 직면 시) 없이 무조건형 — limping의 «SB complete = 가장 방어 가능한 limp»와 정면 충돌(솔버상 limping이 맞음 · 미오픈 SB vs BB는 limp 레인지 실재) ㉖ 🆕 EN limping ==g:== 하이라이트가 경고문(«open-limping … 가장 비싼 습관»)에 초록 — 코퍼스 g=권장/r=경고 관례 위반 ㉗ 🆕 EN shc UTG 13% 구성 3중 충돌 — 본문 «widens to 77–99» vs 표 «MP에서 88·99 추가» vs 폴드 목록 «77·88은 UTG 마지널»(판단 대기 #1과 같은 갈래 — 함께 판정) ㉘ 🆕 EN when-to-fold 「7 Kesalahan」 표 마무리 문단이 `</div>` 안쪽(다른 표 전부 바깥 — id만 세션 7에 정합화, EN+6로케일 잔존) ㉙ 🆕 전략 클러스터 이미지 재사용 3장(button-dealer-board·pub-players-table이 strategy↔limping 공유 + button-dealer alt가 리밍 섹션 맥락 불일치) + limping↔strategy의 position-play readnext 썸네일 상이 — 18언어 공용 자산이라 EN에서 판정 ㉚ 🆕 소품(낮음): EN position-play OOP 60–85% 하한과 «persis sama» 산술 긴장(hedge 있음) · EN positions 6-max 좌석 제거 서술 «one middle seat»↔LJ 서술 · cbet OOP 밴드 40–50 ↔ position-play 30–45 · EN 신규 FAQ 3문 89/77/76단어(40~75 밴드 초과) ㉛ 🆕 **EN rake NL50 «온라인» 예시가 cap $4를 쓰는데 같은 글이 온라인 캡을 $1–$3로 두 번 선언** — 자기모순(세션 8 교열 렌즈 · id 동형 상속. 처방 후보: 예시를 live로 바꾸거나 캡 $2 vs $3로) ㉜ 🆕 EN glossary 카테고리 인포그래픽 alt «…Money, and Situations» — 실물 타일은 **SLANG**(Situations 부재 · 이미지 육안 실증. id는 정정 — EN+잔여 로케일 소급) ㉝ 🆕 EN fish food-chain alt «from weakest to strongest» — 칩 크기는 판돈 순서지 강함 순서가 아니고 본문(whale⊂fish·nit≠fish)과 정면 모순(id 정정) ㉞ 🆕 EN fish weak-ace-trap 캡션 «hands like this»가 이미지의 금색 A♠K♦까지 fish 핸드로 지시(실물 = A♣4♦ 빨강 vs A♠K♦ 금색 비교 — id 정정) ㉟ 🆕 EN bad-beat 잭팟 절이 자기 기준과 긴장(잭팟 자격 핸드 다수는 suckout 없는 cooler — cooler 글은 Boat vs quads를 cooler 목록에 명시. «카지노가 지은 상품명» 캐비어트 후보) + EN cooler의 suckout 정의 «turn or river»가 bad-beat 08-28 «flop, turn or river» 확장과 갈림(id cooler는 정합화 완료 — EN cooler 재경화 때) + ⑤ 잭팟 분배 표 라벨 «Rest of the table»은 세션 8 교열 렌즈가 **3번째 독립 재발견**(신뢰도 ↑ — EN 판정 우선순위 올릴 것) ㊱ 🆕 EN bubble «pay the bubble» FAQ gloss가 헐거움(«everyone else gets paid = paying the bubble»로 읽힘 — 실제 용례는 «버블 피니셔에게 위로 지급»이고 id는 그 용례로 재저작 완료 · 세션 9) ㊲ 🆕 EN bubble H4H Stalling 불릿 «It works precisely because tanking is free» — H4H 하에선 전 테이블 핸드 수 동일이라 «핸드 덜 보기» 목적이 원리상 불성립(딜러 렌즈 · ⚠ 이 문구는 1392148d 검수장 판정 회차 산물이라 재론 절차 필요) + 새틀라이트 절 08-26 정정(«스톨 의존 금지»)과 규범 긴장 ㊳ 🆕 EN tvc big-blinds FAQ 무조건 맥스 바이인 권고 — 같은 글 «짧은 스택이 결정을 단순화» 서술과 긴장(초보 헤지 부재) ㊴ 🆕 EN wpt WC 좌석 — 공식 «nine WPT World Championship tickets» 9장 분포 부재(apt 자매글은 9석 표 보유 — 기준 갈림) + $15.000/«+$10.400» 통화 미표기(WC는 USD 이벤트) ㊵ 🆕 EN bubble 동시 탈락 분기(«같은 테이블=시작 칩 순위/다른 테이블=반분»)의 TDA 귀속 오류 — TDA RP-8-A 축어는 테이블 무관 «share»(분기는 WSOP 계열 · 귀속 분리 필요) ㊶ 🆕 EN apt 소품 묶음: 일정표 시간순(Superstar 14–15가 Zodiac 13–14 위) · 환율 3계열 공존(바이인 1.468/결과 1.400/GTD 1.481~1.500 — 각 블록 내부 정합·기준일 표기 후보) · Country Exclusives «$1.684» 단독 이탈 · $183.570 절사 · 예산표 행합-총계 규격 상이 ㊷ 🆕 EN tournament 소품: 안테 시점(표 Level 3=67BB vs 산문 «중반 30–60BB» 3회) · 홈칩 FAQ «That's why» 인과 · 타임라인 Level 1만 60분 + EN 스톨 페널티 문장 조항 번호 부재(«under WSOP rules» — 인접 문장은 126.a/c 번호 병기) + short-stack↔bubble 팟 분모 관습 상이(20,5 콜후 vs 12 콜전 — 각자 정확·상호 링크 혼선) | EN에서 먼저 판정 후 전 로케일 소급. 별건 소품 3건: ⑥ PDF 자산 내 «Suited adds only ~2–3% equity» 문구 vs 본문 «~2 percentage points»(print HTML 수정+재생성 후보 — **세션 3 교열 렌즈가 pdftotext로 독립 재발견**) ⑦ es glossary «Mano a mano»가 hand-for-hand·heads-up 두 항목에 중복(es 다음 회차 판정) ⑨ 🆕 content 종단 `.trim()` — EN 56편 전부인데 ja(ept·wpt·wsop)·es·de·zh 일부 미이식(렌더 영향 선행 개행 1개뿐 — 각 로케일 열 때 겸사) |
| 🆕 shc «AQo/**AJo** conforme evolui» — EN 07-19가 AJo 삭제, pt 등 6로케일이 낡은 판 | **UTG 13% 구성 논쟁(사장님 판단 대기 #1)과 같은 갈래**라 임의 소급 안 함. #1 판정 시 함께 |
| 🆕 pt «dar raise/deu raise»(cb 16곳) vs «aumentar»(나머지) 동사 혼재 | 네이티브 렌즈는 aumentar 통일 제안, 본체는 둘 다 BR 실사용이라 기각 — 코퍼스 단위 통일 여부는 후속 판정 후보 |
| 🆕 strategy 허브 표의 결정 4·5 목적지가 betting-actions·pot-odds(전용 필라 cb·when-to-fold 아님) | EN 패리티 — **EN에서 먼저** 바꿀지 판정 후 전 로케일 소급(SEO 렌즈 제안) |
| 🆕 pt odds 클러스터 3편(outs·drawing-odds·reading-the-board)이 본문 이미지 `holdem-reading-straight-example.webp`를 공유 — «클러스터 글 본문 이미지 고유화» 규율 저촉 후보. 🆕 **세션 8 추가 실측**: glossary 클러스터도 `holdem-button-dealer-board.webp` 4편(glossary·bad-beat·cooler·straddle)+`holdem-pub-players-table.webp` 2편 공유 — 게다가 이미지 안 영어 문구(«The button acts last…»·«Texas Hold'em at the Pub»)가 bad-beat·cooler·fish 절 주제와 무관. `holdem-cooler-vs-badbeat.webp`의 «a cooler» 영어 배지가 bad-beat 글에 실리는 것도 같은 계열(캡션 한정어로 지혈 완료) | 18언어 공용 자산이라 교체는 이미지 신설 작업(스트레이트 드로 인포그래픽 1~2장 — HTML+Playwright). board-puzzle ✦마크 건과 함께 이미지 일괄 회차 후보 |
| 🆕 «mesa pareada / mesa assustadora» → «board pareado» 전환 여부 — 네이티브 렌즈가 «마지막 남은 번역 냄새»로 지목 | 회차 1 판정(«카드 나열 앞만 board»)의 범위 밖이라 재론 필요. 바꾸면 태그 «mesa pareada poker»(reading)와의 정합도 함께 판단. 사장님/다음 회차 판정 |
| 🆕 🟠 `holdem-hand-rankings-board-puzzle.webp` 우하단 **생성AI ✦ 마크 잔존 + 워터마크(로고+URL) 부재** — 18언어 공용 자산 | 2026-07-26 워터마크 규율 위반 상태. 실사 생성분 일괄 점검·sharp 후합성 소급이 나은 별건(다른 히어로도 같은 상태일 수 있다). alt 오기(K-K-K-A-4→A-2)는 a4588d9e에서 7로케일 수정 완료 |
| 🆕 pt 홀카드 지칭 3종 혼용 — split-pot «cartas fechadas» vs kicker «cartas de mão» vs reading «cartas na mão» | 네이티브 렌즈는 «cartas da mão» 통일 제안했으나 브리프(`translation-terms-pt.md`)에 hole cards 정본 항목이 없어 **판정 필요**(«cartas fechadas»도 BR에서 통용). 정하면 브리프에 등재 후 코퍼스 단위 통일 |
| ~~TDA «Rule 19» 번호 원문 대조~~ → ✅ **해소(2026-08-27)** — 검수장 pt 세션 2가 버지니아 주정부 게재 2019 TDA 축자 사본으로 **독립 재현**(pokertda.com 접속 거부 우회 · 이력 8/27 속15). 인용 유지 정당 | |
| 🟠 규칙 PDF pt·id판 부재 — `public/downloads/`에 ko·ja·zh·de판만 있고 pt·id beginners는 영어 PDF 링크(id는 «berbahasa Inggris» 명시) | `poker para iniciantes pdf`(약점 3/1·DA20) 수요 실재. 제작은 사장님 판단(제작 시 각 beginners 링크 교체) |
| 🆕 id 표기 코퍼스 분열 — **cek/check**(betting-actions만 check 40회·나머지는 cek — 세션 4에서 앵커만 정합화) · **tangan/hand**(beginners만 tangan 50회 — «판» 뜻 3곳은 hand로 정정 완료, 족보 뜻 잔존) · 🆕 **meja/board**(rankings 클러스터 실측 4:2 — hand-rankings·flush·kicker·tiebreak는 meja 우세, split-pot·reading은 board 우세. 네이티브 렌즈: 현지 커뮤니티는 board · 세션 5는 교차문서 표면(앵커·카드 라벨·설명)만 board로 정합화, 본문 통일은 코퍼스 판정) · 🆕 **kicker 편 ace/As 36:0**(타 5편은 As 우세) · 🆕 **세션 6 신규 발견 4종**(odds 렌즈 실측): ① flop 동사 3분열(nge-flop=probability / flop=drawing / mem-flop=implied·equity) ② deck/dek(card-counting만 dek) ③ Rule 4&2 표기 3종(Aturan 2 dan 4 / Aturan 4 dan 2 / Rule of 4 and 2 — 혼종 «Rule of 4 dan 2»만 세션 6 정정, 전면 통일은 태그·H2 얽혀 별건) ④ «N% dari waktu» 직역 패턴(문법 성립 — 무전치사 «% waktu» 12곳만 세션 6 정정) + Lanjut baca 잔존 6편(클러스터 밖)·ekuitas 4편·무생물 ia/mereka 잔여(명백 비문·대표부만 정정) · ~~소품: id wpt-australia 하이라이트 안 마침표~~(✅ 세션 9 — 같은 계열 2곳 «.==»→«==.» 정합화 · 지목된 «K.==» 원문은 이미 소멸 상태였음) · 🆕 **세션 9 발견 3종**: ⑩ 관련글 H2 «Panduan Terkait» 3건(이 클러스터 전부)은 세션 9에서 소멸 — 코퍼스 이제 Postingan 30 : Artikel 10(Artikel 잔여는 ⑦대로) ⑪ readnext «Baca selanjutnya» 유일 1건 소멸(Lanjut membaca 36) ⑫ equity:ekuitas 263:9 — short-stack 유일 이탈 정합(tvc «ekuitas bertahan/hadiah» 추상명사 7건은 정상 판정 — 치환 금지) · 🆕 **세션 7 발견 3종**: ⑤ strategy 본문 «Position» 영어 5회(H2 포함) vs 코퍼스 posisi — 링크 라벨 2곳만 세션 7이 posisi로 정합화, 본문은 별건 ⑥ 랭크 표기 정본 재확인 — «복수형+dan 혼종 금지, K dan 9»(세션 4~5 판정)가 심판이되 영어 단독 랭크명(nines·eights)은 허용(2차 교열이 3분열 정합화) ⑦ Artikel Terkait 잔존(세션 8이 glossary 1편 정합 — 잔여 ~11편 · Postingan 26편+) · 🆕 **세션 8 발견 2종**: ⑧ tiebreak 카드 라벨 4분열 — Pemecah Seri 4 / Peringkat Kartu 2 / Tiebreaker 2(Hand Rankings는 세션 8에 소멸 — bad-beat만 다수파 Pemecah Seri 합류, 잔여 통일은 별건) ⑨ «Peluang & Matematika» vs «Odds & Matematika/Math» 카드 라벨 6:6 — 세션 8이 glossary 클러스터 몫만 Peluang으로 정합 | 코퍼스 단위 통일 판정 후보(네이티브 렌즈 권고: 액션=check·확인=cek·판=hand·보드=board). pt vazamento↔leak 건과 같은 계급 — 세션 5~9에서 해당 글 열 때 축적, 일괄 스윕은 별건 판정 |
| 🆕 **id-posting-reference §5의 «variance·leak 다수파» 판정과 세션 9 렌즈 전수 grep이 상충** — 렌즈 실측 kebocoran 23 : leak 13(varians 12:19는 §5와 일치) | «통일 방향은 코퍼스 전수 grep이 심판» 규율대로 **§5 세션 8 판정의 계수 근거를 재확인** 후 유지/뒤집기 판정(kebocoran의 일반명사 용법(물샘 비유)과 포커 용어 leak을 가른 계수였는지가 쟁점). 그전까지 전면 스윕 금지 |
| 🆕 🔴 **배포 전 검증은 `npm run build`로 하라 — `build:vercel`만 돌리면 사이트맵이 안 갱신된다** | 2026-08-26 게이트 정리의 부수 발견. 프로덕션 체인(`build:vercel`)은 `prebuild`를 안 타므로 `generate:sitemap`이 빠진다. 🔴 **그렇다고 사이트맵을 프로덕션에 넣는 것은 «금지»로 판정했다** — 정적 라우트 `lastmod`가 git 커밋 날짜인데 **Vercel 얕은 클론에서는 git이 «실패»하는 게 아니라 «오늘»을 조용히 반환한다**(`git clone --depth 1` 재현 확인) → 매 배포마다 전 라우트 lastmod=오늘 = 2026-08-08에 고친 회귀 부활(구글이 lastmod를 통째로 무시). ✅ `check:intl-links`는 편입 완료(`jiti` devDeps 명시로 해소 · 471편·25언어 통과). `check:clusters`는 **스크립트 자체가 아직 없다**(백로그 P3·P4). 근거·처방 정본 = `docs/settled-decisions.md` §6 |
| 🆕 **fr 랜딩 내부링크 보강** — fr 코퍼스가 규칙 6편뿐이라 표준 링크 세트(chart·pot-odds·equity·3bet·strategy·glossary) 불성립. 프리플랍 안내는 앱 Charts préflop 탭으로 임시 대체 중 | **fr 전략 코퍼스 확장 시 함께**(위 착수 후보 1번). 뱅크 §3·랜딩 헤더에 명기 |
| ✅ **DFS 복구 완료(2026-08-27) — «인증 만료»는 오진이었다.** 자격증명은 유효(직접 REST 20000 Ok·유료 잔액 실재 — 사장님 지적이 맞았다). 진짜 원인 = `.mcp.json`의 `${VAR}` 확장이 참조하는 **환경변수가 시스템에 없었던 것** → 사용자 환경변수 등록 완료. ✅ **교차검증 예약 이행 완료(세션 5)** — id 15종·fr 10종 REST 재실측 전 항목 라쿠와 일치(각 뱅크 머리 갱신) | ⚠ 🔴 **DFS MCP는 CLI 재시작 후에도 40100 재현**(세션 7 실측 — env 등록이 MCP 프로세스에 안 닿는다). 자격증명은 유효 — **node `.mjs` REST 직접 경로만 쓸 것**(PowerShell Invoke-RestMethod는 .env.local 파싱이 깨져 40100 오진). 근본 해소는 `.mcp.json`에 값 직접 기입 또는 시스템 재부팅 후 재확인(처방 = `docs/rakko-playbook.md` 2026-08-27 절 · settled-decisions §6) |
| 🆕 **전 언어 태그 전수 실측 완료(2026-08-27 · 사장님 지시 «MCP 안 쓰고 추측하면 경화가 아니다»)** — pt·de·ja·zh·zh-hant·es 태그 ~2.100종 라쿠 6배치(90크레딧)+DFS 실측 → `docs/keyword-bank/<locale>-tag-volumes.md` 6종 신설. **4개 필라 즉시 반영**: de «poker regeln» 90.500(+126%↑, 기존 축의 17배)·ja «ポーカー ルール» 60.500(84배)·pt «poker regras» 12.100·es «como jugar poker» 6.600 전부 무주공산이던 것을 title·seoTitle·태그로 편입(훅 유지·slug 불변). ⚠ zh-hant는 3중 측정불가 실증(플레이북 참조) — 재조준은 자동완성+SERP로 | **후속 = 클러스터 딥 소급 라운드**(태그는 표층 — 각 언어 rankings·rules 등 클러스터별 자동완성 발굴→실측→H2/FAQ 재조준, id 세션 4~5 방법론 재사용). id 트랙(세션 5~9) 종료 후 언어당 1~2회차로 착수 후보 등재 |
| ~~zh·ja 랜딩 JSX 개행 공백 소급~~ → ✅ **해소(2026-08-26)** | 랜딩 실측 **ja 75건 · zh 44건**(zh-hant 0 = 대조군)을 전부 잇고, **문구가 하나도 안 바뀌었음을 증명**했다(빌드 산출물 텍스트를 공백 정규화 후 before/after 완전 일치 · ja 75→1 · zh 44→0). 남은 ja 1건은 `毎週日曜 午後7時` — **저자가 한 줄 안에 넣은 의도적 공백**이라 결함이 아니다. **블로그 본문 전수도 닫혔다**: 본문은 백틱 마크다운 문자열이라 이 결함이 **구조적으로 불가능**하고, 그걸 감싸는 공용 TSX까지 전수 0. 🔴 재발 방지는 주석이 아니라 **게이트**로 고정 — `npm run check:cjk`(셀프테스트 12/12 · `prebuild`+`build:vercel` 둘 다 편입) |
| ⚠ ja 뱅크의 「SD 24 = 유일한 低」는 거짓 근거 | 다음 ja 회차에 정정 (SD 엔드포인트 불일치 실증 후 남은 것) |
| **GTO 13편 → 12개 언어 전파** | 블로커 = **M-033 판정 대기**(본문 용어 표기를 여섯 번째 언어별 항목으로 — §4-A-3 수정). 폐기 명제 목록은 확보됨(19행+ · 회귀 77/77). 번역 방식 = «번역 + 5필드»(스펙 §4-A-3) · 조건 넷은 아카이브 「다국어 방식이 바뀐다」 절 |
| KO ⑫ 「13스팟」 하드코딩 | **⑭를 만들 때 함께 열어라** — 지금 값이 맞고 고치면 8곳이 움직인다(검수장 판정) |
| ja 판단 대기 ① `ポーカー gtoとは`(170) | 뱅크는 `ja/holdem-strategy`에 양보시켰는데 그 글 H2 12개 전부 GTO 0회 — 양보가 명목뿐. 그 글 경화 시 GTO 축을 세우든지 랜딩이 가져오든지 판정 필요 |
| ja 판단 대기 ② 사이트맵 solver 3종 hreflang 부재 | HTML에는 있음. 컨벤션 분열(tournaments `ko\|en\|ja` 무지역 vs solver `ko-KR\|…` 지역포함) — **넣으려면 표기 통일이 먼저.** 급하지 않다 |
| ja 판단 대기 ③ 저자 소개 컴포넌트가 레포에 없다 | §13은 「WSOP·12년 경력」 소개를 전제하는데 `components/author*` 0개. ja SERP에서 note.com 개인 글이 이기는 이유가 저자 권위였다 — 다국어 도구 페이지에 필요한 자산일 수 있다 |
| `desc` 🟠 꼬리 정보 10편 (KO 6 · es 3 · de 1 — pt 1은 회차 6 tvc desc 재작성으로 해소) | 글 열 때 함께 |
| ja `desc` 손대는 회차 | M-016 §4의 5 슬러그를 회신 목록에 포함(`ja/holdem-flush-vs-straight`·`holdem-kicker`·`holdem-limping`·`holdem-straddle`·`holdem-tournament-vs-cash-game`) |
| ~~`holdem-bubble #27`~~ → ✅ **닫힘(2026-08-28 세션 9)** | de는 원장 실측 OK(08-24 `fc404ca8` 룰 중립안 반영 완료) · id는 FT 버블 서술에 인원수 주장 자체가 없음을 실측(«satu tempat dari final table» — 결함 없음) |
| KO `apt-incheon` `$3.50` 스텝 위성 실재 여부 | Natural8 페이지가 시즌 종료로 다운 — **판정 불가.** 취소선 과거 기록 행 하나만 남았다. 서둘러 지우지 마라 |
| `GGPoker SuperSatellites` 고유명 | 08-13에 중립화. ggpoker.com 404 — 검수장에 근거 URL 요청 후 승격 판단 |
| JTBC 외국인 쿼터도 추첨제인가 | 공식은 「국내 등록은 추첨제」만 명시 — 외국인 쿼터 적용 여부 불명 |
| ~~`vs-cash-game` 「100-300BB」 ↔ `holdem-tournament` 「초반 100-200BB」~~ → ✅ **닫힘(세션 9)** | 모순 아님 확정 — 3e97b2b5 #13 정합(«100~300 일반 / 200BB+ 딥스택») + 세션 9 렌즈 2종 재확인(시작 스택 범위 vs 초반 단계 라벨·양립). 표기 통일 불요, EN 패리티 유지 |
| **de 적대 QA 잔여 6항목** | `rabattieren` 13곳/4편 · `Side Pot↔Nebenpot` · 드로 라벨 `-Straße` · `Leaks↔Lecks` 8:8 · outs 19,1%↔19,6%(둘 다 맞음) · WSOP Rule 96.a 누락 — 코퍼스 단위·사장님 판단 섞임. 🔴 실측값은 낡았을 수 있다, 손대기 전 재grep. **오탐 2건을 렌즈 «의도적 제외 목록»에**: ① `€10` 선행이 정본 ② equity 하프팟 35%는 의도적 구성 |
| es LATAM 보충 패스 | Spain 베이스 42/42 완결 — 다음 = Country=Mexico부터, 슬랭 우선 |

## 🔴 사장님 판단 대기

| # | 안건 | 메모 |
|---|---|---|
| 0 | 대회 글 3편 검수장 원장 신규 편입 여부 | `wsop-2026-tournament-guide`·`como-entrar-al-wsop`·`korea-poker-marathon-2026` — 편입하면 행 추가가 아니라 신규 1편씩(주장 전수 추출+판정) |
| 1 | `starting-hands-chart #13` — 수치를 고칠지 핸드 목록을 고칠지 | UTG 13% vs 조합수 144콤보=10.86% 충돌. SEO·전략 판단 |
| 2 | 다국어 «판 전체 재동기화» 할지 말지 | 노출 미미(전 언어 클릭 합 2). `blind-meaning` 표 헤더 23로케일 동일 결함 중 6곳 고침(pt는 8ee6b047). 착수 시 `docs/multilang-sync-plan.md` |
| 3 | de 콘텐츠 신설 | 칩 분배 계산기(`verteilung rechner` LDA7) · 세금 FAQ 흡수(승인·미착수) · 툴 브랜드 대응 |
| ~~4~~ | ~~「홀덤사이트」 클러스터 착수~~ → ✅ **종결(2026-08-28 (4))** | **절반은 버리고 절반만 취했다.** 「온라인 홀덤사이트」 6,654노출·클릭 2 = **의도 불일치라 제외 확정**(SERP 1~10위가 보드게임아레나·피망·한게임 = «접속할 게임»). 「홀덤사이트」 2,970노출·클릭 27만 살림 — 원인은 콘텐츠가 아니라 **페이지 선택**(홈 CTR 0.4% ↔ /ranking 1.5% · 중복노출 599건). 06-21 홈이 커뮤니티 피드로 바뀌며 «내용은 /ranking으로, 순위는 홈에» 남은 것. 1차 조치 완료 → 이제 **관측 국면**. 🔴 noindex는 «금지»로 판정(둘 다 지금보다 나빠짐) |
| 5 | EN 제목 보강 3편 | `holdem-3bet`·`holdem-continuation-bet`·`holdem-pot-odds` — 제목에 poker/hold'em 없음. 🔴 GSC 먼저(노출 붙었으면 교체 순간 측정 끊김) |
| 6 | 소품 셋 | PDF 용지 규격(ko·ja·zh도 A4) · es 국기 · `app/home-client.tsx`(죽은 파일) 삭제 |

## ▶ 대기 — ja 43편 라쿠 경화 (위 묶음 다음 · **색인 논리는 폐기됐다**)

> 🆕 **2026-08-26 사장님 판정 — 이 절의 전제가 뒤집혔다.** 축어:
> *「ja는 중요한 언어중하나이고 색인은 구글봇이 순차적으로 하고 있어
> 그러니까 색인신경쓰지말고 작업해야해」*
>
> 🔴 **그래서 아래 «색인 4/43이라 43편 경화는 틀린 계획»은 폐기됐다. 되살리지 마라.**
> 대상은 **43편 전체**다. «색인된 4편만»으로 좁히지 마라. 색인 확보를 위한 별도 작업
> (구 트랙 B)도 08-25 판정으로 이미 폐기됐다 — *「포스팅만 잘 작성하면 색인은 알아서 될 거야」*.
>
> 🪶 앞선 보류 축어(*「ja업데이트는 13편완성되고 시간나면 그때 다시 논하자」*, 08-22)는
> **이 판정으로 해소된 것으로 본다** — ja를 «중요 언어»로 못 박고 작업 방식까지 지시했다.
> 순서만 뒤로 간다: **위 «드리프트 소급 + id» 묶음 다음.**

- 🪶 참고 수치(**판단 근거로 쓰지 마라 — 위 판정이 이 축을 폐기했다**): 2026-08-22 실측 색인 4/43
  (`docs/gsc-tracking/index-audit-2026-08-22.json`). 기록으로만 남긴다.
- 착수 시 1순위 = `holdem-hand-rankings`(`ポーカーの役` 90,500 + `ポーカー強い順` 3,600·SD 22).
  매핑표는 `search-volume-history` 일괄 15크레딧.
- 상세 계획 원문 = `docs/handoff-archive/2026-08-24-session-handoff.md` 「⏸ 보류」 절
  (⚠ 그 문서의 트랙 A/B 구분은 위 판정으로 낡았다).
- 🔴 경화된 글을 다시 만지면 **2차 교열 패스 필수** + 부족한 조각만(공식 diff = 플레이북 §7-5).
- ⚠ ja는 **위 묶음 A(드리프트 소급)에도 들어 있다** — 그때 손댄 자리와 겹치지 않게, 이 회차를
  열 때 그 커밋 diff를 먼저 봐라.

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
