import type { Post } from "../posts";

/**
 * Loạt ví dụ solver ② bản tiếng Việt — K♠8♦3♣ flop K-high khô (vi-gto · B · 2026-10-10)
 * Nguồn: bản EN lib/posts-en/k-high-board-cbet.ts (updated 2026-10-02 · hash gốc b57cb658) — mọi số liệu, lá bài, bảng giữ nguyên EN, chỉ đổi dấu thập phân.
 * Số liệu = kết quả Spot mẫu "Board K-high khô" kiểm tra ngày 2026-08-19 (BTN open 2,5bb, BB call, heads-up, không tính rake).
 * Từ khóa: delay cbet poker · board texture · dry board poker (docs/vi-lanes/gto-brief.md ②). Không nhắm "c bet là gì", "cbet", "gto poker".
 * Đính chính so với EN: L147 "because there is none of it" → "gần như không có" (EN nói ngay trước đó là bốn tay bài).
 * Ảnh: dùng bản -en cho tới khi có ảnh chụp app tiếng Việt.
 */
export const POST: Post = {
  slug: "k-high-board-cbet",
  title: "Flop K-high nơi người call check 99,8%",
  seoTitle: "Flop khiến big blind check tới 99,8% — C-bet trên K-8-3",
  desc: "Trên K-8-3 big blind check 99,8% — một range check còn sạch hơn flop A-high. Một tay bài vắng mặt giải thích điều đó, phần còn lại là equity realization.",
  tldr: "Trên K♠8♦3♣ sau khi button open và big blind call, big blind check 99,8% range — một range check còn thuần hơn cả mức 98,2% trên flop A-high. Hai nguyên nhân: big blind không có overpair nào ở đây, vì AA đã 3-bet từ preflop, và equity realization chia 80,7% so với 116,7%.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "9 phút",
  emoji: "👑",
  image: "/images/gto-srp-dry-king-oop-vi.webp",
  imageAlt: "Màn hình kết quả solver HoldemMaster cho flop K-high khô K♠8♦3♣, lưới 13x13 của big blind gần như phủ kín màu xanh check",
  tags: ["có nên luôn c-bet", "check back range", "delay cbet poker", "flop K-high", "range check", "equity realization", "ví dụ solver"],
  content: `
Flop ra **K♠ 8♦ 3♣**, rainbow (3 lá khác chất). Bạn cầm K9 ở big blind (BB — mù lớn) — top pair. Bạn đã học rằng trên phiên bản A-high thì nên check. Chắc lá K thì phải khác chứ?

Đúng là khác. **Nó check còn mạnh hơn.** Big blind check ==99,8%== ở đây, trọn vẹn hơn cả mức 98,2% trên [flop A-high](/vi/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-vi.webp"). Cả hai cỡ bet cộng lại chỉ chiếm 0,2% — một combo (tổ hợp bài) trên 474. Con số này là của người hành động trước (big blind), không phải tần suất c-bet của button.

Mọi con số dưới đây lấy từ [GTO poker solver miễn phí](/vi/solver) của HoldemMaster, đọc trực tiếp từ kết quả Spot mẫu ngày 2026-08-19.


:::stripe
Spot | BTN open 2,5bb → BB call (heads-up)
Flop | K♠ 8♦ 3♣ (rainbow)
Pot · stack | Pot 5,5bb · stack hiệu dụng 97,5bb
Kết quả | BB check 99,8% — thuần hơn cả flop A-high
:::

> **Trả lời nhanh**
> Check toàn bộ range, và chuẩn bị phòng thủ rộng sau đó. Chỉ một combo trên 474 bet trước, nên hãy coi việc lead là không tồn tại ở đây. Có hai điều khiến cú check này thuần hơn phiên bản A-high: big blind **không có overpair** trên board này — AA đã 3-bet từ preflop — và equity realization chia **80,7% so với 116,7%** dù equity gần như ngang nhau.

## Những con số này đến từ điều kiện nào?

Button (BTN) open lên 2,5bb, big blind call (theo), những người còn lại fold (bỏ bài) — hai người chơi, pot 5,5bb, còn 97,5bb phía sau. Range là bản xấp xỉ chuẩn của poker online 100bb, flop là K♠ 8♦ 3♣ với ba chất khác nhau, và solver có hai cỡ bet để chọn, khoảng một phần ba và ba phần tư pot. Không tính rake (phí sòng).

| Thiết lập | Giá trị |
|---|---|
| Preflop | BTN open 2,5bb · BB call · những người còn lại fold |
| Range | Xấp xỉ range online tiêu chuẩn 100bb |
| Flop | K♠ 8♦ 3♣, rainbow (cả ba lá khác chất) |
| Pot · stack | Pot 5,5bb · stack hiệu dụng 97,5bb |
| Cỡ bet | Khoảng 33% và 75% pot |
| Rake | Không tính rake |
| Kiểm tra ngày | 2026-08-19, kết quả Spot mẫu |

Pot là ==2,5 open + 2,5 call + 0,5bb của small blind đã fold = 5,5bb==, còn stack hiệu dụng là 100bb trừ đi 2,5bb tiền open.

## Big blind check bao nhiêu phần trăm trên K-8-3?

**99,8%.** 0,2% còn lại chia cho hai cỡ bet.

| Hành động đầu tiên của BB | Tần suất | Combo |
|---|---|---|
| Check | **99,8%** | 473,0 |
| Bet 1,8bb (33% pot) | 0,1% | 0,6 |
| Bet 4,1bb (75% pot) | 0,1% | 0,4 |

Một combo trên 474 — gần với sai số làm tròn hơn là một chiến lược. **Trên flop K-high khô, big blind hoàn toàn không có lead**, và trên thực tế bạn chẳng mất gì khi coi nó như vậy.

## Vì sao cú check này còn thuần hơn trên flop A-high?

**Vì ở đây big blind không có overpair, còn flop A-high thì chẳng có overpair nào để mà có.** Trên K-8-3, đôi tẩy duy nhất cao hơn board là AA — và big blind 3-bet AA từ preflop, nên nó không bao giờ đi tới flop. Overpair (đôi tẩy cao hơn mọi lá trên board): **0,0% cho big blind, 1,3% cho button.**

Trên A-7-2, cột đó không tồn tại với ai cả: không có gì cao hơn lá A. Vậy là cả hai range cùng thiếu một thứ, và "trần" của chúng trông giống nhau. Trên board K-high, cái trần ấy thuộc về một người.

Set cũng nói điều tương tự. Những đôi tẩy ra set (cầm đôi trên tay + 1 lá trên board) ở flop này là KK, 88 và 33, và **big blind chỉ có 88 và 33.**

| Đôi tẩy ra set ở flop | BB | BTN |
|---|---|---|
| KK | ❌ (3-bet từ preflop) | ✅ |
| 88 · 33 | ✅ | ✅ |
| **Tỷ trọng trong range** | **1,3%** | **1,9%** |

Số tay bài khớp đúng với solver. Big blind có 88 và 33, mỗi đôi ba combo — sáu trên 474, tức 1,27%. Button có thêm KK, thành chín trên 480, 1,88%.

## Hai range khác nhau ở đâu?

**Các nhóm mạnh nằm bên button, các nhóm yếu nằm bên big blind.** Đặt cạnh nhau thì khoảng cách lộ rõ.

![Infographic so sánh thành phần range của big blind và button trên board K-high khô, thanh xanh lá và vàng đặt cạnh nhau theo từng nhóm tay bài](/images/gto-srp-dry-king-ranges-vi.webp "K♠8♦3♣ · chia theo nhóm — phần đỉnh range thuộc về button")

| Nhóm | BB (OOP — out of position, không có vị trí) | BTN (IP — in position, có vị trí) |
|---|---|---|
| Sám cô — ở đây luôn là set | 1,3% | **1,9%** |
| Hai đôi | **0,8%** | 0,4% |
| Overpair | 0,0% | **1,3%** |
| Top pair (K) | 12,7% | **14,4%** |
| Second pair (8) | **10,8%** | 10,0% |
| Đôi yếu | **3,2%** | 2,5% |
| Underpair | 8,9% | **11,3%** |
| A-high | 27,0% | **30,0%** |
| Chưa thành bài | **35,4%** | 28,3% |

Đọc từ trên xuống. **Mọi nhóm ở đỉnh range — set, overpair, top pair — đều thuộc về button, còn nhóm yếu nhất, chưa thành bài, lại nặng hơn 7,1 điểm bên big blind.** Các nhóm mà big blind nhỉnh hơn là hai đôi (two pair), second pair và đôi yếu. **Hai đôi là nhóm mạnh thứ hai trên board này**, đứng trên cả overpair, và big blind có gấp đôi — nhưng 0,8% của 474 combo chỉ là **bốn tay bài.** Nó không gánh nổi cả range vì gần như không có, chứ không phải vì xếp hạng thấp. Hai nhóm còn lại thì thật sự chỉ ở mức trung bình. Bet trước với một range có hình dạng như vậy nghĩa là nửa yếu của bạn đang trả tiền cho nửa mạnh của đối thủ.

## Vì sao gần một phần ba cả hai range đều là ace-high?

**Chuyện này xảy ra trên mọi board không có lá A.** A-high chiếm 27,0% range của big blind và 30,0% range của button, mỗi bên gần một phần ba. Trên A-7-2 nhóm đó không tồn tại, vì lá A nào cũng lập tức thành top pair. Vậy nên sự tương phản không phải "K-high so với mọi thứ khác" mà là **"board có lá A so với board không có lá A"** — trên flop 8-5-2 ở phần sau của loạt bài này, được giải với range của bên 3-bet, A-high tăng lên tới **48,2%**.

Chính nhóm đó làm flop này thú vị. AQ và AJ không có đôi nào, nhưng chúng thắng mọi tay trong cột "chưa thành bài" của đối thủ, nên chúng có giá trị showdown. Ở button, chúng không phải c-bet (cược tiếp tục) tự động: một phần thời gian chúng check-back (check lại sau khi đối thủ đã check) và lấy showdown miễn phí.

Tay A-high tốt nhất của big blind ở đây là AJ — AQ của nó đã 3-bet từ preflop — và tay AJ đó đáng giá ít hơn so với khi nằm ở button, vì đi tới showdown mà không có vị trí thì khó hơn. **Những lá tương tự, giá trị khác nhau theo ghế** — đó chính là điều phần tiếp theo đo lường.

## Vì sao EQR là 81 so với 117 khi equity là 46 so với 54?

**Equity là phần pot kỳ vọng của bạn, tính cả khi chia pot; equity realization là bạn thực sự thu về được bao nhiêu trong phần đó.** Hai con số này không giống nhau.

| Chỉ số | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46,3% | 53,7% |
| EV (bb) | 2,06 | 3,44 |
| **Equity realization (EQR)** | **80,7%** | **116,7%** |

Phép tính: pot là 5,5bb, nên phần equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) của big blind là ==5,5 × 46,3% = 2,55bb==, trong khi EV (giá trị kỳ vọng) thực tế của nó là 2,06bb — tỷ lệ đó chính là 80,7%. Phần của button là 2,95bb so với EV 3,44bb, vì thế nó vượt trên 100%.

:::note[Các con số EQR trong loạt bài này là con số hiển thị trên màn hình solver. Tính lại từ equity và EV đã làm tròn trên cùng màn hình có thể lệch một phần mười điểm — đó là làm tròn, không phải mâu thuẫn.]:::

Flop A-high là 84,0% so với 113,1%. **Cùng kết cấu khô, khoảng cách rộng hơn trên board K.** Nhưng không phải vì board này *yên tĩnh hơn* — hai khoảng cách EQR rộng nhất trong loạt bài này thuộc về những board ngập draw: [flop Q-J-10 hai chất](/vi/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-vi.webp") với 41,5 điểm và pot 3-bet Q-10-7 với 42,7. Thứ mở rộng khoảng cách ở đây là **một cột ở đỉnh** — trên A-7-2 không ai có overpair, còn trên K-8-3 button có 1,3% và big blind không có gì. Vì sao bản thân chỗ ngồi lại đáng giá đến thế được giải thích trong [chơi theo vị trí](/vi/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Ở đây thật sự không có draw nào sao?

**Không có draw nào cả.** K, 8 và 3 là ba chất khác nhau và quá xa nhau để nối lại, nên không bên nào có flush draw (chờ thùng) hay sảnh hở hai đầu (OESD) — **và cũng không có gutshot (sảnh hở giữa).** Một draw sảnh (straight) ở flop cần hai lá trên board nằm trong cùng một dãy năm lá, vì bạn chỉ cầm hai lá, mà từ K tới 8 cách nhau năm bậc, từ 8 tới 3 cũng vậy. Không dãy nào chứa được hai lá trong số đó.

| Draw | BB | BTN |
|---|---|---|
| Backdoor flush (cần thêm hai lá cùng chất) | 27,8% | 22,3% |
| Không draw | **72,2%** | **77,7%** |

Thứ còn lại là backdoor. **Backdoor flush** mà bảng đếm cần cả turn *và* river ra cùng một chất, nên nó chỉ hoàn thành ==10/47 × 9/46 = khoảng 4,2%== số lần. Bảng không đếm, nhưng cũng có **backdoor sảnh** — QJ, JT và T9 đi qua lá K trên board; 67 và 65 qua lá 8; 54 qua lá 3. Nó vẫn có ý nghĩa: khi phải chọn bluff, **một tay có backdoor tốt hơn một tay không có gì**, vì nếu turn ra đúng chất đó, bạn có một draw thật và một lý do để bắn tiếp — nền tảng cho một delayed c-bet (c-bet trì hoãn) ở turn.

## Có nên luôn c-bet trên flop K-high không?

**Gần như vậy ở cỡ bet nhỏ, nhưng "luôn luôn" là từ sai với một nhóm tay bài.** Big blind có 35,4% chưa thành bài — một phần ba range dễ fold nhất, dù không thể fold hết: trước cú bet một phần ba pot, một cách phòng thủ cân bằng giữ lại khoảng 75% range (tần suất phòng thủ tối thiểu — MDF), nên một số tay trong nhóm đó vẫn đi tiếp. (Phản ứng của big blind không có trong lần giải này.) Và **72,2% của toàn bộ range không có draw** — hãy để ý mẫu số: con số đó tính trên cả range, gồm cả top pair (12,7%), second pair (10,8%) và set, nên nó không phải là một phần của khối chưa thành bài. Nó có nghĩa là bức tranh khó thay đổi ở các vòng sau. Bet khoảng một phần ba pot với phần lớn range là cách chuẩn.

Lời khuyên phổ biến là các tay A-high có giá trị showdown nên check back. Trên board này điều đó **chỉ đúng một nửa**. Ở cỡ nhỏ, AQ và AJ trộn bet đủ thường xuyên — chúng ép fold những tay như QJ, JT và T9, vốn có hai lá còn sống nhưng chưa có đôi, và một lá A ở vòng sau cho chúng đôi lớn nhất trên board. Nhưng check thì chúng cũng mất rất ít, nên đây là nơi phần lớn **check back range** hình thành. Cả "luôn bet" lẫn "luôn check back" đều không đúng; tần suất mới là câu trả lời.

:::note[⚠ Phần này là cách đọc thành phần range, không phải con số do solver tính ra. Spot mẫu chỉ giải sẵn hành động đầu tiên ở flop — của big blind — nên tần suất c-bet chính xác của button không có trên màn hình này. Hãy mở "Tự giải spot này" và chạy cây để lấy con số đó.]:::

## Ra bàn thật thì chơi khác gì?

- **Khi đã call một cú raise (tố) heads-up trên flop K-high khô, lead không phải là một lựa chọn.** Kể cả khi có lá K. Logic range check từ flop A-high áp dụng ở đây còn mạnh hơn, không yếu hơn. Nhưng điều kiện là **hình dạng range của bạn**, không phải hình dạng của board — ở nơi đỉnh range của bạn dày hơn của đối thủ, big blind có lead. Phản ví dụ là [flop 9-8-7](/vi/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-vi.webp"), nơi big blind lead **23,7%** số lần.
- **Check không có nghĩa là check-fold.** Trước cú c-bet nhỏ, big blind đi tiếp rộng — mọi lá K, các lá 8, các underpair (đôi tẩy thấp hơn lá cao nhất trên board), A-high có backdoor. Top pair là call; ứng viên check-raise tự nhiên là 88, 33 và các tay hai đôi (lần giải này không bao gồm phản ứng trước cú c-bet).
- **Ở button, đừng gán cho AQ và AJ một cách xử lý cố định.** Bet nhỏ và check back đều hợp lý; điều chỉnh tỷ lệ pha trộn dựa trên việc đối thủ này có thật sự fold overcard (lá cao hơn board) hay không.
- **Đừng đọc cú check là yếu — khi gặp đối thủ cân bằng.** Range check đó vẫn chứa set (88, 33) và 12,7% top pair. Ở stake thấp thì điều ngược lại thường đúng, vì nhiều người chơi cứ thế lead tay mạnh, nên hãy tiếp tục value bet và coi check-raise là một cái giá thỉnh thoảng phải trả.

:::readnext[Đọc tiếp]
/vi/blog/a-high-board-cbet | Có top pair vẫn check: tần suất c-bet trên flop A-7-2 | /images/gto-srp-dry-ace-oop-vi.webp
/vi/blog/holdem-continuation-bet | Vì sao c-bet mọi flop ngốn chip | /images/holdem-continuation-bet-hero.webp
:::

## Tự kiểm tra

Mở [GTO poker solver miễn phí](/vi/solver), vào **Spot mẫu → Board K-high khô → [⚡ Xem kết quả]**, và màn hình này hiện ra ngay không cần chờ. Sau đó chuyển ô chọn người chơi sang **IP (BTN)** — bảng thành phần range ở trên được đọc thẳng từ bảng đó, và so sánh hai bên là cách nhanh nhất để thấy vì sao một bên không thể bet.

Để luyện spot (tình huống ra quyết định) này thay vì chỉ đọc, hãy mở **Trainer GTO** ở thanh bên: nó chia cho bạn một tay bài theo trọng số range thật, bạn chọn hành động, và nó cho thấy lựa chọn đó tốn bao nhiêu big blind (**EV mất**). Miễn phí, không cần cài đặt, không cần tài khoản.

## Câu hỏi thường gặp

**Q. Vì sao big blind không bao giờ bet trước trên K-8-3?**

A. Vì những tay mạnh nhất mà board này cho phép đều vắng mặt trong range của bên call: set cao nhất (KK) và overpair duy nhất (AA) đều không có, trong khi nhóm chưa thành bài dồn lên tới 35,4%. Big blind vẫn có set 88 và 33 cùng một ít hai đôi, nhưng không đủ để gánh một cú lead. Lead với một range có hình dạng như vậy là xây pot cho người khác thắng. Solver check 99,8%.

**Q. Flop A-high hay flop K-high tệ hơn cho big blind?**

A. K-high. Equity thực ra cao hơn — 46,3% so với 45,1% trên A-7-2 — nhưng equity realization thấp hơn, 80,7% so với 84,0%. Ở đây big blind có phần pot nhỉnh hơn so với A-7-2 mà lại thu về ít hơn.

**Q. Check back range là gì?**

A. Đó là những tay mà người chơi có vị trí chọn không bet, giữ lại để xem showdown miễn phí hoặc để range check của mình không chỉ toàn tay yếu. Trên flop này nó được tạo phần lớn từ các tay A-high như AQ và AJ, vốn thắng được bài chưa có gì của đối thủ nhưng bet thì chẳng được thêm bao nhiêu.

**Q. Backdoor flush draw đáng giá bao nhiêu?**

A. Khoảng 4,2% để hoàn thành từ flop, nên tự nó không phải là lý do để call. Giá trị của nó nằm ở việc chọn bluff: một tay có được draw thật ở turn cho bạn lý do để tiếp tục bet, và delayed c-bet đến từ chính chỗ đó.

**Q. Những con số này có đúng ở stake tôi đang chơi không?**

A. Dùng làm mốc khi điều kiện khớp: heads-up, 100bb, range open và call chuẩn, không tính rake. Điều cần để ý trên board này là vị trí của người open — nếu cú raise đến từ under the gun thay vì button, range đó còn chứa nhiều lá K và lá A hơn, và tình thế của big blind còn tệ hơn những gì hiển thị ở đây.
`.trim(),
};

export default POST;
