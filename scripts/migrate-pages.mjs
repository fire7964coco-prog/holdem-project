/**
 * Vite/wouter 페이지를 Next.js App Router 클라이언트 컴포넌트로 일괄 변환.
 *
 * 패턴: app/{route}/page.tsx (server, metadata + render <Client />)
 *      app/{route}/{name}-client.tsx (client, 'use client' + 기존 페이지 코드)
 *
 * 변경 사항 (each client file):
 *  - 'use client' 추가
 *  - `import { Link } from "wouter"` → `import Link from "next/link"`
 *  - `import { useLocation } from "wouter"` → `import { usePathname } from "next/navigation"`
 *  - `useLocation()` → `usePathname() || "/"` (필요한 경우 수동 처리)
 *  - `<Link href="..."><a>...</a></Link>` 형태 검사 (현재 코드에는 wouter 형식이라 그대로 OK)
 *
 * 페이지의 SEO 컴포넌트 호출은 그대로 두되, app/{route}/page.tsx 의 export const metadata 가 우선 적용됨.
 */
import fs from "fs";
import path from "path";

const ROUTE_MAP = [
  { src: "src/pages/home.tsx", route: "", name: "home" },
  { src: "src/pages/rules.tsx", route: "rules", name: "rules" },
  { src: "src/pages/rules/texas-holdem.tsx", route: "rules/texas-holdem", name: "rules-texas-holdem" },
  { src: "src/pages/rules/omaha.tsx", route: "rules/omaha", name: "rules-omaha" },
  { src: "src/pages/rules/seven-card-stud.tsx", route: "rules/seven-card-stud", name: "rules-seven-card-stud" },
  { src: "src/pages/hands.tsx", route: "hands", name: "hands" },
  { src: "src/pages/strategy.tsx", route: "strategy", name: "strategy" },
  { src: "src/pages/glossary.tsx", route: "glossary", name: "glossary" },
  { src: "src/pages/ranking.tsx", route: "ranking", name: "ranking" },
  { src: "src/pages/tournaments.tsx", route: "tournaments", name: "tournaments" },
  { src: "src/pages/calculator.tsx", route: "calculator", name: "calculator" },
  { src: "src/pages/quiz.tsx", route: "quiz", name: "quiz" },
  { src: "src/pages/hand-chart.tsx", route: "hand-chart", name: "hand-chart" },
  { src: "src/pages/blog/index.tsx", route: "blog", name: "blog-index" },
  { src: "src/pages/blog/roadmap.tsx", route: "blog/roadmap", name: "blog-roadmap" },
  { src: "src/pages/blog/post.tsx", route: "blog/[slug]", name: "blog-post", isDynamic: true },
  { src: "src/pages/pub/index.tsx", route: "pub", name: "pub-index" },
  { src: "src/pages/pub/region.tsx", route: "pub/[region]", name: "pub-region", isDynamic: true },
];

function transformContent(src) {
  let s = src;
  // 1) wouter import 교체
  s = s.replace(/import\s*\{\s*Link\s*\}\s*from\s*["']wouter["'];?/g, 'import Link from "next/link";');
  s = s.replace(
    /import\s*\{\s*Link,\s*useLocation\s*\}\s*from\s*["']wouter["'];?/g,
    'import Link from "next/link";\nimport { usePathname } from "next/navigation";',
  );
  s = s.replace(
    /import\s*\{\s*useLocation,\s*Link\s*\}\s*from\s*["']wouter["'];?/g,
    'import Link from "next/link";\nimport { usePathname } from "next/navigation";',
  );
  s = s.replace(
    /import\s*\{\s*useLocation\s*\}\s*from\s*["']wouter["'];?/g,
    'import { usePathname } from "next/navigation";',
  );
  s = s.replace(
    /import\s*\{\s*useRoute\s*\}\s*from\s*["']wouter["'];?/g,
    'import { useParams } from "next/navigation";',
  );
  s = s.replace(
    /import\s*\{\s*useParams\s*\}\s*from\s*["']wouter["'];?/g,
    'import { useParams } from "next/navigation";',
  );
  s = s.replace(/import\s*\{\s*Link,\s*useParams\s*\}\s*from\s*["']wouter["'];?/g,
    'import Link from "next/link";\nimport { useParams } from "next/navigation";',
  );

  // 2) useLocation 사용 패턴 변경: const [location] = useLocation();  →  const location = usePathname() || "/";
  s = s.replace(
    /const\s*\[\s*location\s*\]\s*=\s*useLocation\(\);?/g,
    'const location = usePathname() || "/";',
  );
  s = s.replace(
    /const\s*\[\s*,\s*setLocation\s*\]\s*=\s*useLocation\(\);?/g,
    "// setLocation removed (Next.js: use router.push instead)",
  );

  // 3) useRoute → useParams (wouter useRoute 는 [match, params] 반환 / Next.js useParams 는 객체 반환)
  // 일단 패턴 그대로 두고, 동적 라우트는 page.tsx 에서 props 로 slug/region 전달

  // 4) `import { SEO } from "@/components/seo"` 는 그대로 둠 (no-op 이지만 호환)
  // 5) baseUrl path: "/foo" → "/foo" (그대로)

  return s;
}

function pageTemplate({ name, isDynamic, route }) {
  const importPath = `./${name}-client`;
  const componentName = name
    .split("-")
    .map((p) => p[0].toUpperCase() + p.slice(1))
    .join("") + "Client";
  if (isDynamic) {
    // page.tsx 는 별도로 정교하게 쓸 거라 여기선 비워둠
    return null;
  }
  // 정적 페이지: client component 를 그대로 렌더
  return `import ${componentName} from "${importPath}";

export default function Page() {
  return <${componentName} />;
}
`;
}

let count = 0;
for (const r of ROUTE_MAP) {
  const srcPath = path.resolve(r.src);
  if (!fs.existsSync(srcPath)) {
    console.warn(`  ⚠️  missing: ${r.src}`);
    continue;
  }
  const dstDir = path.resolve(`app/${r.route}`);
  fs.mkdirSync(dstDir, { recursive: true });
  const content = fs.readFileSync(srcPath, "utf-8");
  const transformed = transformContent(content);

  // Client component 작성 ('use client' 헤더 추가)
  const clientPath = path.join(dstDir, `${r.name}-client.tsx`);
  const clientFile = '"use client";\n\n' + transformed;
  fs.writeFileSync(clientPath, clientFile, "utf-8");
  console.log(`  ✓ ${r.src} → ${path.relative(process.cwd(), clientPath)}`);
  count++;

  // 정적 페이지면 page.tsx 도 자동 생성
  if (!r.isDynamic) {
    const pageContent = pageTemplate(r);
    const pagePath = path.join(dstDir, "page.tsx");
    if (pageContent) {
      fs.writeFileSync(pagePath, pageContent, "utf-8");
      console.log(`  ✓ ${path.relative(process.cwd(), pagePath)} (server wrapper)`);
    }
  }
}

console.log(`\n✨ ${count} pages migrated to app/`);
