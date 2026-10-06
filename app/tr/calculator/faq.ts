// TR calculator FAQ — shared by page.tsx (FAQPage JSON-LD) and the CalculatorTool (visible render).
//
// ★2026-10-06 신설(tr 회차 2) — EN 17 명제 + tr 고유 1(TDA 2024 Rule 5 · 선례 7로케일과 같은 자리). 문형 정본 = ms 판(09-19 렌즈 반영본).
// 🔴 정의형 금지(«ICM nedir?»·«pot oranı nedir?»는 글 몫 — 회차 3 pot-odds·probability 글이 개념 의도를 갖는다 · §3).
// §13: 모든 수치는 scripts/calc-reference-tables.ts 출력 = EN 그대로 · 구분자만 터키식 · 퍼센트 기호 앞.
//    AA vs KK %81,9는 전 수트 평균(81.95) · %19,1 = 9/47(flop → 다음 카드) · %19,6 = 9/46(turn → river).
// 렌더 순서 = 도구 → ICM 예시 → 가이드 카드 → 빠른 참조 표 → FAQ. 그래서 «yukarıdaki»가 맞다.
export const CALCULATOR_FAQ_TR: { q: string; a: string }[] = [
  {
    q: "Poker odds hesaplayıcı nasıl çalışır?",
    a: "Henüz gelecek her kartı açar ve her elin ne sıklıkla kazandığını sayar. Tüm eller biliniyorsa flop ve turn'deki olası her runout'u kesin olarak sayar (heads-up'ta flop'ta 990, turn'de 44; oyuncu arttıkça daha az, river'da ise board zaten tamamdır). Preflop'ta her eşleşme için 1,7 milyon board var ve rastgele elli rakip bunu daha da katlar; bu yüzden o spotlarda 60.000 rastgele runout örnekler ve bunu sonucun altında belirtir — değer çalıştırmalar arasında yaklaşık 0,3 yüzde puan oynar.",
  },
  {
    q: "AA, KK'ya karşı yüzde kaç kazanır?",
    a: "Pocket as preflop'ta pocket papaza karşı yaklaşık %82 kazanır (her tür kombinasyonunun ortalamasıyla %81,9, beraberlik ihtimali %0,5). AA vs AK suited yaklaşık %88'e %12, KK vs AK suited ise yaklaşık %66'ya %34'tür.",
  },
  {
    q: "AK, pocket pair'e karşı gerçekten yazı tura mı?",
    a: "As ve papazın altındaki her çifte karşı neredeyse, ama hiçbir zaman tam 50/50 değil. AK offsuit 22–44'e karşı yaklaşık %46–47, 55–99'a karşı yaklaşık %45, 10-10 ile QQ arasına karşı yaklaşık %43 equity'ye sahiptir; AK suited bunlara yaklaşık 2,5–3 yüzde puan ekler. KK'ya karşı yaklaşık %30'a, AA'ya karşı yaklaşık %7'ye düşer; yani bu etiket yalnızca hem asın hem papazın geçtiği çiftler için uygundur.",
  },
  {
    q: "Pokerde 4 ve 2 kuralı nedir?",
    a: "Draw ihtimali için kafadan hesap kestirmesi: iki kart gelecekken (flop'tan river'a) out sayını 4 ile, tek kart gelecekken (turn'den river'a) 2 ile çarp. 9 out için bu %36 ve %18 eder; kesin değerler bir sonraki cevapta. 4 ile çarpma 9 out'a kadar yaklaşık bir yüzde puan içinde kalır, sonra her ek out için yaklaşık bir puan sapar (15 out aslında %60 değil %54,1'dir). 2 ile çarpma ise her zaman kesin değerin biraz altında kalır ve out arttıkça fark açılır — 9 out'ta 1,6 puan, 15 out'ta 2,6 puan eksik. Ve 4 ile çarpma yalnızca iki kartı da ek ödeme yapmadan göreceksen geçerlidir.",
  },
  {
    q: "Flush draw ne sıklıkla tutar?",
    a: "9 out'la flush draw flop'tan river'a kadar (iki kart gelecek) %35,0, flop'tan sonraki tek kartta %19,1, turn'den river'a %19,6 tamamlanır.",
  },
  {
    q: "Pot oranı nasıl hesaplanır?",
    a: "Call tutarı ÷ (bet sonrası pot + call tutarı) = gereken minimum equity. Örneğin bet dahil 10.000 olan bir pota 3.000 call etmek 3.000 ÷ 13.000 ≈ %23,1'dir; yani elinin equity'si %23,1'i geçiyorsa call kârlıdır. Pot büyüklüğünde bet her zaman %33,3, yarım pot bet %25 ister.",
  },
  {
    q: "Flush draw'la call etmek için hangi pot oranı gerekir?",
    a: "Flop'ta tek bir bet'e karşıysan yalnızca sıradaki kartı say: 9 out %19,1 tutar, yani yaklaşık 4,2'ye 1'den iyi pot oranına ihtiyacın var — ya da farkı kapatacak implied odds'a; bunun için de rakibin arkada çipi ve ödeyecek bir eli olmalı. Nut'a draw etmiyorsan değeri ciddi indir: ödeme alan ikinci en iyi flush, kazandığından çok daha fazlasını kaybeder. İki kartı da kesin göreceksen (all-in), iki kartlık %35,0 geçerlidir.",
  },
  {
    q: "Implied odds hesaplayıcısı nasıl kullanılır?",
    a: "«Pot Oranı» sekmesini aç ve «Implied odds»u etkinleştir, sonra draw'ın tutarsa sonraki street'lerde kazanmayı beklediğin ek tutarı gir. Hesaplayıcı bunu pota ekler ve şimdiki call'unun gerektirdiği equity'yi düşürür. Ek tutarı dürüst tut: ancak rakibinin arkada gerçekten o kadar çipi varsa ve draw'ın tamamlandığında gerçekten ödeyecekse sayılır.",
  },
  {
    q: "Hangi poker elinin kazandığını nasıl kontrol ederim?",
    a: "«Equity» sekmesinde iki elin kartlarını ve beş board kartının tamamını gir: board tamamsa kazananı ve kazanan eli söyler ya da chop olduğunu bildirir. Tek bir eli değerlendirmek için «El Değeri» sekmesine 5–7 kart koy; en iyi beş kartlık kombinasyonu otomatik bulur.",
  },
  {
    q: "ICM hesaplayıcısı nasıl kullanılır?",
    a: "Kalan oyuncuları, sıfırdan büyük stack'leri ve ödülleri en yüksekten en düşüğe gir; eşit ödüller olabilir. Call/fold kararı için her olası sonuçtaki (kazanma, beraberlik ya da kaybetme) stack'leri ve kalan ödülleri kullanarak ICM değerini hesapla. Her değeri o sonucun gerçek olasılığıyla çarp, topla ve fold sonrası ICM değerinle karşılaştır. Elenirsen gerçekten aldığın ödülü kullan; bubble'da bu sıfır olabilir. Bu hesaplayıcı elin kazanma, beraberlik ve kaybetme olasılıklarını vermez.",
  },
  {
    q: "Bu hesaplayıcıdaki «ICM değeri» ne anlama geliyor?",
    a: "ICM değeri, her sırada bitirme ihtimaline göre stack'inin beklenen ödül parasıdır. Garanti bir ödül değildir ve çip payınla aynı olmak zorunda da değildir.",
  },
  {
    q: "ICM hesaplayıcısını ne zaman kullanmalıyım?",
    a: "Ödemeler bitiş sırasına göre belirlendiğinde ve para yaklaştığında: bubble'da, final table'da, deal önerildiğinde ve her koltuğun eşit ödendiği satellite'lerde. Cash game'de geçerli değildir, çünkü orada bir çip her zaman üzerindeki değer kadardır.",
  },
  {
    q: "ICM, chip EV ile aynı şey mi?",
    a: "Hayır. Chip EV çipleri sayar; ICM beklenen ödül parasını sayar. Bir call ortalamada çip ekleyip beklenen ödül parasını düşürebilir. Elendiğinde gerçekten alınan ödülü say: garanti altına alınmış ödül kaybolmaz.",
  },
  {
    q: "Chip leader'ım — neden ICM değerim çip payımdan düşük?",
    a: "Birincilik yalnızca kendi ödülünü öder, havuzun tamamını değil; daha küçük stack'lerin de diğer ödülleri alma şansı sürer. Yukarıdaki bubble örneğinde leader çiplerin %40'ını, ödül değerinin ise %33,3'ünü tutar. Bu fark o ödül dağılımını yansıtır; belirli bir call'un risk primini tek başına ölçmez.",
  },
  {
    q: "ICM deal'i (final table) nasıl hesaplanır?",
    a: "Güncel stack'leri ve kalan ödülleri gir; her oyuncunun «ICM değeri» sütunu deal için temel tutardır. Pratikte masa genelde ortada üzerinde anlaşılan bir tutar bırakır — çoğu zaman birincilik ile ikincilik ödülü arasındaki fark — ve bunun için oynamaya devam eder; floor da saati durdurur ve bir şey ödenmeden önce kalan her oyuncunun onay verdiğinden emin olur.",
  },
  {
    q: "Deal'de hangi sayıyı kullanayım — chip chop mu, ICM mi?",
    a: "Stack'in kısaysa ICM sütununu kullan; chip leader'san chip chop senin lehinedir. Chip chop çip payına göre öder, ICM deal'i ise her oyuncunun her sırada bitirme ihtimaline göre — yukarıdaki örnek farkı gösteriyor (en kısa stack için $276'ya karşı $458). Her salonun «chip chop»tan ne kastettiği de değişir ve yaygın varyant aslında ICM'e yakın düşer — ayrıntısı yukarıdaki tablonun özetinde. Bu yüzden herhangi birini kabul etmeden önce ne kastedildiğini sor.",
  },
  {
    q: "Bubble'da neden daha çok fold etmeliyim?",
    a: "Çipte kârlı olan bir call, bubble'da beklenen ödülü düşürebilir. Tüm sonuçların gerçek olasılıklarıyla ağırlıklandırılmış değerini fold değeriyle karşılaştır; tablo tek başına bu karşılaştırmayı yapmaz. Risk primini çoğu zaman en çok orta stack'ler taşır; blindlerin neredeyse bitirdiği stack istisnadır. Açılışı ya da re-shove'u genişletmek kimin kimin stack'ini kapsadığına ve rakiplerin call range'ine bağlıdır, otomatik bir kural değildir.",
  },
  {
    // ★tr 고유 1문항 — 근거 = TDA 2024 원문 `docs/sources/tda-2024-rules-v1.txt` Rule 5(5-C 전자기기 · 5-D 도구·차트·타인 데이터).
    //   본문 표기는 상위 «Rule 5»(선례 zh-hant·es·pt·de·fr·id·ms와 같다). 합법성 축이 아니라 «대회 규칙» 축(legality-ban-scope).
    q: "Masada poker hesaplayıcı kullanabilir miyim?",
    a: "TDA kurallarını uygulayan turnuvalarda hayır. Poker Tournament Directors Association'ın 2024 kuralları (Rule 5), bahis uygulamalarının, tabloların ve diğer poker strateji araçlarının masada kullanılamayacağını ve oyuncunun başka kişi ya da kaynaklardan strateji verisi alamayacağını ya da kullanamayacağını belirtir; elinde canlı bir el varken elektronik cihaz ya da iletişim aracı da kullanamazsın — hepsi de salon kurallarına ve yerel düzenleyicinin kararlarına tabidir. Yani bu hesaplayıcı oyundan önce hazırlık, sonrasında tekrar hesap ve çalışma içindir: masada geçerli olan, kafandaki 4 ve 2 kuralı ve ezberlediğin yukarıdaki tablolardır.",
  },
];

export default CALCULATOR_FAQ_TR;
