"use client";

import Link from "next/link";
import { SOLVER_FAQ_VI } from "./faq";

/**
 * ★CTA는 `?lang=vi`로 보낸다. 솔버 앱 베트남어 UI = 2026-10-09 라이브(S-049).
 *   이 페이지의 앱 라벨(Range OOP · Chạy solver · Spot mẫu · 스팟·그룹 이름)은 **라이브 `?lang=vi` 베트남어 축어**다
 *   (10-09 Playwright 대조 · presets titleVi/categoryVi · 기록 = `docs/solver-app-verbatim-vi-2026-10-09.md`).
 *   UTM은 붙이지 않는다(기존 관례).
 */
const SOLVER_URL = "https://solver.holdemmaster.com/?lang=vi";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/vi/solver` 랜딩 — ★2026-10-09 신설 (솔버 vi 라이브 당일 · 14번째 랜딩)
 * ═══════════════════════════════════════════════════════════════════════════
 * 마스터 = `app/en/solver/solver-client.tsx`. 섹션·표·SPOT 수·수치는 EN과 같다(구분자만 베트남식 · % 붙여 씀).
 * 골격 = `app/tr/solver/solver-client.tsx`(10-06) · 링크 빈자리 처리 = `app/hi/solver`(규칙 글로 대체).
 *
 * ▶ 키워드(DataForSEO Vietnam · 2026-10-07 · 월 · `docs/keyword-bank/vi-gto-solver.md`): gto poker 170 · range poker 70 ·
 *   flop turn river 50 · poker equity calculator 50 · gto poker là gì 30 · poker solver 20 · solver poker 10 · gto solver 10.
 *   검색어형(라틴)은 제목·H2와 «같은 것을 부르는 여러 이름» 문단에만 축어로 둔다 — 베트남어 «솔버» 조어는 검색어가 아니다(null).
 *   🔴 `GTO`·`solver`를 단독으로 두지 않는다(애니·Excel 오염 · 뱅크 §1-①③).
 *
 * ▶ 링크 치환 (EN → vi) — 뱅크 §6 «랜딩이 링크할 vi 자산이 없다» · hi 선례 ⓐ:
 *   /en/blog/holdem-equity · holdem-continuation-bet · holdem-strategy → vi 없음 → 규칙 글로 대체
 *   (hand-rankings = 결과 화면 «Nhóm tay bài» 읽기 · game-order = flop → turn → river 순서 · betting-actions · blind-meaning · rules-for-beginners)
 *   /en/calculator · /en/hand-chart → /vi/... (10-07 신설) · /en/win-rate-quiz → vi 없음 → 행·링크 제거
 *   GTO 예제 13편 → ★2026-10-10 vi 51편 배포 회차(🅶 머지)에 SPOT_GROUPS `slug` 13개 채움(lib/posts-vi/ 실존 확인) ·
 *   결과 화면 문단 = EN대로 equity·c-bet 글 링크 복원 · 기초 읽기에 strategy 글 복원(EN 순서 · quiz는 vi 라우트 없음)
 *
 * 🔴 해설 수치는 EN 랜딩 값 그대로(정본 = docs/gto-solver-series-spec.md §4-B). EN 주석의 정정 이력
 *   (M-038·M-042·M-045·M-046·M-067)이 반영된 문안을 옮겼다 — 앱 문구로 되돌리지 마라.
 * 🔴 용어 = `docs/vi-cluster-plan.md` §3-A: 액션·구조 = 영어 차용어 · 족보 = 베트남어(thùng · hai đôi · sám cô) + 영어 병기 1회 ·
 *   산문에 «tố»·«dải bài»·«mù» 헤드 안 씀(앱 라벨 축어는 예외) · 숫자 5,5bb · 43,8% · 1.326.
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC: [string, string][] = [
  ["Giá", "Miễn phí — mọi tính năng, không giới hạn số lần dùng"],
  ["Cài đặt", "Không — chạy trong trình duyệt (WebAssembly)"],
  ["Tài khoản", "Không cần (đăng nhập thì đồng bộ lịch sử Spot mẫu và Thử thách hôm nay · spot tự giải và lịch sử luyện tập của chúng nằm trên thiết bị này)"],
  ["Phạm vi", "Postflop, heads-up (flop, turn, river)"],
  ["Tính ở đâu", "Trên CPU máy bạn, không phải trên máy chủ"],
  ["Nền tảng", "Mọi trình duyệt hiện đại — Windows, macOS, Linux, di động"],
  ["Engine", "Mã nguồn mở WASM Postflop (AGPL-3.0) · mã nguồn đã sửa được công bố"],
];

/**
 * 「무엇을 원하나 → 어느 도구」 — win-rate-quiz 행은 vi 라우트가 없어 뺐다.
 * `poker equity calculator` 50은 계산기 의도 → /vi/calculator(10-07 신설)로 보낸다(도구→도구 카니발 방지 · hi 09-19 선례).
 * 행 수 5 = EN 4 − quiz 1 + equity 행·입문 글 행(hi PICK_TOOL 선례). 계산기 이름 = vi 확정명 «Máy tính xác suất poker»(HubPage title·side-rail 축어).
 */
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["Giải một spot postflop và xem tần suất bet", "GTO solver trên trang này", null],
  ["Xem nên mở bài nào từ mỗi vị trí", "Bảng bài khởi đầu", "/vi/hand-chart"],
  ["Tính outs, pot odds, SPR hay ICM mà không cần chạy solver", "Máy tính xác suất poker", "/vi/calculator"],
  ["So hai tay bài để xem equity (phần pot kỳ vọng)", "Máy tính equity", "/vi/calculator"],
  ["Học luật và cách chơi Texas Hold'em từ đầu", "Hướng dẫn cho người mới", "/vi/blog/texas-holdem-rules-for-beginners"],
];

/** 사용법 — 앱 사이드바 단계 라벨(라이브 vi 축어 «① Range OOP ② Range IP ③ Board ④ Cỡ cược ⑤ Chạy solver»)을 그대로 쓴다. */
const STEPS = [
  { n: "①", title: "Range OOP", desc: "Tô hoặc nhập range preflop của người chơi không có vị trí (OOP) trên lưới 13×13: 22+, A2s+, KTo+. Trên lưới, đường chéo là pocket pair, nửa trên bên phải là tay bài suited (cùng chất), nửa dưới bên trái là offsuit (khác chất)." },
  { n: "②", title: "Range IP", desc: "Làm tương tự cho người chơi có vị trí (IP). Cách bắt đầu nhanh nhất là tải một spot mẫu rồi sửa range của nó, thay vì dựng hai range từ đầu." },
  { n: "③", title: "Board", desc: "Nhấn chọn ba lá flop hoặc nhấn Flop ngẫu nhiên. Muốn học một runout cụ thể thì cố định luôn turn và river." },
  { n: "④", title: "Cỡ cược", desc: "Đặt pot ban đầu, stack hiệu dụng và cỡ bet, raise cho từng vòng cược. Lần giải đầu tiên cứ để mặc định, chỉ cần xem lại pot và stack." },
  { n: "⑤", title: "Chạy solver", desc: "Tạo cây rồi chạy. Phép giải mất từ vài giây đến vài phút trên máy của bạn; xong thì mở tab Kết quả." },
];

/** 앱 「Hướng dẫn」가 초심자에게 그대로 복사해 쓰라고 주는 레인지(축어 · 좌석 라벨도 라이브 Hướng dẫn 축어 «OOP (BB, bên call)»·«IP (BTN, bên open)»). */
const STARTER_RANGES: [string, string][] = [
  ["OOP (BB, bên call)", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP (BTN, bên open)", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

/** 결과 화면 읽는 법 — 앱 도움말(Hướng dẫn «Đọc màn hình kết quả») 구역 라벨 축어(5행 — 「4」로 되돌리지 마라, EN M-046 E-3). */
const READ_SCREEN: string[][] = [
  ["Thanh trên cùng", "Chọn node trong diễn biến hành động (flop → bet → call → turn)", "Nhấn vào một node để nhảy tới chiến lược tại thời điểm đó"],
  ["Ma trận 13×13 (bên trái)", "Mỗi ô là một nhóm tay bài (các combo cùng loại); các mảng màu trong ô cho biết tần suất từng hành động", "Đỏ là bet hoặc raise (càng đậm cược càng lớn), xanh lá là check hoặc call; ô mờ là tay bài không có trong range"],
  ["Khung (trên bên phải)", "Tần suất hành động và số combo trên toàn bộ range", "Những câu như «range này check 98% ở đây» đọc từ chỗ này"],
  ["Nhóm tay bài (giữa bên phải)", "Range trúng board đến đâu — top pair, draw, chưa thành bài", "Nhìn nhanh board này có lợi cho ai"],
  ["Bảng (dưới bên phải)", "Trọng số, equity, EV và EQR của từng tay bài cùng % hành động", "Nhấn tiêu đề cột để sắp xếp; phần tóm tắt xuất được ra CSV"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES: [string, "yes" | "no", string][] = [
  ["Giải flop, turn và river", "yes", "Cây postflop đầy đủ"],
  ["Giải preflop", "no", "Range mở bài nằm ở bảng bài khởi đầu"],
  ["Tùy chỉnh cỡ bet và raise", "yes", "Phần trăm pot, bội số, all-in, geometric"],
  ["Cỡ donk bet (lead) riêng", "yes", "Thiết kế riêng đường bet trước của OOP"],
  ["Rake và mức rake tối đa", "yes", "Khớp với điều kiện ván bài bạn thật sự chơi"],
  ["Chỉnh cây trò chơi theo từng node", "yes", "Thêm hoặc bỏ hành động ở một node cụ thể"],
  ["Khóa node và giải lại", "yes", "Cố định tần suất hành động ở một node rồi giải lại"],
  ["Tùy chọn độ chính xác và bộ nhớ", "yes", "Số thực 32-bit hoặc số nguyên 16-bit · giới hạn ~4GB trong trình duyệt"],
  ["Đặt exploitability mục tiêu", "yes", "Càng thấp càng chính xác và càng chậm"],
  ["Lưu range và cài đặt", "yes", "Lưu, tải, nhập và xuất"],
  ["Xuất phần tóm tắt ra CSV", "yes", "Đưa thẳng vào bảng tính"],
  ["Chia sẻ spot bằng liên kết", "yes", "Gửi đúng spot của bạn cho nhóm học"],
  ["Mở spot mẫu đã giải sẵn", "yes", "Không phải chờ — lời giải hiện ra ngay"],
  ["Trainer GTO chấm theo EV mất", "yes", "Có cả bộ lọc điểm yếu và hàng đợi Xem lại"],
  ["Luyện với spot tự giải", "yes", "Chỉ cần nhấn một lần ở màn hình kết quả để lưu thành câu hỏi trainer · chỉ trên thiết bị này"],
];

/**
 * 외부 도구 비교 — ⚠ 가격·무료 티어 수치는 넣지 않는다(§12-B).
 * 🔴 「PioSOLVER는 유료」라고 쓰지 마라 — 확인된 것은 설치형·윈도우뿐이다(EN 주석 참조).
 */
const COMPARE: string[][] = [
  ["Cách tính", "Giải ngay trong trình duyệt, lúc bạn cần", "Tra các lời giải đã tính trước", "Giải tại máy sau khi cài"],
  ["Cài đặt", "Không", "Không", "Tệp cài đặt, Windows"],
  ["Phạm vi", "Postflop, heads-up", "Thường có cả preflop", "Postflop"],
  ["Sửa range và cây", "Tùy ý", "Trong bộ lời giải đã công bố", "Tùy ý"],
  ["Phép giải chạy ở đâu", "Trên máy bạn", "Trên máy của nhà cung cấp, từ trước", "Trên máy bạn"],
];

/**
 * 교육 예제 — 그룹·스팟 이름은 앱 화면 베트남어 축어(라이브 ?lang=vi · presets categoryVi/titleVi · cond = 앱 축어 + 3-bet 그룹만 SPR ≈ 4,0 병기(EN 동일)), 해설(note)은 베트남어.
 * 🔴 개수를 문장에 박지 않는다 — 아래 배열에서 센다.
 * ★2026-10-10 `slug` 13개 = vi 🅶 GTO 13편(docs/vi-cluster-plan.md §4-C 배포 회차 · 보드 ↔ 슬러그 = lib/gto-series-i18n.ts 순서).
 * 🔴 note 문안은 EN 정정본(M-038 RP-01·03·04 · M-042 RP-17 · M-045 RP-19 · M-046 E-4 · M-067)을
 *    옮긴 것이다 — 앱의 옛 문구로 되돌리지 마라.
 */
const SPOT_GROUPS = [
  {
    label: "Single raised pot — BTN vs BB (cơ bản)",
    cond: "OOP: BB (bên call) · IP: BTN (bên open) · Pot 5,5bb · Stack 97,5bb",
    items: [
      { slug: "a-high-board-cbet", board: "A♥7♦2♣", name: "Board A-high khô", note: "Flop điển hình về lợi thế range — lá A rơi đúng vào range của bên open" },
      { slug: "k-high-board-cbet", board: "K♠8♦3♣", name: "Board K-high khô", note: "Vẫn có lợi cho bên open nhưng tần suất check cao hơn. Hãy so với board có lá A" },
      { slug: "broadway-board-strategy", board: "Q♠J♦10♠", name: "Board broadway liền nhau, hai chất", note: "Trông như trúng cả hai range, nhưng trong cả loạt spot, đây là nơi BB hiện thực hóa equity kém nhất — 77,9% so với 119,4% của BTN — và check 99,9%" },
      { slug: "donk-bet-strategy", board: "9♥8♥7♣", name: "Board tầm trung liền nhau, hai chất", note: "Board single raised pot duy nhất mà BB thật sự donk bet: BB bet trước 23,7% số lần (lợi thế range vẫn thuộc BTN — 51,5% so với 48,5% equity của BB)" },
      { slug: "monotone-board-strategy", board: "Q♠9♠2♠", name: "Board monotone (cả 3 lá cùng chất)", note: "Cược lớn nhường chỗ cho cược nhỏ và check — ngay cả thùng đã thành cũng check thường xuyên" },
      { slug: "paired-board-strategy", board: "6♣6♦3♥", name: "Board có đôi", note: "Hầu như không ai trúng board, nên phần bluff tăng lên" },
      { slug: "low-board-check-raise", board: "6♠5♥2♦", name: "Board thấp rainbow (3 lá khác chất)", note: "Cuộc chiến overcard — spot để thiết kế check-raise: trên màn hình, hành động đầu của BB là check 96,8%, bet 3,2%" },
    ],
  },
  {
    label: "Pot 3-bet — BB 3-bet, BTN call (SPR thấp)",
    cond: "OOP: BB (bên 3-bet) · IP: BTN (bên call) · Pot 22,5bb · Stack 89bb · SPR ≈ 4,0",
    items: [
      { slug: "3bet-pot-cbet", board: "A♦K♠2♥", name: "Board A-high, lợi thế của bên 3-bet", note: "Flop tốt nhất mà range 3-bet có thể gặp — đầy AK, AA và KK. Điều khiến một cược nhỏ ép được toàn bộ range đối thủ là cấu trúc của range đó, không phải SPR thấp" },
      { slug: "3bet-pot-bet-sizing", board: "Q♥10♥7♠", name: "Board động, hai chất", note: "Board có cả flush draw lẫn straight draw còn sống — 98,4% của range bet cùng một cỡ, hai phần ba pot" },
      { slug: "3bet-pot-low-board", board: "8♦5♣2♠", name: "Board thấp khô", note: "Range 3-bet không có top pair nào ở đây — chỉ gutshot và backdoor — nhưng overpair vẫn giữ áp lực" },
    ],
  },
  {
    label: "Blind vs blind — SB vs BB (range rộng)",
    cond: "OOP: SB (bên open) · IP: BB (bên call) · Pot 6bb · Stack 97bb",
    items: [
      { slug: "blind-battle-cbet", board: "K♥10♦6♠", name: "Board K-high có lá 10", note: "Range rộng nên cả hai bên đều yếu — hãy so với phiên bản BTN vs BB" },
      { slug: "blind-battle-connected-board", board: "7♦6♦5♣", name: "Board thấp liền nhau, hai chất", note: "Hai range rộng trên board cực kỳ liền nhau: hai đôi và draw ở khắp nơi" },
      { slug: "ace-paired-board-strategy", board: "A♠A♥6♦", name: "Board đôi A", note: "Trips — một lá A trên tay ghép với đôi A trên board, tức sám cô (bộ ba, three of a kind) — không hiếm ở đây; chỉ là SB có nhiều hơn (88 combo so với 66 của BB); đó là lý do SB bet 80,1%" },
    ],
  },
];

const SPOT_TOTAL = SPOT_GROUPS.reduce((n, g) => n + g.items.length, 0);

/* ── 공통 조각 ───────────────────────────────────────────────────────── */

function Cta({ label, variant = "solid" }: { label: string; variant?: "solid" | "outline" }) {
  const base = "inline-block rounded-xl px-8 py-3 font-bold transition-opacity";
  return (
    <a
      href={SOLVER_URL}
      target="_blank"
      rel="noopener"
      className={
        variant === "solid"
          ? `${base} bg-primary text-lg text-primary-foreground hover:opacity-90`
          : `${base} border border-primary text-primary hover:bg-primary hover:text-primary-foreground`
      }
    >
      {label}
    </a>
  );
}

/** 표는 전부 가로 스크롤 컨테이너에 넣는다 — 모바일에서 페이지 자체가 밀리지 않게. */
function Table({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            {head.map((h) => (
              <th key={h} className="py-2 pr-4 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/50 align-top">
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "py-2 pr-4 font-medium" : "py-2 pr-4 text-muted-foreground"}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SolverClientVi({ reviews }: { reviews?: React.ReactNode } = {}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      <section className="mt-6">
        <h1 className="text-center text-2xl font-bold">
          GTO Poker Solver miễn phí — giải spot poker ngay trên trình duyệt
        </h1>
        <p className="mt-3 text-muted-foreground">
          Một <strong className="text-foreground">GTO solver</strong> nhận range (tập hợp tay bài có thể
          có) của hai người chơi, board (bài chung) và stack, rồi tính mỗi tay bài trong 169 tay bài khởi đầu nên bet (cược), check hay fold (bỏ bài) với
          tần suất bao nhiêu. Solver của HoldemMaster làm phép tính đó{" "}
          <strong className="text-foreground">ngay trong trình duyệt của bạn — không tải về, không tài
          khoản, không gói trả phí</strong> — và hiển thị equity, EV và equity realization (EQR) của từng
          tay bài bên cạnh lưới chiến lược. Phạm vi: postflop heads-up.
        </p>
        <div className="mt-5 text-center">
          <Cta label="Mở solver →" />
          <p className="mt-2 text-xs text-muted-foreground">
            Nên dùng Chrome trên máy tính — trên iOS và Safari, solver chỉ chạy đơn luồng (single-thread), nên tự giải spot ở đó chậm hơn
          </p>
        </div>
        <Table head={["", "Chi tiết"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── GTO 솔버란 ───────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">GTO poker solver là gì?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTO solver tính từ đầu chiến lược{" "}
          <strong className="text-foreground">game theory optimal</strong> (tối ưu theo lý thuyết trò
          chơi). Bạn đưa cho nó range, board, stack và một cây hành động với các size bet/raise; nó lặp dần về cân bằng Nash và
          trả về tần suất bet, check, fold cho cả 169 tay bài. Đó chính là chỗ solver khác một
          bảng: bảng lưu đáp án mà ai đó đã tìm ra từ trước; solver tính đáp án cho đúng spot bạn đang
          gặp.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Nó không phải một bảng, cũng không phải một trainer gói sẵn ý kiến của ai đó. Đưa flop khác
          thì ra đáp án khác, vì nó không nhớ — nó tính lại.
        </p>
        {/* «부르는 이름» 문단 — 실측 검색어 축어(gto poker 170 · poker solver 20 · solver poker 10 · gto solver 10) + 현지 호칭 «solver» 차용(뱅크 §5-C ⑤). */}
        <p className="mt-3 text-sm text-muted-foreground">
          Cùng một công cụ được gọi bằng vài tên. <strong className="text-foreground">Poker solver</strong>,
          solver poker, <strong className="text-foreground">gto solver</strong> hay postflop solver — tất cả
          đều chỉ loại chương trình này; người chơi Việt Nam cũng dùng luôn chữ «solver» chứ hầu như không
          dịch. Còn <strong className="text-foreground">GTO poker</strong> hay poker GTO là trạng thái cân bằng mà
          chương trình này tính ra. Chỉ khác ở cụm từ tìm kiếm — còn thứ solver trên trang này tính ra thì vẫn
          là một.
        </p>
        <Table
          head={["Bạn muốn làm gì", "Dùng công cụ nào"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
      </section>

      {/* ── GTO 뜻 — 질문형 H2 + 직답(PAA «GTO trong poker là gì?» 축어 · gto poker là gì 30 · poker 앵커 필수) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">GTO trong poker là gì?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTO poker là gì? GTO là viết tắt của <strong className="text-foreground">Game Theory Optimal</strong> — tối ưu
          theo lý thuyết trò chơi: trong poker, đó là chiến lược không thể bị khai thác về lâu dài, dù đối
          thủ điều chỉnh thế nào. Khi người ta nói «GTO poker», họ nói về cân bằng này — và đó cũng là thứ
          một poker solver tính ra. GTO là mức sàn an toàn chứ không phải mức trần lợi nhuận: nó không cố trừng phạt
          đối thủ yếu, nó bảo đảm đối thủ giỏi không trừng phạt được bạn.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Điểm làm nhiều người ngạc nhiên nhất:{" "}
          <strong className="text-foreground">GTO trộn nhiều hành động với cùng một tay bài</strong> — bet
          70%, check 30% — để đối thủ không đọc được đường chơi của bạn. Vì vậy kết quả không phải một mệnh
          lệnh mà là một bảng tần suất. Solver không nói bạn <em>làm gì</em>, nó nói bạn làm việc đó{" "}
          <em>bao nhiêu phần trăm</em>; đó là lý do một buổi học với solver kết thúc bằng con số, không
          phải bằng quy tắc.
        </p>
      </section>

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Dùng poker solver thế nào? Năm bước</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Nếu đây là lần đầu bạn dùng solver,{" "}
          <strong className="text-foreground">hãy mở một spot mẫu trước khi tự thiết lập bất cứ thứ gì.</strong>{" "}
          Những spot đó đã được giải sẵn, nên bạn học cách đọc kết quả trước khi học cách nhập dữ liệu.
          Khi tự dựng spot của mình, các tab đi theo thứ tự từ trên xuống ở thanh bên trái.
        </p>
        <ol className="mt-4 space-y-4">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {s.n}
              </span>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          Trong spot tùy chỉnh, bạn nhập số chip nguyên, đơn vị tùy bạn chọn. Muốn nghĩ theo big blind, hãy dùng{" "}
          <strong className="text-foreground">10 chip = 1bb</strong> (pot 55 là 5,5bb). Spot mẫu và
          trainer tự quy đổi theo thang này.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Dựng hai range từ đầu là cách chậm. Range mở bài theo vị trí nằm ở{" "}
          <Link href="/vi/hand-chart" className="font-semibold text-primary hover:underline">
            bảng bài khởi đầu
          </Link>
          . Hai range dưới đây lại là chuyện khác:{" "}
          <strong className="text-foreground">đây là range mà các spot mẫu Single raised pot dùng</strong>{" "}
          (BTN vs BB), sẵn sàng để dán vào ① và ②.
        </p>
        <Table head={["Dán vào đâu", "Range"]} rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])} />
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Đọc màn hình kết quả thế nào?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Màn hình kết quả có năm vùng làm việc: trên cùng là{" "}
          <strong className="text-foreground">thanh chọn node</strong>, bên trái là{" "}
          <strong className="text-foreground">ma trận chiến lược 13×13</strong>, bên phải là{" "}
          <strong className="text-foreground">khung tần suất, nhóm tay bài và bảng chi tiết</strong>. Một
          tay bài làm gì thì đọc bên trái; cả range làm gì thì đọc bên phải.
        </p>
        <Table head={["Ở đâu", "Có gì", "Đọc thế nào"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          Một ví dụ: mở spot mẫu đầu tiên (A♥7♦2♣ rainbow, BB hành động trước). Khung hiện{" "}
          <strong className="text-foreground">Check 98,2%</strong> (455,5 combo); Bet 1,8bb 1,0%, Bet 4,1bb
          0,9%. Dòng Tất cả của bảng chi tiết cho toàn range: 464,0 combo, equity 45,1%, EV 2,09bb và{" "}
          <strong className="text-foreground">EQR 84,0%</strong>. Con số đáng dừng lại là equity
          realization dưới 100%: range này nắm 45,1% equity nhưng vì chơi không có vị trí và không có
          thế chủ động, nó chỉ hiện thực hóa được 84% giá trị của phần equity đó.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Nếu các khái niệm này còn mới với bạn, bài{" "}
          <Link href="/vi/blog/holdem-equity" className="font-semibold text-primary hover:underline">
            equity trong poker
          </Link>{" "}
          và bài{" "}
          <Link href="/vi/blog/holdem-continuation-bet" className="font-semibold text-primary hover:underline">
            continuation bet (c-bet)
          </Link>{" "}
          giải thích solver đang đo gì, trước khi bạn thử đọc các con số.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Nếu các tên trong khung Nhóm tay bài — top pair, hai đôi (two pair), thùng (flush) — còn mới với bạn, hãy xem{" "}
          <Link href="/vi/blog/holdem-hand-rankings" className="font-semibold text-primary hover:underline">
            thứ hạng các tay bài poker
          </Link>{" "}
          trước; còn thứ tự flop → turn → river mà thanh trên cùng đi theo thì nằm trong{" "}
          <Link href="/vi/blog/holdem-game-order" className="font-semibold text-primary hover:underline">
            trình tự một ván Texas Hold&apos;em
          </Link>
          .
        </p>
      </section>

      {/* ── 무료 범위 (기능표) ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Có thật là poker solver miễn phí không?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Có, và không có điều kiện ẩn nào: không phương thức thanh toán, không tính năng bị
          khóa, không giới hạn số lần giải mỗi ngày, không tài khoản. Những cài đặt thường chỉ có ở solver
          desktop phải cài — rake và mức rake tối đa, tùy chọn độ chính xác, chỉnh cây trò chơi theo từng
          node — đều có ở đây. Giới hạn thật sự duy nhất là solver này{" "}
          <strong className="text-foreground">chỉ giải postflop và heads-up</strong>.
        </p>
        <Table
          head={["Tính năng", "Có", "Ghi chú"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span className="font-bold text-emerald-600">Có</span>
            ) : (
              <span className="font-bold text-muted-foreground">Không</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="Dùng thử miễn phí →" variant="outline" />
        </div>
      </section>

      {/* ── 포스트플랍 범위 ──────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Vì sao chỉ postflop — solver giải range poker postflop đến đâu?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Đây là một <strong className="text-foreground">postflop solver</strong>: nó bắt đầu từ lúc flop
          mở ra và giải phần còn lại của ván bài cho hai người chơi. Preflop được cố ý để ngoài phạm vi, vì
          range preflop là một dạng bài toán khác — chúng đủ ổn định để đọc từ một bảng, còn postflop thì
          đổi theo từng board.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Trong phạm vi đó không có gì bị cắt bớt. Bạn quyết định{" "}
          <strong className="text-foreground">range postflop</strong> của hai bên, bất kỳ flop, turn và
          river nào, pot ban đầu và stack hiệu dụng, một cây hành động đầy đủ với các size bet/raise cho từng vòng cược. Vì vậy chiến
          lược postflop bạn nhận được không phải chiến lược chung chung mà là của đúng ván bạn chơi — kể
          cả rake, thứ mà phần lớn tài liệu học lặng lẽ bỏ qua.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Nửa preflop thì ở{" "}
          <Link href="/vi/hand-chart" className="font-semibold text-primary hover:underline">
            bảng bài khởi đầu
          </Link>
          . Hai thứ ghép lại bao trọn một ván bài: bảng quyết định bạn mở bài nào, solver quyết định
          chuyện gì xảy ra sau flop.
        </p>
      </section>

      {/* ── GTO 트레이너 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          Có GTO poker trainer miễn phí không? Trainer chấm điểm thế nào?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Có — Trainer GTO nằm ngay trong cùng phần mềm miễn phí này, không cần đăng ký riêng. Nó biến các
          spot đã giải thành bài luyện: bạn được chia một tay bài ở một điểm quyết định thật, chọn một
          hành động, và trainer chấm điểm bạn.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Điểm không chấm theo đúng hay sai mà theo{" "}
          <strong className="text-foreground">EV mất so với pot</strong>. Vì GTO trộn các hành động, chọn
          phương án tần suất thấp không tự động là lỗi — điều quan trọng là lựa chọn đó bỏ lỡ bao nhiêu
          giá trị kỳ vọng. Chọn một hành động; trainer hiện tần suất và EV của mọi hành động, bên cạnh mức EV
          mà lựa chọn của bạn đã mất.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/* 🔴 팟 대비 비율이다. 절대 bb가 아니다(앱 2026-08-15 변경 · EN 주석 참조). */}
          <li className="text-muted-foreground">
            Ngưỡng đo <strong className="text-foreground">tương đối theo pot</strong> —{" "}
            <span className="font-semibold text-emerald-500">tối đa 0,35%</span> là nước đi tốt nhất ·{" "}
            <span className="font-semibold text-blue-500">tối đa 1%</span> là chấp nhận được ·{" "}
            <span className="font-semibold text-orange-500">vượt quá</span> là spot cần xem lại
          </li>
          <li className="text-muted-foreground">
            Cùng 0,08bb là 1,45% trong pot 5,5bb (spot cần xem lại), nhưng chỉ 0,36% trong pot 22,5bb (chấp
            nhận được). Trong single raised pot 5,5bb, hai ngưỡng tương ứng 0,02bb và 0,06bb; trong pot
            3-bet 22,5bb là 0,08bb và 0,23bb. Mức sàn 0,02bb và 0,05bb giúp tránh coi những chênh lệch EV rất nhỏ do sai số của
            solver là lỗi
          </li>
          <li className="text-muted-foreground">
            Câu hỏi được rút từ nhiều điểm quyết định trong mỗi spot, nên số tổ hợp{" "}
            <strong className="text-foreground">vượt quá mười nghìn</strong>{" "}
            (exploitability mục tiêu 0,5%); bạn có thể luyện riêng single raised pot, pot 3-bet hoặc blind
            đối đầu blind (blind vs blind)
          </li>
          <li className="text-muted-foreground">
            Tay bài được chia <strong className="text-foreground">theo đúng trọng số range GTO thực</strong>{" "}
            — một tay bài xuất hiện đúng với tần suất bạn thật sự cầm nó ở spot đó
          </li>
          <li className="text-muted-foreground">
            Chuỗi (số câu đúng liên tiếp), thống kê điểm yếu và hàng đợi{" "}
            <strong className="text-foreground">Xem lại</strong> gồm những spot bạn mất EV đều chạy trên
            lịch sử luyện tập của bạn. Đăng nhập thì đồng bộ lịch sử Spot mẫu và Thử thách hôm nay giữa các
            thiết bị; chuỗi ngày và dấu hoàn thành của Thử thách hôm nay được giữ riêng trên từng thiết bị. Spot bạn
            tự giải và lịch sử luyện tập của chúng vẫn nằm trên thiết bị này kể cả khi đã đăng nhập
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="Mở Trainer GTO →" variant="outline" />
        </div>
      </section>

      {/* ── 교육 예제 (그룹·스팟 이름 = 앱 화면 베트남어 축어) ────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          {SPOT_TOTAL} spot mẫu đã giải sẵn, mở là thấy ngay
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Mỗi spot dưới đây đã được giải sẵn, nên chiến lược hiện ra ngay khi bạn mở — không phải chờ giải, không
          phải nhập thông số. Range xấp xỉ lối chơi online 100bb tiêu chuẩn; hãy tải một spot, đổi một range rồi giải
          lại để xem điều gì dịch chuyển. Đó là cách nhanh nhất để có cảm giác về việc texture của board làm
          chiến lược thay đổi ra sao. Tên nhóm và tên spot đúng từng chữ với tiếng Việt bạn thấy trên màn
          hình ứng dụng.
        </p>
        {SPOT_GROUPS.map((g) => (
          <div key={g.label} className="mt-5">
            <p className="text-sm font-semibold">{g.label}</p>
            <p className="text-xs text-muted-foreground">{g.cond}</p>
            <ul className="mt-2 space-y-1.5">
              {g.items.map((s) => {
                const item = s as { board: string; name: string; note: string; slug?: string };
                return (
                  <li key={item.board} className="text-sm">
                    <span className="font-semibold">{item.board}</span>
                    <span className="mx-1.5 text-muted-foreground">·</span>
                    {item.slug ? (
                      <Link
                        href={`/vi/blog/${item.slug}`}
                        className="font-semibold text-primary hover:underline"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-medium">{item.name}</span>
                    )}{" "}
                    <span className="text-muted-foreground">— {item.note}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      {/* ── 외부 도구 비교 ─ ⚠ 가격·무료 티어 수치 금지(§12-B) · 브랜드 조준 금지(gto wizard 880은 경쟁 브랜드) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Khác gì GTO Wizard hay PioSOLVER?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cả ba đều được gọi là solver, nhưng khác nhau ở chỗ phép tính diễn ra ở đâu và lúc nào. Thư viện
          lời giải như GTO Wizard cho bạn tra các spot đã được giải trước; cách này nhanh và có thể gồm cả
          preflop. Solver desktop như PioSOLVER cài trên máy Windows và giải tại máy. Solver này thì{" "}
          <strong className="text-foreground">giải ngay trong trình duyệt, lúc bạn cần</strong>; bạn sửa
          range và cây tùy ý mà không phải cài gì.
        </p>
        <Table
          head={["", "Solver của HoldemMaster", "Thư viện lời giải", "Solver desktop phải cài"]}
          rows={COMPARE}
        />
        {/* 🔴 근거 = wasm-postflop.pages.dev 자기 고지 + GitHub 저장소 «[Development suspended]» (EN 주석 참조). */}
        <p className="mt-4 text-sm text-muted-foreground">
          Nếu bạn đến đây sau khi tìm <strong className="text-foreground">WASM Postflop</strong>, có một
          khác biệt đáng biết: dự án mã nguồn mở gốc thông báo trên trang của mình rằng sẽ không cập nhật
          nữa, và kho mã của nó được đánh dấu là tạm ngừng phát triển. Solver này là một bản fork được bảo
          trì của engine đó — cùng giấy phép AGPL-3.0, cùng mã nguồn công khai; và bổ sung giao diện, spot mẫu
          cùng trainer.
        </p>
      </section>

      {/* ── 함께 쓰면 좋은 도구 (win-rate-quiz 행은 vi 라우트가 없어 뺐다 · 글 링크 = vi 규칙 글) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Công cụ poker dùng cùng solver</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/vi/hand-chart" className="font-semibold text-primary hover:underline">
              Bảng range mở bài preflop
            </Link>{" "}
            — solver này chỉ giải postflop. Nên <strong>mở</strong> bài nào từ mỗi vị trí thì xem bảng. Range
            trong bảng không phải kết quả của solver; đó là ước lượng tổng hợp từ các range mở bài tiêu chuẩn
            trong tài liệu công khai. Hai range dán sẵn ở trên lại là chuyện khác — range BTN vs BB mà các
            spot mẫu Single raised pot dùng
          </li>
          <li>
            <Link href="/vi/calculator" className="font-semibold text-primary hover:underline">
              Máy tính xác suất poker
            </Link>{" "}
            — outs, pot odds, SPR, chỉ số M và ICM khi bạn chỉ cần một con số mà không cần chạy solver
          </li>
        </ul>
      </section>

      {/* ── 기초 읽기 (규칙 글 5 + ★10-10 strategy 글 복원 — EN 마지막 행 · 글 앵커에 도구 의도 구 금지 § 3-C) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Đọc thêm để hiểu nền tảng</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/vi/blog/texas-holdem-rules-for-beginners" className="font-semibold text-primary hover:underline">
              Cách chơi Texas Hold&apos;em cho người mới
            </Link>{" "}
            — lá bài, chip và một ván bài diễn ra thế nào, trước khi đọc chiến lược
          </li>
          <li>
            <Link href="/vi/blog/holdem-game-order" className="font-semibold text-primary hover:underline">
              Trình tự một ván Texas Hold&apos;em
            </Link>{" "}
            — preflop, flop, turn và river đến lúc nào
          </li>
          <li>
            <Link href="/vi/blog/holdem-betting-actions" className="font-semibold text-primary hover:underline">
              Các hành động cược: check, call, raise và fold
            </Link>{" "}
            — luật của những hành động mà solver cho bạn xem tần suất
          </li>
          <li>
            <Link href="/vi/blog/holdem-blind-meaning" className="font-semibold text-primary hover:underline">
              Small blind và big blind trong poker
            </Link>{" "}
            — vị trí trong các ví dụ BTN vs BB và blind vs blind
          </li>
          <li>
            <Link href="/vi/blog/holdem-hand-rankings" className="font-semibold text-primary hover:underline">
              Thứ hạng các tay bài poker
            </Link>{" "}
            — nhận ra một đôi (one pair), sảnh (straight), thùng và các tay bài khác xuất hiện trong khung Nhóm tay bài
          </li>
          <li>
            <Link href="/vi/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
              Chiến thuật poker Texas Hold&apos;em
            </Link>{" "}
            — những khái niệm mà solver lượng hóa: vị trí, range, sự chủ động và kiểm soát pot
          </li>
        </ul>
      </section>

      {/* ── 써 본 사람들(솔버 후기창 · FAQ 바로 위 · docs/solver-review-design.md §2-3) ── */}
      {reviews}

      {/* ── FAQ — 배열은 ./faq.ts 단일 출처(서버 FAQPage 스키마와 공유) · 본문에도 전부 렌더 ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Câu hỏi thường gặp</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_VI.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">Q. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 설치 안내 + 오픈소스 고지 (AGPL) ─────────────── */}
      <section className="mt-12 text-center">
        <Cta label="Chạy GTO solver miễn phí →" />
        {/* 🔴 「오프라인으로 GTO 계산 가능」이라고 쓰지 마라 — 오프라인은 교육 예제 열람·트레이너만. */}
        <p className="mt-3 text-xs text-muted-foreground">
          Cài lên màn hình chính thì spot mẫu và trainer được lưu trên thiết bị, nên bạn luyện được{" "}
          <strong className="text-foreground">cả khi không có mạng</strong> — Chrome và Edge hiện biểu
          tượng cài đặt ở thanh địa chỉ; trên iPhone, dùng Chia sẻ → Thêm vào MH chính.
        </p>
      </section>
      <p className="mt-8 text-xs text-muted-foreground">
        Solver này dựa trên WASM Postflop của Wataru Inariba (AGPL-3.0), được HoldemMaster bản địa hóa và
        cải tiến. Toàn bộ mã nguồn đã sửa được công bố theo cùng giấy phép.
      </p>
    </div>
  );
}
