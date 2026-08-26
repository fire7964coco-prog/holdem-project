#!/usr/bin/env node
/**
 * check-cjk-linebreak — **JSX 개행이 CJK 문장 한가운데 ASCII 공백을 만드는 것**을 잡는다.
 *
 *   실행: node scripts/check-cjk-linebreak.mjs [--selftest]
 *   ⚠ 빌드 산출물이 아니라 **소스**를 본다 — 그래서 빌드 전에도 돈다.
 *
 * ★왜 만들었나 (2026-08-26)
 *   JSX 는 텍스트↔텍스트 사이의 개행을 **공백 1개**로 치환한다(태그에 인접한 개행은 지운다).
 *   영어권에서는 그게 정확히 원하는 동작이지만, **중국어·일본어에는 단어 사이 공백이 없다.**
 *   그래서 소스에서 문장을 예쁘게 줄바꿈하면 렌더된 화면에 «不限 次数» · «を 計算» 처럼
 *   **문장 한가운데 공백**이 생긴다. 화면을 안 열어보면 못 본다.
 *
 *   zh-hant 랜딩 신설 회차가 이 결함을 **빌드 산출물로 실측**해 발견했고(«不限 次數» 등),
 *   그때 zh-hant 만 «중문 텍스트 런은 한 줄» 규칙으로 고쳤다. zh·ja 는 «검수된 파일이라
 *   별건»으로 미뤄져 미결로 남았다 — 2026-08-26 실측 시 **ja 75건 · zh 44건**이었다.
 *   → 고친 뒤 **주석만 남기면 다음 편집에서 그대로 되살아난다.** 그래서 게이트로 만든다.
 *      («주석이 있어도 강제하는 검사가 없으면 안 지켜진다» — settled-decisions §6)
 *
 * ▶ 무엇을 보나 — **줄의 끝과 다음 줄의 시작만** 본다
 *   앞 줄이 CJK 로 끝나고 다음 줄이 CJK 로 시작하면 → 렌더에서 그 사이에 공백이 생긴다.
 *   줄 전체가 순수 텍스트일 필요는 없다: `…不用注册、不限` + `次数</strong>。` 도 대상이다.
 *
 * ▶ 의도적 공백은 **원리상 못 건드린다** — 이 게이트는 «개행»만 본다.
 *   한 줄 안에 저자가 넣은 공백(ja 태그 «韓国 ポーカー 税金» · «🔗 毎週日曜 午後7時»)은
 *   개행이 아니므로 애초에 후보가 아니다. 빌드 산출물을 훑는 방식이었다면 이 둘을 구분하지
 *   못해 오탐이 쏟아졌을 자리다 — **판정 대상을 «산출물의 공백»이 아니라 «소스의 개행»으로
 *   잡은 것이 이 게이트의 핵심이다.**
 *
 * ▶ 보지 않는 것 (의도적 제외)
 *   · 블록 주석 `/* *​/` · 줄 주석 `//` · 템플릿 리터럴(백틱) 안 — 렌더 대상이 아니다.
 *     🔴 특히 **포스트 본문은 백틱 문자열**이라 이 결함이 구조적으로 불가능하다(마크다운 렌더러가
 *        따로 처리한다). 그래서 `lib/posts*` 를 훑지 않는다 — 훑으면 전부 오탐이다.
 *   · 다음 줄이 `<` 로 시작하는 경우 — JSX 가 태그 인접 개행을 이미 지운다(공백 안 생김).
 */
import fs from "fs";
import path from "path";

/** 한중일 문자 + 전각 문장부호 (라틴 인접 공백은 정본이므로 양쪽 다 CJK 일 때만 센다) */
const CJK = /[぀-ヿ㐀-䶿一-鿿＀-ﾟ　-〿]/;

const ROOTS = ["app", "components", "lib"];
const SKIP_DIR = new Set(["node_modules", ".next", ".git", "_archive"]);

/**
 * 한 파일의 소스를 판정한다. **파일시스템을 안 탄다** — 셀프테스트가 이 함수를 직접 부른다.
 * @returns {{line:number, left:string, right:string}[]}
 */
export function judgeSource(src) {
  const lines = src.split(/\r?\n/);
  const hits = [];
  let inBlock = false;
  let backticks = 0;

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const t = raw.trim();

    const wasInBlock = inBlock;
    const wasInTemplate = backticks % 2 === 1;

    if (!wasInBlock && !wasInTemplate) backticks += (raw.match(/`/g) || []).length;
    if (!wasInTemplate) {
      if (wasInBlock) {
        if (t.includes("*/")) inBlock = false;
      } else if (/\/\*/.test(t) && !/\*\//.test(t)) inBlock = true;
    }

    if (wasInBlock || wasInTemplate) continue;
    if (t.startsWith("//") || t.startsWith("*") || t.startsWith("/*")) continue;

    const next = lines[i + 1];
    if (next === undefined) continue;
    const nt = next.trim();
    if (!nt || nt.startsWith("//") || nt.startsWith("*") || nt.startsWith("/*")) continue;

    const last = raw.replace(/\s+$/, "").slice(-1);
    const first = nt[0];
    if (!last || !first) continue;
    if (!CJK.test(last) || !CJK.test(first)) continue;

    hits.push({ line: i + 1, left: t.slice(-16), right: nt.slice(0, 16) });
  }
  return hits;
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || SKIP_DIR.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".tsx")) out.push(p);
  }
  return out;
}

function run() {
  console.log("── CJK 개행 공백 게이트 (JSX 텍스트 런) ──");
  const files = ROOTS.filter((r) => fs.existsSync(r)).flatMap((r) => walk(r));
  const found = [];
  for (const f of files) {
    for (const h of judgeSource(fs.readFileSync(f, "utf8"))) found.push({ f, ...h });
  }

  const cjkFiles = files.filter((f) => CJK.test(fs.readFileSync(f, "utf8"))).length;
  console.log(`.tsx ${files.length}개 스캔 · 그중 CJK 를 담은 파일 ${cjkFiles}개`);
  console.log("   (커버리지: CJK 가 없는 파일은 «검증»이 아니라 «해당 없음»이다)");

  if (!found.length) {
    console.log("\n✅ 0건 — CJK 문장을 가르는 개행이 없다.");
    return 0;
  }

  console.log(`\n🔴 ${found.length}건 — 렌더되면 문장 한가운데 ASCII 공백이 생긴다:`);
  const byFile = {};
  for (const h of found) (byFile[h.f] ??= []).push(h);
  for (const [f, list] of Object.entries(byFile)) {
    console.log(`\n  ${f.split(path.sep).join("/")} — ${list.length}건`);
    for (const h of list.slice(0, 6)) console.log(`   L${h.line} «…${h.left}» ⏎ «${h.right}…»`);
    if (list.length > 6) console.log(`   … 외 ${list.length - 6}건`);
  }
  console.log(
    "\n처방: 그 텍스트 런을 **한 줄로 잇는다**(zh-hant 랜딩이 정본 선례).\n" +
      "  긴 줄이 되는 건 감수한다 — 화면에 공백이 보이는 것보다 낫다.\n" +
      "  ⚠ 문장을 고치지 마라. 개행만 지우는 작업이다."
  );
  return 1;
}

/* ══════════════════════════════════════════════════════════════════════════
   셀프테스트 — 규칙보다 먼저. 이 레포는 새 검사기가 오탐을 쏟은 전례가 있다
   (de 게이트 26건 중 20건 오탐). «잡아야 하는 것»과 «울리면 안 되는 것»을 같이 고정한다.
   ══════════════════════════════════════════════════════════════════════════ */
function selftest() {
  const cases = [
    {
      name: "ja 텍스트↔텍스트 개행 검출",
      src: ['<p className="x">', "  すべきか」を", "  計算するプログラムです。", "</p>"].join("\n"),
      want: 1,
    },
    {
      name: "zh 텍스트↔텍스트 개행 검출",
      src: ["<p>", "  是把一个具体牌局的", "  均衡策略算出来的程序。", "</p>"].join("\n"),
      want: 1,
    },
    {
      name: "태그가 섞인 줄도 대상 (…不限 + 次数</strong>)",
      src: ["<p>", '  <strong className="a">不用注册、不限', "  次数</strong>。矩阵旁边", "</p>"].join("\n"),
      want: 1,
    },
    {
      name: "🔴 오탐 방지: 한 줄 안의 «저자가 넣은 공백»은 개행이 아니라 안 걸린다 (ja 태그)",
      src: ["<p>", "  韓国 ポーカー 税金 の話", "</p>"].join("\n"),
      want: 0,
    },
    {
      name: "🔴 오탐 방지: 다음 줄이 태그로 시작하면 JSX 가 개행을 지운다",
      src: ["<p>", "  頻度そのものではなく、", "  <strong>読み方</strong>", "</p>"].join("\n"),
      want: 0,
    },
    {
      name: "오탐 방지: 앞 줄이 태그로 끝나면 안 걸린다",
      src: ["<p>", "  <strong>読み方</strong>", "  です。上の学習スポットで", "</p>"].join("\n"),
      want: 0,
    },
    {
      name: "🔴 오탐 방지: 백틱 템플릿(포스트 본문)은 안 본다 — 마크다운이라 구조적으로 무관",
      src: ["const content = `", "  홀덤 규칙은 다음과 같다。中文の文", "  続きの文章です。", "`;"].join("\n"),
      want: 0,
    },
    {
      name: "오탐 방지: 줄 주석은 안 본다",
      src: ["<p>", "  // 앱 축어는 大きなベットが減り", "  // 完成したフラッシュでさえ", "</p>"].join("\n"),
      want: 0,
    },
    {
      name: "오탐 방지: 블록 주석(파일 머리 해설)은 안 본다",
      src: ["/**", " * 특징 4칸 免费 全部功能，不限次数", " * 算得快 多线程接近桌面版", " */", "const a = 1;"].join("\n"),
      want: 0,
    },
    {
      name: "오탐 방지: 라틴 인접 개행은 정본(영어는 공백이 있어야 한다)",
      src: ["<p>", "  the opener's range and", "  the caller responds", "</p>"].join("\n"),
      want: 0,
    },
    {
      name: "오탐 방지: 한쪽만 CJK 면 안 걸린다 (GTO 求解器 류)",
      src: ["<p>", "  この機能は GTO", "  求解器と呼ばれる", "</p>"].join("\n"),
      want: 0,
    },
    {
      name: "오탐 방지: 한 줄짜리 문자열 리터럴 note 는 개행이 없다",
      src: ['const a = { note: "看看大注为什么变少了，主要剩下小注和过牌——连已经成同花的牌都经常只过牌" };'].join("\n"),
      want: 0,
    },
  ];

  console.log("── check-cjk-linebreak 셀프테스트 ──");
  let fail = 0;
  for (const c of cases) {
    const got = judgeSource(c.src).length;
    const ok = got === c.want;
    if (!ok) fail++;
    console.log(`  ${ok ? "✅" : "❌"} ${c.name}`);
    if (!ok) console.log(`       기대 ${c.want}건 · 실제 ${got}건`);
  }
  const nHit = cases.filter((c) => c.want > 0).length;
  console.log(
    fail
      ? `\n❌ ${fail}/${cases.length} 실패 — 게이트를 고치기 전엔 그 판정을 믿지 마라.`
      : `\n✅ ${cases.length}/${cases.length} 통과 (검출 기대 ${nHit} · 무반응 기대 ${cases.length - nHit}).`
  );
  return fail ? 1 : 0;
}

process.exit(process.argv.includes("--selftest") ? selftest() : run());
