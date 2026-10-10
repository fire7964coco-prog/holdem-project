import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-probability",
  title: "Bảng xác suất poker: mọi tay bài xuất hiện bao nhiêu lần trong Hold'em",
  seoTitle: "Bạn trúng bài thường đến mức nào? — Bảng xác suất poker",
  desc: "Bạn tưởng mình đen? Con số nói khác. Bảng xác suất poker 7 lá cho mọi tay bài, flop và draw trong Hold'em, kèm quy tắc 4 và 2 cùng pot odds dễ nhớ.",
  tldr: "Đến river, bạn có một đôi 43,8% số ván, hai đôi 23,5%, thùng 3,0% và cù lũ 2,6%. Còn thùng phá sảnh hoàng gia chỉ xuất hiện khoảng 1 lần trong 30.940 ván. Các con số này tính theo 7 lá đến river, không phải bảng 5 lá bạn hay gặp.",
  category: "odds",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-01",
  keepImagesInBody: true,
  readTime: "13 phút",
  emoji: "🎲",
  image: "/images/holdem-probability-hero.webp",
  imageAlt: "Góc nhìn từ trên xuống một bàn Texas Hold'em đang chơi với năm lá bài chung, các chồng chip rải rác và người chơi đang giữa ván",
  tags: ["xác suất poker", "bảng xác suất poker", "poker odds", "cách tính xác suất poker", "tỷ lệ thắng của các hand bài trong poker", "xác suất thùng phá sảnh hoàng gia", "xác suất poker texas hold'em", "xác suất tứ quý poker"],
  content: `
Lần đầu tôi mua set (set mining) với một đôi 5 ở bàn live và ra set (cầm đôi trên tay + 1 lá trên board) ngay flop, anh ngồi cạnh rên lên "xác suất bao nhiêu mà trúng được vậy?" — và tôi biết thật: khoảng ==1 trong 8,5==. Chính con số đó là lý do tôi call ngay từ đầu.

Poker không phải trò đoán mò. Mỗi lần call, fold hay shove đều là một ==câu hỏi xác suất trá hình==, và người thắng là người đã biến câu "xác suất bao nhiêu?" thành phản xạ. Đây là ==**bảng xác suất poker** cho mọi tình huống== trong Texas Hold'em — mọi tay bài đã thành hình, mọi flop, mọi draw (bài chờ) — kèm ==g:một mẹo nhẩm duy nhất== giúp bạn tính ngay tại bàn trong hai giây.

---

### Những con số quan trọng nhất

:::stripe
43,8% | Một đôi đến river
23,5% | Hai đôi
3,0% | Ra thùng
2,6% | Ra cù lũ
1 trong 30.940 | Thùng phá sảnh hoàng gia
:::

---

## Bảng xác suất poker: mỗi tay bài xuất hiện bao nhiêu phần trăm (5 lá so với 7 lá)?

> **Trả lời nhanh**
> Xác suất của một tay bài poker phụ thuộc vào số lá bạn được dùng. Trong Hold'em, 5 lá mạnh nhất trong 7 lá tạo ra một đôi 43,8% số ván và hai đôi 23,5%. Các tần suất đến river này khác với một bộ 5 lá chia ngẫu nhiên; hãy chọn đúng cột trước khi so xem hai tay bài hiếm đến đâu.

- **Xác suất 5 lá** = khả năng một bộ 5 lá ngẫu nhiên *chính là* tay bài đó (con số kinh điển trong sách).
- **Hold'em (đến river)** = khả năng bạn *kết thúc* với tay bài đó sau khi đã thấy đủ 7 lá (2 lá bài tẩy + 5 lá bài chung). Đây mới là con số có ý nghĩa ở bàn.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tay bài | Xác suất 5 lá (được chia) | Xác suất Hold'em (đến river) |
|:---|:---:|:---:|
| Thùng phá sảnh hoàng gia (royal flush) | 1 trong 649.740 (0,000154%) | 1 trong 30.940 (0,0032%) |
| Thùng phá sảnh (straight flush) | 1 trong 72.193 (0,00139%) | 1 trong 3.590 (0,0279%) |
| Tứ quý (four of a kind) | 1 trong 4.165 (0,0240%) | 1 trong 595 (0,168%) |
| Cù lũ (full house) | 1 trong 694 (0,144%) | 1 trong 39 (2,60%) |
| Thùng (flush) | 1 trong 509 (0,197%) | 1 trong 33 (3,03%) |
| Sảnh (straight) | 1 trong 255 (0,392%) | 1 trong 22 (4,62%) |
| Sám cô (three of a kind) | 1 trong 47 (2,11%) | 1 trong 21 (4,83%) |
| Hai đôi (two pair) | 1 trong 21 (4,75%) | 1 trong 4,3 (23,5%) |
| Một đôi (one pair) | 1 trong 2,4 (42,3%) | 1 trong 2,3 (43,8%) |
| Mậu thầu (high card) | 1 trong 2,0 (50,1%) | 1 trong 5,7 (17,4%) |

</div>

> **Con số khiến ai cũng bất ngờ**
> Mậu thầu là tay bài 5 lá *phổ biến nhất* (50,1%), nhưng trong Hold'em nó rớt xuống **17,4%** — đứng thứ ba, sau một đôi (43,8%) và hai đôi (23,5%). Vì sao? Bảy lá cho bạn quá nhiều cơ hội tạo đôi, nên "không có đôi nào đến river" trở thành ngoại lệ. Nhiều lá hơn, nhiều kết nối hơn.

Thứ hạng đi theo **cột 5 lá**: một tay bài càng hiếm trong 5 lá ngẫu nhiên thì càng đứng cao — không có khe hở nào, từ mậu thầu lên đến thùng phá sảnh hoàng gia. Với 7 lá điều đó vẫn đúng ở mọi chỗ trừ mậu thầu, vốn hiếm hơn một đôi (43,8%) mà vẫn xếp cuối. Đó là logic đằng sau [thứ hạng tay bài poker](/vi/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"): xác suất *chính là* thứ hạng — đo trên 5 lá.

:::quiz:::

---

## Xác suất được chia từng tay khởi đầu là bao nhiêu?

> **Trả lời nhanh**
> Đôi Át đến khoảng 1 lần trong 221 ván chia, nhưng một pocket pair (đôi bài tẩy) bất kỳ xuất hiện khoảng 1 lần trong 17. Khác biệt nằm ở số tổ hợp: có 1.326 cách chia hai lá, và một đôi cụ thể chỉ chiếm sáu trong số đó. Hai lá cùng chất bất kỳ đến 23,5% số ván, còn riêng A-K cùng chất chỉ 0,30%.

![Đôi Át — lá Át bích và Át cơ vừa được chia trên nỉ xanh bên cạnh các chip poker](/images/holdem-probability-starting-hands.webp "Đôi Át: tay khởi đầu mạnh nhất, chỉ được chia 1 lần trong 221 ván")

Trước mọi flop, có đúng **1.326 tay khởi đầu hai lá khả dĩ**. Đây là tần suất của những tay mà người chơi hay hỏi.

| Tay khởi đầu | Xác suất | Bao lâu một lần |
|:---|:---:|:---|
| Một pocket pair cụ thể (ví dụ A-A) | 1 trong 221 (0,45%) | Khoảng 221 ván một lần |
| Pocket pair **bất kỳ** | 1 trong 17 (5,9%) | Chừng hai lần mỗi giờ ở bàn live |
| A-K cùng chất (cụ thể) | 1 trong 332 (0,30%) | Hiếm |
| A-K (cùng chất *hoặc* khác chất) | 1 trong 83 (1,2%) | — |
| Hai lá cùng chất bất kỳ | 1 trong 4,3 (23,5%) | Gần như mỗi bốn ván một lần |

Nên lần tới có ai than "tôi chẳng bao giờ được Át", họ nói gần đúng — bạn chỉ được chia một đôi *cụ thể* như đôi Át khoảng ==221 ván một lần==. Nhưng pocket pair **bất kỳ** thì 17 ván đến một lần, và đó là lý do mua set là chiến thuật thật, không phải mơ mộng. Đôi nào và tay cùng chất nào đáng chơi ở từng vị trí nằm trong [bài khởi đầu nên chơi theo vị trí](/vi/blog/holdem-starting-hands-chart).

---

## Bạn ra được gì ở flop với xác suất bao nhiêu?

> **Trả lời nhanh**
> Cầm pocket pair, bạn ra set hoặc hơn ở flop 11,8% số ván. Cầm hai lá cùng chất, ra thùng ngay ở flop chỉ 0,84%, còn ra flush draw (chờ thùng) là 10,9%. Đây là xác suất có điều kiện: bắt đầu từ bài tẩy ghi trong bảng, không phải tần suất của tay bài đó trên mọi ván chia ngẫu nhiên.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Bạn ra ở flop… | Đang cầm | Xác suất | Tỷ lệ bất lợi |
|:---|:---|:---:|:---:|
| Set (hoặc hơn) | Một pocket pair | 11,8% | ~7,5:1 |
| Thùng | Hai lá cùng chất | 0,84% | ~118:1 |
| Flush draw | Hai lá cùng chất | 10,9% | ~8:1 |
| Sảnh | Hai lá liên tiếp cùng chất (ví dụ 8-7) | 1,3% | ~76:1 |
| Hai đôi | Hai lá không thành đôi | 2,0% | ~49:1 |
| Cù lũ | Một pocket pair | 0,98% | ~101:1 |
| Tứ quý | Một pocket pair | 0,245% | ~407:1 |

</div>

Với mua set, ==7,5:1 là mức hoàn vốn lý thuyết, không phải quy tắc stack đủ dùng==: nó giả định mọi lần trúng đều thắng và đều được trả tiền. Thực tế, hướng dẫn thường dùng — stack hiệu dụng bằng 15–20 lần tiền call — chừa chỗ cho những lần trúng mà không ăn được và những set thua; ngay cả mức đó cũng chỉ là kinh nghiệm, không phải lệnh call tự động. Đó là cây cầu dẫn tới [pot odds](#pot-odds) (tỷ lệ pot — pot so với số tiền phải call) bên dưới. Để xem cách suy ra từng dòng ở đây — kèm quy tắc stack khi mua set và cách tách ba con số thùng sẵn / flush draw / hoàn thành thùng — hãy đọc bài phân tích sâu về [xác suất draw và xác suất ra từng tay bài ở flop](/vi/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp").

---

## Xác suất draw: thùng hay sảnh của bạn trúng đến river bao nhiêu phần trăm?

> **Trả lời nhanh**
> Một flush draw 9 outs hoàn thành khoảng 35% số ván qua turn và river, so với 19,6% nếu chỉ còn lá river sau khi turn trượt. Straight draw 8 outs thấp hơn một chút. Đây là xác suất hoàn thành draw, không phải thắng chắc: trước hết hãy loại những lá cải thiện tay bạn nhưng vẫn để đối thủ dẫn trước.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | Flop → river (2 lá) | Turn → river (1 lá) |
|:---|:---:|:---:|:---:|
| Thùng + sảnh hở hai đầu (draw kép) | 15 | 54,1% | 32,6% |
| Thùng + gutshot | 12 | 45,0% | 26,1% |
| Flush draw | 9 | 35,0% | 19,6% |
| Sảnh hở hai đầu | 8 | 31,5% | 17,4% |
| Hai overcard (lá cao hơn board) | 6 | 24,1% | 13,0% |
| Gutshot (sảnh hở giữa) | 4 | 16,5% | 8,7% |
| Đôi → set | 2 | 8,4% | 4,3% |
| Set → cù lũ hoặc tứ quý | 7 (flop) / 10 (turn) | 33,4% | 21,7% |

</div>

Dòng hai overcard 6 outs giả định tạo đôi với lá nào trong hai lá cũng thắng. Trước hai đôi, set hay một draw mạnh hơn, một phần hay toàn bộ các lá tạo đôi đó có thể là outs bẩn (dirty outs) — hãy chiết khấu thay vì coi cả sáu là outs thắng chắc. Dòng set cũng tính cả lá thứ tư cùng giá trị: riêng cù lũ là khoảng 29,1% từ flop và 19,6% ở turn.

Tình huống kinh điển: bạn ra **flush draw** ở flop (9 outs). Bạn sẽ về đích ==35% số ván đến river== — hơn một phần ba. **Sảnh hở hai đầu (OESD)** (8 outs) trúng 31,5%. Hãy để ý hai cột: một khi turn ra lá brick (lá trượt — không giúp draw của bạn), bạn chỉ còn một lá thay vì hai, nên xác suất gần như giảm nửa — 35% thành 19,6% với flush draw — và đó chính là lý do càng qua từng vòng cược, theo draw càng đắt.

---

## Cách tính xác suất poker: đếm outs và quy tắc 4 và 2

> **Trả lời nhanh**
> Quy tắc 4 và 2 ước lượng phần trăm hoàn thành một draw: lấy số outs nhân 2 khi còn một lá, nhân 4 khi tính cả turn và river. Ước lượng hai lá chỉ dùng để định giá một lần call ở flop khi bạn không phải trả thêm tiền để xem cả hai lá. Đây là mẹo nhẩm, không phải equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) chính xác.

:::steps
Đếm outs của bạn | Những lá chưa lộ có thể hoàn thành tay bạn (flush draw = 9)
Ở flop, nếu bạn sẽ xem được cả hai lá mà không phải trả thêm | Nhân outs × 4 → phần trăm xấp xỉ trúng đến river
Ở turn (còn 1 lá) | Nhân outs × 2 → phần trăm xấp xỉ trúng ở river
:::

**Ví dụ cụ thể.** Bạn có bốn lá cùng chất sau flop. Đó là ==9 outs== (13 lá cùng chất − 4 lá bạn đã thấy). Ở flop: 9 × 4 = **36%** — con số thật là 35,0%, gần như trúng phóc. Ở turn nếu trượt: 9 × 2 = **18%** (thật: 19,6%).

:::tip[Ước lượng ×4 đã hơi cao từ 7 outs; khoảng cách càng đáng kể với draw càng lớn. Với monster draw 15 outs, "×4" nói 60% nhưng con số thật là 54% — hãy trừ đi vài điểm với các draw lớn.]:::

Đó là mẹo nhẩm: outs sạch → hệ số theo số lá bạn sẽ thấy → một ước lượng để dùng cùng [equity](/vi/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp") của bạn (phần pot kỳ vọng của bạn, tính cả khi chia pot). Phần còn lại chỉ là biết làm gì với con số đó. Kỹ năng duy nhất quy tắc này mặc định bạn đã nắm là chính việc đếm — với draw kép, outs trùng nhau và những outs "bẩn" không nên tính, hãy xem hướng dẫn [cách tính outs trong poker](/vi/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp").

---

<a id="pot-odds"></a>

## Pot odds: biến xác suất thành quyết định call hay fold như thế nào?

> **Trả lời nhanh**
> Pot odds biến một lần call thành mục tiêu hòa vốn: lấy tiền phải call chia cho pot sau khi đã cộng cả tiền call đó. So mức giá ấy với khả năng thắng của bạn trên những lá mà lần call này thực sự mua được. Con số thùng hai lá không thể biện minh cho việc chỉ trả tiền xem turn khi còn một cú bet nữa có thể theo sau; tiền thắng thêm về sau cần ước lượng riêng.

![Đồ họa pot odds — pot $100 và call $25, nên 25 ÷ 125 nghĩa là bạn cần 20% equity](/images/holdem-probability-pot-odds.webp "Call $25 vào pot $100: 25 ÷ 125 = 20% equity cần có để hòa vốn")

**Ví dụ cụ thể.** Pot là $100. Đối thủ bet $50, pot thành $150. Bạn phải call $50 để tranh $150 đó.

:::steps
Pot sau cú bet | $100 + $50 = $150
Tiền call của bạn | $50 để tranh $150 (pot cuối cùng $200)
Pot odds | 50 ÷ 200 = 25% — bạn cần ít nhất 25% equity
Equity của bạn | Flush draw với 9 outs sạch ≈ 35% đến river — con số theo quy tắc nhân 4, giả định bạn thấy ==cả hai== lá
Quyết định | Khi còn cả hai lá: 35% > 25% → một lần ==g:call== rõ ràng có lời
:::

Đó là khoảnh khắc mọi con số trả công — nhưng **hãy khớp con số với vòng cược bạn đang trả tiền**. Khi cả hai lá đều sẽ ra (bạn đã all-in, hoặc turn được check qua), **35%** của một draw sạch thắng mức giá **25%** và call sẽ có lời về lâu dài dù bạn thua ván này nhiều hơn thắng. Khi đối thủ sẽ bet tiếp ở turn, lần call này chỉ mua cho bạn lá turn — từ flop là ==9 ÷ 47 = 19,1%==, *thấp hơn* giá — và draw khi đó cần [implied odds](/vi/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") (tỷ lệ cược ngầm — tiền có thể thắng thêm ở các vòng sau khi bạn trúng) để bù khoảng trống. Đem con số ×4 vào một quyết định chỉ còn một lá là cách phổ biến nhất khiến người mới đánh giá draw quá cao. Để xem đủ phương pháp và bảng theo cỡ bet, hãy đọc [cách tính pot odds](/vi/blog/holdem-pot-odds).

---

## Thùng phá sảnh hoàng gia hiếm đến mức nào? (Và thùng phá sảnh)

> **Trả lời nhanh**
> Thùng phá sảnh hoàng gia xuất hiện khoảng 1 lần trong 30.940 ván Hold'em 7 lá ngẫu nhiên, thường xuyên hơn nhiều so với một bộ 5 lá chia sẵn. Thùng phá sảnh thường (không phải hoàng gia) khoảng 1 trong 3.590 đến river — ít hiếm hơn nhưng vẫn là chuyện hiếm thấy. Hai con số này đều không mô tả cơ hội của bạn từ một draw cụ thể: khi đã biết bài tẩy và flop, phép tính phụ thuộc vào chính những lá đó.

![Đồ họa thùng phá sảnh hoàng gia chất cơ — A♥ K♥ trên tay hoàn thành A-K-Q-J-10 chất cơ với board 10♥ J♥ Q♥](/images/holdem-probability-royal-flush.webp "Thùng phá sảnh hoàng gia chất cơ: tay bài hiếm nhất trong poker, khoảng 1 trong 30.940 đến river")

- **Thùng phá sảnh hoàng gia:** nếu tính như một bộ 5 lá chia sẵn, ==1 trong 649.740==. Chơi Hold'em đến river, con số cải thiện lên khoảng 1 trong 30.940 vì bạn được chọn 5 lá mạnh nhất trong 7 lá. Dù tính cách nào, hầu hết người chơi phải đợi *nhiều năm* giữa hai lần.
- **Thùng phá sảnh:** khoảng 1 trong 72.193 với bộ 5 lá (khoảng 1 trong 3.590 đến river trong Hold'em). Với phần lớn người chơi vẫn là chuyện một năm gặp một lần.

Vì sao hiếm đến vậy? Thùng phá sảnh hoàng gia là **đúng một dãy lá cụ thể trong đúng một chất cụ thể** — chỉ có bốn cách tạo ra nó trong cả bộ bài so với 1.302.540 cách tạo ra một mậu thầu bình thường. Độ hiếm chính là toàn bộ lý do nó ngồi trên đỉnh bảng xếp hạng.

:::note
Một lầm tưởng phổ biến: "thùng phá sảnh hoàng gia thắng tất cả, nên nó có thể *hòa*." Pot có thể bị chia, nhưng không theo cách người ta hay giải thích. Hai royal ở hai chất *khác nhau* cần đúng mười lá cụ thể, mà hai người chơi chỉ có tối đa chín lá để dùng — mỗi người hai lá bài tẩy cộng năm lá trên board — nên điều đó không thể xảy ra. Cách duy nhất để cả hai cùng cầm royal là khi chính board là royal: mọi người đều chơi board, và pot được chia. Thực tế gần như bạn sẽ không bao giờ thấy.
:::

---

## Xác suất cooler, tứ quý và bad beat: hiếm đến đâu?

> **Trả lời nhanh**
> Các xác suất xa vời trong poker cần một điều kiện xuất phát. Ra tứ quý ở flop với pocket pair khoảng 1 trong 408; được chia đôi Át là 1 trong 221 trước khi bạn thấy lá nào. Những sự kiện này giải thích các kết quả hiếm, nhưng riêng một ván thua hiếm hoi không cho biết quyết định trước đó đúng hay sai.

| Chuyện hiếm | Xác suất |
|:---|:---:|
| Được chia đôi Át | 1 trong 221 |
| Ra tứ quý ở flop với pocket pair | 1 trong 408 |
| Ra thùng phá sảnh ở flop (hai lá liên tiếp cùng chất 54s–JTs) | ~1 trong 4.900 |
| Ra thùng phá sảnh hoàng gia đến river | 1 trong 30.940 |

**Set đụng set (set over set)** — bạn ra set ở flop rồi thua một set lớn hơn — là cooler (ván thua đau khi cả hai cùng cầm bài rất mạnh) kinh điển nhất. Không có một con số gọn gàng vì nó phụ thuộc vào bao nhiêu người đang cầm đôi, nhưng điểm neo là đây: *bạn* chỉ ra set ở flop 11,8% số ván, và việc một đối thủ cũng ra set trên cùng board hiếm đến mức hầu hết người chơi nhớ từng lần. Khi điều đó xảy ra, riêng việc thua không chứng minh lần call là sai — hay là đúng; hãy đánh giá bằng giá và độ sâu stack bạn có lúc đó, không phải bằng showdown (lật bài). Nếu muốn xem chính xác những showdown đó được chấm thế nào, [luật kicker và so bài cùng hạng](/vi/blog/holdem-tiebreak-rules) bao trùm mọi trường hợp hiếm.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-hand-rankings | Thứ hạng bài poker | /images/holdem-hand-rankings-hero.webp
/vi/blog/holdem-starting-hands-chart | Bài khởi đầu nên chơi theo vị trí | /images/holdem-starting-hands-chart-hero.webp
:::

## Câu hỏi thường gặp

**Q. Xác suất ra thùng phá sảnh hoàng gia trong Texas Hold'em là bao nhiêu?**

A. Khoảng 1 trong 30.940 đến river khi bạn chơi hết một ván Hold'em (dùng 5 lá mạnh nhất trong 7 lá). Nếu tính như một bộ 5 lá chia thẳng thì là 1 trong 649.740. Dù tính cách nào, hầu hết người chơi phải đợi nhiều năm mới gặp một lần.

**Q. Xác suất ra thùng phá sảnh là bao nhiêu?**

A. Khoảng 1 trong 72.193 với bộ 5 lá, hay khoảng 1 trong 3.590 đến river trong Hold'em. Đây là tay bài hiếm thứ hai, chỉ thua thùng phá sảnh hoàng gia.

**Q. Xác suất ra tứ quý (hay tứ quý Át) là bao nhiêu?**

A. Tứ quý thành hình khoảng 1 trong 595 lần đến river trong Hold'em (0,168%), hay 1 trong 4.165 với bộ 5 lá chia sẵn. Một tứ quý *cụ thể* như tứ quý Át thì xa hơn nhiều — khoảng 1 trong 7.700 đến river. Đường đi phổ biến nhất (khoảng 57% số lần) là một lá Át trên tay và ba lá còn lại trên board; cầm đôi Át rồi bắt được cả hai lá Át còn lại hiếm hơn, và cả bốn lá cùng nằm trên board còn hiếm hơn nữa.

**Q. Thùng, sảnh và cù lũ hiếm đến mức nào?**

A. Đến river trong Hold'em, bạn ra thùng khoảng 3,0% số ván (1 trong 33), sảnh 4,6% (1 trong 22) và cù lũ 2,6% (1 trong 39). Vậy cù lũ thực ra hiếm hơn thùng, và thùng hiếm hơn sảnh — đúng thứ tự mà bảng xếp hạng tay bài đặt ra.

**Q. Xác suất hoàn thành thùng đến river là bao nhiêu?**

A. Nếu bạn ra flush draw ở flop (9 outs), bạn sẽ hoàn thành thùng khoảng 35% số ván đến river — hơn một phần ba. Với một lá duy nhất (turn sang river), con số rớt xuống khoảng 19,6%.

**Q. Xác suất ra set ở flop là bao nhiêu?**

A. Khoảng 11,8%, tức xấp xỉ 1 trong 8,5, khi bạn cầm pocket pair. Tỷ lệ 7,5:1 tương ứng mô tả số lần trượt so với số lần trúng, không phải độ sâu stack được khuyên dùng. Một lần call mua set còn cần khả năng được trả tiền thực tế về sau; hướng dẫn thực dụng — stack hiệu dụng bằng 15–20 lần tiền call — chừa chỗ cho những set không ăn được gì hoặc thua.

**Q. Xác suất ra thùng phá sảnh hoàng gia ngay ở flop là bao nhiêu?**

A. Nhỏ đến mức gần như không có. Ngay cả khi bạn đã cầm hai trong năm lá cùng chất — chẳng hạn A♥ K♥ — flop chỉ mang đúng Q♥ J♥ 10♥ khoảng 1 lần trong 19.600 flop. Từ một tay khởi đầu ngẫu nhiên thì còn hiếm hơn rất nhiều, và đó là lý do gần như mọi royal được tạo ra đều hoàn thành ở turn hoặc river, không phải ở flop.

**Q. Xác suất được chia đôi Át là bao nhiêu?**

A. 1 trong 221 (0,45%) riêng cho đôi Át. Còn pocket pair bất kỳ thì đến thường xuyên hơn hẳn — khoảng 1 trong 17 ván (5,9%).

**Q. Quy tắc 4 và 2 dùng ra sao để đổi outs thành phần trăm?**

A. Quy tắc 4 và 2 (còn gọi là "quy tắc 4-2") ước lượng xác suất draw: nhân số outs với 4 ở flop cho cả turn và river, hoặc với 2 ở turn cho riêng lá river. Chín outs cho 36% qua hai lá theo ×4, so với 35,0% chính xác; ×2 cho 18% với lá river, so với 19,6%. Hãy tra bảng chính xác khi giá sát nút, và chỉ dùng con số hai lá khi bạn xem được cả hai lá mà không có thêm vòng cược.

**Q. Công thức pot odds: chia tiền call cho pot cuối cùng ra sao?**

A. Lấy số tiền bạn phải call chia cho tổng pot sau khi bạn call: call $50 vào pot $150 là 50 ÷ 200 = 25%, tức equity bạn cần có. Trang này cung cấp nửa còn lại của phép so sánh đó — draw của bạn thực sự về đích bao nhiêu phần trăm. Phần định giá nằm trong [hướng dẫn pot odds — tỷ lệ, mẹo nhẩm theo cỡ bet và những lỗi tốn tiền](/vi/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp").

**Q. Xác suất set gặp set là bao nhiêu?**

A. Không có một con số cố định — nó phụ thuộc vào bao nhiêu đối thủ cầm pocket pair — nhưng rất hiếm. Bạn ra set ở flop chỉ 11,8% số ván ngay từ đầu, nên hai người cùng ra set trên cùng board là cooler kinh điển làm bay stack.

**Q. Tay bài thắng phổ biến nhất trong poker là gì?**

A. Một đôi, rồi đến hai đôi. Vì mọi người chơi dùng chung năm lá bài chung, phần lớn pot trong Texas Hold'em được định đoạt bởi một đôi và kicker (lá phụ) đi kèm — thùng, sảnh và cù lũ thắng ít hơn nhiều so với người mới tưởng. Mỗi tay bài xuất hiện bao nhiêu lần trên 7 lá — vốn không giống với việc nó thắng pot bao nhiêu lần — nằm ở bảng phía trên.

**Q. Tay bài mạnh nhất thắng thường xuyên đến mức nào?**

A. Ít hơn bạn nghĩ trước river. Ngay cả đôi Át — tay khởi đầu mạnh nhất — chỉ thắng khoảng 85% khi heads-up với một tay ngẫu nhiên, và ít hơn nhiều trước cả bàn. Đến river thì năm lá mạnh nhất thắng theo định nghĩa; những cú lật kèo xảy ra sớm hơn, khi một tay đã thành hình bị một draw còn sống vượt mặt.

**Q. Bạn trúng flop bao nhiêu phần trăm số ván?**

A. Với hai lá bài tẩy không thành đôi, bạn tạo đôi với ít nhất một lá ở flop khoảng 32% số ván — nghĩa là bạn trượt hoàn toàn chừng hai trong ba flop. Đó là lý do vị trí và sự chủ động quan trọng đến vậy: bất kỳ đối thủ đơn lẻ nào cũng trượt flop khoảng hai lần trong ba, và người sẵn sàng bet thường lấy được pot.

**Q. Xác suất cầm nuts là bao nhiêu?**

A. Không có một con số duy nhất — nuts (tay bài mạnh nhất có thể trên board này) thay đổi theo từng board. Trên board khô không có đôi, nuts có thể là top set; trên board liên kết, nó có thể là sảnh hoặc thùng. Kỹ năng không phải là nhớ một con số xác suất, mà là đọc ra tay nào *là* nuts và ước lượng khả năng đối thủ đang cầm nó.

**Q. Tỷ lệ thắng của các hand bài trong poker là bao nhiêu?**

A. Tùy từng cặp đấu, và các cặp all-in trước flop lặp lại rất thường xuyên: AA gặp KK là 82% so với 18%; QQ gặp AK khoảng 57% so với 43%; 22 gặp AK khoảng 52% so với 48% — một coin flip đúng nghĩa; AK gặp AQ khoảng 74% so với 26%. Lưu ý đây là equity của từng tay (phần pot kỳ vọng, tính cả khi chia pot), khác với tần suất một tay bài xuất hiện trong bảng phía trên. Cách đọc và dùng các con số này nằm trong bài [equity trong poker](/vi/blog/holdem-equity).

**Q. Xác suất thắng có thay đổi khi có nhiều người chơi hơn không?**

A. Có, và giảm nhanh. Trước flop, gặp các tay ngẫu nhiên, đôi Át thắng khoảng 85% khi heads-up, nhưng trước ba đối thủ con số tụt xuống khoảng 64%, và trước bốn đối thủ khoảng 56% — vẫn là tay mạnh nhất, nhưng không còn áp đảo như cảm giác. Cùng một pot 100% nay phải chia cho nhiều tay hơn. Nhiều người hơn cũng khiến bạn khó thắng pot chỉ bằng một cú bet và dễ bị đẩy khỏi ván trước showdown.

---

## Những điều cần nhớ

1. **Ra set ở flop: ~12% (1 trong 8,5).** Tỷ lệ trúng mở đầu phép tính mua set; độ sâu stack và khả năng được trả tiền quyết định lần call có lời hay không.
2. **Flush draw đến river: 35%.** Chín outs, quy tắc nhân 4 → 9 × 4 = 36%.
3. **Pot odds thắng cảm giác.** Khớp xác suất với số lá mà lần call này mua được, rồi so giá với khả năng thắng — hoàn thành draw không phải lúc nào cũng đủ.

Poker tưởng thưởng những người đã biến các con số này thành tự động. Hãy học bảng, luyện quy tắc 4 và 2, và bắt đầu hỏi "xác suất bao nhiêu?" *trước* khi hành động thay vì sau. Tiếp theo, hãy đem toán vào thực chiến bằng cách học [bài khởi đầu nên chơi theo từng vị trí](/vi/blog/holdem-starting-hands-chart), hoặc ôn lại [vì sao thùng lớn hơn sảnh](/vi/blog/holdem-flush-vs-straight) để luôn biết outs của mình đáng giá bao nhiêu.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thứ hạng tay bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thứ hạng bài poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Thứ tự mà các xác suất này tạo ra — mọi tay bài được xếp hạng</div>
  </a>
  <a href="/vi/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Bài khởi đầu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bài khởi đầu nên chơi theo vị trí</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Nên thực sự chơi tay nào trong 1.326 tay đó</div>
  </a>
  <a href="/vi/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">So tay bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thùng có lớn hơn sảnh không?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao loại tay hiếm hơn xếp cao hơn</div>
  </a>
  <a href="/vi/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Đọc board</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cách đọc board trong Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Đếm outs bằng cách nhìn ra mọi draw</div>
  </a>
  <a href="/vi/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Vị trí thay đổi mọi thứ thế nào</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Khi xác suất biện minh cho lần call — và khi vị trí làm điều đó</div>
  </a>
</div>
`.trim(),
};

export default POST;
