import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-outs",
  title: "Outs trong poker là gì và cách tính outs cho mọi loại draw",
  seoTitle: "Bao nhiêu lá cứu được bạn? — Cách tính outs trong poker",
  desc: "Đếm outs là kỹ năng ít ai dạy trước. Cách tính outs trong poker: bảng outs từng loại draw, bảng đổi outs ra xác suất và các outs bẩn làm bạn mất tiền.",
  tldr: "Out là bất kỳ lá nào còn trong bộ bài giúp tay bạn mạnh lên thành tay nhiều khả năng thắng. Đếm số outs rồi quy đổi: nhân 4 ở flop hoặc nhân 2 ở turn để ra phần trăm trúng xấp xỉ. Flush draw có 9 outs, tức khoảng 36% đến river.",
  category: "odds",
  date: "2026-10-09",
  updated: "2026-10-09",
  masterUpdated: "2026-09-28",
  keepImagesInBody: true,
  readTime: "11 phút",
  emoji: "🎯",
  image: "/images/holdem-outs-hero.webp",
  imageAlt: "Đồ họa đếm outs — A♥ K♥ trước flop Q♠ J♦ 9♥, nơi bất kỳ lá 10 nào cũng hoàn thành sảnh nuts",
  tags: ["outs trong poker", "cách tính outs trong poker", "outs trong poker là gì", "bảng outs poker", "quy tắc 4 và 2 poker", "flush draw outs", "straight draw outs", "outs bẩn poker"],
  content: `
Năm đầu ở bàn, tôi "chơi draw" mà chưa bao giờ đếm chúng. Flush draw (chờ thùng) và gutshot (sảnh hở giữa) cảm giác như nhau — đều là "những lá có thể ra" — nên tôi call như nhau với cả hai và tự hỏi vì sao mình cứ thua. Cách chữa không phải một khóa học chiến thuật. Nó là một thói quen năm phút: ==dừng lại, và thực sự đếm những lá cứu được mình.==

Thói quen đó gọi là đếm **outs** — [câu trả lời thật của poker cho chuyện "đếm bài"](/vi/blog/holdem-card-counting "thumb:/images/holdem-card-counting-hero.webp") — và là kỹ năng duy nhất nằm dưới mọi quyết định về xác suất trong poker. Trước khi hỏi "lần call này có lời không?", bạn phải trả lời "bao nhiêu lá thắng ván này cho tôi?". Hướng dẫn này là nửa đếm — [bảng xác suất poker](/vi/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") là tài liệu tham chiếu đằng sau nó, còn [pot odds](/vi/blog/holdem-pot-odds) (tỷ lệ pot — pot so với số tiền phải call) là việc bạn làm với con số khi đã có nó.

---

### Outs trong một cái nhìn

:::stripe
9 | Outs của một flush draw
8 | Outs của sảnh hở hai đầu
×4 / ×2 | Nhân outs ở flop (còn hai lá) / ở turn để ra phần trăm xấp xỉ
:::

---

## Outs trong poker là gì?

**Out là bất kỳ lá nào còn trong bộ bài biến tay bạn thành tay nhiều khả năng thắng.** Nếu bạn cầm flush draw, mỗi lá cùng chất còn lại đều hoàn thành thùng — và mỗi lá là một out miễn là thùng đó thực sự thắng.

Chữ "nhiều khả năng" đang âm thầm gánh việc ở đây. Một out đúng nghĩa phải thực sự *thắng* ván, không chỉ cải thiện bài của bạn. Tạo đôi 10 khi board đã có thùng không phải out — bạn cải thiện, nhưng vẫn thua. Học đếm outs thực ra là học đếm những lá thắng, và bỏ qua những lá chỉ *trông* có ích.

Mọi thứ phía sau — equity (phần pot kỳ vọng của bạn, tính cả khi chia pot), [pot odds](/vi/blog/holdem-pot-odds), call hay fold — đều khởi đầu từ con số này. Đếm outs sai thì mọi phép tính sau đó cũng sai. Và khi đã biết số outs, [xác suất draw](/vi/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp") cho bạn biết chính xác mỗi draw về đích bao nhiêu lần.

---

## Cách tính outs từng bước: bạn đếm thế nào cho đúng?

> **Trả lời nhanh**
> Đếm những lá chưa lộ giúp bạn chạm tới tay bài mục tiêu, rồi loại các ứng viên vẫn để bạn bị thua. Bắt đầu từ tổng số lá cùng chất hoặc cùng giá trị và trừ đi những lá đã nhìn thấy. Mỗi lá vật lý chỉ tính một lần, kể cả khi nó hoàn thành hai draw khác nhau.

![Một người chơi cầm Át bích và K bích, đang nhìn flop ba lá thấp trên nỉ xanh và đếm outs overcard (lá cao hơn board) trước khi hành động](/images/holdem-outs-counting.webp "A-K trên flop thấp là tình huống đếm kinh điển — sáu outs overcard, cộng thêm các backdoor (cần cả turn và river)")

Đếm outs là một quy trình ba bước bạn chạy trên mỗi draw cho đến khi thành tự động:

:::steps
Gọi tên draw của bạn | Bạn đang chờ tay gì? Thùng, sảnh, đôi lớn hơn, set — hãy cụ thể về mục tiêu
Đếm những lá hoàn thành nó | Mỗi chất có 13 lá và mỗi giá trị có 4 lá. Trừ những lá bạn đã thấy (bài của bạn + board)
Gạt những lá giả | Gạch bỏ bất kỳ "out" nào hoàn thành tay bạn mà vẫn thua — một lá thùng làm board có đôi, một lá sảnh tặng ai đó sảnh cao hơn
:::

Lấy flush draw: 13 lá cùng chất tồn tại, bạn thấy được **bốn** (hai trên tay, hai trên board), nên ==g:13 − 4 = 9 outs==. Phép trừ đó — đếm những lá bạn *không thể* bắt vì đang cầm chúng rồi — là chỗ người mới trượt chân.

Việc đếm chỉ dùng những lá bạn nhìn thấy. Bạn không trừ bài chưa lộ của đối thủ; mọi lá chưa thấy đều được coi là còn sống. Đó là lý do các con số thô bên dưới giữ nguyên bất kể ai cầm gì — chúng là điểm xuất phát, trước khi bạn gạch outs bẩn ở phần sau.

---

## Bảng outs poker: mọi loại draw có bao nhiêu outs?

> **Trả lời nhanh**
> Các con số xuất phát tiêu chuẩn là chín cho flush draw, tám cho sảnh hở hai đầu và bốn cho gutshot. Draw kết hợp cần trừ phần trùng. Overcard và draw không phải nuts (tay bài mạnh nhất có thể trên board này) cần kiểm tra thêm: các con số này mô tả những lá cải thiện tay bạn, và chỉ những lá nhiều khả năng thắng mới đáng được tính trọn.

![Hai cách đếm draw cạnh nhau — mười ba lá bích với bốn lá bị gạch bên số 9 lớn, và một dãy sảnh hở hai đầu được đánh dấu ở cả hai đầu bên số 8 lớn](/images/holdem-outs-nine-and-eight.webp "Bên trái, flush draw; bên phải, sảnh hở hai đầu — hai con số outs mà mọi draw khác được đo theo")

Hãy dùng các con số thô này làm điểm xuất phát, rồi áp dụng các phép kiểm tra outs bẩn bên dưới:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw của bạn | Outs | Vì sao |
|:---|:---:|:---|
| Thùng + sảnh hở hai đầu | 15 | 9 thùng + 8 sảnh − 2 lá trùng — monster draw |
| Thùng + gutshot | 12 | 9 thùng + 4 gutshot − 1 lá trùng |
| Flush draw | 9 | 13 lá cùng chất − 4 lá bạn thấy |
| Sảnh hở hai đầu (OESD) | 8 | Bốn lá ở mỗi đầu |
| Hai overcard | 6 | Ba lá mỗi giá trị để tạo đôi |
| Một đôi → hai đôi hoặc trips | 5 | 3 lá tạo đôi với kicker (lá phụ) + 2 lá lên trips |
| Gutshot (sảnh hở giữa) | 4 | Chỉ một giá trị lấp được khe |
| Một overcard | 3 | Ba lá để tạo top pair |
| Pocket pair (đôi bài tẩy) → set | 2 | Hai lá cuối cùng cùng giá trị với bạn |

</div>

Hai draw kép (combo draw) ở đầu bảng là chỗ người chơi hay vấp phép cộng, nên chúng có mục riêng bên dưới. Phần còn lại chỉ là phép trừ thẳng: đếm số giá trị hay số lá cùng chất hoàn thành tay bạn, trừ đi những gì bạn thấy. (Để khỏi lẫn: set = cầm đôi trên tay + 1 lá trên board; trips = 1 lá trên tay + board có đôi.)

---

## Đổi outs thành xác suất: còn 1 lá hay còn 2 lá khác nhau bao nhiêu?

> **Trả lời nhanh**
> Chín outs trúng ở lá kế tiếp từ flop 19,1% số lần, hoặc trúng ít nhất một lần đến river 35,0% số lần. Con số thứ hai gồm hai cơ hội. Hãy chọn cột một lá khi chỉ định giá lá turn; cột hai lá giả định bạn sẽ thấy trọn runout.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Flop → turn (còn 1 lá) | Đến river (còn 2 lá) | Tỷ lệ bất lợi đến river (2 lá) |
|:---|:---:|:---:|:---:|
| 2 | 4,3% | 8,4% | 11:1 |
| 4 | 8,5% | 16,5% | 5:1 |
| 6 | 12,8% | 24,1% | 3,1:1 |
| 8 | 17,0% | 31,5% | 2,2:1 |
| 9 | 19,1% | 35,0% | 1,9:1 |
| 12 | 25,5% | 45,0% | 1,2:1 |
| 15 | 31,9% | 54,1% | 0,85:1 |

</div>

Hai con số quan trọng với mọi draw. **"Đến river"** tính cả hai lá còn lại và áp dụng khi không thể có thêm vòng cược — bạn đã all-in, hoặc đã call một cú all-in. **"Flop → turn"** chỉ tính lá kế tiếp (9 ÷ 47 = 19,1%; từ turn sang river thành 9 ÷ 46 = 19,6%) — hãy dùng nó ngay khi còn vòng cược phía trước, vì bạn chỉ được bảo đảm thấy từng lá một. Người mới trích con số "đến river" béo bở trong khi đối mặt bet ở turn, tự thuyết phục mình call, rồi trả giá.

Hãy để ý monster draw 15 outs: còn hai lá, nó hoàn thành 54,1% số lần — trước một đôi đơn, điều đó thường biến nó thành **bên có lợi thế**, draw hiếm hoi bạn có thể vui vẻ all-in ngay ở flop. Trước một set thì không: board có thể ra đôi và lấp đầy cù lũ cho set — ví dụ J♠ 10♠ trên 9♠ 8♣ 2♠ bên dưới chỉ khoảng 40% trước pocket 9 (lúc này đã là set).

---

## Quy tắc 4 và 2: nhẩm outs ra odds trong đầu như thế nào?

> **Trả lời nhanh**
> Khi đã có số outs sạch, nhân bốn ước lượng khả năng trúng qua hai lá; nhân hai ước lượng một lá. Các mẹo nhẩm này kém tin cậy dần khi draw càng lớn. Chúng ước lượng việc hoàn thành, nên nếu đã đếm cả một lá vẫn thua thì chọn đúng hệ số cũng không sửa được.

- **Ở flop (còn hai lá):** outs ×4 ≈ phần trăm trúng đến river.
- **Ở turn (còn một lá):** outs ×2 ≈ phần trăm trúng ở river.

Flush draw là 9 outs. Ở flop: 9 × 4 = **36%** (giá trị thật 35,0% — trúng phóc). Ở turn: 9 × 2 = **18%** (thật 19,6% — đủ sát để hành động).

:::tip[Mẹo ×4 ngầm giả định bạn sẽ thấy *cả hai* lá mà không có thêm vòng cược — chỉ được bảo đảm khi không thể có cú bet nào nữa (bạn đã all-in, hoặc đã call một cú all-in). Nếu có cú bet trước mặt, hãy dùng con số ×2 (một lá) cho vòng bạn đang thực sự đứng.]:::

Điểm yếu chính là **số outs lớn ở flop**. Phép tính hai lá chính xác tính việc trúng ở một trong hai vòng mà không đếm trùng lần trúng cả hai. Ước lượng ×4 bắt đầu hơi cao từ 7 outs, nhưng khoảng cách tăng theo draw càng lớn; phép hiệu chỉnh thường dùng bên dưới dành cho hơn 8 outs.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Quy tắc nói (×4) | Thật đến river | Lệch |
|:---|:---:|:---:|:---:|
| 8 | 32% | 31,5% | +0,5% |
| 9 | 36% | 35,0% | +1% |
| 12 | 48% | 45,0% | +3% |
| 15 | 60% | 54,1% | +6% |

</div>

Cách sửa gọn cho draw lớn: với **hơn 8 outs ở flop**, nhân 4 rồi trừ *(outs − 8)*. Với 15 outs: (15 × 4) − 7 = **53%**, gần như chính xác. Với các draw thường ngày từ 8 outs trở xuống, ×4 và ×2 đơn giản là đủ. Cách suy ra chi tiết nằm trong [bảng xác suất](/vi/blog/holdem-probability).

---

## Draw kép: vì sao 9 + 8 không phải 17 outs?

> **Trả lời nhanh**
> Flush draw cộng sảnh hở hai đầu có 15 lá hoàn thành khác nhau, không phải 17: hai lá sảnh đã thuộc chất của thùng. Flush draw cộng gutshot có 12 vì một lá trùng. Hãy đếm hợp của hai draw, rồi chiết khấu riêng những lá vẫn sẽ thua.

Giả sử bạn cầm ==b:J♠ 10♠== trên flop ==9♠ 8♣ 2♠==. Bạn có hai draw chồng lên nhau: flush draw (bích) và sảnh hở hai đầu (bất kỳ Q hay 7 nào tạo sảnh). Cộng ngây thơ thì được 9 + 8 = 17. Nhưng **Q♠ và 7♠** mỗi lá hoàn thành *cả* thùng *lẫn* sảnh — chúng đã nằm trong 9 outs thùng rồi. Hãy đếm chúng một lần:

- Outs thùng: **9** (mọi lá bích)
- Outs sảnh không phải bích: Q♥ Q♦ Q♣, 7♥ 7♦ 7♣ = **6**
- Tổng: **15 outs**, không phải 17

Cùng logic với **thùng + gutshot**: 9 outs thùng + 4 lá gutshot, nhưng một trong bốn lá đó là chất của bạn → 9 + 3 = **12**. Bất cứ khi nào hai draw dùng chung lá, hãy trừ phần trùng — một lá với thùng + gutshot, hai lá với thùng + sảnh hở hai đầu. Đây là cách phổ biến nhất khiến người chơi đếm dư, và là lý do các dòng draw kép trong bảng thấp hơn tổng đơn giản.

---

## Outs bẩn: lá nào chỉ trông giống chiến thắng?

> **Trả lời nhanh**
> Một out bẩn (dirty out) cải thiện tay bạn mà không chắc đưa bạn lên dẫn trước. Lá thùng trên board có đôi, thùng thấp trước flush draw cao hơn, và overcard trước tay bài đã mạnh đều cần xem xét kỹ. Hãy bắt đầu từ con số thô, rồi giảm theo những tay bài hợp lý của đối thủ, thay vì trả tiền cho mọi lần cải thiện như một lần thắng.

![Đồ họa board có đôi 10♠ 8♥ 4♠ 4♣ 6♦ tách outs sạch khỏi outs bẩn](/images/holdem-outs-dirty-outs.webp "Trên board có đôi, một số outs của bạn là bẩn — ra thùng vẫn có thể phải trả tiền cho cù lũ")

Ba tình huống để luyện mắt:

:::card
♠ | Thùng không phải nut | Cầm 8♠7♠ trên K♠9♠2♣, bạn có 9 "outs" bích — nhưng nếu một lá bích ra và đối thủ cũng đang chờ cùng thùng với lá bích cao hơn, bạn ra thùng mà vẫn thua. Hãy chiết khấu outs khi bạn không chờ nut flush
🂮 | Board có đôi | Flush draw trên board như J♥8♥8♣ trông như 9 outs sạch, nhưng board đã có đôi — một cù lũ có thể đang chờ sẵn, nên vài lá thùng của bạn chết ngay khi rơi xuống
🃁 | Overcard trước sức mạnh | Hai overcard (A-K trên Q-8-3) tính là 6 outs trên giấy, nhưng nếu một cú raise lớn gần như báo hiệu set hay hai đôi, tạo đôi Át thường không đủ tốt — tối đa đếm 3, không phải 6, và không đếm lá nào khi bạn đã chắc họ có set hay hai đôi
:::

Bạn hiếm khi biết chính xác mức chiết khấu, và thế là ổn. Động tác này mang tính định hướng: khi board hay hành động cho thấy một out có thể không thắng, hãy hạ con số *xuống* trước khi quy đổi. Người đếm 9 outs trên board có đôi rồi call cả pot đang trả nguyên giá cho một draw âm thầm đáng giá ít hơn thế. Đọc ra outs nào sạch là kỹ năng về kết cấu board — hãy xây nó với [cách đọc board](/vi/blog/holdem-reading-the-board).

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-pot-odds | Cách tính pot odds trong 10 giây | /images/holdem-pot-odds-hero.webp
/vi/blog/holdem-probability | Bảng xác suất poker 7 lá | /images/holdem-probability-hero.webp
:::

## Câu hỏi thường gặp

**Q. Outs trong poker là gì?**

A. Outs là những lá còn lại trong bộ bài giúp tay bạn cải thiện thành tay nhiều khả năng thắng. Flush draw có 9 outs (9 lá chưa lộ cùng chất với bạn); sảnh hở hai đầu có 8. Bạn đếm chúng để tính khả năng trúng và xem lần call có lời không.

**Q. 9 outs nghĩa là gì?**

A. Nghĩa là còn chín lá trong bộ bài có thể hoàn thành tay bạn — thường nhất là flush draw (13 lá cùng chất trừ 4 lá bạn thấy). Chín outs tương đương khoảng 35% trúng đến river từ flop — con số hai lá giả định không còn cú bet nào nhắm vào bạn — hay 19,1% ở riêng lá turn. Logic đúng với mọi con số: càng nhiều outs, khả năng trúng càng cao, và nhân outs với 4 ở flop (hoặc 2 ở turn) cho một phần trăm nhanh, xấp xỉ (×4 chạy cao với draw lớn: 15 outs là 54%, không phải 60%).

**Q. Làm thế nào để tính outs trong poker?**

A. Gọi tên tay bài bạn đang chờ, đếm bao nhiêu lá hoàn thành nó (13 lá mỗi chất, 4 lá mỗi giá trị), trừ những lá bạn đã thấy trên tay và trên board, rồi gạch bỏ bất kỳ outs "bẩn" nào vẫn thua. Flush draw là 13 − 4 = 9.

**Q. Flush draw có bao nhiêu outs?**

A. Chín. Mỗi chất có 13 lá; với hai trên tay và hai trên board bạn thấy được bốn, còn lại 9 lá chưa lộ hoàn thành thùng của bạn. Đó là khoảng 35% trúng đến river từ flop, hay 19,1% ở riêng lá kế tiếp nếu còn vòng cược phía trước.

**Q. Sảnh hở hai đầu có bao nhiêu outs?**

A. Tám — bốn lá ở mỗi đầu lấp sảnh. Gutshot (sảnh hở giữa) chỉ có 4 outs vì chỉ một giá trị lấp được khe. Double gutshot (sảnh hở hai khe) cũng có 8, bằng sảnh hở hai đầu.

**Q. Quy tắc 4 và 2 sai lệch bao nhiêu so với xác suất thật?**

A. Rất ít với draw thường ngày, nhiều hơn với draw lớn. Ở flop nhân outs với 4 cho khả năng trúng đến river, ở turn nhân 2 cho lá river: chín outs thùng ≈ 36% ở flop so với 35,0% thật, 18% ở turn so với 19,6%. Với 15 outs, ×4 nói 60% nhưng con số thật là 54,1% — lệch 6 điểm. Chỉ dùng ×4 khi bạn sẽ thấy cả hai lá mà không có thêm vòng cược.

**Q. Outs bẩn (dirty outs) là gì?**

A. Những lá hoàn thành tay bạn nhưng vẫn có thể thua — một lá thùng khi có thể có thùng lớn hơn, một lá sảnh cũng tạo cho ai đó sảnh cao hơn, hay overcard trước một set nhiều khả năng. Hãy chiết khấu (hoặc không đếm) outs bẩn trước khi quy đổi sang xác suất, nếu không bạn sẽ đánh giá equity của mình quá cao.

**Q. Flush draw kèm straight draw có bao nhiêu outs?**

A. 15, không phải 17. Flush draw là 9 outs và sảnh hở hai đầu là 8, nhưng hai lá sảnh cũng là chất của bạn và đã được đếm trong thùng — nên bạn trừ phần trùng. Mười lăm outs là bên có lợi thế để trúng đến river (khoảng 54%) — nhưng chỉ khi bạn sẽ thấy cả hai lá; nếu còn một cú bet ở turn, con số một lá 32% mới định giá lần call của bạn — và chỉ những outs thực sự thắng mới được tính vào cả hai con số.

**Q. Có tính cả bài của đối thủ khi đếm outs không?**

A. Không. Bạn chỉ trừ những lá bạn thực sự thấy — bài tẩy của bạn và board chung. Mọi lá chưa thấy khác được coi là còn sống, đó là lý do các con số thô (9 cho thùng, 8 cho sảnh hở hai đầu) giữ nguyên bất kể đối thủ cầm gì. Mỗi lá đó có thực sự thắng hay không vẫn phụ thuộc vào tay của họ — đó là phép kiểm tra outs bẩn.

---

## Những điều cần nhớ

1. **Đếm những lá thắng, không phải những lá cải thiện.** Một out phải tạo ra tay *mạnh nhất*, không chỉ tay mạnh hơn. Chỉ trừ những lá bạn thấy.
2. **Quy đổi bằng 4 và 2.** Outs × 4 ở flop, × 2 ở turn. Ở flop, hãy cắt ước lượng ×4 cho draw lớn (hơn 8 outs) bằng cách trừ *(outs − 8)*.
3. **Chiết khấu những lá bẩn.** Thùng không phải nut, board có đôi và overcard trước sức mạnh đều làm số outs thật của bạn co lại. Khi nghi ngờ, hãy đếm ít hơn.

Nắm chắc phép đếm và phần còn lại của toán poker tự rơi vào chỗ. Hãy mang thẳng số outs của bạn vào [cách tính pot odds](/vi/blog/holdem-pot-odds) để xem giá có đúng không, hoặc quay lại [bảng xác suất poker](/vi/blog/holdem-probability) để lấy con số chính xác đằng sau mọi draw.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất &amp; toán</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cách tính pot odds trong 10 giây</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Biến số outs thành call hay fold</div>
  </a>
  <a href="/vi/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất &amp; toán</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bảng xác suất poker 7 lá</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tài liệu tham chiếu đằng sau mọi draw</div>
  </a>
  <a href="/vi/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Đọc board</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cách đọc board trong Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Nhận ra mọi draw để bạn đếm outs sạch</div>
  </a>
  <a href="/vi/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Bài khởi đầu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bài khởi đầu nên chơi theo vị trí</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vào pot với những tay đáng để chờ</div>
  </a>
</div>
`.trim(),
};

export default POST;
