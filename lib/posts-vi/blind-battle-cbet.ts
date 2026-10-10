import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑪ 베트남어판 — K♥10♦6♠ 블라인드전 (SB 오프너 vs BB 콜러)
 * 출처: EN 마스터 lib/posts-en/blind-battle-cbet.ts (updated 2026-10-02 · 기준 해시 b57cb658) 축어 수치.
 * 브리프: docs/vi-lanes/gto-brief.md ⑪ · 확정 카피 축어(Fable 1회 · Opus 측정).
 * 키워드: blind vs blind poker (태그) · 산문 «blind đối đầu blind (blind vs blind)» · «blind vs blind» 단독 헤드 금지(SERP 오염).
 * 한계: 트리에 33% 사이즈 하나뿐 · rake 미반영 · 플랍 첫 결정만 · «362,1»은 EN 축어(EN-먼저 미판정).
 * 이미지: vi 캡처 없음 → EN 경로(-en.webp) 그대로 (헤드 요청 = vi 캡처 후 일괄 교체).
 */
export const POST: Post = {
  slug: "blind-battle-cbet",
  title: "Người không có vị trí lại bet trước — 67,4% số lần",
  seoTitle: "Không có vị trí vẫn bet 67,4% — SB vs BB theo solver",
  desc: "Blind đối đầu blind trên K-10-6, small blind hành động trước mà không có vị trí — và bet 67,4%. Đây là cách lợi thế range kéo equity realization vượt 100%.",
  tldr: "Sau khi small blind open và big blind call, flop K♥10♦6♠ nhận một cú bet 67,4% số lần và check 32,6%. Ở bảy pot raise đơn trước đó trong series, người không có vị trí chỉ bet từ 0,1% đến 23,7% — và có hai thứ thay đổi, không phải một. Ở đây người không có vị trí là người raise chứ không phải người call, và board nghiêng về range đó. Cả hai cùng đẩy equity realization của người không có vị trí lên 103,1%.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-02",
  keepImagesInBody: true,
  readTime: "10 phút",
  emoji: "⚔️",
  image: "/images/gto-sb-king-mid-oop-en.webp",
  imageAlt: "Solver GTO của HoldemMaster hiển thị range của small blind trên flop K-10-6 rainbow, phần lớn lưới tô màu cam cho lựa chọn bet",
  tags: ["blind vs blind poker", "blind đối đầu blind", "small blind open", "flop K-high", "equity realization", "ví dụ solver"],
  content: `
Qua bảy pot raise đơn (single raised pot) trước đó trong loạt bài này, có một quy luật lặp đi lặp lại. **Ai hành động trước thì check.** Mức cao nhất mà người out of position (OOP — không có vị trí) từng bet là trên [board liền nhau 9-8-7](/vi/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp") với 23,7%, còn sáu spot (tình huống ra quyết định) còn lại cao nhất chỉ 11,2%. Ngoại lệ duy nhất là pot 3-bet.

Đây không phải pot 3-bet. Đây là một ván bình thường: small blind (SB — mù nhỏ) open lên 3bb, big blind (BB — mù lớn) call (theo). Vậy mà **người hành động trước bet 67,4%.**

Điều gì đã thay đổi? Pot nhỏ, chỉ 6bb, và stack còn sâu 97bb. Thứ thay đổi là **ai hành động trước, và board nghiêng về range nào — cả hai cùng lúc.** Mọi con số dưới đây đều lấy từ [GTO poker solver miễn phí](/vi/solver) của HoldemMaster.


:::stripe
Spot | SB open 3bb → BB call (blind đối đầu blind)
Flop | K♥ 10♦ 6♠ (rainbow)
Pot · stack | Pot 6bb · stack hiệu dụng 97bb · **SPR 16,2**
Kết quả | SB bet **67,4%** — pot raise đơn đầu tiên mà người không có vị trí bet nhiều hơn check
:::

> **Trả lời nhanh**
> Trên K-10-6 trong thế blind đối đầu blind (blind vs blind), hành động đầu tiên của small blind là **bet 67,4%, check 32,6%**. Đó là chiều ngược lại với mức 0,1%–23,7% ở các spot ① đến ⑦, và có **hai thứ** khác đi chứ không phải một: người không có vị trí ở đây là **người raise chứ không phải người call**, và board là một lá K đi kèm một lá broadway. Chỉ riêng chỗ ngồi không giải thích được điều đó — cũng small blind là người raise ấy chỉ bet **9,6%** trên [board 7-6-5](/vi/blog/blind-battle-connected-board) ở phần sau của loạt bài. Ở đây hai yếu tố trùng khớp, nên người chủ động preflop cũng là người hành động trước, nắm cả lợi thế range lẫn thứ tự hành động. Kết quả là **equity realization (EQR — phần equity bạn thực sự thu về) của người không có vị trí đạt 103,1%** — lần đầu tiên trong một pot raise đơn con số này vượt 100%.

## Những con số này đến từ điều kiện nào?

★**Điều kiện lại thay đổi.** Pot, stack và vai trò đều khác các spot trước, nên bảng điều kiện đi trước.

| Mục | Spot này (blind đối đầu blind) | ①–⑦ (BTN vs BB) | ⑧–⑩ (pot 3-bet) |
|---|---|---|---|
| Preflop | **SB open 3bb → BB call** | BTN open 2,5bb → BB call | BB 3-bet lên 11bb → BTN call |
| OOP (hành động trước) | **SB — bên open** | BB — bên call | BB — bên 3-bet |
| IP (in position — có vị trí) | BB — bên call | BTN — bên open | BTN — bên call |
| Pot | **6bb** | 5,5bb | 22,5bb |
| Stack hiệu dụng | **97bb** | 97,5bb | 89bb |
| SPR (stack hiệu dụng chia cho pot) | **16,2** | 17,7 | 4,0 |
| Cỡ bet | Khoảng một phần ba pot, **chỉ một size** | Khoảng một phần ba và ba phần tư (⑦ chỉ có một) | Khoảng một phần ba và hai phần ba |
| Rake | Không tính rake | Không tính rake | Không tính rake |
| Kiểm tra ngày | 2026-08-08 (kết quả Spot mẫu) | ①–④ 2026-08-19 · ⑤–⑦ 2026-08-20 | ⑧⑨ 2026-08-20 · ⑩ 2026-08-08 |

Pot 6bb là ==3 của SB cộng 3 của BB==. Cả hai blind đều đã ở trong ván, nên không có blind chết nào nằm bên ngoài. Stack hiệu dụng là ==100 − 3 = 97bb==.

Màn hình hiển thị theo **big blind** — cú bet được ghi là "Bet 2bb (33% pot)", gồm cả số chip lẫn tỷ lệ so với pot, và EV (giá trị kỳ vọng) được ghi là "EV (bb)".

## Small blind thật sự bet bao nhiêu phần trăm?

**Bet 67,4%, check 32,6%.** Trong 538 combo (tổ hợp bài), 362,1 combo đi vào cú bet.

| Hành động đầu tiên của SB | Tần suất | Combo |
|---|---|---|
| Bet 2bb (33% pot) | **67,4%** | 362,1 |
| Check | 32,6% | 175,9 |

Đặt cạnh phần còn lại của loạt bài, khoảng cách hiện ra rõ ràng.

| Spot | Ai không có vị trí | Tần suất bet của OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦10♠ (①②③) | BB bên call | 0,1%–1,9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB bên call | 3,0%–3,2% |
| **7♦6♦5♣ blind đối đầu blind (⑫)** | **SB bên open** | **9,6%** |
| Q♠9♠2♠ monotone (⑤) | BB bên call | 11,2% |
| 9♥8♥7♣ liền nhau (④) | BB bên call | 23,7% |
| **K♥10♦6♠ blind đối đầu blind (⑪)** | **SB bên open** | **67,4%** |
| **A♠A♥6♦ blind đối đầu blind (⑬)** | **SB bên open** | **80,1%** |
| A♦K♠2♥ · Q♥10♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB bên 3-bet | 98%–100% |

**Đừng đọc bảng này thành "chỉ chỗ ngồi là quan trọng".** Cùng một chỗ ngồi small blind là người open cho ra 9,6% ở ⑫, 67,4% ở đây và 80,1% ở ⑬ — **chênh nhau 70,5 điểm phần trăm**. Và 9,6% của ⑫ còn *thấp hơn* những người call ở ⑤ (11,2%) và ④ (23,7%). Bức tranh "một vách đá giữa người call và người chủ động" chỉ xuất hiện nếu bạn xóa hai hàng đó. Điều chắc chắn là **các pot 3-bet (98%–100%) nằm tách riêng**; phần còn lại của khoảng chênh do **chỗ ngồi và board cùng quyết định**.

## Vì sao người không có vị trí lại bet trước ở đây?

**Vì đây là chỗ ngồi mà người chủ động preflop cũng là người hành động trước ở flop.** ⚠ Trong loạt bài này, mọi trường hợp bet trước với tần suất áp đảo đều đến từ chỗ ngồi đó, nhưng chỗ ngồi không bảo đảm điều gì, và người call vẫn có thể bet trước một phần thời gian (23,7% ở ④). Cùng một cấu trúc cho ra **9,6%** [ở ⑫](/vi/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-en.webp") và **80,1%** [ở ⑬](/vi/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-en.webp"). Chỗ ngồi mở cửa; board quyết định bạn bước vào bao xa.

Trong một ván bình thường, hai yếu tố này tách rời nhau. Khi button (BTN) open và big blind call, **người chủ động là button nhưng người hành động trước lại là big blind.** Chính điều đó tạo nên cấu trúc check rồi để đối thủ c-bet (cược tiếp tục), và các spot ① đến ⑦ đều có hình dạng như vậy.

Khi blind đối đầu blind, hai yếu tố gộp làm một. Small blind là người raise (tố), và small blind cũng hành động trước ở flop. **Lợi thế range và thứ tự hành động rơi vào cùng một người.**

| | Người chủ động preflop | Người hành động trước ở flop | OOP bet |
|---|---|---|---|
| BTN vs BB (①–⑦) | BTN | **BB** | tách rời → 0,1%–23,7% |
| SB vs BB (⑪ K-10-6) | **SB** | **SB** | trùng nhau → **67,4%** |
| SB vs BB (⑫ 7-6-5) | **SB** | **SB** | trùng nhau, vậy mà → **9,6%** |

⚠ **Đừng xóa hàng thứ ba.** "Trùng nhau" **mở cửa nhưng không quyết định bạn đi xa đến đâu** — [⑫](/vi/blog/blind-battle-connected-board) có cấu trúc chỗ ngồi giống hệt spot này, không sai một chữ, mà chỉ bet 9,6%. Không có sự trùng khớp thì bạn hầu như không bet trước (hàng đầu tiên); có nó rồi, bạn vẫn cần **board hợp với range của mình** thì mới thật sự bet.

Equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) đặt một con số lên lợi thế đó. **SB 55,3% so với BB 44,7%.** Ở ① đến ⑦, người không có vị trí nằm ở mức 45,1%–48,5%, luôn dưới một nửa — chiều ngược lại.

:::pull[Không có vị trí không quyết định việc bạn có bet trước hay không — phần lớn việc đó do range của bạn gặp đúng board này ra sao.]:::

Thiếu vị trí là điều giống nhau giữa big blind ở ①–⑦ và small blind ở đây. Thứ tách chúng ra là **quan hệ giữa range và board** — ⚠ và bạn không thể rút gọn điều đó thành chỉ "range". Trên [board 7-6-5](/vi/blog/blind-battle-connected-board), range *giống hệt từng lá* mà check vẫn lên tới 90,4%.

## Vì sao ở đây 67% mà pot 3-bet lại 100%?

**Vì range phòng thủ của big blind rộng.** Đó là chỗ spot này tách khỏi mức bet 100% trong pot 3-bet.

Hai range ở đây có kích thước gần như bằng nhau: **538 combo cho SB, 525 cho BB.** Chừng đó tay bài đã đi tiếp thay vì fold (bỏ bài). Small blind chỉ raise lên 3bb, nên big blind — vốn đã bỏ 1bb — chỉ phải thêm 2bb, và cái giá đủ tốt để phòng thủ rộng.

Trước một range rộng, bạn **không thể bet mọi tay bài chỉ với hy vọng đối thủ sẽ fold.** Vì vậy 32,6% được giữ lại thành check.

Những tay check có nhiệm vụ riêng. **Tay quá yếu để bet** và **tay check để dụ đối thủ bet** đều nằm ở đó. Nếu đối thủ đọc cú check ấy là yếu và bắn, một cú [check-raise](/vi/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp") đang chờ sẵn.

:::note[⚠ Spot mẫu này được giải với một cỡ bet duy nhất — một phần ba pot — là lựa chọn duy nhất. Mở thêm một size lớn hơn trong cây thì chính con số 67,4% cũng có thể dịch chuyển. Hãy đọc nó là "nhỏ và rộng là đáp án *trong những điều kiện này*."]:::

## Hai range khác nhau ở đâu?

**Các nhóm bài mạnh nằm ở small blind; các tay chưa thành bài nằm ở big blind.**

![Infographic thành phần range so sánh các nhóm bài của small blind và big blind trên board K-10-6](/images/gto-sb-king-mid-ranges-en.webp "K-10-6 blind đối đầu blind · thành phần theo từng nhóm — big blind có nhiều tay chưa thành bài hơn khoảng 10 điểm")

| Nhóm | SB (OOP · bên open) | BB (IP · bên call) |
|---|---|---|
| Set/trips | **1,7%** | 0,6% |
| Hai đôi | 2,4% | **2,5%** |
| Overpair (AA) | **1,1%** | 0,0% |
| Top pair (K) | **15,6%** | 10,9% |
| Second pair (10) | 11,7% | **13,7%** |
| Đôi yếu | 6,1% | **8,0%** |
| Underpair | **10,0%** | 8,0% |
| A-high | **26,8%** | 22,1% |
| Chưa thành bài | 24,5% | **34,3%** |

Hai ô quyết định tất cả. **Top pair là 15,6% so với 10,9% nghiêng về small blind, còn tay chưa thành bài là 24,5% so với 34,3% — big blind nhiều hơn gần 10 điểm.**

⚠ Nhưng đừng đọc "chưa thành bài" thành "không có gì". Solver đếm draw trên một trục riêng — **bốn hàng dưới đây loại trừ lẫn nhau và mỗi cột cộng lại bằng 100%.**

| Draw | SB (OOP) | BB (IP) |
|---|---|---|
| Sảnh hở hai đầu (OESD) | 3,0% | 2,3% |
| Gutshot (sảnh hở giữa) | **16,4%** | **16,0%** |
| Backdoor flush draw | 17,8% | **21,1%** |
| Không draw | **62,8%** | 60,6% |

**Hoàn toàn không có hàng flush draw (chờ thùng)** — board là rainbow (3 lá khác chất), nên không ai có thể cầm bốn lá cùng chất ở flop này. Thay vào đó, backdoor draw chiếm một phần đáng kể trong range của họ, mà backdoor cần runner-runner (trúng cả turn lẫn river) nên hiếm khi hoàn thành.

Mức sảnh hở hai đầu 3,0% tương ứng ==0,030 × 538 = khoảng 16 combo==, và trên board này đúng một tay tạo ra sảnh hở hai đầu: **Q-J** (K-Q-J-10, cần một lá A hoặc một lá 9 — **tám outs**). Mười sáu chính xác là số combo Q-J. Hàng gutshot dày hơn vì A-Q, A-J, Q-9, J-9, 9-8 và 8-7 đều rơi vào đó.

Dù vậy, khi một phần ba range của đối thủ còn chưa bắt được đôi nào và phần trên range của bạn lại nặng hơn, bet nhỏ và rộng là chuẩn mực.

Set cũng chỉ về cùng một hướng. Ba đôi tẩy tạo set (cầm đôi trên tay + 1 lá trên board) trên board này — K-K, T-T và 6-6 — và **small blind cầm cả ba, chín combo (1,7%), trong khi big blind chỉ còn lại 6-6, ba combo (0,6%).** Big blind 3-bet K-K và T-T trước cú open của small blind thay vì call. Overpair (đôi tẩy cao hơn mọi lá trên board) thuộc về small blind vì cùng lý do: A-A, sáu combo.

## Vì sao không có vị trí mà equity realization vẫn 103,1%?

**Vì lợi thế range *vừa đủ* nặng hơn lợi thế vị trí.** Đặt các con số của spot này lên toàn bộ loạt bài là thấy câu trả lời.

| Mục | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | 55,3% | 44,7% |
| EV (bb) | 3,42 | 2,58 |
| **Equity realization (EQR)** | **103,1%** | 96,1% |

Pot là 6bb, nên phần của small blind là ==6 × 55,3% = 3,318bb== trong khi EV thực tế là 3,42bb. Tức là ==3,42 ÷ 3,318 ≈ 103,1%==.

Chọn bảy spot trong loạt bài và xếp theo EQR:

| Spot | Ai không có vị trí | Equity của OOP | EQR của OOP |
|---|---|---|---|
| A♥7♦2♣ khô (①) | bên call | 45,1% | 84,0% |
| 6♠5♥2♦ thấp (⑦) | bên call | 48,3% | 84,3% |
| 9♥8♥7♣ liền nhau (④) | bên call | 48,5% | 93,2% |
| **K♥10♦6♠ blind đối đầu blind (⑪)** | **bên open** | **55,3%** | **103,1%** |
| 8♦5♣2♠ pot 3-bet (⑩) | bên 3-bet | 58,6% | 106,9% |
| A♦K♠2♥ pot 3-bet (⑧) | bên 3-bet | 68,9% | 109,6% |
| Q♥10♥7♠ pot 3-bet (⑨) | bên 3-bet | 58,3% | 117,8% |

**Mọi hàng trên 100% đều thuộc về người không phải bên call.** ⚠ Đừng đọc ngược lại — **"không phải bên call" không có nghĩa là "trên 100%".** [Board 7-6-5](/vi/blog/blind-battle-connected-board), vắng mặt trong bảng này, là cùng small blind bên open ở mức **85,3%**, nằm lẫn giữa những người call. Và spot này là spot sát vạch nhất trong số đó: 103,1% chỉ vừa vượt qua.

⚠ **EQR cao hơn cũng không có nghĩa là lợi thế lớn hơn.** Hãy đọc bảng xếp hạng đúng như nó là — lợi thế range lớn nhất trong bảng, ⑧ với equity **68,9%**, chỉ đạt **109,6%**, *thấp hơn* **117,8%** của ⑨ với equity **58,3%** — ít hơn mười điểm. EQR là ==EV ÷ (equity × pot)==, nên **equity là mẫu số**: equity càng thấp thì với cùng một EV, tỷ lệ càng lớn. Đúng là lợi thế của một cú open-raise dừng ở 103,1%; nhưng lý do không phải là "lẽ ra nó có thể lên tới 117,8%."

Mức 96,1% của big blind là mặt còn lại của cùng câu chuyện. **Có vị trí, mà vẫn thu không đủ phần của mình.** Vì sao vị trí thường có lợi, và khi nào nó không đủ, có trong bài [vì sao vị trí quan trọng](/vi/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Ra bàn thật thì chơi khác gì?

- **Khi blind đối đầu blind, đừng mặc định "không có vị trí thì check".** Nếu bạn open từ small blind, lợi thế range **preflop** là của bạn, và solver bet 67,4% trên board này. **Nhưng bạn vẫn phải đọc board** — một lá K đi kèm một lá broadway hợp với người open, còn trên những board hợp với người call thì check quay lại ngay cả ở chỗ ngồi này. [Board liền nhau 7♦6♦5♣](/vi/blog/blind-battle-connected-board) chính là như vậy: cũng small blind ấy chỉ bet 9,6%.
- **Size là một phần ba pot.** Khi big blind phòng thủ 525 combo, nhỏ và rộng là đúng. ⚠ Đừng biến điều đó thành "bet lớn thì tệ hơn" — **Spot mẫu này chỉ có size 33% trong cây.** Không có size lớn hơn nào được giải, nên "nếu tôi bet lớn thì sao" là câu hỏi mà lần tính này không trả lời được. [Spot A-A-6](/vi/blog/ace-paired-board-strategy) ở phần sau của loạt bài thì có mở thêm size 75%.
- **★Ở SPR 16,2, hãy quyết định trước một cú raise có nghĩa là gì.** Bet 67,4% range nghĩa là bạn sẽ thường xuyên gặp raise, và với **mười sáu lần pot** còn lại phía sau, đây không phải spot để đẩy hết stack bằng top pair. Điều đó ngược với pot 3-bet ở SPR 4,0, nơi "raise" nghĩa là "stack sắp vào giữa". Ở đây call và xem turn bao phủ được phần lớn range của bạn hơn nhiều, và ngoài chín combo set cùng **hai đôi (two pair — K-T, K-6, T-6)** thì có rất ít lý do để cam kết. 🪶 Lưu ý rằng **A-A nằm *dưới* hai đôi** — không phải vì lá K trên board "ghim" nó, mà vì overpair vẫn chỉ là một đôi trong thứ tự xếp hạng bài, và một đôi thua hai đôi. Bảng nhóm bài liệt kê các nhóm theo đúng thứ tự đó, set → hai đôi → overpair (các con số 1,7% · 2,4% · 1,1% bên cạnh là tỷ trọng trong range, không phải thứ hạng sức mạnh). ⚠ Node sau cú raise không có trong lần giải này, nên đây là nhận định rút ra từ SPR, không phải con số của solver.
- **Khi phòng thủ ở big blind, hãy nhớ việc 3-bet K-K và T-T khiến bạn mất gì.** Kết quả chính là cấu trúc trên board này: set duy nhất của big blind là 6-6. Range call mỏng đi đúng bằng chừng đó.
- **Đừng đọc 32,6% check là yếu.** Các tay check-raise được trộn trong đó. Những chuẩn mực chung trong [chiến lược c-bet](/vi/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") đáng được kiểm tra lại ở chỗ ngồi này.

:::readnext[Đọc tiếp]
/vi/blog/3bet-pot-low-board | Ba combo trúng flop — mà vẫn bet 97,8% | /images/gto-3bp-low-oop-en.webp
/vi/blog/blind-battle-connected-board | Cùng ghế, cùng stack — mà cú bet rơi từ 67% xuống 9,6% | /images/gto-sb-connected-oop-en.webp
:::

## Tự kiểm tra

Mọi con số ở đây đều hiện ra nếu bạn mở [GTO poker solver miễn phí](/vi/solver) và vào **Spot mẫu → "Board K-high có lá 10" → [⚡ Xem kết quả]**. Muốn chơi chính spot này như một bài tập, hãy mở [Trainer GTO](/vi/solver) ở thanh bên — nó chia cho bạn một tay bài ngẫu nhiên, và khi bạn chọn hành động, nó cho thấy tần suất pha trộn cùng **EV mất** (bb) của lựa chọn đó. Lịch sử của bạn mặc định được lưu trên thiết bị này; đăng nhập tài khoản HoldemMaster để lưu vào tài khoản và học tiếp trên thiết bị khác — đăng nhập là tùy chọn, mọi tính năng đều dùng được khi không đăng nhập.

Hãy nhìn nhãn người chơi ở trên cùng trước: **"OOP (SB (bên open))"**. Khi thấy nó khác với "OOP (BB (bên call))" của các spot trước, bạn sẽ hiểu ngay bài viết này muốn nói gì khi bảo "vai trò đã đổi". Miễn phí, không cần cài đặt, không cần tài khoản.

**Q. Blind đối đầu blind, small blind có nên luôn c-bet không?**

A. Không phải lúc nào cũng vậy. Trên board này solver bet 67,4% và để lại 32,6% thành check. Nhưng đó là một thế giới khác với pot raise đơn thông thường, nơi người không có vị trí bet 0,1%–23,7%. **Khi vai trò đổi, mặc định cũng đổi.** Hãy nhớ rằng K-10-6 là board hợp với người open — giống như một kiểu board đã tách 0,1% khỏi 23,7% ở các spot trước, tần suất bet của small blind sẽ giảm trên những board hợp với người call.

**Q. Không có vị trí có luôn là bất lợi trong poker không?**

A. Bất lợi, nhưng không quyết định. Trong spot này small blind thu 103,1% phần equity của mình dù không có vị trí, trong khi big blind, có vị trí, chỉ thu được 96,1%. Một lợi thế range đủ lớn bù được lợi thế vị trí. Đảo chiều lại — một range yếu thì ngay cả có vị trí cũng hiện thực hóa kém.

**Q. Vì sao bet nhỏ chỉ một phần ba pot?**

A. Vì range phòng thủ của đối thủ rộng. Hai range có kích thước gần như bằng nhau, 538 combo so với 525. Trước một người mà bạn không thể trông đợi sẽ fold, gây áp lực rộng bằng size nhỏ kiếm được nhiều hơn. Hãy nhớ rằng Spot mẫu này chỉ có size 33% làm ứng viên.

**Q. Vì sao 6-6 là set duy nhất của big blind trên board này?**

A. Vì K-K và T-T bị 3-bet trước cú open của small blind thay vì được call. Nên range call của big blind chỉ giữ lại 6-6, ba combo (0,6%), trong khi small blind cầm K-K, T-T và 6-6, tổng chín combo (1,7%). A-A vắng mặt ở big blind cũng vì cùng lý do.
`.trim(),
};

export default POST;
