import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-limping",
  title: "Limp trong poker: vì sao 'chỉ theo' preflop thường khiến bạn mất tiền",
  seoTitle: "Chỉ theo preflop âm thầm ngốn chip — limp trong poker là gì",
  desc: "Limp là chỉ call big blind trước flop thay vì raise. Vì sao đó thường là sai lầm, chỗ nào limp thật sự ổn, cao thủ trừng phạt người hay limp thế nào — 11 phút.",
  tldr: "Limp là vào pot trước flop bằng cách chỉ call big blind thay vì raise hoặc bỏ bài. Open-limp (là người đầu tiên vào pot) gần như luôn là sai lầm — limp không thể thắng blind ngay lập tức, bạn nhường thế chủ động và người chơi giỏi sẽ trừng phạt bạn. Nhưng limp không phải lúc nào cũng sai: hoàn thành small blind, over-limp bài đầu cơ sau những người đã limp, và vài tình huống live hay giải đấu stack ngắn là ngoại lệ hợp lý.",
  category: "strategy",
  date: "2026-10-09",
  updated: "2026-10-09",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "11 phút",
  emoji: "🚶",
  image: "/images/holdem-limping-hero.webp",
  imageAlt: "Một người chơi poker lặng lẽ đẩy chip lên để chỉ call big blind preflop trong khi những người khác chờ đợi, minh họa một cú limp bị động",
  tags: ["limp poker", "limp trong poker là gì", "limp poker là gì", "limp poker meaning", "open limp poker", "over-limp", "limp trong poker", "poker limp strategy", "limp raise poker"],
  content: `
Khi mới bắt đầu chơi, tôi limp vào gần như mọi pot. Cảm giác thật an toàn — tôi được xem flop với giá rẻ, không mạo hiểm nhiều, và "giữ mọi lựa chọn mở." Điều tôi không nhận ra là mọi người chơi dày dạn ở bàn đã đọc vị tôi ngay khoảnh khắc tôi làm thế. Limp là dấu hiệu rõ nhất ở poker cược nhỏ cho thấy ai đó chưa thực sự biết mình đang làm gì — và trong hai năm, người đó là tôi.

**Limp** là khi bạn vào pot trước flop bằng cách chỉ *call* (theo) big blind (mù lớn), thay vì raise (tố) hoặc fold (bỏ bài). Nghe vô hại, và thỉnh thoảng nó ổn thật — nhưng ==r:open-limp khi là người đầu tiên vào pot== là một trong những thói quen phổ biến và tốn kém nhất trong game. Dưới đây là chính xác limp là gì, vì sao nó thường mất tiền, những tình huống cụ thể mà nó thực sự đúng (nó không *luôn luôn* sai), và cách người chơi giỏi biến cú limp của bạn thành lợi nhuận của họ. Nắm đúng một khái niệm này là bước nhảy lớn hơn phần lớn người chơi tưởng — đó là quyết định thứ ba của một [chiến thuật Texas Hold'em](/vi/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") thắng, ngay sau việc chọn ghế và chọn bài khởi đầu.

---

### Limp trong nháy mắt

:::stripe
Call big blind | Limp là gì (không raise)
0% | Xác suất một cú limp thắng hai blind (mù — cược bắt buộc) mà không bị tranh
Open-limp | Phiên bản gần như luôn sai
Over-limp / SB | Những chỗ limp thực sự ổn
:::

---

## Limp trong poker là gì?

**Limp là vào pot preflop bằng cách call đúng bằng mức big blind — không raise.** Bạn bỏ mức tối thiểu để được xem flop. Điều quan trọng: limp chỉ áp dụng khi *chưa ai raise*; nếu ai đó đã raise và bạn theo bằng mức ấy, đó là **call**, không phải limp. Từ này mô tả riêng việc chọn con đường bị động, rẻ nhất để vào một pot chưa ai raise.

Đáng để tách hai thuật ngữ người ta hay lẫn với nhau. **Limper** là người vào pot chưa ai raise bằng cách call big blind. **Calling station** là người call quá nhiều và hiếm khi raise hay fold — thói quen lộ rõ nhất ở flop, turn và river. Hai từ thường mô tả cùng một người chơi lỏng-bị động, nhưng nhấn vào thói quen khác nhau — một bên là cách bạn *vào* pot, bên kia chủ yếu là cách bạn *tiếp tục* trong pot. Bài [giải thích từ vựng ở bàn poker](/vi/blog/holdem-glossary) sắp xếp phần còn lại nếu có chỗ nào khiến bạn vấp.

---

## Open-limp và over-limp khác nhau thế nào?

Trước khi phán xét limp, hãy tách nó làm hai — vì một phiên bản tệ hơn phiên bản kia rất nhiều. Open-limp là bạn mở màn pot bằng một cú call thay vì raise; over-limp (limp theo sau) là bạn call sau khi đã có người limp trước. Cái đầu vứt đi cơ hội thắng ngay; cái sau mua một chỗ rẻ trong pot nhiều người:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| | Open-limp | Over-limp (limp theo sau) |
|:---|:---|:---|
| **Khi nào** | Bạn là người **đầu tiên** vào pot | Bạn call **sau** khi đã có người limp |
| **Vấn đề** | Bạn lẽ ra có thể raise để thắng ngay — và đã không làm | Đỡ tệ hơn: bạn được giảm giá vào một pot nhiều người |
| **Phán quyết** | Gần như luôn là sai lầm | Tùy tình huống, ổn với đúng tay bài |

</div>

Sự phân biệt này quan trọng vì phần lớn lời khuyên "limp rất tệ" thực ra nói về **open-limp** — là người đầu tiên vào pot và chọn chỉ call. Over-limp sau những người khác là một quyết định thực sự khác, và thường có cơ sở. Giữ hai thứ tách bạch và cả chủ đề sẽ rõ hơn hẳn.

---

## Vì sao limp thường là sai lầm? (4 lý do)

Khi bạn open-limp, bạn từ bỏ nhiều hơn mình tưởng: cơ hội thắng hai blind ngay, quyền chủ động ở flop, kiểm soát kích cỡ pot và cả sự khó đoán của chính mình. Đây là chính xác những gì bạn mất:

1. **Một cú limp không thể thắng hai blind mà không bị tranh.** Đây là điều lớn nhất. Khi bạn *raise* đầu tiên, mọi người có thể fold và bạn thu hai blind không ai tranh — tiền miễn phí, một tỷ lệ đáng kể số lần. Khi bạn limp, con số đó là **không**. Bạn đã tự bảo đảm mình phải trúng bài hoặc thắng sau này; bạn vứt đi cách thắng sạch sẽ nhất.
2. **Bạn nhường quyền chủ động.** Người raise preflop là "kẻ tấn công" — họ được bắn một cú [c-bet](/vi/blog/holdem-continuation-bet) ở flop và thể hiện một tay bài mạnh, thường lấy pot mà chẳng có gì. Limp, và bạn đã trao câu chuyện đó cho người khác. Giờ bạn phản ứng thay vì dẫn dắt.
3. **Bạn tạo một pot phình to, nhiều người — thường khi không có vị trí.** Limp mời thêm người call và để big blind vào với giá rẻ. Càng nhiều người xem flop, tay bài của bạn càng kém giá trị, và nếu bạn limp từ vị trí sớm, bạn sẽ *out of position* (không có vị trí) trước gần như cả bàn ở mọi vòng cược, không có quyền chủ động. Đó là chỗ ngồi tệ nhất bàn.
4. **Bạn khiến mình dễ bị đọc — và dễ bị khai thác.** Những limper thường xuyên xuất hiện với một range bị giới hạn, lộ rõ. Người chơi giỏi tấn công nó không ngừng (nói thêm bên dưới), nên bạn liên tục rơi vào những thế khó khi không có vị trí. Như câu nói cũ, limper kinh niên "thắng pot nhỏ và thua pot lớn." Đó cũng là lý do lời khuyên "cầm AA hay KK ở ghế đầu thì limp rất hiệu quả" sai: bạn kéo cả bàn vào pot với tay bài mạnh nhất của mình, và càng nhiều người xem flop, đôi Át càng ít khi còn là tay bài tốt nhất ở river.

---

## Vì sao raise khi vào pot đầu tiên tốt hơn limp?

![Hướng dẫn trực quan với ba lựa chọn — RAISE tô vàng kèm dấu tích, LIMP đánh dấu đỏ kèm cảnh báo, và FOLD màu xám trung tính](/images/holdem-limping-raise-or-fold.webp "Mặc định giữ bạn đi trước phần còn lại: raise hoặc fold khi vào pot đầu tiên, và coi open-limp là lựa chọn cần tránh")

Toàn bộ lập luận cho việc raise thay vì limp quy về một sự bất đối xứng: **một cú raise có thể thắng pot ngay lập tức; một cú limp thì không bao giờ.** Khi bạn open-raise, bạn tự cho mình *hai* cách thắng — mọi người fold preflop, hoặc bạn lấy pot sau đó với quyền chủ động của kẻ tấn công. Limp chỉ để lại cho bạn con đường thứ hai, khó hơn, và tước đi fold equity khiến sự chủ động preflop có lời.

Có một lợi ích thứ hai, thầm lặng hơn: raise **từ chối equity** của hai blind (equity = phần pot kỳ vọng, tính cả khi chia pot). Nếu bạn limp, big blind được xem flop với giá rẻ bằng bất kỳ tay bài ngẫu nhiên nào họ được chia, và đôi khi nó đánh bại bạn. Một cú raise bắt họ trả giá để tiếp tục và thường đuổi họ ra hẳn, nên bài rác của họ không bao giờ có cơ hội trúng ngược bạn. Đó là lý do "raise hoặc fold" là mặc định mà người chơi giỏi sống theo — và vì sao vào pot bằng raise kết hợp tự nhiên đến vậy với một [range bài khởi đầu](/vi/blog/holdem-starting-hands-chart) có kỷ luật.

---

## Vậy khi nào limp thật sự ổn?

Đây là chỗ giáo điều đi quá xa. Limp *không* phải lúc nào cũng sai — câu trả lời trung thực, hiện đại là **open-limp khi vào pot đầu tiên gần như luôn là sai lầm, nhưng vài tình huống cụ thể là ngoại lệ hợp lý:**

![Nhiều người chơi đã limp vào cùng một ván, nên nhiều chồng chip nhỏ được đẩy lên quanh mặt nỉ xanh trong một pot nhiều người với giá rẻ](/images/holdem-limping-multiway.webp "Over-limp sau những người khác vào một pot nhiều người với giá rẻ là nơi những tay bài đầu cơ như đôi nhỏ thực sự có thể sinh lời")

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tình huống | Vì sao limp ổn ở đây |
|:---|:---|
| **Hoàn thành small blind (pot chưa ai raise)** | Chưa ai raise, tiền của bạn thường đã vào một nửa và chỉ còn big blind hành động sau bạn — quy tắc raise-hay-fold không còn đúng khi có giảm giá. Gặp một cú raise là chuyện khác: mặc định, 3-bet hoặc fold. |
| **Over-limp với bài đầu cơ** | Sau những limper khác với đôi nhỏ hoặc suited connector, bạn có odds rất tốt để flop ra một tay bài khủng trong pot nhiều người. |
| **Bàn live cược nhỏ rất bị động** | Nếu đối thủ chỉ raise với bài khủng và không bao giờ trừng phạt limper, bạn có thể xem flop rẻ với bài đầu cơ và thực hiện được equity. |
| **Vị trí muộn khi stack ngắn (giải đấu)** | Ở stack giải đấu ngắn — thấp hơn hẳn mức 100bb của cash game tiêu chuẩn — solver hiện đại phát triển range open-limp ở button, nơi raise thu được ít mà limp cắt giảm chi phí. |

</div>

Hữu ích nhất trong số này cho việc chơi hằng ngày là **over-limp với đôi tẩy nhỏ.** Các đôi nhỏ, chẳng hạn từ 22 đến 77, chỉ flop ra set (cầm đôi trên tay + 1 lá trên board) khoảng **11,8% số lần** (xấp xỉ 1 trong 8,5), nên tự chúng không đáng để xây pot lớn. Nhưng limp *sau* những limper khác với giá rẻ, trong một pot nhiều người mà bạn sẽ được trả tiền khi trúng, xoay [implied odds](/vi/blog/holdem-pot-odds) về phía bạn. Bạn đang set mining — và đó là lý do chính đáng để limp theo. Chỉ cần lưu ý quan điểm về câu thần chú "không bao giờ limp" đang thay đổi: công việc solver năm 2026 đã lặng lẽ phục hồi limp ở một số ít tình huống stack cạn và nhiều người. Đó là sắc thái, không phải giấy phép để open-limp toàn bộ range.

---

## Limp-reraise là gì?

**Limp-reraise** (hay limp-raise) là một cái bẫy: bạn limp, chờ đối thủ raise sau bạn, rồi *re-raise* lại họ. Làm với một tay bài khủng như đôi Át hay đôi K ở một bàn hung hãn, nó có thể xây pot lớn và trông yếu một cách đánh lừa.

Cái bẫy ở chỗ nó đã trở nên **quá lộ.** Vì gần như không ai limp *với ý định* fold, một cú limp-reraise giờ hét lên một range rất hẹp, rất mạnh — nghĩ đến TT+ và AK/AQ — với bất kỳ đối thủ biết suy nghĩ nào. Họ đơn giản fold mọi thứ trừ bài premium của chính họ, và "cái bẫy" của bạn thắng một pot tí hon hoặc thoát với giá rẻ. Nó vẫn có vài chỗ dùng hẹp (tình huống giải đấu stack ngắn, khai thác một người raise quá hung hãn), nhưng là đường chơi mặc định trước người chơi khá, nó màu mè hơn là có lời. Hãy coi nó là công cụ thỉnh thoảng, không phải nước đi chủ lực.

---

## Limp có phải dấu hiệu của "fish"? Cao thủ trừng phạt limp pot thế nào?

![Sơ đồ bàn sáu ghế — ghế đánh dấu đỏ đã limp bằng một chip, bốn ghế đã fold và bị gạch chéo với chip blind còn để lại, và button đáp lại bằng màu vàng với stack lớn hơn nhiều, mũi tên chĩa ngược về phía limper](/images/holdem-limping-isolation-raise.webp "Một chip mua cho bạn một chỗ — và người ở button quyết định pot này sẽ khiến bạn tốn bao nhiêu")

Có — ở phần lớn các bàn, một cú open-limp là tấm biển nhấp nháy ghi *"ở đây có người chơi yếu, bị động."* Và lý do nó là thói quen tốn kém đến vậy là vì người chơi giỏi không chỉ ghi nhận, họ **tấn công** nó:

- **Iso-raise (raise cô lập).** Khi một người chơi giỏi thấy bạn open-limp, họ raise lớn sau bạn — một cú "iso-raise" — để đuổi mọi người khác ra và đưa bạn vào thế heads-up, họ có vị trí và quyền dẫn cược. Giờ bạn chơi một pot lớn hơn mình muốn, không có vị trí, trước một người áp đảo bạn ở mọi vòng cược.
- **Value mỏng và c-bet (cược tiếp tục) không ngừng.** Trước một range limp bị giới hạn (ít hoặc không có bài premium, vì thường bạn sẽ raise những tay đó), người chơi giỏi bet nhiều vòng hơn để lấy value mỏng hơn và bluff thoải mái hơn, tự tin rằng bạn khó cầm những tay bài mạnh nhất.
- **Lạm dụng vị trí.** Vì limper thường lỏng và bị động, người chơi hung hãn đơn giản chơi lấn lướt họ sau flop, bet đuổi họ khỏi bài tầm tầm và vắt value khi họ trúng.

Cách sửa đơn giản đến dễ chịu: **raise hoặc fold làm mặc định, và dành limp cho những tình huống cụ thể ở trên.** Khoảnh khắc bạn ngừng open-limp, bạn ngừng là mục tiêu dễ nhất ở bàn — mà tình cờ, đó chính là thứ đầu tiên tách bạn khỏi [fish](/vi/blog/holdem-fish "thumb:/images/holdem-fish-hero.webp").

---

## Limp ở bàn live cược nhỏ và online/GTO khác gì?

Một lưu ý trung thực, vì bối cảnh thay đổi mọi thứ. Ở **online và những bàn khó hơn**, open-limp gần như không có cơ sở — các bàn hung hãn, gần như lần nào cũng có người iso-raise bạn, và đường cơ sở GTO về cơ bản là "đừng open-limp ở bàn 100bb bình thường" — trừ small blind (mù nhỏ), nơi hoàn thành blind vẫn có cơ sở vì những lý do ở trên.

Ở **bàn live cược nhỏ rất bị động**, đó là một thế giới khác. Nếu bàn thường xuyên để limper xem flop rẻ và không ai trừng phạt họ, limp theo với bài đầu cơ tốn ít hơn nhiều — bạn không bị cô lập, và bạn được thực hiện equity với những tay bài không muốn đối mặt một cú raise. Nó vẫn không *tối ưu* — và open-limp từ vị trí sớm vẫn là phiên bản tệ nhất — nhưng hình phạt nhỏ, và set mining trong một pot nhiều người (family pot) có thể in ra tiền. Hãy đọc bàn của bạn: bàn càng mềm và bị động, bạn càng limp được nhiều; bàn càng khó, bạn càng phải raise hoặc fold nghiêm ngặt.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-position-play | Vị trí thắng pot cho bạn như thế nào | /images/holdem-position-play-hero.webp
/vi/blog/holdem-starting-hands-chart | Tay bài nào nên chơi | /images/holdem-starting-hands-chart-hero.webp
:::

## Câu hỏi thường gặp

**Q. Limp poker là gì?**

A. Limp nghĩa là vào pot trước flop bằng cách chỉ call big blind, thay vì raise hay fold. Đó là cách rẻ nhất, bị động nhất để vào một pot chưa ai raise. Nó chỉ được tính là limp khi chưa ai raise — nếu ai đó đã raise và bạn theo bằng mức ấy, đó là call, không phải limp.

**Q. Vì sao limp bị xem là xấu trong poker?**

A. Open-limp từ bỏ rất nhiều: bạn không thể thắng pot preflop như một cú raise, bạn nhường quyền chủ động cho phép kẻ tấn công thắng pot bằng c-bet, và bạn mời một pot phình to nhiều người mà bạn thường phải chơi không có vị trí. Thêm vào đó, nó đánh dấu bạn là người chơi yếu, nên đối thủ mạnh raise để cô lập và khai thác bạn.

**Q. Có nên limp trong poker không — limp có bao giờ là chiến thuật tốt?**

A. Có, ở những tình huống cụ thể. Hoàn thành từ small blind, over-limp bài đầu cơ như đôi nhỏ và suited connector (hai lá bài liên tiếp cùng chất) sau những limper khác, bàn live cược nhỏ rất bị động, và vài tình huống ở button khi stack giải đấu ngắn đều hợp lý. Thứ gần như luôn sai là open-limp — là người đầu tiên vào pot và chọn chỉ call thay vì raise.

**Q. Open-limp và over-limp khác nhau ở điểm nào?**

A. Open-limp là khi bạn là người đầu tiên vào pot và chỉ call big blind — gần như luôn là sai lầm, vì bạn lẽ ra có thể raise để thắng ngay. Over-limp (hay limp theo sau) là call sau khi đã có người limp; nó có cơ sở hơn vì bạn được giảm giá vào một pot nhiều người, hợp với những tay bài set mining.

**Q. Limp-reraise là gì?**

A. Limp-reraise là khi bạn limp, một đối thủ raise sau bạn, rồi bạn re-raise — kinh điển là một cái bẫy với tay bài rất mạnh như đôi Át hay đôi K. Vấn đề là nó đã trở nên quá lộ: nó thể hiện một range hẹp và mạnh đến mức (khoảng TT+ và AK/AQ) người chơi giỏi đơn giản fold mọi thứ khác. Nó có vài chỗ dùng hẹp nhưng không phải đường chơi mặc định đáng tin.

**Q. Có bao giờ nên open-limp preflop không?**

A. Gần như không bao giờ ở cash game bình thường. Nếu một tay bài đủ tốt để chơi, nó thường đủ tốt để raise; nếu không, fold. Hoàn thành small blind trong pot chưa ai raise là trường hợp riêng (thường ổn — xem câu kế tiếp); ngoài ra, ngoại lệ hiếm hoi là bàn live cực kỳ bị động nơi bạn sẽ không bị trừng phạt, và vài tình huống vị trí muộn khi stack giải đấu ngắn mà solver chỉ ra. Mặc định, raise hoặc fold và bỏ qua open-limp.

**Q. Limp ở small blind có ổn không?**

A. Thường là có — trong pot chưa ai raise, hoàn thành small blind là một trong những cú limp có cơ sở nhất. Tiền của bạn thường đã vào một nửa, chỉ big blind có thể hành động sau bạn, và bạn đang được giá, nên logic raise-hay-fold thông thường không áp dụng theo cùng cách. Hoàn thành, raise hay fold tùy tay bài của bạn và khuynh hướng của big blind, nhưng limp ở đây khác xa sai lầm mà open-limp ở các vị trí khác mắc phải. (Gặp một cú raise, mặc định của small blind là 3-bet hoặc fold — gần như không bao giờ flat call.)

**Q. Limper và calling station khác nhau ở đâu?**

A. Limper vào pot chưa ai raise bằng cách chỉ call big blind trước flop — đó là về cách họ *vào* pot. Calling station call quá nhiều và hiếm khi raise hay fold, ở bất kỳ vòng nào — nhãn này chủ yếu về cách họ *tiếp tục*, nhất là sau flop. Cùng một người chơi lỏng-bị động thường làm cả hai, nhưng hai thuật ngữ nhấn vào thói quen khác nhau và không nên dùng thay cho nhau.

**Q. Người hay limp được gọi là gì?**

A. Thường là "fish" (người chơi yếu) — thuật ngữ chung cho người chơi yếu, thua tiền — hoặc "donk" (chơi tệ). ("Calling station" thường bị gán cho cùng người đó, nhưng từ ấy chỉ việc call quá nhiều ở bất kỳ vòng nào, không riêng thói quen open-limp.) Open-limp thường xuyên là một trong những dấu hiệu rõ nhất của người chơi thiếu kinh nghiệm, chính vì thế người chơi mạnh hơn nhắm vào limper bằng iso-raise. Nếu bạn không muốn mang nhãn đó, mặc định raise-hay-fold.

---

## Những điều cần nhớ

1. **Limp là call big blind thay vì raise** — và open-limp, là người đầu tiên vào pot, gần như luôn là sai lầm: một cú limp không thể thắng hai blind mà không bị tranh, bạn nhường quyền chủ động, và bạn tự đánh dấu mình là mục tiêu dễ.
2. **Nhưng nó không *luôn luôn* sai.** Hoàn thành small blind, over-limp bài đầu cơ sau những limper khác, và các tình huống live bị động hay giải đấu stack ngắn là ngoại lệ hợp lý. Câu giáo điều "không bao giờ limp" là nói quá.
3. **Mặc định raise-hay-fold.** Dành limp cho những tình huống cụ thể đó, và bạn sẽ ngừng tặng người chơi giỏi cơ hội miễn phí để cô lập và khai thác bạn.

Sửa thói quen limp là một trong những nâng cấp nhanh nhất trong poker — không tốn gì để học và ngay lập tức ngừng việc bạn rò rỉ chip như con mồi dễ nhất bàn. Ghép "raise hoặc fold" với một [range bài khởi đầu](/vi/blog/holdem-starting-hands-chart) vững và ý thức thực sự về [vị trí](/vi/blog/holdem-position-play), và bạn đã lặng lẽ tốt nghiệp khỏi nhóm mà mọi người khác đang cố đánh bại.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Chơi theo vị trí của bạn</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao limp khi không có vị trí đau nhất</div>
  </a>
  <a href="/vi/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bài khởi đầu trong poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Thứ gì đáng raise ngay từ đầu</div>
  </a>
  <a href="/vi/blog/holdem-fish" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thuật ngữ</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Fish trong poker là ai?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Những thói quen bị động đánh dấu một người chơi yếu</div>
  </a>
  <a href="/vi/blog/holdem-glossary" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thuật ngữ</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Từ vựng ở bàn poker, giải thích từ A đến Z</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Mọi từ vựng ở bàn, được giải thích</div>
  </a>
</div>
`.trim(),
};

export default POST;
