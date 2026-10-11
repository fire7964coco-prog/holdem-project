import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tiebreak-rules",
  title: "So bài poker khi cùng hạng — cùng đôi, cùng sảnh thì ai thắng?",
  seoTitle: "Cùng một đôi, ai thắng? — So bài poker và luật phá thế hòa",
  desc: "Cùng đôi rồi vẫn mất pot? Poker so bài theo thứ tự cố định: hạng bài, lá tạo tay, rồi kicker. Ai thắng khi cùng đôi, cùng sảnh, và lá thứ 5 có tính không.",
  tldr: "Poker phá thế hòa theo thứ tự cố định: so hạng bài trước, rồi so các lá tạo nên tay bài, cuối cùng so kicker (lá phụ) từ cao xuống thấp. Cùng đôi thì kicker đầu cao hơn thắng; giống hệt 5 lá thì chia pot (split pot). Chất bài không bao giờ quyết định thắng thua.",
  category: "hand-rankings",
  date: "2026-10-10",
  updated: "2026-10-11",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "12 phút",
  emoji: "⚖️",
  image: "/images/holdem-tiebreak-hero.webp",
  imageAlt: "Showdown poker: A♠ K♦ gặp A♥ 9♣ với board A♦ Q♠ 7♥ 3♣ 2♦ — cùng đôi A, kicker quyết định người thắng",
  tags: ["so bài poker", "hòa bài poker", "thứ tự chất bài poker", "thứ tự chất trong poker", "thứ tự sảnh poker", "hai người cùng đôi trong poker", "hai người cùng sảnh poker", "poker tie breaker rules"],
  content: `
Bạn lật lên một đôi A. Đối thủ cũng vậy. Dealer (người chia bài) đếm các lá phụ trong một giây — rồi đẩy cả pot về phía *họ*. ==r:Cùng một đôi. Sao bạn lại thua?==

Tôi đã thấy đúng khoảnh khắc đó làm khựng nhiều ván bài hơn bất kỳ luật nào khác: ai đó nhổm nửa người dậy, dealer gõ nhẹ lên mặt nỉ, và cả bàn chờ một lời giải thích. Đây là lời giải thích ấy. Mọi thế hòa trong Texas Hold'em đều được phân định bằng một quy trình cố định nằm ngay dưới [thứ tự bài poker](/vi/blog/holdem-hand-rankings) một bậc — thứ tự bài cho bạn biết *tay bài nào* thắng; luật so bài cùng hạng cho bạn biết *người chơi nào* thắng khi cả hai tay bài cùng hạng.

Phần lớn việc do một lá bài làm: ==**kicker**== (lá phụ). Định nghĩa đầy đủ — tay bài nào có kicker và có bao nhiêu — nằm trong bài [kicker trong poker là gì](/vi/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp"). Bài này là *quy trình*: chính xác cách phân định khi hòa với cùng đôi, cùng hai đôi, cùng sám cô (bộ ba, three of a kind), cùng sảnh (straight) và cùng thùng (flush) — và lá thứ năm mà ai cũng quên.

---

### Tóm tắt luật so bài

:::stripe
3 | Bước phân định mọi thế hòa trong Hold'em
1 | Ô kicker trong tay bài hai đôi
0 | Lần thế hòa được phân định bằng chất bài
:::

---

## So bài poker khi hòa theo thứ tự nào? 3 bước cố định

**Thế hòa được phân định theo thứ tự cố định: so hạng tay bài trước, rồi so các lá tạo nên tay bài, rồi so kicker từ cao xuống thấp — và nếu cả năm lá vẫn trùng nhau, pot được chia.** Mọi showdown (lật bài) đều chạy đúng ba phép kiểm tra này:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Bước | So gì | Chi tiết |
|:---:|---|---|
| **1** | Hạng tay bài | Hạng cao hơn luôn thắng (thùng thắng sảnh, v.v.) |
| **2** | Các lá tạo nên tay bài | Cùng hạng? Đôi / bộ ba / lá cao nhất lớn hơn thắng |
| **3** | Kicker, cao nhất trước | Khác biệt đầu tiên quyết định pot |

</div>

Nếu bước 1 đã phân định, bạn không bao giờ đến bước 2. Nếu bước 3 hết lá để so, hai tay bài giống hệt nhau và ==g:pot được chia== — chip sau đó được chia thế nào (chip lẻ — odd chip, chia ba, side pot) là phần việc của [luật chia pot](/vi/blog/holdem-split-pot-rules). Bước 2 và 3 là nơi các cuộc tranh cãi nổ ra, nên đó là nơi ta sẽ đi tới.

---

## Hai người cùng đôi trong poker thì ai thắng?

**Kicker thứ nhất cao hơn thắng. Một đôi dùng ba kicker, so từng lá một từ trên xuống — khác biệt đầu tiên quyết định pot.**

Lấy tay bài trong ảnh phía trên:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Người chơi A:** A♠ K♦  ·  **Người chơi B:** A♥ 9♣
**Bài chung (board):** A♦ Q♠ 7♥ 3♣ 2♦

| Người chơi | 5 lá mạnh nhất | Kicker | Kết quả |
|--------|-----------|---------|--------|
| A | A♠ A♦ ==g:K♦== Q♠ 7♥ | ==g:K==-Q-7 | **Thắng** |
| B | A♥ A♦ ==r:Q♠== 9♣ 7♥ | ==r:Q==-9-7 | Thua |

</div>

Cùng đôi A, nên các kicker so trực tiếp theo thứ tự: ==g:K thắng Q — xong trận.== Lá 9 của B vẫn *nằm trong* tay bài với vai trò kicker thứ hai, nhưng phép so sánh không bao giờ đi xa đến đó.

Hãy để ý kicker cao nhất của B là lá Q **trên board**, không phải lá 9 họ đang cầm. ==r:Kicker chỉ được tính khi nó thực sự lọt vào 5 lá mạnh nhất của bạn== — một lá board cao hơn sẽ đẩy lá bài tẩy của bạn xuống dưới. Đó cũng là lý do lá thứ hai trong bài khởi đầu của bạn quan trọng không kém lá A: A-K và A-9 ở đây đều là "một đôi A", và chỉ một trong hai thắng ([bài khởi đầu nên chơi theo vị trí](/vi/blog/holdem-starting-hands-chart)).

---

## Luật so bài cho từng tay bài

**Mỗi hạng tay bài có thứ tự so riêng — có hạng đi tới kicker, có hạng được phân định hoàn toàn bằng các lá tạo nên nó.** Huy hiệu cho biết kicker có vào cuộc hay không:

:::tiebreak
Thùng Phá Sảnh Hoàng Gia|Chỉ hòa khi chính board là thùng phá sảnh hoàng gia — mọi người chia pot|-Không kicker
Thùng Phá Sảnh|Chỉ so lá cao nhất|-Không kicker
Tứ Quý|Giá trị tứ quý → lá thứ 5|+Dùng kicker
Cù Lũ|Giá trị bộ ba → giá trị đôi|-Không kicker
Thùng|So cả 5 lá, cao xuống thấp|-Không kicker
Sảnh|Chỉ so lá cao nhất|-Không kicker
Sám Cô|Giá trị bộ ba → 2 kicker|+Dùng kicker
Hai Đôi|Đôi cao → đôi thấp → kicker|+Dùng kicker
Một Đôi|Giá trị đôi → 3 kicker|+Dùng kicker
Mậu Thầu|So cả 5 lá, cao xuống thấp|+Dùng kicker
:::

Ba hàng gây tranh cãi nhiều nhất ở bàn:

- **Sám cô dùng hai kicker, lá cao trước.** Trên board A♣ A♥ 7♦ 5♣ 2♠, người cầm A♠ J♠ có A-A-A-==g:J==-7 và thắng A-A-A-==r:10==-7 của A♦ 10♦ — J cao hơn 10, và lá 7 dùng chung thậm chí không bao giờ được xét tới.
- **Cù lũ (full house) không có kicker.** So bộ ba trước, rồi đến đôi: K-K-K-A-A thắng K-K-K-Q-Q ở phần đôi.
- **Thùng so cả năm lá — ==r:không bao giờ so chất==.** Thùng có A cao nhất thắng thùng có K cao nhất; trùng cả năm giá trị thì chia pot. Toàn bộ cặp đấu (và những board đánh lừa người ta) nằm trong bài [thùng và sảnh cái nào lớn hơn](/vi/blog/holdem-flush-vs-straight).

---

## Cùng hai đôi thì so thế nào?

**So đôi cao trước, rồi đôi thấp, rồi lá kicker duy nhất — đúng thứ tự đó.** Hai đôi chỉ mang đúng một kicker, nên sau khi so xong hai đôi chỉ còn một lá để tranh cãi.

Trên board **K♦ 9♣ 9♠ 5♦ 2♥**, K♠ Q♦ tạo K♠ K♦ 9♣ 9♠ ==g:Q♦== và K♥ J♥ tạo K♥ K♦ 9♣ 9♠ ==r:J♥==. Cùng đôi K và đôi 9, nên lá kicker đơn độc phân định: ==g:Q thắng J.==

Rồi đến cái bẫy quyết định tiền thật — ==r:**bị counterfeit**== (đôi của bạn bị board làm mất giá trị):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Bạn:** 5♠ 4♠  ·  **Đối thủ:** A♣ K♦
**Flop:** 5♦ 4♥ K♣ — hai đôi của bạn (đôi 5 và đôi 4) dẫn trước đôi K của họ
**Turn 9♠, river 9♥** — board cuối cùng 5♦ 4♥ K♣ 9♠ 9♥

| Người chơi | 5 lá mạnh nhất | Tay bài |
|--------|-----------|------|
| Bạn | ==r:9♠ 9♥== 5♠ 5♦ K♣ | Đôi 9 và đôi 5 — đôi 4 của bạn biến mất |
| Đối thủ | K♦ K♣ 9♠ 9♥ A♣ | **Đôi K và đôi 9 — thắng** |

</div>

Board ra đôi 9 đã trao cho *cả hai* người chơi một đôi thứ hai tốt hơn — đôi 4 của bạn ==r:bị counterfeit==, và phép so duy nhất còn lại là đôi cao: K thắng 9. Tay bài dẫn trước ở flop thua pot mà cả hai người chơi đều không cải thiện lá bài của chính mình.

---

## Thứ tự sảnh poker: sảnh nào lớn hơn, sảnh A-2-3-4-5 đứng ở đâu?

**Sảnh được xếp hạng thuần túy theo lá cao nhất — sảnh Broadway (10-J-Q-K-A) đứng cao nhất, còn sảnh thấp nhất A-2-3-4-5 (the wheel), với lá A chơi thấp, đứng cuối cùng trong trò chơi.**

Trên board 4♦ 3♣ 2♠ K♦ Q♥, người cầm A♠ 5♠ tạo wheel: 5-4-3-2-A. Người cầm 6♥ 5♥ tạo 6-5-4-3-2. ==r:Lá A chơi *thấp* trong wheel==, nên A-2-3-4-5 nằm ở đáy thang sảnh — ==g:sảnh có 6 cao nhất thắng.== Hai sảnh có cùng lá cao nhất là giống hệt nhau, và tay bài giống hệt thì chia pot.

Ở đầu kia của thang, ==**sảnh cao nhất trong poker là sảnh Broadway — A-K-Q-J-10**==. Không sảnh nào thắng nó (dù thùng hay bất cứ hạng nào cao hơn vẫn thắng), và wheel nằm ở đáy, nên mọi sảnh trong trò chơi đều xếp đâu đó giữa hai mốc ấy chỉ bằng lá cao nhất của nó.

Hai điều wheel *không* làm được: lá A không thể nằm giữa chuỗi (Q-K-A-2-3 không là gì cả), và nó không thể vừa cao vừa thấp cùng lúc. Thùng theo luật song song — so cả năm lá từ trên xuống, chất bài không liên quan — chi tiết ở bài [thùng và sảnh](/vi/blog/holdem-flush-vs-straight).

---

## Lá thứ 5 có tính trong poker không?

**Có — mỗi khi bốn lá đầu của hai tay bài giống hệt nhau, lá thứ năm chính là cả pot.**

Board **A♥ K♣ Q♦ 4♣ 2♥**, và đó là A♠ 8♠ đấu A♦ 7♦. Cả hai có đôi A. Kicker thứ nhất: lá K trên board — hòa. Kicker thứ hai: lá Q trên board — hòa. Kicker thứ ba: ==g:8 thắng 7.== Chính lá thứ năm quyết định người thắng pot.

Cách so này cũng áp dụng khi tứ quý nằm trên board: mọi người dùng chung bốn lá, nên lá thứ năm là toàn bộ showdown. Và cách này cũng dùng cho thế hòa của mậu thầu và thùng, nơi từng lá cho đến lá cuối cùng đều được so. Một khi các lá phía trên đã hòa nhau, lá thứ năm chỉ thôi quan trọng khi board cao hơn nó — mảnh ghép cuối cùng của bài toán.

---

## Trong poker chất nào to nhất — có thứ tự chất bài không?

**Không — không có chất nào to nhất khi quyết định ai thắng. Trong việc thắng pot, chất bài làm đúng một việc trong Texas Hold'em: năm lá cùng chất tạo thành thùng. Ngoài ra chúng không mang thứ hạng nào, nên hai tay bài trùng nhau từng lá luôn chia pot, và không lá nào vượt lá khác chỉ vì chất của nó.**

Câu hỏi này cứ được hỏi mãi vì thứ tự chất bài thật sự tồn tại trong poker — chỉ là không bao giờ dùng để xếp hạng tay bài trong trò chơi này. Stud và razz dùng nó để quyết định ai phải đặt cược mở đầu (bring-in) và ai nhận chip không thể chia. Hold'em không dùng nó cho việc nào trong hai việc đó.

Bằng chứng gọn nhất là đúng một con chip *không thể* chia đôi. Luật giải đấu WSOP 2026 ghi ==g:*«In button games with 2 or more high or low hands, the odd chip goes to the first seat left of the button»*== (điều 73) — nghĩa là ở các thể thức có nút dealer, khi có từ hai tay bài thắng trở lên, chip lẻ thuộc về ghế đầu tiên bên trái nút dealer. Ngay cả khi một pot không thể chia đều bằng chip, luật vẫn tìm đến **ghế ngồi**, không phải chất bài — và cách chia theo chất ở nửa sau của chính điều luật ấy chỉ được viết cho stud và razz.

Thêm một điều đáng biết: trong Hold'em hai thùng luôn *cùng* một chất, vì cả năm lá bài chung đều dùng chung và một board không thể vừa có ba lá cơ vừa có ba lá bích. Nên "bích của tôi lớn hơn cơ của bạn" không phải luật mà bạn thua — đó là một tay bài không bao giờ có thể xuất hiện trong Hold'em.

---

## Khi nào kicker không được tính và phải chia pot?

![Đồ họa: board A-K-Q-J-10 là 5 lá mạnh nhất cho mọi người, nên tay 9-7 không thể thắng nó và pot được chia](/images/holdem-tiebreak-best5.webp "5 lá mạnh nhất trong 7 lá: khi board đã là tay bài mạnh nhất, bài tẩy của bạn rơi ra ngoài")

**Nếu bài tẩy của bạn không phá được 5 lá mạnh nhất của chính board, chúng không được tính — và khi điều đó đúng với tất cả mọi người, pot được chia.**

Lấy board phía trên: A♠ K♥ Q♣ J♦ 10♠, sảnh Broadway đã hoàn chỉnh. 9♥ 7♠ của bạn *có* tạo sảnh — K-Q-J-10-9 — nhưng nó **thấp hơn** sảnh có A cao nhất đang nằm trên mặt nỉ, nên 5 lá mạnh nhất của bạn chính là board. Của mọi người khác cũng vậy — ai cũng chơi theo bài chung (playing the board).

Phiên bản tinh tế hơn là khi tay bài của bạn được tính nhưng kicker thì không. Board A♥ K♣ Q♦ J♠ 9♥: A♠ 3♠ đấu A♦ 2♦. Cả hai ghép đôi A, và cả ba ô kicker đều được lấp từ board — A-A-K-Q-J cho mỗi người. Lá 3 và lá 2 là của thừa; 5 lá mạnh nhất giống hệt nhau, ==g:chop.==

![Đồ họa: trên board A-K-Q-J-9, A-3 và A-2 đều chơi A-A-K-Q-J, nên hai tay bài giống hệt nhau chia pot](/images/holdem-tiebreak-split.webp "Khi 5 lá mạnh nhất trùng nhau từng lá, pot được chia — chất bài không bao giờ phân định")

Nhìn ra những board như vậy trước khi bet ở river là một kỹ năng riêng — đó là [đọc bài chung](/vi/blog/holdem-reading-the-board). Còn chuyện gì xảy ra với chip khi hai tay bài hòa — chia đều, chip lẻ, chia ba, side pot khi all-in — đều nằm trong [hướng dẫn luật chia pot](/vi/blog/holdem-split-pot-rules "thumb:/images/holdem-split-pot-hero.webp").

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-kicker | Kicker trong poker là gì | /images/holdem-kicker-hero.webp
/vi/blog/holdem-split-pot-rules | Khi nào chia pot trong poker? | /images/holdem-split-pot-hero.webp
:::

## Câu hỏi thường gặp

**Q. So bài poker khi hòa như thế nào?**

A. Ba phép kiểm tra theo thứ tự — hạng tay bài, rồi các lá tạo nên tay bài, rồi kicker từ trên xuống — và khác biệt đầu tiên kết thúc mọi chuyện. Quan trọng không kém là những thứ không bao giờ vào phép so: chất bài, ai bet cuối, ai ngồi gần nút dealer hơn, và mỗi người đã bỏ bao nhiêu chip vào pot. Nếu năm lá trùng nhau từng giá trị, dealer chia pot bất kể chuyện gì đã xảy ra trong các vòng cược.

**Q. Hai người cùng đôi thì ai thắng?**

A. Kicker cao hơn — nhưng hãy kiểm tra trước xem lá nào của bạn thực sự lọt vào 5 lá mạnh nhất. Trên A-Q-7-3-2 với một đôi A, người cầm A-9 chơi A-A-Q-9-7: lá Q trên board nhảy lên trước lá 9 của họ, nên lá 9 chỉ là kicker *thứ hai*. Gặp A-K thì pot đã được định đoạt ngay ở ô đầu tiên, và lá 9 đó không bao giờ được so. Có ba ô kicker; phần lớn pot kết thúc ở ô đầu.

**Q. Cả hai cùng có hai đôi thì ai thắng?**

A. Đôi cao trước, rồi đôi thấp, rồi lá kicker duy nhất — nên đôi A và đôi 3 thắng đôi K và đôi Q dù đôi thứ hai nhỏ hơn nhiều. Trường hợp bẫy người ta là board có hai đôi như K-K-9-9-5 mà không có ba lá cùng chất, nên không ai tạo được thùng: trừ khi ai đó cầm một lá K, một lá 9, đôi 5 trên tay, hoặc một đôi trên tay lớn hơn 9, mọi người đều có cùng hai đôi, nên mọi thứ dồn về một kicker duy nhất và lá bài tẩy cao nhất ở bàn lấy pot — và nếu không có lá bài tẩy nào vượt được lá 5 trên board, tất cả chơi theo board và pot được chop. Hai đôi mang đúng một kicker, không bao giờ là hai.

**Q. Hai người cùng sám cô thì ai thắng?**

A. Sám cô mang hai kicker, so lá cao nhất trước — nên nếu cả hai tạo cùng bộ ba, lá phụ cao hơn thắng. Với bộ ba 9, 9-9-9-A-K thắng 9-9-9-A-Q vì kicker thứ hai (K) cao hơn Q. Trùng bộ ba và trùng cả hai kicker nghĩa là chia pot. (Set từ đôi trên tay gần như không bao giờ hòa, vì chỉ một người có thể cầm đúng đôi đó.)

**Q. Lá thứ 5 có quan trọng không?**

A. Có — và đó là cách phổ biến nhất khiến một người mất pot mà họ chắc chắn đã thắng. Những tình huống kinh điển đặt cả pot lên lá cuối: kicker thứ ba của một đôi, kicker duy nhất của hai đôi, lá thấp nhất của thùng, và lá phụ bên cạnh tứ quý nằm trên board. Khi các lá phía trên nó đã hòa nhau, nó chỉ thôi quan trọng khi các lá của chính board cao hơn lá phụ bạn cầm — đôi khi vì cả board được tính và bài tẩy của bạn rơi ra hoàn toàn, đôi khi vì một lá bài tẩy được tính còn lá kia không bao giờ: A♠ 3♠ đấu A♦ 2♦ trên A♥ K♣ Q♦ J♠ 9♥ là chop, cả hai đều chơi A-A-K-Q-J.

**Q. Lá A có tính là 1 trong sảnh không, và sảnh đó lớn cỡ nào?**

A. Trong Hold'em, có, nhưng chỉ trong sảnh A-2-3-4-5 (wheel), nơi nó chơi như lá thấp nhất — điều đó khiến wheel là sảnh thấp nhất trong trò chơi. Lá A không thể nằm giữa chuỗi: Q-K-A-2-3 không phải sảnh.

**Q. Sảnh nào lớn hơn sảnh nào?**

A. Sảnh có lá cao nhất cao hơn thì lớn hơn, và trong thực tế chuyện này xảy ra khi phần lớn sảnh đã nằm trên board. Lấy board 5♦ 6♣ 7♠ 8♥ 2♦: người cầm 9♣ 4♠ tạo 9-8-7-6-5, trong khi người cầm 4♥ 3♦ tạo 8-7-6-5-4 từ cùng bốn lá đó. Cả hai đều "có sảnh"; chỉ lá cao nhất được tính, nên lá 9 lấy pot. Lá cao nhất bằng nhau nghĩa là cùng một sảnh và chop.

**Q. Hai người cùng sảnh poker thì ai thắng?**

A. Sảnh có lá cao nhất cao hơn thắng — Q-J-10-9-8 thắng J-10-9-8-7, vì sảnh chỉ được xếp hạng theo lá cao nhất và không có kicker. Nếu cả hai sảnh có cùng lá cao nhất, chúng giống hệt nhau, nên pot được chia. Điều này xảy ra nhiều nhất khi sảnh nằm phần lớn trên board và cả hai người lấp cùng một đầu.

**Q. Hai người cùng có thùng thì ai thắng?**

A. So hai thùng từng lá từ trên xuống: thùng có A cao nhất thắng thùng có K cao nhất, và nếu lá cao nhất trùng nhau thì chuyển sang lá tiếp theo, cứ thế qua cả năm lá. Chất bài không bao giờ phân định, nên nếu cả năm giá trị trùng nhau thì pot được chia. (Trong Hold'em hai thùng luôn cùng một chất, vì mọi người chơi dùng chung board.)

**Q. Hai người cùng cù lũ thì so thế nào?**

A. So bộ ba trước — bộ ba cao hơn thắng, nên K-K-K-2-2 thắng Q-Q-Q-A-A dù đôi A trông lớn hơn. Chỉ khi bộ ba giống hệt nhau mới so đến đôi. Cù lũ không có kicker, nên trùng cả bộ ba lẫn đôi nghĩa là chia pot.

**Q. Hai người cùng thùng phá sảnh thì sao?**

A. Thùng phá sảnh (straight flush) cao hơn thắng, quyết định bằng lá cao nhất — thùng phá sảnh có Q cao nhất thắng thùng phá sảnh có 9 cao nhất. Thùng phá sảnh hoàng gia (royal flush) chỉ là thùng phá sảnh có A cao nhất, nên nó thắng mọi thùng phá sảnh khác. Lá cao nhất trùng nhau nghĩa là tay bài giống hệt và chia pot.

**Q. Chất bài có bao giờ phân thắng thua trong Texas Hold'em không?**

A. Không — chất bài không bao giờ quyết định pot. Nơi chúng xuất hiện ở bàn Hold'em là các lần rút bài để định ghế ngồi. Nổi tiếng nhất là rút bài chọn nút dealer: trong cash game, và theo phần lớn luật riêng của các phòng poker, mỗi người rút một lá để quyết định nút dealer bắt đầu ở đâu, và nếu hai lá rút trùng giá trị thì thứ tự chất bài phân định. (Giải WSOP bỏ qua lần rút mở đầu: ==điều 85 Luật giải== đặt nút dealer ở stack đầu tiên bên phải dealer và chỉ rút bài chọn nút dealer khi còn ba, hai và một bàn.) Giám đốc giải cũng xếp chỗ cho người chơi từ bàn bị giải tán bằng cách chia mỗi người một lá, ví dụ của TDA trao ghế đầu tiên cho ==lá bài cao nhất tính theo chất==. Dù cách nào, đó là chọn *ghế*, không bao giờ là chọn tay bài. Trong các luật về tay bài của bộ luật giải WSOP, thứ tự chất duy nhất thuộc về stud và razz. Nếu hai bộ 5 lá mạnh nhất trùng nhau từng giá trị, pot được chia bất kể chất bài.

**Q. Hai tay bài giống hệt nhau đến lá cuối thì sao?**

A. Pot được chia đều — một cú "chop". Cách chia chip trên thực tế, ai nhận chip lẻ, và side pot được xử lý ra sao nằm trong bài [luật chia pot](/vi/blog/holdem-split-pot-rules).

**Q. Hòa trong poker có xảy ra không?**

A. Có, nhưng không thường xuyên. Hòa thật sự chỉ xảy ra khi 5 lá mạnh nhất của hai người trở lên trùng nhau chính xác từng giá trị — thường nhất là khi chính board đã là tay bài mạnh nhất (chơi theo board), hoặc một sảnh hay thùng dùng chung mà không bài tẩy nào cải thiện được. Khi đó pot được chia đều. Kicker tồn tại chính là để phá phần lớn những thế hòa tiềm tàng trước khi chúng kịp thành chia pot.

---

## Những điều cần nhớ

1. Mọi thế hòa chạy cùng một quy trình: ==**hạng tay bài → các lá tạo tay → kicker → chia pot**== — không ngoại lệ, không chất bài.
2. Kicker chỉ được tính khi nó ==g:lọt vào 5 lá mạnh nhất của bạn== — lá board có thể thay thế nó, và một board hai đôi có thể counterfeit toàn bộ hai đôi của bạn.
3. Sảnh xếp hạng theo lá cao nhất (wheel là thấp nhất), thùng so cả năm lá — và khi không gì tách được hai tay bài, pot được chop.

Khóa chặt thứ tự đầy đủ với [thứ tự bài poker hoàn chỉnh](/vi/blog/holdem-hand-rankings), tìm hiểu cách dùng lá phụ trong [kicker là gì](/vi/blog/holdem-kicker), và xem chính xác pot hòa được chia ra sao trong [hướng dẫn chia pot](/vi/blog/holdem-split-pot-rules).

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-kicker" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Kicker</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Kicker trong poker là gì</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Bản thân lá phụ — tay bài nào có kicker và có bao nhiêu</div>
  </a>
  <a href="/vi/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thứ hạng tay bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thứ tự bài poker Texas Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Cả 10 tay bài kèm xác suất, ví dụ và bài toán đọc board</div>
  </a>
  <a href="/vi/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">So sánh tay bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thùng và sảnh cái nào lớn hơn?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Toán học, các board thực tế và trường hợp hòa của cặp dễ nhầm số 1</div>
  </a>
  <a href="/vi/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chia pot</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Khi nào chia pot trong poker?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">5 tình huống chop và 3 điều người chơi tưởng nhầm là thắng</div>
  </a>
</div>
`.trim(),
};
