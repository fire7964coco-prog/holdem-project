import type { ReactNode } from "react";

/**
 * 정책·안내 페이지(개인정보처리방침·이용약관·문의)의 공통 껍데기.
 *
 * 세 페이지가 같은 골격을 쓰므로 레이아웃을 한 곳에 둔다 — 한 페이지만 스타일이 어긋나는
 * 종류의 드리프트를 막기 위한 것이다. 본문 타이포그래피는 globals.css의 `.legal-prose`가 맡는다
 * (블로그 본문 `.blog-prose`와는 규격이 달라 따로 둔다 — 여긴 표·목록 위주의 문서다).
 */
export function LegalPage({
  eyebrow,
  title,
  lead,
  updated,
  intro,
  children,
}: {
  eyebrow: ReactNode;
  title: string;
  lead: string;
  /** 최종 수정일 (YYYY-MM-DD) */
  updated: string;
  /**
   * 조항 위에 놓이는 자유 블록(예: 대표 문의 메일 카드).
   * ★`.legal-prose` **밖**에 렌더한다 — 안에 넣으면 `.legal-prose a`·`p` 규칙이
   *   카드에 붙인 Tailwind 유틸리티를 특이도로 이겨서 링크가 골드 밑줄로 바뀐다.
   */
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <header className="mb-10 pb-8 border-b border-border">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
          {eyebrow}
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-foreground leading-tight mb-4">{title}</h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{lead}</p>
        <p className="mt-4 text-xs text-muted-foreground">
          최종 수정일 <time dateTime={updated}>{updated}</time>
        </p>
      </header>

      {intro}

      <div className="legal-prose">{children}</div>
    </div>
  );
}

/** 번호가 붙은 조항 한 덩어리. id는 앵커 링크용. */
export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-10" aria-labelledby={id}>
      <h2 id={id} className="text-lg md:text-xl font-bold text-foreground mb-3 scroll-mt-20">
        {title}
      </h2>
      {children}
    </section>
  );
}
