/**
 * `/ms/hand-chart` FAQ — 화면 아코디언과 서버 page.tsx의 FAQPage 스키마가 같은 배열을 쓴다.
 * ★2026-10-05 신설. 뜻 정본 = ko `app/hand-chart/faq.ts`(4번은 «타입 42% vs 콤보 35.4%» 판).
 */
export const HAND_CHART_FAQ_MS: { q: string; a: string }[] = [
  {
    q: "Perlukah saya ikut carta tangan permulaan sepenuhnya?",
    a: "Carta ialah titik permulaan. Di meja 6-max, longgarkan range setiap posisi satu hingga dua langkah berbanding meja 9 pemain (main seperti posisi yang lebih lewat). Jika ada ante, luaskan keseluruhan range sebanyak 5–8%. Di meja yang ramai fish, lebih menguntungkan untuk main lebih ketat dan memaksimumkan nilai.",
  },
  {
    q: "Betulkah ada tepat 169 tangan permulaan dalam poker?",
    a: "Ya. Jika suit tidak dibezakan, jenis tangan permulaan poker ialah tepat 169: 13 pocket pair, 78 tangan suited dan 78 tangan offsuit. Dalam dek sebenar, jumlah kombo ialah 1,326.",
  },
  {
    q: "Kenapa BB tiada dalam carta?",
    a: "BB sudah meletakkan 1BB, jadi yang terpakai ialah konsep “defend” (call/re-raise), bukan open-raise. Range defend BB berubah sepenuhnya ikut posisi dan saiz open lawan, jadi ia memerlukan carta tersendiri.",
  },
  {
    q: "Okeykah open range 42% dari button?",
    a: "Mula-mula samakan asasnya. 42% dalam carta ini ialah bahagian daripada 169 “jenis” tangan, manakala 40–50% button yang disebut dalam bahan GTO ialah bahagian daripada 1,326 “kombo”. Jika range button carta ini ditukar kepada kombo, ia jadi 35.4% — lebih sempit daripada julat GTO itu. Jadi 42% bukan masalah kerana terlalu luas; maksudnya, jika lawan ketat atau pemula, fokus lebih pada tangan premium memberi pulangan sebenar yang lebih tinggi. Carta ini ialah titik rujukan untuk strategi yang seimbang.",
  },
  {
    q: "Apa perlu buat jika kena re-raise (3-bet)?",
    a: "Open range dan range untuk call 3-bet adalah berbeza. Biasanya, jawab 3-bet dengan tangan premium seperti AA–JJ dan AKs–AQs, serta sedikit bluff (suited wheel ace seperti A5s dan A4s yang menyekat AA dan AK dan boleh membuat nut flush). Selebihnya fold.",
  },
];
