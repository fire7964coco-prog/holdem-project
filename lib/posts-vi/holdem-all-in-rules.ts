import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Luật all-in trong Texas Hold'em: side pot, raise lại và showdown",
  seoTitle: "All-in rồi thắng được gì? — Luật all-in poker và side pot",
  desc: "Đẩy hết chip vào giữa mà không rõ thắng được gì? Luật all-in Texas Hold'em: table stakes, side pot, khi nào được raise lại và thứ tự showdown.",
  tldr: "All-in nghĩa là cược toàn bộ chip bạn đang có. Bạn chỉ thắng được từ mỗi đối thủ đúng phần mình đã bỏ vào ngang họ (main pot). Phần chip dư do hai stack lớn hơn trở lên cược vượt mức đó tạo thành side pot chỉ họ được tranh; nếu chỉ một người cược dư thì phần đó được trả lại. Trong no-limit và pot-limit, một cú all-in nhỏ hơn một raise đủ mức KHÔNG mở lại vòng cược cho người đã hành động — trừ khi nhiều cú all-in ngắn cộng lại đạt ít nhất một raise đủ mức so với số chip người đó đã bỏ vào.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-10-09",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "10 phút",
  emoji: "♠",
  tags: [
    "luật all in poker",
    "all in poker",
    "all in trong poker là gì",
    "side pot poker",
    "side pot texas holdem",
    "all in poker rules",
    "table stakes",
  ],
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "All-in trong Texas Hold'em — người chơi đẩy toàn bộ chip vào giữa bàn trong lúc dealer tách main pot và side pot trên mặt nỉ xanh",
  content: `
Bạn đang short stack. Bạn shove. Người ngồi sau call (theo). Người thứ ba raise (tố) lên nữa. Dealer (người chia bài) bắt đầu tách chip ra thành hai đống.

Bạn không hiểu chuyện gì đang xảy ra.

Tôi từng ngồi đúng ở cái bàn đó. Lần đầu all-in (tất tay) trong một ván cash game live, tôi không biết mình còn thắng được gì không, người kia có được raise lại không, thậm chí đống chip nào là của mình. Chẳng ai giải thích cả.

==Bài này đi hết mọi tình huống: main pot (pot chính), side pot (pot phụ), ai được raise lại, và thứ tự showdown (lật bài).== Sẽ không còn cảnh đứng hình khi dealer bắt đầu đếm stack. (Nếu trình tự cược cơ bản vẫn còn mơ hồ, [hướng dẫn luật cho người mới](/vi/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") sẽ phủ phần đó trước.)

## All-in trong poker là gì?

All-in là cược toàn bộ số chip bạn đang có trước mặt trong một hành động duy nhất. Từ lúc đó bạn không thêm chip được nữa, không ai ép bạn fold (bỏ bài) được nữa, và bạn chỉ còn tranh đúng phần pot mà mình đã bỏ chip vào ngang với đối thủ. Người chơi hay gọi là push, shove hay jam — cả ba đều là all-in.

Nền tảng của nó là luật **table stakes** (chỉ được cược số chip trên bàn): bạn chỉ được cược số chip đã có trên bàn từ lúc ván bài bắt đầu. Không được móc thêm tiền trong túi, không mượn bạn bè, không đặt đồng hồ hay chìa khóa xe — đó là poker trong phim thôi.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Thuật ngữ | Ý nghĩa |
|------|---------|
| Push / Shove / Jam | Tiếng lóng chỉ việc all-in |
| Table stakes | Chỉ được cược những gì bạn có từ đầu ván |
| Double up | Thắng một cú all-in và nhân đôi stack |
| Main pot | Pot mà tất cả — kể cả người all-in — đều có thể thắng |
| Side pot | Chip chỉ các stack lớn hơn được thắng; người all-in với số chip ít hơn bị loại khỏi pot này |

</div>

==g:Một khi đã all-in và được call, bạn chắc chắn được xem hết mọi lá bài chung còn lại.== Không ai bluff đuổi bạn ra khỏi ván được nữa. Bài của bạn sống tới tận river.

---

## Tuyên bố all-in thế nào cho đúng luật?

Có hai cách được công nhận: nói to "all-in" cho dealer và cả bàn nghe thấy, hoặc đẩy toàn bộ stack về giữa bàn trong một động tác. Lời nói là cách an toàn nhất vì không thể bị hiểu khác đi. Đẩy chip mà không nói gì đôi khi chỉ được tính là call, hoặc chỉ là một mức bet nhỏ — phần dưới đây nói rõ khi nào.

Hai cách hợp lệ:

**1. Tuyên bố bằng lời** — Nói "all-in" rõ ràng để dealer và đối thủ đều nghe thấy. Đây là cách an toàn nhất. Nói ra rồi là bạn đã bị ràng buộc.

**2. Đẩy toàn bộ chip lên trước** — Đẩy cả stack về phía giữa bàn trong một động tác gọn duy nhất. Đẩy chip thành nhiều nhịp có thể bị coi là string bet (đẩy chip nhiều nhịp), nên hãy chuyển tất cả cùng lúc. ==r:Chỉ đẩy chip không phải lúc nào cũng đủ: nếu bạn đang đối diện một mức bet và toàn bộ chip của bạn vừa đủ để call mức đó, cú đẩy im lặng được xử là call, không phải all-in (TDA 2024 Luật 45-A, WSOP Tournament Rule 92).== Trong mọi trường hợp khác, đẩy những chip cuối cùng của bạn **là** một cú bet all-in (TDA 2024 Luật 45-B) — ngoại lệ duy nhất là một lá chip mệnh giá lớn đẩy im lặng vào một mức bet đang có, khi đó chỉ được tính là call (TDA 2024 Luật 44).

![Showdown all-in trong Texas Hold'em — board K♠ 10♣ 7♦ 4♥ 2♣ với chip được tách thành main pot và side pot có nhãn riêng](/images/holdem-all-in-declare.webp)

==r:Đừng bao giờ đẩy im lặng một lá chip mệnh giá lớn lên trước rồi mong nó được tính là all-in — nếu đang đối diện một mức bet, dealer tính đó là call; nếu chưa có bet nào, đó là một cú bet đúng bằng mệnh giá lá chip ấy.== Luôn hô "all-in" thành tiếng — đây là cách duy nhất không bao giờ bị đọc thành một hành động khác.

---

## Side pot trong poker hoạt động thế nào? (Vì sao người all-in bị giới hạn)

Side pot sinh ra khi một người đã all-in mà những người khác vẫn còn chip để cược tiếp. Người all-in chỉ tranh main pot: số chip của họ cộng với phần ngang bằng từ mỗi người còn lại. Chip cược vượt mức đó của từ hai người trở lên tạo thành side pot mà người all-in không có quyền tranh. Nếu chỉ một người cược vượt, phần dư được trả lại cho chính họ.

Người all-in chỉ có thể thắng số mình đã bỏ vào cộng với tối đa một phần ngang bằng từ mỗi người chơi khác đã bỏ chip vào — kể cả người sau đó đã fold, vì chip đã vào pot thì ở lại trong pot. Chip cược vượt mức đó đi vào một **side pot** thuộc riêng về những người đã góp vào nó — nhưng chỉ khi có từ hai người trở lên bỏ chip vào đó. Nếu chỉ một người vượt mức giới hạn, không có ai để tranh side pot và phần dư quay thẳng về tay họ dưới dạng cược không ai theo (uncalled bet).

![Side pot sau một cú all-in trong Texas Hold'em — dealer tách chip thành main pot và side pot trong khi Người chơi A bị giới hạn mức thắng](/images/holdem-all-in-side-pot.webp)

### Hai người all-in lệch stack: phần chip dư được trả lại

Hãy lấy hai stack trong ví dụ 3 người bên dưới, nhưng bỏ người thứ ba đi. A có 100 chip và all-in. B có 300 chip và đẩy cả 300 vào. Pot thực sự được tranh chỉ là 100 × 2 = **200 chip**. Phần **200 chip** còn lại của B không phải side pot — không có ai để tranh với B — nên dealer trả thẳng về cho B như một cược không ai theo. Nhiều bài viết gọi phần dư này là side pot — không đúng: side pot chỉ tồn tại khi có ít nhất hai người cùng bỏ chip vượt mức all-in.

### Ví dụ 3 người (tiêu chuẩn)

| Người chơi | Stack | Hành động |
|--------|-------|--------|
| Người chơi A | 100 chip | All-in |
| Người chơi B | 300 chip | Call 100, rồi bet thêm 50 |
| Người chơi C | 300 chip | Call 100, rồi call 50 |

**Main pot:** 100 × 3 = **300 chip** (A, B, C đều có quyền tranh)

**Side pot:** 50 × 2 = **100 chip** (chỉ B và C)

==Người chơi A có thể thắng main pot 300 chip ở showdown. Nhưng kể cả khi A có tay bài mạnh nhất bàn, A cũng không được đụng vào side pot 100 chip.== B hoặc C sẽ thắng nó.

### Ví dụ 4 người, nhiều mức stack

Đây là chỗ mọi thứ bắt đầu rối — và là chỗ hầu hết người mới bị lạc.

| Người chơi | Stack | All-in với |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | call tất cả |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pot | Số chip | Ai có quyền tranh |
|:---|:---:|:---|
| Main pot | 100 × 4 = **400** | A, B, C, D |
| Side pot 1 | 100 × 3 = **300** | B, C, D (A bị giới hạn) |
| Side pot 2 | 300 × 2 = **600** | C, D (A và B bị giới hạn) |
| **Tổng** | **1.300** | — |

</div>

Quy tắc: ==mỗi side pot được tạo bằng cách lấy phần chênh lệch lên tới stack nhỏ kế tiếp × số người chơi theo kịp mức đó.== Tính từ stack nhỏ nhất lên lớn nhất.

---

## All-in có mở lại vòng cược không? — Luật nhiều người hiểu sai nhất

Trong no-limit và pot-limit: một cú all-in nhỏ hơn một raise đủ mức không mở lại vòng cược cho người đã hành động — họ chỉ được call hoặc fold. Một cú all-in bằng hoặc hơn một raise đủ mức thì mở lại cho tất cả. Người chưa hành động luôn được raise. Nhiều cú all-in ngắn có thể cộng dồn, nhưng phép thử được làm riêng cho từng người.

==r:Đây là luật all-in gây tranh cãi nhiều nhất ở bàn live — tôi từng chứng kiến hai người cãi nhau năm phút trong khi cả bàn ngồi chờ. Cả hai đều sai.==

**Luật (no-limit và pot-limit):** nếu một người all-in với số chip **ít hơn một [raise đủ mức (full raise)](/vi/blog/holdem-betting-actions)**, cú all-in đó KHÔNG mở lại vòng cược cho những người đã hành động trong vòng đó. Limit game đặt ngưỡng thấp hơn: ở đó, một cú all-in từ nửa mức bet trở lên là mở lại vòng cược (TDA 2024 Luật 47-B).

![Luật raise lại sau all-in trong poker — một cú all-in ngắn nhỏ hơn một raise đủ mức, nên Người chơi A đã hành động chỉ được call hoặc fold](/images/holdem-all-in-reraise-rule.webp)

**Ví dụ:**

Mức blind (mù — cược bắt buộc) $1/$2. Bốn người chơi xem flop.

1. Người chơi A bet $10.
2. Người chơi B all-in **$14** (chỉ hơn mức bet $10 của A đúng $4 — chưa phải một raise đủ mức, muốn đủ phải ít nhất $20).

Chuyện gì xảy ra với Người chơi A, và với Người chơi C chưa hành động?

- Người chơi A đã hành động (bet $10) và giờ chỉ đối diện một cú raise chưa đủ mức. Vì cú all-in $14 của B **nhỏ hơn một raise đủ mức**, vòng cược KHÔNG mở lại cho Người chơi A. ==A chỉ được call hoặc fold — không được raise lại.==
- Người chơi C chưa hành động — **Người chơi C vẫn được raise**. Giới hạn mở lại không bao giờ chạm tới người chưa hành động. Nhưng hãy để ý mức tối thiểu: nếu C raise, mức tối thiểu là **tổng** bằng cú all-in của B cộng mức bet đủ gần nhất — $14 + $10 = **$24**, chứ không phải $20 như một raise đủ mức so với A (WSOP Live Action Rule 176). C vẫn có thể all-in với số ít hơn thế: mức tối thiểu không bao giờ ràng buộc người đang all-in (Live Action Rule 175).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Mức all-in (no-limit / pot-limit) | Raise đủ mức? | Mở lại vòng cược? |
|--------------|-------------|-----------------|
| Nhỏ hơn một raise đủ mức | Không | Không — người đã hành động chỉ được call hoặc fold |
| Bằng hoặc hơn một raise đủ mức | Có | Có — tất cả đều được raise lại |

</div>

Vì sao có luật này? Nó bảo vệ người chơi khỏi bị ép vào những cú raise lớn hơn chỉ vì các cú all-in lẻ. Một raise đủ mức thể hiện sự hung hăng thật — cú all-in vét túi của một short stack thì không.

### Trường hợp nâng cao: nhiều người cùng all-in ngắn thì sao?

Đây là phiên bản khiến cả người chơi lâu năm cũng vấp. Nhiều cú all-in ngắn có thể **cộng dồn** thành một raise đủ mức — và nếu tổng phần tăng của chúng chạm ngưỡng, vòng cược mở lại cho người đã hành động. ==r:Phép thử được làm riêng cho từng người, không phải một lần cho cả bàn:== chỉ mở lại cho người mà, **khi lượt hành động quay về họ, đang đối diện ít nhất một raise đủ mức so với số chip họ đã bỏ vào** (==TDA 2024 Luật 47==).

Đây là luật "re-opening the bet" chính thức của TDA, và hầu hết phòng poker đều theo.

**Ví dụ (blind $1/$2, ở flop):**

1. Người chơi A bet $10.
2. Người chơi B all-in **$14** (tăng +$4 — một mình chưa đủ một raise đủ mức)
3. Người chơi C all-in **$21** (tăng +$7 — một mình chưa đủ một raise đủ mức)

Tổng phần tăng: $4 + $7 = **$11** — đạt ngưỡng raise tối thiểu $10.

**Kết quả: vòng cược MỞ LẠI cho Người chơi A.** A đã bỏ vào $10 và giờ đối diện $21 — thêm $11, ít nhất một raise đủ mức — nên A được fold, call hoặc raise lại, dù B lẫn C không ai một mình tạo được raise đủ mức. Một người đã call $14 của B ở giữa chừng, khi lượt quay về, chỉ đối diện thêm $7, và với người đó không có gì mở lại: call hoặc fold.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in của B | All-in của C | Tổng phần tăng | Mở lại cho A? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — dưới $10 | ❌ Không |
| $14 (+$4) | $21 (+$7) | $11 — đạt $10 | ✅ Có |
| $15 (+$5) | $24 (+$9) | $14 — đạt $10 | ✅ Có |

</div>

Ngưỡng raise tối thiểu luôn là *mức bet hoặc raise đủ mức hợp lệ gần nhất* — không phải một tổng cộng dồn nào.

### Bảng quyết định nhanh — cú all-in này có mở lại vòng cược không?

Bảng này dành cho no-limit và pot-limit. Trong limit game, ngưỡng là nửa mức bet, không phải một raise đủ mức.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tình huống | Mở lại cho người đã hành động? |
|---|---|
| Một cú all-in < raise đủ mức | ❌ Không — chỉ call hoặc fold |
| Một cú all-in ≥ raise đủ mức | ✅ Có — tất cả được raise lại |
| Nhiều all-in ngắn, cộng lại < raise đủ mức | ❌ Không |
| Nhiều all-in ngắn, cộng lại ≥ raise đủ mức | ✅ Có — với từng người đang đối diện ít nhất một raise đủ mức so với hành động gần nhất của chính họ |
| Người CHƯA hành động | ✅ Giới hạn mở lại không bao giờ áp dụng cho họ — họ vẫn được raise, trong giới hạn cược của chính thể thức: cả stack ở no-limit, bằng pot ở pot-limit, mức bet cố định và trần số lần raise của phòng ở limit (TDA 2024 Luật 48) |

</div>

---

## Luật showdown khi có all-in

Khi có người all-in và mọi vòng cược đã xong, dealer xử lý từ side pot mới nhất lùi dần về main pot, bài tự nói — "cards speak" (bài tự nói) — và mỗi pot có thể về tay một người khác nhau. Trong giải đấu (tournament), mọi tay bài liên quan đều được lật ngửa; trong cash game no-limit, nếu vòng cược kết thúc trước river thì người all-in lật trước.

Khi mọi vòng cược kết thúc và có người đang all-in, showdown diễn ra như sau:

1. **Bài được lật ngửa.** Trong giải đấu, mọi tay bài liên quan đến cú all-in thường được lật ngay khi vòng cược hoàn tất. Trong cash game no-limit, điều đó tùy thời điểm vòng cược kết thúc: nếu kết thúc trước river, người đã đẩy all-in lật trước (WSOP Live Action Rule 149); nếu river có bet, áp dụng [luật showdown chuẩn theo người bet hoặc raise cuối cùng (last aggressor)](/vi/blog/holdem-showdown-rules).
2. **Side pot được chia trước.** Dealer xử lý side pot được tạo gần nhất trước, rồi lùi dần về main pot.
3. **Bài tự nói.** Tay bài mạnh nhất thắng từng pot mà nó có quyền tranh — bất kể người chơi nói mình có gì.
4. **Có thể có nhiều người thắng.** Người chơi A có thể thắng main pot. Người chơi B có thể thắng side pot. Không ai ôm trọn tất cả chỉ vì thắng "pot của mình".

==g:Một người có thể thắng main pot nhưng thua side pot. Cả hai kết quả đều hợp lệ.==

**Trường hợp đặc biệt:** nếu một side pot chỉ còn đúng một người (những người khác đã fold), người đó nhận lại số chip đó ngay — pot ấy không cần showdown.

---

## All-in sai thì chuyện gì xảy ra? — 5 lỗi cần tránh

Sau đủ nhiều pot all-in, bạn sẽ thấy sự hỗn loạn gần như luôn đến từ năm hiểu lầm cụ thể — không phải phép tính, mà là ai có quyền tranh pot nào. Tưởng người all-in thắng được side pot, hiểu sai quyền raise lại, lấy thêm chip giữa ván, muck (úp bài bỏ) quá vội, và all-in vì cay cú: năm lỗi này gây ra gần hết tranh cãi ở bàn.

### Lỗi 1: Nghĩ rằng người all-in stack ngắn nhất có thể thắng side pot

Không thể. Một khi người all-in với stack ngắn nhất đã bị giới hạn, mọi chip mà các stack lớn hơn cược vượt mức all-in của họ thuộc về một pot mà họ không có quyền tranh. Giới hạn này tính theo từng người: mỗi cú all-in chỉ chặn đúng lớp pot của chính nó — trong ví dụ 4 người ở trên, B all-in 200 vẫn được tranh side pot 1, chỉ không được tranh side pot 2.

### Lỗi 2: Không biết luật được raise lại

Trong no-limit và pot-limit, một cú all-in chưa đủ mức không cho người **đã hành động** trong vòng đó cơ hội raise lại lần hai — trừ khi nhiều cú all-in ngắn chồng lên nhau khiến một người trong số họ đối diện ít nhất một raise đủ mức khi lượt quay về. Ai chưa tới lượt vẫn được raise, với mức tổng tối thiểu như đã nêu ở trên. Thuộc lòng điều này giúp dập tắt tranh cãi trước cả khi nó bắt đầu.

### Lỗi 3: Lấy thêm chip từ túi giữa ván

Table stakes. Những gì trên bàn là tất cả những gì bạn được cược. Nếu bạn all-in $80 mà pot là $400, bạn chỉ thắng được $80 từ mỗi người call.

### Lỗi 4: Muck bài quá vội

Bạn đang all-in tranh main pot. Hai người còn lại đấu nhau giành side pot. Trong giải đấu, chuyện này tự giải quyết — khi vòng cược của họ kết thúc, ==TDA 2024 Luật 16== buộc mọi tay bài phải lật, kể cả của bạn. Trong cash game thì không: tôi từng thấy một short stack ném bài ngay khoảnh khắc showdown side pot đi ngược ý anh ta — quên mất rằng anh ta còn chẳng ở trong pot đó, và main pot vẫn đang chờ anh ta tranh. Khi dealer đã gạt bài vào đống muck, chúng không còn nhận dạng được — bài chết, và main pot đi về phía bên kia. (Một tay bài vẫn nhận dạng rõ được có thể được lấy lại theo quyết định của floor (người quản lý sàn), nhưng đừng bao giờ trông cậy vào điều đó.) Đừng muck — tay bài của bạn vẫn sống để tranh main pot. ==Luôn chờ dealer xử lý xong mọi pot rồi mới chạm vào bài của mình.==

### Lỗi 5: All-in vì cay cú

All-in là nước đi quyền lực nhất trên bàn. Nó ép đối thủ vào quyết định được ăn cả ngã về không. Sức mạnh đó biến mất khi bạn shove bừa bãi. Hãy dùng nó đúng lúc — gây áp lực khi short stack, tay bài giá trị bạn muốn được call, hoặc bluff với fold equity thật sự.

---

:::readnext[Đọc tiếp]
/vi/blog/texas-holdem-rules-for-beginners | Luật Texas Hold'em cho người mới | /images/rules-texas-holdem.webp
/vi/blog/holdem-showdown-rules | Luật showdown giải thích rõ | /images/holdem-showdown-rules-hero.webp
:::

## Câu hỏi thường gặp

**Q. Có được all-in ít hơn big blind không?**

A. Có. Nếu khoản blind bạn phải trả lớn hơn cả stack, bạn đặt số còn lại và all-in với đúng số đó (WSOP Live Action Rule 154). Những người khác vẫn call đủ big blind (mù lớn) — phần họ bỏ vào vượt mức đóng góp của bạn tạo thành side pot giữa họ, hoặc quay thẳng về một người duy nhất dưới dạng cược không ai theo.

**Q. Thắng phần all-in nhưng thua side pot thì sao?**

A. Bạn nhận main pot (phần bạn đã bỏ vào ngang với mỗi người chơi), còn người kia nhận side pot. Mỗi người thắng đúng phần mình có quyền tranh.

**Q. All-in có buộc phải lật bài không?**

A. Trong giải đấu, có — khi mọi vòng cược kết thúc với một cú all-in, mọi tay bài liên quan thường được lật ngửa. Trong cash game live, áp dụng luật showdown chuẩn — người bet hoặc raise cuối cùng ở river lật trước (nếu river check hết, người ở vị trí sớm nhất lật trước), rồi những người khác lật hoặc muck — trừ khi đó là no-limit và vòng cược kết thúc trước river, khi ấy người đã all-in lật trước (WSOP Live Action Rule 149).

**Q. Có được run it twice khi all-in trong poker không?**

A. Run it twice (chia phần bài còn lại hai lần và chia đôi pot) được phép ở nhiều cash game nếu, sau khi có người all-in và không còn hành động cược nào chờ xử lý, tất cả những người còn trong pot đồng ý — không chỉ hai người (WSOP Live Action Rules 210 và 211). Trong giải đấu thì thường không được phép. Phải thống nhất trước khi các lá bài chung còn lại được chia ra.

**Q. Luật "table stakes" chính xác là gì?**

A. Table stakes nghĩa là bạn chỉ được cược số chip có trước mặt khi ván bài bắt đầu. Không được thêm tiền khi ván đang diễn ra. Luật này bảo vệ cả hai phía — bạn không bao giờ bị ép rủi ro nhiều hơn stack của mình, và phần đối thủ cược vượt quá stack của bạn không thể làm bạn mất gì: nó đi vào side pot hoặc quay về họ dưới dạng cược không ai theo.

**Q. Hai người all-in với số chip khác nhau thì ai lật bài trước?**

A. Cú all-in cuối cùng mang tính bet hoặc raise là hành động tấn công cuối và lật trước. Một cú all-in chỉ là call với số ít hơn thì không phải hành động tấn công — trong cash game, người bet ban đầu vẫn lật trước khi vòng cược kết thúc ở river (ở no-limit, nếu kết thúc trước river, người đã đẩy all-in lật trước); và khi có side pot, luật WSOP Live Action xét theo pot: ai trong side pot lật trước người chỉ all-in tranh main pot (Rule 149). ==r:Trong giải đấu hoàn toàn không có thứ tự "ai lật trước" ở đây== — khi vòng cược all-in hoàn tất, mọi tay bài liên quan được lật ngửa cùng lúc (TDA 2024 Luật 16); luật đặt ra thứ tự lật, TDA 2024 Luật 17, chỉ áp dụng cho showdown không có all-in. Trong cash game, nếu đó là một cú all-in được call mà không còn hành động nào sau, người call có thể muck nếu thua sau khi xem bài của người all-in (trong giải đấu, mọi tay bài liên quan vẫn phải lật ngửa).

**Q. Luật all-in trong giải đấu và cash game có khác nhau không?**

A. Luật cốt lõi giống nhau, nhưng có hai khác biệt thực tế. Thứ nhất, trong giải đấu mọi tay bài liên quan đến cú all-in được lật ngửa ngay khi vòng cược hoàn tất (TDA 2024 Luật 16) — bạn không được muck cho tới showdown. Trong cash game, áp dụng thứ tự showdown chuẩn — trừ khi đó là no-limit và vòng cược kết thúc trước river, khi ấy người all-in lật trước (Live Action Rule 149) — và người chơi được muck. Thứ hai, run it twice phổ biến ở cash game (nếu tất cả những người còn trong pot đồng ý) nhưng thường không được phép trong giải đấu.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Kiến thức nền tảng</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Luật Texas Hold'em cho người mới</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Trọn bộ luật từ blind tới showdown</div>
  </a>
  <a href="/vi/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Chia pot</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Luật chia pot (split pot) và chop</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Khi nào pot được chia và vì sao</div>
  </a>
  <a href="/vi/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Luật showdown</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Ai lật bài trước và khi nào được muck</div>
  </a>
</div>
`.trim(),
};
