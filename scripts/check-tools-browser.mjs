import { chromium } from 'playwright';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Usage: node scripts/check-tools-browser.mjs [base URL]
// Also accepts --base URL or BASE_URL; it only exercises public calculator/quiz controls.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const baseIndex = args.indexOf('--base');
const base = (baseIndex >= 0 ? args[baseIndex + 1] : args[0]) || process.env.BASE_URL || 'http://localhost:3100';
const baseUrl = new URL(base);
if (!['http:', 'https:'].includes(baseUrl.protocol)) throw new Error('BASE_URL must use HTTP or HTTPS.');
const out = resolve(root, process.env.UX_ARTIFACT_DIR || `tmp/screen/tools-browser-${new Date().toISOString().slice(0, 10)}`);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ headless: true });
const checks = [];
const errors = [];
const ids = ['outs', 'pot', 'hand', 'starting', 'spr', 'm', 'icm', 'pushfold'];
let passed = false;

async function captureState(panel) {
  return panel.evaluate(el => ({
    inputs: [...el.querySelectorAll('input, select')].map(e => [e.id || e.getAttribute('aria-label'), e.value]),
    pressed: [...el.querySelectorAll('button[aria-pressed="true"]')].map(e => e.getAttribute('aria-label') || e.textContent.trim()),
    expanded: [...el.querySelectorAll('[aria-expanded="true"]')].map(e => e.textContent.trim()),
  }));
}

try {
  for (const locale of ['ko', 'en']) for (const width of [390, 1440]) {
    const prefix = locale === 'ko' ? '' : '/en';
    const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 900 }, reducedMotion: 'reduce' });
    page.on('pageerror', e => errors.push(`${page.url()} (${width}): ${e.message}`));
    await page.goto(new URL(`${prefix}/calculator`, baseUrl).href, { waitUntil: 'networkidle' });
    // Network idle does not guarantee React has attached the input handlers yet.
    await page.locator('[role="tablist"][aria-busy="false"]').waitFor();
    const states = {};
    const defaults = {};
    for (const id of ids) {
      await page.locator(`#calculator-tab-${id}`).click();
      const panel = page.locator(`#calculator-panel-${id}`);
      defaults[id] = await captureState(panel);
      if (id === 'outs') {
        await panel.locator('select').selectOption('0');
        await panel.locator('input[type=range]').press('ArrowRight');
        await panel.getByRole('button').last().click();
      } else if (id === 'pot') {
        await panel.locator('#pot-size').fill('9000');
        await panel.locator('#pot-call').fill('3000');
        assert.match(await panel.innerText(), /25%/);
        await panel.locator('#pot-equity').press('ArrowRight');
        await panel.locator('[aria-expanded]').click();
        await panel.locator('#pot-implied').press('ArrowRight');
      } else if (id === 'hand' || id === 'starting') {
        await panel.getByRole('button', { name: 'A♠', exact: true }).click();
        await panel.getByRole('button', { name: 'K♠', exact: true }).click();
      } else if (id === 'pushfold') {
        await panel.locator('#pushfold-stack').press('ArrowRight');
        await panel.getByRole('button', { name: locale === 'ko' ? '6맥스' : '6-max', exact: true }).click();
      } else {
        await panel.locator('input[type=number]').first().fill('21000');
        if (id === 'm') await panel.locator('#m-players').press('ArrowLeft');
      }
      const unnamed = await panel.locator('input, select').evaluateAll(inputs => inputs.filter(e => !e.labels?.length && !e.getAttribute('aria-label') && !e.getAttribute('aria-labelledby')).map(e => e.outerHTML));
      assert.deepEqual(unnamed, [], `${locale}/${id} accessible input labels`);
      states[id] = await captureState(panel);
      assert.notDeepEqual(states[id], defaults[id], `${id} was changed`);
    }
    for (const id of ids) {
      await page.locator(`#calculator-tab-${id}`).click();
      const panel = page.locator(`#calculator-panel-${id}`);
      assert.deepEqual(await captureState(panel), states[id], `${locale}/${width}/${id} retained`);
      assert.equal(await page.locator('[role=tabpanel]:visible').count(), 1);
      await page.getByRole('button', { name: locale === 'ko' ? / 초기화$/ : /^Reset / }).click();
      assert.deepEqual(await captureState(panel), defaults[id], `${locale}/${width}/${id} reset`);
    }
    await page.locator('#calculator-tab-pot').click();
    await page.locator('#pot-size').fill('9000');
    await page.locator('#pot-call').fill('3000');
    await page.locator('#calculator-tab-outs').click();
    await page.locator('#calculator-tab-outs').press('ArrowRight');
    assert.equal(await page.locator('#calculator-tab-pot').getAttribute('aria-selected'), 'true');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'calculator-tab-pot');
    assert.equal(await page.locator('#pot-size').inputValue(), '9000');
    await page.locator('#calculator-panel-pot').scrollIntoViewIfNeeded();
    await page.screenshot({ path: `${out}/calculator-${locale}-${width}.png` });
    checks.push({ locale, width, calculator: '8 tabs retain state and reset independently; labels and arrow navigation pass' });

    await page.goto(new URL(`${prefix}/quiz`, baseUrl).href, { waitUntil: 'networkidle' });
    for (let n = 1; n <= 10; n++) {
      const choices = page.locator('button').filter({ has: page.locator('div.text-2xl') });
      await choices.first().click();
      await page.getByRole('button', { name: n === 10 ? (locale === 'ko' ? /결과 보기/ : /See result/) : (locale === 'ko' ? /다음 문제/ : /Next/) }).click();
      const state = await page.evaluate(() => ({
        text: document.activeElement?.textContent,
        tag: document.activeElement?.tagName,
        top: document.activeElement?.getBoundingClientRect().top,
        header: document.querySelector('header')?.getBoundingClientRect().bottom ?? 0,
      }));
      assert.equal(state.tag, n === 10 ? 'H1' : 'H2');
      assert.ok(state.top >= state.header + 15 && state.top < state.header + 20, JSON.stringify(state));
      if (n < 10) assert.match(state.text, new RegExp(`${n + 1} / 10`));
      if (n === 1) await page.screenshot({ path: `${out}/quiz-next-${locale}-${width}.png` });
    }
    await page.getByRole('button', { name: locale === 'ko' ? /다시 도전/ : /Try again/ }).click();
    assert.match(await page.evaluate(() => document.activeElement.textContent), /1 \/ 10/);
    checks.push({ locale, width, quiz: '10 transitions, result and restart focus and header clearance pass' });

    if (locale === 'ko') {
      await page.goto(new URL('/hands', baseUrl).href, { waitUntil: 'networkidle' });
      const table = page.locator('table').first();
      await table.scrollIntoViewIfNeeded();
      const cols = await table.locator('thead th:visible').count();
      assert.equal(cols, width === 390 ? 3 : 4);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0);
      await table.screenshot({ path: `${out}/hands-table-${width}.png` });
      checks.push({ locale, width, hands: `${cols} columns; no horizontal overflow` });
    }
    await page.close();
  }
  assert.deepEqual(errors, []);
  passed = true;
} finally {
  fs.writeFileSync(`${out}/report.json`, JSON.stringify({ passed, base: baseUrl.href, checks, errors }, null, 2));
  await browser.close();
}
console.log(JSON.stringify({ passed, checks, errors, artifacts: out }, null, 2));
