import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament",
  seoTitle: "Lần đầu đánh tour poker — poker tournament là gì và Day 1",
  title: "Poker tournament là gì? Buy-in, cấu trúc blind, trả thưởng và Day 1",
  desc: "Không thua chip mà 200 BB thành 10 BB — đó là giải đấu poker. Buy-in, cấu trúc blind, cơ cấu trả thưởng, freezeout, PKO, satellite và checklist Day 1.",
  tldr: "Trong giải đấu poker (tournament), bạn trả một buy-in cố định để nhận chip, blind tăng theo đồng hồ cho đến khi một người giữ toàn bộ chip. Khoảng 10–15% người chơi đứng đầu được vào tiền. Các thể thức gồm freezeout, PKO, satellite và deepstack — tham gia bằng buy-in trực tiếp, qua giải vệ tinh hoặc đăng ký trước trực tuyến.",
  category: "tournament",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-01",
  keepImagesInBody: true,
  readTime: "14 phút",
  emoji: "🏆",
  image: "/images/holdem-tournament-hero.webp",
  imageAlt: "Sàn thi đấu giải poker live đông đúc, đồng hồ blind hiển thị 12.000/24.000 trong lúc người chơi tranh một ván bài",
  tags: [
    "poker tournament là gì",
    "giải đấu poker là gì",
    "itm trong poker là gì",
    "buy in poker",
    "gtd trong poker là gì",
    "mtt poker là gì",
    "satellite poker",
    "cách đánh tour poker",
    "luật poker tournament",
  ],
  content: `
Tôi bước vào giải đấu poker live đầu tiên của mình — lần đầu đi đánh tour — với $200 trong túi, một hình dung mơ hồ về cách chơi Texas Hold'em, và hoàn toàn không biết "level blind" hay "bubble" nghĩa là gì.

Bốn giờ sau tôi bị loại. Nhưng tôi đã hiểu chính xác từng thuật ngữ, biết vì sao mình thua, và biết khi nào nên quay lại.

Bài này là tất cả những gì tôi ước có ai đó nói với mình trước ngày hôm đó — cấu trúc giải đấu thực sự vận hành ra sao, bạn đang bước vào thể thức nào, đăng ký thế nào cho khỏi lúng túng, và Day 1 diễn ra như thế nào từng giờ một.

---

### Tóm tắt nhanh

:::stripe
10–15% | số người tham gia thường được trả thưởng
20–40 phút | mỗi level blind ở giải live (60+ ở Main Event lớn)
$100+$9 | một buy-in điển hình được chia thế nào — quỹ thưởng + phí
:::

## Poker tournament là gì? (trả lời trong 30 giây)

Giải đấu poker (tournament) là một cuộc thi mà mọi người đều trả cùng một khoản phí tham gia (gọi là **buy-in**), nhận cùng một số chip khởi điểm, và chơi cho đến khi một người giữ toàn bộ chip của cả giải. Lưu ý: "tour" như APT hay WPT là một chuỗi giải tổ chức ở nhiều nơi, còn mỗi giải đấu là một sự kiện riêng trong chuỗi đó.

**Tóm trong một câu:** Trong cash game, chip của bạn là tiền thật và bạn có thể rời bàn bất cứ lúc nào. Trong giải đấu freezeout, khoản thua tối đa của bạn đúng bằng buy-in — re-entry và add-on đẩy nó lên cao hơn — nhưng bạn đang chơi để giành một phần của quỹ thưởng lớn hơn rất nhiều.

Khác biệt duy nhất đó thay đổi giá trị chip, áp lực blind và chiến thuật từ gốc rễ. → Phân tích đầy đủ: [Cash game vs tournament poker — bạn nên chơi gì?](/vi/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp")

---

## Cấu trúc giải đấu: buy-in, phí và stack khởi điểm được tính thế nào?

Khi đăng ký, bạn trả một khoản buy-in. Số tiền đó được chia làm hai phần:

| Buy-in $109 (ghi là "$100+$9") | Đi về đâu |
|:---|:---|
| **$100** | → Prize pool (quỹ thưởng), chia cho toàn bộ người tham gia |
| **$9** | → Phí (fee) — phần nhà tổ chức giữ lại, tức rake (phí sòng) |

Các giải live lớn thường giữ lại 8–10% buy-in làm phí (các giải hằng ngày nhỏ thường lấy nhiều hơn) — ở đây là $9 trên $109, khoảng 8,3%. Khoản phí này hoạt động ra sao (và vì sao online khác live) được giải thích trong bài [rake trong poker hoạt động thế nào](/vi/blog/holdem-rake).

Đổi lại, bạn nhận một **stack khởi điểm** — thường từ 10.000 đến 50.000 chip giải đấu, tương đương khoảng 100–300 big blind (mù lớn — viết tắt là BB) ở Level 1.

**Stack khởi điểm của bạn không có giá trị tiền mặt.** Một stack 10.000 chip không bằng $10.000 — nó chỉ là mạng sống của bạn trong giải. Điều duy nhất quan trọng là bạn có nhiều chip hơn những người khác hay không khi các vị trí có thưởng đến.

Mọi giải đấu đều công bố cấu trúc của mình trong một **bảng cấu trúc (structure sheet)**: stack khởi điểm, các level blind (mức blind), thời lượng mỗi level, lịch ante và lịch trả thưởng. Hãy xin bảng này lúc đăng ký — đó là tài liệu hữu ích nhất trong cả phòng.

---

## Cấu trúc blind trong giải đấu poker: level, ante và đồng hồ chạy thế nào?

Đây là phần hầu hết các bài hướng dẫn cho người mới bỏ qua, và cũng là khái niệm cơ học quan trọng nhất của giải đấu.

**Blind (mù — cược bắt buộc) bắt đầu nhỏ và tăng theo đồng hồ giải (clock) — thường là mỗi 20–40 phút ở giải live, và từ 60 phút trở lên ở các Main Event lớn** (WPT Australia 2026 đã chạy Championship Event với level 60 phút, kéo dài lên 90 phút ở những ngày sau).

| Level | Blind | Ante | Stack 10k của bạn = |
|:---|:---:|:---:|:---|
| 1 | 25 / 50 | — | 200 big blind |
| 3 | 75 / 150 | 150 | 67 big blind |
| 6 | 200 / 400 | 400 | 25 big blind |
| 9 | 500 / 1.000 | 1.000 | 10 big blind |

Hãy để ý: **bạn không thua một chip nào** từ Level 1 đến Level 9. Nhưng stack của bạn đã đi từ 200BB xuống 10BB chỉ vì blind tăng. Đó chính là cách giải đấu ép người chơi phải hành động và dần loại họ ra.

==g:Nguyên tắc chung: dưới 20 big blind bạn bắt đầu bước vào vùng push/fold (chỉ còn all-in hoặc fold), và đến 15 big blind thì đó là lối chơi chính. Dưới 10 big blind, bạn phải shove gần như mọi tay bài chơi được — nhất là từ vị trí muộn hoặc small blind — trước khi blind ăn sạch stack của bạn.==

Khi đến lúc đó, range shove chính xác nằm trong bài [chiến thuật short stack — khi nào push, khi nào fold](/vi/blog/holdem-short-stack).

**Ante là gì?** Sau các level đầu, hầu hết giải đấu thêm "ante" — một khoản cược bắt buộc phụ thu ở mỗi ván, bên cạnh hai khoản blind. Ở phần lớn giải live hiện đại, đây là một khoản "big blind ante" duy nhất bằng đúng một big blind, do người ở ghế big blind trả thay cho cả bàn (vì thế cột ante ở bảng trên trùng với big blind). Ante làm pot to lên và đẩy nhịp chơi nhanh hơn. Khi ante xuất hiện, stack của bạn teo lại còn nhanh hơn nữa.

Hoàn toàn chưa quen với blind? Bắt đầu từ bài [small blind và big blind thực ra là gì](/vi/blog/holdem-blind-meaning) — nó sẽ làm mọi con số "BB" ở trên trở nên dễ hiểu ngay.

---

## 4 giai đoạn mà mọi giải đấu đều đi qua

### Giai đoạn 1 — Level đầu (stack sâu 100–200 BB)
Bạn có nhiều không gian để chơi. Bài đầu cơ, mua set, xem flop — đều hợp lý. Hầu hết người mới chơi quá chặt ở đây. Blind còn rẻ; hãy dùng thời gian này để đọc bàn.

### Giai đoạn 2 — Giai đoạn giữa (30–60 BB)
Ante thường đã vào từ lúc này. Áp lực stack bắt đầu. Những người short stack (stack ngắn) bắt đầu shove. Đây là nơi phần lớn người chơi bị loại.

### Giai đoạn 3 — Bubble
Giai đoạn căng thẳng nhất. Chỉ cần thêm một người bị loại là tất cả những ai còn lại đều **có thưởng** (ITM = In The Money — vào tiền). Short stack đứng hình. Big stack bắt nạt. Chơi khôn ở đây có thể thêm equity thật mà không cần thắng một pot nào — [bubble xứng đáng có riêng một bài](/vi/blog/holdem-bubble).

### Giai đoạn 4 — Bàn chung kết
Bàn chung kết (final table) thường còn 6–9 người. Tiền thưởng tăng mạnh sau mỗi lần loại. [ICM (Independent Chip Model — mô hình chip độc lập)](/vi/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") chi phối mọi quyết định ở đây — chip EV và EV tính bằng tiền thật (EV — giá trị kỳ vọng) tách xa nhau rõ rệt.

---

## Có những loại giải đấu poker nào? Freezeout, PKO, satellite, deepstack…

| Thể thức | Cách hoạt động | Phù hợp với |
|:---|:---|:---|
| **Freezeout** | Một buy-in, không rebuy. Hết chip = bị loại. | Người mới — chi phí cố định |
| **Rebuy / Re-entry** | Mua chip lại trong khung giờ đầu — với rebuy, thường không cần phải bị loại trước | Người chơi aggressive có bankroll lớn hơn |
| **Bounty / KO** | Nhận một khoản bounty tiền mặt cố định cho mỗi người bạn loại | Người thích hành động — thêm thu nhập mỗi lần knockout |
| **PKO (Progressive KO)** | Bounty tăng dần sau mỗi lần knockout — một phần trả cho bạn, một phần cộng vào bounty trên đầu bạn | Người chơi chấp nhận variance cao, upside lớn |
| **Deepstack** | Stack khởi điểm cao hơn hẳn giải chuẩn trong cùng chuỗi, cộng thêm level chậm hơn | Người muốn chơi postflop nhiều hơn |
| **Satellite** | Giải thưởng = vé vào một giải lớn hơn, không phải tiền mặt | Người chơi ngân sách hạn chế nhắm đến giải lớn |
| **Turbo / Hyper-Turbo** | Level blind ngắn hơn giải chuẩn rất nhiều, nên stack nông rất nhanh và push/fold đến sớm | Phiên ngắn — người quen với shove-hoặc-fold |
| **Mystery Bounty** | Giải bounty mà mỗi lần knockout (thường từ một giai đoạn định sẵn) bốc một giải thưởng ngẫu nhiên — đa số nhỏ, vài giải là jackpot | Người săn một khoản trả thưởng lớn |
| **MTT** | Multi-Table Tournament — giải nhiều bàn với số người tham gia lớn | Mọi người — thể thức phổ biến nhất |
| **SNG (Sit & Go)** | Bắt đầu khi đủ ghế (không có giờ khởi tranh cố định) — thường 6–9 người | Chơi nhanh, không cần xếp lịch |

**Cho người mới:** Hãy bắt đầu với một **Freezeout MTT** — chi phí biết trước, luật đơn giản, không phải đau đầu quyết định rebuy.

Ba cái tên thể thức bạn sẽ gặp nhiều nhất trên lịch giải xứng đáng được định nghĩa tử tế:

### Freezeout poker là gì?

Giải freezeout cho mỗi người chơi đúng một buy-in. Thua hết chip là bị loại — không rebuy, không re-entry. Đây là thể thức giải đấu nguyên bản, và là thể thức tốt nhất cho người mới vì tổng chi phí của bạn được cố định ngay lúc đăng ký.

### PKO poker là gì? (Progressive Knockout — bounty tăng dần)

PKO (Progressive Knockout) là giải bounty mà thông thường khoảng một nửa mỗi buy-in đi vào quỹ thưởng chính, nửa còn lại trở thành bounty treo trên đầu người chơi đó. Khi bạn loại ai đó, bạn thường nhận ngay một phần bounty của họ bằng tiền mặt, phần còn lại được cộng vào bounty của chính bạn — khiến bạn trở thành mục tiêu lớn hơn khi bạn thắng. Tỷ lệ chia chính xác thay đổi theo từng nơi và từng giải; 50/50 là phổ biến nhưng không phải tuyệt đối, nên hãy xem lobby hoặc bảng cấu trúc. (Một bài hướng dẫn chiến thuật PKO đầy đủ sẽ sớm có trong cụm bài này.)

### Deepstack poker là gì?

Giải deepstack cho bạn nhiều chip hơn hẳn so với blind khi đặt cạnh giải chuẩn trong cùng chuỗi, và thường đi kèm level blind dài hơn. **Không có ngưỡng chuẩn hóa nào cho nó** — "deepstack" luôn là một nhãn tương đối. Hãy tính từ bảng cấu trúc xem stack Level 1 của bạn đáng bao nhiêu big blind, rồi so với mức 100–200 BB của một giải chuẩn. Nhiều chip hơn và đồng hồ chậm hơn nghĩa là chơi postflop nhiều hơn, nhiều cơ hội sửa sai hơn, và những ngày thi đấu dài hơn.

**Còn rebuy và add-on thì sao?** Trong giải rebuy, bạn có thể mua lại chip trong một khung giờ đầu định sẵn — ở nhiều giải, bất cứ lúc nào stack của bạn bằng hoặc thấp hơn stack khởi điểm, không cần phải bị loại trước; add-on là một lần mua chip tùy chọn duy nhất, thường được mở khi khung giờ đó đóng lại. Sau đó, giải diễn ra như một freezeout.

---

## Satellite poker là gì? (giải vệ tinh)

Satellite (giải vệ tinh) là một giải nhỏ hơn mà phần thưởng không phải tiền mặt — mà là **một vé** vào một giải lớn hơn, đắt hơn.

**Ví dụ:**
- Buy-in WSOP Main Event: **$10.000**
- Buy-in satellite: **$500** (20 người chơi)
- Giải thưởng: **1 vé** vào Main Event

Thay vì bỏ ra $10.000, bạn thi đấu trong một giải $500 với 19 người khác. Một người thắng chiếc vé $10.000.

**Satellite xâu chuỗi** còn đi thấp hơn nữa. Một super-satellite $5 → giải vòng loại $55 → giải $215 → một Main Event online $1.050. Rất nhiều người chơi ở các giải lớn đã vào bằng chuỗi satellite với chi phí chỉ bằng một phần nhỏ buy-in trực tiếp.

==g:Chiến thuật satellite khác với giải đấu thường — ở satellite trao nhiều vé giống hệt nhau, một khi bạn đã đủ chip để chắc chắn có vé, hãy ngừng mạo hiểm — fold cả những tay bài tốt để không bị out ở bubble. Satellite kiểu winner-take-all chỉ trao một vé là ngoại lệ: nó được chơi để giành hạng nhất theo chip EV.==

---

## Đăng ký giải đấu poker bằng cách nào? 3 cách

### Cách A: Đăng ký trực tiếp tại quầy giải đấu (dễ nhất)
1. Tìm quầy đăng ký của phòng poker (hoặc quầy giải đấu với các sự kiện lớn)
2. Xuất trình **giấy tờ tùy thân có ảnh còn hiệu lực** + thẻ thành viên nếu được yêu cầu
3. Trả buy-in bằng tiền mặt, chip hoặc thẻ
4. Nhận thẻ chỗ ngồi (seat card — số bàn + số ghế)
5. Đến bàn, đưa thẻ chỗ ngồi cho dealer (người chia bài), nhận chip
6. Đếm stack khởi điểm trước khi chơi ván đầu tiên — sai sót vẫn xảy ra

### Cách B: Đăng ký trước trực tuyến
Hầu hết các festival live lớn cho bạn đăng ký trước trực tuyến:
- Tạo tài khoản trên ứng dụng hoặc trang đăng ký của giải
- Trả buy-in trực tuyến
- Đến địa điểm → xác minh giấy tờ → in thẻ chỗ ngồi ở kiosk hoặc nhận tại quầy
- Bỏ qua hàng chờ đăng ký — rất đáng làm với các giải lớn

### Cách C: Qua giải vệ tinh (satellite)
- Tìm giải satellite trực tuyến hoặc tại chỗ
- Thắng satellite → nhận vé vào giải mục tiêu
- Đến quầy đăng ký của giải chính → xuất trình vé + giấy tờ → nhận thẻ chỗ ngồi

**Đăng ký thường mở 1–3 giờ trước giờ khởi tranh.** Với các festival lớn, hãy đăng ký trực tuyến từ hôm trước để chắc chắn có ghế.

Muốn xem các giải sắp diễn ra ở gần bạn? Xem [lịch giải poker](/vi/tournaments).

---

## Cách chơi poker tournament theo từng giai đoạn thế nào?

Một bài viết không thể dạy hết chiến thuật giải đấu — đó là việc của các bài trong cụm — nhưng đây là bộ khung theo từng giai đoạn mà mọi kế hoạch thắng đều dựa vào:

**Level đầu (100BB+):** Chơi chặt, chú ý vị trí, và xem flop rẻ với những tay bài có thể hạ gục đôi lớn. Một bộ [bài khởi đầu nên chơi theo vị trí](/vi/blog/holdem-starting-hands-chart) kỷ luật sẽ ngăn phần lớn thảm họa của người mới. Đừng bluff bay stack trong giờ đầu tiên — không ai fold ở Level 1 cả.

**Giai đoạn giữa (30–60BB):** Ante khiến mọi pot đều đáng tranh. Open rộng hơn từ vị trí muộn, cướp blind, phòng thủ big blind thường xuyên hơn, và bắt đầu theo dõi xem ai đang short stack ở bàn.

**Short stack (dưới 20BB):** Push/fold lên ngôi — toán học ở đây gần như đã được giải sẵn, và đoán mò tốn tiền thật. Học range shove trong bài [chiến thuật short stack](/vi/blog/holdem-short-stack).

**Bubble và bàn chung kết:** Toán sống sót vượt lên trên toán chip. Áp lực trả thưởng thay đổi những tay bài bạn có thể chơi — bài về bubble và ICM đã dẫn ở phần giai đoạn phía trên nói chính xác cách làm.

---

## Day 1 diễn ra thế nào? Từng giờ của lần đầu đánh tour

Đây là phần hầu hết người mới chỉ học được bằng cách trả giá. Dưới đây là một dòng thời gian Day 1 thực tế cho một giải freezeout $300 live, khởi tranh lúc 12:00:

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:hsl(var(--primary));margin-bottom:14px">Dòng thời gian Day 1 — Freezeout $300, 10.000 chip khởi điểm</div>
<div style="display:grid;gap:10px;font-size:13px">
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">10:30</div>
<div style="color:hsl(var(--foreground))">Mở đăng ký. Xuất trình giấy tờ, trả tiền, nhận thẻ chỗ ngồi. Tìm bàn của bạn.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">12:00</div>
<div style="color:hsl(var(--foreground))">Bài được chia. Level 1: blind 25/50. Bạn có 200BB. Chơi thăm dò.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">12:40–14:40</div>
<div style="color:hsl(var(--foreground))">Level 2–4. Late reg (đăng ký muộn) vẫn mở. Số người tăng. Ante vào theo bảng cấu trúc (Level 3 trong ví dụ phía trên). Vài người đã bị loại.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">~15:30</div>
<div style="color:hsl(var(--foreground))">Late reg đóng. Công bố tổng số người tham gia. Quỹ thưởng được xác nhận.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">~17:00</div>
<div style="color:hsl(var(--foreground))">Giờ nghỉ ăn tối (thường 1 giờ). ~40% người chơi đã bị loại. Các bàn được gộp lại.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">18:00–21:00</div>
<div style="color:hsl(var(--foreground))">Bubble đến gần. Bắt đầu chơi hand-for-hand. Áp lực lên đỉnh. Một người bị loại = tất cả có thưởng.</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0">
<div style="color:#22c55e;font-weight:700">21:00–23:00</div>
<div style="color:hsl(var(--foreground))">ITM — money bubble vỡ. Những người còn lại đóng túi chip (bag) hoặc chơi tới bàn chung kết ngay trong đêm.</div>
</div>
</div>
</div>

---

## Cơ cấu trả thưởng của giải đấu poker: ai nhận bao nhiêu?

**Cấu trúc điển hình:** 10–15% người chơi đứng đầu được trả thưởng.

| Số người tham gia | Số người được trả | Min-cash (điển hình) | Hạng nhất (điển hình) |
|:---|:---:|:---:|:---|
| 100 | ~13 | 1,5–2 lần buy-in | 25–30% quỹ thưởng |
| 500 | ~60 | 1,5–2 lần buy-in | 20–25% quỹ thưởng |
| 2.000 | ~250 | 1,7–2,2 lần buy-in | 13–18% quỹ thưởng |
| 10.000 | ~1.200 | 1,5–2 lần buy-in | 8–12% quỹ thưởng |

**Ví dụ thực tế (WPT Seminole Rock 'N' Roll Poker Open Championship 2024, buy-in $3.500, 1.435 lượt tham gia):**
- Quỹ thưởng: $4.592.000 ($3.200 của mỗi buy-in đi vào quỹ — phần còn lại là phí)
- Số người được trả: 180 (~12,5% số người tham gia)
- Min-cash (mức thưởng thấp nhất): khoảng 1,83 lần buy-in
- Hạng nhất: $662.200 (~14% quỹ thưởng)

Lịch trả thưởng có thể xem trước khi giải bắt đầu, nhưng số vị trí được trả cuối cùng và số tiền chính xác thường chỉ được xác nhận sau khi đăng ký, rebuy và add-on đóng lại. Hãy xin **bảng cấu trúc** lúc đăng ký — nó liệt kê các level blind, ante, stack khởi điểm và lịch trả thưởng.

---

## Thuật ngữ giải đấu bạn sẽ nghe ở Day 1

Trong cách nói thông thường, đánh tour nghĩa là chơi giải đấu. 16 thuật ngữ dưới đây bao phủ phần lớn những gì bạn sẽ nghe ở bàn. Muốn xem đầy đủ từ A đến Z, xem [bài giải thích từng thuật ngữ](/vi/blog/holdem-glossary).

| Thuật ngữ | Nghĩa là gì |
|------|--------------|
| **ITM** | In The Money — bạn đã vào vị trí có thưởng |
| **Bubble** | Giai đoạn ngay trước ITM — còn một người bị loại nữa là tất cả vào tiền |
| **Hand-for-hand** | Mọi bàn chơi từng ván cùng lúc trong giai đoạn bubble để chống câu giờ |
| **Bảng cấu trúc (structure sheet)** | Tài liệu chính thức liệt kê level blind, ante và lịch trả thưởng |
| **Chip leader** | Người đang có nhiều chip nhất |
| **Short stack** | Người có rất ít chip so với blind |
| **Shove / jam** | All-in (tất tay) — đẩy toàn bộ stack vào giữa bàn |
| **Late reg** | Khung đăng ký muộn — bạn có thể vào giải sau khi đã bắt đầu, cho đến reg end (hết hạn đăng ký) |
| **Re-entry** | Mua vé vào lại sau khi bị loại (chỉ trong khung late reg) |
| **Satellite** | Giải vòng loại mà phần thưởng là vé vào một giải lớn hơn |
| **PKO** | Progressive Knockout — giải bounty mà phần thưởng knockout tăng dần |
| **Mystery Bounty** | Thể thức bounty mà phần thưởng cho mỗi lần knockout được bốc ngẫu nhiên |
| **Turbo** | Cấu trúc có level blind ngắn hơn nhiều; hyper-turbo còn ngắn hơn nữa |
| **Add-on** | Một lần mua thêm chip duy nhất dành cho tất cả mọi người khi hết giai đoạn rebuy, bất kể stack lớn nhỏ |
| **ICM** | Independent Chip Model — mô hình toán học định giá chip trong giải đấu |
| **Min-cash** | Vị trí trả thưởng thấp nhất — khoản tối thiểu bạn nhận khi vào tiền |

---

## Checklist cho giải đấu đầu tiên

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:hsl(var(--primary));margin-bottom:14px">Trước khi ra khỏi nhà</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Giấy tờ tùy thân có ảnh còn hiệu lực</strong> — hộ chiếu hoặc giấy phép lái xe. Không có ngoại lệ.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Buy-in + dư thêm 20%</strong> bằng tiền mặt — một số nơi không nhận thẻ</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Thẻ thành viên của phòng poker</strong> nếu được yêu cầu</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>Email xác nhận đăng ký</strong> nếu bạn đã đăng ký trước trực tuyến</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Quần áo thoải mái — giải đấu kéo dài 6–12 giờ. Mang theo áo khoác (phòng bài thường rất lạnh).</span></div>
</div>

<div style="font-size:13px;font-weight:700;color:hsl(var(--primary));margin:16px 0 10px">Tại địa điểm thi đấu</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Đến sớm 30–45 phút trước giờ khởi tranh. Hàng chờ đăng ký có thể rất dài.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Đếm chip khởi điểm trước khi chơi ván đầu tiên. Báo dealer ngay nếu thiếu.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>Xin bảng cấu trúc — biết khi nào ante vào và giờ nghỉ ăn tối là lúc nào.</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(255,150,0,0.12);border:1.5px solid rgba(255,150,0,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#ff9600">!</span><span><strong>Không dùng điện thoại ở bàn khi ván bài đang diễn ra</strong> — hầu hết phòng bài đều phạt lỗi này.</span></div>
</div>
</div>

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-tournament-vs-cash-game | Cash game poker là gì? Cash game vs tournament: người mới nên chơi gì? | /images/tournament-table-action.webp
/vi/blog/holdem-bubble | Bubble trong poker là gì? Cách chơi theo từng cỡ stack: big, medium, short | /images/holdem-bubble-hero.webp
/vi/blog/holdem-icm | ICM poker là gì? Mô hình chip độc lập (Independent Chip Model) và cách tính | /images/holdem-icm-hero.webp
:::

## Câu hỏi thường gặp

**Q. Giải đấu poker kéo dài bao lâu?**

A. Các giải hằng ngày ở phòng bài địa phương thường kéo dài 4–8 giờ. Các sự kiện thuộc chuỗi lớn như WPT championship diễn ra trong 4–6 ngày với nhiều lần đóng túi chip qua ngày — còn WSOP Main Event kéo dài gần hai tuần từ các lượt Day 1 đến bàn chung kết. Khi đăng ký, hãy xin bảng cấu trúc — nó cho bạn biết độ dài dự kiến của ngày thi đấu dựa trên thời lượng level blind và số người tham gia ban đầu.

**Q. PKO và bounty poker khác nhau thế nào?**

A. Trong giải bounty (knockout) thường, mỗi người chơi mang một khoản bounty cố định — loại ai đó là bạn nhận trọn số tiền đó, và bounty không bao giờ thay đổi. Trong PKO (Progressive Knockout), bounty tăng dần: bạn thường nhận một phần bounty của người bị loại bằng tiền mặt, phần còn lại được cộng vào bounty trên đầu bạn. Điều đó khiến chip leader trong PKO trở thành mục tiêu ngày càng đáng giá khi giải tiến xa.

**Q. Rebuy và add-on trong poker là gì, luật thế nào?**

A. Trong giải rebuy, bạn có thể mua lại chip trong một khoảng thời gian định sẵn — ở nhiều giải, bất cứ lúc nào stack của bạn bằng hoặc thấp hơn stack khởi điểm, không cần phải bị loại trước — thường là vài level blind đầu tiên. Add-on là một lần mua chip tùy chọn duy nhất, thường dành cho tất cả mọi người khi hết giai đoạn rebuy, bất kể stack lớn nhỏ. Khi khung giờ đó đóng lại, giải diễn ra như một freezeout. Luật chi tiết khác nhau theo từng nơi, nên hãy xem bảng cấu trúc.

**Q. Ban tổ chức giải đấu thu tiền bằng cách nào?**

A. Nhà tổ chức thu một khoản phí cộng thêm trên mỗi buy-in — phần "+$9" trong một vé "$100+$9". Khoản phí đó (thường khoảng 8–10% ở các giải live lớn, cao hơn ở các giải hằng ngày nhỏ) là doanh thu của nhà tổ chức; phần "$100" đi trọn vào quỹ thưởng mà người chơi tranh nhau. Vậy nên một phòng giải đấu kiếm lời từ số lượt đăng ký và phần phí đi kèm, chứ không phải từ tiền thưởng — tiền thưởng chỉ luân chuyển giữa những người chơi với nhau.

**Q. Buy in poker là gì?**

A. Buy-in là khoản tiền bạn trả khi đăng ký để nhận stack khởi điểm. Nó được chia làm hai phần: với một vé ghi "$100+$9", $100 đi vào quỹ thưởng chia cho toàn bộ người tham gia, còn $9 là phí nhà tổ chức giữ lại — các giải live lớn thường giữ 8–10%, các giải hằng ngày nhỏ có thể lấy nhiều hơn. Stack bạn nhận về không đổi ra tiền được — nó chỉ là mạng sống của bạn trong giải.

**Q. ITM trong poker là gì?**

A. ITM = "In The Money" — vào tiền. Bạn đã trụ tới nhóm thứ hạng chắc chắn có thưởng. Trong một giải 200 người trả thưởng cho 25 vị trí, bạn ITM khi 175 người đã bị loại và chỉ còn 25 người. Min-cash của bạn thường bằng 1,5–2 lần buy-in.

**Q. Có thể tham gia khi giải đấu đã bắt đầu không? (đăng ký muộn)**

A. Có, trong khung late reg — thường là vài level blind đầu, nhiều khi kéo dài hai đến bốn giờ sau giờ khởi tranh. Bạn vẫn nhận đủ stack khởi điểm, nhưng vì blind đã tăng nên bạn ngồi xuống với ít big blind hơn những người vào sớm. Khi late reg đóng, không ai được vào thêm nữa.

**Q. Có thể rời giải đấu sớm và giữ chip không?**

A. Không. Khác với cash game, chip giải đấu không có giá trị tiền mặt và không thể đổi ra tiền giữa chừng. Nếu bạn bỏ đi, chip của bạn vẫn nằm trong cuộc chơi và tiếp tục trả blind, ante cho đến khi hết sạch. Tiền thưởng chính (không tính bounty) chỉ được trả khi bạn kết thúc ở một vị trí có thưởng (ITM); ở thể thức knockout và PKO, bạn còn có thể nhận riêng các khoản bounty.

**Q. Giải đấu poker thiên về may mắn hay kỹ năng?**

A. Cả hai — nhưng kỹ năng quyết định ai thắng về dài hạn. Một giải đấu đơn lẻ mang variance rất lớn: bạn có thể chơi hoàn hảo mà vẫn bị loại khi đôi Át của bạn bị thua ngược, đó là lý do ngay cả các pro hàng đầu cũng có những chuỗi dài không có khoản thưởng lớn nào. Nhưng qua hàng trăm giải, người chơi giỏi hơn vào bàn chung kết nhiều hơn hẳn mức mà xác suất ngẫu nhiên cho phép. Poker là trò chơi kỹ năng bọc trong may mắn ngắn hạn — và giải đấu đơn giản là gói nhiều may mắn hơn cash game.

**Q. GTD trong poker là gì?**

A. GTD (guaranteed — quỹ thưởng đảm bảo) là quỹ thưởng tối thiểu mà giải đấu cam kết trả, kể cả khi số người đăng ký không đủ để gom đủ số tiền đó. Vì là mức tối thiểu, con số GTD trên lịch giải là mức sàn bạn có thể tin, chứ không phải mức trần — nếu phần buy-in đóng vào quỹ thưởng (sau khi trừ phí) vượt qua nó, quỹ thưởng thực tế sẽ lớn hơn.

**Q. MTT poker là gì?**

A. MTT (Multi-Table Tournament — giải nhiều bàn) là giải đấu có số người tham gia lớn, trải trên nhiều bàn cùng lúc, và là thể thức giải đấu phổ biến nhất. Khi người chơi bị loại dần, các bàn được gộp lại cho đến khi chỉ còn một bàn chung kết. Người mới nên bắt đầu với một Freezeout MTT: bạn biết trước mình tốn bao nhiêu, luật đơn giản, và không phải cân nhắc chuyện rebuy.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Phân tích sâu</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cash game poker là gì?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Giá trị chip, blind tăng dần, ICM — thể thức nào hợp với bạn</div>
  </a>
  <a href="/vi/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chiến thuật</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bài khởi đầu nên chơi theo vị trí</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Nên chơi tay bài nào ở các level đầu</div>
  </a>
  <a href="/vi/blog/holdem-short-stack" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Short stack</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Short stack poker là gì?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Push hay fold khi blind siết dần</div>
  </a>
  <a href="/vi/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Bắt đầu từ đây</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Luật Texas Hold'em cho người mới</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Nắm vững nền tảng trước đã</div>
  </a>
  <a href="/vi/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blind</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Blind trong poker là gì? Small blind và big blind</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Level blind bắt đầu từ đây — SB, BB và ante</div>
  </a>
  <a href="/vi/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Vị trí</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Vị trí trong poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao ghế ngồi chi phối mọi quyết định trong giải đấu</div>
  </a>
</div>
`.trim(),
};
