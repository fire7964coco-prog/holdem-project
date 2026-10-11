import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-hand-rankings",
  title: "Thứ tự bài poker Texas Hold'em — 10 tay bài từ mạnh nhất đến yếu nhất",
  seoTitle: "Tưởng thắng mà lại thua pot? — Thứ tự bài poker mạnh nhất",
  desc: "Có thùng (flush) mà vẫn thua pot? Thứ tự bài poker đầy đủ: 10 tay bài từ mạnh nhất đến yếu nhất, xác suất từng tay và cách kicker quyết định người thắng.",
  tldr: "Thứ tự bài poker từ mạnh nhất đến yếu nhất: thùng phá sảnh hoàng gia (royal flush), thùng phá sảnh (straight flush), tứ quý (four of a kind), cù lũ (full house), thùng (flush), sảnh (straight), sám cô (three of a kind), hai đôi, một đôi và mậu thầu (high card). Cùng hạng thì so tổ hợp chính trước rồi đến kicker (lá phụ); chất bài không xếp hạng.",
  category: "hand-rankings",
  date: "2026-06-09",
  updated: "2026-10-11",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "14 phút",
  emoji: "🃏",
  image: "/images/holdem-hand-rankings-hero.webp",
  imageAlt: "Thùng phá sảnh hoàng gia — 10 J Q K A chất bích trên bàn poker cùng các chồng chip và nút dealer",
  tags: ["thứ tự bài poker", "thứ tự bài mạnh trong poker", "xếp hạng bài poker", "poker hand rankings", "poker hands", "bài poker mạnh nhất", "thùng phá sảnh poker", "texas holdem hands", "royal flush"],
  content: `
Bạn đang heads-up ở river. Bạn đã có thùng (flush), chắc chắn là thắng — rồi ==r:dealer (người chia bài) đẩy pot về phía bên kia==. Bài chung (board) có đôi, đối thủ cầm cù lũ (full house), và bạn hoàn toàn không ngờ tới.

Gần như mọi khoảnh khắc "tưởng mình thắng" đều quy về một điều: ==không đọc **thứ tự bài poker** đủ nhanh==. Bản thân thứ tự thì học năm phút là xong. Đọc nó ngay tại bàn, dưới áp lực, với board có đôi hoặc board liên kết — ==đó mới là phần hiếm ai giải thích cho ra hồn==.

Tôi đã ngồi không biết bao nhiêu đêm nhìn đúng cái mặt "tưởng mình thắng" ấy ở phía bên kia bàn, và gần như lần nào cũng truy ra được một chi tiết bị bỏ sót trên board. Bài này giải quyết cả hai vấn đề. Bạn sẽ có thứ tự đầy đủ kèm xác suất thực, mọi quy tắc phân định khi hòa, ba bài toán đọc board thực chiến để luyện "tìm 5 lá mạnh nhất trong 7 lá", và một quy trình 1 giây để đọc bất kỳ board nào ngay tại bàn.

---

## Thứ tự bài poker từ mạnh nhất đến yếu nhất như thế nào?

Từ mạnh nhất đến yếu nhất, mười tay bài Texas Hold'em xếp theo thứ tự: thùng phá sảnh hoàng gia (royal flush), thùng phá sảnh (straight flush), tứ quý (four of a kind), cù lũ (full house), thùng (flush), sảnh (straight), sám cô (bộ ba, three of a kind), hai đôi (two pair), một đôi (one pair) và mậu thầu (bài cao, high card). Quy tắc cốt lõi rất đơn giản — tay bài càng khó tạo thành từ năm lá thì xếp càng cao. (Thứ tự được ấn định theo xác suất năm lá; với bảy lá, vài tần suất đổi chỗ cho nhau — đến river, mậu thầu thật ra hiếm hơn hai đôi — nhưng thứ hạng không đổi.) Dưới đây là toàn bộ hệ thống thứ bậc kèm xác suất dài hạn cầm được mỗi tay bài tính đến river.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| # | Tay bài | Còn gọi là | Là gì | Xác suất (đến river) |
|:---|:---|:---|:---|:---:|
| **1** | Thùng Phá Sảnh Hoàng Gia | "Royal" (thùng phá sảnh có A cao nhất) · sảnh rồng, sảnh chúa | A-K-Q-J-10, cùng chất | 0,0032% |
| **2** | Thùng Phá Sảnh | Chỉ A-5: "steel wheel" | 5 lá liên tiếp, cùng chất | 0,0279% |
| **3** | Tứ Quý | "Quads" | Bốn lá cùng giá trị | 0,168% |
| **4** | Cù Lũ | "Boat" / "Full boat" | Sám cô + một đôi | 2,60% |
| **5** | Thùng | — | 5 lá bất kỳ cùng chất | 3,03% |
| **6** | Sảnh | — | 5 lá liên tiếp, khác chất | 4,62% |
| **7** | Sám Cô | "Trips" / "Set" | Ba lá cùng giá trị | 4,83% |
| **8** | Hai Đôi | — | Hai đôi khác nhau | 23,5% |
| **9** | Một Đôi | — | Hai lá cùng giá trị | 43,8% |
| **10** | Mậu Thầu | "No pair" (bài cao) | Không có tổ hợp nào | 17,4% |

</div>

*Đây là tần suất chuẩn của tay bài bảy lá với bộ 52 lá đầy đủ — cùng xác suất mà mọi solver poker và trang luyện tập đều dùng.*

> **Quy tắc kết thúc mọi tranh cãi**
> Một đôi và mậu thầu cộng lại chiếm khoảng 61% tất cả các tay bài bảy lá tính đến river. Các tay bài lớn có vẻ phổ biến vì chúng đáng nhớ — nhưng phần lớn pot được định đoạt bởi một đôi hoặc mậu thầu cùng [kicker (lá phụ)](/vi/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp") đi kèm.

:::quiz:::

---

## Độ mạnh lá bài: nền tảng trong 30 giây

Trước khi nói về tay bài, bạn cần biết độ mạnh của từng lá. Chỉ có hai điều.

### Thứ tự từ cao xuống thấp

**A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2**

Lá A là lá mạnh nhất và cũng là lá duy nhất phá lệ: nó chơi cao (A-K-Q-J-10) *và* chơi thấp (A-2-3-4-5 — sảnh thấp nhất, gọi là the wheel). Nó không thể vòng qua giữa — Q-K-A-2-3 **không** phải sảnh.

### Chất bài không xếp hạng

Trong Texas Hold'em chuẩn, **không có chất nào mạnh hơn chất nào**. Bích không thắng cơ. Chất chỉ quan trọng để *tạo thành* thùng, không bao giờ dùng để phân định khi hòa. Nếu hai người có cùng năm lá nhưng khác chất, pot được chia — lần nào cũng vậy.

---

## 10 tay bài poker gồm những gì? Giải thích từng tay

Đây là từng tay bài từ mạnh nhất đến yếu nhất, kèm ví dụ và quy tắc duy nhất quyết định mỗi cuộc so bài. Những tay bài gây nhầm lẫn nhiều nhất — cù lũ, thùng, sảnh và ba kiểu sám cô — được dành thêm chú ý.

### #1 — Thùng phá sảnh hoàng gia (royal flush)

:::hand[A♠,K♠,Q♠,J♠,10♠] Thùng Phá Sảnh Hoàng Gia — A-K-Q-J-10, toàn bích:::

**A♠ K♠ Q♠ J♠ 10♠** — thùng phá sảnh cao nhất, và là tay bài mạnh nhất trong poker (còn gọi là sảnh rồng, sảnh chúa — 10-J-Q-K-A cùng chất).

Không thể bị đánh bại; thế hòa duy nhất có thể xảy ra là khi cả năm lá của thùng phá sảnh hoàng gia nằm hết trên board cho mọi người dùng chung, khi đó chia pot. Bạn sẽ gặp nó khoảng một lần mỗi 31.000 ván, nên nhiều người chơi nhiều năm chưa từng có. Khi có, nhiệm vụ duy nhất của bạn là đẩy càng nhiều chip vào pot càng tốt.

### #2 — Thùng phá sảnh (straight flush)

:::hand[9♥,8♥,7♥,6♥,5♥] Thùng Phá Sảnh — năm lá cơ liên tiếp:::

**9♥ 8♥ 7♥ 6♥ 5♥** — năm lá liên tiếp, tất cả cùng chất.

Chỉ thua thùng phá sảnh cao hơn hoặc thùng phá sảnh hoàng gia. Phiên bản thấp nhất, A-2-3-4-5 cùng chất, gọi là **steel wheel** — thùng phá sảnh thấp nhất. Khi hai thùng phá sảnh đụng nhau, tay có lá cao nhất cao hơn thắng. Cách giải thích hay gặp «thùng phá sảnh = royal flush» là không đúng — chỉ khi năm lá đó đúng là A-K-Q-J-10 cùng chất mới gọi là hoàng gia.

### #3 — Tứ quý (four of a kind)

:::hand[8♣,8♦,8♥,8♠,K♥] Tứ Quý — bốn lá 8 + kicker:::

**8♣ 8♦ 8♥ 8♠ K♥** — cả bốn lá cùng giá trị.

Giữa hai tứ quý, bộ bốn có giá trị cao hơn thắng. Nếu tứ quý nằm *trên board* (cả bốn lá dùng chung), **kicker** cao nhất quyết định — và kicker A được tính.

### #4 — Cù lũ (full house)

:::hand[Q♠,Q♥,Q♦,5♣,5♠] Cù Lũ — ba lá Q + hai lá 5:::

**Q♠ Q♥ Q♦ 5♣ 5♠** — sám cô cộng một đôi.

So **bộ ba trước**: cù lũ Q kèm 5 (QQQ55) thắng JJJ99 vì Q cao hơn J, bất kể đôi lớn cỡ nào. Chỉ khi bộ ba bằng nhau mới so đến đôi.

> **Cooler phổ biến nhất**
> Mười hai năm quanh bàn poker, "thùng nuts (nut flush — thùng mạnh nhất có thể có trên board đó) của tôi thua cù lũ" là cú bad beat tôi nghe người chơi than nhiều nhất. Mỗi khi board có đôi, hãy tìm cù lũ *trước khi* bỏ nhiều chip vào pot với thùng hay sảnh.

### #5 — Thùng (flush)

:::hand[A♦,J♦,8♦,6♦,2♦] Thùng — năm lá rô:::

**A♦ J♦ 8♦ 6♦ 2♦** — năm lá bất kỳ cùng chất, không cần theo thứ tự.

Hai thùng được so từng lá từ trên xuống: A-J-8-6-2 thắng A-J-8-5-2 vì lá 6 cao hơn lá 5. Bốn lá cùng chất **không** phải thùng — bạn cần đủ năm lá.

### #6 — Sảnh (straight)

:::hand[7♠,6♥,5♣,4♦,3♠] Sảnh — năm lá liên tiếp, khác chất:::

**7♠ 6♥ 5♣ 4♦ 3♠** — năm lá liên tiếp, chất lẫn lộn. (Năm lá liên tiếp mà *cùng* chất thì đã là thùng phá sảnh — nhiều cách giải thích hay gặp bỏ sót chữ "khác chất" nên hai tay bài này bị lẫn vào nhau.)

- **Cao nhất (the nuts):** A-K-Q-J-10 — sảnh Broadway — không sảnh nào cao hơn.
- **Wheel:** A-2-3-4-5 là sảnh thấp nhất (lá A chơi thấp).
- **Không hợp lệ:** không thể vòng qua — K-A-2-3-4 không phải sảnh.

Giữa hai sảnh, tay có lá cao nhất cao hơn thắng.

### #7 — Sám cô (three of a kind: trips / set)

:::hand[J♣,J♠,J♥,A♦,4♠] Sám Cô — ba lá J + kicker:::

**J♣ J♠ J♥ A♦ 4♠** — ba lá cùng giá trị (còn gọi là xám).

Có ba cách tạo thành, và sự khác biệt rất quan trọng:

- **Set:** cầm đôi trên tay + 1 lá trên board (ví dụ bạn cầm J♣ J♠ và board có J♥). Kín đáo và nguy hiểm.
- **Trips:** 1 lá trên tay + board có đôi. Đối thủ dễ đọc ra hơn và cũng dễ có cùng bộ ba với bạn hơn.
- **Sám cô nằm trên board:** cả ba lá đều ở board (ví dụ J♣ J♠ J♥ đều nằm trên board). Ai cũng dùng chung, nên trừ khi có người tạo được sảnh hoặc mạnh hơn, chỉ kicker mới phân định.

Set ăn được nhiều chip hơn vì không ai thấy nó đến. Và dù mạnh đến đâu, sám cô vẫn xếp dưới sảnh (#6).

### #8 — Hai đôi (two pair)

:::hand[10♠,10♥,8♣,8♦,A♠] Hai Đôi — đôi 10 và đôi 8 + kicker A:::

**10♠ 10♥ 8♣ 8♦ A♠** — hai đôi khác nhau.

So theo thứ tự: **đôi cao → đôi thấp → kicker**. KK99-A thắng QQJJ-A vì K cao hơn Q, trước khi xét bất cứ thứ gì khác.

### #9 — Một đôi (one pair)

:::hand[K♠,K♦,9♥,6♣,2♠] Một Đôi — đôi K + ba kicker:::

**K♠ K♦ 9♥ 6♣ 2♠** — hai lá cùng giá trị.

Tay bài hoàn chỉnh phổ biến nhất trong Hold'em. Hai người có đôi bằng nhau thì phân định bằng kicker: **giá trị đôi → kicker thứ nhất → kicker thứ hai → kicker thứ ba**, cao trước. Đây là nơi xảy ra phần lớn những thất bại "cùng một tay bài" — hãy giữ kicker của bạn.

### #10 — Mậu thầu (high card)

:::hand[A♣,Q♠,9♥,5♦,3♣] Mậu Thầu — không có tổ hợp:::

**A♣ Q♠ 9♥ 5♦ 3♣** — không gì liên kết với nhau.

Khi showdown (lật bài), lá cao nhất thắng, rồi đến lá tiếp theo, và cứ thế cho cả năm lá. Nếu cả năm lá trùng, chia pot. Đây là thứ còn lại khi một cú bluff bị call và không trúng gì.

---

## Thùng phá sảnh là gì — khác thùng phá sảnh hoàng gia ở đâu?

Thùng phá sảnh là năm lá *liên tiếp* **và** *cùng chất* — hai điều kiện phải cùng lúc thỏa, như 9♥ 8♥ 7♥ 6♥ 5♥. Thùng phá sảnh hoàng gia chỉ là trường hợp đặc biệt cao nhất của nó: đúng A-K-Q-J-10 cùng chất. Trong tiếng Việt, một chữ «thùng phá sảnh» hay được dùng cho cả hai, nên khi cần phân biệt, hãy thêm «hoàng gia» cho phiên bản A cao nhất. Khi hai thùng phá sảnh gặp nhau, tay có lá cao nhất cao hơn thắng.

Hãy nhìn board **8♥ 7♥ 6♥ Q♠ 3♦** để thấy chỗ dễ nhầm:

- Cầm **K♥ 2♥** → năm lá cơ của bạn là K-8-7-6-2. Không liên tiếp — đó ==chỉ là thùng thường, không phải thùng phá sảnh==.
- Cầm **10♥ 9♥** → năm lá cơ là 10-9-8-7-6. Liên tiếp *và* cùng chất — ==g:thùng phá sảnh có 10 cao nhất==.

---

## Thứ tự bài poker tiếng Việt và tiếng Anh: tên nào ứng với tên nào?

Mười tay bài có tên tiếng Việt quen thuộc ở bàn poker Việt Nam và tên tiếng Anh dùng trong app, stream và luật quốc tế. Bảng dưới xếp theo đúng thứ tự từ mạnh nhất đến yếu nhất để bạn đối chiếu khi đọc tài liệu hoặc xem stream tiếng Anh.

| # | Tiếng Việt | Tiếng Anh |
|:---|:---|:---|
| 1 | Thùng Phá Sảnh Hoàng Gia | Royal flush |
| 2 | Thùng Phá Sảnh | Straight flush |
| 3 | Tứ Quý | Four of a kind (quads) |
| 4 | Cù Lũ | Full house (boat) |
| 5 | Thùng | Flush |
| 6 | Sảnh | Straight |
| 7 | Sám Cô | Three of a kind (trips / set) |
| 8 | Hai Đôi | Two pair |
| 9 | Một Đôi | One pair |
| 10 | Mậu Thầu | High card |

Hai tên gọi khác bạn sẽ nghe ở bàn: sám cô còn gọi là bộ ba, mậu thầu còn gọi là bài cao.

---

## Kicker (lá phụ) và thế hòa trong poker quyết định ra sao?

![Showdown poker — so sánh tay bài 5 lá mạnh nhất của hai người chơi](/images/holdem-kicker-showdown-neutral.webp "Khi showdown, tay bài 5 lá mạnh nhất lấy pot")

Khi hai người chơi cùng hạng tay bài, người thắng được quyết định bằng cách so các lá tạo nên tay bài trước, rồi đến **kicker** — lá phụ không thuộc tổ hợp chính — sẽ phân định khi mọi thứ khác bằng nhau. Đây là phần định đoạt những pot thật — và cũng là phần mà phần lớn bảng xếp hạng bỏ qua. Hãy đi đúng thứ tự này:

1. **So hạng tay bài.** Thùng luôn thắng sảnh, cù lũ luôn thắng thùng, và cứ thế.
2. **So các lá tạo nên tay bài.** Đôi A thắng đôi K; thùng có Q cao nhất thắng thùng có J cao nhất.
3. **So kicker.** Nếu tổ hợp chính bằng nhau, các lá còn lại phân định, từng lá một từ cao xuống.
4. **Vẫn giống hệt? Chia pot.** Chất bài không bao giờ phân định khi hòa.

Huy hiệu bên phải cho biết **kicker có được dùng để phân định hay không**.

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

**Kicker** đơn giản là lá nằm trong 5 lá mạnh nhất nhưng không thuộc tổ hợp chính (đôi, hai đôi, sám cô, tứ quý) của bạn, dùng để phân định khi hòa. Với A-A-K đấu A-A-Q, cả hai đều có đôi A — kicker K thắng. Vì vậy người chơi giỏi rất quan tâm đến *chất lượng* các lá cao của mình, không chỉ chuyện có ghép đôi hay không. Để xem quy tắc phân định khi hòa của mọi tay bài ở một chỗ, đọc [hướng dẫn kicker và so bài cùng hạng](/vi/blog/holdem-tiebreak-rules); khi 5 lá mạnh nhất giống hệt nhau, pot được [chia](/vi/blog/holdem-split-pot-rules).

---

## Đọc bài chung (board): 3 bài toán thực chiến

![Board K-K-K-A-2 trên bàn poker — bạn có nhìn ra cù lũ trước dealer không?](/images/holdem-hand-rankings-board-puzzle.webp "Bài toán đọc board poker — tìm tay bài 5 lá mạnh nhất của bạn")

Biết thứ tự không giống với đọc nó nhanh. Đây là ba tình huống thật. Che đáp án lại, tìm 5 lá mạnh nhất trong 7 lá, rồi kiểm tra.

### Bài toán 1 — cù lũ ẩn

:::hand[A♠,A♦,K♥,K♣,Q♠] Board (5 lá):::

Bạn cầm **Q♥ Q♦**. Tay bài mạnh nhất của bạn là gì?

→ Board đã hiện hai đôi (A-A và K-K). Hai lá Q của bạn cộng Q♠ trên board tạo thành **bộ ba Q**, và cùng với đôi A trên board bạn có **cù lũ — QQQ + AA**. Đó là 5 lá mạnh nhất của bạn. Ván home game đầu tiên tôi làm dealer, tôi đã thấy hai người khác nhau muck (úp bài bỏ) đúng tay này vì nghĩ "AAKK + Q chỉ là hai đôi" — không phải. Một khi bạn có bộ ba và board còn thêm một đôi riêng, bạn lấy cù lũ. **Cù lũ thắng hai đôi.**

### Bài toán 2 — thùng lớn hơn bạn tưởng

:::hand[7♥,8♥,9♥,10♥,J♠] Board (5 lá):::

Bạn cầm **6♥ 2♣**. Board có bốn lá cơ.

→ 6♥ của bạn là lá cơ thứ năm, nên bạn nghĩ "thùng". Nhưng hãy nhìn chuỗi: **10♥ 9♥ 8♥ 7♥ 6♥** là năm lá cơ *liên tiếp* — **thùng phá sảnh có 10 cao nhất**, tay bài #2. (Đổi 6♥ thành K♥ thì các lá cơ là 7-8-9-10-K — không còn liên tiếp, nên tụt xuống thùng thường có K cao nhất.) Luôn kiểm tra xem các lá thùng của bạn có *liên tiếp* không trước khi mặc định đó chỉ là thùng.

### Bài toán 3 — khi phải chia pot

:::hand[K♠,K♦,K♥,A♠,2♠] Board (5 lá):::

Bạn cầm **A♥ 3♣**. Board đã có sẵn bộ ba K.

→ A♥ của bạn ghép với A♠ trên board, cho bạn **KKK + AA, một cù lũ**. Nhưng nếu đối thủ cũng cầm một lá A đơn lẻ — và không phải lá K cuối cùng — họ có *cùng* cù lũ và hai bên chia pot. Chỉ hai thứ còn thắng được bạn: đôi A trên tay (A-A) tạo cù lũ lớn hơn (cù lũ A kèm K), và lá K cuối cùng (K♣) tạo tứ quý K bất kể lá còn lại là gì — A♠ trên board đã là kicker của họ. Nếu họ không có A cũng không có lá K đó, cù lũ của bạn thắng. (Tương tự, khi chính board là cù lũ cũng không phải lúc nào cũng chia pot — một đôi trên tay có thể thành tứ quý hoặc cù lũ cao hơn.) Bài học: khi board làm gần hết việc, sức mạnh tay bài của bạn thường chỉ phụ thuộc vào đúng một lá bài tẩy.

---

## Trong poker bài nào to nhất, bài nào ăn bài nào?

Câu trả lời ngắn cho những cuộc tranh cãi nổ ra ở mọi bàn: thùng thắng sảnh, cù lũ thắng thùng, tứ quý thắng cù lũ, và wheel (A-2-3-4-5) là sảnh *thấp nhất*, không bao giờ là cao nhất. Dưới đây là những cặp đấu người ta nhầm nhiều nhất.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Cặp đấu | Thắng | Vì sao |
|------|------|------|
| Thùng vs Sảnh | **Thùng** | #5 thắng #6 |
| Cù Lũ vs Thùng | **Cù Lũ** | #4 thắng #5 |
| Sám Cô vs Hai Đôi | **Sám Cô** | #7 thắng #8 |
| Sảnh vs Sám Cô | **Sảnh** | #6 thắng #7 |
| A-2-3-4-5 vs 10-J-Q-K-A | **Broadway (A cao nhất)** | Wheel là sảnh thấp nhất |
| Cùng đôi, kicker K vs kicker J | **Kicker K** | Kicker cao hơn thắng |
| Tứ Quý vs Cù Lũ | **Tứ Quý** | #3 thắng #4 |

</div>

---

## Vì sao thứ tự bài poker lại xếp như vậy?

Thứ hạng không hề tùy tiện — nó ==thuần túy là xác suất==. ==g:**Tay bài càng khó tạo thành từ năm lá thì xếp càng cao.**== Thùng thắng sảnh đơn giản vì nó khó tạo thành hơn: trong bộ 52 lá, có ít cách rút được năm lá cùng chất (3,03% tay bài bảy lá tính đến river) hơn là năm lá liên tiếp ở bất kỳ chất nào (4,62%) — bài [thùng và sảnh cái nào lớn hơn](/vi/blog/holdem-flush-vs-straight) đi sâu vào đúng cặp này. Chỉ một nguyên tắc này giải thích toàn bộ hệ thống thứ bậc — xem con số chính xác trong [bảng xác suất poker](/vi/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp").

Nó cũng giải thích ngoại lệ lớn bạn sẽ gặp: trong **Short Deck (6+) Hold'em**, nơi các lá 2 đến 5 bị bỏ, thùng trở nên khó hơn cù lũ — nên ở thể thức đó ==r:**thùng thắng cù lũ**==. Toán đổi thì thứ tự đổi. Khác biệt giữa các thể thức ở bên dưới.

---

## Làm sao nhìn ra tay bài trong 1 giây?

![Đồ họa board có đôi 9♥ Q♥ 9♠ 8♣ 7♠ — đọc các đôi và sảnh có thể có để tìm 5 lá mạnh nhất](/images/holdem-hand-rankings-board-read.webp "Cách đọc board poker nhanh — chất, sảnh, đôi theo thứ tự")

Khi đồng hồ đếm ngược, hãy quét theo thứ tự này mỗi khi board đã đủ lá:

**1. Chất trước** — board có ba lá trở lên cùng chất không? Nếu có, ==thùng là khả thi==. Nhìn chất của bạn.

**2. Rồi đến liên kết** — có các lá gần nhau về giá trị (như 8-9-10) không? Nếu có, ==đối thủ có thể đang cầm sảnh==.

**3. Đôi sau cùng** — board có đôi không? ==r:Nếu có, cù lũ và tứ quý đang trong cuộc, và thùng hay sảnh của bạn có thể gặp nguy.==

Tôi vẫn chạy đúng phép quét này — thùng, rồi sảnh, rồi đôi — trên từng board một, bất kể đã ngồi bao nhiêu giờ. Nguy hiểm trước (thùng/sảnh trên board), rồi đến chuyện board có đôi không (thứ đe dọa mọi tay bài). Tạo thói quen này và bạn sẽ thôi call vội ở river. Muốn kiểm tra lại một ván cụ thể, [máy tính xác suất poker](/vi/calculator) làm việc đó thay bạn: khi board đủ, máy cho biết người thắng và tay bài thắng, hoặc báo chia pot.

---

## Làm sao nhớ thứ tự bài poker nhanh nhất?

Cách nhanh nhất để nhớ thứ tự bài poker là thôi coi chúng như mười mục rời rạc: học theo ba nhóm (Đỉnh, Giữa, Thường), chỉ luyện các cặp dễ nhầm, rồi gọi tên người thắng khi xem stream poker trước khi dealer công bố. Đây là kế hoạch ba bước.

| Bước | Làm gì | Thời gian |
|------|------|------|
| **1** | Học ba nhóm: Đỉnh (#1–3), Giữa (#4–6), Thường (#7–10) | 1 ngày |
| **2** | Chỉ luyện các cặp dễ nhầm: thùng vs sảnh, cù lũ vs thùng | 3 ngày |
| **3** | Xem stream poker và gọi tên người thắng trước khi dealer công bố | 1–2 tuần |

Nhóm lại trước giúp thứ tự không còn là mười thứ rời rạc. Các cặp dễ nhầm ở bước 2 gây ra 90% lỗi của người mới, nên hãy luyện thật kỹ.

---

## Thứ hạng tay bài có giống nhau ở mọi thể thức poker không?

Phần lớn là có — cùng thứ tự mười tay bài này dùng chung cho Texas Hold'em, Omaha và Seven-Card Stud. Ngoại lệ chính là Short Deck (6+), nơi thùng thắng cù lũ, và luật của Omaha buộc bạn dùng đúng hai lá bài tẩy. Đây là so sánh giữa các biến thể phổ biến.

| Thể thức | Thứ hạng | Khác biệt chính |
|------|------|------|
| **Texas Hold'em** | Chuẩn (bài này) | Dùng 0–2 lá bài tẩy tùy ý |
| **Omaha** | Chuẩn | Bắt buộc dùng *đúng* 2 trong 4 lá bài tẩy |
| **Seven-Card Stud** | Chuẩn | Không có bài chung (trừ trường hợp hiếm: một lá cuối dùng chung khi bộ bài không đủ lá) |
| **Short Deck (6+)** | Có điều chỉnh | Thùng thắng cù lũ; A-6-7-8-9 là sảnh thấp nhất (lá A vẫn chơi thấp, và vì các lá 2–5 đã bị bỏ nên nó nối với lá 6) |

Kết luận: học thứ tự chuẩn một lần là dùng được ở gần như mọi thể thức. Chỉ cần nhớ luật "đúng hai lá" của Omaha và việc thùng được nâng hạng trong Short Deck.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-flush-vs-straight | Thùng và sảnh cái nào lớn hơn? | /images/holdem-flush-vs-straight-hero.webp
/vi/blog/holdem-tiebreak-rules | So bài poker khi cùng hạng | /images/holdem-tiebreak-hero.webp
:::

## Câu hỏi thường gặp

**Q. Thùng (flush) gồm những lá nào?**

A. Thùng là năm lá bất kỳ cùng chất — ví dụ A♦ J♦ 8♦ 6♦ 2♦ — không cần theo thứ tự. Nó xếp #5, trên sảnh và dưới cù lũ. Khi hai người cùng có thùng, lá cao nhất cao hơn thắng; chất bài không bao giờ phân định khi hòa.

**Q. Cù lũ trong poker là gì?**

A. Cù lũ (full house, còn gọi là "boat") là sám cô cộng một đôi, như Q-Q-Q-5-5. Nó xếp #4, thắng thùng và sảnh. Giữa hai cù lũ, bộ ba cao hơn quyết định trước — nên QQQ-55 thắng JJJ-99 bất kể đôi lớn cỡ nào.

**Q. Sảnh (straight) gồm những lá nào?**

A. Sảnh là năm lá có giá trị liên tiếp với chất lẫn lộn, như 7-6-5-4-3. Nó xếp #6. Lá A có thể chơi cao (10-J-Q-K-A, "Broadway") hoặc thấp (A-2-3-4-5, "the wheel"), nhưng lá A chỉ được dùng ở một trong hai đầu — Q-K-A-2-3 không phải sảnh.

**Q. Thùng xếp trên hay dưới sảnh trong thứ tự bài poker?**

A. Trên. Thùng là #5 và sảnh là #6, nên thùng luôn thắng — xem [vì sao thùng lại ăn sảnh](/vi/blog/holdem-flush-vs-straight). Nó xếp cao hơn vì năm lá cùng chất về mặt thống kê khó tạo hơn năm lá liên tiếp.

**Q. Có cù lũ gặp thùng thì ai thắng?**

A. Cù lũ thắng. Cù lũ (#4) thắng thùng (#5) và sảnh. Nó chỉ thua cù lũ cao hơn, tứ quý, thùng phá sảnh hoặc thùng phá sảnh hoàng gia.

**Q. Bài nào lớn hơn sảnh trong poker?**

A. Thùng, cù lũ, tứ quý, thùng phá sảnh hoặc thùng phá sảnh hoàng gia đều thắng sảnh — và sảnh cao hơn cũng vậy. Sảnh (#6) vẫn thắng sám cô, hai đôi, một đôi và mậu thầu.

**Q. Trên thùng còn những tay bài nào?**

A. Cù lũ, tứ quý, thùng phá sảnh và thùng phá sảnh hoàng gia đều thắng thùng. Gặp thùng khác, lá cao nhất cao hơn thắng. Thùng (#5) vẫn thắng sảnh và mọi tay bài bên dưới.

**Q. Bài nào lớn hơn cù lũ trong poker?**

A. Chỉ ba tay bài thắng cù lũ: tứ quý, thùng phá sảnh và thùng phá sảnh hoàng gia. Cù lũ cao hơn cũng thắng — và bộ ba được so trước đôi, nên KKK-22 thắng QQQ-AA.

**Q. Có bài nào lớn hơn thùng phá sảnh hoàng gia không?**

A. Không. Thùng phá sảnh hoàng gia (A-K-Q-J-10 cùng chất) là tay bài mạnh nhất có thể trong poker. Nó không thể bị đánh bại — "thế hòa" duy nhất là khi thùng phá sảnh hoàng gia nằm trọn trên board cho mọi người dùng chung, khi đó chia pot.

**Q. Thùng phá sảnh nào lớn nhất?**

A. Thùng phá sảnh hoàng gia — chính là thùng phá sảnh có A cao nhất (A-K-Q-J-10 cùng chất). Ngoài nó ra, chỉ thùng phá sảnh cao hơn mới thắng được một thùng phá sảnh; thùng phá sảnh (#2) thắng tứ quý và mọi tay bài bên dưới.

**Q. Kicker (lá phụ) dùng để làm gì?**

A. Kicker là lá nằm trong 5 lá mạnh nhất nhưng không thuộc tổ hợp chính của bạn, dùng để phân định khi hòa. Khi hai người có cùng một đôi, kicker cao nhất thắng. Kicker tốt nhất có thể là lá A.

**Q. Hai người có thể có tay bài giống hệt nhau không?**

A. Có. Nếu 5 lá mạnh nhất của cả hai trùng giá trị, pot được chia (chop). Chất bài không bao giờ phân định khi hòa trong Texas Hold'em.

**Q. Có bắt buộc dùng cả hai lá bài tẩy không?**

A. Trong Hold'em thì không — bạn tạo 5 lá mạnh nhất từ bất kỳ tổ hợp nào giữa hai lá bài tẩy và năm lá bài chung, kể cả không dùng lá nào. (Omaha thì khác: bắt buộc dùng đúng hai lá.)

**Q. Set và trips khác nhau ở đâu?**

A. Cả hai đều là sám cô. *Set* là cầm đôi trên tay + 1 lá trên board (giấu rất kín); *trips* là 1 lá trên tay + board có đôi (dễ đọc hơn). Set ăn được nhiều chip hơn.

**Q. Bài mạnh nhất trong poker là gì?**

A. Thùng phá sảnh hoàng gia (A-K-Q-J-10 cùng chất). Không thể bị đánh bại — thế hòa duy nhất là khi thùng phá sảnh hoàng gia nằm trọn trên board, mọi người dùng chung và chia pot.

**Q. Sám cô với 2 đôi cái nào lớn hơn?**

A. Sám cô. Sám cô là #7 và hai đôi là #8, nên sám cô thắng. Hai đôi chỉ thắng một đôi và mậu thầu.

**Q. Thùng phá sảnh có lớn hơn tứ quý không?**

A. Có. Thùng phá sảnh (#2) thắng tứ quý (#3) — năm lá liên tiếp cùng chất xếp trên bốn lá cùng giá trị. Trên thùng phá sảnh chỉ còn thùng phá sảnh cao hơn và thùng phá sảnh hoàng gia, vốn chỉ là phiên bản có A cao nhất của nó.

**Q. Bài yếu nhất trong poker là gì?**

A. Xét tay bài năm lá, tệ nhất có thể là 7-5-4-3-2 khác chất ("7 cao nhất"). Đó là mậu thầu thấp nhất không tạo thành đôi, sảnh hay thùng — tay bài "không có gì" kinh điển. Trong Hold'em, vì bạn dùng 5 lá mạnh nhất trong 7 lá, tay bài yếu nhất bạn thực sự có thể có khi kết thúc là 9-8-7-5-4 (từ 9-8-7-5-4-3-2 khác chất).

**Q. Trong poker có 3 đôi không?**

A. Không. Trong Hold'em, tay bài luôn là năm lá, nên nhiều nhất chỉ chứa hai đôi. Nếu bài tẩy và board cho bạn ba đôi trong bảy lá, chỉ hai đôi cao nhất được tính vào tay bài — một lá của đôi thứ ba vẫn có thể làm kicker nếu đó là lá cao nhất còn lại, nhưng không bao giờ thành tay bài "ba đôi".

**Q. Lá A có thể tính là 1 không?**

A. Có. Lá A chơi cả cao lẫn thấp, nên A-2-3-4-5 (wheel) là sảnh hợp lệ — sảnh thấp nhất có thể. Nhưng lá A chỉ được dùng ở một trong hai đầu, không nối vòng: K-A-2-3-4 không phải sảnh.

**Q. Cù lũ tiếng Anh là gì?**

A. Cù lũ tiếng Anh là "full house", ở bàn còn gọi là "boat" hay "full boat". Khi đọc tên, người ta nói bộ ba trước rồi đến đôi: QQQ55 là "cù lũ Q kèm 5" (tiếng Anh: "queens full of fives").

**Q. Sám cô ăn sảnh không?**

A. Không. Sảnh (#6) xếp trên sám cô (#7), nên sảnh thắng. Sám cô chỉ thắng hai đôi, một đôi và mậu thầu.

**Q. Xác suất ra thùng phá sảnh hoàng gia là bao nhiêu?**

A. Nếu được chia ngẫu nhiên 5 lá, xác suất là 1 trên 649.740 (0,000154%). Trong Hold'em, tính cả bảy lá đến river, xác suất là 1 trên 30.940 (0,0032%) — tức "khoảng một lần mỗi 31.000 ván" như đã nói ở trên. Con số đầy đủ cho mọi tay bài nằm trong bài [xác suất poker](/vi/blog/holdem-probability).

---

## Những điều cần nhớ

1. **Thứ tự:** thùng phá sảnh hoàng gia > thùng phá sảnh > tứ quý > cù lũ > thùng > sảnh > sám cô > hai đôi > một đôi > mậu thầu.
2. **Cái bẫy:** thùng (#5) thắng sảnh (#6) — và bất kỳ board có đôi nào cũng có thể giấu một cù lũ thắng cả hai.
3. **Thực tế:** phần lớn pot được thắng bằng một đôi hoặc mậu thầu, nên kicker của bạn đáng giá hơn bạn tưởng.

Học thứ tự trong một buổi chiều, luyện các cặp dễ nhầm, và chạy phép quét thùng → sảnh → đôi trên mỗi board. Làm vậy thì bạn sẽ không bao giờ đẩy pot nhầm phía nữa.

Khi đã nắm thứ hạng, bước tiếp theo tự nhiên là biết nên bắt đầu với tay bài nào — xem [bài khởi đầu nên chơi theo vị trí trong Texas Hold'em](/vi/blog/holdem-starting-hands-chart) để biết chính xác nên chơi lá bài tẩy nào từ mỗi ghế.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">So sánh tay bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thùng và sảnh cái nào lớn hơn?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Toán học, những chỗ đọc nhầm và mọi quy tắc khi hòa</div>
  </a>
  <a href="/vi/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">So bài cùng hạng</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">So bài poker khi cùng hạng</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Cùng một đôi — ai thắng? Luật kicker và chia pot</div>
  </a>
  <a href="/vi/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chia pot</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Khi nào chia pot trong poker?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Luật chop và 5 tình huống hòa được giải thích</div>
  </a>
  <a href="/vi/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Hướng dẫn người mới</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Luật chơi Texas Hold'em cho người mới</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Toàn bộ luật từ chia bài đến showdown</div>
  </a>
  <a href="/vi/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Bài khởi đầu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bài khởi đầu nên chơi theo vị trí</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Nên chơi lá bài tẩy nào từ UTG đến button</div>
  </a>
  <a href="/vi/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Đọc bài chung</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cách đọc bài chung (board) trong Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tìm 5 lá mạnh nhất trong 7 lá — board ướt vs board khô</div>
  </a>
</div>
`.trim(),
};
