import sharp from 'sharp';
import { readFileSync, readdirSync, writeFileSync } from 'fs';
const OUT='C:/Users/하봄/AppData/Local/Temp/claude/C--Users----Downloads-Holdem-Project/a2f50355-6481-43ef-b927-a907a64068f8/scratchpad/wm/';
const TW=300, TH=104, COLS=4, ROWS=7, PER=COLS*ROWS;
const only = process.argv[2]; // 'hero' | 'body' | undefined(all)
let files = readdirSync('public/images').filter(f=>f.endsWith('.webp')).sort();
if (only==='hero') files=files.filter(f=>f.includes('-hero'));
if (only==='body') files=files.filter(f=>!f.includes('-hero'));
const index=[];
for (let s=0; s*PER<files.length; s++){
  const chunk=files.slice(s*PER,(s+1)*PER);
  const tiles=[];
  for (let i=0;i<chunk.length;i++){
    const f=chunk[i], n=s*PER+i+1;
    const buf=readFileSync('public/images/'+f);
    const md=await sharp(buf).metadata();
    const cw=Math.round(md.width*0.34), chh=Math.round(md.height*0.20);
    const tile=await sharp(buf)
      .extract({left:md.width-cw, top:md.height-chh, width:cw, height:chh})
      .resize({width:TW,height:TH,fit:'fill'})
      .composite([{input:Buffer.from(
        `<svg width="${TW}" height="${TH}"><rect x="0" y="0" width="30" height="16" fill="#000" opacity="0.75"/><text x="4" y="12" font-family="monospace" font-size="12" fill="#0f0">${n}</text><rect x="0" y="0" width="${TW}" height="${TH}" fill="none" stroke="#f0f" stroke-width="1"/></svg>`
      ),top:0,left:0}])
      .png().toBuffer();
    tiles.push({input:tile, top:Math.floor(i/COLS)*TH, left:(i%COLS)*TW});
    index.push(`${n}\t${f}`);
  }
  const sheet=await sharp({create:{width:TW*COLS,height:TH*ROWS,channels:3,background:'#111'}})
    .composite(tiles).png().toBuffer();
  writeFileSync(`${OUT}sheet-${only||'all'}-${String(s+1).padStart(2,'0')}.png`, sheet);
  console.log(`sheet-${only||'all'}-${String(s+1).padStart(2,'0')}.png · ${chunk.length}장`);
}
writeFileSync(`${OUT}index-${only||'all'}.txt`, index.join('\n'));
console.log('총', files.length, '장');
