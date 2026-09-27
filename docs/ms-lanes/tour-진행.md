# ms-tour 진행 — 🅳 토너먼트 4편

> 정본 = docs/ms-translation-lanes.md · 이 파일은 이 레인만 쓴다.

## 상태 — A ✅ / B ✅ / C ✅(2026-09-27) · 커밋 (C ⑥ 커밋 — 해시는 헤드 보고 참조)

## 편별

| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-tournament | ✅ | ✅ | ✅ | 링크 편차 2(APT) · 필라 |
| holdem-icm | ✅ | ✅ | ✅ | 표 3 수치 재계산 ✅ |
| holdem-bubble | ✅ | ✅ | ✅ | BF 표·데드머니 재계산 ✅ |
| holdem-short-stack | ✅ | ✅ | ✅ | 22 vs AKo 전수(suit 가중 12조합×C(48,5)) = 52.649% ✅ |

## C 판정 요약 (2026-09-27)

- 게이트: audit:hard ms 4편 🔴 0 · check:structure 내 슬러그 결손 0 · check:meta · check:seo-sync · build(782 pages) · postbuild 3종 ✅ · intl-links 12 · calc-parity 3 = 헤드 요청 기존분
- §13 전사 대조(스크립트): 카드·핸드 토큰 4편 일치 · 수치 차이는 전건 설명됨(Day 1→Hari Pertama · 1st→ke-1 · 12pm→12:00 · APT 문장 삭제 · «(daripada 20)» 추가)
- 렌즈 4종 반영 55자리 — 뜻 반전·오의미: bubble «tanpa sengaja»→«jangan sengaja» · icm «memandang tinggi» · «masuk campur» · «1.5× lebih daripada»→«sebanyak» · tournament «Seorang daripada mereka» · bubble «tiga pemain lagi»→«tiga penyingkiran lagi» · short-stack tldr «ke bawah»·«fold equity ialah senjata» 복원 · bubble FAQ «Either way» / 용어 통일 + 직역투 정리
- 기각: short-stack FAQ «(atau "jam")»(브리프 L558 jam poker 흡수 지정) · when-to-fold 카드·readnext 라벨 교체(EN도 제목 앞부분 사용 · strat title 접두와 일치) · 타임라인 80px 열 줄바꿈(EN 동일 구조 · 넘침 아닌 줄바꿈) · tag «poker tournament»(확정 카피 유지) · icm 본문 «ICM poker» 삽입(확정 카피 유지)

## 신규 용어

| EN | 채택 ms | 근거 |
|---|---|---|
| tournament | tournament (kejohanan 안 씀) | 코퍼스 90 : 35 · tvc · 말레이어형 볼륨 null |
| blind level | blind level | tvc 3 (blind-meaning «tahap blind» 1) |
| clock (blind 시계) | jam | blind-meaning L114 «jam kejohanan» · shove ≠ jam |
| structure sheet | helaian struktur | blind-meaning L114 |
| starting stack | stack permulaan | — |
| big / medium / short stack | 영어 3종 · medium 첫 등장 «(stack sederhana)» | tvc «stack sederhana» · 검색 표면 |
| ITM | ITM + «kedudukan berbayar (in the money)» | tvc |
| bust / eliminated | tersingkir | tvc |
| ICM tax | «ICM tax» + «(cukai ICM)» 병기 | — |
| burst the bubble | bubble pecah | — |
| stalling | stalling + «(sengaja melengahkan masa)» | — |
| seat card · loyalty card · photo ID | kad tempat duduk · kad keahlian · ID bergambar | — |
| orbit | pusingan meja | `/ms/calculator` |
| M-ratio zones | Nilai M · Zon hijau/kuning/oren/merah/mati | `/ms/calculator` 축어 |
| pay ladder · ladder up | tangga payout · naik tangga payout | — |
| card room | bilik poker | — |
| calling range · shoving range · open-shove range | 영어 그대로 (icm 초안의 «julat call» → B에서 «calling range»로 통일) | 형제 3편 · ms-posting-reference §1 range=영어 |
| house fee | yuran rumah | tournament B |
| registration desk · late registration | kaunter pendaftaran · tempoh pendaftaran lewat («Late reg» 라벨은 영어) | tournament B |
| dinner break · confirmation email · driver's license | rehat makan malam · e-mel pengesahan · lesen memandu | tournament B |
| chained satellites | satellite berantai | tournament B |
| break-even · leak · variance · face value | titik pulang modal · kebocoran · varians · nilai muka | icm B |
| ICM pressure | tekanan ICM | icm B |
| top-heavy | berat di bahagian atas | bubble B |
| blind out · consolation prize | habis dimakan blind · hadiah saguhati | bubble B |
| big aces | ace besar | bubble B |
| playability | kebolehmainan | short-stack B |
| chip-EV bar (equity 문턱) | palang chip EV | short-stack B |
| Free Tool (카드 라벨) · Strategy | Alat Percuma · Strategi | 4편 공통 |
| (satellite) seat | tempat duduk («multi-seat» 합성어만 영어) | C — tournament 다수형으로 bubble «seat»·icm «tempat kelayakan» 통일 |
| break-even (bubble) | titik pulang modal | C — icm 채택어로 통일 |
| consolation payout | hadiah saguhati («bayaran saguhati» 통일) | C |
| online | dalam talian | C — short-stack FAQ 잔존 1 정리 |

## 링크 편차

| slug | EN 링크 대상 | 처리 |
|---|---|---|
| holdem-tournament | L191 본문 apt-incheon-2026-guide | 빼기 — 문장째 삭제(링크 하나를 위한 안내문) |
| holdem-tournament | L321 readnext apt-incheon-2026-guide | 대체 → holdem-icm |

## EN-먼저 후보

- lib/posts-en/holdem-icm.ts:L183 · L238 | readnext·관련글 카드 라벨 «Texas Hold'em Tournament Strategy» ≠ 대상 글 title «How Poker Tournaments Work — Buy-Ins, Formats & Day 1» | 라벨이 낡음(ms는 대상 title 사용)
- lib/posts-en/holdem-tournament.ts H2 전반 | H2 직후 40~75단어 굵은 직답이 없음(나머지 3편은 있음) | C SEO 렌즈 · GEO
- lib/posts-en/holdem-bubble.ts · holdem-short-stack.ts 첫 내부링크 | 필라(holdem-tournament)보다 holdem-icm이 먼저 | C SEO 렌즈 · 클러스터 규칙
- lib/posts-en/holdem-icm.ts L103 | «The tax»가 정의(L107 ICM tax)보다 먼저 | C SEO 렌즈 · 낮음
- lib/posts-en/holdem-icm.ts · holdem-bubble.ts imageAlt | 179/193자 · 뒤쪽이 개념 설명 | C SEO 렌즈 · 낮음
- lib/posts-en/holdem-bubble.ts L64 | «big stack at 9-handed» 파이널 테이블 버블 인원 서술 모호 | C SEO 렌즈 · 낮음
- lib/posts-en/holdem-tournament.ts L140 | «PKO guide coming soon» 약속문 이행 여부 | C SEO 렌즈 · 낮음

## 헤드 요청

- 🔴 **빌드 prebuild 두 게이트가 이 레인 단독으로는 빨갛다(설계상 · 5레인 머지 후 해소 예상)**: ① `check:intl-links` 12건 = 전부 다른 레인 슬러그(3bet 2 · equity 2 · pot-odds 2 · when-to-fold 3 · glossary · rake · starting-hands-chart 각 1 · §0-A) ② `check:calc-parity:all` ms 불일치 3 = ms 계산기 랜딩 사전이 이제 존재하는 holdem-short-stack·holdem-icm 링크를 기대(A 표5 link slug holdem-short-stack vs 3bet-pot-cbet · C related 누락 icm·short-stack) → 계산기 사전은 레인 소유 밖이라 헤드 판단. B 자기 게이트는 두 개를 뺀 prebuild 나머지 8종 + next build + postbuild 3종으로 통과 확인.

- 태그 카니발(신규): holdem-short-stack «fold equity» ↔ prob 레인 holdem-equity «fold equity»(EN도 공유) → 5레인 머지 후 한쪽 정리 판단.
- 태그 카니발: 기존 ms `holdem-tournament-vs-cash-game` 태그 «ICM poker» ↔ 이 레인 holdem-icm(«icm poker»). 기존 편 태그 정리 판단(queue 회차).
- 용어 통일: 기존 ms `holdem-blind-meaning` L114·`/ms/calculator`는 «kejohanan», 이 레인·tvc는 «tournament». 5레인 대조(§7-③) 때 판정.
- 현지 대회 의도(genting poker tournament 70 · poker tournament malaysia 40)는 EN에 사실이 없어 이 레인이 못 받는다 → «나라별 홀덤대회 트랙» 후보로만 기록.

## 미결

- 없음 (C에서 equity 제목 = prob 워크트리 title 일치 확인 · when-to-fold 라벨 = strat title 접두 «Bila Patut Fold dalam Poker» — EN도 접두만 쓰므로 유지. 두 레인 머지 후 title이 바뀌면 재대조)
