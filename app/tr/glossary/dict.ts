// /tr/glossary — sözlük UI + 46 terim (yapı = components/glossary/dict.ts · sıra & cat = EN TERMS).
//
// 정의 원천 (2026-10-06 · tr 회차 3):
// - 글 축어 41개 = lib/posts-tr/holdem-glossary.ts 표 문안 재사용(링크·굵게·== 제거, 1~3문장 절단).
//   Flop·Turn·River = «Flop / Turn / River» 한 칸(«İlk üç ortak kart / dördüncü / beşinci ve son kart»)을 셋으로 나눈 것 ·
//   3-Bet = 액션표 행 첫 구(괄호 절단 · 160자) + «3-bet sayımı» 혼동표 행 · Ante = 160자 맞춤으로 «küçük»·«masa adına» 두 수식어만 삭제 · Cooler = 혼동표 «Cooler vs Bad Beat» 행의 cooler 쪽(엄밀한 뜻 한정 포함) ·
//   Pozisyon = 포지션 절 도입 문장(«masada nerede oturduğunu, yani ne zaman hareket edeceğini») + «Pozisyonda / Pozisyon dışında» 행 ·
//   Semi-blöf = «Blöf / Semi-blöf» 행 전체 · Blöf = 같은 행 앞 문장 · All-in = «(bkz. yan pot)» 링크 꼬리만 절단.
// - 번역 5개(글에 정의 없음) = Board · Offsuit · Out · Preflop · SPR — EN desc 번역, 표기 = docs/translation-terms-tr.md + tr 코퍼스
//   (ortak kart · deste · tür · Floş · Kent · out · made hand · draw). §13: 9 out / 8 out · A♠K♦ · ÷ 그대로.
// - 표기: çip(fiş 금지) · 표제는 Fold (yatmak) — 글 표 그대로 · 검색 별칭(aka) = 사장님 10-06 확정(단독 «pas»·«pas geçmek» = fold · check = çek/bop · rest = all-in — tr SERP 보강 회차 A) · 족보 = 코퍼스 표 형(Üçlü·Kent·Floş).
// - seo.title: DataForSEO google_ads search_volume (location 2792 Türkiye · language tr · 2026-10-06, 1회):
//   «poker terimleri» 260 · «icm nedir» 170 · «tilt nedir» 140 · «poker terimleri sözlüğü» 10 · «poker sözlüğü» null
//   → 머리어 = 터키어 «Poker Terimleri»(자국어 헤드텀 우세 — ms와 반대) + «Sözlüğü A–Z».
//   🔴 사장님 10-06 확정: «poker terimleri» 머리어의 주인 = 이 도구(경쟁하면 글을 내린다). 글 holdem-glossary는 회차 B(10-06)에
//   seoTitle·H1·tags에서 «poker terimleri / sözlük»을 빼고 «pokerde X ne demek»·전통어(rest·bop·rölans) 롱테일로 재조준했다
//   (새 seoTitle «Pokerde rest, bop, nuts ne demek? Masanın dilini çöz»). GSC에서 두 페이지가 «poker terimleri»로 같이 잡히면 글을 내린다.
// - hero.h1 = «Poker Terimleri Sözlüğü» — components/side-rail.tsx 좌측 레일 라벨과 축어 일치.

import type { GlossaryDict } from "@/components/glossary/dict";

export const GLOSSARY_DICT_TR: GlossaryDict = {
  sortLocale: "tr-TR",
  grouping: "letter",
  seo: {
    title: "Poker Terimleri Sözlüğü A–Z — Texas Hold'em Terimleri",
    description:
      "Texas Hold'em poker terimleri sözlüğü: nuts, out, pot odds, 3-bet, c-bet, ICM, SPR, kicker, tilt ve fazlası. 46 terimi ara ya da kategoriye göre filtrele.",
    keywords:
      "poker terimleri, poker terimleri sözlüğü, poker sözlüğü, texas holdem terimleri, poker terimleri ve anlamları, icm nedir, tilt nedir, nuts nedir, pokerde nuts ne demek, pot odds, pot oranı, 3-bet nedir, c-bet, pokerde kicker nedir, spr poker",
    path: "/tr/glossary",
  },
  hero: {
    badge: "♠ {n} terim · A–Z aranabilir",
    h1: "Poker Terimleri Sözlüğü",
    leadBefore: "Masada duyacağın her Texas Hold'em terimi — ",
    leadStrong: "nuts, out, pot odds, 3-bet, ICM",
    leadAfter: " ve fazlası — net ve doğru şekilde tanımlandı. Ara ya da kategoriye göre filtrele.",
  },
  searchPlaceholder: "Terim ara (örneğin nuts, pot odds, out)...",
  allLabel: "Tümü",
  cats: { Action: "Aksiyon", Hand: "El", Position: "Pozisyon", Math: "Matematik", Board: "Board", Slang: "Argo" },
  empty: { title: "«{q}» için terim bulunamadı.", hint: "Başka bir kelime ya da kategori dene." },
  related: {
    ariaLabel: "İlgili rehberler",
    heading: "Öğrenmeye devam et",
    items: [
      { href: "/tr/blog/texas-holdem-rules-for-beginners", label: "Kurallar", desc: "Blind'lar, showdown, temeller" },
      { href: "/tr/blog/holdem-hand-rankings", label: "El Sıralaması", desc: "10 elin tamamı, sırayla" },
      { href: "/tr/blog/holdem-glossary", label: "Terimler rehberi", desc: "90+ terim, duruma göre gruplu" },
      { href: "/tr/solver", label: "GTO Solver", desc: "Kendi spotunun range'ini ve equity'sini gör" },
      { href: "/tr/hand-chart", label: "Başlangıç Elleri", desc: "Pozisyona göre açılış range'leri" },
      { href: "/tr/calculator", label: "Hesaplayıcı", desc: "Odds, pot oranı, ICM" },
    ],
  },
  terms: [
    { term: "3-Bet", cat: "Action", desc: "Açılıştan sonraki re-raise. Blind'lar 1. bahis, açılış raise'i 2. bahistir; yani re-raise 3-bet'tir (ilk raise değil).", aka: ["3bet", "three-bet", "3-bet nedir"] },
    { term: "All-in", cat: "Action", desc: "Tüm çiplerini ortaya sürmek; potun yalnızca karşılayabildiğin kısmını kazanabilirsin.", aka: ["allin", "jam", "shove", "hepsi ortaya", "rest", "rest çekmek"] },
    { term: "Ante", cat: "Action", desc: "Geleneksel olarak potu başlatmak için herkesten alınan, blind'lardan ayrı zorunlu bahis — bugün çoğu turnuva, tek bir koltuğun ödediği big blind ante kullanır.", aka: ["big blind ante", "bb ante"] },
    { term: "Backdoor", cat: "Board", desc: "İki kartın art arda gelmesine (turn ve river) ihtiyaç duyan draw.", aka: ["runner-runner", "backdoor draw"] },
    { term: "Bad Beat", cat: "Slang", desc: "Büyük favoriyken şanslı bir draw'a kaybetmek.", aka: ["bad beat", "badbeat"] },
    { term: "Bankroll", cat: "Slang", desc: "Poker için genel olarak ayırdığın para — masadaki çipler değil.", aka: ["bankrol"] },
    { term: "Blind'lar", cat: "Action", desc: "Aksiyonu başlatan zorunlu SB/BB bahisleri — limit seviyelerinin adı da budur.", aka: ["blinds", "blind", "small blind", "big blind", "SB", "BB", "kör bahis"] },
    { term: "Blöf", cat: "Action", desc: "Blöf, daha iyi elleri fold ettirmek için zayıf elle bahis yapmaktır.", aka: ["bluff", "blof"] },
    { term: "Board", cat: "Board", desc: "Masanın ortasındaki ortak kartlar. «Islak» (wet) board draw'larla doludur ve tehlikelidir; «kuru» (dry) board az draw sunar.", aka: ["ortak kartlar", "community cards", "wet board", "dry board"] },
    { term: "Buton (BTN)", cat: "Position", desc: "Dealer pozisyonu; postflop'ta en son oynar — masanın en iyi koltuğu.", aka: ["button", "BTN", "dealer", "dağıtıcı", "buton"] },
    { term: "Call (görmek)", cat: "Action", desc: "Elde kalmak için mevcut bahsi birebir görmek.", aka: ["call", "görmek", "gormek"] },
    { term: "Check", cat: "Action", desc: "Bahis yapmadan sırayı geçmek — yalnızca önünde karşılaman gereken açık bir bahis yoksa.", aka: ["kontrol", "çek", "cek", "bop", "bob"] },
    { term: "Check-raise", cat: "Action", desc: "Önce check yapıp rakip bahis koyunca yükseltmek — güçlü ve aldatıcı bir hat (modern salonlarda yasal).", aka: ["check raise", "checkraise"] },
    { term: "C-bet", cat: "Action", desc: "Preflop'ta raise yapan oyuncunun flop'ta yaptığı «devam bahsi» (continuation bet).", aka: ["c-bet", "cbet", "continuation bet", "devam bahsi"] },
    { term: "Cooler", cat: "Slang", desc: "Fold edilemeyecek kadar güçlü bir elin daha büyük bir ele çarpması (dar anlamda, para ortaya girerken zaten gerideydin)." },
    { term: "Draw", cat: "Hand", desc: "Gelişmesi gereken bir el — örneğin floş draw'ı (Floşa 4 kart) ya da kent draw'ı.", aka: ["flush draw", "straight draw", "floş draw", "kent draw"] },
    { term: "Equity", cat: "Math", desc: "Şu an pottaki yüzde payın.", aka: ["ekuiti", "pot payı"] },
    { term: "Flop", cat: "Board", desc: "İlk üç ortak kart." },
    { term: "Fold (yatmak)", cat: "Action", desc: "Elini bırakıp pot üzerindeki her hakkından vazgeçmek.", aka: ["fold", "yatmak", "çekilmek", "muck", "pas", "pas geçmek"] },
    { term: "GTO", cat: "Math", desc: "Game Theory Optimal — solver'lardan çıkan dengeli, sömürülemeyen strateji.", aka: ["game theory optimal", "solver"] },
    { term: "Gutshot", cat: "Hand", desc: "Ortadaki tek bir değere ihtiyaç duyan içten kent draw'ı (4 out).", aka: ["inside straight draw", "içten kent"] },
    { term: "Range", cat: "Math", desc: "Bir oyuncunun o spotta tutabileceği ellerin tamamı; profesyoneller tek elle değil range'lerle düşünür.", aka: ["hand range", "el aralığı", "el range"] },
    { term: "ICM", cat: "Math", desc: "Independent Chip Model (Bağımsız Çip Modeli) — ödül basamaklarına yaklaşırken turnuva çiplerini gerçek para cinsinden equity'ye çevirir.", aka: ["independent chip model", "bağımsız çip modeli", "icm nedir"] },
    { term: "Kicker (yan kart)", cat: "Hand", desc: "Diğer açılardan eşit eller arasında beraberliği bozan yan kart.", aka: ["kicker", "yan kart"] },
    { term: "Limp", cat: "Action", desc: "Preflop'ta raise yerine sadece big blind'ı call ederek elde kalmak — genelde zayıf, pasif bir oyun.", aka: ["limper", "limping"] },
    { term: "Nuts", cat: "Hand", desc: "Mevcut board'da mümkün olan en iyi el (sonraki street'lerde değişebilir).", aka: ["the nuts", "nuts nedir"] },
    { term: "Offsuit", cat: "Hand", desc: "Farklı türden iki kart (örneğin A♠K♦). Floş yapma ihtimali çok daha düşük olduğu için aynı elin suited halinden biraz daha zayıftır.", aka: ["off suit", "unsuited", "farklı tür"] },
    { term: "Out", cat: "Math", desc: "Destede kalan ve seni kazanan ele taşıyan kartlar. Floş draw'ının 9 out'u, açık uçlu kent draw'ının (open-ender) 8 out'u vardır.", aka: ["outs", "out sayısı"] },
    { term: "Overpair", cat: "Hand", desc: "Board'daki her karttan yüksek bir pocket pair.", aka: ["over pair"] },
    { term: "Pozisyon", cat: "Position", desc: "Masada nerede oturduğun, yani ne zaman hareket edeceğin. Rakibinden sonra oynuyorsan pozisyondasın, önce oynuyorsan pozisyon dışındasın.", aka: ["position", "in position", "out of position", "IP", "OOP", "pozisyonda", "pozisyon dışında"] },
    { term: "Pot", cat: "Board", desc: "Uğruna oynanan çiplerin toplamı.", aka: ["kasa"] },
    { term: "Pot oranı (pot odds)", cat: "Math", desc: "Potun, bir call'un maliyetine oranı.", aka: ["pot odds", "pot oranı", "pot odd"] },
    { term: "Preflop", cat: "Board", desc: "Henüz hiçbir ortak kart açılmadan, her oyuncunun elinde yalnızca iki hole kartı varken oynanan ilk bahis turu.", aka: ["pre-flop"] },
    { term: "Rake", cat: "Slang", desc: "Salonun cash oyunundaki çoğu pottan aldığı pay.", aka: ["komisyon"] },
    { term: "Raise (yükseltmek)", cat: "Action", desc: "Mevcut bahsi artırmak; diğerlerini ya daha fazlasını görmeye ya da fold etmeye zorlar.", aka: ["raise", "yükseltmek", "arttırmak", "yukseltmek"] },
    { term: "River", cat: "Board", desc: "Beşinci ve son ortak kart." },
    { term: "Semi-blöf", cat: "Action", desc: "Blöf, daha iyi elleri fold ettirmek için zayıf elle bahis yapmaktır; semi-blöf aynısını hâlâ gelişebilecek bir draw ile yapar.", aka: ["semi-bluff", "semi bluff", "semi blöf"] },
    { term: "Set", cat: "Hand", desc: "Pocket pair + bir board kartıyla yapılan Üçlü (iyi gizlenir).", aka: ["set nedir"] },
    { term: "Showdown", cat: "Board", desc: "Son bahisten sonra kazananı belirlemek için ellerin açılması.", aka: ["el gösterme"] },
    { term: "SPR", cat: "Math", desc: "Stack-to-Pot Ratio — efektif stack ÷ pot. Düşük SPR güçlü made hand'lerle elde kalmayı destekler; yüksek SPR draw'ları ve postflop becerisini ödüllendirir.", aka: ["stack to pot ratio"] },
    { term: "Stack", cat: "Slang", desc: "Bir oyuncunun önündeki çipler.", aka: ["deep stack", "short stack", "çip yığını"] },
    { term: "Tilt", cat: "Slang", desc: "Duyguların yönettiği kötü oyun; genelde bir kayıptan sonra gelir.", aka: ["tilt nedir", "tilt olmak"] },
    { term: "Trips", cat: "Hand", desc: "Tek bir hole kart + board'daki bir çiftle yapılan Üçlü (kicker kontrolü daha zayıf).", aka: ["trips nedir"] },
    { term: "Turn", cat: "Board", desc: "Dördüncü ortak kart." },
    { term: "Value bet", cat: "Action", desc: "Daha zayıf bir elden call almayı umarak güçlü elle yapılan bahis.", aka: ["value bet", "value"] },
    { term: "Wheel", cat: "Hand", desc: "A-2-3-4-5 Kenti, en düşük Kent (As küçük oynar).", aka: ["the wheel", "en düşük kent"] },
  ],
};
