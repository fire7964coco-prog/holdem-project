import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-split-pot-rules",
  title: "Khi nào chia pot trong poker? Luật split pot và chop pot Hold'em",
  seoTitle: "Thắng ván mà chỉ nhận nửa pot? — Chia pot, split pot poker",
  desc: "Poker có thể hòa không? Có — chia pot khi 5 lá giống hệt nhau, khi bài chung chơi cho cả bàn, luật chip lẻ và chop khi có pot phụ. Kèm ví dụ split pot.",
  tldr: "Có — poker có thể hòa. Pot được chia (chia pot, split pot hay chop) khi hai người trở lên lật bài (showdown) ra cùng một tay bài 5 lá mạnh nhất giống hệt nhau. Chất bài không bao giờ phá thế hòa, và chip lẻ (odd chip) còn dư thuộc về người hòa đầu tiên bên trái nút dealer (BTN).",
  category: "hand-rankings",
  date: "2026-10-10",
  updated: "2026-10-11",
  masterUpdated: "2026-10-05",
  keepImagesInBody: true,
  readTime: "12 phút",
  emoji: "🃏",
  image: "/images/holdem-split-pot-hero.webp",
  imageAlt: "Chia pot poker — board 8♠ 8♥ 8♦ A♣ K♠ với J♠ 10♥ gặp 5♣ 2♦, chip được chia bởi một vạch vàng vì không tay nào thắng được board",
  tags: ["split pot", "split pot poker", "chia pot", "chia pot poker", "chop pot", "poker split pot examples", "cách chia pot poker"],
  content: `
Hồi mới chơi poker, có ván tôi chủ động cược ở mọi vòng — raise preflop, bet flop và turn, bị call ở river. Tôi lật J♠ 10♥. Đối thủ lật **5♣ 2♦**. "Tôi thắng chứ?" Dealer (người chia bài) không nói gì, chỉ tay vào bài chung (board): ==**8♠ 8♥ 8♦ A♣ K♠**==. ==r:Không lá bài tẩy nào của hai chúng tôi thắng nổi bộ ba 8 kèm kicker A-K==, nên dealer lặng lẽ cắt đôi pot.

Nhận nửa pot mà mình đinh ninh đã thắng là cảm giác rất hẫng. Nhưng ==g:chia pot đi theo những quy tắc rõ ràng== — và chúng trả lời câu hỏi người mới hay hỏi nhất: **poker có thể hòa không?** Có. Dưới đây là mọi cách nó xảy ra.

---

> **Trả lời nhanh**
> Pot được **chia** (còn gọi là **chop**) khi hai người trở lên có **tay bài 5 lá mạnh nhất giống hệt nhau** lúc showdown (lật bài). Chip được chia đều. Chất bài không bao giờ phá thế hòa, và chip lẻ còn dư thuộc về người hòa đầu tiên bên trái nút dealer.

---

### Những con số cốt lõi

:::stripe
5 | tình huống khiến pot Hold'em bị chia
0 | lần thế hòa được phân định bằng chất bài trong Texas Hold'em
1 | chip lẻ — thuộc về ghế hòa đầu tiên bên trái nút dealer
:::

---

## Split pot trong poker là gì — chia pot và chop có giống nhau không?

**Chia pot (split pot)** xảy ra khi hai người trở lên có tay bài 5 lá mạnh nhất giống hệt nhau lúc showdown, nên dealer chia đều chip cho họ. **Chop** — hay "chopped pot" — là đúng chuyện đó trong tiếng lóng ở bàn ("chop nhé"). Sách luật viết split, người chơi nói chop. Người ta tìm cả hai từ, nên bạn sẽ thấy chúng được dùng thay nhau.

Nền tảng: tay bài của bạn luôn là ==**5 lá mạnh nhất trong 7 lá**== — hai lá bài tẩy cộng năm lá trên board. Mỗi tay bài 5 lá xếp hạng ra sao đã có trong [thứ tự bài poker đầy đủ](/vi/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"). ==r:Khi 5 lá mạnh nhất của hai người bằng nhau về giá trị, không ai "thắng hơn" ai== — pot được chia, chấm hết.

---

## Khi nào chia pot trong poker? 5 ví dụ split pot

Pot bị chia khi hai người trở lên có tay bài 5 lá mạnh nhất giống hệt nhau lúc showdown — hòa là một kết quả bình thường, hợp lệ trong Texas Hold'em, và nó xảy ra thường xuyên hơn người mới tưởng. Vì mọi người dùng chung năm lá bài chung, hai người rất hay cùng ra một bộ 5 lá như nhau. Đây là năm cách nó xảy ra.

### 1. 5 lá mạnh nhất giống hệt nhau
Hai người tạo ra đúng cùng một tay bài 5 lá — cùng giá trị, dù bài tẩy của họ khác chất.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| | Người chơi A | Người chơi B |
|---|---|---|
| **Bài tẩy** | K♠ 7♣ | K♥ 2♦ |
| **Board** | K♦ K♣ Q♥ Q♦ J♠ | (giống nhau) |
| **5 lá mạnh nhất** | ==g:K-K-K-Q-Q== | ==g:K-K-K-Q-Q → chia pot== |

</div>

Cả hai đều có cù lũ KKK-QQ từ board cộng một lá K. ==r:Chất của hai lá K đó không có ý nghĩa gì.==

### 2. Bài chung chơi cho cả bàn
Năm lá bài chung đã là tay bài mạnh nhất cho mọi người còn lại — chính là pot 8-8-8-A-K trong câu chuyện của tôi. Tình huống này đủ phổ biến để có hẳn một mục riêng bên dưới.

### 3. Cùng một sảnh
Hai sảnh có cùng lá cao nhất thì hòa, bất kể chất. Trên board 7♣ 6♦ 5♥ K♠ 2♣, 9♠ 8♠ của A và 9♥ 8♦ của B đều tạo thành 9-8-7-6-5 — cùng độ cao, nên **chia pot**.

### 4. Cùng một thùng
Không có xếp hạng chất, nên hai thùng có cùng năm giá trị thì hòa. Trên thực tế, chuyện này gần như luôn có nghĩa là **chính board** đã là một thùng năm lá. Trên K♠ J♠ 8♠ 4♠ 2♠, nếu A cầm A♥ Q♦ và B cầm 10♥ 9♦, không ai có lá bích — cả hai chơi thùng K-J-8-4-2 của board và **chop**.

==r:Nhưng hãy kiểm tra trước khi mặc định:== bất kỳ lá bích nào trên tay cao hơn lá bích thấp nhất của board đều cải thiện thùng. Ở đây ngay cả lá 3♠ khiêm tốn cũng tạo thành K-J-8-4-3 và ==g:thắng trọn pot== — còn A♠ thì thành thùng nuts (nut flush — thùng mạnh nhất có thể có trên board đó).

### 5. Giống nhau đến kicker cuối cùng
Một đôi và hai đôi thường được phân định bằng kicker (lá phụ) — nhưng nếu kicker cũng trùng nhau thì chia pot. Board A♦ Q♠ 9♣ 6♥ 2♠ với A♠ K♦ gặp A♥ K♣ cho cả hai ==g:A-A-K-Q-9== → **chia pot**. Khi kicker *khác nhau*, kicker cao hơn thắng trọn — cách so sánh đó diễn ra chính xác ra sao, từng tay bài một, nằm trong [luật so bài cùng hạng và kicker](/vi/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp").

---

## Hai người cùng thắng một pot được không? Khi bài chung (board) chơi cho cả bàn

Được — và thậm chí không cần đến hai tay bài khủng. Khi năm lá bài chung đã là 5 lá mạnh nhất có thể cho mọi người còn trong ván, ==**board chơi cho cả bàn**== và mọi người còn lại chia nhau pot, dù đó là hai người hay năm người.

Đó chính là ván 8-8-8-A-K của tôi: J♠ 10♥ của tôi và 5♣ 2♦ của đối thủ đều chơi theo bài chung (playing the board) — bộ ba 8 kèm kicker A-K của board — hai tay 5 lá giống hệt, chop ngay khi cả hai bài được lật ra. Trường hợp cực đoan là board kiểu A♠ K♠ Q♠ J♠ 10♠ (thùng phá sảnh hoàng gia): không lá bài tẩy nào cải thiện được nó, nên ==g:mọi người còn lại đều chop==.

> **Phép thử:** 5 lá mạnh nhất *của bạn* — dùng ít nhất một lá bài tẩy — có thắng được năm lá của chính board không? Nếu có, bạn chơi tay bài của mình. Nếu không, bạn đang chơi theo board — và nhiều khả năng sẽ chia pot, trừ khi một đối thủ cải thiện được board. Cách quét board đầy đủ theo hướng này nằm trong [cách đọc bài chung và tìm 5 lá mạnh nhất](/vi/blog/holdem-reading-the-board).

**Và phần quan trọng nhất ở bàn: trong một showdown mà đối thủ vẫn còn trong ván, tay bài của bạn chỉ thắng nếu bạn lật ngửa nó lên.** Một tay bài đã muck (úp bài bỏ) thông thường là bài chết, kể cả khi nó lẽ ra được chop (chỉ tay bài vẫn còn nhận diện rõ ràng mới có thể được lấy lại, và chỉ theo quyết định của floor — người quản lý sàn; Luật giải WSOP, điều 109) — khi chơi theo board, bạn vẫn phải lật ngửa bài tẩy của mình, nếu không bạn mất phần pot của mình (Luật WSOP cho cash game live, điều 172; luật giải đấu WSOP nhắc lại ở điều 75). Ai lật trước và trình tự diễn ra thế nào nằm trong [luật showdown](/vi/blog/holdem-showdown-rules).

:::tip[Nếu board chơi cho cả bàn và có người bet ở river, **fold theo quán tính là sai lầm**. Khi không gì thắng nổi board, chop là chắc chắn, và call vẫn mang về phần của bạn trong tất cả những gì đã nằm sẵn trong pot (một nửa nếu heads-up) — fold là tặng không phần chia đó. Khi board *có thể* bị thắng, hãy tính tần suất: heads-up, trước một cú bet bằng pot, bạn cần đối thủ cũng chỉ đang chơi theo board khoảng 2 lần trong 3; trước cú bet nửa pot, khoảng một nửa số lần (còn nhiều người trong ván hơn thì phần chop của bạn nhỏ lại và ngưỡng càng cao). Đó là ngưỡng cao để call — và ngưỡng thấp để fold: trước cú bet bằng pot, fold là đúng ngay khi họ có bài thật nhiều hơn **một lần trong ba**, và ở river mà board vẫn có thể bị thắng, đó là trường hợp thường gặp.]:::

---

## 3 điều không bao giờ phá thế hòa trong poker

![Board K♦ K♣ Q♥ Q♦ J♠ với K♠ 7♣ bên trái và K♥ 2♦ bên phải, dấu bằng màu vàng ở giữa — cả hai cùng có cù lũ K-K-K-Q-Q, và chất bài không bao giờ quyết định người thắng trong Texas Hold'em](/images/holdem-split-pot-suit-equals.webp "Cùng giá trị thì luôn chia pot — Texas Hold'em không xếp hạng chất bài")

Đây là những ngộ nhận đứng sau phần lớn các cuộc cãi vã "khoan, sao lại chia?!".

### ❌ «Chất của tôi cao hơn nên tôi thắng»
==r:Thùng bích **không** thắng thùng cơ.== Texas Hold'em không xếp hạng chất — ==cùng giá trị thì chia pot, chấm hết==. (Người đến từ các trò *có* xếp hạng chất rất hay vấp chỗ này.)

### ❌ «Bài tẩy của tôi cao hơn nên tôi thắng»
Board 9♠ 8♦ 7♣ 6♥ 5♠ — một sảnh đã thành hình. Bạn cầm A♠ K♦; đối thủ cầm 2♣ 3♥. ==r:**Chia pot.**== Cả hai đều chơi sảnh 9-8-7-6-5 của board, vì ==r:những lá bài tẩy to của bạn không hề lọt vào 5 lá mạnh nhất==. Một lá bài tẩy cao chỉ có ý nghĩa khi nó thực sự được tính, như một phần của tay bài hoặc làm kicker — [kicker là gì và khi nào được tính](/vi/blog/holdem-kicker) vạch ranh giới đó rất rõ.

### ❌ «Tôi dùng cả 2 lá, họ chỉ dùng 1»
==r:Bạn dùng bao nhiêu lá bài tẩy không liên quan.== Thứ duy nhất được tính là 5 lá mạnh nhất trong 7 lá. ==g:Nếu cả hai cùng đi đến một tay 5 lá mạnh nhất giống nhau, đó là chop, bất kể đi đến bằng cách nào.==

---

## Chip lẻ thuộc về ai? Luật chip lẻ (odd chip)

Đôi khi pot không chia đều được — pot 101 chip giữa hai người là 50 mỗi người và dư một chip, mà không có nửa chip. Trước khi chip cuối đó được đẩy cho ai, dealer đổi nó ra mệnh giá nhỏ nhất đang dùng trong ván (Luật TDA 2024, điều 20): nếu chip 5 là nhỏ nhất trên bàn, một chip 25 lẻ loi thành năm chip 5, lại chia tiếp, và chỉ chip nào vẫn không chia được mới là "chip lẻ". Rồi đến quy tắc chuẩn:

> ==Chip lẻ còn dư thuộc về người hòa đầu tiên **bên trái nút dealer**== (người cùng thắng pot ngồi gần nút dealer nhất theo chiều kim đồng hồ).

Trong một pot chia ba có hai chip lẻ, hai người ngồi gần nút dealer nhất theo chiều kim đồng hồ mỗi người nhận một. ==r:Luật nhà có thể khác== — một vài phòng poker trao chip lẻ theo lá cao hay theo chất — nên khi pot đáng kể, hãy hỏi floor xem phòng poker áp dụng quy tắc nào. ==g:Chơi online, phần mềm tự gán theo vị trí.==

---

## Pot phụ (side pot) có chia không? Hòa khi có người all-in

Khi một hoặc nhiều người chơi all-in (tất tay) với số chip khác nhau và những người khác tiếp tục bet, chip hình thành một ==**main pot (pot chính)**== (ai cũng đủ điều kiện) cộng một hoặc nhiều ==**side pot (pot phụ)**== (chỉ những người đã bỏ vào nhiều hơn mức mà một stack all-in ngắn hơn có thể theo kịp). Mỗi pot được trao — hoặc chop — ==**riêng rẽ**==, dựa trên tay bài mạnh nhất trong số những người đủ điều kiện với pot đó.

Một ví dụ cụ thể: A all-in 100; B và C mỗi người bỏ vào 300. Vậy là **pot chính 300** (100 × 3) và **pot phụ 400** (200 + 200, chỉ B và C). Board ra A♦ J♥ 7♠ 4♣ 2♥:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| Người chơi | Bài tẩy | 5 lá mạnh nhất | Kết quả |
|---|---|---|---|
| A (all-in) | A♠ Q♦ | ==g:A-A-Q-J-7== | chop pot chính → 150 |
| B | A♣ Q♥ | ==g:A-A-Q-J-7== | chop pot chính (150) + thắng pot phụ (400) |
| C | K♦ K♠ | K-K-A-J-7 | thua cả hai → 0 |

</div>

A và B hòa với đôi A và kicker giống hệt, nên họ ==g:chia pot chính==; pot phụ chỉ có B và C tranh, và đôi A của B thắng đôi K của C trọn vẹn. ==r:Người all-in chỉ có thể thắng hoặc chop những pot mà họ thực sự đã góp chip vào.== Những pot đó được dựng lên như thế nào — cap, quyền re-raise, thứ tự showdown — nằm trong [luật all-in và side pot](/vi/blog/holdem-all-in-rules).

---

## Có khi nào pot chia nửa cao nửa thấp không?

Trong Texas Hold'em thì không. Có thể bạn đã nghe về các "trò split-pot" như Omaha Hi-Lo hay Stud Hi-Lo, nơi pot được thiết kế để chia giữa tay bài cao mạnh nhất và tay bài thấp đạt chuẩn mạnh nhất (từ 8 trở xuống) — và tay cao ôm trọn khi không có tay thấp nào đạt chuẩn. Đó là một họ trò chơi khác. ==Hold'em chuẩn chỉ tính bài cao== — pot *chỉ* được chia khi các tay bài 5 lá mạnh nhất thực sự hòa nhau.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-reading-the-board | Cách đọc bài chung (board) và tìm 5 lá mạnh nhất | /images/holdem-reading-the-board-hero.webp
/vi/blog/holdem-all-in-rules | Luật all-in & side pot | /images/holdem-all-in-rules-hero.webp
:::

## Câu hỏi thường gặp

**Q. Khi nào pot bị chia trong poker?**

A. Pot bị chia khi hai người trở lên có tay bài 5 lá mạnh nhất giống hệt nhau lúc showdown; chip được chia đều cho họ.

**Q. Chia pot trong poker như thế nào?**

A. Dealer chia đều chip cho những người hòa. Nếu pot không chia đều được, phần dư trước hết được đổi ra mệnh giá nhỏ nhất đang dùng, và chip lẻ cuối cùng thuộc về người hòa đầu tiên bên trái nút dealer. Chất bài không bao giờ phá thế hòa, và khi có người all-in, mỗi pot chính và pot phụ được chia riêng.

**Q. Hai người cùng tay bài thì có chia pot không?**

A. Chỉ khi trọn bộ 5 lá mạnh nhất hòa nhau — cùng đôi với cùng kicker, hoặc cùng sảnh, thùng hay cù lũ. Nếu bất kỳ kicker nào khác nhau, kicker cao hơn thắng trọn pot thay vì chia.

**Q. Cù lũ, sảnh hay hai đôi giống nhau thì có chia pot không?**

A. Chỉ khi hai tay bài hoàn toàn giống nhau. Hai cù lũ chỉ chia khi cả bộ ba *và* đôi đều trùng — thường là trên board có hai đôi, nơi cả hai người dựng nên cùng một tổ hợp, đúng như Tình huống 1 ở trên. Hai sảnh chỉ chia khi cùng lá cao nhất, và hai tay hai đôi chỉ chia khi cả hai đôi lẫn kicker đều trùng. Mọi trường hợp khác, tay cao hơn thắng trọn pot.

**Q. Chop pot nghĩa là gì?**

A. Chop pot đơn giản là chia pot theo tiếng lóng ở bàn. "Chop" là cách người chơi nói; "split pot" là thuật ngữ trong sách luật — cả hai đều có nghĩa là chia đều pot cho các tay bài hòa nhau.

**Q. Chất bài có quyết định ai thắng khi chia pot không?**

A. Không. Texas Hold'em không xếp hạng chất, nên các tay bài 5 lá giống hệt nhau luôn chia pot bất kể chất.

**Q. Chip lẻ không chia đều được thì thuộc về ai?**

A. Luật chuẩn: người hòa đầu tiên bên trái nút dealer. Một vài phòng poker gán theo lá cao hay theo chất, nên luật nhà có thể khác — phần mềm online xử lý tự động.

**Q. Hơn hai người có thể cùng chia pot không?**

A. Có. Nếu ba người trở lên cùng cầm tay bài 5 lá mạnh nhất giống hệt nhau, pot được chia đều cho họ — thường gặp nhất khi board chơi cho cả bàn.

**Q. Có người all-in thì chia pot thế nào?**

A. Khi một hoặc nhiều người chơi all-in với số chip khác nhau và những người khác tiếp tục bet, pot tách thành pot chính và một hoặc nhiều pot phụ; mỗi pot được trao hoặc chop riêng, dựa trên tay bài mạnh nhất trong số những người đủ điều kiện với chính pot đó.

**Q. Pot phụ (side pot) tính như thế nào?**

A. Mỗi người chỉ có thể thắng từ một đối thủ tối đa bằng số mình đã bỏ vào. Nếu A all-in 100 và B, C mỗi người bet 300, pot chính là 100 × 3 = 300 (cả ba đủ điều kiện) và pot phụ là 200 × 2 = 400 (chỉ B và C). Mỗi pot sau đó về tay bài mạnh nhất trong số những người đủ điều kiện với nó — cách dựng pot từng bước nằm trong [luật all-in và side pot](/vi/blog/holdem-all-in-rules).

**Q. Ai được ăn pot phụ?**

A. Chỉ những người đã bỏ chip vào chính pot phụ đó — những người đã bỏ vào nhiều hơn mức mà một stack all-in ngắn hơn có thể theo kịp. Người all-in chỉ đủ điều kiện với pot chính (cộng pot phụ nào trước đó họ đã góp vào), không bao giờ với pot phụ dựng bằng số chip họ không theo kịp. Mỗi pot được trao cho tay bài mạnh nhất trong số những người đủ điều kiện của riêng nó.

**Q. Có thể thắng cả pot chính lẫn pot phụ không?**

A. Có. Người có stack sâu hơn với tay bài mạnh nhất có thể thắng pot chính và mọi pot phụ mà họ đủ điều kiện — ôm trọn tất cả. Ngược lại, short stack đã all-in chỉ có thể thắng pot chính (và pot phụ nào trước đó họ đã góp vào); họ không bao giờ thu được số chip mình không theo kịp, dù tay bài mạnh đến đâu.

**Q. Chop deal trong giải đấu có giống split pot không?**

A. Không — cùng một chữ, hai chuyện khác nhau. Chia pot lúc showdown không phải chuyện thương lượng: khi các tay bài hòa được lật ngửa, dealer chia chip. "Chop" trong giải đấu (tournament) là một thỏa thuận tự nguyện giữa những người còn lại để chia quỹ giải, thường theo số chip hoặc [ICM](/vi/blog/holdem-icm), và chỉ xảy ra khi mọi người đồng ý. Xem [giải đấu và cash game khác nhau thế nào](/vi/blog/holdem-tournament-vs-cash-game) để biết cách trả thưởng ở giải đấu khác ra sao.

**Q. Chia pot và chia bài khác nhau ở đâu?**

A. Chia bài là việc dealer phát bài tẩy và lật bài chung theo [trình tự một ván bài](/vi/blog/holdem-game-order); chia pot là việc chia chip sau showdown khi các tay bài hòa nhau — chính là chủ đề của bài này. Hai chữ gần giống nhau nhưng là hai công đoạn hoàn toàn khác.

---

## Những điều cần nhớ

1. Có, ==**poker có thể hòa**== — pot được chia (chop) bất cứ khi nào hai người trở lên cùng có ==**5 lá mạnh nhất trong 7 lá giống hệt nhau**==.
2. ==r:**Chất bài, bài tẩy cao hơn và số lá bạn đã dùng**== không bao giờ phá thế hòa.
3. ==**Chip lẻ**== thuộc về người hòa đầu tiên bên trái nút dealer, và ==**pot phụ**== được xử lý riêng với pot chính.

Ôn lại thứ tự trong [thứ tự bài poker đầy đủ](/vi/blog/holdem-hand-rankings), nắm chắc những ván sát nút trong [hướng dẫn kicker và so bài cùng hạng](/vi/blog/holdem-tiebreak-rules), và kết thúc cuộc tranh cãi kinh điển với [thùng và sảnh cái nào lớn hơn](/vi/blog/holdem-flush-vs-straight).

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thứ hạng tay bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thứ tự bài poker Texas Hold'em — từ mạnh nhất đến yếu nhất</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Cả 10 tay bài kèm xác suất, ví dụ và bài toán đọc board</div>
  </a>
  <a href="/vi/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">So bài cùng hạng</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">So bài poker khi cùng hạng</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kicker quyết định showdown cùng hạng như thế nào</div>
  </a>
  <a href="/vi/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">So sánh tay bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thùng và sảnh cái nào lớn hơn?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Toán học và các board thực tế cho chỗ nhầm số 1</div>
  </a>
</div>
`.trim(),
};
