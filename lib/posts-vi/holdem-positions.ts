import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-positions",
  title: "Vị trí trong poker: tên gọi từng ghế và sơ đồ bàn",
  seoTitle: "Ghế đổi tên mỗi ván — các vị trí trong poker và sơ đồ bàn",
  desc: "Tên vị trí đi theo nút dealer, không theo cái ghế. Mọi vị trí trong poker — UTG, hijack, cutoff, button — số ghế, sơ đồ bàn 6 người, ai đi trước: 12 phút.",
  tldr: "Vị trí trong poker là tên ghế tính từ nút dealer — UTG, lojack, hijack, cutoff, button và hai blind — và thường dịch một ghế theo chiều kim đồng hồ sau mỗi ván. Preflop, UTG hành động trước và big blind cuối cùng; postflop, small blind đi trước và button đi cuối (heads-up thì button chính là small blind: đi trước preflop, đi cuối postflop). Số ghế vật lý không bao giờ đổi, chỉ có vị trí đổi.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-09-28",
  keepImagesInBody: true,
  readTime: "12 phút",
  emoji: "🎯",
  image: "/images/holdem-positions-hero.webp",
  imageAlt: "Góc nhìn từ trên xuống một bàn poker chuyên nghiệp với 9 vị trí người chơi, chồng chip và nút dealer màu vàng",
  tags: ["vị trí trong poker", "các vị trí trong poker", "poker positions", "position poker", "utg poker là gì", "vị trí poker", "cutoff poker", "hijack poker", "button poker", "poker positions 6 max"],
  content: `
Ván cash game live đầu tiên của tôi, tôi ngồi ở chỗ mà sau này mới biết là UTG. Tôi nhìn xuống thấy J♥ J♠ và raise (tố). Hijack call (theo). Cutoff call. Button call. Big blind 3-bet (re-raise, tố lại). Tôi không biết phải làm gì — tôi call và rỉ chip suốt ba vòng cược.

Ba ván sau, tôi ngồi ở button với đúng J♥ J♠ ấy. Tôi raise. Tất cả fold (bỏ bài). Tôi thắng $14 mà chưa cần nhìn thấy flop.

Cùng một tay bài. Kết quả hoàn toàn khác. Thứ duy nhất thay đổi là chỗ ngồi của tôi — và đêm đó tôi nhận ra mình thậm chí không biết các ghế được *gọi* là gì, nói chi đến ý nghĩa của chúng. Nếu bạn vẫn đang học một ván bài chạy từ lúc chia đến showdown (lật bài) ra sao, hãy bắt đầu với [luật chơi Texas Hold'em](/vi/blog/texas-holdem-rules-for-beginners); bài này là sơ đồ ghế mà bài luật ấy mặc định bạn đã biết.

---

> **Trả lời nhanh**
> Vị trí trong poker là ==những ghế có tên, tính từ nút dealer== — UTG, lojack, hijack, cutoff, button, small blind, big blind — và chúng ==thường dịch một ghế theo chiều kim đồng hồ sau mỗi ván== khi nút dealer di chuyển. Preflop, UTG hành động trước và big blind hành động cuối. Postflop, small blind hành động trước và button hành động cuối. (Heads-up, button chính là small blind: đi trước preflop, đi cuối postflop.)

---

## Các vị trí trong poker gồm những gì? (Sơ đồ bàn đầy đủ)

Một vị trí không phải là cái ghế — nó là **tên gọi cho chỗ bạn ngồi so với nút dealer (button)**, và nó quyết định ==bạn hành động lúc nào ở mọi vòng cược==. Trong một ván bình thường, nút dealer dịch một ghế theo chiều kim đồng hồ sau mỗi ván, nên mỗi người ở bàn mang một cái tên khác nhau từ ván này sang ván kế.

Đây là sơ đồ vị trí 9-max đầy đủ — tên từng ghế, viết tắt, khu vực, và chính xác thứ tự hành động trước và sau flop:

![Bàn poker 9 người với chồng chip ở mọi ghế và nút dealer đánh dấu D đặt trước mặt một người chơi](/images/holdem-button-position-hero.webp "Nút dealer quyết định vị trí của mọi ghế và thứ tự hành động")

| Ghế | Viết tắt | Khu vực | Preflop | Postflop |
|:---|:---|:---|:---:|:---:|
| Under the Gun | **UTG** | Sớm | Thứ 1 (đầu tiên) | Thứ 3 |
| Under the Gun +1 | **UTG+1** | Sớm | Thứ 2 | Thứ 4 |
| Under the Gun +2 | **UTG+2** | Sớm | Thứ 3 | Thứ 5 |
| Lojack | **LJ** | Giữa | Thứ 4 | Thứ 6 |
| Hijack | **HJ** | Giữa | Thứ 5 | Thứ 7 |
| Cutoff | **CO** | Muộn | Thứ 6 | Thứ 8 |
| Button | **BTN** | Muộn | Thứ 7 | **Cuối cùng** |
| Small Blind | **SB** | Blind | Thứ 8 | **Thứ 1** |
| Big Blind | **BB** | Blind | Thứ 9 (cuối) | Thứ 2 |

Để ý cú lật: ==hai blind hành động cuối preflop nhưng đầu tiên postflop==, còn button hành động cuối ở mọi vòng cược postflop. Chính thứ tự đó — không phải lá bài — khiến một số ghế tốt hơn các ghế khác về mặt cấu trúc.

> **Lưu ý ở bàn live:** button là một đĩa nhựa thật, thường dịch một ghế theo chiều kim đồng hồ sau mỗi ván. "UTG" là bất kỳ ai đang ngồi cách button ba ghế về bên trái tại thời điểm đó — không phải một cái ghế cố định.

---

## Tên và viết tắt các vị trí poker: UTG, LJ, HJ, CO, BTN, SB, BB

Mọi tên vị trí bạn sẽ nghe ở bàn hoặc đọc trong bài chiến thuật đều có một viết tắt tiếng Anh, và các vị trí poker này được gọi bằng tên tiếng Anh ở mọi phòng bài trên thế giới — kể cả ở Việt Nam. Đừng dịch chúng; hãy học viết tắt, biết ghế đó nằm đâu so với nút dealer, và nhớ nhóm của nó: sớm (EP), giữa (MP), muộn (LP) hay blind. Bảng giải mã:

| Viết tắt | Tên đầy đủ | Nhóm | Chỉ ghế nào |
|:---|:---|:---|:---|
| **UTG** | Under the Gun | Sớm (EP) | Hành động đầu tiên preflop, ngay bên trái big blind |
| **UTG+1 / UTG+2** | Under the Gun cộng một / cộng hai | Sớm (EP) | Hai ghế kế tiếp theo chiều kim đồng hồ từ UTG |
| **LJ** | Lojack | Giữa (MP) | Cách button ba ghế về bên phải |
| **HJ** | Hijack | Giữa (MP) | Cách button hai ghế về bên phải |
| **CO** | Cutoff | Muộn (LP) | Cách button một ghế về bên phải |
| **BTN** | Button (Dealer) | Muộn (LP) | Ghế có đĩa dealer — hành động cuối postflop |
| **SB** | Small Blind | Blind | Ghế đầu tiên bên trái button; đặt khoản cược bắt buộc nhỏ |
| **BB** | Big Blind | Blind | Ghế thứ hai bên trái button; đặt khoản cược bắt buộc đủ mức |

Bạn cũng sẽ gặp các nhãn khu vực rộng hơn: ==**EP** (vị trí sớm)== gồm các ghế UTG, ==**MP** (vị trí giữa)== gồm lojack và hijack, và ==**LP** (vị trí muộn)== gồm cutoff và button. Sách cũ gộp lojack và hijack thành "MP1/MP2" — cùng ghế, khác nhãn.

Biết tên là bước một. Thực sự *làm gì* từ mỗi ghế — range, steal, chơi in position (có vị trí) hay out of position (không có vị trí) — là câu hỏi chiến thuật, và nó nằm trong [bài chiến thuật vị trí](/vi/blog/holdem-position-play).

---

## Vị trí ngồi và số ghế khác nhau thế nào — vì sao ghế số 1 không phải là một vị trí?

Điều này làm gần như mọi người chơi live lần đầu bối rối: khi nhân viên sàn gọi **"Bàn 12, ghế 5"**, con số đó ==không liên quan gì đến vị trí trong poker==. Số ghế là địa chỉ vật lý gắn vào cái ghế, dùng cho việc xếp chỗ và mang chip; vị trí là vai trò được tính từ nút dealer và đổi sau mỗi ván. Ghế 5 có thể là button ván này và cutoff ván sau.

Ở phần lớn phòng bài, ghế vật lý được đánh số từ ghế ngay bên trái dealer — ==ghế số 1 theo quy ước là ghế đầu tiên bên trái dealer==, đếm theo chiều kim đồng hồ đến ghế 9 hoặc 10 ở bên phải dealer. Những con số đó bắt vít vào ghế. Nhân viên dùng chúng cho việc hậu cần: xếp người chơi mới, mang chip, gọi giờ.

Vị trí thì ngược lại — chúng ==xoay một ghế theo chiều kim đồng hồ cùng nút dealer, thường là mỗi ván==. Ghế 5 có thể là button ván này, cutoff ván sau, và hijack ván sau nữa.

:::compare
Số ghế (vật lý) | Vị trí (poker)
Gắn cố định vào ghế — ghế 1 thường là ghế ngay bên trái dealer | Di chuyển cùng nút dealer sau mỗi ván
Nhân viên dùng: "Ghế 5, chip đang tới" | Chiến thuật dùng: "cutoff open"
Không bao giờ đổi trong buổi chơi | Thường đổi mỗi ván, một ghế theo chiều kim đồng hồ
Cho biết bạn ngồi Ở ĐÂU | Cho biết bạn hành động KHI NÀO
:::

Vậy nên "ghế số 1 trong poker là gì?" có một câu trả lời nhàm chán — đó là một cái ghế — và đó chính là điểm mấu chốt. ==Số ghế là địa chỉ; vị trí là công việc==, và công việc được giao lại sau mỗi ván.

---

## Vị trí UTG trong poker là gì — vì sao gọi là under the gun?

**UTG là viết tắt của "Under the Gun"** — ghế ngay bên trái big blind, và là ==người hành động đầu tiên preflop==. Cái tên gợi lên áp lực của tình huống: bạn phải bỏ chip ra trước khi thấy bất kỳ đối thủ nào làm gì, như thể đang hành động dưới họng súng. Trong poker tiếng Việt, cách nói "under the gun" hay "vị trí UTG" được giữ nguyên tiếng Anh.

Trong một bàn 9 người đầy đủ, thực ra có ba ghế "under the gun" — **UTG, UTG+1 và UTG+2** — đếm theo chiều kim đồng hồ từ big blind. Chỉ ghế đầu tiên hành động mà không có chút thông tin nào; ghế +1 và +2 ít nhất còn thấy được một hai quyết định trước.

Đó là định nghĩa. *Cách chơi* UTG — vì sao nó đòi hỏi range chặt nhất bàn, và vì sao raise-hay-fold là đường chơi chuẩn ở đó — được nói kỹ trong [bài chiến thuật vị trí](/vi/blog/holdem-position-play).

---

## Vị trí HJ (hijack) và LJ (lojack) là gì — vì sao có tên đó?

**Hijack (HJ)** là ghế cách button hai ghế về bên phải. **Lojack (LJ)** nằm xa hơn một ghế, cách button ba ghế về bên phải. Hai ghế này gộp lại thành vị trí giữa (MP) trong bàn 9-max hiện đại. Cả hai cái tên đều là tiếng lóng poker, không có nguồn gốc chính thức được ghi chép — nhưng câu chuyện thường được kể là thế này:

- **Hijack:** cutoff và button là hai ghế kinh điển để steal blind. Khi người ngồi sớm hơn một ghế raise trước, họ ==**"hijack" (cướp) cú steal**== mà các ghế muộn đang chờ thực hiện — nên chính cái ghế đó nhận lấy cái tên.
- **Lojack:** ra đời sau, như một ==cách chơi chữ vui từ "hijack"== — ghế thấp hơn một bậc trong trật tự. Phần lớn người kể cũng nghe thấy âm hưởng của thương hiệu chống trộm LoJack: một hijack, thấp hơn một nấc.

Hãy coi cả hai là chuyện kể ở bàn hơn là từ nguyên học. Thứ không phải chuyện kể: hijack và lojack là những tên gọi thật, chuẩn, bạn sẽ thấy trên phần lớn range chart và trang huấn luyện hiện đại, vì thế chúng đáng để học thuộc.

---

## Vị trí CO (cut off) và nút dealer (button) có gì đặc biệt?

**Cutoff (CO)** là ghế ==cách button một ghế về bên phải== — vị trí cuối cùng trước dealer. Hai câu chuyện nguồn gốc lưu truyền: một bản nói ghế này "cắt đứt" (cut off) cơ hội steal blind của button bằng cách raise trước; bản cũ hơn nói rằng trong các ván chơi tại gia tự chia bài, người ngồi bên phải dealer ==cắt bộ bài== sau khi xào. Dù sao đi nữa, cái tên đã bám lại, và cutoff được mọi nơi tính là vị trí muộn.

**Button (BTN)** — còn gọi là **vị trí dealer** — là ghế được đánh dấu bằng đĩa dealer vật lý. Ở bàn casino, một dealer (người chia bài) chuyên nghiệp lo phần bài, nên nút dealer chỉ đơn giản đánh dấu ==ai *sẽ* là người chia== nếu tự chia, và đó là thứ neo thứ tự cược: button hành động ==cuối cùng ở mọi vòng cược postflop==, và mọi ghế khác ở bàn được đặt tên theo khoảng cách tới chiếc đĩa đó.

Quyền hành động cuối được bảo đảm ấy là lý do button được coi là ghế sinh lời nhất trong poker — lập luận đầy đủ, với các con số đứng sau, nằm trong [bài chiến thuật vị trí](/vi/blog/holdem-position-play).

---

## Vị trí small blind (SB) và big blind (BB) hoạt động ra sao?

Hai ghế bên trái button vừa là vị trí *vừa* là khoản cược bắt buộc cùng lúc. Blind (mù — cược bắt buộc) là tiền bạn phải đặt trước khi nhìn bài, và chính hai ghế này mang tên theo khoản cược đó:

- **Small blind (SB)** (mù nhỏ): ghế đầu tiên bên trái button. Đặt một khoản cược bắt buộc — thường bằng một nửa big blind — trước khi bài được chia.
- **Big blind (BB)** (mù lớn): ghế kế tiếp theo chiều kim đồng hồ. Đặt khoản cược bắt buộc đủ mức, định ra giá để vào ván.

Với tư cách vị trí, chúng được định nghĩa bằng cú lật trong thứ tự hành động: hai blind hành động ==cuối cùng preflop== (họ đã trả tiền rồi, nên mọi người khác phải phản ứng với cược của họ trước) nhưng ==đầu tiên postflop==, trước cả bàn, ở flop, turn và river như nhau.

Vì sao blind tồn tại, mỗi vòng bàn tốn bao nhiêu, và cách phòng thủ chúng là một chủ đề riêng — [bài về small blind và big blind](/vi/blog/holdem-blind-meaning) nói đầy đủ về cơ chế và phép toán của khoản cược bắt buộc.

---

## Ai hành động trước trong poker — preflop và postflop khác nhau thế nào?

Câu hỏi được hỏi nhiều nhất về vị trí, trả lời trong một bảng: preflop, UTG đi trước và big blind đi cuối; từ flop trở đi, small blind đi trước và button đi cuối. Hai blind chỉ đi trước *sau* flop, vì preflop họ đã bỏ tiền sẵn nên cả bàn phải phản ứng với họ trước.

| Vòng cược | Hành động đầu tiên | Hành động cuối cùng |
|:---|:---|:---|
| **Preflop** | **UTG** — ghế đầu tiên bên trái big blind | **Big blind** — có thể check hoặc raise nếu chưa ai raise |
| **Flop / Turn / River** | **Small blind** — hoặc ghế còn chơi đầu tiên bên trái button | **Button** — hoặc ghế còn chơi gần nhất trước nó |

Vậy — **hai blind có đi trước không?** ==Preflop, không. Postflop, có.== Trước flop hai blind đã bỏ tiền vào, nên hành động bắt đầu từ UTG và quay về họ cuối cùng — big blind hành động cuối cùng trong tất cả. Sau flop, thứ tự đặt lại theo chiều kim đồng hồ từ button: small blind lên tiếng trước, big blind thứ hai, và button luôn luôn cuối.

Và giữa hai blind với nhau: ==small blind hành động trước big blind ở mọi vòng cược==, preflop lẫn postflop — với một ngoại lệ, heads-up, nói ở dưới.

Một câu hỏi láng giềng đáng một dòng: ở **showdown**, mặc định là người bet hoặc raise cuối cùng ở vòng cược cuối (last aggressor) lật bài trước (nếu river check hết, ghế còn chơi đầu tiên bên trái button lật trước) — phép tắc đầy đủ nằm trong [luật showdown](/vi/blog/holdem-showdown-rules). Còn trình tự trọn vẹn từng vòng của một ván bài, xem [thứ tự hành động trong Texas Hold'em](/vi/blog/holdem-game-order).

---

## Vị trí bàn poker từ heads-up đến 10 người khác nhau ra sao? (6-max và full ring)

Tên vị trí không đổi theo kích cỡ bàn — ==chúng rụng dần từ vị trí sớm trước== khi bớt người chơi. Button, hai blind, cutoff và hijack tồn tại lâu nhất; các ghế UTG+1 trở lên chỉ có ở bàn full ring (bàn 9 người). Đây là sơ đồ từ 2 đến 10 người, liệt kê theo thứ tự hành động preflop:

| Số người | Thứ tự hành động preflop (đầu → cuối) |
|:---:|:---|
| **2 (heads-up)** | BTN (đặt small blind) → BB |
| **3** | BTN → SB → BB |
| **4** | CO (ghế "UTG" ở đây) → BTN → SB → BB |
| **5** | HJ (ghế "UTG" ở đây) → CO → BTN → SB → BB |
| **6 (6-max)** | UTG (còn gọi là LJ) → HJ → CO → BTN → SB → BB |
| **9 (full ring)** | UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB |
| **10** | UTG → UTG+1 → UTG+2 → UTG+3 → LJ → HJ → CO → BTN → SB → BB |

**Heads-up là trường hợp phá vỡ trực giác của mọi người.** Chỉ với hai người chơi, ==button đặt small blind== — cùng một ghế vừa là BTN vừa là SB. Nghĩa là button hành động ==**đầu tiên** preflop== (big blind hành động cuối, như mọi khi) nhưng vẫn hành động ==**cuối cùng** ở mọi vòng cược postflop==, còn big blind hành động trước postflop. Mọi kích cỡ bàn khác theo khuôn mẫu bình thường; chỉ heads-up mới hợp nhất ghế tốt nhất với một blind.

**6-max và full ring** thuần túy là phép trừ: ba ghế sớm (UTG, UTG+1 và UTG+2) biến mất và lojack kế thừa cái tên UTG, nên 6-max chạy UTG → HJ → CO → BTN → SB → BB. Hệ quả thực tế không phải là một ghế chơi "muộn hơn" — cutoff vẫn có đúng ba người sau lưng trong cả hai bàn. Hệ quả là ==khi các ghế sớm biến mất, bạn ngồi ở blind và ở vị trí muộn thường xuyên hơn hẳn, và ít người open trước bạn hơn== — UTG ở 6-max đối mặt năm đối thủ, không phải tám — đó là lý do ghế đầu tiên open rộng hơn và nhìn chung bạn chơi nhiều tay bài hơn ở bàn ít người, dù range của cutoff gần như không đổi. Các con số theo từng ghế nằm trong [bài chiến thuật vị trí](/vi/blog/holdem-position-play), những tay bài cụ thể lấp đầy từng range được vẽ trong [hướng dẫn bài khởi đầu poker](/vi/blog/holdem-starting-hands-chart), và bạn có thể tra ngay bằng [bảng bài khởi đầu theo vị trí](/vi/hand-chart).

> **Lưu ý về tên gọi:** một số trang và phòng bài gắn nhãn ghế đầu tiên của 6-max là "LJ" hoặc "MP" thay vì UTG, và các ghế giữa ở bàn 10 người đôi khi hiện là "MP1/MP2". Nhãn thay đổi; thứ tự hành động thì không bao giờ.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-position-play | Chiến thuật vị trí: in position và out of position | /images/holdem-position-play-hero.webp
/vi/blog/holdem-starting-hands-chart | Bài khởi đầu theo từng vị trí | /images/holdem-starting-hands-chart-hero.webp
:::

## Câu hỏi thường gặp

**Q. UTG trong poker là gì?**

A. UTG là viết tắt của "Under the Gun" — ghế ngay bên trái big blind, và là người hành động đầu tiên preflop. Cái tên gợi lên áp lực phải bỏ chip ra trước khi thấy bất kỳ đối thủ nào quyết định. Ở bàn full ring, hai ghế kế tiếp được gọi là UTG+1 và UTG+2.

**Q. Hijack trong poker là gì?**

A. Hijack (HJ) là ghế cách nút dealer hai ghế về bên phải, ngay trước cutoff. Đó là ghế muộn hơn trong hai ghế vị trí giữa ở bàn 9-max và là ghế hành động thứ hai preflop ở 6-max. Câu chuyện thường kể về cái tên: một cú raise từ ghế này "hijack" (cướp) cú steal blind mà cutoff và button đang ở đúng vị trí để thực hiện.

**Q. LJ trong poker là gì?**

A. Lojack (LJ) là ghế cách button ba ghế về bên phải — ghế sớm hơn trong hai ghế vị trí giữa ở 9-max. Ở 6-max, đó là ghế hành động đầu tiên và thường chỉ được gọi là UTG. Cái tên thường được kể như một cách chơi chữ vui từ "hijack" (thấp hơn một ghế), hay gắn với thương hiệu chống trộm LoJack — chuyện kể ở bàn hơn là từ nguyên có ghi chép.

**Q. Small blind hay big blind hành động trước?**

A. Small blind hành động trước big blind ở mọi vòng cược. Preflop, cả hai blind hành động cuối (big blind cuối cùng trong tất cả — với quyền check hoặc raise nếu chưa ai raise); postflop, small blind là ghế hành động đầu tiên ở bàn. Ngoại lệ duy nhất là heads-up, khi button đặt small blind và big blind hành động trước postflop.

**Q. Bàn poker 6-max có bao nhiêu vị trí?**

A. Sáu: UTG (còn gọi là lojack), hijack, cutoff, button, small blind và big blind. So với bàn 9-max, ba ghế sớm (UTG, UTG+1 và UTG+2) đơn giản biến mất và lojack kế thừa cái tên UTG — tên bị bỏ từ vị trí sớm trước, nên cả hai ghế giữa đều còn. Mỗi ghế giữ nguyên tên — hijack, cutoff, button và hai blind — vẫn có cùng số người sau lưng như ghế cùng tên ở full ring, nhưng khi các ghế sớm biến mất bạn ngồi ở blind và vị trí muộn thường xuyên hơn hẳn, nên range trung bình rộng hơn.

**Q. Vị trí trong poker có đổi sau mỗi ván không?**

A. Có. Nút dealer dịch một ghế theo chiều kim đồng hồ sau mỗi ván, và vì mọi vị trí đều được đặt tên theo khoảng cách tới button, vị trí của mỗi người thường dịch một ghế mỗi ván. Qua trọn một vòng bàn ổn định, bạn sẽ ngồi mỗi vị trí đúng một lần — ngoại lệ xảy ra khi có người bị loại hoặc rời bàn và bàn chơi dead button (cùng một người khi đó có thể hành động cuối hai ván liên tiếp), hoặc khi có người mới vào, bàn bị gộp, hay ván đi vào heads-up.

**Q. Ghế số 1 trong poker có phải là một vị trí không?**

A. Không — ghế số 1 là một cái ghế vật lý, không phải vị trí. Ở phần lớn phòng bài, đó là ghế ngay bên trái dealer, các số đếm theo chiều kim đồng hồ đến ghế 9 hoặc 10. Nhân viên dùng số ghế để xếp chỗ và hậu cần. Vị trí poker (UTG, button, blind) xoay độc lập sau mỗi ván, nên ghế 1 có thể là bất kỳ vị trí nào.

---

## Những điều cần nhớ

1. **Vị trí là tên gọi, không phải cái ghế.** Mỗi ghế được đặt tên theo khoảng cách tới nút dealer, và mỗi tên thường dịch một ghế theo chiều kim đồng hồ sau mỗi ván.
2. **Sơ đồ trong một dòng:** UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB. Preflop bắt đầu ở UTG và kết thúc ở big blind; postflop bắt đầu ở small blind và kết thúc ở button.
3. **Số ghế ≠ vị trí.** Ghế 1 theo quy ước là ghế ngay bên trái dealer và không bao giờ di chuyển; vị trí xoay sau mỗi ván. Một bên là địa chỉ, bên kia là công việc.
4. **Kích cỡ bàn trừ từ phía trước.** 6-max bỏ các ghế sớm; heads-up hợp nhất button với small blind — hành động đầu tiên preflop, cuối cùng postflop.

Khi tên gọi đã thành bản năng, lợi thế thật sự đến từ việc bạn làm gì với chúng — [cách chơi từng vị trí](/vi/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp"), từ range open đến chơi in position và out of position, là bài đọc tiếp theo. Từ đó, [hướng dẫn bài khởi đầu poker](/vi/blog/holdem-starting-hands-chart) ánh xạ từng tay bài cụ thể vào từng ghế cụ thể, và [bài thứ hạng tay bài](/vi/blog/holdem-hand-rankings) phân định thứ gì thực sự thắng ở showdown.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Hướng dẫn người mới</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Luật chơi Texas Hold'em cho người mới</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Một ván bài trọn vẹn diễn ra thế nào từ lúc chia đến showdown</div>
  </a>
  <a href="/vi/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật vị trí</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Chiến thuật in position và out of position</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Range open và nên làm gì từ mỗi ghế</div>
  </a>
  <a href="/vi/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thứ tự hành động</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thứ tự hành động trong Texas Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Trình tự preflop → flop → turn → river</div>
  </a>
  <a href="/vi/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blind</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Small blind và big blind, giải thích rõ</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao chúng tồn tại và cách chơi đúng từ hai ghế này</div>
  </a>
</div>
`.trim(),
};

export default POST;
