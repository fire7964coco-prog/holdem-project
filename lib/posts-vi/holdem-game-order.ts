import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-game-order",
  title: "Cách chơi Texas Hold'em: trình tự một ván từ blind đến showdown",
  seoTitle: "Đến lượt ai cược? — Trình tự chơi poker: flop, turn, river",
  desc: "Đến lượt ai — và ai cược trước? Toàn bộ trình tự chơi Texas Hold'em: blind, preflop, flop, turn, river, showdown và ai hành động trước ở mỗi vòng cược.",
  tldr: "Ở preflop, người ngồi bên trái big blind hành động trước. Ở flop, turn và river, người còn bài đầu tiên bên trái nút dealer đi trước — thường là small blind (heads-up thì đảo ngược). Một ván chạy theo thứ tự blind → bài tẩy → preflop → flop → turn → river → showdown, với tối đa bốn vòng cược.",
  category: "rules",
  date: "2026-06-10",
  updated: "2026-10-09",
  masterUpdated: "2026-10-01",
  keepImagesInBody: true,
  readTime: "16 phút",
  emoji: "🎬",
  image: "/images/blog-holdem-game-flow.webp",
  imageAlt: "Sơ đồ trình tự chơi Texas Hold'em — blind, preflop, flop, turn, river, showdown, cả sáu giai đoạn",
  tags: ["flop turn river", "trình tự chơi poker", "preflop flop turn river", "flop trong poker là gì", "river trong poker là gì", "người chia bài trong poker gọi là gì", "ai hành động trước trong poker"],
  content: `
Ai lần đầu ngồi vào một ván Texas Hold'em cũng hỏi đúng một câu: ==r:*"Khoan — đến lượt ai, và khi nào thì tôi bỏ tiền vào?"*== Bạn biết mình sẽ được chia bài. Điều bạn chưa biết là khi nào cược, khi nào lật thêm bài, và người thắng thực sự được quyết định ra sao.

Đây là **hướng dẫn trình tự chơi**: blind, preflop, flop, turn, river, showdown, và ai hành động trước ở mỗi thời điểm. Nếu bạn hoàn toàn mới và muốn gói kiến thức rộng hơn cho người mới — luật, chip, thứ hạng tay bài, chiến lược đầu tiên và file PDF in được — hãy bắt đầu với [luật Texas Hold'em cho người mới](/vi/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp"). Rồi quay lại đây để xem dòng chảy chi tiết của một ván bài.

---

### Một ván bài trong 15 giây: preflop, flop, turn, river, showdown

Đặt blind (mù — cược bắt buộc) → chia hai **lá bài tẩy** cho mỗi người → vòng cược **preflop** → lật ba lá **flop** → cược → thêm lá **turn** → cược → lật lá **river** cuối cùng → cược → những người còn bài vào showdown (lật bài) → tay bài 5 lá mạnh nhất thắng.



---

## Texas Hold'em là gì?

Texas Hold'em là biến thể poker mà mỗi người nhận hai lá bài tẩy riêng, rồi cả bàn dùng chung năm lá bài chung (board) được lật dần qua flop, turn và river. Bạn ghép 5 lá mạnh nhất trong 7 lá đó để so bài ở showdown. Một ván có tối đa bốn vòng cược, và ai hành động trước ở mỗi vòng được quyết định bởi vị trí của nút dealer.

Texas Hold'em là biến thể poker được chơi rộng rãi nhất thế giới. Từ WSOP Main Event đến ván bài tại nhà cho vui, khi người ta nói "poker" thì gần như luôn là Hold'em.

Luật cốt lõi rất đơn giản: bạn tạo **tay bài 5 lá mạnh nhất** từ **hai lá bài tẩy riêng cộng năm lá bài chung**. May rủi chia bài, nhưng hiểu trình tự chơi — và ra quyết định đúng ở từng giai đoạn — mới là thứ tách người thắng khỏi phần còn lại.

---

## Trước khi chia bài: nút dealer và blind đặt ở đâu?

Nút dealer (BTN) là chiếc đĩa tròn đánh dấu ghế "cầm cái", và nó dịch một ghế theo chiều kim đồng hồ sau mỗi ván. Hai ghế ngay bên trái nút phải đặt blind trước khi thấy bất kỳ lá bài nào: small blind (mù nhỏ) ở ghế thứ nhất, big blind (mù lớn) ở ghế thứ hai. Khi bàn chỉ còn hai người, chính người cầm nút đặt small blind.

Trước khi có lá bài nào, hai thứ định hình bàn chơi: **nút dealer** và **blind**.

**Nút dealer (cái "button", ký hiệu D)** là một chiếc đĩa tròn đánh dấu ai đang "cầm cái" trong ván đó. Dù có dealer (người chia bài) riêng chia thay cho người chơi, nút vẫn quyết định thứ tự cược, và nó thường dịch một ghế theo chiều kim đồng hồ sau mỗi ván (quy tắc nút dealer chết — dead button — là ngoại lệ).

**Blind** là những khoản cược bắt buộc đặt trước khi chia bài. Không có chúng, ai cũng có thể check rồi fold miễn phí; ==g:blind đẩy tiền vào giữa bàn và cho người chơi một lý do để tranh pot==. (Chưa quen với chúng? Xem chính xác [small blind và big blind hoạt động thế nào](/vi/blog/holdem-blind-meaning).)

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Blind | Vị trí | Ví dụ |
|:---|:---|:---:|
| Small blind (SB) | Ghế đầu tiên bên trái nút | 1.000 |
| Big blind (BB) | Ghế thứ hai bên trái nút | 2.000 |

</div>

Khi chỉ có hai người chơi, chính nút đặt small blind — đó là cách bố trí dùng trong ván bài mẫu đầy đủ bên dưới.

Blind không chỉ là phí vào cửa — ==chúng là điểm khởi đầu của vị trí và chiến lược==.

---

## Giai đoạn 1 — Preflop: quyết định đầu tiên định hình cả ván

Preflop là vòng cược đầu tiên, diễn ra ngay sau khi mỗi người nhận hai lá bài tẩy và trước khi lá bài chung nào được lật. Người ngồi bên trái big blind mở màn, hành động đi theo chiều kim đồng hồ, và big blind là người chốt vòng. Ở đây bạn chỉ có đúng hai lá để quyết định fold, call hay raise — nên phần lớn tay bài nên bị bỏ ngay từ bây giờ.

Khi blind đã đặt xong, dealer phát cho mỗi người hai **lá bài tẩy** úp xuống. Chỉ bạn thấy chúng, và vòng cược **preflop** bắt đầu.

Hành động bắt đầu từ bên trái big blind và đi theo chiều kim đồng hồ. Đến lượt mình, bạn chọn một trong các hành động sau:

- **Fold (bỏ bài)** — bỏ ván và úp bài. Bạn không mất thêm gì, nhưng cũng không thắng gì.
- **Call (theo)** — cân bằng mức cược hiện tại (ở preflop là big blind).
- **Raise (tố)** — cược nhiều hơn big blind để gây áp lực lên đối thủ.
- **3-bet (re-raise, tố lại)** — một cú raise đè lên cú raise của người khác. Tín hiệu bài mạnh.

==r:Đa số người mới chơi gần như mọi ván "chỉ để xem flop". Đó là thói quen đắt đỏ nhất trong poker.== ==g:**Người chơi giỏi fold phần lớn tay bài ở preflop và chỉ chơi khoảng 15–25% trong số đó.**==

### Người mới nên chơi những bài tẩy nào ở preflop?

- **Premium:** A♠A♥ (đôi Át, pocket aces), K♠K♥, Q♠Q♥, J♠J♥
- **Mạnh:** A♠K♥ ("Big Slick"), A♠Q♥, 10♠10♥, 9♠9♥
- **Tùy tình huống:** A♠J♥, 8♠8♥, K♠Q♥, K♠J♥

Bạn thực sự mở được tay nào trong số này còn tùy ghế ngồi. Xem đủ 169 loại bài chia theo từng vị trí trong [bài khởi đầu nên chơi theo vị trí](/vi/blog/holdem-starting-hands-chart).

---

## Giai đoạn 2 — Flop trong poker là gì? Ba lá bài chung đầu tiên

Flop là ba lá bài chung đầu tiên, được lật cùng lúc ngay sau khi vòng cược preflop kết thúc. Từ đây mỗi người có 5 lá để đọc — hai lá tẩy cộng ba lá trên bàn — và vòng cược thứ hai bắt đầu từ người còn bài đầu tiên bên trái nút dealer. Flop cũng là lúc hành động check mở ra cho tất cả mọi người.

Khi vòng cược preflop kết thúc, dealer lật ba **lá bài chung** ở giữa bàn. Đây là **flop**.

Giờ bạn đọc được một tay bài 5 lá thực sự: hai lá tẩy cộng ba lá trên board. Hãy nhìn hai thứ cùng lúc:

- **Bạn đang có gì** — một đôi, hai đôi, hay chưa có gì.
- **Bạn còn có thể tạo ra gì** — một **draw (bài chờ)** thùng hoặc sảnh có thể hoàn tất ở các vòng cược sau.

![Đồ họa ba vòng bài trong Texas Hold'em — flop K♥ 7♦ 2♣, lá turn 9♠ và lá river Q♥](/images/blog-holdem-card-stages.webp "Các vòng bài: ba lá ở flop, rồi một lá ở turn và một lá ở river")

Từ flop trở đi, **check** mở cho tất cả mọi người (ở preflop, chỉ người mà blind hoặc straddle (blind tự nguyện) của chính mình đang là mức cược sống mới được check). Nếu chưa ai cược, bạn có thể check để nhường lượt mà không bỏ chip. Nhưng nếu đối thủ cược sau khi bạn check, bạn sẽ phải call, raise hoặc fold.

---

## Giai đoạn 3 — Turn trong poker là gì? Bức tranh rõ dần

Turn là lá bài chung thứ tư, được lật sau khi vòng cược flop khép lại, nâng tổng số lá trên board lên bốn. Nó mở ra vòng cược thứ ba, vẫn bắt đầu từ người còn bài đầu tiên bên trái nút dealer. Đây là vòng cược nặng tính toán nhất: draw của bạn đã hoàn tất chưa, và bạn có muốn đi tiếp đến river hay không.

Sau vòng cược flop, thêm một lá bài chung được chia — lá **turn** (còn gọi là *fourth street*). Giờ có bốn lá trên board.

Turn là một vòng cược nặng về chiến lược:

- Draw sảnh hay thùng của bạn đã hoàn tất chưa?
- Hành động preflop và flop của đối thủ nói gì về range của họ?
- Ván này có đáng đi tới tận river không?

==r:Nếu bạn check thụ động ở turn rồi bất ngờ tung một cú cược lớn ở river, đối thủ tinh ý sẽ đọc ra sự yếu thế.== ==g:**Với tay bài mạnh, hãy bet ở turn để xây pot**== khi đối thủ vẫn còn sẵn lòng call.

---

## Giai đoạn 4 — River trong poker là gì? Lá cuối, quyết định cuối

River là lá bài chung thứ năm và cuối cùng, được lật sau vòng cược turn. Khi nó xuất hiện, cả năm lá trên board đã lộ hết, không còn lá nào sắp tới, và vòng cược thứ tư — vòng cuối — bắt đầu. Mọi quyết định ở river chỉ còn dựa vào sức mạnh tay bài hiện có và cách đối thủ đã cược suốt ván.

Sau vòng cược turn, lá bài chung thứ năm và cuối cùng được lật — **river** (còn gọi là *fifth street*). Cả năm lá bài chung đã ra hết, và không còn thông tin mới nào sắp đến.

Những lỗi river kinh điển:

- **Call tới cùng với tay bài yếu** — cái bẫy "thôi, lỡ đi tới đây rồi".
- **Check thụ động với tay bài mạnh** — tặng đối thủ một lần showdown miễn phí.
- **Bất ngờ thử bluff river** — nếu bạn thụ động suốt các vòng cược trước, một cú cược lớn ở river hiếm khi kể được câu chuyện đáng tin.

River là nơi bạn kết toàn bộ ván. Cân nhắc sức mạnh tay bài của mình, kiểu cược của đối thủ và toàn bộ board, rồi ra quyết định cuối cùng.

---

## Giai đoạn 5 — Showdown: tay bài 5 lá mạnh nhất thắng

Showdown là lúc những người còn bài sau vòng cược river lật bài để so. Mỗi người chọn 5 lá mạnh nhất trong 7 lá — hai lá tẩy cộng năm lá bài chung — và không bắt buộc dùng cả hai lá tẩy. Người bet hoặc raise cuối cùng ở vòng cược cuối phải lật trước; tay bài ngang nhau thì chia pot đều cho những người đó.

Nếu còn hai người trở lên sau vòng cược river, ván bài đi tới **showdown**.

![Đồ họa showdown poker — trên board 10♣ 7♥ J♦ 4♠ 9♣, đôi Át A♥ A♦ thắng đôi K K♥ K♣](/images/blog-holdem-showdown.webp "Ở showdown, những người còn bài lật bài — ở đây đôi Át thắng đôi K và lấy pot")

Luật showdown:

- Mỗi người tạo **tay bài 5 lá mạnh nhất** từ hai lá tẩy và năm lá bài chung.
- Bạn không bắt buộc dùng cả hai lá tẩy — có thể dùng một lá, hoặc chơi luôn board (không dùng lá nào) nếu đó là 5 lá mạnh nhất của bạn.
- **Người bet hoặc raise cuối cùng (last aggressor)** ở vòng cược cuối lật trước; nếu river được check hết lượt, người còn bài đầu tiên bên trái nút lật trước.
- Người thua thường chỉ cần **muck (úp bài bỏ)** — bỏ mà không lật. Hai ngoại lệ trong giải đấu (tournament): khi một người đã all-in (tất tay) và vòng cược đã kết thúc, mọi tay bài đều phải lật ngửa (TDA 2024 Rule 16 · WSOP Tournament Rule 70); và người bet ở river bị call phải lật nếu người call — vẫn đang cầm hoặc đã lật bài của mình — yêu cầu xem bài (TDA 2024 Rule 18-B).
- Tay bài ngang nhau thì **chia pot (split pot)** — dân chơi gọi là "chop" — đều nhau.

Ai phải lật trước, khi nào bạn được muck, và phép lịch sự quanh chuyện slow roll (cố tình lật bài chậm) được nói đầy đủ trong [luật showdown](/vi/blog/holdem-showdown-rules).

---

## Ai cược trước trong Texas Hold'em?

**Người ngồi ngay bên trái big blind — gọi là Under the Gun (UTG) — hành động trước ở preflop, chính vì hai ghế blind đã có tiền trong pot và được hành động sau cùng. Hai ghế cùng sở hữu chữ "trước", và ghế nào đang trực tùy vào việc flop đã ra hay chưa. Khi flop đã rơi, đặc quyền của blind hết hiệu lực: hành động bắt đầu lại từ người còn bài đầu tiên bên trái nút dealer, và nút khép lại mọi vòng cược từ đó.**

"Đến lượt ai?" vì thế có câu trả lời khác nhau trước và sau flop — và chính sự dịch chuyển ấy là động cơ đằng sau chiến lược vị trí.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Vòng cược | Hành động trước | Hành động cuối |
|------|------|------|
| Preflop | Người bên trái big blind ("UTG") | Big blind |
| Flop | Small blind (hoặc người còn bài đầu tiên bên trái nút) | Nút dealer |
| Turn | Như flop | Nút dealer |
| River | Như flop | Nút dealer |

</div>

Mẹo nhớ: ==**trước flop, nhìn bên trái big blind; sau flop, nhìn bên trái nút.**== Nút hành động cuối ở mọi vòng cược postflop, và đó chính là lý do nó là ghế lời nhất — xem [các vị trí trong poker: từ UTG đến nút dealer](/vi/blog/holdem-positions).

==g:**Heads-up (chỉ hai người chơi) là ngoại lệ:**== nút đặt *small* blind và hành động **trước** ở preflop, nhưng **sau cùng** ở flop, turn và river. Đó là thứ tự dùng trong ván bài mẫu đầy đủ bên dưới.

Thêm một chi tiết, ở cash game cho phép: một **straddle** sống dời điểm bắt đầu preflop sang bên trái người straddle, và người straddle — chứ không phải big blind — hành động sau cùng trước flop (WSOP Live Action Rule 165). Sau flop, thứ tự trở lại như thường.

---

## Toàn bộ trình tự chơi poker gói trong một bảng trông thế nào?

Một ván Texas Hold'em đi qua sáu giai đoạn theo đúng thứ tự: blind → preflop → flop → turn → river → showdown. Số lá bài chung tăng từ 0 lên 3, 4 rồi 5, và có tối đa bốn vòng cược — blind là cược bắt buộc, còn showdown không cược. Bảng dưới gom cả trình tự vào một chỗ để bạn liếc qua là nhớ.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Giai đoạn | Diễn biến | Bài chung | Có cược? |
|:---|:---|:---:|:---|
| Blind | SB và BB đặt cược bắt buộc | 0 | Bắt buộc |
| Preflop | Chia hai lá bài tẩy → cược | 0 | ✅ |
| Flop | Lật ba lá bài chung | 3 | ✅ |
| Turn | Thêm một lá bài chung | 4 | ✅ |
| River | Lá bài chung cuối cùng | 5 | ✅ |
| Showdown | So 5 lá mạnh nhất → người thắng | 5 | — |

</div>

### ⚡ Một câu để nhớ cho mỗi vòng cược

- **Preflop** = khởi đầu (quyết định chỉ với hai lá của bạn)
- **Flop** = thay đổi (ba lá mở ra khả năng)
- **Turn** = quyết định (cơ hội thực sự cuối cùng để tính cho river)
- **River** = kết thúc (bài ra hết, cược cuối)
- **Showdown** = kết quả (5 lá mạnh nhất lấy pot)

---

## Theo dõi trọn một ván bài, từng bước một

Dưới đây là một ván heads-up với bài và số chip thật: A♠ K♥ đấu với 9♦ 9♣ trên board K♦ 9♠ 3♥ 2♣ A♥. Bạn sẽ thấy pot lớn dần qua bốn vòng cược — 12.000, 28.000, 58.000 rồi 198.000 — và vì sao hai đôi Át-K ở river trông như tay thắng nhưng vẫn thua một set 9 đã có sẵn từ flop.

![Ví dụ một ván Texas Hold'em đầy đủ — từ preflop đến showdown](/images/holdem-game-example-fullhand.webp "Theo dõi trọn một ván qua từng vòng cược đến showdown")

Đọc về các vòng cược thì trừu tượng. Hãy chạy một ván heads-up từ lá đầu đến lá cuối với bài và số chip thật.

**Thiết lập:** Heads-up. Blind SB 1.000 / BB 2.000.

- **Người chơi A (bạn):** A♠ K♥ (Át-K khác chất)
- **Người chơi B (đối thủ):** 9♦ 9♣ (đôi 9)

### Preflop

A raise lên **6.000** với Big Slick. B call với đôi 9.
**Pot: 12.000**

### Flop: K♦ 9♠ 3♥

- **A:** đôi cao nhất, kicker (lá phụ) cao nhất (một đôi K). Trông rất mạnh.
- **B:** ba lá 9 — một **set** (set = cầm đôi trên tay + 1 lá trên board; trips = 1 lá trên tay + board có đôi). Đã là quái vật.

B check, A bet **8.000**, B call.
**Pot: 28.000**

### Turn: 2♣

- **A:** không đổi, vẫn đôi cao nhất.
- **B:** vẫn là set, không cần cải thiện thêm.

B check, A bet **15.000** (khoảng nửa pot), B call.
**Pot: 58.000**

### River: A♥

- **B:** check.
- **A:** lá Át ghép đôi — giờ là **hai đôi, Át và K**. Sướng rơn, bet **30.000**.
- **B:** set vẫn đè hai đôi. Check-raise lên **70.000**.
- **A:** tin chắc hai đôi là đủ, call.

**Pot: 198.000**

### Showdown

- A: A♠ K♥ + A♥ K♦ 9♠ → **hai đôi (Át và K)**
- B: 9♦ 9♣ + 9♠ K♦ A♥ → **sám cô (bộ ba, three of a kind) — ba lá 9**

**Người thắng: B** — sám cô thắng hai đôi.

Bài học: ==r:khi river ghép bài của A thành hai đôi, nó *có cảm giác* như tay thắng — nhưng B đã có set từ flop suốt cả ván.== ==g:**Đọc toàn bộ board, chứ không chỉ phần cải thiện của riêng mình, mới là cốt lõi của Hold'em.**==

---

## 7 hành động bạn có thể làm trong poker là gì?

Ở bàn Texas Hold'em bạn chỉ có bảy hành động cược: fold, check, call, bet, raise, 3-bet và all-in. Hành động nào đang mở phụ thuộc vào việc trước mặt bạn đã có cược hay chưa — chưa có thì check hoặc bet, có rồi thì call, raise hoặc fold — còn all-in chỉ là cách đẩy toàn bộ stack vào bằng một trong các hành động đó.

![Các hành động cược trong poker — check, call, fold, bet, raise, re-raise, all-in](/images/holdem-betting-options-guide.webp "Mọi hành động cược bạn có thể làm trong Texas Hold'em")

Đây là mọi hành động có ở bàn — phần người mới hay lẫn nhất.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Hành động | Tác dụng | Khi nào dùng được |
|------|------|------|
| Fold | Bỏ ván, úp bài | Bất kỳ vòng cược nào — khi đến lượt |
| Check | Nhường lượt, không cược | Chỉ khi chưa có cược tới bạn |
| Call | Cân bằng mức cược hiện tại | Khi có cược tới bạn |
| Bet | Cược đầu tiên của một vòng | Khi chưa ai cược |
| Raise | Nâng trên mức cược hiện tại | Khi có cược tới bạn |
| Re-raise (3-bet) | Raise đè lên một cú raise | Khi có cú raise tới bạn |
| All-in | Đẩy hết chip vào | Bất kỳ vòng cược nào — khi đến lượt, dưới dạng bet, call hay raise, tùy hành động nào đang mở cho bạn |

</div>

==r:**Quan trọng:** ở preflop bạn không thể check — trừ khi khoản đặt trước của chính bạn đã là mức cược sống.== Big blind là một mức cược sống, nên mọi vị trí mà khoản đặt trước của mình chưa phải là mức cược sống đều phải call, raise hoặc fold. ==Big blind được check nếu chưa ai raise hay straddle — và người có straddle sống chưa bị raise hay re-straddle cũng vậy, vì khoản đặt đó là cú cược mở màn của họ và họ hành động sau cùng ở preflop (WSOP Live Action Rules 159 · 165); với mọi người khác, check chỉ bắt đầu từ flop.==

Để có hướng dẫn quyết định sâu hơn về khi nào dùng từng hành động — kèm bảng quyết định check-call-raise-fold — xem [các hành động cược giải thích rõ](/vi/blog/holdem-betting-actions).

---

## 10 thứ hạng tay bài poker bạn cần thuộc

Thứ hạng tay bài poker gồm 10 bậc, từ thùng phá sảnh hoàng gia (royal flush) mạnh nhất xuống mậu thầu (bài cao, high card) yếu nhất. Ở showdown, mỗi người lấy 5 lá mạnh nhất trong 7 lá — hai lá tẩy cộng năm lá bài chung — rồi so theo bảng này; cùng hạng thì so lá cao hơn, rồi mới đến kicker.

Để thắng ở showdown, bạn cần biết ngay tay nào đè tay nào. Đây là thứ tự **thứ hạng tay bài**. (Cột Tần suất cho biết mỗi loại là 5 lá mạnh nhất trong 7 lá của bạn thường xuyên đến đâu — vì thế mậu thầu xuất hiện ít hơn hai đôi.)

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Hạng | Tay bài | Ví dụ | Tần suất |
|------|------|------|------|
| 1 | Thùng phá sảnh hoàng gia (Royal Flush) | A♠ K♠ Q♠ J♠ 10♠ | Cực hiếm |
| 2 | Thùng phá sảnh (Straight Flush) | 5♥ 6♥ 7♥ 8♥ 9♥ | Rất hiếm |
| 3 | Tứ quý (Four of a Kind) | A♠ A♥ A♦ A♣ K♠ | Hiếm |
| 4 | Cù lũ (Full House) | K♠ K♥ K♦ A♠ A♥ | Ít gặp |
| 5 | Thùng (Flush) | A♠ K♠ 8♠ 5♠ 2♠ | Ít gặp |
| 6 | Sảnh (Straight) | 5♥ 6♠ 7♦ 8♣ 9♥ | Thỉnh thoảng |
| 7 | Sám cô (Three of a Kind) | Q♠ Q♥ Q♦ 5♠ 7♥ | Thỉnh thoảng |
| 8 | Hai đôi (Two Pair) | J♠ J♥ 8♦ 8♣ A♠ | Phổ biến |
| 9 | Một đôi (One Pair) | K♠ K♥ 7♦ 4♣ 2♠ | Rất phổ biến |
| 10 | Mậu thầu (High Card) | A♠ Q♥ 8♦ 5♣ 2♠ | Phổ biến — nhưng ít hơn hai đôi |

</div>

Muốn xem phân tích đầy đủ — gồm cả cách kicker và thế bài ngang nhau quyết định người thắng? Xem hướng dẫn hoàn chỉnh về [thứ hạng tay bài poker](/vi/blog/holdem-hand-rankings).

---

## 5 lỗi nào người mới phải tránh?

Năm lỗi khiến người mới mất chip dù đã thuộc trình tự: chơi gần như mọi ván, bỏ qua vị trí, đuổi theo draw mà không tính pot odds, bất ngờ bluff river bằng tay bài yếu, và đọc sai tay bài của mình ở showdown. Mỗi lỗi đều có cách sửa đơn giản, và phần lớn bắt đầu từ việc fold nhiều hơn ở preflop.

Bạn có thể thuộc lòng trình tự chơi mà vẫn chảy máu chip nếu mắc những lỗi này. Tôi đã chứng kiến từng lỗi trong số đó lấy mất pot của một người mới ngay tại bàn — thường là hơn một lần trong cùng một buổi.

### 1. Chơi gần như mọi ván

"Cứ xem flop cái đã" là kẻ thua về dài hạn — đó là lỗ hổng phổ biến nhất tôi thấy ở bàn đầu tiên của một người mới. Người chơi mạnh chỉ chơi 15–25% số ván và fold phần còn lại không do dự. Nếu bạn call preflop với bất kỳ hai lá nào, bạn đang trả tiền để thua.

### 2. Bỏ qua vị trí

Càng gần nút dealer càng tốt — hành động sau cùng cho phép bạn thấy mọi người làm gì trước khi quyết định. Chơi chặt ở vị trí sớm và quyết liệt hơn ở vị trí muộn. Xem sơ đồ ghế đầy đủ và range mở theo từng vị trí trong [các vị trí trong poker: từ UTG đến nút dealer](/vi/blog/holdem-positions).

### 3. Đuổi theo draw bất chấp pot odds

Một flush draw (chờ thùng) hay draw sảnh không có nghĩa là tự động call. Bạn phải cân **pot odds (tỷ lệ pot)** — tỷ lệ giữa pot và số tiền phải call. Nếu pot — đã tính cả cược của đối thủ — là 100.000 và bạn phải call 50.000, bạn cần **thắng** ít nhất khoảng 33% số lần thì cú call mới đáng — thắng, chứ không chỉ là hoàn tất draw.

### 4. Bất ngờ bluff river bằng tay bài yếu

Nếu bạn check thụ động cả ván rồi đẩy all-in ở river, đối thủ nhìn thấu ngay. Một cú bluff cần câu chuyện nhất quán từ vòng cược đầu tiên.

### 5. Đọc sai tay bài của mình ở showdown

Lỗi kinh điển của người mới: nghĩ "mình có hai đôi!" trong khi thực ra chỉ có một đôi. Tôi từng thấy người chơi hãnh diện lật ra thứ họ tin chắc là sảnh, để rồi nhận ra các lá không liên tiếp — cả bàn im lặng, và pot trôi về phía bên kia. Hãy luyện chọn **5 lá mạnh nhất** từ hai lá tẩy và năm lá board cho tới khi thành phản xạ.

---

## Bắt đầu chơi ngay hôm nay thế nào?

Cách nhanh nhất để trình tự thành phản xạ là chơi thật với rủi ro bằng không: dùng chế độ tiền ảo, đọc lại bài này vài lần, viết mười thứ hạng tay bài ra giấy, và khi chuyển sang chip thật thì bắt đầu ở mức blind thấp nhất. Texas Hold'em học được trong ba mươi phút, nhưng chính những ván đầu tiên mới khắc vào đầu bạn thứ tự hành động.

Một khi trình tự chơi đã thông, đã đến lúc thực sự chơi.

- **Luyện bằng tiền ảo** — đa số app và trang poker có chế độ chơi miễn phí. Áp dụng hướng dẫn này vào một dòng chảy ván bài thật.
- **Đọc lại bài này hai ba lần** — trình tự phải thành bản năng để bạn không bao giờ đơ ở bàn.
- **Làm một tờ nhắc thứ hạng tay bài** — viết mười tay bài ra giấy và để chỗ dễ thấy.
- **Bắt đầu ở mức cược thấp nhất** — sai lầm càng rẻ, bạn học càng nhanh.

Texas Hold'em mất ba mươi phút để học và cả đời để thành thạo. Nhưng những điều cơ bản bạn nắm được hôm nay là quá đủ để ngồi vào bàn. Về lịch sử và luật chính thức, [bài Wikipedia về Texas hold 'em (tiếng Anh)](https://en.wikipedia.org/wiki/Texas_hold_%27em) là một tài liệu tham khảo vững.

---

:::readnext[Đọc tiếp]
/vi/blog/texas-holdem-rules-for-beginners | Luật Texas Hold'em cho người mới | /images/rules-texas-holdem.webp
/vi/blog/holdem-betting-actions | Các hành động cược giải thích rõ | /images/holdem-betting-actions-hero.webp
:::

## Câu hỏi thường gặp

**Q. Trình tự chơi Texas Hold'em chính xác là gì?**

A. Đặt blind → chia hai lá bài tẩy → cược preflop → lật flop (3 lá) và cược → turn (1 lá) và cược → river (lá cuối) và cược → showdown (so 5 lá mạnh nhất).

**Q. Ai hành động trước trong poker?**

A. Tùy bạn hỏi "trước" theo nghĩa nào — và chính điều đó khiến câu hỏi gây rối. Trong một ván có ba thời điểm cùng tranh chữ ấy: người *đặt* trước (small blind), người *hành động* trước ở preflop (UTG, ngay bên trái big blind), và người hành động trước khi flop đã ra (quay về small blind). Vì thế câu trả lời đảo giữa ván — UTG mở vòng preflop, rồi small blind (hoặc, nếu họ đã fold, người còn bài kế tiếp bên trái nút) mở mọi vòng sau đó. (Heads-up đảo ngược điều này — xem câu tiếp theo.)

**Q. Sau flop, ai cược trước?**

A. Người còn bài đầu tiên bên trái nút dealer — ở bàn đông đủ đó là small blind. Nếu small blind đã fold thì chuyển sang big blind, rồi tiếp theo chiều kim đồng hồ. Cũng ghế đó dẫn đầu ở turn và river; chỉ preflop là bắt đầu ở chỗ khác. Heads-up là ngoại lệ: ở đó nút hành động trước ở preflop và sau cùng ở mọi vòng cược sau đó.

**Q. Ở showdown, ai lật bài trước?**

A. Người bet hoặc raise cuối cùng ở river phải lật trước. Nếu river được check hết lượt mà không ai cược, người còn bài đầu tiên bên trái nút lật trước và những người còn lại lật theo chiều kim đồng hồ. Người biết mình đã thua thường được muck thay vì lật. Hai ngoại lệ trong giải đấu: khi có người all-in, mọi tay bài đều phải lật ngửa (TDA 2024 Rule 16); và người bet ở river bị call phải lật nếu người call — vẫn đang cầm hoặc đã lật bài của mình — yêu cầu xem bài (TDA 2024 Rule 18-B).

**Q. Preflop và flop khác nhau thế nào?**

A. Preflop là trước khi có lá bài chung nào — bạn quyết định chỉ dựa trên hai lá tẩy. Flop là sau khi ba lá bài chung được lật, nơi bạn đọc cả tay bài hiện có lẫn tiềm năng draw của mình.

**Q. Check và call khác nhau ở đâu?**

A. Check nhường lượt mà không cược, và chỉ được khi chưa có cược nào trước mặt bạn. Call là cân bằng cú cược của đối thủ. Nếu ai đó đã cược, bạn không thể check — phải call, raise hoặc fold.

**Q. Có bắt buộc dùng cả hai lá bài tẩy khi showdown không?**

A. Không. Bạn tạo tay bài 5 lá mạnh nhất từ bất kỳ tổ hợp nào giữa hai lá tẩy và năm lá bài chung — kể cả chỉ dùng một lá, hoặc không dùng lá nào ("chơi board").

**Q. Pot odds là gì?**

A. Pot odds là tỷ lệ giữa kích thước pot hiện tại và số tiền bạn phải call. Nếu pot là 100.000 và đối thủ bet 20.000, bạn đang mạo hiểm 20.000 để thắng pot 120.000 (6:1). Nếu cơ hội thắng của bạn tốt hơn tỷ lệ đó, call là có lời.

**Q. Khi nào nên all-in?**

A. All-in nghĩa là cược mọi chip bạn có. Dùng với tay bài rất mạnh (nuts — tay bài mạnh nhất có thể trên board này), hoặc như một cú bluff để ép đối thủ fold. Một khi đã all-in bạn không thể cược tiếp, nhưng vẫn đủ tư cách nhận phần pot bạn đã cân. Khi các stack lệch nhau và hai người trở lên tiếp tục cược vượt mức all-in của bạn, điều này tạo ra side pot (pot phụ) — xem [luật all-in và side pot](/vi/blog/holdem-all-in-rules).

**Q. Một ván bài có bao nhiêu vòng cược?**

A. Tối đa bốn: preflop, flop, turn và river. Ván kết thúc sớm — mọi người fold chỉ còn một người, hoặc các bên đã all-in và không còn ai để cược — thì ít hơn. Blind là cược bắt buộc, và showdown không có cược.

**Q. Vì sao dealer phải «đốt» (burn) một lá trước flop, turn, river — và đốt bao nhiêu lá?**

A. Trước khi chia flop, turn và river, dealer bỏ úp lá trên cùng của bộ bài — gọi là "burn card" (lá đốt). Vậy là ba lá bị đốt trong một ván đi tới tận river, mỗi lá trước một lần lật bài chung. Đốt bài bảo vệ ván chơi: nếu lá trên cùng bị đánh dấu hay vô tình lộ, một người chơi có thể biết trước lá sắp ra, nên nó được loại khỏi ván trước.

**Q. Chia bài poker gọi là gì? Dealer và nút dealer khác nhau thế nào?**

A. Người chia bài gọi là **dealer**; chiếc đĩa tròn đánh dấu ghế "cầm cái" gọi là **nút dealer (BTN)**. Ở ván bài tại nhà, người cầm nút thường tự chia; khi có dealer riêng chia thay, nút vẫn quyết định thứ tự cược và thường dịch một ghế theo chiều kim đồng hồ sau mỗi ván (quy tắc nút dealer chết — dead button — là ngoại lệ). Bài này không nói về nghề dealer.

**Q. Làm cách nào để chia bài trong poker?**

A. Bắt đầu từ ghế bên trái nút dealer, chia úp mỗi người một lá theo chiều kim đồng hồ, đi hai vòng để ai cũng có hai lá tẩy, rồi vòng cược preflop diễn ra. Sau đó đốt một lá và lật ba lá flop, đốt một lá và lật lá turn, đốt một lá và lật lá river — giữa mỗi lần đều có một vòng cược. Hướng dẫn từng bước có trong [cách chia bài 10 bước trong luật Texas Hold'em cho người mới](/vi/blog/texas-holdem-rules-for-beginners).

---

## Những điều cần nhớ

1. ==**Trình tự:**== blind → preflop → flop (3) → turn (1) → river (1) → showdown, với ==tối đa bốn vòng cược==.
2. ==**Cách đọc:**== ở mỗi vòng cược, xét cả cái bạn đang có lẫn cái bạn còn có thể tạo ra — và nhìn toàn bộ board, không chỉ tay bài của riêng mình.
3. ==g:**Kỷ luật:**== fold phần lớn tay bài ở preflop, tôn trọng vị trí, và chỉ cược lớn khi câu chuyện của bạn hợp lý.

Học thuộc trình tự, luyện với chế độ chơi miễn phí, và bạn sẽ không bao giờ đơ ra tự hỏi đến lượt ai nữa. Bạn đã sẵn sàng ngồi vào bàn.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Hướng dẫn người mới</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Luật Texas Hold'em cho người mới</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Luật đầy đủ, chip, thứ hạng tay bài + PDF in được</div>
  </a>
  <a href="/vi/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thứ hạng tay bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thứ hạng tay bài poker — từ mạnh đến yếu</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Cả 10 tay bài kèm xác suất, ví dụ và câu đố board</div>
  </a>
  <a href="/vi/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Vị trí</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Các vị trí trong poker: từ UTG đến nút dealer</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Sơ đồ ghế, range mở, và vì sao vị trí thắng</div>
  </a>
</div>
`.trim(),
};
