"use client";

import Link from "next/link";
import { SOLVER_FAQ_MS } from "./faq";

const SOLVER_URL = "https://solver.holdemmaster.com/?lang=ms";

const SPEC: [string, string][] = [
  ["Harga", "Percuma — semua ciri, tanpa had penggunaan"],
  ["Pemasangan", "Tidak diperlukan — berjalan dalam pelayar melalui WebAssembly"],
  ["Akaun", "Tidak diperlukan. Log masuk untuk menyegerakkan rekod Spot belajar dan Cabaran Harian; soalan Spot saya serta rekod latihannya kekal pada peranti ini sahaja"],
  ["Skop", "Postflop, heads-up — flop · turn · river"],
  ["Tempat pengiraan", "Pada peranti anda sendiri — pengiraan tidak dijalankan pada pelayan kami"],
  ["Keserasian", "Pelayar moden pada Windows, macOS, Linux dan peranti mudah alih"],
  ["Enjin", "WASM Postflop sumber terbuka (AGPL-3.0) · kod sumber yang diubah suai diterbitkan"],
];

// ★2026-09-19 (ms 계산기 회차) — 계산기 행 3개 신설.
// 🔴 `/ms/calculator`는 09-17에 생겼는데 이 표에는 계산기 행이 «처음부터 없었다» — id처럼 「라우트가 없다」는
//    옛 주석이 원인이 아니라 빈 채로 열린 경우다(브리프 §3-K ③의 변종). 그래서 outs·pot odds·equity·ICM 의도가
//    솔버에서 갈 곳이 없었고, 아래 FAQ 「Adakah ini kalkulator peluang poker atau solver strategi?」도
//    계산기를 안 가리켰다(도구 → 도구 링크 0건 · 메모리 `seo-tool-vs-blog-cannibalization`).
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["Kira strategi untuk situasi postflop tertentu", "Solver pada halaman ini", null],
  ["Kira outs dan pot odds tanpa menjalankan solver", "Kalkulator Poker", "/ms/calculator"],
  ["Adu dua tangan dan lihat peratus menangnya", "Kalkulator equity", "/ms/calculator"],
  ["Kira nilai hadiah di bubble atau semasa deal", "Kalkulator ICM", "/ms/calculator"],
  ["Belajar peraturan dan cara bermain", "Panduan Texas Hold'em untuk pemula", "/ms/blog/texas-holdem-rules-for-beginners"],
  ["Fahami bet, check, call, raise dan fold", "Panduan aksi pertaruhan", "/ms/blog/holdem-betting-actions"],
  ["Fahami small blind dan big blind", "Panduan blind dalam poker", "/ms/blog/holdem-blind-meaning"],
];

const STEPS = [
  { n: "①", title: "Range OOP", desc: "Pilih tangan pemain di luar posisi pada grid 13×13, atau masukkan range sebagai teks seperti 22+, A2s+ dan KTo+. Petak pepenjuru ialah pocket pair, bahagian kanan atas ialah tangan suited (AKs), dan bahagian kiri bawah ialah offsuit (AKo)." },
  { n: "②", title: "Range IP", desc: "Tetapkan range pemain dalam posisi dengan cara yang sama. Untuk bermula dengan lebih mudah, muatkan satu Spot belajar dan ubah range yang sudah tersedia." },
  { n: "③", title: "Board", desc: "Pilih tiga kad untuk flop, atau gunakan flop rawak. Anda juga boleh menetapkan kad turn dan river untuk mengkaji runout tertentu." },
  { n: "④", title: "Bet size", desc: "Tetapkan pot permulaan, stack berkesan serta saiz bet dan raise bagi setiap pusingan. Untuk percubaan pertama, kekalkan tetapan lalai dan semak dahulu nilai pot serta stack." },
  { n: "⑤", title: "Kira", desc: "Pilih Bina Tree, kemudian Jalankan Solver. Pengiraan berjalan pada peranti anda; masanya bergantung pada saiz pokok keputusan dan ketepatan yang ditetapkan. Buka hasil selepas pengiraan selesai." },
];

const STARTER_RANGES: [string, string][] = [
  ["OOP — BB (pemain yang call)", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP — BTN (pemain yang open)", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

const READ_SCREEN: string[][] = [
  ["Bar tindakan di atas", "Urutan tindakan dalam tangan, seperti flop → bet → call → turn", "Buka nod untuk melihat strategi pada keputusan itu. Paparan Spot belajar yang siap dikira hanya menunjukkan keputusan pertama pada flop"],
  ["Matriks 13×13 di kiri", "Satu petak bagi setiap jenis tangan; bahagian warna menunjukkan kekerapan tindakan", "Merah = bet atau raise, dengan warna lebih gelap untuk saiz lebih besar. Hijau = check atau call. Petak malap = di luar range"],
  ["Ringkasan di kanan atas", "Kekerapan tindakan (%) dan bilangan kombinasi bagi seluruh range", "Di sinilah anda membaca, contohnya, BB check 99.9% pada Q♠J♦T♠"],
  ["Kategori tangan di kanan tengah", "Cara setiap range mengenai board — top pair, draw atau tangan yang tidak bertambah baik", "Bandingkan kekuatan dan draw yang dimiliki oleh kedua-dua range"],
  ["Jadual terperinci di kanan bawah", "Wajaran, equity, EV, realisasi equity (EQR) serta peratus setiap tindakan mengikut tangan", "Isih mengikut lajur dan eksport ringkasan sebagai CSV"],
];

const FEATURES: [string, "yes" | "no", string][] = [
  ["Pengiraan flop · turn · river", "yes", "Pokok tindakan penuh selepas flop untuk dua pemain"],
  ["Pengiraan preflop", "no", "Rujuk range pembukaan dalam tab Carta preflop"],
  ["Saiz bet dan raise tersuai", "yes", "Peratus pot, gandaan, all-in dan saiz geometri"],
  ["Saiz donk bet berasingan", "yes", "Tetapkan saiz untuk tindakan bet awal oleh pemain OOP secara berasingan"],
  ["Rake dan had maksimum rake", "yes", "Sesuaikan potongan rake dengan keadaan permainan"],
  ["Sunting pokok tindakan pada setiap nod", "yes", "Tambah atau buang tindakan pada nod tertentu"],
  ["Kunci strategi dan kira semula", "yes", "Tetapkan kekerapan tindakan pada nod, kemudian jalankan pengiraan semula"],
  ["Mod ketepatan dan penggunaan memori", "yes", "Float 32-bit / integer 16-bit · had pelayar sekitar 4 GB"],
  ["Sasaran exploitability", "yes", "Nilai lebih rendah memberikan hasil lebih tepat, tetapi mengambil masa lebih lama"],
  ["Simpan range dan tetapan", "yes", "Simpan, muatkan, import dan eksport JSON"],
  ["Eksport ringkasan CSV", "yes", "Buka hasil dalam aplikasi hamparan"],
  ["Pautan Kongsi Spot", "yes", "Buka spot yang sama pada peranti lain melalui pautan"],
  ["Spot belajar siap dikira", "yes", "Lihat strategi serta-merta tanpa menunggu pengiraan"],
  ["Trainer GTO dengan pemarkahan", "yes", "Analisis kelemahan dan ulang kaji berdasarkan kerugian EV"],
  ["Latihan daripada spot yang anda kira", "yes", "Jadikan hasil pengiraan sebagai soalan Spot saya; soalan dan rekod latihannya disimpan pada peranti ini sahaja, walaupun selepas log masuk"],
];

const COMPARE: string[][] = [
  ["Cara mendapatkan hasil", "Kira terus dalam pelayar", "Buka hasil yang sudah dikira", "Kira pada komputer selepas pemasangan"],
  ["Pemasangan", "Tidak diperlukan", "Tidak diperlukan", "Diperlukan; platform bergantung pada produk"],
  ["Skop", "Postflop, heads-up", "Mengikut katalog, termasuk preflop jika tersedia", "Mengikut produk dan versi"],
  ["Ubah range dan pokok tindakan", "Boleh ditetapkan sendiri", "Terhad kepada konfigurasi dalam katalog", "Boleh ditetapkan sendiri"],
  ["Tempat pengiraan", "Pada peranti anda", "Dikira lebih awal oleh penyedia", "Pada peranti anda"],
];

// Boards and strategy figures follow docs/gto-solver-series-spec.md §4-B.
const SPOT_GROUPS = [
  {
    label: "Single Raised Pot — BTN vs BB (asas)",
    cond: "OOP: BB yang call · IP: BTN yang open · Pot 5.5bb · Stack 97.5bb",
    items: [
      { slug: "a-high-board-cbet", board: "A♥7♦2♣", name: "Board kering A-high", note: "Contoh kelebihan range untuk pemain yang open: board ini memihak kepada range BTN, dan BB check 98.2% pada keputusan pertama" },
      { slug: "k-high-board-cbet", board: "K♠8♦3♣", name: "Board kering K-high", note: "Bandingkan dengan A-high. Range BTN masih mempunyai kelebihan, tetapi kekerapan check BB meningkat kepada 99.8%" },
      { slug: "broadway-board-strategy", board: "Q♠J♦T♠", name: "Board Broadway bersambung, two-tone", note: "Board ini nampak sesuai untuk kedua-dua range, tetapi EQR BB hanya 77.9% berbanding 119.4% untuk BTN. BB check 99.9%" },
      { slug: "donk-bet-strategy", board: "9♥8♥7♣", name: "Board tengah bersambung, two-tone", note: "BB mendahului dengan bet pada kekerapan 23.7%. Namun, kelebihan range masih pada BTN: equity BB 48.5% berbanding 51.5% untuk BTN" },
      { slug: "monotone-board-strategy", board: "Q♠9♠2♠", name: "Board monotone (satu suit)", note: "Perhatikan tangan yang sudah mendapat flush dan tangan yang mempunyai flush draw, kemudian bandingkan saiz bet. BB check 88.8% pada keputusan pertama" },
      { slug: "paired-board-strategy", board: "6♣6♦3♥", name: "Board paired", note: "Bandingkan peranan pocket pair dan bluff apabila board berpasangan. BB check 97.0%, dengan strategi bet tersebar pada dua saiz" },
      { slug: "low-board-check-raise", board: "6♠5♥2♦", name: "Board rendah rainbow", note: "Mulakan dengan tindakan pertama BB: check 96.8% dan bet 3.2%. Satu saiz bet sahaja tersedia di sini, iaitu 33% pot" },
    ],
  },
  {
    label: "Pot 3-bet — BB 3-bet, BTN call (SPR rendah)",
    cond: "OOP: BB yang 3-bet · IP: BTN yang call · Pot 22.5bb · Stack 89bb · SPR 4.0",
    items: [
      { slug: "3bet-pot-cbet", board: "A♦K♠2♥", name: "Board A-high, kelebihan 3-bettor", note: "Range BB mempunyai AA, KK dan AK, lalu bet 100%: 57.8% pada saiz kecil dan 42.2% pada saiz besar. Bentuk range menentukan campuran saiz; SPR rendah sahaja tidak menerangkannya" },
      { slug: "3bet-pot-bet-sizing", board: "Q♥T♥7♠", name: "Board dinamik two-tone", note: "BB menggunakan bet kira-kira dua pertiga pot pada kekerapan 98.4%. Bandingkan tumpuan pada satu saiz ini dengan campuran dua saiz pada A♦K♠2♥" },
      { slug: "3bet-pot-low-board", board: "8♦5♣2♠", name: "Board rendah kering", note: "Perhatikan overpair dan tangan A-high dalam range 3-bet. Walaupun board rendah, BB masih bet 98.1% pada keputusan pertama" },
    ],
  },
  {
    label: "Blind vs Blind — SB vs BB (range luas)",
    cond: "OOP: SB yang open · IP: BB yang call · Pot 6bb · Stack 97bb · SPR 16.2",
    items: [
      { slug: "blind-battle-cbet", board: "K♥T♦6♠", name: "Board K-high dengan T", note: "SB ialah pemain yang open tetapi bertindak di luar posisi selepas flop. Bandingkan strategi ini dengan BTN vs BB; pilihan saiz bet di sini ialah 33% pot" },
      { slug: "blind-battle-connected-board", board: "7♦6♦5♣", name: "Board rendah bersambung, two-tone", note: "Board ini mencabar range SB yang open: SB check 90.4%, dan bet hanya 9.6%. Bandingkan dengan board K-high dalam kumpulan yang sama" },
      { slug: "ace-paired-board-strategy", board: "A♠A♥6♦", name: "Board dengan dua Ace", note: "SB mempunyai lebih banyak kombinasi trips daripada BB. Bet kecil 33% pot mendominasi pada kekerapan 79.6%, manakala bet besar digunakan pada 0.5%" },
    ],
  },
];

const SPOT_TOTAL = SPOT_GROUPS.reduce((n, g) => n + g.items.length, 0);

function Cta({ label, variant = "solid" }: { label: string; variant?: "solid" | "outline" }) {
  const base = "inline-block rounded-xl px-8 py-3 font-bold transition-opacity";
  return (
    <a
      href={SOLVER_URL}
      target="_blank"
      rel="noopener"
      className={variant === "solid"
        ? `${base} bg-primary text-lg text-primary-foreground hover:opacity-90`
        : `${base} border border-primary text-primary hover:bg-primary hover:text-primary-foreground`}
    >
      {label}
    </a>
  );
}

function Table({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className={`w-full border-collapse text-sm${head.length > 2 ? " min-w-[34rem]" : ""}`}>
        <thead>
          <tr className="border-b border-border text-left">
            {head.map((h) => <th key={h} className="py-2 pr-4 font-semibold">{h}</th>)}
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

export default function SolverClientMs() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      <section className="mt-6">
        <h1 className="text-center text-2xl font-bold">
          Solver Poker GTO Percuma — Terus dalam Pelayar
        </h1>
        <p className="mt-3 text-muted-foreground">
          <strong className="text-foreground">Solver GTO</strong> menggunakan range (julat tangan)
          kedua-dua pemain, board dan saiz stack untuk mengira kekerapan bet, check atau fold bagi
          169 jenis tangan permulaan. Solver HoldemMaster menjalankan pengiraan itu{" "}
          <strong className="text-foreground">terus dalam pelayar — tanpa pemasangan, akaun wajib
          atau bayaran</strong>. Lihat strategi pada grid 13×13 bersama equity, EV dan realisasi
          equity (EQR) bagi setiap tangan. Skopnya ialah postflop heads-up, iaitu dua pemain.
        </p>
        <div className="mt-5 text-center">
          <Cta label="Buka solver percuma →" />
          <p className="mt-2 text-xs text-muted-foreground">
            Chrome pada komputer disyorkan. iOS dan Safari menggunakan satu thread, jadi pengiraan
            spot sendiri mengambil masa lebih lama.
          </p>
        </div>
        <Table head={["", "Butiran"]} rows={SPEC} />
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Apa itu solver GTO dalam poker?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTO bermaksud <strong className="text-foreground">Game Theory Optimal</strong>. Solver
          mengira strategi yang menghampiri keseimbangan Nash berdasarkan range, board, stack dan
          pilihan saiz pertaruhan yang anda tetapkan. Hasilnya ialah kekerapan tindakan: sesuatu
          tangan boleh menggunakan campuran bet dan check, bukannya satu tindakan tetap setiap kali.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Carta memaparkan jawapan yang sudah disediakan. Solver pula mengira semula apabila anda
          mengubah keadaan spot, termasuk board — kad komuniti di atas meja. Sebab itu ia berguna
          untuk mengkaji situasi postflop tertentu dan memahami bagaimana strategi berubah.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Istilah <strong className="text-foreground">poker solver</strong>, GTO poker solver dan{" "}
          <strong className="text-foreground">postflop solver</strong> merujuk kepada jenis alat
          pengiraan ini. Pilih alat atau panduan mengikut perkara yang ingin anda pelajari:
        </p>
        <Table
          head={["Tujuan anda", "Tempat untuk bermula"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          Dalam aplikasi yang sama, <strong className="text-foreground">Carta preflop</strong>
          menyediakan rujukan range pembukaan mengikut posisi. Tab{" "}
          <strong className="text-foreground">Equity</strong> pula mengira equity tangan atau range.
          Kedua-duanya melengkapi solver postflop; tab carta tidak menjalankan pengiraan strategi preflop.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Mengapa strategi postflop berubah mengikut board?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Ambil dua range yang sama, BB call melawan BTN open, dengan pot yang sama. Pada{" "}
          <strong className="text-foreground">Q♠J♦T♠, BB bet hanya 0.1%</strong>. Tukar flop kepada{" "}
          <strong className="text-foreground">9♥8♥7♣ dan kekerapan bet BB menjadi 23.7%</strong>.
          Kedua-duanya board bersambung dengan dua suit, tetapi setiap board mengenai bahagian range
          yang berbeza. Equity, draw dan keupayaan merealisasikan equity turut berubah.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Carta preflop membantu anda memilih tangan sebelum kad komuniti dibuka. Untuk mengkaji
          tindakan selepas flop, solver menggunakan board dan keadaan spot yang sebenar. Jika
          urutan preflop, flop, turn dan river masih baharu bagi anda, mulakan dengan{" "}
          <Link href="/ms/blog/holdem-game-order" className="font-semibold text-primary hover:underline">
            panduan urutan permainan Texas Hold&apos;em
          </Link>.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Cara menggunakan solver poker: lima langkah</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Jika ini kali pertama anda menggunakan solver, buka{" "}
          <strong className="text-foreground">Spot belajar</strong> dahulu. Strateginya sudah dikira,
          jadi anda boleh belajar membaca hasil sebelum menyediakan input sendiri. Apabila bersedia,
          ikut lima langkah pada bar sisi aplikasi:
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
        <p className="mt-4 text-sm text-muted-foreground">
          Input spot sendiri menggunakan bilangan cip bulat. Untuk membaca nilainya dalam big blind,
          gunakan skala <strong className="text-foreground">10 cip = 1bb</strong>: pot 55 bersamaan
          5.5bb. Spot belajar dan Trainer GTO menukar unit secara automatik menggunakan skala ini.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Anda boleh bermula dengan menyalin dua range di bawah ke ① dan ②. Ini ialah{" "}
          <strong className="text-foreground">range yang digunakan oleh Spot belajar Single Raised
          Pot, BTN vs BB</strong>. Untuk rujukan range pembukaan mengikut posisi, gunakan tab Carta
          preflop dalam aplikasi.
        </p>
        <Table
          head={["Tampal pada", "Range"]}
          rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Cara membaca skrin hasil</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Skrin hasil mempunyai lima bahagian: bar tindakan di atas, matriks strategi 13×13 di kiri,
          serta ringkasan kekerapan, kategori tangan dan jadual terperinci di kanan. Bahagian kiri
          menunjukkan tindakan sesuatu tangan; bahagian kanan membantu anda membaca seluruh range.
        </p>
        <Table head={["Bahagian", "Maklumat", "Cara membacanya"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          Dalam heads-up, <strong className="text-foreground">equity</strong> mengambil kira peluang
          menang serta separuh peluang seri. <strong className="text-foreground">EV</strong> ialah
          nilai jangkaan sesuatu tindakan. <strong className="text-foreground">EQR</strong> pula
          menunjukkan berapa banyak nilai equity yang dapat direalisasikan melalui permainan.
          Pada A♥7♦2♣, range BB mempunyai equity 45.1% tetapi EQR 84.0%. Nilai EQR di bawah 100%
          bermaksud range itu merealisasikan kurang daripada nilai equity asalnya; posisi, inisiatif
          dan bentuk range mempengaruhi hasil ini.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Apakah yang termasuk dalam solver percuma ini?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Semua ciri berikut boleh digunakan tanpa bayaran, butiran pembayaran atau had pengiraan
          harian. Anda juga tidak perlu membuka akaun untuk mengira dan berlatih. Tetapan seperti
          rake, mod ketepatan dan suntingan nod tersedia dalam aplikasi yang sama. Skop pengiraan
          strategi ialah <strong className="text-foreground">postflop heads-up</strong>.
        </p>
        <Table
          head={["Ciri", "Tersedia", "Butiran"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span className="font-bold text-emerald-600">Ya</span>
            ) : (
              <span className="font-bold text-muted-foreground">Tidak</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="Cuba solver percuma →" variant="outline" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Apakah skop pengiraan postflop?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Solver ini bermula selepas flop dibuka dan mengira strategi seterusnya untuk dua pemain. Anda boleh
          menetapkan range kedua-dua pemain, flop, turn dan river, pot permulaan, stack berkesan serta
          saiz bet dan raise bagi setiap pusingan. Rake dan had maksimum rake juga boleh diubah supaya
          pengiraan menggunakan keadaan yang ingin anda kaji.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Pengiraan strategi preflop tidak termasuk dalam enjin ini. Gunakan{" "}
          <strong className="text-foreground">Carta preflop</strong> untuk rujukan tangan pembukaan,
          kemudian masukkan range yang sesuai ke dalam solver untuk mengkaji permainan selepas flop.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Enjin mengira secara berulang ke arah sasaran exploitability yang anda tetapkan. Semak
          nilai exploitability akhir: pengiraan juga boleh berhenti apabila had iterasi dicapai.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Kunci strategi pada nod dan kira semula</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Untuk menguji satu andaian tentang cara sesuatu nod dimainkan, buka{" "}
          <strong className="text-foreground">Kunci strategi pada nod ini</strong> pada skrin hasil.
          Tetapkan kekerapan tindakan yang anda mahu kekalkan, kemudian pilih{" "}
          <strong className="text-foreground">Kunci dan kira semula</strong>. Solver mengira semula
          strategi dengan kekerapan pada nod itu dikunci, supaya anda boleh membandingkan hasilnya
          dengan pengiraan asal. Hasil ini bergantung pada strategi yang dikunci, bukannya
          keseimbangan GTO tanpa kekangan.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Trainer GTO percuma: berlatih dan lihat kerugian EV</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          <strong className="text-foreground">Trainer GTO</strong> tersedia dalam aplikasi yang sama.
          Ia menjadikan spot yang sudah dikira sebagai latihan: anda menerima satu tangan pada titik
          keputusan, memilih tindakan dan melihat penilaian. Anda boleh berlatih dengan contoh yang
          tersedia atau menggunakan spot yang anda kira sendiri.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Penilaian berdasarkan <strong className="text-foreground">kerugian EV berbanding saiz
          pot</strong>. Oleh sebab strategi GTO boleh mencampurkan beberapa tindakan, pilihan dengan
          kekerapan rendah tidak semestinya salah. Selepas anda menjawab, trainer menunjukkan
          kekerapan dan EV setiap tindakan serta nilai yang hilang melalui pilihan anda.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          <li className="text-muted-foreground">
            Ambang dinilai berbanding pot: <span className="font-semibold text-emerald-500">sehingga
            0.35%</span> ialah Pilihan terbaik · <span className="font-semibold text-blue-500">sehingga
            1%</span> ialah Boleh diterima · <span className="font-semibold text-orange-500">lebih
            daripada itu</span> ialah Perlu disemak
          </li>
          <li className="text-muted-foreground">
            Kerugian 0.08bb bersamaan 1.45% dalam pot 5.5bb, tetapi hanya 0.36% dalam pot 22.5bb.
            Dalam single raised pot 5.5bb, ambangnya kira-kira 0.02bb dan 0.06bb; dalam pot 3-bet
            22.5bb, kira-kira 0.08bb dan 0.23bb. Had minimum 0.02bb dan 0.05bb mengelakkan perbezaan
            kecil akibat ketepatan pengiraan daripada terlalu mempengaruhi penilaian
          </li>
          <li className="text-muted-foreground">
            Soalan contoh merangkumi beberapa titik keputusan dalam setiap spot, dengan lebih
            daripada <strong className="text-foreground">10,000 kombinasi</strong> dan sasaran
            exploitability 0.5%. Anda boleh memilih latihan single raised pot, pot 3-bet atau blind
            vs blind secara berasingan
          </li>
          <li className="text-muted-foreground">
            Tangan diberikan mengikut <strong className="text-foreground">wajaran range GTO
            sebenar</strong>, supaya kekerapan sesuatu tangan muncul sepadan dengan kebarangkaliannya
            dalam spot tersebut
          </li>
          <li className="text-muted-foreground">
            Rekod latihan menyokong rentetan jawapan baik, analisis kelemahan dan ulang kaji tangan
            dengan kerugian EV terbesar. Jika anda log masuk, rekod latihan{" "}
            <strong className="text-foreground">Spot belajar dan Cabaran Harian</strong> disimpan
            dalam akaun supaya anda boleh menyambung pada peranti lain. Soalan Spot saya dan rekod
            latihannya kekal pada peranti ini sahaja, walaupun anda log masuk
          </li>
        </ul>
        <h3 className="mt-5 font-semibold">Jadikan spot yang anda kira sebagai latihan</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Selepas selesai mengira satu spot, pilih{" "}
          <strong className="text-foreground">Berlatih spot ini</strong> pada skrin hasil. Soalannya
          disimpan dalam <strong className="text-foreground">Spot saya</strong> untuk latihan dalam
          trainer. <strong className="text-foreground">Soalan ini dan rekod latihannya hanya disimpan
          pada peranti semasa, walaupun anda log masuk</strong>; kedua-duanya tidak disegerakkan
          melalui akaun.
        </p>
        <div className="mt-5">
          <Cta label="Buka Trainer GTO →" variant="outline" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">{SPOT_TOTAL} Spot belajar yang boleh dibuka serta-merta</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Setiap contoh di bawah sudah dikira, jadi strategi muncul sebaik sahaja anda membukanya.
          Range menghampiri permainan dalam talian standard dengan stack awal 100bb. Paparan contoh
          menunjukkan keputusan pertama pada flop. Untuk mengkaji perubahan strategi, muatkan satu
          contoh, ubah range atau board dan jalankan pengiraan sendiri.
        </p>
        {SPOT_GROUPS.map((g) => (
          <div key={g.label} className="mt-5">
            <p className="text-sm font-semibold">{g.label}</p>
            <p className="text-xs text-muted-foreground">{g.cond}</p>
            <ul className="mt-2 space-y-1.5">
              {g.items.map((s) => (
                <li key={s.board} className="text-sm">
                  <span className="font-semibold">{s.board}</span>
                  <span className="mx-1.5 text-muted-foreground">·</span>
                  <Link href={`/ms/blog/${s.slug}`} className="font-medium text-primary hover:underline">{s.name}</Link>{" "}
                  <span className="text-muted-foreground">— {s.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">GTO Wizard, PioSolver dan TexasSolver: apa bezanya?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Apabila membandingkan alat poker, perhatikan{" "}
          <strong className="text-foreground">di mana dan bila pengiraan dibuat</strong>. Pustaka
          penyelesaian seperti yang ditawarkan oleh GTO Wizard membolehkan anda membuka katalog hasil
          yang sudah dikira. Solver desktop seperti PioSolver atau TexasSolver dipasang pada komputer
          untuk menjalankan pengiraan sendiri. Jadual ini membandingkan cara penggunaan tersebut;
          ciri sesuatu produk bergantung pada mod atau versi yang dipilih.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Solver HoldemMaster <strong className="text-foreground">mengira terus dalam pelayar
          apabila anda menyediakan spot</strong>. Anda boleh mengubah range dan pokok tindakan tanpa
          memasang perisian desktop.
        </p>
        <Table
          head={["", "Solver HoldemMaster", "Pustaka penyelesaian", "Solver desktop"]}
          rows={COMPARE}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          Di sini, anda boleh mengira tanpa pendaftaran, had harian atau kredit penggunaan.
          Enjinnya berasaskan <strong className="text-foreground">WASM Postflop</strong> yang
          bersumber terbuka, dengan antara muka, Spot belajar dan Trainer GTO daripada HoldemMaster.
          Kod sumber yang diubah suai diterbitkan di bawah lesen AGPL-3.0 yang sama.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Boleh digunakan pada telefon dan di luar talian?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Ya. Buka solver dalam pelayar telefon untuk mula menggunakannya tanpa pemasangan. Jika
          mahu akses melalui ikon sendiri, pilih{" "}
          <strong className="text-foreground">Tambah ke Skrin Utama</strong>. Aplikasi kemudian
          boleh dibuka dalam skrin penuh tanpa bar alamat pelayar.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Selepas aplikasi ditambah ke skrin utama dan kandungannya dimuatkan pada peranti,
          Spot belajar dan Trainer GTO boleh digunakan untuk{" "}
          <strong className="text-foreground">latihan tanpa sambungan internet</strong>. Untuk
          mengira spot sendiri di luar talian, enjin pengiraan perlu dimuatkan sekurang-kurangnya
          sekali terlebih dahulu.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          iPhone dan Safari menggunakan satu thread untuk pengiraan, jadi komputer lebih sesuai
          untuk spot yang besar. Pada Chrome dan Edge, gunakan ikon pemasangan di bar alamat.
          Pada iPhone, buka menu Kongsi dan pilih Tambah ke Skrin Utama.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Bacaan untuk memahami asas poker</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/ms/blog/texas-holdem-rules-for-beginners" className="font-semibold text-primary hover:underline">
              Peraturan Texas Hold&apos;em untuk pemula
            </Link>{" "}
            — asas kad, cip dan perjalanan satu tangan sebelum anda mula mengkaji strategi
          </li>
          <li>
            <Link href="/ms/blog/holdem-game-order" className="font-semibold text-primary hover:underline">
              Urutan permainan Texas Hold&apos;em
            </Link>{" "}
            — fahami bila preflop, flop, turn dan river berlaku
          </li>
          <li>
            <Link href="/ms/blog/holdem-betting-actions" className="font-semibold text-primary hover:underline">
              Aksi pertaruhan: check, call, raise dan fold
            </Link>{" "}
            — kenali tindakan yang dipaparkan sebagai kekerapan dalam solver
          </li>
          <li>
            <Link href="/ms/blog/holdem-blind-meaning" className="font-semibold text-primary hover:underline">
              Small blind dan big blind dalam poker
            </Link>{" "}
            — latar posisi untuk contoh BTN vs BB dan blind vs blind
          </li>
          <li>
            <Link href="/ms/blog/holdem-hand-rankings" className="font-semibold text-primary hover:underline">
              Susunan tangan poker
            </Link>{" "}
            — bandingkan pair, straight, flush dan kategori tangan lain pada skrin hasil
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">FAQ — soalan lazim</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_MS.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">S. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">J. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 text-center">
        <Cta label="Buka solver poker GTO percuma →" />
      </section>
      <p className="mt-8 text-xs text-muted-foreground">
        Aplikasi ini berasaskan WASM Postflop oleh Wataru Inariba (AGPL-3.0), diterjemah dan
        dikembangkan oleh HoldemMaster. Kod sumber lengkap yang diubah suai diterbitkan di bawah
        lesen yang sama.
      </p>
    </div>
  );
}
