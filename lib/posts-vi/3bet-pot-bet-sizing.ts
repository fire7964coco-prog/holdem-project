import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 ⑨ 베트남어판 — Q♥10♥7♠ 3벳팟 (vi-gto 레인 B · 2026-10-10)
 * 출처 = EN 마스터 lib/posts-en/3bet-pot-bet-sizing.ts (기준 해시 b57cb658) · 수치·카드 EN 축어(구분자만 vi).
 * 키워드 = bet sizing poker · bet size trong poker · geometric bet sizing · overbet poker (docs/keyword-bank/vi-serp/L-G-gto.md).
 * EN과 의도적으로 다름(en-first-queue §2-AO 선반영): L176 «Effectively, no» → «Thực tế là có» · L229 JJ 오버카드 = Q 하나뿐(AO-2).
 * 알려진 한계: 이미지 = vi 캡처(-vi.webp) — 2026-10-10 헤드 교체(queue §2-AS H-1).
 * GTO 시리즈 예외 — 1차 데이터이고 재현 가능성이 출처를 대신한다(지어낸 경험담 없음).
 */
export const POST: Post = {
  slug: "3bet-pot-bet-sizing",
  title: "Hai size được đưa ra, chỉ một size được dùng",
  seoTitle: "98,4% dồn vào một size — Bet sizing poker trên board ướt",
  desc: "Solver có hai size trên flop hai chất này và dồn 98,4% range vào một. Hai phần ba pot ép giá 38 trong 40 draw theo odds một lá — chọn bet size poker thế nào.",
  tldr: "Trên Q♥10♥7♠ trong pot 3-bet, big blind bet hai phần ba pot (14,9bb) với tần suất 98,4%. Size nhỏ chỉ được 0,7% và check 0,8% — cộng lại chưa tới một combo trong 73. Một board trước đó, trên A♦K♠2♥, cùng range này chia sizing 57,8/42,2. Thứ làm cú chia sụp đổ không phải sức mạnh mà là giá. Trên board ướt thế này, size do cái giá người call phải trả để tiếp tục draw quyết định, và bet nhỏ không bắt họ trả đủ.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "12 phút",
  emoji: "💧",
  image: "/images/gto-3bp-dynamic-oop-vi.webp",
  imageAlt: "Kết quả solver HoldemMaster trên pot 3-bet Q-10-7 hai chất: lưới 13x13 của big blind gần như phủ kín một màu, size hai phần ba pot hiện 98,4%",
  tags: ["bet sizing poker", "bet size trong poker", "wet board poker", "geometric bet sizing", "overbet poker", "ví dụ solver"],
  content: `
Ở board trước đó, big blind bet toàn bộ range trên [A♦K♠2♥](/vi/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-vi.webp") và chia sizing gần như làm đôi — 57,8% size nhỏ, 42,2% size lớn.

Flop lần này là Q♥ 10♥ 7♠. Hai lá cơ, và giữa lá Q với lá 10 chỉ thiếu đúng lá J. **Draw nhiều hơn hẳn, và cú chia size biến mất:** hai phần ba pot chiếm ==98,4%==, còn size nhỏ chỉ được 0,7%.

"Board ướt thì bet lớn" là lời khuyên ai cũng từng nghe. Điều không ai nói là nó cực đoan đến mức nào. Mọi con số dưới đây đều lấy từ [GTO poker solver miễn phí](/vi/solver) của HoldemMaster.


:::stripe
Spot | BB 3-bet → BTN call (heads-up)
Flop | Q♥ 10♥ 7♠ (hai chất, liền nhau)
Pot · stack | Pot 22,5bb · stack hiệu dụng 89bb · SPR 4,0
Kết quả | Hai phần ba pot 98,4% — cú chia size sụp đổ
:::

> **Trả lời nhanh**
> Big blind bet **14,9bb, tức hai phần ba pot, với tần suất 98,4%**. Size nhỏ 0,7% và check 0,8% thực chất bằng không, không phải một chiến lược bạn có thể làm theo. Lý do nằm ở giá. Một phần ba pot đòi người call khoảng ==19,8%== equity, mức mà bốn combo flush draw của button vượt qua dễ dàng. Hai phần ba pot đòi khoảng ==28,5%==, và nếu tính từng lá một, **chỉ còn hai trong 40 combo draw của button vượt được ngưỡng đó** — những draw kép 12 outs từng vượt size nhỏ thoải mái giờ không còn đủ nếu chỉ trông vào lá kế tiếp. Còn trên A-K-2, sizing được chia đôi vì cả 63 combo đều từ một đôi trở lên — một range đã bị cắt mất phần đáy, và không có draw nào để bắt trả giá.

## Những con số này đến từ điều kiện nào?

**Cùng pot 3-bet như board trước — chỉ có flop thay đổi.** Big blind (BB — mù lớn) 3-bet lên 11bb, button (BTN) call (theo), và hai người cùng xem Q♥10♥7♠ với 22,5bb ở giữa bàn và 89bb phía sau. Hai con số đó là toàn bộ khác biệt giữa các pot raise đơn (single raised pot) và các pot 3-bet trong loạt bài này.

| Thiết lập | Giá trị |
|---|---|
| Preflop | BTN open → **BB 3-bet lên 11bb** → BTN call |
| OOP · IP | OOP (out of position — không có vị trí) = BB (bên 3-bet) · IP (in position — có vị trí) = BTN (bên call) |
| Flop | Q♥ 10♥ 7♠ — hai lá cơ, nên **hai chất** |
| Pot · stack | Pot 22,5bb · stack hiệu dụng 89bb (**SPR 4,0** — SPR là stack hiệu dụng chia cho pot) |
| Cỡ bet được đưa vào | Khoảng một phần ba (7,4bb) và hai phần ba (14,9bb) pot |
| Rake | Không tính rake |
| Kiểm tra ngày | 2026-08-20 |

Pot 22,5bb là ==11 tiền 3-bet + 11 tiền call + 0,5 của small blind đã fold==, và stack hiệu dụng là ==100 − 11 = 89bb==. Solver báo mọi thứ theo đơn vị big blind, và mỗi cú bet đều hiện cùng lúc cả lượng chip lẫn tỷ lệ so với pot.

## Range này thật sự chỉ dùng một size sao?

**Thực tế là có — chỉ dùng một size.** 71,9 trong 73 combo (tổ hợp bài) chọn size hai phần ba, còn bet nhỏ và check chia nhau 1,1 combo. Cả hai size đều có sẵn trong cây quyết định và solver đã từ chối một trong hai, nên đây là một lựa chọn chứ không phải một giới hạn. Vì BB là bên 3-bet, cú bet đầu tiên này của BB chính là c-bet (cược tiếp tục).

| Hành động đầu tiên của BB | Tần suất | Combo |
|---|---|---|
| Bet 14,9bb (66% pot) | **98,4%** | 71,9 |
| Check | 0,8% | 0,6 |
| Bet 7,4bb (33% pot) | 0,7% | 0,5 |

Số combo không tròn vì chúng **được tính theo trọng số tần suất**, không phải gán nguyên tay: vài tay bài pha một chút check và bet nhỏ vào một chiến lược vốn gần như thuần bet lớn. Dưới một phần trăm thì bạn không thể tách một chiến lược thật khỏi nhiễu hội tụ của solver, nên hãy đọc những con số này là bằng không chứ đừng coi là chỉ dẫn. (Chỉ có 0,1 điểm phần trăm còn thiếu trong tổng các hành động là do làm tròn thật sự.)

Đặt hai pot 3-bet cạnh nhau, chúng trông như hai trò chơi khác nhau.

Cả hai hàng đều là pot 3-bet ở SPR 4,0, dùng cùng một range 3-bet gồm 14 loại tay bài.

| Flop | Một phần ba | Hai phần ba | Check |
|---|---|---|---|
| A♦K♠2♥ khô, rainbow | **57,8%** | 42,2% | 0,0% |
| **Q♥10♥7♠ hai chất, liền nhau** | 0,7% | **98,4%** | 0,8% |

## Vì sao board ướt cần một size lớn duy nhất?

**Vì bet sizing trong poker được quyết định bởi thứ đối thủ đủ sức call, chứ không phải bởi tay bài của bạn mạnh đến đâu.** Hãy đếm những draw button có thể cầm, định giá từng cái trước hai size trong cây, và lựa chọn tự hiện ra. Trên board khô con số đếm được gần như bằng không, và đó là lý do size nhỏ còn sống sót ở đó.

| Draw | BB (bên 3-bet) | BTN (bên call) |
|---|---|---|
| Draw kép (combo draw) | 2,7% | 3,0% |
| Flush draw (chờ thùng) | 2,7% | — |
| Sảnh hở hai đầu (OESD) | — | **4,5%** |
| Gutshot (sảnh hở giữa) | **24,7%** | 22,6% |
| Backdoor flush | 26,0% | 27,1% |
| Không draw | 43,8% | 42,9% |

**Chỉ đếm draw thật, cả hai bên đều ở mức 30,1%** — big blind từ 2,7% combo draw, 2,7% flush draw và 24,7% gutshot; button từ 3,0% combo draw, 4,5% OESD và 22,6% gutshot.

🪶 Backdoor flush được loại ra có chủ đích. Nó cần hai lá liên tiếp cùng một chất (chất cơ với tay đang cầm một lá cơ, chất bích với tay cầm hai lá bích bên cạnh 7♠), và chỉ thành khoảng ==(10 ÷ 47) × (9 ÷ 46) = khoảng 4,2%== số lần — không phải thứ mà một cỡ bet có thể bắt trả giá. Thêm nữa, bảng draw là **một trục riêng, tách khỏi bảng tay đã thành bài** — một overpair (đôi tẩy cao hơn mọi lá trên board) có một lá cơ cũng nằm luôn trong hàng backdoor. Trên [flop K-high khô](/vi/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-vi.webp"), cũng hàng đó ghi 72,2% "không draw" cho big blind và 77,7% cho button. Hai thế giới khác hẳn.

Bet một phần ba pot, 7,4bb, và người call cần ==7,4 ÷ (22,5 + 7,4 + 7,4) = khoảng 19,8%== để đi tiếp. Đây là những gì cái giá đó mua được, tính từng lá một.

| Draw button có thể cầm | Combo | Outs | Lá kế tiếp | so với 1/3 (19,8%) | so với 2/3 (28,5%) |
|---|---|---|---|---|---|
| Thùng cộng sảnh hở hai đầu — K♥J♥, 9♥8♥ | 2 | **15** | ==15 ÷ 47 = 31,9%== | ✅ | ✅ |
| Thùng cộng gutshot — A♥K♥, A♥J♥ | 2 | 12 | ==12 ÷ 47 = 25,5%== | ✅ | ❌ |
| Sảnh hở hai đầu — K-J và 9-8 ở các chất khác | 6 | 8 | ==8 ÷ 47 = 17,0%== | ❌ | ❌ |
| Gutshot | 30 | 4 | ==4 ÷ 47 = 8,5%== | ❌ | ❌ |

**Theo odds một lá, hai phần ba pot ép giá 38 trong 40 combo draw của button.** K♥J♥ và 9♥8♥ ghép flush draw với một sảnh hở hai đầu, và mười lăm outs vượt **mọi size trong cây này theo odds tức thời** — nhưng đó chỉ là ==2 trên 40==, và ⚠ **các outs đó không sạch.** Big blind cầm đúng bốn combo hai lá cơ — A♥K♥, A♥J♥, A♥5♥, A♥4♥ — và **combo nào cũng chứa A♥** (lá Q cơ đã nằm trên board, nên A♥Q♥ và K♥Q♥ không thể tồn tại). Flush draw K-high và 9-high của button đang đuổi chín lá cơ trước một range mà mọi thùng (flush) đều là **nut**, và ở SPR 4 thì một lá cơ ở turn là quyết định cả stack — implied odds ngược (reverse implied odds) ở dạng sắc nhất. Hạ xuống một phần ba pot thì số combo vượt ngưỡng tăng gấp đôi lên **bốn**, trong khi 30 gutshot phía sau được xem turn với giá rẻ hơn nhiều. (Tay đã thành bài là chuyện khác: chúng đi tiếp vì giá trị, không phải vì giá.)

⚠ "Ép giá" ở đây chỉ nói về phép tính lá kế tiếp. Trước toàn bộ range của big blind, với cả hai lá còn lại, 30 trong 38 combo đó vẫn giữ hơn 28,5% equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) — các gutshot A-K nằm ở mức 37,6%–42,9% vì hai overcard (lá cao hơn board) của chúng cũng được tính. Điều size lớn làm với phần lớn draw là bắt chúng trả giá, không phải khiến chúng fold.

⚠ **Cột ở trên chỉ định giá một lá. Một draw cần cả hai lá là câu hỏi khác — và nó phải trả hai lần.** Được xem cả hai lá thay vì một, draw mười lăm outs lên ==khoảng 54,1%== và draw mười hai outs lên ==khoảng 45,0%==; draw sảnh tám outs đạt ==31,5%== và ngay cả gutshot cũng lên tới ==16,5%==. Người call còn có vị trí, một stack 74,1bb phía sau, và quyền raise (tố). **Size lớn đặt một cái giá lên tất cả những thứ đó.**

Nhưng tiến thêm một bước: **người call cũng không thể cứ fold (bỏ bài) hết.** Trước 14,9bb vào pot 22,5bb, để một cú bluff thuần không có lãi thì cần ==22,5 ÷ (22,5 + 14,9) = 60,2%== range — đó là tần suất phòng thủ tối thiểu (MDF). Các tay thật sự đã thành bài của button cộng lại chỉ được **33,9%** (6,8 trips, 20,3 top pair, 6,8 second pair).

🪶 Tuy vậy, để lấp 60,2% thì hoàn toàn không cần đến draw — **33,9% tay đã thành bài cộng 36,1% underpair đã là 70,0%.** Kể cả khi toàn bộ 38 combo draw bị ép giá đều fold, vẫn còn 71,4% range, dư thoải mái. Vậy điều size lớn thật sự làm không hẳn là "đuổi draw đi" mà là **bắt phần giữa của range button trả một cái giá tệ để ở lại** — các underpair (đôi tẩy thấp hơn lá cao nhất trên board) này bỏ tiền vào khi phía trên có overcard và mọi draw trên board vẫn còn đó; riêng JJ chỉ có Q ở trên, nằm giữa hai lá.

:::note[⚠ MDF coi cú bet như một cú bluff thuần không có chút equity nào. Phần lớn những gì bet ở đây không phải vậy — 24,7% range của big blind là gutshot, và một gutshot bỏ cuộc sau đó vẫn có equity thật khi nó bet. Hãy coi 60,2% là một cách nghĩ về phòng thủ, không phải một chỉ tiêu phải lấp đầy.]:::

🪶 Đừng rút gọn điều này thành "flush draw kiểu gì cũng call". Một flush draw trơn có chín outs, ==9 ÷ 47 = 19,1%==, thậm chí không vượt nổi 19,8% của size nhỏ — và **range button này có đúng không combo flush draw trơn nào** (dấu gạch trong bảng so sánh). Nó có đúng bốn tay hai lá cơ, và tay nào cũng kèm một draw sảnh — hai tay gutshot, hai tay sảnh hở hai đầu — nên cả bốn đều nằm ở hàng draw kép. Việc một flush draw trơn đạt ==khoảng 35,0%== tính đến river là đúng, nhưng không phải điều đang bàn ở đây.

Để xem rộng hơn về cách đếm outs và định giá draw, đọc [xác suất ra bài khi đang chờ](/vi/blog/holdem-drawing-odds) và [pot odds](/vi/blog/holdem-pot-odds).

:::pull[Tay bài của bạn không chọn size. Thứ đối thủ đủ sức call mới chọn.]:::

:::note[⚠ Cùng texture, kết luận ngược nhau — và cả hai đều đúng, vì hai ghế đã đổi chỗ. Trong một **pot raise đơn**, phần đỉnh của flop broadway hai chất thuộc về người raise preflop, còn big blind — người chỉ call — gần như lần nào cũng check; trên [Q♠J♦10♠](/vi/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-vi.webp") nó check 99,9%. Lời khuyên quen thuộc như "board ướt thì bet lớn và phân cực range" trong [bài hướng dẫn c-bet](/vi/blog/holdem-continuation-bet) được viết cho ghế người raise, không phải ghế người call. **Chính cú 3-bet đã đổi chỗ hai ghế.** Ở đây big blind mới là bên cầm range ăn khớp với board, nên nó là bên bet — với mọi thứ. Riêng texture không bao giờ quyết định được chuyện này; hãy đọc hành động preflop trước.]:::

## Geometric bet sizing là gì?

**Geometric sizing (size bet lũy tiến — giữ cùng tỷ lệ cược so với pot qua các vòng) nghĩa là chọn một tỷ lệ pot rồi lặp lại ở mọi vòng cược để cú bet cuối rơi đúng vào all-in.** Với pot 22,5bb và 89bb phía sau, pot cuối cùng sau ba lần bet và ba lần call phải là ==22,5 + 2 × 89 = 200,5bb==, nên pot phải lớn lên ==200,5 ÷ 22,5 = 8,91 lần== qua ba vòng. Tính ra là **khoảng 54% pot, ba lần.**

Size solver thật sự đưa ra ở đây lớn hơn thế, và vẫn khớp:

- Flop **14,9bb** → bị call, pot là 52,3bb và còn 74,1bb phía sau
- Turn **34,5bb** → bị call, còn 39,6bb phía sau
- River **39,6bb** all-in

**==14,9 + 34,5 + 39,6 = 89,0==.** Ba cú bet là hết stack. Cú cuối là 39,6 vào pot 121,3 — chỉ ==khoảng 33%== — nên đây không phải "ba cú bet lớn"; đó là hai cú lớn cộng với phần còn sót lại.

**Và số tay có thể lên kế hoạch cho cả con đường đó ít hơn nhiều so với số tay bắn cú bet đầu.** 98,4% bet ở flop; xét riêng sức mạnh thì ứng viên cho cả ba vòng là các set (cầm đôi trên tay + 1 lá trên board) và overpair, ==6 + 12 = 18 combo==, còn các combo A-high ở đáy chỉ đang mua một vòng rồi nhìn lại. ⚠ Phần này là cách đọc từ các nhóm tay, không phải kết quả tính: không có node turn hay river ở đây, nên màn hình này không cho phép kiểm chứng rằng 18 combo đó đi đến cùng, cũng không đặt được 15 combo top pair về phía nào. **Top pair chính là chỗ cần quyết định**, nên hãy chốt kế hoạch của mình trước khi bet.

Đó là ý nghĩa thật của **SPR 4,0**. Con số cần theo dõi không phải lượng tiền phía sau, mà là số cú bet còn lại. Bet 14,9bb kéo SPR ở turn xuống ==74,1 ÷ 52,3 = 1,4==, và lúc đó cú bet tiếp theo là quyết định cả stack dù bạn có định thế hay không.

Và đó là lý do size lớn không chỉ nói về vòng này. Các con số equity của draw tính đến river đều là kiểu "nếu tôi được xem cả hai lá", và ở hai phần ba pot thì người call phải trả thêm hai lần để được xem chúng. Bắt đầu bằng size nhỏ chính là thứ đã miễn cho họ cái giá đó.

## Vì sao những tay bài chưa có đôi vẫn bet ở đây?

**Vì 38,4% range của big blind là A-high, và phần lớn trong đó đang chờ sảnh.** Trong 73 combo, 28 combo là A-high, và cả 18 gutshot đều nằm trong 28 combo đó. Một tay chưa có đôi không giống một tay không có equity: bốn outs tới Broadway, hai overcard, và mọi lần đối thủ fold trước cú bet là thắng luôn.

| 28 combo A-high | Combo | Đó là gì |
|---|---|---|
| AK | 16 | **Một lá J** là thành A-K-Q-J-10. 15 combo là gutshot; A♥K♥ có thêm thùng nên thành draw kép |
| AJs | 4 | Cũng A-K-Q-J-10, nhưng cần **một lá K**. 3 combo là gutshot; A♥J♥ là draw kép |
| A5s · A4s | 8 | A♥5♥ và A♥4♥ là hai flush draw trơn |

Với lá Q và lá 10 trên board, **A-K và A-J cùng đuổi một sảnh (straight) A-K-Q-J-10 trong khi lúc này chưa có gì cả.** Khiến đối thủ fold thì thắng ngay; bị call thì vẫn còn outs. Chừng đó là đủ lý do để bet.

JJ và 99 là trường hợp ngược lại. **Không tay nào đang chờ gì cả.** Đôi J cộng lá Q và lá 10 trên board vẫn cần thêm hai lá nữa — một lá K và một lá 9, một lá A và một lá K, hoặc một lá 9 và một lá 8 — mới thành sảnh. Chúng có một đôi, trông như sức mạnh, nhưng tay có thể lật ngược mọi thứ chỉ bằng một lá lại là A-K.

## Button thật ra đang cầm gì?

**Hơn một phần ba — 36,1% — là underpair, nên nó bước vào một board có hai lá broadway với một đôi thấp hơn lá Q — thấp hơn cả hai lá broadway đối với mọi underpair, trừ JJ, nằm giữa hai lá.** Phần còn lại chia thành những tay ăn với lá Q, những tay đang chờ chất cơ, và một cái đuôi nhỏ không có gì. Có một hàng trong bảng dưới đây không mang nghĩa như vẻ ngoài của nó, và đáng để tìm ra trước khi đọc tiếp.

![Thành phần range trên pot 3-bet Q-10-7 hai chất: hàng overpair chỉ có ở phía big blind, hàng second pair chỉ có ở phía button](/images/gto-3bp-dynamic-ranges-vi.webp "Pot 3-bet Q-10-7 · hàng overpair thuộc về big blind, hàng second pair thuộc về button")

| Nhóm | BB (bên 3-bet) | BTN (bên call) |
|---|---|---|
| Sám cô (ở đây là set) | **8,2%** | 6,8% |
| Overpair | **16,4%** | — |
| Top pair (một lá Q) | 20,5% | 20,3% |
| Second pair (một lá 10) | — | **6,8%** |
| Underpair | 16,4% | **36,1%** |
| A-high | **38,4%** | 24,1% |
| K-high hoặc chưa có đôi | — | 6,0% |

Hai hàng gánh cả câu chuyện, và một trong hai là cái bẫy.

**Hàng overpair là độc quyền thật sự:** 16,4% cho big blind, không có gì cho button, vì range call trong ví dụ này hoàn toàn không có **đôi** A hay đôi K trên tay. (Bản thân lá A và lá K thì có khắp nơi — 32 combo A-K và A-J nằm trong hàng A-high.) Đó là một **thiết lập preflop được viết sẵn vào cây**, không phải thứ solver tự suy ra — các lần giải thực tế đôi khi giữ lại vài combo để bảo vệ phần đỉnh của range call.

**Hàng sám cô không phải độc quyền, dù tỷ lệ phần trăm lớn hơn.** 8,2% của 73 combo là 6; 6,8% của 133 combo là 9. **Button có nhiều set hơn ở đây, chứ không ít hơn.** Một tỷ lệ nhỏ hơn của một range rộng hơn vẫn có thể là số lượng lớn hơn, và 133 so với 73 đủ rộng để lật ngược điều đó. (Trên app, hàng này tên là *Xám*. Trên một flop không có đôi, một đôi tẩy trùng với một lá trên board là một **set** — phân biệt này được giải thích kỹ ở [spot board có đôi](/vi/blog/paired-board-strategy); còn trips (1 lá trên tay + board có đôi) chỉ có trên board có đôi, và cả hai đều là sám cô (three of a kind).)

Second pair chỉ thuộc về button vì một lý do cấu trúc: **range 3-bet của big blind không có tay nào chứa đúng một lá 10.** Đôi 10 thì có, nhưng chúng ra set ở flop và nhảy lên một hàng.

Top pair là 20,5% so với 20,3%. **Khác biệt giữa hai range nằm ở phía trên và phía dưới nó, không bao giờ nằm ngay tại nó.**

## Vì sao EQR là 117,8% khi equity là 58,3%?

**Big blind thu về 1,18 lần phần pot của mình dù không có vị trí.** Con số equity realization (EQR — phần equity bạn thực sự thu về) này cao hơn mức 109,6% trên A-K-2 — và **nó không có nghĩa đây là spot (tình huống ra quyết định) tốt hơn.** EV (giá trị kỳ vọng) thực tế của big blind đã *giảm*, từ 16,99bb ở đó xuống **15,46bb** ở đây.

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 58,3% | 41,7% |
| EV (bb) | 15,46 | 7,04 |
| **Equity realization (EQR)** | **117,8%** | 75,1% |

Trong pot 22,5bb, 58,3% equity đáng giá ==22,5 × 58,3% = 13,12bb==, và thu về 15,46bb nghĩa là ==15,46 ÷ 13,12 = 117,8%==.

Khoảng cách equity ở đây *hẹp hơn* trên A-K-2, nơi nó là 68,9% so với 31,1%, vậy mà con số realization lại cao hơn. **Một phần là do mẫu số co lại.** Equity realization đo so với phần của chính bạn, nên khi equity tiến về 50% thì cùng một lợi thế sẽ hiện ra thành một bội số lớn hơn. ⚠ Tuy vậy, phần lớn hơn là thật: đo bằng EV vượt trên phần thô, A-K-2 được ==16,99 − 22,5 × 68,9% = khoảng 1,49bb== còn board này được ==15,46 − 22,5 × 58,3% = khoảng 2,34bb==, nên **bản thân phần dư cũng đã tăng.** Thứ thật sự co lại là phần pot của big blind: ==16,99 ÷ 22,5 = 75,5%== trên A-K-2 so với ==15,46 ÷ 22,5 = 68,7%== ở đây — EQR cao hơn và "lấy được nhiều pot hơn" là hai mệnh đề khác nhau.

75,1% của button cũng không phải bằng chứng độc lập cho điều gì — hai EV cộng lại bằng pot, nên một bên vượt 100% thì bên kia buộc phải dưới 100%. Thứ con số này dựa vào là thế độc quyền overpair, và thứ nó mua được là khả năng bắt các tay trung bình của button trả một cái giá tệ. Vì sao vị trí bình thường đáng tiền được giải thích trong [chơi theo vị trí](/vi/blog/holdem-position-play).

:::note[Mọi EQR trong loạt bài này được trích đúng như solver hiển thị. Tự chia equity và EV đã làm tròn có thể lệch một chữ số thập phân — đó là làm tròn, không phải mâu thuẫn.]:::

## Ra bàn thật thì chơi khác gì?

Mọi điều dưới đây đều giả định **heads-up, pot 3-bet, SPR 4**. Thêm một người cold-call hoặc rút ngắn stack thì "bet cả range" không còn đúng nữa.

- **Chọn size theo board trước khi nhìn tay bài.** Chọn theo sức mạnh tay bài nghĩa là mạnh thì lớn, yếu thì nhỏ — rất dễ bị đọc. Solver dồn 98,4% vào một size ở đây.
- **Trong pot 3-bet trên board có hai kiểu draw, hãy nghĩ đến size lớn trước.** Một phần ba pot tuyên bố "19,8% là đủ để đi tiếp", và cả bốn combo flush draw của button vượt mức đó dư dả (một flush draw trơn chín outs thì không — ==9 ÷ 47 = 19,1%== — nhưng ở đây chỉ big blind cầm loại đó). ⚠ Tuy nhiên đừng cất điều này thành "có draw thì bet lớn" — **chính bài này trích phản ví dụ của nó.** [Board 8-5-2](/vi/blog/3bet-pot-low-board), nơi 78,3% range không có draw nào, cũng bắn size lớn 97,8% số lần, và ở đó lý do là một **range phân cực (polarized)** chứ không phải draw. Hãy đọc mật độ draw và hình dạng range cùng nhau. (Trong pot raise đơn, cùng texture này là một câu hỏi khác — xem ghi chú về pot raise đơn ở trên.)
- **A-K không phải tay check trên flop này.** Với lá Q và lá 10 trên board, nó là gutshot tới Broadway — ⚠ nhưng đó không phải lý do nó bet: trên board thấp 8-5-2 vừa nhắc, nơi không có gì dính tới nó, A-K vẫn vào size lớn 95,9%–97,9% số lần (97,8%–99,9% ở đây). Nên chỉ riêng câu "nó có draw không" không quyết định A-K làm gì. Quy tắc nên mang theo không phải "A-K bet" hay "A-K check" mà là "trước hết hãy nhìn hình dạng toàn bộ range của bạn trên board này".
- **★Đây là câu trả lời cho flop, không phải một kế hoạch.** Bet 14,9bb đưa SPR ở turn xuống 1,4, nên cú bet tiếp theo thực chất là cả stack. Hãy quyết định trước khi bet xem tay này có đi đến đó không. **Một lá cơ ở turn cắt cả hai chiều** — bốn draw kép của button thành bài, nhưng bốn tay của bạn cũng vậy, và tay nào của bạn cũng giữ A♥ — điều đó cũng có nghĩa là khi chính bạn cầm A♥, hai trong bốn tay của button không thể tồn tại. Với một tay A-high không phải chất cơ thì tác động tinh tế hơn: lá J bạn đang chờ không mất đi, nhưng nó bị **nhiễm bẩn**, vì J♥ hoàn thành thùng của ai đó. Một size không thể bao trọn cả ba trường hợp.
- **★Quyết định trước cách đối phó với raise.** Bet gần như cả range nghĩa là gần như cả range có thể bị raise, và ở SPR 4 một cú raise là câu hỏi về cả stack. Set và overpair đi tiếp. **A-high không có hai lá cơ — 24 trong 28 combo đó — là tay fold rõ ràng nhất**, vì một gutshot trơn chỉ có bốn outs. Bốn tay chất cơ là ứng viên đi tiếp, và A♥K♥ cùng A♥J♥ mạnh nhất trong số đó vì chúng còn mang thêm gutshot. Top pair mới là quyết định thật sự, và một lần giải chỉ có flop không trả lời được nó.
- **★Từ ghế button, hãy lên kế hoạch các đôi tầm trung dừng ở đâu.** 36,1% range call ở đây là underpair. ⚠ Tuy vậy, đừng đọc **MDF 60,2% như một chỉ tiêu call** — nó được suy ra bằng cách coi cú bet là bluff thuần không có equity, và **45,1% range bet của big blind đã là tay thành bài** (8,2 trips, 16,4 overpair, 20,5 top pair), nên mức phòng thủ tối ưu thật nằm trên hay dưới con số đó là câu hỏi **lần tính này không trả lời được.** **Turn mới là nơi số phận những đôi này được định đoạt** — một cú bet lớn thứ hai sẽ khiến phần lớn chúng fold, và call flop mà chưa tính trước chuyện đó chính là cách stack rò rỉ dần. (Node turn không có trong lần giải này, nên đó là phán đoán, không phải một con số.)

:::readnext[Đọc tiếp]
/vi/blog/3bet-pot-cbet | Flop không ai check — SPR 4 trong pot 3-bet | /images/gto-3bp-ace-king-oop-vi.webp
/vi/blog/3bet-pot-low-board | Ba combo trúng flop — mà vẫn bet 97,8% | /images/gto-3bp-low-oop-vi.webp
:::

## Tự kiểm tra

Mở [GTO poker solver miễn phí](/vi/solver), vào **Spot mẫu → Board động, hai chất → [⚡ Xem kết quả]**.

Hãy nhìn dải hành động trước: **Bet 14,9bb (66% pot) · 98,4% · 71,9 combo**, hai lựa chọn còn lại đều dưới một phần trăm. Sau đó chuyển «Người chơi:» sang **IP (BTN (bên call))** và nhìn xem bảng thiếu gì — button **không có hàng Overpair và cũng không có hàng Flush draw.** Một nhóm bằng không thì đơn giản là không được vẽ ra, và hai chỗ vắng mặt đó là phần lớn của bài viết này.

Tiếp theo mở **Trainer GTO** ở thanh bên. Nó chia một tay bài theo trọng số range thật và chấm hành động của bạn bằng **EV mất**. Miễn phí, không cần cài đặt, không cần tài khoản.

Một phép đối chiếu hữu ích là board A-high ở spot trước. A♦K♠2♥ là rainbow (3 lá khác chất), nên **không ai có flush draw trên đó**, và toàn bộ range của big blind ở đó đều từ một đôi trở lên. Ở đây hàng "không draw" chỉ ghi 43,8%. ⚠ Nhưng 56,2% còn lại không phải tất cả đều *sống* — 26,0 điểm trong đó là **backdoor**, cần hai lá liên tiếp cùng một chất (chất cơ, hoặc chất bích với những tay cầm hai lá bích) và chỉ thành khoảng 4,2% số lần. Draw thật cộng lại là 30,1%. **Tuy vậy, dòng đó chưa phải toàn bộ lời giải thích** — [flop 8-5-2](/vi/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-vi.webp") ở phần sau của loạt bài này có 78,3% "không draw" mà vẫn bắn size lớn 97,8% số lần. Mật độ draw và hình dạng range đều có tiếng nói.

## Câu hỏi thường gặp

**Q. Bet size trong poker là gì và chọn thế nào?**

A. Hãy xuất phát từ những gì board mang lại cho đối thủ, không phải từ những gì bạn đang cầm. Trên Q-10-7 có hai lá cơ, nơi cả thùng lẫn sảnh đều còn sống, solver dùng hai phần ba pot 98,4% số lần. Trên A-K-2 khô, cùng range đó lại ưu tiên một phần ba pot với 57,8%. Phép thử luôn là: những tay còn có thể cải thiện đang được đưa ra cái giá nào.

**Q. Vì sao nên bet lớn trên board ướt?**

A. Để bắt draw trả giá. Hai phần ba pot đòi người call khoảng 28,5% equity, và theo odds lá kế tiếp thì chỉ hai trong 40 combo draw của họ đạt được — K♥J♥ và 9♥8♥, có mười lăm outs và 31,9%. Mọi tay khác đều hụt nếu chỉ tính một lá, kể cả các draw kép mười hai outs ở mức 25,5% — dù với cả hai lá còn lại, phần lớn các draw đó vẫn giữ hơn 28,5%, nên cái giá này bắt chúng trả giá chứ không khiến chúng fold. Hạ xuống một phần ba pot thì ngưỡng rơi xuống 19,8%, và số combo vượt ngưỡng tăng gấp đôi lên bốn. Tuy vậy, draw không phải con đường duy nhất dẫn tới size lớn — nơi range tách thành mạnh và yếu mà không có phần giữa, một [board khô như 8-5-2](/vi/blog/3bet-pot-low-board) cũng lên tới 97,8%.

**Q. Geometric bet sizing (size bet lũy tiến) là gì?**

A. Là chọn một tỷ lệ pot rồi lặp lại ở mọi vòng cược để cú bet cuối rơi đúng vào all-in. Nó quan trọng nhất khi SPR thấp, lúc bạn đang chọn còn bao nhiêu quyết định chứ không phải còn bao nhiêu tiền. Phép tính cho spot này, và lý do size solver thật sự dùng lại lớn hơn size geometric, đã được trình bày ở trên.

**Q. Thay vào đó có nên overbet không?**

A. Cây này chỉ đưa ra một phần ba và hai phần ba, nên overbet chưa bao giờ nằm trong thực đơn. Mở thêm nó và 98,4% có lẽ sẽ phân bổ lại giữa hai phần ba và overbet, vì cùng một logic — bắt draw trả cái giá tệ nhất có thể — đẩy theo hướng đó. Hãy coi tần suất chính xác là thuộc về cây này, không phải một con số phổ quát.

**Q. A-K chưa có đôi thì bet được ở đây không?**

A. Được. Một lá J duy nhất hoàn thành A-K-Q-J-10, nên nó là gutshot, và 15 trong 18 combo gutshot của big blind là A-K. Đối thủ fold thì thắng pot ngay, bị call thì vẫn còn outs. Thứ khiến nó thành một cú bet là sự kết nối với board, không phải hai lá bài lớn.

**Q. Nếu đối thủ cứ call draw bất chấp giá thì sao?**

A. Khi đó fold equity biến mất, và những con số này không còn mô tả đối thủ của bạn nữa — chúng giả định phòng thủ tối ưu. Trước một calling station, hãy nghiêng về value và cắt bớt bluff, nhưng giữ size lớn. Người chơi đó đang trả một cái giá tệ để draw, và cái giá tệ đó chính là nơi tiền của bạn đến.

**Q. Những con số này có mang sang ván tôi chơi được không?**

A. Được, như một mốc chuẩn khi các điều kiện khớp. Thay đổi range 3-bet, độ sâu stack hay các size trong cây thì tần suất thay đổi theo, và ở đây không tính rake (phí sòng). Phần cấu trúc — một board ướt trong pot 3-bet ở SPR 4 cần một size lớn duy nhất — là phần mang đi được. Lưu ý rằng **thứ hạng các lá trên board góp phần không kém độ ướt**: Q-10-7 đủ broadway để một range 3-bet vẫn ăn khớp với nó, điều không đúng với mọi flop ướt.
`.trim(),
};

export default POST;
