# ID GTO 예제 해설 — 언어·검색·메타 브리프

조사일: 2026-09-15. 대상과 순서: `lib/gto-series.ts` ①–⑬. 이 문서는 이번 ID 집필 입력이며, 범용 용어 정본은 `docs/keyword-bank/id-posting-reference.md` §5·§5-A다.

## 1. 집필 공통값

- 독자 호칭 **Anda**. 따뜻하고 구체적인 교육형 문장. `kamu`, `lo`, `gue`는 쓰지 않는다.
- **range / equity / board / hand / check / bet / call / fold / raise / postflop** 유지. 행동은 **check**, 확인은 **cek**. `meja`는 실제 테이블을 뜻할 때만 쓴다.
- **Jawaban singkat**(직답), **Lanjut membaca**(readnext), **mnt**(readTime), **Postingan Terkait**(관련글) 유지.
- 본문 소수 **98,2% / 5,5bb / 2,09bb**, 천단위 **1.326**. `%` 앞 공백 없음. 공식·코드 입력을 축어로 인용하는 경우만 앱 형식을 보존하고 필요한 안내를 붙인다.
- 카드·combo 약어는 정본 그대로. 본문에서 A를 풀어 쓸 때 **As**. 앱 카드·보드 약어의 T를 10으로 무조건 치환하지 않는다.
- 산문 **ukuran taruhan**, 짧은 표/앱 라벨 **Bet size**. **frekuensi bet**, **realisasi equity**, **range check**, **nut advantage**(첫 등장에 강한 hand 분포 설명), **range advantage**(첫 등장에 range 전체 equity 설명).
- **board kering / board terhubung / board berpasangan / flop monotone / two-tone / rainbow**. monotone을 `monoton`으로 번역하면 지루하다는 일반 뜻과 겹친다. 첫 등장에 **ketiga kartu memiliki suit yang sama**로 설명한다.
- **trips와 set을 구분**한다. 6-6-3·A-A-6은 trips, 홀카드 pocket pair가 한 장의 보드 카드와 만드는 것은 set이다. 앱의 `Set/Trips` 통합 카테고리는 화면 인용에서만 유지한다.
- **gratis / browser / unduh / Anda**는 ID. `percuma / pelayar / muat turun` 같은 MS 표기는 섞지 않는다.
- `leak`/`variance`는 이번 시리즈에서 필요한 경우 영어로 쓰되, 뱅크의 ‘다수파’ 수치까지 재인용하지 않는다. 기존 핸드오프에 leak 계수 근거 상충이 남아 있다. 새로 광역 치환하지 않는다.
- H2는 **Mengapa …? / Kapan …? / Cara … / … pada …**를 자연스럽게 섞는다. ID 뱅크 §8은 질문형 H2 70% 강제를 면제한다. 질문 수를 맞추려고 비문을 만들지 않는다.
- E-E-A-T는 **이번에 열어 본 예제·비교·실제 출력에서 관찰한 것**으로 충족한다. 현지 대회 참가·수익·코칭 경험을 새로 만들지 않는다.
- 아래 메타는 `title ≤40 / seoTitle ≤60 / desc ≤160` 기준. 설명 속 수치의 분모·주체를 보존한다. GTO 일반 정의와 무료 도구 의도는 `/id/solver`, 일반 c-bet 정의는 기존 `holdem-continuation-bet`가 소유한다. 새 글은 **보드·노드별 사례**다.

## 2. 13편 제목·메타·핵심 질문·시리즈 라벨

아래 핵심 질문은 **집필자가 설계한 독자 질문**이다. Google PAA에서 수집했다고 보고하지 않는다. 본문 구조·수치·FAQ 수는 최신 EN과 PT 원문 정정 목록을 따른다.

### ① a-high-board-cbet

- title: **Top Pair, Masih Check di A-7-2?**
- seoTitle: **Top Pair Pun Check? — C-Bet di Flop A-7-2**
- desc: **Top pair bukan alasan otomatis untuk bet. Lihat mengapa BB check 98,2% di A-7-2 dan bagaimana range serta posisi mengubah realisasi equity.**
- 핵심 질문: **Mengapa BB tetap check saat memiliki top pair di A-7-2?**
- 짧은 라벨: **A72 kering A-high**
- 보조 질문: **Apa bedanya equity dan realisasi equity? / Apakah angka ini menunjukkan frekuensi c-bet BTN?**
- 경계: 98,2%는 **BB root check**다. BTN c-bet 빈도를 관찰했다고 쓰지 않는다.

### ② k-high-board-cbet

- title: **BB Check 99,8% di K-8-3: Mengapa?**
- seoTitle: **Hampir Selalu Check — C-Bet di Flop K-8-3**
- desc: **Flop K-high tampak aman, tetapi BB check 99,8%. Bandingkan K-8-3 dengan A-7-2 lewat overpair, range, dan realisasi equity.**
- 핵심 질문: **Mengapa BB lebih sering check di K-8-3 daripada A-7-2?**
- 짧은 라벨: **K83 kering K-high**
- 보조 질문: **Ke mana AA dalam range BB? / Adakah draw pada board kering ini?**
- 경계: root check 빈도와 BTN의 후속 c-bet 빈도를 분리한다.

### ③ broadway-board-strategy

- title: **Banyak Draw, Tetap Check di Q-J-T?**
- seoTitle: **Banyak Draw, Tetap Check — Nut Advantage di Q-J-T**
- desc: **BB punya draw pada 68,4% range, tetapi check 99,9% di Q-J-T. Pelajari nut advantage, top pair yang rentan, dan selisih realisasi equity.**
- 핵심 질문: **Mengapa banyak draw tidak membuat BB langsung bet di Q-J-T?**
- 짧은 라벨: **QJT Broadway two-tone**
- 보조 질문: **Apa beda range advantage dan nut advantage? / Mengapa top pair rentan di sini?**
- 경계: 모든 straight가 nuts는 아니다. AK와 K9의 높이를 구분한다.

### ④ donk-bet-strategy

- title: **Donk Bet di 9-8-7 Bisa Masuk Akal**
- seoTitle: **Bet Duluan Bisa Tepat — Strategi Donk Bet di 9-8-7**
- desc: **Donk bet bukan selalu kesalahan. Di 9-8-7, BB bet lebih dulu 23,7% meski equity masih di bawah BTN. Lihat penyebab dan batas penerapannya.**
- 핵심 질문: **Kapan donk bet masuk akal pada flop 9-8-7?**
- 짧은 라벨: **987 terhubung · donk bet**
- 보조 질문: **Apakah donk bet selalu buruk? / Apakah BB sudah unggul dalam equity?**
- 경계: 48,5% 대 51,5%이므로 BB의 range advantage 획득을 주장하지 않는다.

### ⑤ monotone-board-strategy

- title: **Nut Flush Masih Check di Q-9-2?**
- seoTitle: **Nut Flush Pun Check — Strategi Flop Monotone Q-9-2**
- desc: **Tiga sekop mengubah nilai setiap hand. Lihat mengapa nut flush rata-rata check 69,9% pada Q-9-2 dan bagaimana satu sekop memengaruhi keputusan.**
- 핵심 질문: **Mengapa nut flush masih sering check pada flop monotone?**
- 짧은 라벨: **Q92 monotone**
- 보조 질문: **Apa itu board monotone? / Apa bedanya nut flush dan flush lain?**
- 경계: ‘nuts 고정’을 모든 미래 street에서 불변이라고 확장하지 않는다.

### ⑥ paired-board-strategy

- title: **Lebih Banyak Trips, Masih Check?**
- seoTitle: **Trips Lebih Banyak, Check 97% — Board 6-6-3**
- desc: **BB memiliki lebih banyak trips, tetapi tetap check 97% di 6-6-3. Bandingkan trips, pocket pair, dan bagian range yang hanya memakai pair board.**
- 핵심 질문: **Mengapa BB tetap check meski memiliki lebih banyak trips di 6-6-3?**
- 짧은 라벨: **663 board berpasangan**
- 보조 질문: **Apa beda trips dan set? / Seberapa kuat pocket pair di 6-6-3?**
- 경계: suited 6x 보조 카드는 상대 trips를 추가로 막는다고 쓰지 않는다.

### ⑦ low-board-check-raise

- title: **Kapan Check-Raise di Flop 6-5-2?**
- seoTitle: **Check Dulu, Raise Kapan? — Poker di Flop 6-5-2**
- desc: **BB check 96,8% pada 6-5-2. Pelajari mengapa lead jarang dipilih, lalu bedakan hasil awal dengan perhitungan lanjutan untuk check-raise.**
- 핵심 질문: **Hand apa yang dipakai BB untuk check-raise di 6-5-2?**
- 짧은 라벨: **652 rendah rainbow**
- 보조 질문: **Mengapa BB jarang donk bet? / Dari mana frekuensi check-raise 14,9% berasal?**
- 경계: 기본 예제 root lead 3,2%와 별도 solve root lead 2,0%·후속 check-raise 14,9%는 다른 측정이다.

### ⑧ 3bet-pot-cbet

- title: **BB Tidak Check di A-K-2: Mengapa?**
- seoTitle: **BB Bet 100% — C-Bet Pot 3-Bet di A-K-2**
- desc: **Di pot 3-bet A-K-2, BB bet 100% range. Lihat peran range preflop, SPR 4,0, dan dua ukuran taruhan tanpa menganggap semua flop harus dibet.**
- 핵심 질문: **Mengapa BB bet seluruh range pada A-K-2 dalam pot 3-bet?**
- 짧은 라벨: **AK2 pot 3-bet · SPR 4,0**
- 보조 질문: **Apa itu SPR di poker? / Mengapa ukuran kecil lebih sering dipilih?**
- 경계: SPR 4,0 하나로 sizing 원인을 설명하지 않는다. 0% 선택만으로 임의 EV 손실을 계산하지 않는다.

### ⑨ 3bet-pot-bet-sizing

- title: **Dua Ukuran, Bet Besar 98,4% di Q-T-7**
- seoTitle: **Bet Besar 98,4% — Bet Sizing Pot 3-Bet di Q-T-7**
- desc: **Dua ukuran tersedia, tetapi bet besar dipilih 98,4% di Q-T-7. Pelajari harga draw, bentuk range, dan geometric bet sizing dalam pot 3-bet.**
- 핵심 질문: **Mengapa bet dua pertiga pot mendominasi pada Q-T-7?**
- 짧은 라벨: **QT7 pot 3-bet two-tone**
- 보조 질문: **Apa itu geometric bet sizing? / Apakah 98,4% adalah seluruh frekuensi bet?**
- 경계: 98,4%는 큰 bet만이며 bet 합 99,1%와 다르다. JJ는 Q 밑·T 위, AJ는 A overcard 한 장이다.

### ⑩ 3bet-pot-low-board

- title: **Jarang Kena Flop, Bet Besar 97,8%?**
- seoTitle: **Jarang Kena Flop, Bet Besar — Pot 3-Bet di 8-5-2**
- desc: **Hanya tiga combo BB membentuk pair dengan 8-5-2, tetapi bet besar mencapai 97,8%. Lihat mengapa overpair dan As-high membentuk range terpolarisasi.**
- 핵심 질문: **Mengapa BB bet besar di 8-5-2 meski jarang membentuk pair dengan board?**
- 짧은 라벨: **852 pot 3-bet kering**
- 보조 질문: **Apakah BB memiliki set? / Apa arti range terpolarisasi?**
- 경계: ‘hanya tiga combo’는 board와 pair를 만드는 combo이며 기존 overpair를 약한 hand로 분류하지 않는다.

### ⑪ blind-battle-cbet

- title: **Tanpa Posisi, SB Bet 67,4% di K-T-6**
- seoTitle: **Tanpa Posisi, Tetap Bet — C-Bet SB vs BB di K-T-6**
- desc: **SB bertindak lebih dulu tetapi bet 67,4% di K-T-6. Lihat bagaimana peran sebagai raiser dan tekstur board mengubah strategi blind vs blind.**
- 핵심 질문: **Mengapa SB tetap sering c-bet tanpa posisi di K-T-6?**
- 짧은 라벨: **KT6 · SB vs BB**
- 보조 질문: **Apa yang berubah saat OOP adalah raiser? / Mengapa realisasi equity dapat melebihi 100%?**
- 경계: OOP인 opener의 c-bet은 caller의 donk bet과 다르다.

### ⑫ blind-battle-connected-board

- title: **Ganti Board, C-Bet Turun ke 9,6%**
- seoTitle: **C-Bet Turun ke 9,6% — SB vs BB di Flop 7-6-5**
- desc: **Range dan stack sama, tetapi SB hanya bet 9,6% di 7-6-5. Bandingkan dengan K-T-6 untuk melihat bagaimana board terhubung mengubah strategi.**
- 핵심 질문: **Mengapa c-bet SB turun saat board berubah menjadi 7-6-5?**
- 짧은 라벨: **765 terhubung · SB vs BB**
- 보조 질문: **Siapa unggul dalam equity di sini? / Hand mana yang tetap bet?**
- 경계: 두 스팟 입력 range 같음과 board 제거 뒤 live combo 수 같음을 혼동하지 않는다.

### ⑬ ace-paired-board-strategy

- title: **Dua As di Flop, SB Bet 80,1%**
- seoTitle: **Dua As, Bet Meningkat — Strategi Board A-A-6**
- desc: **Board berpasangan tidak selalu menuntut check. Di A-A-6, SB bet 80,1%. Bandingkan trips, range, dan sizing dengan board 6-6-3 serta 7-6-5.**
- 핵심 질문: **Mengapa SB sering bet saat dua As muncul di flop?**
- 짧은 라벨: **AA6 As berpasangan**
- 보조 질문: **Siapa memiliki lebih banyak trips As? / Mengapa bet besar hampir tidak dipakai?**
- 경계: 6-6-3 비교는 포지션·프리플랍 역할·range도 다르다. ‘pair의 랭크만 바꿔서 실험’했다고 쓰지 않는다.

## 3. 조사 방법과 확인 범위

읽은 정본: AGENTS.md, CLAUDE.md, session-handoff.md, posting.mdc 전문; ID 인계, ID posting-reference 전문, id-core-volumes 머리·odds·strategy·tournament 실측표, id-solver-landing-brief, translation-terms-id 최신 라우팅·기본 표기, rakko-playbook의 도구·언어·지역 규칙, PT source contract 및 현재 EN의 제목·H2·tldr.

`docs/market-profile/id.md` 및 `docs/local-voice/`의 ID 파일은 현재 목록에 없다. 없는 문서를 읽었다고 보고하지 않는다. ID 언어 정본은 기존 reference §5·§5-A와 이번 실제 언어 표본이다.

### 현재 실측

- DataForSEO `serp/google/organic/live/advanced`: **location_code 2360(Indonesia), language_code id, mobile/android, depth 20**. 3개 시드의 organic 상위 10개를 확보했다. 수신 시각 **2026-09-15 03:45:50~57 UTC**. raw: `tmp/id-gto-research/{gto-poker,c-bet-poker,donk-bet-poker}.json`.
- 첫 depth 10 호출은 organic 결과가 각각 7/8/8개여서 **Top10 완료라고 보고하지 않고 depth 20으로 보충**했다. 2회 호출 사이 순위 변동은 실제 반환값이며 최종 표는 depth 20의 `rank_group` 기준이다.
- Google 자동완성: `client=firefox&hl=id`로 8개 시드 확인. **요청 IP는 Indonesia로 통제되지 않으므로 ‘인도네시아 거주자 자동완성’으로 해석하지 않는다.** 국가별 수요는 위 DFS 위치 지정 SERP와 기존 볼륨표로만 판단한다.
- 웹 검색은 인도네시아어 조합으로 3회 이상 수행했다. 검색 결과는 URL 발견에만 사용하고, 아래 페이지의 실제 원문을 별도로 읽었다.
- **새 검색량 측정은 하지 않았다.** `gto poker 50`, `range poker 20`, `c bet poker/3 bet poker/check raise poker 10`은 2026-08-27~09-04의 기존 기록이며 오늘의 검색량이 아니다. NULL은 ‘수요 0의 증명’이 아니다.
- PAA: **donk bet poker에 ‘Apa itu raise poker?’ 하나가 반환**됐다. gto poker와 c bet poker의 이번 응답에는 `people_also_ask` 항목이 없었다. `people_also_search`는 PAA가 아니다. AI Overview는 전략 사실 출처로 쓰지 않았다.

### 검색 의도 판정

1. **GTO 일반 축은 브랜드·정의·도구 혼합**. gto poker 상위에는 GTO Wizard와 영어를 ID로 구글 번역한 설명 페이지가 함께 나온다. 우리의 무료 도구 의도는 `/id/solver`에 모으고, 13편 모두를 ‘GTO poker란 무엇인가’로 시작하지 않는다.
2. **c-bet/donk bet의 세부 전략 검색은 영어 혼종**. ‘kapan c bet poker’, ‘strategi donk bet poker’, ‘cara belajar gto poker’, ‘strategi poker flop’ 자동완성은 빈 배열이었다. 그럴듯한 ID 질문을 ‘검색량 높은 롱테일’이라고 꾸미지 않는다.
3. **교육 페이지에서 더 줄 것 3가지**: 실제 ID 앱 화면과 재현 경로; 같은 조건/다른 보드 비교표; root 결과와 후속 노드를 구분한 수치·해설. 범용 정의·수익 약속을 늘리는 것이 차별점이 아니다.

### 실제 원문 언어 표본

| 원문 | 확인한 구조·어휘 | 채택 / 제한 |
|---|---|---|
| [GGPoker ID: Taruhan Donk](https://ggpoker.com/id/blog/the-donk-bet/) | 정의→어원→장단점→언제 사용→마무리. Anda, donk bet, pre-flop, suited가 혼재 | `Kapan …`형과 영어 용어 실재 확인. `bertaruh di luar giliran`(차례 밖 베팅) 같은 잘못된 번역은 채택하지 않는다. sizing·빈도 근거로 쓰지 않는다. |
| [POKER Q'z 공식 ID 앱 소개](https://apps.apple.com/id/app/pelatih-gto-ai-poker-qz/id6737678499?l=id) | 학습 기능→대상 독자, range·board·GTO·ukuran taruhan·Anda | 도구 언어에서 영어 전문어와 ID 설명을 섞는 패턴 확인. 경쟁 앱 기능·가격을 우리 글로 옮기지 않는다. |
| [r/indonesia 실제 사용자 AMA](https://www.reddit.com/r/indonesia/comments/1g8ijvw/saya_adalah_pemain_poker_semiprofessional_ama/) | 학습자료 질문, solver를 체스 engine에 비유, bet/check/call/fold 그대로 | 로컬 사용자 **1인의 표본**일 뿐 시장 전체 조사로 일반화하지 않는다. ‘인니어 자료가 전혀 없다’·수익·전략 주장은 사실 근거로 인용하지 않는다. |

GGPoker ID c-bet 글은 검색으로 발견했지만 web open이 cache miss였다. Poker Academy ID 페이지도 web open에서 실패했다. 검색 스니펫을 ‘원문 읽음’으로 바꾸어 기록하지 않는다. 추가 DOM 수집 결과가 확보되면 아래 경쟁 페이지 표에만 보충한다.

## 4. 경쟁 SERP와 페이지 구조

아래에 실제 순위와 DOM 구조 추출 결과를 이어 기록한다. 순위는 2026-09-15의 한 번의 위치 지정 관측이며 영구 순위가 아니다.

### 4-A. Google Indonesia 모바일 organic Top10

광고·AI Overview·동영상 묶음을 제외한 `rank_group` 순서다. Google 번역 URL은 실제 결과 URL로 보존했다. YouTube 결과는 organic에도 들어가며 영상 본문 분석은 하지 않았다. 검색 결과 제목이 Google Play를 흉내 내지만 도메인이 다르면 공식 앱 출처로 인정하지 않았다.

#### gto poker

| 순위 | 실제 제목 · URL | 원문 확인 상태 |
|---:|---|---|
| 1 | [GTO Wizard - The #1 App for Poker Players](https://gtowizard.com/) | DOM 수신 |
| 2 | [Aplikasi Android dari ThinkGTO di Google Play](https://play.google.com/store/apps/dev?id=4764932309994118741&hl=id) | DOM 수신 · 부분 추출/도구 페이지 |
| 3 | [Apa itu GTO dalam Poker?](https://translate.google.com/translate?u=https://upswingpoker.com/glossary/gto/&hl=id&sl=en&tl=id&client=srp) | DOM 수신 · 부분 추출/도구 페이지 |
| 4 | [GTO Poker 101: Kuasai Implikasi Optimal Teori Permainan](https://translate.google.com/translate?u=https://www.pokercode.com/blog/gto-poker&hl=id&sl=en&tl=id&client=srp) | HTTP 403 |
| 5 | [Everything you need to know about GTO in poker; FAQ/common ...](https://www.reddit.com/r/poker/comments/pu4ph4/everything_you_need_to_know_about_gto_in_poker/) | DOM 추출 실패 |
| 6 | [GTO LAB ／ Tournament Poker Coaching, ICM Trainer & GTO ...](https://gtolab.com/) | DOM 수신 |
| 7 | [Teori Permainan Optimal (GTO) Texas Holdem Poker - Cornell blogs](https://translate.google.com/translate?u=https://blogs.cornell.edu/info2040/2021/11/03/game-theory-optimal-gto-texas-holdem-poker-theory/&hl=id&sl=en&tl=id&client=srp) | DOM 수신 |
| 8 | [How to Play GTO Poker](https://www.youtube.com/watch?v=XMlQy3dR9K8) | 영상 결과 · 영상 분석 제외 |
| 9 | [GTO Poker Is A Trap ／ Here's What Actually Wins](https://www.youtube.com/watch?v=XeecPBb6ODs) | 영상 결과 · 영상 분석 제외 |
| 10 | [GTOBase - GTO Poker Strategy Viewer, Trainer and HH Analyzer](https://gtobase.com/) | DOM 수신 |

#### c bet poker

| 순위 | 실제 제목 · URL | 원문 확인 상태 |
|---:|---|---|
| 1 | [C-Betting Explained ／ What is a C-bet in Poker?](https://www.pokernews.com/pokerterms/continuation-bet.htm) | DOM 수신 |
| 2 | [Continuation Betting in Poker](https://www.pokerstars.com/poker/learn/lesson/c-betting/) | DOM 수신 |
| 3 | [c bet poker meaning – Apps on Google Play](https://wovodat.phivolcs.dost.gov.ph/store/apps/details/?id=c-bet-poker-meaning&hl=en) | Google Play와 다른 도메인 · 제외 |
| 4 | [What Are Continuation Bets in Poker? - 2026](https://www.masterclass.com/articles/what-are-continuation-bets-in-poker) | HTTP 403 |
| 5 | [The Fundamentals of C-Betting : r/poker](https://www.reddit.com/r/poker/comments/704x0n/the_fundamentals_of_cbetting/) | DOM 추출 실패 |
| 6 | [Cbet - Lexique poker : définitions, glossaire poker - Club Poker](https://www.clubpoker.net/amp/definition/cbet/definition-95.amp.html) | HTTP 403 |
| 7 | [C-Betting - PokerStars Learn](https://www.pokerstars.com/poker/learn/lesson/6-max-cash-game-guide-c-betting/) | DOM 수신 |
| 8 | [What is a Continuation Bet (C-Bet) & Why Does It Matter?](https://upswingpoker.com/what-is-continuation-bet-poker/) | DOM 수신 · 부분 추출/도구 페이지 |
| 9 | [What Most Players Get Wrong About C-Betting in Poker](https://pokercoaching.com/blog/c-betting-in-poker/) | DOM 수신 |
| 10 | [c bet poker – Apps on Google Play](https://wovodat.phivolcs.dost.gov.ph/store/apps/details/?id=c-bet-poker&hl=en) | Google Play와 다른 도메인 · 제외 |

#### donk bet poker

| 순위 | 실제 제목 · URL | 원문 확인 상태 |
|---:|---|---|
| 1 | [what do donk bets normally mean? : r/poker](https://www.reddit.com/r/poker/comments/zhzjpo/what_do_donk_bets_normally_mean/) | DOM 추출 실패 |
| 2 | [Why is Donk betting bad in poker?](https://www.quora.com/Why-is-Donk-betting-bad-in-poker) | 접근 안 함 |
| 3 | [Standard Lines: Donk bet](https://www.pokerstrategy.com/strategy/fixed-limit/standard-lines-donk-bet/) | DOM 수신 |
| 4 | [How and Why You Should Use Turn Donk Bets](https://blog.gtowizard.com/how-and-why-you-should-use-turn-donk-bets/) | DOM 수신 · 부분 추출/도구 페이지 |
| 5 | [Donk Bet - Poker Statistics](https://pokercopilot.com/poker-statistics/donk-bet) | DOM 수신 |
| 6 | [Mastering the Donk Bet (3 Pro Tips for Max EV)](https://upswingpoker.com/donk-betting-lucid/) | DOM 수신 · 부분 추출/도구 페이지 |
| 7 | [A detailed definition of a Donk Bet](https://poker.stackexchange.com/questions/9754/a-detailed-definition-of-a-donk-bet) | HTTP 403 |
| 8 | [Donk Betting: What It Is and When To Do It](https://www.pokerstars.uk/poker/learn/strategies/donk-betting-what-it-is-and-when-to-do-it/) | DOM 수신 |
| 9 | [What is Donk Bet in Poker?](https://www.888poker.com/magazine/poker-terms/donk) | DOM 수신 |
| 10 | [Learn Poker Donk Bet Meaning & Definition](https://www.pokercode.com/terms/donk-bet) | HTTP 403 |

### 4-B. 실제 DOM으로 확인한 경쟁 글 구조

선택한 `article` 또는 `main`의 `innerText`와 H1/H2/H3를 직접 읽었다. 단어수는 화면의 해당 컨테이너에서 공백으로 분리한 **비교용 값**이고 독립적인 기사 길이 지표가 아니다. 헤더·추천 카드가 섞이거나 동적 본문이 비어 있는 곳은 분량 판정에서 제외했다. 전체 추출 원문은 `tmp/id-gto-research/page-structure.json`에 있다.

| 페이지 | 읽은 주요 구조 / FAQ | 비교 판단 |
|---|---|---|
| [PokerNews c-bet](https://www.pokernews.com/pokerterms/continuation-bet.htm) | 정의→예시→이유→피해야 할 때→사이즈→턴→FAQ. FAQ는 빈도·전략·3-bet pot·블러프·폴드 기준. | 본문 DOM 약 1.483단어, table 0. 폭넓은 입문형. 우리의 보드별 정량 해설과 분리된다. |
| [PokerStars c-betting](https://www.pokerstars.com/poker/learn/lesson/c-betting/) | 정의→value/bluff/semi-bluff→board·stack·상대→작은/큰 sizing→실수→FAQ. | 본문 DOM 약 2.656단어, table 0. 예시·질문은 좋지만 실제 ID 솔버 출력/조건표는 없다. |
| [PokerCoaching c-betting](https://pokercoaching.com/blog/c-betting-in-poker/) | 토너먼트·cash 예시→IP/OOP→range advantage→multiway→sizing→연습→delayed c-bet→FAQ. | 본문 DOM 약 2.896단어, table 0. 전략 적용 맥락이 넓다. 우리 글은 같은 보드의 root와 다음 노드를 명료하게 설명한다. |
| [PokerStars 6-max c-betting](https://www.pokerstars.com/poker/learn/lesson/6-max-cash-game-guide-c-betting/) | 본문 중심의 6-max 수업, 별도 H2 FAQ 없음. | 본문 DOM 약 705단어, table 0. |
| [Poker Copilot donk bet](https://pokercopilot.com/poker-statistics/donk-bet) | 정의→부정적 이미지→대응→min donk→HUD 통계→해석→언제 사용. | 본문 DOM 약 1.227단어, table 0. HUD 통계 분모 설명이 주제이며 우리 개별 solve 빈도와 동일시하지 않는다. |
| [PokerStrategy donk bet](https://www.pokerstrategy.com/strategy/fixed-limit/standard-lines-donk-bet/) | 정의→turn donk→heads-up river donk. | 본문 DOM 약 1.539단어. fixed-limit 수업이므로 NLHE flop 수치 출처로 전용하지 않는다. |
| [PokerStars donk bet](https://www.pokerstars.uk/poker/learn/strategies/donk-betting-what-it-is-and-when-to-do-it/) | 정의→오해 구분→사용 조건→핸드 예시→마무리. | 추천 카드까지 추출돼 단어수 제외. donk bet과 limp/checked-through lead의 구분이 본문에 있다. |
| [888poker donk](https://www.888poker.com/magazine/poker-terms/donk) | 정의→전략→좋은 플레이어도 쓰는지·river lead·donk/fish·호칭 관련 질문. | 본문 DOM 약 1.198단어, table 0. 독자가 궁금해하는 오해를 질문으로 해소하는 형식 참고. |
| [Upswing c-bet](https://upswingpoker.com/what-is-continuation-bet-poker/) | 정의→핸드 복기→IP/OOP→range vs range→multiway라는 H2/H3 확인. | DOM innerText 143단어로 본문 추출 불완전. web open 원문도 따로 열었으나 DOM 분량 비교 제외. |
| [GTO Wizard turn donk](https://blog.gtowizard.com/how-and-why-you-should-use-turn-donk-bets/) | web open으로 원문 접근. DOM은 추천 글만 53단어라 기사 구조 추출 실패. | 턴 전용 해설이며 우리 flop 예제의 빈도 출처로 쓰지 않는다. |

### 4-C. 라이브 접근 차이와 정본 충돌 판정

- **GGPoker ID 두 글:** web open은 donk 글의 캐시된 원문을 제공했지만, 실제 브라우저 요청은 두 URL 모두 **HTTP 404 / 페이지 title 403 Forbidden / Oops! Access Denied**였다. 09/02 뱅크의 접근 실패 기록을 철회할 근거가 아니다. 이번 글의 근거 링크로 추가하지 않는다.
- **Poker Academy `/in`:** 브라우저는 HTTP 200·html lang=id·ID title을 반환했지만 `article`은 영어 문장 58단어만 잡혔다. 전체 ID 본문을 읽었다고 하지 않는다.
- **POKER Q'z:** live redirect 후 title은 **Poker Trainer GTO - POKER Q'z**, html lang=id였다. web cache의 ‘Pelatih GTO AI’ 명칭보다 라이브가 최신이다. 우리 고정어 **Trainer**를 유지하는 데 충돌이 없다.
- **뱅크의 ‘로컬 원문 경쟁자 0’ 표현:** 09/04의 특정 SERP 관측 범위를 넘어서 시장 전체가 비었다고 확대하지 않는다. 이번엔 앱 ID와 언어 표본이 존재함을 확인했다. 낮은 검색량·영어 결과 우세는 여전히 기존 포지셔닝과 정합한다.
- **우리 13편의 메타:** 실제 검색어 확인이 빈약한 자리에 검색량 숫자를 발명하지 않았다. 보드 표기와 c-bet/donk bet/check-raise 등 확인된 전문어에 **재현 가능한 사례 질문**을 붙였다.

### 4-D. 메타 검증

39개 필드 길이 검증: title ≤40, seoTitle ≤60, desc ≤160 전부 통과. ⑤ nut flush 69,9%는 combo 평균이므로 `rata-rata`를 명시했다.
