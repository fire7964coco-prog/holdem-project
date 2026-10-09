import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-continuation-bet",
  title: "Continuation bet (c-bet): khi nào cược ở flop, bao nhiêu và khi nào check",
  seoTitle: "Vì sao c-bet mọi flop ngốn chip — c bet là gì trong poker",
  desc: "Cứ raise là cược tiếp ở flop? Continuation bet là gì, flop nào nên c-bet hay check, sizing nhỏ ở flop khô, lớn ở flop ướt, và tần suất khi có vị trí: 15 phút.",
  tldr: "Continuation bet (c-bet) là cược ở flop của người đã raise preflop. Quy tắc hiện đại không phải 'c-bet mọi flop' mà là cược nhỏ và thường ở flop có lợi cho range của bạn (bài chung cao, khô như K-7-2), check ở flop có lợi cho đối thủ (thấp, liên kết như 7-6-5). Size khoảng 1/3 pot ở flop khô, 2/3 trở lên ở flop ướt; c-bet ít hơn khi không có vị trí nếu bạn là người raise duy nhất, và ít hơn nhiều trong pot nhiều người.",
  category: "strategy",
  date: "2026-10-09",
  updated: "2026-10-09",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "15 phút",
  emoji: "🔥",
  image: "/images/holdem-continuation-bet-hero.webp",
  imageAlt: "Một người chơi poker đặt chip cược lên flop vừa mở sau khi raise preflop, khoảnh khắc continuation bet kinh điển trên mặt nỉ xanh",
  tags: ["c bet là gì", "c bet poker là gì", "c bet poker", "cbet poker", "continuation bet", "c-bet trong poker", "continuation bet là gì", "delayed c-bet", "c-bet sizing"],
  content: `
Vài năm đầu chơi poker, "c-bet" là kế hoạch flop duy nhất tôi có. Tôi raise (tố) preflop, nên tôi bet flop. Lần nào cũng vậy. Board Át cao, tôi bet. Board đầy sảnh (straight) và thùng (flush) rõ ràng trúng đậm người vừa call (theo) tôi? Tôi vẫn bet — rồi bị raise, bị call, bị check-raise đuổi khỏi hết pot này đến pot khác. Tôi tưởng c-bet *chính là* chiến thuật. Hóa ra c-bet là con dao mổ, và tôi đang vung nó như cái búa.

**Continuation bet (c-bet — cược tiếp tục)** là cú cược ở flop của người đã raise trước đó. Đó là cú cược phổ biến nhất trong poker — và bị lạm dụng tệ nhất. Lời khuyên cũ là "c-bet gần như mọi flop." Chiến thuật hiện đại, đã kiểm chứng bằng solver, nói một điều hữu ích hơn và sinh lời hơn: ==bet những flop có lợi cho range *của bạn*, và check những flop có lợi cho range của đối thủ.== Đây là cẩm nang c-bet hoàn chỉnh — flop nào, thường xuyên đến đâu, bao nhiêu, có và không có vị trí, pot nhiều người, và khi nào check là nước đi thắng. Nó là nửa flop của một [chiến thuật Texas Hold'em](/vi/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") thắng.

---

### C-bet qua những con số

:::stripe
~2 trong 3 | Tần suất một tay bài trượt flop
⅓ pot | Cỡ "range bet" nhỏ trên board khô
55–70% | Tỷ lệ c-bet flop tổng thể lành mạnh
Check | Thường là nước đi tốt nhất, không phải yếu
:::

---

## C-bet trong poker là gì?

**Continuation bet là cú cược ở flop của người đã là kẻ tấn công trước flop** — người raise cuối cùng. Bạn "tiếp tục" kể câu chuyện sức mạnh bạn đã bắt đầu preflop. Quan trọng là ==bạn không cần trúng flop để c-bet==; một phần lớn những cú c-bet tốt được thực hiện với tay bài trượt hoàn toàn. Nói gọn: c-bet là cược tiếp ở flop vì bạn là người đã giành quyền chủ động preflop.

Lý do nó hiệu quả là một thống kê đơn giản: **hai lá bài tẩy không đôi không tạo được đôi ở flop khoảng hai phần ba số lần (67,6%).** Nên khi bạn bet, đối thủ cũng thường trượt — và rất nhiều tay bài như thế fold (bỏ bài). Bạn không bet vì bạn mạnh; bạn bet vì *họ có lẽ yếu* và bạn là người đã giành quyền dẫn.

Khi đã biết c-bet ở flop, phần còn lại của cái thang "barrel" đi theo:

- **Delayed c-bet (c-bet trì hoãn)** — bạn *check* ở flop, rồi bet ở turn. Tuyệt vời cho những pot mà flop có lợi cho đối thủ nhưng turn thay đổi tình hình.
- **Double barrel** — bạn c-bet flop và bet *lần nữa* ở turn.
- **Triple barrel** — bạn bet cả ba vòng: flop, turn và river. Đường chơi hung hãn nhất, dành cho value mạnh hoặc một cú bluff có blocker được chọn kỹ.

Nếu các [hành động cược](/vi/blog/holdem-betting-actions) nền tảng như check, bet và raise còn mơ hồ, hãy bắt đầu ở đó. Còn không, hãy sửa sai lầm mà gần như ai cũng mắc.

---

## Vì sao lời khuyên cũ "c-bet mọi flop" đã sai — điều gì thay đổi?

Nếu bạn học poker trước thời solver, bạn được bảo c-bet khoảng hai phần ba pot trên *phần lớn* flop. Nó hiệu quả một thời gian vì đối thủ fold quá nhiều. Rồi ai cũng học cách phản công — float, check-raise và call xuống tận river — và c-bet vô tội vạ trở thành lỗ hổng. Điều thay đổi là người ta nhận ra flop không thuộc về ai raise, mà thuộc về range nào mạnh hơn trên board đó.

Đây là điều then chốt mà chiến thuật hiện đại thực sự nói, vì rất dễ hiểu sai: **nó KHÔNG phải "c-bet ít hơn ở mọi nơi."** Nó là một *sự phân chia*:

- Trên board có lợi cho bạn, bet **nhỏ và còn thường xuyên hơn** lời khuyên cũ — đôi khi toàn bộ range.
- Trên board có lợi cho đối thủ, **check nhiều hơn hẳn** — và bet lớn hơn, chọn lọc hơn khi bạn bet.

Khái niệm nền là ==lợi thế range (range advantage)==: range tổng thể của ai mạnh hơn trên flop cụ thể này. Là người raise preflop, bạn cầm nhiều bài lớn và overpair (đôi tẩy cao hơn mọi lá trên board) hơn, nên **board cao, khô thuộc về bạn** — còn board đầy bài trung liên kết thuộc về người đã call. Nắm vững một ý đó và bạn đã đi trước mọi người chơi "cứ c-bet" ở bàn.

Và lợi thế range chưa phải toàn bộ câu chuyện — chồng thêm vị trí lên và hiệu ứng trở nên cực đoan. Trên A-7-2 rainbow, solver cho người call check 98,2% range của mình, kể cả top pair (đôi cao nhất) — range của họ chỉ có 45,1% equity (phần pot kỳ vọng, tính cả khi chia pot) so với 54,9%, vậy mà việc không có vị trí biến khoảng cách khiêm tốn đó thành một cú check gần như toàn bộ. Phân tích đầy đủ nằm trong [top pair mà vẫn check](/vi/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp").

---

## Flop nào nên c-bet? Tất cả nằm ở kết cấu board

![Một flop J-7-2 rainbow khô, rời rạc trên mặt nỉ xanh với một chồng chip nhỏ cược phía trước, kiểu board bài cao thuộc về người raise preflop](/images/holdem-cbet-dry-board.webp "Flop cao, khô, rời rạc như J-7-2 này có lợi cho người raise preflop — những board c-bet nhỏ, tần suất cao kinh điển")

Đây là trái tim của c-bet. Trước khi nghĩ đến sizing hay tần suất, hãy hỏi một câu: **flop này trúng range của tôi, hay của đối thủ?** Kết cấu bài chung (board texture) trả lời câu đó: board cao, khô, rời rạc nghiêng về người raise; board thấp, liên kết nghiêng về người call. Đây là tấm bản đồ:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Loại flop | Ví dụ | Có lợi cho ai | Khi có vị trí | Vì sao |
|:---|:---|:---|:---|:---|
| **Cao, khô, rời rạc** | K‑7‑2, A‑8‑3 | **Bạn (người raise)** | Bet **thường & nhỏ** (⅓) | Bạn có nhiều top pair & overpair hơn; họ trượt |
| **Thấp, liên kết** | 7‑6‑5, 9‑8‑6 | **Người call** | **Check nhiều hơn**; bet lớn & chọn lọc khi bet | Trúng suited connector và đôi nhỏ của họ |
| **Có đôi thấp** | 8‑8‑3, 5‑5‑2 | **Bạn (nhỉnh hơn)** | Bet **thường & nhỏ** | Chẳng bên nào có trips nhiều; lá cao/overpair của bạn dẫn |
| **Đồng chất (monotone)** | K♠9♠4♠ | Lẫn lộn — thận trọng | Bet **ít hơn, nhỏ hơn** | Một thùng đã thành giới hạn cả hai range; đi rẻ |
| **Hai chất & ướt** | Q♥J♥7♣ | Nghiêng về người call | **Phân cực:** lớn với value/bài chờ, check bài chưa có gì (air) | Vô số bài chờ — bắt trả giá hoặc rút lui |

</div>

Hai ý tưởng liên quan làm toàn bộ công việc ở đây:
- **Lợi thế range quyết định bạn bet *thường xuyên* đến đâu.** Nhiều phần range của bạn mạnh trên board này → bet thường xuyên hơn.
- **Lợi thế nut quyết định bạn bet *lớn* đến đâu.** Bạn cầm nhiều tay bài tốt nhất tuyệt đối hơn (set, sảnh) → bet lớn hơn.

Phần tinh tế: bạn có thể có cái này mà không có cái kia. Trên A‑8‑3 bạn có nhiều top pair hơn hẳn (lợi thế range) nhưng gần như chẳng ai có set (cầm đôi trên tay + 1 lá trên board), nên bạn **bet thường nhưng nhỏ**. Trên board mà bạn cầm nhiều set và overpair hơn hẳn, bạn **bet lớn**. Nắm thẳng hai đòn bẩy này và sizing c-bet sẽ không còn là chuyện đoán mò.

---

## Nên c-bet thường xuyên đến mức nào? (Tần suất)

Không có một tỷ lệ c-bet "đúng" duy nhất — ai đưa bạn một con số là đang bán cho bạn một lỗ hổng. Tần suất dao động theo vị trí, board và số người trong pot. Đây là bảng tra nhanh:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tình huống | Tần suất c-bet ước lượng | Ghi chú |
|:---|:---:|:---|
| **Có vị trí, heads-up, board khô** | **70–100%** (nhỏ) | "Range bet" kinh điển — bet gần như mọi thứ, rất nhỏ |
| **Có vị trí, heads-up, board ướt** | **~50–60%** | Phân cực hơn — value và bài chờ bet, bài chưa có gì check |
| **Không có vị trí, heads-up (pot raise đơn, bạn là người raise)** | **~30–45%** | Check nhiều hơn hẳn để bảo vệ range check. Là *người 3-bet* ở OOP thì lật ngược: hơn 97% trên cả ba board đã được solve, gần như toàn bộ ở cỡ hai phần ba pot trên Q♥10♥7♠ và 8♦5♣2♠ nhưng chủ yếu ở cỡ một phần ba pot trên A♦K♠2♥ (57,8%); xem [bài chiến thuật vị trí](/vi/blog/holdem-position-play) |
| **Nhiều người (2 đối thủ)** | **~50% hoặc ít hơn** | Ai đó nhiều khả năng đã dính board — siết lại |
| **Nhiều người (3+ đối thủ)** | **Chỉ bài mạnh & bài chờ tốt** | Fold equity về cơ bản đã biến mất |

</div>

Để kiểm tra sức khỏe, tỷ lệ c-bet flop tổng thể của một người chơi vững rơi vào khoảng **55–70%** trên mọi board. Nếu bạn c-bet hơn ~85% số flop, bạn đang lái tự động và người chơi giỏi sẽ trừng phạt; dưới ~40% là bạn quá thật thà, chỉ bet khi trúng. Nhưng nhớ — con số đó là *tổng hợp*, không phải mục tiêu. Bạn đến đó bằng cách bet đúng board, không phải bằng cách chạy đủ chỉ tiêu.

---

## C-bet bao nhiêu là đủ? (Sizing)

Sizing đi thẳng từ kết cấu board. Hai nấc phủ gần như mọi thứ: nhỏ, khoảng một phần ba pot, trên board khô nơi bạn có lợi thế range; lớn, hai phần ba pot trở lên, trên board ướt nơi bạn cần bắt bài chờ trả giá. Chọn sai nấc là cách phổ biến nhất để một cú c-bet đúng chỗ vẫn mất tiền:

- **Nhỏ — khoảng một phần ba pot** — trên board khô, tĩnh, có lợi thế range, nhất là khi có vị trí. Range của đối thủ yếu và sẽ không cải thiện nhiều, nên bạn không cần bắt bài chờ trả giá; một cú bet nhỏ đã đặt toàn bộ bài chưa có gì của họ vào thế khó trong khi vẫn giữ bài yếu hơn ở lại để trả tiền cho bạn. Bet lớn hơn ở đây chỉ đuổi đi những tay bài bạn *muốn* họ call.
- **Lớn — hai phần ba pot trở lên** — trên board ướt, động và bất cứ khi nào range của bạn phân cực. Giờ bạn cần bắt flush draw và bài chờ sảnh trả giá (từ chối equity của họ) và xây pot với bài mạnh. Bet nhỏ để bài chờ call quá rẻ.

Đặt con số thật vào. Giả sử pot là ==$30== ở flop:

- Một cú c-bet **một phần ba pot** là ==$10== — range bet trên board khô của bạn.
- Một cú c-bet **hai phần ba pot** là ==$20== — cỡ bắt-bài-chờ-trả-giá trên board ướt của bạn.

Ở **giải đấu**, nghiêng nhỏ hơn một chút: cỡ nhỏ vẫn là một phần ba, nhưng cỡ lớn thường là **nửa pot** hơn là hai phần ba, vì stack của bạn quý giá — ở freezeout bạn không thể nạp lại, và ngay cả re-entry cũng tốn một buy-in mới. Dù chọn gì, hãy gắn size với board, không phải với thói quen.

Muốn thấy nấc "lớn trên board ướt" thực sự đi xa đến đâu? Một solver được cho hai cỡ cược trên Q♥10♥7♠ trong pot 3-bet (re-raise, tố lại) đặt [98,4% range của mình vào cú bet hai phần ba](/vi/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp") — và lý do là một cái giá bạn có thể tính ra, không phải cảm giác.

---

## Có nên c-bet khi không có vị trí?

![Một người chơi poker hành động trước khi không có vị trí, ngón tay đặt trên mặt nỉ cạnh chip với đối thủ chờ trong bóng tối phía sau](/images/holdem-cbet-oop.webp "Không có vị trí, bạn hành động trước mà không có thông tin, nên check nhiều hơn hẳn và c-bet với range chặt hơn, mạnh hơn")

C-bet khó hơn nhiều khi **không có vị trí** trong pot raise đơn — khi bạn phải hành động trước ở mọi vòng mà không đọc được đối thủ sẽ làm gì (là người 3-bet thì lợi thế range thay đổi điều này, xem [bài chiến thuật vị trí](/vi/blog/holdem-position-play)). Câu trả lời ngắn: có, nhưng ít hơn và với range mạnh hơn. Hai điều chỉnh:

1. **C-bet ít thường xuyên hơn.** Không có vị trí, bạn không kiểm soát pot tốt bằng hay thực hiện được equity bằng, nên bạn check nhiều hơn hẳn — kể cả những tay bài lẽ ra là bet tự động khi có vị trí. Trên một số board, solver c-bet khi không có vị trí trong pot raise đơn chỉ một phần tư số lần.
2. **Xây một range check thật sự.** Nếu bạn chỉ bet khi mạnh và check khi yếu, một đối thủ tinh ý đọc bạn như đọc sách và tấn công mọi cú check bằng một cú bet ngay sau đó. Nên bạn cố ý check *một số* tay bài mạnh nữa, để những cú check của bạn vẫn nguy hiểm và toàn bộ lối chơi của bạn khó đối phó hơn. Đây chính là lý do [vị trí](/vi/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp") là lợi thế cấu trúc lớn đến vậy — c-bet đơn giản hiệu quả hơn khi bạn hành động sau.

---

## C-bet trong pot nhiều người thì sao?

Cái bẫy c-bet lớn nhất là **bắn vào nhiều đối thủ như thể đang heads-up.** Mỗi người thêm vào pot cắt mạnh xác suất tất cả đều trượt — nên fold equity của bạn, toàn bộ động cơ của một cú c-bet bluff, sụp đổ.

Quy tắc trong pot nhiều người rất đơn giản: **bet bài mạnh đã thành và bài chờ tốt nhất để lấy value và bảo vệ, còn check gần như mọi thứ khác.** Trước hai người bạn đã siết chặt hơn hẳn range heads-up; trước ba người trở lên, một cú c-bet bluff trần là đốt chip, vì gần như luôn có ai đó dính một phần board. Range bet — bet nhỏ toàn bộ range — là ý tưởng *heads-up* và không chuyển sang pot nhiều người. Khi phân vân với bài tầm tầm trước hai đối thủ trở lên, check.

---

## Delayed c-bet là gì?

Check ở flop không phải kết thúc ván bài. **Delayed c-bet (c-bet trì hoãn)** — check ở flop với tư cách người raise preflop, rồi bet ở turn — là một trong những nước đi bị dùng thiếu nhất trong poker. Nó tỏa sáng khi:

- **Flop có lợi cho đối thủ** (board thấp, liên kết), nên bet là tệ — nhưng **turn thay đổi bức tranh** (một lá cao hơn, hoặc một lá nâng equity của bạn lên).
- Bạn **check theo sau với một tay bài khá** khi có vị trí và muốn bet một vòng để lấy value giờ board đã an toàn hơn.
- Bạn muốn **tước đi cú raise ở flop**: những người định bluff-raise cú c-bet flop của bạn không có cú bet nào để tấn công, rồi phải đối mặt cú bet turn của bạn.

Trì hoãn biến một chỗ mà cú c-bet tự động lẽ ra rỉ chip thành một cú bet có kiểm soát, có thông tin một vòng sau.

---

## Khi nào KHÔNG nên c-bet? (Check là vũ khí, không phải cờ trắng)

Hãy nói rõ phần "không", vì đó là nơi tiền được tiết kiệm: đừng c-bet khi board trúng đậm range đối thủ, khi bạn không có vị trí với bài tầm tầm trên board động, khi bạn ở pot nhiều người với bài chưa có gì, hay khi tay bài của bạn cần ở lại để bảo vệ range check. Cụ thể:

- **Board trúng đậm range của đối thủ.** Một flop 7‑6‑5 hay 9‑8‑7 trúng những tay bài call cú raise mạnh hơn hẳn trúng bài của bạn. Bet ở đây với phần lớn range chỉ là tặng chip — check thường xuyên hơn nhiều, và khi bet, bet lớn và chọn lọc.
- **Bạn không có vị trí trên board động** với bài tầm tầm. Hành động trước không có thông tin, giữ pot nhỏ và check.
- **Bạn ở pot nhiều người với bài chưa có gì.** Đã nói ở trên — không có fold equity, không bet.
- **Tay bài của bạn cần bảo vệ range check.** Đôi khi bạn cố ý check một tay bài mạnh để những cú check của bạn không tự động là yếu.

Sự chuyển đổi tư duy biến bạn thành người thắng: **check không phải đầu hàng.** Người chơi giỏi check *rất nhiều*, có chủ đích, và điều đó khiến những cú bet của họ đáng sợ hơn hẳn khi chúng đến. Nếu bạn cảm thấy bắt buộc phải bet chỉ vì bạn raise preflop, phản xạ đó đang khiến bạn mất tiền.

---

## Một ván c-bet thực tế từ đầu đến cuối

Hai tình huống từ cùng một buổi chơi cho thấy cả hai mặt của quyết định.

**Tình huống 1 — một cú c-bet mẫu mực.** Tôi raise ==A♣K♦== và big blind (mù lớn) call. Flop: ==K♠ 7♦ 2♣.== Đó là board cao, khô, rời rạc thuộc về range của tôi — và tôi flop ra **top pair, top kicker**: K♦ của tôi tạo đôi với K♠, với lá Át là kicker (lá phụ) tốt nhất có thể (năm lá tốt nhất = K♦ K♠ A♣ 7♦ 2♣). Tôi bet **một phần ba pot** như một range bet: nó bắt mọi tay bài trượt của anh ta trả giá và giữ những lá K yếu hơn cùng các đôi ở lại. Cú c-bet dễ dàng, có lời.

**Tình huống 2 — một cú check mẫu mực.** Cùng buổi, tôi raise ==A♥Q♥== và big blind call. Flop: ==7♠ 6♠ 5♦.== Board này trúng đậm chính những tay bài anh ta đã call — suited connector (hai lá bài liên tiếp cùng chất), đôi nhỏ và sảnh — trong khi tôi chỉ có Át cao, không đôi, không bài chờ (không có lá cơ nào trên board, nên không có cả thùng backdoor). Hai năm trước, hẳn tôi đã "tiếp tục" theo thói quen và bị raise. Giờ tôi **check và bỏ cuộc.** Nếu một lá turn an toàn đến và tôi nhặt được equity, delayed c-bet vẫn sẵn sàng; nếu không, tôi đã thua ở mức tối thiểu.

Cùng cú raise preflop, flop ngược nhau, nước đi đúng ngược nhau. Đó là toàn bộ bài học: **board quyết định, không phải việc bạn đã raise.**

---

## 7 sai lầm c-bet phổ biến nhất là gì?

Bảy lỗi lặp lại ở gần như mọi bàn: c-bet mọi flop theo quán tính, bet lớn với range rộng, c-bet nhẹ trong pot nhiều người, c-bet quá nhiều khi không có vị trí, bet vào board trúng đối thủ, bắn một phát rồi bỏ, và triple barrel không có equity. Mỗi lỗi có cách sửa riêng:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Sai lầm | Vì sao nó khiến bạn mất tiền | Cách sửa |
|:---|:---|:---|
| **C-bet mọi flop theo chế độ lái tự động** | Bỏ qua việc nhiều board có lợi cho người call | Đọc kết cấu board trước |
| **Bet lớn với range rộng** | Range rộng muốn sizing nhỏ, không phải lớn | Nhỏ trên board khô, lớn chỉ khi phân cực |
| **C-bet nhẹ trong pot nhiều người** | Fold equity sụp đổ khi có thêm người | Chỉ value & bài chờ trước 2+ đối thủ |
| **C-bet quá thường xuyên khi OOP** | Bạn không thực hiện được nhiều equity khi hành động trước | Check nhiều hơn, xây range check |
| **Bet vào board đã trúng họ** | 7‑6‑5 trúng đậm range của họ, không phải của bạn | Check nhiều hơn; bet lớn và chọn lọc khi bet |
| **Barrel "một phát rồi thôi"** | C-bet flop, luôn bỏ turn = dễ bị float | Có kế hoạch cho turn trước khi bắn |
| **Triple barrel không có equity** | Bluff bay cả stack mà không có outs hay blocker | Bluff với equity dự phòng hoặc blocker tốt |

</div>

Mọi lỗi trong số này đều truy về cùng một gốc: **c-bet theo chế độ lái tự động thay vì đọc board.** Sửa điều đó và lối chơi flop của bạn lên một bậc.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-strategy | 5 quyết định đứng sau poker thắng | /images/holdem-strategy-hero.webp
/vi/blog/holdem-3bet | Cách 3-bet (và đối phó khi bị 3-bet) | /images/holdem-3bet-hero.webp
:::

## Câu hỏi thường gặp

**Q. C bet poker là gì?**

A. Continuation bet, hay c-bet, là cú cược ở flop của người raise cuối cùng trước flop — kẻ tấn công preflop, bao gồm cả người đã 3-bet. Bạn đang "tiếp tục" thể hiện sức mạnh bạn đã cho thấy preflop. Bạn không cần trúng flop để c-bet — vì một tay bài trượt flop khoảng hai phần ba số lần, một cú c-bet được chọn kỹ thường thắng pot khi đối thủ chẳng có gì.

**Q. Vì sao gọi là continuation bet?**

A. Vì bạn đang tiếp tục (continue) sự chủ động bạn đã bắt đầu trước flop. Bạn raise preflop để giành quyền dẫn, và cú bet ở flop tiếp nối câu chuyện đó sang vòng kế. Nếu người khác đã raise preflop, cú bet flop của bạn không phải c-bet — thuật ngữ này chỉ riêng việc người raise preflop bet ở flop.

**Q. Có nên c-bet mọi flop không?**

A. Không — đây là sai lầm c-bet phổ biến nhất. Bet những flop có lợi cho range của bạn (board cao, khô như K-7-2, nơi bạn cầm nhiều top pair và overpair hơn) và check những flop có lợi cho đối thủ (board thấp, liên kết như 7-6-5 trúng những tay bài họ đã call). C-bet mọi flop theo chế độ lái tự động bị người chơi giỏi trừng phạt.

**Q. Nên c-bet thường xuyên đến mức nào?**

A. Tùy vị trí, board và số đối thủ, nên hãy coi đây là các dải, không phải quy tắc: khoảng 70–100% (với cỡ nhỏ) khi có vị trí heads-up trên board khô, khoảng 30–45% khi không có vị trí với tư cách người raise trong pot raise đơn (cao hơn khi là người 3-bet), và 50% hoặc ít hơn trong pot nhiều người. Tỷ lệ c-bet flop tổng thể lành mạnh là khoảng 55–70% — trên 85% nghĩa là bạn đang lái tự động.

**Q. Nên c-bet bao nhiêu?**

A. Size theo board. Trên board khô, tĩnh, bet nhỏ — khoảng một phần ba pot — vì range của đối thủ yếu và bạn không cần bắt bài chờ trả giá. Trên board ướt, động, bet lớn — hai phần ba pot trở lên — để bắt flush draw và bài chờ sảnh trả giá và xây pot với bài mạnh. Ở giải đấu, cỡ cược lớn thu nhỏ lại — nửa pot thường xuyên hơn hai phần ba — còn cỡ nhỏ vẫn là một phần ba.

**Q. Có nên c-bet khi không có vị trí không?**

A. Ít thường xuyên hơn so với khi có vị trí nếu bạn là người raise preflop trong pot raise đơn. Hành động trước ở mọi vòng mà không có thông tin, bạn không thực hiện được equity tốt bằng, nên bạn check nhiều hơn hẳn — kể cả vài tay bài lẽ ra bet tự động khi có vị trí — và bạn cố ý giữ vài tay bài mạnh trong range check để những cú check của bạn không tự động là yếu. Vị trí khiến c-bet hiệu quả hơn, chấm hết.

**Q. Có nên c-bet trong pot nhiều người không?**

A. Ít hơn heads-up nhiều. Mỗi đối thủ thêm vào khiến nhiều khả năng ai đó đã dính board hơn, nên fold equity của bạn sụp đổ. Trước hai người trở lên, bet bài mạnh đã thành và bài chờ tốt nhất để lấy value và bảo vệ, còn check gần như mọi thứ khác. Bet bluff vào ba người trở lên là cách mất tiền kinh điển.

**Q. Delayed c-bet là gì?**

A. Delayed c-bet là khi người raise preflop check ở flop rồi bet ở turn. Nó hữu ích khi flop có lợi cho đối thủ (nên bet là tệ) nhưng turn cải thiện equity của bạn, khi bạn check theo sau với tay bài khá lúc có vị trí, hoặc để bắt những đối thủ định bluff-raise cú bet flop của bạn. Đó là một trong những nước đi có lời bị dùng thiếu nhất trong poker.

**Q. Khi nào không nên c-bet?**

A. Đừng c-bet theo mặc định khi board trúng đậm range đối thủ (board thấp liên kết — check nhiều hơn, bet lớn và chọn lọc khi bet), khi bạn không có vị trí với bài tầm tầm trên board động, khi bạn ở pot nhiều người với bài chưa có gì, hoặc khi tay bài của bạn nên ở lại để bảo vệ range check. Check ở những chỗ này không phải yếu — nó tiết kiệm chip và khiến những cú bet sau của bạn đáng tin hơn.

**Q. C-bet có phải là bluff không?**

A. Đôi khi có, đôi khi không — đó chính là điểm mấu chốt. Nhiều cú c-bet là semi-bluff hoặc bluff thuần với tay bài đã trượt, bet vì đối thủ có lẽ cũng trượt. Những cú khác là value bet với bài mạnh. Một chiến thuật c-bet cân bằng trộn cả hai trên cùng những board, nên đối thủ không biết cú bet flop của bạn nghĩa là mạnh hay bài chưa có gì.

**Q. Value bet trong poker là gì?**

A. Value bet là cú cược với tay bài mạnh mong được một tay bài yếu hơn *call* — ngược với bluff, vốn mong một tay bài tốt hơn fold. Phần lớn c-bet của bạn trên những board bạn đã dính là value bet: bạn bet top pair hoặc set để bắt những đôi yếu hơn và bài chờ trả giá. Kỹ năng nằm ở chỗ chọn size để bài yếu hơn vẫn call — bet một số tiền mà đối thủ có thể tự thuyết phục mình trả.

**Q. Tỷ lệ c-bet bao nhiêu là tốt trên HUD poker?**

A. Khoảng 55–70% cho c-bet flop là dải lành mạnh, cân bằng. Trên khoảng 85% báo hiệu người c-bet quá nhiều và có thể bị khai thác bằng float và raise; dưới khoảng 40% báo hiệu người chỉ bet khi mạnh, nên bạn có thể fold tự tin trước c-bet của họ và bet cướp pot (stab) khi họ check. Hãy coi nó là kiểm tra sức khỏe, không phải mục tiêu.

---

## Những điều cần nhớ

1. **C-bet là cú bet ở flop của người raise preflop** — và nó hiệu quả vì tay bài trượt flop khoảng hai phần ba số lần.
2. **Board quyết định.** Bet board cao, khô có lợi cho range của bạn; check board thấp, liên kết có lợi cho range đối thủ.
3. **Lợi thế range đặt tần suất; lợi thế nut đặt size.** Bet thường trên board bạn áp đảo; bet lớn khi bạn cầm nhiều nuts (tay bài mạnh nhất có thể trên board này) hơn hoặc cần bắt bài chờ trả giá trên board ướt.
4. **Nhỏ (⅓) trên board khô, lớn (⅔+) trên board ướt.** C-bet ít hơn khi không có vị trí nếu là người raise duy nhất (là người 3-bet ở OOP thì lật lên hơn 97% trên ba board đã được solve), và ít hơn nhiều trong pot nhiều người.
5. **Check là vũ khí.** Người chơi giỏi nhất check thường xuyên và có chủ đích — c-bet là con dao mổ, không phải cái búa.

Làm đúng điều này và bạn ngừng đốt pot trên những board chưa bao giờ là của bạn để bet. Ghép c-bet sắc bén với một [lối chơi 3-bet](/vi/blog/holdem-3bet) vững, ý thức thực sự về [vị trí](/vi/blog/holdem-position-play), và [khung chiến thuật](/vi/blog/holdem-strategy) đầy đủ, và lối chơi flop của bạn lặng lẽ bỏ xa đám đông "bet mọi flop".

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Khung 5 quyết định</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">C-bet nằm ở đâu trong một lối chơi thắng</div>
  </a>
  <a href="/vi/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">3-bet, giải thích rõ</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">C-bet cũng bắt đầu từ pot 3-bet</div>
  </a>
  <a href="/vi/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Chơi theo vị trí của bạn</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao c-bet hiệu quả hơn khi có vị trí</div>
  </a>
  <a href="/vi/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cách tính pot odds</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao một cú c-bet lớn bắt bài chờ trả giá</div>
  </a>
</div>
`.trim(),
};

export default POST;
