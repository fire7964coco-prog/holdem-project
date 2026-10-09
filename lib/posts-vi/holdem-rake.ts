import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-rake",
  title: "Rake poker là gì? Phòng poker thu tiền cách nào, bạn thật sự trả bao nhiêu",
  seoTitle: "Cả tháng hòa vốn mà vẫn lỗ? — Rake trong poker là gì",
  desc: "Cả tháng hòa vốn: tôi thắng đối thủ nhưng thua phần phòng poker cắt. Rake poker là gì, thu kiểu nào, bạn thật sự trả bao nhiêu và rakeback trả lại gì.",
  tldr: "Rake là phần nhỏ phòng poker cắt từ hầu hết các pot để tổ chức ván chơi — thường 2,5–10% và có mức cap vài đô la mỗi pot. Hầu hết phòng không thu gì nếu mọi người fold trước flop (\"no flop, no drop\"). Rake ăn nặng nhất vào người chơi stakes thấp và bàn ít người, còn rakeback trả lại một phần cho người chơi thường xuyên.",
  category: "glossary",
  date: "2026-10-09",
  updated: "2026-10-09",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "11 phút",
  emoji: "🏦",
  image: "/images/holdem-rake-hero.webp",
  imageAlt: "Dealer kéo một chồng chip nhỏ từ pot giữa bàn vào khe thu rake trên mặt nỉ xanh",
  tags: ["rake trong poker là gì", "rake poker là gì", "rake poker", "rake là gì", "tiền rake là gì", "cắt rake là gì", "rakeback là gì", "pot rake"],
  content: `
Tôi mất một tháng chán nản với những buổi "hòa vốn" mới hiểu ra tiền của mình thật sự đi đâu. Tôi không thua những người chơi khác — tôi đang thắng họ, một chút. Tôi thua ==phần nhà cắt ở mọi pot tôi thắng.== Khoản phí lặng lẽ ấy gọi là **rake** (phí sòng), và cho đến khi hiểu nó, bạn có thể là người chơi thắng trên giấy mà vẫn là người thua ở quầy đổi chip.

Rake là cách một phòng poker kiếm tiền từ một ván chơi mà nó không chơi lấy một tay. Bên dưới là chính xác nó là gì, mọi cách nó được thu, phép tính thật lòng về ==g:bạn thật sự trả bao nhiêu mỗi buổi==, và cách rakeback (hoàn rake) đòi lại một phần. Đó là khoản phí quyết định việc thắng poker stakes nhỏ có khả thi hay không — và là một trong những từ đắt nhất trong [bảng từ poker](/vi/blog/holdem-glossary "thumb:/images/holdem-glossary-hero.webp") nếu hiểu sai.

---

### Tóm tắt nhanh

:::stripe
2,5–10% | Khoảng pot rake điển hình
$3–$6 | Cap rake phổ biến ở bàn live
No flop, no drop | Thường không thu rake nếu mọi người fold preflop
20–40% | Mức rakeback điển hình
:::

---

## Rake trong poker là gì?

**Rake là khoản hoa hồng phòng poker thu từ một cash game để tổ chức ván chơi.** Vì poker là người chơi đấu với người chơi — nhà không bao giờ cược — rake là cách phòng, sòng hay ứng dụng thật sự kiếm tiền. Đó là phí dịch vụ cho dealer (người chia bài), bàn, chip và an ninh, được cắt từng chút một từ các pot.

Trong cash game nó thường được lấy thẳng từ pot: một tỷ lệ nhỏ của số tiền giữa bàn, thả vào một khe trên bàn trước khi người thắng được trả. Trong giải đấu (tournament) nó hoạt động khác — phí được gộp sẵn vào buy-in của bạn ngay từ đầu (nói kỹ bên dưới). Dù cách nào, rake tách biệt với bất kỳ thứ gì bạn thắng hay thua trước người chơi khác, và chính vì thế nó rất dễ bị bỏ qua. Đây là một trong những khác biệt thực tế lớn nhất giữa [cash game và giải đấu](/vi/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp").

---

## Rake được thu kiểu nào: pot rake, time charge và dead drop khác gì?

![Dealer gạt vài chip từ giữa pot vào khe rake của bàn trước khi đẩy phần còn lại cho người thắng](/images/holdem-rake-drop.webp "Pot rake: một tỷ lệ nhỏ cắt từ pot và thả vào khe trước khi người thắng được trả")

Không chỉ có một kiểu rake. Cách nhà thu tiền tùy vào mức cược và phòng, và khác biệt rất quan trọng — bốn cách, và cách phòng của bạn dùng quyết định bạn thật sự trả bao nhiêu:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Kiểu | Thu thế nào | Mức điển hình | Gặp ở đâu |
|:---|:---|:---:|:---|
| **Pot rake (theo tỷ lệ)** | % của các pot đủ điều kiện, tới một mức cap | 2,5–10%, cap $1–$6 | Hầu hết cash game stakes thấp/trung, online |
| **Time charge** (thu phí theo giờ) | Phí cố định mỗi người, mỗi 30 phút | ~$10–$15 mỗi giờ | Live stakes cao ($10/$20+), và mọi mức cược không áp được pot rake |
| **Dead drop** (nút dealer trả rake cố định mỗi ván) | Người ở nút dealer trả một khoản rake định sẵn mỗi ván | Cố định mỗi ván | Một số phòng live |
| **Phí giải đấu** | Thu cùng buy-in ngay từ đầu | ~5–20% buy-in | Gần như mọi giải đấu |

</div>

Vài quy tắc chi phối cách pot rake thật sự được cắt:

- **"No flop, no drop"** (không có flop thì không thu rake). Ở hầu hết phòng, nếu ván kết thúc trước flop — mọi người fold trước một cú raise preflop — nhà **không thu rake** nào cả. (Không phải phổ quát: một vài trang, đáng chú ý là GGPoker, có thu rake một số pot preflop, nên hãy kiểm tra phòng của bạn.)
- **Cap** (mức trần rake). Nhà không bao giờ lấy trọn tỷ lệ trên một pot khổng lồ — nó dừng ở một mức tối đa, phổ biến **$3–$6 ở bàn live** và **$1–$3 online**. Cap có tăng khi mức cược tăng, nhưng không theo tỷ lệ — chúng nhảy theo bậc thô, nên nhiều mức cược thường dùng chung một cap. Thêm nữa chúng thường co lại khi ít người được chia bài hơn (một pot heads-up có thể bị cap ở $1).
- **Time charge thay cho pot rake.** Ở stakes cao hơn, phòng thường thôi cắt pot và thay bằng một khoản phí cố định — chẳng hạn $10–$15 mỗi giờ mỗi người, thu mỗi nửa giờ. Cách này có lợi cho người thắng pot lớn — dù thứ bạn tiết kiệm là rake *đã bị cap*, không phải một lát của pot: với cap $3–$6, một pot $2.000 cũng chỉ từng mất vài đô la.
- **Dead drop.** Một cách ít phổ biến hơn, chỉ người ở nút dealer trả một khoản rake định sẵn mỗi ván, thu trước khi bài được chia — thiết kế để người thắng pot lớn không bị đánh thuế nặng hơn ai khác.

---

## Bạn thật sự trả bao nhiêu rake?

![Một pot chip vừa phải trên mặt nỉ với vài đô la đã được gạt riêng làm rake, cho thấy một ván đơn lẻ lặng lẽ tốn bao nhiêu](/images/holdem-rake-lowstakes.webp "Ở stakes thấp, cap gần như không nhúc nhích khi pot lớn lên, nên pot nhỏ bị cắt nặng nhất theo tỷ lệ")

Đây là phần đã thay đổi cách tôi nghĩ về ván chơi. Tỷ lệ nghe rất nhỏ — 5%, cap vài đô — nhưng bạn trả nó ở gần như mọi pot bạn thắng, trong nhiều giờ.

**Một bàn live $1/$2.** Với rake 10% cap $5 và khoảng 30 ván mỗi giờ, hầu hết pot có tranh chấp đều chạm hoặc gần chạm cap. Một bàn đông riêng nó có thể trả **$100+ mỗi giờ** vào khe thu, tính chung tất cả người chơi. Số tiền ấy đi thẳng ra khỏi tổng số thắng của cả bàn — đó là lý do một bàn toàn người chơi ngang nhau chảy máu chip dần dần về phía nhà.

**"Bẫy rake" ở stakes thấp.** Đây là câu chốt mà mọi người mới nên nghe. Vì cap gần như không giảm khi bạn chơi mức thấp hơn, bạn chơi càng *thấp*, rake cắn càng *lớn* theo tỷ lệ. Đây là một ví dụ tính thử ở NL50 online (chỉ để minh họa — con số chính xác thay đổi theo số pot bạn tranh và cách phòng áp cap, không phải theo số ván bạn ghi lại). Hai mức cap bên dưới, một nằm trong dải online thông thường và một nằm ngoài: $2 nằm trong khoảng $1–$3 hầu hết phòng niêm yết, $4 cao hơn khoảng đó.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Cùng người chơi, cùng ván | Rake trả | Kết quả |
|:---|:---:|:---|
| Phòng có **cap $2** | ~5 bb/100 | Win rate +8 bb/100 vẫn là **người thắng (+3)** |
| Phòng có **cap $4** | ~8–9 bb/100 | +8 bb/100 hòa vốn hoặc thành **người thua (0 đến −1)** |

</div>

Cùng kỹ năng, cùng lợi thế trước cả bàn — và riêng rake là khác biệt giữa thắng và thua. Đó là lý do những grinder (người cày volume) stakes thấp nghiêm túc ám ảnh với cấu trúc rake, và là lý do [pot odds](/vi/blog/holdem-pot-odds) cùng win rate luôn phải đọc *sau khi* nhà đã lấy phần của mình.

---

## Rakeback là gì?

Vì nhà kiếm lời từ khối lượng bạn tạo ra, hầu hết phòng trả lại một phần để giữ bạn chơi tiếp. **Rakeback là một tỷ lệ của phần rake bạn đã trả, được hoàn lại cho bạn** — thường qua điểm thưởng, cashback hay chương trình khách hàng thân thiết, trả hàng tuần hoặc hàng tháng. Một thỏa thuận rakeback 30% đơn giản nghĩa là bạn nhận lại 30 cent trên mỗi đô la rake.

Có hai cách tính nó:

:::compare
Contributed | Dealt
Dựa trên rake từ những pot **bạn có bỏ tiền vào** — cách hiện đại tiêu chuẩn | Chia đều cho **mọi người được chia bài** trong pot bị thu rake, dù có góp tiền hay không — nay đã hiếm
:::

Với người chơi giải trí, rakeback là một đặc quyền nhỏ. Với một reg (regular — người chơi thường xuyên) khối lượng lớn thì nó khổng lồ: khoảng cách giữa thỏa thuận 20% và 40% tỷ lệ với lượng rake bạn thật sự tạo ra, nên nó chỉ thành tiền đáng kể nếu bạn chơi khối lượng thật ở stakes có ý nghĩa — và với nhiều grinder hòa vốn, rakeback *chính là* lợi nhuận của họ. Nó thực chất hạ mức rake thật của bạn, nên đáng kiểm tra trước khi chọn nơi chơi. Chỉ cần nhớ rằng phần lớn lời khuyên về rakeback trên mạng là do tiếp thị liên kết thúc đẩy — hãy đối xử với những trang "đăng ký tại đây" bằng sự hoài nghi bạn dành cho bất kỳ lời chào hàng nào.

---

## Giải đấu có rake không?

Không phải kiểu cắt pot — nhưng bạn vẫn trả một khoản phí, và nó ẩn ngay trước mắt. Giá vào một giải đấu có thể ghi riêng phần góp vào quỹ giải thưởng và phí bằng một **dấu "+"**; một số series, trong đó có WSOP, chỉ ghi một mức buy-in đã gồm phí. Ở dạng tách riêng:

:::pull
Một giải **$100 + $9** nghĩa là $100 vào quỹ giải thưởng và **$9 là phí của nhà.**
:::

Khoản phí đó — còn gọi là **"juice"** hay **"vig"** — là phiên bản rake của giải đấu, tức phí đăng ký (fee). Nó thường là **5–20% buy-in**, và cố định: bạn trả nó dù bị loại đầu tiên hay thắng cả giải. Buy-in thấp hơn mang phí cao hơn theo tỷ lệ (một Sit & Go $3 + $0,30 là 10%), và vì **các thể thức turbo nén lợi thế của bạn**, phí cắn nặng nhất ở đó — tỷ lệ càng thấp, kỹ năng của bạn càng sống sót qua nó nhiều hơn. Vì cấu trúc của một giải đấu khác hoàn toàn cash game, cách bạn trả tiền để chơi cũng vậy — một phân biệt đáng hiểu cùng với những điều cơ bản về [giải đấu và cash game](/vi/blog/holdem-tournament-vs-cash-game).

---

## Rake online và rake live, bên nào cao hơn?

Đây là một sự đánh đổi thật sự, và câu trả lời làm nhiều người bất ngờ:

- **Rake live** có xu hướng **tỷ lệ cao hơn (thường 10%) với cap cao hơn ($3–$6)** — nhưng bạn chỉ chơi khoảng 30 ván mỗi giờ, nên bạn trả nó ít lần hơn.
- **Rake online** thường **tỷ lệ thấp hơn (3–5%) với cap nhỏ hơn ($1–$3)** — nhưng bạn có thể thấy 250+ ván mỗi giờ trên nhiều bàn, nên một grinder khối lượng lớn có thể trả *nhiều* rake mỗi giờ hơn người chơi live dù tỷ lệ thấp hơn.

Bài học: đừng bao giờ đánh giá rake chỉ bằng tỷ lệ. Thứ quan trọng là bạn thật sự trả bao nhiêu mỗi pot — tỷ lệ, tới mức cap — **nhân với tần suất bạn trả nó.** Một bàn online 5% "rẻ" mà bạn chơi bốn bàn cùng lúc có thể tốn hơn một bàn live 10% "đắt" — chính vì thế rakeback và chọn bàn quan trọng hơn khi chơi online.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-straddle | Straddle trong poker là gì? | /images/holdem-straddle-hero.webp
/vi/blog/holdem-tournament-vs-cash-game | Giải đấu hay cash game? | /images/tournament-table-action.webp
:::

## Câu hỏi thường gặp

**Q. Rake poker là gì?**

A. Rake là khoản phí phòng poker thu từ một cash game để tổ chức ván chơi — thường là một tỷ lệ nhỏ của các pot đủ điều kiện (2,5–10%) tới một mức cap tối đa. Vì nhà không chơi, rake là nguồn thu chính của nó. Giải đấu thu một khoản phí tương đương gộp vào buy-in thay vì cắt pot.

**Q. Rake được tính như thế nào?**

A. Ở hầu hết cash game, đó là một tỷ lệ của pot, thả vào khe trước khi người thắng được trả, tới một cap vài đô la. Tỷ lệ và cap thay đổi theo phòng và mức cược, và cap thường co lại khi ít người được chia bài hơn. Ở stakes cao hơn, phòng có thể thu một khoản phí thời gian cố định mỗi người thay vì cắt pot.

**Q. Ai là người trả rake?**

A. Rake được lấy thẳng từ pot, nên trên giấy người thắng ván trả nó — stack thắng về nhỏ hơn đúng khoản rake. Thực tế, mọi người đã bỏ chip vào pot ấy đều góp phần, nên cả bàn chia sẻ chi phí qua một buổi chơi. Trong giải đấu thì không có gì mơ hồ: mọi người tham dự trả một khoản phí bằng nhau gộp vào buy-in, dù thắng hay bị loại đầu tiên.

**Q. Mọi người fold hết trước flop thì có bị thu rake không?**

A. Thường là không. Hầu hết phòng theo "no flop, no drop" — nếu ván kết thúc ở preflop, không thu rake. Nhưng không phải phổ quát: một vài trang (đáng chú ý là GGPoker) có thu rake một số pot preflop, nên đáng xác nhận luật của phòng bạn.

**Q. Bàn live $1/$2 thu rake bao nhiêu?**

A. Phổ biến là 10% pot, cap khoảng $5. Hầu hết pot có tranh chấp đều chạm cap, nên một bàn đông riêng nó có thể thả $100 hoặc hơn mỗi giờ tính chung cả bàn. Khoản phí ấy là lý do một bàn gồm những người chơi ngang nhau dần mất chip về phía nhà theo thời gian.

**Q. Rakeback là gì?**

A. Rakeback hoàn lại một tỷ lệ của phần rake bạn đã trả — thường 20–40% — qua điểm thưởng, cashback hay chương trình khách hàng thân thiết. Nó thực chất hạ mức rake thật của bạn. Với người chơi giải trí, đó là đặc quyền nhỏ; với reg khối lượng lớn, nó có thể là khác biệt giữa một năm thua và một năm thắng.

**Q. Làm sao để trả ít rake hơn?**

A. Bạn không thể thoát rake hoàn toàn trong một ván có thu rake, nhưng có thể thu nhỏ nó. Lấy thỏa thuận rakeback tốt nhất bạn có thể, và chọn phòng có cap thân thiện với người chơi. Chơi lên mức cược cao hơn cũng giảm rake, vì một cap cố định là phần nhỏ hơn của mỗi pot — nhưng chỉ bước lên khi bankroll (quỹ tiền chơi poker) của bạn chịu được biến động *và* bạn vẫn có lợi thế trước đối thủ khó hơn, nếu không người chơi sẽ lấy của bạn nhiều hơn hẳn rake từng lấy. Chơi ít pot hơn nhưng lớn hơn thay vì một loạt pot nhỏ cũng hạ nó: cap chỉ phát huy ở pot lớn, còn pot nhỏ trả trọn tỷ lệ. Tương tự với việc tránh bàn rất ít người, nơi bạn chơi nhiều ván mỗi giờ hơn hẳn và đặt blind thường xuyên hơn hẳn, nên bạn ở trong nhiều pot bị thu rake hơn mỗi giờ (kể cả khi cap giảm lúc ít người được chia bài). Ưu tiên bàn stakes cao thu time charge cũng giúp — nhưng chuyển sang những bàn đó đòi hỏi cùng một tấm đệm bankroll và lợi thế trước đối thủ. Xét thuần chi phí, một ván bài tại nhà (home game) không thu rake là poker rẻ nhất — không gì bị cắt khỏi pot.

**Q. Tại sao phòng poker thu rake?**

A. Vì nhà không bao giờ cược trong poker — người chơi đấu với nhau, nên phòng không thắng hay thua một pot nào. Rake là cách nó trang trải dealer, bàn, chip và an ninh, cắt từng chút một từ các pot để tổ chức ván chơi. Trong giải đấu, khoản phí tương đương được gộp sẵn vào buy-in thay vì lấy từ pot.

**Q. Giải đấu có rake không?**

A. Có, nhưng không phải từ pot. Phí được thu cùng khoản tiền vào giải của bạn. Một giá tách riêng như $100 + $9 gửi $100 vào quỹ giải thưởng và $9 cho nhà; các series như WSOP thay vào đó ghi một mức buy-in đã gồm phí. Khoản phí ấy ("juice" hay "vig") thường là 5–20% buy-in và được trả bất kể bạn về đích thế nào.

**Q. Rake ảnh hưởng tới win rate thế nào?**

A. Đáng kể — nhiều nhất ở stakes thấp, nơi cap gần như không giảm theo mức cược. Bàn ít người thêm một hiệu ứng thứ hai không liên quan gì tới cap: cùng một khoản rake mỗi pot được chia cho ít người hơn, và bạn đặt blind thường xuyên hơn hẳn trên mỗi 100 ván — nên phần của bạn mỗi ván tăng lên. (Mỗi *giờ* bạn cũng trả nhiều hơn, đơn giản vì nhiều ván hơn diễn ra, nhưng đó là câu hỏi khác với bb/100.) Rake có thể biến một người thắng nhỏ thành người thua: cùng một người chơi +8 bb/100 có thể thành hơi âm chỉ vì chuyển sang phòng có cap rake cao hơn. Luôn đo win rate sau rake.

**Q. Rake online hay rake live cao hơn?**

A. Rake live có xu hướng tỷ lệ cao hơn, thường với cap cao hơn, nhưng bạn chơi ít ván mỗi giờ hơn hẳn. Rake online thường tỷ lệ thấp hơn với cap nhỏ hơn — cap thay đổi theo phòng và mức cược, và một số cap online cao hơn live — nhưng chơi nhiều bàn nghĩa là bạn trả nó ở nhiều ván hơn hẳn, nên một grinder khối lượng lớn có thể trả nhiều rake mỗi giờ hơn khi online. Hãy đánh giá rake bằng số bạn thật sự trả mỗi pot — tỷ lệ, tới mức cap — nhân với số pot bạn trả nó, chứ không chỉ bằng tỷ lệ.

---

## Những điều cần nhớ

1. **Rake là phần nhà cắt để tổ chức ván chơi** — thường 2,5–10% của các pot đủ điều kiện tới một cap nhỏ, và nó tách biệt với thứ bạn thắng hay thua trước đối thủ.
2. **Nó cắn stakes thấp nặng nhất.** Cap gần như không nhúc nhích khi bạn xuống mức thấp, nên theo tỷ lệ bạn trả nhiều rake nhất ở đáy — "bẫy rake" khiến micro-stakes khó thắng đến vậy.
3. **Rakeback và cấu trúc rake quan trọng.** Nhận lại 20–40% rake, và chọn phòng có cap thân thiện với người chơi, có thể lật ngược kết quả dài hạn của bạn — hãy đo mọi thứ *sau* rake.

Giờ bạn đã thấy phần nhà cắt, những con số bạn đọc ở mọi nơi khác trở nên dễ hiểu hơn: [pot odds](/vi/blog/holdem-pot-odds) của bạn, win rate của bạn, và vì sao một [straddle](/vi/blog/holdem-straddle) làm pot phình to cũng lặng lẽ nuôi rake. Poker có thể thắng được — nhưng chỉ khi bạn thắng những người chơi khác *nhiều hơn* phần nhà lấy đi.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Giải đấu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Giải đấu hay cash game?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao hai thể thức thu tiền bạn hoàn toàn khác nhau</div>
  </a>
  <a href="/vi/blog/holdem-straddle" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thuật ngữ</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Straddle trong poker là gì?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Blind phụ làm pot phình to — và cả rake</div>
  </a>
  <a href="/vi/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Xác suất &amp; toán</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cách tính pot odds</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Đọc pot của bạn sau khi nhà đã cắt phần</div>
  </a>
  <a href="/vi/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Giải đấu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Giải đấu poker vận hành thế nào</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Phí buy-in thật sự đi đâu</div>
  </a>
</div>
`.trim(),
};

export default POST;
