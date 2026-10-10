import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑬ 베트남어판 — A♠A♥6♦ blind vs blind (SB 오픈 vs BB 콜)
 * 마스터 = lib/posts-en/ace-paired-board-strategy.ts (EN updated 2026-10-02 · 기준 해시 b57cb658)
 * 확정 카피 = docs/vi-lanes/gto-brief.md ⑬ (Fable 1회 · 변경 금지)
 * 키워드: trips poker · poker trips vs set(자동완성) · set trong poker — FAQ 1에 흡수. «set poker»·«bộ ba» 단독 금지.
 * 수치 출처 = EN 축어(2026-08-08 Spot mẫu · 2026-08-21 라이브 실측) · 구분자만 vi(천 단위 마침표 · 소수 쉼표).
 * 이미지 = EN 경로(-en.webp) — vi 캡처 생성 후 헤드가 일괄 교체.
 * EN 결함 정정 반영(§0-0): L199 «more» = 비교급 · L248 «offsuit broadways» → Q-x·J-x 오프수트 · L250 «beats that card» → 핸드 · L274 trips 정의 고정문.
 */
export const POST: Post = {
  slug: "ace-paired-board-strategy",
  title: "Hai lá A trên flop và cú bet vọt lên 80%",
  seoTitle: "Flop ra đôi A, bet vọt lên 80% — Trips poker theo solver",
  desc: "Một flop có đôi bị bet 3%, flop có đôi khác tới 80,1%. Trên A-A-6 lá A thuộc về người raise — còn những trips thắng được bạn lại vắng khỏi range người call.",
  tldr: "Sau khi small blind open và big blind call, flop A♠A♥6♦ nhận một cú bet 80,1% số lần (79,6% ở một phần ba pot, 0,5% ở ba phần tư, check 19,8%). Đó là điều ngược hẳn với mức 3,0% trên board có đôi 6♣6♦3♥ — và thứ tách hai spot ra không hẳn là chuyện board có đôi, mà là lá nào tạo đôi và nó khớp range của ai (ghế và range đã đổi cùng với board). Những tay bài có trips với lá A là 88 combo so với 66, và 16 combo trong số đó, A-K và A-Q, hoàn toàn không có trong range của người call.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-02",
  readTime: "10 phút",
  emoji: "🅰️",
  image: "/images/gto-sb-paired-ace-oop-en.webp",
  imageAlt: "GTO solver HoldemMaster trên flop A-A-6, lưới bài của small blind gần như phủ kín màu cam của lựa chọn bet",
  keepImagesInBody: true,
  tags: [
    "trips poker",
    "trips trong poker là gì",
    "board đôi A",
    "tần suất bluff poker",
    "ví dụ solver",
  ],
  content: `
Người ta hay bảo bạn rằng trên board có đôi thì không ai bet. Ở [board có đôi 6-6-3](/vi/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-en.webp") trước đó trong loạt bài này, người hành động trước chỉ bet **3,0%**.

Đây cũng là một board có đôi. A♠ A♥ 6♦. Và small blind (SB — mù nhỏ) bet **80,1%**.

Điều kiện không đổi so với hai spot (tình huống ra quyết định) trước — pot 6bb, stack hiệu dụng 97bb, small blind là bên open. Chỉ một board trước đó, cũng từ chính ghế này, [nó chỉ bet 9,6%](/vi/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-en.webp"). Spot này nằm ở đầu bên kia. Mọi con số dưới đây đều lấy từ [GTO poker solver miễn phí](/vi/solver) của HoldemMaster.


:::stripe
Spot | SB open 3bb → BB call (blind vs blind)
Flop | A♠ A♥ 6♦ (có đôi · không thể có flush draw)
Pot · stack | Pot 6bb · stack hiệu dụng 97bb · SPR 16,2
Kết quả | SB bet **80,1%** — so với 3,0% trên board có đôi 6-6-3
:::

> **Trả lời nhanh**
> Trên board có đôi A-A-6, hành động đầu tiên của small blind là **bet 80,1%, check 19,8%** (trong đó 79,6% ở mức một phần ba pot). Đó là điều ngược hẳn với 3,0% trên 6-6-3, và thứ tách hai spot ra **không hẳn là chuyện board có đôi, mà là lá nào tạo đôi và nó khớp range của ai** — ghế và range đã đổi cùng với board. Những tay bài có trips với lá A là **88 combo so với 66**, và trong số đó, **A-K và A-Q — 16 combo — hoàn toàn không tồn tại trong range call của big blind.** Chúng đã bị 3-bet từ preflop.

## Những con số này đến từ điều kiện nào?

★**Giống hệt hai spot trước, chỉ khác là có hai cỡ bet.** Spot ⑪ và ⑫ chỉ có một phần ba pot; spot này mở thêm mức ba phần tư pot bên cạnh.

| Mục | Spot này ⑬ | ⑫ 7♦6♦5♣ | ⑪ K♥10♦6♠ |
|---|---|---|---|
| Preflop | SB open 3bb → BB call | giống | giống |
| OOP (out of position — không có vị trí · hành động trước) | SB — bên open | giống | giống |
| Pot · stack hiệu dụng | 6bb · 97bb | giống | giống |
| SPR | 16,2 | giống | giống |
| **Cỡ bet** | **Hai mức: khoảng 33% và 75% pot** | Một mức, 33% | Một mức, 33% |
| Range của SB | 503 combo | 572 combo | 538 combo |
| **Flop** | **A♠ A♥ 6♦** | 7♦ 6♦ 5♣ | K♥ 10♦ 6♠ |
| Rake | Không tính rake | Không tính rake | Không tính rake |
| Kiểm tra ngày | 2026-08-08 (kết quả Spot mẫu) | 2026-08-08 | 2026-08-08 |

Pot 6bb là ==3 của SB cộng 3 của BB==, stack hiệu dụng là ==100 − 3 = 97bb==, và SPR (stack hiệu dụng chia cho pot) là ==97 ÷ 6 = 16,2==. Cả ba spot dùng cùng một range, và **chỉ số combo (tổ hợp bài) co lại theo những gì board lấy đi** — hai lá A trên flop xóa đi rất nhiều tổ hợp chứa A, nên 503 là con số nhỏ nhất trong ba spot.

Màn hình hiển thị theo **big blind** — các cú bet đọc là "Bet 4,5bb (75% pot)", và EV (giá trị kỳ vọng) đọc là "EV (bb)".

## Small blind bet bao nhiêu phần trăm ở đây?

**79,6% ở size nhỏ, 0,5% ở size lớn, và 19,8% check.** Các cú bet cộng lại là 80,1%, và 403 trên 503 combo được đẩy vào.

| Hành động đầu tiên của SB | Tần suất | Combo |
|---|---|---|
| Bet 4,5bb (75% pot) | 0,5% | 2,7 |
| Bet 2bb (33% pot) | **79,6%** | 400,4 |
| Check | 19,8% | 99,8 |

Xếp cạnh cả loạt bài, bạn sẽ thấy spot này rơi vào đâu.

| Spot | Ai không có vị trí | Tần suất bet của OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦10♠ (①②③) | BB bên call | 0,1%–1,9% |
| **6♣6♦3♥ board có đôi (⑥)** | BB bên call | **3,0%** |
| 6♠5♥2♦ board thấp (⑦) | BB bên call | 3,2% |
| 7♦6♦5♣ blind vs blind (⑫) | SB bên open | 9,6% |
| Q♠9♠2♠ monotone (⑤) | BB bên call | 11,2% |
| 9♥8♥7♣ liền nhau (④) | BB bên call | 23,7% |
| K♥10♦6♠ blind vs blind (⑪) | SB bên open | 67,4% |
| **A♠A♥6♦ board có đôi (⑬)** | **SB bên open** | **80,1%** |
| A♦K♠2♥ · Q♥10♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB bên 3-bet | 98%–100% |

**Hai board có đôi nằm gần hai đầu đối diện của bảng.** Nói cách khác, cái nhãn "board có đôi" không quyết định chiến lược.

## Hai board có đôi, 3,0% và 80,1% — điều gì tách chúng ra?

**Không phải số trips mà là *phần còn lại của range*.** Spot 6-6-3 là phản ví dụ quyết định ở đây, vì ở đó **người hành động trước cầm nhiều trips hơn** mà vẫn chỉ bet 3,0%.

| | 6♣6♦3♥ (⑥) | A♠A♥6♦ (⑬) |
|---|---|---|
| Ai hành động trước | BB — bên call | **SB — bên open** |
| Tỷ lệ trips | BB 5,3% so với BTN 4,0% — **người hành động trước có nhiều hơn** | SB 17,5% so với BB 13,1% — người hành động trước có nhiều hơn |
| Equity của OOP | 47,2% | **56,2%** |
| EQR của OOP | 83,7% | **104,1%** |
| Tần suất bet của OOP | **3,0%** | **80,1%** |

Trên 6-6-3, big blind (BB — mù lớn) đã phòng thủ rẻ bằng những tay mà button (BTN) không bao giờ open — J-6s, T-6s, 9-6s — nên số combo chứa lá 6 của nó lên tới 26 (5,3%) so với 20 (4,0%) của đối thủ. **Vậy mà nó vẫn chỉ bet 3,0%.** Đếm mọi tay bài đặt được thứ gì đó lên trên đôi của board thì con số là **18,4% cho big blind so với 20,3% cho button** — button dẫn trước. Thứ big blind dẫn chỉ là một hàng, trips. Và 81,6% còn lại, cuộc đấu "đôi 6 của board cộng một lá cao", cũng nghiêng về phía bên kia: A-high 26,3% so với 31,9%.

Ở đây, phần còn lại cũng nghiêng về phía small blind. K-high là 22,3% so với 18,2%, và những tay trượt hoàn toàn là 39,8% so với 51,5% — **đối thủ nhiều hơn 11,7 điểm phần trăm.**

:::pull[Thứ quyết định tần suất bet không phải là nhóm bài mạnh nhất của bạn có bao nhiêu combo. Mà là cả range của bạn có tốt hơn range của họ hay không.]:::

Lá A là lá mà người tấn công preflop cầm nhiều hơn — ở spot này là 95 combo so với 72, **khoảng 1,3 lần.** Khi lá đó rơi xuống flop hai lần, phần đỉnh của range và phần còn lại nghiêng **cùng một hướng**, và đó là lúc tần suất bet leo lên 80%.

## Ai cầm nhiều trips hơn?

**88 combo (17,5%) cho small blind, 66 (13,1%) cho big blind.** Nhưng **cái bị thiếu** quan trọng hơn con số. (Solver gắn nhãn nhóm này là hàng «Xám» — chính là thứ người ở bàn gọi là trips (1 lá trên tay + board có đôi).)

![Infographic thành phần range so sánh các nhóm tay bài của small blind và big blind trên board A-A-6](/images/gto-sb-paired-ace-ranges-en.webp "A-A-6 blind vs blind · thành phần theo từng nhóm — tay trượt là 39,8% so với 51,5%")

| Nhóm | SB (OOP · bên open) | BB (IP — in position, có vị trí · bên call) |
|---|---|---|
| Tứ quý | **0,2% (1 combo)** | 0,0% (0 combo) |
| Cù lũ | 1,8% (9 combo) | 1,8% (9 combo) |
| Set/trips | **17,5% (88 combo)** | 13,1% (66 combo) |
| Hai đôi | **18,5% (93 combo)** | 15,4% (78 combo) |
| K-high | **22,3% (112 combo)** | 18,2% (92 combo) |
| Chưa thành bài | 39,8% (200 combo) | **51,5% (260 combo)** |

Ba dòng là toàn bộ spot này.

- **Trips của big blind không có A-K và không có A-Q.** Trước một cú open 3bb của small blind, những tay đó bị 3-bet chứ không call. Các trips trên cùng mà chỉ small blind có là ==8 combo A-K + 8 combo A-Q + 6 combo A-J khác chất = 22 combo==. Cùng là trips, nhưng cuộc đấu kicker đã được định đoạt sẵn.
- **Tứ quý (quads) chỉ thuộc về small blind.** Với A♠ và A♥ trên board, chỉ còn lại A♦ và A♣, nên A-A là **đúng một combo**. Big blind 3-bet A-A và giữ con số không.
- **Hơn một nửa range của big blind là chưa có gì.** 260 combo (51,5%) trượt board. Đó là phần mà một cú bet tạo áp lực lên, không phải tỷ lệ fold (bỏ bài): trước cú bet một phần ba pot, tần suất phòng thủ tối thiểu (MDF) bảo phải giữ khoảng 75% range, nên một đối thủ cân bằng chỉ fold gần một phần tư. (Phản ứng của big blind không có trong lần tính này.)

Chỉ có cù lũ (full house) là ngang nhau tuyệt đối: cả hai đều có ==3 combo 6-6 + 6 combo A-6 = 9==. **Bỏ riêng ô đó đi thì mọi nhóm phía trên đều nghiêng về small blind, chỉ có tầng đáy — các tay trượt — là big blind nặng hơn 11,7 điểm.**

Equity cho thấy kết quả.

| Mục | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | **56,2%** | 43,8% |
| EV (bb) | 3,51 | 2,49 |
| **EQR (equity realization)** | **104,1%** | 94,8% |

Pot là 6bb, nên phần của small blind là ==6 × 56,2% = 3,372bb== so với EV thực tế 3,51bb — tức là ==3,51 ÷ 3,372 = 104,1%==. Hai EV cộng lại là ==3,51 + 2,49 = 6,0bb==, đúng bằng pot.

**Equity realization (EQR — phần equity bạn thực sự thu về) vượt 100% dù không có vị trí.** Đó là **mức cao nhất trong ba spot blind đối đầu blind (blind vs blind)** — ⑪ 103,1%, ⑫ 85,3%, spot này **104,1%**. Đây là spot thứ hai trong số đó vượt mốc 100%, và lợi thế range sắc nét hơn ở đây đẩy nó nhỉnh hơn ⑪ một chút. (Các pot 3-bet cũng vượt 100% khi out of position, ở mức 106,9%–117,8% — lợi thế đó được dựng lên bằng cú 3-bet.)

## Vì sao size lớn gần như không bao giờ được dùng?

**Vì lợi thế ở đây *rộng* chứ không *sâu*.** Cú bet ba phần tư pot chỉ nhận 0,5%, vỏn vẹn 2,7 combo. Trên thực tế chỉ có một size.

Các pot 3-bet thì ngược lại. Trên [board thấp 8-5-2](/vi/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-en.webp"), big blind dùng hai phần ba pot 97,8% số lần, vì range đó tách gần làm đôi thành **overpair (đôi tẩy cao hơn mọi lá trên board) hoặc A-high** — một hình dạng range phân cực (polarized). Một range bị kéo về hai cực thì cần size lớn.

Spot này không như vậy. Range của small blind trải **liên tục** — trips 17,5%, hai đôi 18,5%, K-high 22,3%, tay trượt 39,8%. Với hình dạng đó, đẩy cả range vào ở size nhỏ đáng giá hơn: 51,5% tay trượt của đối thủ là thứ một cú bet nhỏ tạo áp lực lên — một cú bluff 2bb vào pot 6bb chỉ cần 25% fold là hòa vốn — và bản thân cú bet lúc này chỉ mạo hiểm 2bb, dù 97bb phía sau vẫn có thể bị cuốn vào ở turn và river.

:::note[⚠ Spot mẫu này được giải với hai ứng viên size, 33% và 75%. Thêm một size nhỏ hơn — một phần năm hay một phần tư pot — thì 79,6% kia có thể dời sang đó. Hãy đọc nó là "size nhỏ trong số các size được đưa ra", chứ không phải "33% là đáp án".]:::

## 19,8% check kia gồm những tay bài nào?

**Không phải một nhóm bị giữ lại nguyên vẹn, mà là mỗi nhóm một lát.** Đo trực tiếp ngày 2026-08-21, các đôi tẩy check ở mức **K-K 72,4%, Q-Q 66,2%, J-J 42,0% và T-T 21,6%** — nên K-K và Q-Q nghiêng về check, nhưng **T-T đã bet tới 78%.** 99,8 combo check cũng không thể gói gọn là "sức mạnh trung bình": **tay trượt là nhóm lớn nhất với khoảng 44%**, rồi đến K-high khoảng 27%, hai đôi khoảng 17% và trips khoảng 11%. Những ô có màu xanh dày nhất là các tay Q-x, J-x khác chất như Q-9o, Q-Jo, Q-To và J-9o. Các ô chứa lá A, và 6-6, phần lớn là màu cam.

Lý do nằm ở **ai sẽ call bạn.** K-K tạo hai đôi (two pair) cùng đôi A của board, nhưng **bet nó thì chẳng thu được bao nhiêu giá trị.** ⚠ Đừng dịch điều đó thành "tay yếu hơn fold hết, chỉ trips tốt hơn mới call" — **chính bảng trong bài này bác bỏ điều đó.** 78 combo hai đôi của big blind là bảy hạng đôi tẩy (42) cộng 6-x (36), **tất cả đều dưới K-K**, và 92 combo K-high của nó cũng dưới K-K; trước cú bet một phần ba pot, 170 combo đó (33,7% range) không fold hết. Trong khi đó, trips và cù lũ thắng được K-K chỉ có **75 combo (14,9%) — ít hơn.** Giá trị mỏng không phải vì tay yếu fold hết; mà vì **phần rộng đó sẽ call nhưng không theo bạn vào một pot lớn** — hai đôi và K-high nhận ra mình đang thua K-K mà không mấy khó khăn, nên bạn bet càng lớn thì càng chỉ còn trips ở lại. ⚠ Ghi lại cho rõ, **thêm một lá A ở turn hay river không lật ngược K-K** — với A-A-A-6 trên board, K-K trở thành *cù lũ ba A đôi K (aces full of kings)*, và trong 170 combo kia không tay nào thắng được tay đó. Check thay vào đó sẽ chừa chỗ cho 260 combo trượt của big blind bluff, và khi ấy một cú call (theo) mới phát huy tác dụng — **với giả định đối thủ có trộn bluff.** ⚠ Big blind thực sự bluff bao nhiêu sau khi bạn check thì không có trong lần tính này (Spot mẫu dừng ở hành động đầu tiên trên flop); đây là cách đọc rút ra từ thành phần range.

**Điều đó đi đôi với việc trips gần như dồn hết vào bet.** 88 combo cầm lá A cần lấy giá trị từ K-high và tay trượt của đối thủ, nên có ít lý do để check. ⚠ Tuy vậy, "hết" là sai — đo trực tiếp ngày 2026-08-21, **94 combo cầm một lá A** (88 trips cộng 6 combo A-6 tạo cù lũ) check trong khoảng **0,1% đến 26,0%, trung bình 12,3%**, và **không có combo nào check đúng 0%.** Việc trộn ổn định nhất ở chỗ lá A đi cùng lá thấp (A♣8♣ ở 19,4%, A♣7♣ ở 20,9%, và A-5 đến A-2 khác chất trung bình 20,1%).

## Ra bàn thật thì chơi khác gì?

- **Đừng biến "board có đôi thì check" thành một quy tắc.** Trên 6-6-3 là 3,0%, trên A-A-6 là 80,1%. Phép thử không phải là board có đôi hay không, và **cũng không phải bạn cầm bao nhiêu combo của hạng bài đó** — trên 6-6-3, big blind cầm lá 6 dày hơn (5,3% so với 4,0%) mà vẫn chỉ bet 3,0%. Phép thử là **range của bạn *xét tổng thể* có tốt hơn range của họ hay không.** Cú bet lên tới 80% ở đây vì phần đỉnh và phần còn lại nghiêng **cùng một hướng**.
- **Khi hai lá A đã ra, đừng mặc định lá A của bạn vô giá trị.** Nếu đối thủ 3-bet A-K và A-Q, cuộc đấu kicker đã nghiêng về phía bạn. **Tuy nhiên điều đó dựa trên việc họ 3-bet** — trước một bàn chỉ toàn call bằng A-K và A-Q thì tiền đề sụp đổ, nên với trips kicker yếu, hãy bet nhưng tránh lao vào một cuộc chiến raise (tố) lớn.
- **Size nhỏ, tần suất cao.** Khi range trải liên tục, đẩy rộng ở mức một phần ba pot là tốt hơn. Size lớn là công cụ cho [một range tách thành mạnh và yếu](/vi/blog/3bet-pot-low-board) — dù ngay trong các pot 3-bet, lý do lại khác trên [một board dày draw](/vi/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp"), nơi cú bet lớn là để giữ đối thủ ở mức giá tệ. **Cũng lưu ý 80,1% là kết quả tính heads-up** — khi còn hơn một đối thủ trong ván, hãy cắt mạnh các cú bet bằng tay trượt và thu hẹp về trips và hai đôi.
- **Đừng bet K-K và Q-Q "vì chúng mạnh".** Trên board này, chúng khó được tay nào yếu hơn call. Check để bắt bluff của đối thủ thì tốt hơn. ⚠ Đó là **một nhận định rút ra từ thành phần range**, không phải giá trị mà loạt bài này đã đo — Spot mẫu chỉ hiện tần suất của hành động đầu tiên trên flop, và không có node nào sau cú check được giải cho spot này (node check-rồi-bet duy nhất trong loạt bài là lần giải riêng trên [board thấp rainbow](/vi/blog/low-board-check-raise)). **Nó cũng giả định đối thủ có trộn bluff** — trước người gần như không bao giờ bluff, một cú bet đến sau khi bạn check thường là lá A, và fold (bỏ bài) tốt hơn là cố bám.

:::readnext[Đọc tiếp]
/vi/blog/blind-battle-connected-board | Cùng ghế, cùng stack — mà cú bet rơi từ 67% xuống 9,6% | /images/gto-sb-connected-oop-en.webp
/vi/blog/a-high-board-cbet | Flop mà big blind check 98% số lần | /images/gto-srp-dry-ace-oop-en.webp
:::

## Tự kiểm tra

Mọi con số ở đây sẽ hiện ra nếu bạn mở [GTO poker solver miễn phí](/vi/solver) và vào **Spot mẫu → "Board đôi A" → [⚡ Xem kết quả]**. Muốn chơi chính spot này như một bài tập thì hãy mở [Trainer GTO](/vi/solver) từ thanh bên — nó chia cho bạn một tay bài ngẫu nhiên, và khi bạn chọn hành động, nó hiện tần suất trộn cùng **EV mất** (bb) của lựa chọn đó. Lịch sử của bạn mặc định được lưu trên thiết bị này; đăng nhập tài khoản HoldemMaster để lưu vào tài khoản và học tiếp trên thiết bị khác — đăng nhập là tùy chọn, mọi tính năng đều dùng được khi không đăng nhập.

**Hãy bấm qua lại với board có đôi 6-6-3.** Cả hai đều là board có đôi mà ma trận lại mang màu ngược nhau. Đi qua các Spot mẫu một lượt, bạn sẽ còn lại một kết luận: trước hết đừng nhìn **đó là board gì**, mà nhìn **board này gắn với range của ai**. Miễn phí, không cần cài đặt, không cần tài khoản.

**Q. Trips và set trong poker khác nhau thế nào?**

A. Trips (1 lá trên tay + board có đôi) hình thành khi board có hai lá cùng hạng và bạn cầm lá thứ ba của hạng đó. Trên A-A-6, phần lớn tay cầm một lá A đều thuộc nhóm này (**A-6 không phải trips mà là cù lũ** — nó còn ghép đôi với lá 6 của board), và ở spot này là 88 combo (17,5%) cho small blind và 66 (13,1%) cho big blind. Set (cầm đôi trên tay + 1 lá trên board) hình thành theo chiều ngược lại, từ một đôi tẩy cộng thêm một lá cùng hạng trên board. Cả hai đều là sám cô (three of a kind). Lưu ý 6-6 ở đây có tạo set với lá 6 của board, nhưng đôi A của board nằm trên nó, nên bài cuối cùng là **cù lũ**.

**Q. Bet cả bằng những tay trượt board thì chẳng phải là bluff sao?**

A. Xét từng tay thì đúng. Nhưng trong GTO, **bluff không phải là "tôi đang lừa bằng tay này" — mà là "range của tôi có bao nhiêu phần trăm bluff."** Solver không gắn nhãn bluff cho một tay bài; nó đặt **một tần suất cho mọi tay bài**, và tần suất bet của range chỉ đơn giản là trung bình các tần suất đó trên toàn bộ combo. Khi 51,5% range của đối thủ đã trượt, một cú bet nhỏ có rất nhiều chỗ để tạo áp lực, và khi nó không khiến họ fold, 88 combo trips của small blind sẽ thu về. Giá trị và bluff đi ra ở cùng một size, nên đối thủ không phân biệt được.

**Q. Trên board như A-A-6, khả năng đối thủ cầm A là bao nhiêu?**

A. Ở spot này là **72 trên 505 combo của big blind (14,3%)** — 66 combo trips cộng 6 combo A-6 tạo cù lũ. Với A♠ và A♥ trên board, chỉ còn lại hai lá A, nên con số thấp hơn cảm giác. Ngược lại, small blind cầm **95 combo (18,9%)**: 88 trips, 6 combo A-6 và 1 combo A-A. Cùng một board cho ra đáp án khác nhau tùy vào ai đã tấn công trước flop.

**Q. Kết luận xuyên suốt cả series này là gì?**

A. Rằng **"hành động trước là bất lợi" chỉ đúng một nửa.** Big blind bên call ở các spot ① đến ⑦ chỉ bet 0,1%–23,7%, nhưng từ cùng ghế hành động trước, bên 3-bet trong pot 3-bet bet 98%–100%, còn small blind bên open trong blind đối đầu blind dao động từ 9,6% đến 80,1% tùy board. Không phải ghế ngồi mà là **mối quan hệ giữa range và board** quyết định tần suất. Bạn có thể tự bấm qua từng spot này trong Spot mẫu của [GTO poker solver miễn phí](/vi/solver) của HoldemMaster.
`.trim(),
};

export default POST;
