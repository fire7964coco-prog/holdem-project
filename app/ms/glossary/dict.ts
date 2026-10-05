// /ms/glossary — kamus UI + 46 istilah (struktur = components/glossary/dict.ts · urutan & cat = EN TERMS).
//
// Sumber definisi (2026-10-05 · 도구 확장 회차 2):
// - 글 축어 41개 = lib/posts-ms/holdem-glossary.ts 표 문안 재사용(링크·굵게만 제거, 1~3문장 절단).
//   Flop·Turn·River = «Flop / Turn / River» 한 칸을 셋으로 나눈 것 · 3-Bet = 액션표 + «Cara mengira 3-bet» 행 ·
//   Cooler = «paling sering keliru» 표 행(엄밀한 뜻 한정 포함) · Posisi = 포지션 절 도입 굵은 문장 + 둘째 문장 + In/Out of position 행 ·
//   Semi-Bluff = «Bluff / Semi-bluff» 행 전체 · Rake = «kebanyakan pot cash game»(글 그대로).
// - 번역 5개(글에 정의 없음) = Board · Offsuit · Outs · Preflop · SPR — EN desc 번역, 표기는 translation-terms-ms + 코퍼스(kad·dek·kad komuniti).
// - seo.title: DataForSEO google_ads search_volume (MY·ms, 2026-10-05, 1회):
//   «poker terms» 110 · «istilah poker» 10 · «poker glossary» 10 · «istilah dalam poker» 10 · «glosari poker» 0
//   → 말레이시아는 영어 헤드텀이 우세 → 앞머리 «Poker Terms», 말레이어 «Istilah Poker» 병기.
//   글 seoTitle(«Dari Nuts hingga Fish — Istilah Poker (Poker Terms) Hold'em»)과 다른 문장.

import type { GlossaryDict } from "@/components/glossary/dict";

export const GLOSSARY_DICT_MS: GlossaryDict = {
  sortLocale: "ms-MY",
  grouping: "letter",
  seo: {
    title: "Poker Terms A–Z — Glosari Istilah Poker Texas Hold'em",
    description:
      "Glosari istilah poker Texas Hold'em: nuts, outs, pot odds, 3-bet, c-bet, ICM, SPR, kicker, tilt dan lain-lain. Cari atau tapis ikut kategori.",
    keywords:
      "poker terms, istilah poker, glosari poker, poker glossary, istilah dalam poker, maksud nuts poker, outs poker, pot odds, 3-bet poker, c-bet, ICM poker, SPR poker",
    path: "/ms/glossary",
  },
  hero: {
    badge: "♠ {n} istilah · boleh dicari A–Z",
    h1: "Glosari Istilah Poker",
    leadBefore: "Setiap istilah Texas Hold'em yang anda dengar di meja — ",
    leadStrong: "nuts, outs, pot odds, 3-bet, ICM",
    leadAfter: " dan banyak lagi — diterangkan dengan jelas dan tepat. Cari atau tapis ikut kategori.",
  },
  searchPlaceholder: "Cari istilah (contohnya nuts, pot odds, outs)...",
  allLabel: "Semua",
  cats: { Action: "Aksi", Hand: "Tangan", Position: "Posisi", Math: "Matematik", Board: "Board", Slang: "Slang" },
  empty: { title: "Tiada istilah ditemui untuk «{q}».", hint: "Cuba kata kunci atau kategori lain." },
  related: {
    ariaLabel: "Panduan berkaitan",
    heading: "Teruskan belajar",
    items: [
      { href: "/ms/blog/texas-holdem-rules-for-beginners", label: "Peraturan Asas", desc: "Blind, showdown, asas permainan" },
      { href: "/ms/blog/holdem-hand-rankings", label: "Kedudukan Tangan", desc: "Kesemua 10 tangan, mengikut susunan" },
      { href: "/ms/blog/holdem-strategy", label: "Strategi", desc: "Posisi, pot odds, bluff" },
      { href: "/ms/hand-chart", label: "Tangan Permulaan", desc: "Range open ikut posisi" },
      { href: "/ms/calculator", label: "Kalkulator", desc: "Peluang, pot odds, ICM" },
    ],
  },
  terms: [
    { term: "3-Bet", cat: "Action", desc: "Re-raise selepas open (bet ketiga, dengan blind dikira sebagai yang pertama). Blind dikira bet 1, open-raise ialah bet 2, jadi re-raise ialah 3-bet (bukan raise pertama).", aka: ["3bet", "three-bet"] },
    { term: "All-in", cat: "Action", desc: "Mempertaruhkan semua cip anda; anda hanya boleh memenangi bahagian pot yang anda tampung.", aka: ["allin", "jam", "shove"] },
    { term: "Ante", cat: "Action", desc: "Secara tradisi, bet paksa kecil daripada semua pemain untuk mengisi pot, berasingan daripada blind — kebanyakan tournament kini menggunakan big blind ante yang dibayar oleh satu tempat duduk untuk seluruh meja." },
    { term: "Backdoor", cat: "Board", desc: "Draw yang memerlukan dua kad berturut-turut (turn dan river)." },
    { term: "Bad Beat", cat: "Slang", desc: "Kalah sebagai favourite yang jelas kepada draw bertuah." },
    { term: "Bankroll", cat: "Slang", desc: "Wang yang diasingkan untuk poker secara keseluruhan — bukan cip di atas meja." },
    { term: "Blinds", cat: "Action", desc: "Bet paksa SB/BB yang memulakan aksi — juga nama bagi tahap stakes.", aka: ["blind", "small blind", "big blind"] },
    { term: "Bluff", cat: "Action", desc: "Bluff bertaruh dengan tangan lemah untuk memaksa tangan yang lebih baik fold." },
    { term: "Board", cat: "Board", desc: "Kad komuniti di tengah meja. Board yang «basah» (wet) penuh dengan draw dan berbahaya; board yang «kering» (dry) menawarkan sedikit draw.", aka: ["kad komuniti", "community cards"] },
    { term: "Button (BTN)", cat: "Position", desc: "Posisi pengedar; bertindak terakhir selepas flop — tempat duduk terbaik di meja.", aka: ["button", "butang", "pengedar", "dealer"] },
    { term: "Call", cat: "Action", desc: "Memadankan bet semasa untuk kekal dalam tangan.", aka: ["samai", "ikut"] },
    { term: "Check", cat: "Action", desc: "Serahkan aksi tanpa bertaruh — hanya apabila tiada bet yang perlu anda padankan.", aka: ["cek"] },
    { term: "Check-Raise", cat: "Action", desc: "Check, kemudian raise selepas lawan bet — langkah yang kuat dan mengelirukan (dibenarkan di bilik kad moden).", aka: ["check raise"] },
    { term: "Continuation Bet (C-Bet)", cat: "Action", desc: "«Continuation bet» di flop oleh pemain yang raise preflop.", aka: ["c-bet", "cbet", "continuation bet"] },
    { term: "Cooler", cat: "Slang", desc: "Tangan yang terlalu kuat untuk di-fold bertembung dengan tangan yang lebih besar (dalam erti kata ketat, anda sudah ketinggalan semasa cip masuk ke pot)." },
    { term: "Draw", cat: "Hand", desc: "Tangan yang perlu bertambah baik — contohnya flush draw (4 kad ke arah flush) atau straight draw.", aka: ["flush draw", "straight draw"] },
    { term: "Equity", cat: "Math", desc: "Bahagian peratusan anda dalam pot pada saat ini, berdasarkan peluang anda untuk menang.", aka: ["ekuiti"] },
    { term: "Flop", cat: "Board", desc: "Tiga kad komuniti pertama." },
    { term: "Fold", cat: "Action", desc: "Melepaskan tangan anda dan sebarang hak ke atas pot.", aka: ["lipat", "buang", "muck"] },
    { term: "GTO", cat: "Math", desc: "Game Theory Optimal — strategi seimbang yang tidak boleh dieksploitasi, daripada solver.", aka: ["game theory optimal"] },
    { term: "Gutshot", cat: "Hand", desc: "Straight draw dalam yang memerlukan satu nilai di tengah (4 outs).", aka: ["inside straight draw"] },
    { term: "Range", cat: "Math", desc: "Set penuh tangan yang mungkin dipegang seseorang pemain dalam sesuatu situasi; pemain pro berfikir dalam range, bukan tangan tunggal.", aka: ["hand range"] },
    { term: "ICM", cat: "Math", desc: "Independent Chip Model — menukar cip tournament kepada equity wang sebenar berhampiran lonjakan bayaran.", aka: ["independent chip model"] },
    { term: "Kicker", cat: "Hand", desc: "Kad sampingan yang memecahkan seri antara tangan yang selain itu sama." },
    { term: "Limp", cat: "Action", desc: "Masuk preflop dengan hanya call big blind dan bukannya raise — biasanya permainan yang lemah dan pasif.", aka: ["limper", "limping"] },
    { term: "Nuts", cat: "Hand", desc: "Tangan terbaik yang mungkin berdasarkan board semasa (ia boleh berubah pada street seterusnya).", aka: ["the nuts"] },
    { term: "Offsuit", cat: "Hand", desc: "Dua kad yang berlainan jenis (contohnya A♠K♦). Sedikit lebih lemah daripada versi suited tangan yang sama kerana peluangnya membentuk flush jauh lebih kecil.", aka: ["off suit", "unsuited"] },
    { term: "Outs", cat: "Math", desc: "Kad yang tinggal dalam dek yang memperbaiki tangan anda menjadi tangan yang menang. Flush draw mempunyai 9 outs; open-ended straight draw mempunyai 8.", aka: ["out"] },
    { term: "Overpair", cat: "Hand", desc: "Pocket pair yang lebih tinggi daripada setiap kad di board." },
    { term: "Posisi", cat: "Position", desc: "Posisi ialah tempat duduk anda berbanding butang pengedar, dan ia menentukan bila anda bertindak. Bertindak terakhir ialah kelebihan yang kekal. Anda in position jika bertindak selepas lawan, out of position jika bertindak dahulu.", aka: ["position", "in position", "out of position", "IP", "OOP"] },
    { term: "Pot", cat: "Board", desc: "Jumlah cip yang direbut." },
    { term: "Pot Odds", cat: "Math", desc: "Nisbah pot kepada kos untuk call.", aka: ["pot odd"] },
    { term: "Preflop", cat: "Board", desc: "Pusingan pertaruhan pertama, sebelum sebarang kad komuniti dibuka, apabila setiap pemain hanya memegang dua hole card mereka.", aka: ["pre-flop"] },
    { term: "Rake", cat: "Slang", desc: "Potongan pihak rumah daripada kebanyakan pot cash game." },
    { term: "Raise", cat: "Action", desc: "Menaikkan bet semasa, memaksa pemain lain memadankan jumlah yang lebih besar atau fold.", aka: ["naik", "menaikkan"] },
    { term: "River", cat: "Board", desc: "Kad komuniti yang kelima dan terakhir." },
    { term: "Semi-Bluff", cat: "Action", desc: "Bluff bertaruh dengan tangan lemah untuk memaksa tangan yang lebih baik fold; semi-bluff melakukannya dengan draw yang masih boleh bertambah baik.", aka: ["semi bluff"] },
    { term: "Set", cat: "Hand", desc: "Three of a kind menggunakan pocket pair + satu kad board (tersembunyi dengan baik)." },
    { term: "Showdown", cat: "Board", desc: "Mendedahkan tangan selepas bet terakhir untuk menentukan pemenang." },
    { term: "SPR", cat: "Math", desc: "Stack-to-Pot Ratio — stack efektif ÷ pot. SPR yang rendah memihak kepada komitmen dengan made hand yang kuat; SPR yang tinggi memberi ganjaran kepada draw dan kemahiran selepas flop.", aka: ["stack to pot ratio"] },
    { term: "Stack", cat: "Slang", desc: "Cip di hadapan seseorang pemain.", aka: ["deep stack", "short stack"] },
    { term: "Tilt", cat: "Slang", desc: "Permainan buruk yang didorong emosi, biasanya selepas kalah." },
    { term: "Trips", cat: "Hand", desc: "Three of a kind menggunakan satu hole card + pasangan di board (kawalan kicker lebih lemah)." },
    { term: "Turn", cat: "Board", desc: "Kad komuniti yang keempat." },
    { term: "Value Bet", cat: "Action", desc: "Bet dengan tangan kuat dengan harapan di-call oleh tangan yang lebih lemah.", aka: ["value"] },
    { term: "Wheel", cat: "Hand", desc: "Straight A-2-3-4-5, straight terendah (As dikira rendah).", aka: ["the wheel"] },
  ],
};
