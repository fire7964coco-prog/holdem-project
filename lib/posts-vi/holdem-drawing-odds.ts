import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-drawing-odds",
  title: "Xác suất ra thùng, ra sảnh và ra set ở flop: drawing odds trong poker",
  seoTitle: "Flop chiều bạn mấy lần? — Xác suất ra set, ra thùng ở flop",
  desc: "Flop ra set 11,8%, ra thùng chỉ 0,84%. Xác suất thật của set, thùng, sảnh, tứ quý và mọi draw ở flop, kèm bài toán mua set các trang khác bỏ qua.",
  tldr: "Cầm một đôi, bạn ra set ở flop 11,8% số ván (tỷ lệ 7,5:1 bất lợi). Hai lá cùng chất ra thùng ngay flop chỉ 0,84%, còn flush draw ở flop hoàn thành đến river 35% số ván. Mọi con số bên dưới đều suy ra từ bộ bài, không phải đoán.",
  category: "odds",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-05",
  keepImagesInBody: true,
  readTime: "12 phút",
  emoji: "🎲",
  image: "/images/holdem-drawing-odds-hero.webp",
  imageAlt: "Một pocket pair nhỏ bên chồng chip trên nỉ xanh khi flop được chia, khoảnh khắc một lần call mua set thành công hay trượt",
  tags: ["xác suất ra thùng poker", "xác suất ra sảnh poker", "xác suất ra set ở flop", "flush draw odds", "straight draw poker", "mua set poker", "xác suất ra tứ quý ở flop", "xác suất được chia đôi Át"],
  content: `
Ván bài khiến tôi học thuộc điều này: tôi call một cú raise với đôi 5, ra set ở flop, lấy trọn stack của một người cầm đôi Át, và bạn tôi hỏi làm sao tôi "biết" để call. Tôi không *biết* — tôi biết con số. ==Bạn ra set ở flop khoảng 1 lần trong 8,5 lần thử==, và stack đủ sâu để trả cho tôi khi trúng. Chính phân số đó biến một lần call "cảm giác may" thành một lần call có lời.

Đó mới thật là drawing odds: không phải may rủi, mà là ==toán cố định của bộ bài 52 lá==. (Draw ở đây là bài chờ trong Hold'em, không phải draw poker 5 lá.) Bao nhiêu lần bạn ra set ở flop, ra thùng ở flop, hoàn thành draw đến river — mỗi con số đều suy ra được, và người thắng đã thuộc lòng chúng. Hướng dẫn này là ==g:các xác suất đằng sau flop và draw==, mỗi con số kèm phép tổ hợp thực sự để bạn thấy *vì sao* nó ra như vậy. Nó là bài đi kèm với [bảng xác suất poker](/vi/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); khi đã biết xác suất ở đây, [đếm outs](/vi/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") và [pot odds](/vi/blog/holdem-pot-odds) (tỷ lệ pot — pot so với số tiền phải call) sẽ biến chúng thành quyết định.

---

### Những con số cần khắc cốt ghi tâm

:::stripe
11,8% | Ra set ở flop với pocket pair
0,84% | Ra thùng ngay flop với hai lá cùng chất
35% | Hoàn thành flush draw đã có ở flop đến river
407:1 | Ra tứ quý ở flop với pocket pair
:::

---

## Vòng đời của flop: vì sao chỉ cần một bảng?

> **Trả lời nhanh**
> Ra bài ở flop và hoàn thành draw là hai sự kiện khác nhau. Hai lá bài tẩy cùng chất ra thùng ngay lập tức chỉ 0,84% số lần; khi bạn đã ra flush draw ở flop, khả năng hoàn thành qua hai lá là 35%. Hãy đọc mỗi cột từ điểm xuất phát ghi rõ của nó, thay vì coi mọi phần trăm là cơ hội trước flop.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Đang cầm | Ra sẵn ở flop | Ra draw ở flop | Hoàn thành draw đến river |
|:---|:---:|:---|:---|
| Pocket pair (đôi bài tẩy) → set | 11,8% (7,5:1) | — | set→cù lũ hoặc tứ quý 33,4% đến river |
| Hai lá cùng chất → thùng | 0,84% (118:1) | 10,9% flush draw | 35% (9 outs) |
| Hai lá liên tiếp 54–JT → sảnh | 1,3% (76:1) | ~10% OESD | 31,5% (8 outs) |
| Hai lá không thành đôi → đôi | ~32% | — | — |
| Pocket pair → tứ quý | 0,245% (407:1) | — | — |

</div>

Đọc ngang một dòng là bạn thấy trọn vòng đời của một tay bài. Hai lá cùng chất gần như không bao giờ ra *thùng sẵn* ở flop (0,84%) — nhưng chúng ra **flush draw** nhiều gấp mười ba lần (10,9%), và draw đó về đích đến river 35% số lần. Trộn ba con số ấy là lỗi xác suất phổ biến nhất, nên chúng ta sẽ tách từng cái bên dưới với phép toán hiện rõ.

---

## Xác suất ra set ở flop là bao nhiêu? (Và bài toán mua set)

> **Trả lời nhanh**
> Pocket pair ra set (cầm đôi trên tay + 1 lá trên board) hoặc hơn ở flop 11,8% số lần — khoảng 1 trong 8,5, hay 7,5:1 bất lợi — nhưng riêng tỷ lệ trúng đó không biện minh cho một lần call. Với mua set (set mining — call một cú raise với đôi nhỏ chủ yếu để ra set ở flop), hướng dẫn thực dụng là stack hiệu dụng khoảng 15–20 lần tiền call. Bạn vẫn cần một đối thủ nhiều khả năng sẽ trả, vì một số set thắng rất ít hoặc thua.

![Đồ họa hai outs của một pocket pair được tô vàng trong bộ bài, mũi tên chỉ tới ba lá flop úp, và một thanh chia mười hai phần trăm vàng với tám mươi tám phần trăm xám](/images/holdem-drawing-odds-set-mining.webp "Ba lá trên đầu bộ bài định đoạt một lần call mua set — và phần lớn thời gian chúng định đoạt bất lợi cho bạn")

Con số 11,8% đó bắt đầu từ hai lá cùng giá trị còn lại sau khi bạn nhận pocket pair. Flop là ba lá rút từ 50 lá bạn không thấy, nên hãy đếm sự kiện ngược lại trước — khả năng bạn **trượt** cả hai lá cùng giá trị:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Bước | Phép toán |
|------|------|
| Số flop trượt đôi của bạn | C(48,3) = 17.296 |
| Tổng số flop khả dĩ | C(50,3) = 19.600 |
| Khả năng bạn trượt | 17.296 ÷ 19.600 = 88,2% |
| **Khả năng bạn ra set ở flop** | **1 − 0,882 = 11,8%** |

</div>

### Khi nào mua set thật sự có lời

Ra set ở flop 11,8% số lần nghĩa là bạn **trượt 88% số lần** và fold. Để có lời, 12% số lần trúng phải trả cho mọi lần trượt. Mức hòa vốn là 7,5:1 — nên nếu call để mua set, bạn muốn pot cộng với những gì có thể thắng ở các vòng sau đáng giá **ít nhất 7,5 lần** tiền call, và trong thực tế ==g:15:1 hoặc tốt hơn== để bù những lần set của bạn không được trả hay bị vượt.

:::tip[Kinh nghiệm thực tế: chỉ call một cú raise để mua set nếu stack hiệu dụng bằng khoảng 15–20 lần giá call. Stack sâu biến đôi nhỏ thành vàng; stack ngắn biến chúng thành rác. Đôi bài không đổi — implied odds đã đổi.]:::

Mua set là nước chơi [implied odds](/vi/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") (tỷ lệ cược ngầm — tiền có thể thắng thêm ở các vòng sau) thuần khiết nhất — một cơ hội nhỏ để thắng một pot lớn về sau. Toàn bộ khung — công thức, bội số stack cho từng loại draw và reverse implied odds — nằm trong hướng dẫn đó.

Hai con số liên quan người ta hay hỏi:

- **Trúng set đến river** (từ trước flop, xem đủ năm lá board) là ==**19,2%**== — 1 − C(48,5)/C(50,5). Cao hơn con số ở flop vì bạn có thêm hai lá, nhưng bạn không thể trông vào việc đến được river với giá rẻ, và đó là lý do con số ở flop thống trị việc mua set.
- **Set đụng set (set over set)** — hai người chơi cầm pocket pair cùng ra set trong một ván, và set nhỏ hơn thua set lớn hơn — không có một con số cố định vì phụ thuộc vào bao nhiêu đối thủ cầm đôi, nhưng với hai người cùng cầm đôi, việc *cả hai* ra set rơi vào khoảng ~1%. Đó là cooler kinh điển — và riêng việc thua không cho biết lần call mua set đúng hay sai; giá và stack mới cho biết.

---

## Thùng: flop ra thùng, ra flush draw và hoàn thành thùng bao nhiêu phần trăm?

> **Trả lời nhanh**
> Hai lá cùng chất có thể ra thùng sẵn ở flop, ra draw ở flop, hoặc trượt cả hai. Hai khả năng đầu là 0,84% và 10,9%; chỉ sau khi draw đã tồn tại thì con số hoàn thành 35% đến river mới áp dụng. Con số cuối bao gồm cả hai lá còn lại, nên không thể định giá một lần call chỉ mua lá turn.

![Át K chất cơ với flop Q 7 chất cơ trên nỉ xanh, một flush draw chín outs vừa ra ở flop bên cạnh chồng chip ngắn](/images/holdem-drawing-odds-flush-draw.webp "Hai lá cơ trên tay, hai lá cơ ở flop — flush draw, không phải thùng sẵn: 10,9% để ra ở flop, 35% để hoàn thành đến river")

Hai dòng đầu đếm những flop khác nhau từ cùng hai lá bài tẩy (ba lá từ 50 lá chưa thấy); chỉ dòng thứ ba bắt đầu sau flop, khi còn hai lá:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Câu hỏi | Xác suất | Phép toán |
|:---|:---:|:---|
| Ra **thùng sẵn** ở flop (3 lá cùng chất bạn) | 0,84% · 118:1 | C(11,3) ÷ C(50,3) = 165 ÷ 19.600 |
| Ra **flush draw** ở flop (thêm 2 lá cùng chất bạn) | 10,9% · 8:1 | C(11,2)×39 ÷ C(50,3) = 2.145 ÷ 19.600 |
| **Hoàn thành** flush draw đã có ở flop đến river | 35,0% · 1,9:1 | 1 − C(38,2) ÷ C(47,2) |

</div>

Vậy câu nói trung thực là: hai lá cùng chất ra **draw** nhiều hơn hẳn thùng sẵn, và draw đó 35% để về đích — 1,9:1 bất lợi, nên gần một phần ba hơn là một coin flip. Theo đuổi mọi tay cùng chất "để chờ thùng" là quên rằng bạn ra thùng sẵn ở flop chưa đến một lần mỗi 100 ván.

Con số hoàn thành tách theo vòng cược, điều quan trọng ngay khi còn vòng cược phía trước:

- **Flop → river (cả hai lá):** 35,0% — chỉ dùng khi bạn sẽ thấy cả hai lá mà không có thêm vòng cược (bạn đã all-in, hoặc đã call một cú all-in).
- **Flop → turn (một lá):** 9 ÷ 47 = 19,1%.
- **Turn → river (một lá):** 9 ÷ 46 = 19,6%.

Thùng **backdoor** (runner-runner) — bạn chỉ ra *một* lá cùng chất thêm ở flop và cần cả turn lẫn river đều là chất của bạn — về khoảng 4,2% — tương đương có thêm khoảng một out. Không phải lý do để call, nhưng là yếu tố phân định thật sự ở những tình huống sát nút. Để biến bất kỳ con số nào ở đây thành call hay fold, hãy chạy nó qua [cách tính pot odds](/vi/blog/holdem-pot-odds).

---

## Sảnh: xác suất ra sảnh ngay flop so với draw sảnh hở hai đầu và gutshot?

> **Trả lời nhanh**
> Hai lá liên tiếp tầm trung ra sảnh sẵn ở flop khoảng 1,3% số lần; những tay gần hai đầu của thang giá trị có ít dãy khả dĩ hơn. Sau khi draw hình thành, sảnh hở hai đầu có tám lá hoàn thành và gutshot có bốn. Khả năng đến river của chúng tính hai lá, còn khả năng lá kế tiếp bên dưới chỉ tính từ flop sang turn.

![Hai bảng draw sảnh cạnh nhau — một dãy hở ở cả hai đầu với số 8 xanh trong vòng tròn, và một dãy có một khe ở giữa với số 4 vàng](/images/holdem-drawing-odds-oesd-vs-gutshot.webp "Sảnh hở hai đầu đáng giá gấp đôi gutshot — hai đầu hở so với một khe ở giữa")

Hai lá liên tiếp như 8♠7♠ có vòng đời riêng. Bạn **ra sảnh sẵn ở flop chỉ 1,3%** số lần (76:1) — hiếm hơn phần lớn người chơi tưởng. Con số đó đúng cho 54s đến JTs, những tay liên tiếp có thể lấp sảnh từ cả hai đầu; các tay ở biên của bộ bài có ít dãy hơn, xuống tới 0,33% với A-K. Thường xuyên hơn nhiều, bạn ra **draw**:

- **Sảnh hở hai đầu (OESD):** ~10% số flop với hai lá liên tiếp. Tám outs, hoàn thành **31,5%** đến river — 1 − C(39,2)/C(47,2) — hay 17% từ flop sang turn.
- **Gutshot (sảnh hở giữa):** bốn outs, hoàn thành **16,5%** đến river, 8,5% từ flop sang turn. Khoảng bằng nửa khả năng hoàn thành của sảnh hở hai đầu, và đó là lý do cùng một tay liên tiếp lại chơi khác hẳn tùy flop.

Hãy để ý OESD (31,5%) và flush draw (35%) rất gần nhau — cả hai đều là "một draw lớn", cả hai đều khoảng một phần ba để trúng đến river. Đó là mẹo đáng khắc ghi: một draw lớn thông thường khoảng ==**một trong ba**== để hoàn thành đến river, và rớt xuống khoảng một trong năm đến sáu trên một vòng cược.

---

## Flop hiếm: tứ quý, trips, cù lũ và thùng phá sảnh xuất hiện bao lần?

> **Trả lời nhanh**
> Với pocket pair, ra tứ quý ở flop là 0,245% và ra cù lũ ở flop là 0,98%. Với hai lá không thành đôi, ra trips ở flop là 1,35%, một đường khác với set. Mỗi dòng bên dưới nêu rõ tay đang cầm trước, rồi đếm số flop đạt yêu cầu trong cùng 19.600 khả năng.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Ra ở flop | Đang cầm | Xác suất | Phép toán |
|:---|:---|:---:|:---:|
| **Tứ quý** | Một pocket pair | 0,245% · 407:1 | 48 ÷ 19.600 |
| **Cù lũ** | Một pocket pair | 0,98% · 101:1 | 192 ÷ 19.600 |
| **Trips** | Hai lá không thành đôi | 1,35% · 73:1 | 264 ÷ 19.600 |
| **Thùng phá sảnh** | Hai lá liên tiếp cùng chất 54s–JTs | 0,02% · ~4.900:1 | 4 ÷ 19.600 |

</div>

Một phân biệt quan trọng mà các trang hàng đầu hay làm hỏng: **set** là pocket pair cộng một lá board cùng giá trị (11,8%), còn **trips** là một lá bài tẩy *không thành đôi* được board tạo đôi (1,35%) — nói gọn, set = cầm đôi trên tay + 1 lá trên board, trips = 1 lá trên tay + board có đôi. Cùng là sám cô (bộ ba, three of a kind) trên giấy, nhưng xác suất và tính dễ chơi khác xa nhau — set được che giấu, trips thì lộ. Đừng để ai bảo bạn chúng cùng một hình dạng.

Con số thùng phá sảnh đáng đóng khung: với hai lá liên tiếp cùng chất từ 54s đến JTs có đúng **bốn** flop tạo ra nó (một dãy ba lá cùng chất cho mỗi sảnh mà tay đó có thể nằm trong; các tay biên ít hơn — QJs ba, KQs hai, A2s một), nên 4 ÷ 19.600 ≈ 1 trong 4.900. Đó là lý do ra thùng phá sảnh ở flop là chuyện người ta kể suốt một thập kỷ.

Con số cù lũ đếm mọi cách flop trao cho bạn cù lũ khi cầm pocket pair — kể cả những flop ra trips của một giá trị khác chồng lên đôi của bạn — và đó là lý do nó ghi 0,98% thay vì con số hẹp hơn ~0,73% mà một số bảng trích cho riêng "set cộng board có đôi".

---

## Xác suất được chia từng tay bài là bao nhiêu?

> **Trả lời nhanh**
> Một pocket pair cụ thể có sáu tổ hợp trong 1.326 cách chia khả dĩ, còn pocket pair bất kỳ có 78. A-K cùng chất chỉ có bốn. Đây là cơ hội trước khi bạn thấy bài; khi bạn đã cầm một tay, câu hỏi về việc đối thủ nhận cùng giá trị phải tính đến những lá bạn đã lấy khỏi bộ bài.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Được chia | Xác suất | Bao lâu một lần |
|:---|:---:|:---:|
| Đôi Át (đôi cụ thể) | 220:1 · 0,45% | 6 ÷ 1.326 |
| Pocket pair bất kỳ | 16:1 · 5,9% | 78 ÷ 1.326 |
| A-K cùng chất | 331:1 · 0,3% | 4 ÷ 1.326 |
| Hai lá cùng chất | 3,25:1 · 23,5% | gần như mỗi 4 ván một lần |

</div>

Con số khiến người ta bất ngờ: nếu **bạn** cầm đôi Át ở bàn 10 người, khả năng một người *thứ hai* cũng cầm đôi Át là khoảng **1 trong 136** (chín đối thủ, mỗi người 1 ÷ C(50,2) = 1/1.225). Hiếm — và khi xảy ra, nó gần như không bao giờ là thảm họa như người ta tưởng: Át gặp Át chia pot khoảng 96% số lần (mỗi bên chỉ thắng trọn khoảng 2% — khi board tạo thùng theo chất của một bên). Đó chỉ là bộ bài. Để biết tay nào trong 1.326 tay đó đáng chơi ở từng vị trí, hãy xem [bài khởi đầu nên chơi theo vị trí](/vi/blog/holdem-starting-hands-chart).

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-outs | Cách tính outs trong poker | /images/holdem-outs-hero.webp
/vi/blog/holdem-pot-odds | Cách tính pot odds trong 10 giây | /images/holdem-pot-odds-hero.webp
:::

## Câu hỏi thường gặp

**Q. Xác suất ra set ở flop là bao nhiêu?**

A. Khoảng 11,8%, hay 1 trong 8,5, khi bạn cầm pocket pair — thường được nói là "7,5:1 bất lợi". Nó đến từ 1 − C(48,3)/C(50,3): trong 19.600 flop khả dĩ, 17.296 flop trượt đôi của bạn. Con số đó là điểm xuất phát để mua set với đôi nhỏ — lần call có lời hay không còn phụ thuộc vào bạn thắng được bao nhiêu khi trúng.

**Q. Vì sao nói 7,5 ăn 1 mà cũng nói 1 trong 8 lần?**

A. Chúng là cùng một tỷ lệ nói theo hai cách. "7,5:1 bất lợi" — nhiều người quen miệng gọi là "7,5 ăn 1", dù đây là tỷ lệ tần suất chứ không phải tỷ lệ ăn tiền — đếm số lần trượt so với số lần trúng (7,5 lần trượt cho mỗi lần trúng), tức 1 lần trúng mỗi 8,5 lần thử — nghĩa là khoảng 1 trong 8,5, hay 11,8%. "Tỷ lệ bất lợi" và "1 trong N" luôn mô tả cùng một xác suất; đừng cộng hai con số đó lại với nhau.

**Q. Set và trips khác nhau thế nào?**

A. Set là pocket pair cộng một lá cùng giá trị trên board — bạn ra nó ở flop 11,8% số lần và nó được che rất kín. Trips là một lá bài tẩy không thành đôi được board tạo đôi (hai lá board cùng giá trị) — chỉ 1,35% ở flop, và lộ hơn nhiều trước đối thủ. Cùng hạng sám cô, nhưng xác suất và giá trị rất khác.

**Q. Flush draw là gì?**

A. Flush draw là khi bạn cầm bốn lá hướng tới thùng và cần thêm một lá cùng chất — ví dụ A♥ K♥ trên flop 9♥ 5♥ 2♠, nơi bất kỳ lá nào trong chín lá cơ còn lại đều hoàn thành nó. Flush draw ra ở flop có chín outs và về đích khoảng 35% số lần đến river, hay xấp xỉ 19% trên một lá.

**Q. Xác suất ra thùng ngay ở flop là bao nhiêu?**

A. Chỉ 0,84% (khoảng 118:1) với hai lá cùng chất — đó là C(11,3)/C(50,3). Đừng nhầm với ra flush *draw* ở flop, vốn là 10,9%, hay *hoàn thành* draw đó đến river, vốn là 35%. Hai lá cùng chất ra draw nhiều gấp mười ba lần so với ra thùng sẵn.

**Q. Nếu flop ra flush draw, xác suất hoàn thành thùng là bao nhiêu?**

A. Khoảng 35% đến river với chín outs (1 − C(38,2)/C(47,2)) — nhỉnh hơn một phần ba. Trên một lá là xấp xỉ 19%: 9/47 từ flop sang turn, 9/46 từ turn sang river. Hãy dùng con số một lá bất cứ khi nào còn vòng cược phía trước.

**Q. Bốn lá cùng chất khác ba lá cùng chất ở flop thế nào?**

A. Với bốn lá hướng tới thùng sau flop — một flush draw thật với chín outs — bạn hoàn thành khoảng 35% số lần đến river. Với chỉ ba lá cùng chất, bạn cần *cả* turn lẫn river đều là chất của mình (thùng backdoor, hay runner-runner), chỉ về khoảng ~4,2%. Đó là lý do bốn lá cùng chất là draw đáng chơi còn ba lá chỉ là yếu tố phân định mờ nhạt.

**Q. Straight draw là gì và xác suất trúng là bao nhiêu?**

A. Straight draw là bốn lá hướng tới sảnh. Sảnh hở hai đầu (như 8-7 trên board 9-6-2, cần lá 5 hoặc lá 10) có tám outs và hoàn thành khoảng 31,5% số lần đến river. Gutshot (sảnh hở giữa) chỉ có bốn outs — một giá trị lấp khe — nên trúng khoảng 16,5%, xấp xỉ nửa tần suất.

**Q. Xác suất ra tứ quý ở flop là bao nhiêu?**

A. 0,245%, hay 407:1, khi cầm pocket pair — có đúng 48 flop (hai lá cùng giá trị cuối cùng của bạn cộng bất kỳ lá thứ ba nào, C(48,1)) trong 19.600. Ra thùng phá sảnh ở flop với hai lá liên tiếp cùng chất từ 54s đến JTs còn hiếm hơn, khoảng 1 trong 4.900.

**Q. Xác suất được chia đôi Át là bao nhiêu?**

A. 220:1 (0,45%) riêng cho đôi Át — 6 trong 1.326 tổ hợp khởi đầu. Pocket pair bất kỳ phổ biến hơn nhiều ở 16:1 (5,9%). Và nếu bạn cầm đôi Át ở bàn 10 người, một người khác cũng cầm đôi Át là khoảng 1 trong 136 (khoảng 1 trong 153 ở bàn 9 người).

**Q. Xác suất set gặp set là bao nhiêu?**

A. Không có một con số cố định — nó phụ thuộc vào bao nhiêu đối thủ cầm pocket pair — nhưng khi hai người cùng cầm đôi và cùng ra set thì khoảng 1%. Đó là cooler đỉnh cao: bạn ra set ở flop chỉ 11,8% số lần ngay từ đầu, nên hai người cùng làm được trên cùng board là hiếm — và riêng kết quả không cho biết có lần call nào sai hay không.

**Q. Monster draw là gì?**

A. Monster draw là một draw kép rất mạnh ở flop — thường là flush draw cộng sảnh hở hai đầu, 15 outs sau khi trừ hai lá trùng. Còn hai lá, nó hoàn thành 54,1% số lần đến river (31,9% trên riêng lá kế tiếp), nên trước một đôi đơn nó thường là bên có lợi thế — miễn là các outs đều sạch và đối thủ không cầm draw lớn hơn. Cách đếm ra 15 outs thay vì 17 nằm trong [cách tính outs trong poker](/vi/blog/holdem-outs).

---

## Những điều cần nhớ

1. **Ra set ở flop: 11,8% (7,5:1).** Điểm xuất phát cho mọi lần call mua set — độ sâu stack và một đối thủ nhiều khả năng sẽ trả quyết định nó có lời hay không, nên hãy nhắm thắng 15 lần trở lên khi trúng.
2. **Ra sẵn, ra draw và hoàn thành là ba con số khác nhau.** Hai lá cùng chất ra thùng sẵn 0,84%, ra flush draw 10,9%, và hoàn thành draw đó 35%. Đừng bao giờ trích nhầm con số.
3. **Một draw lớn khoảng một trong ba đến river.** Flush draw 35%, sảnh hở hai đầu 31,5% — và xấp xỉ một trong năm đến sáu trên một vòng cược.

Mọi con số ở đây đến thẳng từ bộ bài, không phải từ cảm giác. Hãy mang chúng vào [cách tính outs](/vi/blog/holdem-outs) để dựng con số theo thời gian thực, rồi [pot odds](/vi/blog/holdem-pot-odds) để biến nó thành call hay fold — hoặc quay lại [bảng xác suất poker](/vi/blog/holdem-probability) để có mọi con số về tay bài sẵn và chuyện hiếm ở một nơi.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất &amp; toán</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bảng xác suất poker 7 lá</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Mọi tay bài sẵn và con số hiếm gặp ở một nơi</div>
  </a>
  <a href="/vi/blog/holdem-outs" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất &amp; toán</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cách tính outs trong poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Biến các xác suất này thành số outs ngay tại bàn</div>
  </a>
  <a href="/vi/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất &amp; toán</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cách tính pot odds trong 10 giây</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Giá có đúng cho draw của bạn không?</div>
  </a>
  <a href="/vi/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Bài khởi đầu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bài khởi đầu nên chơi theo vị trí</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Đôi nào và tay cùng chất nào đáng để chờ</div>
  </a>
</div>
`.trim(),
};

export default POST;
