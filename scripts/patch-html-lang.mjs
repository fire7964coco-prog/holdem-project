/**
 * 빌드 산출 HTML의 <html lang> · <html dir> 보정 (postbuild)
 *
 * ── 왜 필요한가
 * App Router에서 <html> 태그는 루트 레이아웃 하나만 렌더할 수 있다. 이 사이트는
 * 로케일이 `app/ja/`, `app/es/` 같은 **물리 디렉토리**라서 루트 레이아웃이
 * 자기가 어느 URL을 그리는 중인지 알 방법이 없다(params도 안 들어온다).
 * headers()를 읽으면 알 수 있지만 그 순간 라우트가 동적 렌더링으로 바뀌어 SSG를 잃는다.
 * 그래서 app/layout.tsx는 `lang="ko" dir="ltr"`을 하드코딩하고,
 * <head>의 인라인 스크립트가 페인트 직전에 값을 보정한다.
 *
 * 실제 브라우저에서는 그 스크립트로 충분하다. 문제는 **JS를 실행하지 않는 소비자**다.
 *   · AI 크롤러(GPTBot·ClaudeBot·PerplexityBot 등) 다수는 원본 HTML만 읽는다
 *     → 일본어 페이지가 "한국어 문서"로 들어간다
 *   · ar·fa·he 페이지가 `dir="ltr"`로 나간다. 스크립트가 실행되지 않으면
 *     아랍어가 좌→우로 깨진다 (신호 문제가 아니라 화면이 망가지는 문제)
 *   · lang="ko" 상태에서는 브라우저가 한중일 통합한자를 한국어 글꼴 변형으로 고른다
 *
 * (구글 SEO 영향은 사실상 없다 — 구글은 lang 속성을 언어 판별에 쓰지 않고
 *  hreflang과 본문으로 판단한다. 그 두 개는 정상이다.)
 *
 * ── 왜 이 방식인가
 * 정석은 `app/[locale]/`로 이관해 루트 레이아웃이 params.locale을 받는 것이다.
 * 다만 91개 파일·517개 페이지의 라우팅을 재배선해야 해서, lang 속성 하나를 위해
 * 감당할 위험이 아니다. 이 스크립트는 앱 코드를 한 글자도 건드리지 않고
 * 같은 결과를 낸다. 되돌리려면 package.json의 postbuild 한 줄만 지우면 된다.
 * 인라인 스크립트는 그대로 남긴다 — 클라이언트 라우팅(/ja → /es) 대응이 필요하고,
 * 이중 안전망이 된다.
 *
 * ── 로케일 목록을 어디서 얻는가 (★ 드리프트 방지)
 * lib/intl.ts를 import하지 않는다(.mjs라 TS를 못 읽는다). 대신 **빌드된 HTML에
 * 이미 직렬화돼 있는 부트스트랩 스크립트에서 매핑을 그대로 긁어온다.**
 * 그 스크립트는 lib/intl.ts의 HTML_LANG·RTL_LOCALES로 생성되므로,
 * intl.ts가 바뀌면 이 스크립트도 자동으로 따라간다. 목록을 두 번 적지 않는다.
 * (scripts/generate-sitemap.mjs가 로케일 목록을 손으로 중복 관리하다 겪은 문제를 피한다.)
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const APP_DIR = join(process.cwd(), ".next", "server", "app");

if (!existsSync(APP_DIR)) {
  console.error(`[patch-html-lang] ${APP_DIR} 가 없다. next build 후에 실행해야 한다.`);
  process.exit(1);
}

/** .next/server/app 아래 모든 .html 경로 */
function htmlFiles(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...htmlFiles(p));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

const files = htmlFiles(APP_DIR);
if (files.length === 0) {
  console.error("[patch-html-lang] 산출 HTML이 하나도 없다. 빌드가 실패했는지 확인할 것.");
  process.exit(1);
}

/**
 * 부트스트랩 스크립트에서 매핑 추출.
 * 형태: (function(){...var L={"en":"en",...};var R={"ar":1,...};...})()
 */
function readMaps(files) {
  for (const f of files) {
    const html = readFileSync(f, "utf8");
    const m = html.match(/var L=(\{.*?\});var R=(\{.*?\});/);
    if (!m) continue;
    try {
      return { lang: JSON.parse(m[1]), rtl: JSON.parse(m[2]) };
    } catch {
      /* 다음 파일에서 재시도 */
    }
  }
  return null;
}

const maps = readMaps(files);
if (!maps) {
  console.error(
    "[patch-html-lang] 부트스트랩 스크립트에서 로케일 매핑을 못 읽었다.\n" +
      "  app/layout.tsx의 LANG_BOOTSTRAP 형태가 바뀌었는지 확인할 것 (var L={...};var R={...};).\n" +
      "  매핑을 여기 하드코딩하지 말 것 — 그게 드리프트의 시작이다.",
  );
  process.exit(1);
}

const { lang: LANG, rtl: RTL } = maps;

/** 파일 경로 → 첫 경로 세그먼트. `ja.html` → "ja", `ja/blog/x.html` → "ja" */
function firstSegment(file) {
  return relative(APP_DIR, file).split(sep)[0].replace(/\.html$/, "");
}

// <html ...> 여는 태그의 lang·dir만 바꾼다. 본문에 있는 lang="ko"는 건드리지 않는다.
const OPEN_TAG = /<html lang="ko" dir="ltr"/;

const patched = [];
const alreadyOk = []; // 이미 올바른 값 — 스크립트를 두 번 돌린 경우
const skippedKo = [];
const noMatch = [];

for (const file of files) {
  const seg = firstSegment(file);
  const langValue = LANG[seg];
  if (!langValue) {
    skippedKo.push(seg); // ko 페이지 — lang="ko"가 맞다
    continue;
  }

  const dirValue = RTL[seg] ? "rtl" : "ltr";
  const want = `<html lang="${langValue}" dir="${dirValue}"`;
  const html = readFileSync(file, "utf8");

  // ★ 멱등하게. 이미 보정된 빌드에 다시 돌려도 실패하지 않아야 한다.
  //   (예전엔 두 번째 실행이 "산출 경로가 바뀌었다"는 엉뚱한 오류로 죽었다.)
  if (html.includes(want)) {
    alreadyOk.push(seg);
    continue;
  }
  if (!OPEN_TAG.test(html)) {
    noMatch.push(relative(APP_DIR, file));
    continue;
  }

  writeFileSync(file, html.replace(OPEN_TAG, want), "utf8");
  patched.push({ seg, langValue, dirValue });
}

const byLocale = new Map();
for (const p of patched) {
  const cur = byLocale.get(p.seg) ?? { n: 0, lang: p.langValue, dir: p.dirValue };
  cur.n++;
  byLocale.set(p.seg, cur);
}

console.log(
  `[patch-html-lang] HTML ${files.length}개 검사 · ${patched.length}개 보정` +
    (alreadyOk.length ? ` · ${alreadyOk.length}개 이미 정상` : "") +
    ` · ko ${skippedKo.length}개 유지 (로케일 ${byLocale.size}종)`,
);
const rtl = [...byLocale].filter(([, v]) => v.dir === "rtl");
if (rtl.length) {
  console.log(
    `  RTL 보정: ${rtl.map(([l, v]) => `${l}→${v.lang}/rtl(${v.n}p)`).join(" ")}`,
  );
}

// ★ 로케일 페이지를 하나도 못 만났으면 실패다.
//   로케일 디렉토리 이름이 바뀌거나 산출 구조가 달라지면 이 스크립트는
//   "605개 검사, 0개 보정"을 조용히 성공으로 보고하게 된다.
//   그 상태로 배포되면 lang="ko"가 다시 517개 페이지로 나가는데 아무도 모른다.
if (patched.length + alreadyOk.length === 0) {
  console.error(
    "[patch-html-lang] ❌ 보정된 페이지가 0개다.\n" +
      "  로케일 산출 경로가 바뀌었을 가능성이 크다 (기대: .next/server/app/<locale>.html, <locale>/**.html).\n" +
      `  발견한 첫 세그먼트 표본: ${[...new Set(skippedKo)].slice(0, 12).join(", ")}\n` +
      `  부트스트랩에서 읽은 로케일: ${Object.keys(LANG).join(", ")}`,
  );
  process.exit(1);
}

// 여는 태그를 못 찾은 파일이 있으면 조용히 넘기지 않는다.
// 루트 레이아웃의 하드코딩 값이 바뀌면 이 스크립트가 아무 일도 안 하게 되는데,
// 그걸 성공으로 착각하면 안 된다.
if (noMatch.length) {
  console.error(
    `\n[patch-html-lang] ❌ 로케일 페이지 ${noMatch.length}개에서 ` +
      `<html lang="ko" dir="ltr"를 못 찾았다:\n  ` +
      noMatch.slice(0, 5).join("\n  ") +
      (noMatch.length > 5 ? `\n  … 외 ${noMatch.length - 5}개` : "") +
      `\n  app/layout.tsx의 <html> 여는 태그가 바뀌었는지 확인할 것.`,
  );
  process.exit(1);
}
