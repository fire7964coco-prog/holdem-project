import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-straddle",
  title: "Straddle poker là gì? Luật, các kiểu straddle và có nên straddle không",
  seoTitle: "Ném $4 trước khi chia bài — Straddle poker là gì?",
  desc: "UTG ném $4 trước khi chia bài — tôi tưởng đó là bet của người giàu. Straddle poker là gì, luật, các kiểu straddle, ai act trước và có lời không.",
  tldr: "Straddle là một blind tự nguyện — thường gấp đôi big blind — đặt trước khi bài được chia. Đổi lại, người straddle được act cuối cùng ở preflop và có quyền raise, còn stakes của ván coi như tăng gấp đôi. Trong gần như mọi trường hợp đây là nước đi -EV, và ngoài cash game thì hầu như không nơi nào cho phép.",
  category: "glossary",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "10 phút",
  emoji: "💰",
  image: "/images/holdem-straddle-hero.webp",
  imageAlt: "Người chơi ở vị trí under the gun đặt thêm một khoản blind hai chip trước big blind, trước khi bài được chia",
  tags: ["straddle poker là gì", "straddle poker", "straddle poker rules", "straddle poker meaning", "straddle là gì trong poker", "UTG straddle", "Mississippi straddle", "sleeper straddle"],
  content: `
Lần đầu có người straddle ở bàn $1/$2 của tôi, tôi không hiểu vì sao gã ngồi under the gun (ghế ngay bên trái big blind — mù lớn, cược bắt buộc) ném ra $4 trước khi bài tới — và vì sao dealer bỗng bắt đầu lượt hành động ở ghế kế tiếp. Tôi gọi nó là "bet của người giàu" suốt khoảng một tháng trước khi biết nó thật sự làm gì: một straddle ==nhân đôi stakes (mức cược) và mua cho một người quyền nói sau cùng trước flop==, tất cả trước khi ai kịp nhìn một lá bài.

Nếu bạn từng thấy một bàn live mà một blind phụ bỗng xuất hiện từ đâu ra, đây là từ bạn đang tìm. Đó là một trong những mục bị hiểu sai nhiều nhất trong cả [bảng từ poker](/vi/blog/holdem-glossary "thumb:/images/holdem-glossary-hero.webp"), nên hãy nắm nó cho thật đúng. Bên dưới là chính xác **straddle** (blind tự nguyện thứ ba, thường gấp đôi big blind) là gì, mọi kiểu bạn sẽ gặp, ai act trước — hành động trước — khi có straddle, và câu trả lời thật lòng cho câu hỏi duy nhất đáng hỏi: ==g:bạn có nên làm vậy không?==

---

### Tóm tắt nhanh

:::stripe
2× BB | Cỡ straddle tiêu chuẩn
Cuối cùng | Lượt act preflop của người straddle
Chỉ cash game | Gần như không bao giờ được phép trong giải đấu
-EV (EV âm) | Kết luận cho hầu hết người chơi
:::

---

## Straddle trong poker là gì?

**Straddle là một blind tự nguyện — thường gấp đôi big blind — đặt trước khi bài được chia.** Ở bàn $1/$2, người chơi under the gun có thể thả $4 "lên straddle", và bàn lập tức chơi như một bàn $1/$2/$4 trong ván đó.

Hai điều khiến nó không chỉ là thêm tiền vào pot:

- Nó là một **live blind** (blind còn quyền hành động). Y như big blind, người straddle đã mua **quyền raise sau cùng (option)** kể cả khi mọi người chỉ call — một "blind thứ ba" với quyền act trên nó.
- Nó được đặt **khi chưa thấy bài**. Bạn straddle *trước* khi nhìn bài (ở hầu hết phòng, trước cả khi bài được chia). Bạn đang bỏ tiền ra mà không có thông tin nào, và đó là toàn bộ lý do nó thường là ý tồi — nói thêm bên dưới.

Straddle không phải một cú raise theo nghĩa thông thường — nó là một blind đặt lại cái giá. Nếu bạn đã hiểu [small blind và big blind là gì](/vi/blog/holdem-blind-meaning "thumb:/images/holdem-blind-meaning-hero.webp"), straddle đơn giản là một blind *thứ ba* tùy chọn mà người chơi tự nguyện đặt để đẩy stakes lên và giành vị trí.

---

## Straddle vận hành thế nào: ai act trước, ai act cuối?

![Thứ tự hành động preflop với straddle $4 của UTG trên blind $1/$2 — UTG+1 act trước, người straddle act cuối, và mức raise tối thiểu nhân đôi lên $8](/images/holdem-straddle-action-order.webp "Một live straddle của UTG biến ghế bên trái big blind thành blind thứ ba — giờ người straddle act cuối trước flop")

Đây là phần những trang định nghĩa bỏ qua, và là chỗ người mới lạc lối. Straddle **sắp xếp lại thứ tự hành động preflop.** Hãy đi qua một bàn $1/$2 tiêu chuẩn nơi UTG straddle lên $4:

:::steps
UTG đặt straddle | Người chơi under the gun bỏ ra $4 (2× big blind $2) trước khi bài được chia
Act trước = bên trái người straddle | Hành động giờ bắt đầu từ người bên trái người straddle (UTG+1), không phải UTG — straddle hoạt động như một big blind mới
Vòng quanh bàn | Mọi người phải call $4 (không phải $2) để chơi; họ có thể fold, call hoặc raise — và mức raise tối thiểu giờ là $8, gấp đôi straddle, y như trên một big blind bình thường
Các blind quyết định | Small blind và big blind act theo lượt, đối mặt với giá $4
Người straddle act CUỐI | Nếu không ai raise, người straddle có thể check option của mình hoặc raise — lời nói sau cùng trước flop
:::

Cái "act cuối ở preflop" ấy là thứ người straddle trả tiền để có. Nhưng để ý cái bẫy: với **UTG straddle, đặc quyền act cuối chỉ áp dụng ở preflop.** Flop vừa ra, thứ tự cược trở lại bình thường — small blind act trước, và người straddle lại ở một ghế sớm, không có vị trí (out of position — OOP), với một pot đã phình to. Đó là một trong những lý do chính khiến UTG straddle thường xuyên mất tiền: bạn trả gấp đôi để được act cuối một vòng cược, rồi chơi ba vòng tiếp theo không có vị trí trước mọi người trừ các blind.

---

## Có những kiểu straddle nào: UTG, Mississippi, button và sleeper?

![Một khoản straddle đặt cạnh nút dealer, cho thấy button hay Mississippi straddle đặt từ ghế vốn đã act cuối sau flop](/images/holdem-straddle-button.webp "Button (Mississippi) straddle đặt từ nút dealer — straddle duy nhất đặt từ ghế vốn đã act cuối sau flop")

Không phải straddle nào cũng giống nhau — và khác biệt nằm hết ở **hành động bắt đầu từ đâu và bạn giữ vị trí cuối được bao lâu.** Đây là cách chúng so với nhau:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Kiểu | Ai đặt | Hành động bắt đầu từ | Act cuối | Có option không? |
|------|------|------|------|------|
| **UTG (tiêu chuẩn)** | Under the gun | Bên trái người straddle | Chỉ preflop | Có |
| **Mississippi** | Bất kỳ ghế nào (thường button/CO) | Bên trái người straddle | Preflop — postflop chỉ khi từ button* | Có |
| **Button** | Nút dealer | Small blind | Pre + postflop | Có |
| **Sleeper** | Một ghế không phải UTG | Bình thường (UTG) | Preflop, chỉ khi được fold tới | Luật riêng của phòng |
| **Re-straddle** | Bên trái một người straddle (một số phòng cho bất kỳ ghế nào) | Bên trái người re-straddle | Chỉ preflop | Có |

</div>

*Một Mississippi straddle act cuối sau flop chỉ khi nó được đặt ==từ nút dealer== — và điều đó đến từ chính nút dealer, không phải từ straddle, nên một straddle từ cutoff chỉ mua cho bạn lời nói sau cùng ở preflop.

- **UTG straddle** — kinh điển. Đặt từ under the gun, act cuối chỉ ở preflop. Phổ biến nhất và yếu nhất về vị trí.
- **Mississippi straddle** — có thể đặt từ **bất kỳ vị trí nào**, mạnh nhất từ nút dealer hoặc cutoff. Hành động bắt đầu bên trái người straddle, nên một Mississippi straddle từ button cộng thêm **lời nói sau cùng ở preflop** vào vị trí postflop mà button vốn đã có — straddle duy nhất có lý lẽ thật về vị trí. Không phải nơi nào cũng cho phép.
- **Button straddle** — một straddle kiểu Mississippi đặt riêng từ nút dealer; button giữ quyền act cuối suốt ván. Trình tự chính xác (small blind xếp vào đâu) tùy phòng — hãy xác nhận với dealer.
- **Sleeper straddle** — một blind từ ghế không phải UTG mà "ngủ yên": nó **không có hiệu lực trừ khi hành động fold hết tới nó**. Nó không mua vị trí như một live straddle; việc nó có được option để raise như một live blind khi "thức dậy" hay không là chuyện luật riêng của phòng (house rules). Hiếm, và gần như không bao giờ thấy online.
- **Re-straddle (double straddle)** — người bên trái có thể straddle *đè lên* một straddle, tối thiểu gấp đôi cái trước ($4 → $8 → $16). Có được phép hay không, và từ ghế nào, hoàn toàn là luật riêng của phòng.

⚠️ Mỗi kiểu trong số này đều **tùy thuộc luật riêng của phòng.** Khi không chắc, hãy hỏi floor (người quản lý sàn) trước khi ném chip ra — cơ chế thật sự khác nhau giữa các phòng.

---

## Straddle bao nhiêu tiền?

Straddle tiêu chuẩn là **đúng 2× big blind** — $4 ở bàn $1/$2, $10 ở bàn $2/$5. Đó là mặc định ở gần như mọi phòng poker.

Một số phòng no-limit cho phép nhiều hơn:

- **Straddle không giới hạn / all-in straddle** — một vài phòng cho người straddle đặt bất kỳ số tiền nào, tới cả stack, như một blind. Một straddle lớn có thể biến một bàn nhỏ thành bàn rất lớn trong một ván.
- **Chuỗi re-straddle** — nơi cho phép re-straddle, mỗi cái ít nhất gấp đôi cái trước: $4, rồi $8, rồi $16, và cứ thế. Những bàn mà cả bàn straddle rồi re-straddle có thể làm stakes hiệu dụng phình lên nhiều lần.

Nếu bạn đang call vào một pot có straddle, hãy nhớ [pot odds](/vi/blog/holdem-pot-odds) của bạn giờ được đo trên một blind lớn hơn — giá để chơi mỗi ván đã nhân đôi, điều này lặng lẽ trừng phạt kiểu call lỏng.

---

## Giải đấu có cho straddle không?

**Gần như không bao giờ.** Straddle là đặc điểm của cash game. Giải đấu (tournament) chạy trên một cấu trúc level blind cố định phải giống hệt ở mọi bàn để công bằng, và một blind phụ tự nguyện sẽ phá vỡ điều đó — nên đại đa số giải đấu, live lẫn online, **cấm straddle hoàn toàn.**

Ngay cả trong cash game nó cũng tùy chọn và tùy luật riêng của phòng: một số phòng chỉ cho UTG straddle, một số cho phép Mississippi và button straddle, một số giới hạn cỡ, một số cấm re-straddle. Online, straddle hiếm và, nơi có, thường chỉ là một nút bật UTG đơn giản. Khác biệt giữa một khoản cược cash game như thế này và thể thức giải đấu cứng nhắc là cả một chủ đề riêng — xem [giải đấu và cash game](/vi/blog/holdem-tournament-vs-cash-game).

---

## Straddle có lời không — bạn có nên straddle?

![Một pot lớn phình to với chip đủ loại chất giữa mặt nỉ, pot phồng lên mà straddle tạo ra trước khi ai thấy một lá bài](/images/holdem-straddle-bloated-pot.webp "Straddle nhân đôi blind và làm pot phình to — tiền bỏ vào trước khi một lá bài nào được nhìn thấy")

Câu trả lời thật lòng, và cũng là câu các solver đồng ý: **với gần như tất cả mọi người, không.** Phân tích của GTO Wizard nói thẳng: bỏ tiền vào mà không nhìn bài là "a massive disadvantage" (một bất lợi khổng lồ), và ngay cả straddle từ button cũng "still almost always a money-losing proposition" (vẫn gần như luôn là một nước đi mất tiền). Ba lý do nó tốn của bạn — hai ở bàn, một từ nhà:

:::card
🎯 | Bạn bỏ tiền khi chưa thấy bài | Tiền vào trước khi bạn thấy bài, nên bạn đang chơi một pot phình to mà không có thông tin — cùng bất lợi khiến các blind là ghế tệ nhất bàn. Nó còn làm độ sâu hiệu dụng của bạn giảm một nửa: ở $1/$2, stack $200 là 100 big blind, nhưng với straddle $4, cùng stack ấy chơi như 50
📉 | UTG straddle mua vị trí cho một vòng cược | Nó cho bạn act cuối ở preflop, rồi để bạn không có vị trí trước mọi người call trừ các blind trong ba vòng tiếp theo, trong một pot do chính bạn thổi phồng. Straddle cũng không làm các ghế muộn chơi lỏng hơn: trong [mô phỏng pot có straddle của GTO Wizard](https://blog.gtowizard.com/preflop-strategy-in-straddled-pots/) (UTG straddle lên 2bb), button mở **ít** tay hơn — ít hơn khoảng 15–20% — chứ không nhiều hơn
💸 | Nó có thể làm tăng pot rake | Ở những pot đủ điều kiện thu [rake](/vi/blog/holdem-rake), pot lớn hơn có thể đồng nghĩa khoản thu lớn hơn cho tới khi chạm cap. Mức tăng này không áp dụng với pot preflop theo luật no flop no drop, bàn time charge, hay pot đã chạm cap
:::

Vậy khi *nào* nó bào chữa được? Chỉ ở những chỗ cụ thể, và gần như không bao giờ là một nước đi thuần lợi nhuận:

- **Một bàn lỏng-thụ động** nơi đối thủ call blind lớn hơn với bài rác rồi chơi kiểu trúng-thì-đi-không-thì-fold sau flop — bạn thỉnh thoảng có thể khai thác điều đó, lý tưởng là straddle từ vị trí muộn.
- **Một bàn mà ai cũng đã straddle** — nếu mọi người thay phiên straddle trên cùng điều kiện, stakes tăng lên mà không ai chịu bất lợi tương đối. GTO Wizard lưu ý điều này nhìn chung có thể có lợi cho những người chơi mạnh hơn ở bàn, dù stack hiệu dụng nông hơn có thể làm giảm lợi thế của họ.
- **Bàn action / bàn vui** nơi bạn tới để vui, không phải để tối đa EV (giá trị kỳ vọng) — một lý do hoàn toàn chính đáng, chỉ cần thật lòng rằng nó đang tốn tiền của bạn.

Thứ straddle *không* làm được là "tạo hình ảnh lỏng" để sau này được trả tiền — bạn đang trả một cái giá thật, đo được, cho một lợi thế hình ảnh hiếm khi thành hiện thực. Nếu mục tiêu của bạn là thắng, nước đi thật sự xây lợi thế là [vị trí](/vi/blog/holdem-position-play), không phải một blind phụ. Straddle cho vui nếu bạn thích; đừng mong nó là cách đáng tin để cải thiện lợi nhuận.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-blind-meaning | Blind trong poker là gì? | /images/holdem-blind-meaning-hero.webp
/vi/blog/holdem-position-play | Vị trí thay đổi mọi thứ thế nào? | /images/holdem-position-play-hero.webp
:::

## Câu hỏi thường gặp

**Q. Straddle nghĩa là gì trong poker?**

A. Trong poker, straddle là một blind tự nguyện, thường gấp đôi big blind, đặt trước khi bài được chia — thường nhất bởi người chơi under the gun. Nó nhân đôi stakes cho ván đó và cho người straddle quyền raise cùng lượt act cuối ở preflop, y như một blind thứ ba.

**Q. Straddle thường là bao nhiêu?**

A. Straddle tiêu chuẩn là 2× big blind — $4 ở bàn $1/$2. Một số phòng no-limit cho phép straddle lớn hơn hoặc thậm chí không giới hạn (all-in), và nơi cho phép re-straddle, mỗi cái phải ít nhất gấp đôi straddle trước ($4, $8, $16, và cứ thế).

**Q. Có straddle thì ai act trước?**

A. Người chơi ngay bên trái người straddle act trước, vì một live straddle hoạt động như một big blind mới. Hành động rồi đi vòng quanh bàn, small blind và big blind act theo lượt, và người straddle act cuối ở preflop — với option để check hoặc raise nếu không ai raise trước đó.

**Q. Ai được phép straddle?**

A. Tùy kiểu. Với straddle tiêu chuẩn, chỉ người chơi under the gun — ghế ngay bên trái big blind — được đặt. Mississippi straddle, nơi phòng cho phép, cho bất kỳ người chơi nào straddle từ bất kỳ vị trí nào, thường nhất là button hoặc cutoff. Dù cách nào bạn chỉ có thể straddle *trước* khi bài được chia (hoặc trước khi bạn nhìn bài), và một ghế nhất định có được straddle hay không hoàn toàn tùy luật riêng của phòng — một số phòng chỉ cho UTG, một số cho bất kỳ ghế nào, và nhiều bàn online cùng giải đấu cấm hẳn.

**Q. Straddle có tính là raise không?**

A. Không. Straddle là một blind, không phải raise — nó đặt lại cái giá mọi người phải call để vào pot, và giữ cho người straddle option để raise sau. Nó có tính vào giới hạn số lần raise ở bàn limit hay không là luật riêng của phòng: nhiều phòng không tính, nhưng một số coi nó là raise cho mục đích đó, nên hãy kiểm tra tại chỗ.

**Q. Mississippi straddle là gì?**

A. Mississippi straddle có thể đặt từ bất kỳ vị trí nào, không chỉ under the gun — thường là button hoặc cutoff. Hành động rồi bắt đầu từ bên trái người straddle, nên một Mississippi straddle từ button cộng thêm lời nói sau cùng ở preflop vào vị trí postflop mà button vốn đã có — đó là lý do nó là straddle duy nhất có lý lẽ thật về vị trí. Không phải phòng nào cũng cho phép.

**Q. Sleeper straddle là gì?**

A. Sleeper straddle là một blind đặt từ ghế không phải UTG mà nằm im ("ngủ") trừ khi hành động fold hết một vòng tới nó. Nó không cho vị trí như một live straddle, và việc nó có được option để raise khi "thức dậy" hay không thay đổi theo phòng. Nó không phổ biến và hiếm khi có online — luôn xác nhận luật riêng của phòng.

**Q. Giải đấu có cho straddle không?**

A. Gần như không bao giờ. Giải đấu dựa vào một cấu trúc blind cố định phải giống hệt ở mọi bàn, nên một blind phụ tự nguyện sẽ phá vỡ thể thức. Straddle về cơ bản là tùy chọn chỉ có ở cash game, và ngay cả ở đó nó cũng tùy luật riêng của từng phòng poker.

**Q. Straddle có lời không?**

A. Với hầu hết người chơi, không — đó là nước đi -EV. Bạn bỏ tiền khi chưa thấy bài, UTG straddle mua lượt act cuối cho một vòng cược rồi bạn chơi phần còn lại không có vị trí trước mọi người trừ các blind (và straddle không làm các ghế muộn lỏng hơn — trong mô phỏng của GTO Wizard, button mở *ít* tay hơn, không nhiều hơn), và bạn có thể trả nhiều rake hơn. Nó chỉ bào chữa được ở bàn lỏng-thụ động, ở bàn mà ai cũng đã straddle, hoặc thuần túy cho vui — gần như không bao giờ là cách kiếm tiền. Khi mọi người thay phiên straddle trên cùng điều kiện, stakes cao hơn có thể có lợi cho những người chơi mạnh hơn.

---

## Những điều cần nhớ

1. **Straddle là một blind thứ ba tùy chọn, thường 2× big blind,** đặt trước khi có bài — nó nhân đôi stakes và mua lượt act cuối ở preflop.
2. **Ghế quyết định vị trí, không phải tên của straddle.** UTG straddle chỉ act cuối ở preflop. Straddle duy nhất cũng act cuối sau flop là straddle đặt ==từ nút dealer== — vì postflop, thứ tự luôn đi theo nút dealer. Mọi thứ đều tùy luật riêng của phòng.
3. **Nó là -EV với gần như tất cả mọi người.** Bỏ tiền khi chưa thấy bài, thổi phồng pot khi không có vị trí, và có thể trả nhiều rake hơn — những thứ đó nặng hơn niềm vui. Theo quy tắc chung, straddle để giải trí, không phải vì hình ảnh hay lợi nhuận.

Giờ bạn đã biết blind phụ này, hãy siết lại những nền tảng mà nó làm méo: [các blind thật sự làm gì](/vi/blog/holdem-blind-meaning), [vì sao vị trí thắng tiền](/vi/blog/holdem-position-play), và [các hành động cược và raise vận hành thế nào](/vi/blog/holdem-betting-actions) một khi straddle đặt lại cái giá.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Luật chơi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Blind trong poker là gì?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Small blind và big blind mà straddle xây lên từ đó</div>
  </a>
  <a href="/vi/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Vị trí thay đổi mọi thứ thế nào</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao vị trí của straddle quan trọng hơn cỡ của nó</div>
  </a>
  <a href="/vi/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Luật chơi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Hành động cược: check, call, raise</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Cái giá đặt lại thế nào sau một straddle</div>
  </a>
  <a href="/vi/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Giải đấu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Giải đấu hay cash game?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao straddle là chuyện riêng của cash game</div>
  </a>
</div>
`.trim(),
};

export default POST;
