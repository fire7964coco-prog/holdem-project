import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑩ 베트남어판 — 8♦5♣2♠ 3벳팟 (BB 3벳터 vs BTN 콜러)
 * 출처 = EN 마스터 lib/posts-en/3bet-pot-low-board.ts (기준 해시 b57cb658 · EN updated 2026-10-02) 축어 · 수치 구분자만 vi.
 * 키워드 = polarized range (10) · 3bet pot (10) — docs/vi-lanes/gto-brief.md ⑩ (L-G 축어 · 재조사 0).
 * 알려진 한계: 이미지 = vi 캡처(-vi.webp) — 2026-10-10 헤드 교체(queue §2-AS H-1).
 * 🔴 드로우 3행 상호배타 · 58,3% missed ≠ fold · Set/Trips 행은 852에서 set만 · EQR ≠ 팟 점유율(6,1điểm).
 */
export const POST: Post = {
  slug: "3bet-pot-low-board",
  title: "Ba combo trúng flop — mà vẫn bet 97,8%",
  seoTitle: "Trượt board mà vẫn bet 97,8% — Range phân cực (polarized)",
  desc: "Pot 3-bet trên 8-5-2: chỉ ba combo trong range big blind có đôi với board — mà vẫn nã hai phần ba pot 97,8% số lần. Range phân cực là gì và vì sao bet lớn.",
  tldr: "Sau khi big blind 3-bet và button call, flop 8♦5♣2♠ nhận một cú bet hai phần ba pot với tần suất 97,8%. Điểm lạ: trong 83 combo của big blind, đúng ba combo có đôi với board — A5s — và không có 88, 55 hay 22 nào trong range cả. Nó vẫn bet vì range chia thành 36 combo overpair và 40 combo ace-high, ở giữa gần như chẳng có gì — chỉ ba combo A5s. Range có hình phân cực thì bet lớn.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 phút",
  emoji: "🎲",
  image: "/images/gto-3bp-low-oop-vi.webp",
  imageAlt: "Kết quả GTO solver của HoldemMaster cho flop rainbow 8-5-2 trong pot 3-bet, lưới bài của big blind gần như phủ kín màu của cỡ bet lớn",
  tags: ["polarized range", "range phân cực", "dry board poker", "pot 3-bet", "chiến lược overpair", "ví dụ solver"],
  content: `
Flop ra **8♦ 5♣ 2♠**. Bạn đã 3-bet trước flop, board khô hết mức có thể, và trong tay bạn là A-K. Không có đôi, không có gì hơn mấy cửa backdoor draw. **Đây là lúc check nghe có vẻ hiển nhiên.**

Solver làm điều ngược lại. **Nó bet 14,9bb — hai phần ba pot — với tần suất 97,8%.** Và đây không phải nhận định riêng về A-K. Trong 83 combo (tổ hợp bài) của big blind (BB — mù lớn), số combo thực sự *có đôi* với board này là ==ba==.

Vì sao một range không trúng gì lại nã cỡ bet lớn — các con số dưới đây trả lời điều đó. Tất cả đều lấy từ [GTO poker solver miễn phí](/vi/solver) của HoldemMaster.


:::stripe
Spot | BB 3-bet → BTN call (heads-up)
Flop | 8♦ 5♣ 2♠ (rainbow, không liền nhau)
Pot · stack | Pot 22,5bb · stack hiệu dụng 89bb · **SPR 4,0**
Kết quả | Hai phần ba pot 97,8% — ba combo có đôi với board này
:::

> **Trả lời nhanh**
> Trên 8-5-2 trong pot 3-bet, big blind bet **hai phần ba pot với tần suất 97,8%**. Thế nhưng trong 83 combo của nó chỉ **ba combo — A5s — có đôi với board**, còn 88, 55 và 22 hoàn toàn không có trong range. Cú bet vẫn được tung ra vì range chia thành **36 combo overpair (43,4%) và 40 combo ace-high (48,2%)**, ở giữa gần như chẳng có gì. Hoặc rất mạnh hoặc chẳng có gì — khi phần giữa trống rỗng, size sẽ tăng lên.

## Những con số này đến từ điều kiện nào?

Cùng thiết lập pot 3-bet như các spot (tình huống ra quyết định) [A-K-2](/vi/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-vi.webp") và [Q-10-7](/vi/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-vi.webp"). Chỉ có board thay đổi.

| Mục | Thiết lập |
|---|---|
| Preflop | BTN open → **BB 3-bet lên 11bb** → BTN call |
| OOP · IP | OOP (out of position — không có vị trí) = big blind (bên 3-bet) · IP (in position — có vị trí) = button (bên call) |
| Flop | 8♦ 5♣ 2♠ (ba chất khác nhau) |
| Pot · stack | Pot 22,5bb · stack hiệu dụng 89bb (**SPR 4,0** — SPR là stack hiệu dụng chia cho pot) |
| Cỡ bet | Khoảng một phần ba pot (7,4bb) và hai phần ba (14,9bb) |
| Rake | Không tính rake |
| Kiểm tra ngày | 2026-08-08 (kết quả Spot mẫu) |

Pot 22,5bb là ==11 tiền 3-bet + 11 tiền call + 0,5 của small blind đã fold==. Màn hình hiển thị theo **big blind** — EV đọc là "EV (bb)" và mỗi cú bet hiện số tiền kèm tỷ lệ so với pot.

## Người 3-bet thật sự bet bao nhiêu phần trăm?

**Cỡ bet lớn, với tần suất 97,8%.** Gần như y hệt board ướt ở spot trước (98,4%).

| Hành động đầu tiên của BB | Tần suất | Combo |
|---|---|---|
| Bet 14,9bb (66% pot) | **97,8%** | 81,1 |
| Check | 2,0% | 1,7 |
| Bet 7,4bb (33% pot) | 0,3% | 0,2 |

Đây là chỗ kỳ lạ. **[Q-10-7](/vi/blog/3bet-pot-bet-sizing), ngập trong draw, và board này, gần như không có draw nào, lại dùng cùng một size với tần suất gần như bằng nhau.** Ở spot trước, cỡ bet lớn có mặt để bắt draw của đối thủ trả giá. Ở đây không có draw nào để bắt trả giá. **Lý do khác nhau; kết luận thì không.**

## Thật sự chỉ có ba combo có đôi với board này?

**Đúng — ba combo A5s.** Trải toàn bộ 83 combo ra:

| Nhóm | Tỷ lệ | Combo | Gồm những gì |
|---|---|---|---|
| Overpair | 43,4% | 36 | AA · KK · QQ · JJ · TT · 99 |
| Ace-high | 48,2% | 40 | AK 16 · AQ 16 · AJs 4 · A4s 4 |
| Second pair (5) | 3,6% | 3 | **A5s** |
| King-high | 4,8% | 4 | KQs |
| **Set/trips** | **0%** | **0** | 88, 55 và 22 không nằm trong range 3-bet |
| **Top pair (8)** | **0%** | **0** | Không tay nào trong range cầm lá 8 |

Các tổ hợp ra số nguyên. 36 combo overpair (đôi tẩy cao hơn mọi lá trên board) là sáu đôi tẩy từ 99 đến AA, mỗi đôi sáu combo. **Mọi đôi tẩy cao hơn 8 đều thành overpair — board thấp là như vậy.** A5s có ba combo chứ không phải bốn vì lá 5♣ đã nằm trên board, chỉ còn A♠5♠, A♥5♥ và A♦5♦.

Cũng có đúng một gutshot (sảnh hở giữa). **Bốn combo A4s** chỉ cách sảnh thấp nhất A-2-3-4-5 (wheel) đúng một lá — lá 3. Bảng draw của solver chia thành ba hàng loại trừ lẫn nhau: **gutshot 4,8% · backdoor flush 16,9% (14 combo) · không draw 78,3%.** Điều đó *không* có nghĩa "78,3% là phần còn lại sau khi trừ gutshot". Phải cộng cả ba hàng mới ra 100, và backdoor 16,9% nằm giữa hai hàng kia (nó cần runner-runner cùng chất, nên chỉ thành khoảng 4,2% số lần).

## Trượt board rồi, vì sao vẫn bet lớn?

**Vì range chia thành "rất mạnh" và "chẳng có gì", phần giữa trống rỗng.** Khi phần giữa biến mất, size tăng lên.

36 combo overpair chiếm trọn phần đỉnh range của big blind. **Cầm AA hay KK, những tay duy nhất thắng bạn là chín combo set (cầm đôi trên tay + 1 lá trên board) của button.** Ở đầu kia, 40 combo ace-high gần như không thắng được gì khi lật bài **trước range chịu call (theo) một cú bet lớn** — dù trước toàn bộ 144 combo của button thì bức tranh khác, vì 58,3% trong số đó cũng trượt board này.

⚠ Tuy vậy, đừng coi các overpair là một khối. Button cũng có overpair của riêng mình — 16,7%, 24 combo QQ, JJ, TT và 99 — nên 99 của big blind thua 18 combo trong số đó, TT thua 12, JJ thua 6. **Thứ hạng vẫn chạy ngay bên trong hàng "overpair".**

| Hình dạng range | Size |
|---|---|
| Mạnh, trung bình và yếu trải đều (bet cả range) | Nhỏ — các tay trung bình cần được call |
| **Mạnh hoặc chẳng có gì (range phân cực — polarized)** | **Lớn — không có phần giữa thì chẳng có gì để bảo vệ** |

SPR 4 cho thấy cỡ bet đó đi được bao xa — nó không phải *lý do* của cỡ bet, lý do là hình phân cực ở trên. Với chỉ 89bb phía sau, **hai lần hai phần ba pot rồi phần còn lại ở river là vừa khít hết stack**: 14,9bb ở flop, 34,5bb ở turn, 39,6bb ở river. Hai cú đầu cộng lại ==14,9 + 34,5 = 49,4bb==, tức 55,5% của stack 89bb.

⚠ **Điều đó không giống với "bắt đầu nhỏ thì mất đường đưa hết stack vào".** Không hề. Bắt đầu với 7,4bb: bị call, pot là 37,3 với 81,6 phía sau; hai phần ba pot ở turn là 24,6, còn pot 86,5 và stack 57,0; cú all-in 57,0 ở river bằng 65,9% pot. **Và dù sao size cũng không do độ sâu stack quyết định** — [board A-K-2](/vi/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-vi.webp") có cùng SPR 4,0 và dùng size **nhỏ** với tần suất 57,8%. Thứ tạo ra cỡ bet lớn ở đây là range phân cực, không phải SPR.

Và 40 combo ace-high **thắng ngay khi đối thủ fold (bỏ bài).** 58,3% range của button là ace-high, king-high hoặc chưa thành bài trên board này. ⚠ Tuy nhiên "trượt" không phải "fold" — **node mô tả cách button phản ứng trước cú bet không có trong lần tính này**, nên không có tần suất fold nào rút ra từ đó, và các ace-high của button chạy từ A-K xuống A-T, vẫn giữ được chút giá trị khi lật bài. Khi nào bluff thực sự có lãi được bàn trong [chiến thuật bluff](/vi/blog/holdem-strategy).

## Vì sao toàn bộ set lại nằm bên kia?

**Vì 88, 55 và 22 không nằm trong range 3-bet, nhưng lại nằm trong range call.** Đây là spot đầu tiên trong loạt bài này mà phần đỉnh của board thuộc trọn về người chơi IP.

![Infographic thành phần range so sánh các nhóm bài của big blind và button trên board 8-5-2 trong pot 3-bet](/images/gto-3bp-low-ranges-vi.webp "8-5-2 trong pot 3-bet · chia theo nhóm — set chỉ có ở button, big blind có nhiều overpair hơn hẳn (36 combo so với 24)")

| Nhóm | BB (bên 3-bet) | BTN (bên call) |
|---|---|---|
| **Set/trips** | **0,0%** | **6,3%** (9 combo) |
| Overpair | **43,4%** | 16,7% |
| Top pair (8) | 0,0% | 2,1% |
| Second pair (5) | 3,6% | — |
| Underpair | — | **16,7%** |
| Ace-high | **48,2%** | 36,1% |
| King-high · chưa thành bài | 4,8% | **22,2%** |

Chín combo của button là 88, 55 và 22, mỗi loại ba combo — mỗi lá trên board chiếm một lá cùng hạng, nên mỗi đôi tẩy giảm từ sáu combo xuống ba. 🪶 Cả bảng này lẫn màn hình solver đều gọi hàng này là **"Set/Trips"** (trên app tiếng Việt là «Xám»). Trên 8-5-2 chỉ có thể là **set**, vì board không có đôi (trips nghĩa là cầm một lá của board có đôi). Nhãn app được trích nguyên văn — hãy đọc nó là *set*.

**Hình dạng này có ý nghĩa ngoài bàn thật.** Toàn bộ set nằm bên kia, và big blind không có gì cao hơn chúng — nên overpair của nó ở đây không phải là nut.

⚠ Đừng biến điều đó thành "nếu bị raise lại, overpair chẳng thắng được gì". Có hai lý do. Thứ nhất, **node phản ứng trước một cú raise (tố) không có trong lần tính này** — Spot mẫu dừng ở hành động đầu tiên trên flop. Thứ hai, điều đó vốn dĩ cũng không đúng: để raise trước một cú bet cả range 97,8%, bạn cần trộn bluff cùng giá trị (chín combo set), và **AA cùng KK thắng mọi thứ trong range raise đó trừ chín combo ấy.**

## Vì sao người call hiện thực hóa equity ở đây tốt hơn hai spot trước?

**Mức hiện thực hóa của button leo lên 90,3% trong cùng cấu trúc pot 3-bet.** Ở hai spot trước nó là 78,7% và 75,1%. ⚠ Không phải chỉ riêng button đi lên — hai EV (giá trị kỳ vọng) cộng lại bằng pot, nên **khi equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) được giữ cố định, phần một bên được thêm trong mức hiện thực hóa chính là phần bên kia mất đi.** Giữa các board khác nhau thì equity cũng dịch chuyển, nên mối liên hệ đó không tự động — nhưng ở đây nó đã xảy ra như vậy: big blind giảm từ 117,8% xuống 106,9%. Ít nhất ở đây, đó là hai mặt của cùng một sự thật.

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 58,6% | 41,4% |
| EV (bb) | 14,09 | 8,41 |
| **EQR** | **106,9%** | **90,3%** |

| Pot 3-bet, ba board | EQR của BB | EQR của BTN |
|---|---|---|
| A♦K♠2♥ khô (⑧) | 109,6% | 78,7% |
| Q♥10♥7♠ hai chất (⑨) | 117,8% | 75,1% |
| **8♦5♣2♠ thấp (⑩)** | **106,9%** | **90,3%** |

Lý do nằm ở chỗ các set trú ngụ. **Button là người chơi duy nhất có thể cầm set**, và chín combo đó ăn trọn cả stack. 16,7% underpair (đôi tẩy thấp hơn lá cao nhất trên board) của nó — 77, 66, 44, 33 — cũng đang dẫn trước ace-high, nên chúng có lý do để trả tiền cho cú bet.

**Board thấp là nơi người 3-bet vẫn dẫn trước nhưng chuyển lợi thế đó thành tiền kém nhất.** Equity 58,6% của nó thậm chí nhỉnh hơn chút so với 58,3% ở Q-10-7, trong khi **equity realization (EQR — phần equity bạn thực sự thu về)** giảm từ 117,8% xuống 106,9%. ⚠ Đừng đọc mức dịch chuyển 15,2 điểm phần trăm ở phía **button** (⑨ 75,1% → ⑩ 90,3%) là "phần đối thủ mang về nhà" — EQR là tỷ lệ equity *được hiện thực hóa*, không phải phần chia của pot. Theo phần chia thực tế, button ở đây ghi ==8,41 ÷ 22,5 = 37,4%== so với ==7,04 ÷ 22,5 = 31,3%== của ⑨ — chênh lệch **6,1 điểm**.

## Ra bàn thật thì chơi khác gì?

- **Đừng mặc định "trượt rồi thì check" trên board thấp khô.** Trong pot 3-bet, đối thủ của bạn cũng trượt — **58,3%** range của button không ra đôi ở đây. ⚠ Đừng quy đổi 58,3% đó thành tỷ lệ fold; node phản ứng không có trong lần tính này. Lý do để bet không phải "họ sẽ fold" mà là **"range của tôi phân cực, nên cỡ bet lớn xứng đáng với vai trò của nó."**
- **Nhưng đừng coi overpair là nut khi bị raise lại.** Cả chín combo set đều ở bên kia, và button còn có 24 combo từ QQ xuống 99. **99 và TT của bạn là những overpair thua overpair.**
- **Trước người hiếm khi fold, hãy cắt bớt phần ace-high.** Con số 97,8% dựa trên việc phần lớn range đối thủ đã trượt. ⚠ Nhắc lại, "58,3% trượt" không phải "58,3% fold" — lần tính này không cho ra tần suất fold nào, và 36,1% ace-high của button là họ A-K, A-Q, A-J, A-T, không có A yếu nào. 🪶 Trước cú bet 14,9bb vào pot 22,5bb, tần suất phòng thủ tối thiểu (MDF) là **60,2%**, nhưng đó là **điểm xuất phát, không phải chỉ tiêu call** — MDF coi cú bet là bluff thuần với equity bằng 0, trong khi range bet ở đây chứa 36 combo overpair, nên giả định đó không đứng vững. Mức phòng thủ tối ưu thật sự có nằm dưới nó hay không là câu hỏi mà lần tính này không trả lời. Trước một calling station, bắn ace-high hai lần rồi ba lần sẽ biến toàn bộ phần bluff thành lỗ; thay vào đó hãy thu hẹp về các overpair để lấy giá trị.
- **Ngồi ở button, đôi tẩy nhỏ ở đây đáng giá hơn bất cứ đâu trong loạt bài này.** 88, 55 và 22 thành set, còn 77, 66, 44 và 33 đều dẫn trước ace-high. Đó là điều hoàn toàn ngược với [spot A-K-2](/vi/blog/3bet-pot-cbet), nơi các underpair bất lực. Cách xây range 3-bet quyết định điều này, và nó nằm trong [chiến thuật 3-bet](/vi/blog/holdem-3bet "thumb:/images/holdem-3bet-hero.webp").
- **Đếm SPR trước khi bet.** Ở SPR 4, hai lần hai phần ba pot (14,9 → 34,5) cộng cú all-in 39,6 ở river làm hết vừa khít 89bb. Một khi đã bet flop, phần còn lại của stack chỉ cách một hoặc hai cú bet nữa, nên hãy quyết định trước cú bet đầu tiên rằng bạn sẽ tiếp tục bắn ở những turn và river nào — turn và river không có trong lần tính này, và một runout hay một đối thủ vẫn có thể thay đổi câu trả lời.

:::readnext[Đọc tiếp]
/vi/blog/3bet-pot-bet-sizing | Một size, 98,4% số lần — Q-10-7 trong pot 3-bet | /images/gto-3bp-dynamic-oop-vi.webp
/vi/blog/blind-battle-cbet | Người không có vị trí lại bet trước — 67,4% số lần | /images/gto-sb-king-mid-oop-vi.webp
:::

## Tự kiểm tra

Mọi con số ở đây đều hiện ra nếu bạn mở [GTO poker solver miễn phí](/vi/solver) và vào **Spot mẫu → "Board thấp khô" → [⚡ Xem kết quả]**. Muốn chơi chính spot này như một bài tập, hãy mở [Trainer GTO](/vi/solver) từ thanh bên — nó chia cho bạn một tay bài ngẫu nhiên, và khi bạn chọn hành động, nó hiện tần suất pha trộn cùng **EV mất** (bb) của lựa chọn đó. Lịch sử của bạn mặc định được lưu trên thiết bị này; đăng nhập tài khoản HoldemMaster để lưu vào tài khoản và học tiếp trên thiết bị khác — đăng nhập là tùy chọn, mọi tính năng đều dùng được khi không đăng nhập.

Hãy tìm **hàng "Set/Trips" bị thiếu** (trên app là «Xám») trong bảng «Tay bài / Draw». Rồi chuyển người chơi sang **IP (BTN (bên call))**, hàng đó xuất hiện với 6,3%. Một dòng ấy kể trọn câu chuyện ai đang nắm phần đỉnh của board này. Miễn phí, không cần cài đặt, không cần tài khoản.

**Q. Trong pot 3-bet, có nên c-bet A-K trên board thấp không?**

A. Có — nên c-bet (cược tiếp tục). Trên 8-5-2, A-K không có đôi và không có draw ngay (chỉ có backdoor draw — sảnh thấp nhất (wheel) runner-runner, cộng backdoor flush cho ba combo cùng chất), vậy mà solver đặt 97,8% range vào cỡ bet lớn. Lý do là range của big blind **phân cực — overpair hoặc ace-high, chia gần như làm đôi** — và khi phần giữa trống rỗng thì size tăng lên, gần như toàn bộ range dùng nó. Việc 58,3% range đối thủ không ra đôi có giúp ích, nhưng đừng đọc nó là "58,3% fold"; node phản ứng không có trong lần tính này.

**Q. Range phân cực (polarized) là gì?**

A. Là range chỉ gồm những tay rất mạnh và những tay chẳng có gì, thiếu phần giữa. Ở đây big blind có 43,4% overpair và 48,2% ace-high, ở giữa gần như chẳng có gì. Không còn tay trung bình nào cần được call, nên cũng không còn lý do để giữ size nhỏ.

**Q. Vì sao người 3-bet không có set nào?**

A. Vì các đôi tẩy nhỏ như 88, 55 và 22 thường được call hoặc fold preflop chứ không 3-bet. Vì vậy cả chín combo set trên board này đều nằm ở button. Đó là lý do cảm giác "tôi áp đảo trong pot 3-bet" chao đảo trên một flop thấp.

**Q. Có thể bê nguyên những con số này ra bàn live không?**

A. Hãy dùng chúng làm mốc khi điều kiện khớp. Nếu range 3-bet của bạn trộn thêm đôi tẩy nhỏ hoặc suited connector, thành phần range trên board này sẽ thay đổi và cách chia size cũng đổi theo. Phép tính không tính rake (phí sòng).
`.trim(),
};

export default POST;
