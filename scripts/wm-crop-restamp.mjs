import sharp from 'sharp';
import { readFileSync, writeFileSync, renameSync, statSync } from 'fs';

// wm-crop-restamp — `wm-restamp.mjs`(좌우 보간 인페인팅)가 못 쓰는 두 국면을 담당한다.
//
//   crop : 배경이 사람·군중처럼 복잡해 보간이 형체를 뭉개는 경우.
//          마크 위에서 잘라내고 16:9로 원치수(1200×675) 복원한 뒤 정본을 얹는다.
//   edge : 마크가 프레임 하단에 밀착(또는 잘려 나가) blur 확장 여유가 없는 경우.
//          보간만 하고(blur 생략) 정본을 정위치에 얹는다.
//
// 🔴 2026-08-31 실측이 08-30의 「원본 재생성밖에 없다」를 뒤집었다 — 그 판정의 근거였던
//    「마크가 바닥 밀착(여백 ~1px)」이 오측이었다(실제 apt-incheon 27px · apt-jeju-fall 8px).
//    처방을 고르기 전에 **마크 아래 여백을 먼저 재라.** 여백이 있으면 crop이 성립한다.
// 🔴 crop은 업스케일이라 원본이 이미 강압축된 사진이면 용량이 튄다(jeju 77.9→161.5KB).
//    §9-2-A의 q82가 기본이되, `check:images`가 「150KB 초과 원인 점검」을 울리면
//    그 장만 q를 낮춰라 — 「상한을 맞추려 뭉개는 것」이 아니라 「업스케일 이례치를 되돌리는 것」이다.
// 🔴 crop은 구도를 바꾼다. 잘려 나가는 자리에 텍스트·핵심 피사체가 없는지 먼저 보고,
//    적용 후 alt가 「사라진 요소」를 지목하고 있지 않은지 전 로케일 대조할 것.
// 정본 규격은 기존 정본 이미지에서 실측: ♠16px + 16.5px 산세리프, 우측 끝 x≈1185, baseline y≈653.
// 적용 후 반드시 육안 검증(Read로 실물을 연다) + `npm run check:images`.
//
// 사용:
//   node scripts/wm-crop-restamp.mjs crop '[["파일.webp", 남길높이, q?], ...]'
//   node scripts/wm-crop-restamp.mjs edge '[["파일.webp", 지울x, y, w, h], ...]'

const SPADE = 'M12 2C12 2 4 9.5 4 14.5C4 17 5.8 18.8 8 18.8C9.3 18.8 10.4 18.2 11 17.2C11 19.5 10.2 21 8.5 22H15.5C13.8 21 13 19.5 13 17.2C13.6 18.2 14.7 18.8 16 18.8C18.2 18.8 20 17 20 14.5C20 9.5 12 2 12 2Z';

function markSvg({ spadeX = 1008, spadeY = 637, spadeSize = 16, textX = 1032, baseY = 653, fontSize = 16.5, opacity = 0.66 } = {}) {
  const s = spadeSize / 24;
  return Buffer.from(
    `<svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg">
      <g opacity="${opacity}" fill="#d4af37">
        <g transform="translate(${spadeX},${spadeY}) scale(${s})"><path d="${SPADE}"/></g>
        <text x="${textX}" y="${baseY}" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="600" letter-spacing="0.2">holdemmaster.com</text>
      </g>
    </svg>`
  );
}

const mode = process.argv[2];
const JOBS = JSON.parse(process.argv[3] || '[]');
if (!['crop', 'edge'].includes(mode) || !JOBS.length) {
  console.error("사용: node scripts/wm-crop-restamp.mjs crop|edge '[[...]]'");
  process.exit(1);
}

for (const job of JOBS) {
  const f = job[0];
  const p = 'public/images/' + f;
  const before = statSync(p).size;
  let out;

  if (mode === 'crop') {
    const [, keepH, q = 82] = job;
    const w = Math.floor((keepH * 16) / 9);
    const left = Math.floor((1200 - w) / 2);
    out = await sharp(readFileSync(p))
      .extract({ left, top: 0, width: w, height: keepH })
      .resize(1200, 675, { kernel: 'lanczos3' })
      .composite([{ input: markSvg(), top: 0, left: 0 }])
      .webp({ quality: q }).toBuffer();
    console.log(`${f.padEnd(36)} crop ${w}x${keepH} (좌우 ${left}·하단 ${675 - keepH}) q${q}  ${(before/1024).toFixed(1)}KB → ${(out.length/1024).toFixed(1)}KB`);
  } else {
    const [, tx, ty, tw, th] = job;
    const { data, info } = await sharp(readFileSync(p)).raw().toBuffer({ resolveWithObject: true });
    const ch = info.channels, W = info.width, S = 5;
    const px = (x, y, k) => data[(y * W + x) * ch + k];
    const avgAt = (x0, y, k) => { let s = 0; for (let i = 0; i < S; i++) s += px(x0 + i, y, k); return s / S; };
    for (let y = ty; y < Math.min(ty + th, info.height); y++) {
      for (let k = 0; k < 3; k++) {
        const L = avgAt(tx - S - 2, y, k), R = avgAt(tx + tw + 2, y, k);
        for (let x = tx; x < tx + tw; x++) data[(y * W + x) * ch + k] = Math.round(L + (R - L) * ((x - tx) / (tw - 1)));
      }
    }
    const filled = await sharp(data, { raw: { width: info.width, height: info.height, channels: ch } }).png().toBuffer();
    out = await sharp(filled).composite([{ input: markSvg(), top: 0, left: 0 }]).webp({ quality: 82 }).toBuffer();
    console.log(`${f.padEnd(36)} edge ${tw}x${th}@${tx},${ty}  ${(before/1024).toFixed(1)}KB → ${(out.length/1024).toFixed(1)}KB`);
  }

  writeFileSync(p + '.tmp', out); renameSync(p + '.tmp', p);
}
console.log('\n🔴 다음: Read로 실물 육안 검증 + npm run check:images');
