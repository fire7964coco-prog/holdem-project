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
/** 기본 65 — 블로그 인포그래픽은 70도 OK, 80KB 초과 시 --aggressive(60) */
const WEBP_QUALITY = process.argv.includes("--aggressive") ? 60 : 65;
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
