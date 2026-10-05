/**
 * `/id/hand-chart` FAQ — 화면(`<details>`)과 서버 `page.tsx`의 FAQPage 스키마가 같은 배열을 쓴다.
 * ★2026-10-05 신설. 뜻 정본 = ko `app/hand-chart/faq.ts`(4번은 «타입 42% vs 콤보 35.4%» 판).
 */
export const HAND_CHART_FAQ_ID: { q: string; a: string }[] = [
  {
    q: "Apakah chart starting hand harus diikuti persis?",
    a: "Chart adalah titik awal. Di meja 6-max, geser posisi satu atau dua langkah lebih longgar dibanding 9-max. Kalau ada ante, lebarkan seluruh range sebesar 5–8%. Di meja yang penuh pemain lemah, bermain lebih ketat untuk memaksimalkan value biasanya lebih menguntungkan.",
  },
  {
    q: "Benarkah ada tepat 169 starting hand?",
    a: "Ya. Kalau suit tidak dibedakan, jenis hand ada tepat 169: 13 pocket pair, 78 hand suited, dan 78 hand offsuit. Di dek sungguhan, total kombinasinya (combo) adalah 1.326.",
  },
  {
    q: "Kenapa big blind (BB) tidak ada di chart?",
    a: "BB sudah memasang 1 big blind, jadi yang berlaku adalah konsep «defense» (call/re-raise), bukan open-raise. Range defense BB sangat bergantung pada posisi dan ukuran open lawan, sehingga perlu chart tersendiri.",
  },
  {
    q: "Apakah open range 42% dari button tidak terlalu lebar?",
    a: "Pertama, samakan dulu basisnya. Angka 42% di chart ini adalah persentase dari 169 «jenis» hand, sedangkan 40–50% untuk button yang disebut materi GTO adalah persentase dari 1.326 «combo». Jika range button di chart ini dihitung dalam combo, hasilnya 35,4% — justru lebih sempit dari patokan GTO. Jadi masalahnya bukan 42% terlalu lebar; artinya, kalau lawan ketat atau masih pemula, lebih fokus ke hand premium memberi hasil lebih baik di meja sungguhan. Chart ini adalah titik acuan strategi yang seimbang.",
  },
  {
    q: "Apa yang harus dilakukan kalau kena 3-bet?",
    a: "Open range dan range untuk call 3-bet itu berbeda. Umumnya 3-bet dijawab dengan hand premium seperti AA-JJ dan AKs-AQs, ditambah sebagian bluff — wheel ace suited seperti A5s dan A4s yang memblokir AA/AK dan bisa membuat nut flush. Sisanya fold.",
  },
];
