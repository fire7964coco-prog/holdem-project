import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-kicker",
  title: "Kicker trong poker là gì — luật, cách đếm và vì sao A9 thua AK",
  seoTitle: "A9 thua AK ở lá nào? — Kicker (lá phụ) trong poker là gì",
  desc: "Kicker (lá phụ) là lá phá thế hòa khi hai người cùng hạng: tay nào có kicker, đếm mấy lá, vì sao A9 thua AK, và ngoại lệ tứ quý nhiều nơi viết sai.",
  tldr: "Kicker (lá phụ) là lá cao nhất không thuộc phần chính của tay bài — nó phá thế hòa khi hai người cùng hạng. Mậu thầu dùng 4 kicker, một đôi 3, hai đôi 1, sám cô 2; sảnh, thùng, cù lũ và thùng phá sảnh không có kicker. Đó là lý do AK thắng AQ khi bài chung (board) có một lá A.",
  category: "hand-rankings",
  date: "2026-10-09",
  updated: "2026-10-09",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "10 phút",
  emoji: "🃏",
  image: "/images/holdem-kicker-hero.webp",
  imageAlt: "Hai người chơi lật A-K và A-Q khi showdown với một lá A trên board — kicker K quyết định ai thắng pot",
  tags: ["kicker trong poker là gì", "kicker poker là gì", "kicker poker", "kicker là gì", "poker kicker rule", "poker ace kicker", "top kicker poker", "high kicker poker"],
  content: `
Ván bài khiến tôi cuối cùng cũng hiểu kicker (lá phụ) là gì đã lấy của tôi trọn một buy-in. Tôi cầm ==b:A♠ 9♣==, bài chung (board) ra thêm một lá A ghép đôi cho tôi, và tôi shove vì nghĩ đôi cao nhất là vàng. Đối thủ lật ==b:A♥ K♦== — cũng đôi A, nhưng lá K của đối thủ cao hơn lá 9 của tôi, và pot trôi về phía bên kia. Tôi không thua một *tay bài* mạnh hơn; tôi thua một ==lá phụ== mạnh hơn. Lá phụ đó chính là kicker, và nó quyết định nhiều pot hơn bất kỳ người mới nào tưởng.

==Kicker là cơ chế phá thế hòa nằm sẵn trong luật poker — khi hai người cùng hạng tay bài, lá còn lại cao nhất sẽ thắng.== Phần lớn hướng dẫn chỉ cho bạn một dòng định nghĩa và một ví dụ AK gặp AQ. Bài này cho bạn bức tranh đầy đủ: chính xác tay bài nào có kicker (và bao nhiêu lá), ngoại lệ mà ai cũng nói sai, và vì sao "chơi theo bài chung (playing the board)" nghĩa là kicker của bạn bỗng dưng chẳng còn ý nghĩa gì.

Vị trí của kicker trong bức tranh lớn về [thứ tự bài poker](/vi/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") rất đơn giản: nó chỉ xuất hiện *sau khi* hai người hòa nhau về hạng — nó không bao giờ thắng được một tay bài xếp cao hơn.

---

### Kicker trong một cái nhìn

:::stripe
4 | Kicker trong tay mậu thầu
3 | Kicker trong tay một đôi
1 | Kicker trong hai đôi (và tứ quý)
0 | Kicker trong sảnh, thùng, cù lũ hoặc thùng phá sảnh
:::

---

## Kicker trong poker là gì?

**Kicker là lá cao nhất trong tay bài năm lá của bạn mà không thuộc tổ hợp đã xếp hạng — nó phân định người thắng khi hai người cùng hạng.** Nó còn được gọi là "lá phụ" (side card). Trong Hold'em, tay bài luôn là năm lá (5 lá mạnh nhất trong 7 lá), nên khi đôi hoặc bộ ba của bạn đã cố định, các chỗ còn lại được lấp bằng kicker.

Ý cốt lõi: kicker ==không bao giờ thắng một tay bài xếp cao hơn.== Đôi K với kicker 2 vẫn đè bẹp đôi 10 với kicker A — so hạng trước, kicker chỉ để phá thế hòa. Kicker chỉ có ý nghĩa khi ==r:hai hạng giống hệt nhau==: đôi gặp đúng đôi đó, bộ ba gặp đúng bộ ba đó. Nói cách khác, kicker chỉ được so khi hai tay bài cùng hạng — hai đôi gặp một đôi không phải chuyện kicker.

Giả sử bạn cầm A-K và đối thủ cầm A-Q, rồi board ra một lá A. Cả hai đều có "đôi A" — cùng hạng. Lúc này lá phụ quyết định, và lá K của bạn cao hơn lá Q của họ. Không ai tạo được tay bài mạnh hơn; kicker chỉ lặng lẽ làm việc của nó.

---

## Tay bài nào có kicker, tay nào không?

**Chỉ những tay bài dùng ít hơn năm lá cho tổ hợp chính mới có kicker — tay bài nào tự lấp đủ cả năm lá thì không có.** Đây là bảng mà nhiều nơi giấu trong cả đoạn văn dài. Bảng sau tóm tắt những tay bài có kicker và số kicker tương ứng:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tay bài | Có kicker? | Số lá kicker |
|:---|:---:|:---:|
| Mậu Thầu | Có — so cả năm lá theo thứ tự | 4 |
| Một Đôi | ✅ Có | 3 |
| Hai Đôi | ✅ Có | 1 |
| Sám Cô | ✅ Có | 2 |
| Tứ Quý | ✅ Có (hiếm khi ảnh hưởng) | 1 |
| Sảnh | ❌ Không | — |
| Thùng | ❌ Không* | — |
| Cù Lũ | ❌ Không | — |
| Thùng Phá Sảnh / Thùng Phá Sảnh Hoàng Gia | ❌ Không | — |

</div>

Logic thuần túy là phép cộng: **số lá của tổ hợp + số kicker luôn bằng năm.** Một đôi dùng 2 lá, nên 3 kicker lấp phần còn lại. Sảnh, thùng (flush), cù lũ hay thùng phá sảnh đã dùng hết cả năm lá, nên không còn gì để làm kicker — hai sảnh hay hai cù lũ được phân định bằng giá trị các lá *bên trong* chúng, không phải bằng lá phụ.

==*Riêng thùng cần làm rõ thêm:== về mặt kỹ thuật, thùng không có "kicker". Khi hai thùng gặp nhau, bạn so cả năm lá từ cao xuống thấp (thùng có A cao nhất thắng thùng có K cao nhất). Người ta hay gọi lá cao nhất là "kicker" cho tiện, nhưng đúng ra đó là phép so sánh năm lá kiểu mậu thầu. Thứ tự phân định đầy đủ cho mọi tay bài nằm trong bài [so bài poker khi cùng hạng](/vi/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp").

---

## Mỗi tay bài đếm bao nhiêu kicker?

**Mậu thầu dùng bốn kicker, một đôi ba, sám cô hai, còn hai đôi và tứ quý chỉ một.** Biết số lá cho bạn biết chính xác phép phân định có thể đi sâu đến đâu — và tay bài nào không bao giờ bị tách bằng lá phụ.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tay bài | Tổ hợp | + Kicker | = 5 lá |
|:---|:---:|:---:|:---:|
| Mậu Thầu | 1 | 4 | ✅ |
| Một Đôi | 2 | 3 | ✅ |
| Sám Cô | 3 | 2 | ✅ |
| Hai Đôi | 4 | 1 | ✅ |
| Tứ Quý | 4 | 1 | ✅ |

</div>

Điều này quan trọng khi showdown (lật bài) vì kicker được so ==theo thứ tự, lá cao nhất trước.== Với một đôi, nếu kicker thứ nhất bằng nhau thì sang kicker thứ hai, rồi kicker thứ ba. Hai người có thể cùng đôi *và* cùng kicker cao nhất mà vẫn bị tách bằng lá thứ ba — đó chính là lý do "kicker của tôi tốt mà" không phải lúc nào cũng đủ.

---

## AK gặp AQ: kicker quyết định người thắng thế nào?

Hãy so từng lá để thấy rõ cách xác định người thắng.

Board là ==b:A♣ 9♦ 5♠ 2♥ 7♣==. Bạn cầm ==b:A♠ K♠==, đối thủ cầm ==b:A♦ Q♦==.

- **Bạn:** A♠ K♠ + board → đôi A. 5 lá mạnh nhất = ==g:A♠ A♣ K♠ 9♦ 7♣== (đôi A, kicker K-9-7).
- **Đối thủ:** A♦ Q♦ + board → cũng đôi A. 5 lá mạnh nhất = ==A♦ A♣ Q♦ 9♦ 7♣== (kicker Q-9-7).

Cùng đôi, nên so kicker từ trên xuống: ==g:K của bạn thắng Q của họ.== Bạn thắng, A-A-K-9-7 trên A-A-Q-9-7. Lá 9 và lá 7 thậm chí không cần đến — kicker thứ nhất đã định đoạt.

:::note[Để ý cả hai tay đều dùng chung lá 9 và lá 7 từ board. Kicker cũng có thể đến từ board: nếu lá phụ cao nhất là một lá bài chung, nó lấp vào tay bài của *cả hai* người và lá tiếp theo sẽ quyết định. Lá bài tẩy của bạn chỉ là kicker khi nó cao hơn thứ đã nằm sẵn trên board.]:::

---

## Khi nào kicker của bạn không được tính? Chơi theo bài chung (playing the board)

**Nếu hai lá bài tẩy không thể cải thiện tay bài mà năm lá bài chung đã tạo sẵn, bạn đang "chơi theo board" — và lá phụ của bạn không còn quyết định gì nữa.** Ai không cải thiện được đều dùng đúng năm lá giống hệt nhau — và nếu không ai cải thiện được, pot được chia.

Board là ==b:10♠ J♦ Q♣ K♥ A♠== — một sảnh từ 10 đến A đã thành hình (Broadway), khác chất nên không thể có thùng.

- Bạn cầm ==b:2♣ 3♦==. 5 lá mạnh nhất của bạn là sảnh trên board; lá 2 và lá 3 không thêm được gì.
- Đối thủ cầm ==b:4♥ 5♦==. Cũng vậy — sảnh trên board là 5 lá mạnh nhất của họ.

Không ai lên cao hơn A được, nên cả hai cùng chơi theo board và ==g:chia pot (chop)== — nhưng chỉ khi bạn lật ngửa bài tẩy; muck (úp bài bỏ) thì thường bạn không nhận gì, kể cả ở đây (Luật TDA 2024, điều 19). Sảnh không có kicker, nên những lá bài tẩy ấy chỉ là của thừa. Khi bạn nghe "board chơi cho cả bàn", đó chính là tình huống này — nơi ngay cả một lá bài tẩy trông mạnh cũng không đáng giá gì. (Thêm về cách nhận ra những board như vậy trong bài [đọc bài chung](/vi/blog/holdem-reading-the-board).)

---

## Vì sao A9 thua AK? Lá A bị dominate (dominated ace)

**Một tay bài bị dominate khi nó có chung một lá với tay bài mạnh hơn và gần như lần nào trúng bài cũng sẽ thua ở cuộc so kicker — cái bẫy kinh điển là lá A yếu như A9 gặp AK.** Đây là lúc kicker không còn là chuyện bên lề mà bắt đầu tốn tiền.

![Hai tay bài khởi đầu đặt cạnh nhau trên mặt nỉ xanh — A-K bên cạnh A-9 — cho thấy cùng một lá A nhưng kicker yếu hơn trở thành cái bẫy bị dominate](/images/holdem-kicker-dominated.webp "Cùng lá A, số phận khác nhau: kicker là thứ tách một tay bài premium khỏi một tay bài bị dominate")

Quay lại cái buy-in của tôi. Board ==b:A♦ 7♣ 2♥ Q♠ 4♦==, không thể có thùng và chẳng ai trong hai chúng tôi có sảnh.

- **A9:** A♠ 9♣ → đôi A, 5 lá mạnh nhất ==A♠ A♦ Q♠ 9♣ 7♣==.
- **AK:** A♥ K♦ → đôi A, 5 lá mạnh nhất ==g:A♥ A♦ K♦ Q♠ 7♣==.

Lại cùng đôi — và lá 9 của tôi thậm chí không có tiếng nói. Nó bị lá Q trên board đẩy xuống làm kicker thứ hai, và cuộc so bài đã kết thúc ngay ở kicker thứ nhất: K của đối thủ trên Q của board — nên xét cho cùng, "kicker" của tôi đã ==r:chết== từ trước khi ván bài bắt đầu. Đó là dominate: khi bạn trúng lá A, bạn thường chỉ đang trả tiền cho một lá A lớn hơn. Đó là toàn bộ lý do mà bài viết [bài khởi đầu nên chơi theo vị trí](/vi/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") xếp A9 khác chất thận trọng hơn AK rất nhiều — kicker là khác biệt giữa một tay bài premium và một cái bẫy.

---

## Tứ quý có kicker không?

**Có — tứ quý có một lá kicker, nhưng nó gần như không bao giờ quyết định ván bài trong Hold'em: muốn vậy hai người phải hòa nhau ở đúng cùng một tứ quý, tức cả bốn lá phải nằm trên board — một board hiếm gặp.** Đây là ngoại lệ mà phần lớn hướng dẫn nói sai khi gộp tứ quý vào nhóm "tay bài năm lá không có kicker".

Phép toán rất rõ: bốn lá tạo thành tứ quý, một lá là kicker. Nó chỉ có ý nghĩa khi hai người bằng cách nào đó hòa nhau ở *cùng* một tứ quý — trong Hold'em, điều đó đòi hỏi cả bốn lá nằm trên board (vì mỗi giá trị chỉ có bốn lá). Nếu board là ==b:5♠ 5♥ 5♦ 5♣ K♦==, ai cũng có tứ quý 5, và lá thứ năm là kicker: người cầm một lá A chơi ==g:5-5-5-5-A== và thắng người phải lấy ==5-5-5-5-K== từ board. Hiếm, nhưng có thật — và nói đúng ở những trường hợp biên như thế là thứ tách một hướng dẫn đáng tin khỏi một hướng dẫn nói qua loa.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-hand-rankings | Thứ tự bài poker Texas Hold'em | /images/holdem-hand-rankings-hero.webp
/vi/blog/holdem-tiebreak-rules | So bài poker khi cùng hạng | /images/holdem-tiebreak-hero.webp
:::

## Câu hỏi thường gặp

**Q. Kicker poker là gì?**

A. Kicker là lá phụ cao nhất trong tay bài năm lá của bạn mà không thuộc tổ hợp đã xếp hạng. Nó phá thế hòa khi hai người cùng hạng — ví dụ A-K thắng A-Q khi board ra một lá A, vì kicker K cao hơn kicker Q. Kicker không bao giờ thắng một tay bài xếp cao hơn.

**Q. Thùng có kicker không?**

A. Không. Thùng dùng cả năm lá, nên không có kicker riêng. Khi hai thùng gặp nhau, bạn so cả năm lá từ cao xuống thấp — thùng có A cao nhất thắng thùng có K cao nhất. Đôi khi người ta gọi lá cao nhất là "kicker" cho tiện, nhưng thực chất đó là phép so năm lá.

**Q. Sảnh có kicker không?**

A. Không. Sảnh là năm lá liên tiếp, nên nó đã hoàn chỉnh. Nếu hai người cùng tạo một sảnh giống nhau, họ chia pot — các lá bài tẩy còn lại không có ý nghĩa. Giữa các sảnh, chỉ sảnh cao hơn thắng sảnh thấp hơn — dù thùng trở lên thì thắng tất cả.

**Q. Cù lũ có kicker không?**

A. Không. Cù lũ là bộ ba cộng một đôi — đủ năm lá. Thế hòa được phân định bằng giá trị bộ ba trước, rồi đến đôi, không bao giờ bằng lá phụ.

**Q. Tứ quý nằm trên bài chung thì ai thắng?**

A. Lá thứ năm cao nhất thắng. Tứ quý có một lá kicker, nhưng nó hiếm khi ảnh hưởng trong Hold'em: nó chỉ quyết định ván bài khi hai người hòa nhau ở đúng cùng một tứ quý — tức cả bốn lá phải nằm trên board — và khi đó kicker cao hơn lấy pot.

**Q. Sám cô có so kicker không?**

A. Có. Sám cô dùng hai kicker, nên khi hai người cùng tạo một bộ ba giống nhau, hai lá cao nhất tiếp theo sẽ phân định — trên board K♣ K♥ 7♦ 5♣ 2♠, K♠ A♠ chơi K-K-K-A-7 và thắng K-K-K-Q-7 của K♦ Q♦ vì kicker A cao hơn kicker Q. (Một *set* thật sự từ đôi trên tay hiếm khi hòa, vì chỉ một người cầm được đúng đôi đó.)

**Q. Hai đôi có kicker không?**

A. Có — hai đôi dùng một kicker. Nếu bạn cầm K♥ Q♦ và đối thủ cầm J♠ Q♥ trên board Q♣ 7♠ 7♦ 4♥ 2♣, cả hai đều có đôi Q và đôi 7, nhưng kicker K của bạn thắng kicker J của họ (Q-Q-7-7-K trên Q-Q-7-7-J). Kicker chỉ được tính khi cả hai cầm đúng cùng một hai đôi.

**Q. Kicker có bắt buộc nằm trong bài tẩy không?**

A. Không. Kicker có thể là một lá bài chung. Trong Hold'em, tay bài luôn là 5 lá mạnh nhất trong 7 lá, nên nếu lá phụ cao nhất là một lá trên board cao hơn bài tẩy của cả hai người, nó trở thành kicker chung cho cả hai và lá tiếp theo sẽ quyết định. Lá bài tẩy của bạn chỉ đóng vai kicker khi nó cao hơn lá trên board mà nó thay thế.

**Q. Một tay bài có tối đa bao nhiêu kicker?**

A. Tùy tay bài: mậu thầu dùng bốn kicker (so cả năm lá theo thứ tự), một đôi dùng ba, sám cô dùng hai, còn hai đôi và tứ quý mỗi loại dùng một. Sảnh, thùng, cù lũ và thùng phá sảnh không có kicker vì đã lấp đủ cả năm lá.

**Q. Kicker thế nào là tốt?**

A. Kicker cao (high kicker, top kicker) — kicker A hoặc K là mạnh, còn kicker thấp như lá 9 khiến bạn "bị dominate". Đây là lý do AK và AQ tốt hơn A9 hay A5 rất nhiều: khi hai người cùng ghép đôi lá A và không tạo được gì hơn, kicker lớn nhất thắng pot.

**Q. Ace kicker (hay king kicker) nghĩa là gì?**

A. Ace kicker nghĩa là lá phụ cao nhất của bạn là lá A — kicker mạnh nhất có thể, nên "đôi cao nhất, kicker A" thắng gần như mọi showdown cùng đôi. King kicker là mức tốt kế tiếp. Đó chính là lý do A-K và A-Q thắng một lá A yếu như A-9: khi hai người cùng ghép đôi lá A và không tạo được gì hơn, kicker lớn nhất lấy pot.

**Q. Chơi theo bài chung (playing the board) nghĩa là gì?**

A. Chơi theo bài chung nghĩa là năm lá bài chung đã là tay bài mạnh nhất của bạn và bài tẩy không cải thiện được nó. Nếu không ai cải thiện được board, mọi người dùng cùng năm lá và pot được chia. Lá phụ của bạn không còn quyết định gì, vì không lá bài tẩy nào lọt vào năm lá bạn chơi — mọi lá trong tay bài đều là lá dùng chung.

**Q. Kicker có quan trọng trong Texas Hold'em không?**

A. Rất quan trọng. Vì mọi người dùng chung bài chung, người chơi thường xuyên tạo cùng một đôi hoặc cùng một bộ ba, và kicker quyết định những pot đó. Chọn tay bài có kicker mạnh (và fold những tay bị dominate) là phần cốt lõi của lối chơi thắng.

**Q. So hạng bài trước hay so kicker trước?**

A. Luôn so hạng tay bài trước. Kicker chỉ được đem ra so khi hai tay bài cùng hạng — hai đôi gặp một đôi thì hai đôi thắng, không cần nhìn kicker. Chỉ khi cả hai cùng đôi A, như AK gặp AQ trên board có một lá A, lá phụ mới quyết định: K thắng Q.

---

## Những điều cần nhớ

1. **Kicker = lá phụ, chỉ để phá thế hòa.** Nó phân định giữa hai tay bài cùng hạng và không bao giờ thắng một tay bài xếp cao hơn.
2. **Tổ hợp + kicker = năm lá.** Mậu thầu có 4 kicker, một đôi 3, sám cô 2, hai đôi và tứ quý 1; sảnh, thùng, cù lũ và thùng phá sảnh không có kicker.
3. **Kicker quyết định tiền thật.** Bị dominate (A9 gặp AK) và chơi theo board đều quy về kicker — hãy chọn tay bài có lá phụ mạnh và biết khi nào kicker của mình đã chết.

Hiểu đúng kicker và cả một nhóm những ván "sao tôi lại thua thế nhỉ?" không còn là bí ẩn. Từ đây, xem trọn [thứ tự bài poker](/vi/blog/holdem-hand-rankings), hoặc [luật so bài cùng hạng](/vi/blog/holdem-tiebreak-rules) đầy đủ cho mọi loại tay bài.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thứ hạng tay bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thứ tự bài poker Texas Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Thứ hạng các tay bài cần so trước khi xét kicker</div>
  </a>
  <a href="/vi/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thứ hạng tay bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">So bài poker khi cùng hạng</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Thứ tự phân định đầy đủ cho mọi tay bài</div>
  </a>
  <a href="/vi/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Bài khởi đầu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bài khởi đầu nên chơi theo vị trí</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao những lá A kicker yếu bị fold</div>
  </a>
  <a href="/vi/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Đọc bài chung</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cách đọc bài chung (board) trong Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Nhận ra khi bạn đang chơi theo board</div>
  </a>
</div>
`.trim(),
};

export default POST;
