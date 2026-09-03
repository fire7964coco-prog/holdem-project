/**
 * 솔버 캡처(PNG) → 본문용 webp 변환
 *
 *   node scripts/capture-solver-spots.mjs        # 라이브에서 캡처 (.solver-captures/)
 *   node scripts/make-solver-range-charts.mjs    # 레인지 비교 차트 생성
 *   node scripts/convert-solver-captures.mjs srp-paired srp-monotone   # 필요한 스팟만 webp로
 *
 * 🪶 로케일 접미(-en)가 붙은 캡처도 그대로 변환된다 → gto-<key>-oop-en.webp
 *
 * <key>-oop.png    → public/images/gto-<key>-oop.webp      (히어로: 첫 액션 플레이어의 전략 화면)
 * <key>-ranges.png → public/images/gto-<key>-ranges.webp   (본문: 레인지 구성 비교)
 * <key>-ip.png     → 변환하지 않는다. 아래 이유를 볼 것.
 *
 * ── 🔴 «-ip» 캡처를 쓰지 마라 (2026-08-08 확인) ────────────────────
 * 「결과 바로 보기」의 IP 화면에는 **전략이 없다**(첫 액션은 OOP다). 거기 보이는 것은
 * IP의 «프리플랍 레인지»뿐이라 **보드가 달라도 그림이 같다** — 13개 스팟의 -ip 캡처를
 * 픽셀 비교하니 차이가 0.12~0.21%였다. 이걸 "벳으로 가는 핸드"로 설명하면 §13 사실오류다.
 * 보드별 정보가 필요하면 -oop(전략)과 -ranges(구성 비교)를 써라.
 *
 * ── 용량·화질 ──────────────────────────────────────────────
 * 글자가 든 이미지다. 렌더러가 w=750으로 줄여 보내므로 원본 폭을 1200으로 맞추고
 * quality는 보수적으로 잡는다(§9-1). 목표는 80KB 이하지만 **읽히는 것이 우선**이다.
 */
import { readdirSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = process.env.SOLVER_CAPTURE_OUT || join(root, ".solver-captures");
const DST = join(root, "public", "images");
const only = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const DRY = process.argv.includes("--dry");
/**
 * 🔴 `--lang=<loc>` — 그 로케일 접미의 캡처만 변환한다 (2026-09-02 신설).
 *    ja 회차에서 스팟 키만 주고 돌렸더니 같은 키의 ko·en PNG까지 재변환돼 기존 webp 10장이 바뀌었다
 *    (git checkout으로 되돌림). 로케일 전파 때는 반드시 `--lang=`을 붙여라. `--lang=ko`는 접미 없는 원본만.
 */
const langArg = process.argv.find((a) => a.startsWith("--lang="));
const LANG = langArg ? langArg.split("=")[1] : null;

const WIDTH = 1200;
const QUALITY = 76;      // 글자 가독성 우선. 80KB를 넘으면 아래 STEP_DOWN으로 한 단계씩 내린다
const STEP_DOWN = [76, 70, 64, 58];
const LIMIT_KB = 80;

if (!existsSync(SRC)) process.exit(console.error("캡처 폴더 없음:", SRC, "\n먼저 node scripts/capture-solver-spots.mjs") || 1);
mkdirSync(DST, { recursive: true });

const files = readdirSync(SRC)
  .filter((f) => /-(oop|ranges)(-[a-z]{2}(?:-[a-z]{4})?)?\.png$/.test(f))   // -en · -zh-hant 등 로케일 접미 허용(2026-09-03 하이픈 접미 추가)
  .filter((f) => !only.length || only.some((k) => f.startsWith(k + "-")))
  .filter((f) => {
    if (!LANG) return true;
    const m = /-(oop|ranges)(?:-([a-z]{2}(?:-[a-z]{4})?))?\.png$/.exec(f);
    const suf = m?.[2] || "ko";
    return suf === LANG;
  });

if (!files.length) process.exit(console.error("변환할 파일 없음. 스팟 키를 확인하라.") || 1);

for (const f of files) {
  const out = "gto-" + f.replace(/\.png$/, "") + ".webp";
  const dst = join(DST, out);
  if (DRY) { console.log(`  ${f} → ${out}`); continue; }

  const buf = await sharp(join(SRC, f)).resize({ width: WIDTH }).toBuffer();
  let kb = Infinity, q = QUALITY;
  for (const step of STEP_DOWN) {
    q = step;
    await sharp(buf).webp({ quality: q, effort: 6 }).toFile(dst);
    kb = statSync(dst).size / 1024;
    if (kb <= LIMIT_KB) break;
  }
  console.log(`  ${out.padEnd(34)} ${Math.round(kb)}KB (q=${q})${kb > LIMIT_KB ? "  ⚠ 80KB 초과 — 가독성 확인 후 판단" : ""}`);
}

console.log("\n⚠ 대표 1~2장은 반드시 Read로 열어 육안 확인할 것(매트릭스 글자·수치가 읽히는지).");
