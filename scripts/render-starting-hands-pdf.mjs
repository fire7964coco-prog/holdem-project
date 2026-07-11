import { chromium } from 'playwright';
import { pathToFileURL } from 'url';
import { statSync } from 'fs';
import { resolve } from 'path';

const htmlPath = resolve('scripts/starting-hands-chart-print.html');
const outPath = resolve('public/downloads/poker-starting-hands-chart.pdf');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle' });
await page.pdf({
  path: outPath,
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
});
await browser.close();

const kb = Math.round(statSync(outPath).size / 1024);
console.log('PDF written:', outPath, '(' + kb + 'KB)');
