import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-betting-actions",
  title: "Các hành động cược trong Texas Hold'em: Check, Theo, Tố, Bỏ Bài",
  seoTitle: "Check, theo hay bỏ bài? — Các hành động cược trong poker",
  desc: "Đến lượt bạn mà đầu óc trống rỗng? Tìm hiểu check, theo (call), tố (raise) và bỏ bài (fold) là gì, luật tố tối thiểu và bạn được tố lại bao nhiêu lần.",
  tldr: "Texas Hold'em có 5 hành động cược: check (nhường lượt miễn phí), cược (mở vòng cược), theo (call — trả đúng mức cược), tố (raise — mức tố tối thiểu bằng khoản cược hoặc khoản tố trước đó) và bỏ bài (fold). Bạn chỉ được check khi chưa có ai cược trong vòng đó.",
  category: "rules",
  date: "2026-06-14",
  updated: "2026-07-13",
  masterUpdated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "9 phút",
  emoji: "🃏",
  tags: [
    "các hành động cược trong poker",
    "check trong poker là gì",
    "call trong poker là gì",
    "luật tố tối thiểu poker",
    "được tố bao nhiêu lần trong poker",
    "check raise poker",
    "string bet",
  ],
  image: "/images/holdem-betting-actions-hero.webp",
  imageAlt: "Bàn Texas Hold'em với các chồng chip CHECK, CALL, RAISE, FOLD — một người chơi cầm bài tẩy trong lúc cân nhắc hành động",
  content: `
Buổi chơi live đầu tiên của tôi, người chia bài nói "đến lượt anh" và tôi đứng hình — im lặng mất mấy giây trong khi cả bàn nhìn chằm chằm.

Check? Theo? Tố? Tôi thuộc lòng thứ hạng bài. Nhưng thứ tôi thật sự không nắm là ==luật của chính các hành động cược== — và đó chính là lỗ hổng mà bài viết này lấp đầy.

Texas Hold'em chỉ có ==5 hành động cược==, nhưng những luật xoay quanh chúng (khi nào được check, tố tối thiểu phải là bao nhiêu, được tố lại bao nhiêu lần) khiến người mới loay hoay hàng tuần liền. Nếu bạn hoàn toàn mới, hãy đọc lướt [hướng dẫn luật chơi Texas Hold'em đầy đủ](/vi/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") trước — rồi quay lại đây để nắm cuốn luật cho từng hành động một.

---

### Tóm tắt nhanh

:::stripe
5 | hành động cược: check, cược, theo, tố, bỏ bài
1 BB | mức cược mở tối thiểu trong No-Limit Hold'em
= khoản tố trước | mức tố lại tối thiểu (luật mức tăng)
Không giới hạn | số lần tố lại trong No-Limit — bạn có thể tố đến khi ai đó all-in
:::

## 5 hành động cược trong Texas Hold'em là gì?

Mọi quyết định bạn đưa ra trên bàn poker đều là một trong năm hành động này:

| Hành động | Khi nào được dùng | Tốn chip |
|--------|---------------|-----------|
| Bỏ bài (fold) | Bất cứ lúc nào đến lượt bạn | Miễn phí — nhưng bạn mất số chip đã bỏ vào pot |
| Check | Chỉ khi chưa có ai cược trong vòng này | Miễn phí — bạn nhường lượt mà không thêm chip |
| Theo (call) | Sau khi có người đã cược hoặc tố | Bạn trả đúng bằng mức cược hiện tại |
| Cược (bet) | Khoản cược đầu tiên của vòng | Số tiền bạn chọn (tối thiểu = 1 mù lớn) |
| Tố (raise) | Sau khi có người đã cược | Cộng thêm ít nhất bằng khoản cược hoặc khoản tố trước đó |

==All-in== không phải là hành động thứ sáu riêng biệt — đó chỉ là một khoản cược, theo hoặc tố bằng toàn bộ số chip bạn còn lại. Chi tiết ở phần dưới.

Luật quan trọng nhất mà người mới hay bỏ sót: ==r:bạn không thể check một khi đã có người cược==. Khoảnh khắc chip được đẩy vào, lựa chọn của bạn thu hẹp còn bỏ bài, theo hoặc tố.

---

## Check trong poker là gì?

Check nghĩa là: ==g:"Tôi nhường lượt — không cược, nhưng vẫn ở lại ván bài."==

Nó không tốn gì cả. Ở poker live, bạn ra hiệu bằng cách gõ nhẹ lên bàn hoặc nói "check". Lượt hành động chuyển sang người chơi bên trái bạn. Nếu tất cả cùng check, lá bài chung tiếp theo được chia — hoặc ở vòng river thì đi thẳng tới lật bài (showdown).

Check không phải là đầu hàng. Bạn vẫn giữ bài, vẫn giữ mọi lựa chọn, và chưa phải trả một đồng nào để xem điều gì xảy ra tiếp theo.

---

## Khi nào bạn được check trong poker?

Bạn chỉ được check trong đúng hai tình huống:

- **Chưa có ai cược** trong vòng hiện tại (flop, turn hoặc river)
- **Bạn là mù lớn (BB) ở pre-flop và không ai tố** — khoản mù của bạn đã được tính là một khoản cược sống, nên bạn có thể check và xem flop miễn phí

Nếu có người cược sau khi bạn check, bạn đối mặt với một quyết định mới: bỏ bài, theo hoặc tố. Check trước rồi tố khi đối thủ cược được gọi là ==check-raise== — hoàn toàn hợp lệ trong Texas Hold'em và là một vũ khí tiêu chuẩn, không phải chiêu trò gian lận.

Để xem bức tranh đầy đủ ai hành động khi nào qua từng vòng, hãy đọc [trình tự chơi Texas Hold'em](/vi/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp").

---

## Call (theo) trong poker là gì? Check vs call

Theo (call) nghĩa là bạn ==trả đúng bằng mức cược hiện tại== để ở lại ván bài. Ai đó cược $10, bạn theo $10 — không hơn, không kém.

Check vs call là nhầm lẫn phổ biến nhất của người mới, nên đây là cách phân biệt gọn gàng:

| | Check | Theo (call) |
|-|-------|------|
| Khi nào tồn tại | Chưa ai cược trong vòng này | Đã có người cược trước bạn |
| Tốn chip | Miễn phí | Bạn trả bằng mức cược hiện tại |
| Ý nghĩa | "Tôi nhường lượt, vẫn ở lại" | "Tôi trả tiền để đi tiếp" |

Ví dụ thực tế: bạn ở flop với K♠ 8♦. Chưa ai cược, nên bạn ==check==. Người chơi kế tiếp cược $10. Giờ lựa chọn của bạn là ==theo== $10, ==tố== (lên $20 trở lên) hoặc ==bỏ bài==. Check đã biến mất — cánh cửa đó khép lại ngay khi khoản cược được đưa vào.

---

## Fold (bỏ bài) trong poker là gì — bạn có thể bỏ bài bất cứ lúc nào không?

Bỏ bài (fold) nghĩa là bạn úp bài xuống và rời khỏi ván. Bạn không phải trả thêm gì, nhưng ==r:mọi chip bạn đã bỏ vào sẽ ở lại trong pot==.

Có — bạn có thể bỏ bài bất cứ lúc nào đến lượt mình, kể cả trước khi cược gì, và kể cả khi check đang miễn phí. Nhưng hãy để ý cái bẫy ở vế cuối: **bỏ bài khi bạn có thể check miễn phí là vứt đi một ván bài vô cớ**. Nếu chưa ai cược, cứ check.

Một quy tắc ứng xử ở bàn live: đừng bỏ bài ==trước lượt==. Hãy đợi đến khi lượt hành động tới bạn — bỏ bài sớm sẽ để lộ thông tin cho những người chơi còn đang cân nhắc, và hầu hết các phòng bài sẽ nhắc nhở hoặc phạt. Biết *khi nào* bỏ bài mới là nước đi đúng lại là một kỹ năng riêng — chủ đề đó được bàn trong bài khi nào nên bỏ bài trong poker.

---

## Min-raise là gì? Luật cược và tố trong Texas Hold'em

![Infographic minh họa luật min-raise trong poker: khoản cược $6 buộc mức tố tối thiểu lên $12, và khoản tố pre-flop lên $6 buộc mức tố lại tối thiểu lên $10](/images/holdem-betting-actions-min-raise.webp "Luật min-raise — mỗi lần tố phải cộng thêm ít nhất bằng khoản cược hoặc khoản tố gần nhất")

Trong No-Limit Hold'em (định dạng bạn sẽ chơi gần như mọi lúc):

- **Cược tối thiểu**: 1 mù lớn (BB)
- **Tố tối thiểu (min-raise)**: cộng thêm ít nhất ==bằng khoản cược hoặc khoản tố trước đó==
- **Tối đa**: toàn bộ stack của bạn — đó chính là chữ "no limit"

Hai ví dụ tính sẵn:

| Vòng | Diễn biến | Tố tối thiểu |
|--------|--------------|---------------|
| Flop | Một người cược $6 | Thêm $6 → tổng $12 |
| Pre-flop (mù $1/$2) | Một người tố lên $6 (tăng $4 so với mù lớn $2) | Thêm $4 → tổng $10 |

Điểm mấu chốt: min-raise bằng ==mức tăng== của khoản cược hoặc khoản tố gần nhất, chứ không phải bằng mù lớn. Ở pre-flop, mù lớn được tính là khoản cược mở, vì thế mức tố mở nhỏ nhất là lên 2 mù lớn.

Hai luật poker live đi kèm với việc tố:

1. **Hô "raise" trước khi đẩy chip.** Nói "call" rồi mới đẩy thêm chip? Phần thêm đó là ==string bet== và dealer ở hầu hết các phòng bài sẽ xử là một lệnh theo.
2. **Một động tác duy nhất.** Nếu không hô, chip của bạn phải được đẩy vào trong một động tác tiến duy nhất.

Nên tố *bao nhiêu* (mở 2,5x, 3-bet 3x, chọn cỡ cược theo cấu trúc bài chung) là chuyện chiến thuật, không phải luật — phần đó thuộc về trụ cột chiến thuật Texas Hold'em.

---

## Được tố bao nhiêu lần trong poker?

Trong **No-Limit Hold'em: không có giới hạn**. Bạn có thể tố, bị tố lại, rồi tố tiếp ("tố lại", "re-raise" — cùng một thứ) cho đến khi ai đó hết chip. Tố → 3-bet → 4-bet → 5-bet → all-in là một chuỗi hoàn toàn hợp lệ, dù có phần đáng sợ.

Vẫn có hai ranh giới:

- Mỗi lần tố lại phải tuân thủ ==luật mức tăng tối thiểu== ở trên
- ==r:Bạn không thể tự tố khoản cược của chính mình.== Nếu bạn cược và tất cả chỉ theo, vòng cược kết thúc — bạn chỉ được tố tiếp nếu có ai đó tố *bạn* trước

Ở các bàn **Fixed-Limit**, hầu hết phòng bài giới hạn mỗi vòng ở một khoản cược cộng ba lần tố (pot bị "cap"), và giới hạn này thường được gỡ khi chỉ còn hai người chơi — luật mỗi nơi mỗi khác, nên hãy hỏi dealer.

---

## All-in nghĩa là gì?

All-in nghĩa là cược ==toàn bộ số chip bạn còn lại==. Bạn có thể làm điều đó bất cứ lúc nào đến lượt mình — dưới dạng một khoản cược, một lệnh theo hoặc một lần tố.

Nếu khoản all-in của bạn *nhỏ hơn* mức cược hiện tại, bạn không bị loại: bạn chỉ tranh ==pot chính== bị giới hạn theo phần đóng góp của mình, còn phần chip dư từ các stack lớn hơn tạo thành ==pot phụ (side pot)== mà bạn không thể thắng. Và một khoản all-in *nhỏ hơn một min-raise đầy đủ* thường không mở lại quyền tố cho những người đã hành động — một luật tinh vi khiến cả người chơi lâu năm cũng bất ngờ.

Toàn bộ cơ chế — cách tính side pot, ai lật bài trước, table stakes — nằm trong [luật all-in và side pot](/vi/blog/holdem-all-in-rules), còn chuyện gì xảy ra khi các tay bài all-in hòa nhau thì thuộc về luật chia pot.

---

## Biết các hành động là bước một — chọn hành động nào mới là chiến thuật

Bài viết này nói về việc mỗi hành động *là gì* và khi nào nó *hợp lệ*. Còn chọn hành động nào — khi nào nên cược, khi nào theo là có lời, khi nào một tay bài đẹp vẫn phải bỏ — lại là một nhánh kỹ năng khác:

- Đánh giá sức mạnh thô của tay bài trước tiên: [thứ hạng bài poker](/vi/blog/holdem-hand-rankings)
- Khung tư duy cho mọi quyết định: chiến thuật Texas Hold'em với 5 quyết định cốt lõi
- Vì sao vị trí ngồi thay đổi tất cả: các vị trí trong poker

Một quy tắc bỏ túi giúp người mới tiết kiệm tiền thật trong lúc chờ học sâu hơn: ==nếu tay bài không đủ mạnh để tố, bỏ bài thường tốt hơn theo.==

---

## Những lỗi cược ở bàn live tôi thấy mỗi tuần

Tôi chơi một bàn live cược thấp hàng tuần, và những lỗi hành động y hệt nhau lặp lại như đồng hồ:

### Lỗi 1 — Theo khi bạn có thể check

Ngồi đầu lượt ở flop, chưa ai cược, thế mà một người chơi mới ném chip vào "để theo". Chẳng có gì để theo cả — đó là một khoản cược. Khi vòng cược chưa được mở, cứ check và xem lá bài miễn phí.

### Lỗi 2 — String raise

"Tôi theo... à khoan, tố!" Không được. Ở poker live, hành động của bạn bị khóa ngay khoảnh khắc bạn hô ra. Tôi đã chứng kiến dealer xử tình huống này thành một lệnh theo ngay giữa câu nhiều hơn số lần tôi đếm được. Hô "raise" *trước*, rồi mới đẩy chip.

### Lỗi 3 — Mù lớn vứt đi một flop miễn phí

Cả bàn limp, lượt tới mù lớn... và họ bỏ bài. Đó là ném một flop miễn phí vào đống bài úp. ==g:Nếu không ai tố, BB có thể check và xem ba lá bài mà không tốn thêm đồng nào== — khoản mù của họ đã sống sẵn. Chuyện này xảy ra ở đúng nghĩa mọi vòng bàn.

### Lỗi 4 — Chip mệnh giá lớn im lặng

Đối mặt khoản cược $10, một người chơi lẳng lặng ném vào một chip $100 duy nhất, vừa mong được thối lại *vừa* muốn tính là tố. Ở hầu hết phòng bài, ==luật một chip (one-chip rule)== quy định một chip mệnh giá lớn ném vào mà không hô gì chỉ được tính là theo. Hãy nói "raise" nếu bạn muốn tố.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-all-in-rules | Luật all-in và side pot | /images/holdem-all-in-rules-hero.webp
:::

## Câu hỏi thường gặp

**Q. Có được tố sau khi đã check trong poker không?**

A. Có — nếu ai đó cược sau khi bạn check, bạn được tố khi lượt hành động quay lại. Đó chính là check-raise, và nó hoàn toàn hợp lệ. Nếu tất cả những người sau bạn cũng check, thì không có khoản cược nào để tố và vòng đó đơn giản là kết thúc.

**Q. Có thể tự tố khoản cược của chính mình không?**

A. Không. Nếu bạn cược và các đối thủ chỉ theo, bạn không được thêm chip — vòng cược kết thúc. Bạn chỉ được tố tiếp nếu một người chơi khác tố bạn trước, điều đó sẽ mở lại lượt hành động.

**Q. Được tố bao nhiêu lần trong Texas Hold'em?**

A. Trong No-Limit không có giới hạn số lần tố — có thể tố lại cho đến khi một người chơi all-in, miễn là mỗi lần tố đạt mức tăng tối thiểu. Các bàn Fixed-Limit thường giới hạn mỗi vòng ở một khoản cược cộng ba lần tố.

**Q. Có được bỏ bài trước lượt không?**

A. Không nên. Lượt hành động phải đi theo chiều kim đồng hồ đúng thứ tự, và một lần bỏ bài trước lượt sẽ rò rỉ thông tin cho những người còn đang cân nhắc. Hầu hết phòng bài coi hành động đó là ràng buộc và có thể cảnh cáo hoặc phạt nếu tái phạm. Hãy đợi người bên phải bạn hành động xong.

**Q. Có được check ở pre-flop không?**

A. Chỉ khi bạn là mù lớn, và chỉ khi không ai tố. BB đã đặt sẵn một khoản cược sống, nên họ được check để xem flop miễn phí. Mọi vị trí khác ở pre-flop đều phải theo, tố hoặc bỏ bài.

**Q. Có được tố sau khi có người all-in không?**

A. Tùy vào cỡ của khoản all-in. Nếu khoản all-in là một lần tố hợp lệ đầy đủ, lượt hành động được mở lại và bạn có thể tố tiếp. Nếu nó *nhỏ hơn* một min-raise đầy đủ, những người đã hành động thường chỉ được theo hoặc bỏ bài — ở hầu hết phòng bài, khoản all-in ngắn đó không mở lại quyền tố cho họ.

**Q. String bet trong poker là gì?**

A. Là đẩy chip vào bằng nhiều động tác, hoặc nói "call" rồi mới thêm phần tố, mà không hô "raise" trước. Dealer sẽ xử string bet thành một lệnh theo với đúng số tiền ban đầu. Hãy hô hành động rõ ràng bằng lời hoặc đẩy toàn bộ chip trong một động tác duy nhất.

**Q. Limp trong poker nghĩa là gì?**

A. Limp là vào pot ở pre-flop bằng cách chỉ theo mù lớn thay vì tố. Hoàn toàn hợp lệ nhưng thường là lối chơi yếu — có những tình huống cụ thể limp hợp lý, nhưng đó là ngoại lệ.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Trụ cột</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Luật chơi Texas Hold'em cho người mới</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Hướng dẫn luật đầy đủ — từ mù đến showdown</div>
  </a>
  <a href="/vi/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Diễn biến ván bài</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Trình tự chơi Texas Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Từ pre-flop đến river với ví dụ tay bài thực tế</div>
  </a>
  <a href="/vi/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Mù (Blinds)</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Mù nhỏ vs mù lớn là gì</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Vì sao bạn phải trả tiền trước khi thấy bài</div>
  </a>
</div>
`.trim(),
};
