// Regression checks for authentication return routes. No account or network access.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import ts from 'typescript';
import { createJiti } from 'jiti';

const jiti = createJiti(import.meta.url, { alias: { '@': process.cwd() }, moduleCache: false });
const navigation = await jiti.import('../lib/auth-navigation.ts');
const { safeAuthNext, loginHref, resetPasswordHref, authCallbackUrl } = navigation;
let checks = 0;
function equal(actual, expected) { assert.equal(actual, expected); checks++; }

for (const next of ['/', '/?tab=chat', '/en?tab=chat', '/ja?tab=feed&compose=1', '/post/test-id#comments', '/blog?q=pot+odds&category=beginner', '/en/calculator', '/rules/texas-holdem', '/zh-hant/blog/example']) {
  equal(safeAuthNext(next), next);
  equal(new URL(loginHref(next), 'https://example.test').searchParams.get('next'), next);
  equal(new URL(authCallbackUrl('https://example.test', next), 'https://example.test').searchParams.get('next'), next);
}
for (const next of [null, '', 'https://evil.test', '//evil.test', '/\\evil.test', '/%5cevil.test', '/%2f%2fevil.test', '/%252f%252fevil.test', '/%255cevil.test', '/\tevil.test', '/%00evil.test', '/javascript:evil', '/api/delete', '/auth/callback', '/login?next=//evil.test', '/admin', '/en/login', '/en/calculator/delete', '/blog/../../api/delete', '/bad-route', '/%ZZ']) {
  equal(safeAuthNext(next), '/');
}
equal(safeAuthNext('/en/?tab=chat'), '/en?tab=chat');
equal(new URL(authCallbackUrl('https://example.test', '/en?tab=chat', true)).searchParams.get('flow'), 'recovery');

// Exercise the actual route handler with a fake Supabase server; never send a code.
const source = readFileSync(new URL('../app/auth/callback/route.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const require = createRequire(import.meta.url);
let outcome = 'success';
let exchanges = 0;
const module = { exports: {} };
vm.runInNewContext(compiled, {
  exports: module.exports, module, URL, Request,
  require(name) {
    if (name === '@/lib/auth-navigation') return navigation;
    if (name === '@/lib/supabase/server') return { createClient: async () => ({ auth: { exchangeCodeForSession: async () => {
      exchanges++;
      if (outcome === 'throw') throw new Error('mock offline');
      return { error: outcome === 'failure' ? { message: 'mock expired' } : null };
    } } }) };
    return require(name);
  },
});
const { GET } = module.exports;
async function location(query) {
  const response = await GET(new Request(`https://example.test/auth/callback?${new URLSearchParams(query)}`));
  equal(response.status, 307);
  return response.headers.get('location');
}
equal(await location({ code: 'mock-only', next: '/en?tab=chat' }), 'https://example.test/en?tab=chat');
equal(await location({ code: 'mock-only', next: '/?tab=feed&compose=1' }), 'https://example.test/?tab=feed&compose=1');
equal(await location({ code: 'mock-only', next: '/\\evil.test' }), 'https://example.test/');
equal(await location({ code: 'mock-only', next: '/post/test-id#comments', flow: 'recovery' }), `https://example.test${resetPasswordHref('/post/test-id#comments')}`);
outcome = 'failure';
equal(await location({ code: 'mock-only', next: '/en?tab=chat' }), `https://example.test${loginHref('/en?tab=chat', { error: 'auth' })}`);
equal(await location({ code: 'mock-only', next: '/en?tab=chat', flow: 'recovery' }), `https://example.test${loginHref('/en?tab=chat', { mode: 'recovery', error: 'recovery' })}`);
outcome = 'throw';
equal(await location({ code: 'mock-only', next: '/en?tab=chat' }), `https://example.test${loginHref('/en?tab=chat', { error: 'auth' })}`);
const beforeMissing = exchanges;
equal(await location({ next: '/en?tab=chat' }), `https://example.test${loginHref('/en?tab=chat', { error: 'auth' })}`);
equal(exchanges, beforeMissing);
console.log(`PASS: ${checks} auth return-path and mocked callback assertions; zero network requests.`);
