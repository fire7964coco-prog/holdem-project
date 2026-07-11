import { chromium } from 'playwright';
import sharp from 'sharp';
import { pathToFileURL } from 'url';
import { resolve } from 'path';
import { statSync } from 'fs';
import { writeFile } from 'fs/promises';

// Render tournament-vs-cash infographic HTMLs to 1200x675 webp previews for review.
const jobs = [
  { html: 'scripts/tvc-hero.html',  out: 'scripts/_preview-tvc-hero.webp' },
  { html: 'scripts/tvc-chips.html', out: 'scripts/_preview-tvc-chips.webp' },
  { html: 'scripts/tvc-icm.html',   out: 'scripts/_preview-tvc-icm.webp' },
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
