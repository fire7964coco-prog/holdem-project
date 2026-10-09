import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-3bet",
  title: "3-bet trong poker: khi nào nên 3-bet, bao nhiêu và đối phó thế nào",
  seoTitle: "Đừng 3-bet theo cảm tính — 3bet poker khi nào, bao nhiêu",
  desc: "Bị 3-bet là lúng túng? 3-bet trong poker là gì, vì sao gọi là '3', khi nào 3-bet value hay light, sizing kèm phép tính và cách đáp trả khi bị 3-bet — 16 phút.",
  tldr: "3-bet là lần re-raise đầu tiên trước flop — gọi là 3-bet vì big blind là cược thứ nhất, open-raise là thứ hai và re-raise là thứ ba. 3-bet value với lõi chặt (QQ+, AK) cộng vài bluff có blocker như A5s, size khoảng 3 lần open khi có vị trí và 4 lần khi không, giữ tần suất 3-bet quanh 6–10%. Khi bị 3-bet, hãy 4-bet bài premium, call bài chơi tốt postflop và bỏ phần còn lại — bỏ nhiều hơn mức 'cân bằng' trước đối thủ cược nhỏ không bao giờ bluff.",
  category: "strategy",
  date: "2026-10-09",
  updated: "2026-10-09",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "16 phút",
  emoji: "♦️",
  image: "/images/holdem-3bet-hero.webp",
  imageAlt: "Một người chơi poker đẩy chồng chip lên để re-raise trong khi người raise ban đầu nhìn theo, một cuộc đối đầu 3-bet preflop trên mặt nỉ xanh",
  tags: ["3bet poker", "3 bet trong poker là gì", "3bet là gì", "3 bet là gì", "3bet light", "3bet range", "squeeze poker", "4bet poker", "3-bet sizing", "3 bet light poker"],
  content: `
Ván bài dạy tôi 3-bet thực sự *để làm gì* diễn ra thế này: một người chơi lỏng open, tôi nhìn xuống thấy A-K, và — như mọi người mới — tôi chỉ call (theo). Flop ra Át cao, tôi không đưa được tiền nào vào pot, và anh ta fold (bỏ bài) trước một cú bet duy nhất. Tôi đã biến tay bài tốt nhất thành một pot tí hon. Một tuần sau, cùng tình huống, tôi *re-raise* thay vì call. Anh ta call với một lá Át yếu hơn, dốc hết stack trên flop Át cao, và tôi thắng gấp năm lần. Cùng lá bài. Một quyết định — cú 3-bet — là toàn bộ khác biệt.

**3-bet** (re-raise, tố lại) là một trong những vũ khí mạnh nhất của No-Limit Hold'em, và cũng là một trong những thứ bị hiểu sai nhiều nhất. Phần lớn bài hướng dẫn chỉ cho bạn nửa bức tranh: cách *thực hiện* một cú 3-bet, nhưng không nói bao nhiêu, không nói tay bài nào là bluff và vì sao, không nói phải làm gì khi ai đó 3-bet *bạn*. Đây là ==cẩm nang **3-bet** hoàn chỉnh== — định nghĩa, sizing với phép toán được trình bày thật, range value và range light, squeeze, đối mặt 3-bet, và những sai lầm âm thầm ngốn stack của bạn. Nó là mảnh lõi của một [chiến thuật Texas Hold'em](/vi/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") thắng — nguyên tắc [raise hoặc fold](/vi/blog/holdem-limping), nâng lên một bậc.

---

### 3-bet qua những con số

:::stripe
Cược thứ 3 | Vì sao gọi là "3-bet" (blind = cược 1)
~3x / ~4x | Sizing: có vị trí so với không có vị trí
6–10% | Tần suất 3-bet tổng thể lành mạnh
QQ+, AK | Lõi value gần như ai cũng đồng ý
:::

---

## 3-bet trong poker là gì — vì sao gọi là "3"?

**3-bet là lần re-raise đầu tiên trước flop** — bạn raise lại (tố lại) một người đã open-raise. Nếu ai đó open lên 3 big blind (mù lớn) và bạn nâng lên 9, đó là một cú 3-bet.

Vậy vì sao gọi là *ba*-bet khi nó chỉ là cú raise thứ hai? Vì cái tên đếm **số cược trong chuỗi, không phải số raise.** Big blind là một khoản cược bắt buộc — đó là ==cược thứ nhất==. Open-raise là ==cược thứ hai==. Cú re-raise của bạn là ==cược thứ ba== — 3-bet. Lần theo chuỗi đi lên và phần từ vựng còn lại tự vào chỗ:

- **4-bet** — cú re-raise *đè lên* một 3-bet (cược thứ tư). Rất mạnh hoặc phân cực.
- **5-bet** — cú re-raise đè lên một 4-bet. Ở 100 big blind thường là all-in (tất tay).
- **Cold 4-bet** — một cú 4-bet từ người chưa raise lần nào (ví dụ UTG open, bạn 3-bet, button 4-bet "cold"). Nó gào lên sức mạnh.

Đó là toàn bộ cái thang. Mọi thứ còn lại trong bài là về nấc đầu tiên — khi nào leo lên, leo cao bao nhiêu, và làm gì khi ai đó leo lên đầu bạn. Nếu các [hành động cược](/vi/blog/holdem-betting-actions) cơ bản check, call và raise còn mơ hồ, hãy bắt đầu ở đó rồi quay lại.

---

## Vì sao phải 3-bet? 3-bet thực sự làm được gì?

Call một cú open-raise (gọi là **flat**) giữ bạn trong pot, nhưng 3-bet làm được bốn việc mà flat không thể: thắng pot ngay lập tức, xây pot lớn với bài mạnh nhất, giành quyền chủ động cược, và từ chối đối thủ phần equity (phần pot kỳ vọng, tính cả khi chia pot) lẫn thông tin. Cụ thể:

1. **Nó thắng pot ngay lập tức, thường xuyên.** Một phần đáng kể số lần, người raise fold và bạn thu pot trước flop không cần showdown (lật bài). Flat không bao giờ làm được điều này.
2. **Nó xây pot lớn với những tay bài mạnh nhất của bạn.** Khi bạn cầm đôi Át hay đôi K, flat để ba người khác vào với giá rẻ. 3-bet cô lập người raise và đưa tiền vào pot khi bạn là cửa trên áp đảo.
3. **Nó giành quyền chủ động cược.** Bạn trở thành kẻ tấn công dẫn cược ở mọi vòng — và trước một người open rộng, áp lực đó in ra tiền.
4. **Nó từ chối equity và thông tin.** Một cú raise bắt đối thủ trả giá để tiếp tục thay vì cho họ xem flop rẻ với một tay bài có thể đánh bại bạn.

Cái bẫy: vì 3-bet mạnh, làm *sai* rất đắt. Quá nhiều người chỉ 3-bet với bài khủng, khiến họ hoàn toàn dễ đọc. Phần còn lại của bài là về cách làm đúng.

---

## Khi nào nên 3-bet? Bài value và 3-bet light

![Infographic lưới tối theo màu thương hiệu chia tay bài 3-bet thành hai cột — 3-BET VALUE như đôi Át, đôi K, đôi Q và Át-K, và 3-BET LIGHT như Át thấp đồng chất và suited connector](/images/holdem-3bet-range-grid.webp "Một range 3-bet lành mạnh có hai phần: lõi value bạn muốn bị call, và vài bluff đồng chất có blocker bạn sẵn sàng fold trước 4-bet")

Một range 3-bet thắng có **hai phần riêng biệt**, và hiểu được sự phân chia này là bước nhảy lớn nhất trong chủ đề. Phần value là những tay bài bạn muốn bị call vì bạn đang dẫn trước; phần light (3-bet bluff) là những tay bài bạn 3-bet mong đối thủ fold, nhưng vẫn còn equity dự phòng nếu bị call.

**3-bet value** — tay bài bạn *muốn* bị call vì bạn đang dẫn trước những gì tiếp tục:
- **Lõi, gần như luôn luôn:** ==g:QQ+ và AK.==
- **Mở rộng tới** JJ, TT, AQs và KQs khi bạn đối đầu một cú open rộng hơn từ vị trí muộn — và thu hẹp về lõi trước một người raise chặt ở vị trí sớm.

**3-bet light (3-bet bluff)** — tay bài bạn 3-bet *hy vọng* đuổi họ ra, nhưng vẫn có equity dự phòng khi bị call. Ứng viên tốt nhất không phải rác ngẫu nhiên; chúng được chọn vì **blocker** và **khả năng chơi**:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tay bài 3-bet light | Vì sao là bluff tuyệt vời |
|:---|:---|
| **A5s–A2s** (Át thấp đồng chất) | Lá Át của bạn **chặn** bài premium của họ — nó giảm số tổ hợp AA của họ từ 6 xuống 3 và AK từ 16 xuống 12 — nên họ ít khả năng có tay bài tiếp tục hơn. Thêm nữa, nó flop ra thùng (flush), sảnh (straight) và bài chờ sảnh thấp. |
| **Suited connector** (76s, 65s) | Khả năng chơi tuyệt vời — chúng flop ra sảnh, thùng và bài chờ, nên thắng đủ nhiều ngay cả khi cú bluff bị call. |
| **Đồng chất cách một bậc** (T8s, 97s) | Cùng ý tưởng, yếu hơn một chút: ngụy trang tốt, linh hoạt, và rẻ để fold nếu bị 4-bet. |

</div>

Logic blocker trong một câu: **cầm một lá Át khiến về mặt toán học đối thủ ít khả năng cầm đôi Át hoặc Át-K hơn**, nên A5s là bluff tốt hơn hẳn, chẳng hạn, A9o — tay bài chặn cùng những premium đó nhưng chơi rất tệ khi bị call và chủ yếu chỉ tạo đôi yếu. Equity dự phòng quan trọng vì đối thủ sẽ không fold mọi lần; bạn muốn một cú bluff vẫn có thể thắng pot. Đó là lý do A5s có ≈ 30% equity trước range call QQ+/AK, trong khi rác lệch chất nằm thấp hơn hẳn. Đây vẫn là kỷ luật [chọn bài khởi đầu](/vi/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") như mọi khi — chỉ là áp dụng cho việc re-raise.

---

## Range 3-bet tuyến tính (linear) và phân cực (polarized) khác nhau thế nào?

Bạn sẽ gặp hai từ này ở khắp nơi trong chiến thuật 3-bet. Chúng mô tả *hình dạng* của range, và chọn đúng hình dạng là thứ tách người chơi biết suy nghĩ khỏi những cỗ máy học thuộc bảng. Range tuyến tính (linear) là một khối liền gồm các tay bài tốt nhất; range phân cực (polarized) là hai đầu — bài mạnh nhất cộng bluff — không có gì ở giữa:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| | Tuyến tính (linear) | Phân cực (polarized) |
|:---|:---|:---|
| **Hình dạng** | Một khối liền gồm các tay bài tốt nhất | Hình tạ: value mạnh nhất **+** bluff, không có gì ở giữa |
| **Ví dụ** | QQ+, AK, AQs, JJ, TT, KQs | QQ+ và AK + bluff kiểu A5s; flat phần giữa JJ/AQ/TT |
| **Dùng khi** | Cú open **rộng và yếu** (vị trí muộn), hoặc bạn **có vị trí**. Trước cùng cú open, small blind nghiêng về tuyến tính hơn big blind, vì nó hiếm khi flat | Cú open **mạnh/chặt** (vị trí sớm), hoặc bạn ở **big blind** (nơi bạn flat phần giữa với giá giảm) |

</div>

Lý do rất đơn giản: trước một cú open **rộng, yếu**, những tay như AQ và TT thực sự đang dẫn trước, nên bạn 3-bet chúng để lấy value trong một khối gộp (**linear**). Trước một cú open **chặt**, cùng những tay ở giữa ấy bị áp đảo và bị 4-bet "thổi bay", nên bạn chỉ 3-bet value thật cộng bluff sạch và *flat* phần giữa (**polarized**).

Một sắc thái trung thực mà đám đông học thuộc bảng bỏ qua: **vị trí không phải yếu tố duy nhất.** Câu hỏi thật là *bạn có khả năng bị thổi bay khỏi tay bài đến đâu* — điều cũng phụ thuộc vào độ hung hãn của đối thủ, rake và sizing của bạn. Đối mặt người call nhiều và hiếm khi 4-bet, với size nhỏ và rake thấp, nghiêng về **linear**. Đối mặt người thích 4-bet với size lớn và rake cao, nghiêng về **polarized**. Đọc tình huống, đừng học thuộc quy tắc.

---

## 3-bet bao nhiêu là đủ? (Sizing kèm phép tính)

Phần lớn bài hướng dẫn bảo bạn "3x khi có vị trí, 4x khi không" rồi đi tiếp. Đây là *lý do* và phép tính thật, dùng một cú open tiêu chuẩn **3 big blind** (tạm gọi là open $6 ở bàn $1/$2):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tình huống | Size | Open 3bb thành… | Vì sao |
|:---|:---:|:---:|:---|
| **Có vị trí** (bạn hành động sau) | ~3x cú open | **9bb** ($18) | Vị trí cho phép bạn thắng với size nhỏ hơn, nên bạn mạo hiểm ít hơn. |
| **Không có vị trí** (bạn hành động trước) | ~4–4,5x | **12–13,5bb** ($24–27) | Lớn hơn bắt họ trả nhiều hơn để xem flop và không cho bất lợi vị trí của bạn một chuyến đi rẻ. |
| **Squeeze** (open + một người call) | Size OOP **+ ~1x mỗi người call** | **~15–16,5bb** ($30–33) | Thêm tiền chết và thêm một người cần đẩy ra. |

</div>

⚠ **Cô lập một limper không phải 3-bet.** Nếu mọi người trước bạn đều limp, cú raise của bạn là cú raise *đầu tiên* của vòng — một 2-bet. Sizing trả lời cùng câu hỏi, nên nó nằm ở đây: **3bb + 1bb mỗi limper** (thêm 1 nữa nếu live), rơi vào khoảng **4–5bb**. Nó trừng phạt cú limp và ngăn người khác call theo — bạn vẫn sẽ bị call rộng.

Phép tính được để lộ ra có chủ đích vì đó là chỗ người mới rò rỉ: **3 × 3bb = 9bb** khi có vị trí, **4 × 3bb = 12bb** khi không có vị trí. Hai quy tắc đè lên các hệ số:

- **Ở stack bình thường, không bao giờ 3-bet quá nhỏ khi không có vị trí.** Một cú 3-bet OOP nhỏ cho đối thủ giá rất tốt để call và chơi lấn lướt bạn bằng vị trí — chính thứ bạn đang cố tránh. Dùng đủ 4x+.
- **Sizing không phải định luật.** Giảm size trước người fold quá nhiều (bạn bluff rẻ hơn) và tăng size, đi thuần value trước calling station không bao giờ fold. Rake và độ sâu stack cũng dịch chuyển nó.

Ở giải đấu với stack cạn, toàn bộ phép tính đổi khác: ở khoảng **10–25 big blind**, nhiều tay bài trở thành **3-bet all-in (một cú "shove")** thay vì re-raise nhỏ, vì không còn chỗ để raise rồi fold. Chuyển từ 3-bet tối thiểu sang jam khi bạn ngắn dần — dù trước những bàn mạnh, giữ vài cú 3-bet nhỏ không all-in trong hỗn hợp.

---

## 3-bet, call hay fold? Bảng quyết định

Đối mặt một cú open, bạn có ba lựa chọn, không phải hai. Đây là tấm bản đồ hiếm khi được vẽ cho người mới — khi nào một tay bài thích 3-bet, flat (call), hay vào đống bài bỏ:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tay bài của bạn | Có vị trí (ví dụ button trước một cú steal) | Không có vị trí (small blind — big blind flat rộng hơn, xem bên dưới) |
|:---|:---|:---|
| **Premium** (QQ+, AK) | 3-bet lấy value | 3-bet lấy value |
| **Mạnh** (JJ–TT, AQ, KQs) | 3-bet trước open rộng; flat trước open chặt | Chủ yếu 3-bet hoặc fold — flat khi OOP là yếu |
| **Đầu cơ** (đôi nhỏ, suited connector) | Flat để set mining / xem flop rẻ | 3-bet như bluff, hoặc fold |
| **Bluff có blocker** (A5s–A2s) | 3-bet như một cú raise light | 3-bet như một cú raise light |
| **Mọi thứ khác** | Fold | Fold |

</div>

Điểm rút ra lớn: **flat là hợp lý khi có vị trí** — solver hiện đại giữ một range flat lành mạnh ở button vì bạn hành động cuối ở mọi vòng cược postflop và chỉ còn hai blind phía sau, nên rủi ro bị squeeze nhỏ và bạn có thể xem flop có lời. Không có vị trí thì yếu hơn, nhưng với một phân nhánh quan trọng: từ **small blind (mù nhỏ)**, nghiêng về *3-bet hoặc fold* với range **linear** hơn: call rộng khi OOP thực hiện equity kém và tạo ra một range yếu, dễ bị giới hạn, nên bạn raise phần trên của range và buông phần còn lại. **Big blind** là ngoại lệ — vì bạn khép vòng cược và đã được giá, bạn phòng thủ bằng cách *call* rộng hơn nhiều ở đó, nhất là trước những cú steal từ vị trí muộn. Điều đó khiến 3-bet từ big blind của bạn tương đối **polarized**: bài mạnh và bluff, phần giữa thì flat. Vị trí, một lần nữa, thay đổi mọi thứ — cùng bài học với [cẩm nang vị trí](/vi/blog/holdem-position-play).

---

## Squeeze là gì — 3-bet khi có cả người raise và người call?

![Chồng chip của ba người chơi đẩy về giữa mặt nỉ xanh khi một người đẩy cú re-raise lớn hơn lên, squeeze người open-raise và người call](/images/holdem-3bet-squeeze.webp "Một cú squeeze trừng phạt người open-raise và người flat call cùng lúc — tiền chết thêm vào nâng phần thưởng của cả một cú 3-bet light")

**Squeeze** là một cú 3-bet thực hiện sau khi đã có một cú open-raise *và* ít nhất một người call. Gọi là squeeze (ép) vì bạn đặt cả hai đối thủ vào gọng kìm: người raise ban đầu giờ phải lo về người call phía sau, còn người call — vừa cho thấy một tay bài không đủ mạnh để re-raise — hiếm khi muốn tiếp tục trước sự chủ động của bạn.

Hai điều khiến squeeze đặc biệt:
- **Có nhiều tiền chết hơn.** Pot đã chứa cú raise và cú call, nên một cú squeeze thành công thắng nhiều hơn. Vì bạn cũng tăng size cho người call, điều đó không luôn hạ tỷ lệ fold mà bluff của bạn cần — từ blind nó giảm một chút, từ button gần như không đổi — nhưng mỗi cú fold giờ thu về nhiều chip hơn.
- **Size lớn hơn.** Thêm khoảng một cú open-raise cho mỗi người call. Trước một cú open 3bb cộng một người call, squeeze lên khoảng **15–16,5bb** là tiêu chuẩn — size thêm chính là thứ đẩy cả hai người ra.

Bluff squeeze tốt là cùng những tay đồng chất có blocker (A5s và đồng bọn) làm bluff 3-bet tốt, vì bạn vẫn muốn đuổi bài trung bình của người raise ra và có equity khi bị call.

---

## Bị 3-bet thì call, 4-bet hay fold?

![Một người chơi poker nhìn chằm chằm vào cú re-raise preflop, tay đặt trên chip, cân nhắc call, 4-bet hay fold trước 3-bet](/images/holdem-3bet-facing.webp "Nửa kia của 3-bet không ai dạy: khi ai đó re-raise bạn, phần lớn range của bạn đơn giản nên fold — nhất là trước những người không bao giờ bluff")

Đây là nửa kia của 3-bet mà gần như mọi bài viết bỏ qua: **bạn sẽ ở đầu nhận gần như thường xuyên bằng số lần bạn tự 3-bet.** Khi bạn open và bị re-raise, bạn có ba phản ứng:

- **4-bet** — lấy value với bài premium (QQ+, AK), cộng thỉnh thoảng một cú bluff có blocker (tay kiểu A5s). Một cú 4-bet value nói "tôi không đi đâu cả" — một cú 4-bet bluff có blocker vẫn fold trước 5-bet.
- **Call** — với những tay bài flop tốt và có equity hoặc vị trí để tiếp tục: đôi tẩy muốn set mining, broadway đồng chất, và bài mạnh không muốn thổi phình pot thành cuộc chiến 4-bet.
- **Fold** — mọi thứ khác. Phần lớn range open của bạn đơn giản nên bỏ cuộc trước một 3-bet; đó là bình thường, không phải yếu.

Nên tiếp tục bao nhiêu? Đường cơ sở lý thuyết là **tần suất phòng thủ tối thiểu (MDF)** — tỷ lệ range bạn phải tiếp tục để người 3-bet không tự động có lời khi bluff bằng bất kỳ hai lá nào (công thức coi một cú bluff không có equity khi bị call). Nó là ==pot ÷ (pot + bet)== — trong đó *pot* là những gì ở giữa trước cú 3-bet và *bet* là phần người 3-bet **thêm vào** (từ ghế blind, đó là cú raise trừ chip đã đặt) — và trước các size 3-bet thông thường rơi vào khoảng **một phần ba range** trên lý thuyết thuần túy (một cú 3-bet 3x từ button: pot 4,5bb ÷ (4,5bb + 9bb) ≈ 33%). Nhưng đây là cú khai thác kiếm tiền ở bàn thật. Nó đọc rõ nhất từ ghế bên kia, nên hãy đổi chỗ cho bảng dưới: chỉ số bên dưới là tần suất **họ** fold khi **bạn** 3-bet họ.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Chỉ số fold-to-3-bet của đối thủ | Nó cho bạn biết gì | Điều chỉnh của bạn |
|:---:|:---|:---|
| **~35% (hiếm khi fold)** | Thường là calling station — họ tiếp tục với gần như mọi thứ, nên một cú bluff hiếm khi lấy đủ fold để có lời | 3-bet họ **chỉ để lấy value**, ngừng bluff, và value bet không ngừng |
| **~55% (cân bằng)** | Một reg biết suy nghĩ | Chơi gần GTO — trộn value và bluff có blocker |
| **~70%+ (fold quá nhiều)** | Một nit có thể khai thác | 3-bet họ **light thường xuyên hơn nhiều** — họ dâng pot cho bạn |

</div>

Giờ đổi lại. MDF giả định một đối thủ *cân bằng*. Ở mức cược thấp và bàn live, người chơi **bluff quá ít** với cú 3-bet — nên khi một người chơi bị động bỗng re-raise, hãy tin họ và **phòng thủ ít hơn đường cơ sở MDF; nói cách khác, fold nhiều hơn 1−MDF.** Bạn không nợ một nit một màn phòng thủ "cân bằng".

---

## Một ván 3-bet thực tế từ đầu đến cuối

Đủ lý thuyết rồi — đây là một ván đầy đủ với các con số, để bạn thấy toàn bộ dòng chảy. Cash $1/$2, stack sâu 100bb.

- **Preflop:** Một cutoff lỏng open lên ==$6== (3bb). Tôi ở button với ==A♠Q♠==. Đây là một cú **3-bet value** rõ ràng trước một cú open rộng từ vị trí muộn, và tôi có vị trí, nên tôi nâng lên ==$18== (3x). Hai blind fold; cutoff call. Pot là $39.
- **Flop:** ==Q♦ 8♣ 4♥.== Tôi flop **top pair, top kicker** — A♠Q♠ của tôi tạo đôi Q với kicker (lá phụ) tốt nhất có thể (lá Át). Năm lá tốt nhất: Q♠ Q♦ A♠ 8♣ 4♥ = một đôi Q (one pair) với kicker Át. Trước range gồm Q yếu hơn, đôi 8 và float của anh ta, tôi dẫn trước rất xa.
- **Điểm mấu chốt:** vì tôi 3-bet preflop, pot đã lớn và tôi dẫn cược, nên tôi bet tiếp để lấy value và được trả tiền bởi những lá Q yếu hơn và bài chờ. Nếu tôi chỉ *flat* preflop, ba người khác có thể đã xem flop đó, tay bài của tôi khó chơi hơn nhiều, và pot chỉ bằng một phần nhỏ. Cú 3-bet là thứ biến top pair thành cả một stack.

Giờ lật lại: nếu tôi 3-bet một tay **light** như A5s ở đó và cutoff **4-bet** lên $48 (khoảng 2,7x — nhỉnh hơn mức 2,2–2,5x khi có vị trí một chút, vì cutoff hành động trước postflop), tôi đơn giản fold — cú bluff có blocker đã làm xong việc bằng cách cho tôi một cú laydown rẻ và sạch. Đó là kỷ luật khiến 3-bet light sinh lời thay vì vung tiền.

---

## 6 sai lầm 3-bet phổ biến nhất là gì?

Sáu lỗi cứ lặp lại ở mọi bàn cược nhỏ: 3-bet quá nhỏ khi không có vị trí, chỉ 3-bet value, không bao giờ 3-bet bluff, 3-bet merged (range trộn cả bài value mỏng) trước nit, bluff bằng bài rác, và flat quá nhiều từ small blind. Mỗi lỗi có một cách sửa cụ thể:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Sai lầm | Vì sao nó khiến bạn mất tiền | Cách sửa |
|:---|:---|:---|
| **3-bet quá nhỏ khi OOP** | Cho họ giá rất tốt để call — họ thực hiện equity khi có vị trí trước bạn | Ở stack bình thường, dùng đủ 4x+ khi không có vị trí |
| **Chỉ 3-bet value** | Bạn lộ hết bài; người chơi giỏi fold mọi thứ trừ cooler | Thêm bluff đồng chất có blocker (A5s) |
| **Không bao giờ 3-bet bluff** | Bỏ tiền trên bàn trước những cú steal rộng; range flat của bạn quá yếu | Cân bằng value với vài cú 3-bet light |
| **3-bet merged trước nit** | "Value" của bạn bị range toàn premium của họ áp đảo | Đi polarized hoặc đơn giản fold trước một nit thật sự |
| **Bluff 3-bet bằng rác (Q7o)** | Blocker yếu và ít equity dự phòng — bạn phải fold trước mọi 4-bet | Chỉ chọn tay bài có blocker/khả năng chơi |
| **Flat quá nhiều từ small blind** | Thực hiện equity kém khi OOP; range yếu, dễ bị giới hạn | Gặp raise, chủ yếu 3-bet hoặc fold từ SB; dành flat rộng cho big blind |

</div>

Để ý sợi chỉ xuyên suốt cả sáu: một cú 3-bet tốt có *lý do* — value bạn muốn bị call, hoặc bluff có blocker và equity dự phòng. Re-raise ngẫu nhiên không có kế hoạch là cách stack biến mất.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-strategy | 5 quyết định đứng sau poker thắng | /images/holdem-strategy-hero.webp
/vi/blog/holdem-position-play | Vị trí thắng pot cho bạn như thế nào | /images/holdem-position-play-hero.webp
:::

## Câu hỏi thường gặp

**Q. 3bet poker là gì?**

A. 3-bet là lần re-raise đầu tiên trước flop — bạn raise lại một người đã open-raise. Ví dụ, nếu ai đó open lên 3 big blind và bạn nâng lên 9, bạn đã 3-bet. Đó là công cụ chính để xây pot với bài mạnh và gây sức ép lên đối thủ open quá rộng.

**Q. Vì sao gọi là 3-bet?**

A. Vì cái tên đếm số cược trong chuỗi, không phải số raise. Big blind là cược bắt buộc thứ nhất, open-raise là cược thứ hai, và cú re-raise của bạn là thứ ba — "3-bet". Đó là lý do nó được gọi là ba-bet dù về kỹ thuật chỉ là cú raise thứ hai của ván.

**Q. 3-bet và 4-bet khác nhau thế nào?**

A. 3-bet là cú re-raise đầu tiên (đè lên một open-raise); 4-bet là cú re-raise kế tiếp, đè lên một 3-bet. Vậy cái thang là: open-raise (cược thứ 2) → 3-bet (cược thứ 3) → 4-bet (cược thứ 4) → 5-bet (thường là all-in). Một cú 4-bet thể hiện range rất mạnh — thường phân cực giữa premium và vài bluff.

**Q. Nên 4-bet với bài gì và bao nhiêu?**

A. 4-bet với range phân cực: premium để lấy value (QQ+ và AK — trước đối thủ hiếm khi 3-bet, siết lõi về AA–KK) và vài bluff có blocker như A5s chặn đôi Át và Át-K của đối thủ. Size một cú 4-bet khoảng 2,2–2,5x cú 3-bet khi có vị trí và nhỉnh hơn một chút khi không có vị trí — nhỏ hơn phần lớn người mới nghĩ, vì pot đã lớn. Về tần suất, người chơi vững chỉ 4-bet vài phần trăm tay bài; mở rộng 4-bet value trước đối thủ 3-bet quá thường xuyên.

**Q. Khi nào nên 5-bet trong poker?**

A. 5-bet là cú re-raise đè lên một 4-bet, và ở khoảng 100 big blind gần như luôn là all-in. 5-bet để lấy value với phần đỉnh của range (AA, KK, thường cả AK) và, trước những người chơi hung hãn hay 4-bet light, thêm thỉnh thoảng một cú bluff có blocker Át. Trước phần lớn đối thủ cược thấp, một cú 5-bet gào lên "đôi Át hoặc đôi K", nên nếu một người chơi bị động 5-bet, fold mọi thứ trừ premium tuyệt đối của bạn.

**Q. Nên 3-bet với những bài nào?**

A. Chia 3-bet của bạn thành value và bluff. Lõi value là QQ+ và AK, mở rộng tới JJ, TT, AQs và KQs trước những cú open rộng hơn. Với bluff, dùng tay bài đồng chất có blocker và khả năng chơi — A5s đến A2s và suited connector (hai lá bài liên tiếp cùng chất) như 76s và 65s — không phải rác lệch chất ngẫu nhiên.

**Q. Khi nào nên 3-bet thay vì chỉ call (flat)?**

A. 3-bet khi bạn có premium, khi người open rộng và yếu, hoặc khi bạn không có vị trí và muốn tránh một cú flat tệ. Flat ổn khi có vị trí với bài đầu cơ (đôi nhỏ, suited connector) nơi bạn có thể xem flop rẻ với button. Không có vị trí, ưu tiên 3-bet hoặc fold hơn call — với big blind là ngoại lệ, nơi bạn khép vòng cược với giá tốt và phòng thủ bằng cách call rộng hơn nhiều.

**Q. 3-bet light là gì?**

A. 3-bet light (hay 3-bet bluff) là re-raise với tay bài bạn không kỳ vọng là tốt nhất, hy vọng đuổi người open ra. 3-bet light tốt nhất có blocker và equity dự phòng — Át thấp đồng chất như A5s chặn đôi Át và Át-K của đối thủ trong khi vẫn flop ra thùng và sảnh, nên chúng giữ cơ hội thật để thắng pot ngay cả khi bị call.

**Q. Range 3-bet linear và polarized khác nhau ở đâu?**

A. Range tuyến tính (linear) là một khối liền gồm các tay bài tốt nhất — dùng trước những cú open rộng, yếu hoặc khi có vị trí. Range polarized là bài mạnh nhất cộng bluff, phần bài trung bình bị bỏ ra và flat thay thế — dùng trước những cú open chặt, và từ big blind, nơi giá bạn đã có cho phép call với phần giữa thay vì để nó bị 4-bet thổi bay. Small blind, không có cú call rẻ, nghiêng về linear hơn.

**Q. Nên 3-bet bao nhiêu?**

A. Khoảng 3x cú open khi có vị trí và 4–4,5x khi không có vị trí. Vậy trước một cú open 3 big blind, nâng lên khoảng 9bb khi có vị trí hoặc 12bb khi không. Thêm khoảng một cú open-raise cho mỗi người call khi squeeze. Ở stack bình thường, đừng 3-bet nhỏ khi không có vị trí — nó cho đối thủ một cú call rẻ, dễ dàng khi họ có vị trí.

**Q. Tỷ lệ 3-bet bao nhiêu là tốt?**

A. Với một người chơi vững, tần suất 3-bet tổng thể khoảng 6–10% là lành mạnh, với khoảng 8% là điển hình cho một người chơi cash 6-max giỏi. Dưới ~4% là quá chặt và lộ bài; trên ~10% thường quá hung hãn và khiến bạn bị 4-bet và bị call quá nhẹ. Nó tự nhiên cao hơn từ blind và button so với trước những cú open từ vị trí sớm.

**Q. Squeeze trong poker là gì?**

A. Squeeze là một cú 3-bet thực hiện sau một cú open-raise và ít nhất một người call. Tiền chết thêm trong pot nâng phần thưởng khi squeeze thành công, và nước đi này gây sức ép lên cả hai đối thủ cùng lúc — người raise và người flat call bị giới hạn range. Size squeeze lớn hơn 3-bet bình thường, thêm khoảng một cú open-raise cho mỗi người call.

**Q. Phản ứng thế nào khi bị 3-bet?**

A. Bạn có ba lựa chọn: 4-bet với premium (QQ+, AK) cộng thỉnh thoảng một cú bluff có blocker, call với tay bài flop tốt và có equity hoặc vị trí (đôi, broadway đồng chất), và fold mọi thứ khác. Phần lớn range open của bạn nên fold trước một 3-bet — đó là bình thường. Trước những người hiếm khi bluff, fold còn nhiều hơn.

**Q. Tỷ lệ fold khi bị 3-bet bao nhiêu là tốt?**

A. Khoảng 55% là đường cơ sở hợp lý, gần cân bằng — bạn tiếp tục với phần trên của range và buông phần còn lại. Con số đó rộng hơn MDF thuần toán học, vốn trước một cú 3-bet 3x khi có vị trí chỉ bắt bạn phòng thủ khoảng một phần ba — nói cách khác, fold không quá khoảng 66,7%. Hãy coi con số đó là trần, không phải mục tiêu. MDF giả định bluff có equity bằng không, nhưng một cú 3-bet bluff thật như A5s mang khoảng 30% equity trước range tiếp tục của bạn, điều đẩy tần suất fold hòa vốn xuống thấp hơn hẳn mức trần lý thuyết đó. Nên 55% là đường cơ sở thực hành chứ không phải bảo đảm: một cú 3-bet light có equity thật vẫn có thể có lời trước nó. Fold nhiều hơn 55% đáng kể khiến bạn bị 3-bet light khai thác; fold ít hơn hẳn nghĩa là bạn call hoặc 4-bet quá rộng. Điều chỉnh theo đối thủ: fold nhiều hơn trước những người không bao giờ 3-bet bluff.

**Q. Stack ngắn trong giải đấu nên 3-bet hay 4-bet all-in?**

A. Khi stack ngắn dần — khoảng 10–25 big blind — nhiều tay bài chơi tốt nhất dưới dạng 3-bet all-in (một cú shove) thay vì re-raise nhỏ, vì không còn chỗ để raise rồi fold trước 4-bet. Shove hiện thực hóa toàn bộ fold equity của bạn cùng lúc. Những bàn mạnh hơn phản đòn jam thuần túy bằng các cú 3-bet nhỏ, nên hãy trộn vài cú 3-bet nhỏ không all-in khi có thể.

---

## Những điều cần nhớ

1. **3-bet là cú re-raise đầu tiên trước flop** — cược thứ ba trong chuỗi, vì blind tính là cược thứ nhất.
2. **Xây hai range:** lõi value (QQ+, AK) bạn muốn bị call, và bluff đồng chất có blocker (A5s và đồng bọn) được chọn vì blocker và khả năng chơi.
3. **Size ~3x khi có vị trí, ~4x khi không** — và, ở stack bình thường, không nhỏ khi không có vị trí.
4. **Khớp hình dạng với tình huống:** linear trước open rộng/yếu (và từ small blind khi gặp raise), polarized trước open chặt và từ big blind.
5. **Bị 3-bet, phần lớn tay bài fold** — 4-bet premium, call bài chơi được, và fold nhiều hơn mức "cân bằng" trước đối thủ không bao giờ bluff.
6. **Rồi flop đến.** Một pot 3-bet chơi không giống gì pot raise đơn — với các con số của bài này (open 3bb, 3-bet 9bb, stack 100bb) pot lớn hơn khoảng 2,6× (19,5bb so với 7,5bb mà một cú flat heads-up tạo ra; một cú 3-bet lớn hơn khi không có vị trí đẩy nó về 3,5×) và SPR (stack hiệu dụng chia cho pot) giảm xuống khoảng 4,7. Người 3-bet vẫn thường bet [toàn bộ range ở flop](/vi/blog/3bet-pot-cbet) — vì hình dạng range của mình, không phải vì stack cạn.

Làm đúng 3-bet và bạn ngừng là người chỉ call với đôi Át rồi thắng một pot tí hon. Ghép nó với một [range bài khởi đầu](/vi/blog/holdem-starting-hands-chart) có kỷ luật, ý thức sắc bén về [vị trí](/vi/blog/holdem-position-play), và [khung chiến thuật](/vi/blog/holdem-strategy) đầy đủ, và lối chơi preflop của bạn lặng lẽ vượt lên trước phần còn lại.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Khung 5 quyết định</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">3-bet nằm ở đâu trong một lối chơi thắng</div>
  </a>
  <a href="/vi/blog/holdem-limping" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Vì sao limp khiến bạn mất tiền</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Raise hoặc fold — đừng chỉ call</div>
  </a>
  <a href="/vi/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Chơi theo vị trí của bạn</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao 3-bet hiệu quả hơn khi có vị trí</div>
  </a>
  <a href="/vi/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bài khởi đầu trong poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tay bài nào đáng raise ngay từ đầu</div>
  </a>
</div>
`.trim(),
};

export default POST;
