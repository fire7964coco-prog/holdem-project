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

export default function SolverClient() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* 히어로 + CTA */}
      <section className="mt-6 text-center">
        <h2 className="text-2xl font-bold">
          무료 GTO 솔버 — 설치 없이 브라우저에서
        </h2>
        <p className="mt-3 text-muted-foreground">
          포스트플랍 레인지·벳 사이즈·EV 분석을 회원가입도, 결제도, 횟수 제한도
          없이. 홀덤마스터가 한국어로 제공하는 오픈소스 GTO 솔버입니다.
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
              스타팅 핸드 차트
            </Link>{" "}
            — 솔버에 넣을 프리플랍 레인지의 출발점
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
