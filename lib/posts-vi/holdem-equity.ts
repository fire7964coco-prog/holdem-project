import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-equity",
  title: "Equity trong poker là gì? Phần pot kỳ vọng, fold equity và realization",
  seoTitle: "Equity 40% không phải thắng 40% — Equity poker là gì?",
  desc: "Equity là phần pot kỳ vọng, nhưng bạn hiếm khi giữ trọn. Vì sao equity 40% không phải thắng 40%, cùng fold equity, realization và equity khi all-in.",
  tldr: "Equity là phần pot kỳ vọng của bạn, tức phần tay bài của bạn xứng đáng nhận trung bình khi mọi lá đã được chia, tính cả khi chia pot. Bạn call khi equity vượt pot odds, nhưng vị trí và các lượt bet khiến bạn hiếm khi giữ trọn equity. Fold equity còn giúp bạn thắng pot ngay cả khi tay bài đang bị dẫn.",
  category: "odds",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "12 phút",
  emoji: "🥧",
  image: "/images/holdem-equity-hero.webp",
  imageAlt: "Hai người chơi all-in lật ngửa bài trên nỉ xanh, một chồng chip ở giữa — khoảnh khắc equity của mỗi tay bài biến thành phần pot thực sự",
  tags: ["equity poker", "equity trong poker là gì", "cách tính equity trong poker", "fold equity", "equity realization", "equity khi all-in", "ev là gì trong poker", "cách tính ev poker"],
  content: `
Suốt một năm tôi nghĩ "equity" chỉ là từ sang chảnh cho "khả năng tôi thắng". Rồi tôi thua ba pot lớn trong một đêm dù vào ván với tư cách bên có lợi thế, và một người chơi giỏi hơn nói với tôi điều đã định hình lại cả trò chơi: ==equity là phần bạn *xứng đáng nhận*, không phải phần bạn *thu về*.== Bạn có thể có 40% cơ hội thắng một ván mà hầu như không thực nhận được chút nào — hoặc đang bị dẫn mà vẫn in tiền. Hiểu khoảng cách giữa hai điều đó là phần lớn những gì tách người thắng khỏi người hy vọng.

==Equity là con số duy nhất buộc mọi mảnh toán poker khác lại với nhau — outs, pot odds, vị trí và sự chủ động đều quy về một câu hỏi: phần nào của pot này thật sự là của tôi?== Hướng dẫn này nói equity là gì, cách ước lượng nó, và ba điều chẳng ai nói với người mới: vì sao bạn không giữ trọn nó, một đối thủ fold trao thêm cho bạn thế nào, và vì sao tay bài lớn của bạn teo lại trước đám đông.

Các xác suất thô đằng sau mỗi tay bài đến từ [bảng xác suất poker](/vi/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); hướng dẫn này là cách bạn biến những con số đó thành quyết định ở bàn.

---

### Equity trong một cái nhìn

:::stripe
pot × equity% | Tay bài của bạn đáng giá bao nhiêu lúc này
thô × realization% | Thứ bạn thực sự thu về
bet ÷ (pot + bet) | % fold mà một cú bluff thuần cần
:::

---

## Equity trong poker là gì?

**Equity là phần pot kỳ vọng của bạn — phần mà tay bài của bạn xứng đáng nhận trung bình khi ván được chơi đến tận showdown (lật bài), tính cả khi chia pot theo tỷ lệ.** Nếu pot là $100 và 60% trong đó thuộc về bạn, tay bài của bạn đáng giá ==$60 ngay lúc này==, dù chip chưa được đẩy về.

Hãy nghĩ nó như miếng bánh của bạn. Mỗi tay bài còn sống đều có một miếng; các miếng luôn cộng lại thành 100%. Khi bạn heads-up với 70% equity trong pot $200, ==g:$140 trong đó là "của bạn"== về lâu dài — bạn sẽ không nhận đúng $140 trong ván *này* (thường là bạn thắng trọn $200 hoặc mất hết), nhưng qua một nghìn tình huống y hệt, đó là phần trung bình bạn thu về.

Đó là toàn bộ lý do equity quan trọng: nó biến "tôi có đang dẫn không?" thành "tôi sở hữu bao nhiêu phần pot này?" — và đó là con số bạn so với giá của một lần call.

---

## Cách tính equity trong poker nhanh: ước lượng thế nào ngay tại bàn?

**Với một draw (bài chờ), nhân outs sạch với 4 ở flop (nếu bạn sẽ thấy cả hai lá) hoặc với 2 ở turn — đó là khả năng trúng của bạn, một đại diện ổn cho equity khi trúng là thắng và trượt là thua; trước flop, hãy thuộc lòng vài cặp đấu lặp lại mãi.** Bạn gần như chẳng bao giờ tính equity chính xác ở bàn — bạn ước lượng, và hai mẹo này bao phủ 90% tình huống.

**Draw (quy tắc 4 và 2):** đếm [outs](/vi/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") của bạn, rồi nhân. Flush draw là 9 outs → ==9 × 4 = 36%== ở flop (giá trị thật 35%). Con số chính xác cho mọi draw nằm trong [xác suất draw](/vi/blog/holdem-drawing-odds); đây là bảng tham chiếu nhanh:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | Khả năng trúng (2 lá) |
|:---|:---:|:---:|
| Thùng + sảnh hở hai đầu | 15 | 54,1% |
| Flush draw | 9 | 35,0% |
| Sảnh hở hai đầu | 8 | 31,5% |
| Gutshot (sảnh hở giữa) | 4 | 16,5% |

</div>

**Cặp đấu trước flop (hãy thuộc lòng):** all-in trước flop, cùng những cuộc đấu lặp lại. Học những cặp này và bạn sẽ biết ngay equity của mình trong hầu hết các cú all-in trước flop. Mọi con số bên dưới đều tính chia pot theo tỷ lệ.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Cặp đấu | Equity | Kiểu |
|:---|:---:|:---|
| AA vs KK | 82% / 18% | Overpair áp đảo |
| QQ vs AK | ~57% / ~43% | Đôi nhỉnh hơn — "coin flip" chỉ trên danh nghĩa |
| 22 vs AK | ~52% / ~48% | Coin flip đúng nghĩa |
| AK vs AQ | ~74% / ~26% | Áp đảo (domination) |
| 88 vs A7 | ~70% / ~30% | Đôi so với một overcard (lá cao hơn) |

</div>

Hai điều làm người ta vấp ở đây. Một đôi trước hai overcard (QQ vs AK) ==r:không phải 50/50== — đôi là bên có lợi thế nhẹ, khoảng 57/43 khi khác chất (sát hơn một chút, ~54/46, khi AK cùng chất). Người chơi gọi mọi cặp đôi gặp hai overcard là "coin flip", nhưng một đôi thấp trước hai lá lớn hơn, như 22 vs AK, mới thật sự gần 50/50.

---

## Equity và pot odds: quy tắc nào quyết định mọi lần call?

**Call khi equity của bạn lớn hơn pot odds — phép so duy nhất đó quyết định gần như mọi lần call trong poker.** [Pot odds](/vi/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") (tỷ lệ pot — pot so với số tiền phải call) cho biết equity bạn *cần* để hòa vốn; equity cho biết thứ bạn *có*. Nếu bạn có nhiều hơn mức cần, call kiếm tiền.

Đối mặt bet nửa pot, pot odds đòi ==25%== để call. Nếu lần call này đẩy bạn all-in ở flop hoặc cho bạn thấy cả hai lá còn lại mà không phải trả thêm, ~35% của một flush draw sạch vượt mức giá đó. Nếu còn một cú bet nữa có thể theo sau ở turn, lần call chỉ mua một lá: 9 ÷ 47 = 19,1%, dưới 25% nếu chỉ dựa vào draw.

Nhưng đây là cái bẫy mà gần như mọi hướng dẫn bỏ qua: **"equity của bạn bằng phần pot của bạn" chỉ đúng khi không còn vòng cược.** Khoảnh khắc còn tiền có thể vào ở các vòng sau, 35% thô không tự động thành 35% pot cuối cùng — bạn có thể bị đẩy khỏi draw, hoặc trả tiền khi về mà chỉ mạnh thứ nhì. Khoảng trống đó chính là chỗ [implied odds](/vi/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") (tỷ lệ cược ngầm — tiền có thể thắng thêm ở các vòng sau) và equity realization (bên dưới) bước vào. Equity là nơi toán *bắt đầu*, không phải nơi nó kết thúc.

---

## Fold equity: làm sao thắng pot khi tay bài đang bị dẫn?

**Fold equity là phần equity thêm bạn có được từ khả năng đối thủ fold — là lý do một cú bet có thể thắng pot mà riêng tay bài của bạn sẽ thua.** Khi bet, bạn có hai đường thắng: đối thủ fold ngay, hoặc họ call và bạn thắng ở showdown. Check chỉ cho bạn đường thứ hai.

:::compare
Bet (chủ động) | Check hoặc call (thụ động)
Họ fold ngay → bạn thắng pot | Không có fold equity — chẳng ai fold trước một cú check
Họ call và bạn trúng → bạn thắng | Bạn trúng → bạn thắng
==g:Hai đường thắng== | ==r:Một đường thắng==
:::

Khi heads-up, với một ==bluff thuần== không có cơ hội thắng nếu bị call và không còn vòng cược, điểm hòa vốn rất đơn giản: bạn cần đối thủ fold đủ thường xuyên để bù rủi ro. Bet $50 vào pot $100, tỷ lệ fold hòa vốn của bạn là ==bet ÷ (pot + bet) = 50 ÷ 150 = 33%==. Nếu họ fold hơn một phần ba số lần, bet có lời — ngay cả với tay bài tệ nhất bàn.

Giờ thêm một draw. Trong ví dụ ==g:semi-bluff== heads-up này, pot là $100 và bạn shove $50 cuối cùng ở flop. Đối thủ fold 40% số lần; khi bị call, giả sử flush draw sạch của bạn có 35% equity. Cả hai lá sẽ được chia mà không còn vòng cược, nên con số hai lá đó khớp với phép tính. Tính EV (giá trị kỳ vọng) của cú shove:

:::note
EV = (fold% × pot) + (call% × [equity × (pot + bet) − (miss% × bet)])
EV = (0,40 × $100) + (0,60 × [0,35 × $150 − 0,65 × $50])
EV = $40 + (0,60 × [$52,50 − $32,50]) = $40 + $12 = ==g:+$52==
:::

Cú shove đáng ==+$52== so với việc bỏ pot, với $40 trong kỳ vọng đó đến từ các lần fold. Phép tính này tách riêng phần đóng góp của fold equity; nó không so cú shove với mọi đường check hay call khả dĩ. Đổi tần suất fold hay range call của đối thủ thì EV cũng đổi.

---

## Equity realization: vì sao 40% equity không có nghĩa thắng 40%?

**Equity realization (phần equity bạn thực sự thu về) là bạn thu về bao nhiêu phần equity thô của mình — và thường dưới 100%, vì vị trí và các vòng cược lấy đi của bạn.** Con số "40% để thắng" giả định bạn luôn đến showdown; thực tế bạn bị bet đẩy khỏi draw, bị buộc fold, và bị dồn ép khi out of position (OOP — không có vị trí). Thứ bạn giữ được là:

==b:Equity thực nhận = equity thô × realization%==

Một tay có 40% equity thô mà chỉ thực nhận 75% thì thực ra đáng ==0,75 × 40% = 30%==. Đó là lý do bạn có thể "dẫn trước range của đối thủ" mà vẫn mất tiền — khi không có vị trí, bạn hiếm khi đổi được trọn miếng bánh thành tiền.

Điều gì đẩy realization của bạn lên hay xuống:

:::card
🪑 | Vị trí | Hành động sau cùng thường giúp bạn thực nhận equity nhờ thông tin và kiểm soát pot, nhưng không vị trí nào bảo đảm kết quả trên hay dưới 100%. Range và board cũng quan trọng
🎯 | Tính dễ chơi | Hai lá liên tiếp cùng chất (suited connectors) và những tay hay ra draw ở flop thực nhận tốt; những tay khác chất cục mịch thực nhận kém dù equity thô kha khá
📚 | Độ sâu stack & kỹ năng | Stack sâu hơn và đối thủ khó hơn làm equity biên khó thực nhận hơn
:::

Đây là ý quan trọng nhất mà phần lớn hướng dẫn cho người mới bỏ qua, và là lý do [cùng một tay bài chơi hoàn toàn khác tùy vị trí](/vi/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp"). Equity thô là điểm xuất phát — thứ bạn bỏ túi nếu chip vào ngay lúc này; realization là thứ bạn thực sự mang về. Vị trí ảnh hưởng tới khoảng cách đó cùng với range, kết cấu board, độ sâu stack và cách ván bài được chơi.

---

## Equity khi all-in: khi nào chỉ còn equity thô quyết định?

**Một khi không còn vòng cược nào có thể xảy ra — nhiều nhất một người còn trong ván vẫn có chip phía sau (heads-up với một cú all-in, hoặc mọi người khác đã all-in) — bạn thực nhận 100% equity của mình, và equity thô trở thành lời cuối.** Mọi rắc rối ở trên (vị trí, fold, bị bet đẩy đi) biến mất, vì không còn vòng cược nào. Equity thô của bạn là gì — phần pot của bạn, chia pot tính theo tỷ lệ — thì đúng chừng đó bạn sẽ thu về theo thời gian.

Đây là lý do equity all-in trước flop quan trọng đến vậy: AA all-in trước KK bỏ túi trọn ==82%== của nó — không thuế realization, không fold equity, chỉ con số thô diễn ra. Cũng là lý do một "coin flip" (22 vs AK ở ~52/48) là một cuộc tung đồng xu gần đúng nghĩa khi all-in, dù cùng hai tay đó chơi postflop sẽ phân hóa dữ dội theo board và ai có vị trí.

All-in không còn vòng cược là tình huống sạch nhất trong poker: dù còn lá chưa chia, chiếc bánh vẫn được cắt đúng như toán nói — vừa là sức hút vừa là mối nguy của nó.

---

## Equity trong pot nhiều người: vì sao tay bài lớn teo lại trước đám đông?

**Equity của bạn giảm nhanh trong pot nhiều người (multiway), vì cùng chiếc bánh 100% giờ chia cho nhiều tay hơn.** Trước flop gặp các tay ngẫu nhiên, đôi Át khoảng 85% khi heads-up, nhưng trước ba đối thủ con số tụt xuống ==r:~64%==, và trước bốn là ~56% — vẫn là tay mạnh nhất, nhưng không còn là cú nghiền nát như cảm giác. Ba người, equity *trung bình* là 33% theo định nghĩa, vì ba người chia một pot.

![Đồ họa board Q♣ 9♥ 5♦ 3♠ J♦ cho thấy mỗi người chơi thêm vào pot làm phần equity trung bình co lại thế nào](/images/holdem-equity-multiway.webp "Càng nhiều người còn trong pot, miếng bánh trung bình càng nhỏ — ngay cả đôi Át cũng mất đất")

Hai thứ tệ đi khi nhiều người, không chỉ phần thô của bạn:

- **Fold equity sụp đổ.** Để thắng pot bằng một cú bet, giờ *tất cả* đều phải fold — ít khả năng hơn nhiều với ba đối thủ so với một. Bluff và semi-bluff mỏng mất giá trị nhanh.
- **Realization giảm.** Nhiều người còn hành động hơn nghĩa là nhiều bet và raise hơn có thể đẩy bạn khỏi tay bài trước showdown, nên bạn thực nhận còn ít hơn từ một miếng vốn đã nhỏ hơn.

Bài học thực dụng: những tay muốn pot nhiều người là những tay tạo ra nuts (tay bài mạnh nhất có thể trên board này) — set, Át cùng chất cho nut flush — không phải những đôi lớn chơi tốt nhất khi heads-up. Khi bàn đông, hãy siết lại về những tay có equity đứng vững khi chiếc bánh bị cắt năm phần.

---

## EV là gì trong poker và khác equity thế nào?

**EV (giá trị kỳ vọng) là số tiền trung bình một quyết định thắng hay thua về lâu dài; equity là phần pot của bạn nếu ván được chơi hết.** Hai con số trả lời hai câu hỏi: equity cho biết bạn *đứng ở đâu* trong pot này (một phần trăm), còn EV cho biết *hành động* bạn chọn trên phần đó có kiếm tiền hay không (một lượng chip, dương hoặc âm). Vì thế một tay nhiều equity vẫn có thể là một lần call tệ, và một tay ít equity vẫn có thể là một cú bluff tốt — khác biệt nằm ở giá và ở tần suất đối thủ fold.

Cú shove semi-bluff ở trên cho thấy hai thứ gặp nhau thế nào: equity 35% của flush draw chỉ là một đầu vào, cùng với 40% fold và cỡ bet, trong công thức EV = (fold% × pot) + (call% × [equity × (pot + bet) − (miss% × bet)]) — và kết quả +$52 là EV, không phải equity. Đó là lý do mọi phần còn lại của bài này đều quy về một việc: đổi equity thành những hành động có EV dương.

---

## Gom lại: dân chuyên dùng equity ở bàn như thế nào?

**Người chơi giỏi không tính equity chính xác — họ chạy một ước lượng bốn bước nhanh, xếp realization và fold equity lên trên con số thô.** Đây là dòng suy nghĩ, theo đúng thứ tự nó diễn ra:

:::steps
Ước lượng equity thô | Outs × 4 hoặc × 2 với draw; nhớ lại cặp đấu trước flop
Chiết khấu cho realization | Không có vị trí hay khó chơi? Hạ xuống — 40% thô có thể là 30% thật
Cộng fold equity | Nếu bạn đang bet, đối thủ fold bao nhiêu lần? Đó là equity thêm mà riêng tay bài của bạn không có
So với giá | Đang call? Equity thực nhận so với pot odds. Đang bet? Tần suất đối thủ fold so với tỷ lệ fold hòa vốn — bet ÷ (pot + bet) với bluff thuần, thấp hơn khi tay bài vẫn có equity nếu bị call → call, bet hay fold
:::

Cái đêm tôi kể ở đầu bài, tôi làm bước một rồi dừng — đếm equity thô và bỏ qua rằng khi không có vị trí, trước một người chơi giỏi, tôi sẽ không bao giờ thực nhận được nó. Khi tôi bắt đầu chiết khấu cho vị trí và nghĩ về những lần fold *của họ* thay vì chỉ bài của mình, các chỗ rò khép lại. Equity không phải con số bạn tra; nó là lăng kính bạn soi mọi quyết định qua.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-pot-odds | Cách tính pot odds trong 10 giây | /images/holdem-pot-odds-hero.webp
/vi/blog/holdem-implied-odds | Implied odds: khi giá xấu vẫn đáng call | /images/holdem-implied-odds-hero.webp
:::

## Câu hỏi thường gặp

**Q. Equity poker là gì?**

A. Equity trong poker là phần pot kỳ vọng của bạn — phần trăm của khoản trả ở showdown mà tay bài của bạn xứng đáng nhận, tính cả phần của bạn khi hòa thay vì chỉ những ván thắng. "Pot equity" là cùng một khái niệm nhìn từ pot: phần của pot hiện tại thuộc về bạn về lâu dài. Equity trả lời bài của bạn đáng giá bao nhiêu trước các tay hay range khác nếu phần board còn lại được chia. Quyết định bet vẫn cần một mức giá và, khi ván còn tiếp diễn, một ước lượng về phần bạn thực nhận được.

**Q. Cách tính equity trong poker như thế nào?**

A. Với draw, dùng quy tắc 4 và 2: nhân outs sạch với 4 ở flop (khi bạn sẽ thấy cả hai lá) hoặc với 2 ở turn để ước lượng khả năng trúng. Chín outs thùng ≈ 36% ở flop — sát với equity khi trúng là thắng và trượt là thua. Trước flop, hãy thuộc lòng các cặp đấu phổ biến (AA vs KK là 82/18). Để có con số chính xác, người chơi dùng công cụ tính equity khi học ngoài bàn — còn khi chơi thì bạn ước lượng.

**Q. Equity và pot odds khác nhau ở đâu?**

A. Equity là phần pot của bạn (thứ bạn có); pot odds là equity bạn cần để hòa vốn một lần call (thứ giá đòi). Kinh nghiệm thực tế: call khi equity lớn hơn pot odds. Nó chính xác khi không còn vòng cược nào theo sau; nếu không, hãy điều chỉnh theo phần equity bạn thực sự thực nhận được và theo implied odds. Pot odds đến từ cỡ bet; equity đến từ tay bài của bạn và board.

**Q. Equity 50% có tốt không?**

A. Tự nó không tốt cũng không xấu — 50% là một coin flip. Có nên call hay không phụ thuộc vào giá: trước bet nửa pot bạn chỉ cần 25%, nên 50% là một lần call lớn; nhưng mạo hiểm cả stack như một bên 50/50 để đổi lấy không gì cả là cầu may, không phải lợi thế. Equity chỉ có ý nghĩa khi đặt cạnh pot odds.

**Q. Equity 20% nghĩa là gì?**

A. Nghĩa là một phần năm pot thuộc về tay bài của bạn về lâu dài — nên trong pot $100 phần của bạn đáng khoảng $20. 20% có đáng call không tùy giá: trước bet một phần tư pot bạn cần khoảng 17%, nên 20% là ổn; trước bet nửa pot (cần 25%) thì là fold — với giả định không còn vòng cược theo sau; nếu còn tiền có thể vào về sau, hãy điều chỉnh theo phần của 20% đó bạn thực sự thực nhận được. Bất kỳ con số equity nào cũng chỉ có ý nghĩa khi đặt cạnh pot odds.

**Q. Cần bao nhiêu fold equity để bluff có lời?**

A. Với một cú bluff thuần khi heads-up, không có cơ hội thắng nếu bị call và không còn vòng cược, đối thủ phải fold ít nhất bet ÷ (pot + bet) số lần: $50 vào $100 cần 33% fold. Mốc đó là một **tần suất fold**, không phải phần trăm equity; equity ở showdown trong một cú semi-bluff sẽ hạ nó xuống.

**Q. Equity realization là gì?**

A. Equity realization là bạn thực sự thu về bao nhiêu phần equity thô: equity thực nhận = equity thô × realization%. Bị buộc fold làm nó giảm; moi được bet hay thắng nhờ đối thủ fold có thể nâng nó lên. Hành động sau cùng thường có lợi, nhưng range và kết cấu board quyết định một tay có hay không có vị trí sẽ kết thúc trên hay dưới 100%.

**Q. Equity khi all-in là gì?**

A. Equity khi all-in đơn giản là equity thô của bạn — phần pot của bạn, chia pot tính theo tỷ lệ — khi không còn vòng cược nào có thể xảy ra. Vì không còn quyết định tương lai, bạn thực nhận 100% nó, nên equity thô trở thành đúng phần pot bạn thu về theo thời gian. Đó là trường hợp rõ nhất mà dù còn lá chưa chia, "equity bằng phần pot" vẫn đúng theo nghĩa đen.

**Q. Vì sao equity giảm khi pot có nhiều người?**

A. Vì cùng một pot 100% giờ chia cho nhiều tay hơn — trước flop gặp các tay ngẫu nhiên, đôi Át ở ~85% khi heads-up rớt xuống ~64% trước ba đối thủ và ~56% trước bốn đối thủ. Nhiều người cũng cắt fold equity của bạn (tất cả đều phải fold, không chỉ một người) và realization của bạn (nhiều người hơn nghĩa là nhiều bet hơn có thể đẩy bạn khỏi tay bài trước showdown), nên cả phần thô lẫn phần bạn giữ được đều co lại.

**Q. EV (giá trị kỳ vọng) là gì?**

A. Giá trị kỳ vọng là số tiền trung bình một quyết định thắng hay thua về lâu dài. Một nước đi trung bình kiếm hơn 0 là +EV (có lời); dưới 0 là −EV (thua lỗ); bằng 0 là hòa vốn. Poker thắng đơn giản là chọn những hành động +EV và fold những hành động −EV — mọi cú bet, call và fold đều có một EV, kể cả khi bạn không thấy con số chính xác.

**Q. Equity và EV khác nhau thế nào?**

A. Equity là phần pot *này* của bạn nếu ván được chơi hết (một phần trăm); EV là liệu *hành động* dựa trên equity đó có thực sự kiếm tiền không (một lượng chip). Bạn có thể cầm equity cao mà vẫn call −EV nếu giá sai, hoặc equity thấp mà bluff +EV nếu đối thủ fold đủ thường xuyên. Equity cho biết bạn đứng ở đâu; EV cho biết quyết định có lời không.

**Q. Equity gồm những gì?**

A. Ba lớp. Equity thô là phần pot thuộc về bài của bạn nếu mọi lá được chia — thứ bảng cặp đấu và quy tắc 4 và 2 ước lượng. Fold equity là phần thêm bạn có khi bet, từ khả năng đối thủ bỏ bài trước showdown. Equity realization là phần equity thô bạn thực sự thu về sau khi vị trí, range và các vòng cược đã lấy phần của chúng. Equity thô là điểm xuất phát; hai lớp còn lại quyết định bạn giữ được bao nhiêu.

---

## Những điều cần nhớ

1. **Equity là phần pot của bạn** — equity% × cỡ pot. Call khi nó vượt pot odds. Phép so đó là xương sống của mọi quyết định.
2. **Bạn hiếm khi giữ trọn nó.** Equity thực nhận = thô × realization%, và vị trí, range cùng kết cấu board đều làm nó dịch chuyển. Equity thô là điểm xuất phát, không phải khoản trả.
3. **Sự chủ động tạo ra equity.** Fold equity cho một cú bet thắng những pot mà tay bài của bạn sẽ thua — nhưng nó sụp đổ khi nhiều người, nơi bạn cần tất cả đều fold.

Nắm vững điều này và phần còn lại của toán poker khớp vào chỗ. Từ đây, hãy biến equity thành những lần call đúng với [hướng dẫn pot odds](/vi/blog/holdem-pot-odds), hoặc xem stack sâu đổi bức tranh thế nào với [implied odds](/vi/blog/holdem-implied-odds).

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất & toán</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bảng xác suất poker 7 lá</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Những con số xác suất thô đằng sau mỗi tay bài</div>
  </a>
  <a href="/vi/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất & toán</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cách tính pot odds trong 10 giây</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Mức giá mà equity của bạn phải vượt</div>
  </a>
  <a href="/vi/blog/holdem-implied-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất & toán</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Implied odds: khi giá xấu vẫn đáng call</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao equity không phải phần pot cuối cùng của bạn</div>
  </a>
  <a href="/vi/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Vị trí thay đổi mọi thứ thế nào</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao realization sống chết theo vị trí</div>
  </a>
</div>
`.trim(),
};

export default POST;
