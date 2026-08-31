import sharp from 'sharp';
import { readFileSync, writeFileSync, renameSync, statSync } from 'fs';

// wm-restamp — 구형 워드마크("HoldemMaster" · URL 없음)를 지우고 정본(♠ + holdemmaster.com)을 얹는다.
// 사용: node scripts/wm-restamp.mjs '[["파일.webp", 지울x, y, w, h], ...]'
//
// 🔴 「구형은 두고 아래에 URL만 추가」는 불가 — 2026-08-30 실측 결과 구형 마크가
//    하단 여백 15~25px에 붙어 있어 글자를 넣을 자리가 없다. 그래서 제거 후 재스탬프다.
// 🔴 배경이 사람·군중처럼 복잡하면 쓰지 마라 — 좌우 보간이 형체를 뭉갠다.
//    그때는 `wm-crop-restamp.mjs`(크롭 후 16:9 원치수 복원)를 써라.
//    ⚠ 2026-08-30에 적었던 「apt-incheon·apt-jeju-fall은 원본 재생성밖에 없다」는 08-31에 뒤집혔다.
//    그 판정의 근거였던 「마크가 바닥 밀착(여백 ~1px)」이 실측 오류였다(실제 27px·8px) → 크롭이 성립.
// 인페인팅 = wm-fix.mjs와 같은 행 단위 좌우 선형 보간(배경 그라디언트를 따라간다).
// 정본 규격은 기존 정본 이미지에서 실측: ♠16px + 16.5px 산세리프, 우측 끝 x≈1185, baseline y≈653.
// 적용 후 반드시 육안 검증할 것(철자·잔재·인페인팅 자국) + `npm run check:images`.

const SPADE = 'M12 2C12 2 4 9.5 4 14.5C4 17 5.8 18.8 8 18.8C9.3 18.8 10.4 18.2 11 17.2C11 19.5 10.2 21 8.5 22H15.5C13.8 21 13 19.5 13 17.2C13.6 18.2 14.7 18.8 16 18.8C18.2 18.8 20 17 20 14.5C20 9.5 12 2 12 2Z';

function markSvg({ spadeX = 1008, spadeY = 637, spadeSize = 16, textX = 1032, baseY = 653, fontSize = 16.5, opacity = 0.66 }) {
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

// [파일, 지울 영역 x, y, w, h]  — 좌표는 육안 실측
const JOBS = JSON.parse(process.argv[2]);

for (const [f, tx, ty, tw, th] of JOBS) {
  const p = 'public/images/' + f;
  const before = statSync(p).size;
  const src = readFileSync(p);
  const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels, W = info.width, S = 5;
  const px = (x, y, k) => data[(y * W + x) * ch + k];
  const avgAt = (x0, y, k) => { let s = 0; for (let i = 0; i < S; i++) s += px(x0 + i, y, k); return s / S; };
  for (let y = ty; y < ty + th; y++) {
    for (let k = 0; k < 3; k++) {
      const L = avgAt(tx - S - 2, y, k), R = avgAt(tx + tw + 2, y, k);
      for (let x = tx; x < tx + tw; x++) {
        data[(y * W + x) * ch + k] = Math.round(L + (R - L) * ((x - tx) / (tw - 1)));
      }
    }
  }
  const filled = await sharp(data, { raw: { width: info.width, height: info.height, channels: ch } }).png().toBuffer();
  const soft = await sharp(filled).extract({ left: tx - 4, top: ty - 4, width: tw + 8, height: th + 8 }).blur(2.2).png().toBuffer();
  const out = await sharp(filled)
    .composite([{ input: soft, top: ty - 4, left: tx - 4 }, { input: markSvg({}), top: 0, left: 0 }])
    .webp({ quality: 82 }).toBuffer();
  writeFileSync(p + '.tmp', out); renameSync(p + '.tmp', p);
  console.log(f.padEnd(38), (before / 1024).toFixed(1) + 'KB →', (out.length / 1024).toFixed(1) + 'KB');
}
