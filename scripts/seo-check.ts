#!/usr/bin/env tsx
/**
 * SEO 점검 스크립트 — 요스트 스타일
 * 사용법:
 *   특정 포스트: pnpm --filter @workspace/holdem-site run seo-check holdem-pot-odds-calculation
 *   전체 포스트: pnpm --filter @workspace/holdem-site run seo-check
 */

import { POSTS } from '../src/data/posts.js';

const slugArg = process.argv[2];

const G = '\x1b[32m';
const R = '\x1b[31m';
const Y = '\x1b[33m';
const B = '\x1b[1m';
const D = '\x1b[2m';
const X = '\x1b[0m';

interface CheckResult {
  pass: boolean;
  warn: boolean;
  label: string;
  detail: string;
}

function analyzePost(post: (typeof POSTS)[0]): CheckResult[] {
  const { title, seoTitle, desc, tags, content } = post;
  const focusKw = tags[0] ?? '';
  const r: CheckResult[] = [];

  // ── 1. title 길이 ──────────────────────────────────────────
  const tLen = title.length;
  r.push({
    pass: tLen <= 40, warn: tLen > 40 && tLen <= 45,
    label: `title 길이 (${tLen}자)`,
    detail: tLen <= 40 ? `✓ ${tLen}자` : `${tLen}자 — 40자 초과! 구글 제목 잘림 주의`,
  });

  // ── 2. seoTitle 길이 ────────────────────────────────────────
  const sLen = (seoTitle ?? '').length;
  r.push({
    pass: sLen <= 35, warn: sLen > 35 && sLen <= 38,
    label: `seoTitle 길이 (${sLen}자)`,
    detail: sLen <= 35 ? `✓ ${sLen}자` : `${sLen}자 — 35자 초과! 구글 검색결과 잘림`,
  });

  // ── 3. desc 길이 ────────────────────────────────────────────
  const dLen = desc.length;
  r.push({
    pass: dLen >= 120 && dLen <= 160,
    warn: (dLen >= 110 && dLen < 120) || (dLen > 160 && dLen <= 170),
    label: `desc 길이 (${dLen}자)`,
    detail: (dLen >= 120 && dLen <= 160)
      ? `✓ ${dLen}자 (범위: 120~160자)`
      : `${dLen}자 — 권장 범위 120~160자 벗어남`,
  });

  // ── 4. desc에 title 핵심어 포함 ────────────────────────────
  const titleWords = title.replace(/[—\-·\s]+/g, ' ').split(' ').filter(w => w.length >= 3);
  const descHasKw = titleWords.some(w => desc.includes(w));
  r.push({
    pass: descHasKw, warn: false,
    label: `desc ↔ title 키워드 연결`,
    detail: descHasKw ? `✓ desc에 title 핵심어 포함` : `desc에 title 핵심어 미포함!`,
  });

  // ── 5. 본문 글자 수 ─────────────────────────────────────────
  const cLen = content.length;
  r.push({
    pass: cLen >= 6000, warn: cLen >= 5000 && cLen < 6000,
    label: `본문 글자 수 (${cLen.toLocaleString()}자)`,
    detail: cLen >= 6000 ? `✓ ${cLen.toLocaleString()}자` : `${cLen.toLocaleString()}자 — 6,000자 미달!`,
  });

  // ── 6. 이미지 수 (.webp) — 마크다운 ![...] 및 :::faqcard[...] 모두 카운트
  const imgs = content.match(/!\[.*?\]\(.*?\.webp[^)]*\)/g) ?? [];
  const faqcardImgs = content.match(/:::faqcard\[\/images\/[^\]]+\.webp\]/g) ?? [];
  const imgCount = imgs.length + faqcardImgs.length;
  r.push({
    pass: imgCount >= 5, warn: imgCount >= 3 && imgCount < 5,
    label: `이미지 수 (${imgCount}장)`,
    detail: imgCount >= 5 ? `✓ ${imgCount}장` : `${imgCount}장 — 5장 미달!`,
  });

  // ── 7. 이미지 모두 .webp ────────────────────────────────────
  const allImgs = content.match(/!\[.*?\]\([^)]+\)/g) ?? [];
  const nonWebp = allImgs.filter(img => !img.includes('.webp'));
  r.push({
    pass: nonWebp.length === 0, warn: false,
    label: `이미지 형식 (.webp 전용)`,
    detail: nonWebp.length === 0
      ? `✓ 모든 이미지 .webp`
      : `비WebP ${nonWebp.length}개: ${nonWebp.slice(0, 2).join(' | ')}`,
  });

  // ── 8. 이미지 alt에 키워드 포함 — 마크다운 alt + faqcard 설명 텍스트 모두 확인
  const altTexts = [
    ...[...content.matchAll(/!\[([^\]]*)\]/g)].map(m => m[1]),
    ...[...content.matchAll(/:::faqcard\[[^\]]*\]\[([^\]]*)\]/g)].map(m => m[1]),
  ];
  const kwShort = focusKw.split(' ')[0];
  const altHasKw = altTexts.some(a => kwShort && a.includes(kwShort));
  r.push({
    pass: altHasKw, warn: !altHasKw && focusKw !== '',
    label: `이미지 alt 키워드 포함`,
    detail: altHasKw ? `✓ alt에 "${kwShort}" 포함` : `alt에 키워드 "${kwShort}" 미포함 — SEO 손실`,
  });

  // ── 9. 표 수 ────────────────────────────────────────────────
  const tableSeps = content.match(/\|[\s:]*-[-\s:|]+\|/g) ?? [];
  const tableCount = tableSeps.length;
  r.push({
    pass: tableCount >= 3, warn: tableCount === 2,
    label: `표 수 (${tableCount}개)`,
    detail: tableCount >= 3 ? `✓ ${tableCount}개` : `${tableCount}개 — 3개 미달!`,
  });

  // ── 10. FAQ 섹션 ────────────────────────────────────────────
  const hasFaq = content.includes('FAQ') || content.includes('자주 묻는');
  r.push({
    pass: hasFaq, warn: false,
    label: `FAQ 섹션`,
    detail: hasFaq ? `✓ FAQ 포함` : `FAQ 섹션 없음!`,
  });

  // ── 11. 내부링크 수 ─────────────────────────────────────────
  const intLinks = content.match(/\(\/blog\//g) ?? [];
  const linkCount = intLinks.length;
  r.push({
    pass: linkCount >= 3, warn: linkCount === 2,
    label: `내부링크 수 (${linkCount}개)`,
    detail: linkCount >= 3 ? `✓ ${linkCount}개` : `${linkCount}개 — 3개 미달!`,
  });

  // ── 12. 내부링크 유효성 (깨진 링크 검사) ───────────────────
  const linkedSlugs = [...content.matchAll(/\(\/blog\/([^)#?]+)\)/g)].map(m => m[1]);
  const validSlugs = new Set(POSTS.map(p => p.slug));
  const deadLinks = linkedSlugs.filter(s => !validSlugs.has(s));
  r.push({
    pass: deadLinks.length === 0, warn: false,
    label: `내부링크 유효성`,
    detail: deadLinks.length === 0
      ? `✓ 모든 내부링크 유효`
      : `깨진 링크 ${deadLinks.length}개: ${deadLinks.join(', ')}`,
  });

  // ── 13. 스카이블루(==) 개수 ─────────────────────────────────
  const skyblue = content.match(/==[^=\n]+==/g) ?? [];
  const sbCount = skyblue.length;
  r.push({
    pass: sbCount >= 1 && sbCount <= 8,
    warn: sbCount === 0 || (sbCount > 8 && sbCount <= 12),
    label: `스카이블루 강조 수 (${sbCount}개)`,
    detail: (sbCount >= 1 && sbCount <= 8)
      ? `✓ ${sbCount}개 (권장: 1~8개)`
      : sbCount === 0 ? `스카이블루 0개 — 키워드 강조 없음`
      : `${sbCount}개 — 8개 초과! 임팩트 감소`,
  });

  // ── 14. 첫 단락(500자) 포커스 키워드 등장 ───────────────────
  // "이란?", "이란", "란?" 등 의문형 조사 제거한 기본형도 함께 검사
  const firstPara = content.replace(/!\[.*?\]\(.*?\)/g, '').slice(0, 500);
  const kwBase = kwShort.replace(/(?:이란\??|란\??)$/, '');
  const kwInFirst = kwShort
    ? firstPara.includes(kwShort) || (kwBase && kwBase !== kwShort && firstPara.includes(kwBase))
    : true;
  r.push({
    pass: kwInFirst, warn: !kwInFirst && kwShort !== '',
    label: `첫 단락 키워드 등장`,
    detail: kwInFirst
      ? `✓ 첫 단락에 "${kwBase !== kwShort ? kwBase : kwShort}" 등장`
      : `"${kwShort}" 첫 단락 미등장 — 확인 권장`,
  });

  // ── 15. H2 제목에 키워드 포함 ───────────────────────────────
  // 다단어 키워드: 개별 단어 중 하나라도 H2에 있으면 통과
  // 붙여쓴 복합어 키워드(홀덤타이브레이크): "홀덤" 접두어 제거한 뒤 검사
  const h2s = [...content.matchAll(/^## (.+)$/gm)].map(m => m[1]);
  const kwParts = [...new Set([
    kwShort,
    ...focusKw.split(' ').filter(w => w.length >= 2),
    // "홀덤XX" 형태의 붙여쓴 복합어는 "홀덤" 이후 부분도 추가
    ...(kwShort.startsWith('홀덤') && kwShort.length > 2 ? [kwShort.slice(2)] : []),
    ...(kwBase && kwBase !== kwShort ? [kwBase] : []),
  ])].filter(Boolean);
  const h2HasKw = h2s.some(h => kwParts.some(w => w && h.includes(w)));
  r.push({
    pass: h2HasKw, warn: !h2HasKw && kwShort !== '',
    label: `H2 헤딩에 키워드 포함`,
    detail: h2HasKw
      ? `✓ H2에 "${kwShort}" 포함`
      : `H2에 "${kwShort}" 미포함 — 확인 권장 (H2: ${h2s.length}개)`,
  });

  return r;
}

function printReport(post: (typeof POSTS)[0], showSlug = true) {
  const results = analyzePost(post);
  const passed = results.filter(r => r.pass).length;
  const total = results.length;
  const score = Math.round((passed / total) * 100);
  const scoreColor = score >= 90 ? G : score >= 70 ? Y : R;

  console.log(`\n${B}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${X}`);
  console.log(`${B}📊 ${post.title}${X}`);
  if (showSlug) console.log(`${D}   /blog/${post.slug} | 포커스 키워드: ${post.tags[0] ?? '없음'}${X}`);
  console.log(`${scoreColor}${B}   SEO 점수: ${score}점 (${passed}/${total} 항목 통과)${X}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

  for (const res of results) {
    const ico = res.pass ? `${G}✅${X}` : res.warn ? `${Y}⚠️ ${X}` : `${R}❌${X}`;
    console.log(`  ${ico} ${res.label}`);
    if (!res.pass) console.log(`      ${D}→ ${res.detail}${X}`);
  }

  const failed = results.filter(r => !r.pass && !r.warn);
  const warned = results.filter(r => !r.pass && r.warn);
  if (failed.length > 0)
    console.log(`\n  ${R}${B}❌ 수정 필요 (${failed.length}):${X} ${R}${failed.map(r => r.label.split('(')[0].trim()).join(' / ')}${X}`);
  if (warned.length > 0)
    console.log(`  ${Y}⚠️  확인 권장 (${warned.length}):${X} ${Y}${warned.map(r => r.label.split('(')[0].trim()).join(' / ')}${X}`);
  if (failed.length === 0 && warned.length === 0)
    console.log(`\n  ${G}${B}🎉 모든 항목 통과!${X}`);
}

// ── Main ───────────────────────────────────────────────────────
const postsToCheck = slugArg ? POSTS.filter(p => p.slug === slugArg) : POSTS;

if (slugArg && postsToCheck.length === 0) {
  console.log(`${R}오류: "${slugArg}" 슬러그를 찾을 수 없습니다.${X}`);
  process.exit(1);
}

console.log(`\n${B}🔍 홀덤마스터 SEO 점검 시작${X} — ${postsToCheck.length}개 포스트`);

for (const post of postsToCheck) printReport(post, !slugArg);

if (!slugArg) {
  const all = postsToCheck.map(analyzePost);
  const totalPassed = all.reduce((s, r) => s + r.filter(x => x.pass).length, 0);
  const totalChecks = all.reduce((s, r) => s + r.length, 0);
  const overall = Math.round((totalPassed / totalChecks) * 100);
  const oc = overall >= 90 ? G : overall >= 70 ? Y : R;
  console.log(`\n${B}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${X}`);
  console.log(`${B}📈 전체 SEO 점수: ${oc}${overall}점${X}${B} (${postsToCheck.length}개 포스트 평균)${X}`);
  console.log(`${B}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${X}\n`);
}
