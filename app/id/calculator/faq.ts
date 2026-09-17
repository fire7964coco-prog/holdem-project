// `/id/calculator` FAQ — page.tsx(FAQPage JSON-LD)와 공용 계산기(화면 렌더)가 **같은 배열**을 쓴다.
// ★2026-09-17 신설. 정본 = `app/en/calculator/faq.ts`(8문항 · 순서 동일). 수치는 §13 언어불변 —
//   35% · 19,6% · 23,1% · 3.000 ÷ 13.000 · $397 vs $300 · 33,3% · 16,6% · 13,3% · 40% · 6,7 poin
//   (값 그대로, 구분자만 인니식 `.`/`,` — `lib/posts-id/holdem-icm.ts`의 $1.500 · holdem-pot-odds의 19,6% 선례).
// 용어 = dict.ts 머리말과 동일 출처(id-posting-reference §5 · translation-terms-id · 코퍼스 어법). Anda체.
export const CALCULATOR_FAQ_ID: { q: string; a: string }[] = [
  {
    q: "Bagaimana cara memakai kalkulator ICM?",
    a: "Masukkan jumlah pemain, stack chip tiap pemain, dan struktur pembayaran (posisi 1–6). Kalkulator langsung menunjukkan berapa nilai tiap stack dalam uang hadiah yang sebenarnya — pakai untuk keputusan call/fold dan negosiasi deal di bubble dan di meja final.",
  },
  {
    q: "Apa itu ICM di poker?",
    a: "ICM adalah singkatan dari Independent Chip Model — model matematika yang mengubah chip turnamen menjadi ekspektasi uang hadiah yang sebenarnya. Intinya: menggandakan chip Anda tidak menggandakan equity hadiah Anda.",
  },
  {
    q: "Saya chip leader — kenapa nilai ICM saya lebih rendah daripada persentase chip saya?",
    a: "Karena menang tetap hanya membayar hadiah juara 1, bukan seluruh prize pool. Dalam contoh bubble di bawah, leader dengan 40% chip hanya punya nilai ICM 33,3% (6,7 poin lebih rendah), sedangkan stack terpendek (13,3% chip) bernilai 16,6% — lebih dari persentase chipnya.",
  },
  {
    q: "Bagaimana cara menghitung ICM deal (deal meja final)?",
    a: "Sisa uang hadiah dibagi sebanding dengan nilai ICM tiap pemain. Kolom \"nilai ICM\" yang dikeluarkan kalkulator ini — setelah Anda memasukkan stack saat ini dan sisa hadiah — persis sama dengan jumlah deal yang adil.",
  },
  {
    q: "Apa bedanya chip chop dan ICM deal?",
    a: "Chip chop membagi hadiah berdasarkan persentase chip mentah, sehingga menguntungkan chip leader. ICM deal mencerminkan peluang tiap pemain finis di tiap posisi, sehingga lebih adil bagi short stack. Dalam contoh di bawah, short stack mendapat sekitar $397 dengan ICM deal dibandingkan $300 dengan chip chop — selalu minta ICM deal saat Anda short.",
  },
  {
    q: "Kenapa saya harus lebih sering fold di bubble?",
    a: "Di bubble, nilai ICM yang hilang saat Anda bust lebih besar daripada nilai yang Anda dapat saat menang. Call yang menguntungkan dalam EV chip bisa merugi dalam EV hadiah (ICM), jadi stack menengah khususnya sebaiknya menghindari coin flip.",
  },
  {
    q: "Bagaimana cara memperkirakan equity dari outs?",
    a: "Kalikan outs × 4 di flop dan × 2 di turn untuk persentase perkiraan. Misalnya, flush draw dengan 9 outs sekitar 35% di flop dan 19,6% di turn. Pakai kalkulator outs di atas untuk angka persisnya.",
  },
  {
    q: "Apa rumus pot odds?",
    a: "Jumlah call ÷ (pot + jumlah call) = equity minimum yang Anda butuhkan. Misalnya, call 3.000 ke pot 10.000 adalah 3.000 ÷ 13.000 ≈ 23,1%, jadi call menguntungkan saat equity Anda di atas 23,1%.",
  },
];
