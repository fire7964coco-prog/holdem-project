// /id/glossary — kamus UI + 46 istilah (struktur = components/glossary/dict.ts · urutan & cat = EN TERMS).
//
// Sumber definisi (2026-10-05 · 도구 확장 회차 2):
// - 글 축어 41개 = lib/posts-id/holdem-glossary.ts 표 문안 재사용(링크·굵게만 제거, 1~3문장 절단).
//   Flop·Turn·River = «Flop / Turn / River» 한 칸을 셋으로 나눈 것 · 3-Bet = 액션표 + «Hitungan 3-bet» 행 ·
//   Cooler = «Yang sering tertukar» 표 행(엄밀한 뜻 한정 포함) · Posisi = Posisi 절 도입문 + In/Out of position 행 ·
//   Semi-Bluff = «Bluff / Semi-bluff» 행 전체(semi-bluff 문장이 bluff를 받으므로).
// - 번역 5개(글에 정의 없음) = Board · Offsuit · Outs · Preflop · SPR — EN desc 번역, 표기는 translation-terms-id + 코퍼스.
//   숫자는 인니식 구분자(여기선 소수 없음 · 9/8/60% 그대로).
// - seo.title: DataForSEO google_ads search_volume (ID·id, 2026-10-05, 1회):
//   «istilah poker» 110 · «istilah dalam poker» 110 · «kamus poker» 70 · «glosarium poker» 0 · «istilah istilah poker» 0
//   → 앞머리 «Istilah Poker», 보조 «Kamus … dalam Poker». 글 seoTitle(«Dari the Nuts sampai Fish — Kamus Istilah Poker di Meja»)과 다른 문장.

import type { GlossaryDict } from "@/components/glossary/dict";

export const GLOSSARY_DICT_ID: GlossaryDict = {
  sortLocale: "id-ID",
  grouping: "letter",
  seo: {
    title: "Istilah Poker A–Z — Kamus Istilah dalam Poker Texas Hold'em",
    description:
      "Kamus istilah poker Texas Hold'em: nuts, outs, pot odds, 3-bet, c-bet, ICM, SPR, kicker, tilt, dan lainnya. Cari atau saring per kategori.",
    keywords:
      "istilah poker, istilah dalam poker, kamus poker, glosarium poker, arti nuts poker, arti outs poker, pot odds, 3-bet poker, c-bet, ICM poker, SPR poker",
    path: "/id/glossary",
  },
  hero: {
    badge: "♠ {n} istilah · bisa dicari A–Z",
    h1: "Kamus Istilah Poker",
    leadBefore: "Setiap istilah Texas Hold'em yang Anda dengar di meja — ",
    leadStrong: "nuts, outs, pot odds, 3-bet, ICM",
    leadAfter: " dan lainnya — dijelaskan dengan jelas dan tepat. Cari atau saring per kategori.",
  },
  searchPlaceholder: "Cari istilah (mis. nuts, pot odds, outs)...",
  allLabel: "Semua",
  cats: { Action: "Aksi", Hand: "Tangan", Position: "Posisi", Math: "Matematika", Board: "Board", Slang: "Slang" },
  empty: { title: "Tidak ada istilah untuk «{q}».", hint: "Coba kata kunci atau kategori lain." },
  related: {
    ariaLabel: "Panduan terkait",
    heading: "Lanjut belajar",
    items: [
      { href: "/id/blog/texas-holdem-rules-for-beginners", label: "Aturan Dasar", desc: "Blind, showdown, dasar-dasarnya" },
      { href: "/id/blog/holdem-hand-rankings", label: "Urutan Kartu", desc: "Ke-10 tangan, berurutan" },
      { href: "/id/blog/holdem-strategy", label: "Strategi", desc: "Posisi, pot odds, bluff" },
      { href: "/id/hand-chart", label: "Tangan Awal", desc: "Range open per posisi" },
      { href: "/id/calculator", label: "Kalkulator", desc: "Peluang, pot odds, ICM" },
    ],
  },
  terms: [
    { term: "3-Bet", cat: "Action", desc: "Re-raise setelah open (taruhan ketiga, dengan menghitung blind sebagai yang pertama). Blind adalah taruhan 1, open-raise adalah taruhan 2, jadi re-raise adalah 3-bet (bukan raise pertama).", aka: ["3bet", "three-bet"] },
    { term: "All-in", cat: "Action", desc: "Mempertaruhkan seluruh chip Anda; Anda hanya bisa memenangkan bagian pot yang disamai tiap lawan sampai sebesar taruhan Anda.", aka: ["allin", "jam", "shove"] },
    { term: "Ante", cat: "Action", desc: "Secara tradisional taruhan wajib kecil dari semua orang untuk mengisi pot, terpisah dari blind — sebagian besar turnamen kini memakai big blind ante yang dibayar satu kursi untuk seisi meja." },
    { term: "Backdoor", cat: "Board", desc: "Draw yang butuh dua kartu berurutan (turn dan river)." },
    { term: "Bad Beat", cat: "Slang", desc: "Kalah sebagai favorit besar oleh draw beruntung." },
    { term: "Bankroll", cat: "Slang", desc: "Uang yang disisihkan untuk poker secara keseluruhan — bukan chip di atas meja." },
    { term: "Blinds", cat: "Action", desc: "Taruhan wajib SB/BB yang memulai aksi — juga nama untuk level stake.", aka: ["blind", "small blind", "big blind"] },
    { term: "Bluff", cat: "Action", desc: "Bluff bertaruh tangan lemah untuk memaksa tangan lebih baik fold.", aka: ["gertak"] },
    { term: "Board", cat: "Board", desc: "Kartu bersama di tengah meja. Board yang «basah» (wet) penuh draw dan berbahaya; board yang «kering» (dry) hanya menawarkan sedikit draw.", aka: ["kartu bersama", "community cards"] },
    { term: "Button (BTN)", cat: "Position", desc: "Posisi dealer; beraksi terakhir postflop — kursi terbaik di meja.", aka: ["button", "dealer", "tombol dealer"] },
    { term: "Call", cat: "Action", desc: "Menyamai taruhan saat ini untuk tetap dalam tangan.", aka: ["ikut"] },
    { term: "Check", cat: "Action", desc: "Melewatkan giliran tanpa bertaruh — hanya mungkin saat tidak ada lagi jumlah taruhan yang perlu Anda samai.", aka: ["cek"] },
    { term: "Check-Raise", cat: "Action", desc: "Check, lalu raise setelah lawan bertaruh — garis kuat dan menipu (legal di room modern).", aka: ["check raise"] },
    { term: "Continuation Bet (C-Bet)", cat: "Action", desc: "«Continuation bet» di flop oleh pemain yang raise preflop.", aka: ["c-bet", "cbet", "continuation bet"] },
    { term: "Cooler", cat: "Slang", desc: "Tangan terlalu kuat untuk fold bertemu tangan lebih besar (dalam arti ketat, Anda sudah tertinggal saat masuk)." },
    { term: "Draw", cat: "Hand", desc: "Tangan yang butuh membaik — mis. flush draw (kurang satu untuk flush) atau straight draw.", aka: ["flush draw", "straight draw"] },
    { term: "Equity", cat: "Math", desc: "Persentase bagian Anda atas pot saat ini, berdasarkan peluang menang Anda.", aka: ["ekuitas"] },
    { term: "Flop", cat: "Board", desc: "Tiga kartu bersama pertama." },
    { term: "Fold", cat: "Action", desc: "Menyerahkan tangan Anda dan semua klaim atas pot.", aka: ["lipat", "muck"] },
    { term: "GTO", cat: "Math", desc: "Game Theory Optimal — strategi seimbang dan tak bisa dieksploitasi dari solver.", aka: ["game theory optimal"] },
    { term: "Gutshot", cat: "Hand", desc: "Straight draw dalam yang butuh satu rank tengah (4 outs).", aka: ["inside straight draw"] },
    { term: "Range", cat: "Math", desc: "Seluruh himpunan tangan yang mungkin dipegang seorang pemain dalam suatu spot; pro berpikir dalam range, bukan tangan tunggal.", aka: ["hand range"] },
    { term: "ICM", cat: "Math", desc: "Independent Chip Model — mengubah chip turnamen menjadi ekuitas uang riil menjelang lonjakan bayaran.", aka: ["independent chip model"] },
    { term: "Kicker", cat: "Hand", desc: "Kartu samping yang memecah seri antara tangan yang sederajat." },
    { term: "Limp", cat: "Action", desc: "Masuk preflop dengan sekadar call big blind alih-alih raise — biasanya permainan lemah dan pasif.", aka: ["limper", "limping"] },
    { term: "Nuts", cat: "Hand", desc: "Tangan terbaik yang mungkin dibuat dari board saat ini (bisa berubah di street berikutnya).", aka: ["the nuts"] },
    { term: "Offsuit", cat: "Hand", desc: "Dua kartu dengan jenis berbeda (mis. A♠K♦). Sedikit lebih lemah daripada versi suited dari tangan yang sama karena jauh lebih kecil kemungkinannya membentuk flush.", aka: ["off suit", "unsuited"] },
    { term: "Outs", cat: "Math", desc: "Kartu yang tersisa di dek yang membuat tangan Anda membaik menjadi tangan pemenang. Flush draw punya 9 outs; open-ended straight draw punya 8.", aka: ["out"] },
    { term: "Overpair", cat: "Hand", desc: "Pocket pair yang lebih tinggi dari setiap kartu di board." },
    { term: "Posisi", cat: "Position", desc: "Tempat Anda duduk menentukan kapan Anda beraksi — dan beraksi terakhir adalah keunggulan permanen. Anda in position jika beraksi setelah lawan, out of position jika beraksi lebih dulu.", aka: ["position", "in position", "out of position", "IP", "OOP"] },
    { term: "Pot", cat: "Board", desc: "Total chip yang diperebutkan." },
    { term: "Pot Odds", cat: "Math", desc: "Rasio pot terhadap biaya sebuah call.", aka: ["pot odd"] },
    { term: "Preflop", cat: "Board", desc: "Ronde taruhan pertama, sebelum kartu bersama dibuka, saat setiap pemain hanya memegang dua kartu tertutupnya.", aka: ["pre-flop"] },
    { term: "Rake", cat: "Slang", desc: "Potongan rumah dari sebagian besar pot." },
    { term: "Raise", cat: "Action", desc: "Menaikkan taruhan saat ini, memaksa lawan menyamai lebih banyak atau fold.", aka: ["menaikkan"] },
    { term: "River", cat: "Board", desc: "Kartu bersama yang kelima dan terakhir." },
    { term: "Semi-Bluff", cat: "Action", desc: "Bluff bertaruh tangan lemah untuk memaksa tangan lebih baik fold; semi-bluff melakukannya dengan draw yang masih bisa membaik.", aka: ["semi bluff"] },
    { term: "Set", cat: "Hand", desc: "Three of a kind memakai pocket pair + satu kartu board (sangat tersamar)." },
    { term: "Showdown", cat: "Board", desc: "Membuka tangan setelah taruhan terakhir untuk menentukan pemenang." },
    { term: "SPR", cat: "Math", desc: "Stack-to-Pot Ratio — stack efektif ÷ pot. SPR rendah mendukung komitmen dengan made hand yang kuat; SPR tinggi menguntungkan draw dan keterampilan postflop.", aka: ["stack to pot ratio"] },
    { term: "Stack", cat: "Slang", desc: "Chip yang ada di depan seorang pemain.", aka: ["deep stack", "short stack"] },
    { term: "Tilt", cat: "Slang", desc: "Permainan buruk yang didorong emosi, biasanya setelah kalah." },
    { term: "Trips", cat: "Hand", desc: "Three of a kind memakai satu kartu tertutup + pair di board (kontrol kicker lebih lemah)." },
    { term: "Turn", cat: "Board", desc: "Kartu bersama yang keempat." },
    { term: "Value Bet", cat: "Action", desc: "Taruhan dengan tangan kuat berharap di-call oleh tangan lebih lemah.", aka: ["value"] },
    { term: "Wheel", cat: "Hand", desc: "Straight A-2-3-4-5, straight terendah (ace bermain rendah).", aka: ["the wheel"] },
  ],
};
