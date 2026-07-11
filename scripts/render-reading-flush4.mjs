import { chromium } from 'playwright';
import sharp from 'sharp';
import { pathToFileURL } from 'url';
import { resolve } from 'path';
import { statSync } from 'fs';
import { writeFile } from 'fs/promises';

const html = 'scripts/reading-flush4.html';
const out = 'scripts/_preview-reading-flush4.webp';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 2 });
await page.goto(pathToFileURL(resolve(html)).href, { waitUntil: 'networkidle' });
const png = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 675 } });
await browser.close();
const webp = await sharp(png).resize(1200, 675).webp({ quality: 72, effort: 6 }).toBuffer();
await writeFile(resolve(out), webp);
console.log(out, '→', Math.round(statSync(resolve(out)).size / 1024) + 'KB');
