import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-hand-rankings",
  title: "Thứ hạng các tay bài poker trong Texas Hold'em — từ mạnh nhất đến yếu nhất, kèm xác suất",
  seoTitle: "Tưởng thắng mà lại thua pot? — Thứ hạng tay bài poker",
  desc: "Đã có Thùng (flush) mà vẫn thua pot? Gần như luôn vì một quy tắc bị bỏ sót. Đây là 10 tay bài poker từ mạnh nhất đến yếu nhất, xác suất thực của từng tay, và cách kicker cùng thế hòa quyết định người thắng.",
  tldr: "Thứ hạng các tay bài poker từ mạnh nhất đến yếu nhất là: Thùng Phá Sảnh Hoàng Gia, Thùng Phá Sảnh, Tứ Quý, Cù Lũ, Thùng, Sảnh, Sám Cô, Hai Đôi, Một Đôi, và Mậu Thầu.",
  category: "hand-rankings",
  date: "2026-06-09",
  updated: "2026-06-09",
  keepImagesInBody: true,
  readTime: "14 phút",
  emoji: "🃏",
  tags: ["tay bài poker", "thứ hạng bài poker", "thứ tự bài poker", "tay bài texas holdem", "bài nào thắng trong poker", "kicker poker", "luật hòa bài poker", "tay bài poker mạnh nhất"],
  content: `
Bạn đang đấu tay đôi ở vòng river. Bạn đã ăn Thùng (flush), chắc chắn đây là tay mạnh nhất — rồi dealer đẩy pot về phía bên kia. Bàn đã có đôi, đối thủ cầm Cù Lũ (full house), và bạn hoàn toàn không lường trước.

Hầu hết những khoảnh khắc "tưởng mình thắng" đều quy về cùng một điều: không đọc **thứ hạng tay bài poker** đủ nhanh. Thứ tự thì học trong năm phút là xong. Cái khó là đọc nó ngay tại bàn, dưới áp lực, với một bàn có đôi hoặc liên kết — và điều đó hiếm khi được giải thích cho ra hồn.

Hướng dẫn này giải quyết cả hai. Bạn sẽ có thứ tự đầy đủ kèm xác suất thực, toàn bộ quy tắc hòa, ba bài toán đọc bàn thực tế để luyện "tìm năm lá tốt nhất của bạn", và một quy trình 1 giây để đọc bất kỳ bàn nào.

---

## Thứ hạng tay bài poker: danh sách đầy đủ

Bắt đầu từ đây. Đây là toàn bộ thứ hạng, từ mạnh nhất đến yếu nhất, kèm xác suất xấp xỉ để tạo thành mỗi tay bài tính đến river trong Texas Hold'em.

| # | Tay bài | Còn gọi là | Là gì | Xác suất (đến river) |
|------|------|------|------|------|
| **1** | Thùng Phá Sảnh Hoàng Gia | "Royal Flush" | A-K-Q-J-10 cùng chất | 0,0032% |
| **2** | Thùng Phá Sảnh | "Steel wheel" (A-5) | 5 lá liên tiếp, cùng chất | 0,0279% |
| **3** | Tứ Quý | "Four of a kind" | Bốn lá cùng giá trị | 0,168% |
| **4** | Cù Lũ | "Full house" | Sám Cô + một đôi | 2,60% |
| **5** | Thùng | "Flush" | 5 lá cùng chất | 3,03% |
| **6** | Sảnh | "Straight" | 5 lá liên tiếp, khác chất | 4,62% |
| **7** | Sám Cô | "Set" / "Trips" | Ba lá cùng giá trị | 4,83% |
| **8** | Hai Đôi | "Two pair" | Hai đôi khác nhau | 23,5% |
| **9** | Một Đôi | "Pair" | Hai lá cùng giá trị | 43,8% |
| **10** | Mậu Thầu | "Bài cao" | Không có gì cả | 17,4% |

> **Quy tắc kết thúc mọi tranh cãi**
> Một Đôi và Mậu Thầu cộng lại chiếm khoảng 61% tất cả các tay bảy lá tính đến river. Các tay lớn có vẻ phổ biến vì chúng đáng nhớ — nhưng phần lớn pot được định đoạt bởi một đôi và một kicker.

:::quiz:::

---

## Độ mạnh của lá bài: nền tảng trong 30 giây

Trước khi nói về tay bài, bạn cần độ mạnh của lá. Chỉ hai điều.

### Thứ tự giá trị (từ cao đến thấp)

**A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2**

Át là lá mạnh nhất và cũng là lá duy nhất phá luật: nó chơi cao (A-K-Q-J-10) và chơi thấp (A-2-3-4-5, "the wheel"). Nhưng không thể vòng qua giữa: Q-K-A-2-3 **không** phải Sảnh.

### Chất bài không có giá trị

Trong Texas Hold'em chuẩn, **không có chất nào thắng chất nào**. Bích không thắng cơ. Chất chỉ quan trọng để *tạo thành* Thùng, không bao giờ dùng để phá thế hòa. Nếu hai người chơi có cùng năm lá nhưng khác chất, pot được chia — luôn luôn.

---

## Giải thích 10 tay bài poker

### #1 — Thùng Phá Sảnh Hoàng Gia

:::hand[A♠,K♠,Q♠,J♠,10♠] Thùng Phá Sảnh Hoàng Gia — A-K-Q-J-10 chất bích:::

**A♠ K♠ Q♠ J♠ 10♠** — thùng phá sảnh cao nhất và là tay bài mạnh nhất trong poker.

Không thể bị đánh bại; thế hòa duy nhất có thể xảy ra là khi cả năm lá của một Thùng Phá Sảnh Hoàng Gia nằm hết trên bàn cho mọi người dùng chung, khi đó chia pot. Nó xuất hiện khoảng một lần mỗi 31.000 tay, nên nhiều người chơi nhiều năm chưa từng có. Khi có, nhiệm vụ duy nhất của bạn là đẩy càng nhiều chip vào càng tốt.

### #2 — Thùng Phá Sảnh

:::hand[9♥,8♥,7♥,6♥,5♥] Thùng Phá Sảnh — năm lá cơ liên tiếp:::

**9♥ 8♥ 7♥ 6♥ 5♥** — năm lá liên tiếp, tất cả cùng chất.

Chỉ thua thùng phá sảnh cao hơn hoặc Royal Flush. Phiên bản thấp nhất, A-2-3-4-5 cùng chất, gọi là "steel wheel". Nếu hai thùng phá sảnh đụng nhau, tay có lá cao hơn thắng.

### #3 — Tứ Quý

:::hand[8♣,8♦,8♥,8♠,K♥] Tứ Quý — bốn lá 8 + kicker:::

**8♣ 8♦ 8♥ 8♠ K♥** — cả bốn lá cùng giá trị.

Giữa hai Tứ Quý, giá trị cao hơn thắng. Nếu cả bốn lá nằm *trên bàn*, **kicker** cao nhất quyết định — và Át là vua.

### #4 — Cù Lũ

:::hand[Q♠,Q♥,Q♦,5♣,5♠] Cù Lũ — ba con Q + hai con 5:::

**Q♠ Q♥ Q♦ 5♣ 5♠** — một Sám Cô cộng một đôi.

So **Sám Cô trước**: QQQ55 thắng JJJ99 vì Q cao hơn J, bất kể đôi lớn cỡ nào. Chỉ khi Sám Cô bằng nhau mới so đến đôi.

> **"Cooler" phổ biến nhất**
> Mỗi khi bàn có đôi, hãy tìm Cù Lũ trước khi cam kết với Thùng hay Sảnh. "Thùng đầu của tôi thua Cù Lũ" là cú bad beat thường gặp nhất trong Hold'em.

### #5 — Thùng

:::hand[A♦,J♦,8♦,6♦,2♦] Thùng — năm lá rô:::

**A♦ J♦ 8♦ 6♦ 2♦** — năm lá cùng chất, bất kể thứ tự.

Hai Thùng được so từng lá từ cao xuống: A-J-8-6-2 thắng A-J-8-5-2 vì 6 cao hơn 5. Bốn lá cùng chất **không** phải Thùng: bạn cần năm lá.

### #6 — Sảnh

:::hand[7♠,6♥,5♣,4♦,3♠] Sảnh — năm lá liên tiếp, khác chất:::

**7♠ 6♥ 5♣ 4♦ 3♠** — năm lá liên tiếp, chất hỗn hợp.

- **Cao nhất:** A-K-Q-J-10 ("Broadway") là Sảnh cao nhất.
- **The wheel:** A-2-3-4-5 là thấp nhất (Át chơi thấp).
- **Cấm:** không thể vòng qua — K-A-2-3-4 không phải Sảnh.

Giữa hai Sảnh, tay có lá cao hơn thắng.

### #7 — Sám Cô (set / trips)

:::hand[J♣,J♠,J♥,A♦,4♠] Sám Cô — ba con J + kicker:::

**J♣ J♠ J♥ A♦ 4♠** — ba lá cùng giá trị.

Có hai cách tạo thành, và sự khác biệt rất quan trọng:

- **Set:** một đôi trên tay cộng một lá trên bàn (ví dụ bạn cầm J♣ J♠ và bàn ra J♥). Kín đáo và nguy hiểm.
- **Trips:** một đôi trên bàn cộng một lá của bạn. Dễ bị đối thủ đọc hơn và dễ bị chia hơn.

Set ăn được nhiều chip hơn vì không ai ngờ tới.

### #8 — Hai Đôi

:::hand[10♠,10♥,8♣,8♦,A♠] Hai Đôi — đôi 10 và đôi 8 + kicker Át:::

**10♠ 10♥ 8♣ 8♦ A♠** — hai đôi khác nhau.

So theo thứ tự này: **đôi cao → đôi thấp → kicker**. KK99-A thắng QQJJ-A vì K cao hơn Q trước khi xét bất cứ thứ gì khác.

### #9 — Một Đôi

:::hand[K♠,K♦,9♥,6♣,2♠] Một Đôi — đôi K + ba kicker:::

**K♠ K♦ 9♥ 6♣ 2♠** — hai lá cùng giá trị.

Tay bài hoàn chỉnh phổ biến nhất trong Hold'em. Hai đôi giống nhau được phân định bằng kicker: **giá trị đôi → kicker 1 → kicker 2 → kicker 3**, từ cao xuống thấp. Đây là nơi xảy ra phần lớn những thất bại "cùng một tay": hãy để ý kicker của bạn.

### #10 — Mậu Thầu

:::hand[A♣,Q♠,9♥,5♦,3♣] Mậu Thầu — không có tổ hợp:::

**A♣ Q♠ 9♥ 5♦ 3♣** — không gì liên kết.

Khi lật bài, lá cao nhất thắng, rồi đến lá tiếp theo, và cứ thế cho cả năm lá. Nếu cả năm lá trùng, chia pot. Đây là thứ còn lại khi một cú tố lừa bị theo và không thành.

---

## Kicker và thế hòa thực sự hoạt động ra sao

![Lật bài poker — so sánh năm lá tốt nhất của hai người chơi](/images/holdem-hand-rankings-showdown.webp "Khi lật bài, tay năm-lá tốt nhất lấy pot")

Đây là phần định đoạt những pot thật — và cũng là phần mà phần lớn các bảng xếp hạng bỏ qua. Khi hai người chơi có **cùng loại tay bài**, hãy theo đúng thứ tự này:

1. **So loại tay bài.** Thùng luôn thắng Sảnh, Cù Lũ luôn thắng Thùng, và cứ thế.
2. **So các lá tạo nên tay bài.** Đôi Át thắng đôi K; Thùng có Át thắng Thùng có J.
3. **So kicker.** Nếu tay bài hoàn chỉnh hòa nhau, các lá còn lại quyết định, từng lá một từ cao xuống.
4. **Vẫn giống hệt? Chia pot.** Chất bài không bao giờ phá thế hòa.

Huy hiệu bên phải cho biết **kicker có được dùng để định đoạt tay bài hay không**.

:::tiebreak
Thùng Phá Sảnh Hoàng Gia|Luôn hòa (chia pot)|-Không kicker
Thùng Phá Sảnh|Chỉ lá cao nhất|-Không kicker
Tứ Quý|Giá trị tứ quý → lá thứ 5|+Dùng kicker
Cù Lũ|Giá trị sám → đôi|-Không kicker
Thùng|Cả 5 lá, cao xuống thấp|+Dùng kicker
Sảnh|Chỉ lá cao nhất|-Không kicker
Sám Cô|Giá trị sám → 2 kicker|+Dùng kicker
Hai Đôi|Đôi cao → đôi thấp → kicker|+Dùng kicker
Một Đôi|Giá trị đôi → 3 kicker|+Dùng kicker
Mậu Thầu|Cả 5 lá, cao xuống thấp|+Dùng kicker
:::

**Kicker** chỉ đơn giản là một lá không thuộc tay bài hoàn chỉnh của bạn nhưng dùng để phá thế hòa. Với A-A-K đấu A-A-Q, cả hai đều có đôi Át — kicker K thắng. Vì vậy người chơi giỏi rất quan tâm đến *chất lượng* các lá cao của mình, không chỉ chuyện có ghép đôi hay không.

---

## Đọc bàn: 3 bài toán thực tế

Biết thứ tự không giống với đọc nó nhanh. Đây là ba tình huống thực. Che đáp án lại, tìm năm lá tốt nhất trong bảy lá, rồi kiểm tra.

### Bài toán 1 — Cù Lũ ẩn

:::hand[A♠,A♦,K♥,K♣,Q♠] Bàn (5 lá):::

Bạn cầm **Q♥ Q♦**. Tay bài tốt nhất của bạn là gì?

→ Bàn đã hiện Hai Đôi (A-A và K-K). Hai con Q của bạn cộng Q♠ trên bàn tạo thành **Sám Cô Q**, và cùng với đôi Át trên bàn bạn có **Cù Lũ — QQQ + AA**. Đó là năm lá tốt nhất của bạn. Người mới kẹt ở chỗ "AAKK + Q chẳng phải chỉ là Hai Đôi sao?" — không. Một khi bạn có Sám Cô, bạn lấy Cù Lũ. **Cù Lũ thắng Hai Đôi.**

### Bài toán 2 — Thùng mà thật ra mạnh hơn

:::hand[7♥,8♥,9♥,10♥,J♠] Bàn (5 lá):::

Bạn cầm **K♥ 2♣**. Bàn có bốn lá cơ.

→ K♥ của bạn là lá cơ thứ năm, nên bạn nghĩ "Thùng". Nhưng nhìn chuỗi: **K♥ 10♥ 9♥ 8♥ 7♥** là năm lá cơ *liên tiếp* — một **Thùng Phá Sảnh đầu K**, tay #2. Luôn kiểm tra xem các lá Thùng của bạn có liên kết không trước khi mặc định đó chỉ là Thùng.

### Bài toán 3 — Khi buộc phải chia

:::hand[K♠,K♦,K♥,A♠,2♠] Bàn (5 lá):::

Bạn cầm **A♥ 3♣**. Bàn đã có sẵn Sám Cô K.

→ A♥ của bạn ghép với A♠ trên bàn và cho bạn **Cù Lũ, KKK + AA**. Nhưng nếu đối thủ cũng cầm một con Át đơn lẻ, họ có *cùng* Cù Lũ và chia pot (chỉ đúng đôi Át trên tay, A-A, mới tạo được Cù Lũ lớn hơn — KKK + AA với Sám Cô là Át). Nếu họ không có Át mà chỉ một đôi nhỏ hơn, Cù Lũ của bạn thắng. Bài học: khi bàn làm gần hết việc, tay của bạn thường chỉ hơn được một lá.

---

## Câu trả lời nhanh cho những trận đối đầu hay gây tranh cãi

| Đối đầu | Thắng | Vì sao |
|------|------|------|
| Thùng vs Sảnh | **Thùng** | #5 thắng #6 |
| Cù Lũ vs Thùng | **Cù Lũ** | #4 thắng #5 |
| Sám Cô vs Hai Đôi | **Sám Cô** | #7 thắng #8 |
| Sảnh vs Sám Cô | **Sảnh** | #6 thắng #7 |
| A-2-3-4-5 vs 10-J-Q-K-A | **Broadway (Át cao)** | The wheel là Sảnh thấp nhất |
| Cùng đôi, kicker K vs J | **Kicker K** | Kicker cao hơn thắng |
| Tứ Quý vs Cù Lũ | **Tứ Quý** | #3 thắng #4 |

---

## Vì sao thứ tự lại như vậy

Thứ hạng không tùy tiện — nó thuần túy là xác suất. **Tay càng khó tạo thành thì xếp càng cao.** Trong bộ 52 lá, đơn giản là có ít cách tạo năm lá cùng chất hơn năm lá liên tiếp ở bất kỳ chất nào — nên Thùng đứng trên Sảnh. Chỉ một nguyên tắc này giải thích toàn bộ thứ hạng.

Nó cũng giải thích ngoại lệ lớn bạn sẽ gặp: trong **Short Deck (6+) Hold'em**, nơi bỏ các lá từ 2 đến 5, Thùng trở nên khó hơn Cù Lũ — nên ở thể thức đó **Thùng thắng Cù Lũ**. Toán học đổi, thứ tự đổi. Chi tiết về khác biệt giữa các thể thức ở bên dưới.

---

## Quy trình 1 giây đọc bàn

Khi đồng hồ chạy, hãy quét theo thứ tự này mỗi khi bàn đủ lá:

**1. Chất trước** — có ba lá trở lên cùng chất trên bàn không? Nếu có, Thùng là khả thi. Nhìn chất của bạn.

**2. Rồi đến liên kết** — có các lá gần nhau về giá trị (như 8-9-10) không? Nếu có, Sảnh còn sống.

**3. Cuối cùng là đôi** — bàn có đôi không? Nếu có, Cù Lũ và Tứ Quý đang trong cuộc, và Thùng hay Sảnh của bạn có thể gặp nguy.

Người chơi được luyện tập đọc bàn theo thứ tự này — nguy hiểm trước (Thùng/Sảnh trên bàn), rồi xem bàn có đôi không (điều đe dọa mọi thứ). Tạo thói quen này và bạn sẽ thôi theo bài bừa ở river.

---

## Ghi nhớ trong 3 bước

| Bước | Làm gì | Thời gian |
|------|------|------|
| **1** | Học ba nhóm: Đỉnh (#1-3), Giữa (#4-6), Thường (#7-10) | 1 ngày |
| **2** | Chỉ luyện các trận dễ nhầm: Thùng vs Sảnh, Cù Lũ vs Thùng | 3 ngày |
| **3** | Xem stream poker và gọi tên người thắng trước dealer | 1-2 tuần |

Nhóm lại trước giúp thứ tự không còn như mười thứ rời rạc. Các trận dễ nhầm ở bước 2 gây ra 90% lỗi của người mới, nên hãy luyện thật nhiều.

---

## Thứ hạng tay bài theo thể thức

Thứ tự này dùng chung cho gần như mọi biến thể poker, với vài điểm khác biệt quan trọng.

| Trò chơi | Thứ hạng | Khác biệt chính |
|------|------|------|
| **Texas Hold'em** | Chuẩn (hướng dẫn này) | Dùng 0-2 lá của bạn |
| **Omaha** | Chuẩn | Bắt buộc dùng *đúng* 2 trong 4 lá của bạn |
| **Seven-Card Stud** | Chuẩn | Không có lá chung |
| **Short Deck (6+)** | Có chỉnh sửa | Thùng thắng Cù Lũ; đôi khi A-6-7-8-9 được tính là Sảnh |

Kết luận: học thứ tự chuẩn một lần là dùng được trong gần như mọi trò. Chỉ cần nhớ quy tắc "đúng hai lá" của Omaha và việc Thùng được nâng hạng trong Short Deck.

---

## Câu hỏi thường gặp

**Q. Thùng có thắng Sảnh trong poker không?**

A. Có. Thùng là #5 và Sảnh là #6, nên Thùng luôn thắng. Nó xếp cao hơn vì năm lá cùng chất khó tạo hơn năm lá liên tiếp.

**Q. Cù Lũ có thắng Thùng không?**

A. Có. Cù Lũ (#4) thắng Thùng (#5) và Sảnh. Nó chỉ thua Tứ Quý, Thùng Phá Sảnh và Royal Flush.

**Q. Kicker là gì?**

A. Kicker là lá không thuộc tay bài hoàn chỉnh của bạn nhưng dùng để phá thế hòa. Với hai đôi giống nhau, lá phụ (kicker) cao nhất thắng. Kicker tốt nhất là Át.

**Q. Hai người chơi có thể có cùng tay bài không?**

A. Có. Nếu năm lá tốt nhất của cả hai trùng giá trị, pot được chia. Chất bài không bao giờ phá thế hòa trong Texas Hold'em.

**Q. Có bắt buộc dùng cả hai lá của mình không?**

A. Trong Hold'em, không — bạn tạo năm lá tốt nhất từ bất kỳ kết hợp nào giữa hai lá của bạn và năm lá chung, kể cả không dùng lá nào. (Omaha thì khác: bắt buộc dùng đúng hai lá.)

**Q. Set và trips khác nhau ra sao?**

A. Cả hai đều là Sám Cô. *Set* là một đôi trên tay cộng một lá trên bàn (giấu rất kín); *trips* là một đôi trên bàn cộng một lá của bạn (dễ đọc hơn). Set ăn được nhiều chip hơn.

**Q. Tay bài mạnh nhất trong poker là gì?**

A. Thùng Phá Sảnh Hoàng Gia (A-K-Q-J-10 cùng chất). Không thể bị đánh bại — "thế hòa" duy nhất là khi cả năm lá của một Thùng Phá Sảnh Hoàng Gia nằm hết trên bàn cho mọi người dùng chung, khi đó chia pot.

**Q. Sám Cô có mạnh hơn Hai Đôi không?**

A. Có. Sám Cô là #7 và Hai Đôi là #8, nên Sám Cô thắng. Hai Đôi chỉ thắng Một Đôi và Mậu Thầu.

---

## 3 điều cần nhớ

1. **Thứ tự:** Thùng Phá Sảnh Hoàng Gia > Thùng Phá Sảnh > Tứ Quý > Cù Lũ > Thùng > Sảnh > Sám Cô > Hai Đôi > Một Đôi > Mậu Thầu.
2. **Cái bẫy:** Thùng (#5) thắng Sảnh (#6) — và bất kỳ bàn có đôi nào cũng có thể giấu một Cù Lũ thắng cả hai.
3. **Thực tế:** phần lớn pot được thắng bằng một đôi hoặc bài cao, nên kicker của bạn đáng giá hơn bạn nghĩ.

Học thứ tự trong một buổi chiều, luyện các trận dễ nhầm, và chạy quét "chất → Sảnh → đôi" trên mỗi bàn. Làm vậy thì bạn sẽ không bao giờ đẩy pot về nhầm phía nữa.
`.trim(),
};
