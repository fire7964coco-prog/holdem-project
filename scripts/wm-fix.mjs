import sharp from 'sharp';
import { readFileSync, writeFileSync, renameSync, statSync } from 'fs';
// 행 단위 좌우 선형 보간 인페인팅 — 배경 그라디언트를 따라간다
const jobs = JSON.parse(process.argv[2]);
for (const [f, tx, ty, tw, th] of jobs) {
  const p = 'public/images/' + f;
  const before = statSync(p).size;
  const src = readFileSync(p);
  const md = await sharp(src).metadata();
  const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels, W = info.width;
  const S = 5;                                   // 이웃 샘플 폭
  const px = (x, y, k) => data[(y * W + x) * ch + k];
  const avgAt = (x0, y, k) => { let s = 0; for (let i = 0; i < S; i++) s += px(x0 + i, y, k); return s / S; };
  for (let y = ty; y < ty + th; y++) {
    for (let k = 0; k < 3; k++) {
      const L = avgAt(tx - S - 2, y, k), R = avgAt(tx + tw + 2, y, k);
      for (let x = tx; x < tx + tw; x++) {
        const t = (x - tx) / (tw - 1);
        data[(y * W + x) * ch + k] = Math.round(L + (R - L) * t);
      }
    }
  }
  const filled = await sharp(data, { raw: { width: info.width, height: info.height, channels: ch } }).png().toBuffer();
  // 경계만 살짝 녹인다(대상 안쪽으로만 — 칩을 건드리지 않게 확장 4px)
  const soft = await sharp(filled).extract({ left: tx-4, top: ty-4, width: tw+8, height: th+8 }).blur(2.2).png().toBuffer();
  const out = await sharp(filled).composite([{ input: soft, top: ty-4, left: tx-4 }])
    .webp({ quality: 68 }).toBuffer();
  writeFileSync(p + '.tmp', out); renameSync(p + '.tmp', p);
  console.log(f.padEnd(40), (before/1024).toFixed(1) + 'KB ->', (out.length/1024).toFixed(1) + 'KB');
}
