import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "Luật lật bài (showdown) trong Texas Hold'em: ai lật trước, muck và slow roll",
  seoTitle: "Ai lật bài trước? Luật showdown & muck trong Poker",
  desc: "Ai phải lật bài trước khi showdown? Có được muck không lật? Luật showdown Hold'em — người cược cuối, bài tự nói, slow roll và all-in, giải thích rõ ràng.",
  tldr: "Ở showdown của một giải đấu không có all-in, người chủ động cuối ở river lật trước; nếu river check hết, người còn bài đầu tiên bên trái nút Dealer lật trước. Khi có all-in, mọi tay bài còn sống phải lật ngay sau khi toàn bộ cược kết thúc. Người đã theo cú cược ở river và còn giữ hoặc đã ngửa bài có quyền yêu cầu xem bài của người chủ động cuối. Cash game áp dụng luật nhà về lật và muck.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-09-26",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 phút",
  emoji: "🃏",
  tags: [
    "luật showdown poker",
    "ai lật bài trước trong poker",
    "muck là gì trong poker",
    "slow roll poker",
    "luật all-in showdown",
  ],
  image: "/images/holdem-showdown-rules-hero.webp",
  imageAlt: "Infographic lật bài (showdown) trong Texas Hold'em — trên board 4♥ 7♣ Q♦ K♠ 2♥, A♠ K♥ thắng với một đôi K kèm kicker A",
  content: `
Bạn vừa theo (call) cú cược ở river. Rồi cả hai ngồi nhìn nhau chằm chằm, ai cũng chờ người kia lật bài trước.

Không ai nhúc nhích.

Dealer nhìn qua nhìn lại. Cả bàn thở dài.

==Màn "đấu mắt" y hệt thế này diễn ra ở gần như mọi bàn poker live== — vì phần lớn người mới chưa bao giờ học xem thực ra ai mới là người phải lật trước. Bài viết này bao trọn mọi tình huống showdown: ván bài thông thường, river bị check hết lượt, các tình huống all-in, và lý do vì sao slow roll sẽ khiến bạn bị cả bàn lườm đến hết buổi.

## Ai phải lật bài trước khi showdown?

Luật phụ thuộc vào cách vòng cược cuối cùng kết thúc (để xem trọn trình tự từng vòng dẫn đến đây, hãy đọc [thứ tự chơi trong một ván](/vi/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp")).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Diễn biến vòng cược cuối | Ai lật bài trước |
|--------------------|-----------------|
| Trong giải đấu không có all-in, có người cược hoặc tố ở river | ==Người cược hoặc tố cuối cùng== lật trước |
| Tất cả đều check ở river | Người còn chơi đầu tiên bên trái nút Dealer lật trước |
| All-in từ vòng trước đó (river không còn cược) | Trong giải đấu, mọi tay bài còn sống được lật ngay sau khi toàn bộ cược kết thúc, trước khi chia nốt bài chung; cash game theo luật nhà |

</div>

![Infographic thứ tự lật bài trong Texas Hold'em — ai lật trước trên board J♥ 9♠ 4♦ 2♠ K♥](/images/holdem-showdown-who-shows-first.webp)

==g:Trong giải đấu không có all-in, người chủ động cuối ở river lật trước.== Nếu bạn cược và bị theo, bạn lật trước người theo. Trong giải đấu, người đã theo cú cược ở river và còn giữ hoặc đã ngửa bài có quyền yêu cầu xem bài của người chủ động cuối (TDA 2024, Luật 18). Yêu cầu khác do giám đốc giải quyết; cash game theo luật nhà.

---

## Có được bỏ bài úp (muck) không cần lật khi showdown không?

Được — **nếu bạn thua**.

Sau khi người chủ động cuối cùng lật bài, những người còn lại có thể:
- **Lật bài của mình** nếu nghĩ rằng mình thắng
- **Bỏ bài úp vào muck** nếu thấy mình đã thua, với điều kiện vẫn tuân theo các yêu cầu xem bài được phép. Ngoại lệ: trong giải đấu, khi có người all-in và toàn bộ cược đã hoàn tất, tất cả tay bài còn sống phải lật ngay và không được muck (TDA 2024, Luật 16). Cash game theo luật nhà.

==r:Nhưng có một ngoại lệ quan trọng:== nếu cú cược river của bạn bị theo, người theo đã trả đủ giá để được xem bài bạn. Yêu cầu Dealer lật một tay bài đã bỏ úp — đó chính là luật **"I want to see that hand" (tôi muốn xem tay bài đó)**. Trong giải đấu, ==TDA 2024, Luật 18== khoanh rất hẹp: ai không còn cầm bài lúc showdown, hoặc đã muck úp, thì mất quyền yêu cầu. Quyền này chỉ bất khả xâm phạm với người đã theo cú cược river và đã ngửa hoặc còn giữ bài của mình — và cũng chỉ với tay bài của ==người chủ động cuối cùng==. Phần còn lại theo quyết định của giám đốc giải đấu; ở cash game, luật nhà quyết định yêu cầu nào được chấp nhận. (Đừng nhầm với luật "show one, show all" — cho một người xem thì cho cả bàn xem: nếu bạn tự nguyện cho một người xem bài, cả bàn đều có quyền xem.)

Quy tắc thực chiến: ==trong giải đấu không có all-in, người chủ động cuối ở river lật trước, kể cả cú bluff đã bị theo.== Người đã theo cú cược ở river và còn giữ hoặc đã ngửa bài có quyền yêu cầu xem bài của người chủ động cuối (TDA 2024, Luật 18). Yêu cầu khác do giám đốc giải quyết; cash game theo luật nhà. Đừng vội muck một tay bài có thể thắng; khi có all-in trong giải đấu và toàn bộ cược đã xong, không có ngoại lệ muck.

---

## Thứ tự lật bài khi tất cả đều check ở river

Nếu không ai cược ở river (tất cả đều check), showdown bắt đầu từ **người còn chơi đầu tiên bên trái nút Dealer** rồi tiếp tục theo chiều kim đồng hồ.

Ví dụ: nút Dealer (BTN), mù nhỏ (SB) và mù lớn (BB) cùng vào river. SB check, BB check, BTN check. Showdown bắt đầu từ SB (người còn chơi đầu tiên bên trái nút Dealer). SB có thể lật hoặc muck. Rồi đến BB. Cuối cùng là BTN.

==g:Trong trường hợp này, nút Dealer lật cuối cùng== — và đó thực ra là một lợi thế. BTN được xem có ai thắng mình không trước khi quyết định có lật bài hay không.

---

## Luật showdown khi all-in — người all-in có phải lật trước không?

Trong giải đấu, khi có người all-in và toàn bộ cược đã hoàn tất, tất cả tay bài còn sống phải lật ngay và không được muck (TDA 2024, Luật 16). Điều này bảo vệ tính minh bạch của ván bài. Ở cash game WSOP 2026, B149 cho người chơi side pot lật trước người chỉ có quyền ở pot chính. Trong No-Limit, nếu cược kết thúc trước river thì người all-in lật trước; nếu không, người chủ động cuối ở river lật trước, hoặc người còn bài đầu tiên bên trái nút Dealer nếu river check hết.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tình huống all-in | Luật showdown |
|----------------|---------------|
| Một người all-in, những người khác theo, không còn cược được nữa | Trong giải đấu, mọi tay bài còn sống lật ngay trước khi chia nốt bài chung; cash game theo luật nhà |
| Cú all-in ở river bị theo | Trong giải đấu, ngay khi toàn bộ cược kết thúc, mọi tay bài phải được lật ngay không chờ thứ tự; cash WSOP B149 quy định người chơi side pot lật trước người chỉ có quyền ở pot chính, và trong nhóm đang lật, người chủ động cuối ở river lật trước |
| Nhiều cú all-in tạo ra nhiều side pot | Mỗi pot được phân xử riêng; trong giải đấu, mọi tay bài còn sống lật ngay khi toàn bộ cược kết thúc |

</div>

Một điểm tinh tế: **side pot (pot phụ)** được chia trước pot chính. Đó là **thứ tự chi trả**, không trì hoãn việc lật bài trong giải đấu: ngay khi toàn bộ cược kết thúc, mọi tay bài còn sống phải lật (TDA 2024, Luật 16 và phụ lục). Nếu side pot vẫn còn cược, nghĩa vụ này chưa bắt đầu. Trong cash WSOP, B149 lại quy định người chơi side pot lật trước người chỉ có quyền ở pot chính.

Để hiểu side pot được hình thành và chia thế nào khi có người all-in, xem [luật all-in và side pot](/vi/blog/holdem-all-in-rules); còn khi pot bị chia đôi thì có luật split pot (chia pot).

---

## Luật "cards speak" (bài tự nói) là gì?

![Infographic luật cards speak (bài tự nói) — board 8♠ 9♣ 10♥ J♦ Q♠ tạo thành Sảnh đỉnh Q, và khi showdown lá bài tự nói lên tất cả](/images/holdem-showdown-cards-speak.webp)

"Cards speak" (bài tự nói) nghĩa là ==tay bài mạnh nhất thắng, bất kể người chơi nói gì==.

Nếu một người đọc nhầm bài của mình và hô "tôi có một đôi", nhưng thực ra họ có Sảnh (straight) — thì Sảnh thắng. Dealer đọc bài và trao pot cho tay bài mạnh nhất đã được lật.

Nếu bạn tưởng mình thua rồi muck một tay bài thắng, ==r:bạn có thể mất pot==. Bài chỉ úp xuống chưa tự động chết: nếu vẫn nhận dạng được 100% và có thể lấy lại, bài có thể được lật. Tay bài chết khi Dealer đẩy vào muck hoặc khi không còn nhận dạng và lấy lại được nữa (TDA 2024, Luật 14). Dù vậy, đừng trông cậy vào điều đó. Nếu chưa chắc chắn 100% mình thua, hãy để Dealer đọc bài trước khi muck.

Tình huống thật: bạn cầm J♥ 10♥ trên board Q♥ 9♥ 8♥ 2♣ 5♦. Bạn có Thùng Phá Sảnh (straight flush) đỉnh Q — Q-J-10-9-8 đồng chất cơ. Đối thủ lật K♣ Q♦ (một đôi Q). Bạn thắng tuyệt đối. Đừng muck chỉ vì thấy họ có con Q.

---

## Slow roll trong poker là gì?

Slow roll là ==cố tình kéo dài thời gian lật một tay bài rất mạnh khi bạn biết chắc mình đã thắng==.

Bạn cầm nuts (tay bài mạnh nhất có thể). Đối thủ lật một tay bài mạnh. Bạn ngừng lại, giả vờ suy nghĩ, nhìn bài thật chậm, bắt cả bàn chờ — rồi mới lật tay bài thắng. Về luật thì hợp lệ. Nhưng cả thế giới poker đều ghét.

![Slow roll trong poker — những người chơi khác bực bội khi một người cố tình trì hoãn lật tay bài thắng](/images/holdem-showdown-slow-roll.webp)

==r:Slow roll là cách nhanh nhất để tạo kẻ thù ở bàn poker.== Nó bị hiểu là cố tình xát muối vào chiến thắng. Luật bất thành văn: nếu bạn cầm tay bài mạnh nhất có thể, hãy lật ngay lập tức. Slow roll không mang lại bất kỳ lợi ích chiến thuật nào. Kết quả duy nhất là không khí căng thẳng.

Đừng nhầm với **tank** — dành thời gian một cách chính đáng cho một quyết định khó. Điều đó được chấp nhận, thậm chí được tôn trọng. Slow roll với nuts là chuyện hoàn toàn khác.

---

## Thắng mà không cần showdown thì có phải lật bài tẩy không?

Không. ==g:Nếu tất cả bỏ bài (fold) trước showdown, bạn thắng pot mà không cần lật một lá nào.==

Bạn có thể lật nếu muốn — có người lật cú bluff để chọc tức (tilt) đối thủ, có người lật tay bài mạnh để xây hình ảnh chơi chắc (tight). Nhưng bạn không bao giờ bị buộc phải lật bài khi thắng nhờ mọi người khác đều fold.

Đây là một trong những điều khiến poker thú vị. Không phải lúc nào tay bài mạnh nhất cũng thắng — người trụ lại cuối cùng mới thắng.

---

## Văn hóa ứng xử khi showdown — những lỗi người mới hay mắc

### Lỗi 1: Chờ người theo lật trước

Bạn cược ở river. Có người theo. Bạn đứng hình chờ họ lật. Ngược rồi. ==Bạn lật trước — bạn là người chủ động cuối cùng.== Ngồi chờ trông chẳng khác gì slow roll dù bạn không cố ý.

### Lỗi 2: Muck trước khi Dealer đọc bài

Bạn khá chắc mình thua. Bạn đẩy bài úp về phía muck. Dealer kéo bài vào. Hóa ra bạn cầm tay bài thắng. Nếu tay bài đã chết theo luật áp dụng, pot sẽ mất; đừng mặc định có thể lấy bài lại. ==Đừng bao giờ muck khi chưa chắc chắn.== Hãy để Dealer đọc cả hai tay bài.

### Lỗi 3: Đòi xem mọi tay bài bị theo

Trong giải đấu, người đã theo cú cược ở river và còn giữ hoặc đã ngửa bài có quyền yêu cầu xem bài của người chủ động cuối (TDA 2024, Luật 18). Yêu cầu khác do giám đốc giải quyết; cash game theo luật nhà. Một tay bài chỉ đặt úp ở showdown chưa chắc đã chết: việc lấy lại phụ thuộc vào khả năng nhận dạng và quyết định của floor (TDA 2024, Luật 14; WSOP Tournament 2026, Luật 109–110). Điều này không đảo ngược một lần fold hợp lệ khi cược còn diễn ra. Yêu cầu trong cash game nhằm chống thông đồng, không phải thỏa mãn tò mò; đừng lạm dụng.

### Lỗi 4: Không biết mình được lật sớm

Ở showdown — tức là khi mọi vòng cược đã khép lại — không có luật nào cấm bạn lật bài trước khi chính thức đến lượt. Còn khi ván vẫn đang chạy và đâu đó còn hành động chưa xong thì ngược lại: trong giải đấu, để lộ bài sẽ bị phạt nhưng không tự động làm tay bài chết (==WSOP Tournament 2026, Luật 117==). ==g:Nếu bạn cầm nuts hoặc một tay bài rất mạnh, hãy lật ngay.== Những người chơi khác sẽ cảm kích. Ván bài nhanh hơn. Và đó là điều ngược lại hoàn toàn với slow roll.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-game-order | Thứ tự chơi trong một ván | /images/blog-holdem-game-flow.webp
/vi/blog/holdem-all-in-rules | Luật all-in & side pot | /images/holdem-all-in-rules-hero.webp
:::

## Câu hỏi thường gặp

**Q. Ai lật bài trước khi showdown trong poker?**

A. Trong giải đấu không có all-in, người chủ động cuối ở river lật trước. Nếu river check hết, người còn bài đầu tiên bên trái nút Dealer lật trước rồi tiếp tục theo chiều kim đồng hồ. Khi có all-in và toàn bộ cược đã hoàn tất, tất cả tay bài còn sống phải lật ngay, không được muck (TDA 2024, Luật 16). Cash game dùng luật nhà để xác định thứ tự.

**Q. Bị theo (call) khi showdown thì có bắt buộc lật bài không?**

A. Trong giải đấu không có all-in, người chủ động cuối ở river lật trước khi bị theo. Người đã theo cú cược ở river và còn giữ hoặc đã ngửa bài có quyền yêu cầu xem bài của người chủ động cuối (TDA 2024, Luật 18). Yêu cầu khác do giám đốc giải quyết; cash game theo luật nhà. Khi có all-in trong giải đấu và toàn bộ cược đã hoàn tất, tất cả tay bài còn sống phải lật ngay, không được muck (TDA 2024, Luật 16).

**Q. Có được muck khi showdown mà không lật bài không?**

A. Ngoài nghĩa vụ lật bài khi all-in trong giải đấu, tay bài thua có thể muck nhưng vẫn phải tuân theo yêu cầu xem bài được phép. Khi có all-in và toàn bộ cược đã hoàn tất, tất cả tay bài còn sống phải lật ngay, không được muck (TDA 2024, Luật 16). Trong giải đấu, người đã theo cú cược ở river và còn giữ hoặc đã ngửa bài có quyền yêu cầu xem bài của người chủ động cuối (TDA 2024, Luật 18). Yêu cầu khác do giám đốc giải quyết; cash game theo luật nhà. Nếu chưa chắc ai thắng, hãy để Dealer đọc cả hai tay bài.

**Q. Slow roll trong poker là gì và vì sao bị ghét?**

A. Slow roll là cố tình trì hoãn lật một tay bài thắng mà bạn đã biết chắc là mạnh nhất. Nó hợp lệ nhưng bị cả cộng đồng ghét vì bị xem là cố tình làm nhục đối thủ. Nếu bạn cầm nuts hoặc tay bài thắng rõ ràng, hãy lật ngay. Tốc độ lật bài nói lên rất nhiều về con người bạn ở bàn poker.

**Q. Trong tình huống all-in, ai lật bài trước?**

A. Trong giải đấu, khi có người all-in và toàn bộ cược đã hoàn tất, tất cả tay bài còn sống phải lật ngay và không được muck (TDA 2024, Luật 16). Nếu side pot vẫn còn cược, nghĩa vụ này chưa bắt đầu; khi cược kết thúc, không chờ chia side pot mới lật. Trong cash WSOP 2026, B149 cho người chơi side pot lật trước người chỉ có quyền ở pot chính. Ở No-Limit, nếu cược kết thúc trước river thì người all-in lật trước; nếu không, áp dụng thứ tự river.

**Q. "Cards speak" (bài tự nói) nghĩa là gì trong poker?**

A. Cards speak nghĩa là tay bài mạnh nhất đã được lật ngửa sẽ thắng theo đúng giá trị của các lá bài, không theo lời tuyên bố; tay bài bị đọc sai vẫn có thể thắng. Bài chỉ úp xuống chưa tự động chết: nếu vẫn nhận dạng được 100% và có thể lấy lại, bài có thể được lật. Tay bài chết khi Dealer đẩy vào muck hoặc khi không còn nhận dạng và lấy lại được nữa (TDA 2024, Luật 14). Đừng muck trước khi kiểm tra bài.

**Q. Thắng mà không có showdown thì có phải lật bài không?**

A. Không. Nếu mọi người khác fold trước showdown, bạn thắng pot ngay lập tức và không bao giờ phải lộ bài tẩy. Lật bài là tùy chọn — có người lật cú bluff để chọc tức đối thủ, nhưng bạn không bao giờ bị buộc phải lật một tay bài thắng mà không ai theo đến cùng.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Bài trụ cột</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Luật chơi Texas Hold'em cho người mới</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Trọn bộ luật — từ mù (blind) đến lật bài (showdown)</div>
  </a>
  <a href="/vi/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thứ hạng bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thứ hạng bài trong Poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Ai thắng khi showdown — đọc đúng tay bài mạnh nhất</div>
  </a>
</div>
`.trim(),
};
