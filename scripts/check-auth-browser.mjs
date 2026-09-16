import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

const base = (process.env.BASE_URL || process.argv[2] || 'http://localhost:3100').replace(/\/$/, '');
if (!['localhost', '127.0.0.1', '[::1]'].includes(new URL(base).hostname)) throw new Error('Auth browser checks require a local server; external requests are mocked.');
const output = 'tmp/screen/ui-ux-auth';
mkdirSync(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];
const user = { id: '00000000-0000-4000-8000-000000000001', aud: 'authenticated', role: 'authenticated', email: 'ui-qa@example.test', email_confirmed_at: '2026-09-15T00:00:00Z', user_metadata: { name: 'UI QA' }, app_metadata: { provider: 'email', providers: ['email'] }, created_at: '2026-09-15T00:00:00Z' };
const exp = Math.floor(Date.now() / 1000) + 3600;
const token = [Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url'), Buffer.from(JSON.stringify({ sub: user.id, aud: 'authenticated', role: 'authenticated', exp })).toString('base64url'), 'mock-signature'].join('.');
const session = { access_token: token, refresh_token: 'mock-refresh', token_type: 'bearer', expires_in: 3600, expires_at: exp, user };
let checkCount = 0;
function check(value, message) { assert.ok(value, message); checkCount++; }
function contrast(first, second) {
  const luminance = value => value.match(/[\d.]+/g).slice(0, 3).map(Number).map(channel => channel / 255).map(channel => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4).reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
  const a = luminance(first), b = luminance(second);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

async function setup(width, authenticated = false) {
  const context = await browser.newContext({ viewport: { width, height: width < 600 ? 844 : 900 } });
  const state = { signInFails: false, recoveryFails: false, updateFails: false, signupSession: true, calls: [], pageErrors: [], blockedExternal: 0 };
  if (authenticated) await context.addCookies([{ name: 'sb-idikicmooauorjurdkzh-auth-token', value: 'base64-' + Buffer.from(JSON.stringify(session)).toString('base64url'), domain: new URL(base).hostname, path: '/', httpOnly: false, sameSite: 'Lax' }]);
  await context.routeWebSocket('**/*', socket => socket.close());
  await context.route('**/*', async route => {
    const request = route.request();
    const url = new URL(request.url());
    if (url.origin === base) return route.continue();
    if (url.hostname.endsWith('.supabase.co')) {
      const path = url.pathname;
      state.calls.push({ method: request.method(), path, url: url.toString(), body: request.postDataJSON() });
      let body = {};
      let status = 200;
      if (path === '/auth/v1/authorize') return route.fulfill({ status: 200, contentType: 'text/html', body: '<h1>Mock OAuth provider</h1>' });
      if (path === '/auth/v1/token') { body = state.signInFails ? { error_code: 'invalid_credentials', msg: 'Mock invalid credentials' } : session; status = state.signInFails ? 400 : 200; }
      else if (path === '/auth/v1/signup') body = state.signupSession ? session : user;
      else if (path === '/auth/v1/recover') { body = state.recoveryFails ? { error_code: 'over_email_send_rate_limit', msg: 'Mock rate limit' } : {}; status = state.recoveryFails ? 429 : 200; }
      else if (path === '/auth/v1/user') { body = state.updateFails && request.method() === 'PUT' ? { error_code: 'same_password', msg: 'Mock same password' } : user; status = state.updateFails && request.method() === 'PUT' ? 422 : 200; }
      else if (path.includes('/profiles')) body = request.headers().accept?.includes('object') ? { id: user.id, nickname: 'UI QA', language: 'ko' } : [];
      else body = [];
      return route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(body) });
    }
    state.blockedExternal++;
    return route.abort();
  });
  const page = await context.newPage();
  page.on('pageerror', error => state.pageErrors.push(error.message));
  return { context, page, state };
}

try {
  for (const width of [390, 1440]) {
    const { context, page, state } = await setup(width);
    await page.goto(`${base}/login?next=${encodeURIComponent('/en?tab=chat')}`);
    await page.getByLabel('이메일', { exact: true }).waitFor();
    for (let i = 0; i < 8; i++) {
      await page.keyboard.press('Tab');
      if (await page.evaluate(() => document.activeElement?.id === 'auth-email')) break;
    }
    const focus = await page.locator('#auth-email').evaluate(el => ({ active: document.activeElement === el, style: getComputedStyle(el).outlineStyle, width: getComputedStyle(el).outlineWidth, color: getComputedStyle(el).outlineColor, background: getComputedStyle(el.closest('section')).backgroundColor, labels: el.labels.length, autocomplete: el.autocomplete, overflow: document.documentElement.scrollWidth > innerWidth }));
    check(focus.active && focus.style === 'solid' && parseFloat(focus.width) >= 2, `Email focus visible at ${width}`);
    check(contrast(focus.color, focus.background) >= 3, `Focus contrast at ${width}`);
    check(focus.labels === 1 && focus.autocomplete === 'email', 'Email label and autocomplete');
    check(!focus.overflow, `No horizontal overflow at ${width}`);
    check(await page.locator('main').count() === 1, 'One main landmark');
    await page.screenshot({ path: `${output}/login-focus-${width}.png` });
    await page.getByRole('button', { name: '계정이 없으신가요? 회원가입' }).click();
    await page.getByLabel('닉네임', { exact: false }).waitFor();
    check(await page.locator('#auth-nickname').getAttribute('autocomplete') === 'nickname', 'Nickname autocomplete');
    check(await page.locator('#auth-password').getAttribute('autocomplete') === 'new-password', 'Signup password autocomplete');
    await page.screenshot({ path: `${output}/signup-${width}.png` });
    await page.getByRole('button', { name: '로그인으로 돌아가기' }).click();
    check(await page.locator('#auth-password').getAttribute('autocomplete') === 'current-password', 'Login password autocomplete');
    await page.getByRole('button', { name: '비밀번호를 잊으셨나요?' }).click();
    await page.waitForURL('**/login?**mode=recovery');
    await page.getByLabel('이메일', { exact: true }).fill('ui-qa@example.test');
    await page.getByRole('button', { name: '재설정 메일 보내기' }).click();
    await page.getByRole('status').filter({ hasText: '재설정 링크를 보냈습니다' }).waitFor();
    const recover = state.calls.find(c => c.path.endsWith('/recover'));
    const redirect = new URL(new URL(recover.url).searchParams.get('redirect_to'));
    check(redirect.pathname === '/auth/callback' && redirect.searchParams.get('flow') === 'recovery' && redirect.searchParams.get('next') === '/en?tab=chat', 'Recovery preserves locale and tab');
    await page.screenshot({ path: `${output}/recovery-sent-${width}.png` });
    state.recoveryFails = true;
    await page.getByRole('button', { name: '재설정 메일 보내기' }).click();
    await page.getByRole('alert').filter({ hasText: '요청하지 못했습니다' }).waitFor();
    check(await page.getByRole('button', { name: '재설정 메일 보내기' }).isEnabled(), 'Recovery failure remains retryable');
    check(state.pageErrors.length === 0, state.pageErrors.join('\n'));
    results.push({ width, focus, mockedCalls: state.calls.map(c => `${c.method} ${c.path}`), pageErrors: state.pageErrors });
    await context.close();
  }

  // Email login failure and success preserve the original locale and chat tab.
  {
    const { context, page, state } = await setup(390);
    const next = '/en?tab=chat';
    await page.goto(`${base}/login?next=${encodeURIComponent(next)}`);
    await page.getByLabel('이메일', { exact: true }).fill('ui-qa@example.test');
    await page.getByLabel('비밀번호', { exact: true }).fill('mock-password');
    state.signInFails = true;
    await page.getByRole('button', { name: '로그인', exact: true }).click();
    await page.getByRole('alert').filter({ hasText: '로그인하지 못했습니다' }).waitFor();
    check(await page.getByRole('button', { name: '로그인', exact: true }).isEnabled(), 'Login failure remains retryable');
    state.signInFails = false;
    await page.getByRole('button', { name: '로그인', exact: true }).click();
    await page.waitForURL(`${base}${next}`, { timeout: 60000 });
    check(page.url() === `${base}${next}`, 'Email login restores locale and chat tab');
    await page.locator('input[maxlength="200"]').waitFor();
    check(await page.locator('input[maxlength="200"]').count() === 1, 'Restored chat has one mounted message input');
    await context.close();
  }

  // Signup with email confirmation disabled should immediately restore compose intent.
  {
    const { context, page, state } = await setup(390);
    const next = '/en?tab=feed&compose=1';
    await page.goto(`${base}/login?next=${encodeURIComponent(next)}`);
    await page.getByRole('button', { name: '계정이 없으신가요? 회원가입' }).click();
    await page.getByLabel('이메일', { exact: true }).fill('ui-qa@example.test');
    await page.getByLabel('비밀번호', { exact: true }).fill('mock-password');
    await page.getByRole('button', { name: '가입하기' }).click();
    await page.waitForURL(`${base}${next}`, { timeout: 60000 });
    check(page.url() === `${base}${next}`, 'Immediate signup restores compose intent');
    const signup = state.calls.find(c => c.path.endsWith('/signup'));
    check(new URL(new URL(signup.url).searchParams.get('redirect_to')).searchParams.get('next') === next, 'Email confirmation callback preserves intent');
    check(signup.body.data.language === 'en', 'Signup profile keeps the destination locale');
    const dialog = page.getByRole('dialog', { name: 'New Post' });
    await dialog.waitFor();
    check(await dialog.locator('textarea').evaluate(el => document.activeElement === el), 'Restored compose intent focuses the draft');
    for (let index = 0; index < 5; index++) {
      await page.keyboard.press('Tab');
      if (!(await dialog.evaluate(el => el.contains(document.activeElement)))) console.log('Dialog focus failure', await page.evaluate(() => ({ active: document.activeElement?.tagName, id: document.activeElement?.id, dialogOpen: document.querySelector('dialog')?.open, modal: document.querySelector('dialog')?.matches(':modal') })));
      check(await dialog.evaluate(el => el.contains(document.activeElement)), 'Native compose dialog contains Tab focus');
    }
    await page.screenshot({ path: `${output}/compose-restored-en-390.png` });
    await page.keyboard.press('Escape');
    check(await page.getByRole('dialog').count() === 0, 'Escape closes restored compose dialog');
    check(!new URL(page.url()).searchParams.has('compose'), 'Handled compose parameter is consumed');
    await context.close();
  }

  // Header login captures filters changed after the header was mounted.
  {
    const { context, page } = await setup(1440);
    await page.goto(`${base}/calculator`);
    const headerLogin = page.locator('a[href^="/login"]:visible').first();
    await headerLogin.waitFor();
    // A user can only change in-page filters after hydration. Establish that state.
    await page.getByRole('tab', { name: /팟 오즈/ }).click();
    await page.getByRole('tab', { name: /팟 오즈/ }).evaluate(el => {
      if (el.getAttribute('aria-selected') !== 'true') throw new Error('Calculator tab was not hydrated');
    });
    const returnPath = '/calculator?tab=pot&snapshot=1#saved';
    await page.evaluate(path => history.replaceState(history.state, '', path), returnPath);
    await headerLogin.click();
    await page.waitForURL('**/login?**');
    if (new URL(page.url()).searchParams.get('next') !== returnPath) console.log('Header return mismatch', { expected: returnPath, actual: new URL(page.url()).searchParams.get('next') });
    check(new URL(page.url()).searchParams.get('next') === returnPath, 'Header login preserves the latest query and anchor');
    await context.close();
  }

  // OAuth request is intercepted before reaching Supabase or Google.
  {
    const { context, page, state } = await setup(390);
    const next = '/ja?tab=chat';
    await page.goto(`${base}/login?next=${encodeURIComponent(next)}`);
    await page.getByRole('button', { name: 'Google로 계속하기' }).click();
    await page.getByRole('heading', { name: 'Mock OAuth provider' }).waitFor();
    const oauth = state.calls.find(c => c.path.endsWith('/authorize'));
    check(new URL(new URL(oauth.url).searchParams.get('redirect_to')).searchParams.get('next') === next, 'OAuth preserves locale/tab');
    await context.close();
  }

  // A mocked recovery session can update a password, retry errors and show completion.
  {
    const { context, page, state } = await setup(390, true);
    const next = '/post/test-id#comments';
    await page.goto(`${base}/login/reset-password?next=${encodeURIComponent(next)}`);
    await page.getByLabel('새 비밀번호', { exact: true }).fill('new-mock-password');
    await page.getByLabel('새 비밀번호 확인', { exact: true }).fill('different-password');
    await page.getByRole('button', { name: '비밀번호 변경', exact: true }).click();
    await page.getByRole('alert').filter({ hasText: '일치하지 않습니다' }).waitFor();
    check(await page.locator('#confirm-password').evaluate(el => document.activeElement === el), 'Mismatch focuses confirmation');
    check(!state.calls.some(c => c.method === 'PUT'), 'Mismatch sends no password update');
    await page.getByLabel('새 비밀번호 확인', { exact: true }).fill('new-mock-password');
    state.updateFails = true;
    await page.getByRole('button', { name: '비밀번호 변경', exact: true }).click();
    await page.getByRole('alert').filter({ hasText: '기존 비밀번호와 다른' }).waitFor();
    check(await page.getByRole('button', { name: '비밀번호 변경', exact: true }).isEnabled(), 'Password failure remains retryable');
    state.updateFails = false;
    await page.getByRole('button', { name: '비밀번호 변경', exact: true }).click();
    await page.getByRole('status').filter({ hasText: '비밀번호를 변경했습니다' }).waitFor();
    check(await page.getByRole('link', { name: '보던 페이지로 돌아가기' }).getAttribute('href') === next, 'Password completion preserves page/anchor');
    check(await page.locator('input[type=password]').count() === 0, 'Completed form removes passwords');
    check((await page.locator('meta[name=robots]').getAttribute('content')).includes('noindex'), 'Recovery inherits noindex');
    await page.screenshot({ path: `${output}/reset-complete-390.png` });
    await context.close();
  }
  {
    const { context, page } = await setup(390);
    await page.goto(`${base}/login/reset-password?next=${encodeURIComponent('/en?tab=chat')}`);
    await page.getByRole('alert').filter({ hasText: '만료되었거나' }).waitFor();
    check(await page.locator('input[type=password]').count() === 0, 'Anonymous recovery hides password fields');
    check(new URL(await page.getByRole('link', { name: '재설정 메일 다시 요청하기' }).getAttribute('href'), base).searchParams.get('next') === '/en?tab=chat', 'Expired recovery retains destination');
    await page.screenshot({ path: `${output}/reset-expired-390.png` });
    await context.close();
  }
  writeFileSync(`${output}/report.json`, JSON.stringify({ checkCount, results, externalAuth: 'All Supabase requests mocked; no real email, signup, password update or social provider request sent.' }, null, 2));
  console.log(`PASS ${checkCount} browser checks; screenshots and report: ${output}`);
} finally {
  await browser.close();
}
