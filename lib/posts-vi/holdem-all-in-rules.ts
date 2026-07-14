import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Luật all-in trong Texas Hold'em: pot phụ (side pot), tố lại và showdown",
  seoTitle: "All-in xong không biết mình thắng gì? — Luật all-in & side pot",
  desc: "Đẩy hết chip vào giữa mà không rõ mình thắng được gì? Luật all-in Texas Hold'em: table stakes, pot chính, pot phụ (side pot), quyền tố lại và thứ tự showdown.",
  tldr: "All-in nghĩa là cược toàn bộ chip bạn đang có. Bạn chỉ thắng được từ mỗi đối thủ đúng phần mình đã theo kịp (pot chính). Phần cược dư của những stack lớn hơn tạo thành pot phụ (side pot) mà bạn không được đụng tới. Một cú all-in nhỏ hơn một nước tố đủ mức KHÔNG mở lại vòng cược cho những người đã hành động.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-13",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 phút",
  emoji: "♠",
  tags: [
    "luật all in poker",
    "all in texas holdem",
    "side pot là gì",
    "pot phụ poker",
    "all in có được tố lại không",
  ],
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "All-in trong Texas Hold'em — người chơi đẩy toàn bộ chip vào giữa bàn trong lúc dealer tách pot chính và pot phụ trên mặt nỉ xanh",
  content: `
Bạn còn ít chip. Bạn đẩy hết vào giữa. Người phía sau theo. Người thứ ba tố lại. Dealer bắt đầu tách chip ra thành hai đống.

Và bạn chẳng hiểu chuyện gì đang xảy ra.

Tôi từng ngồi đúng ở cái bàn đó. Lần đầu all-in trong một ván cash game trực tiếp, tôi không biết mình còn thắng được gì không, người kia có được tố lại không, thậm chí đống chip nào là của mình. Chẳng ai giải thích cả.

==Bài này đi hết mọi tình huống: pot chính, pot phụ (side pot), ai được quyền tố lại, và thứ tự showdown.== Sẽ không còn cảnh đứng hình khi dealer bắt đầu đếm stack. (Nếu trình tự cược cơ bản vẫn còn mơ hồ, hãy đọc [hướng dẫn luật cho người mới](/vi/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") trước.)

## All-in trong Texas Hold'em nghĩa là gì?

All-in nghĩa là cược toàn bộ số chip bạn đang có trước mặt. Một khi đã đẩy vào, bạn không thể thêm chip — và cũng không ai ép bạn bỏ bài được nữa.

Nền tảng của nó là luật **table stakes**: bạn chỉ được cược số chip có trên bàn từ lúc ván bài bắt đầu. Không được móc thêm tiền trong túi, không mượn bạn bè, không đặt đồng hồ hay chìa khóa xe — đó là poker trong phim thôi.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Thuật ngữ | Ý nghĩa |
|------|---------|
| Push / Shove / Jam | Tiếng lóng chỉ việc all-in |
| Table stakes | Chỉ được cược những gì bạn có từ đầu ván |
| Double up | Thắng một cú all-in và nhân đôi stack |
| Pot chính (main pot) | Pot mà tất cả — kể cả người all-in — đều có thể thắng |
| Pot phụ (side pot) | Chip chỉ dành cho các stack lớn hơn; người all-in bị loại khỏi pot này |

</div>

==g:Một khi đã all-in, bạn chắc chắn được xem hết mọi lá bài chung còn lại.== Không ai bluff đuổi bạn ra khỏi ván được nữa. Bài của bạn sống tới tận river.

---

## Cách tuyên bố all-in

Có hai cách hợp lệ:

**1. Tuyên bố bằng lời** — Nói "all-in" rõ ràng để dealer và đối thủ đều nghe thấy. Đây là cách an toàn nhất. Nói ra rồi là bạn đã bị ràng buộc.

**2. Đẩy toàn bộ chip lên trước** — Đẩy cả stack về phía giữa bàn trong một động tác gọn gàng duy nhất. Đẩy chip thành nhiều đợt có thể bị coi là string bet, nên hãy di chuyển tất cả cùng lúc.

![Showdown một cú all-in trong Texas Hold'em — bàn bài K♠ 10♣ 7♦ 4♥ 2♣ với chip được tách thành pot chính và pot phụ có nhãn riêng](/images/holdem-all-in-declare.webp)

==r:Đừng bao giờ đẩy một chip lẻ lên trước mà không nói gì — dealer sẽ chỉ tính đúng giá trị chip đó, chứ không phải cả stack của bạn.== Luôn hô "all-in" thành tiếng, hoặc đẩy toàn bộ stack trong một lần.

---

## Side pot trong poker hoạt động thế nào? (Vì sao người all-in bị giới hạn)

Người all-in chỉ có thể thắng đúng số mình đã bỏ vào nhân với số người theo. Mọi khoản chip cược vượt quá mức đó tạo thành một **pot phụ (side pot)** chỉ thuộc về những người đã góp vào nó.

![Side pot sau một cú all-in trong Texas Hold'em — dealer tách chip thành pot chính và pot phụ trong khi Người chơi A bị giới hạn mức thắng](/images/holdem-all-in-side-pot.webp)

### Ví dụ 3 người chơi (tình huống chuẩn)

| Người chơi | Stack | Hành động |
|--------|-------|--------|
| Người chơi A | 100 chip | All-in |
| Người chơi B | 300 chip | Theo 100, rồi cược thêm 50 |
| Người chơi C | 300 chip | Theo 100, rồi theo tiếp 50 |

**Pot chính:** 100 × 3 = **300 chip** (A, B, C đều có quyền thắng)

**Pot phụ:** 50 × 2 = **100 chip** (chỉ B và C)

==Người chơi A có thể thắng pot chính 300 chip ở showdown. Nhưng kể cả khi A có tay bài mạnh nhất bàn, A cũng không được đụng vào pot phụ 100 chip.== B hoặc C sẽ lấy nó.

### Ví dụ 4 người chơi với stack khác nhau

Đây là chỗ mọi thứ bắt đầu rối — và là chỗ hầu hết người mới bị lạc.

| Người chơi | Stack | All-in với |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | theo tất cả |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pot | Số chip | Ai có quyền thắng |
|:---|:---:|:---|
| Pot chính | 100 × 4 = **400** | A, B, C, D |
| Pot phụ 1 | 100 × 3 = **300** | B, C, D (A bị giới hạn) |
| Pot phụ 2 | 300 × 2 = **600** | C, D (A và B bị giới hạn) |
| **Tổng** | **1.300** | — |

</div>

Quy tắc: ==mỗi pot phụ được tạo bằng cách lấy phần chênh lệch tới stack nhỏ kế tiếp × số người chơi theo kịp mức đó.== Tính từ stack nhỏ nhất lên lớn nhất.

---

## All-in có mở lại vòng cược không? — Luật mà hầu hết người chơi hiểu sai

==r:Đây là luật all-in gây tranh cãi nhiều nhất ở các bàn chơi trực tiếp — tôi từng chứng kiến hai người cãi nhau năm phút trong khi cả bàn ngồi chờ. Cả hai đều sai.==

**Luật như sau:** nếu một người all-in với số chip **ít hơn một [nước tố đủ mức](/vi/blog/holdem-betting-actions)** (full raise), cú all-in đó KHÔNG mở lại vòng cược cho những người đã hành động trong vòng đó.

![Luật tố lại sau all-in trong poker — Người chơi C all-in ít hơn một nước tố đủ mức, Người chơi A chỉ được theo hoặc bỏ bài](/images/holdem-all-in-reraise-rule.webp)

**Ví dụ:**

Blind $1/$2. Bốn người chơi xem flop.

1. Người chơi A cược $10.
2. Người chơi B all-in **$14** (chỉ hơn cú cược $10 của A đúng $4 — chưa phải một nước tố đủ mức, muốn đủ phải ít nhất $20).

Chuyện gì xảy ra với Người chơi A, và với Người chơi C chưa hành động?

- Người chơi A đã hành động (cược $10) và giờ chỉ đối mặt với một nước tố dở dang. Vì cú all-in $14 của B **ít hơn một nước tố đủ mức**, vòng cược KHÔNG mở lại cho Người chơi A. ==A chỉ được theo hoặc bỏ bài — không được tố lại.==
- Người chơi C chưa hành động — **Người chơi C vẫn được tố bình thường**.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Mức all-in | Tố đủ mức? | Mở lại vòng cược? |
|--------------|-------------|-----------------|
| Ít hơn một nước tố đủ mức | Không | Không — người đã hành động chỉ được theo hoặc bỏ bài |
| Bằng hoặc hơn một nước tố đủ mức | Có | Có — tất cả đều được tố lại |

</div>

Vì sao có luật này? Nó bảo vệ người chơi khỏi bị ép vào những nước tố lớn hơn chỉ vì các cú all-in lẻ tẻ. Một nước tố đủ mức thể hiện sự hung hăng thật — cú all-in vét túi của một stack ngắn thì không.

### Trường hợp nâng cao: nhiều người cùng all-in ngắn thì sao?

Đây là phiên bản khiến cả những người chơi lâu năm cũng vấp. Nhiều cú all-in ngắn có thể **cộng dồn** thành một nước tố đủ mức — và nếu tổng phần tăng của chúng chạm ngưỡng, vòng cược mở lại cho những người đã hành động.

Đây là luật "re-opening the bet" chính thức của TDA, và hầu hết các phòng bài đều áp dụng.

**Ví dụ (blind $1/$2, ở flop):**

1. Người chơi A cược $10.
2. Người chơi B all-in **$14** (tăng +$4 — một mình chưa đủ một nước tố đủ mức)
3. Người chơi C all-in **$21** (tăng +$7 — một mình chưa đủ một nước tố đủ mức)

Tổng phần tăng: $4 + $7 = **$11** — chạm ngưỡng tố tối thiểu $10.

**Kết quả: vòng cược MỞ LẠI cho Người chơi A.** A có thể bỏ bài, theo hoặc tố lại, dù cả B lẫn C đều không tự mình tạo ra một nước tố đủ mức.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in của B | All-in của C | Tổng phần tăng | Mở lại cho A? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — dưới $10 | ❌ Không |
| $14 (+$4) | $21 (+$7) | $11 — chạm $10 | ✅ Có |
| $15 (+$5) | $25 (+$10) | $15 — chạm $10 | ✅ Có |

</div>

Ngưỡng tố tối thiểu luôn là *nước cược hoặc nước tố đủ mức hợp lệ gần nhất* — không phải một con số cộng dồn tùy ý.

### Hướng dẫn quyết định nhanh — Cú all-in này có mở lại vòng cược không?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tình huống | Mở lại cho người đã hành động? |
|---|---|
| Một cú all-in < nước tố đủ mức | ❌ Không — chỉ theo hoặc bỏ bài |
| Một cú all-in ≥ nước tố đủ mức | ✅ Có — tất cả được tố lại |
| Nhiều all-in ngắn, tổng < nước tố đủ mức | ❌ Không |
| Nhiều all-in ngắn, tổng ≥ nước tố đủ mức | ✅ Có |
| Người CHƯA hành động | ✅ Luôn được tố (bất kể trường hợp nào) |

</div>

---

## Luật showdown khi có all-in

Khi mọi vòng cược kết thúc và có người đang all-in, showdown diễn ra như sau:

1. **Bài được lật ngửa.** Trong giải đấu (tournament), mọi tay bài liên quan tới cú all-in thường được lật ngay khi vòng cược khép lại. Trong cash game, [luật showdown người tấn công cuối](/vi/blog/holdem-showdown-rules) áp dụng trước, rồi những người all-in lật bài.
2. **Pot phụ được chia trước.** Dealer xử lý pot phụ được tạo gần nhất trước, rồi lùi dần về pot chính.
3. **Bài tự nói.** Tay bài mạnh nhất thắng từng pot mà nó có quyền tranh — bất kể người chơi nói mình có gì.
4. **Có thể có nhiều người thắng.** Người chơi A có thể thắng pot chính. Người chơi B có thể thắng pot phụ. Không ai ôm trọn tất cả chỉ vì thắng "pot của mình".

==g:Một người có thể thắng pot chính nhưng thua pot phụ. Cả hai kết quả đều hợp lệ.==

**Trường hợp đặc biệt:** nếu một pot phụ chỉ còn đúng một người (những người khác đã bỏ bài), người đó nhận lại số chip đó ngay lập tức — pot ấy không cần showdown.

---

## All-in sai thì sao? — 5 sai lầm cần tránh

### Sai lầm 1: nghĩ người all-in có thể thắng pot phụ

Không thể. Một khi người all-in đã bị giới hạn mức thắng, mọi chip cược thêm của các stack lớn hơn thuộc về một pot mà người all-in không có bất kỳ quyền gì.

### Sai lầm 2: không nắm luật ai được quyền tố lại

Cú all-in lẻ của Người chơi C không cho Người chơi A cơ hội thứ hai để tố lại. Thuộc lòng điều này giúp dập tắt tranh cãi trước cả khi nó bắt đầu.

### Sai lầm 3: móc thêm chip từ túi giữa ván

Table stakes. Những gì trên bàn là tất cả những gì bạn được cược. Nếu bạn all-in $80 mà pot là $400, bạn chỉ thắng được $80 từ mỗi người theo.

### Sai lầm 4: úp bài bỏ (muck) quá vội

Bạn đang all-in tranh pot chính. Hai người còn lại đấu nhau giành pot phụ. Đừng vứt bài — tay bài của bạn vẫn sống để tranh pot chính. ==Luôn chờ dealer xử lý xong mọi pot rồi mới chạm vào bài của mình.==

### Sai lầm 5: all-in vì cay cú

All-in là nước đi quyền lực nhất trên bàn. Nó ép đối thủ vào quyết định được ăn cả ngã về không. Sức mạnh đó biến mất khi bạn đẩy hết chip một cách bừa bãi. Hãy dùng nó đúng lúc — gây áp lực khi stack ngắn, tay bài giá trị bạn muốn được theo, hoặc bluff với fold equity thật sự.

---

:::readnext[Đọc tiếp]
/vi/blog/texas-holdem-rules-for-beginners | Luật Texas Hold'em cho người mới | /images/rules-texas-holdem.webp
/vi/blog/holdem-showdown-rules | Luật showdown giải thích tường tận | /images/holdem-showdown-rules-hero.webp
:::

## Câu hỏi thường gặp

**Q. Có thể all-in với số chip ít hơn big blind không?**

A. Có. Nếu bạn còn ít chip hơn big blind, khi tới lượt đặt blind bạn tự động all-in với đúng số mình còn. Những người khác vẫn trả đủ big blind — phần vượt quá mức đóng góp của bạn sẽ vào pot phụ.

**Q. Thắng cú all-in nhưng thua pot phụ thì sao?**

A. Bạn nhận pot chính (phần bạn đã theo kịp từ mỗi người chơi), còn người kia nhận pot phụ. Mỗi người thắng đúng phần mình có quyền tranh.

**Q. All-in có bắt buộc phải lật bài không?**

A. Trong giải đấu, có — khi vòng cược khép lại với một cú all-in, mọi tay bài liên quan thường được lật ngửa. Trong cash game trực tiếp, luật showdown thông thường áp dụng: người tấn công cuối lật trước, những người khác lật hoặc úp bài bỏ.

**Q. Có được "run it twice" trong một cú all-in poker không?**

A. Run it twice (chia các lá bài chung còn lại hai lần và chia đôi pot) được phép ở nhiều cash game nếu cả hai người chơi đồng ý sau khi all-in. Trong giải đấu thì thường không được phép. Phải thống nhất trước khi các lá bài chung còn lại được chia ra.

**Q. Luật "table stakes" chính xác là gì?**

A. Table stakes nghĩa là bạn chỉ được cược số chip có trước mặt khi ván bài bắt đầu. Không được thêm tiền khi ván đang diễn ra. Luật này bảo vệ cả hai phía: bạn không bao giờ bị ép rủi ro nhiều hơn stack của mình, và đối thủ cũng không thể bất ngờ cược nhiều hơn mức bạn theo nổi.

**Q. Hai người all-in với số chip khác nhau, ai lật bài trước?**

A. Cú all-in sau cùng mà là một nước cược hoặc tố mới chính là hành động tấn công cuối và lật trước. Một cú all-in chỉ là theo (call) với số ít hơn thì không phải hành động tấn công — người cược ban đầu vẫn lật trước. Trong cash game, nếu đó là cú all-in được theo mà không còn hành động nào nữa, người theo có thể úp bài bỏ nếu thua sau khi xem bài của người all-in (trong giải đấu, mọi tay bài liên quan đều phải lật ngửa).

**Q. Luật all-in ở giải đấu và cash game có khác nhau không?**

A. Luật cốt lõi giống nhau, nhưng có hai khác biệt thực tế. Thứ nhất, ở giải đấu mọi tay bài liên quan tới cú all-in được lật ngửa ngay khi vòng cược khép lại (Luật 16 của TDA) — bạn không được úp bài bỏ trước showdown. Ở cash game, thứ tự showdown thông thường áp dụng và người chơi được phép úp bài. Thứ hai, run it twice phổ biến ở cash game (nếu cả hai đồng ý) nhưng ở giải đấu thường không được phép.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Bài trụ cột</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Luật Texas Hold'em cho người mới</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Trọn bộ luật từ blind tới showdown</div>
  </a>
  <a href="/vi/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Luật showdown</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Ai lật bài trước và khi nào được úp bài bỏ</div>
  </a>
</div>
`.trim(),
};
