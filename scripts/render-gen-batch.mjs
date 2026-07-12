import { chromium } from 'playwright';
import sharp from 'sharp';
import { pathToFileURL } from 'url';
import { resolve } from 'path';
import { statSync, readdirSync } from 'fs';
import { writeFile } from 'fs/promises';

// render every scripts/gen-*.html (and tb-best5.html) to a preview webp for review
const files = readdirSync('scripts').filter(f => (f.startsWith('gen-') || f === 'tb-best5.html') && f.endsWith('.html'));
const browser = await chromium.launch();
for (const f of files) {
  const base = f.replace(/^gen-/, '').replace(/\.html$/, '');
  const out = 'scripts/_prev-' + base + '.webp';
  const page = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(resolve('scripts/' + f)).href, { waitUntil: 'networkidle' });
  const png = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 675 } });
  await page.close();
  const webp = await sharp(png).resize(1200, 675).webp({ quality: 72, effort: 6 }).toBuffer();
  await writeFile(resolve(out), webp);
  console.log(out, Math.round(statSync(resolve(out)).size / 1024) + 'KB');
}
await browser.close();
console.log('done:', files.length, 'files');
