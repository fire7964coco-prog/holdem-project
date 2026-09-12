#!/usr/bin/env node
/**
 * indexnow.mjs — 사이트맵 URL을 IndexNow 로 한 번에 푸시한다 (Bing · Yandex · Naver · Seznam · Yep 가 공유)
 *
 *   npm run indexnow -- --all                  사이트맵 전체(≈700 URL · 한 요청)
 *   npm run indexnow -- --since 2026-09-10     lastmod 가 그 날짜 이상인 URL만
 *   npm run indexnow -- --urls /blog/a,/en/blog/b
 *   npm run indexnow -- --all --dry            보내지 않고 목록만
 *
 * 왜 있나 (2026-09-12 사장님 지시 「야후·얀덱스·빙 등 할 수 있는 건 하고 싶어」)
 *   구글은 IndexNow 를 안 받는다 — 구글 색인 요청은 GSC 에서 사장님이 손으로 한다(settled-decisions).
 *   IndexNow 한 번이면 Bing(= Yahoo · DuckDuckGo · Ecosia 의 인덱스)·Yandex·Naver 가 같은 목록을 받는다.
 *   키 파일 = `public/<key>.txt` (배포돼 있어야 검색엔진이 소유를 확인한다 · 키를 바꾸면 파일도 바꿔라).
 *
 * 규격: https://www.indexnow.org/documentation — POST https://api.indexnow.org/indexnow
 *   { host, key, keyLocation, urlList[] }  · 요청당 최대 10,000 URL · 200/202 = 접수
 *   🔴 «접수»는 «색인»이 아니다. 크롤 우선순위를 올릴 뿐이다. 같은 URL 을 하루에 여러 번 보내지 마라.
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const HOST = 'www.holdemmaster.com';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const val = (n) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : undefined; };

// 키 = public/<32hex>.txt 하나
const keyFile = readdirSync(join(ROOT, 'public')).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) { console.error('🔴 public/<key>.txt 가 없다 — 키 파일을 먼저 만들어라'); process.exit(1); }
const key = keyFile.replace(/\.txt$/, '');
if (readFileSync(join(ROOT, 'public', keyFile), 'utf8').trim() !== key) { console.error('🔴 키 파일 내용이 파일명과 다르다'); process.exit(1); }

// 사이트맵에서 <url><loc>·<lastmod> 를 읽는다
const smPath = join(ROOT, 'public', 'sitemap.xml');
if (!existsSync(smPath)) { console.error('🔴 public/sitemap.xml 없음 — npm run build 먼저'); process.exit(1); }
const xml = readFileSync(smPath, 'utf8');
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  loc: (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1],
  lastmod: (m[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1] || '',
})).filter((e) => e.loc);

let urls = [];
if (val('--urls')) urls = val('--urls').split(',').map((p) => p.trim()).filter(Boolean).map((p) => (p.startsWith('http') ? p : `https://${HOST}${p.startsWith('/') ? p : '/' + p}`));
else if (val('--since')) { const s = val('--since'); urls = entries.filter((e) => e.lastmod && e.lastmod >= s).map((e) => e.loc); }
else if (flag('--all')) urls = entries.map((e) => e.loc);
else { console.log(readFileSync(new URL(import.meta.url), 'utf8').split('*/')[0]); process.exit(0); }

urls = [...new Set(urls)].filter((u) => u.includes(HOST));
console.log(`IndexNow 대상 ${urls.length} URL (사이트맵 ${entries.length} · 키 ${key.slice(0, 6)}…)`);
if (!urls.length) process.exit(0);
if (flag('--dry')) { urls.slice(0, 20).forEach((u) => console.log('  ' + u)); if (urls.length > 20) console.log(`  … +${urls.length - 20}`); process.exit(0); }

const body = { host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: urls.slice(0, 10000) };
const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(body) });
const text = await res.text();
const ok = res.status === 200 || res.status === 202;
console.log(`${ok ? '✅' : '🔴'} HTTP ${res.status} ${res.statusText}${text ? ' — ' + text.slice(0, 200) : ''}`);
console.log(ok ? '🪶 접수됨 — Bing·Yandex·Naver 가 크롤 큐에 넣는다. 색인 여부는 각 웹마스터 도구에서 며칠 뒤 확인.' : '   403 = 키 파일이 아직 라이브에 없다(배포 대기) · 422 = URL 이 host 와 안 맞는다 · 429 = 너무 자주 보냈다');
process.exit(ok ? 0 : 1);
