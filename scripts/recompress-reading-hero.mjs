import sharp from 'sharp';
import { readFileSync, statSync } from 'fs';
import { writeFile, rename } from 'fs/promises';

const file = 'public/images/holdem-reading-the-board-hero.webp';
const buf = readFileSync(file);
const meta = await sharp(buf).metadata();
console.log('before:', meta.width + 'x' + meta.height, Math.round(statSync(file).size / 1024) + 'KB');
let q = 62, out;
for (; q >= 45; q -= 5) {
  out = await sharp(buf).webp({ quality: q, effort: 6 }).toBuffer();
  if (out.length <= 60 * 1024) break;
}
await writeFile(file + '.tmp', out);
await rename(file + '.tmp', file);
console.log('after:', Math.round(out.length / 1024) + 'KB (q=' + q + ')');
