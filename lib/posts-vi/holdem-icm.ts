import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-icm",
  title: "ICM poker là gì? Mô hình chip độc lập (Independent Chip Model) và cách tính",
  seoTitle: "Giữ nửa số chip, chỉ đáng 38,4% tiền — ICM poker là gì?",
  desc: "Trong giải đấu, chip không phải là tiền — chỉ có một giải nhất. ICM đổi stack thành tiền thưởng thật: cách tính tay, chip EV, thuế ICM và deal ICM.",
  tldr: "ICM (Independent Chip Model — mô hình chip độc lập) đổi stack chip của bạn trong giải đấu thành giá trị tiền thưởng thật, dựa trên cơ cấu trả thưởng và stack của mọi người. Vì chỉ có một giải nhất, gấp đôi chip không bao giờ gấp đôi tiền — nên stack của chip leader đáng ít hơn tỷ lệ chip của nó, còn short stack đáng nhiều hơn. Khoảng cách đó là lý do bạn fold ở bubble những tay bài mà trong cash game bạn call dễ dàng.",
  category: "tournament",
  date: "2026-10-09",
  updated: "2026-10-09",
  masterUpdated: "2026-09-09",
  keepImagesInBody: true,
  readTime: "13 phút",
  emoji: "🏆",
  image: "/images/holdem-icm-hero.webp",
  imageAlt: "Những chồng chip bàn chung kết xếp trước một bảng trả thưởng, cho thấy stack chip lớn hơn không đổi một-một thành phần tiền thưởng lớn hơn",
  tags: ["icm poker", "icm poker là gì", "icm trong poker là gì", "icm poker strategy", "icm deal", "deal icm poker là gì", "chip ev", "icm poker formula"],
  content: `
Lần đầu tiên ICM lấy tiền của tôi, tôi thậm chí còn không biết nó tồn tại. Còn bốn người, ba người được trả thưởng, và tôi nhìn xuống đôi J với một stack tầm trung. Tôi shove, chip leader call bằng A-10, và tôi out bubble với hai bàn tay trắng. ==Suốt nhiều năm tôi cất chuyện đó đi như bằng chứng rằng cú shove là sai. Không phải vậy== — tôi chỉ không hề biết bubble thực sự *bắt bạn trả giá ở đâu*, và hóa ra đó chính là ý tưởng quan trọng nhất trong poker giải đấu.

==Chip trong giải đấu không phải là tiền. Bạn chỉ thắng *một* giải nhất, nên gấp đôi stack không bao giờ gấp đôi giá trị thật của bạn.== ICM — Independent Chip Model, mô hình chip độc lập — là phép toán đổi đống chip của bạn thành số đô la thật mà nó đại diện, và một khi nhìn thấy nó, những cú call và fold từng có vẻ sai bỗng trở nên hợp lý. Bài này dẫn bạn từ "ICM là viết tắt của từ gì" cho tới chia deal ở bàn chung kết, với mọi con số được tính sẵn để bạn tự kiểm tra lại.

ICM chỉ tồn tại bên trong [giải đấu (tournament)](/vi/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") — đó là lý do lối chơi MTT (giải nhiều bàn) ở giai đoạn cuối chẳng giống cash game chút nào.

---

### Tóm tắt nhanh về ICM

:::stripe
chip ≠ tiền | Bạn chỉ thắng một giải nhất
chip leader | đáng ÍT hơn tỷ lệ chip của họ
short stack | đáng NHIỀU hơn tỷ lệ chip của họ
:::

---

## ICM trong poker là gì?

**ICM (Independent Chip Model — mô hình chip độc lập) đổi một stack chip thành giá trị tiền thưởng thật của nó, dựa trên các khoản thưởng còn lại và cỡ stack của mọi người chơi.** Nó trả lời đúng một câu hỏi: ==nếu giải đấu kết thúc ngay bây giờ với những stack này, phần của tôi trong quỹ thưởng thực sự đáng bao nhiêu đô la?==

Nó ước lượng tần suất mỗi người chơi về ở từng vị trí có thưởng — nhất, nhì, ba, v.v. — dựa trên tỷ lệ chip của họ, rồi nhân các xác suất đó với tiền thưởng. Stack càng lớn, bạn càng hay về cao; nhưng vì ==giải nhất có mức trần, số chip thêm vào mua được ngày càng ít tiền hơn.==

Bước chuyển tư duy then chốt: trong cash game, một chip là một đô la, chấm hết. Trong giải đấu, một chip là một *tấm vé số* trên một bộ giải thưởng cố định. ICM định giá tấm vé đó. Nó chỉ áp dụng cho giải đấu và Sit & Go — [không bao giờ cho cash game](/vi/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp"), nơi chip của bạn đã bằng đúng mệnh giá.

---

## Vì sao 50% số chip chỉ đáng 38,4% tiền thưởng?

**Vì tiền thưởng được trải ra nhiều vị trí và được khóa lại ở phía dưới bạn — gấp đôi chip không gấp đôi equity tiền thưởng.** Giả sử ba giải trả $50 / $30 / $20. Khoảnh khắc bạn vào tiền, bạn chắc chắn có ít nhất $20 — nên những chip bảo vệ $20 đó rất quý, còn những chip với tới hạng nhất đang đuổi theo một giải thưởng bạn chỉ có thể thắng một lần.

Điều đó làm đường cong chip-sang-tiền ==bị bẻ cong==: những chip đầu tiên (sống sót) đáng giá rất nhiều, những chip cuối cùng (đi tìm chiến thắng) đáng giá ít hơn. Người giữ một nửa số chip không sở hữu một nửa quỹ thưởng — họ sở hữu ít hơn thấy rõ, vì họ không thể về cao hơn hạng nhất nhưng *vẫn có thể* bị loại.

Lật ngược lại thì short stack là người thắng trong phép toán này. Họ đã có một phần thật trong các pay jump (bậc thưởng) phía dưới, nên ==mỗi chip của họ đáng hơn mệnh giá==. Chính sự bất đối xứng duy nhất này — big stack bị định giá quá cao theo chip, short stack bị định giá quá thấp — chi phối mọi quyết định ICM bạn sẽ gặp.

---

## Cách tính ICM trong poker (mô hình Malmuth–Harville) — tính tay từng bước

**ICM gán cho mỗi người chơi xác suất về từng vị trí chỉ dựa trên cỡ stack, rồi nhân với tiền thưởng.** Phương pháp này thường được gọi là mô hình Malmuth–Harville — phép toán xác suất về đích đến từ nghiên cứu của David Harville về tỷ lệ cược đua ngựa thập niên 1970, được Mason Malmuth áp dụng vào poker.

Quy tắc rất đơn giản và có tính đệ quy:

- Xác suất bạn về **nhất** = stack của bạn ÷ tổng chip.
- Xác suất bạn về **nhì** = tổng, trên mọi người chơi khác có thể về nhất, của (xác suất họ thắng) × (stack của bạn ÷ số chip còn lại khi không tính họ).
- Tiếp tục như vậy cho từng vị trí thấp hơn.

Hãy làm thật. Còn ba người, giải thưởng là ==$50 / $30 / $20== (quỹ $100), và stack như sau:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Về đích | Leader (5.000 · 50%) | Middle (3.000 · 30%) | Short (2.000 · 20%) |
|:--|:--:|:--:|:--:|
| Hạng 1 | 50,0% | 30,0% | 20,0% |
| Hạng 2 | 33,9% | 37,5% | 28,6% |
| Hạng 3 | 16,1% | 32,5% | 51,4% |

</div>

Lấy con số hạng nhì của leader để bạn thấy phép đệ quy: nếu Middle về nhất (30% số lần), leader khi đó lấy 5.000 trên 7.000 chip còn lại = 71,4%, và 0,30 × 0,714 = 21,4%; nếu Short về nhất (20%), leader lấy 5.000 trên 8.000 = 62,5%, và 0,20 × 0,625 = 12,5%. Cộng lại: ==33,9%== số lần leader về nhì.

Giờ nhân từng hàng với tiền thưởng và bạn có giá trị đô la của mỗi stack:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Người chơi | Chip % | Giá trị ICM | ICM % | So với chip |
|:--|:--:|:--:|:--:|:--:|
| Leader | 50,0% | ==$38,39== | 38,4% | ==r:−11,6== |
| Middle | 30,0% | $32,75 | 32,8% | ==g:+2,8== |
| Short | 20,0% | $28,86 | 28,9% | ==g:+8,9== |

</div>

Nó đây, bằng con số: leader có ==một nửa số chip nhưng chỉ 38,4% tiền==, trong khi 20% chip của short stack đáng 28,9%. Bạn không cần tính tay ở bàn — [máy tính ICM](/vi/calculator) làm việc đó tức thì — nhưng nhìn thấy bộ máy chạy một lần là thứ khiến chiến thuật bám rễ.

---

## ICM và chip EV khác nhau thế nào?

**Chip EV đo một quyết định bằng số chip thắng hay thua; ICM (hay "$EV") đo nó bằng tiền thưởng thật. Hai thứ đồng thuận ở giai đoạn đầu và tách xa nhau ở giai đoạn cuối.** Đầu giải, khi các pay jump nhỏ xíu và còn rất xa, một chip về cơ bản vẫn là một chip — bạn chơi theo [chip EV](/vi/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp"), tích lũy không ngừng. Gần tiền và ở bàn chung kết, ICM lên nắm quyền.

Tình huống xung đột điển hình là một cú *call* all-in sát nút. Theo chip EV, một coin flip cho pot lớn có thể ổn, thậm chí tốt — bạn thắng được bao nhiêu chip thì cũng thua chừng ấy. Theo ICM, nó có thể là một cú ==fold== rõ ràng, vì bị loại khiến bạn mất equity ở mọi giải thưởng phía trên mức bạn đã khóa (bản thân mức tối thiểu được đảm bảo vẫn là của bạn; còn ở bubble, nơi chưa có gì được khóa, nó lấy đi tất cả), trong khi số chip bạn thắng được lại đáng ít hơn mệnh giá.

Đó là chỗ tôi đã hiểu ngược về đôi J ngày ấy. Thuế đánh vào cú *call*, và mặt ngược lại của nó chính là thứ giúp bạn vẫn có đất chơi ở bubble: vì range call của mọi người đều thắt lại, fold equity của bạn đáng giá **hơn** số chip nó mang lại. Shove first-in (người đầu tiên vào pot) là vũ khí của medium stack ở bubble, không phải lỗ hổng của họ — tôi chỉ đâm phải đúng người duy nhất có thể call rộng nhất, đó là variance, không phải lỗi chiến thuật. ==Chip EV hỏi "nước này có làm stack tôi lớn hơn không?" ICM hỏi "nước này có làm bankroll tôi lớn hơn không?"== — và chỉ câu thứ hai mới trả tiền.

---

## "Thuế ICM": vì sao mất chip đau hơn được chip?

**"Thuế ICM" (ICM tax) là khoảng cách giữa tỷ lệ chip và tỷ lệ tiền thật của bạn — phần giá trị bốc hơi ngay khi chip dồn lệch về một vài stack lớn.** Trong ví dụ đã tính, chip của leader nói 50% nhưng tiền nói 38,4%: một khoản ==thuế ICM 11,6 điểm== cho việc làm big stack.

Khoản thuế này hiện ra trong mọi cú all-in dưới dạng **risk premium (phần bù rủi ro)** — phần equity bạn cần có *thêm* so với điểm hòa vốn theo chip EV để một cú call thực sự có lãi bằng đô la. Nếu toán chip nói bạn cần 40% để call, ICM có thể đòi 48–50%, vì mặt thiệt (bị loại, mất equity ở các bậc thưởng) nặng hơn mặt lợi (chip đáng ít hơn mệnh giá).

Người cảm nhận điều này rõ nhất là **medium stack ở bubble** — đủ lớn để có equity thật mà mất, chưa đủ ngắn để bị buộc phải vào. Họ gánh risk premium cao nhất và nên chơi chặt nhất. Big stack gánh risk premium *thấp nhất*, và đó chính là động cơ đằng sau áp lực ICM.

---

![Một medium stack trong giải đấu fold trước cú shove của big stack ở money bubble, chip và bảng trả thưởng trong tầm mắt — khoảnh khắc áp lực ICM biến một cú call bình thường thành fold](/images/holdem-icm-pressure.webp "Áp lực ICM: medium stack fold vì out ở bubble là mất trọn min-cash và mọi giải thưởng phía trên")

## Bubble factor và risk premium thay đổi shove và call của bạn ra sao?

**"Bubble factor" đo việc mất chip khiến bạn thiệt nhiều hơn bao nhiêu lần so với thắng cùng số chip đó giúp bạn — và nó tăng vọt ngay trước mỗi pay jump.** Bubble factor 1,0 nghĩa là chip và tiền chuyển động cùng nhau (đầu giải). Bubble factor 1,5 nghĩa là một pot thua đau gấp 1,5× một pot thắng tương đương giúp — nên bạn cần lợi thế lớn hơn nhiều mới nên vào.

Hai quy tắc thực chiến rút ra từ đó:

- **Big stack: tấn công.** Risk premium thấp cho phép bạn [open và 3-bet](/vi/blog/holdem-3bet) không ngừng nghỉ nhắm vào những người không thể call mà không đánh cược cả mạng sống trong giải. Đây là "gây áp lực ICM", và là cách đáng tin cậy nhất để thắng chip ở bàn chung kết.
- **Medium và short stack: thắt chặt range call, nhưng vẫn là người shove trước.** Làm người đẩy all-in (có fold equity) tốt hơn rất nhiều so với làm người phải call off. Dưới áp lực, range call của bạn nên co lại mạnh trong khi range open-shove vẫn giữ nguyên sự hung hăng.

Ghế ác mộng là medium stack bị shove vào mặt — phải fold những tay bài mạnh ngang vài tay bài bạn sẽ snap-call trong cash game. Đó không phải yếu đuối; đó là ICM.

---

## Deal ICM là gì? ICM deal và chip chop khi chia quỹ thưởng bàn chung kết

**Ở dạng đơn giản nhất, chip chop chia số tiền còn lại theo tỷ lệ chip thô; ICM deal chia theo giá trị ICM bằng đô la của từng người. Chip chop có lợi cho big stack, ICM deal công bằng hơn với short stack.** Khi người chơi đồng ý kết thúc giải sớm và chia tiền thưởng, đây là hai phương pháp được đặt lên bàn — và biết sự khác biệt đáng tiền thật.

Giả sử ba người giữ 50% / 30% / 20% số chip đang chia quỹ còn lại ==$1.500== (trả $900 / $400 / $200):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Người chơi | Chip chop | ICM deal | Chênh lệch |
|:--|:--:|:--:|:--:|
| Leader (50%) | $750 | ==$618== | ==r:−$132== |
| Middle (30%) | $450 | $485 | ==g:+$35== |
| Short (20%) | $300 | ==$397== | ==g:+$97== |

</div>

Short stack nhận ==thêm $97== từ ICM deal so với chip chop, vì ICM ghi nhận các bậc thưởng họ đã kiếm được. Nên quy tắc rất dễ: ==nếu bạn ngắn, hãy đòi ICM deal; nếu bạn là chip leader, hãy đề xuất chip chop.== Trên thực tế chip leader thường thương lượng cao hơn một chút *so với* con số ICM của mình (và short stack chấp nhận thấp hơn một chút) để đổi lấy sự chắc chắn của việc khóa tiền — điều đó ổn, miễn là bạn biết con số ICM của mình trước. Hãy chạy stack và tiền thưởng của chính bạn qua [máy tính ICM](/vi/calculator) trước khi đồng ý bất cứ điều gì.

---

## Khi nào ICM quan trọng nhất — và khi nào nên bỏ qua?

**ICM quan trọng nhất ở gần các pay jump và ít quan trọng nhất khi chúng còn xa.** Hãy dựa vào nó ở những tình huống này:

- **[Money bubble](/vi/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp")** — bậc nhảy lớn nhất là từ $0 lên một khoản thưởng, nên risk premium đạt đỉnh.
- **Bubble bàn chung kết và mọi pay jump ở bàn chung kết** — mỗi nấc thang đều là tiền thật.
- **Satellite** — trường hợp cực đoan: ở satellite nhiều vé, mọi vé đều đáng giá như nhau, nên một khi bạn đã đủ chip để có vé, chip thêm gần như *vô giá trị* và bạn fold gần hết (satellite winner-take-all thì chơi để giành hạng nhất theo chip EV).

Dựa vào chip EV như một xấp xỉ đủ tốt khi:

- **Giai đoạn đầu và giữa**, khi pay jump kế tiếp vẫn là thứ trừu tượng xa vời và tích lũy chip mới là thứ thắng giải.
- **Chơi deepstack với blind nhỏ**, khi bạn còn không gian để chơi hơn đối thủ thay vì phải đẩy hết vào.
- **Heads-up tranh chức vô địch**, khi chỉ còn hai giải thưởng, nên số tiền còn trong cuộc có thể được đánh giá theo chip EV.

Một lỗ hổng phổ biến là áp dụng ICM quá đà: fold dần xuống thành short stack "để leo bậc thưởng" thay vì tích lũy khi áp lực thực ra chưa có. ICM là công cụ của giai đoạn cuối, không phải cái cớ để chơi sợ sệt suốt cả giải.

---

## ICM chính xác đến đâu? Hạn chế của ICM

**ICM là mô hình đơn giản tốt nhất chúng ta có, nhưng nó là một xấp xỉ — nó giả định mọi người chơi giỏi như nhau và bỏ qua gần như mọi thứ trừ cỡ stack.** Hãy thành thật về những gì nó bỏ sót:

- **Kỹ năng.** ICM coi một nhà vô địch thế giới và một người lần đầu chơi có cùng stack là ngang nhau. Chip của người chơi giỏi hơn đáng giá hơn mô hình nói.
- **Vị trí.** Một stack 3 big blind ở button (vẫn tự do chọn thời điểm và open-shove với trọn fold equity từ ghế tốt nhất) đáng hơn cùng stack đó ở big blind (một phần ba đã bị đặt vào, bị ép all-in trong một hai ván tới). ICM không nhìn thấy ghế ngồi.
- **Blind và diễn biến tương lai.** ICM đóng băng giải đấu ở đúng khoảnh khắc này; nó bỏ qua blind tăng, ante, và vài vòng (orbit — mỗi người đặt blind một lần) tiếp theo thực sự sẽ diễn ra thế nào.

Thậm chí có bằng chứng thực nghiệm cho điểm mù của nó: một nghiên cứu lớn năm 2025 đối chiếu ICM với kết quả giải đấu thật cho thấy nó có xu hướng ==đánh giá quá thấp big stack và đánh giá quá cao short stack==, một phần vì chip leader giỏi có thể tận dụng áp lực ICM để thắng *nhiều hơn* mô hình thô dự đoán. Các solver nâng cao thêm một hiệu chỉnh "future game" chính vì lý do này. Không điều nào trong số đó khiến ICM sai — nó khiến ICM trở thành một xấp xỉ ban đầu vững chắc mà bạn điều chỉnh theo kỹ năng và vị trí, chứ không phải một định luật vật lý.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-tournament | Poker tournament là gì? Buy-in, cấu trúc blind, trả thưởng và Day 1 | /images/holdem-tournament-hero.webp
/vi/blog/holdem-equity | Equity trong poker | /images/holdem-equity-hero.webp
:::

## Câu hỏi thường gặp

**Q. ICM poker là gì?**

A. ICM (Independent Chip Model) là công thức đổi stack chip của bạn trong giải đấu thành giá trị tiền thưởng thật, dựa trên các khoản thưởng còn lại và stack của mọi người chơi. Nó có tác dụng vì bạn chỉ thắng một giải nhất, nên chip và đô la không phải cùng một thứ — ICM định giá khoảng cách đó.

**Q. ICM được tính như thế nào?**

A. Nó gán cho mỗi người chơi xác suất về từng vị trí có thưởng dựa trên tỷ lệ chip của họ (xác suất về nhất = stack của bạn ÷ tổng chip, rồi đệ quy cho các vị trí thấp hơn), sau đó nhân các xác suất đó với tiền thưởng. Tổng lại là giá trị đô la của stack bạn. Trên thực tế bạn dùng máy tính ICM; điểm quan trọng là hiểu nó đang làm gì.

**Q. ICM và chip EV khác nhau ở điểm nào?**

A. Chip EV đo một quyết định bằng số chip thắng hay thua; ICM đo nó bằng tiền thật. Hai thứ đồng thuận ở đầu giải và tách nhau ra khi gần tiền. Ở bubble, bị loại là mất trọn cơ hội vào tiền; khi đã vào tiền, nó lấy đi mọi thứ phía trên khoản thưởng bạn đã khóa. Một cú all-in coin flip ổn theo chip EV có thể là một cú fold rõ ràng theo ICM.

**Q. ICM deal là gì và khác chip chop thế nào?**

A. Cả hai đều chia quỹ thưởng khi người chơi đồng ý kết thúc sớm. Ở dạng đơn giản nhất, chip chop chia tiền theo tỷ lệ chip thô (có lợi cho big stack); ICM deal chia theo giá trị ICM bằng đô la của từng người (công bằng hơn với short stack). Còn có một phiên bản trung gian: trước tiên tách riêng khoản thưởng mỗi người đã chắc chắn có, rồi chỉ chia phần tiền phía trên đó. Nếu bạn ngắn, hãy đòi ICM deal; nếu bạn là chip leader, chip chop trả cho bạn nhiều hơn.

**Q. ICM có áp dụng cho cash game không?**

A. Không. Trong cash game, mỗi chip đã bằng đúng mệnh giá đô la của nó và bạn có thể mua lại hoặc rời bàn bất cứ lúc nào, nên không có gì để đổi. ICM chỉ tồn tại vì chip giải đấu không thể đổi ra tiền theo mệnh giá.

**Q. Khi nào nên bỏ qua ICM?**

A. Bạn không bao giờ tắt nó hoàn toàn, nhưng tác động của nó đủ nhỏ để dùng chip EV làm xấp xỉ ở giai đoạn đầu, giai đoạn giữa và khi chơi deepstack với blind nhỏ — những lúc pay jump còn xa. Ở heads-up tranh chức vô địch chỉ còn hai giải thưởng, nên khoảng cách giữa hạng nhất và nhì có thể được đánh giá theo chip EV. Kể cả khi đó, hãy kiểm tra cơ cấu trả thưởng và phân bố stack.

**Q. Những lỗi ICM phổ biến nhất là gì?**

A. Ba lỗi lớn. Thứ nhất, áp dụng ICM *quá đà* — fold dần xuống "để leo bậc thưởng" khi pay jump còn xa, thay vì tích lũy chip. Thứ hai, call quá rộng khi là medium stack gần bubble, đúng chỗ risk premium của bạn cao nhất — chưa có gì được khóa, nên bị loại ở đó là mất trọn equity, kể cả min-cash. Thứ ba, đồng ý chip chop khi bạn là short stack (hoặc ICM deal khi bạn là leader) mà không chạy con số trước. ICM là công cụ của giai đoạn cuối: dùng quá sớm, hay phớt lờ nó ở bàn chung kết, đều rò rỉ tiền.

**Q. Ai phát minh ra ICM?**

A. Phép toán xác suất về đích thường được ghi công cho David Harville (từ nghiên cứu đua ngựa thập niên 1970), được Mason Malmuth áp dụng vào giải đấu poker — vì thế mới có tên mô hình "Malmuth–Harville". Nó trở thành cách chuẩn để định giá stack trong giải đấu và chia deal ở bàn chung kết.

**Q. ICM là viết tắt của từ gì?**

A. ICM là viết tắt của Independent Chip Model — mô hình chip độc lập: cách quy đổi stack chip của bạn trong giải thành phần tiền thưởng mà nó thực sự đáng, dựa trên cơ cấu trả thưởng còn lại và stack của tất cả người chơi còn lại trong giải.

---

## Những điều cần nhớ

1. **Chip không phải là tiền.** Bạn chỉ thắng một giải nhất, nên chip leader đáng ít hơn tỷ lệ chip của họ và short stack đáng nhiều hơn. Khoảng cách duy nhất đó là toàn bộ ICM.
2. **Giai đoạn cuối, chuyển từ chip EV sang $EV.** Gần pay jump, một cú call cần thêm equity (risk premium) mới có lãi. Medium stack fold những tay bài mà trong cash game sẽ snap-call.
3. **Biết con số của mình trước khi deal.** Short stack muốn ICM deal, big stack muốn chip chop — hãy chạy [máy tính ICM](/vi/calculator) trước.

Từ đây, xem áp lực ICM khớp vào [chiến thuật giải đấu](/vi/blog/holdem-tournament) rộng hơn thế nào, hoặc quay về nền tảng với [equity trong poker](/vi/blog/holdem-equity) và [pot odds](/vi/blog/holdem-pot-odds).

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Giải đấu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker tournament là gì?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Bài tổng quan về giải đấu — nền tảng của ICM</div>
  </a>
  <a href="/vi/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Giải đấu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cash game poker là gì?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao ICM không bao giờ áp dụng cho cash game</div>
  </a>
  <a href="/vi/blog/holdem-equity" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Equity trong poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Chip EV chỉ là equity tính bằng chip</div>
  </a>
  <a href="/vi/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Công cụ miễn phí</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Máy tính ICM</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Chạy stack và deal của chính bạn</div>
  </a>
</div>
`.trim(),
};

export default POST;
