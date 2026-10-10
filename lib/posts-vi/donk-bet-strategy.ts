import type { Post } from "../posts";

/**
 * Ví dụ solver ④ (vi) — 9♥8♥7♣ tầm trung liền nhau, hai chất · BTN open → BB call.
 * Nguồn: EN lib/posts-en/donk-bet-strategy.ts (updated 2026-09-26) · số liệu = kết quả Spot mẫu 2026-08-19 (EN축어).
 * Từ khóa chủ: donk bet · donk bet là gì · donk bet poker (vi-gto brief ④ · L-G §1).
 * Thêm so với EN: H2 định nghĩa «Donk bet là gì?» (nâng từ FAQ EN «What is a donk bet in poker?» · FAQ 7 → 6).
 * Lưu ý: BB lead 23,7% và OESD của BTN 23,7% trùng số nhưng là hai giá trị khác nhau — không trộn.
 * Không viết «lợi thế range đã chuyển sang BB» — equity vẫn 48,5% so với 51,5%.
 * Ảnh: dùng đường dẫn -en (chưa có bản -vi).
 */
export const POST: Post = {
  slug: "donk-bet-strategy",
  title: "Flop mà donk bet là nước đúng — 9-8-7",
  seoTitle: "Donk bet là gì và khi nào lead mới đúng — Board 9-8-7",
  desc: "Donk bet thường bị xem là lỗi của người mới. Nhưng trên 9-8-7 solver lead 23,7% — điều kiện board nào khiến lead thành nước đúng, và sizing bao nhiêu.",
  tldr: "Trên 9♥8♥7♣ sau khi button open và big blind call, big blind check 76,2% và lead 23,7% — spot đầu tiên trong series mà lead là một chiến lược thật chứ không phải sai số làm tròn. Lợi thế range chưa đổi chiều: equity vẫn là 48,5% so với 51,5%. Thứ thay đổi là khoảng cách, và vị trí những tay bài mạnh của mỗi bên.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "9 phút",
  emoji: "🎯",
  image: "/images/gto-srp-middle-connected-oop-vi.webp",
  imageAlt: "Kết quả GTO solver của HoldemMaster trên flop tầm trung liền nhau hai chất: lưới bài của big blind trộn ô check màu xanh lá với ô bet màu cam và hồng",
  tags: ["donk bet", "donk bet là gì", "donk bet poker", "khi nào không nên c-bet", "lead bet", "board liền nhau tầm trung", "ví dụ solver"],
  content: `
Một trong những quy tắc đầu tiên bạn học trong poker: **check cho người đã raise (tố).** Người tấn công ở preflop được quyền bet trước ở flop.

Ba spot (tình huống ra quyết định) vừa rồi là quy tắc ấy ở dạng ngoan ngoãn nhất. Trên flop [A-high](/vi/blog/a-high-board-cbet), [K-high](/vi/blog/k-high-board-cbet) và [broadway](/vi/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-vi.webp"), tần suất lead của big blind (BB — mù lớn) lần nào cũng dưới 2% — trên K-8-3 và Q-J-10 chỉ còn 0,2% hoặc thấp hơn, coi như bằng không.

Trên **9♥ 8♥ 7♣** con số đó là **23,7%**. Đây là chỗ quy tắc bị phá vỡ.

Một cú bet của người chỉ call (theo) ở preflop gọi là **donk bet** (bet trước vào người đã raise preflop; còn gọi là cược donk) — tên bắt nguồn từ «donkey», đủ cho thấy người ta từng đánh giá nó thế nào. Cách gọi khác là **lead**. Solver đưa nó vào chiến lược trên những board cụ thể, và đây là board rõ ràng nhất trong bộ Spot mẫu.

Mọi con số dưới đây lấy từ [GTO poker solver miễn phí](/vi/solver) của HoldemMaster, đọc từ kết quả Spot mẫu ngày 2026-08-19.


:::stripe
Spot | BTN open 2,5bb → BB call (heads-up)
Flop | 9♥ 8♥ 7♣ (hai chất — hai lá cơ)
Pot · Stack | Pot 5,5bb · stack hiệu dụng 97,5bb
Kết quả | BB lead 23,7% — cú lead thật đầu tiên trong loạt bài này
:::

> **Trả lời nhanh**
> Trên 9♥8♥7♣, big blind check **76,2%** và lead **23,7%** chia cho hai size (cả hai đều đã làm tròn). Nhưng **lợi thế range không đổi chủ** — equity vẫn là 48,5% so với 51,5%, nghiêng về button. Thứ thay đổi là độ lớn của khoảng cách, và chỗ những tay bài mạnh nằm: sức mạnh của big blind nằm ở các sảnh đã thành, còn sức mạnh của button nằm ở những overpair mà board này đe dọa.

## Donk bet là gì?

> **Trả lời nhanh**
> Donk bet trong poker là cú bet ở flop của người **không raise preflop** — bet thẳng vào người đã tấn công thay vì check cho họ. Cái tên đến từ «donkey», cách mà lối chơi này từng bị nhìn nhận rất lâu. Solver cho thấy nó đúng trên những kiểu board cụ thể, và trên flop này nó chiếm 23,7% chiến lược của big blind.

## Những con số này đến từ điều kiện nào?

Button (BTN) open lên 2,5bb, big blind call, những người còn lại fold (bỏ bài) — hai người chơi, pot 5,5bb, phía sau còn 97,5bb. Range là bản xấp xỉ range online tiêu chuẩn 100bb, flop là 9♥ 8♥ 7♣ với hai lá cơ, và solver có hai size bet để chọn, khoảng một phần ba và ba phần tư pot. Không tính rake (phí sòng), và các con số được đọc ngày 2026-08-19.

| Thiết lập | Giá trị |
|---|---|
| Preflop | BTN open 2,5bb · BB call · những người còn lại fold |
| Range | Xấp xỉ range online tiêu chuẩn 100bb |
| Flop | 9♥ 8♥ 7♣, hai chất (hai lá cơ) |
| Pot · Stack | Pot 5,5bb · stack hiệu dụng 97,5bb |
| Cỡ bet | Khoảng 33% và 75% pot |
| Rake | Không tính rake |
| Kiểm tra ngày | 2026-08-19, kết quả Spot mẫu |

## Big blind donk bet bao nhiêu phần trăm trên 9-8-7?

**23,7%**, và hơn hai phần ba trong số đó đi bằng size nhỏ.

| Hành động đầu tiên của BB | Tần suất | Combo |
|---|---|---|
| Check | **76,2%** | 352,0 |
| Bet 1,8bb (33% pot) | **16,8%** | 77,8 |
| Bet 4,1bb (75% pot) | 6,9% | 32,2 |

Đặt bốn flop cạnh nhau là thấy ngay bước nhảy.

| Flop | BB lead |
|---|---|
| A-7-2 (khô) | 1,9% |
| K-8-3 (khô) | 0,2% |
| Q-J-10 (liền nhau, hai chất) | 0,1% |
| **9-8-7 (tầm trung liền nhau, hai chất)** | **23,7%** |

**Từ dưới 2% lên 23,7% — nhảy hơn mười lần.** Đó không phải «thỉnh thoảng trộn vào một chút»; đó là một chiến lược khác.

## So với ba flop đầu, điều gì đã thay đổi?

**Lần đầu tiên big blind dẫn trước ở một nhóm bài trên cùng.** Sảnh (straight) đã thành là 5,2% so với 4,2%.

Đếm combo (tổ hợp bài) là thấy lý do chính xác. Ở đây có ba tay tạo sảnh: ==JT (J-10-9-8-7)==, ==T6 (10-9-8-7-6)== và ==65 (9-8-7-6-5)==.

| Tay bài tạo sảnh | BB (range call) | BTN (range open) |
|---|---|---|
| JT | ✅ đồng chất và khác chất (16 combo) | ✅ đồng chất và khác chất (16 combo) |
| T6 | ✅ **T6s (4 combo)** | ❌ nằm ngoài range open |
| 65 | ✅ 65s (4 combo) | ✅ 65s (4 combo) |
| **Tổng** | **24 combo = 5,2%** | **20 combo = 4,2%** |

**Toàn bộ khác biệt là T6s — bốn combo.** Range button của solver này bắt đầu từ T7s, nên T6 đồng chất không bao giờ có mặt, trong khi big blind phòng thủ nó rất rẻ vì 1bb trong 2,5bb đã đặt sẵn. Chỉ một ô đó quyết định ai cầm nhiều **sảnh đã thành** hơn — chứ không quyết định ai cầm nut, đó là câu hỏi khác: tay mạnh nhất ở đây là J-T, và cả hai người chơi đều có đủ 16 combo của nó.

Chiều ngược lại cũng có. Overpair (đôi tẩy cao hơn mọi lá trên board) thuộc về button.

| Overpair (đôi tẩy cao hơn lá 9) | BB | BTN |
|---|---|---|
| TT | ✅ 6 combo | ✅ 6 combo |
| JJ · QQ · KK · AA | ❌ đều đã 3-bet preflop | ✅ 24 combo |
| **Tổng** | **6 combo = 1,3%** | **30 combo = 6,4%** |

## Vậy flop này có nghiêng về big blind không?

**Không. Equity vẫn là 48,5% so với 51,5%.** Điều này đáng nói thẳng ra, vì đây là kết luận sai dễ rút ra nhất: lead xuất hiện không có nghĩa là lợi thế range đã dịch chuyển. Equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) vẫn nghiêng về button.

![Infographic thành phần range so sánh các nhóm bài của big blind và button trên board tầm trung liền nhau hai chất](/images/gto-srp-middle-connected-ranges-vi.webp "9♥8♥7♣ · tỷ lệ theo nhóm — sảnh nghiêng về big blind, overpair và A-high nghiêng về button")

| Nhóm | BB (OOP) | BTN (IP) |
|---|---|---|
| Sảnh | **5,2%** | 4,2% |
| Set (hàng «Xám» của app) | 1,9% | 1,9% |
| Hai đôi | 2,8% | 2,8% |
| Overpair | 1,3% | **6,4%** |
| Top pair (9) | **13,6%** | 12,7% |
| Second pair (8) | **8,4%** | 7,6% |
| Đôi thứ ba trở xuống | **6,5%** | 6,4% |
| Underpair | **6,5%** | 6,4% |
| A-high | 24,2% | **30,5%** |
| K-high | **13,9%** | 11,9% |
| Chưa thành bài | **15,6%** | 9,3% |

(Các cột cộng lại thành 99,9 và 100,1 — đó là do làm tròn.)

Ở đây BB ngồi out of position (OOP — không có vị trí), BTN ngồi in position (IP — có vị trí). **Chỉ hai hàng nghiêng về button**: overpair, 6,4% so với 1,3%, và A-high, 30,5% so với 24,2%. Hai đôi (two pair) bằng nhau tuyệt đối ở 2,8%, set (cầm đôi trên tay + 1 lá trên board) ở 1,9%, và mọi hàng còn lại thuộc về big blind.

Phải đọc kèm các draw.

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Combo draw (sảnh + thùng) | **4,5%** | 3,6% |
| Flush draw | **3,2%** | 2,3% |
| Sảnh hở hai đầu (OESD) | **26,2%** | 23,7% |
| Gutshot | **21,6%** | 20,6% |
| Backdoor flush | 14,1% | **17,6%** |
| Không draw | 30,3% | **32,2%** |

**Chỉ tính draw thật — bỏ backdoor — big blind có 55,5% so với 50,2% của button.** Trên board này, không chỉ bài đã thành nghiêng về phía nó; những tay còn đang lớn lên cũng vậy — flush draw (chờ thùng), sảnh hở hai đầu (OESD), gutshot (sảnh hở giữa).

Sau khi tính tiền thì vẫn thế. Equity realization vẫn nghiêng về button, chỉ là ít hơn mọi chỗ trước đó.

| Chỉ số | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48,5% | 51,5% |
| EV (bb) | 2,48 | 3,02 |
| **Equity realization (EQR)** | **93,2%** | **106,4%** |

Sau 84,0%, 80,7% và 77,9% ở ba flop đầu, equity realization (EQR — phần equity bạn thực sự thu về) của big blind **quay đầu ở đây** — 93,2% là mức gần nhất với việc giữ trọn phần của mình. Đó mới là tín hiệu thật: lead xuất hiện khi người chơi không có vị trí cuối cùng giữ được phần equity xứng đáng của mình.

Có hai thứ thay đổi để điều đó xảy ra.

**Thứ nhất, khoảng cách hẹp lại.** Chênh lệch equity 3,0 điểm là nhỏ nhất trong bốn flop tính đến giờ — A-7-2 là 9,8 điểm, Q-J-10 là 6,6.

**Thứ hai, sức mạnh của button nằm ở chỗ dễ tổn thương.** Hai nhóm duy nhất nó dẫn là overpair (6,4%) và A-high (30,5%) — và một trong hai không phải sức mạnh gì cả. Phần lớn chỗ A-high đó không có đôi ở đây — còn chỗ nào có draw thì big blind cũng có, nên draw triệt tiêu nhau chứ không nghiêng về ai. Overpair thì mong manh vì lý do ở phần sau. Ngược lại, lợi thế của big blind nằm ở những tay **đã thành sẵn**.

Lead trở thành nước đúng không chỉ nhờ sức mạnh trung bình, mà khi **bạn cầm nhiều tay mạnh nhất hơn và đối thủ không thể bet một cách tự tin.** Cả hai điều kiện có vẻ đều thỏa ở đây: big blind có nhiều sảnh hơn (24 combo so với 20, trong khi nut J-T mỗi bên đều 16), và với 30,5% range là A-high, button sẽ khó bắn rộng — đây là cách đọc từ thành phần range, vì node bet của chính button không có trong lần giải này. Khoảng trống không ai nhận đó chính là thứ cú lead lấy đi.

## Vì sao overpair của button ở đây lại dễ bị vượt mặt?

**Vì gần một nửa số lá còn lại làm turn tệ đi cho chúng.**

Giả sử bạn cầm QQ. Ngay lúc này bạn gần như đang có tay tốt nhất. Trong 47 lá chưa thấy:

- **10, J, 6, 5 — 16 lá.** Bất kỳ lá nào trong số đó cũng **hoàn thành sảnh** chỉ với một lá trên tay đối thủ. Một lá J làm board thành J-9-8-7, và **ai đang cầm một lá 10 là đã có J-10-9-8-7.**
- **Những lá cơ còn lại chưa được đếm — 7 lá.** Thùng (flush) thành.

Cộng lại là **23 trên 47 lá, khoảng 49%** (⚠ với QQ không có lá cơ nào — nếu bạn cầm Q♥ thì một trong bảy lá cơ đó nằm trên tay bạn, nên là 22 trên 47, khoảng 47%). Cứ khoảng hai turn thì có một turn làm tay bài khó chơi hơn. Nếu phần đếm outs từ phía bên kia là chỗ bạn muốn chắc hơn, hãy bắt đầu với [xác suất ra bài khi chờ draw](/vi/blog/holdem-drawing-odds).

Vì vậy overpair ở đây là tay để **bắt draw trả giá ngay bây giờ và dừng lại khi bị raise** — không phải tay để xây một pot khổng lồ. Pot đáng tránh là pot bị xây lên sau một turn xấu, không phải pot bạn xây ở flop.

## Vì sao size nhỏ chiếm hai phần ba số lần lead?

**Vì cú lead là một tuyên bố về cả range, không phải về một tay bài.** Trong 23,7%, 16,8 điểm phần trăm đi bằng một phần ba pot và 6,9 điểm bằng ba phần tư pot.

Một cú bet nhỏ nói rằng "cả range của tôi đều thích flop này." Nếu chỉ tay mạnh mới bet, range tách thành "bet = mạnh, check = yếu" và đối thủ đọc được bạn miễn phí. Trộn sảnh, top pair và draw vào cùng một size nhỏ giữ cho chúng không phân biệt được.

Size lớn vẫn tồn tại có lý do. Nếu mọi sảnh đều đi vào cú bet nhỏ, button có thể call tất cả mà không bao giờ phải đối mặt với một pot lớn. **Dùng hai size là thứ khiến cả call lẫn raise đều không dễ chịu.**

## Khi nào không nên c-bet? Ngoại lệ 9-8-7

**Trên flop này, khi bạn là người raise preflop** — dù big blind lead hay check. Đây là board «khi nào không nên c-bet (cược tiếp tục)» rõ nhất trong bộ Spot mẫu, và lý do không nằm ở texture mà ở hình dạng range của chính bạn trên đó. Phán đoán ấy khái quát thế nào qua các kiểu board thì có trong [chiến lược c-bet](/vi/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

Lý do là thành phần range. A-high chiếm 30,5% range của button, K-high 11,9%, chưa thành bài 9,3% — 51,7% không có đôi. ⚠ **Nhưng riêng "không có đôi" không phải là lý do.** Cộng cột của big blind theo cùng cách sẽ ra **53,7%** — big blind có phần range không đôi *nhiều hơn*, hơn 2,0 điểm, và chính nó lại là bên lead 23,7% số lần. Thứ thật sự chặn button là **những gì ở lại trong range check**: 76,2% số tay của big blind vẫn ở đó, trong đó có sảnh và 13,6% top pair, nên bet rộng sẽ đụng phải **check-raise**. ⚠ Một số trong 24 combo sảnh đó lead chứ không check, nên không phải tất cả đều nằm trong range check — và *tần suất* check-raise không phải thứ lần giải này chứa.

Những lá cao **khác chất** đã trượt như AKo và AQo là check-back (check lại sau khi đối thủ đã check) tiêu chuẩn: chúng có giá trị showdown, và khi bị raise thì bạn không có gì để đi tiếp. Bản đồng chất là tay khác hẳn — A♥K♥ và A♥Q♥ là flush draw nut ở đây, và chúng bet.

:::note[Spot mẫu chỉ tính sẵn hành động đầu tiên ở flop — của big blind. Tần suất c-bet của button thực sự giảm bao nhiêu sau một cú check thì không có trên màn hình này. Mở «Tự giải spot này» và chạy cây để xem.]:::

## Ra bàn thật thì chơi khác gì?

- **Lead sống trên board tầm trung liền nhau sau một cú open rộng từ vị trí muộn.** Board monotone ở spot tiếp theo cũng có khoảng 11%, trong khi flop khô A-high và K-high coi như bằng không. ⚠ Tuy vậy, board tầm trung liền nhau duy nhất loạt bài này thực sự giải là 9-8-7, và điều kiện không chỉ là texture mà là **range nào cầm nhiều tay mạnh nhất hơn trên board đó.** Bằng chứng nằm ngay trong loạt bài: [flop 6-5-2](/vi/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-vi.webp") là cùng một pot raise đơn (single raised pot) button đấu big blind, và big blind chỉ lead **3,2%** ở đó, vì tay duy nhất tạo sảnh là 4-3 và không range nào cầm nó. Chỉ thấp và liền nhau thì không sinh ra lead.
- **Bạn vẫn check ba phần tư số lần.** Khi lead: dùng size nhỏ, và với nhiều thứ hơn chỉ những tay mạnh nhất — một range chỉ lead sảnh sẽ bị đọc ngay, nên top pair và draw thuộc về cùng size đó. Nhưng hãy giữ tổng số trong tầm mắt: **toàn bộ lead là 23,7%, 16,8 trong đó ở size nhỏ.** Biến nó thành "lead mọi draw" thì nó thành nửa range và đảo ngược chiến lược. 76,2% còn lại check.
- **Ở button, kiềm chế c-bet trên texture này.** Hơn một nửa range của bạn không có đôi, và overpair muốn một pot được kiểm soát chứ không phải một pot lớn.
- **Gặp đối thủ c-bet quá thường xuyên, check có thể đáng giá hơn lead** — và check-**raise**, chứ không chỉ check-call, với sảnh và top pair. Để họ bet giùm những tay mạnh của bạn đáng giá hơn việc giành quyền chủ động, nhưng chỉ khi sau đó bạn bắt họ trả giá.
- **Đọc theo chiều ngược lại nữa.** Gặp người hay check-back trên board ướt, lead đáng giá hơn con số solver gợi ý: check ở đó chỉ đơn giản là mất trắng vòng cược.

:::readnext[Đọc tiếp]
/vi/blog/broadway-board-strategy | Hai phần ba range có draw — mà vẫn check | /images/gto-srp-broadway-oop-vi.webp
/vi/blog/k-high-board-cbet | Flop K-high nơi người call check 99,8% | /images/gto-srp-dry-king-oop-vi.webp
:::

## Tự kiểm tra

Mở [GTO poker solver miễn phí](/vi/solver), vào **Spot mẫu → Board tầm trung liền nhau, hai chất → [⚡ Xem kết quả]**.

Cách học spot này tốt nhất là **đặt cạnh một board khô.** Mở "Board K-high khô" trước và nhìn một lưới phủ toàn một màu xanh lá, rồi quay lại đây và xem màu cam và hồng xuất hiện giữa nó. Cùng người chơi, cùng range — ba lá bài đã đổi cả chiến lược.

Sau đó mở **Trainer GTO** ở thanh bên và để nó chia cho bạn đúng cú lead bạn vừa đọc — nó đưa cho bạn một tay ngẫu nhiên theo trọng số range thật và cho bạn biết, tính bằng big blind, chọn sai thì mất bao nhiêu. Miễn phí, không cần cài đặt, không cần tài khoản.

## Câu hỏi thường gặp

**Q. Vì sao donk bet bị coi là cách chơi tệ?**

A. Vì trên phần lớn board, nó đúng là tệ. Trong loạt bài này, các flop A-high, K-high và broadway đều có big blind lead dưới 2%, vì người raise preflop kết nối với những lá đó tốt hơn. Ngoại lệ là board mà **người call cầm nhiều tay mạnh nhất hơn** — và 9-8-7 là ví dụ rõ nhất.

**Q. Trên 9-8-7, big blind có lợi thế không?**

A. Không. Equity là 48,5% so với 51,5% và equity realization là 93,2% so với 106,4%, cả hai đều nghiêng về button. Lead xuất hiện vì big blind cầm nhiều sảnh đã thành hơn, trong khi sức mạnh của button dồn vào những overpair mà board này đe dọa — không phải vì big blind dẫn trước tổng thể.

**Q. Khi nào nên check thay vì lead?**

A. Ba phần tư số lần, kể cả trên flop này — 76,2% range của big blind check. Hãy check khi range của bạn không cầm nhiều bài đã thành hơn, tức là mọi board khô A-high hay K-high, và check khi đối thủ vốn đã bet quá nhiều: để họ bắn đáng giá hơn việc giành quyền chủ động từ họ. Lead là ngoại lệ, không phải bản nâng cấp.

**Q. Lead rồi bị raise thì sao?**

A. Lên kế hoạch trước khi bet, vì một cú lead một phần ba pot mời gọi raise. Sảnh và draw sảnh hở hai đầu đi tiếp — bạn có đủ equity để chơi pot lớn. Top pair với lá 9 là call, một lần, và thường dừng lại khi turn xấu. Những tay không có đôi cũng không có draw nên fold thay vì "thử xem sao": đó chính là phần range mà cú raise nhắm vào.

**Q. Nên lead với size bao nhiêu?**

A. Chủ yếu là nhỏ. Solver đặt 16,8 trong 23,7 điểm vào cú bet một phần ba pot và 6,9 vào ba phần tư pot. Size nhỏ là mặc định vì mục đích là gây áp lực bằng cả range; size lớn tồn tại để đối thủ không thể đơn giản call mọi thứ.

**Q. Những con số này có đúng ở stake tôi đang chơi không?**

A. Điều kiện board thì đúng; con số chính xác 23,7% thì không mang đi nguyên vẹn được. Nó giả định chơi heads-up, 100bb, button open 2,5bb và range phòng thủ tiêu chuẩn, không tính rake. Một cú open live lớn hơn sẽ đổi pot và SPR (stack hiệu dụng chia cho pot), và một big blind phòng thủ rộng hơn mô hình nhiều sẽ cầm còn nhiều sảnh hơn — điều đó làm lead mạnh hơn, chứ không yếu đi.
`.trim(),
};

export default POST;
