/* ══════════════════════════════════════════════════════════════════════════
   참여 장치 게이트 (2026-09-28) — 대회 «참가 예정 → 후기» · 전략 글 투표 · 후기 이벤트 추첨

   왜 있나: 이 기능은 «숫자»를 세 군데서 끌어온다.
     ① 대회 날짜 = lib/tournaments.ts  ↔  글의 post.event  ↔  lib/participation-config.ts 의 id·slug
     ② 투표의 솔버 답 = lib/polls.ts  ↔  GTO 시리즈 글의 표(§13 — 수치를 지어내지 않는다)
     ③ 링크 거부 = lib/participation-config.ts LINK_PATTERN  ↔  supabase/participation.sql check 제약
   한쪽만 고치면 조용히 갈라진다. 이 게이트는 그 셋을 대조하고, 날짜 경계·추첨 로직을 셀프테스트한다.

   실행: node scripts/check-participation.mjs [--selftest]
   🔴 lib/participation-config.ts · lib/polls.ts 는 import 가 없어야 한다(여기서 그대로 트랜스파일해 읽는다).
   ══════════════════════════════════════════════════════════════════════════ */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const ts = require("typescript");

function loadTsModule(rel) {
  const src = readFileSync(join(ROOT, rel), "utf8");
  if (/^\s*import\s/m.test(src)) throw new Error(`${rel} 에 import 가 있다 — 이 게이트가 읽을 수 없다(파일 머리 주석 참조)`);
  const out = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const m = { exports: {} };
  new Function("module", "exports", out)(m, m.exports);
  return m.exports;
}

const read = (rel) => readFileSync(join(ROOT, rel), "utf8").replace(/\r\n/g, "\n");

/** lib/tournaments.ts 에서 id 블록의 필드(문자열)를 읽는다 */
function tournamentFields(src, id) {
  const at = src.indexOf(`id: "${id}"`);
  if (at < 0) return null;
  const next = src.indexOf("\n    id: \"", at + 5);
  const block = src.slice(at, next < 0 ? undefined : next);
  const f = (k) => (block.match(new RegExp(`\\n\\s*${k}: "([^"]*)"`)) || [])[1] ?? null;
  return { startDate: f("startDate"), endDate: f("endDate"), blogLink: f("blogLink") };
}

/** 포스트 원문(한 글) — lib/posts/<slug>.ts 또는 lib/posts.ts 안의 블록 */
function postSource(slug) {
  const own = `lib/posts/${slug}.ts`;
  if (existsSync(join(ROOT, own))) return { file: own, text: read(own) };
  const legacy = read("lib/posts.ts");
  const at = legacy.indexOf(`slug: "${slug}"`);
  if (at < 0) return null;
  const next = legacy.indexOf("\n  slug: \"", at + 5);
  return { file: "lib/posts.ts", text: legacy.slice(at, next < 0 ? undefined : next) };
}

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function audit() {
  const red = [];
  const cfg = loadTsModule("lib/participation-config.ts");
  const polls = loadTsModule("lib/polls.ts");
  const tsrc = read("lib/tournaments.ts");

  // ① 대회
  for (const t of cfg.REVIEW_TOURNAMENTS) {
    const f = tournamentFields(tsrc, t.id);
    if (!f) { red.push(`[대회] ${t.id}: lib/tournaments.ts 에 없음`); continue; }
    if (!f.startDate || !f.endDate) red.push(`[대회] ${t.id}: startDate/endDate 없음`);
    const post = postSource(t.slug);
    if (!post) { red.push(`[대회] ${t.id}: 글 ${t.slug} 없음`); continue; }
    if (!/layout:\s*"tournament-guide"/.test(post.text)) red.push(`[대회] ${t.slug}: layout 이 tournament-guide 가 아님(바가 붙지 않는다)`);
    const ps = (post.text.match(/startDate:\s*"([^"]+)"/) || [])[1];
    const pe = (post.text.match(/endDate:\s*"([^"]+)"/) || [])[1];
    if (ps !== f.startDate || pe !== f.endDate) red.push(`[대회] ${t.slug}: post.event ${ps}~${pe} ≠ tournaments.ts ${f.startDate}~${f.endDate}`);
    const linkOk = f.blogLink === `/blog/${t.slug}` || new RegExp(`blogLinkByLocale[\\s\\S]{0,400}"/blog/${esc(t.slug)}"`).test(tsrc.slice(tsrc.indexOf(`id: "${t.id}"`)));
    if (!linkOk) red.push(`[대회] ${t.id}: blogLink(${f.blogLink}) 가 /blog/${t.slug} 를 가리키지 않음`);
  }

  // ② 투표
  const ids = polls.POLLS.map((p) => p.id);
  if (new Set(ids).size !== ids.length) red.push("[투표] id 중복");
  for (const p of polls.POLLS) {
    const host = postSource(p.hostSlug);
    if (!host) { red.push(`[투표] ${p.id}: host 글 ${p.hostSlug} 없음`); continue; }
    const n = host.text.split(`\n:::poll[${p.id}]:::\n`).length - 1;
    if (n !== 1) red.push(`[투표] ${p.id}: ${p.hostSlug} 본문에 표식이 ${n}개(1개여야 한다 · 앞뒤 줄바꿈 포함)`);
    const src = postSource(p.sourceSlug);
    if (!src) { red.push(`[투표] ${p.id}: source 글 ${p.sourceSlug} 없음`); continue; }
    let sum = 0;
    for (const o of p.options) {
      const row = new RegExp(`^\\| ${esc(o.sourceRow)} \\| (?:\\*\\*)?${esc(o.freq)}(?:\\*\\*)? \\|`, "m");
      if (!row.test(src.text)) red.push(`[투표] ${p.id}: ${p.sourceSlug} 표에 «| ${o.sourceRow} | ${o.freq} |» 행이 없다 — 수치를 원문과 대조하라`);
      sum += parseFloat(o.freq);
    }
    if (Math.abs(sum - 100) > 0.2) red.push(`[투표] ${p.id}: 빈도 합 ${sum.toFixed(1)}% (반올림 허용 ±0.2 초과)`);
    if (p.board.length !== 3 || !p.board.every((c) => /^(?:[2-9TJQKA]|10)[♠♥♦♣]$/.test(c))) red.push(`[투표] ${p.id}: 보드 표기 오류 ${p.board.join(" ")}`);
    const boardInSrc = p.board.join("");
    if (!src.text.includes(boardInSrc)) red.push(`[투표] ${p.id}: 보드 ${boardInSrc} 가 ${p.sourceSlug} 원문에 없음(무늬까지 같아야 한다)`);
  }
  // 모든 글의 :::poll[...] 표식이 정의된 투표를 가리키는가
  const postFiles = readdirSync(join(ROOT, "lib/posts")).filter((f) => f.endsWith(".ts")).map((f) => `lib/posts/${f}`).concat("lib/posts.ts");
  for (const f of postFiles) {
    for (const m of read(f).matchAll(/:::poll\[([^\]]*)\]:::/g)) {
      if (!ids.includes(m[1])) red.push(`[투표] ${f}: 정의되지 않은 투표 표식 ${m[0]}`);
    }
  }

  // ③ 링크 거부 — 코드와 SQL 이 같은 도메인 목록을 쓰는가
  const sql = read("supabase/participation.sql");
  const tldsJs = (String(cfg.LINK_PATTERN.source).match(/\\\.\(([^)]+)\)/) || [])[1];
  const sqlTlds = [...sql.matchAll(/\\\.\(([a-z|]+)\)/g)].map((m) => m[1]);
  if (!tldsJs || sqlTlds.length !== 2 || sqlTlds.some((t) => t !== tldsJs)) red.push(`[링크] LINK_PATTERN 도메인 목록(${tldsJs}) ≠ SQL check 제약(${sqlTlds.join(" / ")})`);

  return red;
}

// ── 셀프테스트 ─────────────────────────────────────────────────────────────
function pickWinnerIndices(blockHash, entryCount, winners) { // lib/review-event.ts 와 같은 식
  const k = Math.max(0, Math.min(winners, entryCount));
  const picked = [];
  for (let i = 0; picked.length < k; i++) {
    const idx = parseInt(createHash("sha256").update(`${blockHash}:${i}`).digest("hex").slice(0, 8), 16) % entryCount;
    if (!picked.includes(idx)) picked.push(idx);
  }
  return picked;
}

function selftest() {
  const cfg = loadTsModule("lib/participation-config.ts");
  const cases = [];
  const ok = (name, cond) => cases.push([name, !!cond]);

  // KST 자정 경계
  ok("phase before (KST 10/22 23:59:59)", cfg.phaseOf("2026-10-23", "2026-10-25", new Date("2026-10-22T14:59:59Z")) === "before");
  ok("phase during (KST 10/23 00:00)", cfg.phaseOf("2026-10-23", "2026-10-25", new Date("2026-10-22T15:00:00Z")) === "during");
  ok("phase during (KST 10/25 23:59)", cfg.phaseOf("2026-10-23", "2026-10-25", new Date("2026-10-25T14:59:00Z")) === "during");
  ok("phase after (KST 10/26 00:00)", cfg.phaseOf("2026-10-23", "2026-10-25", new Date("2026-10-25T15:00:00Z")) === "after");
  // 응모 창
  ok("window closed during event", !cfg.isEntryWindowOpen("2026-10-25", new Date("2026-10-25T10:00:00Z")));
  ok("window open day after", cfg.isEntryWindowOpen("2026-10-25", new Date("2026-10-25T15:00:00Z")));
  ok("window open last day 23:59 KST", cfg.isEntryWindowOpen("2026-10-25", new Date("2026-11-08T14:59:00Z")));
  ok("window closed next day", !cfg.isEntryWindowOpen("2026-10-25", new Date("2026-11-08T15:00:00Z")));
  ok("deadline instant", cfg.entryDeadlineInstant("2026-10-25") === "2026-11-08T14:59:59.999Z");
  // 추첨일 = 마감 뒤 첫 일요일, 크론 판정과 일치
  for (const end of ["2026-10-25", "2026-11-08", "2026-11-09", "2026-12-31"]) {
    const d = cfg.drawSunday(end);
    ok(`drawSunday(${end}) is Sunday after deadline`, new Date(`${d}T00:00:00Z`).getUTCDay() === 0 && d > cfg.entryDeadline(end));
    // 그 일요일 19:00 KST(=10:00 UTC)에 크론이 돌면 isDrawDue 참, 그 전 일요일엔 거짓
    ok(`isDrawDue on drawSunday(${end})`, cfg.isDrawDue(end, new Date(`${d}T10:00:00Z`)));
    const prev = cfg.addDays(d, -7);
    ok(`not due on previous Sunday(${end})`, !cfg.isDrawDue(end, new Date(`${prev}T10:00:00Z`)));
  }
  // 링크 거부
  const L = cfg.LINK_PATTERN;
  for (const s of ["https://x.io", "http://a", "www.naver", "gop.kr/abc", "abc.com", "bit.ly/x", "ABC.COM 끝"]) ok(`link blocked: ${s}`, L.test(s));
  for (const s of ["팟 5.5bb에서 콜", "10.25 블라인드", "Lv.9부터 20분", "A.K 둘 다", "3.5만원", "3시간 30분 줄"]) ok(`link allowed: ${s}`, !L.test(s));
  // 추첨
  const h = "0000000000000000000123456789abcdef0123456789abcdef0123456789abcd";
  for (let n = 1; n <= 12; n++) {
    const w = pickWinnerIndices(h, n, 3);
    ok(`winners n=${n}: count=min(3,n) · distinct · in range`, w.length === Math.min(3, n) && new Set(w).size === w.length && w.every((i) => i >= 0 && i < n));
  }
  ok("winners deterministic", JSON.stringify(pickWinnerIndices(h, 50, 3)) === JSON.stringify(pickWinnerIndices(h, 50, 3)));
  const rt = read("lib/review-event.ts");
  ok("draw refuses before deadline", rt.includes("if (!isDrawDue(dates.endDate, new Date())) return { error"));
  ok("draw block = first block after entry deadline (deterministic)", rt.includes("fetchFirstBlockAfter(entryDeadlineInstant(dates.endDate))") && !rt.includes("fetchLatestBlock"));
  ok("draw never overwrites an existing round", rt.includes("if (existing) return { skipped: true };") && !rt.includes(".upsert("));
  ok("review-event.ts uses same hash formula", rt.includes('update(`${blockHash}:${i}`)') && rt.includes("parseInt(digest.slice(0, 8), 16) % entryCount"));

  const failed = cases.filter(([, v]) => !v);
  for (const [n, v] of cases) console.log(`${v ? "✅" : "❌"} ${n}`);
  console.log(`\n셀프테스트 ${cases.length - failed.length}/${cases.length}`);
  return failed.length === 0;
}

const isSelf = process.argv.includes("--selftest");
if (isSelf) {
  process.exit(selftest() ? 0 : 1);
} else {
  const red = audit();
  for (const r of red) console.log(`🔴 ${r}`);
  console.log(red.length ? `\n🔴 ${red.length}건` : "✅ 참여 장치 대조 0건 (대회 날짜 · 투표 수치 · 링크 규칙)");
  process.exit(red.length ? 1 : 0);
}
