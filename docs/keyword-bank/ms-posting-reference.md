# ms 포스팅 참고 파일 — 말레이어(Bahasa Melayu · 말레이시아) 정본

> **신설 2026-09-03** — 솔버 세션 63의 통지(M-080)를 받으면서 만들었다. 그때까지 ms 자산은
> `docs/translation-terms-ms.md`(28줄 브리프)뿐이었고 «포스팅 참고 정본»이 없었다.
> **용어·표기 판정은 이 파일이 정본이다.** 브리프는 번역 착수 전 웹리서치 결과이고,
> 이 파일은 **본체 코퍼스 실측 + 원어민 검수**가 얹힌 상위 문서다.
>
> 🔴 **id(인니어) 파일을 베끼지 마라.** 가까워 보이지만 어휘·문체·숫자표기가 갈린다.
> 인니어 잔재는 말레이 독자에게 **즉시 외국어로 읽힌다**(§3 금지어 표).
> 자매 정본 = `docs/keyword-bank/id-posting-reference.md`(43편 코퍼스라 훨씬 두껍다).

## 0. 자산 지도 — ms에 지금 있는 것

**2026-09-14 갱신**: 실제 글 수는 `lib/posts-ms/index.ts` 등록 기준 **8편**이다. 9개 `.ts` 파일에는 index가 포함되며, 종전의 «9편» 표기는 글 수와 파일 수를 혼동했다. 아래 과거 어휘 실측값은 재계산한 값이 아니므로 유지한다. 9월 14일 조사에서 새 글에 재사용할 판단은 **§8**에 정리했고, 앱 라벨·페르소나·랜딩 작업별 상세 근거는 `docs/ms-solver-landing-brief.md`에 기록했다.

| 자산 | 실체 | 주의 |
|---|---|---|
| 본체 코퍼스 | `lib/posts-ms/index.ts` 등록 **8편** | **전부 초심자 룰 글이다.** GTO·전략 용어(range·equity·solver)가 거의 없다 |
| 용어 브리프 | `docs/translation-terms-ms.md` (28줄) | 웹리서치 단계 문서. 이 파일과 어긋나면 **이 파일이 이긴다**(§6에 정정 기록) |
| 솔버 앱 | ms판 배포 완료(11번째 언어 · 2026-09-03) | 앱 UI 축어가 §4의 근거다 |
| 랜딩·내부 링크 | `/ms/solver` **운영 200**(`27c08021` 배포 · 2026-09-14) · 커뮤니티 홈 `/ms` | `/ms`, `/ms/blog`, 등록된 개별 글 8편도 같은 날짜 HTTP GET **200** 확인. 종전 개별 글 404 메모는 폐기 |

## 1. 코퍼스 실측 (2026-09-03 · 본체 세션 직접 계수)

🔴 **계수 방법을 명시한다** — 방법이 다르면 숫자가 달라진다. 아래는 `lib/posts-ms/*.ts` 전문을
이어붙여 **낱말 경계 정규식**(앞뒤가 낱말문자·하이픈이 아닌 것)으로 센 값이다.
«소문자»는 대소문자 구분, «전체»는 무관.

| 개념 | 소문자 | 전체 | 판정 |
|---|---:|---:|---|
| card | kad **275** / kartu **0** | 301 / 0 | **kad** 확정. kartu는 인니어 |
| hand(핸드) | tangan **203** / hand 39 | 236 / 40 | **tangan**. 인니(hand 유지)와 **반대**. 영어 복합어(hand chart·short-handed) 안에서만 hand — 복합형 25건은 따로 있다 |
| range | range 3 / julat 5 | 3 / 6 | **range**(GTO 문맥). 첫 등장 «julat tangan» 병기 1회. 🔴 표본이 작다 — 9편에 GTO 글이 없어서다 |
| equity | equity 9 / ekuiti 0 | 10 / 0 | **equity**. 병기는 설명 1회만 |
| board | board 23 / papan 2 | 24 / 2 | **board**. 설명어는 **kad komuniti**(인니 kartu bersama 아님) |
| 액션 | call 93 · raise 122 · fold 65 · all-in 91 · cek 52 / check 5 | 115·146·79·127·69/8 | **영어 통일.** 말레이 등가(Semak/Panggil/Angkat/Jatuhkan)는 매체마다 달라 표준이 없다 |
| position | posisi 26 / kedudukan 17 | 32 / 28 | **posisi**=자리 · **kedudukan**=순위·족보 순서. 뜻이 갈리니 섞지 마라 |
| dealer / round | pengedar 42 / pusingan 43 · ronde 0 | 51 / 48 | pengedar · pusingan(ronde는 인니어) |
| 기타 대조 | wang 13 / uang 0 · butang 37 / tombol 0 · percuma 15 / gratis 0 · boleh 170 / bisa 0 · kerana 25 / karena 0 | | **인니어 짝은 전부 0이다** — 코퍼스가 이미 깨끗하다. 새 글이 이 0을 깨지 않게 하는 것이 §3의 목적 |

## 2. 문체 — 2인칭 `anda`의 «자리»가 규칙이다

**문중 소문자 anda 424회.** 대문자 `Anda`는 75회인데, **위치로 나누면 성격이 다르다.**

| 자리 | 건수 | 판정 |
|---|---:|---|
| 제목(`##`·`###`) 안 | 10 | 🔴 **고치지 마라.** 말레이어 제목은 Title Case라 대문자가 정상이다 |
| 산문 문두 | 61 | 정상 |
| 산문 문중 | **4** | 전부 하이라이트 마커 직후라 사실상 문두다. **진짜 문중 대문자는 0에 가깝다** |

→ **규칙: 문중은 소문자 `anda`, 문두·제목만 `Anda`.** 인니어의 «항상 대문자 Anda»와 **일부러 다르다.**
🔴 «문중 소문자» 판정을 근거로 **제목의 Anda를 일괄 소문자로 내리지 마라** — 위 표가 그 방지선이다.
`kamu`·`awak`는 코퍼스에 **0**이다. 브리프의 «필요시 awak 혼용 가능»은 실측상 근거가 없다.

## 3. 원어민 검수 3인이 잡은 «말레이어 지뢰» (솔버 세션 63 · KL 레귤러 · DBP 교정자 · JB 초심자)

**🔴 인니어 잔재 — ms 글을 id 글에서 옮겨 쓰면 반드시 생긴다**
kartu→kad · uang→wang · tombol→butang · layar→skrin · perangkat→peranti · koneksi→sambungan ·
unduh→muat turun · pengaturan→tetapan · kustom→tersuai · hitung→kira · gratis→**percuma** ·
**bisa**(말레이에서 «독»)→boleh · karena→kerana · coba→cuba · silakan→sila · Mengerti→Faham ·
tinjau→semak · Peringatan:→Amaran: · Bagikan→Kongsi · tantangan→cabaran · ronde→pusingan ·
ketuk→ketik · -isasi 명사(Normalisasi)→di- 형(Dinormalkan) · 문중 Anda→anda.

**🔴 뜻이 바뀌는 것**
- **kerugian** = 금전 손실. disadvantage(포지션 불리)는 **kelemahan**. GTO 글에서 «EV loss»와 섞이면 수치로 오독된다.
- **tren** = 유행. **Pasang** = 앱 설치(홈 화면 바로가기는 Apple 표기 «Tambah ke Skrin Utama»).
- **dimatikan**(계정) = 정지당함 → «tidak tersedia». **Berat** = 물리 질량(통계 weight는 **wajaran**).
- **pos** = 우편(포럼 글은 **siaran**). **Selesai**는 «완료»에 이미 쓰인다 → 스트리트 끝(End)은 **Tamat**.
- **giliran** 후치 금지(«BB giliran» ✗) → «giliran BB» 또는 «untuk bertindak».

**🟡 문법(DBP)** — 피동 `di-` 뒤 행위자가 명사면 **oleh** 필수(«diuntungkan oleh board») ·
«adalah + 명사» 금지(→ ialah 또는 문장 재구성) · «mengena»는 자동사(목적어가 오면 **mengenai**) ·
말레이시아 일상형 **selepas · baharu · automatik · pratonton · eksport**(인니형 setelah·baru·-is·pratinjau·ekspor 아님).

## 4. 숫자·UI 표기 (앱 실측 — 글도 동일)

- **숫자는 영어식이다**: 천단위 콤마 `1,326` · 소수점 마침표 `2.5` · `35%`(**% 앞 공백 없음**) ·
  날짜 **DD/MM/YYYY**. 🔴 **인니어식 반전(1.326 · 2,5)을 쓰지 마라** — id와 갈리는 자리다.
- 앱·UI 어휘: Log masuk · Log keluar · Tetapan · Muat turun · Kongsi · Salin · Ralat: · Amaran: ·
  Pasang · pelayar · skrin · peranti · luar talian · «Tambah ke Skrin Utama»(iOS).
- 리더보드 = **papan pendahulu**(게임 UI 관습 · Google Play ms 도움말). 인니 papan peringkat 아님.
  DBP 사전형 «carta kedudukan»은 문어체라 UI엔 안 쓴다.
- 카드·무늬·통화는 §13 그대로 보존(`A♠` · `K♥` · `10♦` · `$`).

## 5. 출처 (2026-09-03 실측)

kalkulator.com.my/kalkulator-peluang-poker · onlinecasino-my.com/permainan/poker/senarai-terma-definisi-poker ·
texasholdemseal-my.com 입문 가이드 · support.google.com/googleplay(`?hl=ms`) · proz.com leaderboard en→ms ·
Apple ms-my iPhone 안내. 🪶 ggpokermalaysia.com은 **영어 전용** — 말레이시아 GTO 콘텐츠가 영어권이라는 근거다.

## 6. 🔴 본체 실측이 통지문과 갈린 자리 (2026-09-03 · 이 파일이 정본)

우편함 프로토콜 §3 «수치는 직접 센다»에 따라 통지문 수치를 전부 재계수했다. **판정 방향은 셋 다
통지문이 맞았고**, 아래는 **근거의 강도·범위**가 달라진 자리다. 다음 세션이 통지문 수치를 인용하지 않도록 남긴다.

| 자리 | 통지문 | 본체 실측 | 무엇이 달라지나 |
|---|---|---|---|
| **kira**(계산) | 18회 | **낱말 7 · 그중 5가 «tidak kira»(~불문) 관용구 → «계산» 뜻은 2** («kira-kira»(대략)는 별도 6) | 판정(kira, hitung 아님)은 유지 — 근거는 **코퍼스가 아니라 kalkulator.com.my와 «hitung=인니어»**다. 🔴 «18회 실측»을 근거로 인용하지 마라 |
| **문중 Anda** | 10회 | **4회**(그마저 하이라이트 마커 직후) · 제목 10 · 문두 61 | 판정이 더 강해졌다. 단 **제목 10건은 보존 대상**이라는 단서가 새로 필요하다(§2) |
| **kad·tangan 등** | kad 279 · tangan 203 | kad 275 · tangan 203(소문자 기준) | 계수 방법 차이. **방법을 안 적으면 다음 세션이 또 어긋난다** → §1에 방법을 박았다 |

🔴 **브리프 정정**: `docs/translation-terms-ms.md`의 «you → anda(**인니 kamu**)»는 **틀렸다.**
본체 id 코퍼스는 **Anda 3,340 / kamu 0**이다. 인니는 kamu가 아니라 Anda고, ms와의 진짜 차이는
«단어»가 아니라 **«대소문자 자리»**다(§2). 브리프에서 고쳤다.

## 7. 미결·선택

- 🔵 **`/ms/solver` 운영 배포 완료**(2026-09-14 · `27c08021` · HTTP 200). 근거 = `docs/ms-solver-landing-brief.md`, 실측 기록 = WORKLOG. 후속 작업은 별도 솔버 저장소의 `outbound.ts`에 MS `/solver` 매핑 추가다(솔버 통지 M-080 §D).
- 🟢 `/ms` 커뮤니티 LABELS는 소문자 anda체라 **앱·코퍼스와 일치한다 — 결함 없음**
  (id는 kamu체라 갈렸다. 그건 id 쪽 미결이다).
- ⚠ 위 어휘 실측은 **당시 입문8편** 기준이다(range 3 · equity 9). 2026-09-15 GTO 해설13편을 추가하면서 검색·용어·실제 UI를 새로 확인했다(아래 §9). 과거 계수를 현재21편의 수치로 인용하지 말고, 새 전략 주제에서는 해당 검색 결과를 다시 확인한다.

## 8. 2026-09-14 현지 검색·원문 조사 — 새 포스팅에 재사용할 판단

**배포 후 확정:** MS는 `27c08021`로 처음 배포되었고, HI 추가 커밋 **`2dbb885c`**가 배포된 뒤 **2026-09-14 20:55:39 KST**에 `/ms/solver` HTTP200·FAQ23·`ms`/`ms_MY`·hreflang12·내부8경로200을 다시 확인했다. 전체12언어 FAQ252 대조도 통과했다. 사용자가 요청한 신규 포스팅용 조사 정보는 아래 §8-A~D에 직접 반영했으며, [HI 정본](hi-posting-reference.md)도 같은 목적으로 신설했다.

조사일은 **2026-09-14**이며, `/ms/solver` 작업에서 직접 관찰한 검색 화면과 읽은 원문을 아래에 요약했다. §1·§6의 9월 3일 코퍼스 계수는 다시 측정하지 않았다. 이번 편집자·교육자·SEO 검수자·초심자 페르소나는 **AI에 부여한 검토 역할**이며, §3의 과거 인적 검수 기록과 별개다.

### 8-A. Google 설정과 관찰 범위

Chrome에서 `gl=my&hl=ms&pws=0`으로 Google을 직접 열었다. 하단에 Malaysia와 비개인화 안내가 표시됐지만 상세 위치는 확인되지 않았다. **실제 말레이시아 IP·도시·기기를 통제한 순위 조사로 쓰지 않는다.** 일반 웹 검색 도구의 결과도 함께 읽었으나, 이를 Google 직접 관찰 결과에 섞어 순위표나 점유율로 만들지 않았다.

| 직접 검색한 쿼리 | 당시 화면에서 확인한 것 | 새 글에 적용할 판단 |
|---|---|---|
| `GTO poker solver percuma` | GTO Wizard·GTOBase·Simple Postflop 등 영어 도구, MY App Store의 Solver+, 영어 영상·커뮤니티, 말레이어 Google Play 설명이 함께 노출 | 영어 제품명·포커 용어를 살리고 MS 설명을 붙인다. 무료 접근·사용법 수요를 받을 수 있으나, 이 관찰만으로 검색량이나 전환율을 주장하지 않는다. |
| `site:my poker GTO` | 말레이시아 대상 사이트의 영어 과외·서적 결과와 부정확하거나 무관한 결과가 혼재 | `.my` 도메인만으로 현지 운영자·포커 전문가·좋은 번역이라고 판정하지 않는다. MS 전문 교육 콘텐츠가 없다고도 단정하지 않는다. |
| `kalkulator peluang poker Malaysia` | 말레이어 계산기, 현지화된 앱스토어, 국제 영어 equity 계산기 | 계산기 사용 의도를 전략 빈도 학습과 구분한다. 글 제목의 `kalkulator`가 단순 equity 계산인지 GTO 전략 계산인지 첫 문단에서 밝힌다. |

**검색량·top-30 비율·어순 우위는 측정하지 않았다.** 이번 랜딩의 `solver poker GTO`는 주제를 명확히 하기 위한 제목 조합이지 검색량 1위 판정이 아니다. 인니어 뱅크의 수치나 제목 어순을 MS의 측정값으로 옮기지 않는다.

### 8-B. 출처별 확인 내용과 신뢰 범위

아래 링크는 모두 **이번 조사에서 원문을 읽은 근거**다. 도메인의 대상 지역, 글의 실제 언어, 앱 지원 언어, 운영자 소재지는 각각 따로 판정한다.

| 출처 | 실제 확인 내용 | 사용할 수 있는 근거와 한계 |
|---|---|---|
| [DBP PRPM — pelayar](https://prpm.dbp.gov.my/Cari1?d=123312&keyword=pelayar), [anda](https://prpm.dbp.gov.my/Cari1?d=123312&keyword=anda), [kad](https://prpm.dbp.gov.my/Cari1?d=123312&keyword=kad) | 공식 사전의 웹 브라우저·독자 호칭·카드 어휘 | `pelayar`, `anda`, `kad`의 언어 근거다. 포커 수요·제품 기능을 증명하지 않는다. `anda`의 문중 소문자 규칙은 §2의 코퍼스 기준을 적용한다. |
| [Kalkulator Peluang Poker](https://kalkulator.com.my/kalkulator-peluang-poker/) | MS 본문의 `Kira peluang tangan poker`, `kad komuniti`, `Julat Tangan Lawan` 용례 | `.com.my` 대상 도메인이지만 운영자 소재지는 확인하지 않았다. `Kustom`, `Kalikan` 등 어색한 표현과 draw 직역도 있어 **낱말 용례만 검증해서 사용**하고 문장·기술 설명 전체를 정본으로 삼지 않는다. |
| [Solver+ MY App Store](https://apps.apple.com/my/app/solver-poker-gto-strategy/id1530767783?l=ms) | 스토어 UI의 `Percuma · Pembelian In-App`; 설명은 영어이며 표시된 앱 언어도 영어 | 말레이시아 스토어의 MS UI와 앱 자체의 MS 지원은 다르다. `Percuma`를 무료 어휘 근거로 쓸 수 있지만 타사 모든 기능이 무료라고 쓰지 않는다. |
| [GTO Poker Trainer Google Play](https://play.google.com/store/apps/details?hl=ms&id=com.gtopre.gto_pocket_trainer) | 말레이어로 노출되는 글로벌 앱 설명; 개발사 주소는 노르웨이 | `hl=ms`는 화면 언어 설정이며 말레이시아 현지 운영·지역 순위가 아니다. postflop 번역 오류가 관찰돼 전문용어의 정본으로 쓰지 않는다. |
| [GGPoker Malaysia](https://ggpokermalaysia.com/) | Malaysia 타깃 영어 페이지와 게임·가입 의도 | 운영자 국가는 확인하지 않았다. 영어 원문이 있는 **해당 페이지**의 관찰이며, MS 교육 문체나 말레이시아 GTO 시장 전체의 언어 분포를 증명하지 않는다. |
| [Mekanika — Mitsubishi GTO](https://www.mekanika.com.my/mitsubishi-gto-3000gt-kereta-sport-jepun-mendahului-zaman/) | 말레이시아 자동차 매체에서 GTO를 차종명으로 사용 | `GTO` 단독이 포커를 확정하지 않는다는 실제 사례다. |
| [Trainocate Malaysia — Excel 과정](https://trainocate.com.my/courses/exa-2-microsoft-excel-2021-advanced/) | Excel Solver 학습 항목 | `solver` 단독에는 Excel 도구 의도도 있다는 사례다. 포커 검색에서 차지하는 비율은 측정하지 않았다. |

DBP `percuma`는 검색 추출에서 확인했지만 직접 열람 오류가 있었으므로 **DBP 해당 원문을 읽었다고 기록하지 않는다**. 이번 직접 열람 근거는 MY App Store와 기존 프로젝트 정본으로 보완했다. §5의 onlinecasino-my.com·texasholdemseal-my.com 특정 경로는 이번에 다시 읽지 못했으며, 9월 14일 검증 출처로 재인용하지 않는다.

### 8-C. 이번에 확인한 편집 결정

- **검색 혼동 분리:** 제목에는 `poker`와 `GTO`/`solver`를 함께 둔다. 자동차 GTO나 Excel Solver를 배제하는 주제 표기다. `poker percuma`는 무료 게임 의도가 섞일 수 있으므로 교육·분석 도구를 소개할 때 `solver`, `strategi`, `latihan` 등 실제 기능을 명시한다.
- **무료·브라우저 표기:** 프로젝트 카피는 `percuma`와 `pelayar`로 통일한다. 이는 `gratis`라는 단어가 말레이어에 존재하지 않는다는 언어학적 주장이 아니다. 외부 MS 페이지에 보이는 인니어형을 근거로 §3의 편집 규칙을 바꾸지 않는다.
- **설명어와 전문용어 분리:** `range` 첫 등장에는 `julat tangan`, `board`에는 `kad komuniti`를 짧게 병기한다. `equity`, `postflop`, `bet/check/call/raise/fold`는 유지한다. 초심자에게는 `EV (nilai jangkaan)`·`EQR (realisasi equity)`를 풀어 주고, 이후 문단에서 의미를 설명한다.
- **수치의 뜻 구분:** 노드의 액션 빈도는 `kekerapan`, 통계 가중치는 `wajaran`, 포지션의 불리함은 `kelemahan`, EV 손실은 `kerugian EV`다. `berat`를 통계 가중치로 옮기거나 `kerugian`을 포지션 불리함에 붙이지 않는다.
- **실제 버튼을 가리킬 때:** 라틴·MS 혼합도 화면 그대로 적는다. 이번 앱에서 `Bina Tree → Jalankan Solver`, `Carta preflop`, `Berlatih spot ini`, `Spot saya`를 확인했다. 자연스러운 설명 문장과 클릭할 버튼 이름은 같은 번역 규칙으로 처리하지 않는다. 변경 가능한 앱 라벨은 새 글 작성 시 다시 확인한다.

### 8-D. 다음 글을 쓸 때 적용할 순서

1. **글의 역할을 먼저 구분한다.** 입문 규칙, equity/확률 계산, GTO 전략·연습, 실제 게임·가입 중 무엇을 답할지 정한다. 이번 솔버 랜딩은 heads-up postflop 전략·연습을 맡는다. 다른 글의 프리플랍 입문이나 계산기 검색 의도를 제목만 바꿔 가져오지 않는다.
2. **새 주제의 Google 결과와 원문을 다시 확인한다.** 이번 세 쿼리는 9월 14일 스냅샷이다. 대상 지역 설정·조회일·직접 본 결과를 남기고, 원문을 읽지 않은 검색 요약은 원문 근거와 분리한다.
3. **말레이시아 대상과 말레이시아 운영을 구분한다.** `.my`, `/my/`, `hl=ms`만 보고 현지 업체·현지 전문가로 소개하지 않는다. MS로 쓰인 설명도 오역이 섞일 수 있으므로 필요한 용어와 사실을 각각 검증한다.
4. **내부 링크는 현재 등록된 글에서 고른다.** 9월 14일 기준 8개 입문 글에는 에퀴티·팟오즈·13개 솔버 예제 해설 글이 없다. `/ms/hand-chart`, `/ms/calculator`도 없다. 필요하면 실제 앱 탭으로 안내하며, 입문 글을 해당 전문 해설인 것처럼 연결하지 않는다. 새 글 발행 후에는 `lib/posts-ms/index.ts`의 실재 등록을 확인한다.
5. **앱 설명과 전략 해설의 출처를 구분한다.** 메뉴·기능은 실제 앱과 공개 소스, 보드·전략 수치는 `docs/gto-solver-series-spec.md §4-B`가 기준이다. 교육 예제의 목표 오차 0.5%를 커스텀 계산의 고정 기본값으로 옮기지 않는다. 반복 횟수 한도로 계산이 종료될 수 있으므로 목표 오차 달성도 보장하지 않는다.
6. **제품 비교는 실제 이용 방식을 한정한다.** 9월 14일 [GTO Wizard 공식 페이지](https://gtowizard.com/)에서 라이브러리와 커스텀 계산을 모두 확인했다. GTO Wizard 전체를 미리 계산된 라이브러리만 제공하는 제품으로 쓰지 않는다. 설치형 계산은 [PioSOLVER 공식 FAQ](https://piosolver.com/docs/faq/)·[TexasSolver 공식 저장소](https://github.com/bupticybee/TexasSolver)처럼 기능을 직접 설명하는 출처를 확인한다. 타사 가격·무료 제한 수치나 우열은 이번 조사로 확정하지 않았다.

솔버를 언급하는 글에서는 **교육 예제·오늘의 문제 기록만 선택적으로 계정 동기화**하고, **직접 계산한 스팟의 Trainer 문제와 연습 기록은 로그인해도 기기에만 저장**된다는 범위를 유지한다. 언어 선택기가 있다고 쓰지 않으며, MS 앱으로 보내는 링크는 `?lang=ms`를 사용한다.

## 9. 2026-09-15 GTO 해설 — 재사용할 편집 기준

새 검색 관찰과 원문별 근거는 [MS GTO 검색 뱅크](ms-gto-series.md), 제목·용어·실제 버튼명은 [공통 브리프](../ms-gto-translation-brief.md), 수치·원문 정정 범위는 [원문 계약](../ms-gto-source-contract.md)에 둔다. 검색량이나 쿼리 어순의 우위를 새로 측정한 것은 아니다. 제작·검수·공개 여부는 [발행 기록](../ms-gto-publication-review-2026-09-15.md)에서 확인한다.

- **제목에 행동과 분모를 남긴다.** `Bet Besar 97.8%`는 큰 size의 빈도이고 전체 bet98.1%와 다르다. `BB check98.2%`는 전체 range의 값이다. A9 같은 개별 손패가 훅에 나오면 desc에서도 range값임을 밝힌다.
- **소수와 띄어쓰기의 층을 구분한다.** 소수점은 마침표다. `sekitar 19.8%`, `SPR 4`, `40 kombo`, `2.5 bb`처럼 산문 단어·단위와 숫자는 띄운다. 실제 UI를 인용하는 경우에는 `Bet 14.9bb (66% pot)`처럼 화면 표기를 따른다.
- **표는 같은 개념에 같은 라벨을 쓴다.** `Tetapan / Nilai`, `Tarikh semakan`, `Metrik`, `Kategori`, `Kekerapan`, `Kombo`. 실제 앱의 영어 혼합 category명은 유지하고, 무엇을 뜻하는지는 산문으로 설명한다. 예를 들어 paired board의 `Ace-High`는 베스트5가 high-card라는 뜻이 아니다.
- **기존 용어 원칙은 활용형에도 적용한다.** 계산은 `kira` 계열을 선택하므로 `dihitung`도 `dikira`로 맞춘다. 일반 개수는 `kombo`, 실제 category명은 `Combo draw`다. 설명 속 숫자 rank는 `tiga / empat / enam / tujuh / lapan / sembilan`으로 쓰되 hand 표기·UI category명을 낱말 치환하지 않는다.
- **동일 보드에서 서로 다른 축을 섞지 않는다.** `Tiada made hand`는 별도 Ace-High·King-High까지 포함하는 무페어 전체가 아니다. `Tiada draw`와 backdoor 비중도 분리한다. AK에 즉시 완성할 draw가 없다는 설명을 모든 backdoor 가능성까지 없다고 옮기지 않는다.
- **재현 경로는 현재 기능에 맞춘다.** `Spot belajar → 예제명 → ⚡ Lihat hasil`은 flop 첫 결정 결과다. 후속 노드는 `Kira sendiri spot ini → Bina Tree → Jalankan Solver`로 별도 계산한다. 과거 별도 계산을 인용한⑦의 표는 날짜·단위·집계 차이 고지를 앞에 둔다. 예제 목록의 낡은 안내문 하나를 현재 viewer의 기능 근거로 쓰지 않는다.
- **새 글 연결은 registry로 확인한다.** MS는 입문8편에 GTO13편을 추가했지만 equity·pot-odds 등 별도 전문 가이드가 모두 생긴 것은 아니다. 기존 링크 자리를 solver/입문 글로 바꿀 때 앵커도 실제 목적지 범위로 줄이고, 본문 설명과 계산은 보존한다. readnext 제목·이미지는 대상 Post의 현재 값을 쓴다.

실제 앱 표시값과 미디어의 확인 범위는 [MS 미디어 기록](../ms-gto-media-review.md)에 남겼다. AI에 언어·전략·SEO 관점을 부여한 검수이며, 새 현지 인간 감수 이력으로 기록하지 않는다.
