import type { Post } from "../posts";

/**
 * Loạt ví dụ solver ③ bản tiếng Việt — Q♠J♦10♠ broadway liền nhau, hai chất.
 * Nguồn số liệu: EN lib/posts-en/broadway-board-strategy.ts (updated 2026-10-02 · kết quả Spot mẫu 2026-08-19) — giá trị giữ nguyên, chỉ đổi dấu phân cách.
 * Từ khóa: nut advantage poker · range advantage poker (H2 so sánh) · board texture poker (văn xuôi).
 * Giới hạn: chỉ có quyết định đầu tiên của BB ở flop; sizing và tần suất c-bet của BTN không có trong lần tính này.
 * Ảnh: dùng đường dẫn -en cho tới khi có bản chụp -vi.
 */
export const POST: Post = {
  slug: "broadway-board-strategy",
  title: "Hai phần ba range có draw — mà vẫn check",
  seoTitle: "68% có draw mà vẫn check 99,9% — Lợi thế nut trên Q-J-10",
  desc: "Trên Q-J-10 hai chất, 68% range của big blind có draw mà vẫn check 99,9%. Thứ quyết định flop này là lợi thế nut, không phải lợi thế range — và vì sao.",
  tldr: "Trên Q♠J♦10♠ sau khi button open và big blind call, big blind check 99,9% — dù 68,4% range của mình có draw. Nguyên nhân là lợi thế nut: sảnh 10,5% so với 7,1%, set 2,0% so với 0,7%, overpair 2,6% so với 0%. Equity realization chia 77,9% so với 119,4%, khoảng cách rộng nhất trong ba flop từ khô đến ướt tính tới giờ.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 phút",
  emoji: "🎴",
  image: "/images/gto-srp-broadway-oop-vi.webp",
  imageAlt: "Kết quả solver HoldemMaster cho flop broadway liền nhau hai chất: lưới bài của big blind phủ xanh check, bảng draw nằm bên phải",
  tags: ["nut advantage poker", "lợi thế nut", "range advantage vs nut advantage", "dynamic board poker", "board hai chất", "flop broadway", "equity realization", "ví dụ solver"],
  content: `
Flop ra **Q♠ J♦ 10♠**. Bạn cầm KQ ở big blind (BB — mù lớn) — top pair kèm sảnh hở hai đầu (OESD). Check tay này thì chắc chắn là sai, phải không?

Hai spot (tình huống ra quyết định) trước — [A-high](/vi/blog/a-high-board-cbet) và [K-high](/vi/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-vi.webp") — là những board yên ắng, gần như chẳng có gì đang draw. Spot này thì ngược lại: **68,4% range của big blind ở đây có draw.** Vậy mà solver vẫn check ==99,9%==. Lead (donk bet — bet trước vào người đã raise preflop) trở nên *hiếm hơn*, chứ không phổ biến hơn.

"Nhiều draw" và "được quyền bet trước" là hai mệnh đề khác nhau. Mọi con số dưới đây lấy từ [GTO poker solver miễn phí](/vi/solver) của HoldemMaster, đọc từ kết quả Spot mẫu ngày 2026-08-19.


:::stripe
Spot | BTN open 2,5bb → BB call (heads-up)
Flop | Q♠ J♦ 10♠ (hai chất — hai lá bích)
Pot · stack | Pot 5,5bb · stack hiệu dụng 97,5bb
Kết quả | BB check 99,9% — draw khắp nơi, vẫn không lead
:::

> **Trả lời nhanh**
> Big blind check **99,9%** trên Q♠J♦10♠, dù 68,4% range của mình có draw. Lý do là **lợi thế nut** (nut advantage): sảnh 10,5% so với 7,1%, set 2,0% so với 0,7%, overpair 2,6% so với 0%. Các nhóm bài nut nằm ở phía button — chỉ riêng hai đôi là ngang nhau, 6,0% so với 5,9% — nên bet trước sẽ khiến những tay bạn đang thắng fold, còn những tay bạn không thắng nổi thì call.

## Những con số này đến từ điều kiện nào?

Cấu trúc giống phần còn lại của loạt bài này: button (BTN) open 2,5bb, big blind call (theo), những người còn lại fold (bỏ bài). Hai người chơi, pot 5,5bb, còn 97,5bb phía sau, range online 100bb tiêu chuẩn, và hai cỡ bet để chọn: khoảng một phần ba và ba phần tư pot. Thứ duy nhất thay đổi là flop.

| Thiết lập | Giá trị |
|---|---|
| Preflop | BTN open 2,5bb · BB call · những người còn lại fold |
| Range | Xấp xỉ range online tiêu chuẩn 100bb |
| Flop | Q♠ J♦ 10♠, hai chất (hai lá bích) |
| Pot · stack | Pot 5,5bb · stack hiệu dụng 97,5bb |
| Cỡ bet | Khoảng 33% và 75% pot |
| Rake | Không tính rake |
| Kiểm tra ngày | 2026-08-19, kết quả Spot mẫu |

## Board ướt thế này, vì sao vẫn check 99,9%?

**Vì thứ quyết định hành động là *chất lượng* của các tay đã thành bài, chứ không phải *số lượng* draw.**

| Hành động đầu tiên của BB | Tần suất | Combo |
|---|---|---|
| Check | **99,9%** | 452,5 |
| Bet 1,8bb (33% pot) | 0,1% | 0,3 |
| Bet 4,1bb (75% pot) | 0,0% | 0,2 |

Trên flop K-high khô, con số là 99,8%. **Chuyển sang một board mà hai phần ba range đang draw, cú check lại càng trọn vẹn hơn, chứ không giảm đi.** Chính sự đảo ngược đó là lý do spot này có mặt trong bộ Spot mẫu.

## Lợi thế nut trên flop này là gì?

**Là ai đang nắm phần đỉnh của range.** Trên Q-J-10, thứ hạng các nhóm bài là sảnh (straight) → set (cầm đôi trên tay + 1 lá trên board) → **hai đôi (two pair)** → overpair (đôi tẩy cao hơn mọi lá trên board), và button dẫn ở mọi nhóm trừ hai đôi.

| Nhóm đỉnh | BB (OOP — out of position, không có vị trí) | BTN (IP — in position, có vị trí) | Điều gì tạo ra chênh lệch |
|---|---|---|---|
| Sảnh | 7,1% | **10,5%** | Big blind **không có AK** |
| Sám cô (set) | 0,7% | **2,0%** | Big blind **không có QQ, không có JJ** |
| Hai đôi | **6,0%** | 5,9% | Gần như ngang nhau — hàng duy nhất big blind dẫn |
| Overpair | 0,0% | **2,6%** | Big blind **không có AA, không có KK** |

Hãy xếp đúng thứ tự: **hai đôi là nhóm mạnh thứ ba ở đây, trên cả overpair.** Trên Q-J-10, JT tạo ra ==J-J-10-10-Q== — hai đôi — còn AA chỉ là một đôi. Vì vậy nói "phần đỉnh thuộc trọn về button" là nói quá. Dù vậy kết luận vẫn đứng vững: hai nhóm thật sự nut là sảnh và set đều thuộc về button, và hàng ngang nhau kia thua cả hai nhóm đó trên board này.

Mọi chênh lệch đều được tạo ra từ preflop. Big blind 3-bet AA, KK, QQ, JJ và AK, nên không tay nào trong số đó đi tới flop; còn button open tất cả và mang chúng theo.

Các combo (tổ hợp bài) khớp chính xác. Chỉ có ba tay làm sảnh ở đây: ==AK (A-K-Q-J-10)==, ==K9 (K-Q-J-10-9)== và ==98 (Q-J-10-9-8)==. Không lá nào chúng cần — A, K, 9, 8 — nằm trên board, nên mỗi tay có 4 × 4 = 16 combo. Big blind có K9 và 98, tổng **32 combo**; button có thêm AK, thành **48**. Con số 7,1% và 10,5% của solver tương ứng 32,2 và 48,1 combo — đúng những con số đó.

**Toàn bộ chênh lệch nằm ở một tay: AK.** Chỉ một quyết định 3-bet preflop đã dịch chuyển chừng ấy phần nut của flop.

## Lợi thế range và lợi thế nut khác nhau thế nào?

**Lợi thế range (range advantage) là ai mạnh hơn tính trung bình; lợi thế nut là ai nắm nhiều tay mạnh nhất hơn.** Thường thì hai thứ này đi cùng nhau, và flop này chính là trường hợp chúng tách ra.

| | Lợi thế range | Lợi thế nut |
|---|---|---|
| Câu hỏi nó trả lời | Range của ai có nhiều equity hơn tính tổng thể? | Ai nắm các tay đỉnh? |
| Trên Q-J-10 | Gần như ngang — 46,7% so với 53,3% | Lệch hẳn — sảnh, set và overpair đều nghiêng về button |
| Nó quyết định điều gì | Có bet hay không | **Bet lớn cỡ nào, và ai có thể raise** |

Equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) trung bình cho thấy flop này gần như năm ăn năm thua. Phần đỉnh của range lại cho thấy một người nắm phần lớn những tay chịu được cú bet lớn, còn người kia có rất ít tay để đánh trả. Khi hai thước đo bất đồng, **lợi thế nut quyết định sizing** — và với người không có nó, lợi thế nut còn quyết định thêm một điều: bet trước không phải là lựa chọn.

## Mỗi range có bao nhiêu phần trăm đang draw?

**Chỉ đếm draw thật: 68,4% với big blind, 68,7% với button.** Cộng thêm backdoor flush draw thì lên tới 75,2% và 74,4% — ba phần tư của cả hai range.

![Infographic thành phần range so sánh các nhóm bài của big blind và button trên board broadway liền nhau hai chất](/images/gto-srp-broadway-ranges-vi.webp "Q♠J♦10♠ · phân bổ theo nhóm — bốn hàng trên cùng là nơi flop được quyết định")

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Draw kép (combo draw: sảnh + thùng) | 5,3% | 4,1% |
| Flush draw (chờ thùng) | 2,4% | 2,0% |
| Sảnh hở hai đầu (OESD) | 28,7% | 27,7% |
| Gutshot (sảnh hở giữa) | 32,0% | 34,9% |
| Backdoor flush | 6,8% | 5,7% |
| Không draw | **24,7%** | **25,5%** |

**Draw chia gần như đều nhau.** Trên flop K-high, 72,2% range của big blind hoàn toàn không có draw; ở đây chỉ còn một phần tư. (Đây là một trục riêng, tách khỏi bảng nhóm bài — mỗi trục tự cộng thành 100%, và trục draw chỉ đọc **những gì vẫn còn đang draw** — một sảnh đã hoàn thành mà vẫn cầm hai lá bích, như K♠9♠, rơi vào một hàng thùng, còn sảnh không kèm gì thì rơi vào hàng không draw.)

Vậy cuộc chiến trên board này không phải chuyện ai có nhiều draw hơn. Draw ngang nhau thì triệt tiêu nhau, và thứ không triệt tiêu được là lợi thế nut. Nếu phần đếm outs là chỗ bạn muốn củng cố, hãy bắt đầu với [xác suất ra bài khi đang draw](/vi/blog/holdem-drawing-odds).

## Vì sao top pair ở đây lại nguy hiểm?

**Vì 21,0% range của button đã thắng nó rồi.** Đó là sảnh 10,5% cộng set 2,0% cộng hai đôi 5,9% cộng overpair 2,6%.

Trên flop K-high khô, cùng phép tính đó chỉ ra **3,6%** — set 1,9%, hai đôi 0,4%, overpair 1,3%.

| Phần range của button đã thắng top pair | |
|---|---|
| Flop K-high khô (K-8-3) | 3,6% |
| **Flop broadway (Q-J-10)** | **21,0%** |

**Cùng là "top pair", rủi ro gấp khoảng sáu lần.** Ngoài ra, 68,7% range đối thủ có draw nào đó — một trục khác, chồng lên các tay đã thành bài đang dẫn bạn, chứ không phải thêm 68,7% nằm bên trên — nên ngay cả những tay bạn đang thắng cũng có thể vượt bạn ở turn và river. Đẩy một đôi qua ba vòng cược trên Q-J-10 nghĩa là khi hành động lớn dội lại, gần như không bao giờ đó là tay bạn thắng. Đây là pot để kiểm soát, không phải pot để bơm to.

## Vì sao EQR là 78 so với 119 khi equity là 47 so với 53?

**Vì board càng buộc phải ra nhiều quyết định, ghế hành động sau cùng càng đáng giá.**

| Chỉ số | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46,7% | 53,3% |
| EV (bb) | 2,00 | 3,50 |
| **Equity realization (EQR)** | **77,9%** | **119,4%** |

Cách tính được trình bày từng bước trong [spot K-high](/vi/blog/k-high-board-cbet). Ở đây: phần equity của big blind là ==5,5 × 46,7% = 2,57bb== so với thực nhận 2,00bb, tức là 77,9% equity realization (EQR — phần equity bạn thực sự thu về); button biến phần 2,93bb thành 3,50bb EV (giá trị kỳ vọng).

Xếp ba flop cạnh nhau, xu hướng hiện ra rất rõ.

| Flop | EQR của BB | EQR của BTN | Khoảng cách |
|---|---|---|---|
| A-7-2 (khô) | 84,0% | 113,1% | 29,1 điểm |
| K-8-3 (khô) | 80,7% | 116,7% | 36,0 điểm |
| **Q-J-10 (liền nhau, hai chất)** | **77,9%** | **119,4%** | **41,5 điểm** |

Ba spot khiến mọi thứ trông như *board càng động, khoảng cách càng rộng*. **Quy tắc đó vỡ ngay ở spot tiếp theo** — [9♥8♥7♣](/vi/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-vi.webp"), cũng như Q-J-10, là ba lá liền nhau trên board hai chất, vậy mà khoảng cách chỉ **13,2 điểm, hẹp nhất trong bảy pot raise đơn (single raised pot)**, với big blind đạt 93,2%, cao nhất trong bảy spot đó (trên toàn loạt bài, con số 117,8% của pot 3-bet Q-10-7 còn cao hơn). Thứ mở rộng khoảng cách không phải độ động của board mà là **phần đỉnh của board thuộc về range của ai**: Q-J-10 trao thẳng AK, QQ, JJ, AA và KK cho button, còn trên 9-8-7 cũng chính những lá đó lại trượt board. ⚠ Không phải ở đó chúng vô nghĩa — 9-8-7 chia overpair **1,3% so với 6,4%**, khoảng cách còn rộng hơn mức 0% so với 2,6% của Q-J-10. Nhưng lợi thế overpair đó mong manh trên một board liền nhau, nên nó không khóa được phần đỉnh. Vì sao hành động sau cùng lại đáng giá đến thế: [chơi theo vị trí](/vi/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Button nên bet thế nào trên một board dynamic như thế này?

**Không chỉ bet nhỏ — ở đây size lớn được trộn vào.** Khi có lợi thế nut, cú bet lớn rất khó bị raise (tố): sảnh, set và overpair phần lớn nằm về một phía (big blind chỉ có 7,1% sảnh và 0,7% set), nên người kia có rất ít tay để đánh trả.

Đó là điều ngược lại với công thức của board khô. Ở đó, bet nhỏ và thường xuyên hiệu quả vì mục tiêu là khiến bài rác fold. Ở đây, **68,4%** range đối thủ đang draw, nên **mua fold rất đắt** — riêng size nhỏ không làm nổi việc này, và size lớn phải đi kèm. ⚠ Đừng đẩy điều đó tới mức "vậy nên tần suất giảm": Spot mẫu này chỉ giải hành động đầu tiên ở flop, nên tỷ lệ chia sizing thực tế và tần suất c-bet (cược tiếp tục) của button không có trong đó. Phiên bản theo từng loại board nằm ở [chiến lược continuation bet](/vi/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[⚠ Mọi thứ ở trên là kết quả solver; phần này là cách đọc kết quả đó. Spot mẫu chỉ giải sẵn hành động đầu tiên của big blind, nên tỷ lệ chia sizing của button không có trên màn hình này. Nếu bạn muốn con số thật, hãy mở "Tự giải spot này" và chạy cây.]:::

## Ra bàn thật thì chơi khác gì?

- **Cầm draw không phải lý do để lead từ big blind.** Cả hai người ở đây có lượng draw gần như bằng nhau, nên draw không phải là lợi thế — lead bằng draw sẽ đâm vào những tay đã thành bài mà chỉ đối thủ mới có.
- **Đừng chơi top pair lấy value qua ba vòng cược trên Q-J-10.** 21,0% range của họ đã dẫn trước, và phần lớn phần còn lại đang draw vào bạn. Call qua các vòng cược tới showdown tốt hơn là tự bet.
- **Hãy nhớ bên trong cú check đó có gì.** Con số 99,9% của big blind chứa 32 combo sảnh (K9, 98) và 27 combo hai đôi. Những tay này không check vì yếu — **trước các cú c-bet của button, trả quyền hành động lại kiếm được nhiều hơn là lead vào** (button c-bet ở đây thường xuyên đến mức nào thì không có trong Spot mẫu này), và nó giữ cho range check không sụp thành toàn bài rác. Vì vậy đừng đọc cú check là không có gì rồi loại trừ khả năng check-raise. ⚠ *Tần suất* của cú check-raise đó là bao nhiêu thì lần tính này không trả lời được: Spot mẫu dừng ở **hành động đầu tiên ở flop**, và mọi thứ sau đó cần đến "Tự giải spot này".
- **Gặp đối thủ không bao giờ fold draw, hãy tăng size thay vì bet thường xuyên hơn.** Mua fold là thứ thất bại ở đây; bắt draw trả giá mới là thứ hiệu quả.

:::readnext[Đọc tiếp]
/vi/blog/k-high-board-cbet | Flop K-high nơi người call check 99,8% | /images/gto-srp-dry-king-oop-vi.webp
/vi/blog/a-high-board-cbet | Có top pair vẫn check: A-7-2 | /images/gto-srp-dry-ace-oop-vi.webp
:::

## Tự kiểm tra

Mở [GTO poker solver miễn phí](/vi/solver), vào **Spot mẫu → Board broadway liền nhau, hai chất → [⚡ Xem kết quả]**, và màn hình ở trên hiện ra ngay, không phải chờ.

Ở spot này, hãy đọc **bảng «Tay bài / Draw» bên phải** — OESD và gutshot cộng lại vượt 60%, lần đầu tiên trong loạt bài này. Sau đó chuyển ô chọn người chơi sang **IP (BTN)** và nhìn hàng Sảnh 10,5%: chỉ một hàng đó là nơi cả bài viết này bắt nguồn.

Muốn luyện thay vì chỉ đọc, hãy mở **Trainer GTO** ở thanh bên: nó chia bài theo đúng trọng số range thật và cho thấy hành động của bạn tốn bao nhiêu big blind. Miễn phí, không cần cài đặt, không cần tài khoản.

## Câu hỏi thường gặp

**Q. Những tay bài nào làm sảnh trên Q-J-10?**

A. Ba tay: AK cho A-K-Q-J-10, K9 cho K-Q-J-10-9, và 98 cho Q-J-10-9-8. Không lá nào chúng cần — A, K, 9, 8 — nằm trên board, nên mỗi tay có 4 × 4 = 16 combo, tổng cộng 48. Big blind 3-bet AK từ preflop, nên chỉ còn lại 32.

**Q. Board ướt chẳng phải là chỗ để lead semi-bluff sao?**

A. Không — chỉ đếm số draw thì chưa quyết định được. Phân bổ tay đã thành bài, lợi thế nut và blocker phải được cân cùng lúc. Ở đây OESD là 28,7% so với 27,7% — gần như y hệt — trong khi sảnh đã hoàn thành là 7,1% so với 10,5%, nghiêng về button. Một cú lead cần phần đỉnh của range đứng về phía bạn, không phải mức trung bình, và flop này đúng là trường hợp ngược lại. Có một board trong bộ Spot mẫu thật sự thỏa điều kiện đó — [9-8-7 tầm trung liền nhau](/vi/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-vi.webp"), nơi big blind donk bet 23,7% số lần thay vì gần như không bao giờ.

**Q. Range advantage và nut advantage khác nhau ở điểm nào?**

A. Range advantage nói về mức trung bình — range của ai có nhiều equity hơn trên toàn bộ các tay. Nut advantage nói về phần cực trị — ai nắm phần đỉnh của bảng xếp hạng, mà trên Q-J-10 là sảnh, set, hai đôi, overpair. Equity gần như ngang nhau, 46,7% so với 53,3%, vậy mà cả sảnh lẫn set đều nghiêng về button (chỉ riêng hai đôi là ngang, 6,0% so với 5,9%). Khi hai thứ tách ra như vậy, nut advantage là thứ định ra cỡ bet.

**Q. Những con số này có đúng ở stake tôi đang chơi không?**

A. Dùng làm mốc khi điều kiện khớp: heads-up, 100bb, range open và call tiêu chuẩn, không tính rake. Riêng board này càng sâu stack càng lệch — ở 200bb, khoảng cách sảnh 3,4 điểm có ý nghĩa lớn hơn nhiều so với ở đây, vì còn nhiều tiền hơn để thua vào chính tay bài bạn không thể có.
`.trim(),
};

export default POST;
