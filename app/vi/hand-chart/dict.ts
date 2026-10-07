import type { HandChartDict } from "@/components/hand-chart/dict";

// `/vi/hand-chart` 사전 — ★2026-10-07 신설(vi 도구 회차 · tr 회차 2 방식 · docs/keyword-bank/vi-tools.md).
// 키워드 실측(2026-10-07 · DFS google_ads/search_volume · location 2704 Vietnam · language vi):
//   poker chart 70 · chart poker 70 · poker charts 70 · poker hand chart 50 · poker hands chart 50 · poker range 70 ·
//   preflop chart 20 · poker starting hands 10 · preflop range 10 · poker range chart 10 ·
//   bảng bài khởi đầu / tay bài khởi đầu poker / những tay bài nên chơi poker / bảng range poker = null.
//   → 차트 검색 술어는 영어 토큰이 산다(tr·ms와 같은 형). 제목 머리어 = «Poker Hand Chart» + 베트남어 «bảng bài khởi đầu».
//   🔴 SERP «poker chart»(2704)는 족보 포스터·핀터레스트(족보 의도) — «thứ hạng bài / bảng xếp hạng bài poker»는
//      holdem-hand-rankings 글 소유. 이 페이지 제목·H1에 족보 말을 쓰지 않는다.
// 용어 = docs/translation-terms-vi.md: tay bài(핸드) · combo · suited/offsuit/pocket pair 영어 · 포지션 약어 영어 ·
//   numberLocale vi-VN(1.326 · 35,4%) · % 기호는 숫자 뒤(vi 코퍼스 35:0) · bạn체 · check = «check».
export const HAND_CHART_DICT_VI: HandChartDict = {
  numberLocale: "vi-VN",
  seo: {
    title: "Poker Hand Chart — Bảng bài khởi đầu theo vị trí",
    description:
      "Bảng bài khởi đầu poker tương tác: đủ 169 tay bài Hold'em theo vị trí UTG, HJ, CO, BTN và SB. Chạm vào một vị trí để xem những tay bạn có thể mở từ ghế đó.",
    path: "/vi/hand-chart",
    keywords: [
      "poker hand chart",
      "poker starting hand chart",
      "preflop chart",
      "poker range chart",
      "bảng bài khởi đầu poker",
      "tay bài khởi đầu poker",
    ],
  },
  hero: {
    badge: "♠ Công cụ bài khởi đầu tương tác",
    h1: "Poker Hand Chart",
    lead: "Đủ 169 tay bài được tô màu theo vị trí (UTG → SB). Chạm vào một vị trí để chỉ làm nổi bật những tay bạn có thể mở từ ghế đó.",
    handsUnit: "tay bài",
    positionsUnit: "vị trí",
    tapHint: "Chạm · rê chuột để xem ngay",
  },
  filter: {
    caption: "Chọn vị trí → những tay bài nên chơi sẽ nổi lên",
    basisNote: [
      "Tỷ lệ của mỗi vị trí ",
      { b: "tính trên 169 loại tay bài" },
      " (giá trị tính theo combo được ghi riêng trong bảng bên dưới)",
    ],
    showAll: "Hiện tất cả",
    selected: "Range mở bài {pos} · {count} / 169 ({pct}%)",
    handsCount: "{n} tay",
  },
  positions: ["Under the Gun (UTG)", "Hijack (HJ)", "Cutoff (CO)", "Button (BTN)", "Small Blind (SB)"],
  typePct: "~{n}",
  grid: {
    swipe: "← Vuốt để xem toàn bộ bảng →",
    pocketPair: "Pocket pair",
    suited: "Suited",
    offsuit: "Offsuit",
    openFrom: "Mở từ {pos} trở đi",
    legendNote: "Tam giác trên bên phải = suited (s) · đường chéo = pocket pair · tam giác dưới bên trái = offsuit (o)",
  },
  legend: {
    heading: "Chú thích màu",
    seatLine: "{pct} trên 169 loại",
    fold: "Fold",
    foldSub: "Mọi vị trí",
  },
  table: {
    heading: "Range mở bài theo vị trí",
    swipe: "← Vuốt để xem «Range · Tay bài ví dụ»",
    position: "Vị trí",
    hands: "Số tay",
    handsSub: "(trên 169 loại)",
    range: "Range",
    rangeSub: "loại / combo",
    examples: "Tay bài ví dụ",
    comboCell: "/ combo {pct}",
    notes: [
      [
        "* ",
        { b: "Có hai cách tính khác nhau." },
        " «12% của 169 loại» đếm tay bài theo ",
        { b: "loại" },
        " (bao nhiêu trong 169 loại), còn cách tính theo ",
        { b: "combo" },
        " đếm bao nhiêu trong 1.326 tổ hợp lá bài được tính vào. Cùng một range cho ra hai con số khác nhau — AA là 1 loại nhưng 6 combo, AKo là 1 loại nhưng 12 combo. Solver và các bài chiến thuật thường dùng cách tính theo combo.",
      ],
      [
        // 🔴 vi에는 /vi/solver가 없다(10-07 · 다음 회차) — 이름만 쓰고 링크하지 않는다(tr 회차 2 선례).
        "* Bảng này là ước lượng các range mở bài tiêu chuẩn. Giá trị solver thực tế thay đổi theo mức mở bài, stack và range của đối thủ — ví dụ, trong ví dụ đấu blind của HoldemMaster GTO solver, range mở 3bb của SB là 46,6% (92 loại, 618 combo). Ở bàn thật, bạn cần điều chỉnh thêm theo phong cách bàn chơi và độ sâu stack.",
      ],
    ],
  },
  why: {
    heading: "Vì sao vị trí quyết định việc chọn bài",
    items: [
      {
        title: "Vị trí = thông tin",
        desc: "Button (BTN) luôn hành động cuối cùng sau flop. Được thấy trước mọi lần cược và check của người khác khiến cùng một tay bài sinh lời hơn nhiều.",
      },
      {
        title: "Sau lưng UTG còn 8 người",
        desc: "Ở bàn 9 người, khi bạn open-raise từ UTG, bạn không biết 8 người phía sau sẽ làm gì. Khả năng bị tố lại cao, và những tay đầu cơ như suited connector khó hiện thực hóa giá trị — hãy thu hẹp về các tay premium.",
      },
      {
        title: "Giá trị của suited",
        desc: "Tay suited có lợi thế equity khoảng 3–5% so với cùng tay đó ở dạng offsuit. Vì vậy A8s có thể mở từ Hijack, còn A8o nên đợi đến Button.",
      },
      {
        title: "Thế khó của SB",
        desc: "Small blind luôn phải hành động đầu tiên sau flop. Dù range rộng hơn Button, equity mà SB hiện thực hóa được lại ít hơn — vì thế các tay trung bình kiếm được ít hơn.",
      },
    ],
  },
  faqHeading: "Câu hỏi thường gặp",
  related: {
    heading: "Bước tiếp theo — hướng dẫn liên quan",
    // 🔴 vi 코퍼스는 8편 — starting-hands-chart·position-play·probability 글이 없다(차트 의도는 이 도구가 주인).
    //    실재하는 vi 글 + vi 도구만 건다. desc는 각 글의 title/seoTitle/desc 축어 범위 안(settled §3-A).
    items: [
      { href: "/vi/blog/texas-holdem-rules-for-beginners", tag: "Người mới", title: "Cách chơi Texas Hold'em cho người mới", desc: "Mù, chia chip, thứ hạng bài và bảng tóm tắt in được" },
      { href: "/vi/blog/holdem-hand-rankings", tag: "Thứ hạng bài", title: "Thứ hạng các tay bài poker trong Texas Hold'em", desc: "10 tay bài poker từ mạnh nhất đến yếu nhất, xác suất thực của từng tay" },
      { href: "/vi/blog/holdem-betting-actions", tag: "Hành động cược", title: "Các hành động cược trong Texas Hold'em", desc: "Check, theo (call), tố (raise) và bỏ bài (fold) là gì" },
      { href: "/vi/blog/holdem-tournament-vs-cash-game", tag: "Tournament", title: "Poker Tournament hay Cash Game: người mới nên chơi gì?", desc: "Giá trị chip, blind, bankroll, variance và áp lực ICM rất khác nhau" },
      { href: "/vi/calculator", tag: "Công cụ", title: "Máy tính xác suất poker", desc: "Equity, outs và pot odds cho mọi tay bài" },
    ],
  },
};
