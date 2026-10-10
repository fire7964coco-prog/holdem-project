import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑥ 베트남어판 — 6♣6♦3♥ 페어 보드 (vi-gto 레인 B · 2026-10-10)
 * 출처 = EN 마스터 lib/posts-en/paired-board-strategy.ts (updated 2026-10-02 · 기준 해시 b57cb658) 축어 · 수치는 EN 값 그대로(구분자만 vi).
 * 키워드 = poker trips vs set · set trong poker · paired board poker · mdf poker (docs/keyword-bank/vi-serp/L-G-gto.md).
 * 🔴 «set poker»(칩 세트 쇼핑)·set/trips 통칭 단독어 금지. 지어낸 경험담 금지(GTO 시리즈 예외).
 * 의도적 EN 차이(§2-AO 선반영): EN L219 note «within a tenth of a point» → «lệch trong vòng vài phần mười điểm»(AO-3) ·
 *   «four ranges out of five» → «bốn phần năm của mỗi range».
 * 이미지 = EN 경로(-en.webp) — vi 캡처 생성 후 헤드가 -vi로 교체.
 */
export const POST: Post = {
  slug: "paired-board-strategy",
  title: "Bạn cầm nhiều trips hơn — mà vẫn check 97%",
  seoTitle: "Nhiều trips hơn mà vẫn check 97% — Flop có đôi 6-6-3",
  desc: "Trên 6-6-3 người call cầm nhiều trips hơn người raise — 26 combo so với 20 — mà vẫn check 97%. Flop có đôi thật sự thưởng cho ai: trips, set hay pocket pair?",
  tldr: "Trên flop có đôi thấp 6♣6♦3♥, big blind check 97,0%. Điều lạ là nó cầm nhiều trips hơn button: 26 combo 6-x so với 20. Nó vẫn check, vì chỉ 18,4% range có gì đó hơn đôi trên board, còn 81,6% còn lại là cuộc đấu bài cao mà button thắng. Thứ thật sự lên giá là bất kỳ pocket pair nào trên 6 — TT ở đây có 76,0% equity.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 phút",
  emoji: "👯",
  image: "/images/gto-srp-paired-oop-en.webp",
  imageAlt: "Kết quả GTO solver của HoldemMaster cho flop có đôi thấp 6♣6♦3♥: lưới bài của big blind gần như phủ kín màu xanh check, bảng bên cạnh có hàng tứ quý và cù lũ",
  tags: ["poker trips vs set", "set trong poker", "paired board poker", "pocket pair", "mdf poker", "ví dụ solver"],
  content: `
Flop là **6♣ 6♦ 3♥** — toàn lá nhỏ, và có một đôi trong đó. Nhìn qua giống một board chẳng ai trúng gì.

Cầm TT ở đây, equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) của bạn là **76,0%**. Cũng TT ấy, preflop gặp AK chỉ khoảng 54%–57%, nên flop này còn *tốt hơn* cho nó so với một ván "đồng xu" thông thường. Cầm A9 thì bạn chẳng có gì — nhưng bốn phần năm range của đối thủ cũng chẳng có gì hơn đôi trên board, nên fold (bỏ bài) ngay là vứt pot đi.

**Một board không ai trúng thật ra là cuộc đấu xem lá cao của ai tốt hơn.** Flop [A-high](/vi/blog/a-high-board-cbet) và [K-high](/vi/blog/k-high-board-cbet) là cuộc tranh xem ai khớp được với board; còn đây là cuộc đấu giữa hai range phần lớn đều trượt. Mọi con số solver dưới đây đến từ [GTO poker solver miễn phí](/vi/solver) của HoldemMaster; các xác suất như 17,2% khả năng flop ra đôi là tổ hợp thuần túy.


:::stripe
Spot | BTN open 2,5bb → BB call (heads-up)
Flop | 6♣ 6♦ 3♥ (board có đôi thấp)
Pot · Stack | Pot 5,5bb · stack hiệu dụng 97,5bb
Kết quả | BB check 97,0% — dù đang cầm nhiều trips hơn
:::

> **Trả lời nhanh**
> Check gần như mọi thứ, và đừng fold chỉ vì bạn trượt board. Cầm một lá 6 không phải lý do để lead (donk bet — bet trước vào người đã raise preflop) — lead chỉ đuổi đi những tay bạn vốn đã thắng, nên các tay có lá 6 ở lại trong range check, và big blind check **97,0%** ở đây. Những tay thật sự lên giá trên flop này là các pocket pair cao hơn 6, còn A-high không nên tự động fold trước một cú bet nhỏ — phòng thủ tối ưu rộng đến đâu chính xác thì Spot mẫu này không cho thấy.

## Những con số này đến từ điều kiện nào?

Button (BTN) open lên 2,5bb, big blind (BB — mù lớn) call (theo), những người còn lại fold — hai người chơi, pot 5,5bb, còn 97,5bb phía sau, range online 100bb tiêu chuẩn, hai cỡ bet có sẵn ở khoảng một phần ba và ba phần tư pot, và không tính rake (phí sòng). Đổi range hay sizing thì tần suất cũng đổi theo.

| Thiết lập | Giá trị |
|---|---|
| Preflop | BTN open 2,5bb · BB call · những người còn lại fold |
| Range | Xấp xỉ range online tiêu chuẩn 100bb |
| Flop | 6♣ 6♦ 3♥ (board có đôi, ba chất khác nhau) |
| Pot · Stack | Pot 5,5bb · stack hiệu dụng 97,5bb |
| Cỡ bet | Khoảng 33% và 75% pot |
| Rake | Không tính rake |
| Kiểm tra ngày | 2026-08-20, kết quả Spot mẫu |

## Trips hay set? Trên board có đôi, đó là trips

**Set là pocket pair khớp với một lá trên board; trips là một lá trên tay khớp với đôi đã nằm trên board.** Hai thứ cùng một hạng — sám cô (three of a kind), xếp chung trong [thứ tự tay bài poker](/vi/blog/holdem-hand-rankings) — nhưng cách chơi hoàn toàn khác nhau.

Trên mọi flop không có đôi trong loạt bài này, sám cô nghĩa là set (board có đôi còn lại, A♠A♥6♦, nằm ở nhóm blind đối đầu blind phía sau): trên A-7-2, big blind cần 77 hoặc 22 trên tay. Ở đây board tự mang theo một đôi, nên **chỉ cần một lá 6 bất kỳ là thành trips**, và chỉ 66 trên tay mới thành tứ quý.

| Tay bài của bạn trên 6♣6♦3♥ | Bạn có |
|---|---|
| A6, K6s, 96s … bất kỳ tay nào có một lá 6 | **Trips** — ba lá 6 |
| 66 | **Tứ quý** |
| 33 | **Cù lũ** — ba lá 3 kèm đôi 6 |
| TT, 99, 88, 77 … | **Hai đôi** — đôi của bạn cộng đôi 6 trên board |

Khác biệt đó quan trọng vì trips phổ biến hơn set rất nhiều và **đối thủ của bạn cũng dễ cầm nó y như bạn.** Set hiếm và thường là tay mạnh nhất; còn trips trên board có đôi (paired board) là vùng đất chung, và đó chính là lý do solver không coi nó là giấy phép để bet.

## Big blind chơi flop có đôi thấp thế nào?

**Check 97,0%.** Trên 6♣6♦3♥, big blind chỉ lead tổng cộng 3,0% số lần — 2,0% với 4,1bb và 1,0% với 1,8bb — và trao quyền chủ động ngay lại cho người đã open. Điều đáng nhìn kỹ là khi đã bet thì nó chọn cỡ nào trong hai cỡ, vì đây là flop duy nhất trong loạt bài mà câu trả lời đảo chiều.

| Hành động đầu tiên của BB | Tần suất | Combo |
|---|---|---|
| Check | **97,0%** | 471,7 |
| Bet 4,1bb (75% pot) | **2,0%** | 9,6 |
| Bet 1,8bb (33% pot) | 1,0% | 4,7 |

**Cú bet lớn nhiều hơn cú bet nhỏ** — lần đầu tiên trong loạt bài này. Trên hai board mà việc lead thật sự có ý nghĩa, size nhỏ thắng thế với tỷ lệ hơn hai trên một: 16,8% so với 6,9% ở [spot donk bet 9-8-7](/vi/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp"), 8,0% so với 3,2% ở [flop monotone](/vi/blog/monotone-board-strategy). Ở đây nó đảo ngược, và bảng theo từng tay bài bên dưới cho thấy lý do.

## Cầm nhiều trips hơn, vì sao vẫn check?

**Vì trips chỉ chiếm 5,3% range.** 94,7% còn lại chủ yếu là chính đôi 6 của board cộng một lá cao — và trên trục đó, button đang dẫn.

Trước hết là đếm. Với 6♣ và 6♦ trên board, chỉ còn 6♠ và 6♥ — nên mọi tay 6x *đồng chất* là hai combo (tổ hợp bài), còn A6 khác chất là sáu. Cả nhóm này chỉ chạy qua đúng hai lá bài.

| Tay 6x | BB (range call) | BTN (range open) |
|---|---|---|
| A6 (đồng chất + khác chất) | ✅ 8 combo | ✅ 8 combo |
| K6s · Q6s | ✅ 4 combo | ✅ 4 combo |
| **J6s · T6s · 96s** | ✅ **6 combo** | ❌ nằm ngoài range open |
| 86s · 76s · 65s · 64s | ✅ 8 combo | ✅ 8 combo |
| **Tổng** | **26 combo = 5,3%** | **20 combo = 4,0%** |

**Khác biệt nằm ở J6s, T6s và 96s — sáu combo.** Big blind phòng thủ chúng với giá rẻ; button không bao giờ open chúng.

Giờ mở rộng tầm nhìn, và bức tranh đảo ngược.

![Đồ họa so sánh thành phần range của big blind và button theo nhóm tay bài trên board có đôi thấp](/images/gto-srp-paired-ranges-en.webp "6♣6♦3♥ · chia theo nhóm — trips nghiêng về người call, nhưng hai đôi và A-high nghiêng về người open")

| Nhóm | BB (OOP) | BTN (IP) |
|---|---|---|
| Tứ quý (66) | 0,2% | 0,2% |
| Cù lũ (33) | 0,6% | 0,6% |
| Trips (một lá 6) | **5,3%** | 4,0% |
| Hai đôi | 12,3% | **15,5%** |
| A-high | 26,3% | **31,9%** |
| K-high | **16,5%** | 15,1% |
| Chưa thành bài | **38,7%** | 32,7% |

**Những gì hơn đôi trên board chỉ chiếm 18,4% với big blind và 20,3% với button.** **81,6%** còn lại trong range big blind là chính đôi 6 của board cộng một lá cao — và button thắng cuộc đấu đó, A-high của nó là 31,9% so với 26,3%.

Lead vào thế đó thì hỏng từ cả hai đầu: có lá 6 thì bạn chỉ đuổi đi những tay bạn vốn đã thắng, còn với mọi tay khác thì bạn quảng cáo một range không chịu nổi một cú raise (tố). Vậy nên các tay có lá 6 ở lại trong range check.

## Vì sao EQR là 84 so với 115 khi equity là 47 so với 53?

**Vì board đánh trúng cả hai range theo cùng một kiểu, nhưng hai người chơi không thu về theo cùng một kiểu.** Trên 6-6-3 gần như ai cũng chỉ cầm đôi 6 của board và không gì khác, nên equity thô sát nhau. Phần mỗi bên thực sự bỏ túi thì không hề sát.

| | Big blind (OOP) | Button (IP) |
|---|---|---|
| Equity | 47,2% | 52,8% |
| EV (bb) | 2,17 | 3,33 |
| **EQR (equity realization)** | **83,7%** | **114,5%** |

Phần pot của big blind là ==5,5 × 47,2% = 2,60bb==, và nó ghi được 2,17bb — ==2,17 ÷ 2,60 ≈ 83,7%==. Đó là equity realization (EQR — phần equity bạn thực sự thu về). Phần của button là 2,90bb so với EV (giá trị kỳ vọng) 3,33bb, nên nó thu về **114,5%**, nhiều hơn phần mà equity của nó đáng được hưởng. Ở đây big blind là out of position (OOP — không có vị trí), button là in position (IP — có vị trí).

Khoảng cách **30,8 điểm** gần như đúng bằng 29,1 điểm của [board A-high khô](/vi/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp"). **Board có đôi chơi giống một board khô** — bốn phần năm của mỗi range là cùng một đôi 6 kèm một lá cao khác nhau, nên ván bài trôi lặng lẽ, và người hành động sau được thấy lá cao nào xuất hiện rồi mới chọn. Lợi thế đó là toàn bộ khoảng cách.

:::note[Mọi EQR trong loạt bài này là con số solver hiển thị. Tự chia equity và EV đã làm tròn thì kết quả lệch trong vòng vài phần mười điểm so với con số đó — đó là do làm tròn, không phải mâu thuẫn.]:::

## Pocket pair mạnh đến đâu trên 6-6-3?

**Gần như mọi pocket pair ở đây đều là hai đôi.** TT thành 10-10-6-6-3. Hai ngoại lệ là những đôi trùng với board: 66 là tứ quý, 33 là cù lũ.

| Tay bài | Equity | EV (bb) | EQR | Check |
|---|---|---|---|---|
| TT | 76,0% | 6,66 | 159,4% | 97,7% |
| 99 | 72,6% | 5,68 | 142,4% | 96,1% |
| 88 | 69,9% | 4,96 | 128,9% | 94,8% |
| 77 | 68,5% | 4,63 | 123,0% | 94,7% |
| 55 | 63,7% | 3,82 | 108,9% | 93,8% |
| 44 | 61,8% | 3,42 | 100,5% | 93,9% |
| 22 | 50,4% | 1,83 | 66,0% | 95,8% |

(Trung bình trên sáu combo của mỗi tay; từng combo lệch khoảng một phần mười điểm.)

**TT với 76,0% là đỉnh range của big blind** nếu gạt các tay có lá 6, 33 và 66 sang một bên — vì JJ trở lên đã 3-bet preflop và không bao giờ thấy flop này.

**Nhưng phần đáy thì sụp.** 44 hiện thực hóa đúng phần equity của nó — EQR 100,5% — và vẫn kiếm 3,42bb so với mức trung bình 2,17bb của range, nên đó không phải tay bên lề. 22 mới là tay gãy: equity 50,4%, EQR 66,0%, 1,83bb.

**Đường phân chia là lá 3, không phải lá 6.** 55 và 44 đều nằm dưới lá 6 mà vẫn hiện thực hóa đủ phần của mình. Lá 2 nằm dưới *cả hai* hạng trên board, nên nó thua 33, thua mọi tay có lá 3, và một lá 3 thứ hai ở turn hoặc river sẽ vô hiệu hóa (counterfeit) nó thành chơi bài board — trên 6-6-3-3-K, 22 chỉ còn là hai đôi của board (chỉ một lá 2 ở vòng còn lại mới cứu được nó). Quy tắc thật sự đúng không phải "đôi nhỏ thì ổn trên board thấp" mà là **"đôi nào trên lá 3 cũng ổn — chỉ đôi 2 là gãy."**

Còn một nhóm nữa cũng tính là hai đôi, và rất dễ bỏ sót: **mọi tay có lá 3.** A3 chơi như đôi 6 và đôi 3 kèm lá A — thắng 22 và thua mọi đôi trên lá 3.

## Ngoài kia thật sự có bao nhiêu tứ quý và cù lũ?

**Một combo tứ quý, ba combo cù lũ.** Bạn có thể tự đếm cả hai bằng tay.

- **Tứ quý (66)** — với 6♣ và 6♦ trên board, tổ hợp duy nhất còn lại là ==6♠6♥==. 0,2% của 486 combo là 1,0 — và bảng theo từng tay bài có đúng một hàng.
- **Cù lũ (33)** — với 3♥ trên board, còn lại ==3♠3♦ · 3♠3♣ · 3♦3♣==. 0,6% × 486 = 2,9.

63 cũng thành cù lũ, nhưng cả 63 đồng chất lẫn 63 khác chất đều không có trong range nào, **nên 33 là toàn bộ nhóm cù lũ** trên flop này.

Bốn combo đó giải thích vì sao board có đôi cho cảm giác nguy hiểm. Mở bảng theo từng tay bài và đọc cột EQR: 6♠6♥ hiện thực hóa **359,7%** phần equity của nó (EV 19,78bb), còn ba combo 33 chạy **309,8%, 309,8% và 309,5%** — gấp ba đến bốn lần phần pot của chúng. Hiếm — nhưng khi một trong số đó trúng, cả stack sẽ vào pot.

## Vì sao bet lớn lại phổ biến hơn bet nhỏ?

**Vì trips và tứ quý, khi đã bet, đều chọn size lớn.** Từng tay một:

| Tay bài | Bet 4,1bb (75% pot) | Bet 1,8bb (33% pot) | Check |
|---|---|---|---|
| K♠6♠ | **7,8%** | 0,3% | 92,0% |
| Q♥6♥ | **7,9%** | 0,7% | 91,5% |
| J♥6♥ | **9,0%** | 3,3% | 87,7% |
| 6♠6♥ (tứ quý) | **9,6%** | 0,0% | 90,4% |
| 10♠10♥ (hai đôi) | 0,8% | 1,7% | 97,5% |

Trips và tứ quý thỉnh thoảng cũng chọn size nhỏ — K♠6♠ 0,3%, Q♥6♥ 0,7%, J♥6♥ 3,3% — nhưng size lớn gấp mấy lần như thế. Hàng duy nhất ở mức 0,0% tròn là 6♠6♥, và **đó là tứ quý, không phải trips.** Một tay hai đôi như TT gần như không bet, và khi bet thì nó chọn size nhỏ.

Tất cả quy về chuyện đối thủ có thể call bằng gì. Một lá 6 ở đây gần như bất bại, nên mục đích là xây pot — và vì phần lớn các tay có lá 6 vẫn đang check, **số ít tay bet có mọi lý do để đi lớn.** Hai đôi đứng sau mọi tay có lá 6 và cả ba combo 33, nên nó chẳng muốn pot lớn. Nhóm muốn pot lớn thì từ chối size nhỏ; nhóm chỉ muốn được call thì từ chối size lớn.

⚠ **Đừng đọc điều này thành "kicker càng tốt, bet càng lớn" — bảng đi theo chiều ngược lại.** Tần suất bet lớn là K♠6♠ 7,8% < Q♥6♥ 7,9% < **J♥6♥ 9,0%**: kicker yếu nhất lại bet nhiều nhất. Blocker với trips cũng không giải thích được điều đó. Lá 6 nào bạn cầm cũng loại bỏ các tay trips cùng chất của button — K♠6♠, Q♥6♥ và J♥6♥ đều để lại cho button đúng 10 trong 20 combo — và kicker không loại bỏ thêm gì, vì button chỉ open K6 và Q6 đồng chất, mà lá 6 của bạn đã lấy mất chất đó. Bảng chỉ cho thấy tỷ lệ pha trộn đã tính, không tách riêng nguyên nhân của một khoảng chênh nhỏ đến vậy.

Và các tay có lá 6 không chiếm phần lớn các cú bet lớn. Chúng là 26 trong 486 combo và đóng góp khoảng 1,2 trong khoảng 9,6 combo bet lớn — chừng một phần tám (13,0%). Phần lớn còn lại đến từ những tay hoàn toàn không có lá 6.

Big blind chỉ lead 3,0% số lần, nên ở bàn bạn hiếm khi gặp tình huống này. Dù vậy đây là minh họa gọn gàng cho một nguyên lý: **sizing được chọn theo range, không theo tay bài.**

## Gặp [continuation bet](/vi/blog/holdem-continuation-bet), có nên fold ace-high không?

**Ít hơn nhiều so với cảm giác của bạn.** Chỉ 18,4% range của bạn có gì đó hơn đôi trên board, nên fold mọi thứ còn lại là dâng pot cho đối thủ.

Gặp cú bet 1,8bb vào pot 5,5bb, để một cú bluff thuần không có lời thì bạn phải tiếp tục khoảng ==5,5 ÷ (5,5 + 1,8) = 75,3%== số lần. Ước tính đó gọi là **tần suất phòng thủ tối thiểu (MDF)**.

Cộng mọi tay A-high (26,3%) và mọi tay K-high (16,5%) vào 18,4% ấy, bạn vẫn chỉ ở **61,2%**, thiếu so với 75,3%.

⚠ **Đừng nhảy từ đó sang "vậy phải phòng thủ nhiều hơn".** MDF coi cú bet của đối thủ là bluff thuần với equity bằng 0, nhưng một cú bluff ở flop vẫn còn hai vòng cược phía trước, nên nó có equity. Và người chơi không có vị trí hiện thực equity kém. ⚠ Điều Spot mẫu này không nói được là điểm tối ưu thật nằm ở đâu: nó chỉ được giải **đến hành động đầu tiên ở flop**, nên phản ứng của big blind trước một cú bet không có trong đó, và phòng thủ tối ưu nằm trên hay dưới MDF thì **không thể đọc ra từ tư liệu này.**

Vậy phép tính này có ích không phải ở chỗ "phải đạt 75%" mà ở chỗ **"đừng fold chỉ vì sức mạnh của một lá cao."** Rất nhiều tay A-high và K-high ở đây vẫn là call, và fold hết chúng trước một c-bet (cược tiếp tục) nhỏ chính là thói quen bị khai thác.

(Trên board có đôi, không ai thật sự chỉ có A-high: bạn luôn cầm đôi 6 của board. "A-high" ở đây nghĩa là đôi đó với lá A là lá cao nhất của bạn.)

:::note[MDF đơn giản hóa cú bet của đối thủ thành bluff thuần. Thực tế, tần suất đúng còn phụ thuộc vào việc tay bài của bạn hiện thực hóa equity tốt đến đâu ở các vòng sau, nên hãy dùng nó làm điểm xuất phát chứ không phải quy tắc cứng. Mặt pot odds của cùng phép tính này nằm ở [pot odds](/vi/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp"), và [phòng thủ 3-bet](/vi/blog/holdem-3bet) dùng đúng công thức đó ở preflop.]:::

## Ra bàn thật thì chơi khác gì?

- **Đừng đánh giá thấp pocket pair tầm trung trên board có đôi thấp.** 77 đến TT có equity 68%–76% ở đây, là đỉnh của range call. Nhưng phần đáy là có thật: 44 và 55 vẫn vượt mức trung bình của range, còn 22 chỉ giữ được hai phần ba giá trị equity của nó, vì nó là đôi nằm dưới cả hai hạng trên board.
- **Flop ra trips không phải lý do để lead.** Các tay có lá 6 lead 6,8% — nhiều hơn mọi tay hai đôi hay bài cao, chỉ ít hơn cù lũ 33 (8,8%) và combo tứ quý duy nhất (9,6%) — và chín trên mười lần chúng vẫn check. Lead chỉ đuổi đi những tay bạn vốn đã thắng; check để chính những tay đó tự bỏ tiền vào, và để lại cho bạn check-raise hoặc call đến cuối. ⚠ Điều lần tính này không cho biết là đường check-raise kiếm thêm *bao nhiêu*: Spot mẫu chỉ giải **hành động đầu tiên ở flop**, nên tần suất c-bet của button và EV của bất kỳ check-raise nào đơn giản là không có trong đó.
- **Đừng fold A-high trước một cú bet nhỏ.** 79,7% range của button cũng chẳng có gì hơn đôi trên board — A-high 31,9%, K-high 15,1% và chưa thành bài 32,7%.
- **Kicker quyết định ván bài.** Chỉ ba combo thắng thẳng trips — ba combo cù lũ 33. (Tứ quý thì loại khỏi bàn: một khi chính bạn cầm một lá 6, 6♠6♥ không thể tồn tại, nên bốn combo đếm ở phần cù lũ trở thành ba từ ghế của bạn.) Và ngay cả điều đó cũng chỉ đúng khi kicker của bạn là lá A. Kicker thứ hai bị cố định bởi lá 3 trên board, nên lá bài duy nhất bên cạnh lá 6 của bạn là toàn bộ ván bài: với 76s, A6, K6, Q6 và 86 của button đều đè bẹp bạn. Trips với kicker yếu là tay bắt bluff, không phải tay để xây pot.

:::readnext[Đọc tiếp]
/vi/blog/monotone-board-strategy | Thùng nut mà bảy trên mười lần vẫn check | /images/gto-srp-monotone-oop-en.webp
/vi/blog/donk-bet-strategy | Flop mà donk bet là nước đúng — 9-8-7 | /images/gto-srp-middle-connected-oop-en.webp
:::

## Tự kiểm tra

Mở [GTO poker solver miễn phí](/vi/solver), vào **Spot mẫu → Board có đôi → [⚡ Xem kết quả]**.

Điều cần nhìn là **hàng 6♠6♥ duy nhất** trong bảng theo từng tay bài — tứ quý duy nhất board này cho phép, và với **359,7%** là mức equity realization cao nhất trong cả loạt bài (thứ hai là 88 của button trong [pot 3-bet trên board thấp](/vi/blog/3bet-pot-low-board) với **346,0%**; phía big blind, hạng nhì là 6♥6♣ trên [flop thấp rainbow](/vi/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp") với **318,9%**). So nó với ba hàng 33 ngay bên dưới, bạn sẽ thấy phần đỉnh thật sự của một board có đôi chứa ít combo đến mức nào.

Sau đó mở **Trainer GTO** ở thanh bên: nó chia cho bạn một tay theo trọng số range thật và cho thấy hành động của bạn tốn bao nhiêu big blind (**EV mất**). Miễn phí, không cần cài đặt, không cần tài khoản.

## Câu hỏi thường gặp

**Q. Vì sao trên board có đôi, trips lại yếu hơn set?**

A. Vì board trao nó cho tất cả mọi người. Set cần một pocket pair khớp với một lá trên board; trips chỉ cần một lá khớp với đôi đã lộ sẵn, nên ở đây button cầm 20 combo trips so với 26 của big blind. Thêm vào đó, kicker thứ hai của bạn bị board cố định, nghĩa là một lá 6 với kicker yếu bị một lá 6 với kicker tốt hơn đè bẹp. [Thứ hạng](/vi/blog/holdem-hand-rankings) giống hệt nhau — tình huống thì không.

**Q. Pocket pair trở thành gì trên board 6-6-3?**

A. Hai đôi, trong gần như mọi trường hợp: TT chơi như 10-10-6-6-3. Ngoại lệ là 66, thành tứ quý, và 33, thành cù lũ. Nhưng không phải hai đôi nào cũng ngang nhau — 22 là đôi 2 nằm dưới cả hai lá trên board, nên nó thua mọi pocket pair khác và tụt xuống 50,4% equity.

**Q. Vì sao người call cầm nhiều trips hơn người raise?**

A. Vì big blind đã bỏ một phần tiền vào pot và phòng thủ cả những tay button không bao giờ open. J6s, T6s và 96s chính là nhóm đó — sáu combo thêm, đúng bằng toàn bộ khoảng chênh 26 so với 20. Nó vẫn check, vì trips chỉ chiếm 5,3% range của nó.

**Q. MDF (tần suất phòng thủ tối thiểu) là gì?**

A. Một ước tính về việc bạn phải tiếp tục thường xuyên đến đâu để một cú bluff thuần không thể có lời: pot ÷ (pot + bet). Gặp cú bet 1,8bb vào pot 5,5bb thì con số đó là 75,3%. Nó giả định cú bet là bluff thuần — điều hiếm khi đúng với đối thủ thật — nên nó cho bạn biết đại khái bạn không được fold bao nhiêu, chứ không phải chính xác bạn phải call bao nhiêu.

**Q. Flop ra board có đôi với tỷ lệ bao nhiêu?**

A. Khoảng **17,2%** số lần — xấp xỉ một trong sáu flop. Ba lá flop chỉ không trùng hạng nhau khi lá thứ hai tránh hạng của lá đầu và lá thứ ba tránh cả hai: ==(48 ÷ 51) × (44 ÷ 50) = 82,8%==, phần còn lại là có đôi trở lên. Vậy board có đôi không phải chuyện hiếm đến mức bạn khỏi cần lên kế hoạch — buổi chơi nào bạn cũng sẽ ngồi vào một board như thế. (Tuy vậy nó không phải sự kiện *phổ biến hơn*: một tay không phải đôi trượt flop hoàn toàn ==(44 ÷ 50) × (43 ÷ 49) × (42 ÷ 48) = 67,6%== số lần, nên nó ghép đôi **32,4%** — gần gấp đôi tần suất board ra đôi.)

**Q. Những con số này có đúng ở stake tôi đang chơi không?**

A. Hãy dùng chúng làm mốc khi điều kiện khớp: heads-up, 100bb, button open 2,5bb với range phòng thủ tiêu chuẩn, không tính rake. Có một điểm lệch đáng biết — gặp đối thủ hiếm khi c-bet trên board có đôi, lead thường hơn mức 3,0% của solver là đáng làm, vì nếu không thì pot sẽ bị check đến cuối.
`.trim(),
};
