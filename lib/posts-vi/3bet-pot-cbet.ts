import type { Post } from "../posts";

/**
 * Loạt ví dụ solver ⑧ bản tiếng Việt — A♦K♠2♥, pot 3-bet (vi-gto B · 2026-10-10)
 * Nguồn: EN lib/posts-en/3bet-pot-cbet.ts (updated 2026-10-02 · hash gốc b57cb658). Số liệu, lá bài = EN nguyên văn, chỉ đổi dấu thập phân.
 * Từ khóa (L-G §1·§2·§4-D): spr poker 20 · spr poker là gì 10 · spr trong poker là gì (autocomplete) — bài này là chủ (§3-C ⑬).
 * Giới hạn đã biết: ảnh vẫn là bản -en (chưa có -vi) · check 0,0% là giá trị màn hình (dư lượng thô 41 combo, K♥K♦ 0,09%).
 * Đính chính theo §0-0: «underpairs … blocked by the ace and king» → «có cả A lẫn K nằm phía trên».
 */
export const POST: Post = {
  slug: "3bet-pot-cbet",
  title: "Chẳng ai check flop này",
  seoTitle: "Không ai check — SPR trong poker là gì và SPR 4 làm được gì",
  desc: "Pot 3-bet này, cả 63 combo đều bet — không vì range mạnh, mà vì người call không còn pocket A hay pocket K nào. SPR trong poker là gì và SPR 4 làm được gì.",
  tldr: "Trên A♦K♠2♥ trong pot 3-bet, big blind bet toàn bộ range: check làm tròn còn 0,0%, và không combo nào trong 63 combo check dù chỉ 0,1%. Ở bảy spot trước, mặc định của nó là check, từ 76,2% đến 99,9%. Thứ đổi chiều chủ yếu là hành động preflop: big blind 3-bet thay vì call, nên nó nắm phần đỉnh của flop này, trong khi button đã 4-bet pocket A và pocket K đi mất. Và với SPR 4,0, không còn street nào sau đó để dồn lại.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "12 phút",
  emoji: "🔥",
  image: "/images/gto-3bp-ace-king-oop-en.webp",
  imageAlt: "Kết quả solver HoldemMaster cho pot 3-bet trên flop A-high: toàn bộ lưới 13x13 của big blind tô màu bet, ô check hiện 0,0%",
  tags: ["spr poker", "spr poker là gì", "spr trong poker là gì", "effective stack poker", "pot 3-bet", "ví dụ solver"],
  content: `
Ở bảy spot (tình huống ra quyết định) trước bài này, câu trả lời của big blind (BB — mù lớn) gần như lúc nào cũng là check. Ngay cả trên [flop 9-8-7](/vi/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp"), nơi việc lead quan trọng nhất, nó cũng chỉ bet 23,7% số lần. Ở mọi spot còn lại, nó check từ 88,8% đến 99,9%.

Ở đây nó làm điều ngược lại: **big blind bet toàn bộ range** — cả 63 combo (tổ hợp bài), mỗi combo bet ít nhất 99,9% số lần.

Thứ thay đổi chủ yếu là hành động preflop: big blind **3-bet** thay vì call (theo), nên pot là 22,5bb thay vì 5,5bb. (⚠ Board cũng đã đổi — spot ① là A♥7♦2♣, còn đây là A♦K♠2♥ — nên đây không phải một phép so sánh có kiểm soát mà biến số duy nhất là preflop.) Chính khác biệt đó lật ngược toàn bộ flop. Mọi con số bên dưới đều lấy từ [GTO poker solver miễn phí](/vi/solver) của HoldemMaster.


:::stripe
Spot | BB 3-bet → BTN call (heads-up)
Flop | A♦ K♠ 2♥ (rainbow)
Pot · stack | Pot 22,5bb · stack hiệu dụng 89bb · **SPR 4,0**
Kết quả | BB bet 100% — check là 0,0%
:::

> **Trả lời nhanh**
> Big blind bet toàn bộ range. Size nhỏ (7,4bb, 33% pot) được dùng 57,8% số lần và size lớn (14,9bb, 66%) 42,2%. Lý do không phải vì tay nào cũng mạnh — 38,1% range là đôi tẩy thấp hơn lá K. Lý do là **button (BTN) đã 4-bet pocket A và pocket K của mình đi từ trước flop**, nên phần đỉnh của board này chỉ thuộc về một người, và với SPR 4,0 không còn street nào phía sau đáng để giữ một cú check lại.

## Những con số này đến từ điều kiện nào?

★**Điều kiện khác với bảy spot đầu tiên.** Pot, stack và vai trò đều đã đổi, nên bảng điều kiện đi trước.

| Thiết lập | Spot này (pot 3-bet) | ①–⑦ (pot raise đơn) |
|---|---|---|
| Preflop | BTN open → **BB 3-bet lên 11bb** → BTN call | BTN open 2,5bb → BB call |
| OOP (out of position — không có vị trí · hành động trước) | **BB — bên 3-bet** | BB — bên call |
| IP (in position — có vị trí) | BTN — bên call | BTN — bên open |
| Pot | **22,5bb** | 5,5bb |
| Stack hiệu dụng | **89bb** | 97,5bb |
| **SPR** | **4,0** | 17,7 |
| Cỡ bet | Khoảng 1/3 và 2/3 pot | Khoảng 33% và 75% (⑦ chỉ có một size) |
| Rake | Không tính rake | Không tính rake |
| Kiểm tra ngày | 2026-08-20 | ①–④ 2026-08-19 · ⑤–⑦ 2026-08-20 |

Pot 22,5bb là ==11 tiền 3-bet + 11 tiền call + 0,5 của small blind đã fold==, còn stack hiệu dụng là ==100 − 11 = 89bb==.

## Tần suất check thật sự là 0% sao?

**0,0% trên màn hình.** Kết quả thô vẫn có một chút dư lượng — 41 trên 63 combo mang một mẩu check rất nhỏ, lớn nhất là K♥K♦ ở 0,09%, cộng lại chưa tới một phần trăm của một combo. Đó là nhiễu của solver, không phải một chiến lược, nên hãy đọc nó là số không. Thay vào đó, phần bet chia giữa hai size: 57,8% dùng size nhỏ 7,4bb và 42,2% dùng size lớn 14,9bb. Ở cả bảy pot raise đơn (single raised pot) trước đó, mặc định của big blind đều là điều ngược lại, không trừ spot nào.

| Hành động đầu tiên của BB | Tần suất | Combo |
|---|---|---|
| Bet 7,4bb (33% pot) | **57,8%** | 36,6 |
| Bet 14,9bb (66% pot) | 42,2% | 26,4 |
| Check | **0,0%** | **0,0** |

(Phần trăm và số combo của solver được tổng hợp theo hai cách khác nhau nên không chia ra khớp tuyệt đối — ==36,6 ÷ 63 = 58,1%== so với 57,8% đang hiển thị. **Các giá trị trên được trích đúng như bảng hiển thị.** Kết quả 0 combo không bị ảnh hưởng.)

Một con số 0,0% không có nghĩa là check bị cấm. Nó có nghĩa là **EV (giá trị kỳ vọng) khi check của từng combo đều ra thấp hơn EV khi bet, trong cây này, với các range này.**

Ở những spot trước, hành động thua vẫn giữ được một mẩu — 0,2%, 0,1%. Ở đây cú check còn không có được chừng đó.

## Vì sao không một combo nào check?

**Vì big blind nắm trọn phần đỉnh của board này.** Có ba tay bài tạo set (cầm đôi trên tay + 1 lá trên board) trên A-K-2, và nó giữ hai trong ba. Khi người phải hành động trước lại cũng cầm tay bài tốt nhất thường xuyên hơn hẳn, thì không có gì một cú check bảo vệ được mà một cú bet không bảo vệ tốt hơn. Bảng phân nhóm cho thấy điều đó đi xa tới đâu.

| Nhóm | BB (OOP) | Combo | BTN (IP) | Combo |
|---|---|---|---|---|
| Set | **9,5%** | 6 | 2,3% | **3** |
| Hai đôi | **14,3%** | 9 | 6,9% | 9 |
| Top pair (một lá A) | **33,3%** | 21 | 20,8% | 27 |
| Second pair (một lá K) | 4,8% | 3 | **11,5%** | 15 |
| Underpair | 38,1% | 24 | **46,2%** | 60 |
| Chưa thành bài | **0,0%** | **0** | 12,3% | 16 |

(Trên màn hình, big blind hoàn toàn không có hàng "Chưa thành bài" — nhóm nào ở 0% thì không được vẽ ra.)

Hãy nhìn hàng trên cùng. **Có ba tay tạo set trên A-K-2 — AA, KK và 22 — và button chỉ giữ tay cuối cùng.** (Bảng của solver gắn nhãn hàng đó là *Xám*. Trên một board không có đôi, đôi tẩy trùng với một lá trên board là **set** — sự phân biệt này được trình bày ở [spot board có đôi](/vi/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-en.webp").) Button đã 4-bet pocket A và pocket K từ trước flop, nên số combo set của nó là ba, so với sáu của big blind.

Toàn bộ spot nằm ở đó. Khi đối thủ gần như không thể có tay bài tốt nhất, bạn có thể bet bằng cả những phần chẳng mạnh chút nào trong range của mình — và 38,1% range này là đôi tẩy *thấp hơn* lá K.

**"Chưa thành bài: 0,0%" không phải là lý do, dù rất dễ nghĩ như vậy.** Cùng range 3-bet đó trên một board thấp nói điều ngược lại: trên [flop 8-5-2](/vi/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-en.webp") ở phần sau của loạt bài này, 48,2% range của big blind là A-high không có đôi nào — vậy mà nó vẫn chỉ check **2,0%**. Đi từ 0% lên 48% tay không có đôi chỉ dịch tần suất check đi hai điểm. Thứ làm cú check xuất hiện không phải là bạn cầm bao nhiêu tay không có đôi; mà là board có quay lưng với bên 3-bet hay không.

:::note[⚠ Đây là hình ảnh phản chiếu của [flop A-high trong pot raise đơn](/vi/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp"). Ở đó big blind mới là bên bị **capped** (range bị chặn trần) — không có AA, AK hay AQ, vì nó đã 3-bet những tay đó — và nó check 98,2%. Cùng một kết cấu A-high, ghế ngược nhau: ai 3-bet thì người đó giữ phần đỉnh.]:::

## SPR trong poker là gì?

**SPR là viết tắt của stack-to-pot ratio: SPR là stack hiệu dụng (effective stack) chia cho pot ở đầu flop.** Ở đây nó là ==89 ÷ 22,5 = 4,0==, nghĩa là stack phía sau chỉ gấp bốn lần số tiền đã nằm giữa bàn. Chính con số này biến một quyết định ở flop thành quyết định về cả stack, vì không còn đủ chỗ để lùi câu hỏi lại về sau.

| Tình huống | Pot | Stack hiệu dụng | SPR |
|---|---|---|---|
| Pot raise đơn (①–⑦) | 5,5bb | 97,5bb | **17,7** |
| Pot 3-bet (spot này) | 22,5bb | 89bb | **4,0** |

Con số này quan trọng vì nó cho bạn biết **còn lại bao nhiêu cú bet**, chứ không phải còn bao nhiêu tiền. Lấy size 66% mà solver đưa ra ở đây và chạy nó qua từng vòng cược:

- Flop **14,9bb** → bị call, pot là 52,3bb và còn lại 74,1bb
- Turn **34,5bb** → bị call, còn lại 39,6bb
- River **39,6bb** all-in

**Ba cú bet là hết: ==14,9 + 34,5 + 39,6 = 89,0==.** Hai cú bet đưa bạn tới 49,4bb, tức 55,5% stack — chưa phải toàn bộ. Nếu muốn ba cú bet rơi đúng vào all-in với cùng một tỷ lệ ở mỗi vòng, tỷ lệ đó là ==khoảng 54% pot==.

Chạy cùng ba cú bet đó trong một pot raise đơn thì bạn mới tiêu ==3,67 + 8,56 + 19,96 = 32,2bb==, một phần ba stack. **Đó mới là khác biệt thật giữa SPR 17,7 và SPR 4,0** — không phải số tiền, mà là số quyết định bạn còn được đưa ra. Và khi không còn street nào phía sau để dồn lại, một cú check chẳng còn gì để mua.

## Vì sao size nhỏ được dùng nhiều hơn?

**Vì hình dạng của range, không phải vì độ sâu của stack.** Cả 63 combo ở đây đều từ một đôi trở lên, nên **phần đáy của range đã biến mất hoàn toàn** và nó không bao giờ tách thành kiểu "nut hoặc không có gì". Không có tay chưa thành bài để ghép cặp với size lớn, cả range bị đẩy về phía size nhỏ — đó là lý do 57,8% range đi ra ở mức một phần ba pot. ("Condensed" là nhãn quen thuộc cho một range không có đáy *và* không có đỉnh; nó không khớp ở đây, vì range này nắm trọn phần đỉnh của board — cả hai set cao nhất, AA và KK, đủ sáu combo.)

A-K-2 rainbow (3 lá khác chất) gần như không cho gì để chờ, nên cũng không cần bắt draw trả giá. Giữa hai yếu tố, hình dạng range mới là thứ làm nên chuyện.

⚠ **"Stack nông thì bet nhỏ" không phải là lý do.** Hai spot sau trong loạt bài này ngồi ở đúng cùng SPR 4,0 mà gần như lúc nào cũng bắn size *lớn* — Q-10-7 ở **98,4%** và [8-5-2](/vi/blog/3bet-pot-low-board) ở **97,8%** — vì hai lý do khác nhau. Q-10-7 là board ướt, nên một cú bet lớn là thứ đặt giá lên các draw. 8-5-2 khô như board này, nhưng range của nó tách thành overpair (đôi tẩy cao hơn mọi lá trên board) và A-high, gần như không có gì ở giữa, và một range phân cực (polarized) thì bet lớn. Cùng độ sâu stack, sizing ngược nhau, và không lý do nào là độ sâu.

**Và size lớn cũng không phải "phần của các tay mạnh".** Đếm các combo có thể đẩy cả stack vào — set, hai đôi và top pair — bạn được ==6 + 9 + 21 = 36 combo, 57,1%==, nhiều hơn mức 42,2% bet lớn.

Dấu hiệu lộ ra là **số combo không phải số nguyên**: 26,4 bet lớn và 36,6 bet nhỏ. Nếu cả nhóm bài được gán cho một size, cả hai số đều phải là số nguyên. **Cùng một tay bài đang pha trộn giữa hai size**, và 42,2% nghĩa là "42,2% của range" — chứ không phải "một tầng bài cụ thể". Làm cho size không thể đọc được chính là mục đích.

## Button thật ra đang cầm gì?

**Gần một nửa range call của nó — 46,2% — là đôi tẩy không chứa A cũng không chứa K** — nên nó đi thẳng vào một board có cả hai lá đó.

![Thành phần range trên pot 3-bet flop A-high: big blind giữ mọi combo set, còn range của button dồn cục ở các đôi tầm trung](/images/gto-3bp-ace-king-ranges-en.webp "Pot 3-bet A-K-2 · big blind giữ phần đỉnh của board, còn range của button dồn vào khúc giữa")

Underpair (đôi tẩy thấp hơn lá cao nhất trên board) chiếm 46,2%, tức 60 combo: từ QQ xuống 33, mười đôi, mỗi đôi sáu combo. Trên kết cấu này chúng không thể call cả flop lẫn turn.

Một lưu ý đáng nêu rõ: 130 combo đó là **range call mà lần giải này được cho sẵn** — một thiết lập preflop viết vào cây, không phải một cách phòng thủ do solver tự tìm ra. Đối thủ thật thường fold (bỏ bài) các đôi tẩy tầm trung và thay vào đó call bằng A-Q, A-J và K-Q. Trước người chơi như vậy, con số 46,2% không còn — nên hãy xem đối thủ của bạn thực sự đã call bằng gì trước khi mang những con số này ra một ván live.

## Button phản ứng thế nào trước c-bet một phần ba pot?

**Đây là spot khó để call đến cùng.** Các underpair của button có cả A lẫn K nằm phía trên, và ở SPR 4,0 không còn bao nhiêu quãng đường trước khi stack cạn.

⚠ Cú bet *nào* là all-in tùy vào size. Ở mức hai phần ba, đó là 14,9 → 34,5 → 39,6, đúng ba cú. Ở cú bet **7,4bb (một phần ba)** mà phần này bàn tới, ba cú bet cộng lại ==7,4 + 12,3 + 20,4 = 40,1bb==, chỉ 45% stack. Và node turn không tồn tại trong lần giải này — Spot mẫu dừng ở hành động đầu tiên của flop, nên mọi thứ từ đây là đọc ra từ thành phần range.

Trước 7,4bb vào pot 22,5bb, để một cú bluff thuần không kiếm được lời cần khoảng ==22,5 ÷ (22,5 + 7,4) = 75,3%== range — đó là **tần suất phòng thủ tối thiểu (MDF)**. Nhưng những tay của button thực sự dính với A-K-2 cộng lại chỉ có ==20,8 + 11,5 + 6,9 + 2,3 = 41,5%==. 🪶 Lưu ý rằng 2,3% set là **22** — nó ăn đôi với lá 2, không phải với A hay K. Nếu chỉ đếm những tay ăn đôi với A hoặc K thì được **39,2%**.

⚠ **Tuy vậy, trong spot này, tiền đề của MDF đứng trên nền yếu.** MDF là tần suất khiến một **cú bluff thuần có equity bằng 0** hòa vốn — mà range bet của big blind chứa **0,0% chưa thành bài, không một combo nào.** Một range không có tay nào chưa ăn đôi thì để lại rất ít kiểu bluff thuần mà MDF giả định, nên xu hướng nghiêng về fold **nhiều hơn**, không phải ít hơn. ⚠ Có hai điều kiện giữ cho nhận định đó trung thực: ① "0% chưa thành bài" không phải "0% bluff" — một underpair yếu trong range bet có thể đang làm việc của một cú bluff hoặc một cú bet bảo vệ; ② node phản ứng của button không có trong lần giải này, nên tần suất phòng thủ tối ưu thực tế không thể xác nhận ở đây. Vì vậy đừng đọc 41,5% thành "vậy thì đi tiếp với các đôi tẩy tầm trung". Việc size nhỏ có thực sự khiến 60 combo đó đáng call hay không cũng đáng ngờ: trước toàn bộ range của big blind, chỉ QQ và JJ có hơn mức 19,8% mà nó đòi hỏi, trong khi 99 xuống 33 nằm ở 7,6%–9,2%. Dù sao đi nữa, lý do của size là **hình dạng range** ở phần trước; đây chỉ là tác dụng phụ.

:::note[⚠ MDF đơn giản hóa cú bet thành một cú bluff thuần. Nó chỉ có ý nghĩa khi đối thủ thực sự có bluff — khi range bet là từ một đôi trở lên đến tận đáy, như ở đây, giả định bluff thuần đứng trên nền yếu và con số chỉ là một chỉ dẫn thô. Trong thực tế, hãy cân nhắc thêm tay bài trụ được tốt thế nào ở các vòng sau.]:::

## Vì sao EQR là 109,6% khi big blind không có vị trí?

**Vì một lợi thế range đủ lớn sẽ nặng ký hơn vị trí.** Đây là spot đầu tiên trong loạt bài mà người chơi OOP thu về nhiều hơn equity của mình — 68,9% so với 31,1% là một khoảng cách ở cấp độ khác với các pot raise đơn, nơi người chơi OOP ở mức **45,1%–48,5%** so với **51,5%–54,9%**.

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | **68,9%** | 31,1% |
| EV (bb) | 16,99 | 5,51 |
| **Equity realization (EQR)** | **109,6%** | 78,7% |

Trong pot 22,5bb, equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) 68,9% đáng giá ==22,5 × 68,9% = 15,50bb==. Big blind thực tế thu về **16,99bb**, và ==16,99 ÷ 15,50== chính là equity realization (EQR — phần equity bạn thực sự thu về) của nó: **109,6%**.

:::pull[Vị trí khuếch đại một lợi thế. Nó không tự tạo ra lợi thế.]:::

Mức 78,7% của button không phải bằng chứng riêng cho điều đó — nó là cùng một sự thật nhìn từ phía bên kia, vì hai EV cộng lại bằng pot, nên EQR của một người vượt 100% thì buộc EQR của người kia xuống dưới. Điều đáng nhìn là độ lớn của khoảng cách. Qua ①–⑦, người chơi OOP thu về từ **77,9% đến 93,2%**; ở đây nó vượt 100%, vì mọi thứ button fold đều rơi vào stack của big blind. Vì sao vị trí thường đáng tiền được bàn trong [chơi theo vị trí](/vi/blog/holdem-position-play).

## Ra bàn thật thì chơi khác gì?

- **Thôi phân vân có nên c-bet (cược tiếp tục) trong pot 3-bet hay không — nhưng chỉ khi heads-up.** Trên một board khô A-high mà bên 3-bet giữ phần đỉnh, cả range đều bet, và câu hỏi duy nhất là size. Nếu có một người cold-call đi theo và ba người cùng xem flop, "bet tất cả" không còn đúng nữa; với mỗi người chơi thêm, hãy bỏ các underpair trước.
- **Đếm SPR trước khi flop ra.** Pot lớn hơn nghĩa là còn ít cú bet hơn, không phải ít tiền hơn. **SPR 4 là dải mà ba cú bet lớn kết thúc stack** — không có cú thứ tư. Đếm số cú bet bạn còn, rồi mới chọn size.
- **★Bet cả range không giống với đẩy cả stack bằng cả range.** 38,1% số bài bet ở đây là đôi tẩy thấp hơn lá K. Ngay trong nhóm đó cũng tách ra: QQ thắng hơn một nửa range call của button và là tay nên check ở turn, còn TT và 99 là những tay đầu tiên phải bỏ khi gặp raise (tố).
- **★Top pair tách theo kicker.** 21 combo đó bao gồm **A5s và A4s** — những tay được 3-bet làm blocker, với kicker tệ nhất có thể. Range sẵn sàng call hết 89bb thì hẹp — **22 và A-K là lõi**, kèm một top pair mạnh như A-Q tùy đối thủ. **A-4 không thắng được tay nào trong đó.** Các set (AA, KK) thắng tất cả. **A-K nằm ở giữa**: nó chia pot với A-K của button và thua 22, nên "SPR 4 thì cứ đẩy hết" chỉ đúng vô điều kiện với **AA và KK** — còn A-K có thuộc nhóm đó hay không tùy vào đối thủ call rộng đến đâu.
- **★Nếu flop bị raise, ván bài kết thúc ngay tại đó.** Ở SPR 4, một cú raise cam kết phần stack còn lại. Đây không phải spot để call rồi xem turn: hãy quyết định jam hay fold ngay tại chỗ — set thì đẩy vào, underpair thấp và top pair kicker yếu nghiêng về fold. ⚠ Đó là một nguyên tắc rút ra từ SPR và các nhóm bài, không phải đầu ra của solver: ví dụ này không có node đối mặt với raise, nên ranh giới chính xác giữa jam/call/fold không thể xác nhận. Hai đôi (A-K) tùy vào range raise rộng đến đâu: trước một range raise gồm set và A-K, nó không bao giờ dẫn trước.
- **Đừng mang "check 0%" sang mọi pot 3-bet.** Thứ thay đổi nó là board nhiều hơn là range: cùng range 3-bet trên [8-5-2](/vi/blog/3bet-pot-low-board) check 2,0%, và trên một board quay lưng với bên 3-bet thì cú check xuất hiện thật sự. **"Một lá A và một lá K cùng lúc" là thứ tạo ra con số không này trong ví dụ này — không phải điều kiện mà mọi pot 3-bet đều phải đáp ứng.** Cách xây range 3-bet ngay từ đầu nằm trong [chiến thuật 3-bet](/vi/blog/holdem-3bet).

:::readnext[Đọc tiếp]
/vi/blog/low-board-check-raise | Cả hai range đều không có sảnh | /images/gto-srp-low-rainbow-oop-en.webp
/vi/blog/paired-board-strategy | Bạn cầm nhiều trips hơn — mà vẫn check 97% | /images/gto-srp-paired-oop-en.webp
:::

## Tự kiểm tra

Mở [GTO poker solver miễn phí](/vi/solver), vào **Spot mẫu → Board A-high, lợi thế của bên 3-bet → [⚡ Xem kết quả]**.

Hãy nhìn phần đầu trước: **Pot 22,5bb · Stack 89bb**. Thấy hai con số đó thay vì 5,5bb và 97,5bb của các spot trước là đã thấy toàn bộ bài viết này chỉ trong một cái liếc. Sau đó hãy tìm hàng không có mặt: bảng «Tay bài / Draw» chỉ liệt kê **năm** nhóm cho big blind, và nhóm vắng mặt là "Chưa thành bài". Phía trên, trong dải hành động, chip check ghi **0,0% / 0,0 combo**.

Rồi mở **Trainer GTO** ở thanh bên: nó chia cho bạn một tay bài theo đúng trọng số range thực tế và cho thấy hành động của bạn tốn bao nhiêu big blind. Miễn phí, không cần cài đặt, không cần tài khoản.

## Câu hỏi thường gặp

**Q. SPR là viết tắt của gì trong poker?**

A. Đó là stack-to-pot ratio — tỷ lệ stack trên pot. Thứ nó đo trong thực tế là còn lại bao nhiêu cú bet chứ không phải bao nhiêu chip — cùng một buy-in 100bb cho bạn 4,0 ở đây và 17,7 trong một pot raise đơn, và hai con số đó chơi chẳng giống nhau chút nào. Hãy đọc nó như số quyết định bạn vẫn còn nắm trong tay.

**Q. Với SPR 4 thì bet được bao nhiêu lần?**

A. Ba lần, và lần thứ ba là all-in. Hai phần ba pot ở flop và turn chạy 14,9 → 34,5bb, và 39,6bb còn lại là khoảng một phần ba pot river — nên cú bet thứ ba vừa đúng phần còn lại của stack 89bb. Dừng sau hai cú thì bạn đã bỏ vào 49,4bb — nhỉnh hơn một nửa. Chọn size lớn hơn thì bạn tới đó chỉ trong hai cú — và đó chính là điểm mấu chốt: size bạn chọn quyết định bạn còn nắm bao nhiêu quyết định.

**Q. Người 3-bet có nên luôn c-bet không?**

A. Trên board này thì có — solver check 0,0%. Nhưng điều kiện nằm ở board nhiều hơn ở range: cùng range 3-bet trên 8-5-2 có 48,2% A-high mà vẫn chỉ check 2,0%, trong khi một board có lợi cho bên call sẽ sinh ra những cú check thật sự. Thứ tạo ra con số không cụ thể này là một lá A và một lá K cùng xuất hiện, tước phần đỉnh của range khỏi tay người đã call.

**Q. Vì sao button không có pocket A hay pocket K?**

A. Range call của ví dụ này không chứa chúng — phần lớn AA và KK đi 4-bet. Đó là một thiết lập preflop viết vào cây, không phải điều solver tự tìm ra, và các lần giải thật đôi khi giữ lại vài combo trong range call để bảo vệ phần đỉnh của nó. Thay đổi điều đó thì hàng set cũng thay đổi theo.

**Q. Vì sao size nhỏ được dùng nhiều hơn size lớn?**

A. Vì hình dạng của range — cả 63 combo đều từ một đôi trở lên, nên phần đáy đã biến mất và range không bao giờ tách thành kiểu "nut hoặc không có gì", và một range như vậy thì bet nhỏ. **Không phải vì stack nông:** [spot Q-10-7](/vi/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp") có cùng SPR 4,0 và dùng size lớn 98,4% số lần.

**Q. Những con số này có đúng ở stake tôi đang chơi không?**

A. Hãy dùng chúng làm mốc khi điều kiện khớp. Lần giải này chỉ cho phép hai cỡ bet, một phần ba và hai phần ba pot, nên trong một ván có dùng overbet thì tần suất sẽ chia khác đi. Điều tương tự cũng đúng với một range 3-bet hay độ sâu stack khác, và phép tính không bao gồm rake (phí sòng).
`.trim(),
};

export default POST;
