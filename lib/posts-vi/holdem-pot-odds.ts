import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-pot-odds",
  title: "Pot odds là gì? Cách tính pot odds (tỷ lệ pot) trong 10 giây ở bàn poker",
  seoTitle: "Call này có lời không? — Pot odds poker là gì và cách tính",
  desc: "Đừng call bằng hy vọng nữa. Cách tính pot odds trong 10 giây: công thức tiền call ÷ (pot + tiền call), bảng theo cỡ bet, và chỗ của implied odds.",
  tldr: "Để tính pot odds, bạn chia số tiền phải call cho tổng pot sau khi call. Call $50 vào pot $150 là 50 ÷ 200 = 25%, nên bạn cần ít nhất 25% equity thì lần call này mới có lời.",
  category: "odds",
  date: "2026-10-09",
  updated: "2026-10-09",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "12 phút",
  emoji: "🧮",
  image: "/images/holdem-pot-odds-hero.webp",
  imageAlt: "Bàn tay người chơi đẩy chip về pot giữa bàn trên nỉ xanh — khoảnh khắc một quyết định pot odds được đưa ra",
  tags: ["pot odds", "pot odds là gì", "cách tính pot odds", "pot odds trong poker", "pot odds vs equity", "bảng pot odds", "tỷ lệ pot poker", "equity cần có để call"],
  content: `
Từ đắt giá nhất trong poker là "hy vọng". Năm đầu tôi call bet ở turn chỉ vì flush draw của mình *có thể* về ở river, và tôi chảy máu chip vì thế. Đêm mọi thứ sáng ra là một lần call $50 vào pot $150 — lần đó tôi chịu tính toán, nhận ra mình chỉ cần 25% để hòa vốn, và từ đó không bao giờ nhìn một lần call như trước nữa.

==Pot odds là mẩu toán duy nhất tách biệt call theo cảm giác với call có lý do.== Học mất năm phút, luyện vài buổi là thành tự động. Hướng dẫn này cho bạn ==g:phương pháp 10 giây==, một bảng theo cỡ bet bạn có thể hình dung ngay tại bàn, và điều phần lớn người chơi làm sai: pot odds, equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) và implied odds thực sự khớp với nhau thế nào.

Các con số đằng sau draw (bài chờ) của bạn đến từ [bảng xác suất poker](/vi/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") — hướng dẫn này là cách bạn biến những con số đó thành một lần call hay fold đúng.

---

### Pot odds trong một cái nhìn

:::stripe
25% | Equity cần có trước bet nửa pot
33% | Equity cần có trước bet bằng pot
tiền call ÷ (pot + tiền call) | Toàn bộ công thức
:::

---

## Pot odds là gì trong poker?

**Pot odds (tỷ lệ pot) là mức giá bạn được chào để tiếp tục chơi.** Chúng so cỡ pot với cỡ cú bet bạn phải call (pot : tiền call) — phần thưởng so với rủi ro. Đổi sang phần trăm, equity cần có = tiền call chia cho pot sau khi cộng cả tiền call đó.

Giả sử pot là $150 và bạn phải call $50. Bạn được chào ==$150 để thắng với rủi ro $50== — bạn đang "được tỷ lệ 3:1", dân chơi hay nói "bỏ 1 ăn 3". Pot càng lớn so với tiền call, giá càng tốt, và bạn càng ít cần thắng để lần call đáng giá.

Con số "cần thắng bao nhiêu lần" đó là toàn bộ vấn đề. Được 3:1 nghĩa là lần call tự hoàn vốn nếu bạn thắng chỉ **25% số lần** trở lên. Pot odds biến câu "có nên call không?" mơ hồ thành một mục tiêu cứng: *tôi có thắng đủ thường xuyên để vượt mức giá này không?*

---

## Cách tính pot odds từng bước: tiền call chia cho pot cuối cùng

> **Trả lời nhanh**
> Tính pot cuối cùng trước, gồm cả cú bet bạn đang đối mặt và tiền call của chính bạn, rồi lấy tiền call chia cho tổng đó. Kết quả là phần trăm equity hòa vốn. Giữ thời điểm của pot nhất quán: tiền đã nằm trong pot hiện tại không được cộng thêm lần thứ hai.

:::steps
Cộng pot cuối cùng | Pot hiện tại + cú bet + tiền call của bạn. Ví dụ: pot $100 + bet $50 + bạn call $50 = $200
Lấy tiền call chia cho pot cuối cùng đó | $50 ÷ $200 = 0,25
Đó là equity cần có của bạn | Bạn cần thắng ít nhất 25% số lần để call có lời
So với equity thật của bạn | Flush draw với 9 outs sạch ≈ 35% trúng khi còn hai lá và không còn vòng cược nào → 35% thắng 25% → ==g:call==
:::

Vậy thôi. **Equity cần có = tiền call ÷ pot cuối cùng.** Nếu khả năng thắng thật của bạn lớn hơn con số đó, call sẽ kiếm tiền về lâu dài — ngay cả khi bạn thua ván này nhiều hơn thắng.

> **Quy tắc duy nhất xóa mọi nhầm lẫn**
> Luôn cộng tiền call của chính bạn vào pot cuối cùng. "Được 3:1" và "cần 25%" mô tả *cùng* một tình huống — tỷ lệ là giá, phần trăm là mục tiêu. Phần lớn lỗi của người mới đến từ việc trộn hai cách viết; hãy chọn phần trăm và đừng nhìn lại.

---

## Pot odds dạng tỷ lệ và phần trăm: 3:1 = 25%

> **Trả lời nhanh**
> Tỷ lệ pot odds so số tiền bạn có thể thắng với tiền call bạn mạo hiểm; phần trăm cho biết rủi ro đó phải thành công bao nhiêu lần. Ở 4:1, bạn mạo hiểm một đơn vị để thắng bốn, nên phải thắng một lần trong năm: 20%. Phần thưởng lớn hơn cho cùng một tiền call sẽ hạ phần trăm hòa vốn.

Quy đổi chỉ một bước: tỷ lệ **X:1** nghĩa là bạn cần **1 ÷ (X + 1)** theo phần trăm.

| Bạn đang được… | Equity cần có |
|:---|:---:|
| 1:1 | 50% |
| 2:1 | 33% |
| 2,5:1 | 28,6% |
| 3:1 | 25% |
| 4:1 | 20% |
| 5:1 | 16,7% |
| 6:1 | 14,3% |

Quy luật rất trực quan: pot càng áp đảo tiền call, miếng bánh bạn cần để biện minh cho lần call càng nhỏ.

---

## Bạn cần bao nhiêu equity để call?

> **Trả lời nhanh**
> Bet nửa pot đòi 25% equity để call; bet bằng pot đòi 33%, và bet gấp đôi pot đòi 40%. Mục tiêu phụ thuộc vào cỡ bet so với pot, không phải số đô la. Hãy tính mục tiêu đó trước, rồi đánh giá tay bài của bạn trước range đang chào bạn mức giá ấy.

![Ba thanh chia pot cuối cùng thành pot, bet và tiền call của bạn — bet nửa pot cần 25% equity, bet bằng pot 33%, bet 2× pot 40%](/images/holdem-pot-odds-required-equity.webp "Equity cần có phụ thuộc hoàn toàn vào cỡ cú bet bạn đối mặt")

Hãy ghi nhớ bảy mốc này để định giá lần call trước khi quyết định tay bài của mình đã đủ mạnh chưa:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Đối thủ bet | Bạn đang được | Equity cần có |
|:---|:---:|:---:|
| ¼ pot | 5:1 | 16,7% |
| ⅓ pot | 4:1 | 20% |
| ½ pot | 3:1 | 25% |
| ⅔ pot | 2,5:1 | 28,6% |
| ¾ pot | 2,3:1 | 30% |
| Bằng pot | 2:1 | 33% |
| 2× pot | 1,5:1 | 40% |

</div>

Ngay cả một **overbet 2× pot khổng lồ cũng chỉ đòi 40% equity**. Bạn gần như không bao giờ cần là bên có lợi thế để call có lời — một cách đọc sai phổ biến khiến người ta fold những lần call đúng. Bet càng lớn, bạn càng cần nhiều equity, nhưng nó tăng chậm hơn phần lớn người chơi nghĩ.

---

## Bảng pot odds: draw nào đấu lại được cỡ bet nào?

> **Trả lời nhanh**
> Một draw có đáp được giá hay không phụ thuộc cả vào số outs sạch lẫn số lá mà lần call này mua được. Khả năng hai lá của flush draw cao hơn nhiều so với khả năng một lá. Hãy dùng đúng cột cho quyết định thực tế, và đừng coi việc chỉ tạo đôi hay ra thùng là thắng chắc.

[Đếm **outs**](/vi/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") của bạn trước khi dùng bảng. Dòng hai overcard (lá cao hơn board) 6 outs giả định tạo đôi với lá nào cũng thắng; hãy chiết khấu những lá tạo đôi mà vẫn thua các tay nhiều khả năng của đối thủ.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw của bạn | Outs | Khả năng trúng, 1 lá (turn → river) | Khả năng trúng, 2 lá (flop → river) |
|:---|:---:|:---:|:---:|
| Thùng + sảnh hở hai đầu | 15 | 32,6% | 54,1% |
| Flush draw | 9 | 19,6% | 35,0% |
| Sảnh hở hai đầu | 8 | 17,4% | 31,5% |
| Hai overcard | 6 | 13,0% | 24,1% |
| Gutshot (sảnh hở giữa) | 4 | 8,7% | 16,5% |

</div>

Hãy đọc nó cùng bảng cỡ bet phía trên. Đối mặt ==bet nửa pot (cần 25%)==: nếu cú bet đẩy bạn vào all-in để bạn thấy cả hai lá, flush draw (35%) là một lần call rõ ràng — nhưng chỉ với *một* lá từ flop (9 ÷ 47), cũng draw đó chỉ còn 19,1%, **không** đáp được giá nếu đứng riêng. Khoảng trống đó chính là chỗ implied odds bước vào.

---

## Pot odds vs equity vs implied odds: khác nhau ở đâu?

> **Trả lời nhanh**
> Pot odds đặt giá, equity đo phần kỳ vọng của bạn, còn implied odds ước lượng tiền thắng thêm về sau. Hãy bắt đầu với hai thứ đầu. Chỉ tính một khoản trả về tương lai khi còn chip để thắng và có đối thủ nhiều khả năng sẽ trả; hoàn thành một tay bài mạnh thứ nhì có thể ngược lại làm bạn tốn thêm.

:::compare
Thuật ngữ | Nghĩa là gì
Pot odds | Mức giá: tiền call ÷ pot cuối cùng = equity bạn *cần*
Equity | Phần pot kỳ vọng của bạn ngay lúc này — những ván bạn thắng cộng phần của bạn khi chia pot
Implied odds | Số chip *thêm* bạn kỳ vọng thắng ở các vòng cược sau nếu trúng
:::

**Pot odds so với [equity](/vi/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp")** là quyết định cốt lõi: call khi equity của bạn vượt pot odds. [**Implied odds**](/vi/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") (tỷ lệ cược ngầm — tiền có thể thắng thêm ở các vòng sau) là yếu tố phân định cho những draw vừa hụt giá. Nếu flush draw của bạn cần 25% nhưng chỉ có 19,6% ở lá river, bạn vẫn có thể call *nếu* bạn sẽ moi được đủ bet thêm khi trúng để bù phần chênh. Đó là lý do bạn có thể call một cú bet ở flop với draw mà vẫn có lời, và lý do stack sâu làm draw đáng giá hơn.

Mặt trái là **reverse implied odds** — số chip bạn *mất* khi trúng mà vẫn thua ván (thùng của bạn về, nhưng board có đôi và ai đó cầm cù lũ). Những draw hạng nhì âm thầm rỉ máu tiền, và đó là lý do [nut flush draw — draw tới thùng mạnh nhất — đáng giá hơn hẳn một flush draw bé](/vi/blog/holdem-starting-hands-chart).

---

## Quy tắc 4 và 2: đổi outs thành odds nhanh đến mức nào?

> **Trả lời nhanh**
> Dùng quy tắc 4 và 2 để ước lượng xem một draw có gần mức giá của lần call hay không. Bốn lần số outs xấp xỉ cho hai lá, hai lần số outs xấp xỉ cho một lá. Trước khi chọn hệ số, hãy hỏi liệu lần call hiện tại có đưa bạn tới river mà không phải trả thêm; một quyết định sát nút xứng đáng với bảng chính xác.

- **Ở flop, khi còn hai lá:** nhân outs với **4**.
- **Ở turn, khi còn một lá:** nhân outs với **2**.

Flush draw là 9 outs. Ở flop: 9 × 4 = **36%** (giá trị thật 35,0% — trúng phóc). Ở turn: 9 × 2 = **18%** (giá trị thật 19,6% — đủ sát để quyết định).

:::tip[Phiên bản ×4 ngầm giả định bạn sẽ thấy *cả hai* lá còn lại mà không có thêm vòng cược — điều chỉ được bảo đảm khi không thể có cú bet nào nữa (bạn đã all-in, hoặc đã call một cú all-in). Nếu còn vòng cược phía trước, hãy dựa vào con số ×2 (một lá) cho vòng bạn đang đứng, và để implied odds biện minh cho phần còn lại.]:::

Cách suy ra từng draw và từng tay bài đã thành hình nằm trong [bảng xác suất](/vi/blog/holdem-probability). Ở đây, mẹo nhẩm là tất cả những gì bạn cần.

---

## Người mới hay tính sai pot odds ở đâu?

> **Trả lời nhanh**
> Những lỗi pot odds tốn tiền là dùng sai pot cuối cùng, đếm cả những lá vẫn thua, và mua một lá bằng ước lượng hai lá. Tiền tương lai cũng có thể là tưởng tượng: stack sâu không bảo đảm sẽ được trả. Hãy kiểm tra riêng rẽ giá, outs sạch và vòng cược còn lại trước khi call một draw.

Tôi đã mắc từng lỗi này trước khi chúng làm tôi cháy túi. Hãy để mắt tới chúng:

:::card
🧮 | Quên cộng tiền call của mình vào pot | Equity cần có là tiền call ÷ pot *cuối cùng* — hãy tính cả chip của chính bạn sắp bỏ vào, nếu không bạn sẽ phóng đại equity cần có và fold những lần call nên call
🃏 | Đếm cả outs bẩn (dirty outs) | Một lá thùng đồng thời làm board có đôi có thể cho ai đó cù lũ. Hãy chiết khấu outs "bẩn" trước khi tin vào con số
🚀 | Dùng sai quy tắc nhân 4 | ×4 chỉ áp dụng khi bạn sẽ thấy cả hai lá miễn phí (all-in). Đối mặt bet ở turn, đó là ×2 — dùng ×4 sẽ dụ bạn vào những lần call thua
💸 | Bỏ qua implied odds và reverse implied odds | Stack sâu tưởng thưởng tay bài chờ; một draw không phải nuts (tay bài mạnh nhất có thể trên board này) mà về đúng lúc gặp tay lớn hơn là cái bẫy, không phải ngày lĩnh tiền
🎯 | Call bằng hy vọng | "Có thể nó sẽ về" không phải lý do. Nếu equity của bạn không vượt pot odds (cộng implied odds), đó là fold

:::

### Một ván thực tế từ đầu đến cuối

Tôi cầm ==b:A♥ K♥== trên flop ==Q♥ 7♥ 2♣== — nut flush draw, 9 outs. Pot là $100, đối thủ bet $50. Pot odds của tôi: đang được 3:1, nên tôi cần **25%**. Nếu được xem cả hai lá tôi ở khoảng 35% — nhưng lần call này chỉ mua lá turn, và riêng turn là 19,1%, hụt giá. Thứ lấp khoảng trống là implied odds: nếu một lá cơ rơi xuống, tôi lấy trọn stack của một tay top pair. ==g:Call dễ.==

Turn là lá 3♠ — một lá brick (lá trượt — không giúp draw của tôi). Pot là $200 và đối thủ shove $200 — bet bằng pot, nên giờ tôi chỉ được 2:1 và cần **33%**. Nhưng **còn một lá, thùng của tôi chỉ là 19,6%** (tôi chỉ đếm 9 lá cơ — trước một cú shove bằng pot, tạo đôi Át hay đôi K thường vẫn thua, nên các overcard không phải outs sạch). Giá trực tiếp bảo fold; implied odds của tôi giờ bằng không vì đối thủ đã all-in và không thể trả thêm. Trước những set (cầm đôi trên tay + 1 lá trên board) và hai đôi thường shove ở turn brick thế này, 19,6% là trường hợp tốt nhất — trước một set, lá 2♥ và 3♥ làm board có đôi và lấp đầy cù lũ cho họ, chỉ còn 7 outs sạch (7 trong 46 lá chưa thấy, khoảng 15,2%) — và ngay cả khi vài tay top pair lọt vào range của họ, các overcard chỉ kéo lần call lên khoảng hòa vốn. ==r:Fold== — và đúng cái chỗ "hy vọng" từng khiến tôi mất cả stack.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-probability | Bảng xác suất poker 7 lá | /images/holdem-probability-hero.webp
/vi/blog/holdem-starting-hands-chart | Bài khởi đầu nên chơi theo vị trí | /images/holdem-starting-hands-chart-hero.webp
:::

## Câu hỏi thường gặp

**Q. Có cách nào tính pot odds nhanh ngay tại bàn không?**

A. Lấy số tiền bạn phải call chia cho tổng pot *sau khi* bạn call. Call $50 vào pot $150 là 50 ÷ 200 = 25% — đó là equity bạn cần. Nếu khả năng thắng của bạn — chỉ tính trên những lá mà lần call này cho bạn xem — vượt con số đó, hãy call.

**Q. Có tính tiền call của mình vào pot odds không?**

A. Có. Công thức equity cần có dùng pot *cuối cùng*, tức bao gồm cả tiền call của chính bạn. Call $50 vào pot $150 nghĩa là pot cuối cùng $200, nên 50 ÷ 200 = 25%. Bỏ tiền call của mình ra ngoài là lỗi phổ biến nhất của người mới.

**Q. Tính cỡ pot như thế nào cho đúng?**

A. Pot là mọi chip đã nằm giữa bàn cộng mọi cú bet ở vòng cược hiện tại. Trước khi tính pot odds, hãy cộng pot ban đầu với cú bet của đối thủ — rồi cộng tiền call của chính bạn vào pot *cuối cùng*. Ví dụ: pot $100, bet $50 và tiền call $50 của bạn tạo thành pot cuối cùng $200.

**Q. Pot odds thế nào là tốt?**

A. Càng cao càng tốt — bạn sẽ thích "được 5:1" (chỉ cần 16,7%). Nhưng "tốt" là tương đối so với tay bài của bạn: được 2:1 (cần 33%) hợp với một flush draw sạch chỉ khi bạn chắc chắn sẽ thấy cả hai lá (all-in, hoặc không còn vòng cược — 35%); nó không đáp được giá nếu lần call chỉ mua một lá (19,1% từ flop, 19,6% từ turn); và nó tệ hại với gutshot. Luôn so giá với equity của bạn.

**Q. Đổi tỷ lệ pot odds sang phần trăm bằng cách nào?**

A. Tỷ lệ X:1 trở thành 1 ÷ (X + 1) theo phần trăm. Vậy 3:1 = 1 ÷ 4 = 25%; 4:1 = 1 ÷ 5 = 20%. Phần trăm là thứ bạn so với khả năng thắng của mình.

**Q. Pot odds và implied odds khác nhau ở điểm gì?**

A. Pot odds chỉ tính chip đang nằm trong pot lúc này. Implied odds cộng thêm số chip *thêm* bạn kỳ vọng thắng ở các vòng cược sau nếu hoàn thành tay bài. Implied odds cho phép bạn call có lời một số draw mà riêng pot odds bảo fold — miễn là stack đủ sâu để trả cho bạn.

**Q. Bet bằng pot cho đối thủ pot odds bao nhiêu?**

A. Bet bằng pot cho người phải call tỷ lệ 2:1, nên cần 33% equity để call. Bet nửa pot cho 3:1 (cần 25%); overbet 2× pot cho 1,5:1 (cần 40%). Bet càng lớn đòi càng nhiều equity, nhưng mức tăng rất nhỏ: overbet 2× pot đòi 40%, overbet 3× khoảng 43%, overbet 5× khoảng 45% — và không có cú bet nào, dù lớn đến đâu, đòi hơn 50%.

**Q. Nên bet bao nhiêu phần pot?**

A. Cỡ bet (bet sizing) là mặt lật của pot odds — cú bet của bạn đặt ra mức giá mà đối thủ nhận được. Bet nửa pot cho họ 3:1 (họ cần 25%), bet bằng pot cho 2:1 (họ cần 33%), và overbet đòi nhiều hơn nữa. Hãy bet lớn hơn trên board nhiều draw để không cho tay bài chờ một lần call có lời; bet nhỏ lại khi bạn muốn một tay yếu hơn call để ăn value. Các cỡ bet thông dụng chạy từ ⅓ pot đến bằng pot tùy board và mục tiêu của bạn.

**Q. Quy tắc 4 và 2 giúp gì khi tính pot odds?**

A. Đó là mẹo nhẩm biến outs sạch thành khả năng trúng draw: nhân outs với 4 ở flop (còn hai lá) hoặc với 2 ở turn (còn một lá). Chín outs thùng ≈ 36% ở flop, 18% ở turn. Chỉ dùng ×4 khi bạn sẽ thấy cả hai lá mà không có thêm vòng cược.

**Q. Tôi cần bao nhiêu equity để call một cú bet?**

A. Đúng bằng pot odds của bạn tính theo phần trăm: tiền call ÷ pot cuối cùng. Trước bet nửa pot bạn cần 25%; trước bet bằng pot, 33%. Với một draw, hãy đếm outs sạch, quy đổi bằng quy tắc 4 và 2 theo số lá mà lần call này thực sự mua, và call khi khả năng đó vượt mốc — hoặc khi implied odds bù được phần chênh.

**Q. Equity nên cao hơn hay thấp hơn pot odds?**

A. Cao hơn. Pot odds cho biết equity bạn *cần* để call (tiền call ÷ pot cuối cùng); equity là phần pot kỳ vọng của bạn. Bạn call khi equity *cao hơn* con số cần có đó và fold khi thấp hơn — trừ khi implied odds lấp được khoảng trống (tiền bạn sẽ thắng ở các vòng sau khi trúng). Nếu bet nửa pot cần 25% và flush draw sạch của bạn có 35% (còn hai lá — bạn sẽ thấy turn và river mà không có thêm vòng cược), thì 35% > 25% → một lần call có lời.

---

## Những điều cần nhớ

1. **Công thức:** equity cần có = tiền call ÷ pot cuối cùng (đã gồm tiền call). Nửa pot = 25%, bằng pot = 33%.
2. **Phép so:** call khi equity vượt pot odds. Với draw, outs × 4 hoặc × 2 ước lượng nó — chỉ đếm outs sạch, và dùng ×2 khi còn vòng cược phía trước.
3. **Yếu tố phân định:** implied odds cứu những draw vừa hụt giá — nhưng chỉ khi còn chip phía sau để thắng và có đối thủ nhiều khả năng sẽ trả; draw tới nuts làm khoản trả đó an toàn hơn.

Làm việc này vài trăm lần và nó không còn là toán nữa mà thành bản năng. Bạn sẽ fold những lần call vô vọng, call những lần có lời, và ngừng trả "thuế hy vọng". Từ đây, hãy mài sắc các con số thô đằng sau mỗi draw trong [bảng xác suất poker](/vi/blog/holdem-probability), hoặc bảo đảm bạn vào pot với những tay đáng để chờ bằng [bài khởi đầu nên chơi theo vị trí](/vi/blog/holdem-starting-hands-chart).

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất & toán</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bảng xác suất poker 7 lá</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Mọi tay bài, flop và draw — những con số đằng sau mức giá</div>
  </a>
  <a href="/vi/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Bài khởi đầu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bài khởi đầu nên chơi theo vị trí</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vào pot với những tay đáng để chờ</div>
  </a>
  <a href="/vi/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Đọc board</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cách đọc board trong Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Đếm outs bằng cách nhận ra mọi draw</div>
  </a>
  <a href="/vi/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cash game vs giải đấu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tournament hay Cash Game?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao implied odds sâu hơn trong cash game</div>
  </a>
</div>
`.trim(),
};

export default POST;
