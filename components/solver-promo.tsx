import Link from "next/link";
import { BG, INK, FONT_SANS, FONT_SERIF } from "@/lib/theme";

/**
 * 우측 사이드바용 「GTO 솔버」 직사각형 버튼 (사장님 지시 2026-08-14).
 *
 * ★왜 컴포넌트로 뺐나: 우측 사이드바가 **두 벌** 존재한다 —
 *   ① 홈: `app/community/community-client.tsx`의 인라인 <aside> (86KB 클라이언트 컴포넌트)
 *   ② 허브: `components/hub-sidebar.tsx` (서버 컴포넌트)
 *   같은 버튼을 양쪽에 손으로 복사하면 **반드시 갈라진다** — 이 레포가 좌측 레일·하단 탭바에서
 *   이미 두 번 겪은 결함이다(side-rail.tsx 주석). 그래서 한 파일만 고치면 양쪽이 같이 바뀌게 둔다.
 *
 * ★"use client"를 붙이지 않는다 — Link 하나뿐이라 서버 컴포넌트로 두고,
 *   클라이언트 컴포넌트(홈)에서 import해도 그대로 동작한다. 반대로 붙이면 허브(서버)가 손해다.
 *
 * 🔴 **랜딩이 있는 로케일에서만 렌더한다.** 랜딩 없는 로케일 사이드바에 넣으면 독자를
 *   읽지 못하는 페이지로 보낸다 — side-rail의 허브 메뉴 규율과 같다.
 *   ★2026-08-19 — `/en/solver`가 열려 **ko + en 두 곳**이 됐다(T24).
 *   🔴 **파일을 쪼개지 마라.** 영어판을 따로 만들면 갈라진다(위 ★ 참조) — `locale` prop으로
 *      분기하고, 지원 로케일은 아래 `COPY` 한 곳에서만 늘린다.
 *      호출부는 `SOLVER_PROMO_LOCALES.has(...)`로 판정한다 — 조건을 손으로 적지 마라.
 */

/** 골드 액센트 — 이벤트 카드가 쓰는 rgba(212,175,55,…)와 같은 색. */
const GOLD_ACCENT = "rgb(var(--gold-dark-rgb))";

/** 로케일별 문구·목적지. 랜딩이 새로 열리면 **여기 한 줄만** 추가한다. */
const COPY = {
  ko: {
    href: "/solver",
    badge: "♠ 무료 도구",
    title: "GTO 솔버",
    desc: "홀덤 GTO 표를 브라우저에서 바로 계산 — 설치도 회원가입도 없이 무료",
    cta: "솔버 열기 →",
  },
  en: {
    href: "/en/solver",
    badge: "♠ Free tool",
    title: "GTO Solver",
    desc: "Solve postflop spots in your browser — no install, no signup, no limits",
    cta: "Open the solver →",
  },
  /**
   * ★2026-08-21 — `/ja/solver`가 열려 **ko + en + ja 세 곳**이 됐다.
   * 🔴 차별화어를 「無料」가 아니라 **「登録不要」**로 잡았다 — 일본어 SERP 실측(2026-08-21):
   *    `ポーカー GTOツール 無料` top-10 중 **6개가 이미 제목에 「無料」**를 달고 있어 구별되지 않는다.
   *    「登録不要・インストール不要」를 표방하는 일본어 페이지는 top-30에 사실상 없다.
   *    🪶 다만 **badge 가 카드 맨 위에 렌더된다** — ja badge 가 「♠ 無料ツール」라
   *       「無料」는 결국 첫 글자이자 마지막 문장 양쪽에 있다. **뺀 게 아니라 병기다.**
   *       (초판 주석이 「뒤로 돌렸다」고 적었는데 렌더 순서를 오독한 것이었다 — 2026-08-21 정정.)
   */
  ja: {
    href: "/ja/solver",
    badge: "♠ 無料ツール",
    title: "GTOソルバー",
    desc: "ポストフロップのGTOをブラウザで計算 — インストールも登録も不要で無料",
    cta: "ソルバーを開く →",
  },
  /**
   * ★2026-08-22 신설. 🔴 `GTO`를 단독으로 두지 않았다 — 멕시코에서 과나후아토 주 코드다
   *   (뱅크 `es-gto-solver.md` §1-①). 항상 `solver`/`poker`와 붙여 쓴다.
   * 🔴 차별화어는 「무료」가 아니라 **「sin instalar · sin registrarte」**다 — SERP top-10 전부와 갈린다.
   */
  es: {
    href: "/es/solver",
    badge: "♠ Herramienta gratis",
    title: "Solver GTO",
    desc: "Calcula la estrategia GTO postflop en el navegador — sin instalar, sin registrarte y gratis",
    cta: "Abrir el solver →",
  },
} as const;

export type SolverPromoLocale = keyof typeof COPY;

/** 호출부가 «이 로케일에 랜딩이 있나»를 물어보는 자리. */
export const SOLVER_PROMO_LOCALES: ReadonlySet<string> = new Set(Object.keys(COPY));

export default function SolverPromo({ locale = "ko" }: { locale?: SolverPromoLocale }) {
  const t = COPY[locale] ?? COPY.ko;
  return (
    <Link
      href={t.href}
      className="block rounded p-4 transition-opacity hover:opacity-90"
      style={{ background: INK, border: `1px solid ${INK}` }}
    >
      <p
        className="text-[10px] font-bold tracking-widest uppercase mb-1"
        style={{ color: GOLD_ACCENT, fontFamily: FONT_SANS }}
      >
        {t.badge}
      </p>
      <p className="text-[17px] font-bold mb-1.5" style={{ color: BG, fontFamily: FONT_SERIF }}>
        {t.title}
      </p>
      <p
        className="text-[12px] leading-snug"
        style={{ color: "rgba(244,240,231,0.72)", fontFamily: FONT_SANS }}
      >
        {t.desc}
      </p>
      <span
        className="mt-3 block rounded py-2 text-center text-[13px] font-bold"
        style={{ background: GOLD_ACCENT, color: INK, fontFamily: FONT_SANS }}
      >
        {t.cta}
      </span>
    </Link>
  );
}
