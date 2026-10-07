// VI calculator FAQ — shared by page.tsx (FAQPage JSON-LD) and the CalculatorTool (visible render).
//
// ★2026-10-07 신설 — EN 17 명제 + vi 고유 1(TDA 2024 Rule 5 · 선례 tr·ms 등 8로케일과 같은 자리). 문항 집합 = tr 판 · 답의 뜻 정본 = app/en/calculator/faq.ts.
// §13: 모든 수치는 scripts/calc-reference-tables.ts 출력 = EN 그대로 · 구분자만 베트남식(«81,9%» · «3.000»).
//    AA vs KK 81,9%는 전 수트 평균(81.95) · 19,1% = 9/47(flop → 다음 카드) · 19,6% = 9/46(turn → river).
// 렌더 순서 = 도구 → ICM 예시 → 가이드 카드 → 빠른 참조 표 → FAQ. 그래서 «ở trên»이 맞다.
export const CALCULATOR_FAQ_VI: { q: string; a: string }[] = [
  {
    q: "Poker odds calculator hoạt động thế nào?",
    a: "Máy chia ra mọi lá bài còn lại và đếm xem mỗi tay bài thắng bao nhiêu lần. Khi biết hết các tay, máy tính này đếm chính xác mọi runout có thể ở flop và turn (heads-up là 990 ở flop, 44 ở turn; nhiều người chơi hơn thì ít hơn, còn ở river board đã đủ). Ở preflop, mỗi cặp đối đầu có 1,7 triệu board, và một đối thủ cầm tay ngẫu nhiên lại nhân con số đó lên nữa, nên ở những tình huống này máy lấy mẫu 60.000 runout ngẫu nhiên và ghi rõ dưới kết quả — con số dao động khoảng 0,3 điểm phần trăm giữa các lần chạy.",
  },
  {
    q: "AA gặp KK thắng bao nhiêu phần trăm?",
    a: "Đôi A thắng đôi K khoảng 82% số lần ở preflop (81,9% khi lấy trung bình trên mọi tổ hợp chất, xác suất hòa 0,5%). AA gặp AK suited khoảng 88% so với 12%, còn KK gặp AK suited khoảng 66% so với 34%.",
  },
  {
    q: "AK gặp một đôi có thật là coin flip không?",
    a: "Gần như vậy khi gặp mọi đôi thấp hơn A và K, nhưng không bao giờ đúng 50/50. AK offsuit có khoảng 46–47% equity trước 22–44, khoảng 45% trước 55–99 và khoảng 43% trước TT–QQ; AK suited cộng thêm khoảng 2,5–3 điểm phần trăm. Gặp KK thì tụt còn khoảng 30%, gặp AA còn khoảng 7%, nên cách gọi này chỉ đúng với những đôi mà cả A lẫn K đều cao hơn.",
  },
  {
    q: "Quy tắc 4 và 2 trong poker là gì?",
    a: "Mẹo tính nhẩm xác suất draw: khi còn hai lá (flop đến river), nhân số outs với 4; khi còn một lá (turn đến river), nhân với 2. Với 9 outs, kết quả là 36% và 18%; giá trị chính xác nằm ở câu trả lời tiếp theo. Phép nhân 4 chỉ lệch trong khoảng một điểm phần trăm cho đến 9 outs, sau đó lệch thêm chừng một điểm cho mỗi out (15 outs thực ra là 54,1%, không phải 60%); phép nhân 2 luôn cho kết quả thấp hơn, và càng nhiều outs thì càng thấp (thiếu 1,6 điểm ở 9 outs, 2,6 điểm ở 15 outs). Và phép nhân 4 chỉ áp dụng khi bạn được xem cả hai lá mà không phải trả thêm.",
  },
  {
    q: "Flush draw trúng thường xuyên đến mức nào?",
    a: "Với 9 outs, flush draw hoàn thành 35,0% số lần từ flop đến river (còn hai lá), 19,1% ở lá kế tiếp sau flop, và 19,6% từ turn đến river.",
  },
  {
    q: "Tính pot odds như thế nào?",
    a: "Số tiền call ÷ (pot sau bet + số tiền call) = equity tối thiểu bạn cần. Ví dụ, call 3.000 vào pot đã có 10.000 tính cả mức bet là 3.000 ÷ 13.000 ≈ 23,1%, nên call có lãi khi equity của bạn trên 23,1%. Bet bằng pot luôn đòi 33,3%; bet nửa pot đòi 25%.",
  },
  {
    q: "Cần pot odds bao nhiêu để call với flush draw?",
    a: "Khi gặp một lần bet ở flop, chỉ tính lá kế tiếp: 9 outs trúng 19,1% số lần, nên bạn cần pot odds tốt hơn khoảng 4,2 : 1 — hoặc implied odds đủ bù phần chênh, với điều kiện đối thủ còn chip phía sau và có tay bài chịu trả tiền. Hãy giảm mạnh phần tiền thắng thêm dự kiến đó khi bạn không draw tới nuts: một Thùng hạng nhì được đối thủ trả tiền thường thua nhiều hơn hẳn số nó thắng được. Nếu chắc chắn được xem cả hai lá (all-in), hãy dùng con số hai lá 35,0%.",
  },
  {
    q: "Dùng máy tính implied odds như thế nào?",
    a: "Mở tab “Pot Odds” và bật “Implied odds”, rồi nhập số tiền thêm bạn kỳ vọng thắng ở các street sau khi trúng draw. Máy tính cộng số đó vào pot và hạ mức equity mà lần call hiện tại cần. Hãy nhập con số trung thực: nó chỉ có nghĩa khi đối thủ thực sự còn chừng ấy chip phía sau và sẽ thực sự trả tiền khi draw của bạn về.",
  },
  {
    q: "Làm sao kiểm tra tay bài nào thắng?",
    a: "Trong tab “Equity”, nhập hai lá bài tẩy của mỗi tay và cả năm lá board: khi board đủ, máy cho biết người thắng và tay bài thắng, hoặc báo chia pot. Để chấm một tay bài riêng, đặt 5–7 lá vào tab “Xếp hạng bài”, máy sẽ tự tìm tổ hợp năm lá tốt nhất.",
  },
  {
    q: "Dùng máy tính ICM như thế nào?",
    a: "Nhập số người còn lại, stack dương và tiền thưởng từ cao xuống thấp (được phép bằng nhau). Với quyết định call/fold, hãy tính giá trị của bạn sau mỗi kết quả có thể — thắng, hòa hoặc thua — nhân từng giá trị với xác suất thực của nó rồi cộng lại. So giá trị có trọng số đó với giá trị khi fold, dùng stack và tiền thưởng còn lại tương ứng ở mỗi kịch bản. Nếu bị loại, hãy dùng đúng số tiền thưởng bạn nhận, có thể bằng 0 ở bubble. Máy tính stack này không cung cấp xác suất thắng, hòa, thua của ván bài.",
  },
  {
    q: "“Giá trị ICM” trong máy tính này nghĩa là gì?",
    a: "Là số tiền thưởng mà stack của bạn kỳ vọng nhận được theo ICM, với các stack và cơ cấu trả thưởng hiện tại. Đó là giá trị theo mô hình, không phải khoản tiền được bảo đảm. Khi có nhiều hạng được trả thưởng, chip thường có giá trị tiền thưởng biên giảm dần, nên gấp đôi chip không nhất thiết gấp đôi giá trị ICM. Mối quan hệ chính xác phụ thuộc vào cơ cấu trả thưởng và toàn bộ các stack còn lại.",
  },
  {
    q: "Khi nào nên dùng máy tính ICM?",
    a: "Bất cứ khi nào tiền thưởng được cố định theo thứ hạng về đích và vùng có tiền đã gần: ở bubble, ở final table, khi có người đề nghị deal, và trong satellite nơi mọi suất đều được trả như nhau. Nó không áp dụng cho cash game, nơi một chip luôn đáng đúng mệnh giá của nó.",
  },
  {
    q: "ICM có giống chip EV không?",
    a: "Không. Chip EV đếm chip; ICM đếm tiền thưởng kỳ vọng. Một lần call có thể thêm chip về kỳ vọng nhưng lại mất giá trị tiền thưởng, vì thua sẽ xóa cơ hội ở các mức thưởng cao hơn, còn double up thường không gấp đôi giá trị tiền thưởng của bạn. Bị loại vẫn nhận phần thưởng đã chắc chắn có. ICM thường làm range call all-in chặt hơn, nhưng mức độ phụ thuộc vào stack và cơ cấu trả thưởng chứ không áp dụng như nhau cho mọi hành động.",
  },
  {
    q: "Tôi là chip leader — sao giá trị ICM lại thấp hơn phần chip của tôi?",
    a: "Hạng nhất chỉ nhận đúng mức thưởng của nó, không phải cả quỹ thưởng, trong khi các stack nhỏ hơn vẫn có cơ hội nhận những mức thưởng còn lại. Trong ví dụ bubble ở trên, chip leader giữ 40% số chip nhưng chỉ 33,3% giá trị tiền thưởng, còn phần thưởng của stack ngắn nhất cao hơn phần chip của nó. Chênh lệch này mô tả cách phân bổ tiền thưởng đó; bản thân nó không đo risk premium của một lần call cụ thể.",
  },
  {
    q: "Tính ICM deal (ở final table) như thế nào?",
    a: "Nhập các stack hiện tại và tiền thưởng còn lại; “Giá trị ICM” của mỗi người là mức cơ sở cho deal. Trên thực tế, bàn thường để lại một khoản đã thỏa thuận ở giữa — thường là phần chênh giữa thưởng hạng nhất và hạng nhì — để tiếp tục chơi, còn floor sẽ dừng đồng hồ và xác nhận mọi người còn lại đều đồng ý trước khi trả bất kỳ khoản nào.",
  },
  {
    q: "Chip chop và ICM deal khác nhau thế nào?",
    a: "Chip chop trả theo phần chip, ICM deal trả theo khả năng về đích ở từng hạng của mỗi người — ví dụ ở trên cho thấy khoảng cách ($276 so với $458 cho stack ngắn nhất). Mỗi phòng chơi hiểu “chip chop” một kiểu: nhiều nơi trả mọi người mức thưởng kế tiếp trước rồi chỉ chia phần còn lại, cách này cho kết quả gần ICM, nên hãy hỏi rõ trước khi đồng ý bất kỳ phương án nào.",
  },
  {
    q: "Vì sao ở bubble nên fold nhiều hơn?",
    a: "Một lần call có lãi về chip vẫn có thể mất giá trị tiền thưởng khi bị loại tốn nhiều hơn phần double up mang lại. Stack trung bình thường chịu risk premium lớn nhất, nhất là khi bị một stack lớn hơn cover và các stack nhỏ hơn có thể bị loại trước. Một stack cực ngắn sắp bị mù ăn hết thì có ít giá trị sống sót cần bảo vệ hơn. Đừng fold hay shove chỉ dựa vào nhãn stack: hãy so range thực tế, ai cover ai, cơ cấu trả thưởng và xác suất. Một stack cover được người khác đôi khi có thể khai thác range call chặt hơn, nhưng chơi hung hãn rộng hơn không phải là điều tự động.",
  },
  {
    // ★vi 고유 1문항 — 근거 = TDA 2024 원문 `docs/sources/tda-2024-rules-v1.txt` Rule 5(5-C 전자기기 · 5-D 도구·차트·타인 데이터).
    //   본문 표기는 상위 «Rule 5»(선례 tr·ms·id·zh-hant·es·pt·de·fr와 같다). 합법성 축이 아니라 «대회 규칙» 축(legality-ban-scope).
    q: "Có được dùng poker calculator ngay tại bàn không?",
    a: "Ở các giải áp dụng luật TDA thì không. Luật năm 2024 của Poker Tournament Directors Association (Rule 5) quy định không được dùng ứng dụng cược, bảng tra và các công cụ chiến lược poker khác tại bàn, và người chơi không được nhận hay dùng dữ liệu chiến lược từ người hoặc nguồn khác; khi đang còn bài trong tay, bạn cũng không được dùng thiết bị điện tử hay phương tiện liên lạc — tất cả đều tùy theo luật của phòng chơi và quyết định của cơ quan quản lý địa phương. Vì vậy máy tính này dùng để chuẩn bị trước khi chơi, tính lại và học sau đó: tại bàn, thứ bạn dùng được là quy tắc 4 và 2 trong đầu và những bảng ở trên mà bạn đã thuộc.",
  },
];

export default CALCULATOR_FAQ_VI;
