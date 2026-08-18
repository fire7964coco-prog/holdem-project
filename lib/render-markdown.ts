/**
 * 마크다운 → HTML 렌더러.
 *
 * ★ 서버 전용이다. **클라이언트 컴포넌트에서 import 하지 말 것.**
 *   SSG라 결과 HTML은 빌드 때 확정되는데, 여기 있는 499줄까지 브라우저로 배달할 이유가 없다.
 *   서버에서 렌더해 HTML 문자열만 props로 넘긴다.
 *
 * ⚠ lib/blog-lcp.ts 가 이 함수와 **동일한 문서 순서 규칙**으로 LCP 이미지를 추출한다.
 *   이미지 관련 정규식을 고치면 그쪽도 같이 봐야 한다.
 *
 * 2026-08-02 blog-post-client.tsx(93~590행)에서 **한 글자도 바꾸지 않고** 옮겨왔다.
 */
import { slugify } from "./blog-headings";
import { RANGE_CHART_SEATS, rangeChartCopy } from "./range-chart";

/**
 * 풀쿼트 마크업 — 한 줄형과 블록형이 **같은 HTML** 을 내도록 한 곳에 둔다.
 * 두 곳에 적으면 갈라진다(`:::rangechart:::` 가 정확히 그렇게 본문과 갈렸다).
 */
const pullQuote = (text: string) =>
  `<figure style="margin:34px 0;text-align:center">` +
  `<div style="font-size:46px;line-height:0.4;color:hsl(43 78% 58%);opacity:0.5;margin-bottom:14px">&ldquo;</div>` +
  `<p style="font-size:22px;font-weight:800;line-height:1.55;color:hsl(152 45% 8%);margin:0;letter-spacing:-0.01em">${text}</p>` +
  `</figure>`;

/** 에디토리얼 노트 — 한 줄형·블록형 공용(위 pullQuote 와 같은 이유로 한 곳에 둔다). */
const editorialNote = (text: string) =>
  `<div class="blog-note" style="margin:26px 0;padding:16px 20px;border-left:3px solid hsl(43 65% 44%);font-size:15px;color:hsl(30 22% 36%);font-style:italic;line-height:1.7">${text}</div>`;

/**
 * @param locale `:::rangechart:::` 의 라벨·주석을 고르는 데만 쓴다. 생략하면 EN.
 *   🔴 **`.map(renderMarkdown)` 로 호출하지 마라** — map 이 2번째 인자로 «배열 인덱스»를
 *      넘기므로 locale 자리에 0, 1 이 들어간다. 반드시 `.map((c) => renderMarkdown(c, locale))`.
 */
export function renderMarkdown(content: string, locale?: string): string {
  /**
   * 첫 번째 이미지(LCP 후보)는 eager + fetchpriority="high"로 우선 로드,
   * 그 이후 이미지는 모두 loading="lazy" 처리.
   * width/height 속성으로 CLS(Cumulative Layout Shift) 방지.
   *
   * 정규식 체인은 패턴별로 순차 실행되므로 단순 카운터로는
   * "문서 순서상 첫 이미지"를 잡을 수 없다 → 본문을 스캔해 LCP 이미지 src를 미리 결정.
   */
  // 인라인 링크 형광색 순환(SSR 하이드레이션 일관성 위해 순서 기반 카운터)
  const LINK_HL = ['212,175,55', '236,72,153', '34,197,94', '249,115,22', '168,85,247'];
  let hlIdx = 0;

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

  /**
   * 본문 이미지를 Vercel 이미지 최적화(/_next/image)로 태운다. (2026-08-01)
   *
   * 왜: next.config.mjs에 AVIF·deviceSizes를 다 설정해 뒀는데 **본문 이미지는 그걸 못 탔다.**
   * 이 렌더러가 생 <img src="/images/x.webp">를 뱉기 때문이다. 실측(포지션 글):
   *   본문 5장 = 1200x675 원본을 342px 자리에 그대로 → 3.5배 낭비 · 합 95KB
   *   관련글 3장 = next/image 경유 384x216 → 1.0배 · 합 14KB
   * 최적화를 태우면 AVIF 협상 + 폭 리사이즈로 페이지당 ~80KB가 준다.
   *
   * ⚠ w 값은 next.config.mjs의 deviceSizes ∪ imageSizes 안에 있어야 한다.
   *   그 외 값을 넣으면 이미지 최적화 API가 400을 돌려준다.
   *   현재 허용: imageSizes 16·32·64·96·128·256·384 / deviceSizes 360·480·640·750·828·1080·1200·1920
   * ⚠ 외부 호스트(i.ytimg.com 등)는 remotePatterns 설정이 없으므로 건드리지 않는다.
   */
  const optSrc = (src: string, w: number, q = 75) =>
    src.startsWith("/") ? `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=${q}` : src;
  const optSet = (src: string, widths: number[], q = 75) =>
    src.startsWith("/") ? widths.map((w) => `${optSrc(src, w, q)} ${w}w`).join(", ") : "";
  /** 본문 전폭 이미지용 src/srcset/sizes 속성 문자열 (컨테이너 max-w-2xl = 672px) */
  const fullWidthImg = (src: string) => {
    if (!src.startsWith("/")) return `src="${src}"`;
    return (
      `src="${optSrc(src, 750)}" srcset="${optSet(src, [384, 640, 750, 1080])}" ` +
      `sizes="(max-width: 768px) 100vw, 672px"`
    );
  };

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
            `<div class="blog-stripe-cell" style="flex:1;min-width:84px;padding:18px 8px;text-align:center;${border}">` +
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
        `<span style="font-size:15.5px;font-weight:700;color:var(--foreground);line-height:1.5">${q.trim()}</span>` +
        `</div>` +
        // FAQ 답변은 본문 글자의 약 11%를 차지한다 — 13.5px는 모바일에서 너무 작았다.
        // 15px로 올린다(본문 16px보다 살짝 작아 위계는 유지). 2026-08-01 실측 근거.
        `<div class="blog-faq-answer" style="padding:12px 16px 12px 48px;font-size:15px;color:var(--muted-foreground);line-height:1.75">${a.trim()}</div>` +
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
      return `<figure class="my-4 sm:my-6 max-w-2xl mx-auto"><img ${fullWidthImg(src)} alt="${alt}" width="1200" height="630" loading="${a.loading}" fetchpriority="${a.fetchpriority}" decoding="async" class="w-full h-auto rounded-xl border border-border transition-transform duration-200 hover:scale-[1.015] hover:shadow-lg" /><figcaption class="text-center text-xs text-muted-foreground mt-2 italic">${cap}</figcaption></figure>`;
    })
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => {
      const a = imgAttrs(src);
      return `<figure class="my-4 sm:my-6 max-w-2xl mx-auto"><img ${fullWidthImg(src)} alt="${alt}" width="1200" height="630" loading="${a.loading}" fetchpriority="${a.fetchpriority}" decoding="async" class="w-full h-auto rounded-xl border border-border transition-transform duration-200 hover:scale-[1.015] hover:shadow-lg" /></figure>`;
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
    /* ══ 프로즈를 담는 디렉티브 4종(kicker·pull·note·tip) ══════════════════════════════
       🔴 **반드시 링크 변환(바로 아래)보다 «먼저» 돌아야 한다. 순서를 내리지 마라.**
          이 디렉티브들은 본문을 `[…]` 로 감싸는데, 그 안에 마크다운 링크 `[텍스트](/주소)` 가
          들어가면 **링크 정규식이 디렉티브의 여는 `[` 를 링크의 `[` 로 먹는다.**
          그러면 `:::note[…]:::` 은 `:::note<a …>…</a>.]:::` 이 되어 매치가 실패하고,
          **마커가 문자 그대로 독자 화면에 노출된다.** 2026-08-18에 실측으로 확인했다 —
          KO `paired-board-strategy`·`appt-korea-2026-guide`, es `poker-casino-primera-vez`,
          KO 레거시 `holdem-hand-rankings`(`[홀덤 확률 계산기](/calculator)`).
       🪶 굵게·하이라이트(위 167~172행)는 이보다 앞이라 본문에 이미 적용돼 있고,
          링크는 이 뒤에 돌면서 «생성된 HTML 안의» 마크다운 링크까지 정상 변환한다.
       🪶 본문 캡처가 `[^\]]+` 가 아니라 `.+`(탐욕 + 줄끝 `]:::$` 앵커)인 것도 같은 이유다.
          ⚠ `hand`·`map-search`·`faqcard`·`stat` 은 `]` 로 «칸을 나누는» 구조라 제외한다 —
            그쪽을 `.+` 로 바꾸면 칸 분리가 깨진다.
       ══════════════════════════════════════════════════════════════════════════════ */
    // :::kicker[text]::: — H2 바로 위 아이브로우. 음수 margin 으로 다음 ##에 바짝 붙인다.
    .replace(/^:::kicker\[(.+)\]:::$/gm, (_, text) =>
      `<div class="blog-kicker" style="font-size:11px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;color:hsl(43 65% 40%);margin:2.6rem 0 -1.9rem">${text}</div>`)
    /* :::pull ── 풀쿼트. **두 형태를 받는다**: ①블록형 `:::pull ⏎ 본문 ⏎ :::` ②한 줄형 `:::pull[본문]:::`
       🔴 ①은 2026-08-18까지 아예 처리되지 않아 마커가 그대로 노출됐다 — 실측 **27곳·9로케일**
          (de 5 · 나머지 8로케일 각 3 · **KO `holdem-implied-odds` 포함**).
          de 지시서 G2 는 「de·en·ja × 3편 = 10곳」으로 적었으나 실제는 2.7배였다.
       ★ 다른 블록 디렉티브(stripe·steps·compare·card·readnext)는 전부
         `/^:::NAME\n([\s\S]*?)\n:::$/gm` 관용구를 쓴다 — pull·note 만 빠져 있었다. */
    .replace(/^:::pull\n([\s\S]*?)\n:::$/gm, (_, text) =>
      pullQuote(text.trim().replace(/\n/g, '<br>')))
    .replace(/^:::pull\[(.+)\]:::$/gm, (_, text) => pullQuote(text))
    /* :::note ── 여백형 에디토리얼 노트. pull 과 같은 이유로 블록형도 받는다 —
       실측 **31곳·8로케일**이 블록형이었고 전부 새고 있었다. */
    .replace(/^:::note\n([\s\S]*?)\n:::$/gm, (_, text) =>
      editorialNote(text.trim().replace(/\n/g, '<br>')))
    .replace(/^:::note\[(.+)\]:::$/gm, (_, text) => editorialNote(text))
    // :::tip[text]::: — 팁 콜아웃
    .replace(/^:::tip\[(.+)\]:::$/gm, (_, text) =>
      `<div style="display:flex;gap:10px;align-items:center;margin:14px 0;padding:12px 16px;background:rgba(59,130,246,0.07);border-radius:10px;border:1px solid rgba(59,130,246,0.2);font-size:13px;color:var(--foreground)">` +
      `<span style="font-size:16px;flex-shrink:0">💡</span><span>${text}</span></div>`)
    // 인라인 썸네일 링크: [텍스트](/url "thumb:/images/x.webp") — 앵커 앞 미니 썸네일(핵심 링크 1~2개만 선택적 사용, 남발 금지)
    .replace(/\[([^\]]+)\]\((?!https?:\/\/)([^)\s"]+)\s+"thumb:([^"]+)"\)/g, (_m, t, u, img) =>
      `<a href="${u}" class="brush-link" style="--hl:${LINK_HL[hlIdx++ % LINK_HL.length]}"><img src="${optSrc(img, 64)}" alt="" loading="lazy" style="display:inline-block;width:1.3em;height:1.3em;object-fit:cover;border-radius:4px;vertical-align:-0.32em;margin-right:5px;border:1.5px solid #ffd23f" />${t}</a>`
    )
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, (_m, t, u) => `<a href="${u}" target="_blank" rel="noopener noreferrer" class="brush-link" style="--hl:${LINK_HL[hlIdx++ % LINK_HL.length]}">${t} ↗</a>`)
    .replace(/\[([^\]]+)\]\((?!https?:\/\/)([^)]+)\)/g, (_m, t, u) => `<a href="${u}" class="brush-link" style="--hl:${LINK_HL[hlIdx++ % LINK_HL.length]}">${t}</a>`)
    // 🔴 H2 «직전»의 --- 는 hr 로 그리지 않는다 (2026-08-18 · UX 브리프 §3 #1).
    // 이유: 위 151행의 h2 가 이미 border-b-2 로 «자기 밑줄»을 갖는다. hr 을 같이 그리면
    // 40px 안에 회색 선 + 골드 밑줄이 겹쳐 «구분 신호가 중복»된다(브리프 §0 ②).
    // 실측 근거: `---` 6,528개 중 5,393개(82.6%)가 H2 직전이고, KO 72편의 hr 712 ↔ h2 743 이 거의 1:1.
    // 🔴 전부 지우면 안 된다 — 나머지 1,135개는 :::readnext 카드·:::stripe·:::note 앞이라
    //    «진짜» 구분자다(그 블록들은 자기 밑줄이 없다). 조건 없이 지운 판본으로 되돌리지 마라.
    // 이 자리는 h2 변환(151행) «뒤»여야 성립한다 — 순서를 올리면 <h2 가 아직 '## ' 라 매칭이 깨진다.
    .replace(/^---$\n+(?=<h2 )/gm, '')
    .replace(/^---$/gm, '<hr class="border-border my-8" />')
    // 마크다운 표를 블록 단위(헤더+구분행+본문)로 파싱 — 구분행의 열 정렬(:---: 가운데 / ---: 오른쪽 / 기본 왼쪽) 반영 + 첫 행을 헤더로 확정(한글 대소문자 휴리스틱 제거)
    .replace(
      /^(\|.+\|)[ \t]*\n(\|[-:\s|]+\|)[ \t]*\n((?:\|.+\|[ \t]*\n?)+)/gm,
      (_m, headerLine: string, sepLine: string, bodyLines: string) => {
        const splitCells = (line: string) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((s) => s.trim());
        const aligns = splitCells(sepLine).map((s) => {
          const l = s.startsWith(':'), r = s.endsWith(':');
          return l && r ? 'center' : r ? 'right' : 'left';
        });
        const acls = (i: number) => `text-${aligns[i] || 'left'}`;
        const th = splitCells(headerLine).map((c, i) => `<th class="px-4 py-2.5 text-sm font-bold text-foreground ${acls(i)}">${c}</th>`).join('');
        const rows = bodyLines.trim().split('\n').map((line) => {
          const tds = splitCells(line).map((c, i) => `<td class="px-4 py-2.5 text-sm text-muted-foreground ${acls(i)}">${c}</td>`).join('');
          return `<tr class="border-b border-border">${tds}</tr>`;
        }).join('');
        return `<div class="overflow-x-auto my-6"><table class="w-full border border-border rounded-lg overflow-hidden"><tr class="border-b-2 border-border bg-muted/30">${th}</tr>${rows}</table></div>`;
      }
    )
    // 폴백: 위 블록 파서가 못 잡은 잔여 표(구분행/단일행) 처리
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

    // ── Read Next 썸네일 카드 스트립: :::readnext[라벨(선택)]\nhref | 제목 | 이미지경로(선택)\n:::
    // 본문 중간/FAQ 앞에 삽입해 완독 전 이탈자에게도 관련글 노출(내부링크 클릭↑).
    // 녹색 펠트 틴트 박스로 영역을 잡고 골드 라벨로 구분. 라벨 미지정 시 "Read next"(KO는 [이어서 읽기] 지정).
    // 예) :::readnext[Keep reading]\n/en/blog/holdem-hand-rankings | Poker Hand Rankings | /images/holdem-hand-rankings-hero.webp\n:::
    .replace(/^:::readnext(?:\[([^\]]*)\])?\n([\s\S]*?)\n:::$/gm, (_, label, body) => {
      const heading = (label || 'Read next').trim();
      const cards = body.trim().split('\n').filter((l: string) => l.trim()).slice(0, 3).map((line: string) => {
        const [href = '', title = '', img = ''] = line.split('|').map((s: string) => s.trim());
        if (!href || !title) return '';
        const thumb = img
          ? `<img src="${optSrc(img, 128)}" srcset="${optSet(img, [64, 128])}" sizes="64px" alt="" loading="lazy" style="width:64px;height:64px;object-fit:cover;border-radius:10px;flex-shrink:0"/>`
          : '';
        return (
          `<a href="${href}" style="display:flex;align-items:center;gap:14px;padding:12px 14px;background:var(--card);border:2px solid #ffd23f;border-radius:12px;text-decoration:none;flex:1 1 260px;min-width:0;transition:box-shadow .2s,transform .2s;box-shadow:0 0 10px rgba(255,210,63,0.40)" onmouseover="this.style.boxShadow='0 0 16px rgba(255,210,63,0.70)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='0 0 10px rgba(255,210,63,0.40)';this.style.transform='none'">` +
          thumb +
          `<span style="min-width:0;display:flex;align-items:center;gap:8px">` +
          `<span style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.35">${title}</span>` +
          `<span class="blog-readnext-arrow" style="color:var(--primary);font-weight:800;flex-shrink:0">&rarr;</span>` +
          `</span></a>`
        );
      }).join('');
      return (
        `<div style="margin:30px 0;padding:14px 16px 16px;background:linear-gradient(rgba(28,74,52,0.14),rgba(28,74,52,0.05)),var(--card);border:1px solid var(--border);border-radius:16px">` +
        `<div class="blog-readnext-label" style="font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:var(--primary);margin:2px 0 12px;padding-left:2px">${heading}</div>` +
        `<div style="display:flex;gap:12px;flex-wrap:wrap">${cards}</div>` +
        `</div>`
      );
    })

    // ── 필라 허브 학습 로드맵: :::pillarhub[제목(선택)]\nhref | 라벨 | 설명(선택)\n:::
    // 필라(허브) 글이 클러스터 글들을 번호 매긴 커리큘럼(재생목록)으로 안내하는 카드.
    // href 는 trailing slash 없는 내부 경로 그대로 사용(§14). 스타일은 globals.css .pillar-hub*
    // 예) :::pillarhub[홀덤 족보 실전 완전정복 로드맵]\n/blog/holdem-tiebreak-rules | 족보가 같을 때 | 키커로 승자 가리는 법\n:::
    .replace(/^:::pillarhub(?:\[([^\]]*)\])?\n([\s\S]*?)\n:::$/gm, (_, title, body) => {
      const steps = body.trim().split('\n').filter((l: string) => l.trim()).map((line: string, i: number) => {
        const [href = '', label = '', desc = ''] = line.split('|').map((s: string) => s.trim());
        if (!href || !label) return '';
        return (
          `<a href="${href}" class="pillar-hub-step">` +
          `<span class="pillar-hub-num" aria-hidden="true">${i + 1}</span>` +
          `<span class="pillar-hub-body">` +
          `<span class="pillar-hub-label">${label}</span>` +
          (desc ? `<span class="pillar-hub-desc">${desc}</span>` : '') +
          `</span>` +
          `<span class="pillar-hub-arrow" aria-hidden="true">&rarr;</span>` +
          `</a>`
        );
      }).join('');
      const heading = (title || '').trim();
      return (
        `<div class="pillar-hub">` +
        `<span class="pillar-hub-overline">Step by Step</span>` +
        (heading ? `<p class="pillar-hub-title">${heading}</p>` : '') +
        `<div class="pillar-hub-steps">${steps}</div>` +
        `</div>`
      );
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
        `<div class="blog-compare-hl" style="padding:10px 14px;background:linear-gradient(135deg,#d4af37,#f0d060);border-radius:10px 0 0 0;font-weight:900;font-size:13px;color:#0d1c14;text-align:center">${leftH}</div>` +
        `<div class="blog-compare-hr" style="padding:10px 14px;background:#e2dccf;border-radius:0 10px 0 0;font-weight:900;font-size:13px;color:#42372a;text-align:center">${rightH}</div>` +
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

    .replace(/^(<tr.*<\/tr>\n?)+/gm, (m) => `<div class="overflow-x-auto my-6"><table class="w-full border border-border rounded-lg overflow-hidden">${m}</table></div>`)
    .replace(/^> \*\*(.+?)\*\*\n((?:^> .+\n?)+)/gm, (_, title, body) => {
      const lines = body.replace(/^> /gm, '').trim();
      return `<div class="summary-callout my-6 p-5 bg-primary/10 border border-primary/30 rounded-xl"><p class="font-bold text-primary mb-2">✦ ${title}</p><p class="text-sm text-foreground/90 leading-relaxed">${lines}</p></div>`;
    })
    .replace(
      /^:::rangechart:::$/gm,
      () => {
        // 값·문구의 단일 출처 = lib/range-chart.ts. 여기서 하드코딩하지 마라(그래서 본문과 갈라졌다).
        const copy = rangeChartCopy(locale);
        const rows = RANGE_CHART_SEATS.map(p => {
          const seat = copy.seats[p.id];
          return (
            `<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">` +
            `<span style="width:64px;font-size:12px;font-weight:800;color:var(--foreground);flex-shrink:0">${p.id}</span>` +
            `<div style="flex:1;background:rgba(255,255,255,0.06);border-radius:6px;height:24px;overflow:hidden;position:relative">` +
            `<div style="width:${p.pct}%;height:100%;background:linear-gradient(90deg,${p.color},${p.bg});border-radius:6px;transition:width 0.3s"></div>` +
            `</div>` +
            `<span style="width:52px;font-size:12px;font-weight:700;color:${p.color};text-align:right;flex-shrink:0">~${p.pct}%</span>` +
            `<span style="flex:1.2;font-size:11px;color:var(--muted-foreground);display:none" class="sm:inline">${seat.label} · ${seat.note}</span>` +
            `</div>`
          );
        }).join('');
        return (
          `<div style="margin:24px 0;padding:18px 20px 14px;background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:14px">` +
          `<p style="font-size:11px;font-weight:700;letter-spacing:0.1em;color:var(--primary);margin:0 0 14px">${copy.title}</p>` +
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
          return `<div style="display:flex;align-items:center;gap:6px;padding:4px 8px;border-radius:6px;background:${bg};margin-bottom:3px"><div style="font-size:11px;font-weight:800;color:${rankColor};width:16px;text-align:right;flex-shrink:0">${rank}</div><div style="font-size:10px;font-weight:600;color:var(--foreground);width:84px;flex-shrink:0;line-height:1.2">${kr}</div><div style="display:flex;gap:2px;flex-wrap:nowrap;direction:ltr">${cardHtml}</div></div>`;
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
    // 인용문(> ) — text-sm(14px)은 모바일에서 작았다. text-[15px]로 올린다(2026-08-01).
    // "바로 답" 블록이 이 인용문 문법을 쓰므로 첫 화면 가독성에 직결된다.
    .replace(/^> (.+)$/gm, '<blockquote class="my-4 pl-4 border-l-4 border-primary/40 text-muted-foreground italic text-[15px] leading-relaxed">$1</blockquote>')
    // → result blocks (after bold so inner bold is already processed)
    .replace(/^→ (.+)$/gm, (_, text) =>
      `<div class="blog-callout" style="display:flex;gap:10px;align-items:flex-start;margin:10px 0;padding:14px 16px;background:rgba(212,175,55,0.10);border-left:3px solid rgba(196,154,24,0.7);border-radius:0 10px 10px 0">` +
      `<span class="blog-callout-arrow" style="color:#d4af37;font-weight:900;font-size:17px;flex-shrink:0;line-height:1.5">→</span>` +
      `<div style="font-size:14px;line-height:1.7;color:var(--foreground)">${text}</div></div>`)
    // :::faqcard[/path/img.webp][alt][caption]::: — notebook-style FAQ visual card
    // LCP 후보(보통 글 첫머리)면 eager+fetchpriority=high, 아니면 lazy
    .replace(/^:::faqcard\[([^\]]+)\]\[([^\]]*)\]\[([^\]]*)\]:::$/gm, (_, src, alt, caption) => {
      const a = imgAttrs(src);
      return `<div style="margin:28px 0;padding:3px;border-radius:18px;background:linear-gradient(135deg,rgba(196,154,24,0.55) 0%,rgba(56,189,248,0.25) 48%,rgba(196,154,24,0.45) 100%);box-shadow:0 6px 24px rgba(0,0,0,0.15)">` +
        `<div style="background:#faf6ed;border-radius:16px;overflow:hidden">` +
        `<img ${fullWidthImg(src)} alt="${alt}" loading="${a.loading}" fetchpriority="${a.fetchpriority}" decoding="async" width="1124" height="613" style="width:100%;height:auto;display:block" />` +
        `<div style="padding:10px 18px;border-top:1px solid rgba(196,154,24,0.25);text-align:center">` +
        `<p class="blog-faqcard-caption" style="font-size:14px;color:#b8820a;margin:0;letter-spacing:0.4px;font-weight:700">${caption}</p>` +
        `</div></div></div>`;
    })
    // ── 매거진 컴포넌트: :::kicker[text]::: ── H2 바로 위 아이브로우(소제목 라벨).
    // 아래 음수 margin 으로 다음 ## 제목에 바짝 붙인다(제목은 TOC 유지를 위해 ##로 둠).
    // 🪶 프로즈 디렉티브 4종(kicker·pull·note·tip)은 **링크 변환 앞**으로 옮겼다 — 위쪽 참조.
    // :::stat[number] label::: — big stat pill
    .replace(/^:::stat\[([^\]]+)\] (.+):::$/gm, (_, num, label) =>
      `<div style="display:inline-flex;align-items:center;gap:10px;margin:8px 8px 8px 0;padding:8px 18px;background:rgba(212,175,55,0.1);border:1px solid rgba(212,175,55,0.3);border-radius:100px">` +
      `<span style="font-size:20px;font-weight:800;color:#d4af37">${num}</span>` +
      `<span style="font-size:12px;color:var(--muted-foreground)">${label}</span></div>`)
    // :::eventcta::: — 본문 중간 이벤트 참여 유도 소형 CTA (클릭 시 홈 커뮤니티 이벤트 탭)
    // 색: 프로젝트 팔레트(웜 크림 bg + 다크그린 텍스트 + 골드 액센트) 기준, 네이비 미사용
    .replace(/^:::eventcta:::$/gm, () =>
      `<a href="/?tab=event" style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;text-decoration:none;margin:24px 0;padding:12px 14px 12px 16px;border-radius:12px;background:linear-gradient(135deg,hsl(40 45% 97%) 0%,hsl(40 48% 92%) 100%);border:1px solid hsl(43 55% 68%);box-shadow:0 3px 14px hsl(43 40% 40% / 0.14)">` +
      `<span style="flex:1;min-width:150px;display:flex;align-items:center;gap:9px">` +
      `<span style="font-size:18px;flex-shrink:0">🎰</span>` +
      `<span style="font-size:13.5px;font-weight:700;line-height:1.45;color:hsl(152 45% 12%)">매주 일요일 기프트콘 이벤트 진행 중 <span style="color:hsl(152 14% 38%);font-weight:500">· 번호 6개 선택</span></span>` +
      `</span>` +
      `<span style="flex-shrink:0;display:inline-flex;align-items:center;gap:5px;padding:9px 16px;border-radius:9px;background:linear-gradient(135deg,hsl(43 68% 50%),hsl(43 65% 42%));color:hsl(40 45% 97%);font-size:13px;font-weight:800;white-space:nowrap;box-shadow:0 2px 8px hsl(43 60% 40% / 0.35)">이벤트 참여하기 →</span>` +
      `</a>`)
    // :::youtube[영상ID][시작초?]::: — lite-facade 유튜브 임베드 (썸네일 클릭 시에만 iframe 로드 → CWV 보호). 자체 채널 영상만 사용.
    .replace(/^:::youtube\[([A-Za-z0-9_-]{11})\](?:\[(\d+)\])?:::$/gm, (_m, id, start) => {
      const s = start ? `?start=${start}&autoplay=1` : `?autoplay=1`
      const embed = `https://www.youtube-nocookie.com/embed/${id}${s}`
      const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
      return `<div style="position:relative;aspect-ratio:16/9;margin:24px 0;border-radius:14px;overflow:hidden;cursor:pointer;background:#000;box-shadow:0 6px 22px rgba(0,0,0,0.25)" onclick="this.innerHTML='&lt;iframe style=&quot;position:absolute;inset:0;width:100%;height:100%;border:0&quot; src=&quot;${embed}&quot; allow=&quot;autoplay;encrypted-media;picture-in-picture&quot; allowfullscreen&gt;&lt;/iframe&gt;';this.style.cursor='default'">` +
        `<img src="${thumb}" loading="lazy" alt="유튜브 영상 미리보기 — 클릭하면 재생됩니다" style="width:100%;height:100%;object-fit:cover">` +
        `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.18)">` +
        `<div style="width:72px;height:50px;background:#f00;border-radius:13px;opacity:0.92;display:flex;align-items:center;justify-content:center">` +
        `<div style="width:0;height:0;border-left:22px solid #fff;border-top:13px solid transparent;border-bottom:13px solid transparent;margin-left:5px"></div></div></div></div>`
    })
    .replace(/^- (.+)$/gm, '<li class="flex gap-2 text-muted-foreground text-sm leading-relaxed mb-1"><span class="text-primary mt-1 flex-shrink-0">•</span><span>$1</span></li>')
    .replace(/(<li.*<\/li>\n?)+/g, (m) => `<ul class="my-4 space-y-1">${m}</ul>`)
    .replace(/\n\n/g, '</p><p class="text-muted-foreground text-base leading-relaxed mb-4">')
    .replace(/^(?!<[h|u|t|h|l|d|p|r|b])(.+)$/gm, (m) => m.trim() ? m : '')
    /**
     * ★ 마지막 패스 — 포스트 본문에 **손으로 쓴** 생 <img src="/images/…">를 최적화 경로에 태운다.
     *
     * 위 fullWidthImg()는 마크다운 `![]()`만 처리한다. 갤러리 그리드처럼 레이아웃이 필요한 자리는
     * 포스트가 raw HTML로 <img>를 직접 쓰는데(3개 글·18개 파일·114개), 그것들이 **최적화를 통째로
     * 우회하고 있었다.** 2026-08-07 프로덕션 실측:
     *   apt-incheon `kbeauty` = 600x800 원본 74,688 bytes가 **표시 폭 333px 자리에 그대로** 전송.
     *   /_next/image 경유 시 w=384 → 35.7KB · w=256 → 18.2KB (최대 −75%).
     *
     * ⚠ 폭 750px 미만 원본은 w≥원본폭 요청에서 **원본 바이트가 그대로 나온다**(withoutEnlargement).
     *   실측으로 74,688 == 74,688 확인. 그래서 이 글들은 «작은 후보»(128·256·384)가 있어야 의미가 있다.
     * ⚠ 실제 절감은 `sizes`가 정확해야 나온다 — 표시 폭은 포스트의 레이아웃이 정하므로
     *   **각 <img>가 sizes를 직접 들고 있다.** 없으면 전폭(672px)으로 보수적 폴백한다.
     * ⚠ **표시 폭을 추측하지 말고 재라.** 본문 폭은 레이아웃마다 다르다 —
     *   일반 블로그는 672px이지만 **대회 가이드(`tournament-guide-post.tsx`)는 906px**다.
     *   2026-08-07에 906px 자리에 sizes=750px를 넣어 «더 무르게» 만들 뻔했다(라이브 실측으로 잡음).
     *   `getBoundingClientRect().width`를 Playwright로 재고 나서 sizes를 쓸 것.
     * ⚠ 이미 최적화된 src(/_next/image…)와 외부 호스트는 정규식이 걸러낸다(src="/images/…"만 매치).
     */
    .replace(/<img\b[^>]*\bsrc="\/images\/[^"]+"[^>]*>/g, (tag) => {
      if (/\ssrcset=/.test(tag)) return tag; // 이미 처리됨
      const src = tag.match(/\bsrc="(\/images\/[^"]+)"/)![1];
      const sizes = /\ssizes="/.test(tag)
        ? ''
        : ` sizes="(max-width: 768px) 100vw, 672px"`;
      return tag.replace(
        /\bsrc="\/images\/[^"]+"/,
        `src="${optSrc(src, 750)}" srcset="${optSet(src, RAW_IMG_WIDTHS)}"${sizes}`
      );
    })
}

/**
 * 생 <img> 최적화용 후보 폭. next.config.mjs의 deviceSizes ∪ imageSizes 안에 있어야 한다
 * (그 밖의 값은 이미지 API가 400을 돌려준다).
 * 작은 값(256)은 3단 그리드·160px 고정 썸네일처럼 «좁게 표시되는» 자리를 위해 필요하다.
 *
 * ★후보를 늘리면 **Vercel 이미지 변환 쿼터**가 그만큼 나간다 (2026-08-08에 7종 → 5종으로 축소).
 *   실제 표시 폭(160·220·333·672·906px) × DPR 1~3을 덮는 최소 집합만 남겼다:
 *     256(160px DPR1·220px DPR1) · 384(333px DPR1·160px DPR2) · 480(220px DPR2·모바일 전폭) ·
 *     750(333px DPR2·220px DPR3) · 1080(333px DPR3·일정표 전폭)
 *   뺀 것: 128(111px DPR1 — 요즘 폰은 DPR2 이상이라 거의 안 쓰인다) · 640(750이 대신한다).
 *   ⚠ 여기를 늘리기 전에 «그 폭을 실제로 고르는 표시 자리가 있는가»를 먼저 확인할 것.
 */
const RAW_IMG_WIDTHS = [256, 384, 480, 750, 1080];
