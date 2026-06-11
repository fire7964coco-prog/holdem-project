import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament-vs-cash-game",
  title: "Poker Tournament hay Cash Game: người mới nên chơi gì?",
  seoTitle: "Chip không phải lúc nào cũng là tiền — Tournament hay Cash Game?",
  desc: "Cash Game và Tournament đều là Texas Hold'em, nhưng giá trị chip, blind, bankroll, variance và áp lực ICM rất khác nhau. Đây là so sánh dễ hiểu cho người mới.",
  tldr: "Trong Cash Game, chip gần như là tiền thật và blind thường cố định. Trong Tournament, chip là mạng sống giải đấu, blind tăng dần và tiền thưởng phụ thuộc vào thứ hạng bạn kết thúc.",
  category: "토너먼트",
  date: "2026-06-11",
  updated: "2026-06-11",
  hideSummaryImageSlot: true,
  readTime: "16 phút",
  emoji: "🏆",
  tags: [
    "poker tournament hay cash game",
    "cash game poker",
    "poker tournament cho người mới",
    "giải đấu poker",
    "chiến thuật cash game",
    "quản lý bankroll poker",
    "ICM poker",
    "bubble poker",
  ],
  content: `
Hầu như người mới chơi Hold'em nào rồi cũng hỏi cùng một câu:

*"Mình nên chơi ==Cash Game== hay vào ==Tournament / giải đấu==?"*

Nhìn bên ngoài, hai format này giống cùng một trò. Bạn vẫn có 2 lá bài tẩy, 5 lá bài chung, và 4 vòng cược từ preflop tới river. Nhưng về chiến thuật, chúng gần như là hai thế giới khác nhau. Trong Cash Game, chip là tiền. Trong Tournament, chip là mạng sống của bạn trong giải.

Bài này so sánh ==Poker Tournament và Cash Game== theo đúng những gì người mới cần: giá trị chip, cấu trúc blind, thời gian chơi, variance, bankroll, ICM, độ sâu stack và nên bắt đầu từ format nào.

![Bàn Texas Hold'em cho thấy Tournament và Cash Game dẫn tới giá trị chip và chiến thuật khác nhau](/images/tournament-table-action.webp "So sánh Poker Tournament và Cash Game")

### Câu trả lời trong 15 giây

- **Cash Game:** chip tương ứng với tiền thật, blind thường cố định, và bạn có thể rời bàn bất cứ lúc nào.
- **Tournament:** bạn trả một buy-in, nhận chip giải đấu, rồi chơi cho tới khi bị loại hoặc thắng.
- **Cash Game dạy nền tảng nhanh hơn** vì stack thường sâu hơn và lỗi dễ nhìn thấy hơn.
- **Tournament có upside lớn hơn**, nhưng variance cao hơn, session dài hơn và có áp lực ICM.
- **Với đa số người mới, Cash Game là lớp học đầu tiên sạch hơn.** Khi luật và quyết định cơ bản đã tự động, hãy thêm giải đấu nhỏ.

---

## Khác biệt cốt lõi giữa Cash Game và Tournament

Cách nói gọn nhất là:

**Cash Game là đưa ra quyết định có lợi nhuận với tiền thật trên bàn. Tournament là sống sót đủ lâu để leo vào vùng tiền thưởng và thứ hạng cao hơn.**

Trong Cash Game, nếu bạn buy-in $200, số chip trước mặt đại diện cho $200. Nếu stack lên $450, bạn có thể đứng dậy cầm $450 về. Nếu tụt còn $120, đó là số tiền còn lại. Mỗi chip có giá trị tiền mặt trực tiếp.

Trong Tournament, bạn có thể trả $100 buy-in và nhận 20.000 chip. Chúng không đáng giá $20.000, và bạn không thể đổi chúng ra tiền giữa giải. Chúng chỉ có giá trị vì giúp bạn sống sót, gây áp lực và leo lên cấu trúc trả thưởng.

Trên bàn, cảm giác khác nhau rất rõ. Trong Cash Game $1/$2, call $60 ở river với một đôi nghĩa là bạn đang risk $60 ngay lúc đó. Nếu call sai, bạn vẫn có thể đứng dậy, reload hoặc chơi ngày khác. Trong Tournament $50 gần bubble, call all-in 18BB có thể kết thúc toàn bộ giải của bạn.

| Mục | Cash Game | Tournament |
|------|------|------|
| Giá trị chip | Tiền thật | Equity trong giải |
| Vào bàn | Buy-in theo mức bạn chọn | Buy-in cố định |
| Rời bàn | Bất cứ lúc nào | Tới khi bust hoặc kết thúc |
| Blind | Thường cố định | Tăng theo level |
| Mục tiêu | Tối đa hóa EV dài hạn | Sống sót và leo payout |
| Chiến thuật chính | Deep-stack postflop | Stack pressure, ICM, bubble play |

---

## Chip trong Tournament không phải tiền mặt

Đây là khác biệt quan trọng nhất.

Trong Cash Game, nhân đôi stack là nhân đôi tiền. Bắt đầu $200 và thắng thêm $200, bạn có $400. Vì vậy quyết định trong Cash Game có thể nhìn khá trực tiếp qua Chip EV: *Call này có lời không? Bet này có kiếm tiền dài hạn không?*

Trong Tournament, nhân đôi stack **không** có nghĩa là nhân đôi equity tiền thật. Payout dựa vào thứ hạng kết thúc, không dựa vào số chip chính xác ở một thời điểm.

Giả sử có một giải 10 người, mỗi người đóng $100.

| Hạng | Tiền thưởng |
|------|------|
| 1 | $500 |
| 2 | $300 |
| 3 | $200 |
| 4-10 | $0 |

Nếu bạn tăng từ 10% lên 20% tổng chip, cơ hội có tiền tăng lên, nhưng prize equity không tự động gấp đôi. Ngược lại, nếu mất hết chip ở bubble, equity trong giải về 0 ngay lập tức.

![Stack chip trong Tournament không đổi sang tiền thưởng theo tỷ lệ một-một dưới ICM](/images/icm-chips-not-money-real.webp "Giá trị chip Tournament và ICM trong poker")

---

## Blind cố định hay blind tăng dần?

Trong Cash Game $1/$2, blind vẫn là $1/$2. Một giờ sau vẫn vậy. Ba giờ sau vẫn vậy. Bạn có thể chờ spot tốt hơn, reload nếu cần và tiếp tục chơi deep stack.

Trong Tournament, blind tăng theo level. Một stack 100BB đầu giải có thể thành 25BB sau vài level dù bạn không thua ván nào. Rồi có thể còn 12BB. Đến lúc đó, chỉ ngồi chờ cũng trở nên đắt.

| Giai đoạn | Cash Game | Tournament |
|------|------|------|
| Đầu | Stack sâu vẫn phổ biến | Phần lớn bắt đầu deep |
| Giữa | Áp lực blind ổn định | Stack trung bình ngắn dần |
| Cuối | Có thể reload hoặc rời bàn | Short-stack all-in xuất hiện nhiều |
| Áp lực | Thấp và đều | Tăng theo từng level |

Vì vậy trong Tournament, lời khuyên "cứ chờ bài premium" không phải lúc nào cũng đủ. Blind tăng buộc bạn phải steal, defend, reshove và chấp nhận rủi ro có kiểm soát.

---

## Thời gian và quyền rời bàn

Cash Game linh hoạt. Bạn có thể chơi 30 phút, ngồi hai tiếng, hoặc rời bàn khi game xấu. Nếu mệt, tilt hoặc bận việc, bạn tự bảo vệ mình bằng cách đứng dậy.

Tournament thì khác. Khi đã đăng ký, bạn không biết chính xác khi nào kết thúc. Bạn chơi tới khi bị loại, vào ITM, tới final table hoặc thắng giải. Một giải live nhỏ cũng có thể kéo dài vài giờ. Một MTT lớn có thể lấy trọn cả ngày.

| Tình huống | Format phù hợp hơn |
|------|------|
| Thời gian rảnh không chắc chắn | Cash Game |
| Muốn session ngắn | Cash Game |
| Có thể tập trung nhiều giờ | Tournament |
| Thích xếp hạng, áp lực, cúp | Tournament |
| Có thể phải rời đi bất ngờ | Cash Game |

---

## Cấu trúc lợi nhuận và variance

Kết quả Cash Game thường được đo bằng **bb/100** hoặc win rate theo giờ. Nếu một người chơi thắng 5 big blind trên 100 hand qua sample lớn, đó là một edge ổn định. Feedback không hoàn hảo ngay lập tức, nhưng nhanh và sạch hơn Tournament.

Kết quả Tournament thường được đo bằng **ROI**, tỷ lệ cash, số lần final table và big score. Một người chơi Tournament thắng dài hạn có thể không cash 20 hoặc 30 giải liên tiếp, rồi một deep run trả lại mọi thứ.

| Chỉ số | Cash Game | Tournament |
|------|------|------|
| Đơn vị kết quả | bb/100 hoặc hourly | ROI và thứ hạng |
| Variance | Vừa | Rất cao |
| Cơ hội big score | Thấp hơn | Cao hơn |
| Feedback kỹ năng | Nhanh hơn | Chậm hơn |
| Thử thách tâm lý | Từng session | Chuỗi dài không cash |

Đừng nhầm variance với trình độ. Một big score không chứng minh bạn là crusher. Một session Cash Game thua cũng không nói rằng bạn không biết chơi.

---

## Bankroll: Tournament cần đệm dày hơn

Bankroll Management quan trọng ở cả hai format, nhưng Tournament thường cần đệm lớn hơn vì swing mạnh hơn.

Với Cash Game, quy tắc đơn giản cho người mới là khoảng **20-40 buy-in** cho mức đang chơi. Nếu buy-in thường là $200, bankroll poker thận trọng sẽ khoảng $4.000-$8.000.

Với Tournament, nhiều người dùng **50-100+ buy-in**; MTT field lớn có thể cần nhiều hơn. Một giải $50 trông rẻ hơn buy-in Cash Game $200, nhưng variance có thể nặng hơn rất nhiều.

| Format | Gợi ý bankroll cho người mới | Lý do |
|------|------|------|
| Cash Game | 20-40 buy-in | Variance thấp hơn, có thể reload |
| Sit & Go nhỏ | 40-60 buy-in | Payout variance cao hơn |
| MTT lớn | 100+ buy-in | Chuỗi không cash là bình thường |

Bankroll không chỉ là tiền. Nó bảo vệ chất lượng quyết định. Khi under-rolled, mỗi all-in đều có cảm giác quá cá nhân, và chiến thuật tốt dễ bị thay bằng nỗi sợ.

---

## ICM: khái niệm Tournament mà Cash Game không có

Ranh giới chiến thuật lớn nhất giữa Cash Game và Tournament là ==ICM==.

ICM là **Independent Chip Model**. Nó ước tính giá trị tiền thật của stack trong giải dựa trên stack size, số người còn lại và cấu trúc payout. Cash Game không cần ICM vì chip đã là tiền.

ICM quan trọng nhất gần bubble và ở final table. Giả sử bạn là stack trung bình ở bubble. Một người shove, bạn cầm AKo. Trong Cash Game, nếu pot odds và equity đủ tốt, bạn có thể call. Trong Tournament, thua hand đó có thể là rời giải với $0, trong khi thắng không nhân đôi payout equity của bạn.

| Yếu tố quyết định | Cash Game | Tournament |
|------|------|------|
| Logic call | Pot odds + equity | Pot odds + equity + ICM |
| Mất stack | Mất một buy-in | Bị loại |
| Giá trị hand mạnh | Ổn định hơn | Thay đổi theo áp lực payout |
| Áp lực bubble | Không có | Rất lớn |

![Bàn Tournament ở bubble, nơi áp lực ICM làm quyết định call all-in khó hơn Cash Game](/images/holdem-bubble-table.webp "Áp lực bubble và quyết định ICM trong poker")

---

## Deep stack vs short stack push/fold

Cash Game thường thưởng cho kỹ năng deep-stack. Bạn hay chơi quanh 100BB, nên quyết định ở flop, turn và river rất quan trọng. Cần hiểu value bet, bluff, board texture, vị trí và range đối thủ.

Tournament bắt đầu deep nhưng thường chuyển thành short-stack poker. Ở 25BB, 15BB hoặc 10BB, quyết định preflop quan trọng hơn. Thay vì lên kế hoạch ba street, bạn phải chọn open, reshove, call off hoặc fold.

| Độ sâu stack | Thường gặp ở | Kỹ năng chính |
|------|------|------|
| 100BB+ | Cash Game | Postflop và value bet |
| 40-60BB | Đầu/giữa Tournament | Open range và phản ứng 3-bet |
| 15-25BB | Giữa/cuối Tournament | Resteal và shove pressure |
| 10BB hoặc ít hơn | Cuối Tournament | Kỷ luật push/fold |

---

## Người mới nên bắt đầu từ đâu?

Với đa số người mới, **Cash Game là lớp học đầu tiên tốt hơn**.

Không phải vì Cash Game dễ. Nó không dễ. Nhưng nó cho bạn lặp lại tình huống sạch hơn. Blind ổn định, stack thường sâu hơn, và bạn có thể review call, raise hoặc value bet mà chưa phải gỡ thêm ICM, pay jump và áp lực blind.

Tournament vẫn rất hay nếu bạn thích cạnh tranh và chịu được variance. Chỉ đừng nhầm một deep run với bằng chứng rằng toàn bộ chiến thuật của bạn đã đúng.

| Mục tiêu | Nên bắt đầu với |
|------|------|
| Học nền tảng nhanh | Cash Game |
| Cải thiện postflop | Cash Game |
| Chơi event có lịch rõ | Tournament |
| Săn big score | Tournament |
| Session ngắn | Cash Game |
| Học ICM và bubble pressure | Tournament |

Nếu bạn hoàn toàn mới, hãy học trước [một ván Texas Hold'em diễn ra thế nào](/vi/blog/holdem-game-order) và [thứ hạng tay bài poker](/vi/blog/holdem-hand-rankings). Chọn format sẽ dễ hơn nhiều khi luật cơ bản đã tự động.

---

## Ở phòng poker live: hỏi gì trước?

Trước khi ngồi vào một phòng poker hoặc event địa phương, hãy hỏi format đang chạy. Cùng bàn, cùng chip, cùng bài nhưng cấu trúc khác nhau sẽ tạo ra quyết định rất khác.

| Câu hỏi | Vì sao quan trọng |
|------|------|
| Đây là Cash Game hay Tournament? | Giá trị chip và chiến thuật đổi hoàn toàn |
| Blind hoặc blind level là bao nhiêu? | Xác định áp lực stack |
| Có re-entry, rebuy hoặc add-on không? | Thay đổi tổng chi phí và rủi ro |
| Cấu trúc payout thế nào? | Ảnh hưởng bubble và ICM |
| Event thường kéo dài bao lâu? | Tránh lỗi vì áp lực thời gian |

Nếu chưa giải thích được cấu trúc, đừng buy-in vội. Hỏi trước, rồi chơi.

---

## FAQ

**Q. Tournament có khó hơn Cash Game không?**

A. Khó theo cách khác nhau. Cash Game đòi kỹ năng postflop sâu vì thường chơi 100BB. Tournament thêm blind tăng, short stack, ICM và bubble pressure.

**Q. Tournament có lời hơn Cash Game không?**

A. Tournament có thể tạo big score lớn hơn, nhưng variance cũng cao hơn nhiều. Cash Game thường ổn định hơn theo thời gian.

**Q. Người mới nên bắt đầu Cash Game hay Tournament?**

A. Đa số nên bắt đầu với Cash Game low-stakes hoặc Tournament rất nhỏ. Nếu mục tiêu là học nền tảng nhanh, Cash Game sạch hơn.

**Q. ICM có quan trọng trong Cash Game không?**

A. Không. ICM dùng cho Tournament vì chip giải đấu không trực tiếp là tiền và payout phụ thuộc vào thứ hạng. Trong Cash Game, chip đã là tiền.

**Q. Re-entry Tournament có giống Cash Game không?**

A. Không. Re-entry chỉ cho bạn vào lại trong một giai đoạn nhất định. Chip vẫn không phải tiền mặt, blind vẫn tăng và ICM vẫn quan trọng về sau.

**Q. Cần bao nhiêu buy-in cho Cash Game và Tournament?**

A. Quy tắc đơn giản: 20-40 buy-in cho Cash Game và 50-100+ buy-in cho Tournament. MTT field lớn có thể cần nhiều hơn.

---

## 3 điều cần nhớ

1. **Chip Cash Game là tiền; chip Tournament là quyền sống sót.**
2. **Cash Game dạy nền tảng nhanh hơn; Tournament kiểm tra áp lực tốt hơn.**
3. **Bankroll và thời gian rất quan trọng.** Nếu không chịu được session dài hoặc downswing dài, Cash Game thường là điểm bắt đầu tốt hơn.

Hãy nắm chắc nền tảng Cash Game trước, rồi thêm Tournament khi bạn sẵn sàng với blind tăng, áp lực ICM và cảm xúc của một deep run.
`.trim(),
};
