import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑦ 베트남어판 — 6♠5♥2♦ flop rainbow thấp (vi-gto 레인 B · 2026-10-10)
 *
 * 출처 = EN 마스터 lib/posts-en/low-board-check-raise.ts (updated 2026-10-02 · 기준 해시 b57cb658) 축어.
 * 브리프 = docs/vi-lanes/gto-brief.md ⑦ · 확정 카피(title·seoTitle·desc·tldr·tags·H2·FAQ) 축어.
 * 키워드 = check raise · check raise là gì · check raise trong poker · check raise poker (계획 §3-C ⑫ 주인).
 * 🔴 두 솔브를 섞지 마라: 사전 계산 Spot mẫu(root 96,8/3,2) vs 2026-08-20 별도 재솔브(check-raise 절 · root lead 2,0).
 * 현지 추가: 정의 H2 «Check-raise trong poker là gì?» + holdem-betting-actions 링크 1 · FAQ «Tỷ lệ check-raise bao nhiêu là hợp lý?» 1.
 * §0-0 정정: EN L220 «Nine combos each» → «mỗi bên chín combo».
 * 이미지 = EN 경로(-en.webp) · vi 캡처 생성 뒤 일괄 교체(헤드 요청).
 */
export const POST: Post = {
  slug: "low-board-check-raise",
  title: "Cả hai range đều không có sảnh",
  seoTitle: "Chẳng ai có sảnh — Khi nào nên check-raise trong poker",
  desc: "Trên 6-5-2 chỉ một tay bài làm được sảnh, và chẳng ai cầm nó. Nên big blind check 96,8%, để dành hết cho cú check-raise. Khi nào nên check-raise trong poker?",
  tldr: "Trên flop rainbow thấp 6♠5♥2♦, big blind check 96,8% và chỉ lead 3,2% — dù 48,3% equity của nó là mức cao thứ hai trong bảy spot mà nó phòng thủ. Chỉ một tay bài làm được sảnh ở đây, 4-3, và không range nào cầm nó. Không ai có đầu mạnh nhất của board, nên không ai lead khi không có vị trí. Hành động đến sau: solve lại cùng cây bài này để xem tiếp sau flop, và big blind check-raise một cú bet 1,8bb với tần suất 14,9%, phần lớn bằng draw.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "11 phút",
  emoji: "🌊",
  image: "/images/gto-srp-low-rainbow-oop-en.webp",
  imageAlt: "Kết quả solver HoldemMaster cho flop rainbow thấp 6♠5♥2♦: lưới 13x13 của big blind gần như phủ kín màu xanh check, chỉ có một dải cam mỏng là các cú lead",
  tags: ["check raise poker", "check raise là gì", "khi nào nên check-raise", "wet board poker", "flop rainbow thấp", "gutshot", "ví dụ solver"],
  content: `
Flop là **6♠ 5♥ 2♦**. Ba lá thấp, ba chất khác nhau — tức một board rainbow (3 lá khác chất): không có flush draw (chờ thùng), và muốn có thùng (flush) thì phải cần cả hai lá còn lại.

Trông nó giống đúng kiểu board mà big blind (BB — mù lớn) nên tấn công. Equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) của big blind ở đây là **48,3%** — cao thứ hai trong bảy spot (tình huống ra quyết định) của loạt bài này mà nó phòng thủ, hơn cả [flop A-high](/vi/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp") với 45,1% và flop K-high với 46,3%.

Vậy mà nó chỉ lead (donk bet — bet trước vào người đã raise preflop) **3,2%** số lần.

Lý do nằm ở một tay bài. **Đúng một tổ hợp làm được sảnh (straight) trên 6-5-2, và không người chơi nào có nó.** Mọi con số dưới đây đến từ [GTO poker solver miễn phí](/vi/solver) của HoldemMaster.


:::stripe
Spot | BTN open 2,5bb → BB call (heads-up)
Flop | 6♠ 5♥ 2♦ (thấp, rainbow)
Pot · stack | Pot 5,5bb · stack hiệu dụng 97,5bb (SPR khoảng 17,7)
Kết quả | BB check 96,8% — equity cao, nhưng không có lợi thế ở đầu mạnh nhất
:::

> **Trả lời nhanh**
> Hãy check, rồi ra đòn ở cú raise. Equity không phải thứ cho bạn quyền bet trước — lợi thế ở đầu mạnh nhất của range mới là thứ đó, và board này không cho bên nào có nó. Khi button bet, big blind được làm người tấn công: nó check-raise với mọi set nó có, và lấp phần còn lại của cú raise bằng draw sảnh — nhóm bài mà nó có nhiều hơn button, và cũng là nhóm nó thật sự đem ra dùng ở đây.

## Check-raise trong poker là gì?

> **Trả lời nhanh**
> Check-raise là khi bạn check lúc tới lượt mình, rồi raise khi đối thủ phía sau bet. Đây là một hành động hợp lệ trong luật bàn chơi thông thường — phần luật được giải thích trong bài [các hành động cược](/vi/blog/holdem-betting-actions). Cú check-raise đáng dùng khi range của bạn có những tay bài hưởng lợi từ pot lớn hơn, cùng đủ draw để cân bằng chúng. Bài này cho thấy trên 6-5-2, big blind gần như không bet trước mà dồn toàn bộ sự hung hăng vào cú check-raise.

## Những con số này đến từ điều kiện nào?

Button (BTN) open lên 2,5bb, big blind call (theo), những người còn lại fold (bỏ bài). Hai người chơi, pot 5,5bb, còn 97,5bb phía sau. **Một điểm khác so với các spot trước trong loạt bài này: chỉ có một cỡ bet.**

| Thiết lập | Giá trị |
|---|---|
| Preflop | BTN open 2,5bb · BB call · những người còn lại fold |
| Range | Xấp xỉ range online tiêu chuẩn 100bb |
| Flop | 6♠ 5♥ 2♦ (rainbow — ba chất khác nhau) |
| Pot · stack | Pot 5,5bb · stack hiệu dụng 97,5bb (SPR — stack hiệu dụng chia cho pot — khoảng 17,7) |
| Cỡ bet | Khoảng 33% pot — **chỉ một size** |
| Rake | Không tính rake |
| Kiểm tra ngày | 2026-08-20 |

Pot 5,5bb là ==2,5 open + 2,5 call + 0,5 của small blind đã fold==, và stack hiệu dụng là ==100 − 2,5 = 97,5bb==.

**Việc chỉ có một cỡ bet rất quan trọng khi bạn đọc màn hình.** Các spot trước có 33% và 75%; spot này được giải chỉ với 33%, nên **không có hàng "Bet 4,1bb" nào trong kết quả.** Không có gì bị thiếu — lựa chọn đó chưa bao giờ nằm trong cây bài.

## Big blind check bao nhiêu phần trăm trên 6-5-2?

**96,8%.** Trong 487 combo (tổ hợp bài), 15,3 được đem ra bet và 471,7 check.

| Hành động đầu tiên của BB | Tần suất | Combo |
|---|---|---|
| Check | **96,8%** | 471,7 |
| Bet 1,8bb (33% pot) | **3,2%** | 15,3 |

3,2% đó không phải một tay bài cụ thể thử ăn pot. Nó được rải mỏng khắp range — đúng hình dạng của một hành động gần như bàng quan: solver đang nói với bạn rằng quyết định này hầu như chẳng đáng gì, chọn bên nào cũng vậy.

## Vì sao big blind lead 3,2% ở đây nhưng 23,7% trên 9-8-7?

**Vì equity và quyền bet trước là hai thứ khác nhau.** Xếp bảy spot cạnh nhau, thứ hạng xáo trộn hoàn toàn.

| Flop | Bài | Equity của BB | Lead của BB |
|---|---|---|---|
| Q♠J♦10♠ broadway (hai chất) | ③ | 46,7% | 0,1% |
| K♠8♦3♣ khô | ② | 46,3% | 0,2% |
| A♥7♦2♣ khô | ① | 45,1% | 1,9% |
| 6♣6♦3♥ có đôi | ⑥ | 47,2% | 3,0% |
| **6♠5♥2♦ rainbow thấp** | **⑦** | **48,3%** | **3,2%** |
| Q♠9♠2♠ monotone | ⑤ | 47,7% | 11,2% |
| 9♥8♥7♣ liền nhau | ④ | 48,5% | 23,7% |

Board có equity thấp nhất (45,1%) lại lead nhiều hơn board broadway (46,7%). [Flop monotone](/vi/blog/monotone-board-strategy) có equity **thấp hơn** board này — 47,7% so với 48,3% — mà lead nhiều hơn gấp ba lần.

Giờ đặt ⑦ cạnh ④. Chênh lệch equity là **0,2 điểm phần trăm**. Chênh lệch lead là **3,2% so với 23,7%.**

**Khác biệt nằm ở sảnh.** Trên [9-8-7](/vi/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp"), big blind mang vào 24 combo sảnh đã thành — J-T, T-6 đồng chất và 6-5 đồng chất. Trên 6-5-2, tay bài duy nhất hoàn thành sảnh là **4-3**, lấp đầy ==2-3-4-5-6==. Để làm sảnh ở đầu bên kia, bạn cần 7, 8 và 9 — **ba lá, trong khi bạn chỉ cầm hai.**

Mà 4-3 không nằm trong range nào cả. **Bảng phân loại của solver hoàn toàn không có hàng "Sảnh"**, và ô 43s, 43o bị tô xám trong cả hai ma trận — tay bài này không bao giờ đi tới spot này, dù đồng chất hay khác chất.

:::pull[Trên board này chỉ một tay bài làm được sảnh, và chưa người chơi nào từng được chia nó.]:::

## Hai range khác nhau ở đâu trên 6-5-2?

**Big blind thắng ở các đôi và thua ở mọi thứ phía trên chúng.** Nó có nhiều top pair, nhiều second pair và nhiều đôi yếu hơn button; set và hai đôi (two pair) thì ngang nhau tuyệt đối; còn overpair (đôi tẩy cao hơn mọi lá trên board) của nó chỉ được khoảng một nửa của button. Gần ba phần tư của cả hai range không có đôi nào — chính điều đó khiến đây là cuộc đấu overcard (lá cao hơn board) chứ không phải cuộc đấu giá trị, và vì thế tay bài thắng cuối cùng thường là tay vẫn còn đang chờ bài để hoàn thành.

![Thành phần range trên board rainbow thấp, big blind hơn ở các đôi còn button hơn ở overpair](/images/gto-srp-low-rainbow-ranges-en.webp "6♠5♥2♦ · thành phần range — big blind hơn ở các đôi, button hơn ở overpair")

| Nhóm | BB (OOP — out of position, không có vị trí) | BTN (IP — in position, có vị trí) |
|---|---|---|
| Xám | 1,8% | 1,8% |
| Hai đôi | 0,4% | 0,4% |
| Overpair | 4,9% | **9,5%** |
| Top pair (một lá 6) | **7,4%** | 5,4% |
| Second pair (một lá 5) | **6,2%** | 4,2% |
| Đôi yếu | **3,7%** | 2,4% |
| Underpair | **2,5%** | 2,4% |
| A-high | 23,0% | **28,6%** |
| K-high | **15,6%** | 14,3% |
| Chưa thành bài | **34,5%** | 31,0% |

Cộng top pair, second pair và đôi yếu lại, big blind dẫn **17,3% so với 12,0%**. Đó là lợi thế thật — nhưng là sai loại lợi thế để *lead*, vì không tay nào trong số đó muốn bơm pot khi OOP ở hành động đầu tiên. Chúng là những tay check-call và check-raise.

Hai hàng giải thích toàn bộ spot:

- **Hàng "Xám" là 1,8% cho cả hai người chơi.** 🪶 Đó là nhãn của app, trích đúng như bảng hiển thị — 6-5-2 không có đôi, nên thứ hàng này thật sự chứa là **set** (cầm đôi trên tay + 1 lá trên board); trips (1 lá trên tay + board có đôi) chỉ có khi board có đôi. Chỉ 66, 55 và 22 làm được nó, và mỗi loại có đúng ==3 combo== vì trên board có sẵn một lá của mỗi hạng. Mỗi bên chín combo. **Tay mạnh nhất trên flop này được chia đều làm đôi.**
- **Overpair là 4,9% so với 9,5%** — gần gấp đôi. Overpair ở đây là mọi đôi tẩy lớn hơn lá 6, tức 77 tới AA. Big blind 3-bet JJ trở lên trước flop, nên nó chỉ còn **77 tới TT, ngoài ra không có gì.** Button giữ trọn phần trên của danh sách đó.

## Vì sao equity 48,3% mà EQR chỉ có 84,3%?

**Vì equity là thứ bạn sở hữu, còn EQR là thứ bạn thu về.**

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48,3% | 51,7% |
| EV (bb) | 2,24 | 3,26 |
| **Equity realization (EQR)** | **84,3%** | **114,7%** |

Trong pot 5,5bb, 48,3% equity đáng giá ==5,5 × 48,3% = 2,66bb==. Big blind thực tế thu về **2,24bb** — EV (giá trị kỳ vọng) của nó — và ==2,24 ÷ 2,66== chính là equity realization (EQR — phần equity bạn thực sự thu về) của nó: **84,3%**. 51,7% của button đáng giá 2,84bb và nó thu về 3,26bb — **114,7%**. (Nếu tự chia các số đã làm tròn, bạn sẽ lệch một phần mười điểm; solver tính từ các giá trị chưa làm tròn.)

Con số nên đem ra so là [flop A-high](/vi/blog/a-high-board-cbet), nơi big blind có **45,1%** equity và hiện thực hóa **84,0%**. Ở đây equity nhiều hơn ba điểm, mà phần giữ lại gần như y hệt. Trong khi đó big blind hiện thực hóa **93,2%** trên 9-8-7 — vì trên flop đó nó có sảnh, nên nó có thể bet ngay cả khi không có vị trí.

**Khi range của bạn không có lợi thế ở đầu mạnh nhất, vị trí đáng giá hơn ba điểm equity.** Toàn bộ khoảng cách nằm ở đó.

## Khi nào nên check-raise trên flop này?

**Khi button bet, và thường xuyên.** Trước cú bet 1,8bb, big blind raise với tần suất **14,9%**.

:::note[⚠ **Phần này đến từ một lần giải riêng, không phải kết quả tính sẵn của ví dụ.** Spot mẫu công khai trong app chỉ có flop — nó dừng ở quyết định đầu tiên và các nút hành động không bấm được, nên phản ứng trước một cú bet không có trong đó. Để có chúng, chúng tôi dựng lại đúng cây bài đó (bet 33%, raise 60%, pot 5,5bb, stack 97,5bb) và cho chạy: **190 vòng lặp, exploitability 0,16 theo đơn vị nội bộ của engine (phần mười big blind) — tức 0,016bb, bằng 0,29% của pot 5,5bb.** Mọi con số trong hai bảng dưới đây đều từ lần chạy đó, không phải từ Spot mẫu.]:::

Trước hết, button làm gì khi được check tới lượt:

| BTN sau khi BB check | Tần suất | Combo |
|---|---|---|
| Bet 1,8bb (33% pot) | **63,0%** | 316,5 |
| Check-back | 37,0% | 186,5 |

Rồi tới câu trả lời của big blind:

| BB trước cú bet 1,8bb | Tần suất | Combo |
|---|---|---|
| **Raise lên 7,3bb** | **14,9%** | 69,7 |
| Call | **65,6%** | 314,6 |
| Fold | 19,5% | 93,2 |

(Một điểm lệch đáng nói rõ: ở node này, phần trăm của app và số combo của chính nó hơi lệch nhau — 69,7 combo là ==69,7 ÷ 477,5 = 14,6%== của 477,5 combo đi tới node này, không phải 14,9%. Các phần trăm ở trên được trích đúng như bảng hiển thị. Khoảng lệch là một phần ba điểm và không thay đổi gì, nhưng nếu bạn tự chạy và ra 14,6% thì đó là lý do.)

Có hai điều đáng để ý.

**Cú raise là 60% pot, không phải raise bằng pot.** Rất dễ hiểu ngược điểm này. Raise lên 7,3bb đúng là khớp với số đang có ở giữa bàn — ==5,5 + 1,8 = 7,3== — nhưng raise *bằng pot* nghĩa là raise theo pot **sau khi** bạn đã call: ==5,5 + 1,8 + 1,8 = 9,1==, tức đưa bạn lên **10,9bb**. Thực chất 7,3 là: ==(7,3 − 1,8) ÷ 9,1 = 60%== pot, khớp với cỡ raise 60% trong cây bài, và nhỉnh hơn bốn lần cú bet một chút (==7,3 ÷ 1,8 = 4,06==).

**Big blind chỉ fold 19,5%,** nghĩa là nó đi tiếp **80,5%** số lần. Trước cú bet 1,8bb vào pot 5,5bb, ngưỡng phòng thủ hòa vốn — tần suất phòng thủ tối thiểu (MDF) — là ==5,5 ÷ (5,5 + 1,8) = 75,3%==: phần range bạn phải giữ lại để một cú bluff thuần túy không thể in tiền. Solver vượt qua ngưỡng đó, vì một board thấp và khô như thế này cho gần như mọi tay bài một thứ gì đó để bám trụ.

:::note[Một lưu ý thẳng thắn về lần chạy đó: tần suất lead ở **root** của nó ra **2,0%** thay vì 3,2% của Spot mẫu, trên 9,5 combo thay vì 15,3. Mọi thứ khác — các nhóm bài, draw, equity, EV và EQR — khớp tới từng chữ số thập phân. Lead ở đây là một quyết định có EV gần bằng 0, nên nó trôi giữa các lần giải. Hãy coi 3,2% và 2,0% là cùng một câu trả lời: *gần như không bao giờ*. Lần chạy của chính bạn cũng sẽ rơi đâu đó trong khoảng ấy.]:::

## Những tay bài nào tạo nên cú check-raise?

**Mọi set, cả hai combo hai đôi, và sau đó gần như chỉ toàn draw sảnh.**

Chúng tôi đọc hết 487 hàng của bảng theo từng tay bài, chứ không chỉ màn hình đầu tiên. Sắp theo tần suất raise, phần đầu danh sách tách ra gọn gàng một cách bất thường.

| Tay bài | Là gì | Tỷ lệ raise |
|---|---|---|
| 66 · 55 · 22 | Sám cô (three of a kind) — **cả chín combo** | **100%** |
| 65s | Hai đôi — chỉ có 6♦5♦ và 6♣5♣, vì 6♠ và 5♥ đã nằm trên board | **100%** |
| 64s | Top pair **kèm** gutshot (sảnh hở giữa) | **100%** — hai trong ba combo của nó |
| 98s | Gutshot chờ lá 7 — equity **35,8%** | 99%+ |
| 87s | Sảnh hở hai đầu (OESD), chờ lá 4 hoặc lá 9 — equity **46,2%** | 80%–83% |
| J4s · Q4s | Gutshot chờ lá 3, ngoài ra không có gì | 67%–90% |
| 54s | Second pair kèm gutshot | 74%–75% |

Đọc cột thứ hai từ trên xuống, quy luật hiện ra không thể bỏ sót. **Dưới mức hai đôi, mọi tay ở phần đầu danh sách này đều cầm draw sảnh** — hai tay có thêm một đôi (64s và 54s) raise nhờ draw đi kèm, không phải nhờ đôi:

- **98s** cầm 5-6-8-9 và cần lá ==7==.
- **87s** cầm 5-6-7-8 và ăn được ==lá 4 hoặc lá 9== — OESD duy nhất **trong range này**. ⚠ Không phải OESD duy nhất mà board cho phép: **74 làm thành 4-5-6-7** và chờ lá 3 hoặc lá 8, một OESD chuẩn sách giáo khoa, còn 84 là double gutshot với cùng tám outs. Con số 0,8% trong bảng draw nghĩa là range của solver này không có 74 đồng chất, chứ không phải board chỉ có một OESD.
- **J4s, Q4s, 54s và 64s** đều cầm 2-4-5-6 và cần lá ==3==.

**Không một tay nào ở phần đầu danh sách được chọn vì lá cao.**

Bảy hàng đó là phần đầu của danh sách đã sắp xếp, và chúng chiếm khoảng 30 trong 69,7 combo raise. Phần còn lại của cú raise đến từ cùng range ở tần suất thấp hơn — điều nên biết trước khi bạn kết luận rằng *không có gì khác* từng raise ở đây.

Và hãy nhìn xem phần giá trị nhỏ đến mức nào. Set và hai đôi cộng lại là **2,2%** range — ==2,2% × 487 ≈ 11 combo== — trên tổng 69,7 combo raise. Kể cả khi tính thêm hai tay bắt đôi với board, **chưa tới một trong bốn combo raise là bài đã thành.** Đó là lý do cú raise vẫn hiệu quả khi bị call: phần lớn range đã bỏ tiền vào vẫn còn có thể cải thiện.

Và draw sảnh là thứ solver chọn để tiêu lợi thế gutshot đó — nhóm bài mà big blind có nhiều hơn button.

| Draw | BB | BTN |
|---|---|---|
| OESD | 0,8% | 0,8% |
| **Gutshot** | **18,5%** | 13,9% |
| Backdoor flush | **20,5%** | 18,5% |
| Không draw | 60,2% | **66,8%** |

**Gutshot: 18,5% so với 13,9%.** Với set chia đều ở 1,8% và overpair là 4,9% so với 9,5%, hàng gutshot là nơi phần lớn range raise đến từ đó — solver dựa vào nhóm bài mà big blind có nhiều hơn, dù không phải toàn bộ nhóm đó đều raise: 18,5% của 487 là khoảng 90 combo gutshot, nhiều hơn tổng 69,7 combo raise, và ngay cả J4s và Q4s ở gần đầu danh sách cũng chỉ raise 67%–90%.

## 6-5-2 là board ướt hay board khô?

**Khô ở đỉnh, ướt ở giữa.** **Board ướt** (wet board) là board phát ra nhiều draw — những lá nối được thành sảnh hoặc thùng, để các tay đang bị dẫn vẫn có đường thắng. Board khô (dry) gần như không cho draw nào. Trên 6-5-2, sự phân biệt này cắt theo cả hai hướng cùng lúc, nên chỉ riêng cái nhãn không nói được gì ở đây.

Không có flush draw, và — như đã nói ở trên — không có sảnh hoàn chỉnh nào nằm trong range của ai. Theo nghĩa đó board khô khốc: trần là set, và cả hai người chơi chạm tới đó thường xuyên như nhau.

Nhưng **19,3% range của big blind cầm draw sảnh** (0,8% OESD cộng 18,5% gutshot), và thêm 20,5% có backdoor flush draw. Chỉ 60,2% không có cả hai. Vậy là rất nhiều tay bài có lý do để đi tiếp dù chưa thành gì.

Sự kết hợp đó — trần thấp và sàn rộng — tạo ra các con số ở trên. Không ai bet được một tay quái vật vì không ai có, và không ai fold nhiều vì gần như ai cũng có outs. Một board như [Q♠9♠2♠](/vi/blog/monotone-board-strategy) thì ngược lại: trần cao, và cả hai người chơi đều sợ người kia đã chạm tới. Thứ bạn bet được đi theo trần, không theo sàn — cùng nguyên tắc mà bài hướng dẫn về [c-bet (cược tiếp tục)](/vi/blog/holdem-continuation-bet) phân tích trên các kiểu board khác.

## Ra bàn thật thì chơi khác gì?

- **Đừng lead board rainbow thấp chỉ vì bạn "trúng gì đó".** Equity 48,3% không phải là lý do. Trên 6-5-2 cả range chỉ lead 3,2%, và những tay đang làm vậy cũng gần như chẳng gắn bó gì với lựa chọn đó. Cú lead ở đây chỉ có một size, một phần ba pot, nên button chỉ cần **19,8%** equity để call — và các tay A-high, K-high của nó, cộng lại **42,9%** range, đều vượt qua ngưỡng đó. Bạn không đẩy chúng fold được, còn những gì call bạn thì có lẫn cả những tay thắng bạn.
- **Check-raise với set của bạn, tất cả.** Cả chín combo set đều raise 100% số lần. Slow-play set ở đây — khi button có đúng bằng ngần ấy set — là vứt đi cái pot lớn duy nhất mà bạn đáng lẽ sẽ thắng.
- **Chọn bluff theo draw, không theo lá cao.** Range raise được dựng từ gutshot. Một tay A-high không có draw — A-J, A-9 — thuộc về range call, tức 65,6%, chứ không phải raise. (A-K không bao giờ tới được spot này: range phòng thủ của big blind dừng ở A-J.)
- **Đừng fold quá nhiều trước cú bet nhỏ.** Trước 1,8bb vào pot 5,5bb, solver giữ lại **80,5%** range, trên ngưỡng hòa vốn 75,3%. Fold K-high và đôi yếu trước một cú bet nhỏ là thói quen dễ bị khai thác nhất trên một board như thế này.

:::readnext[Đọc tiếp]
/vi/blog/paired-board-strategy | Bạn cầm nhiều trips hơn — mà vẫn check 97% | /images/gto-srp-paired-oop-en.webp
/vi/blog/monotone-board-strategy | Thùng nut mà bảy trên mười lần vẫn check | /images/gto-srp-monotone-oop-en.webp
:::

## Tự kiểm tra

Mở [GTO poker solver miễn phí](/vi/solver), rồi vào **Spot mẫu → Board thấp rainbow (3 lá khác chất) → [⚡ Xem kết quả]**.

Thứ cần tìm là thứ *không* có ở đó: **cuộn bảng «Tay bài / Draw» và tìm hàng "Sảnh" bị thiếu.** Rồi mở ma trận và nhìn ô 43s và 43o — bị tô xám ở cả hai người chơi. Sự vắng mặt đó chính là toàn bộ bài viết này.

Muốn tới được các con số check-raise, bạn phải đi thêm một bước, vì Spot mẫu chỉ có flop. Bấm «**Tự giải spot này**», giữ nguyên cây bài nó nạp vào, và cho chạy. Khi chạy xong, bấm **Check** rồi **Bet** trên dải phía trên.

Sau đó mở **Trainer GTO** ở thanh bên: nó chia cho bạn một tay bài theo đúng trọng số range thật và cho biết hành động của bạn mất bao nhiêu big blind (**EV mất**). Miễn phí, không cần cài đặt, không cần tài khoản.

## Câu hỏi thường gặp

**Q. Khi nào nên check-raise trong poker?**

A. Khi range của bạn có những tay bài hưởng lợi từ pot lớn hơn và đủ draw để cân bằng chúng. Trên 6♠5♥2♦, đó là 14,9% range của big blind trước cú bet 1,8bb: mọi set, cả hai combo hai đôi, và một khối gutshot. Câu hỏi để thử không phải "tôi có bài tốt không" mà là "tay này có muốn pot lớn lên không, và tôi có tìm được những cú bluff sẽ cải thiện khi bị call không?"

**Q. Vì sao big blind không bet trước trên board thấp?**

A. Vì equity không phải thứ cho bạn quyền bet trước — lợi thế ở đầu mạnh nhất của range mới là thứ đó, và board này không cho bên nào có nó. Set chia đều 1,8% với 1,8%, và tổ hợp duy nhất thắng được chúng, 4-3, nằm ngoài cả hai range. Không có tay nào thắng được tay mạnh nhất của đối thủ thì chẳng có gì để bơm pot, nên big blind chỉ lead 3,2%.

**Q. Equity gần như bằng nhau, vì sao chiến lược lại khác hẳn 9-8-7?**

A. Vì phần đầu của range quyết định ai bet trước, không phải mức trung bình của nó. Trên 9-8-7, big blind mang vào 24 combo sảnh đã thành; trên 6-5-2, không range nào có sảnh. Equity chỉ cách nhau hai phần mười điểm, mà tần suất lead ra 23,7% so với 3,2%.

**Q. Nên check-raise bằng những tay bài nào trên 6-5-2?**

A. Cả chín combo set (66, 55, 22), cả hai combo 65 đồng chất, rồi đến draw sảnh: 98s với gutshot chờ lá 7, 87s với OESD, và J4s, Q4s, 54s, 64s với gutshot chờ lá 3. Không tay nào được chọn vì lá cao — ngoài set và 65 đồng chất, cú raise chủ yếu dựa vào draw.

**Q. Check rồi raise lại có được phép không, và có bị coi là bất lịch sự?**

A. Được phép ở gần như mọi casino và trong các game online tiêu chuẩn — chỉ một ván chơi riêng tại nhà mới có thể còn giữ luật riêng của nhà — và bản thân luật này được giải thích trong bài [các hành động cược](/vi/blog/holdem-betting-actions). Nỗi lo về phép lịch sự là thứ sót lại: một số ván chơi tại nhà ngày xưa cấm check-raise bằng luật riêng, và tiếng xấu sống lâu hơn cả luật. Ngày nay ít ván chơi theo cách đó, và các con số ở trên là lý do — bỏ check-raise khỏi lối chơi của big blind trên flop này là bạn xóa đi 14,9% range của nó mà không có gì thay thế.

**Q. Tỷ lệ check-raise bao nhiêu là hợp lý?**

A. Không có một con số chung cho mọi tình huống. Trên spot này, trước cú bet 1,8bb, big blind check-raise 14,9% — kết quả của lần giải riêng ở trên — và phần lớn cú raise đó là draw, sau mọi set và cả hai combo hai đôi. Tỷ lệ phụ thuộc vào spot và cỡ bet: đổi board hay đổi size, tần suất cũng đổi theo.

**Q. Những con số này có đúng ở stake tôi đang chơi không?**

A. Hãy coi các tần suất trên trang này là mốc tham chiếu cho đúng các điều kiện tương ứng: heads-up, 100bb, button open 2,5bb với range phòng thủ tiêu chuẩn, không tính rake (phí sòng). Có một chi tiết riêng của ví dụ này — spot được giải chỉ với một cỡ bet 33%, nên solver không bao giờ được chọn size lớn hơn. Với hai size, tần suất có thể dịch chuyển — ở đây chỉ phiên bản một size được giải.
`.trim(),
};

export default POST;
