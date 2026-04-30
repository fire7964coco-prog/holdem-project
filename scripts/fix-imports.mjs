/**
 * Next.js 마이그레이션 후 import 경로 일괄 수정.
 *  - @/data/posts → @/lib/posts
 *  - @/data/pubs  → @/lib/pubs
 *  - @/lib/poker-eval (이미 OK, 그대로)
 *  - @/components/* (이미 OK)
 */
import fs from "fs";
import path from "path";

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const files = walk(path.resolve("app")).concat(walk(path.resolve("components")));
let touched = 0;

for (const f of files) {
  let s = fs.readFileSync(f, "utf-8");
  const before = s;
  s = s.replace(/@\/data\/posts/g, "@/lib/posts");
  s = s.replace(/@\/data\/pubs/g, "@/lib/pubs");
  s = s.replace(/from\s+["']\.\.\/data\/posts["']/g, 'from "@/lib/posts"');
  if (s !== before) {
    fs.writeFileSync(f, s, "utf-8");
    touched++;
    console.log("  fixed:", path.relative(process.cwd(), f));
  }
}
console.log(`\n${touched} files updated.`);
