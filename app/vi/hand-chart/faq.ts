/**
 * `/vi/hand-chart` FAQ — 화면 아코디언과 서버 page.tsx의 FAQPage 스키마가 같은 배열을 쓴다.
 * ★2026-10-07 신설(vi 도구 회차). 뜻 정본 = ko `app/hand-chart/faq.ts`(4번은 «타입 42% vs 콤보 35,4%» 판) · 문안 = tr·ms 판과 같은 명제.
 */
export const HAND_CHART_FAQ_VI: { q: string; a: string }[] = [
  {
    q: "Có phải lúc nào cũng chơi đúng theo bảng bài khởi đầu không?",
    a: "Bảng chỉ là điểm xuất phát. Ở bàn 6-max, hãy nới range của mỗi vị trí ra một hai bậc so với bàn 9 người (chơi như vị trí muộn kế tiếp). Nếu có ante, mở rộng toàn bộ range thêm 5–8%. Ở bàn có nhiều fish, chơi chặt hơn để tối đa hóa value sẽ có lãi hơn.",
  },
  {
    q: "Poker thật sự có đúng 169 tay bài khởi đầu không?",
    a: "Đúng vậy. Nếu không phân biệt chất, poker có đúng 169 loại tay bài khởi đầu: 13 pocket pair, 78 tay suited và 78 tay offsuit. Còn trong bộ bài thật, số combo là 1.326.",
  },
  {
    q: "Vì sao BB không có trong bảng?",
    a: "BB đã đặt sẵn 1BB; khái niệm áp dụng cho BB không phải open-raise mà là «defend» (theo hoặc tố lại). Range defend của BB thay đổi hoàn toàn theo vị trí của đối thủ và mức mở bài, nên cần một bảng riêng.",
  },
  {
    q: "Mở 42% từ Button có quá rộng không?",
    a: "Trước hết hãy so cùng một cách tính. Con số 42% trong bảng này là tỷ lệ trên 169 «loại» tay bài; còn range Button 40–50% trong các nguồn GTO là tỷ lệ trên 1.326 «combo». Đổi range Button của bảng này sang combo thì được 35,4% — hẹp hơn khoảng GTO đó. Vậy vấn đề không phải 42% quá rộng; điểm chính là khi đối thủ chơi chặt hoặc là người mới, tập trung hơn vào các tay premium mới thực sự kiếm được nhiều hơn. Bảng này là điểm tham chiếu cho một chiến lược cân bằng.",
  },
  {
    q: "Bị tố lại (3-bet) thì nên làm gì?",
    a: "Range mở bài và range theo 3-bet là hai thứ khác nhau. Thông thường, hãy đáp lại 3-bet bằng các tay premium như AA–JJ và AKs–AQs, cộng thêm một ít bluff (các tay A nhỏ suited như A5s và A4s — chặn AA và AK, lại có thể ra nut flush). Phần còn lại thì fold.",
  },
];
