/**
 * `/vi/solver` FAQ — 화면(solver-client.tsx)과 서버 `page.tsx`의 FAQPage 스키마가
 * **같은 배열**을 쓴다. 마스터 = `app/en/solver/faq.ts`(18문항) — 2026-10-09 신설.
 *
 * 🔴 EN 18문항 + **언어 문항 1개**(«Màn hình solver có tiếng Việt không?») + tr 공통 2문항(①②) + vi 고유 1문항(③) = 22문항.
 *   추가 3 = 뱅크 `docs/keyword-bank/vi-gto-solver.md` §7 «FAQ 방어 문항»:
 *   ① «Poker solver dùng để làm gì?»(tr 선례 · 자동완성 «solver poker là gì» · PAA «Làm cách nào để chơi poker giỏi?»의 도구 쪽 답)
 *   ② RTA — «Dùng poker solver có trái điều khoản của phòng poker không?»(SEO 렌즈: «vi phạm luật» = 합법성 축·규칙 글 헤드라 교체)(§1-⑤ 금지 축 방어 · tr 판단 ③과 같은 문형 · 룸 이름·추천·도박 어휘 없음)
 *   ③ «Solver có đoán được bài của đối thủ không?»(§5-C ② — 상위 vi 글의 «완전정보» 오서술을 정면 정정하는 자리)
 * 🔴 솔버 앱 vi UI = 2026-10-09 라이브(S-049). 앱 라벨은 라이브 `?lang=vi` 축어(Spot mẫu · Thử thách hôm nay ·
 *   Spot tùy chỉnh · Chạy solver · Kết quả · Xem lại · 스팟·그룹 이름 = presets titleVi/categoryVi).
 *   추출 기록 = `docs/solver-app-verbatim-vi-2026-10-09.md`. 다른 언어판은 열거하지 않는다(playbook 머리 «지원 언어 열거 금지»).
 * 🔴 수치는 EN과 값이 같다 — 구분자만 베트남식(0,35% · 0,08bb · 5,5bb · % 붙여 씀 · `docs/translation-terms-vi.md`).
 * 🔴 용어 = `docs/vi-cluster-plan.md` §3-A: 액션·구조는 영어 차용어(bet · check · fold · range · board · stack · pot),
 *   «solver»는 그대로(현지 용례 전부 차용어 · 뱅크 §5-C ⑤) · 산문에 «tố»·«dải bài» 쓰지 않는다(앱 라벨 인용 제외).
 * ⚠ Samsung Internet 경고문은 베트남어 화면 문구를 실측하지 못했다 → 축어 인용 없이 설명으로 썼다.
 */
export interface FaqItem { q: string; a: string; }

export const SOLVER_FAQ_VI: FaqItem[] = [
  {
    q: "GTO solver là gì?",
    a: "GTO solver là chương trình tính từ đầu chiến lược poker tối ưu theo lý thuyết trò chơi (game theory optimal). Bạn nhập range của hai người chơi, board, stack và các cỡ cược; solver lặp dần về cân bằng Nash rồi cho biết mỗi tay bài trong 169 tay bài khởi đầu nên bet, check hay fold với tần suất bao nhiêu. Nó không phải một bảng ghi sẵn ý kiến của ai đó — nó tính ra đáp án cho đúng spot của bạn.",
  },
  {
    // PAA 축어 «GTO trong poker là gì?»(뱅크 §5-B · `gto poker`·`gto poker là gì` 두 SERP) — 도구 관점으로 좁힌다(§5-C ⑥).
    q: "GTO trong poker là gì?",
    a: "GTO là viết tắt của Game Theory Optimal — tối ưu theo lý thuyết trò chơi: chiến lược không thể bị khai thác về lâu dài, dù đối thủ điều chỉnh thế nào. Đặc điểm quyết định của nó là chiến lược hỗn hợp — cùng một tay bài có thể bet 70% số lần và check 30% số lần, nên đối thủ không đọc được lối chơi của bạn. Vì vậy kết quả của solver là một bảng tần suất, không phải một mệnh lệnh duy nhất; solver là công cụ tính ra cân bằng đó cho từng spot.",
  },
  {
    // vi 고유 ① — 근거 = solver-factsheet §2(HU 전용 포스트플랍 · 결과 뷰어) · §3(레인지·보드·팟·스택·벳 사이즈 입력) · §1(액션별 EV).
    q: "Poker solver dùng để làm gì?",
    a: "Với một spot bạn đưa vào — hai range, board, pot, stack và các cỡ cược — solver tính mỗi tay bài nên chọn hành động nào với tần suất bao nhiêu, và giá trị kỳ vọng (EV) của từng hành động. Từ đó bạn học được board nào nên c-bet (cược tiếp tục) nhiều hơn, tay bài nào nên check và vì sao cỡ cược thay đổi. Nó cũng có giới hạn: đáp án chỉ đúng với range và cây quyết định bạn nhập, và solver này chỉ giải spot postflop heads-up (hai người).",
  },
  {
    q: "GTO solver này có thật sự miễn phí không?",
    a: "Có. Mọi tính năng đều miễn phí: không giới hạn số lần dùng, không cần phương thức thanh toán, không có gói bị khóa, không bắt buộc tài khoản. Đăng nhập là tùy chọn và dùng để đồng bộ lịch sử Spot mẫu và Thử thách hôm nay giữa các thiết bị. Spot bạn tự giải và lịch sử luyện tập của chúng vẫn nằm trên thiết bị này, kể cả khi đã đăng nhập. Solver được xây trên engine mã nguồn mở WASM Postflop (AGPL-3.0), và mã nguồn đã sửa của HoldemMaster được công bố theo cùng giấy phép.",
  },
  {
    q: "Tôi có cần tải về hay cài đặt gì không?",
    a: "Không. Đây là ứng dụng WebAssembly, chạy ngay khi bạn mở trang trong Chrome, Edge, Firefox hoặc Safari. Phép giải chạy trên CPU của máy bạn chứ không phải trên máy chủ, nên máy càng nhanh thì giải càng nhanh. Không có tệp cài đặt, không có mã bản quyền, không có phần mềm desktop phải cập nhật.",
  },
  {
    q: "Solver chạy trên trình duyệt chính xác đến đâu?",
    a: "Bạn đặt exploitability mục tiêu và solver lặp dần về mức đó. Mục tiêu càng thấp thì giải càng lâu; hãy xem exploitability cuối cùng vì phép tính cũng có thể dừng ở giới hạn số vòng lặp. Kết quả đúng với range và cây quyết định bạn đã nhập. Bộ nhớ và tốc độ giới hạn kích cỡ cây — engine WebAssembly chỉ dùng được khoảng 4GB, nên cây rất lớn hợp với solver desktop hơn.",
  },
  {
    q: "Dùng poker solver lần đầu thì bắt đầu từ đâu?",
    a: "Hãy bắt đầu từ Spot mẫu thay vì tự giải. Những spot đó đã được giải sẵn, nên bạn học cách đọc kết quả trước khi học cách thiết lập thông số. Khi đã sẵn sàng, các tab Spot tùy chỉnh đi theo thứ tự: ① Range OOP, ② Range IP, ③ Board, ④ Cỡ cược, ⑤ Chạy solver. Lần giải đầu tiên, cứ giữ nguyên cây hành động và các size mặc định.",
  },
  {
    q: "Solver phân tích được những tình huống poker nào?",
    a: "Mọi spot postflop heads-up. Bạn đặt hai range, flop (thêm turn và river nếu muốn một runout cụ thể), pot ban đầu và stack hiệu dụng, cỡ bet và raise theo từng vòng cược — kể cả rake và mức rake tối đa. Preflop không được giải ở đây; range mở bài theo vị trí thì dùng bảng bài khởi đầu.",
  },
  {
    q: "Khác gì GTO Wizard hay PioSOLVER?",
    a: "Khác chủ yếu ở chỗ phép tính diễn ra ở đâu. Thư viện lời giải như GTO Wizard cho bạn tra các spot đã được giải trước — nhanh và có cả preflop. Solver desktop như PioSOLVER cài trên máy Windows và giải tại máy. Solver này giải ngay trong trình duyệt của bạn, nên bạn sửa range và cây tùy ý mà không phải cài gì.",
  },
  {
    q: "GTO solver nào tốt hơn, PioSOLVER hay GTO Wizard?",
    a: "Chúng trả lời những câu hỏi khác nhau, nên câu trả lời trung thực là: tùy bạn muốn làm gì. Thư viện lời giải tra nhanh hơn và có preflop, hợp để học các spot tiêu chuẩn. Solver desktop đã cài xử lý được cây lớn hơn mức trình duyệt chịu được. Nếu bạn muốn giải ngay spot postflop của mình — miễn phí và không cần cài đặt — solver này sinh ra cho việc đó — và bạn có thể so đáp án của nó với cả hai.",
  },
  {
    // 자동완성 «poker solver android/apk» · «gto solver mac»(뱅크 §3) → 기기명 명시. 근거 = solver-factsheet §1(단일 스레드 폴백) · §2(PWA). 스토어 앱은 없다.
    q: "Có chạy trên Android, iPhone, Mac và Linux không?",
    a: "Có — trên Android và iPhone, solver mở ngay trong trình duyệt điện thoại, không cần tải gì từ cửa hàng ứng dụng. Trên Mac và Linux, mọi trình duyệt hiện đại đều đủ; đó là lợi thế thực tế so với solver desktop chỉ chạy trên Windows. Một lưu ý: trên iOS và Safari, giới hạn của trình duyệt buộc solver chỉ chạy đơn luồng (single-thread), nên tự giải spot ở đó chậm hơn. Trên điện thoại hãy dùng Spot mẫu đã giải sẵn và Trainer GTO; spot tự giải thì chạy trên trình duyệt máy tính.",
  },
  {
    // vi 고유 ② — 합법성 축이 아니라 «공부용 vs 게임 중 실시간 사용(RTA)» 구분만(tr 판단 ③ · 뱅크 §1-⑤·§5-C ④).
    // 룸 이름·사이트 추천·법률·처벌·«đánh bạc» 어휘 금지.
    q: "Dùng poker solver có trái điều khoản của phòng poker không? Có dùng được trong lúc đang chơi không?",
    a: "Dùng để học thì không có vấn đề gì: xem lại ván đã chơi, giải một spot hay luyện với trainer chính là việc solver sinh ra để làm. Còn dùng solver trong lúc đang chơi thì không được: phần lớn phòng poker online đều cấm công cụ hỗ trợ theo thời gian thực (RTA) trong điều khoản sử dụng. Solver này được làm để học khi đã rời bàn, sau khi ván bài kết thúc.",
  },
  {
    // vi 고유 ③ — 상위 vi 글이 «솔버는 완전정보를 가정한다»고 썼다(뱅크 §5-C ②). 솔버 입력은 양측 range이지 실제 패가 아니다.
    q: "Solver có đoán được bài của đối thủ không?",
    a: "Không, và nó cũng không cần. Đầu vào của solver là range của hai bên — tập hợp những tay bài mỗi người có thể đang cầm — chứ không phải hai lá bài thật trong tay đối thủ. Solver không giả định «thông tin hoàn hảo»; nó tìm chiến lược tốt nhất khi mỗi bên chỉ biết range của đối phương. Vì thế chất lượng đáp án phụ thuộc vào range bạn nhập: range sai thì chiến lược cũng sai.",
  },
  {
    // ★언어 문항(EN 18 밖 +1) — 솔버 앱 vi UI 라이브(2026-10-09 S-049) 반영. 다른 언어판 열거 금지.
    q: "Màn hình solver có tiếng Việt không?",
    a: "Có. Ứng dụng solver mở bằng tiếng Việt: tự động nếu trình duyệt của bạn đặt tiếng Việt, hoặc thêm ?lang=vi vào cuối địa chỉ. Năm bước (Range OOP, Range IP, Board, Cỡ cược, Chạy solver), tên các spot mẫu, Thử thách hôm nay và màn hình Trainer GTO đều là tiếng Việt. Vài nhãn kỹ thuật ngắn trên màn hình kết quả — Check, Bet, EQ, EV (bb), EQR — giữ nguyên dạng quốc tế; trang này giải thích chúng bằng tiếng Việt. Tên spot và tên nhóm ở đây đúng từng chữ với những gì bạn thấy trên màn hình.",
  },
  {
    q: "Trainer GTO là gì?",
    a: "Là chế độ luyện tập xây trên các spot mẫu đã giải. Trainer rút câu hỏi từ nhiều điểm quyết định trong các spot đã giải, nên số tổ hợp vượt quá mười nghìn; tay bài được chia theo đúng trọng số range GTO thực — nghĩa là một tay bài xuất hiện đúng với tần suất bạn thật sự cầm nó ở spot đó. Bạn chọn một hành động, trainer chấm quyết định đó so với lời giải. Bạn cũng có thể lưu spot tự giải thành câu hỏi trainer ngay từ màn hình kết quả và luyện trên thiết bị này.",
  },
  {
    q: "Vì sao trainer chấm theo EV mất thay vì đúng/sai?",
    a: "Vì GTO trộn các hành động, nên một lựa chọn tần suất thấp không tự động là lỗi. Trainer đo hành động của bạn bỏ lỡ bao nhiêu giá trị kỳ vọng (EV) so với pot: tối đa 0,35% pot là nước đi tốt nhất, tối đa 1% là chấp nhận được, vượt quá là đáng xem lại. Các ngưỡng có mức sàn 0,02bb và 0,05bb.",
  },
  {
    q: "Vì sao chấm điểm tương đối theo pot?",
    a: "Vì cùng 0,08bb là 1,45% của pot 5,5bb — một spot cần xem lại — nhưng chỉ là 0,36% của pot 22,5bb, mức chấp nhận được. Chấm theo bb tuyệt đối khiến pot 3-bet trông tệ hơn thực tế, nên từ tháng 8/2026 cách chấm chuyển sang phần trăm pot. Trong single raised pot 5,5bb, hai ngưỡng tương ứng 0,02bb và 0,06bb; trong pot 3-bet 22,5bb là 0,08bb và 0,23bb.",
  },
  {
    q: "Tiến độ học của tôi được lưu ở đâu?",
    a: "Mặc định là trên thiết bị của bạn, không cần tài khoản. Nếu đăng nhập bằng tài khoản HoldemMaster, lịch sử Spot mẫu và Thử thách hôm nay có thể đồng bộ giữa các thiết bị. Chuỗi ngày và dấu hoàn thành của Thử thách hôm nay vẫn giữ riêng trên từng thiết bị. Spot bạn tự giải và lịch sử luyện tập của chúng nằm trên thiết bị này kể cả khi đã đăng nhập; chúng không được lưu vào tài khoản. Chuỗi (số câu đúng liên tiếp), thống kê điểm yếu theo nhóm spot và hàng đợi Xem lại gồm những spot bạn mất EV đều dùng lịch sử luyện tập của bạn.",
  },
  {
    q: "Có cài lên màn hình chính được không?",
    a: "Có. Sau khi cài, ứng dụng mở toàn màn hình không có thanh trình duyệt; spot mẫu và trainer được lưu trên thiết bị nên bạn luyện được cả khi không có mạng. Trên Chrome hoặc Edge, dùng biểu tượng cài đặt ở thanh địa chỉ; trên iPhone, nhấn Chia sẻ rồi Thêm vào MH chính. Tự giải spot khi ngoại tuyến chỉ được sau khi engine solver đã tải về một lần.",
  },
  {
    q: "Cài lên màn hình chính có an toàn không?",
    a: "Không có gì được cài vào thiết bị theo nghĩa thông thường — trình duyệt chỉ tạo một lối tắt chạy bên trong trình duyệt. Bạn có thể tự kiểm chứng thay vì tin lời chúng tôi: ứng dụng không xin quyền camera, danh bạ, SMS hay vị trí, và tab mạng (network) trong công cụ nhà phát triển cho thấy mọi yêu cầu nó gửi. Mã nguồn công khai trên GitHub theo AGPL-3.0, và gỡ đi thì không để lại gì.",
  },
  {
    q: "Samsung Internet báo ứng dụng không an toàn khi cài — nghĩa là gì?",
    a: "Không có nghĩa là phát hiện mã độc. Samsung Internet tự tạo gói cài đặt riêng, và gói đó chưa nằm trong danh sách tin cậy của Google nên trình duyệt hiện cảnh báo. Cài qua Chrome thì không gặp cảnh báo này. Nếu muốn tiếp tục trong Samsung Internet, nhấn xem chi tiết trên cảnh báo và chọn vẫn cài đặt.",
  },
  {
    q: "Đây có phải GTO poker solver mã nguồn mở không?",
    a: "Có. Nó dựa trên WASM Postflop của Wataru Inariba, phát hành theo AGPL-3.0; HoldemMaster đã bản địa hóa, cải tiến ứng dụng và công bố toàn bộ mã nguồn đã sửa theo cùng giấy phép. Dự án gốc ghi trên trang của mình rằng sẽ không cập nhật nữa — đó là một phần lý do bản này được bảo trì riêng.",
  },
];
