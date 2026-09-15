# MS GTO 해설 공통 집필 브리프

작성일: 2026-09-15. 범위는 `lib/gto-series.ts`의 ①–⑬이다. 이 문서는 집필 입력이며 발행·검수 완료 기록이 아니다. 검색 근거와 한계는 [이번 키워드 조사](keyword-bank/ms-gto-series.md), 언어 정본은 [ms-posting-reference](keyword-bank/ms-posting-reference.md)를 따른다.

## 1. 원문과 범위

- **최신 EN 전체**가 원문이다. 각 `lib/posts-en/<slug>.ts`의 평가된 Post 본문 전체를 읽고 MS로 작성한다. ID·PT 문장 바꿔쓰기를 하지 않는다.
- 이번 MS 입력 계약은 [ms-gto-source-contract](ms-gto-source-contract.md)다. 숫자·카드·포지션·주어·분모는 `docs/gto-solver-series-spec.md` §4-B 및 [확정 정정 계약](id-gto-source-contract.md) §4–7을 따른다. N01–N24, C01–C12를 모두 승계한다. ID 문체·소수 쉼표·발행일·검수 완료 주장은 가져오지 않는다.
- EN의 전체 절·표·FAQ·수치·고지·디렉티브를 보존한다. FAQ 합계 67은 현재 계약의 구조 확인값이며 사이트의 영구 발행 수치가 아니다. ⑤ 공통조건 H2 없음, ⑩–⑬ FAQ H2 없음도 보존한다.
- 사전 계산은 OOP의 플랍 첫 결정이다. IP 패널의 equity/range가 IP 후속 액션 전략을 뜻하지 않는다. ⑦만 별도 재솔브 후속 노드가 있다. 미래 스트리트 설명은 계산된 사실과 해석·산술을 구분한다.
- GTO 시리즈 전용 규칙에 따라 가짜 개인 경험담을 넣지 않는다. 재현 경로·실제 화면·조건·한계가 근거다. 경쟁 글의 현장 경험·성과를 우리 저자의 경험으로 옮기지 않는다.
- `date`·`updated`는 실제 발행·수정일, `masterUpdated`는 최신 EN 값. 본문 계산 확인일은 역사적 출처 날짜를 유지한다.

## 2. 공통 MS 문체·라벨

| 자리 | 고정값 |
|---|---|
| 독자 호칭 | 문중 **anda**, 문두·제목 **Anda**. kamu/awak 혼용 없음 |
| hand / card | **tangan / kad**. 영어 복합어 외 단독 hand 지양 |
| range / board 첫 설명 | **range (julat tangan)** / **board (kad komuniti)** |
| 영어로 유지 | equity, EV, EQR, check, bet, call, raise, fold, c-bet, 3-bet, flop, turn, river, SPR, OOP, IP, BTN, SB, BB, pot, stack, draw, blocker |
| 설명어 | EV (nilai jangkaan), EQR (realisasi equity), range advantage (kelebihan range), nut advantage (kelebihan pada tangan terkuat) |
| action frequency / weight | **kekerapan / wajaran**. 무게의 berat로 통계 가중치를 번역하지 않음 |
| disadvantage / EV loss | **kelemahan / kerugian EV**. 불리함과 돈 손실 혼동 금지 |
| 직답 블록 | `> **Jawapan ringkas**` |
| 관련글 디렉티브 | `:::readnext[Baca seterusnya]` |
| 읽는 시간 | **N minit**. 기존 입문 글은 minit/min 혼재하나 이번 시리즈는 minit 통일 |
| 공통 표·stripe | `Tetapan \| Nilai`, `Metrik`, `Kategori`, `Kekerapan`, `Kombo`; stripe는 해당 원문 행이 있을 때 `Spot`, `Flop`, `Pot · stack`, `Hasil` |
| 조건표·스택 | Checked 행은 `Tarikh semakan`; effective stack 설명은 `stack efektif`. 원문이 합친 행은 나누지 않고 없는 행을 추가하지 않음 |
| 수치 | `2.5 bb`, `1,326`, `35%`, 소수점 마침표, % 앞 공백 없음 |
| 생활/UI 어휘 | percuma, pelayar, butang, skrin, peranti, tetapan, sambungan, muat turun, semak, kira, selepas, baharu, pratonton, eksport |

문장을 영어 어순대로 늘이지 않는다. 한 문단에 한 가지 이유를 설명하고, 조건부터 짧게 밝힌다. 전문용어는 최초 설명 후 반복 과번역하지 않는다. `saiz bet`, `board kering`, `board bersambung`, `board berpasangan`, `board monotone`를 자연스러운 설명어로 쓴다. 이는 실측 검색량 1위 표현이라는 뜻이 아니다.

금지 잔재: kartu, uang, tombol, layar, perangkat, koneksi, unduh, pengaturan, kustom, hitung, gratis, bisa, karena, coba, silakan, setelah, pratinjau, ekspor. 사전에는 있을 수 있어도 이 프로젝트의 MS 편집 규칙에서 사용하지 않는다. `adalah + 명사`는 ialah 또는 문장 재구성으로 처리한다.

## 3. 제목·SEO 고정안

아래는 2026-09-15 검색 의도와 원문 훅을 결합한 **편집안**이다. Google에서 그대로 수집한 PAA·자동완성이라고 보고하지 않는다. title은 40자 이내, seoTitle은 60자 이내를 목표로 측정한다. desc는 각 편 독자 이득을 담아 최대 160자, tldr는 평문이다.

| # | slug | title | seoTitle |
|---|---|---|---|
| ① | a-high-board-cbet | Top Pair, Mengapa Masih Check? | Top Pair Masih Check — C-Bet Poker GTO pada Flop A72 |
| ② | k-high-board-cbet | BB Check 99.8% pada Flop K83 | Mengapa BB Check 99.8%? — C-Bet Poker GTO pada K83 |
| ③ | broadway-board-strategy | Banyak Draw, Mengapa Check 99.9%? | Draw Banyak, Check 99.9% — Poker GTO pada Board QJT |
| ④ | donk-bet-strategy | Bila Donk Bet Masuk Akal pada 987? | Donk Bet Boleh Betul — Strategi Poker GTO Board 987 |
| ⑤ | monotone-board-strategy | Nut Flush Pun Kerap Check | Nut Flush Kerap Check — Poker GTO Board Monotone |
| ⑥ | paired-board-strategy | Lebih Banyak Trips, Masih Check | Trips Lebih Banyak, Check 97% — Poker GTO Board 663 |
| ⑦ | low-board-check-raise | Tiada Straight, Bila Check-Raise? | Tiada Straight — Bila Check-Raise dalam Poker GTO? |
| ⑧ | 3bet-pot-cbet | BB Langsung Tidak Check pada AK2 | BB Tidak Check — C-Bet Poker GTO dalam Pot 3-Bet |
| ⑨ | 3bet-pot-bet-sizing | Dua Saiz, Satu Hampir Sentiasa Dipilih | Bet Besar 98.4% — Saiz Bet Poker GTO dalam Pot 3-Bet |
| ⑩ | 3bet-pot-low-board | Flop Rendah, Bet Besar 97.8% | Bet Besar 97.8% — Poker GTO Pot 3-Bet pada Flop Rendah |
| ⑪ | blind-battle-cbet | SB Bertindak Dahulu, Bet 67.4% | SB Bet 67.4% — C-Bet Poker GTO Blind Lawan Blind |
| ⑫ | blind-battle-connected-board | Board Berubah, Bet Turun ke 9.6% | Bet Turun ke 9.6% — Poker GTO Board Bersambung 765 |
| ⑬ | ace-paired-board-strategy | Dua Ace, Bet Meningkat ke 80.1% | Dua Ace, Bet 80.1% — Poker GTO Board Berpasangan AA6 |

표현이 본문 뜻을 거짓으로 압축하면 정확성이 우선이다. ⑧의 주어는 BB다. ⑤ 70% 근사는 nut flush 8콤보 평균69.9이며 A♠J♠ 단독83.4와 다르다. ⑩의97.8%는 큰 bet 빈도이며 전체 bet는98.1%다. 제목·메타에서도 besar를 생략하지 않는다. ⑫ 이전값67.4와 이번9.6의 비교 조건을 본문에서 명시한다.

## 4. 실제 MS 앱·이미지

- 새 앱 실측 파일: `tmp/ms-solver-ui-verbatim.json`(작업 중 증거). root/tooling 담당이 현재 캡처와 대응시킨 실제 버튼·스팟 제목만 쓴다. 9월14일 브리프를 최신 캡처라고 보고하지 않는다.
- 2026-09-15 tooling 담당의 실제 DOM 확인: `Spot belajar ⚡ Segera` → 해당 스팟 제목 → `⚡ Lihat hasil`; 직접 계산은 `Kira sendiri` 또는 `Kira sendiri spot ini`. 이후 `Bina Tree` → `Jalankan Solver`. ⑦ 리스트의 오래된 후속노드 안내는 인용하지 않는다. 사전 결과는 root만이며 직접계산 경로와 구별한다.
- 실제 스팟 제목: ① `Board kering A-high`, ② `Board kering K-high`, ③ `Board Broadway bersambung, two-tone`, ④ `Board tengah bersambung, two-tone`, ⑤ `Board monotone (satu suit)`, ⑥ `Board paired`, ⑦ `Board rendah rainbow`, ⑧ `Board A-high, kelebihan 3-bettor`, ⑨ `Board dinamik two-tone`, ⑩ `Board rendah kering`, ⑪ `Board K-high dengan T`, ⑫ `Board rendah bersambung, two-tone`, ⑬ `Board dengan dua Ace`.
- 실제 결과 라벨: `Tangan`, `Draw`, `Ringkasan`, `Wajaran`, `Semua`, `Pemain:`, `Lebar bar:`, `Dinormalkan`, `Mutlak`, `Penuh`, `Paparan:`, `% aksi`, `EV aksi`. Tangan 분류는 `Quads`, `Full House`, `Flush`, `Straight`, `Set/Trips`, `Two Pair`, `Overpair`, `Top Pair`, `Second Pair`, `Pair lemah`, `Underpair`, `Ace-High`, `King-High`, `Tiada made hand`. Draw 분류는 `Combo draw`, `Flush draw`, `OESD`, `Gutshot`, `Backdoor FD`, `Tiada draw`. 버튼·표 인용에는 축어를 유지한다. `Tiada made hand`를 A-high까지 포함하는 전체 no-pair로 번역하지 않는다.
- 링크는 `https://solver.holdemmaster.com/?lang=ms`. 언어 선택기가 있다는 안내 없음.
- 사전 계산 예제·오늘의 문제 기록만 선택적으로 계정 동기화된다. 직접 계산한 스팟의 Trainer 문제와 기록은 로그인해도 기기에 저장된다. 익명 기록은 브라우저에 남는다는 조건을 유지한다.
- 교육 예제의 목표 오차0.5%를 커스텀 기본값이라고 쓰지 않는다. 목표달성·특정 반복횟수 보장 없음.
- 각 글: Post.image 히어로1+본문 chart1. content에 히어로 중복 삽입 없음. 실제 파일명은 기존 공통 베이스+`-ms.webp`를 사용하며 media 담당 최종 manifest와 대조한다. readnext·thumb는 링크 대상의 진짜 MS hero를 쓴다.

## 5. 내부 링크 계약

허브 링크는 `/ms/solver`다. EN에서 앞에 형제 글을 먼저 인용한 편은 그 순서를 보존하며, 전체 시리즈 목차를 매 글에 새로 넣지 않는다. 이전·다음은 `lib/gto-series.ts` 순서다. 기존 EN inline 링크 슬롯 수는 유지하되 없는 MS 대상은 아래 승인된 범위로 대체한다.

| EN 대상 | 유효 MS 대상 | 앵커가 설명해야 하는 실제 범위 |
|---|---|---|
| holdem-continuation-bet, holdem-equity, holdem-implied-odds, holdem-strategy | `/ms/solver` | solver·range/equity 분석·해당 사용 방법. 전문 개별 가이드인 척하지 않음 |
| holdem-position-play | `/ms/blog/holdem-game-order` | urutan tindakan / posisi |
| holdem-drawing-odds, holdem-pot-odds | `/ms/blog/texas-holdem-rules-for-beginners` | asas pot odds / peluang draw |
| holdem-3bet | `/ms/blog/holdem-betting-actions` | peraturan raise / 3-bet |

readnext는 **실제 MS blog 글 2개**로 별도 선택한다. 관련 시리즈·기존 입문 글을 사용하며 root가 title·hero를 최종 일치시킨다. 없는 `/ms/hand-chart`, `/ms/calculator` 링크 생성 금지. 이번 새 시리즈 slug의 실제 등록은 root가 확인한다.

## 6. 집필 후 필요한 대조

①–④ / ⑤–⑧ / ⑨–⑬로 나누어 각 담당이 전체 원문과 표를 확인한다. 신규 공통 절 추가·요약 축소·수치 임의 보정 없음. 기계 비교는 실제13편 커버리지, H2/FAQ/표/디렉티브, 수치·카드·역할·링크를 확인한다. 전량 작성 후 MS 언어·SEO·전략·수치 독립 검수1회, 정정된 부분 교열1회다. 실제 인간 현지 전문가를 고용했다고 보고하지 않는다.
