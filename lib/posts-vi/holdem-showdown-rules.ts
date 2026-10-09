import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "Luật showdown (lật bài) trong Texas Hold'em: ai lật trước, muck và slow roll",
  seoTitle: "Ai lật bài trước? — Luật showdown poker, so bài và muck",
  desc: "Ai lật bài trước khi showdown? Có được muck mà không lật không? Luật so bài Hold'em: last aggressor, cards speak, slow roll và luật all-in.",
  tldr: "Ở showdown trong giải đấu không có all-in, người bet hoặc raise cuối cùng ở river lật trước; nếu river check hết, người còn bài đầu tiên bên trái nút dealer lật trước. Khi có all-in, mọi tay bài còn lại phải được lật sau khi vòng cược kết thúc. Người đã call ở river và còn giữ hoặc đã ngửa bài có quyền yêu cầu xem bài của người bet hoặc raise cuối cùng. Cash game áp dụng luật nhà về lật bài và muck.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-10-09",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "10 phút",
  emoji: "🃏",
  tags: [
    "showdown poker",
    "luật showdown poker",
    "so bài poker",
    "lật bài poker",
    "muck trong poker là gì",
    "slow roll poker",
    "thứ tự lật bài poker",
    "showdown là gì",
  ],
  image: "/images/holdem-showdown-rules-hero.webp",
  imageAlt: "Infographic showdown trong Texas Hold'em — trên board 4♥ 7♣ Q♦ K♠ 2♥, A♠ K♥ thắng với một đôi K kèm kicker A",
  content: `
Bạn vừa call cú bet ở river. Giờ cả hai ngồi nhìn nhau, ai cũng chờ người kia lật bài trước.

Không ai nhúc nhích.

Dealer nhìn qua nhìn lại. Những người khác ở bàn thở dài.

==Màn giằng co y hệt thế này diễn ra ở gần như mọi bàn poker live== — vì phần lớn người mới chưa bao giờ được dạy thực ra ai mới là người phải lật trước. Bài này đi qua mọi tình huống showdown: ván bài thông thường, river bị check hết, các tình huống all-in, và vì sao slow roll sẽ khiến bạn bị cả bàn lườm đến hết buổi.

## Showdown trong poker là gì?

Showdown (lật bài) là bước cuối của một ván Texas Hold'em: khi vòng cược ở river kết thúc mà vẫn còn từ hai người giữ bài, họ lật bài tẩy để so tay bài 5 lá mạnh nhất và dealer (người chia bài) trao pot cho người thắng. Bạn chỉ đến được showdown khi không ai bet, call (theo) hay raise (tố) thêm được nữa — còn nếu tất cả đối thủ đã fold (bỏ bài) trước đó, pot thuộc về bạn mà không cần lật lá nào.

Thứ tự lật phụ thuộc vào cách vòng cược cuối kết thúc. Trong giải đấu (tournament) không có all-in, người bet hoặc raise cuối cùng (last aggressor) ở vòng cược cuối lật trước; nếu river check hết, người còn bài đầu tiên bên trái nút dealer (BTN) lật trước. Khi có all-in, mọi tay bài còn lại phải được lật sau khi vòng cược kết thúc. Cash game áp dụng luật nhà về lật bài và muck (úp bài bỏ).

## Ai phải lật bài trước khi showdown?

Câu trả lời ngắn: người bet hoặc raise cuối cùng ở river lật trước, không phải người call. Nếu river check hết và không ai all-in, người còn bài đầu tiên bên trái nút dealer lật trước, rồi lần lượt theo chiều kim đồng hồ. Riêng trong giải đấu có người all-in — ở river hay một vòng trước đó — thì không còn chuyện «ai trước»: mọi tay bài đều phải ngửa ngay khi vòng cược kết thúc.

Luật cụ thể phụ thuộc vào cách vòng cược cuối cùng khép lại (để xem trọn trình tự từng vòng cược dẫn đến đây, hãy đọc [thứ tự hành động trong một ván](/vi/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp")).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Diễn biến ở vòng cược cuối | Ai lật bài trước |
|--------------------|-----------------|
| Có người bet hoặc raise ở river | ==Người bet hoặc raise cuối cùng== lật trước — nhưng trong giải đấu, nếu có bất kỳ ai trong ván đang all-in (ở river hay vòng trước đó), mọi tay bài đều phải ngửa ngay khi vòng cược kết thúc (xem bên dưới) |
| Tất cả đều check ở river | Người còn bài đầu tiên bên trái nút dealer lật trước — với điều kiện không ai all-in trong ván; trong giải đấu, nếu đã có người all-in từ vòng trước thì thay vào đó mọi tay bài đều phải ngửa |
| All-in từ vòng trước (vòng cược kết thúc trước river) | Giải đấu: mọi tay bài được ngửa ngay, không chậm trễ, khi toàn bộ cược đã kết thúc (TDA 2024, Luật 16). Cash game: nếu có side pot, những người tranh side pot lật trước; và ở bàn no-limit, chính người đẩy all-in lật trước (WSOP Live Action, Luật 149) |

</div>

![Infographic thứ tự lật bài trong Texas Hold'em — ai lật trước trên board J♥ 9♠ 4♦ 2♠ K♥](/images/holdem-showdown-who-shows-first.webp)

==g:Cụm từ then chốt là «last aggressor» — người bet hoặc raise cuối cùng.== Nếu bạn bet ở river và bị call, bạn lật trước — không phải người call. Người call được xem bài bạn trước rồi mới quyết định lật hay muck bài của họ.

---

## Có được muck không lật bài khi showdown không?

Được — **nếu bạn thua**. Sau khi người bet hoặc raise cuối cùng ngửa bài, những người còn lại được úp bài bỏ vào muck mà không cần cho ai xem. Quyền này biến mất trong hai trường hợp: bạn là người bet ở river và bị call (trong giải đấu, người call có quyền đòi xem bài bạn), hoặc ván có người all-in trong giải đấu — khi đó mọi tay bài đều phải ngửa.

Khi người bet hoặc raise cuối cùng đã lật bài, những người còn lại có thể:
- **Lật bài của mình** nếu nghĩ rằng mình thắng
- **Muck úp bài** nếu thấy mình đã thua — không cần để lộ lá nào. Điều này chỉ đúng khi không ai all-in: trong giải đấu, một khi có người all-in **và mọi hành động cược của những người còn lại đã kết thúc**, ==Luật 16 của TDA 2024== buộc mọi tay bài trong pot phải ngửa, không ai được muck. Chừng nào những người kia còn chip và còn bet được, mọi lá bài vẫn úp (cash game theo luật nhà, và phần lớn cho phép người call muck)

==r:Nhưng có một ngoại lệ quan trọng:== nếu cú bet river của bạn bị call, người call đã trả đủ giá để được xem bài bạn. Yêu cầu đó — nhờ dealer lật một tay bài đã bị muck — chính là luật **«I want to see that hand» (tôi muốn xem tay bài đó)**. Trong giải đấu, ==Luật 18 của TDA 2024== khoanh rất hẹp: ai không còn cầm bài lúc showdown, hoặc đã muck úp, thì mất quyền yêu cầu. Quyền này chỉ bất khả xâm phạm với người đã call cú bet ở river và đã ngửa hoặc còn giữ bài của mình — và chỉ với tay bài của ==người bet hoặc raise cuối cùng==, tay bài họ đã trả tiền để xem. Mọi yêu cầu khác do giám đốc giải đấu (tournament director, TD) quyết định. Cash game chạy theo luật nhà, và không mặc nhiên dễ hơn: theo bộ luật WSOP Live Action, muốn xem một tay bài chưa lật thì phải có nghi ngờ thông đồng **và** có floor (người quản lý sàn) tại chỗ (==WSOP Live Action, Luật 147==). (Đừng nhầm với luật «show one, show all» — cho một người xem là cả bàn được xem: nếu bạn tự nguyện cho một người xem bài, mọi người ở bàn đều có quyền xem.)

Quy tắc thực chiến: ==là người bet hoặc raise cuối cùng, hãy lật bài — kể cả khi đó là cú bluff đã bị call.== Người call sẽ lật hoặc muck sau khi xem bài bạn. Là người bet, thường bạn vẫn có thể muck thay vì lật và chấp nhận mất pot; giải đấu WSOP là ngoại lệ, nơi người chơi từ chối lật và cố ý muck sẽ bị phạt (==WSOP Tournament, Luật 72==). Nhưng muck vội là bạn thua hai lần: trong giải đấu, người call đã trả tiền để xem vẫn có thể đòi xem bài bạn (==Luật 18 của TDA 2024==) — ở cash game WSOP thì không, trừ khi nghi ngờ thông đồng và có floor tại chỗ (WSOP Live Action, Luật 147) — và vì «cards speak», đã có vô số pot bị vứt đi bởi những người chơi mà tay bài Át cao của họ thực ra đang thắng.

---

## Cả bàn check ở river thì ai lật bài trước?

Khi không ai bet ở river và không ai all-in, không có «last aggressor» để lật trước, nên luật quay về vị trí: người còn bài đầu tiên bên trái nút dealer lật trước, rồi lần lượt theo chiều kim đồng hồ, và nút dealer lật sau cùng. Trong giải đấu, nếu trước đó đã có người all-in thì thay vào đó mọi tay bài đều phải ngửa cùng lúc.

Ví dụ: nút dealer (BTN), small blind (mù nhỏ — SB) và big blind (mù lớn — BB) cùng vào river. SB check, BB check, BTN check. Showdown bắt đầu từ SB (người còn bài đầu tiên bên trái nút dealer). SB có thể lật hoặc muck. Rồi đến BB. Cuối cùng là BTN.

==g:Trong trường hợp này, nút dealer lật cuối cùng== — và đó thực ra là một lợi thế. BTN được xem có ai thắng mình không trước khi quyết định có lật hay không.

---

## Luật showdown khi có all-in — người all-in có phải lật trước không?

Tùy nơi chơi. Trong giải đấu, câu hỏi «ai trước» không tồn tại: ngay khi có người all-in và không còn ai bet được nữa, tất cả tay bài trong pot phải ngửa trước khi dealer chia nốt bài chung (board) (TDA 2024, Luật 16). Trong cash game theo bộ luật WSOP Live Action, thứ tự lại khác: ở bàn no-limit, nếu vòng cược kết thúc trước river thì chính người đẩy all-in lật trước, và những người tranh side pot lật trước người chỉ có phần ở main pot (Luật 149).

Trong **giải đấu**, khi một người all-in và không còn cược được nữa, các lá bài chung còn lại được chia với **mọi tay bài ngửa** (==Luật 16 của TDA 2024==). Điều này bảo vệ tính toàn vẹn của ván bài — không ai được muck một cách có tính toán trong tình huống all-in. **Cash game chạy theo luật nhà**, và bộ luật WSOP Live Action xếp ngược lại: **ở bàn no-limit**, nếu vòng cược kết thúc trước river, người đẩy all-in có trách nhiệm lật trước; và ở bất kỳ cash game nào, khi có side pot (pot phụ), những người tranh side pot lật trước người chỉ all-in cho main pot (pot chính) (==WSOP Live Action, Luật 149==).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tình huống all-in | Luật showdown |
|----------------|---------------|
| Một người all-in ở vòng trước, những người khác call, không còn cược được nữa | Giải đấu: mọi tay bài được ngửa ngay, không chậm trễ, khi toàn bộ cược đã kết thúc. Cash game: nếu có side pot, những người tranh side pot lật trước; và ở bàn no-limit, chính người đẩy all-in lật trước (WSOP Live Action, Luật 149) |
| Cú all-in ở river bị call | Cash game: người all-in lật trước với tư cách người bet cuối cùng. Giải đấu: không có thứ tự «ai trước» — theo Luật 16 của TDA 2024, mọi tay bài ngửa cùng lúc và ==r:không ai được muck ở đây== |
| Nhiều cú all-in tạo ra nhiều side pot | Mỗi pot được phân xử riêng. Giải đấu: mọi tay bài liên quan đều phải ngửa. Cash game: muốn thắng bất kỳ phần nào của pot, người chơi phải lật bài (WSOP Live Action, Luật 143) |

</div>

Một điểm tinh tế: nếu có **side pot** (những người khác còn chip và tiếp tục cược), side pot được trao trước, rồi mới đến main pot. Đó là **thứ tự chi trả**. Trong giải đấu, nó không liên quan gì đến thời điểm lật bài — bài của người all-in đã ngửa ngay khi không còn ai cược được nữa; phần minh họa Luật 16 của TDA 2024 nói thẳng: *không* chờ chia xong side pot rồi mới lật bài người all-in. Ở cash game theo bộ luật WSOP Live Action, thứ tự lật đi theo các pot: người tranh side pot lật trước, rồi đến người chỉ all-in cho main pot (Luật 149).

Để hiểu side pot được hình thành và chia thế nào khi có người all-in, xem [luật all-in và side pot](/vi/blog/holdem-all-in-rules); còn khi pot bị chia, xem [luật chia pot (split pot) và chop](/vi/blog/holdem-split-pot-rules).

---

## Luật «cards speak» (bài tự nói) là gì?

![Infographic luật cards speak — board 8♠ 9♣ 10♥ J♦ Q♠ tạo thành sảnh cao nhất là Q, và khi showdown các lá bài tự nói lên tất cả](/images/holdem-showdown-cards-speak.webp)

«Cards speak» (bài tự nói) nghĩa là ==tay bài mạnh nhất thắng, bất kể người chơi tuyên bố gì==. Dealer đọc các lá bài đã ngửa và trao pot theo đúng giá trị của chúng — lời nói của bạn không làm tay bài mạnh lên hay yếu đi. Hệ quả hai chiều: đọc nhầm mà hô sai, bài vẫn thắng nếu nó thực sự mạnh nhất; nhưng tưởng mình thua rồi úp bài bỏ thì pot cũng đi luôn.

Nếu một người đọc nhầm bài của mình và nói «tôi có một đôi», nhưng thực ra họ có sảnh (straight) — thì sảnh thắng. Dealer đọc bài và trao pot cho tay bài mạnh nhất đã được lật.

Điều này đúng cả hai chiều. Nếu bạn tưởng mình thua và muck mà không lật, nhưng tay bài của bạn lẽ ra thắng — ==r:pot mất luôn==. Tay bài của bạn chết khi dealer đã đẩy nó vào muck, hoặc khi không còn nhận dạng và lấy lại được nữa — bài đặt úp không tự động chết (==Luật 14 của TDA 2024==). Dù vậy, đừng bao giờ trông cậy vào điều đó. Nếu chưa chắc 100% mình thua, hãy luôn để dealer đọc bài trước khi muck.

Tình huống thật: bạn cầm J♥ 10♥ trên board Q♥ 9♥ 8♥ 2♣ 5♦. Bạn có thùng phá sảnh (straight flush) cao nhất là Q — Q-J-10-9-8 cùng chất cơ. Đối thủ lật K♣ Q♦ (một đôi Q). Bạn thắng cách biệt. Đừng muck chỉ vì thấy họ có lá Q.

---

## Slow roll trong poker là gì?

Slow roll (cố tình lật bài chậm) là ==cố tình kéo dài thời gian lật một tay bài rất mạnh khi bạn đã biết chắc mình thắng==. Bộ luật giải đấu của TDA và WSOP không cấm đích danh hành vi này, nhưng cũng không bảo vệ nó: trêu tức đối thủ bằng màn kịch (WSOP Tournament, Luật 47) hay liên tục làm chậm ván bài (TDA 2024, Luật 70) đều có thể bị phạt. Và ở bàn nào nó cũng bị ghét.

Bạn cầm nuts (tay bài mạnh nhất có thể trên board này). Đối thủ lật một tay bài mạnh. Bạn ngừng lại, giả vờ suy nghĩ, liếc bài thật chậm, bắt cả bàn chờ — rồi mới lật tay bài thắng. Không luật nào gọi tên nó, nhưng không khí ở bàn sẽ đổi ngay lập tức.

![Slow roll trong poker — những người chơi khác bực bội khi một người cố tình trì hoãn lật tay bài thắng](/images/holdem-showdown-slow-roll.webp)

==r:Slow roll là cách nhanh nhất để tạo kẻ thù ở bàn poker.== Nó bị hiểu là cố tình xát muối vào chiến thắng. Luật bất thành văn: nếu bạn cầm tay bài mạnh nhất có thể, hãy lật ngay lập tức. Slow roll không mang lại lợi ích chiến thuật nào. Kết quả duy nhất là căng thẳng.

Đừng nhầm với **tank** (suy nghĩ lâu) — dành thời gian một cách chính đáng cho một quyết định khó. Điều đó được chấp nhận, thậm chí được tôn trọng. Slow roll với nuts là chuyện hoàn toàn khác.

---

## Thắng mà không cần showdown thì có phải lật bài tẩy không?

Không. ==g:Nếu tất cả đối thủ fold trước showdown, bạn thắng pot mà không phải lật một lá nào.== Showdown chỉ xảy ra khi còn từ hai người tranh pot; đối thủ cuối cùng bỏ bài là ván kết thúc ngay tại đó, dealer đẩy pot về cho bạn và hai lá bài tẩy vẫn úp. Bạn không phải chứng minh tay bài, cũng không phải giải thích vì sao bet.

Bạn có thể lật nếu muốn — có người ngửa cú bluff để chọc đối thủ tilt, có người khoe tay bài mạnh để xây hình ảnh chơi chặt. Nhưng bạn không bao giờ bị buộc phải lật bài khi thắng nhờ mọi người khác đều fold.

Đây là một trong những điều khiến poker thú vị. Không phải lúc nào tay bài mạnh nhất cũng thắng — người trụ lại cuối cùng mới thắng.

---

## Phép lịch sự khi showdown — người mới hay sai ở đâu?

Không gì làm bàn poker mất vui nhanh bằng một showdown xử lý sai. Phần lớn không phải lỗi luật — mà là thói quen chưa ai dạy người mới: chờ người call lật trước, muck khi dealer chưa đọc bài, đòi xem mọi tay bài đã bị call, hay không biết mình được lật sớm. Dưới đây là bốn lỗi tôi phải sửa cho người khác nhiều nhất.

### Lỗi 1: Chờ người call lật trước

Bạn bet ở river. Có người call. Bạn đứng hình chờ họ lật. Ngược rồi. ==Bạn lật trước — bạn là người bet hoặc raise cuối cùng.== Ngồi chờ trông chẳng khác gì slow roll dù bạn không cố ý — tôi từng thấy một bàn chơi thân thiện lạnh ngắt suốt một vòng chỉ vì một người cứ để người call đổ mồ hôi rồi mới lật tay bài thắng.

### Lỗi 2: Muck trước khi dealer đọc bài

Bạn khá chắc mình thua. Bạn đẩy bài úp về phía muck. Dealer kéo bài vào. Hóa ra bạn cầm tay bài thắng. Theo ==Luật 14 của TDA 2024==, tay bài chết ngay khi dealer đẩy nó vào muck, và pot gần như chắc chắn đã mất — nhưng hãy gọi floor trước khi bỏ cuộc: bộ luật giải đấu WSOP cho phép ban tổ chức lấy lại một tay bài vẫn còn nhận dạng rõ ràng, và sẽ nỗ lực thêm nếu việc muck do dealer sai sót hoặc do thông tin sai (WSOP Tournament, Luật 109 và 110). ==Đừng bao giờ muck khi chưa chắc chắn.== Hãy để dealer đọc cả hai tay bài.

### Lỗi 3: Đòi xem mọi tay bài đã bị call

Ở hầu hết phòng poker, bạn có thể nhờ dealer lật một tay bài đã bị muck. Trong giải đấu, quyền này được khoanh rất hẹp: bạn chỉ được yêu cầu nếu đã ngửa bài của mình hoặc vẫn còn cầm bài, còn người đã muck úp thì mất hẳn quyền đó (==Luật 18-A của TDA 2024==). Ngoài ra, chỉ một yêu cầu được bảo đảm: tay bài của người bet hoặc raise cuối cùng, tay bài mà người call đã trả tiền để xem. Mọi trường hợp khác, kể cả một tay bài chưa từng bị call hay một river không ai bet, đều do giám đốc giải đấu quyết định — mà «quyết định» không có nghĩa là từ chối (==Luật 18-B của TDA 2024==). Một tay bài đã fold là chết khi nằm trong muck, và chỉ tay bài vẫn còn nhận dạng rõ ràng mới được lấy lại (WSOP Tournament, Luật 109). Luật yêu cầu xem bài sinh ra để chống thông đồng, không phải để thỏa mãn tò mò, và lạm dụng nó bị xem là bất lịch sự. Hãy dùng thật tiết kiệm.

### Lỗi 4: Không biết mình được lật sớm

Ở showdown — khi mọi vòng cược đã khép lại — không có luật nào cấm bạn lật bài trước khi chính thức đến lượt. Còn khi ván vẫn đang chạy và còn hành động chưa xong thì ngược lại: để lộ bài sẽ bị phạt theo ==WSOP Tournament, Luật 117== (bộ luật Live Action đánh số các điều khoản khác đi). ==g:Nếu bạn cầm nuts hoặc một tay bài rất mạnh, hãy lật ngay.== Những người chơi khác sẽ cảm kích. Ván bài nhanh hơn. Và đó là điều ngược lại hoàn toàn với slow roll.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-game-order | Thứ tự hành động trong một ván | /images/blog-holdem-game-flow.webp
/vi/blog/holdem-all-in-rules | Luật all-in và side pot | /images/holdem-all-in-rules-hero.webp
:::

## Câu hỏi thường gặp

**Q. Ai lật bài trước khi showdown poker?**

A. Khi không ai all-in, người có hành động cược chủ động cuối cùng (bet hoặc raise) ở vòng cược cuối phải lật trước. Nếu vòng cược cuối bị tất cả check hết, người còn bài đầu tiên bên trái nút dealer lật trước, rồi tiếp tục theo chiều kim đồng hồ. Pot có all-in theo luật riêng — xem câu hỏi về all-in bên dưới.

**Q. Bị call ở showdown thì có phải lật bài không?**

A. Có — nếu bạn là người bet hoặc raise cuối cùng ở river, bạn lật trước khi bị call; lối thoát duy nhất là muck và bỏ pot, điều mà giải đấu WSOP sẽ phạt (WSOP Tournament, Luật 72). Có một trường hợp không cần lật gì cả: nếu người call muck úp trước và không còn tay bài sống nào khác, bài của bạn thắng pot mà không cần ngửa (==Luật 17-B của TDA 2024==; Luật 72 của WSOP cũng trao pot cho tay bài sống duy nhất còn lại). Nếu bạn là người call cú bet của người khác, bạn được muck úp sau khi xem bài họ nếu đã thua. Ngoại lệ là all-in trong giải đấu: theo ==Luật 16 của TDA 2024==, người call cũng phải ngửa bài. Và trong giải đấu, quyền yêu cầu xem bài được bảo đảm thuộc về người **đã call cú bet ở river** — với điều kiện họ đã ngửa hoặc còn giữ bài — và chỉ với tay bài của người bet hoặc raise cuối cùng, tay bài họ đã trả tiền để xem (==Luật 18 của TDA 2024==). Người đã muck úp không có quyền yêu cầu, và mọi yêu cầu khác do giám đốc giải đấu quyết định.

**Q. Có được muck ở showdown mà không lật bài không?**

A. Được — nhưng muck là bỏ pot, nên chỉ làm khi chắc chắn mình thua. Khi tay bài thắng đã được ngửa, những người thua được muck úp. Ngoại lệ nằm ở luật giải đấu: nếu bạn bet cuối cùng ở river và bị call, người call đã trả tiền để xem có thể đòi xem bài bạn, với điều kiện họ còn giữ hoặc đã ngửa bài của mình (TDA 2024, Luật 18-B — ở cash game WSOP thì không, trừ khi nghi ngờ thông đồng), và một khi có người all-in và mọi hành động cược đã kết thúc, mọi tay bài trong main pot lẫn side pot đều phải ngửa — không ai được muck (TDA 2024, Luật 16). Đừng bao giờ muck trước khi dealer đọc cả hai tay bài nếu còn bất kỳ nghi ngờ nào về người thắng.

**Q. Slow roll trong poker là gì và vì sao bị ghét?**

A. Slow roll là cố tình trì hoãn lật một tay bài thắng mà bạn đã biết chắc là mạnh nhất. Bộ luật giải đấu của TDA và WSOP không cấm đích danh nó, nhưng nó bị cả cộng đồng ghét vì bị xem là cố tình làm nhục đối thủ — và trêu tức hay liên tục làm chậm ván bài đều có thể bị phạt (WSOP Tournament, Luật 47 · TDA 2024, Luật 70). Nếu bạn cầm nuts hoặc tay bài thắng rõ ràng, hãy lật ngay. Tốc độ lật bài nói lên rất nhiều về con người bạn ở bàn.

**Q. Khi có all-in, ai lật bài trước?**

A. Trong giải đấu, khi một người all-in và không còn cược được nữa, mọi tay bài trong pot đó được ngửa ngay, không chậm trễ, khi toàn bộ hành động cược đã kết thúc — trước khi các lá bài chung còn lại được chia (TDA 2024, Luật 16). Nếu có side pot, side pot được trao trước rồi mới đến main pot — nhưng bài của người all-in đã ngửa từ rất lâu trước đó. Ở cash game no-limit, nếu vòng cược kết thúc trước river, bộ luật WSOP Live Action cho người đẩy all-in lật trước; ở bất kỳ cash game nào, người tranh side pot lật trước người chỉ all-in cho main pot (Luật 149). Chừng nào những người kia còn chip và còn bet được, mọi lá bài vẫn úp.

**Q. «Cards speak» trong poker nghĩa là gì?**

A. Cards speak nghĩa là tay bài mạnh nhất thắng theo đúng những gì các lá bài thể hiện — không theo lời người chơi nói. Người đọc nhầm bài và tuyên bố sai tay bài vẫn thắng nếu các lá bài thật của họ là mạnh nhất. Ngược lại, người muck mà chưa kiểm tra xem mình có thua thật không thường ném pot đi: tay bài chết ngay khi dealer đẩy nó vào muck, hoặc khi không còn nhận dạng được nữa, dù lẽ ra nó thắng (TDA 2024, Luật 14 — trước thời điểm đó, bài đặt úp vẫn nhận dạng được 100% và lấy lại được thì có thể ngửa, nhưng đừng bao giờ trông cậy vào điều này).

**Q. Thắng mà không có showdown thì có phải lật bài không?**

A. Không. Nếu mọi người khác fold trước showdown ở river, bạn thắng pot ngay lập tức và không bao giờ phải lộ bài tẩy. Lật bài là tùy chọn — có người ngửa cú bluff để chọc đối thủ, nhưng bạn không bao giờ bị buộc phải lật một tay bài thắng mà không ai tranh.

**Q. Thứ tự lật bài poker là gì — ai lật trước, ai lật sau?**

A. Thứ tự đi theo vòng cược cuối: người bet hoặc raise cuối cùng ở river lật trước, rồi đến người call — người call được xem bài trước khi quyết định lật hay muck. Nếu river check hết, người còn bài đầu tiên bên trái nút dealer lật trước và tiếp tục theo chiều kim đồng hồ, nút dealer lật sau cùng. Khi có all-in trong giải đấu, không còn thứ tự nữa — mọi tay bài ngửa cùng lúc (xem câu hỏi về all-in ở trên).

**Q. Lật bài tẩy là gì — khi nào bạn phải lật bài tẩy?**

A. Lật bài tẩy là ngửa hai lá bài riêng của bạn lên để so với đối thủ ở showdown. Bạn chỉ bắt buộc lật khi còn tranh pot ở showdown: là người bet hoặc raise cuối cùng ở river mà bị call, hoặc khi có người all-in trong giải đấu và vòng cược đã kết thúc (TDA 2024, Luật 16). Nếu tất cả đối thủ đã fold, bạn thắng pot mà không phải lật — lật hay không khi đó hoàn toàn là lựa chọn của bạn.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Kiến thức nền tảng</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Luật chơi Texas Hold'em cho người mới</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Trọn bộ luật — từ blind đến showdown</div>
  </a>
  <a href="/vi/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chia pot</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Luật chia pot và side pot</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Khi nào pot bị chia và side pot hoạt động thế nào</div>
  </a>
  <a href="/vi/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">So bài cùng hạng</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Luật kicker (lá phụ) khi hai tay bài cùng hạng</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Cùng một tay bài — ai thắng ở showdown?</div>
  </a>
</div>
`.trim(),
};
