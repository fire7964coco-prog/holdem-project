import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-glossary",
  title: "Ở bàn poker họ đang nói gì? Từ poker tiếng Anh và các cặp dễ nhầm",
  seoTitle: "Ở bàn poker họ nói gì? — Từ poker tiếng Anh nghĩa là gì",
  desc: "Ván live đầu tiên, tôi gật đầu như hiểu hết dù chẳng hiểu gì. Từ poker tiếng Anh nghĩa là gì, tiếng Việt gọi sao, cặp nào dễ nhầm — theo tình huống.",
  tldr: "Đây là bảng giải nghĩa những từ poker tiếng Anh thật sự xuất hiện trong một ván Texas Hold'em, xếp theo cách bạn gặp chúng: hành động bet, vị trí, bài và board, kiểu người chơi, tiền và tình huống ở bàn. Hãy bắt đầu từ các cặp dễ nhầm nhất (check với call, set với trips, cooler với bad beat), rồi lướt theo từng nhóm. Từ nào có bài hướng dẫn sâu hơn sẽ dẫn thẳng tới bài đó.",
  category: "glossary",
  date: "2026-10-09",
  updated: "2026-10-09",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "12 phút",
  emoji: "📖",
  image: "/images/holdem-glossary-hero.webp",
  imageAlt: "Bàn Texas Hold'em với chip, nút dealer và các lá bài chung trải trên mặt nỉ xanh, tượng trưng cho ngôn ngữ của poker",
  tags: ["từ poker tiếng Anh", "tiếng lóng poker", "cách gọi ở bàn poker", "check và call khác nhau", "set và trips", "từ poker tiếng Việt", "các từ dễ nhầm trong poker", "Texas Hold'em"],
  content: `
Ván live đầu tiên của tôi, cả bàn như đang nói một thứ tiếng khác. Ai đó đang "under the gun", một gã khác vừa "three-bet the cutoff", dealer hỏi tôi có muốn "run it twice" không, và khi tôi thua với đôi K, người ta bảo đó "thậm chí không phải bad beat, chỉ là một [cooler](/vi/blog/holdem-cooler "thumb:/images/holdem-cooler-hero.webp") thôi". Tôi gật đầu như hiểu hết. Tôi chẳng hiểu gì.

Poker có vốn từ riêng, và biết nó làm được hai việc: nó giúp bạn không trông giống một [fish](/vi/blog/holdem-fish "thumb:/images/holdem-fish-hero.webp"), và nó cho bạn thật sự theo kịp thứ chiến thuật làm ra tiền. Nếu bạn chỉ cần tra nhanh một từ, [thuật ngữ poker](/vi/glossary) có bản tra cứu theo chữ cái; bài này thì gom những từ thật sự xuất hiện ở bàn Texas Hold'em và xếp theo ==g:tình huống bạn gặp chúng==, chứ không đổ hết vào một bức tường A-đến-Z khổng lồ. Hãy bắt đầu từ những từ người ta nhầm nhiều nhất, rồi lướt tới nhóm bạn cần. Từ nào có bài hướng dẫn đầy đủ, bạn sẽ thấy đường dẫn thẳng tới đó.

---

### Tóm tắt nhanh

:::stripe
6 | Nhóm từ, xếp theo cách bạn gặp chúng
90+ | Từ được giải nghĩa bằng lời dễ hiểu
8 | Cặp "dễ nhầm nhất", gỡ rối trước tiên
→ | Bài hướng dẫn sâu hơn dẫn từ các từ then chốt
:::

---

## Cặp từ nào trong poker dễ nhầm nhất? Check/call, set/trips, cooler/bad beat

Nếu bạn chỉ gỡ rối được một tá từ, hãy chọn những cặp này — chúng gây nhiều nhầm lẫn (và nhiều sai lầm tốn kém) nhất ở bàn:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Hay bị nhầm | Khác nhau ở đâu |
|:---|:---|
| **Check vs Call** | Check không mất **chip nào** (chỉ khi không có khoản cược nào đang chờ bạn theo); call (theo) là **theo đủ** một khoản cược đã có. |
| **Blind vs Ante** | Blind là cược bắt buộc **theo vị trí** (SB/BB); ante gieo hạt cho pot — theo truyền thống từ **mọi người**, dù hầu hết giải đấu ngày nay dùng big blind ante do một ghế trả. |
| **Set vs Trips** | Cả hai đều là sám cô (bộ ba) — **set** là cầm đôi trên tay + 1 lá trên board; **trips** là 1 lá trên tay + board có đôi. |
| **Cooler vs Bad Beat** | [Cooler](/vi/blog/holdem-cooler) = tay quá mạnh để fold gặp tay lớn hơn (theo nghĩa chặt, bạn bị dẫn ngay lúc tiền vào); [bad beat](/vi/blog/holdem-bad-beat) = bạn là favorite lớn lúc tiền vào rồi bị thua ngược. |
| **Value bet vs Bluff** | Value bet muốn **được call bởi tay yếu hơn**; bluff muốn **tay mạnh hơn fold**. |
| **Pot odds vs Implied odds** | [Pot odds](/vi/blog/holdem-pot-odds) chỉ tính chip **đang trong pot lúc này**; implied odds cộng thêm phần bạn **sẽ thắng sau**. |
| **VPIP vs PFR** | VPIP = bạn **chơi** bao nhiêu ván; PFR = bạn **raise** bao nhiêu ván. PFR không bao giờ vượt VPIP. |
| **Đếm 3-bet** | Blind là bet 1, cú open-raise là bet 2, nên **cú re-raise mới là 3-bet** (không phải cú raise đầu). |

</div>

---

## Thùng, sảnh, cù lũ… từ poker tiếng Anh tiếng Việt gọi là gì?

Ở bàn Việt Nam, tên các tay bài đi bằng tiếng Việt, còn hành động và cấu trúc ván đi bằng tiếng Anh — bảng này đối chiếu phần tiếng Việt để bạn không phải dịch ngược trong đầu. Tên gọi xì tố/xì phé được dùng không thống nhất; bài này chỉ nói về Texas Hold'em, mỗi người nhận hai lá bài tẩy.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tiếng Anh | Tiếng Việt | Ghi chú |
|:---|:---|:---|
| **Royal flush** | thùng phá sảnh hoàng gia | 10-J-Q-K-A cùng chất |
| **Straight flush** | thùng phá sảnh | 5 lá liên tiếp cùng chất |
| **Four of a kind (quads)** | tứ quý | 4 lá cùng giá trị |
| **Full house (boat)** | cù lũ | sám cô + một đôi |
| **Flush** | thùng | 5 lá cùng chất |
| **Straight** | sảnh | 5 lá liên tiếp, khác chất |
| **Three of a kind** | sám cô (bộ ba) | set và trips vẫn gọi bằng tiếng Anh |
| **Two pair** | hai đôi | |
| **One pair** | một đôi | |
| **High card** | mậu thầu (bài cao) | không có gì cả |
| **Check · call · raise · fold · all-in · blind** | dùng nguyên tiếng Anh | theo, bỏ bài, tất tay là cách nói, không phải tên gọi |

</div>

---

![Bản đồ sáu ô vốn từ poker trên mặt nỉ xanh đậm, mỗi ô một biểu tượng vàng — Hành động, Vị trí, Bài, Người chơi, Tiền và Tiếng lóng](/images/holdem-glossary-categories.webp "Sáu nhóm mà bài này sắp xếp — lướt theo tình huống bạn đang ở, không chỉ theo bảng chữ cái")

## Check, bet, call, raise, fold trong poker là gì?

Mọi thứ bạn có thể làm thật sự khi tới lượt. Nếu bạn hoàn toàn mới, hãy bắt đầu với [thứ tự cược](/vi/blog/holdem-betting-actions "thumb:/images/holdem-betting-actions-hero.webp").

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Từ | Nghĩa |
|:---|:---|
| **Check** | Chuyển lượt mà không cược — chỉ khi không có khoản cược nào đang chờ bạn theo. |
| **Bet** | Là người đầu tiên bỏ chip vào pot trong một vòng cược. |
| **Call** (theo) | Theo đủ mức cược hiện tại để ở lại trong ván. |
| **Raise** (tố) | Nâng mức cược hiện tại, buộc người khác theo nhiều hơn hoặc fold. |
| **Fold** (bỏ bài) | Bỏ tay bài và mọi quyền với pot. |
| **All-in** (tất tay) | Đẩy hết chip của bạn vào; bạn chỉ thắng được phần pot bạn đã góp đủ (xem [side pot](/vi/blog/holdem-all-in-rules)). |
| **Limp** | Vào pot ở preflop bằng cách chỉ call big blind thay vì raise — thường là nước yếu, thụ động. |
| **Open (open-raise)** | Là người đầu tiên vào pot bằng một cú raise. |
| **3-bet** | Cú re-raise sau một cú open (bet thứ ba, tính blind là bet đầu). |
| **4-bet** | Cú re-raise đè lên một 3-bet. |
| **C-bet** | "Cược tiếp tục" ở flop bởi người đã raise ở preflop. |
| **Donk bet** | Bet vào người đã chủ động ở vòng trước khi bạn không có vị trí (từng bị coi là sai lầm, nay là công cụ tần suất thấp). |
| **Value bet** | Bet với tay mạnh, mong được call bởi tay yếu hơn. |
| **Bluff / Semi-bluff** | Bluff là bet tay yếu để tay mạnh hơn fold; semi-bluff làm vậy với một draw còn có thể cải thiện — xem [chiến thuật](/vi/blog/holdem-strategy). |
| **Check-raise** | Check, rồi raise sau khi đối thủ bet — một đường chơi mạnh, đánh lừa (hợp lệ ở các phòng hiện đại). |
| **Min-raise** | Cú raise nhỏ nhất hợp lệ. |
| **String bet** | Vươn tay lấy thêm chip mà không tuyên bố — chỉ cử động đầu tiên được tính (thường bị xử là call). Hô trước toàn bộ số tiền raise thì chia nhiều cử động vẫn hợp lệ — thói quen an toàn là nói số tiền trước khi chạm chip, hoặc đẩy cả khoản raise trong một cử động. |
| **Jam / Shove** | Đẩy all-in. |
| **Snap call** | Call ngay tức khắc, không do dự. |
| **Hero call** | Call với tay yếu vì bạn đã đọc được đối thủ đang bluff. |

</div>

---

## UTG, cutoff, button… vị trí trong poker là gì?

Bạn ngồi ở đâu quyết định bạn act (hành động) khi nào — và act cuối là một lợi thế vĩnh viễn. Để biết cách thật sự dùng chúng, xem [chơi theo vị trí](/vi/blog/holdem-position-play).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Từ | Nghĩa |
|:---|:---|
| **Button (BTN)** | Vị trí nút dealer; act **cuối** ở postflop — ghế tốt nhất bàn. |
| **Small blind (SB)** | Với từ ba người trở lên, là cược bắt buộc bên trái nút dealer; act đầu tiên ở postflop (ghế postflop tệ nhất). Khi heads-up, SB ở nút dealer và act cuối ở postflop. |
| **Big blind (BB)** | Blind lớn hơn trong hai blind; mức cược được gọi theo cỡ blind ($1/$2), và một big blind là đơn vị chuẩn để đo stack. |
| **UTG (under the gun)** | Act đầu tiên ở preflop — cần range mở chặt nhất. |
| **Cutoff (CO)** | Bên phải nút dealer; ghế tốt nhì, rất hợp để cướp blind. |
| **Hijack (HJ)** | Cách nút dealer hai ghế về bên phải; vị trí giữa (MP), ngay trước cutoff. |
| **Lojack (LJ)** | Bên phải hijack; cũng là vị trí giữa (MP) — tên gọi dịch theo số người ở bàn. |
| **Early / Middle / Late** | Nhóm theo việc bạn act sớm hay muộn — vị trí sớm = chặt nhất, vị trí muộn = rộng nhất và có lời nhất. |
| **In / Out of position** | Bạn *có vị trí (in position)* nếu act sau đối thủ, *không có vị trí (out of position)* nếu act trước. |

</div>

Muốn xem đầy đủ sơ đồ chỗ ngồi, xem [hướng dẫn các vị trí ở bàn](/vi/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp").

---

## Bài và board: nuts, kicker, set, trips nghĩa là gì?

![Hình minh họa nút dealer vàng và hai lá bài tẩy úp với flop K♦ 7♣ 2♠ trên mặt nỉ xanh](/images/holdem-button-dealer-board.webp "Board và bài tẩy của bạn ghép thành tay 5 lá mạnh nhất — phần lớn từ vựng poker mô tả chính xác cách ghép ấy")

Chính các lá bài, và thứ bạn làm ra từ chúng. Mới với trình tự các vòng cược? Bắt đầu với [trình tự ván bài](/vi/blog/holdem-game-order).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Từ | Nghĩa |
|:---|:---|
| **Hole cards** | Hai lá bài tẩy riêng, úp, của bạn. |
| **Community cards** | Năm lá bài chung (board) ngửa mà mọi người cùng dùng. |
| **Flop / Turn / River** | Ba lá chung đầu tiên / lá thứ tư / lá thứ năm và cuối cùng. |
| **The nuts** | Tay bài mạnh nhất có thể trên board hiện tại (có thể đổi ở các vòng sau) — xem [đọc board](/vi/blog/holdem-reading-the-board). |
| **Kicker** (lá phụ) | Lá bài phụ phân định thắng thua giữa những tay bài ngang nhau (xem [so bài cùng hạng](/vi/blog/holdem-tiebreak-rules)). |
| **Pocket pair** (đôi trên tay) | Hai lá bài tẩy cùng giá trị. |
| **Overpair** | Đôi trên tay cao hơn mọi lá trên board. |
| **Top pair** | Ghép lá cao nhất trên board thành đôi với một lá bài tẩy. |
| **Set** | Sám cô làm từ **đôi trên tay** + 1 lá trên board (giấu rất kín). |
| **Trips** | Sám cô làm từ **1 lá trên tay** + board có đôi (kiểm soát kicker kém hơn). |
| **Two pair** | Hai đôi khác nhau. |
| **Boat / Full boat** | Tiếng lóng của **cù lũ** — sám cô cộng một đôi (nó "đầy lên"). |
| **Quads** | Tiếng lóng của **tứ quý**. |
| **Made hand** | Tay đã thành ngay lúc này, trái với một draw. |
| **Draw** (bài chờ) | Tay cần cải thiện — ví dụ **flush draw** (chờ thùng, 4 lá cùng chất) hay chờ sảnh. |
| **Gutshot** (sảnh hở giữa) | Draw sảnh cần một lá ở giữa (4 [outs](/vi/blog/holdem-outs)). |
| **Open-ender** (sảnh hở hai đầu — OESD) | Draw sảnh hoàn thành ở cả hai đầu (8 outs). |
| **Backdoor** | Draw cần **hai** lá liên tiếp (turn *và* river). |
| **Runner-runner** | Hoàn thành tay bài bằng **cả** turn và river — một draw backdoor đã tới (vd. "runner-runner thùng"). |
| **Overcard** | Lá cao hơn board. |
| **Suited connectors** | Hai lá bài liên tiếp cùng chất (vd. 8♥9♥). |
| **Broadway** | Sảnh 10-J-Q-K-A, sảnh cao nhất. |
| **The wheel** | Sảnh A-2-3-4-5, sảnh **thấp nhất** (Át chơi thấp). |
| **Cooler** | Tay lớn thua tay lớn hơn mà không ai chơi sai — [bài đầy đủ](/vi/blog/holdem-cooler). |
| **Bad beat** | Thua khi là favorite lớn trước một draw may mắn — [bài đầy đủ](/vi/blog/holdem-bad-beat). |

</div>

Còn đang học bài nào thắng bài nào? [Hướng dẫn thứ hạng tay bài](/vi/blog/holdem-hand-rankings) có đầy đủ thứ tự.

---

## Fish, shark, nit, reg… người ta gọi kiểu người chơi ở bàn poker là gì?

![Năm ô kiểu người chơi poker — fish, whale, donk, nit và shark — mỗi ô đánh dấu bằng biểu tượng định nghĩa nó](/images/holdem-glossary-player-types.webp "Bàn nào cũng là hỗn hợp các kiểu — học tiếng lóng cho bạn biết nhắm vào ai và tránh ai")

Sở thú biệt danh cho những người ngồi phía bên kia mặt nỉ. Bản phân tích đầy đủ nằm ở [bài về fish](/vi/blog/holdem-fish).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Từ | Nghĩa |
|:---|:---|
| **Fish** | Người chơi giải trí yếu, thua đều (nghĩa đen là "cá") — nguồn lợi nhuận của cả bàn. |
| **Shark** | Người chơi mạnh, thắng (cá mập), săn những người yếu hơn. |
| **Whale** | Người chơi giải trí giàu, yếu, ở stakes lớn — một "fish nhiều tiền" (cá voi). |
| **Nit** | Người chơi cực kỳ chặt, chỉ chơi tay premium. |
| **Donkey (donk)** | Từ miệt thị cho một người chơi tệ, kém kỹ năng. |
| **Calling station** | Người chơi thụ động, chỉ biết call, hiếm khi fold hay raise. |
| **Reg** | "Regular" — người chơi thường xuyên, thường có năng lực, ở một mức cược. |
| **Grinder** | Người kiếm lời bằng khối lượng đều đặn và kỷ luật (người cày volume). |
| **LAG / TAG** | Loose-aggressive / tight-aggressive — hai phong cách hung hăng mà hầu hết người chơi thắng xây lên từ đó (phong cách tự nó không làm ai thành người thắng). |
| **Maniac** | Người chơi quá hung hăng, raise và bluff điên cuồng. |
| **Mark** | Người chơi yếu (con mồi) mà cả bàn đang cố lấy tiền. |

</div>

---

## Buy-in, rake, stack, bankroll: tiền trong poker gọi là gì?

Chip, mức cược, và hai thể thức. Ngã rẽ lớn là [cash game hay giải đấu](/vi/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp").

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Từ | Nghĩa |
|:---|:---|
| **Blinds** (mù — cược bắt buộc) | Hai khoản cược bắt buộc SB/BB khởi động ván — cũng là tên gọi của mức cược ([giải thích về blind](/vi/blog/holdem-blind-meaning)). |
| **Ante** | Theo truyền thống là khoản cược bắt buộc nhỏ từ mọi người để gieo hạt cho pot, tách biệt với blind — hầu hết giải đấu nay dùng big blind ante do một ghế trả cho cả bàn. |
| **Pot** | Tổng số chip đang được tranh. |
| **Side pot** (pot phụ) | Pot riêng hình thành khi một người đã all-in và những người khác tiếp tục cược. |
| **Stack** | Số chip trước mặt một người chơi. |
| **Bankroll** (quỹ tiền chơi poker) | Số tiền dành riêng cho poker nói chung — không phải chip trên bàn. |
| **Buy-in** | Số tiền cần để vào một bàn hay một giải đấu. |
| **Rake** (phí sòng) | Phần nhà cắt từ hầu hết pot cash game — [bài đầy đủ](/vi/blog/holdem-rake). |
| **Rakeback** (hoàn rake) | Khoản hoàn lại một phần rake bạn đã trả. |
| **Straddle** | Một blind tùy chọn (thường 2× BB) mua lượt act cuối ở preflop — [bài đầy đủ](/vi/blog/holdem-straddle). |
| **Cash game** | Chip có giá trị thật, vào hay rời bàn bất cứ lúc nào, blind cố định. |
| **No-limit (NLH) / Limit** | Ở no-limit, cú bet mở có thể từ một big blind tới cả stack của bạn (all-in nhỏ hơn vẫn được phép); limit dùng cỡ cược cố định. Pot-limit, thể thức của PLO, giới hạn bet và raise ở cỡ pot. Hold'em gần như luôn là no-limit. |
| **PLO** | Pot-Limit Omaha — biến thể phổ biến nơi bạn nhận bốn lá bài tẩy và phải dùng đúng hai (không phải cùng một trò, nhưng bạn sẽ nghe tên nó). |
| **Tournament** (giải đấu) | Buy-in cố định, blind tăng dần, chơi tới khi bị loại hoặc thắng. |
| **Freezeout** | Giải đấu không cho rebuy — bị loại là xong. |
| **GTD (guaranteed)** | Quỹ giải thưởng tối thiểu (đảm bảo) mà giải hứa trả, kể cả khi số người đăng ký không đủ. |
| **Hand-for-hand** | Gần bubble tiền thưởng, mọi bàn chơi từng ván một để không ai câu giờ vào tiền. |
| **Bounty (knockout)** | Giải đấu trả thưởng cho mỗi người bạn loại. |
| **Sit & Go (SNG)** | Giải đấu nhỏ bắt đầu ngay khi đủ người. |
| **MTT** | Giải đấu nhiều bàn, gộp bàn dần khi người chơi bị loại. |
| **ICM** | Independent Chip Model (mô hình chip độc lập) — quy đổi chip giải đấu thành equity tiền thật khi gần các bậc tiền thưởng. |
| **Bad beat jackpot** | Giải thưởng khuyến mãi trả khi một tay rất mạnh thua — [cách nó hoạt động](/vi/blog/holdem-bad-beat). |

</div>

---

## Cooler, bad beat, VPIP, tilt: tình huống và cách cư xử ở bàn poker

Những từ cho điều đang xảy ra — và cách cư xử trong lúc đó.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Từ | Nghĩa |
|:---|:---|
| **Showdown** (lật bài) | Mở bài sau cú cược cuối để quyết định người thắng ([luật showdown](/vi/blog/holdem-showdown-rules)). |
| **Muck** (úp bài bỏ) | Bỏ bài úp xuống. |
| **Chop / Split pot** | Chia pot khi các tay bài hòa nhau ([chia pot](/vi/blog/holdem-split-pot-rules)). |
| **Slow roll** | Cố tình trì hoãn việc lật tay thắng để trêu ngươi — một vi phạm ứng xử nghiêm trọng. |
| **Tilt** | Chơi sai vì cảm xúc, thường sau một ván thua — xem [bad beat](/vi/blog/holdem-bad-beat). |
| **Tell** | Dấu hiệu cơ thể hay hành vi để lộ thông tin về tay bài. |
| **Pot odds** (tỷ lệ pot) | Tỷ lệ giữa pot và số tiền phải call — [cách tính](/vi/blog/holdem-pot-odds). |
| **Implied odds** (tỷ lệ cược ngầm) | Pot odds điều chỉnh theo số chip bạn kỳ vọng thắng thêm ở các vòng sau. |
| **Equity** | Phần pot kỳ vọng của bạn ngay lúc này, tính cả khi chia pot ([hướng dẫn xác suất](/vi/blog/holdem-probability)). |
| **EV (expected value)** | Giá trị kỳ vọng — kết quả trung bình dài hạn của một quyết định; +EV thắng theo thời gian. |
| **VPIP** | Tần suất một người tự nguyện bỏ tiền vào pot ở preflop — chỉ số lỏng/chặt. |
| **PFR** | Tần suất một người raise ở preflop — chỉ số hung hăng (không bao giờ cao hơn VPIP). |
| **GTO** | Game Theory Optimal — chiến thuật cân bằng, không thể bị khai thác, đến từ solver. |
| **Range** | Toàn bộ tập tay bài một người có thể cầm ở một chỗ; pro nghĩ theo range, không theo một tay đơn lẻ. |
| **Cold deck** | Một ván chia xui tạo ra cooler (nghĩa gốc là bộ bài gian lận đã xếp sẵn). |
| **"Don't tap the glass"** | Đừng chê người chơi yếu (đừng gõ vào bể cá) — bạn sẽ dọa đi chính những người bạn kiếm lời từ đó. |
| **Run it twice** | Những người đã all-in chia phần board còn lại hai lần, mỗi lần cho nửa pot, để giảm variance — chỉ ở cash game, và mọi người liên quan phải đồng ý. |
| **Heads-up** | Chơi một đối một — hoặc bàn hai người, hoặc hai người cuối của một giải đấu. |
| **RFI (raise first in)** | Cách gọi tắt của cú open-raise trong range và thống kê: bạn mở pot bao nhiêu phần trăm khi chưa ai vào trước bạn. |
| **Splash the pot** | Ném chip bừa vào pot thay vì xếp trước mặt — không nên, vì số tiền không kiểm chứng được. |

</div>

---

:::readnext[Đọc tiếp]
/vi/blog/holdem-cooler | Cooler và bad beat | /images/holdem-cooler-hero.webp
/vi/blog/holdem-fish | Fish trong poker là gì? | /images/holdem-fish-hero.webp
:::

## Câu hỏi thường gặp

**Q. Người mới cần biết những từ poker nào trước?**

A. Những từ thiết yếu là các hành động cược (check, bet, call, raise, fold, all-in), các vòng (flop, turn, river), các vị trí (button, small blind, big blind, UTG), và một nhúm từ về tay bài (nuts, kicker, set, top pair). Học các cặp "dễ nhầm nhất" ở trên — nhất là check với call và set với trips — và bạn sẽ theo kịp gần như mọi cuộc trò chuyện ở bàn.

**Q. UTG trong poker là gì?**

A. UTG (under the gun) là ghế ngay bên trái big blind, nên người đó act đầu tiên trước flop. Vì mọi người act sau họ với nhiều thông tin hơn, UTG là vị trí chặt nhất — bạn nên mở ít tay nhất, mạnh nhất từ đó.

**Q. Check và call trong poker khác nhau ở đâu?**

A. Check là chuyển lượt mà không bỏ chip nào vào, và chỉ được phép khi không có khoản cược nào đang chờ bạn theo. Call là theo đủ một khoản cược ai đó đã đặt. Check không thêm chip; call trả phần bạn còn thiếu so với mức cược hiện tại. Nhầm hai thứ này là sai lầm phổ biến nhất của người mới.

**Q. Set và trips khác nhau thế nào?**

A. Cả hai đều là sám cô và xếp hạng như nhau, nhưng được tạo ra khác nhau. Set là một đôi trên tay trúng thêm một lá cùng giá trị trên board (bạn cầm 7‑7, một lá 7 ra). Trips là một lá bài tẩy khớp với một đôi đã có trên board (bạn cầm A‑7, và board có 7‑7). Set được giấu kín hơn và kiểm soát kicker tốt hơn, nên thường thắng nhiều tiền hơn.

**Q. Cooler và bad beat khác nhau ở đâu?**

A. Trong bad beat, bạn là favorite lúc tiền vào pot và bị thua ngược bởi một lá bài may mắn. Trong cooler — theo nghĩa chặt — bạn bị dẫn lúc tiền vào với tay quá mạnh để fold, và không cần lá bài may mắn nào; một số người dùng "cooler" cho bất kỳ tay lớn nào thua tay lớn hơn. Phép thử nhanh: nếu bạn là favorite áp đảo lúc tiền vào và đối thủ phải *cải thiện* mới thắng, đó là bad beat; nếu họ đã dẫn lúc tiền vào và tay bạn quá mạnh để fold, đó là cooler (đơn thuần bị dẫn với tay yếu hơn thì không phải cả hai — chỉ là một pot thua).

**Q. 3-bet trong poker là gì, sao không gọi là 1-bet?**

A. 3-bet là cú re-raise đầu tiên trước flop. Cách đếm bao gồm cả blind: big blind được coi là bet đầu tiên, cú open-raise là bet thứ hai ("2-bet"), nên cú raise tiếp theo là bet thứ ba — 3-bet. Cú re-raise đè lên đó là 4-bet. Nó làm người mới rối vì "cú raise đầu tiên" đã là bet thứ hai trong chuỗi — [3-bet](/vi/blog/holdem-3bet) có bài riêng.

**Q. Nuts trong poker nghĩa là gì?**

A. Nuts là tay bài mạnh nhất có thể với những lá trên board ở thời điểm đó. Nếu bạn cầm nuts, không tay nào khác thắng được bạn ngay lúc này — dù một lá sau đó có thể đổi nuts thành tay khác. "Second nuts" là tay mạnh nhì có thể. Cách tìm nuts trên mọi board nằm ở bài [đọc board](/vi/blog/holdem-reading-the-board).

**Q. VPIP và PFR là gì?**

A. VPIP (Voluntarily Put money In Pot) là tỷ lệ ván một người chọn chơi ở preflop — thước đo họ lỏng hay chặt. PFR (Pre-Flop Raise) là tỷ lệ ván họ raise ở preflop — thước đo độ hung hăng. PFR không bao giờ cao hơn VPIP, và khoảng cách lớn giữa hai số đánh dấu một người chơi thụ động, nặng về call.

**Q. Blind trong poker là gì?**

A. Blind (mù — cược bắt buộc) là hai khoản cược bắt buộc theo vị trí khởi động mỗi ván: small blind (mù nhỏ) ngay bên trái nút dealer và big blind (mù lớn) kế tiếp, và cỡ blind cũng là tên của mức cược ($1/$2). Ai đặt, vì sao, và big blind ante khác gì — tất cả ở bài [giải thích về blind](/vi/blog/holdem-blind-meaning).

**Q. Buy in poker là gì?**

A. Buy-in là số tiền cần để vào một bàn hay một giải đấu. Ở cash game đó là số chip bạn mang lên bàn; ở giải đấu, giá vào thường tách thành phần góp vào quỹ giải thưởng và phí của nhà — một giải $100 + $9 nghĩa là $100 vào quỹ giải thưởng và $9 là phí.

**Q. Làm cách nào để chơi poker giỏi?**

A. Không có đường tắt, nhưng có thứ tự: luật và thứ tự cược trước, rồi thứ hạng tay bài, rồi phần toán (pot odds, outs), rồi vị trí — đúng thứ tự của mục "Nên đọc gì tiếp?" bên dưới. Khi đã vững nền, [chiến thuật](/vi/blog/holdem-strategy) mới là nơi lợi thế thật sự được xây.

---

## Nên đọc gì tiếp?

Bảng từ này là tấm bản đồ; việc học thật nằm ở những bài hướng dẫn nó dẫn tới. Vài điểm xuất phát tốt:

- **Nền tảng tuyệt đối:** [cách chơi Texas Hold'em](/vi/blog/texas-holdem-rules-for-beginners) và [thứ tự cược](/vi/blog/holdem-betting-actions).
- **Tay bài:** [bài nào thắng bài nào](/vi/blog/holdem-hand-rankings) và [luật so bài cùng hạng](/vi/blog/holdem-tiebreak-rules).
- **Phần toán:** [pot odds](/vi/blog/holdem-pot-odds), [outs](/vi/blog/holdem-outs), và [xác suất](/vi/blog/holdem-probability).
- **Tiếng lóng, đào sâu:** [fish](/vi/blog/holdem-fish), [cooler](/vi/blog/holdem-cooler), [bad beat](/vi/blog/holdem-bad-beat), [straddle](/vi/blog/holdem-straddle), và [rake](/vi/blog/holdem-rake).

Đánh dấu trang này và quay lại mỗi khi một từ làm bạn vấp. Nói được thứ ngôn ngữ ấy, ván chơi sẽ thôi là thứ đang xảy ra *với* bạn — và bắt đầu là thứ bạn đang làm *với* cả bàn.

---

## Bài viết liên quan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/vi/blog/holdem-fish" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thuật ngữ</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Fish là ai?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Giải mã các kiểu người chơi</div>
  </a>
  <a href="/vi/blog/holdem-cooler" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thuật ngữ</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cooler và bad beat</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Hai kiểu thua ai cũng nhầm</div>
  </a>
  <a href="/vi/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Luật chơi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Các hành động cược</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Check, bet, call, raise, fold</div>
  </a>
  <a href="/vi/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Thứ hạng tay bài</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bài nào thắng bài nào</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Thứ tự đầy đủ các tay bài</div>
  </a>
</div>
`.trim(),
};

export default POST;
