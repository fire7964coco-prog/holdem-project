# id 포스팅 참고 파일 — 경화 작업 축적 정보 전반 (신규 발행·경화 공용)

> **용도**: id 신규 포스팅·경화 착수 전 통독하는 참고 자료. **id 경화 트랙(세션 4~, 2026-08-27~)
> 에서 얻은 정보를 전부 축적한다** — 키워드 실측·발굴 원자료·의도 판정·현지화 노트·커버리지 맵·
> 검증된 사실 자산(§13·룰 번호)·글별 경화 상태·함정과 교훈.
> 🔴 **볼륨 수치의 정본은 `id-core-volumes.md`**, 미결·할 일 관리의 정본은 `session-handoff.md`다 —
> 여긴 참고 축적이지 관리 장부가 아니다. 새 회차가 끝나면 이 파일에 절·행을 추가한다(덮어쓰지 말 것).

---

## 1. id 조사 도구 사용법 (실측 검증된 경로)

| 용도 | 도구 | 비고 |
|---|---|---|
| **발굴** | DFS Labs `keyword_suggestions`(location=Indonesia·language=id — kd 동봉) + 구글 자동완성(`hl=id`) | 라쿠 발굴계 22종은 Japan 고정이라 **id 발굴 금지** |
| **볼륨·시계열** | 라쿠 `search-volume-history`(Indonesia·Indonesian·48m — yoy 공짜) | 언어당 15크레딧 정액, 키워드 수백 개 몰아넣기 |
| **교차검증** | DFS REST `google_ads/search_volume` | 2026-08-27 실측: **라쿠와 15/15 완전 일치** — 두 벤더 다 구글 KWP 중계 |
| **의도 분해** | 자동완성 `suggestqueries.google.com/complete/search?client=firefox&hl=id&q=` | 자릿수 함정 차단의 본체(§3) |

⚠ DFS **MCP**가 40100이면 프로세스가 env 등록 전에 뜬 것 — REST 직접(자격증명 = `.env.local`,
처방 = `docs/rakko-playbook.md` 2026-08-27 절). CPC는 벤더 간 30배 — 근거 금지.

## 2. 발굴 원자료 — DFS Labs 서제스트 (2026-08-27 · 뱅크 미수록분 포함)

### 2-1. «kartu remi» 생태계 (🔴 광의 — remi = 카드/러미 일반. 포커 명시형만 조준)

| 키워드 | vol | kd | 의도 판정 |
|---|--:|--:|---|
| kartu remi / remi kartu / kartu as remi | 각 33.100 | 0~2 | 카드 실물·러미 게임 일반 — **포커 조준 금지** |
| jumlah kartu remi | 3.600 | 2 | «몇 장?» 잡학 — 포커 아님 |
| cara main kartu remi | 2.400 | 8 | 러미 놀이법 — ⚠ «cara main poker kartu remi» 140(+300%↑)만 포커 |
| gambar / ukuran / harga kartu remi | 2.400/1.600/1.300 | 0 | 실물 카드 쇼핑·이미지 — 폐기 |
| permainan/game kartu remi | 각 1.900 | 0~6 | 앱·게임 일반 |
| kartu remi joker / ada berapa / nama-nama | 1.600/1.600/880 | 0~6 | 잡학 — 포커 밖 |
| **urutan kartu remi** | 1.600 | **8** | 카드 순서 질문 — hand-rankings FAQ로 흡수됨(§4) |
| **urutan kartu remi tertinggi (sampai terendah)** | 1.300 (110·+244%↑↑) | 8 | 〃 급성장 신생 |

→ **결론**: remi 헤드텀들은 볼륨이 커도 포커 의도가 아니다. 포커 몫은 «urutan … remi (poker)»
   질문축뿐이고 이미 필라 FAQ가 흡수. **remi 단독 신규 글 근거 없음.**

### 2-2. rankings 축 롱테일 (뱅크 배치 3에 실측 있음 — 여긴 kd·판정 보강)

- `urutan kartu poker` 계열 kd 14~20(전부 낮음) — **이 축은 SERP가 무르다.**
- 자동완성 완전 목록(urutan kartu poker + …): dari tertinggi sampai terendah · tertinggi ·
  **simbol** · **super royal flush** · texas · terkuat · dari terendah · **gambar** · holdem
  → gambar(이미지 의도)·dari terendah는 null — 조치 불요. 나머지 전부 필라가 커버.
- `kartu tertinggi di poker` 210 (12m +116% · **yoy1y +586%**) — 급성장 질문축, FAQ 커버 완료.
- flush 축: `flush in poker`(720)·`royal flush in poker`(390) 등 **영어 혼종 쿼리가 id SERP에
  실재** — 인도네시아 검색자가 영어로도 친다. 태그는 id형 우선, 본문에 영어 용어 자연 병기.

### 2-3. 저볼륨 확정 (측정 완료 — 재조사 불요)

kicker poker 10 · split pot poker 10 · cara membaca kartu poker 10 · poker 4 kartu sama null ·
kicker meaning/what is a kicker 각 10 · poker flush vs straight 10 → **전부 흡수 전략.**
kicker·tiebreak·split-pot·reading 4편은 id 검색축이 없다 — 이 4편의 경화 본체는
볼륨 재조준이 아니라 **드리프트 소급 + EN 경화분 현지화 이식**이다(세션 5 선례).

## 3. 🔴 의도 판정 기록 — 자릿수 함정 (채택 전 반드시 이 표 확인)

| 키워드 | vol | 자동완성 실측 의도 | 판정 |
|---|--:|---|---|
| **full house** | 22.200 | 한국 드라마(korea·drakor·OST·tahun berapa) 지배 | 🔴 채택 금지 |
| full house poker | 1.000 | Xbox 게임 동명 혼재 | 태그 보류 — 본문 커버리지만 |
| **all in artinya** | 14.800 | 비포커 슬랭(bahasa gaul·ML 게임·연애·직장) | 🔴 채택 금지(세션 4 판정) |
| **flush artinya** | — | 변기 flush·ink flush 지배. royal/straight flush artinya만 포커 | 단독 금지 — 결합형만 |
| royal flush | 2.400 | 포커 우세(adalah·vs quad aces·card·chance) | ✅ 커버리지 OK(단독 글 금지) |
| **seri poker** | 90↓ | 영어 «poker series»(netflix·world·2026) 지배 | 🔴 split-pot에 쓰지 마라 |
| **apa itu kicker** | — | 비포커(roblox·kicker light·bullish kicker 캔들) | 🔴 제목 단독 사용 금지 |
| kartu sama | — | SIM카드·BPJS 노이즈 100% | 🔴 시드로도 쓰지 마라 |
| royal flush **adalah vs artinya** | 260↓ / 170↑ | 표현이 adalah→**artinya**로 이동 중 | FAQ 문형에 artinya 채택 |
| **urutan kartu poker super royal flush** | 90 · +325%↑ | 비표준 용어(표준 족보에 없음) — 필라가 신화격파 FAQ로 흡수 | ⚠ 기원(로컬 앱 잭팟 용어설)은 **1차 출처 미확보 — 본문에 기원 서술 금지**(중립 문안 유지). 실제 룸 잭팟 규정을 Playwright로 원문 확인하면 승격 가능 |

## 4. 커버리지 맵 — 실측 키워드가 어느 글에 있나 (카니발 방지)

| 축 | 소유 글 | 자리 |
|---|---|---|
| cara main poker 4.400 · kartu remi 140 · 2 kartu ~240 · tongkrongan 260 | `texas-holdem-rules-for-beginners` | title·태그·FAQ (세션 4) |
| «cara main texas holdem»(50·+106%) | `holdem-game-order`가 seoTitle 보유 — 태그는 세션 4에서 필라로 양보 | |
| rules 태그 양보 관계(세션 4 카니발 해소) | all-in↔showdown 어순쌍 → **showdown 존치**·all-in은 re-raise 축 / game-order는 cara main·aturan texas holdem·showdown poker 3종 양보 후 «urutan taruhan poker» 보유 | 새 글이 이 축들을 다시 물지 마라 |
| urutan kartu poker 1.900 · tertinggi 1.300 · dari tertinggi sampai terendah 480 · susunan/kombinasi 320 · remi poker · kartu tertinggi 210 · super royal flush · simbol/lambang | `holdem-hand-rankings` | title·seoTitle·H2·태그·FAQ (세션 5) |
| flush poker 720 · straight poker 390 · royal/straight flush artinya · apa itu flush 40 | `holdem-flush-vs-straight` | 태그·FAQ·본문 |
| istilah poker 110(+27%) | ⏭ `holdem-glossary` — **세션 8 몫**(예약) | |
| 필라 인바운드 앵커 | 형제 5편 전부 «urutan kartu poker» 계열로 통일(세션 5) — 새 글도 이 앵커 사용 | |

## 5. 현지화 노트 — 네이티브 렌즈 판정 축적 (신규 작성 시 그대로 적용)

- **영어 용어 통용**: flush·straight·kicker·chop·straddle·buy-in·bubble은 영어 그대로 —
  과번역이 오히려 결함. 커뮤니티 실사용 기준.
- **보드 = board**: 현지 커뮤니티는 커뮤니티 카드를 board라 부른다. `meja`는 «테이블(자리)» —
  `meja berpasangan`(테이블이 페어됐다)류는 어색. ⚠ 기존 코퍼스는 meja 우세 4편·board 우세
  2편으로 분열(핸드오프 미결 — 통일 판정 대기). **신규 글은 board로 써라.**
- **어형**: 반전 훅엔 `ternyata`(«Kira menang, ternyata kalah?») · 복수형 영어 -s + id 접속
  혼종 금지(«kings dan nines» ✗ → «dua pair K dan 9») · 서수는 id로(«first kicker» ✗ →
  «kicker pertama») · «edge case» 직역(kasus tepi) ✗ → kasus langka/khusus.
- **무생물 주어 `ia` 남발 금지**(기계번역 냄새) — FAQ·tldr 등 노출 자리는 명사 반복/주어 생략.
- **직역 지뢰 실례**(세션 4~5에서 교정된 것 — 새 글에서 재생산 금지): menyewa board(rent 직역) ·
  tanda bintangnya(asterisk 직역) · jangan berkedip(don't blink) · melawan sebagian besar deck ·
  jarum jam(clockwise — searah jarum jam으로) · pohon keahlian(skill tree) · felt(원어 노출) ·
  kalian → **Anda berdua**(복수 2인칭) · «saya kalahkan»(lost를 이겼다로) · kasus tepi(edge case).
- **문체·용어 판정(세션 4 확정)**: 독자 호칭은 **Anda 통일**(e9360461 전수 정리) · 액션 목록
  라벨은 «Pilihan di Giliran Anda»형(aksi ↔ langkah 충돌 시 Pilihan — pt «jogadas» 대응) ·
  단위 증가는 inkremen 통일 · tangan은 «판» 뜻으론 금지(hand로).
- **GEO 직답 H3 어형 선례**(세션 4): «Ringkasan Alur …» · «Siapa Jalan Duluan …» ·
  «Siapa Bertindak Duluan …» — 명사구+질문 혼합형이 id 실검색 형태소와 정합(영어 질문형 직역 금지).
- ~~**표기 분열 미결 3종**(코퍼스 판정 대기)~~ → ✅ **2026-09-02 솔버 세션이 문장 수로 실측해 닫았다**(아래 🆕 §5-A): 액션=check(146 vs cek 78 — cek는 «확인» 뜻) · 판=hand · 보드=**board 380 vs papan 7**(«meja 4편 우세»는 파일 수 착시) · 본문 산문은 As(키워드 «ace kicker»는 영어 유지).
- **메타 규격**: readTime 단위 = `mnt`(코퍼스 전편 — min/menit 아님. outs «11 min»이 마지막
  이탈이었고 세션 6에서 해소) · readnext 라벨 = `Lanjut membaca`(33편 표준 — Lanjut baca 6·
  Terus baca는 세션 6에서 소멸) · 관련글 H2 = **`Postingan Terkait`**(⚠ 2026-08-27 정정 —
  구판이 Artikel Terkait라 적었으나 코퍼스 실측 23:12로 Postingan이 다수. 통일 방향은 코퍼스가
  심판) · seoTitle ~60자 · desc ≤160자.
- **probability 허브 지칭 = «bagan»**(세션 6 통일): 그 글 title이 Bagan인데 인바운드 앵커가
  tabel 8/chart 4로 갈라져 있던 것을 bagan 14곳으로 통일. 새 글에서 이 허브를 링크할 땐
  «bagan (peluang dan) probabilitas poker»로.
- 🆕 **세션 8 확정 판정(2026-08-28 · glossary 클러스터 — 새 글에서 그대로 적용)**:
  · **«saya kena cooler»** — 영어 과거분사를 술어로 쓰는 «saya coolered» 금지(문장 안에서는
    kena cooler · 용어 표제/정의 대상으로서의 coolered는 유지)
  · **flat fee = «biaya tetap»**(rata 금지 — biaya rata-rata 평균 요금으로 오독. 단 «dibagi rata»
    균등 분배 뜻은 정상) · 선불 = **«di muka»**(di depan은 물리적 위치만)
  · 코퍼스 다수파 표기: **variance**(varians ✗) · **leak**(kebocoran ✗) · «핸드 내내» =
    **«sepanjang jalan»**(sepanjang waktu ✗) · 대회·판 진행 강조엔 위 형태 유지
  · 관련 카드 아이브로 라벨: tiebreak 카드 = **«Pemecah Seri»**(코퍼스 4:2:2 다수파) ·
    odds 카드 = **«Peluang & Matematika»** 방향(Odds & Math 계열 6:6 분열 — 신규는 Peluang으로)
  · 🔴 **함정 맨몸 태그 금지**: rake·straddle·cooler·fish·tilt를 태그에 단독으로 쓰지 마라 —
    id에서 전부 비포커 의도 지배(rake=creepypasta/갈퀴 · straddle=체조 · cooler=쿨러백 ·
    fish=낚시 · tilt=bahasa gaul). 반드시 «~ poker» 한정형(근거 = 뱅크 배치 6)
  · 직역 지뢰 추가분: membeli+수혜자(→memberi) · «dengan good»(→saat unggul) · mengkreditkan
    (금융 뜻 — 귀속은 menyebut) · pejudi jalanan(→penjudi keliling) · menikahi(핸드에 «결혼» ✗)
    · gantung diri(자살 직설 — 관용구로 쓰지 마라) · «akan pernah»(will ever 직역)


### 🆕 5-A. 2026-09-02 솔버 세션 판정 — 코퍼스 실측 수치 + 원어민 3인 지뢰 (출처: 솔버 `handoff-to-main-site/전달_id_용어실측_솔버작업_2026-09-02.md` · 근거 전문 = 솔버 `참고자료/인도네시아어화_리서치_2026-09-02.md`)

**A. 코퍼스 실측(`lib/posts-id/` 43편 · 2026-09-02 grep · 문장 수) — 신규 글은 이 표가 정본**

| 개념 | 채택 근거(회) | 판정 |
|---|---|---|
| range | **range 215** · rentang 8 · kisaran 0 | range 확정(kisaran은 NTPoker 앱스토어 문구뿐) |
| equity | **equity 324** · ekuitas 9 | equity 확정 |
| board | **board 380** · papan 7 · meja(=테이블 자리) | board 확정 |
| check(액션) | **check 146** · cek 78(대부분 «확인해 보라» 뜻) | 액션 check · 확인 cek — 분열이 아니라 뜻이 다르다 |
| call / fold / raise / all-in | 672 · 756 · 573 · 247 · menaikkan 8 · lipat 0 | 영어 확정 |
| EV | **EV 45** · nilai harapan 1 | EV 확정(정의문도 «Expected value — rata-rata hasil …») |
| bet size | sizing 26 · ukuran taruhan 13 · «bet size» 0 | 산문 = ukuran taruhan/sizing · 표·라벨 = Bet size |
| solver / trainer | solver 26 · pemecah 0 / trainer 0 · pelatih 2(=코치) | solver · **Trainer**(도구명) · 행위는 latihan/berlatih · Pelatih는 코치 |
| 승률 | peluang 144 · probabilitas 47 | «peluang menang» 우선 |
| 커뮤니티 카드 / 홀카드 | board 우선 · kartu bersama 49 · kartu komunitas 23 / hole card 24 · kartu tertutup(브리프) | 설명어로만 kartu bersama |
| postflop / 포지션 | «postflop»(하이픈 없음) · pasca-flop 0 / «in position / out of position» + OOP/IP 병용 | |
| 문체 | **Anda 3,340 / kamu 0** | Anda체 재확인 |

**B. 원어민 3인(레귤러·PUEBI 교정자·초심자 UX)이 잡은 지뢰 — 새 글에서 재생산 금지**
- 🔴 뜻이 바뀌는 것: **Daftar**(=가입 버튼 — 목록은 «Daftar spot»·뒤로는 «Kembali») · **chip bulat**(=둥근 칩 — 정수는 «bilangan bulat») · **peringkat** 단독(=내 순위 — 리더보드는 «papan peringkat») · **konfigurasi**(=저장 설정 — 매치업은 영어 **matchup**) · **Pohon**(tree 직역 ✗ → tree) · **Keluar**(=화면 나가기 — 로그아웃은 **Logout**) · **tinggi tumpukan**(=칩 스택 높이 — 차트 채움은 «tinggi isian»).
- 🟡 문법·PUEBI: 접두 **antar-** 붙여쓰기(antarsumber) · «bukan … maupun» ✗ → «tidak ada … maupun / baik … maupun» · 멈춤 버튼 **Hentikan**(Berhenti는 자동사) · 한 단어 의문문 **-kah**(«Amankah?») · «di Safari **di** iPhone»(전치사) · 명령형 **Ganti ke**(Beralih ke ✗) · «bersyarat pada» 통계 직역 ✗ → «dihitung hanya dari hand yang memang Anda open» · 형용사 **Ternormalisasi**(Normalisasi는 명사).
- 🟢 어투: guna→untuk · tak→tidak · cuma→hanya · «urusan solver»→«ditangani oleh solver» · «siap pakai» 관용구 유지(«siap lihat sekali klik» ✗) · 표·타일엔 **Rerata** · «menelusuri»·«lanjut ke turn dan river»(«mengklik sampai» ✗) · «memasang nama» ✗ → «menampilkan nama» · 오류 문구는 다음 행동까지(«coba muat ulang halaman»).
- 유지(기각 근거): Quads·Line·combo(영어 관용) · OS 라벨 **«Tambah ke Layar Utama»**(iOS 인니어 실제 메뉴명 — Tambahkan ✗).

**C. 숫자·날짜·단위(앱 실측 — 글도 동일)**: 1.326 · 2,5 · **35,4%(% 앞 공백 없음** — fr «35 %»와 다르다) · 날짜 **DD/MM/YYYY** · GB/MB 그대로. 코드·수식 예시(«2.5x»·«K8s:0.75»)를 인용할 땐 «tulis desimal dengan titik, bukan koma» 병기.

**D. 출처 상태(2026-09-02 실측)**: 🔴 **ggpoker.com/id 블로그·basics 다수 404**(`/id/blog/learning-by-reviewing-your-hands/` · `/id/poker-basics/how-to-play-poker/` · `/id/blog/beginner-strategy/a-beginners-guide-to-poker-bet-sizing/` · `/id/poker-games/smart-betting/`) — 브리프의 GGPoker 출처는 새 글에 걸기 전 curl 재확인. 살아 있는 인니 포커 앱 코퍼스 = apps.apple.com/id NTPoker(«Pelatih Poker GTO» — 본문은 GTO solver·kisaran·equity·latihan·umpan balik instan·Anda) · softonic-id «Poker Solver - GTO for Holdem». 족보 영어 표기 확인 = herry.portfoliobox · medium(hanaizumi) · p2k.stekom.ac.id «Daftar tangan dalam poker».

⚠ 솔버가 본체 결함으로 넘긴 2건은 핸드오프 미결로: ① `app/community/community-client.tsx` id LABELS가 **kamu체**(블로그·브리프·앱은 Anda) ② `/id/solver` 랜딩 404(솔버 앱 id 소개 문단은 번역 완료 — `outbound.ts` 한 줄로 켜짐).

## 6. 검증된 사실 자산 — §13·룰 번호 (경화에서 확정된 정본, 새 글에서 그대로 재사용)

### 6-1. 룰 번호 실측 (세션 4 딜러 렌즈가 1차 사본 대조 — 오류 0)

- **WSOP**: Rule **75**(보드 플레이여도 홀카드 전부 공개해야 팟 자격) · **84/90/97/100.b/117** ·
  **103 vs 90.d**(string bet — 두 조항의 국면 구분이 있으니 인용 시 betting-actions 본문 참조) ·
  Rule 73(무늬는 자리 정할 때만 — 승패엔 안 씀) · 홀수 칩 = 버튼 왼쪽 첫 승자.
- **TDA**: Rule **14/16/18** 확인. ⚠ «Rule 19»(쇼다운 두 장 공개)는 **번호만 미대조**
  (레포 TDA 자산에 12·16·18·68만 — 내용은 WSOP 75로 커버. 핸드오프 미결).

### 6-2. §13 정본 예시 (다른 로케일 오류를 고친 최종형 — 새 글에서 인용할 땐 이 형태로)

- **flush vs flush 비교는 보드 공유형으로**: 보드 J♠9♠6♠2♠7♦ + A♠ vs K♠ (이종 플러시 대비는
  홀덤 구성 불가 — a4588d9e 정본. EN·es·ja·zh·zh-hant는 아직 추상형 잔존).
- **트립스 킥커 예시**: 보드 K♣K♥7♦5♣2♠ → K-K-K-A-7 vs K-K-K-Q-7 (구판 «K-K-K-A-2 vs
  K-K-K-Q-J»는 구성 불가 — 둘째 킥커 2면 보드가 KKK22 풀하우스).
- **풀하우스 트리오 우선 예시**: K-K-K-2-2가 Q-Q-Q-A-A를 이긴다(As 페어가 커 보여도 트리오 먼저).
- **스트레이트 플러시 판별**: 6♥ 정본(보드 7♥8♥9♥10♥ + 6♥ = 스트플 / K♥면 그냥 K하이 플러시 —
  13개 로케일 통일된 자리).
- **확률 기준 표기 필수**: 5장(royal 4/2.598.960 · SF 36 · flush 5.108 · straight 10.200) vs
  7장 river(royal 0,0032% · SF 0,0279% · flush 3,03% · straight 4,62%)를 섞으면 사실오류 취급.
  id는 소수점 콤마(0,0032%) — F13 게이트가 콤마 소수점을 못 보므로 손검산 필수.
- **split-pot 리버 콜 임계값**(검증 완료): 보드 무적이면 콜 순이득 +P/2 · 팟사이즈 벳엔 상대가
  보드만 칠 확률 2/3 필요 · 하프팟엔 1/2.

## 7. 글별 경화 상태 (트랙 B 진행 맵)

| 세션 | 클러스터 | 글 | 핵심 처치 | masterUpdated |
|---|---|---|---|---|
| 4 (`30ec8632`+`0525a4d2`) | rules 6편 | beginners·game-order·betting-actions·blind·all-in·showdown | 제목 축 «Cara Main Poker» 전환 · 드리프트 소급 · 경험담 11곳 · FAQ 신설 | 각 파일 확인 |
| 5 (`6afcdb56`) | rankings 6편 | hand-rankings(축 전환+hero 복원+FAQ 4)·flush(표 재구성+FAQ 2)·kicker(FAQ 4 이식)·tiebreak(FAQ 5)·split-pot(FAQ 4)·reading(FAQ 3+캡션) | §13·산수 0건(42예시 기계검산) | HR 08-12 · flush 08-12 · kicker 08-26 · tiebreak 07-19 · split 08-11 · reading 08-11 |
| 6 (`74f18a17`) | odds 7편 | EN 경화 FAQ 24문 이식(EN 1:1) · rumus poker 채택 · 국면 라벨 정정(«Flop → turn») · bagan 앵커 통일 14곳 · 네이티브 비문·직역 ~50곳 · 2차 교열 신결함 5건 정정 | prob 08-11 · pot 08-09 · outs 08-12 · draw 08-11 · **implied 08-26** · equity 08-12 · counting 08-14 (전부 EN updated와 일치 실측) |
| 7 | strategy 8편 | strategy(필라)·3bet·continuation-bet·position-play·positions·shc·when-to-fold·limping | EN 경화 FAQ 이식 10문(EN 1:1) · 드리프트 소급(PDF 앵커 «9-max+6-max 한 줄»·suited 2pt AKs67/AKo65·TT+·rule of 2 dan 4→/holdem-outs·squeeze 15–16,5는 기미러 확인) · pt 원장 #41 «폴드 과다→밸류벳 출혈» 누수 뒤바뀜 — **8로케일 전수 정정**(en·es·de·ja·zh·zh-hant·pt·id) · 배치 5 실측 56종(전략축 전부 ≤50 = 재조준 없음 판정·필라 태그 «cara menang poker» 1교체) · «Baca Juga»(3bet 단독) → Postingan Terkait 정합화 | 각 파일 헤더(shc는 AJo 보류로 08-11 유지+주석) |
| 8 (`79bc8b55`) | glossary 6편 | glossary(허브)·bad-beat·cooler·fish·rake·straddle | 역링크 0/5→5/5 · rake 캡 $3–$6 · glossary 표 10행+스트라이프 100+(실측 107행) · 배치 6(istilah/kamus/muck 채택·함정 4종 기록) · **마부치 올인 시점 EN·id 선정정**(PokerNews 축어 — 6로케일 소급 미결) · 인포그래픽 alt 3건 실물 대조 정정 · FAQ 스키마 9/8/10/8/11/9 | glossary·fish·rake·straddle 08-26 · cooler 08-11 · bad-beat 08-28 |
| 9 (`11a69d0f`) | tournament 9편 | tournament(필라)·tvc·icm·bubble·short-stack + apt·ept·wpt·marathon | 회차 6 드리프트 전량 흡수(EN 08-26 8건 + ept €1.100/€690 + wpt 트로피·NSW·아젠다) · 배치 7(wsop 590 편입·개념축 흡수 확정) · EN FAQ 9문+id 2문 · 라이브 전수 실측(JTBC·AJPC 4–13 Des·APT Jeju·EPT·WPT) · EN·id 선정정 2건(icm 버튼 로테이션·wpt NSW 파편) · 라벨 정합(Panduan Terkait 소멸·equity 263:9) | tournament·tvc·bubble·apt 08-26 · icm·wpt 08-28(EN 선정정 동기) · short-stack 08-13 · marathon 08-18 · **ept 의도적 부재**(«진행 중» 배너 미이식 — 8/29 일괄) |

## 8. 함정·교훈 (id 경화에서 실증된 것 — 다음 회차 필수 숙지)

1. 🔴 **id `masterUpdated`는 거짓 신호였다**(세션 4 실증): 07-19·07-25로 «동기» 표기된 파일에
   EN 내용이 안 와 있었다. 대조는 날짜 필드가 아니라 **EN 기준선(07-15)→HEAD 커밋 diff 실물**로.
2. 🔴 **게이트 `--locale=id`는 «언어 불변 항목»만 본다** — §13(H1~H6)·산수(F13)·표 대조(C1·C2)뿐.
   메타 길이·FAQ↔H2 축어중복(E2)·필라 역링크(F12)·질문형 H2는 **미검사**다. 그 층은 렌즈/손으로.
3. 🔴 **커버리지 출력 필독**: tiebreak(카드 문단 10)·reading(14)은 시나리오 미포착 = «0건이어도
   미검사» — 세션 5는 전 예시 손검산으로 메웠다. 다음 회차도 같은 자리 주의.
4. **id 미러 소급 이력**: 대부분의 §13급 미러(caa33b91·e777999b·ada628c6·767f29fe·739730d0·
   aa09f547·12d21fdd·cba8b3fa·777bf603·58f599f5)는 id에 이미 소급돼 있었고, **a4588d9e만 id를
   빠뜨렸다**(세션 5가 해소). 새 EN 정정이 나오면 «id 포함 여부»를 커밋 파일 목록으로 확인하라.
5. **질문형 H2 70% 규율(§14-A)은 id에 그대로 적용하지 않는다** — id 실검색 형태소는 명사구
   (`urutan …`·`cara …`)라 억지 질문화가 오히려 손해(세션 5 SEO 렌즈 판정).
6. **EN-먼저 대기 중 id에 걸린 것**(임의 소급 금지 — 정본은 핸드오프 ⑩~⑰): reading «Seberapa
   umum» 표 헤더(빈도 오라벨) · tiebreak/HR «Royal Flush|Selalu seri» 행 · FAQ↔H2 축어중복
   9건(EN 구조 상속) · 2·4법칙 ×4 캐비어트 부재 · blind «Dua kebiasaan» 수량 등.
7. **렌즈 운용**: 본체=Fable·렌즈=Opus(settled-decisions §5-A) · 렌즈 4종(딜러+수학·네이티브·
   SEO/GEO·교열 diff) 병렬 · 지적 반영 후 **2차 교열 필수**(세션 5에서 자기 결함 2건 검출 —
   FAQ 종결문 중복·라벨 통일 방향 오판) · 검수자도 틀린다(readnext «Lanjut baca» 통일 제안은
   코퍼스 26편 실측으로 뒤집혔다 — **통일 방향은 코퍼스 전수 grep이 심판**).
8. **이미지**: hero·본문 이미지는 18언어 공용 자산 — alt만 id로 재저작(EN alt 1:1 미러가 안전).
   board-puzzle alt는 K-K-K-**A-2**가 정본(구판 A-4는 오기).
9. 🆕 **세션 6 교훈**: ① odds처럼 id 검색축이 죽은 클러스터의 경화 본체 = «EN FAQ 이식 + 국면
   라벨·언어 품질» — 실측으로 «재조준 없음»을 판정하는 것 자체가 경화다. ② **19,1(9÷47 플랍→턴)
   vs 19,6(9÷46 턴→리버) 국면 구분은 이 코퍼스 최다 함정** — 표 컬럼 라벨까지 의심하라(EN
   «Turn only»가 라벨 오답이었고 3렌즈+기계가 수렴). ③ 렌즈 지적도 1차 출처로 기각된다
   (penurunan=derivation·equity 70% EN 동형 — 2건 기각). ④ 렌즈가 파일 하나를 컨텍스트 소진으로
   못 보면 «전수 통과» 보고에서 그 파일을 빼고 본체가 보충 검산하라(수학 렌즈의 card-counting).
10. 🆕 **세션 8 교훈**: ① **인포그래픽 alt는 이미지 실물을 열어 대조하라** — glossary 카테고리
    alt가 «Situasi»를 적었는데 실물 타일은 SLANG이었고(EN 유래), fish food-chain «terlemah ke
    terkuat»도 실물(칩 크기=판돈)·본문(whale⊂fish)과 정면 모순이었다. 텍스트만 보면 못 잡는다.
    ② **유명 핸드 서사는 액션 «순서»까지 1차 출처 축어로** — 마부치 2008은 올인이 리버 뒤였는데
    8로케일 전부 «올인 후 리버»로 서술하고 있었다(PokerNews 축어로 판정 · EN·id 선정정).
    ③ 렌즈 지적의 «수치 제안»은 실측 없으면 받지 마라(time charge $5–$8/30분 제안은 산수일 뿐
    실측 아님 — 기각). ④ 검수 반영 자체가 잔존을 만든다 — 치환형 정정은 반영 직후 같은 파일을
    **옛 형태로 재grep**(coolered 2·dengan good 1·rata 1이 2차 교열에서 나왔다).

11. 🆕 **세션 9 교훈**: ① **8로케일 «전수 정정» 커밋도 자리를 흘린다** — af6c77c8(wpt WRONG 14)이
    id의 트로피 오귀속 3곳(본문·표 «WPT Champions Cup ✅ Ya» 행·권고문)을 놓친 채 «전수»로 기록돼
    있었다. 소급 이력은 커밋 메시지가 아니라 **원문 grep**으로 판정하라. ② **상태만 바꾸면 모순이
    승격된다** — 회차가 desc·상태셀을 «마감»으로 바꾸면 그 대회를 전제로 한 여행 설계·FAQ·tldr
    전부가 같은 회차의 몫이다(marathon Chuncheon 축 — apt «Edisi 2026 sudah usai» 접두 장치가 정본
    패턴). ③ **라이브 이벤트 글은 매 회차 공식 원문 재실측이 경화의 본체다**(사장님 지시) — 이번
    실측으로 TBD 1건 확정(AJPC 4–13 Des)·마감 2건 확인·5개 공식 수치 전건 일치를 얻었다. ④ 렌즈
    지적의 «되돌려라»는 규율 대조 후 받아라 — «⚠ Merah→🔴» 제안은 «본문 🔴 금지» 규율 위반이었다.
    ⑤ 신규 FAQ는 «EN 1:1»이라도 본문·이웃 FAQ와의 축어 중복을 스스로 낳는다 — id 고유 신설분은
    상보적으로 재작성(uang asli FAQ 선례).

## 9. 신규 포스팅 후보 판정 (2026-08-27 기준)

1. **신규 글 근거가 나온 축은 없다** — 측정된 큰 볼륨(kartu remi 33k·full house 22k)은 전부
   비포커 의도. 포커 의도 축은 기존 42편이 커버 중이다. **저볼륨 롱테일 집합전략 유지.**
2. 추적 중인 급성장 축(다음 재실측 때 확인): `cara main poker kartu remi` 140→월 590 ·
   `kartu tertinggi di poker` yoy +586% · `urutan kartu remi tertinggi sampai terendah` +244% ·
   `super royal flush` +325% · `main poker itu apa` +113%(질문축 — 성장 지속 시 필라 FAQ 승격).
3. 재실측 방법: 이 파일 §2~3의 키워드를 라쿠 배치 1회(15크레딧)로 — requestId 계보는
   `id-core-volumes.md` 머리 참조(1258288 → 1258295 → 1258342).
