import sharp from 'sharp';
import { readFileSync } from 'fs';
import { writeFile, rename } from 'fs/promises';
import { statSync } from 'fs';

// A hero: 1200x800, 80KB -> resize to 1200x675 (cover center), recompress <=60KB.
const file = 'public/images/holdem-tournament-hero.webp';
const inputBuf = readFileSync(file); // read into buffer first (Windows file-lock safety)
const meta = await sharp(inputBuf).metadata();
console.log('before:', meta.width + 'x' + meta.height, Math.round(statSync(file).size / 1024) + 'KB');

let q = 68;
let out;
for (; q >= 45; q -= 6) {
  out = await sharp(inputBuf)
    .resize(1200, 675, { fit: 'cover', position: 'centre' })
    .webp({ quality: q, effort: 6 })
    .toBuffer();
  if (out.length <= 60 * 1024) break;
}
await writeFile(file + '.tmp', out);
await rename(file + '.tmp', file);
console.log('after: 1200x675', Math.round(out.length / 1024) + 'KB (q=' + q + ')');
