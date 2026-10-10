import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑫ 베트남어판 — 7♦6♦5♣ blind đối đầu blind (SB 오픈 vs BB 콜)
 * 마스터 = lib/posts-en/blind-battle-connected-board.ts (EN updated 2026-10-02 · 기준 해시 b57cb658)
 * 확정 카피 = docs/vi-lanes/gto-brief.md ⑫ (Fable 1회 · Opus 측정) — B·C 변경 금지
 * 키워드: board texture poker · connected board poker · wet board poker(산문) — «blind vs blind» 단독 헤드 금지
 * 수치 = EN 축어(구분자만 vi) · 이미지 = EN 경로(-en.webp · vi 캡처 생성 후 헤드가 교체)
 * 한계: 첫 플랍 결정만 · 사이즈 33% 하나 · rake 미반영 · 체크 이후 노드 없음
 * 🔴 드로우 표 백도어 행을 빼지 마라(여섯 줄 상호배타) · 9,6%의 이유를 팟·스택·SPR(상수)에서 찾지 마라
 */
export const POST: Post = {
  slug: "blind-battle-connected-board",
  title: "Cùng ghế, cùng stack — mà cú bet rơi từ 67% xuống 9,6%",
  seoTitle: "Ba lá đổi, c-bet từ 67% còn 9,6% — Board texture poker",
  desc: "Không gì thay đổi ngoài ba lá bài. Trên 7-6-5, small blind vừa bet 67,4% ở board trước giờ chỉ bet 9,6% — bài đọc rõ nhất về board texture trong poker.",
  tldr: "Sau khi small blind open và big blind call, flop 7♦6♦5♣ chỉ nhận một cú bet 9,6% số lần và check 90,4%. Pot, stack, SPR, size bet và cả hai range đều y hệt spot trước — chỉ ba lá board thay đổi, và cú bet sụp từ 67,4% xuống 9,6%. Lợi thế range giành được ở preflop là lợi thế về bài cao, và một board thấp liền nhau xóa sạch nó. Equity đảo chiều thành 49,6% so với 50,4%, và realization của người không có vị trí rơi xuống 85,3%.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 phút",
  emoji: "🪜",
  image: "/images/gto-sb-connected-oop-en.webp",
  imageAlt: "Solver HoldemMaster trên flop 7-6-5 hai chất, lưới bài của small blind gần như phủ kín màu xanh lá của check",
  tags: ["board texture poker", "connected board poker", "flop thấp liền nhau", "chiến lược overpair", "ví dụ solver"],
  content: `
Ở spot (tình huống ra quyết định) trước, small blind (SB — mù nhỏ) bet **67,4% dù không có vị trí**. Lý do là ở ghế đó, người raise preflop cũng là người hành động trước, nên lợi thế range và thứ tự hành động rơi vào cùng một người chơi.

Vậy có phải small blind cứ thế luôn bet khi chơi blind đối đầu blind (blind vs blind)? Spot này chính là câu trả lời.

**Pot vẫn là 6bb, stack hiệu dụng vẫn 97bb, và size bet duy nhất trong cây vẫn là một phần ba pot.** Cả hai range cũng y hệt spot trước. Thứ duy nhất thay đổi là **ba lá trên board**. Và cú bet của small blind sụp xuống **9,6%**. Mọi con số dưới đây đến từ [GTO poker solver miễn phí](/vi/solver) của HoldemMaster.


:::stripe
Spot | SB open 3bb → BB call (blind đối đầu blind)
Flop | 7♦ 6♦ 5♣ (liền nhau · hai chất)
Pot · Stack | Pot 6bb · stack hiệu dụng 97bb · SPR 16,2
Kết quả | SB bet **9,6%** — chính ghế đã bet 67,4% ở board trước
:::

> **Trả lời nhanh**
> Trên board liền nhau 7-6-5 khi chơi blind đối đầu blind, hành động đầu tiên của small blind là **bet 9,6%, check 90,4%**. Pot, stack, SPR, size bet và cả hai range đều **y hệt** spot trước (K♥10♦6♠) — chỉ board thay đổi, và cú bet rơi từ 67,4% xuống 9,6%. Lợi thế range của người open là lợi thế về **bài cao**, và trên một board gồm 5, 6 và 7, lợi thế đó biến mất hoàn toàn. Equity thậm chí **đảo chiều thành 49,6% so với 50,4%**, và equity realization của small blind rơi từ 103,1% xuống **85,3%**.

## Những con số này đến từ điều kiện nào?

**Chúng y hệt spot trước.** Vì toàn bộ ý nghĩa của bài này là "cùng điều kiện, khác kết quả", nên cần chốt rõ cái gì giống và cái gì không.

| Mục | Spot này ⑫ | Spot trước ⑪ | Giống? |
|---|---|---|---|
| Preflop | SB open 3bb → BB call | SB open 3bb → BB call | **giống** |
| OOP (out of position — không có vị trí · hành động trước) | SB — bên open | SB — bên open | **giống** |
| Pot | 6bb | 6bb | **giống** |
| Stack hiệu dụng | 97bb | 97bb | **giống** |
| SPR | 16,2 | 16,2 | **giống** |
| Cỡ bet | Một size, khoảng một phần ba pot | Một size, khoảng một phần ba pot | **giống** |
| Range SB | 572 combo | 538 combo | cùng range (chỉ khác blocker của board) |
| **Flop** | **7♦ 6♦ 5♣** | **K♥ 10♦ 6♠** | **khác** |
| Rake | Không tính rake | Không tính rake | — |
| Kiểm tra ngày | 2026-08-08 (kết quả Spot mẫu) | 2026-08-08 | — |

Pot 6bb là ==3 của SB cộng 3 của BB==. Stack hiệu dụng là ==100 − 3 = 97bb==, nên SPR — stack hiệu dụng chia cho pot — là ==97 ÷ 6 = 16,2==.

Số combo (tổ hợp bài) khác nhau — 572 so với 538 — không phải vì range khác nhau mà vì **các lá trên board xóa đi những combo lẽ ra dùng đến chúng.** Một board gồm K, 10 và 6 lấy đi nhiều hơn từ một range dày lá broadway.

Màn hình hiển thị theo **big blind** — bet đọc là "Bet 2bb (33% pot)", còn EV đọc là "EV (bb)".

## Small blind bet bao nhiêu phần trăm ở đây?

**Bet 9,6%, check 90,4%.** Trong 572 combo chỉ có 55 đi vào cú bet; 517 combo còn lại check.

| Hành động đầu tiên của SB | Tần suất | Combo |
|---|---|---|
| Bet 2bb (33% pot) | **9,6%** | 55,0 |
| Check | **90,4%** | 517,0 |

Đặt vào cả loạt bài, bạn sẽ thấy spot này nằm ở đâu.

| Spot | Ai không có vị trí | Tần suất bet của OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦10♠ (①②③) | BB bên call | 0,1%–1,9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB bên call | 3,0%–3,2% |
| **7♦6♦5♣ blind đối đầu blind (⑫)** | **SB bên open** | **9,6%** |
| Q♠9♠2♠ monotone (⑤) | BB bên call | 11,2% |
| 9♥8♥7♣ liền nhau (④) | BB bên call | 23,7% |
| K♥10♦6♠ blind đối đầu blind (⑪) | SB bên open | 67,4% |
| A♠A♥6♦ blind đối đầu blind (⑬) | SB bên open | 80,1% |
| A♦K♠2♥ · Q♥10♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB bên 3-bet | 98%–100% |

**Chỉ riêng "vai trò" không giải thích được bảng này.** Cùng một người open xuất hiện ở cả 67,4% lẫn 9,6%. Nếu spot trước nói "đổi vai trò thì mặc định đổi", thì spot này là vế tiếp theo: **board lấy lại cái mặc định đó.**

## Không gì khác thay đổi, vì sao 67,4% thành 9,6%?

**Vì lợi thế của người open là lợi thế về bài cao.** Small blind có thể open 3bb vì range của nó dày A, K, Q và nặng các combo broadway — và không lá nào trong số đó chạm tới 5, 6 hay 7.

Board trước thì ngược lại. **Lá cao nhất là K**, và combo chứa K ở phía người open nhiều hơn hẳn. Đặt cùng range đó lên một board thấp liền nhau, cấu trúc ấy lật ngược.

| | K♥10♦6♠ (⑪) | 7♦6♦5♣ (⑫) |
|---|---|---|
| Lá cao nhất trên board | **K** — lá của người open | **7** — lá của người call |
| Equity của SB | **55,3%** | **49,6%** |
| EQR của SB | **103,1%** | **85,3%** |
| Tần suất bet của SB | **67,4%** | **9,6%** |

:::pull[Lợi thế range giành được ở preflop, nhưng nó có thành hiện thực hay không lại do ba lá flop quyết định.]:::

Bài trước khép lại bằng câu *"trên những board hợp với người call, check sẽ quay lại ngay cả từ ghế này."* Đây chính là trường hợp đó, và con số solver gán cho nó là **9,6%**.

## Vì sao board này nghiêng về big blind?

**Vì range call của big blind (BB — mù lớn) thêm vào những tay mà small blind không bao giờ open nhưng lại trúng 7-6-5 — trong đó có T7o, 97o, 87o, 76o, 74s và 43s — chồng lên trên phần sảnh (straight), set và hai đôi (two pair) mà cả hai range cùng có.** Năm hàng đầu trong bảng dưới là các nhóm thực sự trúng board này, và ngoài overpair (đôi tẩy cao hơn mọi lá trên board), small blind không dẫn ở nhóm nào.

![Đồ họa so sánh thành phần range theo nhóm bài của small blind và big blind trên board 7-6-5](/images/gto-sb-connected-ranges-en.webp "7-6-5 blind đối đầu blind · thành phần theo nhóm — top pair 6,8% so với 11,2%, nghiêng về big blind")

| Nhóm | SB (OOP · bên open) | BB (IP — in position, có vị trí · bên call) |
|---|---|---|
| Sảnh | 2,8% (16 combo) | **3,7% (20 combo)** |
| Set/trips | 1,6% (9 combo) | 1,7% (9 combo) |
| Hai đôi | 1,2% (7 combo) | **2,4% (13 combo)** |
| Overpair | **7,3% (42 combo)** | 2,2% (12 combo) |
| Top pair (7) | 6,8% (39 combo) | **11,2% (60 combo)** |
| Second pair (6) | 5,8% | **6,2%** |
| Đôi yếu | 4,2% | **6,2%** |
| Underpair | 3,1% | **3,4%** |
| A-high | **25,2%** | 18,7% |
| K-high | **16,1%** | 15,7% |
| Chưa thành bài | 25,9% | **28,5%** |

Ba ô quyết định tất cả.

- **Top pair là 39 combo so với 60.** Số lá 7 của big blind nhiều hơn khoảng một nửa. Range open của small blind được dựng mà không có những tay khác chất như T-7, 9-7 và 8-7, trong khi big blind — đã bỏ sẵn 1bb — chỉ cần thêm 2bb và giữ lại tất cả chúng.
- **Sảnh là 16 combo so với 20.** Cả hai đều có 9-8 (thành 9-8-7-6-5), nhưng big blind còn có 4-3 đồng chất cho 7-6-5-4-3. Range open của small blind không có 4-3 đồng chất.
- **Hai đôi là 7 combo so với 13.** Toàn bộ sáu combo 7-6 khác chất chỉ thuộc về big blind.

Set (cầm đôi trên tay + 1 lá trên board) là ngoại lệ. Cả hai đều có 7-7, 6-6 và 5-5, **mỗi bên đúng chín combo.** Tỷ lệ đọc ra 1,6% so với 1,7% chỉ vì range của big blind nhỏ hơn, 534 combo, nên cùng chín combo chiếm phần lớn hơn một chút.

Nhóm duy nhất small blind dẫn là **overpair, 42 combo (7,3%)** so với 12 của big blind (2,2%) — mọi đôi từ T-T trở lên đều bị 3-bet khi đối đầu cú open của small blind, nên trong range call chỉ còn 8-8 và 9-9.

Rắc rối là **overpair không phải bài mạnh trên board này.** Những tay **đang thắng nó sẵn** trong range đối thủ cộng lại ==9 set + 13 hai đôi + 20 sảnh = 42 combo==. 60 combo top pair hiện đang thua nó có thể thành hai đôi hoặc trips (1 lá trên tay + board có đôi) đến river, và draw cũng dày hơn ở phía big blind.

| Draw | SB | BB |
|---|---|---|
| Draw kép (combo draw) | 3,0% | **3,7%** |
| Flush draw | **2,8%** | 2,6% |
| Sảnh hở hai đầu (OESD) | 21,2% | **24,9%** |
| Gutshot | 19,4% | **23,8%** |
| Backdoor flush draw | **21,0%** | 15,5% |
| Không draw | **32,7%** | 29,4% |

**Sảnh hở hai đầu là 21,2% so với 24,9%, gutshot (sảnh hở giữa) là 19,4% so với 23,8%.** Chỉ tính draw còn sống — draw kép, flush draw (chờ thùng), OESD, gutshot — thì **small blind có 46,4% so với 55,0% của big blind**, nghĩa là ngay cả phần chưa thành bài trong range big blind cũng là phần dễ *lớn lên* hơn.

🪶 **Small blind dẫn đúng hai ô**: flush draw 2,8% so với 2,6%, và backdoor flush 21,0% so với 15,5%. Ô đầu chênh 0,2 điểm phần trăm, gần như hòa; ô sau cần runner-runner cùng chất và chỉ hoàn thành khoảng 4,2% số lần. Phải cộng cả sáu hàng mới ra 100%, nên đừng dừng đọc bảng này ở "Không draw".

## Người open lại thua equity — sao lại thế?

**Vì A-high và K-high gần như vô giá trị trên board này.** 41,3% range của small blind là A-high hoặc K-high (25,2 + 16,1), và phía trên 5-6-7, những combo đó chỉ đơn thuần là bài cao.

| Mục | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | 49,6% | **50,4%** |
| EV (bb) | 2,54 | **3,46** |
| **EQR (equity realization)** | **85,3%** | **114,4%** |

Pot là 6bb, nên phần của small blind theo equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) là ==6 × 49,6% = 2,976bb==, trong khi EV (giá trị kỳ vọng) thực tế là 2,54bb — tức ==2,54 ÷ 2,976 = 85,3%==. Cộng hai EV lại được ==2,54 + 3,46 = 6,0bb==, đúng bằng pot.

**Equity gần như ngang nhau, 49,6 so với 50,4, vậy mà realization tách xa: 85,3% so với 114,4%.** Khoảng chênh đó chính là giá trị của việc IP (có vị trí). Ở spot trước, lợi thế range thừa sức bù lại và small blind hiện thực hóa được 103,1%; ở đây không còn lợi thế nào để bù.

Xếp EQR (equity realization — phần equity bạn thực sự thu về) của người OOP ở **sáu spot được chọn** từ thấp đến cao, spot này nằm lẫn giữa các bên call. (Đáy thực sự của cả loạt bài là ③ 77,9%, ② 80,7% và ⑥ 83,7%, đều là ghế bên call; bảng dưới là trích đoạn đã cắt phần đuôi đó.)

| Spot | Ai không có vị trí | Equity của OOP | EQR của OOP |
|---|---|---|---|
| A♥7♦2♣ khô (①) | bên call | 45,1% | 84,0% |
| 6♠5♥2♦ thấp (⑦) | bên call | 48,3% | 84,3% |
| **7♦6♦5♣ blind đối đầu blind (⑫)** | **bên open** | **49,6%** | **85,3%** |
| 9♥8♥7♣ liền nhau (④) | bên call | 48,5% | 93,2% |
| K♥10♦6♠ blind đối đầu blind (⑪) | bên open | 55,3% | 103,1% |
| 8♦5♣2♠ pot 3-bet (⑩) | bên 3-bet | 58,6% | 106,9% |

**Một người open, ngồi lẫn giữa các bên call.** Trên cả loạt bài có **năm** ghế bên call nằm dưới spot này (③ 77,9 · ② 80,7 · ⑥ 83,7 · ① 84,0 · ⑦ 84,3), nên nó không ở gần đáy. Dù vậy luận điểm vẫn đứng: **cùng ghế người open, ở ⑪ là 103,1% còn ở đây là 85,3%.** Board quyết định giá trị, không phải ghế ngồi.

## Vậy 9,6% bet kia gồm những tay bài nào?

**Không phải một khối — mà là một lớp mỏng rải khắp range.** Không ô nào trên ma trận phủ kín màu cam; phần lớn chỉ có một vệt cam hẹp. Ngay cả A-A và K-K cũng phần lớn là màu xanh lá.

Ba loại ô có vệt dày hơn thấy rõ. (Tần suất dưới đây là trung bình combo của từng nhóm tay bài, đếm bằng cách đọc bảng từng tay trực tiếp đến tận cuối vào ngày 2026-08-21.)

- **8-8 — bet 39,5%, nhóm có tần suất cao nhất trong range.** Trên 7-6-5, đôi 8 **vừa là overpair vừa là sảnh hở hai đầu cùng lúc** (8-7-6-5 hoàn thành với lá 4 hoặc 9). Giá trị và draw trong một tay, nên có hai lý do để bet. Equity đo được nằm trong khoảng 73,4%–75,2% và EQR 133%–138%.
- **A-7 đồng chất và K-7 đồng chất** — top pair với lá 7. Chúng được chọn không phải vì mạnh mà vì **value mỏng đi kèm blocker A hoặc K** (làm giảm số combo A-high hoặc K-high trong range đối thủ). Top pair trên board này thực ra đang bị dẫn, 39 combo so với 60.
- **K-4 đồng chất và Q-4 đồng chất** — một lá 4 đồng chất. Thêm lá 4 vào 7-6-5, bạn có ==4-5-6-7==, sảnh hở hai đầu hoàn thành với lá 3 hoặc 8. Tính trung bình nhóm thì Q-4s là 30,9% và K-4s là 27,1%, nhưng **tính từng combo thì Q♠4♠ và Q♥4♥ đạt 54,7%, cao nhất trong toàn bộ spot.**

9,6% được dựng bằng cách trộn một chút value với vài draw. Đôi 8 đứng đầu bảng xếp hạng theo nhóm vì **một tay làm cả hai việc cùng lúc.** ⚠ Nhưng đó không phải quy tắc chung — **không combo đơn lẻ nào trong số các combo có tần suất cao nhất làm cả hai việc** (Q♥4♥ và Q♠4♠ ở 54,7% là draw thuần, A♣7♣ ở 54,4% là value mỏng có blocker, và kế tiếp là 10♣9♣ ở 52,2%, một gutshot). Combo tốt nhất của tay làm hai việc, 8♦8♣, lại *thấp hơn*, ở 47,1%. **9,6% không được chọn theo một tiêu chí duy nhất nào.** **Và check 90,4% không có nghĩa là small blind bỏ cuộc trên board này** — mà là với value mỏng như A♣7♣ và K♣7♣, bet và check cho kết quả chênh nhau trong vòng 0,03bb, nên check gần như không mất gì. ⚠ Tuy vậy, đừng tìm lý do ở pot 6bb, stack 97bb hay SPR 16,2 — ba thứ đó là **những hằng số y hệt** trên [⑪ K-10-6](/vi/blog/blind-battle-cbet "thumb:/images/gto-sb-king-mid-oop-en.webp") và trên [board A-A-6](/vi/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-en.webp") ở phần sau của loạt bài, nơi cùng small blind đó bet 67,4% và 80,1%. Thứ tạo ra 9,6% không phải stack; mà là **ba lá trên board**.

:::note[⚠ Spot mẫu này được giải với một size bet duy nhất — một phần ba pot — làm lựa chọn duy nhất. Mở thêm một size lớn hơn trong cây thì con số 9,6% có thể thay đổi. Hãy đọc nó là "trong điều kiện này gần như không có gì đáng bet, kể cả bet nhỏ."]:::

## Ra bàn thật thì chơi khác gì?

- **Đừng biến "blind đối đầu blind thì bet" thành quy tắc.** 67,4% của spot trước và 9,6% ở đây bị tách ra bởi board, không phải bởi ghế. Dù bạn open từ small blind, một khi flop ra thấp và liền nhau — 5, 6, 7, 8 — thì thế chủ động trong ván đó đã sang phía bên kia bàn.
- **Đừng coi overpair là lý do để xây pot lớn.** 42 combo overpair của small blind gấp ba lần rưỡi của big blind, nhưng trên một board mà đối thủ có 42 combo đang thắng sẵn, đây không phải tay để bet liên tiếp qua hai hay ba vòng cược. Điều đó không phản đối một cú bet nhỏ đơn lẻ — vấn đề là **đừng coi nó là tay để đẩy hết stack**. ⚠ Cũng không có nghĩa là "raise (tố) đến là fold (bỏ bài) ngay". Range đối thủ có 24,9% sảnh hở hai đầu, 23,8% gutshot và 3,7% draw kép, nên một cú raise ở flop không thể toàn là value, và tự động fold overpair trước cú raise của một đối thủ nhiều draw tự nó đã là một thói quen dễ bị khai thác. **Không muốn đẩy hết stack và fold là hai chuyện khác nhau.** Và node bet-rồi-bị-raise không có trong lần giải này, nên không có tần suất nào được đưa ra từ đó. Loạt bài này cứ đi đến cùng một kết luận: [board liền nhau bào mòn lợi thế của người raise preflop](/vi/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp").
- **Đừng nhầm A-high là sức mạnh.** Một phần tư range của small blind là A-high, và trên board này phần lớn chỉ có thể lên đôi (A4 và A8 có thêm sảnh hở hai đầu, còn các tay A♦x♦ có flush draw). Draw của đối thủ, khi trúng, phần lớn là sảnh — cái khác nhau không phải là cơ hội cải thiện mà là **sự cải thiện đó đáng giá bao nhiêu**. Con số equity 49,6% là kết quả.
- **Quyết định trước sẽ làm gì sau khi check.** Đã đưa 90,4% vào check, bạn call (theo) gì và [check-raise](/vi/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp") gì trước cú bet của đối thủ mới là bài toán thật tiếp theo. ⚠ **Câu trả lời đó không có trong lần tính này** — Spot mẫu chỉ giải **hành động đầu tiên ở flop**, nên các node sau một lần check (tần suất bet của big blind, check-raise của small blind) đơn giản là không tồn tại. Nếu bạn muốn một spot mà check-raise thực sự được giải, board thấp rainbow là spot duy nhất trong loạt bài có tần suất được giải lại — **dù ghế khác** (ở đó big blind là bên call đối đầu button).

:::readnext[Đọc tiếp]
/vi/blog/blind-battle-cbet | Người không có vị trí lại bet trước — 67,4% số lần | /images/gto-sb-king-mid-oop-en.webp
/vi/blog/ace-paired-board-strategy | Hai lá A trên flop và cú bet vọt lên 80% | /images/gto-sb-paired-ace-oop-en.webp
:::

## Tự kiểm tra

Mọi con số ở đây sẽ hiện ra nếu bạn mở [GTO poker solver miễn phí](/vi/solver) và chọn **Spot mẫu → "Board thấp liền nhau, hai chất" → [⚡ Xem kết quả]**. Muốn chơi chính spot này như một bài tập, hãy mở [Trainer GTO](/vi/solver) từ thanh bên — nó chia cho bạn một tay ngẫu nhiên, và khi bạn chọn hành động, nó cho thấy tần suất pha trộn và **EV mất** (bb) của lựa chọn đó. Lịch sử của bạn mặc định được lưu trên thiết bị này; đăng nhập tài khoản HoldemMaster để lưu vào tài khoản và học tiếp trên thiết bị khác — đăng nhập là tùy chọn, mọi tính năng đều dùng được khi không đăng nhập.

**Bấm qua lại với "Board K-high có lá 10"**, spot trước. Nhãn người chơi ở cả hai đều là "OOP (SB (bên open))", pot và stack y hệt — vậy mà ma trận đổi màu hoàn toàn. Đây là minh chứng ngắn nhất trong loạt bài này về việc board thực sự làm gì. Miễn phí, không cần cài đặt, không cần tài khoản.

**Q. Vì sao cùng một range lại đổi giá trị theo từng board?**

A. Vì range tập trung vào những lá bài nhất định. Range open của small blind dày A, K và Q, nên được lợi trên board cao; range call của big blind dày các tay liền nhau và các tay thấp đồng chất, nên được lợi trên board thấp liền nhau. Đặt cùng hai range đó lên K♥10♦6♠ thì small blind có 55,3% equity; đặt lên 7♦6♦5♣ thì rơi xuống 49,6%. Range không hề dịch chuyển — chỉ board thay đổi.

**Q. Bạn open từ small blind, flop ra thấp và liền nhau. Giờ sao?**

A. Phần lớn là check. Solver đưa 90,4% vào check trên 7♦6♦5♣. Ngay cả 9,6% bet cũng được rải mỏng qua **8-8, một overpair đồng thời là sảnh hở hai đầu** (39,5% theo trung bình nhóm, cao nhất ở đây), top pair (A-7s, K-7s) và một lá 4 đồng chất tạo sảnh hở hai đầu (K-4s, Q-4s). Nhưng điều này không giống bỏ cuộc — với các tay value mỏng, check đáng giá gần bằng bet (trong vòng 0,03bb), và những gì xảy ra sau khi check, kể cả call và check-raise, không có trong lần giải này.

**Q. Small blind có số overpair gấp ba lần rưỡi (42 combo so với 12). Vì sao chỉ bet 9,6%?**

A. Vì đối thủ có rất nhiều tay thắng overpair trên board này: 42 combo set, hai đôi và sảnh, cộng thêm 24,9% sảnh hở hai đầu và 23,8% gutshot. Ngay cả 60 combo top pair đang bị dẫn cũng giữ những lá có thể lật ngược đến river. Overpair ở đây là "đang dẫn, nhưng khó bỏ tiền vào quá một lần". ⚠ Đừng tìm lý do ở SPR 16,2 — pot 6bb, stack 97bb và SPR 16,2 là **những hằng số y hệt** trên các board [K-10-6](/vi/blog/blind-battle-cbet) và [A-A-6](/vi/blog/ace-paired-board-strategy), nơi cùng small blind đó bet 67,4% và 80,1%. Thứ tạo ra 9,6% không phải stack; mà là ba lá trên board.

**Q. Trong hai spot, đâu mới là mặc định của blind đối đầu blind?**

A. Không spot nào cả. Cặp spot này tồn tại để cho thấy cùng một ghế cho ra 9,6% và 67,4% ở hai đầu đối lập, tùy theo board. Điều cần mang ra bàn không phải "small blind thì bet" mà là **lá cao nhất trên board thuộc về range của ai**. Một lá K, Q hay A thì thuộc về người open; một dãy 5, 6, 7 hay 8 thì thuộc về người call.
`.trim(),
};
