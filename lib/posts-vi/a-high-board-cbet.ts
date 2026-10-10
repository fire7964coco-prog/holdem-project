import type { Post } from "../posts";

/**
 * GTO ví dụ solver ① (vi) — A♥7♦2♣ board A-high khô · master = lib/posts-en/a-high-board-cbet.ts (EN updated 2026-10-02 · gốc b57cb658)
 * Nguồn số liệu: chỉ EN nguyên văn (Spot mẫu, kiểm tra 2026-08-19). Bản vi chỉ đổi dấu thập phân/nghìn và T có chất → 10.
 * Từ khóa: dry board poker · wet board poker · range advantage poker (DataForSEO 2704/vi · 2026-10-08 · L-G-gto).
 * Giới hạn đã biết: ảnh vẫn dùng bản -en (chưa có ảnh -vi) · loạt GTO không có trải nghiệm cá nhân bịa ra (settled-decisions §1-E).
 */
export const POST: Post = {
  slug: "a-high-board-cbet",
  title: "Có top pair vẫn check: tần suất c-bet trên flop A-7-2",
  seoTitle: "Dính top pair mà solver vẫn check — C-bet flop A-high khô",
  desc: "Bạn dính top pair trên A-7-2 và muốn bet ngay. Solver lại check 98,2% range của big blind — tần suất c-bet cụ thể, và vì sao equity không phải lý do.",
  tldr: "Trên A♥7♦2♣ sau khi button open và big blind call, big blind check 98,2% range của mình — kể cả top pair, hai đôi và set. Equity gần như ngang nhau, 45,1% so với 54,9%; thứ tách hai ghế ra là equity realization: 84,0% khi không có vị trí so với 113,1% khi có vị trí.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "9 phút",
  emoji: "🅰️",
  image: "/images/gto-srp-dry-ace-oop-en.webp",
  imageAlt: "Kết quả solver của HoldemMaster trên flop A-high khô: lưới 13x13 của big blind gần như phủ kín màu xanh lá của check",
  tags: ["tần suất c-bet", "khi nào nên c-bet", "dry board poker", "range advantage poker", "lợi thế range", "equity realization", "ví dụ solver"],
  content: `
Flop ra **A♥ 7♦ 2♣**, rainbow (3 lá khác chất). Bạn ngồi big blind (BB — mù lớn) với A9 — top pair. Bet trước nghe như điều hiển nhiên. Không phải vậy.

Mọi con số dưới đây lấy từ [GTO poker solver miễn phí](/vi/solver) của HoldemMaster, đọc trực tiếp từ kết quả Spot mẫu ngày 2026-08-19, và bạn có thể mở đúng màn hình đó chỉ với một cú nhấp.


:::stripe
Spot | BTN open 2,5bb → BB call (heads-up)
Flop | A♥ 7♦ 2♣ (rainbow)
Pot · Stack | Pot 5,5bb · stack hiệu dụng 97,5bb
Kết quả | BB check 98,2% — gần như cả range đều check
:::

> **Trả lời nhanh**
> Hãy check, và chuẩn bị đi tiếp. Khi một range chọn cùng một hành động với gần như mọi tay bài — kể cả tay mạnh (cộng cả hai size bet lại cũng chỉ 1,9%) — đó là **range check**, và đó là điều big blind làm ở đây. Check không có nghĩa là bỏ pot: nó giữ các tay bluff của button ở lại, và top pair vẫn là tay bạn đi tiếp khi c-bet (cược tiếp tục) tới.

## Những con số này đến từ điều kiện nào?

Button (BTN) open 2,5bb, big blind call (theo), những người còn lại fold (bỏ bài) — nên hai người chơi nhìn flop với pot 5,5bb và 97,5bb phía sau. Cả hai range đều là bản xấp xỉ range online tiêu chuẩn 100bb, flop là A♥ 7♦ 2♣ rainbow, và solver được cho hai size bet để dùng, khoảng một phần ba và ba phần tư pot. Không tính rake (phí sòng). Thay đổi bất kỳ điều kiện nào trong số đó thì tần suất cũng thay đổi theo.

| Thiết lập | Giá trị |
|---|---|
| Preflop | BTN open 2,5bb · BB call · những người còn lại fold |
| Range | Xấp xỉ range online tiêu chuẩn 100bb |
| Flop | A♥ 7♦ 2♣, rainbow |
| Pot · Stack | Pot 5,5bb · stack hiệu dụng 97,5bb |
| Cỡ bet | Khoảng 33% và 75% pot |
| Rake | Không tính rake |
| Kiểm tra ngày | 2026-08-19, kết quả Spot mẫu |

Pot là 5,5bb vì 2,5bb open của button và 2,5bb call của big blind cộng thêm 0,5bb của small blind đã fold. Mọi thứ trên màn hình đều tính bằng big blind — bet hiện dưới dạng "Bet 1,8bb (33% pot)", giá trị kỳ vọng hiện dưới dạng "EV (bb)".

## Trên flop A-high khô, c-bet bao nhiêu phần trăm là hợp lý?

Câu trả lời phụ thuộc hoàn toàn vào việc bạn ngồi ghế nào. Với người raise preflop trên một board khô như thế này, khoảng **70%–100% với size nhỏ** khi heads-up và in position (IP — có vị trí) — bài hướng dẫn [continuation bet](/vi/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") phân tích con số đó theo từng loại board. Với người đã call, câu trả lời là **gần như bằng không**.

Nói chặt chẽ, người call hoàn toàn không có c-bet — thuật ngữ này chỉ việc người raise preflop bet ở flop, nên phiên bản của big blind là một **donk bet (lead — bet trước vào người đã raise preflop)**. Con số dưới đây là của người hành động trước (big blind), không phải tần suất c-bet của button. Nhưng đó là con số mọi người muốn biết khi rơi vào phía này của ván bài, và nó đây:

| Hành động đầu tiên của BB | Tần suất | Combo |
|---|---|---|
| Check | **98,2%** | 455,5 |
| Bet 1,8bb (33% pot) | 1,0% | 4,5 |
| Bet 4,1bb (75% pot) | 0,9% | 3,9 |

Trong 464 combo (tổ hợp bài), khoảng tám combo bet — 1,9% cộng cả hai size, đã làm tròn. Trên thực tế bạn có thể làm tròn luôn: **big blind không lead trên board này.**

## Vì sao big blind check cả top pair?

Vì check giúp thắng pot dễ hơn là bet vào nó. Lead với một đôi, out of position (OOP — không có vị trí), vào người đã cầm thế chủ động preflop là cách tốn kém để chơi một tay bài mà bạn vốn vui lòng đi đến showdown.

Có ba điều chống lại việc lead. Thứ nhất, **equity realization (EQR — phần equity bạn thực sự thu về)**: các con số bên dưới cho thấy big blind thu về 84,0% equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) của mình còn button là 113,1%. Xây pot lớn hơn khi không có vị trí khiến khoảng cách đó tốn kém hơn, chứ không ít đi. Thứ hai, button thường c-bet khá nhiều trên flop kiểu này (lần tính này không cung cấp tần suất đó) — **check giữ các tay bluff của nó ở lại trong pot**, còn lead thì để chúng fold và không mất gì. Thứ ba, range của big blind bị chặn trên (capped): không có AA, AK hay AQ, nên một cú lead sẽ mời các tay Át mạnh raise (tố), và phần lớn range của big blind không thể đi tiếp trước chúng — chỉ 24 combo chịu được một cú raise (set 77 và 22, hai đôi A7 và A2). (Ở đây không giải node raise.)

Điều mà lead **không** làm được là khiến tay mạnh hơn fold. Range open của button giữ mọi tay Át xuống tới A2, cộng thêm các underpair (đôi tẩy thấp hơn lá cao nhất trên board) và các tay có lá 7, nên có rất nhiều tay yếu hơn sẽ call — đó không phải vấn đề. Vấn đề là cái pot bạn đang xây để thắng nó.

Cũng cần nhớ rằng "một tay Át" không phải chỉ một loại tay bài. A9 thua kicker trước AK, AQ, AJ và AT, còn A7 và A2 hoàn toàn không phải top pair — trên board này A7 thành ==A-A-7-7-2==, hai đôi (two pair). Range check giấu tất cả chúng sau cùng một hành động, nên đối thủ không thể phân loại.

**Và những tay thực sự bet không phải là những tay bạn đoán.** Mở bảng chi tiết, các tay Át mạnh nhất mà big blind được phép có thỉnh thoảng thử bet: A♣J♣ bet size nhỏ 14,5% số lần, A♦J♦ 12,2%, A♠J♠ 7,1%, A♠10♠ 4,5%. Tần suất nhỏ, nhưng chúng đến từ đỉnh range chứ không phải từ bài chưa có gì — đó là lý do check không phải là đầu hàng thuần túy.

## Board khô là gì, và vì sao board này nghiêng về người raise?

Board khô là board không có flush draw (chờ thùng) và gần như không có straight draw — ba lá rời rạc ở ba chất khác nhau, như A♥ 7♦ 2♣. Gần như chẳng có gì đang chờ: **71,3% range của big blind không có draw**, và phần lớn số còn lại là backdoor flush draw. Board này nghiêng về người raise vì range open của button giữ AK và AQ, trong khi range call của big blind cao nhất chỉ tới AJ — các tay Át dồn về một phía, và không có draw nào để cân bằng lại ở các vòng sau.

![Infographic thành phần range so sánh các nhóm tay bài của big blind và button trên board A-high khô, thanh xanh lá và vàng đặt cạnh nhau](/images/gto-srp-dry-ace-ranges-en.webp "A♥7♦2♣ · chia theo nhóm — button có nhiều top pair hơn, big blind nhiều bài chưa có gì hơn")

Out of position (OOP) là big blind, hành động trước; in position (IP) là button.

| Nhóm | BB (OOP) | BTN (IP) |
|---|---|---|
| Sám cô — ở đây luôn là set | 1,3% | **1,9%** |
| Hai đôi | 3,9% | 3,9% |
| Top pair | 20,7% | **25,9%** |
| Second pair | 5,2% | 5,2% |
| Đôi yếu | 1,3% | 0,0% |
| Underpair | 9,1% | **13,0%** |
| K-high | **17,2%** | 16,4% |
| Chưa thành bài | **41,4%** | 33,7% |

Khoảng cách đến từ việc mỗi range được phép chứa gì. Button open mọi tay Át — từ A2 đến AK. Range call của big blind **cao nhất chỉ tới AJ**: không AA, không AK, không AQ, vì những tay đó 3-bet. Cùng một lá Át trên board, nhưng top pair vẫn xuất hiện nhiều hơn 5,2 điểm phần trăm ở phía button, và những tay Át mạnh nhất nằm trọn ở một bên bàn.

Set kể cùng câu chuyện qua số tay bài. Các đôi tẩy ra set ở đây là AA, 77 và 22, và **big blind chỉ có 77 và 22** — mỗi đôi ba combo, sáu trên 464, chính là 1,3% trên màn hình. Button giữ cả ba đôi: chín combo, 1,9%. Phép tính khớp chính xác với solver.

## Equity gần ngang nhau thì lợi thế range nghĩa là gì?

Lợi thế range (range advantage) nghĩa là toàn bộ range của một người chơi hợp với board hơn range của người kia. Trên A♥ 7♦ 2♣, nó gần như không lộ ra ở equity thô — 45,1% so với 54,9%, chênh 9,8 điểm, không ai gọi đó là thảm họa. Nó lộ ra ở phần mỗi bên thu về được từ equity đó, và ở đây hai ghế cách nhau rất xa.

| Chỉ số | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 45,1% | 54,9% |
| EV (bb) | 2,09 | 3,41 |
| **Equity realization (EQR)** | **84,0%** | **113,1%** |

Equity realization là phần equity bạn thực sự thu về. Equity của big blind đáng ==5,5 × 45,1% = 2,48bb==, nhưng EV (giá trị kỳ vọng) của nó là 2,09bb — nó mất khoảng một phần sáu những gì nó "sở hữu". 113,1% của button nghĩa là nó thu về **nhiều hơn phần của mình**, vì nó hành động sau cùng và range đủ mạnh để gây áp lực. (Các giá trị trên màn hình đã được làm tròn, nên tính lại EQR bằng tay sẽ lệch trong vòng 0,3 điểm so với con số hiển thị.)

Vị trí và lợi thế range cộng dồn ở đây: button có miếng lớn hơn **và** tỷ lệ chuyển hóa tốt hơn. Nguyên lý chung nằm trong [bài hướng dẫn equity](/vi/blog/holdem-equity), còn vì sao bản thân chỗ ngồi lại đáng giá đến vậy thì xem [chơi theo vị trí](/vi/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Khi nào button nên c-bet trên flop A-high khô?

Gần như luôn luôn, với size nhỏ — **trước những đối thủ chịu fold.** Big blind có 41,4% chưa thành bài và 71,3% không có draw, nên fold đến dễ dàng và những tay ở lại hiếm khi cải thiện. Đó là trường hợp kinh điển cho size nhỏ, vì vậy cú bet 33% (1,8bb) là lựa chọn nên dùng ở đây.

Trước một bàn call mọi thứ, "bet mọi tay với size nhỏ" không còn miễn phí: không ai fold, và bạn đang xây pot với những tay không muốn pot lớn. Khi đó điều chỉnh là ít bet thăm dò hơn và nhiều bet giá trị hơn.

Quy tắc kinh nghiệm này khái quát được với một điều kiện: **bên có lợi thế range — và không có lợi thế nut rõ ràng — bet nhỏ và bet thường xuyên.** Trên những board mà một người còn nắm cả các tay nut, sizing sẽ tăng lên thay vào đó. Điều đó thay đổi thế nào qua các loại board có trong [chiến lược continuation bet](/vi/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[Spot mẫu chỉ tính sẵn hành động đầu tiên ở flop, nên tần suất c-bet chính xác của button không nằm trong các con số trên trang này. Muốn có nó, hãy mở "Tự giải spot này" và chạy cả cây.]:::

## Ra bàn thật thì chơi khác gì?

- **Đã call một cú raise khi heads-up thì bỏ ý định lead trên flop A-high khô.** Kể cả top pair. Lead là xây một pot mà sau đó bạn phải chơi khi không có vị trí với một đôi — chính là khoảng cách 84% so với 113% ở trên. (Pot limp và blind đối đầu blind là cấu trúc khác, không thuộc spot này.)
- **Check không phải là check-fold.** Đây là chỗ con số hay bị đọc sai. Trước cú c-bet nhỏ của button, big blind đi tiếp rất rộng — mọi tay Át, phần lớn các tay có lá 7, các underpair, K-high có backdoor. **A9 là check-call**, thường call tiếp cả turn. Những ứng viên check-raise tự nhiên là 77, 22, A7 và A2, cộng vài tay bluff có backdoor — dù lần tính này không bao gồm phản ứng của big blind trước cú c-bet.
- **Ở button, bet nhỏ và rộng trước những đối thủ chịu fold.** Trước người chơi không bao giờ fold, điều chỉnh theo hai hướng: ít bluff hơn, vì họ sẽ không fold dù bạn bet bao nhiêu — nhất là ở turn và river, nơi việc tiếp tục bluff lần thứ hai và thứ ba chỉ làm bạn mất thêm chip — và bet giá trị lớn hơn với **top pair trở lên**. A9 với kicker yếu không phải tay để tăng size; đó là tay bạn đơn giản không bắn ba lần.
- **Trước một đối thủ cân bằng, check ở đây không phải là yếu** — range check chứa set (77, 22) và hai đôi (A7, A2), nên ép quá mạnh sẽ đụng check-raise. Ở stake thấp thường ngược lại: nhiều người chơi đơn giản là lead các tay mạnh, nên khi họ check thì đúng là yếu. Cứ tiếp tục bet giá trị; coi check-raise là chi phí thỉnh thoảng phải trả, không phải lý do để chậm lại.

:::readnext[Đọc tiếp]
/vi/blog/holdem-continuation-bet | Vì sao c-bet mọi flop ngốn chip | /images/holdem-continuation-bet-hero.webp
/vi/blog/holdem-position-play | Vị trí thắng pot cho bạn như thế nào | /images/holdem-position-play-hero.webp
:::

## Tự kiểm tra

Mở [GTO poker solver miễn phí](/vi/solver), vào **Spot mẫu → Board A-high khô → [⚡ Xem kết quả]**, và đúng màn hình này hiện ra ngay không phải chờ. Chuyển bộ chọn «Người chơi:» giữa OOP và IP để so sánh hai range, và sắp xếp bảng chi tiết theo bất kỳ cột nào để tìm những tay bet. Spot mẫu chỉ tính sẵn **hành động đầu tiên ở flop** — muốn bấm qua turn và river, hoặc đổi một range rồi xem tần suất thay đổi, hãy dùng **Tự giải spot này** và chạy cây.

Muốn luyện chính spot này thay vì chỉ đọc, hãy mở **Trainer GTO** ở thanh bên: nó chia cho bạn một tay bài từ range thật, bạn chọn hành động, và nó cho biết lựa chọn đó tốn bao nhiêu big blind. Miễn phí, không cần cài đặt và không cần tài khoản.

## Câu hỏi thường gặp

**Q. A7 trên board A-7-2 có phải top pair không?**

A. Không. Board ghép đôi với lá 7 của bạn, nên A7 thành ==A-A-7-7-2== — hai đôi. Top pair thật sự là một lá Át đi kèm kicker không khớp board, như A9 hay A8. Hai đôi (A7 và A2) là 18 combo, 3,9% range của big blind, và những tay này cũng check.

**Q. Check 98,2% nghĩa là tôi không bao giờ được bet sao?**

A. Mặc định thì đúng là vậy trên texture này. Trước đối thủ gần như không bao giờ c-bet, bạn có thể trộn thêm vài cú lead — nhưng **chỉ với tay giá trị**. Top pair và các tay có lá 7 xây một pot mà người chơi đó sẽ không bao giờ xây giúp bạn, còn bài chưa có gì của bạn vẫn nên check, vì một đối thủ thụ động cho bạn lá miễn phí và showdown miễn phí, đáng giá hơn cú bluff.

**Q. Board ướt và board khô khác nhau thế nào?**

A. Board khô không có flush draw và có ít straight draw, nên flop khó làm thay đổi thứ tự tay bài ở các vòng sau. Board ướt — các lá liền nhau, hai chất, như 9-8-7 với hai lá cơ — trao draw cho cả hai người chơi. Range vẫn rộng và equity liên tục dịch chuyển, nên bet lớn hơn và check-raise xuất hiện nhiều hơn.

**Q. Equity realization có thể vượt 100% không?**

A. Có. Nó là tỷ lệ giữa phần bạn thực sự thắng và phần pot tương ứng với equity của bạn, nên vị trí và sức mạnh range đẩy nó vượt quá 100%. Button ở đây thu về 113,1%, nhiều hơn mức mà equity thô 54,9% gợi ý.

**Q. Những con số này có đúng ở stake tôi đang chơi không?**

A. Hãy dùng chúng làm mốc khi điều kiện khớp: heads-up, 100bb, range open và call tiêu chuẩn, không tính rake. Đổi độ sâu stack, range hay sizing thì tần suất sẽ dịch chuyển. Trước những đối thủ lệch mạnh — không bao giờ fold, không bao giờ c-bet — bạn cũng hãy lệch theo, vì những con số này giả định người kia cũng chơi tốt.
`.trim(),
};

export default POST;
