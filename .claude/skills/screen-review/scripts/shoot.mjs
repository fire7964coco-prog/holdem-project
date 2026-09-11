#!/usr/bin/env node
/**
 * shoot.mjs — 화면을 «클로드가 볼 수 있는 크기»로 찍는다 (screen-review 스킬 전용)
 *
 *   node .claude/skills/screen-review/scripts/shoot.mjs --path /blog/holdem-3bet --name 3bet-before
 *   node .claude/skills/screen-review/scripts/shoot.mjs --live --paths /,/blog,/blog/holdem-3bet --name site
 *   node .claude/skills/screen-review/scripts/shoot.mjs --url http://localhost:8080 --widths 1280 --name solver
 *   node .claude/skills/screen-review/scripts/shoot.mjs --compare tmp/screen/a/390/overview-1.png tmp/screen/b/390/overview-1.png --out tmp/screen/a-vs-b.png
 *
 * 출력 (폴더 = <out>/<name>/<width>/):
 *   full.png        전체 페이지 원본(dpr 1)
 *   overview-N.png  전체를 폭 720으로 줄인 «구도용» 그림 (세로 3600px씩 잘라 N장)
 *   seg-NN.png      뷰포트 높이 단위의 «원본 해상도» 조각 (글자를 읽는 용도)
 *   crop.png        --selector 로 고른 요소만 dpr 2 로 확대 촬영
 *   report.json     제목·문서 높이·가로 오버플로 요소·콘솔 오류·실패한 요청
 *   sheet.png       --paths 여러 개면 각 경로의 overview-1 을 가로로 붙인 한 장 (폭당)
 *
 * 왜 이렇게 자르나 — Read 도구는 이미지를 한 장씩 보고, 아주 긴 이미지는 축소돼 글자가 안 읽힌다.
 *   구도는 overview 로, 글자는 seg 로, 디테일은 crop 으로 «따로» 본다.
 * 🔴 실행 위치 = Holdem_Project 루트 (playwright·sharp 를 node_modules 에서 찾는다).
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join, resolve, basename } from 'node:path';

const argv = process.argv.slice(2);
const opt = { widths: [1440, 390], out: 'tmp/screen', base: process.env.SCREEN_BASE || 'http://localhost:3100', wait: 1200, dpr: 1, hide: [], paths: [], full: true, segments: true };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i]; const v = argv[i + 1];
  if (a === '--url') { opt.url = v; i++; }
  else if (a === '--path') { opt.paths.push(v); i++; }
  else if (a === '--paths') { opt.paths.push(...v.split(',').map(s => s.trim()).filter(Boolean)); i++; }
  else if (a === '--base') { opt.base = v; i++; }
  else if (a === '--live') { opt.base = 'https://www.holdemmaster.com'; }
  else if (a === '--widths') { opt.widths = v.split(',').map(Number); i++; }
  else if (a === '--name') { opt.name = v; i++; }
  else if (a === '--out') { opt.out = v; i++; }
  else if (a === '--selector') { opt.selector = v; i++; }
  else if (a === '--hide') { opt.hide.push(...v.split(',')); i++; }
  else if (a === '--wait') { opt.wait = Number(v); i++; }
  else if (a === '--dpr') { opt.dpr = Number(v); i++; }
  else if (a === '--no-segments') { opt.segments = false; }
  else if (a === '--compare') { opt.compare = [v, argv[i + 2]]; i += 2; }
  else if (a === '--help' || a === '-h') { console.log(readFileSync(new URL(import.meta.url), 'utf8').split('*/')[0]); process.exit(0); }
}

const OVERVIEW_W = 720;      // 구도용 폭
const OVERVIEW_CHUNK = 3600; // 구도용 한 장의 최대 세로(원본 픽셀 기준으로 자른 뒤 줄인다)

async function compare(a, b, outPath) {
  const A = sharp(readFileSync(a)); const B = sharp(readFileSync(b));
  const ma = await A.metadata(); const mb = await B.metadata();
  const h = Math.max(ma.height, mb.height); const gap = 24;
  const bufA = await A.extend({ bottom: h - ma.height, background: '#ffffff' }).png().toBuffer();
  const bufB = await B.extend({ bottom: h - mb.height, background: '#ffffff' }).png().toBuffer();
  await sharp({ create: { width: ma.width + mb.width + gap, height: h, channels: 3, background: '#d33' } })
    .composite([{ input: bufA, left: 0, top: 0 }, { input: bufB, left: ma.width + gap, top: 0 }])
    .png().toFile(outPath);
  console.log(`✅ compare → ${outPath}  (왼쪽 = ${basename(a)} · 오른쪽 = ${basename(b)} · 빨간 띠가 경계)`);
}

if (opt.compare) {
  const outPath = opt.out.endsWith('.png') ? opt.out : join(opt.out, 'compare.png');
  mkdirSync(resolve(outPath, '..'), { recursive: true });
  await compare(opt.compare[0], opt.compare[1], outPath);
  process.exit(0);
}

// 🔴 Git Bash(MSYS)는 인자 "/" 를 "C:/Program Files/Git/" 로 바꿔 넘긴다 → 홈은 "home" 으로 적거나 그 흔적을 되돌린다
const normPath = (p) => { if (!p || p === 'home' || /:\/Program Files\/Git\/?$/i.test(p)) return '/'; p = p.replace(/^.*:\/Program Files\/Git/i, ''); return p.startsWith('/') ? p : '/' + p; };
const targets = opt.url ? [opt.url] : opt.paths.map(p => opt.base.replace(/\/$/, '') + normPath(p));
if (!targets.length) { console.error('🔴 --url 또는 --path/--paths 가 필요하다 (--help)'); process.exit(1); }
const name = opt.name || (targets.length === 1 ? (new URL(targets[0]).pathname.replace(/\W+/g, '-').replace(/^-|-$/g, '') || 'home') : 'multi');
const root = join(opt.out, name);
mkdirSync(root, { recursive: true });

const browser = await chromium.launch();
const summary = [];
for (const width of opt.widths) {
  const overviews = [];
  for (const [ti, url] of targets.entries()) {
    const pathTag = targets.length === 1 ? '' : `${String(ti + 1).padStart(2, '0')}-` + (new URL(url).pathname.replace(/\W+/g, '-').replace(/^-|-$/g, '') || 'home');
    const dir = join(root, String(width), pathTag);
    mkdirSync(dir, { recursive: true });
    const height = width < 600 ? 844 : 900;
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: opt.dpr, locale: 'ko-KR' });
    const consoleErrors = []; const failed = [];
    page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text().slice(0, 200)); });
    page.on('requestfailed', r => failed.push(r.url().slice(0, 160)));
    page.on('response', r => { if (r.status() >= 400) failed.push(`${r.status()} ${r.url().slice(0, 140)}`); });
    const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(e => ({ error: String(e) }));
    if (!resp || resp.error || resp.status() >= 400) { console.log(`🔴 ${url} @${width} → ${resp?.error || 'HTTP ' + resp.status()}`); await page.close(); continue; }
    for (const sel of opt.hide) await page.addStyleTag({ content: `${sel}{display:none !important}` }).catch(() => {});
    // lazy 이미지·폰트가 전부 오도록 끝까지 한 번 스크롤한 뒤 맨 위로
    await page.evaluate(async () => { const step = window.innerHeight; for (let y = 0; y < document.documentElement.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } window.scrollTo(0, 0); });
    await page.waitForTimeout(opt.wait);
    const meta = await page.evaluate((vw) => {
      const docW = document.documentElement.scrollWidth; const offenders = [];
      if (docW - vw > 1) for (const el of document.querySelectorAll('body *')) { const r = el.getBoundingClientRect(); if (r.right > vw + 1 && r.width > 40) offenders.push(`${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : ''} right=${Math.round(r.right)}`); }
      return { title: document.title, docHeight: document.documentElement.scrollHeight, overflowPx: Math.max(0, docW - vw), offenders: offenders.slice(0, 12) };
    }, width);

    const fullPath = join(dir, 'full.png');
    await page.screenshot({ path: fullPath, fullPage: true });
    const fullBuf = readFileSync(fullPath);
    const fm = await sharp(fullBuf).metadata();
    const files = ['full.png'];
    // overview: 세로 OVERVIEW_CHUNK 씩 잘라 폭 OVERVIEW_W 로 축소
    let n = 0;
    const chunk = width < 600 ? 2000 : OVERVIEW_CHUNK; // 모바일은 폭이 좁아 Read 가 세로 2000 으로 줄이면 글자가 죽는다 → 짧게 자른다
    for (let top = 0; top < fm.height; top += chunk) {
      n++; const h = Math.min(chunk, fm.height - top);
      const p = join(dir, `overview-${n}.png`);
      await sharp(fullBuf).extract({ left: 0, top, width: fm.width, height: h }).resize({ width: Math.min(OVERVIEW_W, fm.width) }).png().toFile(p);
      files.push(basename(p));
      if (n === 1) overviews.push({ url, path: p });
    }
    // segments: 뷰포트 높이 단위 원본 조각
    if (opt.segments) {
      const segH = height * opt.dpr; let s = 0;
      for (let top = 0; top < fm.height; top += segH) {
        s++; const h = Math.min(segH, fm.height - top);
        const p = join(dir, `seg-${String(s).padStart(2, '0')}.png`);
        await sharp(fullBuf).extract({ left: 0, top, width: fm.width, height: h }).png().toFile(p);
        files.push(basename(p));
      }
    }
    // crop: 요소 하나를 dpr 2 로
    if (opt.selector) {
      const el = await page.$(opt.selector);
      if (el) { const p2 = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 2 }); await p2.goto(url, { waitUntil: 'networkidle' }); const el2 = await p2.$(opt.selector); if (el2) { await el2.scrollIntoViewIfNeeded(); await el2.screenshot({ path: join(dir, 'crop.png') }); files.push('crop.png'); } await p2.close(); }
      else console.log(`🟠 selector 못 찾음: ${opt.selector}`);
    }
    const report = { url, width, ...meta, consoleErrors: consoleErrors.slice(0, 10), failedRequests: [...new Set(failed)].slice(0, 10), files };
    writeFileSync(join(dir, 'report.json'), JSON.stringify(report, null, 2));
    summary.push(report);
    console.log(`✅ ${url} @${width}px → ${dir}  (높이 ${meta.docHeight}px · overview ${n}장 · seg ${files.filter(f => f.startsWith('seg')).length}장${meta.overflowPx ? ` · 🔴 가로 오버플로 ${meta.overflowPx}px` : ''}${consoleErrors.length ? ` · 🟠 콘솔 오류 ${consoleErrors.length}` : ''}${failed.length ? ` · 🟠 실패 요청 ${failed.length}` : ''})`);
    await page.close();
  }
  // sheet: 여러 경로의 overview-1 을 가로로
  if (overviews.length > 1) {
    const bufs = await Promise.all(overviews.map(o => sharp(readFileSync(o.path)).metadata().then(m => ({ ...o, m }))));
    const h = Math.min(2400, Math.max(...bufs.map(b => b.m.height))); const gap = 16;
    const w = bufs.reduce((a, b) => a + b.m.width, 0) + gap * (bufs.length - 1);
    const comps = []; let left = 0;
    for (const b of bufs) { const input = await sharp(readFileSync(b.path)).extract({ left: 0, top: 0, width: b.m.width, height: Math.min(h, b.m.height) }).extend({ bottom: Math.max(0, h - b.m.height), background: '#fff' }).png().toBuffer(); comps.push({ input, left, top: 0 }); left += b.m.width + gap; }
    const sheet = join(root, String(width), 'sheet.png');
    await sharp({ create: { width: w, height: h, channels: 3, background: '#888' } }).composite(comps).png().toFile(sheet);
    console.log(`✅ sheet @${width}px → ${sheet}  (왼쪽부터: ${overviews.map(o => new URL(o.url).pathname).join(' · ')})`);
  }
}
await browser.close();
writeFileSync(join(root, 'summary.json'), JSON.stringify(summary, null, 2));
console.log(`\n📁 ${root}\n🪶 보는 순서: overview-1 (구도) → seg-NN (글자) → crop (디테일). report.json 의 overflow·consoleErrors 를 먼저 읽어라.`);
