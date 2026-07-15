/**
 * PageSpeed Insights → Core Web Vitals(모바일) 확인
 * 실제 유저(CrUX) 필드데이터 = 구글 페이지경험 순위신호 + 랩(Lighthouse) 점수.
 *
 * 사용법: node scripts/psi-check.mjs <URL> [<URL> ...]   (기본 strategy=mobile)
 */
const urls = process.argv.slice(2);
if (!urls.length) { console.error('사용법: node scripts/psi-check.mjs <URL> ...'); process.exit(1); }

const CAT = { FAST: '🟢좋음', AVERAGE: '🟡보통', SLOW: '🔴나쁨' };
function fld(m) {
  if (!m) return '데이터 부족';
  const lcp = m.LARGEST_CONTENTFUL_PAINT_MS, inp = m.INTERACTION_TO_NEXT_PAINT, cls = m.CUMULATIVE_LAYOUT_SHIFT_SCORE;
  const out = [];
  if (lcp) out.push(`LCP ${(lcp.percentile / 1000).toFixed(2)}s ${CAT[lcp.category] || ''}`);
  if (inp) out.push(`INP ${inp.percentile}ms ${CAT[inp.category] || ''}`);
  if (cls) out.push(`CLS ${(cls.percentile / 100).toFixed(2)} ${CAT[cls.category] || ''}`);
  return out.join('  ·  ');
}

for (const url of urls) {
  console.log('\n' + '='.repeat(72) + `\n📱 ${url}\n` + '='.repeat(72));
  try {
    const key = process.env.PSI_API_KEY ? `&key=${process.env.PSI_API_KEY}` : '';
    const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile${key}`;
    let res, tries = 0;
    for (;;) {
      res = await fetch(api);
      if (res.ok || res.status !== 429 || tries >= 3) break;
      tries++;
      const wait = tries * 12000;
      console.log(`  … 429, ${wait / 1000}s 대기 후 재시도(${tries}/3)`);
      await new Promise((r) => setTimeout(r, wait));
    }
    if (!res.ok) { console.log(`  ✖ HTTP ${res.status} — 키 없는 PSI 쿼터 소진. PSI_API_KEY 발급 권장(아래 안내).`); continue; }
    const d = await res.json();
    const le = d.loadingExperience, oe = d.originLoadingExperience, lh = d.lighthouseResult;

    console.log(`\n  [실제 유저 · 이 URL]  전체판정: ${CAT[le?.overall_category] || '데이터 부족'}`);
    console.log(`    ${fld(le?.metrics)}`);
    console.log(`  [실제 유저 · 사이트 전체(origin)]  전체판정: ${CAT[oe?.overall_category] || '데이터 부족'}`);
    console.log(`    ${fld(oe?.metrics)}`);

    if (lh) {
      const score = Math.round((lh.categories?.performance?.score || 0) * 100);
      const a = lh.audits || {};
      console.log(`\n  [랩(Lighthouse) 모바일]  성능점수 ${score}/100`);
      console.log(`    LCP ${a['largest-contentful-paint']?.displayValue}  ·  TBT ${a['total-blocking-time']?.displayValue}  ·  CLS ${a['cumulative-layout-shift']?.displayValue}  ·  SpeedIndex ${a['speed-index']?.displayValue}  ·  FCP ${a['first-contentful-paint']?.displayValue}`);
    }
  } catch (e) {
    console.log('  ✖', e?.message || e);
  }
}
