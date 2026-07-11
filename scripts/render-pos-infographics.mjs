import { chromium } from 'playwright';
import sharp from 'sharp';
import { pathToFileURL } from 'url';
import { resolve } from 'path';
import { statSync } from 'fs';

// Render each infographic HTML to a 1200x675 webp preview in scripts/ for visual review.
const jobs = [
  { html: 'scripts/pos-hero.html',          out: 'scripts/_preview-hero.webp' },
  { html: 'scripts/pos-opening-range.html', out: 'scripts/_preview-opening-range.webp' },
  { html: 'scripts/pos-ip-vs-oop.html',     out: 'scripts/_preview-ip-vs-oop.webp' },
];

const browser = await chromium.launch();
for (const job of jobs) {
  const page = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(resolve(job.html)).href, { waitUntil: 'networkidle' });
  const png = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 675 } });
  await page.close();
  const webp = await sharp(png).resize(1200, 675).webp({ quality: 72, effort: 6 }).toBuffer();
  const { writeFile } = await import('fs/promises');
  await writeFile(resolve(job.out), webp);
  console.log(job.out, '→', Math.round(statSync(resolve(job.out)).size / 1024) + 'KB');
}
await browser.close();
console.log('done');
