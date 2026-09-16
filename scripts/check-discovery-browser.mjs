// Browser regression for discovery URLs and navigation. Public reads only.
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const base = process.env.BASE_URL || 'http://localhost:3100';
const out = process.env.QA_OUT || 'tmp/screen/ui-ux-discovery';
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ headless: true });
const checks = [], errors = [];
const record = (name, detail = true) => checks.push({ name, detail });
async function until(fn, label) {
  for (let i = 0; i < 50; i++) { if (await fn()) return; await new Promise(r => setTimeout(r, 100)); }
  throw new Error(label);
}
try {
  for (const width of [390, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    page.on('pageerror', e => errors.push(`${width}: ${e.message}`));
    await page.goto(base, { waitUntil: 'networkidle' });
    assert.equal(await page.locator('a[href="/post/page:tournaments"]').count(), 0);
    assert.ok(await page.locator('a[href="/tournaments"]').count());
    record(`${width}: popular tournament URL`);
    if (width === 390) {
      for (const label of ['처음 배우기', '전략 읽기', '도구 사용']) assert.ok(await page.getByRole('link', { name: label, exact: true }).isVisible());
      await page.locator('summary').filter({ hasText: '전체 가이드·도구 메뉴' }).click();
      assert.ok(await page.getByRole('navigation', { name: '홀덤 가이드 바로가기' }).getByRole('link').count() > 10);
      await page.screenshot({ path: `${out}/home-menu-${width}.png` });
      await page.getByLabel('홀덤 글 검색', { exact: true }).fill('팟오즈');
      await page.getByRole('navigation', { name: '홀덤 가이드 바로가기' }).getByRole('button', { name: '검색', exact: true }).click();
      await page.waitForURL('**/blog?q=*');
      await until(async () => await page.locator('#blog-search').inputValue() === '팟오즈', 'home search query');
      record('mobile: home search and complete guide menu');
    } else await page.goto(`${base}/blog?q=${encodeURIComponent('팟오즈')}`, { waitUntil: 'networkidle' });
    await until(async () => await page.locator('article').count() > 0 && await page.locator('a[href="/blog/roadmap"]').count() === 0, 'compact search results');
    const first = await page.locator('article').first().boundingBox();
    assert.ok(first.y < 800, `first result above fold: ${first.y}`);
    await page.screenshot({ path: `${out}/blog-search-${width}.png` });
    record(`${width}: search result visible above fold`, { firstResultTop: first.y });
    await page.goto(`${base}/blog`, { waitUntil: 'networkidle' });
    const categoryButtons = page.locator('button[aria-pressed]');
    const category = (await categoryButtons.nth(1).textContent()).trim();
    await categoryButtons.nth(1).click();
    await until(async () => new URL(page.url()).searchParams.get('category') === category, 'category URL');
    await page.reload({ waitUntil: 'networkidle' });
    await until(async () => await page.getByRole('button', { name: category, exact: true }).getAttribute('aria-pressed') === 'true', 'category reload');
    await page.getByRole('button', { name: '전체', exact: true }).click();
    await until(async () => !new URL(page.url()).searchParams.has('category'), 'category clear');
    await page.goBack();
    await until(async () => await page.getByRole('button', { name: category, exact: true }).getAttribute('aria-pressed') === 'true', 'category back');
    await page.goForward();
    await until(async () => await page.getByRole('button', { name: '전체', exact: true }).getAttribute('aria-pressed') === 'true', 'category forward');
    record(`${width}: category URL/reload/back/forward`, category);
    await page.goto(`${base}/tournaments`, { waitUntil: 'networkidle' });
    assert.equal(await page.locator('[data-tournament-status="ended"]:visible').count(), 0);
    assert.ok(await page.locator('[data-tournament-status]:visible').count());
    await page.getByRole('button', { name: '종료', exact: true }).click();
    await until(async () => new URL(page.url()).searchParams.get('status') === 'ended', 'ended URL');
    assert.ok(await page.locator('[data-tournament-status="ended"]:visible').count());
    assert.equal(await page.locator('[data-tournament-status="upcoming"]:visible').count(), 0);
    await page.getByLabel('개최 월', { exact: true }).selectOption('2026-01');
    await until(async () => new URL(page.url()).searchParams.get('month') === '2026-01', 'month URL');
    await page.reload({ waitUntil: 'networkidle' });
    await until(async () => await page.getByRole('button', { name: '종료', exact: true }).getAttribute('aria-pressed') === 'true', 'schedule reload');
    assert.equal(await page.getByLabel('개최 월', { exact: true }).inputValue(), '2026-01');
    await page.getByRole('button', { name: '필터 초기화', exact: true }).click();
    await until(async () => !new URL(page.url()).search, 'schedule reset');
    await page.locator('[aria-label="주요 진행·예정 대회"] button').first().click();
    await until(async () => (await page.evaluate(() => document.activeElement?.id || '')).startsWith('tournament-'), 'schedule shortcut focus');
    const target = await page.locator(new URL(page.url()).hash).boundingBox();
    assert.ok(target.y >= 65 && target.y < 180, `shortcut target top ${target.y}`);
    await page.screenshot({ path: `${out}/tournament-target-${width}.png` });
    record(`${width}: active/archive/month/reload/reset/shortcut`, { targetTop: target.y });
    await page.goto(`${base}/?tab=event`, { waitUntil: 'networkidle' });
    assert.equal(await page.getByText('2026년 6월 이벤트', { exact: true }).count(), 0);
    await page.screenshot({ path: `${out}/event-${width}.png` });
    for (const path of ['/tournaments', '/glossary', '/blog']) {
      await page.goto(base + path, { waitUntil: 'networkidle' });
      assert.equal(await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - innerWidth)), 0, `${path} overflow ${width}`);
      if (path !== '/blog') record(`${width}: ${path} heading color`, await page.locator('h1').evaluate(el => ({ color: getComputedStyle(el).color, text: el.textContent })));
    }
    await page.close();
  }
  assert.deepEqual(errors, []);
  console.log(`Discovery browser: ${checks.length} checks passed; page errors 0`);
} finally {
  fs.writeFileSync(`${out}/report.json`, JSON.stringify({ base, checks, errors }, null, 2));
  await browser.close();
}
