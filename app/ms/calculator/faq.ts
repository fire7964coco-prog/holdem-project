// MS calculator FAQ — shared by page.tsx (FAQPage JSON-LD) and the visible render inside CalculatorTool.
// Re-written natively from app/en/calculator/faq.ts; every figure is identical to EN (§13 language-invariant).
// Register follows app/ms/solver/faq.ts (문중 anda · English poker terms · English-style numbers · $ kept).
export const CALCULATOR_FAQ_MS: { q: string; a: string }[] = [
  {
    q: "Bagaimanakah cara menggunakan kalkulator ICM?",
    a: "Masukkan bilangan pemain, stack cip setiap pemain dan struktur payout (tempat ke-1 hingga ke-6). Kalkulator terus menunjukkan nilai sebenar setiap stack dalam hadiah wang — gunakannya untuk keputusan call/fold dan rundingan deal di bubble serta di final table.",
  },
  {
    q: "Apakah itu ICM dalam poker?",
    a: "ICM ialah singkatan bagi Independent Chip Model — model matematik yang menukar cip tournament kepada jangkaan hadiah wang sebenar. Idea utamanya: menggandakan cip anda tidak menggandakan prize equity anda.",
  },
  {
    q: "Saya chip leader — mengapa nilai ICM saya lebih rendah daripada bahagian cip saya?",
    a: "Kerana menang tetap hanya membayar wang tempat pertama, bukan keseluruhan prize pool. Dalam contoh bubble di bawah, chip leader dengan 40% cip mempunyai nilai ICM hanya 33.3% (6.7 mata lebih rendah), manakala stack paling pendek (13.3% cip) bernilai 16.6% — lebih daripada bahagian cipnya.",
  },
  {
    q: "Bagaimanakah cara mengira deal ICM (final table)?",
    a: "Baki hadiah wang dibahagikan mengikut nisbah nilai ICM setiap pemain. 'Nilai ICM' yang dikeluarkan kalkulator ini — selepas anda memasukkan stack semasa dan baki hadiah — ialah jumlah deal yang adil itu sendiri.",
  },
  {
    q: "Apakah beza antara chip chop dan deal ICM?",
    a: "Chip chop membahagikan hadiah mengikut bahagian cip mentah, jadi ia memihak kepada chip leader. Deal ICM mencerminkan kebarangkalian setiap pemain menamatkan tournament pada setiap kedudukan, jadi ia lebih adil kepada short stack. Dalam contoh di bawah, short stack mendapat kira-kira $397 dengan deal ICM berbanding $300 dengan chip chop — sentiasa minta deal ICM apabila anda short.",
  },
  {
    q: "Mengapakah saya patut lebih banyak fold di bubble?",
    a: "Di bubble, nilai ICM yang anda hilang apabila tersingkir lebih besar daripada nilai yang anda peroleh apabila menang. Call yang menguntungkan dari segi chip EV boleh menjadi rugi dari segi prize EV (ICM), jadi stack sederhana khususnya patut mengelakkan coin flip.",
  },
  {
    q: "Bagaimanakah cara menganggar equity daripada outs?",
    a: "Darabkan outs × 4 pada flop dan × 2 pada turn untuk mendapat peratusan anggaran. Contohnya, flush draw dengan 9 outs ialah kira-kira 35% pada flop dan 19.6% pada turn. Gunakan kalkulator outs di atas untuk angka yang tepat.",
  },
  {
    q: "Apakah formula pot odds?",
    a: "Jumlah call ÷ (pot + jumlah call) = equity minimum yang anda perlukan. Contohnya, call 3,000 ke dalam pot 10,000 ialah 3,000 ÷ 13,000 ≈ 23.1%, jadi call menguntungkan apabila equity anda melebihi 23.1%.",
  },
];
