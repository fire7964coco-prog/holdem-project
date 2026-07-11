import { chromium } from 'playwright';
import sharp from 'sharp';
import { pathToFileURL } from 'url';
import { resolve } from 'path';
import { statSync } from 'fs';
import { writeFile } from 'fs/promises';

const jobs = [
  { html: 'scripts/tb-best5.html', out: 'scripts/_preview-tb-best5.webp' },
  { html: 'scripts/tb-split.html', out: 'scripts/_preview-tb-split.webp' },
];

const browser = await chromium.launch();
for (const job of jobs) {
  const page = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(resolve(job.html)).href, { waitUntil: 'networkidle' });
  const png = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 675 } });
  await page.close();
  const webp = await sharp(png).resize(1200, 675).webp({ quality: 72, effort: 6 }).toBuffer();
  await writeFile(resolve(job.out), webp);
  console.log(job.out, '→', Math.round(statSync(resolve(job.out)).size / 1024) + 'KB');
}
await browser.close();
console.log('done');
