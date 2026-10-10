import type { Post } from "../posts";

/**
 * Loạt ví dụ solver ⑤ — bản tiếng Việt · Q♠9♠2♠ board monotone (vi-gto · 2026-10-10)
 * Nguồn: bản EN lib/posts-en/monotone-board-strategy.ts (updated 2026-10-02) — mọi số, lá bài, bảng chép nguyên EN, chỉ đổi dấu thập phân.
 * Từ khóa: monotone flop · monotone board poker · monotone flop odds (FAQ 4).
 * Giới hạn đã biết: ảnh vẫn là bản -en (chưa có ảnh -vi) · dòng flush draw là giá trị suy ra (Flush draw + Combo draw).
 * Không có trải nghiệm cá nhân bịa ra — đây là dữ liệu solver tái lập được.
 */
export const POST: Post = {
  slug: "monotone-board-strategy",
  title: "Thùng nut mà bảy trên mười lần vẫn check",
  seoTitle: "Thùng nut mà check tới 70% — Chơi flop monotone thế nào",
  desc: "Trên flop monotone, cú bet lớn gần như biến mất — chỉ 3,2%. Ngay cả thùng nut cũng check trung bình 69,9%. Vì sao size sụp xuống khi ba lá flop cùng một chất.",
  tldr: "Trên Q♠9♠2♠, nơi cả ba lá flop cùng một chất, big blind check 88,8%, bet nhỏ 8,0% và bet lớn chỉ 3,2%. Size lớn gần như biến mất vì nut đã cố định: thùng có sẵn thì bet nhỏ cũng được call, còn bạn càng bet lớn khi chưa có thùng, người call bạn càng thu hẹp về đúng những tay có thùng. Ngay cả thùng nut cũng check trung bình 69,9% — và thùng không phải nut còn check nhiều hơn, 81,4%.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 phút",
  emoji: "♠️",
  image: "/images/gto-srp-monotone-oop-en.webp",
  imageAlt: "Kết quả solver HoldemMaster trên flop toàn bích: lưới bài của big blind phần lớn màu xanh check, xen vài cú bet nhỏ",
  tags: ["monotone flop", "monotone board poker", "cách chơi flop monotone", "thùng nut", "bet sizing", "reverse implied odds", "ví dụ solver"],
  content: `
Flop ra **Q♠ 9♠ 2♠** — ba lá, một chất. Bạn nhìn xuống tay mình: A♠J♠. Đó là **thùng nut (nut flush — thùng mạnh nhất có thể)**, đã thành ngay trên flop.

Vậy bạn bet bao nhiêu? Bản năng bảo hãy xây pot. Solver lại check tay này **83,4% số lần.**

Flop monotone là kiểu board khiến người chơi rối nhất, vì cả tay đã thành lẫn tay chưa có gì đều hành xử khác hẳn bình thường. Mọi con số dưới đây lấy từ [GTO poker solver miễn phí](/vi/solver) của HoldemMaster.


:::stripe
Spot | BTN open 2,5bb → BB call (heads-up)
Flop | Q♠ 9♠ 2♠ (monotone — ba lá cùng một chất)
Pot · stack | Pot 5,5bb · stack hiệu dụng 97,5bb
Kết quả | Bet lớn 3,2% — sizing sụp xuống
:::

> **Trả lời nhanh**
> Bet nhỏ hoặc check, gần như không bao giờ bet lớn. Trên Q♠9♠2♠, big blind (BB — mù lớn) check **88,8%**, bet một phần ba pot **8,0%**, và bet ba phần tư pot chỉ **3,2%**. Nut bị khóa vào một kiểu tay duy nhất, nên thùng có sẵn thì bet nhỏ cũng đã được call, còn càng bet lớn khi chưa có thùng, những người call bạn càng thu hẹp về đúng các tay có thùng. Điều đó đẩy size lớn ra khỏi chiến lược của cả hai người chơi.

## Board monotone (đồng chất) trong poker là gì?

**Là flop mà cả ba lá cùng một chất** — ở đây là Q♠ 9♠ 2♠, nên bất kỳ hai lá bích nào trên tay người chơi cũng đã là thùng (flush) thành sẵn. Đây là kiểu board hiếm nhất trong các texture thường gặp và cũng là kiểu làm thay đổi giá trị tay bài nhiều nhất, vì chỉ một lá cùng chất có thể đáng giá hơn cả một đôi.

| Thiết lập | Giá trị |
|---|---|
| Preflop | BTN open 2,5bb · BB call · những người còn lại fold |
| Range | Xấp xỉ range online tiêu chuẩn 100bb |
| Flop | Q♠ 9♠ 2♠, monotone (ba lá bích) |
| Pot · stack | Pot 5,5bb · stack hiệu dụng 97,5bb |
| Cỡ bet | Khoảng 33% và 75% pot |
| Rake | Không tính rake |
| Kiểm tra ngày | 2026-08-20, kết quả Spot mẫu |

## Big blind chơi flop monotone thế nào?

**Check 88,8%, lead 11,2%.** Mức lead này thấp hơn trên [board liền nhau 9-8-7](/vi/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp") (23,7%), nhưng cao hơn hẳn các flop khô, nơi nó chỉ là 1,9% trên A-7-2 và 0,2% trên K-8-3. Đây là donk bet (lead — bet trước vào người đã raise preflop) của big blind, không phải c-bet (cược tiếp tục).

| Hành động đầu tiên của BB | Tần suất | Combo |
|---|---|---|
| Check | **88,8%** | 415,7 |
| Bet 1,8bb (33% pot) | 8,0% | 37,4 |
| Bet 4,1bb (75% pot) | **3,2%** | 14,9 |

Điều thú vị không nằm ở cách chia bên trong cú lead — mà ở chỗ **toàn bộ đợt tấn công đã co lại.** Phần của cú bet lớn trong range lead là 29%, gần như đúng bằng mức trên 9-8-7 (6,9 trên 23,7). Cái thay đổi là tổng: lead giảm từ 23,7% xuống 11,2%, và bet lớn từ 6,9% xuống 3,2%, cả hai đều giảm khoảng một nửa.

Vậy là không bên nào hưởng lợi từ size lớn, còn size nhỏ chỉ có lợi cho một bên — đó là lý do cả chiến lược sụp về phía "bet nhỏ, hoặc check". Đây không phải chuyện "cú bet lớn bị gỡ khỏi lựa chọn": mà là **big blind bet ít hơn nói chung** — và lý do lộ rõ nhất qua cách các tay thùng đã thành hành xử.

## Vì sao cú bet lớn biến mất trên flop monotone?

**Vì nut đã cố định.** Q, 9 và 2 không liền nhau, nên trên flop này không thể có thùng phá sảnh (straight flush). Tay mạnh nhất bị khóa cứng: **người cầm A♠ cùng một lá bích thứ hai** (riêng A♠ thì mới chỉ là bốn lá chờ thùng). Một lá bài quyết định đỉnh của cả hai range.

Khi điều đó đúng, bet lớn không còn trả công cho ai cả.

:::compare
Nếu bạn có thùng | Nếu bạn không có thùng
Bet lớn khiến phần lớn các tay không có thùng fold (bỏ bài) | Bet lớn bị call chủ yếu bằng thùng và draw bích
Bet nhỏ giữ được các tay một đôi ở lại | Bet nhỏ thì rẻ, nhưng tay một đôi không fold trước nó
:::

**Một bên hưởng lợi từ size nhỏ; bên kia không có size nào thật sự có lợi.** Vì vậy chiến lược của mọi người đều dồn về "bet nhỏ hoặc check". Trong loạt bài này, đây là board minh họa rõ nhất cho nguyên tắc: sizing được quyết định bởi **những gì đối thủ có thể call (theo)**, chứ không phải bởi bạn mạnh đến đâu.

## Vì sao thùng nut lại check?

**Vì gần như không có gì call được.** Hãy kéo bảng từng tay bài của solver xuống tận cuối và lấy ra cả tám combo (tổ hợp bài) thùng nut — tất cả các tay A♠ mà big blind thực sự có thể cầm:

| Tay bài | Equity | Check | Bet 1,8bb | Bet 4,1bb | EQR |
|---|---|---|---|---|---|
| A♠J♠ | 97,7% | **83,4%** | 14,3% | 2,2% | 229,9% |
| A♠10♠ | 97,7% | **84,2%** | 14,5% | 1,2% | 232,3% |
| A♠8♠ | 97,7% | **79,1%** | 17,4% | 3,5% | 232,6% |
| A♠7♠ | 97,6% | **56,0%** | 20,6% | 23,4% | 231,3% |
| A♠6♠ | 97,6% | **60,2%** | 22,0% | 17,9% | 232,6% |
| A♠5♠ | 97,6% | **64,1%** | 20,2% | 15,7% | 233,6% |
| A♠4♠ | 97,6% | **52,7%** | 24,1% | 23,2% | 237,3% |
| A♠3♠ | 97,6% | **79,7%** | 0,0% | 20,3% | 240,6% |

**Trung bình là check 69,9%.** Một tay có 97,6% equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) — gần như không thể thua — vẫn check bảy trên mười lần.

Vì sao chỉ có tám combo? Ba tay A bích đồng chất là bất khả, vì **Q♠, 9♠ và 2♠ đã nằm trên board.** Trong chín tay còn lại, A♠K♠ được 3-bet ngay preflop nên không bao giờ đi tới đây, còn lại tám.

Lý do check không nằm ở số tiền bạn thắng ngay bây giờ mà ở tổng số tiền bạn thắng. Bet lớn thì phần lớn các tay một đôi và tay bài cao sẽ fold; một tay có một lá bích có thể theo, nhưng trước thùng nut đã thành, nó không bao giờ làm được thùng cao hơn và cần runner-runner — chẳng hạn cù lũ (full house) — mới thắng được. Dù thế nào, khoản tiền lẽ ra bạn thu về sau đó cũng dừng lại. Còn nếu check, đối thủ sẽ bet bằng đôi của họ hoặc bluff vào bạn — khoản tiền bạn có thể tiếp tục thu ở turn và river.

Con số nói rõ điều đó: **EQR 230%**, gấp hơn hai lần phần pot. Equity realization (EQR — phần equity bạn thực sự thu về) này nghĩa là: pot đang là 5,5bb mà A♠J♠ có EV (giá trị kỳ vọng) ==12,36bb==. Phần còn ở phía trước đáng giá hơn phần đã nằm trong pot.

Blocker cũng hiện ra ngay trong bảng này. **A♠J♠ và A♠10♠ check trên 80%, trong khi A♠7♠ tới A♠4♠ tụt xuống 52%–64% và bet nhiều hơn hẳn.** Cầm J♠ hay 10♠ là chặn bớt **những thùng không phải nut có chứa các lá đó**. ⚠ Trên board này không tồn tại "thùng J-high" — Q♠ đã nằm trên board, nên mọi thùng đã thành ít nhất là Q-high, và thùng mạnh thứ hai là K-high. Thứ mà J♠ hay 10♠ lấy đi là **ô kicker** của các thùng đó (K♠J♠, J♠10♠ và những tay tương tự). Nhưng blocker không tự giải thích được cách chia này. Hãy đếm 18 thùng không phải nut của button: J♠ và 10♠ mỗi lá loại bỏ 4 tay, trong khi 7♠ loại bỏ 6, 8♠ và 6♠ mỗi lá 5, 5♠ là 4 và 4♠ chỉ 2 — vậy mà A♠7♠, blocker lớn nhất trong cả nhóm, vẫn bet 44,0% số lần, chỉ sau A♠4♠ (47,3%), tay chỉ chặn được 2. Chỉ có 3♠ không chặn tay nào, và A♠3♠ check 79,7%. Với mọi combo thùng nut, ba hành động chênh nhau trong vòng 0,05bb, nên hãy đọc cột này như sự trộn giữa các lựa chọn gần như ngang nhau, không phải quy tắc blocker.

## Thùng không phải nut có chơi khác không?

**Chúng còn check nhiều hơn.** Trên board này có 33 combo thùng đã thành; 25 combo không có A♠ check trung bình **81,4%**, so với 69,9% của tay nut.

| Tay bài | Equity | Check | EQR |
|---|---|---|---|
| A♠J♠ (nut) | 97,7% | 83,4% | 229,9% |
| K♠J♠ | 94,0% | **91,8%** | 197,0% |
| K♠8♠ | 93,6% | **76,3%** | 193,0% |
| K♠6♠ | 93,6% | **61,0%** | 193,7% |

Equity gần như không nhúc nhích — 94% so với 97,7% — nhưng EQR rơi xuống 197%. **Khi thắng, bạn thắng ít hơn.** Chỉ có một lý do: tay duy nhất mà thùng K-high thua là thùng A-high, và đó chính là tay bỏ tiền lớn vào pot. Thắng nhỏ, thua lớn chính là **implied odds ngược (reverse implied odds)**, hình ảnh phản chiếu của [implied odds](/vi/blog/holdem-implied-odds).

## Ai cầm nhiều thùng hơn ở đây?

**Big blind — 7,1% so với 5,7%.** Nhưng với *draw* thùng thì ngược lại.

![Infographic so sánh thành phần range của big blind và button theo từng nhóm tay trên board toàn bích](/images/gto-srp-monotone-ranges-en.webp "Q♠9♠2♠ · chia theo nhóm tay — thùng đã thành nghiêng về big blind, overpair và A-high nghiêng về button")

| Nhóm | BB (OOP) | BTN (IP) |
|---|---|---|
| Thùng đã thành | **7,1%** | 5,7% |
| Flush draw (một lá bích, gồm cả combo draw) | 25,6% | **29,2%** |
| Top pair (Q) | 10,9% | **12,0%** |
| Overpair (KK, AA) | 0,0% | **2,5%** |
| A-high | 25,6% | **28,5%** |

⚠ Dòng flush draw (chờ thùng) là **giá trị suy ra**: solver liệt kê "Flush draw" và "Combo draw" riêng, và một tay có một lá bích có thể nằm ở dòng nào cũng được. Vì vậy với big blind là ==20,5 + 5,1 = 25,6%== và với button là ==24,1 + 5,1 = 29,2%==. Nên biết điều này nếu bạn đối chiếu các số trên với màn hình.

Sự chênh lệch này bắt nguồn từ preflop. **Big blind phòng thủ bằng cả những tay đồng chất rẻ tiền** — những tay như J4s, J5s và 85s được call từ big blind, và các tay bích trong số đó biến thành thùng. Button (BTN) thì không bao giờ open những tay này.

Thay vào đó, button có nhiều hơn hẳn **các tay A-x và K-x khác chất có một lá bích.** Chưa thành, nhưng đang draw — và đây là chỗ A♠ trở nên đặc biệt. Nó có thể làm thành thùng nut, đồng thời cho bạn biết đối thủ **không thể** có thùng nut.

## Một lá bích làm giá trị tay bài thay đổi thế nào?

**Cùng là top pair, nhưng có hay không có lá bích thì đó là hai tay bài khác nhau.**

Lấy Q♥J♦ — top pair, không có lá bích. Tay này đã bị dẫn trước bởi **12,0%** trong toàn bộ range 474 combo của button (thùng 5,7 + overpair 2,5, cộng thêm set và hai đôi), và còn thua kicker trước **AQ và KQ**: Q♠ nằm trên board và Q♥ nằm trên tay bạn, nên chỉ còn hai lá Q, tạo ra 8 combo AQ và 8 combo KQ — 16 trong số 428 combo mà button vẫn có thể cầm sau khi Q♥ và J♦ của bạn đã bị loại ra, **khoảng 3,7%**. Đếm theo cùng cách đó, tất cả các tay đang dẫn trước bạn là 68 trên 428, xấp xỉ **15,9%**. Ngoài ra còn **29,2%** nữa có thể vượt qua bạn chỉ với một lá (⚠ bốn trong 16 combo thắng kicker đó có một lá bích và cũng được tính trong 29,2%, nên đừng cộng thẳng hai con số). Đó không phải tay để lấy value ba vòng cược; đó là tay để bắt bluff một lần.

Giờ lấy 9♥8♠ — đôi giữa (middle pair) có một lá bích. Nó có thể thắng ngay bây giờ hoặc cải thiện về sau, nên đủ linh hoạt để bet hoặc call.

**Trên board này, một chất viết lại toàn bộ thứ hạng.**

## Vì sao EQR là 90 so với 109 khi equity là 48 so với 52?

**Vì một board mà pot luôn giữ nhỏ cũng làm giá trị của vị trí co lại.**

| Chỉ số | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 47,7% | 52,3% |
| EV (bb) | 2,37 | 3,13 |
| **Equity realization (EQR)** | **90,4%** | **108,8%** |

Phần equity của big blind là ==5,5 × 47,7% = 2,62bb==, so với thực tế là 2,37bb — chính là con số 90,4%. Big blind ở đây chơi out of position (OOP — không có vị trí), còn button ở in position (IP — có vị trí).

Khoảng cách 18,4 điểm là nhỏ thứ hai **trong bảy pot raise đơn (single raised pot)**, chỉ sau 9-8-7 với 13,2. ⚠ Tính trên toàn loạt bài thì nó chỉ đứng thứ năm — K-10-6 blind đối đầu blind (7,0), A-A-6 (9,3) và pot 3-bet 8-5-2 (16,6) đều sít hơn, và đó là những ghế khác. Khi các cú bet lớn biến mất, những quyết định khó cũng biến mất — và **vị trí đáng giá đúng bằng số quyết định còn lại phải đưa ra.**

## Ra bàn thật thì chơi khác gì?

- **Trên board monotone, bet lớn vốn đã hiếm.** Theo lý thuyết, size lớn của big blind ở đây rơi xuống **3,2%**. ⚠ Đừng nhảy thẳng từ đó sang "vậy gặp bet lớn thì fold một đôi". 3,2% là tần suất big blind **lead**, còn khi bạn là người *đối mặt* với cú bet, tần suất sizing của button hoàn toàn không có trong lần tính này. Hãy nhìn cả cột của chính button: thùng đã thành là 5,7%, trong khi draw một lá bích là **29,2%**, gấp hơn năm lần — đọc mọi cú bet lớn là "thùng" sẽ khiến bạn bị semi-bluff đẩy ra khỏi pot. Điều đầu tiên cần kiểm tra khi gặp bet lớn là **tay bạn có A♠ hay không.**
- **Đừng đẩy một thùng nhỏ qua ba vòng cược lớn.** Solver check thùng không phải nut 81,4% số lần (nut: 69,9%). Lấy value bằng bet nhỏ, và coi một cú raise (tố) lớn là A♠ cho tới khi có bằng chứng ngược lại.
- **Cầm A♠ là nâng tay bài lên thành ứng viên bluff.** Một cú bluff khi biết chắc đối thủ không thể có thùng nut là cú bet khác hẳn so với bluff mù quáng.
- **Gặp đối thủ không bao giờ fold một đôi thì thôi gài bẫy.** Mức check 69,9% giả định người kia sẽ bet khi được check tới; nếu họ chỉ biết call, hãy bet các tay thùng và lấy tiền.

:::readnext[Đọc tiếp]
/vi/blog/donk-bet-strategy | Flop mà donk bet là nước đúng — 9-8-7 | /images/gto-srp-middle-connected-oop-en.webp
/vi/blog/broadway-board-strategy | Hai phần ba range có draw — mà vẫn check | /images/gto-srp-broadway-oop-en.webp
:::

## Tự kiểm tra

Mở [GTO poker solver miễn phí](/vi/solver), vào **Spot mẫu → Board monotone (cả 3 lá cùng chất) → [⚡ Xem kết quả]**.

Với spot (tình huống ra quyết định) này, bảng từng tay bài ở phía dưới chính là cả bài học — **hãy kéo nó xuống tận cuối.** Bạn sẽ đọc được vì sao A♠J♠ và A♠4♠ chênh nhau 30 điểm phần trăm về tần suất check, và vì sao cùng một lá Q lại tách thành hai tay bài khác nhau tùy vào việc nó đi kèm lá bích hay không.

Sau đó mở **Trainer GTO** ở thanh bên và để nó chia cho bạn một tay thùng trên board này: tự chọn hành động rồi xem **EV mất** nhanh hơn nhiều so với để một cái bảng thuyết phục bạn. Miễn phí, không cần cài đặt, không cần tài khoản.

## Câu hỏi thường gặp

**Q. Flop monotone là gì?**

A. Là flop mà cả ba lá cùng một chất, như Q♠ 9♠ 2♠. Bất kỳ hai lá nào của chất đó đã làm thành thùng, và chỉ một lá của chất đó là draw. Đây là texture mà giá trị tay bài dịch chuyển nhiều nhất, vì tạm thời chất bài quan trọng hơn thứ hạng lá bài.

**Q. Có thùng sẵn trên board monotone thì lúc nào cũng nên bet không?**

A. Không. Trong lần tính này, tám combo thùng nut check từ 52,7% đến 84,2%, trung bình 69,9%, còn thùng không phải nut check 81,4%. Bet lớn khiến phần lớn các tay một đôi và tay bài cao fold — còn tay có một lá bích nếu có theo thì cũng không bao giờ làm được thùng cao hơn, phải cần runner-runner như cù lũ mới thắng — nên check để dụ đối thủ bet rồi thu tiền qua turn và river sẽ thắng được nhiều hơn về tổng.

**Q. Vì sao big blind có nhiều thùng hơn button?**

A. Vì big blind đã bỏ một phần tiền vào pot và phòng thủ bằng cả những tay đồng chất rẻ tiền như J4s, J5s và 85s. Trên board monotone, những tay này biến thành thùng. Button không bao giờ open chúng, đó là lý do thùng đã thành của button chỉ ở mức 5,7% so với 7,1% của big blind.

**Q. Xác suất flop ra thùng là bao nhiêu?**

A. Đủ hiếm để bản thân board monotone đã là chuyện bất thường — bạn cần hai lá đồng chất trên tay và cả ba lá flop cùng phối hợp. Tỷ lệ chính xác để flop ra thùng và để hoàn thành thùng được tính chi tiết trong bài [xác suất draw](/vi/blog/holdem-drawing-odds); điều quan trọng ở đây là nên làm gì khi board đã ra như vậy.

**Q. Chưa có thùng thì A♠ trên tay quan trọng đến vậy để làm gì?**

A. Nó là một blocker: khi bạn cầm nó, đối thủ không thể có thùng nut. Điều đó khiến họ không thể bảo vệ phần đỉnh range của mình, nên các tay có A♠ là những cú bluff đầu tiên solver chọn. Chiều ngược lại cũng đúng — khi bạn cầm một thùng nhỏ, một cú raise lớn đáng được tôn trọng hơn bình thường.
`.trim(),
};

export default POST;
