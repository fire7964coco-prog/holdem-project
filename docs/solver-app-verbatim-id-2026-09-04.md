# 솔버 앱 화면 축어 — ?lang=id (2026-09-04 라이브 실측)

- html lang : id
- title     : HoldemMaster GTO Trainer — Solver & Trainer GTO Gratis untuk Texas Hold'em
- desc      : Solver GTO gratis yang langsung berjalan di browser Anda, tanpa instal apa pun. Hitung strategi postflop Texas Hold'em berdasarkan range, board, dan bet size. Dari HoldemMaster.

## 제목 (h1~h3)

- Strategi GTO, langsung di browser Anda.

## 버튼·링크

- Solver
- Hasil
- Komunitas HoldemMaster
- Tentang
- Cara pakai
- Spot belajar ⚡ Instan⚡
- Trainer GTO Skor EV
- Chart preflop Range
- Equity % menang
- ① Range OOP
- ② Range IP
- ③ Board -
- ④ Bet size Pengaturan
- ⑤ Hitung
- Lihat Spot belajar
- Trainer GTO
- Tantangan Harian ●
- WASM Postflop
- HoldemMaster
- GitHub
- Bersihkan
- Muat
- Simpan
- Ganti nama
- Tambah grup
- Hapus
- Impor JSON
- Ekspor JSON
- A♠
- K♠
- Q♠
- J♠
- T♠
- 9♠
- 8♠
- 7♠
- 6♠
- 5♠
- 4♠
- 3♠
- 2♠
- A♥
- K♥
- Q♥
- J♥
- T♥
- 9♥
- 8♥
- 7♥
- 6♥
- 5♥
- 4♥
- 3♥
- 2♥
- A♦
- K♦
- Q♦
- J♦
- T♦
- 9♦
- 8♦
- 7♦
- 6♦
- 5♦
- 4♦
- 3♦
- 2♦
- A♣
- K♣
- Q♣
- J♣
- T♣
- 9♣
- 8♣
- 7♣
- 6♣
- 5♣
- 4♣
- 3♣
- 2♣
- Flop acak
- Pratinjau & Edit Tree
- Buat Tree
- 🔗 Bagikan Spot

## 라벨·표 헤더

- Pakai size berbeda untuk donk bet

## 본문 문장

- HoldemMaster GTO Trainer
- Semua fitur, tanpa batas pemakaian
- Belajar offline
- Pasang ke layar utama dan berlatih tanpa koneksi internet
- Perhitungan cepat
- Multithread — secepat solver desktop
- Mainkan spot dan dapatkan skor kerugian EV relatif terhadap pot
- Baru di sini?
- Buka spot mana pun di Spot belajar lalu tekan [Lihat hasil] — solusinya langsung tampil
- Baca Cara pakai untuk belajar membaca layar hasil
- Coba Trainer GTO — Anda akan tahu persis berapa bb yang hilang di setiap keputusan
- Setelah terbiasa, hitung hand Anda sendiri lewat Spot kustom (①–⑤)
- 0,0 combo (0,0%)
- (Belum ada range tersimpan)
- Masukkan jumlah dalam chip bilangan bulat (spot kustom memakai satuan chip bebas). Untuk berpikir dalam big blind, kami sarankan 10 chip = 1bb.
- Stack efektif:
- (Belum ada konfigurasi tersimpan)
- Status: Modul belum dimuat
- Solver belum dijalankan.

---

# 🆕 2026-09-05 추가 실측 — `/id/solver` ③ 마감 회차

> 🔴 **위 09-04 실측은 «초기 화면»만 긁었다.** 「Cara pakai」·「Spot belajar」 패널을 열지 않아
> 그 안의 라벨이 통째로 빠져 있었고, 저작 회차가 그 자리를 「자료 없음」으로 남겼다.
> 아래는 09-05에 그 두 패널을 열어 실측한 축어다(라이브 · Playwright · `?lang=id`).
> **랜딩이 쓰는 라벨의 정본은 여기다.**

## §2. 「Cara pakai」 → Membaca layar hasil (결과 화면 5구역)

| 구역 이름(축어) | 앱 설명(축어) |
|---|---|
| `Bilah aksi di atas` | Pemilih node di sepanjang jalur aksi (flop → bet → call → turn…). Klik sebuah node untuk melihat strategi di titik itu |
| `Grid 13×13 (kiri)` | Setiap kotak adalah satu hand; pembagian warnanya menunjukkan frekuensi aksi. 🟥 bet/raise (makin gelap = makin besar taruhannya) · 🟩 check/call · kotak redup = di luar range … |
| `Kotak ringkasan (kanan atas)` | Frekuensi aksi (%) dan jumlah combo untuk seluruh range |
| `Kategori hand (kanan tengah)` | Cara setiap range terhubung dengan board (top pair, draw, dan seterusnya) — untuk melihat sekilas siapa yang diuntungkan board ini |
| `Tabel (kanan bawah)` | Bobot, equity, EV, dan % aksi per hand — klik judul kolom untuk mengurutkan |

🔴 **«Ubin»·«Matriks»는 앱 id의 말이 아니다** — 형제 랜딩(fr `Tuiles`·`Matrice`)의 말이다. 되돌리지 마라.

## §3. 「Cara pakai」 → 붙여넣기용 레인지 자리 라벨

- `OOP (BB caller)` / `IP (BTN opener)` — 🔴 **앱이 «opener»를 영어로 둔다.** «pembuka»로 번역하면
  독자가 앱에서 볼 글자와 갈린다. 버튼은 `Salin`.
- 레인지 값은 언어 불변(형제 랜딩 9종과 동일).

## §4. 「Spot belajar」 전수 — 그룹 라벨 · 조건 · 스팟 이름 · 앱 note

패널 머리 = `Spot belajar — contoh siap pakai, sekali klik` · 버튼 = `⚡ Lihat hasil` · `Hitung sendiri`
꼬리 = `Range ini adalah perkiraan permainan online standar 100bb. Muat satu spot, ubah range-nya, lalu bandingkan — cara belajar yang sangat bagus.`

**그룹 1** `Single Raised Pot — BTN vs BB (dasar)` / `OOP: BB (caller) · IP: BTN (opener) · Pot 5,5bb · Stack 97,5bb`
**그룹 2** `Pot 3-bet — BB 3-bet, BTN call (SPR rendah)` / `OOP: BB (3-bettor) · IP: BTN (caller) · Pot 22,5bb · Stack 89bb`
**그룹 3** `Blind vs Blind — SB vs BB (range lebar)` / `OOP: SB (opener) · IP: BB (caller) · Pot 6bb · Stack 97bb`

| # | 보드 | 스팟 이름(축어) | 앱 note(축어) | 판정 |
|---|---|---|---|---|
| ① | A♥7♦2♣ | `Board kering A-high` | Contoh klasik range advantage. Perhatikan seberapa lebar range yang dipakai BTN untuk c-bet kecil setelah BB check — kartu As menghantam range opener dengan telak. | 🔴 **RP-20**(«BB 체크 다음» — 화면은 BB 첫 액션에서 멈춘다) |
| ② | K♠8♦3♣ | `Board kering K-high` | Bandingkan dengan board A-high. Board K-high masih menguntungkan BTN, tetapi check-nya sedikit lebih sering. Tahu kenapa? | 🟢 |
| ③ | Q♠J♦T♠ | `Board Broadway terhubung, two-tone` | Board yang tampak mengenai kedua range. Namun justru di sini BB merealisasikan equity paling rendah dari 13 spot — 77,9% berbanding 119,4% milik BTN — dan check 99,9%. Panel kategori hand menunjukkan alasannya. | 🟢 정정본 · ⚠ «dari 13 spot» 편 수 하드코딩 |
| ④ | 9♥8♥7♣ | `Board tengah terhubung, two-tone` | Tekstur klasik yang menguntungkan caller. Frekuensi c-bet BTN anjlok — spot ini menunjukkan persis kenapa “selalu c-bet” itu keliru. | 🔴 **RP-01 계열 + RP-02** |
| ⑤ | Q♠9♠2♠ | `Board monotone (satu suit)` | Perhatikan kenapa bet besar menghilang dan digantikan bet kecil serta check. Lihat seberapa sering flush yang sudah jadi pun hanya check. | 🟢 |
| ⑥ | 6♣6♦3♥ | `Board paired` | Tidak ada yang mengenai board ini, jadi porsi bluff naik. Gunakan tabel detail untuk menemukan hand mana yang bet sebagai bluff. | 🟢 |
| ⑦ | 6♠5♥2♦ | `Board rendah rainbow` | Perang overcard — BB sering check-raise di tekstur ini. Ikuti bilah aksi di atas setelah bet untuk melihat responsnya. | 🔴 **RP-19 + 조작 지시** |
| ⑧ | A♦K♠2♥ | `Board A-high, keunggulan 3-bettor` | Flop terbaik untuk 3-bettor, yang range-nya penuh AK, AA, dan KK. Di SPR rendah, bet kecil menekan seluruh range. | 🔴 **RP-03**(사이즈를 정하는 것은 SPR이 아니라 레인지의 모양) |
| ⑨ | Q♥T♥7♠ | `Board dinamis two-tone` | Pot 3-bet di board yang juga cocok untuk caller — tetapi 3-bettor tidak mengendur: 98,4% range-nya bet dengan ukuran dua pertiga pot yang sama. Lihat hand mana saja yang membentuk 0,8% yang check. | 🟢 정정본 |
| ⑩ | 8♦5♣2♠ | `Board rendah kering` | Board yang hampir sepenuhnya meleset dari range 3-bettor — tetapi overpair dan hand A-high tetap menekan. Equity vs fold equity. | 🟢 완화형(«hampir») · RP-17 감시 |
| ⑪ | K♥T♦6♠ | `Board K-high dengan T` | Di blind vs blind, range-nya lebar, jadi kedua range sama-sama lemah. Bandingkan frekuensinya dengan spot Board kering K-high di BTN vs BB. | 🟢 |
| ⑫ | 7♦6♦5♣ | `Board rendah terhubung, two-tone` | Dua range lebar bertabrakan di board yang sangat terhubung: two pair, straight, dan draw ada di mana-mana. Panel kategori hand paling bersinar di sini. | 🟢 |
| ⑬ | A♠A♥6♦ | `Board dengan dua As` | Dua As di board. Trips tidak langka — SB sekadar punya lebih banyak (88 combo berbanding 66 milik BB), jadi SB bet 80,1%. Siapa yang memegang lebih banyak As, itulah inti board ini. | 🟢 정정본(RP-04 반대편) |

🔴 **랜딩의 «노트»는 이 축어의 번역이 아니다**(브리프 §7-9·§7-10) — 위 🔴 4자리가 폐기 명제 계보라
랜딩은 «무엇을 연습하는 스팟인가»만 쓰고 수치는 §4-B 정정본만 쓴다. **이름·그룹 라벨·조건만 축어를 따른다.**

## §5. 「Cara pakai」 → Trainer GTO

- 채점 축 = `Anda tidak dinilai benar atau salah, melainkan berdasarkan kerugian EV (bb)`
- 임계 = `Diukur relatif terhadap pot — sampai 0,35% pot = Pilihan terbaik · sampai 1% = Cukup baik · di atas itu = Perlu ditinjau.`
  예시 = `di single raised pot (SRP) 5,5bb ambangnya 0,02bb dan 0,06bb; di pot 3-bet 22,5bb, 0,08bb dan 0,23bb.`
  🟢 랜딩 §13 산수 검산과 전건 일치.
- 복습 버튼 = **`Tinjau ulang`** (앱 표기 `[Tinjau ulang]`) · 필터 = `Filter`
- 오프라인 = `Data belajar offline` · `Simpan sekarang (~2,3 MB)` ·
  🔴 `Perhitungan spot kustom baru bisa dijalankan offline setelah dijalankan minimal sekali saat online`
  = 랜딩의 「오프라인으로 GTO 계산 가능이라고 쓰지 마라」 경고의 1차 근거.
