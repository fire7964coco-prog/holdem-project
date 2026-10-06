/**
 * `/tr/solver` FAQ — 화면(solver-client.tsx)과 서버 `page.tsx`의 FAQPage 스키마가
 * **같은 배열**을 쓴다. 마스터 = `app/en/solver/faq.ts`(18문항) — 2026-10-06 신설.
 *
 * 🔴 EN 18문항 + **언어 문항 1개**(«Solver ekranı Türkçe mi?») = 19문항.
 *   솔버 앱의 터키어 UI는 아직 라이브가 아니다(솔버 쪽 배포 대기) — 그래서 «지금은 İngilizce,
 *   Türkçe arayüz hazırlanıyor»로만 답하고 날짜는 약속하지 않는다. 다른 언어판은 열거하지 않는다
 *   (playbook 머리 «지원 언어 열거 금지»).
 * 🔴 수치는 EN과 값이 같다 — 구분자만 터키식(%0,35 · 0,08bb · 5,5bb).
 * ⚠ Samsung Internet 경고문은 터키어 화면 문구를 실측하지 못했다 → 축어 인용 없이 설명으로 썼다.
 */
export interface FaqItem { q: string; a: string; }

export const SOLVER_FAQ_TR: FaqItem[] = [
  {
    q: "GTO solver nedir?",
    a: "GTO solver, oyun teorisi açısından optimal (game theory optimal) poker stratejisini sıfırdan hesaplayan bir programdır. Ona iki oyuncunun range'lerini, bir board'u, stack büyüklüklerini ve bahis boyutlarını verirsin; Nash dengesine doğru iterasyon yapar ve 169 başlangıç elinin her birinin ne sıklıkla bet, check ya da fold yapması gerektiğini söyler. Birinin görüşünü saklayan bir tablo değildir — tam senin spotunun cevabını hesaplar.",
  },
  {
    q: "Pokerde GTO ne demek?",
    a: "GTO, Game Theory Optimal'ın kısaltmasıdır: rakibin nasıl ayarlama yaparsa yapsın uzun vadede sömürülemeyen strateji. Belirleyici özelliği karıştırmadır — aynı el zamanın %70'inde bet, %30'unda check edebilir, böylece kalıbın okunamaz. Solver çıktısının tek bir talimat değil de bir sıklık tablosu olmasının sebebi budur.",
  },
  {
    q: "Bu GTO solver gerçekten ücretsiz mi?",
    a: "Evet. Tüm özellikler ücretsiz; kullanım limiti, ödeme yöntemi, kilitli paket ve hesap zorunluluğu yok. Giriş yapmak isteğe bağlıdır ve Study Spots ile Daily Challenge geçmişini cihazlar arasında eşitler. Kendi çözdüğün spotlar ve onların pratik geçmişi, giriş yapsan bile bu cihazda kalır. Solver, açık kaynak motor WASM Postflop (AGPL-3.0) üzerine kuruludur ve HoldemMaster'ın değiştirdiği kaynak kodu aynı lisansla yayımlanmıştır.",
  },
  {
    q: "Bir şey indirmem ya da kurmam gerekiyor mu?",
    a: "Hayır. Bu bir WebAssembly uygulamasıdır; sayfayı Chrome, Edge, Firefox ya da Safari'de açtığın an çalışır. Çözüm sunucuda değil kendi işlemcinde yapılır, yani daha hızlı bir makine daha hızlı çözüm demektir. Kurulum dosyası, lisans anahtarı ya da güncel tutman gereken bir masaüstü istemcisi yoktur.",
  },
  {
    q: "Tarayıcıda çalışan bir solver ne kadar doğru?",
    a: "Hedef exploitability'yi sen belirlersin, solver ona doğru iterasyon yapar. Daha düşük hedefler daha uzun çözüm süresi ister; hesaplama iterasyon limitinde de durabileceği için son exploitability değerini kontrol et. Sonuç, verdiğin range'ler ve karar ağacı için geçerlidir. Bellek ve hız ağacın boyutunu sınırlar — WebAssembly motoru yaklaşık 4GB bellek adresleyebilir, bu yüzden çok büyük ağaçlar masaüstü bir solver'a daha uygundur.",
  },
  {
    q: "Bir poker solver'ı ilk kez nasıl kullanırım?",
    a: "Özel bir çözümle değil, Study Spots ile başla. O spotlar zaten çözülmüş; böylece ayar yapmayı öğrenmeden önce çıktıyı okumayı öğrenirsin. Hazır olduğunda Custom Spot sekmeleri sırayla ilerler: ① OOP Range, ② IP Range, ③ Board, ④ Bet Sizes, ⑤ Run Solver. İlk çözümünde bahis boyutu ağacını varsayılan ayarlarında bırak.",
  },
  {
    q: "Hangi poker durumlarını analiz edebilir?",
    a: "Her heads-up postflop spotunu. İki range'i, flop'u (belirli bir runout istiyorsan turn ve river'ı da), başlangıç potunu ve efektif stack'i, street street bet ve raise boyutlarını — rake ve rake tavanı dahil — sen belirlersin. Preflop burada çözülmez; pozisyona göre açılış range'leri için başlangıç eli tablosunu kullan.",
  },
  {
    q: "GTO Wizard ya da PioSOLVER'dan farkı ne?",
    a: "Temel fark, hesaplamanın nerede yapıldığıdır. GTO Wizard gibi çözüm kütüphaneleri önceden çözülmüş spotlara göz atmanı sağlar; bu hızlıdır ve preflop'u da kapsar. PioSOLVER gibi masaüstü solver'lar bir Windows bilgisayara kurulur ve yerelde çözer. Bu solver ise tarayıcında çözer; hiçbir şey kurmadan range'leri ve ağaçları istediğin gibi yeniden yazabilirsin.",
  },
  {
    q: "Hangi GTO solver daha iyi, PioSOLVER mı GTO Wizard mı?",
    a: "Farklı sorulara cevap verirler; dürüst cevap ne yapmak istediğine bağlı. Bir çözüm kütüphanesine göz atmak daha hızlıdır ve preflop'u kapsar, bu da standart spotları çalışmaya uygundur. Kurulu bir masaüstü solver, bir tarayıcının kaldırabileceğinden büyük ağaçları işler. Hiçbir şey ödemeden ya da kurmadan kendi postflop spotunu hemen çözmek istiyorsan bu solver tam bunun için — cevabını ikisinden biriyle de karşılaştırabilirsin.",
  },
  {
    q: "Mac, Linux ya da mobilde çalışır mı?",
    a: "Evet — her modern tarayıcı yeterli; yalnızca Windows'ta çalışan masaüstü solver'lara karşı pratik avantaj da bu. Bir uyarı: iOS ve Safari'de tarayıcı sınırları tek iş parçacıklı (single-thread) çözüme zorlar, bu yüzden özel çözümler orada yavaştır. Telefonda önceden çözülmüş Study Spots'u ve GTO Trainer'ı kullan, kendi çözümlerini masaüstü tarayıcıda çalıştır.",
  },
  {
    // ★tr 고유 문항 — 솔버 앱 터키어 UI 라이브 전. 날짜 약속·다른 언어판 열거 금지.
    // 🔴 솔버 tr 배포(S-행 재통지) 순간 이 문항 + solver-client «Grup ve spot adlarını … İngilizce bıraktık» + 스팟 이름을 같이 고친다(핸드오프 등재).
    q: "Solver ekranı Türkçe mi?",
    a: "Henüz değil. Solver uygulamasının ekranı şu an İngilizce açılıyor; Türkçe arayüz hazırlanıyor. Türkçe arayüz yayına girene kadar menü ve buton adları — OOP Range, Board, Run Solver, Check, Bet, EQ, EV, EQR gibi — İngilizce görünür. Bu sayfa o terimleri Türkçe açıklıyor: beş adımı, sonuç ekranının bölümlerini ve trainer'ın puanlamasını burada Türkçe anlattık; çalışma spotlarının adlarını da ekranda gördüğün İngilizce hâlleriyle verdik.",
  },
  {
    q: "GTO Trainer nedir?",
    a: "Çözülmüş çalışma spotları üzerine kurulu bir alıştırma modudur. Trainer sorularını çözülmüş spotlardaki birkaç karar noktasından çeker, bu yüzden kombinasyonlar on bini aşar; elleri de gerçek GTO range ağırlıklarına göre dağıtır — yani bir el, o spotta gerçekten ne sıklıkla elinde olacaksa o sıklıkla gelir. Bir aksiyon seçersin, kararını çözüme göre puanlar. Kendi çözdüğün spotları da sonuç ekranından trainer sorusu olarak kaydedip bu cihazda çalışabilirsin.",
  },
  {
    q: "Trainer neden doğru ya da yanlış yerine EV kaybıyla puanlıyor?",
    a: "Çünkü GTO aksiyonları karıştırır; düşük sıklıklı bir seçim otomatik olarak hata değildir. Trainer, aksiyonunun pota göre ne kadar beklenen değerden (EV) vazgeçtiğini ölçer: potun %0,35'ine kadar en iyi oyun, %1'ine kadar kabul edilebilir, ötesi gözden geçirmeye değer. Eşiklerin 0,02bb ve 0,05bb'lik tabanları vardır.",
  },
  {
    q: "Puanlama neden pota göre yapılıyor?",
    a: "Çünkü aynı 0,08bb, 5,5bb'lik bir potun %1,45'idir — gözden geçirilecek bir spot — ama 22,5bb'lik bir potun yalnızca %0,36'sıdır, bu da kabul edilebilir. Mutlak bb ile puanlama 3-bet potları olduklarından kötü gösteriyordu; bu yüzden puanlama Ağustos 2026'da potun yüzdesine geçti. 5,5bb'lik single raised potta eşikler 0,02bb ve 0,06bb'ye, 22,5bb'lik 3-bet potta 0,08bb ve 0,23bb'ye denk gelir.",
  },
  {
    q: "Çalışma ilerlemem nereye kaydediliyor?",
    a: "Varsayılan olarak cihazına, hesap gerekmeden. HoldemMaster hesabıyla giriş yaparsan Study Spots ve Daily Challenge geçmişin cihazlar arasında eşitlenebilir. Kendi çözdüğün spotlar ve onların pratik geçmişi giriş yapsan bile bu cihazda kalır; hesabına kaydedilmez. Seriler, senaryoya göre zayıf spot dökümleri ve en büyük EV kayıplarını toplayan Review kuyruğu pratik geçmişini kullanır.",
  },
  {
    q: "Ana ekranıma yükleyebilir miyim?",
    a: "Evet. Yüklendiğinde tarayıcı çubuğu olmadan tam ekran açılır; çalışma spotları ve trainer cihazda saklandığı için internet bağlantısı olmadan alıştırma yapabilirsin. Chrome ya da Edge'de adres çubuğundaki yükleme simgesini kullan; iPhone'da Paylaş'a, ardından Ana Ekrana Ekle'ye dokun. Özel spotları çevrimdışı çözmek ancak solver motoru bir kez indirildikten sonra mümkündür.",
  },
  {
    q: "Ana ekrana yüklemek güvenli mi?",
    a: "Cihazına alışılmış anlamda hiçbir şey kurulmaz — tarayıcı, yine tarayıcının içinde çalışan bir kısayol oluşturur. Bizim sözümüze güvenmek yerine kendin doğrulayabilirsin: kamera, rehber, SMS ya da konum izni istenmez ve geliştirici araçlarındaki ağ (network) sekmesi yapılan istekleri gösterir. Kaynak kodu GitHub'da AGPL-3.0 ile herkese açıktır ve kaldırdığında geride hiçbir şey kalmaz.",
  },
  {
    q: "Samsung Internet yüklerken güvenli olmayan uygulama uyarısı veriyor — bu ne anlama geliyor?",
    a: "Kötü amaçlı yazılım bulunduğu anlamına gelmez. Samsung Internet kendi yükleme paketini oluşturur ve bu paket henüz Google'ın güvenilir listesinde olmadığı için tarayıcı bir uyarı gösterir. Chrome üzerinden yüklersen bu uyarı çıkmaz. Samsung Internet'te devam etmek istersen uyarıdaki ayrıntılara dokunup yine de yükleme seçeneğini seç.",
  },
  {
    q: "Bu açık kaynak bir GTO poker solver mı?",
    a: "Evet. Wataru Inariba'nın AGPL-3.0 lisansıyla yayımladığı WASM Postflop'a dayanır; HoldemMaster'ın yerelleştirip geliştirdiği sürüm, değiştirilmiş kaynak kodunun tamamını aynı lisansla yayımlar. Orijinal proje kendi sitesinde artık güncellenmeyeceğini belirtiyor; bu sürümün ayrıca bakımının yapılmasının bir sebebi de bu.",
  },
];
