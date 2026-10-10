import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-implied-odds",
  title: "Khi pot odds bảo fold mà call vẫn có lời: implied odds trong poker",
  seoTitle: "Pot odds bảo fold, nhưng call vẫn lời — Implied odds poker",
  desc: "Pot odds bảo fold, nhưng call vẫn in tiền. Implied odds (tỷ lệ cược ngầm) trong poker: công thức, mua set, reverse implied odds và lúc tiền không còn đó.",
  tldr: "Implied odds là số chip bạn kỳ vọng thắng thêm ở các vòng cược sau khi draw của bạn trúng. Nhờ đó bạn có thể call một draw mà pot odds đơn thuần bảo fold mà vẫn có lời, nhưng chỉ khi stack còn sâu và đối thủ thật sự sẽ trả tiền cho bạn.",
  category: "odds",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "11 phút",
  emoji: "💰",
  image: "/images/holdem-implied-odds-hero.webp",
  imageAlt: "Một stack chip sâu nằm sau người chơi đang call bet với flush draw ở turn — khoảnh khắc implied odds biện minh cho một lần call mà riêng pot không trả đủ",
  tags: ["implied odds trong poker", "implied odds là gì", "implied odds poker", "reverse implied odds poker", "cách tính implied odds", "implied odds vs pot odds poker", "tỷ lệ cược ngầm poker", "công thức tính tỷ lệ cược ngầm"],
  content: `
Pot lớn nhất tôi từng thắng bắt đầu bằng một lần call mà "đáng lẽ" phải fold. Tôi cầm ==b:6♠ 5♠== ở nút dealer (BTN), ra sảnh hở hai đầu ở flop, và pot odds (tỷ lệ pot — pot so với số tiền phải call) ở flop không đủ tốt để call. Tôi vẫn call — vì gã bên kia bàn có 200 big blind (BB — mù lớn) và không thể fold top pair dù có chết. Sảnh về ở river, cả stack của gã đi theo, và tôi cuối cùng hiểu con số mà chẳng ai giải thích cho tốt: ==implied odds.==

==Implied odds là lý do bạn có thể call một draw (bài chờ) mà "đáng lẽ" phải fold — và lý do stack sâu khiến các tay bài đầu cơ sinh lời đến vậy ở đúng chỗ và nguy hiểm đến vậy ở chỗ sai.== Rắc rối là phần lớn người chơi coi chúng như câu thần chú biện minh cho mọi lần call. Không phải. Nó là một con số bạn ước lượng được, và hướng dẫn này chỉ cho bạn cách.

Xác suất thô đằng sau mỗi draw đến từ [bảng xác suất poker](/vi/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); hướng dẫn này là cách bạn quyết định khi nào những xác suất đó — cộng với tiền còn sẽ vào — thực sự làm một lần call có lời. Nó tiếp đúng chỗ [pot odds](/vi/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") dừng lại.

---

### Implied odds trong một cái nhìn

:::stripe
tiền call ÷ % trúng − (pot + tiền call) | Công thức implied odds
7,5:1 | Tỷ lệ thật khi ra set ở flop
0 | Implied odds của bạn khi heads-up mà đối thủ đã all-in
:::

---

## Implied odds trong poker là gì?

**Implied odds (tỷ lệ cược ngầm) là số chip thêm bạn kỳ vọng thắng ở các vòng cược sau khi draw của bạn hoàn thành — cộng trên pot đang nằm đó lúc này.** Pot odds chỉ hỏi "giá hiện tại có đáng không?". Implied odds hỏi câu đầy đủ hơn: "giá hiện tại *cộng mọi thứ tôi sẽ thắng về sau* có đáng không?" (Đây là thuật ngữ poker — không liên quan tới "implied probability" trong cá cược thể thao.)

Khác biệt đó là lý do bạn có thể call một cú bet ở flop với flush draw không được giá ngay lập tức. Pot trước mặt không trả đủ — nhưng nếu một lá cơ rơi xuống và đối thủ trả một cú bet lớn ở river, *tổng* bạn thắng bù lại tiền call nhiều lần.

Đây là cái bẫy quyết định cả khái niệm: tiền tương lai đó là một ==r:ước lượng==, không phải sự thật. Nó phụ thuộc hoàn toàn vào stack sâu đến đâu và đối thủ có nhiều khả năng trả cho bạn khi bạn trúng không. Giả định quá nhiều, và "implied odds" trở thành câu chuyện bạn tự kể trong khi đốt chip.

---

## Implied odds khác pot odds thế nào?

**Pot odds chỉ tính tiền trong pot lúc này; implied odds cộng thêm tiền bạn kỳ vọng thắng về sau nếu trúng.** Chúng không đối đầu — implied odds là pot odds *kéo dài vào tương lai*.

:::compare
Pot odds | Implied odds
Chỉ chip đang trong pot lúc này | Pot lúc này + chip bạn sẽ thắng ở các vòng cược sau
Một sự thật bạn tính được chính xác | Một ước lượng dựa trên stack và đối thủ
Cho biết lần call có hoàn vốn ngay bây giờ không | Cho biết lần call có đáng trên cả ván bài không
Vẫn dùng được trước một cú all-in | Bằng không trước một cú all-in (heads-up — không còn vòng cược)
:::

Quy tắc thực dụng: **bắt đầu với pot odds.** Nếu equity của bạn (phần pot kỳ vọng của bạn, tính cả khi chia pot) đã vượt giá — chỉ tính những lá mà lần call này trả tiền để xem — hãy call; không cần câu chuyện nào. Nếu draw của bạn *vừa hụt* giá, đó là lúc implied odds thành yếu tố phân định. Và nếu draw hụt giá quá xa, implied odds thường cũng không cứu được.

---

## Cách tính implied odds: công thức tính tỷ lệ cược ngầm là gì?

**Để tính implied odds, hãy tìm xem bạn cần thắng thêm bao nhiêu khi trúng, bằng: tiền cần thêm = (tiền call ÷ khả năng trúng) − (pot hiện tại + tiền call).** Nếu bạn có thể thắng thêm được chừng đó một cách thực tế ở các vòng sau — và tay bài của bạn vẫn mạnh nhất khi về — lần call có lời.

Viết gọn, với ==g:x== là số tiền thêm bạn phải thắng khi hoàn thành:

:::steps
Tìm khả năng trúng của bạn | Đếm outs, đổi ra phần trăm ([quy tắc 4 và 2](/vi/blog/holdem-outs) cho con số đủ sát)
Lấy tiền call chia cho khả năng trúng đó | Đây là tổng bạn cần thắng để hòa vốn
Trừ pot hiện tại **cộng cả tiền call của bạn** | Phần còn lại là số thêm bạn phải thắng về sau — đó là ==g:x== của bạn
Xét xem có thực tế không | Stack sâu + đối thủ dễ trả tiền = có. Stack ngắn hay board đáng sợ = không
:::

Công thức trong một dòng: ==b:x = (tiền call ÷ % trúng) − (pot hiện tại + tiền call).== Nếu số tiền thêm bạn thực tế moi được ở các vòng sau *lớn hơn* x, call có lời ngay cả khi pot odds trước mắt bảo fold.

---

## Ví dụ thực tế: flush draw ở turn cần thắng thêm bao nhiêu?

Hãy chạy con số để công thức không còn trừu tượng.

Bạn cầm ==b:A♥ K♥== trên board ==Q♥ 7♥ 2♣ 3♠== — nut flush draw (draw tới thùng mạnh nhất), 9 outs, còn một lá. Pot là $100 và đối thủ bet $50 ở turn, nên có ==$150 ở giữa== và bạn phải call $50.

- **Pot odds trước:** bạn đang được 150 so với 50, tức 3:1, nên cần **25%** equity. Thùng của bạn về ở river chỉ ==r:19,6%== số lần (9 outs ÷ 46 lá chưa thấy — chỉ đếm outs thùng; tạo đôi Át hay K không đủ để chắc bạn đang dẫn, nên các overcard (lá cao hơn board) không phải outs sạch). 19,6% nhỏ hơn 25%, nên giá trước mắt bảo ==r:fold.==
- **Giờ đến implied odds:** x = (tiền call ÷ % trúng) − (pot + tiền call) = (50 ÷ 0,196) − (150 + 50) = 255 − 200 = ==g:khoảng $55.== Đó là số thêm bạn phải thắng ở river khi thùng về.

Vậy câu hỏi không phải "tôi có nên call $50?" mà là "**khi một lá cơ về, tôi có thể thắng thêm ít nhất $55 không?**" Trước một đối thủ stack sâu sẽ trả cú bet ở river với top pair, điều đó dễ — bạn call. Trước ai đó chỉ còn $40 phía sau, hoặc ai đó đóng cửa ngay khi lá cơ thứ ba chạm board, bạn không thể — nên fold. (Trước một set, tức đôi trên tay + 1 lá trên board, còn khó hơn: lá 2♥ và 3♥ làm board có đôi và có thể lấp đầy cù lũ cho set, chỉ còn 7 outs sạch — 7 ÷ 44 khi hai lá của set cũng đã ra khỏi bộ bài — và x khoảng $114.)

:::note
Cùng một lần call $50, hai quyết định ngược nhau — và các lá bài không hề đổi. Cái đổi là còn bao nhiêu tiền để thắng. Đó là implied odds trong một câu.
:::

---

## Cần bao nhiêu implied odds cho từng loại draw?

**Theo quy tắc ngón tay cái, draw càng khó trúng — và càng lộ liễu khi về — thì stack càng phải sâu trước khi một lần call có lời.** Bên dưới là hướng dẫn thực địa. Hãy coi các bội số stack là ==r:kinh nghiệm, không phải luật== — chúng đã gộp sẵn thực tế rằng bạn không luôn được trả và không luôn thắng khi trúng.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | % trúng (lá kế tiếp) | Stack phía sau cần có |
|:---|:---:|:---:|:---:|
| Flush draw | 9 | 19,6% (turn → river) | ~8–10× tiền call |
| Sảnh hở hai đầu | 8 | 17,4% (turn → river) | ~8–10× tiền call |
| Set (pocket pair) | 2→set | ~11,8% (ở flop) | ~15–20× tiền call |
| Gutshot (sảnh hở giữa) | 4 | 8,7% (turn → river) | ~20×+ (hiếm khi đáng) |

</div>

Hai lực đặt ra con số. **Tần suất:** gutshot trúng bằng nửa flush draw, nên cần khoản trả lớn gấp đôi để hòa vốn. **Độ che giấu:** một set kín được trả nhiều hơn hẳn một thùng lộ liễu trên board đồng chất (monotone), vì đối thủ không thể đoán ra bạn cầm nó — đó là lý do set chịu được tỷ lệ trúng thấp. [Nut flush draw đáng giá hơn hẳn một flush draw bé](/vi/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") cũng vì lý do đó: nó được trả *và* không bao giờ thua thùng cao hơn khi về.

---

## Mua set: đôi nhỏ và implied odds

**Bạn ra set (hoặc hơn) với pocket pair (đôi bài tẩy) chỉ 11,8% số lần — khoảng 7,5:1 bất lợi, hay 1 trong 8,5 — nên mua set (set mining) chỉ có lời khi stack phía sau bù được mọi lần bạn trượt.** Đây là nước chơi implied odds thuần khiết nhất trong poker: bạn call một cú raise với đôi nhỏ chỉ vì một lý do — ra sám cô (bộ ba, three of a kind) ở flop và lấy stack của ai đó.

![Một pocket pair 5 nhỏ bên chồng chip sâu trên nỉ xanh — bối cảnh của một lần call mua set chỉ có lời khi stack sâu](/images/holdem-implied-odds-setmine.webp "Đôi nhỏ là vàng khi có stack sâu phía sau — trả một chút bây giờ để thắng rất nhiều khi ra set ở flop")

Vì bạn trượt ==r:bảy lần trong tám==, phép toán rất tàn nhẫn trừ khi khoản trả cực lớn. Hướng dẫn phổ biến là **"quy tắc 5%": chỉ call để mua set nếu stack hiệu dụng ít nhất bằng 20 lần tiền call** (tiền call ≤5% stack).

Đây là phần phân tích thẳng thắn mà phần lớn bài viết bỏ qua:

- **Hòa vốn thuần là 7,5:1.** Trong một thế giới tưởng tượng nơi bạn được trả đủ mỗi lần ra set, pot cộng những gì thắng sau đó chỉ cần cộng lại bằng khoảng 7,5 lần tiền call.
- **Đời thực đòi 15–20×.** Bạn không luôn lấy được cả stack, bạn đôi khi ra set mà *vẫn thua* (set đụng set, hoặc họ lấp tay lớn hơn), và vị trí có vai trò. Phần đệm thêm bù cho những chỗ rò đó.
- Vậy ==b:7,5:1 là sàn trả lý thuyết; stack 15–20 lần tiền call là quy tắc thực dụng.== Đừng nhầm hai thứ — dùng con số 7,5 làm kim chỉ nam ở bàn thật là một chỗ rò chậm.

Phép toán ra set ở flop chính xác và mọi con số "xác suất ra X ở flop" khác nằm trong [xác suất draw](/vi/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp"); điều cần nhớ ở đây là đôi nhỏ là vàng khi stack sâu và là rác khi stack ngắn — đôi bài không đổi, implied odds đã đổi.

---

## Reverse implied odds: khi trúng draw mà vẫn thua

**Reverse implied odds là số chip bạn *mất* khi hoàn thành tay bài nhưng nó vẫn chỉ mạnh thứ nhì.** Implied odds là tiền bạn thắng khi trúng; reverse implied odds là tiền bạn rỉ ra khi trúng *mà vẫn thua*. Bỏ qua chúng và bạn sẽ phải lòng những draw âm thầm là cái bẫy.

:::compare
Implied odds | Reverse implied odds
Tiền bạn ==g:thắng== ở các vòng sau khi trúng | Tiền bạn ==r:mất== ở các vòng sau khi trúng mà vẫn chỉ mạnh thứ nhì
Tưởng thưởng draw tới nuts | Trừng phạt draw yếu, bị áp đảo
Nâng giá trị của một draw | Hạ giá trị của một draw
:::

Ba tình huống reverse implied kinh điển:

- **Thùng bé.** Bạn cầm ==b:7♦ 6♦== và board mang lá rô thứ ba. Bạn ra thùng — rồi trả cả stack cho người cầm ==b:A♦== với một lá rô thứ hai — nut flush. Lá "thắng" của bạn khiến bạn mất tiền.
- **Đầu thấp của sảnh.** Bạn cầm ==b:6♦ 5♦== trên ==b:9♥ 8♣ 2♠==, và lá 7 ở turn tạo sảnh 5-6-7-8-9 cho bạn. Nhưng đó là đầu *thấp* — ai cầm J-10 giờ có 7-8-9-10-==g:J==, sảnh cao hơn, và chính lá bạn cần đã trả tiền cho họ.
- **Top pair bị áp đảo.** Bạn tạo đôi K với kicker (lá phụ) yếu và cứ call — thẳng vào A-K của ai đó.

Bài học: một draw tới ==g:nuts== (tay bài mạnh nhất có thể trên board này) đáng giá hơn hẳn cùng draw đó tới một tay mạnh thứ nhì, dù số outs y hệt. Khi draw của bạn không hướng tới nuts, hãy hạ implied odds *xuống* — một số "outs" của bạn thực ra đang trả tiền cho đối thủ.

---

## Khi nào không nên trông vào implied odds?

**Khi heads-up, khoảnh khắc đối thủ all-in thì implied odds của bạn đúng bằng không — không còn tiền nào để thắng từ họ, nên bạn quay về pot odds thuần.** (Trong pot multiway, tức pot nhiều người, người thứ ba còn chip có thể giữ side pot (pot phụ) sống — nhưng người đã all-in không bao giờ trả thêm cho bạn một xu.) Đây là khái niệm bị lạm dụng nhất trong poker: "tôi có implied odds" là cái cớ người chơi với tới sau một lần call chưa bao giờ hợp lý.

Hãy để mắt tới những chỗ rò này:

:::card
🚫 | Đối thủ đã all-in | Không còn vòng cược nghĩa là không còn tiền tương lai từ họ. Heads-up, implied odds = 0 — chỉ dùng pot odds
📉 | Stack phía sau ngắn | Nếu phần còn lại phía sau nhỏ hơn x bạn cần, "tôi sẽ được trả ở river" là ảo tưởng
🙅 | Đối thủ "không trả" | Một người chơi quá chặt (nit) chỉ bet khi có nuts sẽ không trả cho thùng của bạn. Implied odds sống chết theo việc họ có sẵn lòng call không
🃏 | Board đáng sợ | Nếu lá hoàn thành draw của bạn cũng khiến đối thủ chùn tay (bốn lá cùng chất, board có đôi), ít tay trả cho bạn hơn — và những tay có trả có thể thắng bạn
🎣 | Giả định họ sẽ đẩy hết stack | "Nó có thể về và họ có thể đẩy hết stack" là hai phỏng đoán chồng lên một lần fold. Hãy ước lượng dè dặt
:::

Tôi mất nhiều chip cho implied odds tưởng tượng hơn cho bất kỳ bad beat nào. Cách sửa là một câu hỏi trung thực duy nhất trước khi call một draw hụt giá: ==b:"Khi tôi trúng, ai thực sự trả tôi, và bao nhiêu?"== Nếu bạn không gọi tên được số tiền, nó không có đó.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-pot-odds | Cách tính pot odds trong 10 giây | /images/holdem-pot-odds-hero.webp
/vi/blog/holdem-drawing-odds | Xác suất ra set, thùng, sảnh ở flop | /images/holdem-drawing-odds-hero.webp
:::

## Câu hỏi thường gặp

**Q. Implied odds trong poker là gì?**

A. Implied odds là số chip thêm bạn kỳ vọng thắng ở các vòng cược sau nếu draw của bạn hoàn thành — phần trả về tương lai của một quyết định theo draw. Một lần call hụt giá hiện tại có thể lấy lại phần chênh sau khi bạn trúng, nhưng chỉ khi đối thủ còn chip và sẽ trả. Hãy coi khoản trả đó là ước lượng, không phải tiền đã nằm giữa bàn.

**Q. Công thức tính implied odds là gì?**

A. Dùng: tiền cần thêm = (tiền call ÷ khả năng trúng) − (pot hiện tại + tiền call). Call $50 ở turn với flush draw trúng 19,6% số lần ở river (9 ÷ 46) nghĩa là 50 ÷ 0,196 = $255, trừ $200 đã trong cuộc (pot $150 cộng $50 call của bạn) = khoảng $55. Nếu bạn thực tế có thể thắng thêm $55 khi trúng — và thùng bạn tạo ra là tay mạnh nhất — lần call có lời. Lưu ý đây luôn là ước lượng, vì vòng cược tương lai không được bảo đảm.

**Q. Pot odds và implied odds khác nhau ở đâu?**

A. Khác biệt nằm ở độ chắc chắn: pot hiện tại và tiền call là thứ nhìn thấy; khoản trả về sau phụ thuộc vào điều xảy ra tiếp. Hãy kiểm giá trước mắt trước, rồi hỏi một lần trúng phải kiếm thêm bao nhiêu. Stack sâu làm số tiền đó sẵn có, nhưng không bảo đảm đối thủ sẽ bỏ nó vào.

**Q. Khi nào nên dùng implied odds?**

A. Bắt đầu với pot odds. Nếu equity của bạn đã vượt giá trước mắt — đo trên những lá mà lần call này trả tiền để xem — cứ call; không cần implied odds. Hãy với tới implied odds khi draw hụt giá đó và stack phía sau đủ sâu để một lần trúng thắng cho bạn nhiều hơn x từ công thức — draw hụt càng xa, x càng lớn. Lý tưởng là một draw mạnh, kín, hoặc tới nuts trước một đối thủ sẽ trả. Nếu stack phía sau không bù được x — chẳng hạn đối thủ heads-up đã all-in hoặc stack ngắn — implied odds không cứu được lần call.

**Q. Reverse implied odds là gì?**

A. Reverse implied odds là số chip thêm mà một draw đã hoàn thành làm bạn tốn khi nó vẫn chỉ mạnh thứ nhì: một thùng bé hay sảnh thấp có thể khuyến khích bạn đầu tư thêm trong khi một tay khác vẫn dẫn trước. Draw mang rủi ro này cần ước lượng khoản trả dè dặt hơn draw tới nuts; đếm cùng số lá hoàn thành không khiến chúng đáng giá ngang nhau.

**Q. Implied odds tốt là bao nhiêu? Bạn cần bao nhiêu?**

A. Tùy draw. Flush draw và sảnh hở hai đầu cần khoảng 8–10 lần tiền call còn phía sau trong stack; mua set cần khoảng 15–20 lần như khoảng thực dụng, và "quy tắc 5%" chặt hơn đòi 20 lần. Draw càng khó trúng, stack càng phải sâu để biện minh cho lần call.

**Q. Implied odds còn áp dụng khi đối thủ đã all-in không?**

A. Không — heads-up, khi đối thủ all-in thì không còn vòng cược nào, nên không còn tiền thêm để thắng từ họ — implied odds của bạn bằng không. (Trong pot nhiều người, người thứ ba còn chip có thể giữ side pot sống; bản thân người đã all-in không bao giờ trả thêm.) Ở đó bạn phải dựa vào pot odds thuần. Giả định có implied odds trước một cú all-in là lỗi phổ biến và tốn kém.

**Q. Implied odds trong mua set hoạt động thế nào?**

A. Bạn ra set với pocket pair chỉ 11,8% số lần (khoảng 7,5:1 bất lợi), nên bạn cần khoản trả lớn ở những lần trúng. Hòa vốn lý thuyết là tổng khoản trả (pot cộng những gì thắng sau đó) khoảng 7,5 lần tiền call, nhưng hướng dẫn thực dụng là stack 15–20 lần tiền call — phần đệm thêm bù cho những lần bạn trúng mà không có hành động, hay thua với set (những lần trượt đã được tính trong 7,5×).

**Q. Implied odds với flush draw tính ra sao?**

A. Tính như mọi draw khác — lấy tiền call chia cho xác suất trúng rồi trừ pot sau khi call, phần còn thiếu là số bạn phải thắng thêm — và với flush draw, phần đó thường kiếm được, vì một thùng đã về thường được trả — nhưng chỉ khi đó là thùng mạnh và stack sâu. Nut flush draw có implied odds tuyệt vời; flush draw bé mang reverse implied odds, vì bạn có thể hoàn thành nó mà vẫn thua thùng cao hơn.

**Q. Vì sao implied odds tốt hơn trong cash game stack sâu?**

A. Implied odds hoàn toàn xoay quanh số tiền còn để thắng, và stack sâu nghĩa là có nhiều hơn. Trong cash game stack sâu, một đôi nhỏ hay hai lá liên tiếp cùng chất (suited connectors) có thể thắng trọn stack khi trúng, nên các tay đầu cơ tăng giá trị. Ở tình huống stack ngắn hay giải đấu (tournament), có ít thứ để thắng hơn, nên cùng những tay đó mất giá trị.

---

## Những điều cần nhớ

1. **Công thức:** tiền cần thêm = (tiền call ÷ % trúng) − (pot hiện tại + tiền call). Nếu bạn thực tế có thể thắng nhiều hơn thế về sau với tay vẫn mạnh nhất, lần call là tốt dù pot odds bảo fold.
2. **Kiểm tra thực tế:** implied odds là ước lượng sống nhờ stack sâu và một đối thủ sẵn trả. Trước một cú all-in chúng bằng không khi heads-up, và trước stack ngắn chẳng còn mấy — hãy quay về pot odds.
3. **Mặt trái:** reverse implied odds trừng phạt draw không tới nuts. Draw tới nuts đáng giá hơn hẳn cùng draw đó tới tay mạnh thứ nhì.

Làm đúng điều này và bạn ngừng đốt chip cho những lần call đầy hy vọng trong khi vẫn thực hiện những lần call có lời mà không ai khác dám. Từ đây, hãy khóa chặt các con số thô với [bảng xác suất poker](/vi/blog/holdem-probability), hoặc xem chính xác mỗi draw về bao nhiêu lần trong [xác suất draw](/vi/blog/holdem-drawing-odds).

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất & toán</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bảng xác suất poker 7 lá</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Mọi tay bài, flop và draw — những con số đằng sau lần call</div>
  </a>
  <a href="/vi/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất & toán</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cách tính pot odds trong 10 giây</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Giá trước mắt — nơi implied odds bắt đầu</div>
  </a>
  <a href="/vi/blog/holdem-drawing-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất & toán</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Xác suất ra set, thùng, sảnh ở flop</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Set, thùng hay sảnh thực sự về bao nhiêu lần</div>
  </a>
  <a href="/vi/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Bài khởi đầu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bài khởi đầu nên chơi theo vị trí</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tay đầu cơ nào đáng để chờ</div>
  </a>
</div>
`.trim(),
};

export default POST;
