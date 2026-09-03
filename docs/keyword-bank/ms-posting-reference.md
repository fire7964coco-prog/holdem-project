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

| 자산 | 실체 | 주의 |
|---|---|---|
| 본체 코퍼스 | `lib/posts-ms/` **9편** | **전부 초심자 룰 글이다.** GTO·전략 용어(range·equity·solver)가 거의 없다 |
| 용어 브리프 | `docs/translation-terms-ms.md` (28줄) | 웹리서치 단계 문서. 이 파일과 어긋나면 **이 파일이 이긴다**(§6에 정정 기록) |
| 솔버 앱 | ms판 배포 완료(11번째 언어 · 2026-09-03) | 앱 UI 축어가 §4의 근거다 |
| 랜딩 | `/ms/solver` **404** · `/ms/community` 404 · 개별 `/ms/blog/...` 404 | 여는 것은 선택(§7) |

## 1. 코퍼스 실측 — 본체 9편 (2026-09-03 · 본체 세션 직접 계수)

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

- 🔵 **`/ms/solver` 랜딩 404** — 열면 솔버 쪽 `outbound.ts` 한 줄로 연결된다(솔버 통지 M-080 §D).
  절차 = `docs/solver-landing-playbook.md` 12단계. **사장님 판단**이고 강제 아님.
- 🟢 `/ms` 커뮤니티 LABELS는 소문자 anda체라 **앱·코퍼스와 일치한다 — 결함 없음**
  (id는 kamu체라 갈렸다. 그건 id 쪽 미결이다).
- ⚠ ms 코퍼스 9편은 전부 초심자 룰 글이라 **GTO 용어 판정의 표본이 얇다**(range 3 · equity 9).
  전략 글을 쓸 때 이 표를 «확정»으로 읽지 말고 **그 회차에 SERP를 다시 재라.**
