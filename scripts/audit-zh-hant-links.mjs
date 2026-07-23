import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DIR = "lib/posts-zh-hant";
const files = readdirSync(DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts");

// group definitions
const GROUPS = {
  "필라(9)": ["holdem-hand-rankings","texas-holdem-rules-for-beginners","holdem-probability","holdem-starting-hands-chart","holdem-position-play","holdem-pot-odds","holdem-glossary","holdem-strategy","holdem-tournament"],
  "룰 클러스터(7)": ["holdem-betting-actions","holdem-blind-meaning","holdem-all-in-rules","holdem-showdown-rules","holdem-tiebreak-rules","holdem-kicker","holdem-split-pot-rules"],
  "확률 클러스터(6)": ["holdem-outs","holdem-drawing-odds","holdem-equity","holdem-implied-odds","holdem-reading-the-board","holdem-flush-vs-straight"],
  "전략 클러스터(5)": ["holdem-3bet","holdem-continuation-bet","holdem-limping","holdem-when-to-fold","holdem-game-order"],
  "토너먼트 클러스터(4)": ["holdem-tournament-vs-cash-game","holdem-bubble","holdem-icm","holdem-short-stack"],
  "용어·문화 클러스터(6)": ["holdem-bad-beat","holdem-cooler","holdem-fish","holdem-rake","holdem-straddle","holdem-card-counting"],
  "positions + 라이브이벤트(5)": ["holdem-positions","apt-incheon-2026-guide","korea-poker-marathon-2026","wpt-australia-2026-guide","ept-barcelona-2026-guide"],
};
const groupOf = (slug) => Object.entries(GROUPS).find(([, arr]) => arr.includes(slug))?.[0] ?? "?미분류";

const posts = {}; // slug -> { file, out:Set, outWithAnchor:[{anchor,target}] }
const fileBySlug = {};
for (const f of files) {
  const txt = readFileSync(join(DIR, f), "utf8");
  const slug = txt.match(/slug:\s*["']([^"']+)["']/)?.[1];
  if (!slug) { console.log("!! no slug in", f); continue; }
  fileBySlug[slug] = f;
  const out = new Set();
  const anchored = [];
  // markdown links [text](/zh-hant/blog/slug ...)
  for (const m of txt.matchAll(/\[([^\]]+)\]\(\/zh-hant\/blog\/([a-z0-9-]+)/g)) { out.add(m[2]); anchored.push({ anchor: m[1].replace(/\s+/g, " ").trim(), target: m[2] }); }
  // href="/zh-hant/blog/slug"
  for (const m of txt.matchAll(/href=["']\/zh-hant\/blog\/([a-z0-9-]+)/g)) out.add(m[1]);
  // readnext lines: /zh-hant/blog/slug | ...
  for (const m of txt.matchAll(/\/zh-hant\/blog\/([a-z0-9-]+)\s*\|/g)) out.add(m[1]);
  out.delete(slug); // ignore self
  posts[slug] = { file: f, out, anchored };
}

const allSlugs = new Set(Object.keys(posts));
// inbound
const inbound = {};
for (const s of allSlugs) inbound[s] = new Set();
const broken = [];
for (const [s, p] of Object.entries(posts)) {
  for (const t of p.out) {
    if (!allSlugs.has(t)) broken.push(`${s} -> ${t} (미존재)`);
    else inbound[t].add(s);
  }
}

console.log(`\n==== zh-hant 링크 전수검사 ====`);
console.log(`총 포스트: ${allSlugs.size} / 총 아웃바운드 엣지: ${Object.values(posts).reduce((a,p)=>a+p.out.size,0)}`);
console.log(`\n[깨진 링크(미존재 대상)] ${broken.length}건`);
broken.forEach((b) => console.log("  🔴 " + b));

console.log(`\n[고아글(inbound=0, SEO 위험)]`);
const orphans = [...allSlugs].filter((s) => inbound[s].size === 0);
if (!orphans.length) console.log("  ✅ 없음");
orphans.forEach((s) => console.log(`  ⚠️ ${s} [${groupOf(s)}]`));

// per group report
for (const [g, arr] of Object.entries(GROUPS)) {
  console.log(`\n──── ${g} ────`);
  for (const s of arr) {
    if (!posts[s]) { console.log(`  ?? ${s} (파일 없음)`); continue; }
    const inb = inbound[s];
    const out = posts[s].out;
    console.log(`  • ${s}  (inbound ${inb.size}, outbound ${out.size})`);
    console.log(`      ← inbound: ${[...inb].join(", ") || "(없음)"}`);
    console.log(`      → outbound: ${[...out].join(", ") || "(없음)"}`);
  }
}
