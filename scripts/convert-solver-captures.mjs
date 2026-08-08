/**
 * 솔버 스팟 캡처(PNG) → 본문용 webp 변환
 *
 * ■ 왜 크롭하나 (2026-08-08)
 *   원본은 1600x900인데 우측 절반이 통계 패널이다. 본문 렌더러는 이미지를 **w=750으로
 *   줄여 보내므로**, 원본을 그대로 쓰면 13x13 매트릭스의 「A7s」·「99」 같은 글자와
 *   「체크 99.0%」 수치가 뭉개져 **정보 전달이 0이 된다**(모바일은 더하다).
 *   좌측(플랍 정보 + 액션 요약 + 매트릭스)만 잘라내면 같은 750px 안에서 글자가
 *   원본 대비 1.83배로 커진다 — 실제로 잘라 750px로 축소해 육안 확인했고 읽힌다.
 *   우측 통계(EQ·EV·EQR)는 어차피 본문 표로 싣는다. §9-2 「가독성이 용량보다 위」.
 *
 * ■ 크롭 좌표
 *   모든 캡처가 같은 UI 레이아웃이라 고정 좌표로 일괄 처리된다.
 *   x 0~875 · y 35~900  →  875x865 (폭 750 이상이라 next/image 최적화도 정상적으로 탄다)
 *
 * 사용: node scripts/convert-solver-captures.mjs [--dry]
 */
import { readdirSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = "C:/Users/하봄/Downloads/클로드-프로그램만들기/참고자료/스팟캡처";
const DST = join(root, "public", "images");
const DRY = process.argv.includes("--dry");

const CROP = { left: 0, top: 35, width: 875, height: 865 };
const QUALITY = 82; // 글자가 든 이미지라 보수적으로 (§9-1 가드레일)

if (!existsSync(SRC)) process.exit(console.error("원본 폴더 없음:", SRC) || 1);
mkdirSync(DST, { recursive: true });

const files = readdirSync(SRC).filter((f) => f.endsWith(".png"));
let totalIn = 0, totalOut = 0, done = 0;

for (const f of files) {
  const src = join(SRC, f);
  // 3bp-ace-king_oop.png → gto-3bp-ace-king-oop.webp (본체 이미지 이름 규칙: 평평한 kebab)
  const out = "gto-" + f.replace(/\.png$/, "").replace(/_/g, "-") + ".webp";
  const dst = join(DST, out);
  const inKb = statSync(src).size / 1024;
  totalIn += inKb;
  if (DRY) { console.log(`  ${f} → ${out}`); continue; }
  const meta = await sharp(src).metadata();
  if (meta.width !== 1600 || meta.height !== 900) {
    console.log(`  ⚠ ${f} 크기가 ${meta.width}x${meta.height} — 고정 좌표가 안 맞을 수 있다. 육안 확인할 것`);
  }
  await sharp(src).extract(CROP).webp({ quality: QUALITY, effort: 6 }).toFile(dst);
  const outKb = statSync(dst).size / 1024;
  totalOut += outKb;
  done++;
  console.log(`  ${out.padEnd(32)} ${Math.round(inKb)}KB → ${Math.round(outKb)}KB`);
}

if (!DRY) {
  console.log(`\n${done}장 변환 · ${Math.round(totalIn)}KB → ${Math.round(totalOut)}KB (${Math.round((1 - totalOut / totalIn) * 100)}% 감소)`);
  console.log("⚠ 크롭 좌표가 맞는지 대표 1~2장은 반드시 Read로 열어 육안 확인할 것.");
}
