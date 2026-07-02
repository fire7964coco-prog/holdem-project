"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Clock, Tag, ChevronLeft, ChevronRight, ChevronDown, Share2, Link2 } from "lucide-react";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import type { Post } from "@/lib/posts";
import { POSTS } from "@/lib/posts";
import { SITE } from "@/lib/site";
import CommunityCTA from "@/components/community-cta";
import BlogTopBar from "@/components/blog-top-bar";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

const PokerOddsCalculator = dynamic(
  () => import("@/components/poker-odds-calculator").then((m) => m.PokerOddsCalculator),
  { ssr: false, loading: () => <div className="h-32 rounded-xl bg-card animate-pulse" /> }
);
const QuizWidget = dynamic(
  () => import("@/components/quiz-widget").then((m) => m.QuizWidget),
  { ssr: false, loading: () => <div className="h-24 rounded-xl bg-card animate-pulse" /> }
);

export function slugify(text: string): string {
  return text
    .replace(/[^\w\s가-힣]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();
}

/** 목차: H2(##)만 노출 — 핵심 요약·FAQ Q·소제목(###) 제외 (모바일 LCP·가독성) */
export function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  return [...content.matchAll(/^## (.+)$/gm)]
    .map((m) => ({ id: slugify(m[1]), text: m[1].trim(), level: 2 }))
    .filter((h) => !/이 글 핵심 요약/.test(h.text));
}

function TocList({ headings }: { headings: { id: string; text: string; level: number }[] }) {
  let h2Count = 0;
  return (
    <>
      <ol className="space-y-1.5">
        {headings.map((h) => {
          if (h.level === 2) h2Count++;
          const isH3 = h.level === 3;
          return (
            <li key={h.id} className={`flex items-start gap-2.5 ${isH3 ? 'ml-5' : ''}`}>
              {isH3 ? (
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
              ) : (
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                  {h2Count}
                </span>
              )}
              <a
                href={`#${h.id}`}
                className={`hover:text-primary transition-colors leading-snug ${isH3 ? 'text-muted-foreground/60 text-xs' : 'text-muted-foreground text-sm'}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export function renderMarkdown(content: string): string {
  /**
   * 첫 번째 이미지(LCP 후보)는 eager + fetchpriority="high"로 우선 로드,
   * 그 이후 이미지는 모두 loading="lazy" 처리.
   * width/height 속성으로 CLS(Cumulative Layout Shift) 방지.
   *
   * 정규식 체인은 패턴별로 순차 실행되므로 단순 카운터로는
   * "문서 순서상 첫 이미지"를 잡을 수 없다 → 본문을 스캔해 LCP 이미지 src를 미리 결정.
   */
  let lcpSrc: string | null = null;
  const faq = content.match(/:::faqcard\[([^\]]+)\]/);
  const md = content.match(/!\[[^\]]*\]\(([^)\s]+)/);
  if (faq && md) {
    lcpSrc = (faq.index! < md.index!) ? faq[1] : md[1];
  } else if (faq) {
    lcpSrc = faq[1];
  } else if (md) {
    lcpSrc = md[1];
  }
  const imgAttrs = (src: string): { loading: string; fetchpriority: string } =>
    src === lcpSrc
      ? { loading: "eager", fetchpriority: "high" }
      : { loading: "lazy", fetchpriority: "auto" };

  return content
    // Tie-break rule rows — language-independent block (rows come from markdown).
    // Syntax: :::tiebreak  (then one row per line)  name|rule|(+/-)kickerLabel  ... :::
    // MUST run before table / bold processing so its "|" separators don't leak.
    .replace(/^:::tiebreak\n([\s\S]*?)\n:::$/gm, (_, body) => {
      const rows = body
        .trim()
        .split('\n')
        .filter((l: string) => l.trim().length > 0)
        .map((line: string, i: number) => {
          const [name = '', rule = '', kickerRaw = ''] = line.split('|').map((s: string) => s.trim());
          const applies = kickerRaw.startsWith('+');
          const kickerLabel = kickerRaw.replace(/^[+-]\s*/, '');
          const pill = applies
            ? 'background:rgba(34,197,94,0.14);color:#16803c;border:1px solid rgba(34,197,94,0.35)'
            : 'background:rgba(0,0,0,0.05);color:var(--muted-foreground);border:1px solid rgba(0,0,0,0.10)';
          return (
            `<div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px;padding:8px 12px;border-radius:8px;background:#f0ebe0;border:1px solid #d8d0be;margin-bottom:5px">` +
            `<div style="width:22px;height:22px;border-radius:50%;background:rgba(196,154,24,0.15);border:1px solid rgba(196,154,24,0.4);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#b8820a;flex-shrink:0">${i + 1}</div>` +
            `<div style="font-weight:700;color:var(--foreground);font-size:13px;min-width:96px;flex-shrink:0">${name}</div>` +
            `<div style="flex:1;min-width:140px;color:var(--muted-foreground);font-size:12.5px;line-height:1.45">${rule}</div>` +
            (kickerLabel ? `<div style="font-size:11px;font-weight:700;padding:2px 9px;border-radius:999px;flex-shrink:0;${pill}">${kickerLabel}</div>` : '') +
            `</div>`
          );
        })
        .join('');
      return `<div style="margin:14px 0">${rows}</div>`;
    })
    // ── 매거진 컴포넌트: :::stripe ── 타이포 스탯 스트라이프 (값 | 라벨, 한 줄당 한 칸)
    // "|" 구분자를 쓰므로 table 처리보다 먼저 실행해야 한다.
    .replace(/^:::stripe\n([\s\S]*?)\n:::$/gm, (_, body) => {
      const rows = body
        .trim()
        .split('\n')
        .filter((l: string) => l.trim().length > 0);
      const cells = rows
        .map((line: string, i: number) => {
          const [value = '', label = ''] = line.split('|').map((s: string) => s.trim());
          const border = i === rows.length - 1 ? '' : 'border-right:1px solid #d8d0be';
          return (
            `<div style="flex:1;min-width:84px;padding:18px 8px;text-align:center;${border}">` +
            `<div style="font-size:27px;font-weight:900;color:hsl(43 65% 40%);line-height:1">${value}</div>` +
            `<div style="font-size:11.5px;color:hsl(30 22% 36%);margin-top:8px;line-height:1.4">${label}</div>` +
            `</div>`
          );
        })
        .join('');
      return `<div style="display:flex;flex-wrap:wrap;margin:28px 0;border-top:1px solid #d8d0be;border-bottom:1px solid #d8d0be">${cells}</div>`;
    })
    // ── 매거진 컴포넌트: :::lead ── 드롭캡 리드 문단 (.lead-para 스타일은 globals.css)
    // 내부 **bold**/[링크]는 아래 공통 처리에서 변환되도록 원문 그대로 감싼다.
    .replace(/^:::lead\n([\s\S]*?)\n:::$/gm, (_, body) =>
      `<p class="lead-para">${body.trim()}</p>`)
    // Numbered step cards — MUST run before **bold** processing
    .replace(/^\*\*(\d+)\. (.+?)\*\*\s*[—–]?\s*(.+)$/gm, (_, num, title, desc) =>
      `<div style="display:flex;gap:12px;align-items:flex-start;margin:10px 0;padding:14px 16px;background:#f0ebe0;border-radius:10px;border:1px solid #d8d0be">` +
      `<div style="width:26px;height:26px;border-radius:50%;background:rgba(196,154,24,0.15);border:1px solid rgba(196,154,24,0.4);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#b8820a;flex-shrink:0;margin-top:2px">${num}</div>` +
      `<div><div style="font-size:14px;font-weight:700;color:var(--foreground);margin-bottom:4px">${title.replace(/:$/, '')}</div>` +
      `<div style="font-size:13px;color:var(--muted-foreground);line-height:1.65">${desc}</div></div></div>`)
    .replace(/^### (.+)$/gm, (_, text) =>
      `<h3 id="${slugify(text)}" style="font-size:15px;font-weight:800;margin:20px 0 10px;padding:10px 16px;background:rgba(212,175,55,0.07);border-left:3px solid rgba(212,175,55,0.6);border-radius:0 8px 8px 0;color:var(--foreground);word-break:keep-all;overflow-wrap:break-word;line-height:1.45;letter-spacing:-0.01em">${text}</h3>`)
    .replace(/^## (.+)$/gm, (_, text) => `<h2 id="${slugify(text)}" class="blog-h2 text-xl sm:text-2xl font-extrabold text-foreground mt-8 sm:mt-10 mb-3 pb-2 border-b-2 border-primary/30">${text}</h2>`)
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-extrabold text-foreground mt-6 mb-5">$1</h1>')
    // FAQ cards — MUST run before **bold** processing (bold would consume the ** markers first)
    .replace(
      /^\*\*Q\. (.+?)\*\*\n\nA\. ([\s\S]+?)(?=\n\n\*\*Q\.|\n\n---|\n\n##|$)/gm,
      (_, q, a) =>
        `<div style="margin-bottom:12px;border:2px solid rgba(234,88,12,0.55);border-radius:12px;overflow:hidden">` +
        `<div style="padding:11px 16px;background:rgba(234,88,12,0.10);border-bottom:2px solid rgba(234,88,12,0.30);display:flex;gap:10px;align-items:flex-start">` +
        `<span style="flex-shrink:0;width:22px;height:22px;border-radius:50%;background:rgba(234,88,12,0.20);border:1.5px solid rgba(234,88,12,0.70);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#ea580c;margin-top:1px">Q</span>` +
        `<span style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.5">${q.trim()}</span>` +
        `</div>` +
        `<div class="blog-faq-answer" style="padding:12px 16px 12px 48px;font-size:13.5px;color:var(--muted-foreground);line-height:1.7">${a.trim()}</div>` +
        `</div>`
    )
    .replace(/==r:(.+?)==/g, '<mark class="brush-hl brush-hl-red">$1</mark>')
    .replace(/==g:(.+?)==/g, '<mark class="brush-hl brush-hl-green">$1</mark>')
    .replace(/==b:(.+?)==/g, '<mark class="brush-hl brush-hl-blue">$1</mark>')
    .replace(/==(.+?)==/g, '<mark class="brush-hl">$1</mark>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="italic text-foreground/90">$1</em>')
    .replace(/!\[([^\]]*)\]\(([^)]+?)\s+"([^"]+)"\)/g, (_, alt, src, cap) => {
      const a = imgAttrs(src);
      return `<figure class="my-4 sm:my-6 max-w-2xl mx-auto"><img src="${src}" alt="${alt}" width="1200" height="630" loading="${a.loading}" fetchpriority="${a.fetchpriority}" decoding="async" class="w-full h-auto rounded-xl border border-border transition-transform duration-200 hover:scale-[1.015] hover:shadow-lg" /><figcaption class="text-center text-xs text-muted-foreground mt-2 italic">${cap}</figcaption></figure>`;
    })
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => {
      const a = imgAttrs(src);
      return `<figure class="my-4 sm:my-6 max-w-2xl mx-auto"><img src="${src}" alt="${alt}" width="1200" height="630" loading="${a.loading}" fetchpriority="${a.fetchpriority}" decoding="async" class="w-full h-auto rounded-xl border border-border transition-transform duration-200 hover:scale-[1.015] hover:shadow-lg" /></figure>`;
    })
    .replace(
      /\[([^\]]+)\]\((\/downloads\/[^)]+\.pdf)\)/g,
      (_, label, href) =>
        `<a href="${href}" class="group my-6 flex flex-col gap-4 rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/15 via-primary/10 to-card p-5 no-underline shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_22px_70px_rgba(212,175,55,0.16)] sm:flex-row sm:items-center sm:justify-between">` +
        `<span class="flex items-start gap-4">` +
        `<span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/20 text-2xl shadow-inner">📄</span>` +
        `<span>` +
        `<span class="mb-1 block text-[11px] font-bold uppercase tracking-[0.18em] text-primary/90">PDF Cheat Sheet</span>` +
        `<span class="block text-lg font-black leading-snug text-foreground">${label}</span>` +
        `<span class="mt-1 block text-sm leading-relaxed text-muted-foreground">Printable PDF · quick table reference</span>` +
        `</span>` +
        `</span>` +
        `<span class="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-black text-black transition-transform group-hover:scale-105">PDF ↓</span>` +
        `</a>`
    )
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:brightness-125 transition-all">$1 ↗</a>')
    .replace(/\[([^\]]+)\]\((?!https?:\/\/)([^)]+)\)/g, '<a href="$2" class="text-primary underline underline-offset-2 hover:brightness-125 transition-all">$1</a>')
    .replace(/^---$/gm, '<hr class="border-border my-8" />')
    .replace(/^\|[-:\s|]+\|$/gm, '')
    .replace(
      /^\| (.+) \|$/gm,
      (_, row) => {
        const cells = row.split(' | ');
        const isHeader = cells.some((c: string) => /^\*\*/.test(c.trim()) || c.trim() === c.trim().toUpperCase());
        if (isHeader) {
          return `<tr class="border-b-2 border-border bg-muted/30">${cells.map((c: string) => `<th class="px-4 py-2.5 text-sm font-bold text-foreground text-left">${c.trim()}</th>`).join('')}</tr>`;
        }
        return `<tr class="border-b border-border">${cells.map((c: string) => `<td class="px-4 py-2.5 text-sm text-muted-foreground">${c.trim()}</td>`).join('')}</tr>`;
      }
    )
    // ── PPT 카드: :::card\n아이콘 | 제목 | 설명\n:::
    // 예) ✅ | 포지션 우선 | 핸드보다 앉은 자리가 더 중요하다
    .replace(/^:::card\n([\s\S]*?)\n:::$/gm, (_, body) => {
      const items = body.trim().split('\n').filter((l: string) => l.trim()).map((line: string, i: number) => {
        const [icon = '', title = '', desc = ''] = line.split('|').map((s: string) => s.trim());
        return (
          `<div style="display:flex;align-items:flex-start;gap:14px;padding:16px 18px;border-radius:14px;background:#ebe5d6;border:1px solid #d8d0be;margin-bottom:10px">` +
          `<div style="width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,#d4af37,#f0d060);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">${icon || String(i + 1)}</div>` +
          `<div style="flex:1;min-width:0">` +
          `<p style="font-weight:800;font-size:15px;color:#0d1c14;margin:0 0 4px">${title}</p>` +
          (desc ? `<p style="font-size:13px;color:#42372a;margin:0;line-height:1.6">${desc}</p>` : '') +
          `</div></div>`
        );
      }).join('');
      return `<div style="margin:28px 0">${items}</div>`;
    })

    // ── 단계 플로우: :::steps\n제목 | 설명\n:::
    // 예) 프리플랍 | 포지션 확인 후 핸드 범위 결정
    .replace(/^:::steps\n([\s\S]*?)\n:::$/gm, (_, body) => {
      const items = body.trim().split('\n').filter((l: string) => l.trim());
      const total = items.length;
      const cards = items.map((line: string, i: number) => {
        const [title = '', desc = ''] = line.split('|').map((s: string) => s.trim());
        const isLast = i === total - 1;
        return (
          `<div style="display:flex;gap:12px;align-items:stretch">` +
          `<div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">` +
          `<div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#d4af37,#f0d060);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:900;color:#0d1c14;flex-shrink:0">${i + 1}</div>` +
          (!isLast ? `<div style="width:2px;flex:1;min-height:20px;background:linear-gradient(#d4af37,#d8d0be);margin:4px 0"></div>` : '') +
          `</div>` +
          `<div style="padding:4px 0 ${isLast ? 0 : 20}px">` +
          `<p style="font-weight:800;font-size:15px;color:#0d1c14;margin:4px 0 4px">${title}</p>` +
          (desc ? `<p style="font-size:13px;color:#42372a;margin:0;line-height:1.6">${desc}</p>` : '') +
          `</div></div>`
        );
      }).join('');
      return `<div style="margin:28px 0;padding:22px 20px;background:#ebe5d6;border:1px solid #d8d0be;border-radius:16px">${cards}</div>`;
    })

    // ── A vs B 비교: :::compare\n왼쪽제목 | 오른쪽제목\n항목A | 항목B\n:::
    .replace(/^:::compare\n([\s\S]*?)\n:::$/gm, (_, body) => {
      const lines = body.trim().split('\n').filter((l: string) => l.trim());
      const [headerLine, ...rows] = lines;
      const [leftH = '', rightH = ''] = headerLine.split('|').map((s: string) => s.trim());
      const header = (
        `<div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-bottom:6px">` +
        `<div style="padding:10px 14px;background:linear-gradient(135deg,#d4af37,#f0d060);border-radius:10px 0 0 0;font-weight:900;font-size:13px;color:#0d1c14;text-align:center">${leftH}</div>` +
        `<div style="padding:10px 14px;background:#e2dccf;border-radius:0 10px 0 0;font-weight:900;font-size:13px;color:#42372a;text-align:center">${rightH}</div>` +
        `</div>`
      );
      const rowHtml = rows.map((line: string, i: number) => {
        const [left = '', right = ''] = line.split('|').map((s: string) => s.trim());
        const bg = i % 2 === 0 ? '#ebe5d6' : '#f0ebe0';
        return (
          `<div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-bottom:2px">` +
          `<div style="padding:10px 14px;background:${bg};font-size:13px;color:#0d1c14;font-weight:600">${left}</div>` +
          `<div style="padding:10px 14px;background:${bg};font-size:13px;color:#42372a">${right}</div>` +
          `</div>`
        );
      }).join('');
      return `<div class="blog-scroll-x" style="margin:0"><div style="min-width:300px;border-radius:12px;overflow:hidden;border:1px solid #d8d0be">${header}${rowHtml}</div></div>`;
    })

    .replace(/(<tr.*<\/tr>\n?)+/g, (m) => `<div class="overflow-x-auto my-6"><table class="w-full border border-border rounded-lg overflow-hidden">${m}</table></div>`)
    .replace(/^> \*\*(.+?)\*\*\n((?:^> .+\n?)+)/gm, (_, title, body) => {
      const lines = body.replace(/^> /gm, '').trim();
      return `<div class="summary-callout my-6 p-5 bg-primary/10 border border-primary/30 rounded-xl"><p class="font-bold text-primary mb-2">✦ ${title}</p><p class="text-sm text-foreground/90 leading-relaxed">${lines}</p></div>`;
    })
    .replace(
      /^:::rangechart:::$/gm,
      () => {
        const positions = [
          { name: 'BTN',  pct: 40, note: 'Best seat — acts last every street', color: 'rgba(212,175,55,1)',   bg: 'rgba(212,175,55,0.18)' },
          { name: 'SB',   pct: 35, note: 'Wide range, but first to act postflop', color: 'rgba(139,92,246,0.9)', bg: 'rgba(139,92,246,0.14)' },
          { name: 'BB',   pct: 40, note: 'Defend wide — already has equity in pot', color: 'rgba(99,179,237,0.9)',  bg: 'rgba(99,179,237,0.14)', label: '~40% def' },
          { name: 'CO',   pct: 28, note: 'Only BTN behind — attack freely', color: 'rgba(212,175,55,0.8)',   bg: 'rgba(212,175,55,0.12)' },
          { name: 'HJ',   pct: 20, note: 'Steal when early seats fold', color: 'rgba(212,175,55,0.6)',   bg: 'rgba(212,175,55,0.09)' },
          { name: 'LJ',   pct: 16, note: 'Solid range; add suited connectors', color: 'rgba(212,175,55,0.45)',  bg: 'rgba(212,175,55,0.07)' },
          { name: 'UTG',  pct: 12, note: 'Tightest seat — 8 players behind preflop', color: 'rgba(255,255,255,0.35)', bg: 'rgba(255,255,255,0.05)' },
        ];
        const rows = positions.map(p => {
          const barW = `${p.pct}%`;
          const label = (p as {label?: string}).label ?? `~${p.pct}%`;
          return (
            `<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">` +
            `<span style="width:36px;font-size:12px;font-weight:800;color:var(--foreground);flex-shrink:0">${p.name}</span>` +
            `<div style="flex:1;background:rgba(255,255,255,0.06);border-radius:6px;height:24px;overflow:hidden;position:relative">` +
            `<div style="width:${barW};height:100%;background:linear-gradient(90deg,${p.color},${p.bg});border-radius:6px;transition:width 0.3s"></div>` +
            `</div>` +
            `<span style="width:52px;font-size:12px;font-weight:700;color:${p.color};text-align:right;flex-shrink:0">${label}</span>` +
            `<span style="flex:1.2;font-size:11px;color:var(--muted-foreground);display:none" class="sm:inline">${p.note}</span>` +
            `</div>`
          );
        }).join('');
        return (
          `<div style="margin:24px 0;padding:18px 20px 14px;background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:14px">` +
          `<p style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--primary);margin:0 0 14px">Opening Range by Position — action folds to you</p>` +
          rows +
          `</div>`
        );
      }
    )
    .replace(
      /^:::handtable:::$/gm,
      () => {
        const ranks = [
          { rank: 1,  kr: '로열 플러시',     cards: ['A♠','K♠','Q♠','J♠','10♠'] },
          { rank: 2,  kr: '스트레이트 플러시', cards: ['9♥','8♥','7♥','6♥','5♥'] },
          { rank: 3,  kr: '포카드',          cards: ['8♣','8♦','8♥','8♠','K♥'] },
          { rank: 4,  kr: '풀하우스',        cards: ['Q♠','Q♥','Q♦','5♣','5♠'] },
          { rank: 5,  kr: '플러시',          cards: ['A♦','J♦','8♦','6♦','2♦'] },
          { rank: 6,  kr: '스트레이트',      cards: ['7♠','6♥','5♣','4♦','3♠'] },
          { rank: 7,  kr: '트리플',          cards: ['J♣','J♠','J♥','A♦','4♠'] },
          { rank: 8,  kr: '투페어',          cards: ['10♠','10♥','8♣','8♦','A♠'] },
          { rank: 9,  kr: '원페어',          cards: ['K♠','K♦','9♥','6♣','2♠'] },
          { rank: 10, kr: '하이카드',        cards: ['A♣','Q♠','9♥','5♦','3♣'] },
        ];
        const makeRow = ({ rank, kr, cards }: { rank: number; kr: string; cards: string[] }) => {
          const cardHtml = cards.map((card: string) => {
            const isRed = card.includes('♥') || card.includes('♦');
            const color = isRed ? '#dc2626' : '#111827';
            return `<div style="width:26px;height:38px;background:white;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;border:1px solid #d1d5db;box-shadow:0 1px 2px rgba(0,0,0,0.25);flex-shrink:0"><span style="font-size:8px;font-weight:800;color:${color};line-height:1;letter-spacing:-0.5px">${card}</span></div>`;
          }).join('');
          const isTop = rank <= 3;
          const rankColor = rank === 1 ? '#b8820a' : rank <= 3 ? '#c49a18' : '#6b5040';
          const bg = isTop ? 'rgba(212,175,55,0.10)' : 'rgba(0,0,0,0.02)';
          return `<div style="display:flex;align-items:center;gap:6px;padding:4px 8px;border-radius:6px;background:${bg};margin-bottom:3px"><div style="font-size:11px;font-weight:800;color:${rankColor};width:16px;text-align:right;flex-shrink:0">${rank}</div><div style="font-size:10px;font-weight:600;color:var(--foreground);width:84px;flex-shrink:0;line-height:1.2">${kr}</div><div style="display:flex;gap:2px;flex-wrap:nowrap">${cardHtml}</div></div>`;
        };
        const left  = ranks.slice(0, 5).map(makeRow).join('');
        const right = ranks.slice(5).map(makeRow).join('');
        return `<div class="blog-scroll-x" style="margin:16px 0"><div style="background:#f0ebe0;border:1px solid #d8d0be;border-radius:14px;padding:14px 16px;min-width:420px"><div style="font-size:11px;font-weight:700;color:#c49a18;text-align:center;margin-bottom:10px;letter-spacing:0.4px">홀덤족보 순위 10가지 완전 정리표</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 14px">${left}${right}</div><div style="font-size:9px;color:var(--muted-foreground);text-align:center;margin-top:8px">1위(강함) → 10위(약함) · 카드는 예시</div></div></div>`;
      }
    )
    .replace(
      /^:::hand\[([^\]]+)\]\s*(.*):::$/gm,
      (_, cards, caption) => {
        const cardList = cards.split(',').map((c: string) => c.trim());
        const cardHtml = cardList.map((card: string) => {
          const isRed = card.includes('♥') || card.includes('♦');
          const color = isRed ? '#dc2626' : '#111827';
          return `<div style="width:32px;height:46px;background:white;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;border:1px solid #d1d5db;box-shadow:0 1px 3px rgba(0,0,0,0.35);flex-shrink:0"><span style="font-size:11px;font-weight:800;color:${color};line-height:1;letter-spacing:-0.5px">${card}</span></div>`;
        }).join('');
        const captionHtml = caption ? `<span style="font-size:11px;color:var(--muted-foreground);align-self:flex-end;padding-bottom:2px">${caption}</span>` : '';
        // 카드 시퀀스는 항상 LTR 유지(RTL 언어에서 A-K-Q-J-10 순서가 뒤집히지 않도록).
        return `<div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:12px 0;padding:12px 16px;background:#f0ebe0;border-radius:10px;border:1px solid #d8d0be"><span style="display:inline-flex;flex-wrap:wrap;gap:6px;align-items:center;direction:ltr">${cardHtml}</span>${captionHtml}</div>`;
      }
    )
    .replace(
      /^:::map-search\[([^\]]+)\]\[([^\]]+)\]:::$/gm,
      (_, naverQuery, label) => {
        const naverUrl = `https://map.naver.com/v5/search/${encodeURIComponent(naverQuery)}`;
        const kakaoUrl = `https://map.kakao.com/?q=${encodeURIComponent(naverQuery)}`;
        return `<div style="background:#f0ebe0;border:1px solid #d8d0be;border-radius:16px;padding:20px 24px;margin:24px 0">
  <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
    <div style="width:44px;height:44px;border-radius:12px;background:rgba(212,175,55,0.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:20px">🗺️</div>
    <div>
      <div style="font-weight:700;font-size:15px;color:var(--foreground)">${label} — 위치 확인</div>
      <div style="font-size:12px;color:var(--muted-foreground);margin-top:2px">네이버·카카오 지도에서 실시간 위치·리뷰·사진을 확인하세요</div>
    </div>
  </div>
  <div style="display:flex;gap:10px;flex-wrap:wrap">
    <a href="${naverUrl}" target="_blank" rel="noopener noreferrer" style="flex:1;min-width:160px;display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#03C75A;color:#fff;font-weight:700;padding:12px 20px;border-radius:12px;font-size:13px;text-decoration:none;transition:filter 0.15s" onmouseover="this.style.filter='brightness(0.9)'" onmouseout="this.style.filter='brightness(1)'">
      <svg viewBox="0 0 24 24" style="width:14px;height:14px;fill:currentColor"><path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/></svg>
      네이버 지도에서 검색 ↗
    </a>
    <a href="${kakaoUrl}" target="_blank" rel="noopener noreferrer" style="flex:1;min-width:140px;display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#FEE500;color:#191919;font-weight:700;padding:12px 20px;border-radius:12px;font-size:13px;text-decoration:none;transition:filter 0.15s" onmouseover="this.style.filter='brightness(0.95)'" onmouseout="this.style.filter='brightness(1)'">
      <svg viewBox="0 0 24 24" style="width:14px;height:14px;fill:currentColor"><path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.73 1.6 5.13 4.03 6.56L5.1 21l4.5-2.5c.78.16 1.58.25 2.4.25 5.52 0 10-3.48 10-7.75C22 6.48 17.52 3 12 3z"/></svg>
      카카오맵에서 검색 ↗
    </a>
  </div>
</div>`;
      }
    )
    .replace(/^> (.+)$/gm, '<blockquote class="my-4 pl-4 border-l-4 border-primary/40 text-muted-foreground italic text-sm">$1</blockquote>')
    // → result blocks (after bold so inner bold is already processed)
    .replace(/^→ (.+)$/gm, (_, text) =>
      `<div style="display:flex;gap:10px;align-items:flex-start;margin:10px 0;padding:14px 16px;background:rgba(212,175,55,0.10);border-left:3px solid rgba(196,154,24,0.7);border-radius:0 10px 10px 0">` +
      `<span style="color:#d4af37;font-weight:900;font-size:17px;flex-shrink:0;line-height:1.5">→</span>` +
      `<div style="font-size:14px;line-height:1.7;color:var(--foreground)">${text}</div></div>`)
    // :::faqcard[/path/img.webp][alt][caption]::: — notebook-style FAQ visual card
    // LCP 후보(보통 글 첫머리)면 eager+fetchpriority=high, 아니면 lazy
    .replace(/^:::faqcard\[([^\]]+)\]\[([^\]]*)\]\[([^\]]*)\]:::$/gm, (_, src, alt, caption) => {
      const a = imgAttrs(src);
      return `<div style="margin:28px 0;padding:3px;border-radius:18px;background:linear-gradient(135deg,rgba(196,154,24,0.55) 0%,rgba(56,189,248,0.25) 48%,rgba(196,154,24,0.45) 100%);box-shadow:0 6px 24px rgba(0,0,0,0.15)">` +
        `<div style="background:#faf6ed;border-radius:16px;overflow:hidden">` +
        `<img src="${src}" alt="${alt}" loading="${a.loading}" fetchpriority="${a.fetchpriority}" decoding="async" width="1124" height="613" style="width:100%;height:auto;display:block" />` +
        `<div style="padding:10px 18px;border-top:1px solid rgba(196,154,24,0.25);text-align:center">` +
        `<p style="font-size:14px;color:#b8820a;margin:0;letter-spacing:0.4px;font-weight:700">${caption}</p>` +
        `</div></div></div>`;
    })
    // ── 매거진 컴포넌트: :::kicker[text]::: ── H2 바로 위 아이브로우(소제목 라벨).
    // 아래 음수 margin 으로 다음 ## 제목에 바짝 붙인다(제목은 TOC 유지를 위해 ##로 둠).
    .replace(/^:::kicker\[([^\]]+)\]:::$/gm, (_, text) =>
      `<div style="font-size:11px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;color:hsl(43 65% 40%);margin:2.6rem 0 -1.9rem">${text}</div>`)
    // ── 매거진 컴포넌트: :::pull[text]::: ── 풀쿼트(큰 인용). <br> 줄바꿈 허용.
    .replace(/^:::pull\[([^\]]+)\]:::$/gm, (_, text) =>
      `<figure style="margin:34px 0;text-align:center">` +
      `<div style="font-size:46px;line-height:0.4;color:hsl(43 78% 58%);opacity:0.5;margin-bottom:14px">&ldquo;</div>` +
      `<p style="font-size:22px;font-weight:800;line-height:1.55;color:hsl(152 45% 8%);margin:0;letter-spacing:-0.01em">${text}</p>` +
      `</figure>`)
    // ── 매거진 컴포넌트: :::note[text]::: ── 여백형 에디토리얼 노트(이탤릭 + 골드 좌측선)
    .replace(/^:::note\[([^\]]+)\]:::$/gm, (_, text) =>
      `<div style="margin:26px 0;padding:16px 20px;border-left:3px solid hsl(43 65% 44%);font-size:15px;color:hsl(30 22% 36%);font-style:italic;line-height:1.7">${text}</div>`)
    // :::tip[text]::: single-line tip callout
    .replace(/^:::tip\[([^\]]+)\]:::$/gm, (_, text) =>
      `<div style="display:flex;gap:10px;align-items:center;margin:14px 0;padding:12px 16px;background:rgba(59,130,246,0.07);border-radius:10px;border:1px solid rgba(59,130,246,0.2);font-size:13px;color:var(--foreground)">` +
      `<span style="font-size:16px;flex-shrink:0">💡</span><span>${text}</span></div>`)
    // :::stat[number] label::: — big stat pill
    .replace(/^:::stat\[([^\]]+)\] (.+):::$/gm, (_, num, label) =>
      `<div style="display:inline-flex;align-items:center;gap:10px;margin:8px 8px 8px 0;padding:8px 18px;background:rgba(212,175,55,0.1);border:1px solid rgba(212,175,55,0.3);border-radius:100px">` +
      `<span style="font-size:20px;font-weight:800;color:#d4af37">${num}</span>` +
      `<span style="font-size:12px;color:var(--muted-foreground)">${label}</span></div>`)
    // :::eventcta::: — 본문 중간 이벤트 참여 유도 소형 CTA (클릭 시 홈 커뮤니티 이벤트 탭)
    .replace(/^:::eventcta:::$/gm, () =>
      `<a href="/?tab=event" style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;text-decoration:none;margin:24px 0;padding:12px 14px 12px 16px;border-radius:12px;background:linear-gradient(135deg,#0f1626 0%,#141c30 100%);border:1px solid rgba(212,175,55,0.32);box-shadow:0 4px 16px rgba(0,0,0,0.16)">` +
      `<span style="flex:1;min-width:150px;display:flex;align-items:center;gap:9px">` +
      `<span style="font-size:18px;flex-shrink:0">🎰</span>` +
      `<span style="font-size:13.5px;font-weight:700;line-height:1.45;color:#f0e8d0">매주 일요일 기프트콘 이벤트 진행 중 <span style="color:rgba(255,255,255,0.45);font-weight:500">· 번호 6개 선택</span></span>` +
      `</span>` +
      `<span style="flex-shrink:0;display:inline-flex;align-items:center;gap:5px;padding:9px 16px;border-radius:9px;background:linear-gradient(135deg,#f7d774,#d4af37);color:#0b1120;font-size:13px;font-weight:800;white-space:nowrap">이벤트 참여하기 →</span>` +
      `</a>`)
    .replace(/^- (.+)$/gm, '<li class="flex gap-2 text-muted-foreground text-sm leading-relaxed mb-1"><span class="text-primary mt-1 flex-shrink-0">•</span><span>$1</span></li>')
    .replace(/(<li.*<\/li>\n?)+/g, (m) => `<ul class="my-4 space-y-1">${m}</ul>`)
    .replace(/\n\n/g, '</p><p class="text-muted-foreground text-base leading-relaxed mb-4">')
    .replace(/^(?!<[h|u|t|h|l|d|p|r|b])(.+)$/gm, (m) => m.trim() ? m : '')
}

export default function BlogPost({
  post,
  summarySlot,
}: {
  post: Post;
  /**
   * 서버(page.tsx)에서 본문 첫 이미지를 추출·제거 후 "이 글 전체 요약" 섹션으로 만들어 전달.
   * LCP를 제목 텍스트로 옮기기 위해 본문에서는 빠지고, 페이지 맨 하단(관련 글 다음)에 lazy 로드.
   */
  summarySlot?: ReactNode;
}) {
  const currentIndex = POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < POSTS.length - 1 ? POSTS[currentIndex + 1] : null;
  const related = POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  const [copied, setCopied] = useState(false);
  const [showStickyNext, setShowStickyNext] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const pageUrl = `${SITE}/blog/${post.slug}`;

  // 피드 등에서 진입 시 스크롤 상단 고정
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // 스크롤 60% 지나면 모바일 스티키 CTA 표시
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    setShowStickyNext(total > 0 && scrolled / total > 0.6);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  function copyLink() {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const headings = extractHeadings(post.content);
  const hasToc = headings.length >= 2;

  return (
    <div className="min-h-screen">
      <BlogTopBar homeHref="/" communityLabel="커뮤니티" />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className={hasToc ? "xl:grid xl:grid-cols-[220px_1fr] xl:gap-10" : ""}>

          {/* 데스크탑 사이드바 TOC — xl 이상에서만 표시 */}
          {hasToc && (
            <aside className="hidden xl:block">
              <div className="sticky top-16">
                <nav className="bg-card border border-border rounded-2xl p-5" aria-label="목차">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">📚 목차</p>
                  <TocList headings={headings} />
                </nav>
              </div>
            </aside>
          )}

          {/* 메인 콘텐츠 컬럼 */}
          <div className="min-w-0">
            {/* Article Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime} 읽기
                </span>
                <time dateTime={post.date} className="text-xs text-muted-foreground">
                  {post.date} 작성
                </time>
                {post.updated && post.updated !== post.date && (
                  <time
                    dateTime={post.updated}
                    className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                    title="이 글은 최신 정보로 업데이트되었습니다"
                  >
                    {post.updated} 업데이트
                  </time>
                )}
              </div>

              <div className="text-6xl mb-6">{post.emoji}</div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{post.desc}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {post.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground">
                    <Tag className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* 한 줄 정답 — Featured Snippet 후보 */}
            {post.tldr && (
              <aside
                aria-label="한 줄 정답"
                className="mb-8 relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30 rounded-2xl p-5 md:p-6"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 mt-0.5 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-primary"
                    aria-hidden="true"
                  >
                    💡 한 줄 정답
                  </span>
                </div>
                <p className="mt-2 text-base md:text-lg text-foreground leading-relaxed font-medium">
                  {post.tldr}
                </p>
              </aside>
            )}

            {/* 모바일 인라인 TOC — xl 미만에서만 표시 (데스크탑은 사이드바) */}
            {hasToc && (
              <details className="xl:hidden group bg-card border border-border rounded-2xl mb-6">
                <summary
                  className="flex items-center justify-between gap-3 px-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded-2xl hover:bg-card/70 transition-colors"
                  aria-label="목차 펼치기/접기"
                >
                  <span className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-primary">
                    📚 목차 <span className="text-muted-foreground/60 font-normal normal-case tracking-normal">({headings.length}개)</span>
                  </span>
                  <ChevronDown
                    className="w-5 h-5 text-primary transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <nav className="px-6 pb-6 pt-2 border-t border-border/60" aria-label="목차">
                  <TocList headings={headings} />
                </nav>
              </details>
            )}

            {/* Interactive Calculator — 확률 계산기 포스트 & 홀덤 확률 완전 정복 */}
            {(post.slug === "holdem-odds-calculator" || post.slug === "holdem-probability") && (
              <div>
                <PokerOddsCalculator />
              </div>
            )}

            {/* Article Body */}
            <article
              ref={contentRef}
              className="prose-holdem blog-prose bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-10"
            >
              {post.content.includes(':::quiz:::')
                ? (() => {
                    const parts = post.content.split(/^:::quiz:::$/m);
                    return (
                      <>
                        {parts.map((part, i) => (
                          <div key={i}>
                            <div
                              className="text-muted-foreground leading-relaxed"
                              dangerouslySetInnerHTML={{
                                __html: `<p class="text-muted-foreground text-base leading-relaxed mb-4">${renderMarkdown(part)}</p>`,
                              }}
                            />
                            {i < parts.length - 1 && <QuizWidget />}
                          </div>
                        ))}
                      </>
                    );
                  })()
                : (
                  <div
                    className="text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: `<p class="text-muted-foreground text-base leading-relaxed mb-4">${renderMarkdown(post.content)}</p>`,
                    }}
                  />
                )
              }
            </article>

            {/* Prev / Next Navigation — 강조형 CTA 버튼 */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="group">
                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:-translate-y-0.5 transition-all cursor-pointer">
                    <div className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                      <ChevronLeft className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">← 이전 글</div>
                      <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {prevPost.title}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : <div />}

              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className="group">
                  <div
                    className="flex items-center justify-between gap-4 p-5 rounded-2xl cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", boxShadow: "0 2px 12px rgba(212,175,55,0.25)" }}
                  >
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(13,28,20,0.6)" }}>다음 글 읽기 →</div>
                      <div className="text-sm font-extrabold leading-snug line-clamp-2" style={{ color: "#0d1c14" }}>
                        {nextPost.title}
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(13,28,20,0.12)" }}>
                      <ChevronRight className="w-5 h-5" style={{ color: "#0d1c14" }} />
                    </div>
                  </div>
                </Link>
              ) : <div />}
            </div>

            {/* Related Posts — 이미지 카드형 */}
            {related.length > 0 && (
              <div className="mt-12">
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">✦ 함께 읽으면 좋은 글</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="group">
                      <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all cursor-pointer h-full flex flex-col">
                        {r.image ? (
                          <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                            <Image
                              src={r.image}
                              alt={r.imageAlt ?? r.title}
                              fill
                              sizes="(max-width:768px) 100vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center aspect-[16/9] bg-primary/5 text-4xl">
                            {r.emoji}
                          </div>
                        )}
                        <div className="p-4 flex flex-col flex-1">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1.5">{r.category}</div>
                          <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug flex-1">{r.title}</h3>
                          <div className="flex items-center gap-1 mt-3 text-xs text-primary font-semibold">
                            읽기 <ChevronRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 📋 이 글 전체 요약 — LCP 회피용으로 본문 첫 이미지를 페이지 최하단에 lazy 로드 */}
            {summarySlot}

            {/* Author Bio Card — E-E-A-T 강화 */}
            <aside
              className="mt-12 bg-card border border-border rounded-2xl p-6 md:p-7"
              aria-label="작성자 정보"
            >
              <div className="flex items-start gap-5 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center text-3xl flex-shrink-0">
                  ♠
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground mb-0.5">작성자</div>
                  <div className="font-bold text-foreground text-lg mb-1">
                    <Link href="/about" className="hover:text-primary transition-colors">
                      홀덤마스터 편집팀
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    12년 경력의 포커 전략 전문가 팀. WSOP·KPT·APT 토너먼트 현장 취재 경험 보유.
                    GTO 솔버(GTO+, PioSolver) 분석 기반의 데이터 중심 전략 콘텐츠를 제공합니다.
                    모든 콘텐츠는 <strong className="text-foreground">실전 검증된 정보</strong>만을
                    담습니다.
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border">
                {[
                  { label: "운영 경력", value: "12년+" },
                  { label: "발행 글 수", value: "29편" },
                  { label: "현장 취재", value: "WSOP·APT" },
                  { label: "솔버 분석", value: "Pio · GTO+" },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <dt className="text-[10px] uppercase tracking-wider text-muted-foreground/80 mb-0.5">
                      {label}
                    </dt>
                    <dd className="text-xs font-bold text-primary">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "포커 전략", href: "/strategy" },
                    { label: "GTO 분석", href: "/strategy" },
                    { label: "토너먼트", href: "/tournaments" },
                  ].map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium hover:bg-primary/25 hover:border-primary/50 transition-all"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  편집팀 상세 소개 <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>

            {/* Social Share Buttons */}
            <div className="mt-8 bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  <Share2 className="w-4 h-4 text-primary" aria-hidden="true" /> 이 글 공유하기
                </span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="이 글을 트위터에 공유하기"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1da1f2]/10 border border-[#1da1f2]/30 text-[#1da1f2] text-xs font-semibold hover:bg-[#1da1f2]/20 transition-all"
                >
                  <FaXTwitter className="w-3.5 h-3.5" aria-hidden="true" /> Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="이 글을 페이스북에 공유하기"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877f2]/10 border border-[#1877f2]/30 text-[#1877f2] text-xs font-semibold hover:bg-[#1877f2]/20 transition-all"
                >
                  <FaFacebookF className="w-3.5 h-3.5" aria-hidden="true" /> Facebook
                </a>
                <button
                  type="button"
                  onClick={copyLink}
                  aria-label="이 글의 링크를 복사하기"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary/20 transition-all"
                >
                  <Link2 className="w-3.5 h-3.5" aria-hidden="true" />
                  {copied ? "복사됨!" : "링크 복사"}
                </button>
              </div>
            </div>

            {/* Community CTA */}
            <CommunityCTA locale="ko" />

            {/* Back to Blog */}
            <div className="mt-10 text-center">
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-yellow-400 transition-colors">
                <ChevronLeft className="w-4 h-4" /> 블로그 목록으로 돌아가기
              </Link>
            </div>
          </div>{/* end main content column */}
        </div>
      </div>

      {/* 모바일 스티키 CTA — 스크롤 60% 이후 표시, 다음 글 있을 때만 */}
      {nextPost && (
        <div
          className={`xl:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${showStickyNext ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
          style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", boxShadow: "0 -4px 24px rgba(212,175,55,0.35)" }}
        >
          <Link href={`/blog/${nextPost.slug}`} className="flex items-center justify-between gap-3 px-5 py-4">
            <div className="min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "rgba(13,28,20,0.55)" }}>다음 글 읽기 →</div>
              <div className="text-sm font-extrabold truncate" style={{ color: "#0d1c14" }}>{nextPost.title}</div>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(13,28,20,0.15)" }}>
              <ChevronRight className="w-5 h-5" style={{ color: "#0d1c14" }} />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
