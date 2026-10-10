import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-starting-hands-chart",
  title: "Bài khởi đầu poker: tay bài mạnh nhất và nên chơi gì theo vị trí",
  seoTitle: "Bỏ 80% tay bài được chia? — bài khởi đầu poker mạnh nhất",
  desc: "Phần lớn bài tẩy bạn nhận đều lỗ. Tay bài khởi đầu mạnh nhất trong poker, nên chơi bài gì theo vị trí và bàn 6-max, GTO so với cách người mới — 10 phút.",
  tldr: "Trong 169 loại bài khởi đầu, chỉ một lát mỏng ở trên cùng — khoảng 15–20% số tay bài bạn được chia — là có lời với người mới. Đôi lớn (AA–TT) và AK raise từ mọi ghế; bạn hành động càng muộn thì mở càng rộng — từ khoảng 13% ở under the gun đến khoảng 43% ở button (bàn 6-max còn rộng hơn). Hãy bắt đầu với một bảng rút gọn, rồi thêm bảng GTO preflop khi raise-hay-fold đã thành phản xạ.",
  category: "strategy",
  date: "2026-10-10",
  updated: "2026-10-10",
  masterUpdated: "2026-10-01",
  keepImagesInBody: true,
  readTime: "10 phút",
  emoji: "🂡",
  image: "/images/holdem-starting-hands-chart-hero.webp",
  imageAlt: "Sơ đồ bài khởi đầu Texas Hold'em với nhóm Premium (AA KK QQ JJ AK), Mạnh (TT 99 AQ KQ) và Fold theo vị trí từ UTG đến button",
  tags: ["best starting hands poker", "poker starting hands", "starting hands poker", "bài khởi đầu poker", "tay bài khởi đầu", "bài khởi đầu mạnh nhất", "starting hands poker ranked", "nên chơi bài gì theo vị trí"],
  content: `
Buổi chơi live đầu tiên, tôi nhận A♣ 4♦ và nghĩ "có Át, tệ đến đâu được chứ?"

Tôi call (theo) một cú raise (tố), trượt flop, call tiếp, trượt turn. Đến river tôi đã mất 40 big blind (mù lớn) mà trong tay chẳng có gì.

Đây là phép toán khó chịu đứng sau ván bài đó: ==Texas Hold'em có 169 loại bài khởi đầu khác nhau — và khoảng 80% số tay bài bạn được chia nên fold (bỏ bài) ngay preflop.== Học xem tay bài nào nên chơi — và từ ghế nào — là bước tiến lớn nhất người mới đạt được trong tháng đầu tiên. Chọn bài khởi đầu là quyết định thứ hai trong [5 quyết định](/vi/blog/holdem-strategy) đứng sau mọi ván bài thắng: làm đúng và mọi vòng cược sau đó đều dễ hơn.

Trang này là phiên bản trọn gói: 10 tay bài khởi đầu mạnh nhất, điều gì khiến một tay bài *tốt* ngay từ đầu, nên chơi bài gì theo vị trí (9-max và 6-max), bảng GTO preflop so với bảng cho người mới, một tài liệu PDF in được, và một quiz nhanh để tự kiểm tra.

---

### Bài khởi đầu qua những con số

:::stripe
169 | Loại bài khởi đầu khác nhau (1.326 tổ hợp chính xác)
~80% | Tay bài người mới nên fold preflop
~13% → ~43% | Range open từ UTG ra đến button (9-max)
~85% | Tần suất AA thắng một tay bài ngẫu nhiên
:::

---

## 10 tay bài khởi đầu mạnh nhất trong poker được xếp hạng thế nào?

Đây là những tay bài khởi đầu mạnh nhất trong poker — những tay bài bạn gần như luôn nên raise preflop, từ bất kỳ ghế nào ở bàn. Năm vị trí đầu là đôi tẩy từ AA xuống TT, kế đến là AK đồng chất, rồi AK lệch chất, AQ đồng chất, KQ và AJ đồng chất — mỗi tay bài có một lý do riêng để đứng ở hạng đó:

| Hạng | Tay bài | Vì sao mạnh |
|-----:|------|-----------------|
| 1 | AA | Tay bài preflop mạnh nhất — ~85% cửa trên trước một tay bài ngẫu nhiên |
| 2 | KK | Chỉ thua AA preflop — vẫn raise và re-raise |
| 3 | QQ | Mạnh, nhưng đánh giá lại khi A hoặc K xuất hiện ở flop |
| 4 | JJ | Premium — raise mạnh, chậm lại trước diễn biến cược nặng trên flop có A/K/Q |
| 5 | TT | Top 5 — raise khi vào pot đầu tiên, thận trọng trước 3-bet lớn |
| 6 | AKs | Át-K đồng chất — áp đảo các bài lớn khác, tạo nut flush draw |
| 7 | AKo | AK lệch chất — raise từ mọi vị trí |
| 8 | AQs | AQ đồng chất — mạnh, nhưng fold trước 3-bet lớn khi không có vị trí |
| 9 | KQs | KQ đồng chất — tốt ở vị trí muộn, khó xử hơn từ UTG |
| 10 | AJs | AJ đồng chất — mạnh khi có vị trí, fold trước kháng cự nặng |

![Bốn tay bài khởi đầu premium của Texas Hold'em — đôi Át, đôi K, đôi Q và Át-K đồng chất — sáng vàng trên nỉ xanh đậm](/images/holdem-starting-hands-premium.webp "Nhóm premium — những tay bài bạn có thể raise từ mọi vị trí")

==g:Với tay bài 1–5 (các đôi tẩy), gần như luôn raise và thường re-raise preflop để xây pot.== Với AK và AQ, mục tiêu là đưa ván về heads-up, nơi bài lớn của bạn có equity (phần pot kỳ vọng của bạn, tính cả khi chia pot) tối đa. Những con số đáng nhớ: ==AK hầu như không bao giờ là cửa trên trước một đôi tẩy, nhưng trước 22–QQ nó không bao giờ bị bỏ xa== — cú "race" kinh điển. AK lệch chất có khoảng 46–47% trước 22–44, khoảng 45% trước 55–99, và khoảng 43% trước TT–QQ; AK đồng chất cộng thêm khoảng 2,5–3 điểm vào mỗi mốc (AKs trước 22, ở khoảng 50%, là thứ gần nhất với một cú tung đồng xu thật sự). Trước KK và AA khoảng cách rộng hơn nhiều — nhưng trước mọi đôi thấp hơn chúng, raise và re-raise với AK vẫn đúng.

Pocket rockets, cowboys, big slick — nếu tiếng lóng ở bàn còn lạ với bạn, bài [giải thích từ vựng ở bàn poker](/vi/blog/holdem-glossary) có đủ mọi biệt danh tay bài. Và nếu bạn còn mơ hồ về thứ gì thắng thứ gì khi board đã mở, hãy xem lại [thứ hạng tay bài poker](/vi/blog/holdem-hand-rankings) trước.

---

## Thế nào là một tay bài khởi đầu tốt trong poker?

Những tay bài khởi đầu tốt trong poker có chung một đặc điểm: ==chúng tạo ra tay bài *5 lá* mạnh thường xuyên hơn những tay bài chúng đụng phải.== Đôi cao xuất phát ở phía trước. Bài lớn đồng chất tạo top pair (đôi cao nhất) với kicker (lá phụ) tốt nhất, thùng (flush) nut và sảnh (straight) cao. Mọi thứ khác đều cần trợ giúp — và tay bài cần trợ giúp chỉ đáng chơi khi sự trợ giúp đó rẻ.

Xếp theo nhóm, tay bài khởi đầu tốt trong poker trông thế này:

| Nhóm | Ví dụ | Cách chơi |
|------|----------|----------------|
| Premium | AA, KK, QQ, JJ, AKs, AKo | Raise từ mọi vị trí, re-raise quyết liệt |
| Mạnh | TT–88, AQ, AJs, ATs, KQs | Raise từ phần lớn vị trí, chậm lại trước 3-bet nặng |
| Đầu cơ | Đôi nhỏ (77–22), suited connector (JTs, T9s, 98s), Át đồng chất (A2s–A9s) | Chủ yếu vị trí muộn — chúng cần flop rẻ và vị trí (range UTG đầy đủ vẫn giữ 77) |
| ==r:Rác== | Át lệch chất yếu (A4o), K kèm rác (K3o), bài lệch chất thấp | ==r:Fold preflop — những tay này tốn chip mỗi buổi chơi== |

:::tip[Nhóm chỉ là một nửa câu trả lời. Một tay bài đầu cơ là "tốt" ở button và tệ ở under the gun — đó là lý do bảng thật sự được sắp theo vị trí, không phải theo tay bài.]:::

---

## Nên chơi bài gì theo vị trí ở bàn 9 người?

==Vị trí của bạn ở bàn thay đổi tay bài nào có lời.==

Từ vị trí sớm, còn nhiều người hành động sau bạn — nên bạn cần bài mạnh hơn. Từ button, bạn hành động cuối ở mọi vòng cược postflop, nghĩa là bạn có thể chơi một range rộng hơn nhiều mà vẫn có lời.

Đây là range mở bài khởi đầu cho một bàn 9-max tiêu chuẩn:

| Vị trí | Range open | Tay bài chủ chốt nên chơi |
|----------|-----------|-------------------|
| UTG (Sớm) | Top ~13% | TT+, AJs+, AKo, KQs |
| MP (Giữa) | Top ~17% | Thêm 88, 99, ATs, KJs, QJs, JTs |
| CO (Cutoff) | Top ~27% | Thêm 55–77, A9s+, KTs+, suited connector (T9s, 98s) |
| BTN (Button) | Top ~43% | Thêm 22–44, A2s+, broadway đồng chất, bài lệch chất yếu hơn |

Quy tắc: ==bạn hành động càng muộn, càng nhiều tay bài có thể open có lời==. Vì button luôn hành động cuối postflop, đó là ghế giá trị nhất trong poker.

Hai điều bảng đó **không** nói. Phần trăm là tỷ lệ trên tổng 1.326 tổ hợp bài khởi đầu, nên ~13% là khoảng 172 tổ hợp — đó là độ rộng một reg vững open ở under the gun, không phải độ rộng trang này yêu cầu người mới open. Và các tay bài bên cạnh mỗi ghế là **lõi**: hàng UTG ở trên là 58 tổ hợp, và mỗi hàng dưới chỉ liệt kê thứ ghế đó thêm vào. Các phần tiếp theo nới rộng lõi khi bạn tiến bộ; đoạn cuối lên tới đủ ~13% thuộc về bảng GTO ở phía dưới.

Xem range open nới rộng theo từng ghế — UTG, MP, CO và BTN (lưới 13×13 đầy đủ của cả 169 tay bài nằm trong công cụ liên kết bên dưới):

:::rangechart:::

Muốn một công cụ độc lập với range mở rộng cho từng ghế? Dùng [bảng bài khởi đầu theo vị trí](/vi/hand-chart). Để hiểu từng tên ghế (UTG, HJ, CO, BTN, SB, BB), xem [bài về các vị trí trong poker](/vi/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp").

### Vị trí sớm (UTG): range chặt nhất

UTG là ghế khó chơi nhất. ==r:Tám người vẫn còn hành động sau bạn.== Bất kỳ tay bài nào bạn open ở đây đều phải đứng vững trước những range mạnh.

Lõi của range UTG (một range ~13% đầy đủ nới ra tới các đôi trung như 77–99, thêm broadway đồng chất và vài tay lệch chất như AQo khi bạn tiến bộ):

- Đôi tẩy: **TT, JJ, QQ, KK, AA**
- Đồng chất premium: **AKs, AQs, AJs, KQs**
- Lệch chất premium: **AKo** (và đôi khi AQo)

Những tay bài trông mạnh nhưng là fold hoặc ở rìa từ UTG:

- **KJo, QJo, KTo** — quá nhiều tình huống bị áp đảo trước những người call cú open từ UTG
- **77, 88** — ổn từ button; từ UTG chúng nằm ở rìa ngoài của range ~13% đầy đủ ở trên, nên là những đôi đầu tiên bị bỏ khi bàn khó (các tay lệch chất bị áp đảo vừa liệt kê bị bỏ trước chúng)
- **Át đồng chất yếu (A2s–A7s)** — để dành cho vị trí muộn

### Vị trí muộn (cutoff và button): range rộng nhất

Button là ghế tốt nhất trong poker. ==g:Bạn hành động cuối ở flop, turn và river trong mọi ván.== Lợi thế đó cho phép bạn thêm vào một cách có lời:

- **Đôi tẩy nhỏ (22–66)** — hy vọng flop ra set (cầm đôi trên tay + 1 lá trên board)
- **Bất kỳ Át đồng chất nào (A2s–A9s)** — tiềm năng nut flush draw
- **Suited connector (hai lá bài liên tiếp cùng chất: T9s, 98s, 87s)** — tay bài rẻ, implied odds (tỷ lệ cược ngầm) cao
- **Broadway lệch chất yếu hơn (KTo, QJo)** — chỉ ở vị trí muộn, không bao giờ ở ghế sớm

Quy tắc then chốt: ==là bài open, những tay bài đầu cơ này cần vị trí để có lời==. Và nếu một người ở UTG raise trước bạn, phần lớn chúng đi thẳng vào đống bài bỏ — bạn sẽ phải trả giá một cú raise để chơi tay bài đầu cơ trước một range mạnh, và flop rẻ chúng cần đã biến mất.

---

## Bàn 6-max thì bài khởi đầu khác gì?

Phần lớn cash game online là 6-max, và bảng dịch chuyển theo một hướng: ==rộng hơn==. Bỏ ba ghế chặt nhất khỏi bàn 9-max và ghế đầu tiên mới thực chất "tiến lên" — các ghế muộn giữ nguyên số người phía sau, nhưng cả bàn chơi rộng hơn. Người hành động đầu tiên ở 6-max open vào năm đối thủ, không phải tám — nên ==g:UTG ở 6-max chơi gần như MP ở 9-max== (~15–17% thay vì ~13%).

:::compare
9-Max (Full Ring) | 6-Max
9 ghế — ba vị trí sớm trước MP | 6 ghế — UTG ở đây thực chất là lojack
Ghế đầu tiên open ~13% tay bài | Ghế đầu tiên open ~15–17% tay bài
Blind quay về mỗi 9 ván — fold rất rẻ | Blind quay về nhanh gấp 1,5 lần — fold mọi thứ là rỉ chip
AJo, KQo = fold từ ghế đầu tiên | AJo, KQo = open tiêu chuẩn từ ghế đầu tiên
Bài đầu cơ chủ yếu chỉ CO/BTN | Bài đầu cơ chơi được sớm hơn một ghế
:::

Sai lầm cần tránh là dùng bảng 9-max ở bàn 6-max: bạn sẽ fold những tay bài rõ ràng có lời và bị blind (mù — cược bắt buộc) ăn mòn. Sai lầm ngược lại — range 6-max ở bàn full ring — là cách những lá Át yếu bị áp đảo suốt cả đêm. Khi bảng đã thành phản xạ, [chơi theo vị trí](/vi/blog/holdem-position-play) là kỹ năng biến những range rộng hơn ấy thành lợi nhuận thật: steal, cô lập và gây sức ép lên hai blind từ những ghế cho phép.

---

## Nên chơi bao nhiêu phần trăm tay bài khởi đầu?

Tính trên cả buổi chơi, ==mục tiêu hợp lý cho người mới là chơi khoảng 15–20% số tay bài được chia== — nghĩa là fold 80–85% preflop. Đó không phải một con số phẳng: các số theo ghế ở trên — ~13% từ UTG, ~17% từ MP, ~27% từ cutoff, ~43% từ button — là độ rộng bạn *open một pot chưa ai mở*. Trung bình cả buổi của bạn thấp hơn trung bình thô của những con số đó, vì bạn thường gặp một cú raise (khi đó bạn tiếp tục với ít tay bài hơn hẳn) và bạn ngồi nhiều vòng bàn ở ghế sớm và blind.

:::stat[15–20%] số tay bài được chia — một range lành mạnh cho người mới ở 9-max:::

Nếu bạn chơi 30–40% tay bài ở bàn full ring, bạn không "xem nhiều flop hơn" — bạn đang trả rake (phí sòng) và reverse implied odds cho những tay bài mà bảng đã bảo bạn fold. Hãy theo dõi trung thực trong một buổi; con số thường cao hơn cảm giác.

Một ghi chú về giới hạn của bài: đây là về bao nhiêu phần trăm *range* nên chơi, không phải tay bài cụ thể thắng nhau thường xuyên ra sao. Về tỷ lệ thắng tay bài đấu tay bài (AK vs QQ, đôi vs hai lá cao hơn, và phần còn lại), xem [bài xác suất poker](/vi/blog/holdem-probability) — đó là việc của bài ấy, không phải của trang này.

---

## Bảng GTO preflop hay bảng cho người mới — nên dùng cái nào?

Tôi luôn mở sẵn kết quả solver khi học, và tôi vẫn đưa cho mọi người mới một bảng rút gọn trước. Đây là hai công cụ khác nhau, và biết dùng cái nào đáng giá hơn bản thân từng bảng.

**Bảng GTO preflop** đến từ solver (PioSOLVER, GTO Wizard và các phần mềm tương tự). Chúng được xây để gần với mức không thể bị khai thác nhất có thể — và chúng đầy những tần suất trộn: open tay bài này 25% số lần, fold 75%, 3-bet (re-raise, tố lại) tổ hợp này nhưng chỉ với những chất này. **Bảng cho người mới** — như bảng trên trang này — nén tất cả điều đó thành một hành động rõ ràng cho mỗi tay bài.

:::compare
Bảng GTO preflop | Bảng rút gọn cho người mới
Tần suất trộn — raise 25% / fold 75% số lần | Một hành động rõ ràng cho mỗi tay bài — raise hoặc fold
Giả định đối thủ cũng chơi gần hoàn hảo | Giả định đối thủ mắc sai lầm (và họ mắc thật)
Xây cho một độ sâu stack, rake và định dạng cụ thể | Bền vững ở các bàn live và mức cược thấp thông thường
Phù hợp nhất với: reg online, buổi học, xem lại range | Phù hợp nhất với: năm đầu tiên, bàn live, xây kỷ luật
Dùng sai = những quyết định ngẫu nhiên bạn không giải thích được | Hơi "quá chặt" — khuyết điểm rẻ nhất trong poker
:::

Đây là lý do học thuộc bảng solver một cách mù quáng phản tác dụng: tần suất GTO là phòng thủ trước đối thủ hoàn hảo. Đối thủ của bạn ở mức cược thấp call quá nhiều, hiếm khi fold, và không bao giờ 3-bet nhẹ — trước họ, những cú bluff cân bằng cẩn thận của solver kiếm *ít* tiền hơn việc đơn giản raise bài tốt và fold bài rác. Bạn rơi vào những nước đi tần suất trộn mình không giải thích nổi, ở những bàn mà nước đi đơn giản kiếm được nhiều hơn. ==g:Học bảng rút gọn cho đến khi raise-hay-fold thành phản xạ; thêm bảng GTO preflop khi bạn chuyển lên online hoặc bắt đầu học nghiêm túc.== Cây cầu nối hai thứ là hiểu [equity trong poker](/vi/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp") — phép toán phần thắng mà EV của solver được xây lên.

---

## Tay bài khởi đầu tệ nhất nào trông có vẻ chơi được?

Những tay bài khởi đầu tệ nhất trong poker không phải rác ngẫu nhiên như 7-2 — chẳng ai cần bảng để fold nó. Những tay đắt đỏ là những tay *trông* chơi được và đều đặn mất chip qua các buổi chơi:

| Loại tay bài | Vì sao thua | Người mới nghĩ gì |
|-----------|-------------|---------------------|
| ==r:Át yếu (A2o–A8o)== | Cùng đôi Át nhưng thua kicker trước những lá Át tốt hơn | "Tôi có Át, chắc phải tốt" |
| Connector lệch chất thấp (76o, 65o) | Hiếm khi trúng gọn, khó chơi khi trúng | "Nó có thể thành sảnh" |
| K kèm rác lệch chất (K3o, K4o) | Bị áp đảo bởi mọi lá K tốt hơn | "K là lá bài lớn" |
| Bất kỳ hai lá đồng chất nào | Thành thùng đến river chỉ ~6,4% số lần (flop ra thùng ~0,8%) | "Nhưng chúng cùng chất mà" |

![Bẫy Át yếu trong Texas Hold'em — A♣ 4♦ viền đỏ là tay bài thua, bị A♠ K♦ màu vàng áp đảo](/images/holdem-starting-hands-weak-ace-trap.webp "Át yếu trông mạnh nhưng luôn bị áp đảo — fold chúng preflop")

==r:Sai lầm đắt giá nhất người mới mắc phải là call cú raise với Át yếu== như A♣ 4♦ ở phần mở đầu. Khi cuối cùng bạn trúng đôi Át, bạn thường đứng thứ nhì sau A♠ K♦ hoặc A♥ Q♦ — và bạn thua một pot lớn trong khi đinh ninh mình có top pair. Bạn có thật. Họ cũng có, với kicker tốt hơn.

(Còn tay bài thường được gọi là tệ nhất trong poker? 7-2 lệch chất, dù theo equity thô trước một tay bài ngẫu nhiên thì 3-2 lệch chất yếu hơn một chút, khoảng 32% so với 35%. Thêm về 7-2, và "quy tắc 7-2" nổi tiếng, trong phần câu hỏi thường gặp bên dưới.)

---

## Tải tài liệu PDF bài khởi đầu in được (tiếng Anh) ở đâu?

Bảng chỉ hữu ích khi nó ở ngay trước mặt bạn lúc cần. Cho các ván chơi tại gia và buổi học, chúng tôi đã làm toàn bộ thành bản in được:

**[Tải tài liệu PDF bài khởi đầu poker miễn phí (tiếng Anh)](/downloads/poker-starting-hands-chart.pdf)** — một trang: range open 9-max theo vị trí cộng với điều chỉnh 6-max một dòng, dạng cheat sheet. In ra, hoặc mở sẵn trên điện thoại giữa các ván.

Rồi dùng nó theo đúng nghĩa đen, mỗi ván, trong 20+ buổi chơi đầu tiên:

:::steps
Kiểm tra vị trí trước | Trước cả khi nhìn bài, ghi nhận bạn ngồi đâu so với button
Đối chiếu bài tẩy với bảng | Tìm tay bài của bạn trong range cho vị trí đó
Raise hoặc fold | Tránh call ([limp](/vi/blog/holdem-limping)) như một hành động mặc định
Fold mọi thứ khác | Kể cả khi cảm giác quá chặt — nhất là khi đó
:::

==g:Nó nhàm chán. Đó chính là mục đích.== Chọn bài preflop theo lối tight-aggressive là nền móng của mọi lối chơi poker thắng, từ cash game cho người mới đến giải đấu mức cược cao.

---

## Thử sức với quiz preflop: bạn raise hay bỏ bài?

Ba tình huống từ bảng. Quyết định trước khi xem đáp án:

**1. 9-max, bạn ở UTG với A♠ J♦ (lệch chất).** Raise hay fold?
→ ==r:Fold.== AJo không lọt vào range UTG — nó bị áp đảo quá thường xuyên bởi những tay bài call cú open từ UTG. AJ *đồng chất* thì open; AJo chờ một ghế muộn hơn.

**2. Button, mọi người fold tới bạn, 7♠ 6♠.** Raise hay fold?
→ ==g:Raise.== Suited connector nằm gọn trong range button ~43% — đây chính xác là ghế chúng có lời.

**3. 6-max, cutoff raise, bạn ở button với A♦ 4♣.** Call, raise hay fold?
→ ==r:Fold.== Một lá Át lệch chất yếu trước một cú raise chính là ván bài mở đầu lặp lại — bị áp đảo khi trúng, vô giá trị khi trượt.

:::quiz:::

Đúng cả ba? Thử [quiz 10 câu về tay bài poker (tiếng Anh)](/en/quiz) — chọn 5 lá tốt nhất từ 7 lá, tính giờ.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-hand-rankings | Thứ hạng tay bài poker | /images/holdem-hand-rankings-hero.webp
/vi/blog/holdem-probability | Xác suất và tỷ lệ cược trong poker | /images/holdem-probability-hero.webp
:::

## Câu hỏi thường gặp

**Q. Tay bài khởi đầu mạnh nhất trong poker là gì?**

A. Đôi Át (AA) là tay bài khởi đầu mạnh nhất trong poker. Preflop, đôi Át thắng khoảng 85% số lần trước một tay bài ngẫu nhiên. Mặc định, hãy raise và re-raise với đôi Át — mục tiêu là xây một pot lớn khi bạn là cửa trên theo thống kê.

**Q. Những tay bài khởi đầu nào được xem là tốt trong poker?**

A. Tay bài khởi đầu tốt trong poker là các đôi premium (AA–TT), Át lớn (AK, AQ) và broadway đồng chất mạnh (KQs, AJs) — lõi của khoảng 15–20% số tay bài được chia mà một người mới vững chơi (riêng các nhóm premium này chỉ chiếm khoảng 5% tổng số bài khởi đầu). Tay bài đầu cơ như đôi nhỏ và suited connector chơi tốt nhất từ vị trí muộn.

**Q. Poker có bao nhiêu tay bài khởi đầu?**

A. Có 169 loại bài khởi đầu khác nhau (13 đôi, 78 đồng chất, 78 lệch chất) trong tổng số 1.326 tổ hợp hai lá chính xác. Phép toán đứng sau những con số đó nằm trong [bài xác suất poker](/vi/blog/holdem-probability).

**Q. Quy tắc 7-2 trong poker là gì?**

A. Quy tắc 7-2 là một trò chơi phụ của bàn, không phải luật poker chính thức: nếu một người thắng pot với 7-2 lệch chất — tay bài mà phần lớn người chơi gọi là tệ nhất — mọi người chơi khác trả cho họ một khoản thưởng nhỏ. Nó tồn tại thuần túy để làm các ván chơi tại gia và ở quán thêm vui bằng cách thưởng cho một cú bluff táo tợn.

**Q. Tay bài khởi đầu tệ nhất trong poker là gì?**

A. 7-2 lệch chất được nhiều người xem là tay bài khởi đầu tệ nhất trong poker. Hai lá quá xa nhau để cùng tạo sảnh, quá thấp để thắng thường xuyên nếu không cải thiện, và ngay cả khi trúng đôi bạn vẫn có một tay bài yếu với kicker tệ.

**Q. Người mới có nên dùng bảng GTO preflop không?**

A. Lúc đầu thì không. Bảng GTO preflop dùng tần suất trộn được thiết kế để khó bị khai thác ngay cả trước đối thủ mạnh — quá mức cần thiết ở bàn cho người mới, nơi một bảng raise-hay-fold rút gọn kiếm nhiều hơn. Học bảng đơn giản cho đến khi thành phản xạ, rồi thêm bảng GTO khi bạn học nghiêm túc hoặc lên mức cược cao hơn online.

**Q. Bài đồng chất (suited) có thực sự quan trọng không?**

A. Đồng chất cộng thêm khoảng 2 điểm phần trăm equity so với cùng tay bài lệch chất (AKs là 67% trước một tay bài ngẫu nhiên; AKo, 65%) — đáng kể, nhưng không phải lý do để chơi một tay bài tệ. Hai lá đồng chất thành thùng đến river chỉ ~6,4% số lần (và một flush draw ở flop hoàn thành khoảng 35% số lần đến river). Rác đồng chất vẫn là rác.

**Q. Có nên luôn bỏ đôi nhỏ như 22 hay 33 không?**

A. Không luôn luôn — vị trí quyết định. Từ cutoff hoặc button, đôi nhỏ đáng chơi để "set mining": bạn flop ra set hoặc tốt hơn khoảng 11,8% số lần (xấp xỉ 1 trong 8,5). Từ vị trí sớm chúng khó chơi có lời và thường là fold.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Kiến thức nền tảng</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thứ hạng tay bài poker — từ mạnh nhất đến yếu nhất</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Giải thích cả 10 tay bài kèm xác suất và ví dụ</div>
  </a>
  <a href="/vi/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Vị trí</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Các vị trí trong poker: từ UTG đến button</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao vị trí thay đổi tay bài nào nên chơi</div>
  </a>
  <a href="/vi/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thứ hạng tay bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Kicker và so bài cùng hạng trong poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Cùng đôi nhưng kết quả khác — kicker quyết định</div>
  </a>
</div>
`.trim(),
};

export default POST;
