import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-betting-actions",
  title: "Các hành động cược trong Texas Hold'em: check, call, raise, fold",
  seoTitle: "Check, call hay fold? — Luật raise và hành động cược poker",
  desc: "Đến lượt bạn mà đầu óc trống rỗng? Check, call, raise, fold trong poker là gì, luật min-raise tính thế nào và bạn được raise lại bao nhiêu lần.",
  tldr: "Texas Hold'em có 5 hành động cược: check (nhường lượt không mất chip), bet (mở vòng cược), call (trả bằng mức cược), raise (tăng cược — mức raise tối thiểu bằng khoản bet hoặc raise đủ mức gần nhất) và fold (bỏ bài). Bạn chỉ được check khi trước mặt không có khoản cược nào đang mở — ở preflop, thường chỉ big blind (hoặc người đã đặt straddle còn hiệu lực) được check.",
  category: "rules",
  date: "2026-06-14",
  updated: "2026-10-09",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "9 phút",
  emoji: "🃏",
  tags: [
    "check trong poker là gì",
    "call trong poker là gì",
    "raise trong poker là gì",
    "fold trong poker là gì",
    "luật raise trong poker",
    "min raise trong poker",
    "khi nào được check trong poker",
    "string bet",
  ],
  image: "/images/holdem-betting-actions-hero.webp",
  imageAlt: "Bàn Texas Hold'em với các cọc chip CHECK, CALL, RAISE, FOLD — một người chơi cầm bài tẩy trong lúc cân nhắc hành động",
  content: `
Buổi chơi live đầu tiên của tôi, dealer (người chia bài) nói "action is on you" — đến lượt bạn — và tôi đứng hình, im lặng trọn mấy giây trong khi cả bàn nhìn chằm chằm.

Check? Call? Raise? Tôi thuộc lòng thứ hạng tay bài. Thứ tôi thật sự không nắm là ==luật của chính các hành động cược== — và đó là khoảng trống bài này lấp đầy.

Texas Hold'em chỉ có ==5 hành động cược==, nhưng những luật xoay quanh chúng (khi nào được check, raise phải lớn bao nhiêu, được raise lại bao nhiêu lần) khiến người mới loay hoay hàng tuần liền. Nếu bạn hoàn toàn mới, hãy đọc lướt [hướng dẫn luật chơi Texas Hold'em đầy đủ](/vi/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") trước — rồi quay lại đây để nắm cuốn luật cho từng hành động một.

---

### Tóm tắt nhanh

:::stripe
5 | hành động cược: check, bet, call, raise, fold
1 BB | mức bet mở tối thiểu trong No-Limit Hold'em
= raise đủ mức gần nhất | mức re-raise tối thiểu (luật mức tăng)
Không giới hạn | số lần re-raise trong No-Limit — bạn có thể raise đến khi ai đó all-in
:::

## 5 hành động cược trong Texas Hold'em là gì?

Năm hành động cược trong Texas Hold'em là check (nhường lượt, không bỏ thêm chip), bet (khoản cược đầu tiên mở vòng cược), call (trả đúng bằng mức cược đang mở), raise (tăng mức cược lên) và fold (bỏ bài, rời ván). Hành động nào được phép phụ thuộc vào một câu hỏi duy nhất: trước mặt bạn đã có khoản cược nào cần trả hay chưa.

Mọi quyết định bạn đưa ra ở bàn poker đều là một trong năm hành động này:

| Hành động | Khi nào được dùng | Tốn chip |
|--------|---------------|-----------|
| Fold | Bất cứ lúc nào đến lượt bạn | Không mất thêm — nhưng số chip đã bỏ vào pot thì mất |
| Check | Chỉ khi trước mặt bạn không có khoản cược nào đang mở (preflop: khi bạn là big blind, hoặc là người đã đặt straddle còn hiệu lực) | Không mất thêm — bạn nhường lượt mà không thêm chip |
| Call | Sau khi có người đã bet hoặc raise | Bạn trả đúng bằng mức cược hiện tại |
| Bet | Khoản cược đầu tiên của vòng | Số tiền bạn chọn (tối thiểu = 1 big blind) |
| Raise | Sau khi có người đã bet | Cộng thêm ít nhất bằng khoản bet hoặc raise đủ mức gần nhất |

Ở bàn Việt Nam bạn sẽ nghe cả tiếng Anh lẫn tiếng Việt: call = theo, raise = tố, fold = bỏ bài, all-in = tất tay — bài này dùng tên tiếng Anh vì đó là cách bạn tìm kiếm và nghe ở bàn. Gặp từ nào lạ, bạn tra [thuật ngữ poker](/vi/glossary) là ra.

Đi ==all-in== không phải là hành động thứ sáu riêng biệt — đó là một khoản bet, call hoặc raise bằng toàn bộ số chip bạn còn lại. Chi tiết ở phần dưới.

Luật quan trọng nhất mà người mới hay bỏ sót: ==r:bạn không thể check khi trước mặt đã có khoản cược đang mở==. Ngay khi trong pot có chip bạn chưa trả, lựa chọn của bạn thu hẹp còn fold, call hoặc raise.

---

## Check trong poker là gì?

Check là hành động giữ nguyên hiện trạng: bạn không bỏ thêm chip nào, không mở vòng cược, nhưng vẫn giữ bài và chuyển lượt cho người bên trái. Check chỉ tồn tại khi chưa có khoản cược nào trước mặt bạn; trên bàn online, đó là nút/lệnh Check hiện lên thay cho nút Call. Nếu có người bet sau đó, bạn sẽ được quyết định lại.

Check nghĩa là: ==g:"Tôi nhường lượt — không bet, nhưng tôi vẫn ở lại ván bài."==

Nó không tốn gì cả. Ở poker live, bạn ra hiệu bằng cách gõ nhẹ lên mặt bàn hoặc nói "check". Lượt hành động chuyển sang người chơi bên trái bạn. Nếu cả bàn cùng check, lá bài chung (board) tiếp theo được chia — hoặc ở river thì đi thẳng tới showdown (lật bài).

Check không phải là đầu hàng. Bạn vẫn giữ bài, vẫn giữ mọi lựa chọn, và chưa phải trả gì để xem điều gì xảy ra tiếp theo.

---

## Khi nào được check trong poker?

Bạn được check đúng khi không có khoản cược nào đang mở trước mặt mình: hoặc chưa ai bet trong vòng cược hiện tại, hoặc chính khoản bạn đã đặt sẵn (big blind, hay straddle còn hiệu lực) là mức cược mà cả bàn phải trả và không ai raise. Hễ có người bet hoặc raise trước lượt bạn, quyền check biến mất — chỉ còn fold, call hoặc raise.

Bạn có thể check trong hai kiểu tình huống:

- **Chưa có ai bet** trong vòng cược hiện tại (flop, turn hoặc river)
- **Bạn là big blind (mù lớn) ở preflop và không ai raise hay straddle** — khoản blind (mù — cược bắt buộc) của bạn đã được tính là một khoản cược đang mở, nên bạn được check và xem flop miễn phí (người đặt straddle (blind tự nguyện) còn hiệu lực cũng vậy, nếu không ai raise hay re-straddle sau họ)

Nếu có người bet sau khi bạn check, bạn đứng trước một quyết định mới: fold, call hoặc raise. Check trước rồi raise khi đối thủ bet được gọi là ==check-raise== — hoàn toàn hợp lệ trong Texas Hold'em và là một vũ khí tiêu chuẩn, không phải chiêu trò.

Để thấy toàn cảnh ai hành động lúc nào qua từng vòng cược, hãy xem [thứ tự chơi trong Texas Hold'em](/vi/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp").

---

## "Call" trong poker có nghĩa là gì? Check và call khác nhau ở đâu

Call là trả đúng số chip bằng mức cược đang mở để tiếp tục ván bài — không hơn, không kém. Khác biệt với check nằm ở điều kiện: check chỉ có khi chưa ai bet, còn call chỉ có sau khi đã có người bet hoặc raise. Nói cách khác, cùng một ý "tôi vẫn ở lại", nhưng check không tốn chip, còn call thì phải trả tiền.

Call nghĩa là bạn ==trả đúng bằng mức cược hiện tại== để ở lại ván bài. Ai đó bet $10, bạn theo $10 — không hơn, không kém. (Còn dưới $10 thì bạn vẫn call được: bạn all-in với số chip mình có.)

Check và call là nhầm lẫn phổ biến nhất của người mới, nên đây là cách tách bạch:

| | Check | Call |
|-|-------|------|
| Khi nào tồn tại | Trước mặt bạn không có khoản cược đang mở (preflop: khi bạn là big blind, hoặc là người đã đặt straddle còn hiệu lực) | Đã có người bet trước bạn |
| Tốn chip | Không | Bạn trả bằng mức cược hiện tại |
| Ý nghĩa | "Tôi nhường lượt, vẫn ở lại" | "Tôi trả tiền để đi tiếp" |

Ví dụ thực tế: bạn ở flop với K♠ 8♦. Chưa ai bet, nên bạn ==check==. Người kế tiếp bet $10. Giờ lựa chọn của bạn là ==call== $10, ==raise== (lên $20 trở lên) hoặc ==fold==. Check đã biến mất — cánh cửa đó khép lại ngay khi khoản bet được đẩy vào.

---

## Fold poker là gì — có được fold bất cứ lúc nào không?

Fold là úp bài trả cho dealer và rút khỏi ván: bạn không phải bỏ thêm chip, nhưng cũng không còn cơ hội thắng pot. Bạn được fold ở bất kỳ lúc nào đến lượt mình, và quyết định đó không rút lại được. Điểm cần nhớ: fold khi chưa ai bet là bỏ tay bài một cách vô ích — trong tình huống đó, check miễn phí luôn tốt hơn.

Fold nghĩa là bạn bỏ bài và rời khỏi ván. Bạn không phải trả thêm gì, nhưng ==r:mọi chip bạn đã bỏ vào trước đó vẫn nằm lại trong pot==.

Có — mỗi khi đến lượt, bạn đều có thể fold, kể cả khi chưa bet gì, và cú fold đó có hiệu lực ràng buộc. Nhưng không phải là không có hệ quả: trong giải đấu (tournament), fold khi trước mặt không có khoản cược nào bị tính là "non-standard fold" theo ==WSOP Rule 84== và có thể bị cảnh cáo. Và hãy để ý cái bẫy: **fold khi bạn có thể check miễn phí là vứt đi một tay bài vô cớ**. Nếu chưa ai bet, cứ check.

Một quy tắc ứng xử ở bàn live: đừng fold ==trước lượt==. Hãy đợi đến khi lượt hành động tới bạn — bỏ bài sớm để lộ thông tin cho những người còn đang cân nhắc, và hầu hết phòng bài sẽ nhắc nhở hoặc phạt. Biết *khi nào* fold mới là nước đi đúng lại là một kỹ năng riêng — chủ đề đó nằm trong bài [khi nào nên bỏ bài trong poker](/vi/blog/holdem-when-to-fold).

---

## Raise trong poker là gì — min-raise tính thế nào?

Raise là tăng mức cược đang mở lên, với phần cộng thêm ít nhất bằng khoản bet hoặc raise đủ mức (full raise) gần nhất. Mức tối thiểu đó gọi là min-raise (mức raise tối thiểu): nó tính theo mức tăng của lần bet hoặc raise trước, chứ không theo big blind. Mức tối đa là toàn bộ stack của bạn — đó chính là nghĩa của hai chữ "no limit".

![Infographic minh họa luật min-raise trong poker: khoản bet $6 buộc raise lên ít nhất $12, và khoản raise preflop lên $6 buộc re-raise tối thiểu lên $10](/images/holdem-betting-actions-min-raise.webp "Luật min-raise — mỗi lần raise phải cộng thêm ít nhất bằng khoản bet hoặc raise đủ mức gần nhất; chỉ all-in mới được nhỏ hơn")

Trong No-Limit Hold'em (thể thức bạn gần như luôn chơi):

- **Bet tối thiểu**: 1 big blind
- **Raise tối thiểu (min-raise)**: cộng thêm ít nhất ==bằng khoản bet hoặc raise đủ mức gần nhất==
- **Tối đa**: toàn bộ stack của bạn — đó chính là chữ "no limit"

Hai ví dụ tính sẵn:

| Vòng cược | Diễn biến | Raise tối thiểu |
|--------|--------------|---------------|
| Flop | Một người bet $6 | Thêm $6 → tổng $12 |
| Preflop (blind $1/$2) | Một người raise lên $6 (tăng $4 so với big blind $2) | Thêm $4 → tổng $10 |

Điểm mấu chốt: min-raise khớp với ==mức tăng== của khoản bet hoặc raise đủ mức gần nhất, chứ không phải big blind. (Chữ "đủ mức" quan trọng khi có người all-in ít hơn một mức raise: sau một khoản bet $10 và một cú all-in $14, mức tăng cần khớp vẫn là $10, nên raise nhỏ nhất là lên $24.) Ở preflop, big blind được tính là khoản bet mở, vì thế mức raise mở nhỏ nhất là lên 2 big blind.

Hai luật poker live đi kèm với việc raise:

1. **Hô "raise" — kèm số tiền — trước khi đẩy chip.** Nói "call" rồi mới đẩy thêm? Lời hô của bạn đã có hiệu lực ràng buộc (==Rule 90.d==) — phần thêm không được tính. ==String bet== (đẩy chip nhiều nhịp) thật sự là chuyện khác: một khoản bet hoặc raise được đẩy bằng nhiều động tác có quay lại stack **mà không** hô "raise" trước — hoặc một cử chỉ đánh lừa nhằm khiến người khác hành động trước lượt (==Rule 103==).
2. **Một động tác duy nhất.** Nếu không hô, chip của bạn phải được đẩy vào trong một động tác tiến duy nhất.

Nên raise *bao nhiêu* (mở 2,5x, 3-bet (re-raise, tố lại) 3x, chọn cỡ cược theo cấu trúc board) là chuyện chiến thuật, không phải luật — phần đó nằm ở [trụ cột chiến thuật Texas Hold'em](/vi/blog/holdem-strategy).

---

## Được raise bao nhiêu lần trong poker?

Trong No-Limit Hold'em, số lần raise trong một vòng cược không bị giới hạn: raise, re-raise, rồi raise tiếp cho tới khi có người all-in, miễn mỗi lần đều đạt mức tăng tối thiểu. Chỉ Fixed-Limit mới đặt trần — luật giải đấu WSOP là một bet cộng bốn raise mỗi vòng. Và dù ở thể thức nào, bạn không bao giờ được raise chính khoản bet của mình.

Trong **No-Limit Hold'em: không có mức trần**. Bạn có thể raise, bị re-raise, rồi raise tiếp ("re-raise", "raise một cú raise" — cùng một thứ) cho đến khi ai đó hết chip. Raise → 3-bet → 4-bet → 5-bet → all-in là một chuỗi hoàn toàn hợp lệ, dù có phần đáng sợ.

Vẫn có hai ranh giới:

- Mỗi lần re-raise phải đạt ==luật mức tăng min-raise== ở trên — ngoại lệ duy nhất là all-in, có thể nhỏ hơn
- ==r:Bạn không được raise chính khoản bet của mình.== Nếu bạn bet và tất cả chỉ call, vòng cược kết thúc — bạn chỉ được raise tiếp nếu có ai đó raise *bạn* trước

Ở các bàn **Fixed-Limit**, mỗi vòng đều bị giới hạn (pot bị "cap"). Luật giải đấu WSOP đặt trần ở ==một bet cộng bốn raise== (Rule 100.b) — và ngoại lệ chạy ngược với điều hầu hết mọi người tưởng: ==r:mức trần vẫn giữ nguyên ngay cả khi ván bài chỉ còn hai người==. Nó chỉ được gỡ khi **cả giải đấu** còn lại hai người. Cash game chạy theo luật nhà riêng, nên hãy hỏi dealer.

---

## Đi all-in nghĩa là gì?

All-in (tất tay) là đẩy toàn bộ chip còn lại của bạn vào pot, dưới dạng bet, call hoặc raise tùy lựa chọn nào đang mở với bạn lúc đó. Nó không phải hành động thứ sáu. Điều quan trọng là bạn không bao giờ bị loại chỉ vì ít chip hơn: all-in ngắn hơn mức cược vẫn tranh phần pot tương ứng với số chip mình bỏ vào.

All-in nghĩa là cược ==toàn bộ số chip bạn còn lại==. Bạn có thể làm vậy khi đến lượt mình dưới dạng một khoản bet, một cú call hoặc một cú raise — tùy lựa chọn nào đang mở với bạn lúc đó.

Nếu khoản all-in của bạn *nhỏ hơn* mức cược hiện tại, bạn không bị loại: bạn chỉ tranh ==main pot (pot chính)== bị giới hạn theo phần đóng góp của mình, còn phần chip dư từ các stack lớn hơn tạo thành ==side pot (pot phụ)== mà bạn không thể thắng. (Nếu có người còn ngắn hơn bạn, bạn vẫn tranh side pot mà họ không với tới — mỗi cú all-in chỉ giới hạn đúng tầng của nó.) Và một khoản all-in *nhỏ hơn một min-raise đủ mức* thường không mở lại quyền raise cho những người đã hành động — một luật tinh vi khiến cả người chơi lâu năm cũng bất ngờ.

Toàn bộ cơ chế — cách tính side pot, ai lật bài trước, table stakes (chỉ được cược số chip trên bàn) — nằm trong [luật all-in và side pot](/vi/blog/holdem-all-in-rules), còn chuyện gì xảy ra khi các tay bài all-in hòa nhau thì ở [luật chia pot (split pot) và chop](/vi/blog/holdem-split-pot-rules).

---

## Biết hành động mới là bước một — chọn hành động nào là chiến thuật

Luật cho bạn biết hành động nào hợp lệ; chiến thuật mới quyết định hành động nào có lời. Hai thứ này là hai kỹ năng tách biệt: thuộc luật không làm bạn thắng, nhưng không thuộc luật thì bạn mất chip trước cả khi kịp dùng chiến thuật. Bài này dừng ở phần luật — ba bài dưới đây là nơi bắt đầu phần còn lại.

Bài này nói về việc mỗi hành động *là gì* và khi nào nó *hợp lệ*. Còn chọn hành động nào — khi nào nên bet, khi nào call là có lời, khi nào một tay bài đẹp vẫn phải fold — lại là một nhánh kỹ năng khác:

- Khung tư duy cho mọi quyết định: [chiến thuật Texas Hold'em — 5 quyết định](/vi/blog/holdem-strategy)
- Đánh giá sức mạnh thô của tay bài trước tiên: [thứ hạng tay bài poker](/vi/blog/holdem-hand-rankings)
- Vì sao ghế ngồi thay đổi tất cả: [các vị trí trong poker, giải thích rõ](/vi/blog/holdem-positions)

Một quy tắc bỏ túi giúp người mới giữ được tiền thật trong lúc chờ học sâu hơn: ==nếu tay bài không đủ mạnh để raise, fold thường tốt hơn call.==

---

## Những lỗi cược ở bàn live tôi gặp mỗi tuần

Bốn lỗi dưới đây không phải lỗi chiến thuật mà là lỗi luật, và chúng tốn chip thật: call khi có thể check, đổi ý sau khi đã hô, big blind fold một flop miễn phí, và ném một lá chip lớn mà không nói gì. Điểm chung là người chơi hành động trước khi hiểu dealer sẽ xử thế nào — mỗi lỗi đều có một điều luật WSOP cụ thể đứng sau.

Tôi chơi một bàn live mức cược thấp hàng tuần, và những lỗi hành động y hệt nhau lặp lại đều như đồng hồ:

### Lỗi 1 — Call trong khi có thể check

Là người hành động đầu tiên ở flop, chưa ai bet, thế mà một người chơi mới **lẳng lặng** đẩy chip vào, "để call". Chẳng có gì để call cả: theo ==WSOP Rule 90.a==, một khoản bet được thực hiện bằng lời hô *hoặc* bằng việc đẩy chip ra — anh ta vừa bet mà không hề có ý định đó. Nếu anh ta *nói* "call", ==Rule 90.b.1== đã tính đó là một cú check. Khi vòng cược chưa được mở, hãy check — nếu không ai bet sau bạn, bạn xem lá bài kế tiếp miễn phí.

### Lỗi 2 — "Call"... à không, "raise"!

"Call... à không, raise!" Không được. Ở poker live, hành động của bạn bị khóa ngay khoảnh khắc bạn hô ra — theo ==Rule 90.d==, lời tuyên bố đúng lượt có tính ràng buộc. (Nhân tiện, đó không phải string bet; string bet là kiểu đẩy chip nhiều nhịp có quay lại stack, nói trong phần Câu hỏi thường gặp. Kết quả thì như nhau: lời đầu tiên có hiệu lực.) Tôi đã chứng kiến dealer xử tình huống này thành một cú call ngay giữa câu nhiều hơn số lần tôi đếm được. Hô "raise" *trước* (hay hô "tố", nếu bàn bạn nói tiếng Việt) — rồi mới đẩy chip.

### Lỗi 3 — Big blind fold một flop miễn phí

Cả bàn limp, lượt tới big blind... và họ fold. Đó là ném một flop miễn phí vào đống bài muck (úp bài bỏ). ==g:Nếu không ai raise, BB có thể check và xem ba lá bài mà không tốn thêm chip nào== — khoản blind đã nằm sẵn trong pot. Chuyện này xảy ra ở đúng nghĩa mọi vòng bàn.

### Lỗi 4 — Một lá chip đẩy ra trong im lặng

Đối mặt khoản bet $10, một người chơi lẳng lặng ném vào một lá chip $100 duy nhất, vừa mong được thối lại *vừa* muốn tính là raise. ==Luật một chip (one-chip rule)== được ghi nguyên văn trong luật WSOP (==Rule 97==): một lá chip mệnh giá lớn đẩy ra mà không hô gì chỉ được tính là call. Muốn raise, chữ "raise" phải bật ra **trước khi chip chạm mặt bàn**.

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-all-in-rules | Luật all-in và side pot | /images/holdem-all-in-rules-hero.webp
/vi/blog/holdem-strategy | Chiến thuật Texas Hold'em: 5 quyết định | /images/holdem-strategy-hero.webp
:::

## Câu hỏi thường gặp

**Q. Đã check rồi có được raise trong poker không?**

A. Có — nếu ai đó bet sau khi bạn check, bạn được raise khi lượt hành động quay lại. Đó chính là check-raise, và nó hoàn toàn hợp lệ. Nếu tất cả những người sau bạn cũng check, thì không có khoản bet nào để raise và vòng cược đơn giản là kết thúc.

**Q. Có được raise chính khoản bet của mình không?**

A. Không. Nếu bạn bet và các đối thủ chỉ call, bạn không được thêm chip — vòng cược kết thúc. Ở No-Limit và Pot-Limit, bạn chỉ được raise tiếp nếu lượt hành động quay lại bạn với ít nhất một mức raise đủ mức trên khoản bet của bạn — dù do một người thực hiện hay do nhiều cú all-in ngắn cộng dồn lại; một cú all-in đơn lẻ nhỏ hơn một mức raise đủ mức không mở lại hành động. Ở Fixed-Limit ngưỡng thấp hơn: một cú all-in bằng ít nhất 50% của một bet hoặc raise đủ mức là mở lại được (TDA 2024 Rule 47-B).

**Q. Được raise bao nhiêu lần trong Texas Hold'em?**

A. Trong No-Limit không có mức trần cho số lần raise — có thể re-raise cho đến khi một người chơi all-in, miễn là mỗi lần raise đạt mức tăng tối thiểu (all-in thì được phép nhỏ hơn). Luật giải đấu WSOP giới hạn một vòng Fixed-Limit ở một bet cộng bốn raise (Rule 100.b), và mức trần này vẫn giữ ngay cả khi ván bài chỉ còn hai người — nó chỉ được gỡ khi cả giải đấu đã đến heads-up.

**Q. Fold khi chưa đến lượt có được không?**

A. Không nên. Lượt hành động phải đi theo chiều kim đồng hồ đúng thứ tự, và một cú fold trước lượt làm rò rỉ thông tin cho những người còn đang cân nhắc. Hầu hết phòng bài coi đó là hành động ràng buộc và có thể cảnh cáo hoặc phạt nếu tái phạm. Hãy đợi người bên phải bạn hành động xong.

**Q. Ở preflop có được check không?**

A. Chỉ khi chính khoản bạn đã đặt sẵn là mức cược đang mở đủ mức mà mọi người khác phải trả và không ai raise — thông thường là big blind khi không ai straddle, hoặc người đặt straddle còn hiệu lực khi có straddle (WSOP Live Action Rules 159 · 165): khoản đặt sẵn đó được tính là bet mở của bạn, nên bạn được check để xem flop miễn phí. Nửa bet của small blind (mù nhỏ) không bao giờ đủ điều kiện, và trong pot có straddle thì big blind chỉ là một người chơi bình thường đang đối mặt một khoản cược — mọi vị trí mà khoản đặt sẵn của mình không phải mức cược đang mở đó đều phải call, raise hoặc fold ở preflop.

**Q. Có được raise sau khi một người đã all-in không?**

A. Tùy cỡ của cú all-in. Nếu cú all-in là một mức raise hợp lệ đủ mức, hành động được mở lại và bạn có thể re-raise — với điều kiện còn ít nhất một đối thủ chưa all-in vẫn trong ván; heads-up đối đầu một cú all-in thì không còn ai để raise vào, bạn chỉ có thể call hoặc fold. Nếu nó *nhỏ hơn* một min-raise đủ mức, những người đã hành động thường chỉ được call hoặc fold — ở hầu hết phòng bài, cú all-in ngắn đó không mở lại quyền raise cho họ.

**Q. String bet trong poker là gì?**

A. Là cố bet hoặc raise bằng nhiều động tác — quay lại stack ở giữa chừng — mà không hô "raise" trước (==Rule 103==). Động tác thứ hai không bao giờ được tính — chỉ phần chip đầu tiên có hiệu lực, và được xét trước theo luật call bằng một chip hoặc nhiều chip (TDA 2024 Rules 44–45). Ở nơi áp dụng ngưỡng nửa mức tối thiểu của Rule 43-A, hãy đo phần tăng thêm so với mức call chứ không phải tổng số chip: dưới một nửa khoản bet hoặc raise đủ mức lớn nhất trước đó là call; từ một nửa trở lên thì phải raise đủ min-raise. Lời hô "raise" từ trước hoặc một cú all-in được xử theo luật riêng của nó. Rule 103 cũng cấm cử chỉ đánh lừa nhằm khiến người khác hành động trước lượt khi hành động của bạn chưa hoàn tất. Nói "call" rồi mới thêm chip không phải string bet mà là lời tuyên bố ràng buộc (==Rule 90.d==) — hệ quả như nhau. Hãy hô hành động bằng lời — "raise" kèm số tiền đầy đủ — hoặc đẩy toàn bộ chip trong một động tác duy nhất (TDA 2024 Rule 42).

**Q. Limp trong poker nghĩa là gì?**

A. Limp là vào pot ở preflop bằng cách chỉ call big blind thay vì raise. Hợp lệ nhưng thường là lối chơi yếu — xem [vì sao limp làm bạn mất tiền](/vi/blog/holdem-limping) để biết khi nào limp thật sự ổn.

**Q. Bet trong poker là gì?**

A. Bet là khoản cược đầu tiên của một vòng cược — khi chưa ai bỏ chip vào, bạn đặt cược để mở vòng. Trong No-Limit Hold'em, mức bet tối thiểu là 1 big blind, tối đa là toàn bộ stack. Trong tiếng Việt, "cược" hay "đặt cược" đều chỉ hành động này. All-in không phải một hành động riêng: đó chỉ là bet, call hoặc raise bằng toàn bộ chip bạn còn lại.

**Q. Cách tính min raise trong poker như thế nào?**

A. Min-raise bằng mức cược hiện tại cộng thêm đúng mức tăng của khoản bet hoặc raise đủ mức gần nhất. Ở flop, đối thủ bet $6 thì bạn phải raise lên ít nhất $12 (thêm $6). Ở preflop với blind $1/$2, một người raise lên $6 là tăng $4 so với big blind $2, nên re-raise tối thiểu là lên $10 (thêm $4). Chỉ raise đủ mức mới đặt lại mức tăng: sau một khoản bet $10 và một cú all-in $14, mức tăng vẫn là $10, nên raise nhỏ nhất là lên $24.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Kiến thức nền tảng</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Luật chơi Texas Hold'em cho người mới</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Hướng dẫn luật đầy đủ — từ blind đến showdown</div>
  </a>
  <a href="/vi/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Trình tự ván bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Thứ tự chơi trong Texas Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Từ preflop đến river với ví dụ tay bài thực tế</div>
  </a>
  <a href="/vi/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blind</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Small blind và big blind, giải thích rõ</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Vì sao bạn phải trả tiền trước khi thấy bài</div>
  </a>
</div>
`.trim(),
};
