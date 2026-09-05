"use client";

import Link from "next/link";
import { SOLVER_FAQ_ID } from "./faq";

/**
 * ★CTA는 `?lang=id`로 보낸다. 솔버가 이 파라미터를 읽어 로케일을 기억한다.
 *   **2026-09-04 라이브 확인(준비 회차)** — `?lang=id`로 열면 `<html lang="id">`가 되고 화면 전체가
 *   인도네시아어로 뜬다(title «HoldemMaster GTO Trainer — Solver & Trainer GTO Gratis untuk Texas
 *   Hold'em»). 다른 랜딩과 같이 **UTM은 붙이지 않는다**.
 *   ⚠ `curl`로는 확인할 수 없다 — SSR 초기 HTML이 한국어이고 타이틀은 JS 실행 후 바뀐다.
 */
const SOLVER_URL = "https://solver.holdemmaster.com/?lang=id";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/id/solver` 랜딩 — ★2026-09-05 신설 (10번째: ko·en·ja·es·pt·de·zh·zh-hant·fr·id)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ▶ 하는 일: 솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색 노출은 이 랜딩이 받아
 *   본체로 흘려보낸다 — **인니어권에 그 진입로가 0개였다.**
 *
 * ▶ 회차 성격: **경량판**(브리프 §0 · 사장님 판정 2026-09-04). 도구 페이지는 의도가 하나라
 *   롱테일이 변별력을 못 낸다 → A층(표기·어순·오염어)만 실측으로, 골격은 EN/fr 랜딩.
 *   유일한 입력 = `docs/id-solver-landing-brief.md`. 구조 정본 = `app/fr/solver/solver-client.tsx`.
 *
 * ▶ 키워드 근거(2026-09-04 · DataForSEO 2360 Indonesia · 브리프 §2):
 *     조준축 **`gto poker` 50**(`poker gto`와 시계열 동일 → 어순 판정 불필요) · `range poker` 20 보조 ·
 *     solver 계열 각 10 = **검색축이 아니라 정체성 표기** · ⚠ `poker gratis` 50 조준 금지(게임 의도).
 *     SERP: 인니어 원문 페이지 1개 + `translate.google.com` 4개 랭크 = **무주공산**. 의도 =
 *     정의형+도구형 혼합 → 상단 한 문단 정의 → 도구. 관련검색 1번 `gto poker free` = 훅과 일치.
 *
 * 🟢 오염어 — id에서는 확인되지 않았다(SERP top 24 전부 포커). 공통 규율만: `solver` 단독 금지 —
 *   항상 `GTO`·`poker`와 붙인다.
 *
 * 🔴 문체·용어(브리프 §3 — 협상 대상 아님): 2인칭 **`Anda`**(kamu 금지) · 무료 = **gratis** ·
 *   브라우저 = **browser**(⚠ `percuma`·`pelayar`는 말레이어) · solver·trainer·range·board·bet size·
 *   equity·postflop = **영어 그대로**(id 42편 실측 — solver 26회 · range 215회 · board 380회) ·
 *   소수 구분자 **쉼표**(`0,0%` — 앱 표기).
 *
 * 🔴 내부링크(브리프 §6) — **id에는 도구 라우트가 없다**(`hand-chart`·`calculator`·`glossary`·`quiz`
 *   전부 404 — EN 링크를 옮기면 깨진다). 대신 id 블로그 42편이 두껍고 **표준 세트 12/13 성립**.
 *   링크 개수·대상 구조는 EN 랜딩과 같게 — 도구 자리를 같은 역할의 글로 치환했다
 *   (hand-chart→`holdem-starting-hands-chart` · calculator→`holdem-pot-odds` · quiz→`holdem-equity`).
 *   ❌ `holdem-range-meaning`은 id에 없다 — 링크 걸지 않았다. 경로 = `/id/blog/<slug>`.
 *   🔴 프리플랍 레인지표 축은 `holdem-starting-hands-chart`가 소유 — 랜딩은 포스트플랍으로 가른다.
 *
 * 🔴 사실 출처 — 라벨은 앱 id 축어(`docs/solver-app-verbatim-id-2026-09-04.md` · 브리프 §1-2):
 *   · H1(앱) «Strategi GTO, langsung di browser Anda.» · 탭 «Trainer GTO / Skor EV» «Chart preflop /
 *     Range» «Equity / % menang» · 사이드바 «① Range OOP ② Range IP ③ Board ④ Bet size ⑤ Hitung» ·
 *     «Spot belajar» «Lihat hasil» «Spot kustom» · «Impor JSON» «Ekspor JSON» «Simpan» «Muat» ·
 *     «Tantangan Harian» · «Bagikan Spot» · «Flop acak» · «Pakai size berbeda untuk donk bet» ·
 *     셀링 «Semua fitur, tanpa batas pemakaian» «Belajar offline» «Perhitungan cepat» «Multithread —
 *     secepat solver desktop» · 트레이너 «skor kerugian EV relatif terhadap pot» 🟢 팟 대비 정정본 ·
 *     칩 «Masukkan jumlah dalam chip bilangan bulat … 10 chip = 1bb».
 *   · 🟢 **저작 회차의 «자료 없음» 4자리는 2026-09-05 ③ 마감이 라이브 실측으로 닫았다**
 *     (그룹 라벨·조건 · 결과 화면 5구역 이름 · OOP/IP 괄호 표기 · 트레이너 «Tinjau ulang»).
 *     원문 = 축어 문서 §2~§4. 🔴 **스팟 «이름» 7개도 갈려 있어 같이 앱 축어로 맞췄다** —
 *     라벨은 독자가 앱에서 같은 글자를 봐야 하므로 형제 랜딩(fr)과 같은 규율이다.
 *   §13 산수 검산(아홉 랜딩과 동일 · 재검산 완료):
 *     SRP 팟 5,5 = 2,5+2,5+0,5 · 스택 100−2,5 = 97,5 ·
 *     3벳팟 22,5 = 11+11+0,5 · 100−11 = 89 · 블라인드전 6 = 3+3 · 100−3 = 97 ·
 *     5,5×0,35% = 0,019 ≈ 0,02bb · 5,5×1% = 0,055 ≈ 0,06bb ·
 *     22,5×0,35% = 0,079 ≈ 0,08bb · 22,5×1% = 0,225 ≈ 0,23bb ·
 *     0,08÷5,5 = 1,45% · 0,08÷22,5 = 0,36%
 *
 * 🔴🔴 **앱 화면 문구를 «해설»로 쓰지 마라**(브리프 §7-9·§7-10). 앱 id는 폐기 명제 8개
 *   (RP-01·02·03·04·06·17·19·20)가 아직 살아 있는 계보다. 이 랜딩은:
 *   · 학습 스팟 노트에서 **특정 보드의 «관찰 지시»를 쓰지 않는다**(브리프 §7-10 «가장 안전한 처방») —
 *     «무엇을 연습하는 스팟인가»만 말하고, 수치는 형제 랜딩 9종이 공유하는 §4-B 정정본만 쓴다
 *     (A♥7♦2♣ BB 체크 98,2% · 9♥8♥7♣ BB 벳 23,7%·에퀴티 48,5 대 51,5 · 6♠5♥2♦ 체크 96,8·벳 3,2 ·
 *     Q♥T♥7♠ 98,4(🔴 0,8과 «짝»이 아니다 — ⑨ 주석) · A♠A♥6♦ 88 대 66·80,1 ·
 *     Q♠J♦T♠ 77,9/119,4·체크 99,9·BB 벳 0,1).
 *   · RP-06: 트레이너 예시는 **0,08bb**로 든다(0,05는 두 구간을 못 건넌다).
 *   · RP-03: 사이즈를 정하는 것은 스택 깊이가 아니라 레인지의 모양.
 *   · 개수 하드코딩 금지(브리프 §7-2) — 스팟 수는 배열에서 센다(`SPOT_TOTAL`).
 *
 * 🔴 **「오프라인으로 GTO 계산 가능」이라고 쓰지 마라** — 오프라인은 스팟 열람·트레이너뿐이고,
 *   커스텀 계산은 엔진을 한 번 내려받은 뒤에만 돈다(아홉 랜딩 공통 경고).
 * 🔴 언어 열거는 앱 셀렉터 **11개**(`solver/src/i18n.ts:18`)와 1:1이다.
 * 🪶 **학습 스팟에 블로그 링크가 하나도 없다 — 정상이다.** GTO 시리즈 13편은 ko·en·ja·es·zh·zh-hant뿐(id 0편).
 * ❌ RTA·봇 축 금지 · 합법성 축 금지 · 본문 백틱 금지.
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC: [string, string][] = [
  ["Harga", "Gratis — semua fitur, tanpa batas pemakaian"],
  ["Instalasi", "Tidak ada — berjalan di browser Anda (WebAssembly)"],
  ["Akun", "Tidak perlu (login hanya untuk menyinkronkan Trainer)"],
  ["Cakupan", "Postflop, heads-up (flop · turn · river)"],
  ["Tempat perhitungan", "Di perangkat Anda sendiri — perhitungan Anda tidak lewat server kami"],
  ["Kompatibilitas", "Browser modern — Windows, macOS, Linux, ponsel"],
  // 🟢 이 열거는 앱 셀렉터(11개)와 1:1이다 — 브리프 실측 `solver/src/i18n.ts:18`.
  ["Bahasa", "Bahasa Indonesia (plus Inggris, Korea, Jepang, Spanyol, Portugis, Jerman, Mandarin aksara sederhana dan tradisional, Prancis, dan Melayu)"],
  ["Mesin", "WASM Postflop open source (AGPL-3.0) · kode hasil modifikasi dipublikasikan"],
];

/**
 * 「무엇을 원하나 → 어디로」 — 내부 역할 분리 표.
 * 🔴 **id에는 도구 라우트가 없다**(브리프 §6) — EN의 hand-chart·calculator·quiz 자리를 같은 역할의
 *    id 블로그 글로 치환했다(전건 `lib/posts-id/<slug>.ts` 실존 확인 · 2026-09-05).
 */
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["Menghitung satu spot postflop dan melihat frekuensi bet", "Solver GTO di halaman ini", null],
  ["Melihat hand mana yang dibuka dari tiap posisi", "Chart starting hands", "/id/blog/holdem-starting-hands-chart"],
  ["Menghitung outs dan pot odds tanpa menjalankan solver", "Panduan pot odds", "/id/blog/holdem-pot-odds"],
  ["Melatih perkiraan equity Anda", "Panduan equity poker", "/id/blog/holdem-equity"],
];

/** 사용법 — 앱 사이드바 탭 라벨을 그대로 쓴다(브리프 §1-2 축어 · ⑤=«Hitung»). */
const STEPS = [
  { n: "①", title: "Range OOP", desc: "Warnai range preflop pemain yang out of position di grid 13×13, atau tulis sebagai teks (22+, A2s+, KTo+). Diagonal = pocket pair, kanan atas = hand suited (AKs), kiri bawah = offsuit (AKo)." },
  { n: "②", title: "Range IP", desc: "Lakukan hal yang sama untuk pemain in position. Jalan tercepat bukan menggambar dua range dari nol: muat satu spot belajar dan ubah range-nya." },
  { n: "③", title: "Board", desc: "Klik tiga kartu untuk flop, atau biarkan app memilih flop acak. Untuk mempelajari satu run-out tertentu, Anda juga bisa menetapkan turn dan river." },
  { n: "④", title: "Bet size", desc: "Atur pot awal, stack efektif, serta bet size dan raise size per street — termasuk size berbeda untuk donk bet. Untuk percobaan pertama, biarkan nilai bawaannya — cukup periksa pot dan stack." },
  { n: "⑤", title: "Hitung", desc: "Setelah pohon keputusan dibuat, jalankan perhitungan. Prosesnya berjalan di perangkat Anda sendiri, dari beberapa detik sampai beberapa menit — lalu buka layar hasil." },
];

/**
 * 앱 「Cara pakai」가 초심자에게 그대로 복사해 쓰라고 주는 레인지(축어 · 언어 불변).
 * 🔴 **이 레인지의 출처는 «학습 스팟»이지 프리플랍 표가 아니다**(M-035 결함 3 = 귀속 오류 —
 *    본문 문단이 두 출처를 가른다).
 * 🟢 자리 라벨은 앱 id 축어다(2026-09-05 실측 · 축어 문서 §3) — 앱이 «opener»를 영어로 둔다.
 *    🔴 «pembuka»로 번역하지 마라: 독자가 앱에서 볼 글자와 갈린다.
 */
const STARTER_RANGES: [string, string][] = [
  ["OOP (BB caller)", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP (BTN opener)", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

/**
 * 결과 화면 읽는 법.
 * 🔴 **행이 다섯이면 본문도 «다섯»이라고 쓴다**(M-046 E-3).
 * 🟢 구역 이름은 앱 id 「Cara pakai」 § Membaca layar hasil 축어다(2026-09-05 실측 · 축어 문서 §2).
 *    🔴 «Ubin»·«Matriks»는 형제 랜딩의 말이지 앱 id의 말이 아니다 — 되돌리지 마라.
 */
const READ_SCREEN: string[][] = [
  ["Bilah aksi di atas", "Jalur aksi hand ini (flop → bet → call → turn…)", "Klik satu node untuk melihat strategi di titik keputusan itu (spot belajar sudah dihitung sampai flop)"],
  ["Grid 13×13 (kiri)", "Satu kotak per hand; pembagian warna menunjukkan frekuensi aksi", "Merah = bet atau raise (makin gelap makin besar), hijau = check atau call, kotak redup = di luar range"],
  ["Kotak ringkasan (kanan atas)", "Frekuensi aksi (%) dan jumlah combo untuk seluruh range", "Di sinilah Anda membaca «di Q♠J♦T♠, range ini check 99,9%»"],
  ["Kategori hand (kanan tengah)", "Bagaimana tiap range mengenai board — top pair, draw, tidak kena sama sekali", "Untuk melihat sekilas board ini menguntungkan siapa"],
  ["Tabel (kanan bawah)", "Bobot, equity, EV, dan realisasi equity (EQR) per hand, plus % tiap aksi", "Bisa diurutkan per kolom; ringkasannya bisa diekspor ke CSV"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES: [string, "yes" | "no", string][] = [
  ["Perhitungan flop · turn · river", "yes", "Pohon keputusan lengkap setelah flop"],
  ["Perhitungan preflop", "no", "Range open ada di tab Chart preflop di dalam app"],
  ["Bet size dan raise size bebas", "yes", "Persentase pot, kelipatan, all-in, sizing geometris"],
  ["Donk bet dengan size sendiri", "yes", "Jalur ketika OOP bet lebih dulu diatur terpisah"],
  ["Rake dan cap rake", "yes", "Supaya sesuai kondisi meja Anda yang sebenarnya"],
  ["Edit pohon keputusan per node", "yes", "Menambah atau menghapus aksi di satu node tertentu"],
  ["Mode presisi dan memori", "yes", "Float 32-bit / integer 16-bit · batas browser ≈ 4 GB"],
  ["Target exploitability", "yes", "Makin rendah makin presisi — dan makin lama"],
  ["Simpan range dan pengaturan", "yes", "Simpan, Muat, Impor JSON, Ekspor JSON"],
  ["Ekspor CSV ringkasan", "yes", "Langsung ke spreadsheet Anda"],
  ["Tautan Bagikan Spot", "yes", "Spot yang sama terbuka di perangkat teman belajar Anda"],
  ["Spot belajar yang sudah dihitung", "yes", "Hasil langsung tampil saat diklik, tanpa menunggu"],
  ["Trainer GTO dengan skor EV", "yes", "Termasuk analisis titik lemah dan tombol Tinjau ulang"],
];

/**
 * 외부 도구 비교 — ⚠ 가격·무료 티어 «수치»는 넣지 않는다(CLAUDE.md §12-B).
 * 🔴 **「PioSolver berbayar」라고 단정하지 마라** — 1차 출처로 확인된 것은 설치형·주로 Windows뿐.
 */
const COMPARE: string[][] = [
  ["Cara menghitung", "Langsung, di browser", "Menampilkan jawaban yang sudah dihitung", "Di PC Anda, setelah diinstal"],
  ["Instalasi", "Tidak ada", "Tidak ada", "Ya, terutama Windows"],
  ["Cakupan", "Postflop, heads-up", "Sering termasuk preflop", "Tergantung versi"],
  ["Range dan pohon bisa diubah", "Bebas", "Hanya dalam katalog yang dipublikasikan", "Bebas"],
  ["Tempat perhitungan", "Di perangkat Anda", "Di penyedia, sebelum Anda membuka", "Di perangkat Anda"],
];

/**
 * 학습 스팟 — 보드 13개는 언어 불변(형제 랜딩 9종과 동일 · 라이브 축어 계보).
 * 🔴 **개수를 문장에 박지 않는다** — 배열에서 세어 쓴다(`SPOT_TOTAL` · 브리프 §7-2).
 * 🔴 **노트는 앱 해설의 번역이 아니다**(브리프 §7-9·§7-10) — 앱 id에는 폐기 명제 8개가 아직 살아
 *    있다. 여기서는 «무엇을 연습하는 스팟인가»만 말하고, 특정 보드의 관찰 지시(«…하는 것을
 *    확인하라»)는 쓰지 않는다. 수치는 §4-B 정정본만(파일 헤더).
 * 🟢 그룹 라벨·조건 문자열, 그리고 스팟 «이름» 13개는 앱 id 축어다(2026-09-05 실측 · 축어 문서 §4).
 *    🔴 이름을 «현지화»하지 마라 — 앱이 two-tone·paired·monotone·opener를 영어로 둔 자리다.
 *    노트만 우리 문안이다(위 규율).
 * 🪶 `slug`가 하나도 없다 — GTO 시리즈 해설이 id에 0편이라서다. 발행되면 그때 채운다.
 */
const SPOT_GROUPS = [
  {
    label: "Single Raised Pot — BTN vs BB (dasar)",
    cond: "OOP: BB (caller) · IP: BTN (opener) · Pot 5,5bb · Stack 97,5bb",
    items: [
      // 🟢 §4-B 화면값(체크 98,2%). RP-20(«체크 다음 BTN이…»)은 쓰지 않는다 — 화면이 그 노드를 안 준다.
      { board: "A♥7♦2♣", name: "Board kering A-high", note: "Contoh klasik range advantage — kartu As mengenai range opener jauh lebih sering daripada range caller, dan BB check di sini 98,2%" },
      { board: "K♠8♦3♣", name: "Board kering K-high", note: "Pembanding untuk board A-high: kartu tertinggi turun satu tingkat, dan pertanyaannya adalah seberapa banyak keseimbangan antara kedua range ikut bergeser" },
      // 🟢 §4-B ③(77,9/119,4 · 체크 99,9). 편 수 하드코딩 없음(RP-08).
      { board: "Q♠J♦T♠", name: "Board Broadway terhubung, two-tone", note: "Board yang tampak mengenai kedua range. Justru di sini BB merealisasikan equity paling buruk di seluruh seri ini — 77,9% terealisasi berbanding 119,4% untuk BTN — dan BB check 99,9%" },
      // 🔴 RP-01·RP-02 회피 — «콜러 우위»·«C벳 붕괴»를 쓰지 않는다. §4-B ④: OOP 벳 23,7% · 48,5 대 51,5.
      { board: "9♥8♥7♣", name: "Board tengah terhubung, two-tone", note: "Satu-satunya board single raised pot tempat BB benar-benar mengambil inisiatif: BB bet lebih dulu 23,7% — tetapi range advantage tetap di BTN: equity BB 48,5% berbanding BTN 51,5%" },
      // 🪶 모노톤 보드 — 사이즈 분포를 «관찰하라»는 지시 대신 «무엇을 공부하는 스팟인가»만.
      { board: "Q♠9♠2♠", name: "Board monotone (satu suit)", note: "Spot untuk mempelajari cara flush yang sudah jadi dan flush draw membagi bet size di board monotone — pilihan size di sini sangat berbeda dari board two-tone" },
      { board: "6♣6♦3♥", name: "Board paired", note: "Board yang jarang mengenai kedua range, sehingga porsi bluff ikut bergeser. Tabel detail menunjukkan hand mana yang bet sebagai bluff" },
      // 🔴 RP-19 회피 — «BB가 체크레이즈를 많이 한다»를 쓰지 않는다. §4-B ⑦ = 체크 96,8 · 벳 3,2뿐.
      { board: "6♠5♥2♦", name: "Board rendah rainbow", note: "Perang overcard — spot untuk mempelajari konstruksi check-raise. Di layar, aksi pertama BB: check 96,8%, bet 3,2%" },
    ],
  },
  {
    label: "Pot 3-bet — BB 3-bet, BTN call (SPR rendah)",
    cond: "OOP: BB (3-bettor) · IP: BTN (caller) · Pot 22,5bb · Stack 89bb",
    items: [
      // 🔴 RP-03 정정 — 사이즈를 정하는 것은 스택 깊이가 아니라 레인지의 모양(⑨ 98,4% 반례).
      { board: "A♦K♠2♥", name: "Board A-high, keunggulan 3-bettor", note: "Flop terbaik untuk 3-bettor yang range-nya penuh AK, AA, dan KK. Kalau bet kecil menekan seluruh range lawan, bentuk range inilah yang memungkinkannya — bukan SPR yang rendah" },
      // 🔴 §4-B ⑨ = 벳 «합계» 99,1(큰 사이즈 98,4 + 작은 사이즈 0,7) · 체크 0,8. 즉 **98,4와 0,8은
      //    짝이 아니다** — 나란히 놓으면 독자가 뺄셈을 해서 0,8%p가 사라진다. EN·es·ja는 이미 체크
      //    절을 철회했고 id도 그쪽에 붙인다(2026-09-05 ③ 마감 · 딜러 렌즈 발원).
      //    🔴 fr·de·zh·zh-hant·pt는 아직 들고 있다 = EN-먼저 소급 대상(핸드오프 미결). 되살리지 마라.
      { board: "Q♥T♥7♠", name: "Board dinamis two-tone", note: "Pot 3-bet di board yang juga cocok untuk caller — tetapi 3-bettor tidak melambat: 98,4% range-nya bet dengan satu bet size yang sama — dua pertiga pot" },
      // 🔴 RP-17 회피 — «통째로 빗나간다»를 쓰지 않는다. 수치는 브리프 §7-10(4,8 · 16,9 · 78,3 · 탑페어 0).
      { board: "8♦5♣2♠", name: "Board rendah kering", note: "Board yang nyaris tidak menyentuh range 3-bettor — gutshot 4,8%, backdoor flush 16,9%, tanpa draw 78,3%, top pair 0% — namun overpair dan hand A-high tetap menekan. Equity melawan fold equity" },
    ],
  },
  {
    label: "Blind vs Blind — SB vs BB (range lebar)",
    cond: "OOP: SB (opener) · IP: BB (caller) · Pot 6bb · Stack 97bb",
    items: [
      // 🟢 RP-18 감시 조건(빈도 수치가 붙으면 폐기 명제) 미충족 — 수치를 붙이지 마라.
      { board: "K♥T♦6♠", name: "Board K-high dengan T", note: "Di blind vs blind, kedua range lebar, sehingga keduanya sampai di flop dalam keadaan lemah. Pembanding alami untuk spot «Board kering K-high» di BTN vs BB" },
      { board: "7♦6♦5♣", name: "Board rendah terhubung, two-tone", note: "Dua range lebar bertabrakan di board yang sangat terhubung: two pair, straight, dan draw di mana-mana. Di sinilah panel kategori hand paling banyak bercerita" },
      // 🟢 §4-B ⑬(88 대 66 · 80,1). RP-04(«트립스는 드물다»)는 쓰지 않는다.
      { board: "A♠A♥6♦", name: "Board dengan dua As", note: "Dua As di board. Trips bukan hal langka — hanya saja SB punya lebih banyak (88 combo berbanding 66 untuk BB), sehingga SB bet 80,1%. Seluruh pertanyaan di board ini: siapa yang punya lebih banyak As di range-nya" },
    ],
  },
];

const SPOT_TOTAL = SPOT_GROUPS.reduce((n, g) => n + g.items.length, 0);

/* ── 공통 조각 ───────────────────────────────────────────────────────── */

function Cta({ label, variant = "solid" }: { label: string; variant?: "solid" | "outline" }) {
  const base = "inline-block rounded-xl px-8 py-3 font-bold transition-opacity";
  return (
    <a
      href={SOLVER_URL}
      target="_blank"
      rel="noopener"
      className={
        variant === "solid"
          ? `${base} bg-primary text-lg text-primary-foreground hover:opacity-90`
          : `${base} border border-primary text-primary hover:bg-primary hover:text-primary-foreground`
      }
    >
      {label}
    </a>
  );
}

/** 표는 전부 가로 스크롤 컨테이너에 넣는다 — 모바일에서 페이지 자체가 밀리지 않게. */
function Table({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            {head.map((h) => (
              <th key={h} className="py-2 pr-4 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/50 align-top">
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "py-2 pr-4 font-medium" : "py-2 pr-4 text-muted-foreground"}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SolverClientId() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      <section className="mt-6">
        {/*
          ★H1은 조준축 «GTO poker»를 «solver GTO poker»로 덮고, 훅(gratis · browser)을 정면에 싣는다.
            어순 판정 불필요(브리프 §2-1 — `gto poker`와 `poker gto`가 동일 시계열).
          🔴 `GTO`도 `solver`도 단독으로 두지 않는다(공통 규율).
        */}
        <h1 className="text-center text-2xl font-bold">
          Solver GTO poker gratis — langsung di browser Anda, tanpa instal
        </h1>
        {/*
          ★h1 직후 직답 단락. GEO 원칙 ① — AI 검색도 페이지가 아니라 이 단락을 뽑는다.
          SERP 의도가 정의형+도구형 혼합이라 «GTO가 뭔가»의 한 줄 정의를 여기서 먼저 준다(브리프 §2-2).
        */}
        <p className="mt-3 text-muted-foreground">
          <strong className="text-foreground">GTO (Game Theory Optimal)</strong> adalah strategi
          keseimbangan yang tidak menyisakan celah sistematis untuk dieksploitasi lawan, dan{" "}
          <strong className="text-foreground">solver GTO poker</strong> adalah program yang
          menghitungnya untuk satu situasi tertentu: Anda memasukkan range kedua pemain, board, dan
          bet size, lalu solver memberi tahu seberapa sering masing-masing dari{" "}
          <strong className="text-foreground">169 hand awal</strong> harus bet, check, atau fold —
          semuanya dalam grid 13×13. Solver milik HoldemMaster{" "}
          <strong className="text-foreground">berjalan langsung di browser Anda — tanpa instal,
          tanpa akun, tanpa batas pemakaian</strong>. Di samping grid: equity, EV, dan realisasi
          equity (EQR) per hand. Cakupan: postflop, heads-up.
        </p>
        <div className="mt-5 text-center">
          <Cta label="Buka solver →" />
          <p className="mt-2 text-xs text-muted-foreground">
            Paling nyaman: Chrome di komputer — di iOS dan Safari, solver menghitung dengan satu
            thread, jadi spot kustom Anda berjalan lebih lambat
          </p>
        </div>
        <Table head={["", "Ringkasnya"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── 솔버란 ───────────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Apa itu solver GTO poker? — dan apa yang tidak bisa dilakukan chart</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Solver menghitung strategi GTO dari nol. Anda memberinya range, board, stack, dan pohon
          bet size; solver beriterasi menuju titik keseimbangan sampai frekuensi bet, check, dan fold
          dari 169 hand terkunci. Persis di situlah batasnya dengan chart: chart menyimpan jawaban
          yang sudah dihitung orang lain sebelum Anda, solver{" "}
          <strong className="text-foreground">menghitung hand yang sedang ada di depan Anda</strong>.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Ganti satu kartu di board, dan jawabannya ikut berubah — bukan dihafal, melainkan dihitung
          ulang.
        </p>
        {/*
          «부르는 이름» 문단 — 검색어 변형을 여기서만 축어로 놓는다(플레이북 §4-5 · 브리프 §2-1):
          gto poker 50 · gto solver 10 · solver poker 10 · poker solver 10 · kalkulator poker 10.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          Alat yang sama punya beberapa nama:{" "}
          <strong className="text-foreground">solver GTO poker</strong>, GTO solver, solver poker
          atau poker solver, kadang juga disebut kalkulator GTO. Hasil keluarannya sering disebut
          range GTO. Apa pun kata yang Anda ketik untuk sampai ke sini — inilah yang dimaksud.
        </p>
        <Table
          head={["Yang Anda cari", "Ke mana"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link key={want} href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span key={want} className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
        {/* 🟢 내장 탭 문단 — 라벨은 앱 네비 축어(«Chart preflop / Range» · «Equity / % menang»).
            관련검색 `gto poker calculator`의 정면 문항은 FAQ가 갖고, 여기는 기능 사실만. */}
        <p className="mt-4 text-sm text-muted-foreground">
          App ini juga menyediakan dua tab yang praktis — Chart preflop (range open dan pertahanan)
          dan kalkulator Equity (% menang), yang mengadu hand Anda dengan satu hand tertentu atau satu
          range utuh. Cukup untuk memeriksa satu angka tanpa meninggalkan spot Anda.
        </p>
      </section>

      {/*
        ── ★랜딩의 핵심 절: 「범위의 플랍 이후」 본진 ──────────────────────
        `range poker`(20 · 보조)의 연속 문자열을 H2가 갖는다.
        🔴 프리플랍 표 축은 `holdem-starting-hands-chart` 소유 — 여기서는 «이후»만 말하고 «이전»은 링크.
        🔴 수치는 전부 §4-B 확정표에서만(③ 0,1% · ④ 23,7% — 둘 다 OOP 첫 액션 기준).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Range poker Anda pecah setelah flop — ini alasannya</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Mulailah dari satu fakta: range preflop stabil, range postflop tidak.{" "}
          <strong className="text-foreground">Range preflop muat dalam satu chart</strong> — hand
          yang Anda buka dari button nyaris tidak pernah berubah. Tetapi begitu tiga kartu jatuh,
          range yang sama pecah menjadi made hand, draw, dan air (hand yang tidak kena sama sekali) — dan kelanjutannya bergantung
          sepenuhnya pada tekstur board.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Dua spot di halaman ini menunjukkannya lebih jelas daripada penjelasan mana pun. Di
          keduanya, BB call open dari button dan bertindak lebih dulu di flop — posisi sama, range
          sama, pot sama:
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <li>
            Di <strong className="text-foreground">Q♠J♦T♠</strong>, BB bet lebih dulu hanya{" "}
            <span className="font-semibold text-orange-500">0,1%</span> — nyaris tidak pernah
            mengambil inisiatif.
          </li>
          <li>
            Di <strong className="text-foreground">9♥8♥7♣</strong>, BB bet lebih dulu{" "}
            <span className="font-semibold text-emerald-500">23,7%</span>.
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Dua board terhubung, two-tone, nyaris kembar — dan dua strategi yang sama sekali berbeda.{" "}
          <strong className="text-foreground">Tidak ada chart preflop yang bisa memuat perbedaan
          itu</strong>: chart ditulis sebelum flop ada. Persis itulah pekerjaan solver — ia memberi
          Anda range poker «sesudah», bukan «sebelum».
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Masih di tahap «sebelum»? Tab Chart preflop di dalam app memuat range open per posisi —
          dan untuk memahami mengapa posisi mengubah cara sebuah range dimainkan, panduan{" "}
          <Link href="/id/blog/holdem-position-play" className="font-semibold text-primary hover:underline">
            strategi posisi
          </Link>{" "}
          meletakkan dasarnya.
        </p>
      </section>

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Cara memakai solver GTO poker ini — 5 langkah</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Kalau ini solver pertama Anda:{" "}
          <strong className="text-foreground">jangan atur apa pun dulu, buka satu spot belajar
          lebih dahulu.</strong> Semuanya sudah dihitung — belajarlah membaca hasilnya sebelum
          bergulat dengan input. Untuk spot Anda sendiri, ikuti tab di bilah samping dari atas ke
          bawah.
        </p>
        <ol className="mt-4 space-y-4">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {s.n}
              </span>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        {/* 🟢 칩 단위 — 앱 축어 «Masukkan jumlah dalam chip bilangan bulat … 10 chip = 1bb»(브리프 §1-2). */}
        <p className="mt-4 text-sm text-muted-foreground">
          Di spot kustom, jumlah dimasukkan dalam chip bilangan bulat. Untuk berpikir dalam big
          blind, pakai <strong className="text-foreground">10 chip = 1bb</strong> (pot 55 = 5,5bb).
          Spot belajar dan Trainer sudah memakai skala ini.
        </p>
        {/* 🔴 두 출처를 가른다(M-046 E-2 처방) — 프리플랍 오픈 레인지는 소유 글(chart)의 것,
            아래 표는 학습 스팟이 쓰는 것. */}
        <p className="mt-4 text-sm text-muted-foreground">
          Menggambar dua range dari nol adalah jalan paling lambat. Range open per posisi ada di{" "}
          <Link href="/id/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            chart starting hands
          </Link>
          . Dua range di bawah ini adalah hal yang berbeda:{" "}
          <strong className="text-foreground">range yang benar-benar dipakai spot belajar single
          raised pot</strong> (BTN vs BB) — salin dan tempel langsung ke ① dan ②.
        </p>
        <Table head={["Tempel ke", "Range"]} rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])} />
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Cara membaca layar hasil</h2>
        {/*
          🔴 **다섯이다.** 아래 표가 다섯 행이고 이 문단이 다섯을 센다(M-046 E-3).
        */}
        <p className="mt-2 text-sm text-muted-foreground">
          Layar hasil punya lima area kerja: <strong className="text-foreground">bilah aksi</strong>{" "}
          di atas, <strong className="text-foreground">grid 13×13</strong> di kiri, lalu di
          kanan <strong className="text-foreground">kotak ringkasan, kategori hand, dan tabel
          detail</strong>.
          Aturan sederhananya: di kiri Anda membaca «bagaimana satu hand dimainkan», di kanan
          «bagaimana seluruh range bermain» — hanya tabel di kanan bawah yang turun lagi ke level
          per hand.
        </p>
        <Table head={["Di mana", "Yang ditampilkan", "Cara membacanya"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          Ketika realisasi equity (EQR) turun di bawah 100%, berhentilah sejenak: hand Anda tidak
          menguangkan seluruh equity yang dimilikinya. Alasannya berbeda di tiap spot — posisi,
          inisiatif, siapa yang punya bagian atas range lebih tebal.{" "}
          <strong className="text-foreground">Solver tidak berkata «mainkan seperti ini»: ia
          menunjukkan mengapa frekuensinya berbentuk seperti itu</strong>, dan «mengapa» itu paling
          jelas terbaca di EQR.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Kalau istilah-istilah itu masih asing, panduan{" "}
          <Link href="/id/blog/holdem-equity" className="font-semibold text-primary hover:underline">
            equity poker
          </Link>{" "}
          dan panduan{" "}
          <Link href="/id/blog/holdem-continuation-bet" className="font-semibold text-primary hover:underline">
            continuation bet
          </Link>{" "}
          menjelaskan apa yang sebenarnya diukur solver sebelum Anda mencoba membaca angkanya —
          dan untuk istilah lainnya, ada{" "}
          <Link href="/id/blog/holdem-glossary" className="font-semibold text-primary hover:underline">
            glosarium Texas Hold&apos;em
          </Link>
          .
        </p>
      </section>

      {/* ── 무료 범위 (기능표) ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Semuanya benar-benar gratis? — sampai mana batasnya</h2>
        {/* 🟢 셀링 축어 «Semua fitur, tanpa batas pemakaian»(브리프 §1-2)을 이 절이 본문 문장으로 갖는다. */}
        <p className="mt-2 text-sm text-muted-foreground">
          Benar-benar gratis — semua fitur, tanpa batas pemakaian, dan tanpa catatan kaki yang
          biasa: tidak ada kartu pembayaran yang harus ditinggalkan, tidak ada fitur yang dikunci,
          tidak ada kuota perhitungan harian, tidak ada pendaftaran. Bahkan pengaturan yang biasanya
          hanya ada di solver desktop berbayar —{" "}
          <strong className="text-foreground">rake dan cap rake, mode presisi, edit pohon keputusan
          per node</strong> — ada di sini. Satu-satunya batas yang sebenarnya: alat ini hanya
          mencakup <strong className="text-foreground">situasi heads-up setelah flop</strong>.
        </p>
        <Table
          head={["Fitur", "Termasuk", "Catatan"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span key={name} className="font-bold text-emerald-600">Ya</span>
            ) : (
              <span key={name} className="font-bold text-muted-foreground">Tidak</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="Coba gratis →" variant="outline" />
        </div>
      </section>

      {/* ── 플랍 이후 범위 ───────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Mengapa hanya flop, turn, dan river?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Ini <strong className="text-foreground">solver postflop</strong>: sejak flop jatuh, ia
          menghitung kelanjutannya untuk kedua pemain. Tidak menghitung preflop adalah pilihan —
          preflop adalah persoalan lain, cukup stabil untuk dimuat dalam chart, sedangkan permainan
          postflop ditulis ulang di setiap board baru.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Di dalam batas itu, tidak ada yang dikurangi:{" "}
          <strong className="text-foreground">range kedua pemain</strong>, flop, turn, atau river
          mana pun, pot awal, stack efektif, dan pohon bet size lengkap per street. Hasilnya bukan
          jawaban umum, melainkan jawaban untuk meja Anda — termasuk rake, yang diabaikan sebagian
          besar materi belajar.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Untuk bagian preflop, bukalah{" "}
          <Link href="/id/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            chart starting hands
          </Link>
          . Keduanya bersama-sama menjawab satu hand dari ujung ke ujung: chart memutuskan hand apa
          yang Anda masukkan, solver memutuskan semua yang terjadi setelah flop.
        </p>
      </section>

      {/* ── GTO 트레이너 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        {/* 🪶 제품명은 앱 id 축어 «Trainer GTO»(탭 «Trainer GTO / Skor EV» — 라벨 정본).
            관련검색 `gto poker practice` 흡수 자리. */}
        <h2 className="text-xl font-bold">Trainer GTO — latihan poker yang menilai setiap keputusan Anda</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Trainer GTO ada di alat yang sama, tanpa pendaftaran tambahan. Ia mengubah spot yang sudah
          dihitung menjadi latihan: di satu titik keputusan nyata, Anda mendapat satu hand, Anda
          memilih satu aksi, dan Trainer memberi skor. Kalau Anda ingin berlatih poker gratis — tanpa
          menghafal jalur, cukup melatih{" "}
          <strong className="text-foreground">keputusan</strong> — mulailah dari sini. Ada juga
          Tantangan Harian untuk menjaga ritme latihan.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Skornya bukan sekadar «benar atau salah»:{" "}
          <strong className="text-foreground">yang diukur adalah EV yang hilang dari pilihan
          Anda</strong>. GTO memang mencampur aksinya, jadi memilih opsi yang paling jarang bukan
          otomatis kesalahan — satu-satunya pertanyaan adalah berapa biayanya. Setelah Anda memilih,
          frekuensi dan EV tiap aksi tampil di samping biaya pilihan Anda.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/*
            🔴 팟 대비 비율이다. **절대 bb가 아니다** — 앱 id 축어 «skor kerugian EV relatif terhadap
               pot»(브리프 §1-2 🟢 정정본). 문턱(0,35%/1% · 0,02/0,06 · 0,08/0,23 · 바닥 0,02/0,05 ·
               exploitability 0,5%)은 형제 랜딩 9종 공통.
            🪶 앱 CTA «berapa bb yang hilang di setiap keputusan»은 오류가 아니다 — 표시 «값»은
               bb이고 «합격선»만 팟 대비다.
            🔴 RP-06: 예시는 **0,08bb**로 든다(0,05bb는 두 구간을 못 건넌다 — 0,05÷5,5 = 0,91%).
          */}
          <li className="text-muted-foreground">
            Penilaian diukur <strong className="text-foreground">relatif terhadap pot</strong> —{" "}
            <span className="font-semibold text-emerald-500">sampai 0,35%</span>: pilihan terbaik
            · <span className="font-semibold text-blue-500">sampai 1%</span>: masih bisa diterima ·{" "}
            <span className="font-semibold text-orange-500">di atas itu</span>: spot yang perlu
            ditinjau ulang
          </li>
          <li className="text-muted-foreground">
            Selisih 0,08bb yang sama berbobot 1,45% di pot 5,5bb (perlu ditinjau) dan hanya 0,36% di
            pot 22,5bb (masih bisa diterima). Dalam bb: dua ambang single raised pot jatuh di 0,02bb
            dan 0,06bb, ambang pot 3-bet di 0,08bb dan 0,23bb. Dua batas bawah (0,02bb dan 0,05bb)
            mencegah selisih yang sangat kecil dihitung sebagai kesalahan
          </li>
          {/*
            🔴 «수만 가지» 같은 상한 함의 표현 금지(M-061 F-1) — 스팟이 늘어도 참인 **하한 표현**으로
               («lebih dari sepuluh ribu» = en «run past ten thousand» · fr «plus de dix mille» 동형).
            ⚠ **정확한 수를 박지 마라** — 그 데이터는 솔버가 소유해 우리 빌드가 못 읽는다(반드시 낡는다).
          */}
          <li className="text-muted-foreground">
            Soal latihannya diambil dari beberapa titik keputusan per spot —{" "}
            <strong className="text-foreground">lebih dari sepuluh ribu</strong> kombinasi (target
            exploitability 0,5%). Anda juga bisa menyaring satu jenis situasi saja: single raised
            pot, pot 3-bet, atau blind vs blind
          </li>
          <li className="text-muted-foreground">
            Hand dibagikan sesuai <strong className="text-foreground">bobot sebenarnya di range
            GTO</strong> — seberapa sering satu hand muncul sama dengan seberapa sering Anda
            benar-benar akan memegangnya di spot itu
          </li>
          <li className="text-muted-foreground">
            Rentetan jawaban benar, analisis titik lemah, dan{" "}
            <strong className="text-foreground">tombol Tinjau ulang</strong> (hand tempat Anda
            paling banyak kehilangan EV muncul kembali) bekerja dari riwayat Anda. Tanpa login,
            riwayat tetap di perangkat Anda
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="Buka Trainer GTO →" variant="outline" />
        </div>
      </section>

      {/* ── 학습 스팟 ────────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          {SPOT_TOTAL} spot poker yang sudah dihitung, siap dibuka sekali klik
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Spot di bawah ini sudah dihitung sepenuhnya — strateginya tampil begitu Anda mengeklik,
          tanpa menunggu, tanpa pengaturan. Range-nya mendekati permainan online standar 100bb; cara
          belajar tercepat adalah memuat satu spot, mengubah satu range, menjalankan ulang
          perhitungan, dan melihat apa yang bergeser. Untuk memahami bagaimana tekstur board menulis
          ulang strategi, tidak ada jalan yang lebih pendek.
        </p>
        {SPOT_GROUPS.map((g) => (
          <div key={g.label} className="mt-5">
            <p className="text-sm font-semibold">{g.label}</p>
            <p className="text-xs text-muted-foreground">{g.cond}</p>
            <ul className="mt-2 space-y-1.5">
              {g.items.map((s) => {
                const item = s as { board: string; name: string; note: string; slug?: string };
                return (
                  <li key={item.board} className="text-sm">
                    <span className="font-semibold">{item.board}</span>
                    <span className="mx-1.5 text-muted-foreground">·</span>
                    {item.slug ? (
                      <Link
                        href={`/id/blog/${item.slug}`}
                        className="font-semibold text-primary hover:underline"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-medium">{item.name}</span>
                    )}{" "}
                    <span className="text-muted-foreground">— {item.note}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      {/* ── 외부 도구 비교 ───────────────────────────────────────────── */}
      {/*
        ⚠ 가격·무료 티어 «수치»를 쓰지 않는다(§12-B). «방식의 차이»만.
        🪶 SERP 상위가 전부 해외 도구 브랜드(gtowizard·gtogecko·gtobase·gtolab·gtopre — 브리프 §2-2).
           브랜드 축은 못 먹지만 비교 문맥의 언급은 정당하다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">GTO Wizard, PioSolver, TexasSolver: apa bedanya?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Semuanya bisa disebut GTO solver atau solver poker; bedanya ada pada{" "}
          <strong className="text-foreground">tempat dan waktu perhitungan</strong>. Pustaka solusi
          seperti GTO Wizard bekerja dengan cara menelusuri katalog yang sudah dihitung sebelumnya —
          cepat, dan preflop sering ikut tercakup. Solver desktop seperti PioSolver atau TexasSolver
          diinstal dan menghitung di PC Anda. Alat di halaman ini{" "}
          <strong className="text-foreground">menghitung langsung di browser — perhitungan dimulai
          saat Anda mengajukan pertanyaannya</strong>, range dan pohon bisa diubah sesuka hati, tanpa
          menginstal apa pun.
        </p>
        <Table
          head={["", "Solver HoldemMaster", "Pustaka solusi", "Solver desktop"]}
          rows={COMPARE}
        />
        {/*
          🔴 «남의 무료 티어 수치»를 적지 않는다. SERP 실측 구조만(브리프 §2-2): 인니어 원문은
             `poker.academy` 하나, 나머지는 번역 페이지·해외 브랜드·Play 스토어 앱.
        */}
        <p className="mt-4 text-sm text-muted-foreground">
          Cari «gto poker free», dan yang muncul kebanyakan adalah halaman berbahasa Inggris yang
          diterjemahkan otomatis, aplikasi dari toko aplikasi, atau layanan berlangganan — dan opsi
          gratisnya hampir selalu datang dengan syarat: paket yang hanya membuka sebagian katalog,
          kuota harian, kredit yang habis, atau program yang harus diinstal. Di sini tidak ada
          syarat — <strong className="text-foreground">tanpa pendaftaran, tanpa batas harian, tanpa
          kredit</strong>. Cukup biarkan halaman ini terbuka sambil meninjau hand yang sudah Anda mainkan.
        </p>
        {/*
          🔴 이 문단의 근거는 wasm-postflop.pages.dev의 자기 고지와 GitHub 저장소 제목
             "[Development suspended]" — 앱 AGPL 고지와 일치(형제 랜딩 9종 공통).
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          Satu catatan untuk yang datang dari <strong className="text-foreground">WASM
          Postflop</strong>: halaman proyek aslinya sendiri mengumumkan bahwa pengembangannya
          dihentikan, dan repositorinya ditandai sebagai ditangguhkan. Solver ini adalah fork yang
          meneruskan mesin itu setelah proyek aslinya berhenti — lisensi AGPL-3.0 yang sama, kode
          yang sama-sama dipublikasikan, ditambah antarmuka baru, spot belajar, dan Trainer.
        </p>
      </section>

      {/* ── 모바일·오프라인 (PWA) ───────────────────────────────────── */}
      {/*
        근거: 앱이 이미 PWA이고 셀링 축어가 «Belajar offline / Pasang ke layar utama dan berlatih
        tanpa koneksi internet»(브리프 §1-2 · 축어 문서).
        🔴 **「설치할 수 없다」로 쓰지 마라** — 앱 등록 준비 중이라 출시 순간 거짓이 된다.
        🔴 **「오프라인으로 계산까지 된다」로 쓰지 마라** — 오프라인은 스팟 열람·트레이너뿐.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Di ponsel? Offline?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Dua-duanya bisa. Tidak ada yang perlu diinstal untuk memulai — browser ponsel membuka
          versi lengkapnya. Meski begitu,{" "}
          <strong className="text-foreground">kalau mau, pasang ke layar utama</strong>: solver ini
          akan berperilaku seperti aplikasi biasa — ikon sendiri, layar penuh, tanpa bilah alamat.
          Ini pintasan browser, bukan program yang diinstal — tidak pernah meminta izin sistem.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Setelah dipasang, spot belajar dan Trainer GTO tetap ada di perangkat Anda,{" "}
          <strong className="text-foreground">dan Anda bisa terus berlatih tanpa koneksi
          internet</strong> — di kereta, di pesawat, saat kuota data menipis. Batas yang penting:
          menghitung spot kustom dari nol mengharuskan mesin perhitungan pernah dimuat setidaknya
          sekali.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Di iPhone dan Safari, batasan browser memaksa perhitungan satu thread — spot besar lebih
          nyaman di komputer. Cara memasang: ikon instal di kanan bilah alamat pada Chrome dan Edge,
          menu Bagikan → «Tambah ke Layar Utama» di iPhone.
        </p>
      </section>

      {/* ── 함께 읽으면 좋은 글 — EN «tools alongside» 4항과 같은 구조(도구 → 같은 역할의 id 글) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Bacaan pendamping solver</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/id/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
              Chart starting hands
            </Link>{" "}
            {/* 🔴 M-046 E-2 — 두 출처를 갈라 적는다: 오픈 레인지는 chart, 붙여넣기 레인지는 학습 스팟의 것. */}
            — solver ini hanya postflop. Hand mana yang <strong>dibuka</strong> dari tiap posisi ada
            di chart itu. Range siap tempel di atas adalah hal yang berbeda — range BTN vs BB yang
            dipakai spot belajar single raised pot
          </li>
          <li>
            <Link href="/id/blog/holdem-pot-odds" className="font-semibold text-primary hover:underline">
              Cara menghitung pot odds
            </Link>{" "}
            — outs dan pot odds dalam 10 detik, ketika Anda butuh satu angka tanpa menjalankan solver
          </li>
          <li>
            <Link href="/id/blog/holdem-3bet" className="font-semibold text-primary hover:underline">
              3-bet di poker
            </Link>{" "}
            — kapan 3-bet dan seberapa besar: latar untuk grup spot pot 3-bet di atas
          </li>
          <li>
            <Link href="/id/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
              Strategi Texas Hold&apos;em
            </Link>{" "}
            — konsep yang diukur solver dalam angka: posisi, range, agresi, dan kontrol pot
          </li>
        </ul>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {/*
        배열은 `./faq.ts`가 단일 출처다(서버 `page.tsx`의 FAQPage 스키마와 공유).
        🔴 본문에도 전부 렌더한다 — 스키마에만 두면 LLM이 못 읽는다(브리프 §1-3).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">FAQ — pertanyaan yang sering diajukan</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_ID.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">Q. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 오픈소스 고지 (AGPL) ─────────────────────────── */}
      <section className="mt-12 text-center">
        <Cta label="Buka solver GTO poker gratis →" />
      </section>
      {/*
        🔴 AGPL 고지 — 앱 화면과 같은 사실. **훅으로 키우지 않는다**(2026-08-22 판정).
      */}
      <p className="mt-8 text-xs text-muted-foreground">
        App ini berbasis WASM Postflop karya Wataru Inariba (AGPL-3.0), disesuaikan dan dikembangkan lebih
        lanjut oleh HoldemMaster. Kode sumber hasil modifikasi selengkapnya dipublikasikan di bawah lisensi
        yang sama.
      </p>
    </div>
  );
}
