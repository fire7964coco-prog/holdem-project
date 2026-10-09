"use client";

import Link from "next/link";
import { SOLVER_FAQ_TR } from "./faq";

/**
 * ★CTA는 `?lang=tr`로 보낸다. 🔴 솔버 앱의 터키어 UI는 아직 라이브가 아니다(솔버 쪽 배포 대기) —
 *   2026-10-09 솔버 tr 라이브(S-049). 이 페이지의 앱 라벨(OOP range · Hesapla · Örnek spotlar ·
 *   스팟·그룹 이름)은 **라이브 `?lang=tr` 터키어 축어**다(10-09 Playwright 대조 · presets titleTr/categoryTr).
 *   UTM은 붙이지 않는다(기존 관례).
 */
const SOLVER_URL = "https://solver.holdemmaster.com/?lang=tr";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/tr/solver` 랜딩 — ★2026-10-06 신설 (tr 회차 5)
 * ═══════════════════════════════════════════════════════════════════════════
 * 마스터 = `app/en/solver/solver-client.tsx`. 섹션·표·SPOT 수·수치는 EN과 같다(구분자만 터키식).
 *
 * ▶ 키워드(DataForSEO 튀르키예 · 2026-10-06 · 월): gto poker 30 · poker gto 30 · gto nedir 40 ·
 *   poker solver 10 · gto solver 10. 검색어형은 «같은 것을 부르는 여러 이름» 문단에만 축어로 둔다.
 *
 * ▶ 링크 치환 (EN → tr):
 *   /en/blog/holdem-equity → /tr/blog/holdem-probability (tr 글로시가 Equity를 같은 글로 보낸다)
 *   /en/blog/holdem-continuation-bet · holdem-strategy → tr 동명
 *   /en/calculator · /en/hand-chart → /tr/... · /en/win-rate-quiz → tr 없음 → 행·링크 제거
 *
 * 🔴 해설 수치는 EN 랜딩 값 그대로(정본 = docs/gto-solver-series-spec.md §4-B). EN 주석의 정정 이력
 *   (M-038·M-042·M-045·M-046·M-067)이 반영된 문안을 옮겼다 — 앱 문구로 되돌리지 마라.
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC: [string, string][] = [
  ["Fiyat", "Ücretsiz — tüm özellikler, kullanım limiti yok"],
  ["Kurulum", "Yok — tarayıcıda çalışır (WebAssembly)"],
  ["Hesap", "Gerekmez (giriş yaparsan Örnek spotlar ve Günün sorusu geçmişin eşitlenir · kendi çözdüğün spotlar ve onların pratik geçmişi bu cihazda kalır)"],
  ["Kapsam", "Postflop, heads-up (flop, turn, river)"],
  ["Hesaplama nerede yapılır", "Sunucuda değil, kendi işlemcinde (CPU)"],
  ["Platformlar", "Her modern tarayıcı — Windows, macOS, Linux, mobil"],
  ["Motor", "Açık kaynak WASM Postflop (AGPL-3.0) · değiştirilmiş kaynak kodu yayımlandı"],
];

/** 「무엇을 원하나 → 어느 도구」 — win-rate-quiz 행은 tr 라우트가 없어 뺐다. */
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["Bir postflop spotunu çözüp bahis sıklıklarını görmek", "Bu sayfadaki GTO solver", null],
  ["Her pozisyondan hangi elleri açacağını görmek", "Başlangıç eli tablosu", "/tr/hand-chart"],
  ["Out, pot oranı, SPR ya da ICM hesaplamak", "Poker hesaplayıcı", "/tr/calculator"],
];

/** 사용법 — 앱 사이드바 단계 라벨(라이브 tr 축어)을 그대로 쓴다. */
const STEPS = [
  { n: "①", title: "OOP range", desc: "Pozisyon dışındaki oyuncunun preflop range'ini 13×13 grid üzerinde boya ya da yaz: 22+, A2s+, KTo+. Grid'de köşegen pocket çiftlerdir, sağ üst suited, sol alt offsuit eller." },
  { n: "②", title: "IP range", desc: "Aynısını pozisyondaki oyuncu için yap. En hızlı başlangıç, iki range'i sıfırdan kurmak yerine bir çalışma spotu yükleyip range'lerini düzenlemektir." },
  { n: "③", title: "Board", desc: "Üç flop kartına tıkla ya da Rastgele flop'a bas. Belirli bir runout'u çalışmak istersen turn ve river'ı da sabitleyebilirsin." },
  { n: "④", title: "Bet boyutu", desc: "Başlangıç potunu, efektif stack'i ve her street için bet ve raise boyutlarını ayarla. İlk çözümünde varsayılanları bırak, sadece pot ve stack'i kontrol et." },
  { n: "⑤", title: "Hesapla", desc: "Ağacı kur, sonra çalıştır. Çözüm kendi makinende saniyelerle dakikalar arasında sürer; bitince Sonuçlar sekmesini aç." },
];

/** 앱 「How to Use」가 초심자에게 그대로 복사해 쓰라고 주는 레인지(축어). */
const STARTER_RANGES: [string, string][] = [
  ["OOP — BB (call eden)", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP — BTN (açan)", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

/** 결과 화면 읽는 법 — 앱 도움말의 구역 구분을 그대로 옮겼다(5행 — 「4」로 되돌리지 마라, EN M-046 E-3). */
const READ_SCREEN: string[][] = [
  ["Üst şerit", "Aksiyon hattı için sahne seçici (flop → bet → call → turn)", "O noktadaki stratejiye atlamak için bir node'a tıkla"],
  ["13×13 matris (sol)", "Her el için bir hücre; içindeki renk dağılımı aksiyon sıklıklarını gösterir", "Kırmızı bet ya da raise (koyu = büyük), yeşil check ya da call; soluk hücre range'de olmayan eldir"],
  ["Kutucuklar (sağ üst)", "Tüm range genelinde aksiyon sıklıkları ve kombo sayıları", "«Range burada %98 check ediyor» gibi okumaları buradan yaparsın"],
  ["El kategorileri (sağ orta)", "Range'in board'a nasıl bağlandığı — top pair, draw'lar, el yok", "Board'un hangi oyuncuyu desteklediğine hızlı bir bakış"],
  ["Tablo (sağ alt)", "El başına ağırlık, equity, EV ve EQR ile aksiyon yüzdeleri", "Sıralamak için sütun başlığına tıkla; özet CSV olarak dışa aktarılır"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES: [string, "yes" | "no", string][] = [
  ["Flop, turn ve river çözümü", "yes", "Tam postflop ağacı"],
  ["Preflop çözümü", "no", "Açılış range'leri başlangıç eli tablosunda"],
  ["Özel bet ve raise boyutları", "yes", "Potun yüzdesi, katlar, all-in, geometrik"],
  ["Ayrı donk (lead) boyutu", "yes", "OOP'nin önden bahis hattını ayrıca tasarla"],
  ["Rake ve rake tavanı", "yes", "Gerçekte oynadığın oyunun koşullarına uydur"],
  ["Oyun ağacını node bazında düzenleme", "yes", "Belirli bir node'a aksiyon ekle ya da çıkar"],
  ["Node kilitleme ve yeniden çözme", "yes", "Bir node'daki aksiyon sıklıklarını sabitle ve tekrar çöz"],
  ["Hassasiyet ve bellek modları", "yes", "32-bit float ya da 16-bit integer · tarayıcıda ~4GB sınırı"],
  ["Hedef exploitability ayarı", "yes", "Düştükçe daha doğru ve daha yavaş"],
  ["Range ve ayarları kaydetme", "yes", "Kaydet, yükle, içe ve dışa aktar"],
  ["Özeti CSV'ye aktarma", "yes", "Doğrudan bir elektronik tabloya"],
  ["Spotu linkle paylaşma", "yes", "Spotunu birebir çalışma grubuna gönder"],
  ["Önceden çözülmüş çalışma spotlarını açma", "yes", "Bekleme yok — çözümler anında açılır"],
  ["EV kaybıyla puanlayan GTO Trainer", "yes", "Zayıf spot filtreleri ve tekrar kuyruğu da var"],
  ["Kendi çözdüğün spotlarla pratik", "yes", "Sonuç ekranında tek tıkla trainer sorusu olarak kaydedilir · yalnızca bu cihazda"],
];

/**
 * 외부 도구 비교 — ⚠ 가격·무료 티어 수치는 넣지 않는다(§12-B).
 * 🔴 「PioSOLVER는 유료」라고 쓰지 마라 — 확인된 것은 설치형·윈도우뿐이다(EN 주석 참조).
 */
const COMPARE: string[][] = [
  ["Nasıl hesaplar", "Tarayıcında, istediğin an çözer", "Önceden hesaplanmış çözümlere göz atarsın", "Kurduktan sonra yerelde çözer"],
  ["Kurulum", "Yok", "Yok", "Kurulum dosyası, Windows"],
  ["Kapsam", "Postflop, heads-up", "Çoğu zaman preflop'u da içerir", "Postflop"],
  ["Range ve ağaç düzenleme", "İstediğin her şey", "Yayımlanmış çözüm seti içinde", "İstediğin her şey"],
  ["Çözüm nerede çalışır", "Kendi makinende", "Sağlayıcının makinesinde, önceden", "Kendi makinende"],
];

/**
 * 교육 예제 — 그룹·스팟 이름은 앱 화면 터키어 축어(라이브 ?lang=tr · presets categoryTr/titleTr), 해설(note)은 터키어.
 * 🔴 개수를 문장에 박지 않는다 — 아래 배열에서 센다.
 * 🪶 `slug`는 **tr에 발행된 해설 글만** 채운다(2026-10-06 기준 4편). 나머지는 이름·요약만 —
 *    없는 링크를 미리 걸지 않는다(404는 색인에 남는다). tr판이 발행되면 그 행에 `slug`를 채운다.
 * 🔴 note 문안은 EN 정정본(M-038 RP-01·03·04 · M-042 RP-17 · M-045 RP-19 · M-046 E-4 · M-067)을
 *    옮긴 것이다 — 앱의 옛 문구로 되돌리지 마라.
 */
const SPOT_GROUPS = [
  {
    label: "Single raised pot — BTN vs BB (temeller)",
    cond: "OOP: BB (call eden) · IP: BTN (açan) · Pot 5,5bb · Stack 97,5bb",
    items: [
      { slug: "a-high-board-cbet", board: "A♥7♦2♣", name: "Kuru A-high board", note: "Ders kitabındaki range avantajı flop'u — as, açan oyuncunun range'ine tam oturur" },
      { board: "K♠8♦3♣", name: "Kuru K-high board", note: "Yine açanı destekler ama check'ler artar. As'lı board'la karşılaştır" },
      { slug: "broadway-board-strategy", board: "Q♠J♦T♠", name: "Bağlantılı broadway board, iki renkli", note: "İki range'e de oturuyor gibi görünür ama BB, serideki tüm spotlar içinde en az equity'yi burada gerçekleştirir — BTN'nin %119,4'üne karşı %77,9 — ve %99,9 check eder" },
      { slug: "donk-bet-strategy", board: "9♥8♥7♣", name: "Bağlantılı orta board, iki renkli", note: "BB'nin gerçekten önden oynadığı tek single raised board: %23,7 oranında ilk bahsi o yapar (range avantajı yine BTN'de — BB'nin %48,5 equity'sine karşı %51,5)" },
      { slug: "monotone-board-strategy", board: "Q♠9♠2♠", name: "Monoton board (hepsi aynı renk)", note: "Büyük bahisler yerini küçük bahislere ve check'e bırakır — hazır floşlar bile sık sık check eder" },
      { board: "6♣6♦3♥", name: "Çiftli board", note: "Kimse board'a bağlanmaz, bu yüzden blöf payı artar" },
      { board: "6♠5♥2♦", name: "Düşük rainbow board", note: "Bir overcard savaşı — check-raise tasarlama spotu: ekranda BB'nin ilk aksiyonu %96,8 check, %3,2 bet" },
    ],
  },
  {
    label: "3-bet pot — BB 3-bet yapar, BTN call eder (düşük SPR)",
    cond: "OOP: BB (3-bet yapan) · IP: BTN (call eden) · Pot 22,5bb · Stack 89bb · SPR ≈ 4,0",
    items: [
      { board: "A♦K♠2♥", name: "A-high board, 3-bet yapanın avantajı", note: "3-bet range'inin görebileceği en iyi flop — AK, AA ve KK ile dolu. Küçük bir bahsin rakibin tüm range'ine baskı kurmasını sağlayan düşük SPR değil, o range'in şeklidir" },
      { board: "Q♥T♥7♠", name: "Dinamik iki renkli board", note: "İki canlı draw — range'in %98,4'ü aynı boyutla, potun üçte ikisi kadar bahis yapar" },
      { board: "8♦5♣2♠", name: "Düşük kuru board", note: "3-bet range'i burada hiç top pair yapmaz — sadece gutshot'lar ve backdoor'lar — ama overpair'ler baskıyı sürdürür" },
    ],
  },
  {
    label: "Blind vs blind — SB vs BB (geniş range'ler)",
    cond: "OOP: SB (açan) · IP: BB (call eden) · Pot 6bb · Stack 97bb",
    items: [
      { board: "K♥T♦6♠", name: "K-high, T'li board", note: "Range'ler geniş olduğu için iki oyuncu da zayıf — BTN versiyonuyla karşılaştır" },
      { board: "7♦6♦5♣", name: "Bağlantılı düşük board, iki renkli", note: "Aşırı bağlantılı bir board'da iki geniş range: her yerde iki çift ve draw" },
      { board: "A♠A♥6♦", name: "As çiftli board", note: "Burada üçlü (trips) nadir değil — SB'de sadece daha fazlası var (BB'nin 66 kombosuna karşı 88 kombo); SB'nin %80,1 bahis yapmasının sebebi bu" },
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

export default function SolverClientTr({ reviews }: { reviews?: React.ReactNode } = {}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      <section className="mt-6">
        <h1 className="text-center text-2xl font-bold">
          Ücretsiz GTO Poker Solver — Poker Spotlarını Tarayıcında Çöz
        </h1>
        <p className="mt-3 text-muted-foreground">
          Bir <strong className="text-foreground">GTO solver</strong>, iki oyuncunun range&apos;lerini,
          board&apos;u ve stack büyüklüklerini alır; 169 başlangıç elinin her birinin ne sıklıkla bet,
          check ya da fold yapması gerektiğini hesaplar. HoldemMaster solver bu hesabı{" "}
          <strong className="text-foreground">tarayıcında yapar — indirme yok, hesap yok, ücretli paket
          yok</strong> — ve strateji grid&apos;inin yanında her el için equity, EV ve equity realization
          (EQR) gösterir. Heads-up postflop oyunu kapsar.
        </p>
        <div className="mt-5 text-center">
          <Cta label="Solver'ı aç →" />
          <p className="mt-2 text-xs text-muted-foreground">
            Masaüstü Chrome önerilir — iOS ve Safari tek iş parçacığıyla çözer, bu yüzden özel çözümler
            orada daha yavaştır
          </p>
        </div>
        <Table head={["", "Ayrıntılar"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── GTO 솔버란 ───────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">GTO solver nedir?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTO solver,{" "}
          <strong className="text-foreground">game theory optimal</strong> (oyun teorisi açısından
          optimal) stratejiyi sıfırdan hesaplar. Ona range&apos;leri, board&apos;u, stack&apos;leri ve bir
          bahis boyutu ağacını verirsin; Nash dengesine doğru iterasyon yapar ve 169 elin tamamı için
          bet, check ve fold sıklıklarını döndürür. Solver ile tablo arasındaki fark tam olarak budur:
          tablo, birinin daha önce bulduğu cevabı saklar; solver ise tam içinde bulunduğun spotun
          cevabını hesaplar.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Bir tablo değildir, birinin görüşleri içine gömülmüş bir trainer da değildir. Farklı bir flop
          verirsen farklı bir cevap alırsın, çünkü hatırlamaz, yeniden hesaplar.
        </p>
        {/* «부르는 이름» 문단 — 실측 검색어 축어(gto poker 30 · poker gto 30 · poker solver 10 · gto solver 10). */}
        <p className="mt-3 text-sm text-muted-foreground">
          Aynı araç birkaç farklı isimle anılır. <strong className="text-foreground">Poker solver</strong>,{" "}
          <strong className="text-foreground">gto solver</strong> ya da postflop solver — hepsi bu tür
          bir programı kasteder; çıktısına da GTO tablosu ya da range tablosu denir.{" "}
          <strong className="text-foreground">GTO poker</strong> ya da poker gto diye aratılan şey ise bu
          programın hesapladığı dengedir. Değişen yalnızca arama terimi — bu sayfadaki solver&apos;ın
          hesapladığı şey aynıdır.
        </p>
        <Table
          head={["Ne yapmak istiyorsun", "Kullanacağın araç"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
      </section>

      {/* ── GTO 뜻 — 질문형 H2 + 직답 40~75단어(gto nedir 40 · poker 앵커 포함) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">GTO nedir? Pokerde GTO ne demek?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTO&apos;nun açılımı <strong className="text-foreground">Game Theory Optimal</strong>&apos;dır
          (oyun teorisi açısından optimal): pokerde rakibin nasıl ayarlama yaparsa yapsın uzun vadede
          sömürülemeyen strateji. «GTO poker»
          dendiğinde kastedilen bu dengedir ve bir poker solver&apos;ın hesapladığı şey de odur. Bir tavan
          değil, bir tabandır — kötü bir rakibi cezalandırmaya çalışmaz, iyi bir rakibin seni
          cezalandıramamasını sağlar.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Çoğu oyuncuyu şaşırtan özellik şu:{" "}
          <strong className="text-foreground">GTO aynı elle farklı aksiyonları karıştırır</strong> — eli
          %70 bet, %30 check eder — böylece çizgin okunamaz. Bu yüzden çıktı tek bir talimat değil, bir
          sıklık tablosudur. Solver sana <em>ne</em> yapacağını değil, bir şeyi <em>ne sıklıkla</em>{" "}
          yapacağını söyler; bir çalışma seansının kurallarla değil yüzdelerle bitmesinin sebebi de bu.
        </p>
      </section>

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Poker solver nasıl kullanılır? Beş adım</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Solver&apos;ı ilk kez kullanıyorsan <strong className="text-foreground">hiçbir şeyi ayarlamadan önce bir
          çalışma spotu aç.</strong> O spotlar zaten çözülmüş; böylece girdileri kullanmayı öğrenmeden
          önce çıktıyı okumayı öğrenirsin. Kendi spotunu kurduğunda sekmeler sol kenar çubuğunda
          yukarıdan aşağı sırayla ilerler.
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
          Özel spotlarda miktarları tam sayı çip olarak girersin; ölçeği sen belirlersin. Big blind cinsinden düşünmek için{" "}
          <strong className="text-foreground">10 çip = 1bb</strong> kullan (55&apos;lik pot 5,5bb eder).
          Çalışma spotları ve trainer bu ölçekle otomatik çevirir.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          İki range&apos;i sıfırdan kurmak işin yavaş yolu. Pozisyona göre açılış range&apos;leri{" "}
          <Link href="/tr/hand-chart" className="font-semibold text-primary hover:underline">
            başlangıç eli tablosunda
          </Link>
          . Aşağıdaki iki range ise başka bir şey:{" "}
          <strong className="text-foreground">Single Raised Pot çalışma spotlarının kullandıkları</strong>{" "}
          (BTN vs BB), ① ve ②&apos;ye yapıştırmaya hazır.
        </p>
        <Table head={["Nereye yapıştırılır", "Range"]} rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])} />
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Sonuç ekranı nasıl okunur?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sonuç ekranında beş çalışma alanı var: üstte{" "}
          <strong className="text-foreground">sahne seçici</strong>, solda{" "}
          <strong className="text-foreground">13×13 strateji matrisi</strong>, sağda ise{" "}
          <strong className="text-foreground">sıklık kutucukları, el kategorileri ve detay
          tablosu</strong>. Tek bir elin ne yaptığını sol taraftan, range&apos;in bütün olarak ne
          yaptığını sağ taraftan oku.
        </p>
        <Table head={["Nerede", "Ne var", "Nasıl okunur"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          Bir örnek: ilk çalışma spotunu aç (A♥7♦2♣ rainbow, ilk konuşan BB). Kutucuklar
          <strong className="text-foreground">Check %98,2</strong> (455,5 kombo) gösterir; Bet 1,8bb %1,0,
          Bet 4,1bb %0,9. Detay tablosunun özet satırı tüm range&apos;i 464,0 kombo, %45,1 equity, 2,09bb
          EV ve <strong className="text-foreground">%84,0 EQR</strong> olarak verir. Üzerinde durmaya
          değen sayı, %100&apos;ün altındaki equity realization&apos;dır: bu range %45,1 equity tutar ama
          pozisyon dışında ve inisiyatifsiz oynadığı için o equity&apos;nin değerinin yalnızca
          %84&apos;ünü gerçekleştirir.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Bu terimler yeniyse, solver&apos;ın sayılarını okumaya çalışmadan önce neyi ölçtüğünü{" "}
          <Link href="/tr/blog/holdem-probability" className="font-semibold text-primary hover:underline">
            poker olasılıkları tablosu (out, equity ve pot oranı)
          </Link>{" "}
          ile{" "}
          <Link href="/tr/blog/holdem-continuation-bet" className="font-semibold text-primary hover:underline">
            continuation bet rehberi
          </Link>{" "}
          anlatıyor.
        </p>
      </section>

      {/* ── 무료 범위 (기능표) ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Gerçekten ücretsiz bir poker solver mı?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Evet, hem de alışılmış küçük puntolu şartlar olmadan: ödeme yöntemi yok, kilitli özellik yok,
          günlük çözüm limiti yok, hesap yok. Normalde ücretli masaüstü solver&apos;larda duran ayarlar —
          rake ve rake tavanı, hassasiyet modları, oyun ağacını node node düzenlemek — hepsi burada. Tek
          gerçek sınır, bu solver&apos;ın{" "}
          <strong className="text-foreground">postflop ve heads-up</strong> olması.
        </p>
        <Table
          head={["Özellik", "Dahil", "Not"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span className="font-bold text-emerald-600">Evet</span>
            ) : (
              <span className="font-bold text-muted-foreground">Hayır</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="Ücretsiz dene →" variant="outline" />
        </div>
      </section>

      {/* ── 포스트플랍 범위 ──────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Neden sadece postflop — ve bu neleri kapsıyor?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Bu bir <strong className="text-foreground">postflop solver</strong>: flop açıldığı anda
          başlar ve elin geri kalanını iki oyuncu için çözer. Preflop bilerek dışarıda bırakıldı, çünkü
          preflop range&apos;leri başka türden bir problemdir — bir tablodan okunacak kadar sabittirler,
          postflop ise her board&apos;la değişir.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Bu sınırın içinde hiçbir şey kısılmadı. İki oyuncunun{" "}
          <strong className="text-foreground">postflop range</strong>&apos;ini, herhangi bir flop, turn ve
          river&apos;ı, başlangıç potunu ve efektif stack&apos;i, her street için tam bir bahis boyutu
          ağacını sen belirlersin. Yani aldığın postflop stratejisi genel geçer bir strateji değil, senin
          oyununa ait — çoğu çalışma materyalinin sessizce görmezden geldiği rake dahil.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Preflop yarısını istiyorsan o{" "}
          <Link href="/tr/hand-chart" className="font-semibold text-primary hover:underline">
            başlangıç eli tablosunda
          </Link>
          . İkisi birlikte bir eli baştan sona kapsar: tablo neyle açacağına, solver flop&apos;tan sonra
          ne olacağına karar verir.
        </p>
      </section>

      {/* ── GTO 트레이너 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          Ücretsiz bir GTO poker trainer var mı? Seni nasıl puanlıyor?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Evet — GTO Trainer aynı ücretsiz yazılımın içinde, ayrı bir kayıt gerekmez. Çözülmüş spotları
          pratiğe çevirir: gerçek bir karar noktasında sana el dağıtılır, bir aksiyon seçersin ve seni
          puanlar.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Puanlama doğru ya da yanlış üzerinden değil,{" "}
          <strong className="text-foreground">pota göre EV kaybı</strong> üzerinden yapılır. GTO
          aksiyonları karıştırdığı için düşük sıklıklı seçeneği seçmek otomatik olarak hata değildir —
          önemli olan, seçimin ne kadar beklenen değerden vazgeçtiğidir. Bir aksiyon seç; trainer her
          aksiyonun sıklığını ve EV&apos;sini seninkinin maliyetiyle yan yana gösterir.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/* 🔴 팟 대비 비율이다. 절대 bb가 아니다(앱 2026-08-15 변경 · EN 주석 참조). */}
          <li className="text-muted-foreground">
            Eşikler <strong className="text-foreground">pota göre</strong> ölçülür —{" "}
            <span className="font-semibold text-emerald-500">%0,35&apos;e kadar</span> en iyi oyun ·{" "}
            <span className="font-semibold text-blue-500">%1&apos;e kadar</span> kabul edilebilir ·{" "}
            <span className="font-semibold text-orange-500">ötesi</span> gözden geçirilecek spot
          </li>
          <li className="text-muted-foreground">
            Aynı 0,08bb, 5,5bb&apos;lik potta %1,45 (gözden geçirilecek spot), 22,5bb&apos;lik potta
            %0,36&apos;dır (kabul edilebilir). 5,5bb&apos;lik single raised potta eşikler 0,02bb ve
            0,06bb&apos;ye, 22,5bb&apos;lik 3-bet potta 0,08bb ve 0,23bb&apos;ye denk gelir. 0,02bb ve
            0,05bb&apos;lik tabanlar puanlamayı solver gürültüsünün üzerinde tutar
          </li>
          <li className="text-muted-foreground">
            Sorular her spotun içindeki birkaç karar noktasından çekilir, bu yüzden kombinasyonlar{" "}
            <strong className="text-foreground">on bini aşar</strong>{" "}
            (hedef exploitability %0,5); single raised potları, 3-bet potları ya da blind vs blind&apos;ı
            ayrı ayrı çalışabilirsin
          </li>
          <li className="text-muted-foreground">
            Eller <strong className="text-foreground">gerçek GTO range ağırlıklarıyla orantılı</strong>{" "}
            dağıtılır — bir el, o spotta gerçekten ne sıklıkla elinde olacaksa o sıklıkla gelir
          </li>
          <li className="text-muted-foreground">
            Seriler, zayıf spot dökümleri ve EV kaybettiğin elleri toplayan{" "}
            <strong className="text-foreground">Review</strong> kuyruğu pratik geçmişinle çalışır. Giriş
            yapmak Örnek spotlar ve Günün sorusu geçmişini cihazlar arasında eşitler; Günün sorusu gün serisi ve tamamlandı işareti her
            cihazda ayrı tutulur. Kendi çözdüğün spotlar ve onların pratik geçmişi, giriş yapsan bile bu cihazda kalır
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="GTO Trainer'ı aç →" variant="outline" />
        </div>
      </section>

      {/* ── 교육 예제 (그룹·스팟 이름 = 앱 화면 터키어 축어) ────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          Anında açabileceğin {SPOT_TOTAL} çözülmüş çalışma spotu
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Aşağıdaki her spot zaten çözülmüş, yani açtığın anda strateji görünür — bekleme yok, ayar yok.
          Range&apos;ler standart 100bb online oyunu yaklaşık olarak yansıtır; birini yükle, bir range&apos;i
          değiştir ve neyin kaydığını görmek için yeniden çöz. Board dokusunun stratejiyi nasıl yeniden
          yazdığına dair sezgi kazanmanın en hızlı yolu bu. Grup ve spot adları, uygulama ekranında
          göreceğin Türkçe hâlleriyle birebir aynı.
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
                        href={`/tr/blog/${item.slug}`}
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

      {/* ── 외부 도구 비교 ─ ⚠ 가격·무료 티어 수치 금지(§12-B) · 브랜드 조준 금지 ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">GTO Wizard ya da PioSOLVER&apos;dan farkı ne?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Üçüne de solver denir, ama hesaplamanın nerede ve ne zaman yapıldığı bakımından ayrılırlar. GTO Wizard
          gibi çözüm kütüphaneleri önceden çözülmüş spotlara göz atmanı sağlar; bu hızlıdır ve preflop&apos;u
          da içerebilir. PioSOLVER gibi masaüstü solver&apos;lar bir Windows bilgisayara kurulur ve yerelde
          çözer. Bu solver ise{" "}
          <strong className="text-foreground">tarayıcının içinde, istediğin an çözer</strong>;
          range&apos;leri ve ağaçları hiçbir şey kurmadan istediğin gibi yeniden yazabilirsin.
        </p>
        <Table
          head={["", "HoldemMaster solver", "Çözüm kütüphanesi", "Kurulumlu masaüstü solver"]}
          rows={COMPARE}
        />
        {/* 🔴 근거 = wasm-postflop.pages.dev 자기 고지 + GitHub 저장소 «[Development suspended]» (EN 주석 참조). */}
        <p className="mt-4 text-sm text-muted-foreground">
          <strong className="text-foreground">WASM Postflop</strong> arayarak geldiysen bilmeye değer bir
          fark daha var: orijinal açık kaynak proje kendi sitesinde artık güncellenmeyeceğini duyuruyor ve
          deposu, geliştirmesi askıya alınmış olarak işaretli. Bu solver o motorun bakımı süren bir
          fork&apos;u — aynı AGPL-3.0 lisansı, aynı yayımlanmış kaynak kodu; üstüne arayüz, çalışma
          spotları ve trainer eklendi.
        </p>
      </section>

      {/* ── 함께 쓰면 좋은 도구 (win-rate-quiz 행은 tr 라우트가 없어 뺐다) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Solver&apos;la birlikte kullanabileceğin araçlar</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/tr/hand-chart" className="font-semibold text-primary hover:underline">
              Preflop açılış range tablosu
            </Link>{" "}
            — bu solver yalnızca postflop. Her pozisyondan hangi elleri <strong>açacağın</strong>{" "}
            tabloda. Tablodaki range&apos;ler solver çıktısı değil; kamuya açık
            kaynaklardaki standart açılış range&apos;lerinden derlenmiş bir tahmindir. Yukarıdaki yapıştırmaya hazır range&apos;ler başka bir şey — Single Raised Pot
            çalışma spotlarının kullandığı BTN vs BB range&apos;leri
          </li>
          <li>
            <Link href="/tr/calculator" className="font-semibold text-primary hover:underline">
              Poker hesaplayıcı
            </Link>{" "}
            — çözüm çalıştırmadan bir sayı istediğinde out, pot oranı, SPR, M değeri ve ICM
          </li>
          <li>
            <Link href="/tr/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
              Texas Hold&apos;em stratejisi
            </Link>{" "}
            — solver&apos;ın sayıya döktüğü kavramlar: pozisyon, range&apos;ler, agresiflik ve pot kontrolü
          </li>
        </ul>
      </section>

      {/* ── 써 본 사람들(솔버 후기창 · FAQ 바로 위 · docs/solver-review-design.md §2-3) ── */}
      {reviews}

      {/* ── FAQ — 배열은 ./faq.ts 단일 출처(서버 FAQPage 스키마와 공유) · 본문에도 전부 렌더 ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Sıkça sorulan sorular</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_TR.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">Q. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 설치 안내 + 오픈소스 고지 (AGPL) ─────────────── */}
      <section className="mt-12 text-center">
        <Cta label="Ücretsiz GTO solver'ı çalıştır →" />
        {/* 🔴 「오프라인으로 GTO 계산 가능」이라고 쓰지 마라 — 오프라인은 교육 예제 열람·트레이너만. */}
        <p className="mt-3 text-xs text-muted-foreground">
          Ana ekranına yüklersen çalışma spotları ve trainer cihazda saklanır, böylece{" "}
          <strong className="text-foreground">internet bağlantısı olmadan</strong> alıştırma
          yapabilirsin — Chrome ve Edge adres çubuğunda bir yükleme simgesi gösterir; iPhone&apos;da
          Paylaş → Ana Ekrana Ekle&apos;yi kullan.
        </p>
      </section>
      <p className="mt-8 text-xs text-muted-foreground">
        Bu solver, Wataru Inariba&apos;nın WASM Postflop&apos;una (AGPL-3.0) dayanır; HoldemMaster
        tarafından yerelleştirilmiş ve geliştirilmiştir. Değiştirilmiş kaynak kodunun tamamı aynı lisansla
        yayımlanmıştır.
      </p>
    </div>
  );
}
