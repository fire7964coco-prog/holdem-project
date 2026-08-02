import { chromium } from 'playwright';
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const DIR = 'C:/Users/하봄/AppData/Local/Temp/claude/C--Users----Downloads-Holdem-Project/77b2f839-36ba-48d4-b145-5b373f63a990/scratchpad/';
const jobs = JSON.parse(process.argv[2]);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 3 });
for (const j of jobs) {
  // <link href="_style.css"> 를 인라인으로 치환 (setContent는 상대경로를 못 받는다)
  let html = readFileSync(DIR + j.html, 'utf8');
  const css = readFileSync(DIR + '_style.css', 'utf8');
  html = html.replace(/<link rel="stylesheet" href="_style\.css">/, `<style>${css}</style>`);
  await page.setContent(html, { waitUntil: 'load' });
  await page.waitForTimeout(350);
  const png = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 675 } });
  const webp = await sharp(png)
    .resize(1200, 675, { kernel: 'lanczos3' })
    .sharpen({ sigma: 0.7, m1: 0.6, m2: 2.2 })
    .webp({ quality: 88, effort: 6 })
    .toBuffer();
  writeFileSync(j.out, webp);
  console.log(path.basename(j.out), (webp.length / 1024).toFixed(1) + 'KB');
}
await browser.close();
