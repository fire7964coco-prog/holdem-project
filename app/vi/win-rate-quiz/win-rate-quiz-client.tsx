"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

/**
 * 베트남어(vi-VN)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 다섯 번째 언어).
 *
 * 정본 = `app/en/win-rate-quiz/win-rate-quiz-client.tsx` — 구조·분기·숫자 그대로, 문자열만 재저작(형제 = pt·fr·id·ms).
 * 테이블 UI·엔진은 전 언어 공용(`_simulator.tsx`·`_engine`) — 숫자는 전 언어 동일(§13).
 * 독자 = 베트남(bạn체 — docs/translation-terms-vi.md «문체» · 계산기 사전과 같은 register).
 * 용어 출처: docs/vi-cluster-plan.md §3-A(정본) → docs/translation-terms-vi.md → app/vi/calculator/dict.ts
 *   (족보 Title Case «Mậu Thầu … Thùng Phá Sảnh» · «Hòa» · «Chia pot») → lib/posts-vi 코퍼스 빈도(10-13 grep):
 *   tay bài 987 · đối thủ 438 · người chơi 485 · vòng cược 219(street 6) · board 1.239(bài chung 118) · combo 346(tổ hợp 66) ·
 *   chia pot 135(split pot 19) · hòa 128 · showdown 189 · preflop 331 · top pair 110 · overpair 115 · overcard 27 ·
 *   implied odds 117 · hòa vốn 37(break-even 0) · aggressive 25(hung hãn 11 — 성향 이름은 «Chuẩn»·«Hung hãn»: 390 선택 상자에 «Bình thường»·«Aggressive»가 잘려서 · 10-13 화면) · tight 21 · loose 4 · điểm phần trăm 11.
 *   🔴 액션·구조어 = 영어(fold·call·raise·check·all-in · «tố» 산문 금지) · 족보만 베트남어(§3-A 원칙).
 *   «%p» = «điểm phần trăm»(점수 «điểm»과 붙여 써서 구분 — MA-521 fr «points» 혼동 선례).
 * 숫자 = 베트남식(`fmtNum` vi-VN «1.000» · 산문 소수 쉼표 «0,25» · 🔴 «%» 앞 공백 없음 «35,4%»).
 *   ⚠ 공용 UI의 % 소수(toFixed)는 전 언어 점(id·fr와 같음 · 공용 회차 몫). 오차·격차 문자열만 `dec`로 쉼표.
 * 솔버 메뉴명 «Tra cứu flop» = 솔버 앱 flop-study-labels.ts vi.title 축어.
 * 헤드텀 실측(DFS Vietnam · 2026-10-13) → page.tsx 머리 주석 · docs/keyword-bank/win-rate-quiz-ltr.md §vi.
 */

const n = (x: number) => x.toLocaleString("vi-VN");
/** 공용 UI가 toFixed(1)로 넘기는 오차·격차(«3.5»)를 베트남식 소수 쉼표로(id·fr 선례). «—»는 그대로. */
const dec = (x: string) => x.replace(".", ",");

const VI_NAMES: HandNames = {
  categories: ["Mậu Thầu", "Một Đôi", "Hai Đôi", "Sám Cô", "Sảnh", "Thùng", "Cù Lũ", "Tứ Quý", "Thùng Phá Sảnh"],
  drawingDead: "Drawing dead",
  flushDraw: "Flush draw",
  straightDraw: "Straight draw",
};

const VI_UI: QuizUI = {
  names: VI_NAMES,
  streets: ["Preflop", "Flop", "Turn", "River"],
  hero: "Bạn",
  folded: "Đã fold",
  raise: "Raise",
  call: "Call",
  check: "Check",
  allIn: "All-in",
  tableNote: "Bàn 6-max hoặc 9 người · chọn số người chơi thấy flop (2–6)",
  playersBtn: (k) => `${k} người`,
  playersLabel: "Người chơi",
  tableBtn: (k) => `${k}-max`,
  styleLabel: "Lối chơi đối thủ",
  styleHint: "Lối chơi đối thủ — chỉ thay đổi quy tắc hành động từ flop trở đi; range preflop vẫn giữ nguyên",
  styleNames: { standard: "Chuẩn", tight: "Tight", loose: "Loose", aggressive: "Hung hãn" },
  loading: "Đang xáo bài và tính toán…",

  myEquity: "Equity của bạn",
  vsOpponents: (k) => (k === 0 ? "không còn đối thủ" : `đấu với ${k} đối thủ`),
  basisSeat: "đấu với range theo vị trí",
  basisRange: "đấu với các tay bài khớp với hành động của họ",
  roleOpen: "Open",
  roleDefend: "Defend",
  winShort: "Thắng",
  tieShort: "Hòa",
  loseShort: "Thua",
  revealedLabel: "👀 Đấu với đúng các tay bài đã lật",
  revealedNote: (gap) =>
    `Con số phía trên giả định bạn không thấy bài của họ — vì thế hai con số chênh nhau ${dec(gap)} điểm phần trăm. Con số phía trên mới là con số bạn thực sự dùng để quyết định.`,

  potOddsTitle: "Pot odds — equity cần có để call hòa vốn",
  potLabel: "Pot",
  potBeforeLabel: "Pot (trước khi bet)",
  toCallLabel: "Cần call",
  requiredLabel: "Equity cần có",
  noBet: "Không ai bet. Bạn được xem lá tiếp theo miễn phí.",
  noBetAllIn: (river) =>
    river
      ? "Tất cả người chơi còn lại đều đã all-in, nên không còn chip nào để bet. Ván bài đi thẳng tới showdown."
      : "Tất cả người chơi còn lại đều đã all-in, nên không còn chip nào để bet. Các lá còn lại được chia hết, rồi ván bài đi tới showdown.",
  verdictCall: "Call",
  verdictFold: "Fold",
  impliedNote: "Dù vậy, nếu bạn có thể thắng thêm khi trúng bài (implied odds), call vẫn có thể là quyết định đúng.",

  revealBtn: (next) => `Chia ${next} →`,
  newHandBtn: "Chia ván mới 🔄",
  showCards: "👀 Xem bài của họ",
  hideCards: "🙈 Ẩn bài của họ",

  wonByFold: (pot) => `Tất cả đối thủ đã fold — bạn ăn pot ${n(pot)}`,
  splitLabel: (names) => `Chia pot — ${names.length > 1 ? names.slice(0, -1).join(", ") + " và " + names[names.length - 1] : names[0]} hòa nhau`,
  winLabel: (name, cat) => `${name} thắng · ${cat}`,
  winLabelHero: (cat) => `Bạn thắng · ${cat}`,

  reviewTitle: "📋 Xem lại — lẽ ra bạn nên fold ở đâu?",
  reviewCols: ["Vòng cược", "Equity của bạn", "Cần có", "Quyết định"],
  reviewNoMistake: "✅ Call là đúng từ đầu đến cuối.",
  reviewMistake: (street) => `⚠️ Đến ${street.toLowerCase()}, fold đã là quyết định đúng. Đó là lúc bạn nên rời ván bài.`,
  reviewInvested: (invested, pot) => `Bạn đã bỏ vào ${n(invested)} · pot cuối ${n(pot)}`,

  formulaTitle: "📐 Con số này từ đâu ra",
  outsLabel: (k) => `${k} lá giúp hoàn thành hoặc cải thiện tay bài của bạn`,
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `${o.flush} lá cho thùng` : "",
      o.straight > 0 ? `${o.straight} lá cho sảnh` : "",
      o.set > 0 ? `${o.set} lá cho set hoặc trips` : "",
      o.twoPair > 0 ? `${o.twoPair} lá cho hai đôi` : "",
      o.over > 0 ? `${o.over} lá giúp overcard của bạn thành đôi` : "",
      both > 0 ? `${both} lá thuộc hai nhóm cùng lúc (chỉ tính một lần)` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "Xác suất một trong các lá đó xuất hiện (tính nhanh tại bàn)",
  winLabel2: "Equity của bạn trong pot (mô phỏng · ván hòa tính bằng phần pot bạn được chia)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "Hai con số này đo hai thứ khác nhau. Con số trên là xác suất bạn TRÚNG bài; con số dưới là phần pot bạn nhận được nhờ THẮNG (ván hòa tính bằng phần pot bạn được chia). Bạn có thể trúng mà vẫn thua nếu bài đối thủ cũng cải thiện và mạnh hơn nữa, và có thể trượt mà vẫn thắng. Quyết định dùng con số dưới.",
  noDrawNote: (basis, k) =>
    basis === "seat"
      ? `Đây vẫn là preflop, nên cách tính nhanh «outs × 2/4» chưa áp dụng được. Equity phía trên đến từ ${k} ván mô phỏng đấu với những tay bài mà mỗi đối thủ có thể dùng để vào pot từ vị trí của họ.`
      : `Bạn không có lá outs nào mà công cụ này đếm — không lá nào hoàn thành thùng hay sảnh, hoặc nâng tay bài của bạn lên một bậc (set, hai đôi, hay overcard thành đôi) — nên cách tính nhanh «outs × 2/4» không áp dụng ở đây. Equity phía trên đến từ ${k} ván mô phỏng đấu với mọi tay bài khớp với các hành động bạn đã thấy.`,
  foldWinNote: "Tất cả đối thủ đã fold, nên pot thuộc về bạn. Con số 100% phía trên không phải kết quả mô phỏng — đó là kết quả của ván bài này.",
  riverNote: "Đây là river, không còn lá nào được chia thêm, nên cách tính nhanh «outs × 2/4» không áp dụng. Equity phía trên so tay bài cuối cùng của bạn với mọi tay bài khớp với các hành động bạn đã thấy.",
  chartTitle: "📈 Equity qua từng vòng cược — khi mọi tay bài đều lật ngửa",
  resultTabs: ["📋 Xem lại", "📈 Biểu đồ", "🃏 Cách tính"],
  solverTitle: (info) =>
    info.kind === "spot" ? "Xem spot này trong GTO solver" : info.kind === "notReady" ? "Xem một spot tương tự trong GTO solver" : "Xem một spot heads-up trong GTO solver",
  solverOpen: "Mở «Tra cứu flop» trong solver",
  solverNote: (info) => {
    const gto = "Solver cho thấy chiến lược flop khi cả hai người chơi đều chơi GTO (kết quả tính sẵn · 6-max 100bb · chỉ flop), nên range, cỡ bet và quy tắc của đối thủ khác với simulator này.";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} open · ${info.caller} call (single-raised pot trong solver) · flop ${info.flop.map((c) => c.rank + c.suit).join("")} — liên kết này mở đúng hai vị trí và flop đó trong «Tra cứu flop» của solver. ${gto}`
          : `${info.opener} open · ${info.caller} call — ván này kết thúc trước flop, nên chỉ mở cặp vị trí. Hãy tự chọn ba lá flop trong solver. ${gto}`;
      case "notReady":
        return `Cặp «${info.opener} open · ${info.caller} call» chưa được tính sẵn trong «Tra cứu flop» của solver. Hãy chọn một cặp vị trí gần giống, hoặc tự tính trong solver.`;
      case "multiway":
        return `${info.players} người chơi đã thấy flop này. Kết quả tính sẵn của solver chỉ có pot heads-up, nên ván này không mở nguyên trạng được — hãy chọn một cặp đấu với một đối thủ trong «Tra cứu flop».`;
      case "table9":
        return "Kết quả tính sẵn của solver dành cho bàn 6-max, nên ván ở bàn 9 người không mở nguyên trạng được — hãy chọn cặp vị trí gần nhất trong «Tra cứu flop».";
    }
  },
  solverLang: "vi",
  fmtNum: n,
  chartRangeLegend: "Những gì bạn thấy",
  chartNote: "Đường liền là equity của từng ghế khi mọi tay bài đều lật ngửa; đường nét đứt là equity bạn thấy trên màn hình khi không biết bài của họ. Đường của người chơi đã fold dừng ở vòng cược trước khi họ fold.",
  quizToggle: "🎯 Quiz",
  quizGuessTitle: "Equity của bạn là bao nhiêu?",
  quizGuessHint: "Kéo thanh trượt để đoán",
  quizSubmit: "Kiểm tra",
  quizCallSubmit: "Call → kiểm tra",
  quizFoldSubmit: "Fold → kiểm tra",
  quizResult: (guess, err, points) => `Bạn đoán ${guess}% · lệch ${dec(err)} điểm phần trăm · ${points} điểm`,
  quizChoiceResult: (ok, verdict) => (ok ? `Quyết định đúng (${verdict})` : `Chưa đúng — đáp án là ${verdict}`),
  quizNotCounted: "Không tính vào thành tích quiz của bạn — bạn đã xem equity hoặc bài của đối thủ",
  quizStats: (s) => `${s.hands} ván · lệch trung bình ${dec(s.avgErr)} điểm phần trăm · ${s.hits}/${s.decisions} quyết định đúng · ${n(s.points)} điểm`,
  quizReset: "Đặt lại",
  quizResetConfirm: "Xóa thành tích quiz đã lưu trên trình duyệt này? Thao tác này không thể hoàn tác.",
  quizInvite: "Đăng nhập để lưu thành tích này vào tài khoản và xem lại trên bất kỳ điện thoại hay máy tính nào.",
  quizInviteLink: "Đăng nhập",
  quizGuessCol: "Dự đoán",
  quizChoiceCol: "Lựa chọn",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `Ván này: lệch trung bình ${dec(avgErr)} điểm phần trăm${decisions > 0 ? ` · ${hits}/${decisions} quyết định đúng` : ""} · ${points} điểm`,
  quizGuessLegend: "Dự đoán của bạn",
  customToggle: "✍️ Tạo ván",
  customTitle: "Tạo ván bài — chơi lại một ván bạn từng chơi",
  customHint: "Chạm vào một ô, rồi chọn lá bài bên dưới. Ô trống được chia ngẫu nhiên, và đối thủ vẫn nhận tay bài từ range theo vị trí của họ.",
  customPos: "Vị trí của bạn",
  customRandom: "Ngẫu nhiên",
  customHero: "Tay bài của bạn",
  customBoard: "Board",
  customBoardSlots: ["Flop", "Flop", "Flop", "Turn", "River"],
  customStart: "Chia ván này →",
  customClear: "Xóa hết",
  customClose: "Đóng",
  customOff: "Quay lại ván ngẫu nhiên",
  customActive: "Ván bạn tự tạo · các ván mới vẫn giữ những lá bài này",
  customEdit: "Sửa",
  shareBtn: "Sao chép liên kết ván này",
  shareCopied: "Đã sao chép. Ai mở liên kết này cũng chơi ván này từ preflop với cùng lá bài và cùng equity.",
  shareManual: "Không sao chép tự động được. Hãy sao chép địa chỉ bên dưới.",
  sharedActive: "Ván được chia sẻ · cùng lá bài và cùng equity với người gửi (không tính vào thành tích quiz của bạn)",
  sharedInvalid: "Không đọc được liên kết chia sẻ, nên đây là một ván ngẫu nhiên mới (có thể liên kết bị cắt hoặc bị sửa)",
  rangeToggle: "Xem range đối thủ",
  rangeTitle: "Range đối thủ — những tay bài khớp với hành động đến lúc này",
  rangeCombos: (pre, cur, pct) => `Preflop ${pre} combo → hiện còn ${cur} combo (còn lại ${pct}%)`,
  rangeLegend: ["Vẫn trong range (càng đậm = phần còn lại càng lớn)", "Bị loại do hành động", "Chưa từng trong range", "Tay bài thực tế", "Bị chặn bởi tay bài của bạn hoặc board"],
  rangeNote: "Bắt đầu từ range preflop theo vị trí, rồi qua từng vòng cược loại bỏ mọi tay bài mà theo quy tắc đối thủ lẽ ra đã hành động khác. Equity phía trên dùng chính range này. Combo trùng với lá bài trong tay bạn hoặc trên board không được tính.",
  quizKinds: ["Đoán equity + quyết định", "Chỉ quyết định (call hay fold?)"],
  decideTitle: "Call hay fold?",
  decideHint: "Chọn call hoặc fold mà không thấy bài của họ. Dù bạn fold, ván bài vẫn chạy đến hết. Chế độ này không tính vào thành tích quiz của bạn.",
  decideSummary: (hits, decisions) => `Ván này: ${hits}/${decisions} quyết định đúng theo pot odds`,
  actualCol: "Biết bài",
  actualSummary: (hits, decisions) => `Số quyết định đúng nếu bạn biết bài của họ: ${hits}/${decisions} — chỉ để tham khảo. Tại bàn, chuẩn vẫn là pot odds khi không thấy bài của họ.`,

  ruleTitle: "Simulator này giả định những gì",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">Đối thủ chỉ làm theo các quy tắc dưới đây, không gì khác.</b> Không người chơi thật nào
        chơi như vậy — vị trí, đối thủ, độ sâu stack và hình ảnh trên bàn thay đổi tất cả. Hãy coi nó như giả định
        «bỏ qua ma sát» trong một bài tập vật lý.
      </p>
      <p className="mb-1">
        Lối chơi đối thủ hiện tại: <b className="text-foreground">{VI_UI.styleNames[style]}</b> (cả bàn chơi cùng một lối · đổi ở mục chọn phía trên)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>Hai đôi trở lên → <b className="text-foreground">{style === "aggressive" ? "raise 150% pot (overbet)" : "raise bằng pot"}</b></li>
        {style === "standard" && <li>Một đôi, hoặc flush/straight draw → <b className="text-foreground">bet nửa pot</b></li>}
        {style === "tight" && <>
          <li>Một đôi từ top pair trở lên có dùng lá bài tẩy (kể cả overpair), hoặc flush/straight draw → <b className="text-foreground">bet nửa pot</b></li>
          <li>Đôi yếu hơn (kể cả đôi chỉ nằm trên board) → <b className="text-foreground">fold</b></li>
        </>}
        {style === "loose" && <li>Một đôi, flush/straight draw, hoặc lá bài tẩy cao hơn mọi lá trên board (overcard) → <b className="text-foreground">bet nửa pot</b></li>}
        {style === "aggressive" && <>
          <li>Flush/straight draw → <b className="text-foreground">raise (semi-bluff)</b></li>
          <li>Một đôi → <b className="text-foreground">bet nửa pot</b></li>
          <li>Không có đôi, không có draw, nhưng có overcard → <b className="text-foreground">raise (bluff)</b></li>
        </>}
        <li>Còn lại → <b className="text-foreground">fold</b> (úp bài bỏ đi, giống như khi chơi live)</li>
      </ul>
      <p className="mb-2">
        Quy tắc được xét từ trên xuống: dòng đầu tiên khớp sẽ quyết định hành động. Draw là bốn lá hướng tới thùng hoặc sảnh ở flop hoặc turn, dùng ít nhất một lá bài tẩy (ở river không còn draw).{" "}
        {style === "aggressive" && "Mọi lần raise của lối Hung hãn, kể cả semi-bluff và bluff, đều bằng 150% pot. "}
        Khi có người raise, mọi người chơi còn trong ván đều call mức raise đó, và mức bet lớn hơn stack còn lại
        được hạ xuống bằng stack đó: người chơi all-in. Sau khi có người all-in, không ai fold nữa — phần board còn lại được chia và ván bài đi tới showdown. Không có check-raise — mỗi đối thủ hành động một lần mỗi vòng cược theo quy tắc, không có bước check rồi phản ứng lại. Ở đây bạn không bao giờ bet; bạn chỉ call đến river.
        Range preflop (bên dưới) giống nhau với mọi lối chơi.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Equity của bạn được tính như thể bạn không thấy bài của họ.</b> Từ
        flop trở đi, range của mỗi đối thủ là những tay bài trong range preflop theo vị trí (bên dưới) mà theo quy tắc của lối chơi đã chọn
        sẽ thực hiện đúng các hành động bạn đã thấy — với đối thủ Chuẩn, nếu họ raise thì range chỉ còn hai đôi
        trở lên; với đối thủ Hung hãn, draw và bluff bằng overcard cũng vẫn còn trong range. Người chơi fold trên màn hình
        cũng bị loại khỏi phép tính.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Tay bài preflop của đối thủ lấy từ range theo vị trí.</b> Trong số
        người chơi trong pot, ai hành động đầu tiên ở preflop được coi là người open, và tất cả những người còn lại được coi là
        defend khi gặp lần open đó bằng call hoặc 3-bet (range open · range defend). Các range này là range đồng thuận
        cash game 6-max 100bb, đối chiếu từ nhiều nguồn công khai, với các tay bài ở ranh giới được trộn ở mức
        25/50/75%. Khi không có bảng (HJ gặp open của UTG · SB gặp open của UTG, HJ hoặc CO), và cho người chơi
        thứ ba trở đi, sẽ dùng bảng defend gần nhất. Không có bảng cho bàn 9 người: ở bàn 9 người,
        UTG, UTG+1, UTG+2 và LJ dùng bảng UTG của 6-max, còn mọi ghế khác dùng bảng 6-max
        cùng tên (một vị trí sớm defend khi gặp open của một vị trí sớm khác, hoặc HJ defend khi gặp open đó, dùng bảng CO gặp open của UTG) — vì vậy ba ghế đầu ở bàn 9 người có range rộng hơn thực tế. Chỉ tay bài của bạn là ngẫu nhiên (trừ khi bạn tự tạo) — công cụ này để bạn
        chơi bất kỳ hai lá nào đến river. Ở đây 3-bet không làm thay đổi kích thước pot (đã đơn giản hóa).
      </p>
      <p className="mb-2">
        <b className="text-foreground">Quyết định chỉ dựa trên pot odds.</b> Implied odds không được tính, và
        xu hướng cùng các pha bluff của đối thủ chỉ đi vào range trong phạm vi quy tắc của lối chơi đã chọn. Đặc biệt, draw thường đáng call ngay cả khi riêng pot odds
        còn thiếu một chút.
      </p>
      <p>
        Mọi người chơi đều trả ante {ANTE} và bắt đầu với stack {n(STACK)}. Bạn không bao giờ fold — đó chính là mục đích:
        bạn xem đến river rồi xem lại ván bài. Equity là ước lượng từ mô phỏng với số mẫu cố định:{" "}
        <b className="text-foreground">{n(SAMPLES.preflop)} lần mô phỏng</b> ở preflop và{" "}
        <b className="text-foreground">{n(SAMPLES.postflop)} lần mô phỏng</b> từ flop trở đi (sai số chuẩn khoảng 0,25–0,35 điểm phần trăm).
        Mỗi ván dùng một seed ngẫu nhiên cố định, nên cùng một ván sẽ cho cùng các con số trên mọi thiết bị. Khi hòa, pot
        được chia đều cho những người chơi hòa nhau (mỗi người một nửa nếu hai người hòa).
      </p>
      <p className="mt-2">
        <b className="text-foreground">Khi bạn lật bài của họ</b>, mỗi ghế nhận equity của mình khi biết hết mọi tay bài. Từ
        flop trở đi, phép tính đếm chính xác mọi lá còn lại (chỉ preflop dùng {n(SAMPLES.known)} lần mô phỏng),
        và con số đó không bao giờ đi vào equity hay quyết định call/fold hiển thị trên màn hình — ở bàn thật bạn sẽ không
        có thông tin đó.
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 Khi bật Quiz</b>, equity và quyết định của mỗi vòng cược được ẩn cho đến khi bạn đoán
        equity của mình. Ở những vòng cược có người bet, bạn còn chọn call hoặc fold. Đáp án là «Equity của bạn» phía trên (con số
        khi không thấy bài của họ), và mỗi lần đoán được <b className="text-foreground">100 − 4 × độ lệch (tính bằng điểm phần trăm)</b>
        {" "}điểm (bằng 0 khi độ lệch từ 25 điểm phần trăm trở lên). Lựa chọn call/fold được tính là đúng khi trùng với quyết định theo pot odds. Tổng điểm
        của bạn được lưu trên trình duyệt này và, nếu bạn đã đăng nhập, cũng được lưu vào tài khoản để
        xem lại trên thiết bị khác (lá bài và board không được lưu).
      </p>
      <p className="mt-2">
        Với <b className="text-foreground">✍️ Tạo ván</b>, bạn có thể chọn vị trí, bài tẩy và board để chơi lại
        một ván bạn thật sự đã chơi. Ô trống được chia ngẫu nhiên. Bạn không thể chọn bài của đối thủ — ở
        bàn thật bạn cũng không biết — nên bài của họ vẫn lấy từ range theo vị trí, và equity hiển thị
        vẫn giữ cùng giả định «không biết bài». Dù board đã được chọn sẵn, equity của mỗi vòng cược chỉ dùng
        những lá đã được chia đến vòng đó. Vì chơi lại cùng một ván có thể khiến bạn nhớ sẵn đáp án, ván tự tạo
        không được tính vào thành tích quiz của bạn.
      </p>
    </>
  ),
  footer: (
    <>
      Muốn xem cách tính?{" "}
      <a href="/vi/blog/holdem-pot-odds" className="text-primary underline">Pot odds là gì và cách tính →</a>
      {" · "}
      <a href="/vi/blog/holdem-position-play" className="text-primary underline">Vì sao vị trí quan trọng</a>
      {" · "}
      <a href="/vi/calculator" className="text-primary underline">Máy tính xác suất poker</a>
    </>
  ),
};

export default function WinRateQuizClientVi() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Poker Simulator 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">Chơi mà không thấy bài đối thủ — rồi xem lẽ ra bạn nên fold ở đâu</p>
      </div>
      <WinRateSimulator ui={VI_UI} />
    </div>
  );
}
