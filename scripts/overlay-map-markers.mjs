import sharp from "sharp";

const wideSrc =
  "C:/Users/하봄/.cursor/projects/c-Users-Downloads-Holdem-Project/assets/c__Users____AppData_Roaming_Cursor_User_workspaceStorage_4de09bb95ceec665fdc55a69b9d1d1df_images______2026-06-19_135626-b4157d00-bfdf-4fe2-9ce9-a80be8d78fc5.png";
const seoulSrc =
  "C:/Users/하봄/.cursor/projects/c-Users-Downloads-Holdem-Project/assets/c__Users____AppData_Roaming_Cursor_User_workspaceStorage_4de09bb95ceec665fdc55a69b9d1d1df_images______2026-06-19_135649-779f1220-f6d9-4ada-9787-b28c0e3e09f3.png";
const wideDst =
  "C:/Users/하봄/Downloads/Holdem_Project/public/images/apt-incheon-2026-guide-map-wide.webp";
const seoulDst =
  "C:/Users/하봄/Downloads/Holdem_Project/public/images/apt-incheon-2026-guide-map-seoul.webp";

function pin(x, y, color) {
  return `<g transform="translate(${x},${y})">
    <path d="M0,-18 C-10,-18 -16,-11 -16,-4 C-16,4 -8,14 0,26 C8,14 16,4 16,-4 C16,-11 10,-18 0,-18 Z" fill="${color}" stroke="#fff" stroke-width="2.5"/>
    <circle cx="0" cy="-4" r="5.5" fill="#fff"/>
  </g>`;
}

function label(x, y, text, anchor = "middle", dy = -28) {
  return `<text x="${x}" y="${y + dy}" text-anchor="${anchor}"
    font-family="Arial,Helvetica,sans-serif" font-size="13" font-weight="800"
    fill="#111" stroke="#fff" stroke-width="3.5" paint-order="stroke">${text}</text>`;
}

// ── Map 1: wide Incheon→Seoul  (1024×526) ───────────────────────────────
async function renderWide() {
  const W = 1024, H = 526;

  // AREX 점선: Paradise City 실제 핀 위치 → 홍대입구역 방향
  const arexPath = "M155,318 L260,290 L390,265 L490,245 L540,228";

  // 마커: 와이드맵에서 Paradise City + Hongdae만 (경복궁은 서울 확대맵에서)
  const markers = [
    { name: "Paradise City",  x: 155, y: 318, color: "#E53935", anchor: "end",    dx: -14, dy: -10 },
    { name: "Hongdae Station",x: 540, y: 228, color: "#1E88E5", anchor: "middle", dy: -30 },
  ];

  const legend = [
    ["Paradise City",  "#E53935"],
    ["Hongdae Station","#1E88E5"],
  ];

  let legendSvg = "";
  legend.forEach(([name, color], i) => {
    const y = 22 + i * 22;
    legendSvg += `<circle cx="20" cy="${y}" r="7" fill="${color}"/>
    <text x="34" y="${y + 4}" font-family="Arial" font-size="12" font-weight="700">${name}</text>`;
  });

  const markerSvg = markers.map((m) =>
    pin(m.x, m.y, m.color) +
    label(m.x + (m.dx ?? 0), m.y, m.name, m.anchor ?? "middle", m.dy ?? -28)
  ).join("");

  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="190" height="88" rx="8"
      fill="rgba(255,255,255,0.93)" stroke="rgba(0,0,0,0.18)"/>
    ${legendSvg}
    <text x="20" y="82" font-family="Arial" font-size="10" font-weight="700" fill="#1565C0">
      -- AREX Airport Railroad (approx.)
    </text>
    <path d="${arexPath}" fill="none" stroke="#1565C0"
      stroke-width="4" stroke-dasharray="10,6" stroke-linecap="round"/>
    ${markerSvg}
    <text x="512" y="514" text-anchor="middle"
      font-family="Arial" font-size="11" fill="#555">
      Paradise City → Hongdae: ~60 min via AREX
    </text>
  </svg>`;

  const info = await sharp(wideSrc)
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .resize(1200)
    .webp({ quality: 58 })
    .toFile(wideDst);
  console.log("wide", Math.round(info.size / 1024) + "KB");
}

// ── Map 2: Seoul detail  (1024×665) ─────────────────────────────────────
async function renderSeoul() {
  const W = 1024, H = 665;

  // 실제 지도 아이콘 위치 기준
  // 경복궁: 지도 상 궁 아이콘 위치
  // 홍대입구역: Mapo-gu 지하철역 교차점
  const markers = [
    { name: "Hongdae Station",  x: 238, y: 268, color: "#1E88E5", anchor: "end",    dx: -14, dy: -10 },
    { name: "Gyeongbokgung",    x: 462, y: 183, color: "#8E24AA", anchor: "middle", dy: -30 },
  ];

  const legend = [
    ["Hongdae Station","#1E88E5"],
    ["Gyeongbokgung",  "#8E24AA"],
  ];

  let legendSvg = "";
  legend.forEach(([name, color], i) => {
    const y = 22 + i * 22;
    legendSvg += `<circle cx="20" cy="${y}" r="7" fill="${color}"/>
    <text x="34" y="${y + 4}" font-family="Arial" font-size="12" font-weight="700">${name}</text>`;
  });

  const markerSvg = markers.map((m) =>
    pin(m.x, m.y, m.color) +
    label(m.x, m.y, m.name, m.anchor, m.dy)
  ).join("");

  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="175" height="66" rx="8"
      fill="rgba(255,255,255,0.93)" stroke="rgba(0,0,0,0.18)"/>
    ${legendSvg}
    ${markerSvg}
    <text x="512" y="653" text-anchor="middle"
      font-family="Arial" font-size="11" fill="#555">
      Central Seoul — Hongdae and Gyeongbokgung Palace
    </text>
  </svg>`;

  const info = await sharp(seoulSrc)
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .resize(1200)
    .webp({ quality: 52 })
    .toFile(seoulDst);
  console.log("seoul", Math.round(info.size / 1024) + "KB");
}

await renderWide();
await renderSeoul();
