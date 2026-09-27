# ms-rank 진행 — 🅰 족보 5편

> 정본 = docs/ms-translation-lanes.md · 이 파일은 이 레인만 쓴다.

## 상태 — A ☑ / B ☑ / C ☑ · 커밋 A `5d95c4ef` · B+C = 이번 커밋(아래 «C 결과»)

A 산출(2026-09-26): `docs/ms-lanes/rank-brief.md` · `docs/keyword-bank/ms-rank.md`
키워드: DFS 실측 ~90개(google_ads search_volume 7회 · Labs suggestions/ideas 3회) · 라쿠 40개(requestId 1286784 — DFS와 전 행 일치) · 자동완성 18시드×2 · SERP 7회 · 경쟁 글 원문 8편(Playwright h1~h3, upswing 1편은 봇 차단)
B 산출(2026-09-27): lib/posts-ms/ 5편 + index.ts [ms-rank] 칸 2곳 · 자기 게이트 = audit:hard 🔴 0 🟠 0(26/26) · check:structure 내 5편 결손 0 · intl-links 5건(아래 «미결» — 다른 레인 대상) · 빌드 = intl-links 제외 prebuild 전부 + next build ✅(582 intl posts) · check-directives 누수 0 · FAQ JSON-LD = 원문 문항 수 5/5 일치
카피: Fable 서브 1회 → Opus 판정(글자 수 트리밍 4 · 레지스터 표준체 정규화 · hand→tangan · Ace→As · Rules→Peraturan · 현지 추가 FAQ 2)

C 산출(2026-09-27): main 병합(`36f66287`까지 · 충돌 0 · main의 es/zh 로케일 정정 2건은 ms에 해당 문장 없음 확인) · 게이트 전건 · §13 전사 대조 스크립트(카드 토큰·%·$·비율·분수 = 5편 전부 EN과 불일치 0 · 콤보 2건은 EN 사실 재사용 판정) · 렌즈 4종 · 2차 교열

### C 결과 — 렌즈 판정

| 렌즈 | 지적 | 반영 | 기각·이관 |
|---|---|---|---|
| 딜러·수학 | 1 (split-pot·reading 미검사 카드 문단 전건 손검산 ✅ · 오류 0) | 1 kicker «첫 키커가 결정» 과잉 일반화 | — |
| 교열(diff) | 6 | 3 tiebreak H2↔직답 어긋남 · tiebreak «board's five» 어순 · reading 중복 절 (+kicker 중복) | 기각 2: `:::tiebreak` «trio»(= hand-rankings 축어 §1-G) · flush L41 정의(H2 직답 자기완결) |
| ms 네이티브 | 17 + 편간 불일치 7 | 17 전건(«board's five»=보드의 5 카드 의미 복원 · dalam praktiknya→secara praktikal · timbunan→stack · KOSONG·menyewa·berbunyi·wilayah·perabot 등 직역투) + 불일치 5(Tiga→Three of a kind/Trip · empat→quad · 앵커 «susunan penuh kad poker» 통일 · kombo · kenapa) | 이관 1: kicker readnext 카드 제목 «Bagaimana Seri Dipecahkan»(EN 카드 제목 계승 — 헤드 판정) |
| SEO/GEO | 11 | 4 split-pot 태그 «side pot poker»(all-in-rules 태그와 동일)→EN «when is a pot split» · flush «pilihan utama»(=favorite 오역, D유형 방지 문장 뜻 소실)→«lebih berpeluang menang» ×2 · split-pot «biasa»↔tiebreak «tidak biasa» 모순→«normal» · H2 «Board yang Dimainkan» | 기각 5(EN-먼저 3: kicker/tiebreak H2 앞머리 · desc 끝 숫자 · 직답 길이 / 유지 2: «poker board texture» 태그 · kicker tldr 길이) · 헤드 이관 2(아래 요청 #4) |
| 2차 교열 | 3 | 2 reading «Trip 9»→«Three of a kind 9»(9♥9♦+보드 9 = set) · split-pot «pemain dengan stack» | 1 reading L44 첫 앵커(의도적 변형 · 유지) |

합계: 지적 45(중복 3) · 반영 31 · 기각 8(EN-먼저 3) · 헤드 이관 3. 반영 후 게이트 재실행 = 전사 대조 0 · audit 🔴0 🟠0 · meta 초과 0 · structure 내 5편 결손 0 · build ✅(intl-links 5건 = 기존 미결).

## 편별

| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-flush-vs-straight | ☑ | ☑ | ☑ | 트래픽 기둥(straight flush 390 · flush poker 320) · 현지 추가 FAQ 2 |
| holdem-kicker | ☑ | ☑ | ☑ | `export default POST;` 꼬리 있음(EN 동일) |
| holdem-tiebreak-rules | ☑ | ☑ | ☑ | `:::tiebreak` 행 = ms hand-rankings 축어 복사(§1-G) · 태그에서 «poker kicker» 제외 |
| holdem-split-pot-rules | ☑ | ☑ | ☑ | |
| holdem-reading-the-board | ☑ | ☑ | ☑ | |

## 신규 용어

| EN | 채택 ms | 근거 |
|---|---|---|
| The Short Answer (stripe 머리 H3) | Jawapan Pendek | 🆕 코퍼스 0 · 1-A «Jawapan ringkas»(인용 라벨)와 구분 — H3 제목이라 Title Case |
| … at a glance | … Sekali Pandang | 🆕 (Kicker Sekali Pandang · Pemecah Seri Sekali Pandang) |
| The core numbers | Angka Teras | 🆕 |
| The Takeaways / The 3 Things to Remember | 3 Perkara untuk Diingati | hand-rankings L397 선례 |
| tie / tie-breaker | seri / pemecah seri | 코퍼스 seri 34 · hand-rankings desc |
| side card | kad sampingan (kicker 병기) | 코퍼스 1 |
| hole cards | hole card (첫 등장 «dua kad peribadi anda» 풀이) | 코퍼스 hole card 10 · kad peribadi 2 · 🔴 «kad lubang»(reddit 자동번역) 금지 |
| counterfeit(ed) | counterfeit (첫 등장 «dipadamkan nilainya» 풀이) | 🆕 코퍼스 1 · 풀이 신규 |
| dominated ace | As yang didominasi | 코퍼스 didominasi 1 |
| odd chip | odd chip (첫 등장 «cip ganjil» 풀이) | 🆕 코퍼스 0 |
| first / second / third kicker | kicker pertama / kedua / ketiga | 🆕 |
| The check: (인용 라벨 · split-pot L89) | Semakan: | 🆕 |
| paired board · dry · wet | board berpasangan · board kering · board basah | 코퍼스 51 · 45 · 7 |
| board texture | tekstur (board) | GTO 편 태그 «tekstur board poker» 표기와 일치 |
| Board (5 cards) — :::hand 라벨 | Board (5 kad) | hand-rankings L211 선례 |
| TDA 2024 Rule N / WSOP Rule N | Peraturan N TDA 2024 / Peraturan N WSOP | 코퍼스 «Peraturan 47-A TDA 2024» |
| Tournament Rule 85 (WSOP) | Peraturan Kejohanan 85 | 🆕 브리프 «하지 말 것» 안 · «rank and suit» 인용은 영어 + «(nilai dan suit)» 풀이 |
| the board plays | board dimainkan (the board plays) | 🆕 split-pot H3·H2 · 첫 등장 영어 병기 |
| favorite (승산 우위) | lebih berpeluang menang | C 렌즈 — «pilihan utama»는 코퍼스에서 «우선 액션» 뜻이라 금지 |
| deeper stack(s) | (pemain dengan) stack lebih dalam | C 렌즈 — 코퍼스 stack 194 · timbunan은 «timbunan cip»(칩 더미)만 |
| in practice | secara praktikal | C 렌즈 — «dalam praktiknya»는 인니어 관용구 |
| complete hand rankings (앵커) | susunan penuh kad poker | «lengkap»은 1-F 마무리 금지류와 헷갈려 «penuh»로 통일 |

## 링크 편차

| slug | EN 링크 대상 | 처리 |
|---|---|---|
| (없음) | 5편 전 링크 47개 대상이 전부 51편 안 · 제외 대회 가이드 5편 링크 0 · 페이지 내 앵커 0 · 외부 링크 0 | EN 그대로 |

## EN-먼저 후보

(없음) — A 구간에서 5편의 §13 자리 전부(보드 예시 30여 개 · 조합 수 · split-pot tip 빈도 2/3·1/2·1/3)를 손검산했다. EN과 모두 일치.

## 헤드 요청

1. **카니발(참고 · 판정은 헤드)**: 기존 ms `holdem-hand-rankings`의 태그 «kicker» · H2 «Bagaimana Kicker dan Seri Berfungsi dalam Poker?» · H2 «Mengapa Flush Menang ke atas Straight?» · FAQ «Adakah flush menang ke atas straight dalam poker?»가 kicker·tiebreak·flush-vs-straight와 의도가 겹친다. EN도 같은 필라→클러스터 구조라 결함은 아니다 — §7-⑤ **queue 링크 복원 회차**에서 필라의 해당 H2가 이 레인 글로 링크를 걸면 정리된다.
2. **hand-rankings 기회(참고)**: «urutan poker» 50 · «urutan poker tertinggi» 40(Malaysia · DFS) — 족보 순서 의도로 기존 ms hand-rankings 몫인데 그 글 태그에 없다(현재 태그 «susunan kad poker» 140 등). 관련 검색에도 «Urutan kad poker»가 반복 노출. 🔴 «urutan»의 인니어 쏠림 여부는 미확인 — 태그 추가 전 자동완성·SERP 언어 확인 필요.
3. **tiebreak 태그 편차**: EN 태그에 «poker kicker»가 있으나 ms에서는 뺐다(레인 안 kicker 글과 카니발 회피). `check:structure`가 태그를 세지 않으면 무시해도 된다.

4. **카니발 추가분(SEO 렌즈 · 참고)**: flush-vs-straight 현지 추가 FAQ «Adakah apa-apa yang boleh mengalahkan straight flush?» ≈ hand-rankings FAQ L351 · reading-the-board FAQ «…kedua-dua hole card…» ≈ hand-rankings FAQ L363 · split-pot H2 «Bolehkah Dua Pemain Memenangi Pot yang Sama?» ≈ hand-rankings FAQ L359 → 요청 #1의 링크 복원 회차에서 필라 FAQ가 이 글들로 링크를 걸면 정리된다.
5. **readnext 카드 제목(참고)**: kicker의 tiebreak 카드 = «Bagaimana Seri Dipecahkan (dalam Poker)», flush·reading 카드 = «Peraturan Kicker & Pemecah Seri» — EN 카드 제목이 같은 식으로 갈려 있어 그대로 옮겼다. 통일 여부는 헤드 판정.

## 미결

- 🔴 **intl-links가 prebuild를 막는다**(B 발견 · 헤드 판정 필요): 내 5편의 링크 중 5개가 다른 레인 대상(holdem-probability ← flush-vs-straight · holdem-starting-hands-chart ← kicker·tiebreak · holdem-icm ← split-pot · holdem-glossary ← reading-the-board). §0-A대로 «건다»를 따랐고 5레인 머지 후 자동 해소된다. 그 전까지 `npm run build`는 exit 1 → B는 intl-links만 뺀 prebuild 나머지 + `next build`로 통과 확인했다. 🔴 헤드가 이 레인을 먼저 머지하면 main 로컬 빌드도 같은 5건으로 막힌다(배포는 어차피 30편 머지 후 1회라 무해). 정본 §5 «build 통과» 문구에 이 예외를 적을지 헤드 판정.
- 🟡 hole card 풀이 «(dua kad peribadi …)»는 편마다 첫 산문 등장 1회(tldr·stripe 라벨 제외).
