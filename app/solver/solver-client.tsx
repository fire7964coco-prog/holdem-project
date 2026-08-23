"use client";

import Link from "next/link";
import { SOLVER_FAQ } from "./faq";

const SOLVER_URL = "https://solver.holdemmaster.com";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/solver` 랜딩 — ★2026-08-14 GEO 경화 (사장님 지시: "정밀서치해서 랜딩 만들어라")
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ▶ 이 페이지가 하는 일: 솔버 본체(solver.holdemmaster.com)는 **noindex**다
 *   (라이브 HTML의 meta robots로 확인 2026-08-14). 검색 노출은 전부 이 랜딩이 받아
 *   본체로 흘려보낸다. 그래서 **롱테일 메인 키워드를 이 한 장이 다 먹어야 한다.**
 *
 * ▶ 키워드 근거 (2026-08-14 실측 · 라쿠 Korean/South Korea 12개월 평균):
 *     홀덤 gto 390 · 홀덤 gto 표 210 · 홀덤 gto 프로그램 140(+27.5%) ·
 *     gto 차트 90 · 포커 gto 90(**+47.4%**) · gto 포커 70 · 홀덤 솔버 70 · gto솔버 70 ·
 *     포커 솔버 50 · 홀덤 gto 공부 50 · gto 계산기 50 · 홀덤 gto 뜻 40 · 솔버 홀덤 30 ·
 *     무료 gto 30 · 솔버 뜻 30 · 포스트플랍 30 · 홀덤 gto 차트 20 · 홀덤 gto 계산기 20 ·
 *     gto 솔버 무료 10 · 홀덤 gto 전략 10 · 홀덤 gto 강의 10 · 홀덤 솔버 가격 10
 *   🪶 인접(참고): gto wizard 4,400 · **gto wizard 한글 110(+47.8%)** · gto wizard 가격 70
 *   전체 수확 원문은 `docs/keyword-bank/ko-gto-solver.md` §6.
 *
 * 🔴 조준 금지: 「gto 표」·「gto」 단독. 자동완성이 **만화 GTO**다
 *   (gto 애니·오프닝 가사·왓챠·보는 순서·켄지 …). 앞에 「홀덤」·「포커」가 붙어야 갈린다.
 * 🔴 카니발 방지 역할 분리: 프리플랍 표 = `/hand-chart`(「홀덤 차트」 480) ·
 *   확률 계산 = `/calculator`. 이 페이지는 **포스트플랍 GTO 계산**만 가져간다.
 *
 * ▶ GEO 구조 (posting.mdc 「🤖 AI 인용 구조(GEO)」):
 *   ① H2 = 검색자 질문 그대로 → 직후 자기완결 직답 → 근거(Q-A-E)
 *   ② 표 > 리스트 > 산문 — 비교·기능·읽는 법은 전부 표로
 *   ③ 숫자를 심는다 — 아래 수치는 **전부 라이브 실측**이다
 *   ④ 스키마에만 있고 본문에 없는 정보는 LLM이 못 읽는다 → featureList를 본문 표로도 노출
 *
 * 🔴 사실 출처 (2026-08-14 solver.holdemmaster.com을 직접 열어 화면으로 확인):
 *   · 교육 예제 3그룹의 계산 조건 — 팟 5.5/22.5/6bb · 스택 97.5/89/97bb (그룹 헤더에 표시)
 *   · 트레이너 상단 「13개 교육 프리셋 · 33개 결정 노드 · 계산 목표 오차 0.5%」
 *     ⚠ 08-13엔 「33개」가 번들에 없어 뺐었다. **지금은 화면에 있다.** 사라지면 먼저 지울 문장.
 *   · ① A♥7♦2♣ 결과 화면 — 체크 98.2%(455.5콤보) · 벳 1.8bb 1.0% · 벳 4.1bb 0.9% ·
 *     레인지 464콤보 · 에퀴티 45.1% · EQR 84.0% → `lib/posts/a-high-board-cbet.ts`와 일치
 *   · 로그인(구글·카카오) 시 학습 기록 계정 보관 · 스팟 공유 링크 · 요약 CSV 내보내기 ·
 *     레이크/레이크 캡 · 정밀도 모드(32비트 FP / 16비트 정수) · 게임 트리 직접 편집
 *   §13 산수 검산: 98.2+1.0+0.9=100.1(반올림) · 455.5+4.5+3.9=463.9≈464 ·
 *     SRP 팟 5.5=2.5+2.5+0.5, 스택 100−2.5=97.5 · 3벳팟 팟 22.5=11+11+0.5, 스택 100−11=89,
 *     SPR 89÷22.5=3.96≈4.0 · 블라인드전 팟 6=3+3, 스택 100−3=97
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC = [
  ["가격", "완전 무료 · 횟수 제한 없음"],
  ["설치", "없음 — 브라우저에서 바로 실행(WebAssembly)"],
  ["회원가입", "필요 없음 (로그인은 학습 기록 동기화용 선택 사항)"],
  ["다루는 구간", "포스트플랍(플랍·턴·리버) 헤즈업 2인"],
  ["계산 위치", "내 컴퓨터 CPU · 입력한 핸드가 서버로 전송되지 않음"],
  ["화면 언어", "한국어 (용어는 한국 홀덤 커뮤니티 표현)"],
  ["기반", "오픈소스 wasm-postflop(AGPL-3.0) · 수정 소스 전체 공개"],
];

/** 「무엇을 원하나 → 어느 도구」 — 내부 역할 분리를 표로 못박아 카니발을 막는다. */
const PICK_TOOL = [
  ["플랍 이후 상황의 GTO 전략과 빈도를 계산하고 싶다", "이 페이지의 GTO 솔버", null],
  ["프리플랍에서 어느 자리에 어떤 핸드를 오픈할지 보고 싶다", "홀덤 차트", "/hand-chart"],
  ["아웃츠·팟오즈·SPR·ICM을 즉석에서 계산하고 싶다", "홀덤 확률 계산기", "/calculator"],
  ["에퀴티 감각을 문제로 훈련하고 싶다", "승률 퀴즈", "/win-rate-quiz"],
] as const;

/** 사용법 — ★앱 사이드바가 ①~⑤라 5단계로 맞췄다(2026-08-14 실측. 종전 랜딩은 4단계였다). */
const STEPS = [
  { n: "①", title: "OOP 레인지", desc: "먼저 행동하는 쪽(포지션이 불리한 쪽)의 프리플랍 레인지를 13×13 매트릭스에서 칠하거나 텍스트로 입력합니다. 예: 22+, A2s+, KTo+" },
  { n: "②", title: "IP 레인지", desc: "나중에 행동하는 쪽의 레인지를 같은 방식으로 넣습니다. 교육 예제의 레인지를 불러와 일부만 고쳐 쓰는 것이 가장 빠릅니다." },
  { n: "③", title: "보드", desc: "플랍 3장을 클릭하거나 랜덤 플랍 버튼을 씁니다. 턴·리버까지 지정해 특정 런아웃만 볼 수도 있습니다." },
  { n: "④", title: "벳 사이즈 (트리 설정)", desc: "스타팅 팟과 유효 스택, 스트리트별 벳·레이즈 사이즈(팟 대비 %)를 정합니다. 처음엔 기본값 그대로 두고 팟·스택만 확인하면 충분합니다." },
  { n: "⑤", title: "계산 실행", desc: "내 컴퓨터에서 몇 초~몇 분 계산합니다. 완료되면 결과 탭에서 전략 매트릭스와 EV·에퀴티·액션 빈도를 봅니다." },
];

/** 결과 화면 읽는 법 — 솔버 도움말의 4구역 구분을 그대로 옮겼다(라이브 축어). */
const READ_SCREEN = [
  ["상단 스트립", "액션 흐름(플랍 → 턴 → 리버)의 장면 선택기", "클릭한 시점의 전략으로 이동한다. 회색뿐이면 상대 차례를 보고 있는 것"],
  ["왼쪽 13×13 매트릭스", "169개 핸드 · 칸 속 색 비율 = 액션 비율", "붉은 계열이 벳·레이즈(진할수록 큰 벳), 초록이 체크·콜, 꺼진 칸은 레인지에 없는 핸드"],
  ["오른쪽 위 타일", "레인지 전체 기준 액션 빈도(%)와 콤보 수", "«이 레인지가 몇 %를 체크하는가»를 한 줄로 읽는 자리"],
  ["오른쪽 중간 분류", "레인지가 보드에 무엇을 맞았는지(탑 페어·드로우 …)", "이 보드가 누구에게 유리한지 한눈에 보인다"],
  ["오른쪽 아래 상세 표", "핸드별 비중·에퀴티·EV·EQR·액션 %", "열 제목을 클릭해 정렬 · 요약은 CSV로 내보낼 수 있다"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES = [
  ["포스트플랍 전 스트리트 계산", "○", "플랍·턴·리버"],
  ["프리플랍 계산", "×", "프리플랍 표는 홀덤 차트가 담당"],
  ["벳·레이즈 사이즈 직접 지정", "○", "팟 대비 % · 배수 · 올인 · 지오메트릭"],
  ["덩크(리드) 벳 별도 사이즈", "○", "OOP가 먼저 치는 라인을 따로 설계"],
  ["레이크 · 레이크 캡", "○", "실제 게임의 레이크 조건까지 반영"],
  ["게임 트리 직접 편집", "○", "특정 노드에 벳 액션을 추가하거나 제거"],
  ["정밀도 · 메모리 모드", "○", "32비트 FP / 16비트 정수 · 브라우저 한계 4GB"],
  ["목표 오차(exploitability) 지정", "○", "낮출수록 정확하고 느려진다"],
  ["레인지 · 설정 저장", "○", "저장·불러오기 + 파일 가져오기·내보내기"],
  ["결과 요약 CSV 내보내기", "○", "표를 그대로 스프레드시트로"],
  ["스팟 공유 링크", "○", "내가 만든 상황을 주소 하나로 커뮤니티에 질문"],
  ["교육 예제 즉시 열람", "○", "미리 계산돼 있어 대기 없음"],
  ["GTO 트레이너", "○", "팟 대비 비율로 EV 손실 채점 · 약점 분석"],
];

/** 외부 도구 비교 — ⚠ 가격·무료 티어 수치는 넣지 않는다(§12-B, faq.ts 주석 참조). */
const COMPARE = [
  ["계산 방식", "브라우저에서 그 자리에서 직접 계산", "미리 계산된 솔루션을 열람", "PC에 설치해 직접 계산"],
  ["설치", "없음", "없음", "필요 (윈도우 중심)"],
  ["다루는 구간", "포스트플랍 헤즈업", "제품에 따라 프리플랍까지", "포스트플랍"],
  ["레인지·트리 수정", "자유롭게", "정해진 솔루션 범위 안에서", "자유롭게"],
  ["계산이 도는 곳", "내 컴퓨터 (전송 없음)", "제공사가 미리 계산한 결과", "내 컴퓨터"],
];

/**
 * 교육 예제 13개 스팟의 해설 글 목록 (허브-스포크).
 * 보드·빈도는 docs/gto-solver-series-spec.md §4-B 확정 수치표가 단일 출처다.
 * ①~⑦ = SRP(BTN 오픈 → BB 콜, OOP는 BB 콜러) / ⑧~⑩ = 3벳팟(OOP는 BB 3벳터) /
 * ⑪~⑬ = 블라인드전(OOP는 SB 오픈레이저). 빈도는 전부 «OOP의 첫 액션» 기준이다.
 *
 * ★2026-08-14 — `anchor`를 신설했다. 그 전까지 13개 링크의 앵커 텍스트가 **보드 문자열
 *   뿐**이었다(「A♥7♦2♣」). 무늬 기호에는 키워드가 하나도 없다. 각 글이 실제로 노리는
 *   낱말을 앵커로 올리고 보드는 시각 라벨로 남겼다. ⚠ 앵커 문구는 **각 글의 seoTitle에서
 *   뽑았다** — 새로 짓지 않는다. `note`의 수치는 §4-B 확정표 값이라 **건드리지 말 것**.
 * ★계산 조건(팟·스택)은 2026-08-14에 솔버 화면의 그룹 헤더에서 직접 읽었다.
 */
const SPOT_GROUPS = [
  {
    label: "싱글 레이즈 팟 — BTN 오픈 → BB 콜",
    cond: "먼저 행동하는 쪽은 BB(콜러) · 팟 5.5bb · 유효 스택 97.5bb",
    items: [
      { n: "①", slug: "a-high-board-cbet", board: "A♥7♦2♣", anchor: "A하이 보드 C벳", note: "BB가 98.2% 체크하는 이유" },
      { n: "②", slug: "k-high-board-cbet", board: "K♠8♦3♣", anchor: "K하이 보드 C벳", note: "체크 99.8% — 드라이 보드의 끝" },
      { n: "③", slug: "broadway-board-strategy", board: "Q♠J♦T♠", anchor: "브로드웨이 보드 전략", note: "체크 99.9%" },
      { n: "④", slug: "donk-bet-strategy", board: "9♥8♥7♣", anchor: "동크벳 레인지", note: "23.7% — 먼저 치는 보드" },
      { n: "⑤", slug: "monotone-board-strategy", board: "Q♠9♠2♠", anchor: "모노톤 보드 전략", note: "너트 플러시도 체크" },
      { n: "⑥", slug: "paired-board-strategy", board: "6♣6♦3♥", anchor: "페어 보드 전략", note: "포켓페어의 값" },
      { n: "⑦", slug: "low-board-check-raise", board: "6♠5♥2♦", anchor: "로우 보드 전략", note: "체크레이즈 설계" },
    ],
  },
  {
    label: "3벳 팟 — BB 3벳 → BTN 콜",
    cond: "먼저 행동하는 쪽은 BB(3벳터) · 팟 22.5bb · 유효 스택 89bb · SPR 4.0",
    items: [
      { n: "⑧", slug: "3bet-pot-cbet", board: "A♦K♠2♥", anchor: "3벳팟 C벳과 SPR", note: "체크가 0% — 레인지 전체 벳" },
      { n: "⑨", slug: "3bet-pot-bet-sizing", board: "Q♥T♥7♠", anchor: "3벳팟 벳 사이즈", note: "사이즈를 정하는 것은 보드" },
      { n: "⑩", slug: "3bet-pot-low-board", board: "8♦5♣2♠", anchor: "3벳팟 로우 보드", note: "페어도 없는데 큰 사이즈" },
    ],
  },
  {
    label: "블라인드전 — SB 오픈 → BB 콜",
    cond: "먼저 행동하는 쪽은 SB(오픈 레이저) · 팟 6bb · 유효 스택 97bb",
    items: [
      { n: "⑪", slug: "blind-battle-cbet", board: "K♥T♦6♠", anchor: "블라인드전 C벳", note: "포지션 없이 67.4%를 치는 이유" },
      { n: "⑫", slug: "blind-battle-connected-board", board: "7♦6♦5♣", anchor: "홀덤 포지션별 핸드레인지", note: "같은 자리인데 9.6%로 급락" },
      { n: "⑬", slug: "ace-paired-board-strategy", board: "A♠A♥6♦", anchor: "A 페어 보드 트립스", note: "80.1% 벳" },
    ],
  },
];

/**
 * 🔴 **개수는 «세어서» 쓴다. 문장에 숫자를 박지 마라.**
 *   CLAUDE.md §1 — 「발행 개수를 문서에 적지 마라. 적는 순간 낡는다」.
 *   2026-08-15에 사장님이 잡았다: 「나는 주기적으로 포스팅을 계속 할 건데 13개보다 예시가
 *   더 많을 거 아니야」. 위 `SPOT_GROUPS`에 한 줄 넣으면 화면·H2가 전부 따라오게 둔다.
 *   ⚠ 시리즈 순번(①~⑬)은 `lib/gto-series.ts`가 별도 단일 출처다 — **둘 다 고쳐야 한다.**
 */
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

export default function SolverClient() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      <section className="mt-6">
        {/*
          ★2026-08-13 — h2 → h1. 형제 허브 7개(/ranking /rules /strategy /glossary /blog
          /hand-chart /calculator)는 **전부 h1이 정확히 1개**인데 이 페이지만 **0개**였다
          (빌드 산출물 실측). `HubPage`의 `title` prop은 마스트헤드 라벨이지 h1이 아니다.
        */}
        <h1 className="text-center text-2xl font-bold">
          무료 GTO 솔버 — 홀덤 GTO 표를 브라우저에서
        </h1>
        {/*
          ★h1 직후 직답 단락. 이 페이지의 28일 GSC는 쿼리 1·노출 1·32위였고 병목은 순위다.
          「홀덤 gto」(390)·「홀덤 gto 표」(210)·「홀덤 gto 프로그램」(140)으로 들어온
          검색자의 질문에 **첫 화면에서** 답한다. AI 검색도 페이지가 아니라 이 단락을 뽑는다.
        */}
        <p className="mt-3 text-muted-foreground">
          <strong className="text-foreground">홀덤 GTO 표</strong>는 169개 핸드 각각을 어떤
          빈도로 벳·체크·폴드해야 하는지 13×13 격자에 색으로 정리한 표입니다. 홀덤마스터
          GTO 솔버는 내 상황(양쪽 레인지·보드·스택·벳 사이즈)을 넣으면 그 표를 그 자리에서
          계산해 주는{" "}
          <strong className="text-foreground">다운로드도 회원가입도 결제도 없는 무료 웹 프로그램</strong>
          입니다. 플랍 이후(포스트플랍) 헤즈업 전용이고, 핸드별 EV·에퀴티·에퀴티 실현율까지
          같은 화면에서 봅니다.
        </p>
        <div className="mt-5 text-center">
          <Cta label="솔버 바로 실행하기 →" />
          {/*
            ⚠ 원본 문구는 "모바일 미지원"이었으나 **사실이 아니다** — 2026-08-08에 아이폰
            뷰포트로 접속해 정상 렌더를 확인했다. 솔버 안내도 "iOS·Safari에서는 단일
            스레드로 동작해 계산이 느리다"이지 미지원이 아니다.
          */}
          <p className="mt-2 text-xs text-muted-foreground">
            PC 크롬 권장 — iOS·Safari에서는 브라우저 제약으로 계산이 느립니다
          </p>
        </div>
        <Table head={["항목", "내용"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── GTO 솔버란 ───────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">GTO 솔버가 뭔가요?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTO 솔버는 포커의 <strong className="text-foreground">게임이론 최적(Game Theory
          Optimal)</strong> 전략을 직접 계산하는 프로그램입니다. 레인지·보드·스택·벳 사이즈를
          입력하면 내시 균형에 가까운 해를 반복 계산해, 169개 핸드 각각의 벳·체크·폴드 빈도를
          돌려줍니다. 외운 전략을 확인해 주는 도구가 아니라 그 상황의 답을 그 자리에서 만들어
          내는 계산기라는 점이 차트·계산기와 다릅니다.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          GTO의 핵심 성질은 <strong className="text-foreground">같은 핸드도 액션을 섞는다</strong>는
          것입니다. 어떤 핸드를 70% 벳·30% 체크로 두는 식이라, 결과는 하나의 정답이 아니라
          빈도표로 나옵니다. 그래서 솔버 화면은 «무엇을 해라»가 아니라 «무엇을 몇 %로 해라»를
          보여줍니다.
        </p>
        {/*
          ★2026-08-14 — «부르는 이름» 문단. 같은 것을 가리키는 검색어가 실제로 갈려 있고
          (포커 gto 90 +47.4% · gto 차트 90 · 포커 솔버 50 · 홀덤 레인지 차트 40),
          랜딩은 「홀덤 GTO」 표기만 쓰고 있었다. 억지 나열이 아니라 **용어 안내가 실제로
          필요한 자리**다 — 엔티티를 명확히 하면 AI 검색의 패시지 추출에도 유리하다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          부르는 이름은 여러 가지입니다. <strong className="text-foreground">포커 GTO</strong>와
          홀덤 GTO는 같은 개념이고, 솔버가 만들어 내는 결과물을 GTO 표 ·{" "}
          <strong className="text-foreground">GTO 차트</strong> · 레인지 차트라고 부릅니다.
          도구 이름도 GTO 솔버 · <strong className="text-foreground">포커 솔버</strong> · 홀덤
          솔버가 섞여 쓰입니다 — 검색어만 다를 뿐, 이 페이지의 솔버가 계산하는 것은 전부 같습니다.
        </p>
        <Table
          head={["무엇을 하고 싶은가", "쓸 도구"]}
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

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      {/*
        ★2026-08-14 H2 재조준 — 「홀덤 솔버」(70)의 구글 자동완성 1번이 **사용법**이다
        (사용법·다운로드·무료·뜻·추천). 「솔버 돌리는 법」도 자동완성에 실재한다.
        ⚠ 단계 수를 4 → 5로 고쳤다. 앱 사이드바가 ①OOP ②IP ③보드 ④벳 사이즈 ⑤계산 실행이라
          랜딩의 4단계는 실물과 어긋나 있었다(2026-08-14 실측).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">홀덤 솔버 사용법 — 5단계로 끝난다</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          처음이라면 <strong className="text-foreground">교육 예제부터 여세요.</strong> 계산 없이
          완성된 결과가 바로 떠서, 솔버를 돌리는 법을 몰라도 결과 읽는 법부터 익힐 수 있습니다.
          직접 계산은 왼쪽 사이드바의 번호 순서 그대로 다섯 단계입니다.
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
          입력값은 정수 칩 단위입니다. bb로 보고 싶으면{" "}
          <strong className="text-foreground">10칩 = 1bb</strong>로 넣으면 됩니다(팟 55 = 5.5bb).
          교육 예제와 트레이너는 이 기준으로 자동 환산해 표시합니다.
        </p>
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">결과 화면은 어떻게 읽나요?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          결과 화면은 네 구역입니다 — 위쪽 <strong className="text-foreground">장면 선택기</strong>,
          왼쪽 <strong className="text-foreground">13×13 전략 매트릭스</strong>, 오른쪽의{" "}
          <strong className="text-foreground">액션 빈도 타일·핸드 분류·상세 표</strong>. 왼쪽에서
          «어떤 핸드가 무엇을 하는지»를 보고, 오른쪽에서 «레인지 전체로는 몇 %인지»를 읽는
          구조입니다.
        </p>
        <Table head={["화면 위치", "무엇이 있나", "어떻게 읽나"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          예를 들어 교육 예제 ①(A♥7♦2♣ 레인보우, BB가 먼저 행동)을 열면 타일에{" "}
          <strong className="text-foreground">체크 98.2%</strong>(455.5콤보) ·{" "}
          벳 1.8bb 1.0% · 벳 4.1bb 0.9%가 뜨고, 상세 표 맨 윗줄에 레인지 전체 464콤보 ·
          에퀴티 45.1% · EQR 84.0%이 나옵니다. 이 숫자들이 무엇을 뜻하는지는{" "}
          <Link href="/blog/a-high-board-cbet" className="font-semibold text-primary hover:underline">
            A하이 보드 C벳 해설
          </Link>
          에서 한 줄씩 풀어 놨습니다.
        </p>
      </section>

      {/* ── 무료 범위 (기능표) ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">무료 GTO 프로그램인데 어디까지 되나요?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          기능 제한이 없습니다. 결제 수단을 묻지 않고, 잠긴 유료 구간도, 하루 사용 횟수 제한도
          없습니다. 레이크와 레이크 캡, 정밀도 모드, 게임 트리 직접 편집처럼 유료 데스크톱
          솔버에서 쓰던 설정도 그대로 있습니다. 유일한 경계는 이 솔버가{" "}
          <strong className="text-foreground">포스트플랍 헤즈업 전용</strong>이라는 것입니다.
        </p>
        <Table
          head={["기능", "지원", "메모"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "○" ? (
              <span className="font-bold text-emerald-600">있음</span>
            ) : (
              <span className="font-bold text-muted-foreground">없음</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="무료로 열어 보기 →" variant="outline" />
        </div>
      </section>

      {/* ── GTO 트레이너 ─────────────────────────────────────────────── */}
      {/*
        ★새 랜딩(`/trainer`)을 만들지 않고 이 랜딩에 «흡수»한다 (2026-08-13 판단, 08-14 유지).
        라쿠 실측에서 「gto 트레이너」류 10개가 전부 볼륨 데이터 없음이었다. 반면 이 페이지가
        노리는 축은 실재한다(홀덤 gto 390 · 홀덤 gto 표 210 · 홀덤 gto 프로그램 140).
        → 진입로를 늘리기 전에 있는 진입로를 두껍게 한다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">GTO 트레이너는 어떻게 채점하나요?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {/*
            🔴 M-038 RP-07 정정(2026-08-23) — 종전 문장은 채점 «기준»을 절대 bb로 적었다.
               앱은 2026-08-15에 **팟 대비 비율**로 바꿨다(0.35% / 1% · 하한 0.02bb·0.05bb).
               🪶 화면에 뜨는 «값»이 bb인 것은 맞다 — 그래서 아래 문장은 bb를 그대로 남긴다.
                  틀린 것은 «값의 단위»가 아니라 «합격선의 기준»이었다.
                  (2026-08-23에 솔버와 이 구조를 확인하고 저희 쪽 지적 하나를 철회했다.)
          */}
          채점 기준은 정답·오답이 아니라{" "}
          <strong className="text-foreground">얼마나 EV를 흘렸는가</strong>이고, 그 크기는{" "}
          <strong className="text-foreground">팟 대비 비율</strong>로 잽니다. GTO는 같은 핸드도 액션을
          섞기 때문에 빈도가 낮은 선택이 곧 오답은 아닙니다 — 기준은 «얼마나 손해였나»입니다.
          액션을 고르면 그 선택이 GTO 대비 몇 bb 손해였는지와 함께 액션별 혼합 빈도·EV를 전부
          공개합니다.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/*
            🔴 2026-08-19 정정 — 종전 「0.01bb / 0.05bb」는 **절대 bb 기준의 낡은 값**이었다.
               앱이 2026-08-15에 팟 대비 비율로 바꿨다(라이브 축어 확인 · 영어판 랜딩과 같은 값).
               절대 bb로 재면 «같은 0.05bb»가 작은 팟에선 큰 실수, 큰 팟에선 사소한 차이라
               3벳팟이 실제보다 나쁘게 보인다. **되돌리지 마라.**
               §13: 5.5×0.35%≈0.02 · 5.5×1%≈0.06 · 22.5×0.35%≈0.08 · 22.5×1%≈0.23
          */}
          <li>
            <span className="font-semibold text-emerald-500">팟 대비 0.35% 이하</span> = 최적 선택 ·{" "}
            <span className="font-semibold text-blue-500">1% 이하</span> = 허용 가능 ·{" "}
            <span className="font-semibold text-orange-500">그 이상</span> = 다시 볼 스팟
          </li>
          <li className="text-muted-foreground">
            같은 0.08bb가 팟 5.5bb에선 1.45%(다시 볼 스팟)이고 팟 22.5bb에선 0.36%(허용 가능)입니다
            — 그래서 팟 대비로 잽니다. 팟 5.5bb 싱글레이즈팟이면{" "}
            <strong className="text-foreground">0.02bb · 0.06bb</strong>, 팟 22.5bb 3벳팟이면{" "}
            <strong className="text-foreground">0.08bb · 0.23bb</strong>가 경계입니다
          </li>
          {/*
            ★2026-08-15 — 「문제가 13개뿐인가?」라는 오해가 실제로 나왔다(사장님).
            13은 «스팟» 수이고 문제 수가 아니다. 라이브 `trainer-decisions.json`(1.61MB)을 받아
            노드마다 «행동할 차례인 플레이어의 weights에서 0이 아닌 핸드»를 세니 **13,743**이었다
            (SRP 7종 각 1,364~1,477 · 3벳팟 3종 각 193~227 · 블라인드전 3종 각 1,008~1,106.
             솔버 세션 요청서의 「유효 핸드 13,743개」와 일치).
            🔴 **그런데 정확한 수를 박지 않는다.** 그 데이터는 «솔버가 소유»하고 우리 빌드가
               읽을 수 없어(다른 도메인) 자동 반영이 불가능하다 — 박으면 반드시 낡는다(CLAUDE.md §1).
               스팟이 늘어도 참인 **하한 표현**으로 쓴다.
          */}
          <li className="text-muted-foreground">
            출제는 스팟마다 여러 결정 지점에서 나오고, 그 조합이{" "}
            <strong className="text-foreground">1만 가지가 넘습니다</strong>(계산 목표 오차 0.5%)
            — 싱글레이즈팟·3벳팟·블라인드전으로 좁혀 풀 수도 있습니다
          </li>
          <li className="text-muted-foreground">
            핸드는 <strong className="text-foreground">실제 GTO 레인지 비중대로</strong> 뽑힙니다 —
            실전에서 그 상황에 그 핸드를 들고 있을 확률 그대로 문제가 나옵니다
          </li>
          <li className="text-muted-foreground">
            연속 정답 기록 · 상황별 약점 분석 · 손실이 컸던 문제는{" "}
            <strong className="text-foreground">복습</strong> 버튼으로 다시 출제
          </li>
          <li className="text-muted-foreground">
            기록은 <strong className="text-foreground">이 기기 안에만</strong> 저장되고 로그인은
            필요 없습니다. 구글·카카오로 로그인하면 계정에 보관해 다른 기기에서 이어서 풀 수 있습니다
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="GTO 트레이너 열기 → (사이드바에서 「GTO 트레이너」 선택)" variant="outline" />
        </div>
      </section>

      {/* ── 교육 예제 13개 (허브-스포크 내부링크) ────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          교육 예제 {SPOT_TOTAL}개 스팟 — 홀덤 GTO 전략 전편 해설
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          솔버의 「결과 바로 보기」에 들어 있는 {SPOT_TOTAL}개 스팟을 한 편씩 풀어 썼습니다. 계산
          조건·액션 빈도·레인지 구성·EQR을 전부 이 솔버로 뽑은 1차 데이터로 설명합니다.
          레인지는 100bb 온라인 표준의 근사치이고, 불러온 뒤 자유롭게 고쳐 비교해도 됩니다.
        </p>
        {SPOT_GROUPS.map((g) => (
          <div key={g.label} className="mt-5">
            <p className="text-sm font-semibold">{g.label}</p>
            <p className="text-xs text-muted-foreground">{g.cond}</p>
            <ul className="mt-2 space-y-1.5">
              {g.items.map((s) => (
                <li key={s.slug} className="text-sm">
                  <span className="text-muted-foreground">{s.n}</span>{" "}
                  <span className="font-semibold">{s.board}</span>
                  <span className="mx-1.5 text-muted-foreground">·</span>
                  <Link href={`/blog/${s.slug}`} className="font-semibold text-primary hover:underline">
                    {s.anchor}
                  </Link>{" "}
                  <span className="text-muted-foreground">— {s.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* ── 외부 도구 비교 ───────────────────────────────────────────── */}
      {/*
        ⚠ 가격·무료 티어 수치를 쓰지 않는다 — 1차 출처 확인이 안 됐고 자주 바뀐다(§12-B).
          «방식의 차이»만 적는다. 브랜드는 예시로만 괄호에 둔다.
        🪶 「gto wizard 한글」 110(+47.8%)·「gto wizard 가격」 70이 실측된다. 브랜드 직접
          조준은 안 하지만, 비교 문맥의 언급은 정당하고 이 표가 그 자리다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">GTO Wizard·PioSolver와 뭐가 다른가요?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          셋은 같은 «GTO 솔버»라도 계산이 도는 방식이 다릅니다. 미리 계산형(GTO Wizard 등)은
          완성된 솔루션을 열람하는 쪽이라 빠르고 프리플랍까지 덮습니다. 설치형(PioSolver 등)은
          윈도우 PC에 설치해 직접 계산합니다. 홀덤마스터 솔버는{" "}
          <strong className="text-foreground">설치 없이 브라우저에서 직접 계산하는</strong> 쪽이라,
          레인지와 트리를 자유롭게 바꿔 볼 수 있고 화면이 한국어입니다.
        </p>
        <Table
          head={["항목", "홀덤마스터 GTO 솔버", "미리 계산형", "설치형 데스크톱"]}
          rows={COMPARE}
        />
      </section>

      {/* ── 함께 쓰면 좋은 도구 ──────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">함께 쓰면 좋은 홀덤마스터 도구</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/hand-chart" className="font-semibold text-primary hover:underline">
              홀덤 차트 (포지션별 오픈 레인지)
            </Link>{" "}
            — 이 솔버는 포스트플랍 전용입니다. <strong>프리플랍</strong>에서 어느 자리에 무엇을
            오픈할지는 이 차트가 담당하고, 솔버에 넣을 레인지의 출발점이 됩니다
          </li>
          <li>
            <Link href="/calculator" className="font-semibold text-primary hover:underline">
              홀덤 확률 계산기
            </Link>{" "}
            — 아웃츠·팟오즈·SPR·ICM을 즉석에서 계산 (솔버보다 가볍게)
          </li>
          <li>
            <Link href="/win-rate-quiz" className="font-semibold text-primary hover:underline">
              승률 퀴즈
            </Link>{" "}
            — 에퀴티 감각 훈련 후 솔버 결과를 읽으면 이해가 빨라집니다
          </li>
        </ul>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {/*
        배열은 `./faq.ts`가 단일 출처다(서버 `page.tsx`의 FAQPage 스키마와 공유).
        문항은 구글 자동완성 원문에서 «검색자가 실제로 치는 형태»로 뽑았다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">자주 묻는 질문</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">Q. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 설치 안내 + 오픈소스 고지 (AGPL) ─────────────── */}
      <section className="mt-12 text-center">
        <Cta label="무료 GTO 솔버 실행하기 →" />
        {/*
          설치 안내 — ★2026-08-15. 솔버가 PWA로 배포됐다(라이브 확인:
          `manifest.webmanifest` `start_url: "/?view=trainer"` · `sw.js` 헤더 `Cache-Control: no-cache`).
          🔴 **「오프라인으로 GTO 계산 가능」이라고 쓰지 마라 — 사실과 다르다.**
             오프라인에서 되는 것은 **교육 예제 열람과 트레이너 풀이**뿐이고,
             커스텀 스팟 직접 계산은 계산 엔진을 한 번 내려받은 뒤에만 돈다.
             **라이브를 열어봐도 확인되지 않는 종류의 오류**라 주석으로 못박아 둔다(솔버 세션 회신 경고).
          🪶 자리를 하단에 둔 이유: 설치는 «쓸 마음이 이미 있는 사람»에게만 의미가 있다.
             솔버 앱 자체도 첫 진입엔 배너를 띄우지 않고 «예제 2개 열람 / 트레이너 3문제» 뒤에 띄운다.
          🔴 개수를 쓰지 않는다(CLAUDE.md §1) — 「교육 예제 13종」처럼 박으면 낡는다.
        */}
        <p className="mt-3 text-xs text-muted-foreground">
          홈 화면에 설치하면 교육 예제와 트레이너가 기기에 저장돼{" "}
          <strong className="text-foreground">인터넷이 끊겨도</strong> 문제를 풀 수 있습니다 —
          크롬·엣지는 주소창의 설치 아이콘, 아이폰은 공유 → 「홈 화면에 추가」.
        </p>
      </section>
      <p className="mt-8 text-xs text-muted-foreground">
        이 솔버는 오픈소스 WASM Postflop(AGPL-3.0)을 기반으로 홀덤마스터가
        한국어화·개선한 버전이며, 수정된 소스코드 전체가 공개되어 있습니다.
      </p>
    </div>
  );
}
