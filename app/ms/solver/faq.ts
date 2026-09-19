/** Shared by the visible FAQ and FAQPage schema. Copy basis: docs/ms-solver-landing-brief.md. */
export interface FaqItem { q: string; a: string; }

export const SOLVER_FAQ_MS: FaqItem[] = [
  {
    q: "Apakah maksud GTO dalam poker?",
    a: "GTO ialah singkatan bagi Game Theory Optimal: strategi keseimbangan yang tidak memberi lawan peluang untuk mengeksploitasinya secara sistematik. Strategi ini boleh mencampurkan beberapa tindakan untuk tangan yang sama, contohnya bet pada sesetengah masa dan check pada masa lain. Sebab itulah hasil solver menunjukkan kekerapan tindakan, bukan satu arahan tetap bagi setiap tangan.",
  },
  {
    q: "Apakah itu solver poker GTO?",
    a: "Solver poker GTO mengira strategi untuk situasi yang anda tetapkan. Masukkan range kedua-dua pemain, board, stack dan saiz bet; solver kemudian melakukan pengiraan berulang untuk menghampiri keseimbangan. Hasilnya menunjukkan kekerapan tindakan bagi 169 jenis tangan permulaan dalam grid 13×13, bersama equity, EV (nilai jangkaan) dan EQR (realisasi equity).",
  },
  {
    q: "Adakah solver GTO ini percuma sepenuhnya?",
    a: "Ya. Semua ciri boleh digunakan secara percuma tanpa had penggunaan: mengira spot sendiri, membuka Spot belajar, berlatih dengan Trainer GTO, menyimpan dan mengeksport. Tiada pelan berbayar, kredit pengiraan atau kuota harian. Akaun juga tidak diwajibkan.",
  },
  {
    q: "Adakah saya perlu membuka akaun?",
    a: "Tidak. Anda boleh terus mengira dan berlatih tanpa akaun. Jika anda log masuk dengan akaun HoldemMaster, rekod latihan Spot belajar dan Cabaran Harian boleh disegerakkan antara peranti. Spot yang anda kira sendiri serta rekod latihannya kekal pada peranti ini sahaja, walaupun anda log masuk; kedua-duanya tidak disimpan dalam akaun.",
  },
  {
    q: "Adakah saya perlu memuat turun atau memasang aplikasi?",
    a: "Tidak perlu memasang perisian. Buka solver dalam pelayar seperti Chrome, Edge, Firefox atau Safari; enjin WebAssembly dimuatkan melalui halaman tersebut dan pengiraan berjalan pada pemproses peranti anda. Anda juga boleh menambah aplikasi ke skrin utama untuk membukanya dengan lebih mudah.",
  },
  {
    q: "Adakah antara muka tersedia dalam Bahasa Melayu?",
    a: "Ya. Menu, Spot belajar, panduan penggunaan dan Trainer GTO tersedia dalam Bahasa Melayu. Butang pada halaman ini membuka versi Bahasa Melayu secara terus.",
  },
  {
    q: "Apakah itu range dalam poker?",
    a: "Range ialah kumpulan tangan yang mungkin dipegang oleh seseorang pemain dalam satu situasi, dengan wajaran bagi setiap kombinasi. Solver menggunakan range kedua-dua pemain untuk mengira strategi setiap tangan. Ia tidak meneka satu tangan tertentu yang sedang dipegang oleh lawan.",
  },
  {
    q: "Bagaimanakah cara menggunakan solver poker ini?",
    a: "Untuk kali pertama, buka Spot belajar dan pilih Lihat hasil. Contoh ini sudah dikira, jadi anda boleh belajar membaca hasilnya terlebih dahulu. Untuk spot sendiri, ikuti ① Range OOP, ② Range IP, ③ Board, ④ Bet size dan ⑤ Kira. Dalam langkah terakhir, pilih Bina Tree, kemudian Jalankan Solver.",
  },
  {
    q: "Adakah solver ini turut mengira strategi preflop?",
    a: "Enjin solver mengira situasi heads-up, iaitu dua pemain, selepas flop: flop, turn dan river. Ia tidak menyelesaikan strategi preflop. Untuk rujukan sebelum flop, tab Carta preflop dalam aplikasi menyediakan range open dan pertahanan mengikut posisi. Carta memberi rujukan sedia ada; solver mengira semula strategi postflop berdasarkan tetapan anda.",
  },
  {
    q: "Sejauh manakah ketepatan solver dalam pelayar?",
    a: "Solver melakukan pengiraan berulang ke arah sasaran exploitability yang anda tetapkan. Sasaran lebih rendah memerlukan lebih banyak masa pengiraan; semak nilai exploitability akhir kerana pengiraan juga boleh berhenti apabila had iterasi dicapai. Ketepatan perlu dibaca dalam konteks range dan pokok keputusan yang anda masukkan. Pokok yang sangat besar memerlukan lebih banyak memori dan mungkin lebih sesuai dikira dengan solver desktop.",
  },
  {
    q: "Bolehkah saya menggunakannya pada Mac, iPhone atau Safari?",
    a: "Boleh. Solver berjalan dalam pelayar pada Windows, macOS, Linux dan telefon. Pada iOS dan Safari, pengiraan menggunakan satu thread, jadi spot sendiri mengambil masa lebih lama. Chrome pada komputer lebih sesuai untuk pengiraan besar; Spot belajar yang sudah dikira dan Trainer GTO lebih mudah digunakan pada telefon.",
  },
  {
    q: "Bolehkah saya berlatih tanpa sambungan internet?",
    a: "Boleh, selepas aplikasi dipasang ke skrin utama dan data Spot belajar serta Trainer dimuatkan pada peranti. Untuk mengira spot sendiri ketika luar talian, enjin solver perlu dimuatkan sekurang-kurangnya sekali semasa ada sambungan internet. Pada iPhone, gunakan menu Kongsi dan Tambah ke Skrin Utama; Chrome dan Edge menyediakan pilihan pemasangan dalam pelayar.",
  },
  {
    q: "Berapa lama satu pengiraan mengambil masa?",
    a: "Masa bergantung pada saiz pokok keputusan, sasaran ketepatan dan pemproses peranti anda. Lebih banyak pilihan bet dan raise memerlukan lebih banyak pengiraan. Untuk melihat strategi dengan segera, buka Spot belajar: hasilnya sudah dikira dan boleh terus dibaca.",
  },
  {
    q: "Adakah rake diambil kira?",
    a: "Ya. Anda boleh menetapkan peratusan rake dan had maksimum rake sebelum menjalankan pengiraan. Anda juga boleh mengubah saiz pot, stack berkesan serta pilihan bet dan raise untuk setiap street supaya model yang dikira sepadan dengan situasi yang ingin anda kaji.",
  },
  {
    q: "Apakah itu Trainer GTO?",
    a: "Trainer GTO ialah mod latihan berdasarkan spot yang sudah dikira. Anda menerima satu tangan, memilih tindakan dan melihat kerugian EV berbanding tindakan terbaik. Tangan dipilih mengikut wajaran range supaya latihan mencerminkan kekerapan kombinasi dalam spot tersebut. Anda juga boleh menyimpan spot yang anda kira sendiri melalui Berlatih spot ini dan berlatih dengannya dalam Spot saya pada peranti ini.",
  },
  {
    q: "Mengapakah penilaian menggunakan kerugian EV berbanding saiz pot?",
    a: "Tindakan yang jarang digunakan tidak semestinya salah kerana strategi GTO mencampurkan tindakan. Trainer menilai EV yang dilepaskan: sehingga 0.35% daripada pot ialah Pilihan terbaik, sehingga 1% ialah Boleh diterima, dan selebihnya Perlu disemak. Ambang ini mempunyai had minimum 0.02bb dan 0.05bb. Kerugian 0.08bb bersamaan kira-kira 1.45% bagi pot 5.5bb, tetapi hanya 0.36% bagi pot 22.5bb; keputusan kedua masih boleh diterima.",
  },
  {
    q: "Di manakah rekod latihan saya disimpan?",
    a: "Secara lalai, rekod disimpan pada peranti anda tanpa memerlukan akaun. Jika anda log masuk dengan akaun HoldemMaster, rekod latihan Spot belajar dan Cabaran Harian boleh disimpan dalam akaun untuk disambung pada peranti lain. Spot yang anda kira sendiri serta rekod latihannya kekal pada peranti ini sahaja, walaupun anda log masuk; kedua-duanya tidak disimpan dalam akaun. Rekod latihan digunakan untuk melihat kemajuan, mengenal pasti kelemahan dan menyemak semula keputusan yang kehilangan EV paling banyak.",
  },
  {
    q: "Bolehkah saya berlatih dengan spot yang saya kira sendiri?",
    a: "Boleh. Selepas pengiraan selesai, pilih Berlatih spot ini pada skrin hasil. Spot itu menjadi soalan latihan dalam tab Spot saya. Soalan dan rekod latihannya hanya disimpan pada peranti ini, termasuk apabila anda log masuk; kedua-duanya tidak disegerakkan melalui akaun. Hasil yang dikira dengan strategi terkunci ditandai supaya anda dapat membezakannya daripada latihan keseimbangan GTO.",
  },
  {
    q: "Apakah fungsi Kunci strategi pada nod ini?",
    a: "Fungsi ini membolehkan anda menetapkan kekerapan tindakan pada satu nod, kemudian memilih Kunci dan kira semula. Gunakannya untuk mengkaji respons terhadap strategi yang anda tetapkan. Hasil pengiraan dengan kunci ialah respons kepada kekangan tersebut, bukan strategi keseimbangan GTO tanpa kekangan. Anda boleh membandingkan hasil sebelum dan selepas, kemudian membuka kunci dan mengira semula.",
  },
  {
    q: "Bolehkah saya menyimpan atau berkongsi spot?",
    a: "Boleh. Range dan tetapan boleh disimpan serta diimport atau dieksport dalam JSON. Ringkasan hasil boleh dieksport ke CSV, dan pautan Kongsi Spot membolehkan orang lain membuka spot tersebut. Penyimpanan sebagai soalan Trainer berbeza: soalan daripada spot yang anda kira sendiri serta rekod latihannya hanya kekal pada peranti ini dan tidak disimpan dalam akaun.",
  },
  {
    q: "Adakah hasilnya sesuai untuk cash game dan kejohanan?",
    a: "Solver ini mengira nilai dalam chip EV. Ia sesuai untuk mengkaji situasi cash game dan situasi kejohanan apabila kesan ICM belum penting. Berhampiran bubble atau lonjakan hadiah, nilai wang kejohanan boleh mengubah keputusan; solver ini tidak mengira ICM.",
  },
  {
    q: "Adakah ini kalkulator peluang poker atau solver strategi?",
    a: "Aplikasi ini menyediakan kedua-duanya. Tab Equity (% menang) mengira equity all-in antara dua pemain: pilih tangan anda, satu tangan atau range lawan, dan board jika ada. Board kosong memberikan equity preflop; tiga, empat atau lima kad memberikan equity flop, turn atau river. Untuk mengetahui kekerapan bet, check, call, raise atau fold serta EV sesuatu tindakan, gunakan solver postflop. Untuk pengiraan pantas tanpa menjalankan solver — pot odds, outs, SPR, nilai M dan ICM — kami ada halaman Kalkulator Poker yang berasingan (pautannya ada dalam jadual di atas).",
  },
  {
    q: "Adakah solver GTO ini bersumber terbuka?",
    a: "Ya. Ia dibina berasaskan WASM Postflop oleh Wataru Inariba, yang dilesenkan di bawah AGPL-3.0. HoldemMaster menerbitkan kod sumber versinya yang diubah suai di bawah lesen yang sama, termasuk penyesuaian bahasa, Spot belajar dan Trainer GTO. Pautan kepada kod sumber GitHub tersedia dalam aplikasi.",
  },
];

export default SOLVER_FAQ_MS;
