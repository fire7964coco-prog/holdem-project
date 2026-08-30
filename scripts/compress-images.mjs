/**
 * public/images 내 블로그 이미지 일괄 압축
 * 사용: npm run compress:images
 */
import { copyFile, mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import { basename, dirname, join, extname, relative } from "node:path";
import sharp from "sharp";

const ROOT = join(process.cwd(), "public", "images");
const IN_PLACE = process.argv.includes("--in-place");
const OUT_DIR = IN_PLACE ? ROOT : join(process.cwd(), "public", "images", ".compressed");
const MAX_WIDTH = 1200;
/**
 * 🔴 기본 82 — 용량 상한을 걸지 않는다(사장님 지시 2026-08-30).
 * 축어: 「60KB를 강제하지마..상황에 맞게 해야지...이미지가 선명하게 보여야 유저들이
 * 포스팅을 이해하는데 도움이 되지...조금 넘어도 괜찮아」
 * 옛 기본값 65는 폐기. 이 값을 낮추면 q82로 올려둔 자산이 통째로 되돌아간다.
 * 근거·측정법 = CLAUDE.md §9-2-A (데스크톱은 sizes=1200px라 축소 없이 받는다).
 */
const WEBP_QUALITY = Number(
  (process.argv.find((a) => a.startsWith("--quality=")) || "").split("=")[1] || 82
);
const WEBP_EFFORT = 6;
const EXT = new Set([".webp", ".png", ".jpg", ".jpeg"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(p)));
    else if (EXT.has(extname(e.name).toLowerCase())) files.push(p);
  }
  return files;
}

async function compress(file) {
  const before = (await stat(file)).size;
  const img = sharp(file);
  const meta = await img.metadata();
  let pipeline = img.rotate();
  if ((meta.width ?? 0) > MAX_WIDTH) {
    pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
  }
  const buf = await pipeline
    .webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT, smartSubsample: true })
    .toBuffer();
  const rel = relative(ROOT, file);
  const outName = basename(file).replace(/\.(png|jpe?g|webp)$/i, ".webp");
  const outDir = join(OUT_DIR, join(rel, ".."));
  await mkdir(outDir, { recursive: true });
  const out = join(outDir, outName);
  await writeFile(out, buf);
  const after = buf.length;
  return { file: out.replace(process.cwd(), ""), before, after, w: meta.width, h: meta.height };
}

const files = await walk(ROOT);
if (!files.length) {
  console.log("No images in public/images");
  process.exit(0);
}

let totalBefore = 0;
let totalAfter = 0;
for (const f of files) {
  const r = await compress(f);
  totalBefore += r.before;
  totalAfter += r.after;
  const pct = ((1 - r.after / r.before) * 100).toFixed(0);
  console.log(
    `${r.file}: ${(r.before / 1024).toFixed(1)}KB → ${(r.after / 1024).toFixed(1)}KB (-${pct}%)`
  );
}
console.log(
  `\nTotal: ${(totalBefore / 1024).toFixed(1)}KB → ${(totalAfter / 1024).toFixed(1)}KB`
);
async function applyCompressed() {
  const staged = await walk(OUT_DIR);
  for (const src of staged) {
    const rel = relative(OUT_DIR, src);
    const dest = join(ROOT, rel);
    await mkdir(dirname(dest), { recursive: true });
    await copyFile(src, dest);
  }
  await rm(OUT_DIR, { recursive: true, force: true });
}

if (!IN_PLACE && process.argv.includes("--apply")) {
  await applyCompressed();
  console.log("\nApplied to public/images/ (removed .compressed staging)");
}
