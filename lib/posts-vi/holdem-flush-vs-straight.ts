import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-flush-vs-straight",
  title: "Thùng và sảnh cái nào lớn hơn? Toán học và 3 board dễ đọc nhầm",
  seoTitle: "Vì sao thùng lại ăn sảnh? — Thùng và sảnh cái nào lớn hơn",
  desc: "Lật sảnh ra mà bị thùng lấy pot? Thùng luôn lớn hơn sảnh. Phép toán đằng sau, bài nào ăn thùng, cù lũ với thùng cái nào lớn hơn và 3 board dễ đọc nhầm.",
  tldr: "Thùng (flush — 5 lá cùng chất, khoảng 0,197% số bộ 5 lá) luôn lớn hơn sảnh (straight — 5 lá liên tiếp, khoảng 0,392%) trong Texas Hold'em, vì thùng hiếm hơn: tính trên cả 7 lá đến river, thùng ra 3,03% còn sảnh 4,62%. Trên thùng còn có cù lũ, tứ quý và thùng phá sảnh.",
  category: "hand-rankings",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-09-28",
  keepImagesInBody: true,
  readTime: "11 phút",
  emoji: "⚡",
  image: "/images/holdem-flush-vs-straight-hero.webp",
  imageAlt: "Đồ họa: thùng A cao A♠ J♠ 9♠ 6♠ 2♠ bên cạnh sảnh 9 cao với huy hiệu vàng FLUSH WINS giải thích vì sao thùng xếp cao hơn",
  tags: ["thùng và sảnh cái nào lớn hơn", "thùng và sảnh trong poker", "flush vs straight", "flush poker là gì", "cù lũ với thùng cái nào lớn hơn", "cù lũ ăn thùng không", "thùng trong poker là gì", "sảnh trong poker là gì"],
  content: `
Pot lớn đầu tiên tôi thua trong một ván cash game live diễn ra đúng như thế này: tôi ra sảnh (straight) có 10 cao nhất ở river, ngửa bài ra như thể đang cầm vàng — và một người chơi quen mặt, ít nói, lật lên hai lá cơ. ==r:Dealer (người chia bài) đẩy pot về phía bên kia==, và tôi tua lại ván bài ấy suốt cả đường về nhà.

Nếu chuyện đó vừa xảy ra với bạn, câu trả lời ngắn là ==g:có — thùng (flush) lớn hơn sảnh, lần nào cũng vậy==. Phần thú vị nằm ở *vì sao*, còn bài nào ăn được thùng, và ba board mà người chơi vẫn đọc nhầm ngay tại bàn.

---

### Trả lời ngắn

:::stripe
Thùng > Sảnh | Không có ngoại lệ trong Texas Hold'em chuẩn
5.108 vs 10.200 | Số tổ hợp 5 lá của thùng so với sảnh — thùng hiếm hơn khoảng 2×
#5 vs #6 | Vị trí của thùng và sảnh trong thứ tự 10 tay bài
:::

> **Trả lời nhanh**
> **Thùng luôn lớn hơn sảnh** trong Texas Hold'em — không có ngoại lệ ở thể thức chuẩn. Thùng (5 lá cùng chất) về mặt thống kê khó tạo thành hơn sảnh (5 lá liên tiếp): khoảng **5.108** tổ hợp 5 lá so với **10.200**.

---

## Thùng và sảnh cái nào lớn hơn? Hai tay bài nằm ở đâu trong thứ tự

Thùng lớn hơn — và đây không phải chuyện cần cân nhắc. ==Thùng đứng ngay trên sảnh một bậc, và điều đó không bao giờ đổi trong Hold'em chuẩn.== Đây là khu vực xung quanh hai tay bài hay bị nhầm nhất:

| Hạng | Tay bài | Ví dụ |
|------|------|------|
| #2 | Thùng Phá Sảnh | 9♥ 8♥ 7♥ 6♥ 5♥ |
| #4 | Cù Lũ | J♠ J♥ J♦ 8♠ 8♥ |
| **#5** | **Thùng** | A♠ J♠ 9♠ 6♠ 2♠ |
| **#6** | **Sảnh** | 9♣ 8♥ 7♦ 6♣ 5♠ |
| #7 | Sám Cô | Q♠ Q♥ Q♦ 7♠ 3♣ |

Muốn đủ mười tay bài kèm xác suất, ví dụ và bài toán đọc board? Tất cả nằm trong [thứ tự bài poker đầy đủ](/vi/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") — bài này tập trung so sánh thùng với sảnh và các hạng tay bài liền kề.

---

## Vì sao thùng lớn hơn sảnh? Phép toán đằng sau

Độ mạnh của tay bài trong poker được quyết định bởi một thứ duy nhất: **tay bài đó khó tạo thành đến đâu**. Càng hiếm thì xếp càng cao. Không có gì trong thứ tự là tùy tiện — tất cả là tần suất.

Đếm hết 2.598.960 bộ 5 lá có thể có từ bộ bài 52 lá, thứ tự tự khắc hiện ra:

| Tay bài | Số tổ hợp | Xác suất | Kết luận |
|:---|:---:|:---:|:---|
| Tứ Quý | 624 | 0,024% | Lớn hơn thùng |
| Cù Lũ | 3.744 | 0,144% | Lớn hơn thùng |
| **Thùng** | **5.108** | **0,197%** | **Lớn hơn sảnh ✅** |
| **Sảnh** | **10.200** | **0,392%** | **Thua thùng ❌** |
| Sám Cô | 54.912 | 2,11% | Thua sảnh |

Sảnh có ==r:**gấp đôi** số cách tạo thành so với thùng== — 10.200 so với 5.108 trong 2.598.960 bộ 5 lá. Tính trên cả 7 lá đến river, khoảng cách thu hẹp còn khoảng ==1,5×== (4,62% so với 3,03%), nhưng chiều không bao giờ đổi: sảnh xuất hiện thường xuyên hơn, và chính điều đó khiến nó là tay bài yếu hơn. Cùng quy tắc tần suất 5 lá này giải thích toàn bộ bậc thang (trên 7 lá, mậu thầu thật ra hiếm hơn hai đôi, nhưng thứ tự đã được ấn định theo 5 lá); con số chính xác cho mọi tay bài nằm trong [bảng xác suất poker](/vi/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp").

### Vì sao thấy ngược đời

Sảnh chỉ cần năm giá trị liên tiếp, và ==**chất không quan trọng**==. Sự tự do ấy tạo ra một số lượng tổ hợp khổng lồ. Thùng thì ngược lại: cả năm lá phải ==**cùng một chất**==, và mỗi lần chỉ một trong bốn chất làm được điều đó. ==g:Ít cách đi đến đích hơn nghĩa là thùng hiếm hơn — và giữa các loại tay bài, loại hiếm hơn luôn xếp cao hơn.==

:::tip[Nếu bạn cầm flush draw (chờ thùng) còn đối thủ đang chờ sảnh, bạn thắng khi hai bên va nhau — khi **cả hai** draw cùng hoàn thành, thùng của bạn lớn hơn sảnh của họ lúc showdown (lật bài). Điều đó không đồng nghĩa với việc bạn đang là cửa trên: nếu draw sảnh của họ đi kèm một đôi hoặc lá cao hơn, họ vẫn có thể dẫn trước khi đến river.]:::

---

## 3 board vẫn đánh lừa người chơi

![Board 8♥ 7♥ 6♥ 5♠ A♣ — ba lá cơ trên board nghĩa là đối thủ vẫn có thể có thùng dù bạn có sảnh](/images/holdem-flush-vs-straight-board.webp "Ba lá cùng chất trên board — đối thủ có thể có thùng thắng sảnh của bạn")

Biết luật không giống với đọc được nó ngay tại bàn — kỹ năng đó chính là thứ mà [đọc bài chung (board)](/vi/blog/holdem-reading-the-board) rèn luyện. Đây là ba tình huống mà sai lầm thật sự xảy ra.

### Board 1 — bạn có sảnh, nhưng board có 3 lá cùng chất

:::hand[8♥,7♥,6♥,5♠,A♣] Board (5 lá):::

Bạn cầm **9♠ 10♠** và đã có **sảnh 6-7-8-9-10**. Cảm giác rất mạnh — nhưng board đang hiện **ba lá cơ**. Nếu đối thủ cầm hai lá cơ, họ có thùng, và **thùng lớn hơn sảnh**. Bất cứ khi nào board có từ ba lá cùng chất trở lên, đối thủ có thể có thùng; hãy cân nhắc mức bet và call cho phù hợp.

### Board 2 — sảnh đã thành và còn chờ thùng

:::hand[8♥,7♥,6♠,2♣] Board (4 lá, turn):::

Bạn cầm **9♥ 5♥**. Bạn đã có **sảnh 5-6-7-8-9** — vậy sao còn để mắt đến những lá cơ? Vì bạn cũng đang cầm **bốn lá chờ thùng** (9♥ 8♥ 7♥ 5♥): bất kỳ lá cơ nào ở river đều nâng sảnh của bạn lên thùng, và **riêng lá 6♥** hoàn thành **thùng phá sảnh 5-6-7-8-9 (#2)** đè bẹp mọi thứ. Khi bạn có thể chờ một tay bài lớn hơn mà không mất gì, hãy chơi với cơ hội nâng cấp ấy trong đầu.

==r:**Hai cảnh báo đi kèm.**== Thứ nhất, sảnh này **không phải nuts (tay bài mạnh nhất có thể trên board này)** — ai cầm 10-9 đã có sảnh cao hơn 10-9-8-7-6. Thứ hai, lá cơ cao nhất bạn có chỉ là ==9♥==. Bất kỳ lá cơ nào ở river ngoài 6♥ cũng trao thùng cho mọi đối thủ cầm hai lá cơ, và chỉ cần một lá cơ cao hơn 9 là đủ thắng bạn — A♥ 2♥ làm được điều đó. Cơ hội nâng cấp là thật, nhưng ==r:điều đó không có nghĩa là bạn nên đánh pot lớn==.

### Board 3 — bạn có thùng, đối thủ lật sảnh

:::hand[J♠,9♠,7♠,4♣,2♦] Board (5 lá):::

Bạn cầm **A♠ 6♠** → **A♠ J♠ 9♠ 7♠ 6♠**, thùng A cao nhất. Đối thủ lật **10♥ 8♦** ra sảnh 7-8-9-10-J và tuyên bố đầy tự tin. Đừng chớp mắt: thùng của bạn cao hơn. Thùng trên sảnh, luôn luôn.

---

## Bài nào lớn hơn thùng trong poker?

Thùng của bạn là cửa trên trước phần lớn bộ bài — nhưng đúng **bốn loại tay bài** (cộng với thùng lớn hơn) ăn được nó:

:::compare
Lớn hơn thùng của bạn | Thua thùng của bạn
Cù lũ (#4) | Sảnh (#6)
Tứ quý (#3) | Sám cô (#7)
Thùng phá sảnh (#2) | Hai đôi (#8)
Thùng phá sảnh hoàng gia (#1) | Một đôi & mậu thầu (#9–#10)
Thùng cao hơn | Bất kỳ thùng thấp hơn nào
:::

---

## Cù lũ với thùng cái nào lớn hơn — còn cù lũ với sảnh?

Cù lũ (full house) lớn hơn cả thùng lẫn sảnh: thứ tự là cù lũ (#4) > thùng (#5) > sảnh (#6) > sám cô (#7). Trên cù lũ còn tứ quý (#3), và cao hơn nữa là thùng phá sảnh — bài [thứ tự bài poker](/vi/blog/holdem-hand-rankings) có riêng một mục giải thích thùng phá sảnh khác thùng phá sảnh hoàng gia ở đâu.

Cặp đấu người ta tranh cãi nhiều nhất sau thùng và sảnh chính là **thùng với cù lũ** — và cù lũ thắng. Số lần tôi cầm một thùng nuts (nut flush) đẹp đẽ mà vẫn trả tiền cho cù lũ trên board có đôi nhiều hơn mức tôi muốn thừa nhận, nên dấu hiệu nguy hiểm tôi để ý bây giờ rất đơn giản: **board có đôi (paired board)**. Hãy nhìn ván này:

:::hand[K♠,9♠,9♥,4♠,2♦] Board (5 lá):::

Bạn cầm **A♠ 5♠** và có thùng nuts: **A♠ K♠ 9♠ 5♠ 4♠**. Đối thủ cầm **K♦ 9♦** và lật ra **9♦ 9♠ 9♥ K♦ K♠** — cù lũ 9 kèm K. ==r:Cù lũ lớn hơn thùng==, và không thùng nào sống sót trước nó. Trên board không có đôi, thùng nuts chỉ thua thùng phá sảnh; khoảnh khắc board có đôi, cù lũ và tứ quý bước vào cuộc chơi.

Khi hai người cùng cầm *một* loại tay bài, người thắng được quyết định bằng cách so từng lá — toàn bộ hệ thống nằm trong [luật so bài cùng hạng và kicker](/vi/blog/holdem-tiebreak-rules).

---

## Thùng gặp thùng, sảnh gặp sảnh — ai thắng?

Đúng, một thùng hoàn toàn có thể cao hơn thùng khác. **Chất không liên quan** — so năm lá từ trên xuống, lá cao nhất trước:

| Người chơi | Thùng | Kết quả |
|--------|------|------|
| A | A♠ J♠ 9♠ 6♠ 2♠ | **Thắng** |
| B | K♥ Q♥ 10♥ 8♥ 3♥ | Thua |

Lá A của người chơi A cao hơn lá K của người chơi B ngay ở lá đầu tiên, nên A thắng. Thùng bích **không** lớn hơn thùng cơ — chỉ giá trị lá bài mới quan trọng. (Trong một ván Hold'em thật, hai thùng luôn *cùng* một chất vì cả hai đều dựng từ board dùng chung — chất lẫn lộn ở đây chỉ để minh họa.)

Sảnh còn đơn giản hơn: chỉ so **lá cao nhất** — không có kicker (lá phụ).

- **A-K-Q-J-10** (A cao nhất, "Broadway") là sảnh mạnh nhất.
- **A-2-3-4-5** ("the wheel", lá A chơi thấp) là sảnh thấp nhất.

| Người chơi | Sảnh | Kết quả |
|--------|------|------|
| A | Q-J-10-9-8 | **Thắng** |
| B | J-10-9-8-7 | Thua |

Q cao hơn J, nên A thắng. Nếu 5 lá mạnh nhất của cả hai trùng giá trị, đó là [chia pot](/vi/blog/holdem-split-pot-rules).

---

## Khi vừa thùng vừa sảnh thì thành gì? Thùng phá sảnh (straight flush)

![9♥ 8♥ 7♥ 6♥ 5♥ — thùng phá sảnh chất cơ, tay bài #2 trong poker](/images/holdem-flush-vs-straight-sf.webp "Thùng phá sảnh — năm lá cơ liên tiếp; chỉ thùng phá sảnh cao hơn hoặc thùng phá sảnh hoàng gia mới thắng được nó")

**Thùng phá sảnh** là năm lá *liên tiếp* và *cùng chất* — như 9♥ 8♥ 7♥ 6♥ 5♥. Đó là **tay bài #2 trong poker**: chỉ thùng phá sảnh cao hơn hoặc thùng phá sảnh hoàng gia (đơn giản là thùng phá sảnh có A cao nhất, A-K-Q-J-10 cùng chất) mới thắng được nó. Chỉ với **36 tổ hợp** (khoảng 0,00139% số bộ 5 lá; khoảng 0,028% tính đến river trong Hold'em), nó hiếm hơn mọi thứ trừ chính thùng phá sảnh hoàng gia. Trong tiếng Việt, một chữ «thùng phá sảnh» hay được dùng cho cả hai — bài [thứ tự bài poker](/vi/blog/holdem-hand-rankings) có riêng một mục tách bạch hai tay bài này.

Điểm mấu chốt: ==*cùng năm lá đó* phải vừa cùng chất vừa liên tiếp==. Hãy xem sự khác biệt trên board **8♥ 7♥ 6♥ Q♠ 3♦**:

- Cầm **K♥ 2♥** → năm lá cơ của bạn là K-8-7-6-2. Không liên tiếp — đó ==chỉ là thùng thường, không phải thùng phá sảnh==.
- Cầm **10♥ 9♥** → năm lá cơ là 10-9-8-7-6. Liên tiếp *và* cùng chất — ==g:thùng phá sảnh có 10 cao nhất==.

Nếu sảnh của bạn dùng một số lá còn thùng dùng những lá khác, bạn không cộng chúng lại — bạn chỉ chơi tay bài cao hơn trong hai tay, tức là thùng.

---

## Short Deck xếp thùng và sảnh khác không?

Có — Short Deck (6+) Hold'em là thể thức phổ biến duy nhất xếp lại các tay bài này. Trong **Short Deck (6+) Hold'em**, các lá từ 2 đến 5 bị bỏ khỏi bộ bài. Với ít lá hơn, thùng trở nên *khó* tạo thành hơn cù lũ — nên ở thể thức đó thứ hạng đổi chỗ và ==r:**thùng lớn hơn cù lũ**==. Logic vẫn như với bộ bài đầy đủ: trong hai tay bài đó, ==tay hiếm hơn xếp cao hơn==. Chỉ bộ bài thay đổi. Trong Texas Hold'em chuẩn với bộ 52 lá đầy đủ, ==g:thùng lớn hơn sảnh và thua cù lũ, lần nào cũng vậy==.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-tiebreak-rules | So bài poker khi cùng hạng | /images/holdem-tiebreak-hero.webp
/vi/blog/holdem-split-pot-rules | Khi nào chia pot trong poker? | /images/holdem-split-pot-hero.webp
:::

## Câu hỏi thường gặp

**Q. Thùng có lớn hơn sảnh không?**

A. Có. Thùng là tay bài #5 và sảnh là #6, nên thùng luôn thắng trong Texas Hold'em chuẩn. Năm lá cùng chất về mặt thống kê khó tạo thành hơn năm lá liên tiếp, và giữa các bộ 5 lá, tay bài hiếm hơn luôn xếp cao hơn.

**Q. Sảnh có bao giờ ăn được thùng không?**

A. Không. Sảnh (#6) không bao giờ thắng thùng (#5) trong Texas Hold'em chuẩn. Đây là nhầm lẫn phổ biến vì sảnh có vẻ khó hoàn thành hơn, nhưng thùng hiếm hơn — 5.108 so với 10.200 cách trong các bộ 5 lá, và 3,03% so với 4,62% tính trên 7 lá — nên thùng luôn lấy pot.

**Q. Vì sao thùng lại lớn hơn sảnh?**

A. Thuần túy toán học. Sảnh không quan tâm đến chất, nên có khoảng 10.200 cách tạo thành, so với chỉ 5.108 cách tạo thành thùng. Điều đó khiến thùng hiếm hơn khoảng hai lần trong các bộ 5 lá; tính trên cả 7 lá đến river vẫn còn chênh khoảng 1,5 lần (3,03% so với 4,62%). Đếm theo bộ 5 lá — cách mà thứ tự đã được ấn định — tay bài hiếm hơn luôn xếp cao hơn.

**Q. Những tay bài nào ăn được thùng?**

A. Cù lũ, tứ quý, thùng phá sảnh và thùng phá sảnh hoàng gia đều lớn hơn thùng — và thùng cao hơn (lá cao nhất lớn hơn) cũng vậy. Mọi thứ bên dưới (sảnh, sám cô, hai đôi, một đôi, mậu thầu) đều thua thùng.

**Q. Những tay bài nào ăn được sảnh?**

A. Thùng, cù lũ, tứ quý, thùng phá sảnh và thùng phá sảnh hoàng gia đều lớn hơn sảnh — cộng thêm bất kỳ sảnh cao hơn nào. Sảnh vẫn thắng sám cô và mọi thứ bên dưới. Thứ tự đầy đủ từ mạnh nhất đến yếu nhất nằm trong [thứ tự bài poker](/vi/blog/holdem-hand-rankings).

**Q. Thùng của tôi có thể lớn hơn thùng của đối thủ không?**

A. Có. Hai thùng được so từng lá từ trên xuống, nên thùng A cao nhất lớn hơn thùng K cao nhất. Nếu lá cao nhất bằng nhau, lá cao thứ hai quyết định, và cứ thế cho đủ năm lá.

**Q. Chất của thùng (cơ, rô, chuồn, bích) có quan trọng không?**

A. Không. Texas Hold'em không xếp hạng chất. Chất chỉ quan trọng để *tạo thành* thùng, không bao giờ dùng để so tay bài — khi hai thùng đụng nhau (trong Hold'em luôn cùng chất, vì cùng dùng lá trên board), chỉ giá trị lá bài quyết định, và giá trị giống hệt thì chia pot.

**Q. Thùng và sảnh có bao giờ hòa hay chia pot không?**

A. Không. Một tay bài luôn xếp trên tay kia, nên thùng đơn giản là thắng. Chia pot chỉ xảy ra giữa hai tay bài cùng hạng với đúng năm lá có giá trị giống hệt nhau.

**Q. Flush trong poker là gì?**

A. Flush — tiếng Việt gọi là thùng — là năm lá bất kỳ cùng chất, không cần theo thứ tự, ví dụ A♠ J♠ 9♠ 6♠ 2♠. Nó xếp #5, trên sảnh và dưới cù lũ. Năm lá cùng chất mà lại liên tiếp thì là thùng phá sảnh, một tay bài riêng xếp cao hơn hẳn (#2).

**Q. Thùng và sảnh trong poker là gì?**

A. Thùng là năm lá cùng chất, thứ tự không quan trọng; sảnh là năm lá có giá trị liên tiếp, chất không quan trọng. Trong thứ tự bài poker, thùng đứng #5 và sảnh đứng #6 — thùng luôn lớn hơn.

**Q. Cù lũ ăn thùng không?**

A. Có. Cù lũ (#4) lớn hơn thùng (#5), kể cả thùng A cao nhất. Thùng chỉ thắng cù lũ khi ở Short Deck (6+), còn trong Texas Hold'em chuẩn thì không bao giờ.

**Q. Cù lũ với sảnh cái nào lớn hơn?**

A. Cù lũ lớn hơn. Cù lũ (#4) đứng trên cả thùng (#5) lẫn sảnh (#6), nên gặp sảnh thì cù lũ luôn thắng. Chỉ tứ quý, thùng phá sảnh, thùng phá sảnh hoàng gia hoặc một cù lũ cao hơn mới thắng được cù lũ.

---

## Những điều cần nhớ

1. **Thùng (#5) lớn hơn sảnh (#6)** — không có ngoại lệ trong Hold'em chuẩn.
2. Nó thắng vì hiếm hơn: **5.108** tổ hợp thùng so với **10.200** tổ hợp sảnh trong các bộ 5 lá — và 3,03% so với 4,62% tính trên cả 7 lá đến river.
3. Hãy nhìn board: **ba lá cùng chất** nghĩa là đối thủ có thể có thùng, **board có đôi** nghĩa là cù lũ có thể ăn thùng của bạn, và cùng chất *cộng* liên tiếp là thùng phá sảnh.

Khóa chặt thứ tự đầy đủ với [thứ tự bài poker](/vi/blog/holdem-hand-rankings), học cách phân định các tay bài sát nhau trong [hướng dẫn so bài cùng hạng và kicker](/vi/blog/holdem-tiebreak-rules), và nếu bạn hoàn toàn mới, [luật chơi Texas Hold'em cho người mới](/vi/blog/texas-holdem-rules-for-beginners) sẽ nối tất cả lại với nhau.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thứ hạng tay bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thứ tự bài poker Texas Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Đủ 10 tay bài kèm xác suất, ví dụ và bài toán đọc board</div>
  </a>
  <a href="/vi/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">So bài cùng hạng</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">So bài poker khi cùng hạng</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Cùng thùng hay cùng sảnh — ai lấy pot?</div>
  </a>
  <a href="/vi/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chia pot</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Khi nào chia pot trong poker?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">5 tình huống chop, kể cả hai thùng giống hệt nhau</div>
  </a>
</div>
`.trim(),
};
