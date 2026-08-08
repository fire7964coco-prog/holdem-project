"use client";

import Link from "next/link";

const SOLVER_URL = "https://solver.holdemmaster.com";

/**
 * ⚠ 2026-08-08 — 경쟁 도구의 **구체적 가격·무료 티어 제한 수치를 뺐다.**
 *   원본에는 "PioSolver($275+)", "GTO Wizard(월 $39+)", "무료 티어는 하루 1개 제한"이
 *   적혀 있었는데 **1차 출처로 확인이 안 됐다**(GTO Wizard 가격은 로그인 뒤, PioSolver
 *   구매 페이지는 404). CLAUDE.md §12-B — 확인 안 된 수치는 쓰지 않는다.
 *   게다가 가격은 자주 바뀌어 몇 달 뒤 틀린 정보가 된다. "우리는 무료"라는 메시지는
 *   액수 없이도 성립한다. ★다시 넣으려면 공식 가격 페이지를 축어 인용으로 확인할 것.
 */
const FAQ = [
  {
    q: "홀덤 GTO 표는 어디서 보나요?",
    a: "이 솔버를 실행하면 나오는 13×13 매트릭스가 GTO 표입니다. 169개 핸드 각각을 어떤 빈도로 벳·체크·폴드해야 하는지 색으로 표시하고, 핸드별 에퀴티·EV·에퀴티 실현율(EQR)까지 표로 보여줍니다. 교육 예제를 누르면 계산 없이 완성된 표가 바로 뜹니다. 다만 이 솔버는 포스트플랍(플랍 이후) 전용이라, 프리플랍에서 어느 포지션에 어떤 핸드를 오픈할지 정리한 표가 필요하면 홀덤 차트를 보시는 편이 빠릅니다.",
  },
  {
    q: "GTO 솔버가 뭔가요?",
    a: "게임이론 최적(GTO) 전략을 계산하는 프로그램입니다. 특정 상황(레인지·보드·벳 사이즈)을 입력하면 내시 균형에 가까운 전략 — 어떤 핸드로 얼마나 자주 벳/체크/폴드해야 하는지 — 을 알려줍니다. PioSolver·GTO Wizard 같은 유료 도구가 유명하지만, 홀덤마스터 솔버는 완전 무료입니다.",
  },
  {
    q: "정말 무료인가요? 제한은 없나요?",
    a: "네, 100% 무료이고 하루 사용 횟수 제한도 없습니다. 오픈소스 솔버 엔진(AGPL-3.0)을 기반으로 만들어 소스코드까지 공개되어 있습니다. 회원가입도 필요 없습니다.",
  },
  {
    q: "설치해야 하나요?",
    a: "아니요. WebAssembly 기술로 만들어져 크롬 등 브라우저에서 바로 실행됩니다. 계산도 서버가 아닌 내 컴퓨터에서 이루어져 입력한 핸드 정보가 외부로 전송되지 않습니다.",
  },
  {
    q: "GTO Wizard와 뭐가 다른가요?",
    a: "GTO Wizard는 미리 계산해 둔 솔루션을 열람하는 방식이라 빠르고 편하지만, 무료로 볼 수 있는 범위가 정해져 있습니다. 홀덤마스터 솔버는 레인지와 트리를 직접 입력해 그 자리에서 계산하는 방식이라 자유도가 높고 횟수 제한이 없습니다. 대신 프리플랍은 지원하지 않고 포스트플랍(플랍 이후) 전용입니다.",
  },
  {
    q: "어떤 상황을 분석할 수 있나요?",
    a: "헤즈업(2명) 포스트플랍 상황 전부입니다. 양쪽 레인지, 보드, 스택, 팟, 스트리트별 벳/레이즈 사이즈를 자유롭게 설정하고 각 핸드의 전략·EV·에퀴티를 확인할 수 있습니다. 토너먼트/캐시 모두 활용 가능합니다.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "레인지 입력",
    desc: "OOP와 IP 각각의 프리플랍 레인지를 13×13 매트릭스에서 클릭하거나 텍스트(예: 22+, A2s+, KTo+)로 입력합니다.",
  },
  {
    n: "2",
    title: "보드·팟 설정",
    desc: "플랍 카드 3장(턴·리버까지도 가능)을 고르고, 시작 팟과 유효 스택을 bb 단위로 넣습니다.",
  },
  {
    n: "3",
    title: "벳 사이즈 트리 설정",
    desc: "스트리트별 벳/레이즈 사이즈(팟 대비 %)를 정합니다. 처음엔 기본값 그대로 써도 충분합니다.",
  },
  {
    n: "4",
    title: "솔버 실행 → 결과 확인",
    desc: "몇 초~몇 분 계산 후, 핸드별 전략 매트릭스와 EV·에퀴티·액션 빈도를 확인합니다.",
  },
];

/**
 * 교육 예제 13개 스팟의 해설 글 목록 (허브-스포크).
 * 보드·빈도는 docs/gto-solver-series-spec.md §4-B 확정 수치표가 단일 출처다.
 * ①~⑦ = SRP(BTN 오픈 → BB 콜, OOP는 BB 콜러) / ⑧~⑩ = 3벳팟(OOP는 BB 3벳터) /
 * ⑪~⑬ = 블라인드전(OOP는 SB 오픈레이저). 빈도는 전부 «OOP의 첫 액션» 기준이다.
 */
const SPOT_GROUPS = [
  {
    label: "싱글 레이즈 팟 — 먼저 행동하는 쪽은 BB 콜러",
    items: [
      { n: "①", slug: "a-high-board-cbet", board: "A♥7♦2♣", note: "BB가 98.2% 체크하는 이유" },
      { n: "②", slug: "k-high-board-cbet", board: "K♠8♦3♣", note: "체크 99.8% — 드라이 보드의 끝" },
      { n: "③", slug: "broadway-board-strategy", board: "Q♠J♦T♠", note: "브로드웨이에서도 체크 99.9%" },
      { n: "④", slug: "donk-bet-strategy", board: "9♥8♥7♣", note: "동크벳 23.7% — 먼저 치는 보드" },
      { n: "⑤", slug: "monotone-board-strategy", board: "Q♠9♠2♠", note: "모노톤 — 너트 플러시도 체크" },
      { n: "⑥", slug: "paired-board-strategy", board: "6♣6♦3♥", note: "페어 보드에서 포켓페어의 값" },
      { n: "⑦", slug: "low-board-check-raise", board: "6♠5♥2♦", note: "로우 보드 체크레이즈 설계" },
    ],
  },
  {
    label: "3벳 팟 — 먼저 행동하는 쪽은 BB 3벳터 (SPR 4.0)",
    items: [
      { n: "⑧", slug: "3bet-pot-cbet", board: "A♦K♠2♥", note: "체크가 0% — 레인지 전체 벳" },
      { n: "⑨", slug: "3bet-pot-bet-sizing", board: "Q♥T♥7♠", note: "벳 사이즈를 정하는 것은 보드" },
      { n: "⑩", slug: "3bet-pot-low-board", board: "8♦5♣2♠", note: "페어도 없는데 큰 사이즈" },
    ],
  },
  {
    label: "블라인드전 — 먼저 행동하는 쪽은 SB 오픈 레이저",
    items: [
      { n: "⑪", slug: "blind-battle-cbet", board: "K♥T♦6♠", note: "포지션 없이 67.4%를 치는 이유" },
      { n: "⑫", slug: "blind-battle-connected-board", board: "7♦6♦5♣", note: "같은 자리인데 9.6%로 급락" },
      { n: "⑬", slug: "ace-paired-board-strategy", board: "A♠A♥6♦", note: "A 페어 보드에서 80.1% 벳" },
    ],
  },
];

export default function SolverClient() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* 히어로 + CTA */}
      <section className="mt-6 text-center">
        <h2 className="text-2xl font-bold">
          무료 GTO 솔버 — 홀덤 GTO 표를 브라우저에서
        </h2>
        <p className="mt-3 text-muted-foreground">
          169개 핸드의 전략을 13×13 GTO 표로 계산합니다. 레인지 차트·벳 사이즈·EV·
          에퀴티 실현율까지 회원가입도, 결제도, 횟수 제한도 없이. 홀덤마스터가
          한국어로 제공하는 오픈소스 GTO 솔버입니다.
        </p>
        <a
          href={SOLVER_URL}
          target="_blank"
          rel="noopener"
          className="mt-5 inline-block rounded-xl bg-primary px-8 py-3 text-lg font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          솔버 바로 실행하기 →
        </a>
        {/*
          ⚠ 원본 문구는 "모바일 미지원"이었으나 **사실이 아니다** — 2026-08-08에 아이폰
          뷰포트로 직접 접속해 정상 렌더를 확인했다. 솔버 자체 안내도 "iOS·Safari에서는
          단일 스레드로 동작해 계산이 느리다"이지 미지원이 아니다.
        */}
        <p className="mt-2 text-xs text-muted-foreground">
          PC 크롬 권장 — iOS·Safari에서는 브라우저 제약으로 계산이 느립니다
        </p>
      </section>

      {/* 사용법 4단계 */}
      <section className="mt-12">
        <h3 className="text-xl font-bold">사용법 — 4단계면 끝</h3>
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
      </section>

      {/* 교육 예제 13개 스팟 해설 (허브-스포크 내부링크) */}
      <section className="mt-12">
        <h3 className="text-xl font-bold">교육 예제 13개 스팟 — 전편 해설</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          솔버의 「결과 바로 보기」에 들어 있는 13개 스팟을 한 편씩 풀어 썼습니다. 계산
          조건·액션 빈도·레인지 구성·EQR을 전부 이 솔버로 뽑은 1차 데이터로 설명합니다.
          숫자를 눈으로 확인하고 싶으면 해설을 먼저 읽고 같은 예제를 눌러 보세요.
        </p>
        {SPOT_GROUPS.map((g) => (
          <div key={g.label} className="mt-5">
            <p className="text-sm font-semibold text-muted-foreground">{g.label}</p>
            <ul className="mt-2 space-y-1.5">
              {g.items.map((s) => (
                <li key={s.slug} className="text-sm">
                  <span className="text-muted-foreground">{s.n}</span>{" "}
                  <Link href={`/blog/${s.slug}`} className="font-semibold text-primary hover:underline">
                    {s.board}
                  </Link>{" "}
                  <span className="text-muted-foreground">— {s.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* 함께 보면 좋은 도구 (내부링크) */}
      <section className="mt-12">
        <h3 className="text-xl font-bold">함께 쓰면 좋은 홀덤마스터 도구</h3>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/calculator" className="font-semibold text-primary hover:underline">
              홀덤 확률 계산기
            </Link>{" "}
            — 아웃츠·팟오즈·SPR·ICM을 즉석에서 계산 (솔버보다 가볍게)
          </li>
          <li>
            <Link href="/hand-chart" className="font-semibold text-primary hover:underline">
              홀덤 차트 (포지션별 오픈 레인지)
            </Link>{" "}
            — 이 솔버는 포스트플랍 전용입니다. <strong>프리플랍</strong>에서 어느 자리에 무엇을
            오픈할지는 이 차트가 담당하고, 솔버에 넣을 레인지의 출발점이 됩니다
          </li>
          <li>
            <Link href="/win-rate-quiz" className="font-semibold text-primary hover:underline">
              승률 퀴즈
            </Link>{" "}
            — 에퀴티 감각 훈련 후 솔버 결과를 읽으면 이해가 빨라집니다
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h3 className="text-xl font-bold">자주 묻는 질문</h3>
        <div className="mt-4 space-y-5">
          {FAQ.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">Q. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 오픈소스 고지 (AGPL) */}
      <p className="mt-12 text-xs text-muted-foreground">
        이 솔버는 오픈소스 WASM Postflop(AGPL-3.0)을 기반으로 홀덤마스터가
        한국어화·개선한 버전이며, 수정된 소스코드 전체가 공개되어 있습니다.
      </p>

      {/* FAQ 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </div>
  );
}
