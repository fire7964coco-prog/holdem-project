// /vi/glossary — Thuật ngữ poker (UI + 46 thuật ngữ · cấu trúc = components/glossary/dict.ts · thứ tự & cat = EN TERMS).
//
// ★2026-10-10 vi 배포 회차(docs/vi-cluster-plan.md §4-C ①) — fr·tr 구조 복제.
//
// 정의 원천:
// - 글 축어 42개 = lib/posts-vi/holdem-glossary.ts 표 문안 재사용(링크·굵게·기울임·== 제거).
//   Flop·Turn·River = «Flop / Turn / River» 한 칸(«Ba lá chung đầu tiên / lá thứ tư / lá thứ năm và cuối cùng»)을 셋으로 나눔(«lá chung» 보충) ·
//   3-Bet = 액션표 행 앞 구(괄호 절단) + 혼동표 «Đếm 3-bet» 행 · Cooler = 혼동표 «Cooler vs Bad Beat» 행의 cooler 쪽 ·
//   Vị trí (position) = 포지션 절 도입 문장 + «In / Out of position» 행 · Semi-bluff = «Bluff / Semi-bluff» 행 전체 · Bluff = 같은 행 앞 문장 ·
//   All-in = «(xem side pot)» 링크 꼬리만 절단 · Blind = «Blinds» 행(링크 꼬리 절단) · Kicker = «(xem so bài cùng hạng)» 꼬리 절단 ·
//   Nuts = «— xem đọc board» 꼬리 절단 · Equity·Pot odds = 링크 괄호 절단.
//   └ 축어 + 보충 3개: Board(= «Community cards» 행 + EN의 wet/dry 문장 번역) · Gutshot(+ EN 예시 «5-6-8-9 cần lá 7») · Overpair(+ EN 예시 «QQ trên flop J-7-3»).
// - 번역 4개(글에 정의 없음) = Offsuit · Outs · Preflop · SPR — EN desc 번역, 표기 = docs/vi-cluster-plan.md §3-A ③④
//   (khác chất/cùng chất · thùng · sảnh hở hai đầu (OESD) · bài tẩy · stack hiệu dụng · made hand · draw · postflop).
//   §13: A♠K♦ · 9 outs / 8 outs · 5-6-8-9 → 7 · QQ / J-7-3 = EN 값 그대로.
// - 표기: 족보 = 베트남어(thùng · sảnh · sám cô · cù lũ · tứ quý) · 액션·구조 = 영어 차용어 표제 + 괄호 풀이(«Fold (bỏ bài)» · «Call (theo)»).
//   🔴 «tố»·«mù»는 표제·정의에 쓰지 않는다(§3-A ④) — 사용자가 그 말로 검색할 수 있게 aka(비표시)에만 둔다. «hồi mã thương»도 aka에만(§3-A ④ 별칭 1회 허용 · 표제 금지).
//   숫자 = 베트남식(«60%» 붙임). equity = «phần pot kỳ vọng…, tính cả khi chia pot»(승률과 구분 · 아스트라 A-4).
// - link 3개(fr 선례 GlossaryTerm.link · §4-C ①): Nuts → holdem-reading-the-board · ICM → holdem-icm · Check-raise → low-board-check-raise.
//   앵커 = 베트남어 자연문 · 도구 의도 구(máy tính·bảng range·solver) 없음(§3-A ⑤).
// - seo: 머리어 «Thuật ngữ poker»(thuật ngữ poker 140 · thuật ngữ trong poker 50 · thuật ngữ poker tiếng việt 30 — §3-C ① 도구가 주인).
//   글 holdem-glossary seoTitle «Ở bàn poker họ nói gì? — Từ poker tiếng Anh nghĩa là gì»와 겹치지 않는다.
//   title 53자(«| HoldemMaster» 포함 68자) · description 152자(node String.length 실측 · ≤160).
//   keywords = «X trong poker là gì / X poker» 결합형만 — 단독 «X là gì» 오염 헤드(§3-A ⑦) 없음.
// - hero.h1 = «Thuật ngữ poker» — components/side-rail.tsx 좌측 레일 라벨과 축어 일치. 화자 bạn.

import type { GlossaryDict } from "@/components/glossary/dict";

export const GLOSSARY_DICT_VI: GlossaryDict = {
  sortLocale: "vi-VN",
  grouping: "letter",
  seo: {
    title: "Thuật ngữ poker A–Z — Từ điển thuật ngữ Texas Hold'em",
    description:
      "Thuật ngữ poker Texas Hold'em giải nghĩa rõ ràng: nuts, outs, pot odds, 3-bet, c-bet, ICM, SPR, kicker, tilt… Tra 46 từ theo chữ cái hoặc lọc theo nhóm.",
    keywords:
      "thuật ngữ poker, thuật ngữ trong poker, thuật ngữ poker tiếng việt, từ điển poker, thuật ngữ texas holdem, nuts trong poker là gì, kicker trong poker là gì, fold trong poker là gì, pot odds poker, icm poker, spr poker, tilt poker, 3bet poker",
    path: "/vi/glossary",
  },
  hero: {
    badge: "♠ {n} thuật ngữ · tra cứu A–Z",
    h1: "Thuật ngữ poker",
    leadBefore: "Mọi thuật ngữ Texas Hold'em bạn sẽ nghe ở bàn — ",
    leadStrong: "nuts, outs, pot odds, 3-bet, ICM",
    leadAfter: " và nhiều từ khác — được giải nghĩa rõ ràng, chính xác. Hãy gõ một từ hoặc lọc theo nhóm.",
  },
  searchPlaceholder: "Tìm thuật ngữ (ví dụ nuts, pot odds, outs)...",
  allLabel: "Tất cả",
  cats: { Action: "Hành động", Hand: "Tay bài", Position: "Vị trí", Math: "Toán", Board: "Board", Slang: "Tiếng lóng" },
  empty: { title: "Không tìm thấy thuật ngữ nào cho “{q}”.", hint: "Hãy thử một từ khác hoặc một nhóm khác." },
  related: {
    ariaLabel: "Hướng dẫn liên quan",
    heading: "Học tiếp",
    items: [
      { href: "/vi/blog/texas-holdem-rules-for-beginners", label: "Luật chơi", desc: "Blind, showdown, kiến thức nền" },
      { href: "/vi/blog/holdem-hand-rankings", label: "Thứ hạng tay bài", desc: "Đủ 10 tay bài, từ mạnh đến yếu" },
      { href: "/vi/blog/holdem-strategy", label: "Chiến thuật", desc: "Vị trí, pot odds, bluff" },
      { href: "/vi/hand-chart", label: "Bảng bài khởi đầu", desc: "Range mở bài theo vị trí" },
      { href: "/vi/calculator", label: "Máy tính xác suất poker", desc: "Xác suất, pot odds, ICM" },
    ],
  },
  terms: [
    { term: "3-bet", cat: "Action", desc: "Cú re-raise sau một cú open. Blind là bet 1, cú open-raise là bet 2, nên cú re-raise mới là 3-bet (không phải cú raise đầu).", aka: ["3bet", "3 bet", "three-bet", "re-raise", "tố lại"] },
    { term: "All-in (tất tay)", cat: "Action", desc: "Đẩy hết chip của bạn vào; bạn chỉ thắng được phần pot bạn đã góp đủ.", aka: ["all in", "allin", "tất tay", "jam", "shove"] },
    { term: "Ante", cat: "Action", desc: "Theo truyền thống là khoản cược bắt buộc nhỏ từ mọi người để tạo pot ban đầu, tách biệt với blind — hầu hết giải đấu nay dùng big blind ante do một ghế trả cho cả bàn.", aka: ["big blind ante", "bb ante"] },
    { term: "Backdoor", cat: "Board", desc: "Draw cần trúng cả hai lá turn và river.", aka: ["runner-runner", "backdoor draw"] },
    { term: "Bad beat", cat: "Slang", desc: "Thua khi là favorite lớn trước một draw may mắn.", aka: ["badbeat", "bad beat poker"] },
    { term: "Bankroll", cat: "Slang", desc: "Số tiền dành riêng cho poker nói chung — không phải chip trên bàn.", aka: ["quỹ tiền chơi poker", "bank roll"] },
    { term: "Blind", cat: "Action", desc: "Hai khoản cược bắt buộc SB/BB khởi động ván — cũng là tên gọi của mức cược.", aka: ["blinds", "small blind", "big blind", "SB", "BB", "cược bắt buộc", "mù", "mù nhỏ", "mù lớn"] },
    { term: "Bluff", cat: "Action", desc: "Bluff là bet tay yếu để tay mạnh hơn fold.", aka: ["bluff poker", "blof"] },
    { term: "Board (bài chung)", cat: "Board", desc: "Năm lá bài chung ngửa mà mọi người cùng dùng. Board “ướt” (wet) nhiều draw và nguy hiểm; board “khô” (dry) có ít draw.", aka: ["bài chung", "community cards", "wet board", "dry board", "board ướt", "board khô"] },
    { term: "Button (BTN)", cat: "Position", desc: "Vị trí nút dealer; act cuối ở postflop — ghế tốt nhất bàn.", aka: ["button", "BTN", "nút dealer", "dealer"] },
    { term: "Call (theo)", cat: "Action", desc: "Theo đủ mức cược hiện tại để ở lại trong ván.", aka: ["call", "theo", "theo bài"] },
    { term: "Check", cat: "Action", desc: "Chuyển lượt mà không cược — chỉ khi không có khoản cược nào đang chờ bạn theo.", aka: ["check poker"] },
    { term: "Check-raise", cat: "Action", desc: "Check, rồi raise sau khi đối thủ bet — một đường chơi mạnh, đánh lừa (hợp lệ ở các phòng hiện đại).", aka: ["check raise", "checkraise", "hồi mã thương"], link: { href: "/vi/blog/low-board-check-raise", text: "Khi nào nên check-raise trên board thấp" } },
    { term: "C-bet", cat: "Action", desc: "“Cược tiếp tục” ở flop bởi người đã raise ở preflop.", aka: ["cbet", "c bet", "continuation bet", "cược tiếp tục"] },
    { term: "Cooler", cat: "Slang", desc: "Tay quá mạnh để fold gặp tay lớn hơn (theo nghĩa chặt, bạn bị dẫn ngay lúc tiền vào)." },
    { term: "Draw (bài chờ)", cat: "Hand", desc: "Tay cần cải thiện — ví dụ flush draw (chờ thùng, 4 lá cùng chất) hay chờ sảnh.", aka: ["draw", "bài chờ", "flush draw", "straight draw", "chờ thùng", "chờ sảnh"] },
    { term: "Equity", cat: "Math", desc: "Phần pot kỳ vọng của bạn ngay lúc này, tính cả khi chia pot.", aka: ["equity poker"] },
    { term: "Flop", cat: "Board", desc: "Ba lá chung đầu tiên." },
    { term: "Fold (bỏ bài)", cat: "Action", desc: "Bỏ tay bài và mọi quyền với pot.", aka: ["fold", "bỏ bài", "muck", "úp bài"] },
    { term: "GTO", cat: "Math", desc: "Game Theory Optimal — chiến thuật cân bằng, không thể bị khai thác, đến từ solver.", aka: ["game theory optimal", "gto poker", "solver"] },
    { term: "Gutshot (sảnh hở giữa)", cat: "Hand", desc: "Draw sảnh cần một lá ở giữa (4 outs). Ví dụ: 5-6-8-9 cần lá 7.", aka: ["gutshot", "sảnh hở giữa", "sảnh khe", "inside straight draw"] },
    { term: "Range", cat: "Math", desc: "Toàn bộ tập tay bài một người có thể cầm ở một chỗ; pro nghĩ theo range, không theo một tay đơn lẻ.", aka: ["hand range", "range poker"] },
    { term: "ICM", cat: "Math", desc: "Independent Chip Model (mô hình chip độc lập) — quy đổi chip giải đấu thành equity tiền thật khi gần các bậc tiền thưởng.", aka: ["independent chip model", "mô hình chip độc lập", "icm poker"], link: { href: "/vi/blog/holdem-icm", text: "ICM poker là gì và cách tính" } },
    { term: "Kicker (lá phụ)", cat: "Hand", desc: "Lá bài phụ phân định thắng thua giữa những tay bài ngang nhau.", aka: ["kicker", "lá phụ"] },
    { term: "Limp", cat: "Action", desc: "Vào pot ở preflop bằng cách chỉ call big blind thay vì raise — thường là nước yếu, thụ động.", aka: ["limper", "limping", "limp poker"] },
    { term: "Nuts", cat: "Hand", desc: "Tay bài mạnh nhất có thể trên board hiện tại (có thể đổi ở các vòng sau).", aka: ["the nuts", "nut"], link: { href: "/vi/blog/holdem-reading-the-board", text: "Cách tìm nuts khi đọc bài chung" } },
    { term: "Offsuit", cat: "Hand", desc: "Hai lá bài khác chất (ví dụ A♠K♦). Yếu hơn một chút so với cùng tay bài ở dạng cùng chất (suited), vì khả năng ra thùng thấp hơn nhiều.", aka: ["off suit", "unsuited", "khác chất"] },
    { term: "Outs", cat: "Math", desc: "Những lá còn lại trong bộ bài giúp bạn cải thiện thành tay thắng. Flush draw có 9 outs; draw sảnh hở hai đầu (OESD) có 8 outs.", aka: ["out", "số outs"] },
    { term: "Overpair", cat: "Hand", desc: "Đôi trên tay cao hơn mọi lá trên board — ví dụ QQ trên flop J-7-3.", aka: ["over pair"] },
    { term: "Vị trí (position)", cat: "Position", desc: "Bạn ngồi ở đâu quyết định bạn act (hành động) khi nào — và act cuối là một lợi thế vĩnh viễn. Bạn có vị trí (in position) nếu act sau đối thủ, không có vị trí (out of position) nếu act trước.", aka: ["position", "in position", "out of position", "IP", "OOP", "có vị trí", "không có vị trí"] },
    { term: "Pot", cat: "Board", desc: "Tổng số chip đang được tranh.", aka: ["pot poker"] },
    { term: "Pot odds (tỷ lệ pot)", cat: "Math", desc: "Tỷ lệ giữa pot và số tiền phải call.", aka: ["pot odds", "tỷ lệ pot", "pot odd"] },
    { term: "Preflop", cat: "Board", desc: "Vòng cược đầu tiên, trước khi có lá bài chung nào, khi mỗi người chỉ có hai lá bài tẩy.", aka: ["pre-flop"] },
    { term: "Rake (phí sòng)", cat: "Slang", desc: "Phần nhà cắt từ hầu hết pot cash game.", aka: ["rake", "phí sòng"] },
    { term: "Raise", cat: "Action", desc: "Nâng mức cược hiện tại, buộc người khác theo nhiều hơn hoặc fold.", aka: ["raise poker", "min-raise", "tố"] },
    { term: "River", cat: "Board", desc: "Lá chung thứ năm và cuối cùng." },
    { term: "Semi-bluff", cat: "Action", desc: "Bluff là bet tay yếu để tay mạnh hơn fold; semi-bluff làm vậy với một draw còn có thể cải thiện.", aka: ["semi bluff", "semibluff"] },
    { term: "Set", cat: "Hand", desc: "Sám cô làm từ đôi trên tay + 1 lá trên board (giấu rất kín).", aka: ["set poker", "sám cô", "bộ ba"] },
    { term: "Showdown (lật bài)", cat: "Board", desc: "Mở bài sau cú cược cuối để quyết định người thắng.", aka: ["showdown", "lật bài"] },
    { term: "SPR", cat: "Math", desc: "Stack-to-Pot Ratio — stack hiệu dụng chia cho pot. SPR thấp có lợi cho việc dồn chip với made hand mạnh; SPR cao thưởng cho draw và kỹ năng chơi postflop.", aka: ["stack to pot ratio", "spr poker"] },
    { term: "Stack", cat: "Slang", desc: "Số chip trước mặt một người chơi.", aka: ["deep stack", "short stack", "chồng chip"] },
    { term: "Tilt", cat: "Slang", desc: "Chơi sai vì cảm xúc, thường sau một ván thua.", aka: ["tilt poker"] },
    { term: "Trips", cat: "Hand", desc: "Sám cô làm từ 1 lá trên tay + board có đôi (kiểm soát kicker kém hơn).", aka: ["trips poker"] },
    { term: "Turn", cat: "Board", desc: "Lá chung thứ tư." },
    { term: "Value bet", cat: "Action", desc: "Bet với tay mạnh, mong được call bởi tay yếu hơn.", aka: ["value", "thin value"] },
    { term: "Wheel", cat: "Hand", desc: "Sảnh A-2-3-4-5, sảnh thấp nhất (Át chơi thấp).", aka: ["the wheel", "sảnh thấp nhất"] },
  ],
};
