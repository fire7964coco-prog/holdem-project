/**
 * 솔버 후기창 프로필 캐릭터 세트 생성 (2026-10-04 · docs/solver-review-design.md §3-1)
 * 포커 소품 계열 12종 · 글자 없음 · 브랜드 색(골드·그린·그레이) · 256×256 webp q82.
 * 출력 = public/images/review-avatar-<id>.webp  (id 목록 = lib/solver-feedback-config.ts AVATAR_CHARACTERS)
 *
 *   node scripts/gen-review-avatars.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const GOLD = "#c9a227", GOLD_D = "#8a6d12", GREEN = "#2f6f4f", GREEN_D = "#1d4a34", CREAM = "#f6efdc";
const RED = "#b8433a", NAVY = "#2c3e63", INK = "#2a2418";

const bg = (c) => `<circle cx="128" cy="128" r="128" fill="${c}"/>`;

function chip(main, edge) {
  const notches = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    const x = 128 + Math.cos(a) * 74, y = 128 + Math.sin(a) * 74;
    return `<rect x="${x - 9}" y="${y - 15}" width="18" height="30" rx="3" fill="${CREAM}" transform="rotate(${(i * 45) + 90} ${x} ${y})"/>`;
  }).join("");
  return `${bg(CREAM)}<circle cx="128" cy="128" r="88" fill="${main}"/>${notches}
    <circle cx="128" cy="128" r="52" fill="${edge}"/><circle cx="128" cy="128" r="44" fill="none" stroke="${CREAM}" stroke-width="4" stroke-dasharray="8 7"/>`;
}

const SPADE = "M128 70 C150 100 178 116 178 142 C178 162 160 172 144 166 C140 165 136 162 134 158 L142 190 L114 190 L122 158 C120 162 116 165 112 166 C96 172 78 162 78 142 C78 116 106 100 128 70 Z";
const HEART = "M128 186 C96 160 76 140 76 116 C76 98 90 86 106 86 C116 86 124 92 128 100 C132 92 140 86 150 86 C166 86 180 98 180 116 C180 140 160 160 128 186 Z";
const DIAMOND = "M128 72 L172 128 L128 184 L84 128 Z";
const CLUB = "M128 76 a24 24 0 1 1 -0.1 0 Z M98 118 a24 24 0 1 1 -0.1 0 Z M158 118 a24 24 0 1 1 -0.1 0 Z M120 140 L136 140 L144 188 L112 188 Z";

function card(pathD, color) {
  return `${bg(GREEN)}<rect x="66" y="40" width="124" height="176" rx="14" fill="${CREAM}" stroke="${GOLD}" stroke-width="5"/>
    <g transform="translate(128 128) scale(0.72) translate(-128 -128)"><path d="${pathD}" fill="${color}"/></g>`;
}

const SVGS = {
  "chip-gold": chip(GOLD, GOLD_D),
  "chip-green": chip(GREEN, GREEN_D),
  "chip-red": chip(RED, "#7e2a24"),
  "chip-navy": chip(NAVY, "#1b2740"),
  "card-spade": card(SPADE, INK),
  "card-heart": card(HEART, RED),
  "card-diamond": card(DIAMOND, RED),
  "card-club": card(CLUB, INK),
  "dealer-button": `${bg(GREEN)}<circle cx="128" cy="134" r="76" fill="${GOLD_D}"/><circle cx="128" cy="124" r="76" fill="${CREAM}"/>
    <circle cx="128" cy="124" r="60" fill="none" stroke="${GOLD}" stroke-width="6"/><circle cx="128" cy="124" r="18" fill="${GOLD}"/>`,
  "chip-stack": `${bg(CREAM)}${[0, 1, 2, 3, 4].map((i) => {
    const y = 176 - i * 24, c = [GREEN, GOLD, RED, NAVY, GOLD][i];
    return `<ellipse cx="128" cy="${y + 8}" rx="66" ry="20" fill="${INK}" opacity="0.25"/><ellipse cx="128" cy="${y}" rx="66" ry="20" fill="${c}"/>
      <ellipse cx="128" cy="${y}" rx="40" ry="11" fill="none" stroke="${CREAM}" stroke-width="3" stroke-dasharray="7 6"/>`;
  }).join("")}`,
  dice: `${bg(GREEN)}<rect x="62" y="62" width="132" height="132" rx="24" fill="${CREAM}" stroke="${GOLD}" stroke-width="5"/>
    ${[[96, 96], [160, 96], [128, 128], [96, 160], [160, 160]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="12" fill="${INK}"/>`).join("")}`,
  trophy: `${bg(GREEN)}<path d="M86 64 H170 V104 C170 134 152 150 128 154 C104 150 86 134 86 104 Z" fill="${GOLD}"/>
    <path d="M86 76 H62 C62 104 74 118 92 120" fill="none" stroke="${GOLD}" stroke-width="10"/>
    <path d="M170 76 H194 C194 104 182 118 164 120" fill="none" stroke="${GOLD}" stroke-width="10"/>
    <rect x="118" y="152" width="20" height="26" fill="${GOLD_D}"/><rect x="90" y="176" width="76" height="20" rx="4" fill="${GOLD}"/>`,
};

const cfg = fs.readFileSync("lib/solver-feedback-config.ts", "utf8");
const ids = [...cfg.match(/AVATAR_CHARACTERS = \[([\s\S]*?)\] as const/)[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
const missing = ids.filter((id) => !SVGS[id]);
if (missing.length) { console.error("❌ SVG 없음:", missing.join(", ")); process.exit(1); }

for (const id of ids) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">${SVGS[id]}</svg>`;
  const out = path.join("public/images", `review-avatar-${id}.webp`);
  const buf = await sharp(Buffer.from(svg)).resize(256, 256).webp({ quality: 82 }).toBuffer();
  fs.writeFileSync(out, buf);
  console.log(`✅ ${out} ${(buf.length / 1024).toFixed(1)}KB`);
}
