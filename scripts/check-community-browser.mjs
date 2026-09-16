import { chromium } from 'playwright';
import fs from 'node:fs';
import assert from 'node:assert/strict';

const base = process.argv.find((arg) => arg.startsWith('--base='))?.slice(7) ?? process.env.BASE_URL ?? process.env.UX_BASE_URL ?? 'http://localhost:3100';
const output = 'tmp/screen/community-ux-qa';
fs.mkdirSync(output, { recursive: true });
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
const user = { id: '00000000-0000-4000-8000-000000000001', aud: 'authenticated', role: 'authenticated', email: 'fixture@example.invalid', app_metadata: {}, user_metadata: {}, created_at: '2026-09-15T00:00:00Z' };
const b64 = (data) => Buffer.from(JSON.stringify(data)).toString('base64url');
const expires = Math.floor(Date.now() / 1000) + 3600;
const token = `${b64({ alg: 'HS256', typ: 'JWT' })}.${b64({ ...user, sub: user.id, exp: expires })}.fixture`;
const session = { access_token: token, refresh_token: 'fixture', expires_at: expires, expires_in: 3600, token_type: 'bearer', user };
await context.addCookies([{ name: 'sb-idikicmooauorjurdkzh-auth-token', value: `base64-${b64(session)}`, domain: new URL(base).hostname, path: '/' }]);
const page = await context.newPage();
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
await page.routeWebSocket('**/realtime/**', (socket) => socket.close());
const messages = Array.from({ length: 75 }, (_, i) => ({ id: `00000000-0000-4000-8000-${String(i + 1).padStart(12, '0')}`, user_id: 'fixture-other', nickname: 'Fixture', language: 'ko', content: `Fixture message ${String(i + 1).padStart(3, '0')}`, created_at: new Date(Date.UTC(2026, 8, 15, 0, i + 1)).toISOString() }));
let posts = 0;
const chatQueries = [];
await page.route('https://idikicmooauorjurdkzh.supabase.co/**', async (route) => {
  const request = route.request();
  const url = new URL(request.url());
  let data = [];
  let status = 200;
  if (url.pathname.endsWith('/auth/v1/user')) data = user;
  else if (url.pathname.endsWith('/profiles')) data = { id: user.id, nickname: 'Fixture User', language: 'ko', avatar_url: null, badge: null };
  else if (url.pathname.endsWith('/event_entries') || url.pathname.endsWith('/event_draws')) data = null;
  else if (url.pathname.endsWith('/chat_messages')) {
    if (request.method() === 'POST') {
      posts++;
      if (posts === 1) { status = 503; data = { message: 'Fixture send failure', code: 'fixture' }; }
      else data = { id: 'fixture-sent', user_id: user.id, nickname: 'Fixture User', language: 'ko', content: JSON.parse(request.postData()).content, created_at: '2026-09-15T02:00:00Z' };
    } else {
      chatQueries.push(url.search);
      data = (url.searchParams.has('or') ? messages.slice(0, 25) : messages).toReversed().slice(0, 51);
    }
  }
  await route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(data) });
});

try {
  await page.goto(`${base}/?tab=chat`, { waitUntil: 'networkidle', timeout: 120000 });
  const input = page.locator('input[aria-label]').filter({ visible: true });
  await input.waitFor({ timeout: 30000 });
  assert.equal(await page.getByText('Fixture message 075', { exact: true }).count(), 1);
  assert.equal(await page.getByText('Fixture message 026', { exact: true }).count(), 1);
  assert.equal(await page.getByText('Fixture message 025', { exact: true }).count(), 0);
  assert.match(chatQueries[0], /order=created_at.desc%2Cid.desc/);
  await page.getByRole('button', { name: /Load older|이전 메시지/ }).click();
  await page.getByText('Fixture message 001', { exact: true }).waitFor();
  assert.equal(await page.getByText('Fixture message 075', { exact: true }).count(), 1);
  const scrollerPosition = await page.locator('.overflow-y-auto').filter({ has: page.getByText('Fixture message 075', { exact: true }) }).last().evaluate((element) => ({ scrollTop: element.scrollTop, scrollHeight: element.scrollHeight }));
  await input.fill('Fixture draft');
  await input.dispatchEvent('keydown', { key: 'Enter', code: 'Enter', isComposing: true, keyCode: 229 });
  assert.equal(posts, 0);
  await input.press('Enter');
  await page.getByRole('alert').waitFor();
  assert.equal(await input.inputValue(), 'Fixture draft');
  assert.equal(posts, 1);
  await page.screenshot({ path: `${output}/chat-send-failed.png` });
  await input.press('Enter');
  await page.getByText('Fixture draft', { exact: true }).waitFor();
  assert.equal(await input.inputValue(), '');
  assert.equal(posts, 2);

  await page.goto(`${base}/`, { waitUntil: 'networkidle', timeout: 120000 });
  const write = page.getByRole('button', { name: '✏️ 글 쓰기', exact: true }).filter({ visible: true });
  await write.click();
  const dialog = page.getByRole('dialog');
  await dialog.waitFor();
  assert.equal(await page.evaluate(() => document.activeElement.tagName), 'TEXTAREA');
  await page.getByRole('dialog').locator('textarea').fill('Fixture draft preserved');
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => !!document.activeElement.closest('dialog')), true);
  }
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press('Shift+Tab');
    assert.equal(await page.evaluate(() => !!document.activeElement.closest('dialog')), true);
  }
  await page.screenshot({ path: `${output}/write-dialog.png` });
  await page.keyboard.press('Escape');
  await dialog.waitFor({ state: 'hidden' });
  assert.equal(await write.evaluate((element) => element === document.activeElement), true);
  await write.click();
  assert.equal(await dialog.locator('textarea').inputValue(), 'Fixture draft preserved');
  await page.keyboard.press('Escape');
  const result = { passed: true, checks: ['Latest 50 of 75 messages', 'Older cursor pagination', 'One message per id', 'IME Enter blocked', 'Failure keeps draft', 'Retry appends returned message', 'Dialog autofocus', 'Dialog focus trap', 'Escape and focus return', 'Draft kept on modal close'], mockedWrites: posts, realWrites: 0, chatQueries, scrollerPosition, errors };
  assert.deepEqual(errors, []);
  fs.writeFileSync(`${output}/report.json`, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result));
} finally { await browser.close(); }
