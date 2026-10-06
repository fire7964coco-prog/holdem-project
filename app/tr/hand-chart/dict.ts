import type { HandChartDict } from "@/components/hand-chart/dict";

// `/tr/hand-chart` 사전 — ★2026-10-06 신설(tr 클러스터 회차 2 · docs/tr-cluster-plan.md §4).
// 키워드 실측(2026-10-06 · DFS google_ads/search_volume · location 2792 Türkiye · language 미지정):
//   poker chart 70 · poker hand chart 30 · poker el tablosu 10 · poker starting hand chart 10 · preflop chart 10 ·
//   poker başlangıç elleri / holdem başlangıç elleri / oynanabilir eller poker / poker hangi ellerle oynanır = null.
//   → 차트 검색 술어는 영어 토큰이 산다(ms와 같은 형). 제목 머리어 = «Poker Starting Hand Chart» + 터키어 «Başlangıç Elleri Tablosu».
//   🔴 «poker elleri»(2.900)·«el sıralaması»는 족보 의도 = holdem-hand-rankings 필라 소유(§3) — 이 페이지 제목·H1에 쓰지 않는다.
// 용어 = docs/translation-terms-tr.md: el(핸드) · kombo · suited/offsuit/pocket pair 영어 · 포지션 약어 영어 ·
//   numberLocale tr-TR(1.326 · 35,4) · percentPrefix(«%42» — tr 코퍼스 38 : 0) · sen체.
export const HAND_CHART_DICT_TR: HandChartDict = {
  numberLocale: "tr-TR",
  percentPrefix: true,
  seo: {
    title: "Poker Starting Hand Chart — Pozisyona Göre Başlangıç Elleri",
    description:
      "İnteraktif poker başlangıç elleri tablosu: Hold'em'deki 169 elin tamamı UTG, HJ, CO, BTN ve SB pozisyonlarına göre. Bir pozisyona dokun, o koltuktan açabileceğin elleri gör.",
    path: "/tr/hand-chart",
    keywords: [
      "poker starting hand chart",
      "poker hand chart",
      "poker chart",
      "poker el tablosu",
      "poker başlangıç elleri",
      "preflop chart",
    ],
  },
  hero: {
    badge: "♠ İnteraktif başlangıç eli aracı",
    h1: "Poker Starting Hand Chart",
    lead: "169 elin tamamı pozisyona göre renklendirildi (UTG → SB). Bir pozisyona dokun, yalnızca o koltuktan açabileceğin eller öne çıksın.",
    handsUnit: "el",
    positionsUnit: "pozisyon",
    tapHint: "Dokun · üzerine gel, hemen gör",
  },
  filter: {
    caption: "Pozisyonu seç → oynanabilir eller öne çıkar",
    basisNote: [
      "Her pozisyonun yüzdesi ",
      { b: "169 el türü içindeki paydır" },
      " (kombo bazlı değer aşağıdaki tabloda ayrıca yazıyor)",
    ],
    showAll: "Hepsini göster",
    selected: "{pos} açılış range'i · {count} / 169 (%{pct})",
    handsCount: "{n} el",
  },
  positions: ["Under the Gun (UTG)", "Hijack (HJ)", "Cutoff (CO)", "Button (BTN)", "Small Blind (SB)"],
  typePct: "~{n}",
  grid: {
    swipe: "← Tablonun tamamı için kaydır →",
    pocketPair: "Pocket pair",
    suited: "Suited",
    offsuit: "Offsuit",
    openFrom: "{pos} ve sonrasından aç",
    legendNote: "Sağ üst üçgen = suited (s) · köşegen = pocket pair · sol alt üçgen = offsuit (o)",
  },
  legend: {
    heading: "Renk açıklaması",
    // 🔴 «%42'si» 같은 접미사는 숫자마다 모음조화가 달라(%30'u · %6'sı) 자리표시자 뒤에 붙일 수 없다.
    seatLine: "{pct} · 169 tür içinden",
    fold: "Fold",
    foldSub: "Tüm pozisyonlar",
  },
  table: {
    heading: "Pozisyona göre açılış range'i",
    swipe: "← «Range · Örnek eller» için kaydır",
    position: "Pozisyon",
    hands: "El sayısı",
    handsSub: "(169 tür içinden)",
    range: "Range",
    rangeSub: "tür / kombo",
    examples: "Örnek eller",
    comboCell: "/ kombo {pct}",
    notes: [
      [
        "* ",
        { b: "İki ayrı hesap tabanı var." },
        " «169 türün %12'si» elleri ",
        { b: "tür" },
        " olarak sayar (169 türden kaçı), ",
        { b: "kombo" },
        " tabanı ise 1.326 kart kombinasyonundan kaçının dahil olduğunu sayar. Aynı range iki farklı değer verir — AA 1 tür ama 6 kombo, AKo 1 tür ama 12 kombo. Solver'lar ve strateji yazıları genelde kombo tabanını kullanır.",
      ],
      [
        // 🔴 /tr/solver 랜딩은 회차 5 전까지 없다 — 링크 없이 이름만(ko /solver로 보내지 않는다).
        "* Bu tablo standart açılış range'lerinin bir tahminidir. Gerçek solver değerleri açılış boyutuna, stack'e ve rakip range'ine göre değişir — örneğin HoldemMaster GTO solver'ın blind savaşı örneğinde SB'nin 3bb'lik açılışı %46,6'dır (92 tür, 618 kombo). Gerçek masada masanın tarzına ve stack derinliğine göre ayrıca ayarla.",
      ],
    ],
  },
  why: {
    heading: "El seçimini neden pozisyon belirler",
    items: [
      {
        title: "Pozisyon = bilgi",
        desc: "Button (BTN) flop'tan sonra her zaman en son konuşur. Herkesin bet ve check'ini önceden görmek, aynı eli çok daha kârlı yapar.",
      },
      {
        title: "UTG'nin arkasında 8 oyuncu var",
        desc: "9 kişilik masada UTG'den open-raise yaptığında arkandaki 8 oyuncunun ne yapacağını bilmezsin. Re-raise yeme ihtimalin yüksek; suited connector gibi spekülatif eller değerini gerçekleştiremez — premium ellere daralt.",
      },
      {
        title: "Suited'ın değeri",
        desc: "Suited eller, aynı elin offsuit hâline göre yaklaşık %3–5 equity avantajına sahiptir. Bu yüzden A8s hijack'ten açılabilir ama A8o button'a kadar beklemelidir.",
      },
      {
        title: "SB'nin ikilemi",
        desc: "Small blind flop'tan sonra her zaman ilk konuşur. Range'i button'dan geniş olsa bile gerçekleştirebildiği equity daha azdır; orta güçteki eller bu yüzden daha az kazandırır.",
      },
    ],
  },
  faqHeading: "Sık sorulan sorular",
  related: {
    heading: "Sıradaki adım — ilgili rehberler",
    // 🔴 tr 코퍼스에는 starting-hands-chart·position-play·when-to-fold 글이 없다(§3 — 차트 의도는 이 도구가 주인).
    //    실재하는 tr 글 + tr 도구만 건다. desc는 각 글의 title/seoTitle/desc 축어 범위 안(settled §3-A).
    items: [
      { href: "/tr/blog/texas-holdem-rules-for-beginners", tag: "Başlangıç", title: "Poker nasıl oynanır? Texas Hold'em kuralları", desc: "Blindler, çip dağıtımı, el sıralaması — adım adım" },
      { href: "/tr/blog/holdem-hand-rankings", tag: "El sıralaması", title: "Poker el sıralaması", desc: "En güçlüden en zayıfa 10 poker eli, olasılıklarla" },
      { href: "/tr/blog/holdem-betting-actions", tag: "Bahis", title: "Poker bahis hareketleri", desc: "Check, call, raise ve fold ne demek" },
      { href: "/tr/blog/holdem-game-order", tag: "Oyun sırası", title: "Hold'em el sırası", desc: "Preflop, flop, turn, river, showdown — adım adım" },
      { href: "/tr/calculator", tag: "Araç", title: "Poker Hesaplayıcı", desc: "Her el için equity ve pot oranı" },
    ],
  },
};
